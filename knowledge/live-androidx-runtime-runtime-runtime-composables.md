---
type: reference
title: androidx.compose.runtime Composables.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-runtime-runtime-runtime-composables-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 1
    endLine: 35
    sha256: 6c5029bbe42e5ee116256f999b4c15021a4fbc882dd0c02330ac5820e03041cf
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

      package androidx.compose.runtime

      /**
       * Remember the value produced by [calculation]. [calculation] will only be evaluated during the
       * composition. Recomposition will always return the value produced by composition.
       */
      @Composable
      public inline fun <T> remember(crossinline calculation: @DisallowComposableCalls () -> T): T =
          currentComposer.cache(false, calculation)

      /**
       * Remember the value returned by [calculation] if [key1] compares equal (`==`) to the value it had
       * in the previous composition, otherwise produce and remember a new value by calling [calculation].
       */
      @Composable
      public inline fun <T> remember(
          key1: Any?,
          crossinline calculation: @DisallowComposableCalls () -> T,
      ): T {
  - id: live-androidx-runtime-runtime-runtime-composables-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 106
    endLine: 140
    sha256: c067f019b311346748d9528668449c2512c8a6407b9405a408edfbc56a07d032
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * The key must be unique for each element in the collection, however, or children and local state
       * might be reused in unintended ways.
       *
       * For instance, consider the following example:
       *
       * @sample androidx.compose.runtime.samples.NotAlwaysUniqueKeys
       *
       * This example assumes that `parent.id` is a unique key for each item in the collection, but this
       * is only true if it is fair to assume that a parent will only ever have a single child, which may
       * not be the case. Instead, it may be more correct to do the following:
       *
       * @sample androidx.compose.runtime.samples.MoreCorrectUniqueKeys
       *
       * A compound key can be created by passing in multiple arguments:
       *
       * @sample androidx.compose.runtime.samples.TwoInputsKeySample
       * @param keys The set of values to be used to create a compound key. These will be compared to
       *   their previous values using [equals] and [hashCode]
       * @param block The composable children for this group.
       */
      @Composable
      public inline fun <T> key(
          @Suppress("UNUSED_PARAMETER") vararg keys: Any?,
          block: @Composable () -> T,
      ): T = block()

      /**
       * A utility function to mark a composition as supporting recycling. If the [key] changes the
       * composition is replaced by a new composition (as would happen for [key]) but reusable nodes that
       * are emitted by [ReusableComposeNode] are reused.
       *
       * @param key the value that is used to trigger recycling. If recomposed with a different value the
       *   composer creates a new composition but tries to reuse reusable nodes.
       * @param content the composable children that are recyclable.
       */
  - id: live-androidx-runtime-runtime-runtime-composables-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 141
    endLine: 175
    sha256: de4963e5113ef7865a9a0bd6086ebbca2ace8d073519fc1a6381ae88d5e1997c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Composable
      public inline fun ReusableContent(key: Any?, content: @Composable () -> Unit) {
          currentComposer.startReusableGroup(reuseKey, key)
          content()
          currentComposer.endReusableGroup()
      }

      /**
       * An optional utility function used when hosting [ReusableContent]. If [active] is false the
       * content is treated as if it is deleted by removing all remembered objects from the composition
       * but the node produced for the tree are not removed. When the composition later becomes active
       * then the nodes are able to be reused inside [ReusableContent] content without requiring the
       * remembered state of the composition's lifetime being arbitrarily extended.
       *
       * @param active when [active] is `true` [content] is composed normally. When [active] is `false`
       *   then the content is deactivated and all remembered state is treated as if the content was
       *   deleted but the nodes managed by the composition's [Applier] are unaffected. A [active] becomes
       *   `true` any reusable nodes from the previously active composition are candidates for reuse.
       * @param content the composable content that is managed by this composable.
       */
      @Composable
      @ExplicitGroupsComposable
      public inline fun ReusableContentHost(
          active: Boolean,
          crossinline content: @Composable () -> Unit,
      ) {
          currentComposer.startReusableGroup(reuseKey, active)
          val activeChanged = currentComposer.changed(active)
          if (active) {
              content()
          } else {
              currentComposer.deactivateToEndGroup(activeChanged)
          }
          currentComposer.endReusableGroup()
      }
  - id: live-androidx-runtime-runtime-runtime-composables-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 176
    endLine: 210
    sha256: 57e1289d01b88238286627e04c3446b2943d4ec4145c367ee37435eefea0ad3b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * A Compose internal function. DO NOT call directly.
       *
       * Returns the [Composer] instance currently being used to perform composition. The returned
       * Composer is specific to the location where this property is read. There are no guarantees that
       * the same Composer object will be returned elsewhere in the composition or that the Composer
       * instance will be the same across recompositions.
       *
       * This property is exposed for use by the runtime, compiler, and tooling. It is not recommended for
       * public consumption. Mutating the state of the composer outside of calls generated by the Compose
       * compiler is not supported.
       */
      public val currentComposer: Composer
          @ReadOnlyComposable
          @Composable
          get() {
              throw NotImplementedError("Implemented as an intrinsic")
          }

      /**
       * Returns the [CompositionContext] associated for the current composer.
       *
       * This API is exposed for internal usages only. It should not be invoked outside of the Compose
       * Runtime
       */
      @InternalComposeApi
      public val currentCompositionContext: CompositionContext
          @TestOnly
          @ReadOnlyComposable
          @Composable
          get() = (currentComposer.composition as CompositionImpl).parent

      /**
       * Returns an object which can be used to invalidate the current scope at this point in composition.
  - id: live-androidx-runtime-runtime-runtime-composables-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 211
    endLine: 245
    sha256: 6e6e1c5958010dfc22085bdf1add9f041b74716eb0df3c2f391c26f23df35e0e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * This object can be used to manually cause recompositions.
       */
      public val currentRecomposeScope: RecomposeScope
          @ReadOnlyComposable
          @OptIn(InternalComposeApi::class)
          @Composable
          get() {
              val scope = currentComposer.recomposeScope ?: error("no recompose scope found")
              currentComposer.recordUsed(scope)
              return scope
          }

      /**
       * Returns the current [CompositionLocalContext] which contains all [CompositionLocal]'s in the
       * current composition and their values provided by [CompositionLocalProvider]'s. This context can
       * be used to pass locals to another composition via [CompositionLocalProvider]. That is usually
       * needed if another composition is not a subcomposition of the current one.
       */
      @OptIn(InternalComposeApi::class)
      public val currentCompositionLocalContext: CompositionLocalContext
          @Composable
          get() = CompositionLocalContext(currentComposer.buildContext().getCompositionLocalScope())

      /**
       * This a hash value used to coordinate map externally stored state to the composition. For example,
       * this is used by saved instance state to preserve state across activity lifetime boundaries.
       *
       * This value is likely to be unique but is not guaranteed unique. There are known cases, such as
       * for loops without a [key], where the runtime does not have enough information to make the
       * compound key hash unique.
       *
       * @see currentCompositeKeyHashCode
       */
      @Deprecated(
          "Prefer the higher-precision currentCompositeKeyHashCode",
  - id: live-androidx-runtime-runtime-runtime-composables-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 246
    endLine: 280
    sha256: 2698bbea8186b6fd006f344f0d7c50a345ab7fd4410bec42705aa6dfc4e03926
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ReplaceWith("currentCompositeKeyHashCode"),
      )
      @Suppress("DEPRECATION")
      public val currentCompositeKeyHash: Int
          @Composable
          @ExplicitGroupsComposable
          @OptIn(InternalComposeApi::class)
          get() = currentComposer.compoundKeyHash

      /**
       * A higher-precision variation of [currentCompositeKeyHash] used to map externally stored state to
       * the composition. By stepping up to a Long, this variation of the key hash is exponentially less
       * likely to experience a collision.
       *
       * In practice, because the hash is not perfectly distributed and because there are situations where
       * the runtime can't uniquely identify certain repeated content, collisions are still possible. This
       * higher precision does, however, afford more confidence in the assumption that an arbitrarily
       * sized composition hierarchy will not experience two unrelated groups having the same key hash.
       */
      public val currentCompositeKeyHashCode: CompositeKeyHashCode
          @Composable
          @ExplicitGroupsComposable
          @OptIn(InternalComposeApi::class)
          get() = currentComposer.compositeKeyHashCode

      /**
       * Emits a node into the composition of type [T].
       *
       * This function will throw a runtime exception if [E] is not a subtype of the applier of the
       * [currentComposer].
       *
       * @sample androidx.compose.runtime.samples.CustomTreeComposition
       * @param factory A function which will create a new instance of [T]. This function is NOT
       *   guaranteed to be called in place.
       * @param update A function to perform updates on the node. This will run every time emit is
  - id: live-androidx-runtime-runtime-runtime-composables-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 281
    endLine: 315
    sha256: e3d683f7564834d4fbe3a942c0691d4faa24aed9f4a31232f984598dd678b779
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   executed. This function is called in place and will be inlined.
       * @see Updater
       * @see Applier
       * @see Composition
       */
      // ComposeNode is a special case of readonly composable and handles creating its own groups, so
      // it is okay to use.
      @Suppress("NONREADONLY_CALL_IN_READONLY_COMPOSABLE", "UnnecessaryLambdaCreation")
      @Composable
      public inline fun <T : Any, reified E : Applier<*>> ComposeNode(
          noinline factory: () -> T,
          update: @DisallowComposableCalls Updater<T>.() -> Unit,
      ) {
          if (currentComposer.applier !is E) invalidApplier()
          currentComposer.startNode()
          if (currentComposer.inserting) {
              currentComposer.createNode(factory)
          } else {
              currentComposer.useNode()
          }
          Updater<T>(currentComposer).update()
          currentComposer.endNode()
      }

      /**
       * Emits a recyclable node into the composition of type [T].
       *
       * This function will throw a runtime exception if [E] is not a subtype of the applier of the
       * [currentComposer].
       *
       * @sample androidx.compose.runtime.samples.CustomTreeComposition
       * @param factory A function which will create a new instance of [T]. This function is NOT
       *   guaranteed to be called in place.
       * @param update A function to perform updates on the node. This will run every time emit is
       *   executed. This function is called in place and will be inlined.
  - id: live-androidx-runtime-runtime-runtime-composables-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 316
    endLine: 350
    sha256: e76c754c0f58f24e35336ee45787f359ec0ab174a39dfed7cedb8ff34c8314e6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @see Updater
       * @see Applier
       * @see Composition
       */
      // ComposeNode is a special case of readonly composable and handles creating its own groups, so
      // it is okay to use.
      @Suppress("NONREADONLY_CALL_IN_READONLY_COMPOSABLE", "UnnecessaryLambdaCreation")
      @Composable
      public inline fun <T : Any, reified E : Applier<*>> ReusableComposeNode(
          noinline factory: () -> T,
          update: @DisallowComposableCalls Updater<T>.() -> Unit,
      ) {
          if (currentComposer.applier !is E) invalidApplier()
          currentComposer.startReusableNode()
          if (currentComposer.inserting) {
              currentComposer.createNode(factory)
          } else {
              currentComposer.useNode()
          }
          Updater<T>(currentComposer).update()
          currentComposer.endNode()
      }

      /**
       * Emits a node into the composition of type [T]. Nodes emitted inside of [content] will become
       * children of the emitted node.
       *
       * This function will throw a runtime exception if [E] is not a subtype of the applier of the
       * [currentComposer].
       *
       * @sample androidx.compose.runtime.samples.CustomTreeComposition
       * @param factory A function which will create a new instance of [T]. This function is NOT
       *   guaranteed to be called in place.
       * @param update A function to perform updates on the node. This will run every time emit is
       *   executed. This function is called in place and will be inlined.
  - id: live-androidx-runtime-runtime-runtime-composables-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 351
    endLine: 385
    sha256: d74249c1b0bc957d76bbb8af732dbf6d308476d13f0654a339c68c5520e62736
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param content the composable content that will emit the "children" of this node.
       * @see Updater
       * @see Applier
       * @see Composition
       */
      // ComposeNode is a special case of readonly composable and handles creating its own groups, so
      // it is okay to use.
      @Suppress("NONREADONLY_CALL_IN_READONLY_COMPOSABLE")
      @Composable
      public inline fun <T : Any?, reified E : Applier<*>> ComposeNode(
          noinline factory: () -> T,
          update: @DisallowComposableCalls Updater<T>.() -> Unit,
          content: @Composable () -> Unit,
      ) {
          if (currentComposer.applier !is E) invalidApplier()
          currentComposer.startNode()
          if (currentComposer.inserting) {
              currentComposer.createNode(factory)
          } else {
              currentComposer.useNode()
          }
          Updater<T>(currentComposer).update()
          content()
          currentComposer.endNode()
      }

      /**
       * Emits a recyclable node into the composition of type [T]. Nodes emitted inside of [content] will
       * become children of the emitted node.
       *
       * This function will throw a runtime exception if [E] is not a subtype of the applier of the
       * [currentComposer].
       *
       * @sample androidx.compose.runtime.samples.CustomTreeComposition
       * @param factory A function which will create a new instance of [T]. This function is NOT
  - id: live-androidx-runtime-runtime-runtime-composables-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 36
    endLine: 70
    sha256: 1e67595a7661458f6e97cc11fcff817111214e81f66681dcd313c5369e3744b0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          return currentComposer.cache(currentComposer.changed(key1), calculation)
      }

      /**
       * Remember the value returned by [calculation] if [key1] and [key2] are equal (`==`) to the values
       * they had in the previous composition, otherwise produce and remember a new value by calling
       * [calculation].
       */
      @Composable
      public inline fun <T> remember(
          key1: Any?,
          key2: Any?,
          crossinline calculation: @DisallowComposableCalls () -> T,
      ): T {
          return currentComposer.cache(
              currentComposer.changed(key1) or currentComposer.changed(key2),
              calculation,
          )
      }

      /**
       * Remember the value returned by [calculation] if [key1], [key2] and [key3] are equal (`==`) to
       * values they had in the previous composition, otherwise produce and remember a new value by
       * calling [calculation].
       */
      @Composable
      public inline fun <T> remember(
          key1: Any?,
          key2: Any?,
          key3: Any?,
          crossinline calculation: @DisallowComposableCalls () -> T,
      ): T {
          return currentComposer.cache(
              currentComposer.changed(key1) or
                  currentComposer.changed(key2) or
  - id: live-androidx-runtime-runtime-runtime-composables-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 386
    endLine: 420
    sha256: 45bfc97507ae71598ee0a4b5d6e3d118122b0beebd5cf8220d2ba1056af0a645
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   guaranteed to be called in place.
       * @param update A function to perform updates on the node. This will run every time emit is
       *   executed. This function is called in place and will be inlined.
       * @param content the composable content that will emit the "children" of this node.
       * @see Updater
       * @see Applier
       * @see Composition
       */
      // ComposeNode is a special case of readonly composable and handles creating its own groups, so
      // it is okay to use.
      @Suppress("NONREADONLY_CALL_IN_READONLY_COMPOSABLE")
      @Composable
      public inline fun <T : Any?, reified E : Applier<*>> ReusableComposeNode(
          noinline factory: () -> T,
          update: @DisallowComposableCalls Updater<T>.() -> Unit,
          content: @Composable () -> Unit,
      ) {
          if (currentComposer.applier !is E) invalidApplier()
          currentComposer.startReusableNode()
          if (currentComposer.inserting) {
              currentComposer.createNode(factory)
          } else {
              currentComposer.useNode()
          }
          Updater<T>(currentComposer).update()
          content()
          currentComposer.endNode()
      }

      /**
       * Emits a node into the composition of type [T]. Nodes emitted inside of [content] will become
       * children of the emitted node.
       *
       * This function will throw a runtime exception if [E] is not a subtype of the applier of the
       * [currentComposer].
  - id: live-androidx-runtime-runtime-runtime-composables-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 421
    endLine: 455
    sha256: a0ec417e829dfe1d5d955cbcadc254b7fe82acab12c9cc4abd26cbd8f7040158
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @sample androidx.compose.runtime.samples.CustomTreeComposition
       * @param factory A function which will create a new instance of [T]. This function is NOT
       *   guaranteed to be called in place.
       * @param update A function to perform updates on the node. This will run every time emit is
       *   executed. This function is called in place and will be inlined.
       * @param skippableUpdate A function to perform updates on the node. Unlike [update], this function
       *   is Composable and will therefore be skipped unless it has been invalidated by some other
       *   mechanism. This can be useful to perform expensive calculations for updating the node where the
       *   calculations are likely to have the same inputs over time, so the function's execution can be
       *   skipped.
       * @param content the composable content that will emit the "children" of this node.
       * @see Updater
       * @see SkippableUpdater
       * @see Applier
       * @see Composition
       */
      @Composable
      @ExplicitGroupsComposable
      public inline fun <T, reified E : Applier<*>> ComposeNode(
          noinline factory: () -> T,
          update: @DisallowComposableCalls Updater<T>.() -> Unit,
          noinline skippableUpdate: @Composable SkippableUpdater<T>.() -> Unit,
          content: @Composable () -> Unit,
      ) {
          if (currentComposer.applier !is E) invalidApplier()
          currentComposer.startNode()
          if (currentComposer.inserting) {
              currentComposer.createNode(factory)
          } else {
              currentComposer.useNode()
          }
          Updater<T>(currentComposer).update()
          SkippableUpdater<T>(currentComposer).skippableUpdate()
          currentComposer.startReplaceableGroup(0x7ab4aae9)
  - id: live-androidx-runtime-runtime-runtime-composables-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 456
    endLine: 490
    sha256: 63ac16f8655f2d26ae2378d79e4ba023c21761799860004f201c1b09e5907b8b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          content()
          currentComposer.endReplaceableGroup()
          currentComposer.endNode()
      }

      /**
       * Emits a recyclable node into the composition of type [T]. Nodes emitted inside of [content] will
       * become children of the emitted node.
       *
       * This function will throw a runtime exception if [E] is not a subtype of the applier of the
       * [currentComposer].
       *
       * @sample androidx.compose.runtime.samples.CustomTreeComposition
       * @param factory A function which will create a new instance of [T]. This function is NOT
       *   guaranteed to be called in place.
       * @param update A function to perform updates on the node. This will run every time emit is
       *   executed. This function is called in place and will be inlined.
       * @param skippableUpdate A function to perform updates on the node. Unlike [update], this function
       *   is Composable and will therefore be skipped unless it has been invalidated by some other
       *   mechanism. This can be useful to perform expensive calculations for updating the node where the
       *   calculations are likely to have the same inputs over time, so the function's execution can be
       *   skipped.
       * @param content the composable content that will emit the "children" of this node.
       * @see Updater
       * @see SkippableUpdater
       * @see Applier
       * @see Composition
       */
      @Composable
      @ExplicitGroupsComposable
      public inline fun <T, reified E : Applier<*>> ReusableComposeNode(
          noinline factory: () -> T,
          update: @DisallowComposableCalls Updater<T>.() -> Unit,
          noinline skippableUpdate: @Composable SkippableUpdater<T>.() -> Unit,
          content: @Composable () -> Unit,
  - id: live-androidx-runtime-runtime-runtime-composables-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 491
    endLine: 520
    sha256: de10c5902bdc3e4ddbd59479b423d2da23b920eeb5e6acaee23907e65db4420b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      ) {
          if (currentComposer.applier !is E) invalidApplier()
          currentComposer.startReusableNode()
          if (currentComposer.inserting) {
              currentComposer.createNode(factory)
          } else {
              currentComposer.useNode()
          }
          Updater<T>(currentComposer).update()
          SkippableUpdater<T>(currentComposer).skippableUpdate()
          currentComposer.startReplaceableGroup(0x7ab4aae9)
          content()
          currentComposer.endReplaceableGroup()
          currentComposer.endNode()
      }

      @PublishedApi internal fun invalidApplier(): Unit = error("Invalid applier")

      /**
       * An Effect to construct a [CompositionContext] at the current point of composition. This can be
       * used to run a separate composition in the context of the current one, preserving
       * [CompositionLocal]s and propagating invalidations. When this call leaves the composition, the
       * context is invalidated.
       */
      @OptIn(InternalComposeApi::class)
      @Composable
      public fun rememberCompositionContext(): CompositionContext {
          return currentComposer.buildContext()
      }
  - id: live-androidx-runtime-runtime-runtime-composables-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt
    startLine: 71
    endLine: 105
    sha256: bef25a7db71a7e28c6c070fdf0a4f1d621c0dc2dd3be00aaec9a493b0b44af8d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  currentComposer.changed(key3),
              calculation,
          )
      }

      /**
       * Remember the value returned by [calculation] if all values of [keys] are equal (`==`) to the
       * values they had in the previous composition, otherwise produce and remember a new value by
       * calling [calculation].
       */
      @Composable
      public inline fun <T> remember(
          vararg keys: Any?,
          crossinline calculation: @DisallowComposableCalls () -> T,
      ): T {
          var invalid = currentComposer.changed(keys.size)
          for (key in keys) invalid = invalid or currentComposer.changed(key)
          return currentComposer.cache(invalid, calculation)
      }

      /**
       * [key] is a utility composable that is used to "group" or "key" a block of execution inside of a
       * composition. This is sometimes needed for correctness inside of control-flow that may cause a
       * given composable invocation to execute more than once during composition.
       *
       * The value for a key *does not need to be globally unique*, and needs only be unique amongst the
       * invocations of [key] *at that point* in composition.
       *
       * For instance, consider the following example:
       *
       * @sample androidx.compose.runtime.samples.LocallyUniqueKeys
       *
       * Even though there are users with the same id composed in both the top and the bottom loop,
       * because they are different calls to [key], there is no need to create compound keys.
       *
compose:
  id: live-androidx-runtime-runtime-runtime-composables
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: live-androidx-runtime-runtime-runtime-composables-lines-1
      title: androidx.compose.runtime Composables.kt source (lines 1–35)
      aliases:
        - androidx.compose.runtime.remember
        - androidx.compose.runtime.currentComposer
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-1-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-106
      title: androidx.compose.runtime Composables.kt source (lines 106–140)
      aliases:
        - androidx.compose.runtime.key
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-106-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-141
      title: androidx.compose.runtime Composables.kt source (lines 141–175)
      aliases:
        - androidx.compose.runtime.key
        - androidx.compose.runtime.ReusableContent
        - androidx.compose.runtime.ReusableContentHost
        - androidx.compose.runtime.currentComposer
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-141-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-176
      title: androidx.compose.runtime Composables.kt source (lines 176–210)
      aliases:
        - androidx.compose.runtime.currentComposer
        - androidx.compose.runtime.currentCompositionContext
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-176-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-211
      title: androidx.compose.runtime Composables.kt source (lines 211–245)
      aliases:
        - androidx.compose.runtime.key
        - androidx.compose.runtime.currentComposer
        - androidx.compose.runtime.currentRecomposeScope
        - androidx.compose.runtime.currentCompositionLocalContext
        - androidx.compose.runtime.currentCompositeKeyHashCode
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-211-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-246
      title: androidx.compose.runtime Composables.kt source (lines 246–280)
      aliases:
        - androidx.compose.runtime.key
        - androidx.compose.runtime.currentComposer
        - androidx.compose.runtime.currentCompositeKeyHash
        - androidx.compose.runtime.currentCompositeKeyHashCode
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-246-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-281
      title: androidx.compose.runtime Composables.kt source (lines 281–315)
      aliases:
        - androidx.compose.runtime.currentComposer
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-281-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-316
      title: androidx.compose.runtime Composables.kt source (lines 316–350)
      aliases:
        - androidx.compose.runtime.currentComposer
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-316-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-351
      title: androidx.compose.runtime Composables.kt source (lines 351–385)
      aliases:
        - androidx.compose.runtime.currentComposer
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-351-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-36
      title: androidx.compose.runtime Composables.kt source (lines 36–70)
      aliases:
        - androidx.compose.runtime.remember
        - androidx.compose.runtime.currentComposer
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-36-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-386
      title: androidx.compose.runtime Composables.kt source (lines 386–420)
      aliases:
        - androidx.compose.runtime.currentComposer
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-386-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-421
      title: androidx.compose.runtime Composables.kt source (lines 421–455)
      aliases:
        - androidx.compose.runtime.currentComposer
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-421-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-456
      title: androidx.compose.runtime Composables.kt source (lines 456–490)
      aliases:
        - androidx.compose.runtime.currentComposer
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-456-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-491
      title: androidx.compose.runtime Composables.kt source (lines 491–520)
      aliases:
        - androidx.compose.runtime.currentComposer
        - androidx.compose.runtime.rememberCompositionContext
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-491-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-composables-lines-71
      title: androidx.compose.runtime Composables.kt source (lines 71–105)
      aliases:
        - androidx.compose.runtime.remember
        - androidx.compose.runtime.key
        - androidx.compose.runtime.currentComposer
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-composables-lines-71-source
      relatedIds: []
---

# androidx.compose.runtime Composables.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt

## androidx.compose.runtime Composables.kt source (lines 1–35)

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

package androidx.compose.runtime

/**
 * Remember the value produced by [calculation]. [calculation] will only be evaluated during the
 * composition. Recomposition will always return the value produced by composition.
 */
@Composable
public inline fun <T> remember(crossinline calculation: @DisallowComposableCalls () -> T): T =
    currentComposer.cache(false, calculation)

/**
 * Remember the value returned by [calculation] if [key1] compares equal (`==`) to the value it had
 * in the previous composition, otherwise produce and remember a new value by calling [calculation].
 */
@Composable
public inline fun <T> remember(
    key1: Any?,
    crossinline calculation: @DisallowComposableCalls () -> T,
): T {

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 106–140)

 * The key must be unique for each element in the collection, however, or children and local state
 * might be reused in unintended ways.
 *
 * For instance, consider the following example:
 *
 * @sample androidx.compose.runtime.samples.NotAlwaysUniqueKeys
 *
 * This example assumes that `parent.id` is a unique key for each item in the collection, but this
 * is only true if it is fair to assume that a parent will only ever have a single child, which may
 * not be the case. Instead, it may be more correct to do the following:
 *
 * @sample androidx.compose.runtime.samples.MoreCorrectUniqueKeys
 *
 * A compound key can be created by passing in multiple arguments:
 *
 * @sample androidx.compose.runtime.samples.TwoInputsKeySample
 * @param keys The set of values to be used to create a compound key. These will be compared to
 *   their previous values using [equals] and [hashCode]
 * @param block The composable children for this group.
 */
@Composable
public inline fun <T> key(
    @Suppress("UNUSED_PARAMETER") vararg keys: Any?,
    block: @Composable () -> T,
): T = block()

/**
 * A utility function to mark a composition as supporting recycling. If the [key] changes the
 * composition is replaced by a new composition (as would happen for [key]) but reusable nodes that
 * are emitted by [ReusableComposeNode] are reused.
 *
 * @param key the value that is used to trigger recycling. If recomposed with a different value the
 *   composer creates a new composition but tries to reuse reusable nodes.
 * @param content the composable children that are recyclable.
 */

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 141–175)

