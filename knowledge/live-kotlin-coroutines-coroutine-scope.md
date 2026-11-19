---
type: reference
title: Kotlin structured coroutine scope source
description: "Public source: https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/common/src/CoroutineScope.kt"
tags:
  - Compose
  - Android
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
  - id: live-kotlin-coroutines-coroutine-scope-lines-1-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 1
    endLine: 35
    sha256: eb0bccaed6847014ca385f8fa64658afcabf06cbde7ebf2aac18eecded5c32a6
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |-
      @file:OptIn(ExperimentalContracts::class)
      @file:Suppress("LEAKED_IN_PLACE_LAMBDA", "WRONG_INVOCATION_KIND")

      package kotlinx.coroutines

      import kotlinx.coroutines.internal.*
      import kotlinx.coroutines.intrinsics.*
      import kotlin.contracts.*
      import kotlin.coroutines.*
      import kotlin.coroutines.intrinsics.*

      /**
       * A scope in which coroutines run.
       *
       * A coroutine scope allows managing the lifecycles of several coroutines simultaneously
       * and setting the execution properties with which coroutines (its "children") are launched.
       *
       * Execution properties are [CoroutineContext.Element] values that may affect the behavior of
       * `kotlinx.coroutines`—for example, which thread pool a coroutine should run on.
       * See a more detailed explanation of coroutine context elements in a separate section below.
       *
       * A set of rules called "structured concurrency" ensures that the lifecycles of children
       * are nested inside the lifecycles of their parent scopes.
       * For example, if a scope is cancelled, all coroutines in it are cancelled too, and the scope itself
       * cannot be completed until all its children are completed.
       * See a more detailed explanation of structured concurrency in a separate section below.
       *
       * ## Using coroutine scopes
       *
       * The methods of this interface are not intended to be called directly.
       * Instead, a [CoroutineScope] is passed as a receiver to the coroutine builders such as [launch] and [async]
       * and affects the execution properties and lifetimes of the created coroutines.
       *
       * ## Coroutine context elements
       *
  - id: live-kotlin-coroutines-coroutine-scope-lines-1016-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 1016
    endLine: 1050
    sha256: 9855bc4bac215a087ba34fb3bc3d6b4bff3439acb9a79baac22170c007395227
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * that supports multiple independent concurrent operations,
       * this is not the desired behavior.
       *
       * Explicitly using a [SupervisorJob] in the context of the scope is the recommended way to avoid this.
       *
       * ### Unintentionally passing a [Job] in the context
       *
       * Sometimes, a [Job] is passed in the context of this function unintentionally,
       * leading to unpredictable interactions between several scopes.
       *
       * Examples of this include `CoroutineScope(currentCoroutineContext())`, `CoroutineScope(coroutineContext)`,
       * `CoroutineScope(scope.coroutineContext)`, or any variations thereof that add new elements or remove existing ones.
       *
       * In all of these cases, the [Job] passed in the argument will become the [Job] of the newly created [CoroutineScope],
       * meaning this scope will essentially be a view of some other scope,
       * similar to what the [CoroutineScope.plus] operation produces.
       *
       * ```
       * // ANTIPATTERN! DO NOT WRITE SUCH CODE
       * suspend fun foo() {
       *     val scope = CoroutineScope(currentCoroutineContext())
       *     scope.launch {
       *         delay(1.seconds)
       *         println("foo()'s child coroutine finished")
       *     }
       * }
       *
       * suspend fun bar() {
       *     coroutineScope {
       *         foo()
       *         println("foo() finished, but the new coroutine is still running")
       *     }
       * }
       * ```
       *
  - id: live-kotlin-coroutines-coroutine-scope-lines-1051-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 1051
    endLine: 1085
    sha256: 5c9cb8097e00611385f73be0306c3db2cab62eccc1c548cc730aaa3e06e89188
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * In this example, the new coroutine will be launched in the scope *of the caller*,
       * and `foo()` will not await the completion of this coroutine.
       * To await the completion, use [coroutineScope] instead:
       *
       * ```
       * suspend fun foo() = coroutineScope {
       *     launch {
       *         delay(1.seconds)
       *         println("foo()'s child coroutine finished")
       *     }
       * } // `foo()` will only return when the child coroutine completes
       *
       * suspend fun bar() {
       *     coroutineScope {
       *         foo()
       *         println("foo() finished, along with its child coroutine")
       *     }
       * }
       * ```
       *
       * If launching a coroutine in the context of the caller is the desired behavior,
       * make it explicit by passing the outer scope as a parameter:
       *
       * ```
       * fun foo(scope: CoroutineScope) {
       *     scope.launch {
       *         delay(1.seconds)
       *         println("foo()'s child coroutine finished")
       *     }
       * }
       *
       * suspend fun bar() {
       *     coroutineScope {
       *         foo(this)
       *         println("foo() created a child coroutine in `this` scope")
  - id: live-kotlin-coroutines-coroutine-scope-lines-106-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 106
    endLine: 140
    sha256: 27444302c4c5f0207ac053f30adc1cc4bcb6044d044f13952fa0ba80b273cbe4
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *            // do some work
       *            delay(50.milliseconds)
       *            println("Doing something")
       *        }
       *    }
       *
       *    override fun close() {
       *        // cancel all computations related to this entity
       *        scope.cancel()
       *    }
       * }
       *
       * fun main() {
       *     MyEntity().use { entity ->
       *         entity.doSomethingWhileEntityExists()
       *         Thread.sleep(200)
       *     }
       * }
       * ```
       *
       * Usually, a custom [CoroutineScope] should be created with a [SupervisorJob] and
       * a [CoroutineExceptionHandler] to handle exceptions in child coroutines.
       * See the documentation for the [CoroutineScope] constructor function for more details.
       * Also note that `MyEntity` accepts the `scope` parameter that can be used to pass a custom scope for testing.
       *
       * Sometimes, coroutine-aware frameworks provide [CoroutineScope] instances like this out of the box.
       * For example, on Android, all entities with a lifecycle and all `ViewModel` instances expose a [CoroutineScope]:
       * see [the corresponding documentation](https://developer.android.com/topic/libraries/architecture/coroutines).
       *
       * ### Taking another view of an existing scope
       *
       * Occasionally, several coroutines need to be launched with the same additional [CoroutineContext] that is not
       * present in the original scope.
       * In this case, the [CoroutineScope.plus] operator can be used to create a new view of an existing scope:
       *
  - id: live-kotlin-coroutines-coroutine-scope-lines-1086-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 1086
    endLine: 1120
    sha256: ba71c44cbcc165d84a361cedf1af9a2cb6f7aaff3e40a5ccea87b5370e512527
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *     }
       * }
       * ```
       */
      @Suppress("FunctionName")
      public fun CoroutineScope(context: CoroutineContext): CoroutineScope =
          ContextScope(if (context[Job] != null) context else context + Job())

      /**
       * Cancels this scope, including its job and all its children with an optional cancellation [cause].
       *
       * A cause can be used to specify an error message or to provide other details on
       * a cancellation reason for debugging purposes.
       *
       * Throws [IllegalStateException] if the scope does not have a job in it.
       *
       * This function is shorthand for `coroutineContext[Job]?.cancel(cause) ?: throw IllegalStateException()`.
       *
       * ## Usage
       *
       * ### Cancelling non-lexically scoped coroutines
       *
       * The primary purpose of this function is to cancel a manually created [CoroutineScope] when its lifecycle ends.
       *
       * ```
       * class ThingWithItsOwnLifetime(scope: CoroutineScope? = null): AutoCloseable {
       *     private val scope = scope ?: CoroutineScope(
       *         SupervisorJob() + Dispatchers.Main +
       *         CoroutineExceptionHandler { _, e ->
       *             // handle uncaught coroutine exceptions appropriately
       *         }
       *     )
       *
       *     override fun close() {
       *         // the computations should all stop running
  - id: live-kotlin-coroutines-coroutine-scope-lines-1121-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 1121
    endLine: 1155
    sha256: f9833c001630a6c19f4fd3e299a0f69c8b3314170faf5cd3369441fdaaddcc89
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *         scope.cancel()
       *     }
       * ```
       *
       * Failing to cancel the scope when it is no longer in active use will lead to resource leaks
       * and can also potentially crash the program if some object used by the child coroutines becomes destroyed.
       *
       * ### Cancelling lexical [CoroutineScope]
       *
       * For lexically scoped coroutines, such as those created with [coroutineScope] or [withContext],
       * canceling the scope explicitly is very rarely required.
       *
       * If no child coroutines were started, but it became obvious that the computation won't be needed,
       * the scope can simply be exited:
       *
       * ```
       * coroutineScope {
       *     if (computationNotNeeded) return@coroutineScope
       *     // Start some child coroutines
       *     // ...
       * }
       * ```
       *
       * Also, if the caller is cancelled, the scope will be cancelled as well, so there is no need to cancel it explicitly.
       *
       * [cancel] may be useful in cases when one child coroutine detects that the whole parent scope is no longer needed
       * and wants to cancel it:
       *
       * ```
       * coroutineScope {
       *     val parentScope = this
       *     launch {
       *         val userRequest = getUserRequest()
       *         if (userRequest == TERMINATE) {
       *             parentScope.cancel()
  - id: live-kotlin-coroutines-coroutine-scope-lines-1156-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 1156
    endLine: 1190
    sha256: 3302e27cdd4b51c49bbf7795229bb492e2458d9780c0313460ad1cdf90223751
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *         }
       *         // Do something with the request
       *         // ...
       *     }
       *     // Start other child coroutines...
       * }
       * ```
       *
       * ## Pitfalls
       *
       * ### Cancelling oneself
       *
       * Cancelling a scope does not mean the computation finishes immediately,
       * as coroutine cancellation [is cooperative](https://kotlinlang.org/docs/cancellation-and-timeouts.html#cancellation-is-cooperative).
       * Only the next suspension point will observe the cancellation.
       * For example:
       *
       * ```
       * try {
       *     coroutineScope {
       *         cancel()
       *         println("Will be printed anyway!")
       *     }
       * } catch (e: CancellationException) {
       *     println(
       *         "The scope was cancelled " +
       *         "(the parent coroutine is still active: ${currentCoroutineContext().isActive})"
       *     )
       *     throw e
       * }
       * ```
       *
       * will output
       *
       * ```
  - id: live-kotlin-coroutines-coroutine-scope-lines-1191-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 1191
    endLine: 1225
    sha256: b68b4110b14ef7ca7ae972b652e2c44200db2763b5fd1bd23e09303b8e2b8314
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * Will be printed anyway!
       * The scope was cancelled (the parent coroutine is still active: true)
       * ```
       *
       * Use `return` to immediately return from the scope after cancelling it:
       *
       * ```
       * coroutineScope {
       *     cancel()
       *     return@coroutineScope
       *     println("Will not be printed")
       * }
       * ```
       */
      public fun CoroutineScope.cancel(cause: CancellationException? = null) {
          val job = coroutineContext[Job] ?: error("Scope cannot be cancelled because it does not have a job: $this")
          job.cancel(cause)
      }

      /**
       * Cancels this scope with a [CancellationException] with the given [message] and [cause].
       *
       * Shorthand for `cancel(CancellationException(message, cause))`.
       */
      public fun CoroutineScope.cancel(message: String, cause: Throwable? = null): Unit = cancel(CancellationException(message, cause))

      /**
       * Throws the [CancellationException] that was the scope's cancellation cause
       * if the scope is no longer [active][CoroutineScope.isActive].
       *
       * Coroutine cancellation [is cooperative](https://kotlinlang.org/docs/cancellation-and-timeouts.html#cancellation-is-cooperative),
       * and normally, it's checked if a coroutine is cancelled when it *suspends*, for example,
       * when trying to [await][Deferred.await] a [Deferred][kotlinx.coroutines.Deferred] that has not yet completed.
       *
       * Sometimes, a coroutine does not need to perform suspending operations but still wants to be cooperative
  - id: live-kotlin-coroutines-coroutine-scope-lines-1226-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 1226
    endLine: 1260
    sha256: df4706249ffb83731a3cf2b3c2cdbe4d354b01cde71da9d3a6f244e946d732a3
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * and respect cancellation.
       *
       * [ensureActive] function is intended to be used for these scenarios and immediately bubble up the cancellation exception:
       * ```
       * fun backgroundWork() {
       *     println("Doing bookkeeping in the background in a non-suspending manner")
       *     Thread.sleep(100L) // Sleep 100ms
       * }
       * fun postBackgroundCleanup() = println("Doing something else")
       * // Part of some non-trivial CoroutineScope-confined lifecycle
       * launch(Dispatchers.IO) {
       *     while (true) {
       *         // Repeatedly do some background work that is non-suspending
       *         backgroundWork()
       *         ensureActive() // Bail out if the scope was cancelled
       *         postBackgroundCleanup() // Won't be invoked if the scope was cancelled
       *     }
       * }
       * ```
       * This function does not do anything if there is no [Job] in the scope's [coroutineContext][CoroutineScope.coroutineContext].
       *
       * For ensuring that the [current coroutine context][currentCoroutineContext] and not some scope's context
       * [is active][CoroutineContext.isActive], the following form can be used instead:
       *
       * ```
       * suspend fun doSomething() {
       *     // throw if we are not allowed to suspend
       *     currentCoroutineContext().ensureActive()
       *     // ...
       * }
       * ```
       *
       * Alternatively, [yield] can be used to both ensure that [currentCoroutineContext] is active
       * and give other coroutines a chance to run on this thread:
       *
  - id: live-kotlin-coroutines-coroutine-scope-lines-1261-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 1261
    endLine: 1295
    sha256: eee4a83188961e85d01adbd91c97432c9f18c547a9093615f7a0db53a7c95d42
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * ```
       * suspend fun doSomething() {
       *     // yield the thread to other coroutines
       *     yield()
       *     // ...
       * }
       * ```
       *
       * @see yield for a version that gives other coroutines a chance to run on this thread.
       * @see CoroutineScope.isActive for a version that returns a boolean value instead of throwing an exception.
       */
      public fun CoroutineScope.ensureActive(): Unit = coroutineContext.ensureActive()

      /**
       * Returns the current [CoroutineContext] retrieved by using [kotlin.coroutines.coroutineContext].
       *
       * This function is an alias to avoid name clash with [CoroutineScope.coroutineContext]:
       *
       * ```
       * // ANTIPATTERN! DO NOT WRITE SUCH CODE
       * suspend fun CoroutineScope.suspendFunWithScope() {
       *     // Name of the CoroutineScope.coroutineContext in 'this' position, same as `this.coroutineContext`
       *     println(coroutineContext[CoroutineName])
       *     // Name of the context that invoked this suspend function, same as `kotlin.coroutines.coroutineContext`
       *     println(currentCoroutineContext()[CoroutineName])
       * }
       *
       * withContext(CoroutineName("Caller")) {
       *     // Will print 'CoroutineName("Receiver")' and 'CoroutineName("Caller")'
       *     CoroutineScope(CoroutineName("Receiver")).suspendFunWithScope()
       * }
       * ```
       *
       * This function should always be preferred over [kotlin.coroutines.coroutineContext] property
       * even when there is no explicit clash.
  - id: live-kotlin-coroutines-coroutine-scope-lines-1296-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 1296
    endLine: 1308
    sha256: 81857c724c60eb837725dfa6dd0538885bb80ef05efff840a73d182ae3232595
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2
       *
       * Usage example:
       *
       * ```
       * // log an event while specifying the current coroutine
       * println("[${currentCoroutineContext()[Job]}] Hello, World!")
       * ```
       *
       * Consider using [coroutineScope] instead of this function to obtain not only the current context
       * but also a new [CoroutineScope] that allows easily launching coroutines and waiting for their completion.
       */
      public suspend inline fun currentCoroutineContext(): CoroutineContext = coroutineContext
  - id: live-kotlin-coroutines-coroutine-scope-lines-141-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 141
    endLine: 175
    sha256: 4a959c347329514e4c57049e526128dc30a0000b5f6cfcf2c70bfc5f4db83998
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * ```
       * coroutineScope {
       *     val sameScopeButInUiThread = this + Dispatchers.Main
       *     sameScopeButInUiThread.launch {
       *         println("Running on the main thread")
       *     }
       *     launch {
       *         println("This will run using the original dispatcher")
       *     }
       *     sameScopeButInUiThread.launch {
       *         println("And this will also run on the main thread")
       *     }
       * }
       * ```
       *
       * The lifecycle of the new scope is the same as the original one, but the context includes new elements.
       *
       * ### Application lifecycle scope
       *
       * [GlobalScope] is a [CoroutineScope] that has the lifetime of the whole application.
       * Although it is convenient for launching top-level coroutines that are not tied to the lifecycle of any entity,
       * it is easy to misuse it and create memory or resource leaks when a coroutine actually should be tied
       * to the lifecycle of some entity.
       *
       * ```
       * GlobalScope.launch(CoroutineExceptionHandler { _, e ->
       *     println("Error in coroutine: $e")
       * }) {
       *    while (true) {
       *        println("I will be running forever, you cannot stop me!")
       *        delay(1.seconds)
       *    }
       * }
       * ```
       *
  - id: live-kotlin-coroutines-coroutine-scope-lines-176-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 176
    endLine: 210
    sha256: 05945076b1130068c72bae43f3961409704aefdff29a4a39e484920df30f7729
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * ### `by`-delegation
       *
       * When the approaches listed above are not applicable and a custom [CoroutineScope] implementation is needed,
       * it is recommended to use `by`-delegation to implement the interface:
       *
       * ```
       * class MyEntity : CoroutineScope by CoroutineScope(
       *     SupervisorJob() + Dispatchers.Main + CoroutineExceptionHandler { _, e ->
       *         println("Error in coroutine: $e")
       *     }
       * )
       * ```
       *
       * ## Structured concurrency in detail
       *
       * ### Overview
       *
       * *Structured concurrency* is an approach to concurrent programming that attempts to clarify the lifecycles of
       * concurrent operations and to make them easier to reason about.
       *
       * Skim the following motivating example:
       *
       * ```
       * suspend fun downloadFile(url: String): ByteArray {
       *     return withContext(Dispatchers.IO) {
       *         // this code will execute on a thread for blocking work
       *         val file = byteArrayOf()
       *         // download the file
       *         file
       *     }
       * }
       *
       * suspend fun downloadAndCompareTwoFiles() {
       *     coroutineScope {
       *         val file1 = async {
  - id: live-kotlin-coroutines-coroutine-scope-lines-211-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 211
    endLine: 245
    sha256: c88d2a42e3c00e8f869fa76eac1a5be49cee25db89a77da2bbf4bc1de8df685c
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *             // if this fails, everything else quickly fails too
       *             downloadFile("http://example.com/file1")
       *         }
       *         val file2 = async {
       *             downloadFile("http://example.com/file2")
       *         }
       *         launch(Dispatchers.Main) {
       *             // create a separate coroutine on the UI thread
       *             if (file1.await().contentEquals(file2.await())) {
       *                 uiShow("Files are equal")
       *             } else {
       *                 uiShow("Files are not equal")
       *             }
       *         }
       *     }
       *     // this line will only run once all the coroutines created above
       *     // finish their work or get cancelled
       * }
       * ```
       *
       * In this example, two asynchronous operations are launched in parallel to download two files.
       * If one of the files fails to download, the other one is cancelled too, and the whole operation fails.
       * The `coroutineScope` function will not return until all the coroutines inside it are completed or cancelled.
       * In addition, it is possible to cancel the coroutine calling `downloadAndCompareTwoFiles`, and all the coroutines
       * inside it will be cancelled too.
       *
       * Without structured concurrency, ensuring that no resource leaks occur by the end of the operation and that
       * the operation responds promptly to failure and cancellation requests is challenging.
       * With structured concurrency, this orchestration is done automatically by the coroutine library,
       * and it is enough to specify the relationships between operations declaratively, as shown in the example,
       * without being overwhelmed by intricate inter-thread communications.
       *
       * ### Specifics
       *
       * Coroutines and [CoroutineScope] instances have an associated lifecycle.
  - id: live-kotlin-coroutines-coroutine-scope-lines-246-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 246
    endLine: 280
    sha256: 7a6a0d39d88e27e1ad2747165fabd4508b3bbeb11fb451c15d7c380dd3af5f38
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * A runtime representation of a lifecycle in `kotlinx.coroutines` is called a [Job].
       * [Job] instances form a hierarchy of parent-child relationships,
       * and the [Job] of every coroutine spawned in a [CoroutineScope] is a child of the [Job] of that scope.
       * This is often shortened to saying that the coroutine is the scope's child.
       *
       * See the [Job] documentation for a detailed explanation of the lifecycle stages.
       *
       * ```
       * coroutineScope {
       *     val job = coroutineContext[Job]
       *     val childJob = launch { }
       *     check(job === childJob.parent)
       * }
       * ```
       *
       * Because every coroutine has a lifecycle represented by a [Job], a [CoroutineScope] can be associated with it.
       * Most coroutine builders in `kotlinx.coroutines` expose the [CoroutineScope] of the coroutine on creation:
       *
       * ```
       * coroutineScope { // this block has a `CoroutineScope` receiver
       *     val parentScope = this
       *     var grandChildFinished = false
       *     val childJob = launch {
       *         // this block has a `CoroutineScope` receiver, too
       *         val childScope = this
       *         check(childScope.coroutineContext[Job]?.parent
       *             === parentScope.coroutineContext[Job])
       *         launch {
       *             // This block also has a `CoroutineScope` receiver!
       *             val grandChildScope = this
       *             check(grandChildScope.coroutineContext[Job]?.parent
       *                 === childScope.coroutineContext[Job])
       *             delay(100.milliseconds)
       *             grandChildFinished = true
       *         }
  - id: live-kotlin-coroutines-coroutine-scope-lines-281-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 281
    endLine: 315
    sha256: 621700ea9eb5d11b7d68ea137a7eb80259fa264cdd8240bf7982ab156bd7b40f
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *         // Because the grandchild coroutine
       *         // is a child of the child coroutine,
       *         // the child coroutine will not complete
       *         // until the grandchild coroutine does.
       *     }
       *     // Await completion of the child coroutine,
       *     // and therefore the grandchild coroutine too.
       *     childJob.join()
       *     check(grandChildFinished)
       * }
       * ```
       *
       * Such a [CoroutineScope] receiver is provided for [launch], [async], and other coroutine builders,
       * as well as for lexically scoping functions like [coroutineScope], [supervisorScope], and [withContext].
       * Each of these [CoroutineScope] instances is tied to the lifecycle of the code block it runs in.
       *
       * Like the example above shows, a coroutine does not complete until all its children are completed.
       * This means that [Job.join] on a [launch] or [async] result or [Deferred.await] on an [async] result
       * will not return until all the children of that coroutine are completed.
       * Likewise, lexically scoping functions like [coroutineScope] and [withContext] will not return
       * until all the coroutines launched in them are completed.
       *
       * #### Interactions between coroutines
       *
       * See the [Job] documentation for a detailed explanation of interactions between [Job] values.
       * Below is a summary of the most important points for structuring code in day-to-day usage.
       *
       * A coroutine cannot reach the final state until all its children have reached their final states.
       * See the example above.
       *
       * If a [CoroutineScope] is cancelled (either explicitly or because it corresponds to some coroutine that failed
       * with an exception), all its children are cancelled too:
       *
       * ```
       * val scope = CoroutineScope(
  - id: live-kotlin-coroutines-coroutine-scope-lines-316-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 316
    endLine: 350
    sha256: 21db61aa1de45230c87809ee7ac166ddd6910902d4f114391c7870956760181a
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *     SupervisorJob() + CoroutineExceptionHandler { _, e -> }
       * )
       * val job = scope.launch {
       *      // this coroutine will be cancelled
       *      awaitCancellation()
       * }
       * scope.cancel() // comment this out for the line below to hang
       * job.join() // finishes normally
       * ```
       *
       * A failure of a child coroutine causes the parent to fail with the same exception if all of the following conditions
       * are met:
       * 1. The exception is not a [CancellationException].
       * 2. The failed child coroutine was not created with lexically scoped coroutine builders
       *    like [coroutineScope] or [withContext].
       * 3. The parent coroutine's [Job] is not a [SupervisorJob].
       *
       * The same logic applies recursively to the parent of the parent, etc.
       * Example:
       *
       * ```
       * check(
       *     runCatching {
       *         coroutineScope {
       *             launch {
       *                 // This cancels the `coroutineScope` coroutine, since
       *                 // 1. The coroutine fails with a non-`CancellationException` exception,
       *                 // 2. `launch` is not a lexically scoped coroutine builder,
       *                 // 3. `coroutineScope` has a non-supervisor `Job`
       *                 throw IllegalStateException()
       *             }
       *             launch {
       *                 // this coroutine will be cancelled
       *                 // when the parent gets cancelled
       *                 awaitCancellation()
  - id: live-kotlin-coroutines-coroutine-scope-lines-351-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 351
    endLine: 385
    sha256: 43f4c84e4222f3a9aeb0dfc5719f4b16d3bd1f8702f86d20fe5749c75b8f4dbf
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *             }
       *         }
       *     }.exceptionOrNull()
       *     is IllegalStateException
       * )
       * // The currently running coroutine will *not* be cancelled
       * // because the failed coroutine (`coroutineScope`) is lexically scoped.
       * check(currentCoroutineContext().isActive)
       * ```
       *
       * Child jobs can lead to the failure of the parent even if the parent has already finished its work
       * and was ready to return a value:
       *
       * ```
       * val deferred = GlobalScope.async {
       *     launch {
       *         delay(100.milliseconds)
       *         throw IllegalStateException()
       *     }
       *     10 // this value will be lost!
       * }
       * check(
       *     runCatching { deferred.await() }.exceptionOrNull()
       *     is IllegalStateException
       * )
       * ```
       *
       * If several coroutines fail with non-[CancellationException] exceptions,
       * the first observed failure will be propagated, and the rest will be attached to it as
       * [suppressed exceptions][Throwable.suppressedExceptions].
       *
       * Failing with a [CancellationException] only cancels the coroutine itself and its children.
       * It does not affect the parent or sibling coroutines and is not considered a failure.
       *
       * ### How-to: stop failures of child coroutines from cancelling other coroutines
  - id: live-kotlin-coroutines-coroutine-scope-lines-36-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 36
    endLine: 70
    sha256: 8aa3a455d4c5d75f3714b60ce1ce72d7b44783ec9a6d430785f8796a7633f99e
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * A [CoroutineScope] is defined by a set of [CoroutineContext] elements, one of which is typically a [Job],
       * described in the section on structured concurrency and responsible for managing lifetimes of coroutines.
       *
       * Other coroutine context elements include, but are not limited to, the following:
       *
       * - The scheduling policy, represented by a [CoroutineDispatcher] element.
       *   Some commonly used dispatchers are provided in the [Dispatchers] object.
       * - [CoroutineExceptionHandler] that defines how to handle coroutine failures that cannot
       *   be propagated to any other coroutine.
       * - A [CoroutineName] element that can be used to name coroutines for debugging purposes.
       * - On the JVM, a `ThreadContextElement` ensures that a specific thread-local value gets set on the thread
       *   that executes the coroutine.
       *
       * ## Obtaining a coroutine scope
       *
       * Manual implementations of this interface are not recommended.
       * Instead, a [CoroutineScope] should be obtained in a way that reflects the
       * intended structured concurrency relationships.
       *
       * ### Lexical scopes
       *
       * [coroutineScope] and [supervisorScope] functions can be called in any `suspend` function to define a scope
       * lexically, ensuring that all coroutines launched in this scope complete by the time the scope-limiting
       * function exits.
       *
       * ```
       * suspend fun doSomething() = coroutineScope { // scope `A`
       *     repeat(5) { outer ->
       *         // spawn a new coroutine in the scope `A`
       *         launch {
       *             println("Coroutine $outer started")
       *             coroutineScope { // scope `B`, separate for each `outer` coroutine
       *                 repeat(5) { inner ->
       *                     // spawn a new coroutine in the scope `B`
       *                     launch {
  - id: live-kotlin-coroutines-coroutine-scope-lines-386-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 386
    endLine: 420
    sha256: 97850f3c6fc9f888968adc77b956d9fdb32bbb19a38c0024ed60b2fb77c388df
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *
       * If not affecting the [CoroutineScope] on a failure in a child coroutine is the desired behaviour,
       * then a [SupervisorJob] should be used instead of `Job()` when constructing the scope:
       *
       * ```
       * val scope = CoroutineScope(SupervisorJob() + Dispatchers.Main + CoroutineExceptionHandler { _, e ->
       *     println("Coroutine failed with exception $e")
       * })
       * val failingCoroutine = scope.launch(Dispatchers.IO) {
       *     throw IllegalStateException("This exception will not cancel the scope")
       * }
       * failingCoroutine.join()
       * scope.launch(Dispatchers.IO) {
       *     println("This coroutine is active! See: ${isActive}")
       * }
       * ```
       *
       * Likewise, [supervisorScope] can replace [coroutineScope]:
       *
       * ```
       * supervisorScope {
       *     val failingCoroutine = launch(CoroutineExceptionHandler { _, e ->
       *         println("Coroutine failed with exception $e")
       *     }) {
       *         throw IllegalStateException("This exception will not cancel the scope")
       *     }
       *     failingCoroutine.join()
       *     launch {
       *         println("This coroutine is active! See: ${isActive}")
       *     }
       * }
       * ```
       *
       * ### How-to: prevent a child coroutine from being cancelled
       *
  - id: live-kotlin-coroutines-coroutine-scope-lines-421-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 421
    endLine: 455
    sha256: aa8df75231083707d38383d05459db866d11c8f90584002fa28d9ec7e25e1402
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * Sometimes, you may want to run a coroutine even if the parent coroutine is cancelled.
       * This pattern provides a way to achieve that:
       *
       * ```
       * scope.launch(start = CoroutineStart.ATOMIC) {
       *     // Do not move `NonCancellable` to the `context` argument of `launch`!
       *     withContext(NonCancellable) {
       *         // This code will run even if the parent coroutine is cancelled
       *     }
       * }
       * ```
       *
       * [CoroutineStart.ATOMIC] ensures that the new coroutine is not cancelled until it at least started to execute.
       * [NonCancellable] in [withContext] ensures that the code inside the block is executed even if the coroutine
       * created by [launch] is cancelled.
       */
      public interface CoroutineScope {
          /**
           * The context of this scope.
           *
           * The context represents various execution properties of the coroutines launched in this scope,
           * such as the [dispatcher][CoroutineDispatcher] or
           * the [procedure for handling exceptions without a propagation path][CoroutineExceptionHandler].
           * Except [GlobalScope], a [job][Job] instance for enforcing structured concurrency
           * must also be present in the context of every [CoroutineScope].
           * See the documentation of [CoroutineScope] for details.
           *
           * Accessing this property in general code is not recommended for any purposes
           * except accessing the [Job] instance for advanced usages.
           */
          public val coroutineContext: CoroutineContext
      }

      /**
       * Creates a new view of `this` [CoroutineScope], but with the specified [context] added to it.
  - id: live-kotlin-coroutines-coroutine-scope-lines-456-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 456
    endLine: 490
    sha256: 44a8e08f981c3725f8707234b38210b588583a9c21dd90c72ca8d52d9f0b233c
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *
       * This is a shorthand for `CoroutineScope(thisScope.coroutineContext + context)` and can be used as
       * a combinator with existing constructors:
       * ```
       * val myApplicationLifetimeScope = GlobalScope + CoroutineExceptionHandler { _, e ->
       *     myLogger.error("Error in coroutine: $e")
       * }
       * ```
       *
       * **Pitfall**: if [context] contains a [Job], the new job will override the existing one in the scope.
       * This means that in terms of structured concurrency, the new scope will be unrelated to the old one.
       * Because of backward compatibility guarantees, [plus] does not check for this case, even though
       * it is a source of bugs.
       */
      public operator fun CoroutineScope.plus(context: CoroutineContext): CoroutineScope =
          ContextScope(coroutineContext + context)

      /**
       * Creates a [CoroutineScope] for scheduling UI updates.
       *
       * Usage example:
       * ```
       * class MyAndroidActivity: Activity() {
       *     // be careful not to write `get() =` here by accident!
       *     private val scope = MainScope() + CoroutineExceptionHandler { _, e ->
       *         log("Unhandled error in coroutine: $e")
       *     }
       *
       *     fun updateProgressBar(newValue: Int) = scope.launch {
       *         // this coroutine will run on the main thread
       *         // ...
       *     }
       *
       *     override fun onDestroy() {
       *         super.onDestroy()
  - id: live-kotlin-coroutines-coroutine-scope-lines-491-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 491
    endLine: 525
    sha256: e7572dc57e70179c75fbc71f550a770bf132d737bc15cd4c1bb22b4b38efb471
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *         scope.cancel()
       *     }
       * }
       * ```
       *
       * The new scope has [Dispatchers.Main] in its context, meaning that all coroutines launched in it
       * will run on the main thread.
       * It also has a [SupervisorJob] in its context, meaning that if one of the child coroutines fails,
       * the other coroutines will not be affected.
       * A [CoroutineExceptionHandler] is not installed.
       *
       * If you want to append additional elements to the main scope, use the [CoroutineScope.plus] operator:
       * `val scope = MainScope() + CoroutineName("MyActivity")`.
       *
       * **Pitfall**: this scope does not include a [CoroutineExceptionHandler] and creates a job without a parent.
       * Together, this means that if a child coroutine created with [launch] fails with an exception,
       * the failure will be reported in a platform-specific manner (e.g., a crash on Android).
       * Always supply a [CoroutineExceptionHandler] to [MainScope] using the [plus] operator if there is a chance
       * that a child coroutine may fail with an exception,
       * or use [async] instead of [launch] to have the consumer of the result handle the exception.
       *
       * **Pitfall**: there is no memoization of the [CoroutineScope] instance in this function.
       * Every call to this function creates a new instance of [MainScope], with an unrelated [SupervisorJob].
       * For example, writing `MainScope().cancel()` is meaningless,
       * because the only job that will be cancelled is the one created in that specific `MainScope()` call.
       */
      @Suppress("FunctionName")
      public fun MainScope(): CoroutineScope = ContextScope(SupervisorJob() + Dispatchers.Main)

      /**
       * Returns `true` when the [Job] of this [CoroutineScope] is still active (has not completed and was not cancelled yet).
       *
       * Coroutine cancellation [is cooperative](https://kotlinlang.org/docs/cancellation-and-timeouts.html#cancellation-is-cooperative),
       * and usually, it's checked if a coroutine is cancelled when it *suspends*, for example,
       * when trying to [await][Deferred.await] a [Deferred][kotlinx.coroutines.Deferred] that has not yet completed.
  - id: live-kotlin-coroutines-coroutine-scope-lines-526-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 526
    endLine: 560
    sha256: 4420b0e0c6089884806509887d78a3b29bd9b915c56a99e7ecaa13cc25d62f4d
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *
       * Sometimes, a coroutine does not need to perform suspending operations but still wants to be cooperative
       * and respect cancellation.
       *
       * The [isActive] property is intended to be used for scenarios like this:
       * ```
       * fun backgroundWork() {
       *     println("Doing bookkeeping in the background in a blocking manner")
       *     Thread.sleep(100L) // Sleep 100ms
       * }
       * // Part of some non-trivial CoroutineScope-confined lifecycle
       * launch(Dispatchers.IO) {
       *     while (isActive) {
       *         // Repetitively do some background work that is non-suspending
       *         backgroundWork()
       *     }
       * }
       * ```
       *
       * This function returns `true` if the scope does not contain a [Job] in its
       * [context][CoroutineScope.coroutineContext].
       * This can only happen for [GlobalScope] and malformed coroutine scopes.
       *
       * For checking if the [current coroutine context][currentCoroutineContext] and not some scope's context
       * [is active][CoroutineContext.isActive], the following form can be used instead:
       *
       * ```
       * suspend fun tryDoSomething() {
       *     if (!currentCoroutineContext().isActive) return
       *     // ...
       * }
       * ```
       *
       * @see CoroutineScope.ensureActive for a function that throws an exception instead of returning a boolean value.
       */
  - id: live-kotlin-coroutines-coroutine-scope-lines-561-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 561
    endLine: 595
    sha256: d6c85a1f3dd6a5cf217dcbff28cf926bcac3794cfbd2e93d1334d59b54a248d5
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |-
      @Suppress("EXTENSION_SHADOWED_BY_MEMBER")
      public val CoroutineScope.isActive: Boolean
          get() = coroutineContext[Job]?.isActive ?: true

      /**
       * A [CoroutineScope] without any [Job].
       *
       * The global scope is used to launch top-level coroutines whose lifecycles are not limited by structured concurrency.
       * Since [GlobalScope] does not have a [Job], it is impossible to cancel all coroutines launched in it.
       * Likewise, there is no way to wait for all coroutines launched in it to finish.
       *
       * This is a **delicate** API. [GlobalScope] is easy to use to create new coroutines,
       * avoiding all bureaucracy of structured concurrency, but it also means losing all its benefits.
       * See the [CoroutineScope] documentation for a detailed explanation of structured concurrency and a list of ways
       * to obtain a [CoroutineScope] most suitable for your use case.
       *
       * ## Pitfalls
       *
       * ### Computations can happen when they have no right to or are no longer needed
       *
       * Some computations must be scoped to the lifecycle of some entity.
       * For example, after a user leaves a screen in a UI application,
       * it no longer makes sense to obtain the data needed to display that screen,
       * and attempting to update the UI may even crash the application.
       *
       * ```
       * GlobalScope.launch {
       *     val record = withContext(Dispatchers.IO) {
       *         fetchLastRecordFromServer()
       *     }
       *     withContext(Dispatchers.Main) {
       *         component.displayLastRecord(record)
       *     }
       * }
       * ```
  - id: live-kotlin-coroutines-coroutine-scope-lines-596-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 596
    endLine: 630
    sha256: 37a5612baa71f5fe2bbdcb2b87cae83a1bd0b4827271c0ea27ee3d8c3187e987
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *
       * This code is incorrect because it does not take into account the lifecycle of the component:
       * the whole computation should be cancelled if the component is destroyed.
       *
       * If a coroutine spawned in the [GlobalScope] actually is tied to a lifecycle of some entity to function correctly,
       * the created coroutines must somehow be stored and then cancelled when the entity is destroyed.
       * The easiest way to do this is to create a [CoroutineScope] using the constructor function,
       * use it to launch the coroutines, and then cancel it when the entity is destroyed,
       * which will also lead to the coroutines being cancelled.
       *
       * ### Resource leaks
       *
       * A coroutine that never gets cancelled or resumed can be a resource leak.
       *
       * ```
       * val requests = Channel<Request>()
       * GlobalScope.launch {
       *     try {
       *         while (true) {
       *             val request = channel.receive()
       *             socket.send(request)
       *         }
       *     } finally {
       *         socket.close()
       *     }
       * }
       * ```
       *
       * If at some point, everyone stops populating the channel, the coroutine will never resume or cancel,
       * and the socket will not be closed, leading to a resource leak.
       *
       * Tying the coroutine to some lifecycle will ensure that the coroutine will get cancelled when its work
       * is no longer needed, releasing all resources it holds.
       *
       * ### Crashes
  - id: live-kotlin-coroutines-coroutine-scope-lines-631-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 631
    endLine: 665
    sha256: dba99324f26dbb0d779ccb4b6bde7faddc59f1c62abff1ef314c1735d6774eb0
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *
       * [GlobalScope] does not have a [CoroutineExceptionHandler] installed.
       * This means that exceptions thrown in coroutines created using [launch] will lead to platform-specific
       * last-resort error propagation behavior, such as crashing the application (on Android, Kotlin/Native, and JS)
       * or populating the logs with potentially unnecessary information (on non-Android JVM).
       * Please see [CoroutineExceptionHandler] for details.
       *
       * ```
       * GlobalScope.launch {
       *     // depending on your platform, this line can crash your application
       *     throw IllegalStateException()
       * }
       * ```
       *
       * One way to solve this would be to provide a [CoroutineExceptionHandler] in the [launch] arguments.
       * However, it is often much simpler to use structured concurrency
       * to ensure propagation of exceptions to the parent coroutine,
       * which usually has a way to report them: for example, [coroutineScope] or `runBlocking` will rethrow the exception
       * to the caller.
       *
       * ## How to create coroutines if not with a [GlobalScope]?
       *
       * [GlobalScope] is often used by beginners who do not see any other obvious way to create coroutines.
       * This is an antipattern and should be avoided. In this section, a brief overview of the alternatives is provided.
       *
       * In many typical usage scenarios, it is not necessary to spawn new coroutines at all to run `suspend` functions.
       * Several coroutines are needed only if the code is expected to run concurrently,
       * and when the operation execute one after another, all `suspend` functions can be called sequentially:
       *
       * ```
       * suspend fun loadConfiguration() {
       *     val config = fetchConfigFromServer() // network request
       *     updateConfiguration(config)
       * }
       * ```
  - id: live-kotlin-coroutines-coroutine-scope-lines-666-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 666
    endLine: 700
    sha256: 6e474206ffcde42f7d5ebdb064011e5533ab788fd50b92674c6c6580d7d77296
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *
       * This requires that `loadConfiguration` is a `suspend` function, which is not always the case.
       * Many coroutine-aware frameworks manage coroutine scopes for you and provide a way to call `suspend` functions
       * (for example, by requiring you to provide a `suspend` lambda).
       * Try to see if the function is already called from some other `suspend` function.
       * If so, you can add the `suspend` modifier to this function and call it directly.
       *
       * If a [CoroutineScope] is necessary after all because several operations need to be run concurrently
       * in the span of a single function call,
       * the [coroutineScope] function can be used to create a new scope for the function:
       *
       * ```
       * // concurrently load configuration and data
       * suspend fun loadConfigurationAndData() {
       *     coroutineScope {
       *         launch { loadConfiguration() }
       *         launch { loadData() }
       *     }
       * }
       * ```
       *
       * A useful pattern is to use [withContext] in a top-level `suspend fun main()` function:
       *
       * ```
       * suspend fun main() {
       *     // choose the dispatcher on which the coroutines should run
       *     withContext(Dispatchers.Default) {
       *         // can call `suspend` functions here!
       *     }
       * }
       * ```
       *
       * In top-level code, when launching a concurrent operation from a non-suspending context, an appropriately
       * confined instance of [CoroutineScope] shall be used instead of `GlobalScope`.
       *
  - id: live-kotlin-coroutines-coroutine-scope-lines-701-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 701
    endLine: 735
    sha256: 90961d5d666a2b9f059f21c3f23518fcdfb513a77b476c0ec4500b5bf55fb4fb
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * See docs for the [CoroutineScope] interface
       * for details on structured concurrency and an extensive list of ways to obtain a [CoroutineScope].
       *
       * ### GlobalScope vs. Custom CoroutineScope
       *
       * Do not replace `GlobalScope.launch { ... }` with a `CoroutineScope().launch { ... }` constructor function call.
       * The latter suffers from all the pitfalls described above.
       * See the [CoroutineScope] documentation on the intended usage of the `CoroutineScope()` constructor function.
       *
       * ### Legitimate use cases
       *
       * There are limited circumstances under which `GlobalScope` can be legitimately and safely used,
       * such as top-level background processes that must stay active for the whole duration of the application's lifetime.
       * Because of that, any use of `GlobalScope` requires an explicit opt-in with `@OptIn(DelicateCoroutinesApi::class)`,
       * like this:
       *
       * ```
       * // A global coroutine to log statistics every second, must be always active
       * @OptIn(DelicateCoroutinesApi::class)
       * val globalScopeReporter = GlobalScope.launch(CoroutineExceptionHandler { _, e ->
       *     logFatalError("Error in the global statistics-logging coroutine: $e")
       * }) {
       *     while (true) {
       *         delay(1.seconds)
       *         logStatistics()
       *     }
       * }
       * ```
       */
      @DelicateCoroutinesApi
      public object GlobalScope : CoroutineScope {
          /**
           * Returns [EmptyCoroutineContext].
           *
           * Note that, unlike other [CoroutineScope] implementations, this scope does not have a [Job] in its context.
  - id: live-kotlin-coroutines-coroutine-scope-lines-71-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 71
    endLine: 105
    sha256: 05a9cf48b1a233b7809675afd4fea838cce90c6c123a59e62d441fd321e03468
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *                         println("Coroutine $outer.$inner started")
       *                         delay(10.milliseconds)
       *                         println("Coroutine $outer.$inner finished")
       *                     }
       *                 }
       *             }
       *             // will only exit once all `Coroutine $outer.X finished` messages are printed
       *             println("Coroutine $outer finished")
       *         }
       *     }
       * } // will only exit once all `Coroutine X finished` messages are printed
       * ```
       *
       * This is the preferred way to create a [CoroutineScope].
       *
       * ### `CoroutineScope` constructor function
       *
       * When the lifecycle of the scope is not limited lexically
       * (for example, when coroutines should outlive the function that creates them)
       * but is tied to the lifecycle of some entity, the [CoroutineScope] constructor function can be used
       * to define a personal scope for the entity. This scope should be stored as a field in the entity.
       *
       * **The key part of using a custom `CoroutineScope` is cancelling it at the end of the lifecycle.**
       * The [CoroutineScope.cancel] extension function shall be used when the entity launching coroutines
       * is no longer needed. It cancels all the coroutines that might still be running on its behalf.
       *
       * ```
       * class MyEntity(scope: CoroutineScope? = null): AutoCloseable {
       *    // careful: do not write `get() =` here by accident!
       *    private val scope = scope ?: CoroutineScope(SupervisorJob() + CoroutineExceptionHandler { _, e ->
       *        println("Error in coroutine: $e")
       *    })
       *
       *    fun doSomethingWhileEntityExists() = scope.launch {
       *        while (true) {
  - id: live-kotlin-coroutines-coroutine-scope-lines-736-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 736
    endLine: 770
    sha256: 2c323480508df3ef27dd01116ad1b891e96d3d13db58f2090f91465474330be7
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
           */
          override val coroutineContext: CoroutineContext
              get() = EmptyCoroutineContext
      }

      /**
       * Runs the given [block] in-place in a new [CoroutineScope] based on the caller coroutine context,
       * returning its result.
       *
       * The lifecycle of the new [Job] begins with starting the [block] and completes when both the [block] and
       * all the coroutines launched in the scope complete.
       * Only then can the [coroutineScope] call return a value.
       *
       * The context of the new scope is obtained by combining the [currentCoroutineContext] with a new [Job]
       * whose parent is the [Job] of the caller [currentCoroutineContext] (if any).
       * This parent-child relationship ensures that whenever the caller gets cancelled, so does the new scope.
       *
       * The [Job] of the new scope is not a normal child of the caller coroutine but a **lexically scoped** one,
       * meaning that the failure of the [Job] will not affect the parent [Job].
       * Instead, the exception leading to the failure will be rethrown to the caller of this function.
       *
       * If [block] or any child coroutine in this scope fails with an exception,
       * the scope fails, cancelling all the other children and its own [block].
       * See [supervisorScope] for a similar function that allows child coroutines to fail independently.
       *
       * [coroutineScope] is suitable for representing a task that can be split into several subtasks,
       * which can be executed concurrently but have their results combined at some point,
       * all in the span of running a single function:
       *
       * ```
       * // If the current coroutine is cancelled, `firstFile`, `secondFile`,
       * // and `await()` get cancelled.
       * suspend fun downloadAndCompareTwoFiles() = coroutineScope {
       *     val firstFile = async {
       *         // If this fails, `secondFile` and `await()` get cancelled,
  - id: live-kotlin-coroutines-coroutine-scope-lines-771-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 771
    endLine: 805
    sha256: fab5c65bc9fcb79160eeac5e7f6ebfe2308d4492bb5e74560964d4563db02115
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *         // and `downloadAndCompareTwoFiles` rethrows the exception,
       *         // but does not cancel the calling coroutine,
       *         // giving it a chance to recover
       *         downloadFile("1.txt")
       *     }
       *     val secondFile = async {
       *         downloadFile("2.txt")
       *     }
       *     firstFile.await().contentEquals(secondFile.await())
       * }
       * ```
       *
       * There is a **prompt cancellation guarantee**: even if this function is ready to return the result, but was cancelled
       * while suspended, [CancellationException] will be thrown. See [suspendCancellableCoroutine] for low-level details.
       *
       * ## Pitfall: returning closeable resources from a lexically scoped coroutine
       *
       * The returned value must be safe to drop without any extra cleanup. For example, this code is incorrect:
       *
       * ```
       * // DO NOT DO THIS
       * val closeableResource = coroutineScope {
       *     // calculate the closeable resource somehow
       *     obtainResource()
       * }
       * closeableResource.use { resource ->
       *     // use the resource
       * }
       * ```
       *
       * The problem is that, if the caller gets cancelled before [coroutineScope] completes,
       * then even if the calculation of the closeable resource does not suspend at all,
       * [coroutineScope] will throw [CancellationException] instead of returning any value.
       *
       * This pitfall applies to all [coroutineScope]-like functions, like [withContext], [withTimeout], or [supervisorScope].
  - id: live-kotlin-coroutines-coroutine-scope-lines-806-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 806
    endLine: 840
    sha256: 9ddb8c0d8d2b17c690102dcfefbb409eff6ddc657865c7096adca628d64f7264
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * For this discussion, we call them collectively `myLexicalScope`.
       *
       * If it is necessary to process a value returned from a lexical coroutine scope, the following pattern should be used:
       *
       * ```
       * var resource: MyResource? = null
       * try {
       *     // note: do not simply return the resource here!
       *     myLexicalScope {
       *         resource = obtainResource()
       *     }
       *     // the resource is available here
       * } finally {
       *     resource?.close()
       * }
       * ```
       *
       * If cancellation during the acquisition of the resource is also undesired, the following pattern can be used:
       *
       * ```
       * withContext(NonCancellable) {
       *     myLexicalScope {
       *         obtainResource()
       *     }
       * }.use { resource ->
       * }
       * ```
       *
       * See [NonCancellable] for details.
       *
       * Be aware, however, that like any [NonCancellable] usage, this creates the risk of accessing values past the point
       * where they are valid.
       * For example, if the caller coroutine scope is tied to the lifecycle of a UI element, with cancellation meaning
       * that the UI element was already disposed of, accessing the UI during the acquisition of a resource or
       * before the first suspension point in [use] is not allowed and may lead to crashes.
  - id: live-kotlin-coroutines-coroutine-scope-lines-841-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 841
    endLine: 875
    sha256: 9bd31783c1e3b3c3ed06c14d03daea678e796f31b39d6d01fca92665f58ab79f
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       */
      public suspend fun <R> coroutineScope(block: suspend CoroutineScope.() -> R): R {
          contract {
              callsInPlace(block, InvocationKind.EXACTLY_ONCE)
          }
          return suspendCoroutineUninterceptedOrReturn { uCont ->
              val coroutine = ScopeCoroutine(uCont.context, uCont)
              coroutine.startUndispatchedOrReturn(coroutine, block)
          }
      }

      /**
       * Creates a [CoroutineScope] with the given coroutine [context].
       *
       * The provided [context] should contain a [Job], which will represent the lifecycle of the scope and become the parent
       * of any coroutines launched in this scope.
       *
       * If a [Job] is not passed, a new `Job()` is created and added to the context.
       * This is error-prone and should be avoided; it is only provided for backward compatibility.
       *
       * ## Intended usage
       *
       * ### Non-lexically-scoped [supervisorScope]
       *
       * The most common pattern of the `CoroutineScope()` builder function usage is to obtain a scope whose lifetime
       * matches the lifetime of some object, with child coroutines performing operations on that object.
       * Once the object gets destroyed, the coroutines in this scope must be cancelled.
       * This is achieved with this pattern:
       *
       * ```
       * class ThingWithItsOwnLifetime(scope: CoroutineScope? = null): AutoCloseable {
       *     private val scope = scope ?: CoroutineScope(
       *         SupervisorJob() + Dispatchers.Main +
       *         CoroutineExceptionHandler { _, e ->
       *             // handle uncaught coroutine exceptions appropriately
  - id: live-kotlin-coroutines-coroutine-scope-lines-876-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 876
    endLine: 910
    sha256: 14434fb083b35ad7dc39c5224ea4d567d51f1080fdf01c96b48b792b7781ce05
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *         }
       *     )
       *
       *     fun doSomethingWithThing() = scope.launch {
       *         // this computation gets cancelled when the thing gets destroyed
       *     }
       *
       *     override fun close() {
       *         // the computations should all stop running
       *         scope.cancel()
       *     }
       * }
       * ```
       *
       * The `scope` parameter is needed to support injecting coroutine scopes for testing.
       *
       * ### Non-lexically-scoped [coroutineScope]
       *
       * An equivalent to [coroutineScope] represents a group of tasks that work together to achieve one goal and should
       * succeed or fail together.
       *
       * ```
       * class SubtaskPool(scope: CoroutineScope? = null) {
       *     private val job = CompletableDeferred<Unit>()
       *     private val scope = scope ?: CoroutineScope(job + Dispatchers.IO)
       *
       *     fun addPieceOfWork() = scope.launch {
       *         // this coroutine will be cancelled when the pool is closed.
       *         // if this coroutine fails, the pool will fail too
       *     }
       *
       *     fun cancel() {
       *         // this will cancel all the coroutines launched in this scope
       *         job.cancel()
       *     }
  - id: live-kotlin-coroutines-coroutine-scope-lines-911-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 911
    endLine: 945
    sha256: c77f1537db01a08c06ef5f409cd83415664b9e42e8a9b7b4c1e1898df4f3afa8
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *
       *     suspend fun await() {
       *         job.complete(Unit)
       *         job.await()
       *     }
       * }
       * ```
       *
       * ## Pitfalls
       *
       * ### No memoization
       *
       * Every call to this function creates a new instance of [CoroutineScope].
       * If a [Job] instance is passed in the [context], it is less efficient, but is not a bug, as then,
       * the different [CoroutineScope] instances will still represent the same lifecycle and will be cancelled together.
       * However, if the [context] does not contain a [Job], then every created [CoroutineScope]
       * will be unrelated to the previous ones.
       *
       * ```
       * // // 1) ANTIPATTERN! DO NOT WRITE: creates an independent scope every time
       * // val myScope: CoroutineScope get() = CoroutineScope(Dispatchers.Main)
       * // // 2) Write this instead:
       * // val myScope: CoroutineScope       = CoroutineScope(Dispatchers.Main)
       * myScope.launch {
       *     try {
       *         awaitCancellation()
       *     } finally {
       *         println("This line will only be printed in scenario 2)")
       *     }
       * }
       * myScope.cancel()
       * ```
       *
       * ### Forgetting to propagate or handle exceptions
       *
  - id: live-kotlin-coroutines-coroutine-scope-lines-946-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 946
    endLine: 980
    sha256: 5909c8039a79aec900ba192f16527782df0c6203aab4d462e16f9ff0b0f0b886
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       * Every [CoroutineScope] without an explicit [Job] in its context is a potential source of crashes or degraded
       * performance due to logging unhandled exceptions.
       * `CoroutineScope(Dispatchers.Default).launch { error("") }` is enough to crash
       * an Android or Kotlin/Native application.
       * The reason for this is that the [Job] created for this scope does not have a parent,
       * and therefore, there is no way to propagate the exception up the ancestry chain or to the caller of some function.
       *
       * One way to avoid this is to use a [CoroutineExceptionHandler] in the context of the scope:
       *
       * ```
       * val scope = CoroutineScope(
       *     Dispatchers.Default +
       *     CoroutineExceptionHandler { _, e ->
       *         // handle uncaught coroutine exceptions appropriately
       *     }
       * )
       *
       * scope.launch {
       *     error("This is okay") // this will not crash the application
       * }
       * ```
       *
       * Another way is to provide a [Job] that knows how to propagate the exception.
       * See [CoroutineExceptionHandler] for details of how exceptions are propagated.
       * Here is an example of using a [CompletableDeferred] in the scope's [context] to properly handle exceptions:
       *
       * ```
       * val myDeferred = CompletableDeferred<Unit>()
       * try {
       *     val scope = CoroutineScope(myDeferred + Dispatchers.Default)
       *     scope.launch {
       *         error("This is okay") // this will not crash the application
       *     }
       * } finally {
       *     // Do not forget to complete and await the deferred to check for exceptions!
  - id: live-kotlin-coroutines-coroutine-scope-lines-981-source
    kind: code
    resource: https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt
    revision: ead082131ceb45b8e4fda027c74471103c1cd09f
    path: kotlinx-coroutines-core/common/src/CoroutineScope.kt
    startLine: 981
    endLine: 1015
    sha256: 2e358a50d280fe410d6192ca0c751dabc5d85f53fbdd70232eb3189d8ca77ad8
    license: Apache-2.0 (https://github.com/Kotlin/kotlinx.coroutines/blob/master/LICENSE.txt)
    excerpt: |2-
       *     myDeferred.complete(Unit)
       *     // The exceptions from child coroutines will be thrown here:
       *     myDeferred.await()
       * }
       * ```
       *
       * This specific example is not recommended, as it is easier to use [coroutineScope] to achieve a similar effect.
       * However, it is more flexible, as it allows invoking the `finally` block separately.
       *
       * ### Surprising interactions between failing children
       *
       * If a [Job] is not passed in the context of this function explicitly,
       * one is created using the `Job()` constructor function.
       * As opposed to a [SupervisorJob], this [Job] will fail if any of its children fail.
       *
       * ```
       * val scope = CoroutineScope(Dispatchers.Main + CoroutineExceptionHandler { _, e ->
       *    println("Coroutine failed with exception $e")
       * })
       * scope.launch {
       *     updateUI("Operation started!")
       *     // this coroutine will be cancelled
       *     // when the other coroutine fails
       *     delay(2.seconds)
       *     // this line will not be executed
       *     updateUI("Operation finished!")
       * }
       * scope.launch {
       *     error("This will cancel the other coroutines")
       * }
       * ```
       *
       * This behavior is suitable for cases where one task is decomposed into several subtasks,
       * so one failure means the whole operation can no longer succeed and will have to be cancelled.
       * However, in the far more common scenarios where `CoroutineScope()` represents the lifecycle of some entity
compose:
  id: live-kotlin-coroutines-coroutine-scope
  artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
  fqn: kotlinx.coroutines.CoroutineScope
  sections:
    - id: contract-coroutine-normal-child-cancellation
      title: CancellationException does not cancel parent or siblings
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - contract-coroutine-normal-child-cancellation-source
      relatedIds: []
    - id: contract-coroutine-parent-scope-lifetime
      title: Scope cancellation and child completion
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - contract-coroutine-parent-scope-lifetime-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-1
      title: Kotlin structured coroutine scope source (lines 1–35)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-1-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-1016
      title: Kotlin structured coroutine scope source (lines 1016–1050)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-1016-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-1051
      title: Kotlin structured coroutine scope source (lines 1051–1085)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-1051-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-106
      title: Kotlin structured coroutine scope source (lines 106–140)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-106-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-1086
      title: Kotlin structured coroutine scope source (lines 1086–1120)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-1086-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-1121
      title: Kotlin structured coroutine scope source (lines 1121–1155)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-1121-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-1156
      title: Kotlin structured coroutine scope source (lines 1156–1190)
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-1156-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-1191
      title: Kotlin structured coroutine scope source (lines 1191–1225)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-1191-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-1226
      title: Kotlin structured coroutine scope source (lines 1226–1260)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-1226-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-1261
      title: Kotlin structured coroutine scope source (lines 1261–1295)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-1261-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-1296
      title: Kotlin structured coroutine scope source (lines 1296–1308)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-1296-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-141
      title: Kotlin structured coroutine scope source (lines 141–175)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-141-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-176
      title: Kotlin structured coroutine scope source (lines 176–210)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-176-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-211
      title: Kotlin structured coroutine scope source (lines 211–245)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-211-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-246
      title: Kotlin structured coroutine scope source (lines 246–280)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-246-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-281
      title: Kotlin structured coroutine scope source (lines 281–315)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-281-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-316
      title: Kotlin structured coroutine scope source (lines 316–350)
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-316-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-351
      title: Kotlin structured coroutine scope source (lines 351–385)
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-351-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-36
      title: Kotlin structured coroutine scope source (lines 36–70)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-36-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-386
      title: Kotlin structured coroutine scope source (lines 386–420)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-386-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-421
      title: Kotlin structured coroutine scope source (lines 421–455)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-421-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-456
      title: Kotlin structured coroutine scope source (lines 456–490)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-456-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-491
      title: Kotlin structured coroutine scope source (lines 491–525)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-491-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-526
      title: Kotlin structured coroutine scope source (lines 526–560)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-526-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-561
      title: Kotlin structured coroutine scope source (lines 561–595)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-561-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-596
      title: Kotlin structured coroutine scope source (lines 596–630)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-596-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-631
      title: Kotlin structured coroutine scope source (lines 631–665)
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-631-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-666
      title: Kotlin structured coroutine scope source (lines 666–700)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-666-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-701
      title: Kotlin structured coroutine scope source (lines 701–735)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-701-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-71
      title: Kotlin structured coroutine scope source (lines 71–105)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-71-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-736
      title: Kotlin structured coroutine scope source (lines 736–770)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-736-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-771
      title: Kotlin structured coroutine scope source (lines 771–805)
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-771-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-806
      title: Kotlin structured coroutine scope source (lines 806–840)
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-806-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-841
      title: Kotlin structured coroutine scope source (lines 841–875)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-841-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-876
      title: Kotlin structured coroutine scope source (lines 876–910)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-876-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-911
      title: Kotlin structured coroutine scope source (lines 911–945)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-911-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-946
      title: Kotlin structured coroutine scope source (lines 946–980)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-946-source
      relatedIds: []
    - id: live-kotlin-coroutines-coroutine-scope-lines-981
      title: Kotlin structured coroutine scope source (lines 981–1015)
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-kotlin-coroutines-coroutine-scope-lines-981-source
      relatedIds: []
---

# Kotlin structured coroutine scope source

Public source: https://github.com/Kotlin/kotlinx.coroutines/blob/master/kotlinx-coroutines-core/common/src/CoroutineScope.kt

## CancellationException does not cancel parent or siblings

 * If several coroutines fail with non-[CancellationException] exceptions,
 * the first observed failure will be propagated, and the rest will be attached to it as
 * [suppressed exceptions][Throwable.suppressedExceptions].
 *
 * Failing with a [CancellationException] only cancels the coroutine itself and its children.
 * It does not affect the parent or sibling coroutines and is not considered a failure.

Sources: [contract-coroutine-normal-child-cancellation-source](https://github.com/Kotlin/kotlinx.coroutines/blob/7f4d6cf2414937b50291df6169a69afbaf9c5a20/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Scope cancellation and child completion

 * A set of rules called "structured concurrency" ensures that the lifecycles of children
 * are nested inside the lifecycles of their parent scopes.
 * For example, if a scope is cancelled, all coroutines in it are cancelled too, and the scope itself
 * cannot be completed until all its children are completed.
 * See a more detailed explanation of structured concurrency in a separate section below.

Sources: [contract-coroutine-parent-scope-lifetime-source](https://github.com/Kotlin/kotlinx.coroutines/blob/7f4d6cf2414937b50291df6169a69afbaf9c5a20/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 1–35)

@file:OptIn(ExperimentalContracts::class)
@file:Suppress("LEAKED_IN_PLACE_LAMBDA", "WRONG_INVOCATION_KIND")

package kotlinx.coroutines

import kotlinx.coroutines.internal.*
import kotlinx.coroutines.intrinsics.*
import kotlin.contracts.*
import kotlin.coroutines.*
import kotlin.coroutines.intrinsics.*

/**
 * A scope in which coroutines run.
 *
 * A coroutine scope allows managing the lifecycles of several coroutines simultaneously
 * and setting the execution properties with which coroutines (its "children") are launched.
 *
 * Execution properties are [CoroutineContext.Element] values that may affect the behavior of
 * `kotlinx.coroutines`—for example, which thread pool a coroutine should run on.
 * See a more detailed explanation of coroutine context elements in a separate section below.
 *
 * A set of rules called "structured concurrency" ensures that the lifecycles of children
 * are nested inside the lifecycles of their parent scopes.
 * For example, if a scope is cancelled, all coroutines in it are cancelled too, and the scope itself
 * cannot be completed until all its children are completed.
 * See a more detailed explanation of structured concurrency in a separate section below.
 *
 * ## Using coroutine scopes
 *
 * The methods of this interface are not intended to be called directly.
 * Instead, a [CoroutineScope] is passed as a receiver to the coroutine builders such as [launch] and [async]
 * and affects the execution properties and lifetimes of the created coroutines.
 *
 * ## Coroutine context elements
 *

Sources: [live-kotlin-coroutines-coroutine-scope-lines-1-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 1016–1050)

 * that supports multiple independent concurrent operations,
 * this is not the desired behavior.
 *
 * Explicitly using a [SupervisorJob] in the context of the scope is the recommended way to avoid this.
 *
 * ### Unintentionally passing a [Job] in the context
 *
 * Sometimes, a [Job] is passed in the context of this function unintentionally,
 * leading to unpredictable interactions between several scopes.
 *
 * Examples of this include `CoroutineScope(currentCoroutineContext())`, `CoroutineScope(coroutineContext)`,
 * `CoroutineScope(scope.coroutineContext)`, or any variations thereof that add new elements or remove existing ones.
 *
 * In all of these cases, the [Job] passed in the argument will become the [Job] of the newly created [CoroutineScope],
 * meaning this scope will essentially be a view of some other scope,
 * similar to what the [CoroutineScope.plus] operation produces.
 *
 * ```
 * // ANTIPATTERN! DO NOT WRITE SUCH CODE
 * suspend fun foo() {
 *     val scope = CoroutineScope(currentCoroutineContext())
 *     scope.launch {
 *         delay(1.seconds)
 *         println("foo()'s child coroutine finished")
 *     }
 * }
 *
 * suspend fun bar() {
 *     coroutineScope {
 *         foo()
 *         println("foo() finished, but the new coroutine is still running")
 *     }
 * }
 * ```
 *

Sources: [live-kotlin-coroutines-coroutine-scope-lines-1016-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 1051–1085)

 * In this example, the new coroutine will be launched in the scope *of the caller*,
 * and `foo()` will not await the completion of this coroutine.
 * To await the completion, use [coroutineScope] instead:
 *
 * ```
 * suspend fun foo() = coroutineScope {
 *     launch {
 *         delay(1.seconds)
 *         println("foo()'s child coroutine finished")
 *     }
 * } // `foo()` will only return when the child coroutine completes
 *
 * suspend fun bar() {
 *     coroutineScope {
 *         foo()
 *         println("foo() finished, along with its child coroutine")
 *     }
 * }
 * ```
 *
 * If launching a coroutine in the context of the caller is the desired behavior,
 * make it explicit by passing the outer scope as a parameter:
 *
 * ```
 * fun foo(scope: CoroutineScope) {
 *     scope.launch {
 *         delay(1.seconds)
 *         println("foo()'s child coroutine finished")
 *     }
 * }
 *
 * suspend fun bar() {
 *     coroutineScope {
 *         foo(this)
 *         println("foo() created a child coroutine in `this` scope")

Sources: [live-kotlin-coroutines-coroutine-scope-lines-1051-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 106–140)

 *            // do some work
 *            delay(50.milliseconds)
 *            println("Doing something")
 *        }
 *    }
 *
 *    override fun close() {
 *        // cancel all computations related to this entity
 *        scope.cancel()
 *    }
 * }
 *
 * fun main() {
 *     MyEntity().use { entity ->
 *         entity.doSomethingWhileEntityExists()
 *         Thread.sleep(200)
 *     }
 * }
 * ```
 *
 * Usually, a custom [CoroutineScope] should be created with a [SupervisorJob] and
 * a [CoroutineExceptionHandler] to handle exceptions in child coroutines.
 * See the documentation for the [CoroutineScope] constructor function for more details.
 * Also note that `MyEntity` accepts the `scope` parameter that can be used to pass a custom scope for testing.
 *
 * Sometimes, coroutine-aware frameworks provide [CoroutineScope] instances like this out of the box.
 * For example, on Android, all entities with a lifecycle and all `ViewModel` instances expose a [CoroutineScope]:
 * see [the corresponding documentation](https://developer.android.com/topic/libraries/architecture/coroutines).
 *
 * ### Taking another view of an existing scope
 *
 * Occasionally, several coroutines need to be launched with the same additional [CoroutineContext] that is not
 * present in the original scope.
 * In this case, the [CoroutineScope.plus] operator can be used to create a new view of an existing scope:
 *

Sources: [live-kotlin-coroutines-coroutine-scope-lines-106-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 1086–1120)

 *     }
 * }
 * ```
 */
