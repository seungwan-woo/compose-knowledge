---
type: reference
title: Understand gestures
description: "Public source: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-add-custom-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#add-custom
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: d9cf73e0d2ba7c10ab8aa78797bc4c435c650d738be5feaf399d974c8c107fa0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Not every gesture is implemented with an out-of-the-box gesture modifier. For example, you cannot use a modifier to react to a drag after long-press, a control-click, or a three-finger tap. Instead, you can write your own gesture handler to identify these custom gestures. You can create a gesture handler with the pointerInput modifier, which gives you access to the raw pointer events.

      The following code listens to raw pointer events:

      @Composable
      private fun LogPointerEvents(filter: PointerEventType? = null) {
          var log by remember { mutableStateOf("") }
          Column {
              Text(log)
              Box(
                  Modifier
                      .size(100.dp)
                      .background(Color.Red)
                      .pointerInput(filter) {
                          awaitPointerEventScope {
                              while (true) {
                                  val event = awaitPointerEvent()
                                  // handle pointer event
                                  if (filter == null || event.type == filter) {
                                      log = "${event.type}, ${event.changes.first().position}"
                                  }
                              }
                          }
                      }
              )
          }
      }UnderstandGesturesSnippets.kt

      If you break this snippet up, the core components are:

      The pointerInput modifier. You pass it one or more keys. When the value of one of those keys changes, the modifier content lambda is re-executed. The sample passes an optional filter to the composable. If the value of that filter changes, the pointer event handler should be re-executed to make sure the right events are logged.

      awaitPointerEventScope creates a coroutine scope that can be used to wait for pointer events.

      awaitPointerEvent suspends the coroutine until a next pointer event occurs.

      Although listening to raw input events is powerful, it is also complex to write a custom gesture based on this raw data. To simplify the creation of custom gestures, many utility methods are available.
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-add-specific-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#add-specific
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: a3370252f660500c2a0bd4480e797879972afb47f141b9f087c1e88957bfdac0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can apply gesture modifiers to any arbitrary composable to make the composable listen to gestures. For example, you can let a generic Box handle tap gestures by making it clickable, or let a Column handle vertical scroll by applying verticalScroll.

      There are many modifiers to handle different types of gestures:

      Handle taps and presses with the clickable, combinedClickable, selectable , toggleable, and triStateToggleable modifiers.

      Handle scrolling with the horizontalScroll, verticalScroll, and more generic scrollable modifiers.

      Handle dragging with the draggable and swipeable modifier.

      Handle multi-touch gestures such as panning, rotating, and zooming, with the transformable modifier.

      As a rule, prefer out-of-the-box gesture modifiers over custom gesture handling. The modifiers add more functionality on top of the pure pointer event handling. For example, the clickable modifier not only adds detection of presses and taps, but also adds semantic information, visual indications on interactions, hovering, focus, and keyboard support. You can check the source code of clickable to see how the functionality is being added.
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-apply-calculations-for-multi-touch-events-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#apply_calculations_for_multi-touch_events
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: 74a512add3f94115050f797c629b540746452a3a0cdcc9f1cbc871fc85457dc3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: When a user is performing a multi-touch gesture using more than one pointer, it's complex to understand the required transformation based on the raw values. If the transformable modifier or the detectTransformGestures methods aren't giving enough fine-grained control for your use case, you can listen to the raw events and apply calculations on those. These helper methods are calculateCentroid, calculateCentroidSize, calculatePan, calculateRotation, and calculateZoom.
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-component-support-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#component-support
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: d30f485741f257732e27764e7fe079cd26e78bb6141fe47285c8418682001281
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Many out-of-the-box components in Compose include some sort of internal gesture handling. For example, a LazyColumn responds to drag gestures by scrolling its content, a Button shows a ripple when you press down on it, and the SwipeToDismiss component contains swiping logic to dismiss an element. This type of gesture handling works automatically.

      Next to internal gesture handling, many components also require the caller to handle the gesture. For example, a Button automatically detects taps and triggers a click event. You pass an onClick lambda to the Button to react to the gesture. Similarly, you add an onValueChange lambda to a Slider to react to the user dragging the slider handle.

      When it fits your use case, prefer gestures included in components, as they include out-of-the-box support for focus and accessibility, and they are well-tested. For example, a Button is marked in a special way so that accessibility services correctly describe it as a button, instead of just any clickable element:

      // Talkback: "Click me!, Button, double tap to activate"
      Button(onClick = { /* TODO */ }) { Text("Click me!") }
      // Talkback: "Click me!, double tap to activate"
      Box(Modifier.clickable { /* TODO */ }) { Text("Click me!") }UnderstandGesturesSnippets.kt

      To learn more about accessibility in Compose, see Accessibility in Compose.
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-definitions-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#definitions
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: 657f880abe527b1153b1705616f7af7222048b3a3aa2c1e34ec7fb3975aaf347
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To understand the various concepts on this page, you need to understand some of the terminology used:

      Pointer: A physical object you can use to interact with your application. For mobile devices, the most common pointer is your finger interacting with the touchscreen. Alternatively, you could use a stylus to replace your finger. For large screens, you can use a mouse or trackpad to indirectly interact with the display. An input device must be able to "point" at a coordinate to be considered a pointer, so a keyboard, for example, cannot be considered a pointer. In Compose, the pointer type is included in pointer changes using PointerType.

      Pointer event: Describes a low-level interaction of one or more pointers with the application at a given time. Any pointer interaction, such as putting a finger on the screen or dragging a mouse, would trigger an event. In Compose, all relevant information for such an event is contained in the PointerEvent class.

      Gesture: A sequence of pointer events that can be interpreted as a single action. For example, a tap gesture can be considered a sequence of a down event followed by an up event. There are common gestures that are used by many apps, such as tap, drag, or transform, but you can also create your own custom gesture when needed.
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-detect-full-gestures-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#detect_full_gestures
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: 0b3ca0b309001c57c1ffdc4974fcd30c25e878eccc8c4703718cbfa444faf630
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Instead of handling the raw pointer events, you can listen for specific gestures to occur and respond appropriately. The AwaitPointerEventScope provides methods for listening for:

      Press, tap, double tap, and long-press: detectTapGestures

      Drags: detectHorizontalDragGestures, detectVerticalDragGestures, detectDragGestures and detectDragGesturesAfterLongPress

      Transforms: detectTransformGestures

      These are top-level detectors, so you can't add multiple detectors within one pointerInput modifier. The following snippet only detects the taps, not the drags:

      var log by remember { mutableStateOf("") }
      Column {
          Text(log)
          Box(
              Modifier
                  .size(100.dp)
                  .background(Color.Red)
                  .pointerInput(Unit) {
                      detectTapGestures { log = "Tap!" }
                      // Never reached
                      detectDragGestures { _, _ -> log = "Dragging" }
                  }
          )
      }UnderstandGesturesSnippets.kt

      Internally, the detectTapGestures method blocks the coroutine, and the second detector is never reached. If you need to add more than one gesture listener to a composable, use separate pointerInput modifier instances instead:

      var log by remember { mutableStateOf("") }
      Column {
          Text(log)
          Box(
              Modifier
                  .size(100.dp)
                  .background(Color.Red)
                  .pointerInput(Unit) {
                      detectTapGestures { log = "Tap!" }
                  }
                  .pointerInput(Unit) {
                      // These drag events will correctly be triggered
                      detectDragGestures { _, _ -> log = "Dragging" }
                  }
          )
      }UnderstandGesturesSnippets.kt
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-different-levels-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#different-levels
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: 0862db596e3f9ca7f5fe7684b98b159f4c0cd397f73696702ac3d48a405c6112
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Jetpack Compose provides different levels of abstraction for handling gestures. On the top level is component support. Composables like Button automatically include gesture support. To add gesture support to custom components, you can add gesture modifiers like clickable to arbitrary composables. Finally, if you need a custom gesture, you can use the pointerInput modifier.

      As a rule, build on the highest level of abstraction that offers the functionality you need. This way, you benefit from the best practices included in the layer. For example, Button contains more semantic information, used for accessibility, than clickable, which contains more information than a raw pointerInput implementation.
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-event-consumption-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#event-consumption
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: 5c03b2b8f3587af1fbbfcdce952fffa7e85f3fdb17c5c4cd19b6655231bd397f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When more than one composable has a gesture handler assigned to it, those handlers shouldn't conflict. For example, take a look at this UI:

      When a user taps the bookmark button, the button's onClick lambda handles that gesture. When a user taps on any other part of the list item, the ListItem handles that gesture and navigates to the article. In terms of pointer input, the Button must consume this event, so that its parent knows not to react to it anymore. Gestures included in out-of-the-box components and the common gesture modifiers include this consumption behavior, but if you are writing your own custom gesture, you must consume events manually. You do this with the PointerInputChange.consume method:

      Modifier.pointerInput(Unit) {

          awaitEachGesture {
              while (true) {
                  val event = awaitPointerEvent()
                  // consume all changes
                  event.changes.forEach { it.consume() }
              }
          }
      }UnderstandGesturesSnippets.kt

      Consuming an event does not stop the event propagation to other composables. A composable needs to explicitly ignore consumed events instead. When writing custom gestures, you should check if an event was already consumed by another element:

      Modifier.pointerInput(Unit) {
          awaitEachGesture {
              while (true) {
                  val event = awaitPointerEvent()
                  if (event.changes.any { it.isConsumed }) {
                      // A pointer is consumed by another gesture handler
                  } else {
                      // Handle unconsumed event
                  }
              }
          }
      }UnderstandGesturesSnippets.kt
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-event-dispatching-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#event-dispatching
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: ef0e6849150b000117f80cf0c826117eda53bb790bdbf93aed84dc119f8e6858
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Not every pointer event is sent to every pointerInput modifier. Event dispatching works as follows:

      Pointer events are dispatched to a composable hierarchy. The moment that a new pointer triggers its first pointer event, the system starts hit-testing the "eligible" composables. A composable is considered eligible when it has pointer input handling capabilities. Hit-testing flows from the top of the UI tree to the bottom. A composable is "hit" when the pointer event occurred within the bounds of that composable. This process results in a chain of composables that hit-test positively.

      By default, when there are multiple eligible composables on the same level of the tree, only the composable with the highest z-index is "hit". For example, when you add two overlapping Button composables to a Box, only the one drawn on top receives any pointer events. You can theoretically override this behavior by creating your own PointerInputModifierNode implementation and setting sharePointerInputWithSiblings to true.

      Further events for the same pointer are dispatched to that same chain of composables, and flow according to event propagation logic. The system does not perform any more hit-testing for this pointer. This means that each composable in the chain receives all events for that pointer, even when those occur outside of the bounds of that composable. Composables that are not in the chain never receive pointer events, even when the pointer is inside of their bounds.

      Hover events, triggered by a mouse or stylus hovering, are an exception to the rules defined here. Hover events are sent to any composable that they hit. So when a user hovers a pointer from the bounds of one composable to the next, instead of sending the events to that first composable, events are sent to the new composable.
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-event-propagation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#event-propagation
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: ae8f8fe98a60af65ec9c899edc9931de9f0611c3c14f7ec76da9f225fd776558
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      As mentioned before, pointer changes are passed to each composable that it hits. But if more than one such composable exists, in what order do the events propagate? If you take the example from the last section, this UI translates to the following UI tree, where only the ListItem and the Button respond to pointer events:

      Pointer events flow through each of these composables three times, during three "passes":

      In the Initial pass, the event flows from the top of the UI tree to the bottom. This flow allows a parent to intercept an event before the child can consume it. For example, tooltips need to intercept a long-press instead of passing it on to their children. In our example, ListItem receives the event before the Button.

      In the Main pass, the event flows from the UI tree's leaf nodes up to the root of the UI tree. This phase is where you normally consume gestures, and is the default pass when listening to events. Handling gestures in this pass means that leaf nodes takes precedence over their parents, which is the most logical behavior for most gestures. In our example, the Button receives the event before the ListItem.

      In the Final pass, the event flows one more time from the top of the UI tree to the leaf nodes. This flow allows elements higher in the stack to respond to event consumption by their parent. For example, a button removes its ripple indication when a press turns into a drag of its scrollable parent.

      Visually, the event flow can be represented as follows:

      Once an input change is consumed, this information is passed from that point in the flow onwards:

      In code, you can specify the pass that you're interested in:

      Modifier.pointerInput(Unit) {
          awaitPointerEventScope {
              val eventOnInitialPass = awaitPointerEvent(PointerEventPass.Initial)
              val eventOnMainPass = awaitPointerEvent(PointerEventPass.Main) // default
              val eventOnFinalPass = awaitPointerEvent(PointerEventPass.Final)
          }
      }UnderstandGesturesSnippets.kt

      In this code snippet, the same identical event is returned by each of these await method calls, although the data about the consumption might have changed.
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-handle-events-per-gesture-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#handle_events_per_gesture
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: 1292e6447f4419c433437ce1f0d49273dc26272dcd8bd0177b2b97227fd134d7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      By definition, gestures start with a pointer down event. You can use the awaitEachGesture helper method instead of the while(true) loop that passes through each raw event. The awaitEachGesture method restarts the containing block when all pointers have been lifted, indicating the gesture is completed:

      @Composable
      private fun SimpleClickable(onClick: () -> Unit) {
          Box(
              Modifier
                  .size(100.dp)
                  .pointerInput(onClick) {
                      awaitEachGesture {
                          awaitFirstDown().also { it.consume() }
                          val up = waitForUpOrCancellation()
                          if (up != null) {
                              up.consume()
                              onClick()
                          }
                      }
                  }
          )
      }UnderstandGesturesSnippets.kt

      In practice, you almost always want to use awaitEachGesture unless you're responding to pointer events without identifying gestures. An example of this is hoverable, which does not respond to pointer down or up events— it just needs to know when a pointer enters or exits its bounds.
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-learn-more-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#learn-more
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: 34bf509ee6ef79f1f19cdb33fb3bce21ec1d533e92e282ce8cfa771cb333a62d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can learn more about gestures in Jetpack Compose from the following resources:

      Types of gestures

      PointerInputChange
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#main-content
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: 77ae28c751f2aae3202315b0d53247b1fdb460d8d8651b02b065e5e1f107ccd3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: There are several terms and concepts that are important to understand when working on gesture handling in an application. This page explains the terms pointers, pointer events, and gestures, and introduces the different abstraction levels for gestures. It also dives deeper into event consumption and propagation.
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#recommended_for_you
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: df61785a8eac03b3ed8b94240031e305c51c9d6a18abb12b827db29e1d73cb2d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Accessibility in Compose

      Scroll

      Tap and press
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-test-gestures-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#test-gestures
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: dd31a3e84071abac0a1616848fc31035db46a03eef63a157b95620021fa7bef7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In your test methods, you can manually send pointer events using the performTouchInput method. This lets you perform either higher-level full gestures (such as pinch or long click) or low level gestures (such as moving the cursor by a certain amount of pixels):

      composeTestRule.onNodeWithTag("MyList").performTouchInput {
          swipeUp()
          swipeDown()
          click()
      }UnderstandGesturesSnippets.kt

      See the performTouchInput documentation for more examples.
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-wait-for-a-specific-event-or-sub-gesture-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#wait_for_a_specific_event_or_sub-gesture
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: eb96e8133be36d096d0728525ff81fbe49f9ab34e30c07d758514cd5916622a0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There's a set of methods that helps identify common parts of gestures:

      Suspend until a pointer goes down with awaitFirstDown, or wait for all pointers to go up with waitForUpOrCancellation.

      Create a low-level drag listener using awaitTouchSlopOrCancellation and awaitDragOrCancellation. The gesture handler first suspends until the pointer reaches the touch slop and then suspends until a first drag event comes through. If you're only interested in drags along a single axis, use awaitHorizontalTouchSlopOrCancellation plus awaitHorizontalDragOrCancellation, or awaitVerticalTouchSlopOrCancellation plus awaitVerticalDragOrCancellation instead.

      Suspend until a long press happens with awaitLongPressOrCancellation.

      Use the drag method to continuously listen to drag events, or horizontalDrag or verticalDrag to listen to drag events on one axis.
