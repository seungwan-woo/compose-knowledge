---
type: reference
title: Floating action button
description: "Public source: https://developer.android.com/develop/ui/compose/components/fab"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-fab-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/fab#additional-resources
    revision: web:compose-guide-components-fab:content@sha256:04dca067122e5095bc7cf6a88d0c90f3a9cbc8e06877c1d22a2fb87cc5a9cfd3
    sha256: 1c08cbfa2e08f56d54a7313996679a40c99777b27a3b8e985eb9bed3d653b219
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Common buttons

      Material UI docs
  - id: live-compose-guide-components-fab-api-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/fab#api
    revision: web:compose-guide-components-fab:content@sha256:04dca067122e5095bc7cf6a88d0c90f3a9cbc8e06877c1d22a2fb87cc5a9cfd3
    sha256: 2caafafc5fbb79b3501e266043a951ace6d289fdc471a4196206be3b90808bb5
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Although there are several composables you can use to create floating action buttons consistent with Material Design, their parameters don't differ greatly. Among the key parameters you should keep in mind are the following:

      onClick: The function called when the user presses the button.

      containerColor: The color of the button.

      contentColor: The color of the icon.
  - id: live-compose-guide-components-fab-basic-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/fab#basic
    revision: web:compose-guide-components-fab:content@sha256:04dca067122e5095bc7cf6a88d0c90f3a9cbc8e06877c1d22a2fb87cc5a9cfd3
    sha256: e9af2cb1eb0d6982abe39b9bbaaea7a77c68b6a4f2f0d68e2bdc57071ffbcdf0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To create a general floating action button, use the basic FloatingActionButton composable. The following example demonstrates a basic implementation of a FAB:

      @Composable
      fun Example(onClick: () -> Unit) {
          FloatingActionButton(
              onClick = { onClick() },
          ) {
              Icon(painter = rememberVectorPainter(AppIcons.Add), "Floating action button.")
          }
      }FloatingActionButton.kt

      This implementation appears as follows:

      Figure 2.

      A floating action button.
  - id: live-compose-guide-components-fab-extended-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/fab#extended
    revision: web:compose-guide-components-fab:content@sha256:04dca067122e5095bc7cf6a88d0c90f3a9cbc8e06877c1d22a2fb87cc5a9cfd3
    sha256: 4708438dd0659af0260994d5ccc3dc2c0261e2b99d25725392463f78e1fa369c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can create more complex floating action buttons with the ExtendedFloatingActionButton composable. The key difference between it and FloatingActionButton is that it has dedicated icon and text parameters. They let you create a button with more complex content that scales to fit its content appropriately.

      The following snippet demonstrates how to implement ExtendedFloatingActionButton, with example values passed for icon and text.

      @Composable
      fun ExtendedExample(onClick: () -> Unit) {
          ExtendedFloatingActionButton(
              onClick = { onClick() },
              icon = { Icon(painter = rememberVectorPainter(AppIcons.Edit), "Extended floating action button.") },
              text = { Text(text = "Extended FAB") },
          )
      }FloatingActionButton.kt

      This implementation appears as follows:

      Figure 5.

      A floating action button with both text and an icon.
  - id: live-compose-guide-components-fab-large-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/fab#large
    revision: web:compose-guide-components-fab:content@sha256:04dca067122e5095bc7cf6a88d0c90f3a9cbc8e06877c1d22a2fb87cc5a9cfd3
    sha256: ff3cf9705928782cba2795f4add7235e8a4c16ccd68d4ab181d902bc21f93417
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To create a large floating action button, use the LargeFloatingActionButton composable. This composable is not significantly different from the other examples aside from the fact that it results in a bigger button.

      The following is a straightforward implementation of a large FAB.

      @Composable
      fun LargeExample(onClick: () -> Unit) {
          LargeFloatingActionButton(
              onClick = { onClick() },
              shape = CircleShape,
          ) {
              Icon(painter = rememberVectorPainter(AppIcons.Add), "Large floating action button")
          }
      }FloatingActionButton.kt

      This implementation appears as follows:

      Figure 4.

      A large floating action button.
  - id: live-compose-guide-components-fab-m3-expressive-update-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/fab#m3-expressive-update
    revision: web:compose-guide-components-fab:content@sha256:0b3ec5547f602c37e3df2dac237a5db00b6cf4821785cb88df3a052c3d912dbb
    sha256: e219cdba2a157f81b24bc9b4264e47286e4387d35bcf65b8921e1a906e46a472
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The FAB offers additional sizes to match the extended FAB and expanded color options, including MediumFloatingActionButton, which is recommended for most situations alongside existing FAB sizes.

      Figure 6.

      Material 3 Expressive floating action button color and size variations.

      For more information about the M3 Expressive updates for floating action buttons, see the Material Design 3 Floating action button guidelines.
  - id: live-compose-guide-components-fab-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/fab#main-content
    revision: web:compose-guide-components-fab:content@sha256:04dca067122e5095bc7cf6a88d0c90f3a9cbc8e06877c1d22a2fb87cc5a9cfd3
    sha256: 22d42b3dbad8310746d576525b6df9316646b2ffdabd3452f95ec2e383e8857c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A Floating Action Button (FAB) is a high-emphasis button that lets the user perform a primary action in an application. It promotes a single, focused action that is the most common pathway a user might take and is typically found anchored to the bottom right of the screen.

      Consider these three use cases where you might use a FAB:

      Create new item: In a note-taking app, a FAB might be used to quickly create a new note.

      Add new contact: In a chat app, a FAB could open an interface that lets the user add someone to a conversation.

      Center location: In a map interface, a FAB could center the map on the user's current location.

      In Material Design, there are four types of FAB:

      FAB: A floating action button of ordinary size.

      Small FAB: A smaller floating action button.

      Large FAB: A larger floating action button.

      Extended FAB: A floating action button that contains more than just an icon.

      Figure 1.

      The four floating action button types.
  - id: live-compose-guide-components-fab-medium-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/fab#medium
    revision: web:compose-guide-components-fab:content@sha256:0b3ec5547f602c37e3df2dac237a5db00b6cf4821785cb88df3a052c3d912dbb
    sha256: b947415aaefd7b8fb5da09c93aace997d482cff15d4723b72e279ef0904cf3cb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The medium FAB is recommended for most situations, and works best in compact and medium windows. Use it for important actions without taking up too much space.

      The following snippet demonstrates how to implement a medium floating action button using MediumFloatingActionButton:

      @Composable
      fun MediumFloatingActionButtonSample() {
          MediumFloatingActionButton(onClick = {}) {
              Icon(
                  painter = rememberVectorPainter(AppIcons.Add),
                  contentDescription = "Add",
                  modifier = Modifier.size(FloatingActionButtonDefaults.MediumIconSize),
              )
          }
      }FloatingActionButton.kt

      A medium floating action button.
  - id: live-compose-guide-components-fab-small-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/fab#small
    revision: web:compose-guide-components-fab:content@sha256:04dca067122e5095bc7cf6a88d0c90f3a9cbc8e06877c1d22a2fb87cc5a9cfd3
    sha256: baf1ed4d3a8f082ffffd33b86d534b682f329b84e00aa1d6553b2bb0206f18ca
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To create a small floating action button, use the SmallFloatingActionButton composable. The following example demonstrates how to do so, with the addition of custom colors.

      @Composable
      fun SmallExample(onClick: () -> Unit) {
          SmallFloatingActionButton(
              onClick = { onClick() },
              containerColor = MaterialTheme.colorScheme.secondaryContainer,
              contentColor = MaterialTheme.colorScheme.secondary
          ) {
              Icon(painter = rememberVectorPainter(AppIcons.Add), "Small floating action button.")
          }
      }FloatingActionButton.kt

      This implementation appears as follows:

      Figure 3.

      A small floating action button.
