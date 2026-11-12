---
type: reference
title: Android architecture introduction
description: "Public source: https://developer.android.com/topic/architecture/intro"
tags:
  - Compose
  - Android
sources:
  - id: live-android-architecture-introduction-guides-source
    kind: guide
    resource: https://developer.android.com/topic/architecture/intro#guides
    revision: web:android-architecture-introduction:content@sha256:f67817daf913e52c95b03226291a1e33e976c3336ab613395a880f19004507a7
    sha256: bd12cbf7a347e1a0c93f8449441cce200fc8edf4d99aa0de1283a4ec883e5532
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Learn the basics of putting together a robust app with the Guide to app architecture.

      Improve the user experience by fine-tuning app navigation.

      Reduce boilerplate and make your code easier to maintain with the dependency injection guides.
  - id: live-android-architecture-introduction-main-content-source
    kind: guide
    resource: https://developer.android.com/topic/architecture/intro#main-content
    revision: web:android-architecture-introduction:content@sha256:f67817daf913e52c95b03226291a1e33e976c3336ab613395a880f19004507a7
    sha256: e3339296c25849125e08c6d900ebe58de8ccf28c709b221bf3fb7662ca665add
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: App architecture design is an important consideration for ensuring that your apps are robust, testable, and maintainable. Android provides a set of libraries and components to help you put together your app according to best practices.
compose:
  id: live-android-architecture-introduction
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui
  sections:
    - id: live-android-architecture-introduction-guides
      title: Guides
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-android-architecture-introduction-guides-source
      relatedIds: []
    - id: live-android-architecture-introduction-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-android-architecture-introduction-main-content-source
      relatedIds: []
---

# Android architecture introduction

Public source: https://developer.android.com/topic/architecture/intro

## Guides

Learn the basics of putting together a robust app with the Guide to app architecture.

Improve the user experience by fine-tuning app navigation.

Reduce boilerplate and make your code easier to maintain with the dependency injection guides.

Sources: [live-android-architecture-introduction-guides-source](https://developer.android.com/topic/architecture/intro#guides)

## Introduction

App architecture design is an important consideration for ensuring that your apps are robust, testable, and maintainable. Android provides a set of libraries and components to help you put together your app according to best practices.

Sources: [live-android-architecture-introduction-main-content-source](https://developer.android.com/topic/architecture/intro#main-content)
