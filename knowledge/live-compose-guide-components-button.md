---
type: reference
title: Button
description: "Public source: https://developer.android.com/develop/ui/compose/components/button"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-button-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#additional-resources
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: 8469765c28d402bd04029a167725eb7cc91709a73b520116608c81e365eaa9e7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Floating action button

      Material Design 3 Buttons overview
  - id: live-compose-guide-components-button-api-surface-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#api-surface
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: a4b1ed3b89deb5544499fcaf95d39dbcac31c84f708611d1de0937f7dbe98023
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      onClick

      The function that the system calls when the user presses the button.

      enabled

      When

      false

      , this parameter makes the button appear unavailable and inactive.

      colors

      An instance of

      ButtonColors

      that determines the colors used in the button.

      contentPadding

      The padding within the button.
  - id: live-compose-guide-components-button-elevated-button-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#elevated-button
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: b999c8273e599650aad6d172b89563b5375a730f8a8a1b288d3ba423c2b08ff0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The elevated button component uses the ElevatedButton composable. It has a shadow that represents the elevation effect by default. It is a filled button that includes a shadow.

      The snippet shows how to implement the component and preview it interactively:

      @Composable
      fun ElevatedButtonExample(onClick: () -> Unit) {
          ElevatedButton(onClick = { onClick() }) {
              Text("Elevated")
          }
      }Button.kt

      Figure 5. An elevated button.
  - id: live-compose-guide-components-button-filled-button-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#filled-button
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: 5f04164922a0a02f9958820abd449ebb4db37d62cc9533c23498b5ae3cbfafb4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The filled button component uses the basic Button composable. It is filled with a solid color by default. The snippet shows how to implement the component and preview it interactively:

      @Composable
      fun FilledButtonExample(onClick: () -> Unit) {
          Button(onClick = { onClick() }) {
              Text("Filled")
          }
      }Button.kt

      Figure 2. A filled button.
  - id: live-compose-guide-components-button-filled-tonal-button-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#filled-tonal-button
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: d5053a4aa88caba9a8bf41605425e8e3cd5d7b1e50ebd69a1dd947d5d2c412b0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The filled tonal button component uses the FilledTonalButton composable. It is filled with a tonal color by default.

      The snippet shows how to implement the component and preview it interactively:

      @Composable
      fun FilledTonalButtonExample(onClick: () -> Unit) {
          FilledTonalButton(onClick = { onClick() }) {
              Text("Tonal")
          }
      }Button.kt

      Figure 3. A tonal button.
  - id: live-compose-guide-components-button-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#main-content
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: e2c4d4c405ba1fb35790bd95fd2c1b691b62eaa2ebee4506a940f8458b699dad
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Buttons are fundamental components that allow the user to trigger a defined action. There are five types of buttons. This table describes the appearance of each of the five button types, as well as where you should use them:

      Type Appearance Purpose Filled Solid background with contrasting text. High-emphasis buttons. These are for primary actions in an application, such as "submit" and "save." The shadow effect highlights the button's importance. Filled tonal Background color varies to match the surface. Also for primary or significant actions. Filled tonal buttons provide more visual weight and suit functions such as "add to cart" and "Sign in." Elevated Stands out by having a shadow. Serves a similar purpose to tonal buttons. Increase elevation to make the button appear even more prominently. Outlined Features a border with no fill. Medium-emphasis buttons, containing actions that are important but not primary. They pair well with other buttons to indicate alternative, secondary actions like "Cancel" or "Back." Text Displays text with no background or border. Low-emphasis buttons, ideal for less critical actions such as navigational links, or secondary functions like "Learn More" or "View details."

      This image demonstrates the five types of buttons in Material Design:

      Figure 1. The five button components.
  - id: live-compose-guide-components-button-outlined-button-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#outlined-button
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: 72ad760c0f4889c00a8a5cc54b25a6b79c0a9112a1d33412768304f8c90bab60
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The outlined button component uses the OutlinedButton composable. It appears with an outline by default.

      The snippet shows how to implement the component and preview it interactively:

      @Composable
      fun OutlinedButtonExample(onClick: () -> Unit) {
          OutlinedButton(onClick = { onClick() }) {
              Text("Outlined")
          }
      }Button.kt

      Figure 4. An outlined button.
  - id: live-compose-guide-components-button-text-button-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#text-button
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: e157004b9c5a62178a584e980f0f67125e161b62a137fb005bc6dbd7fe7d4a78
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The text button component uses the TextButton composable. It appears as only text until pressed. It does not have a solid fill or outline by default.

      The snippet shows how to implement the component and preview it interactively:

      @Composable
      fun TextButtonExample(onClick: () -> Unit) {
          TextButton(
              onClick = { onClick() }
          ) {
              Text("Text Button")
          }
      }Button.kt

      Figure 6. A text button.
