---
type: reference
title: AndroidView lifecycle source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt"
tags:
  - Compose
  - Android
sources:
  - id: contract-androidview-callback-parameters-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/90b86d803a0ab75e5c4c320fd855a5d4f1bc6b04/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: 90b86d803a0ab75e5c4c320fd855a5d4f1bc6b04
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
    resource: https://android.googlesource.com/platform/frameworks/support/+/90b86d803a0ab75e5c4c320fd855a5d4f1bc6b04/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: 90b86d803a0ab75e5c4c320fd855a5d4f1bc6b04
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
  - id: live-androidx-ui-viewinterop-android-view-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 1
    endLine: 35
    sha256: a9beb58c4b8c1a5eec0436c293a22fa8c2dd3ddd81e441be4acd192f4d8cbce0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2020 The Android Open Source Project
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

      package androidx.compose.ui.viewinterop

      import android.content.Context
      import android.os.Parcelable
      import android.util.SparseArray
      import android.view.View
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.ComposeNode
      import androidx.compose.runtime.CompositionContext
      import androidx.compose.runtime.CompositionLocalMap
      import androidx.compose.runtime.ReusableComposeNode
      import androidx.compose.runtime.ReusableContentHost
      import androidx.compose.runtime.Updater
      import androidx.compose.runtime.currentComposer
      import androidx.compose.runtime.currentCompositeKeyHashCode
      import androidx.compose.runtime.rememberCompositionContext
      import androidx.compose.runtime.saveable.LocalSaveableStateRegistry
      import androidx.compose.runtime.saveable.SaveableStateRegistry
      import androidx.compose.ui.InternalComposeUiApi
  - id: live-androidx-ui-viewinterop-android-view-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 106
    endLine: 136
    sha256: fe56323f82e5657f9a251e7030dbf259a372363e56e0a3c92e27042056fdaeac
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          AndroidView(factory = factory, modifier = modifier, update = update, onRelease = NoOpUpdate)
      }

      /**
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
  - id: live-androidx-ui-viewinterop-android-view-lines-137-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 137
    endLine: 166
    sha256: 7d1727033f623d154e23637d6eea39eb31ef8a48377ba3456950436743bea4ae
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
       *
  - id: live-androidx-ui-viewinterop-android-view-lines-167-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 167
    endLine: 201
    sha256: d14935f63e38906848969c64b26b76a45ae1bd320c2113928b84d2b05830166c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [AndroidView] will not clip its content to the layout bounds. Use [View.setClipToOutline] on the
       * child View to clip the contents, if desired. Developers will likely want to do this with all
       * subclasses of SurfaceView to keep its contents contained.
       *
       * [AndroidView] automatically participates in nested scrolling when a descendant [View] dispatches
       * nested scroll events. This means this Composable can dispatch scroll deltas if it is placed
       * inside a container that participates in nested scroll:
       *
       * @sample androidx.compose.ui.samples.ViewInComposeNestedScrollInteropSample
       * @sample androidx.compose.ui.samples.AndroidViewSample
       * @sample androidx.compose.ui.samples.ReusableAndroidViewInLazyColumnSample
       * @sample androidx.compose.ui.samples.AndroidViewWithReleaseSample
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
       */
      @Composable
      @UiComposable
      public fun <T : View> AndroidView(
          factory: (Context) -> T,
          modifier: Modifier = Modifier,
          onReset: ((T) -> Unit)? = null,
          onRelease: (T) -> Unit = NoOpUpdate,
          update: (T) -> Unit = NoOpUpdate,
      ) {
          val compositeKeyHash = currentCompositeKeyHashCode.hashCode()
  - id: live-androidx-ui-viewinterop-android-view-lines-202-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 202
    endLine: 236
    sha256: 554d0e5ec3090c81c549aefc2b95ad6a65ad9f1226458e647df1d8d48b807f40
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val materializedModifier = currentComposer.materialize(modifier.focusInteropModifier())
          val density = LocalDensity.current
          val layoutDirection = LocalLayoutDirection.current
          val compositionLocalMap = currentComposer.currentCompositionLocalMap

          // These locals are initialized from the view tree at the AndroidComposeView hosting this
          // composition, but they need to be passed to this Android View so that the ViewTree*Owner
          // functions return the correct owners if different local values were provided by the
          // composition, e.g. by a navigation library.
          val lifecycleOwner = LocalLifecycleOwner.current
          val savedStateRegistryOwner = LocalSavedStateRegistryOwner.current

          if (onReset != null) {
              ReusableComposeNode<LayoutNode, UiApplier>(
                  factory = createAndroidViewNodeFactory(factory),
                  update = {
                      updateViewHolderParams<T>(
                          modifier = materializedModifier,
                          compositeKeyHash = compositeKeyHash,
                          density = density,
                          lifecycleOwner = lifecycleOwner,
                          savedStateRegistryOwner = savedStateRegistryOwner,
                          layoutDirection = layoutDirection,
                          compositionLocalMap = compositionLocalMap,
                      )
                      set(onReset) { requireViewFactoryHolder<T>().resetBlock = it }
                      set(update) { requireViewFactoryHolder<T>().updateBlock = it }
                      set(onRelease) { requireViewFactoryHolder<T>().releaseBlock = it }
                  },
              )
          } else {
              ComposeNode<LayoutNode, UiApplier>(
                  factory = createAndroidViewNodeFactory(factory),
                  update = {
                      updateViewHolderParams<T>(
  - id: live-androidx-ui-viewinterop-android-view-lines-237-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 237
    endLine: 271
    sha256: cfed2cbc695d164140c426bdf139f57a50ef44a03608336768ab6982c8ec9e35
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          modifier = materializedModifier,
                          compositeKeyHash = compositeKeyHash,
                          density = density,
                          lifecycleOwner = lifecycleOwner,
                          savedStateRegistryOwner = savedStateRegistryOwner,
                          layoutDirection = layoutDirection,
                          compositionLocalMap = compositionLocalMap,
                      )
                      set(update) { requireViewFactoryHolder<T>().updateBlock = it }
                      set(onRelease) { requireViewFactoryHolder<T>().releaseBlock = it }
                  },
              )
          }
      }

      @Composable
      private fun <T : View> createAndroidViewNodeFactory(factory: (Context) -> T): () -> LayoutNode {
          val compositeKeyHash = currentCompositeKeyHashCode.hashCode()
          val context = LocalContext.current
          val parentReference = rememberCompositionContext()
          val stateRegistry = LocalSaveableStateRegistry.current
          val ownerView = LocalView.current

          return {
              ViewFactoryHolder(
                      context = context,
                      factory = factory,
                      parentContext = parentReference,
                      saveStateRegistry = stateRegistry,
                      compositeKeyHash = compositeKeyHash,
                      owner = ownerView as Owner,
                  )
                  .layoutNode
          }
      }
  - id: live-androidx-ui-viewinterop-android-view-lines-272-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 272
    endLine: 306
    sha256: e2936026cb99372bb22c6ca8dec03e5f31f75729863df840690b53a1fb047ab4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      private fun <T : View> Updater<LayoutNode>.updateViewHolderParams(
          modifier: Modifier,
          compositeKeyHash: Int,
          density: Density,
          lifecycleOwner: LifecycleOwner,
          savedStateRegistryOwner: SavedStateRegistryOwner,
          layoutDirection: LayoutDirection,
          compositionLocalMap: CompositionLocalMap,
      ) {
          set(compositionLocalMap, SetResolvedCompositionLocals)
          set(modifier) { requireViewFactoryHolder<T>().modifier = it }
          set(density) { requireViewFactoryHolder<T>().density = it }
          set(lifecycleOwner) { requireViewFactoryHolder<T>().lifecycleOwner = it }
          set(savedStateRegistryOwner) { requireViewFactoryHolder<T>().savedStateRegistryOwner = it }
          set(layoutDirection) {
              requireViewFactoryHolder<T>().layoutDirection =
                  when (it) {
                      LayoutDirection.Ltr -> android.util.LayoutDirection.LTR
                      LayoutDirection.Rtl -> android.util.LayoutDirection.RTL
                  }
          }
          set(compositeKeyHash, SetCompositeKeyHash)
      }

      @Suppress("UNCHECKED_CAST", "ExceptionMessage")
      private fun <T : View> LayoutNode.requireViewFactoryHolder(): ViewFactoryHolder<T> {
          @OptIn(InternalComposeUiApi::class)
          return checkPreconditionNotNull(interopViewFactoryHolder) as ViewFactoryHolder<T>
      }

      /** An empty update block used by [AndroidView]. */
      public val NoOpUpdate: View.() -> Unit = {}

      internal class ViewFactoryHolder<T : View>
  - id: live-androidx-ui-viewinterop-android-view-lines-307-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 307
    endLine: 341
    sha256: 1b2014e157206c019d760cbd43052ae3073c6cd73f129f51a6f3f72a4ed76a08
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      private constructor(
          context: Context,
          parentContext: CompositionContext? = null,
          private val typedView: T,
          // NestedScrollDispatcher that will be passed/used for nested scroll interop
          val dispatcher: NestedScrollDispatcher = NestedScrollDispatcher(),
          private val saveStateRegistry: SaveableStateRegistry?,
          private val compositeKeyHash: Int,
          owner: Owner,
      ) :
          AndroidViewHolder(context, parentContext, compositeKeyHash, dispatcher, typedView, owner),
          ViewRootForInspector {

          constructor(
              context: Context,
              factory: (Context) -> T,
              parentContext: CompositionContext? = null,
              saveStateRegistry: SaveableStateRegistry?,
              compositeKeyHash: Int,
              owner: Owner,
          ) : this(
              context = context,
              typedView = factory(context),
              parentContext = parentContext,
              saveStateRegistry = saveStateRegistry,
              compositeKeyHash = compositeKeyHash,
              owner = owner,
          )

          override val viewRoot: View
              get() = this

          private val saveStateKey: String

          private var savableRegistryEntry: SaveableStateRegistry.Entry? = null
  - id: live-androidx-ui-viewinterop-android-view-lines-342-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 342
    endLine: 376
    sha256: 7789b2b5bad93afd85ae050c897e9762659bd0f8ddb6a3b08cfdf117f545723a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              set(value) {
                  field?.unregister()
                  field = value
              }

          init {
              clipChildren = false
              saveStateKey = compositeKeyHash.toString()

              @Suppress("UNCHECKED_CAST")
              val savedState =
                  saveStateRegistry?.consumeRestored(saveStateKey) as? SparseArray<Parcelable>
              savedState?.let { typedView.restoreHierarchyState(it) }
              registerSaveStateProvider()
          }

          var updateBlock: (T) -> Unit = NoOpUpdate
              set(value) {
                  field = value
                  update = { typedView.apply(updateBlock) }
              }

          var resetBlock: (T) -> Unit = NoOpUpdate
              set(value) {
                  field = value
                  reset = { typedView.apply(resetBlock) }
              }

          var releaseBlock: (T) -> Unit = NoOpUpdate
              set(value) {
                  field = value
                  release = {
                      typedView.apply(releaseBlock)
                      unregisterSaveStateProvider()
                  }
  - id: live-androidx-ui-viewinterop-android-view-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 36
    endLine: 70
    sha256: c6b26ff55a4b2aef2d641eb849b724ce8c139d6d306b651f405661b31a61aa5d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.UiComposable
      import androidx.compose.ui.input.nestedscroll.NestedScrollDispatcher
      import androidx.compose.ui.internal.checkPreconditionNotNull
      import androidx.compose.ui.materialize
      import androidx.compose.ui.node.ComposeUiNode.Companion.SetCompositeKeyHash
      import androidx.compose.ui.node.ComposeUiNode.Companion.SetResolvedCompositionLocals
      import androidx.compose.ui.node.LayoutNode
      import androidx.compose.ui.node.Owner
      import androidx.compose.ui.node.UiApplier
      import androidx.compose.ui.platform.LocalContext
      import androidx.compose.ui.platform.LocalDensity
      import androidx.compose.ui.platform.LocalLayoutDirection
      import androidx.compose.ui.platform.LocalView
      import androidx.compose.ui.platform.ViewRootForInspector
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.lifecycle.LifecycleOwner
      import androidx.lifecycle.compose.LocalLifecycleOwner
      import androidx.lifecycle.findViewTreeLifecycleOwner
      import androidx.savedstate.SavedStateRegistryOwner
      import androidx.savedstate.compose.LocalSavedStateRegistryOwner

      /**
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
  - id: live-androidx-ui-viewinterop-android-view-lines-377-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 377
    endLine: 392
    sha256: c00d9f95bd86cfdb9db0163a111cff9057c3960748bbc0438449aa3f4148576e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              }

          private fun registerSaveStateProvider() {
              if (saveStateRegistry != null) {
                  savableRegistryEntry =
                      saveStateRegistry.registerProvider(saveStateKey) {
                          SparseArray<Parcelable>().apply { typedView.saveHierarchyState(this) }
                      }
              }
          }

          private fun unregisterSaveStateProvider() {
              savableRegistryEntry = null
          }
      }
  - id: live-androidx-ui-viewinterop-android-view-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt
    startLine: 71
    endLine: 105
    sha256: d76c590dc1553701b0d2d8a544d6570b27deb2266b503b996c28745c840774de
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * This overload of [AndroidView] does not automatically pool or reuse Views. If placed inside of a
       * reusable container (including inside a [LazyRow][androidx.compose.foundation.lazy.LazyRow] or
       * [LazyColumn][androidx.compose.foundation.lazy.LazyColumn]), the View instances will always be
       * discarded and recreated if the composition hierarchy containing the AndroidView changes, even if
       * its group structure did not change and the View could have conceivably been reused.
       *
       * To opt-in for View reuse, call the overload of [AndroidView] that accepts an `onReset` callback,
       * and provide a non-null implementation for this callback. Since it is expensive to discard and
       * recreate View instances, reusing Views can lead to noticeable performance improvements —
       * especially when building a scrolling list of [AndroidViews][AndroidView]. It is highly
       * recommended to opt-in to View reuse when possible.
       *
       * [AndroidView] will not clip its content to the layout bounds. Use [View.setClipToOutline] on the
       * child View to clip the contents, if desired. Developers will likely want to do this with all
       * subclasses of SurfaceView to keep its contents contained.
       *
       * [AndroidView] automatically participates in nested scrolling when a descendant [View] dispatches
       * nested scroll events. This means this Composable can dispatch scroll deltas if it is placed
       * inside a container that participates in nested scroll:
       *
       * @sample androidx.compose.ui.samples.ViewInComposeNestedScrollInteropSample
       * @sample androidx.compose.ui.samples.AndroidViewSample
       * @param factory The block creating the [View] to be composed.
       * @param modifier The modifier to be applied to the layout.
       * @param update A callback to be invoked after the layout is inflated and upon recomposition to
       *   update the information and state of the view.
       */
      @Composable
      @UiComposable
      public fun <T : View> AndroidView(
          factory: (Context) -> T,
          modifier: Modifier = Modifier,
          update: (T) -> Unit = NoOpUpdate,
      ) {
compose:
  id: live-androidx-ui-viewinterop-android-view
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.viewinterop.AndroidView
  sections:
    - id: contract-androidview-callback-parameters
      title: AndroidView callback cleanup and reuse parameters
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - contract-androidview-callback-parameters-source
      relatedIds: []
    - id: contract-androidview-factory-reuse-release
      title: AndroidView factory, update, reset, and release lifecycle
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - contract-androidview-factory-reuse-release-source
      relatedIds: []
    - id: live-androidx-ui-viewinterop-android-view-lines-1
      title: AndroidView lifecycle source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-viewinterop-android-view-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-viewinterop-android-view-lines-106
      title: AndroidView lifecycle source (lines 106–136)
      aliases:
        - androidx.compose.ui.viewinterop.AndroidView
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-viewinterop-android-view-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-viewinterop-android-view-lines-137
      title: AndroidView lifecycle source (lines 137–166)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-viewinterop-android-view-lines-137-source
      relatedIds: []
    - id: live-androidx-ui-viewinterop-android-view-lines-167
      title: AndroidView lifecycle source (lines 167–201)
      aliases:
        - androidx.compose.ui.viewinterop.AndroidView
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-viewinterop-android-view-lines-167-source
      relatedIds: []
    - id: live-androidx-ui-viewinterop-android-view-lines-202
      title: AndroidView lifecycle source (lines 202–236)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-viewinterop-android-view-lines-202-source
      relatedIds: []
    - id: live-androidx-ui-viewinterop-android-view-lines-237
      title: AndroidView lifecycle source (lines 237–271)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-viewinterop-android-view-lines-237-source
      relatedIds: []
    - id: live-androidx-ui-viewinterop-android-view-lines-272
      title: AndroidView lifecycle source (lines 272–306)
      aliases:
        - androidx.compose.ui.viewinterop.AndroidView
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-viewinterop-android-view-lines-272-source
      relatedIds: []
    - id: live-androidx-ui-viewinterop-android-view-lines-307
      title: AndroidView lifecycle source (lines 307–341)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-viewinterop-android-view-lines-307-source
      relatedIds: []
    - id: live-androidx-ui-viewinterop-android-view-lines-342
      title: AndroidView lifecycle source (lines 342–376)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-viewinterop-android-view-lines-342-source
      relatedIds: []
    - id: live-androidx-ui-viewinterop-android-view-lines-36
      title: AndroidView lifecycle source (lines 36–70)
      aliases:
        - androidx.compose.ui.viewinterop.AndroidView
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-viewinterop-android-view-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-viewinterop-android-view-lines-377
      title: AndroidView lifecycle source (lines 377–392)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-viewinterop-android-view-lines-377-source
      relatedIds: []
    - id: live-androidx-ui-viewinterop-android-view-lines-71
      title: AndroidView lifecycle source (lines 71–105)
      aliases:
        - androidx.compose.ui.viewinterop.AndroidView
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-viewinterop-android-view-lines-71-source
      relatedIds: []
---

# AndroidView lifecycle source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt

## AndroidView callback cleanup and reuse parameters

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

Sources: [contract-androidview-callback-parameters-source](https://android.googlesource.com/platform/frameworks/support/+/90b86d803a0ab75e5c4c320fd855a5d4f1bc6b04/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)

## AndroidView factory, update, reset, and release lifecycle

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

Sources: [contract-androidview-factory-reuse-release-source](https://android.googlesource.com/platform/frameworks/support/+/90b86d803a0ab75e5c4c320fd855a5d4f1bc6b04/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)

## AndroidView lifecycle source (lines 1–35)

/*
 * Copyright 2020 The Android Open Source Project
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

package androidx.compose.ui.viewinterop

import android.content.Context
import android.os.Parcelable
import android.util.SparseArray
import android.view.View
import androidx.compose.runtime.Composable
import androidx.compose.runtime.ComposeNode
import androidx.compose.runtime.CompositionContext
import androidx.compose.runtime.CompositionLocalMap
import androidx.compose.runtime.ReusableComposeNode
import androidx.compose.runtime.ReusableContentHost
import androidx.compose.runtime.Updater
import androidx.compose.runtime.currentComposer
import androidx.compose.runtime.currentCompositeKeyHashCode
import androidx.compose.runtime.rememberCompositionContext
import androidx.compose.runtime.saveable.LocalSaveableStateRegistry
import androidx.compose.runtime.saveable.SaveableStateRegistry
import androidx.compose.ui.InternalComposeUiApi

Sources: [live-androidx-ui-viewinterop-android-view-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)

## AndroidView lifecycle source (lines 106–136)

    AndroidView(factory = factory, modifier = modifier, update = update, onRelease = NoOpUpdate)
}

/**
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

Sources: [live-androidx-ui-viewinterop-android-view-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)

## AndroidView lifecycle source (lines 137–166)

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
 *

Sources: [live-androidx-ui-viewinterop-android-view-lines-137-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)

## AndroidView lifecycle source (lines 167–201)

 * [AndroidView] will not clip its content to the layout bounds. Use [View.setClipToOutline] on the
 * child View to clip the contents, if desired. Developers will likely want to do this with all
 * subclasses of SurfaceView to keep its contents contained.
 *
 * [AndroidView] automatically participates in nested scrolling when a descendant [View] dispatches
 * nested scroll events. This means this Composable can dispatch scroll deltas if it is placed
 * inside a container that participates in nested scroll:
 *
 * @sample androidx.compose.ui.samples.ViewInComposeNestedScrollInteropSample
 * @sample androidx.compose.ui.samples.AndroidViewSample
 * @sample androidx.compose.ui.samples.ReusableAndroidViewInLazyColumnSample
 * @sample androidx.compose.ui.samples.AndroidViewWithReleaseSample
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
 */
@Composable
@UiComposable
public fun <T : View> AndroidView(
    factory: (Context) -> T,
    modifier: Modifier = Modifier,
    onReset: ((T) -> Unit)? = null,
    onRelease: (T) -> Unit = NoOpUpdate,
    update: (T) -> Unit = NoOpUpdate,
) {
    val compositeKeyHash = currentCompositeKeyHashCode.hashCode()

Sources: [live-androidx-ui-viewinterop-android-view-lines-167-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)

## AndroidView lifecycle source (lines 202–236)

    val materializedModifier = currentComposer.materialize(modifier.focusInteropModifier())
    val density = LocalDensity.current
    val layoutDirection = LocalLayoutDirection.current
    val compositionLocalMap = currentComposer.currentCompositionLocalMap

    // These locals are initialized from the view tree at the AndroidComposeView hosting this
    // composition, but they need to be passed to this Android View so that the ViewTree*Owner
    // functions return the correct owners if different local values were provided by the
    // composition, e.g. by a navigation library.
    val lifecycleOwner = LocalLifecycleOwner.current
    val savedStateRegistryOwner = LocalSavedStateRegistryOwner.current

    if (onReset != null) {
        ReusableComposeNode<LayoutNode, UiApplier>(
            factory = createAndroidViewNodeFactory(factory),
            update = {
                updateViewHolderParams<T>(
                    modifier = materializedModifier,
                    compositeKeyHash = compositeKeyHash,
                    density = density,
                    lifecycleOwner = lifecycleOwner,
                    savedStateRegistryOwner = savedStateRegistryOwner,
                    layoutDirection = layoutDirection,
                    compositionLocalMap = compositionLocalMap,
                )
                set(onReset) { requireViewFactoryHolder<T>().resetBlock = it }
                set(update) { requireViewFactoryHolder<T>().updateBlock = it }
                set(onRelease) { requireViewFactoryHolder<T>().releaseBlock = it }
            },
        )
    } else {
        ComposeNode<LayoutNode, UiApplier>(
            factory = createAndroidViewNodeFactory(factory),
            update = {
                updateViewHolderParams<T>(

Sources: [live-androidx-ui-viewinterop-android-view-lines-202-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)

## AndroidView lifecycle source (lines 237–271)

                    modifier = materializedModifier,
                    compositeKeyHash = compositeKeyHash,
                    density = density,
                    lifecycleOwner = lifecycleOwner,
                    savedStateRegistryOwner = savedStateRegistryOwner,
                    layoutDirection = layoutDirection,
                    compositionLocalMap = compositionLocalMap,
                )
                set(update) { requireViewFactoryHolder<T>().updateBlock = it }
                set(onRelease) { requireViewFactoryHolder<T>().releaseBlock = it }
            },
        )
    }
}

@Composable
private fun <T : View> createAndroidViewNodeFactory(factory: (Context) -> T): () -> LayoutNode {
    val compositeKeyHash = currentCompositeKeyHashCode.hashCode()
    val context = LocalContext.current
    val parentReference = rememberCompositionContext()
    val stateRegistry = LocalSaveableStateRegistry.current
    val ownerView = LocalView.current

    return {
        ViewFactoryHolder(
                context = context,
                factory = factory,
                parentContext = parentReference,
                saveStateRegistry = stateRegistry,
                compositeKeyHash = compositeKeyHash,
                owner = ownerView as Owner,
            )
            .layoutNode
    }
}

Sources: [live-androidx-ui-viewinterop-android-view-lines-237-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)

## AndroidView lifecycle source (lines 272–306)


private fun <T : View> Updater<LayoutNode>.updateViewHolderParams(
    modifier: Modifier,
    compositeKeyHash: Int,
    density: Density,
    lifecycleOwner: LifecycleOwner,
    savedStateRegistryOwner: SavedStateRegistryOwner,
    layoutDirection: LayoutDirection,
    compositionLocalMap: CompositionLocalMap,
) {
    set(compositionLocalMap, SetResolvedCompositionLocals)
    set(modifier) { requireViewFactoryHolder<T>().modifier = it }
    set(density) { requireViewFactoryHolder<T>().density = it }
    set(lifecycleOwner) { requireViewFactoryHolder<T>().lifecycleOwner = it }
    set(savedStateRegistryOwner) { requireViewFactoryHolder<T>().savedStateRegistryOwner = it }
    set(layoutDirection) {
        requireViewFactoryHolder<T>().layoutDirection =
            when (it) {
                LayoutDirection.Ltr -> android.util.LayoutDirection.LTR
                LayoutDirection.Rtl -> android.util.LayoutDirection.RTL
            }
    }
    set(compositeKeyHash, SetCompositeKeyHash)
}

@Suppress("UNCHECKED_CAST", "ExceptionMessage")
private fun <T : View> LayoutNode.requireViewFactoryHolder(): ViewFactoryHolder<T> {
    @OptIn(InternalComposeUiApi::class)
    return checkPreconditionNotNull(interopViewFactoryHolder) as ViewFactoryHolder<T>
}

/** An empty update block used by [AndroidView]. */
public val NoOpUpdate: View.() -> Unit = {}

internal class ViewFactoryHolder<T : View>

Sources: [live-androidx-ui-viewinterop-android-view-lines-272-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)

## AndroidView lifecycle source (lines 307–341)

private constructor(
    context: Context,
    parentContext: CompositionContext? = null,
    private val typedView: T,
    // NestedScrollDispatcher that will be passed/used for nested scroll interop
    val dispatcher: NestedScrollDispatcher = NestedScrollDispatcher(),
    private val saveStateRegistry: SaveableStateRegistry?,
    private val compositeKeyHash: Int,
    owner: Owner,
) :
    AndroidViewHolder(context, parentContext, compositeKeyHash, dispatcher, typedView, owner),
    ViewRootForInspector {

    constructor(
        context: Context,
        factory: (Context) -> T,
        parentContext: CompositionContext? = null,
        saveStateRegistry: SaveableStateRegistry?,
        compositeKeyHash: Int,
        owner: Owner,
    ) : this(
        context = context,
        typedView = factory(context),
        parentContext = parentContext,
        saveStateRegistry = saveStateRegistry,
        compositeKeyHash = compositeKeyHash,
        owner = owner,
    )

    override val viewRoot: View
        get() = this

    private val saveStateKey: String

    private var savableRegistryEntry: SaveableStateRegistry.Entry? = null

Sources: [live-androidx-ui-viewinterop-android-view-lines-307-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)

## AndroidView lifecycle source (lines 342–376)

        set(value) {
            field?.unregister()
            field = value
        }

    init {
        clipChildren = false
        saveStateKey = compositeKeyHash.toString()

        @Suppress("UNCHECKED_CAST")
        val savedState =
            saveStateRegistry?.consumeRestored(saveStateKey) as? SparseArray<Parcelable>
        savedState?.let { typedView.restoreHierarchyState(it) }
        registerSaveStateProvider()
    }

    var updateBlock: (T) -> Unit = NoOpUpdate
        set(value) {
            field = value
            update = { typedView.apply(updateBlock) }
        }

    var resetBlock: (T) -> Unit = NoOpUpdate
        set(value) {
            field = value
            reset = { typedView.apply(resetBlock) }
        }

    var releaseBlock: (T) -> Unit = NoOpUpdate
        set(value) {
            field = value
            release = {
                typedView.apply(releaseBlock)
                unregisterSaveStateProvider()
            }

Sources: [live-androidx-ui-viewinterop-android-view-lines-342-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)

## AndroidView lifecycle source (lines 36–70)

import androidx.compose.ui.Modifier
import androidx.compose.ui.UiComposable
import androidx.compose.ui.input.nestedscroll.NestedScrollDispatcher
import androidx.compose.ui.internal.checkPreconditionNotNull
import androidx.compose.ui.materialize
import androidx.compose.ui.node.ComposeUiNode.Companion.SetCompositeKeyHash
import androidx.compose.ui.node.ComposeUiNode.Companion.SetResolvedCompositionLocals
import androidx.compose.ui.node.LayoutNode
import androidx.compose.ui.node.Owner
import androidx.compose.ui.node.UiApplier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.platform.LocalView
import androidx.compose.ui.platform.ViewRootForInspector
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.LayoutDirection
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.compose.LocalLifecycleOwner
import androidx.lifecycle.findViewTreeLifecycleOwner
import androidx.savedstate.SavedStateRegistryOwner
import androidx.savedstate.compose.LocalSavedStateRegistryOwner

/**
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

Sources: [live-androidx-ui-viewinterop-android-view-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)

## AndroidView lifecycle source (lines 377–392)

        }

    private fun registerSaveStateProvider() {
        if (saveStateRegistry != null) {
            savableRegistryEntry =
                saveStateRegistry.registerProvider(saveStateKey) {
                    SparseArray<Parcelable>().apply { typedView.saveHierarchyState(this) }
                }
        }
    }

    private fun unregisterSaveStateProvider() {
        savableRegistryEntry = null
    }
}


Sources: [live-androidx-ui-viewinterop-android-view-lines-377-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)

## AndroidView lifecycle source (lines 71–105)

 *
 * This overload of [AndroidView] does not automatically pool or reuse Views. If placed inside of a
 * reusable container (including inside a [LazyRow][androidx.compose.foundation.lazy.LazyRow] or
 * [LazyColumn][androidx.compose.foundation.lazy.LazyColumn]), the View instances will always be
 * discarded and recreated if the composition hierarchy containing the AndroidView changes, even if
 * its group structure did not change and the View could have conceivably been reused.
 *
 * To opt-in for View reuse, call the overload of [AndroidView] that accepts an `onReset` callback,
 * and provide a non-null implementation for this callback. Since it is expensive to discard and
 * recreate View instances, reusing Views can lead to noticeable performance improvements —
 * especially when building a scrolling list of [AndroidViews][AndroidView]. It is highly
 * recommended to opt-in to View reuse when possible.
 *
 * [AndroidView] will not clip its content to the layout bounds. Use [View.setClipToOutline] on the
 * child View to clip the contents, if desired. Developers will likely want to do this with all
 * subclasses of SurfaceView to keep its contents contained.
 *
 * [AndroidView] automatically participates in nested scrolling when a descendant [View] dispatches
 * nested scroll events. This means this Composable can dispatch scroll deltas if it is placed
 * inside a container that participates in nested scroll:
 *
 * @sample androidx.compose.ui.samples.ViewInComposeNestedScrollInteropSample
 * @sample androidx.compose.ui.samples.AndroidViewSample
 * @param factory The block creating the [View] to be composed.
 * @param modifier The modifier to be applied to the layout.
 * @param update A callback to be invoked after the layout is inflated and upon recomposition to
 *   update the information and state of the view.
 */
@Composable
@UiComposable
public fun <T : View> AndroidView(
    factory: (Context) -> T,
    modifier: Modifier = Modifier,
    update: (T) -> Unit = NoOpUpdate,
) {

Sources: [live-androidx-ui-viewinterop-android-view-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt)
