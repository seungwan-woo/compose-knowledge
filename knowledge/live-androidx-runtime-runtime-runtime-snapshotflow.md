---
type: reference
title: Compose snapshotFlow source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 1
    endLine: 35
    sha256: ed4a5474b2c137e36f3b227e2dbd0804d9a2adc49d0ede3a0d33b31ae4ad8885
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2021 The Android Open Source Project
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

      import androidx.collection.MutableScatterSet
      import androidx.collection.mutableScatterMapOf
      import androidx.collection.mutableScatterSetOf
      import androidx.compose.runtime.collection.ScopeMap
      import androidx.compose.runtime.platform.makeSynchronizedObject
      import androidx.compose.runtime.platform.synchronized
      import androidx.compose.runtime.snapshots.Snapshot
      import androidx.compose.runtime.snapshots.fastForEach
      import kotlin.coroutines.CoroutineContext
      import kotlin.coroutines.EmptyCoroutineContext
      import kotlin.jvm.JvmMultifileClass
      import kotlin.jvm.JvmName
      import kotlinx.coroutines.channels.Channel
      import kotlinx.coroutines.channels.SendChannel
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 106
    endLine: 140
    sha256: a52bbbe95ed24e6d774ce820a6fdbc6a9fe8e8446a71c7ff753ed8bc98fe6fc9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      /**
       * Collects values from this [StateFlow] and represents its latest value via [State]. The
       * [StateFlow.value] is used as an initial value. Every time there would be new value posted into
       * the [StateFlow] the returned [State] will be updated causing recomposition of every [State.value]
       * usage.
       *
       * @sample androidx.compose.runtime.samples.StateFlowSample
       * @param context [CoroutineContext] to use for collecting.
       */
      @Deprecated(
          "Use the overload with a SnapshotMutationPolicy parameter",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun <T> StateFlow<T>.collectAsState(
          context: CoroutineContext = EmptyCoroutineContext
      ): State<T> = collectAsState(context, structuralEqualityPolicy())

      /**
       * Collects values from this [Flow] and represents its latest value via [State]. Every time there
       * would be new value posted into the [Flow] the returned [State] will be updated causing
       * recomposition of every [State.value] usage.
       *
       * @sample androidx.compose.runtime.samples.FlowWithInitialSample
       * @param initial the value of the state will have until the first flow value is emitted.
       * @param context [CoroutineContext] to use for collecting.
       */
      @Deprecated(
          "Use the overload with a SnapshotMutationPolicy parameter",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun <T : R, R> Flow<T>.collectAsState(
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 141
    endLine: 175
    sha256: a264e902c8212c42dc74c435a10aac24b263b1fd519f4bde4805cd20bcf2baba
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          initial: R,
          context: CoroutineContext = EmptyCoroutineContext,
      ): State<R> = collectAsState(initial, context, structuralEqualityPolicy())

      /**
       * Orchestrates the observation of [Snapshot] state for [snapshotFlow]s that are collected on the
       * same thread.
       *
       * Once a [SnapshotFlowManager] is no longer needed, its [dispose] method should be called.
       *
       * It is not safe to share a [SnapshotFlowManager] instance across two [snapshotFlow]s that collect
       * in parallel on two different threads, but it is not a problem for a thread to run apply observers
       * in parallel with another thread collecting a [snapshotFlow].
       *
       * @see snapshotFlow
       */
      @ExperimentalComposeRuntimeApi
      public class SnapshotFlowManager {
          private var managerImpl: SnapshotFlowManagerImpl? = SingleSubscriptionSnapshotFlowManager()

          /**
           * Returns the result of running [block] and also subscribes [channel] to be notified whenever a
           * change is made to any of the state objects accessed in [block].
           *
           * If there is already a subscription associated with [channel] from a previous invocation of
           * [runAndWatch], it will be cancelled and replaced.
           *
           * If this method is called after this manager has been disposed of, an [IllegalStateException]
           * will be thrown.
           */
          internal fun <T> runAndWatch(channel: SendChannel<Unit>, block: () -> T): T {
              checkPrecondition(managerImpl != null) {
                  "Called runAndWatch on a manager that has been disposed of"
              }
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 176
    endLine: 210
    sha256: c060307441ed017b4026b077e0b3845fe2e0e1da95fdda2ea8c32390cd986490
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              val managerImplRef = managerImpl
              if (managerImplRef is SingleSubscriptionSnapshotFlowManager) {
                  val subscribedChannel = managerImplRef.subscribedChannel
                  if (subscribedChannel != null && subscribedChannel != channel) {
                      // This manager now needs to manage notifications for more than one channel, so we
                      // promote the backing object from a [SingleSubscriptionSnapshotFlowManager] to a
                      // [MultiSubscriptionSnapshotFlowManager].
                      managerImpl = managerImplRef.promote()
                  }
              }

              return managerImpl!!.runAndWatch(channel, block)
          }

          /**
           * This must be called by a [snapshotFlow] when it is in the process of exiting to dispose of
           * all subscriptions associated with it.
           *
           * If this method is called after this manager has been disposed of, it will cause no effect.
           */
          internal fun reportSnapshotFlowCancellation(channel: SendChannel<Unit>) {
              managerImpl?.reportSnapshotFlowCancellation(channel)
          }

          /**
           * Disposes of this manager. Disposing of a manager disconnects it from the [Snapshot] system,
           * rendering it incapable of handling any subscriptions.
           *
           * If this method is called after this manager has been disposed of, an [IllegalStateException]
           * will be thrown.
           */
          public fun dispose() {
              managerImpl.let {
                  checkPrecondition(it != null) {
                      "Called dispose on a manager that has been disposed of"
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 211
    endLine: 245
    sha256: e2ce70f67fddda5ecd235cd5b03317caaee936f1d66be1c84b6fe514f6eda7f5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  }
                  it.dispose()
              }
              managerImpl = null
          }
      }

      /**
       * The methods of [SnapshotFlowManager] are implemented by delegating to an instance of this class.
       */
      internal abstract class SnapshotFlowManagerImpl internal constructor() {
          // Used to lock access to the fields read in the apply observers registered by the subclasses,
          // because apply observers can run concurrently with other parts of `snapshotFlow` logic.
          protected val lock = makeSynchronizedObject()

          /**
           * Adds [obj] to the set of objects watched by [channel], meaning that [channel] will be
           * notified of future changes to [obj].
           *
           * The subscription changes resulting from an invocation of this method will not take effect
           * until committed by an invocation of [commitSubscriptionChanges].
           */
          internal abstract fun watch(channel: SendChannel<Unit>, obj: Any)

          /**
           * Returns [watch] with its first argument fixed to [channel] by partial application. That is,
           * [readObserverFor(channel)(obj)] is equivalent to [watch(channel, obj)].
           */
          internal abstract fun readObserverFor(channel: SendChannel<Unit>): (Any) -> Unit

          /**
           * Unsubscribes [channel] from being notified of changes to all objects.
           *
           * The subscription changes resulting from an invocation of this method will not take effect
           * until committed by an invocation of [commitSubscriptionChanges].
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 246
    endLine: 280
    sha256: dbbf8cfeecc5f2f14e4555d5927f1bc872e7e75f9ebdd34ba31fec3e8490dd20
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          internal abstract fun clearWatchSet(channel: SendChannel<Unit>)

          /** Commits subscription changes made since the last invocation of this method. */
          internal abstract fun commitSubscriptionChanges()

          /**
           * Returns the result of running [block] and also subscribes [channel] to be notified whenever a
           * change is made to any of the state objects accessed in [block].
           *
           * If there is already a subscription associated with [channel] from a previous invocation of
           * [runAndWatch], it will be cancelled and replaced.
           */
          internal fun <T> runAndWatch(channel: SendChannel<Unit>, block: () -> T): T {
              val result =
                  Snapshot.takeSnapshot(readObserverFor(channel)).run {
                      clearWatchSet(channel)
                      try {
                          enter(block)
                      } finally {
                          dispose()
                      }
                  }

              commitSubscriptionChanges()
              return result
          }

          /**
           * This must be called by a [snapshotFlow] when it is in the process of exiting to dispose of
           * all subscriptions associated with it.
           */
          internal abstract fun reportSnapshotFlowCancellation(channel: SendChannel<Unit>)

          /**
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 281
    endLine: 315
    sha256: a6866d8afff7e8a89245e4862d2ab6e7029bebc852ee43d168aa0ecd0070cb5a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Disposes of this manager. Disposing of a manager disconnects it from the [Snapshot] system,
           * rendering it incapable of handling any subscriptions.
           */
          internal abstract fun dispose()
      }

      /**
       * A [SnapshotFlowManagerImpl] that can manage at most one active subscription.
       *
       * If an instance of [SingleSubscriptionSnapshotFlowManager] is managing an active subscription
       * (i.e. has been passed to an invocation of [snapshotFlow]) and is passed to another invocation of
       * [snapshotFlow], an [IllegalStateException] will be thrown.
       */
      private class SingleSubscriptionSnapshotFlowManager : SnapshotFlowManagerImpl() {
          // This variable allows us to avoid allocating [watchSet] until we need to watch more than one
          // object.
          private var soleWatchedObject: Any? = null

          /**
           * A working copy of [soleWatchedObject].
           *
           * Invocations of [watch] and [clearWatchSet] only affect this working copy. Invoking
           * [commitSubscriptionChanges] clones this working copy into [soleWatchedObject].
           */
          private var workingSoleWatchedObject: Any? = null

          /** The set of objects that are being watched for changes. */
          private var watchSet: MutableScatterSet<Any>? = null

          /**
           * A working copy of [watchSet].
           *
           * Invocations of [watch] and [clearWatchSet] only affect this working copy. Invoking
           * [commitSubscriptionChanges] clones this working copy into [watchSet].
           */
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 316
    endLine: 350
    sha256: 692bb5ecd47ddc15c81e24967d8dfcddb7005ab8ecb70005e60df1d5835eb4f5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          private var workingWatchSet: MutableScatterSet<Any>? = null

          /** The channel that has an active subscription being managed by this manager. */
          var subscribedChannel: SendChannel<Unit>? = null

          // Caches the only valid return value of [readObserverFor].
          private val readObserverCache = { obj: Any -> watch(subscribedChannel!!, obj) }

          private val unregisterApplyObserver = Snapshot.registerApplyObserver { changed, _ ->
              var toNotify: SendChannel<Unit>? = null
              synchronized(lock) {
                  val watchSet = watchSet
                  if (watchSet == null) {
                      if (changed.contains(soleWatchedObject)) {
                          toNotify = subscribedChannel
                      }
                  } else {
                      // Assumption: [watchSet] will typically be smaller than [changed].
                      if (watchSet.any { changed.contains(it) }) {
                          toNotify = subscribedChannel
                      }
                  }
              }
              toNotify?.trySend(Unit)
          }

          override fun watch(channel: SendChannel<Unit>, obj: Any) {
              checkPrecondition(subscribedChannel == channel) {
                  "Requested a SingleSubscriptionSnapshotFlowManager to manage multiple subscriptions"
              }

              val workingWatchSetRef = workingWatchSet
              val workingSoleWatchedObjectRef = workingSoleWatchedObject
              if (workingWatchSetRef == null) {
                  if (workingSoleWatchedObjectRef == null) {
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 351
    endLine: 385
    sha256: d546c21b1c8c335f6319dbffaf10683818ace4781f58e982530c01b29cf09486
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                      workingSoleWatchedObject = obj
                  } else {
                      workingWatchSet =
                          mutableScatterSetOf<Any>().also {
                              it.add(workingSoleWatchedObjectRef)
                              it.add(obj)
                          }
                      workingSoleWatchedObject = null
                  }
              } else {
                  checkPrecondition(
                      workingSoleWatchedObject == null,
                      { "workingSoleWatchedObject must be null when workingWatchSet is non-null" },
                  )
                  workingWatchSetRef.add(obj)
              }
          }

          override fun readObserverFor(channel: SendChannel<Unit>): (Any) -> Unit {
              checkPrecondition(subscribedChannel == null || subscribedChannel == channel) {
                  "Requested a SingleSubscriptionSnapshotFlowManager to manage multiple subscriptions"
              }

              subscribedChannel = channel

              return readObserverCache
          }

          private fun clearWatchSetImpl() {
              workingSoleWatchedObject = null
              workingWatchSet = null
          }

          override fun clearWatchSet(channel: SendChannel<Unit>) = clearWatchSetImpl()
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 36
    endLine: 70
    sha256: e8662746f329ac2e420ac61ac7cfaf348309e34dc5d3461b9a2ad6b3a9690841
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import kotlinx.coroutines.flow.Flow
      import kotlinx.coroutines.flow.StateFlow
      import kotlinx.coroutines.flow.flow
      import kotlinx.coroutines.withContext

      /**
       * Collects values from this [StateFlow] and represents its latest value via [State]. The
       * [StateFlow.value] is used as an initial value. Every time there would be new value posted into
       * the [StateFlow] the returned [State] will be updated causing recomposition of every [State.value]
       * usage.
       *
       * Optionally, the [context] that the flow is collected in and the [mutationPolicy] that is used to
       * report and merge changes in the returned state can be customized. If the [context] or `StateFlow`
       * changes, the same state will be returned, the previous collection will be canceled, and the
       * provided Flow will start collection in the new context. Changes to the [mutationPolicy] after the
       * state has been created are ignored.
       *
       * @sample androidx.compose.runtime.samples.StateFlowSample
       * @param context [CoroutineContext] to use for collecting.
       * @param mutationPolicy A policy used to control how changes are handled in the returned state.
       */
      @Suppress("StateFlowValueCalledInComposition")
      @Composable
      public fun <T> StateFlow<T>.collectAsState(
          context: CoroutineContext = EmptyCoroutineContext,
          mutationPolicy: SnapshotMutationPolicy<T> = structuralEqualityPolicy(),
      ): State<T> {
          val state = remember { mutableStateOf(value, mutationPolicy) }
          collectInto(state, context)
          return state
      }

      /**
       * Collects values from this [Flow] and represents its latest value via [State]. Every time there
       * would be new value posted into the [Flow] the returned [State] will be updated causing
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 386
    endLine: 420
    sha256: 2a46898a1842bda8bd74bf5734ff3c0c5c87f1471c6f1d8fc6a4007b73aa6b30
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun commitSubscriptionChanges() {
              synchronized(lock) {
                  soleWatchedObject = workingSoleWatchedObject

                  if (workingWatchSet == null) {
                      watchSet = null
                  } else {
                      if (watchSet == null) {
                          watchSet = mutableScatterSetOf()
                      }
                      val temp = watchSet
                      watchSet = workingWatchSet
                      workingWatchSet = temp
                  }
              }
          }

          override fun reportSnapshotFlowCancellation(channel: SendChannel<Unit>) {
              subscribedChannel = null
              clearWatchSet(channel)
              commitSubscriptionChanges()
          }

          override fun dispose() {
              unregisterApplyObserver.dispose()
              clearWatchSetImpl()
              synchronized(lock) {
                  subscribedChannel = null
                  soleWatchedObject = null
                  watchSet = null
              }
          }

          /**
           * Transfers all subscriptions being managed by this manager to a new
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 421
    endLine: 455
    sha256: e9a8d28921b422b57d7108893872268cb828089998a9ca8975954eb81b1d9674
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
           * [MultiSubscriptionSnapshotFlowManager], disposes of this manager, and returns the new
           * manager.
           */
          fun promote(): MultiSubscriptionSnapshotFlowManager {
              val multiSubscriptionManager =
                  MultiSubscriptionSnapshotFlowManager().also {
                      val subscribedChannel = subscribedChannel
                      checkPrecondition(subscribedChannel != null) {
                          "promote must only be called when a manager is managing subscriptions for " +
                              "one channel and needs to start managing them for a second"
                      }
                      val watchSet = watchSet
                      if (watchSet == null) {
                          it.watch(subscribedChannel, soleWatchedObject!!)
                      } else {
                          watchSet.forEach { obj -> it.watch(subscribedChannel, obj) }
                      }
                      it.commitSubscriptionChanges()
                  }

              dispose()
              return multiSubscriptionManager
          }
      }

      /**
       * A [SnapshotFlowManagerImpl] that can manage an unbounded number of active subscriptions.
       *
       * This class is not thread-safe.
       */
      private class MultiSubscriptionSnapshotFlowManager : SnapshotFlowManagerImpl() {
          private sealed interface SubscriptionChange

          private class Add(val obj: Any, val channel: SendChannel<Unit>) : SubscriptionChange
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 456
    endLine: 490
    sha256: b791c57fb9b62a38095fc325028ef97a74e847c44069ac88762e4447a01c7a34
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          private class RemoveScope(val channel: SendChannel<Unit>) : SubscriptionChange

          /**
           * A map from snapshot state objects to the channels that are subscribed to be notified of
           * changes to those objects.
           */
          private var subscriptions: ScopeMap<Any, SendChannel<Unit>> = ScopeMap()

          /**
           * A list of changes that will be applied to [subscriptions] the next time
           * [commitSubscriptionChanges] is invoked.
           */
          private val pendingChanges = mutableListOf<SubscriptionChange>()

          // Used by [readObserverFor] to cache partially applied functions.
          private val readObserverCache = mutableScatterMapOf<SendChannel<Unit>, (Any) -> Unit>()

          private val unregisterApplyObserver = Snapshot.registerApplyObserver { changed, _ ->
              var toNotify: MutableList<SendChannel<Unit>>? = null

              synchronized(lock) {
                  // Assumption: there will typically be fewer keys in [subscriptions] than elements
                  // in [changed].
                  subscriptions.forEachKey { key ->
                      if (changed.contains(key)) {
                          subscriptions.forEachScopeOf(key) {
                              if (toNotify == null) {
                                  toNotify = mutableListOf()
                              }
                              toNotify.add(it)
                          }
                      }
                  }

                  toNotify?.fastForEach { it.trySend(Unit) }
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 491
    endLine: 525
    sha256: cb500b5424b5db83556c0348dea49c7c822871f5946f11b851b8570b3d6dd314
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
          }

          override fun watch(channel: SendChannel<Unit>, obj: Any) {
              pendingChanges.add(Add(obj, channel))
          }

          override fun readObserverFor(channel: SendChannel<Unit>): (Any) -> Unit {
              return readObserverCache.get(channel)
                  ?: { obj: Any -> watch(channel, obj) }.also { readObserverCache.put(channel, it) }
          }

          override fun clearWatchSet(channel: SendChannel<Unit>) {
              pendingChanges.add(RemoveScope(channel))
          }

          override fun commitSubscriptionChanges() {
              synchronized(lock) {
                  pendingChanges.fastForEach {
                      when (it) {
                          is Add -> {
                              subscriptions.add(it.obj, it.channel)
                          }
                          is RemoveScope -> {
                              subscriptions.removeScope(it.channel)
                          }
                      }
                  }
              }
              pendingChanges.clear()
          }

          override fun reportSnapshotFlowCancellation(channel: SendChannel<Unit>) {
              readObserverCache.remove(channel)
              clearWatchSet(channel)
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 526
    endLine: 560
    sha256: 658917bd730c73379ee489d6aecce4b165867b95d263da09f17b9624584d1681
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              commitSubscriptionChanges()
          }

          override fun dispose() {
              unregisterApplyObserver.dispose()
              pendingChanges.clear()
              readObserverCache.clear()
              synchronized(lock) { subscriptions.clear() }
          }
      }

      @OptIn(ExperimentalComposeRuntimeApi::class)
      private fun <T> snapshotFlowImpl(externalManager: SnapshotFlowManager?, block: () -> T): Flow<T> =
          flow {
              val manager = externalManager ?: SnapshotFlowManager()

              val needToRerunBlock = Channel<Unit>(1)

              try {
                  var lastValue = manager.runAndWatch(needToRerunBlock, block)
                  emit(lastValue)

                  while (true) {
                      needToRerunBlock.receive()

                      val newValue = manager.runAndWatch(needToRerunBlock, block)
                      if (newValue != lastValue) {
                          lastValue = newValue
                          emit(newValue)
                      }
                  }
              } finally {
                  manager.reportSnapshotFlowCancellation(needToRerunBlock)
                  if (externalManager == null) {
                      // If [manager] was not supplied by the user, it must be disposed of here.
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 561
    endLine: 595
    sha256: 725a141e5c7027672beb73a8ea9b992639e51f471ca6049ff6c8a84e8727c97e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      manager.dispose()
                  }
              }
          }

      /**
       * Create a [Flow] from observable [Snapshot] state. (e.g. state holders returned by
       * [mutableStateOf][androidx.compose.runtime.mutableStateOf].)
       *
       * [snapshotFlow] creates a [Flow] that runs [block] when collected and emits the result, recording
       * any snapshot state that was accessed. While collection continues, if a new [Snapshot] is applied
       * that changes state accessed by [block], the flow will run [block] again, re-recording the
       * snapshot state that was accessed. If the result of [block] is not [equal to][Any.equals] the
       * previous result, the flow will emit that new result. (This behavior is similar to that of
       * [Flow.distinctUntilChanged][kotlinx.coroutines.flow.distinctUntilChanged].) Collection will
       * continue indefinitely unless it is explicitly cancelled or limited by the use of other [Flow]
       * operators.
       *
       * @sample androidx.compose.runtime.samples.snapshotFlowSample
       *
       * [block] is run in a **read-only** [Snapshot] and may not modify snapshot data. If [block]
       * attempts to modify snapshot data, flow collection will fail with [IllegalStateException].
       *
       * [block] may run more than once for equal sets of inputs or only once after many rapid snapshot
       * changes; it should be idempotent and free of side effects.
       *
       * When working with [Snapshot] state it is useful to keep the distinction between **events** and
       * **state** in mind. [snapshotFlow] models snapshot changes as events, but events **cannot** be
       * effectively modeled as observable state. Observable state is a lossy compression of the events
       * that produced that state.
       *
       * An observable **event** happens at a point in time and is discarded. All registered observers at
       * the time the event occurred are notified. All individual events in a stream are assumed to be
       * relevant and may build on one another; repeated equal events have meaning and therefore a
       * registered observer must observe all events without skipping.
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 596
    endLine: 628
    sha256: 34dc856aa22bf4076b23b260753f9268741d37f29a4abe86d6058b9b92da8b9a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * Observable **state** raises change events when the state changes from one value to a new, unequal
       * value. State change events are **conflated;** only the most recent state matters. Observers of
       * state changes must therefore be **idempotent;** given the same state value the observer should
       * produce the same result. It is valid for a state observer to both skip intermediate states as
       * well as run multiple times for the same state and the result should be the same.
       */
      @OptIn(ExperimentalComposeRuntimeApi::class)
      public fun <T> snapshotFlow(block: () -> T): Flow<T> {
          return snapshotFlowImpl(externalManager = null, block)
      }

      /**
       * Create a [Flow] from observable [Snapshot] state. (e.g. state holders returned by
       * [mutableStateOf][androidx.compose.runtime.mutableStateOf].)
       *
       * [snapshotFlow] creates a [Flow] that runs [block] when collected and emits the result, recording
       * any snapshot state that was accessed. While collection continues, if a new [Snapshot] is applied
       * that changes state accessed by [block], the flow will run [block] again, re-recording the
       * snapshot state that was accessed. If the result of [block] is not [equal to][Any.equals] the
       * previous result, the flow will emit that new result. (This behavior is similar to that of
       * [Flow.distinctUntilChanged][kotlinx.coroutines.flow.distinctUntilChanged].) Collection will
       * continue indefinitely unless it is explicitly cancelled or limited by the use of other [Flow]
       * operators.
       *
       * [manager] controls how snapshot state is observed. When the [manager] argument is omitted, a
       * [SnapshotFlowManager] is instantiated under the hood, so by explicitly managing a
       * [SnapshotFlowManager] and passing it to multiple [snapshotFlow]s that will be collected on the
       * same thread, you can improve performance by sharing resources between those [snapshotFlow]s. It
       * is not safe to share a [SnapshotFlowManager] instance across two [snapshotFlow]s that collect in
       * parallel on two different threads. Sharing a [SnapshotFlowManager] across [snapshotFlow]s that
       * cannot be collected in parallel to each other is always encouraged.
       *
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-629-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 629
    endLine: 657
    sha256: d563da8b775cb06eeacdb5ee9a82fe9f3fdd888390f6754b7a9e044d2cd9aac2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       * @sample androidx.compose.runtime.samples.snapshotFlowSample
       *
       * [block] is run in a **read-only** [Snapshot] and may not modify snapshot data. If [block]
       * attempts to modify snapshot data, flow collection will fail with [IllegalStateException].
       *
       * [block] may run more than once for equal sets of inputs or only once after many rapid snapshot
       * changes; it should be idempotent and free of side effects.
       *
       * When working with [Snapshot] state it is useful to keep the distinction between **events** and
       * **state** in mind. [snapshotFlow] models snapshot changes as events, but events **cannot** be
       * effectively modeled as observable state. Observable state is a lossy compression of the events
       * that produced that state.
       *
       * An observable **event** happens at a point in time and is discarded. All registered observers at
       * the time the event occurred are notified. All individual events in a stream are assumed to be
       * relevant and may build on one another; repeated equal events have meaning and therefore a
       * registered observer must observe all events without skipping.
       *
       * Observable **state** raises change events when the state changes from one value to a new, unequal
       * value. State change events are **conflated;** only the most recent state matters. Observers of
       * state changes must therefore be **idempotent;** given the same state value the observer should
       * produce the same result. It is valid for a state observer to both skip intermediate states as
       * well as run multiple times for the same state and the result should be the same.
       */
      @ExperimentalComposeRuntimeApi
      public fun <T> snapshotFlow(manager: SnapshotFlowManager, block: () -> T): Flow<T> {
          return snapshotFlowImpl(manager, block)
      }
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 71
    endLine: 105
    sha256: 595848fae4bc876982554359e4f8aa7989309ac3d167a2294b8fdb3d6c695666
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * recomposition of every [State.value] usage.
       *
       * Optionally, the [context] that the flow is collected in and the [mutationPolicy] that is used to
       * report and merge changes in the returned state can be customized. If the [context] or `Flow`
       * changes, the same state will be returned, the previous collection will be canceled, and the
       * provided Flow will start collection in the new context. Changes to the [mutationPolicy] after the
       * state has been created are ignored.
       *
       * @sample androidx.compose.runtime.samples.FlowWithInitialSample
       * @param initial the value of the state will have until the first flow value is emitted.
       * @param context [CoroutineContext] to use for collecting.
       * @param mutationPolicy A policy used to control how changes are handled in the returned state.
       */
      @Composable
      public fun <T : R, R> Flow<T>.collectAsState(
          initial: R,
          context: CoroutineContext = EmptyCoroutineContext,
          mutationPolicy: SnapshotMutationPolicy<R> = structuralEqualityPolicy(),
      ): State<R> {
          val state = remember { mutableStateOf(initial, mutationPolicy) }
          collectInto(state, context)
          return state
      }

      @Suppress("ComposableNaming")
      @Composable
      @NonRestartableComposable
      private fun <T : R, R> Flow<T>.collectInto(state: MutableState<R>, context: CoroutineContext) {
          LaunchedEffect(this, context) {
              if (context == EmptyCoroutineContext) {
                  collect { state.value = it }
              } else {
                  withContext(context) { collect { state.value = it } }
              }
          }
compose:
  id: live-androidx-runtime-runtime-runtime-snapshotflow
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.snapshotFlow
  sections:
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-1
      title: Compose snapshotFlow source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-1-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-106
      title: Compose snapshotFlow source (lines 106–140)
      aliases:
        - androidx.compose.runtime.collectAsState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-106-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-141
      title: Compose snapshotFlow source (lines 141–175)
      aliases:
        - androidx.compose.runtime.snapshotFlow
        - androidx.compose.runtime.collectAsState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-141-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-176
      title: Compose snapshotFlow source (lines 176–210)
      aliases:
        - androidx.compose.runtime.snapshotFlow
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-176-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-211
      title: Compose snapshotFlow source (lines 211–245)
      aliases:
        - androidx.compose.runtime.snapshotFlow
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-211-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-246
      title: Compose snapshotFlow source (lines 246–280)
      aliases:
        - androidx.compose.runtime.snapshotFlow
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-246-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-281
      title: Compose snapshotFlow source (lines 281–315)
      aliases:
        - androidx.compose.runtime.snapshotFlow
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-281-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-316
      title: Compose snapshotFlow source (lines 316–350)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-316-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-351
      title: Compose snapshotFlow source (lines 351–385)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-351-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-36
      title: Compose snapshotFlow source (lines 36–70)
      aliases:
        - androidx.compose.runtime.collectAsState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-36-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-386
      title: Compose snapshotFlow source (lines 386–420)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-386-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-421
      title: Compose snapshotFlow source (lines 421–455)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-421-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-456
      title: Compose snapshotFlow source (lines 456–490)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-456-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-491
      title: Compose snapshotFlow source (lines 491–525)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-491-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-526
      title: Compose snapshotFlow source (lines 526–560)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-526-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-561
      title: Compose snapshotFlow source (lines 561–595)
      aliases:
        - androidx.compose.runtime.snapshotFlow
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-561-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-596
      title: Compose snapshotFlow source (lines 596–628)
      aliases:
        - androidx.compose.runtime.snapshotFlow
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-596-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-629
      title: Compose snapshotFlow source (lines 629–657)
      aliases:
        - androidx.compose.runtime.snapshotFlow
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-629-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-71
      title: Compose snapshotFlow source (lines 71–105)
      aliases:
        - androidx.compose.runtime.collectAsState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-71-source
      relatedIds: []
---

# Compose snapshotFlow source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt

## Compose snapshotFlow source (lines 1–35)

/*
 * Copyright 2021 The Android Open Source Project
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

import androidx.collection.MutableScatterSet
import androidx.collection.mutableScatterMapOf
import androidx.collection.mutableScatterSetOf
import androidx.compose.runtime.collection.ScopeMap
import androidx.compose.runtime.platform.makeSynchronizedObject
import androidx.compose.runtime.platform.synchronized
import androidx.compose.runtime.snapshots.Snapshot
import androidx.compose.runtime.snapshots.fastForEach
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext
import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.SendChannel

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 106–140)

}

/**
 * Collects values from this [StateFlow] and represents its latest value via [State]. The
 * [StateFlow.value] is used as an initial value. Every time there would be new value posted into
 * the [StateFlow] the returned [State] will be updated causing recomposition of every [State.value]
 * usage.
 *
 * @sample androidx.compose.runtime.samples.StateFlowSample
 * @param context [CoroutineContext] to use for collecting.
 */
@Deprecated(
    "Use the overload with a SnapshotMutationPolicy parameter",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun <T> StateFlow<T>.collectAsState(
    context: CoroutineContext = EmptyCoroutineContext
): State<T> = collectAsState(context, structuralEqualityPolicy())

/**
 * Collects values from this [Flow] and represents its latest value via [State]. Every time there
 * would be new value posted into the [Flow] the returned [State] will be updated causing
 * recomposition of every [State.value] usage.
 *
 * @sample androidx.compose.runtime.samples.FlowWithInitialSample
 * @param initial the value of the state will have until the first flow value is emitted.
 * @param context [CoroutineContext] to use for collecting.
 */
@Deprecated(
    "Use the overload with a SnapshotMutationPolicy parameter",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun <T : R, R> Flow<T>.collectAsState(

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 141–175)

    initial: R,
    context: CoroutineContext = EmptyCoroutineContext,
): State<R> = collectAsState(initial, context, structuralEqualityPolicy())

/**
 * Orchestrates the observation of [Snapshot] state for [snapshotFlow]s that are collected on the
 * same thread.
 *
 * Once a [SnapshotFlowManager] is no longer needed, its [dispose] method should be called.
 *
 * It is not safe to share a [SnapshotFlowManager] instance across two [snapshotFlow]s that collect
 * in parallel on two different threads, but it is not a problem for a thread to run apply observers
 * in parallel with another thread collecting a [snapshotFlow].
 *
 * @see snapshotFlow
 */
@ExperimentalComposeRuntimeApi
public class SnapshotFlowManager {
    private var managerImpl: SnapshotFlowManagerImpl? = SingleSubscriptionSnapshotFlowManager()

    /**
     * Returns the result of running [block] and also subscribes [channel] to be notified whenever a
     * change is made to any of the state objects accessed in [block].
     *
     * If there is already a subscription associated with [channel] from a previous invocation of
     * [runAndWatch], it will be cancelled and replaced.
     *
     * If this method is called after this manager has been disposed of, an [IllegalStateException]
     * will be thrown.
     */
    internal fun <T> runAndWatch(channel: SendChannel<Unit>, block: () -> T): T {
        checkPrecondition(managerImpl != null) {
            "Called runAndWatch on a manager that has been disposed of"
        }


Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 176–210)

        val managerImplRef = managerImpl
        if (managerImplRef is SingleSubscriptionSnapshotFlowManager) {
            val subscribedChannel = managerImplRef.subscribedChannel
            if (subscribedChannel != null && subscribedChannel != channel) {
                // This manager now needs to manage notifications for more than one channel, so we
                // promote the backing object from a [SingleSubscriptionSnapshotFlowManager] to a
                // [MultiSubscriptionSnapshotFlowManager].
                managerImpl = managerImplRef.promote()
            }
        }

        return managerImpl!!.runAndWatch(channel, block)
    }

    /**
     * This must be called by a [snapshotFlow] when it is in the process of exiting to dispose of
     * all subscriptions associated with it.
     *
     * If this method is called after this manager has been disposed of, it will cause no effect.
     */
    internal fun reportSnapshotFlowCancellation(channel: SendChannel<Unit>) {
        managerImpl?.reportSnapshotFlowCancellation(channel)
    }

    /**
     * Disposes of this manager. Disposing of a manager disconnects it from the [Snapshot] system,
     * rendering it incapable of handling any subscriptions.
     *
     * If this method is called after this manager has been disposed of, an [IllegalStateException]
     * will be thrown.
     */
    public fun dispose() {
        managerImpl.let {
            checkPrecondition(it != null) {
                "Called dispose on a manager that has been disposed of"

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 211–245)

            }
            it.dispose()
        }
        managerImpl = null
    }
}

/**
 * The methods of [SnapshotFlowManager] are implemented by delegating to an instance of this class.
 */
internal abstract class SnapshotFlowManagerImpl internal constructor() {
    // Used to lock access to the fields read in the apply observers registered by the subclasses,
    // because apply observers can run concurrently with other parts of `snapshotFlow` logic.
    protected val lock = makeSynchronizedObject()

    /**
     * Adds [obj] to the set of objects watched by [channel], meaning that [channel] will be
     * notified of future changes to [obj].
     *
     * The subscription changes resulting from an invocation of this method will not take effect
     * until committed by an invocation of [commitSubscriptionChanges].
     */
    internal abstract fun watch(channel: SendChannel<Unit>, obj: Any)

    /**
     * Returns [watch] with its first argument fixed to [channel] by partial application. That is,
     * [readObserverFor(channel)(obj)] is equivalent to [watch(channel, obj)].
     */
    internal abstract fun readObserverFor(channel: SendChannel<Unit>): (Any) -> Unit

    /**
     * Unsubscribes [channel] from being notified of changes to all objects.
     *
     * The subscription changes resulting from an invocation of this method will not take effect
     * until committed by an invocation of [commitSubscriptionChanges].

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 246–280)

     */
    internal abstract fun clearWatchSet(channel: SendChannel<Unit>)

    /** Commits subscription changes made since the last invocation of this method. */
    internal abstract fun commitSubscriptionChanges()

    /**
     * Returns the result of running [block] and also subscribes [channel] to be notified whenever a
     * change is made to any of the state objects accessed in [block].
     *
     * If there is already a subscription associated with [channel] from a previous invocation of
     * [runAndWatch], it will be cancelled and replaced.
     */
    internal fun <T> runAndWatch(channel: SendChannel<Unit>, block: () -> T): T {
        val result =
            Snapshot.takeSnapshot(readObserverFor(channel)).run {
                clearWatchSet(channel)
                try {
                    enter(block)
                } finally {
                    dispose()
                }
            }

        commitSubscriptionChanges()
        return result
    }

    /**
     * This must be called by a [snapshotFlow] when it is in the process of exiting to dispose of
     * all subscriptions associated with it.
     */
    internal abstract fun reportSnapshotFlowCancellation(channel: SendChannel<Unit>)

    /**

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 281–315)

     * Disposes of this manager. Disposing of a manager disconnects it from the [Snapshot] system,
     * rendering it incapable of handling any subscriptions.
     */
    internal abstract fun dispose()
}

/**
 * A [SnapshotFlowManagerImpl] that can manage at most one active subscription.
 *
 * If an instance of [SingleSubscriptionSnapshotFlowManager] is managing an active subscription
 * (i.e. has been passed to an invocation of [snapshotFlow]) and is passed to another invocation of
 * [snapshotFlow], an [IllegalStateException] will be thrown.
 */
private class SingleSubscriptionSnapshotFlowManager : SnapshotFlowManagerImpl() {
    // This variable allows us to avoid allocating [watchSet] until we need to watch more than one
    // object.
    private var soleWatchedObject: Any? = null

    /**
     * A working copy of [soleWatchedObject].
     *
     * Invocations of [watch] and [clearWatchSet] only affect this working copy. Invoking
     * [commitSubscriptionChanges] clones this working copy into [soleWatchedObject].
     */
    private var workingSoleWatchedObject: Any? = null

    /** The set of objects that are being watched for changes. */
    private var watchSet: MutableScatterSet<Any>? = null

    /**
     * A working copy of [watchSet].
     *
     * Invocations of [watch] and [clearWatchSet] only affect this working copy. Invoking
     * [commitSubscriptionChanges] clones this working copy into [watchSet].
     */

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 316–350)

    private var workingWatchSet: MutableScatterSet<Any>? = null

    /** The channel that has an active subscription being managed by this manager. */
    var subscribedChannel: SendChannel<Unit>? = null

    // Caches the only valid return value of [readObserverFor].
    private val readObserverCache = { obj: Any -> watch(subscribedChannel!!, obj) }

    private val unregisterApplyObserver = Snapshot.registerApplyObserver { changed, _ ->
        var toNotify: SendChannel<Unit>? = null
        synchronized(lock) {
            val watchSet = watchSet
            if (watchSet == null) {
                if (changed.contains(soleWatchedObject)) {
                    toNotify = subscribedChannel
                }
            } else {
                // Assumption: [watchSet] will typically be smaller than [changed].
                if (watchSet.any { changed.contains(it) }) {
                    toNotify = subscribedChannel
                }
            }
        }
        toNotify?.trySend(Unit)
    }

    override fun watch(channel: SendChannel<Unit>, obj: Any) {
        checkPrecondition(subscribedChannel == channel) {
            "Requested a SingleSubscriptionSnapshotFlowManager to manage multiple subscriptions"
        }

        val workingWatchSetRef = workingWatchSet
        val workingSoleWatchedObjectRef = workingSoleWatchedObject
        if (workingWatchSetRef == null) {
            if (workingSoleWatchedObjectRef == null) {

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 351–385)

                workingSoleWatchedObject = obj
            } else {
                workingWatchSet =
                    mutableScatterSetOf<Any>().also {
                        it.add(workingSoleWatchedObjectRef)
                        it.add(obj)
                    }
                workingSoleWatchedObject = null
            }
        } else {
            checkPrecondition(
                workingSoleWatchedObject == null,
                { "workingSoleWatchedObject must be null when workingWatchSet is non-null" },
            )
            workingWatchSetRef.add(obj)
        }
    }

    override fun readObserverFor(channel: SendChannel<Unit>): (Any) -> Unit {
        checkPrecondition(subscribedChannel == null || subscribedChannel == channel) {
            "Requested a SingleSubscriptionSnapshotFlowManager to manage multiple subscriptions"
        }

        subscribedChannel = channel

        return readObserverCache
    }

    private fun clearWatchSetImpl() {
        workingSoleWatchedObject = null
        workingWatchSet = null
    }

    override fun clearWatchSet(channel: SendChannel<Unit>) = clearWatchSetImpl()


Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 36–70)

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.withContext

/**
 * Collects values from this [StateFlow] and represents its latest value via [State]. The
 * [StateFlow.value] is used as an initial value. Every time there would be new value posted into
 * the [StateFlow] the returned [State] will be updated causing recomposition of every [State.value]
 * usage.
 *
 * Optionally, the [context] that the flow is collected in and the [mutationPolicy] that is used to
 * report and merge changes in the returned state can be customized. If the [context] or `StateFlow`
 * changes, the same state will be returned, the previous collection will be canceled, and the
 * provided Flow will start collection in the new context. Changes to the [mutationPolicy] after the
 * state has been created are ignored.
 *
 * @sample androidx.compose.runtime.samples.StateFlowSample
 * @param context [CoroutineContext] to use for collecting.
 * @param mutationPolicy A policy used to control how changes are handled in the returned state.
 */
@Suppress("StateFlowValueCalledInComposition")
@Composable
public fun <T> StateFlow<T>.collectAsState(
    context: CoroutineContext = EmptyCoroutineContext,
    mutationPolicy: SnapshotMutationPolicy<T> = structuralEqualityPolicy(),
): State<T> {
    val state = remember { mutableStateOf(value, mutationPolicy) }
    collectInto(state, context)
    return state
}

/**
 * Collects values from this [Flow] and represents its latest value via [State]. Every time there
 * would be new value posted into the [Flow] the returned [State] will be updated causing

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 386–420)

    override fun commitSubscriptionChanges() {
        synchronized(lock) {
            soleWatchedObject = workingSoleWatchedObject

            if (workingWatchSet == null) {
                watchSet = null
            } else {
                if (watchSet == null) {
                    watchSet = mutableScatterSetOf()
                }
                val temp = watchSet
                watchSet = workingWatchSet
                workingWatchSet = temp
            }
        }
    }

    override fun reportSnapshotFlowCancellation(channel: SendChannel<Unit>) {
        subscribedChannel = null
        clearWatchSet(channel)
        commitSubscriptionChanges()
    }

    override fun dispose() {
        unregisterApplyObserver.dispose()
        clearWatchSetImpl()
        synchronized(lock) {
            subscribedChannel = null
            soleWatchedObject = null
            watchSet = null
        }
    }

    /**
     * Transfers all subscriptions being managed by this manager to a new

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 421–455)

     * [MultiSubscriptionSnapshotFlowManager], disposes of this manager, and returns the new
     * manager.
     */
    fun promote(): MultiSubscriptionSnapshotFlowManager {
        val multiSubscriptionManager =
            MultiSubscriptionSnapshotFlowManager().also {
                val subscribedChannel = subscribedChannel
                checkPrecondition(subscribedChannel != null) {
                    "promote must only be called when a manager is managing subscriptions for " +
                        "one channel and needs to start managing them for a second"
                }
                val watchSet = watchSet
                if (watchSet == null) {
                    it.watch(subscribedChannel, soleWatchedObject!!)
                } else {
                    watchSet.forEach { obj -> it.watch(subscribedChannel, obj) }
                }
                it.commitSubscriptionChanges()
            }

        dispose()
        return multiSubscriptionManager
    }
}

