---
type: reference
title: "Guidance: Animate a float toward changing targets"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-animation-value-based-animate-as-state-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/value-based#animate-as-state
    revision: web:compose-guide-animation-value-based:content@sha256:710a628250ab278df97358f99cedf98db2fefad109909956223f98c3591c4591
    sha256: d6e12445c1fa3f3c84b9fcd27d4dbba32f11abe4db18d39c814b36f2fbedd7de
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The animate*AsState functions are straightforward animation APIs in Compose for animating a single value. You provide only the target value (or end value), and the API starts animation from the current value to the specified value.

      The following example animates alpha using this API. By wrapping the target value in animateFloatAsState, the alpha value is now an animation value between the provided values (1f or 0.5f in this case).

      var enabled by remember { mutableStateOf(true) }

      val animatedAlpha: Float by animateFloatAsState(if (enabled) 1f else 0.5f, label = "alpha")
      Box(
          Modifier
              .fillMaxSize()
              .graphicsLayer { alpha = animatedAlpha }
              .background(Color.Red)
      )AnimationSnippets.kt

      You don't need to create an instance of any animation class or handle interruption. Under the hood, an animation object (namely, an Animatable instance) will be created and remembered at the call site, with the first target value as its initial value. From there on, any time you supply this composable a different target value, an animation is automatically started towards that value. If there's already an animation in flight, the animation starts from its current value (and velocity) and animates toward the target value. During the animation, this composable gets recomposed and returns an updated animation value every frame.

      By default, Compose provides animate*AsState functions for Float, Color, Dp, Size, Offset, Rect, Int, IntOffset, and IntSize. You can add support for other data types by providing a TwoWayConverter to animateValueAsState that takes a generic type.

      You can customize the animation specifications by providing an AnimationSpec. See AnimationSpec for more information.
compose:
  id: guide-animate-float-target-changes
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core.animateFloatAsState
  sections:
    - id: guide-animate-float-target-changes
      title: "Guidance: Animate a float toward changing targets"
      aliases:
        - androidx.compose.animation.core.animateFloatAsState
        - androidx.compose.animation.core.animateValueAsState
        - androidx.compose.animation.core.TwoWayConverter
        - animation interruption
        - target value animation
        - 값 애니메이션
        - 애니메이션 목표 변경
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-value-based-animate-as-state-source
      relatedIds:
        - live-compose-guide-animation-value-based-animate-as-state
---

# Guidance: Animate a float toward changing targets

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Animate a float toward changing targets

Guidance: Use animateFloatAsState for a single animated float: supply the target and read the returned animation value, such as an alpha changing between 1f and 0.5f. The first target becomes the initial value; later target changes start animation automatically. If a target changes during animation, it continues toward the new target from the current value and velocity. Customize timing with an AnimationSpec. Limitation: this API animates one value; other data types need a corresponding animate*AsState API or animateValueAsState with a TwoWayConverter.

Sources: [live-compose-guide-animation-value-based-animate-as-state-source](https://developer.android.com/develop/ui/compose/animation/value-based#animate-as-state)
