---
type: reference
title: Testing APIs
description: "Public source: https://developer.android.com/develop/ui/compose/testing/apis"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-testing-apis-actions-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/apis#actions
    revision: web:compose-guide-testing-apis:content@sha256:ee822fd20d95c653147c8221503470414af356fed67318ac6e35616dc44f395f
    sha256: d928349cf0810dc8cc059d8fb79ed358a67e9fb52863801e0cd7da005f58e546
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To inject an action on a node, call a perform…() function:

      composeTestRule.onNode(...).performClick()

      Here are some examples of actions:

      performClick(),
      performSemanticsAction(key),
      performKeyPress(keyEvent),
      performGesture { swipeLeft() }

      You can browse the complete list in the Compose Testing cheat sheet.
  - id: live-compose-guide-testing-apis-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/apis#additional_resources
    revision: web:compose-guide-testing-apis:content@sha256:ee822fd20d95c653147c8221503470414af356fed67318ac6e35616dc44f395f
    sha256: cf0eb97731b603404aa1be66d9042d2d0bd9a50c31f919d443ed9f1865498c81
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Test apps on Android: The main Android testing landing page provides a broader view of testing fundamentals and techniques.

      Fundamentals of testing: Learn more about the core concepts behind testing an Android app.

      Local tests: You can run some tests locally, on your own workstation.

      Instrumented tests: It is good practice to also run instrumented tests. That is, tests that run directly on-device.

      Continuous integration: Continuous integration lets you integrate your tests into your deployment pipeline.

      Test different screen sizes: With some many devices available to users, you should test for different screen sizes.

      Espresso: While intended for View-based UIs, Espresso knowledge can still be helpful for some aspects of Compose testing.
  - id: live-compose-guide-testing-apis-assertions-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/apis#assertions
    revision: web:compose-guide-testing-apis:content@sha256:ee822fd20d95c653147c8221503470414af356fed67318ac6e35616dc44f395f
    sha256: 98ca595c129465ee4fb23ba91cfd3e81df249f7dc1d0328a75f7477a99bf1459
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Check assertions by calling assert() on the SemanticsNodeInteraction returned by a finder with one or multiple matchers:

      // Single matcher:
      composeTestRule
          .onNode(matcher)
          .assert(hasText("Button")) // hasText is a SemanticsMatcher

      // Multiple matchers can use and / or
      composeTestRule
          .onNode(matcher).assert(hasText("Button") or hasText("Button2"))

      You can also use convenience functions for the most common assertions, such as assertExists, assertIsDisplayed, and assertTextEquals. You can browse the complete list in the Compose Testing cheat sheet.

      There are also functions to check assertions on a collection of nodes:

      // Check number of matched nodes
      composeTestRule
          .onAllNodesWithContentDescription("Beatle").assertCountEquals(4)
      // At least one matches
      composeTestRule
          .onAllNodesWithContentDescription("Beatle").assertAny(hasTestTag("Drummer"))
      // All of them match
      composeTestRule
          .onAllNodesWithContentDescription("Beatle").assertAll(hasClickAction())
  - id: live-compose-guide-testing-apis-finders-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/apis#finders
    revision: web:compose-guide-testing-apis:content@sha256:ee822fd20d95c653147c8221503470414af356fed67318ac6e35616dc44f395f
    sha256: 1a8ced9e6250b4c0eacb6cb70beae81841508c2ff9793e682015dc6f05c38309
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: You can use onNode and onAllNodes to select one or multiple nodes respectively, but you can also use convenience finders for the most common searches, such as onNodeWithText, and onNodeWithContentDescription. You can browse the complete list in the Compose Testing cheat sheet.
  - id: live-compose-guide-testing-apis-hierarchical-matchers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/apis#hierarchical-matchers
    revision: web:compose-guide-testing-apis:content@sha256:ee822fd20d95c653147c8221503470414af356fed67318ac6e35616dc44f395f
    sha256: 2413bd30a3eeeac7a726cd224550db568fc001ddd71044bfb221fa4ce835e557
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Hierarchical matchers let you go up or down the semantics tree and perform matching.

      fun hasParent(matcher: SemanticsMatcher): SemanticsMatcher
      fun hasAnySibling(matcher: SemanticsMatcher): SemanticsMatcher
      fun hasAnyAncestor(matcher: SemanticsMatcher): SemanticsMatcher
      fun hasAnyDescendant(matcher: SemanticsMatcher):  SemanticsMatcher

      Here are some examples of these matchers being used:

      composeTestRule.onNode(hasParent(hasText("Button")))
          .assertIsDisplayed()
  - id: live-compose-guide-testing-apis-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/apis#main-content
    revision: web:compose-guide-testing-apis:content@sha256:ee822fd20d95c653147c8221503470414af356fed67318ac6e35616dc44f395f
    sha256: 775c02ae57fea444feca90cca5846c1ebf48e9052e5433c478ff3027e78ebca8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are three main ways to interact with UI elements:

      Finders let you select one or multiple elements (or nodes in the semantics tree) to make assertions or perform actions on them.

      Assertions are used to verify that the elements exist or have certain attributes.

      Actions inject simulated user events on the elements, such as clicks or other gestures.

      Some of these APIs accept a SemanticsMatcher to refer to one or more nodes in the semantics tree.
  - id: live-compose-guide-testing-apis-matchers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/apis#matchers
    revision: web:compose-guide-testing-apis:content@sha256:ee822fd20d95c653147c8221503470414af356fed67318ac6e35616dc44f395f
    sha256: 50112eaf87f9f0c7122d3d49256e4818afd38d33fa3481e55666628c31a093fd
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: A variety of matchers are available for testing your Compose code.
  - id: live-compose-guide-testing-apis-select-multiple-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/apis#select-multiple
    revision: web:compose-guide-testing-apis:content@sha256:ee822fd20d95c653147c8221503470414af356fed67318ac6e35616dc44f395f
    sha256: 4ea226e7631c2df74957d803a0daa93427484695d069511fe7a2b1dc17773635
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      composeTestRule
          .onAllNodes(<<SemanticsMatcher>>): SemanticsNodeInteractionCollection

      // Example
      composeTestRule
          .onAllNodes(hasText("Button")) // Equivalent to onAllNodesWithText("Button")
  - id: live-compose-guide-testing-apis-select-single-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/apis#select-single
    revision: web:compose-guide-testing-apis:content@sha256:ee822fd20d95c653147c8221503470414af356fed67318ac6e35616dc44f395f
    sha256: a49b477bc275d5866163d2da7ab89550001a2dcfa7d32f7ae70a115c9a95c99d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      composeTestRule.onNode(<<SemanticsMatcher>>, useUnmergedTree = false): SemanticsNodeInteraction

      // Example
      composeTestRule
          .onNode(hasText("Button")) // Equivalent to onNodeWithText("Button")
  - id: live-compose-guide-testing-apis-selectors-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/apis#selectors
    revision: web:compose-guide-testing-apis:content@sha256:ee822fd20d95c653147c8221503470414af356fed67318ac6e35616dc44f395f
    sha256: 503d11a8feb326aa05a504c09d0e927daf2169f0a92d490eb75268b3f4532721
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      An alternative way to create tests is to use selectors which can make some tests more readable.

      composeTestRule.onNode(hasTestTag("Players"))
          .onChildren()
          .filter(hasClickAction())
          .assertCountEquals(4)
          .onFirst()
          .assert(hasText("John"))

      You can browse the complete list in the Compose Testing cheat sheet.
  - id: live-compose-guide-testing-apis-unmerged-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/apis#unmerged
    revision: web:compose-guide-testing-apis:content@sha256:ee822fd20d95c653147c8221503470414af356fed67318ac6e35616dc44f395f
    sha256: f3ce192d6fba5ca654666b285ac9b16e06eb07fcf70a00cc5d22082f1b217751
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Some nodes merge the semantics information of their children. For example, a button with two text elements merges the text element labels:

      MyButton {
          Text("Hello")
          Text("World")
      }

      From a test, use printToLog() to show the semantics tree:

      composeTestRule.onRoot().printToLog("TAG")

      This code prints the following output:

      Node #1 at (...)px
       |-Node #2 at (...)px
         Role = 'Button'
         Text = '[Hello, World]'
         Actions = [OnClick, GetTextLayoutResult]
         MergeDescendants = 'true'

      If you need to match a node of what would be the unmerged tree, you can set useUnmergedTree to true:

      composeTestRule.onRoot(useUnmergedTree = true).printToLog("TAG")

      This code prints the following output:

      Node #1 at (...)px
       |-Node #2 at (...)px
         OnClick = '...'
         MergeDescendants = 'true'
          |-Node #3 at (...)px
          | Text = '[Hello]'
          |-Node #5 at (83.0, 86.0, 191.0, 135.0)px
            Text = '[World]'

      The useUnmergedTree parameter is available in all finders. For example, here it's used in an onNodeWithText finder.

      composeTestRule
          .onNodeWithText("World", useUnmergedTree = true).assertIsDisplayed()