compose:
  id: live-compose-guide-components-fab
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-fab-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-fab-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-components-fab-api
      title: API surface
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-fab-api-source
      relatedIds: []
    - id: live-compose-guide-components-fab-basic
      title: Floating action button
      aliases:
        - androidx.compose.material3.FloatingActionButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-fab-basic-source
      relatedIds: []
    - id: live-compose-guide-components-fab-extended
      title: Extended button
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.ExtendedFloatingActionButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-fab-extended-source
      relatedIds: []
    - id: live-compose-guide-components-fab-large
      title: Large button
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.LargeFloatingActionButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-fab-large-source
      relatedIds: []
    - id: live-compose-guide-components-fab-m3-expressive-update
      title: M3 Expressive update
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-fab-m3-expressive-update-source
      relatedIds: []
    - id: live-compose-guide-components-fab-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-fab-main-content-source
      relatedIds: []
    - id: live-compose-guide-components-fab-medium
      title: Medium floating action button
      aliases:
        - androidx.compose.material3.FloatingActionButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-fab-medium-source
      relatedIds: []
    - id: live-compose-guide-components-fab-small
      title: Small button
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.SmallFloatingActionButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-fab-small-source
      relatedIds: []
---

# Floating action button

Public source: https://developer.android.com/develop/ui/compose/components/fab

## Additional resources

Common buttons

Material UI docs

