---
type: reference
title: "Guidance: Feed value-based text fields from caller-owned state"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-androidx-material3-material3-material3-textfield-lines-297-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 297
    endLine: 327
    sha256: e9993e8415d654af0ce89df7af2e798f7f5d6a6664c01a7a266ed1d2ee4b247d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Filled text fields have more visual emphasis than outlined text fields, making them stand out
       * when surrounded by other content and components.
       *
       * ![Filled text field
       * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-text-field.png)
       *
       * If you are looking for an outlined version, see [OutlinedTextField].
       *
       * If apart from input text change you also want to observe the cursor location, selection range, or
       * IME composition use the TextField overload with the [TextFieldValue] parameter instead.
       *
       * @param value the input text to be shown in the text field
       * @param onValueChange the callback that is triggered when the input service updates the text. An
       *   updated text comes as a parameter of the callback
       * @param modifier the [Modifier] to be applied to this text field
       * @param enabled controls the enabled state of this text field. When `false`, this component will
       *   not respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param readOnly controls the editable state of the text field. When `true`, the text field cannot
       *   be modified. However, a user can focus it and copy text from it. Read-only text fields are
       *   usually used to display pre-filled forms that a user cannot edit.
       * @param textStyle the style to be applied to the input text. Defaults to [LocalTextStyle].
       * @param label the optional label to be displayed with this text field. The default text style uses
       *   [Typography.bodySmall] when minimized and [Typography.bodyLarge] when expanded.
       * @param placeholder the optional placeholder to be displayed when the text field is in focus and
       *   the input text is empty. The default text style for internal [Text] is [Typography.bodyLarge]
       * @param leadingIcon the optional leading icon to be displayed at the beginning of the text field
       *   container
       * @param trailingIcon the optional trailing icon to be displayed at the end of the text field
       *   container
       * @param prefix the optional prefix to be displayed before the input text in the text field
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
  id: guide-textfield-value-callback-state
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3.TextField
  sections:
    - id: guide-textfield-value-callback-state
      title: "Guidance: Feed value-based text fields from caller-owned state"
      aliases:
        - androidx.compose.material3.TextField
        - androidx.compose.material3.OutlinedTextField
        - androidx.compose.ui.text.input.TextFieldValue
        - value onValueChange
        - caller-owned text state
        - 텍스트 입력 상태
        - 입력 콜백
        - 문자열 텍스트 필드
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-297-source
        - live-compose-guide-state-state-in-composables-source
      relatedIds:
        - live-androidx-material3-material3-material3-textfield-lines-297
        - live-compose-guide-state-state-in-composables
---

# Guidance: Feed value-based text fields from caller-owned state

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Feed value-based text fields from caller-owned state

Guidance: For a value-based TextField, pass the current input text through value and handle updated text from onValueChange. Keep the value in observable caller-owned state and update that state in the callback, as the guide demonstrates with remember { mutableStateOf("") } and OutlinedTextField(value = name, onValueChange = { name = it }). Reads of that state schedule recomposition when it changes. Limitation: use the TextFieldValue overload if you also need to observe cursor location, selection, or IME composition; the String value represents input text.

Sources: [live-androidx-material3-material3-material3-textfield-lines-297-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt), [live-compose-guide-state-state-in-composables-source](https://developer.android.com/develop/ui/compose/state#state-in-composables)