compose:
  id: live-compose-guide-touch-input-pointer-input-understand-gestures
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation
  sections:
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-add-custom
      title: Add custom gesture to arbitrary composables with pointerInput modifier
      aliases:
        - androidx.compose.ui.input.pointer.pointerInput
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-add-custom-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-add-specific
      title: Add specific gestures to arbitrary composables with modifiers
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-add-specific-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-apply-calculations-for-multi-touch-events
      title: Apply calculations for multi-touch events
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-apply-calculations-for-multi-touch-events-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-component-support
      title: Component support
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-component-support-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-definitions
      title: Definitions
      aliases:
        - androidx.compose.ui.input.pointer.PointerEvent
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-definitions-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-detect-full-gestures
      title: Detect full gestures
      aliases:
        - androidx.compose.ui.input.pointer.pointerInput
        - androidx.compose.foundation.gestures.detectTapGestures
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-detect-full-gestures-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-different-levels
      title: Different levels of abstraction
      aliases:
        - androidx.compose.ui.input.pointer.pointerInput
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-different-levels-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-event-consumption
      title: Event consumption
      aliases:
        - androidx.compose.ui.input.pointer.pointerInput
        - androidx.compose.ui.input.pointer.PointerInputChange
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-event-consumption-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-event-dispatching
      title: Event dispatching and hit-testing
      aliases:
        - androidx.compose.ui.input.pointer.pointerInput
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-event-dispatching-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-event-propagation
      title: Event propagation
      aliases:
        - androidx.compose.ui.input.pointer.pointerInput
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-event-propagation-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-handle-events-per-gesture
      title: Handle events per gesture
      aliases:
        - androidx.compose.ui.input.pointer.pointerInput
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-handle-events-per-gesture-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-learn-more
      title: Learn more
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputChange
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-learn-more-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-main-content-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-test-gestures
      title: Test gestures
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-test-gestures-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-understand-gestures-wait-for-a-specific-event-or-sub-gesture
      title: Wait for a specific event or sub-gesture
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-wait-for-a-specific-event-or-sub-gesture-source
      relatedIds: []
