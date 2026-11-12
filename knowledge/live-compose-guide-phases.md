---
type: reference
title: Jetpack Compose phases
description: "Public source: https://developer.android.com/develop/ui/compose/phases"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-phases-3-phases-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#3-phases
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: e9eadf00549d7f8b81ef40ad69d53eb1268015f93dd6764a98b08260ee2df18b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose has three main phases:

      Composition: What UI to show. Compose runs composable functions and creates a description of your UI.

      Layout: Where to place UI. This phase consists of two steps: measurement and placement. Layout elements measure and place themselves and any child elements in 2D coordinates, for each node in the layout tree.

      Drawing: How it renders. UI elements draw into a Canvas, usually a device screen.

      Figure 1.

      The three phases in which Compose transforms data into UI.

      The order of these phases is generally the same, allowing data to flow in one direction from composition to layout to drawing to produce a frame (also known as unidirectional data flow). BoxWithConstraints, LazyColumn, and LazyRow are notable exceptions, where the composition of its children depends on the parent's layout phase.

      Conceptually, each of these phases happens for every frame; however to optimize performance, Compose avoids repeating work that would compute the same results from the same inputs in all of these phases. Compose skips running a composable function if it can reuse a former result, and Compose UI doesn't re-layout or re-draw the entire tree if it doesn't have to. Compose performs only the minimum amount of work required to update the UI. This optimization is possible because Compose tracks state reads within the different phases.
  - id: live-compose-guide-phases-composition-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#composition
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: b81853b540af5825a06f800626cbef870836a98a735893181ce48b4031e3e795
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In the composition phase, the Compose runtime executes composable functions and outputs a tree structure that represents your UI. This UI tree consists of layout nodes that contain all the information needed for the next phases, as shown in the following video:

      Figure 2. The tree representing your UI that is created in the composition phase.

      A subsection of the code and UI tree looks like the following:

      Figure 3.

      A subsection of a UI tree with the corresponding code.

      In these examples, each composable function in the code maps to a single layout node in the UI tree. In more complex examples, composables can contain logic and control flow, and produce a different tree given different states.
  - id: live-compose-guide-phases-drawing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#drawing
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: e244337bbda3ae02b14d66f2790961448c47c4a15c643cfd28685d709efa42ac
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In the drawing phase, the tree is traversed again from top to bottom, and each node draws itself on the screen in turn.

      Figure 5. The drawing phase draws the pixels on the screen.

      Using the previous example, the tree content is drawn in the following way:

      The Row draws any content it might have, such as a background color.

      The Image draws itself.

      The Column draws itself.

      The first and second Text draw themselves, respectively.

      Figure 6. A UI tree and its drawn representation.
  - id: live-compose-guide-phases-first-frame-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#first-frame
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: bdb5d3febe62bad29ccd6c413d406f90b680e754c655df2c61c6f6d14bd82873
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: During the composition phase of the first frame, imageHeightPx is initially 0. Consequently, the code provides the text with Modifier.padding(top = 0). The subsequent layout phase invokes the onSizeChanged modifier's callback, which updates imageHeightPx to the image's actual height. Compose then schedules a recomposition for the next frame. However, during the current drawing phase, the text renders with a padding of 0, as the updated imageHeightPx value is not yet reflected.
  - id: live-compose-guide-phases-layout-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#layout
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: dc9efce647743265759a2d035c80a32284b5652a357f1993e65af09d3ce335d7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In the layout phase, Compose uses the UI tree produced in the composition phase as input. The collection of layout nodes contain all the information needed to decide on each node's size and location in 2D space.

      Figure 4. The measurement and placement of each layout node in the UI tree during the layout phase.

      During the layout phase, the tree is traversed using the following three-step algorithm:

      Measure children: A node measures its children if any exist.

      Decide own size: Based on these measurements, a node decides on its own size.

      Place children: Each child node is placed relative to a node's own position.

      At the end of this phase, each layout node has:

      An assigned width and height

      An x, y coordinate where it should be drawn

      Recall the UI tree from the previous section:

      For this tree, the algorithm works as follows:

      The Row measures its children, Image and Column.

      The Image is measured. It doesn't have any children, so it decides its own size and reports the size back to the Row.

      The Column is measured next. It measures its own children (two Text composables) first.

      The first Text is measured. It doesn't have any children so it decides its own size and reports its size back to the Column. The second Text is measured. It doesn't have any children so it decides its own size and reports it back to the Column.

      The Column uses the child measurements to decide its own size. It uses the maximum child width and the sum of the height of its children.

      The Column places its children relative to itself, putting them beneath each other vertically.

      The Row uses the child measurements to decide its own size. It uses the maximum child height and the sum of the widths of its children. It then places its children.

      Note that each node was visited only once. The Compose runtime requires only one pass through the UI tree to measure and place all the nodes, which improves performance. When the number of nodes in the tree increases, the time spent traversing it increases in a linear fashion. In contrast, if each node was visited multiple times, the traversal time increases exponentially.
  - id: live-compose-guide-phases-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#main-content
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: 3843bb7a18735f3e4689fc902845744312bab0ff7e6b7865a53770ff4ea1eaed
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Like most other UI toolkits, Compose renders a frame through several distinct phases. For example, the Android View system has three main phases: measure, layout, and drawing. Compose is very similar but has an important additional phase called composition at the start.

      The Compose documentation describes composition in Thinking in Compose and State and Jetpack Compose.
  - id: live-compose-guide-phases-offset-lambda-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#offset-lambda
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: d6417304e7e286be8f8e6fc2e9587775bdd6aeaca5d2e27f159026203ab9977c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There is another version of the offset modifier available: Modifier.offset(offset: Density.() -> IntOffset).

      This version takes a lambda parameter, where the resulting offset is returned by the lambda block. Update the code to use it:

      Box {
          val listState = rememberLazyListState()

          Image(
              // ...
              Modifier.offset {
                  // State read of firstVisibleItemScrollOffset in Layout
                  IntOffset(x = 0, y = listState.firstVisibleItemScrollOffset / 2)
              }
          )

          LazyColumn(state = listState) {
              // ...
          }
      }PhasesSnippets.kt

      So why is this more performant? The lambda block you provide to the modifier is invoked during the layout phase (specifically, during the layout phase's placement step), meaning that the firstVisibleItemScrollOffset state is no longer read during composition. Because Compose tracks when state is read, this change means that if the firstVisibleItemScrollOffset's value changes, Compose only has to restart the layout and drawing phases.

      Of course, it is often absolutely necessary to read states in the composition phase. Even so, there are cases where you can minimize the number of recompositions by filtering state changes. For more information about this, see derivedStateOf: convert one or multiple state objects into another state.
  - id: live-compose-guide-phases-optimize-state-reads-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#optimize-state-reads
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: 0190a6386f61dd1207c793bacc3090817ad7b2d64acdfde37e6448c120dd66e9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Because Compose performs localized state read tracking, you can minimize the amount of work performed by reading each state in an appropriate phase.

      Consider the following example. This example has an Image() which uses the offset modifier to offset its final layout position, resulting in a parallax effect as the user scrolls.

      Box {
          val listState = rememberLazyListState()

          Image(
              // ...
              // Non-optimal implementation!
              Modifier.offset(
                  with(LocalDensity.current) {
                      // State read of firstVisibleItemScrollOffset in composition
                      (listState.firstVisibleItemScrollOffset / 2).toDp()
                  }
              )
          )

          LazyColumn(state = listState) {
              // ...
          }
      }PhasesSnippets.kt

      This code works, but results in suboptimal performance. As written, the code reads the value of the firstVisibleItemScrollOffset state and passes it to the Modifier.offset(offset: Dp) function. As the user scrolls, the firstVisibleItemScrollOffset's value will change. As you've learned, Compose tracks any state reads so that it can restart (re-invoke) the reading code, which in this example is the content of the Box.

      This is an example of reading a state within the composition phase. This is not necessarily a bad thing, and in fact is the basis of recomposition, allowing data changes to emit new UI.

      Key point: This example is suboptimal because every scroll event results in the entire composable content being reevaluated, measured, laid out, and finally drawn. You trigger the Compose phase on every scroll even though the content shown hasn't changed, only its position. You can optimize the state read to only re-trigger the layout phase.
  - id: live-compose-guide-phases-phase1-comp-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#phase1-comp
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: ce4fd16604091fc78f7de39a63008e3080693294bdc32693fd715d2b2f2cd589
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      State reads within a @Composable function or lambda block affect composition and potentially the subsequent phases. When the state's value changes, the recomposer schedules reruns of all the composable functions which read that state's value. Note that the runtime may decide to skip some or all of the composable functions if the inputs haven't changed. See Skipping if the inputs haven't changed for more information.

      Depending on the result of composition, Compose UI runs the layout and drawing phases. It might skip these phases if the content remains the same and the size and the layout won't change.

      var padding by remember { mutableStateOf(8.dp) }
      Text(
          text = "Hello",
          // The `padding` state is read in the composition phase
          // when the modifier is constructed.
          // Changes in `padding` will invoke recomposition.
          modifier = Modifier.padding(padding)
      )PhasesSnippets.kt
  - id: live-compose-guide-phases-phase2-layout-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#phase2-layout
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: ed5434f8414dd588247f01a68d400bcf54d5f4438524ecffc98c86eea3a7d66b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The layout phase consists of two steps: measurement and placement. The measurement step runs the measure lambda passed to the Layout composable, the MeasureScope.measure method of the LayoutModifier interface, among others. The placement step runs the placement block of the layout function, the lambda block of Modifier.offset { … }, and similar functions.

      State reads during each of these steps affect the layout and potentially the drawing phase. When the state's value changes, Compose UI schedules the layout phase. It also runs the drawing phase if size or position has changed.

      var offsetX by remember { mutableStateOf(8.dp) }
      Text(
          text = "Hello",
          modifier = Modifier.offset {
              // The `offsetX` state is read in the placement step
              // of the layout phase when the offset is calculated.
              // Changes in `offsetX` restart the layout.
              IntOffset(offsetX.roundToPx(), 0)
          }
      )PhasesSnippets.kt
  - id: live-compose-guide-phases-phase3-drawing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#phase3-drawing
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: 1e1c060fb827e848b36aafbacd0ef315e7b188aeb56226a1d4781e3b36867f95
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      State reads during drawing code affect the drawing phase. Common examples include Canvas(), Modifier.drawBehind, and Modifier.drawWithContent. When the state's value changes, Compose UI runs only the draw phase.

      var color by remember { mutableStateOf(Color.Red) }
      Canvas(modifier = modifier) {
          // The `color` state is read in the drawing phase
          // when the canvas is rendered.
          // Changes in `color` restart the drawing.
          drawRect(color)
      }PhasesSnippets.kt
  - id: live-compose-guide-phases-phased-state-reads-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#phased-state-reads
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: 4aa838cea39abf723105ec27e152720a04f8d38caa144407597ff4702c16dd04
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      As mentioned previously, there are three main phases in Compose, and Compose tracks what state is read within each of them. This allows Compose to notify only the specific phases that need to perform work for each affected element of your UI.

      The following sections describe each phase and describe what happens when a state value is read within it.
  - id: live-compose-guide-phases-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#recommended_for_you
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: f60fcf292691a690b22699dc8d82eee69e49a3e118400003b32cf5e03601156f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      State and Jetpack Compose

      Lists and grids

      Kotlin for Jetpack Compose
  - id: live-compose-guide-phases-recomp-loop-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#recomp-loop
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: ebdd68d2980bc2f7e152877a392bd8935f36a43e3adf73f6a8d43cc5230ce2ee
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This guide previously mentioned that the phases of Compose are always invoked in the same order, and that there is no way to go backwards while in the same frame. However, that doesn't prohibit apps getting into composition loops across different frames. Consider this example:

      Box {
          var imageHeightPx by remember { mutableIntStateOf(0) }

          Image(
              painter = painterResource(R.drawable.rectangle),
              contentDescription = "I'm above the text",
              modifier = Modifier
                  .fillMaxWidth()
                  .onSizeChanged { size ->
                      // Don't do this
                      imageHeightPx = size.height
                  }
          )

          Text(
              text = "I'm below the image",
              modifier = Modifier.padding(
                  top = with(LocalDensity.current) { imageHeightPx.toDp() }
              )
          )
      }PhasesSnippets.kt

      This example implements a vertical column, with the image at the top, and then the text below it. It uses Modifier.onSizeChanged() to get the resolved size of the image, and then uses Modifier.padding() on the text to shift it down. The unnatural conversion from Px back to Dp already indicates that the code has some issue.

      The issue with this example is that the code doesn't arrive at the "final" layout within a single frame. The code relies on multiple frames happening, which performs unnecessary work, and results in UI jumping around on screen for the user.
  - id: live-compose-guide-phases-second-frame-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#second-frame
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: 4b3698237d389202656bf31e75e89169485cc9b72f18a97aae67989c7f3beacc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose initiates the second frame, triggered by the change in imageHeightPx's value. In this frame's composition phase, the state is read within the Box content block. The text is now provided with padding that accurately matches the image's height. During the layout phase, imageHeightPx is set again; however, no further recomposition is scheduled because the value remains consistent.

      This example may seem contrived, but be careful of this general pattern:

      Modifier.onSizeChanged(), onGloballyPositioned(), or some other layout operations

      Update some state

      Use that state as input to a layout modifier (padding(), height(), or similar)

      Potentially repeat

      The fix for the preceding sample is to use the proper layout primitives. The preceding example can be implemented with a Column(), but you may have a more complex example which requires something custom, which will require writing a custom layout. See the Custom layouts guide for more information.

      The general principle here is to have a single source of truth for multiple UI elements that should be measured and placed with regards to one another. Using a proper layout primitive or creating a custom layout means that the minimal shared parent serves as the source of truth that can coordinate the relation between multiple elements. Introducing a dynamic state breaks this principle.

      For more information about recomposition loops and how to avoid writing to state across phases, see Backwards writes in Compose.
  - id: live-compose-guide-phases-state-reads-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#state-reads
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: 819f9bc8ae4308786157dde176e62eadac6d0c0a202943af052db8fbd89b0fb0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When you read the value of a snapshot state during one of the phases listed previously, Compose automatically tracks what it was doing when it read the value. This tracking allows Compose to re-execute the reader when the state's value changes, and is the basis of state observability in Compose.

      You commonly create state using mutableStateOf() and then access it through one of two ways: by directly accessing the value property, or by using a Kotlin property delegate. You can read more about them in State in composables. For the purposes of this guide, a "state read" refers to either of those equivalent access methods.

      // State read without property delegate.
      val paddingState: MutableState<Dp> = remember { mutableStateOf(8.dp) }
      Text(
          text = "Hello",
          modifier = Modifier.padding(paddingState.value)
      )PhasesSnippets.kt

      // State read with property delegate.
      var padding: Dp by remember { mutableStateOf(8.dp) }
      Text(
          text = "Hello",
          modifier = Modifier.padding(padding)
      )PhasesSnippets.kt

      Under the hood of the property delegate, "getter" and "setter" functions are used to access and update the State's value. These getter and setter functions are only invoked when you reference the property as a value, and not when it is created, which is why the two ways described previously are equivalent.

      Each block of code that can be re-executed when a read state changes is a restart scope. Compose keeps track of state value changes and restart scopes in different phases.
  - id: live-compose-guide-phases-understand-phases-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/phases#understand-phases
    revision: web:compose-guide-phases:content@sha256:0a0338237fd92c9e8b7ea99bc210614ff0a4aec77382e2adb9cf57ab9b1609ea
    sha256: 70f8358db5664236a07c041ae6e94a1bcaa90b3a9de7ce3a56a9db89d1436b19
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: This section describes how the three Compose phases are executed for composables in greater detail.
compose:
  id: live-compose-guide-phases
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: live-compose-guide-phases-3-phases
      title: The three phases of a frame
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-3-phases-source
      relatedIds: []
    - id: live-compose-guide-phases-composition
      title: Composition
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-composition-source
      relatedIds: []
    - id: live-compose-guide-phases-drawing
      title: Drawing
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-drawing-source
      relatedIds: []
    - id: live-compose-guide-phases-first-frame
      title: First frame composition
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-first-frame-source
      relatedIds: []
    - id: live-compose-guide-phases-layout
      title: Layout
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-layout-source
      relatedIds: []
    - id: live-compose-guide-phases-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-main-content-source
      relatedIds: []
    - id: live-compose-guide-phases-offset-lambda
      title: Offset with lambda
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-offset-lambda-source
      relatedIds: []
    - id: live-compose-guide-phases-optimize-state-reads
      title: Optimize state reads
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-optimize-state-reads-source
      relatedIds: []
    - id: live-compose-guide-phases-phase1-comp
      title: "Phase 1: Composition"
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-phase1-comp-source
      relatedIds: []
    - id: live-compose-guide-phases-phase2-layout
      title: "Phase 2: Layout"
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-phase2-layout-source
      relatedIds: []
    - id: live-compose-guide-phases-phase3-drawing
      title: "Phase 3: Drawing"
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-phase3-drawing-source
      relatedIds: []
    - id: live-compose-guide-phases-phased-state-reads
      title: Phased state reads
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-phased-state-reads-source
      relatedIds: []
    - id: live-compose-guide-phases-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-phases-recomp-loop
      title: Recomposition loop (cyclic phase dependency)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-recomp-loop-source
      relatedIds: []
    - id: live-compose-guide-phases-second-frame
      title: Second frame composition
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-second-frame-source
      relatedIds: []
    - id: live-compose-guide-phases-state-reads
      title: State reads
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-state-reads-source
      relatedIds: []
    - id: live-compose-guide-phases-understand-phases
      title: Understand the phases
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-phases-understand-phases-source
      relatedIds: []
---

# Jetpack Compose phases

Public source: https://developer.android.com/develop/ui/compose/phases

## The three phases of a frame

Compose has three main phases:

Composition: What UI to show. Compose runs composable functions and creates a description of your UI.

Layout: Where to place UI. This phase consists of two steps: measurement and placement. Layout elements measure and place themselves and any child elements in 2D coordinates, for each node in the layout tree.

Drawing: How it renders. UI elements draw into a Canvas, usually a device screen.

Figure 1.

The three phases in which Compose transforms data into UI.

The order of these phases is generally the same, allowing data to flow in one direction from composition to layout to drawing to produce a frame (also known as unidirectional data flow). BoxWithConstraints, LazyColumn, and LazyRow are notable exceptions, where the composition of its children depends on the parent's layout phase.

Conceptually, each of these phases happens for every frame; however to optimize performance, Compose avoids repeating work that would compute the same results from the same inputs in all of these phases. Compose skips running a composable function if it can reuse a former result, and Compose UI doesn't re-layout or re-draw the entire tree if it doesn't have to. Compose performs only the minimum amount of work required to update the UI. This optimization is possible because Compose tracks state reads within the different phases.

Sources: [live-compose-guide-phases-3-phases-source](https://developer.android.com/develop/ui/compose/phases#3-phases)

## Composition

In the composition phase, the Compose runtime executes composable functions and outputs a tree structure that represents your UI. This UI tree consists of layout nodes that contain all the information needed for the next phases, as shown in the following video:

Figure 2. The tree representing your UI that is created in the composition phase.

A subsection of the code and UI tree looks like the following:

Figure 3.

A subsection of a UI tree with the corresponding code.

In these examples, each composable function in the code maps to a single layout node in the UI tree. In more complex examples, composables can contain logic and control flow, and produce a different tree given different states.

Sources: [live-compose-guide-phases-composition-source](https://developer.android.com/develop/ui/compose/phases#composition)

## Drawing

In the drawing phase, the tree is traversed again from top to bottom, and each node draws itself on the screen in turn.

Figure 5. The drawing phase draws the pixels on the screen.

Using the previous example, the tree content is drawn in the following way:

The Row draws any content it might have, such as a background color.

The Image draws itself.

The Column draws itself.

The first and second Text draw themselves, respectively.

Figure 6. A UI tree and its drawn representation.

Sources: [live-compose-guide-phases-drawing-source](https://developer.android.com/develop/ui/compose/phases#drawing)

## First frame composition

During the composition phase of the first frame, imageHeightPx is initially 0. Consequently, the code provides the text with Modifier.padding(top = 0). The subsequent layout phase invokes the onSizeChanged modifier's callback, which updates imageHeightPx to the image's actual height. Compose then schedules a recomposition for the next frame. However, during the current drawing phase, the text renders with a padding of 0, as the updated imageHeightPx value is not yet reflected.

Sources: [live-compose-guide-phases-first-frame-source](https://developer.android.com/develop/ui/compose/phases#first-frame)

## Layout

In the layout phase, Compose uses the UI tree produced in the composition phase as input. The collection of layout nodes contain all the information needed to decide on each node's size and location in 2D space.

Figure 4. The measurement and placement of each layout node in the UI tree during the layout phase.

During the layout phase, the tree is traversed using the following three-step algorithm:

Measure children: A node measures its children if any exist.

Decide own size: Based on these measurements, a node decides on its own size.

Place children: Each child node is placed relative to a node's own position.

At the end of this phase, each layout node has:

An assigned width and height

An x, y coordinate where it should be drawn

Recall the UI tree from the previous section:

For this tree, the algorithm works as follows:

The Row measures its children, Image and Column.

The Image is measured. It doesn't have any children, so it decides its own size and reports the size back to the Row.

The Column is measured next. It measures its own children (two Text composables) first.

The first Text is measured. It doesn't have any children so it decides its own size and reports its size back to the Column. The second Text is measured. It doesn't have any children so it decides its own size and reports it back to the Column.

The Column uses the child measurements to decide its own size. It uses the maximum child width and the sum of the height of its children.

The Column places its children relative to itself, putting them beneath each other vertically.

The Row uses the child measurements to decide its own size. It uses the maximum child height and the sum of the widths of its children. It then places its children.

Note that each node was visited only once. The Compose runtime requires only one pass through the UI tree to measure and place all the nodes, which improves performance. When the number of nodes in the tree increases, the time spent traversing it increases in a linear fashion. In contrast, if each node was visited multiple times, the traversal time increases exponentially.

Sources: [live-compose-guide-phases-layout-source](https://developer.android.com/develop/ui/compose/phases#layout)

## Introduction

Like most other UI toolkits, Compose renders a frame through several distinct phases. For example, the Android View system has three main phases: measure, layout, and drawing. Compose is very similar but has an important additional phase called composition at the start.

The Compose documentation describes composition in Thinking in Compose and State and Jetpack Compose.

Sources: [live-compose-guide-phases-main-content-source](https://developer.android.com/develop/ui/compose/phases#main-content)

## Offset with lambda

There is another version of the offset modifier available: Modifier.offset(offset: Density.() -> IntOffset).

This version takes a lambda parameter, where the resulting offset is returned by the lambda block. Update the code to use it:

Box {
    val listState = rememberLazyListState()

    Image(
        // ...
        Modifier.offset {
            // State read of firstVisibleItemScrollOffset in Layout
            IntOffset(x = 0, y = listState.firstVisibleItemScrollOffset / 2)
        }
    )

    LazyColumn(state = listState) {
        // ...
    }
}PhasesSnippets.kt

So why is this more performant? The lambda block you provide to the modifier is invoked during the layout phase (specifically, during the layout phase's placement step), meaning that the firstVisibleItemScrollOffset state is no longer read during composition. Because Compose tracks when state is read, this change means that if the firstVisibleItemScrollOffset's value changes, Compose only has to restart the layout and drawing phases.

Of course, it is often absolutely necessary to read states in the composition phase. Even so, there are cases where you can minimize the number of recompositions by filtering state changes. For more information about this, see derivedStateOf: convert one or multiple state objects into another state.

Sources: [live-compose-guide-phases-offset-lambda-source](https://developer.android.com/develop/ui/compose/phases#offset-lambda)

## Optimize state reads

Because Compose performs localized state read tracking, you can minimize the amount of work performed by reading each state in an appropriate phase.

Consider the following example. This example has an Image() which uses the offset modifier to offset its final layout position, resulting in a parallax effect as the user scrolls.

Box {
    val listState = rememberLazyListState()

    Image(
        // ...
        // Non-optimal implementation!
        Modifier.offset(
            with(LocalDensity.current) {
                // State read of firstVisibleItemScrollOffset in composition
                (listState.firstVisibleItemScrollOffset / 2).toDp()
            }
        )
    )

    LazyColumn(state = listState) {
        // ...
    }
}PhasesSnippets.kt

This code works, but results in suboptimal performance. As written, the code reads the value of the firstVisibleItemScrollOffset state and passes it to the Modifier.offset(offset: Dp) function. As the user scrolls, the firstVisibleItemScrollOffset's value will change. As you've learned, Compose tracks any state reads so that it can restart (re-invoke) the reading code, which in this example is the content of the Box.

This is an example of reading a state within the composition phase. This is not necessarily a bad thing, and in fact is the basis of recomposition, allowing data changes to emit new UI.

Key point: This example is suboptimal because every scroll event results in the entire composable content being reevaluated, measured, laid out, and finally drawn. You trigger the Compose phase on every scroll even though the content shown hasn't changed, only its position. You can optimize the state read to only re-trigger the layout phase.

Sources: [live-compose-guide-phases-optimize-state-reads-source](https://developer.android.com/develop/ui/compose/phases#optimize-state-reads)

## Phase 1: Composition

State reads within a @Composable function or lambda block affect composition and potentially the subsequent phases. When the state's value changes, the recomposer schedules reruns of all the composable functions which read that state's value. Note that the runtime may decide to skip some or all of the composable functions if the inputs haven't changed. See Skipping if the inputs haven't changed for more information.

Depending on the result of composition, Compose UI runs the layout and drawing phases. It might skip these phases if the content remains the same and the size and the layout won't change.

var padding by remember { mutableStateOf(8.dp) }
Text(
    text = "Hello",
    // The `padding` state is read in the composition phase
    // when the modifier is constructed.
    // Changes in `padding` will invoke recomposition.
    modifier = Modifier.padding(padding)
)PhasesSnippets.kt

Sources: [live-compose-guide-phases-phase1-comp-source](https://developer.android.com/develop/ui/compose/phases#phase1-comp)

## Phase 2: Layout

The layout phase consists of two steps: measurement and placement. The measurement step runs the measure lambda passed to the Layout composable, the MeasureScope.measure method of the LayoutModifier interface, among others. The placement step runs the placement block of the layout function, the lambda block of Modifier.offset { … }, and similar functions.

State reads during each of these steps affect the layout and potentially the drawing phase. When the state's value changes, Compose UI schedules the layout phase. It also runs the drawing phase if size or position has changed.

var offsetX by remember { mutableStateOf(8.dp) }
Text(
    text = "Hello",
    modifier = Modifier.offset {
        // The `offsetX` state is read in the placement step
        // of the layout phase when the offset is calculated.
        // Changes in `offsetX` restart the layout.
        IntOffset(offsetX.roundToPx(), 0)
    }
)PhasesSnippets.kt

Sources: [live-compose-guide-phases-phase2-layout-source](https://developer.android.com/develop/ui/compose/phases#phase2-layout)

## Phase 3: Drawing

State reads during drawing code affect the drawing phase. Common examples include Canvas(), Modifier.drawBehind, and Modifier.drawWithContent. When the state's value changes, Compose UI runs only the draw phase.

var color by remember { mutableStateOf(Color.Red) }
Canvas(modifier = modifier) {
    // The `color` state is read in the drawing phase
    // when the canvas is rendered.
    // Changes in `color` restart the drawing.
    drawRect(color)
}PhasesSnippets.kt

Sources: [live-compose-guide-phases-phase3-drawing-source](https://developer.android.com/develop/ui/compose/phases#phase3-drawing)

## Phased state reads

As mentioned previously, there are three main phases in Compose, and Compose tracks what state is read within each of them. This allows Compose to notify only the specific phases that need to perform work for each affected element of your UI.

The following sections describe each phase and describe what happens when a state value is read within it.

Sources: [live-compose-guide-phases-phased-state-reads-source](https://developer.android.com/develop/ui/compose/phases#phased-state-reads)

## Recommended for you

Note: link text is displayed when JavaScript is off

State and Jetpack Compose

Lists and grids

Kotlin for Jetpack Compose

Sources: [live-compose-guide-phases-recommended-for-you-source](https://developer.android.com/develop/ui/compose/phases#recommended_for_you)

## Recomposition loop (cyclic phase dependency)

This guide previously mentioned that the phases of Compose are always invoked in the same order, and that there is no way to go backwards while in the same frame. However, that doesn't prohibit apps getting into composition loops across different frames. Consider this example:

Box {
    var imageHeightPx by remember { mutableIntStateOf(0) }

    Image(
        painter = painterResource(R.drawable.rectangle),
        contentDescription = "I'm above the text",
        modifier = Modifier
            .fillMaxWidth()
            .onSizeChanged { size ->
                // Don't do this
                imageHeightPx = size.height
            }
    )

    Text(
        text = "I'm below the image",
        modifier = Modifier.padding(
            top = with(LocalDensity.current) { imageHeightPx.toDp() }
        )
    )
}PhasesSnippets.kt

This example implements a vertical column, with the image at the top, and then the text below it. It uses Modifier.onSizeChanged() to get the resolved size of the image, and then uses Modifier.padding() on the text to shift it down. The unnatural conversion from Px back to Dp already indicates that the code has some issue.

The issue with this example is that the code doesn't arrive at the "final" layout within a single frame. The code relies on multiple frames happening, which performs unnecessary work, and results in UI jumping around on screen for the user.

Sources: [live-compose-guide-phases-recomp-loop-source](https://developer.android.com/develop/ui/compose/phases#recomp-loop)

## Second frame composition

Compose initiates the second frame, triggered by the change in imageHeightPx's value. In this frame's composition phase, the state is read within the Box content block. The text is now provided with padding that accurately matches the image's height. During the layout phase, imageHeightPx is set again; however, no further recomposition is scheduled because the value remains consistent.

This example may seem contrived, but be careful of this general pattern:

Modifier.onSizeChanged(), onGloballyPositioned(), or some other layout operations

Update some state

Use that state as input to a layout modifier (padding(), height(), or similar)

Potentially repeat

The fix for the preceding sample is to use the proper layout primitives. The preceding example can be implemented with a Column(), but you may have a more complex example which requires something custom, which will require writing a custom layout. See the Custom layouts guide for more information.

The general principle here is to have a single source of truth for multiple UI elements that should be measured and placed with regards to one another. Using a proper layout primitive or creating a custom layout means that the minimal shared parent serves as the source of truth that can coordinate the relation between multiple elements. Introducing a dynamic state breaks this principle.

For more information about recomposition loops and how to avoid writing to state across phases, see Backwards writes in Compose.

Sources: [live-compose-guide-phases-second-frame-source](https://developer.android.com/develop/ui/compose/phases#second-frame)

## State reads

When you read the value of a snapshot state during one of the phases listed previously, Compose automatically tracks what it was doing when it read the value. This tracking allows Compose to re-execute the reader when the state's value changes, and is the basis of state observability in Compose.

You commonly create state using mutableStateOf() and then access it through one of two ways: by directly accessing the value property, or by using a Kotlin property delegate. You can read more about them in State in composables. For the purposes of this guide, a "state read" refers to either of those equivalent access methods.

// State read without property delegate.
val paddingState: MutableState<Dp> = remember { mutableStateOf(8.dp) }
Text(
    text = "Hello",
    modifier = Modifier.padding(paddingState.value)
)PhasesSnippets.kt

// State read with property delegate.
var padding: Dp by remember { mutableStateOf(8.dp) }
Text(
    text = "Hello",
    modifier = Modifier.padding(padding)
)PhasesSnippets.kt

Under the hood of the property delegate, "getter" and "setter" functions are used to access and update the State's value. These getter and setter functions are only invoked when you reference the property as a value, and not when it is created, which is why the two ways described previously are equivalent.

Each block of code that can be re-executed when a read state changes is a restart scope. Compose keeps track of state value changes and restart scopes in different phases.

Sources: [live-compose-guide-phases-state-reads-source](https://developer.android.com/develop/ui/compose/phases#state-reads)

## Understand the phases

This section describes how the three Compose phases are executed for composables in greater detail.

Sources: [live-compose-guide-phases-understand-phases-source](https://developer.android.com/develop/ui/compose/phases#understand-phases)