@Suppress("FunctionName")
public fun CoroutineScope(context: CoroutineContext): CoroutineScope =
    ContextScope(if (context[Job] != null) context else context + Job())

/**
 * Cancels this scope, including its job and all its children with an optional cancellation [cause].
 *
 * A cause can be used to specify an error message or to provide other details on
 * a cancellation reason for debugging purposes.
 *
 * Throws [IllegalStateException] if the scope does not have a job in it.
 *
 * This function is shorthand for `coroutineContext[Job]?.cancel(cause) ?: throw IllegalStateException()`.
 *
 * ## Usage
 *
 * ### Cancelling non-lexically scoped coroutines
 *
 * The primary purpose of this function is to cancel a manually created [CoroutineScope] when its lifecycle ends.
 *
 * ```
 * class ThingWithItsOwnLifetime(scope: CoroutineScope? = null): AutoCloseable {
 *     private val scope = scope ?: CoroutineScope(
 *         SupervisorJob() + Dispatchers.Main +
 *         CoroutineExceptionHandler { _, e ->
 *             // handle uncaught coroutine exceptions appropriately
 *         }
 *     )
 *
 *     override fun close() {
 *         // the computations should all stop running

Sources: [live-kotlin-coroutines-coroutine-scope-lines-1086-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 1121–1155)

 *         scope.cancel()
 *     }
 * ```
 *
 * Failing to cancel the scope when it is no longer in active use will lead to resource leaks
 * and can also potentially crash the program if some object used by the child coroutines becomes destroyed.
 *
 * ### Cancelling lexical [CoroutineScope]
 *
 * For lexically scoped coroutines, such as those created with [coroutineScope] or [withContext],
 * canceling the scope explicitly is very rarely required.
 *
 * If no child coroutines were started, but it became obvious that the computation won't be needed,
 * the scope can simply be exited:
 *
 * ```
 * coroutineScope {
 *     if (computationNotNeeded) return@coroutineScope
 *     // Start some child coroutines
 *     // ...
 * }
 * ```
 *
 * Also, if the caller is cancelled, the scope will be cancelled as well, so there is no need to cancel it explicitly.
 *
 * [cancel] may be useful in cases when one child coroutine detects that the whole parent scope is no longer needed
 * and wants to cancel it:
 *
 * ```
 * coroutineScope {
 *     val parentScope = this
 *     launch {
 *         val userRequest = getUserRequest()
 *         if (userRequest == TERMINATE) {
 *             parentScope.cancel()

Sources: [live-kotlin-coroutines-coroutine-scope-lines-1121-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 1156–1190)

 *         }
 *         // Do something with the request
 *         // ...
 *     }
 *     // Start other child coroutines...
 * }
 * ```
 *
 * ## Pitfalls
 *
 * ### Cancelling oneself
 *
 * Cancelling a scope does not mean the computation finishes immediately,
 * as coroutine cancellation [is cooperative](https://kotlinlang.org/docs/cancellation-and-timeouts.html#cancellation-is-cooperative).
 * Only the next suspension point will observe the cancellation.
 * For example:
 *
 * ```
 * try {
 *     coroutineScope {
 *         cancel()
 *         println("Will be printed anyway!")
 *     }
 * } catch (e: CancellationException) {
 *     println(
 *         "The scope was cancelled " +
 *         "(the parent coroutine is still active: ${currentCoroutineContext().isActive})"
 *     )
 *     throw e
 * }
 * ```
 *
 * will output
 *
 * ```

Sources: [live-kotlin-coroutines-coroutine-scope-lines-1156-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 1191–1225)

 * Will be printed anyway!
 * The scope was cancelled (the parent coroutine is still active: true)
 * ```
 *
 * Use `return` to immediately return from the scope after cancelling it:
 *
 * ```
 * coroutineScope {
 *     cancel()
 *     return@coroutineScope
 *     println("Will not be printed")
 * }
 * ```
 */