@Composable
public inline fun ReusableContent(key: Any?, content: @Composable () -> Unit) {
    currentComposer.startReusableGroup(reuseKey, key)
    content()
    currentComposer.endReusableGroup()
}

/**
 * An optional utility function used when hosting [ReusableContent]. If [active] is false the
 * content is treated as if it is deleted by removing all remembered objects from the composition
 * but the node produced for the tree are not removed. When the composition later becomes active
 * then the nodes are able to be reused inside [ReusableContent] content without requiring the
 * remembered state of the composition's lifetime being arbitrarily extended.
 *
 * @param active when [active] is `true` [content] is composed normally. When [active] is `false`
 *   then the content is deactivated and all remembered state is treated as if the content was
 *   deleted but the nodes managed by the composition's [Applier] are unaffected. A [active] becomes
 *   `true` any reusable nodes from the previously active composition are candidates for reuse.
 * @param content the composable content that is managed by this composable.
 */
@Composable
@ExplicitGroupsComposable
public inline fun ReusableContentHost(
    active: Boolean,
    crossinline content: @Composable () -> Unit,
) {
    currentComposer.startReusableGroup(reuseKey, active)
    val activeChanged = currentComposer.changed(active)
    if (active) {
        content()
    } else {
        currentComposer.deactivateToEndGroup(activeChanged)
    }
    currentComposer.endReusableGroup()
}

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 176–210)


