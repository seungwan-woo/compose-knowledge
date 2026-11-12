---
type: reference
title: androidx.compose.runtime CompositionLocal.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 1
    endLine: 35
    sha256: 3b4843507b788d32990c708e49736702978daeb419870569661a6f8fcecc1e21
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
       * Compose passes data through the composition tree explicitly through means of parameters to
       * composable functions. This is often times the simplest and best way to have data flow through the
       * tree.
       *
       * Sometimes this model can be cumbersome or break down for data that is needed by lots of
       * components, or when components need to pass data between one another but keep that implementation
       * detail private. For these cases, [CompositionLocal]s can be used as an implicit way to have data
       * flow through a composition.
       *
       * [CompositionLocal]s by their nature are hierarchical. They make sense when the value of the
       * [CompositionLocal] needs to be scoped to a particular sub-hierarchy of the composition.
       *
       * One must create a [CompositionLocal] instance, which can be referenced by the consumers
       * statically. [CompositionLocal] instances themselves hold no data, and can be thought of as a
       * type-safe identifier for the data being passed down a tree. [CompositionLocal] factory functions
       * take a single parameter: a factory to create a default value in cases where a [CompositionLocal]
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 106
    endLine: 140
    sha256: 3ce12f8000f328eaddc249bd89ef1d79b9b268871bce2a349d4f22acada59574
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public infix fun providesDefault(value: T): ProvidedValue<T> =
              defaultProvidedValue(value).ifNotAlreadyProvided()

          /**
           * Associates a [CompositionLocal] key to a lambda, [compute], in a call to [CompositionLocal].
           * The [compute] lambda is invoked whenever the key is retrieved. The lambda is executed in the
           * context of a [CompositionLocalContext] which allow retrieving the current values of other
           * composition locals by calling [CompositionLocalAccessorScope.currentValue], which is an
           * extension function provided by the context for a [CompositionLocal] key.
           *
           * The lambda passed to [providesComputed] will be invoked every time the
           * [CompositionLocal.current] is evaluated for the composition local and computes its value
           * based on the current value of the locals referenced in the lambda at the time
           * [CompositionLocal.current] is evaluated. This allows providing values that can be derived
           * from other locals. For example, if accent colors can be calculated from a single base color,
           * the accent colors can be provided as computed composition locals. Providing a new base color
           * would automatically update all the accent colors.
           *
           * @sample androidx.compose.runtime.samples.compositionLocalProvidedComputed
           * @sample androidx.compose.runtime.samples.compositionLocalComputedAfterProvidingLocal
           * @see CompositionLocal
           * @see CompositionLocalContext
           * @see ProvidableCompositionLocal
           */
          public infix fun providesComputed(
              compute: CompositionLocalAccessorScope.() -> T
          ): ProvidedValue<T> =
              ProvidedValue(
                  compositionLocal = this,
                  value = null,
                  explicitNull = false,
                  mutationPolicy = null,
                  state = null,
                  compute = compute,
                  isDynamic = false,
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 141
    endLine: 175
    sha256: 750ea7d57ed69802ea9aba8c13f9e3b536a8a93552e789351b993398c08b2a4a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              )

          override fun updatedStateOf(
              value: ProvidedValue<T>,
              previous: ValueHolder<T>?,
          ): ValueHolder<T> {
              return when (previous) {
                  is DynamicValueHolder ->
                      if (value.isDynamic) {
                          previous.state.value = value.effectiveValue
                          previous
                      } else null
                  is StaticValueHolder ->
                      if (value.isStatic && value.effectiveValue == previous.value) previous else null
                  is ComputedValueHolder -> if (value.compute === previous.compute) previous else null
                  else -> null
              } ?: valueHolderOf(value)
          }

          private fun valueHolderOf(value: ProvidedValue<T>): ValueHolder<T> =
              when {
                  value.isDynamic ->
                      DynamicValueHolder(
                          value.state
                              ?: mutableStateOf(
                                  value.value,
                                  value.mutationPolicy ?: structuralEqualityPolicy(),
                              )
                      )
                  value.compute != null -> ComputedValueHolder(value.compute)
                  value.state != null -> DynamicValueHolder(value.state)
                  else -> StaticValueHolder(value.effectiveValue)
              }
      }
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 176
    endLine: 210
    sha256: 0ae62c0cecb5ba6ee5cfe9d699107e66df7ca662a29c72bc3e1802727f3678fd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * A [DynamicProvidableCompositionLocal] is a [CompositionLocal] backed by [mutableStateOf].
       * Providing new values using a [DynamicProvidableCompositionLocal] will provide the same [State]
       * with a different value. Reading the [CompositionLocal] value of a
       * [DynamicProvidableCompositionLocal] will record a read in the [RecomposeScope] of the
       * composition. Changing the provided value will invalidate the [RecomposeScope]s.
       *
       * @see compositionLocalOf
       */
      internal class DynamicProvidableCompositionLocal<T>(
          private val policy: SnapshotMutationPolicy<T>,
          defaultFactory: () -> T,
      ) : ProvidableCompositionLocal<T>(defaultFactory) {

          override fun defaultProvidedValue(value: T) =
              ProvidedValue(
                  compositionLocal = this,
                  value = value,
                  explicitNull = value === null,
                  mutationPolicy = policy,
                  state = null,
                  compute = null,
                  isDynamic = true,
              )
      }

      /**
       * A [StaticProvidableCompositionLocal] is a value that is expected to rarely change.
       *
       * @see staticCompositionLocalOf
       */
      internal class StaticProvidableCompositionLocal<T>(defaultFactory: () -> T) :
          ProvidableCompositionLocal<T>(defaultFactory) {

          override fun defaultProvidedValue(value: T) =
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 211
    endLine: 245
    sha256: 98b5325ed11ce7e291157607298c9f06a593277dc2f172194da17abca26d4fb3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              ProvidedValue(
                  compositionLocal = this,
                  value = value,
                  explicitNull = value === null,
                  mutationPolicy = null,
                  state = null,
                  compute = null,
                  isDynamic = false,
              )
      }

      /**
       * Create a [CompositionLocal] key that can be provided using [CompositionLocalProvider]. Changing
       * the value provided during recomposition will invalidate the content of [CompositionLocalProvider]
       * that read the value using [CompositionLocal.current].
       *
       * [compositionLocalOf] creates a [ProvidableCompositionLocal] which can be used in a a call to
       * [CompositionLocalProvider]. Similar to [MutableList] vs. [List], if the key is made public as
       * [CompositionLocal] instead of [ProvidableCompositionLocal], it can be read using
       * [CompositionLocal.current] but not re-provided.
       *
       * @param policy a policy to determine when a [CompositionLocal] is considered changed. See
       *   [SnapshotMutationPolicy] for details.
       * @param defaultFactory a value factory to supply a value when a value is not provided. This
       *   factory is called when no value is provided through a [CompositionLocalProvider] of the caller
       *   of the component using [CompositionLocal.current]. If no reasonable default can be provided
       *   then consider throwing an exception.
       * @see CompositionLocal
       * @see staticCompositionLocalOf
       * @see mutableStateOf
       */
      public fun <T> compositionLocalOf(
          policy: SnapshotMutationPolicy<T> = structuralEqualityPolicy(),
          defaultFactory: () -> T,
      ): ProvidableCompositionLocal<T> = DynamicProvidableCompositionLocal(policy, defaultFactory)
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 246
    endLine: 280
    sha256: 482b1f6d145bbf07c448b1d3a1b3d137ed829d35a70eb8360f9691ac450a0573
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Create a [CompositionLocal] key that can be provided using [CompositionLocalProvider].
       *
       * Unlike [compositionLocalOf], reads of a [staticCompositionLocalOf] are not tracked by the
       * composer and changing the value provided in the [CompositionLocalProvider] call will cause the
       * entirety of the content to be recomposed instead of just the places where in the composition the
       * local value is used. This lack of tracking, however, makes a [staticCompositionLocalOf] more
       * efficient when the value provided is highly unlikely to or will never change. For example, the
       * android context, font loaders, or similar shared values, are unlikely to change for the
       * components in the content of a the [CompositionLocalProvider] and should consider using a
       * [staticCompositionLocalOf]. A color, or other theme like value, might change or even be animated
       * therefore a [compositionLocalOf] should be used.
       *
       * [staticCompositionLocalOf] creates a [ProvidableCompositionLocal] which can be used in a call to
       * [CompositionLocalProvider]. Similar to [MutableList] vs. [List], if the key is made public as
       * [CompositionLocal] instead of [ProvidableCompositionLocal], it can be read using
       * [CompositionLocal.current] but not re-provided.
       *
       * @param defaultFactory a value factory to supply a value when a value is not provided. This
       *   factory is called when no value is provided through a [CompositionLocalProvider] of the caller
       *   of the component using [CompositionLocal.current]. If no reasonable default can be provided
       *   then consider throwing an exception.
       * @see CompositionLocal
       * @see compositionLocalOf
       */
      public fun <T> staticCompositionLocalOf(defaultFactory: () -> T): ProvidableCompositionLocal<T> =
          StaticProvidableCompositionLocal(defaultFactory)

      /**
       * Create a [CompositionLocal] that behaves like it was provided using
       * [ProvidableCompositionLocal.providesComputed] by default. If a value is provided using
       * [ProvidableCompositionLocal.provides] it behaves as if the [CompositionLocal] was produced by
       * calling [compositionLocalOf].
       *
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 281
    endLine: 315
    sha256: b51116a192a772c1f1b66b144b556f9e9791d0bbeba7ae509024116fdeb1176e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * In other words, a [CompositionLocal] produced by can be provided identically to
       * [CompositionLocal] created with [compositionLocalOf] with the only difference is how it behaves
       * when the value is not provided. For a [compositionLocalOf] the default value is returned. If no
       * default value has be computed for [CompositionLocal] the default computation is called.
       *
       * The lambda passed to [compositionLocalWithComputedDefaultOf] will be invoked every time the
       * [CompositionLocal.current] is evaluated for the composition local and computes its value based on
       * the current value of the locals referenced in the lambda at the time [CompositionLocal.current]
       * is evaluated. This allows providing values that can be derived from other locals. For example, if
       * accent colors can be calculated from a single base color, the accent colors can be provided as
       * computed composition locals. Providing a new base color would automatically update all the accent
       * colors.
       *
       * @sample androidx.compose.runtime.samples.compositionLocalComputedByDefault
       * @sample androidx.compose.runtime.samples.compositionLocalComputedAfterProvidingLocal
       * @param defaultComputation the default computation to use when this [CompositionLocal] is not
       *   provided.
       * @see CompositionLocal
       * @see ProvidableCompositionLocal
       */
      public fun <T> compositionLocalWithComputedDefaultOf(
          defaultComputation: CompositionLocalAccessorScope.() -> T
      ): ProvidableCompositionLocal<T> = ComputedProvidableCompositionLocal(defaultComputation)

      internal class ComputedProvidableCompositionLocal<T>(
          defaultComputation: CompositionLocalAccessorScope.() -> T
      ) : ProvidableCompositionLocal<T>({ composeRuntimeError("Unexpected call to default provider") }) {
          override val defaultValueHolder = ComputedValueHolder(defaultComputation)

          override fun defaultProvidedValue(value: T): ProvidedValue<T> =
              ProvidedValue(
                  compositionLocal = this,
                  value = value,
                  explicitNull = value === null,
                  mutationPolicy = null,
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 316
    endLine: 350
    sha256: 30ead2a7dcf0ae08e2707fa040f4b490454909ced0f6b0bcab7ca403a387c794
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  state = null,
                  compute = null,
                  isDynamic = true,
              )
      }

      /**
       * Create a [CompositionLocal] that behaves like it was provided using
       * [ProvidableCompositionLocal.providesComputed] by default. If a value is provided using
       * [ProvidableCompositionLocal.provides] it behaves as if the [CompositionLocal] was produced by
       * calling [staticCompositionLocalOf].
       *
       * Unlike [compositionLocalWithComputedDefaultOf], reads of a provided value for
       * [staticCompositionLocalWithComputedDefaultOf] are not tracked by the composer and changing the
       * value provided in the [CompositionLocalProvider] call will cause the entirety of the content to
       * be recomposed instead of just the places where in the composition the local value is used. This
       * lack of tracking, however, makes a [staticCompositionLocalWithComputedDefaultOf] more efficient
       * when the value provided is highly unlikely to or will never change. For example, the android
       * context, font loaders, or similar shared values, are unlikely to change for the components in the
       * content of a the [CompositionLocalProvider] and should consider using a
       * [staticCompositionLocalWithComputedDefaultOf]. A color, or other theme like value, might change
       * or even be animated therefore a [compositionLocalWithComputedDefaultOf] should be used.
       *
       * Reads of the computed value are tracked and modifying the computed value results in only the
       * invalidated parts of the composition being recomposed.
       *
       * [staticCompositionLocalWithComputedDefaultOf] creates a [ProvidableCompositionLocal] which can be
       * used in a call to [CompositionLocalProvider]. Similar to [MutableList] vs. [List], if the key is
       * made public as [CompositionLocal] instead of [ProvidableCompositionLocal], it can be read using
       * [CompositionLocal.current] but not re-provided.
       *
       * @param defaultComputation default computation to run when this [CompositionLocal] is not provided
       * @see staticCompositionLocalOf
       * @see compositionLocalWithComputedDefaultOf
       * @see ProvidableCompositionLocal
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 351
    endLine: 385
    sha256: 35a99fc9f86390cd23aca89ec782fceb7f27bf3552435bde00483f3445c372b4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      public fun <T> staticCompositionLocalWithComputedDefaultOf(
          defaultComputation: CompositionLocalAccessorScope.() -> T
      ): ProvidableCompositionLocal<T> = StaticComputedProvidableCompositionLocal(defaultComputation)

      internal class StaticComputedProvidableCompositionLocal<T>(
          defaultComputation: CompositionLocalAccessorScope.() -> T
      ) : ProvidableCompositionLocal<T>({ composeRuntimeError("Unexpected call to default provider") }) {
          override val defaultValueHolder = ComputedValueHolder(defaultComputation)

          override fun defaultProvidedValue(value: T): ProvidedValue<T> =
              ProvidedValue(
                  compositionLocal = this,
                  value = value,
                  explicitNull = value === null,
                  mutationPolicy = null,
                  state = null,
                  compute = null,
                  isDynamic = false,
              )
      }

      /**
       * Creates a [ProvidableCompositionLocal] where the default value is resolved by querying the
       * [LocalHostDefaultProvider] with the given [key].
       *
       * If a value is provided using [ProvidableCompositionLocal.provides], this behaves identically to a
       * [CompositionLocal] created with [compositionLocalOf].
       *
       * When no value is provided, the default value is resolved by querying the
       * [LocalHostDefaultProvider] currently present in the composition. This mechanism allows the
       * default value to be determined dynamically by the hosting environment (such as an Android View)
       * rather than being hardcoded or requiring an explicit provider at the root of the composition.
       *
       * This effectively acts as a bridge, decoupling the definition of the [CompositionLocal] from the
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 36
    endLine: 70
    sha256: 79ba759ad10f188ac8efb33e3be9f700475dbf4f7c2cc431ab9d4079d300b9f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * is used without a Provider. If this is a situation you would rather not handle, you can throw an
       * error in this factory.
       *
       * @sample androidx.compose.runtime.samples.createCompositionLocal
       *
       * Somewhere up the tree, a [CompositionLocalProvider] component can be used, which provides a value
       * for the [CompositionLocal]. This would often be at the "root" of a tree, but could be anywhere,
       * and can also be used in multiple places to override the provided value for a sub-tree.
       *
       * @sample androidx.compose.runtime.samples.compositionLocalProvider
       *
       * Intermediate components do not need to know about the [CompositionLocal] value, and can have zero
       * dependencies on it. For example, `SomeScreen` might look like this:
       *
       * @sample androidx.compose.runtime.samples.someScreenSample
       *
       * Finally, a component that wishes to consume the [CompositionLocal] value can use the [current]
       * property of the [CompositionLocal] key which returns the current value of the [CompositionLocal],
       * and subscribes the component to changes of it.
       *
       * @sample androidx.compose.runtime.samples.consumeCompositionLocal
       */
      @Stable
      public sealed class CompositionLocal<T>(defaultFactory: () -> T) {
          internal open val defaultValueHolder: ValueHolder<T> = LazyValueHolder(defaultFactory)

          internal abstract fun updatedStateOf(
              value: ProvidedValue<T>,
              previous: ValueHolder<T>?,
          ): ValueHolder<T>

          /**
           * Return the value provided by the nearest [CompositionLocalProvider] component that invokes,
           * directly or indirectly, the composable function that uses this property.
           *
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 386
    endLine: 420
    sha256: 603157b74fc1455927c7b807339d872cd74b2a1340048090511bc93b76bd8b18
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * platform-specific logic required to resolve its default. For example, a
       * `LocalViewModelStoreOwner` can use this to ask the host for the owner without having a direct
       * dependency on the Android View system.
       *
       * @param key An opaque key used to identify the requested value within the host's context. The type
       *   and meaning of the key are defined by the [HostDefaultProvider] implementation (e.g., on
       *   Android, this is typically a Resource ID).
       * @throws NullPointerException If the host cannot find a value for [key], it returns `null`. If [T]
       *   is a non-nullable type (e.g., `compositionLocalWithHostDefaultOf<String>`), a missing key will
       *   result in a [NullPointerException] when the value is accessed.
       */
      public fun <T> compositionLocalWithHostDefaultOf(
          key: HostDefaultKey<T>
      ): ProvidableCompositionLocal<T> = compositionLocalWithComputedDefaultOf {
          LocalHostDefaultProvider.currentValue.getHostDefault(key)
      }

      public interface CompositionLocalAccessorScope {
          /**
           * An extension property that allows accessing the current value of a composition local in the
           * context of this scope. This scope is the type of the `this` parameter when in a computed
           * composition. Computed composition locals can be provided by either using
           * [compositionLocalWithComputedDefaultOf] or by using the
           * [ProvidableCompositionLocal.providesComputed] infix operator.
           *
           * @sample androidx.compose.runtime.samples.compositionLocalProvidedComputed
           * @see ProvidableCompositionLocal
           * @see ProvidableCompositionLocal.providesComputed
           * @see ProvidableCompositionLocal.provides
           * @see CompositionLocalProvider
           */
          public val <T> CompositionLocal<T>.currentValue: T
      }

      /**
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 421
    endLine: 455
    sha256: cf9feab3e3e03c9926d2c12014b84da0dc7ccb44b226a9a65acc4bb21aca23c1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Stores [CompositionLocal]'s and their values.
       *
       * Can be obtained via [currentCompositionLocalContext] and passed to another composition via
       * [CompositionLocalProvider].
       *
       * [CompositionLocalContext] is immutable and won't be changed after its obtaining.
       */
      @Stable
      public class CompositionLocalContext
      internal constructor(internal val compositionLocals: PersistentCompositionLocalMap) {
          override fun equals(other: Any?): Boolean {
              return other is CompositionLocalContext && other.compositionLocals == this.compositionLocals
          }

          override fun hashCode(): Int {
              return compositionLocals.hashCode()
          }
      }

      /**
       * [CompositionLocalProvider] binds values to [ProvidableCompositionLocal] keys. Reading the
       * [CompositionLocal] using [CompositionLocal.current] will return the value provided in
       * [CompositionLocalProvider]'s [values] parameter for all composable functions called directly or
       * indirectly in the [content] lambda.
       *
       * @sample androidx.compose.runtime.samples.compositionLocalProvider
       * @see CompositionLocal
       * @see compositionLocalOf
       * @see staticCompositionLocalOf
       */
      @Composable
      @OptIn(InternalComposeApi::class)
      @NonSkippableComposable
      public fun CompositionLocalProvider(
          vararg values: ProvidedValue<*>,
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 456
    endLine: 490
    sha256: 7499541581ba5c1de641d865688f5d9e8cfd1c0b524fe423a8b9ba703191f198
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          content: @Composable () -> Unit,
      ) {
          currentComposer.startProviders(values)
          content()
          currentComposer.endProviders()
      }

      /**
       * [CompositionLocalProvider] binds value to [ProvidableCompositionLocal] key. Reading the
       * [CompositionLocal] using [CompositionLocal.current] will return the value provided in
       * [CompositionLocalProvider]'s [value] parameter for all composable functions called directly or
       * indirectly in the [content] lambda.
       *
       * @sample androidx.compose.runtime.samples.compositionLocalProvider
       * @see CompositionLocal
       * @see compositionLocalOf
       * @see staticCompositionLocalOf
       */
      @Composable
      @OptIn(InternalComposeApi::class)
      @NonSkippableComposable
      public fun CompositionLocalProvider(value: ProvidedValue<*>, content: @Composable () -> Unit) {
          currentComposer.startProvider(value)
          content()
          currentComposer.endProvider()
      }

      /**
       * [CompositionLocalProvider] binds values to [CompositionLocal]'s, provided by [context]. Reading
       * the [CompositionLocal] using [CompositionLocal.current] will return the value provided in values
       * stored inside [context] for all composable functions called directly or indirectly in the
       * [content] lambda.
       *
       * @sample androidx.compose.runtime.samples.compositionLocalProvider
       * @see CompositionLocal
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 491
    endLine: 525
    sha256: 3e1253db55a3aa55c6d2608a68182027719d1b84ad406f5e6674b0d803621cbd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @see compositionLocalOf
       * @see staticCompositionLocalOf
       */
      @Composable
      public fun CompositionLocalProvider(
          context: CompositionLocalContext,
          content: @Composable () -> Unit,
      ) {
          CompositionLocalProvider(
              *context.compositionLocals.map { it.value.toProvided(it.key) }.toTypedArray(),
              content = content,
          )
      }

      /**
       * [withCompositionLocal] binds value to [ProvidableCompositionLocal] key and returns the result
       * produced by the [content] lambda. Use with non-unit returning [content] lambdas or else use
       * [CompositionLocalProvider]. Reading the [CompositionLocal] using [CompositionLocal.current] will
       * return the value provided in [CompositionLocalProvider]'s [value] parameter for all composable
       * functions called directly or indirectly in the [content] lambda.
       *
       * @see CompositionLocalProvider
       * @see CompositionLocal
       * @see compositionLocalOf
       * @see staticCompositionLocalOf
       */
      @Suppress("BanInlineOptIn") // b/430604046 - These APIs are stable so are ok to inline
      @OptIn(InternalComposeApi::class)
      @Composable
      public inline fun <T> withCompositionLocal(
          value: ProvidedValue<*>,
          content: @Composable () -> T,
      ): T {
          currentComposer.startProvider(value)
          return content().also { currentComposer.endProvider() }
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 526
    endLine: 550
    sha256: df36af7c181260ca9d44fb4f48407c36a4c2c3e9f02054c45f058d3c14f29096
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      }

      /**
       * [withCompositionLocals] binds values to [ProvidableCompositionLocal] key and returns the result
       * produced by the [content] lambda. Use with non-unit returning [content] lambdas or else use
       * [CompositionLocalProvider]. Reading the [CompositionLocal] using [CompositionLocal.current] will
       * return the values provided in [CompositionLocalProvider]'s [values] parameter for all composable
       * functions called directly or indirectly in the [content] lambda.
       *
       * @see CompositionLocalProvider
       * @see CompositionLocal
       * @see compositionLocalOf
       * @see staticCompositionLocalOf
       */
      @Suppress("BanInlineOptIn") // b/430604046 - These APIs are stable so are ok to inline
      @OptIn(InternalComposeApi::class)
      @Composable
      public inline fun <T> withCompositionLocals(
          vararg values: ProvidedValue<*>,
          content: @Composable () -> T,
      ): T {
          currentComposer.startProviders(values)
          return content().also { currentComposer.endProvider() }
      }
  - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt
    startLine: 71
    endLine: 105
    sha256: ffcc69fe921a485f751984316eb7d45a72278c21d895ddea3a6a97d3923e7e39
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @sample androidx.compose.runtime.samples.consumeCompositionLocal
           */
          @OptIn(InternalComposeApi::class)
          public inline val current: T
              @ReadOnlyComposable @Composable get() = currentComposer.consume(this)
      }

      /**
       * A [ProvidableCompositionLocal] can be used in [CompositionLocalProvider] to provide values.
       *
       * @see compositionLocalOf
       * @see staticCompositionLocalOf
       * @see CompositionLocal
       * @see CompositionLocalProvider
       */
      @Stable
      public abstract class ProvidableCompositionLocal<T> internal constructor(defaultFactory: () -> T) :
          CompositionLocal<T>(defaultFactory) {
          internal abstract fun defaultProvidedValue(value: T): ProvidedValue<T>

          /**
           * Associates a [CompositionLocal] key to a value in a call to [CompositionLocalProvider].
           *
           * @see CompositionLocal
           * @see ProvidableCompositionLocal
           */
          public infix fun provides(value: T): ProvidedValue<T> = defaultProvidedValue(value)

          /**
           * Associates a [CompositionLocal] key to a value in a call to [CompositionLocalProvider] if the
           * key does not already have an associated value.
           *
           * @see CompositionLocal
           * @see ProvidableCompositionLocal
           */
compose:
  id: live-androidx-runtime-runtime-runtime-compositionlocal
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-1
      title: androidx.compose.runtime CompositionLocal.kt source (lines 1–35)
      aliases:
        - androidx.compose.runtime.CompositionLocal
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-1-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-106
      title: androidx.compose.runtime CompositionLocal.kt source (lines 106–140)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.ProvidableCompositionLocal
        - androidx.compose.runtime.CompositionLocalAccessorScope
        - androidx.compose.runtime.CompositionLocalContext
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-106-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-141
      title: androidx.compose.runtime CompositionLocal.kt source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-141-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-176
      title: androidx.compose.runtime CompositionLocal.kt source (lines 176–210)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.ProvidableCompositionLocal
        - androidx.compose.runtime.compositionLocalOf
        - androidx.compose.runtime.staticCompositionLocalOf
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-176-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-211
      title: androidx.compose.runtime CompositionLocal.kt source (lines 211–245)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.ProvidableCompositionLocal
        - androidx.compose.runtime.compositionLocalOf
        - androidx.compose.runtime.staticCompositionLocalOf
        - androidx.compose.runtime.CompositionLocalProvider
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-211-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-246
      title: androidx.compose.runtime CompositionLocal.kt source (lines 246–280)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.ProvidableCompositionLocal
        - androidx.compose.runtime.compositionLocalOf
        - androidx.compose.runtime.staticCompositionLocalOf
        - androidx.compose.runtime.CompositionLocalProvider
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-246-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-281
      title: androidx.compose.runtime CompositionLocal.kt source (lines 281–315)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.ProvidableCompositionLocal
        - androidx.compose.runtime.compositionLocalOf
        - androidx.compose.runtime.compositionLocalWithComputedDefaultOf
        - androidx.compose.runtime.CompositionLocalAccessorScope
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-281-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-316
      title: androidx.compose.runtime CompositionLocal.kt source (lines 316–350)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.ProvidableCompositionLocal
        - androidx.compose.runtime.staticCompositionLocalOf
        - androidx.compose.runtime.compositionLocalWithComputedDefaultOf
        - androidx.compose.runtime.staticCompositionLocalWithComputedDefaultOf
        - androidx.compose.runtime.CompositionLocalProvider
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-316-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-351
      title: androidx.compose.runtime CompositionLocal.kt source (lines 351–385)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.ProvidableCompositionLocal
        - androidx.compose.runtime.compositionLocalOf
        - androidx.compose.runtime.staticCompositionLocalWithComputedDefaultOf
        - androidx.compose.runtime.CompositionLocalAccessorScope
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-351-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-36
      title: androidx.compose.runtime CompositionLocal.kt source (lines 36–70)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.CompositionLocalProvider
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-36-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-386
      title: androidx.compose.runtime CompositionLocal.kt source (lines 386–420)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.ProvidableCompositionLocal
        - androidx.compose.runtime.compositionLocalWithComputedDefaultOf
        - androidx.compose.runtime.compositionLocalWithHostDefaultOf
        - androidx.compose.runtime.CompositionLocalAccessorScope
        - androidx.compose.runtime.CompositionLocalProvider
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-386-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-421
      title: androidx.compose.runtime CompositionLocal.kt source (lines 421–455)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.ProvidableCompositionLocal
        - androidx.compose.runtime.compositionLocalOf
        - androidx.compose.runtime.staticCompositionLocalOf
        - androidx.compose.runtime.CompositionLocalContext
        - androidx.compose.runtime.CompositionLocalProvider
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-421-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-456
      title: androidx.compose.runtime CompositionLocal.kt source (lines 456–490)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.ProvidableCompositionLocal
        - androidx.compose.runtime.compositionLocalOf
        - androidx.compose.runtime.staticCompositionLocalOf
        - androidx.compose.runtime.CompositionLocalProvider
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-456-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-491
      title: androidx.compose.runtime CompositionLocal.kt source (lines 491–525)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.ProvidableCompositionLocal
        - androidx.compose.runtime.compositionLocalOf
        - androidx.compose.runtime.staticCompositionLocalOf
        - androidx.compose.runtime.CompositionLocalContext
        - androidx.compose.runtime.CompositionLocalProvider
        - androidx.compose.runtime.withCompositionLocal
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-491-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-526
      title: androidx.compose.runtime CompositionLocal.kt source (lines 526–550)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.ProvidableCompositionLocal
        - androidx.compose.runtime.compositionLocalOf
        - androidx.compose.runtime.staticCompositionLocalOf
        - androidx.compose.runtime.CompositionLocalProvider
        - androidx.compose.runtime.withCompositionLocals
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-526-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-compositionlocal-lines-71
      title: androidx.compose.runtime CompositionLocal.kt source (lines 71–105)
      aliases:
        - androidx.compose.runtime.CompositionLocal
        - androidx.compose.runtime.ProvidableCompositionLocal
        - androidx.compose.runtime.compositionLocalOf
        - androidx.compose.runtime.staticCompositionLocalOf
        - androidx.compose.runtime.CompositionLocalProvider
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-compositionlocal-lines-71-source
      relatedIds: []
---

# androidx.compose.runtime CompositionLocal.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt

## androidx.compose.runtime CompositionLocal.kt source (lines 1–35)

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
 * Compose passes data through the composition tree explicitly through means of parameters to
 * composable functions. This is often times the simplest and best way to have data flow through the
 * tree.
 *
 * Sometimes this model can be cumbersome or break down for data that is needed by lots of
 * components, or when components need to pass data between one another but keep that implementation
 * detail private. For these cases, [CompositionLocal]s can be used as an implicit way to have data
 * flow through a composition.
 *
 * [CompositionLocal]s by their nature are hierarchical. They make sense when the value of the
 * [CompositionLocal] needs to be scoped to a particular sub-hierarchy of the composition.
 *
 * One must create a [CompositionLocal] instance, which can be referenced by the consumers
 * statically. [CompositionLocal] instances themselves hold no data, and can be thought of as a
 * type-safe identifier for the data being passed down a tree. [CompositionLocal] factory functions
 * take a single parameter: a factory to create a default value in cases where a [CompositionLocal]

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 106–140)

    public infix fun providesDefault(value: T): ProvidedValue<T> =
        defaultProvidedValue(value).ifNotAlreadyProvided()

    /**
     * Associates a [CompositionLocal] key to a lambda, [compute], in a call to [CompositionLocal].
     * The [compute] lambda is invoked whenever the key is retrieved. The lambda is executed in the
     * context of a [CompositionLocalContext] which allow retrieving the current values of other
     * composition locals by calling [CompositionLocalAccessorScope.currentValue], which is an
     * extension function provided by the context for a [CompositionLocal] key.
     *
     * The lambda passed to [providesComputed] will be invoked every time the
     * [CompositionLocal.current] is evaluated for the composition local and computes its value
     * based on the current value of the locals referenced in the lambda at the time
     * [CompositionLocal.current] is evaluated. This allows providing values that can be derived
     * from other locals. For example, if accent colors can be calculated from a single base color,
     * the accent colors can be provided as computed composition locals. Providing a new base color
     * would automatically update all the accent colors.
     *
     * @sample androidx.compose.runtime.samples.compositionLocalProvidedComputed
     * @sample androidx.compose.runtime.samples.compositionLocalComputedAfterProvidingLocal
     * @see CompositionLocal
     * @see CompositionLocalContext
     * @see ProvidableCompositionLocal
     */
    public infix fun providesComputed(
        compute: CompositionLocalAccessorScope.() -> T
    ): ProvidedValue<T> =
        ProvidedValue(
            compositionLocal = this,
            value = null,
            explicitNull = false,
            mutationPolicy = null,
            state = null,
            compute = compute,
            isDynamic = false,

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 141–175)

        )

    override fun updatedStateOf(
        value: ProvidedValue<T>,
        previous: ValueHolder<T>?,
    ): ValueHolder<T> {
        return when (previous) {
            is DynamicValueHolder ->
                if (value.isDynamic) {
                    previous.state.value = value.effectiveValue
                    previous
                } else null
            is StaticValueHolder ->
                if (value.isStatic && value.effectiveValue == previous.value) previous else null
            is ComputedValueHolder -> if (value.compute === previous.compute) previous else null
            else -> null
        } ?: valueHolderOf(value)
    }

    private fun valueHolderOf(value: ProvidedValue<T>): ValueHolder<T> =
        when {
            value.isDynamic ->
                DynamicValueHolder(
                    value.state
                        ?: mutableStateOf(
                            value.value,
                            value.mutationPolicy ?: structuralEqualityPolicy(),
                        )
                )
            value.compute != null -> ComputedValueHolder(value.compute)
            value.state != null -> DynamicValueHolder(value.state)
            else -> StaticValueHolder(value.effectiveValue)
        }
}


Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 176–210)

