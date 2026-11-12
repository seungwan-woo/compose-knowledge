---
type: reference
title: androidx.compose.runtime.saveable RememberSaveable.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    startLine: 1
    endLine: 35
    sha256: 6a00d8a8aa4a3c53180ea3ea75a61b28fb67f6e924d6f616ad9c3f150bc8c1cc
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

      package androidx.compose.runtime.saveable

      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.MutableState
      import androidx.compose.runtime.RememberObserver
      import androidx.compose.runtime.SideEffect
      import androidx.compose.runtime.SnapshotMutationPolicy
      import androidx.compose.runtime.currentCompositeKeyHashCode
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.neverEqualPolicy
      import androidx.compose.runtime.referentialEqualityPolicy
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.snapshots.SnapshotMutableState
      import androidx.compose.runtime.structuralEqualityPolicy
      import androidx.compose.runtime.toString

      /**
       * Remember the value produced by [init].
       *
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    startLine: 106
    endLine: 140
    sha256: fac5d4dfb87ea063ac3ba69b39595ecfb353a052bc018713128c4a8785990124
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      /**
       * Remember the value produced by [init].
       *
       * It behaves similarly to [remember], but the stored value will survive the activity or process
       * recreation using the saved instance state mechanism (for example it happens when the screen is
       * rotated in the Android application).
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveable
       *
       * If you use it with types which can be stored inside the Bundle then it will be saved and restored
       * automatically using [autoSaver], otherwise you will need to provide a custom [Saver]
       * implementation via the `saver` param.
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveableCustomSaver
       *
       * You can use it with a value stored inside [androidx.compose.runtime.mutableStateOf].
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableState
       *
       * If the value inside the MutableState can be stored inside the Bundle it would be saved and
       * restored automatically, otherwise you will need to provide a custom [Saver] implementation via an
       * overload with which has `stateSaver` param.
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableStateAndCustomSaver
       * @param inputs A set of inputs such that, when any of them have changed, will cause the state to
       *   reset and [init] to be rerun. Note that state restoration DOES NOT validate against inputs
       *   provided before value was saved.
       * @param init A factory function to create the initial value of this state
       */
      @Composable
      public fun <T : Any> rememberSaveable(vararg inputs: Any?, init: () -> T): T {
          @Suppress("DEPRECATION")
          return rememberSaveable(*inputs, saver = autoSaver(), key = null, init = init)
      }
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    startLine: 141
    endLine: 175
    sha256: b338307d61b9f1afe69b94f157446ec060fb174088a98d6a731a9712ac199b60
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * Remember the value produced by [init].
       *
       * It behaves similarly to [remember], but the stored value will survive the activity or process
       * recreation using the saved instance state mechanism (for example it happens when the screen is
       * rotated in the Android application).
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveable
       *
       * If you use it with types which can be stored inside the Bundle then it will be saved and restored
       * automatically using [autoSaver], otherwise you will need to provide a custom [Saver]
       * implementation via the [saver] param.
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveableCustomSaver
       *
       * You can use it with a value stored inside [androidx.compose.runtime.mutableStateOf].
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableState
       *
       * If the value inside the MutableState can be stored inside the Bundle it would be saved and
       * restored automatically, otherwise you will need to provide a custom [Saver] implementation via an
       * overload with which has `stateSaver` param.
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableStateAndCustomSaver
       * @param inputs A set of inputs such that, when any of them have changed, will cause the state to
       *   reset and [init] to be rerun. Note that state restoration DOES NOT validate against inputs
       *   provided before value was saved.
       * @param saver The [Saver] object which defines how the state is saved and restored.
       * @param init A factory function to create the initial value of this state
       */
      @Composable
      public fun <T : Any> rememberSaveable(
          vararg inputs: Any?,
          saver: Saver<T, out Any>,
          init: () -> T,
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    startLine: 176
    endLine: 210
    sha256: 53783f980a7f7ff0fac459158e8440ff919b6976e35ad761e74af12cd41497d2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ): T {
          @Suppress("DEPRECATION")
          return rememberSaveable(*inputs, saver = saver, key = null, init = init)
      }

      /**
       * Remember the value produced by [init].
       *
       * It behaves similarly to [remember], but the stored value will survive the activity or process
       * recreation using the saved instance state mechanism (for example it happens when the screen is
       * rotated in the Android application).
       *
       * Use this overload if you remember a mutable state with a type which can't be stored in the Bundle
       * so you have to provide a custom saver object.
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableStateAndCustomSaver
       * @param inputs A set of inputs such that, when any of them have changed, will cause the state to
       *   reset and [init] to be rerun. Note that state restoration DOES NOT validate against inputs
       *   provided before value was saved.
       * @param stateSaver The [Saver] object which defines how the value inside the MutableState is saved
       *   and restored.
       * @param init A factory function to create the initial value of this state
       */
      @Composable
      public fun <T> rememberSaveable(
          vararg inputs: Any?,
          stateSaver: Saver<T, out Any>,
          init: () -> MutableState<T>,
      ): MutableState<T> {
          @Suppress("DEPRECATION")
          return rememberSaveable(*inputs, saver = mutableStateSaver(stateSaver), key = null, init = init)
      }

      /**
       * Remember the value produced by [init].
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    startLine: 211
    endLine: 245
    sha256: 10e62e27626d1626a8f6fd4c1a9c381a4540db484b2210a30f81e9c6a37dfbef
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * It behaves similarly to [remember], but the stored value will survive the activity or process
       * recreation using the saved instance state mechanism (for example it happens when the screen is
       * rotated in the Android application).
       *
       * Use this overload if you remember a mutable state with a type which can't be stored in the Bundle
       * so you have to provide a custom saver object.
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableStateAndCustomSaver
       * @param inputs A set of inputs such that, when any of them have changed, will cause the state to
       *   reset and [init] to be rerun. Note that state restoration DOES NOT validate against inputs
       *   provided before value was saved.
       * @param stateSaver The [Saver] object which defines how the value inside the MutableState is saved
       *   and restored.
       * @param key An optional key to be used as a key for the saved value. If not provided we use the
       *   automatically generated by the Compose runtime which is unique for the every exact code
       *   location in the composition tree
       * @param init A factory function to create the initial value of this state
       */
      @Deprecated(
          message =
              " 'rememberSaveable' with a custom 'key' is no longer supported. It bypasses " +
                  "positional scoping, leading to state bugs and inconsistent behavior (e.g., " +
                  "unintentional state sharing or loss, issues in nested LazyLayouts). Please remove the " +
                  "'key' parameter to use positional scoping for consistent, locally-scoped state. " +
                  "See https://r.android.com/3610053 for details."
      )
      @Composable
      public fun <T> rememberSaveable(
          vararg inputs: Any?,
          stateSaver: Saver<T, out Any>,
          key: String? = null,
          init: () -> MutableState<T>,
      ): MutableState<T> {
          @Suppress("DEPRECATION")
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    startLine: 246
    endLine: 280
    sha256: f4091f5f94b664ee5562d1f06ebed606cec48eac4cc963ceb5839d3ec794e9d7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          return rememberSaveable(*inputs, saver = mutableStateSaver(stateSaver), key = key, init = init)
      }

      private class SaveableHolder<T>(
          private var saver: Saver<T, Any>,
          private var registry: SaveableStateRegistry?,
          private var key: String,
          private var value: T,
          private var inputs: Array<out Any?>,
      ) : SaverScope, RememberObserver {
          private var entry: SaveableStateRegistry.Entry? = null
          /** Value provider called by the registry. */
          private val valueProvider = {
              with(saver) { save(requireNotNull(value) { "Value should be initialized" }) }
          }

          fun update(
              saver: Saver<T, Any>,
              registry: SaveableStateRegistry?,
              key: String,
              value: T,
              inputs: Array<out Any?>,
          ) {
              var entryIsOutdated = false
              if (this.registry !== registry) {
                  this.registry = registry
                  entryIsOutdated = true
              }
              if (this.key != key) {
                  this.key = key
                  entryIsOutdated = true
              }
              this.saver = saver
              this.value = value
              this.inputs = inputs
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    startLine: 281
    endLine: 315
    sha256: a5923f6b9c597c5eaad6b61a259440ca37c3ba2d4f652a605c67c01c5308f3b6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (entry != null && entryIsOutdated) {
                  entry?.unregister()
                  entry = null
                  register()
              }
          }

          private fun register() {
              val registry = registry
              require(entry == null) { "entry($entry) is not null" }
              if (registry != null) {
                  registry.requireCanBeSaved(valueProvider())
                  entry = registry.registerProvider(key, valueProvider)
              }
          }

          override fun canBeSaved(value: Any): Boolean {
              val registry = registry
              return registry == null || registry.canBeSaved(value)
          }

          override fun onRemembered() {
              register()
          }

          override fun onForgotten() {
              entry?.unregister()
          }

          override fun onAbandoned() {
              entry?.unregister()
          }

          fun getValueIfInputsDidntChange(inputs: Array<out Any?>): T? {
              return if (inputs.contentEquals(this.inputs)) {
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    startLine: 316
    endLine: 350
    sha256: 825c755d01788cb02adc447ce39b9dad2e45f180590615c02af622ba16423627
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  value
              } else {
                  null
              }
          }
      }

      @Suppress("UNCHECKED_CAST")
      internal fun <T> mutableStateSaver(inner: Saver<T, out Any>) =
          with(inner as Saver<T, Any>) {
              Saver<MutableState<T>, MutableState<Any?>>(
                  save = { state ->
                      require(state is SnapshotMutableState<T>) {
                          "If you use a custom MutableState implementation you have to write a custom " +
                              "Saver and pass it as a saver param to rememberSaveable()"
                      }
                      val saved = save(state.value)
                      if (saved != null) {
                          mutableStateOf(saved, state.policy as SnapshotMutationPolicy<Any?>)
                      } else {
                          // if the inner saver returned null we need to return null as well so the
                          // user's init lambda will be used instead of restoring mutableStateOf(null)
                          null
                      }
                  },
                  restore =
                      @Suppress("UNCHECKED_CAST", "ExceptionMessage") {
                          require(it is SnapshotMutableState<Any?>)
                          mutableStateOf(
                              if (it.value != null) restore(it.value!!) else null,
                              it.policy as SnapshotMutationPolicy<T?>,
                          )
                              as MutableState<T>
                      },
              )
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    startLine: 351
    endLine: 385
    sha256: 220b4a4882164ec6c86fa5149b6993a6e277a1e1ce80a86d21144ec0af13645e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

      private fun SaveableStateRegistry.requireCanBeSaved(value: Any?) {
          if (value != null && !canBeSaved(value)) {
              throw IllegalArgumentException(
                  if (value is SnapshotMutableState<*>) {
                      if (
                          value.policy !== neverEqualPolicy<Any?>() &&
                              value.policy !== structuralEqualityPolicy<Any?>() &&
                              value.policy !== referentialEqualityPolicy<Any?>()
                      ) {
                          "If you use a custom SnapshotMutationPolicy for your MutableState you have to" +
                              " write a custom Saver"
                      } else {
                          "MutableState containing ${value.value} cannot be saved using the current " +
                              "SaveableStateRegistry. The default implementation only supports types " +
                              "which can be stored inside the Bundle. Please consider implementing a " +
                              "custom Saver for this class and pass it as a stateSaver parameter to " +
                              "rememberSaveable()."
                      }
                  } else {
                      generateCannotBeSavedErrorMessage(value)
                  }
              )
          }
      }

      internal fun generateCannotBeSavedErrorMessage(value: Any): String =
          "$value cannot be saved using the current SaveableStateRegistry. The default " +
              "implementation only supports types which can be stored inside the Bundle" +
              ". Please consider implementing a custom Saver for this class and pass it" +
              " to rememberSaveable()."

      /** The maximum radix available for conversion to and from strings. */
      private val MaxSupportedRadix = 36
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    startLine: 36
    endLine: 70
    sha256: b9b8f066e45482cbfa60d47e5ca584dabd7d8297288b809fab9adce36a10a91c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * It behaves similarly to [remember], but the stored value will survive the activity or process
       * recreation using the saved instance state mechanism (for example it happens when the screen is
       * rotated in the Android application).
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveable
       *
       * If you use it with types which can be stored inside the Bundle then it will be saved and restored
       * automatically using [autoSaver], otherwise you will need to provide a custom [Saver]
       * implementation via the [saver] param.
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveableCustomSaver
       *
       * You can use it with a value stored inside [androidx.compose.runtime.mutableStateOf].
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableState
       *
       * If the value inside the MutableState can be stored inside the Bundle it would be saved and
       * restored automatically, otherwise you will need to provide a custom [Saver] implementation via an
       * overload with which has `stateSaver` param.
       *
       * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableStateAndCustomSaver
       * @param inputs A set of inputs such that, when any of them have changed, will cause the state to
       *   reset and [init] to be rerun. Note that state restoration DOES NOT validate against inputs
       *   provided before value was saved.
       * @param saver The [Saver] object which defines how the state is saved and restored.
       * @param key An optional key to be used as a key for the saved value. If not provided we use the
       *   automatically generated by the Compose runtime which is unique for the every exact code
       *   location in the composition tree
       * @param init A factory function to create the initial value of this state
       */
      @Deprecated(
          message =
              " 'rememberSaveable' with a custom 'key' is no longer supported. It bypasses " +
                  "positional scoping, leading to state bugs and inconsistent behavior (e.g., " +
                  "unintentional state sharing or loss, issues in nested LazyLayouts). Please remove the " +
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt
    startLine: 71
    endLine: 105
    sha256: a1e1e861efdb25985119356248559799e470f595a111ddf546416b5ddd410bd8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                  "'key' parameter to use positional scoping for consistent, locally-scoped state. " +
                  "See https://r.android.com/3610053 for details."
      )
      @Composable
      public fun <T : Any> rememberSaveable(
          vararg inputs: Any?,
          saver: Saver<T, out Any> = autoSaver(),
          key: String? = null,
          init: () -> T,
      ): T {
          val compositeKey = currentCompositeKeyHashCode
          // key is the one provided by the user or the one generated by the compose runtime
          val finalKey =
              if (!key.isNullOrEmpty()) {
                  key
              } else {
                  compositeKey.toString(MaxSupportedRadix)
              }
          @Suppress("UNCHECKED_CAST") (saver as Saver<T, Any>)

          val registry = LocalSaveableStateRegistry.current

          val holder = remember {
              // value is restored using the registry or created via [init] lambda
              val restored = registry?.consumeRestored(finalKey)?.let { saver.restore(it) }
              val finalValue = restored ?: init()
              SaveableHolder(saver, registry, finalKey, finalValue, inputs)
          }

          val value = holder.getValueIfInputsDidntChange(inputs) ?: init()
          SideEffect { holder.update(saver, registry, finalKey, value, inputs) }

          return value
      }
compose:
  id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable
  artifact: androidx.compose.runtime:runtime-saveable
  fqn: androidx.compose.runtime.saveable
  sections:
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-1
      title: androidx.compose.runtime.saveable RememberSaveable.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-1-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-106
      title: androidx.compose.runtime.saveable RememberSaveable.kt source (lines 106–140)
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-106-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-141
      title: androidx.compose.runtime.saveable RememberSaveable.kt source (lines 141–175)
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-141-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-176
      title: androidx.compose.runtime.saveable RememberSaveable.kt source (lines 176–210)
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-176-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-211
      title: androidx.compose.runtime.saveable RememberSaveable.kt source (lines 211–245)
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-211-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-246
      title: androidx.compose.runtime.saveable RememberSaveable.kt source (lines 246–280)
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-246-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-281
      title: androidx.compose.runtime.saveable RememberSaveable.kt source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-281-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-316
      title: androidx.compose.runtime.saveable RememberSaveable.kt source (lines 316–350)
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-316-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-351
      title: androidx.compose.runtime.saveable RememberSaveable.kt source (lines 351–385)
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-351-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-36
      title: androidx.compose.runtime.saveable RememberSaveable.kt source (lines 36–70)
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-36-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-71
      title: androidx.compose.runtime.saveable RememberSaveable.kt source (lines 71–105)
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-71-source
      relatedIds: []
---

# androidx.compose.runtime.saveable RememberSaveable.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt

## androidx.compose.runtime.saveable RememberSaveable.kt source (lines 1–35)

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

package androidx.compose.runtime.saveable

import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.RememberObserver
import androidx.compose.runtime.SideEffect
import androidx.compose.runtime.SnapshotMutationPolicy
import androidx.compose.runtime.currentCompositeKeyHashCode
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.neverEqualPolicy
import androidx.compose.runtime.referentialEqualityPolicy
import androidx.compose.runtime.remember
import androidx.compose.runtime.snapshots.SnapshotMutableState
import androidx.compose.runtime.structuralEqualityPolicy
import androidx.compose.runtime.toString

/**
 * Remember the value produced by [init].
 *

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt)

## androidx.compose.runtime.saveable RememberSaveable.kt source (lines 106–140)

/**
 * Remember the value produced by [init].
 *
 * It behaves similarly to [remember], but the stored value will survive the activity or process
 * recreation using the saved instance state mechanism (for example it happens when the screen is
 * rotated in the Android application).
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveable
 *
 * If you use it with types which can be stored inside the Bundle then it will be saved and restored
 * automatically using [autoSaver], otherwise you will need to provide a custom [Saver]
 * implementation via the `saver` param.
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveableCustomSaver
 *
 * You can use it with a value stored inside [androidx.compose.runtime.mutableStateOf].
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableState
 *
 * If the value inside the MutableState can be stored inside the Bundle it would be saved and
 * restored automatically, otherwise you will need to provide a custom [Saver] implementation via an
 * overload with which has `stateSaver` param.
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableStateAndCustomSaver
 * @param inputs A set of inputs such that, when any of them have changed, will cause the state to
 *   reset and [init] to be rerun. Note that state restoration DOES NOT validate against inputs
 *   provided before value was saved.
 * @param init A factory function to create the initial value of this state
 */
@Composable
public fun <T : Any> rememberSaveable(vararg inputs: Any?, init: () -> T): T {
    @Suppress("DEPRECATION")
    return rememberSaveable(*inputs, saver = autoSaver(), key = null, init = init)
}


Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt)