---

# Understand gestures

Public source: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures

## Add custom gesture to arbitrary composables with pointerInput modifier

Not every gesture is implemented with an out-of-the-box gesture modifier. For example, you cannot use a modifier to react to a drag after long-press, a control-click, or a three-finger tap. Instead, you can write your own gesture handler to identify these custom gestures. You can create a gesture handler with the pointerInput modifier, which gives you access to the raw pointer events.

The following code listens to raw pointer events:

@Composable
private fun LogPointerEvents(filter: PointerEventType? = null) {
    var log by remember { mutableStateOf("") }
    Column {
        Text(log)
        Box(
            Modifier
                .size(100.dp)
                .background(Color.Red)
                .pointerInput(filter) {
                    awaitPointerEventScope {
                        while (true) {
                            val event = awaitPointerEvent()
                            // handle pointer event
                            if (filter == null || event.type == filter) {
                                log = "${event.type}, ${event.changes.first().position}"
                            }
                        }
                    }
                }
        )
    }
}UnderstandGesturesSnippets.kt

If you break this snippet up, the core components are:

The pointerInput modifier. You pass it one or more keys. When the value of one of those keys changes, the modifier content lambda is re-executed. The sample passes an optional filter to the composable. If the value of that filter changes, the pointer event handler should be re-executed to make sure the right events are logged.