public fun CoroutineScope.cancel(cause: CancellationException? = null) {
    val job = coroutineContext[Job] ?: error("Scope cannot be cancelled because it does not have a job: $this")
    job.cancel(cause)
}

/**
 * Cancels this scope with a [CancellationException] with the given [message] and [cause].
 *
 * Shorthand for `cancel(CancellationException(message, cause))`.
 */
public fun CoroutineScope.cancel(message: String, cause: Throwable? = null): Unit = cancel(CancellationException(message, cause))

/**
 * Throws the [CancellationException] that was the scope's cancellation cause
 * if the scope is no longer [active][CoroutineScope.isActive].
 *
 * Coroutine cancellation [is cooperative](https://kotlinlang.org/docs/cancellation-and-timeouts.html#cancellation-is-cooperative),
 * and normally, it's checked if a coroutine is cancelled when it *suspends*, for example,
 * when trying to [await][Deferred.await] a [Deferred][kotlinx.coroutines.Deferred] that has not yet completed.
 *
 * Sometimes, a coroutine does not need to perform suspending operations but still wants to be cooperative

Sources: [live-kotlin-coroutines-coroutine-scope-lines-1191-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 1226–1260)

 * and respect cancellation.
 *
 * [ensureActive] function is intended to be used for these scenarios and immediately bubble up the cancellation exception:
 * ```
 * fun backgroundWork() {
 *     println("Doing bookkeeping in the background in a non-suspending manner")
 *     Thread.sleep(100L) // Sleep 100ms
 * }
 * fun postBackgroundCleanup() = println("Doing something else")
 * // Part of some non-trivial CoroutineScope-confined lifecycle
 * launch(Dispatchers.IO) {
 *     while (true) {
 *         // Repeatedly do some background work that is non-suspending
 *         backgroundWork()
 *         ensureActive() // Bail out if the scope was cancelled
 *         postBackgroundCleanup() // Won't be invoked if the scope was cancelled
 *     }
 * }
 * ```
 * This function does not do anything if there is no [Job] in the scope's [coroutineContext][CoroutineScope.coroutineContext].
 *
 * For ensuring that the [current coroutine context][currentCoroutineContext] and not some scope's context
 * [is active][CoroutineContext.isActive], the following form can be used instead:
 *
 * ```
 * suspend fun doSomething() {
 *     // throw if we are not allowed to suspend
 *     currentCoroutineContext().ensureActive()
 *     // ...
 * }
 * ```
 *
 * Alternatively, [yield] can be used to both ensure that [currentCoroutineContext] is active
 * and give other coroutines a chance to run on this thread:
 *

Sources: [live-kotlin-coroutines-coroutine-scope-lines-1226-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 1261–1295)

 * ```
 * suspend fun doSomething() {
 *     // yield the thread to other coroutines
 *     yield()
 *     // ...
 * }
 * ```
 *
 * @see yield for a version that gives other coroutines a chance to run on this thread.
 * @see CoroutineScope.isActive for a version that returns a boolean value instead of throwing an exception.
 */