## androidx.compose.runtime.saveable RememberSaveable.kt source (lines 141–175)

/**
 * Remember the value produced by [init].
 *
 * It behaves similarly to [remember], but the stored value will survive the activity or process
 * recreation using the saved instance state mechanism (for example it happens when the screen is
 * rotated in the Android application).
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveable
 *
 * If you use it with types which can be stored inside the Bundle then it will be saved and restored
 * automatically using [autoSaver], otherwise you will need to provide a custom [Saver]
 * implementation via the [saver] param.
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveableCustomSaver
 *
 * You can use it with a value stored inside [androidx.compose.runtime.mutableStateOf].
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableState
 *
 * If the value inside the MutableState can be stored inside the Bundle it would be saved and
 * restored automatically, otherwise you will need to provide a custom [Saver] implementation via an
 * overload with which has `stateSaver` param.
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableStateAndCustomSaver
 * @param inputs A set of inputs such that, when any of them have changed, will cause the state to
 *   reset and [init] to be rerun. Note that state restoration DOES NOT validate against inputs
 *   provided before value was saved.
 * @param saver The [Saver] object which defines how the state is saved and restored.
 * @param init A factory function to create the initial value of this state
 */
@Composable
public fun <T : Any> rememberSaveable(
    vararg inputs: Any?,
    saver: Saver<T, out Any>,
    init: () -> T,

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt)

