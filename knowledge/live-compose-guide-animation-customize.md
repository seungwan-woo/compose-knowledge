---
type: reference
title: Customize animations
description: "Public source: https://developer.android.com/develop/ui/compose/animation/customize"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-animation-customize-animationspec-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/customize#animationspec
    revision: web:compose-guide-animation-customize:content@sha256:0cb123330c12f156b93cf9a273f100b251a9ad61398439dc34b14053941065f0
    sha256: d6d8b69100f8646df5d924acc503ff8d44ffcd03f4f4dbaf75b56d457b4114ba
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Most animation APIs allow developers to customize animation specifications by an optional AnimationSpec parameter.

      val alpha: Float by animateFloatAsState(
          targetValue = if (enabled) 1f else 0.5f,
          // Configure the animation duration and easing.
          animationSpec = tween(durationMillis = 300, easing = FastOutSlowInEasing),
          label = "alpha"
      )AnimationSnippets.kt

      There are different kinds of AnimationSpec for creating different types of animation.
  - id: live-compose-guide-animation-customize-animationvector-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/customize#animationvector
    revision: web:compose-guide-animation-customize:content@sha256:0cb123330c12f156b93cf9a273f100b251a9ad61398439dc34b14053941065f0
    sha256: 2f16e435e02f14d5e7c5526aecc3ce203bbb296e967c749cf5b453e368fd8111
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      VectorConverters:

      Color.VectorConverter

      Dp.VectorConverter

      Offset.VectorConverter

      Int.VectorConverter

      Float.VectorConverter

      IntSize.VectorConverter
  - id: live-compose-guide-animation-customize-animationvector-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/customize#animationvector
    revision: web:compose-guide-animation-customize:content@sha256:0cb123330c12f156b93cf9a273f100b251a9ad61398439dc34b14053941065f0
    sha256: cd1ed08330f81e514a677e80a7037fb675a483eed71b65f24d5a4e9c12e1d10f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Most Compose animation APIs support Float, Color, Dp, and other basic data types as animation values by default, but you sometimes need to animate other data types including your custom ones. During animation, any animating value is represented as an AnimationVector. The value is converted into an AnimationVector and vice versa by a corresponding TwoWayConverter so that the core animation system can handle them uniformly. For example, an Int is represented as an AnimationVector1D that holds a single float value. TwoWayConverter for Int looks like this:

      val IntToVector: TwoWayConverter<Int, AnimationVector1D> =
          TwoWayConverter({ AnimationVector1D(it.toFloat()) }, { it.value.toInt() })AnimationSnippets.kt

      Color is essentially a set of 4 values, red, green, blue, and alpha, so Color is converted into an AnimationVector4D that holds 4 float values. In this manner, every data type used in animations is converted to either AnimationVector1D, AnimationVector2D, AnimationVector3D, or AnimationVector4D depending on its dimensionality. This allows different components of the object to be animated independently, each with their own velocity tracking. Built-in converters for basic data types can be accessed using converters such as Color.VectorConverter or Dp.VectorConverter.

      When you want to add support for a new data type as an animating value, you can create your own TwoWayConverter and provide it to the API. For example, you can use animateValueAsState to animate your custom data type like this:

      data class MySize(val width: Dp, val height: Dp)

      @Composable
      fun MyAnimation(targetSize: MySize) {
          val animSize: MySize by animateValueAsState(
              targetSize,
              TwoWayConverter(
                  convertToVector = { size: MySize ->
                      // Extract a float value from each of the `Dp` fields.
                      AnimationVector2D(size.width.value, size.height.value)
                  },
                  convertFromVector = { vector: AnimationVector2D ->
                      MySize(vector.v1.dp, vector.v2.dp)
                  }
              ),
              label = "size"
          )
      }AnimationSnippets.kt

      The following list includes some built-in
  - id: live-compose-guide-animation-customize-easing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/customize#easing
    revision: web:compose-guide-animation-customize:content@sha256:0cb123330c12f156b93cf9a273f100b251a9ad61398439dc34b14053941065f0
    sha256: 82478942bb6c089c27662a7865f26067347b1d6b29171632fe30e0b8b0f15207
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Duration-based AnimationSpec operations (such as tween or keyframes) use Easing to adjust an animation's fraction. This allows the animating value to speed up and slow down, rather than moving at a constant rate. Fraction is a value between 0 (start) and 1.0 (end) indicating the current point in the animation.

      Easing is in fact a function that takes a fraction value between 0 and 1.0 and returns a float. The returned value can be outside the boundary to represent overshoot or undershoot. A custom Easing can be created like the code below.

      val CustomEasing = Easing { fraction -> fraction * fraction }

      @Composable
      fun EasingUsage() {
          val value by animateFloatAsState(
              targetValue = 1f,
              animationSpec = tween(
                  durationMillis = 300,
                  easing = CustomEasing
              ),
              label = "custom easing"
          )
          // ……
      }AnimationSnippets.kt

      Compose provides several built-in Easing functions that cover most use cases. See Speed - Material Design for more information about what Easing to use depending on your scenario.

      FastOutSlowInEasing

      LinearOutSlowInEasing

      FastOutLinearInEasing

      LinearEasing

      CubicBezierEasing

      See more
  - id: live-compose-guide-animation-customize-infiniterepeatable-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/customize#infiniterepeatable
    revision: web:compose-guide-animation-customize:content@sha256:0cb123330c12f156b93cf9a273f100b251a9ad61398439dc34b14053941065f0
    sha256: 4e8be61ee99813d7187d85b725a891bf680418420db3857145cf6d8894ad15a3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      infiniteRepeatable is like repeatable, but it repeats for an infinite amount of iterations.

      val value by animateFloatAsState(
          targetValue = 1f,
          animationSpec = infiniteRepeatable(
              animation = tween(durationMillis = 300),
              repeatMode = RepeatMode.Reverse
          ),
          label = "infinite repeatable"
      )AnimationSnippets.kt

      In tests using ComposeTestRule, animations using infiniteRepeatable are not run. The component will be rendered using the initial value of each animated value.
  - id: live-compose-guide-animation-customize-keyframes-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/customize#keyframes
    revision: web:compose-guide-animation-customize:content@sha256:0cb123330c12f156b93cf9a273f100b251a9ad61398439dc34b14053941065f0
    sha256: 5c1eb4e4242ce96de820752ccd088e03b2a93c9802ba26b458a0cde9a3d5bffb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      keyframes animates based on the snapshot values specified at different timestamps in the duration of the animation. At any given time, the animation value will be interpolated between two keyframe values. For each of these keyframes, Easing can be specified to determine the interpolation curve.

      It is optional to specify the values at 0 ms and at the duration time. If you do not specify these values, they default to the start and end values of the animation, respectively.

      val value by animateFloatAsState(
          targetValue = 1f,
          animationSpec = keyframes {
              durationMillis = 375
              0.0f at 0 using LinearOutSlowInEasing // for 0-15 ms
              0.2f at 15 using FastOutLinearInEasing // for 15-75 ms
              0.4f at 75 // ms
              0.4f at 225 // ms
          },
          label = "keyframe"
      )AnimationSnippets.kt
  - id: live-compose-guide-animation-customize-keyframes-with-splines-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/customize#keyframes-with-splines
    revision: web:compose-guide-animation-customize:content@sha256:0cb123330c12f156b93cf9a273f100b251a9ad61398439dc34b14053941065f0
    sha256: 56dca089c40e4fe71c8476f3daeaa9dc4c9a8c9f15e8ee5501df5ad8444c3fb3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To create an animation that follows a smooth curve as it transitions between values, you can use keyframesWithSpline instead of keyframes animation specs.

      val offset by animateOffsetAsState(
          targetValue = Offset(300f, 300f),
          animationSpec = keyframesWithSpline {
              durationMillis = 6000
              Offset(0f, 0f) at 0
              Offset(150f, 200f) atFraction 0.5f
              Offset(0f, 100f) atFraction 0.7f
          }
      )AnimationSnippets.kt

      Spline-based keyframes are particularly useful for 2D movement of items on screen.

      The following videos showcase the differences between keyframes and keyframesWithSpline given the same set of x, y coordinates that a circle should follow.

      keyframes keyframesWithSpline

      As you can see, the spline-based keyframes offer smoother transitions between points, as they use bezier curves to smoothly animate between items. This spec is useful for a preset animation. However, if you're working with user-driven points, it's preferable to use springs to achieve a similar smoothness between points because those are interruptible.
  - id: live-compose-guide-animation-customize-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/customize#main-content
    revision: web:compose-guide-animation-customize:content@sha256:0cb123330c12f156b93cf9a273f100b251a9ad61398439dc34b14053941065f0
    sha256: a682bc1f3a32e0b3281bfeb418e0a93dc6ddacb1da5cec80f768fbb141d0cca3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Many of the Animation APIs commonly accept parameters for customizing their behavior.
  - id: live-compose-guide-animation-customize-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/customize#recommended_for_you
    revision: web:compose-guide-animation-customize:content@sha256:0cb123330c12f156b93cf9a273f100b251a9ad61398439dc34b14053941065f0
    sha256: 2014e7437bc8c5e8c374d37908504062b70a7be5d350faaab12b28d1de383907
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Value-based animations

      Iterative code development

      Animations in Compose
  - id: live-compose-guide-animation-customize-repeatable-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/customize#repeatable
    revision: web:compose-guide-animation-customize:content@sha256:0cb123330c12f156b93cf9a273f100b251a9ad61398439dc34b14053941065f0
    sha256: 7d8350b7b2823e66575311cde2d4fd9bf03dfbc9518fdc0fe31594d709519022
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      repeatable runs a duration-based animation (such as tween or keyframes) repeatedly until it reaches the specified iteration count. You can pass the repeatMode parameter to specify whether the animation should repeat by starting from the beginning (RepeatMode.Restart) or from the end (RepeatMode.Reverse).

      val value by animateFloatAsState(
          targetValue = 1f,
          animationSpec = repeatable(
              iterations = 3,
              animation = tween(durationMillis = 300),
              repeatMode = RepeatMode.Reverse
          ),
          label = "repeatable spec"
      )AnimationSnippets.kt
  - id: live-compose-guide-animation-customize-snap-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/customize#snap
    revision: web:compose-guide-animation-customize:content@sha256:0cb123330c12f156b93cf9a273f100b251a9ad61398439dc34b14053941065f0
    sha256: 315810c82e984cff741096e59349b33d88a356713734ea5e782a116577adcf0e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      snap is a special AnimationSpec that immediately switches the value to the end value. You can specify delayMillis in order to delay the start of the animation.

      val value by animateFloatAsState(
          targetValue = 1f,
          animationSpec = snap(delayMillis = 50),
          label = "snap spec"
      )AnimationSnippets.kt
  - id: live-compose-guide-animation-customize-spring-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/customize#spring
    revision: web:compose-guide-animation-customize:content@sha256:0cb123330c12f156b93cf9a273f100b251a9ad61398439dc34b14053941065f0
    sha256: 20195b348ba8e02509fa1d86ace490731a580f4a2ba70da19c6b1010a17f8074
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      spring creates a physics-based animation between start and end values. It takes 2 parameters: dampingRatio and stiffness.

      dampingRatio defines how bouncy the spring should be. The default value is Spring.DampingRatioNoBouncy.

      Figure 1

      . Setting different spring damping ratios.

      stiffness defines how fast the spring should move toward the end value. The default value is Spring.StiffnessMedium.

      Figure 2

      . Setting different spring stiffness.

      val value by animateFloatAsState(
          targetValue = 1f,
          animationSpec = spring(
              dampingRatio = Spring.DampingRatioHighBouncy,
              stiffness = Spring.StiffnessMedium
          ),
          label = "spring spec"
      )AnimationSnippets.kt

      spring can handle interruptions more smoothly than duration-based AnimationSpec types because it guarantees the continuity of velocity when target value changes amid animations. spring is used as the default AnimationSpec by many animation APIs, such as animate*AsState and updateTransition.

      For example, if we apply a spring config to the following animation that is driven by user touch, when interrupting the animation as it is progressing, you can see that using tween doesn't respond as smoothly as using spring.

      Figure 3

      . Setting

      tween

      versus

      spring

      specs for animation, and interrupting it.
  - id: live-compose-guide-animation-customize-tween-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/customize#tween
    revision: web:compose-guide-animation-customize:content@sha256:0cb123330c12f156b93cf9a273f100b251a9ad61398439dc34b14053941065f0
    sha256: fa35c519da2e45636f972f3058721c0cda0cb98bf3d7df9d027137dac87effbf
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      tween animates between start and end values over the specified durationMillis using an easing curve. tween is short for the word between - as it goes between two values.

      You can also specify delayMillis to postpone the start of the animation.

      val value by animateFloatAsState(
          targetValue = 1f,
          animationSpec = tween(
              durationMillis = 300,
              delayMillis = 50,
              easing = LinearOutSlowInEasing
          ),
          label = "tween delay"
      )AnimationSnippets.kt

      See Easing for more information.