public fun CoroutineScope.ensureActive(): Unit = coroutineContext.ensureActive()

/**
 * Returns the current [CoroutineContext] retrieved by using [kotlin.coroutines.coroutineContext].
 *
 * This function is an alias to avoid name clash with [CoroutineScope.coroutineContext]:
 *
 * ```
 * // ANTIPATTERN! DO NOT WRITE SUCH CODE
 * suspend fun CoroutineScope.suspendFunWithScope() {
 *     // Name of the CoroutineScope.coroutineContext in 'this' position, same as `this.coroutineContext`
 *     println(coroutineContext[CoroutineName])
 *     // Name of the context that invoked this suspend function, same as `kotlin.coroutines.coroutineContext`
 *     println(currentCoroutineContext()[CoroutineName])
 * }
 *
 * withContext(CoroutineName("Caller")) {
 *     // Will print 'CoroutineName("Receiver")' and 'CoroutineName("Caller")'
 *     CoroutineScope(CoroutineName("Receiver")).suspendFunWithScope()
 * }
 * ```
 *
 * This function should always be preferred over [kotlin.coroutines.coroutineContext] property
 * even when there is no explicit clash.

Sources: [live-kotlin-coroutines-coroutine-scope-lines-1261-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 1296–1308)

 *
 * Usage example:
 *
 * ```
 * // log an event while specifying the current coroutine
 * println("[${currentCoroutineContext()[Job]}] Hello, World!")
 * ```
 *
 * Consider using [coroutineScope] instead of this function to obtain not only the current context
 * but also a new [CoroutineScope] that allows easily launching coroutines and waiting for their completion.
 */
