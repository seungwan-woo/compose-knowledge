---
type: reference
title: Snackbar
description: "Public source: https://developer.android.com/develop/ui/compose/components/snackbar"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-snackbar-action-points-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/snackbar#action-points
    revision: web:compose-guide-components-snackbar:content@sha256:b99af85159626e4c5b9656ca7e30da661c4ce2a9a2ee9ad13da25f26f03583bd
    sha256: b7b1c70096c16e0b7c053269707ef10558a168d5609dbd9d36e32bacb9e78e92
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      actionLabel = "Action": Sets the action button text.

      duration = SnackbarDuration.Indefinite: Keeps the snackbar displayed until the user or program dismisses it.

      SnackbarResult.ActionPerformed: Signifies that the user clicked the snackbar's action button.

      SnackbarResult.Dismissed: Signifies that the user dismissed the snackbar without clicking the action button.
  - id: live-compose-guide-components-snackbar-basic-example-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/snackbar#basic-example
    revision: web:compose-guide-components-snackbar:content@sha256:b99af85159626e4c5b9656ca7e30da661c4ce2a9a2ee9ad13da25f26f03583bd
    sha256: 46a2964f2e95a3e475688f44ad4b8af6b4d8e5f4bffdf5e5b1e9ccf2ecefd2fa
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To implement a snackbar, you first create SnackbarHost, which includes a SnackbarHostState property. SnackbarHostState provides access to the showSnackbar() function which you can use to display your snackbar.

      This suspending function requires a CoroutineScope—like the one returned by rememberCoroutineScope—and can be called in response to UI events to show a Snackbar within Scaffold.

      val scope = rememberCoroutineScope()
      val snackbarHostState = remember { SnackbarHostState() }
      Scaffold(
          snackbarHost = {
              SnackbarHost(hostState = snackbarHostState)
          },
          floatingActionButton = {
              ExtendedFloatingActionButton(
                  text = { Text("Show snackbar") },
                  icon = { Icon(Icons.Filled.Image, contentDescription = "") },
                  onClick = {
                      scope.launch {
                          snackbarHostState.showSnackbar("Snackbar")
                      }
                  }
              )
          }
      ) { contentPadding ->
          // Screen content
      }MaterialLayoutSnippets.kt
  - id: live-compose-guide-components-snackbar-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/snackbar#main-content
    revision: web:compose-guide-components-snackbar:content@sha256:b99af85159626e4c5b9656ca7e30da661c4ce2a9a2ee9ad13da25f26f03583bd
    sha256: 16d1670c618095e969c1ef41a6e3908454323d4aabd6f479592d08fe7c555192
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The snackbar component serves as a brief notification that appears at the bottom of the screen. It provides feedback about an operation or action without interrupting the user experience. Snackbars disappear after a few seconds. The user can also dismiss them with an action, such as tapping a button.

      Consider these three use cases where you might use a snackbar:

      Action Confirmation: After a user deletes an email or message, a snackbar appears to confirm the action and offer an Undo option.

      Network Status: When the app loses its internet connection, a snackbar pops up to note that it is now offline.

      Data Submission: Upon successfully submitting a form or updating settings, a snackbar notes that the change has saved successfully.

      Figure 1.

      Snackbar examples.
  - id: live-compose-guide-components-snackbar-snackbar-with-action-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/snackbar#snackbar-with-action
    revision: web:compose-guide-components-snackbar:content@sha256:b99af85159626e4c5b9656ca7e30da661c4ce2a9a2ee9ad13da25f26f03583bd
    sha256: 847b975435f69909494104a999fdf1d7e18e2bb85798f184e7ba12fcbfc54f89
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can provide an optional action and adjust the duration of the Snackbar. The snackbarHostState.showSnackbar() function accepts additional actionLabel and duration parameters, and returns a SnackbarResult.

      val scope = rememberCoroutineScope()
      val snackbarHostState = remember { SnackbarHostState() }
      Scaffold(
          snackbarHost = {
              SnackbarHost(hostState = snackbarHostState)
          },
          floatingActionButton = {
              ExtendedFloatingActionButton(
                  text = { Text("Show snackbar") },
                  icon = { Icon(Icons.Filled.Image, contentDescription = "") },
                  onClick = {
                      scope.launch {
                          val result = snackbarHostState
                              .showSnackbar(
                                  message = "Snackbar",
                                  actionLabel = "Action",
                                  // Defaults to SnackbarDuration.Short
                                  duration = SnackbarDuration.Indefinite
                              )
                          when (result) {
                              SnackbarResult.ActionPerformed -> {
                                  /* Handle snackbar action performed */
                              }
                              SnackbarResult.Dismissed -> {
                                  /* Handle snackbar dismissed */
                              }
                          }
                      }
                  }
              )
          }
      ) { contentPadding ->
          // Screen content
      }MaterialLayoutSnippets.kt

      You can provide a custom Snackbar with the snackbarHost parameter. See the SnackbarHost API reference docs for more information.
