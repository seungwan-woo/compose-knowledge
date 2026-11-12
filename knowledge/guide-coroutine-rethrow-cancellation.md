---
type: reference
title: "Guidance: Rethrow cancellation exceptions after local handling"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-kotlin-coroutines-cancellation-guide-lines-64-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 64
    endLine: 98
    sha256: f930a30c253f4de8eb5b4f6c77b95a40809850a50c8c28bc901a566439b6fec4
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
              }
              println("This line will never be executed")
          }
        
          // Waits for the coroutine to start before canceling it
          childStarted.await()

          // Cancels the coroutine,
          // so awaitCancellation() throws a CancellationException
          childJob.cancel()
      }
      // Coroutine builders such as withContext() or coroutineScope()
      // wait for all child coroutines to complete,
      // even when the children are canceled
      println("All coroutines have completed")
      //sampleEnd
      }
      ```
      {kotlin-runnable="true" id="manual-cancellation-example"}

      In this example, [`CompletableDeferred`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-completable-deferred/) is used as a signal that the coroutine has started running.
      The coroutine calls `complete()` when it starts executing, and `await()` only returns once that `CompletableDeferred` is completed.
      You don't need this check to cancel a coroutine.
      It's included here to make the example reproducible by ensuring that the coroutine starts and prints its messages before it's canceled.

      Because `Deferred` implements `Job`, cancellation works the same way for coroutines created by the `async()` coroutine builder function:

      ```kotlin
      val deferred = async { /* ... */ }
      deferred.cancel()
      ```

      > Catching `CancellationException` can break the cancellation propagation.
      > If you must catch it, rethrow it to let the cancellation propagate correctly through the coroutine hierarchy.
      >
compose:
  id: guide-coroutine-rethrow-cancellation
  artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
  fqn: kotlinx.coroutines.CancellationException
  sections:
    - id: guide-coroutine-rethrow-cancellation
      title: "Guidance: Rethrow cancellation exceptions after local handling"
      aliases:
        - kotlinx.coroutines.CancellationException
        - rethrow cancellation
        - cancellation propagation
        - catch Exception in coroutine
        - animation cancellation handling
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-64-source
      relatedIds:
        - live-kotlin-coroutines-cancellation-guide-lines-64
---

# Guidance: Rethrow cancellation exceptions after local handling

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Rethrow cancellation exceptions after local handling

Guidance: Treat CancellationException as coroutine cancellation. If you must catch it for local handling, rethrow it so cancellation propagates through the coroutine hierarchy, for example catch (e: CancellationException) { throw e }. Limitation: catching and swallowing this exception can break cancellation propagation; a catch block must not turn cancellation into a successful operation result.

Sources: [live-kotlin-coroutines-cancellation-guide-lines-64-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)