/**
 * A [DynamicProvidableCompositionLocal] is a [CompositionLocal] backed by [mutableStateOf].
 * Providing new values using a [DynamicProvidableCompositionLocal] will provide the same [State]
 * with a different value. Reading the [CompositionLocal] value of a
 * [DynamicProvidableCompositionLocal] will record a read in the [RecomposeScope] of the
 * composition. Changing the provided value will invalidate the [RecomposeScope]s.
 *
 * @see compositionLocalOf
 */
internal class DynamicProvidableCompositionLocal<T>(
    private val policy: SnapshotMutationPolicy<T>,
    defaultFactory: () -> T,
) : ProvidableCompositionLocal<T>(defaultFactory) {

    override fun defaultProvidedValue(value: T) =
        ProvidedValue(
            compositionLocal = this,
            value = value,
            explicitNull = value === null,
            mutationPolicy = policy,
            state = null,
            compute = null,
            isDynamic = true,
        )
}

/**
 * A [StaticProvidableCompositionLocal] is a value that is expected to rarely change.
 *
 * @see staticCompositionLocalOf
 */
internal class StaticProvidableCompositionLocal<T>(defaultFactory: () -> T) :
    ProvidableCompositionLocal<T>(defaultFactory) {

    override fun defaultProvidedValue(value: T) =

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 211–245)

        ProvidedValue(
            compositionLocal = this,
            value = value,
            explicitNull = value === null,
            mutationPolicy = null,
            state = null,
            compute = null,
            isDynamic = false,
        )
}

