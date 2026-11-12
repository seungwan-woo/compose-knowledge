---
type: reference
title: Compose layout basics
description: "Public source: https://developer.android.com/develop/ui/compose/layouts/basics"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-layouts-basics-composable-functions-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/basics#composable-functions
    revision: web:compose-guide-layouts-basics:content@sha256:7c1dbe9e3de191576eeb0aaa21925b77b4e0a8a52bfa1216980e2dcad6f45bcb
    sha256: 47bc92dbcfedc3d35328f9c60ac42047b9bba4ec9dffcc4b7b203989d3696e9e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Composable functions are the basic building block of Compose. A composable function is a function emitting Unit that describes some part of your UI. The function takes some input and generates what's shown on the screen. For more information about composables, take a look at the Compose mental model documentation.

      A composable function might emit several UI elements. However, if you don't provide guidance on how they should be arranged, Compose might arrange the elements in a way you don't like. For example, this code generates two text elements:

      @Composable
      fun ArtistCard() {
          Text("Alfred Sisley")
          Text("3 minutes ago")
      }LayoutBasicsSnippets.kt

      Without guidance on how you want them arranged, Compose stacks the text elements on top of each other, making them unreadable:

      Compose provides a collection of ready-to-use layouts to help you arrange your UI elements, and makes it easy to define your own, more-specialized layouts.
  - id: live-compose-guide-layouts-basics-constraints-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/basics#constraints
    revision: web:compose-guide-layouts-basics:content@sha256:7c1dbe9e3de191576eeb0aaa21925b77b4e0a8a52bfa1216980e2dcad6f45bcb
    sha256: 15228d1cdea782c91fa42a7adba93f9574f5981032593cad52e37a6a17408602
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In order to know the constraints coming from the parent and design the layout accordingly, you can use a BoxWithConstraints. The measurement constraints can be found in the scope of the content lambda. You can use these measurement constraints to compose different layouts for different screen configurations:

      @Composable
      fun WithConstraintsComposable() {
          BoxWithConstraints {
              Text("My minHeight is $minHeight while my maxWidth is $maxWidth")
          }
      }LayoutBasicsSnippets.kt
  - id: live-compose-guide-layouts-basics-layout-goals-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/basics#layout-goals
    revision: web:compose-guide-layouts-basics:content@sha256:7c1dbe9e3de191576eeb0aaa21925b77b4e0a8a52bfa1216980e2dcad6f45bcb
    sha256: 5308211077a028be4c6c35d41b9058b1b0979323f81a02c7a5b7262572a58b93
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The Jetpack Compose implementation of the layout system has two main goals:

      High performance

      Ability to easily write custom layouts
  - id: live-compose-guide-layouts-basics-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/basics#main-content
    revision: web:compose-guide-layouts-basics:content@sha256:7c1dbe9e3de191576eeb0aaa21925b77b4e0a8a52bfa1216980e2dcad6f45bcb
    sha256: e280b2e9a795636bba948b839cebeb1ffebfbfa0d45d35bea0b17f961b19edbd
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Jetpack Compose makes it much easier to design and build your app's UI. Compose transforms state into UI elements, via:

      Composition of elements

      Layout of elements

      Drawing of elements

      This document focuses on the layout of elements, explaining some of the building blocks Compose provides to help you lay out your UI elements.
  - id: live-compose-guide-layouts-basics-model-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/basics#model
    revision: web:compose-guide-layouts-basics:content@sha256:7c1dbe9e3de191576eeb0aaa21925b77b4e0a8a52bfa1216980e2dcad6f45bcb
    sha256: ecfc09feaeedd4459a9614adc962100fe95f26faf0832212a6bb4f158f467149
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In the layout model, the UI tree is laid out in a single pass. Each node is first asked to measure itself, then measure any children recursively, passing size constraints down the tree to children. Then, leaf nodes are sized and placed, with the resolved sizes and placement instructions passed back up the tree.

      Briefly, parents measure before their children, but are sized and placed after their children.

      Consider the following SearchResult function.

      @Composable
      fun SearchResult() {
          Row {
              Image(
                  // ...
              )
              Column {
                  Text(
                      // ...
                  )
                  Text(
                      // ...
                  )
              }
          }
      }LayoutBasicsSnippets.kt

      This function yields the following UI tree.

      SearchResult
        Row
          Image
          Column
            Text
            Text

      In the SearchResult example, the UI tree layout follows this order:

      The root node Row is asked to measure.

      The root node Row asks its first child, Image, to measure.

      Image is a leaf node (that is, it has no children), so it reports a size and returns placement instructions.

      The root node Row asks its second child, Column, to measure.

      The Column node asks its first Text child to measure.

      The first Text node is a leaf node, so it reports a size and returns placement instructions.

      The Column node asks its second Text child to measure.

      The second Text node is a leaf node, so it reports a size and returns placement instructions.

      Now that the Column node has measured, sized, and placed its children, it can determine its own size and placement.

      Now that the root node Row has measured, sized, and placed its children, it can determine its own size and placement.
  - id: live-compose-guide-layouts-basics-modifiers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/basics#modifiers
    revision: web:compose-guide-layouts-basics:content@sha256:7c1dbe9e3de191576eeb0aaa21925b77b4e0a8a52bfa1216980e2dcad6f45bcb
    sha256: cafb213278d9f2a7b2a8c6f518d06309cb988aef9e625ddff8215cf72cf13e85
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      As discussed in Compose modifiers, you can use modifiers to decorate or augment your composables. Modifiers are essential for customizing your layout. For example, here we chain several modifiers to customize the ArtistCard:

      @Composable
      fun ArtistCardModifiers(
          artist: Artist,
          onClick: () -> Unit
      ) {
          val padding = 16.dp
          Column(
              Modifier
                  .clickable(onClick = onClick)
                  .padding(padding)
                  .fillMaxWidth()
          ) {
              Row(verticalAlignment = Alignment.CenterVertically) { /*...*/ }
              Spacer(Modifier.size(padding))
              Card(
                  elevation = CardDefaults.cardElevation(defaultElevation = 4.dp),
              ) { /*...*/ }
          }
      }LayoutBasicsSnippets.kt

      In the code above, notice different modifier functions used together.

      clickable makes a composable react to user input and shows a ripple.

      padding puts space around an element.

      fillMaxWidth makes the composable fill the maximum width given to it from its parent.

      size() specifies an element's preferred width and height.
  - id: live-compose-guide-layouts-basics-performance-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/basics#performance
    revision: web:compose-guide-layouts-basics:content@sha256:7c1dbe9e3de191576eeb0aaa21925b77b4e0a8a52bfa1216980e2dcad6f45bcb
    sha256: ee17ffc885dd402695249ace920f3e83def3f8a53f127ef578d9c69fd9482695
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose achieves high performance by measuring children only once. Single-pass measurement is good for performance, allowing Compose to efficiently handle deep UI trees. If an element measured its child twice and that child measured each of its children twice and so on, a single attempt to lay out a whole UI would have to do a lot of work, making it hard to keep your app performant.

      If your layout needs multiple measurements for some reason, Compose offers a special system, intrinsic measurements. You can read more about this feature in Intrinsic measurements in Compose layouts.

      Since measurement and placement are distinct sub-phases of the layout pass, any changes that only affect placement of items, not measurement, can be executed separately.
  - id: live-compose-guide-layouts-basics-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/basics#recommended_for_you
    revision: web:compose-guide-layouts-basics:content@sha256:7c1dbe9e3de191576eeb0aaa21925b77b4e0a8a52bfa1216980e2dcad6f45bcb
    sha256: aeb18b407808216f20982838d6831ea95c680925495bb86331bd923997398603
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Compose modifiers

      Kotlin for Jetpack Compose

      Material Components and layouts
  - id: live-compose-guide-layouts-basics-responsive-layouts-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/basics#responsive-layouts
    revision: web:compose-guide-layouts-basics:content@sha256:7c1dbe9e3de191576eeb0aaa21925b77b4e0a8a52bfa1216980e2dcad6f45bcb
    sha256: d8f22cbbf38cb384ad58975308e6101afd7c8da2c13d6c6787811756be41757f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: A layout should be designed with consideration of different screen orientations and form factor sizes. Compose offers out of the box a few mechanisms to facilitate adapting your composable layouts to various screen configurations.
  - id: live-compose-guide-layouts-basics-scrollable-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/basics#scrollable
    revision: web:compose-guide-layouts-basics:content@sha256:7c1dbe9e3de191576eeb0aaa21925b77b4e0a8a52bfa1216980e2dcad6f45bcb
    sha256: 646b6b6394e7fa6d648f8e15d6caa12d46620d61917b1368c38c1386f6b4e585
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Learn more about scrollable layouts in the Compose gestures documentation.

      For lists and lazy lists, check out the Compose lists documentation.
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
  - id: live-compose-guide-layouts-basics-standard-layouts-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/basics#standard-layouts
    revision: web:compose-guide-layouts-basics:content@sha256:7c1dbe9e3de191576eeb0aaa21925b77b4e0a8a52bfa1216980e2dcad6f45bcb
    sha256: 3eac52c16d115b84781374a6c3d1a06fd556d77da6137ffab1fd3a4d2ae3688d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In many cases, you can just use Compose's standard layout elements.

      Use Column to place items vertically on the screen.

      @Composable
      fun ArtistCardColumn() {
          Column {
              Text("Alfred Sisley")
              Text("3 minutes ago")
          }
      }LayoutBasicsSnippets.kt

      Similarly, use Row to place items horizontally on the screen. Both Column and Row support configuring the alignment of the elements they contain.

      @Composable
      fun ArtistCardRow(artist: Artist) {
          Row(verticalAlignment = Alignment.CenterVertically) {
              Image(bitmap = artist.image, contentDescription = "Artist image")
              Column {
                  Text(artist.name)
                  Text(artist.lastSeenOnline)
              }
          }
      }
      LayoutBasicsSnippets.kt

      Use Box to put elements on top of another. Box also supports configuring specific alignment of the elements it contains.

      @Composable
      fun ArtistAvatar(artist: Artist) {
          Box {
              Image(bitmap = artist.image, contentDescription = "Artist image")
              Icon(Icons.Filled.Check, contentDescription = "Check mark")
          }
      }LayoutBasicsSnippets.kt

      Often these building blocks are all you need. You can write your own composable function to combine these layouts into a more elaborate layout that suits your app.

      To set children's position within a Row, set the horizontalArrangement and verticalAlignment arguments. For a Column, set the verticalArrangement and horizontalAlignment arguments:

      @Composable
      fun ArtistCardArrangement(artist: Artist) {
          Row(
              verticalAlignment = Alignment.CenterVertically,
              horizontalArrangement = Arrangement.End
          ) {
              Image(bitmap = artist.image, contentDescription = "Artist image")
              Column { /*...*/ }
          }
      }LayoutBasicsSnippets.kt
