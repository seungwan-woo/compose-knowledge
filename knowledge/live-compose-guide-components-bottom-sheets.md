---
type: reference
title: Bottom sheets
description: "Public source: https://developer.android.com/develop/ui/compose/components/bottom-sheets"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-bottom-sheets-control-sheet-state-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/bottom-sheets#control-sheet-state
    revision: web:compose-guide-components-bottom-sheets:content@sha256:905d547b9277fa062803706f445af619aeed5a1c16def803eb0dc2f099c9296e
    sha256: 7f8952cde0b3395fb5eb26c9132a215845c8bac9529588f464c5bdc3a2a2aa20
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To programmatically expand and collapse the sheet, use SheetState. You can use rememberModalBottomSheetState to create an instance of SheetState that must be passed to ModalBottomSheet with the sheetState parameter. SheetState provides access to the show and hide functions, as well as properties related to the current sheet state. These suspending functions require a CoroutineScope — for example, using rememberCoroutineScope — and you can call them in response to UI events. Make sure to remove the ModalBottomSheet from composition upon hiding the bottom sheet.

      val sheetState = rememberModalBottomSheetState()
      val scope = rememberCoroutineScope()
      var showBottomSheet by remember { mutableStateOf(false) }
      Scaffold(
          floatingActionButton = {
              ExtendedFloatingActionButton(
                  text = { Text("Show bottom sheet") },
                  icon = { Icon(Icons.Filled.Add, contentDescription = "") },
                  onClick = {
                      showBottomSheet = true
                  }
              )
          }
      ) { contentPadding ->
          // Screen content

          if (showBottomSheet) {
              ModalBottomSheet(
                  onDismissRequest = {
                      showBottomSheet = false
                  },
                  sheetState = sheetState
              ) {
                  // Sheet content
                  Button(onClick = {
                      scope.launch { sheetState.hide() }.invokeOnCompletion {
                          if (!sheetState.isVisible) {
                              showBottomSheet = false
                          }
                      }
                  }) {
                      Text("Hide bottom sheet")
                  }
              }
          }
      }MaterialLayoutSnippets.kt
  - id: live-compose-guide-components-bottom-sheets-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/bottom-sheets#main-content
    revision: web:compose-guide-components-bottom-sheets:content@sha256:905d547b9277fa062803706f445af619aeed5a1c16def803eb0dc2f099c9296e
    sha256: 26270362ce69fa5a050013a0897d4f4fed52eaab9bbe7dce2ed92c03e4b8f1aa
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If you want to implement a bottom sheet, you can use the ModalBottomSheet composable.

      You can use the content slot, which uses a ColumnScope to layout sheet content composables in a column:

      ModalBottomSheet(onDismissRequest = { /* Executed when the sheet is dismissed */ }) {
          // Sheet content
      }MaterialLayoutSnippets.kt
compose:
  id: live-compose-guide-components-bottom-sheets
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-bottom-sheets-control-sheet-state
      title: Control sheet state programmatically
      aliases:
        - androidx.compose.material3.ModalBottomSheet
        - androidx.compose.material3.SheetState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-bottom-sheets-control-sheet-state-source
      relatedIds: []
    - id: live-compose-guide-components-bottom-sheets-main-content
      title: Introduction
      aliases:
        - androidx.compose.material3.ModalBottomSheet
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-bottom-sheets-main-content-source
      relatedIds: []
---

# Bottom sheets

Public source: https://developer.android.com/develop/ui/compose/components/bottom-sheets

## Control sheet state programmatically

To programmatically expand and collapse the sheet, use SheetState. You can use rememberModalBottomSheetState to create an instance of SheetState that must be passed to ModalBottomSheet with the sheetState parameter. SheetState provides access to the show and hide functions, as well as properties related to the current sheet state. These suspending functions require a CoroutineScope — for example, using rememberCoroutineScope — and you can call them in response to UI events. Make sure to remove the ModalBottomSheet from composition upon hiding the bottom sheet.

val sheetState = rememberModalBottomSheetState()
val scope = rememberCoroutineScope()
var showBottomSheet by remember { mutableStateOf(false) }
Scaffold(
    floatingActionButton = {
        ExtendedFloatingActionButton(
            text = { Text("Show bottom sheet") },
            icon = { Icon(Icons.Filled.Add, contentDescription = "") },
            onClick = {
                showBottomSheet = true
            }
        )
    }
) { contentPadding ->
    // Screen content

    if (showBottomSheet) {
        ModalBottomSheet(
            onDismissRequest = {
                showBottomSheet = false
            },
            sheetState = sheetState
        ) {
            // Sheet content
            Button(onClick = {
                scope.launch { sheetState.hide() }.invokeOnCompletion {
                    if (!sheetState.isVisible) {
                        showBottomSheet = false
                    }
                }
            }) {
                Text("Hide bottom sheet")
            }
        }
    }
}MaterialLayoutSnippets.kt

Sources: [live-compose-guide-components-bottom-sheets-control-sheet-state-source](https://developer.android.com/develop/ui/compose/components/bottom-sheets#control-sheet-state)

## Introduction

If you want to implement a bottom sheet, you can use the ModalBottomSheet composable.

You can use the content slot, which uses a ColumnScope to layout sheet content composables in a column:

ModalBottomSheet(onDismissRequest = { /* Executed when the sheet is dismissed */ }) {
    // Sheet content
}MaterialLayoutSnippets.kt

Sources: [live-compose-guide-components-bottom-sheets-main-content-source](https://developer.android.com/develop/ui/compose/components/bottom-sheets#main-content)
