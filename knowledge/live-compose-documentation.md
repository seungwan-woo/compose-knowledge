---
type: reference
title: Compose documentation
description: "Public source: https://developer.android.com/develop/ui/compose/documentation"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-documentation-adaptive-ui-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/documentation#adaptive-ui
    revision: web:compose-documentation:content@sha256:f78a266d86fc8cbe8940e0667e32eb028eca91ce7372d8ffb9f87dd668f6e05b
    sha256: 0e9825b7ae1a4ff9fd5214dc62704ce02861cc34edd058aabf5b418b11f98c45
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Build adaptive apps: Learn the core principles of creating layouts optimized for any display size, including phones, tablets, foldables, and more.

      Apply proven layouts: Use canonical layouts like list-detail and supporting pane for optimized apps on large screens.

      Adaptive navigation: Implement navigation patterns that automatically adjust to the available display space.
  - id: live-compose-documentation-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/documentation#additional-resources
    revision: web:compose-documentation:content@sha256:f78a266d86fc8cbe8940e0667e32eb028eca91ce7372d8ffb9f87dd668f6e05b
    sha256: d87204c378451a1a2298a0e133a45f57adacac2c5a6e3b57705f46a757a6231c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Get setup

      Curated learning pathway

      Compose API guidelines

      API reference

      Codelabs

      Sample apps

      Videos
  - id: live-compose-documentation-adopting-compose-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/documentation#adopting-compose
    revision: web:compose-documentation:content@sha256:f78a266d86fc8cbe8940e0667e32eb028eca91ce7372d8ffb9f87dd668f6e05b
    sha256: ab2c497ce7a35ce6561d587076422f666cb679fd7914df3ad8dda20b9796b05b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Migrate view-based apps: Migrate your view-based app to Compose. Migration strategy: How to safely and incrementally introduce Compose into your codebase. Interoperability APIs: Compose APIs to help you combine Compose with a view-based UI. Other considerations: Theming, architecture, testing, and other considerations while migrating your view-based app to Compose.

      Compose and other libraries: How to use view-based libraries in your Compose content.

      Compose architecture: Implement the unidirectional flow pattern in Compose, implement events and state holders, and work with ViewModel in Compose.

      Navigation: Use NavController to integrate the Navigation component with your Compose UI.

      Resources: Work with your app's resources in your Compose code.

      Accessibility: Accommodate users with accessibility requirements.

      Testing: Test your Compose code. Testing cheat sheet: A quick reference of useful Compose testing APIs.
  - id: live-compose-documentation-design-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/documentation#design
    revision: web:compose-documentation:content@sha256:f78a266d86fc8cbe8940e0667e32eb028eca91ce7372d8ffb9f87dd668f6e05b
    sha256: 1efd96a0e497907c27f68af8310611ad4400dc93ba462ffd330cf1d0163184a1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Layouts: Compose layout components and how to design your own. Layout basics: The building blocks for a straightforward app UI. Material Components and layouts: Material components and layouts in Compose. Custom layouts: Take control of your app's layout and design a custom layout of your own. Alignment lines: Create custom alignment guides to precisely align and position your UI elements. Intrinsic measurements: How to query for information about child elements before measuring them because Compose measures UI elements only once per pass. ConstraintLayout: Use ConstraintLayout in your Compose UI.

      Design Systems: Implement a design system and give your app a consistent look and feel. Material Design 3: Implement Material You with the Compose implementation of Material Design 3. Migrating from Material 2 to Material 3: Migrate your app from Material Design 2 to Material Design 3 in Compose. Material Design 2: Customize the Compose implementation of Material Design 2 to fit your product's brand. Custom design systems: Implement a custom design system in Compose and adapt existing Material Design composables for the new design system. Anatomy of a theme: Lower-level constructs and APIs used by MaterialTheme and custom design systems.

      Lists and grids: Compose options for managing and displaying lists and grids of data.

      Text: Main options in Compose for displaying and editing text.

      Graphics: Compose features for building and working with custom graphics.

      Animation: Compose options for animating your UI elements.

      Gestures: Build a Compose UI that detects and interacts with user gestures.

      Handling user interactions: How Compose abstracts low-level input into higher-level interactions so you can customize how your components respond to user actions.
  - id: live-compose-documentation-development-environment-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/documentation#development-environment
    revision: web:compose-documentation:content@sha256:f78a266d86fc8cbe8940e0667e32eb028eca91ce7372d8ffb9f87dd668f6e05b
    sha256: 2f7bac285722820c463edfa208bec0b8dc6c960f3e08fbb37573dcb8acc23d19
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Android Studio with Compose: How to set up your development environment to use Compose.

      Tooling for Compose: Android Studio's new features to support Compose.

      Kotlin for Compose: Kotlin-specific idioms work with Compose.

      Compare Compose and view metrics: How migrating to Compose can affect your app's APK size and runtime performance.

      Bill of Materials: Manage all your Compose dependencies by specifying only the BOM's version.
  - id: live-compose-documentation-foundation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/documentation#foundation
    revision: web:compose-documentation:content@sha256:f78a266d86fc8cbe8940e0667e32eb028eca91ce7372d8ffb9f87dd668f6e05b
    sha256: 4bb1a9c2f0de5658dad33da72cfb8e156a2b09f6ef48fc23ca45dfc2ac0972a2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Thinking in Compose: How the declarative approach of Compose is different from the view-based approach you may have used in the past. Build a mental model of working with Compose.

      Managing state: Setting and using state in your Compose app.

      Lifecycle of composables: Lifecycle of a composable, and how Compose determines whether it needs to be redrawn.

      Modifiers: Use modifiers to augment or decorate your composables.

      Side-effects in Compose: Ways to manage side-effects.

      Jetpack Compose Phases: The steps Compose goes through to render your app's UI, and how to use that information to write efficient code.

      Architectural layering: The architectural layers that make up Jetpack Compose and the core principles that informed the design of Compose.

      Performance: Avoid the common programming pitfalls that can degrade app performance.

      Semantics in Compose: The semantics tree, which organizes your UI in a way that can be used by accessibility services and testing frameworks.

      Locally scoped data with CompositionLocal: Use CompositionLocal to pass data through the composition.
  - id: live-compose-documentation-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/documentation#main-content
    revision: web:compose-documentation:content@sha256:f78a266d86fc8cbe8940e0667e32eb028eca91ce7372d8ffb9f87dd668f6e05b
    sha256: b83b18fa994d3d4621953311c5feda6ab92bcb1fa77385a04ad5d9299ecec77c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Jetpack Compose is the modern toolkit for building Android UI, simplifying the development of apps that adapt to any display size.

      Overview: See the resources available to Compose developers.

      Tutorial: Get started with Compose by building a basic UI.

      Quick Guides: Try out our fast and focused guides, designed to get you to your goal as quickly as possible.
  - id: live-compose-documentation-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/documentation#recommended_for_you
    revision: web:compose-documentation:content@sha256:f78a266d86fc8cbe8940e0667e32eb028eca91ce7372d8ffb9f87dd668f6e05b
    sha256: 9126657a1adafaa9f261535e9e1e321b7fde3d72edbe7ac598a424f2b37c21f8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Locally scoped data with CompositionLocal

      Other considerations

      Anatomy of a theme in Compose