/**
 * Create a [CompositionLocal] key that can be provided using [CompositionLocalProvider]. Changing
 * the value provided during recomposition will invalidate the content of [CompositionLocalProvider]
 * that read the value using [CompositionLocal.current].
 *
 * [compositionLocalOf] creates a [ProvidableCompositionLocal] which can be used in a a call to
 * [CompositionLocalProvider]. Similar to [MutableList] vs. [List], if the key is made public as
 * [CompositionLocal] instead of [ProvidableCompositionLocal], it can be read using
 * [CompositionLocal.current] but not re-provided.
 *
 * @param policy a policy to determine when a [CompositionLocal] is considered changed. See
 *   [SnapshotMutationPolicy] for details.
 * @param defaultFactory a value factory to supply a value when a value is not provided. This
 *   factory is called when no value is provided through a [CompositionLocalProvider] of the caller
 *   of the component using [CompositionLocal.current]. If no reasonable default can be provided
 *   then consider throwing an exception.
 * @see CompositionLocal
 * @see staticCompositionLocalOf
 * @see mutableStateOf
 */
public fun <T> compositionLocalOf(
    policy: SnapshotMutationPolicy<T> = structuralEqualityPolicy(),
    defaultFactory: () -> T,
): ProvidableCompositionLocal<T> = DynamicProvidableCompositionLocal(policy, defaultFactory)

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 246–280)