compose:
  id: live-compose-guide-layouts-basics
  artifact: androidx.compose.foundation:foundation-layout
  fqn: androidx.compose.foundation.layout
  sections:
    - id: live-compose-guide-layouts-basics-composable-functions
      title: Basics of composable functions
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-basics-composable-functions-source
      relatedIds: []
    - id: live-compose-guide-layouts-basics-constraints
      title: Constraints
      aliases:
        - androidx.compose.foundation.layout.BoxWithConstraints
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-basics-constraints-source
      relatedIds: []
    - id: live-compose-guide-layouts-basics-layout-goals
      title: Goals of layouts in Compose
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-basics-layout-goals-source
      relatedIds: []
    - id: live-compose-guide-layouts-basics-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-basics-main-content-source
      relatedIds: []
    - id: live-compose-guide-layouts-basics-model
      title: The layout model
      aliases:
        - androidx.compose.foundation.layout.Column
        - androidx.compose.foundation.layout.Row
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-basics-model-source
      relatedIds: []
    - id: live-compose-guide-layouts-basics-modifiers
      title: Using modifiers in your layouts
      aliases:
        - androidx.compose.foundation.layout.Column
        - androidx.compose.foundation.layout.Row
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-basics-modifiers-source
      relatedIds: []
    - id: live-compose-guide-layouts-basics-performance
      title: Performance
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-basics-performance-source
      relatedIds: []
    - id: live-compose-guide-layouts-basics-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-basics-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-layouts-basics-responsive-layouts
      title: Responsive layouts
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-basics-responsive-layouts-source
      relatedIds: []
    - id: live-compose-guide-layouts-basics-scrollable
      title: Scrollable layouts
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-basics-scrollable-source
      relatedIds: []
    - id: live-compose-guide-layouts-basics-slot-based-layouts
      title: Slot-based layouts
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-basics-slot-based-layouts-source
      relatedIds: []
    - id: live-compose-guide-layouts-basics-standard-layouts
      title: Standard layout components
      aliases:
        - androidx.compose.foundation.layout.Column
        - androidx.compose.foundation.layout.Row
        - androidx.compose.foundation.layout.Box
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-basics-standard-layouts-source
      relatedIds: []
