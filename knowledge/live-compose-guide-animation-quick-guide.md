---
type: reference
title: Quick guide to Animations in Compose
description: "Public source: https://developer.android.com/develop/ui/compose/animation/quick-guide"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-animation-quick-guide-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#additional-resources
    revision: web:compose-guide-animation-quick-guide:content@sha256:497af5614f61ed325c7b4d9731d701ae7ea379ac7fcbbc99c23230792855673e
    sha256: 6d3ca2d65ccff5c58d13c9520fd7be3c1d458dc5b9b52646519ba18b0654ce84
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      For more examples of fun animations in Compose, take a look at the following:

      5 quick animations in Compose

      Making Jellyfish move in Compose

      Customizing AnimatedContent in Compose

      Easing into Easing functions in Compose
  - id: live-compose-guide-animation-quick-guide-animate-appearing-disappearing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-appearing-disappearing
    revision: web:compose-guide-animation-quick-guide:content@sha256:18e3e74cc9dbf1b16f2b12b246b0dece3df447da09426b6f39572f9d66104133
    sha256: 13216a7f7e7799584c629fc0b7134b5e41a8a48878884984396c4ee30e1edb27
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use AnimatedVisibility to hide or show a Composable. Children inside AnimatedVisibility can use Modifier.animateEnterExit() for their own enter or exit transition.

      var visible by remember {
          mutableStateOf(true)
      }
      // Animated visibility will eventually remove the item from the composition once the animation has finished.
      AnimatedVisibility(visible) {
          // your composable here
          // ...
      }AnimationQuickGuide.kt

      Figure 1.

      Animating the appearance and disappearance of an item in a Column

      The enter and exit parameters of AnimatedVisibility allow you to configure how a composable behaves when it appears and disappears. Read the full documentation for more information.

      Another option for animating the visibility of a composable is to animate the alpha over time using animateFloatAsState:

      var visible by remember {
          mutableStateOf(true)
      }
      val animatedAlpha by animateFloatAsState(
          targetValue = if (visible) 1.0f else 0f,
          label = "alpha"
      )
      Box(
          modifier = Modifier
              .size(200.dp)
              .graphicsLayer {
                  alpha = animatedAlpha
              }
              .clip(RoundedCornerShape(8.dp))
              .background(colorGreen)
              .align(Alignment.TopCenter)
      ) {
      }AnimationQuickGuide.kt

      Figure 2.

      Animating the alpha of a composable

      However, changing the alpha comes with the caveat that the composable remains in the composition and continues to occupy the space it's laid out in. This could cause screen readers and other accessibility mechanisms to still consider the item on screen. On the other hand, AnimatedVisibility eventually removes the item from the composition.
  - id: live-compose-guide-animation-quick-guide-animate-background-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-background
    revision: web:compose-guide-animation-quick-guide:content@sha256:497af5614f61ed325c7b4d9731d701ae7ea379ac7fcbbc99c23230792855673e
    sha256: 8eb9cee557567be2babc34bff42c52e0a01b385ba50a4856e9cfa0d4cf6f6dc6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Figure 3.

      Animating background color of composable

      val animatedColor by animateColorAsState(
          if (animateBackgroundColor) colorGreen else colorBlue,
          label = "color"
      )
      Column(
          modifier = Modifier.drawBehind {
              drawRect(animatedColor)
          }
      ) {
          // your composable here
      }AnimationQuickGuide.kt

      This option is more performant than using Modifier.background(). Modifier.background() is acceptable for a one-shot color setting, but when animating a color over time, this could cause more recompositions than necessary.

      For infinitely animating the background color, see repeating an animation section.
  - id: live-compose-guide-animation-quick-guide-animate-common-properties-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-common-properties
    revision: web:compose-guide-animation-quick-guide:content@sha256:497af5614f61ed325c7b4d9731d701ae7ea379ac7fcbbc99c23230792855673e
    sha256: 431cbc8c4a65ab4611d948bac7041bca16876e9ce552344dd07defbf8accd82f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Compose provides convenient APIs that allow you to solve for many common animation use cases. This section demonstrates how you can animate common properties of a composable.
  - id: live-compose-guide-animation-quick-guide-animate-elevation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-elevation
    revision: web:compose-guide-animation-quick-guide:content@sha256:18e3e74cc9dbf1b16f2b12b246b0dece3df447da09426b6f39572f9d66104133
    sha256: 6a0645d48cfbe1c0d9961da216a8e42ce6436cc6e35a3c6d7e6bde54888a9d05
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To animate the elevation of a composable, use animateDpAsState combined with Modifier.graphicsLayer{ }. For once-off elevation changes, use Modifier.shadow(). If you are animating the shadow, using the Modifier.graphicsLayer{ } modifier is the more performant option.

      val mutableInteractionSource = remember {
          MutableInteractionSource()
      }
      val pressed = mutableInteractionSource.collectIsPressedAsState()
      val elevation = animateDpAsState(
          targetValue = if (pressed.value) {
              32.dp
          } else {
              8.dp
          },
          label = "elevation"
      )
      Box(
          modifier = Modifier
              .size(100.dp)
              .align(Alignment.Center)
              .graphicsLayer {
                  this.shadowElevation = elevation.value.toPx()
              }
              .clickable(interactionSource = mutableInteractionSource, indication = null) {
              }
              .background(colorGreen)
      ) {
      }AnimationQuickGuide.kt

      Figure 8.

      Composable's elevation animating on click

      Alternatively, use the Card composable, and set the elevation property to different values per state.
  - id: live-compose-guide-animation-quick-guide-animate-padding-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-padding
    revision: web:compose-guide-animation-quick-guide:content@sha256:18e3e74cc9dbf1b16f2b12b246b0dece3df447da09426b6f39572f9d66104133
    sha256: 385257225a2e486dfe16b24ecc9bacdaf0d149119099b94658452b90496d63e5
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To animate the padding of a composable, use animateDpAsState combined with Modifier.padding():

      var toggled by remember {
          mutableStateOf(false)
      }
      val animatedPadding by animateDpAsState(
          if (toggled) {
              0.dp
          } else {
              20.dp
          },
          label = "padding"
      )
      Box(
          modifier = Modifier
              .aspectRatio(1f)
              .fillMaxSize()
              .padding(animatedPadding)
              .background(Color(0xff53D9A1))
              .clickable(
                  interactionSource = remember { MutableInteractionSource() },
                  indication = null
              ) {
                  toggled = !toggled
              }
      )AnimationQuickGuide.kt

      Figure 7.

      Composable with its padding animating
  - id: live-compose-guide-animation-quick-guide-animate-position-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-position
    revision: web:compose-guide-animation-quick-guide:content@sha256:497af5614f61ed325c7b4d9731d701ae7ea379ac7fcbbc99c23230792855673e
    sha256: 40b5f4ea27412017cc96f2f1e2d9ac8bfbf998ea50a9b67b6920314aac091c63
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      placeable.placeRelative(offsetValue)
                      }
                  }
                  .size(100.dp)
                  .background(colorGreen)
          )
          Box(
              modifier = Modifier
                  .size(100.dp)
                  .background(colorBlue)
          )
      }AnimationQuickGuide.kt

      Figure 6.

      Animating with

      Modifier.layout{ }
  - id: live-compose-guide-animation-quick-guide-animate-position-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-position
    revision: web:compose-guide-animation-quick-guide:content@sha256:18e3e74cc9dbf1b16f2b12b246b0dece3df447da09426b6f39572f9d66104133
    sha256: efdede5e7690f0aea4d047c49cec1a7bc40834dbc0c8983c3849b7e0bae5329f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To animate the position of a composable, use Modifier.offset{ } combined with animateIntOffsetAsState().

      var moved by remember { mutableStateOf(false) }
      val pxToMove = with(LocalDensity.current) {
          100.dp.toPx().roundToInt()
      }
      val offset by animateIntOffsetAsState(
          targetValue = if (moved) {
              IntOffset(pxToMove, pxToMove)
          } else {
              IntOffset.Zero
          },
          label = "offset"
      )

      Box(
          modifier = Modifier
              .offset {
                  offset
              }
              .background(colorBlue)
              .size(100.dp)
              .clickable(
                  interactionSource = remember { MutableInteractionSource() },
                  indication = null
              ) {
                  moved = !moved
              }
      )AnimationQuickGuide.kt

      Figure 5.

      Composable moving by an offset

      If you want to ensure that composables are not drawn over or under other composables when animating position or size, use Modifier.layout{ }. This modifier propagates size and position changes to the parent, which then affects other children.

      For example, if you are moving a Box within a Column and the other children need to move when the Box moves, include the offset information with Modifier.layout{ } as follows:

      var toggled by remember {
          mutableStateOf(false)
      }
      val interactionSource = remember {
          MutableInteractionSource()
      }
      Column(
          modifier = Modifier
              .padding(16.dp)
              .fillMaxSize()
              .clickable(indication = null, interactionSource = interactionSource) {
                  toggled = !toggled
              }
      ) {
          val offsetTarget = if (toggled) {
              IntOffset(150, 150)
          } else {
              IntOffset.Zero
          }
          val offset = animateIntOffsetAsState(
              targetValue = offsetTarget, label = "offset"
          )
          Box(
              modifier = Modifier
                  .size(100.dp)
                  .background(colorBlue)
          )
          Box(
              modifier = Modifier
                  .layout { measurable, constraints ->
                      val offsetValue = if (isLookingAhead) offsetTarget else offset.value
                      val placeable = measurable.measure(constraints)
                      layout(placeable.width + offsetValue.x, placeable.height + offsetValue.y) {
  - id: live-compose-guide-animation-quick-guide-animate-size-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-size
    revision: web:compose-guide-animation-quick-guide:content@sha256:18e3e74cc9dbf1b16f2b12b246b0dece3df447da09426b6f39572f9d66104133
    sha256: 3597e01945658ec5ba0da90461421ab664df8c534571b8af9e59db588fc210c5
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose lets you animate the size of composables in a few different ways. Use animateContentSize() for animations between composable size changes.

      For example, if you have a box that contains text which can expand from one to multiple lines you can use Modifier.animateContentSize() to achieve a smoother transition:

      var expanded by remember { mutableStateOf(false) }
      Box(
          modifier = Modifier
              .background(colorBlue)
              .animateContentSize()
              .height(if (expanded) 400.dp else 200.dp)
              .fillMaxWidth()
              .clickable(
                  interactionSource = remember { MutableInteractionSource() },
                  indication = null
              ) {
                  expanded = !expanded
              }

      ) {
      }AnimationQuickGuide.kt

      Figure 4.

      Composable smoothly animating between a small and a larger size

      You can also use AnimatedContent, with a SizeTransform to describe how size changes should take place.
  - id: live-compose-guide-animation-quick-guide-animate-text-color-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-text-color
    revision: web:compose-guide-animation-quick-guide:content@sha256:18e3e74cc9dbf1b16f2b12b246b0dece3df447da09426b6f39572f9d66104133
    sha256: 36b7fea624c9c47f34f98c41fb64a05c781a8b65d16cb60e523697ecd0a87855
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To animate text color, use the color lambda on the BasicText composable:

      val infiniteTransition = rememberInfiniteTransition(label = "infinite transition")
      val animatedColor by infiniteTransition.animateColor(
          initialValue = Color(0xFF60DDAD),
          targetValue = Color(0xFF4285F4),
          animationSpec = infiniteRepeatable(tween(1000), RepeatMode.Reverse),
          label = "color"
      )

      BasicText(
          text = "Hello Compose",
          color = {
              animatedColor
          },
          // ...
      )AnimationQuickGuide.kt

      Figure 10.

      Example showing animating text color
  - id: live-compose-guide-animation-quick-guide-animate-text-scale-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-text-scale
    revision: web:compose-guide-animation-quick-guide:content@sha256:18e3e74cc9dbf1b16f2b12b246b0dece3df447da09426b6f39572f9d66104133
    sha256: 854d414bf56949802b7e9dd33bc2ec1b599be1ee5fda6fb6cd61abcdc07dbc86
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When animating scale, translation, or rotation of text, set the textMotion parameter on TextStyle to TextMotion.Animated. This ensures smoother transitions between text animations. Use Modifier.graphicsLayer{ } to translate, rotate or scale the text.

      val infiniteTransition = rememberInfiniteTransition(label = "infinite transition")
      val scale by infiniteTransition.animateFloat(
          initialValue = 1f,
          targetValue = 8f,
          animationSpec = infiniteRepeatable(tween(1000), RepeatMode.Reverse),
          label = "scale"
      )
      Box(modifier = Modifier.fillMaxSize()) {
          Text(
              text = "Hello",
              modifier = Modifier
                  .graphicsLayer {
                      scaleX = scale
                      scaleY = scale
                      transformOrigin = TransformOrigin.Center
                  }
                  .align(Alignment.Center),
              // Text composable does not take TextMotion as a parameter.
              // Provide it via style argument but make sure that we are copying from current theme
              style = LocalTextStyle.current.copy(textMotion = TextMotion.Animated)
          )
      }
      AnimationQuickGuide.kt

      Figure 9.

      Text animating smoothly between two sizes
  - id: live-compose-guide-animation-quick-guide-animate-whilst-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-whilst
    revision: web:compose-guide-animation-quick-guide:content@sha256:18e3e74cc9dbf1b16f2b12b246b0dece3df447da09426b6f39572f9d66104133
    sha256: 40f51b4a3614feaffdd4c9babde91841dae93721f8ddebd4ddf5a6315e2fddd9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      LinearEasing
                                  )
                              ) + slideOutOfContainer(
                                  animationSpec = tween(300, easing = EaseOut),
                                  towards = AnimatedContentTransitionScope.SlideDirection.End
                              )
                          }
                          put(NavDisplay.PredictivePopTransitionKey) {
                              EnterTransition.None togetherWith fadeOut(
                                  animationSpec = tween(
                                      300, easing = LinearEasing
                                  )
                              ) + slideOutOfContainer(
                                  animationSpec = tween(300, easing = EaseOut),
                                  towards = AnimatedContentTransitionScope.SlideDirection.End
                              )
                          }
                      }
                  ) { detail ->
                      ScreenDetails(
                          // ...
                      )
                  }
              }
          )
      }AnimationQuickGuide.kt

      There are many different kinds of enter and exit transitions that apply different effects to the incoming and outgoing content, see the documentation for more. For more about animating destinations, including predictive back, see Animate between destinations.
  - id: live-compose-guide-animation-quick-guide-animate-whilst-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-whilst
    revision: web:compose-guide-animation-quick-guide:content@sha256:18e3e74cc9dbf1b16f2b12b246b0dece3df447da09426b6f39572f9d66104133
    sha256: 38d9df5c8becdcfed18947c6acf0a9b9cbe7384e1b00a8fd72ac6026d9257a00
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Figure 12.

      Animating between destinations

      To animate transitions between destinations when using Navigation 3, set the default animations for all destinations with the transitionSpec, popTransitionSpec, and predictivePopTransitionSpec parameters of NavDisplay. To override them for a single destination, add NavDisplay.TransitionKey, NavDisplay.PopTransitionKey, and NavDisplay.PredictivePopTransitionKey metadata to its entry:

      data object Landing

      data class Detail(val photoIndex: Int)

      @Preview
      @Composable
      fun AnimateBetweenComposableDestinations() {
          // To keep the back stack across configuration changes, use rememberNavBackStack instead.
          val backStack = remember { mutableStateListOf<Any>(Landing) }
          NavDisplay(
              backStack = backStack,
              onBack = { backStack.removeLastOrNull() },
              // Default transitions for every destination: no animation.
              transitionSpec = { EnterTransition.None togetherWith ExitTransition.None },
              popTransitionSpec = { EnterTransition.None togetherWith ExitTransition.None },
              predictivePopTransitionSpec = { EnterTransition.None togetherWith ExitTransition.None },
              entryProvider = entryProvider {
                  entry<Landing> {
                      ScreenLanding(
                          // ...
                      )
                  }
                  entry<Detail>(
                      // Override the transitions for this destination.
                      metadata = metadata {
                          put(NavDisplay.TransitionKey) {
                              fadeIn(
                                  animationSpec = tween(
                                      300, easing = LinearEasing
                                  )
                              ) + slideIntoContainer(
                                  animationSpec = tween(300, easing = EaseIn),
                                  towards = AnimatedContentTransitionScope.SlideDirection.Start
                              ) togetherWith ExitTransition.KeepUntilTransitionsFinished
                          }
                          put(NavDisplay.PopTransitionKey) {
                              EnterTransition.None togetherWith fadeOut(
                                  animationSpec = tween(
                                      300, easing =
  - id: live-compose-guide-animation-quick-guide-animation-timing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#animation-timing
    revision: web:compose-guide-animation-quick-guide:content@sha256:497af5614f61ed325c7b4d9731d701ae7ea379ac7fcbbc99c23230792855673e
    sha256: c921af4d829d624148a360cf41ab049672a8c60795d9501b06816f44451e32d1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose by default uses spring animations for most animations. Springs, or physics-based animations, feel more natural. They are also interruptible as they take into account the object's current velocity, instead of a fixed time. If you want to override the default, all the animation APIs demonstrated previously have the ability to set an animationSpec to customize how an animation runs, whether you'd like it to execute over a certain duration or be more bouncy.

      The following is a summary of the different animationSpec options:

      spring: Physics-based animation, the default for all animations. You can change the stiffness or dampingRatio to achieve a different animation look and feel.

      tween (short for between): Duration-based animation, animates between two values with an Easing function.

      keyframes: Spec for specifying values at certain key points in an animation.

      repeatable: Duration-based spec that runs a certain number of times, specified by RepeatMode.

      infiniteRepeatable: Duration-based spec that runs forever.

      snap: Instantly snaps to the end value without any animation.

      Figure 16.

      No spec set versus Custom Spring spec set

      Read the full documentation for more information about animationSpecs.
  - id: live-compose-guide-animation-quick-guide-concurrent-animations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#concurrent-animations
    revision: web:compose-guide-animation-quick-guide:content@sha256:497af5614f61ed325c7b4d9731d701ae7ea379ac7fcbbc99c23230792855673e
    sha256: 0fc49ed18a547ccb7c3fe5f5e0683b5cd75c9c43e0e953942c3665c84cced52c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Figure 15.

      Diagram indicating how concurrent animations progress, all at the same time.

      Use the coroutine APIs (Animatable#animateTo() or animate), or the Transition API to achieve concurrent animations. If you use multiple launch functions in a coroutine context, it launches the animations at the same time:

      val alphaAnimation = remember { Animatable(0f) }
      val yAnimation = remember { Animatable(0f) }

      LaunchedEffect("animationKey") {
          launch {
              alphaAnimation.animateTo(1f)
          }
          launch {
              yAnimation.animateTo(100f)
          }
      }AnimationQuickGuide.kt

      You could use the updateTransition API to use the same state to drive many different property animations at the same time. The following example animates two properties controlled by a state change, rect and borderWidth:

      var currentState by remember { mutableStateOf(BoxState.Collapsed) }
      val transition = updateTransition(currentState, label = "transition")

      val rect by transition.animateRect(label = "rect") { state ->
          when (state) {
              BoxState.Collapsed -> Rect(0f, 0f, 100f, 100f)
              BoxState.Expanded -> Rect(100f, 100f, 300f, 300f)
          }
      }
      val borderWidth by transition.animateDp(label = "borderWidth") { state ->
          when (state) {
              BoxState.Collapsed -> 1.dp
              BoxState.Expanded -> 0.dp
          }
      }AnimationQuickGuide.kt
  - id: live-compose-guide-animation-quick-guide-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#main-content
    revision: web:compose-guide-animation-quick-guide:content@sha256:497af5614f61ed325c7b4d9731d701ae7ea379ac7fcbbc99c23230792855673e
    sha256: 4494c2d7108710950cf9bd58c1bc4f455f2b74bc3ca12560aa529ef37e5e1876
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Compose has many built-in animation mechanisms and it can be overwhelming to know which one to choose. The following is a list of common animation use cases. For more detailed information about the full set of different API options available to you, read the full Compose Animation documentation.
  - id: live-compose-guide-animation-quick-guide-optimize-performance-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#optimize-performance
    revision: web:compose-guide-animation-quick-guide:content@sha256:497af5614f61ed325c7b4d9731d701ae7ea379ac7fcbbc99c23230792855673e
    sha256: 11148f026cc8a0208c13e7f68d8f61f1eaf57d955ec0d7cb82ab63102677c21c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Animations in Compose can cause performance problems. This is due to the nature of what an animation is: moving or changing pixels on screen quickly, frame-by-frame to create the illusion of movement.

      Consider the different phases of Compose: composition, layout and draw. If your animation changes the layout phase, it requires all affected composables to relayout and redraw. If your animation occurs in the draw phase, it is by default more performant than if you were to run the animation in the layout phase, as it would have less work to do overall.

      To ensure your app does as little as possible while animating, choose the lambda version of a Modifier where possible. This skips recomposition and performs the animation outside of the composition phase, otherwise use Modifier.graphicsLayer{ }, as this modifier always runs in the draw phase. For more information on this, see the deferring reads section in the performance documentation.
  - id: live-compose-guide-animation-quick-guide-repeat-animation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#repeat-animation
    revision: web:compose-guide-animation-quick-guide:content@sha256:497af5614f61ed325c7b4d9731d701ae7ea379ac7fcbbc99c23230792855673e
    sha256: d5ccee327cc644bf215846cce939d69dfb4d8ca6a22a75898879156987a81e7b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Figure 13.

      Background color animating between two values, infinitely

      Use rememberInfiniteTransition with an infiniteRepeatable animationSpec to continuously repeat your animation. Change RepeatMode to specify how it should go back and forth.

      Use repeatable to repeat a set number of times.

      val infiniteTransition = rememberInfiniteTransition(label = "infinite")
      val color by infiniteTransition.animateColor(
          initialValue = Color.Green,
          targetValue = Color.Blue,
          animationSpec = infiniteRepeatable(
              animation = tween(1000, easing = LinearEasing),
              repeatMode = RepeatMode.Reverse
          ),
          label = "color"
      )
      Column(
          modifier = Modifier.drawBehind {
              drawRect(color)
          }
      ) {
          // your composable here
      }AnimationQuickGuide.kt
  - id: live-compose-guide-animation-quick-guide-sequential-animations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#sequential-animations
    revision: web:compose-guide-animation-quick-guide:content@sha256:497af5614f61ed325c7b4d9731d701ae7ea379ac7fcbbc99c23230792855673e
    sha256: ba8e335fc274f4104b1c7f94fb3e62073a452f2171916941a6046bd1a9a7a023
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Figure 14.

      Diagram indicating how a sequential animation progresses, one by one.

      Use the Animatable coroutine APIs to perform sequential or concurrent animations. Calling animateTo on the Animatable one after the other causes each animation to wait for the previous animations to finish before proceeding. This is because it is a suspend function.

      val alphaAnimation = remember { Animatable(0f) }
      val yAnimation = remember { Animatable(0f) }

      LaunchedEffect("animationKey") {
          alphaAnimation.animateTo(1f)
          yAnimation.animateTo(100f)
          yAnimation.animateTo(500f, animationSpec = tween(100))
      }AnimationQuickGuide.kt
  - id: live-compose-guide-animation-quick-guide-start-animation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#start-animation
    revision: web:compose-guide-animation-quick-guide:content@sha256:497af5614f61ed325c7b4d9731d701ae7ea379ac7fcbbc99c23230792855673e
    sha256: 763023421e61000b10831e3f9a4402b0302b3586ba8c245b41bf488b5c7827c2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      LaunchedEffect runs when a composable enters the composition. It starts an animation on launch of a composable, you can use this to drive the animation state change. Using Animatable with the animateTo method to start the animation on launch:

      val alphaAnimation = remember {
          Animatable(0f)
      }
      LaunchedEffect(Unit) {
          alphaAnimation.animateTo(1f)
      }
      Box(
          modifier = Modifier.graphicsLayer {
              alpha = alphaAnimation.value
          }
      )AnimationQuickGuide.kt
  - id: live-compose-guide-animation-quick-guide-switch-different-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#switch-different
    revision: web:compose-guide-animation-quick-guide:content@sha256:18e3e74cc9dbf1b16f2b12b246b0dece3df447da09426b6f39572f9d66104133
    sha256: a934e9dbc542ef5c6d15aa8e18061d499e19641a75ee6581e00023e6ae5ccf75
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use AnimatedContent to animate between different composables, if you just want a standard fade between composables, use Crossfade.

      var state by remember {
          mutableStateOf(UiState.Loading)
      }
      AnimatedContent(
          state,
          transitionSpec = {
              fadeIn(
                  animationSpec = tween(3000)
              ) togetherWith fadeOut(animationSpec = tween(3000))
          },
          modifier = Modifier.clickable(
              interactionSource = remember { MutableInteractionSource() },
              indication = null
          ) {
              state = when (state) {
                  UiState.Loading -> UiState.Loaded
                  UiState.Loaded -> UiState.Error
                  UiState.Error -> UiState.Loading
              }
          },
          label = "Animated Content"
      ) { targetState ->
          when (targetState) {
              UiState.Loading -> {
                  LoadingScreen()
              }
              UiState.Loaded -> {
                  LoadedScreen()
              }
              UiState.Error -> {
                  ErrorScreen()
              }
          }
      }AnimationQuickGuide.kt

      Figure 11.

      Using AnimatedContent to animate changes between different composables (slowed down)

      AnimatedContent can be customized to show many different kinds of enter and exit transitions. For more information, read the documentation on AnimatedContent or read this blog post on AnimatedContent.
compose:
  id: live-compose-guide-animation-quick-guide
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core
  sections:
    - id: live-compose-guide-animation-quick-guide-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-animate-appearing-disappearing
      title: Animate appearing / disappearing
      aliases:
        - androidx.compose.animation.core.animateFloatAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-animate-appearing-disappearing-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-animate-background
      title: Animate background color
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-animate-background-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-animate-common-properties
      title: Animate common composable properties
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-animate-common-properties-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-animate-elevation
      title: Animate elevation of a composable
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-animate-elevation-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-animate-padding
      title: Animate padding of a composable
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-animate-padding-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-animate-position
      title: Animate position of composable
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-animate-position-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-animate-position-2
      title: Animate position of composable
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-animate-position-2-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-animate-size
      title: Animate the size of a composable
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-animate-size-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-animate-text-color
      title: Animate text color
      aliases:
        - androidx.compose.animation.core.rememberInfiniteTransition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-animate-text-color-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-animate-text-scale
      title: Animate text scale, translation or rotation
      aliases:
        - androidx.compose.animation.core.rememberInfiniteTransition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-animate-text-scale-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-animate-whilst
      title: Animate while navigating to different destinations
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-animate-whilst-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-animate-whilst-2
      title: Animate while navigating to different destinations
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-animate-whilst-2-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-animation-timing
      title: Change animation timing
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-animation-timing-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-concurrent-animations
      title: Create concurrent animations
      aliases:
        - androidx.compose.animation.core.Animatable
        - androidx.compose.animation.core.updateTransition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-concurrent-animations-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-main-content-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-optimize-performance
      title: Optimize animation performance
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-optimize-performance-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-repeat-animation
      title: Repeat an animation
      aliases:
        - androidx.compose.animation.core.rememberInfiniteTransition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-repeat-animation-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-sequential-animations
      title: Create sequential animations
      aliases:
        - androidx.compose.animation.core.Animatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-sequential-animations-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-start-animation
      title: Start an animation on launch of a composable
      aliases:
        - androidx.compose.animation.core.Animatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-start-animation-source
      relatedIds: []
    - id: live-compose-guide-animation-quick-guide-switch-different
      title: Switch between different types of content
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-switch-different-source
      relatedIds: []
---

# Quick guide to Animations in Compose

Public source: https://developer.android.com/develop/ui/compose/animation/quick-guide

## Additional resources

For more examples of fun animations in Compose, take a look at the following:

5 quick animations in Compose

Making Jellyfish move in Compose

Customizing AnimatedContent in Compose

Easing into Easing functions in Compose

Sources: [live-compose-guide-animation-quick-guide-additional-resources-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#additional-resources)

## Animate appearing / disappearing

Use AnimatedVisibility to hide or show a Composable. Children inside AnimatedVisibility can use Modifier.animateEnterExit() for their own enter or exit transition.

var visible by remember {
    mutableStateOf(true)
}
// Animated visibility will eventually remove the item from the composition once the animation has finished.
AnimatedVisibility(visible) {
    // your composable here
    // ...
}AnimationQuickGuide.kt

Figure 1.

Animating the appearance and disappearance of an item in a Column

The enter and exit parameters of AnimatedVisibility allow you to configure how a composable behaves when it appears and disappears. Read the full documentation for more information.

Another option for animating the visibility of a composable is to animate the alpha over time using animateFloatAsState:

var visible by remember {
    mutableStateOf(true)
}
val animatedAlpha by animateFloatAsState(
    targetValue = if (visible) 1.0f else 0f,
    label = "alpha"
)
Box(
    modifier = Modifier
        .size(200.dp)
        .graphicsLayer {
            alpha = animatedAlpha
        }
        .clip(RoundedCornerShape(8.dp))
        .background(colorGreen)
        .align(Alignment.TopCenter)
) {
}AnimationQuickGuide.kt

Figure 2.

Animating the alpha of a composable

However, changing the alpha comes with the caveat that the composable remains in the composition and continues to occupy the space it's laid out in. This could cause screen readers and other accessibility mechanisms to still consider the item on screen. On the other hand, AnimatedVisibility eventually removes the item from the composition.

Sources: [live-compose-guide-animation-quick-guide-animate-appearing-disappearing-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-appearing-disappearing)

## Animate background color

Figure 3.

Animating background color of composable

val animatedColor by animateColorAsState(
    if (animateBackgroundColor) colorGreen else colorBlue,
    label = "color"
)
Column(
    modifier = Modifier.drawBehind {
        drawRect(animatedColor)
    }
) {
    // your composable here
}AnimationQuickGuide.kt

This option is more performant than using Modifier.background(). Modifier.background() is acceptable for a one-shot color setting, but when animating a color over time, this could cause more recompositions than necessary.

For infinitely animating the background color, see repeating an animation section.

Sources: [live-compose-guide-animation-quick-guide-animate-background-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-background)

## Animate common composable properties

Compose provides convenient APIs that allow you to solve for many common animation use cases. This section demonstrates how you can animate common properties of a composable.

Sources: [live-compose-guide-animation-quick-guide-animate-common-properties-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-common-properties)

## Animate elevation of a composable

To animate the elevation of a composable, use animateDpAsState combined with Modifier.graphicsLayer{ }. For once-off elevation changes, use Modifier.shadow(). If you are animating the shadow, using the Modifier.graphicsLayer{ } modifier is the more performant option.

val mutableInteractionSource = remember {
    MutableInteractionSource()
}
val pressed = mutableInteractionSource.collectIsPressedAsState()
val elevation = animateDpAsState(
    targetValue = if (pressed.value) {
        32.dp
    } else {
        8.dp
    },
    label = "elevation"
)
Box(
    modifier = Modifier
        .size(100.dp)
        .align(Alignment.Center)
        .graphicsLayer {
            this.shadowElevation = elevation.value.toPx()
        }
        .clickable(interactionSource = mutableInteractionSource, indication = null) {
        }
        .background(colorGreen)
) {
}AnimationQuickGuide.kt

Figure 8.

Composable's elevation animating on click

Alternatively, use the Card composable, and set the elevation property to different values per state.

Sources: [live-compose-guide-animation-quick-guide-animate-elevation-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-elevation)

## Animate padding of a composable

To animate the padding of a composable, use animateDpAsState combined with Modifier.padding():

var toggled by remember {
    mutableStateOf(false)
}
val animatedPadding by animateDpAsState(
    if (toggled) {
        0.dp
    } else {
        20.dp
    },
    label = "padding"
)
Box(
    modifier = Modifier
        .aspectRatio(1f)
        .fillMaxSize()
        .padding(animatedPadding)
        .background(Color(0xff53D9A1))
        .clickable(
            interactionSource = remember { MutableInteractionSource() },
            indication = null
        ) {
            toggled = !toggled
        }
)AnimationQuickGuide.kt

Figure 7.

Composable with its padding animating

Sources: [live-compose-guide-animation-quick-guide-animate-padding-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-padding)

## Animate position of composable

To animate the position of a composable, use Modifier.offset{ } combined with animateIntOffsetAsState().

var moved by remember { mutableStateOf(false) }
val pxToMove = with(LocalDensity.current) {
    100.dp.toPx().roundToInt()
}
val offset by animateIntOffsetAsState(
    targetValue = if (moved) {
        IntOffset(pxToMove, pxToMove)
    } else {
        IntOffset.Zero
    },
    label = "offset"
)

Box(
    modifier = Modifier
        .offset {
            offset
        }
        .background(colorBlue)
        .size(100.dp)
        .clickable(
            interactionSource = remember { MutableInteractionSource() },
            indication = null
        ) {
            moved = !moved
        }
)AnimationQuickGuide.kt

Figure 5.

Composable moving by an offset

If you want to ensure that composables are not drawn over or under other composables when animating position or size, use Modifier.layout{ }. This modifier propagates size and position changes to the parent, which then affects other children.

For example, if you are moving a Box within a Column and the other children need to move when the Box moves, include the offset information with Modifier.layout{ } as follows:

var toggled by remember {
    mutableStateOf(false)
}
val interactionSource = remember {
    MutableInteractionSource()
}
Column(
    modifier = Modifier
        .padding(16.dp)
        .fillMaxSize()
        .clickable(indication = null, interactionSource = interactionSource) {
            toggled = !toggled
        }
) {
    val offsetTarget = if (toggled) {
        IntOffset(150, 150)
    } else {
        IntOffset.Zero
    }
    val offset = animateIntOffsetAsState(
        targetValue = offsetTarget, label = "offset"
    )
    Box(
        modifier = Modifier
            .size(100.dp)
            .background(colorBlue)
    )
    Box(
        modifier = Modifier
            .layout { measurable, constraints ->
                val offsetValue = if (isLookingAhead) offsetTarget else offset.value
                val placeable = measurable.measure(constraints)
                layout(placeable.width + offsetValue.x, placeable.height + offsetValue.y) {

Sources: [live-compose-guide-animation-quick-guide-animate-position-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-position)

## Animate position of composable

placeable.placeRelative(offsetValue)
                }
            }
            .size(100.dp)
            .background(colorGreen)
    )
    Box(
        modifier = Modifier
            .size(100.dp)
            .background(colorBlue)
    )
}AnimationQuickGuide.kt

Figure 6.

Animating with

Modifier.layout{ }

Sources: [live-compose-guide-animation-quick-guide-animate-position-2-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-position)

## Animate the size of a composable

Compose lets you animate the size of composables in a few different ways. Use animateContentSize() for animations between composable size changes.

For example, if you have a box that contains text which can expand from one to multiple lines you can use Modifier.animateContentSize() to achieve a smoother transition:

var expanded by remember { mutableStateOf(false) }
Box(
    modifier = Modifier
        .background(colorBlue)
        .animateContentSize()
        .height(if (expanded) 400.dp else 200.dp)
        .fillMaxWidth()
        .clickable(
            interactionSource = remember { MutableInteractionSource() },
            indication = null
        ) {
            expanded = !expanded
        }

) {
}AnimationQuickGuide.kt

Figure 4.

Composable smoothly animating between a small and a larger size

You can also use AnimatedContent, with a SizeTransform to describe how size changes should take place.

Sources: [live-compose-guide-animation-quick-guide-animate-size-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-size)

## Animate text color

To animate text color, use the color lambda on the BasicText composable:

val infiniteTransition = rememberInfiniteTransition(label = "infinite transition")
val animatedColor by infiniteTransition.animateColor(
    initialValue = Color(0xFF60DDAD),
    targetValue = Color(0xFF4285F4),
    animationSpec = infiniteRepeatable(tween(1000), RepeatMode.Reverse),
    label = "color"
)

BasicText(
    text = "Hello Compose",
    color = {
        animatedColor
    },
    // ...
)AnimationQuickGuide.kt

Figure 10.

Example showing animating text color

Sources: [live-compose-guide-animation-quick-guide-animate-text-color-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-text-color)

## Animate text scale, translation or rotation

When animating scale, translation, or rotation of text, set the textMotion parameter on TextStyle to TextMotion.Animated. This ensures smoother transitions between text animations. Use Modifier.graphicsLayer{ } to translate, rotate or scale the text.

val infiniteTransition = rememberInfiniteTransition(label = "infinite transition")
val scale by infiniteTransition.animateFloat(
    initialValue = 1f,
    targetValue = 8f,
    animationSpec = infiniteRepeatable(tween(1000), RepeatMode.Reverse),
    label = "scale"
)
Box(modifier = Modifier.fillMaxSize()) {
    Text(
        text = "Hello",
        modifier = Modifier
            .graphicsLayer {
                scaleX = scale
                scaleY = scale
                transformOrigin = TransformOrigin.Center
            }
            .align(Alignment.Center),
        // Text composable does not take TextMotion as a parameter.
        // Provide it via style argument but make sure that we are copying from current theme
        style = LocalTextStyle.current.copy(textMotion = TextMotion.Animated)
    )
}
AnimationQuickGuide.kt

Figure 9.

Text animating smoothly between two sizes

Sources: [live-compose-guide-animation-quick-guide-animate-text-scale-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-text-scale)

## Animate while navigating to different destinations

Figure 12.

Animating between destinations

To animate transitions between destinations when using Navigation 3, set the default animations for all destinations with the transitionSpec, popTransitionSpec, and predictivePopTransitionSpec parameters of NavDisplay. To override them for a single destination, add NavDisplay.TransitionKey, NavDisplay.PopTransitionKey, and NavDisplay.PredictivePopTransitionKey metadata to its entry:

data object Landing

data class Detail(val photoIndex: Int)

@Preview
@Composable
fun AnimateBetweenComposableDestinations() {
    // To keep the back stack across configuration changes, use rememberNavBackStack instead.
    val backStack = remember { mutableStateListOf<Any>(Landing) }
    NavDisplay(
        backStack = backStack,
        onBack = { backStack.removeLastOrNull() },
        // Default transitions for every destination: no animation.
        transitionSpec = { EnterTransition.None togetherWith ExitTransition.None },
        popTransitionSpec = { EnterTransition.None togetherWith ExitTransition.None },
        predictivePopTransitionSpec = { EnterTransition.None togetherWith ExitTransition.None },
        entryProvider = entryProvider {
            entry<Landing> {
                ScreenLanding(
                    // ...
                )
            }
            entry<Detail>(
                // Override the transitions for this destination.
                metadata = metadata {
                    put(NavDisplay.TransitionKey) {
                        fadeIn(
                            animationSpec = tween(
                                300, easing = LinearEasing
                            )
                        ) + slideIntoContainer(
                            animationSpec = tween(300, easing = EaseIn),
                            towards = AnimatedContentTransitionScope.SlideDirection.Start
                        ) togetherWith ExitTransition.KeepUntilTransitionsFinished
                    }
                    put(NavDisplay.PopTransitionKey) {
                        EnterTransition.None togetherWith fadeOut(
                            animationSpec = tween(
                                300, easing =

Sources: [live-compose-guide-animation-quick-guide-animate-whilst-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-whilst)

## Animate while navigating to different destinations

LinearEasing
                            )
                        ) + slideOutOfContainer(
                            animationSpec = tween(300, easing = EaseOut),
                            towards = AnimatedContentTransitionScope.SlideDirection.End
                        )
                    }
                    put(NavDisplay.PredictivePopTransitionKey) {
                        EnterTransition.None togetherWith fadeOut(
                            animationSpec = tween(
                                300, easing = LinearEasing
                            )
                        ) + slideOutOfContainer(
                            animationSpec = tween(300, easing = EaseOut),
                            towards = AnimatedContentTransitionScope.SlideDirection.End
                        )
                    }
                }
            ) { detail ->
                ScreenDetails(
                    // ...
                )
            }
        }
    )
}AnimationQuickGuide.kt

There are many different kinds of enter and exit transitions that apply different effects to the incoming and outgoing content, see the documentation for more. For more about animating destinations, including predictive back, see Animate between destinations.

Sources: [live-compose-guide-animation-quick-guide-animate-whilst-2-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#animate-whilst)

## Change animation timing

Compose by default uses spring animations for most animations. Springs, or physics-based animations, feel more natural. They are also interruptible as they take into account the object's current velocity, instead of a fixed time. If you want to override the default, all the animation APIs demonstrated previously have the ability to set an animationSpec to customize how an animation runs, whether you'd like it to execute over a certain duration or be more bouncy.

The following is a summary of the different animationSpec options:

spring: Physics-based animation, the default for all animations. You can change the stiffness or dampingRatio to achieve a different animation look and feel.

tween (short for between): Duration-based animation, animates between two values with an Easing function.

keyframes: Spec for specifying values at certain key points in an animation.

repeatable: Duration-based spec that runs a certain number of times, specified by RepeatMode.

infiniteRepeatable: Duration-based spec that runs forever.

snap: Instantly snaps to the end value without any animation.

Figure 16.

No spec set versus Custom Spring spec set

Read the full documentation for more information about animationSpecs.

Sources: [live-compose-guide-animation-quick-guide-animation-timing-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#animation-timing)

## Create concurrent animations

Figure 15.

Diagram indicating how concurrent animations progress, all at the same time.

Use the coroutine APIs (Animatable#animateTo() or animate), or the Transition API to achieve concurrent animations. If you use multiple launch functions in a coroutine context, it launches the animations at the same time:

val alphaAnimation = remember { Animatable(0f) }
val yAnimation = remember { Animatable(0f) }

LaunchedEffect("animationKey") {
    launch {
        alphaAnimation.animateTo(1f)
    }
    launch {
        yAnimation.animateTo(100f)
    }
}AnimationQuickGuide.kt

You could use the updateTransition API to use the same state to drive many different property animations at the same time. The following example animates two properties controlled by a state change, rect and borderWidth:

var currentState by remember { mutableStateOf(BoxState.Collapsed) }
val transition = updateTransition(currentState, label = "transition")

val rect by transition.animateRect(label = "rect") { state ->
    when (state) {
        BoxState.Collapsed -> Rect(0f, 0f, 100f, 100f)
        BoxState.Expanded -> Rect(100f, 100f, 300f, 300f)
    }
}
val borderWidth by transition.animateDp(label = "borderWidth") { state ->
    when (state) {
        BoxState.Collapsed -> 1.dp
        BoxState.Expanded -> 0.dp
    }
}AnimationQuickGuide.kt

Sources: [live-compose-guide-animation-quick-guide-concurrent-animations-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#concurrent-animations)

## Introduction

Compose has many built-in animation mechanisms and it can be overwhelming to know which one to choose. The following is a list of common animation use cases. For more detailed information about the full set of different API options available to you, read the full Compose Animation documentation.

Sources: [live-compose-guide-animation-quick-guide-main-content-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#main-content)

## Optimize animation performance

Animations in Compose can cause performance problems. This is due to the nature of what an animation is: moving or changing pixels on screen quickly, frame-by-frame to create the illusion of movement.

Consider the different phases of Compose: composition, layout and draw. If your animation changes the layout phase, it requires all affected composables to relayout and redraw. If your animation occurs in the draw phase, it is by default more performant than if you were to run the animation in the layout phase, as it would have less work to do overall.

To ensure your app does as little as possible while animating, choose the lambda version of a Modifier where possible. This skips recomposition and performs the animation outside of the composition phase, otherwise use Modifier.graphicsLayer{ }, as this modifier always runs in the draw phase. For more information on this, see the deferring reads section in the performance documentation.

Sources: [live-compose-guide-animation-quick-guide-optimize-performance-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#optimize-performance)

## Repeat an animation

Figure 13.

Background color animating between two values, infinitely

Use rememberInfiniteTransition with an infiniteRepeatable animationSpec to continuously repeat your animation. Change RepeatMode to specify how it should go back and forth.

Use repeatable to repeat a set number of times.

val infiniteTransition = rememberInfiniteTransition(label = "infinite")
val color by infiniteTransition.animateColor(
    initialValue = Color.Green,
    targetValue = Color.Blue,
    animationSpec = infiniteRepeatable(
        animation = tween(1000, easing = LinearEasing),
        repeatMode = RepeatMode.Reverse
    ),
    label = "color"
)
Column(
    modifier = Modifier.drawBehind {
        drawRect(color)
    }
) {
    // your composable here
}AnimationQuickGuide.kt

Sources: [live-compose-guide-animation-quick-guide-repeat-animation-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#repeat-animation)

## Create sequential animations

Figure 14.

Diagram indicating how a sequential animation progresses, one by one.

Use the Animatable coroutine APIs to perform sequential or concurrent animations. Calling animateTo on the Animatable one after the other causes each animation to wait for the previous animations to finish before proceeding. This is because it is a suspend function.

val alphaAnimation = remember { Animatable(0f) }
val yAnimation = remember { Animatable(0f) }

LaunchedEffect("animationKey") {
    alphaAnimation.animateTo(1f)
    yAnimation.animateTo(100f)
    yAnimation.animateTo(500f, animationSpec = tween(100))
}AnimationQuickGuide.kt

Sources: [live-compose-guide-animation-quick-guide-sequential-animations-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#sequential-animations)

## Start an animation on launch of a composable

LaunchedEffect runs when a composable enters the composition. It starts an animation on launch of a composable, you can use this to drive the animation state change. Using Animatable with the animateTo method to start the animation on launch:

val alphaAnimation = remember {
    Animatable(0f)
}
LaunchedEffect(Unit) {
    alphaAnimation.animateTo(1f)
}
Box(
    modifier = Modifier.graphicsLayer {
        alpha = alphaAnimation.value
    }
)AnimationQuickGuide.kt

Sources: [live-compose-guide-animation-quick-guide-start-animation-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#start-animation)

## Switch between different types of content

Use AnimatedContent to animate between different composables, if you just want a standard fade between composables, use Crossfade.

var state by remember {
    mutableStateOf(UiState.Loading)
}
AnimatedContent(
    state,
    transitionSpec = {
        fadeIn(
            animationSpec = tween(3000)
        ) togetherWith fadeOut(animationSpec = tween(3000))
    },
    modifier = Modifier.clickable(
        interactionSource = remember { MutableInteractionSource() },
        indication = null
    ) {
        state = when (state) {
            UiState.Loading -> UiState.Loaded
            UiState.Loaded -> UiState.Error
            UiState.Error -> UiState.Loading
        }
    },
    label = "Animated Content"
) { targetState ->
    when (targetState) {
        UiState.Loading -> {
            LoadingScreen()
        }
        UiState.Loaded -> {
            LoadedScreen()
        }
        UiState.Error -> {
            ErrorScreen()
        }
    }
}AnimationQuickGuide.kt

Figure 11.

Using AnimatedContent to animate changes between different composables (slowed down)

AnimatedContent can be customized to show many different kinds of enter and exit transitions. For more information, read the documentation on AnimatedContent or read this blog post on AnimatedContent.

Sources: [live-compose-guide-animation-quick-guide-switch-different-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#switch-different)