compose:
  id: live-compose-documentation
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui
  sections:
    - id: live-compose-documentation-adaptive-ui
      title: Adaptive UI
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-documentation-adaptive-ui-source
      relatedIds: []
    - id: live-compose-documentation-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-documentation-additional-resources-source
      relatedIds: []
    - id: live-compose-documentation-adopting-compose
      title: Adopting Compose
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-documentation-adopting-compose-source
      relatedIds: []
    - id: live-compose-documentation-design
      title: Design
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-documentation-design-source
      relatedIds: []
    - id: live-compose-documentation-development-environment
      title: Development environment
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-documentation-development-environment-source
      relatedIds: []
    - id: live-compose-documentation-foundation
      title: Foundation
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-documentation-foundation-source
      relatedIds: []
    - id: live-compose-documentation-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-documentation-main-content-source
      relatedIds: []
    - id: live-compose-documentation-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-documentation-recommended-for-you-source
      relatedIds: []
---

# Compose documentation

Public source: https://developer.android.com/develop/ui/compose/documentation

## Adaptive UI

Build adaptive apps: Learn the core principles of creating layouts optimized for any display size, including phones, tablets, foldables, and more.

Apply proven layouts: Use canonical layouts like list-detail and supporting pane for optimized apps on large screens.

Adaptive navigation: Implement navigation patterns that automatically adjust to the available display space.

