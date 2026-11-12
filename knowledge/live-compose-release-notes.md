---
type: reference
title: Compose release notes
description: "Public source: https://developer.android.com/jetpack/androidx/releases/compose"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-release-notes-boms-source
    kind: guide
    resource: https://developer.android.com/jetpack/androidx/releases/compose#boms
    revision: web:compose-release-notes:content@sha256:c2807107c466cf15f8b58aadab228978c2d4409cdcbc253a3d58c7a94e1db921
    sha256: 93018b06ec2948c73f8d92317d60eb8abd5679583c2d79c5f497cf241e7d5e56
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: For the latest BOM releases, visit Compose BOM Mapping Page.
  - id: live-compose-release-notes-compose-announcements-source
    kind: guide
    resource: https://developer.android.com/jetpack/androidx/releases/compose#compose-announcements
    revision: web:compose-release-notes:content@sha256:c2807107c466cf15f8b58aadab228978c2d4409cdcbc253a3d58c7a94e1db921
    sha256: 216e81efbeef9bae6b6304ec497a59f57d57df92f280180e1b2708f42ee738c9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Date Announcement August 13, 2025 The August 2025 Compose Bill of Materials (BOM) has been released, which includes the stable version of Jetpack Compose 1.9! This update for Android's modern UI toolkit introduces several new features, such as advanced shadows, 2D scrolling APIs, and better list performance. If you'd like to learn more about all the new features and improvements, check out the full blog post! April 23, 2025 The Compose 1.8 release is here! This release for Android's modern UI toolkit brings new features like autofill, several text improvements, and visibility tracking. You can also animate a composable's size and location in new ways. We've also stabilized many experimental APIs and fixed a number of bugs. To learn more about all the new features and improvements in this release, check out the full blog post! September 4, 2024 The 1.7 Jetpack Compose release includes many features to make Android development faster and easier, regardless of the form factor you're building for. We also shared news on expanded Compose support across the Android ecosystem. January 24, 2024 Jetpack Compose 1.6 is now stable as part of the Compose January '24 Bill of Materials! This release largely focuses on performance improvements, as we continue to migrate modifiers and improve the efficiency of major parts of our API. June 26, 2023 Since Compose 1.5.0-beta01 release, Compose aar are located under `*-android` artifacts. With 1.6.0-alpha01, Compose POM files have been updated to point to the `-android` artifact by default for dependency resolution in build systems that don't support Gradle Module Metadata.
  - id: live-compose-release-notes-compose-source
    kind: guide
    resource: https://developer.android.com/jetpack/androidx/releases/compose#compose
    revision: web:compose-release-notes:content@sha256:c2807107c466cf15f8b58aadab228978c2d4409cdcbc253a3d58c7a94e1db921
    sha256: dd06dd10df0ac010a06732a896fd99318b269f249d2c169221ff09e72adc30bb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      User Guide

      Code Sample

      API Reference

      androidx.compose

      Define your UI programmatically with composable functions that describe its shape and data dependencies.

      Compose is combination of 7 Maven Group Ids within androidx. Each Group contains a targeted subset of functionality, each with its own set of release notes.

      This table explains the groups and links to each set of release notes.

      GroupDescription compose.animationBuild animations in their Jetpack Compose applications to enrich the user experience. compose.compilerTransform @Composable functions and enable optimizations with a Kotlin compiler plugin. compose.foundationWrite Jetpack Compose applications with ready to use building blocks and extend foundation to build your own design system pieces. compose.materialBuild Jetpack Compose UIs with ready to use Material Design Components. This is the higher level entry point of Compose, designed to provide components that match those described at www.material.io. compose.material3Build Jetpack Compose UIs with Material Design 3 Components, the next evolution of Material Design. Material 3 includes updated theming and components and Material You personalization features like dynamic color, and is designed to be cohesive with the new Android 12 visual style and system UI. compose.runtimeFundamental building blocks of Compose's programming model and state management, and core runtime for the Compose Compiler Plugin to target. compose.uiFundamental components of compose UI needed to interact with the device, including layout, drawing, and input.
  - id: live-compose-release-notes-declaring-dependencies-source
    kind: guide
    resource: https://developer.android.com/jetpack/androidx/releases/compose#declaring_dependencies
    revision: web:compose-release-notes:content@sha256:c2807107c466cf15f8b58aadab228978c2d4409cdcbc253a3d58c7a94e1db921
    sha256: 0d4a365f24707a0ebc5636c39d7805e08dd1157bb326a4987ee5893c7737230d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To add a dependency on Compose, you must add the Google Maven repository to your project. Read Google's Maven repository for more information.

      Add the dependencies for the artifacts you need in the build.gradle file for your app or module:
  - id: live-compose-release-notes-feedback-source
    kind: guide
    resource: https://developer.android.com/jetpack/androidx/releases/compose#feedback
    revision: web:compose-release-notes:content@sha256:c2807107c466cf15f8b58aadab228978c2d4409cdcbc253a3d58c7a94e1db921
    sha256: e7f0d6ac45653af9bff3b47f3fd0eb4897702d5d83ffb59a30417cd9984e9ca6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Your feedback helps make Jetpack better. Let us know if you discover new issues or have ideas for improving this library. Please take a look at the existing issues in this library before you create a new one. You can add your vote to an existing issue by clicking the star button.

      Create a new issue

      See the Issue Tracker documentation for more information.
  - id: live-compose-release-notes-groovy-source
    kind: guide
    resource: https://developer.android.com/jetpack/androidx/releases/compose#groovy
    revision: web:compose-release-notes:content@sha256:c2807107c466cf15f8b58aadab228978c2d4409cdcbc253a3d58c7a94e1db921
    sha256: 0e816a7bc3d7ff1178e5ff4a89807244369148e773f2e095dabde48282fdfee3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      plugins {
          id 'org.jetbrains.kotlin.plugin.compose'
      }

      android {
          buildFeatures {
              compose true
          }

          kotlinOptions {
              jvmTarget = "1.8"
          }
      }
  - id: live-compose-release-notes-kts-source
    kind: guide
    resource: https://developer.android.com/jetpack/androidx/releases/compose#kts
    revision: web:compose-release-notes:content@sha256:c2807107c466cf15f8b58aadab228978c2d4409cdcbc253a3d58c7a94e1db921
    sha256: 51fb6a42072360c693eaaa4c8568bc2a491114df24ddbe9438ff2a7b3e8b7ac1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      plugins {
          kotlin("plugin.compose")
      }

      android {
          buildFeatures {
              compose = true
          }

          kotlinOptions {
              jvmTarget = "1.8"
          }
      }

      For more information about dependencies, see Add build dependencies.
  - id: live-compose-release-notes-versions-source
    kind: guide
    resource: https://developer.android.com/jetpack/androidx/releases/compose#versions
    revision: web:compose-release-notes:content@sha256:c2807107c466cf15f8b58aadab228978c2d4409cdcbc253a3d58c7a94e1db921
    sha256: 8613c17f2db2142dadefc83e551e13a00620d2008f1f24e3d47bdad4ce19d349
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This table lists the current versions of each group.

      Maven Group ID Latest Update Stable Release Release Candidate Beta Release Alpha Release compose.animation November 04, 2026 1.12.1 1.13.0-rc01 - - compose.compiler August 7, 2024 1.5.15 - - - compose.foundation November 04, 2026 1.12.1 1.13.0-rc01 - - compose.material November 04, 2026 1.12.1 1.13.0-rc01 - - compose.material3 November 04, 2026 1.4.0 1.5.0-rc01 - - compose.runtime November 04, 2026 1.12.1 1.13.0-rc01 - - compose.ui November 04, 2026 1.12.1 1.13.0-rc01 - -
