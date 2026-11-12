---
type: reference
title: "Guidance: Make long-running coroutine work check cancellation"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-android-coroutines-best-practices-coroutine-cancellable-source
    kind: guide
    resource: https://developer.android.com/kotlin/coroutines/coroutines-best-practices#coroutine-cancellable
    revision: web:android-coroutines-best-practices:content@sha256:48e6344d9e8450c3342af934a887158d3e663dda9170f17d80ad49867c4b0b34
    sha256: 6a316c44e428e5361308a256159e5ca62d8c2c2d3a654c81e57cc6d02671bec4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Cancellation in coroutines is cooperative, which means that when a coroutine's Job is cancelled, the coroutine isn't cancelled until it suspends or checks for cancellation. If you do blocking operations in a coroutine, make sure that the coroutine is cancellable.

      For example, if you're reading multiple files from disk, before you start reading each file, check whether the coroutine was cancelled. One way to check for cancellation is by calling the ensureActive function.

      someScope.launch {
          for (file in files) {
              ensureActive() // Check for cancellation
              readFile(file)
          }
      }CoroutinesBestPractices.kt

      All suspend functions from kotlinx.coroutines such as withContext and delay are cancellable. If your coroutine calls them, you shouldn't need to do any additional work.

      For more information about cancellation in coroutines, check out the Cancellation in coroutines blog post.
compose:
  id: guide-coroutine-cooperative-cancellation
  artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
  fqn: kotlinx.coroutines.ensureActive
  sections:
    - id: guide-coroutine-cooperative-cancellation
      title: "Guidance: Make long-running coroutine work check cancellation"
      aliases:
        - kotlinx.coroutines.ensureActive
        - kotlinx.coroutines.Job
        - kotlinx.coroutines.delay
        - cooperative cancellation
        - blocking loop cancellation
        - cancellation checkpoint
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-coroutine-cancellable-source
      relatedIds:
        - live-android-coroutines-best-practices-coroutine-cancellable
---

# Guidance: Make long-running coroutine work check cancellation

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Make long-running coroutine work check cancellation

Guidance: Coroutine cancellation is cooperative: a cancelled Job takes effect when work suspends or checks cancellation. In a loop that performs blocking operations, call ensureActive before each unit of work, as in the guide's file-reading example. The guide notes that kotlinx.coroutines suspend functions such as delay and withContext are cancellable. Limitation: merely cancelling the Job does not add cancellation checks inside your blocking work; ensure it reaches a check or cancellable suspension point.

Sources: [live-android-coroutines-best-practices-coroutine-cancellable-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#coroutine-cancellable)
