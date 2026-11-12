---
type: reference
title: Test animations
description: "Public source: https://developer.android.com/develop/ui/compose/animation/testing"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-animation-testing-example-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/testing#example
    revision: web:compose-guide-animation-testing:content@sha256:0a1b60bb6144f290a9a2e4b5c403e16f61bdd3aa15aed6678a3473c16ac4423b
    sha256: 620c26780492084a033beaf3e7c65d190a75f599466936b058fb8ca7a2674814
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      @Test
      fun runWithoutImplicitWaitSample() = runComposeUiTest {
          setContent { MainScreen() }
          mainClock.autoAdvance = false

          // Trigger an animation
          onNodeWithText("Start Animation").performClick()

          // Step through the animation frame-by-frame
          while (hasPendingWork()) {
              mainClock.advanceTimeByFrame()
              waitForIdle()
              runOnUiThread {
                  // Suppress implicit synchronization inside this block to avoid redundant
                  // waits on each node query, making the frame assertions execute much faster.
                  runWithoutImplicitWait {
                      val box1 = onNodeWithTag("Box1").fetchSemanticsNode()
                      val box2 = onNodeWithTag("Box2").fetchSemanticsNode()
                      val box3 = onNodeWithTag("Box3").fetchSemanticsNode()

                      // Assert the exact intermediate state of all three properties for this frame
                      assert(box1.boundsInRoot.right <= box2.boundsInRoot.left)
                      assert(box2.boundsInRoot.right <= box3.boundsInRoot.left)
                  }
              }
          }
      }TestSyncSnippets.kt
  - id: live-compose-guide-animation-testing-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/testing#main-content
    revision: web:compose-guide-animation-testing:content@sha256:0a1b60bb6144f290a9a2e4b5c403e16f61bdd3aa15aed6678a3473c16ac4423b
    sha256: e69338a67ac768a032db9b3389886d2da444648c68177860399287a9bd3f743c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose offers ComposeTestRule that lets you write tests for animations in a deterministic manner with full control over the test clock. This lets you verify intermediate animation values. In addition, a test can run quicker than the actual duration of the animation.

      ComposeTestRule exposes its test clock as mainClock. You can set the autoAdvance property to false to control the clock in your test code. After initiating the animation you want to test, the clock can be moved forward with advanceTimeBy.

      One thing to note here is that advanceTimeBy doesn't move the clock exactly by the specified duration. Rather, it rounds it up to the nearest duration that is a multiple of the frame duration.

      @get:Rule
      val rule = createComposeRule()

      @Test
      fun testAnimationWithClock() {
          // Pause animations
          rule.mainClock.autoAdvance = false
          var enabled by mutableStateOf(false)
          rule.setContent {
              val color by animateColorAsState(
                  targetValue = if (enabled) Color.Red else Color.Green,
                  animationSpec = tween(durationMillis = 250)
              )
              Box(Modifier.size(64.dp).background(color))
          }

          // Initiate the animation.
          enabled = true

          // Let the animation proceed.
          rule.mainClock.advanceTimeBy(50L)

          // Compare the result with the image showing the expected result.
          // `assertAgainGolden` needs to be implemented in your code.
          rule.onRoot().captureToImage().assertAgainstGolden()
      }AnimationTestingSnippets.kt
  - id: live-compose-guide-animation-testing-optimize-tests-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/testing#optimize-tests
    revision: web:compose-guide-animation-testing:content@sha256:0a1b60bb6144f290a9a2e4b5c403e16f61bdd3aa15aed6678a3473c16ac4423b
    sha256: 78dfc3784603b6e2bf32e40ba6f77a5ca9a4597c57bcb6fbcd0ff59ebd23ab7c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: When testing high-fidelity animations, you often need to disable auto-advance and manually step through frames to assert intermediate UI states. For these specific frame-by-frame loops, use the runWithoutImplicitWait method to execute your assertions. Standard node queries (like onNodeWithTag or fetchSemanticsNode) trigger implicit synchronizations that are redundant when you are manually controlling the clock, so bypassing them significantly speeds up your test runtimes.
  - id: live-compose-guide-animation-testing-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/testing#recommended_for_you
    revision: web:compose-guide-animation-testing:content@sha256:0a1b60bb6144f290a9a2e4b5c403e16f61bdd3aa15aed6678a3473c16ac4423b
    sha256: a55611f6d724437ea2932474b65ddfaa41a1b69b01c7234c5c7d956102c43cb5
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Testing your Compose layout

      Other considerations

      Customize animations
  - id: live-compose-guide-animation-testing-usage-guidelines-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/testing#usage-guidelines
    revision: web:compose-guide-animation-testing:content@sha256:0a1b60bb6144f290a9a2e4b5c403e16f61bdd3aa15aed6678a3473c16ac4423b
    sha256: 8a5454922f7c6161ed2156d066a30741304311b7e3974ce2b06df7fd0782f93e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Manual clock management: Use this API when mainClock.autoAdvance is set to false and the UI is in a known, stable state for the current frame.

      UI thread execution: To ensure the stability of the UI tree, call runWithoutImplicitWait on the UI thread, such as with runOnUiThread. Running it off the UI thread exposes your test to race conditions and stale state reads.

      Read-only assertions: The block should strictly contain read-only assertions. Any actions that mutate state should be performed outside of this block.
