---
type: reference
title: "Guidance: Choose modifier order to control the clickable area"
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
  id: guide-modifier-order-hit-area
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.Modifier
  sections:
    - id: guide-modifier-order-hit-area
      title: "Guidance: Choose modifier order to control the clickable area"
      aliases:
        - androidx.compose.ui.Modifier
        - androidx.compose.foundation.clickable
        - androidx.compose.foundation.layout.padding
        - modifier order
        - clickable padding
        - 모디파이어 순서
        - 클릭 영역
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-order-modifier-matters-source
      relatedIds:
        - live-compose-guide-modifiers-order-modifier-matters
---

# Guidance: Choose modifier order to control the clickable area

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Choose modifier order to control the clickable area

Guidance: Modifier order changes behavior because each modifier operates on the result of the preceding one. Use Modifier.clickable(...).padding(...) when the padded surrounding area should respond to clicks. Reverse the order to Modifier.padding(...).clickable(...) when the added padding should remain outside the clickable area. Limitation: the same modifier functions in a different sequence do not produce equivalent input behavior; assess the intended hit area when arranging the chain.

Sources: [live-compose-guide-modifiers-order-modifier-matters-source](https://developer.android.com/develop/ui/compose/modifiers#order-modifier-matters)
