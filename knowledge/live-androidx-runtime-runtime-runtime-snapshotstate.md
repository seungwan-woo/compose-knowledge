---
type: reference
title: androidx.compose.runtime SnapshotState.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    startLine: 1
    endLine: 35
    sha256: 925bbfd7fab3b3e72c8ac1c660c3ec07199dc5d4f65c38ce195ffe952c1d3240
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

      @file:JvmName("SnapshotStateKt")
      @file:JvmMultifileClass

      package androidx.compose.runtime

      import androidx.compose.runtime.snapshots.GlobalSnapshot
      import androidx.compose.runtime.snapshots.Snapshot
      import androidx.compose.runtime.snapshots.SnapshotId
      import androidx.compose.runtime.snapshots.SnapshotMutableState
      import androidx.compose.runtime.snapshots.SnapshotStateList
      import androidx.compose.runtime.snapshots.SnapshotStateMap
      import androidx.compose.runtime.snapshots.SnapshotStateSet
      import androidx.compose.runtime.snapshots.StateFactoryMarker
      import androidx.compose.runtime.snapshots.StateObjectImpl
      import androidx.compose.runtime.snapshots.StateRecord
      import androidx.compose.runtime.snapshots.currentSnapshot
      import androidx.compose.runtime.snapshots.overwritable
      import androidx.compose.runtime.snapshots.readable
      import androidx.compose.runtime.snapshots.toSnapshotId
  - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    startLine: 106
    endLine: 140
    sha256: 4e3c1b69761f9410f4ac99f27a8dcb3d6d543ac2fb9d86e8a3c5e143f38b9e6f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * Permits property delegation of `var`s using `by` for [MutableState].
       *
       * @sample androidx.compose.runtime.samples.DelegatedStateSample
       */
      @Suppress("NOTHING_TO_INLINE")
      public inline operator fun <T> MutableState<T>.setValue(
          thisObj: Any?,
          property: KProperty<*>,
          value: T,
      ) {
          this.value = value
      }

      /** Returns platform specific implementation based on [SnapshotMutableStateImpl]. */
      internal expect fun <T> createSnapshotMutableState(
          value: T,
          policy: SnapshotMutationPolicy<T>,
      ): SnapshotMutableState<T>

      /**
       * A single value holder whose reads and writes are observed by Compose.
       *
       * Additionally, writes to it are transacted as part of the [Snapshot] system.
       *
       * @param value the wrapped value
       * @param policy a policy to control how changes are handled in a mutable snapshot.
       * @see mutableStateOf
       * @see SnapshotMutationPolicy
       */
      internal open class SnapshotMutableStateImpl<T>(
          value: T,
          override val policy: SnapshotMutationPolicy<T>,
      ) : StateObjectImpl(), SnapshotMutableState<T> {
          @Suppress("UNCHECKED_CAST")
  - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    startLine: 141
    endLine: 175
    sha256: 93dc3010cca70c98c0dd44595b0fe3ef6df73d34fc3467d3d2a9f7063e5ea3d5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override var value: T
              get() = next.readable(this).value
              set(value) =
                  next.withCurrent(this) {
                      if (!policy.equivalent(it.value, value)) {
                          next.overwritable(this, it) { this.value = value }
                      }
                  }

          private var next: StateStateRecord<T> =
              currentSnapshot().let { snapshot ->
                  StateStateRecord(snapshot.snapshotId, value).also {
                      if (snapshot !is GlobalSnapshot) {
                          it.next = StateStateRecord(Snapshot.PreexistingSnapshotId.toSnapshotId(), value)
                      }
                  }
              }

          override val firstStateRecord: StateRecord
              get() = next

          override fun prependStateRecord(value: StateRecord) {
              @Suppress("UNCHECKED_CAST")
              next = value as StateStateRecord<T>
          }

          @Suppress("UNCHECKED_CAST")
          override fun mergeRecords(
              previous: StateRecord,
              current: StateRecord,
              applied: StateRecord,
          ): StateRecord? {
              val previousRecord = previous as StateStateRecord<T>
              val currentRecord = current as StateStateRecord<T>
              val appliedRecord = applied as StateStateRecord<T>
  - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    startLine: 176
    endLine: 210
    sha256: 55cd7eec53e0f14c4c2f6e29bccbeb8de8adc70c19f5c8a710a4ce0f8dc8bc72
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return if (policy.equivalent(currentRecord.value, appliedRecord.value)) current
              else {
                  val merged =
                      policy.merge(previousRecord.value, currentRecord.value, appliedRecord.value)
                  if (merged != null) {
                      appliedRecord.create(appliedRecord.snapshotId).also { it.value = merged }
                  } else {
                      null
                  }
              }
          }

          override fun toString(): String =
              next.withCurrent(this) { "MutableState(value=${it.value})@${hashCode()}" }

          private class StateStateRecord<T>(snapshotId: SnapshotId, myValue: T) :
              StateRecord(snapshotId) {
              override fun assign(value: StateRecord) {
                  @Suppress("UNCHECKED_CAST")
                  this.value = (value as StateStateRecord<T>).value
              }

              override fun create() = StateStateRecord(currentSnapshot().snapshotId, value)

              override fun create(snapshotId: SnapshotId) = StateStateRecord(snapshotId, value)

              var value: T = myValue
          }

          /**
           * The componentN() operators allow state objects to be used with the property destructuring
           * syntax
           *
           * ```
           * var (foo, setFoo) = remember { mutableStateOf(0) }
  - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    startLine: 211
    endLine: 245
    sha256: 404e542d155c5986d2629c8bfd1e73cfc75586c2209183b60f17942893942ddb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * setFoo(123) // set
           * foo == 123 // get
           * ```
           */
          override operator fun component1(): T = value

          override operator fun component2(): (T) -> Unit = { value = it }

          /**
           * A function used by the debugger to display the value of the current value of the mutable
           * state object without triggering read observers.
           */
          @Suppress("unused")
          val debuggerDisplayValue: T
              @JvmName("getDebuggerDisplayValue") get() = next.withCurrent(this) { it }.value
      }

      /**
       * Create a instance of [MutableList]<T> that is observable and can be snapshot.
       *
       * @sample androidx.compose.runtime.samples.stateListSample
       * @see mutableStateOf
       * @see mutableListOf
       * @see MutableList
       * @see Snapshot.takeSnapshot
       */
      @StateFactoryMarker
      public fun <T> mutableStateListOf(): SnapshotStateList<T> = SnapshotStateList<T>()

      /**
       * Create an instance of [MutableList]<T> that is observable and can be snapshot.
       *
       * @see mutableStateOf
       * @see mutableListOf
       * @see MutableList
  - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    startLine: 246
    endLine: 280
    sha256: 6cdc6f43a2ac35d2994bfcb1cd3bf96e3e61b0cb7853f363d24ee961341afc69
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @see Snapshot.takeSnapshot
       */
      @StateFactoryMarker
      public fun <T> mutableStateListOf(vararg elements: T): SnapshotStateList<T> =
          SnapshotStateList<T>().also { it.addAll(elements.toList()) }

      /**
       * Create an instance of [MutableList]<T> from a collection that is observable and can be snapshot.
       */
      public fun <T> Collection<T>.toMutableStateList(): SnapshotStateList<T> =
          SnapshotStateList<T>().also { it.addAll(this) }

      /**
       * Create a instance of [MutableMap]<K, V> that is observable and can be snapshot.
       *
       * @sample androidx.compose.runtime.samples.stateMapSample
       * @see mutableStateOf
       * @see mutableMapOf
       * @see MutableMap
       * @see Snapshot.takeSnapshot
       */
      @StateFactoryMarker
      public fun <K, V> mutableStateMapOf(): SnapshotStateMap<K, V> = SnapshotStateMap<K, V>()

      /**
       * Create a instance of [MutableMap]<K, V> that is observable and can be snapshot.
       *
       * @see mutableStateOf
       * @see mutableMapOf
       * @see MutableMap
       * @see Snapshot.takeSnapshot
       */
      @StateFactoryMarker
      public fun <K, V> mutableStateMapOf(vararg pairs: Pair<K, V>): SnapshotStateMap<K, V> =
          SnapshotStateMap<K, V>().apply { putAll(pairs.toMap()) }
  - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    startLine: 281
    endLine: 315
    sha256: a1670a81e371b7b938fc5b43ee4101f2ddc5ac8a3a59febb4fa269cb6234180a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Create an instance of [MutableMap]<K, V> from a collection of pairs that is observable and can be
       * snapshot.
       */
      @Suppress("unused")
      public fun <K, V> Iterable<Pair<K, V>>.toMutableStateMap(): SnapshotStateMap<K, V> =
          SnapshotStateMap<K, V>().also { it.putAll(this.toMap()) }

      /**
       * Create a instance of [MutableSet]<T> that is observable and can be snapshot.
       *
       * The returned set iteration order is in the order the items were inserted into the set.
       *
       * @sample androidx.compose.runtime.samples.stateSetSample
       * @see mutableStateOf
       * @see mutableSetOf
       * @see MutableSet
       * @see Snapshot.takeSnapshot
       */
      @StateFactoryMarker public fun <T> mutableStateSetOf(): SnapshotStateSet<T> = SnapshotStateSet<T>()

      /**
       * Create an instance of [MutableSet]<T> that is observable and can be snapshot.
       *
       * The returned set iteration order is in the order the items were inserted into the set.
       *
       * @see mutableStateOf
       * @see mutableSetOf
       * @see MutableSet
       * @see Snapshot.takeSnapshot
       */
      @StateFactoryMarker
      public fun <T> mutableStateSetOf(vararg elements: T): SnapshotStateSet<T> =
          SnapshotStateSet<T>().also { it.addAll(elements.toSet()) }
  - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    startLine: 316
    endLine: 343
    sha256: d1231ac764090483f50757cf6f75ae9c1788c18ede03f8e1bf6d04cae40bafa6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      
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
  - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    startLine: 36
    endLine: 70
    sha256: 556a6dffb59c71d8c5fa2f8b2520ea82a720fc7557ccd2294496e7b6c3ad0422
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.snapshots.withCurrent
      import kotlin.jvm.JvmMultifileClass
      import kotlin.jvm.JvmName
      import kotlin.reflect.KProperty

      /**
       * Return a new [MutableState] initialized with the passed in [value]
       *
       * The MutableState class is a single value holder whose reads and writes are observed by Compose.
       * Additionally, writes to it are transacted as part of the [Snapshot] system.
       *
       * @param value the initial value for the [MutableState]
       * @param policy a policy to controls how changes are handled in mutable snapshots.
       * @sample androidx.compose.runtime.samples.SimpleStateSample
       * @sample androidx.compose.runtime.samples.DestructuredStateSample
       * @sample androidx.compose.runtime.samples.observeUserSample
       * @sample androidx.compose.runtime.samples.stateSample
       * @see State
       * @see MutableState
       * @see SnapshotMutationPolicy
       * @see mutableIntStateOf
       * @see mutableLongStateOf
       * @see mutableFloatStateOf
       * @see mutableDoubleStateOf
       */
      @StateFactoryMarker
      public fun <T> mutableStateOf(
          value: T,
          policy: SnapshotMutationPolicy<T> = structuralEqualityPolicy(),
      ): MutableState<T> = createSnapshotMutableState(value, policy)

      /**
       * A value holder where reads to the [value] property during the execution of a [Composable]
       * function, the current [RecomposeScope] will be subscribed to changes of that value.
       *
  - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt
    startLine: 71
    endLine: 105
    sha256: 21574e16277da51049971ae1fea46a6dbebf6ebbef2344d9b4a80d8b66174c60
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       * @see [MutableState]
       * @see [mutableStateOf]
       */
      @Stable
      public interface State<out T> {
          public val value: T
      }

      /**
       * Permits property delegation of `val`s using `by` for [State].
       *
       * @sample androidx.compose.runtime.samples.DelegatedReadOnlyStateSample
       */
      @Suppress("NOTHING_TO_INLINE")
      public inline operator fun <T> State<T>.getValue(thisObj: Any?, property: KProperty<*>): T = value

      /**
       * A mutable value holder where reads to the [value] property during the execution of a [Composable]
       * function, the current [RecomposeScope] will be subscribed to changes of that value. When the
       * [value] property is written to and changed, a recomposition of any subscribed [RecomposeScope]s
       * will be scheduled. If [value] is written to with the same value, no recompositions will be
       * scheduled.
       *
       * @see [State]
       * @see [mutableStateOf]
       */
      @Stable
      public interface MutableState<T> : State<T> {
          override var value: T

          public operator fun component1(): T

          public operator fun component2(): (T) -> Unit
      }