/**
 * A [SnapshotFlowManagerImpl] that can manage an unbounded number of active subscriptions.
 *
 * This class is not thread-safe.
 */
private class MultiSubscriptionSnapshotFlowManager : SnapshotFlowManagerImpl() {
    private sealed interface SubscriptionChange

    private class Add(val obj: Any, val channel: SendChannel<Unit>) : SubscriptionChange


Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 456–490)

    private class RemoveScope(val channel: SendChannel<Unit>) : SubscriptionChange

    /**
     * A map from snapshot state objects to the channels that are subscribed to be notified of
     * changes to those objects.
     */
    private var subscriptions: ScopeMap<Any, SendChannel<Unit>> = ScopeMap()

    /**
     * A list of changes that will be applied to [subscriptions] the next time
     * [commitSubscriptionChanges] is invoked.
     */
    private val pendingChanges = mutableListOf<SubscriptionChange>()

    // Used by [readObserverFor] to cache partially applied functions.
    private val readObserverCache = mutableScatterMapOf<SendChannel<Unit>, (Any) -> Unit>()

    private val unregisterApplyObserver = Snapshot.registerApplyObserver { changed, _ ->
        var toNotify: MutableList<SendChannel<Unit>>? = null

        synchronized(lock) {
            // Assumption: there will typically be fewer keys in [subscriptions] than elements
            // in [changed].
            subscriptions.forEachKey { key ->
                if (changed.contains(key)) {
                    subscriptions.forEachScopeOf(key) {
                        if (toNotify == null) {
                            toNotify = mutableListOf()
                        }
                        toNotify.add(it)
                    }
                }
            }

            toNotify?.fastForEach { it.trySend(Unit) }

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 491–525)

        }
    }

    override fun watch(channel: SendChannel<Unit>, obj: Any) {
        pendingChanges.add(Add(obj, channel))
    }

    override fun readObserverFor(channel: SendChannel<Unit>): (Any) -> Unit {
        return readObserverCache.get(channel)
            ?: { obj: Any -> watch(channel, obj) }.also { readObserverCache.put(channel, it) }
    }

    override fun clearWatchSet(channel: SendChannel<Unit>) {
        pendingChanges.add(RemoveScope(channel))
    }

    override fun commitSubscriptionChanges() {
        synchronized(lock) {
            pendingChanges.fastForEach {
                when (it) {
                    is Add -> {
                        subscriptions.add(it.obj, it.channel)
                    }
                    is RemoveScope -> {
                        subscriptions.removeScope(it.channel)
                    }
                }
            }
        }
        pendingChanges.clear()
    }

    override fun reportSnapshotFlowCancellation(channel: SendChannel<Unit>) {
        readObserverCache.remove(channel)
        clearWatchSet(channel)

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 526–560)

        commitSubscriptionChanges()
    }

    override fun dispose() {
        unregisterApplyObserver.dispose()
        pendingChanges.clear()
        readObserverCache.clear()
        synchronized(lock) { subscriptions.clear() }
    }
}

