---
type: reference
title: Kotlin coroutine cancellation
description: "Public source: https://github.com/Kotlin/kotlinx.coroutines/blob/master/docs/topics/coroutines-cancellation.md"
tags:
  - Compose
  - Android
sources:
  - id: live-kotlin-coroutines-cancellation-guide-lines-1-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 1
    endLine: 28
    sha256: 310dd7c7384bd5137f8292bbf072e4d4a79bcb9c87805024f7137385d4d7e7a4
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |-
      <contribute-url>https://github.com/Kotlin/kotlinx.coroutines/edit/master/docs/topics/</contribute-url>

      [//]: # (title: Cancellation and timeouts)

      Cancellation lets you request to stop a coroutine before it completes.
      It stops work that's no longer needed, such as when a user closes a window or navigates away in a user interface while a coroutine is still running.

      You can use cancellation to release resources early and to stop a coroutine from accessing objects past their disposal.
      You can also use it to stop long-running coroutines that perform repeated work, such as:

      * Sending heartbeats.
      * Running scheduled tasks.
      * Updating a state to reflect the newest reading, such as in a clock UI.

      Cancellation works through the [`Job`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/) handle, which represents the lifecycle of a coroutine and its parent-child relationships.
      `Job` allows you to check whether the coroutine is active and allows you to cancel it, along with its children, as defined by [structured concurrency](coroutines-basics.md#coroutine-scope-and-structured-concurrency).

      ## Cancel coroutines

      A coroutine is canceled when the [`cancel()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/cancel.html) function is invoked on its `Job` handle.
      [Coroutine builder functions](coroutines-basics.md#coroutine-builder-functions) such as
      [`.launch()`](coroutines-basics.md#coroutinescope-launch) return a `Job`. The [`.async()`](coroutines-basics.md#coroutinescope-async)
      function returns a [`Deferred`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-deferred/), which
      implements `Job` and supports the same cancellation behavior.

      You can call the `cancel()` function manually, or it can be invoked automatically through cancellation propagation when a parent coroutine is canceled.

      When a coroutine is canceled, it throws a [`CancellationException`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-cancellation-exception/) the next time it checks for cancellation.
  - id: live-kotlin-coroutines-cancellation-guide-lines-134-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 134
    endLine: 168
    sha256: 6a7fecd38fb56f2443898896aca13c33d7996060498c99f22cccb55f7a5d18fc
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
                  println("Child coroutine 2 has been canceled")
              }
          }
          // Completes the CompletableDeferred,
          // signaling that the child coroutines have been launched
          childrenLaunched.complete(Unit)
      }
      // Waits for the parent coroutine to signal that it has launched
      // all of its children
      childrenLaunched.await()

      // Cancels the parent coroutine, which cancels all its children
      parentJob.cancel()
      //sampleEnd
          }
      }
      ```
      {kotlin-runnable="true" id="cancellation-propagation-example"}

      In this example, each child coroutine uses a [`finally` block](exceptions.md#the-finally-block), so the code inside it runs when the coroutine is canceled.
      Here, `CompletableDeferred` signals that the child coroutines are launched before they're canceled, but it doesn't guarantee that they start running.
      If they're canceled first, nothing is printed.

      ## Make coroutines react to cancellation {id="cancellation-is-cooperative"}

      In Kotlin, coroutine cancellation is _cooperative_.
      Coroutines react to cancellation only when they cooperate by [suspending](#suspension-points-and-cancellation) or [checking for cancellation explicitly](#check-for-cancellation-explicitly).

      In this section, you can learn how adding [suspension points](#suspension-points-and-cancellation), such as calls to the [yield()](#the-yield-suspending-function) function, lets coroutines react to cancellation.

      ### Suspension points and cancellation

      When a coroutine is canceled, it continues running until it reaches a point in the code where it may suspend, also known as a _suspension point_.
      If the coroutine suspends there, the suspending function checks whether it has been canceled.
      If it has, the coroutine stops and throws `CancellationException`.
  - id: live-kotlin-coroutines-cancellation-guide-lines-169-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 169
    endLine: 203
    sha256: 2502b814826fe992dfc5e4568f3b39ef233780b4727c81f9d71fa65ba6c8f861
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |-
      
      A call to a `suspend` function is a suspension point, but it doesn't always suspend.
      For example, when awaiting a `Deferred` result, the coroutine only suspends if that `Deferred` isn't completed yet.

      Here's an example using common suspending functions that suspend, enabling the coroutine to check and stop when it's canceled:

      ```kotlin
      import kotlinx.coroutines.*
      import kotlinx.coroutines.sync.Mutex
      import kotlinx.coroutines.channels.Channel
      import kotlin.time.Duration.Companion.milliseconds
      import kotlin.time.Duration

      suspend fun main() {
      //sampleStart
      withContext(Dispatchers.Default) {
          val childJobs = listOf(
              launch {
                  // Suspends until canceled
                  awaitCancellation()
              },
              launch {
                  // Suspends until canceled
                  delay(Duration.INFINITE)
              },
              launch {
                  val channel = Channel<Int>()
                  // Suspends while waiting for a value that's never sent
                  channel.receive()
              },
              launch {
                  val deferred = CompletableDeferred<Int>()
                  // Suspends while waiting for a value that's never completed
                  deferred.await()
              },
  - id: live-kotlin-coroutines-cancellation-guide-lines-204-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 204
    endLine: 238
    sha256: 40f7c5f68e0f461c23ff922cd31ace44c65e358ae9357af3d7a0428e600aeea1
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
              launch {
                  val mutex = Mutex(locked = true)
                  // Suspends while waiting for a mutex that remains locked indefinitely
                  mutex.lock()
              }
          )
          
          // Gives the child coroutines time to start and suspend
          delay(100.milliseconds)
          
          // Cancels all child coroutines
          childJobs.forEach { it.cancel() }
      }
      println("All child jobs completed!")
      //sampleEnd
      }
      ```
      {kotlin-runnable="true" id="suspension-points-example"}

      > All suspending functions in the `kotlinx.coroutines` library cooperate with cancellation because they use [`suspendCancellableCoroutine()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/suspend-cancellable-coroutine.html) internally, which checks for cancellation when the coroutine suspends.
      > In contrast, custom suspending functions that use [`suspendCoroutine()`](https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.coroutines/suspend-coroutine.html) don't react to cancellation.
      >
      {style="tip"}

      ### The `yield()` suspending function

      If a coroutine doesn't suspend, other coroutines can't run on the same thread until it completes.
      As a result, coroutines that don't suspend run sequentially on that thread.
      If a coroutine doesn't suspend for a long time, it also doesn't stop when it's canceled.

      In CPU-intensive computations and other code that runs for a long time without suspending, call the [`yield()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/yield.html) function periodically.
      This function releases the current thread and gives other coroutines a chance to run on it.
      It also ensures that the coroutine checks for cancellation regularly. If the coroutine is canceled, the `yield()` function throws a `CancellationException`.

      ![Comparison of coroutine cancellation handling without checks, with `ensureActive()` or `isActive`, and with `yield()`](yield-and-cancellation.svg)
  - id: live-kotlin-coroutines-cancellation-guide-lines-239-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 239
    endLine: 273
    sha256: 1afae4e844df1afdf03edb79db212ddf872071ca6ddcb7983f18734d8144a60b
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |-
      
      Here's an example:

      ```kotlin
      import kotlinx.coroutines.*

      fun main() {
      //sampleStart
      // runBlocking uses the current thread for running all coroutines
      runBlocking {
          val coroutineCount = 5
          repeat(coroutineCount) { coroutineIndex ->
              launch {
                  val id = coroutineIndex + 1
                  repeat(5) { iterationIndex ->
                      val iteration = iterationIndex + 1
                      // Suspends temporarily to give other coroutines a chance to run
                      // Without this, the coroutines run sequentially
                      yield()
                      // Prints the coroutine index and iteration index
                      println("$id * $iteration = ${id * iteration}")
                  }
              }
          }
      }
      //sampleEnd
      }
      ```
      {kotlin-runnable="true" id="yield-example"}

      In this example, each coroutine uses `yield()` to let other coroutines run between iterations.

      ### Check for cancellation explicitly

      You can check for cancellation explicitly, which lets long-running code react to cancellation without suspending.
  - id: live-kotlin-coroutines-cancellation-guide-lines-274-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 274
    endLine: 308
    sha256: 0ab39b6e40e0f50bb19e64f63e41fa80070912f57c6dcfead5ee2bb644980a5c
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |-
      A long-running coroutine that doesn't suspend can prevent other coroutines on the same thread from running until it completes.
      Unless this behavior is intentional for your use case, use the [`yield()`](#the-yield-suspending-function) function instead.

      Depending on the API, the check either returns a Boolean value or throws an exception:

      * The [`isActive`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/is-active.html) property returns `false` when the coroutine is canceled.
      * The [`ensureActive()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/ensure-active.html) function throws a `CancellationException` when the coroutine is canceled.

      ### Interrupt blocking code when coroutines are canceled

      On the JVM, some blocking functions, such as `Thread.sleep()` or `BlockingQueue.take()`, can block the current thread.
      These blocking functions can be interrupted, which stops them prematurely.
      However, when you call them from a coroutine, cancellation doesn't interrupt the thread.

      To interrupt the thread when canceling a coroutine, wrap the blocking code in the [`runInterruptible()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/run-interruptible.html) function:

      ```kotlin
      import kotlinx.coroutines.*

      suspend fun main() {
      //sampleStart
      withContext(Dispatchers.Default) {
          val childStarted = CompletableDeferred<Unit>()
          val childJob = launch {
              try {
                  // Cancellation triggers a thread interruption
                  runInterruptible {
                      childStarted.complete(Unit)
                      try {
                          // Blocks the current thread for a very long time
                          Thread.sleep(Long.MAX_VALUE)
                      } catch (e: InterruptedException) {
                          println("Thread interrupted (Java): $e")
                          throw e
                      }
  - id: live-kotlin-coroutines-cancellation-guide-lines-29-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 29
    endLine: 63
    sha256: fd1536538f21c2ff60eb97da3d9b51d457ba28adbef23ebd7a3fec3475824e23
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |-
      Suspending functions in the `kotlinx.coroutines` library, such as the `delay()` function, check for cancellation when they suspend.

      You can use the [`awaitCancellation()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/await-cancellation.html) function to suspend a coroutine until it's canceled.
      It's equivalent to calling `delay(Duration.INFINITE)`.

      > For more information about how and when coroutines check for cancellation, see [Suspension points and cancellation](#suspension-points-and-cancellation).
      >
      {style="tip"}

      Here's an example of how to manually cancel a coroutine:

      ```kotlin
      import kotlinx.coroutines.*

      suspend fun main() {
      //sampleStart
      withContext(Dispatchers.Default) {
          // Used as a signal that the coroutine has started running
          val childStarted = CompletableDeferred<Unit>()
          
          val childJob: Job = launch {
              println("The coroutine has started")

              // Completes the CompletableDeferred,
              // signaling that the coroutine has started running
              childStarted.complete(Unit)
              try {
                  // Suspends indefinitely
                  // This call will never return unless the coroutine is canceled
                  awaitCancellation()
              } catch (e: CancellationException) {
                  println("The coroutine was canceled: $e")
                
                  // Always rethrow cancellation exceptions!
                  throw e
  - id: live-kotlin-coroutines-cancellation-guide-lines-309-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 309
    endLine: 343
    sha256: 23e2e89e2ee63f8c221eab9bfaf8ad9013de652e902b98f2221e2c1b59aee3db
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
                  }
              } catch (e: CancellationException) {
                  println("Coroutine canceled (Kotlin): $e")
                  throw e
              }
          }
          childStarted.await()

          // Cancels the coroutine and interrupts the thread executing Thread.sleep()
          childJob.cancel()
      }
      //sampleEnd
      }
      ```
      {kotlin-runnable="true" id="interrupt-cancellation-example"}

      ## Handle values safely when canceling coroutines

      When a suspended coroutine is canceled, it resumes with a `CancellationException` instead of returning any values, even if those values are already available.
      This behavior is called _prompt cancellation_.
      It prevents your code from continuing in a canceled coroutine's scope, such as updating a screen that's already closed.

      Here's an example:

      ```kotlin
      // Defines a coroutine scope that uses the UI thread
      class ScreenWithButtons(private val scope: CoroutineScope) {
          fun loadAndUpdateButtons(filename: String) {
              scope.launch {
                  // withContext() checks for cancellation before entering the block
                  // and after the block returns
                  val buttonNames = withContext(Dispatchers.IO) {
                      // This is a blocking call that doesn't react to cancellation
                      readLines(filename)
                  }
  - id: live-kotlin-coroutines-cancellation-guide-lines-344-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 344
    endLine: 378
    sha256: 03a2d2d763aadf65bbbb5babafa921fe91e5a423629b679e39606c07b1c13057
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
                  
                  // It's safe to call updateUi()
                  // because withContext() doesn't return if the coroutine is canceled,
                  // and no code running on the UI thread can dispose of the buttons before this call
                  updateUi(buttonNames)
              }
          }

          // Call this function only from the UI thread because it accesses the buttons
          // Throws an exception if called after the buttons are disposed
          private fun updateUi(buttonNames: List<String>) {
              // Placeholder code that updates the buttons with specified names
          }

          // Call this function only from the UI thread
          fun leaveScreen() {
              // Cancels the scope when leaving the screen
              // You can no longer update the UI
              scope.cancel()
          }
      }

      // UI controller code
      setHandler(Event.ScreenClosed) {
          // Runs on the UI thread
          screenWithButtons.leaveScreen()
          buttons.dispose()
      }
      ```

      In this example, `withContext(Dispatchers.IO)` cooperates with cancellation and prevents `updateUi()` from running if the
      `leaveScreen()` function cancels the coroutine before `withContext(Dispatchers.IO)` returns the button names.

      While prompt cancellation prevents using values after they're no longer valid, it can also stop your code while an important value is still in use, which might lead to losing that value.
      This can happen when a coroutine receives a value, such as an `AutoCloseable` resource, but is canceled before it can reach the part of the code that closes it.
  - id: live-kotlin-coroutines-cancellation-guide-lines-379-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 379
    endLine: 413
    sha256: fb9e945bbf9b9d300b961293209ce9b519359ba83fda74d18511ee4bc421936e
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |-
      To prevent this, keep cleanup logic in a place that's guaranteed to run even when the coroutine receiving the value is canceled.

      Here's an example:

      ```kotlin
      import java.nio.file.*
      import java.nio.charset.*
      import kotlinx.coroutines.*
      import java.io.*

      // Uses a scope that runs its coroutines on the UI thread
      class ScreenWithFileContents(private val scope: CoroutineScope) {
          fun displayFile(path: Path) {
              scope.launch {
                  // Stores the reader in a variable, so the finally block can close it
                  var reader: BufferedReader? = null
                  
                  try {
                      withContext(Dispatchers.IO) {
                          reader = Files.newBufferedReader(
                              path, Charset.forName("US-ASCII")
                          )
                      }
                      // Uses the stored reader after withContext() completes
                      updateUi(reader!!)
                  } finally {
                      // Ensures the reader is closed even when the coroutine is canceled
                      reader?.close()
                  }
              }
          }

          private suspend fun updateUi(reader: BufferedReader) {
              // Shows the file contents
              while (true) {
  - id: live-kotlin-coroutines-cancellation-guide-lines-414-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 414
    endLine: 448
    sha256: 0ebc3bc99291d4a09ee04f21d43b0e62b97183096b7aa7ca1e2efcfbde9c03eb
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2
                  val line = withContext(Dispatchers.IO) {
                      reader.readLine()
                  }
                  if (line == null)
                      break
                  addOneLineToUi(line)
              }
          }

          private fun addOneLineToUi(line: String) {
              // Placeholder for code that adds one line to the UI
          }

          // Only callable from the UI thread
          fun leaveScreen() {
              // Cancels the scope and prevents its coroutines from updating the UI
              scope.cancel()
          }
      }
      ```

      In this example, storing the `BufferedReader` in a variable and closing it in the `finally` block ensures the resource is released even if the coroutine is canceled.

      ### Run non-cancelable blocks

      You can prevent cancellation from affecting certain parts of a coroutine.
      To do so, pass [`NonCancellable`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-non-cancellable/) as an argument to the `withContext()` coroutine builder function.

      > Avoid using `NonCancellable` with other coroutine builders like `.launch()` or `.async()`. Doing so disrupts structured concurrency by breaking the parent-child relationship.
      >
      {style="warning"}

      `NonCancellable` is useful when you need to ensure that certain operations, such as closing resources with a suspending `close()` function,
      complete even if the coroutine is canceled before they finish.
  - id: live-kotlin-coroutines-cancellation-guide-lines-449-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 449
    endLine: 483
    sha256: d58ba3350dfa5564936bf38c4f0e7eac47318e2e7d1c5c66746dfcb3b55373b5
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |-
      Here's an example:

      ```kotlin
      import kotlinx.coroutines.*
      import kotlin.time.Duration.Companion.milliseconds

      //sampleStart
      val serviceStarted = CompletableDeferred<Unit>()

      fun startService() {
          println("Starting the service...")
          serviceStarted.complete(Unit)
      }

      suspend fun shutdownServiceAndWait() {
          println("Shutting down...")
          delay(100.milliseconds)
          println("Successfully shut down!")
      }

      suspend fun main() {
          withContext(Dispatchers.Default) {
              val childJob = launch {
                  startService()
                  try {
                      awaitCancellation()
                  } finally {
                      withContext(NonCancellable) {
                          // Without withContext(NonCancellable),
                          // this function doesn't complete because the coroutine is canceled
                          shutdownServiceAndWait()
                      }
                  }
              }
              serviceStarted.await()
  - id: live-kotlin-coroutines-cancellation-guide-lines-484-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 484
    endLine: 518
    sha256: 45f1985f424ab81320b5398961c167a65510447c7422ad56cacd268f2ad6c39a
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
              childJob.cancel()
          }
          println("Exiting the program")
      }
      //sampleEnd
      ```
      {kotlin-runnable="true" id="noncancellable-blocks-example"}

      ## Timeout

      A timeout allows you to automatically cancel a coroutine after a specified duration.
      You can use it to stop operations that take too long.

      For example, if a request to download a picture from a server times out, you can retry or fallback to the local cache.

      To specify a timeout, use the [`withTimeoutOrNull()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/with-timeout-or-null.html) function with a `Duration`:

      ```kotlin
      import kotlinx.coroutines.*
      import kotlin.time.Duration.Companion.milliseconds

      //sampleStart
      suspend fun slowOperation(): String {
          try {
              delay(300.milliseconds)
              return "A"
          } catch (e: CancellationException) {
              println("The slow operation has been canceled: $e")
              throw e
          }
      }

      suspend fun fastOperation(): String {
          try {
              delay(15.milliseconds)
  - id: live-kotlin-coroutines-cancellation-guide-lines-519-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 519
    endLine: 543
    sha256: 6023380b0660d3ea8f1b6844edce9f9cdd6eda2b15c98a614e2d99ffbaaf7ae6
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2
              return "B"
          } catch (e: CancellationException) {
              println("The fast operation has been canceled: $e")
              throw e
          }
      }

      suspend fun main() {
          withContext(Dispatchers.Default) {
              val slow = withTimeoutOrNull(100.milliseconds) {
                  slowOperation()
              }
              println("The slow operation finished with $slow")
              val fast = withTimeoutOrNull(100.milliseconds) {
                  fastOperation()
              }
              println("The fast operation finished with $fast")
          }
      }
      //sampleEnd
      ```
      {kotlin-runnable="true" id="timeout-example"}

      If the timeout exceeds the specified `Duration`, `withTimeoutOrNull()` returns `null`.
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
  - id: live-kotlin-coroutines-cancellation-guide-lines-99-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: docs/topics/coroutines-cancellation.md
    startLine: 99
    endLine: 133
    sha256: 50afa5deb8d53e6ca74182ed74b586eecf7bbc162b7b4cbd84da0daf8d63d096
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |-
      > For more information, see [Coroutine exceptions handling](exception-handling.md#cancellation-and-exceptions).
      >
      {style="warning"}

      ### Cancellation propagation

      [Structured concurrency](coroutines-basics.md#coroutine-scope-and-structured-concurrency) ensures that canceling a coroutine also cancels all of its children.
      This prevents child coroutines from continuing their work after their parent coroutine is canceled.

      Here's an example:

      ```kotlin
      import kotlinx.coroutines.*

      suspend fun main() {
          withContext(Dispatchers.Default) {
      //sampleStart
      // Used as a signal that the child coroutines have been launched
      val childrenLaunched = CompletableDeferred<Unit>()

      // Launches two child coroutines
      val parentJob = launch {
          launch {
              println("Child coroutine 1 has started running")
              try {
                  awaitCancellation()
              } finally {
                  println("Child coroutine 1 has been canceled")
              }
          }
          launch {
              println("Child coroutine 2 has started running")
              try {
                  awaitCancellation()
              } finally {
compose:
  id: live-kotlin-coroutines-cancellation-guide
  artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
  fqn: kotlinx.coroutines
  sections:
    - id: live-kotlin-coroutines-cancellation-guide-lines-1
      title: Kotlin coroutine cancellation (lines 1–28)
      aliases:
        - kotlinx.coroutines.CancellationException
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-1-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-134
      title: Kotlin coroutine cancellation (lines 134–168)
      aliases:
        - kotlinx.coroutines.CancellationException
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-134-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-169
      title: Kotlin coroutine cancellation (lines 169–203)
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-169-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-204
      title: Kotlin coroutine cancellation (lines 204–238)
      aliases:
        - kotlinx.coroutines.CancellationException
        - kotlinx.coroutines.ensureActive
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-204-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-239
      title: Kotlin coroutine cancellation (lines 239–273)
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-239-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-274
      title: Kotlin coroutine cancellation (lines 274–308)
      aliases:
        - kotlinx.coroutines.CancellationException
        - kotlinx.coroutines.ensureActive
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-274-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-29
      title: Kotlin coroutine cancellation (lines 29–63)
      aliases:
        - kotlinx.coroutines.CancellationException
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-29-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-309
      title: Kotlin coroutine cancellation (lines 309–343)
      aliases:
        - kotlinx.coroutines.CancellationException
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-309-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-344
      title: Kotlin coroutine cancellation (lines 344–378)
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-344-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-379
      title: Kotlin coroutine cancellation (lines 379–413)
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-379-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-414
      title: Kotlin coroutine cancellation (lines 414–448)
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-414-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-449
      title: Kotlin coroutine cancellation (lines 449–483)
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-449-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-484
      title: Kotlin coroutine cancellation (lines 484–518)
      aliases:
        - kotlinx.coroutines.CancellationException
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-484-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-519
      title: Kotlin coroutine cancellation (lines 519–543)
      aliases:
        - kotlinx.coroutines.CancellationException
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-519-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-64
      title: Kotlin coroutine cancellation (lines 64–98)
      aliases:
        - kotlinx.coroutines.CancellationException
        - kotlinx.coroutines.coroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-64-source
      relatedIds: []
    - id: live-kotlin-coroutines-cancellation-guide-lines-99
      title: Kotlin coroutine cancellation (lines 99–133)
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-cancellation-guide-lines-99-source
      relatedIds: []
---

# Kotlin coroutine cancellation

Public source: https://github.com/Kotlin/kotlinx.coroutines/blob/master/docs/topics/coroutines-cancellation.md

## Kotlin coroutine cancellation (lines 1–28)

<contribute-url>https://github.com/Kotlin/kotlinx.coroutines/edit/master/docs/topics/</contribute-url>

[//]: # (title: Cancellation and timeouts)

Cancellation lets you request to stop a coroutine before it completes.
It stops work that's no longer needed, such as when a user closes a window or navigates away in a user interface while a coroutine is still running.

You can use cancellation to release resources early and to stop a coroutine from accessing objects past their disposal.
You can also use it to stop long-running coroutines that perform repeated work, such as:

* Sending heartbeats.
* Running scheduled tasks.
* Updating a state to reflect the newest reading, such as in a clock UI.

Cancellation works through the [`Job`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/) handle, which represents the lifecycle of a coroutine and its parent-child relationships.
`Job` allows you to check whether the coroutine is active and allows you to cancel it, along with its children, as defined by [structured concurrency](coroutines-basics.md#coroutine-scope-and-structured-concurrency).

## Cancel coroutines

A coroutine is canceled when the [`cancel()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-job/cancel.html) function is invoked on its `Job` handle.
[Coroutine builder functions](coroutines-basics.md#coroutine-builder-functions) such as
[`.launch()`](coroutines-basics.md#coroutinescope-launch) return a `Job`. The [`.async()`](coroutines-basics.md#coroutinescope-async)
function returns a [`Deferred`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-deferred/), which
implements `Job` and supports the same cancellation behavior.

You can call the `cancel()` function manually, or it can be invoked automatically through cancellation propagation when a parent coroutine is canceled.

When a coroutine is canceled, it throws a [`CancellationException`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-cancellation-exception/) the next time it checks for cancellation.

Sources: [live-kotlin-coroutines-cancellation-guide-lines-1-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 134–168)

            println("Child coroutine 2 has been canceled")
        }
    }
    // Completes the CompletableDeferred,
    // signaling that the child coroutines have been launched
    childrenLaunched.complete(Unit)
}
// Waits for the parent coroutine to signal that it has launched
// all of its children
childrenLaunched.await()

// Cancels the parent coroutine, which cancels all its children
parentJob.cancel()
//sampleEnd
    }
}
```
{kotlin-runnable="true" id="cancellation-propagation-example"}

In this example, each child coroutine uses a [`finally` block](exceptions.md#the-finally-block), so the code inside it runs when the coroutine is canceled.
Here, `CompletableDeferred` signals that the child coroutines are launched before they're canceled, but it doesn't guarantee that they start running.
If they're canceled first, nothing is printed.

## Make coroutines react to cancellation {id="cancellation-is-cooperative"}

In Kotlin, coroutine cancellation is _cooperative_.
Coroutines react to cancellation only when they cooperate by [suspending](#suspension-points-and-cancellation) or [checking for cancellation explicitly](#check-for-cancellation-explicitly).

In this section, you can learn how adding [suspension points](#suspension-points-and-cancellation), such as calls to the [yield()](#the-yield-suspending-function) function, lets coroutines react to cancellation.

### Suspension points and cancellation

When a coroutine is canceled, it continues running until it reaches a point in the code where it may suspend, also known as a _suspension point_.
If the coroutine suspends there, the suspending function checks whether it has been canceled.
If it has, the coroutine stops and throws `CancellationException`.

Sources: [live-kotlin-coroutines-cancellation-guide-lines-134-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 169–203)


A call to a `suspend` function is a suspension point, but it doesn't always suspend.
For example, when awaiting a `Deferred` result, the coroutine only suspends if that `Deferred` isn't completed yet.

Here's an example using common suspending functions that suspend, enabling the coroutine to check and stop when it's canceled:

```kotlin
import kotlinx.coroutines.*
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.channels.Channel
import kotlin.time.Duration.Companion.milliseconds
import kotlin.time.Duration

suspend fun main() {
//sampleStart
withContext(Dispatchers.Default) {
    val childJobs = listOf(
        launch {
            // Suspends until canceled
            awaitCancellation()
        },
        launch {
            // Suspends until canceled
            delay(Duration.INFINITE)
        },
        launch {
            val channel = Channel<Int>()
            // Suspends while waiting for a value that's never sent
            channel.receive()
        },
        launch {
            val deferred = CompletableDeferred<Int>()
            // Suspends while waiting for a value that's never completed
            deferred.await()
        },

Sources: [live-kotlin-coroutines-cancellation-guide-lines-169-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 204–238)

        launch {
            val mutex = Mutex(locked = true)
            // Suspends while waiting for a mutex that remains locked indefinitely
            mutex.lock()
        }
    )
    
    // Gives the child coroutines time to start and suspend
    delay(100.milliseconds)
    
    // Cancels all child coroutines
    childJobs.forEach { it.cancel() }
}
println("All child jobs completed!")
//sampleEnd
}
```
{kotlin-runnable="true" id="suspension-points-example"}

> All suspending functions in the `kotlinx.coroutines` library cooperate with cancellation because they use [`suspendCancellableCoroutine()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/suspend-cancellable-coroutine.html) internally, which checks for cancellation when the coroutine suspends.
> In contrast, custom suspending functions that use [`suspendCoroutine()`](https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.coroutines/suspend-coroutine.html) don't react to cancellation.
>
{style="tip"}

### The `yield()` suspending function

If a coroutine doesn't suspend, other coroutines can't run on the same thread until it completes.
As a result, coroutines that don't suspend run sequentially on that thread.
If a coroutine doesn't suspend for a long time, it also doesn't stop when it's canceled.

In CPU-intensive computations and other code that runs for a long time without suspending, call the [`yield()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/yield.html) function periodically.
This function releases the current thread and gives other coroutines a chance to run on it.
It also ensures that the coroutine checks for cancellation regularly. If the coroutine is canceled, the `yield()` function throws a `CancellationException`.

![Comparison of coroutine cancellation handling without checks, with `ensureActive()` or `isActive`, and with `yield()`](yield-and-cancellation.svg)

Sources: [live-kotlin-coroutines-cancellation-guide-lines-204-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 239–273)


Here's an example:

```kotlin
import kotlinx.coroutines.*

fun main() {
//sampleStart
// runBlocking uses the current thread for running all coroutines
runBlocking {
    val coroutineCount = 5
    repeat(coroutineCount) { coroutineIndex ->
        launch {
            val id = coroutineIndex + 1
            repeat(5) { iterationIndex ->
                val iteration = iterationIndex + 1
                // Suspends temporarily to give other coroutines a chance to run
                // Without this, the coroutines run sequentially
                yield()
                // Prints the coroutine index and iteration index
                println("$id * $iteration = ${id * iteration}")
            }
        }
    }
}
//sampleEnd
}
```
{kotlin-runnable="true" id="yield-example"}

In this example, each coroutine uses `yield()` to let other coroutines run between iterations.

### Check for cancellation explicitly

You can check for cancellation explicitly, which lets long-running code react to cancellation without suspending.

Sources: [live-kotlin-coroutines-cancellation-guide-lines-239-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 274–308)

A long-running coroutine that doesn't suspend can prevent other coroutines on the same thread from running until it completes.
Unless this behavior is intentional for your use case, use the [`yield()`](#the-yield-suspending-function) function instead.

Depending on the API, the check either returns a Boolean value or throws an exception:

* The [`isActive`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/is-active.html) property returns `false` when the coroutine is canceled.
* The [`ensureActive()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/ensure-active.html) function throws a `CancellationException` when the coroutine is canceled.

### Interrupt blocking code when coroutines are canceled

On the JVM, some blocking functions, such as `Thread.sleep()` or `BlockingQueue.take()`, can block the current thread.
These blocking functions can be interrupted, which stops them prematurely.
However, when you call them from a coroutine, cancellation doesn't interrupt the thread.

To interrupt the thread when canceling a coroutine, wrap the blocking code in the [`runInterruptible()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/run-interruptible.html) function:

```kotlin
import kotlinx.coroutines.*

suspend fun main() {
//sampleStart
withContext(Dispatchers.Default) {
    val childStarted = CompletableDeferred<Unit>()
    val childJob = launch {
        try {
            // Cancellation triggers a thread interruption
            runInterruptible {
                childStarted.complete(Unit)
                try {
                    // Blocks the current thread for a very long time
                    Thread.sleep(Long.MAX_VALUE)
                } catch (e: InterruptedException) {
                    println("Thread interrupted (Java): $e")
                    throw e
                }

Sources: [live-kotlin-coroutines-cancellation-guide-lines-274-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 29–63)

Suspending functions in the `kotlinx.coroutines` library, such as the `delay()` function, check for cancellation when they suspend.

You can use the [`awaitCancellation()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/await-cancellation.html) function to suspend a coroutine until it's canceled.
It's equivalent to calling `delay(Duration.INFINITE)`.

> For more information about how and when coroutines check for cancellation, see [Suspension points and cancellation](#suspension-points-and-cancellation).
>
{style="tip"}

Here's an example of how to manually cancel a coroutine:

```kotlin
import kotlinx.coroutines.*

suspend fun main() {
//sampleStart
withContext(Dispatchers.Default) {
    // Used as a signal that the coroutine has started running
    val childStarted = CompletableDeferred<Unit>()
    
    val childJob: Job = launch {
        println("The coroutine has started")

        // Completes the CompletableDeferred,
        // signaling that the coroutine has started running
        childStarted.complete(Unit)
        try {
            // Suspends indefinitely
            // This call will never return unless the coroutine is canceled
            awaitCancellation()
        } catch (e: CancellationException) {
            println("The coroutine was canceled: $e")
          
            // Always rethrow cancellation exceptions!
            throw e

Sources: [live-kotlin-coroutines-cancellation-guide-lines-29-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 309–343)

            }
        } catch (e: CancellationException) {
            println("Coroutine canceled (Kotlin): $e")
            throw e
        }
    }
    childStarted.await()

    // Cancels the coroutine and interrupts the thread executing Thread.sleep()
    childJob.cancel()
}
//sampleEnd
}
```
{kotlin-runnable="true" id="interrupt-cancellation-example"}

## Handle values safely when canceling coroutines

When a suspended coroutine is canceled, it resumes with a `CancellationException` instead of returning any values, even if those values are already available.
This behavior is called _prompt cancellation_.
It prevents your code from continuing in a canceled coroutine's scope, such as updating a screen that's already closed.

Here's an example:

```kotlin
// Defines a coroutine scope that uses the UI thread
class ScreenWithButtons(private val scope: CoroutineScope) {
    fun loadAndUpdateButtons(filename: String) {
        scope.launch {
            // withContext() checks for cancellation before entering the block
            // and after the block returns
            val buttonNames = withContext(Dispatchers.IO) {
                // This is a blocking call that doesn't react to cancellation
                readLines(filename)
            }

Sources: [live-kotlin-coroutines-cancellation-guide-lines-309-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 344–378)

            
            // It's safe to call updateUi()
            // because withContext() doesn't return if the coroutine is canceled,
            // and no code running on the UI thread can dispose of the buttons before this call
            updateUi(buttonNames)
        }
    }

    // Call this function only from the UI thread because it accesses the buttons
    // Throws an exception if called after the buttons are disposed
    private fun updateUi(buttonNames: List<String>) {
        // Placeholder code that updates the buttons with specified names
    }

    // Call this function only from the UI thread
    fun leaveScreen() {
        // Cancels the scope when leaving the screen
        // You can no longer update the UI
        scope.cancel()
    }
}

// UI controller code
setHandler(Event.ScreenClosed) {
    // Runs on the UI thread
    screenWithButtons.leaveScreen()
    buttons.dispose()
}
```

In this example, `withContext(Dispatchers.IO)` cooperates with cancellation and prevents `updateUi()` from running if the
`leaveScreen()` function cancels the coroutine before `withContext(Dispatchers.IO)` returns the button names.

While prompt cancellation prevents using values after they're no longer valid, it can also stop your code while an important value is still in use, which might lead to losing that value.
This can happen when a coroutine receives a value, such as an `AutoCloseable` resource, but is canceled before it can reach the part of the code that closes it.

Sources: [live-kotlin-coroutines-cancellation-guide-lines-344-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 379–413)

To prevent this, keep cleanup logic in a place that's guaranteed to run even when the coroutine receiving the value is canceled.

Here's an example:

```kotlin
import java.nio.file.*
import java.nio.charset.*
import kotlinx.coroutines.*
import java.io.*

// Uses a scope that runs its coroutines on the UI thread
class ScreenWithFileContents(private val scope: CoroutineScope) {
    fun displayFile(path: Path) {
        scope.launch {
            // Stores the reader in a variable, so the finally block can close it
            var reader: BufferedReader? = null
            
            try {
                withContext(Dispatchers.IO) {
                    reader = Files.newBufferedReader(
                        path, Charset.forName("US-ASCII")
                    )
                }
                // Uses the stored reader after withContext() completes
                updateUi(reader!!)
            } finally {
                // Ensures the reader is closed even when the coroutine is canceled
                reader?.close()
            }
        }
    }

    private suspend fun updateUi(reader: BufferedReader) {
        // Shows the file contents
        while (true) {

Sources: [live-kotlin-coroutines-cancellation-guide-lines-379-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 414–448)

            val line = withContext(Dispatchers.IO) {
                reader.readLine()
            }
            if (line == null)
                break
            addOneLineToUi(line)
        }
    }

    private fun addOneLineToUi(line: String) {
        // Placeholder for code that adds one line to the UI
    }

    // Only callable from the UI thread
    fun leaveScreen() {
        // Cancels the scope and prevents its coroutines from updating the UI
        scope.cancel()
    }
}
```

In this example, storing the `BufferedReader` in a variable and closing it in the `finally` block ensures the resource is released even if the coroutine is canceled.

### Run non-cancelable blocks

You can prevent cancellation from affecting certain parts of a coroutine.
To do so, pass [`NonCancellable`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-non-cancellable/) as an argument to the `withContext()` coroutine builder function.

> Avoid using `NonCancellable` with other coroutine builders like `.launch()` or `.async()`. Doing so disrupts structured concurrency by breaking the parent-child relationship.
>
{style="warning"}

`NonCancellable` is useful when you need to ensure that certain operations, such as closing resources with a suspending `close()` function,
complete even if the coroutine is canceled before they finish.


Sources: [live-kotlin-coroutines-cancellation-guide-lines-414-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 449–483)

Here's an example:

```kotlin
import kotlinx.coroutines.*
import kotlin.time.Duration.Companion.milliseconds

//sampleStart
val serviceStarted = CompletableDeferred<Unit>()

fun startService() {
    println("Starting the service...")
    serviceStarted.complete(Unit)
}

suspend fun shutdownServiceAndWait() {
    println("Shutting down...")
    delay(100.milliseconds)
    println("Successfully shut down!")
}

suspend fun main() {
    withContext(Dispatchers.Default) {
        val childJob = launch {
            startService()
            try {
                awaitCancellation()
            } finally {
                withContext(NonCancellable) {
                    // Without withContext(NonCancellable),
                    // this function doesn't complete because the coroutine is canceled
                    shutdownServiceAndWait()
                }
            }
        }
        serviceStarted.await()

Sources: [live-kotlin-coroutines-cancellation-guide-lines-449-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 484–518)

        childJob.cancel()
    }
    println("Exiting the program")
}
//sampleEnd
```
{kotlin-runnable="true" id="noncancellable-blocks-example"}

## Timeout

A timeout allows you to automatically cancel a coroutine after a specified duration.
You can use it to stop operations that take too long.

For example, if a request to download a picture from a server times out, you can retry or fallback to the local cache.

To specify a timeout, use the [`withTimeoutOrNull()`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/with-timeout-or-null.html) function with a `Duration`:

```kotlin
import kotlinx.coroutines.*
import kotlin.time.Duration.Companion.milliseconds

//sampleStart
suspend fun slowOperation(): String {
    try {
        delay(300.milliseconds)
        return "A"
    } catch (e: CancellationException) {
        println("The slow operation has been canceled: $e")
        throw e
    }
}

suspend fun fastOperation(): String {
    try {
        delay(15.milliseconds)

Sources: [live-kotlin-coroutines-cancellation-guide-lines-484-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 519–543)

        return "B"
    } catch (e: CancellationException) {
        println("The fast operation has been canceled: $e")
        throw e
    }
}

suspend fun main() {
    withContext(Dispatchers.Default) {
        val slow = withTimeoutOrNull(100.milliseconds) {
            slowOperation()
        }
        println("The slow operation finished with $slow")
        val fast = withTimeoutOrNull(100.milliseconds) {
            fastOperation()
        }
        println("The fast operation finished with $fast")
    }
}
//sampleEnd
```
{kotlin-runnable="true" id="timeout-example"}

If the timeout exceeds the specified `Duration`, `withTimeoutOrNull()` returns `null`.


Sources: [live-kotlin-coroutines-cancellation-guide-lines-519-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 64–98)

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

Sources: [live-kotlin-coroutines-cancellation-guide-lines-64-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)

## Kotlin coroutine cancellation (lines 99–133)

> For more information, see [Coroutine exceptions handling](exception-handling.md#cancellation-and-exceptions).
>
{style="warning"}

### Cancellation propagation

[Structured concurrency](coroutines-basics.md#coroutine-scope-and-structured-concurrency) ensures that canceling a coroutine also cancels all of its children.
This prevents child coroutines from continuing their work after their parent coroutine is canceled.

Here's an example:

```kotlin
import kotlinx.coroutines.*

suspend fun main() {
    withContext(Dispatchers.Default) {
//sampleStart
// Used as a signal that the child coroutines have been launched
val childrenLaunched = CompletableDeferred<Unit>()

// Launches two child coroutines
val parentJob = launch {
    launch {
        println("Child coroutine 1 has started running")
        try {
            awaitCancellation()
        } finally {
            println("Child coroutine 1 has been canceled")
        }
    }
    launch {
        println("Child coroutine 2 has started running")
        try {
            awaitCancellation()
        } finally {

Sources: [live-kotlin-coroutines-cancellation-guide-lines-99-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md)
