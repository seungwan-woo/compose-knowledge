---
type: reference
title: Drag composables
description: "Public source: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-anchoreddraggable-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#anchoredDraggable
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: 91e4b48d9bbb9f2d61ffc0cf1269831f5b691fc495b41e360791a9567d88ce36
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: The anchoredDraggable modifier lets you drag a component between a set of predefined positions called anchor points. When the user releases the drag gesture, the component settles at the closest anchor. anchoredDraggable is useful for creating components like custom bottom sheets, complex sliders, or drawer panels.
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-api-surface-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#api-surface
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: b0154a57a37a70b03d42d571b917d24a2efb38a8cfb9ff8013b1d11db300f9d7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The AnchoredDraggable API consists of the following main parts:

      Anchors (DraggableAnchors): A builder that defines the mapping between your custom states (e.g., an enum class for Start, Center, End) and their corresponding pixel offset values.

      State (AnchoredDraggableState<T>): A state holder that manages the component's current position (offset), the anchor it's settled at, and its drag progress. It should be created using rememberSaveable and AnchoredDraggableState.Saver<T> to preserve its state across configuration changes.

      Gesture modifier (Modifier.anchoredDraggable): A modifier that detects drag gestures along an Orientation, updates the state with the drag delta, and handles the fling gesture to animate the component to the nearest anchor upon release.
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-choose-correct-api-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#choose-correct-api
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: ebb4c6ea9d20b7b6b4b0985a8831f2970865a3cc70421038eb8bc14ca26e9933
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are several APIs you can use for implementing draggable content.

      Choose standard Material components (like SwipeToDismissBox or navigation drawers) when: You need default Material 3 swipe or drag behavior (for example, deleting an email, archiving a task, or opening a side menu / bottom sheets). They provide built-in behaviors without requiring custom state or layout management.

      Choose Modifier.draggable when: You only need raw drag deltas (for example, dragging a custom slider). For more information, see Drag along a single axis with draggable. Choose Modifier.draggable2D when: You need a component to move continuously across both the X and Y axes simultaneously (for example, panning across a map or creating a floating action button that the user can drag anywhere on the screen). For more information, see Drag in two dimensions with Modifier.draggable2D.

      Choose Modifier.anchoredDraggable when: You're building custom interactive components that need to snap between two or more discrete positions (for example, a bottom sheet, a navigation drawer, or a swipe-to-reveal action). For more information, see Drag components between anchor points with anchoredDraggable.
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-drag-a-child-composable-based-on-parents-drag-area-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#drag-a-child-composable-based-on-parents-drag-area
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: da7d589adc0aeade5fc21073b31fed09f27c22bbd2332d5acf821b0298abc0e6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      }
      }TwoDimensionalScrollSnippets.kt

      Video 5.

      A color gradient with a white circular selector knob that can be dragged in any direction, demonstrating how 2D deltas are clamped to the container's boundaries to update selected color values.

      The preceding snippet includes the following:

      It uses the onSizeChanged modifier to capture the actual dimensions of the gradient container. The selector knows exactly where the edges are.

      Inside the graphicsLayer, it adjusts the translationX and translationY to make sure the selector stays centered while dragging.
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-drag-a-child-composable-based-on-parents-drag-area-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#drag-a-child-composable-based-on-parents-drag-area
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: 8f91876865f7715717fc9363ee7ea4a9386b0ee9123e2436fbf5eed17da27d05
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This example demonstrates how to use draggable2D to create a 2D input area where a selector knob is constrained within a specific surface. Unlike the draggable element example, which moves the component itself, this implementation uses the 2D deltas to move a child composable "selector" across a color picker:

      @Composable
      private fun ExampleColorSelector(
          // ...
      )  {
          // 1. Maintain the 2D position of the selector in state.
          var selectorOffset by remember { mutableStateOf(Offset.Zero) }

          // 2. Track the size of the background container.
          var containerSize by remember { mutableStateOf(IntSize.Zero) }

          Box(
              modifier = Modifier
                  .size(300.dp, 200.dp)
                  // Capture the actual pixel dimensions of the container when it's laid out.
                  .onSizeChanged { containerSize = it }
                  .clip(RoundedCornerShape(12.dp))
                  .background(
                      brush = remember(hue) {
                          // Create a simple gradient representing Saturation and Value for the given Hue.
                          Brush.linearGradient(listOf(Color.White, Color.hsv(hue, 1f, 1f)))
                      }
                  )
          ) {
              Box(
                  modifier = Modifier
                      .size(24.dp)
                      .graphicsLayer {
                          // Center the selector on the finger by subtracting half its size.
                          translationX = selectorOffset.x - (24.dp.toPx() / 2)
                          translationY = selectorOffset.y - (24.dp.toPx() / 2)
                      }
                      // ...
                      // 3. Configure 2D touch dragging.
                      .draggable2D(
                          state = rememberDraggable2DState { delta ->
                              // 4. Calculate the new position and clamp it to the container bounds
                              val newX = (selectorOffset.x + delta.x)
                                  .coerceIn(0f, containerSize.width.toFloat())
                              val newY = (selectorOffset.y + delta.y)
                                  .coerceIn(0f, containerSize.height.toFloat())

                              selectorOffset = Offset(newX, newY)
                          }
                      )
              )
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-drag-a-composable-element-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#drag-a-composable-element
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: 4ac0fb76d20b0a70c0c8561dc9641696925f277f16ea5bda04fe9aa3901b0d1c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This example shows the most common use case for draggable2D — allowing a user to pick up a UI element and reposition it anywhere within a parent container.

      @Composable
      private fun DraggableComposableElement() {
          // 1. Track the position of the floating window
          var offset by remember { mutableStateOf(Offset.Zero) }

          Box(modifier = Modifier.fillMaxSize().background(Color(0xFFF5F5F5))) {
              Box(
                  modifier = Modifier
                      // 2. Apply the offset to the box's position
                      .offset { IntOffset(offset.x.roundToInt(), offset.y.roundToInt()) }
                      // ...
                      // 3. Attach the 2D drag logic
                      .draggable2D(
                          state = rememberDraggable2DState { delta ->
                              // 4. Update the position based on the movement delta
                              offset += delta
                          }
                      ),
                  contentAlignment = Alignment.Center
              ) {
                  Text("Video Preview", color = Color.White, fontSize = 12.sp)
              }
          }
      }TwoDimensionalScrollSnippets.kt

      Video 4.

      A small purple box being repositioned on a gray background, demonstrating direct 2D dragging where the element stops moving the instant the user's finger is lifted.

      The preceding code snippet includes the following:

      Tracks the box's position using an offset state.

      Uses offset modifier to shift the component's position based on the drag deltas.

      Since there is no fling support, the box stops moving the instant the user lifts their finger.
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-draggable-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#draggable
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: 60ad13f4691b78265325f59fdd983f2c0dfac19786d01e290360b975c60949f0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The draggable modifier is the high-level entry point to drag gestures in a single orientation, and reports the drag distance in pixels.

      It's important to note that this modifier is similar to scrollable, in that it only detects the gesture. You need to hold the state and represent it on screen by, for example, moving the element via the offset modifier:

      @Composable
      private fun DraggableText() {
          var offsetX by remember { mutableFloatStateOf(0f) }
          Text(
              modifier = Modifier
                  .offset { IntOffset(offsetX.roundToInt(), 0) }
                  .draggable(
                      orientation = Orientation.Horizontal,
                      state = rememberDraggableState { delta ->
                          offsetX += delta
                      }
                  ),
              text = "Drag me!"
          )
      }GesturesSnippets.kt

      If you need to control the whole dragging gesture, consider using the drag gesture detector instead, via the pointerInput modifier.

      @Composable
      private fun DraggableTextLowLevel() {
          Box(modifier = Modifier.fillMaxSize()) {
              var offsetX by remember { mutableFloatStateOf(0f) }
              var offsetY by remember { mutableFloatStateOf(0f) }

              Box(
                  Modifier
                      .offset { IntOffset(offsetX.roundToInt(), offsetY.roundToInt()) }
                      .background(Color.Blue)
                      .size(50.dp)
                      .pointerInput(Unit) {
                          detectDragGestures { change, dragAmount ->
                              change.consume()
                              offsetX += dragAmount.x
                              offsetY += dragAmount.y
                          }
                      }
              )
          }
      }GesturesSnippets.kt

      Figure 1.

      A UI element being dragged by a finger
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-example-build-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#example%3A-build
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: e5427288e9d5955045d8cde568f99cccb2fe7bdb81c6bc643c7e436586e0c00a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      = measurable.measure(constraints) val anchors = DraggableAnchors { AnchoredDraggableSwipeDismissValue.DismissedStart at -placeable.width.toFloat() AnchoredDraggableSwipeDismissValue.Resting at 0f } state.updateAnchors(anchors) layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) } } // Pass overscrollEffect to anchoredDraggable so deltas beyond the bounds (min and max anchor) are dispatched to overscrollEffect, and render the visual effect with Modifier.overscroll. .overscroll(overscrollEffect) .anchoredDraggable( state, Orientation.Horizontal, overscrollEffect = overscrollEffect ) ) { dismissContent() }GesturesSnippets.kt

      [Optional] Integrate overscroll. The overscrollEffect API implements a visual effect that displays when the edges of a scrolling container have been reached with a scroll or fling. You can provide visual feedback when a user drags past the defined anchor bounds with an overscroll effect (typically a stretch or glow). Dispatch: Pass an overscrollEffect instance to the anchoredDraggable modifier. This dispatches drag deltas to either the AnchoredDraggable state or the overscroll effect, depending on whether the gesture is inside or outside the anchor bounds. Render: Apply the Modifier.overscroll with the same OverscrollEffect instance to the component that should visually render the effect.

      The following snippet shows how to add a standard stretch effect:

      val overscrollEffect = rememberOverscrollEffect()
      Box(
          modifier.fillMaxWidth()
      ) {
          Box(Modifier.fillMaxWidth()) {
              background()
          }
          Box(
              modifier = Modifier
                  .fillMaxWidth()
                  // Read state.requireOffset() inside the offset lambda to defer reading to the placement phase
                  .offset { IntOffset(state.requireOffset().roundToInt(), 0) }
                  .layout { measurable, constraints ->
                      val placeable = measurable.measure(constraints)
                      val anchors = DraggableAnchors {
                          AnchoredDraggableSwipeDismissValue.DismissedStart at -placeable.width.toFloat()
                          AnchoredDraggableSwipeDismissValue.Resting at 0f
                      }
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-example-build-3-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#example%3A-build
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: 0fd65557d1a329a43a505e9f7ac163e3acada6aa718ee5f041b3bf7ad07781ba
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      state.updateAnchors(anchors)
                      layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) }
                  }
                  // Pass overscrollEffect to anchoredDraggable so deltas beyond the bounds (min and max anchor) are dispatched to overscrollEffect, and render the visual effect with Modifier.overscroll.
                  .overscroll(overscrollEffect)
                  .anchoredDraggable(
                      state,
                      Orientation.Horizontal,
                      overscrollEffect = overscrollEffect
                  )
          ) {
              dismissContent()
          }
      }GesturesSnippets.kt
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-example-build-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#example%3A-build
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: 16b58c2ccf88763a598ce8b4e9835d17827dcd5d0f106e6f93785232355222e0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This example demonstrates how to build a custom SwipeToDismiss component (a white banner) that the user can swipe left to dismiss, or drag to the right to see an overscroll stretch effect.

      Define anchor values. Define an enum representing the discrete positions the draggable content can settle into: private enum class AnchoredDraggableSwipeDismissValue { DismissedStart, Resting }GesturesSnippets.kt

      Instantiate and save AnchoredDraggableState. Use rememberSaveable with AnchoredDraggableState.Saver() to persist the component's current position across activity recreation and configuration changes (e.g., screen rotation or theme changes): val state = rememberSaveable(saver = AnchoredDraggableState.Saver()) { AnchoredDraggableState(initialValue = AnchoredDraggableSwipeDismissValue.Resting) }GesturesSnippets.kt

      Apply the layout, offset, and draggable modifiers. To make the component draggable and ensure its anchor points adapt to its size, apply the following modifiers to the content that should visually move: Modifier.layout: Anchor positions often depend on a component's size, which isn't known during initial composition. Use the layout modifier to measure the component, calculate the DraggableAnchors map dynamically based on its width, and update the state using state.updateAnchors(). Modifier.anchoredDraggable: Connects to the state, dispatches drag deltas in the specified orientation, and handles the fling gesture to animate the component to the nearest anchor when released. Add this modifier to the component that should respond to drag gestures and pass it the state and drag orientation (and, optionally, overscrollEffect). Modifier.offset: Reads the offset from state.requireOffset() inside the offset lambda. Reading the offset within this lambda ensures the value is only read during the placement phase, avoiding unnecessary recompositions during the drag. Apply this modifier to the content that should visually move. Box( modifier = Modifier .fillMaxWidth() // Read state.requireOffset() inside the offset lambda to defer reading to the placement phase .offset { IntOffset(state.requireOffset().roundToInt(), 0) } .layout { measurable, constraints -> val placeable
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-example-nav-drawer-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#example-nav-drawer
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: 4a6ade6cc18dd632a287effdfacc3a9c83acedab1c5a75dab42963ef11487a0b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      animations without triggering recompositions during the drag. @Composable private fun AnchoredDraggableDrawerGraphicsLayerSample( state: AnchoredDraggableState<DrawerState>, drawerWidth: Float, selectedScreen: ScreenState, onDrawerClicked: () -> Unit ) { ScreenContents( selectedScreen = selectedScreen, onDrawerClicked = onDrawerClicked, modifier = Modifier .graphicsLayer { this.translationX = state.requireOffset() val scale = lerp(1f, 0.8f, state.requireOffset() / drawerWidth) this.scaleX = scale this.scaleY = scale val cornerRadius = lerp(0f, 32f, state.requireOffset() / drawerWidth) this.shape = RoundedCornerShape(cornerRadius.dp) this.clip = true } .anchoredDraggable(state, Orientation.Horizontal) ) }GesturesSnippets.kt

      Trigger programmatic animations with animateTo. Control the drawer programmatically (such as when tapping the menu icon or selecting a drawer item) by launching state.animateTo() within a coroutine scope: fun toggleDrawerState( state: AnchoredDraggableState<DrawerState>, coroutineScope: CoroutineScope ) { coroutineScope.launch { if (state.currentValue == DrawerState.Open) { state.animateTo(DrawerState.Closed) } else { state.animateTo(DrawerState.Open) } } }GesturesSnippets.kt
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-example-nav-drawer-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#example-nav-drawer
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: 8601efd80deeaa2446af2a0a73dc211bcc63cc4723dfc7f9ed86707ba8570e14
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This example demonstrates how to build a custom, gesture-driven navigation drawer. As the user drags horizontally, the foreground screen (ScreenContents) slides to the right, scales down from 1.0f to 0.8f, and rounds its corners to reveal the underlying navigation drawer.

      Define anchor states and positions. In this example, the anchors are the opened and closed states of the drawer. Define an enum for the Open and Closed states, and map them to pixel offsets using DraggableAnchors: enum class DrawerState { Open, Closed } val anchors = DraggableAnchors { DrawerState.Open at drawerWidth DrawerState.Closed at 0f } val state = remember { AnchoredDraggableState( initialValue = DrawerState.Closed, anchors = anchors, ) }GesturesSnippets.kt

      Animate anchoredDraggableState on the click of an item. Place HomeScreenDrawer at the bottom of the Box and ScreenContents on top. The drawer remains stationary, while the top layer translates and scales over it. When a user selects a drawer item, update the active screen state and automatically dismiss the drawer using state.animateTo(DrawerState.Closed): @Composable private fun AnchoredDraggableDrawerOnClickSample( modifier: Modifier = Modifier, state: AnchoredDraggableState<DrawerState>, coroutineScope: CoroutineScope ) { var screenState by remember { mutableStateOf(ScreenState.Home) } Box(modifier = modifier.fillMaxSize()) { HomeScreenDrawer( selectedScreen = screenState, onScreenSelected = { screen -> screenState = screen // Dismiss drawer when a destination is selected coroutineScope.launch { state.animateTo(DrawerState.Closed) } } ) // ScreenContents(...) } }GesturesSnippets.kt

      Use state.requireOffset() to change multiple visual properties. Instead of only offsetting the content, you can change multiple properties with Modifier.graphicsLayer to simultaneously animate translation, scale, and corner radius based on the drag progress: Use state.requireOffset() to get the current drag offset. Use lerp() (linear interpolation) to calculate proportional scale (1f to 0.8f) and corner radius (0.dp to 32.dp) relative to the offset and drawer width. Modifier.graphicsLayer executes changes in the draw phase, ensuring high-performance
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#main-content
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: 3100a747e8bf3a3fd1fd8e0caae6b089a128d3b7a61137c4a9cdfede3b28bf61
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Enabling users to physically drag components across a screen is fundamental to modern Android apps. Whether you're building a custom slider, a swipe-to-dismiss component, or an interactive canvas, Jetpack Compose provides a comprehensive set of APIs to easily handle drag events.

      The Compose dragging APIs abstract away the complexity of raw touch events. Instead of manually calculating touch coordinates and managing gesture lifecycles with pointerInput, you can use built-in modifiers that tie directly into Compose's state management and animation systems.

      This page describes how and when to use each dragging API.
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-modifier-draggable2d-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#modifier-draggable2d
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: 29b84ae4fdce5211ea2bad771b3f669aba3b637f098ef362c8695cc44d37eb08
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Use the draggable2D modifier for moving individual UI elements across both the X and Y axes simultaneously.
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#recommended_for_you
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: 56b375e56a9058ce87e79e0f9f97f98bb9a42d5788dd2818084914ae77b1bdf6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Understand gestures

      Advanced animation example: Gestures {:#gesture-and-animation}

      Value-based animations
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-result-nav-drawer-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#result-nav-drawer
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: 88eb2958bc17da4e0abd1cb50720b349a399eb7d0c6791433e361dfec2bf5ff9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Video 3.

      The foreground screen (Sleep) is dragged to the right, showing the underlying navigation drawer.
  - id: live-compose-guide-touch-input-pointer-input-drag-composables-result-swipe-dismiss-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#result-swipe-dismiss
    revision: web:compose-guide-touch-input-pointer-input-drag-composables:content@sha256:c775a21762b42f181bbe0f0e889016b5056db04dd2b5da981a39d7b4fcd7e44a
    sha256: 90292f72a7ac6730db8f290394176fd795afd167aa808541184a2927b68684fa
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The preceding code snippet results in a white banner, with the text "Drag me to dismiss!", that the user can swipe left to dismiss (or drag right to see the overscroll stretch effect):

      Video 2.

      A custom swipe-to-dismiss component implementation.
compose:
  id: live-compose-guide-touch-input-pointer-input-drag-composables
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation
  sections:
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-anchoreddraggable
      title: Drag components between anchor points with anchoredDraggable
      aliases:
        - androidx.compose.foundation.gestures.anchoredDraggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-anchoreddraggable-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-api-surface
      title: API surface
      aliases:
        - androidx.compose.foundation.gestures.anchoredDraggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-api-surface-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-choose-correct-api
      title: Choose the correct dragging API
      aliases:
        - androidx.compose.foundation.gestures.draggable
        - androidx.compose.foundation.gestures.anchoredDraggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-choose-correct-api-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-drag-a-child-composable-based-on-parents-drag-area
      title: Drag a child composable based on parent's drag area
      aliases:
        - androidx.compose.foundation.gestures.draggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-drag-a-child-composable-based-on-parents-drag-area-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-drag-a-child-composable-based-on-parents-drag-area-2
      title: Drag a child composable based on parent's drag area
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-drag-a-child-composable-based-on-parents-drag-area-2-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-drag-a-composable-element
      title: Drag a composable element
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-drag-a-composable-element-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-draggable
      title: Drag along a single axis with draggable
      aliases:
        - androidx.compose.foundation.gestures.draggable
        - androidx.compose.foundation.gestures.detectDragGestures
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-draggable-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-example-build
      title: "Example: Build a custom SwipeToDismiss component"
      aliases:
        - androidx.compose.foundation.gestures.draggable
        - androidx.compose.foundation.gestures.anchoredDraggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-example-build-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-example-build-2
      title: "Example: Build a custom SwipeToDismiss component"
      aliases:
        - androidx.compose.foundation.gestures.anchoredDraggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-example-build-2-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-example-build-3
      title: "Example: Build a custom SwipeToDismiss component"
      aliases:
        - androidx.compose.foundation.gestures.anchoredDraggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-example-build-3-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-example-nav-drawer
      title: "Example: Create custom, gesture-driven navigation drawer"
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-example-nav-drawer-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-example-nav-drawer-2
      title: "Example: Create custom, gesture-driven navigation drawer"
      aliases:
        - androidx.compose.foundation.gestures.anchoredDraggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-example-nav-drawer-2-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-main-content-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-modifier-draggable2d
      title: Drag in two dimensions with Modifier.draggable2D
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-modifier-draggable2d-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-result-nav-drawer
      title: Result
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-result-nav-drawer-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-drag-composables-result-swipe-dismiss
      title: Result
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-drag-composables-result-swipe-dismiss-source
      relatedIds: []
---

# Drag composables

Public source: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables

## Drag components between anchor points with anchoredDraggable

The anchoredDraggable modifier lets you drag a component between a set of predefined positions called anchor points. When the user releases the drag gesture, the component settles at the closest anchor. anchoredDraggable is useful for creating components like custom bottom sheets, complex sliders, or drawer panels.

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-anchoreddraggable-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#anchoredDraggable)

## API surface

The AnchoredDraggable API consists of the following main parts:

Anchors (DraggableAnchors): A builder that defines the mapping between your custom states (e.g., an enum class for Start, Center, End) and their corresponding pixel offset values.

State (AnchoredDraggableState<T>): A state holder that manages the component's current position (offset), the anchor it's settled at, and its drag progress. It should be created using rememberSaveable and AnchoredDraggableState.Saver<T> to preserve its state across configuration changes.

Gesture modifier (Modifier.anchoredDraggable): A modifier that detects drag gestures along an Orientation, updates the state with the drag delta, and handles the fling gesture to animate the component to the nearest anchor upon release.

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-api-surface-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#api-surface)

## Choose the correct dragging API

There are several APIs you can use for implementing draggable content.

Choose standard Material components (like SwipeToDismissBox or navigation drawers) when: You need default Material 3 swipe or drag behavior (for example, deleting an email, archiving a task, or opening a side menu / bottom sheets). They provide built-in behaviors without requiring custom state or layout management.

Choose Modifier.draggable when: You only need raw drag deltas (for example, dragging a custom slider). For more information, see Drag along a single axis with draggable. Choose Modifier.draggable2D when: You need a component to move continuously across both the X and Y axes simultaneously (for example, panning across a map or creating a floating action button that the user can drag anywhere on the screen). For more information, see Drag in two dimensions with Modifier.draggable2D.

Choose Modifier.anchoredDraggable when: You're building custom interactive components that need to snap between two or more discrete positions (for example, a bottom sheet, a navigation drawer, or a swipe-to-reveal action). For more information, see Drag components between anchor points with anchoredDraggable.

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-choose-correct-api-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#choose-correct-api)

## Drag a child composable based on parent's drag area

This example demonstrates how to use draggable2D to create a 2D input area where a selector knob is constrained within a specific surface. Unlike the draggable element example, which moves the component itself, this implementation uses the 2D deltas to move a child composable "selector" across a color picker:

@Composable
private fun ExampleColorSelector(
    // ...
)  {
    // 1. Maintain the 2D position of the selector in state.
    var selectorOffset by remember { mutableStateOf(Offset.Zero) }

    // 2. Track the size of the background container.
    var containerSize by remember { mutableStateOf(IntSize.Zero) }

    Box(
        modifier = Modifier
            .size(300.dp, 200.dp)
            // Capture the actual pixel dimensions of the container when it's laid out.
            .onSizeChanged { containerSize = it }
            .clip(RoundedCornerShape(12.dp))
            .background(
                brush = remember(hue) {
                    // Create a simple gradient representing Saturation and Value for the given Hue.
                    Brush.linearGradient(listOf(Color.White, Color.hsv(hue, 1f, 1f)))
                }
            )
    ) {
        Box(
            modifier = Modifier
                .size(24.dp)
                .graphicsLayer {
                    // Center the selector on the finger by subtracting half its size.
                    translationX = selectorOffset.x - (24.dp.toPx() / 2)
                    translationY = selectorOffset.y - (24.dp.toPx() / 2)
                }
                // ...
                // 3. Configure 2D touch dragging.
                .draggable2D(
                    state = rememberDraggable2DState { delta ->
                        // 4. Calculate the new position and clamp it to the container bounds
                        val newX = (selectorOffset.x + delta.x)
                            .coerceIn(0f, containerSize.width.toFloat())
                        val newY = (selectorOffset.y + delta.y)
                            .coerceIn(0f, containerSize.height.toFloat())

                        selectorOffset = Offset(newX, newY)
                    }
                )
        )

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-drag-a-child-composable-based-on-parents-drag-area-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#drag-a-child-composable-based-on-parents-drag-area)

## Drag a child composable based on parent's drag area

}
}TwoDimensionalScrollSnippets.kt

Video 5.

A color gradient with a white circular selector knob that can be dragged in any direction, demonstrating how 2D deltas are clamped to the container's boundaries to update selected color values.

The preceding snippet includes the following:

It uses the onSizeChanged modifier to capture the actual dimensions of the gradient container. The selector knows exactly where the edges are.

Inside the graphicsLayer, it adjusts the translationX and translationY to make sure the selector stays centered while dragging.

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-drag-a-child-composable-based-on-parents-drag-area-2-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#drag-a-child-composable-based-on-parents-drag-area)

## Drag a composable element

This example shows the most common use case for draggable2D — allowing a user to pick up a UI element and reposition it anywhere within a parent container.

@Composable
private fun DraggableComposableElement() {
    // 1. Track the position of the floating window
    var offset by remember { mutableStateOf(Offset.Zero) }

    Box(modifier = Modifier.fillMaxSize().background(Color(0xFFF5F5F5))) {
        Box(
            modifier = Modifier
                // 2. Apply the offset to the box's position
                .offset { IntOffset(offset.x.roundToInt(), offset.y.roundToInt()) }
                // ...
                // 3. Attach the 2D drag logic
                .draggable2D(
                    state = rememberDraggable2DState { delta ->
                        // 4. Update the position based on the movement delta
                        offset += delta
                    }
                ),
            contentAlignment = Alignment.Center
        ) {
            Text("Video Preview", color = Color.White, fontSize = 12.sp)
        }
    }
}TwoDimensionalScrollSnippets.kt

Video 4.

A small purple box being repositioned on a gray background, demonstrating direct 2D dragging where the element stops moving the instant the user's finger is lifted.

The preceding code snippet includes the following:

Tracks the box's position using an offset state.

Uses offset modifier to shift the component's position based on the drag deltas.

Since there is no fling support, the box stops moving the instant the user lifts their finger.

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-drag-a-composable-element-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#drag-a-composable-element)

## Drag along a single axis with draggable

The draggable modifier is the high-level entry point to drag gestures in a single orientation, and reports the drag distance in pixels.

It's important to note that this modifier is similar to scrollable, in that it only detects the gesture. You need to hold the state and represent it on screen by, for example, moving the element via the offset modifier:

@Composable
private fun DraggableText() {
    var offsetX by remember { mutableFloatStateOf(0f) }
    Text(
        modifier = Modifier
            .offset { IntOffset(offsetX.roundToInt(), 0) }
            .draggable(
                orientation = Orientation.Horizontal,
                state = rememberDraggableState { delta ->
                    offsetX += delta
                }
            ),
        text = "Drag me!"
    )
}GesturesSnippets.kt

If you need to control the whole dragging gesture, consider using the drag gesture detector instead, via the pointerInput modifier.

@Composable
private fun DraggableTextLowLevel() {
    Box(modifier = Modifier.fillMaxSize()) {
        var offsetX by remember { mutableFloatStateOf(0f) }
        var offsetY by remember { mutableFloatStateOf(0f) }

        Box(
            Modifier
                .offset { IntOffset(offsetX.roundToInt(), offsetY.roundToInt()) }
                .background(Color.Blue)
                .size(50.dp)
                .pointerInput(Unit) {
                    detectDragGestures { change, dragAmount ->
                        change.consume()
                        offsetX += dragAmount.x
                        offsetY += dragAmount.y
                    }
                }
        )
    }
}GesturesSnippets.kt

Figure 1.

A UI element being dragged by a finger

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-draggable-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#draggable)

## Example: Build a custom SwipeToDismiss component

This example demonstrates how to build a custom SwipeToDismiss component (a white banner) that the user can swipe left to dismiss, or drag to the right to see an overscroll stretch effect.

Define anchor values. Define an enum representing the discrete positions the draggable content can settle into: private enum class AnchoredDraggableSwipeDismissValue { DismissedStart, Resting }GesturesSnippets.kt

Instantiate and save AnchoredDraggableState. Use rememberSaveable with AnchoredDraggableState.Saver() to persist the component's current position across activity recreation and configuration changes (e.g., screen rotation or theme changes): val state = rememberSaveable(saver = AnchoredDraggableState.Saver()) { AnchoredDraggableState(initialValue = AnchoredDraggableSwipeDismissValue.Resting) }GesturesSnippets.kt

Apply the layout, offset, and draggable modifiers. To make the component draggable and ensure its anchor points adapt to its size, apply the following modifiers to the content that should visually move: Modifier.layout: Anchor positions often depend on a component's size, which isn't known during initial composition. Use the layout modifier to measure the component, calculate the DraggableAnchors map dynamically based on its width, and update the state using state.updateAnchors(). Modifier.anchoredDraggable: Connects to the state, dispatches drag deltas in the specified orientation, and handles the fling gesture to animate the component to the nearest anchor when released. Add this modifier to the component that should respond to drag gestures and pass it the state and drag orientation (and, optionally, overscrollEffect). Modifier.offset: Reads the offset from state.requireOffset() inside the offset lambda. Reading the offset within this lambda ensures the value is only read during the placement phase, avoiding unnecessary recompositions during the drag. Apply this modifier to the content that should visually move. Box( modifier = Modifier .fillMaxWidth() // Read state.requireOffset() inside the offset lambda to defer reading to the placement phase .offset { IntOffset(state.requireOffset().roundToInt(), 0) } .layout { measurable, constraints -> val placeable

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-example-build-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#example%3A-build)

## Example: Build a custom SwipeToDismiss component

= measurable.measure(constraints) val anchors = DraggableAnchors { AnchoredDraggableSwipeDismissValue.DismissedStart at -placeable.width.toFloat() AnchoredDraggableSwipeDismissValue.Resting at 0f } state.updateAnchors(anchors) layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) } } // Pass overscrollEffect to anchoredDraggable so deltas beyond the bounds (min and max anchor) are dispatched to overscrollEffect, and render the visual effect with Modifier.overscroll. .overscroll(overscrollEffect) .anchoredDraggable( state, Orientation.Horizontal, overscrollEffect = overscrollEffect ) ) { dismissContent() }GesturesSnippets.kt

[Optional] Integrate overscroll. The overscrollEffect API implements a visual effect that displays when the edges of a scrolling container have been reached with a scroll or fling. You can provide visual feedback when a user drags past the defined anchor bounds with an overscroll effect (typically a stretch or glow). Dispatch: Pass an overscrollEffect instance to the anchoredDraggable modifier. This dispatches drag deltas to either the AnchoredDraggable state or the overscroll effect, depending on whether the gesture is inside or outside the anchor bounds. Render: Apply the Modifier.overscroll with the same OverscrollEffect instance to the component that should visually render the effect.

The following snippet shows how to add a standard stretch effect:

val overscrollEffect = rememberOverscrollEffect()
Box(
    modifier.fillMaxWidth()
) {
    Box(Modifier.fillMaxWidth()) {
        background()
    }
    Box(
        modifier = Modifier
            .fillMaxWidth()
            // Read state.requireOffset() inside the offset lambda to defer reading to the placement phase
            .offset { IntOffset(state.requireOffset().roundToInt(), 0) }
            .layout { measurable, constraints ->
                val placeable = measurable.measure(constraints)
                val anchors = DraggableAnchors {
                    AnchoredDraggableSwipeDismissValue.DismissedStart at -placeable.width.toFloat()
                    AnchoredDraggableSwipeDismissValue.Resting at 0f
                }

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-example-build-2-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#example%3A-build)

## Example: Build a custom SwipeToDismiss component

state.updateAnchors(anchors)
                layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) }
            }
            // Pass overscrollEffect to anchoredDraggable so deltas beyond the bounds (min and max anchor) are dispatched to overscrollEffect, and render the visual effect with Modifier.overscroll.
            .overscroll(overscrollEffect)
            .anchoredDraggable(
                state,
                Orientation.Horizontal,
                overscrollEffect = overscrollEffect
            )
    ) {
        dismissContent()
    }
}GesturesSnippets.kt

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-example-build-3-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#example%3A-build)

## Example: Create custom, gesture-driven navigation drawer

This example demonstrates how to build a custom, gesture-driven navigation drawer. As the user drags horizontally, the foreground screen (ScreenContents) slides to the right, scales down from 1.0f to 0.8f, and rounds its corners to reveal the underlying navigation drawer.

Define anchor states and positions. In this example, the anchors are the opened and closed states of the drawer. Define an enum for the Open and Closed states, and map them to pixel offsets using DraggableAnchors: enum class DrawerState { Open, Closed } val anchors = DraggableAnchors { DrawerState.Open at drawerWidth DrawerState.Closed at 0f } val state = remember { AnchoredDraggableState( initialValue = DrawerState.Closed, anchors = anchors, ) }GesturesSnippets.kt

Animate anchoredDraggableState on the click of an item. Place HomeScreenDrawer at the bottom of the Box and ScreenContents on top. The drawer remains stationary, while the top layer translates and scales over it. When a user selects a drawer item, update the active screen state and automatically dismiss the drawer using state.animateTo(DrawerState.Closed): @Composable private fun AnchoredDraggableDrawerOnClickSample( modifier: Modifier = Modifier, state: AnchoredDraggableState<DrawerState>, coroutineScope: CoroutineScope ) { var screenState by remember { mutableStateOf(ScreenState.Home) } Box(modifier = modifier.fillMaxSize()) { HomeScreenDrawer( selectedScreen = screenState, onScreenSelected = { screen -> screenState = screen // Dismiss drawer when a destination is selected coroutineScope.launch { state.animateTo(DrawerState.Closed) } } ) // ScreenContents(...) } }GesturesSnippets.kt

Use state.requireOffset() to change multiple visual properties. Instead of only offsetting the content, you can change multiple properties with Modifier.graphicsLayer to simultaneously animate translation, scale, and corner radius based on the drag progress: Use state.requireOffset() to get the current drag offset. Use lerp() (linear interpolation) to calculate proportional scale (1f to 0.8f) and corner radius (0.dp to 32.dp) relative to the offset and drawer width. Modifier.graphicsLayer executes changes in the draw phase, ensuring high-performance

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-example-nav-drawer-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#example-nav-drawer)

## Example: Create custom, gesture-driven navigation drawer

animations without triggering recompositions during the drag. @Composable private fun AnchoredDraggableDrawerGraphicsLayerSample( state: AnchoredDraggableState<DrawerState>, drawerWidth: Float, selectedScreen: ScreenState, onDrawerClicked: () -> Unit ) { ScreenContents( selectedScreen = selectedScreen, onDrawerClicked = onDrawerClicked, modifier = Modifier .graphicsLayer { this.translationX = state.requireOffset() val scale = lerp(1f, 0.8f, state.requireOffset() / drawerWidth) this.scaleX = scale this.scaleY = scale val cornerRadius = lerp(0f, 32f, state.requireOffset() / drawerWidth) this.shape = RoundedCornerShape(cornerRadius.dp) this.clip = true } .anchoredDraggable(state, Orientation.Horizontal) ) }GesturesSnippets.kt

Trigger programmatic animations with animateTo. Control the drawer programmatically (such as when tapping the menu icon or selecting a drawer item) by launching state.animateTo() within a coroutine scope: fun toggleDrawerState( state: AnchoredDraggableState<DrawerState>, coroutineScope: CoroutineScope ) { coroutineScope.launch { if (state.currentValue == DrawerState.Open) { state.animateTo(DrawerState.Closed) } else { state.animateTo(DrawerState.Open) } } }GesturesSnippets.kt

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-example-nav-drawer-2-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#example-nav-drawer)

## Introduction

Enabling users to physically drag components across a screen is fundamental to modern Android apps. Whether you're building a custom slider, a swipe-to-dismiss component, or an interactive canvas, Jetpack Compose provides a comprehensive set of APIs to easily handle drag events.

The Compose dragging APIs abstract away the complexity of raw touch events. Instead of manually calculating touch coordinates and managing gesture lifecycles with pointerInput, you can use built-in modifiers that tie directly into Compose's state management and animation systems.

This page describes how and when to use each dragging API.

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-main-content-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#main-content)

## Drag in two dimensions with Modifier.draggable2D

Use the draggable2D modifier for moving individual UI elements across both the X and Y axes simultaneously.

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-modifier-draggable2d-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#modifier-draggable2d)

## Recommended for you

Note: link text is displayed when JavaScript is off

Understand gestures

Advanced animation example: Gestures {:#gesture-and-animation}

Value-based animations

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-recommended-for-you-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#recommended_for_you)

## Result

Video 3.

The foreground screen (Sleep) is dragged to the right, showing the underlying navigation drawer.

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-result-nav-drawer-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#result-nav-drawer)

## Result

The preceding code snippet results in a white banner, with the text "Drag me to dismiss!", that the user can swipe left to dismiss (or drag right to see the overscroll stretch effect):

Video 2.

A custom swipe-to-dismiss component implementation.

Sources: [live-compose-guide-touch-input-pointer-input-drag-composables-result-swipe-dismiss-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables#result-swipe-dismiss)
