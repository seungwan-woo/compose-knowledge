---
type: reference
title: Card
description: "Public source: https://developer.android.com/develop/ui/compose/components/card"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-card-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/card#additional-resources
    revision: web:compose-guide-components-card:content@sha256:ea347f9fe4f4a29c8ab5c6f775352cecae4157adf7992cb04e2118efabb46c07
    sha256: c58f584917c26b87393751417c554a2a41767de1d0757ff519840bb0047b7c07
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Material UI docs
  - id: live-compose-guide-components-card-advanced-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/card#advanced
    revision: web:compose-guide-components-card:content@sha256:ea347f9fe4f4a29c8ab5c6f775352cecae4157adf7992cb04e2118efabb46c07
    sha256: 52bb770d578b21fca52188e20f27379d47fba8a711ada890e6a00278f3bcf0e6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      See the reference for the API definition of Card. It defines several parameters that allow you to customize the appearance and behavior of the component.

      Some key parameters to note are the following:

      elevation: Adds a shadow to the component that makes it appear elevated above the background.

      colors: Uses the CardColors type to set the default color of both the container and any children.

      enabled: If you pass false for this parameter, the card appears as disabled and does not respond to user input.

      onClick: Ordinarily, a Card does not accept click events. As such, the primary overload you would like to note is that which defines an onClick parameter. You should use this overload if you would like your implementation of Card to respond to presses from the user.

      The following example demonstrates how you might use these parameters, as well as other common parameters such as shape and modifier.
  - id: live-compose-guide-components-card-basic-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/card#basic
    revision: web:compose-guide-components-card:content@sha256:ea347f9fe4f4a29c8ab5c6f775352cecae4157adf7992cb04e2118efabb46c07
    sha256: e413dd448f931681446b1f7c1008424b74feb15835819fa5ffea9dea667628d8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Card behaves much like other containers in Compose. You declare its content by calling other composables within it. For example, consider how Card contains a call to Text in the following minimal example:

      @Composable
      fun CardMinimalExample() {
          Card() {
              Text(text = "Hello, world!")
          }
      }
  - id: live-compose-guide-components-card-elevated-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/card#elevated
    revision: web:compose-guide-components-card:content@sha256:ea347f9fe4f4a29c8ab5c6f775352cecae4157adf7992cb04e2118efabb46c07
    sha256: 4fcd09bf7202303d99767a163731a2f08f9646661b3438fa619f0a96425fd51e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following snippet demonstrates how to implement an elevated card. Use the dedicated ElevatedCard composable.

      You can use the elevation property to control the appearance of elevation and the resulting shadow.

      @Composable
      fun ElevatedCardExample() {
          ElevatedCard(
              elevation = CardDefaults.cardElevation(
                  defaultElevation = 6.dp
              ),
              modifier = Modifier
                  .size(width = 240.dp, height = 100.dp)
          ) {
              Text(
                  text = "Elevated",
                  modifier = Modifier
                      .padding(16.dp),
                  textAlign = TextAlign.Center,
              )
          }
      }Card.kt

      This implementation appears as follows:

      Figure 3.

      Example of an elevated card.
  - id: live-compose-guide-components-card-filled-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/card#filled
    revision: web:compose-guide-components-card:content@sha256:ea347f9fe4f4a29c8ab5c6f775352cecae4157adf7992cb04e2118efabb46c07
    sha256: 60b90c2a85f97212d979b6a1a7ea813702a72d9d24343632ce6810c2744b30bd
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following is an example of how you can implement a filled card.

      The key here is the use of the colors property to change the filled color.

      @Composable
      fun FilledCardExample() {
          Card(
              colors = CardDefaults.cardColors(
                  containerColor = MaterialTheme.colorScheme.surfaceVariant,
              ),
              modifier = Modifier
                  .size(width = 240.dp, height = 100.dp)
          ) {
              Text(
                  text = "Filled",
                  modifier = Modifier
                      .padding(16.dp),
                  textAlign = TextAlign.Center,
              )
          }
      }Card.kt

      This implementation appears as follows:

      Figure 2.

      Example of a filled card.
  - id: live-compose-guide-components-card-limitations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/card#limitations
    revision: web:compose-guide-components-card:content@sha256:ea347f9fe4f4a29c8ab5c6f775352cecae4157adf7992cb04e2118efabb46c07
    sha256: 03861d01af49633a97e406deb7e6745e8aea00e7a4b93a87037488de603f160f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Cards don't come with inherent scroll or dismiss actions, but can integrate into composables offering these features. For example, to implement swipe to dismiss on a card, integrate it with the SwipeToDismiss composable. To integrate with scroll, use scroll modifiers such as verticalScroll. See the Scroll documentation for more information.
  - id: live-compose-guide-components-card-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/card#main-content
    revision: web:compose-guide-components-card:content@sha256:ea347f9fe4f4a29c8ab5c6f775352cecae4157adf7992cb04e2118efabb46c07
    sha256: 8984abd00d0a6c6bbd66bf27bb0120582c6769cab81ae20f796e922071dddbc4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The Card composable acts as a Material Design container for your UI. Cards typically present a single coherent piece of content. The following examples show where you might use a card:

      A product in a shopping app.

      A news story in a news app.

      A message in a communications app.

      It is the focus on portraying a single piece of content that distinguishes Card from other containers. For example, Scaffold provides general structure to a whole screen. Card is generally a smaller UI element inside a larger layout, whereas a layout component such as Column or Row provides a simpler and more generic API.

      Figure 1.

      An example of a card populated with text and icons.
  - id: live-compose-guide-components-card-outlined-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/card#outlined
    revision: web:compose-guide-components-card:content@sha256:ea347f9fe4f4a29c8ab5c6f775352cecae4157adf7992cb04e2118efabb46c07
    sha256: 9bf12e38bd5dd8ae4f5d617157cbc94bb172042bc93644990a80e38be4a938f0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following is an example of an outlined card. Use the dedicated OutlinedCard composable.

      @Composable
      fun OutlinedCardExample() {
          OutlinedCard(
              colors = CardDefaults.cardColors(
                  containerColor = MaterialTheme.colorScheme.surface,
              ),
              border = BorderStroke(1.dp, Color.Black),
              modifier = Modifier
                  .size(width = 240.dp, height = 100.dp)
          ) {
              Text(
                  text = "Outlined",
                  modifier = Modifier
                      .padding(16.dp),
                  textAlign = TextAlign.Center,
              )
          }
      }Card.kt

      This implementation appears as follows:

      Figure 4.

      Example of an outlined card.
