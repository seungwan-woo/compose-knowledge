---
type: reference
title: "Guidance: Choose relative or absolute placement deliberately for RTL"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-layouts-custom-layout-direction-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/custom#layout-direction
    revision: web:compose-guide-layouts-custom:content@sha256:9e25388e2aeb61a72ccb22f83037ede8460811f9c7366cf1244b81e2b2ff7991
    sha256: 07210a7e26d07cdcef3b1985695e7790e0f1c600baa96266304d53fbc5b81c76
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Change the layout direction of a composable by changing the LocalLayoutDirection composition local.

      If you're placing composables manually on the screen, the LayoutDirection is available from the layoutDirection property of the MeasureScope in the layout modifier or Layout composable.

      When using layoutDirection, place composables using place. Unlike the placeRelative method, place doesn't change based on the layout direction (left-to-right versus right-to-left).
compose:
  id: guide-custom-layout-rtl-placement
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.layout.Placeable.PlacementScope.placeRelative
  sections:
    - id: guide-custom-layout-rtl-placement
      title: "Guidance: Choose relative or absolute placement deliberately for RTL"
      aliases:
        - androidx.compose.ui.layout.Placeable.PlacementScope.placeRelative
        - androidx.compose.ui.layout.Placeable.PlacementScope.place
        - androidx.compose.ui.unit.LayoutDirection
        - androidx.compose.ui.platform.LocalLayoutDirection
        - RTL
        - layout direction
        - manual placement
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-custom-layout-direction-source
      relatedIds:
        - live-compose-guide-layouts-custom-layout-direction
---

# Guidance: Choose relative or absolute placement deliberately for RTL

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Choose relative or absolute placement deliberately for RTL

Guidance: For manual placement in a Layout or layout modifier, MeasureScope.layoutDirection exposes the current direction. placeRelative changes placement with left-to-right versus right-to-left direction; place uses absolute coordinates. When calculating direction-dependent coordinates yourself, use place so placement does not apply another direction-dependent change. LocalLayoutDirection can change the direction of a composable. Limitation: this guidance does not define a component's visual mirroring policy; check both directions for its intended arrangement.

Sources: [live-compose-guide-layouts-custom-layout-direction-source](https://developer.android.com/develop/ui/compose/layouts/custom#layout-direction)
