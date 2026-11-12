---
type: reference
title: androidx.compose.runtime.saveable Saver.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/Saver.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saver-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/Saver.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/Saver.kt
    startLine: 1
    endLine: 35
    sha256: 13a304f0ba8f8bbf3df48dfa70dc22d3f109851c735101a275ed4c041de538ee
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

      /**
       * The [Saver] describes how the object of [Original] class can be simplified and converted into
       * something which is [Saveable].
       *
       * What types can be saved is defined by [SaveableStateRegistry], by default everything which can be
       * stored in the Bundle class can be saved. The implementations can check that the provided value
       * can be saved via [SaverScope.canBeSaved]
       *
       * You can pass the implementations of this class as a parameter for [rememberSaveable].
       *
       * @sample androidx.compose.runtime.saveable.samples.CustomSaverSample
       */
      public interface Saver<Original, Saveable : Any> {
          /** Convert the value into a saveable one. If null is returned the value will not be saved. */
          public fun SaverScope.save(value: Original): Saveable?

          /**
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saver-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/Saver.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/Saver.kt
    startLine: 36
    endLine: 70
    sha256: 183fc45f9345b996117bf33e4bc100154432b9fdb9f199665d356ed0531a2a61
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Convert the restored value back to the original Class. If null is returned the value will not
           * be restored and would be initialized again instead.
           */
          public fun restore(value: Saveable): Original?
      }

      /**
       * The [Saver] describes how the object of [Original] class can be simplified and converted into
       * something which is [Saveable].
       *
       * What types can be saved is defined by [SaveableStateRegistry], by default everything which can be
       * stored in the Bundle class can be saved. The implementations can check that the provided value
       * can be saved via [SaverScope.canBeSaved]
       *
       * You can pass the implementations of this class as a parameter for [rememberSaveable].
       *
       * @sample androidx.compose.runtime.saveable.samples.CustomSaverSample
       * @param save Defines how to convert the value into a saveable one. If null is returned the value
       *   will not be saved.
       * @param restore Defines how to convert the restored value back to the original Class. If null is
       *   returned the value will not be restored and would be initialized again instead.
       */
      public fun <Original, Saveable : Any> Saver(
          save: SaverScope.(value: Original) -> Saveable?,
          restore: (value: Saveable) -> Original?,
      ): Saver<Original, Saveable> {
          return object : Saver<Original, Saveable> {
              override fun SaverScope.save(value: Original) = save.invoke(this, value)

              override fun restore(value: Saveable) = restore.invoke(value)
          }
      }

      /**
       * Scope used in [Saver.save].
  - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saver-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/Saver.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/Saver.kt
    startLine: 71
    endLine: 92
    sha256: 06aedfc25dc12b6b527355ec987f47742484b995246ad3e48a50d5ca87244095
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       *
       * @see Saver
       */
      public fun interface SaverScope {
          /**
           * What types can be saved is defined by [SaveableStateRegistry], by default everything which
           * can be stored in the Bundle class can be saved.
           */
          public fun canBeSaved(value: Any): Boolean
      }

      /**
       * The default implementation of [Saver] which does not perform any conversion.
       *
       * It is used by [rememberSaveable] by default.
       *
       * @see Saver
       */
      public fun <T> autoSaver(): Saver<T, Any> = @Suppress("UNCHECKED_CAST") (AutoSaver as Saver<T, Any>)

      private val AutoSaver = Saver<Any?, Any>(save = { it }, restore = { it })
