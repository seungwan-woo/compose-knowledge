---
type: reference
title: Chip
description: "Public source: https://developer.android.com/develop/ui/compose/components/chip"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-chip-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#additional-resources
    revision: web:compose-guide-components-chip:content@sha256:1c04822aaff209a1ba45c57ef0ffb3195a604535639efc5246111ebfcd8be50e
    sha256: c58f584917c26b87393751417c554a2a41767de1d0757ff519840bb0047b7c07
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Material UI docs
  - id: live-compose-guide-components-chip-api-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#api
    revision: web:compose-guide-components-chip:content@sha256:1c04822aaff209a1ba45c57ef0ffb3195a604535639efc5246111ebfcd8be50e
    sha256: 9930e84da6b222de487a4f4681b4ab347b379f727049a9954fe76419bd1139ec
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are four composables that correspond to the four types of chips. The following sections outline these composables and their differences in detail. However, they share the following parameters:

      label: The string that appears on the chip.

      icon: The icon displayed at the start of the chip. Some of the specific composables have a separate leadingIcon and trailingIcon parameter.

      onClick: The lambda that the chip calls when the user presses it.
  - id: live-compose-guide-components-chip-assist-and-suggestion-chips-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#assist-and-suggestion-chips
    revision: web:compose-guide-components-chip:content@sha256:b88143833522f84078875839349cd9027d839d36b34ca1aedb5aa2b589ce77cd
    sha256: afdda45fdd266de74af648ea488ebacbacad571fa5eb463e3beaac411c9855fa
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Assist and suggestion chips are merged into expressive buttons in Material 3 Expressive because they functionally mirror single-action button behaviors. Use expressive buttons when you need expressive assist or suggestion chip behavior; see the Buttons documentation for implementation details.
  - id: live-compose-guide-components-chip-assist-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#assist
    revision: web:compose-guide-components-chip:content@sha256:1c04822aaff209a1ba45c57ef0ffb3195a604535639efc5246111ebfcd8be50e
    sha256: 0ad1c20d5c35fa9a94c5e08a03f21fa581552c313ec6d6a42897561745ab34df
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The AssistChip composable provides a straightforward way to create an assist chip that nudges the user in a particular direction. One distinguishing feature is its leadingIcon parameter that lets you display an icon on the left side of the chip. The following example demonstrates how you can implement it:

      @Composable
      fun AssistChipExample() {
          AssistChip(
              onClick = { Log.d("Assist chip", "hello world") },
              label = { Text("Assist chip") },
              leadingIcon = {
                  Icon(
                      painter = rememberVectorPainter(AppIcons.Settings),
                      contentDescription = "Localized description",
                      Modifier.size(AssistChipDefaults.IconSize)
                  )
              }
          )
      }Chip.kt

      This implementation appears as follows.

      Figure 2.

      Assist chip.
  - id: live-compose-guide-components-chip-corner-morphing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#corner-morphing
    revision: web:compose-guide-components-chip:content@sha256:b88143833522f84078875839349cd9027d839d36b34ca1aedb5aa2b589ce77cd
    sha256: b64b6bec72aca02381bd770c1e6752bf13f96796f585ad72d18137c6a758748d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Filter and input chips support corner morphing, animating the container's corner radius from 12dp when unselected to fully rounded when selected.
  - id: live-compose-guide-components-chip-elevated-filter-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#elevated-filter
    revision: web:compose-guide-components-chip:content@sha256:b88143833522f84078875839349cd9027d839d36b34ca1aedb5aa2b589ce77cd
    sha256: 5595c25a7a6e3b4ebcc47ab2031ef5e21e504b269e7bd1fac6837b2620cc51a7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Elevated filter chips provide separation from a visually prominent background and support corner morphing. The following snippet demonstrates how to implement an elevated filter chip with corner morphing:

      @Composable
      fun ElevatedFilterChipWithCornerMorphingSample() {
          var selected by remember { mutableStateOf(false) }
          ElevatedFilterChip(
              selected = selected,
              onClick = { selected = !selected },
              label = { Text("Filter chip") },
              shapes = FilterChipDefaults.shapes(),
              leadingIcon = if (selected) {
                  {
                      Icon(
                          painter = rememberVectorPainter(AppIcons.Done),
                          contentDescription = null,
                          modifier = Modifier.size(FilterChipDefaults.IconSize),
                      )
                  }
              } else {
                  {
                      Icon(
                          painter = rememberVectorPainter(AppIcons.Home),
                          contentDescription = null,
                          modifier = Modifier.size(FilterChipDefaults.IconSize),
                      )
                  }
              },
              trailingIcon = {
                  Icon(
                      painter = rememberVectorPainter(AppIcons.ArrowDropDown),
                      contentDescription = null,
                      modifier = Modifier.size(FilterChipDefaults.IconSize),
                  )
              },
          )
      }Chip.kt

      Elevated filter chip supporting corner morphing.
  - id: live-compose-guide-components-chip-elevated-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#elevated
    revision: web:compose-guide-components-chip:content@sha256:1c04822aaff209a1ba45c57ef0ffb3195a604535639efc5246111ebfcd8be50e
    sha256: 574835dad1fe2e57e10fa072863bc67da9a9914bd39bc31753f5b79121350aa1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      All the examples in this document use the base composables that take a flat appearance. If you want a chip that has an elevated appearance, use one of the three following composables:

      ElevatedAssistChip

      ElevatedFilterChip

      ElevatedSuggestionChip
  - id: live-compose-guide-components-chip-filter-1-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#filter_1
    revision: web:compose-guide-components-chip:content@sha256:b88143833522f84078875839349cd9027d839d36b34ca1aedb5aa2b589ce77cd
    sha256: 6a2fcf68ebeccb5633dcfd0737902a2125fa37dc994c207448f769ba911af110
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following snippet demonstrates how to implement a filter chip with corner morphing:

      @Composable
      fun FilterChipWithCornerMorphingSample() {
          var selected by remember { mutableStateOf(false) }
          FilterChip(
              selected = selected,
              onClick = { selected = !selected },
              label = { Text("Filter chip") },
              shapes = FilterChipDefaults.shapes(),
              leadingIcon = if (selected) {
                  {
                      Icon(
                          painter = rememberVectorPainter(AppIcons.Done),
                          contentDescription = null,
                          modifier = Modifier.size(FilterChipDefaults.IconSize),
                      )
                  }
              } else {
                  null
              },
          )
      }Chip.kt

      Filter chip using corner morphing to transition shape when selected.
  - id: live-compose-guide-components-chip-filter-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#filter
    revision: web:compose-guide-components-chip:content@sha256:1c04822aaff209a1ba45c57ef0ffb3195a604535639efc5246111ebfcd8be50e
    sha256: d12c41371f2b583fc3243b71e328045c5ae2576860db81110899ed8ccc1e98f7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The FilterChip composable requires you to track whether or not the chip is selected. The following example demonstrates how you can show a leading checked icon only when the user has selected the chip:

      @Composable
      fun FilterChipExample() {
          var selected by remember { mutableStateOf(false) }

          FilterChip(
              onClick = { selected = !selected },
              label = {
                  Text("Filter chip")
              },
              selected = selected,
              leadingIcon = if (selected) {
                  {
                      Icon(
                          painter = rememberVectorPainter(AppIcons.Done),
                          contentDescription = "Done icon",
                          modifier = Modifier.size(FilterChipDefaults.IconSize)
                      )
                  }
              } else {
                  null
              },
          )
      }Chip.kt

      This implementation appears as follows when selected:

      Figure 3.

      Selected filter chip.
  - id: live-compose-guide-components-chip-input-1-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#input_1
    revision: web:compose-guide-components-chip:content@sha256:b88143833522f84078875839349cd9027d839d36b34ca1aedb5aa2b589ce77cd
    sha256: 7c47094331139fb9a50fc339de0e2ce31c505c5e4f5bdb375f263504b32f0b4d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Input chips represent discrete pieces of information entered by a user and also support corner morphing. The following snippet demonstrates how to implement an input chip with corner morphing:

      @Composable
      fun InputChipWithCornerMorphingSample() {
          var selected by remember { mutableStateOf(false) }
          InputChip(
              selected = selected,
              onClick = { selected = !selected },
              label = { Text("Input Chip") },
              shapes = InputChipDefaults.shapes(),
              avatar = {
                  Icon(
                      painter = rememberVectorPainter(AppIcons.Person),
                      contentDescription = null,
                      modifier = Modifier.size(InputChipDefaults.AvatarSize),
                  )
              },
          )
      }Chip.kt

      Input chip supporting corner morphing.
  - id: live-compose-guide-components-chip-input-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#input
    revision: web:compose-guide-components-chip:content@sha256:1c04822aaff209a1ba45c57ef0ffb3195a604535639efc5246111ebfcd8be50e
    sha256: 64dbb6642b36d46e7bae21bb98f037d681ebb640ccab6663f349275477a705a8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can use the InputChip composable to create chips that result from user interaction. For example, in an email client, when the user is writing an email, an input chip might represent a contact the user has added to the "To:" field.

      The following implementation demonstrates an input chip that is already in a selected state. The user dismisses the chip when they press it.

      @Composable
      fun InputChipExample(
          text: String,
          onDismiss: () -> Unit,
      ) {
          var enabled by remember { mutableStateOf(true) }
          if (!enabled) return

          InputChip(
              onClick = {
                  onDismiss()
                  enabled = !enabled
              },
              label = { Text(text) },
              selected = enabled,
              avatar = {
                  Icon(
                      painter = rememberVectorPainter(AppIcons.Person),
                      contentDescription = "Localized description",
                      Modifier.size(InputChipDefaults.AvatarSize)
                  )
              },
              trailingIcon = {
                  Icon(
                      painter = rememberVectorPainter(AppIcons.Close),
                      contentDescription = "Localized description",
                      Modifier.size(InputChipDefaults.AvatarSize)
                  )
              },
          )
      }Chip.kt

      This implementation appears as follows.

      Figure 4.

      Input chip.
  - id: live-compose-guide-components-chip-m3-expressive-update-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#m3-expressive-update
    revision: web:compose-guide-components-chip:content@sha256:b88143833522f84078875839349cd9027d839d36b34ca1aedb5aa2b589ce77cd
    sha256: 302cf3166ceeef96fc968560acfe6750a5fcd288852a19f6f2a2138a82d4112b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Filter and input chips feature stylistic updates, including increased corner radii and spring motion. Assist and suggestion chips have been merged into expressive buttons.

      For more information about the M3 Expressive updates for chips, see the Material Design 3 Chips guidelines.
  - id: live-compose-guide-components-chip-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#main-content
    revision: web:compose-guide-components-chip:content@sha256:1c04822aaff209a1ba45c57ef0ffb3195a604535639efc5246111ebfcd8be50e
    sha256: dc6928019e8dcaa04bc6b7db3f9aebf47c1d68da35502a0f96afd4f2d28b0d5d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The Chip component is a compact, interactive UI element. It represents complex entities like a contact or tag, often with an icon and label. It can be checkable, dismissible, or clickable.

      The four types of chips and where you might use them are as follows:

      Assist: Guides the user during a task. Often appears as a temporary UI element in response to user input.

      Filter: Allows users to refine content from a set of options. They can be selected or deselected, and may include a checkmark icon when selected.

      Input: Represents user-provided information, such as selections in a menu. They can contain an icon and text, and provide an X for removal.

      Suggestion: Provides recommendations to the user based on their recent activity or input. Typically appear beneath an input field to prompt user actions.

      Figure 1.

      The four chip components.
  - id: live-compose-guide-components-chip-suggestion-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/chip#suggestion
    revision: web:compose-guide-components-chip:content@sha256:1c04822aaff209a1ba45c57ef0ffb3195a604535639efc5246111ebfcd8be50e
    sha256: 28a188573fc3f1d485a848c99794f0cf3e2b93512a37c629fd85715a61f5cb3a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The SuggestionChip composable is the most basic of the composables listed on this page, both in its API definition and its common use cases. Suggestion chips present dynamically generated hints. For example, in an AI chat app, you might use suggestion chips to present possible responses to the most recent message.

      Consider this implementation of SuggestionChip:

      @Composable
      fun SuggestionChipExample() {
          SuggestionChip(
              onClick = { Log.d("Suggestion chip", "hello world") },
              label = { Text("Suggestion chip") }
          )
      }Chip.kt

      This implementation appears as follows:

      Figure 5.

      Suggestion chip.
