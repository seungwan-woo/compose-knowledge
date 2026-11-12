---
type: reference
title: "Guidance: Keep coroutine launch out of the composable body"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-androidx-runtime-runtime-runtime-effects-lines-840-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 840
    endLine: 874
    sha256: 507f586bb2a4d630d5ba3d67df38d591b656686fa5b509e894838ac6bf11e934
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Return a [CoroutineScope] bound to this point in the composition using the optional
       * [CoroutineContext] provided by [getContext]. [getContext] will only be called once and the same
       * [CoroutineScope] instance will be returned across recompositions.
       *
       * This scope will be [cancelled][CoroutineScope.cancel] when this call leaves the composition. The
       * [CoroutineContext] returned by [getContext] may not contain a [Job] as this scope is considered
       * to be a child of the composition.
       *
       * The default dispatcher of this scope if one is not provided by the context returned by
       * [getContext] will be the applying dispatcher of the composition's [Recomposer].
       *
       * Use this scope to launch jobs in response to callback events such as clicks or other user
       * interaction where the response to that event needs to unfold over time and be cancelled if the
       * composable managing that process leaves the composition. Jobs should never be launched into
       * **any** coroutine scope as a side effect of composition itself. For scoped ongoing jobs initiated
       * by composition, see [LaunchedEffect].
       *
       * This function will not throw if preconditions are not met, as composable functions do not yet
       * fully support exceptions. Instead the returned scope's [CoroutineScope.coroutineContext] will
       * contain a failed [Job] with the associated exception and will not be capable of launching child
       * jobs.
       */
      @Composable
      public inline fun rememberCoroutineScope(
          crossinline getContext: @DisallowComposableCalls () -> CoroutineContext = {
              EmptyCoroutineContext
          }
      ): CoroutineScope {
          val composer = currentComposer
          return remember { createCompositionCoroutineScope(getContext(), composer) }
      }

      private object LaunchedEffectTracingContext : TracingContext("Compose:LaunchedEffect")
compose:
  id: guide-no-launch-during-composition
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.rememberCoroutineScope
  sections:
    - id: guide-no-launch-during-composition
      title: "Guidance: Keep coroutine launch out of the composable body"
      aliases:
        - androidx.compose.runtime.rememberCoroutineScope
        - androidx.compose.runtime.LaunchedEffect
        - launch during composition
        - recomposition launches duplicate work
        - composition side effect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-840-source
      relatedIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-840
---

# Guidance: Keep coroutine launch out of the composable body

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Keep coroutine launch out of the composable body

Guidance: Remembering a CoroutineScope does not make scope.launch safe to call directly while the composable body executes. Launch event-driven jobs inside callbacks; use LaunchedEffect for ongoing jobs initiated by composition. The scope API explicitly prohibits launching jobs into any scope as a side effect of composition itself. Limitation: rememberCoroutineScope retains the scope across recompositions, not the individual launch calls you place in the body.

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-840-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)
