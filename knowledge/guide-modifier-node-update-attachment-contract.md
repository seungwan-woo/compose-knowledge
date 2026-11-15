---
type: reference
title: "Guidance: Update reusable nodes and scope work to attachment"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: contract-modifier-node-attachment-scope-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Modifier.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Modifier.kt
    startLine: 175
    endLine: 192
    sha256: 25be7062a22789ebe958467c9cd79217fce5ccc142c078e5a32a33ad721b0b8d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              /**
               * A [CoroutineScope] that can be used to launch tasks that should run while the node is
               * attached.
               *
               * The scope is accessible between [onAttach] and [onDetach] calls, and will be cancelled
               * after the node is detached (after [onDetach] returns).
               *
               * @sample androidx.compose.ui.samples.ModifierNodeCoroutineScopeSample
               * @throws IllegalStateException If called while the node is not attached.
               */
              public val coroutineScope: CoroutineScope
                  get() =
                      scope
                          ?: CoroutineScope(
                                  requireOwner().coroutineContext +
                                      Job(parent = requireOwner().coroutineContext[Job])
                              )
                              .also { scope = it }
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
  id: guide-modifier-node-update-attachment-contract
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.node.ModifierNodeElement
  sections:
    - id: guide-modifier-node-update-attachment-contract
      title: "Guidance: Update reusable nodes and scope work to attachment"
      aliases:
        - androidx.compose.ui.node.ModifierNodeElement
        - androidx.compose.ui.Modifier.Node
        - node update
        - node detach
        - node coroutineScope
        - attachment cleanup
        - 노드 갱신
        - 노드 분리
        - 노드 코루틴
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-custom-modifiers-node-element-source
        - contract-modifier-node-attachment-scope-source
      relatedIds:
        - live-compose-custom-modifiers-node-element
        - contract-modifier-node-attachment-scope
---

# Guidance: Update reusable nodes and scope work to attachment

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Update reusable nodes and scope work to attachment

Guidance: Keep ModifierNodeElement immutable with consistent equals/hashCode. create builds the node when first applied; when equality detects changed inputs at the same position, update copies current properties into the existing node. Launch attachment-bound work in node.coroutineScope: it is accessible between onAttach and onDetach, throws if accessed while detached, and is cancelled after onDetach returns. Limitation: this establishes configuration updates and cleanup of that coroutine scope, not arbitrary external-resource cleanup or all reset/reattachment behavior.

Sources: [live-compose-custom-modifiers-node-element-source](https://developer.android.com/develop/ui/compose/custom-modifiers#node-element), [contract-modifier-node-attachment-scope-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Modifier.kt)