## androidx.compose.runtime.saveable RememberSaveable.kt source (lines 176–210)

): T {
    @Suppress("DEPRECATION")
    return rememberSaveable(*inputs, saver = saver, key = null, init = init)
}

/**
 * Remember the value produced by [init].
 *
 * It behaves similarly to [remember], but the stored value will survive the activity or process
 * recreation using the saved instance state mechanism (for example it happens when the screen is
 * rotated in the Android application).
 *
 * Use this overload if you remember a mutable state with a type which can't be stored in the Bundle
 * so you have to provide a custom saver object.
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableStateAndCustomSaver
 * @param inputs A set of inputs such that, when any of them have changed, will cause the state to
 *   reset and [init] to be rerun. Note that state restoration DOES NOT validate against inputs
 *   provided before value was saved.
 * @param stateSaver The [Saver] object which defines how the value inside the MutableState is saved
 *   and restored.
 * @param init A factory function to create the initial value of this state
 */
@Composable
public fun <T> rememberSaveable(
    vararg inputs: Any?,
    stateSaver: Saver<T, out Any>,
    init: () -> MutableState<T>,
): MutableState<T> {
    @Suppress("DEPRECATION")
    return rememberSaveable(*inputs, saver = mutableStateSaver(stateSaver), key = null, init = init)
}

