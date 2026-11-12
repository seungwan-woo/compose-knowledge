---
type: reference
title: "Guidance: Register and clean up subscriptions with DisposableEffect"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-side-effects-disposableeffect-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#disposableeffect
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 4643cd6b40ade9cb2724d441b3a81edca03869a8e63e2de398880cdb0c6bcbe0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      For side effects that need to be cleaned up after the keys change or if the composable leaves the Composition, use DisposableEffect. If the DisposableEffect keys change, the composable needs to dispose (do the cleanup for) its current effect, and reset by calling the effect again.

      As an example, you might want to send analytics events based on Lifecycle events by using a LifecycleObserver. To listen for those events in Compose, use a DisposableEffect to register and unregister the observer when needed.

      @Composable
      fun HomeScreen(
          lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
          onStart: () -> Unit, // Send the 'started' analytics event
          onStop: () -> Unit // Send the 'stopped' analytics event
      ) {
          // Safely update the current lambdas when a new one is provided
          val currentOnStart by rememberUpdatedState(onStart)
          val currentOnStop by rememberUpdatedState(onStop)

          // If `lifecycleOwner` changes, dispose and reset the effect
          DisposableEffect(lifecycleOwner) {
              // Create an observer that triggers our remembered callbacks
              // for sending analytics events
              val observer = LifecycleEventObserver { _, event ->
                  if (event == Lifecycle.Event.ON_START) {
                      currentOnStart()
                  } else if (event == Lifecycle.Event.ON_STOP) {
                      currentOnStop()
                  }
              }

              // Add the observer to the lifecycle
              lifecycleOwner.lifecycle.addObserver(observer)

              // When the effect leaves the Composition, remove the observer
              onDispose {
                  lifecycleOwner.lifecycle.removeObserver(observer)
              }
          }

          /* Home screen content */
      }SideEffectsSnippets.kt

      In the code above, the effect will add the observer to the lifecycleOwner. If lifecycleOwner changes, the effect is disposed and restarted with the new lifecycleOwner.

      A DisposableEffect must include an onDispose clause as the final statement in its block of code. Otherwise, the IDE displays a build-time error.
compose:
  id: guide-disposable-effect-cleanup
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.DisposableEffect
  sections:
    - id: guide-disposable-effect-cleanup
      title: "Guidance: Register and clean up subscriptions with DisposableEffect"
      aliases:
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.DisposableEffectScope.onDispose
        - observer cleanup
        - subscription cleanup
        - 관찰자 해제
        - 리소스 정리
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-disposableeffect-source
      relatedIds:
        - live-compose-guide-side-effects-disposableeffect
---

# Guidance: Register and clean up subscriptions with DisposableEffect

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Register and clean up subscriptions with DisposableEffect

Guidance: Use DisposableEffect when a side effect needs cleanup after a key changes or the composable leaves the Composition. Register the observer or resource inside the effect and undo registration in onDispose. Keying a lifecycle observer by lifecycleOwner removes the old observer and registers against the new owner when it changes. rememberUpdatedState can keep observer callbacks current. Limitation: onDispose must be the final statement of the effect block; changing keys disposes and recreates the effect.

Sources: [live-compose-guide-side-effects-disposableeffect-source](https://developer.android.com/develop/ui/compose/side-effects#disposableeffect)
