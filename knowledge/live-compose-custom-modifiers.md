---
type: reference
title: Create custom modifiers
description: "Public source: https://developer.android.com/develop/ui/compose/custom-modifiers"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-custom-modifiers-animate-modifier-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#animate-modifier
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: 307de2003c094da02713d5830271c79089de1889a1375ebaf903349e958138de
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifier.Node implementations have access to a coroutineScope. This allows for use of the Compose Animatable APIs. For example, this snippet modifies the CircleNode shown previously to fade in and out repeatedly:

      class CircleNode(var color: Color) : Modifier.Node(), DrawModifierNode {
          private lateinit var alpha: Animatable<Float, AnimationVector1D>

          override fun ContentDrawScope.draw() {
              drawCircle(color = color, alpha = alpha.value)
              drawContent()
          }

          override fun onAttach() {
              alpha = Animatable(1f)
              coroutineScope.launch {
                  alpha.animateTo(
                      0f,
                      infiniteRepeatable(tween(1000), RepeatMode.Reverse)
                  ) {
                  }
              }
          }
      }CustomModifierSnippets.kt
  - id: live-compose-custom-modifiers-autoinvalidation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#autoinvalidation
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: 480e98668b4b656eec4ea6b811a15c2eef9fdbe77660fcee23a2e8eda7703142
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifier.Node nodes automatically invalidate when their corresponding ModifierNodeElement calls update. For complex modifiers, you might want to opt out of this behavior to gain more fine-grained control over when your modifier invalidates phases.

      This is particularly useful if your custom modifier modifies both layout and draw. Opting out of auto-invalidation lets you just invalidate draw when only draw-related properties, such as color, change. This avoids invalidating layout and can improve your modifier's performance.

      A hypothetical example of this is shown in the following example with a modifier that has a color, size, and onClick lambda as properties. This modifier invalidates only what is required, skipping any unneeded invalidation:

      class SampleInvalidatingNode(
          var color: Color,
          var size: IntSize,
          var onClick: () -> Unit
      ) : DelegatingNode(), LayoutModifierNode, DrawModifierNode {
          override val shouldAutoInvalidate: Boolean
              get() = false

          private val clickableNode = delegate(
              ClickablePointerInputNode(onClick)
          )

          fun update(color: Color, size: IntSize, onClick: () -> Unit) {
              if (this.color != color) {
                  this.color = color
                  // Only invalidate draw when color changes
                  invalidateDraw()
              }

              if (this.size != size) {
                  this.size = size
                  // Only invalidate layout when size changes
                  invalidateMeasurement()
              }

              // If only onClick changes, we don't need to invalidate anything
              clickableNode.update(onClick)
          }

          override fun ContentDrawScope.draw() {
              drawRect(color)
          }

          override fun MeasureScope.measure(
              measurable: Measurable,
              constraints: Constraints
          ): MeasureResult {
              val size = constraints.constrain(size)
              val placeable = measurable.measure(constraints)
              return layout(size.width, size.height) {
                  placeable.place(0, 0)
              }
          }
      }CustomModifierSnippets.kt
  - id: live-compose-custom-modifiers-called-within-function-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#called-within-function
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: 861cb1706d41282283eb03112fbe3a1c3e342f502595071e21c278071a27426e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Like all composable functions, a composable factory modifier must be called from within composition. This limits where a modifier can be hoisted to, as it can never be hoisted out of composition. In comparison, non-composable modifier factories can be hoisted out of composable functions to allow easier reuse and improve performance:

      val extractedModifier = Modifier.background(Color.Red) // Hoisted to save allocations

      @Composable
      fun Modifier.composableModifier(): Modifier {
          val color = LocalContentColor.current.copy(alpha = 0.5f)
          return this then Modifier.background(color)
      }

      @Composable
      fun MyComposable() {
          val composedModifier = Modifier.composableModifier() // Cannot be extracted any higher
      }CustomModifierSnippets.kt
  - id: live-compose-custom-modifiers-chain-existing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#chain-existing
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: 0df8d715834beea6379dca75957b2685fe847dca9510b29f7b243f1166c0d62e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      It is often possible to create custom modifiers by using existing modifiers. For example, Modifier.clip() is implemented using the graphicsLayer modifier. This strategy uses existing modifier elements, and you provide your own custom modifier factory.

      Before implementing your own custom modifier, see if you can use the same strategy.

      fun Modifier.clip(shape: Shape) = graphicsLayer(shape = shape, clip = true)CustomModifierSnippets.kt

      Or, if you find you are repeating the same group of modifiers often, you can wrap them into your own modifier:

      fun Modifier.myBackground(color: Color) = padding(16.dp)
          .clip(RoundedCornerShape(8.dp))
          .background(color)CustomModifierSnippets.kt
  - id: live-compose-custom-modifiers-common-situations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#common-situations
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: 62216f77650c0b379bdcf0c3fbb4bada70f70ea4da69bfaf00a9d11e34c14fa7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: When creating custom modifiers with Modifier.Node, here are some common situations you might encounter.
  - id: live-compose-custom-modifiers-complete-example-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#complete-example
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: e9df0934dd45b3b852e65089677fa21095d6c8d70c239628d60629e0a23be645
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      These three parts come together to create the custom modifier to draw a circle using the Modifier.Node APIs:

      // Modifier factory
      fun Modifier.circle(color: Color) = this then CircleElement(color)

      // ModifierNodeElement
      private data class CircleElement(val color: Color) : ModifierNodeElement<CircleNode>() {
          override fun create() = CircleNode(color)

          override fun update(node: CircleNode) {
              node.color = color
          }
      }

      // Modifier.Node
      private class CircleNode(var color: Color) : DrawModifierNode, Modifier.Node() {
          override fun ContentDrawScope.draw() {
              drawCircle(color)
          }
      }CustomModifierSnippets.kt
  - id: live-compose-custom-modifiers-create-custom-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#create-custom
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: 782ae7e8927f79015e64bf409e2c8ddb7cfafe2093c80712809226a22f539c42
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can also create a custom modifier using a composable function to pass values to an existing modifier. This is known as a composable modifier factory.

      Using a composable modifier factory to create a modifier also lets you use higher level compose APIs, such as animate*AsState and other Compose state backed animation APIs. For example, the following snippet shows a modifier that animates an alpha change when enabled/disabled:

      @Composable
      fun Modifier.fade(enable: Boolean): Modifier {
          val alpha by animateFloatAsState(if (enable) 0.5f else 1.0f)
          return this then Modifier.graphicsLayer { this.alpha = alpha }
      }CustomModifierSnippets.kt

      If your custom modifier is a convenience method to provide default values from a CompositionLocal, the easiest way to implement this is to use a composable modifier factory:

      @Composable
      fun Modifier.fadedBackground(): Modifier {
          val color = LocalContentColor.current
          return this then Modifier.background(color.copy(alpha = 0.5f))
      }CustomModifierSnippets.kt

      This approach has some caveats, which are detailed in the following sections.
  - id: live-compose-custom-modifiers-implement-custom-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#implement-custom
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: 19717e755a7fdcbb125e021a91d1fe4938d9d7c370027b16532135b5e24d22e2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Modifier.Node is a lower level API for creating modifiers in Compose. It is the same API that Compose implements its own modifiers in and is the most performant way to create custom modifiers.
  - id: live-compose-custom-modifiers-implement-modifier-node-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#implement-modifier-node
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: 4668253b09804760daf0452fa7347de304eb8d868fdecb74452525064bfde9d1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are three parts to implementing a custom modifier using Modifier.Node:

      A Modifier.Node implementation that holds the logic and state of your modifier.

      A ModifierNodeElement that creates and updates modifier node instances.

      An optional modifier factory, as detailed previously.

      ModifierNodeElement classes are stateless and new instances are allocated each recomposition, whereas Modifier.Node classes can be stateful and will survive across multiple recompositions, and can even be reused.

      The following section describes each part and shows an example of building a custom modifier to draw a circle.
  - id: live-compose-custom-modifiers-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#main-content
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: 1d5a3879272a50ba8f97cb2078a2f10c3fd0f469e4d5df8e774f99f544c43f01
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose provides many modifiers for common behaviors right out of the box, but you can also create your own custom modifiers.

      Modifiers have multiple parts:

      A modifier factory This is an extension function on Modifier, which provides an idiomatic API for your modifier and allows modifiers to be chained together. The modifier factory produces the modifier elements used by Compose to modify your UI.

      A modifier element This is where you can implement the behavior of your modifier.

      There are multiple ways to implement a custom modifier depending on the functionality needed. Often, the simplest way to implement a custom modifier is to implement a custom modifier factory that combines other already defined modifier factories. If you need more custom behavior, implement the modifier element using the Modifier.Node APIs, which are lower level but provide more flexibility.
  - id: live-compose-custom-modifiers-modifier-factory-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#modifier-factory
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: 128c94f6f6e239e4f90031e0633ae1db5fab76ed98178f2a5fe1e3346cec38c0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This is the public API surface of your modifier. Most implementations create the modifier element and add it to the modifier chain:

      // Modifier factory
      fun Modifier.circle(color: Color) = this then CircleElement(color)CustomModifierSnippets.kt
  - id: live-compose-custom-modifiers-modifiernode-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#modifiernode
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: c757094626c9ca47f3de48c7172f317d5334c53fa2238e37c8ac5d80b41e5296
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Sample

      Nodes are automatically invalidated when update is called on their corresponding element. Because our example is a DrawModifierNode, any time update is called on the element, the node triggers a redraw and its color correctly updates. It is possible to opt out of auto-invalidation, as detailed in the Opt out of node auto-invalidation section.
  - id: live-compose-custom-modifiers-modifiernode-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#modifiernode
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: a920bc419e98dee59cbe4af00d16d7a200106cb099f003ae20508dad0ef74111
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The Modifier.Node implementation (in this example, CircleNode) implements the functionality of your custom modifier.

      // Modifier.Node
      private class CircleNode(var color: Color) : DrawModifierNode, Modifier.Node() {
          override fun ContentDrawScope.draw() {
              drawCircle(color)
          }
      }CustomModifierSnippets.kt

      In this example, it draws the circle with the color passed in to the modifier function.

      A node implements Modifier.Node as well as zero or more node types. There are different node types based on the functionality your modifier requires. The preceding example needs to be able to draw, so it implements DrawModifierNode, which lets it override the draw method.

      The available types are as follows:

      Node Usage Sample Link LayoutModifierNode A Modifier.Node that changes how its wrapped content is measured and laid out. Sample DrawModifierNode A Modifier.Node that draws into the space of the layout. Sample CompositionLocalConsumerModifierNode Implementing this interface lets your Modifier.Node read composition locals. Sample SemanticsModifierNode A Modifier.Node that adds semantics key/value for use in testing, accessibility, and similar use cases. Sample PointerInputModifierNode A Modifier.Node that receives PointerInputChanges. Sample ParentDataModifierNode A Modifier.Node that provides data to the parent layout. Sample LayoutAwareModifierNode A Modifier.Node which receives onMeasured and onPlaced callbacks. Sample GlobalPositionAwareModifierNode A Modifier.Node which receives an onGloballyPositioned callback with the final LayoutCoordinates of the layout when the global position of the content may have changed. Sample ObserverModifierNode Modifier.Nodes that implement ObserverNode can provide their own implementation of onObservedReadsChanged that will be called in response to changes to snapshot objects read within an observeReads block. Sample DelegatingNode A Modifier.Node which is able to delegate work to other Modifier.Node instances.This can be useful to compose multiple node implementations into one. Sample TraversableNode Allows Modifier.Node classes to traverse up/down the node tree for classes of the same type or for a particular key.
  - id: live-compose-custom-modifiers-never-skipped-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#never-skipped
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: 0568b7484449a9f8c3b2386d719490cb3784feec696ff8b18f727ad3a5e3f778
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Composable factory modifiers are never skipped because composable functions that have return values cannot be skipped. This means your modifier function will be called on every recomposition, which may be expensive if it recomposes frequently.
  - id: live-compose-custom-modifiers-node-element-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#node-element
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: 0c2dcd43a17107daa18f53ddc4827b688661fd59287aba9718062a37773d4df0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A ModifierNodeElement is an immutable class that holds the data to create or update your custom modifier:

      // ModifierNodeElement
      private data class CircleElement(val color: Color) : ModifierNodeElement<CircleNode>() {
          override fun create() = CircleNode(color)

          override fun update(node: CircleNode) {
              node.color = color
          }
      }CustomModifierSnippets.kt

      ModifierNodeElement implementations need to override the following methods:

      create: This is the function that instantiates your modifier node. This gets called to create the node when your modifier is first applied. Usually, this amounts to constructing the node and configuring it with the parameters that were passed in to the modifier factory.

      update: This function is called whenever this modifier is provided in the same spot this node already exists, but a property has changed. This is determined by the equals method of the class. The modifier node that was previously created is sent as a parameter to the update call. At this point, you should update the nodes' properties to correspond with the updated parameters. The ability for nodes to be reused this way is key to the performance gains that Modifier.Node brings; therefore, you must update the existing node rather than creating a new one in the update method. In our circle example, the color of the node is updated.

      Additionally, ModifierNodeElement implementations also need to implement equals and hashCode. update will only get called if an equals comparison with the previous element returns false.

      The preceding example uses a data class to achieve this. These methods are used to check if a node needs updating or not. If your element has properties that don't contribute to whether a node needs to be updated, or you want to avoid data classes for binary compatibility reasons, then you can manually implement equals and hashCode, for example, the padding modifier element.
  - id: live-compose-custom-modifiers-reference-composition-locals-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#reference-composition-locals
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: e04d9c710f899da7b91c366b662285eda045c8b97a9a0df0868a2503963ead1a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      defaultFlingBehavior.flingDecay = splineBasedDecay(density)
          }
      }CustomModifierSnippets.kt
  - id: live-compose-custom-modifiers-reference-composition-locals-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#reference-composition-locals
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: d2e2e073b0092a2c702f282674beb2b0f6c69ab5b77143a528faec49d6db5bdb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifier.Node modifiers don't automatically observe changes to Compose state objects, like CompositionLocal. The advantage Modifier.Node modifiers have over modifiers that are just created with a composable factory is that they can read the value of the composition local from where the modifier is used in your UI tree, not where the modifier is allocated, using currentValueOf.

      However, modifier node instances don't automatically observe state changes. To automatically react to a composition local changing, you can read its current value inside a scope:

      DrawModifierNode: ContentDrawScope

      LayoutModifierNode: MeasureScope & IntrinsicMeasureScope

      SemanticsModifierNode: SemanticsPropertyReceiver

      This example observes the value of LocalContentColor to draw a background based on its color. As ContentDrawScope does observe snapshot changes, this automatically redraws when the value of LocalContentColor changes:

      class BackgroundColorConsumerNode :
          Modifier.Node(),
          DrawModifierNode,
          CompositionLocalConsumerModifierNode {
          override fun ContentDrawScope.draw() {
              val currentColor = currentValueOf(LocalContentColor)
              drawRect(color = currentColor)
              drawContent()
          }
      }CustomModifierSnippets.kt

      To react to state changes outside of a scope and automatically update your modifier, use an ObserverModifierNode.

      For example, Modifier.scrollable uses this technique to observe changes in LocalDensity. A simplified example is shown in the following example:

      class ScrollableNode :
          Modifier.Node(),
          ObserverModifierNode,
          CompositionLocalConsumerModifierNode {

          // Place holder fling behavior, we'll initialize it when the density is available.
          val defaultFlingBehavior = DefaultFlingBehavior(splineBasedDecay(UnityDensity))

          override fun onAttach() {
              updateDefaultFlingBehavior()
              observeReads { currentValueOf(LocalDensity) } // monitor change in Density
          }

          override fun onObservedReadsChanged() {
              // if density changes, update the default fling behavior.
              updateDefaultFlingBehavior()
          }

          private fun updateDefaultFlingBehavior() {
              val density = currentValueOf(LocalDensity)
  - id: live-compose-custom-modifiers-resolved-call-site-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#resolved-call-site
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: d264b6feb46de73e029a79899c83235d63533d1aeb603bfd3874f6a228e262ae
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When creating a custom modifier using a composable modifier factory, composition locals take the value from the composition tree where they are created, not used. This can lead to unexpected results. For example, consider the composition local modifier example mentioned previously, implemented slightly differently using a composable function:

      @Composable
      fun Modifier.myBackground(): Modifier {
          val color = LocalContentColor.current
          return this then Modifier.background(color.copy(alpha = 0.5f))
      }

      @Composable
      fun MyScreen() {
          CompositionLocalProvider(LocalContentColor provides Color.Green) {
              // Background modifier created with green background
              val backgroundModifier = Modifier.myBackground()

              // LocalContentColor updated to red
              CompositionLocalProvider(LocalContentColor provides Color.Red) {

                  // Box will have green background, not red as expected.
                  Box(modifier = backgroundModifier)
              }
          }
      }CustomModifierSnippets.kt

      If this is not how you expect your modifier to work, use a custom Modifier.Node instead, as composition locals will be correctly resolved at the usage site and can be safely hoisted.
  - id: live-compose-custom-modifiers-share-state-delegation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#share-state-delegation
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: e56223e0b0dce56c21f940beffe1c26f0699d127e31080ba2df56193e0c40850
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifier.Node modifiers can delegate to other nodes. There are many use cases for this, such as extracting common implementations across different modifiers, but it can also be used to share common state across modifiers.

      For example, a basic implementation of a clickable modifier node that shares interaction data:

      class ClickableNode : DelegatingNode() {
          val interactionData = InteractionData()
          val focusableNode = delegate(
              FocusableNode(interactionData)
          )
          val indicationNode = delegate(
              IndicationNode(interactionData)
          )
      }CustomModifierSnippets.kt
  - id: live-compose-custom-modifiers-zero-parameters-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/custom-modifiers#zero-parameters
    revision: web:compose-custom-modifiers:content@sha256:6d47aa98da9dac6d00cc852330bd3e1d09fbafe17c6b381cc6d47850dae4cee7
    sha256: e5fca1a3b42130bdc6263f50c45ec21e8668550ca506ee2a6e381c0941d3a448
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If your modifier has no parameters, then it never needs to update and, furthermore, doesn't need to be a data class. The following is a sample implementation of a modifier that applies a fixed amount of padding to a composable:

      fun Modifier.fixedPadding() = this then FixedPaddingElement

      data object FixedPaddingElement : ModifierNodeElement<FixedPaddingNode>() {
          override fun create() = FixedPaddingNode()
          override fun update(node: FixedPaddingNode) {}
      }

      class FixedPaddingNode : LayoutModifierNode, Modifier.Node() {
          private val PADDING = 16.dp

          override fun MeasureScope.measure(
              measurable: Measurable,
              constraints: Constraints
          ): MeasureResult {
              val paddingPx = PADDING.roundToPx()
              val horizontal = paddingPx * 2
              val vertical = paddingPx * 2

              val placeable = measurable.measure(constraints.offset(-horizontal, -vertical))

              val width = constraints.constrainWidth(placeable.width + horizontal)
              val height = constraints.constrainHeight(placeable.height + vertical)
              return layout(width, height) {
                  placeable.place(paddingPx, paddingPx)
              }
          }
      }CustomModifierSnippets.kt
compose:
  id: live-compose-custom-modifiers
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.Modifier.Node
  sections:
    - id: live-compose-custom-modifiers-animate-modifier
      title: Animate a modifier
      aliases:
        - androidx.compose.ui.Modifier.Node
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-animate-modifier-source
      relatedIds: []
    - id: live-compose-custom-modifiers-autoinvalidation
      title: Opt out of node auto-invalidation
      aliases:
        - androidx.compose.ui.Modifier.Node
        - androidx.compose.ui.node.ModifierNodeElement
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-autoinvalidation-source
      relatedIds: []
    - id: live-compose-custom-modifiers-called-within-function
      title: Composable function modifiers must be called within a composable function
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-called-within-function-source
      relatedIds: []
    - id: live-compose-custom-modifiers-chain-existing
      title: Chain existing modifiers together
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-chain-existing-source
      relatedIds: []
    - id: live-compose-custom-modifiers-common-situations
      title: Common situations using Modifier.Node
      aliases:
        - androidx.compose.ui.Modifier.Node
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-common-situations-source
      relatedIds: []
    - id: live-compose-custom-modifiers-complete-example
      title: Complete example
      aliases:
        - androidx.compose.ui.Modifier.Node
        - androidx.compose.ui.node.ModifierNodeElement
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-complete-example-source
      relatedIds: []
    - id: live-compose-custom-modifiers-create-custom
      title: Create a custom modifier using a composable modifier factory
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-create-custom-source
      relatedIds: []
    - id: live-compose-custom-modifiers-implement-custom
      title: Implement custom modifier behavior using Modifier.Node
      aliases:
        - androidx.compose.ui.Modifier.Node
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-implement-custom-source
      relatedIds: []
    - id: live-compose-custom-modifiers-implement-modifier-node
      title: Implement a custom modifier using Modifier.Node
      aliases:
        - androidx.compose.ui.Modifier.Node
        - androidx.compose.ui.node.ModifierNodeElement
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-implement-modifier-node-source
      relatedIds: []
    - id: live-compose-custom-modifiers-main-content
      title: Introduction
      aliases:
        - androidx.compose.ui.Modifier.Node
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-main-content-source
      relatedIds: []
    - id: live-compose-custom-modifiers-modifier-factory
      title: Modifier factory
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-modifier-factory-source
      relatedIds: []
    - id: live-compose-custom-modifiers-modifiernode
      title: Modifier.Node
      aliases:
        - androidx.compose.ui.Modifier.Node
        - androidx.compose.ui.node.CompositionLocalConsumerModifierNode
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-modifiernode-source
      relatedIds: []
    - id: live-compose-custom-modifiers-modifiernode-2
      title: Modifier.Node
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-modifiernode-2-source
      relatedIds: []
    - id: live-compose-custom-modifiers-never-skipped
      title: Composable function modifiers are never skipped
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-never-skipped-source
      relatedIds: []
    - id: live-compose-custom-modifiers-node-element
      title: ModifierNodeElement
      aliases:
        - androidx.compose.ui.Modifier.Node
        - androidx.compose.ui.node.ModifierNodeElement
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-node-element-source
      relatedIds: []
    - id: live-compose-custom-modifiers-reference-composition-locals
      title: Reference composition locals
      aliases:
        - androidx.compose.ui.Modifier.Node
        - androidx.compose.ui.node.CompositionLocalConsumerModifierNode
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-reference-composition-locals-source
      relatedIds: []
    - id: live-compose-custom-modifiers-reference-composition-locals-2
      title: Reference composition locals
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-reference-composition-locals-2-source
      relatedIds: []
    - id: live-compose-custom-modifiers-resolved-call-site
      title: CompositionLocal values are resolved at the call site of the modifier factory
      aliases:
        - androidx.compose.ui.Modifier.Node
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-resolved-call-site-source
      relatedIds: []
    - id: live-compose-custom-modifiers-share-state-delegation
      title: Share state between modifiers using delegation
      aliases:
        - androidx.compose.ui.Modifier.Node
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-share-state-delegation-source
      relatedIds: []
    - id: live-compose-custom-modifiers-zero-parameters
      title: Zero parameters
      aliases:
        - androidx.compose.ui.Modifier.Node
        - androidx.compose.ui.node.ModifierNodeElement
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-zero-parameters-source
      relatedIds: []
---

# Create custom modifiers

Public source: https://developer.android.com/develop/ui/compose/custom-modifiers

## Animate a modifier

Modifier.Node implementations have access to a coroutineScope. This allows for use of the Compose Animatable APIs. For example, this snippet modifies the CircleNode shown previously to fade in and out repeatedly:

class CircleNode(var color: Color) : Modifier.Node(), DrawModifierNode {
    private lateinit var alpha: Animatable<Float, AnimationVector1D>

    override fun ContentDrawScope.draw() {
        drawCircle(color = color, alpha = alpha.value)
        drawContent()
    }

    override fun onAttach() {
        alpha = Animatable(1f)
        coroutineScope.launch {
            alpha.animateTo(
                0f,
                infiniteRepeatable(tween(1000), RepeatMode.Reverse)
            ) {
            }
        }
    }
}CustomModifierSnippets.kt

Sources: [live-compose-custom-modifiers-animate-modifier-source](https://developer.android.com/develop/ui/compose/custom-modifiers#animate-modifier)

## Opt out of node auto-invalidation

Modifier.Node nodes automatically invalidate when their corresponding ModifierNodeElement calls update. For complex modifiers, you might want to opt out of this behavior to gain more fine-grained control over when your modifier invalidates phases.

This is particularly useful if your custom modifier modifies both layout and draw. Opting out of auto-invalidation lets you just invalidate draw when only draw-related properties, such as color, change. This avoids invalidating layout and can improve your modifier's performance.

A hypothetical example of this is shown in the following example with a modifier that has a color, size, and onClick lambda as properties. This modifier invalidates only what is required, skipping any unneeded invalidation:

class SampleInvalidatingNode(
    var color: Color,
    var size: IntSize,
    var onClick: () -> Unit
) : DelegatingNode(), LayoutModifierNode, DrawModifierNode {
    override val shouldAutoInvalidate: Boolean
        get() = false

    private val clickableNode = delegate(
        ClickablePointerInputNode(onClick)
    )

    fun update(color: Color, size: IntSize, onClick: () -> Unit) {
        if (this.color != color) {
            this.color = color
            // Only invalidate draw when color changes
            invalidateDraw()
        }

        if (this.size != size) {
            this.size = size
            // Only invalidate layout when size changes
            invalidateMeasurement()
        }

        // If only onClick changes, we don't need to invalidate anything
        clickableNode.update(onClick)
    }

    override fun ContentDrawScope.draw() {
        drawRect(color)
    }

    override fun MeasureScope.measure(
        measurable: Measurable,
        constraints: Constraints
    ): MeasureResult {
        val size = constraints.constrain(size)
        val placeable = measurable.measure(constraints)
        return layout(size.width, size.height) {
            placeable.place(0, 0)
        }
    }
}CustomModifierSnippets.kt

Sources: [live-compose-custom-modifiers-autoinvalidation-source](https://developer.android.com/develop/ui/compose/custom-modifiers#autoinvalidation)

## Composable function modifiers must be called within a composable function

Like all composable functions, a composable factory modifier must be called from within composition. This limits where a modifier can be hoisted to, as it can never be hoisted out of composition. In comparison, non-composable modifier factories can be hoisted out of composable functions to allow easier reuse and improve performance:

val extractedModifier = Modifier.background(Color.Red) // Hoisted to save allocations

@Composable
fun Modifier.composableModifier(): Modifier {
    val color = LocalContentColor.current.copy(alpha = 0.5f)
    return this then Modifier.background(color)
}

@Composable
fun MyComposable() {
    val composedModifier = Modifier.composableModifier() // Cannot be extracted any higher
}CustomModifierSnippets.kt

Sources: [live-compose-custom-modifiers-called-within-function-source](https://developer.android.com/develop/ui/compose/custom-modifiers#called-within-function)

## Chain existing modifiers together

It is often possible to create custom modifiers by using existing modifiers. For example, Modifier.clip() is implemented using the graphicsLayer modifier. This strategy uses existing modifier elements, and you provide your own custom modifier factory.

Before implementing your own custom modifier, see if you can use the same strategy.

fun Modifier.clip(shape: Shape) = graphicsLayer(shape = shape, clip = true)CustomModifierSnippets.kt

Or, if you find you are repeating the same group of modifiers often, you can wrap them into your own modifier:

fun Modifier.myBackground(color: Color) = padding(16.dp)
    .clip(RoundedCornerShape(8.dp))
    .background(color)CustomModifierSnippets.kt

Sources: [live-compose-custom-modifiers-chain-existing-source](https://developer.android.com/develop/ui/compose/custom-modifiers#chain-existing)

## Common situations using Modifier.Node

When creating custom modifiers with Modifier.Node, here are some common situations you might encounter.

Sources: [live-compose-custom-modifiers-common-situations-source](https://developer.android.com/develop/ui/compose/custom-modifiers#common-situations)

## Complete example

These three parts come together to create the custom modifier to draw a circle using the Modifier.Node APIs:

// Modifier factory
fun Modifier.circle(color: Color) = this then CircleElement(color)

// ModifierNodeElement
private data class CircleElement(val color: Color) : ModifierNodeElement<CircleNode>() {
    override fun create() = CircleNode(color)

    override fun update(node: CircleNode) {
        node.color = color
    }
}

// Modifier.Node
private class CircleNode(var color: Color) : DrawModifierNode, Modifier.Node() {
    override fun ContentDrawScope.draw() {
        drawCircle(color)
    }
}CustomModifierSnippets.kt

Sources: [live-compose-custom-modifiers-complete-example-source](https://developer.android.com/develop/ui/compose/custom-modifiers#complete-example)

## Create a custom modifier using a composable modifier factory

You can also create a custom modifier using a composable function to pass values to an existing modifier. This is known as a composable modifier factory.

Using a composable modifier factory to create a modifier also lets you use higher level compose APIs, such as animate*AsState and other Compose state backed animation APIs. For example, the following snippet shows a modifier that animates an alpha change when enabled/disabled:

@Composable
fun Modifier.fade(enable: Boolean): Modifier {
    val alpha by animateFloatAsState(if (enable) 0.5f else 1.0f)
    return this then Modifier.graphicsLayer { this.alpha = alpha }
}CustomModifierSnippets.kt

If your custom modifier is a convenience method to provide default values from a CompositionLocal, the easiest way to implement this is to use a composable modifier factory:

@Composable
fun Modifier.fadedBackground(): Modifier {
    val color = LocalContentColor.current
    return this then Modifier.background(color.copy(alpha = 0.5f))
}CustomModifierSnippets.kt

This approach has some caveats, which are detailed in the following sections.

Sources: [live-compose-custom-modifiers-create-custom-source](https://developer.android.com/develop/ui/compose/custom-modifiers#create-custom)

## Implement custom modifier behavior using Modifier.Node

Modifier.Node is a lower level API for creating modifiers in Compose. It is the same API that Compose implements its own modifiers in and is the most performant way to create custom modifiers.

Sources: [live-compose-custom-modifiers-implement-custom-source](https://developer.android.com/develop/ui/compose/custom-modifiers#implement-custom)

## Implement a custom modifier using Modifier.Node

There are three parts to implementing a custom modifier using Modifier.Node:

A Modifier.Node implementation that holds the logic and state of your modifier.

A ModifierNodeElement that creates and updates modifier node instances.

An optional modifier factory, as detailed previously.

ModifierNodeElement classes are stateless and new instances are allocated each recomposition, whereas Modifier.Node classes can be stateful and will survive across multiple recompositions, and can even be reused.

The following section describes each part and shows an example of building a custom modifier to draw a circle.

Sources: [live-compose-custom-modifiers-implement-modifier-node-source](https://developer.android.com/develop/ui/compose/custom-modifiers#implement-modifier-node)

## Introduction

Compose provides many modifiers for common behaviors right out of the box, but you can also create your own custom modifiers.

Modifiers have multiple parts:

A modifier factory This is an extension function on Modifier, which provides an idiomatic API for your modifier and allows modifiers to be chained together. The modifier factory produces the modifier elements used by Compose to modify your UI.

A modifier element This is where you can implement the behavior of your modifier.

There are multiple ways to implement a custom modifier depending on the functionality needed. Often, the simplest way to implement a custom modifier is to implement a custom modifier factory that combines other already defined modifier factories. If you need more custom behavior, implement the modifier element using the Modifier.Node APIs, which are lower level but provide more flexibility.

Sources: [live-compose-custom-modifiers-main-content-source](https://developer.android.com/develop/ui/compose/custom-modifiers#main-content)

## Modifier factory

This is the public API surface of your modifier. Most implementations create the modifier element and add it to the modifier chain:

// Modifier factory
fun Modifier.circle(color: Color) = this then CircleElement(color)CustomModifierSnippets.kt

Sources: [live-compose-custom-modifiers-modifier-factory-source](https://developer.android.com/develop/ui/compose/custom-modifiers#modifier-factory)

## Modifier.Node

The Modifier.Node implementation (in this example, CircleNode) implements the functionality of your custom modifier.

// Modifier.Node
private class CircleNode(var color: Color) : DrawModifierNode, Modifier.Node() {
    override fun ContentDrawScope.draw() {
        drawCircle(color)
    }
}CustomModifierSnippets.kt

In this example, it draws the circle with the color passed in to the modifier function.

A node implements Modifier.Node as well as zero or more node types. There are different node types based on the functionality your modifier requires. The preceding example needs to be able to draw, so it implements DrawModifierNode, which lets it override the draw method.

The available types are as follows:

Node Usage Sample Link LayoutModifierNode A Modifier.Node that changes how its wrapped content is measured and laid out. Sample DrawModifierNode A Modifier.Node that draws into the space of the layout. Sample CompositionLocalConsumerModifierNode Implementing this interface lets your Modifier.Node read composition locals. Sample SemanticsModifierNode A Modifier.Node that adds semantics key/value for use in testing, accessibility, and similar use cases. Sample PointerInputModifierNode A Modifier.Node that receives PointerInputChanges. Sample ParentDataModifierNode A Modifier.Node that provides data to the parent layout. Sample LayoutAwareModifierNode A Modifier.Node which receives onMeasured and onPlaced callbacks. Sample GlobalPositionAwareModifierNode A Modifier.Node which receives an onGloballyPositioned callback with the final LayoutCoordinates of the layout when the global position of the content may have changed. Sample ObserverModifierNode Modifier.Nodes that implement ObserverNode can provide their own implementation of onObservedReadsChanged that will be called in response to changes to snapshot objects read within an observeReads block. Sample DelegatingNode A Modifier.Node which is able to delegate work to other Modifier.Node instances.This can be useful to compose multiple node implementations into one. Sample TraversableNode Allows Modifier.Node classes to traverse up/down the node tree for classes of the same type or for a particular key.

Sources: [live-compose-custom-modifiers-modifiernode-source](https://developer.android.com/develop/ui/compose/custom-modifiers#modifiernode)

## Modifier.Node

Sample

Nodes are automatically invalidated when update is called on their corresponding element. Because our example is a DrawModifierNode, any time update is called on the element, the node triggers a redraw and its color correctly updates. It is possible to opt out of auto-invalidation, as detailed in the Opt out of node auto-invalidation section.

Sources: [live-compose-custom-modifiers-modifiernode-2-source](https://developer.android.com/develop/ui/compose/custom-modifiers#modifiernode)

## Composable function modifiers are never skipped

Composable factory modifiers are never skipped because composable functions that have return values cannot be skipped. This means your modifier function will be called on every recomposition, which may be expensive if it recomposes frequently.

Sources: [live-compose-custom-modifiers-never-skipped-source](https://developer.android.com/develop/ui/compose/custom-modifiers#never-skipped)

## ModifierNodeElement

A ModifierNodeElement is an immutable class that holds the data to create or update your custom modifier:

// ModifierNodeElement
private data class CircleElement(val color: Color) : ModifierNodeElement<CircleNode>() {
    override fun create() = CircleNode(color)

    override fun update(node: CircleNode) {
        node.color = color
    }
}CustomModifierSnippets.kt

ModifierNodeElement implementations need to override the following methods:

create: This is the function that instantiates your modifier node. This gets called to create the node when your modifier is first applied. Usually, this amounts to constructing the node and configuring it with the parameters that were passed in to the modifier factory.

update: This function is called whenever this modifier is provided in the same spot this node already exists, but a property has changed. This is determined by the equals method of the class. The modifier node that was previously created is sent as a parameter to the update call. At this point, you should update the nodes' properties to correspond with the updated parameters. The ability for nodes to be reused this way is key to the performance gains that Modifier.Node brings; therefore, you must update the existing node rather than creating a new one in the update method. In our circle example, the color of the node is updated.

Additionally, ModifierNodeElement implementations also need to implement equals and hashCode. update will only get called if an equals comparison with the previous element returns false.

The preceding example uses a data class to achieve this. These methods are used to check if a node needs updating or not. If your element has properties that don't contribute to whether a node needs to be updated, or you want to avoid data classes for binary compatibility reasons, then you can manually implement equals and hashCode, for example, the padding modifier element.

Sources: [live-compose-custom-modifiers-node-element-source](https://developer.android.com/develop/ui/compose/custom-modifiers#node-element)

## Reference composition locals

Modifier.Node modifiers don't automatically observe changes to Compose state objects, like CompositionLocal. The advantage Modifier.Node modifiers have over modifiers that are just created with a composable factory is that they can read the value of the composition local from where the modifier is used in your UI tree, not where the modifier is allocated, using currentValueOf.

However, modifier node instances don't automatically observe state changes. To automatically react to a composition local changing, you can read its current value inside a scope:

DrawModifierNode: ContentDrawScope

LayoutModifierNode: MeasureScope & IntrinsicMeasureScope

SemanticsModifierNode: SemanticsPropertyReceiver

This example observes the value of LocalContentColor to draw a background based on its color. As ContentDrawScope does observe snapshot changes, this automatically redraws when the value of LocalContentColor changes:

class BackgroundColorConsumerNode :
    Modifier.Node(),
    DrawModifierNode,
    CompositionLocalConsumerModifierNode {
    override fun ContentDrawScope.draw() {
        val currentColor = currentValueOf(LocalContentColor)
        drawRect(color = currentColor)
        drawContent()
    }
}CustomModifierSnippets.kt

To react to state changes outside of a scope and automatically update your modifier, use an ObserverModifierNode.

For example, Modifier.scrollable uses this technique to observe changes in LocalDensity. A simplified example is shown in the following example:

class ScrollableNode :
    Modifier.Node(),
    ObserverModifierNode,
    CompositionLocalConsumerModifierNode {

    // Place holder fling behavior, we'll initialize it when the density is available.
    val defaultFlingBehavior = DefaultFlingBehavior(splineBasedDecay(UnityDensity))

    override fun onAttach() {
        updateDefaultFlingBehavior()
        observeReads { currentValueOf(LocalDensity) } // monitor change in Density
    }

    override fun onObservedReadsChanged() {
        // if density changes, update the default fling behavior.
        updateDefaultFlingBehavior()
    }

    private fun updateDefaultFlingBehavior() {
        val density = currentValueOf(LocalDensity)

Sources: [live-compose-custom-modifiers-reference-composition-locals-source](https://developer.android.com/develop/ui/compose/custom-modifiers#reference-composition-locals)

## Reference composition locals

defaultFlingBehavior.flingDecay = splineBasedDecay(density)
    }
}CustomModifierSnippets.kt

Sources: [live-compose-custom-modifiers-reference-composition-locals-2-source](https://developer.android.com/develop/ui/compose/custom-modifiers#reference-composition-locals)

## CompositionLocal values are resolved at the call site of the modifier factory

When creating a custom modifier using a composable modifier factory, composition locals take the value from the composition tree where they are created, not used. This can lead to unexpected results. For example, consider the composition local modifier example mentioned previously, implemented slightly differently using a composable function:

@Composable
fun Modifier.myBackground(): Modifier {
    val color = LocalContentColor.current
    return this then Modifier.background(color.copy(alpha = 0.5f))
}

@Composable
fun MyScreen() {
    CompositionLocalProvider(LocalContentColor provides Color.Green) {
        // Background modifier created with green background
        val backgroundModifier = Modifier.myBackground()

        // LocalContentColor updated to red
        CompositionLocalProvider(LocalContentColor provides Color.Red) {

            // Box will have green background, not red as expected.
            Box(modifier = backgroundModifier)
        }
    }
}CustomModifierSnippets.kt

If this is not how you expect your modifier to work, use a custom Modifier.Node instead, as composition locals will be correctly resolved at the usage site and can be safely hoisted.

Sources: [live-compose-custom-modifiers-resolved-call-site-source](https://developer.android.com/develop/ui/compose/custom-modifiers#resolved-call-site)

## Share state between modifiers using delegation

Modifier.Node modifiers can delegate to other nodes. There are many use cases for this, such as extracting common implementations across different modifiers, but it can also be used to share common state across modifiers.

For example, a basic implementation of a clickable modifier node that shares interaction data:

class ClickableNode : DelegatingNode() {
    val interactionData = InteractionData()
    val focusableNode = delegate(
        FocusableNode(interactionData)
    )
    val indicationNode = delegate(
        IndicationNode(interactionData)
    )
}CustomModifierSnippets.kt

Sources: [live-compose-custom-modifiers-share-state-delegation-source](https://developer.android.com/develop/ui/compose/custom-modifiers#share-state-delegation)

## Zero parameters

If your modifier has no parameters, then it never needs to update and, furthermore, doesn't need to be a data class. The following is a sample implementation of a modifier that applies a fixed amount of padding to a composable:

fun Modifier.fixedPadding() = this then FixedPaddingElement

data object FixedPaddingElement : ModifierNodeElement<FixedPaddingNode>() {
    override fun create() = FixedPaddingNode()
    override fun update(node: FixedPaddingNode) {}
}

class FixedPaddingNode : LayoutModifierNode, Modifier.Node() {
    private val PADDING = 16.dp

    override fun MeasureScope.measure(
        measurable: Measurable,
        constraints: Constraints
    ): MeasureResult {
        val paddingPx = PADDING.roundToPx()
        val horizontal = paddingPx * 2
        val vertical = paddingPx * 2

        val placeable = measurable.measure(constraints.offset(-horizontal, -vertical))

        val width = constraints.constrainWidth(placeable.width + horizontal)
        val height = constraints.constrainHeight(placeable.height + vertical)
        return layout(width, height) {
            placeable.place(paddingPx, paddingPx)
        }
    }
}CustomModifierSnippets.kt

Sources: [live-compose-custom-modifiers-zero-parameters-source](https://developer.android.com/develop/ui/compose/custom-modifiers#zero-parameters)