compose:
  id: live-compose-guide-components-chip
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-chip-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-components-chip-api
      title: API surface
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-api-source
      relatedIds: []
    - id: live-compose-guide-components-chip-assist
      title: Assist chip
      aliases:
        - androidx.compose.material3.AssistChip
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-assist-source
      relatedIds: []
    - id: live-compose-guide-components-chip-assist-and-suggestion-chips
      title: Assist and suggestion chips
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-assist-and-suggestion-chips-source
      relatedIds: []
    - id: live-compose-guide-components-chip-corner-morphing
      title: Corner morphing
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-corner-morphing-source
      relatedIds: []
    - id: live-compose-guide-components-chip-elevated
      title: Elevated chip
      aliases:
        - androidx.compose.material3.ElevatedAssistChip
        - androidx.compose.material3.ElevatedFilterChip
        - androidx.compose.material3.ElevatedSuggestionChip
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-elevated-source
      relatedIds: []
    - id: live-compose-guide-components-chip-elevated-filter
      title: Elevated filter
      aliases:
        - androidx.compose.material3.ElevatedFilterChip
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-elevated-filter-source
      relatedIds: []
    - id: live-compose-guide-components-chip-filter
      title: Filter chip
      aliases:
        - androidx.compose.material3.FilterChip
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-filter-source
      relatedIds: []
    - id: live-compose-guide-components-chip-filter-1
      title: Filter
      aliases:
        - androidx.compose.material3.FilterChip
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-filter-1-source
      relatedIds: []
    - id: live-compose-guide-components-chip-input
      title: Input chip
      aliases:
        - androidx.compose.material3.InputChip
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-input-source
      relatedIds: []
    - id: live-compose-guide-components-chip-input-1
      title: Input
      aliases:
        - androidx.compose.material3.InputChip
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-input-1-source
      relatedIds: []
    - id: live-compose-guide-components-chip-m3-expressive-update
      title: M3 Expressive update
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-m3-expressive-update-source
      relatedIds: []
    - id: live-compose-guide-components-chip-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-main-content-source
      relatedIds: []
    - id: live-compose-guide-components-chip-suggestion
      title: Suggestion chip
      aliases:
        - androidx.compose.material3.SuggestionChip
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-chip-suggestion-source
      relatedIds: []
