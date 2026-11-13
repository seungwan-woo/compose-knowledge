---
type: reference
title: "Guidance: Exercise saveable state restoration with StateRestorationTester"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-testing-common-patterns-verify-state-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#verify-state
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
    sha256: 95ba01d479197fbba97dd04166c7dbe5abf9dc4e799d90c4f638f2a5fe660945
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Verify that the state of your Compose elements is correctly restored when the activity or process is recreated. Perform such checks without relying on activity recreation with the StateRestorationTester class.

      This class lets you simulate the recreation of a composable. It's especially useful to verify the implementation of rememberSaveable.

      class MyStateRestorationTests {

          @get:Rule
          val composeTestRule = createComposeRule()

          @Test
          fun onRecreation_stateIsRestored() {
              val restorationTester = StateRestorationTester(composeTestRule)

              restorationTester.setContent { MainScreen() }

              // TODO: Run actions that modify the state

              // Trigger a recreation
              restorationTester.emulateSavedInstanceStateRestore()

              // TODO: Verify that state has been correctly restored.
          }
      }
compose:
  id: guide-test-saveable-state-restoration
  artifact: androidx.compose.ui:ui-test-junit4
  fqn: androidx.compose.ui.test.junit4.StateRestorationTester
  sections:
    - id: guide-test-saveable-state-restoration
      title: "Guidance: Exercise saveable state restoration with StateRestorationTester"
      aliases:
        - androidx.compose.ui.test.junit4.StateRestorationTester
        - androidx.compose.ui.test.junit4.StateRestorationTester.emulateSavedInstanceStateRestore
        - androidx.compose.runtime.saveable.rememberSaveable
        - test saved UI state
        - verify state restoration
      requires:
        - artifact: androidx.compose.ui:ui-test-junit4
          version: null
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-verify-state-source
      relatedIds:
        - live-compose-guide-testing-common-patterns-verify-state
---

# Guidance: Exercise saveable state restoration with StateRestorationTester

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Exercise saveable state restoration with StateRestorationTester

Guidance: Wrap the test content in StateRestorationTester(composeTestRule).setContent, perform actions that change saveable UI state, call emulateSavedInstanceStateRestore(), and assert that the state was restored. This targets rememberSaveable restoration without requiring activity recreation. Limitation: the tester simulates recreation of a composable; this check alone does not establish that the entire activity or application survives actual process recreation.

Sources: [live-compose-guide-testing-common-patterns-verify-state-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#verify-state)