/**
 * Create a [CompositionLocal] key that can be provided using [CompositionLocalProvider].
 *
 * Unlike [compositionLocalOf], reads of a [staticCompositionLocalOf] are not tracked by the
 * composer and changing the value provided in the [CompositionLocalProvider] call will cause the
 * entirety of the content to be recomposed instead of just the places where in the composition the
 * local value is used. This lack of tracking, however, makes a [staticCompositionLocalOf] more
 * efficient when the value provided is highly unlikely to or will never change. For example, the
 * android context, font loaders, or similar shared values, are unlikely to change for the
 * components in the content of a the [CompositionLocalProvider] and should consider using a
 * [staticCompositionLocalOf]. A color, or other theme like value, might change or even be animated
 * therefore a [compositionLocalOf] should be used.
 *
 * [staticCompositionLocalOf] creates a [ProvidableCompositionLocal] which can be used in a call to
 * [CompositionLocalProvider]. Similar to [MutableList] vs. [List], if the key is made public as
 * [CompositionLocal] instead of [ProvidableCompositionLocal], it can be read using
 * [CompositionLocal.current] but not re-provided.
 *
 * @param defaultFactory a value factory to supply a value when a value is not provided. This
 *   factory is called when no value is provided through a [CompositionLocalProvider] of the caller
 *   of the component using [CompositionLocal.current]. If no reasonable default can be provided
 *   then consider throwing an exception.
 * @see CompositionLocal
 * @see compositionLocalOf
 */