compose:
  id: live-androidx-runtime-runtime-runtime-snapshotstate
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-1
      title: androidx.compose.runtime SnapshotState.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotstate-lines-1-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-106
      title: androidx.compose.runtime SnapshotState.kt source (lines 106–140)
      aliases:
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.MutableState
        - androidx.compose.runtime.setValue
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotstate-lines-106-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-141
      title: androidx.compose.runtime SnapshotState.kt source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotstate-lines-141-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-176
      title: androidx.compose.runtime SnapshotState.kt source (lines 176–210)
      aliases:
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.MutableState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotstate-lines-176-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-211
      title: androidx.compose.runtime SnapshotState.kt source (lines 211–245)
      aliases:
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.mutableStateListOf
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotstate-lines-211-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-246
      title: androidx.compose.runtime SnapshotState.kt source (lines 246–280)
      aliases:
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.mutableStateListOf
        - androidx.compose.runtime.toMutableStateList
        - androidx.compose.runtime.mutableStateMapOf
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotstate-lines-246-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-281
      title: androidx.compose.runtime SnapshotState.kt source (lines 281–315)
      aliases:
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.mutableStateSetOf
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotstate-lines-281-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-316
      title: androidx.compose.runtime SnapshotState.kt source (lines 316–343)
      aliases:
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.State
        - androidx.compose.runtime.rememberUpdatedState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotstate-lines-316-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-36
      title: androidx.compose.runtime SnapshotState.kt source (lines 36–70)
      aliases:
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.State
        - androidx.compose.runtime.MutableState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotstate-lines-36-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotstate-lines-71
      title: androidx.compose.runtime SnapshotState.kt source (lines 71–105)
      aliases:
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.State
        - androidx.compose.runtime.getValue
        - androidx.compose.runtime.MutableState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotstate-lines-71-source
      relatedIds: []
