---
type: reference
title: "Guidance: Save only the UI state needed for restoration"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-state-saving-best-practice-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-saving#best_practice
    revision: web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701
    sha256: 582c0d48c21d8466ac598fd323d78682df65f4df308725913b577e893c05141b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      rememberSaveable uses a Bundle to store UI state, which is shared by other APIs that also write to it, like onSaveInstanceState() calls in your activity. However, the size of this Bundle is limited, and storing large objects could lead to TransactionTooLarge exceptions in runtime. This can be particularly problematic in single Activity apps where the same Bundle is being used across the app.

      To avoid this type of crash, you should not store large complex objects or lists of objects in the bundle.

      Instead, store the minimum state required, like IDs or keys, and use these to delegate restoring more complex UI state to other mechanisms, like persistent storage.

      These design choices depend on the specific use cases for your app and how your users expect it to behave.
  - id: live-compose-guide-state-saving-ui-logic-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-saving#ui-logic
    revision: web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701
    sha256: ba153c5b9f9a6441fb6b34e782ff511269c6cebaf06adb6d242f9aef71744acc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If your state is hoisted in the UI, either in composable functions or plain state holder classes scoped to the Composition, you can use rememberSaveable to retain state across activity and process recreation.

      In the following snippet, rememberSaveable is used to store a single boolean UI element state:

      @Composable
      fun ChatBubble(
          message: Message
      ) {
          var showDetails by rememberSaveable { mutableStateOf(false) }

          ClickableText(
              text = AnnotatedString(message.content),
              onClick = { showDetails = !showDetails }
          )

          if (showDetails) {
              Text(message.timestamp)
          }
      }SavingUIStateSnippets.kt

      Figure 1

      . Chat message bubble expands and collapses when tapped.

      showDetails is a boolean variable that stores if the chat bubble is collapsed or expanded.

      rememberSaveable stores UI element state in a Bundle through the saved instance state mechanism.

      It is able to store primitive types to the bundle automatically. If your state is held in a type that is not primitive, like a data class, you can use different storing mechanisms, such as using the Parcelize annotation, using Compose APIs like listSaver and mapSaver, or implementing a custom saver class extending Compose runtime Saver class. See the Ways to store state documentation to learn more about these methods.

      In the following snippet, the rememberLazyListState Compose API stores LazyListState, which consists of the scroll state of a LazyColumn or LazyRow, using rememberSaveable. It uses a LazyListState.Saver, which is a custom saver that is able to store and restore the scroll state. After an activity or process recreation (for example, after a configuration change like changing device orientation), the scroll state is preserved.

      @Composable
      fun rememberLazyListState(
          initialFirstVisibleItemIndex: Int = 0,
          initialFirstVisibleItemScrollOffset: Int = 0
      ): LazyListState {
          return rememberSaveable(saver = LazyListState.Saver) {
              LazyListState(
                  initialFirstVisibleItemIndex, initialFirstVisibleItemScrollOffset
              )
          }
      }SavingUIStateSnippets.kt
compose:
  id: guide-save-minimal-ui-state
  artifact: androidx.compose.runtime:runtime-saveable
  fqn: androidx.compose.runtime.saveable.rememberSaveable
  sections:
    - id: guide-save-minimal-ui-state
      title: "Guidance: Save only the UI state needed for restoration"
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
        - androidx.compose.runtime.saveable.Saver
        - androidx.compose.runtime.saveable.listSaver
        - androidx.compose.runtime.saveable.mapSaver
        - state restoration
        - 상태 복원
        - 프로세스 재생성
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-compose-guide-state-saving-ui-logic-source
        - live-compose-guide-state-saving-best-practice-source
      relatedIds:
        - live-compose-guide-state-saving-ui-logic
        - live-compose-guide-state-saving-best-practice
---

# Guidance: Save only the UI state needed for restoration

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Save only the UI state needed for restoration

Guidance: Use rememberSaveable for UI state owned by a composable or a Composition-scoped state holder when it must survive activity or process recreation. Primitive values are saved automatically; custom types can use Parcelize, listSaver, mapSaver, or a custom Saver. Limitation: saved UI state shares a size-limited Bundle with other saved-instance-state APIs. Store minimal IDs or keys and rebuild complex state through persistent storage instead of putting large objects or object lists in the Bundle.

Sources: [live-compose-guide-state-saving-ui-logic-source](https://developer.android.com/develop/ui/compose/state-saving#ui-logic), [live-compose-guide-state-saving-best-practice-source](https://developer.android.com/develop/ui/compose/state-saving#best_practice)
