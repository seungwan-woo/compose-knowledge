---
type: reference
title: "Guidance: Remember observable state across recomposition"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-state-state-in-composables-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#state-in-composables
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 9b14d66a052a22b3e2198e8ad1ff2b451e8f47fe4dc259540476d5d489fda7cb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Composable functions can use the remember API to store an object in memory. A value computed by remember is stored in the Composition during initial composition, and the stored value is returned during recomposition. remember can be used to store both mutable and immutable objects.

      mutableStateOf creates an observable MutableState<T>, which is an observable type integrated with the compose runtime.

      interface MutableState<T> : State<T> {
          override var value: T
      }

      Any changes to value schedule recomposition of any composable functions that read value.

      There are three ways to declare a MutableState object in a composable:

      val mutableState = remember { mutableStateOf(default) }

      var value by remember { mutableStateOf(default) }

      val (value, setValue) = remember { mutableStateOf(default) }

      These declarations are equivalent, and are provided as syntax sugar for different uses of state. You should pick the one that produces the easiest-to-read code in the composable you're writing.

      The by delegate syntax requires the following imports:

      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.setValue

      You can use the remembered value as a parameter for other composables or even as logic in statements to change which composables are displayed. For example, if you don't want to display the greeting if the name is empty, use the state in an if statement:

      @Composable
      fun HelloContent() {
          Column(modifier = Modifier.padding(16.dp)) {
              var name by remember { mutableStateOf("") }
              if (name.isNotEmpty()) {
                  Text(
                      text = "Hello, $name!",
                      modifier = Modifier.padding(bottom = 8.dp),
                      style = MaterialTheme.typography.bodyMedium
                  )
              }
              OutlinedTextField(
                  value = name,
                  onValueChange = { name = it },
                  label = { Text("Name") }
              )
          }
      }StateOverviewSnippets.kt

      While remember helps you retain state across recompositions, the state is not retained across configuration changes. For this, you must use rememberSaveable. rememberSaveable automatically saves any value that can be saved in a Bundle. For other values, you can
compose:
  id: guide-remember-observable-state
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.remember
  sections:
    - id: guide-remember-observable-state
      title: "Guidance: Remember observable state across recomposition"
      aliases:
        - androidx.compose.runtime.remember
        - androidx.compose.runtime.mutableStateOf
        - observable state
        - recomposition
        - 상태 기억
        - 재구성
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-state-in-composables-source
      relatedIds:
        - live-compose-guide-state-state-in-composables
---

# Guidance: Remember observable state across recomposition

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Remember observable state across recomposition

Guidance: Remember an object with remember; its initial value is stored in the Composition and reused during recomposition. Wrap changing UI data in mutableStateOf so changes to value schedule recomposition of composables that read it. For example, remember { mutableStateOf("") } retains an editable name while the UI recomposes. Limitation: remember does not retain state across configuration changes; use rememberSaveable for state that must survive them.

Sources: [live-compose-guide-state-state-in-composables-source](https://developer.android.com/develop/ui/compose/state#state-in-composables)
