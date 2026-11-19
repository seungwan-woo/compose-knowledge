---
type: reference
title: "Guidance: Distinguish parent scope cancellation from child cancellation"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: contract-coroutine-normal-child-cancellation-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/7f4d6cf2414937b50291df6169a69afbaf9c5a20/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: 7f4d6cf2414937b50291df6169a69afbaf9c5a20
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 378
    endLine: 383
    sha256: 1cf39772b10fa72022f267e3be476ce5d5cae71fcad8f96fb39db46b482296ab
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * If several coroutines fail with non-[CancellationException] exceptions,
       * the first observed failure will be propagated, and the rest will be attached to it as
       * [suppressed exceptions][Throwable.suppressedExceptions].
       *
       * Failing with a [CancellationException] only cancels the coroutine itself and its children.
       * It does not affect the parent or sibling coroutines and is not considered a failure.
  - id: contract-coroutine-parent-scope-lifetime-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/7f4d6cf2414937b50291df6169a69afbaf9c5a20/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: 7f4d6cf2414937b50291df6169a69afbaf9c5a20
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 22
    endLine: 26
    sha256: 2ec8ca69296b20fe7fc0523db3074dd89320f3831efc42eca5e098deeb1b552a
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * A set of rules called "structured concurrency" ensures that the lifecycles of children
       * are nested inside the lifecycles of their parent scopes.
       * For example, if a scope is cancelled, all coroutines in it are cancelled too, and the scope itself
       * cannot be completed until all its children are completed.
       * See a more detailed explanation of structured concurrency in a separate section below.
compose:
  id: guide-coroutine-scope-cancellation-direction
  artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
  fqn: kotlinx.coroutines.CoroutineScope
  sections:
    - id: guide-coroutine-scope-cancellation-direction
      title: "Guidance: Distinguish parent scope cancellation from child cancellation"
      aliases:
        - kotlinx.coroutines.CoroutineScope
        - structured cancellation
        - parent children
        - 구조적 취소
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - contract-coroutine-parent-scope-lifetime-source
        - contract-coroutine-normal-child-cancellation-source
      relatedIds:
        - contract-coroutine-parent-scope-lifetime
        - contract-coroutine-normal-child-cancellation
---

# Guidance: Distinguish parent scope cancellation from child cancellation

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Distinguish parent scope cancellation from child cancellation

Guidance: Structured concurrency nests child lifetimes within their parent scope: cancelling the scope cancels its coroutines, and the scope cannot complete until its children complete. By contrast, a child ending with CancellationException cancels itself and its children without cancelling its parent or siblings. Limitation: this does not claim the same isolation for other exception types or for detached work outside that scope.

Sources: [contract-coroutine-parent-scope-lifetime-source](https://github.com/Kotlin/kotlinx.coroutines/blob/7f4d6cf2414937b50291df6169a69afbaf9c5a20/kotlinx-coroutines-core/common/src/CoroutineScope.kt), [contract-coroutine-normal-child-cancellation-source](https://github.com/Kotlin/kotlinx.coroutines/blob/7f4d6cf2414937b50291df6169a69afbaf9c5a20/kotlinx-coroutines-core/common/src/CoroutineScope.kt)
