---
type: reference
title: Semantics
description: "Public source: https://developer.android.com/develop/ui/compose/accessibility/semantics"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-accessibility-semantics-adapt-tree-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#adapt-tree
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 81ee266b35cef1b05734b0b53420729720d74453f11058b37fb7d09baa01d7f9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: As mentioned before, you can override or clear certain semantics properties or change the merging behavior of the tree. This is particularly relevant when you're creating your own custom components. Without setting the correct properties and merge behavior, your app might not be accessible, and tests might behave differently than you expect. If you want to learn more about testing, see the testing guide.
  - id: live-compose-guide-accessibility-semantics-alerts-pop-ups-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#alerts-pop-ups
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 01abb0f22ad4e592dd19077c8a6bcb31683334de2cc40188cc7164c0b42841b4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If your component is an alert or a pop up, like a Snackbar, you might want to signal to accessibility services that a new structure or updates to content can be conveyed to users.

      Alert-like components can be marked with the liveRegion semantics property. This allows accessibility services to automatically notify the user of changes to this component, or its children:

      PopupAlert(
          message = "You have a new message",
          modifier = Modifier.semantics {
              liveRegion = LiveRegionMode.Polite
          }
      )AccessibilitySnippets.kt

      You should use liveRegionMode.Polite in most cases where users' attention should only briefly be drawn to alerts or important changing content on-screen.

      You should use liveRegion.Assertive sparingly to avoid disruptive feedback. It should be used for situations where it's crucial that users are made aware of time-sensitive content:

      PopupAlert(
          message = "Emergency alert incoming",
          modifier = Modifier.semantics {
              liveRegion = LiveRegionMode.Assertive
          }
      )AccessibilitySnippets.kt

      Live regions shouldn't be used on content that updates frequently, such as countdown timers, to avoid overwhelming users with constant feedback.
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
  - id: live-compose-guide-accessibility-semantics-error-components-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#error-components
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 677ed10e8ac150b2d317b4a30cf6925123f68c8e25f1ee42931a1609fb21c7b9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      For other content types, such as error-like components, you might want to expand on the main semantic information for users with accessibility needs. When defining error states, you can inform the accessibility services of its error semantics, and provide expanded error messaging.

      In this example, TalkBack reads the main error text information, followed by additional, expanded messaging:

      Error(
          errorText = "Fields cannot be empty",
          modifier = Modifier
              .semantics {
                  error("Please add both email and password")
              }
      )AccessibilitySnippets.kt
  - id: live-compose-guide-accessibility-semantics-headings-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#headings
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 1bfa5ba6a373e2bc7b9c0db9d8b72f831f59a49612603b44dbd137903ac820c9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Apps often contain screens with text-rich content, like long articles or news pages, which are usually divided into different subsections with headings:

      Figure 3.

      A blog post with the article text in a scrollable container.

      Users with accessibility needs can have difficulties navigating such a screen easily. To improve the navigation experience, some accessibility services allow for easier navigation directly between sections or headings. To enable this, indicate that your component is a heading by defining its semantics property:

      @Composable
      private fun Subsection(text: String) {
          Text(
              text = text,
              style = MaterialTheme.typography.headlineSmall,
              modifier = Modifier.semantics { heading() }
          )
      }AccessibilitySnippets.kt
  - id: live-compose-guide-accessibility-semantics-inspecting-tree-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#inspecting-tree
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 0727f28be35882cf0d20743441d03de274924984d6777cdbafef99f76fce7e31
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The semantics tree is in fact two different trees. There's a merged Semantics tree, which merges descendant nodes when mergeDescendants is set to true. There's also an unmerged Semantics tree, which does not apply the merging, but keeps every node intact. Accessibility services use the unmerged tree and apply their own merging algorithms, taking into consideration the mergeDescendants property. The testing framework uses the merged tree by default.

      You can inspect both trees with the printToLog() method. By default, and as in the earlier examples, the merged tree is logged. To print the unmerged tree instead, set the useUnmergedTree parameter of the onRoot() matcher to true:

      composeTestRule.onRoot(useUnmergedTree = true).printToLog("MY TAG")SemanticsSnippets.kt

      The Layout Inspector lets you display both the merged and the unmerged Semantics tree, by selecting the preferred one in the view filter:

      Figure 11.

      Layout Inspector view options, allowing both the display of the merged and the unmerged Semantics tree.

      For each node in your tree, the Layout Inspector shows both the Merged Semantics and the Semantics set on that node in the properties panel:

      Figure 12.

      Semantics properties merged and set.

      By default, matchers in the Testing Framework use the merged Semantics tree. That's why you can interact with a Button by matching the text shown inside it:

      composeTestRule.onNodeWithText("Like").performClick()SemanticsSnippets.kt

      Override this behavior by setting the useUnmergedTree parameter of the matchers to true, as with the onRoot matcher.
  - id: live-compose-guide-accessibility-semantics-list-item-info-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#list-item-info
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 6df88afd1eb222db00cac38ad176593c384abc2da20e81a4d41130b01c8bce6f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In custom lists and grids with many items, it might be helpful for accessibility services to also receive more detailed information, like the total number of items and indices.

      By using collectionInfo and collectionItemInfo semantics on the list and items respectively, in this long list, accessibility services can inform users of what item index they are at out of the total collection, in addition to textual semantic information:

      MilkyWayList(
          modifier = Modifier
              .semantics {
                  collectionInfo = CollectionInfo(
                      rowCount = milkyWay.count(),
                      columnCount = 1
                  )
              }
      ) {
          milkyWay.forEachIndexed { index, text ->
              Text(
                  text = text,
                  modifier = Modifier.semantics {
                      collectionItemInfo =
                          CollectionItemInfo(index, 0, 0, 0)
                  }
              )
          }
      }AccessibilitySnippets.kt
  - id: live-compose-guide-accessibility-semantics-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#main-content
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 1e1c32f632e32c406ed9f4daacced77b9729fb5bd38b7627f9d7624fdc13af1b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Aside from the primary information that a composable carries, like a text string of a Text composable, it can be helpful to have more supplemental information about UI elements.

      Information about the meaning and role of a component in Compose is called semantics, which are a way to provide additional context about composables to services like accessibility, autofill, and testing. For example, a camera icon might visually just be an image, but the semantic meaning could be "Take a photo".

      By combining the appropriate semantics with the appropriate Compose APIs, you provide as much information about your component as possible to accessibility services, which then decide how to represent it to the user.

      Material and Compose UI and Foundation APIs come with built-in semantics that follow their specific role and function, but you can also modify these semantics for existing APIs or set new ones for custom components, according to your specific requirements.
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
  - id: live-compose-guide-accessibility-semantics-progress-tracking-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#progress-tracking
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 38f475c580301a92f31acc19ff7e4b8d42e89831d89bc3c2f5ad2239bf211635
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      For custom components that track progress, you might want to notify users of their progress changes, including the current progress value, its range, and step size. You can do so with progressBarRangeInfo semantics―this ensures that accessibility services are aware of progress changes, and can update users accordingly. Different assistive technologies may also have unique ways of hinting at increasing and decreasing progression.

      ProgressInfoBar(
          modifier = Modifier
              .semantics {
                  progressBarRangeInfo =
                      ProgressBarRangeInfo(
                          current = progress,
                          range = 0F..1F
                      )
              }
      )AccessibilitySnippets.kt
  - id: live-compose-guide-accessibility-semantics-properties-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#properties
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 46843d7bcc5a790cb94d134af7511e58fa0041391ae31d710bc24dc1e1438787
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      support for specific use cases, or change your composables' merging or clearing strategy.

      To signal the specific content type of your component to accessibility services, you can apply a variety of different semantics. These additions will support the main semantic information in place and help accessibility services fine-tune how your component is represented, announced, or interacted with.

      For a full list of semantics properties, see the SemanticsProperties object. For a full list of possible Accessibility Actions, see the SemanticsActions object.
  - id: live-compose-guide-accessibility-semantics-properties-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#properties
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 5b097001d0e624691ef4c07ad740091665e0adfd783535e260925ed5e2e41893
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Semantic properties convey the meaning of the corresponding composable. For example, the Text composable contains a semantic property text, because that's the meaning of that composable. An Icon contains a contentDescription property (if set by the developer) that conveys in text what the meaning of the icon is.

      Consider how semantics properties convey the meaning of a composable. Consider a Switch. This is how it looks to the user:

      Figure 1.

      A

      Switch

      in its "On" and "Off" state.

      To describe the meaning of this element, you could say the following: "This is a Switch, which is a toggleable element in its 'On' state. You can click it to interact with it."

      This is exactly what the semantics properties are used for. The semantics node of this Switch element contains the following properties, as visualized with the Layout Inspector:

      Figure 2.

      Layout Inspector showing the Semantics properties of a

      Switch

      composable.

      The Role indicates the type of element. The StateDescription describes how the "On" state should be referenced. By default this is a localized version of the word "On", but this can be made more specific (for example, "Enabled") based on the context. The ToggleableState is the current state of the Switch. The OnClick property references the method used to interact with this element.

      Keeping track of the semantics properties of each composable in your app unlocks a lot of powerful possibilities:

      Accessibility services use the properties to represent UI shown on the screen and allow users to interact with it. For the Switch composable, Talkback might announce: "On; Switch; double tap to toggle". The user can double tap their screen to toggle the Switch off.

      The Testing framework uses the properties to find nodes, interact with them, and make assertions: val mySwitch = SemanticsMatcher.expectValue( SemanticsProperties.Role, Role.Switch ) composeTestRule.onNode(mySwitch) .performClick() .assertIsOff()SemanticsSnippets.kt

      Composables and modifiers that are built on top of the Compose foundation library already set the relevant properties for you by default. Optionally, you can change these properties manually, to improve the accessibility
  - id: live-compose-guide-accessibility-semantics-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#recommended_for_you
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 02dcca81ea71f7fbe8d45d406208a562ba2a31ae205aafed76f27de9240af247
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Accessibility in Compose

      Material Design 2 in Compose

      Testing your Compose layout
  - id: live-compose-guide-accessibility-semantics-semantic-tree-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#semantic-tree
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: 8e5f57c40379b2e1996d4c0a4a7d56f03284fe8ec22d3636f6eb787ee5c8891f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A composition describes the UI of your app and is produced by running composables. The composition is a tree-structure that consists of the composables that describe your UI.

      Next to the Composition, there exists a parallel tree, called the semantics tree. This tree describes your UI in an alternative manner that is understandable for Accessibility services and for the Testing framework. Accessibility services use the tree to describe the app to users with a specific need. The testing framework uses the tree to interact with your app and make assertions about it. The Semantics tree does not contain the information on how to draw your composables, but it contains information about the semantic meaning of your composables.

      Figure 8.

      A typical UI hierarchy and its semantics tree.

      If your app consists of composables and modifiers from the Compose foundation and material library, the Semantics tree is automatically filled and generated for you. However when you're adding custom low-level composables, you have to manually provide its semantics. There might also be situations where your tree does not correctly or fully represent the meaning of the elements on the screen, in which case you can adapt the tree.

      Consider for example this custom calendar composable:

      Figure 9.

      A custom calendar composable with selectable day elements.

      In this example, the entire calendar is implemented as a single low-level composable, using the Layout composable and drawing directly to the Canvas. If you don't do anything else, accessibility services won't receive enough information about the content of the composable and the user's selection within the calendar. For example, if a user clicks on the day containing 17, the accessibility framework only receives the description information for the whole calendar control. In this case, the TalkBack accessibility service would announce "Calendar" or, only slightly better, "April Calendar" and the user would be left to wonder what day was selected. To make this composable more accessible, you'll need to add semantic information manually.
  - id: live-compose-guide-accessibility-semantics-state-description-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#state-description
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: fdeffdb37eacc15cb4563a5105765bfa0169e852fe12e9b6779c523c4535a79b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A composable can define a stateDescription for semantics which the Android framework uses to read out the state that the composable is in. For example, a toggleable composable can be in either a "checked" or an "unchecked" state. In some cases, you might want to override the default state description labels that Compose uses. You can do so by explicitly specifying the state description labels before defining a composable as toggleable:

      @Composable
      private fun TopicItem(itemTitle: String, selected: Boolean, onToggle: () -> Unit) {
          val stateSubscribed = stringResource(R.string.subscribed)
          val stateNotSubscribed = stringResource(R.string.not_subscribed)
          Row(
              modifier = Modifier
                  .semantics {
                      // Set any explicit semantic properties
                      stateDescription = if (selected) stateSubscribed else stateNotSubscribed
                  }
                  .toggleable(
                      value = selected,
                      onValueChange = { onToggle() }
                  )
          ) {
              /* ... */
          }
      }AccessibilitySnippets.kt
  - id: live-compose-guide-accessibility-semantics-window-like-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/semantics#window-like
    revision: web:compose-guide-accessibility-semantics:content@sha256:bb7df2e92e607b8649bc1c6d2f0238ce54eaa5b32510882fd419c0ddb31f80d6
    sha256: e461a72a524ced6d99b5e720444f9e1b49152b0c32cf5a81017626bd3cac0687
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Window-like custom components, similar to ModalBottomSheet, need additional signals to differentiate them from surrounding content. For this, you can use paneTitle semantics, so that any relevant window or pane changes may be represented appropriately by the accessibility services, along with its main semantic information:

      ShareSheet(
          message = "Choose how to share this photo",
          modifier = Modifier
              .fillMaxWidth()
              .align(Alignment.TopCenter)
              .semantics { paneTitle = "New bottom sheet" }
      )AccessibilitySnippets.kt

      For reference, see how Material 3 uses paneTitle for its components.
