---
type: reference
title: Locally scoped data with CompositionLocal
description: "Public source: https://developer.android.com/develop/ui/compose/compositionlocal"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-compositionlocal-alternatives-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#alternatives
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: 7a93e08040f38197251ac7600c435415007ceb77c12ff8d7e7fd2393233ad06a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: A CompositionLocal might be an excessive solution for some use cases. If your use case doesn't meet the criteria specified in the Deciding whether to use CompositionLocal section, another solution might likely be better suited for your use case.
  - id: live-compose-guide-compositionlocal-consuming-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#consuming
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: f6cd78a2752423c5dc78d3f96eb82c8202f0983eb8d72cb9dfae5279b7059ab3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      CompositionLocal.current returns the value provided by the nearest CompositionLocalProvider that provides a value to that CompositionLocal:

      @Composable
      fun SomeComposable() {
          // Access the globally defined LocalElevations variable to get the
          // current Elevations in this part of the Composition
          MyCard(elevation = LocalElevations.current.card) {
              // Content
          }
      }CompositionLocalSnippets.kt
  - id: live-compose-guide-compositionlocal-creating-apis-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#creating-apis
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: 517747f3caa251cb41f5a34fbba3215e82a5dcbcce60a1823e2ad44acf807aeb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are two APIs to create a CompositionLocal:

      compositionLocalOf: Changing the value provided during recomposition invalidates only the content that reads its current value.

      staticCompositionLocalOf: Unlike compositionLocalOf, reads of a staticCompositionLocalOf are not tracked by Compose. Changing the value causes the entirety of the content lambda where the CompositionLocal is provided to be recomposed, instead of just the places where the current value is read in the Composition.

      If the value provided to the CompositionLocal is highly unlikely to change or will never change, use staticCompositionLocalOf to get performance benefits.

      For example, an app's design system might be opinionated in the way composables are elevated using a shadow for the UI component. Since the different elevations for the app should propagate throughout the UI tree, we use a CompositionLocal. As the CompositionLocal value is derived conditionally based on the system theme, we use the compositionLocalOf API:

      // LocalElevations.kt file

      data class Elevations(val card: Dp = 0.dp, val default: Dp = 0.dp)

      // Define a CompositionLocal global object with a default
      // This instance can be accessed by all composables in the app
      val LocalElevations = compositionLocalOf { Elevations() }CompositionLocalSnippets.kt
  - id: live-compose-guide-compositionlocal-creating-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#creating
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: 8e70923f22929e6915282459b83faf24120dee93acf7e64ed4ff9ef3370ff4c3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      CompositionLocal is a tool for passing data down through the Composition implicitly.

      Another key signal for using CompositionLocal is when the parameter is cross-cutting and intermediate layers of implementation shouldn't be aware it exists, because making those intermediate layers aware would limit the utility of the composable. For example, querying for Android permissions is afforded by a CompositionLocal under the hood. A media picker composable can add new functionality to access permission-protected content on the device without changing its API and requiring callers of the media picker to be aware of this added context used from the environment.

      However, CompositionLocal is not always the best solution. We discourage overusing CompositionLocal as it comes with some downsides:

      CompositionLocal makes a composable's behavior harder to reason about. As they create implicit dependencies, callers of composables that use them need to make sure that a value for every CompositionLocal is satisfied.

      Furthermore, there might be no clear source of truth for this dependency as it can mutate in any part of the Composition. Thus, debugging the app when a problem occurs can be more challenging as you need to navigate up the Composition to see where the current value was provided. Tools such as Find usages in the IDE or the Compose layout inspector provide enough information to mitigate this issue.
  - id: live-compose-guide-compositionlocal-deciding-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#deciding
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: 5e4a535f41aaaf869bfa6f0cd11be08a93fb345640011fac32c873315ed256ca
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are certain conditions that can make CompositionLocal a good solution for your use case:

      A CompositionLocal should have a good default value. If there's no default value, you must guarantee that it is exceedingly difficult for a developer to get into a situation where a value for the CompositionLocal isn't provided. Not providing a default value can cause problems and frustration when creating tests or previewing a composable that uses that CompositionLocal will always require it to be explicitly provided.

      Avoid CompositionLocal for concepts that aren't thought as tree-scoped or sub-hierarchy scoped. A CompositionLocal makes sense when it can be potentially used by any descendant, not by a few of them.

      If your use case doesn't meet these requirements, check out the Alternatives to consider section before creating a CompositionLocal.

      An example of a bad practice is creating a CompositionLocal that holds the ViewModel of a particular screen so that all composables in that screen can get a reference to the ViewModel to perform some logic. This is a bad practice because not all composables below a particular UI tree need to know about a ViewModel. The good practice is to pass to composables only the information that they need following the pattern that state flows down and events flow up. This approach will make your composables more reusable and easier to test.
  - id: live-compose-guide-compositionlocal-explicit-params-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#explicit-params
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: 9b87047ec303bf36ae0ba3294fdd2f15d667827e388736ab3a6ffcd7d420a8f1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Being explicit about composable's dependencies is a good habit. We recommend that you pass composables only what they need. To encourage decoupling and reuse of composables, each composable should hold the least amount of information possible.

      @Composable
      fun MyComposable(myViewModel: MyViewModel = viewModel()) {
          // ...
          MyDescendant(myViewModel.data)
      }

      // Don't pass the whole object! Just what the descendant needs.
      // Also, don't  pass the ViewModel as an implicit dependency using
      // a CompositionLocal.
      @Composable
      fun MyDescendant(myViewModel: MyViewModel) { /* ... */ }

      // Pass only what the descendant needs
      @Composable
      fun MyDescendant(data: DataToDisplay) {
          // Display data
      }CompositionLocalSnippets.kt
  - id: live-compose-guide-compositionlocal-intro-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#intro
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: e379f70b60c184ab81c2012f593c968d0b4f196e10a7f6d553c8a95d2d13347e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      // ... content here ...
          }
      }

      // Some composable deep in the hierarchy of MaterialTheme
      @Composable
      fun SomeTextLabel(labelText: String) {
          Text(
              text = labelText,
              // `primary` is obtained from MaterialTheme's
              // LocalColors CompositionLocal
              color = MaterialTheme.colorScheme.primary
          )
      }CompositionLocalSnippets.kt

      A CompositionLocal instance is scoped to a part of the Composition so you can provide different values at different levels of the tree. The current value of a CompositionLocal corresponds to the closest value provided by an ancestor in that part of the Composition.

      To provide a new value to a CompositionLocal, use the CompositionLocalProvider and its provides infix function that associates a CompositionLocal key to a value. The content lambda of the CompositionLocalProvider will get the provided value when accessing the current property of the CompositionLocal. When a new value is provided, Compose recomposes parts of the Composition that read the CompositionLocal.

      As an example of this, the LocalContentColor CompositionLocal contains the preferred content color used for text and iconography to ensure it contrasts against the current background color. In the following example, CompositionLocalProvider is used to provide different values for different parts of the Composition.

      @Composable
      fun CompositionLocalExample() {
          MaterialTheme {
              // Surface provides contentColorFor(MaterialTheme.colorScheme.surface) by default
              // This is to automatically make text and other content contrast to the background
              // correctly.
              Surface {
                  Column {
                      Text("Uses Surface's provided content color")
                      CompositionLocalProvider(LocalContentColor provides MaterialTheme.colorScheme.primary) {
                          Text("Primary color provided by LocalContentColor")
                          Text("This Text also uses primary as textColor")
                          CompositionLocalProvider(LocalContentColor provides MaterialTheme.colorScheme.error) {
                              DescendantExample()
                          }
                      }
                  }
              }
  - id: live-compose-guide-compositionlocal-intro-3-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#intro
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: 5ceecae5be6cbc0f9f0c510e08806e81c5f59d88e77ffb3ee225ed83d1a6de5c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      }
      }

      @Composable
      fun DescendantExample() {
          // CompositionLocalProviders also work across composable functions
          Text("This Text uses the error color now")
      }CompositionLocalSnippets.kt

      Figure 1.

      Preview of the

      CompositionLocalExample

      composable.

      In the last example, the CompositionLocal instances were internally used by Material composables. To access the current value of a CompositionLocal, use its current property. In the following example, the current Context value of the LocalContext CompositionLocal that is commonly used in Android apps is used to format the text:

      @Composable
      fun FruitText(fruitSize: Int) {
          // Get `resources` from the current value of LocalContext
          val resources = LocalContext.current.resources
          val fruitText = remember(resources, fruitSize) {
              resources.getQuantityString(R.plurals.fruit_title, fruitSize)
          }
          Text(text = fruitText)
      }CompositionLocalSnippets.kt
  - id: live-compose-guide-compositionlocal-intro-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#intro
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: b4114babc96acef753a96ced63e56e7ea26f9a4e829a9c7d876c26cdcc9a763c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Usually in Compose, data flows down through the UI tree as parameters to each composable function. This makes a composable's dependencies explicit. However, this can be cumbersome for data that is very frequently and widely used, such as colors or type styles. See the following example:

      @Composable
      fun MyApp() {
          // Theme information tends to be defined near the root of the application
          val colors = colors()
      }

      // Some composable deep in the hierarchy
      @Composable
      fun SomeTextLabel(labelText: String) {
          Text(
              text = labelText,
              color = colors.onPrimary // ← need to access colors here
          )
      }CompositionLocalSnippets.kt

      To support not needing to pass the colors as an explicit parameter dependency to most composables, Compose offers CompositionLocal, which allows you to create tree-scoped named objects that can be used as an implicit way to have data flow through the UI tree.

      CompositionLocal elements are usually provided with a value in a certain node of the UI tree. That value can be used by its composable descendants without declaring the CompositionLocal as a parameter in the composable function.

      Key terms: In this guide, we use the terms Composition, UI tree, and UI hierarchy. Although they might be used interchangeably in other guides, they have different meanings:

      The Composition is the record of the call graph of composable functions.

      The UI tree or UI hierarchy is the tree of LayoutNode constructed, updated, and maintained by the composition process.

      CompositionLocal is what the Material theme uses under the hood. MaterialTheme is an object that provides three CompositionLocal instances: colorScheme, typography and shapes, allowing you to retrieve them later in any descendant part of the Composition. Specifically, these are the LocalColorScheme, LocalShapes, and LocalTypography properties that you can access through the MaterialTheme colorScheme, shapes, and typography attributes.

      @Composable
      fun MyApp() {
          // Provides a Theme whose values are propagated down its `content`
          MaterialTheme {
              // New values for colorScheme, typography, and shapes are available
              // in MaterialTheme's content lambda.
  - id: live-compose-guide-compositionlocal-inversion-of-control-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#inversion-of-control
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: 94097bc0570900d2f387e14fb198baca543838140cea4150e98edeeb8fe00011
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Another way to avoid passing unnecessary dependencies to a composable is using inversion of control. Instead of the descendant taking in a dependency to execute some logic, the parent does that instead.

      See the following example where a descendant needs to trigger the request to load some data:

      @Composable
      fun MyComposable(myViewModel: MyViewModel = viewModel()) {
          // ...
          MyDescendant(myViewModel)
      }

      @Composable
      fun MyDescendant(myViewModel: MyViewModel) {
          Button(onClick = { myViewModel.loadData() }) {
              Text("Load data")
          }
      }CompositionLocalSnippets.kt

      Depending on the case, MyDescendant might have a lot of responsibility. Also, passing MyViewModel as a dependency makes MyDescendant less reusable since they're now coupled together. Consider the alternative that doesn't pass the dependency into the descendant and uses inversion of control principles that makes the ancestor responsible for executing the logic:

      @Composable
      fun MyComposable(myViewModel: MyViewModel = viewModel()) {
          // ...
          ReusableLoadDataButton(
              onLoadClick = {
                  myViewModel.loadData()
              }
          )
      }

      @Composable
      fun ReusableLoadDataButton(onLoadClick: () -> Unit) {
          Button(onClick = onLoadClick) {
              Text("Load data")
          }
      }CompositionLocalSnippets.kt

      This approach can be better suited for some use cases as it decouples the child from its immediate ancestors. Ancestor composables tend to become more complex in favor of having more flexible lower-level composables.

      Similarly, @Composable content lambdas can be used in the same way to get the same benefits:

      @Composable
      fun MyComposable(myViewModel: MyViewModel = viewModel()) {
          // ...
          ReusablePartOfTheScreen(
              content = {
                  Button(
                      onClick = {
                          myViewModel.loadData()
                      }
                  ) {
                      Text("Confirm")
                  }
              }
          )
      }

      @Composable
      fun ReusablePartOfTheScreen(content: @Composable () -> Unit) {
          Column {
              // ...
              content()
          }
      }CompositionLocalSnippets.kt
  - id: live-compose-guide-compositionlocal-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#main-content
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: d4b4abf224ec252fcbcf131e8eee58a9a178565636bad664e3b2fac6492657b5
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: CompositionLocal is a tool for passing data down through the Composition implicitly. In this page, you'll learn what a CompositionLocal is in more detail, how to create your own CompositionLocal, and know if a CompositionLocal is a good solution for your use case.
  - id: live-compose-guide-compositionlocal-providing-values-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#providing-values
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: 99901c711321defbaa12307a20e78570e6e97f1d09a3ee039a89018d62e8aacb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The CompositionLocalProvider composable binds values to CompositionLocal instances for the given hierarchy. To provide a new value to a CompositionLocal, use the provides infix function that associates a CompositionLocal key to a value as follows:

      // MyActivity.kt file

      class MyActivity : ComponentActivity() {
          override fun onCreate(savedInstanceState: Bundle?) {
              super.onCreate(savedInstanceState)

              setContent {
                  // Calculate elevations based on the system theme
                  val elevations = if (isSystemInDarkTheme()) {
                      Elevations(card = 1.dp, default = 1.dp)
                  } else {
                      Elevations(card = 0.dp, default = 0.dp)
                  }

                  // Bind elevation as the value for LocalElevations
                  CompositionLocalProvider(LocalElevations provides elevations) {
                      // ... Content goes here ...
                      // This part of Composition will see the `elevations` instance
                      // when accessing LocalElevations.current
                  }
              }
          }
      }CompositionLocalSnippets.kt
  - id: live-compose-guide-compositionlocal-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#recommended_for_you
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: 0df8f14e0a49b08e912afa3e9bf18d038fb5be8e5b0c53d48c50a9eb247d2ca4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Anatomy of a theme in Compose

      Using Views in Compose

      Kotlin for Jetpack Compose
compose:
  id: live-compose-guide-compositionlocal
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: live-compose-guide-compositionlocal-alternatives
      title: Alternatives to consider
      aliases:
        - androidx.compose.runtime.CompositionLocal
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-alternatives-source
      relatedIds: []
    - id: live-compose-guide-compositionlocal-consuming
      title: Consuming the CompositionLocal
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.CompositionLocalProvider
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-consuming-source
      relatedIds: []
    - id: live-compose-guide-compositionlocal-creating
      title: Create your own CompositionLocal
      aliases:
        - androidx.compose.runtime.CompositionLocal
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-creating-source
      relatedIds: []
    - id: live-compose-guide-compositionlocal-creating-apis
      title: Create a CompositionLocal
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.compositionLocalOf
        - androidx.compose.runtime.staticCompositionLocalOf
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-creating-apis-source
      relatedIds: []
    - id: live-compose-guide-compositionlocal-deciding
      title: Decide whether to use CompositionLocal
      aliases:
        - androidx.compose.runtime.CompositionLocal
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-deciding-source
      relatedIds: []
    - id: live-compose-guide-compositionlocal-explicit-params
      title: Pass explicit parameters
      aliases:
        - androidx.compose.runtime.CompositionLocal
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-explicit-params-source
      relatedIds: []
    - id: live-compose-guide-compositionlocal-intro
      title: Introduction to CompositionLocal
      aliases:
        - androidx.compose.runtime.CompositionLocal
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-intro-source
      relatedIds: []
    - id: live-compose-guide-compositionlocal-intro-2
      title: Introduction to CompositionLocal
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.CompositionLocalProvider
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-intro-2-source
      relatedIds: []
    - id: live-compose-guide-compositionlocal-intro-3
      title: Introduction to CompositionLocal
      aliases:
        - androidx.compose.runtime.CompositionLocal
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-intro-3-source
      relatedIds: []
    - id: live-compose-guide-compositionlocal-inversion-of-control
      title: Inversion of control
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-inversion-of-control-source
      relatedIds: []
    - id: live-compose-guide-compositionlocal-main-content
      title: Introduction
      aliases:
        - androidx.compose.runtime.CompositionLocal
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-main-content-source
      relatedIds: []
    - id: live-compose-guide-compositionlocal-providing-values
      title: Provide values to a CompositionLocal
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.CompositionLocalProvider
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-providing-values-source
      relatedIds: []
    - id: live-compose-guide-compositionlocal-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-recommended-for-you-source
      relatedIds: []
---

# Locally scoped data with CompositionLocal

Public source: https://developer.android.com/develop/ui/compose/compositionlocal

## Alternatives to consider

A CompositionLocal might be an excessive solution for some use cases. If your use case doesn't meet the criteria specified in the Deciding whether to use CompositionLocal section, another solution might likely be better suited for your use case.

Sources: [live-compose-guide-compositionlocal-alternatives-source](https://developer.android.com/develop/ui/compose/compositionlocal#alternatives)

## Consuming the CompositionLocal

CompositionLocal.current returns the value provided by the nearest CompositionLocalProvider that provides a value to that CompositionLocal:

@Composable
fun SomeComposable() {
    // Access the globally defined LocalElevations variable to get the
    // current Elevations in this part of the Composition
    MyCard(elevation = LocalElevations.current.card) {
        // Content
    }
}CompositionLocalSnippets.kt

Sources: [live-compose-guide-compositionlocal-consuming-source](https://developer.android.com/develop/ui/compose/compositionlocal#consuming)

## Create your own CompositionLocal

CompositionLocal is a tool for passing data down through the Composition implicitly.

Another key signal for using CompositionLocal is when the parameter is cross-cutting and intermediate layers of implementation shouldn't be aware it exists, because making those intermediate layers aware would limit the utility of the composable. For example, querying for Android permissions is afforded by a CompositionLocal under the hood. A media picker composable can add new functionality to access permission-protected content on the device without changing its API and requiring callers of the media picker to be aware of this added context used from the environment.

However, CompositionLocal is not always the best solution. We discourage overusing CompositionLocal as it comes with some downsides:

CompositionLocal makes a composable's behavior harder to reason about. As they create implicit dependencies, callers of composables that use them need to make sure that a value for every CompositionLocal is satisfied.

Furthermore, there might be no clear source of truth for this dependency as it can mutate in any part of the Composition. Thus, debugging the app when a problem occurs can be more challenging as you need to navigate up the Composition to see where the current value was provided. Tools such as Find usages in the IDE or the Compose layout inspector provide enough information to mitigate this issue.

Sources: [live-compose-guide-compositionlocal-creating-source](https://developer.android.com/develop/ui/compose/compositionlocal#creating)

## Create a CompositionLocal

There are two APIs to create a CompositionLocal:

compositionLocalOf: Changing the value provided during recomposition invalidates only the content that reads its current value.

staticCompositionLocalOf: Unlike compositionLocalOf, reads of a staticCompositionLocalOf are not tracked by Compose. Changing the value causes the entirety of the content lambda where the CompositionLocal is provided to be recomposed, instead of just the places where the current value is read in the Composition.

If the value provided to the CompositionLocal is highly unlikely to change or will never change, use staticCompositionLocalOf to get performance benefits.

For example, an app's design system might be opinionated in the way composables are elevated using a shadow for the UI component. Since the different elevations for the app should propagate throughout the UI tree, we use a CompositionLocal. As the CompositionLocal value is derived conditionally based on the system theme, we use the compositionLocalOf API:

// LocalElevations.kt file

data class Elevations(val card: Dp = 0.dp, val default: Dp = 0.dp)

// Define a CompositionLocal global object with a default
// This instance can be accessed by all composables in the app
val LocalElevations = compositionLocalOf { Elevations() }CompositionLocalSnippets.kt

Sources: [live-compose-guide-compositionlocal-creating-apis-source](https://developer.android.com/develop/ui/compose/compositionlocal#creating-apis)

## Decide whether to use CompositionLocal

There are certain conditions that can make CompositionLocal a good solution for your use case:

A CompositionLocal should have a good default value. If there's no default value, you must guarantee that it is exceedingly difficult for a developer to get into a situation where a value for the CompositionLocal isn't provided. Not providing a default value can cause problems and frustration when creating tests or previewing a composable that uses that CompositionLocal will always require it to be explicitly provided.

Avoid CompositionLocal for concepts that aren't thought as tree-scoped or sub-hierarchy scoped. A CompositionLocal makes sense when it can be potentially used by any descendant, not by a few of them.

If your use case doesn't meet these requirements, check out the Alternatives to consider section before creating a CompositionLocal.

An example of a bad practice is creating a CompositionLocal that holds the ViewModel of a particular screen so that all composables in that screen can get a reference to the ViewModel to perform some logic. This is a bad practice because not all composables below a particular UI tree need to know about a ViewModel. The good practice is to pass to composables only the information that they need following the pattern that state flows down and events flow up. This approach will make your composables more reusable and easier to test.

Sources: [live-compose-guide-compositionlocal-deciding-source](https://developer.android.com/develop/ui/compose/compositionlocal#deciding)

## Pass explicit parameters

Being explicit about composable's dependencies is a good habit. We recommend that you pass composables only what they need. To encourage decoupling and reuse of composables, each composable should hold the least amount of information possible.

@Composable
fun MyComposable(myViewModel: MyViewModel = viewModel()) {
    // ...
    MyDescendant(myViewModel.data)
}

// Don't pass the whole object! Just what the descendant needs.
// Also, don't  pass the ViewModel as an implicit dependency using
// a CompositionLocal.
@Composable
fun MyDescendant(myViewModel: MyViewModel) { /* ... */ }

// Pass only what the descendant needs
@Composable
fun MyDescendant(data: DataToDisplay) {
    // Display data
}CompositionLocalSnippets.kt

Sources: [live-compose-guide-compositionlocal-explicit-params-source](https://developer.android.com/develop/ui/compose/compositionlocal#explicit-params)

## Introduction to CompositionLocal

Usually in Compose, data flows down through the UI tree as parameters to each composable function. This makes a composable's dependencies explicit. However, this can be cumbersome for data that is very frequently and widely used, such as colors or type styles. See the following example:

@Composable
fun MyApp() {
    // Theme information tends to be defined near the root of the application
    val colors = colors()
}

// Some composable deep in the hierarchy
@Composable
fun SomeTextLabel(labelText: String) {
    Text(
        text = labelText,
        color = colors.onPrimary // ← need to access colors here
    )
}CompositionLocalSnippets.kt

To support not needing to pass the colors as an explicit parameter dependency to most composables, Compose offers CompositionLocal, which allows you to create tree-scoped named objects that can be used as an implicit way to have data flow through the UI tree.

CompositionLocal elements are usually provided with a value in a certain node of the UI tree. That value can be used by its composable descendants without declaring the CompositionLocal as a parameter in the composable function.

Key terms: In this guide, we use the terms Composition, UI tree, and UI hierarchy. Although they might be used interchangeably in other guides, they have different meanings:

The Composition is the record of the call graph of composable functions.

The UI tree or UI hierarchy is the tree of LayoutNode constructed, updated, and maintained by the composition process.

CompositionLocal is what the Material theme uses under the hood. MaterialTheme is an object that provides three CompositionLocal instances: colorScheme, typography and shapes, allowing you to retrieve them later in any descendant part of the Composition. Specifically, these are the LocalColorScheme, LocalShapes, and LocalTypography properties that you can access through the MaterialTheme colorScheme, shapes, and typography attributes.

@Composable
fun MyApp() {
    // Provides a Theme whose values are propagated down its `content`
    MaterialTheme {
        // New values for colorScheme, typography, and shapes are available
        // in MaterialTheme's content lambda.

Sources: [live-compose-guide-compositionlocal-intro-source](https://developer.android.com/develop/ui/compose/compositionlocal#intro)

## Introduction to CompositionLocal

// ... content here ...
    }
}

// Some composable deep in the hierarchy of MaterialTheme
@Composable
fun SomeTextLabel(labelText: String) {
    Text(
        text = labelText,
        // `primary` is obtained from MaterialTheme's
        // LocalColors CompositionLocal
        color = MaterialTheme.colorScheme.primary
    )
}CompositionLocalSnippets.kt

A CompositionLocal instance is scoped to a part of the Composition so you can provide different values at different levels of the tree. The current value of a CompositionLocal corresponds to the closest value provided by an ancestor in that part of the Composition.

To provide a new value to a CompositionLocal, use the CompositionLocalProvider and its provides infix function that associates a CompositionLocal key to a value. The content lambda of the CompositionLocalProvider will get the provided value when accessing the current property of the CompositionLocal. When a new value is provided, Compose recomposes parts of the Composition that read the CompositionLocal.

As an example of this, the LocalContentColor CompositionLocal contains the preferred content color used for text and iconography to ensure it contrasts against the current background color. In the following example, CompositionLocalProvider is used to provide different values for different parts of the Composition.

@Composable
fun CompositionLocalExample() {
    MaterialTheme {
        // Surface provides contentColorFor(MaterialTheme.colorScheme.surface) by default
        // This is to automatically make text and other content contrast to the background
        // correctly.
        Surface {
            Column {
                Text("Uses Surface's provided content color")
                CompositionLocalProvider(LocalContentColor provides MaterialTheme.colorScheme.primary) {
                    Text("Primary color provided by LocalContentColor")
                    Text("This Text also uses primary as textColor")
                    CompositionLocalProvider(LocalContentColor provides MaterialTheme.colorScheme.error) {
                        DescendantExample()
                    }
                }
            }
        }

Sources: [live-compose-guide-compositionlocal-intro-2-source](https://developer.android.com/develop/ui/compose/compositionlocal#intro)

## Introduction to CompositionLocal

}
}

@Composable
fun DescendantExample() {
    // CompositionLocalProviders also work across composable functions
    Text("This Text uses the error color now")
}CompositionLocalSnippets.kt

Figure 1.

Preview of the

CompositionLocalExample

composable.

In the last example, the CompositionLocal instances were internally used by Material composables. To access the current value of a CompositionLocal, use its current property. In the following example, the current Context value of the LocalContext CompositionLocal that is commonly used in Android apps is used to format the text:

@Composable
fun FruitText(fruitSize: Int) {
    // Get `resources` from the current value of LocalContext
    val resources = LocalContext.current.resources
    val fruitText = remember(resources, fruitSize) {
        resources.getQuantityString(R.plurals.fruit_title, fruitSize)
    }
    Text(text = fruitText)
}CompositionLocalSnippets.kt

Sources: [live-compose-guide-compositionlocal-intro-3-source](https://developer.android.com/develop/ui/compose/compositionlocal#intro)

## Inversion of control

Another way to avoid passing unnecessary dependencies to a composable is using inversion of control. Instead of the descendant taking in a dependency to execute some logic, the parent does that instead.

See the following example where a descendant needs to trigger the request to load some data:

@Composable
fun MyComposable(myViewModel: MyViewModel = viewModel()) {
    // ...
    MyDescendant(myViewModel)
}

@Composable
fun MyDescendant(myViewModel: MyViewModel) {
    Button(onClick = { myViewModel.loadData() }) {
        Text("Load data")
    }
}CompositionLocalSnippets.kt

Depending on the case, MyDescendant might have a lot of responsibility. Also, passing MyViewModel as a dependency makes MyDescendant less reusable since they're now coupled together. Consider the alternative that doesn't pass the dependency into the descendant and uses inversion of control principles that makes the ancestor responsible for executing the logic:

@Composable
fun MyComposable(myViewModel: MyViewModel = viewModel()) {
    // ...
    ReusableLoadDataButton(
        onLoadClick = {
            myViewModel.loadData()
        }
    )
}

@Composable
fun ReusableLoadDataButton(onLoadClick: () -> Unit) {
    Button(onClick = onLoadClick) {
        Text("Load data")
    }
}CompositionLocalSnippets.kt

This approach can be better suited for some use cases as it decouples the child from its immediate ancestors. Ancestor composables tend to become more complex in favor of having more flexible lower-level composables.

Similarly, @Composable content lambdas can be used in the same way to get the same benefits:

@Composable
fun MyComposable(myViewModel: MyViewModel = viewModel()) {
    // ...
    ReusablePartOfTheScreen(
        content = {
            Button(
                onClick = {
                    myViewModel.loadData()
                }
            ) {
                Text("Confirm")
            }
        }
    )
}

@Composable
fun ReusablePartOfTheScreen(content: @Composable () -> Unit) {
    Column {
        // ...
        content()
    }
}CompositionLocalSnippets.kt

Sources: [live-compose-guide-compositionlocal-inversion-of-control-source](https://developer.android.com/develop/ui/compose/compositionlocal#inversion-of-control)

## Introduction

CompositionLocal is a tool for passing data down through the Composition implicitly. In this page, you'll learn what a CompositionLocal is in more detail, how to create your own CompositionLocal, and know if a CompositionLocal is a good solution for your use case.

Sources: [live-compose-guide-compositionlocal-main-content-source](https://developer.android.com/develop/ui/compose/compositionlocal#main-content)

## Provide values to a CompositionLocal

The CompositionLocalProvider composable binds values to CompositionLocal instances for the given hierarchy. To provide a new value to a CompositionLocal, use the provides infix function that associates a CompositionLocal key to a value as follows:

// MyActivity.kt file

class MyActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            // Calculate elevations based on the system theme
            val elevations = if (isSystemInDarkTheme()) {
                Elevations(card = 1.dp, default = 1.dp)
            } else {
                Elevations(card = 0.dp, default = 0.dp)
            }

            // Bind elevation as the value for LocalElevations
            CompositionLocalProvider(LocalElevations provides elevations) {
                // ... Content goes here ...
                // This part of Composition will see the `elevations` instance
                // when accessing LocalElevations.current
            }
        }
    }
}CompositionLocalSnippets.kt

Sources: [live-compose-guide-compositionlocal-providing-values-source](https://developer.android.com/develop/ui/compose/compositionlocal#providing-values)

## Recommended for you

Note: link text is displayed when JavaScript is off

Anatomy of a theme in Compose

Using Views in Compose

Kotlin for Jetpack Compose

Sources: [live-compose-guide-compositionlocal-recommended-for-you-source](https://developer.android.com/develop/ui/compose/compositionlocal#recommended_for_you)
