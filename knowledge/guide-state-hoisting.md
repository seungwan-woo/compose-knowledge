---
type: reference
title: "Guidance: Hoist shared state and pass events upward"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-state-state-hoisting-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#state-hoisting
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 294584bba1c623b742305b33398287fc22df6f8c4d8c20de7ad557d39e6bd7d3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      replace HelloScreen, you don't have to change how HelloContent is implemented.

      Unidirectional Data Flow

      The pattern where the state goes down, and events go up is called a unidirectional data flow. In this case, the state goes down from HelloScreen to HelloContent and events go up from HelloContent to HelloScreen. By following unidirectional data flow, you can decouple composables that display state in the UI from the parts of your app that store and change state.

      State should be hoisted to at least the lowest common parent of all composables that use the state (read).

      State should be hoisted to at least the highest level it may be changed (write).

      If two states change in response to the same events they should be hoisted together.

      You can hoist state higher than these rules require, but underhoisting state makes it difficult or impossible to follow unidirectional data flow.

      See the Where to hoist state page to learn more.
  - id: live-compose-guide-state-state-hoisting-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#state-hoisting
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 906f4db5cb2573d12d38b8bde447d8be77bb6120808119de66e1441ca8869414
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      State hoisting in Compose is a pattern of moving state to a composable's caller to make a composable stateless. The general pattern for state hoisting in Jetpack Compose is to replace the state variable with two parameters:

      value: T: the current value to display

      onValueChange: (T) -> Unit: an event that requests the value to change, where T is the proposed new value

      However, you are not limited to onValueChange. If more specific events are appropriate for the composable, you should define them using lambdas.

      State that is hoisted this way has some important properties:

      Single source of truth: By moving state instead of duplicating it, we're ensuring there's only one source of truth. This helps avoid bugs.

      Encapsulated: Only stateful composables can modify their state. It's completely internal.

      Shareable: Hoisted state can be shared with multiple composables. If you wanted to read name in a different composable, hoisting would allow you to do that.

      Interceptable: callers to the stateless composables can decide to ignore or modify events before changing the state.

      Decoupled: the state for the stateless composables may be stored anywhere. For example, it's now possible to move name into a ViewModel.

      In the example case, you extract the name and the onValueChange out of HelloContent and move them up the tree to a HelloScreen composable that calls HelloContent.

      @Composable
      fun HelloScreen() {
          var name by rememberSaveable { mutableStateOf("") }

          HelloContent(name = name, onNameChange = { name = it })
      }

      @Composable
      fun HelloContent(name: String, onNameChange: (String) -> Unit) {
          Column(modifier = Modifier.padding(16.dp)) {
              Text(
                  text = "Hello, $name",
                  modifier = Modifier.padding(bottom = 8.dp),
                  style = MaterialTheme.typography.bodyMedium
              )
              OutlinedTextField(value = name, onValueChange = onNameChange, label = { Text("Name") })
          }
      }StateOverviewSnippets.kt

      By hoisting the state out of HelloContent, it's easier to reason about the composable, reuse it in different situations, and test. HelloContent is decoupled from how its state is stored. Decoupling means that if you modify or
compose:
  id: guide-state-hoisting
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: guide-state-hoisting
      title: "Guidance: Hoist shared state and pass events upward"
      aliases:
        - androidx.compose.runtime
        - state hoisting
        - unidirectional data flow
        - single source of truth
        - 상태 호이스팅
        - 단방향 데이터 흐름
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-state-hoisting-source
        - live-compose-guide-state-state-hoisting-2-source
      relatedIds:
        - live-compose-guide-state-state-hoisting
        - live-compose-guide-state-state-hoisting-2
---

# Guidance: Hoist shared state and pass events upward

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Hoist shared state and pass events upward

Guidance: Move state to a caller and pass the current value plus an event callback, such as value and onValueChange. This keeps one source of truth while callers can accept, change, or ignore events. Hoist to at least the lowest common parent of readers and the highest level that writes the state. States changed by the same events should be hoisted together. Limitation: merely exposing callbacks is insufficient if the state owner remains below a reader or writer; underhoisting prevents the intended downward-state, upward-event flow.

Sources: [live-compose-guide-state-state-hoisting-source](https://developer.android.com/develop/ui/compose/state#state-hoisting), [live-compose-guide-state-state-hoisting-2-source](https://developer.android.com/develop/ui/compose/state#state-hoisting)
