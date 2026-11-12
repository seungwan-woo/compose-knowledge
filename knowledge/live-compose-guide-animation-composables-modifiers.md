---
type: reference
title: Animation modifiers and composables
description: "Public source: https://developer.android.com/develop/ui/compose/animation/composables-modifiers"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-animation-composables-modifiers-animatecontentsize-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animateContentSize
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: de3d52b795e2eaac97ba4fad9ba3b59511696c5906d1515be1b9ca6b1bf54ebc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Figure 2.

      Composable smoothly animating between a small and a larger size

      The animateContentSize modifier animates a size change.

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
  - id: live-compose-guide-animation-composables-modifiers-animatedcontent-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedcontent
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: 6d16d348ff44228f454a224b3a0513c9c5595216ad1db0d6abb64ac83e39c805
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      available for AnimatedVisibility, AnimatedContent offers slideIntoContainer and slideOutOfContainer. These are convenient alternatives to slideInHorizontally/Vertically and slideOutHorizontally/Vertically that calculate the slide distance based on the sizes of the initial content and the target content of the AnimatedContent content.

      SizeTransform defines how the size should animate between the initial and the target contents. You have access to both the initial size and the target size when you are creating the animation. SizeTransform also controls whether the content should be clipped to the component size during animations.

      var expanded by remember { mutableStateOf(false) }
      Surface(
          color = MaterialTheme.colorScheme.primary,
          onClick = { expanded = !expanded }
      ) {
          AnimatedContent(
              targetState = expanded,
              transitionSpec = {
                  fadeIn(animationSpec = tween(150, 150)) togetherWith
                      fadeOut(animationSpec = tween(150)) using
                      SizeTransform { initialSize, targetSize ->
                          if (targetState) {
                              keyframes {
                                  // Expand horizontally first.
                                  IntSize(targetSize.width, initialSize.height) at 150
                                  durationMillis = 300
                              }
                          } else {
                              keyframes {
                                  // Shrink vertically first.
                                  IntSize(initialSize.width, targetSize.height) at 150
                                  durationMillis = 300
                              }
                          }
                      }
              }, label = "size transform"
          ) { targetExpanded ->
              if (targetExpanded) {
                  Expanded()
              } else {
                  ContentIcon()
              }
          }
      }AnimationSnippets.kt
  - id: live-compose-guide-animation-composables-modifiers-animatedcontent-add-custom-animation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedcontent-add-custom-animation
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: a554d8f0579b0d8a413f662ee9db0c4225fcdc4db82c053782f886dafe07b3b7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Just like AnimatedVisibility, the transition field is available inside the content lambda of AnimatedContent. Use this to create a custom animation effect that runs simultaneously with the AnimatedContent transition. See updateTransition for the details.
  - id: live-compose-guide-animation-composables-modifiers-animatedcontent-enter-exit-for-children-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedcontent-enter-exit-for-children
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: d6a59e674fd52bf7b08b88d3c33dbe899d77430de6c07f5a6fb765f865377c46
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Just like AnimatedVisibility, the animateEnterExit modifier is available inside the content lambda of AnimatedContent. Use this to apply EnterTransition and ExitTransition to each of the direct or indirect children separately.
  - id: live-compose-guide-animation-composables-modifiers-animatedcontent-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedcontent
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: c835973955f11529ec8995eb38c41b6f1cb4d4fcced7f1593dfab36d260514e2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The AnimatedContent composable animates its content as it changes based on a target state.

      Row {
          var count by remember { mutableIntStateOf(0) }
          Button(onClick = { count++ }) {
              Text("Add")
          }
          AnimatedContent(
              targetState = count,
              label = "animated content"
          ) { targetCount ->
              // Make sure to use `targetCount`, not `count`.
              Text(text = "Count: $targetCount")
          }
      }AnimationSnippets.kt

      By default, the initial content fades out and then the target content fades in (this behavior is called fade through). You can customize this animation behavior by specifying a ContentTransform object to the transitionSpec parameter. You can create an instance of ContentTransform by combining an EnterTransition object with an ExitTransition object using the togetherWith infix function. You can apply SizeTransform to the ContentTransform object by attaching it with the using infix function.

      AnimatedContent(
          targetState = count,
          transitionSpec = {
              // Compare the incoming number with the previous number.
              if (targetState > initialState) {
                  // If the target number is larger, it slides up and fades in
                  // while the initial (smaller) number slides up and fades out.
                  slideInVertically { height -> height } + fadeIn() togetherWith
                      slideOutVertically { height -> -height } + fadeOut()
              } else {
                  // If the target number is smaller, it slides down and fades in
                  // while the initial number slides down and fades out.
                  slideInVertically { height -> -height } + fadeIn() togetherWith
                      slideOutVertically { height -> height } + fadeOut()
              }.using(
                  // Disable clipping since the faded slide-in/out should
                  // be displayed out of bounds.
                  SizeTransform(clip = false)
              )
          }, label = "animated content"
      ) { targetCount ->
          Text(text = "$targetCount")
      }AnimationSnippets.kt

      EnterTransition defines how the target content should appear, and ExitTransition defines how the initial content should disappear. In addition to all of the EnterTransition and ExitTransition functions
  - id: live-compose-guide-animation-composables-modifiers-animatedvisibility-add-custom-animation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedvisibility-add-custom-animation
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: 8076a0e337d0b7379a0f68f5f863c1d6aa7e1f6f24e8c3ab6078c5cc13c6c8c1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If you want to add custom animation effects beyond the built-in enter and exit animations, access the underlying Transition instance using the transition property inside the content lambda for AnimatedVisibility. Any animation states added to the Transition instance will run simultaneously with the enter and exit animations of AnimatedVisibility. AnimatedVisibility waits until all animations in the Transition have finished before removing its content. For exit animations created independently of Transition (such as using animate*AsState), AnimatedVisibility wouldn't be able to account for them, and therefore might remove the content composable before they finish.

      var visible by remember { mutableStateOf(true) }

      AnimatedVisibility(
          visible = visible,
          enter = fadeIn(),
          exit = fadeOut()
      ) { // this: AnimatedVisibilityScope
          // Use AnimatedVisibilityScope#transition to add a custom animation
          // to the AnimatedVisibility.
          val background by transition.animateColor(label = "color") { state ->
              if (state == EnterExitState.Visible) Color.Blue else Color.Gray
          }
          Box(
              modifier = Modifier
                  .size(128.dp)
                  .background(background)
          )
      }AnimationSnippets.kt

      To learn more about using Transition to manage animations, see Animate multiple properties simultaneously with a transition.
  - id: live-compose-guide-animation-composables-modifiers-animatedvisibility-enter-exit-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedvisibility-enter-exit
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: c56a5784a43de9111ee1d4990c040bbe80fbd547a3694e15b033872652e8e297
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Content within AnimatedVisibility (direct or indirect children) can use the animateEnterExit modifier to specify different animation behavior for each of them. The visual effect for each of these children is a combination of the animations specified at the AnimatedVisibility composable and the child's own enter and exit animations.

      var visible by remember { mutableStateOf(true) }

      AnimatedVisibility(
          visible = visible,
          enter = fadeIn(),
          exit = fadeOut()
      ) {
          // Fade in/out the background and the foreground.
          Box(
              Modifier
                  .fillMaxSize()
                  .background(Color.DarkGray)
          ) {
              Box(
                  Modifier
                      .align(Alignment.Center)
                      .animateEnterExit(
                          // Slide in/out the inner box.
                          enter = slideInVertically(),
                          exit = slideOutVertically()
                      )
                      .sizeIn(minWidth = 256.dp, minHeight = 64.dp)
                      .background(Color.Red)
              ) {
                  // Content of the notification…
              }
          }
      }AnimationSnippets.kt

      In some cases, you may want to have AnimatedVisibility apply no animations at all so that children can each have their own distinct animations by animateEnterExit. To achieve this, specify EnterTransition.None and ExitTransition.None at the AnimatedVisibility composable.
  - id: live-compose-guide-animation-composables-modifiers-animatedvisibility-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedvisibility
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: 61cb0b1bab81f42f3a061b4459759372b23a466f6e757331729853970419734d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Figure 1.

      Animating the appearance and disappearance of an item in a column.

      The AnimatedVisibility composable animates the appearance and disappearance of its content.

      var visible by remember {
          mutableStateOf(true)
      }
      // Animated visibility will eventually remove the item from the composition once the animation has finished.
      AnimatedVisibility(visible) {
          // your composable here
          // ...
      }AnimationQuickGuide.kt

      By default, the content appears by fading in and expanding, and it disappears by fading out and shrinking. Customize this transition by specifying EnterTransition and ExitTransition objects.

      var visible by remember { mutableStateOf(true) }
      val density = LocalDensity.current
      AnimatedVisibility(
          visible = visible,
          enter = slideInVertically {
              // Slide in from 40 dp from the top.
              with(density) { -40.dp.roundToPx() }
          } + expandVertically(
              // Expand from the top.
              expandFrom = Alignment.Top
          ) + fadeIn(
              // Fade in with the initial alpha of 0.3f.
              initialAlpha = 0.3f
          ),
          exit = slideOutVertically() + shrinkVertically() + fadeOut()
      ) {
          Text(
              "Hello",
              Modifier
                  .fillMaxWidth()
                  .height(200.dp)
          )
      }AnimationSnippets.kt

      As shown in the preceding example, you can combine multiple EnterTransition or ExitTransition objects with a + operator, and each accepts optional parameters to customize its behavior. See the reference pages for more information.
  - id: live-compose-guide-animation-composables-modifiers-animation-modifiers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animation-modifiers
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: 7a6d0407318b8cb3dc9bb0d06eca8f064da33ee620469b1baea0c1998ef2806c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Compose provides modifiers for animating specific changes directly on composables.
  - id: live-compose-guide-animation-composables-modifiers-built-in-animated-composables-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#built-in-animated-composables
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: 78b86730621760c8e5556b336ad3552cda7b36f25467d12855fa6a344e787acd
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Compose provides several composables that animate content appearance, disappearance, and layout changes.
  - id: live-compose-guide-animation-composables-modifiers-crossfade-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#crossfade
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: 2e75ecd5903f43fb588900bf8482afd60c3c5f7191d51011e5612f066361d7ba
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Crossfade animates between two layouts with a crossfade animation. By toggling the value passed to the targetState parameter, the content is switched with a crossfade animation.

      var currentPage by remember { mutableStateOf("A") }
      Crossfade(targetState = currentPage, label = "cross fade") { screen ->
          when (screen) {
              "A" -> Text("Page A")
              "B" -> Text("Page B")
          }
      }AnimationSnippets.kt
  - id: live-compose-guide-animation-composables-modifiers-enter-exit-transition-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#enter-exit-transition
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: 84aa904be0bb5ef2957f9be9be9b5ecaa2f97efbb2eae33a50682ffb2f40a432
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      EnterTransition ExitTransition fadeIn fadeOut slideIn slideOut slideInHorizontally slideOutHorizontally slideInVertically slideOutVertically scaleIn scaleOut expandIn shrinkOut expandHorizontally shrinkHorizontally expandVertically shrinkVertically

      AnimatedVisibility also offers a variant that takes a MutableTransitionState argument. This lets you trigger an animation as soon as the AnimatedVisibility composable is added to the composition tree. It is also useful for observing the animation state.

      // Create a MutableTransitionState<Boolean> for the AnimatedVisibility.
      val state = remember {
          MutableTransitionState(false).apply {
              // Start the animation immediately.
              targetState = true
          }
      }
      Column {
          AnimatedVisibility(visibleState = state) {
              Text(text = "Hello, world!")
          }

          // Use the MutableTransitionState to know the current animation state
          // of the AnimatedVisibility.
          Text(
              text = when {
                  state.isIdle && state.currentState -> "Visible"
                  !state.isIdle && state.currentState -> "Disappearing"
                  state.isIdle && !state.currentState -> "Invisible"
                  else -> "Appearing"
              }
          )
      }AnimationSnippets.kt
  - id: live-compose-guide-animation-composables-modifiers-list-item-animations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#list-item-animations
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: 44ca30ade8c484cd2f09a2d1fd35a94215724de195a1fe6ffca9757959b171f9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: If you are looking to animate item reorderings inside a Lazy list or grid, take a look at the Lazy layout item animation documentation.
  - id: live-compose-guide-animation-composables-modifiers-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#main-content
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: dae604f608a7eb9478f65e19c6ad33021a123f45c9f9b6d6772bb2839559e978
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Compose comes with built-in composables and modifiers for handling common animation use cases.
  - id: live-compose-guide-animation-composables-modifiers-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/composables-modifiers#recommended_for_you
    revision: web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020
    sha256: 057d5f4e7283da0447ca97181de749e6c375c49e458aecb7bcc06863419298c3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Value-based animations

      Animations in Compose

      Animation tooling support {:#tooling}
compose:
  id: live-compose-guide-animation-composables-modifiers
  artifact: androidx.compose.animation:animation
  fqn: androidx.compose.animation
  sections:
    - id: live-compose-guide-animation-composables-modifiers-animatecontentsize
      title: Animate composable size changes
      aliases:
        - androidx.compose.animation.animateContentSize
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-animatecontentsize-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-animatedcontent
      title: Animate based on target state
      aliases:
        - androidx.compose.animation.AnimatedContent
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-animatedcontent-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-animatedcontent-2
      title: Animate based on target state
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.AnimatedContent
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-animatedcontent-2-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-animatedcontent-add-custom-animation
      title: Add custom animation
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.AnimatedContent
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-animatedcontent-add-custom-animation-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-animatedcontent-enter-exit-for-children
      title: Animate child enter and exit transitions
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.AnimatedContent
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-animatedcontent-enter-exit-for-children-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-animatedvisibility
      title: Animate appearance and disappearance
      aliases:
        - androidx.compose.animation.AnimatedVisibility
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-animatedvisibility-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-animatedvisibility-add-custom-animation
      title: Add custom animation
      aliases:
        - androidx.compose.animation.AnimatedVisibility
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-animatedvisibility-add-custom-animation-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-animatedvisibility-enter-exit
      title: Animate enter and exit for children
      aliases:
        - androidx.compose.animation.AnimatedVisibility
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-animatedvisibility-enter-exit-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-animation-modifiers
      title: Built-in animation modifiers
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-animation-modifiers-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-built-in-animated-composables
      title: Built-in animated composables
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-built-in-animated-composables-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-crossfade
      title: Animate between two layouts
      aliases:
        - androidx.compose.animation.Crossfade
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-crossfade-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-enter-exit-transition
      title: Enter and exit transition examples
      aliases:
        - androidx.compose.animation.AnimatedVisibility
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-enter-exit-transition-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-list-item-animations
      title: List item animations
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-list-item-animations-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-main-content-source
      relatedIds: []
    - id: live-compose-guide-animation-composables-modifiers-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-recommended-for-you-source
      relatedIds: []
---

# Animation modifiers and composables

Public source: https://developer.android.com/develop/ui/compose/animation/composables-modifiers

## Animate composable size changes

Figure 2.

Composable smoothly animating between a small and a larger size

The animateContentSize modifier animates a size change.

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

Sources: [live-compose-guide-animation-composables-modifiers-animatecontentsize-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animateContentSize)

## Animate based on target state

The AnimatedContent composable animates its content as it changes based on a target state.

Row {
    var count by remember { mutableIntStateOf(0) }
    Button(onClick = { count++ }) {
        Text("Add")
    }
    AnimatedContent(
        targetState = count,
        label = "animated content"
    ) { targetCount ->
        // Make sure to use `targetCount`, not `count`.
        Text(text = "Count: $targetCount")
    }
}AnimationSnippets.kt

By default, the initial content fades out and then the target content fades in (this behavior is called fade through). You can customize this animation behavior by specifying a ContentTransform object to the transitionSpec parameter. You can create an instance of ContentTransform by combining an EnterTransition object with an ExitTransition object using the togetherWith infix function. You can apply SizeTransform to the ContentTransform object by attaching it with the using infix function.

AnimatedContent(
    targetState = count,
    transitionSpec = {
        // Compare the incoming number with the previous number.
        if (targetState > initialState) {
            // If the target number is larger, it slides up and fades in
            // while the initial (smaller) number slides up and fades out.
            slideInVertically { height -> height } + fadeIn() togetherWith
                slideOutVertically { height -> -height } + fadeOut()
        } else {
            // If the target number is smaller, it slides down and fades in
            // while the initial number slides down and fades out.
            slideInVertically { height -> -height } + fadeIn() togetherWith
                slideOutVertically { height -> height } + fadeOut()
        }.using(
            // Disable clipping since the faded slide-in/out should
            // be displayed out of bounds.
            SizeTransform(clip = false)
        )
    }, label = "animated content"
) { targetCount ->
    Text(text = "$targetCount")
}AnimationSnippets.kt

EnterTransition defines how the target content should appear, and ExitTransition defines how the initial content should disappear. In addition to all of the EnterTransition and ExitTransition functions

Sources: [live-compose-guide-animation-composables-modifiers-animatedcontent-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedcontent)

## Animate based on target state

available for AnimatedVisibility, AnimatedContent offers slideIntoContainer and slideOutOfContainer. These are convenient alternatives to slideInHorizontally/Vertically and slideOutHorizontally/Vertically that calculate the slide distance based on the sizes of the initial content and the target content of the AnimatedContent content.

SizeTransform defines how the size should animate between the initial and the target contents. You have access to both the initial size and the target size when you are creating the animation. SizeTransform also controls whether the content should be clipped to the component size during animations.

var expanded by remember { mutableStateOf(false) }
Surface(
    color = MaterialTheme.colorScheme.primary,
    onClick = { expanded = !expanded }
) {
    AnimatedContent(
        targetState = expanded,
        transitionSpec = {
            fadeIn(animationSpec = tween(150, 150)) togetherWith
                fadeOut(animationSpec = tween(150)) using
                SizeTransform { initialSize, targetSize ->
                    if (targetState) {
                        keyframes {
                            // Expand horizontally first.
                            IntSize(targetSize.width, initialSize.height) at 150
                            durationMillis = 300
                        }
                    } else {
                        keyframes {
                            // Shrink vertically first.
                            IntSize(initialSize.width, targetSize.height) at 150
                            durationMillis = 300
                        }
                    }
                }
        }, label = "size transform"
    ) { targetExpanded ->
        if (targetExpanded) {
            Expanded()
        } else {
            ContentIcon()
        }
    }
}AnimationSnippets.kt

Sources: [live-compose-guide-animation-composables-modifiers-animatedcontent-2-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedcontent)

## Add custom animation

Just like AnimatedVisibility, the transition field is available inside the content lambda of AnimatedContent. Use this to create a custom animation effect that runs simultaneously with the AnimatedContent transition. See updateTransition for the details.

Sources: [live-compose-guide-animation-composables-modifiers-animatedcontent-add-custom-animation-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedcontent-add-custom-animation)

## Animate child enter and exit transitions

Just like AnimatedVisibility, the animateEnterExit modifier is available inside the content lambda of AnimatedContent. Use this to apply EnterTransition and ExitTransition to each of the direct or indirect children separately.

Sources: [live-compose-guide-animation-composables-modifiers-animatedcontent-enter-exit-for-children-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedcontent-enter-exit-for-children)

## Animate appearance and disappearance

Figure 1.

Animating the appearance and disappearance of an item in a column.

The AnimatedVisibility composable animates the appearance and disappearance of its content.

var visible by remember {
    mutableStateOf(true)
}
// Animated visibility will eventually remove the item from the composition once the animation has finished.
AnimatedVisibility(visible) {
    // your composable here
    // ...
}AnimationQuickGuide.kt

By default, the content appears by fading in and expanding, and it disappears by fading out and shrinking. Customize this transition by specifying EnterTransition and ExitTransition objects.

var visible by remember { mutableStateOf(true) }
val density = LocalDensity.current
AnimatedVisibility(
    visible = visible,
    enter = slideInVertically {
        // Slide in from 40 dp from the top.
        with(density) { -40.dp.roundToPx() }
    } + expandVertically(
        // Expand from the top.
        expandFrom = Alignment.Top
    ) + fadeIn(
        // Fade in with the initial alpha of 0.3f.
        initialAlpha = 0.3f
    ),
    exit = slideOutVertically() + shrinkVertically() + fadeOut()
) {
    Text(
        "Hello",
        Modifier
            .fillMaxWidth()
            .height(200.dp)
    )
}AnimationSnippets.kt

As shown in the preceding example, you can combine multiple EnterTransition or ExitTransition objects with a + operator, and each accepts optional parameters to customize its behavior. See the reference pages for more information.

Sources: [live-compose-guide-animation-composables-modifiers-animatedvisibility-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedvisibility)

## Add custom animation

If you want to add custom animation effects beyond the built-in enter and exit animations, access the underlying Transition instance using the transition property inside the content lambda for AnimatedVisibility. Any animation states added to the Transition instance will run simultaneously with the enter and exit animations of AnimatedVisibility. AnimatedVisibility waits until all animations in the Transition have finished before removing its content. For exit animations created independently of Transition (such as using animate*AsState), AnimatedVisibility wouldn't be able to account for them, and therefore might remove the content composable before they finish.

var visible by remember { mutableStateOf(true) }

AnimatedVisibility(
    visible = visible,
    enter = fadeIn(),
    exit = fadeOut()
) { // this: AnimatedVisibilityScope
    // Use AnimatedVisibilityScope#transition to add a custom animation
    // to the AnimatedVisibility.
    val background by transition.animateColor(label = "color") { state ->
        if (state == EnterExitState.Visible) Color.Blue else Color.Gray
    }
    Box(
        modifier = Modifier
            .size(128.dp)
            .background(background)
    )
}AnimationSnippets.kt

To learn more about using Transition to manage animations, see Animate multiple properties simultaneously with a transition.

Sources: [live-compose-guide-animation-composables-modifiers-animatedvisibility-add-custom-animation-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedvisibility-add-custom-animation)

## Animate enter and exit for children

Content within AnimatedVisibility (direct or indirect children) can use the animateEnterExit modifier to specify different animation behavior for each of them. The visual effect for each of these children is a combination of the animations specified at the AnimatedVisibility composable and the child's own enter and exit animations.

var visible by remember { mutableStateOf(true) }

AnimatedVisibility(
    visible = visible,
    enter = fadeIn(),
    exit = fadeOut()
) {
    // Fade in/out the background and the foreground.
    Box(
        Modifier
            .fillMaxSize()
            .background(Color.DarkGray)
    ) {
        Box(
            Modifier
                .align(Alignment.Center)
                .animateEnterExit(
                    // Slide in/out the inner box.
                    enter = slideInVertically(),
                    exit = slideOutVertically()
                )
                .sizeIn(minWidth = 256.dp, minHeight = 64.dp)
                .background(Color.Red)
        ) {
            // Content of the notification…
        }
    }
}AnimationSnippets.kt

In some cases, you may want to have AnimatedVisibility apply no animations at all so that children can each have their own distinct animations by animateEnterExit. To achieve this, specify EnterTransition.None and ExitTransition.None at the AnimatedVisibility composable.

Sources: [live-compose-guide-animation-composables-modifiers-animatedvisibility-enter-exit-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedvisibility-enter-exit)

## Built-in animation modifiers

Compose provides modifiers for animating specific changes directly on composables.

Sources: [live-compose-guide-animation-composables-modifiers-animation-modifiers-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animation-modifiers)

## Built-in animated composables

Compose provides several composables that animate content appearance, disappearance, and layout changes.

Sources: [live-compose-guide-animation-composables-modifiers-built-in-animated-composables-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#built-in-animated-composables)

## Animate between two layouts

Crossfade animates between two layouts with a crossfade animation. By toggling the value passed to the targetState parameter, the content is switched with a crossfade animation.

var currentPage by remember { mutableStateOf("A") }
Crossfade(targetState = currentPage, label = "cross fade") { screen ->
    when (screen) {
        "A" -> Text("Page A")
        "B" -> Text("Page B")
    }
}AnimationSnippets.kt

Sources: [live-compose-guide-animation-composables-modifiers-crossfade-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#crossfade)

## Enter and exit transition examples

EnterTransition ExitTransition fadeIn fadeOut slideIn slideOut slideInHorizontally slideOutHorizontally slideInVertically slideOutVertically scaleIn scaleOut expandIn shrinkOut expandHorizontally shrinkHorizontally expandVertically shrinkVertically

AnimatedVisibility also offers a variant that takes a MutableTransitionState argument. This lets you trigger an animation as soon as the AnimatedVisibility composable is added to the composition tree. It is also useful for observing the animation state.

// Create a MutableTransitionState<Boolean> for the AnimatedVisibility.
val state = remember {
    MutableTransitionState(false).apply {
        // Start the animation immediately.
        targetState = true
    }
}
Column {
    AnimatedVisibility(visibleState = state) {
        Text(text = "Hello, world!")
    }

    // Use the MutableTransitionState to know the current animation state
    // of the AnimatedVisibility.
    Text(
        text = when {
            state.isIdle && state.currentState -> "Visible"
            !state.isIdle && state.currentState -> "Disappearing"
            state.isIdle && !state.currentState -> "Invisible"
            else -> "Appearing"
        }
    )
}AnimationSnippets.kt

Sources: [live-compose-guide-animation-composables-modifiers-enter-exit-transition-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#enter-exit-transition)

## List item animations

If you are looking to animate item reorderings inside a Lazy list or grid, take a look at the Lazy layout item animation documentation.

Sources: [live-compose-guide-animation-composables-modifiers-list-item-animations-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#list-item-animations)

## Introduction

Compose comes with built-in composables and modifiers for handling common animation use cases.

Sources: [live-compose-guide-animation-composables-modifiers-main-content-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Value-based animations

Animations in Compose

Animation tooling support {:#tooling}

Sources: [live-compose-guide-animation-composables-modifiers-recommended-for-you-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#recommended_for_you)