/**
 * Remember the value produced by [init].

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt)

## androidx.compose.runtime.saveable RememberSaveable.kt source (lines 211–245)

 *
 * It behaves similarly to [remember], but the stored value will survive the activity or process
 * recreation using the saved instance state mechanism (for example it happens when the screen is
 * rotated in the Android application).
 *
 * Use this overload if you remember a mutable state with a type which can't be stored in the Bundle
 * so you have to provide a custom saver object.
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableStateAndCustomSaver
 * @param inputs A set of inputs such that, when any of them have changed, will cause the state to
 *   reset and [init] to be rerun. Note that state restoration DOES NOT validate against inputs
 *   provided before value was saved.
 * @param stateSaver The [Saver] object which defines how the value inside the MutableState is saved
 *   and restored.
 * @param key An optional key to be used as a key for the saved value. If not provided we use the
 *   automatically generated by the Compose runtime which is unique for the every exact code
 *   location in the composition tree
 * @param init A factory function to create the initial value of this state
 */
@Deprecated(
    message =
        " 'rememberSaveable' with a custom 'key' is no longer supported. It bypasses " +
            "positional scoping, leading to state bugs and inconsistent behavior (e.g., " +
            "unintentional state sharing or loss, issues in nested LazyLayouts). Please remove the " +
            "'key' parameter to use positional scoping for consistent, locally-scoped state. " +
            "See https://r.android.com/3610053 for details."
)
@Composable
public fun <T> rememberSaveable(
    vararg inputs: Any?,
    stateSaver: Saver<T, out Any>,
    key: String? = null,
    init: () -> MutableState<T>,
): MutableState<T> {
    @Suppress("DEPRECATION")

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt)

