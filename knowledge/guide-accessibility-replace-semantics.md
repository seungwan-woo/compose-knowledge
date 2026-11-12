---
type: reference
title: "Guidance: Replace custom-control semantics deliberately"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-accessibility-merging-clearing-clear-and-set-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/merging-clearing#clear-and-set
    revision: web:compose-guide-accessibility-merging-clearing:content@sha256:7f067c2d606157ab33e4fb23583fa12671a50b8046b8e5f85126b3367877c50c
    sha256: f5bf216391466c9a1dd68d7a23442c42b26f2d36ffce79bfdaf544ec995c6af4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      original semantics and setting new, more descriptive ones, accessibility services can now see that this is a toggleable component that can alternate state.

      When using clearAndSetSemantics, consider the following:

      Because services receive no information when this API is set, it's better to use it sparingly. Semantics information can potentially be used by AI agents and similar services to understand the screen, and thus should only be cleared when necessary.

      Custom semantics may be set within the API lambda.

      Ordering of the modifiers matters―this API clears all semantics that are after where it is applied, regardless of other merging strategies.
  - id: live-compose-guide-accessibility-merging-clearing-clear-and-set-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/merging-clearing#clear-and-set
    revision: web:compose-guide-accessibility-merging-clearing:content@sha256:7f067c2d606157ab33e4fb23583fa12671a50b8046b8e5f85126b3367877c50c
    sha256: c032c870313e34df5fe42ae171b1154ad74e4ad54b7fcc54873a8bba79aa01ad
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If semantic information needs to be completely cleared or overwritten, a powerful API to use is clearAndSetSemantics.

      When a component needs its own and its descendant semantics cleared, use this API with an empty lambda. When its semantics must be overwritten, include your new content inside the lambda.

      Note that when clearing with an empty lambda, the cleared semantics are not sent to any consumer that uses this information, like accessibility, autofill, or testing. When overwriting content with clearAndSetSemantics{/*semantic information*/}, the new semantics replace all previous semantics of the element and its descendants.

      The following is an example of a custom toggle component, represented by an interactable row with an icon and text:

      // Developer might intend this to be a toggleable.
      // Using `clearAndSetSemantics`, on the Row, a clickable modifier is applied,
      // a custom description is set, and a Role is applied.

      @Composable
      fun FavoriteToggle() {
          val checked = remember { mutableStateOf(true) }
          Row(
              modifier = Modifier
                  .toggleable(
                      value = checked.value,
                      onValueChange = { checked.value = it }
                  )
                  .clearAndSetSemantics {
                      stateDescription = if (checked.value) "Favorited" else "Not favorited"
                      toggleableState = ToggleableState(checked.value)
                      role = Role.Switch
                  },
          ) {
              Icon(
                  imageVector = Icons.Default.Favorite,
                  contentDescription = null // not needed here

              )
              Text("Favorite?")
          }
      }AccessibilitySnippets.kt

      Although the icon and text have some semantic information, together they don't indicate that this component is a toggleable. Merging is not sufficient because you must provide additional information about the component.

      Because the snippet above creates a custom toggle component, you need to add the toggle ability, as well as the stateDescription, toggleableState, and role semantics. This way, the component status and associated action are available—for example, TalkBack announces "Double tap to toggle" instead of "Double tap to activate."

      By clearing the
compose:
  id: guide-accessibility-replace-semantics
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.semantics.clearAndSetSemantics
  sections:
    - id: guide-accessibility-replace-semantics
      title: "Guidance: Replace custom-control semantics deliberately"
      aliases:
        - androidx.compose.ui.semantics.clearAndSetSemantics
        - androidx.compose.ui.semantics.stateDescription
        - androidx.compose.ui.semantics.toggleableState
        - androidx.compose.ui.semantics.Role
        - custom control accessibility
        - 접근성 의미 재정의
        - 토글 상태 설명
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-merging-clearing-clear-and-set-source
        - live-compose-guide-accessibility-merging-clearing-clear-and-set-2-source
      relatedIds:
        - live-compose-guide-accessibility-merging-clearing-clear-and-set
        - live-compose-guide-accessibility-merging-clearing-clear-and-set-2
---

# Guidance: Replace custom-control semantics deliberately

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Replace custom-control semantics deliberately

Guidance: Use clearAndSetSemantics to replace a component and its descendants with semantics that describe the actual control. A custom toggle can supply stateDescription, toggleableState, and Role.Switch so accessibility services announce its state and toggle action. Limitation: an empty lambda removes that information from accessibility, autofill, and testing consumers. Use clearing only when needed, and consider modifier order: it clears semantics after its position regardless of other merging strategies.

Sources: [live-compose-guide-accessibility-merging-clearing-clear-and-set-source](https://developer.android.com/develop/ui/compose/accessibility/merging-clearing#clear-and-set), [live-compose-guide-accessibility-merging-clearing-clear-and-set-2-source](https://developer.android.com/develop/ui/compose/accessibility/merging-clearing#clear-and-set)
