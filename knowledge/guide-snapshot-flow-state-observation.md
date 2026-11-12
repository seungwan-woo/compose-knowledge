---
type: reference
title: "Guidance: Observe Compose state as a cold Flow"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-side-effects-snapshotflow-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#snapshotFlow
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: eaa4aec2033ec93ba5551b2e762e283697532855766e8f5eebe8e636b5be335b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use snapshotFlow to convert State<T> objects into a cold Flow. snapshotFlow runs its block when collected and emits the result of the State objects read in it. When one of the State objects read inside the snapshotFlow block mutates, the Flow will emit the new value to its collector if the new value is not equal to the previous emitted value (this behavior is similar to that of Flow.distinctUntilChanged).

      The following example shows a side effect that records when the user scrolls past the first item in a list to analytics:

      val listState = rememberLazyListState()

      LazyColumn(state = listState) {
          // ...
      }

      LaunchedEffect(listState) {
          snapshotFlow { listState.firstVisibleItemIndex }
              .map { index -> index > 0 }
              .distinctUntilChanged()
              .filter { it == true }
              .collect {
                  MyAnalyticsService.sendScrolledPastFirstItemEvent()
              }
      }SideEffectsSnippets.kt

      In the code above, listState.firstVisibleItemIndex is converted to a Flow that can benefit from the power of Flow's operators.
compose:
  id: guide-snapshot-flow-state-observation
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.snapshotFlow
  sections:
    - id: guide-snapshot-flow-state-observation
      title: "Guidance: Observe Compose state as a cold Flow"
      aliases:
        - androidx.compose.runtime.snapshotFlow
        - cold Flow
        - scroll analytics
        - distinct emissions
        - 상태를 플로우로
        - 스크롤 관찰
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-snapshotflow-source
      relatedIds:
        - live-compose-guide-side-effects-snapshotflow
---

# Guidance: Observe Compose state as a cold Flow

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Observe Compose state as a cold Flow

Guidance: Use snapshotFlow to turn reads of Compose State into a cold Flow. Its block runs when collected, and changes to state read by that block emit a new result only when it differs from the previous emitted value. Apply Flow operators for downstream behavior: map a list index to index > 0, then distinctUntilChanged and filter to record crossing the first-item threshold. Limitation: emission equality is checked on the block result; after mapping several distinct indices to the same boolean, use downstream distinctUntilChanged for that boolean.

Sources: [live-compose-guide-side-effects-snapshotflow-source](https://developer.android.com/develop/ui/compose/side-effects#snapshotFlow)