---

# Compose layout basics

Public source: https://developer.android.com/develop/ui/compose/layouts/basics

## Basics of composable functions

Composable functions are the basic building block of Compose. A composable function is a function emitting Unit that describes some part of your UI. The function takes some input and generates what's shown on the screen. For more information about composables, take a look at the Compose mental model documentation.

A composable function might emit several UI elements. However, if you don't provide guidance on how they should be arranged, Compose might arrange the elements in a way you don't like. For example, this code generates two text elements:

@Composable
fun ArtistCard() {
    Text("Alfred Sisley")
    Text("3 minutes ago")
}LayoutBasicsSnippets.kt

Without guidance on how you want them arranged, Compose stacks the text elements on top of each other, making them unreadable:

Compose provides a collection of ready-to-use layouts to help you arrange your UI elements, and makes it easy to define your own, more-specialized layouts.

Sources: [live-compose-guide-layouts-basics-composable-functions-source](https://developer.android.com/develop/ui/compose/layouts/basics#composable-functions)

## Constraints

In order to know the constraints coming from the parent and design the layout accordingly, you can use a BoxWithConstraints. The measurement constraints can be found in the scope of the content lambda. You can use these measurement constraints to compose different layouts for different screen configurations:

@Composable
fun WithConstraintsComposable() {
    BoxWithConstraints {
        Text("My minHeight is $minHeight while my maxWidth is $maxWidth")
    }
}LayoutBasicsSnippets.kt

Sources: [live-compose-guide-layouts-basics-constraints-source](https://developer.android.com/develop/ui/compose/layouts/basics#constraints)

## Goals of layouts in Compose

The Jetpack Compose implementation of the layout system has two main goals:

High performance

Ability to easily write custom layouts

Sources: [live-compose-guide-layouts-basics-layout-goals-source](https://developer.android.com/develop/ui/compose/layouts/basics#layout-goals)

## Introduction

Jetpack Compose makes it much easier to design and build your app's UI. Compose transforms state into UI elements, via:

Composition of elements

Layout of elements

Drawing of elements

This document focuses on the layout of elements, explaining some of the building blocks Compose provides to help you lay out your UI elements.

Sources: [live-compose-guide-layouts-basics-main-content-source](https://developer.android.com/develop/ui/compose/layouts/basics#main-content)

## The layout model

In the layout model, the UI tree is laid out in a single pass. Each node is first asked to measure itself, then measure any children recursively, passing size constraints down the tree to children. Then, leaf nodes are sized and placed, with the resolved sizes and placement instructions passed back up the tree.

Briefly, parents measure before their children, but are sized and placed after their children.

Consider the following SearchResult function.

@Composable
fun SearchResult() {
    Row {
        Image(
            // ...
        )
        Column {
            Text(
                // ...
            )
            Text(
                // ...
            )
        }
    }
}LayoutBasicsSnippets.kt

This function yields the following UI tree.

SearchResult
  Row
    Image
    Column
      Text
      Text

In the SearchResult example, the UI tree layout follows this order:

The root node Row is asked to measure.

The root node Row asks its first child, Image, to measure.

Image is a leaf node (that is, it has no children), so it reports a size and returns placement instructions.

The root node Row asks its second child, Column, to measure.

The Column node asks its first Text child to measure.

The first Text node is a leaf node, so it reports a size and returns placement instructions.

The Column node asks its second Text child to measure.

The second Text node is a leaf node, so it reports a size and returns placement instructions.

Now that the Column node has measured, sized, and placed its children, it can determine its own size and placement.

Now that the root node Row has measured, sized, and placed its children, it can determine its own size and placement.

Sources: [live-compose-guide-layouts-basics-model-source](https://developer.android.com/develop/ui/compose/layouts/basics#model)

## Using modifiers in your layouts

As discussed in Compose modifiers, you can use modifiers to decorate or augment your composables. Modifiers are essential for customizing your layout. For example, here we chain several modifiers to customize the ArtistCard:

@Composable
fun ArtistCardModifiers(
    artist: Artist,
    onClick: () -> Unit
) {
    val padding = 16.dp
    Column(
        Modifier
            .clickable(onClick = onClick)
            .padding(padding)
            .fillMaxWidth()
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) { /*...*/ }
        Spacer(Modifier.size(padding))
        Card(
            elevation = CardDefaults.cardElevation(defaultElevation = 4.dp),
        ) { /*...*/ }
    }
}LayoutBasicsSnippets.kt

In the code above, notice different modifier functions used together.

clickable makes a composable react to user input and shows a ripple.

padding puts space around an element.

fillMaxWidth makes the composable fill the maximum width given to it from its parent.

size() specifies an element's preferred width and height.

Sources: [live-compose-guide-layouts-basics-modifiers-source](https://developer.android.com/develop/ui/compose/layouts/basics#modifiers)

## Performance

Compose achieves high performance by measuring children only once. Single-pass measurement is good for performance, allowing Compose to efficiently handle deep UI trees. If an element measured its child twice and that child measured each of its children twice and so on, a single attempt to lay out a whole UI would have to do a lot of work, making it hard to keep your app performant.

If your layout needs multiple measurements for some reason, Compose offers a special system, intrinsic measurements. You can read more about this feature in Intrinsic measurements in Compose layouts.

Since measurement and placement are distinct sub-phases of the layout pass, any changes that only affect placement of items, not measurement, can be executed separately.

Sources: [live-compose-guide-layouts-basics-performance-source](https://developer.android.com/develop/ui/compose/layouts/basics#performance)

## Recommended for you

Note: link text is displayed when JavaScript is off

Compose modifiers

Kotlin for Jetpack Compose

Material Components and layouts

Sources: [live-compose-guide-layouts-basics-recommended-for-you-source](https://developer.android.com/develop/ui/compose/layouts/basics#recommended_for_you)

## Responsive layouts

A layout should be designed with consideration of different screen orientations and form factor sizes. Compose offers out of the box a few mechanisms to facilitate adapting your composable layouts to various screen configurations.

Sources: [live-compose-guide-layouts-basics-responsive-layouts-source](https://developer.android.com/develop/ui/compose/layouts/basics#responsive-layouts)

## Scrollable layouts

Learn more about scrollable layouts in the Compose gestures documentation.

For lists and lazy lists, check out the Compose lists documentation.

Sources: [live-compose-guide-layouts-basics-scrollable-source](https://developer.android.com/develop/ui/compose/layouts/basics#scrollable)

## Slot-based layouts

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

Sources: [live-compose-guide-layouts-basics-slot-based-layouts-source](https://developer.android.com/develop/ui/compose/layouts/basics#slot-based-layouts)

## Standard layout components

In many cases, you can just use Compose's standard layout elements.

Use Column to place items vertically on the screen.

@Composable
fun ArtistCardColumn() {
    Column {
        Text("Alfred Sisley")
        Text("3 minutes ago")
    }
}LayoutBasicsSnippets.kt

Similarly, use Row to place items horizontally on the screen. Both Column and Row support configuring the alignment of the elements they contain.

@Composable
fun ArtistCardRow(artist: Artist) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Image(bitmap = artist.image, contentDescription = "Artist image")
        Column {
            Text(artist.name)
            Text(artist.lastSeenOnline)
        }
    }
}
LayoutBasicsSnippets.kt

Use Box to put elements on top of another. Box also supports configuring specific alignment of the elements it contains.

@Composable
fun ArtistAvatar(artist: Artist) {
    Box {
        Image(bitmap = artist.image, contentDescription = "Artist image")
        Icon(Icons.Filled.Check, contentDescription = "Check mark")
    }
}LayoutBasicsSnippets.kt

Often these building blocks are all you need. You can write your own composable function to combine these layouts into a more elaborate layout that suits your app.

To set children's position within a Row, set the horizontalArrangement and verticalAlignment arguments. For a Column, set the verticalArrangement and horizontalAlignment arguments:

@Composable
fun ArtistCardArrangement(artist: Artist) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.End
    ) {
        Image(bitmap = artist.image, contentDescription = "Artist image")
        Column { /*...*/ }
    }
}LayoutBasicsSnippets.kt

Sources: [live-compose-guide-layouts-basics-standard-layouts-source](https://developer.android.com/develop/ui/compose/layouts/basics#standard-layouts)