@OptIn(ExperimentalComposeRuntimeApi::class)
private fun <T> snapshotFlowImpl(externalManager: SnapshotFlowManager?, block: () -> T): Flow<T> =
    flow {
        val manager = externalManager ?: SnapshotFlowManager()

        val needToRerunBlock = Channel<Unit>(1)

        try {
            var lastValue = manager.runAndWatch(needToRerunBlock, block)
            emit(lastValue)

            while (true) {
                needToRerunBlock.receive()

                val newValue = manager.runAndWatch(needToRerunBlock, block)
                if (newValue != lastValue) {
                    lastValue = newValue
                    emit(newValue)
                }
            }
        } finally {
            manager.reportSnapshotFlowCancellation(needToRerunBlock)
            if (externalManager == null) {
                // If [manager] was not supplied by the user, it must be disposed of here.

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 561–595)

                manager.dispose()
            }
        }
    }

/**
 * Create a [Flow] from observable [Snapshot] state. (e.g. state holders returned by
 * [mutableStateOf][androidx.compose.runtime.mutableStateOf].)
 *
 * [snapshotFlow] creates a [Flow] that runs [block] when collected and emits the result, recording
 * any snapshot state that was accessed. While collection continues, if a new [Snapshot] is applied
 * that changes state accessed by [block], the flow will run [block] again, re-recording the
 * snapshot state that was accessed. If the result of [block] is not [equal to][Any.equals] the
 * previous result, the flow will emit that new result. (This behavior is similar to that of
 * [Flow.distinctUntilChanged][kotlinx.coroutines.flow.distinctUntilChanged].) Collection will
 * continue indefinitely unless it is explicitly cancelled or limited by the use of other [Flow]
 * operators.
 *
 * @sample androidx.compose.runtime.samples.snapshotFlowSample
 *
 * [block] is run in a **read-only** [Snapshot] and may not modify snapshot data. If [block]
 * attempts to modify snapshot data, flow collection will fail with [IllegalStateException].
 *
 * [block] may run more than once for equal sets of inputs or only once after many rapid snapshot
 * changes; it should be idempotent and free of side effects.
 *
 * When working with [Snapshot] state it is useful to keep the distinction between **events** and
 * **state** in mind. [snapshotFlow] models snapshot changes as events, but events **cannot** be
 * effectively modeled as observable state. Observable state is a lossy compression of the events
 * that produced that state.
 *
 * An observable **event** happens at a point in time and is discarded. All registered observers at
 * the time the event occurred are notified. All individual events in a stream are assumed to be
 * relevant and may build on one another; repeated equal events have meaning and therefore a
 * registered observer must observe all events without skipping.

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 596–628)

 *
 * Observable **state** raises change events when the state changes from one value to a new, unequal
 * value. State change events are **conflated;** only the most recent state matters. Observers of
 * state changes must therefore be **idempotent;** given the same state value the observer should
 * produce the same result. It is valid for a state observer to both skip intermediate states as
 * well as run multiple times for the same state and the result should be the same.
 */