public fun <T> staticCompositionLocalOf(defaultFactory: () -> T): ProvidableCompositionLocal<T> =
    StaticProvidableCompositionLocal(defaultFactory)

/**
 * Create a [CompositionLocal] that behaves like it was provided using
 * [ProvidableCompositionLocal.providesComputed] by default. If a value is provided using
 * [ProvidableCompositionLocal.provides] it behaves as if the [CompositionLocal] was produced by
 * calling [compositionLocalOf].
 *

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 281–315)

 * In other words, a [CompositionLocal] produced by can be provided identically to
 * [CompositionLocal] created with [compositionLocalOf] with the only difference is how it behaves
 * when the value is not provided. For a [compositionLocalOf] the default value is returned. If no
 * default value has be computed for [CompositionLocal] the default computation is called.
 *
 * The lambda passed to [compositionLocalWithComputedDefaultOf] will be invoked every time the
 * [CompositionLocal.current] is evaluated for the composition local and computes its value based on
 * the current value of the locals referenced in the lambda at the time [CompositionLocal.current]
 * is evaluated. This allows providing values that can be derived from other locals. For example, if
 * accent colors can be calculated from a single base color, the accent colors can be provided as
 * computed composition locals. Providing a new base color would automatically update all the accent
 * colors.
 *
 * @sample androidx.compose.runtime.samples.compositionLocalComputedByDefault
 * @sample androidx.compose.runtime.samples.compositionLocalComputedAfterProvidingLocal
 * @param defaultComputation the default computation to use when this [CompositionLocal] is not
 *   provided.
 * @see CompositionLocal
 * @see ProvidableCompositionLocal
 */