/**
 * A Compose internal function. DO NOT call directly.
 *
 * Returns the [Composer] instance currently being used to perform composition. The returned
 * Composer is specific to the location where this property is read. There are no guarantees that
 * the same Composer object will be returned elsewhere in the composition or that the Composer
 * instance will be the same across recompositions.
 *
 * This property is exposed for use by the runtime, compiler, and tooling. It is not recommended for
 * public consumption. Mutating the state of the composer outside of calls generated by the Compose
 * compiler is not supported.
 */
public val currentComposer: Composer
    @ReadOnlyComposable
    @Composable
    get() {
        throw NotImplementedError("Implemented as an intrinsic")
    }

/**
 * Returns the [CompositionContext] associated for the current composer.
 *
 * This API is exposed for internal usages only. It should not be invoked outside of the Compose
 * Runtime
 */
@InternalComposeApi
public val currentCompositionContext: CompositionContext
    @TestOnly
    @ReadOnlyComposable
    @Composable
    get() = (currentComposer.composition as CompositionImpl).parent

/**
 * Returns an object which can be used to invalidate the current scope at this point in composition.

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 211–245)

 * This object can be used to manually cause recompositions.
 */
public val currentRecomposeScope: RecomposeScope
    @ReadOnlyComposable
    @OptIn(InternalComposeApi::class)
    @Composable
    get() {
        val scope = currentComposer.recomposeScope ?: error("no recompose scope found")
        currentComposer.recordUsed(scope)
        return scope
    }

