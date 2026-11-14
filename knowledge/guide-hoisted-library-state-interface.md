---
type: reference
title: "Guidance: Group growing library state contracts into caller-supplied state types"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-api-guidelines-lines-686-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 686
    endLine: 720
    sha256: 4aea07645390ff94b9d830da97921613719b5d0feb66932af9967ec000587ef9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ```

      ### Don't

      ```kotlin
      @Composable
      fun Checkbox(
          initialValue: Boolean,
          onChecked: (Boolean) -> Unit
      ) {
          var checkedState by remember { mutableStateOf(initialValue) }
      // ...

      // Usage: (Checkbox owns the checked state, caller notified of changes)
      // Caller cannot easily implement a validation policy.
      Checkbox(false, onToggled = { callerCheckedState = it })
      ```

      ## Separate state and events

      Compose's `mutableStateOf()` value holders are observable through the `Snapshot` system and can notify observers of changes. This is the primary mechanism for requesting recomposition, relayout, or redraw of a Compose UI. Working effectively with observable state requires acknowledging the distinction between _state_ and _events_.

      An observable _event_ happens at a point in time and is discarded. All registered observers at the time the event occurred are notified. All individual events in a stream are assumed to be relevant and may build on one another; repeated equal events have meaning and therefore a registered observer must observe all events without skipping.

      Observable _state_ raises change _events_ when the state changes from one value to a new, unequal value. State change events are _conflated;_ only the most recent state matters. Observers of state changes must therefore be _idempotent;_ given the same state value the observer should produce the same result. It is valid for a state observer to both skip intermediate states as well as run multiple times for the same state and the result should be the same.

      Compose operates on _state_ as input, not _events_. Composable functions are _state observers_ where both the function parameters and any `mutableStateOf()` value holders that are read during execution are inputs.

      ## Hoisted state types

      A pattern of stateless parameters and multiple event callback parameters will eventually reach a point of scale where it becomes unwieldy. As a composable function's parameter list grows it may become appropriate to factor a collection of state and callbacks into an interface, allowing a caller to provide a cohesive policy object as a unit.

      ### Before

      ```kotlin
  - id: live-compose-api-guidelines-lines-791-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 791
    endLine: 825
    sha256: 8e41e940369f891708c27ce6111e3aff0237dd7fc9d539ad94243e83e0f1d344
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              remember { VerticalScrollerState() }
      ) {
      ```

      **Jetpack Compose framework and Library development** SHOULD declare hoisted state types as interfaces instead of abstract or open classes if they are not declared as final classes.

      When designing an open or abstract class to be properly extensible for these use cases it is easy to create hidden requirements of state synchronization for internal consistency that are difficult (or impossible) for an extending developer to preserve. Using an interface that can be freely implemented strongly discourages private contracts between composable functions and hoisted state objects by way of Kotlin internal-scoped properties or functionality.

      **Jetpack Compose framework and Library development** SHOULD provide default state implementations remembered as default arguments. State objects MAY be required parameters if the composable cannot function if the state object is not configured by the caller.

      **Jetpack Compose framework and Library development** MUST NOT use `null` as a sentinel indicating that the composable function should internally `remember {}` its own state. This can create accidental inconsistent or unexpected behavior if `null` has a meaningful interpretation for the caller and is provided to the composable function by mistake.

      ### Do

      ```kotlin
      @Composable
      fun VerticalScroller(
          verticalScrollerState: VerticalScrollerState =
              remember { VerticalScrollerState() }
      ) {
      ```

      ### Don't

      ```kotlin
      // Null as a default can cause unexpected behavior if the input parameter
      // changes between null and non-null.
      @Composable
      fun VerticalScroller(
          verticalScrollerState: VerticalScrollerState? = null
      ) {
          val realState = verticalScrollerState ?:
              remember { VerticalScrollerState() }
      ```
compose:
  id: guide-hoisted-library-state-interface
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: guide-hoisted-library-state-interface
      title: "Guidance: Group growing library state contracts into caller-supplied state types"
      aliases:
        - hoisted state interface
        - state holder contract
        - controlled component
        - library API design
        - 상태 홀더 인터페이스
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-686-source
        - live-compose-api-guidelines-lines-791-source
      relatedIds:
        - live-compose-api-guidelines-lines-686
        - live-compose-api-guidelines-lines-791
---

# Guidance: Group growing library state contracts into caller-supplied state types

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Group growing library state contracts into caller-supplied state types

Guidance: When related state values and event callbacks make a component API unwieldy, group them into a hoisted state interface that callers can provide as a cohesive policy object. For extensible library state types, Compose API guidelines prefer interfaces over abstract or open classes to discourage hidden synchronization contracts between the component and state implementation. Supply an explicit remembered default state where appropriate, or require caller configuration. Limitation: do not use a nullable state parameter as a sentinel for internally remembering state. This guidance concerns library API design; it does not require every small component to introduce a state interface.

Sources: [live-compose-api-guidelines-lines-686-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md), [live-compose-api-guidelines-lines-791-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)