public fun <T> compositionLocalWithComputedDefaultOf(
    defaultComputation: CompositionLocalAccessorScope.() -> T
): ProvidableCompositionLocal<T> = ComputedProvidableCompositionLocal(defaultComputation)

internal class ComputedProvidableCompositionLocal<T>(
    defaultComputation: CompositionLocalAccessorScope.() -> T
) : ProvidableCompositionLocal<T>({ composeRuntimeError("Unexpected call to default provider") }) {
    override val defaultValueHolder = ComputedValueHolder(defaultComputation)

    override fun defaultProvidedValue(value: T): ProvidedValue<T> =
        ProvidedValue(
            compositionLocal = this,
            value = value,
            explicitNull = value === null,
            mutationPolicy = null,

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 316–350)

            state = null,
            compute = null,
            isDynamic = true,
        )
}

/**
 * Create a [CompositionLocal] that behaves like it was provided using
 * [ProvidableCompositionLocal.providesComputed] by default. If a value is provided using
 * [ProvidableCompositionLocal.provides] it behaves as if the [CompositionLocal] was produced by
 * calling [staticCompositionLocalOf].
 *
 * Unlike [compositionLocalWithComputedDefaultOf], reads of a provided value for
 * [staticCompositionLocalWithComputedDefaultOf] are not tracked by the composer and changing the
 * value provided in the [CompositionLocalProvider] call will cause the entirety of the content to
 * be recomposed instead of just the places where in the composition the local value is used. This
 * lack of tracking, however, makes a [staticCompositionLocalWithComputedDefaultOf] more efficient
 * when the value provided is highly unlikely to or will never change. For example, the android
 * context, font loaders, or similar shared values, are unlikely to change for the components in the
 * content of a the [CompositionLocalProvider] and should consider using a
 * [staticCompositionLocalWithComputedDefaultOf]. A color, or other theme like value, might change
 * or even be animated therefore a [compositionLocalWithComputedDefaultOf] should be used.
 *
 * Reads of the computed value are tracked and modifying the computed value results in only the
 * invalidated parts of the composition being recomposed.
 *
 * [staticCompositionLocalWithComputedDefaultOf] creates a [ProvidableCompositionLocal] which can be
 * used in a call to [CompositionLocalProvider]. Similar to [MutableList] vs. [List], if the key is
 * made public as [CompositionLocal] instead of [ProvidableCompositionLocal], it can be read using
 * [CompositionLocal.current] but not re-provided.
 *
 * @param defaultComputation default computation to run when this [CompositionLocal] is not provided
 * @see staticCompositionLocalOf
 * @see compositionLocalWithComputedDefaultOf
 * @see ProvidableCompositionLocal

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 351–385)

 */