compose:
  id: live-compose-guide-components-card
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-card-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-card-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-components-card-advanced
      title: Advanced implementations
      aliases:
        - androidx.compose.material3.Card
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-card-advanced-source
      relatedIds: []
    - id: live-compose-guide-components-card-basic
      title: Basic implementation
      aliases:
        - androidx.compose.material3.Card
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-card-basic-source
      relatedIds: []
    - id: live-compose-guide-components-card-elevated
      title: Elevated Card
      aliases:
        - androidx.compose.material3.Card
        - androidx.compose.material3.ElevatedCard
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-card-elevated-source
      relatedIds: []
    - id: live-compose-guide-components-card-filled
      title: Filled card
      aliases:
        - androidx.compose.material3.Card
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-card-filled-source
      relatedIds: []
    - id: live-compose-guide-components-card-limitations
      title: Limitations
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-card-limitations-source
      relatedIds: []
    - id: live-compose-guide-components-card-main-content
      title: Introduction
      aliases:
        - androidx.compose.material3.Card
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-card-main-content-source
      relatedIds: []
    - id: live-compose-guide-components-card-outlined
      title: Outlined Card
      aliases:
        - androidx.compose.material3.Card
        - androidx.compose.material3.OutlinedCard
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-card-outlined-source
      relatedIds: []
---

# Card

Public source: https://developer.android.com/develop/ui/compose/components/card

## Additional resources

Material UI docs

