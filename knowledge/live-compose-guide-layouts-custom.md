---
type: reference
title: Custom layouts
description: "Public source: https://developer.android.com/develop/ui/compose/layouts/custom"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-layouts-custom-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/custom#additional-resources
    revision: web:compose-guide-layouts-custom:content@sha256:9e25388e2aeb61a72ccb22f83037ede8460811f9c7366cf1244b81e2b2ff7991
    sha256: 94d6dddad53ede1edd834765775d406ad7319c5135919d7355600c6556017fc1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: To learn more about custom layouts in Compose, consult the following additional resources.
  - id: live-compose-guide-layouts-custom-create-custom-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/custom#create-custom
    revision: web:compose-guide-layouts-custom:content@sha256:9e25388e2aeb61a72ccb22f83037ede8460811f9c7366cf1244b81e2b2ff7991
    sha256: 2f49370e42c7b0d0a08c7bea8b670e21cd0184cdeaab52c66c6529f5a9ec9e61
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      CallingComposable(modifier: Modifier = Modifier) {
          MyBasicColumn(modifier.padding(8.dp)) {
              Text("MyBasicColumn")
              Text("places items")
              Text("vertically.")
              Text("We've done it by hand!")
          }
      }CustomLayoutSnippets.kt

      Figure 4.

      Custom

      Column

      implementation.
  - id: live-compose-guide-layouts-custom-create-custom-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/custom#create-custom
    revision: web:compose-guide-layouts-custom:content@sha256:9e25388e2aeb61a72ccb22f83037ede8460811f9c7366cf1244b81e2b2ff7991
    sha256: 75de55fdef720d2dda853629ea8d307bfdb722bf84dbbf36188619b3859840bb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The layout modifier only changes the calling composable. To measure and layout multiple composables, use the Layout composable instead. This composable lets you measure and lay out children manually. All higher-level layouts like Column and Row are built with the Layout composable.

      This example builds a very basic version of Column. Most custom layouts follow this pattern:

      @Composable
      fun MyBasicColumn(
          modifier: Modifier = Modifier,
          content: @Composable () -> Unit
      ) {
          Layout(
              modifier = modifier,
              content = content
          ) { measurables, constraints ->
              // measure and position children given constraints logic here
              // ...
          }
      }CustomLayoutSnippets.kt

      Similarly to the layout modifier, measurables is the list of children that need to be measured and constraints are the constraints from the parent. Following the same logic as before, MyBasicColumn can be implemented like this:

      @Composable
      fun MyBasicColumn(
          modifier: Modifier = Modifier,
          content: @Composable () -> Unit
      ) {
          Layout(
              modifier = modifier,
              content = content
          ) { measurables, constraints ->
              // Don't constrain child views further, measure them with given constraints
              // List of measured children
              val placeables = measurables.map { measurable ->
                  // Measure each children
                  measurable.measure(constraints)
              }

              // Set the size of the layout as big as it can
              layout(constraints.maxWidth, constraints.maxHeight) {
                  // Track the y co-ord we have placed children up to
                  var yPosition = 0

                  // Place children in the parent layout
                  placeables.forEach { placeable ->
                      // Position item on the screen
                      placeable.placeRelative(x = 0, y = yPosition)

                      // Record the y co-ord placed up to
                      yPosition += placeable.height
                  }
              }
          }
      }CustomLayoutSnippets.kt

      The child composables are constrained by the incoming Layout constraints, and they're placed based on the yPosition of the previous composable.

      Here's how that custom composable would be used:

      @Composable
      fun
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
  - id: live-compose-guide-layouts-custom-layout-modifier-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/custom#layout-modifier
    revision: web:compose-guide-layouts-custom:content@sha256:9e25388e2aeb61a72ccb22f83037ede8460811f9c7366cf1244b81e2b2ff7991
    sha256: 8c9a875a7f8a97b749c026a3d715c572a7e9b3451fa63520e87ef6bc0d8baa83
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      right-to-left layout, placeRelative mirrors the x position; see Layout direction. The y position is firstBaselineToTop minus the first baseline of the text, so that the first baseline is firstBaselineToTop from the top.

      To verify this works as expected, use this modifier on a Text:

      @Preview
      @Composable
      fun TextWithPaddingToBaselinePreview() {
          MyApplicationTheme {
              Text("Hi there!", Modifier.firstBaselineToTop(32.dp))
          }
      }

      @Preview
      @Composable
      fun TextWithNormalPaddingPreview() {
          MyApplicationTheme {
              Text("Hi there!", Modifier.padding(top = 32.dp))
          }
      }CustomLayoutSnippets.kt

      Figure 3.

      Modifier applied to a

      Text

      composable and previewed.
  - id: live-compose-guide-layouts-custom-layout-modifier-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/custom#layout-modifier
    revision: web:compose-guide-layouts-custom:content@sha256:9e25388e2aeb61a72ccb22f83037ede8460811f9c7366cf1244b81e2b2ff7991
    sha256: a6f0b3296b448fd8c8e24e6057a87fc1d19120d163ee13143964fb30b723c3a2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can use the layout modifier to modify how an element is measured and laid out. The modifier takes a lambda; its parameters include the element you can measure, passed as measurable, and that composable's incoming constraints, passed as constraints. A custom layout modifier can look like this:

      fun Modifier.customLayoutModifier() =
          layout { measurable, constraints ->
              // ...
          }CustomLayoutSnippets.kt

      Display a Text on the screen and control the distance from the top to the baseline of the first line of text. This is exactly what the paddingFromBaseline modifier does; you're implementing it here as an example. To do that, use the layout modifier to manually place the composable on the screen. Here's the resulting behavior where the Text top padding is set to 24.dp:

      Figure 2.

      Text with

      paddingFromBaseline

      applied.

      Here's the code to produce that spacing:

      fun Modifier.firstBaselineToTop(
          firstBaselineToTop: Dp
      ) = layout { measurable, constraints ->
          // Measure the composable
          val placeable = measurable.measure(constraints)

          // Check the composable has a first baseline
          check(placeable[FirstBaseline] != AlignmentLine.Unspecified)
          val firstBaseline = placeable[FirstBaseline]

          // Height of the composable with padding - first baseline
          val placeableY = firstBaselineToTop.roundToPx() - firstBaseline
          val height = placeable.height + placeableY
          layout(placeable.width, height) {
              // Where the composable gets placed
              placeable.placeRelative(0, placeableY)
          }
      }CustomLayoutSnippets.kt

      Here's what's going on in that code:

      In the measurable lambda parameter, you measure the Text represented by the measurable parameter by calling measurable.measure(constraints).

      You specify the size of the composable by calling the layout(width, height) method, which also gives a lambda used for placing the wrapped elements. In this case, the height is the height of the Text plus placeableY, which is firstBaselineToTop minus the first baseline of the Text.

      You position the wrapped elements on the screen by calling placeable.placeRelative(x, y). If the wrapped elements aren't placed, they won't be visible. In a
  - id: live-compose-guide-layouts-custom-layouts-in-action-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/custom#layouts-in-action
    revision: web:compose-guide-layouts-custom:content@sha256:9e25388e2aeb61a72ccb22f83037ede8460811f9c7366cf1244b81e2b2ff7991
    sha256: 4c8589ea8ef81c47967566f85734b94c5bb9b5dccd208690ff81d06f85c76230
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Learn more about layouts and modifiers in the Basic layouts in Compose, and see custom layouts in action in the Compose samples that create custom layouts.
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
  - id: live-compose-guide-layouts-custom-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/custom#recommended_for_you
    revision: web:compose-guide-layouts-custom:content@sha256:9e25388e2aeb61a72ccb22f83037ede8460811f9c7366cf1244b81e2b2ff7991
    sha256: a91414699c5ca8baf732f5cc22106030b6f93de01fc64585f9c48851faa43e56
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Intrinsic measurements in Compose layouts

      Graphics in Compose

      Compose modifiers
  - id: live-compose-guide-layouts-custom-videos-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/custom#videos
    revision: web:compose-guide-layouts-custom:content@sha256:9e25388e2aeb61a72ccb22f83037ede8460811f9c7366cf1244b81e2b2ff7991
    sha256: 341fd027564df06767988157d80168877d047fea7a9fc6577ff706897ecbce76
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: A deep dive into Jetpack Compose Layouts
compose:
  id: live-compose-guide-layouts-custom
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui
  sections:
    - id: live-compose-guide-layouts-custom-additional-resources
      title: Learn more
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-custom-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-layouts-custom-create-custom
      title: Create custom layouts
      aliases:
        - androidx.compose.ui.layout.Layout
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-custom-create-custom-source
      relatedIds: []
    - id: live-compose-guide-layouts-custom-create-custom-2
      title: Create custom layouts
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-custom-create-custom-2-source
      relatedIds: []
    - id: live-compose-guide-layouts-custom-layout-direction
      title: Layout direction
      aliases:
        - androidx.compose.ui.layout.Layout
        - androidx.compose.ui.layout.MeasureScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-custom-layout-direction-source
      relatedIds: []
    - id: live-compose-guide-layouts-custom-layout-modifier
      title: Use the layout modifier
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-custom-layout-modifier-source
      relatedIds: []
    - id: live-compose-guide-layouts-custom-layout-modifier-2
      title: Use the layout modifier
      aliases:
        - androidx.compose.ui.layout.Layout
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-custom-layout-modifier-2-source
      relatedIds: []
    - id: live-compose-guide-layouts-custom-layouts-in-action
      title: Custom layouts in action
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-custom-layouts-in-action-source
      relatedIds: []
    - id: live-compose-guide-layouts-custom-main-content
      title: Introduction
      aliases:
        - androidx.compose.ui.layout.MeasureScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-custom-main-content-source
      relatedIds: []
    - id: live-compose-guide-layouts-custom-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-custom-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-layouts-custom-videos
      title: Videos
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-custom-videos-source
      relatedIds: []