## androidx.compose.runtime.saveable RememberSaveable.kt source (lines 246–280)

    return rememberSaveable(*inputs, saver = mutableStateSaver(stateSaver), key = key, init = init)
}

private class SaveableHolder<T>(
    private var saver: Saver<T, Any>,
    private var registry: SaveableStateRegistry?,
    private var key: String,
    private var value: T,
    private var inputs: Array<out Any?>,
) : SaverScope, RememberObserver {
    private var entry: SaveableStateRegistry.Entry? = null
    /** Value provider called by the registry. */
    private val valueProvider = {
        with(saver) { save(requireNotNull(value) { "Value should be initialized" }) }
    }

    fun update(
        saver: Saver<T, Any>,
        registry: SaveableStateRegistry?,
        key: String,
        value: T,
        inputs: Array<out Any?>,
    ) {
        var entryIsOutdated = false
        if (this.registry !== registry) {
            this.registry = registry
            entryIsOutdated = true
        }
        if (this.key != key) {
            this.key = key
            entryIsOutdated = true
        }
        this.saver = saver
        this.value = value
        this.inputs = inputs

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt)

## androidx.compose.runtime.saveable RememberSaveable.kt source (lines 281–315)

        if (entry != null && entryIsOutdated) {
            entry?.unregister()
            entry = null
            register()
        }
    }

    private fun register() {
        val registry = registry
        require(entry == null) { "entry($entry) is not null" }
        if (registry != null) {
            registry.requireCanBeSaved(valueProvider())
            entry = registry.registerProvider(key, valueProvider)
        }
    }

    override fun canBeSaved(value: Any): Boolean {
        val registry = registry
        return registry == null || registry.canBeSaved(value)
    }

    override fun onRemembered() {
        register()
    }

    override fun onForgotten() {
        entry?.unregister()
    }

    override fun onAbandoned() {
        entry?.unregister()
    }

    fun getValueIfInputsDidntChange(inputs: Array<out Any?>): T? {
        return if (inputs.contentEquals(this.inputs)) {

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt)

## androidx.compose.runtime.saveable RememberSaveable.kt source (lines 316–350)

            value
        } else {
            null
        }
    }
}

