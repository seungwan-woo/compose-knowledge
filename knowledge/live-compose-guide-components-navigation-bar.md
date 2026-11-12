---
type: reference
title: Navigation bar
description: "Public source: https://developer.android.com/develop/ui/compose/components/navigation-bar"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-navigation-bar-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/navigation-bar#additional-resources
    revision: web:compose-guide-components-navigation-bar:content@sha256:c9a45175dd7e1f1892f1f7683667d1de3dc455a8fc5e8ca204a397eb98553b84
    sha256: 22acd0fb878671872ca74198dd3eef419aea180cdd13265f78c2e181750bdeb9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Material 3 - Navigation Bar

      Navigation with Compose
  - id: live-compose-guide-components-navigation-bar-api-surface-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/navigation-bar#api-surface
    revision: web:compose-guide-components-navigation-bar:content@sha256:c9a45175dd7e1f1892f1f7683667d1de3dc455a8fc5e8ca204a397eb98553b84
    sha256: 4ca8ba627a15be20ad09d4af87a156eb18be6dd9aeec165bed9922f9f75091fd
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use the NavigationBar and NavigationBarItem composables to implement destination switching logic. Each NavigationBarItem represents a singular destination.

      NavigationBarItem includes the following key parameters:

      selected: Determines whether the current item is visually highlighted.

      onClick(): Defines the action to be performed when the user clicks on the item. Logic for handling navigation events, updating the selected item state, or loading corresponding content belongs here.

      label: Displays text within the item. Optional.

      icon: Displays an icon within the item. Optional.
  - id: live-compose-guide-components-navigation-bar-example-top-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/navigation-bar#example%3A-top
    revision: web:compose-guide-components-navigation-bar:content@sha256:c9a45175dd7e1f1892f1f7683667d1de3dc455a8fc5e8ca204a397eb98553b84
    sha256: 1481e20f1e06954212af990be572345822dd268c6c66f5693869500eff4d73e9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following snippet implements a bottom navigation bar with items so users can navigate between different screens in an app:

      @Composable
      fun NavigationBarExample(modifier: Modifier = Modifier) {
          val navController = rememberNavController()
          val startDestination = Destination.SONGS
          var selectedDestination by rememberSaveable { mutableIntStateOf(startDestination.ordinal) }

          Scaffold(
              modifier = modifier,
              bottomBar = {
                  NavigationBar(windowInsets = NavigationBarDefaults.windowInsets) {
                      Destination.entries.forEachIndexed { index, destination ->
                          NavigationBarItem(
                              selected = selectedDestination == index,
                              onClick = {
                                  navController.navigate(route = destination.route)
                                  selectedDestination = index
                              },
                              icon = {
                                  Icon(
                                      destination.icon,
                                      contentDescription = destination.contentDescription
                                  )
                              },
                              label = { Text(destination.label) }
                          )
                      }
                  }
              }
          ) { contentPadding ->
              AppNavHost(navController, startDestination, modifier = Modifier.padding(contentPadding))
          }
      }Navigation.kt
  - id: live-compose-guide-components-navigation-bar-key-points-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/navigation-bar#key-points
    revision: web:compose-guide-components-navigation-bar:content@sha256:c9a45175dd7e1f1892f1f7683667d1de3dc455a8fc5e8ca204a397eb98553b84
    sha256: 50c208982a09c96a2bad9859260143677aa885f0f0a10d948d803788aa345f76
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      NavigationBar displays a collection of items, with each item corresponding to a Destination.

      val navController = rememberNavController() creates and remembers an instance of NavHostController, which manages the navigation within a NavHost.

      var selectedDestination by rememberSaveable { mutableIntStateOf(startDestination.ordinal) } manages the state of the selected item. startDestination.ordinal gets the numerical index (position) of the Destination.SONGS enum entry.

      When an item is clicked, navController.navigate(route = destination.route) is called to navigate to the corresponding screen.

      The onClick lambda of the NavigationBarItem updates the selectedDestination state to visually highlight the clicked item.

      The navigation logic calls the AppNavHost composable, passing the navController and startDestination, to display the actual content of the selected screen.
  - id: live-compose-guide-components-navigation-bar-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/navigation-bar#main-content
    revision: web:compose-guide-components-navigation-bar:content@sha256:c9a45175dd7e1f1892f1f7683667d1de3dc455a8fc5e8ca204a397eb98553b84
    sha256: 898e09dc82e231c3314c288f2bfaa08f10d035f09d54625a699ac571a6147fc0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The navigation bar allows users to switch between destinations in an app. You should use navigation bars for:

      Three to five destinations of equal importance

      Compact window sizes

      Consistent destinations across app screens

      Figure 1.

      A navigation bar with 4 destinations.

      This page shows you how to display a navigation bar in your app with related screens and basic navigation.
  - id: live-compose-guide-components-navigation-bar-result-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/navigation-bar#result
    revision: web:compose-guide-components-navigation-bar:content@sha256:c9a45175dd7e1f1892f1f7683667d1de3dc455a8fc5e8ca204a397eb98553b84
    sha256: cabb338e42e8107e4cb3ad9fb0ba1e5c05fc569952c5f37f0b72583489e8c077
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following image shows the navigation bar resulting from the previous snippet:

      Figure 2.

      A navigation bar that contains 3 destinations with associated icons: Songs, Album, and Playlist.