compose:
  id: live-compose-release-notes
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui
  sections:
    - id: live-compose-release-notes-boms
      title: BOMs
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-release-notes-boms-source
      relatedIds: []
    - id: live-compose-release-notes-compose
      title: Compose
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-release-notes-compose-source
      relatedIds: []
    - id: live-compose-release-notes-compose-announcements
      title: Announcements
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-release-notes-compose-announcements-source
      relatedIds: []
    - id: live-compose-release-notes-declaring-dependencies
      title: Declaring dependencies
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-release-notes-declaring-dependencies-source
      relatedIds: []
    - id: live-compose-release-notes-feedback
      title: Feedback
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-release-notes-feedback-source
      relatedIds: []
    - id: live-compose-release-notes-groovy
      title: Groovy
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-release-notes-groovy-source
      relatedIds: []
    - id: live-compose-release-notes-kts
      title: Kotlin
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-release-notes-kts-source
      relatedIds: []
    - id: live-compose-release-notes-versions
      title: Versions
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-release-notes-versions-source
      relatedIds: []
---

# Compose release notes

Public source: https://developer.android.com/jetpack/androidx/releases/compose

## BOMs

For the latest BOM releases, visit Compose BOM Mapping Page.

Sources: [live-compose-release-notes-boms-source](https://developer.android.com/jetpack/androidx/releases/compose#boms)

## Compose

User Guide

Code Sample

API Reference

androidx.compose

Define your UI programmatically with composable functions that describe its shape and data dependencies.

Compose is combination of 7 Maven Group Ids within androidx. Each Group contains a targeted subset of functionality, each with its own set of release notes.

This table explains the groups and links to each set of release notes.

GroupDescription compose.animationBuild animations in their Jetpack Compose applications to enrich the user experience. compose.compilerTransform @Composable functions and enable optimizations with a Kotlin compiler plugin. compose.foundationWrite Jetpack Compose applications with ready to use building blocks and extend foundation to build your own design system pieces. compose.materialBuild Jetpack Compose UIs with ready to use Material Design Components. This is the higher level entry point of Compose, designed to provide components that match those described at www.material.io. compose.material3Build Jetpack Compose UIs with Material Design 3 Components, the next evolution of Material Design. Material 3 includes updated theming and components and Material You personalization features like dynamic color, and is designed to be cohesive with the new Android 12 visual style and system UI. compose.runtimeFundamental building blocks of Compose's programming model and state management, and core runtime for the Compose Compiler Plugin to target. compose.uiFundamental components of compose UI needed to interact with the device, including layout, drawing, and input.

Sources: [live-compose-release-notes-compose-source](https://developer.android.com/jetpack/androidx/releases/compose#compose)

## Announcements

Date Announcement August 13, 2025 The August 2025 Compose Bill of Materials (BOM) has been released, which includes the stable version of Jetpack Compose 1.9! This update for Android's modern UI toolkit introduces several new features, such as advanced shadows, 2D scrolling APIs, and better list performance. If you'd like to learn more about all the new features and improvements, check out the full blog post! April 23, 2025 The Compose 1.8 release is here! This release for Android's modern UI toolkit brings new features like autofill, several text improvements, and visibility tracking. You can also animate a composable's size and location in new ways. We've also stabilized many experimental APIs and fixed a number of bugs. To learn more about all the new features and improvements in this release, check out the full blog post! September 4, 2024 The 1.7 Jetpack Compose release includes many features to make Android development faster and easier, regardless of the form factor you're building for. We also shared news on expanded Compose support across the Android ecosystem. January 24, 2024 Jetpack Compose 1.6 is now stable as part of the Compose January '24 Bill of Materials! This release largely focuses on performance improvements, as we continue to migrate modifiers and improve the efficiency of major parts of our API. June 26, 2023 Since Compose 1.5.0-beta01 release, Compose aar are located under `*-android` artifacts. With 1.6.0-alpha01, Compose POM files have been updated to point to the `-android` artifact by default for dependency resolution in build systems that don't support Gradle Module Metadata.

Sources: [live-compose-release-notes-compose-announcements-source](https://developer.android.com/jetpack/androidx/releases/compose#compose-announcements)

## Declaring dependencies

To add a dependency on Compose, you must add the Google Maven repository to your project. Read Google's Maven repository for more information.

Add the dependencies for the artifacts you need in the build.gradle file for your app or module:

Sources: [live-compose-release-notes-declaring-dependencies-source](https://developer.android.com/jetpack/androidx/releases/compose#declaring_dependencies)

## Feedback

Your feedback helps make Jetpack better. Let us know if you discover new issues or have ideas for improving this library. Please take a look at the existing issues in this library before you create a new one. You can add your vote to an existing issue by clicking the star button.

Create a new issue

See the Issue Tracker documentation for more information.

Sources: [live-compose-release-notes-feedback-source](https://developer.android.com/jetpack/androidx/releases/compose#feedback)

## Groovy

plugins {
    id 'org.jetbrains.kotlin.plugin.compose'
}

android {
    buildFeatures {
        compose true
    }

    kotlinOptions {
        jvmTarget = "1.8"
    }
}

Sources: [live-compose-release-notes-groovy-source](https://developer.android.com/jetpack/androidx/releases/compose#groovy)

## Kotlin

plugins {
    kotlin("plugin.compose")
}

android {
    buildFeatures {
        compose = true
    }

    kotlinOptions {
        jvmTarget = "1.8"
    }
}

For more information about dependencies, see Add build dependencies.

Sources: [live-compose-release-notes-kts-source](https://developer.android.com/jetpack/androidx/releases/compose#kts)

## Versions

This table lists the current versions of each group.

Maven Group ID Latest Update Stable Release Release Candidate Beta Release Alpha Release compose.animation November 04, 2026 1.12.1 1.13.0-rc01 - - compose.compiler August 7, 2024 1.5.15 - - - compose.foundation November 04, 2026 1.12.1 1.13.0-rc01 - - compose.material November 04, 2026 1.12.1 1.13.0-rc01 - - compose.material3 November 04, 2026 1.4.0 1.5.0-rc01 - - compose.runtime November 04, 2026 1.12.1 1.13.0-rc01 - - compose.ui November 04, 2026 1.12.1 1.13.0-rc01 - -

Sources: [live-compose-release-notes-versions-source](https://developer.android.com/jetpack/androidx/releases/compose#versions)