@Suppress("UNCHECKED_CAST")
internal fun <T> mutableStateSaver(inner: Saver<T, out Any>) =
    with(inner as Saver<T, Any>) {
        Saver<MutableState<T>, MutableState<Any?>>(
            save = { state ->
                require(state is SnapshotMutableState<T>) {
                    "If you use a custom MutableState implementation you have to write a custom " +
                        "Saver and pass it as a saver param to rememberSaveable()"
                }
                val saved = save(state.value)
                if (saved != null) {
                    mutableStateOf(saved, state.policy as SnapshotMutationPolicy<Any?>)
                } else {
                    // if the inner saver returned null we need to return null as well so the
                    // user's init lambda will be used instead of restoring mutableStateOf(null)
                    null
                }
            },
            restore =
                @Suppress("UNCHECKED_CAST", "ExceptionMessage") {
                    require(it is SnapshotMutableState<Any?>)
                    mutableStateOf(
                        if (it.value != null) restore(it.value!!) else null,
                        it.policy as SnapshotMutationPolicy<T?>,
                    )
                        as MutableState<T>
                },
        )

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt)

## androidx.compose.runtime.saveable RememberSaveable.kt source (lines 351–385)

    }

private fun SaveableStateRegistry.requireCanBeSaved(value: Any?) {
    if (value != null && !canBeSaved(value)) {
        throw IllegalArgumentException(
            if (value is SnapshotMutableState<*>) {
                if (
                    value.policy !== neverEqualPolicy<Any?>() &&
                        value.policy !== structuralEqualityPolicy<Any?>() &&
                        value.policy !== referentialEqualityPolicy<Any?>()
                ) {
                    "If you use a custom SnapshotMutationPolicy for your MutableState you have to" +
                        " write a custom Saver"
                } else {
                    "MutableState containing ${value.value} cannot be saved using the current " +
                        "SaveableStateRegistry. The default implementation only supports types " +
                        "which can be stored inside the Bundle. Please consider implementing a " +
                        "custom Saver for this class and pass it as a stateSaver parameter to " +
                        "rememberSaveable()."
                }
            } else {
                generateCannotBeSavedErrorMessage(value)
            }
        )
    }
}