compose:
  id: live-compose-guide-animation-customize
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core
  sections:
    - id: live-compose-guide-animation-customize-animationspec
      title: Customize animations with the AnimationSpec parameter
      aliases:
        - androidx.compose.animation.core.tween
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-customize-animationspec-source
      relatedIds: []
    - id: live-compose-guide-animation-customize-animationvector
      title: Animate custom data types by converting to and from AnimationVector
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-customize-animationvector-source
      relatedIds: []
    - id: live-compose-guide-animation-customize-animationvector-2
      title: Animate custom data types by converting to and from AnimationVector
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-customize-animationvector-2-source
      relatedIds: []
    - id: live-compose-guide-animation-customize-easing
      title: Set a custom easing function
      aliases:
        - androidx.compose.animation.core.tween
        - androidx.compose.animation.core.keyframes
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-customize-easing-source
      relatedIds: []
    - id: live-compose-guide-animation-customize-infiniterepeatable
      title: Repeat an animation infinitely with infiniteRepeatable
      aliases:
        - androidx.compose.animation.core.tween
        - androidx.compose.animation.core.repeatable
        - androidx.compose.animation.core.infiniteRepeatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-customize-infiniterepeatable-source
      relatedIds: []
    - id: live-compose-guide-animation-customize-keyframes
      title: Animate to specific values at certain timings with keyframes
      aliases:
        - androidx.compose.animation.core.keyframes
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-customize-keyframes-source
      relatedIds: []
    - id: live-compose-guide-animation-customize-keyframes-with-splines
      title: Animate between keyframes smoothly with keyframesWithSpline
      aliases:
        - androidx.compose.animation.core.keyframes
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-customize-keyframes-with-splines-source
      relatedIds: []
    - id: live-compose-guide-animation-customize-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-customize-main-content-source
      relatedIds: []
    - id: live-compose-guide-animation-customize-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-customize-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-animation-customize-repeatable
      title: Repeat an animation with repeatable
      aliases:
        - androidx.compose.animation.core.tween
        - androidx.compose.animation.core.keyframes
        - androidx.compose.animation.core.repeatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-customize-repeatable-source
      relatedIds: []
    - id: live-compose-guide-animation-customize-snap
      title: Immediately snap to end value with snap
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-customize-snap-source
      relatedIds: []
    - id: live-compose-guide-animation-customize-spring
      title: Create physics-based animation with spring
      aliases:
        - androidx.compose.animation.core.spring
        - androidx.compose.animation.core.tween
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-customize-spring-source
      relatedIds: []
    - id: live-compose-guide-animation-customize-tween
      title: Animate between start and end values with easing curve with tween
      aliases:
        - androidx.compose.animation.core.tween
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-customize-tween-source
      relatedIds: []