awaitPointerEventScope creates a coroutine scope that can be used to wait for pointer events.

awaitPointerEvent suspends the coroutine until a next pointer event occurs.

Although listening to raw input events is powerful, it is also complex to write a custom gesture based on this raw data. To simplify the creation of custom gestures, many utility methods are available.

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-add-custom-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#add-custom)

## Add specific gestures to arbitrary composables with modifiers

You can apply gesture modifiers to any arbitrary composable to make the composable listen to gestures. For example, you can let a generic Box handle tap gestures by making it clickable, or let a Column handle vertical scroll by applying verticalScroll.

There are many modifiers to handle different types of gestures:

Handle taps and presses with the clickable, combinedClickable, selectable , toggleable, and triStateToggleable modifiers.

Handle scrolling with the horizontalScroll, verticalScroll, and more generic scrollable modifiers.

Handle dragging with the draggable and swipeable modifier.

Handle multi-touch gestures such as panning, rotating, and zooming, with the transformable modifier.

As a rule, prefer out-of-the-box gesture modifiers over custom gesture handling. The modifiers add more functionality on top of the pure pointer event handling. For example, the clickable modifier not only adds detection of presses and taps, but also adds semantic information, visual indications on interactions, hovering, focus, and keyboard support. You can check the source code of clickable to see how the functionality is being added.

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-add-specific-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#add-specific)