internal fun generateCannotBeSavedErrorMessage(value: Any): String =
    "$value cannot be saved using the current SaveableStateRegistry. The default " +
        "implementation only supports types which can be stored inside the Bundle" +
        ". Please consider implementing a custom Saver for this class and pass it" +
        " to rememberSaveable()."

/** The maximum radix available for conversion to and from strings. */
private val MaxSupportedRadix = 36

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt)

## androidx.compose.runtime.saveable RememberSaveable.kt source (lines 36–70)

 * It behaves similarly to [remember], but the stored value will survive the activity or process
 * recreation using the saved instance state mechanism (for example it happens when the screen is
 * rotated in the Android application).
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveable
 *
 * If you use it with types which can be stored inside the Bundle then it will be saved and restored
 * automatically using [autoSaver], otherwise you will need to provide a custom [Saver]
 * implementation via the [saver] param.
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveableCustomSaver
 *
 * You can use it with a value stored inside [androidx.compose.runtime.mutableStateOf].
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableState
 *
 * If the value inside the MutableState can be stored inside the Bundle it would be saved and
 * restored automatically, otherwise you will need to provide a custom [Saver] implementation via an
 * overload with which has `stateSaver` param.
 *
 * @sample androidx.compose.runtime.saveable.samples.RememberSaveableWithMutableStateAndCustomSaver
 * @param inputs A set of inputs such that, when any of them have changed, will cause the state to
 *   reset and [init] to be rerun. Note that state restoration DOES NOT validate against inputs
 *   provided before value was saved.
 * @param saver The [Saver] object which defines how the state is saved and restored.
 * @param key An optional key to be used as a key for the saved value. If not provided we use the
 *   automatically generated by the Compose runtime which is unique for the every exact code
 *   location in the composition tree
 * @param init A factory function to create the initial value of this state
 */
@Deprecated(
    message =
        " 'rememberSaveable' with a custom 'key' is no longer supported. It bypasses " +
            "positional scoping, leading to state bugs and inconsistent behavior (e.g., " +
            "unintentional state sharing or loss, issues in nested LazyLayouts). Please remove the " +

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt)

## androidx.compose.runtime.saveable RememberSaveable.kt source (lines 71–105)

            "'key' parameter to use positional scoping for consistent, locally-scoped state. " +
            "See https://r.android.com/3610053 for details."
)
@Composable
public fun <T : Any> rememberSaveable(
    vararg inputs: Any?,
    saver: Saver<T, out Any> = autoSaver(),
    key: String? = null,
    init: () -> T,
): T {
    val compositeKey = currentCompositeKeyHashCode
    // key is the one provided by the user or the one generated by the compose runtime
    val finalKey =
        if (!key.isNullOrEmpty()) {
            key
        } else {
            compositeKey.toString(MaxSupportedRadix)
        }
    @Suppress("UNCHECKED_CAST") (saver as Saver<T, Any>)

    val registry = LocalSaveableStateRegistry.current

    val holder = remember {
        // value is restored using the registry or created via [init] lambda
        val restored = registry?.consumeRestored(finalKey)?.let { saver.restore(it) }
        val finalValue = restored ?: init()
        SaveableHolder(saver, registry, finalKey, finalValue, inputs)
    }

    val value = holder.getValueIfInputsDidntChange(inputs) ?: init()
    SideEffect { holder.update(saver, registry, finalKey, value, inputs) }

    return value
}


Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-remembersaveable-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/RememberSaveable.kt)
