---
type: reference
title: Checkbox
description: "Public source: https://developer.android.com/develop/ui/compose/components/checkbox"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-checkbox-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/checkbox#additional-resources
    revision: web:compose-guide-components-checkbox:content@sha256:648ffa44071d75bc8a313f03f9f37389470552ee743cdcf9fbd9022ee64036c5
    sha256: eb67e120d497fa1607aa06714454aaf848bbcb1b27c8696d846d1bd6805bf6e2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Material Design Checkboxes
  - id: live-compose-guide-components-checkbox-advanced-example-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/checkbox#advanced-example
    revision: web:compose-guide-components-checkbox:content@sha256:648ffa44071d75bc8a313f03f9f37389470552ee743cdcf9fbd9022ee64036c5
    sha256: 7e1bcffb1d18d8335c628aa4f887c01529766881b8069ebef3d42934080c93ea
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following is a more complex example of how you can implement checkboxes in your app. In this snippet, there is a parent checkbox and a series of child checkboxes. When the user taps the parent checkbox, the app checks all child checkboxes.

      @Composable
      fun CheckboxParentExample() {
          // Initialize states for the child checkboxes
          val childCheckedStates = remember { mutableStateListOf(false, false, false) }

          // Compute the parent state based on children's states
          val parentState = when {
              childCheckedStates.all { it } -> ToggleableState.On
              childCheckedStates.none { it } -> ToggleableState.Off
              else -> ToggleableState.Indeterminate
          }

          Column {
              // Parent TriStateCheckbox
              Row(
                  verticalAlignment = Alignment.CenterVertically,
              ) {
                  Text("Select all")
                  TriStateCheckbox(
                      state = parentState,
                      onClick = {
                          // Determine new state based on current state
                          val newState = parentState != ToggleableState.On
                          childCheckedStates.forEachIndexed { index, _ ->
                              childCheckedStates[index] = newState
                          }
                      }
                  )
              }

              // Child Checkboxes
              childCheckedStates.forEachIndexed { index, checked ->
                  Row(
                      verticalAlignment = Alignment.CenterVertically,
                  ) {
                      Text("Option ${index + 1}")
                      Checkbox(
                          checked = checked,
                          onCheckedChange = { isChecked ->
                              // Update the individual child state
                              childCheckedStates[index] = isChecked
                          }
                      )
                  }
              }
          }

          if (childCheckedStates.all { it }) {
              Text("All options selected")
          }
      }Checkbox.kt
  - id: live-compose-guide-components-checkbox-advanced-explanation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/checkbox#advanced-explanation
    revision: web:compose-guide-components-checkbox:content@sha256:648ffa44071d75bc8a313f03f9f37389470552ee743cdcf9fbd9022ee64036c5
    sha256: 8dc5e9a4e05e34ca39e28c9df11e511c8236465612b333107fa8f8537c1a0ecb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following are several points you should note from this example:

      State management: childCheckedStates: A list of booleans using mutableStateOf() to track the checked state of each child checkbox. parentState: A ToggleableState whose value derives from the child checkboxes' states.

      UI components: TriStateCheckbox: Is necessary for the parent checkbox as it has a state param that lets you set it to indeterminate. Checkbox: Used for each child checkbox with its state linked to the corresponding element in childCheckedStates. Text: Displays labels and messages ("Select all", "Option X", "All options selected").

      Logic: The parent checkbox's onClick updates all child checkboxes to the opposite of the current parent state. Each child checkbox's onCheckedChange updates its corresponding state in the childCheckedStates list. The code displays "All options selected" when all child checkboxes are checked.
  - id: live-compose-guide-components-checkbox-advanced-result-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/checkbox#advanced-result
    revision: web:compose-guide-components-checkbox:content@sha256:648ffa44071d75bc8a313f03f9f37389470552ee743cdcf9fbd9022ee64036c5
    sha256: 4ee4b317a6e75c55062cd5db1ecaa4044c0300dbd1f571f1b413d1a7fa403293
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When only one option is checked the parent checkbox displays the indeterminate state:

      Figure 3.

      Indeterminate checkbox
  - id: live-compose-guide-components-checkbox-anatomy-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/checkbox#anatomy
    revision: web:compose-guide-components-checkbox:content@sha256:648ffa44071d75bc8a313f03f9f37389470552ee743cdcf9fbd9022ee64036c5
    sha256: 2e4c27d178bf661bfba03c885df9974341d3d41fa8c07dc7f54e79f53d90ec83
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A checkbox consists of the following elements:

      Box: This is the container for the checkbox.

      Check: This is the visual indicator that shows whether the checkbox is selected or not.

      Label: This is the text that describes the checkbox.
  - id: live-compose-guide-components-checkbox-explanation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/checkbox#explanation
    revision: web:compose-guide-components-checkbox:content@sha256:648ffa44071d75bc8a313f03f9f37389470552ee743cdcf9fbd9022ee64036c5
    sha256: fbdf3b0292b1ff9271274d3300b1fe07f85379369c7e9d9674f6ae1a07d236cf
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: This code creates a checkbox that is initially checked. When the user clicks on the checkbox, the onCheckedChange lambda updates the checked state.
  - id: live-compose-guide-components-checkbox-implementation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/checkbox#implementation
    revision: web:compose-guide-components-checkbox:content@sha256:648ffa44071d75bc8a313f03f9f37389470552ee743cdcf9fbd9022ee64036c5
    sha256: 4be14074ae375c55e985e1f7c00360d5a977145d402f73294f43d1737bfc2065
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can use the Checkbox composable to create a checkbox in your app. There are just a few key parameters to keep in mind:

      checked: The boolean that captures whether the checkbox is checked or unchecked.

      onCheckedChange(): The function that the app calls when the user taps the checkbox.

      The following snippet demonstrates how to use the Checkbox composable:

      @Composable
      fun CheckboxMinimalExample() {
          var checked by remember { mutableStateOf(true) }

          Row(
              verticalAlignment = Alignment.CenterVertically,
          ) {
              Text(
                  "Minimal checkbox"
              )
              Checkbox(
                  checked = checked,
                  onCheckedChange = { checked = it }
              )
          }

          Text(
              if (checked) "Checkbox is checked" else "Checkbox is unchecked"
          )
      }Checkbox.kt
  - id: live-compose-guide-components-checkbox-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/checkbox#main-content
    revision: web:compose-guide-components-checkbox:content@sha256:648ffa44071d75bc8a313f03f9f37389470552ee743cdcf9fbd9022ee64036c5
    sha256: 934383caa402d32d7ca5a7d7c9ba7e9f4f529f45ee9c09482391207f2b88f3af
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Checkboxes let users select one or more items from a list. You might use a checkbox to let the user do the following:

      Turn an item on or off.

      Select from multiple options in a list.

      Indicate agreement or acceptance.
  - id: live-compose-guide-components-checkbox-result-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/checkbox#result
    revision: web:compose-guide-components-checkbox:content@sha256:648ffa44071d75bc8a313f03f9f37389470552ee743cdcf9fbd9022ee64036c5
    sha256: 7b694849d63223204f3c8261a7e1801144ba1695f87ebfdc455fb4d8ae7b300a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This example produces the following component:

      Figure 2.

      Checked checkbox
  - id: live-compose-guide-components-checkbox-states-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/checkbox#states
    revision: web:compose-guide-components-checkbox:content@sha256:648ffa44071d75bc8a313f03f9f37389470552ee743cdcf9fbd9022ee64036c5
    sha256: b617124eeb54d2a42b5224b9ab0028f295d8433f8377549921a06568babfcd9c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A checkbox can be in one of three states:

      Unselected: The checkbox is not selected. The box is empty.

      Indeterminate: The checkbox is in an indeterminate state. The box contains a dash.

      Selected: The checkbox is selected. The box contains a checkmark.

      The following image demonstrates the three states of a checkbox.

      Figure 1.

      The three states of a checkbox. Unselected, indeterminate, and selected.
