---
type: reference
title: Scroll modifiers
description: "Public source: https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-touch-input-scroll-scroll-modifiers-create-custom-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#create-custom
    revision: web:compose-guide-touch-input-scroll-scroll-modifiers:content@sha256:6024f84b6691d70ae2017263228c84bb29354204d1a8061f44587b2c52f1ab8f
    sha256: 41311581a9163bf58d38bb7151a8a0c0f3bf8c70c1595464e77f5835570767f6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following sample demonstrates using scrollableArea to build a custom vertical list where items scale down as they move away from the center, creating a "wheel-like" visual effect. This kind of scroll-dependent transformation is a perfect use case for scrollableArea.

      Figure 2.

      A customized vertical list using

      scrollableArea

      .

      @Composable
      private fun ScrollableAreaSample() {
          // ...
          Layout(
              modifier =
                  Modifier
                      .size(150.dp)
                      .scrollableArea(scrollState, Orientation.Vertical)
                      .background(Color.LightGray),
              // ...
          ) { measurables, constraints ->
              // ...
              // Update the maximum scroll value to not scroll beyond limits and stop when scroll
              // reaches the end.
              scrollState.maxValue = (totalHeight - viewportHeight).coerceAtLeast(0)

              // Position the children within the layout.
              layout(constraints.maxWidth, viewportHeight) {
                  // The current vertical scroll position, in pixels.
                  val scrollY = scrollState.value
                  val viewportCenterY = scrollY + viewportHeight / 2

                  var placeableLayoutPositionY = 0
                  placeables.forEach { placeable ->
                      // This sample applies a scaling effect to items based on their distance
                      // from the center, creating a wheel-like effect.
                      // ...
                      // Place the item horizontally centered with a layer transformation for
                      // scaling to achieve wheel-like effect.
                      placeable.placeRelativeWithLayer(
                          x = constraints.maxWidth / 2 - placeable.width / 2,
                          // Offset y by the scroll position to make placeable visible in the viewport.
                          y = placeableLayoutPositionY - scrollY,
                      ) {
                          scaleX = scaleFactor
                          scaleY = scaleFactor
                      }
                      // Move to the next item's vertical position.
                      placeableLayoutPositionY += placeable.height
                  }
              }
          }
      }
      // ...GesturesSnippets.kt
  - id: live-compose-guide-touch-input-scroll-scroll-modifiers-difference-scrollablearea-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#difference-scrollablearea
    revision: web:compose-guide-touch-input-scroll-scroll-modifiers:content@sha256:6024f84b6691d70ae2017263228c84bb29354204d1a8061f44587b2c52f1ab8f
    sha256: 0f3142527f08d3d3f64dc9c3e5eeefe8a13b399e041f651833e56935e7e07d96
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The main difference between scrollableArea and scrollable lies in how they interpret user scroll gestures:

      scrollable (raw delta): The delta directly reflects the physical movement of the user's input (e.g., pointer drag) on the screen.

      scrollableArea (content-oriented delta): The delta is semantically inverted to represent the selected change in the scroll position to make the content appear to move with the user's gesture, which is usually the opposite of the pointer movement.

      Think of it like this: scrollable tells you how the pointer moved, while scrollableArea translates that pointer movement into how the content should move within a typical scrollable view. This inversion is why scrollableArea feels more natural when implementing a standard scrollable container.

      The following table summarizes the delta signs for common scenarios:

      User gesture delta reported to dispatchRawDelta by scrollable delta reported to dispatchRawDelta by scrollableArea* Pointer moves UP Negative Positive Pointer moves DOWN Positive Negative Pointer moves LEFT Negative Positive (Negative for RTL) Pointer moves RIGHT Positive Negative (Positive for RTL)

      (*) Note on scrollableArea delta sign: The sign of the delta from scrollableArea is not just a simple inversion. It intelligently considers:

      Orientation: Vertical or horizontal.

      LayoutDirection: LTR or RTL (especially important for horizontal scrolling).

      reverseScrolling flag: Whether scroll direction is inverted.

      In addition to inverting the scroll delta, scrollableArea also clips the content to the bounds of the layout and handles the rendering of overscroll effects. By default, it uses the effect provided by LocalOverscrollFactory. You can customize or disable this by using the scrollableArea overload that accepts an OverscrollEffect parameter.
  - id: live-compose-guide-touch-input-scroll-scroll-modifiers-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#main-content
    revision: web:compose-guide-touch-input-scroll-scroll-modifiers:content@sha256:6024f84b6691d70ae2017263228c84bb29354204d1a8061f44587b2c52f1ab8f
    sha256: e2da66e5fc0e27baae596262920f9d623d81eaec7ce216a7cd8001e0945dd626
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The verticalScroll and horizontalScroll modifiers provide the simplest way to allow the user to scroll an element when the bounds of its contents are larger than its maximum size constraints. With the verticalScroll and horizontalScroll modifiers you don't need to translate or offset the contents.

      @Composable
      private fun ScrollBoxes() {
          Column(
              modifier = Modifier
                  .background(Color.LightGray)
                  .size(100.dp)
                  .verticalScroll(rememberScrollState())
          ) {
              repeat(10) {
                  Text("Item $it", modifier = Modifier.padding(2.dp))
              }
          }
      }GesturesSnippets.kt

      Figure 1.

      A simple vertical list responding to scroll gestures.

      The ScrollState lets you change the scroll position or get its current state. To create it with default parameters, use rememberScrollState().

      @Composable
      private fun ScrollBoxesSmooth() {
          // Smoothly scroll 100px on first composition
          val state = rememberScrollState()
          LaunchedEffect(Unit) { state.animateScrollTo(100) }

          Column(
              modifier = Modifier
                  .background(Color.LightGray)
                  .size(100.dp)
                  .padding(horizontal = 8.dp)
                  .verticalScroll(state)
          ) {
              repeat(10) {
                  Text("Item $it", modifier = Modifier.padding(2.dp))
              }
          }
      }GesturesSnippets.kt
  - id: live-compose-guide-touch-input-scroll-scroll-modifiers-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#recommended_for_you
    revision: web:compose-guide-touch-input-scroll-scroll-modifiers:content@sha256:6024f84b6691d70ae2017263228c84bb29354204d1a8061f44587b2c52f1ab8f
    sha256: 5b9683f9691c516a3eb74e08b3125f723d17402c422aae61a1717992f05826ce
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Understand gestures

      Migrate CoordinatorLayout to Compose

      Using Views in Compose
  - id: live-compose-guide-touch-input-scroll-scroll-modifiers-scrollable-area-modifier-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#scrollable-area-modifier
    revision: web:compose-guide-touch-input-scroll-scroll-modifiers:content@sha256:6024f84b6691d70ae2017263228c84bb29354204d1a8061f44587b2c52f1ab8f
    sha256: b7f667fd1f37d77e38d4598a854e888e03b8bc2fa443dd302a7fc66feafb7899
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The scrollableArea modifier is a fundamental building block for creating custom scrollable containers. It provides a higher-level abstraction over the scrollable modifier, handling common requirements like gesture delta interpretation, content clipping, and overscroll effects.

      While scrollableArea is used for custom implementations, you should generally prefer ready-made solutions like verticalScroll, horizontalScroll, or composables like LazyColumn for standard scrolling lists. These higher-level components are simpler for common use cases and are themselves built by using scrollableArea.
  - id: live-compose-guide-touch-input-scroll-scroll-modifiers-scrollable-modifier-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#scrollable-modifier
    revision: web:compose-guide-touch-input-scroll-scroll-modifiers:content@sha256:6024f84b6691d70ae2017263228c84bb29354204d1a8061f44587b2c52f1ab8f
    sha256: 92fb73a4fe84067b72d524173a6be4a310faccb34e39c25d450d81624b37531f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The scrollable modifier differs from the scroll modifiers in that scrollable detects the scroll gestures and captures the deltas, but does not offset its contents automatically. This is instead delegated to the user through ScrollableState , which is required for this modifier to work correctly.

      When constructing ScrollableState you must provide a consumeScrollDelta function which will be invoked on each scroll step (by gesture input, smooth scrolling or flinging) with the delta in pixels. This function must return the amount of scrolling distance consumed, to ensure the event is properly propagated in cases where there are nested elements that have the scrollable modifier.

      The following snippet detects the gestures and displays a numerical value for an offset, but does not offset any elements:

      @Composable
      private fun ScrollableSample() {
          // actual composable state
          var offset by remember { mutableFloatStateOf(0f) }
          Box(
              Modifier
                  .size(150.dp)
                  .scrollable(
                      orientation = Orientation.Vertical,
                      // Scrollable state: describes how to consume
                      // scrolling delta and update offset
                      state = rememberScrollableState { delta ->
                          offset += delta
                          delta
                      }
                  )
                  .background(Color.LightGray),
              contentAlignment = Alignment.Center
          ) {
              Text(offset.toString())
          }
      }GesturesSnippets.kt

      Figure 3.

      A UI element detecting the finger press and displaying the numeric value for the finger's location.
  - id: live-compose-guide-touch-input-scroll-scroll-modifiers-when-use-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#when-use
    revision: web:compose-guide-touch-input-scroll-scroll-modifiers:content@sha256:6024f84b6691d70ae2017263228c84bb29354204d1a8061f44587b2c52f1ab8f
    sha256: ffce0fead6a7c6b8c8bada03c659d5098b15c6a296f583a7df42166a4ec736cf
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You should use the scrollableArea modifier when you need to build a custom scrolling component that isn't adequately served by the horizontalScroll or verticalScroll modifiers or Lazy layouts. This often involves cases with:

      Custom layout logic: When the arrangement of items changes dynamically based on the scroll position.

      Unique visual effects: Applying transformations, scaling, or other effects to children as they scroll.

      Direct control: Needing fine-grained control over the scrolling mechanics beyond what verticalScroll or Lazy layouts expose.