@OptIn(ExperimentalComposeRuntimeApi::class)
public fun <T> snapshotFlow(block: () -> T): Flow<T> {
    return snapshotFlowImpl(externalManager = null, block)
}

/**
 * Create a [Flow] from observable [Snapshot] state. (e.g. state holders returned by
 * [mutableStateOf][androidx.compose.runtime.mutableStateOf].)
 *
 * [snapshotFlow] creates a [Flow] that runs [block] when collected and emits the result, recording
 * any snapshot state that was accessed. While collection continues, if a new [Snapshot] is applied
 * that changes state accessed by [block], the flow will run [block] again, re-recording the
 * snapshot state that was accessed. If the result of [block] is not [equal to][Any.equals] the
 * previous result, the flow will emit that new result. (This behavior is similar to that of
 * [Flow.distinctUntilChanged][kotlinx.coroutines.flow.distinctUntilChanged].) Collection will
 * continue indefinitely unless it is explicitly cancelled or limited by the use of other [Flow]
 * operators.
 *
 * [manager] controls how snapshot state is observed. When the [manager] argument is omitted, a
 * [SnapshotFlowManager] is instantiated under the hood, so by explicitly managing a
 * [SnapshotFlowManager] and passing it to multiple [snapshotFlow]s that will be collected on the
 * same thread, you can improve performance by sharing resources between those [snapshotFlow]s. It
 * is not safe to share a [SnapshotFlowManager] instance across two [snapshotFlow]s that collect in
 * parallel on two different threads. Sharing a [SnapshotFlowManager] across [snapshotFlow]s that
 * cannot be collected in parallel to each other is always encouraged.
 *

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 629–657)

 * @sample androidx.compose.runtime.samples.snapshotFlowSample
 *
 * [block] is run in a **read-only** [Snapshot] and may not modify snapshot data. If [block]
 * attempts to modify snapshot data, flow collection will fail with [IllegalStateException].
 *
 * [block] may run more than once for equal sets of inputs or only once after many rapid snapshot
 * changes; it should be idempotent and free of side effects.
 *
 * When working with [Snapshot] state it is useful to keep the distinction between **events** and
 * **state** in mind. [snapshotFlow] models snapshot changes as events, but events **cannot** be
 * effectively modeled as observable state. Observable state is a lossy compression of the events
 * that produced that state.
 *
 * An observable **event** happens at a point in time and is discarded. All registered observers at
 * the time the event occurred are notified. All individual events in a stream are assumed to be
 * relevant and may build on one another; repeated equal events have meaning and therefore a
 * registered observer must observe all events without skipping.
 *
 * Observable **state** raises change events when the state changes from one value to a new, unequal
 * value. State change events are **conflated;** only the most recent state matters. Observers of
 * state changes must therefore be **idempotent;** given the same state value the observer should
 * produce the same result. It is valid for a state observer to both skip intermediate states as
 * well as run multiple times for the same state and the result should be the same.
 */
