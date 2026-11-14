---
type: reference
title: "Guidance: Use named composable slots for independently configurable content"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-layouts-basics-slot-based-layouts-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/basics#slot-based-layouts
    revision: web:compose-guide-layouts-basics:content@sha256:7c1dbe9e3de191576eeb0aaa21925b77b4e0a8a52bfa1216980e2dcad6f45bcb
    sha256: 222aafce802668c5fa4bb1e05bd2b14556755a4dd4338ac4b22c976f084f7227
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose provides a large variety of composables based on Material Design with the androidx.compose.material:material dependency (included when creating a Compose project in Android Studio) to make UI building easy. Elements like Drawer, FloatingActionButton, and TopAppBar are all provided.

      Material components make heavy use of slot APIs, a pattern Compose introduces to bring in a layer of customization on top of composables. This approach makes components more flexible, as they accept a child element which can configure itself rather than having to expose every configuration parameter of the child. Slots leave an empty space in the UI for the developer to fill as they wish. For example, these are the slots that you can customize in a TopAppBar:

      Composables usually take a content composable lambda ( content: @Composable () -> Unit). Slot APIs expose multiple content parameters for specific uses. For example, TopAppBar allows you to provide the content for title, navigationIcon, and actions.

      For example, Scaffold allows you to implement a UI with the basic Material Design layout structure. Scaffoldprovides slots for the most common top-level Material components, such as TopAppBar, BottomAppBar, FloatingActionButton, and Drawer. By using Scaffold, it's easy to make sure these components are properly positioned and work together correctly.

      @Composable
      fun HomeScreen(/*...*/) {
          ModalNavigationDrawer(drawerContent = { /* ... */ }) {
              Scaffold(
                  topBar = { /*...*/ }
              ) { contentPadding ->
                  // ...
              }
          }
      }LayoutBasicsSnippets.kt
compose:
  id: guide-slot-api-content-customization
  artifact: androidx.compose.foundation:foundation-layout
  fqn: androidx.compose.foundation.layout
  sections:
    - id: guide-slot-api-content-customization
      title: "Guidance: Use named composable slots for independently configurable content"
      aliases:
        - slot API
        - slot-based layout
        - named slots
        - configuration model
        - content lambda
        - 슬롯 API
        - 슬롯 패턴
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-basics-slot-based-layouts-source
      relatedIds:
        - live-compose-guide-layouts-basics-slot-based-layouts
---

# Guidance: Use named composable slots for independently configurable content

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Use named composable slots for independently configurable content

Guidance: Use composable slots when callers need to supply UI content that configures itself. A content lambda accepts child composition; named slots such as title, navigationIcon, and actions expose distinct roles without making the parent mirror every configuration parameter of those children. This lets a component library own placement while callers customize slot content. Limitation: this is a content customization contract, not a rule to replace every scalar parameter or configuration object with a lambda. The cited layout guide includes older Material examples; it does not establish current Material 3 signatures or released-version applicability.

Sources: [live-compose-guide-layouts-basics-slot-based-layouts-source](https://developer.android.com/develop/ui/compose/layouts/basics#slot-based-layouts)