---

# androidx.compose.runtime SnapshotState.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt

## androidx.compose.runtime SnapshotState.kt source (lines 1–35)

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

@file:JvmName("SnapshotStateKt")
@file:JvmMultifileClass

package androidx.compose.runtime

import androidx.compose.runtime.snapshots.GlobalSnapshot
import androidx.compose.runtime.snapshots.Snapshot
import androidx.compose.runtime.snapshots.SnapshotId
import androidx.compose.runtime.snapshots.SnapshotMutableState
import androidx.compose.runtime.snapshots.SnapshotStateList
import androidx.compose.runtime.snapshots.SnapshotStateMap
import androidx.compose.runtime.snapshots.SnapshotStateSet
import androidx.compose.runtime.snapshots.StateFactoryMarker
import androidx.compose.runtime.snapshots.StateObjectImpl
import androidx.compose.runtime.snapshots.StateRecord
import androidx.compose.runtime.snapshots.currentSnapshot
import androidx.compose.runtime.snapshots.overwritable
import androidx.compose.runtime.snapshots.readable
import androidx.compose.runtime.snapshots.toSnapshotId

Sources: [live-androidx-runtime-runtime-runtime-snapshotstate-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt)

## androidx.compose.runtime SnapshotState.kt source (lines 106–140)