compose:
  id: live-compose-guide-components-snackbar
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-snackbar-action-points
      title: Key points
      aliases:
        - androidx.compose.material3.SnackbarResult
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-snackbar-action-points-source
      relatedIds: []
    - id: live-compose-guide-components-snackbar-basic-example
      title: Basic example
      aliases:
        - androidx.compose.material3.SnackbarHost
        - androidx.compose.material3.SnackbarHostState
        - androidx.compose.material3.Snackbar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-snackbar-basic-example-source
      relatedIds: []
    - id: live-compose-guide-components-snackbar-main-content
      title: Introduction
      aliases:
        - androidx.compose.material3.Snackbar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-snackbar-main-content-source
      relatedIds: []
    - id: live-compose-guide-components-snackbar-snackbar-with-action
      title: Snackbar with action
      aliases:
        - androidx.compose.material3.SnackbarHost
        - androidx.compose.material3.SnackbarHostState
        - androidx.compose.material3.Snackbar
        - androidx.compose.material3.SnackbarResult
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-snackbar-snackbar-with-action-source
      relatedIds: []
---

# Snackbar

Public source: https://developer.android.com/develop/ui/compose/components/snackbar

## Key points

actionLabel = "Action": Sets the action button text.

duration = SnackbarDuration.Indefinite: Keeps the snackbar displayed until the user or program dismisses it.

SnackbarResult.ActionPerformed: Signifies that the user clicked the snackbar's action button.

SnackbarResult.Dismissed: Signifies that the user dismissed the snackbar without clicking the action button.

Sources: [live-compose-guide-components-snackbar-action-points-source](https://developer.android.com/develop/ui/compose/components/snackbar#action-points)

## Basic example

To implement a snackbar, you first create SnackbarHost, which includes a SnackbarHostState property. SnackbarHostState provides access to the showSnackbar() function which you can use to display your snackbar.

This suspending function requires a CoroutineScope—like the one returned by rememberCoroutineScope—and can be called in response to UI events to show a Snackbar within Scaffold.

val scope = rememberCoroutineScope()
val snackbarHostState = remember { SnackbarHostState() }
Scaffold(
    snackbarHost = {
        SnackbarHost(hostState = snackbarHostState)
    },
    floatingActionButton = {
        ExtendedFloatingActionButton(
            text = { Text("Show snackbar") },
            icon = { Icon(Icons.Filled.Image, contentDescription = "") },
            onClick = {
                scope.launch {
                    snackbarHostState.showSnackbar("Snackbar")
                }
            }
        )
    }
) { contentPadding ->
    // Screen content
}MaterialLayoutSnippets.kt

Sources: [live-compose-guide-components-snackbar-basic-example-source](https://developer.android.com/develop/ui/compose/components/snackbar#basic-example)

## Introduction

The snackbar component serves as a brief notification that appears at the bottom of the screen. It provides feedback about an operation or action without interrupting the user experience. Snackbars disappear after a few seconds. The user can also dismiss them with an action, such as tapping a button.

Consider these three use cases where you might use a snackbar:

Action Confirmation: After a user deletes an email or message, a snackbar appears to confirm the action and offer an Undo option.

Network Status: When the app loses its internet connection, a snackbar pops up to note that it is now offline.

Data Submission: Upon successfully submitting a form or updating settings, a snackbar notes that the change has saved successfully.

Figure 1.

Snackbar examples.

Sources: [live-compose-guide-components-snackbar-main-content-source](https://developer.android.com/develop/ui/compose/components/snackbar#main-content)

## Snackbar with action

You can provide an optional action and adjust the duration of the Snackbar. The snackbarHostState.showSnackbar() function accepts additional actionLabel and duration parameters, and returns a SnackbarResult.

val scope = rememberCoroutineScope()
val snackbarHostState = remember { SnackbarHostState() }
Scaffold(
    snackbarHost = {
        SnackbarHost(hostState = snackbarHostState)
    },
    floatingActionButton = {
        ExtendedFloatingActionButton(
            text = { Text("Show snackbar") },
            icon = { Icon(Icons.Filled.Image, contentDescription = "") },
            onClick = {
                scope.launch {
                    val result = snackbarHostState
                        .showSnackbar(
                            message = "Snackbar",
                            actionLabel = "Action",
                            // Defaults to SnackbarDuration.Short
                            duration = SnackbarDuration.Indefinite
                        )
                    when (result) {
                        SnackbarResult.ActionPerformed -> {
                            /* Handle snackbar action performed */
                        }
                        SnackbarResult.Dismissed -> {
                            /* Handle snackbar dismissed */
                        }
                    }
                }
            }
        )
    }
) { contentPadding ->
    // Screen content
}MaterialLayoutSnippets.kt

You can provide a custom Snackbar with the snackbarHost parameter. See the SnackbarHost API reference docs for more information.

Sources: [live-compose-guide-components-snackbar-snackbar-with-action-source](https://developer.android.com/develop/ui/compose/components/snackbar#snackbar-with-action)
