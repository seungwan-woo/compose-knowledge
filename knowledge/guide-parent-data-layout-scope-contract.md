---
type: reference
title: "Guidance: Expose child layout configuration through the parent content scope"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-api-guidelines-lines-478-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 478
    endLine: 510
    sha256: f382b4eb6c5ac8266704de685acd87c13808db524c8a8c43813a7e536442c04e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      ### Parent data and layout-scoped Modifiers

      Android's View system has the concept of LayoutParams - a type of object stored opaquely with a ViewGroup's child view that provides layout instructions specific to the ViewGroup that will measure and position it.

      Compose UI modifiers afford a related pattern with parent data (using `ParentDataModifierNode`) and receiver scope objects for layout composable functions. A `ParentDataModifierNode` is a tool for an integrator to provide arguments to a parent layout for each child.

      This pattern is useful when a parent layout needs to receive child-specific information to configure its behavior around that child. This allows the parent's API to remain simple and decoupled from the specific children placed inside it. Instead of passing a complex data structure to the parent describing all children, the integrator can provide configuration for each child individually at the call site where the child is defined. For example, `Row` uses `ParentDataModifierNode` for the `weight` modifier, allowing each child to specify how much space it should occupy. This avoids having to pass a list of weights to the `Row` itself.

      When using `ParentDataModifierNode`s, follow these guidelines:

      **Parent data modifiers MUST be defined on a layout scope**

      Parent data modifiers provide a way for a child to give data to a parent layout. To guide users to only provide parent data modifiers to direct children of a matching layout, and to make it clear where the data is being consumed, these modifiers should be defined on a scope object that is only available within the parent's content lambda. They should not be defined as top-level functions that can be used anywhere. This improves API clarity and prevents misuse.

      #### Do

      ```kotlin
      // The weight modifier is scoped to a specific interface that is only available
      // in the content lambda of the parent.
      @LayoutScopeMarker
      @Stable
      interface MyRowScope {
          fun Modifier.weight(weight: Float): Modifier
      }

      @Composable
      fun MyRow(content: @Composable MyRowScope.() -> Unit) {
          // ...
      }

      // The weight modifier can only be used inside MyRowScope.
      MyRow {
  - id: live-compose-guide-modifiers-scope-safety-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#scope-safety
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: b5886d9020d2dd7f60d737bff909fd88a8954289064c4d87d9144a8892ebfb75
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In Compose, there are modifiers that can only be used when applied to children of certain composables. Compose enforces this by means of custom scopes.

      For example, if you want to make a child as big as the parent Box without affecting the Box size, use the matchParentSize modifier. matchParentSize is only available in BoxScope. Therefore, it can only be used on a child within a Box parent.

      Scope safety prevents you from adding modifiers that wouldn't work in other composables and scopes and saves time from trial and error.

      Scoped modifiers notify the parent about some information the parent should know about the child. These are also commonly referred to as parent data modifiers. Their internals are different from the general purpose modifiers, but from a usage perspective, these differences don't matter.
compose:
  id: guide-parent-data-layout-scope-contract
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.node.ParentDataModifierNode
  sections:
    - id: guide-parent-data-layout-scope-contract
      title: "Guidance: Expose child layout configuration through the parent content scope"
      aliases:
        - androidx.compose.ui.node.ParentDataModifierNode
        - parent data
        - layout scope
        - scoped content
        - receiver scope
        - 부모 데이터
        - 레이아웃 스코프
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-478-source
        - live-compose-guide-modifiers-scope-safety-source
      relatedIds:
        - live-compose-api-guidelines-lines-478
        - live-compose-guide-modifiers-scope-safety
---

# Guidance: Expose child layout configuration through the parent content scope

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Expose child layout configuration through the parent content scope

Guidance: For child-specific layout configuration, expose parent-data modifiers on a receiver scope available in the parent layout's content lambda. The integrator can then attach configuration at each child call site instead of passing the parent a parallel structure describing all children. Keep the layout decoupled from concrete child components. Limitation: lexical access to a scope does not make a modifier meaningful for every descendant; it must reach a direct child of the matching consuming layout. Avoid top-level parent-data factories that obscure which parent consumes the data.

Sources: [live-compose-api-guidelines-lines-478-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md), [live-compose-guide-modifiers-scope-safety-source](https://developer.android.com/develop/ui/compose/modifiers#scope-safety)
