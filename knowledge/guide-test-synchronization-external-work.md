---
type: reference
title: "Guidance: Synchronize Compose assertions and wait for external work"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
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
compose:
  id: guide-test-synchronization-external-work
  artifact: androidx.compose.ui:ui-test
  fqn: androidx.compose.ui.test
  sections:
    - id: guide-test-synchronization-external-work
      title: "Guidance: Synchronize Compose assertions and wait for external work"
      aliases:
        - androidx.compose.ui.test
        - androidx.compose.ui.test.junit4.ComposeTestRule
        - androidx.compose.ui.test.junit4.ComposeTestRule.waitUntil
        - test synchronization
        - external data loading
        - 테스트 동기화
        - 비동기 대기
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-synchronization-main-content-source
        - live-compose-guide-testing-synchronization-manual-sync-waituntil-source
      relatedIds:
        - live-compose-guide-testing-synchronization-main-content
        - live-compose-guide-testing-synchronization-manual-sync-waituntil
---

# Guidance: Synchronize Compose assertions and wait for external work

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Synchronize Compose assertions and wait for external work

Guidance: Compose test-rule actions and assertions synchronize with the UI before running, waiting for the UI tree to become idle and advancing a virtual clock. A plain assertion immediately after changing state can observe stale composition results; use a synchronized Compose assertion. For conditions depending on external work, such as data loading or Android measure/draw outside Compose, use waitUntil with a timeout and condition. Limitation: Compose hierarchy synchronization does not automatically cover the rest of the app.

Sources: [live-compose-guide-testing-synchronization-main-content-source](https://developer.android.com/develop/ui/compose/testing/synchronization#main-content), [live-compose-guide-testing-synchronization-manual-sync-waituntil-source](https://developer.android.com/develop/ui/compose/testing/synchronization#manual-sync-waituntil)