compose:
  id: live-compose-guide-components-button
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-button-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-components-button-api-surface
      title: API surface
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-api-surface-source
      relatedIds: []
    - id: live-compose-guide-components-button-elevated-button
      title: Elevated button
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ElevatedButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-elevated-button-source
      relatedIds: []
    - id: live-compose-guide-components-button-filled-button
      title: Filled button
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-filled-button-source
      relatedIds: []
    - id: live-compose-guide-components-button-filled-tonal-button
      title: Filled tonal button
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.FilledTonalButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-filled-tonal-button-source
      relatedIds: []
    - id: live-compose-guide-components-button-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-main-content-source
      relatedIds: []
    - id: live-compose-guide-components-button-outlined-button
      title: Outlined button
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.OutlinedButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-outlined-button-source
      relatedIds: []
    - id: live-compose-guide-components-button-text-button
      title: Text button
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.TextButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-text-button-source
      relatedIds: []
---

# Button

Public source: https://developer.android.com/develop/ui/compose/components/button

## Additional resources

Floating action button

Material Design 3 Buttons overview

Sources: [live-compose-guide-components-button-additional-resources-source](https://developer.android.com/develop/ui/compose/components/button#additional-resources)

## API surface

onClick

The function that the system calls when the user presses the button.

enabled

When

false

, this parameter makes the button appear unavailable and inactive.

colors

An instance of

ButtonColors

that determines the colors used in the button.

contentPadding

The padding within the button.

Sources: [live-compose-guide-components-button-api-surface-source](https://developer.android.com/develop/ui/compose/components/button#api-surface)

## Elevated button

The elevated button component uses the ElevatedButton composable. It has a shadow that represents the elevation effect by default. It is a filled button that includes a shadow.

The snippet shows how to implement the component and preview it interactively:

@Composable
fun ElevatedButtonExample(onClick: () -> Unit) {
    ElevatedButton(onClick = { onClick() }) {
        Text("Elevated")
    }
}Button.kt

Figure 5. An elevated button.

Sources: [live-compose-guide-components-button-elevated-button-source](https://developer.android.com/develop/ui/compose/components/button#elevated-button)

## Filled button

The filled button component uses the basic Button composable. It is filled with a solid color by default. The snippet shows how to implement the component and preview it interactively:

@Composable
fun FilledButtonExample(onClick: () -> Unit) {
    Button(onClick = { onClick() }) {
        Text("Filled")
    }
}Button.kt

Figure 2. A filled button.

Sources: [live-compose-guide-components-button-filled-button-source](https://developer.android.com/develop/ui/compose/components/button#filled-button)

## Filled tonal button

The filled tonal button component uses the FilledTonalButton composable. It is filled with a tonal color by default.

The snippet shows how to implement the component and preview it interactively:

@Composable
fun FilledTonalButtonExample(onClick: () -> Unit) {
    FilledTonalButton(onClick = { onClick() }) {
        Text("Tonal")
    }
}Button.kt

Figure 3. A tonal button.

Sources: [live-compose-guide-components-button-filled-tonal-button-source](https://developer.android.com/develop/ui/compose/components/button#filled-tonal-button)

## Introduction

Buttons are fundamental components that allow the user to trigger a defined action. There are five types of buttons. This table describes the appearance of each of the five button types, as well as where you should use them:

Type Appearance Purpose Filled Solid background with contrasting text. High-emphasis buttons. These are for primary actions in an application, such as "submit" and "save." The shadow effect highlights the button's importance. Filled tonal Background color varies to match the surface. Also for primary or significant actions. Filled tonal buttons provide more visual weight and suit functions such as "add to cart" and "Sign in." Elevated Stands out by having a shadow. Serves a similar purpose to tonal buttons. Increase elevation to make the button appear even more prominently. Outlined Features a border with no fill. Medium-emphasis buttons, containing actions that are important but not primary. They pair well with other buttons to indicate alternative, secondary actions like "Cancel" or "Back." Text Displays text with no background or border. Low-emphasis buttons, ideal for less critical actions such as navigational links, or secondary functions like "Learn More" or "View details."

This image demonstrates the five types of buttons in Material Design:

Figure 1. The five button components.

Sources: [live-compose-guide-components-button-main-content-source](https://developer.android.com/develop/ui/compose/components/button#main-content)

## Outlined button

The outlined button component uses the OutlinedButton composable. It appears with an outline by default.

The snippet shows how to implement the component and preview it interactively:

@Composable
fun OutlinedButtonExample(onClick: () -> Unit) {
    OutlinedButton(onClick = { onClick() }) {
        Text("Outlined")
    }
}Button.kt

Figure 4. An outlined button.

Sources: [live-compose-guide-components-button-outlined-button-source](https://developer.android.com/develop/ui/compose/components/button#outlined-button)

## Text button

The text button component uses the TextButton composable. It appears as only text until pressed. It does not have a solid fill or outline by default.

The snippet shows how to implement the component and preview it interactively:

@Composable
fun TextButtonExample(onClick: () -> Unit) {
    TextButton(
        onClick = { onClick() }
    ) {
        Text("Text Button")
    }
}Button.kt

Figure 6. A text button.

Sources: [live-compose-guide-components-button-text-button-source](https://developer.android.com/develop/ui/compose/components/button#text-button)