compose:
  id: live-androidx-runtime-runtime-saveable-runtime-saveable-saver
  artifact: androidx.compose.runtime:runtime-saveable
  fqn: androidx.compose.runtime.saveable
  sections:
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saver-lines-1
      title: androidx.compose.runtime.saveable Saver.kt source (lines 1–35)
      aliases:
        - androidx.compose.runtime.saveable.Saver
        - androidx.compose.runtime.saveable.SaverScope
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-saver-lines-1-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saver-lines-36
      title: androidx.compose.runtime.saveable Saver.kt source (lines 36–70)
      aliases:
        - androidx.compose.runtime.saveable.Saver
        - androidx.compose.runtime.saveable.SaverScope
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-saver-lines-36-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-saveable-runtime-saveable-saver-lines-71
      title: androidx.compose.runtime.saveable Saver.kt source (lines 71–92)
      aliases:
        - androidx.compose.runtime.saveable.Saver
        - androidx.compose.runtime.saveable.SaverScope
        - androidx.compose.runtime.saveable.autoSaver
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-saveable-runtime-saveable-saver-lines-71-source
      relatedIds: []
---

# androidx.compose.runtime.saveable Saver.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/Saver.kt

## androidx.compose.runtime.saveable Saver.kt source (lines 1–35)

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

/**
 * The [Saver] describes how the object of [Original] class can be simplified and converted into
 * something which is [Saveable].
 *
 * What types can be saved is defined by [SaveableStateRegistry], by default everything which can be
 * stored in the Bundle class can be saved. The implementations can check that the provided value
 * can be saved via [SaverScope.canBeSaved]
 *
 * You can pass the implementations of this class as a parameter for [rememberSaveable].
 *
 * @sample androidx.compose.runtime.saveable.samples.CustomSaverSample
 */
public interface Saver<Original, Saveable : Any> {
    /** Convert the value into a saveable one. If null is returned the value will not be saved. */
    public fun SaverScope.save(value: Original): Saveable?

    /**

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-saver-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/Saver.kt)

## androidx.compose.runtime.saveable Saver.kt source (lines 36–70)

     * Convert the restored value back to the original Class. If null is returned the value will not
     * be restored and would be initialized again instead.
     */
    public fun restore(value: Saveable): Original?
}

/**
 * The [Saver] describes how the object of [Original] class can be simplified and converted into
 * something which is [Saveable].
 *
 * What types can be saved is defined by [SaveableStateRegistry], by default everything which can be
 * stored in the Bundle class can be saved. The implementations can check that the provided value
 * can be saved via [SaverScope.canBeSaved]
 *
 * You can pass the implementations of this class as a parameter for [rememberSaveable].
 *
 * @sample androidx.compose.runtime.saveable.samples.CustomSaverSample
 * @param save Defines how to convert the value into a saveable one. If null is returned the value
 *   will not be saved.
 * @param restore Defines how to convert the restored value back to the original Class. If null is
 *   returned the value will not be restored and would be initialized again instead.
 */
public fun <Original, Saveable : Any> Saver(
    save: SaverScope.(value: Original) -> Saveable?,
    restore: (value: Saveable) -> Original?,
): Saver<Original, Saveable> {
    return object : Saver<Original, Saveable> {
        override fun SaverScope.save(value: Original) = save.invoke(this, value)

        override fun restore(value: Saveable) = restore.invoke(value)
    }
}

/**
 * Scope used in [Saver.save].

Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-saver-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/Saver.kt)

## androidx.compose.runtime.saveable Saver.kt source (lines 71–92)

 *
 * @see Saver
 */
public fun interface SaverScope {
    /**
     * What types can be saved is defined by [SaveableStateRegistry], by default everything which
     * can be stored in the Bundle class can be saved.
     */
    public fun canBeSaved(value: Any): Boolean
}

/**
 * The default implementation of [Saver] which does not perform any conversion.
 *
 * It is used by [rememberSaveable] by default.
 *
 * @see Saver
 */
public fun <T> autoSaver(): Saver<T, Any> = @Suppress("UNCHECKED_CAST") (AutoSaver as Saver<T, Any>)

private val AutoSaver = Saver<Any?, Any>(save = { it }, restore = { it })


Sources: [live-androidx-runtime-runtime-saveable-runtime-saveable-saver-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime-saveable/src/commonMain/kotlin/androidx/compose/runtime/saveable/Saver.kt)
