---
type: reference
title: Semantics
description: "Public source: https://developer.android.com/develop/ui/compose/testing/semantics"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-testing-semantics-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/semantics#additional_resources
    revision: web:compose-guide-testing-semantics:content@sha256:b5f1beff7fab85aea6460957c30969e66b4b481204779c44fd93905039c26131
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
  - id: live-compose-guide-testing-semantics-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/testing/semantics#main-content
    revision: web:compose-guide-testing-semantics:content@sha256:b5f1beff7fab85aea6460957c30969e66b4b481204779c44fd93905039c26131
    sha256: ecd81a16e2bc89020f60c46fa7daa9436a27c383f18be99c5406c6b170b635df
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      UI tests in Compose use semantics to interact with the UI hierarchy. Semantics, as the name implies, give meaning to a piece of UI. In this context, a "piece of UI" (or element) can mean anything from a single composable to a full screen. The semantics tree is generated alongside the UI hierarchy and describes the hierarchy.

      You can learn more about semantics generally in Semantics in Compose.

      Figure 1. A typical UI hierarchy and its semantics tree.

      The semantics framework is primarily used for accessibility, so tests take advantage of the information exposed by semantics about the UI hierarchy. Developers decide what and how much to expose.

      Figure 2. A typical button containing an icon and text.

      For example, given a button like this that consists of an icon and a text element, the default semantics tree only contains the text label "Like". This is because some composables, such as Text, already expose some properties to the semantics tree. You can add properties to the semantics tree by using a Modifier.

      MyButton(
          modifier = Modifier.semantics { contentDescription = "Add to favorites" }
      )
compose:
  id: live-compose-guide-testing-semantics
  artifact: androidx.compose.ui:ui-test
  fqn: androidx.compose.ui.test
  sections:
    - id: live-compose-guide-testing-semantics-additional-resources
      title: Additional Resources
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-semantics-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-testing-semantics-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-test
          version: null
      sourceIds:
        - live-compose-guide-testing-semantics-main-content-source
      relatedIds: []
---

# Semantics

Public source: https://developer.android.com/develop/ui/compose/testing/semantics

## Additional Resources

Test apps on Android: The main Android testing landing page provides a broader view of testing fundamentals and techniques.

Fundamentals of testing: Learn more about the core concepts behind testing an Android app.

Local tests: You can run some tests locally, on your own workstation.

Instrumented tests: It is good practice to also run instrumented tests. That is, tests that run directly on-device.

Continuous integration: Continuous integration lets you integrate your tests into your deployment pipeline.

Test different screen sizes: With some many devices available to users, you should test for different screen sizes.

Espresso: While intended for View-based UIs, Espresso knowledge can still be helpful for some aspects of Compose testing.

Sources: [live-compose-guide-testing-semantics-additional-resources-source](https://developer.android.com/develop/ui/compose/testing/semantics#additional_resources)

## Introduction

UI tests in Compose use semantics to interact with the UI hierarchy. Semantics, as the name implies, give meaning to a piece of UI. In this context, a "piece of UI" (or element) can mean anything from a single composable to a full screen. The semantics tree is generated alongside the UI hierarchy and describes the hierarchy.

You can learn more about semantics generally in Semantics in Compose.

Figure 1. A typical UI hierarchy and its semantics tree.

The semantics framework is primarily used for accessibility, so tests take advantage of the information exposed by semantics about the UI hierarchy. Developers decide what and how much to expose.

Figure 2. A typical button containing an icon and text.

For example, given a button like this that consists of an icon and a text element, the default semantics tree only contains the text label "Like". This is because some composables, such as Text, already expose some properties to the semantics tree. You can add properties to the semantics tree by using a Modifier.

MyButton(
    modifier = Modifier.semantics { contentDescription = "Add to favorites" }
)

Sources: [live-compose-guide-testing-semantics-main-content-source](https://developer.android.com/develop/ui/compose/testing/semantics#main-content)