public suspend inline fun currentCoroutineContext(): CoroutineContext = coroutineContext


Sources: [live-kotlin-coroutines-coroutine-scope-lines-1296-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 141–175)

 * ```
 * coroutineScope {
 *     val sameScopeButInUiThread = this + Dispatchers.Main
 *     sameScopeButInUiThread.launch {
 *         println("Running on the main thread")
 *     }
 *     launch {
 *         println("This will run using the original dispatcher")
 *     }
 *     sameScopeButInUiThread.launch {
 *         println("And this will also run on the main thread")
 *     }
 * }
 * ```
 *
 * The lifecycle of the new scope is the same as the original one, but the context includes new elements.
 *
 * ### Application lifecycle scope
 *
 * [GlobalScope] is a [CoroutineScope] that has the lifetime of the whole application.
 * Although it is convenient for launching top-level coroutines that are not tied to the lifecycle of any entity,
 * it is easy to misuse it and create memory or resource leaks when a coroutine actually should be tied
 * to the lifecycle of some entity.
 *
 * ```
 * GlobalScope.launch(CoroutineExceptionHandler { _, e ->
 *     println("Error in coroutine: $e")
 * }) {
 *    while (true) {
 *        println("I will be running forever, you cannot stop me!")
 *        delay(1.seconds)
 *    }
 * }
 * ```
 *

