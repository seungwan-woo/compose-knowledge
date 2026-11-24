---
type: reference
title: "Guidance: Choose restart keys and keep callbacks current"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: contract-launchedeffect-key-lifetime-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/f555a473272f9a3ba856a8ba1e1c8a08b33bfbe6/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: f555a473272f9a3ba856a8ba1e1c8a08b33bfbe6
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 552
    endLine: 569
    sha256: 74a8b9defaaf13afb85d5b4c05d196c81669c10bebcc9c7627557877672ec552
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
       * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] and **re-launched** when
       * [LaunchedEffect] is recomposed with a different [key1]. The coroutine will be
       * [cancelled][Job.cancel] when the [LaunchedEffect] leaves the composition.
       *
       * This function should **not** be used to (re-)launch ongoing tasks in response to callback events
       * by way of storing callback data in [MutableState] passed to [key1]. Instead, see
       * [rememberCoroutineScope] to obtain a [CoroutineScope] that may be used to launch ongoing jobs
       * scoped to the composition in response to event callbacks.
       */
      @Composable
      @NonRestartableComposable
      @OptIn(InternalComposeApi::class)
      public fun LaunchedEffect(key1: Any?, block: suspend CoroutineScope.() -> Unit) {
          val applyContext = currentComposer.applyCoroutineContext
          remember(key1) { LaunchedEffectImpl(applyContext, block) }
      }
  - id: contract-rememberupdatedstate-current-value-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/f555a473272f9a3ba856a8ba1e1c8a08b33bfbe6/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    revision: f555a473272f9a3ba856a8ba1e1c8a08b33bfbe6
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    startLine: 317
    endLine: 342
    sha256: 361469368aebf06cbc3d82c5d9db2277ebd8689ec0dc2c547082d0f936945f1e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * [remember] a [mutableStateOf] [newValue] and update its value to [newValue] on each recomposition
       * of the [rememberUpdatedState] call.
       *
       * [rememberUpdatedState] should be used when parameters or values computed during composition are
       * referenced by a long-lived lambda or object expression. Recomposition will update the resulting
       * [State] without recreating the long-lived lambda or object, allowing that object to persist
       * without cancelling and resubscribing, or relaunching a long-lived operation that may be expensive
       * or prohibitive to recreate and restart. This may be common when working with [DisposableEffect]
       * or [LaunchedEffect], for example:
       *
       * @sample androidx.compose.runtime.samples.rememberUpdatedStateSampleWithDisposableEffect
       *
       * [LaunchedEffect]s often describe state machines that should not be reset and restarted if a
       * parameter or event callback changes, but they should have the current value available when
       * needed. For example:
       *
       * @sample androidx.compose.runtime.samples.rememberUpdatedStateSampleWithLaunchedEffect
       *
       * By using [rememberUpdatedState] a composable function can update these operations in progress.
       */
      @Composable
      public fun <T> rememberUpdatedState(newValue: T): State<T> = remember {
          mutableStateOf(newValue)
      }
          .apply { value = newValue }
compose:
  id: guide-effect-key-current-callback-contract
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.LaunchedEffect
  sections:
    - id: guide-effect-key-current-callback-contract
      title: "Guidance: Choose restart keys and keep callbacks current"
      aliases:
        - androidx.compose.runtime.LaunchedEffect
        - androidx.compose.runtime.rememberUpdatedState
        - effect restart keys
        - latest callback
        - 효과 재시작
        - 최신 콜백
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - contract-launchedeffect-key-lifetime-source
        - contract-rememberupdatedstate-current-value-source
      relatedIds:
        - contract-launchedeffect-key-lifetime
        - contract-rememberupdatedstate-current-value
---

# Guidance: Choose restart keys and keep callbacks current

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Choose restart keys and keep callbacks current

Guidance: LaunchedEffect launches on entry, cancels and relaunches when its key changes, and cancels on composition exit. Put values that must restart work in its keys. For a changing callback or parameter that must stay current without restarting the operation, create rememberUpdatedState during composition and read its returned State inside the long-lived effect. Limitation: do not route event-handler jobs through a MutableState effect key; use rememberCoroutineScope to launch jobs from callbacks.

Sources: [contract-launchedeffect-key-lifetime-source](https://android.googlesource.com/platform/frameworks/support/+/f555a473272f9a3ba856a8ba1e1c8a08b33bfbe6/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt), [contract-rememberupdatedstate-current-value-source](https://android.googlesource.com/platform/frameworks/support/+/f555a473272f9a3ba856a8ba1e1c8a08b33bfbe6/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt)
