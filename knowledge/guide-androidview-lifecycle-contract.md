---
type: reference
title: "Guidance: Follow the full AndroidView lifecycle"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: contract-androidview-callback-parameters-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/f555a473272f9a3ba856a8ba1e1c8a08b33bfbe6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: f555a473272f9a3ba856a8ba1e1c8a08b33bfbe6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 179
    endLine: 190
    sha256: d254f221133a49492548c194e708028c2031939fc88f014f11a36fadef45105b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param factory The block creating the [View] to be composed.
       * @param modifier The modifier to be applied to the layout.
       * @param onReset A callback invoked as a signal that the view is about to be attached to the
       *   composition hierarchy in a different context than its original creation. This callback is
       *   invoked before [update] and should prepare the view for general reuse. If `null` or not
       *   specified, the `AndroidView` instance will not support reuse, and the View instance will always
       *   be discarded whenever the AndroidView is moved or removed from the composition hierarchy.
       * @param onRelease A callback invoked as a signal that this view instance has exited the
       *   composition hierarchy entirely and will not be reused again. Any additional resources used by
       *   the View should be freed at this time.
       * @param update A callback to be invoked after the layout is inflated and upon recomposition to
       *   update the information and state of the view.
  - id: contract-androidview-factory-reuse-release-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/f555a473272f9a3ba856a8ba1e1c8a08b33bfbe6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: f555a473272f9a3ba856a8ba1e1c8a08b33bfbe6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 110
    endLine: 165
    sha256: 0a6edd3d22f31afa9dac7847879d1f3cb5967edc0b06bce825c35c6dcfe513b0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Composes an Android [View] obtained from [factory]. The [factory] block will be called exactly
       * once to obtain the [View] being composed, and it is also guaranteed to be invoked on the UI
       * thread. Therefore, in addition to creating the [View], the [factory] block can also be used to
       * perform one-off initializations and [View] constant properties' setting. The [update] block can
       * run multiple times (on the UI thread as well) due to recomposition, and it is the right place to
       * set the new properties. Note that the block will also run once right after the [factory] block
       * completes.
       *
       * [AndroidView] is commonly needed for using Views that are infeasible to be reimplemented in
       * Compose and there is no corresponding Compose API. Common examples for the moment are WebView,
       * SurfaceView, AdView, etc.
       *
       * By default, [AndroidView] does not automatically pool or reuse Views. If placed inside of a
       * reusable container (including inside a [LazyRow][androidx.compose.foundation.lazy.LazyRow] or
       * [LazyColumn][androidx.compose.foundation.lazy.LazyColumn]), the View instances will always be
       * discarded and recreated if the composition hierarchy containing the AndroidView changes, even if
       * its group structure did not change and the View could have conceivably been reused.
       *
       * Views are eligible for reuse if [AndroidView] is given a non-null [onReset] callback. Since it is
       * expensive to discard and recreate View instances, reusing Views can lead to noticeable
       * performance improvements — especially when building a scrolling list of
       * [AndroidViews][AndroidView]. It is highly recommended to specify an [onReset] implementation and
       * opt-in to View reuse when possible.
       *
       * When [onReset] is specified, [View] instances may be reused when hosted inside of a container
       * that supports reusable elements. Reuse occurs when compatible instances of [AndroidView] are
       * inserted and removed during recomposition. Two instances of `AndroidView` are considered
       * compatible if they are invoked with the same composable group structure. The most common scenario
       * where this happens is in lazy layout APIs like `LazyRow` and `LazyColumn`, which can reuse layout
       * nodes (and Views, in this case) between items when scrolling.
       *
       * [onReset] is invoked on the UI thread when the View will be reused, signaling that the View
       * should be prepared to appear in a new context in the composition hierarchy. This callback is
       * invoked before [update] and may be used to reset any transient View state like animations or user
       * input.
       *
       * Note that [onReset] may not be immediately followed by a call to [update]. Compose may
       * temporarily detach the View from the composition hierarchy if it is deactivated but not released
       * from composition. This can happen if the View appears in a [ReusableContentHost] that is not
       * currently active or inside of a [movable content][androidx.compose.runtime.movableContentOf]
       * block that is being moved. If this happens, the View will be removed from its parent, but
       * retained by Compose so that it may be reused if its content host becomes active again. If the
       * View never becomes active again and is instead discarded entirely, the [onReset] callback will be
       * invoked directly from this deactivated state when Compose releases the View.
       *
       * If you need to observe whether the View is currently used in the composition hierarchy, you may
       * observe whether it is attached via [View.addOnAttachStateChangeListener]. The View may also
       * observe the lifecycle of its host via [findViewTreeLifecycleOwner]. The lifecycle returned by
       * this function will match the [LocalLifecycleOwner]. Note that the lifecycle is not set and cannot
       * be used until the View is attached.
       *
       * When the View is removed from the composition permanently, [onRelease] will be invoked (also on
       * the UI thread). Once this callback returns, Compose will never attempt to reuse the previous View
       * instance regardless of whether an [onReset] implementation was provided. If the View is needed
       * again in the future, a new instance will be created, with a fresh lifecycle that begins by
       * calling the [factory].
compose:
  id: guide-androidview-lifecycle-contract
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.viewinterop.AndroidView
  sections:
    - id: guide-androidview-lifecycle-contract
      title: "Guidance: Follow the full AndroidView lifecycle"
      aliases:
        - androidx.compose.ui.viewinterop.AndroidView
        - factory update onReset onRelease
        - View reuse cleanup
        - 뷰 수명주기
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - contract-androidview-factory-reuse-release-source
        - contract-androidview-callback-parameters-source
      relatedIds:
        - contract-androidview-factory-reuse-release
        - contract-androidview-callback-parameters
---

# Guidance: Follow the full AndroidView lifecycle

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Follow the full AndroidView lifecycle

Guidance: factory creates each View once on the UI thread; update runs after factory and on recomposition for changing properties. Non-null onReset permits reuse in supporting containers with compatible group structure; reset transient state there before update. Reset need not be immediately followed by update: a View can remain detached and retained, or be reset from deactivation before release. onRelease permanently ends that instance’s use: free additional resources; Compose never reuses it afterward, and future instances begin with factory. Limitation: reuse is eligible, not guaranteed; reset/deactivation and permanent release are different events.

Sources: [contract-androidview-factory-reuse-release-source](https://android.googlesource.com/platform/frameworks/support/+/f555a473272f9a3ba856a8ba1e1c8a08b33bfbe6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt), [contract-androidview-callback-parameters-source](https://android.googlesource.com/platform/frameworks/support/+/f555a473272f9a3ba856a8ba1e1c8a08b33bfbe6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)