compose:
  id: live-compose-guide-touch-input-scroll-scroll-modifiers
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation
  sections:
    - id: live-compose-guide-touch-input-scroll-scroll-modifiers-create-custom
      title: Create custom wheel-like lists using scrollableArea
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-scroll-scroll-modifiers-create-custom-source
      relatedIds: []
    - id: live-compose-guide-touch-input-scroll-scroll-modifiers-difference-scrollablearea
      title: Difference between scrollableArea and scrollable modifiers
      aliases:
        - androidx.compose.foundation.gestures.scrollable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-scroll-scroll-modifiers-difference-scrollablearea-source
      relatedIds: []
    - id: live-compose-guide-touch-input-scroll-scroll-modifiers-main-content
      title: Introduction
      aliases:
        - androidx.compose.foundation.ScrollState
        - androidx.compose.foundation.rememberScrollState
        - androidx.compose.foundation.verticalScroll
        - androidx.compose.foundation.horizontalScroll
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-scroll-scroll-modifiers-main-content-source
      relatedIds: []
    - id: live-compose-guide-touch-input-scroll-scroll-modifiers-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-scroll-scroll-modifiers-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-touch-input-scroll-scroll-modifiers-scrollable-area-modifier
      title: Scrollable area modifier
      aliases:
        - androidx.compose.foundation.verticalScroll
        - androidx.compose.foundation.horizontalScroll
        - androidx.compose.foundation.gestures.scrollable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-scroll-scroll-modifiers-scrollable-area-modifier-source
      relatedIds: []
    - id: live-compose-guide-touch-input-scroll-scroll-modifiers-scrollable-modifier
      title: Scrollable modifier
      aliases:
        - androidx.compose.foundation.gestures.scrollable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-scroll-scroll-modifiers-scrollable-modifier-source
      relatedIds: []
    - id: live-compose-guide-touch-input-scroll-scroll-modifiers-when-use
      title: When to use scrollableArea modifier
      aliases:
        - androidx.compose.foundation.verticalScroll
        - androidx.compose.foundation.horizontalScroll
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-scroll-scroll-modifiers-when-use-source
      relatedIds: []
