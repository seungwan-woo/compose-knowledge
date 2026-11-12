---
type: reference
title: "Guidance: Merge semantics for a logical interactive element"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-accessibility-semantics-merged-unmerged-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#merged-unmerged
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 14c702429123147e8218afa4b844af05fef4a9ee834da47b7055fece7a96b7ed
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      As mentioned before, each composable in the UI tree might have zero or more semantics properties set. When a composable has no semantics properties set, it isn't included as part of the Semantics tree. That way, the Semantics tree contains only the nodes that actually contain semantic meaning. However, sometimes to convey the correct meaning of what is shown on the screen, it is also useful to merge certain sub-trees of nodes and treat them as one. That way you can reason about a set of nodes as a whole, instead of dealing with each descendant node individually. As a rule of thumb, each node in this tree represents a focusable element when using Accessibility services.

      An example of such a composable is Button. You can reason about a button as a single element, even though it may contain multiple child nodes:

      Button(onClick = { /*TODO*/ }) {
          Icon(
              imageVector = Icons.Filled.Favorite,
              contentDescription = null
          )
          Spacer(Modifier.size(ButtonDefaults.IconSpacing))
          Text("Like")
      }SemanticsSnippets.kt

      In the Semantics tree, the properties of the button's descendants are merged, and the button is presented as a single leaf node in the tree:

      Figure 10.

      Merged single leaf semantics representation.

      Composables and modifiers can indicate that they want to merge their descendants' semantics properties by calling Modifier.semantics (mergeDescendants = true) {}. Setting this property to true indicates that the semantics properties should be merged. In the Button example, the Button composable uses the clickable modifier internally that includes this semantics modifier. Therefore, the descendant nodes of the button are merged. Read the accessibility documentation to learn more about when you should change merging behavior in your composable.

      Several modifiers and composables in the Foundation and Material Compose libraries have this property set. For example, the clickable and toggleable modifiers will automatically merge their descendants. Also, the ListItem composable will merge its descendants.
compose:
  id: guide-semantics-descendant-merging
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.semantics.semantics
  sections:
    - id: guide-semantics-descendant-merging
      title: "Guidance: Merge semantics for a logical interactive element"
      aliases:
        - androidx.compose.ui.semantics.semantics
        - mergeDescendants
        - semantics tree
        - accessibility grouping
        - 시맨틱 트리
        - 접근성 그룹화
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-merged-unmerged-source
      relatedIds:
        - live-compose-guide-accessibility-semantics-merged-unmerged
---

# Guidance: Merge semantics for a logical interactive element

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Merge semantics for a logical interactive element

Guidance: Use Modifier.semantics(mergeDescendants = true) when descendant content should be understood as one logical element. A Button containing an icon and text is represented as a single merged leaf in the semantics tree. clickable and toggleable already request descendant merging, as does ListItem. Limitation: the semantics tree only includes nodes with semantic information; it is not a copy of every composable in the UI tree. Check whether the component already merges descendants before adding another merging rule.

Sources: [live-compose-guide-accessibility-semantics-merged-unmerged-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#merged-unmerged)
