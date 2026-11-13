---
type: reference
title: "Guidance: Honor the Stable annotation contract before overriding inference"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
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
  - id: live-compose-guide-performance-stability-fix-annotate-stable-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability/fix#annotate-stable
    revision: web:compose-guide-performance-stability-fix:content@sha256:414509529224e4d72b1087716a12226489c5669ffe42edcddd41c111e58104ee
    sha256: 80dd9ace701a84effe51aefc0a41c9d1ecd1b1f7e624aa5677583fb8649d59f0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A possible path to resolving stability issues for small classes with inexpensive .equals() checks is to annotate unstable classes with either @Stable or @Immutable.

      Annotating a class is overriding what the compiler would otherwise infer about your class. It is similar to the !! operator in Kotlin. You should be very careful about how you use these annotations. Overriding the compiler behavior could lead you to unforeseen bugs, such as your composable not recomposing when you expect it to.

      With Strong skipping mode enabled, follow these guidelines when deciding whether to add @Stable or @Immutable:

      Don't annotate classes that are already inferred as stable: Classes with val properties of stable types in modules built with the Compose compiler are already inferred as stable.

      Only annotate classes with cheap .equals() checks when instances are recreated: Add @Stable or @Immutable when the compiler can't infer stability (for example, interfaces or classes from non-Compose modules) and a data source allocates new object instances for unchanged items on every emission, provided the class is small and has an inexpensive .equals() check.

      Be cautious with models containing collections: Avoid adding @Stable or @Immutable to data models that hold large collections (List, Set, Map), especially for models used in lazy layouts (LazyColumn, LazyRow, LazyGrid, Pager). Leaving those models unannotated lets Compose compare them using instance equality (===) instead of running structural .equals() checks across every element.

      The following snippet provides a minimal example of a flat data class (without collection properties) annotated as immutable when defined in a module where the compiler cannot infer stability:

      @Immutable
      data class SnackSummary(
          val id: Long,
          val name: String,
          val price: Long
      )

      Whether you use the @Immutable or @Stable annotation, the Compose compiler marks the SnackSummary class as stable and compares it using Object.equals().
compose:
  id: guide-stable-annotation-contract
  artifact: androidx.compose.runtime:runtime-annotation
  fqn: androidx.compose.runtime.Stable
  sections:
    - id: guide-stable-annotation-contract
      title: "Guidance: Honor the Stable annotation contract before overriding inference"
      aliases:
        - androidx.compose.runtime.Stable
        - androidx.compose.runtime.Immutable
        - Stable annotation contract
        - stability inference override
        - mutable property notification
        - collections equals performance
      requires:
        - artifact: androidx.compose.runtime:runtime-annotation
          version: null
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-stable-lines-1-source
        - live-compose-guide-performance-stability-fix-annotate-stable-source
      relatedIds:
        - live-androidx-runtime-stable-lines-1
        - live-compose-guide-performance-stability-fix-annotate-stable
---

# Guidance: Honor the Stable annotation contract before overriding inference

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Honor the Stable annotation contract before overriding inference

Guidance: Annotate a class or interface @Stable only when equals gives a consistent result for the same two instances, composition is notified when a public property changes, and all public property types are stable. The annotation communicates guarantees to the compiler; it does not implement change notification. Limitation: violating these assumptions has undefined behavior. Overriding stability inference can suppress expected recomposition, and annotating collection-heavy models can replace cheap identity checks with expensive structural equals checks under strong skipping.

Sources: [live-androidx-runtime-stable-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime-annotation/src/commonMain/kotlin/androidx/compose/runtime/Stable.kt), [live-compose-guide-performance-stability-fix-annotate-stable-source](https://developer.android.com/develop/ui/compose/performance/stability/fix#annotate-stable)