---

# Scroll modifiers

Public source: https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers

## Create custom wheel-like lists using scrollableArea

The following sample demonstrates using scrollableArea to build a custom vertical list where items scale down as they move away from the center, creating a "wheel-like" visual effect. This kind of scroll-dependent transformation is a perfect use case for scrollableArea.

Figure 2.

A customized vertical list using

scrollableArea

.

@Composable
private fun ScrollableAreaSample() {
    // ...
    Layout(
        modifier =
            Modifier
                .size(150.dp)
                .scrollableArea(scrollState, Orientation.Vertical)
                .background(Color.LightGray),
        // ...
    ) { measurables, constraints ->
        // ...
        // Update the maximum scroll value to not scroll beyond limits and stop when scroll
        // reaches the end.
        scrollState.maxValue = (totalHeight - viewportHeight).coerceAtLeast(0)

        // Position the children within the layout.
        layout(constraints.maxWidth, viewportHeight) {
            // The current vertical scroll position, in pixels.
            val scrollY = scrollState.value
            val viewportCenterY = scrollY + viewportHeight / 2

            var placeableLayoutPositionY = 0
            placeables.forEach { placeable ->
                // This sample applies a scaling effect to items based on their distance
                // from the center, creating a wheel-like effect.
                // ...
                // Place the item horizontally centered with a layer transformation for
                // scaling to achieve wheel-like effect.
                placeable.placeRelativeWithLayer(
                    x = constraints.maxWidth / 2 - placeable.width / 2,
                    // Offset y by the scroll position to make placeable visible in the viewport.
                    y = placeableLayoutPositionY - scrollY,
                ) {
                    scaleX = scaleFactor
                    scaleY = scaleFactor
                }
                // Move to the next item's vertical position.
                placeableLayoutPositionY += placeable.height
            }
        }
    }
}
// ...GesturesSnippets.kt