Sources: [live-compose-guide-components-fab-additional-resources-source](https://developer.android.com/develop/ui/compose/components/fab#additional-resources)

## API surface

Although there are several composables you can use to create floating action buttons consistent with Material Design, their parameters don't differ greatly. Among the key parameters you should keep in mind are the following:

onClick: The function called when the user presses the button.

containerColor: The color of the button.

contentColor: The color of the icon.

Sources: [live-compose-guide-components-fab-api-source](https://developer.android.com/develop/ui/compose/components/fab#api)

## Floating action button

To create a general floating action button, use the basic FloatingActionButton composable. The following example demonstrates a basic implementation of a FAB:

@Composable
fun Example(onClick: () -> Unit) {
    FloatingActionButton(
        onClick = { onClick() },
    ) {
        Icon(painter = rememberVectorPainter(AppIcons.Add), "Floating action button.")
    }
}FloatingActionButton.kt

This implementation appears as follows:

Figure 2.

A floating action button.

Sources: [live-compose-guide-components-fab-basic-source](https://developer.android.com/develop/ui/compose/components/fab#basic)

## Extended button

You can create more complex floating action buttons with the ExtendedFloatingActionButton composable. The key difference between it and FloatingActionButton is that it has dedicated icon and text parameters. They let you create a button with more complex content that scales to fit its content appropriately.

The following snippet demonstrates how to implement ExtendedFloatingActionButton, with example values passed for icon and text.

@Composable
fun ExtendedExample(onClick: () -> Unit) {
    ExtendedFloatingActionButton(
        onClick = { onClick() },
        icon = { Icon(painter = rememberVectorPainter(AppIcons.Edit), "Extended floating action button.") },
        text = { Text(text = "Extended FAB") },
    )
}FloatingActionButton.kt

This implementation appears as follows:

Figure 5.

A floating action button with both text and an icon.

Sources: [live-compose-guide-components-fab-extended-source](https://developer.android.com/develop/ui/compose/components/fab#extended)

## Large button

To create a large floating action button, use the LargeFloatingActionButton composable. This composable is not significantly different from the other examples aside from the fact that it results in a bigger button.

The following is a straightforward implementation of a large FAB.

@Composable
fun LargeExample(onClick: () -> Unit) {
    LargeFloatingActionButton(
        onClick = { onClick() },
        shape = CircleShape,
    ) {
        Icon(painter = rememberVectorPainter(AppIcons.Add), "Large floating action button")
    }
}FloatingActionButton.kt

This implementation appears as follows:

Figure 4.

A large floating action button.

Sources: [live-compose-guide-components-fab-large-source](https://developer.android.com/develop/ui/compose/components/fab#large)

## M3 Expressive update

The FAB offers additional sizes to match the extended FAB and expanded color options, including MediumFloatingActionButton, which is recommended for most situations alongside existing FAB sizes.

Figure 6.

Material 3 Expressive floating action button color and size variations.

For more information about the M3 Expressive updates for floating action buttons, see the Material Design 3 Floating action button guidelines.

Sources: [live-compose-guide-components-fab-m3-expressive-update-source](https://developer.android.com/develop/ui/compose/components/fab#m3-expressive-update)

## Introduction

A Floating Action Button (FAB) is a high-emphasis button that lets the user perform a primary action in an application. It promotes a single, focused action that is the most common pathway a user might take and is typically found anchored to the bottom right of the screen.

Consider these three use cases where you might use a FAB:

Create new item: In a note-taking app, a FAB might be used to quickly create a new note.

Add new contact: In a chat app, a FAB could open an interface that lets the user add someone to a conversation.

Center location: In a map interface, a FAB could center the map on the user's current location.

In Material Design, there are four types of FAB:

FAB: A floating action button of ordinary size.

Small FAB: A smaller floating action button.

Large FAB: A larger floating action button.

Extended FAB: A floating action button that contains more than just an icon.

Figure 1.

The four floating action button types.

Sources: [live-compose-guide-components-fab-main-content-source](https://developer.android.com/develop/ui/compose/components/fab#main-content)

## Medium floating action button

The medium FAB is recommended for most situations, and works best in compact and medium windows. Use it for important actions without taking up too much space.

The following snippet demonstrates how to implement a medium floating action button using MediumFloatingActionButton:

@Composable
fun MediumFloatingActionButtonSample() {
    MediumFloatingActionButton(onClick = {}) {
        Icon(
            painter = rememberVectorPainter(AppIcons.Add),
            contentDescription = "Add",
            modifier = Modifier.size(FloatingActionButtonDefaults.MediumIconSize),
        )
    }
}FloatingActionButton.kt

A medium floating action button.

Sources: [live-compose-guide-components-fab-medium-source](https://developer.android.com/develop/ui/compose/components/fab#medium)

## Small button

To create a small floating action button, use the SmallFloatingActionButton composable. The following example demonstrates how to do so, with the addition of custom colors.

@Composable
fun SmallExample(onClick: () -> Unit) {
    SmallFloatingActionButton(
        onClick = { onClick() },
        containerColor = MaterialTheme.colorScheme.secondaryContainer,
        contentColor = MaterialTheme.colorScheme.secondary
    ) {
        Icon(painter = rememberVectorPainter(AppIcons.Add), "Small floating action button.")
    }
}FloatingActionButton.kt

This implementation appears as follows:

Figure 3.

A small floating action button.

Sources: [live-compose-guide-components-fab-small-source](https://developer.android.com/develop/ui/compose/components/fab#small)
