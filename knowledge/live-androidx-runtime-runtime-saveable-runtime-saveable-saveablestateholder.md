---
type: reference
title: androidx.compose.runtime.saveable SaveableStateHolder.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt
    startLine: 1
    endLine: 35
    sha256: b40a922e4ae41455d75446f4be66fe4ecd304933366cf69ba3c55ec42a6a5978
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

      package androidx.compose.runtime.saveable

      import androidx.collection.mutableScatterMapOf
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.CompositionLocalProvider
      import androidx.compose.runtime.DisposableEffect
      import androidx.compose.runtime.ReusableContent
      import androidx.compose.runtime.mutableStateSetOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.snapshots.SnapshotStateSet
      import androidx.savedstate.compose.LocalSavedStateRegistryOwner

      /**
       * Allows to save the state defined with [rememberSaveable] for the subtree before disposing it to
       * make it possible to compose it back next time with the restored state. It allows different
       * navigation patterns to keep the ui state like scroll position for the currently not composed
       * screens from the backstack.
       *
       * @sample androidx.compose.runtime.saveable.samples.SimpleNavigationWithSaveableStateSample
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt
    startLine: 106
    endLine: 140
    sha256: 8fbf9474f74afabe79f8f4483b0603a0be35003f74f12b7e2e645d17271d1667
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                  val registry = remember {
                      require(canBeSaved(key)) {
                          "Type of the key $key is not supported. On Android you can only use types " +
                              "which can be stored inside the Bundle."
                      }
                      SaveableStateRegistryWrapper(
                          base = SaveableStateRegistry(restoredValues = savedStates[key], canBeSaved)
                      )
                  }
                  CompositionLocalProvider(
                      LocalSaveableStateRegistry provides registry,
                      LocalSavedStateRegistryOwner provides registry,
                      content = content,
                  )
                  DisposableEffect(Unit) {
                      require(key !in registries) { "Key $key was used multiple times " }
                      savedStates -= key
                      _keys?.add(key)
                      registries[key] = registry
                      onDispose {
                          if (registries.remove(key) === registry) {
                              savedStates[key] = registry.performSave()
                          }
                      }
                  }
              }
          }

          override fun removeState(key: Any) {
              _keys?.remove(key)
              if (registries.remove(key) == null) {
                  savedStates -= key
              }
          }
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt
    startLine: 141
    endLine: 159
    sha256: 5fb7566ef41d07ffb7c99bca864180e49f886742d8451fbe3d026b91f86443b0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          companion object {
              val Saver: Saver<SaveableStateHolderImpl, *> =
                  Saver(
                      // Only save the state if it contains actual data. If the internal state
                      // map is empty (e.g., no `rememberSaveable` was used), we drop the key
                      // to optimize bundle size. This means these keys won't be restored in
                      // the keys set after process death.
                      save = { holder ->
                          holder.registries.forEach { key, registry ->
                              holder.savedStates[key] = registry.performSave()
                          }
                          holder.savedStates.values.removeAll { it.isEmpty() }
                          holder.savedStates.ifEmpty { null }
                      },
                      restore = { savedStates -> SaveableStateHolderImpl(savedStates) },
                  )
          }
      }
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt
    startLine: 36
    endLine: 70
    sha256: f09972a968af72ce480569e6664cbe9953998a66fc6511bac5ef7eade051f947
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * The content should be composed using [SaveableStateProvider] while providing a key representing
       * this content. Next time [SaveableStateProvider] will be used with the same key its state will be
       * restored.
       */
      public interface SaveableStateHolder {
          /**
           * Returns the set of all keys currently registered in this [SaveableStateHolder].
           *
           * These are the keys that were passed to [SaveableStateProvider] and have not yet been removed
           * via [removeState].
           */
          public val keys: Set<Any>
              // Default to `emptySet` to preserve backward compatibility for existing
              // implementations that don't override this new property.
              get() = emptySet()

          /**
           * Put your content associated with a [key] inside the [content]. This will automatically save
           * all the states defined with [rememberSaveable] before disposing the content and will restore
           * the states when you compose with this key again.
           *
           * @param key to be used for saving and restoring the states for the subtree. Note that on
           *   Android you can only use types which can be stored inside the Bundle.
           * @param content the content for which [key] is associated.
           */
          @Composable public fun SaveableStateProvider(key: Any, content: @Composable () -> Unit)

          /** Removes the saved state associated with the passed [key]. */
          public fun removeState(key: Any)
      }

      /** Creates and remembers the instance of [SaveableStateHolder]. */
      @Composable
      public fun rememberSaveableStateHolder(): SaveableStateHolder =
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt
    startLine: 71
    endLine: 105
    sha256: a55536d7b460d9220495632c8648de161e6f727b41023e51e14ba7f4752f97ee
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          rememberSaveable(saver = SaveableStateHolderImpl.Saver) { SaveableStateHolderImpl() }
              .apply { parentSaveableStateRegistry = LocalSaveableStateRegistry.current }

      private class SaveableStateHolderImpl(
          private val savedStates: MutableMap<Any, Map<String, List<Any?>>> = mutableMapOf()
      ) : SaveableStateHolder {
          private val registries = mutableScatterMapOf<Any, SaveableStateRegistry>()
          var parentSaveableStateRegistry: SaveableStateRegistry? = null
          private val canBeSaved: (Any) -> Boolean = {
              parentSaveableStateRegistry?.canBeSaved(it) ?: true
          }

          // Lazily allocated to avoid overhead in high-frequency usage
          // (e.g., per lazy list item) unless explicitly read by a consumer.
          private var _keys: SnapshotStateSet<Any>? = null
          override val keys: Set<Any>
              get() {
                  var keys = _keys
                  if (keys == null) {
                      // When initialized, we populate it with keys from both:
                      // - `registries`: keys that are currently active (composed).
                      // - `savedStates`: keys that are currently inactive (disposed but not removed).
                      // Note that we rely on `savedStates` keeping track of all disposed keys (even
                      // those with empty state) to ensure this set is complete.
                      keys = mutableStateSetOf()
                      registries.forEachKey { key -> keys += key }
                      savedStates.keys.forEach { key -> keys += key }
                      _keys = keys
                  }
                  return keys
              }

          @Composable
          override fun SaveableStateProvider(key: Any, content: @Composable () -> Unit) {
              ReusableContent(key) {
compose:
  id: live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder
  artifact: androidx.compose.runtime:runtime-saveable
  fqn: androidx.compose.runtime.saveable
  sections:
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-1
      title: androidx.compose.runtime.saveable SaveableStateHolder.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-1-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-106
      title: androidx.compose.runtime.saveable SaveableStateHolder.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-106-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-141
      title: androidx.compose.runtime.saveable SaveableStateHolder.kt source (lines 141–159)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-141-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-36
      title: androidx.compose.runtime.saveable SaveableStateHolder.kt source (lines 36–70)
      aliases:
        - androidx.compose.runtime.saveable.SaveableStateHolder
        - androidx.compose.runtime.saveable.rememberSaveableStateHolder
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-36-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-71
      title: androidx.compose.runtime.saveable SaveableStateHolder.kt source (lines 71–105)
      aliases:
        - androidx.compose.runtime.saveable.SaveableStateHolder
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-71-source
      relatedIds: []
---

# androidx.compose.runtime.saveable SaveableStateHolder.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt

## androidx.compose.runtime.saveable SaveableStateHolder.kt source (lines 1–35)

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

package androidx.compose.runtime.saveable

import androidx.collection.mutableScatterMapOf
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.ReusableContent
import androidx.compose.runtime.mutableStateSetOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.snapshots.SnapshotStateSet
import androidx.savedstate.compose.LocalSavedStateRegistryOwner

/**
 * Allows to save the state defined with [rememberSaveable] for the subtree before disposing it to
 * make it possible to compose it back next time with the restored state. It allows different
 * navigation patterns to keep the ui state like scroll position for the currently not composed
 * screens from the backstack.
 *
 * @sample androidx.compose.runtime.saveable.samples.SimpleNavigationWithSaveableStateSample

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt)

## androidx.compose.runtime.saveable SaveableStateHolder.kt source (lines 106–140)

            val registry = remember {
                require(canBeSaved(key)) {
                    "Type of the key $key is not supported. On Android you can only use types " +
                        "which can be stored inside the Bundle."
                }
                SaveableStateRegistryWrapper(
                    base = SaveableStateRegistry(restoredValues = savedStates[key], canBeSaved)
                )
            }
            CompositionLocalProvider(
                LocalSaveableStateRegistry provides registry,
                LocalSavedStateRegistryOwner provides registry,
                content = content,
            )
            DisposableEffect(Unit) {
                require(key !in registries) { "Key $key was used multiple times " }
                savedStates -= key
                _keys?.add(key)
                registries[key] = registry
                onDispose {
                    if (registries.remove(key) === registry) {
                        savedStates[key] = registry.performSave()
                    }
                }
            }
        }
    }

    override fun removeState(key: Any) {
        _keys?.remove(key)
        if (registries.remove(key) == null) {
            savedStates -= key
        }
    }


Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt)

## androidx.compose.runtime.saveable SaveableStateHolder.kt source (lines 141–159)

    companion object {
        val Saver: Saver<SaveableStateHolderImpl, *> =
            Saver(
                // Only save the state if it contains actual data. If the internal state
                // map is empty (e.g., no `rememberSaveable` was used), we drop the key
                // to optimize bundle size. This means these keys won't be restored in
                // the keys set after process death.
                save = { holder ->
                    holder.registries.forEach { key, registry ->
                        holder.savedStates[key] = registry.performSave()
                    }
                    holder.savedStates.values.removeAll { it.isEmpty() }
                    holder.savedStates.ifEmpty { null }
                },
                restore = { savedStates -> SaveableStateHolderImpl(savedStates) },
            )
    }
}


Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt)

## androidx.compose.runtime.saveable SaveableStateHolder.kt source (lines 36–70)

 *
 * The content should be composed using [SaveableStateProvider] while providing a key representing
 * this content. Next time [SaveableStateProvider] will be used with the same key its state will be
 * restored.
 */
public interface SaveableStateHolder {
    /**
     * Returns the set of all keys currently registered in this [SaveableStateHolder].
     *
     * These are the keys that were passed to [SaveableStateProvider] and have not yet been removed
     * via [removeState].
     */
    public val keys: Set<Any>
        // Default to `emptySet` to preserve backward compatibility for existing
        // implementations that don't override this new property.
        get() = emptySet()

    /**
     * Put your content associated with a [key] inside the [content]. This will automatically save
     * all the states defined with [rememberSaveable] before disposing the content and will restore
     * the states when you compose with this key again.
     *
     * @param key to be used for saving and restoring the states for the subtree. Note that on
     *   Android you can only use types which can be stored inside the Bundle.
     * @param content the content for which [key] is associated.
     */
    @Composable public fun SaveableStateProvider(key: Any, content: @Composable () -> Unit)

    /** Removes the saved state associated with the passed [key]. */
    public fun removeState(key: Any)
}

/** Creates and remembers the instance of [SaveableStateHolder]. */
@Composable
public fun rememberSaveableStateHolder(): SaveableStateHolder =

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt)

## androidx.compose.runtime.saveable SaveableStateHolder.kt source (lines 71–105)

    rememberSaveable(saver = SaveableStateHolderImpl.Saver) { SaveableStateHolderImpl() }
        .apply { parentSaveableStateRegistry = LocalSaveableStateRegistry.current }

private class SaveableStateHolderImpl(
    private val savedStates: MutableMap<Any, Map<String, List<Any?>>> = mutableMapOf()
) : SaveableStateHolder {
    private val registries = mutableScatterMapOf<Any, SaveableStateRegistry>()
    var parentSaveableStateRegistry: SaveableStateRegistry? = null
    private val canBeSaved: (Any) -> Boolean = {
        parentSaveableStateRegistry?.canBeSaved(it) ?: true
    }

    // Lazily allocated to avoid overhead in high-frequency usage
    // (e.g., per lazy list item) unless explicitly read by a consumer.
    private var _keys: SnapshotStateSet<Any>? = null
    override val keys: Set<Any>
        get() {
            var keys = _keys
            if (keys == null) {
                // When initialized, we populate it with keys from both:
                // - `registries`: keys that are currently active (composed).
                // - `savedStates`: keys that are currently inactive (disposed but not removed).
                // Note that we rely on `savedStates` keeping track of all disposed keys (even
                // those with empty state) to ensure this set is complete.
                keys = mutableStateSetOf()
                registries.forEachKey { key -> keys += key }
                savedStates.keys.forEach { key -> keys += key }
                _keys = keys
            }
            return keys
        }

    @Composable
    override fun SaveableStateProvider(key: Any, content: @Composable () -> Unit) {
        ReusableContent(key) {

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-saveablestateholder-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/SaveableStateHolder.kt)
