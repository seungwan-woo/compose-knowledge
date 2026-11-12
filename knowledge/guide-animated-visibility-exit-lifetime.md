---
type: reference
title: "Guidance: Coordinate exit animations before removing content"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
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
compose:
  id: guide-animated-visibility-exit-lifetime
  artifact: androidx.compose.animation:animation
  fqn: androidx.compose.animation.AnimatedVisibility
  sections:
    - id: guide-animated-visibility-exit-lifetime
      title: "Guidance: Coordinate exit animations before removing content"
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.AnimatedVisibilityScope.transition
        - exit animation completion
        - content removal
        - 등장 퇴장 애니메이션
        - 콘텐츠 제거
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-compose-guide-animation-composables-modifiers-animatedvisibility-source
        - live-compose-guide-animation-composables-modifiers-animatedvisibility-add-custom-animation-source
      relatedIds:
        - live-compose-guide-animation-composables-modifiers-animatedvisibility
        - live-compose-guide-animation-composables-modifiers-animatedvisibility-add-custom-animation
---

# Guidance: Coordinate exit animations before removing content

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Coordinate exit animations before removing content

Guidance: Use AnimatedVisibility to animate content appearing and disappearing; customize enter and exit transitions and combine them with +. To add custom animation that must finish before removal, attach it to the transition exposed inside the AnimatedVisibility content lambda. AnimatedVisibility waits for animations on that Transition before removing content. Limitation: independently created exit animations, such as animate*AsState, are not tracked by that Transition, so the content may be removed before they finish.

Sources: [live-compose-guide-animation-composables-modifiers-animatedvisibility-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedvisibility), [live-compose-guide-animation-composables-modifiers-animatedvisibility-add-custom-animation-source](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedvisibility-add-custom-animation)
