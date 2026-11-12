---
type: reference
title: Dialog
description: "Public source: https://developer.android.com/develop/ui/compose/components/dialog"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-dialog-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/dialog#additional-resources
    revision: web:compose-guide-components-dialog:content@sha256:09b53544d6154d0508729c5012ad7c4a3df986815dafc5346cccd65f17bffa3c
    sha256: c58f584917c26b87393751417c554a2a41767de1d0757ff519840bb0047b7c07
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Material UI docs
  - id: live-compose-guide-components-dialog-advanced-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/dialog#advanced
    revision: web:compose-guide-components-dialog:content@sha256:09b53544d6154d0508729c5012ad7c4a3df986815dafc5346cccd65f17bffa3c
    sha256: 3cc89cfd3a57e0b7e911ea1b12cdf318d42396a5497398f01e925d3e9686fb5a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      implementation appears as follows:

      Figure 4.

      A dialog that includes an image.
  - id: live-compose-guide-components-dialog-advanced-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/dialog#advanced
    revision: web:compose-guide-components-dialog:content@sha256:09b53544d6154d0508729c5012ad7c4a3df986815dafc5346cccd65f17bffa3c
    sha256: e88b8d7459d79c1deda9fc4b5c4285d483b1f47e6478b5b635fe9a993f406d16
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following is a more advanced implementation of the Dialog composable. In this case, the component manually implements a similar interface to the preceding AlertDialog example.

      @Composable
      fun DialogWithImage(
          onDismissRequest: () -> Unit,
          onConfirmation: () -> Unit,
          painter: Painter,
          imageDescription: String,
      ) {
          Dialog(onDismissRequest = { onDismissRequest() }) {
              // Use the Material dialog shape and color. The Card clips the image to its rounded corners.
              Card(
                  modifier = Modifier
                      .fillMaxWidth()
                      .padding(16.dp),
                  shape = MaterialTheme.shapes.extraLarge,
                  colors = CardDefaults.cardColors(
                      containerColor = MaterialTheme.colorScheme.surfaceContainerHigh,
                  ),
              ) {
                  Column {
                      // The image fills the full width of the dialog.
                      Image(
                          painter = painter,
                          contentDescription = imageDescription,
                          contentScale = ContentScale.Crop,
                          modifier = Modifier
                              .fillMaxWidth()
                              .height(160.dp)
                      )
                      Text(
                          text = "This is a dialog with buttons and an image.",
                          style = MaterialTheme.typography.bodyMedium,
                          color = MaterialTheme.colorScheme.onSurfaceVariant,
                          modifier = Modifier.padding(start = 24.dp, top = 24.dp, end = 24.dp),
                      )
                      // Material dialogs align their actions to the end, 8.dp apart.
                      Row(
                          modifier = Modifier
                              .fillMaxWidth()
                              .padding(24.dp),
                          horizontalArrangement = Arrangement.spacedBy(8.dp, Alignment.End),
                      ) {
                          TextButton(onClick = { onDismissRequest() }) {
                              Text("Dismiss")
                          }
                          TextButton(onClick = { onConfirmation() }) {
                              Text("Confirm")
                          }
                      }
                  }
              }
          }
      }Dialog.kt

      This
  - id: live-compose-guide-components-dialog-alert-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/dialog#alert
    revision: web:compose-guide-components-dialog:content@sha256:09b53544d6154d0508729c5012ad7c4a3df986815dafc5346cccd65f17bffa3c
    sha256: 53441d8d6d15757d799a4b84622d897087177856acb8bc54b3d59de225cdfaac
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      openAlertDialog.value = false
                              println("Confirmation registered") // Add logic here to handle confirmation.
                          },
                          dialogTitle = "Alert dialog example",
                          dialogText = "This is an example of an alert dialog with buttons.",
                          icon = AppIcons.Info
                      )
                  }
              }
          }
      }Dialog.kt

      This implementation appears as follows:

      Figure 2.

      An alert dialog with buttons.
  - id: live-compose-guide-components-dialog-alert-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/dialog#alert
    revision: web:compose-guide-components-dialog:content@sha256:09b53544d6154d0508729c5012ad7c4a3df986815dafc5346cccd65f17bffa3c
    sha256: c5d79063444107d59a7e0f05682f97e4f381779d13f978b42e907fc17069da93
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The AlertDialog composable provides a convenient API for creating a Material Design themed dialog. AlertDialog has specific parameters for handling particular elements of the dialog. Among them are the following:

      title: The text that appears along the top of the dialog.

      text: The text that appears centered within the dialog.

      icon: The graphic that appears at the top of the dialog.

      onDismissRequest: The function called when the user dismisses the dialog, such as by tapping outside of it.

      dismissButton: A composable that serves as the dismiss button.

      confirmButton: A composable that serves as the confirm button.

      The following example implements two buttons in an alert dialog, one that dismisses the dialog, and another that confirms its request.

      @Composable
      fun AlertDialogExample(
          onDismissRequest: () -> Unit,
          onConfirmation: () -> Unit,
          dialogTitle: String,
          dialogText: String,
          icon: ImageVector,
      ) {
          AlertDialog(
              icon = {
                  Icon(painter = rememberVectorPainter(icon), contentDescription = "Example Icon")
              },
              title = {
                  Text(text = dialogTitle)
              },
              text = {
                  Text(text = dialogText)
              },
              onDismissRequest = {
                  onDismissRequest()
              },
              confirmButton = {
                  TextButton(
                      onClick = {
                          onConfirmation()
                      }
                  ) {
                      Text("Confirm")
                  }
              },
              dismissButton = {
                  TextButton(
                      onClick = {
                          onDismissRequest()
                      }
                  ) {
                      Text("Dismiss")
                  }
              }
          )
      }Dialog.kt

      This implementation implies a parent composable that passes arguments to the child composable in this way:

      @Composable
      fun DialogExamples() {
          // ...
          val openAlertDialog = remember { mutableStateOf(false) }

          // ...
              when {
                  // ...
                  openAlertDialog.value -> {
                      AlertDialogExample(
                          onDismissRequest = { openAlertDialog.value = false },
                          onConfirmation = {
  - id: live-compose-guide-components-dialog-basic-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/dialog#basic
    revision: web:compose-guide-components-dialog:content@sha256:09b53544d6154d0508729c5012ad7c4a3df986815dafc5346cccd65f17bffa3c
    sha256: 0a3bd248e7ac5b73879ccc92efe4ddb60a49a663423e67b42de43d455d9d8d23
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following example is a basic implementation of the Dialog composable. Note that it uses a Card as the secondary container. Without the Card, the Text component would appear alone above the main app content.

      @Composable
      fun MinimalDialog(onDismissRequest: () -> Unit) {
          Dialog(onDismissRequest = { onDismissRequest() }) {
              Card(
                  modifier = Modifier
                      .fillMaxWidth()
                      .height(200.dp)
                      .padding(16.dp),
                  shape = RoundedCornerShape(16.dp),
              ) {
                  Text(
                      text = "This is a minimal dialog",
                      modifier = Modifier
                          .fillMaxSize()
                          .wrapContentSize(Alignment.Center),
                      textAlign = TextAlign.Center,
                  )
              }
          }
      }Dialog.kt

      This implementation appears as follows. Note that when the dialog is open, the main app content beneath it appears darkened and grayed out:

      Figure 3.

      Minimal dialog.
  - id: live-compose-guide-components-dialog-dialog-composable-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/dialog#dialog-composable
    revision: web:compose-guide-components-dialog:content@sha256:09b53544d6154d0508729c5012ad7c4a3df986815dafc5346cccd65f17bffa3c
    sha256: e74ef20340ebbc424c6bf27a8c92aadf75d36ecc26ed63d499bdf15c17c91e16
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Dialog is a basic composable that doesn't provide any styling or predefined slots for content. It is a relatively straightforward container that you should populate with a container such as Card. The following are some of the key parameters of a dialog:

      onDismissRequest: The lambda called when the user closes the dialog.

      properties: An instance of DialogProperties that provides some additional scope for customization.
  - id: live-compose-guide-components-dialog-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/dialog#main-content
    revision: web:compose-guide-components-dialog:content@sha256:09b53544d6154d0508729c5012ad7c4a3df986815dafc5346cccd65f17bffa3c
    sha256: 4baa90f2195f88de26a05ce0fa5981982e8067559019ce5fa75d39877fe18318
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The Dialog component displays dialog messages or requests user input on a layer above the main app content. It creates an interruptive UI experience to capture user attention.

      Among the use cases for a dialog are the following:

      Confirming user action, such as when deleting a file.

      Requesting user input, such as in a to-do list app.

      Presenting a list of options for user selection, like choosing a country in a profile setup.

      Figure 1.

      An example of a dialog populated with text and icons.
compose:
  id: live-compose-guide-components-dialog
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-dialog-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-dialog-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-components-dialog-advanced
      title: Advanced example
      aliases:
        - androidx.compose.material3.AlertDialog
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-dialog-advanced-source
      relatedIds: []
    - id: live-compose-guide-components-dialog-advanced-2
      title: Advanced example
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-dialog-advanced-2-source
      relatedIds: []
    - id: live-compose-guide-components-dialog-alert
      title: Alert dialog
      aliases:
        - androidx.compose.material3.AlertDialog
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-dialog-alert-source
      relatedIds: []
    - id: live-compose-guide-components-dialog-alert-2
      title: Alert dialog
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-dialog-alert-2-source
      relatedIds: []
    - id: live-compose-guide-components-dialog-basic
      title: Basic example
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-dialog-basic-source
      relatedIds: []
    - id: live-compose-guide-components-dialog-dialog-composable
      title: Dialog composable
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-dialog-dialog-composable-source
      relatedIds: []
    - id: live-compose-guide-components-dialog-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-dialog-main-content-source
      relatedIds: []
---

# Dialog

Public source: https://developer.android.com/develop/ui/compose/components/dialog

## Additional resources

Material UI docs

Sources: [live-compose-guide-components-dialog-additional-resources-source](https://developer.android.com/develop/ui/compose/components/dialog#additional-resources)

## Advanced example

The following is a more advanced implementation of the Dialog composable. In this case, the component manually implements a similar interface to the preceding AlertDialog example.

@Composable
fun DialogWithImage(
    onDismissRequest: () -> Unit,
    onConfirmation: () -> Unit,
    painter: Painter,
    imageDescription: String,
) {
    Dialog(onDismissRequest = { onDismissRequest() }) {
        // Use the Material dialog shape and color. The Card clips the image to its rounded corners.
        Card(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            shape = MaterialTheme.shapes.extraLarge,
            colors = CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.surfaceContainerHigh,
            ),
        ) {
            Column {
                // The image fills the full width of the dialog.
                Image(
                    painter = painter,
                    contentDescription = imageDescription,
                    contentScale = ContentScale.Crop,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(160.dp)
                )
                Text(
                    text = "This is a dialog with buttons and an image.",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    modifier = Modifier.padding(start = 24.dp, top = 24.dp, end = 24.dp),
                )
                // Material dialogs align their actions to the end, 8.dp apart.
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(24.dp),
                    horizontalArrangement = Arrangement.spacedBy(8.dp, Alignment.End),
                ) {
                    TextButton(onClick = { onDismissRequest() }) {
                        Text("Dismiss")
                    }
                    TextButton(onClick = { onConfirmation() }) {
                        Text("Confirm")
                    }
                }
            }
        }
    }
}Dialog.kt

This

Sources: [live-compose-guide-components-dialog-advanced-source](https://developer.android.com/develop/ui/compose/components/dialog#advanced)

## Advanced example

implementation appears as follows:

Figure 4.

A dialog that includes an image.

Sources: [live-compose-guide-components-dialog-advanced-2-source](https://developer.android.com/develop/ui/compose/components/dialog#advanced)

## Alert dialog

The AlertDialog composable provides a convenient API for creating a Material Design themed dialog. AlertDialog has specific parameters for handling particular elements of the dialog. Among them are the following:

title: The text that appears along the top of the dialog.

text: The text that appears centered within the dialog.

icon: The graphic that appears at the top of the dialog.

onDismissRequest: The function called when the user dismisses the dialog, such as by tapping outside of it.

dismissButton: A composable that serves as the dismiss button.

confirmButton: A composable that serves as the confirm button.

The following example implements two buttons in an alert dialog, one that dismisses the dialog, and another that confirms its request.

@Composable
fun AlertDialogExample(
    onDismissRequest: () -> Unit,
    onConfirmation: () -> Unit,
    dialogTitle: String,
    dialogText: String,
    icon: ImageVector,
) {
    AlertDialog(
        icon = {
            Icon(painter = rememberVectorPainter(icon), contentDescription = "Example Icon")
        },
        title = {
            Text(text = dialogTitle)
        },
        text = {
            Text(text = dialogText)
        },
        onDismissRequest = {
            onDismissRequest()
        },
        confirmButton = {
            TextButton(
                onClick = {
                    onConfirmation()
                }
            ) {
                Text("Confirm")
            }
        },
        dismissButton = {
            TextButton(
                onClick = {
                    onDismissRequest()
                }
            ) {
                Text("Dismiss")
            }
        }
    )
}Dialog.kt

This implementation implies a parent composable that passes arguments to the child composable in this way:

@Composable
fun DialogExamples() {
    // ...
    val openAlertDialog = remember { mutableStateOf(false) }

    // ...
        when {
            // ...
            openAlertDialog.value -> {
                AlertDialogExample(
                    onDismissRequest = { openAlertDialog.value = false },
                    onConfirmation = {

Sources: [live-compose-guide-components-dialog-alert-source](https://developer.android.com/develop/ui/compose/components/dialog#alert)

## Alert dialog

openAlertDialog.value = false
                        println("Confirmation registered") // Add logic here to handle confirmation.
                    },
                    dialogTitle = "Alert dialog example",
                    dialogText = "This is an example of an alert dialog with buttons.",
                    icon = AppIcons.Info
                )
            }
        }
    }
}Dialog.kt

This implementation appears as follows:

Figure 2.

An alert dialog with buttons.

Sources: [live-compose-guide-components-dialog-alert-2-source](https://developer.android.com/develop/ui/compose/components/dialog#alert)

## Basic example

The following example is a basic implementation of the Dialog composable. Note that it uses a Card as the secondary container. Without the Card, the Text component would appear alone above the main app content.

@Composable
fun MinimalDialog(onDismissRequest: () -> Unit) {
    Dialog(onDismissRequest = { onDismissRequest() }) {
        Card(
            modifier = Modifier
                .fillMaxWidth()
                .height(200.dp)
                .padding(16.dp),
            shape = RoundedCornerShape(16.dp),
        ) {
            Text(
                text = "This is a minimal dialog",
                modifier = Modifier
                    .fillMaxSize()
                    .wrapContentSize(Alignment.Center),
                textAlign = TextAlign.Center,
            )
        }
    }
}Dialog.kt

This implementation appears as follows. Note that when the dialog is open, the main app content beneath it appears darkened and grayed out:

Figure 3.

Minimal dialog.

Sources: [live-compose-guide-components-dialog-basic-source](https://developer.android.com/develop/ui/compose/components/dialog#basic)

## Dialog composable

Dialog is a basic composable that doesn't provide any styling or predefined slots for content. It is a relatively straightforward container that you should populate with a container such as Card. The following are some of the key parameters of a dialog:

onDismissRequest: The lambda called when the user closes the dialog.

properties: An instance of DialogProperties that provides some additional scope for customization.

Sources: [live-compose-guide-components-dialog-dialog-composable-source](https://developer.android.com/develop/ui/compose/components/dialog#dialog-composable)

## Introduction

The Dialog component displays dialog messages or requests user input on a layer above the main app content. It creates an interruptive UI experience to capture user attention.

Among the use cases for a dialog are the following:

Confirming user action, such as when deleting a file.

Requesting user input, such as in a to-do list app.

Presenting a list of options for user selection, like choosing a country in a profile setup.

Figure 1.

An example of a dialog populated with text and icons.

Sources: [live-compose-guide-components-dialog-main-content-source](https://developer.android.com/develop/ui/compose/components/dialog#main-content)