/**
 * Returns the current [CompositionLocalContext] which contains all [CompositionLocal]'s in the
 * current composition and their values provided by [CompositionLocalProvider]'s. This context can
 * be used to pass locals to another composition via [CompositionLocalProvider]. That is usually
 * needed if another composition is not a subcomposition of the current one.
 */
@OptIn(InternalComposeApi::class)
public val currentCompositionLocalContext: CompositionLocalContext
    @Composable
    get() = CompositionLocalContext(currentComposer.buildContext().getCompositionLocalScope())

/**
 * This a hash value used to coordinate map externally stored state to the composition. For example,
 * this is used by saved instance state to preserve state across activity lifetime boundaries.
 *
 * This value is likely to be unique but is not guaranteed unique. There are known cases, such as
 * for loops without a [key], where the runtime does not have enough information to make the
 * compound key hash unique.
 *
 * @see currentCompositeKeyHashCode
 */
@Deprecated(
    "Prefer the higher-precision currentCompositeKeyHashCode",

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 246–280)

    ReplaceWith("currentCompositeKeyHashCode"),
)
@Suppress("DEPRECATION")
public val currentCompositeKeyHash: Int
    @Composable
    @ExplicitGroupsComposable
    @OptIn(InternalComposeApi::class)
    get() = currentComposer.compoundKeyHash

