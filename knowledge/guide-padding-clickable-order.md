---
type: reference
title: "Guidance: Place padding inside or outside the clickable area"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-modifiers-order-modifier-matters-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#order-modifier-matters
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: 8ac771626f5427b3ba003fb904e0d1bb1d420f26fdc40edc5ebba54ec54319a4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The order of modifier functions is significant. Since each function makes changes to the Modifierreturned by the previous function, the sequence affects the final result. Let's see an example of this:

      @Composable
      fun ArtistCard(/*...*/) {
          val padding = 16.dp
          Column(
              Modifier
                  .clickable(onClick = onClick)
                  .padding(padding)
                  .fillMaxWidth()
          ) {
              // rest of the implementation
          }
      }ModifierSnippets.kt

      In the code above the whole area is clickable, including the surrounding padding, because the padding modifier has been applied after the clickable modifier. If the modifiers order is reversed, the space added by padding does not react to user input:

      @Composable
      fun ArtistCard(/*...*/) {
          val padding = 16.dp
          Column(
              Modifier
                  .padding(padding)
                  .clickable(onClick = onClick)
                  .fillMaxWidth()
          ) {
              // rest of the implementation
          }
      }ModifierSnippets.kt
compose:
  id: guide-padding-clickable-order
  artifact: androidx.compose.foundation:foundation-layout
  fqn: androidx.compose.foundation.layout.padding
  sections:
    - id: guide-padding-clickable-order
      title: "Guidance: Place padding inside or outside the clickable area"
      aliases:
        - androidx.compose.foundation.layout.padding
        - androidx.compose.foundation.clickable
        - padding order
        - clickable padding
        - padded hit area
        - 패딩 순서
        - 클릭 가능한 여백
        - 터치 영역
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-order-modifier-matters-source
      relatedIds:
        - live-compose-guide-modifiers-order-modifier-matters
---

# Guidance: Place padding inside or outside the clickable area

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Place padding inside or outside the clickable area

Guidance: Place padding after clickable when the surrounding padded space should respond to clicks: Modifier.clickable(...).padding(16.dp). Place padding before clickable when that added space should remain outside the clickable area: Modifier.padding(16.dp).clickable(...). Each modifier changes the result of the preceding modifier, so order determines the final input behavior. Limitation: equal padding values do not imply equal clickable areas; reversing these two modifiers changes whether the padded space reacts to input.

Sources: [live-compose-guide-modifiers-order-modifier-matters-source](https://developer.android.com/develop/ui/compose/modifiers#order-modifier-matters)