## Apply calculations for multi-touch events

When a user is performing a multi-touch gesture using more than one pointer, it's complex to understand the required transformation based on the raw values. If the transformable modifier or the detectTransformGestures methods aren't giving enough fine-grained control for your use case, you can listen to the raw events and apply calculations on those. These helper methods are calculateCentroid, calculateCentroidSize, calculatePan, calculateRotation, and calculateZoom.

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-apply-calculations-for-multi-touch-events-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#apply_calculations_for_multi-touch_events)

## Component support

Many out-of-the-box components in Compose include some sort of internal gesture handling. For example, a LazyColumn responds to drag gestures by scrolling its content, a Button shows a ripple when you press down on it, and the SwipeToDismiss component contains swiping logic to dismiss an element. This type of gesture handling works automatically.

Next to internal gesture handling, many components also require the caller to handle the gesture. For example, a Button automatically detects taps and triggers a click event. You pass an onClick lambda to the Button to react to the gesture. Similarly, you add an onValueChange lambda to a Slider to react to the user dragging the slider handle.

When it fits your use case, prefer gestures included in components, as they include out-of-the-box support for focus and accessibility, and they are well-tested. For example, a Button is marked in a special way so that accessibility services correctly describe it as a button, instead of just any clickable element:

// Talkback: "Click me!, Button, double tap to activate"
Button(onClick = { /* TODO */ }) { Text("Click me!") }
// Talkback: "Click me!, double tap to activate"
Box(Modifier.clickable { /* TODO */ }) { Text("Click me!") }UnderstandGesturesSnippets.kt