/**
 * A higher-precision variation of [currentCompositeKeyHash] used to map externally stored state to
 * the composition. By stepping up to a Long, this variation of the key hash is exponentially less
 * likely to experience a collision.
 *
 * In practice, because the hash is not perfectly distributed and because there are situations where
 * the runtime can't uniquely identify certain repeated content, collisions are still possible. This
 * higher precision does, however, afford more confidence in the assumption that an arbitrarily
 * sized composition hierarchy will not experience two unrelated groups having the same key hash.
 */
public val currentCompositeKeyHashCode: CompositeKeyHashCode
    @Composable
    @ExplicitGroupsComposable
    @OptIn(InternalComposeApi::class)
    get() = currentComposer.compositeKeyHashCode

/**
 * Emits a node into the composition of type [T].
 *
 * This function will throw a runtime exception if [E] is not a subtype of the applier of the
 * [currentComposer].
 *
 * @sample androidx.compose.runtime.samples.CustomTreeComposition
 * @param factory A function which will create a new instance of [T]. This function is NOT
 *   guaranteed to be called in place.
 * @param update A function to perform updates on the node. This will run every time emit is

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 281–315)

 *   executed. This function is called in place and will be inlined.
 * @see Updater
 * @see Applier
 * @see Composition
 */
// ComposeNode is a special case of readonly composable and handles creating its own groups, so
// it is okay to use.
@Suppress("NONREADONLY_CALL_IN_READONLY_COMPOSABLE", "UnnecessaryLambdaCreation")
@Composable
public inline fun <T : Any, reified E : Applier<*>> ComposeNode(
    noinline factory: () -> T,
    update: @DisallowComposableCalls Updater<T>.() -> Unit,
) {
    if (currentComposer.applier !is E) invalidApplier()
    currentComposer.startNode()
    if (currentComposer.inserting) {
        currentComposer.createNode(factory)
    } else {
        currentComposer.useNode()
    }
    Updater<T>(currentComposer).update()
    currentComposer.endNode()
}

