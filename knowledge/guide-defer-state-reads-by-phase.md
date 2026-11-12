---
type: reference
title: "Guidance: Read frequently changing state in layout or draw"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-performance-bestpractices-defer-reads-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/bestpractices#defer-reads
    revision: web:compose-guide-performance-bestpractices:content@sha256:ad6d6b11b9339d90a88f85f03049651fe70e8b6a131986b10cfa29b82026ad91
    sha256: cf21026d1579053ae16b37a1afed94421adc546b9dce0d3bf9eae56c210ebd47
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      { scrollProvider().toDp() }
          Column(
              modifier = Modifier
                  .offset(y = offset)
          ) {
              // ...
          }
      }PerformanceSnippets.kt

      The scroll parameter is now a lambda. That means Title can still reference the hoisted state, but the value is only read inside Title, where it's actually needed. As a result, when the scroll value changes, the nearest recomposition scope is now the Title composable–Compose no longer needs to recompose the whole Box.

      This is a good improvement, but you can do better! You should be suspicious if you are causing recomposition just to re-layout or redraw a Composable. In this case, all you are doing is changing the offset of the Title composable, which could be done in the layout phase.

      @Composable
      private fun Title(snack: Snack, scrollProvider: () -> Int) {
          // ...
          Column(
              modifier = Modifier
                  .offset { IntOffset(x = 0, y = scrollProvider()) }
          ) {
              // ...
          }
      }PerformanceSnippets.kt

      Previously, the code used Modifier.offset(x: Dp, y: Dp), which takes the offset as a parameter. By switching to the lambda version of the modifier, you can make sure the function reads the scroll state in the layout phase. As a result, when the scroll state changes, Compose can skip the composition phase entirely, and go straight to the layout phase. When you are passing frequently changing State variables into modifiers, you should use the lambda versions of the modifiers whenever possible.

      Here is another example of this approach. This code hasn't been optimized yet:

      // Here, assume animateColorBetween() is a function that swaps between
      // two colors
      val color by animateColorBetween(Color.Cyan, Color.Magenta)

      Box(
          Modifier
              .fillMaxSize()
              .background(color)
      )PerformanceSnippets.kt

      Here, the box's background color is switching rapidly between two colors. This state is thus changing very frequently. The composable then reads this state in the background modifier. As a result, the box has to recompose on every frame, since the color is changing on every frame.

      To improve this, use a lambda-based modifier—in this case, drawBehind. That means the color state is only read
  - id: live-compose-guide-performance-bestpractices-defer-reads-3-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/bestpractices#defer-reads
    revision: web:compose-guide-performance-bestpractices:content@sha256:ad6d6b11b9339d90a88f85f03049651fe70e8b6a131986b10cfa29b82026ad91
    sha256: 5abf373aa3a4f5e3380913c357d9021e47b48752b0630af2702eccb7d0fc54c4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      during the draw phase. As a result, Compose can skip the composition and layout phases entirely—when the color changes, Compose goes straight to the draw phase.

      val color by animateColorBetween(Color.Cyan, Color.Magenta)
      Box(
          Modifier
              .fillMaxSize()
              .drawBehind {
                  drawRect(color)
              }
      )PerformanceSnippets.kt
compose:
  id: guide-defer-state-reads-by-phase
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: guide-defer-state-reads-by-phase
      title: "Guidance: Read frequently changing state in layout or draw"
      aliases:
        - androidx.compose.runtime
        - androidx.compose.foundation.layout.offset
        - androidx.compose.ui.draw.drawBehind
        - defer state reads
        - skip recomposition
        - layout draw phases
        - 상태 읽기 지연
        - 재구성 최적화
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-bestpractices-defer-reads-2-source
        - live-compose-guide-performance-bestpractices-defer-reads-3-source
      relatedIds:
        - live-compose-guide-performance-bestpractices-defer-reads-2
        - live-compose-guide-performance-bestpractices-defer-reads-3
---

# Guidance: Read frequently changing state in layout or draw

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Read frequently changing state in layout or draw

Guidance: When a changing value only affects placement, read it in a layout lambda such as Modifier.offset { IntOffset(0, scrollProvider()) }. The documented scroll example can then skip composition and update layout directly. If only a drawn color changes, read it inside drawBehind and drawRect so the update can skip composition and layout. Limitation: simply passing a lambda is not enough if you call it during composition; place the state read inside the layout or draw callback for the phase that needs it.

Sources: [live-compose-guide-performance-bestpractices-defer-reads-2-source](https://developer.android.com/develop/ui/compose/performance/bestpractices#defer-reads), [live-compose-guide-performance-bestpractices-defer-reads-3-source](https://developer.android.com/develop/ui/compose/performance/bestpractices#defer-reads)