/**
 * Permits property delegation of `var`s using `by` for [MutableState].
 *
 * @sample androidx.compose.runtime.samples.DelegatedStateSample
 */
@Suppress("NOTHING_TO_INLINE")
public inline operator fun <T> MutableState<T>.setValue(
    thisObj: Any?,
    property: KProperty<*>,
    value: T,
) {
    this.value = value
}

/** Returns platform specific implementation based on [SnapshotMutableStateImpl]. */
internal expect fun <T> createSnapshotMutableState(
    value: T,
    policy: SnapshotMutationPolicy<T>,
): SnapshotMutableState<T>

/**
 * A single value holder whose reads and writes are observed by Compose.
 *
 * Additionally, writes to it are transacted as part of the [Snapshot] system.
 *
 * @param value the wrapped value
 * @param policy a policy to control how changes are handled in a mutable snapshot.
 * @see mutableStateOf
 * @see SnapshotMutationPolicy
 */
internal open class SnapshotMutableStateImpl<T>(
    value: T,
    override val policy: SnapshotMutationPolicy<T>,
) : StateObjectImpl(), SnapshotMutableState<T> {
    @Suppress("UNCHECKED_CAST")

Sources: [live-androidx-runtime-runtime-runtime-snapshotstate-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt)

## androidx.compose.runtime SnapshotState.kt source (lines 141–175)

    override var value: T
        get() = next.readable(this).value
        set(value) =
            next.withCurrent(this) {
                if (!policy.equivalent(it.value, value)) {
                    next.overwritable(this, it) { this.value = value }
                }
            }

    private var next: StateStateRecord<T> =
        currentSnapshot().let { snapshot ->
            StateStateRecord(snapshot.snapshotId, value).also {
                if (snapshot !is GlobalSnapshot) {
                    it.next = StateStateRecord(Snapshot.PreexistingSnapshotId.toSnapshotId(), value)
                }
            }
        }

    override val firstStateRecord: StateRecord
        get() = next

    override fun prependStateRecord(value: StateRecord) {
        @Suppress("UNCHECKED_CAST")
        next = value as StateStateRecord<T>
    }

    @Suppress("UNCHECKED_CAST")
    override fun mergeRecords(
        previous: StateRecord,
        current: StateRecord,
        applied: StateRecord,
    ): StateRecord? {
        val previousRecord = previous as StateStateRecord<T>
        val currentRecord = current as StateStateRecord<T>
        val appliedRecord = applied as StateStateRecord<T>

Sources: [live-androidx-runtime-runtime-runtime-snapshotstate-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt)

## androidx.compose.runtime SnapshotState.kt source (lines 176–210)

        return if (policy.equivalent(currentRecord.value, appliedRecord.value)) current
        else {
            val merged =
                policy.merge(previousRecord.value, currentRecord.value, appliedRecord.value)
            if (merged != null) {
                appliedRecord.create(appliedRecord.snapshotId).also { it.value = merged }
            } else {
                null
            }
        }
    }

    override fun toString(): String =
        next.withCurrent(this) { "MutableState(value=${it.value})@${hashCode()}" }

    private class StateStateRecord<T>(snapshotId: SnapshotId, myValue: T) :
        StateRecord(snapshotId) {
        override fun assign(value: StateRecord) {
            @Suppress("UNCHECKED_CAST")
            this.value = (value as StateStateRecord<T>).value
        }

        override fun create() = StateStateRecord(currentSnapshot().snapshotId, value)

        override fun create(snapshotId: SnapshotId) = StateStateRecord(snapshotId, value)

        var value: T = myValue
    }

    /**
     * The componentN() operators allow state objects to be used with the property destructuring
     * syntax
     *
     * ```
     * var (foo, setFoo) = remember { mutableStateOf(0) }

Sources: [live-androidx-runtime-runtime-runtime-snapshotstate-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt)

## androidx.compose.runtime SnapshotState.kt source (lines 211–245)

     * setFoo(123) // set
     * foo == 123 // get
     * ```
     */
    override operator fun component1(): T = value

    override operator fun component2(): (T) -> Unit = { value = it }

    /**
     * A function used by the debugger to display the value of the current value of the mutable
     * state object without triggering read observers.
     */
    @Suppress("unused")
    val debuggerDisplayValue: T
        @JvmName("getDebuggerDisplayValue") get() = next.withCurrent(this) { it }.value
}