compose:
  id: live-compose-guide-components-checkbox
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-checkbox-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-checkbox-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-components-checkbox-advanced-example
      title: Advanced example
      aliases:
        - androidx.compose.material3.Checkbox
        - androidx.compose.material3.TriStateCheckbox
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-checkbox-advanced-example-source
      relatedIds: []
    - id: live-compose-guide-components-checkbox-advanced-explanation
      title: Explanation
      aliases:
        - androidx.compose.material3.Checkbox
        - androidx.compose.material3.TriStateCheckbox
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-checkbox-advanced-explanation-source
      relatedIds: []
    - id: live-compose-guide-components-checkbox-advanced-result
      title: Result
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-checkbox-advanced-result-source
      relatedIds: []
    - id: live-compose-guide-components-checkbox-anatomy
      title: Anatomy
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-checkbox-anatomy-source
      relatedIds: []
    - id: live-compose-guide-components-checkbox-explanation
      title: Explanation
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-checkbox-explanation-source
      relatedIds: []
    - id: live-compose-guide-components-checkbox-implementation
      title: Implementation
      aliases:
        - androidx.compose.material3.Checkbox
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-checkbox-implementation-source
      relatedIds: []
    - id: live-compose-guide-components-checkbox-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-checkbox-main-content-source
      relatedIds: []
    - id: live-compose-guide-components-checkbox-result
      title: Result
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-checkbox-result-source
      relatedIds: []
    - id: live-compose-guide-components-checkbox-states
      title: States
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-checkbox-states-source
      relatedIds: []
---

# Checkbox

Public source: https://developer.android.com/develop/ui/compose/components/checkbox

## Additional resources

Material Design Checkboxes

