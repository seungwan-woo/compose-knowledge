---
type: reference
title: Compose menus
description: "Public source: https://developer.android.com/develop/ui/compose/components/menu"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-menus-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/menu#additional-resources
    revision: web:compose-menus:content@sha256:e1a5a233065f286be7c4ec49359fbf1c3b08592ad362aac52b30b31abca3597a
    sha256: ed8d91459d1d957572ea913166c4d62e6b36bae9f0a29e513f3640da9b15b42a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: "Material Design: Menus"
  - id: live-compose-menus-api-surface-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/menu#api-surface
    revision: web:compose-menus:content@sha256:e1a5a233065f286be7c4ec49359fbf1c3b08592ad362aac52b30b31abca3597a
    sha256: e587d5e7c21bfc6b24873311f9899483d92a0ee558c10109ccaaf04edde9a66f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use DropdownMenu, DropdownMenuItem, and the IconButton components to implement a custom drop-down menu. The DropdownMenu and DropdownMenuItem components are used to display the menu items, while the IconButton is the trigger to display or hide the drop-down menu.

      The key parameters for the DropdownMenu component include the following:

      expanded: Indicates whether the menu is visible.

      onDismissRequest: Used to handle menu dismissal.

      content: The composable content of the menu, typically containing DropdownMenuItem composables.

      The key parameters for DropdownMenuItem include the following:

      text: Defines the content displayed in the menu item.

      onClick: Callback to handle interaction with the item in the menu.
  - id: live-compose-menus-create-basic-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/menu#create-basic
    revision: web:compose-menus:content@sha256:e1a5a233065f286be7c4ec49359fbf1c3b08592ad362aac52b30b31abca3597a
    sha256: 9e7fb22a64fe274053f543857bfcd1cbdaefba1b359e2883e3ef492bd2723824
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following snippet demonstrates a minimal DropdownMenu implementation:

      @Composable
      fun MinimalDropdownMenu() {
          var expanded by remember { mutableStateOf(false) }
          Box(
              modifier = Modifier
                  .padding(16.dp)
          ) {
              IconButton(onClick = { expanded = !expanded }) {
                  Icon(painter = rememberVectorPainter(AppIcons.MoreVert), contentDescription = "More options")
              }
              DropdownMenu(
                  expanded = expanded,
                  onDismissRequest = { expanded = false }
              ) {
                  DropdownMenuItem(
                      text = { Text("Option 1") },
                      onClick = { /* Do something... */ }
                  )
                  DropdownMenuItem(
                      text = { Text("Option 2") },
                      onClick = { /* Do something... */ }
                  )
              }
          }
      }Menus.kt
  - id: live-compose-menus-create-longer-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/menu#create-longer
    revision: web:compose-menus:content@sha256:e1a5a233065f286be7c4ec49359fbf1c3b08592ad362aac52b30b31abca3597a
    sha256: b011ee3dc187ba3edec7f3a7e0b29a355a4ad9d3116d40cdc054cb1a58afbbc6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      DropdownMenu is scrollable by default if all the menu items can't be displayed at once. The following snippet creates a longer, scrollable drop-down menu:

      @Composable
      fun LongBasicDropdownMenu() {
          var expanded by remember { mutableStateOf(false) }
          // Placeholder list of 100 strings for demonstration
          val menuItemData = List(100) { "Option ${it + 1}" }

          Box(
              modifier = Modifier
                  .padding(16.dp)
          ) {
              IconButton(onClick = { expanded = !expanded }) {
                  Icon(painter = rememberVectorPainter(AppIcons.MoreVert), contentDescription = "More options")
              }
              DropdownMenu(
                  expanded = expanded,
                  onDismissRequest = { expanded = false }
              ) {
                  menuItemData.forEach { option ->
                      DropdownMenuItem(
                          text = { Text(option) },
                          onClick = { /* Do something... */ }
                      )
                  }
              }
          }
      }Menus.kt
  - id: live-compose-menus-create-longer-with-dividers-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/menu#create-longer-with-dividers
    revision: web:compose-menus:content@sha256:e1a5a233065f286be7c4ec49359fbf1c3b08592ad362aac52b30b31abca3597a
    sha256: d4ec764a2910107d091baf64bb956cfc347e4577e6cf5b178fbf307a4db1f2ec
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      trailingIcon = { Icon(painter = rememberVectorPainter(AppIcons.OpenInNew), contentDescription = null) },
                      onClick = { /* Do something... */ }
                  )
              }
          }
      }Menus.kt

      This code defines a DropdownMenu within a Box.
  - id: live-compose-menus-create-longer-with-dividers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/menu#create-longer-with-dividers
    revision: web:compose-menus:content@sha256:e1a5a233065f286be7c4ec49359fbf1c3b08592ad362aac52b30b31abca3597a
    sha256: cedbaf76b48f40600536191d290c3059fc2df619604267c6a6e78699f8457283
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following snippet shows a more advanced implementation of a drop-down menu. In this snippet, leading and trailing icons are added to menu items, and dividers separate groups of menu items.

      @Composable
      fun DropdownMenuWithDetails() {
          var expanded by remember { mutableStateOf(false) }

          Box(
              modifier = Modifier
                  .fillMaxWidth()
                  .padding(16.dp)
          ) {
              IconButton(onClick = { expanded = !expanded }) {
                  Icon(painter = rememberVectorPainter(AppIcons.MoreVert), contentDescription = "More options")
              }
              DropdownMenu(
                  expanded = expanded,
                  onDismissRequest = { expanded = false }
              ) {
                  // First section
                  DropdownMenuItem(
                      text = { Text("Profile") },
                      leadingIcon = { Icon(painter = rememberVectorPainter(AppIcons.Person), contentDescription = null) },
                      onClick = { /* Do something... */ }
                  )
                  DropdownMenuItem(
                      text = { Text("Settings") },
                      leadingIcon = { Icon(painter = rememberVectorPainter(AppIcons.Settings), contentDescription = null) },
                      onClick = { /* Do something... */ }
                  )

                  HorizontalDivider()

                  // Second section
                  DropdownMenuItem(
                      text = { Text("Send Feedback") },
                      leadingIcon = { Icon(painter = rememberVectorPainter(AppIcons.Feedback), contentDescription = null) },
                      trailingIcon = { Icon(painter = rememberVectorPainter(AppIcons.Send), contentDescription = null) },
                      onClick = { /* Do something... */ }
                  )

                  HorizontalDivider()

                  // Third section
                  DropdownMenuItem(
                      text = { Text("About") },
                      leadingIcon = { Icon(painter = rememberVectorPainter(AppIcons.Info), contentDescription = null) },
                      onClick = { /* Do something... */ }
                  )
                  DropdownMenuItem(
                      text = { Text("Help") },
                      leadingIcon = { Icon(painter = rememberVectorPainter(AppIcons.Help), contentDescription = null) },
  - id: live-compose-menus-key-points-dividers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/menu#key-points-dividers
    revision: web:compose-menus:content@sha256:e1a5a233065f286be7c4ec49359fbf1c3b08592ad362aac52b30b31abca3597a
    sha256: be6c36373d3d477040fa9150cf64fda625337053a6da84be734ab396d3e8218b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The leadingIcon and trailingIcon parameters add icons to the start and end of a DropdownMenuItem.

      An IconButton triggers the menu's expansion.

      The DropdownMenu contains several DropdownMenuItem composables, each representing a selectable action.

      HorizontalDivider composables insert a horizontal line to separate groups of menu items.
  - id: live-compose-menus-key-points-longer-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/menu#key-points-longer
    revision: web:compose-menus:content@sha256:e1a5a233065f286be7c4ec49359fbf1c3b08592ad362aac52b30b31abca3597a
    sha256: 131b009b926912440c657c533817441b59133b6bf81c697bae0c3652b4bd669c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The DropdownMenu is scrollable when the total height of its content exceeds the available space. This code creates a scrollable DropdownMenu that displays 100 placeholder items.

      The forEach loop dynamically generates DropdownMenuItem composables. The items are not lazily created, which means that all 100 drop-down items are created and exist in the composition.

      The IconButton triggers the expansion and collapse of the DropdownMenu when clicked.

      The onClick lambda within each DropdownMenuItem lets you define the action performed when the user selects a menu item.
  - id: live-compose-menus-key-points-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/menu#key-points
    revision: web:compose-menus:content@sha256:e1a5a233065f286be7c4ec49359fbf1c3b08592ad362aac52b30b31abca3597a
    sha256: aa9befe9b7b4cd02b798180a24e32d6483a83740bc4c7fd65347b7f2f6b406d6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Defines a basic DropdownMenu containing two menu items.

      The expanded parameter controls the menu's visibility as expanded or collapsed.

      The onDismissRequest parameter defines a callback that executes when the user closes the menu.

      The DropdownMenuItem composable represents selectable items in the drop-down menu.

      An IconButton triggers the expansion and collapse of the menu.
  - id: live-compose-menus-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/menu#main-content
    revision: web:compose-menus:content@sha256:e1a5a233065f286be7c4ec49359fbf1c3b08592ad362aac52b30b31abca3597a
    sha256: 908c78599aa58929bf3dd2b104cfd47418e7f4131f326e7ccbc0bfab10c1869b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Drop-down menus let users click an icon, text field, or other component, and then select from a list of options on a temporary surface. This guide describes how to create both basic menus and more complex menus with dividers and icons.

      Figure 1.

      A basic drop-down menu with two items listed.
  - id: live-compose-menus-result-dividers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/menu#result-dividers
    revision: web:compose-menus:content@sha256:e1a5a233065f286be7c4ec49359fbf1c3b08592ad362aac52b30b31abca3597a
    sha256: a91e3f88fa92179ec16d18a0b0654a6d567c957914cef63cfd708711917a4325
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The preceding snippet produces a drop-down menu with icons and dividers:

      Figure 4.

      A drop-down menu divided into sections with leading and trailing icons.
  - id: live-compose-menus-result-longer-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/menu#result-longer
    revision: web:compose-menus:content@sha256:e1a5a233065f286be7c4ec49359fbf1c3b08592ad362aac52b30b31abca3597a
    sha256: f01df4397f617a3731ba4d3b77949724331b235cb5853cc7546a5b334417565d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The preceding code snippet produces the following scrollable menu:

      Figure 3.

      A long, scrollable drop-down menu.
  - id: live-compose-menus-result-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/menu#result
    revision: web:compose-menus:content@sha256:e1a5a233065f286be7c4ec49359fbf1c3b08592ad362aac52b30b31abca3597a
    sha256: 04ff27d5b570d2e14b4201de92d8b5d449008f07142e8e7b2e1910b69d770ad9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Figure 2.

      A minimal drop-down menu with only two options.
compose:
  id: live-compose-menus
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3.DropdownMenu
  sections:
    - id: live-compose-menus-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-menus-additional-resources-source
      relatedIds: []
    - id: live-compose-menus-api-surface
      title: API surface
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-menus-api-surface-source
      relatedIds: []
    - id: live-compose-menus-create-basic
      title: Create a basic drop-down menu
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-menus-create-basic-source
      relatedIds: []
    - id: live-compose-menus-create-longer
      title: Create a longer drop-down menu
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-menus-create-longer-source
      relatedIds: []
    - id: live-compose-menus-create-longer-with-dividers
      title: Create a longer drop-down menu with dividers
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-menus-create-longer-with-dividers-source
      relatedIds: []
    - id: live-compose-menus-create-longer-with-dividers-2
      title: Create a longer drop-down menu with dividers
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-menus-create-longer-with-dividers-2-source
      relatedIds: []
    - id: live-compose-menus-key-points
      title: Key points about the code
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-menus-key-points-source
      relatedIds: []
    - id: live-compose-menus-key-points-dividers
      title: Key points about the code
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-menus-key-points-dividers-source
      relatedIds: []
    - id: live-compose-menus-key-points-longer
      title: Key points about the code
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-menus-key-points-longer-source
      relatedIds: []
    - id: live-compose-menus-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-menus-main-content-source
      relatedIds: []
    - id: live-compose-menus-result
      title: Result
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-menus-result-source
      relatedIds: []
    - id: live-compose-menus-result-dividers
      title: Result
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-menus-result-dividers-source
      relatedIds: []
    - id: live-compose-menus-result-longer
      title: Result
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-menus-result-longer-source
      relatedIds: []
---

# Compose menus

Public source: https://developer.android.com/develop/ui/compose/components/menu

## Additional resources

Material Design: Menus

Sources: [live-compose-menus-additional-resources-source](https://developer.android.com/develop/ui/compose/components/menu#additional-resources)

## API surface

Use DropdownMenu, DropdownMenuItem, and the IconButton components to implement a custom drop-down menu. The DropdownMenu and DropdownMenuItem components are used to display the menu items, while the IconButton is the trigger to display or hide the drop-down menu.

The key parameters for the DropdownMenu component include the following:

expanded: Indicates whether the menu is visible.

onDismissRequest: Used to handle menu dismissal.

content: The composable content of the menu, typically containing DropdownMenuItem composables.

The key parameters for DropdownMenuItem include the following:

text: Defines the content displayed in the menu item.

onClick: Callback to handle interaction with the item in the menu.

Sources: [live-compose-menus-api-surface-source](https://developer.android.com/develop/ui/compose/components/menu#api-surface)

## Create a basic drop-down menu

The following snippet demonstrates a minimal DropdownMenu implementation:

@Composable
fun MinimalDropdownMenu() {
    var expanded by remember { mutableStateOf(false) }
    Box(
        modifier = Modifier
            .padding(16.dp)
    ) {
        IconButton(onClick = { expanded = !expanded }) {
            Icon(painter = rememberVectorPainter(AppIcons.MoreVert), contentDescription = "More options")
        }
        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false }
        ) {
            DropdownMenuItem(
                text = { Text("Option 1") },
                onClick = { /* Do something... */ }
            )
            DropdownMenuItem(
                text = { Text("Option 2") },
                onClick = { /* Do something... */ }
            )
        }
    }
}Menus.kt

Sources: [live-compose-menus-create-basic-source](https://developer.android.com/develop/ui/compose/components/menu#create-basic)

## Create a longer drop-down menu

DropdownMenu is scrollable by default if all the menu items can't be displayed at once. The following snippet creates a longer, scrollable drop-down menu:

@Composable
fun LongBasicDropdownMenu() {
    var expanded by remember { mutableStateOf(false) }
    // Placeholder list of 100 strings for demonstration
    val menuItemData = List(100) { "Option ${it + 1}" }

    Box(
        modifier = Modifier
            .padding(16.dp)
    ) {
        IconButton(onClick = { expanded = !expanded }) {
            Icon(painter = rememberVectorPainter(AppIcons.MoreVert), contentDescription = "More options")
        }
        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false }
        ) {
            menuItemData.forEach { option ->
                DropdownMenuItem(
                    text = { Text(option) },
                    onClick = { /* Do something... */ }
                )
            }
        }
    }
}Menus.kt

Sources: [live-compose-menus-create-longer-source](https://developer.android.com/develop/ui/compose/components/menu#create-longer)

## Create a longer drop-down menu with dividers

The following snippet shows a more advanced implementation of a drop-down menu. In this snippet, leading and trailing icons are added to menu items, and dividers separate groups of menu items.

@Composable
fun DropdownMenuWithDetails() {
    var expanded by remember { mutableStateOf(false) }

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
    ) {
        IconButton(onClick = { expanded = !expanded }) {
            Icon(painter = rememberVectorPainter(AppIcons.MoreVert), contentDescription = "More options")
        }
        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false }
        ) {
            // First section
            DropdownMenuItem(
                text = { Text("Profile") },
                leadingIcon = { Icon(painter = rememberVectorPainter(AppIcons.Person), contentDescription = null) },
                onClick = { /* Do something... */ }
            )
            DropdownMenuItem(
                text = { Text("Settings") },
                leadingIcon = { Icon(painter = rememberVectorPainter(AppIcons.Settings), contentDescription = null) },
                onClick = { /* Do something... */ }
            )

            HorizontalDivider()

            // Second section
            DropdownMenuItem(
                text = { Text("Send Feedback") },
                leadingIcon = { Icon(painter = rememberVectorPainter(AppIcons.Feedback), contentDescription = null) },
                trailingIcon = { Icon(painter = rememberVectorPainter(AppIcons.Send), contentDescription = null) },
                onClick = { /* Do something... */ }
            )

            HorizontalDivider()

            // Third section
            DropdownMenuItem(
                text = { Text("About") },
                leadingIcon = { Icon(painter = rememberVectorPainter(AppIcons.Info), contentDescription = null) },
                onClick = { /* Do something... */ }
            )
            DropdownMenuItem(
                text = { Text("Help") },
                leadingIcon = { Icon(painter = rememberVectorPainter(AppIcons.Help), contentDescription = null) },

Sources: [live-compose-menus-create-longer-with-dividers-source](https://developer.android.com/develop/ui/compose/components/menu#create-longer-with-dividers)

## Create a longer drop-down menu with dividers

trailingIcon = { Icon(painter = rememberVectorPainter(AppIcons.OpenInNew), contentDescription = null) },
                onClick = { /* Do something... */ }
            )
        }
    }
}Menus.kt

This code defines a DropdownMenu within a Box.

Sources: [live-compose-menus-create-longer-with-dividers-2-source](https://developer.android.com/develop/ui/compose/components/menu#create-longer-with-dividers)

## Key points about the code

Defines a basic DropdownMenu containing two menu items.

The expanded parameter controls the menu's visibility as expanded or collapsed.

The onDismissRequest parameter defines a callback that executes when the user closes the menu.

The DropdownMenuItem composable represents selectable items in the drop-down menu.

An IconButton triggers the expansion and collapse of the menu.

Sources: [live-compose-menus-key-points-source](https://developer.android.com/develop/ui/compose/components/menu#key-points)

## Key points about the code

The leadingIcon and trailingIcon parameters add icons to the start and end of a DropdownMenuItem.

An IconButton triggers the menu's expansion.

The DropdownMenu contains several DropdownMenuItem composables, each representing a selectable action.

HorizontalDivider composables insert a horizontal line to separate groups of menu items.

Sources: [live-compose-menus-key-points-dividers-source](https://developer.android.com/develop/ui/compose/components/menu#key-points-dividers)

## Key points about the code

The DropdownMenu is scrollable when the total height of its content exceeds the available space. This code creates a scrollable DropdownMenu that displays 100 placeholder items.

The forEach loop dynamically generates DropdownMenuItem composables. The items are not lazily created, which means that all 100 drop-down items are created and exist in the composition.

The IconButton triggers the expansion and collapse of the DropdownMenu when clicked.

The onClick lambda within each DropdownMenuItem lets you define the action performed when the user selects a menu item.

Sources: [live-compose-menus-key-points-longer-source](https://developer.android.com/develop/ui/compose/components/menu#key-points-longer)

## Introduction

Drop-down menus let users click an icon, text field, or other component, and then select from a list of options on a temporary surface. This guide describes how to create both basic menus and more complex menus with dividers and icons.

Figure 1.

A basic drop-down menu with two items listed.

Sources: [live-compose-menus-main-content-source](https://developer.android.com/develop/ui/compose/components/menu#main-content)

## Result

Figure 2.

A minimal drop-down menu with only two options.

Sources: [live-compose-menus-result-source](https://developer.android.com/develop/ui/compose/components/menu#result)

## Result

The preceding snippet produces a drop-down menu with icons and dividers:

Figure 4.

A drop-down menu divided into sections with leading and trailing icons.

Sources: [live-compose-menus-result-dividers-source](https://developer.android.com/develop/ui/compose/components/menu#result-dividers)

## Result

The preceding code snippet produces the following scrollable menu:

Figure 3.

A long, scrollable drop-down menu.

Sources: [live-compose-menus-result-longer-source](https://developer.android.com/develop/ui/compose/components/menu#result-longer)
