---
type: reference
title: Shared element transitions in Compose
description: "Public source: https://developer.android.com/develop/ui/compose/animation/shared-elements"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-animation-shared-elements-animated-visibility-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#animated-visibility
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: 3cdccd8fd0035f414b9a63d42ef3074f6a5089aff73bb53e92bab27082ef10ea
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      with

      AnimatedVisibility

      .
  - id: live-compose-guide-animation-shared-elements-animated-visibility-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#animated-visibility
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: 25e238c07317cceca8b7e7d48ebab3cff624475e1c5e835eaad6151f75c53078
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Previous examples showed how to use shared elements with AnimatedContent, but shared elements work with AnimatedVisibility too.

      For example, in this LazyColumn example, each element is wrapped in AnimatedVisibility. When the item is clicked on, the content has the visual effect of being pulled out of the UI into a dialog-like component.

      var selectedSnack by remember { mutableStateOf<Snack?>(null) }

      SharedTransitionLayout(modifier = Modifier.fillMaxSize()) {
          LazyColumn(
              // ...
          ) {
              items(listSnacks) { snack ->
                  AnimatedVisibility(
                      visible = snack != selectedSnack,
                      enter = fadeIn() + scaleIn(),
                      exit = fadeOut() + scaleOut(),
                      modifier = Modifier.animateItem()
                  ) {
                      Box(
                          modifier = Modifier
                              .sharedBounds(
                                  sharedContentState = rememberSharedContentState(key = "${snack.name}-bounds"),
                                  // Using the scope provided by AnimatedVisibility
                                  animatedVisibilityScope = this,
                                  clipInOverlayDuringTransition = OverlayClip(shapeForSharedElement)
                              )
                              .background(Color.White, shapeForSharedElement)
                              .clip(shapeForSharedElement)
                      ) {
                          SnackContents(
                              snack = snack,
                              modifier = Modifier.sharedElement(
                                  sharedContentState = rememberSharedContentState(key = snack.name),
                                  animatedVisibilityScope = this@AnimatedVisibility
                              ),
                              onClick = {
                                  selectedSnack = snack
                              }
                          )
                      }
                  }
              }
          }
          // Contains matching AnimatedContent with sharedBounds modifiers.
          SnackEditDetails(
              snack = selectedSnack,
              onConfirmClick = {
                  selectedSnack = null
              }
          )
      }AnimatedVisibilitySharedElementSnippets.kt

      Figure 6.

      Shared elements
  - id: live-compose-guide-animation-shared-elements-basic-usage-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#basic-usage
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: c176481440eed5c9126df855df2d83130faa91c3d7352349dfa833195a40c7d7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      contentDescription = "Cupcake", modifier = Modifier .sharedElement( rememberSharedContentState(key = "image"), animatedVisibilityScope = animatedVisibilityScope ) .size(100.dp) .clip(CircleShape), contentScale = ContentScale.Crop ) // ... } } } @Composable private fun DetailsContent( modifier: Modifier = Modifier, onBack: () -> Unit, sharedTransitionScope: SharedTransitionScope, animatedVisibilityScope: AnimatedVisibilityScope ) { Column( // ... ) { with(sharedTransitionScope) { Image( painter = painterResource(id = R.drawable.cupcake), contentDescription = "Cupcake", modifier = Modifier .sharedElement( rememberSharedContentState(key = "image"), animatedVisibilityScope = animatedVisibilityScope ) .size(200.dp) .clip(CircleShape), contentScale = ContentScale.Crop ) // ... } } }BasicSharedElementSnippets.kt

      To get information on if a shared element match has occurred, extract rememberSharedContentState() into a variable, and query isMatchFound.

      This results in the following automatic animation:

      Figure 4.

      Basic example of a shared element transition between two composables.

      You may notice that the background color and size of the whole container still uses the default AnimatedContent settings.
  - id: live-compose-guide-animation-shared-elements-basic-usage-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#basic-usage
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: 3c5038c01a19737cb14f2566e9f63a05e2e15a50efe3fcd12fa2ef011bc10492
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following transition will be built in this section, transitioning from the smaller "list" item, to the larger detailed item:

      Figure 2.

      Basic example of a shared element transition between two composables.

      The best way to use Modifier.sharedElement() is in conjunction with AnimatedContent, AnimatedVisibility, or NavHost, as this manages the transition between composables automatically for you.

      The starting point is an existing basic AnimatedContent that has a MainContent, and DetailsContent composable before adding shared elements:

      Figure 3.

      Starting

      AnimatedContent

      without any shared element transitions.

      To make the shared elements animate between the two layouts, surround the AnimatedContent composable with SharedTransitionLayout. The scopes from SharedTransitionLayout and AnimatedContent are passed to the MainContent and DetailsContent: var showDetails by remember { mutableStateOf(false) } SharedTransitionLayout { AnimatedContent( showDetails, label = "basic_transition" ) { targetState -> if (!targetState) { MainContent( onShowDetails = { showDetails = true }, animatedVisibilityScope = this@AnimatedContent, sharedTransitionScope = this@SharedTransitionLayout ) } else { DetailsContent( onBack = { showDetails = false }, animatedVisibilityScope = this@AnimatedContent, sharedTransitionScope = this@SharedTransitionLayout ) } } }BasicSharedElementSnippets.kt

      Add Modifier.sharedElement() to your composable modifier chain on the two composables that match. Create a SharedContentState object and remember it with rememberSharedContentState(). The SharedContentState object is storing the unique key which determines the elements that are shared. Provide a unique key to identify the content, and use rememberSharedContentState() for the item to be remembered. The AnimatedContentScope is passed into the modifier, which is used to coordinate the animation. @Composable private fun MainContent( onShowDetails: () -> Unit, modifier: Modifier = Modifier, sharedTransitionScope: SharedTransitionScope, animatedVisibilityScope: AnimatedVisibilityScope ) { Row( // ... ) { with(sharedTransitionScope) { Image( painter = painterResource(id = R.drawable.cupcake),
  - id: live-compose-guide-animation-shared-elements-current-limitations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#current-limitations
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: bac187d0f58de20b5b5534ebb796c7cf4f58f8611e002d78603b753fc76c735a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      These APIs have a few limitations. Most notably:

      No interoperability between Views and Compose is supported. This includes any composable that wraps AndroidView, such as a Dialog or ModalBottomSheet.

      There is no automatic animation support for the following: Shared Image composables: ContentScale is not animated by default. It snaps to the set end ContentScale. Shape clipping - There is no built-in support for automatic animation between shapes - for example, animating from a square to a circle as the item transitions. For the unsupported cases, use Modifier.sharedBounds() instead of sharedElement() and add Modifier.animateEnterExit() onto the items.
  - id: live-compose-guide-animation-shared-elements-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#main-content
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: 86aaa1272ddb2eb587eb35bc958eb489ce9dabd00d7dd81d960ce48f316a736e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Shared element transitions are a seamless way to transition between composables that have content that is consistent between them. They are often used for navigation, allowing you to visually connect different screens as a user navigates between them.

      For example, in the following video, you can see the image and title of the snack are shared from the listing page, to the detail page.

      Figure 1.

      Jetsnack shared element demo.

      In Compose, there are a few high-level APIs that help you create shared elements:

      SharedTransitionLayout: The outermost layout required to implement shared element transitions. It provides a SharedTransitionScope. Composables need to be in a SharedTransitionScope to use the shared element modifiers.

      Modifier.sharedElement(): The modifier that flags to the SharedTransitionScope the composable that should be matched with another composable.

      Modifier.sharedBounds(): The modifier that flags to the SharedTransitionScope that this composable's bounds should be used as the container bounds for where the transition should take place. In contrast to sharedElement(), sharedBounds() is designed for visually different content.

      An important concept when creating shared elements in Compose is how they work with overlays and clipping. See the clipping and overlays section to learn more about this important topic.
  - id: live-compose-guide-animation-shared-elements-managing-visibility-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#managing-visibility
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: 89c6d84e856c6c93f6906351b6515ab939f9497f440a2a1f7c4b9ce3e8bc4233
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In cases where you may not be using AnimatedVisibility or AnimatedContent, you can manage the shared element visibility yourself. Use Modifier.sharedElementWithCallerManagedVisibility() and provide your own conditional that determines when an item should be visible or not:

      var selectFirst by remember { mutableStateOf(true) }
      val key = remember { Any() }
      SharedTransitionLayout(
          Modifier
              .fillMaxSize()
              .padding(10.dp)
              .clickable {
                  selectFirst = !selectFirst
              }
      ) {
          Box(
              Modifier
                  .sharedElementWithCallerManagedVisibility(
                      rememberSharedContentState(key = key),
                      !selectFirst
                  )
                  .background(Color.Red)
                  .size(100.dp)
          ) {
              Text(if (!selectFirst) "false" else "true", color = Color.White)
          }
          Box(
              Modifier
                  .offset(180.dp, 180.dp)
                  .sharedElementWithCallerManagedVisibility(
                      rememberSharedContentState(
                          key = key,
                      ),
                      selectFirst
                  )
                  .alpha(0.5f)
                  .background(Color.Blue)
                  .size(180.dp)
          ) {
              Text(if (selectFirst) "false" else "true", color = Color.White)
          }
      }BasicSharedElementSnippets.kt
  - id: live-compose-guide-animation-shared-elements-modifier-ordering-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#modifier-ordering
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: fac78947d0f769bcf3d854f425ea80034bd58b231b69a23d8c0431fe9fc13e02
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      constraints to the shared element modifiers, which are then used to derive the initial and target bounds, and subsequently the bounds animation.

      The modifiers used after the shared element modifiers use the constraints from before to measure and calculate the child's target size. The shared element modifiers create a series of animated constraints to gradually transform the child from the initial size to the target size.

      The exception to this is if you use resizeMode = SharedTransitionScope.ResizeMode.scaleToBounds() for the animation, or Modifier.skipToLookaheadSize() on a composable. In this case, Compose lays out the child using the target constraints, and instead uses a scale factor to perform the animation instead of changing the layout size itself.
  - id: live-compose-guide-animation-shared-elements-modifier-ordering-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#modifier-ordering
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: dc577d8434fd6bad790ff10c87b81341cd4e87b811f0daae70728ebd52475632
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      With Modifier.sharedElement() and Modifier.sharedBounds(), the order of your modifier chain matters, as with the rest of Compose. The incorrect placement of size-affecting modifiers can cause unexpected visual jumps during shared element matching.

      For example, if you place a padding modifier in a different position on two shared elements, there is a visual difference in the animation.

      var selectFirst by remember { mutableStateOf(true) }
      val key = remember { Any() }
      SharedTransitionLayout(
          Modifier
              .fillMaxSize()
              .padding(10.dp)
              .clickable {
                  selectFirst = !selectFirst
              }
      ) {
          AnimatedContent(targetState = selectFirst, label = "AnimatedContent") { targetState ->
              if (targetState) {
                  Box(
                      Modifier
                          .padding(12.dp)
                          .sharedBounds(
                              rememberSharedContentState(key = key),
                              animatedVisibilityScope = this@AnimatedContent
                          )
                          .border(2.dp, Color.Red)
                  ) {
                      Text(
                          "Hello",
                          fontSize = 20.sp
                      )
                  }
              } else {
                  Box(
                      Modifier
                          .offset(180.dp, 180.dp)
                          .sharedBounds(
                              rememberSharedContentState(
                                  key = key,
                              ),
                              animatedVisibilityScope = this@AnimatedContent
                          )
                          .border(2.dp, Color.Red)
                          // This padding is placed after sharedBounds, but it doesn't match the
                          // other shared elements modifier order, resulting in visual jumps
                          .padding(12.dp)

                  ) {
                      Text(
                          "Hello",
                          fontSize = 36.sp
                      )
                  }
              }
          }
      }BasicSharedElementSnippets.kt

      Matched bounds Unmatched bounds: Notice how the shared element animation appears a bit off as it needs to resize to the incorrect bounds

      The modifiers used before the shared element modifiers provide
  - id: live-compose-guide-animation-shared-elements-shared-bounds-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#shared-bounds
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: d3497a32164783f6bb2e5071523de242f2daf41e46dcc8550d51840b636a6125
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifier
                      .padding(top = 200.dp, start = 16.dp, end = 16.dp)
                      .sharedBounds(
                          rememberSharedContentState(key = "bounds"),
                          animatedVisibilityScope = animatedVisibilityScope,
                          enter = fadeIn(),
                          exit = fadeOut(),
                          resizeMode = SharedTransitionScope.ResizeMode.scaleToBounds()
                      )
                      // ...

              ) {
                  // ...
              }
          }
      }SharedBoundsSnippets.kt

      Figure 5.

      Shared bounds between two composables.
  - id: live-compose-guide-animation-shared-elements-shared-bounds-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#shared-bounds
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: a3c64021fd053e3b7bd6ed7242736c611556253345fe46c8768f0b178af14d86
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifier.sharedBounds() is similar to Modifier.sharedElement(). However, the modifiers are different in the following ways:

      sharedBounds() is for content that is visually different but should share the same area between states, whereas sharedElement() expects the content to be the same.

      With sharedBounds(), the content entering and exiting the screen is visible during the transition between the two states, whereas with sharedElement() only the target content is rendered in the transforming bounds. Modifier.sharedBounds() has enter and exit parameters for specifying how the content should transition, similar to how AnimatedContent works.

      The most common use case for sharedBounds() is the container transform pattern, whereas for sharedElement() the example use case is a hero transition.

      When using Text composables, sharedBounds() is preferred to support font changes such as transitioning between italic and bold or color changes.

      From the previous example, adding Modifier.sharedBounds() onto the Row and Column in the two different scenarios will allow us to share the bounds of the two and perform the transition animation, allowing them to grow between each other:

      @Composable
      private fun MainContent(
          onShowDetails: () -> Unit,
          modifier: Modifier = Modifier,
          sharedTransitionScope: SharedTransitionScope,
          animatedVisibilityScope: AnimatedVisibilityScope
      ) {
          with(sharedTransitionScope) {
              Row(
                  modifier = Modifier
                      .padding(8.dp)
                      .sharedBounds(
                          rememberSharedContentState(key = "bounds"),
                          animatedVisibilityScope = animatedVisibilityScope,
                          enter = fadeIn(),
                          exit = fadeOut(),
                          resizeMode = SharedTransitionScope.ResizeMode.scaleToBounds()
                      )
                      // ...
              ) {
                  // ...
              }
          }
      }

      @Composable
      private fun DetailsContent(
          modifier: Modifier = Modifier,
          onBack: () -> Unit,
          sharedTransitionScope: SharedTransitionScope,
          animatedVisibilityScope: AnimatedVisibilityScope
      ) {
          with(sharedTransitionScope) {
              Column(
                  modifier =
  - id: live-compose-guide-animation-shared-elements-understand-scopes-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#understand-scopes
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: 1d831067163ebbad65be85889bf3b01bcd6c1cdcec3dc65378582ce5c33818e2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      val animatedVisibilityScope = LocalNavAnimatedVisibilityScope.current
                              ?: throw IllegalStateException("No AnimatedVisibility found")
                      }
                      // ...
                  }
              }
          }
      }BasicSharedElementSnippets.kt

      Alternatively, if your hierarchy isn't deeply nested you can pass the scopes down as parameters:

      @Composable
      fun MainContent(
          animatedVisibilityScope: AnimatedVisibilityScope,
          sharedTransitionScope: SharedTransitionScope
      ) {
      }

      @Composable
      fun Details(
          animatedVisibilityScope: AnimatedVisibilityScope,
          sharedTransitionScope: SharedTransitionScope
      ) {
      }BasicSharedElementSnippets.kt
  - id: live-compose-guide-animation-shared-elements-understand-scopes-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#understand-scopes
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: f9d3cd2e88cf26b1b6ffbc53a3e1da0efc53c5b0cbfcfda936a47b7463dc43ab
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To use Modifier.sharedElement(), the composable needs to be in a SharedTransitionScope. The SharedTransitionLayout composable provides the SharedTransitionScope. Make sure to place it at the same top-level point in your UI hierarchy that contains the elements you want to share.

      Generally, the composables should also be placed inside an AnimatedVisibilityScope. This is typically provided by using AnimatedContent to switch between composables or when using AnimatedVisibility directly, or by the NavHost composable function, unless you manage the visibility manually. In order to use multiple scopes, save your required scopes in a CompositionLocal, use context parameters in Kotlin, or pass the scopes as parameters to your functions.

      Use CompositionLocals in the scenario where you have multiple scopes to keep track of, or a deeply nested hierarchy. A CompositionLocal lets you choose the exact scopes to save and use. On the other hand, when you use context parameters, other layouts in your hierarchy might accidentally override the provided scopes. For example, if you have multiple nested AnimatedContent, the scopes could be overridden.

      val LocalNavAnimatedVisibilityScope = compositionLocalOf<AnimatedVisibilityScope?> { null }
      val LocalSharedTransitionScope = compositionLocalOf<SharedTransitionScope?> { null }

      @Composable
      private fun SharedElementScope_CompositionLocal() {
          // An example of how to use composition locals to pass around the shared transition scope, far down your UI tree.
          // ...
          SharedTransitionLayout {
              CompositionLocalProvider(
                  LocalSharedTransitionScope provides this
              ) {
                  // This could also be your top-level NavHost as this provides an AnimatedContentScope
                  AnimatedContent(state, label = "Top level AnimatedContent") { targetState ->
                      CompositionLocalProvider(LocalNavAnimatedVisibilityScope provides this) {
                          // Now we can access the scopes in any nested composables as follows:
                          val sharedTransitionScope = LocalSharedTransitionScope.current
                              ?: throw IllegalStateException("No SharedElementScope found")
  - id: live-compose-guide-animation-shared-elements-unique-keys-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/shared-elements#unique-keys
    revision: web:compose-guide-animation-shared-elements:content@sha256:06b1d217693e5cbea55c09b31e4ecf1db470ae64ad4cb10a0dbb7d28fd13ca25
    sha256: b5b4bf7ffd48542aa07753562555e11c15468272d3d1773b6eab6b329567ebd1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When working with complex shared elements, it is a good practice to create a key that is not a string, because strings can be error prone to match. Each key must be unique for matches to occur. For example, in Jetsnack we have the following shared elements:

      Figure 7.

      Image showing Jetsnack with annotations for each part of the UI.

      You could create an enum to represent the shared element type. In this example the whole snack card can also appear from multiple different places on the home screen, for example in a "Popular" and a "Recommended" section. You can create a key that has the snackId, the origin ("Popular" / "Recommended"), and the type of the shared element that will be shared:

      data class SnackSharedElementKey(
          val snackId: Long,
          val origin: String,
          val type: SnackSharedElementType
      )

      enum class SnackSharedElementType {
          Bounds,
          Image,
          Title,
          Tagline,
          Background
      }

      @Composable
      fun SharedElementUniqueKey() {
          // ...
                  Box(
                      modifier = Modifier
                          .sharedElement(
                              rememberSharedContentState(
                                  key = SnackSharedElementKey(
                                      snackId = 1,
                                      origin = "latest",
                                      type = SnackSharedElementType.Image
                                  )
                              ),
                              animatedVisibilityScope = this@AnimatedVisibility
                          )
                  )
                  // ...
      }BasicSharedElementSnippets.kt

      Data classes are recommended for keys since they implement hashCode() and equals().
compose:
  id: live-compose-guide-animation-shared-elements
  artifact: androidx.compose.animation:animation
  fqn: androidx.compose.animation
  sections:
    - id: live-compose-guide-animation-shared-elements-animated-visibility
      title: Shared elements with AnimatedVisibility
      aliases:
        - androidx.compose.animation.SharedTransitionLayout
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-animated-visibility-source
      relatedIds: []
    - id: live-compose-guide-animation-shared-elements-animated-visibility-2
      title: Shared elements with AnimatedVisibility
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-animated-visibility-2-source
      relatedIds: []
    - id: live-compose-guide-animation-shared-elements-basic-usage
      title: Basic usage
      aliases:
        - androidx.compose.animation.SharedTransitionLayout
        - androidx.compose.animation.SharedTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-basic-usage-source
      relatedIds: []
    - id: live-compose-guide-animation-shared-elements-basic-usage-2
      title: Basic usage
      aliases:
        - androidx.compose.animation.SharedTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-basic-usage-2-source
      relatedIds: []
    - id: live-compose-guide-animation-shared-elements-current-limitations
      title: Current limitations
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-current-limitations-source
      relatedIds: []
    - id: live-compose-guide-animation-shared-elements-main-content
      title: Introduction
      aliases:
        - androidx.compose.animation.SharedTransitionLayout
        - androidx.compose.animation.SharedTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-main-content-source
      relatedIds: []
    - id: live-compose-guide-animation-shared-elements-managing-visibility
      title: Manage the visibility of shared elements manually
      aliases:
        - androidx.compose.animation.SharedTransitionLayout
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-managing-visibility-source
      relatedIds: []
    - id: live-compose-guide-animation-shared-elements-modifier-ordering
      title: Modifier ordering
      aliases:
        - androidx.compose.animation.SharedTransitionLayout
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-modifier-ordering-source
      relatedIds: []
    - id: live-compose-guide-animation-shared-elements-modifier-ordering-2
      title: Modifier ordering
      aliases:
        - androidx.compose.animation.SharedTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-modifier-ordering-2-source
      relatedIds: []
    - id: live-compose-guide-animation-shared-elements-shared-bounds
      title: Shared bounds versus shared element
      aliases:
        - androidx.compose.animation.SharedTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-shared-bounds-source
      relatedIds: []
    - id: live-compose-guide-animation-shared-elements-shared-bounds-2
      title: Shared bounds versus shared element
      aliases:
        - androidx.compose.animation.SharedTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-shared-bounds-2-source
      relatedIds: []
    - id: live-compose-guide-animation-shared-elements-understand-scopes
      title: Understand scopes
      aliases:
        - androidx.compose.animation.SharedTransitionLayout
        - androidx.compose.animation.SharedTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-understand-scopes-source
      relatedIds: []
    - id: live-compose-guide-animation-shared-elements-understand-scopes-2
      title: Understand scopes
      aliases:
        - androidx.compose.animation.SharedTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-understand-scopes-2-source
      relatedIds: []
    - id: live-compose-guide-animation-shared-elements-unique-keys
      title: Unique keys
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-shared-elements-unique-keys-source
      relatedIds: []
---

# Shared element transitions in Compose

Public source: https://developer.android.com/develop/ui/compose/animation/shared-elements

## Shared elements with AnimatedVisibility

Previous examples showed how to use shared elements with AnimatedContent, but shared elements work with AnimatedVisibility too.

For example, in this LazyColumn example, each element is wrapped in AnimatedVisibility. When the item is clicked on, the content has the visual effect of being pulled out of the UI into a dialog-like component.

var selectedSnack by remember { mutableStateOf<Snack?>(null) }

SharedTransitionLayout(modifier = Modifier.fillMaxSize()) {
    LazyColumn(
        // ...
    ) {
        items(listSnacks) { snack ->
            AnimatedVisibility(
                visible = snack != selectedSnack,
                enter = fadeIn() + scaleIn(),
                exit = fadeOut() + scaleOut(),
                modifier = Modifier.animateItem()
            ) {
                Box(
                    modifier = Modifier
                        .sharedBounds(
                            sharedContentState = rememberSharedContentState(key = "${snack.name}-bounds"),
                            // Using the scope provided by AnimatedVisibility
                            animatedVisibilityScope = this,
                            clipInOverlayDuringTransition = OverlayClip(shapeForSharedElement)
                        )
                        .background(Color.White, shapeForSharedElement)
                        .clip(shapeForSharedElement)
                ) {
                    SnackContents(
                        snack = snack,
                        modifier = Modifier.sharedElement(
                            sharedContentState = rememberSharedContentState(key = snack.name),
                            animatedVisibilityScope = this@AnimatedVisibility
                        ),
                        onClick = {
                            selectedSnack = snack
                        }
                    )
                }
            }
        }
    }
    // Contains matching AnimatedContent with sharedBounds modifiers.
    SnackEditDetails(
        snack = selectedSnack,
        onConfirmClick = {
            selectedSnack = null
        }
    )
}AnimatedVisibilitySharedElementSnippets.kt

Figure 6.

Shared elements

Sources: [live-compose-guide-animation-shared-elements-animated-visibility-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#animated-visibility)

## Shared elements with AnimatedVisibility

with

AnimatedVisibility

.

Sources: [live-compose-guide-animation-shared-elements-animated-visibility-2-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#animated-visibility)

## Basic usage

The following transition will be built in this section, transitioning from the smaller "list" item, to the larger detailed item:

Figure 2.

Basic example of a shared element transition between two composables.

The best way to use Modifier.sharedElement() is in conjunction with AnimatedContent, AnimatedVisibility, or NavHost, as this manages the transition between composables automatically for you.

The starting point is an existing basic AnimatedContent that has a MainContent, and DetailsContent composable before adding shared elements:

Figure 3.

Starting

AnimatedContent

without any shared element transitions.

To make the shared elements animate between the two layouts, surround the AnimatedContent composable with SharedTransitionLayout. The scopes from SharedTransitionLayout and AnimatedContent are passed to the MainContent and DetailsContent: var showDetails by remember { mutableStateOf(false) } SharedTransitionLayout { AnimatedContent( showDetails, label = "basic_transition" ) { targetState -> if (!targetState) { MainContent( onShowDetails = { showDetails = true }, animatedVisibilityScope = this@AnimatedContent, sharedTransitionScope = this@SharedTransitionLayout ) } else { DetailsContent( onBack = { showDetails = false }, animatedVisibilityScope = this@AnimatedContent, sharedTransitionScope = this@SharedTransitionLayout ) } } }BasicSharedElementSnippets.kt

Add Modifier.sharedElement() to your composable modifier chain on the two composables that match. Create a SharedContentState object and remember it with rememberSharedContentState(). The SharedContentState object is storing the unique key which determines the elements that are shared. Provide a unique key to identify the content, and use rememberSharedContentState() for the item to be remembered. The AnimatedContentScope is passed into the modifier, which is used to coordinate the animation. @Composable private fun MainContent( onShowDetails: () -> Unit, modifier: Modifier = Modifier, sharedTransitionScope: SharedTransitionScope, animatedVisibilityScope: AnimatedVisibilityScope ) { Row( // ... ) { with(sharedTransitionScope) { Image( painter = painterResource(id = R.drawable.cupcake),

Sources: [live-compose-guide-animation-shared-elements-basic-usage-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#basic-usage)

## Basic usage

contentDescription = "Cupcake", modifier = Modifier .sharedElement( rememberSharedContentState(key = "image"), animatedVisibilityScope = animatedVisibilityScope ) .size(100.dp) .clip(CircleShape), contentScale = ContentScale.Crop ) // ... } } } @Composable private fun DetailsContent( modifier: Modifier = Modifier, onBack: () -> Unit, sharedTransitionScope: SharedTransitionScope, animatedVisibilityScope: AnimatedVisibilityScope ) { Column( // ... ) { with(sharedTransitionScope) { Image( painter = painterResource(id = R.drawable.cupcake), contentDescription = "Cupcake", modifier = Modifier .sharedElement( rememberSharedContentState(key = "image"), animatedVisibilityScope = animatedVisibilityScope ) .size(200.dp) .clip(CircleShape), contentScale = ContentScale.Crop ) // ... } } }BasicSharedElementSnippets.kt

To get information on if a shared element match has occurred, extract rememberSharedContentState() into a variable, and query isMatchFound.

This results in the following automatic animation:

Figure 4.

Basic example of a shared element transition between two composables.

You may notice that the background color and size of the whole container still uses the default AnimatedContent settings.

Sources: [live-compose-guide-animation-shared-elements-basic-usage-2-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#basic-usage)

## Current limitations

These APIs have a few limitations. Most notably:

No interoperability between Views and Compose is supported. This includes any composable that wraps AndroidView, such as a Dialog or ModalBottomSheet.

There is no automatic animation support for the following: Shared Image composables: ContentScale is not animated by default. It snaps to the set end ContentScale. Shape clipping - There is no built-in support for automatic animation between shapes - for example, animating from a square to a circle as the item transitions. For the unsupported cases, use Modifier.sharedBounds() instead of sharedElement() and add Modifier.animateEnterExit() onto the items.

Sources: [live-compose-guide-animation-shared-elements-current-limitations-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#current-limitations)

## Introduction

Shared element transitions are a seamless way to transition between composables that have content that is consistent between them. They are often used for navigation, allowing you to visually connect different screens as a user navigates between them.

For example, in the following video, you can see the image and title of the snack are shared from the listing page, to the detail page.

Figure 1.

Jetsnack shared element demo.

In Compose, there are a few high-level APIs that help you create shared elements:

SharedTransitionLayout: The outermost layout required to implement shared element transitions. It provides a SharedTransitionScope. Composables need to be in a SharedTransitionScope to use the shared element modifiers.

Modifier.sharedElement(): The modifier that flags to the SharedTransitionScope the composable that should be matched with another composable.

Modifier.sharedBounds(): The modifier that flags to the SharedTransitionScope that this composable's bounds should be used as the container bounds for where the transition should take place. In contrast to sharedElement(), sharedBounds() is designed for visually different content.

An important concept when creating shared elements in Compose is how they work with overlays and clipping. See the clipping and overlays section to learn more about this important topic.

Sources: [live-compose-guide-animation-shared-elements-main-content-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#main-content)

## Manage the visibility of shared elements manually

In cases where you may not be using AnimatedVisibility or AnimatedContent, you can manage the shared element visibility yourself. Use Modifier.sharedElementWithCallerManagedVisibility() and provide your own conditional that determines when an item should be visible or not:

var selectFirst by remember { mutableStateOf(true) }
val key = remember { Any() }
SharedTransitionLayout(
    Modifier
        .fillMaxSize()
        .padding(10.dp)
        .clickable {
            selectFirst = !selectFirst
        }
) {
    Box(
        Modifier
            .sharedElementWithCallerManagedVisibility(
                rememberSharedContentState(key = key),
                !selectFirst
            )
            .background(Color.Red)
            .size(100.dp)
    ) {
        Text(if (!selectFirst) "false" else "true", color = Color.White)
    }
    Box(
        Modifier
            .offset(180.dp, 180.dp)
            .sharedElementWithCallerManagedVisibility(
                rememberSharedContentState(
                    key = key,
                ),
                selectFirst
            )
            .alpha(0.5f)
            .background(Color.Blue)
            .size(180.dp)
    ) {
        Text(if (selectFirst) "false" else "true", color = Color.White)
    }
}BasicSharedElementSnippets.kt

Sources: [live-compose-guide-animation-shared-elements-managing-visibility-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#managing-visibility)

## Modifier ordering

With Modifier.sharedElement() and Modifier.sharedBounds(), the order of your modifier chain matters, as with the rest of Compose. The incorrect placement of size-affecting modifiers can cause unexpected visual jumps during shared element matching.

For example, if you place a padding modifier in a different position on two shared elements, there is a visual difference in the animation.

var selectFirst by remember { mutableStateOf(true) }
val key = remember { Any() }
SharedTransitionLayout(
    Modifier
        .fillMaxSize()
        .padding(10.dp)
        .clickable {
            selectFirst = !selectFirst
        }
) {
    AnimatedContent(targetState = selectFirst, label = "AnimatedContent") { targetState ->
        if (targetState) {
            Box(
                Modifier
                    .padding(12.dp)
                    .sharedBounds(
                        rememberSharedContentState(key = key),
                        animatedVisibilityScope = this@AnimatedContent
                    )
                    .border(2.dp, Color.Red)
            ) {
                Text(
                    "Hello",
                    fontSize = 20.sp
                )
            }
        } else {
            Box(
                Modifier
                    .offset(180.dp, 180.dp)
                    .sharedBounds(
                        rememberSharedContentState(
                            key = key,
                        ),
                        animatedVisibilityScope = this@AnimatedContent
                    )
                    .border(2.dp, Color.Red)
                    // This padding is placed after sharedBounds, but it doesn't match the
                    // other shared elements modifier order, resulting in visual jumps
                    .padding(12.dp)

            ) {
                Text(
                    "Hello",
                    fontSize = 36.sp
                )
            }
        }
    }
}BasicSharedElementSnippets.kt

Matched bounds Unmatched bounds: Notice how the shared element animation appears a bit off as it needs to resize to the incorrect bounds

The modifiers used before the shared element modifiers provide

Sources: [live-compose-guide-animation-shared-elements-modifier-ordering-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#modifier-ordering)

## Modifier ordering

constraints to the shared element modifiers, which are then used to derive the initial and target bounds, and subsequently the bounds animation.

The modifiers used after the shared element modifiers use the constraints from before to measure and calculate the child's target size. The shared element modifiers create a series of animated constraints to gradually transform the child from the initial size to the target size.

The exception to this is if you use resizeMode = SharedTransitionScope.ResizeMode.scaleToBounds() for the animation, or Modifier.skipToLookaheadSize() on a composable. In this case, Compose lays out the child using the target constraints, and instead uses a scale factor to perform the animation instead of changing the layout size itself.

Sources: [live-compose-guide-animation-shared-elements-modifier-ordering-2-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#modifier-ordering)

## Shared bounds versus shared element

Modifier.sharedBounds() is similar to Modifier.sharedElement(). However, the modifiers are different in the following ways:

sharedBounds() is for content that is visually different but should share the same area between states, whereas sharedElement() expects the content to be the same.

With sharedBounds(), the content entering and exiting the screen is visible during the transition between the two states, whereas with sharedElement() only the target content is rendered in the transforming bounds. Modifier.sharedBounds() has enter and exit parameters for specifying how the content should transition, similar to how AnimatedContent works.

The most common use case for sharedBounds() is the container transform pattern, whereas for sharedElement() the example use case is a hero transition.

When using Text composables, sharedBounds() is preferred to support font changes such as transitioning between italic and bold or color changes.

From the previous example, adding Modifier.sharedBounds() onto the Row and Column in the two different scenarios will allow us to share the bounds of the two and perform the transition animation, allowing them to grow between each other:

@Composable
private fun MainContent(
    onShowDetails: () -> Unit,
    modifier: Modifier = Modifier,
    sharedTransitionScope: SharedTransitionScope,
    animatedVisibilityScope: AnimatedVisibilityScope
) {
    with(sharedTransitionScope) {
        Row(
            modifier = Modifier
                .padding(8.dp)
                .sharedBounds(
                    rememberSharedContentState(key = "bounds"),
                    animatedVisibilityScope = animatedVisibilityScope,
                    enter = fadeIn(),
                    exit = fadeOut(),
                    resizeMode = SharedTransitionScope.ResizeMode.scaleToBounds()
                )
                // ...
        ) {
            // ...
        }
    }
}

@Composable
private fun DetailsContent(
    modifier: Modifier = Modifier,
    onBack: () -> Unit,
    sharedTransitionScope: SharedTransitionScope,
    animatedVisibilityScope: AnimatedVisibilityScope
) {
    with(sharedTransitionScope) {
        Column(
            modifier =

Sources: [live-compose-guide-animation-shared-elements-shared-bounds-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#shared-bounds)

## Shared bounds versus shared element

Modifier
                .padding(top = 200.dp, start = 16.dp, end = 16.dp)
                .sharedBounds(
                    rememberSharedContentState(key = "bounds"),
                    animatedVisibilityScope = animatedVisibilityScope,
                    enter = fadeIn(),
                    exit = fadeOut(),
                    resizeMode = SharedTransitionScope.ResizeMode.scaleToBounds()
                )
                // ...

        ) {
            // ...
        }
    }
}SharedBoundsSnippets.kt

Figure 5.

Shared bounds between two composables.

Sources: [live-compose-guide-animation-shared-elements-shared-bounds-2-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#shared-bounds)

## Understand scopes

To use Modifier.sharedElement(), the composable needs to be in a SharedTransitionScope. The SharedTransitionLayout composable provides the SharedTransitionScope. Make sure to place it at the same top-level point in your UI hierarchy that contains the elements you want to share.

Generally, the composables should also be placed inside an AnimatedVisibilityScope. This is typically provided by using AnimatedContent to switch between composables or when using AnimatedVisibility directly, or by the NavHost composable function, unless you manage the visibility manually. In order to use multiple scopes, save your required scopes in a CompositionLocal, use context parameters in Kotlin, or pass the scopes as parameters to your functions.

Use CompositionLocals in the scenario where you have multiple scopes to keep track of, or a deeply nested hierarchy. A CompositionLocal lets you choose the exact scopes to save and use. On the other hand, when you use context parameters, other layouts in your hierarchy might accidentally override the provided scopes. For example, if you have multiple nested AnimatedContent, the scopes could be overridden.

val LocalNavAnimatedVisibilityScope = compositionLocalOf<AnimatedVisibilityScope?> { null }
val LocalSharedTransitionScope = compositionLocalOf<SharedTransitionScope?> { null }

@Composable
private fun SharedElementScope_CompositionLocal() {
    // An example of how to use composition locals to pass around the shared transition scope, far down your UI tree.
    // ...
    SharedTransitionLayout {
        CompositionLocalProvider(
            LocalSharedTransitionScope provides this
        ) {
            // This could also be your top-level NavHost as this provides an AnimatedContentScope
            AnimatedContent(state, label = "Top level AnimatedContent") { targetState ->
                CompositionLocalProvider(LocalNavAnimatedVisibilityScope provides this) {
                    // Now we can access the scopes in any nested composables as follows:
                    val sharedTransitionScope = LocalSharedTransitionScope.current
                        ?: throw IllegalStateException("No SharedElementScope found")

Sources: [live-compose-guide-animation-shared-elements-understand-scopes-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#understand-scopes)

## Understand scopes

val animatedVisibilityScope = LocalNavAnimatedVisibilityScope.current
                        ?: throw IllegalStateException("No AnimatedVisibility found")
                }
                // ...
            }
        }
    }
}BasicSharedElementSnippets.kt

Alternatively, if your hierarchy isn't deeply nested you can pass the scopes down as parameters:

@Composable
fun MainContent(
    animatedVisibilityScope: AnimatedVisibilityScope,
    sharedTransitionScope: SharedTransitionScope
) {
}

@Composable
fun Details(
    animatedVisibilityScope: AnimatedVisibilityScope,
    sharedTransitionScope: SharedTransitionScope
) {
}BasicSharedElementSnippets.kt

Sources: [live-compose-guide-animation-shared-elements-understand-scopes-2-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#understand-scopes)

## Unique keys

When working with complex shared elements, it is a good practice to create a key that is not a string, because strings can be error prone to match. Each key must be unique for matches to occur. For example, in Jetsnack we have the following shared elements:

Figure 7.

Image showing Jetsnack with annotations for each part of the UI.

You could create an enum to represent the shared element type. In this example the whole snack card can also appear from multiple different places on the home screen, for example in a "Popular" and a "Recommended" section. You can create a key that has the snackId, the origin ("Popular" / "Recommended"), and the type of the shared element that will be shared:

data class SnackSharedElementKey(
    val snackId: Long,
    val origin: String,
    val type: SnackSharedElementType
)

enum class SnackSharedElementType {
    Bounds,
    Image,
    Title,
    Tagline,
    Background
}

@Composable
fun SharedElementUniqueKey() {
    // ...
            Box(
                modifier = Modifier
                    .sharedElement(
                        rememberSharedContentState(
                            key = SnackSharedElementKey(
                                snackId = 1,
                                origin = "latest",
                                type = SnackSharedElementType.Image
                            )
                        ),
                        animatedVisibilityScope = this@AnimatedVisibility
                    )
            )
            // ...
}BasicSharedElementSnippets.kt

Data classes are recommended for keys since they implement hashCode() and equals().

Sources: [live-compose-guide-animation-shared-elements-unique-keys-source](https://developer.android.com/develop/ui/compose/animation/shared-elements#unique-keys)
