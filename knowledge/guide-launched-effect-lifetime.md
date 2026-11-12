---
type: reference
title: "Guidance: Tie suspend work to LaunchedEffect keys"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-side-effects-launchedeffect-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#launchedeffect
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 3494ccae5ade7131da5668330adb05ae92147d9fccbf3bada635796895a79268
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To perform work over the life of a composable and have the ability to call suspend functions, use the LaunchedEffect composable. When LaunchedEffect enters the Composition, it launches a coroutine with the block of code passed as a parameter. The coroutine will be cancelled if LaunchedEffect leaves the composition. If LaunchedEffect is recomposed with different keys (see the Restarting Effects section below), the existing coroutine will be cancelled and the new suspend function will be launched in a new coroutine.

      For example, here is an animation that pulses the alpha value with a configurable delay:

      // Allow the pulse rate to be configured, so it can be sped up if the user is running
      // out of time
      var pulseRateMs by remember { mutableLongStateOf(3000L) }
      val alpha = remember { Animatable(1f) }
      LaunchedEffect(pulseRateMs) { // Restart the effect when the pulse rate changes
          while (isActive) {
              delay(pulseRateMs) // Pulse the alpha every pulseRateMs to alert the user
              alpha.animateTo(0f)
              alpha.animateTo(1f)
          }
      }SideEffectsSnippets.kt

      In the code above, the animation uses the suspending function delay to wait for the set amount of time. Then, it sequentially animates the alpha to zero and back again using animateTo. This will repeat for the life of the composable.
compose:
  id: guide-launched-effect-lifetime
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.LaunchedEffect
  sections:
    - id: guide-launched-effect-lifetime
      title: "Guidance: Tie suspend work to LaunchedEffect keys"
      aliases:
        - androidx.compose.runtime.LaunchedEffect
        - effect restart keys
        - coroutine cancellation
        - suspend work
        - 부수 효과
        - 효과 재시작
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-launchedeffect-source
      relatedIds:
        - live-compose-guide-side-effects-launchedeffect
---

# Guidance: Tie suspend work to LaunchedEffect keys

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Tie suspend work to LaunchedEffect keys

Guidance: Use LaunchedEffect for suspend work that belongs to a composable lifetime. It launches its coroutine when entering the Composition and cancels it on leaving. Choose keys that identify when the work must restart: a changed key cancels the existing coroutine and starts a new one. For example, keying a repeating pulse by pulseRateMs restarts the delay-and-animation loop when the rate changes. Limitation: work is cancelled on key changes or removal, so its lifetime is governed by that effect call and its keys.

Sources: [live-compose-guide-side-effects-launchedeffect-source](https://developer.android.com/develop/ui/compose/side-effects#launchedeffect)