Sources: [live-compose-guide-components-checkbox-additional-resources-source](https://developer.android.com/develop/ui/compose/components/checkbox#additional-resources)

## Advanced example

The following is a more complex example of how you can implement checkboxes in your app. In this snippet, there is a parent checkbox and a series of child checkboxes. When the user taps the parent checkbox, the app checks all child checkboxes.

@Composable
fun CheckboxParentExample() {
    // Initialize states for the child checkboxes
    val childCheckedStates = remember { mutableStateListOf(false, false, false) }

    // Compute the parent state based on children's states
    val parentState = when {
        childCheckedStates.all { it } -> ToggleableState.On
        childCheckedStates.none { it } -> ToggleableState.Off
        else -> ToggleableState.Indeterminate
    }

    Column {
        // Parent TriStateCheckbox
        Row(
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text("Select all")
            TriStateCheckbox(
                state = parentState,
                onClick = {
                    // Determine new state based on current state
                    val newState = parentState != ToggleableState.On
                    childCheckedStates.forEachIndexed { index, _ ->
                        childCheckedStates[index] = newState
                    }
                }
            )
        }

        // Child Checkboxes
        childCheckedStates.forEachIndexed { index, checked ->
            Row(
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Text("Option ${index + 1}")
                Checkbox(
                    checked = checked,
                    onCheckedChange = { isChecked ->
                        // Update the individual child state
                        childCheckedStates[index] = isChecked
                    }
                )
            }
        }
    }

    if (childCheckedStates.all { it }) {
        Text("All options selected")
    }
}Checkbox.kt

Sources: [live-compose-guide-components-checkbox-advanced-example-source](https://developer.android.com/develop/ui/compose/components/checkbox#advanced-example)

## Explanation

The following are several points you should note from this example:

State management: childCheckedStates: A list of booleans using mutableStateOf() to track the checked state of each child checkbox. parentState: A ToggleableState whose value derives from the child checkboxes' states.

UI components: TriStateCheckbox: Is necessary for the parent checkbox as it has a state param that lets you set it to indeterminate. Checkbox: Used for each child checkbox with its state linked to the corresponding element in childCheckedStates. Text: Displays labels and messages ("Select all", "Option X", "All options selected").

Logic: The parent checkbox's onClick updates all child checkboxes to the opposite of the current parent state. Each child checkbox's onCheckedChange updates its corresponding state in the childCheckedStates list. The code displays "All options selected" when all child checkboxes are checked.

Sources: [live-compose-guide-components-checkbox-advanced-explanation-source](https://developer.android.com/develop/ui/compose/components/checkbox#advanced-explanation)

## Result

When only one option is checked the parent checkbox displays the indeterminate state:

Figure 3.

Indeterminate checkbox

Sources: [live-compose-guide-components-checkbox-advanced-result-source](https://developer.android.com/develop/ui/compose/components/checkbox#advanced-result)

## Anatomy

A checkbox consists of the following elements:

Box: This is the container for the checkbox.

Check: This is the visual indicator that shows whether the checkbox is selected or not.

Label: This is the text that describes the checkbox.

Sources: [live-compose-guide-components-checkbox-anatomy-source](https://developer.android.com/develop/ui/compose/components/checkbox#anatomy)

## Explanation

This code creates a checkbox that is initially checked. When the user clicks on the checkbox, the onCheckedChange lambda updates the checked state.

Sources: [live-compose-guide-components-checkbox-explanation-source](https://developer.android.com/develop/ui/compose/components/checkbox#explanation)

## Implementation

You can use the Checkbox composable to create a checkbox in your app. There are just a few key parameters to keep in mind:

checked: The boolean that captures whether the checkbox is checked or unchecked.

onCheckedChange(): The function that the app calls when the user taps the checkbox.

The following snippet demonstrates how to use the Checkbox composable:

@Composable
fun CheckboxMinimalExample() {
    var checked by remember { mutableStateOf(true) }

    Row(
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Text(
            "Minimal checkbox"
        )
        Checkbox(
            checked = checked,
            onCheckedChange = { checked = it }
        )
    }

    Text(
        if (checked) "Checkbox is checked" else "Checkbox is unchecked"
    )
}Checkbox.kt

Sources: [live-compose-guide-components-checkbox-implementation-source](https://developer.android.com/develop/ui/compose/components/checkbox#implementation)

## Introduction

Checkboxes let users select one or more items from a list. You might use a checkbox to let the user do the following:

Turn an item on or off.

Select from multiple options in a list.

Indicate agreement or acceptance.

Sources: [live-compose-guide-components-checkbox-main-content-source](https://developer.android.com/develop/ui/compose/components/checkbox#main-content)

## Result

This example produces the following component:

Figure 2.

Checked checkbox

Sources: [live-compose-guide-components-checkbox-result-source](https://developer.android.com/develop/ui/compose/components/checkbox#result)

## States

A checkbox can be in one of three states:

Unselected: The checkbox is not selected. The box is empty.

Indeterminate: The checkbox is in an indeterminate state. The box contains a dash.

Selected: The checkbox is selected. The box contains a checkmark.

The following image demonstrates the three states of a checkbox.

Figure 1.

The three states of a checkbox. Unselected, indeterminate, and selected.

Sources: [live-compose-guide-components-checkbox-states-source](https://developer.android.com/develop/ui/compose/components/checkbox#states)
