---
type: reference
title: "Guidance: Read the latest callback without restarting an effect"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-side-effects-rememberupdatedstate-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#rememberupdatedstate
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 465fade8c5af5ac492f3a54f5bb0d3a24b4378470507d75a1bf51de8895c2dc8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      LaunchedEffect restarts when one of the key parameters changes. However, in some situations you might want to capture a value in your effect that, if it changes, you do not want the effect to restart. In order to do this, it is required to use rememberUpdatedState to create a reference to this value which can be captured and updated. This approach is helpful for effects that contain long-lived operations that may be expensive or prohibitive to recreate and restart.

      For example, suppose your app has a LandingScreen that disappears after some time. Even if LandingScreen is recomposed, the effect that waits for some time and notifies that the time passed shouldn't be restarted:

      @Composable
      fun LandingScreen(onTimeout: () -> Unit) {

          // This will always refer to the latest onTimeout function that
          // LandingScreen was recomposed with
          val currentOnTimeout by rememberUpdatedState(onTimeout)

          // Create an effect that matches the lifecycle of LandingScreen.
          // If LandingScreen recomposes, the delay shouldn't start again.
          LaunchedEffect(true) {
              delay(SplashWaitTimeMillis)
              currentOnTimeout()
          }

          /* Landing screen content */
      }SideEffectsSnippets.kt

      To create an effect that matches the lifecycle of the call site, a never-changing constant like Unit or true is passed as a parameter. In the code above, LaunchedEffect(true) is used. To make sure that the onTimeout lambda always contains the latest value that LandingScreen was recomposed with, onTimeout needs to be wrapped with the rememberUpdatedState function. The returned State, currentOnTimeout in the code, should be used in the effect.
compose:
  id: guide-updated-callback-in-effect
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.rememberUpdatedState
  sections:
    - id: guide-updated-callback-in-effect
      title: "Guidance: Read the latest callback without restarting an effect"
      aliases:
        - androidx.compose.runtime.rememberUpdatedState
        - androidx.compose.runtime.LaunchedEffect
        - latest callback
        - long-lived effect
        - 최신 콜백
        - 효과 유지
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-rememberupdatedstate-source
      relatedIds:
        - live-compose-guide-side-effects-rememberupdatedstate
---

# Guidance: Read the latest callback without restarting an effect

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Read the latest callback without restarting an effect

Guidance: Use rememberUpdatedState when a long-lived effect must capture a changing callback or value without restarting its work. Read the returned State inside the effect. In a timeout screen, rememberUpdatedState(onTimeout) lets a LaunchedEffect(true) finish its existing delay and then invoke the latest callback. A constant key makes the effect match the call-site lifetime. Limitation: pass a changing value as an effect key when it should restart the effect; the updated-state approach is for values whose changes should not restart it.

Sources: [live-compose-guide-side-effects-rememberupdatedstate-source](https://developer.android.com/develop/ui/compose/side-effects#rememberupdatedstate)