To learn more about accessibility in Compose, see Accessibility in Compose.

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-component-support-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#component-support)

## Definitions

To understand the various concepts on this page, you need to understand some of the terminology used:

Pointer: A physical object you can use to interact with your application. For mobile devices, the most common pointer is your finger interacting with the touchscreen. Alternatively, you could use a stylus to replace your finger. For large screens, you can use a mouse or trackpad to indirectly interact with the display. An input device must be able to "point" at a coordinate to be considered a pointer, so a keyboard, for example, cannot be considered a pointer. In Compose, the pointer type is included in pointer changes using PointerType.

Pointer event: Describes a low-level interaction of one or more pointers with the application at a given time. Any pointer interaction, such as putting a finger on the screen or dragging a mouse, would trigger an event. In Compose, all relevant information for such an event is contained in the PointerEvent class.

Gesture: A sequence of pointer events that can be interpreted as a single action. For example, a tap gesture can be considered a sequence of a down event followed by an up event. There are common gestures that are used by many apps, such as tap, drag, or transform, but you can also create your own custom gesture when needed.

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-definitions-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#definitions)

## Detect full gestures

Instead of handling the raw pointer events, you can listen for specific gestures to occur and respond appropriately. The AwaitPointerEventScope provides methods for listening for:

Press, tap, double tap, and long-press: detectTapGestures

Drags: detectHorizontalDragGestures, detectVerticalDragGestures, detectDragGestures and detectDragGesturesAfterLongPress

Transforms: detectTransformGestures

These are top-level detectors, so you can't add multiple detectors within one pointerInput modifier. The following snippet only detects the taps, not the drags:

var log by remember { mutableStateOf("") }
Column {
    Text(log)
    Box(
        Modifier
            .size(100.dp)
            .background(Color.Red)
            .pointerInput(Unit) {
                detectTapGestures { log = "Tap!" }
                // Never reached
                detectDragGestures { _, _ -> log = "Dragging" }
            }
    )
}UnderstandGesturesSnippets.kt

Internally, the detectTapGestures method blocks the coroutine, and the second detector is never reached. If you need to add more than one gesture listener to a composable, use separate pointerInput modifier instances instead:

var log by remember { mutableStateOf("") }
Column {
    Text(log)
    Box(
        Modifier
            .size(100.dp)
            .background(Color.Red)
            .pointerInput(Unit) {
                detectTapGestures { log = "Tap!" }
            }
            .pointerInput(Unit) {
                // These drag events will correctly be triggered
                detectDragGestures { _, _ -> log = "Dragging" }
            }
    )
}UnderstandGesturesSnippets.kt

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-detect-full-gestures-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#detect_full_gestures)

## Different levels of abstraction

Jetpack Compose provides different levels of abstraction for handling gestures. On the top level is component support. Composables like Button automatically include gesture support. To add gesture support to custom components, you can add gesture modifiers like clickable to arbitrary composables. Finally, if you need a custom gesture, you can use the pointerInput modifier.

As a rule, build on the highest level of abstraction that offers the functionality you need. This way, you benefit from the best practices included in the layer. For example, Button contains more semantic information, used for accessibility, than clickable, which contains more information than a raw pointerInput implementation.

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-different-levels-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#different-levels)

## Event consumption

When more than one composable has a gesture handler assigned to it, those handlers shouldn't conflict. For example, take a look at this UI:

When a user taps the bookmark button, the button's onClick lambda handles that gesture. When a user taps on any other part of the list item, the ListItem handles that gesture and navigates to the article. In terms of pointer input, the Button must consume this event, so that its parent knows not to react to it anymore. Gestures included in out-of-the-box components and the common gesture modifiers include this consumption behavior, but if you are writing your own custom gesture, you must consume events manually. You do this with the PointerInputChange.consume method:

Modifier.pointerInput(Unit) {

    awaitEachGesture {
        while (true) {
            val event = awaitPointerEvent()
            // consume all changes
            event.changes.forEach { it.consume() }
        }
    }
}UnderstandGesturesSnippets.kt

Consuming an event does not stop the event propagation to other composables. A composable needs to explicitly ignore consumed events instead. When writing custom gestures, you should check if an event was already consumed by another element:

Modifier.pointerInput(Unit) {
    awaitEachGesture {
        while (true) {
            val event = awaitPointerEvent()
            if (event.changes.any { it.isConsumed }) {
                // A pointer is consumed by another gesture handler
            } else {
                // Handle unconsumed event
            }
        }
    }
}UnderstandGesturesSnippets.kt

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-event-consumption-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#event-consumption)

## Event dispatching and hit-testing

Not every pointer event is sent to every pointerInput modifier. Event dispatching works as follows:

Pointer events are dispatched to a composable hierarchy. The moment that a new pointer triggers its first pointer event, the system starts hit-testing the "eligible" composables. A composable is considered eligible when it has pointer input handling capabilities. Hit-testing flows from the top of the UI tree to the bottom. A composable is "hit" when the pointer event occurred within the bounds of that composable. This process results in a chain of composables that hit-test positively.

By default, when there are multiple eligible composables on the same level of the tree, only the composable with the highest z-index is "hit". For example, when you add two overlapping Button composables to a Box, only the one drawn on top receives any pointer events. You can theoretically override this behavior by creating your own PointerInputModifierNode implementation and setting sharePointerInputWithSiblings to true.

Further events for the same pointer are dispatched to that same chain of composables, and flow according to event propagation logic. The system does not perform any more hit-testing for this pointer. This means that each composable in the chain receives all events for that pointer, even when those occur outside of the bounds of that composable. Composables that are not in the chain never receive pointer events, even when the pointer is inside of their bounds.

Hover events, triggered by a mouse or stylus hovering, are an exception to the rules defined here. Hover events are sent to any composable that they hit. So when a user hovers a pointer from the bounds of one composable to the next, instead of sending the events to that first composable, events are sent to the new composable.

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-event-dispatching-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#event-dispatching)

## Event propagation

As mentioned before, pointer changes are passed to each composable that it hits. But if more than one such composable exists, in what order do the events propagate? If you take the example from the last section, this UI translates to the following UI tree, where only the ListItem and the Button respond to pointer events:

Pointer events flow through each of these composables three times, during three "passes":

In the Initial pass, the event flows from the top of the UI tree to the bottom. This flow allows a parent to intercept an event before the child can consume it. For example, tooltips need to intercept a long-press instead of passing it on to their children. In our example, ListItem receives the event before the Button.

