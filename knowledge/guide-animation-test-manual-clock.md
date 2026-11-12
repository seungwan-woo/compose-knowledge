---
type: reference
title: "Guidance: Advance the test clock to inspect animation frames"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
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
compose:
  id: guide-animation-test-manual-clock
  artifact: androidx.compose.ui:ui-test
  fqn: androidx.compose.ui.test.MainTestClock
  sections:
    - id: guide-animation-test-manual-clock
      title: "Guidance: Advance the test clock to inspect animation frames"
      aliases:
        - androidx.compose.ui.test.MainTestClock
        - androidx.compose.ui.test.MainTestClock.advanceTimeBy
        - test animation intermediate state
        - manual test clock
        - autoAdvance false
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-animation-testing-main-content-source
      relatedIds:
        - live-compose-guide-animation-testing-main-content
---

# Guidance: Advance the test clock to inspect animation frames

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Advance the test clock to inspect animation frames

Guidance: Disable automatic clock advancement with mainClock.autoAdvance = false before starting the animation, then advanceTimeBy to reach an intermediate state and assert it. ComposeTestRule exposes mainClock so tests can control animation progress deterministically. Limitation: advanceTimeBy rounds the requested duration up to a multiple of the frame duration; do not assume every requested millisecond maps to an exact animation sample.

Sources: [live-compose-guide-animation-testing-main-content-source](https://developer.android.com/develop/ui/compose/animation/testing#main-content)