---

# Custom layouts

Public source: https://developer.android.com/develop/ui/compose/layouts/custom

## Learn more

To learn more about custom layouts in Compose, consult the following additional resources.

Sources: [live-compose-guide-layouts-custom-additional-resources-source](https://developer.android.com/develop/ui/compose/layouts/custom#additional-resources)

## Create custom layouts

The layout modifier only changes the calling composable. To measure and layout multiple composables, use the Layout composable instead. This composable lets you measure and lay out children manually. All higher-level layouts like Column and Row are built with the Layout composable.

This example builds a very basic version of Column. Most custom layouts follow this pattern:

@Composable
fun MyBasicColumn(
    modifier: Modifier = Modifier,
    content: @Composable () -> Unit
) {
    Layout(
        modifier = modifier,
        content = content
    ) { measurables, constraints ->
        // measure and position children given constraints logic here
        // ...
    }
}CustomLayoutSnippets.kt

Similarly to the layout modifier, measurables is the list of children that need to be measured and constraints are the constraints from the parent. Following the same logic as before, MyBasicColumn can be implemented like this:

@Composable
fun MyBasicColumn(
    modifier: Modifier = Modifier,
    content: @Composable () -> Unit
) {
    Layout(
        modifier = modifier,
        content = content
    ) { measurables, constraints ->
        // Don't constrain child views further, measure them with given constraints
        // List of measured children
        val placeables = measurables.map { measurable ->
            // Measure each children
            measurable.measure(constraints)
        }

        // Set the size of the layout as big as it can
        layout(constraints.maxWidth, constraints.maxHeight) {
            // Track the y co-ord we have placed children up to
            var yPosition = 0

            // Place children in the parent layout
            placeables.forEach { placeable ->
                // Position item on the screen
                placeable.placeRelative(x = 0, y = yPosition)

                // Record the y co-ord placed up to
                yPosition += placeable.height
            }
        }
    }
}CustomLayoutSnippets.kt

The child composables are constrained by the incoming Layout constraints, and they're placed based on the yPosition of the previous composable.

Here's how that custom composable would be used:

@Composable
fun

Sources: [live-compose-guide-layouts-custom-create-custom-source](https://developer.android.com/develop/ui/compose/layouts/custom#create-custom)

## Create custom layouts

CallingComposable(modifier: Modifier = Modifier) {
    MyBasicColumn(modifier.padding(8.dp)) {
        Text("MyBasicColumn")
        Text("places items")
        Text("vertically.")
        Text("We've done it by hand!")
    }
}CustomLayoutSnippets.kt

Figure 4.

Custom

Column

implementation.

Sources: [live-compose-guide-layouts-custom-create-custom-2-source](https://developer.android.com/develop/ui/compose/layouts/custom#create-custom)

## Layout direction

Change the layout direction of a composable by changing the LocalLayoutDirection composition local.

If you're placing composables manually on the screen, the LayoutDirection is available from the layoutDirection property of the MeasureScope in the layout modifier or Layout composable.

When using layoutDirection, place composables using place. Unlike the placeRelative method, place doesn't change based on the layout direction (left-to-right versus right-to-left).

Sources: [live-compose-guide-layouts-custom-layout-direction-source](https://developer.android.com/develop/ui/compose/layouts/custom#layout-direction)

## Use the layout modifier

You can use the layout modifier to modify how an element is measured and laid out. The modifier takes a lambda; its parameters include the element you can measure, passed as measurable, and that composable's incoming constraints, passed as constraints. A custom layout modifier can look like this:

fun Modifier.customLayoutModifier() =
    layout { measurable, constraints ->
        // ...
    }CustomLayoutSnippets.kt

Display a Text on the screen and control the distance from the top to the baseline of the first line of text. This is exactly what the paddingFromBaseline modifier does; you're implementing it here as an example. To do that, use the layout modifier to manually place the composable on the screen. Here's the resulting behavior where the Text top padding is set to 24.dp:

Figure 2.

Text with

paddingFromBaseline

applied.

Here's the code to produce that spacing:

fun Modifier.firstBaselineToTop(
    firstBaselineToTop: Dp
) = layout { measurable, constraints ->
    // Measure the composable
    val placeable = measurable.measure(constraints)

    // Check the composable has a first baseline
    check(placeable[FirstBaseline] != AlignmentLine.Unspecified)
    val firstBaseline = placeable[FirstBaseline]

    // Height of the composable with padding - first baseline
    val placeableY = firstBaselineToTop.roundToPx() - firstBaseline
    val height = placeable.height + placeableY
    layout(placeable.width, height) {
        // Where the composable gets placed
        placeable.placeRelative(0, placeableY)
    }
}CustomLayoutSnippets.kt

Here's what's going on in that code:

In the measurable lambda parameter, you measure the Text represented by the measurable parameter by calling measurable.measure(constraints).

You specify the size of the composable by calling the layout(width, height) method, which also gives a lambda used for placing the wrapped elements. In this case, the height is the height of the Text plus placeableY, which is firstBaselineToTop minus the first baseline of the Text.

You position the wrapped elements on the screen by calling placeable.placeRelative(x, y). If the wrapped elements aren't placed, they won't be visible. In a

Sources: [live-compose-guide-layouts-custom-layout-modifier-source](https://developer.android.com/develop/ui/compose/layouts/custom#layout-modifier)

## Use the layout modifier

right-to-left layout, placeRelative mirrors the x position; see Layout direction. The y position is firstBaselineToTop minus the first baseline of the text, so that the first baseline is firstBaselineToTop from the top.

To verify this works as expected, use this modifier on a Text:

@Preview
@Composable
fun TextWithPaddingToBaselinePreview() {
    MyApplicationTheme {
        Text("Hi there!", Modifier.firstBaselineToTop(32.dp))
    }
}

@Preview
@Composable
fun TextWithNormalPaddingPreview() {
    MyApplicationTheme {
        Text("Hi there!", Modifier.padding(top = 32.dp))
    }
}CustomLayoutSnippets.kt

Figure 3.

Modifier applied to a

Text

composable and previewed.

Sources: [live-compose-guide-layouts-custom-layout-modifier-2-source](https://developer.android.com/develop/ui/compose/layouts/custom#layout-modifier)

## Custom layouts in action

Learn more about layouts and modifiers in the Basic layouts in Compose, and see custom layouts in action in the Compose samples that create custom layouts.

Sources: [live-compose-guide-layouts-custom-layouts-in-action-source](https://developer.android.com/develop/ui/compose/layouts/custom#layouts-in-action)

## Introduction

In Compose, UI elements are represented by the composable functions that emit a piece of UI when invoked, that is then added to a UI tree that gets rendered on the screen. Each UI element has one parent and potentially many children. Each element is also located within its parent, specified as an (x, y) position, and a size, specified as a width and a height.

Parents define the constraints for their child elements. An element is asked to define its size within those constraints. Constraints restrict the minimum and maximum width and height of an element. If an element has child elements, it may measure each child to help determine its size. Once an element determines and reports its own size, it has an opportunity to define how to place its child elements relative to itself, as described in detail in Creating custom layouts.

Laying out each node in the UI tree is a three step process. Each node must:

Measure any children

Decide its own size

Place its children

Figure 1.

The three steps of node layout are to measure children, decide size, and place children.

The use of scopes defines when you can measure and place your children. Measuring a layout can only be done during the measurement and layout passes, and a child can only be placed during the layout passes (and only after it has been measured). Due to Compose scopes such as MeasureScope, and PlacementScope, this is enforced at compile time.

Sources: [live-compose-guide-layouts-custom-main-content-source](https://developer.android.com/develop/ui/compose/layouts/custom#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Intrinsic measurements in Compose layouts

Graphics in Compose

Compose modifiers

Sources: [live-compose-guide-layouts-custom-recommended-for-you-source](https://developer.android.com/develop/ui/compose/layouts/custom#recommended_for_you)

## Videos

A deep dive into Jetpack Compose Layouts

Sources: [live-compose-guide-layouts-custom-videos-source](https://developer.android.com/develop/ui/compose/layouts/custom#videos)
