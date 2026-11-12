---
type: reference
title: Testing
description: "Public source: https://developer.android.com/develop/ui/compose/accessibility/testing"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-accessibility-testing-checks-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/testing#checks
    revision: web:compose-guide-accessibility-testing:content@sha256:0a53ea1f246ed076b23856712dafd7c487f2ffb71302e9f70033353e61251e19
    sha256: 3943b1abd545c2a59b7888a0c770becfc9a5c302278e7f29247b38c2bb2e0fa5
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      composeTestRule.onRoot().tryPerformAccessibilityChecks()
      }AccessibilitySnippets.kt

      In combination with manual testing, automated tests using both Compose APIs as well as the Accessibility Test Framework can help you detect possible problems early on in the development process.
  - id: live-compose-guide-accessibility-testing-checks-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/testing#checks
    revision: web:compose-guide-accessibility-testing:content@sha256:0a53ea1f246ed076b23856712dafd7c487f2ffb71302e9f70033353e61251e19
    sha256: 3bc923d6dbf6a89464b28d0d2e834a5ff4fa77e1d2251daac1d846b79e931383
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      For automated accessibility testing, you can also use the Accessibility Test Framework—the same underlying framework that powers Accessibility Scanner and accessibility checks in Espresso—to perform some accessibility-related checks automatically, starting with Compose 1.8.0.

      To enable the checks, add the ui-test-junit4-accessibility dependency, call enableAccessibilityChecks() in the AndroidComposeTestRule, and trigger an action or tryPerformAccessibilityChecks:

      @Rule
      @JvmField
      val composeTestRule = createAndroidComposeRule<ComponentActivity>()

      @Test
      fun noAccessibilityLabel() {
          composeTestRule.setContent {
              Box(
                  modifier = Modifier
                      .size(50.dp, 50.dp)
                      .background(color = Color.Gray)
                      .clickable { }
                      .semantics {
                          contentDescription = ""
                      }
              )
          }

          composeTestRule.enableAccessibilityChecks()

          // Any action (such as performClick) will perform accessibility checks too:
          composeTestRule.onRoot().tryPerformAccessibilityChecks()
      }AccessibilitySnippets.kt

      This specific test fails with an exception and a message that the item may not have a label readable by accessibility services.

      Other available checks look for accessibility issues with color contrast, small touch target size, or elements' traversal order.

      If you're mixing Views with Compose and you're already using an AccessibilityValidator, or you need to configure one, you can set it in the rule:

      @Test
      fun lowContrastScreen() {
          composeTestRule.setContent {
              Box(
                  modifier = Modifier
                      .fillMaxSize()
                      .background(color = Color(0xFFFAFBFC)),
                  contentAlignment = Alignment.Center
              ) {
                  Text(text = "Hello", color = Color(0xFFB0B1B2))
              }
          }

          // Optionally, set AccessibilityValidator manually
          val accessibilityValidator = AccessibilityValidator()
              .setThrowExceptionFor(
                  AccessibilityCheckResult.AccessibilityCheckResultType.WARNING
              )

          composeTestRule.enableAccessibilityChecks(accessibilityValidator)
  - id: live-compose-guide-accessibility-testing-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/testing#main-content
    revision: web:compose-guide-accessibility-testing:content@sha256:0a53ea1f246ed076b23856712dafd7c487f2ffb71302e9f70033353e61251e19
    sha256: 5563333181b808db98ed75764ecc05238d2ffba85b9a2bc6e7daded8cca8a369
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      An essential way of testing accessibility is a form of manual testing: by turning accessibility services, like TalkBack or Switch Access, on, and checking if everything works as expected. This provides direct insight into how users with accessibility needs might experience your application.

      In conjunction with manual verification, you should also use automated testing to flag any potential issues that could impact user experience as you make continual changes to your app.

      Existing Compose testing APIs allow you to write automated tests that interact with semantic elements and to assert the properties defined in your UI.
  - id: live-compose-guide-accessibility-testing-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/testing#recommended_for_you
    revision: web:compose-guide-accessibility-testing:content@sha256:0a53ea1f246ed076b23856712dafd7c487f2ffb71302e9f70033353e61251e19
    sha256: d87646e26cb8204041493e852e89071149ad2308a92558ab6370d9a92a8d74f1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Accessibility in Compose

      [Material Design 2 in Compose][19]

      Testing your Compose layout
compose:
  id: live-compose-guide-accessibility-testing
  artifact: androidx.compose.ui:ui-test-junit4-accessibility
  fqn: androidx.compose.ui.test
  sections:
    - id: live-compose-guide-accessibility-testing-checks
      title: Accessibility checks
      aliases:
        - androidx.compose.ui.test.junit4.AndroidComposeTestRule
      requires:
        - artifact: androidx.compose.ui:ui-test-junit4-accessibility
          version: null
      sourceIds:
        - live-compose-guide-accessibility-testing-checks-source
      relatedIds: []
    - id: live-compose-guide-accessibility-testing-checks-2
      title: Accessibility checks
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test-junit4-accessibility
          version: null
      sourceIds:
        - live-compose-guide-accessibility-testing-checks-2-source
      relatedIds: []
    - id: live-compose-guide-accessibility-testing-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test-junit4-accessibility
          version: null
      sourceIds:
        - live-compose-guide-accessibility-testing-main-content-source
      relatedIds: []
    - id: live-compose-guide-accessibility-testing-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test-junit4-accessibility
          version: null
      sourceIds:
        - live-compose-guide-accessibility-testing-recommended-for-you-source
      relatedIds: []
---

# Testing

Public source: https://developer.android.com/develop/ui/compose/accessibility/testing

## Accessibility checks

For automated accessibility testing, you can also use the Accessibility Test Framework—the same underlying framework that powers Accessibility Scanner and accessibility checks in Espresso—to perform some accessibility-related checks automatically, starting with Compose 1.8.0.

To enable the checks, add the ui-test-junit4-accessibility dependency, call enableAccessibilityChecks() in the AndroidComposeTestRule, and trigger an action or tryPerformAccessibilityChecks:

@Rule
@JvmField
val composeTestRule = createAndroidComposeRule<ComponentActivity>()

@Test
fun noAccessibilityLabel() {
    composeTestRule.setContent {
        Box(
            modifier = Modifier
                .size(50.dp, 50.dp)
                .background(color = Color.Gray)
                .clickable { }
                .semantics {
                    contentDescription = ""
                }
        )
    }

    composeTestRule.enableAccessibilityChecks()

    // Any action (such as performClick) will perform accessibility checks too:
    composeTestRule.onRoot().tryPerformAccessibilityChecks()
}AccessibilitySnippets.kt

This specific test fails with an exception and a message that the item may not have a label readable by accessibility services.

Other available checks look for accessibility issues with color contrast, small touch target size, or elements' traversal order.

If you're mixing Views with Compose and you're already using an AccessibilityValidator, or you need to configure one, you can set it in the rule:

@Test
fun lowContrastScreen() {
    composeTestRule.setContent {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(color = Color(0xFFFAFBFC)),
            contentAlignment = Alignment.Center
        ) {
            Text(text = "Hello", color = Color(0xFFB0B1B2))
        }
    }

    // Optionally, set AccessibilityValidator manually
    val accessibilityValidator = AccessibilityValidator()
        .setThrowExceptionFor(
            AccessibilityCheckResult.AccessibilityCheckResultType.WARNING
        )

    composeTestRule.enableAccessibilityChecks(accessibilityValidator)

Sources: [live-compose-guide-accessibility-testing-checks-source](https://developer.android.com/develop/ui/compose/accessibility/testing#checks)

## Accessibility checks

composeTestRule.onRoot().tryPerformAccessibilityChecks()
}AccessibilitySnippets.kt

In combination with manual testing, automated tests using both Compose APIs as well as the Accessibility Test Framework can help you detect possible problems early on in the development process.

Sources: [live-compose-guide-accessibility-testing-checks-2-source](https://developer.android.com/develop/ui/compose/accessibility/testing#checks)

## Introduction

An essential way of testing accessibility is a form of manual testing: by turning accessibility services, like TalkBack or Switch Access, on, and checking if everything works as expected. This provides direct insight into how users with accessibility needs might experience your application.

In conjunction with manual verification, you should also use automated testing to flag any potential issues that could impact user experience as you make continual changes to your app.

Existing Compose testing APIs allow you to write automated tests that interact with semantic elements and to assert the properties defined in your UI.

Sources: [live-compose-guide-accessibility-testing-main-content-source](https://developer.android.com/develop/ui/compose/accessibility/testing#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Accessibility in Compose

[Material Design 2 in Compose][19]

Testing your Compose layout

Sources: [live-compose-guide-accessibility-testing-recommended-for-you-source](https://developer.android.com/develop/ui/compose/accessibility/testing#recommended_for_you)