compose:
  id: live-compose-guide-accessibility-semantics
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.semantics
  sections:
    - id: live-compose-guide-accessibility-semantics-adapt-tree
      title: Adapt the tree
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-adapt-tree-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-alerts-pop-ups
      title: Alerts and pop ups
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-alerts-pop-ups-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-custom-actions
      title: Custom actions
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-custom-actions-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-custom-actions-2
      title: Custom actions
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-custom-actions-2-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-error-components
      title: Error components
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-error-components-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-headings
      title: Headings
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-headings-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-inspecting-tree
      title: Inspect the tree
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-inspecting-tree-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-list-item-info
      title: List and item information
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-list-item-info-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-main-content
      title: Introduction
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-main-content-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-merged-unmerged
      title: Merged and unmerged tree
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-merged-unmerged-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-progress-tracking
      title: Progress tracking components
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-progress-tracking-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-properties
      title: Semantic properties
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-properties-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-properties-2
      title: Semantic properties
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-properties-2-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-semantic-tree
      title: Semantics tree
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-semantic-tree-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-state-description
      title: State description
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-state-description-source
      relatedIds: []
    - id: live-compose-guide-accessibility-semantics-window-like
      title: Window-like components
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-semantics-window-like-source
      relatedIds: []
---

# Semantics

