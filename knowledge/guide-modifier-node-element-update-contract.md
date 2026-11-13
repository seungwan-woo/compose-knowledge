---
type: reference
title: "Guidance: Keep ModifierNodeElement updates consistent with node reuse"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
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
compose:
  id: guide-modifier-node-element-update-contract
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.node.ModifierNodeElement
  sections:
    - id: guide-modifier-node-element-update-contract
      title: "Guidance: Keep ModifierNodeElement updates consistent with node reuse"
      aliases:
        - Modifier.Node
        - ModifierNodeElement
        - node update
        - modifier equality
        - custom modifier lifecycle
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-node-element-source
      relatedIds:
        - live-compose-custom-modifiers-node-element
---

# Guidance: Keep ModifierNodeElement updates consistent with node reuse

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Keep ModifierNodeElement updates consistent with node reuse

Guidance: Keep ModifierNodeElement immutable and use it to create or update a reusable modifier node. create instantiates the node when the modifier is first applied. When the element changes at the same position, update must copy the current inputs into the existing node rather than create another node. Implement equals and hashCode consistently: update is triggered when equality with the previous element is false. Limitation: checking this configuration contract does not verify attachment, detachment, or resource cleanup behavior.

Sources: [live-compose-custom-modifiers-node-element-source](https://developer.android.com/develop/ui/compose/custom-modifiers#node-element)
