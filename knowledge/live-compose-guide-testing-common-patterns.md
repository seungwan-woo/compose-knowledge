---
type: reference
title: Common patterns
description: "Public source: https://developer.android.com/develop/ui/compose/testing/common-patterns"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-testing-common-patterns-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#additional_resources
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
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
  - id: live-compose-guide-testing-common-patterns-capture-built-in-failure-artifacts-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#capture-built-in-failure-artifacts
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
    sha256: dbba42b2a19d5979380d3518dc75c80a6cf818f39928975ecca3d64f16c332fc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To capture screenshots and UI hierarchies upon test failure, set the screenshotCaptureMode and uiHierarchyCaptureMode properties in TestFailurePolicy.

      class MyComposeTest {
          private val customConfig = ComposeUiTestConfig(
              failurePolicy = TestFailurePolicy(
                  screenshotCaptureMode = TestFailurePolicy.CaptureMode.Enabled,
                  uiHierarchyCaptureMode = TestFailurePolicy.CaptureMode.Enabled
              )
          )

          @Test
          fun myFirstTest() = runComposeUiTest(config = customConfig) {
              // ...
          }
      }FailureHandlerSnippets.kt
  - id: live-compose-guide-testing-common-patterns-componentactivity-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#componentactivity
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
    sha256: 24f2ff424010ac56e8bbaf09b46c6c2efe7d5ff8b29b58e363e5cb0beed7700d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Oftentimes you need to set the content under test using composeTestRule.setContent and you also need to access activity resources, for example to assert that a displayed text matches a string resource. However, you can't call setContent on a rule created with createAndroidComposeRule() if the activity already calls it.

      A common pattern to achieve this is to create an AndroidComposeTestRule using an empty activity such as ComponentActivity.

      class MyComposeTest {

          @get:Rule
          val composeTestRule = createAndroidComposeRule<ComponentActivity>()

          @Test
          fun myTest() {
              // Start the app
              composeTestRule.setContent {
                  MyAppTheme {
                      MainScreen(uiState = exampleUiState, /*...*/)
                  }
              }
              val continueLabel = composeTestRule.activity.getString(R.string.next)
              composeTestRule.onNodeWithText(continueLabel).performClick()
          }
      }

      Note that ComponentActivity needs to be added to your app's AndroidManifest.xml file. Enable that by adding this dependency to your module:

      debugImplementation("androidx.compose.ui:ui-test-manifest:$compose_version")
  - id: live-compose-guide-testing-common-patterns-configuration-precedence-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#configuration-precedence
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
    sha256: 4e2f881dc61ec1585214bafd09f2fc353ef68433ac89a4458abc4631eb3c72bf
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The framework evaluates both the local TestFailurePolicy and the suite-level runner arguments:

      If you explicitly set a mode to CaptureMode.Enabled/Disabled in your test failurePolicy, this overrides the runner argument.

      If you set a mode to CaptureMode.Unspecified (or leave failurePolicy as null), the framework falls back to the runner argument.
  - id: live-compose-guide-testing-common-patterns-configure-failure-handling-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#configure-failure-handling
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
    sha256: 5de64d1bbfbb3764400fc2c11c33b9a6826c266572eebb589b4547b05fd09149
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: To configure failure handling, pass a TestFailurePolicy object to ComposeUiTestConfig.
  - id: live-compose-guide-testing-common-patterns-configure-suite-captures-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#configure-suite-captures
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
    sha256: 15171a7fc4af144d4038ecbfa1185101764b5c820c5e4a38a1e56d88c650fd25
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can enable failure artifact captures for an entire test suite by passing instrumentation runner arguments in your module's build.gradle file. This eliminates the need to update individual test files.

      // build.gradle.kts
      android {
          defaultConfig {
              // ...
              testInstrumentationRunnerArguments["androidx.compose.ui.test.failure.isUiHierarchyCaptureEnabled"] = "true"
              testInstrumentationRunnerArguments["androidx.compose.ui.test.failure.isScreenshotCaptureEnabled"] = "true"
          }
      }
  - id: live-compose-guide-testing-common-patterns-custom-failure-handling-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#custom-failure-handling
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
    sha256: 5187fa7c980bff63aa7d29dabcfa0d2b86ed5e0460192579842b9358181259a0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Debugging UI tests often requires inspecting the screen state and composition hierarchy when an assertion fails.

      Compose provides a native failure handling pipeline to streamline diagnostics. You can automatically capture screenshots and UI hierarchies upon failure, or register custom handlers to forward crash telemetry to external tools.
  - id: live-compose-guide-testing-common-patterns-custom-semantics-properties-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#custom-semantics-properties
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
    sha256: ef0b209c53e6d444dd6f8698edd9dda289ca0f52d5e20ab91152f9c6b2c6efae
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can create custom semantics properties to expose information to tests. To do this, define a new SemanticsPropertyKey and make it available using the SemanticsPropertyReceiver.

      // Creates a semantics property of type Long.
      val PickedDateKey = SemanticsPropertyKey<Long>("PickedDate")
      var SemanticsPropertyReceiver.pickedDate by PickedDateKey

      Now use that property in the semantics modifier:

      val datePickerValue by remember { mutableStateOf(0L) }
      MyCustomDatePicker(
          modifier = Modifier.semantics { pickedDate = datePickerValue }
      )

      From tests, use SemanticsMatcher.expectValue to assert the value of the property:

      composeTestRule
          .onNode(SemanticsMatcher.expectValue(PickedDateKey, 1445378400)) // 2015-10-21
          .assertExists()
  - id: live-compose-guide-testing-common-patterns-isolation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#isolation
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
    sha256: 9e00801ae4d1a0b8df99e7cc672c20afea9193ac44a1bebb10e1771b6db66720
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      ComposeTestRule lets you start an activity displaying any composable: your full application, a single screen, or a small element. It's also a good practice to check that your composables are correctly encapsulated and they work independently, allowing for easier and more focused UI testing.

      This doesn't mean you should only create unit UI tests. UI tests scoping larger parts of your UI are also very important.
  - id: live-compose-guide-testing-common-patterns-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#main-content
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
    sha256: 8f4d7ffef63342b5e4309a8659c226e23add38948bc345a02c4f06426c52c3c9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: You can test your Compose app with well-established approaches and patterns.
  - id: live-compose-guide-testing-common-patterns-test-configurations-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#test-configurations
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
    sha256: a100ebe5e824cb04471c6530b96a3eeb3f828f3a041c22c2c15c369b276c043e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      DeviceConfigurationOverride.FontScale(1.5f) then
                  DeviceConfigurationOverride.FontWeightAdjustment(200)
          ) {
              Text(text = "text with increased scale and weight")
          }
      }DeviceConfigurationOverrideSnippets.kt
  - id: live-compose-guide-testing-common-patterns-test-configurations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#test-configurations
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
    sha256: 380c8e045b34cd4bb775820beb440bdf02aca5c225040c66a56dfde939aaf754
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Android apps need to adapt to many changing conditions: window sizes, locales, font sizes, dark and light themes, and more. Most of these conditions are derived from device-level values controlled by the user and exposed with the current Configuration instance. Testing different configurations directly in a test is difficult since the test must configure device-level properties.

      DeviceConfigurationOverride is a test-only API that lets you simulate different device configurations in a localized way for the @Composable content under test.

      The companion object of DeviceConfigurationOverride has the following extension functions, which override device-level configuration properties:

      DeviceConfigurationOverride.DarkMode(): Overrides the system to dark theme or light theme.

      DeviceConfigurationOverride.FontScale(): Overrides the system font scale.

      DeviceConfigurationOverride.FontWeightAdjustment(): Overrides the system font weight adjustment.

      DeviceConfigurationOverride.ForcedSize(): Forces a specific amount of space regardless of device size.

      DeviceConfigurationOverride.LayoutDirection(): Overrides the layout direction (left-to-right or right-to-left).

      DeviceConfigurationOverride.Locales(): Overrides the locale.

      DeviceConfigurationOverride.RoundScreen(): Overrides if the screen is round.

      To apply a specific override, wrap the content under test in a call to the DeviceConfigurationOverride() top-level function, passing the override to apply as a parameter.

      For example, the following code applies the DeviceConfigurationOverride.ForcedSize() override to change the density locally, forcing the MyScreen composable to be rendered in a large landscape window, even if the device the test is running on doesn't support that window size directly:

      composeTestRule.setContent {
          DeviceConfigurationOverride(
              DeviceConfigurationOverride.ForcedSize(DpSize(1280.dp, 800.dp))
          ) {
              MyScreen() // Will be rendered in the space for 1280dp by 800dp without clipping.
          }
      }DeviceConfigurationOverrideSnippets.kt

      To apply multiple overrides together, use DeviceConfigurationOverride.then():

      composeTestRule.setContent {
          DeviceConfigurationOverride(
  - id: live-compose-guide-testing-common-patterns-use-custom-failure-handler-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/common-patterns#use-custom-failure-handler
    revision: web:compose-guide-testing-common-patterns:content@sha256:861eaedfc1278a99069fc557a14a9bca68181e5142f478af9840905bbf151197
    sha256: 92052c900c395f123c9c731e41e6d3a13a149742afd0096a70c10794d2707b37
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To define custom behavior for test failures, add a TestFailureHandler to the failureHandlers list. Each handler receives a FailureContext object that contains the original error and a list of artifacts generated by the preceding pipeline handlers.

      class MyComposeTestWithHandler {
          private val customConfig = ComposeUiTestConfig(
              failurePolicy = TestFailurePolicy(
                  screenshotCaptureMode = TestFailurePolicy.CaptureMode.Enabled,
                  failureHandlers = listOf(
                      TestFailureHandler { context ->
                          val screenshot = context.artifacts.firstOrNull {
                              it.type == FailureArtifact.Type.Screenshot
                          }
                          // ...
                      }
                  )
              )
          )

          @get:Rule
          val rule = createComposeRule(config = customConfig)

          // ...
      }FailureHandlerSnippets.kt
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
  id: live-compose-guide-testing-common-patterns
  artifact: androidx.compose.ui:ui-test
  fqn: androidx.compose.ui.test
  sections:
    - id: live-compose-guide-testing-common-patterns-additional-resources
      title: Additional Resources
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-testing-common-patterns-capture-built-in-failure-artifacts
      title: Capture built-in failure artifacts
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-capture-built-in-failure-artifacts-source
      relatedIds: []
    - id: live-compose-guide-testing-common-patterns-componentactivity
      title: Access the activity and resources after setting your own content
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-componentactivity-source
      relatedIds: []
    - id: live-compose-guide-testing-common-patterns-configuration-precedence
      title: Configuration precedence
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-configuration-precedence-source
      relatedIds: []
    - id: live-compose-guide-testing-common-patterns-configure-failure-handling
      title: Configure failure handling
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-configure-failure-handling-source
      relatedIds: []
    - id: live-compose-guide-testing-common-patterns-configure-suite-captures
      title: Configure captures for an entire test suite
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-configure-suite-captures-source
      relatedIds: []
    - id: live-compose-guide-testing-common-patterns-custom-failure-handling
      title: Custom failure handling in tests
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-custom-failure-handling-source
      relatedIds: []
    - id: live-compose-guide-testing-common-patterns-custom-semantics-properties
      title: Custom semantics properties
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-custom-semantics-properties-source
      relatedIds: []
    - id: live-compose-guide-testing-common-patterns-isolation
      title: Test in isolation
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-isolation-source
      relatedIds: []
    - id: live-compose-guide-testing-common-patterns-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-main-content-source
      relatedIds: []
    - id: live-compose-guide-testing-common-patterns-test-configurations
      title: Test different device configurations
      aliases:
        - androidx.compose.ui.test.DeviceConfigurationOverride
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-test-configurations-source
      relatedIds: []
    - id: live-compose-guide-testing-common-patterns-test-configurations-2
      title: Test different device configurations
      aliases:
        - androidx.compose.ui.test.DeviceConfigurationOverride
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-test-configurations-2-source
      relatedIds: []
    - id: live-compose-guide-testing-common-patterns-use-custom-failure-handler
      title: Use a custom failure handler
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-use-custom-failure-handler-source
      relatedIds: []
    - id: live-compose-guide-testing-common-patterns-verify-state
      title: Verify state restoration
      aliases:
        - androidx.compose.ui.test.junit4.StateRestorationTester
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-common-patterns-verify-state-source
      relatedIds: []
---

# Common patterns

Public source: https://developer.android.com/develop/ui/compose/testing/common-patterns

## Additional Resources

Test apps on Android: The main Android testing landing page provides a broader view of testing fundamentals and techniques.

Fundamentals of testing: Learn more about the core concepts behind testing an Android app.

Local tests: You can run some tests locally, on your own workstation.

Instrumented tests: It is good practice to also run instrumented tests. That is, tests that run directly on-device.

Continuous integration: Continuous integration lets you integrate your tests into your deployment pipeline.

Test different screen sizes: With some many devices available to users, you should test for different screen sizes.

Espresso: While intended for View-based UIs, Espresso knowledge can still be helpful for some aspects of Compose testing.

Sources: [live-compose-guide-testing-common-patterns-additional-resources-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#additional_resources)

## Capture built-in failure artifacts

To capture screenshots and UI hierarchies upon test failure, set the screenshotCaptureMode and uiHierarchyCaptureMode properties in TestFailurePolicy.

class MyComposeTest {
    private val customConfig = ComposeUiTestConfig(
        failurePolicy = TestFailurePolicy(
            screenshotCaptureMode = TestFailurePolicy.CaptureMode.Enabled,
            uiHierarchyCaptureMode = TestFailurePolicy.CaptureMode.Enabled
        )
    )

    @Test
    fun myFirstTest() = runComposeUiTest(config = customConfig) {
        // ...
    }
}FailureHandlerSnippets.kt

Sources: [live-compose-guide-testing-common-patterns-capture-built-in-failure-artifacts-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#capture-built-in-failure-artifacts)

## Access the activity and resources after setting your own content

Oftentimes you need to set the content under test using composeTestRule.setContent and you also need to access activity resources, for example to assert that a displayed text matches a string resource. However, you can't call setContent on a rule created with createAndroidComposeRule() if the activity already calls it.

A common pattern to achieve this is to create an AndroidComposeTestRule using an empty activity such as ComponentActivity.

class MyComposeTest {

    @get:Rule
    val composeTestRule = createAndroidComposeRule<ComponentActivity>()

    @Test
    fun myTest() {
        // Start the app
        composeTestRule.setContent {
            MyAppTheme {
                MainScreen(uiState = exampleUiState, /*...*/)
            }
        }
        val continueLabel = composeTestRule.activity.getString(R.string.next)
        composeTestRule.onNodeWithText(continueLabel).performClick()
    }
}

Note that ComponentActivity needs to be added to your app's AndroidManifest.xml file. Enable that by adding this dependency to your module:

debugImplementation("androidx.compose.ui:ui-test-manifest:$compose_version")

Sources: [live-compose-guide-testing-common-patterns-componentactivity-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#componentactivity)

## Configuration precedence

The framework evaluates both the local TestFailurePolicy and the suite-level runner arguments:

If you explicitly set a mode to CaptureMode.Enabled/Disabled in your test failurePolicy, this overrides the runner argument.

If you set a mode to CaptureMode.Unspecified (or leave failurePolicy as null), the framework falls back to the runner argument.

Sources: [live-compose-guide-testing-common-patterns-configuration-precedence-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#configuration-precedence)

## Configure failure handling

To configure failure handling, pass a TestFailurePolicy object to ComposeUiTestConfig.

Sources: [live-compose-guide-testing-common-patterns-configure-failure-handling-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#configure-failure-handling)

## Configure captures for an entire test suite

You can enable failure artifact captures for an entire test suite by passing instrumentation runner arguments in your module's build.gradle file. This eliminates the need to update individual test files.

// build.gradle.kts
android {
    defaultConfig {
        // ...
        testInstrumentationRunnerArguments["androidx.compose.ui.test.failure.isUiHierarchyCaptureEnabled"] = "true"
        testInstrumentationRunnerArguments["androidx.compose.ui.test.failure.isScreenshotCaptureEnabled"] = "true"
    }
}

Sources: [live-compose-guide-testing-common-patterns-configure-suite-captures-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#configure-suite-captures)

## Custom failure handling in tests

Debugging UI tests often requires inspecting the screen state and composition hierarchy when an assertion fails.

Compose provides a native failure handling pipeline to streamline diagnostics. You can automatically capture screenshots and UI hierarchies upon failure, or register custom handlers to forward crash telemetry to external tools.

Sources: [live-compose-guide-testing-common-patterns-custom-failure-handling-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#custom-failure-handling)

## Custom semantics properties

You can create custom semantics properties to expose information to tests. To do this, define a new SemanticsPropertyKey and make it available using the SemanticsPropertyReceiver.

// Creates a semantics property of type Long.
val PickedDateKey = SemanticsPropertyKey<Long>("PickedDate")
var SemanticsPropertyReceiver.pickedDate by PickedDateKey

Now use that property in the semantics modifier:

val datePickerValue by remember { mutableStateOf(0L) }
MyCustomDatePicker(
    modifier = Modifier.semantics { pickedDate = datePickerValue }
)

From tests, use SemanticsMatcher.expectValue to assert the value of the property:

composeTestRule
    .onNode(SemanticsMatcher.expectValue(PickedDateKey, 1445378400)) // 2015-10-21
    .assertExists()

Sources: [live-compose-guide-testing-common-patterns-custom-semantics-properties-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#custom-semantics-properties)

## Test in isolation

ComposeTestRule lets you start an activity displaying any composable: your full application, a single screen, or a small element. It's also a good practice to check that your composables are correctly encapsulated and they work independently, allowing for easier and more focused UI testing.

This doesn't mean you should only create unit UI tests. UI tests scoping larger parts of your UI are also very important.

Sources: [live-compose-guide-testing-common-patterns-isolation-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#isolation)

## Introduction

You can test your Compose app with well-established approaches and patterns.

Sources: [live-compose-guide-testing-common-patterns-main-content-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#main-content)

## Test different device configurations

Android apps need to adapt to many changing conditions: window sizes, locales, font sizes, dark and light themes, and more. Most of these conditions are derived from device-level values controlled by the user and exposed with the current Configuration instance. Testing different configurations directly in a test is difficult since the test must configure device-level properties.

DeviceConfigurationOverride is a test-only API that lets you simulate different device configurations in a localized way for the @Composable content under test.

The companion object of DeviceConfigurationOverride has the following extension functions, which override device-level configuration properties:

DeviceConfigurationOverride.DarkMode(): Overrides the system to dark theme or light theme.

DeviceConfigurationOverride.FontScale(): Overrides the system font scale.

DeviceConfigurationOverride.FontWeightAdjustment(): Overrides the system font weight adjustment.

DeviceConfigurationOverride.ForcedSize(): Forces a specific amount of space regardless of device size.

DeviceConfigurationOverride.LayoutDirection(): Overrides the layout direction (left-to-right or right-to-left).

DeviceConfigurationOverride.Locales(): Overrides the locale.

DeviceConfigurationOverride.RoundScreen(): Overrides if the screen is round.

To apply a specific override, wrap the content under test in a call to the DeviceConfigurationOverride() top-level function, passing the override to apply as a parameter.

For example, the following code applies the DeviceConfigurationOverride.ForcedSize() override to change the density locally, forcing the MyScreen composable to be rendered in a large landscape window, even if the device the test is running on doesn't support that window size directly:

composeTestRule.setContent {
    DeviceConfigurationOverride(
        DeviceConfigurationOverride.ForcedSize(DpSize(1280.dp, 800.dp))
    ) {
        MyScreen() // Will be rendered in the space for 1280dp by 800dp without clipping.
    }
}DeviceConfigurationOverrideSnippets.kt

To apply multiple overrides together, use DeviceConfigurationOverride.then():

composeTestRule.setContent {
    DeviceConfigurationOverride(

Sources: [live-compose-guide-testing-common-patterns-test-configurations-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#test-configurations)

## Test different device configurations

DeviceConfigurationOverride.FontScale(1.5f) then
            DeviceConfigurationOverride.FontWeightAdjustment(200)
    ) {
        Text(text = "text with increased scale and weight")
    }
}DeviceConfigurationOverrideSnippets.kt

Sources: [live-compose-guide-testing-common-patterns-test-configurations-2-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#test-configurations)

## Use a custom failure handler

To define custom behavior for test failures, add a TestFailureHandler to the failureHandlers list. Each handler receives a FailureContext object that contains the original error and a list of artifacts generated by the preceding pipeline handlers.

class MyComposeTestWithHandler {
    private val customConfig = ComposeUiTestConfig(
        failurePolicy = TestFailurePolicy(
            screenshotCaptureMode = TestFailurePolicy.CaptureMode.Enabled,
            failureHandlers = listOf(
                TestFailureHandler { context ->
                    val screenshot = context.artifacts.firstOrNull {
                        it.type == FailureArtifact.Type.Screenshot
                    }
                    // ...
                }
            )
        )
    )

    @get:Rule
    val rule = createComposeRule(config = customConfig)

    // ...
}FailureHandlerSnippets.kt

Sources: [live-compose-guide-testing-common-patterns-use-custom-failure-handler-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#use-custom-failure-handler)

## Verify state restoration

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

Sources: [live-compose-guide-testing-common-patterns-verify-state-source](https://developer.android.com/develop/ui/compose/testing/common-patterns#verify-state)