Sources: [live-compose-documentation-adaptive-ui-source](https://developer.android.com/develop/ui/compose/documentation#adaptive-ui)

## Additional resources

Get setup

Curated learning pathway

Compose API guidelines

API reference

Codelabs

Sample apps

Videos

Sources: [live-compose-documentation-additional-resources-source](https://developer.android.com/develop/ui/compose/documentation#additional-resources)

## Adopting Compose

Migrate view-based apps: Migrate your view-based app to Compose. Migration strategy: How to safely and incrementally introduce Compose into your codebase. Interoperability APIs: Compose APIs to help you combine Compose with a view-based UI. Other considerations: Theming, architecture, testing, and other considerations while migrating your view-based app to Compose.

Compose and other libraries: How to use view-based libraries in your Compose content.

Compose architecture: Implement the unidirectional flow pattern in Compose, implement events and state holders, and work with ViewModel in Compose.

Navigation: Use NavController to integrate the Navigation component with your Compose UI.

Resources: Work with your app's resources in your Compose code.

Accessibility: Accommodate users with accessibility requirements.

Testing: Test your Compose code. Testing cheat sheet: A quick reference of useful Compose testing APIs.

Sources: [live-compose-documentation-adopting-compose-source](https://developer.android.com/develop/ui/compose/documentation#adopting-compose)

## Design

Layouts: Compose layout components and how to design your own. Layout basics: The building blocks for a straightforward app UI. Material Components and layouts: Material components and layouts in Compose. Custom layouts: Take control of your app's layout and design a custom layout of your own. Alignment lines: Create custom alignment guides to precisely align and position your UI elements. Intrinsic measurements: How to query for information about child elements before measuring them because Compose measures UI elements only once per pass. ConstraintLayout: Use ConstraintLayout in your Compose UI.

Design Systems: Implement a design system and give your app a consistent look and feel. Material Design 3: Implement Material You with the Compose implementation of Material Design 3. Migrating from Material 2 to Material 3: Migrate your app from Material Design 2 to Material Design 3 in Compose. Material Design 2: Customize the Compose implementation of Material Design 2 to fit your product's brand. Custom design systems: Implement a custom design system in Compose and adapt existing Material Design composables for the new design system. Anatomy of a theme: Lower-level constructs and APIs used by MaterialTheme and custom design systems.

Lists and grids: Compose options for managing and displaying lists and grids of data.

Text: Main options in Compose for displaying and editing text.

Graphics: Compose features for building and working with custom graphics.

Animation: Compose options for animating your UI elements.

Gestures: Build a Compose UI that detects and interacts with user gestures.

Handling user interactions: How Compose abstracts low-level input into higher-level interactions so you can customize how your components respond to user actions.

Sources: [live-compose-documentation-design-source](https://developer.android.com/develop/ui/compose/documentation#design)

## Development environment

Android Studio with Compose: How to set up your development environment to use Compose.

Tooling for Compose: Android Studio's new features to support Compose.

Kotlin for Compose: Kotlin-specific idioms work with Compose.

Compare Compose and view metrics: How migrating to Compose can affect your app's APK size and runtime performance.

Bill of Materials: Manage all your Compose dependencies by specifying only the BOM's version.

Sources: [live-compose-documentation-development-environment-source](https://developer.android.com/develop/ui/compose/documentation#development-environment)

## Foundation

Thinking in Compose: How the declarative approach of Compose is different from the view-based approach you may have used in the past. Build a mental model of working with Compose.

Managing state: Setting and using state in your Compose app.

Lifecycle of composables: Lifecycle of a composable, and how Compose determines whether it needs to be redrawn.

Modifiers: Use modifiers to augment or decorate your composables.

Side-effects in Compose: Ways to manage side-effects.

Jetpack Compose Phases: The steps Compose goes through to render your app's UI, and how to use that information to write efficient code.

Architectural layering: The architectural layers that make up Jetpack Compose and the core principles that informed the design of Compose.

Performance: Avoid the common programming pitfalls that can degrade app performance.

Semantics in Compose: The semantics tree, which organizes your UI in a way that can be used by accessibility services and testing frameworks.

Locally scoped data with CompositionLocal: Use CompositionLocal to pass data through the composition.

Sources: [live-compose-documentation-foundation-source](https://developer.android.com/develop/ui/compose/documentation#foundation)

## Introduction

Jetpack Compose is the modern toolkit for building Android UI, simplifying the development of apps that adapt to any display size.

Overview: See the resources available to Compose developers.

Tutorial: Get started with Compose by building a basic UI.

Quick Guides: Try out our fast and focused guides, designed to get you to your goal as quickly as possible.

Sources: [live-compose-documentation-main-content-source](https://developer.android.com/develop/ui/compose/documentation#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Locally scoped data with CompositionLocal

Other considerations

Anatomy of a theme in Compose

Sources: [live-compose-documentation-recommended-for-you-source](https://developer.android.com/develop/ui/compose/documentation#recommended_for_you)