Sources: [live-kotlin-coroutines-coroutine-scope-lines-141-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 176–210)

 * ### `by`-delegation
 *
 * When the approaches listed above are not applicable and a custom [CoroutineScope] implementation is needed,
 * it is recommended to use `by`-delegation to implement the interface:
 *
 * ```
 * class MyEntity : CoroutineScope by CoroutineScope(
 *     SupervisorJob() + Dispatchers.Main + CoroutineExceptionHandler { _, e ->
 *         println("Error in coroutine: $e")
 *     }
 * )
 * ```
 *
 * ## Structured concurrency in detail
 *
 * ### Overview
 *
 * *Structured concurrency* is an approach to concurrent programming that attempts to clarify the lifecycles of
 * concurrent operations and to make them easier to reason about.
 *
 * Skim the following motivating example:
 *
 * ```
 * suspend fun downloadFile(url: String): ByteArray {
 *     return withContext(Dispatchers.IO) {
 *         // this code will execute on a thread for blocking work
 *         val file = byteArrayOf()
 *         // download the file
 *         file
 *     }
 * }
 *
 * suspend fun downloadAndCompareTwoFiles() {
 *     coroutineScope {
 *         val file1 = async {

Sources: [live-kotlin-coroutines-coroutine-scope-lines-176-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 211–245)

 *             // if this fails, everything else quickly fails too
 *             downloadFile("http://example.com/file1")
 *         }
 *         val file2 = async {
 *             downloadFile("http://example.com/file2")
 *         }
 *         launch(Dispatchers.Main) {
 *             // create a separate coroutine on the UI thread
 *             if (file1.await().contentEquals(file2.await())) {
 *                 uiShow("Files are equal")
 *             } else {
 *                 uiShow("Files are not equal")
 *             }
 *         }
 *     }
 *     // this line will only run once all the coroutines created above
 *     // finish their work or get cancelled
 * }
 * ```
 *
 * In this example, two asynchronous operations are launched in parallel to download two files.
 * If one of the files fails to download, the other one is cancelled too, and the whole operation fails.
 * The `coroutineScope` function will not return until all the coroutines inside it are completed or cancelled.
 * In addition, it is possible to cancel the coroutine calling `downloadAndCompareTwoFiles`, and all the coroutines
 * inside it will be cancelled too.
 *
 * Without structured concurrency, ensuring that no resource leaks occur by the end of the operation and that
 * the operation responds promptly to failure and cancellation requests is challenging.
 * With structured concurrency, this orchestration is done automatically by the coroutine library,
 * and it is enough to specify the relationships between operations declaratively, as shown in the example,
 * without being overwhelmed by intricate inter-thread communications.
 *
 * ### Specifics
 *
 * Coroutines and [CoroutineScope] instances have an associated lifecycle.

Sources: [live-kotlin-coroutines-coroutine-scope-lines-211-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 246–280)

 * A runtime representation of a lifecycle in `kotlinx.coroutines` is called a [Job].
 * [Job] instances form a hierarchy of parent-child relationships,
 * and the [Job] of every coroutine spawned in a [CoroutineScope] is a child of the [Job] of that scope.
 * This is often shortened to saying that the coroutine is the scope's child.
 *
 * See the [Job] documentation for a detailed explanation of the lifecycle stages.
 *
 * ```
 * coroutineScope {
 *     val job = coroutineContext[Job]
 *     val childJob = launch { }
 *     check(job === childJob.parent)
 * }
 * ```
 *
 * Because every coroutine has a lifecycle represented by a [Job], a [CoroutineScope] can be associated with it.
 * Most coroutine builders in `kotlinx.coroutines` expose the [CoroutineScope] of the coroutine on creation:
 *
 * ```
 * coroutineScope { // this block has a `CoroutineScope` receiver
 *     val parentScope = this
 *     var grandChildFinished = false
 *     val childJob = launch {
 *         // this block has a `CoroutineScope` receiver, too
 *         val childScope = this
 *         check(childScope.coroutineContext[Job]?.parent
 *             === parentScope.coroutineContext[Job])
 *         launch {
 *             // This block also has a `CoroutineScope` receiver!
 *             val grandChildScope = this
 *             check(grandChildScope.coroutineContext[Job]?.parent
 *                 === childScope.coroutineContext[Job])
 *             delay(100.milliseconds)
 *             grandChildFinished = true
 *         }

Sources: [live-kotlin-coroutines-coroutine-scope-lines-246-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 281–315)

 *         // Because the grandchild coroutine
 *         // is a child of the child coroutine,
 *         // the child coroutine will not complete
 *         // until the grandchild coroutine does.
 *     }
 *     // Await completion of the child coroutine,
 *     // and therefore the grandchild coroutine too.
 *     childJob.join()
 *     check(grandChildFinished)
 * }
 * ```
 *
 * Such a [CoroutineScope] receiver is provided for [launch], [async], and other coroutine builders,
 * as well as for lexically scoping functions like [coroutineScope], [supervisorScope], and [withContext].
 * Each of these [CoroutineScope] instances is tied to the lifecycle of the code block it runs in.
 *
 * Like the example above shows, a coroutine does not complete until all its children are completed.
 * This means that [Job.join] on a [launch] or [async] result or [Deferred.await] on an [async] result
 * will not return until all the children of that coroutine are completed.
 * Likewise, lexically scoping functions like [coroutineScope] and [withContext] will not return
 * until all the coroutines launched in them are completed.
 *
 * #### Interactions between coroutines
 *
 * See the [Job] documentation for a detailed explanation of interactions between [Job] values.
 * Below is a summary of the most important points for structuring code in day-to-day usage.
 *
 * A coroutine cannot reach the final state until all its children have reached their final states.
 * See the example above.
 *
 * If a [CoroutineScope] is cancelled (either explicitly or because it corresponds to some coroutine that failed
 * with an exception), all its children are cancelled too:
 *
 * ```
 * val scope = CoroutineScope(

Sources: [live-kotlin-coroutines-coroutine-scope-lines-281-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 316–350)

 *     SupervisorJob() + CoroutineExceptionHandler { _, e -> }
 * )
 * val job = scope.launch {
 *      // this coroutine will be cancelled
 *      awaitCancellation()
 * }
 * scope.cancel() // comment this out for the line below to hang
 * job.join() // finishes normally
 * ```
 *
 * A failure of a child coroutine causes the parent to fail with the same exception if all of the following conditions
 * are met:
 * 1. The exception is not a [CancellationException].
 * 2. The failed child coroutine was not created with lexically scoped coroutine builders
 *    like [coroutineScope] or [withContext].
 * 3. The parent coroutine's [Job] is not a [SupervisorJob].
 *
 * The same logic applies recursively to the parent of the parent, etc.
 * Example:
 *
 * ```
 * check(
 *     runCatching {
 *         coroutineScope {
 *             launch {
 *                 // This cancels the `coroutineScope` coroutine, since
 *                 // 1. The coroutine fails with a non-`CancellationException` exception,
 *                 // 2. `launch` is not a lexically scoped coroutine builder,
 *                 // 3. `coroutineScope` has a non-supervisor `Job`
 *                 throw IllegalStateException()
 *             }
 *             launch {
 *                 // this coroutine will be cancelled
 *                 // when the parent gets cancelled
 *                 awaitCancellation()

Sources: [live-kotlin-coroutines-coroutine-scope-lines-316-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 351–385)

 *             }
 *         }
 *     }.exceptionOrNull()
 *     is IllegalStateException
 * )
 * // The currently running coroutine will *not* be cancelled
 * // because the failed coroutine (`coroutineScope`) is lexically scoped.
 * check(currentCoroutineContext().isActive)
 * ```
 *
 * Child jobs can lead to the failure of the parent even if the parent has already finished its work
 * and was ready to return a value:
 *
 * ```
 * val deferred = GlobalScope.async {
 *     launch {
 *         delay(100.milliseconds)
 *         throw IllegalStateException()
 *     }
 *     10 // this value will be lost!
 * }
 * check(
 *     runCatching { deferred.await() }.exceptionOrNull()
 *     is IllegalStateException
 * )
 * ```
 *
 * If several coroutines fail with non-[CancellationException] exceptions,
 * the first observed failure will be propagated, and the rest will be attached to it as
 * [suppressed exceptions][Throwable.suppressedExceptions].
 *
 * Failing with a [CancellationException] only cancels the coroutine itself and its children.
 * It does not affect the parent or sibling coroutines and is not considered a failure.
 *
 * ### How-to: stop failures of child coroutines from cancelling other coroutines