public fun <T> staticCompositionLocalWithComputedDefaultOf(
    defaultComputation: CompositionLocalAccessorScope.() -> T
): ProvidableCompositionLocal<T> = StaticComputedProvidableCompositionLocal(defaultComputation)

internal class StaticComputedProvidableCompositionLocal<T>(
    defaultComputation: CompositionLocalAccessorScope.() -> T
) : ProvidableCompositionLocal<T>({ composeRuntimeError("Unexpected call to default provider") }) {
    override val defaultValueHolder = ComputedValueHolder(defaultComputation)

    override fun defaultProvidedValue(value: T): ProvidedValue<T> =
        ProvidedValue(
            compositionLocal = this,
            value = value,
            explicitNull = value === null,
            mutationPolicy = null,
            state = null,
            compute = null,
            isDynamic = false,
        )
}

/**
 * Creates a [ProvidableCompositionLocal] where the default value is resolved by querying the
 * [LocalHostDefaultProvider] with the given [key].
 *
 * If a value is provided using [ProvidableCompositionLocal.provides], this behaves identically to a
 * [CompositionLocal] created with [compositionLocalOf].
 *
 * When no value is provided, the default value is resolved by querying the
 * [LocalHostDefaultProvider] currently present in the composition. This mechanism allows the
 * default value to be determined dynamically by the hosting environment (such as an Android View)
 * rather than being hardcoded or requiring an explicit provider at the root of the composition.
 *
 * This effectively acts as a bridge, decoupling the definition of the [CompositionLocal] from the

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 36–70)

 * is used without a Provider. If this is a situation you would rather not handle, you can throw an
 * error in this factory.
 *
 * @sample androidx.compose.runtime.samples.createCompositionLocal
 *
 * Somewhere up the tree, a [CompositionLocalProvider] component can be used, which provides a value
 * for the [CompositionLocal]. This would often be at the "root" of a tree, but could be anywhere,
 * and can also be used in multiple places to override the provided value for a sub-tree.
 *
 * @sample androidx.compose.runtime.samples.compositionLocalProvider
 *
 * Intermediate components do not need to know about the [CompositionLocal] value, and can have zero
 * dependencies on it. For example, `SomeScreen` might look like this:
 *
 * @sample androidx.compose.runtime.samples.someScreenSample
 *
 * Finally, a component that wishes to consume the [CompositionLocal] value can use the [current]
 * property of the [CompositionLocal] key which returns the current value of the [CompositionLocal],
 * and subscribes the component to changes of it.
 *
 * @sample androidx.compose.runtime.samples.consumeCompositionLocal
 */
@Stable
public sealed class CompositionLocal<T>(defaultFactory: () -> T) {
    internal open val defaultValueHolder: ValueHolder<T> = LazyValueHolder(defaultFactory)

    internal abstract fun updatedStateOf(
        value: ProvidedValue<T>,
        previous: ValueHolder<T>?,
    ): ValueHolder<T>