/**
 * Emits a recyclable node into the composition of type [T].
 *
 * This function will throw a runtime exception if [E] is not a subtype of the applier of the
 * [currentComposer].
 *
 * @sample androidx.compose.runtime.samples.CustomTreeComposition
 * @param factory A function which will create a new instance of [T]. This function is NOT
 *   guaranteed to be called in place.
 * @param update A function to perform updates on the node. This will run every time emit is
 *   executed. This function is called in place and will be inlined.

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 316–350)

 * @see Updater
 * @see Applier
 * @see Composition
 */
// ComposeNode is a special case of readonly composable and handles creating its own groups, so
// it is okay to use.
@Suppress("NONREADONLY_CALL_IN_READONLY_COMPOSABLE", "UnnecessaryLambdaCreation")
@Composable
public inline fun <T : Any, reified E : Applier<*>> ReusableComposeNode(
    noinline factory: () -> T,
    update: @DisallowComposableCalls Updater<T>.() -> Unit,
) {
    if (currentComposer.applier !is E) invalidApplier()
    currentComposer.startReusableNode()
    if (currentComposer.inserting) {
        currentComposer.createNode(factory)
    } else {
        currentComposer.useNode()
    }
    Updater<T>(currentComposer).update()
    currentComposer.endNode()
}

