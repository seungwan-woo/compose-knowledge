---
type: reference
title: App bars
description: "Public source: https://developer.android.com/develop/ui/compose/components/app-bars"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-app-bars-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/app-bars#additional-resources
    revision: web:compose-guide-components-app-bars:content@sha256:d886e2fc8a917348f25bc54b57de8fcf78de21bfa4ec16db22f5eb3cd051269d
    sha256: 41f24e7d926fb4237d6262c15f6cf4fbfe8665595382926a1755af94ab79edff
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Material3 docs - Top app bar

      Material3 docs - Bottom app bar

      Scaffold
  - id: live-compose-guide-components-app-bars-api-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/app-bars#api
    revision: web:compose-guide-components-app-bars:content@sha256:d886e2fc8a917348f25bc54b57de8fcf78de21bfa4ec16db22f5eb3cd051269d
    sha256: d2d8d708971c2d73d8b248ef55e66bc0fe3775cae2e8ce9ae3c4215fc7fac08e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The various composables that allow you to implement the four different top app bars are quite similar. They share several key parameters:

      title: The text that appears across the app bar.

      navigationIcon: The primary icon for navigation. Appears on the left of the app bar.

      actions: Icons that provide the user access to key actions. They appear on the right of the app bar.

      scrollBehavior: Determines how the top app bar responds to scrolling of the scaffold's inner content.

      colors: Determines how the app bar appears.
  - id: live-compose-guide-components-app-bars-bottom-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/app-bars#bottom
    revision: web:compose-guide-components-app-bars:content@sha256:d886e2fc8a917348f25bc54b57de8fcf78de21bfa4ec16db22f5eb3cd051269d
    sha256: 69650efdd44d20e1f2ec7da43c28bc091207b0b0e5d34b8fa38fe2c4fcaebafb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      }
                  )
              },
          ) { innerPadding ->
              Text(
                  modifier = Modifier.padding(innerPadding),
                  text = "Example of a scaffold with a bottom app bar."
              )
          }
      }AppBar.kt

      This implementation appears as follows:

      Figure 6.

      An example implementation of a bottom app bar.
  - id: live-compose-guide-components-app-bars-bottom-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/app-bars#bottom
    revision: web:compose-guide-components-app-bars:content@sha256:d886e2fc8a917348f25bc54b57de8fcf78de21bfa4ec16db22f5eb3cd051269d
    sha256: acf5128ac9c2398ce6529f8ca5f4cb1954f2706b44ffc134d901570fa14aaedc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To create a bottom app bar, use the BottomAppBar composable. Using this composable is quite similar to the top app bar composables described in the preceding sections of this page. You pass composables for the following key parameters:

      actions: A series of icons that appear on the left side of the bar. These are commonly either key actions for the given screen, or navigation items.

      floatingActionButton: The floating action button that appears on the right side of the bar.

      @Composable
      fun BottomAppBarExample() {
          Scaffold(
              bottomBar = {
                  BottomAppBar(
                      actions = {
                          IconButton(onClick = { /* do something */ }) {
                              Icon(painter = rememberVectorPainter(AppIcons.Check), contentDescription = "Localized description")
                          }
                          IconButton(onClick = { /* do something */ }) {
                              Icon(
                                  painter = rememberVectorPainter(AppIcons.Edit),
                                  contentDescription = "Localized description",
                              )
                          }
                          IconButton(onClick = { /* do something */ }) {
                              Icon(
                                  painter = rememberVectorPainter(AppIcons.Mic),
                                  contentDescription = "Localized description",
                              )
                          }
                          IconButton(onClick = { /* do something */ }) {
                              Icon(
                                  painter = rememberVectorPainter(AppIcons.Image),
                                  contentDescription = "Localized description",
                              )
                          }
                      },
                      floatingActionButton = {
                          FloatingActionButton(
                              onClick = { /* do something */ },
                              containerColor = BottomAppBarDefaults.bottomAppBarFabColor,
                              elevation = FloatingActionButtonDefaults.bottomAppBarFabElevation()
                          ) {
                              Icon(painter = rememberVectorPainter(AppIcons.Add), "Localized description")
                          }
  - id: live-compose-guide-components-app-bars-center-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/app-bars#center
    revision: web:compose-guide-components-app-bars:content@sha256:d886e2fc8a917348f25bc54b57de8fcf78de21bfa4ec16db22f5eb3cd051269d
    sha256: 67e0e11b210c7bc9211ea01c27254439028375a5f33b93a611d99bc6c52e82f6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The center aligned top app bar is essentially the same as the small app bar, though the title is centered within the component. To implement it, use the dedicated CenterAlignedTopAppBar composable.

      This example uses enterAlwaysScrollBehavior() to get the value that it passes for scrollBehavior. As such, the bar collapses when the user scrolls the scaffold's inner content.

      @Composable
      fun CenterAlignedTopAppBarExample() {
          val scrollBehavior = TopAppBarDefaults.pinnedScrollBehavior(rememberTopAppBarState())

          Scaffold(
              modifier = Modifier.nestedScroll(scrollBehavior.nestedScrollConnection),

              topBar = {
                  CenterAlignedTopAppBar(
                      colors = TopAppBarDefaults.topAppBarColors(
                          containerColor = MaterialTheme.colorScheme.primaryContainer,
                          titleContentColor = MaterialTheme.colorScheme.primary,
                      ),
                      title = {
                          Text(
                              "Centered Top App Bar",
                              maxLines = 1,
                              overflow = TextOverflow.Ellipsis
                          )
                      },
                      navigationIcon = {
                          IconButton(onClick = { /* do something */ }) {
                              Icon(
                                  painter = rememberVectorPainter(AppIcons.ArrowBack),
                                  contentDescription = "Localized description"
                              )
                          }
                      },
                      actions = {
                          IconButton(onClick = { /* do something */ }) {
                              Icon(
                                  painter = rememberVectorPainter(AppIcons.Menu),
                                  contentDescription = "Localized description"
                              )
                          }
                      },
                      scrollBehavior = scrollBehavior,
                  )
              },
          ) { innerPadding ->
              ScrollContent(innerPadding)
          }
      }AppBar.kt

      This implementation appears as follows:

      Figure 3.

      A center-aligned top app bar.
  - id: live-compose-guide-components-app-bars-examples-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/app-bars#examples
    revision: web:compose-guide-components-app-bars:content@sha256:d886e2fc8a917348f25bc54b57de8fcf78de21bfa4ec16db22f5eb3cd051269d
    sha256: d1165e6dafa6dda27b45f7ce025e2ff82aa5cb79e04afad891caa10c1c08c843
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: The following sections provide implementations for the four different types of top app bars, including varying examples of how you can control scroll behavior.
  - id: live-compose-guide-components-app-bars-large-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/app-bars#large
    revision: web:compose-guide-components-app-bars:content@sha256:d886e2fc8a917348f25bc54b57de8fcf78de21bfa4ec16db22f5eb3cd051269d
    sha256: 044357effa09f170b0df9cabce2a2e1489f508bb617505184fb91020c7151cc1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A large top app bar is similar to the medium, though the padding between the title and the icons is greater and it occupies more space on screen overall. To create one, use the LargeTopAppBar composable.

      Unlike the preceding snippets, this example uses exitUntilCollapsedScrollBehavior() to get the value that it passes for scrollBehavior. As such, the bar collapses when the user scrolls the scaffold's inner content, but then expands when the user scrolls to the end of the inner content.

      @Composable
      fun LargeTopAppBarExample() {
          val scrollBehavior = TopAppBarDefaults.exitUntilCollapsedScrollBehavior(rememberTopAppBarState())

          Scaffold(
              modifier = Modifier.nestedScroll(scrollBehavior.nestedScrollConnection),
              topBar = {
                  LargeTopAppBar(
                      colors = TopAppBarDefaults.topAppBarColors(
                          containerColor = MaterialTheme.colorScheme.primaryContainer,
                          titleContentColor = MaterialTheme.colorScheme.primary,
                      ),
                      title = {
                          Text(
                              "Large Top App Bar",
                              maxLines = 1,
                              overflow = TextOverflow.Ellipsis
                          )
                      },
                      navigationIcon = {
                          IconButton(onClick = { /* do something */ }) {
                              Icon(
                                  painter = rememberVectorPainter(AppIcons.ArrowBack),
                                  contentDescription = "Localized description"
                              )
                          }
                      },
                      actions = {
                          IconButton(onClick = { /* do something */ }) {
                              Icon(
                                  painter = rememberVectorPainter(AppIcons.Menu),
                                  contentDescription = "Localized description"
                              )
                          }
                      },
                      scrollBehavior = scrollBehavior
                  )
              },
          ) { innerPadding ->
              ScrollContent(innerPadding)
          }
      }AppBar.kt

      This implementation appears as follows:

      Figure 5.

      An example implementation of a large top app bar.
  - id: live-compose-guide-components-app-bars-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/app-bars#main-content
    revision: web:compose-guide-components-app-bars:content@sha256:d886e2fc8a917348f25bc54b57de8fcf78de21bfa4ec16db22f5eb3cd051269d
    sha256: 80242b6ec21320c5b205ee900c86d9316427601e930d4b36c1f37cfddf6571e1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      App bars are containers that provide the user access to key features and navigation items. There are two types of app bars, top app bars and bottom app bars. Their respective appearance and purpose are as follows:

      Type Appearance Purpose Top app bar Across the top of the screen. Provides access to key tasks and information. Generally hosts a title, core action items, and certain navigation items. Bottom app bar Across the bottom of the screen. Typically includes core navigation items. May also provide access to other key actions, such as through a contained floating action button.

      Figure 1.

      A top app bar (left) and a bottom app bar (right).

      To implement a top app bar and bottom app bar, use the TopAppBar and BottomAppBar composables, respectively. They let you create consistent interfaces that encapsulate navigation and action controls, and which are aligned with Material Design principles.
  - id: live-compose-guide-components-app-bars-medium-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/app-bars#medium
    revision: web:compose-guide-components-app-bars:content@sha256:d886e2fc8a917348f25bc54b57de8fcf78de21bfa4ec16db22f5eb3cd051269d
    sha256: d8e73b418dddb261adc2cc809b6ea827519ed9aa2bb787d3fe2bdb4a2fe7ff29
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The medium top app bar places the title beneath any additional icons. To create one, use the MediumTopAppBar composable.

      Like the previous snippet, this example uses enterAlwaysScrollBehavior() to get the value that it passes for scrollBehavior.

      @Composable
      fun MediumTopAppBarExample() {
          val scrollBehavior = TopAppBarDefaults.enterAlwaysScrollBehavior(rememberTopAppBarState())

          Scaffold(
              modifier = Modifier.nestedScroll(scrollBehavior.nestedScrollConnection),
              topBar = {
                  MediumTopAppBar(
                      colors = TopAppBarDefaults.topAppBarColors(
                          containerColor = MaterialTheme.colorScheme.primaryContainer,
                          titleContentColor = MaterialTheme.colorScheme.primary,
                      ),
                      title = {
                          Text(
                              "Medium Top App Bar",
                              maxLines = 1,
                              overflow = TextOverflow.Ellipsis
                          )
                      },
                      navigationIcon = {
                          IconButton(onClick = { /* do something */ }) {
                              Icon(
                                  painter = rememberVectorPainter(AppIcons.ArrowBack),
                                  contentDescription = "Localized description"
                              )
                          }
                      },
                      actions = {
                          IconButton(onClick = { /* do something */ }) {
                              Icon(
                                  painter = rememberVectorPainter(AppIcons.Menu),
                                  contentDescription = "Localized description"
                              )
                          }
                      },
                      scrollBehavior = scrollBehavior
                  )
              },
          ) { innerPadding ->
              ScrollContent(innerPadding)
          }
      }AppBar.kt

      This implementation appears as follows, with a demonstration of how the scroll behavior from enterAlwaysScrollBehavior() appears:

      Figure 4.

      A medium top app bar that collapses as the user scrolls up and expands as the user scrolls down.
  - id: live-compose-guide-components-app-bars-scroll-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/app-bars#scroll
    revision: web:compose-guide-components-app-bars:content@sha256:d886e2fc8a917348f25bc54b57de8fcf78de21bfa4ec16db22f5eb3cd051269d
    sha256: a8a155d4220d12c5cf9f79dfda26d3f3da5c84e1fde7ff9c8a14e13d63f19e24
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can control how the app bar responds when the user scrolls the given scaffold's inner content. To do so, create an instance of TopAppBarScrollBehavior and pass it to your top app bar for the scrollBehavior parameter.

      There are three types of TopAppBarScrollBehavior. They are as follows:

      enterAlwaysScrollBehavior: When the user pulls up the scaffold's inner content, the top app bar collapses. The app bar expands when the user starts pulling down the inner content.

      exitUntilCollapsedScrollBehavior: Similar to enterAlwaysScrollBehavior, though the app bar only expands when the user pulls the content all the way down.

      pinnedScrollBehavior: The app bar remains in place and does not react to scrolling.

      The following examples implement several of these options.
  - id: live-compose-guide-components-app-bars-small-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/app-bars#small
    revision: web:compose-guide-components-app-bars:content@sha256:d886e2fc8a917348f25bc54b57de8fcf78de21bfa4ec16db22f5eb3cd051269d
    sha256: a037da80396705687056cb267559a95a8c773256fce718f9494cc2d20979911a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To create a small top app bar, use the TopAppBar composable. The following example implements a basic top app bar that contains only a title.

      The following example does not pass TopAppBar a value for scrollBehavior and it therefore does not react to scrolling of the inner content.

      @Composable
      fun SmallTopAppBarExample() {
          Scaffold(
              topBar = {
                  TopAppBar(
                      colors = TopAppBarDefaults.topAppBarColors(
                          containerColor = MaterialTheme.colorScheme.primaryContainer,
                          titleContentColor = MaterialTheme.colorScheme.primary,
                      ),
                      title = {
                          Text("Small Top App Bar")
                      }
                  )
              },
          ) { innerPadding ->
              ScrollContent(innerPadding)
          }
      }AppBar.kt

      This implementation appears as follows:

      Figure 2.

      A small top app bar.
  - id: live-compose-guide-components-app-bars-top-bar-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/app-bars#top-bar
    revision: web:compose-guide-components-app-bars:content@sha256:d886e2fc8a917348f25bc54b57de8fcf78de21bfa4ec16db22f5eb3cd051269d
    sha256: a268f1082245569ccd008c5cbe8b63f21c703b727af2f07f66c8b77c8e8b93e7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following table outlines the four types of top app bars:

      Type Example Small: For screens that don't require a lot of navigation or actions. Center aligned: For screens that have a single, primary action. Medium: For screens that require a moderate amount of navigation and actions. Large: For screens that require a lot of navigation and actions.
compose:
  id: live-compose-guide-components-app-bars
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-app-bars-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-app-bars-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-components-app-bars-api
      title: API surface
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-app-bars-api-source
      relatedIds: []
    - id: live-compose-guide-components-app-bars-bottom
      title: Bottom app bar
      aliases:
        - androidx.compose.material3.BottomAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-app-bars-bottom-source
      relatedIds: []
    - id: live-compose-guide-components-app-bars-bottom-2
      title: Bottom app bar
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-app-bars-bottom-2-source
      relatedIds: []
    - id: live-compose-guide-components-app-bars-center
      title: Center aligned
      aliases:
        - androidx.compose.material3.CenterAlignedTopAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-app-bars-center-source
      relatedIds: []
    - id: live-compose-guide-components-app-bars-examples
      title: Examples
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-app-bars-examples-source
      relatedIds: []
    - id: live-compose-guide-components-app-bars-large
      title: Large
      aliases:
        - androidx.compose.material3.LargeTopAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-app-bars-large-source
      relatedIds: []
    - id: live-compose-guide-components-app-bars-main-content
      title: Introduction
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.BottomAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-app-bars-main-content-source
      relatedIds: []
    - id: live-compose-guide-components-app-bars-medium
      title: Medium
      aliases:
        - androidx.compose.material3.MediumTopAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-app-bars-medium-source
      relatedIds: []
    - id: live-compose-guide-components-app-bars-scroll
      title: Scroll behavior
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-app-bars-scroll-source
      relatedIds: []
    - id: live-compose-guide-components-app-bars-small
      title: Small
      aliases:
        - androidx.compose.material3.TopAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-app-bars-small-source
      relatedIds: []
    - id: live-compose-guide-components-app-bars-top-bar
      title: Top app bars
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-app-bars-top-bar-source
      relatedIds: []
---

# App bars

Public source: https://developer.android.com/develop/ui/compose/components/app-bars

## Additional resources

Material3 docs - Top app bar

Material3 docs - Bottom app bar

Scaffold

Sources: [live-compose-guide-components-app-bars-additional-resources-source](https://developer.android.com/develop/ui/compose/components/app-bars#additional-resources)

## API surface

The various composables that allow you to implement the four different top app bars are quite similar. They share several key parameters:

title: The text that appears across the app bar.

navigationIcon: The primary icon for navigation. Appears on the left of the app bar.

actions: Icons that provide the user access to key actions. They appear on the right of the app bar.

scrollBehavior: Determines how the top app bar responds to scrolling of the scaffold's inner content.

colors: Determines how the app bar appears.

Sources: [live-compose-guide-components-app-bars-api-source](https://developer.android.com/develop/ui/compose/components/app-bars#api)

## Bottom app bar

To create a bottom app bar, use the BottomAppBar composable. Using this composable is quite similar to the top app bar composables described in the preceding sections of this page. You pass composables for the following key parameters:

actions: A series of icons that appear on the left side of the bar. These are commonly either key actions for the given screen, or navigation items.

floatingActionButton: The floating action button that appears on the right side of the bar.

@Composable
fun BottomAppBarExample() {
    Scaffold(
        bottomBar = {
            BottomAppBar(
                actions = {
                    IconButton(onClick = { /* do something */ }) {
                        Icon(painter = rememberVectorPainter(AppIcons.Check), contentDescription = "Localized description")
                    }
                    IconButton(onClick = { /* do something */ }) {
                        Icon(
                            painter = rememberVectorPainter(AppIcons.Edit),
                            contentDescription = "Localized description",
                        )
                    }
                    IconButton(onClick = { /* do something */ }) {
                        Icon(
                            painter = rememberVectorPainter(AppIcons.Mic),
                            contentDescription = "Localized description",
                        )
                    }
                    IconButton(onClick = { /* do something */ }) {
                        Icon(
                            painter = rememberVectorPainter(AppIcons.Image),
                            contentDescription = "Localized description",
                        )
                    }
                },
                floatingActionButton = {
                    FloatingActionButton(
                        onClick = { /* do something */ },
                        containerColor = BottomAppBarDefaults.bottomAppBarFabColor,
                        elevation = FloatingActionButtonDefaults.bottomAppBarFabElevation()
                    ) {
                        Icon(painter = rememberVectorPainter(AppIcons.Add), "Localized description")
                    }

Sources: [live-compose-guide-components-app-bars-bottom-source](https://developer.android.com/develop/ui/compose/components/app-bars#bottom)

## Bottom app bar

}
            )
        },
    ) { innerPadding ->
        Text(
            modifier = Modifier.padding(innerPadding),
            text = "Example of a scaffold with a bottom app bar."
        )
    }
}AppBar.kt

This implementation appears as follows:

Figure 6.

An example implementation of a bottom app bar.

Sources: [live-compose-guide-components-app-bars-bottom-2-source](https://developer.android.com/develop/ui/compose/components/app-bars#bottom)

## Center aligned

The center aligned top app bar is essentially the same as the small app bar, though the title is centered within the component. To implement it, use the dedicated CenterAlignedTopAppBar composable.

This example uses enterAlwaysScrollBehavior() to get the value that it passes for scrollBehavior. As such, the bar collapses when the user scrolls the scaffold's inner content.

@Composable
fun CenterAlignedTopAppBarExample() {
    val scrollBehavior = TopAppBarDefaults.pinnedScrollBehavior(rememberTopAppBarState())

    Scaffold(
        modifier = Modifier.nestedScroll(scrollBehavior.nestedScrollConnection),

        topBar = {
            CenterAlignedTopAppBar(
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                    titleContentColor = MaterialTheme.colorScheme.primary,
                ),
                title = {
                    Text(
                        "Centered Top App Bar",
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                },
                navigationIcon = {
                    IconButton(onClick = { /* do something */ }) {
                        Icon(
                            painter = rememberVectorPainter(AppIcons.ArrowBack),
                            contentDescription = "Localized description"
                        )
                    }
                },
                actions = {
                    IconButton(onClick = { /* do something */ }) {
                        Icon(
                            painter = rememberVectorPainter(AppIcons.Menu),
                            contentDescription = "Localized description"
                        )
                    }
                },
                scrollBehavior = scrollBehavior,
            )
        },
    ) { innerPadding ->
        ScrollContent(innerPadding)
    }
}AppBar.kt

This implementation appears as follows:

Figure 3.

A center-aligned top app bar.

Sources: [live-compose-guide-components-app-bars-center-source](https://developer.android.com/develop/ui/compose/components/app-bars#center)

## Examples

The following sections provide implementations for the four different types of top app bars, including varying examples of how you can control scroll behavior.

Sources: [live-compose-guide-components-app-bars-examples-source](https://developer.android.com/develop/ui/compose/components/app-bars#examples)

## Large

A large top app bar is similar to the medium, though the padding between the title and the icons is greater and it occupies more space on screen overall. To create one, use the LargeTopAppBar composable.

Unlike the preceding snippets, this example uses exitUntilCollapsedScrollBehavior() to get the value that it passes for scrollBehavior. As such, the bar collapses when the user scrolls the scaffold's inner content, but then expands when the user scrolls to the end of the inner content.

@Composable
fun LargeTopAppBarExample() {
    val scrollBehavior = TopAppBarDefaults.exitUntilCollapsedScrollBehavior(rememberTopAppBarState())

    Scaffold(
        modifier = Modifier.nestedScroll(scrollBehavior.nestedScrollConnection),
        topBar = {
            LargeTopAppBar(
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                    titleContentColor = MaterialTheme.colorScheme.primary,
                ),
                title = {
                    Text(
                        "Large Top App Bar",
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                },
                navigationIcon = {
                    IconButton(onClick = { /* do something */ }) {
                        Icon(
                            painter = rememberVectorPainter(AppIcons.ArrowBack),
                            contentDescription = "Localized description"
                        )
                    }
                },
                actions = {
                    IconButton(onClick = { /* do something */ }) {
                        Icon(
                            painter = rememberVectorPainter(AppIcons.Menu),
                            contentDescription = "Localized description"
                        )
                    }
                },
                scrollBehavior = scrollBehavior
            )
        },
    ) { innerPadding ->
        ScrollContent(innerPadding)
    }
}AppBar.kt

This implementation appears as follows:

Figure 5.

An example implementation of a large top app bar.

Sources: [live-compose-guide-components-app-bars-large-source](https://developer.android.com/develop/ui/compose/components/app-bars#large)

## Introduction

App bars are containers that provide the user access to key features and navigation items. There are two types of app bars, top app bars and bottom app bars. Their respective appearance and purpose are as follows:

Type Appearance Purpose Top app bar Across the top of the screen. Provides access to key tasks and information. Generally hosts a title, core action items, and certain navigation items. Bottom app bar Across the bottom of the screen. Typically includes core navigation items. May also provide access to other key actions, such as through a contained floating action button.

Figure 1.

A top app bar (left) and a bottom app bar (right).

To implement a top app bar and bottom app bar, use the TopAppBar and BottomAppBar composables, respectively. They let you create consistent interfaces that encapsulate navigation and action controls, and which are aligned with Material Design principles.

Sources: [live-compose-guide-components-app-bars-main-content-source](https://developer.android.com/develop/ui/compose/components/app-bars#main-content)

## Medium

The medium top app bar places the title beneath any additional icons. To create one, use the MediumTopAppBar composable.

Like the previous snippet, this example uses enterAlwaysScrollBehavior() to get the value that it passes for scrollBehavior.

@Composable
fun MediumTopAppBarExample() {
    val scrollBehavior = TopAppBarDefaults.enterAlwaysScrollBehavior(rememberTopAppBarState())

    Scaffold(
        modifier = Modifier.nestedScroll(scrollBehavior.nestedScrollConnection),
        topBar = {
            MediumTopAppBar(
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                    titleContentColor = MaterialTheme.colorScheme.primary,
                ),
                title = {
                    Text(
                        "Medium Top App Bar",
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                },
                navigationIcon = {
                    IconButton(onClick = { /* do something */ }) {
                        Icon(
                            painter = rememberVectorPainter(AppIcons.ArrowBack),
                            contentDescription = "Localized description"
                        )
                    }
                },
                actions = {
                    IconButton(onClick = { /* do something */ }) {
                        Icon(
                            painter = rememberVectorPainter(AppIcons.Menu),
                            contentDescription = "Localized description"
                        )
                    }
                },
                scrollBehavior = scrollBehavior
            )
        },
    ) { innerPadding ->
        ScrollContent(innerPadding)
    }
}AppBar.kt

This implementation appears as follows, with a demonstration of how the scroll behavior from enterAlwaysScrollBehavior() appears:

Figure 4.

A medium top app bar that collapses as the user scrolls up and expands as the user scrolls down.

Sources: [live-compose-guide-components-app-bars-medium-source](https://developer.android.com/develop/ui/compose/components/app-bars#medium)

## Scroll behavior

You can control how the app bar responds when the user scrolls the given scaffold's inner content. To do so, create an instance of TopAppBarScrollBehavior and pass it to your top app bar for the scrollBehavior parameter.

There are three types of TopAppBarScrollBehavior. They are as follows:

enterAlwaysScrollBehavior: When the user pulls up the scaffold's inner content, the top app bar collapses. The app bar expands when the user starts pulling down the inner content.

exitUntilCollapsedScrollBehavior: Similar to enterAlwaysScrollBehavior, though the app bar only expands when the user pulls the content all the way down.

pinnedScrollBehavior: The app bar remains in place and does not react to scrolling.

The following examples implement several of these options.

Sources: [live-compose-guide-components-app-bars-scroll-source](https://developer.android.com/develop/ui/compose/components/app-bars#scroll)

## Small

To create a small top app bar, use the TopAppBar composable. The following example implements a basic top app bar that contains only a title.

The following example does not pass TopAppBar a value for scrollBehavior and it therefore does not react to scrolling of the inner content.

@Composable
fun SmallTopAppBarExample() {
    Scaffold(
        topBar = {
            TopAppBar(
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                    titleContentColor = MaterialTheme.colorScheme.primary,
                ),
                title = {
                    Text("Small Top App Bar")
                }
            )
        },
    ) { innerPadding ->
        ScrollContent(innerPadding)
    }
}AppBar.kt

This implementation appears as follows:

Figure 2.

A small top app bar.

Sources: [live-compose-guide-components-app-bars-small-source](https://developer.android.com/develop/ui/compose/components/app-bars#small)

## Top app bars

The following table outlines the four types of top app bars:

Type Example Small: For screens that don't require a lot of navigation or actions. Center aligned: For screens that have a single, primary action. Medium: For screens that require a moderate amount of navigation and actions. Large: For screens that require a lot of navigation and actions.

Sources: [live-compose-guide-components-app-bars-top-bar-source](https://developer.android.com/develop/ui/compose/components/app-bars#top-bar)