compose:
  id: live-compose-guide-testing-apis
  artifact: androidx.compose.ui:ui-test
  fqn: androidx.compose.ui.test
  sections:
    - id: live-compose-guide-testing-apis-actions
      title: Actions
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-apis-actions-source
      relatedIds: []
    - id: live-compose-guide-testing-apis-additional-resources
      title: Additional Resources
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-apis-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-testing-apis-assertions
      title: Assertions
      aliases:
        - androidx.compose.ui.test.SemanticsMatcher
        - androidx.compose.ui.test.SemanticsNodeInteraction
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-apis-assertions-source
      relatedIds: []
    - id: live-compose-guide-testing-apis-finders
      title: Finders
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-apis-finders-source
      relatedIds: []
    - id: live-compose-guide-testing-apis-hierarchical-matchers
      title: Hierarchical matchers
      aliases:
        - androidx.compose.ui.test.SemanticsMatcher
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-apis-hierarchical-matchers-source
      relatedIds: []
    - id: live-compose-guide-testing-apis-main-content
      title: Introduction
      aliases:
        - androidx.compose.ui.test.SemanticsMatcher
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-apis-main-content-source
      relatedIds: []
    - id: live-compose-guide-testing-apis-matchers
      title: Matchers
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-apis-matchers-source
      relatedIds: []
    - id: live-compose-guide-testing-apis-select-multiple
      title: Select multiple nodes
      aliases:
        - androidx.compose.ui.test.SemanticsMatcher
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-apis-select-multiple-source
      relatedIds: []
    - id: live-compose-guide-testing-apis-select-single
      title: Select a single node
      aliases:
        - androidx.compose.ui.test.SemanticsMatcher
        - androidx.compose.ui.test.SemanticsNodeInteraction
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-apis-select-single-source
      relatedIds: []
    - id: live-compose-guide-testing-apis-selectors
      title: Selectors
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-apis-selectors-source
      relatedIds: []
    - id: live-compose-guide-testing-apis-unmerged
      title: Unmerged tree
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-apis-unmerged-source
      relatedIds: []
