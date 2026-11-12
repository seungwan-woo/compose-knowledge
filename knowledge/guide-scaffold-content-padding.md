---
type: reference
title: "Guidance: Apply Scaffold content padding to the content root"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
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
compose:
  id: guide-scaffold-content-padding
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3.Scaffold
  sections:
    - id: guide-scaffold-content-padding
      title: "Guidance: Apply Scaffold content padding to the content root"
      aliases:
        - androidx.compose.material3.Scaffold
        - androidx.compose.foundation.layout.PaddingValues
        - innerPadding
        - scaffold content padding
        - 스캐폴드 패딩
        - 콘텐츠 여백
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-scaffold-example-source
      relatedIds:
        - live-compose-guide-components-scaffold-example
---

# Guidance: Apply Scaffold content padding to the content root

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Apply Scaffold content padding to the content root

Guidance: Use Scaffold to assemble a Material screen from slots such as topBar, bottomBar, and floatingActionButton. Its content lambda receives PaddingValues that should be applied to the content root to constrain its size. A typical pattern is Scaffold(...) { innerPadding -> Column(Modifier.padding(innerPadding)) { ... } }. Limitation: supplying bars to Scaffold does not replace applying the padding passed to the content lambda; the documented example explicitly applies it to the Column.

Sources: [live-compose-guide-components-scaffold-example-source](https://developer.android.com/develop/ui/compose/components/scaffold#example)
