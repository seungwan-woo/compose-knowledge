---
type: reference
title: Compose modifiers
description: "Public source: https://developer.android.com/develop/ui/compose/modifiers"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-modifiers-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#additional-resources
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: e3dde4c43f09723d43497db6123879dd56da264881299fd9eec70fd5a9719b64
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      We provide a full list of modifiers, with their parameters and scopes.

      For more practice on how to use modifiers, you can also go through the Basic layouts in Compose codelab or refer to the Now in Android repository.

      For more information on custom modifiers and how to create them, take a look at the documentation on Custom layouts - Using the layout modifier.
  - id: live-compose-guide-modifiers-best-practices-for-reusing-modifiers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#best_practices_for_reusing_modifiers
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: 0fd754712151fde92dc0e6460c5988ae0d5d73521553a66566aedf39c6576b60
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Create your own Modifier chains and extract them to reuse them on multiple composable components. It is completely fine to just save a modifier, as they are data-like objects:

      val reusableModifier = Modifier
          .fillMaxWidth()
          .background(Color.Red)
          .padding(12.dp)ModifierSnippets.kt
  - id: live-compose-guide-modifiers-built-in-modifiers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#built-in-modifiers
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: 3d779087a6e0cd735000d89b8a6a643b3c01ed408ebcde126294a821be25764c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Jetpack Compose provides a list of built-in modifiers to help you decorate or augment a composable. Here are some common modifiers you'll use to adjust your layouts.
  - id: live-compose-guide-modifiers-extracting-and-reusing-modifiers-when-observing-frequently-changing-state-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#extracting_and_reusing_modifiers_when_observing_frequently_changing_state
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: 26cdfb0607becc4833f933e1518245f15094ade76a304887a4e624976ca1ae9b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When observing frequently changing states inside composables, like animation states or scrollState, there can be a significant amount of recompositions done. In this case, your modifiers will get allocated on every recomposition and potentially for every frame:

      @Composable
      fun LoadingWheelAnimation() {
          val animatedState = animateFloatAsState(/*...*/)

          LoadingWheel(
              // Creation and allocation of this modifier will happen on every frame of the animation!
              modifier = Modifier
                  .padding(12.dp)
                  .background(Color.Gray),
              animatedState = animatedState
          )
      }ModifierSnippets.kt

      Instead, you can create, extract and reuse the same instance of the modifier and pass it to the composable like this:

      // Now, the allocation of the modifier happens here:
      val reusableModifier = Modifier
          .padding(12.dp)
          .background(Color.Gray)

      @Composable
      fun LoadingWheelAnimation() {
          val animatedState = animateFloatAsState(/*...*/)

          LoadingWheel(
              // No allocation, as we're just reusing the same instance
              modifier = reusableModifier,
              animatedState = animatedState
          )
      }ModifierSnippets.kt
  - id: live-compose-guide-modifiers-extracting-and-reusing-scoped-modifiers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#extracting_and_reusing_scoped_modifiers
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: 1738f600513fe9bc8cefcbfc3206344f2476766d334ba26aa471c25fd2075735
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When dealing with modifiers that are scoped to certain composables, you can extract them to the highest possible level and reuse where appropriate:

      Column(/*...*/) {
          val reusableItemModifier = Modifier
              .padding(bottom = 12.dp)
              // Align Modifier.Element requires a ColumnScope
              .align(Alignment.CenterHorizontally)
              .weight(1f)
          Text1(
              modifier = reusableItemModifier,
              // ...
          )
          Text2(
              modifier = reusableItemModifier
              // ...
          )
          // ...
      }ModifierSnippets.kt

      You should only be passing the extracted, scoped modifiers to the same-scoped, direct children. See the section Scope safety in Compose for more reference on why this matters:

      Column(modifier = Modifier.fillMaxWidth()) {
          // Weight modifier is scoped to the Column composable
          val reusableItemModifier = Modifier.weight(1f)

          // Weight will be properly assigned here since this Text is a direct child of Column
          Text1(
              modifier = reusableItemModifier
              // ...
          )

          Box {
              Text2(
                  // Weight won't do anything here since the Text composable is not a direct child of Column
                  modifier = reusableItemModifier
                  // ...
              )
          }
      }ModifierSnippets.kt
  - id: live-compose-guide-modifiers-extracting-and-reusing-unscoped-modifiers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#extracting_and_reusing_unscoped_modifiers
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: e86c8e6304a7710a4027466fae76e962f555916efcee0319dd7906b3905b7837
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifiers can be unscoped or scoped to a specific composable. In the case of unscoped modifiers, you can easily extract them outside of any composables as simple variables:

      val reusableModifier = Modifier
          .fillMaxWidth()
          .background(Color.Red)
          .padding(12.dp)

      @Composable
      fun AuthorField() {
          HeaderText(
              // ...
              modifier = reusableModifier
          )
          SubtitleText(
              // ...
              modifier = reusableModifier
          )
      }ModifierSnippets.kt

      This can be especially beneficial when combined with Lazy layouts. In most cases, you’d want all of your, potentially significant, amount of items to have the exact same modifiers:

      val reusableItemModifier = Modifier
          .padding(bottom = 12.dp)
          .size(216.dp)
          .clip(CircleShape)

      @Composable
      private fun AuthorList(authors: List<Author>) {
          LazyColumn {
              items(authors) {
                  AsyncImage(
                      // ...
                      modifier = reusableItemModifier,
                  )
              }
          }
      }ModifierSnippets.kt
  - id: live-compose-guide-modifiers-further-chaining-of-extracted-modifiers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#further_chaining_of_extracted_modifiers
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: 8636cc38ac43f4874a19f142af3c8b555ee51d42594ace592b0fc5195b24b977
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can further chain or append your extracted modifier chains by calling the .then() function:

      val reusableModifier = Modifier
          .fillMaxWidth()
          .background(Color.Red)
          .padding(12.dp)

      // Append to your reusableModifier
      reusableModifier.clickable { /*...*/ }

      // Append your reusableModifier
      otherModifier.then(reusableModifier)ModifierSnippets.kt

      Just keep in mind that the order of modifiers matters!
  - id: live-compose-guide-modifiers-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#main-content
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: f582a37239512f84337187d2970d3c98be357f34fc7622bf7bf02c436cce49f1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifiers allow you to decorate or augment a composable. Modifiers let you do these sorts of things:

      Change the composable's size, layout, behavior, and appearance

      Add information, like accessibility labels

      Process user input

      Add high-level interactions, like making an element clickable, scrollable, draggable, or zoomable

      Modifiers are standard Kotlin objects. Create a modifier by calling one of the Modifier class functions:

      @Composable
      private fun Greeting(name: String) {
          Column(modifier = Modifier.padding(24.dp)) {
              Text(text = "Hello,")
              Text(text = name)
          }
      }ModifierSnippets.kt

      You can chain these functions together to compose them:

      @Composable
      private fun Greeting(name: String) {
          Column(
              modifier = Modifier
                  .padding(24.dp)
                  .fillMaxWidth()
          ) {
              Text(text = "Hello,")
              Text(text = name)
          }
      }ModifierSnippets.kt

      In the code above, notice different modifier functions used together.

      padding puts space around an element.

      fillMaxWidth makes the composable fill the maximum width given to it from its parent.

      It's a best practice to have all of your composables accept a modifier parameter, and pass that modifier to its first child that emits UI. Doing so makes your code more reusable and makes its behavior more predictable and intuitive. For more information, see the Compose API guidelines, Elements accept and respect a Modifier parameter.
  - id: live-compose-guide-modifiers-matchparentsize-box-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#matchparentsize-box
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: 0412e41b60fd9996fcbc4fd66380376f74fe83075eeff40bd35e307e74c20055
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      As mentioned above, if you want a child layout to be the same size as a parent Box without affecting the Box size, use the matchParentSize modifier.

      Note that matchParentSize is only available within a Box scope, meaning that it only applies to direct children of Box composables.

      In the example below, the child Spacer takes its size from its parent Box, which in turn takes its size from the biggest children, ArtistCard in this case.

      @Composable
      fun MatchParentSizeComposable() {
          Box {
              Spacer(
                  Modifier
                      .matchParentSize()
                      .background(Color.LightGray)
              )
              ArtistCard()
          }
      }ModifierSnippets.kt

      If fillMaxSize were used instead of matchParentSize, the Spacer would take all the available space allowed to the parent, in turn causing the parent to expand and fill all the available space.
  - id: live-compose-guide-modifiers-offset-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#offset
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: d70f112a0d864d8b3cfa71d8beee9ffeba9cd99d6840f3e938f3e5cf7c74cd17
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To position a layout relative to its original position, add the offset modifier and set the offset in the x and y axis. Offsets can be positive as well as non-positive. The difference between padding and offset is that adding an offset to a composable does not change its measurements:

      @Composable
      fun ArtistCard(artist: Artist) {
          Row(/*...*/) {
              Column {
                  Text(artist.name)
                  Text(
                      text = artist.lastSeenOnline,
                      modifier = Modifier.offset(x = 4.dp)
                  )
              }
          }
      }ModifierSnippets.kt

      The offset modifier is applied horizontally according to the layout direction. In a left-to-right context, a positive offset shifts the element to the right, while in a right-to-left context, it shifts the element to the left. If you need to set an offset without considering layout direction, see the absoluteOffset modifier, in which a positive offset value always shifts the element to the right.

      The offset modifier provides two overloads - offset that takes the offsets as parameters and offset that takes in a lambda. For more in depth information on when to use each of these and how to optimize for performance, read through the Compose performance - Defer reads as long as possible section.
  - id: live-compose-guide-modifiers-order-modifier-matters-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#order-modifier-matters
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: 8ac771626f5427b3ba003fb904e0d1bb1d420f26fdc40edc5ebba54ec54319a4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The order of modifier functions is significant. Since each function makes changes to the Modifierreturned by the previous function, the sequence affects the final result. Let's see an example of this:

      @Composable
      fun ArtistCard(/*...*/) {
          val padding = 16.dp
          Column(
              Modifier
                  .clickable(onClick = onClick)
                  .padding(padding)
                  .fillMaxWidth()
          ) {
              // rest of the implementation
          }
      }ModifierSnippets.kt

      In the code above the whole area is clickable, including the surrounding padding, because the padding modifier has been applied after the clickable modifier. If the modifiers order is reversed, the space added by padding does not react to user input:

      @Composable
      fun ArtistCard(/*...*/) {
          val padding = 16.dp
          Column(
              Modifier
                  .padding(padding)
                  .clickable(onClick = onClick)
                  .fillMaxWidth()
          ) {
              // rest of the implementation
          }
      }ModifierSnippets.kt
  - id: live-compose-guide-modifiers-padding-and-size-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#padding-and-size
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: 137f86c3b075ca4d04fb6500f1a2d7ab6ca97eaee95835c8b9a5143a08c21256
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      By default, layouts provided in Compose wrap their children. However, you can set a size by using the size modifier:

      @Composable
      fun ArtistCard(/*...*/) {
          Row(
              modifier = Modifier.size(width = 400.dp, height = 100.dp)
          ) {
              Image(/*...*/)
              Column { /*...*/ }
          }
      }ModifierSnippets.kt

      Note that the size you specified might not be respected if it does not satisfy the constraints coming from the layout's parent. If you require the composable size to be fixed regardless of the incoming constraints, use the requiredSize modifier:

      @Composable
      fun ArtistCard(/*...*/) {
          Row(
              modifier = Modifier.size(width = 400.dp, height = 100.dp)
          ) {
              Image(
                  /*...*/
                  modifier = Modifier.requiredSize(150.dp)
              )
              Column { /*...*/ }
          }
      }ModifierSnippets.kt

      In this example, even with the parent height set to 100.dp, the height of the Image will be 150.dp, as the requiredSize modifier takes precedence.

      If you want a child layout to fill all the available height allowed by the parent, add the fillMaxHeight modifier (Compose also provides fillMaxSize and fillMaxWidth):

      @Composable
      fun ArtistCard(/*...*/) {
          Row(
              modifier = Modifier.size(width = 400.dp, height = 100.dp)
          ) {
              Image(
                  /*...*/
                  modifier = Modifier.fillMaxHeight()
              )
              Column { /*...*/ }
          }
      }ModifierSnippets.kt

      To add padding all around an element, set a padding modifier. The start and end parameters of padding follow the layout direction. To pad the left or right edge regardless of layout direction, use absolutePadding with its left and right parameters.

      If you want to add padding above a text baseline such that you achieve a specific distance from the top of the layout to the baseline, use the paddingFromBaseline modifier:

      @Composable
      fun ArtistCard(artist: Artist) {
          Row(/*...*/) {
              Column {
                  Text(
                      text = artist.name,
                      modifier = Modifier.paddingFromBaseline(top = 50.dp)
                  )
                  Text(artist.lastSeenOnline)
              }
          }
      }ModifierSnippets.kt
  - id: live-compose-guide-modifiers-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#recommended_for_you
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: 472658b764324157d1098c07dd6cb954bd4a805458cf71a7bd99858353fbedc8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Compose layout basics

      Editor actions {:#editor-actions}

      Custom layouts {:#custom-layouts }
  - id: live-compose-guide-modifiers-reusing-modifiers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#reusing-modifiers
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: 512428b0086bd44fbd4ee164237cc2282b6ac0f4269705269f3cd86b682b1360
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Multiple modifiers can be chained together to decorate or augment a composable. This chain is created via the Modifier interface which represents an ordered, immutable list of single Modifier.Elements.

      Each Modifier.Element represents an individual behavior, like layout, drawing and graphics behaviors, all gesture-related, focus and semantics behaviors, as well as device input events. Their ordering matters: modifier elements that are added first will be applied first.

      Sometimes it can be beneficial to reuse the same modifier chain instances in multiple composables, by extracting them into variables and hoisting them into higher scopes. It can improve code readability or help improve your app's performance for a few reasons:

      The re-allocation of the modifiers won’t be repeated when recomposition occurs for composables that use them

      Modifier chains could potentially be very long and complex, so reusing the same instance of a chain can alleviate the workload Compose runtime needs to do when comparing them

      This extraction promotes code cleanliness, consistency and maintainability across the codebase
  - id: live-compose-guide-modifiers-scope-safety-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#scope-safety
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: b5886d9020d2dd7f60d737bff909fd88a8954289064c4d87d9144a8892ebfb75
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In Compose, there are modifiers that can only be used when applied to children of certain composables. Compose enforces this by means of custom scopes.

      For example, if you want to make a child as big as the parent Box without affecting the Box size, use the matchParentSize modifier. matchParentSize is only available in BoxScope. Therefore, it can only be used on a child within a Box parent.

      Scope safety prevents you from adding modifiers that wouldn't work in other composables and scopes and saves time from trial and error.

      Scoped modifiers notify the parent about some information the parent should know about the child. These are also commonly referred to as parent data modifiers. Their internals are different from the general purpose modifiers, but from a usage perspective, these differences don't matter.
  - id: live-compose-guide-modifiers-weight-in-row-and-column-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/modifiers#weight-in-row-and-column
    revision: web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7
    sha256: acf1bf7faf3c1ebe2e480ce60205ce208768f13fb4c9bcda4c2e6eb65595b54e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      As you have seen in the previous section on Padding and size, by default, a composable size is defined by the content it is wrapping. You can set a composable size to be flexible within its parent using the weight Modifier that is only available in RowScope, and ColumnScope.

      Let’s take a Row that contains two Box composables. The first box is given twice the weight of the second, so it's given twice the width. Since the Row is 210.dp wide, the first Box is 140.dp wide, and the second is 70.dp:

      @Composable
      fun ArtistCard(/*...*/) {
          Row(
              modifier = Modifier.fillMaxWidth()
          ) {
              Image(
                  /*...*/
                  modifier = Modifier.weight(2f)
              )
              Column(
                  modifier = Modifier.weight(1f)
              ) {
                  /*...*/
              }
          }
      }ModifierSnippets.kt
compose:
  id: live-compose-guide-modifiers
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui
  sections:
    - id: live-compose-guide-modifiers-additional-resources
      title: Learn more
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-modifiers-best-practices-for-reusing-modifiers
      title: Best practices for reusing modifiers
      aliases:
        - androidx.compose.ui.Modifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-best-practices-for-reusing-modifiers-source
      relatedIds: []
    - id: live-compose-guide-modifiers-built-in-modifiers
      title: Built-in modifiers
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-built-in-modifiers-source
      relatedIds: []
    - id: live-compose-guide-modifiers-extracting-and-reusing-modifiers-when-observing-frequently-changing-state
      title: Extracting and reusing modifiers when observing frequently changing state
      aliases:
        - androidx.compose.ui.Modifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-extracting-and-reusing-modifiers-when-observing-frequently-changing-state-source
      relatedIds: []
    - id: live-compose-guide-modifiers-extracting-and-reusing-scoped-modifiers
      title: Extracting and reusing scoped modifiers
      aliases:
        - androidx.compose.ui.Modifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-extracting-and-reusing-scoped-modifiers-source
      relatedIds: []
    - id: live-compose-guide-modifiers-extracting-and-reusing-unscoped-modifiers
      title: Extracting and reusing unscoped modifiers
      aliases:
        - androidx.compose.ui.Modifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-extracting-and-reusing-unscoped-modifiers-source
      relatedIds: []
    - id: live-compose-guide-modifiers-further-chaining-of-extracted-modifiers
      title: Further chaining of extracted modifiers
      aliases:
        - androidx.compose.ui.Modifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-further-chaining-of-extracted-modifiers-source
      relatedIds: []
    - id: live-compose-guide-modifiers-main-content
      title: Introduction
      aliases:
        - androidx.compose.ui.Modifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-main-content-source
      relatedIds: []
    - id: live-compose-guide-modifiers-matchparentsize-box
      title: matchParentSize in Box
      aliases:
        - androidx.compose.ui.Modifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-matchparentsize-box-source
      relatedIds: []
    - id: live-compose-guide-modifiers-offset
      title: Offset
      aliases:
        - androidx.compose.ui.Modifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-offset-source
      relatedIds: []
    - id: live-compose-guide-modifiers-order-modifier-matters
      title: Order of modifiers matters
      aliases:
        - androidx.compose.ui.Modifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-order-modifier-matters-source
      relatedIds: []
    - id: live-compose-guide-modifiers-padding-and-size
      title: padding and size
      aliases:
        - androidx.compose.ui.Modifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-padding-and-size-source
      relatedIds: []
    - id: live-compose-guide-modifiers-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-modifiers-reusing-modifiers
      title: Extracting and reusing modifiers
      aliases:
        - androidx.compose.ui.Modifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-reusing-modifiers-source
      relatedIds: []
    - id: live-compose-guide-modifiers-scope-safety
      title: Scope safety in Compose
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-scope-safety-source
      relatedIds: []
    - id: live-compose-guide-modifiers-weight-in-row-and-column
      title: weight in Row and Column
      aliases:
        - androidx.compose.ui.Modifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-modifiers-weight-in-row-and-column-source
      relatedIds: []
---

# Compose modifiers

Public source: https://developer.android.com/develop/ui/compose/modifiers

## Learn more

We provide a full list of modifiers, with their parameters and scopes.

For more practice on how to use modifiers, you can also go through the Basic layouts in Compose codelab or refer to the Now in Android repository.

For more information on custom modifiers and how to create them, take a look at the documentation on Custom layouts - Using the layout modifier.

Sources: [live-compose-guide-modifiers-additional-resources-source](https://developer.android.com/develop/ui/compose/modifiers#additional-resources)

## Best practices for reusing modifiers

Create your own Modifier chains and extract them to reuse them on multiple composable components. It is completely fine to just save a modifier, as they are data-like objects:

val reusableModifier = Modifier
    .fillMaxWidth()
    .background(Color.Red)
    .padding(12.dp)ModifierSnippets.kt

Sources: [live-compose-guide-modifiers-best-practices-for-reusing-modifiers-source](https://developer.android.com/develop/ui/compose/modifiers#best_practices_for_reusing_modifiers)

## Built-in modifiers

Jetpack Compose provides a list of built-in modifiers to help you decorate or augment a composable. Here are some common modifiers you'll use to adjust your layouts.

Sources: [live-compose-guide-modifiers-built-in-modifiers-source](https://developer.android.com/develop/ui/compose/modifiers#built-in-modifiers)

## Extracting and reusing modifiers when observing frequently changing state

When observing frequently changing states inside composables, like animation states or scrollState, there can be a significant amount of recompositions done. In this case, your modifiers will get allocated on every recomposition and potentially for every frame:

@Composable
fun LoadingWheelAnimation() {
    val animatedState = animateFloatAsState(/*...*/)

    LoadingWheel(
        // Creation and allocation of this modifier will happen on every frame of the animation!
        modifier = Modifier
            .padding(12.dp)
            .background(Color.Gray),
        animatedState = animatedState
    )
}ModifierSnippets.kt

Instead, you can create, extract and reuse the same instance of the modifier and pass it to the composable like this:

// Now, the allocation of the modifier happens here:
val reusableModifier = Modifier
    .padding(12.dp)
    .background(Color.Gray)

@Composable
fun LoadingWheelAnimation() {
    val animatedState = animateFloatAsState(/*...*/)

    LoadingWheel(
        // No allocation, as we're just reusing the same instance
        modifier = reusableModifier,
        animatedState = animatedState
    )
}ModifierSnippets.kt

Sources: [live-compose-guide-modifiers-extracting-and-reusing-modifiers-when-observing-frequently-changing-state-source](https://developer.android.com/develop/ui/compose/modifiers#extracting_and_reusing_modifiers_when_observing_frequently_changing_state)

## Extracting and reusing scoped modifiers

When dealing with modifiers that are scoped to certain composables, you can extract them to the highest possible level and reuse where appropriate:

Column(/*...*/) {
    val reusableItemModifier = Modifier
        .padding(bottom = 12.dp)
        // Align Modifier.Element requires a ColumnScope
        .align(Alignment.CenterHorizontally)
        .weight(1f)
    Text1(
        modifier = reusableItemModifier,
        // ...
    )
    Text2(
        modifier = reusableItemModifier
        // ...
    )
    // ...
}ModifierSnippets.kt

You should only be passing the extracted, scoped modifiers to the same-scoped, direct children. See the section Scope safety in Compose for more reference on why this matters:

Column(modifier = Modifier.fillMaxWidth()) {
    // Weight modifier is scoped to the Column composable
    val reusableItemModifier = Modifier.weight(1f)

    // Weight will be properly assigned here since this Text is a direct child of Column
    Text1(
        modifier = reusableItemModifier
        // ...
    )

    Box {
        Text2(
            // Weight won't do anything here since the Text composable is not a direct child of Column
            modifier = reusableItemModifier
            // ...
        )
    }
}ModifierSnippets.kt

Sources: [live-compose-guide-modifiers-extracting-and-reusing-scoped-modifiers-source](https://developer.android.com/develop/ui/compose/modifiers#extracting_and_reusing_scoped_modifiers)

## Extracting and reusing unscoped modifiers

Modifiers can be unscoped or scoped to a specific composable. In the case of unscoped modifiers, you can easily extract them outside of any composables as simple variables:

val reusableModifier = Modifier
    .fillMaxWidth()
    .background(Color.Red)
    .padding(12.dp)

@Composable
fun AuthorField() {
    HeaderText(
        // ...
        modifier = reusableModifier
    )
    SubtitleText(
        // ...
        modifier = reusableModifier
    )
}ModifierSnippets.kt

This can be especially beneficial when combined with Lazy layouts. In most cases, you’d want all of your, potentially significant, amount of items to have the exact same modifiers:

val reusableItemModifier = Modifier
    .padding(bottom = 12.dp)
    .size(216.dp)
    .clip(CircleShape)

@Composable
private fun AuthorList(authors: List<Author>) {
    LazyColumn {
        items(authors) {
            AsyncImage(
                // ...
                modifier = reusableItemModifier,
            )
        }
    }
}ModifierSnippets.kt

Sources: [live-compose-guide-modifiers-extracting-and-reusing-unscoped-modifiers-source](https://developer.android.com/develop/ui/compose/modifiers#extracting_and_reusing_unscoped_modifiers)

## Further chaining of extracted modifiers

You can further chain or append your extracted modifier chains by calling the .then() function:

val reusableModifier = Modifier
    .fillMaxWidth()
    .background(Color.Red)
    .padding(12.dp)

// Append to your reusableModifier
reusableModifier.clickable { /*...*/ }

// Append your reusableModifier
otherModifier.then(reusableModifier)ModifierSnippets.kt

Just keep in mind that the order of modifiers matters!

Sources: [live-compose-guide-modifiers-further-chaining-of-extracted-modifiers-source](https://developer.android.com/develop/ui/compose/modifiers#further_chaining_of_extracted_modifiers)

## Introduction

Modifiers allow you to decorate or augment a composable. Modifiers let you do these sorts of things:

Change the composable's size, layout, behavior, and appearance

Add information, like accessibility labels

Process user input

Add high-level interactions, like making an element clickable, scrollable, draggable, or zoomable

Modifiers are standard Kotlin objects. Create a modifier by calling one of the Modifier class functions:

@Composable
private fun Greeting(name: String) {
    Column(modifier = Modifier.padding(24.dp)) {
        Text(text = "Hello,")
        Text(text = name)
    }
}ModifierSnippets.kt

You can chain these functions together to compose them:

@Composable
private fun Greeting(name: String) {
    Column(
        modifier = Modifier
            .padding(24.dp)
            .fillMaxWidth()
    ) {
        Text(text = "Hello,")
        Text(text = name)
    }
}ModifierSnippets.kt

In the code above, notice different modifier functions used together.

padding puts space around an element.

fillMaxWidth makes the composable fill the maximum width given to it from its parent.

It's a best practice to have all of your composables accept a modifier parameter, and pass that modifier to its first child that emits UI. Doing so makes your code more reusable and makes its behavior more predictable and intuitive. For more information, see the Compose API guidelines, Elements accept and respect a Modifier parameter.

Sources: [live-compose-guide-modifiers-main-content-source](https://developer.android.com/develop/ui/compose/modifiers#main-content)

## matchParentSize in Box

As mentioned above, if you want a child layout to be the same size as a parent Box without affecting the Box size, use the matchParentSize modifier.

Note that matchParentSize is only available within a Box scope, meaning that it only applies to direct children of Box composables.

In the example below, the child Spacer takes its size from its parent Box, which in turn takes its size from the biggest children, ArtistCard in this case.

@Composable
fun MatchParentSizeComposable() {
    Box {
        Spacer(
            Modifier
                .matchParentSize()
                .background(Color.LightGray)
        )
        ArtistCard()
    }
}ModifierSnippets.kt

If fillMaxSize were used instead of matchParentSize, the Spacer would take all the available space allowed to the parent, in turn causing the parent to expand and fill all the available space.

Sources: [live-compose-guide-modifiers-matchparentsize-box-source](https://developer.android.com/develop/ui/compose/modifiers#matchparentsize-box)

## Offset

To position a layout relative to its original position, add the offset modifier and set the offset in the x and y axis. Offsets can be positive as well as non-positive. The difference between padding and offset is that adding an offset to a composable does not change its measurements:

@Composable
fun ArtistCard(artist: Artist) {
    Row(/*...*/) {
        Column {
            Text(artist.name)
            Text(
                text = artist.lastSeenOnline,
                modifier = Modifier.offset(x = 4.dp)
            )
        }
    }
}ModifierSnippets.kt

The offset modifier is applied horizontally according to the layout direction. In a left-to-right context, a positive offset shifts the element to the right, while in a right-to-left context, it shifts the element to the left. If you need to set an offset without considering layout direction, see the absoluteOffset modifier, in which a positive offset value always shifts the element to the right.

The offset modifier provides two overloads - offset that takes the offsets as parameters and offset that takes in a lambda. For more in depth information on when to use each of these and how to optimize for performance, read through the Compose performance - Defer reads as long as possible section.

Sources: [live-compose-guide-modifiers-offset-source](https://developer.android.com/develop/ui/compose/modifiers#offset)

## Order of modifiers matters

The order of modifier functions is significant. Since each function makes changes to the Modifierreturned by the previous function, the sequence affects the final result. Let's see an example of this:

@Composable
fun ArtistCard(/*...*/) {
    val padding = 16.dp
    Column(
        Modifier
            .clickable(onClick = onClick)
            .padding(padding)
            .fillMaxWidth()
    ) {
        // rest of the implementation
    }
}ModifierSnippets.kt

In the code above the whole area is clickable, including the surrounding padding, because the padding modifier has been applied after the clickable modifier. If the modifiers order is reversed, the space added by padding does not react to user input:

@Composable
fun ArtistCard(/*...*/) {
    val padding = 16.dp
    Column(
        Modifier
            .padding(padding)
            .clickable(onClick = onClick)
            .fillMaxWidth()
    ) {
        // rest of the implementation
    }
}ModifierSnippets.kt

Sources: [live-compose-guide-modifiers-order-modifier-matters-source](https://developer.android.com/develop/ui/compose/modifiers#order-modifier-matters)

## padding and size

By default, layouts provided in Compose wrap their children. However, you can set a size by using the size modifier:

@Composable
fun ArtistCard(/*...*/) {
    Row(
        modifier = Modifier.size(width = 400.dp, height = 100.dp)
    ) {
        Image(/*...*/)
        Column { /*...*/ }
    }
}ModifierSnippets.kt

Note that the size you specified might not be respected if it does not satisfy the constraints coming from the layout's parent. If you require the composable size to be fixed regardless of the incoming constraints, use the requiredSize modifier:

@Composable
fun ArtistCard(/*...*/) {
    Row(
        modifier = Modifier.size(width = 400.dp, height = 100.dp)
    ) {
        Image(
            /*...*/
            modifier = Modifier.requiredSize(150.dp)
        )
        Column { /*...*/ }
    }
}ModifierSnippets.kt

In this example, even with the parent height set to 100.dp, the height of the Image will be 150.dp, as the requiredSize modifier takes precedence.

If you want a child layout to fill all the available height allowed by the parent, add the fillMaxHeight modifier (Compose also provides fillMaxSize and fillMaxWidth):

@Composable
fun ArtistCard(/*...*/) {
    Row(
        modifier = Modifier.size(width = 400.dp, height = 100.dp)
    ) {
        Image(
            /*...*/
            modifier = Modifier.fillMaxHeight()
        )
        Column { /*...*/ }
    }
}ModifierSnippets.kt

To add padding all around an element, set a padding modifier. The start and end parameters of padding follow the layout direction. To pad the left or right edge regardless of layout direction, use absolutePadding with its left and right parameters.

If you want to add padding above a text baseline such that you achieve a specific distance from the top of the layout to the baseline, use the paddingFromBaseline modifier:

@Composable
fun ArtistCard(artist: Artist) {
    Row(/*...*/) {
        Column {
            Text(
                text = artist.name,
                modifier = Modifier.paddingFromBaseline(top = 50.dp)
            )
            Text(artist.lastSeenOnline)
        }
    }
}ModifierSnippets.kt

Sources: [live-compose-guide-modifiers-padding-and-size-source](https://developer.android.com/develop/ui/compose/modifiers#padding-and-size)

## Recommended for you

Note: link text is displayed when JavaScript is off

Compose layout basics

Editor actions {:#editor-actions}

Custom layouts {:#custom-layouts }

Sources: [live-compose-guide-modifiers-recommended-for-you-source](https://developer.android.com/develop/ui/compose/modifiers#recommended_for_you)

## Extracting and reusing modifiers

Multiple modifiers can be chained together to decorate or augment a composable. This chain is created via the Modifier interface which represents an ordered, immutable list of single Modifier.Elements.

Each Modifier.Element represents an individual behavior, like layout, drawing and graphics behaviors, all gesture-related, focus and semantics behaviors, as well as device input events. Their ordering matters: modifier elements that are added first will be applied first.

Sometimes it can be beneficial to reuse the same modifier chain instances in multiple composables, by extracting them into variables and hoisting them into higher scopes. It can improve code readability or help improve your app's performance for a few reasons:

The re-allocation of the modifiers won’t be repeated when recomposition occurs for composables that use them

Modifier chains could potentially be very long and complex, so reusing the same instance of a chain can alleviate the workload Compose runtime needs to do when comparing them

This extraction promotes code cleanliness, consistency and maintainability across the codebase

Sources: [live-compose-guide-modifiers-reusing-modifiers-source](https://developer.android.com/develop/ui/compose/modifiers#reusing-modifiers)

## Scope safety in Compose

In Compose, there are modifiers that can only be used when applied to children of certain composables. Compose enforces this by means of custom scopes.

For example, if you want to make a child as big as the parent Box without affecting the Box size, use the matchParentSize modifier. matchParentSize is only available in BoxScope. Therefore, it can only be used on a child within a Box parent.

Scope safety prevents you from adding modifiers that wouldn't work in other composables and scopes and saves time from trial and error.

Scoped modifiers notify the parent about some information the parent should know about the child. These are also commonly referred to as parent data modifiers. Their internals are different from the general purpose modifiers, but from a usage perspective, these differences don't matter.

Sources: [live-compose-guide-modifiers-scope-safety-source](https://developer.android.com/develop/ui/compose/modifiers#scope-safety)

## weight in Row and Column

As you have seen in the previous section on Padding and size, by default, a composable size is defined by the content it is wrapping. You can set a composable size to be flexible within its parent using the weight Modifier that is only available in RowScope, and ColumnScope.

Let’s take a Row that contains two Box composables. The first box is given twice the weight of the second, so it's given twice the width. Since the Row is 210.dp wide, the first Box is 140.dp wide, and the second is 70.dp:

@Composable
fun ArtistCard(/*...*/) {
    Row(
        modifier = Modifier.fillMaxWidth()
    ) {
        Image(
            /*...*/
            modifier = Modifier.weight(2f)
        )
        Column(
            modifier = Modifier.weight(1f)
        ) {
            /*...*/
        }
    }
}ModifierSnippets.kt

Sources: [live-compose-guide-modifiers-weight-in-row-and-column-source](https://developer.android.com/develop/ui/compose/modifiers#weight-in-row-and-column)
