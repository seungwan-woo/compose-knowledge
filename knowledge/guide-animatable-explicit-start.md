---
type: reference
title: "Guidance: Give Animatable an explicit starting value"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 1
    endLine: 35
    sha256: aa272155dc0a2d71668b17a459e42e9681464d79dac8344e65dac2adfed4fad9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2019 The Android Open Source Project
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *      http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      package androidx.compose.animation.core

      import androidx.compose.animation.core.AnimationEndReason.BoundReached
      import androidx.compose.animation.core.AnimationEndReason.Finished
      import androidx.compose.runtime.State
      import androidx.compose.runtime.annotation.RememberInComposition
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.setValue
      import kotlinx.coroutines.CancellationException

      /**
       * [Animatable] is a value holder that automatically animates its value when the value is changed
       * via [animateTo]. If [animateTo] is invoked during an ongoing value change animation, a new
       * animation will transition [Animatable] from its current value (i.e. value at the point of
       * interruption) to the new [targetValue]. This ensures that the value change is __always__
       * continuous using [animateTo]. If a [spring] animation (e.g. default animation) is used with
       * [animateTo], the velocity change will guarantee to be continuous as well.
       *
  - id: live-compose-guide-animation-value-based-animatable-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/value-based#animatable
    revision: web:compose-guide-animation-value-based:content@sha256:710a628250ab278df97358f99cedf98db2fefad109909956223f98c3591c4591
    sha256: 8a5bca8345a1403a72b85f69d5ff9aac12fa4abf62b3ad01f565c62322b36dd4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Animatable is a value holder that can animate the value as it is changed using animateTo. This is the API backing up the implementation of animate*AsState. It ensures consistent continuation and mutual exclusiveness, which means the value change is always continuous and Compose cancels any ongoing animation.

      Many features of Animatable, including animateTo, are suspend functions. This means you must wrap them in an appropriate coroutine scope. For example, you can use the LaunchedEffect composable to create a scope just for the duration of the specified key value.

      // Start out gray and animate to green/red based on `ok`
      val color = remember { Animatable(Color.Gray) }
      LaunchedEffect(ok) {
          color.animateTo(if (ok) Color.Green else Color.Red)
      }
      Box(
          Modifier
              .fillMaxSize()
              .background(color.value)
      )AnimationSnippets.kt

      In the preceding example, you create and remember an instance of Animatable with the initial value of Color.Gray. Depending on the value of the boolean flag ok, the color animates to either Color.Green or Color.Red. Any subsequent change to the boolean value starts an animation to the other color. If an animation is in progress when the value changes, Compose cancels the animation, and the new animation starts from the current snapshot value with the current velocity.

      This Animatable API is the underlying implementation for animate*AsState mentioned in the previous section. Using Animatable directly offers finer-grained control in several ways:

      First, Animatable can have an initial value different from its first target value. For example, the preceding code example shows a gray box at first, which immediately animates to either green or red.

      Second, Animatable provides more operations on the content value, specifically snapTo and animateDecay. snapTo sets the current value to the target value immediately. This is useful when the animation is not the only source of truth and must synchronize with other states, such as touch events. animateDecay starts an animation that slows down from the given velocity. This is useful for implementing fling behavior.

      See Gesture and animation for more information.

      By default, Animatable
compose:
  id: guide-animatable-explicit-start
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core.Animatable
  sections:
    - id: guide-animatable-explicit-start
      title: "Guidance: Give Animatable an explicit starting value"
      aliases:
        - androidx.compose.animation.core.Animatable
        - androidx.compose.animation.core.Animatable.animateTo
        - explicit animation initial value
        - remember Animatable
        - initial value different from target
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-value-based-animatable-source
        - live-androidx-animation-animation-core-animation-core-animatable-lines-1-source
      relatedIds:
        - live-compose-guide-animation-value-based-animatable
        - live-androidx-animation-animation-core-animation-core-animatable-lines-1
---

# Guidance: Give Animatable an explicit starting value

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Give Animatable an explicit starting value

Guidance: Remember an Animatable when the first visible value should differ from the first animation target, for example a gray color that immediately animates to a status color. Call animateTo from a coroutine such as LaunchedEffect(status). A new target interrupts the animation and continues from its current value. Limitation: animateTo is suspending and needs a coroutine scope; continuous velocity across interruption is guaranteed for spring animations, so do not assume every animationSpec offers that guarantee.

Sources: [live-compose-guide-animation-value-based-animatable-source](https://developer.android.com/develop/ui/compose/animation/value-based#animatable), [live-androidx-animation-animation-core-animation-core-animatable-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)