Public source: https://developer.android.com/develop/ui/compose/accessibility/semantics

## Adapt the tree

As mentioned before, you can override or clear certain semantics properties or change the merging behavior of the tree. This is particularly relevant when you're creating your own custom components. Without setting the correct properties and merge behavior, your app might not be accessible, and tests might behave differently than you expect. If you want to learn more about testing, see the testing guide.

Sources: [live-compose-guide-accessibility-semantics-adapt-tree-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#adapt-tree)

## Alerts and pop ups

If your component is an alert or a pop up, like a Snackbar, you might want to signal to accessibility services that a new structure or updates to content can be conveyed to users.

Alert-like components can be marked with the liveRegion semantics property. This allows accessibility services to automatically notify the user of changes to this component, or its children:

PopupAlert(
    message = "You have a new message",
    modifier = Modifier.semantics {
        liveRegion = LiveRegionMode.Polite
    }
)AccessibilitySnippets.kt

You should use liveRegionMode.Polite in most cases where users' attention should only briefly be drawn to alerts or important changing content on-screen.

You should use liveRegion.Assertive sparingly to avoid disruptive feedback. It should be used for situations where it's crucial that users are made aware of time-sensitive content:

PopupAlert(
    message = "Emergency alert incoming",
    modifier = Modifier.semantics {
        liveRegion = LiveRegionMode.Assertive
    }
)AccessibilitySnippets.kt

Live regions shouldn't be used on content that updates frequently, such as countdown timers, to avoid overwhelming users with constant feedback.

Sources: [live-compose-guide-accessibility-semantics-alerts-pop-ups-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#alerts-pop-ups)

## Custom actions

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

Sources: [live-compose-guide-accessibility-semantics-custom-actions-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#custom-actions)

## Custom actions

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

Sources: [live-compose-guide-accessibility-semantics-custom-actions-2-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#custom-actions)

## Error components

For other content types, such as error-like components, you might want to expand on the main semantic information for users with accessibility needs. When defining error states, you can inform the accessibility services of its error semantics, and provide expanded error messaging.

In this example, TalkBack reads the main error text information, followed by additional, expanded messaging:

Error(
    errorText = "Fields cannot be empty",
    modifier = Modifier
        .semantics {
            error("Please add both email and password")
        }
)AccessibilitySnippets.kt

Sources: [live-compose-guide-accessibility-semantics-error-components-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#error-components)

## Headings

Apps often contain screens with text-rich content, like long articles or news pages, which are usually divided into different subsections with headings:

Figure 3.

A blog post with the article text in a scrollable container.

Users with accessibility needs can have difficulties navigating such a screen easily. To improve the navigation experience, some accessibility services allow for easier navigation directly between sections or headings. To enable this, indicate that your component is a heading by defining its semantics property:

@Composable
private fun Subsection(text: String) {
    Text(
        text = text,
        style = MaterialTheme.typography.headlineSmall,
        modifier = Modifier.semantics { heading() }
    )
}AccessibilitySnippets.kt

Sources: [live-compose-guide-accessibility-semantics-headings-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#headings)

## Inspect the tree

The semantics tree is in fact two different trees. There's a merged Semantics tree, which merges descendant nodes when mergeDescendants is set to true. There's also an unmerged Semantics tree, which does not apply the merging, but keeps every node intact. Accessibility services use the unmerged tree and apply their own merging algorithms, taking into consideration the mergeDescendants property. The testing framework uses the merged tree by default.

You can inspect both trees with the printToLog() method. By default, and as in the earlier examples, the merged tree is logged. To print the unmerged tree instead, set the useUnmergedTree parameter of the onRoot() matcher to true:

composeTestRule.onRoot(useUnmergedTree = true).printToLog("MY TAG")SemanticsSnippets.kt

The Layout Inspector lets you display both the merged and the unmerged Semantics tree, by selecting the preferred one in the view filter:

Figure 11.

Layout Inspector view options, allowing both the display of the merged and the unmerged Semantics tree.

For each node in your tree, the Layout Inspector shows both the Merged Semantics and the Semantics set on that node in the properties panel:

Figure 12.

Semantics properties merged and set.

By default, matchers in the Testing Framework use the merged Semantics tree. That's why you can interact with a Button by matching the text shown inside it:

composeTestRule.onNodeWithText("Like").performClick()SemanticsSnippets.kt

Override this behavior by setting the useUnmergedTree parameter of the matchers to true, as with the onRoot matcher.

Sources: [live-compose-guide-accessibility-semantics-inspecting-tree-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#inspecting-tree)

## List and item information

In custom lists and grids with many items, it might be helpful for accessibility services to also receive more detailed information, like the total number of items and indices.

By using collectionInfo and collectionItemInfo semantics on the list and items respectively, in this long list, accessibility services can inform users of what item index they are at out of the total collection, in addition to textual semantic information:

MilkyWayList(
    modifier = Modifier
        .semantics {
            collectionInfo = CollectionInfo(
                rowCount = milkyWay.count(),
                columnCount = 1
            )
        }
) {
    milkyWay.forEachIndexed { index, text ->
        Text(
            text = text,
            modifier = Modifier.semantics {
                collectionItemInfo =
                    CollectionItemInfo(index, 0, 0, 0)
            }
        )
    }
}AccessibilitySnippets.kt

Sources: [live-compose-guide-accessibility-semantics-list-item-info-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#list-item-info)

## Introduction

Aside from the primary information that a composable carries, like a text string of a Text composable, it can be helpful to have more supplemental information about UI elements.

Information about the meaning and role of a component in Compose is called semantics, which are a way to provide additional context about composables to services like accessibility, autofill, and testing. For example, a camera icon might visually just be an image, but the semantic meaning could be "Take a photo".

By combining the appropriate semantics with the appropriate Compose APIs, you provide as much information about your component as possible to accessibility services, which then decide how to represent it to the user.

Material and Compose UI and Foundation APIs come with built-in semantics that follow their specific role and function, but you can also modify these semantics for existing APIs or set new ones for custom components, according to your specific requirements.

Sources: [live-compose-guide-accessibility-semantics-main-content-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#main-content)

## Merged and unmerged tree

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

Sources: [live-compose-guide-accessibility-semantics-merged-unmerged-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#merged-unmerged)

## Progress tracking components

For custom components that track progress, you might want to notify users of their progress changes, including the current progress value, its range, and step size. You can do so with progressBarRangeInfo semantics―this ensures that accessibility services are aware of progress changes, and can update users accordingly. Different assistive technologies may also have unique ways of hinting at increasing and decreasing progression.

ProgressInfoBar(
    modifier = Modifier
        .semantics {
            progressBarRangeInfo =
                ProgressBarRangeInfo(
                    current = progress,
                    range = 0F..1F
                )
        }
)AccessibilitySnippets.kt

Sources: [live-compose-guide-accessibility-semantics-progress-tracking-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#progress-tracking)

## Semantic properties

Semantic properties convey the meaning of the corresponding composable. For example, the Text composable contains a semantic property text, because that's the meaning of that composable. An Icon contains a contentDescription property (if set by the developer) that conveys in text what the meaning of the icon is.

Consider how semantics properties convey the meaning of a composable. Consider a Switch. This is how it looks to the user:

Figure 1.

A

Switch

in its "On" and "Off" state.

To describe the meaning of this element, you could say the following: "This is a Switch, which is a toggleable element in its 'On' state. You can click it to interact with it."

This is exactly what the semantics properties are used for. The semantics node of this Switch element contains the following properties, as visualized with the Layout Inspector:

Figure 2.

Layout Inspector showing the Semantics properties of a

Switch

composable.

The Role indicates the type of element. The StateDescription describes how the "On" state should be referenced. By default this is a localized version of the word "On", but this can be made more specific (for example, "Enabled") based on the context. The ToggleableState is the current state of the Switch. The OnClick property references the method used to interact with this element.

Keeping track of the semantics properties of each composable in your app unlocks a lot of powerful possibilities:

Accessibility services use the properties to represent UI shown on the screen and allow users to interact with it. For the Switch composable, Talkback might announce: "On; Switch; double tap to toggle". The user can double tap their screen to toggle the Switch off.

The Testing framework uses the properties to find nodes, interact with them, and make assertions: val mySwitch = SemanticsMatcher.expectValue( SemanticsProperties.Role, Role.Switch ) composeTestRule.onNode(mySwitch) .performClick() .assertIsOff()SemanticsSnippets.kt

Composables and modifiers that are built on top of the Compose foundation library already set the relevant properties for you by default. Optionally, you can change these properties manually, to improve the accessibility

Sources: [live-compose-guide-accessibility-semantics-properties-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#properties)

## Semantic properties

support for specific use cases, or change your composables' merging or clearing strategy.

To signal the specific content type of your component to accessibility services, you can apply a variety of different semantics. These additions will support the main semantic information in place and help accessibility services fine-tune how your component is represented, announced, or interacted with.

For a full list of semantics properties, see the SemanticsProperties object. For a full list of possible Accessibility Actions, see the SemanticsActions object.

Sources: [live-compose-guide-accessibility-semantics-properties-2-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#properties)

## Recommended for you

Note: link text is displayed when JavaScript is off

Accessibility in Compose

Material Design 2 in Compose

Testing your Compose layout

Sources: [live-compose-guide-accessibility-semantics-recommended-for-you-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#recommended_for_you)

## Semantics tree

A composition describes the UI of your app and is produced by running composables. The composition is a tree-structure that consists of the composables that describe your UI.

Next to the Composition, there exists a parallel tree, called the semantics tree. This tree describes your UI in an alternative manner that is understandable for Accessibility services and for the Testing framework. Accessibility services use the tree to describe the app to users with a specific need. The testing framework uses the tree to interact with your app and make assertions about it. The Semantics tree does not contain the information on how to draw your composables, but it contains information about the semantic meaning of your composables.

Figure 8.

A typical UI hierarchy and its semantics tree.

If your app consists of composables and modifiers from the Compose foundation and material library, the Semantics tree is automatically filled and generated for you. However when you're adding custom low-level composables, you have to manually provide its semantics. There might also be situations where your tree does not correctly or fully represent the meaning of the elements on the screen, in which case you can adapt the tree.

Consider for example this custom calendar composable:

Figure 9.

A custom calendar composable with selectable day elements.

In this example, the entire calendar is implemented as a single low-level composable, using the Layout composable and drawing directly to the Canvas. If you don't do anything else, accessibility services won't receive enough information about the content of the composable and the user's selection within the calendar. For example, if a user clicks on the day containing 17, the accessibility framework only receives the description information for the whole calendar control. In this case, the TalkBack accessibility service would announce "Calendar" or, only slightly better, "April Calendar" and the user would be left to wonder what day was selected. To make this composable more accessible, you'll need to add semantic information manually.

Sources: [live-compose-guide-accessibility-semantics-semantic-tree-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#semantic-tree)

## State description

A composable can define a stateDescription for semantics which the Android framework uses to read out the state that the composable is in. For example, a toggleable composable can be in either a "checked" or an "unchecked" state. In some cases, you might want to override the default state description labels that Compose uses. You can do so by explicitly specifying the state description labels before defining a composable as toggleable:

@Composable
private fun TopicItem(itemTitle: String, selected: Boolean, onToggle: () -> Unit) {
    val stateSubscribed = stringResource(R.string.subscribed)
    val stateNotSubscribed = stringResource(R.string.not_subscribed)
    Row(
        modifier = Modifier
            .semantics {
                // Set any explicit semantic properties
                stateDescription = if (selected) stateSubscribed else stateNotSubscribed
            }
            .toggleable(
                value = selected,
                onValueChange = { onToggle() }
            )
    ) {
        /* ... */
    }
}AccessibilitySnippets.kt

Sources: [live-compose-guide-accessibility-semantics-state-description-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#state-description)

## Window-like components

Window-like custom components, similar to ModalBottomSheet, need additional signals to differentiate them from surrounding content. For this, you can use paneTitle semantics, so that any relevant window or pane changes may be represented appropriately by the accessibility services, along with its main semantic information:

ShareSheet(
    message = "Choose how to share this photo",
    modifier = Modifier
        .fillMaxWidth()
        .align(Alignment.TopCenter)
        .semantics { paneTitle = "New bottom sheet" }
)AccessibilitySnippets.kt

For reference, see how Material 3 uses paneTitle for its components.

Sources: [live-compose-guide-accessibility-semantics-window-like-source](https://developer.android.com/develop/ui/compose/accessibility/semantics#window-like)