@ExperimentalComposeRuntimeApi
public fun <T> snapshotFlow(manager: SnapshotFlowManager, block: () -> T): Flow<T> {
    return snapshotFlowImpl(manager, block)
}


Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-629-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)

## Compose snapshotFlow source (lines 71–105)

 * recomposition of every [State.value] usage.
 *
 * Optionally, the [context] that the flow is collected in and the [mutationPolicy] that is used to
 * report and merge changes in the returned state can be customized. If the [context] or `Flow`
 * changes, the same state will be returned, the previous collection will be canceled, and the
 * provided Flow will start collection in the new context. Changes to the [mutationPolicy] after the
 * state has been created are ignored.
 *
 * @sample androidx.compose.runtime.samples.FlowWithInitialSample
 * @param initial the value of the state will have until the first flow value is emitted.
 * @param context [CoroutineContext] to use for collecting.
 * @param mutationPolicy A policy used to control how changes are handled in the returned state.
 */
@Composable
public fun <T : R, R> Flow<T>.collectAsState(
    initial: R,
    context: CoroutineContext = EmptyCoroutineContext,
    mutationPolicy: SnapshotMutationPolicy<R> = structuralEqualityPolicy(),
): State<R> {
    val state = remember { mutableStateOf(initial, mutationPolicy) }
    collectInto(state, context)
    return state
}

@Suppress("ComposableNaming")
@Composable
@NonRestartableComposable
private fun <T : R, R> Flow<T>.collectInto(state: MutableState<R>, context: CoroutineContext) {
    LaunchedEffect(this, context) {
        if (context == EmptyCoroutineContext) {
            collect { state.value = it }
        } else {
            withContext(context) { collect { state.value = it } }
        }
    }

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)
