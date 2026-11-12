---
type: reference
title: Build a list-detail layout
description: "Public source: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-layouts-adaptive-list-detail-backnavigationbehavior-options-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#backnavigationbehavior_options
    revision: web:compose-guide-layouts-adaptive-list-detail:content@sha256:cf6216cd3b2bba07597c02990554b62903407cf6a3f574afc78d5ff69880c35d
    sha256: f9c96d101edde166c8ac10840fc016fefe73ed06e684aecac5c1df669d131adf
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: The following section uses the example of an email app with a list of emails in one pane and a detailed view in the other.
  - id: live-compose-guide-layouts-adaptive-list-detail-basic-usage-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#basic-usage
    revision: web:compose-guide-layouts-adaptive-list-detail:content@sha256:cf6216cd3b2bba07597c02990554b62903407cf6a3f574afc78d5ff69880c35d
    sha256: 2201cb70c131649a5ebb2d815138e6d618d9ada83e51425981d3c1baeda53438
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Implement NavigableListDetailPaneScaffold as follows:

      Use a class that represents the selected content. Use a Parcelable class to support saving and restoring the selected list item. Use the kotlin-parcelize plugin to generate the code for you.

      Create a ThreePaneScaffoldNavigator with rememberListDetailPaneScaffoldNavigator.

      This navigator is used to move between the list, detail, and extra panes. By declaring a generic type, the navigator also tracks the state of the scaffold (that is, which MyItem is being displayed). Since this type is parcelable, the state can be saved and restored by the navigator to automatically handle configuration changes.

      Pass the navigator to the NavigableListDetailPaneScaffold composable.

      Supply your list pane implementation to the NavigableListDetailPaneScaffold. Use AnimatedPane to apply the default pane animations during navigation. Then use ThreePaneScaffoldNavigator to navigate to the detail pane, ListDetailPaneScaffoldRole.Detail, and display the passed item.

      Include your detail pane implementation in NavigableListDetailPaneScaffold.

      When navigation is complete, currentDestination contains the pane your app has navigated to, including the content displayed in the pane. The contentKey property is the same type specified in the original call so you can access any data that you need to display.

      Optionally, change the defaultBackBehavior in NavigableListDetailPaneScaffold. By default, NavigableListDetailPaneScaffold uses PopUntilScaffoldValueChange for defaultBackBehavior.

      If your app requires a different back navigation pattern, you can override this behavior by specifying another BackNavigationBehavior option.
  - id: live-compose-guide-layouts-adaptive-list-detail-declare-dependencies-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#declare-dependencies
    revision: web:compose-guide-layouts-adaptive-list-detail:content@sha256:cf6216cd3b2bba07597c02990554b62903407cf6a3f574afc78d5ff69880c35d
    sha256: 3547f8331c1a06c48938fa7aa2385f78ab0cacd5dd9a1be41bc554a62afbfc33
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      NavigableListDetailPaneScaffold is part of the Material 3 adaptive navigation library.

      Add the following three related dependencies to the build.gradle file of your app or module:
  - id: live-compose-guide-layouts-adaptive-list-detail-groovy-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#groovy
    revision: web:compose-guide-layouts-adaptive-list-detail:content@sha256:cf6216cd3b2bba07597c02990554b62903407cf6a3f574afc78d5ff69880c35d
    sha256: 2c458f60f5e54872961e02a7ed4d15475676fa4e6646a788a4f08b371f23fd6b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      implementation 'androidx.compose.material3.adaptive:adaptive'
      implementation 'androidx.compose.material3.adaptive:adaptive-layout'
      implementation 'androidx.compose.material3.adaptive:adaptive-navigation'

      adaptive: Low-level building blocks such as HingeInfo and Posture

      adaptive-layout: Adaptive layouts such as ListDetailPaneScaffold and SupportingPaneScaffold

      adaptive-navigation: Composables for navigating within and between panes, as well as adaptive layouts that support navigation by default such as NavigableListDetailPaneScaffold and NavigableSupportingPaneScaffold

      Ensure your project includes compose-material3-adaptive version 1.1.0-beta1 or higher.
  - id: live-compose-guide-layouts-adaptive-list-detail-implement-list-detail-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#implement-list-detail
    revision: web:compose-guide-layouts-adaptive-list-detail:content@sha256:cf6216cd3b2bba07597c02990554b62903407cf6a3f574afc78d5ff69880c35d
    sha256: 2e22a71f103846aca3a3af6b982a081bd80d0154c56e748270f69948f8aa6ed6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      NavigableListDetailPaneScaffold is a composable that simplifies implementing a list-detail layout in Jetpack Compose. It wraps ListDetailPaneScaffold and adds built-in navigation and predictive back animations.

      A list-detail scaffold supports up to three panes:

      List pane: Displays a collection of items.

      Detail pane: Shows the details of a selected item.

      Extra pane (optional): Provides additional context when needed.

      The scaffold adapts based on window size:

      In large windows, the list and detail panes appear side by side.

      In small windows, only one pane is visible at a time, switching as users navigate.
  - id: live-compose-guide-layouts-adaptive-list-detail-kts-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#kts
    revision: web:compose-guide-layouts-adaptive-list-detail:content@sha256:cf6216cd3b2bba07597c02990554b62903407cf6a3f574afc78d5ff69880c35d
    sha256: ea73a9689ce3fce788292d54c309b7186fff43eeb0a3a38dfc94b78e3bda14c3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      implementation("androidx.compose.material3.adaptive:adaptive")
      implementation("androidx.compose.material3.adaptive:adaptive-layout")
      implementation("androidx.compose.material3.adaptive:adaptive-navigation")
  - id: live-compose-guide-layouts-adaptive-list-detail-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#main-content
    revision: web:compose-guide-layouts-adaptive-list-detail:content@sha256:cf6216cd3b2bba07597c02990554b62903407cf6a3f574afc78d5ff69880c35d
    sha256: c1f6147ed801663fab5e0b82f941fa47e2d78a84741dc2bf2b6c2352c6e56ce7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      List-detail is a UI pattern that consists of a dual-pane layout where one pane presents a list of items and another pane displays the details of items selected from the list.

      The pattern is particularly useful for applications that provide in-depth information about elements of large collections, for example, an email client that has a list of emails and the detailed content of each email message. List-detail can also be used for less critical paths such as dividing app preferences into a list of categories with the preferences for each category in the detail pane.

      Figure 1.

      When enough screen size is available, the detail pane is shown alongside the list pane.

      Figure 2.

      When screen size is limited, the detail pane (since an item has been selected) takes over the whole space.
  - id: live-compose-guide-layouts-adaptive-list-detail-opt-in-predictive-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#opt-in-predictive
    revision: web:compose-guide-layouts-adaptive-list-detail:content@sha256:cf6216cd3b2bba07597c02990554b62903407cf6a3f574afc78d5ff69880c35d
    sha256: d2e73cb03fbe4dabff0228a903a28f5f48e5586239968998490a2b229fc2e36b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To enable predictive back animations in Android 15 or lower, you must opt-in to support the predictive back gesture. To opt-in, add android:enableOnBackInvokedCallback="true" to the <application> tag or individual <activity> tags within your AndroidManifest.xml file. For more information, see Opt-in to the predictive back gesture.

      Once your app targets Android 16 (API level 36) or higher, predictive back is enabled by default.
  - id: live-compose-guide-layouts-adaptive-list-detail-poplatest-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#poplatest
    revision: web:compose-guide-layouts-adaptive-list-detail:content@sha256:cf6216cd3b2bba07597c02990554b62903407cf6a3f574afc78d5ff69880c35d
    sha256: f14c0d4c71b4c4fa0218d70982171cf1a9de103bb3e74346533f881eee0fcd86
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This option removes only the most recent destination from the backstack. Use this option for back navigation without skipping intermediate states.

      After you implement these steps, your code should look similar to the following:

      NavigableListDetailPaneScaffold(
          navigator = navigator,
          listPane = {
              AnimatedPane {
                  ListContent(
                      words = sampleWords,
                      selectionState = navigator.currentDestination?.contentKey?.let {
                          SelectionVisibilityState.ShowSelection(it)
                      } ?: SelectionVisibilityState.NoSelection,
                      onWordClick = { word ->
                          scope.launch {
                              navigator.navigateTo(ListDetailPaneScaffoldRole.Detail, word)
                          }
                      },
                      animatedVisibilityScope = this@AnimatedPane,
                      sharedTransitionScope = this@SharedTransitionLayout
                  )
              }
          },
          detailPane = {
              AnimatedPane {
                  DetailContent(
                      definedWord = navigator.currentDestination?.contentKey,
                      animatedVisibilityScope = this@AnimatedPane,
                      sharedTransitionScope = this@SharedTransitionLayout,
                      onClosePane = {
                          scope.launch {
                              navigator.navigateBack(
                                  backNavigationBehavior = BackNavigationBehavior.PopUntilScaffoldValueChange
                              )

                          }
                      }
                  )
              }
          }ListDetailSample.kt

      Previous

      arrow_back

      Canonical layouts

      Next

      Build a supporting pane layout

      arrow_forward
  - id: live-compose-guide-layouts-adaptive-list-detail-popuntilcontentchange-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#popuntilcontentchange
    revision: web:compose-guide-layouts-adaptive-list-detail:content@sha256:cf6216cd3b2bba07597c02990554b62903407cf6a3f574afc78d5ff69880c35d
    sha256: b251937556cdd688f837267687a25fa832ad69bce9a37c3a6c15acc95f93dfc5
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This behavior prioritizes the content displayed. If you view Item 1 and then Item 2, pressing back will revert to Item 1, regardless of the layout.

      Consider the following examples:

      Multi-Pane: You view Item 1 in the detail pane, then click Item 2 in the list. The detail pane updates. Pressing back will restore the detail pane to Item 1.

      Single-Pane: The same content reversion occurs.

      Use this when your user expects to return to the previously viewed content with the back action.
  - id: live-compose-guide-layouts-adaptive-list-detail-popuntilcurrentdestinationchange-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#popuntilcurrentdestinationchange
    revision: web:compose-guide-layouts-adaptive-list-detail:content@sha256:cf6216cd3b2bba07597c02990554b62903407cf6a3f574afc78d5ff69880c35d
    sha256: ca886894fce8d0eee0e99ffe3472643ebe3cb3d0476e54f7232288d34b722942
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This behavior pops the back stack until the current navigation destination changes. This applies equally to single and multi-pane layouts.

      Consider the following examples:

      Regardless of whether you're in a single or multi-pane layout, pressing back will always move the focus from the highlighted navigation element to the previous destination. In our email app, this means the visual indication of the selected pane will shift.

      Use this when maintaining a clear visual indication of the current navigation is crucial for the user experience.
  - id: live-compose-guide-layouts-adaptive-list-detail-popuntilscaffoldvaluechange-default-and-recommended-in-most-cases-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#popuntilscaffoldvaluechange_default_and_recommended_in_most_cases
    revision: web:compose-guide-layouts-adaptive-list-detail:content@sha256:cf6216cd3b2bba07597c02990554b62903407cf6a3f574afc78d5ff69880c35d
    sha256: 20faed818c009f32c5c028c9b51fed428327f3ccbcc27016390255132a3b0483
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This behavior focuses on changes to the overall layout structure. In a multi-pane setup, changing the email content in the detailed pane doesn't alter the underlying layout structure. Therefore, the back button might exit the app or the current navigation graph because there's no layout change to revert to within the current context. In a single-pane layout, pressing back will skip through content changes within the detail view and return to the list view, as this represents a clear layout change.

      Consider the following examples:

      Multi-Pane: You're viewing an email (Item 1) in the detail pane. Clicking on another email (Item 2) updates the detail pane, but the list and detail panes remain visible. Pressing back might exit the app or the current navigation flow.

      Single-Pane: You view Item 1, then Item 2, pressing back will return you directly to the email list pane.

      Use this when you want users to perceive distinct layout transitions with each back action.
compose:
  id: live-compose-guide-layouts-adaptive-list-detail
  artifact: androidx.compose.material3.adaptive:adaptive-navigation
  fqn: androidx.compose.material3.adaptive.navigation
  sections:
    - id: live-compose-guide-layouts-adaptive-list-detail-backnavigationbehavior-options
      title: BackNavigationBehavior options
      aliases: []
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive-navigation
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-list-detail-backnavigationbehavior-options-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-list-detail-basic-usage
      title: Basic usage
      aliases:
        - androidx.compose.material3.adaptive.navigation.NavigableListDetailPaneScaffold
        - androidx.compose.material3.adaptive.navigation.rememberListDetailPaneScaffoldNavigator
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive-navigation
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-list-detail-basic-usage-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-list-detail-declare-dependencies
      title: Declare dependencies
      aliases:
        - androidx.compose.material3.adaptive.navigation.NavigableListDetailPaneScaffold
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive-navigation
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-list-detail-declare-dependencies-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-list-detail-groovy
      title: Groovy
      aliases:
        - androidx.compose.material3.adaptive.layout.ListDetailPaneScaffold
        - androidx.compose.material3.adaptive.navigation.NavigableListDetailPaneScaffold
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive-navigation
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-list-detail-groovy-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-list-detail-implement-list-detail
      title: Implement the List-Detail Pattern with NavigableListDetailPaneScaffold
      aliases:
        - androidx.compose.material3.adaptive.layout.ListDetailPaneScaffold
        - androidx.compose.material3.adaptive.navigation.NavigableListDetailPaneScaffold
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive-navigation
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-list-detail-implement-list-detail-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-list-detail-kts
      title: Kotlin
      aliases: []
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive-navigation
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-list-detail-kts-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-list-detail-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive-navigation
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-list-detail-main-content-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-list-detail-opt-in-predictive
      title: Opt-in to the predictive back gesture
      aliases: []
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive-navigation
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-list-detail-opt-in-predictive-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-list-detail-poplatest
      title: PopLatest
      aliases:
        - androidx.compose.material3.adaptive.navigation.NavigableListDetailPaneScaffold
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive-navigation
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-list-detail-poplatest-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-list-detail-popuntilcontentchange
      title: PopUntilContentChange
      aliases: []
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive-navigation
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-list-detail-popuntilcontentchange-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-list-detail-popuntilcurrentdestinationchange
      title: PopUntilCurrentDestinationChange
      aliases: []
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive-navigation
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-list-detail-popuntilcurrentdestinationchange-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-list-detail-popuntilscaffoldvaluechange-default-and-recommended-in-most-cases
      title: PopUntilScaffoldValueChange (Default and recommended in most cases)
      aliases: []
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive-navigation
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-list-detail-popuntilscaffoldvaluechange-default-and-recommended-in-most-cases-source
      relatedIds: []
---

# Build a list-detail layout

Public source: https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail

## BackNavigationBehavior options

The following section uses the example of an email app with a list of emails in one pane and a detailed view in the other.

Sources: [live-compose-guide-layouts-adaptive-list-detail-backnavigationbehavior-options-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#backnavigationbehavior_options)

## Basic usage

Implement NavigableListDetailPaneScaffold as follows:

Use a class that represents the selected content. Use a Parcelable class to support saving and restoring the selected list item. Use the kotlin-parcelize plugin to generate the code for you.

Create a ThreePaneScaffoldNavigator with rememberListDetailPaneScaffoldNavigator.

This navigator is used to move between the list, detail, and extra panes. By declaring a generic type, the navigator also tracks the state of the scaffold (that is, which MyItem is being displayed). Since this type is parcelable, the state can be saved and restored by the navigator to automatically handle configuration changes.

Pass the navigator to the NavigableListDetailPaneScaffold composable.

Supply your list pane implementation to the NavigableListDetailPaneScaffold. Use AnimatedPane to apply the default pane animations during navigation. Then use ThreePaneScaffoldNavigator to navigate to the detail pane, ListDetailPaneScaffoldRole.Detail, and display the passed item.

Include your detail pane implementation in NavigableListDetailPaneScaffold.

When navigation is complete, currentDestination contains the pane your app has navigated to, including the content displayed in the pane. The contentKey property is the same type specified in the original call so you can access any data that you need to display.

Optionally, change the defaultBackBehavior in NavigableListDetailPaneScaffold. By default, NavigableListDetailPaneScaffold uses PopUntilScaffoldValueChange for defaultBackBehavior.

If your app requires a different back navigation pattern, you can override this behavior by specifying another BackNavigationBehavior option.

Sources: [live-compose-guide-layouts-adaptive-list-detail-basic-usage-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#basic-usage)

## Declare dependencies

NavigableListDetailPaneScaffold is part of the Material 3 adaptive navigation library.

Add the following three related dependencies to the build.gradle file of your app or module:

Sources: [live-compose-guide-layouts-adaptive-list-detail-declare-dependencies-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#declare-dependencies)

## Groovy

implementation 'androidx.compose.material3.adaptive:adaptive'
implementation 'androidx.compose.material3.adaptive:adaptive-layout'
implementation 'androidx.compose.material3.adaptive:adaptive-navigation'

adaptive: Low-level building blocks such as HingeInfo and Posture

adaptive-layout: Adaptive layouts such as ListDetailPaneScaffold and SupportingPaneScaffold

adaptive-navigation: Composables for navigating within and between panes, as well as adaptive layouts that support navigation by default such as NavigableListDetailPaneScaffold and NavigableSupportingPaneScaffold

Ensure your project includes compose-material3-adaptive version 1.1.0-beta1 or higher.

Sources: [live-compose-guide-layouts-adaptive-list-detail-groovy-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#groovy)

## Implement the List-Detail Pattern with NavigableListDetailPaneScaffold

NavigableListDetailPaneScaffold is a composable that simplifies implementing a list-detail layout in Jetpack Compose. It wraps ListDetailPaneScaffold and adds built-in navigation and predictive back animations.

A list-detail scaffold supports up to three panes:

List pane: Displays a collection of items.

Detail pane: Shows the details of a selected item.

Extra pane (optional): Provides additional context when needed.

The scaffold adapts based on window size:

In large windows, the list and detail panes appear side by side.

In small windows, only one pane is visible at a time, switching as users navigate.

Sources: [live-compose-guide-layouts-adaptive-list-detail-implement-list-detail-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#implement-list-detail)

## Kotlin

implementation("androidx.compose.material3.adaptive:adaptive")
implementation("androidx.compose.material3.adaptive:adaptive-layout")
implementation("androidx.compose.material3.adaptive:adaptive-navigation")

Sources: [live-compose-guide-layouts-adaptive-list-detail-kts-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#kts)

## Introduction

List-detail is a UI pattern that consists of a dual-pane layout where one pane presents a list of items and another pane displays the details of items selected from the list.

The pattern is particularly useful for applications that provide in-depth information about elements of large collections, for example, an email client that has a list of emails and the detailed content of each email message. List-detail can also be used for less critical paths such as dividing app preferences into a list of categories with the preferences for each category in the detail pane.

Figure 1.

When enough screen size is available, the detail pane is shown alongside the list pane.

Figure 2.

When screen size is limited, the detail pane (since an item has been selected) takes over the whole space.

Sources: [live-compose-guide-layouts-adaptive-list-detail-main-content-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#main-content)

## Opt-in to the predictive back gesture

To enable predictive back animations in Android 15 or lower, you must opt-in to support the predictive back gesture. To opt-in, add android:enableOnBackInvokedCallback="true" to the <application> tag or individual <activity> tags within your AndroidManifest.xml file. For more information, see Opt-in to the predictive back gesture.

Once your app targets Android 16 (API level 36) or higher, predictive back is enabled by default.

Sources: [live-compose-guide-layouts-adaptive-list-detail-opt-in-predictive-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#opt-in-predictive)

## PopLatest

This option removes only the most recent destination from the backstack. Use this option for back navigation without skipping intermediate states.

After you implement these steps, your code should look similar to the following:

NavigableListDetailPaneScaffold(
    navigator = navigator,
    listPane = {
        AnimatedPane {
            ListContent(
                words = sampleWords,
                selectionState = navigator.currentDestination?.contentKey?.let {
                    SelectionVisibilityState.ShowSelection(it)
                } ?: SelectionVisibilityState.NoSelection,
                onWordClick = { word ->
                    scope.launch {
                        navigator.navigateTo(ListDetailPaneScaffoldRole.Detail, word)
                    }
                },
                animatedVisibilityScope = this@AnimatedPane,
                sharedTransitionScope = this@SharedTransitionLayout
            )
        }
    },
    detailPane = {
        AnimatedPane {
            DetailContent(
                definedWord = navigator.currentDestination?.contentKey,
                animatedVisibilityScope = this@AnimatedPane,
                sharedTransitionScope = this@SharedTransitionLayout,
                onClosePane = {
                    scope.launch {
                        navigator.navigateBack(
                            backNavigationBehavior = BackNavigationBehavior.PopUntilScaffoldValueChange
                        )

                    }
                }
            )
        }
    }ListDetailSample.kt

Previous

arrow_back

Canonical layouts

Next

Build a supporting pane layout

arrow_forward

Sources: [live-compose-guide-layouts-adaptive-list-detail-poplatest-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#poplatest)

## PopUntilContentChange

This behavior prioritizes the content displayed. If you view Item 1 and then Item 2, pressing back will revert to Item 1, regardless of the layout.

Consider the following examples:

Multi-Pane: You view Item 1 in the detail pane, then click Item 2 in the list. The detail pane updates. Pressing back will restore the detail pane to Item 1.

Single-Pane: The same content reversion occurs.

Use this when your user expects to return to the previously viewed content with the back action.

Sources: [live-compose-guide-layouts-adaptive-list-detail-popuntilcontentchange-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#popuntilcontentchange)

## PopUntilCurrentDestinationChange

This behavior pops the back stack until the current navigation destination changes. This applies equally to single and multi-pane layouts.

Consider the following examples:

Regardless of whether you're in a single or multi-pane layout, pressing back will always move the focus from the highlighted navigation element to the previous destination. In our email app, this means the visual indication of the selected pane will shift.

Use this when maintaining a clear visual indication of the current navigation is crucial for the user experience.

Sources: [live-compose-guide-layouts-adaptive-list-detail-popuntilcurrentdestinationchange-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#popuntilcurrentdestinationchange)

## PopUntilScaffoldValueChange (Default and recommended in most cases)

This behavior focuses on changes to the overall layout structure. In a multi-pane setup, changing the email content in the detailed pane doesn't alter the underlying layout structure. Therefore, the back button might exit the app or the current navigation graph because there's no layout change to revert to within the current context. In a single-pane layout, pressing back will skip through content changes within the detail view and return to the list view, as this represents a clear layout change.

Consider the following examples:

Multi-Pane: You're viewing an email (Item 1) in the detail pane. Clicking on another email (Item 2) updates the detail pane, but the list and detail panes remain visible. Pressing back might exit the app or the current navigation flow.

Single-Pane: You view Item 1, then Item 2, pressing back will return you directly to the email list pane.

Use this when you want users to perceive distinct layout transitions with each back action.

Sources: [live-compose-guide-layouts-adaptive-list-detail-popuntilscaffoldvaluechange-default-and-recommended-in-most-cases-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail#popuntilscaffoldvaluechange_default_and_recommended_in_most_cases)
