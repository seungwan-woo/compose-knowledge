---
type: reference
title: "Guidance: Expose one modifier as the first optional parameter"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-api-guidelines-lines-357-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 357
    endLine: 391
    sha256: bc13048635b65a876960b25d4634ff269ae4a8c46bbec174e9528da6dfbcaf61
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      
      #### Why?

      Elements are declarative entities in a Compose UI composition. Their presence or absence in the composition determines whether they appear in the resulting UI. Returning a value is not necessary; any means of controlling the emitted element should be provided as a parameter to the element function, not returned by calling the element function. See the, "hoisted state" section in the Compose API design patterns section of this document for more information.

      #### Do

      ```kotlin
      @Composable
      fun FancyButton(
          text: String,
          onClick: () -> Unit,
          modifier: Modifier = Modifier
      ) {
      ```

      #### Don't

      ```kotlin
      interface ButtonState {
          val clicks: Flow<ClickEvent>
          val measuredSize: Size
      }

      @Composable
      fun FancyButton(
          text: String,
          modifier: Modifier = Modifier
      ): ButtonState {
      ```

      ### Elements accept and respect a Modifier parameter

      Element functions MUST accept a parameter of type `Modifier`. This parameter MUST be named "`modifier`" and MUST appear as the first optional parameter in the element function's parameter list. Element functions MUST NOT accept multiple `Modifier` parameters.
compose:
  id: guide-component-modifier-parameter-contract
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.Modifier
  sections:
    - id: guide-component-modifier-parameter-contract
      title: "Guidance: Expose one modifier as the first optional parameter"
      aliases:
        - Modifier
        - component API
        - first optional parameter
        - element signature
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-357-source
      relatedIds:
        - live-compose-api-guidelines-lines-357
---

# Guidance: Expose one modifier as the first optional parameter

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Expose one modifier as the first optional parameter

Guidance: A reusable Compose UI element should accept one Modifier parameter named modifier as its first optional parameter. Keep required data and event parameters before it, and avoid multiple Modifier parameters on the element API. Review this public signature separately from internal modifier ordering. Limitation: this guideline addresses Compose UI element functions; it does not establish the API contract of every helper composable.

Sources: [live-compose-api-guidelines-lines-357-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)