Sources: [live-compose-guide-touch-input-scroll-scroll-modifiers-create-custom-source](https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#create-custom)

## Difference between scrollableArea and scrollable modifiers

The main difference between scrollableArea and scrollable lies in how they interpret user scroll gestures:

scrollable (raw delta): The delta directly reflects the physical movement of the user's input (e.g., pointer drag) on the screen.

scrollableArea (content-oriented delta): The delta is semantically inverted to represent the selected change in the scroll position to make the content appear to move with the user's gesture, which is usually the opposite of the pointer movement.

Think of it like this: scrollable tells you how the pointer moved, while scrollableArea translates that pointer movement into how the content should move within a typical scrollable view. This inversion is why scrollableArea feels more natural when implementing a standard scrollable container.

The following table summarizes the delta signs for common scenarios:

User gesture delta reported to dispatchRawDelta by scrollable delta reported to dispatchRawDelta by scrollableArea* Pointer moves UP Negative Positive Pointer moves DOWN Positive Negative Pointer moves LEFT Negative Positive (Negative for RTL) Pointer moves RIGHT Positive Negative (Positive for RTL)

(*) Note on scrollableArea delta sign: The sign of the delta from scrollableArea is not just a simple inversion. It intelligently considers:

Orientation: Vertical or horizontal.

LayoutDirection: LTR or RTL (especially important for horizontal scrolling).

reverseScrolling flag: Whether scroll direction is inverted.

In addition to inverting the scroll delta, scrollableArea also clips the content to the bounds of the layout and handles the rendering of overscroll effects. By default, it uses the effect provided by LocalOverscrollFactory. You can customize or disable this by using the scrollableArea overload that accepts an OverscrollEffect parameter.

Sources: [live-compose-guide-touch-input-scroll-scroll-modifiers-difference-scrollablearea-source](https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#difference-scrollablearea)

## Introduction

The verticalScroll and horizontalScroll modifiers provide the simplest way to allow the user to scroll an element when the bounds of its contents are larger than its maximum size constraints. With the verticalScroll and horizontalScroll modifiers you don't need to translate or offset the contents.

@Composable
private fun ScrollBoxes() {
    Column(
        modifier = Modifier
            .background(Color.LightGray)
            .size(100.dp)
            .verticalScroll(rememberScrollState())
    ) {
        repeat(10) {
            Text("Item $it", modifier = Modifier.padding(2.dp))
        }
    }
}GesturesSnippets.kt

Figure 1.

A simple vertical list responding to scroll gestures.

The ScrollState lets you change the scroll position or get its current state. To create it with default parameters, use rememberScrollState().

@Composable
private fun ScrollBoxesSmooth() {
    // Smoothly scroll 100px on first composition
    val state = rememberScrollState()
    LaunchedEffect(Unit) { state.animateScrollTo(100) }

    Column(
        modifier = Modifier
            .background(Color.LightGray)
            .size(100.dp)
            .padding(horizontal = 8.dp)
            .verticalScroll(state)
    ) {
        repeat(10) {
            Text("Item $it", modifier = Modifier.padding(2.dp))
        }
    }
}GesturesSnippets.kt

Sources: [live-compose-guide-touch-input-scroll-scroll-modifiers-main-content-source](https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Understand gestures

Migrate CoordinatorLayout to Compose

Using Views in Compose

Sources: [live-compose-guide-touch-input-scroll-scroll-modifiers-recommended-for-you-source](https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#recommended_for_you)

## Scrollable area modifier

The scrollableArea modifier is a fundamental building block for creating custom scrollable containers. It provides a higher-level abstraction over the scrollable modifier, handling common requirements like gesture delta interpretation, content clipping, and overscroll effects.

While scrollableArea is used for custom implementations, you should generally prefer ready-made solutions like verticalScroll, horizontalScroll, or composables like LazyColumn for standard scrolling lists. These higher-level components are simpler for common use cases and are themselves built by using scrollableArea.

Sources: [live-compose-guide-touch-input-scroll-scroll-modifiers-scrollable-area-modifier-source](https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#scrollable-area-modifier)

## Scrollable modifier

The scrollable modifier differs from the scroll modifiers in that scrollable detects the scroll gestures and captures the deltas, but does not offset its contents automatically. This is instead delegated to the user through ScrollableState , which is required for this modifier to work correctly.

When constructing ScrollableState you must provide a consumeScrollDelta function which will be invoked on each scroll step (by gesture input, smooth scrolling or flinging) with the delta in pixels. This function must return the amount of scrolling distance consumed, to ensure the event is properly propagated in cases where there are nested elements that have the scrollable modifier.

The following snippet detects the gestures and displays a numerical value for an offset, but does not offset any elements:

@Composable
private fun ScrollableSample() {
    // actual composable state
    var offset by remember { mutableFloatStateOf(0f) }
    Box(
        Modifier
            .size(150.dp)
            .scrollable(
                orientation = Orientation.Vertical,
                // Scrollable state: describes how to consume
                // scrolling delta and update offset
                state = rememberScrollableState { delta ->
                    offset += delta
                    delta
                }
            )
            .background(Color.LightGray),
        contentAlignment = Alignment.Center
    ) {
        Text(offset.toString())
    }
}GesturesSnippets.kt

Figure 3.

A UI element detecting the finger press and displaying the numeric value for the finger's location.

Sources: [live-compose-guide-touch-input-scroll-scroll-modifiers-scrollable-modifier-source](https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#scrollable-modifier)

## When to use scrollableArea modifier

You should use the scrollableArea modifier when you need to build a custom scrolling component that isn't adequately served by the horizontalScroll or verticalScroll modifiers or Lazy layouts. This often involves cases with:

Custom layout logic: When the arrangement of items changes dynamically based on the scroll position.

Unique visual effects: Applying transformations, scaling, or other effects to children as they scroll.

Direct control: Needing fine-grained control over the scrolling mechanics beyond what verticalScroll or Lazy layouts expose.

Sources: [live-compose-guide-touch-input-scroll-scroll-modifiers-when-use-source](https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers#when-use)
