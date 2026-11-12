---
type: reference
title: Synchronize your tests
description: "Public source: https://developer.android.com/develop/ui/compose/testing/synchronization"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-testing-synchronization-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/synchronization#additional_resources
    revision: web:compose-guide-testing-synchronization:content@sha256:fea0b7c82793985b7de3a01b8d402da6fc160c7500fe75a49ff7d1f7b3c787ba
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
  - id: live-compose-guide-testing-synchronization-disable-autosync-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/synchronization#disable-autosync
    revision: web:compose-guide-testing-synchronization:content@sha256:fea0b7c82793985b7de3a01b8d402da6fc160c7500fe75a49ff7d1f7b3c787ba
    sha256: 5bd4c3be1ab6b0c2eb06fe05df282205c938e6cad5229a91c7ef9b4f10ff21b8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When you call an assertion or action through the ComposeTestRule such as assertExists(), your test is synchronized with the Compose UI. In some cases you might want to stop this synchronization and control the clock yourself. For example, you can control time to take accurate screenshots of an animation at a point where the UI would still be busy. To disable automatic synchronization, set the autoAdvance property in the mainClock to false:

      composeTestRule.mainClock.autoAdvance = false

      Typically you will then advance the time yourself. You can advance exactly one frame with advanceTimeByFrame() or by a specific duration with advanceTimeBy():

      composeTestRule.mainClock.advanceTimeByFrame()
      composeTestRule.mainClock.advanceTimeBy(milliseconds)
  - id: live-compose-guide-testing-synchronization-example-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/synchronization#example-2
    revision: web:compose-guide-testing-synchronization:content@sha256:fea0b7c82793985b7de3a01b8d402da6fc160c7500fe75a49ff7d1f7b3c787ba
    sha256: 0833acfcab711ebffdec1e70441adc546b0d373bfb26e5ef7cbc4bd550f853b8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Historically, because synchronization was strictly prohibited on the main thread, developers had to bounce back-and-forth between the background test runner thread and the UI thread, leading to disjointed tests:

      @Test
      fun testBidirectionalInteropUIUpdates_old() {
          val scenario = launchFragmentInContainer<InteropFragment>()
          composeTestRule.waitForIdle()
          scenario.onFragment { fragment ->
              fragment.legacyButton.performClick()
          }
          // Jump to Test Thread to verify state settles inside compose
          composeTestRule.waitForIdle()
          composeTestRule.onNodeWithText("Legacy Clicks: 1").assertIsDisplayed()
          composeTestRule.onNodeWithText("Increment Legacy TextView").performClick()
          composeTestRule.waitForIdle()
          // Jump back to Main Thread to verify target view state settles
          scenario.onFragment { fragment ->
              assert(fragment.legacyTextView.text.toString() == "Compose Clicks: 1")
          }
      }TestSyncSnippets.kt

      With main thread synchronization enabled, the assertions for Compose and View hierarchies can be executed in the same block:

      @Test
      fun testBidirectionalInteropUIUpdates_new() {
          val scenario = launchFragmentInContainer<InteropFragment>()
          composeTestRule.waitForIdle()
          scenario.onFragment { fragment ->
              fragment.legacyButton.performClick()
              composeTestRule.waitForIdle()
              composeTestRule.onNodeWithText("Legacy Clicks: 1").assertIsDisplayed()
              composeTestRule.onNodeWithText("Increment Legacy TextView").performClick()
              composeTestRule.waitForIdle()
              assert(fragment.legacyTextView.text.toString() == "Compose Clicks: 1")
          }
      }TestSyncSnippets.kt
  - id: live-compose-guide-testing-synchronization-example-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/synchronization#example
    revision: web:compose-guide-testing-synchronization:content@sha256:fea0b7c82793985b7de3a01b8d402da6fc160c7500fe75a49ff7d1f7b3c787ba
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
  - id: live-compose-guide-testing-synchronization-idling-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/synchronization#idling-resources
    revision: web:compose-guide-testing-synchronization:content@sha256:fea0b7c82793985b7de3a01b8d402da6fc160c7500fe75a49ff7d1f7b3c787ba
    sha256: 9d800b0d0af986ad59ed1774b079d500d52e92c8636232fca7422a82aa71690e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose can synchronize tests and the UI so that every action and assertion is done in an idle state, waiting or advancing the clock as needed. However, some asynchronous operations whose results affect the UI state can be run in the background while the test is unaware of them.

      Create and register these idling resources in your test so that they're taken into account when deciding whether the app under test is busy or idle. You don't have to take action unless you need to register additional idling resources, for example, if you run a background job that is not synchronized with Espresso or Compose.

      This API is very similar to Espresso's Idling Resources to indicate whether the subject under test is idle or busy. Use the Compose test rule to register the implementation of the IdlingResource.

      composeTestRule.registerIdlingResource(idlingResource)
      composeTestRule.unregisterIdlingResource(idlingResource)
  - id: live-compose-guide-testing-synchronization-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/synchronization#main-content
    revision: web:compose-guide-testing-synchronization:content@sha256:fea0b7c82793985b7de3a01b8d402da6fc160c7500fe75a49ff7d1f7b3c787ba
    sha256: 29d8e02257d8276af22d52d4a2db59e927b2373663eac6da69f9512f7dc7ed42
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose tests are synchronized by default with your UI. When you call an assertion or an action with the ComposeTestRule, the test is synchronized beforehand, waiting until the UI tree is idle.

      Normally, you don't have to take any action. However, there are some edge cases you should know about.

      When a test is synchronized, your Compose app is advanced in time using a virtual clock. This means Compose tests don't run in real time, so they can pass as fast as possible.

      However, if you don't use the methods that synchronize your tests, no recomposition will occur and the UI will appear to be paused.

      @Test
      fun counterTest() {
          val myCounter = mutableStateOf(0) // State that can cause recompositions.
          var lastSeenValue = 0 // Used to track recompositions.
          composeTestRule.setContent {
              Text(myCounter.value.toString())
              lastSeenValue = myCounter.value
          }
          myCounter.value = 1 // The state changes, but there is no recomposition.

          // Fails because nothing triggered a recomposition.
          assertTrue(lastSeenValue == 1)

          // Passes because the assertion triggers recomposition.
          composeTestRule.onNodeWithText("1").assertExists()
      }

      Note that this requirement only applies to Compose hierarchies and not to the rest of the app.
  - id: live-compose-guide-testing-synchronization-main-thread-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/synchronization#main-thread
    revision: web:compose-guide-testing-synchronization:content@sha256:fea0b7c82793985b7de3a01b8d402da6fc160c7500fe75a49ff7d1f7b3c787ba
    sha256: b35371d00bf5e7208576562094cf911a0e7ccf23d90c7f89c1ec0e341b0375fd
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose testing now supports main thread synchronization, allowing you to safely call waitForIdle— and by extension, Compose UI actions and assertions — directly from the main thread.

      Previously, Compose testing strictly enforced a two-thread model: test execution occurred on a background test thread, while UI updates happened on the main thread. Calling synchronization methods like waitForIdle or runOnIdle from the main thread (for example, inside a runOnUiThread block) would throw an IllegalStateException because the framework enforced strict thread checks to prevent main-thread synchronization.

      With main thread synchronization enabled, the Compose test framework can now advance the clock and process pending work even when blocking calls are made on the main thread.
  - id: live-compose-guide-testing-synchronization-manual-sync-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/synchronization#manual-sync
    revision: web:compose-guide-testing-synchronization:content@sha256:fea0b7c82793985b7de3a01b8d402da6fc160c7500fe75a49ff7d1f7b3c787ba
    sha256: f320b27033849c55e2c57decc2687262a2092cf3bb29e013fbecf062df0a1d90
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In certain cases, you have to synchronize the Compose UI with other parts of your test or the app you're testing.

      The waitForIdle() function waits for Compose to be idle, but the function depends on the autoAdvance property:

      composeTestRule.mainClock.autoAdvance = true // Default
      composeTestRule.waitForIdle() // Advances the clock until Compose is idle.

      composeTestRule.mainClock.autoAdvance = false
      composeTestRule.waitForIdle() // Only waits for idling resources to become idle.

      Note that in both cases, waitForIdle() also waits for pending draw and layout passes.

      Also, you can advance the clock until a certain condition is met with advanceTimeUntil().

      composeTestRule.mainClock.advanceTimeUntil(timeoutMs) { condition }

      Note that the given condition should be checking the state that can be affected by this clock (it only works with Compose state).
  - id: live-compose-guide-testing-synchronization-manual-sync-waituntil-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/synchronization#manual-sync-waituntil
    revision: web:compose-guide-testing-synchronization:content@sha256:fea0b7c82793985b7de3a01b8d402da6fc160c7500fe75a49ff7d1f7b3c787ba
    sha256: 9f0badaef574a462c7063a6ae2189ee8823a7501c6b820e54f953577feb90fe1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Any condition that depends on external work, such as data loading or Android's measure or draw (that is, measure or draw external to Compose), should use a more general concept such as waitUntil():

      composeTestRule.waitUntil(timeoutMs) { condition }

      You can also use any of the waitUntil helpers:

      composeTestRule.waitUntilAtLeastOneExists(matcher, timeoutMs)

      composeTestRule.waitUntilDoesNotExist(matcher, timeoutMs)

      composeTestRule.waitUntilExactlyOneExists(matcher, timeoutMs)

      composeTestRule.waitUntilNodeCount(matcher, count, timeoutMs)
  - id: live-compose-guide-testing-synchronization-optimize-animation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/synchronization#optimize-animation
    revision: web:compose-guide-testing-synchronization:content@sha256:fea0b7c82793985b7de3a01b8d402da6fc160c7500fe75a49ff7d1f7b3c787ba
    sha256: 78dfc3784603b6e2bf32e40ba6f77a5ca9a4597c57bcb6fbcd0ff59ebd23ab7c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: When testing high-fidelity animations, you often need to disable auto-advance and manually step through frames to assert intermediate UI states. For these specific frame-by-frame loops, use the runWithoutImplicitWait method to execute your assertions. Standard node queries (like onNodeWithTag or fetchSemanticsNode) trigger implicit synchronizations that are redundant when you are manually controlling the clock, so bypassing them significantly speeds up your test runtimes.
  - id: live-compose-guide-testing-synchronization-usage-guidelines-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/synchronization#usage-guidelines
    revision: web:compose-guide-testing-synchronization:content@sha256:fea0b7c82793985b7de3a01b8d402da6fc160c7500fe75a49ff7d1f7b3c787ba
    sha256: 8a5454922f7c6161ed2156d066a30741304311b7e3974ce2b06df7fd0782f93e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Manual clock management: Use this API when mainClock.autoAdvance is set to false and the UI is in a known, stable state for the current frame.

      UI thread execution: To ensure the stability of the UI tree, call runWithoutImplicitWait on the UI thread, such as with runOnUiThread. Running it off the UI thread exposes your test to race conditions and stale state reads.

      Read-only assertions: The block should strictly contain read-only assertions. Any actions that mutate state should be performed outside of this block.
  - id: live-compose-guide-testing-synchronization-when-use-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/synchronization#when-use
    revision: web:compose-guide-testing-synchronization:content@sha256:fea0b7c82793985b7de3a01b8d402da6fc160c7500fe75a49ff7d1f7b3c787ba
    sha256: d258390600fb0fb11a2f122eae4c828b9edd603c70e27e7f76a418c8a3d44050
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      While keeping tests on the background thread remains the standard for pure Compose tests, main thread synchronization is highly advantageous in a few specific scenarios:

      Complex View interoperability: When testing hybrid UIs containing both Compose and legacy Android Views, manipulating Views often requires running on the main thread. You can now interact with Views and assert on Compose nodes sequentially without constantly switching thread contexts.

      Synchronous state mutations: If your architecture relies on strictly main-thread-bound state holders, you can now mutate state and immediately wait for the Compose UI to settle without leaving the main thread.

      Custom test runners: If you are building custom testing infrastructure or utilizing environments where the test runner inherently executes on the main thread, Compose tests now execute cleanly without requiring background-thread delegation.