---

# Chip

Public source: https://developer.android.com/develop/ui/compose/components/chip

## Additional resources

Material UI docs

Sources: [live-compose-guide-components-chip-additional-resources-source](https://developer.android.com/develop/ui/compose/components/chip#additional-resources)

## API surface

There are four composables that correspond to the four types of chips. The following sections outline these composables and their differences in detail. However, they share the following parameters:

label: The string that appears on the chip.

icon: The icon displayed at the start of the chip. Some of the specific composables have a separate leadingIcon and trailingIcon parameter.

onClick: The lambda that the chip calls when the user presses it.

Sources: [live-compose-guide-components-chip-api-source](https://developer.android.com/develop/ui/compose/components/chip#api)

## Assist chip

The AssistChip composable provides a straightforward way to create an assist chip that nudges the user in a particular direction. One distinguishing feature is its leadingIcon parameter that lets you display an icon on the left side of the chip. The following example demonstrates how you can implement it:

@Composable
fun AssistChipExample() {
    AssistChip(
        onClick = { Log.d("Assist chip", "hello world") },
        label = { Text("Assist chip") },
        leadingIcon = {
            Icon(
                painter = rememberVectorPainter(AppIcons.Settings),
                contentDescription = "Localized description",
                Modifier.size(AssistChipDefaults.IconSize)
            )
        }
    )
}Chip.kt

This implementation appears as follows.

Figure 2.

Assist chip.

Sources: [live-compose-guide-components-chip-assist-source](https://developer.android.com/develop/ui/compose/components/chip#assist)

## Assist and suggestion chips

Assist and suggestion chips are merged into expressive buttons in Material 3 Expressive because they functionally mirror single-action button behaviors. Use expressive buttons when you need expressive assist or suggestion chip behavior; see the Buttons documentation for implementation details.

Sources: [live-compose-guide-components-chip-assist-and-suggestion-chips-source](https://developer.android.com/develop/ui/compose/components/chip#assist-and-suggestion-chips)

## Corner morphing

Filter and input chips support corner morphing, animating the container's corner radius from 12dp when unselected to fully rounded when selected.

Sources: [live-compose-guide-components-chip-corner-morphing-source](https://developer.android.com/develop/ui/compose/components/chip#corner-morphing)

## Elevated chip

All the examples in this document use the base composables that take a flat appearance. If you want a chip that has an elevated appearance, use one of the three following composables:

ElevatedAssistChip

ElevatedFilterChip

ElevatedSuggestionChip

Sources: [live-compose-guide-components-chip-elevated-source](https://developer.android.com/develop/ui/compose/components/chip#elevated)

## Elevated filter

Elevated filter chips provide separation from a visually prominent background and support corner morphing. The following snippet demonstrates how to implement an elevated filter chip with corner morphing:

@Composable
fun ElevatedFilterChipWithCornerMorphingSample() {
    var selected by remember { mutableStateOf(false) }
    ElevatedFilterChip(
        selected = selected,
        onClick = { selected = !selected },
        label = { Text("Filter chip") },
        shapes = FilterChipDefaults.shapes(),
        leadingIcon = if (selected) {
            {
                Icon(
                    painter = rememberVectorPainter(AppIcons.Done),
                    contentDescription = null,
                    modifier = Modifier.size(FilterChipDefaults.IconSize),
                )
            }
        } else {
            {
                Icon(
                    painter = rememberVectorPainter(AppIcons.Home),
                    contentDescription = null,
                    modifier = Modifier.size(FilterChipDefaults.IconSize),
                )
            }
        },
        trailingIcon = {
            Icon(
                painter = rememberVectorPainter(AppIcons.ArrowDropDown),
                contentDescription = null,
                modifier = Modifier.size(FilterChipDefaults.IconSize),
            )
        },
    )
}Chip.kt

Elevated filter chip supporting corner morphing.

Sources: [live-compose-guide-components-chip-elevated-filter-source](https://developer.android.com/develop/ui/compose/components/chip#elevated-filter)

## Filter chip

The FilterChip composable requires you to track whether or not the chip is selected. The following example demonstrates how you can show a leading checked icon only when the user has selected the chip:

@Composable
fun FilterChipExample() {
    var selected by remember { mutableStateOf(false) }

    FilterChip(
        onClick = { selected = !selected },
        label = {
            Text("Filter chip")
        },
        selected = selected,
        leadingIcon = if (selected) {
            {
                Icon(
                    painter = rememberVectorPainter(AppIcons.Done),
                    contentDescription = "Done icon",
                    modifier = Modifier.size(FilterChipDefaults.IconSize)
                )
            }
        } else {
            null
        },
    )
}Chip.kt

This implementation appears as follows when selected:

Figure 3.

Selected filter chip.

Sources: [live-compose-guide-components-chip-filter-source](https://developer.android.com/develop/ui/compose/components/chip#filter)

## Filter

The following snippet demonstrates how to implement a filter chip with corner morphing:

@Composable
fun FilterChipWithCornerMorphingSample() {
    var selected by remember { mutableStateOf(false) }
    FilterChip(
        selected = selected,
        onClick = { selected = !selected },
        label = { Text("Filter chip") },
        shapes = FilterChipDefaults.shapes(),
        leadingIcon = if (selected) {
            {
                Icon(
                    painter = rememberVectorPainter(AppIcons.Done),
                    contentDescription = null,
                    modifier = Modifier.size(FilterChipDefaults.IconSize),
                )
            }
        } else {
            null
        },
    )
}Chip.kt

Filter chip using corner morphing to transition shape when selected.

Sources: [live-compose-guide-components-chip-filter-1-source](https://developer.android.com/develop/ui/compose/components/chip#filter_1)

## Input chip

You can use the InputChip composable to create chips that result from user interaction. For example, in an email client, when the user is writing an email, an input chip might represent a contact the user has added to the "To:" field.

The following implementation demonstrates an input chip that is already in a selected state. The user dismisses the chip when they press it.

@Composable
fun InputChipExample(
    text: String,
    onDismiss: () -> Unit,
) {
    var enabled by remember { mutableStateOf(true) }
    if (!enabled) return

    InputChip(
        onClick = {
            onDismiss()
            enabled = !enabled
        },
        label = { Text(text) },
        selected = enabled,
        avatar = {
            Icon(
                painter = rememberVectorPainter(AppIcons.Person),
                contentDescription = "Localized description",
                Modifier.size(InputChipDefaults.AvatarSize)
            )
        },
        trailingIcon = {
            Icon(
                painter = rememberVectorPainter(AppIcons.Close),
                contentDescription = "Localized description",
                Modifier.size(InputChipDefaults.AvatarSize)
            )
        },
    )
}Chip.kt

This implementation appears as follows.

Figure 4.

Input chip.

Sources: [live-compose-guide-components-chip-input-source](https://developer.android.com/develop/ui/compose/components/chip#input)

## Input

Input chips represent discrete pieces of information entered by a user and also support corner morphing. The following snippet demonstrates how to implement an input chip with corner morphing:

@Composable
fun InputChipWithCornerMorphingSample() {
    var selected by remember { mutableStateOf(false) }
    InputChip(
        selected = selected,
        onClick = { selected = !selected },
        label = { Text("Input Chip") },
        shapes = InputChipDefaults.shapes(),
        avatar = {
            Icon(
                painter = rememberVectorPainter(AppIcons.Person),
                contentDescription = null,
                modifier = Modifier.size(InputChipDefaults.AvatarSize),
            )
        },
    )
}Chip.kt

Input chip supporting corner morphing.

Sources: [live-compose-guide-components-chip-input-1-source](https://developer.android.com/develop/ui/compose/components/chip#input_1)

## M3 Expressive update

Filter and input chips feature stylistic updates, including increased corner radii and spring motion. Assist and suggestion chips have been merged into expressive buttons.

For more information about the M3 Expressive updates for chips, see the Material Design 3 Chips guidelines.

Sources: [live-compose-guide-components-chip-m3-expressive-update-source](https://developer.android.com/develop/ui/compose/components/chip#m3-expressive-update)

## Introduction

The Chip component is a compact, interactive UI element. It represents complex entities like a contact or tag, often with an icon and label. It can be checkable, dismissible, or clickable.

The four types of chips and where you might use them are as follows:

Assist: Guides the user during a task. Often appears as a temporary UI element in response to user input.

Filter: Allows users to refine content from a set of options. They can be selected or deselected, and may include a checkmark icon when selected.

Input: Represents user-provided information, such as selections in a menu. They can contain an icon and text, and provide an X for removal.

Suggestion: Provides recommendations to the user based on their recent activity or input. Typically appear beneath an input field to prompt user actions.

Figure 1.

The four chip components.

Sources: [live-compose-guide-components-chip-main-content-source](https://developer.android.com/develop/ui/compose/components/chip#main-content)

## Suggestion chip

The SuggestionChip composable is the most basic of the composables listed on this page, both in its API definition and its common use cases. Suggestion chips present dynamically generated hints. For example, in an AI chat app, you might use suggestion chips to present possible responses to the most recent message.

Consider this implementation of SuggestionChip:

@Composable
fun SuggestionChipExample() {
    SuggestionChip(
        onClick = { Log.d("Suggestion chip", "hello world") },
        label = { Text("Suggestion chip") }
    )
}Chip.kt

This implementation appears as follows:

Figure 5.

Suggestion chip.

Sources: [live-compose-guide-components-chip-suggestion-source](https://developer.android.com/develop/ui/compose/components/chip#suggestion)