/**
 * Create a instance of [MutableList]<T> that is observable and can be snapshot.
 *
 * @sample androidx.compose.runtime.samples.stateListSample
 * @see mutableStateOf
 * @see mutableListOf
 * @see MutableList
 * @see Snapshot.takeSnapshot
 */
@StateFactoryMarker
public fun <T> mutableStateListOf(): SnapshotStateList<T> = SnapshotStateList<T>()

/**
 * Create an instance of [MutableList]<T> that is observable and can be snapshot.
 *
 * @see mutableStateOf
 * @see mutableListOf
 * @see MutableList

Sources: [live-androidx-runtime-runtime-runtime-snapshotstate-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt)

## androidx.compose.runtime SnapshotState.kt source (lines 246–280)

 * @see Snapshot.takeSnapshot
 */
@StateFactoryMarker
public fun <T> mutableStateListOf(vararg elements: T): SnapshotStateList<T> =
    SnapshotStateList<T>().also { it.addAll(elements.toList()) }

/**
 * Create an instance of [MutableList]<T> from a collection that is observable and can be snapshot.
 */
public fun <T> Collection<T>.toMutableStateList(): SnapshotStateList<T> =
    SnapshotStateList<T>().also { it.addAll(this) }

/**
 * Create a instance of [MutableMap]<K, V> that is observable and can be snapshot.
 *
 * @sample androidx.compose.runtime.samples.stateMapSample
 * @see mutableStateOf
 * @see mutableMapOf
 * @see MutableMap
 * @see Snapshot.takeSnapshot
 */
@StateFactoryMarker
public fun <K, V> mutableStateMapOf(): SnapshotStateMap<K, V> = SnapshotStateMap<K, V>()

/**
 * Create a instance of [MutableMap]<K, V> that is observable and can be snapshot.
 *
 * @see mutableStateOf
 * @see mutableMapOf
 * @see MutableMap
 * @see Snapshot.takeSnapshot
 */
@StateFactoryMarker
public fun <K, V> mutableStateMapOf(vararg pairs: Pair<K, V>): SnapshotStateMap<K, V> =
    SnapshotStateMap<K, V>().apply { putAll(pairs.toMap()) }