compose:
  id: live-compose-guide-testing-synchronization
  artifact: androidx.compose.ui:ui-test
  fqn: androidx.compose.ui.test
  sections:
    - id: live-compose-guide-testing-synchronization-additional-resources
      title: Additional Resources
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-synchronization-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-testing-synchronization-disable-autosync
      title: Disable automatic synchronization
      aliases:
        - androidx.compose.ui.test.junit4.ComposeTestRule
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-synchronization-disable-autosync-source
      relatedIds: []
    - id: live-compose-guide-testing-synchronization-example
      title: Example
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-synchronization-example-source
      relatedIds: []
    - id: live-compose-guide-testing-synchronization-example-2
      title: Example
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-synchronization-example-2-source
      relatedIds: []
    - id: live-compose-guide-testing-synchronization-idling-resources
      title: Idle resources
      aliases:
        - androidx.compose.ui.test.IdlingResource
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-synchronization-idling-resources-source
      relatedIds: []
    - id: live-compose-guide-testing-synchronization-main-content
      title: Introduction
      aliases:
        - androidx.compose.ui.test.junit4.ComposeTestRule
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-synchronization-main-content-source
      relatedIds: []
    - id: live-compose-guide-testing-synchronization-main-thread
      title: Main thread synchronization
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-synchronization-main-thread-source
      relatedIds: []
    - id: live-compose-guide-testing-synchronization-manual-sync
      title: Manual synchronization
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-synchronization-manual-sync-source
      relatedIds: []
    - id: live-compose-guide-testing-synchronization-manual-sync-waituntil
      title: Wait for conditions
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-synchronization-manual-sync-waituntil-source
      relatedIds: []
    - id: live-compose-guide-testing-synchronization-optimize-animation
      title: Optimize animation tests
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-synchronization-optimize-animation-source
      relatedIds: []
    - id: live-compose-guide-testing-synchronization-usage-guidelines
      title: Usage guidelines
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-synchronization-usage-guidelines-source
      relatedIds: []
    - id: live-compose-guide-testing-synchronization-when-use
      title: When to use main thread synchronization
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-synchronization-when-use-source
      relatedIds: []
