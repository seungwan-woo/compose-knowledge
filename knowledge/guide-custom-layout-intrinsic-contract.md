---
type: reference
title: "Guidance: Match custom intrinsic measurements to the measure policy"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-layouts-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#intrinsics-in-layouts
    revision: web:compose-guide-layouts-intrinsic-measurements:content@sha256:68df20074691e6fa39f8d9f6edeee7818402033b6013471cec45cd0fd7c9a979
    sha256: 650c950a97a9a56fb2a22188f58dd311443fafea4dea3658716e599aab4eb440
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When creating a custom Layout or layout modifier, intrinsic measurements are calculated automatically based on approximations. Therefore, the calculations might not be correct for all layouts. These APIs offer options to override these defaults.

      To specify the intrinsics measurements of your custom Layout, override the minIntrinsicWidth, minIntrinsicHeight, maxIntrinsicWidth, and maxIntrinsicHeight of the MeasurePolicy interface when creating it. Your override needs to match what measure does. For example, in a custom column that stacks its children vertically and gives each child the full column width, the minimum intrinsic height for a given width is the sum of its children's minimum intrinsic heights for that width:

      @Composable
      fun MyCustomComposable(
          modifier: Modifier = Modifier,
          content: @Composable () -> Unit
      ) {
          Layout(
              content = content,
              modifier = modifier,
              measurePolicy = object : MeasurePolicy {
                  override fun MeasureScope.measure(
                      measurables: List<Measurable>,
                      constraints: Constraints
                  ): MeasureResult {
                      val childConstraints = constraints.copy(minHeight = 0)
                      val placeables = measurables.map { measurable ->
                          measurable.measure(childConstraints)
                      }
                      val width = constraints.constrainWidth(
                          placeables.maxOfOrNull { it.width } ?: 0
                      )
                      val height = constraints.constrainHeight(
                          placeables.sumOf { it.height }
                      )
                      return layout(width, height) {
                          var yPosition = 0
                          placeables.forEach { placeable ->
                              placeable.placeRelative(x = 0, y = yPosition)
                              yPosition += placeable.height
                          }
                      }
                  }

                  override fun IntrinsicMeasureScope.minIntrinsicHeight(
                      measurables: List<IntrinsicMeasurable>,
                      width: Int
                  ): Int {
                      return measurables.sumOf { measurable ->
compose:
  id: guide-custom-layout-intrinsic-contract
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.layout.MeasurePolicy
  sections:
    - id: guide-custom-layout-intrinsic-contract
      title: "Guidance: Match custom intrinsic measurements to the measure policy"
      aliases:
        - androidx.compose.ui.layout.MeasurePolicy
        - androidx.compose.ui.layout.MeasurePolicy.minIntrinsicHeight
        - androidx.compose.ui.layout.MeasurePolicy.minIntrinsicWidth
        - custom layout
        - intrinsic measurements
        - intrinsics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-layouts-source
      relatedIds:
        - live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-layouts
---

# Guidance: Match custom intrinsic measurements to the measure policy

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Match custom intrinsic measurements to the measure policy

Guidance: A custom Layout or layout modifier gets approximate intrinsic measurements by default; those approximations can be wrong for its layout algorithm. Override minIntrinsicWidth, minIntrinsicHeight, maxIntrinsicWidth, or maxIntrinsicHeight on MeasurePolicy when needed, keeping each answer consistent with measure. For a column that gives every child the full width, minimum intrinsic height for that width is the sum of child minimum intrinsic heights. Limitation: the column formula is not a general formula for other layouts.

Sources: [live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-layouts-source](https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#intrinsics-in-layouts)
