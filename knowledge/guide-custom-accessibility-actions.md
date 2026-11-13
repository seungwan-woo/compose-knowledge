---
type: reference
title: "Guidance: Expose complex gestures as labeled accessibility actions"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-accessibility-semantics-custom-actions-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#custom-actions
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: f13de03ce81a6ab399239045ebe1104d8c520626678632e005cc404a089a8fe0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Article(
              modifier = Modifier.clearAndSetSemantics { },
              onClick = openArticle,
          )
          BookmarkButton(
              modifier = Modifier.clearAndSetSemantics { },
              onClick = addToBookmarks,
          )
      }AccessibilitySnippets.kt

      In these cases, make sure to manually clear the original children's semantics with the clearAndSetSemantics modifier, as you are moving them into custom actions.

      Using Switch Access as an example, its menu opens upon selection of the container and lists the available nested actions there:

      Figure 6.

      Switch Access highlight of the article list item.

      Figure 7.

      Visualization of Switch Access action menu.
  - id: live-compose-guide-accessibility-semantics-custom-actions-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#custom-actions
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 46db218637c4dad82d1a4c7e3cd93823491ab8f989f973f12282c2dca805eb95
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Custom actions can be used for more complex touchscreen gestures, like swipe to dismiss or drag and drop, as these can be challenging for users with motor impairments or other disabilities to interact with.

      To make the swipe to dismiss gesture more accessible, you can link it to a custom action, passing the dismissal action and label there:

      SwipeToDismissBox(
          modifier = Modifier.semantics {
              // Represents the swipe to dismiss for accessibility
              customActions = listOf(
                  CustomAccessibilityAction(
                      label = "Remove article from list",
                      action = {
                          removeArticle()
                          true
                      }
                  )
              )
          },
          state = rememberSwipeToDismissBoxState(),
          backgroundContent = {}
      ) {
          ArticleListItem()
      }AccessibilitySnippets.kt

      An accessibility service like TalkBack then highlights the component, and hints that there are more actions available in its menu, representing the swipe to dismiss action there:

      Figure 4.

      Visualization of TalkBack action menu.

      Another use case for custom actions are long lists with items that have more available actions, as it might be tedious for users to iterate through each action for every single item individually:

      Figure 5.

      Visualization of Switch Access navigation on screen.

      To improve the navigation experience, which is especially helpful for interaction-based assistive technologies like Switch Access or Voice Access, you can use custom actions on the container to move actions out of individual traversal, and into a separate action menu:

      ArticleListItemRow(
          modifier = Modifier
              .semantics {
                  customActions = listOf(
                      CustomAccessibilityAction(
                          label = "Open article",
                          action = {
                              openArticle()
                              true
                          }
                      ),
                      CustomAccessibilityAction(
                          label = "Add to bookmarks",
                          action = {
                              addToBookmarks()
                              true
                          }
                      ),
                  )
              }
      ) {
compose:
  id: guide-custom-accessibility-actions
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.semantics.CustomAccessibilityAction
  sections:
    - id: guide-custom-accessibility-actions
      title: "Guidance: Expose complex gestures as labeled accessibility actions"
      aliases:
        - androidx.compose.ui.semantics.CustomAccessibilityAction
        - androidx.compose.ui.semantics.customActions
        - androidx.compose.ui.semantics.semantics
        - custom accessibility actions
        - swipe to dismiss
        - Switch Access
        - TalkBack
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-custom-actions-source
        - live-compose-guide-accessibility-semantics-custom-actions-2-source
      relatedIds:
        - live-compose-guide-accessibility-semantics-custom-actions
        - live-compose-guide-accessibility-semantics-custom-actions-2
---

# Guidance: Expose complex gestures as labeled accessibility actions

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Expose complex gestures as labeled accessibility actions

Guidance: Expose a complex gesture such as swipe to dismiss through semantics.customActions with a descriptive CustomAccessibilityAction label and the same operation in its action callback. Custom actions can also move repeated child operations into a container's action menu. When moving those operations, clear the original child semantics to avoid keeping duplicate traversal targets. Limitation: only clear child semantics when their actions have been represented on the container; verify the resulting action menu and traversal with assistive technology.

Sources: [live-compose-guide-accessibility-semantics-custom-actions-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#custom-actions), [live-compose-guide-accessibility-semantics-custom-actions-2-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#custom-actions)
