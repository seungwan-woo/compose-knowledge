---
type: reference
title: "Guidance: Measure children once within incoming constraints"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-layouts-custom-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/custom#main-content
    revision: web:compose-guide-layouts-custom:content@sha256:9e25388e2aeb61a72ccb22f83037ede8460811f9c7366cf1244b81e2b2ff7991
    sha256: 2aefa94014dd9213475337ee6504971b4c48775b6c37e2c2c0d73084c6e938a8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In Compose, UI elements are represented by the composable functions that emit a piece of UI when invoked, that is then added to a UI tree that gets rendered on the screen. Each UI element has one parent and potentially many children. Each element is also located within its parent, specified as an (x, y) position, and a size, specified as a width and a height.

      Parents define the constraints for their child elements. An element is asked to define its size within those constraints. Constraints restrict the minimum and maximum width and height of an element. If an element has child elements, it may measure each child to help determine its size. Once an element determines and reports its own size, it has an opportunity to define how to place its child elements relative to itself, as described in detail in Creating custom layouts.

      Laying out each node in the UI tree is a three step process. Each node must:

      Measure any children

      Decide its own size

      Place its children

      Figure 1.

      The three steps of node layout are to measure children, decide size, and place children.

      The use of scopes defines when you can measure and place your children. Measuring a layout can only be done during the measurement and layout passes, and a child can only be placed during the layout passes (and only after it has been measured). Due to Compose scopes such as MeasureScope, and PlacementScope, this is enforced at compile time.
  - id: live-compose-guide-layouts-intrinsic-measurements-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#main-content
    revision: web:compose-guide-layouts-intrinsic-measurements:content@sha256:68df20074691e6fa39f8d9f6edeee7818402033b6013471cec45cd0fd7c9a979
    sha256: 22a4e67efc7c07932bfaeebbb6f2e245989c62a740f23fce18d9cbb2152ef0e8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      One of the rules of Compose is that you should only measure your children once; measuring children twice throws a runtime exception. However, there are times when you need some information about your children before measuring them.

      Intrinsics lets you query children before they're actually measured.

      To a composable, you can ask for its IntrinsicSize.Min or IntrinsicSize.Max:

      Modifier.width(IntrinsicSize.Min) - What's the minimum width you need to display your content properly?

      Modifier.width(IntrinsicSize.Max) - What's the maximum width you need to display your content properly?

      Modifier.height(IntrinsicSize.Min) - What's the minimum height you need to display your content properly?

      Modifier.height(IntrinsicSize.Max) - What's the maximum height you need to display your content properly?

      For example, if you ask the minIntrinsicHeight of a Text with infinite width constraints in a custom layout, it returns the height of the Text with the text drawn in a single line.
compose:
  id: guide-custom-layout-measure-once
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.layout.Layout
  sections:
    - id: guide-custom-layout-measure-once
      title: "Guidance: Measure children once within incoming constraints"
      aliases:
        - androidx.compose.ui.layout.Layout
        - androidx.compose.ui.layout.MeasureScope
        - androidx.compose.ui.unit.Constraints
        - custom layout
        - constraints
        - measure once
        - measurement
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-custom-main-content-source
        - live-compose-guide-layouts-intrinsic-measurements-main-content-source
      relatedIds:
        - live-compose-guide-layouts-custom-main-content
        - live-compose-guide-layouts-intrinsic-measurements-main-content
---

# Guidance: Measure children once within incoming constraints

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Measure children once within incoming constraints

Guidance: In a custom Layout, use the parent's minimum and maximum width and height constraints when choosing the layout size. Measure children, decide the parent size, then place the measured children. Measure each child only once; measuring twice throws a runtime exception. If sizing needs information before measurement, query intrinsics rather than measuring a child a second time. Limitation: this describes ordinary Compose layout; it does not specify a custom layout's constraint propagation or intrinsic formula.

Sources: [live-compose-guide-layouts-custom-main-content-source](https://developer.android.com/develop/ui/compose/layouts/custom#main-content), [live-compose-guide-layouts-intrinsic-measurements-main-content-source](https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#main-content)