compose:
  id: live-compose-guide-animation-testing
  artifact: androidx.compose.ui:ui-test
  fqn: androidx.compose.ui.test.MainTestClock
  sections:
    - id: live-compose-guide-animation-testing-example
      title: Example
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-animation-testing-example-source
      relatedIds: []
    - id: live-compose-guide-animation-testing-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-animation-testing-main-content-source
      relatedIds: []
    - id: live-compose-guide-animation-testing-optimize-tests
      title: Optimize animation tests
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-animation-testing-optimize-tests-source
      relatedIds: []
    - id: live-compose-guide-animation-testing-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-animation-testing-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-animation-testing-usage-guidelines
      title: Usage guidelines
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-animation-testing-usage-guidelines-source
      relatedIds: []
---

# Test animations

Public source: https://developer.android.com/develop/ui/compose/animation/testing

## Example

@Test
fun runWithoutImplicitWaitSample() = runComposeUiTest {
    setContent { MainScreen() }
    mainClock.autoAdvance = false

    // Trigger an animation
    onNodeWithText("Start Animation").performClick()

    // Step through the animation frame-by-frame
    while (hasPendingWork()) {
        mainClock.advanceTimeByFrame()
        waitForIdle()
        runOnUiThread {
            // Suppress implicit synchronization inside this block to avoid redundant
            // waits on each node query, making the frame assertions execute much faster.
            runWithoutImplicitWait {
                val box1 = onNodeWithTag("Box1").fetchSemanticsNode()
                val box2 = onNodeWithTag("Box2").fetchSemanticsNode()
                val box3 = onNodeWithTag("Box3").fetchSemanticsNode()

                // Assert the exact intermediate state of all three properties for this frame
                assert(box1.boundsInRoot.right <= box2.boundsInRoot.left)
                assert(box2.boundsInRoot.right <= box3.boundsInRoot.left)
            }
        }
    }
}TestSyncSnippets.kt

Sources: [live-compose-guide-animation-testing-example-source](https://developer.android.com/develop/ui/compose/animation/testing#example)

## Introduction

Compose offers ComposeTestRule that lets you write tests for animations in a deterministic manner with full control over the test clock. This lets you verify intermediate animation values. In addition, a test can run quicker than the actual duration of the animation.

ComposeTestRule exposes its test clock as mainClock. You can set the autoAdvance property to false to control the clock in your test code. After initiating the animation you want to test, the clock can be moved forward with advanceTimeBy.

One thing to note here is that advanceTimeBy doesn't move the clock exactly by the specified duration. Rather, it rounds it up to the nearest duration that is a multiple of the frame duration.

@get:Rule
val rule = createComposeRule()

@Test
fun testAnimationWithClock() {
    // Pause animations
    rule.mainClock.autoAdvance = false
    var enabled by mutableStateOf(false)
    rule.setContent {
        val color by animateColorAsState(
            targetValue = if (enabled) Color.Red else Color.Green,
            animationSpec = tween(durationMillis = 250)
        )
        Box(Modifier.size(64.dp).background(color))
    }

    // Initiate the animation.
    enabled = true

    // Let the animation proceed.
    rule.mainClock.advanceTimeBy(50L)

    // Compare the result with the image showing the expected result.
    // `assertAgainGolden` needs to be implemented in your code.
    rule.onRoot().captureToImage().assertAgainstGolden()
}AnimationTestingSnippets.kt

Sources: [live-compose-guide-animation-testing-main-content-source](https://developer.android.com/develop/ui/compose/animation/testing#main-content)

## Optimize animation tests

When testing high-fidelity animations, you often need to disable auto-advance and manually step through frames to assert intermediate UI states. For these specific frame-by-frame loops, use the runWithoutImplicitWait method to execute your assertions. Standard node queries (like onNodeWithTag or fetchSemanticsNode) trigger implicit synchronizations that are redundant when you are manually controlling the clock, so bypassing them significantly speeds up your test runtimes.

Sources: [live-compose-guide-animation-testing-optimize-tests-source](https://developer.android.com/develop/ui/compose/animation/testing#optimize-tests)

## Recommended for you

Note: link text is displayed when JavaScript is off

Testing your Compose layout

Other considerations

Customize animations

Sources: [live-compose-guide-animation-testing-recommended-for-you-source](https://developer.android.com/develop/ui/compose/animation/testing#recommended_for_you)

## Usage guidelines

Manual clock management: Use this API when mainClock.autoAdvance is set to false and the UI is in a known, stable state for the current frame.

UI thread execution: To ensure the stability of the UI tree, call runWithoutImplicitWait on the UI thread, such as with runOnUiThread. Running it off the UI thread exposes your test to race conditions and stale state reads.

Read-only assertions: The block should strictly contain read-only assertions. Any actions that mutate state should be performed outside of this block.

Sources: [live-compose-guide-animation-testing-usage-guidelines-source](https://developer.android.com/develop/ui/compose/animation/testing#usage-guidelines)
