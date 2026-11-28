---
type: reference
title: "Guidance: Separate interrupted animation children from ordinary failures"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: contract-animatable-interruption-result-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/eea249910d72f513977beffbe4b103aa942b20c5/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: eea249910d72f513977beffbe4b103aa942b20c5
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 205
    endLine: 217
    sha256: 40de289b774953147dc4bb44f8246d004a999ceb85cf954179d40bdb2eca3fcc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Returns an [AnimationResult] object. It contains: 1) the reason for ending the animation,
           * and 2) an end state of the animation. The reason for ending the animation can be either of
           * the following two:
           * - [Finished], when the animation finishes successfully without any interruption,
           * - [BoundReached] If the animation reaches the either [lowerBound] or [upperBound] in any
           *   dimension, the animation will end with [BoundReached] being the end reason.
           *
           * If the animation gets interrupted by 1) another call to start an animation (i.e.
           * [animateTo]/[animateDecay]), 2) [Animatable.stop], or 3)[Animatable.snapTo], the canceled
           * animation will throw a [CancellationException] as the job gets canceled. As a result, all the
           * subsequent work in the caller's coroutine will be canceled. This is often the desired
           * behavior. If there's any cleanup that needs to be done when an animation gets canceled,
           * consider starting the animation in a `try-catch` block.
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
compose:
  id: guide-animatable-child-cancellation
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core.Animatable
  sections:
    - id: guide-animatable-child-cancellation
      title: "Guidance: Separate interrupted animation children from ordinary failures"
      aliases:
        - androidx.compose.animation.core.Animatable
        - animation child cancellation
        - parent sibling cancellation
        - 애니메이션 취소
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - contract-animatable-interruption-result-source
        - contract-coroutine-normal-child-cancellation-source
      relatedIds:
        - contract-animatable-interruption-result
        - contract-coroutine-normal-child-cancellation
---

# Guidance: Separate interrupted animation children from ordinary failures

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Separate interrupted animation children from ordinary failures

Guidance: Interrupting Animatable with another animation, stop, or snapTo throws CancellationException, so subsequent work in that caller does not run normally. A child coroutine ending with CancellationException cancels itself and its own children without cancelling its parent or siblings. Limitation: the isolation claim requires the animation to run in a separate child; a direct animateTo call still interrupts the caller’s sequence. Normal return may be Finished or BoundReached, so require Finished when target completion matters.

Sources: [contract-animatable-interruption-result-source](https://android.googlesource.com/platform/frameworks/support/+/eea249910d72f513977beffbe4b103aa942b20c5/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt), [contract-coroutine-normal-child-cancellation-source](https://github.com/Kotlin/kotlinx.coroutines/blob/7f4d6cf2414937b50291df6169a69afbaf9c5a20/kotlinx-coroutines-core/common/src/CoroutineScope.kt)
