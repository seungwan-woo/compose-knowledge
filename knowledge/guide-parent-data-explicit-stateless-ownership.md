---
type: reference
title: "Guidance: Keep parent data explicit, stateless, and separate from shared state"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-api-guidelines-lines-511-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 511
    endLine: 545
    sha256: be6a91dc9fb3b398d723590a97605eb9aecd768b3e175a9eda39fb7ea8fb698d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          Text("Hello", Modifier.weight(1f)) // weight is available on the receiver scope
      }

      // This will not compile, as MyRowScope is not present.
      Box {
          Text("Hello", Modifier.weight(1f)) // COMPILE ERROR
      }
      ```

      #### Don't

      ```kotlin
      // A top-level weight modifier can be used anywhere, creating ambiguity, as it is
      // not clear which layout it provides data for.
      fun Modifier.weight(weight: Float): Modifier {
          // ...
      }

      // It's unclear what this weight modifier does in this context, as Box does not
      // read any weight parent data.
      Box(Modifier.weight(1f)) {
          // ...
      }
      ```

      **Parent data modifiers MUST be explicitly provided by a user**

      When using parent data there are three entities:

      1.  **The parent**: A layout that arranges other components (e.g., `Row`, `Column`).
      2.  **The child**: A component placed within a parent (e.g., `Text`, `Image`).
      3.  **The integration code / user code**: The end-user code that places child components into a parent layout.

      The `ParentDataModifierNode` is a tool for the user code to provide child-specific information to a parent layout. It MUST NOT be used by the child author as an implementation detail to implicitly communicate with a parent that may or may not be present. All parent data must be explicitly provided by the user via a modifier.
  - id: live-compose-api-guidelines-lines-581-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 581
    endLine: 615
    sha256: 558b27a66eca444b35c7f0c281a2f2ac6d8d9ffeb118efa6879e7a65eac2a2f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      ButtonGroup {
          GoodButton(modifier = Modifier.buttonGroupId(1))
      }
      ```

      **Parent data MUST flow from the child to the parent**

      Parent data is a mechanism for the author of the integration code to provide information from a child, up to a parent. This data flow should be one-directional, from the child to the parent. This data should not flow back down to modify the internals of the child, and instead should be used in place to configure the behavior of the parent. The provided data must not be modified by the child or the parent, it is owned by the user.

      **Provided parent data MUST be stateless**

      The data passed in a `ParentDataModifierNode` should be raw, stateless configuration for a parent layout. Parent data should avoid internal mutable state. A good mental model is that the data should be serializable.

      Parent data should be used to allow a child to provide configuration information used by a parent. Avoid using parent data as a generic communication channel to allow implicitly passing state from a child to a parent. Instead, prefer hoisting state and explicitly providing it to both the parent and child, to allow for better readability, testability, and ownership.

      Changing parent data should be driven through recomposition, by creating a new modifier with new data, not through side channels (such as internal state).

      #### Do

      ```kotlin
      // The parent data is a simple, immutable float.
      // The parent (WeightedRow) uses this to decide how to layout this child.
      @LayoutScopeMarker
      @Stable
      interface WeightScope {
          fun Modifier.weight(weight: Float): Modifier
      }

      @Composable
      fun WeightedRow(
          modifier: Modifier = Modifier,
          content: @Composable WeightScope.() -> Unit
      ) {
      // ...
compose:
  id: guide-parent-data-explicit-stateless-ownership
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.node.ParentDataModifierNode
  sections:
    - id: guide-parent-data-explicit-stateless-ownership
      title: "Guidance: Keep parent data explicit, stateless, and separate from shared state"
      aliases:
        - androidx.compose.ui.node.ParentDataModifierNode
        - implicit parent child coupling
        - parent data ownership
        - compound component contract
        - hidden child contract
        - 명시적 부모 자식 계약
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-511-source
        - live-compose-api-guidelines-lines-581-source
      relatedIds:
        - live-compose-api-guidelines-lines-511
        - live-compose-api-guidelines-lines-581
---

# Guidance: Keep parent data explicit, stateless, and separate from shared state

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Keep parent data explicit, stateless, and separate from shared state

Guidance: Let integration code explicitly supply parent data through the parent's scoped modifier. A child component must not secretly install parent data as an implementation detail that assumes a particular parent. Parent data carries stateless child-to-parent layout configuration owned by the integrator; neither parent nor child should mutate it. Drive configuration changes by recomposition with new modifier data. Hoist shared mutable state and pass it explicitly to both parts instead of using parent data as a hidden state channel. Limitation: these rules govern parent data; they do not establish that every compound component supports arbitrary child order or nesting.

Sources: [live-compose-api-guidelines-lines-511-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md), [live-compose-api-guidelines-lines-581-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)
