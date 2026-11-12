---
type: reference
title: Jetpack Compose
description: "Public source: https://developer.android.com/develop/ui/compose/components/scaffold"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-scaffold-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/scaffold#additional-resources
    revision: web:compose-guide-components-scaffold:content@sha256:201b934dea3695a762072e7f4a4e3bba012c2a252753dde271ba4724ea6ad0a7
    sha256: 8361fab29c70a349523ad89fbdb7554584f30c4c5dc304d3955574bef2424c75
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: App bars
  - id: live-compose-guide-components-scaffold-example-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/scaffold#example
    revision: web:compose-guide-components-scaffold:content@sha256:201b934dea3695a762072e7f4a4e3bba012c2a252753dde271ba4724ea6ad0a7
    sha256: ff23482dfd335dc7a75aa4561b832910a083e4231a63cea2d30ac419f194e672
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      text =
                      """
                          This is an example of a scaffold. It uses the Scaffold composable's parameters to create a screen with a simple top app bar, bottom app bar, and floating action button.

                          It also contains some basic inner content, such as this text.

                          You have pressed the floating action button $presses times.
                      """.trimIndent(),
                  )
              }
          }
      }Scaffold.kt

      This implementation appears as follows:

      Figure 1.

      An implementation of scaffold.
  - id: live-compose-guide-components-scaffold-example-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/scaffold#example
    revision: web:compose-guide-components-scaffold:content@sha256:201b934dea3695a762072e7f4a4e3bba012c2a252753dde271ba4724ea6ad0a7
    sha256: 34041679b9cc14860a4cf33f5efb36b14320e87ea3c337012f280872fe4ee54c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The Scaffold composable provides a straightforward API you can use to quickly assemble your app's structure according to Material Design guidelines. Scaffold accepts several composables as parameters. Among these are the following:

      topBar: The app bar across the top of the screen.

      bottomBar: The app bar across the bottom of the screen.

      floatingActionButton: A button that hovers over the bottom-right corner of the screen that you can use to expose key actions.

      You can also pass Scaffold content as you would to other containers. It passes PaddingValues to the content lambda that you should apply to your content's root composable to constrain its size.

      The following example shows a complete Scaffold implementation. It contains a top app bar, a bottom app bar, and a floating action button.

      @Composable
      fun ScaffoldExample() {
          var presses by remember { mutableIntStateOf(0) }

          Scaffold(
              topBar = {
                  TopAppBar(
                      colors = topAppBarColors(
                          containerColor = MaterialTheme.colorScheme.primaryContainer,
                          titleContentColor = MaterialTheme.colorScheme.primary,
                      ),
                      title = {
                          Text("Top app bar")
                      }
                  )
              },
              bottomBar = {
                  BottomAppBar(
                      containerColor = MaterialTheme.colorScheme.primaryContainer,
                      contentColor = MaterialTheme.colorScheme.primary,
                  ) {
                      Text(
                          modifier = Modifier
                              .fillMaxWidth(),
                          textAlign = TextAlign.Center,
                          text = "Bottom app bar",
                      )
                  }
              },
              floatingActionButton = {
                  FloatingActionButton(onClick = { presses++ }) {
                      Icon(painter = rememberVectorPainter(AppIcons.Add), contentDescription = "Add")
                  }
              }
          ) { innerPadding ->
              Column(
                  modifier = Modifier
                      .padding(innerPadding),
                  verticalArrangement = Arrangement.spacedBy(16.dp),
              ) {
                  Text(
                      modifier = Modifier.padding(8.dp),
  - id: live-compose-guide-components-scaffold-scaffold-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/scaffold#scaffold
    revision: web:compose-guide-components-scaffold:content@sha256:201b934dea3695a762072e7f4a4e3bba012c2a252753dde271ba4724ea6ad0a7
    sha256: 4705ffde26551d04599fb1c5ac887c44c71561c3ffb429584786aa1c3303c1d1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: In Material Design, a scaffold is a fundamental structure that provides a standardized platform for complex user interfaces. It holds together different parts of the UI, such as app bars and floating action buttons, giving apps a coherent look and feel.
compose:
  id: live-compose-guide-components-scaffold
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-scaffold-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-scaffold-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-components-scaffold-example
      title: Example
      aliases:
        - androidx.compose.material3.Scaffold
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-scaffold-example-source
      relatedIds: []
    - id: live-compose-guide-components-scaffold-example-2
      title: Example
      aliases:
        - androidx.compose.material3.Scaffold
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-scaffold-example-2-source
      relatedIds: []
    - id: live-compose-guide-components-scaffold-scaffold
      title: Scaffold
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-scaffold-scaffold-source
      relatedIds: []
---

# Jetpack Compose

Public source: https://developer.android.com/develop/ui/compose/components/scaffold

## Additional resources

App bars

Sources: [live-compose-guide-components-scaffold-additional-resources-source](https://developer.android.com/develop/ui/compose/components/scaffold#additional-resources)

## Example

The Scaffold composable provides a straightforward API you can use to quickly assemble your app's structure according to Material Design guidelines. Scaffold accepts several composables as parameters. Among these are the following:

topBar: The app bar across the top of the screen.

bottomBar: The app bar across the bottom of the screen.

floatingActionButton: A button that hovers over the bottom-right corner of the screen that you can use to expose key actions.

You can also pass Scaffold content as you would to other containers. It passes PaddingValues to the content lambda that you should apply to your content's root composable to constrain its size.

The following example shows a complete Scaffold implementation. It contains a top app bar, a bottom app bar, and a floating action button.

@Composable
fun ScaffoldExample() {
    var presses by remember { mutableIntStateOf(0) }

    Scaffold(
        topBar = {
            TopAppBar(
                colors = topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                    titleContentColor = MaterialTheme.colorScheme.primary,
                ),
                title = {
                    Text("Top app bar")
                }
            )
        },
        bottomBar = {
            BottomAppBar(
                containerColor = MaterialTheme.colorScheme.primaryContainer,
                contentColor = MaterialTheme.colorScheme.primary,
            ) {
                Text(
                    modifier = Modifier
                        .fillMaxWidth(),
                    textAlign = TextAlign.Center,
                    text = "Bottom app bar",
                )
            }
        },
        floatingActionButton = {
            FloatingActionButton(onClick = { presses++ }) {
                Icon(painter = rememberVectorPainter(AppIcons.Add), contentDescription = "Add")
            }
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .padding(innerPadding),
            verticalArrangement = Arrangement.spacedBy(16.dp),
        ) {
            Text(
                modifier = Modifier.padding(8.dp),

Sources: [live-compose-guide-components-scaffold-example-source](https://developer.android.com/develop/ui/compose/components/scaffold#example)

## Example

text =
                """
                    This is an example of a scaffold. It uses the Scaffold composable's parameters to create a screen with a simple top app bar, bottom app bar, and floating action button.

                    It also contains some basic inner content, such as this text.

                    You have pressed the floating action button $presses times.
                """.trimIndent(),
            )
        }
    }
}Scaffold.kt

This implementation appears as follows:

Figure 1.

An implementation of scaffold.

Sources: [live-compose-guide-components-scaffold-example-2-source](https://developer.android.com/develop/ui/compose/components/scaffold#example)

## Scaffold

In Material Design, a scaffold is a fundamental structure that provides a standardized platform for complex user interfaces. It holds together different parts of the UI, such as app bars and floating action buttons, giving apps a coherent look and feel.

Sources: [live-compose-guide-components-scaffold-scaffold-source](https://developer.android.com/develop/ui/compose/components/scaffold#scaffold)
