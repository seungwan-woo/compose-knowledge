---
type: reference
title: Stable annotation source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime-annotation/src/commonMain/kotlin/androidx/compose/runtime/Stable.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-runtime-stable-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime-annotation/src/commonMain/kotlin/androidx/compose/runtime/Stable.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/runtime/runtime-annotation/src/commonMain/kotlin/androidx/compose/runtime/Stable.kt
    startLine: 1
    endLine: 35
    sha256: b9e680e664cf1e8c89edb50fe44f7d41d778b4f3d426427ec4aca86bab7b9157
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
       * Stable is used to communicate some guarantees to the compose compiler about how a certain type or
       * function will behave.
       *
       * When applied to a class or an interface, [Stable] indicates that the following must be true:
       * 1) The result of [equals] will always return the same result for the same two instances.
       * 2) When a public property of the type changes, composition will be notified.
       * 3) All public property types are stable.
       *
       * When applied to a function or a property, the [Stable] annotation indicates that the function
       * will return the same result if the same parameters are passed in. This is only meaningful if the
       * parameters and results are themselves [Stable], [Immutable], or primitive.
       *
       * The invariants that this annotation implies are used for optimizations by the compose compiler,
       * and have undefined behavior if the above assumptions are not met. As a result, one should not use
       * this annotation unless they are certain that these conditions are satisfied.
       *
  - id: live-androidx-runtime-stable-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime-annotation/src/commonMain/kotlin/androidx/compose/runtime/Stable.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/runtime/runtime-annotation/src/commonMain/kotlin/androidx/compose/runtime/Stable.kt
    startLine: 36
    endLine: 49
    sha256: 9e42ca79c141789caa3af308012ca8e215cd0cf2b899edfe531f138bf8c20f56
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       * @see Immutable
       * @see StableMarker
       */
      @MustBeDocumented
      @Target(
          AnnotationTarget.CLASS,
          AnnotationTarget.FUNCTION,
          AnnotationTarget.PROPERTY_GETTER,
          AnnotationTarget.PROPERTY,
      )
      @Retention(AnnotationRetention.BINARY)
      @StableMarker
      public annotation class Stable
compose:
  id: live-androidx-runtime-stable
  artifact: androidx.compose.runtime:runtime-annotation
  fqn: androidx.compose.runtime.Stable
  sections:
    - id: live-androidx-runtime-stable-lines-1
      title: Stable annotation source (lines 1–35)
      aliases:
        - androidx.compose.runtime.Stable
      requires:
        - artifact: androidx.compose.runtime:runtime-annotation
          version: null
      sourceIds:
        - live-androidx-runtime-stable-lines-1-source
      relatedIds: []
    - id: live-androidx-runtime-stable-lines-36
      title: Stable annotation source (lines 36–49)
      aliases:
        - androidx.compose.runtime.Stable
      requires:
        - artifact: androidx.compose.runtime:runtime-annotation
          version: null
      sourceIds:
        - live-androidx-runtime-stable-lines-36-source
      relatedIds: []
---

# Stable annotation source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime-annotation/src/commonMain/kotlin/androidx/compose/runtime/Stable.kt

## Stable annotation source (lines 1–35)

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
 * Stable is used to communicate some guarantees to the compose compiler about how a certain type or
 * function will behave.
 *
 * When applied to a class or an interface, [Stable] indicates that the following must be true:
 * 1) The result of [equals] will always return the same result for the same two instances.
 * 2) When a public property of the type changes, composition will be notified.
 * 3) All public property types are stable.
 *
 * When applied to a function or a property, the [Stable] annotation indicates that the function
 * will return the same result if the same parameters are passed in. This is only meaningful if the
 * parameters and results are themselves [Stable], [Immutable], or primitive.
 *
 * The invariants that this annotation implies are used for optimizations by the compose compiler,
 * and have undefined behavior if the above assumptions are not met. As a result, one should not use
 * this annotation unless they are certain that these conditions are satisfied.
 *

Sources: [live-androidx-runtime-stable-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime-annotation/src/commonMain/kotlin/androidx/compose/runtime/Stable.kt)

## Stable annotation source (lines 36–49)

 * @see Immutable
 * @see StableMarker
 */
@MustBeDocumented
@Target(
    AnnotationTarget.CLASS,
    AnnotationTarget.FUNCTION,
    AnnotationTarget.PROPERTY_GETTER,
    AnnotationTarget.PROPERTY,
)
@Retention(AnnotationRetention.BINARY)
@StableMarker
public annotation class Stable


Sources: [live-androidx-runtime-stable-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime-annotation/src/commonMain/kotlin/androidx/compose/runtime/Stable.kt)