    /**
     * Return the value provided by the nearest [CompositionLocalProvider] component that invokes,
     * directly or indirectly, the composable function that uses this property.
     *

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 386–420)

 * platform-specific logic required to resolve its default. For example, a
 * `LocalViewModelStoreOwner` can use this to ask the host for the owner without having a direct
 * dependency on the Android View system.
 *
 * @param key An opaque key used to identify the requested value within the host's context. The type
 *   and meaning of the key are defined by the [HostDefaultProvider] implementation (e.g., on
 *   Android, this is typically a Resource ID).
 * @throws NullPointerException If the host cannot find a value for [key], it returns `null`. If [T]
 *   is a non-nullable type (e.g., `compositionLocalWithHostDefaultOf<String>`), a missing key will
 *   result in a [NullPointerException] when the value is accessed.
 */
public fun <T> compositionLocalWithHostDefaultOf(
    key: HostDefaultKey<T>
): ProvidableCompositionLocal<T> = compositionLocalWithComputedDefaultOf {
    LocalHostDefaultProvider.currentValue.getHostDefault(key)
}

public interface CompositionLocalAccessorScope {
    /**
     * An extension property that allows accessing the current value of a composition local in the
     * context of this scope. This scope is the type of the `this` parameter when in a computed
     * composition. Computed composition locals can be provided by either using
     * [compositionLocalWithComputedDefaultOf] or by using the
     * [ProvidableCompositionLocal.providesComputed] infix operator.
     *
     * @sample androidx.compose.runtime.samples.compositionLocalProvidedComputed
     * @see ProvidableCompositionLocal
     * @see ProvidableCompositionLocal.providesComputed
     * @see ProvidableCompositionLocal.provides
     * @see CompositionLocalProvider
     */
    public val <T> CompositionLocal<T>.currentValue: T
}

/**

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 421–455)

 * Stores [CompositionLocal]'s and their values.
 *
 * Can be obtained via [currentCompositionLocalContext] and passed to another composition via
 * [CompositionLocalProvider].
 *
 * [CompositionLocalContext] is immutable and won't be changed after its obtaining.
 */
@Stable
public class CompositionLocalContext
internal constructor(internal val compositionLocals: PersistentCompositionLocalMap) {
    override fun equals(other: Any?): Boolean {
        return other is CompositionLocalContext && other.compositionLocals == this.compositionLocals
    }

    override fun hashCode(): Int {
        return compositionLocals.hashCode()
    }
}

/**
 * [CompositionLocalProvider] binds values to [ProvidableCompositionLocal] keys. Reading the
 * [CompositionLocal] using [CompositionLocal.current] will return the value provided in
 * [CompositionLocalProvider]'s [values] parameter for all composable functions called directly or
 * indirectly in the [content] lambda.
 *
 * @sample androidx.compose.runtime.samples.compositionLocalProvider
 * @see CompositionLocal
 * @see compositionLocalOf
 * @see staticCompositionLocalOf
 */
@Composable
@OptIn(InternalComposeApi::class)
@NonSkippableComposable
public fun CompositionLocalProvider(
    vararg values: ProvidedValue<*>,

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 456–490)

    content: @Composable () -> Unit,
) {
    currentComposer.startProviders(values)
    content()
    currentComposer.endProviders()
}

/**
 * [CompositionLocalProvider] binds value to [ProvidableCompositionLocal] key. Reading the
 * [CompositionLocal] using [CompositionLocal.current] will return the value provided in
 * [CompositionLocalProvider]'s [value] parameter for all composable functions called directly or
 * indirectly in the [content] lambda.
 *
 * @sample androidx.compose.runtime.samples.compositionLocalProvider
 * @see CompositionLocal
 * @see compositionLocalOf
 * @see staticCompositionLocalOf
 */
@Composable
@OptIn(InternalComposeApi::class)
@NonSkippableComposable
public fun CompositionLocalProvider(value: ProvidedValue<*>, content: @Composable () -> Unit) {
    currentComposer.startProvider(value)
    content()
    currentComposer.endProvider()
}

/**
 * [CompositionLocalProvider] binds values to [CompositionLocal]'s, provided by [context]. Reading
 * the [CompositionLocal] using [CompositionLocal.current] will return the value provided in values
 * stored inside [context] for all composable functions called directly or indirectly in the
 * [content] lambda.
 *
 * @sample androidx.compose.runtime.samples.compositionLocalProvider
 * @see CompositionLocal

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 491–525)

 * @see compositionLocalOf
 * @see staticCompositionLocalOf
 */
@Composable
public fun CompositionLocalProvider(
    context: CompositionLocalContext,
    content: @Composable () -> Unit,
) {
    CompositionLocalProvider(
        *context.compositionLocals.map { it.value.toProvided(it.key) }.toTypedArray(),
        content = content,
    )
}

/**
 * [withCompositionLocal] binds value to [ProvidableCompositionLocal] key and returns the result
 * produced by the [content] lambda. Use with non-unit returning [content] lambdas or else use
 * [CompositionLocalProvider]. Reading the [CompositionLocal] using [CompositionLocal.current] will
 * return the value provided in [CompositionLocalProvider]'s [value] parameter for all composable
 * functions called directly or indirectly in the [content] lambda.
 *
 * @see CompositionLocalProvider
 * @see CompositionLocal
 * @see compositionLocalOf
 * @see staticCompositionLocalOf
 */
@Suppress("BanInlineOptIn") // b/430604046 - These APIs are stable so are ok to inline
@OptIn(InternalComposeApi::class)
@Composable
public inline fun <T> withCompositionLocal(
    value: ProvidedValue<*>,
    content: @Composable () -> T,
): T {
    currentComposer.startProvider(value)
    return content().also { currentComposer.endProvider() }

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 526–550)

}

/**
 * [withCompositionLocals] binds values to [ProvidableCompositionLocal] key and returns the result
 * produced by the [content] lambda. Use with non-unit returning [content] lambdas or else use
 * [CompositionLocalProvider]. Reading the [CompositionLocal] using [CompositionLocal.current] will
 * return the values provided in [CompositionLocalProvider]'s [values] parameter for all composable
 * functions called directly or indirectly in the [content] lambda.
 *
 * @see CompositionLocalProvider
 * @see CompositionLocal
 * @see compositionLocalOf
 * @see staticCompositionLocalOf
 */
@Suppress("BanInlineOptIn") // b/430604046 - These APIs are stable so are ok to inline
@OptIn(InternalComposeApi::class)
@Composable
public inline fun <T> withCompositionLocals(
    vararg values: ProvidedValue<*>,
    content: @Composable () -> T,
): T {
    currentComposer.startProviders(values)
    return content().also { currentComposer.endProvider() }
}


Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)

## androidx.compose.runtime CompositionLocal.kt source (lines 71–105)

     * @sample androidx.compose.runtime.samples.consumeCompositionLocal
     */
    @OptIn(InternalComposeApi::class)
    public inline val current: T
        @ReadOnlyComposable @Composable get() = currentComposer.consume(this)
}

/**
 * A [ProvidableCompositionLocal] can be used in [CompositionLocalProvider] to provide values.
 *
 * @see compositionLocalOf
 * @see staticCompositionLocalOf
 * @see CompositionLocal
 * @see CompositionLocalProvider
 */
@Stable
public abstract class ProvidableCompositionLocal<T> internal constructor(defaultFactory: () -> T) :
    CompositionLocal<T>(defaultFactory) {
    internal abstract fun defaultProvidedValue(value: T): ProvidedValue<T>

    /**
     * Associates a [CompositionLocal] key to a value in a call to [CompositionLocalProvider].
     *
     * @see CompositionLocal
     * @see ProvidableCompositionLocal
     */
    public infix fun provides(value: T): ProvidedValue<T> = defaultProvidedValue(value)

    /**
     * Associates a [CompositionLocal] key to a value in a call to [CompositionLocalProvider] if the
     * key does not already have an associated value.
     *
     * @see CompositionLocal
     * @see ProvidableCompositionLocal
     */

Sources: [live-androidx-runtime-runtime-runtime-compositionlocal-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/CompositionLocal.kt)
