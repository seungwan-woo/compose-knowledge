---
type: reference
title: "Guidance: Audit effect inputs for restart versus latest-value behavior"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-side-effects-restarting-effects-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#restarting-effects
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 3d1e94144accbb8f072a9d533883bd16f53f49335af88cfc2e1f0d795b12773c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: DisposableEffect isn't disposed of and restarted. That causes problems because the wrong lifecycleOwner is used from that point onward.
  - id: live-compose-guide-side-effects-restarting-effects-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#restarting-effects
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: f5946442689147f27cb8cb1d1dcbb0e0ec8c150165e3aea2c32ba652a68b0350
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Some effects in Compose, like LaunchedEffect, produceState, or DisposableEffect, take a variable number of arguments, keys, that are used to cancel the running effect and start a new one with the new keys.

      The typical form for these APIs is:

      EffectName(restartIfThisKeyChanges, orThisKey, orThisKey, ...) { block }

      Due to the subtleties of this behavior, problems can occur if the parameters used to restart the effect are not the right ones:

      Restarting effects less than they should could cause bugs in your app.

      Restarting effects more than they should could be inefficient.

      As a rule of thumb, mutable and immutable variables used in the effect block of code should be added as parameters to the effect composable. Apart from those, more parameters can be added to force restarting the effect. If the change of a variable shouldn't cause the effect to restart, the variable should be wrapped in rememberUpdatedState. If the variable never changes because it's wrapped in a remember with no keys, you don't need to pass the variable as a key to the effect.

      In the DisposableEffect code shown above, the effect takes as a parameter the lifecycleOwner used in its block, because any change to them should cause the effect to restart.

      @Composable
      fun HomeScreen(
          lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
          onStart: () -> Unit, // Send the 'started' analytics event
          onStop: () -> Unit // Send the 'stopped' analytics event
      ) {
          // These values never change in Composition
          val currentOnStart by rememberUpdatedState(onStart)
          val currentOnStop by rememberUpdatedState(onStop)

          DisposableEffect(lifecycleOwner) {
              val observer = LifecycleEventObserver { _, event ->
                  /* ... */
              }

              lifecycleOwner.lifecycle.addObserver(observer)
              onDispose {
                  lifecycleOwner.lifecycle.removeObserver(observer)
              }
          }
      }SideEffectsSnippets.kt

      currentOnStart and currentOnStop are not needed as DisposableEffect keys, because their values never change in Composition due to the usage of rememberUpdatedState. If you don't pass lifecycleOwner as a parameter and it changes, HomeScreen recomposes, but the
compose:
  id: guide-effect-restart-input-audit
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.LaunchedEffect
  sections:
    - id: guide-effect-restart-input-audit
      title: "Guidance: Audit effect inputs for restart versus latest-value behavior"
      aliases:
        - androidx.compose.runtime.LaunchedEffect
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.produceState
        - androidx.compose.runtime.rememberUpdatedState
        - stale effect input
        - effect key audit
        - lifecycle owner replacement
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-restarting-effects-source
        - live-compose-guide-side-effects-restarting-effects-2-source
      relatedIds:
        - live-compose-guide-side-effects-restarting-effects
        - live-compose-guide-side-effects-restarting-effects-2
---

# Guidance: Audit effect inputs for restart versus latest-value behavior

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Audit effect inputs for restart versus latest-value behavior

Guidance: Review each value used inside an effect: make it a key when changes must cancel and restart the work; use rememberUpdatedState when the running work must read its latest value without restarting. Apply this review to produceState and DisposableEffect too. A lifecycle owner must be a DisposableEffect key so replacing it moves the observer to the new owner. Limitation: omitting a restart input can leave work bound to an old object; adding needless restart keys can repeatedly cancel useful work.

Sources: [live-compose-guide-side-effects-restarting-effects-source](https://developer.android.com/develop/ui/compose/side-effects#restarting-effects), [live-compose-guide-side-effects-restarting-effects-2-source](https://developer.android.com/develop/ui/compose/side-effects#restarting-effects)