---

# Synchronize your tests

Public source: https://developer.android.com/develop/ui/compose/testing/synchronization

## Additional Resources

Test apps on Android: The main Android testing landing page provides a broader view of testing fundamentals and techniques.

Fundamentals of testing: Learn more about the core concepts behind testing an Android app.

Local tests: You can run some tests locally, on your own workstation.

Instrumented tests: It is good practice to also run instrumented tests. That is, tests that run directly on-device.

Continuous integration: Continuous integration lets you integrate your tests into your deployment pipeline.

Test different screen sizes: With some many devices available to users, you should test for different screen sizes.

Espresso: While intended for View-based UIs, Espresso knowledge can still be helpful for some aspects of Compose testing.

Sources: [live-compose-guide-testing-synchronization-additional-resources-source](https://developer.android.com/develop/ui/compose/testing/synchronization#additional_resources)

## Disable automatic synchronization

When you call an assertion or action through the ComposeTestRule such as assertExists(), your test is synchronized with the Compose UI. In some cases you might want to stop this synchronization and control the clock yourself. For example, you can control time to take accurate screenshots of an animation at a point where the UI would still be busy. To disable automatic synchronization, set the autoAdvance property in the mainClock to false:

composeTestRule.mainClock.autoAdvance = false

Typically you will then advance the time yourself. You can advance exactly one frame with advanceTimeByFrame() or by a specific duration with advanceTimeBy():

composeTestRule.mainClock.advanceTimeByFrame()
composeTestRule.mainClock.advanceTimeBy(milliseconds)

Sources: [live-compose-guide-testing-synchronization-disable-autosync-source](https://developer.android.com/develop/ui/compose/testing/synchronization#disable-autosync)

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

Sources: [live-compose-guide-testing-synchronization-example-source](https://developer.android.com/develop/ui/compose/testing/synchronization#example)

## Example

Historically, because synchronization was strictly prohibited on the main thread, developers had to bounce back-and-forth between the background test runner thread and the UI thread, leading to disjointed tests:

@Test
fun testBidirectionalInteropUIUpdates_old() {
    val scenario = launchFragmentInContainer<InteropFragment>()
    composeTestRule.waitForIdle()
    scenario.onFragment { fragment ->
        fragment.legacyButton.performClick()
    }
    // Jump to Test Thread to verify state settles inside compose
    composeTestRule.waitForIdle()
    composeTestRule.onNodeWithText("Legacy Clicks: 1").assertIsDisplayed()
    composeTestRule.onNodeWithText("Increment Legacy TextView").performClick()
    composeTestRule.waitForIdle()
    // Jump back to Main Thread to verify target view state settles
    scenario.onFragment { fragment ->
        assert(fragment.legacyTextView.text.toString() == "Compose Clicks: 1")
    }
}TestSyncSnippets.kt

With main thread synchronization enabled, the assertions for Compose and View hierarchies can be executed in the same block:

@Test
fun testBidirectionalInteropUIUpdates_new() {
    val scenario = launchFragmentInContainer<InteropFragment>()
    composeTestRule.waitForIdle()
    scenario.onFragment { fragment ->
        fragment.legacyButton.performClick()
        composeTestRule.waitForIdle()
        composeTestRule.onNodeWithText("Legacy Clicks: 1").assertIsDisplayed()
        composeTestRule.onNodeWithText("Increment Legacy TextView").performClick()
        composeTestRule.waitForIdle()
        assert(fragment.legacyTextView.text.toString() == "Compose Clicks: 1")
    }
}TestSyncSnippets.kt

Sources: [live-compose-guide-testing-synchronization-example-2-source](https://developer.android.com/develop/ui/compose/testing/synchronization#example-2)

## Idle resources

Compose can synchronize tests and the UI so that every action and assertion is done in an idle state, waiting or advancing the clock as needed. However, some asynchronous operations whose results affect the UI state can be run in the background while the test is unaware of them.

Create and register these idling resources in your test so that they're taken into account when deciding whether the app under test is busy or idle. You don't have to take action unless you need to register additional idling resources, for example, if you run a background job that is not synchronized with Espresso or Compose.

This API is very similar to Espresso's Idling Resources to indicate whether the subject under test is idle or busy. Use the Compose test rule to register the implementation of the IdlingResource.

composeTestRule.registerIdlingResource(idlingResource)
composeTestRule.unregisterIdlingResource(idlingResource)

Sources: [live-compose-guide-testing-synchronization-idling-resources-source](https://developer.android.com/develop/ui/compose/testing/synchronization#idling-resources)

## Introduction

Compose tests are synchronized by default with your UI. When you call an assertion or an action with the ComposeTestRule, the test is synchronized beforehand, waiting until the UI tree is idle.

Normally, you don't have to take any action. However, there are some edge cases you should know about.

When a test is synchronized, your Compose app is advanced in time using a virtual clock. This means Compose tests don't run in real time, so they can pass as fast as possible.

However, if you don't use the methods that synchronize your tests, no recomposition will occur and the UI will appear to be paused.

@Test
fun counterTest() {
    val myCounter = mutableStateOf(0) // State that can cause recompositions.
    var lastSeenValue = 0 // Used to track recompositions.
    composeTestRule.setContent {
        Text(myCounter.value.toString())
        lastSeenValue = myCounter.value
    }
    myCounter.value = 1 // The state changes, but there is no recomposition.

    // Fails because nothing triggered a recomposition.
    assertTrue(lastSeenValue == 1)

    // Passes because the assertion triggers recomposition.
    composeTestRule.onNodeWithText("1").assertExists()
}

Note that this requirement only applies to Compose hierarchies and not to the rest of the app.

Sources: [live-compose-guide-testing-synchronization-main-content-source](https://developer.android.com/develop/ui/compose/testing/synchronization#main-content)

## Main thread synchronization

Compose testing now supports main thread synchronization, allowing you to safely call waitForIdle— and by extension, Compose UI actions and assertions — directly from the main thread.

Previously, Compose testing strictly enforced a two-thread model: test execution occurred on a background test thread, while UI updates happened on the main thread. Calling synchronization methods like waitForIdle or runOnIdle from the main thread (for example, inside a runOnUiThread block) would throw an IllegalStateException because the framework enforced strict thread checks to prevent main-thread synchronization.

With main thread synchronization enabled, the Compose test framework can now advance the clock and process pending work even when blocking calls are made on the main thread.

Sources: [live-compose-guide-testing-synchronization-main-thread-source](https://developer.android.com/develop/ui/compose/testing/synchronization#main-thread)

## Manual synchronization

In certain cases, you have to synchronize the Compose UI with other parts of your test or the app you're testing.

The waitForIdle() function waits for Compose to be idle, but the function depends on the autoAdvance property:

composeTestRule.mainClock.autoAdvance = true // Default
composeTestRule.waitForIdle() // Advances the clock until Compose is idle.

composeTestRule.mainClock.autoAdvance = false
composeTestRule.waitForIdle() // Only waits for idling resources to become idle.

Note that in both cases, waitForIdle() also waits for pending draw and layout passes.

Also, you can advance the clock until a certain condition is met with advanceTimeUntil().

composeTestRule.mainClock.advanceTimeUntil(timeoutMs) { condition }

Note that the given condition should be checking the state that can be affected by this clock (it only works with Compose state).

Sources: [live-compose-guide-testing-synchronization-manual-sync-source](https://developer.android.com/develop/ui/compose/testing/synchronization#manual-sync)

## Wait for conditions

Any condition that depends on external work, such as data loading or Android's measure or draw (that is, measure or draw external to Compose), should use a more general concept such as waitUntil():

composeTestRule.waitUntil(timeoutMs) { condition }

You can also use any of the waitUntil helpers:

composeTestRule.waitUntilAtLeastOneExists(matcher, timeoutMs)

composeTestRule.waitUntilDoesNotExist(matcher, timeoutMs)

composeTestRule.waitUntilExactlyOneExists(matcher, timeoutMs)

composeTestRule.waitUntilNodeCount(matcher, count, timeoutMs)

Sources: [live-compose-guide-testing-synchronization-manual-sync-waituntil-source](https://developer.android.com/develop/ui/compose/testing/synchronization#manual-sync-waituntil)

## Optimize animation tests

When testing high-fidelity animations, you often need to disable auto-advance and manually step through frames to assert intermediate UI states. For these specific frame-by-frame loops, use the runWithoutImplicitWait method to execute your assertions. Standard node queries (like onNodeWithTag or fetchSemanticsNode) trigger implicit synchronizations that are redundant when you are manually controlling the clock, so bypassing them significantly speeds up your test runtimes.

Sources: [live-compose-guide-testing-synchronization-optimize-animation-source](https://developer.android.com/develop/ui/compose/testing/synchronization#optimize-animation)

## Usage guidelines

Manual clock management: Use this API when mainClock.autoAdvance is set to false and the UI is in a known, stable state for the current frame.

UI thread execution: To ensure the stability of the UI tree, call runWithoutImplicitWait on the UI thread, such as with runOnUiThread. Running it off the UI thread exposes your test to race conditions and stale state reads.

Read-only assertions: The block should strictly contain read-only assertions. Any actions that mutate state should be performed outside of this block.

Sources: [live-compose-guide-testing-synchronization-usage-guidelines-source](https://developer.android.com/develop/ui/compose/testing/synchronization#usage-guidelines)

## When to use main thread synchronization

While keeping tests on the background thread remains the standard for pure Compose tests, main thread synchronization is highly advantageous in a few specific scenarios:

Complex View interoperability: When testing hybrid UIs containing both Compose and legacy Android Views, manipulating Views often requires running on the main thread. You can now interact with Views and assert on Compose nodes sequentially without constantly switching thread contexts.

Synchronous state mutations: If your architecture relies on strictly main-thread-bound state holders, you can now mutate state and immediately wait for the Compose UI to settle without leaving the main thread.

Custom test runners: If you are building custom testing infrastructure or utilizing environments where the test runner inherently executes on the main thread, Compose tests now execute cleanly without requiring background-thread delegation.

Sources: [live-compose-guide-testing-synchronization-when-use-source](https://developer.android.com/develop/ui/compose/testing/synchronization#when-use)