---

# Customize animations

Public source: https://developer.android.com/develop/ui/compose/animation/customize

## Customize animations with the AnimationSpec parameter

Most animation APIs allow developers to customize animation specifications by an optional AnimationSpec parameter.

val alpha: Float by animateFloatAsState(
    targetValue = if (enabled) 1f else 0.5f,
    // Configure the animation duration and easing.
    animationSpec = tween(durationMillis = 300, easing = FastOutSlowInEasing),
    label = "alpha"
)AnimationSnippets.kt

There are different kinds of AnimationSpec for creating different types of animation.

Sources: [live-compose-guide-animation-customize-animationspec-source](https://developer.android.com/develop/ui/compose/animation/customize#animationspec)

## Animate custom data types by converting to and from AnimationVector

Most Compose animation APIs support Float, Color, Dp, and other basic data types as animation values by default, but you sometimes need to animate other data types including your custom ones. During animation, any animating value is represented as an AnimationVector. The value is converted into an AnimationVector and vice versa by a corresponding TwoWayConverter so that the core animation system can handle them uniformly. For example, an Int is represented as an AnimationVector1D that holds a single float value. TwoWayConverter for Int looks like this:

val IntToVector: TwoWayConverter<Int, AnimationVector1D> =
    TwoWayConverter({ AnimationVector1D(it.toFloat()) }, { it.value.toInt() })AnimationSnippets.kt

Color is essentially a set of 4 values, red, green, blue, and alpha, so Color is converted into an AnimationVector4D that holds 4 float values. In this manner, every data type used in animations is converted to either AnimationVector1D, AnimationVector2D, AnimationVector3D, or AnimationVector4D depending on its dimensionality. This allows different components of the object to be animated independently, each with their own velocity tracking. Built-in converters for basic data types can be accessed using converters such as Color.VectorConverter or Dp.VectorConverter.

When you want to add support for a new data type as an animating value, you can create your own TwoWayConverter and provide it to the API. For example, you can use animateValueAsState to animate your custom data type like this:

data class MySize(val width: Dp, val height: Dp)

@Composable
fun MyAnimation(targetSize: MySize) {
    val animSize: MySize by animateValueAsState(
        targetSize,
        TwoWayConverter(
            convertToVector = { size: MySize ->
                // Extract a float value from each of the `Dp` fields.
                AnimationVector2D(size.width.value, size.height.value)
            },
            convertFromVector = { vector: AnimationVector2D ->
                MySize(vector.v1.dp, vector.v2.dp)
            }
        ),
        label = "size"
    )
}AnimationSnippets.kt

The following list includes some built-in

Sources: [live-compose-guide-animation-customize-animationvector-source](https://developer.android.com/develop/ui/compose/animation/customize#animationvector)

## Animate custom data types by converting to and from AnimationVector

VectorConverters:

Color.VectorConverter

Dp.VectorConverter

Offset.VectorConverter

Int.VectorConverter

Float.VectorConverter

IntSize.VectorConverter

Sources: [live-compose-guide-animation-customize-animationvector-2-source](https://developer.android.com/develop/ui/compose/animation/customize#animationvector)

## Set a custom easing function

Duration-based AnimationSpec operations (such as tween or keyframes) use Easing to adjust an animation's fraction. This allows the animating value to speed up and slow down, rather than moving at a constant rate. Fraction is a value between 0 (start) and 1.0 (end) indicating the current point in the animation.

Easing is in fact a function that takes a fraction value between 0 and 1.0 and returns a float. The returned value can be outside the boundary to represent overshoot or undershoot. A custom Easing can be created like the code below.

val CustomEasing = Easing { fraction -> fraction * fraction }

@Composable
fun EasingUsage() {
    val value by animateFloatAsState(
        targetValue = 1f,
        animationSpec = tween(
            durationMillis = 300,
            easing = CustomEasing
        ),
        label = "custom easing"
    )
    // ……
}AnimationSnippets.kt

Compose provides several built-in Easing functions that cover most use cases. See Speed - Material Design for more information about what Easing to use depending on your scenario.

FastOutSlowInEasing

LinearOutSlowInEasing

FastOutLinearInEasing

LinearEasing

CubicBezierEasing

See more

Sources: [live-compose-guide-animation-customize-easing-source](https://developer.android.com/develop/ui/compose/animation/customize#easing)

## Repeat an animation infinitely with infiniteRepeatable

infiniteRepeatable is like repeatable, but it repeats for an infinite amount of iterations.

val value by animateFloatAsState(
    targetValue = 1f,
    animationSpec = infiniteRepeatable(
        animation = tween(durationMillis = 300),
        repeatMode = RepeatMode.Reverse
    ),
    label = "infinite repeatable"
)AnimationSnippets.kt

In tests using ComposeTestRule, animations using infiniteRepeatable are not run. The component will be rendered using the initial value of each animated value.

Sources: [live-compose-guide-animation-customize-infiniterepeatable-source](https://developer.android.com/develop/ui/compose/animation/customize#infiniterepeatable)

## Animate to specific values at certain timings with keyframes

keyframes animates based on the snapshot values specified at different timestamps in the duration of the animation. At any given time, the animation value will be interpolated between two keyframe values. For each of these keyframes, Easing can be specified to determine the interpolation curve.

It is optional to specify the values at 0 ms and at the duration time. If you do not specify these values, they default to the start and end values of the animation, respectively.

val value by animateFloatAsState(
    targetValue = 1f,
    animationSpec = keyframes {
        durationMillis = 375
        0.0f at 0 using LinearOutSlowInEasing // for 0-15 ms
        0.2f at 15 using FastOutLinearInEasing // for 15-75 ms
        0.4f at 75 // ms
        0.4f at 225 // ms
    },
    label = "keyframe"
)AnimationSnippets.kt

Sources: [live-compose-guide-animation-customize-keyframes-source](https://developer.android.com/develop/ui/compose/animation/customize#keyframes)

## Animate between keyframes smoothly with keyframesWithSpline

To create an animation that follows a smooth curve as it transitions between values, you can use keyframesWithSpline instead of keyframes animation specs.

val offset by animateOffsetAsState(
    targetValue = Offset(300f, 300f),
    animationSpec = keyframesWithSpline {
        durationMillis = 6000
        Offset(0f, 0f) at 0
        Offset(150f, 200f) atFraction 0.5f
        Offset(0f, 100f) atFraction 0.7f
    }
)AnimationSnippets.kt

Spline-based keyframes are particularly useful for 2D movement of items on screen.

The following videos showcase the differences between keyframes and keyframesWithSpline given the same set of x, y coordinates that a circle should follow.

keyframes keyframesWithSpline

As you can see, the spline-based keyframes offer smoother transitions between points, as they use bezier curves to smoothly animate between items. This spec is useful for a preset animation. However, if you're working with user-driven points, it's preferable to use springs to achieve a similar smoothness between points because those are interruptible.

Sources: [live-compose-guide-animation-customize-keyframes-with-splines-source](https://developer.android.com/develop/ui/compose/animation/customize#keyframes-with-splines)

## Introduction

Many of the Animation APIs commonly accept parameters for customizing their behavior.

Sources: [live-compose-guide-animation-customize-main-content-source](https://developer.android.com/develop/ui/compose/animation/customize#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Value-based animations

Iterative code development

Animations in Compose

Sources: [live-compose-guide-animation-customize-recommended-for-you-source](https://developer.android.com/develop/ui/compose/animation/customize#recommended_for_you)

## Repeat an animation with repeatable

repeatable runs a duration-based animation (such as tween or keyframes) repeatedly until it reaches the specified iteration count. You can pass the repeatMode parameter to specify whether the animation should repeat by starting from the beginning (RepeatMode.Restart) or from the end (RepeatMode.Reverse).

val value by animateFloatAsState(
    targetValue = 1f,
    animationSpec = repeatable(
        iterations = 3,
        animation = tween(durationMillis = 300),
        repeatMode = RepeatMode.Reverse
    ),
    label = "repeatable spec"
)AnimationSnippets.kt

Sources: [live-compose-guide-animation-customize-repeatable-source](https://developer.android.com/develop/ui/compose/animation/customize#repeatable)

## Immediately snap to end value with snap

snap is a special AnimationSpec that immediately switches the value to the end value. You can specify delayMillis in order to delay the start of the animation.

val value by animateFloatAsState(
    targetValue = 1f,
    animationSpec = snap(delayMillis = 50),
    label = "snap spec"
)AnimationSnippets.kt

Sources: [live-compose-guide-animation-customize-snap-source](https://developer.android.com/develop/ui/compose/animation/customize#snap)

## Create physics-based animation with spring

spring creates a physics-based animation between start and end values. It takes 2 parameters: dampingRatio and stiffness.

dampingRatio defines how bouncy the spring should be. The default value is Spring.DampingRatioNoBouncy.

Figure 1

. Setting different spring damping ratios.

stiffness defines how fast the spring should move toward the end value. The default value is Spring.StiffnessMedium.

Figure 2

. Setting different spring stiffness.

val value by animateFloatAsState(
    targetValue = 1f,
    animationSpec = spring(
        dampingRatio = Spring.DampingRatioHighBouncy,
        stiffness = Spring.StiffnessMedium
    ),
    label = "spring spec"
)AnimationSnippets.kt

spring can handle interruptions more smoothly than duration-based AnimationSpec types because it guarantees the continuity of velocity when target value changes amid animations. spring is used as the default AnimationSpec by many animation APIs, such as animate*AsState and updateTransition.

For example, if we apply a spring config to the following animation that is driven by user touch, when interrupting the animation as it is progressing, you can see that using tween doesn't respond as smoothly as using spring.

Figure 3

. Setting

tween

versus

spring

specs for animation, and interrupting it.

Sources: [live-compose-guide-animation-customize-spring-source](https://developer.android.com/develop/ui/compose/animation/customize#spring)

## Animate between start and end values with easing curve with tween

tween animates between start and end values over the specified durationMillis using an easing curve. tween is short for the word between - as it goes between two values.

You can also specify delayMillis to postpone the start of the animation.

val value by animateFloatAsState(
    targetValue = 1f,
    animationSpec = tween(
        durationMillis = 300,
        delayMillis = 50,
        easing = LinearOutSlowInEasing
    ),
    label = "tween delay"
)AnimationSnippets.kt

See Easing for more information.

Sources: [live-compose-guide-animation-customize-tween-source](https://developer.android.com/develop/ui/compose/animation/customize#tween)
