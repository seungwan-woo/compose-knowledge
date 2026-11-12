---
type: reference
title: "Guidance: Launch suspend UI responses from event handlers"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-androidx-runtime-runtime-runtime-effects-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 596
    endLine: 630
    sha256: ce3c044e76a61526835a83825ef61bb22257bff2a45abedffb476a6c8345086b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * This function should **not** be used to (re-)launch ongoing tasks in response to callback events
       * by way of storing callback data in [MutableState] passed to [key]. Instead, see
       * [rememberCoroutineScope] to obtain a [CoroutineScope] that may be used to launch ongoing jobs
       * scoped to the composition in response to event callbacks.
       */
      @Composable
      @NonRestartableComposable
      @OptIn(InternalComposeApi::class)
      public fun LaunchedEffect(
          key1: Any?,
          key2: Any?,
          key3: Any?,
          block: suspend CoroutineScope.() -> Unit,
      ) {
          val applyContext = currentComposer.applyCoroutineContext
          remember(key1, key2, key3) { LaunchedEffectImpl(applyContext, block) }
      }

      /**
       * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
       * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] and **re-launched** when
       * [LaunchedEffect] is recomposed with a different [key1], [key2], [key3] or [key4]. The coroutine
       * will be [cancelled][Job.cancel] when the [LaunchedEffect] leaves the composition.
       *
       * This function should **not** be used to (re-)launch ongoing tasks in response to callback events
       * by way of storing callback data in [MutableState] passed to [key]. Instead, see
       * [rememberCoroutineScope] to obtain a [CoroutineScope] that may be used to launch ongoing jobs
       * scoped to the composition in response to event callbacks.
       */
      @Composable
      @NonRestartableComposable
      @OptIn(InternalComposeApi::class)
      public fun LaunchedEffect(
          key1: Any?,
          key2: Any?,
  - id: live-compose-guide-side-effects-remembercoroutinescope-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#remembercoroutinescope
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 1add6d6d3349fb4e34d3a07ede8162867f336a3d1172a9f85bb93703c8d8e6dc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      As LaunchedEffect is a composable function, it can only be used inside other composable functions. In order to launch a coroutine outside of a composable, but scoped so that it will be automatically canceled once it leaves the composition, use rememberCoroutineScope. Also use rememberCoroutineScope whenever you need to control the lifecycle of one or more coroutines manually, for example, cancelling an animation when a user event happens.

      rememberCoroutineScope is a composable function that returns a CoroutineScope bound to the point of the Composition where it's called. The scope will be cancelled when the call leaves the Composition.

      Following the previous example, you could use this code to show a Snackbar when the user taps on a Button:

      @Composable
      fun MoviesScreen(snackbarHostState: SnackbarHostState) {

          // Creates a CoroutineScope bound to the MoviesScreen's lifecycle
          val scope = rememberCoroutineScope()

          Scaffold(
              snackbarHost = {
                  SnackbarHost(hostState = snackbarHostState)
              }
          ) { contentPadding ->
              Column(Modifier.padding(contentPadding)) {
                  Button(
                      onClick = {
                          // Create a new coroutine in the event handler to show a snackbar
                          scope.launch {
                              snackbarHostState.showSnackbar("Something happened!")
                          }
                      }
                  ) {
                      Text("Press me")
                  }
              }
          }
      }SideEffectsSnippets.kt
compose:
  id: guide-coroutine-scope-user-events
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.rememberCoroutineScope
  sections:
    - id: guide-coroutine-scope-user-events
      title: "Guidance: Launch suspend UI responses from event handlers"
      aliases:
        - androidx.compose.runtime.rememberCoroutineScope
        - androidx.compose.runtime.LaunchedEffect
        - event handler coroutine
        - button suspend action
        - snackbar coroutine
        - manual coroutine cancellation
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-remembercoroutinescope-source
        - live-androidx-runtime-runtime-runtime-effects-lines-596-source
      relatedIds:
        - live-compose-guide-side-effects-remembercoroutinescope
        - live-androidx-runtime-runtime-runtime-effects-lines-596
---

# Guidance: Launch suspend UI responses from event handlers

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Launch suspend UI responses from event handlers

Guidance: Call rememberCoroutineScope in the composable, then launch work from an event callback, such as onClick { scope.launch { snackbarHostState.showSnackbar(message) } }. This also lets event code control or cancel its jobs. Prefer this to storing callback data in MutableState just to trigger LaunchedEffect. Limitation: the scope belongs to the composition call that created it and is cancelled when that call leaves; it is unsuitable for work that must outlive that UI.

Sources: [live-compose-guide-side-effects-remembercoroutinescope-source](https://developer.android.com/develop/ui/compose/side-effects#remembercoroutinescope), [live-androidx-runtime-runtime-runtime-effects-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)