/**
 * Emits a node into the composition of type [T]. Nodes emitted inside of [content] will become
 * children of the emitted node.
 *
 * This function will throw a runtime exception if [E] is not a subtype of the applier of the
 * [currentComposer].
 *
 * @sample androidx.compose.runtime.samples.CustomTreeComposition
 * @param factory A function which will create a new instance of [T]. This function is NOT
 *   guaranteed to be called in place.
 * @param update A function to perform updates on the node. This will run every time emit is
 *   executed. This function is called in place and will be inlined.

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 351–385)

 * @param content the composable content that will emit the "children" of this node.
 * @see Updater
 * @see Applier
 * @see Composition
 */
// ComposeNode is a special case of readonly composable and handles creating its own groups, so
// it is okay to use.
@Suppress("NONREADONLY_CALL_IN_READONLY_COMPOSABLE")
@Composable
public inline fun <T : Any?, reified E : Applier<*>> ComposeNode(
    noinline factory: () -> T,
    update: @DisallowComposableCalls Updater<T>.() -> Unit,
    content: @Composable () -> Unit,
) {
    if (currentComposer.applier !is E) invalidApplier()
    currentComposer.startNode()
    if (currentComposer.inserting) {
        currentComposer.createNode(factory)
    } else {
        currentComposer.useNode()
    }
    Updater<T>(currentComposer).update()
    content()
    currentComposer.endNode()
}

/**
 * Emits a recyclable node into the composition of type [T]. Nodes emitted inside of [content] will
 * become children of the emitted node.
 *
 * This function will throw a runtime exception if [E] is not a subtype of the applier of the
 * [currentComposer].
 *
 * @sample androidx.compose.runtime.samples.CustomTreeComposition
 * @param factory A function which will create a new instance of [T]. This function is NOT

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 36–70)

    return currentComposer.cache(currentComposer.changed(key1), calculation)
}

/**
 * Remember the value returned by [calculation] if [key1] and [key2] are equal (`==`) to the values
 * they had in the previous composition, otherwise produce and remember a new value by calling
 * [calculation].
 */
@Composable
public inline fun <T> remember(
    key1: Any?,
    key2: Any?,
    crossinline calculation: @DisallowComposableCalls () -> T,
): T {
    return currentComposer.cache(
        currentComposer.changed(key1) or currentComposer.changed(key2),
        calculation,
    )
}

/**
 * Remember the value returned by [calculation] if [key1], [key2] and [key3] are equal (`==`) to
 * values they had in the previous composition, otherwise produce and remember a new value by
 * calling [calculation].
 */