In the Main pass, the event flows from the UI tree's leaf nodes up to the root of the UI tree. This phase is where you normally consume gestures, and is the default pass when listening to events. Handling gestures in this pass means that leaf nodes takes precedence over their parents, which is the most logical behavior for most gestures. In our example, the Button receives the event before the ListItem.

In the Final pass, the event flows one more time from the top of the UI tree to the leaf nodes. This flow allows elements higher in the stack to respond to event consumption by their parent. For example, a button removes its ripple indication when a press turns into a drag of its scrollable parent.

Visually, the event flow can be represented as follows:

Once an input change is consumed, this information is passed from that point in the flow onwards:

In code, you can specify the pass that you're interested in:

Modifier.pointerInput(Unit) {
    awaitPointerEventScope {
        val eventOnInitialPass = awaitPointerEvent(PointerEventPass.Initial)
        val eventOnMainPass = awaitPointerEvent(PointerEventPass.Main) // default
        val eventOnFinalPass = awaitPointerEvent(PointerEventPass.Final)
    }
}UnderstandGesturesSnippets.kt

In this code snippet, the same identical event is returned by each of these await method calls, although the data about the consumption might have changed.

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-event-propagation-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#event-propagation)

## Handle events per gesture

By definition, gestures start with a pointer down event. You can use the awaitEachGesture helper method instead of the while(true) loop that passes through each raw event. The awaitEachGesture method restarts the containing block when all pointers have been lifted, indicating the gesture is completed:

@Composable
private fun SimpleClickable(onClick: () -> Unit) {
    Box(
        Modifier
            .size(100.dp)
            .pointerInput(onClick) {
                awaitEachGesture {
                    awaitFirstDown().also { it.consume() }
                    val up = waitForUpOrCancellation()
                    if (up != null) {
                        up.consume()
                        onClick()
                    }
                }
            }
    )
}UnderstandGesturesSnippets.kt

In practice, you almost always want to use awaitEachGesture unless you're responding to pointer events without identifying gestures. An example of this is hoverable, which does not respond to pointer down or up events— it just needs to know when a pointer enters or exits its bounds.

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-handle-events-per-gesture-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#handle_events_per_gesture)

## Learn more

You can learn more about gestures in Jetpack Compose from the following resources:

Types of gestures

PointerInputChange

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-learn-more-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#learn-more)

## Introduction

There are several terms and concepts that are important to understand when working on gesture handling in an application. This page explains the terms pointers, pointer events, and gestures, and introduces the different abstraction levels for gestures. It also dives deeper into event consumption and propagation.

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-main-content-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Accessibility in Compose

Scroll

Tap and press

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-recommended-for-you-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#recommended_for_you)

## Test gestures

In your test methods, you can manually send pointer events using the performTouchInput method. This lets you perform either higher-level full gestures (such as pinch or long click) or low level gestures (such as moving the cursor by a certain amount of pixels):

composeTestRule.onNodeWithTag("MyList").performTouchInput {
    swipeUp()
    swipeDown()
    click()
}UnderstandGesturesSnippets.kt

See the performTouchInput documentation for more examples.

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-test-gestures-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#test-gestures)

## Wait for a specific event or sub-gesture

There's a set of methods that helps identify common parts of gestures:

Suspend until a pointer goes down with awaitFirstDown, or wait for all pointers to go up with waitForUpOrCancellation.

Create a low-level drag listener using awaitTouchSlopOrCancellation and awaitDragOrCancellation. The gesture handler first suspends until the pointer reaches the touch slop and then suspends until a first drag event comes through. If you're only interested in drags along a single axis, use awaitHorizontalTouchSlopOrCancellation plus awaitHorizontalDragOrCancellation, or awaitVerticalTouchSlopOrCancellation plus awaitVerticalDragOrCancellation instead.

Suspend until a long press happens with awaitLongPressOrCancellation.

Use the drag method to continuously listen to drag events, or horizontalDrag or verticalDrag to listen to drag events on one axis.

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-wait-for-a-specific-event-or-sub-gesture-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#wait_for_a_specific_event_or_sub-gesture)