---

# Testing APIs

Public source: https://developer.android.com/develop/ui/compose/testing/apis

## Actions

To inject an action on a node, call a perform…() function:

composeTestRule.onNode(...).performClick()

Here are some examples of actions:

performClick(),
performSemanticsAction(key),
performKeyPress(keyEvent),
performGesture { swipeLeft() }

You can browse the complete list in the Compose Testing cheat sheet.

Sources: [live-compose-guide-testing-apis-actions-source](https://developer.android.com/develop/ui/compose/testing/apis#actions)

## Additional Resources

Test apps on Android: The main Android testing landing page provides a broader view of testing fundamentals and techniques.

Fundamentals of testing: Learn more about the core concepts behind testing an Android app.

Local tests: You can run some tests locally, on your own workstation.

Instrumented tests: It is good practice to also run instrumented tests. That is, tests that run directly on-device.

Continuous integration: Continuous integration lets you integrate your tests into your deployment pipeline.

Test different screen sizes: With some many devices available to users, you should test for different screen sizes.

Espresso: While intended for View-based UIs, Espresso knowledge can still be helpful for some aspects of Compose testing.

Sources: [live-compose-guide-testing-apis-additional-resources-source](https://developer.android.com/develop/ui/compose/testing/apis#additional_resources)

## Assertions

Check assertions by calling assert() on the SemanticsNodeInteraction returned by a finder with one or multiple matchers:

// Single matcher:
composeTestRule
    .onNode(matcher)
    .assert(hasText("Button")) // hasText is a SemanticsMatcher

// Multiple matchers can use and / or
composeTestRule
    .onNode(matcher).assert(hasText("Button") or hasText("Button2"))

You can also use convenience functions for the most common assertions, such as assertExists, assertIsDisplayed, and assertTextEquals. You can browse the complete list in the Compose Testing cheat sheet.

There are also functions to check assertions on a collection of nodes:

// Check number of matched nodes
composeTestRule
    .onAllNodesWithContentDescription("Beatle").assertCountEquals(4)
// At least one matches
composeTestRule
    .onAllNodesWithContentDescription("Beatle").assertAny(hasTestTag("Drummer"))
// All of them match
composeTestRule
    .onAllNodesWithContentDescription("Beatle").assertAll(hasClickAction())

Sources: [live-compose-guide-testing-apis-assertions-source](https://developer.android.com/develop/ui/compose/testing/apis#assertions)

## Finders

You can use onNode and onAllNodes to select one or multiple nodes respectively, but you can also use convenience finders for the most common searches, such as onNodeWithText, and onNodeWithContentDescription. You can browse the complete list in the Compose Testing cheat sheet.

Sources: [live-compose-guide-testing-apis-finders-source](https://developer.android.com/develop/ui/compose/testing/apis#finders)

## Hierarchical matchers

Hierarchical matchers let you go up or down the semantics tree and perform matching.

fun hasParent(matcher: SemanticsMatcher): SemanticsMatcher
fun hasAnySibling(matcher: SemanticsMatcher): SemanticsMatcher
fun hasAnyAncestor(matcher: SemanticsMatcher): SemanticsMatcher
fun hasAnyDescendant(matcher: SemanticsMatcher):  SemanticsMatcher

Here are some examples of these matchers being used:

composeTestRule.onNode(hasParent(hasText("Button")))
    .assertIsDisplayed()

Sources: [live-compose-guide-testing-apis-hierarchical-matchers-source](https://developer.android.com/develop/ui/compose/testing/apis#hierarchical-matchers)

## Introduction

There are three main ways to interact with UI elements:

Finders let you select one or multiple elements (or nodes in the semantics tree) to make assertions or perform actions on them.

Assertions are used to verify that the elements exist or have certain attributes.

Actions inject simulated user events on the elements, such as clicks or other gestures.

Some of these APIs accept a SemanticsMatcher to refer to one or more nodes in the semantics tree.

Sources: [live-compose-guide-testing-apis-main-content-source](https://developer.android.com/develop/ui/compose/testing/apis#main-content)

## Matchers

A variety of matchers are available for testing your Compose code.

Sources: [live-compose-guide-testing-apis-matchers-source](https://developer.android.com/develop/ui/compose/testing/apis#matchers)

## Select multiple nodes

composeTestRule
    .onAllNodes(<<SemanticsMatcher>>): SemanticsNodeInteractionCollection

// Example
composeTestRule
    .onAllNodes(hasText("Button")) // Equivalent to onAllNodesWithText("Button")

Sources: [live-compose-guide-testing-apis-select-multiple-source](https://developer.android.com/develop/ui/compose/testing/apis#select-multiple)

## Select a single node

composeTestRule.onNode(<<SemanticsMatcher>>, useUnmergedTree = false): SemanticsNodeInteraction

// Example
composeTestRule
    .onNode(hasText("Button")) // Equivalent to onNodeWithText("Button")

Sources: [live-compose-guide-testing-apis-select-single-source](https://developer.android.com/develop/ui/compose/testing/apis#select-single)

## Selectors

An alternative way to create tests is to use selectors which can make some tests more readable.

composeTestRule.onNode(hasTestTag("Players"))
    .onChildren()
    .filter(hasClickAction())
    .assertCountEquals(4)
    .onFirst()
    .assert(hasText("John"))

You can browse the complete list in the Compose Testing cheat sheet.

Sources: [live-compose-guide-testing-apis-selectors-source](https://developer.android.com/develop/ui/compose/testing/apis#selectors)

## Unmerged tree

Some nodes merge the semantics information of their children. For example, a button with two text elements merges the text element labels:

MyButton {
    Text("Hello")
    Text("World")
}

From a test, use printToLog() to show the semantics tree:

composeTestRule.onRoot().printToLog("TAG")

This code prints the following output:

Node #1 at (...)px
 |-Node #2 at (...)px
   Role = 'Button'
   Text = '[Hello, World]'
   Actions = [OnClick, GetTextLayoutResult]
   MergeDescendants = 'true'

If you need to match a node of what would be the unmerged tree, you can set useUnmergedTree to true:

composeTestRule.onRoot(useUnmergedTree = true).printToLog("TAG")

This code prints the following output:

Node #1 at (...)px
 |-Node #2 at (...)px
   OnClick = '...'
   MergeDescendants = 'true'
    |-Node #3 at (...)px
    | Text = '[Hello]'
    |-Node #5 at (83.0, 86.0, 191.0, 135.0)px
      Text = '[World]'

The useUnmergedTree parameter is available in all finders. For example, here it's used in an onNodeWithText finder.

composeTestRule
    .onNodeWithText("World", useUnmergedTree = true).assertIsDisplayed()

Sources: [live-compose-guide-testing-apis-unmerged-source](https://developer.android.com/develop/ui/compose/testing/apis#unmerged)