compose:
  id: live-compose-guide-components-navigation-bar
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-navigation-bar-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-navigation-bar-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-components-navigation-bar-api-surface
      title: API surface
      aliases:
        - androidx.compose.material3.NavigationBar
        - androidx.compose.material3.NavigationBarItem
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-navigation-bar-api-surface-source
      relatedIds: []
    - id: live-compose-guide-components-navigation-bar-example-top
      title: "Example: Bottom navigation bar"
      aliases:
        - androidx.compose.material3.NavigationBar
        - androidx.compose.material3.NavigationBarItem
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-navigation-bar-example-top-source
      relatedIds: []
    - id: live-compose-guide-components-navigation-bar-key-points
      title: Key points
      aliases:
        - androidx.compose.material3.NavigationBar
        - androidx.compose.material3.NavigationBarItem
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-navigation-bar-key-points-source
      relatedIds: []
    - id: live-compose-guide-components-navigation-bar-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-navigation-bar-main-content-source
      relatedIds: []
    - id: live-compose-guide-components-navigation-bar-result
      title: Result
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-navigation-bar-result-source
      relatedIds: []
---

# Navigation bar

Public source: https://developer.android.com/develop/ui/compose/components/navigation-bar

## Additional resources

Material 3 - Navigation Bar

Navigation with Compose

Sources: [live-compose-guide-components-navigation-bar-additional-resources-source](https://developer.android.com/develop/ui/compose/components/navigation-bar#additional-resources)

## API surface

Use the NavigationBar and NavigationBarItem composables to implement destination switching logic. Each NavigationBarItem represents a singular destination.

NavigationBarItem includes the following key parameters:

selected: Determines whether the current item is visually highlighted.

onClick(): Defines the action to be performed when the user clicks on the item. Logic for handling navigation events, updating the selected item state, or loading corresponding content belongs here.

label: Displays text within the item. Optional.

icon: Displays an icon within the item. Optional.

Sources: [live-compose-guide-components-navigation-bar-api-surface-source](https://developer.android.com/develop/ui/compose/components/navigation-bar#api-surface)

## Example: Bottom navigation bar

The following snippet implements a bottom navigation bar with items so users can navigate between different screens in an app:

@Composable
fun NavigationBarExample(modifier: Modifier = Modifier) {
    val navController = rememberNavController()
    val startDestination = Destination.SONGS
    var selectedDestination by rememberSaveable { mutableIntStateOf(startDestination.ordinal) }

    Scaffold(
        modifier = modifier,
        bottomBar = {
            NavigationBar(windowInsets = NavigationBarDefaults.windowInsets) {
                Destination.entries.forEachIndexed { index, destination ->
                    NavigationBarItem(
                        selected = selectedDestination == index,
                        onClick = {
                            navController.navigate(route = destination.route)
                            selectedDestination = index
                        },
                        icon = {
                            Icon(
                                destination.icon,
                                contentDescription = destination.contentDescription
                            )
                        },
                        label = { Text(destination.label) }
                    )
                }
            }
        }
    ) { contentPadding ->
        AppNavHost(navController, startDestination, modifier = Modifier.padding(contentPadding))
    }
}Navigation.kt

Sources: [live-compose-guide-components-navigation-bar-example-top-source](https://developer.android.com/develop/ui/compose/components/navigation-bar#example%3A-top)

## Key points

NavigationBar displays a collection of items, with each item corresponding to a Destination.

val navController = rememberNavController() creates and remembers an instance of NavHostController, which manages the navigation within a NavHost.

var selectedDestination by rememberSaveable { mutableIntStateOf(startDestination.ordinal) } manages the state of the selected item. startDestination.ordinal gets the numerical index (position) of the Destination.SONGS enum entry.

When an item is clicked, navController.navigate(route = destination.route) is called to navigate to the corresponding screen.

The onClick lambda of the NavigationBarItem updates the selectedDestination state to visually highlight the clicked item.

The navigation logic calls the AppNavHost composable, passing the navController and startDestination, to display the actual content of the selected screen.

Sources: [live-compose-guide-components-navigation-bar-key-points-source](https://developer.android.com/develop/ui/compose/components/navigation-bar#key-points)

## Introduction

The navigation bar allows users to switch between destinations in an app. You should use navigation bars for:

Three to five destinations of equal importance

Compact window sizes

Consistent destinations across app screens

Figure 1.

A navigation bar with 4 destinations.

This page shows you how to display a navigation bar in your app with related screens and basic navigation.

Sources: [live-compose-guide-components-navigation-bar-main-content-source](https://developer.android.com/develop/ui/compose/components/navigation-bar#main-content)

## Result

The following image shows the navigation bar resulting from the previous snippet:

Figure 2.

A navigation bar that contains 3 destinations with associated icons: Songs, Album, and Playlist.

Sources: [live-compose-guide-components-navigation-bar-result-source](https://developer.android.com/develop/ui/compose/components/navigation-bar#result)
