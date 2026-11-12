---
type: reference
title: Navigation drawer
description: "Public source: https://developer.android.com/develop/ui/compose/components/drawer"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-drawer-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/drawer#additional-resources
    revision: web:compose-guide-components-drawer:content@sha256:31c0beafff1698e10c7df158b69567c0ab19a584130a721a188dfd964b485096
    sha256: 518b4315e7a9cd3ab319601717ccd7a146e9593922f2347d43262ff865aaaa5d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: "Material Design: Navigation drawer"
  - id: live-compose-guide-components-drawer-control-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/drawer#control
    revision: web:compose-guide-components-drawer:content@sha256:31c0beafff1698e10c7df158b69567c0ab19a584130a721a188dfd964b485096
    sha256: 8b330f2a80958285f75b44726731aaa803de3d0f739a01b65236c92329692300
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To control how the drawer opens and closes, use DrawerState. You should pass a DrawerState to ModalNavigationDrawer using the drawerState parameter.

      DrawerState provides access to the open and close functions, as well as properties related to the current drawer state. These suspending functions require a CoroutineScope, which you can instantiate using rememberCoroutineScope. You can also call the suspending functions in response to UI events.

      val drawerState = rememberDrawerState(initialValue = DrawerValue.Closed)
      val scope = rememberCoroutineScope()
      ModalNavigationDrawer(
          drawerState = drawerState,
          drawerContent = {
              ModalDrawerSheet { /* Drawer content */ }
          },
      ) {
          Scaffold(
              floatingActionButton = {
                  ExtendedFloatingActionButton(
                      text = { Text("Show drawer") },
                      icon = { Icon(Icons.Filled.Add, contentDescription = "") },
                      onClick = {
                          scope.launch {
                              drawerState.apply {
                                  if (isClosed) open() else close()
                              }
                          }
                      }
                  )
              }
          ) { contentPadding ->
              // Screen content
          }
      }MaterialLayoutSnippets.kt
  - id: live-compose-guide-components-drawer-create-groups-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/drawer#create-groups
    revision: web:compose-guide-components-drawer:content@sha256:31c0beafff1698e10c7df158b69567c0ab19a584130a721a188dfd964b485096
    sha256: 87806ab25b6f11298ba43491fe3ca98a372766a722353c857a067ac760cca4c7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      },
                              onClick = { /* Handle click */ },
                          )
                          Spacer(Modifier.height(12.dp))
                      }
                  }
              },
              drawerState = drawerState
          ) {
              Scaffold(
                  topBar = {
                      TopAppBar(
                          title = { Text("Navigation Drawer Example") },
                          navigationIcon = {
                              IconButton(onClick = {
                                  scope.launch {
                                      if (drawerState.isClosed) {
                                          drawerState.open()
                                      } else {
                                          drawerState.close()
                                      }
                                  }
                              }) {
                                  Icon(painter = rememberVectorPainter(AppIcons.Menu), contentDescription = "Menu")
                              }
                          }
                      )
                  }
              ) { innerPadding ->
                  content(innerPadding)
              }
          }
      }NavigationDrawer.kt
  - id: live-compose-guide-components-drawer-create-groups-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/drawer#create-groups
    revision: web:compose-guide-components-drawer:content@sha256:31c0beafff1698e10c7df158b69567c0ab19a584130a721a188dfd964b485096
    sha256: 48e9f68c9d0c006bdff6b92f2db29613f8c902fb4041bdfe6d5612db8d13168c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following snippet shows how to create a detailed navigation drawer, with sections and dividers:

      @Composable
      fun DetailedDrawerExample(
          content: @Composable (PaddingValues) -> Unit
      ) {
          val drawerState = rememberDrawerState(initialValue = DrawerValue.Closed)
          val scope = rememberCoroutineScope()

          ModalNavigationDrawer(
              drawerContent = {
                  ModalDrawerSheet {
                      Column(
                          modifier = Modifier.padding(horizontal = 16.dp)
                              .verticalScroll(rememberScrollState())
                      ) {
                          Spacer(Modifier.height(12.dp))
                          Text("Drawer Title", modifier = Modifier.padding(16.dp), style = MaterialTheme.typography.titleLarge)
                          HorizontalDivider()

                          Text("Section 1", modifier = Modifier.padding(16.dp), style = MaterialTheme.typography.titleMedium)
                          NavigationDrawerItem(
                              label = { Text("Item 1") },
                              selected = false,
                              onClick = { /* Handle click */ }
                          )
                          NavigationDrawerItem(
                              label = { Text("Item 2") },
                              selected = false,
                              onClick = { /* Handle click */ }
                          )

                          HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))

                          Text("Section 2", modifier = Modifier.padding(16.dp), style = MaterialTheme.typography.titleMedium)
                          NavigationDrawerItem(
                              label = { Text("Settings") },
                              selected = false,
                              icon = { Icon(painter = rememberVectorPainter(AppIcons.Settings), contentDescription = null) },
                              badge = { Text("20") }, // Placeholder
                              onClick = { /* Handle click */ }
                          )
                          NavigationDrawerItem(
                              label = { Text("Help and feedback") },
                              selected = false,
                              icon = { Icon(painter = rememberVectorPainter(AppIcons.Help), contentDescription = null)
  - id: live-compose-guide-components-drawer-example-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/drawer#example
    revision: web:compose-guide-components-drawer:content@sha256:31c0beafff1698e10c7df158b69567c0ab19a584130a721a188dfd964b485096
    sha256: 3ce30d408b067cf14f4f6d2dfed9543ddec26abd7eef89bf1ce476c9fedc0f8e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can use the ModalNavigationDrawer composable to implement a navigation drawer.

      Use the drawerContent slot to provide a ModalDrawerSheet and provide the drawer's contents, as in the following example:

      ModalNavigationDrawer(
          drawerContent = {
              ModalDrawerSheet {
                  Text("Drawer title", modifier = Modifier.padding(16.dp))
                  HorizontalDivider()
                  NavigationDrawerItem(
                      label = { Text(text = "Drawer Item") },
                      selected = false,
                      onClick = { /*TODO*/ }
                  )
                  // ...other drawer items
              }
          }
      ) {
          // Screen content
      }MaterialLayoutSnippets.kt

      ModalNavigationDrawer accepts a number of additional drawer parameters. For example, you can toggle whether or not the drawer responds to drags with the gesturesEnabled parameter as in the following example:

      ModalNavigationDrawer(
          drawerContent = {
              ModalDrawerSheet {
                  // Drawer contents
              }
          },
          gesturesEnabled = false
      ) {
          // Screen content
      }MaterialLayoutSnippets.kt
  - id: live-compose-guide-components-drawer-key-points-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/drawer#key-points
    revision: web:compose-guide-components-drawer:content@sha256:31c0beafff1698e10c7df158b69567c0ab19a584130a721a188dfd964b485096
    sha256: 608e816fe0396a53eac8803ad2f17cfbaed655d1869b09113fc48b5593f75079
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Populates the drawerContent with a Column containing sections, dividers, and navigation items.

      ModalDrawerSheet provides Material Design styling for the drawer.

      HorizontalDivider separates sections within the drawer.

      ModalNavigationDrawer creates the drawer.

      drawerContent defines the content of the drawer.

      Inside the ModalDrawerSheet, a Column arranges the drawer elements vertically.

      NavigationDrawerItem composables represent individual items in the drawer.

      The Scaffold provides the basic structure of the screen, including the TopAppBar.

      The navigationIcon in the TopAppBar controls the drawer's open and close state.
  - id: live-compose-guide-components-drawer-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/drawer#main-content
    revision: web:compose-guide-components-drawer:content@sha256:31c0beafff1698e10c7df158b69567c0ab19a584130a721a188dfd964b485096
    sha256: e86565d7f61738c73414f0365aca37dc34b0b6da1c42a7eb2dbd832798d36a4a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The navigation drawer component is a slide-in menu that lets users navigate to various sections of your app. Users can activate it by swiping from the side or tapping a menu icon.

      Consider these three use cases for implementing a Navigation Drawer:

      Content organization: Enable users to switch between different categories, such as in news or blogging apps.

      Account management: Provide quick links to account settings and profile sections in apps with user accounts.

      Feature discovery: Organize multiple features and settings in a single menu to facilitate user discovery and access in complex apps.

      In Material Design, there are two types of navigation drawers:

      Standard: Share space within a screen with other content.

      Modal: Appears over the top of other content within a screen.

      Figure 1.

      An example of a navigation drawer.
  - id: live-compose-guide-components-drawer-result-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/drawer#result
    revision: web:compose-guide-components-drawer:content@sha256:31c0beafff1698e10c7df158b69567c0ab19a584130a721a188dfd964b485096
    sha256: ab9f308489bccc4f3b4015f8ce999795d22e91001e257975d1062af0ffd01c12
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following preview shows how the drawer appears when opened, with sections and items displayed:

      Figure 2.

      A navigation drawer opened with two nested groups.
compose:
  id: live-compose-guide-components-drawer
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-drawer-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-drawer-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-components-drawer-control
      title: Control behavior
      aliases:
        - androidx.compose.material3.ModalNavigationDrawer
        - androidx.compose.material3.ModalDrawerSheet
        - androidx.compose.material3.DrawerState
        - androidx.compose.material3.Scaffold
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-drawer-control-source
      relatedIds: []
    - id: live-compose-guide-components-drawer-create-groups
      title: Create groups within a navigation drawer
      aliases:
        - androidx.compose.material3.ModalNavigationDrawer
        - androidx.compose.material3.ModalDrawerSheet
        - androidx.compose.material3.HorizontalDivider
        - androidx.compose.material3.NavigationDrawerItem
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-drawer-create-groups-source
      relatedIds: []
    - id: live-compose-guide-components-drawer-create-groups-2
      title: Create groups within a navigation drawer
      aliases:
        - androidx.compose.material3.Scaffold
        - androidx.compose.material3.TopAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-drawer-create-groups-2-source
      relatedIds: []
    - id: live-compose-guide-components-drawer-example
      title: Example
      aliases:
        - androidx.compose.material3.ModalNavigationDrawer
        - androidx.compose.material3.ModalDrawerSheet
        - androidx.compose.material3.HorizontalDivider
        - androidx.compose.material3.NavigationDrawerItem
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-drawer-example-source
      relatedIds: []
    - id: live-compose-guide-components-drawer-key-points
      title: Key points about the code
      aliases:
        - androidx.compose.material3.ModalNavigationDrawer
        - androidx.compose.material3.ModalDrawerSheet
        - androidx.compose.material3.HorizontalDivider
        - androidx.compose.material3.NavigationDrawerItem
        - androidx.compose.material3.Scaffold
        - androidx.compose.material3.TopAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-drawer-key-points-source
      relatedIds: []
    - id: live-compose-guide-components-drawer-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-drawer-main-content-source
      relatedIds: []
    - id: live-compose-guide-components-drawer-result
      title: Result
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-drawer-result-source
      relatedIds: []
---

# Navigation drawer

Public source: https://developer.android.com/develop/ui/compose/components/drawer

## Additional resources

Material Design: Navigation drawer

Sources: [live-compose-guide-components-drawer-additional-resources-source](https://developer.android.com/develop/ui/compose/components/drawer#additional-resources)

## Control behavior

To control how the drawer opens and closes, use DrawerState. You should pass a DrawerState to ModalNavigationDrawer using the drawerState parameter.

DrawerState provides access to the open and close functions, as well as properties related to the current drawer state. These suspending functions require a CoroutineScope, which you can instantiate using rememberCoroutineScope. You can also call the suspending functions in response to UI events.

val drawerState = rememberDrawerState(initialValue = DrawerValue.Closed)
val scope = rememberCoroutineScope()
ModalNavigationDrawer(
    drawerState = drawerState,
    drawerContent = {
        ModalDrawerSheet { /* Drawer content */ }
    },
) {
    Scaffold(
        floatingActionButton = {
            ExtendedFloatingActionButton(
                text = { Text("Show drawer") },
                icon = { Icon(Icons.Filled.Add, contentDescription = "") },
                onClick = {
                    scope.launch {
                        drawerState.apply {
                            if (isClosed) open() else close()
                        }
                    }
                }
            )
        }
    ) { contentPadding ->
        // Screen content
    }
}MaterialLayoutSnippets.kt

Sources: [live-compose-guide-components-drawer-control-source](https://developer.android.com/develop/ui/compose/components/drawer#control)

## Create groups within a navigation drawer

The following snippet shows how to create a detailed navigation drawer, with sections and dividers:

@Composable
fun DetailedDrawerExample(
    content: @Composable (PaddingValues) -> Unit
) {
    val drawerState = rememberDrawerState(initialValue = DrawerValue.Closed)
    val scope = rememberCoroutineScope()

    ModalNavigationDrawer(
        drawerContent = {
            ModalDrawerSheet {
                Column(
                    modifier = Modifier.padding(horizontal = 16.dp)
                        .verticalScroll(rememberScrollState())
                ) {
                    Spacer(Modifier.height(12.dp))
                    Text("Drawer Title", modifier = Modifier.padding(16.dp), style = MaterialTheme.typography.titleLarge)
                    HorizontalDivider()

                    Text("Section 1", modifier = Modifier.padding(16.dp), style = MaterialTheme.typography.titleMedium)
                    NavigationDrawerItem(
                        label = { Text("Item 1") },
                        selected = false,
                        onClick = { /* Handle click */ }
                    )
                    NavigationDrawerItem(
                        label = { Text("Item 2") },
                        selected = false,
                        onClick = { /* Handle click */ }
                    )

                    HorizontalDivider(modifier = Modifier.padding(vertical = 8.dp))

                    Text("Section 2", modifier = Modifier.padding(16.dp), style = MaterialTheme.typography.titleMedium)
                    NavigationDrawerItem(
                        label = { Text("Settings") },
                        selected = false,
                        icon = { Icon(painter = rememberVectorPainter(AppIcons.Settings), contentDescription = null) },
                        badge = { Text("20") }, // Placeholder
                        onClick = { /* Handle click */ }
                    )
                    NavigationDrawerItem(
                        label = { Text("Help and feedback") },
                        selected = false,
                        icon = { Icon(painter = rememberVectorPainter(AppIcons.Help), contentDescription = null)

Sources: [live-compose-guide-components-drawer-create-groups-source](https://developer.android.com/develop/ui/compose/components/drawer#create-groups)

## Create groups within a navigation drawer

},
                        onClick = { /* Handle click */ },
                    )
                    Spacer(Modifier.height(12.dp))
                }
            }
        },
        drawerState = drawerState
    ) {
        Scaffold(
            topBar = {
                TopAppBar(
                    title = { Text("Navigation Drawer Example") },
                    navigationIcon = {
                        IconButton(onClick = {
                            scope.launch {
                                if (drawerState.isClosed) {
                                    drawerState.open()
                                } else {
                                    drawerState.close()
                                }
                            }
                        }) {
                            Icon(painter = rememberVectorPainter(AppIcons.Menu), contentDescription = "Menu")
                        }
                    }
                )
            }
        ) { innerPadding ->
            content(innerPadding)
        }
    }
}NavigationDrawer.kt

Sources: [live-compose-guide-components-drawer-create-groups-2-source](https://developer.android.com/develop/ui/compose/components/drawer#create-groups)

## Example

You can use the ModalNavigationDrawer composable to implement a navigation drawer.

Use the drawerContent slot to provide a ModalDrawerSheet and provide the drawer's contents, as in the following example:

ModalNavigationDrawer(
    drawerContent = {
        ModalDrawerSheet {
            Text("Drawer title", modifier = Modifier.padding(16.dp))
            HorizontalDivider()
            NavigationDrawerItem(
                label = { Text(text = "Drawer Item") },
                selected = false,
                onClick = { /*TODO*/ }
            )
            // ...other drawer items
        }
    }
) {
    // Screen content
}MaterialLayoutSnippets.kt

ModalNavigationDrawer accepts a number of additional drawer parameters. For example, you can toggle whether or not the drawer responds to drags with the gesturesEnabled parameter as in the following example:

ModalNavigationDrawer(
    drawerContent = {
        ModalDrawerSheet {
            // Drawer contents
        }
    },
    gesturesEnabled = false
) {
    // Screen content
}MaterialLayoutSnippets.kt

Sources: [live-compose-guide-components-drawer-example-source](https://developer.android.com/develop/ui/compose/components/drawer#example)

## Key points about the code

Populates the drawerContent with a Column containing sections, dividers, and navigation items.

ModalDrawerSheet provides Material Design styling for the drawer.

HorizontalDivider separates sections within the drawer.

ModalNavigationDrawer creates the drawer.

drawerContent defines the content of the drawer.

Inside the ModalDrawerSheet, a Column arranges the drawer elements vertically.

NavigationDrawerItem composables represent individual items in the drawer.

The Scaffold provides the basic structure of the screen, including the TopAppBar.

The navigationIcon in the TopAppBar controls the drawer's open and close state.

Sources: [live-compose-guide-components-drawer-key-points-source](https://developer.android.com/develop/ui/compose/components/drawer#key-points)

## Introduction

The navigation drawer component is a slide-in menu that lets users navigate to various sections of your app. Users can activate it by swiping from the side or tapping a menu icon.

Consider these three use cases for implementing a Navigation Drawer:

Content organization: Enable users to switch between different categories, such as in news or blogging apps.

Account management: Provide quick links to account settings and profile sections in apps with user accounts.

Feature discovery: Organize multiple features and settings in a single menu to facilitate user discovery and access in complex apps.

In Material Design, there are two types of navigation drawers:

Standard: Share space within a screen with other content.

Modal: Appears over the top of other content within a screen.

Figure 1.

An example of a navigation drawer.

Sources: [live-compose-guide-components-drawer-main-content-source](https://developer.android.com/develop/ui/compose/components/drawer#main-content)

## Result

The following preview shows how the drawer appears when opened, with sections and items displayed:

Figure 2.

A navigation drawer opened with two nested groups.

Sources: [live-compose-guide-components-drawer-result-source](https://developer.android.com/develop/ui/compose/components/drawer#result)