@Composable
public inline fun <T> remember(
    key1: Any?,
    key2: Any?,
    key3: Any?,
    crossinline calculation: @DisallowComposableCalls () -> T,
): T {
    return currentComposer.cache(
        currentComposer.changed(key1) or
            currentComposer.changed(key2) or

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 386–420)

 *   guaranteed to be called in place.
 * @param update A function to perform updates on the node. This will run every time emit is
 *   executed. This function is called in place and will be inlined.
 * @param content the composable content that will emit the "children" of this node.
 * @see Updater
 * @see Applier
 * @see Composition
 */
// ComposeNode is a special case of readonly composable and handles creating its own groups, so
// it is okay to use.
@Suppress("NONREADONLY_CALL_IN_READONLY_COMPOSABLE")
@Composable
public inline fun <T : Any?, reified E : Applier<*>> ReusableComposeNode(
    noinline factory: () -> T,
    update: @DisallowComposableCalls Updater<T>.() -> Unit,
    content: @Composable () -> Unit,
) {
    if (currentComposer.applier !is E) invalidApplier()
    currentComposer.startReusableNode()
    if (currentComposer.inserting) {
        currentComposer.createNode(factory)
    } else {
        currentComposer.useNode()
    }
    Updater<T>(currentComposer).update()
    content()
    currentComposer.endNode()
}

/**
 * Emits a node into the composition of type [T]. Nodes emitted inside of [content] will become
 * children of the emitted node.
 *
 * This function will throw a runtime exception if [E] is not a subtype of the applier of the
 * [currentComposer].

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 421–455)

 *
 * @sample androidx.compose.runtime.samples.CustomTreeComposition
 * @param factory A function which will create a new instance of [T]. This function is NOT
 *   guaranteed to be called in place.
 * @param update A function to perform updates on the node. This will run every time emit is
 *   executed. This function is called in place and will be inlined.
 * @param skippableUpdate A function to perform updates on the node. Unlike [update], this function
 *   is Composable and will therefore be skipped unless it has been invalidated by some other
 *   mechanism. This can be useful to perform expensive calculations for updating the node where the
 *   calculations are likely to have the same inputs over time, so the function's execution can be
 *   skipped.
 * @param content the composable content that will emit the "children" of this node.
 * @see Updater
 * @see SkippableUpdater
 * @see Applier
 * @see Composition
 */
@Composable
@ExplicitGroupsComposable
public inline fun <T, reified E : Applier<*>> ComposeNode(
    noinline factory: () -> T,
    update: @DisallowComposableCalls Updater<T>.() -> Unit,
    noinline skippableUpdate: @Composable SkippableUpdater<T>.() -> Unit,
    content: @Composable () -> Unit,
) {
    if (currentComposer.applier !is E) invalidApplier()
    currentComposer.startNode()
    if (currentComposer.inserting) {
        currentComposer.createNode(factory)
    } else {
        currentComposer.useNode()
    }
    Updater<T>(currentComposer).update()
    SkippableUpdater<T>(currentComposer).skippableUpdate()
    currentComposer.startReplaceableGroup(0x7ab4aae9)

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 456–490)

    content()
    currentComposer.endReplaceableGroup()
    currentComposer.endNode()
}

/**
 * Emits a recyclable node into the composition of type [T]. Nodes emitted inside of [content] will
 * become children of the emitted node.
 *
 * This function will throw a runtime exception if [E] is not a subtype of the applier of the
 * [currentComposer].
 *
 * @sample androidx.compose.runtime.samples.CustomTreeComposition
 * @param factory A function which will create a new instance of [T]. This function is NOT
 *   guaranteed to be called in place.
 * @param update A function to perform updates on the node. This will run every time emit is
 *   executed. This function is called in place and will be inlined.
 * @param skippableUpdate A function to perform updates on the node. Unlike [update], this function
 *   is Composable and will therefore be skipped unless it has been invalidated by some other
 *   mechanism. This can be useful to perform expensive calculations for updating the node where the
 *   calculations are likely to have the same inputs over time, so the function's execution can be
 *   skipped.
 * @param content the composable content that will emit the "children" of this node.
 * @see Updater
 * @see SkippableUpdater
 * @see Applier
 * @see Composition
 */
@Composable
@ExplicitGroupsComposable
public inline fun <T, reified E : Applier<*>> ReusableComposeNode(
    noinline factory: () -> T,
    update: @DisallowComposableCalls Updater<T>.() -> Unit,
    noinline skippableUpdate: @Composable SkippableUpdater<T>.() -> Unit,
    content: @Composable () -> Unit,

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 491–520)

) {
    if (currentComposer.applier !is E) invalidApplier()
    currentComposer.startReusableNode()
    if (currentComposer.inserting) {
        currentComposer.createNode(factory)
    } else {
        currentComposer.useNode()
    }
    Updater<T>(currentComposer).update()
    SkippableUpdater<T>(currentComposer).skippableUpdate()
    currentComposer.startReplaceableGroup(0x7ab4aae9)
    content()
    currentComposer.endReplaceableGroup()
    currentComposer.endNode()
}

@PublishedApi internal fun invalidApplier(): Unit = error("Invalid applier")

/**
 * An Effect to construct a [CompositionContext] at the current point of composition. This can be
 * used to run a separate composition in the context of the current one, preserving
 * [CompositionLocal]s and propagating invalidations. When this call leaves the composition, the
 * context is invalidated.
 */
@OptIn(InternalComposeApi::class)
@Composable
public fun rememberCompositionContext(): CompositionContext {
    return currentComposer.buildContext()
}


Sources: [live-androidx-runtime-runtime-runtime-composables-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)

## androidx.compose.runtime Composables.kt source (lines 71–105)

            currentComposer.changed(key3),
        calculation,
    )
}

/**
 * Remember the value returned by [calculation] if all values of [keys] are equal (`==`) to the
 * values they had in the previous composition, otherwise produce and remember a new value by
 * calling [calculation].
 */
@Composable
public inline fun <T> remember(
    vararg keys: Any?,
    crossinline calculation: @DisallowComposableCalls () -> T,
): T {
    var invalid = currentComposer.changed(keys.size)
    for (key in keys) invalid = invalid or currentComposer.changed(key)
    return currentComposer.cache(invalid, calculation)
}

/**
 * [key] is a utility composable that is used to "group" or "key" a block of execution inside of a
 * composition. This is sometimes needed for correctness inside of control-flow that may cause a
 * given composable invocation to execute more than once during composition.
 *
 * The value for a key *does not need to be globally unique*, and needs only be unique amongst the
 * invocations of [key] *at that point* in composition.
 *
 * For instance, consider the following example:
 *
 * @sample androidx.compose.runtime.samples.LocallyUniqueKeys
 *
 * Even though there are users with the same id composed in both the top and the bottom loop,
 * because they are different calls to [key], there is no need to create compound keys.
 *

Sources: [live-androidx-runtime-runtime-runtime-composables-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Composables.kt)