Sources: [live-compose-guide-components-card-additional-resources-source](https://developer.android.com/develop/ui/compose/components/card#additional-resources)

## Advanced implementations

See the reference for the API definition of Card. It defines several parameters that allow you to customize the appearance and behavior of the component.

Some key parameters to note are the following:

elevation: Adds a shadow to the component that makes it appear elevated above the background.

colors: Uses the CardColors type to set the default color of both the container and any children.

enabled: If you pass false for this parameter, the card appears as disabled and does not respond to user input.

onClick: Ordinarily, a Card does not accept click events. As such, the primary overload you would like to note is that which defines an onClick parameter. You should use this overload if you would like your implementation of Card to respond to presses from the user.

The following example demonstrates how you might use these parameters, as well as other common parameters such as shape and modifier.

Sources: [live-compose-guide-components-card-advanced-source](https://developer.android.com/develop/ui/compose/components/card#advanced)

## Basic implementation

Card behaves much like other containers in Compose. You declare its content by calling other composables within it. For example, consider how Card contains a call to Text in the following minimal example:

@Composable
fun CardMinimalExample() {
    Card() {
        Text(text = "Hello, world!")
    }
}

Sources: [live-compose-guide-components-card-basic-source](https://developer.android.com/develop/ui/compose/components/card#basic)

## Elevated Card

The following snippet demonstrates how to implement an elevated card. Use the dedicated ElevatedCard composable.

You can use the elevation property to control the appearance of elevation and the resulting shadow.

@Composable
fun ElevatedCardExample() {
    ElevatedCard(
        elevation = CardDefaults.cardElevation(
            defaultElevation = 6.dp
        ),
        modifier = Modifier
            .size(width = 240.dp, height = 100.dp)
    ) {
        Text(
            text = "Elevated",
            modifier = Modifier
                .padding(16.dp),
            textAlign = TextAlign.Center,
        )
    }
}Card.kt

This implementation appears as follows:

Figure 3.

Example of an elevated card.

Sources: [live-compose-guide-components-card-elevated-source](https://developer.android.com/develop/ui/compose/components/card#elevated)

## Filled card

The following is an example of how you can implement a filled card.

The key here is the use of the colors property to change the filled color.

@Composable
fun FilledCardExample() {
    Card(
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant,
        ),
        modifier = Modifier
            .size(width = 240.dp, height = 100.dp)
    ) {
        Text(
            text = "Filled",
            modifier = Modifier
                .padding(16.dp),
            textAlign = TextAlign.Center,
        )
    }
}Card.kt

This implementation appears as follows:

Figure 2.

Example of a filled card.

Sources: [live-compose-guide-components-card-filled-source](https://developer.android.com/develop/ui/compose/components/card#filled)

## Limitations

Cards don't come with inherent scroll or dismiss actions, but can integrate into composables offering these features. For example, to implement swipe to dismiss on a card, integrate it with the SwipeToDismiss composable. To integrate with scroll, use scroll modifiers such as verticalScroll. See the Scroll documentation for more information.

Sources: [live-compose-guide-components-card-limitations-source](https://developer.android.com/develop/ui/compose/components/card#limitations)

## Introduction

The Card composable acts as a Material Design container for your UI. Cards typically present a single coherent piece of content. The following examples show where you might use a card:

A product in a shopping app.

A news story in a news app.

A message in a communications app.

It is the focus on portraying a single piece of content that distinguishes Card from other containers. For example, Scaffold provides general structure to a whole screen. Card is generally a smaller UI element inside a larger layout, whereas a layout component such as Column or Row provides a simpler and more generic API.

Figure 1.

An example of a card populated with text and icons.

Sources: [live-compose-guide-components-card-main-content-source](https://developer.android.com/develop/ui/compose/components/card#main-content)

## Outlined Card

The following is an example of an outlined card. Use the dedicated OutlinedCard composable.

@Composable
fun OutlinedCardExample() {
    OutlinedCard(
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface,
        ),
        border = BorderStroke(1.dp, Color.Black),
        modifier = Modifier
            .size(width = 240.dp, height = 100.dp)
    ) {
        Text(
            text = "Outlined",
            modifier = Modifier
                .padding(16.dp),
            textAlign = TextAlign.Center,
        )
    }
}Card.kt

This implementation appears as follows:

Figure 4.

Example of an outlined card.

Sources: [live-compose-guide-components-card-outlined-source](https://developer.android.com/develop/ui/compose/components/card#outlined)