Sources: [live-androidx-runtime-runtime-runtime-snapshotstate-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt)

## androidx.compose.runtime SnapshotState.kt source (lines 281–315)


/**
 * Create an instance of [MutableMap]<K, V> from a collection of pairs that is observable and can be
 * snapshot.
 */
@Suppress("unused")
public fun <K, V> Iterable<Pair<K, V>>.toMutableStateMap(): SnapshotStateMap<K, V> =
    SnapshotStateMap<K, V>().also { it.putAll(this.toMap()) }

/**
 * Create a instance of [MutableSet]<T> that is observable and can be snapshot.
 *
 * The returned set iteration order is in the order the items were inserted into the set.
 *
 * @sample androidx.compose.runtime.samples.stateSetSample
 * @see mutableStateOf
 * @see mutableSetOf
 * @see MutableSet
 * @see Snapshot.takeSnapshot
 */
@StateFactoryMarker public fun <T> mutableStateSetOf(): SnapshotStateSet<T> = SnapshotStateSet<T>()

/**
 * Create an instance of [MutableSet]<T> that is observable and can be snapshot.
 *
 * The returned set iteration order is in the order the items were inserted into the set.
 *
 * @see mutableStateOf
 * @see mutableSetOf
 * @see MutableSet
 * @see Snapshot.takeSnapshot
 */
@StateFactoryMarker
public fun <T> mutableStateSetOf(vararg elements: T): SnapshotStateSet<T> =
    SnapshotStateSet<T>().also { it.addAll(elements.toSet()) }

Sources: [live-androidx-runtime-runtime-runtime-snapshotstate-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt)

## androidx.compose.runtime SnapshotState.kt source (lines 316–343)


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


Sources: [live-androidx-runtime-runtime-runtime-snapshotstate-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt)

## androidx.compose.runtime SnapshotState.kt source (lines 36–70)

import androidx.compose.runtime.snapshots.withCurrent
import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName
import kotlin.reflect.KProperty

/**
 * Return a new [MutableState] initialized with the passed in [value]
 *
 * The MutableState class is a single value holder whose reads and writes are observed by Compose.
 * Additionally, writes to it are transacted as part of the [Snapshot] system.
 *
 * @param value the initial value for the [MutableState]
 * @param policy a policy to controls how changes are handled in mutable snapshots.
 * @sample androidx.compose.runtime.samples.SimpleStateSample
 * @sample androidx.compose.runtime.samples.DestructuredStateSample
 * @sample androidx.compose.runtime.samples.observeUserSample
 * @sample androidx.compose.runtime.samples.stateSample
 * @see State
 * @see MutableState
 * @see SnapshotMutationPolicy
 * @see mutableIntStateOf
 * @see mutableLongStateOf
 * @see mutableFloatStateOf
 * @see mutableDoubleStateOf
 */
@StateFactoryMarker
public fun <T> mutableStateOf(
    value: T,
    policy: SnapshotMutationPolicy<T> = structuralEqualityPolicy(),
): MutableState<T> = createSnapshotMutableState(value, policy)

/**
 * A value holder where reads to the [value] property during the execution of a [Composable]
 * function, the current [RecomposeScope] will be subscribed to changes of that value.
 *

Sources: [live-androidx-runtime-runtime-runtime-snapshotstate-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt)

## androidx.compose.runtime SnapshotState.kt source (lines 71–105)

 * @see [MutableState]
 * @see [mutableStateOf]
 */
@Stable
public interface State<out T> {
    public val value: T
}

/**
 * Permits property delegation of `val`s using `by` for [State].
 *
 * @sample androidx.compose.runtime.samples.DelegatedReadOnlyStateSample
 */
@Suppress("NOTHING_TO_INLINE")
public inline operator fun <T> State<T>.getValue(thisObj: Any?, property: KProperty<*>): T = value

/**
 * A mutable value holder where reads to the [value] property during the execution of a [Composable]
 * function, the current [RecomposeScope] will be subscribed to changes of that value. When the
 * [value] property is written to and changed, a recomposition of any subscribed [RecomposeScope]s
 * will be scheduled. If [value] is written to with the same value, no recompositions will be
 * scheduled.
 *
 * @see [State]
 * @see [mutableStateOf]
 */
@Stable
public interface MutableState<T> : State<T> {
    override var value: T

    public operator fun component1(): T

    public operator fun component2(): (T) -> Unit
}


Sources: [live-androidx-runtime-runtime-runtime-snapshotstate-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt)