Sources: [live-kotlin-coroutines-coroutine-scope-lines-351-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 36–70)

 * A [CoroutineScope] is defined by a set of [CoroutineContext] elements, one of which is typically a [Job],
 * described in the section on structured concurrency and responsible for managing lifetimes of coroutines.
 *
 * Other coroutine context elements include, but are not limited to, the following:
 *
 * - The scheduling policy, represented by a [CoroutineDispatcher] element.
 *   Some commonly used dispatchers are provided in the [Dispatchers] object.
 * - [CoroutineExceptionHandler] that defines how to handle coroutine failures that cannot
 *   be propagated to any other coroutine.
 * - A [CoroutineName] element that can be used to name coroutines for debugging purposes.
 * - On the JVM, a `ThreadContextElement` ensures that a specific thread-local value gets set on the thread
 *   that executes the coroutine.
 *
 * ## Obtaining a coroutine scope
 *
 * Manual implementations of this interface are not recommended.
 * Instead, a [CoroutineScope] should be obtained in a way that reflects the
 * intended structured concurrency relationships.
 *
 * ### Lexical scopes
 *
 * [coroutineScope] and [supervisorScope] functions can be called in any `suspend` function to define a scope
 * lexically, ensuring that all coroutines launched in this scope complete by the time the scope-limiting
 * function exits.
 *
 * ```
 * suspend fun doSomething() = coroutineScope { // scope `A`
 *     repeat(5) { outer ->
 *         // spawn a new coroutine in the scope `A`
 *         launch {
 *             println("Coroutine $outer started")
 *             coroutineScope { // scope `B`, separate for each `outer` coroutine
 *                 repeat(5) { inner ->
 *                     // spawn a new coroutine in the scope `B`
 *                     launch {

Sources: [live-kotlin-coroutines-coroutine-scope-lines-36-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 386–420)

 *
 * If not affecting the [CoroutineScope] on a failure in a child coroutine is the desired behaviour,
 * then a [SupervisorJob] should be used instead of `Job()` when constructing the scope:
 *
 * ```
 * val scope = CoroutineScope(SupervisorJob() + Dispatchers.Main + CoroutineExceptionHandler { _, e ->
 *     println("Coroutine failed with exception $e")
 * })
 * val failingCoroutine = scope.launch(Dispatchers.IO) {
 *     throw IllegalStateException("This exception will not cancel the scope")
 * }
 * failingCoroutine.join()
 * scope.launch(Dispatchers.IO) {
 *     println("This coroutine is active! See: ${isActive}")
 * }
 * ```
 *
 * Likewise, [supervisorScope] can replace [coroutineScope]:
 *
 * ```
 * supervisorScope {
 *     val failingCoroutine = launch(CoroutineExceptionHandler { _, e ->
 *         println("Coroutine failed with exception $e")
 *     }) {
 *         throw IllegalStateException("This exception will not cancel the scope")
 *     }
 *     failingCoroutine.join()
 *     launch {
 *         println("This coroutine is active! See: ${isActive}")
 *     }
 * }
 * ```
 *
 * ### How-to: prevent a child coroutine from being cancelled
 *

Sources: [live-kotlin-coroutines-coroutine-scope-lines-386-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 421–455)

 * Sometimes, you may want to run a coroutine even if the parent coroutine is cancelled.
 * This pattern provides a way to achieve that:
 *
 * ```
 * scope.launch(start = CoroutineStart.ATOMIC) {
 *     // Do not move `NonCancellable` to the `context` argument of `launch`!
 *     withContext(NonCancellable) {
 *         // This code will run even if the parent coroutine is cancelled
 *     }
 * }
 * ```
 *
 * [CoroutineStart.ATOMIC] ensures that the new coroutine is not cancelled until it at least started to execute.
 * [NonCancellable] in [withContext] ensures that the code inside the block is executed even if the coroutine
 * created by [launch] is cancelled.
 */
public interface CoroutineScope {
    /**
     * The context of this scope.
     *
     * The context represents various execution properties of the coroutines launched in this scope,
     * such as the [dispatcher][CoroutineDispatcher] or
     * the [procedure for handling exceptions without a propagation path][CoroutineExceptionHandler].
     * Except [GlobalScope], a [job][Job] instance for enforcing structured concurrency
     * must also be present in the context of every [CoroutineScope].
     * See the documentation of [CoroutineScope] for details.
     *
     * Accessing this property in general code is not recommended for any purposes
     * except accessing the [Job] instance for advanced usages.
     */
    public val coroutineContext: CoroutineContext
}

/**
 * Creates a new view of `this` [CoroutineScope], but with the specified [context] added to it.

Sources: [live-kotlin-coroutines-coroutine-scope-lines-421-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 456–490)

 *
 * This is a shorthand for `CoroutineScope(thisScope.coroutineContext + context)` and can be used as
 * a combinator with existing constructors:
 * ```
 * val myApplicationLifetimeScope = GlobalScope + CoroutineExceptionHandler { _, e ->
 *     myLogger.error("Error in coroutine: $e")
 * }
 * ```
 *
 * **Pitfall**: if [context] contains a [Job], the new job will override the existing one in the scope.
 * This means that in terms of structured concurrency, the new scope will be unrelated to the old one.
 * Because of backward compatibility guarantees, [plus] does not check for this case, even though
 * it is a source of bugs.
 */
public operator fun CoroutineScope.plus(context: CoroutineContext): CoroutineScope =
    ContextScope(coroutineContext + context)

/**
 * Creates a [CoroutineScope] for scheduling UI updates.
 *
 * Usage example:
 * ```
 * class MyAndroidActivity: Activity() {
 *     // be careful not to write `get() =` here by accident!
 *     private val scope = MainScope() + CoroutineExceptionHandler { _, e ->
 *         log("Unhandled error in coroutine: $e")
 *     }
 *
 *     fun updateProgressBar(newValue: Int) = scope.launch {
 *         // this coroutine will run on the main thread
 *         // ...
 *     }
 *
 *     override fun onDestroy() {
 *         super.onDestroy()

Sources: [live-kotlin-coroutines-coroutine-scope-lines-456-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 491–525)

 *         scope.cancel()
 *     }
 * }
 * ```
 *
 * The new scope has [Dispatchers.Main] in its context, meaning that all coroutines launched in it
 * will run on the main thread.
 * It also has a [SupervisorJob] in its context, meaning that if one of the child coroutines fails,
 * the other coroutines will not be affected.
 * A [CoroutineExceptionHandler] is not installed.
 *
 * If you want to append additional elements to the main scope, use the [CoroutineScope.plus] operator:
 * `val scope = MainScope() + CoroutineName("MyActivity")`.
 *
 * **Pitfall**: this scope does not include a [CoroutineExceptionHandler] and creates a job without a parent.
 * Together, this means that if a child coroutine created with [launch] fails with an exception,
 * the failure will be reported in a platform-specific manner (e.g., a crash on Android).
 * Always supply a [CoroutineExceptionHandler] to [MainScope] using the [plus] operator if there is a chance
 * that a child coroutine may fail with an exception,
 * or use [async] instead of [launch] to have the consumer of the result handle the exception.
 *
 * **Pitfall**: there is no memoization of the [CoroutineScope] instance in this function.
 * Every call to this function creates a new instance of [MainScope], with an unrelated [SupervisorJob].
 * For example, writing `MainScope().cancel()` is meaningless,
 * because the only job that will be cancelled is the one created in that specific `MainScope()` call.
 */
@Suppress("FunctionName")
public fun MainScope(): CoroutineScope = ContextScope(SupervisorJob() + Dispatchers.Main)

/**
 * Returns `true` when the [Job] of this [CoroutineScope] is still active (has not completed and was not cancelled yet).
 *
 * Coroutine cancellation [is cooperative](https://kotlinlang.org/docs/cancellation-and-timeouts.html#cancellation-is-cooperative),
 * and usually, it's checked if a coroutine is cancelled when it *suspends*, for example,
 * when trying to [await][Deferred.await] a [Deferred][kotlinx.coroutines.Deferred] that has not yet completed.

Sources: [live-kotlin-coroutines-coroutine-scope-lines-491-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 526–560)

 *
 * Sometimes, a coroutine does not need to perform suspending operations but still wants to be cooperative
 * and respect cancellation.
 *
 * The [isActive] property is intended to be used for scenarios like this:
 * ```
 * fun backgroundWork() {
 *     println("Doing bookkeeping in the background in a blocking manner")
 *     Thread.sleep(100L) // Sleep 100ms
 * }
 * // Part of some non-trivial CoroutineScope-confined lifecycle
 * launch(Dispatchers.IO) {
 *     while (isActive) {
 *         // Repetitively do some background work that is non-suspending
 *         backgroundWork()
 *     }
 * }
 * ```
 *
 * This function returns `true` if the scope does not contain a [Job] in its
 * [context][CoroutineScope.coroutineContext].
 * This can only happen for [GlobalScope] and malformed coroutine scopes.
 *
 * For checking if the [current coroutine context][currentCoroutineContext] and not some scope's context
 * [is active][CoroutineContext.isActive], the following form can be used instead:
 *
 * ```
 * suspend fun tryDoSomething() {
 *     if (!currentCoroutineContext().isActive) return
 *     // ...
 * }
 * ```
 *
 * @see CoroutineScope.ensureActive for a function that throws an exception instead of returning a boolean value.
 */

Sources: [live-kotlin-coroutines-coroutine-scope-lines-526-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 561–595)

@Suppress("EXTENSION_SHADOWED_BY_MEMBER")
public val CoroutineScope.isActive: Boolean
    get() = coroutineContext[Job]?.isActive ?: true

/**
 * A [CoroutineScope] without any [Job].
 *
 * The global scope is used to launch top-level coroutines whose lifecycles are not limited by structured concurrency.
 * Since [GlobalScope] does not have a [Job], it is impossible to cancel all coroutines launched in it.
 * Likewise, there is no way to wait for all coroutines launched in it to finish.
 *
 * This is a **delicate** API. [GlobalScope] is easy to use to create new coroutines,
 * avoiding all bureaucracy of structured concurrency, but it also means losing all its benefits.
 * See the [CoroutineScope] documentation for a detailed explanation of structured concurrency and a list of ways
 * to obtain a [CoroutineScope] most suitable for your use case.
 *
 * ## Pitfalls
 *
 * ### Computations can happen when they have no right to or are no longer needed
 *
 * Some computations must be scoped to the lifecycle of some entity.
 * For example, after a user leaves a screen in a UI application,
 * it no longer makes sense to obtain the data needed to display that screen,
 * and attempting to update the UI may even crash the application.
 *
 * ```
 * GlobalScope.launch {
 *     val record = withContext(Dispatchers.IO) {
 *         fetchLastRecordFromServer()
 *     }
 *     withContext(Dispatchers.Main) {
 *         component.displayLastRecord(record)
 *     }
 * }
 * ```

Sources: [live-kotlin-coroutines-coroutine-scope-lines-561-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 596–630)

 *
 * This code is incorrect because it does not take into account the lifecycle of the component:
 * the whole computation should be cancelled if the component is destroyed.
 *
 * If a coroutine spawned in the [GlobalScope] actually is tied to a lifecycle of some entity to function correctly,
 * the created coroutines must somehow be stored and then cancelled when the entity is destroyed.
 * The easiest way to do this is to create a [CoroutineScope] using the constructor function,
 * use it to launch the coroutines, and then cancel it when the entity is destroyed,
 * which will also lead to the coroutines being cancelled.
 *
 * ### Resource leaks
 *
 * A coroutine that never gets cancelled or resumed can be a resource leak.
 *
 * ```
 * val requests = Channel<Request>()
 * GlobalScope.launch {
 *     try {
 *         while (true) {
 *             val request = channel.receive()
 *             socket.send(request)
 *         }
 *     } finally {
 *         socket.close()
 *     }
 * }
 * ```
 *
 * If at some point, everyone stops populating the channel, the coroutine will never resume or cancel,
 * and the socket will not be closed, leading to a resource leak.
 *
 * Tying the coroutine to some lifecycle will ensure that the coroutine will get cancelled when its work
 * is no longer needed, releasing all resources it holds.
 *
 * ### Crashes

Sources: [live-kotlin-coroutines-coroutine-scope-lines-596-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 631–665)

 *
 * [GlobalScope] does not have a [CoroutineExceptionHandler] installed.
 * This means that exceptions thrown in coroutines created using [launch] will lead to platform-specific
 * last-resort error propagation behavior, such as crashing the application (on Android, Kotlin/Native, and JS)
 * or populating the logs with potentially unnecessary information (on non-Android JVM).
 * Please see [CoroutineExceptionHandler] for details.
 *
 * ```
 * GlobalScope.launch {
 *     // depending on your platform, this line can crash your application
 *     throw IllegalStateException()
 * }
 * ```
 *
 * One way to solve this would be to provide a [CoroutineExceptionHandler] in the [launch] arguments.
 * However, it is often much simpler to use structured concurrency
 * to ensure propagation of exceptions to the parent coroutine,
 * which usually has a way to report them: for example, [coroutineScope] or `runBlocking` will rethrow the exception
 * to the caller.
 *
 * ## How to create coroutines if not with a [GlobalScope]?
 *
 * [GlobalScope] is often used by beginners who do not see any other obvious way to create coroutines.
 * This is an antipattern and should be avoided. In this section, a brief overview of the alternatives is provided.
 *
 * In many typical usage scenarios, it is not necessary to spawn new coroutines at all to run `suspend` functions.
 * Several coroutines are needed only if the code is expected to run concurrently,
 * and when the operation execute one after another, all `suspend` functions can be called sequentially:
 *
 * ```
 * suspend fun loadConfiguration() {
 *     val config = fetchConfigFromServer() // network request
 *     updateConfiguration(config)
 * }
 * ```

Sources: [live-kotlin-coroutines-coroutine-scope-lines-631-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 666–700)

 *
 * This requires that `loadConfiguration` is a `suspend` function, which is not always the case.
 * Many coroutine-aware frameworks manage coroutine scopes for you and provide a way to call `suspend` functions
 * (for example, by requiring you to provide a `suspend` lambda).
 * Try to see if the function is already called from some other `suspend` function.
 * If so, you can add the `suspend` modifier to this function and call it directly.
 *
 * If a [CoroutineScope] is necessary after all because several operations need to be run concurrently
 * in the span of a single function call,
 * the [coroutineScope] function can be used to create a new scope for the function:
 *
 * ```
 * // concurrently load configuration and data
 * suspend fun loadConfigurationAndData() {
 *     coroutineScope {
 *         launch { loadConfiguration() }
 *         launch { loadData() }
 *     }
 * }
 * ```
 *
 * A useful pattern is to use [withContext] in a top-level `suspend fun main()` function:
 *
 * ```
 * suspend fun main() {
 *     // choose the dispatcher on which the coroutines should run
 *     withContext(Dispatchers.Default) {
 *         // can call `suspend` functions here!
 *     }
 * }
 * ```
 *
 * In top-level code, when launching a concurrent operation from a non-suspending context, an appropriately
 * confined instance of [CoroutineScope] shall be used instead of `GlobalScope`.
 *

Sources: [live-kotlin-coroutines-coroutine-scope-lines-666-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 701–735)

 * See docs for the [CoroutineScope] interface
 * for details on structured concurrency and an extensive list of ways to obtain a [CoroutineScope].
 *
 * ### GlobalScope vs. Custom CoroutineScope
 *
 * Do not replace `GlobalScope.launch { ... }` with a `CoroutineScope().launch { ... }` constructor function call.
 * The latter suffers from all the pitfalls described above.
 * See the [CoroutineScope] documentation on the intended usage of the `CoroutineScope()` constructor function.
 *
 * ### Legitimate use cases
 *
 * There are limited circumstances under which `GlobalScope` can be legitimately and safely used,
 * such as top-level background processes that must stay active for the whole duration of the application's lifetime.
 * Because of that, any use of `GlobalScope` requires an explicit opt-in with `@OptIn(DelicateCoroutinesApi::class)`,
 * like this:
 *
 * ```
 * // A global coroutine to log statistics every second, must be always active
 * @OptIn(DelicateCoroutinesApi::class)
 * val globalScopeReporter = GlobalScope.launch(CoroutineExceptionHandler { _, e ->
 *     logFatalError("Error in the global statistics-logging coroutine: $e")
 * }) {
 *     while (true) {
 *         delay(1.seconds)
 *         logStatistics()
 *     }
 * }
 * ```
 */
@DelicateCoroutinesApi
public object GlobalScope : CoroutineScope {
    /**
     * Returns [EmptyCoroutineContext].
     *
     * Note that, unlike other [CoroutineScope] implementations, this scope does not have a [Job] in its context.

Sources: [live-kotlin-coroutines-coroutine-scope-lines-701-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 71–105)

 *                         println("Coroutine $outer.$inner started")
 *                         delay(10.milliseconds)
 *                         println("Coroutine $outer.$inner finished")
 *                     }
 *                 }
 *             }
 *             // will only exit once all `Coroutine $outer.X finished` messages are printed
 *             println("Coroutine $outer finished")
 *         }
 *     }
 * } // will only exit once all `Coroutine X finished` messages are printed
 * ```
 *
 * This is the preferred way to create a [CoroutineScope].
 *
 * ### `CoroutineScope` constructor function
 *
 * When the lifecycle of the scope is not limited lexically
 * (for example, when coroutines should outlive the function that creates them)
 * but is tied to the lifecycle of some entity, the [CoroutineScope] constructor function can be used
 * to define a personal scope for the entity. This scope should be stored as a field in the entity.
 *
 * **The key part of using a custom `CoroutineScope` is cancelling it at the end of the lifecycle.**
 * The [CoroutineScope.cancel] extension function shall be used when the entity launching coroutines
 * is no longer needed. It cancels all the coroutines that might still be running on its behalf.
 *
 * ```
 * class MyEntity(scope: CoroutineScope? = null): AutoCloseable {
 *    // careful: do not write `get() =` here by accident!
 *    private val scope = scope ?: CoroutineScope(SupervisorJob() + CoroutineExceptionHandler { _, e ->
 *        println("Error in coroutine: $e")
 *    })
 *
 *    fun doSomethingWhileEntityExists() = scope.launch {
 *        while (true) {

Sources: [live-kotlin-coroutines-coroutine-scope-lines-71-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 736–770)

     */
    override val coroutineContext: CoroutineContext
        get() = EmptyCoroutineContext
}

/**
 * Runs the given [block] in-place in a new [CoroutineScope] based on the caller coroutine context,
 * returning its result.
 *
 * The lifecycle of the new [Job] begins with starting the [block] and completes when both the [block] and
 * all the coroutines launched in the scope complete.
 * Only then can the [coroutineScope] call return a value.
 *
 * The context of the new scope is obtained by combining the [currentCoroutineContext] with a new [Job]
 * whose parent is the [Job] of the caller [currentCoroutineContext] (if any).
 * This parent-child relationship ensures that whenever the caller gets cancelled, so does the new scope.
 *
 * The [Job] of the new scope is not a normal child of the caller coroutine but a **lexically scoped** one,
 * meaning that the failure of the [Job] will not affect the parent [Job].
 * Instead, the exception leading to the failure will be rethrown to the caller of this function.
 *
 * If [block] or any child coroutine in this scope fails with an exception,
 * the scope fails, cancelling all the other children and its own [block].
 * See [supervisorScope] for a similar function that allows child coroutines to fail independently.
 *
 * [coroutineScope] is suitable for representing a task that can be split into several subtasks,
 * which can be executed concurrently but have their results combined at some point,
 * all in the span of running a single function:
 *
 * ```
 * // If the current coroutine is cancelled, `firstFile`, `secondFile`,
 * // and `await()` get cancelled.
 * suspend fun downloadAndCompareTwoFiles() = coroutineScope {
 *     val firstFile = async {
 *         // If this fails, `secondFile` and `await()` get cancelled,

Sources: [live-kotlin-coroutines-coroutine-scope-lines-736-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 771–805)

 *         // and `downloadAndCompareTwoFiles` rethrows the exception,
 *         // but does not cancel the calling coroutine,
 *         // giving it a chance to recover
 *         downloadFile("1.txt")
 *     }
 *     val secondFile = async {
 *         downloadFile("2.txt")
 *     }
 *     firstFile.await().contentEquals(secondFile.await())
 * }
 * ```
 *
 * There is a **prompt cancellation guarantee**: even if this function is ready to return the result, but was cancelled
 * while suspended, [CancellationException] will be thrown. See [suspendCancellableCoroutine] for low-level details.
 *
 * ## Pitfall: returning closeable resources from a lexically scoped coroutine
 *
 * The returned value must be safe to drop without any extra cleanup. For example, this code is incorrect:
 *
 * ```
 * // DO NOT DO THIS
 * val closeableResource = coroutineScope {
 *     // calculate the closeable resource somehow
 *     obtainResource()
 * }
 * closeableResource.use { resource ->
 *     // use the resource
 * }
 * ```
 *
 * The problem is that, if the caller gets cancelled before [coroutineScope] completes,
 * then even if the calculation of the closeable resource does not suspend at all,
 * [coroutineScope] will throw [CancellationException] instead of returning any value.
 *
 * This pitfall applies to all [coroutineScope]-like functions, like [withContext], [withTimeout], or [supervisorScope].

Sources: [live-kotlin-coroutines-coroutine-scope-lines-771-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 806–840)

 * For this discussion, we call them collectively `myLexicalScope`.
 *
 * If it is necessary to process a value returned from a lexical coroutine scope, the following pattern should be used:
 *
 * ```
 * var resource: MyResource? = null
 * try {
 *     // note: do not simply return the resource here!
 *     myLexicalScope {
 *         resource = obtainResource()
 *     }
 *     // the resource is available here
 * } finally {
 *     resource?.close()
 * }
 * ```
 *
 * If cancellation during the acquisition of the resource is also undesired, the following pattern can be used:
 *
 * ```
 * withContext(NonCancellable) {
 *     myLexicalScope {
 *         obtainResource()
 *     }
 * }.use { resource ->
 * }
 * ```
 *
 * See [NonCancellable] for details.
 *
 * Be aware, however, that like any [NonCancellable] usage, this creates the risk of accessing values past the point
 * where they are valid.
 * For example, if the caller coroutine scope is tied to the lifecycle of a UI element, with cancellation meaning
 * that the UI element was already disposed of, accessing the UI during the acquisition of a resource or
 * before the first suspension point in [use] is not allowed and may lead to crashes.

Sources: [live-kotlin-coroutines-coroutine-scope-lines-806-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 841–875)

 */
public suspend fun <R> coroutineScope(block: suspend CoroutineScope.() -> R): R {
    contract {
        callsInPlace(block, InvocationKind.EXACTLY_ONCE)
    }
    return suspendCoroutineUninterceptedOrReturn { uCont ->
        val coroutine = ScopeCoroutine(uCont.context, uCont)
        coroutine.startUndispatchedOrReturn(coroutine, block)
    }
}

/**
 * Creates a [CoroutineScope] with the given coroutine [context].
 *
 * The provided [context] should contain a [Job], which will represent the lifecycle of the scope and become the parent
 * of any coroutines launched in this scope.
 *
 * If a [Job] is not passed, a new `Job()` is created and added to the context.
 * This is error-prone and should be avoided; it is only provided for backward compatibility.
 *
 * ## Intended usage
 *
 * ### Non-lexically-scoped [supervisorScope]
 *
 * The most common pattern of the `CoroutineScope()` builder function usage is to obtain a scope whose lifetime
 * matches the lifetime of some object, with child coroutines performing operations on that object.
 * Once the object gets destroyed, the coroutines in this scope must be cancelled.
 * This is achieved with this pattern:
 *
 * ```
 * class ThingWithItsOwnLifetime(scope: CoroutineScope? = null): AutoCloseable {
 *     private val scope = scope ?: CoroutineScope(
 *         SupervisorJob() + Dispatchers.Main +
 *         CoroutineExceptionHandler { _, e ->
 *             // handle uncaught coroutine exceptions appropriately

Sources: [live-kotlin-coroutines-coroutine-scope-lines-841-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 876–910)

 *         }
 *     )
 *
 *     fun doSomethingWithThing() = scope.launch {
 *         // this computation gets cancelled when the thing gets destroyed
 *     }
 *
 *     override fun close() {
 *         // the computations should all stop running
 *         scope.cancel()
 *     }
 * }
 * ```
 *
 * The `scope` parameter is needed to support injecting coroutine scopes for testing.
 *
 * ### Non-lexically-scoped [coroutineScope]
 *
 * An equivalent to [coroutineScope] represents a group of tasks that work together to achieve one goal and should
 * succeed or fail together.
 *
 * ```
 * class SubtaskPool(scope: CoroutineScope? = null) {
 *     private val job = CompletableDeferred<Unit>()
 *     private val scope = scope ?: CoroutineScope(job + Dispatchers.IO)
 *
 *     fun addPieceOfWork() = scope.launch {
 *         // this coroutine will be cancelled when the pool is closed.
 *         // if this coroutine fails, the pool will fail too
 *     }
 *
 *     fun cancel() {
 *         // this will cancel all the coroutines launched in this scope
 *         job.cancel()
 *     }

Sources: [live-kotlin-coroutines-coroutine-scope-lines-876-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 911–945)

 *
 *     suspend fun await() {
 *         job.complete(Unit)
 *         job.await()
 *     }
 * }
 * ```
 *
 * ## Pitfalls
 *
 * ### No memoization
 *
 * Every call to this function creates a new instance of [CoroutineScope].
 * If a [Job] instance is passed in the [context], it is less efficient, but is not a bug, as then,
 * the different [CoroutineScope] instances will still represent the same lifecycle and will be cancelled together.
 * However, if the [context] does not contain a [Job], then every created [CoroutineScope]
 * will be unrelated to the previous ones.
 *
 * ```
 * // // 1) ANTIPATTERN! DO NOT WRITE: creates an independent scope every time
 * // val myScope: CoroutineScope get() = CoroutineScope(Dispatchers.Main)
 * // // 2) Write this instead:
 * // val myScope: CoroutineScope       = CoroutineScope(Dispatchers.Main)
 * myScope.launch {
 *     try {
 *         awaitCancellation()
 *     } finally {
 *         println("This line will only be printed in scenario 2)")
 *     }
 * }
 * myScope.cancel()
 * ```
 *
 * ### Forgetting to propagate or handle exceptions
 *

Sources: [live-kotlin-coroutines-coroutine-scope-lines-911-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 946–980)

 * Every [CoroutineScope] without an explicit [Job] in its context is a potential source of crashes or degraded
 * performance due to logging unhandled exceptions.
 * `CoroutineScope(Dispatchers.Default).launch { error("") }` is enough to crash
 * an Android or Kotlin/Native application.
 * The reason for this is that the [Job] created for this scope does not have a parent,
 * and therefore, there is no way to propagate the exception up the ancestry chain or to the caller of some function.
 *
 * One way to avoid this is to use a [CoroutineExceptionHandler] in the context of the scope:
 *
 * ```
 * val scope = CoroutineScope(
 *     Dispatchers.Default +
 *     CoroutineExceptionHandler { _, e ->
 *         // handle uncaught coroutine exceptions appropriately
 *     }
 * )
 *
 * scope.launch {
 *     error("This is okay") // this will not crash the application
 * }
 * ```
 *
 * Another way is to provide a [Job] that knows how to propagate the exception.
 * See [CoroutineExceptionHandler] for details of how exceptions are propagated.
 * Here is an example of using a [CompletableDeferred] in the scope's [context] to properly handle exceptions:
 *
 * ```
 * val myDeferred = CompletableDeferred<Unit>()
 * try {
 *     val scope = CoroutineScope(myDeferred + Dispatchers.Default)
 *     scope.launch {
 *         error("This is okay") // this will not crash the application
 *     }
 * } finally {
 *     // Do not forget to complete and await the deferred to check for exceptions!

Sources: [live-kotlin-coroutines-coroutine-scope-lines-946-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)

## Kotlin structured coroutine scope source (lines 981–1015)

 *     myDeferred.complete(Unit)
 *     // The exceptions from child coroutines will be thrown here:
 *     myDeferred.await()
 * }
 * ```
 *
 * This specific example is not recommended, as it is easier to use [coroutineScope] to achieve a similar effect.
 * However, it is more flexible, as it allows invoking the `finally` block separately.
 *
 * ### Surprising interactions between failing children
 *
 * If a [Job] is not passed in the context of this function explicitly,
 * one is created using the `Job()` constructor function.
 * As opposed to a [SupervisorJob], this [Job] will fail if any of its children fail.
 *
 * ```
 * val scope = CoroutineScope(Dispatchers.Main + CoroutineExceptionHandler { _, e ->
 *    println("Coroutine failed with exception $e")
 * })
 * scope.launch {
 *     updateUI("Operation started!")
 *     // this coroutine will be cancelled
 *     // when the other coroutine fails
 *     delay(2.seconds)
 *     // this line will not be executed
 *     updateUI("Operation finished!")
 * }
 * scope.launch {
 *     error("This will cancel the other coroutines")
 * }
 * ```
 *
 * This behavior is suitable for cases where one task is decomposed into several subtasks,
 * so one failure means the whole operation can no longer succeed and will have to be cancelled.
 * However, in the far more common scenarios where `CoroutineScope()` represents the lifecycle of some entity

Sources: [live-kotlin-coroutines-coroutine-scope-lines-981-source](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt)
