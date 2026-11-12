---
type: reference
title: Best practices for coroutines in Android
description: "Public source: https://developer.android.com/kotlin/coroutines/coroutines-best-practices"
tags:
  - Compose
  - Android
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
  - id: live-android-coroutines-best-practices-coroutines-data-layer-source
    kind: guide
    resource: https://developer.android.com/kotlin/coroutines/coroutines-best-practices#coroutines-data-layer
    revision: web:android-coroutines-best-practices:content@sha256:48e6344d9e8450c3342af934a887158d3e663dda9170f17d80ad49867c4b0b34
    sha256: 1bc512165179b6cc6f18c807a592e2c6bccdeabdc2d783877fdce0758decd02d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Classes in the data and business layers generally expose functions to perform one-shot calls or to be notified of data changes over time. Classes in those layers should expose suspend functions for one-shot calls and Flow to notify about data changes.

      // Classes in the data and business layer expose
      // either suspend functions or Flows
      class ExampleRepository {
          suspend fun makeNetworkRequest() { /* ... */ }

          fun getExamples(): Flow<Example> {
              /* ... */
          }
      }CoroutinesBestPractices.kt

      This best practice makes the caller, generally the presentation layer, able to control the execution and lifecycle of the work happening in those layers, and cancel when needed.
  - id: live-android-coroutines-best-practices-create-coroutines-data-layer-source
    kind: guide
    resource: https://developer.android.com/kotlin/coroutines/coroutines-best-practices#create-coroutines-data-layer
    revision: web:android-coroutines-best-practices:content@sha256:48e6344d9e8450c3342af934a887158d3e663dda9170f17d80ad49867c4b0b34
    sha256: 885f5c6951d86e78ef73b27f96bb22d2cd32b33c4930e8dc36fffbc7f7c8fd18
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      For classes in the data or business layer that need to create coroutines for different reasons, there are different options.

      If the work to be done in those coroutines is relevant only when the user is present on the current screen, it should follow the caller's lifecycle. In most cases, the caller will be the ViewModel, and the call will be cancelled when the user navigates away from the screen and the ViewModel is cleared. In this case, coroutineScope or supervisorScope should be used.

      class GetAllBooksAndAuthorsUseCase(
          private val booksRepository: BooksRepository,
          private val authorsRepository: AuthorsRepository,
      ) {
          suspend fun getBookAndAuthors(): BookAndAuthors {
              // In parallel, fetch books and authors and return when both requests
              // complete and the data is ready
              return coroutineScope {
                  val books = async { booksRepository.getAllBooks() }
                  val authors = async { authorsRepository.getAllAuthors() }
                  BookAndAuthors(books.await(), authors.await())
              }
          }
      }CoroutinesBestPractices.kt

      If the work to be done is relevant as long as the app is opened, and the work is not bound to a particular screen, then the work should outlive the caller's lifecycle. For this scenario, an external CoroutineScope should be used as explained in the Coroutines & Patterns for work that shouldn’t be cancelled blog post.

      class ArticlesRepository(
          private val articlesDataSource: ArticlesDataSource,
          private val externalScope: CoroutineScope,
      ) {
          // As we want to complete bookmarking the article even if the user moves
          // away from the screen, the work is done creating a new coroutine
          // from an external scope
          suspend fun bookmarkArticle(article: Article) {
              externalScope.launch { articlesDataSource.bookmarkArticle(article) }
                  .join() // Wait for the coroutine to complete
          }
      }CoroutinesBestPractices.kt

      externalScope should be created and managed by a class that lives longer than the current screen, it could be managed by the Application class or a ViewModel scoped to a navigation graph.
  - id: live-android-coroutines-best-practices-exceptions-source
    kind: guide
    resource: https://developer.android.com/kotlin/coroutines/coroutines-best-practices#exceptions
    revision: web:android-coroutines-best-practices:content@sha256:48e6344d9e8450c3342af934a887158d3e663dda9170f17d80ad49867c4b0b34
    sha256: 6495e8acdb9d52c6667001d51a40cf350b53fc9c526e969d25f52cac3ea7f42b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Unhandled exceptions thrown in coroutines can make your app crash. If exceptions are likely to happen, catch them in the body of any coroutines created with viewModelScope or lifecycleScope.

      class LoginViewModel(
          private val loginRepository: LoginRepository
      ) : ViewModel() {

          fun login(username: String, token: String) {
              viewModelScope.launch {
                  try {
                      loginRepository.login(username, token)
                      // Update UI, user logged in successfully
                  } catch (exception: IOException) {
                      // Update UI, login attempt failed
                  }
              }
          }
      }CoroutinesBestPractices.kt

      For more information, check out the blog post Exceptions in coroutines, or Coroutine exceptions handling in the Kotlin documentation.
  - id: live-android-coroutines-best-practices-global-scope-source
    kind: guide
    resource: https://developer.android.com/kotlin/coroutines/coroutines-best-practices#global-scope
    revision: web:android-coroutines-best-practices:content@sha256:48e6344d9e8450c3342af934a887158d3e663dda9170f17d80ad49867c4b0b34
    sha256: df098a1c3660b504fb60d6efa8f061cc75640f8c1b29759844425714665cdf7a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This is similar to the Inject Dispatchers best practice. By using GlobalScope, you're hardcoding the CoroutineScope that a class uses bringing some downsides with it:

      Promotes hard-coding values. If you hardcode GlobalScope, you might be hard-coding Dispatchers as well.

      Makes testing very hard as your code is executed in an uncontrolled scope, you won't be able to control its execution.

      You can't have a common CoroutineContext to execute for all coroutines built into the scope itself.

      Instead, consider injecting a CoroutineScope for work that needs to outlive the current scope. Check out the Creating coroutines in the business and data layer section to learn more about this topic.

      // DO inject an external scope instead of using GlobalScope.
      // GlobalScope can be used indirectly. Here as a default parameter makes sense.
      class ArticlesRepository(
          private val articlesDataSource: ArticlesDataSource,
          private val externalScope: CoroutineScope = GlobalScope,
          private val defaultDispatcher: CoroutineDispatcher = Dispatchers.Default
      ) {
          // As we want to complete bookmarking the article even if the user moves
          // away from the screen, the work is done creating a new coroutine
          // from an external scope
          suspend fun bookmarkArticle(article: Article) {
              externalScope.launch(defaultDispatcher) {
                  articlesDataSource.bookmarkArticle(article)
              }
                  .join() // Wait for the coroutine to complete
          }
      }CoroutinesBestPractices.kt

      // DO NOT use GlobalScope directly
      class ArticlesRepository(
          private val articlesDataSource: ArticlesDataSource,
      ) {
          // As we want to complete bookmarking the article even if the user moves away
          // from the screen, the work is done creating a new coroutine with GlobalScope
          suspend fun bookmarkArticle(article: Article) {
              GlobalScope.launch {
                  articlesDataSource.bookmarkArticle(article)
              }
                  .join() // Wait for the coroutine to complete
          }
      }CoroutinesBestPractices.kt

      Learn more about GlobalScope and its alternatives in the Coroutines & Patterns for work that shouldn’t be cancelled blog post.
  - id: live-android-coroutines-best-practices-inject-dispatchers-source
    kind: guide
    resource: https://developer.android.com/kotlin/coroutines/coroutines-best-practices#inject-dispatchers
    revision: web:android-coroutines-best-practices:content@sha256:48e6344d9e8450c3342af934a887158d3e663dda9170f17d80ad49867c4b0b34
    sha256: 8197032a9eabcb99ba287635649190decc2456cc22575c236027d5ac9abae62c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Don't hardcode Dispatchers when creating new coroutines or calling withContext.

      // DO inject Dispatchers
      class NewsRepository(
          private val defaultDispatcher: CoroutineDispatcher = Dispatchers.Default
      ) {
          suspend fun loadNews() = withContext(defaultDispatcher) { /* ... */ }
      }

      // DO NOT hardcode Dispatchers
      class NewsRepository {
          // DO NOT use Dispatchers.Default directly, inject it instead
          suspend fun loadNews() = withContext(Dispatchers.Default) { /* ... */ }
      }CoroutinesBestPractices.kt

      This dependency injection pattern makes testing easier as you can replace those dispatchers in unit and instrumentation tests with a test dispatcher to make your tests more deterministic.
  - id: live-android-coroutines-best-practices-main-content-source
    kind: guide
    resource: https://developer.android.com/kotlin/coroutines/coroutines-best-practices#main-content
    revision: web:android-coroutines-best-practices:content@sha256:48e6344d9e8450c3342af934a887158d3e663dda9170f17d80ad49867c4b0b34
    sha256: 2245f739101a34730fb98194653c509570975d4dd8953dce023cb8bbd651121c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: This page presents several best practices that have a positive impact by making your app more scalable and testable when using coroutines.
  - id: live-android-coroutines-best-practices-main-safe-source
    kind: guide
    resource: https://developer.android.com/kotlin/coroutines/coroutines-best-practices#main-safe
    revision: web:android-coroutines-best-practices:content@sha256:48e6344d9e8450c3342af934a887158d3e663dda9170f17d80ad49867c4b0b34
    sha256: eb7cd4852ef72b5e9e68e189b49046dd810f2e0bf5dae2a1edb3844b570323c4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Suspend functions should be main-safe, meaning they're safe to call from the main thread. If a class is doing long-running blocking operations in a coroutine, it's in charge of moving the execution off the main thread using withContext. This applies to all classes in your app, regardless of the part of the architecture the class is in.

      class NewsRepository(private val ioDispatcher: CoroutineDispatcher) {

          // As this operation is manually retrieving the news from the server
          // using a blocking HttpURLConnection, it needs to move the execution
          // to an IO dispatcher to make it main-safe
          suspend fun fetchLatestNews(): List<Article> {
              withContext(ioDispatcher) { /* ... implementation ... */ }
          }
      }

      // This use case fetches the latest news and the associated author.
      class GetLatestNewsWithAuthorsUseCase(
          private val newsRepository: NewsRepository,
          private val authorsRepository: AuthorsRepository
      ) {
          // This method doesn't need to worry about moving the execution of the
          // coroutine to a different thread as newsRepository is main-safe.
          // The work done in the coroutine is lightweight as it only creates
          // a list and add elements to it
          suspend operator fun invoke(): Result<List<ArticleWithAuthor>> {
              val news = newsRepository.fetchLatestNews()

              val response = mutableListOf<ArticleWithAuthor>()
              for (article in news) {
                  val author = authorsRepository.getAuthor(article.author)
                  response.add(ArticleWithAuthor(article, author))
              }
              return Result.Success(response)
          }
      }CoroutinesBestPractices.kt

      This pattern makes your app more scalable, as classes calling suspend functions don't have to worry about what Dispatcher to use for what type of work. This responsibility lies in the class that does the work.
  - id: live-android-coroutines-best-practices-more-source
    kind: guide
    resource: https://developer.android.com/kotlin/coroutines/coroutines-best-practices#more
    revision: web:android-coroutines-best-practices:content@sha256:48e6344d9e8450c3342af934a887158d3e663dda9170f17d80ad49867c4b0b34
    sha256: 31581e4de432567e50792d77666724e7022ec2217eb7d8ecf2fd0d6a233a58d2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: For more coroutines resources, see the Coroutines guide in the Kotlin documentation.
  - id: live-android-coroutines-best-practices-mutable-types-source
    kind: guide
    resource: https://developer.android.com/kotlin/coroutines/coroutines-best-practices#mutable-types
    revision: web:android-coroutines-best-practices:content@sha256:48e6344d9e8450c3342af934a887158d3e663dda9170f17d80ad49867c4b0b34
    sha256: 0e1eebb0a914eb6a46715e6185240ae3b0ff0edf8576a4b178ecd361eceaf951
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Prefer exposing immutable types to other classes. In this way, all changes to the mutable type is centralized in one class making it easier to debug when something goes wrong.

      // DO expose immutable types
      class LatestNewsViewModel : ViewModel() {

          private val _uiState = MutableStateFlow(LatestNewsUiState.Loading)
          val uiState: StateFlow<LatestNewsUiState> = _uiState

          /* ... */
      }CoroutinesBestPractices.kt

      class LatestNewsViewModel : ViewModel() {

          // DO NOT expose mutable types
          val uiState = MutableStateFlow(LatestNewsUiState.Loading)

          /* ... */
      }CoroutinesBestPractices.kt
  - id: live-android-coroutines-best-practices-test-coroutine-dispatcher-source
    kind: guide
    resource: https://developer.android.com/kotlin/coroutines/coroutines-best-practices#test-coroutine-dispatcher
    revision: web:android-coroutines-best-practices:content@sha256:48e6344d9e8450c3342af934a887158d3e663dda9170f17d80ad49867c4b0b34
    sha256: a67afb34e04b592e725a53919bdad89f6ad1f33027524e23f412946f5227a6be
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      An instance of TestDispatcher should be injected into your classes in tests. There are two available implementations in the kotlinx-coroutines-test library:

      StandardTestDispatcher: Queues up coroutines started on it with a scheduler, and executes them when the test thread is not busy. You can suspend the test thread to let other queued coroutines run using methods such as advanceUntilIdle.

      UnconfinedTestDispatcher: Runs new coroutines eagerly, in a blocking way. This generally makes writing tests easier, but gives you less control over how coroutines are executed during the test.

      See the documentation of each dispatcher implementation for additional details.

      To test coroutines, use the runTest coroutine builder. runTest uses a TestCoroutineScheduler to skip delays in tests and to allow you to control virtual time. You can also use this scheduler to create additional test dispatchers as needed.

      class ArticlesRepositoryTest {

          @Test
          fun testBookmarkArticle() = runTest {
              // Pass the testScheduler provided by runTest's coroutine scope to
              // the test dispatcher
              val testDispatcher = UnconfinedTestDispatcher(testScheduler)

              val articlesDataSource = FakeArticlesDataSource()
              val repository = ArticlesRepository(
                  articlesDataSource,
                  defaultDispatcher = testDispatcher
              )
              val article = Article()
              repository.bookmarkArticle(article)
              assertThat(articlesDataSource.isBookmarked(article)).isTrue()
          }
      }CoroutinesBestPracticesTest.kt

      All TestDispatchers should share the same scheduler. This allows you to run all your coroutine code on the single test thread to make your tests deterministic. runTest will wait for all coroutines that are on the same scheduler or are children of the test coroutine to complete before returning.
  - id: live-android-coroutines-best-practices-viewmodel-coroutines-source
    kind: guide
    resource: https://developer.android.com/kotlin/coroutines/coroutines-best-practices#viewmodel-coroutines
    revision: web:android-coroutines-best-practices:content@sha256:48e6344d9e8450c3342af934a887158d3e663dda9170f17d80ad49867c4b0b34
    sha256: 57c0664067d1e9c61c1e1c98a143c5ef9e80fcc1fb6dc7597c87ea2dd4720f13
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      ViewModel classes should prefer creating coroutines instead of exposing suspend functions to perform business logic. Suspend functions in the ViewModel can be useful if instead of exposing state using a stream of data, only a single value needs to be emitted.

      // DO create coroutines in the ViewModel
      class LatestNewsViewModel(
          private val getLatestNewsWithAuthors: GetLatestNewsWithAuthorsUseCase
      ) : ViewModel() {

          private val _uiState = MutableStateFlow<LatestNewsUiState>(LatestNewsUiState.Loading)
          val uiState: StateFlow<LatestNewsUiState> = _uiState

          fun loadNews() {
              viewModelScope.launch {
                  val latestNewsWithAuthors = getLatestNewsWithAuthors()
                  _uiState.value = LatestNewsUiState.Success(latestNewsWithAuthors)
              }
          }
      }CoroutinesBestPractices.kt

      // Prefer observable state rather than suspend functions from the ViewModel
      class LatestNewsViewModel(
          private val getLatestNewsWithAuthors: GetLatestNewsWithAuthorsUseCase
      ) : ViewModel() {
          // DO NOT do this. News would probably need to be refreshed as well.
          // Instead of exposing a single value with a suspend function, news should
          // be exposed using a stream of data as in the code snippet above.
          suspend fun loadNews() = getLatestNewsWithAuthors()
      }CoroutinesBestPractices.kt

      Views shouldn't directly trigger any coroutines to perform business logic. Instead, defer that responsibility to the ViewModel. This makes your business logic easier to test as ViewModel objects can be unit tested, instead of using instrumentation tests that are required to test views.

      In addition to that, your coroutines will survive configuration changes automatically if the work is started in the viewModelScope. If you create coroutines using lifecycleScope instead, you'd have to handle that manually. If the coroutine needs to outlive the ViewModel's scope, check out the Creating coroutines in the business and data layer section.
compose:
  id: live-android-coroutines-best-practices
  artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
  fqn: kotlinx.coroutines.CoroutineScope
  sections:
    - id: live-android-coroutines-best-practices-coroutine-cancellable
      title: Make your coroutine cancellable
      aliases:
        - kotlinx.coroutines.ensureActive
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-coroutine-cancellable-source
      relatedIds: []
    - id: live-android-coroutines-best-practices-coroutines-data-layer
      title: The data and business layer should expose suspend functions and Flows
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-coroutines-data-layer-source
      relatedIds: []
    - id: live-android-coroutines-best-practices-create-coroutines-data-layer
      title: Creating coroutines in the business and data layer
      aliases:
        - kotlinx.coroutines.CoroutineScope
        - kotlinx.coroutines.coroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-create-coroutines-data-layer-source
      relatedIds: []
    - id: live-android-coroutines-best-practices-exceptions
      title: Watch out for exceptions
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-exceptions-source
      relatedIds: []
    - id: live-android-coroutines-best-practices-global-scope
      title: Avoid GlobalScope
      aliases:
        - kotlinx.coroutines.CoroutineScope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-global-scope-source
      relatedIds: []
    - id: live-android-coroutines-best-practices-inject-dispatchers
      title: Inject Dispatchers
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-inject-dispatchers-source
      relatedIds: []
    - id: live-android-coroutines-best-practices-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-main-content-source
      relatedIds: []
    - id: live-android-coroutines-best-practices-main-safe
      title: Suspend functions should be safe to call from the main thread
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-main-safe-source
      relatedIds: []
    - id: live-android-coroutines-best-practices-more
      title: Learn more about coroutines
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-more-source
      relatedIds: []
    - id: live-android-coroutines-best-practices-mutable-types
      title: Don't expose mutable types
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-mutable-types-source
      relatedIds: []
    - id: live-android-coroutines-best-practices-test-coroutine-dispatcher
      title: Inject TestDispatchers in tests
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-test-coroutine-dispatcher-source
      relatedIds: []
    - id: live-android-coroutines-best-practices-viewmodel-coroutines
      title: The ViewModel should create coroutines
      aliases: []
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-viewmodel-coroutines-source
      relatedIds: []
---

# Best practices for coroutines in Android

Public source: https://developer.android.com/kotlin/coroutines/coroutines-best-practices

## Make your coroutine cancellable

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

Sources: [live-android-coroutines-best-practices-coroutine-cancellable-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#coroutine-cancellable)

## The data and business layer should expose suspend functions and Flows

Classes in the data and business layers generally expose functions to perform one-shot calls or to be notified of data changes over time. Classes in those layers should expose suspend functions for one-shot calls and Flow to notify about data changes.

// Classes in the data and business layer expose
// either suspend functions or Flows
class ExampleRepository {
    suspend fun makeNetworkRequest() { /* ... */ }

    fun getExamples(): Flow<Example> {
        /* ... */
    }
}CoroutinesBestPractices.kt

This best practice makes the caller, generally the presentation layer, able to control the execution and lifecycle of the work happening in those layers, and cancel when needed.

Sources: [live-android-coroutines-best-practices-coroutines-data-layer-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#coroutines-data-layer)

## Creating coroutines in the business and data layer

For classes in the data or business layer that need to create coroutines for different reasons, there are different options.

If the work to be done in those coroutines is relevant only when the user is present on the current screen, it should follow the caller's lifecycle. In most cases, the caller will be the ViewModel, and the call will be cancelled when the user navigates away from the screen and the ViewModel is cleared. In this case, coroutineScope or supervisorScope should be used.

class GetAllBooksAndAuthorsUseCase(
    private val booksRepository: BooksRepository,
    private val authorsRepository: AuthorsRepository,
) {
    suspend fun getBookAndAuthors(): BookAndAuthors {
        // In parallel, fetch books and authors and return when both requests
        // complete and the data is ready
        return coroutineScope {
            val books = async { booksRepository.getAllBooks() }
            val authors = async { authorsRepository.getAllAuthors() }
            BookAndAuthors(books.await(), authors.await())
        }
    }
}CoroutinesBestPractices.kt

If the work to be done is relevant as long as the app is opened, and the work is not bound to a particular screen, then the work should outlive the caller's lifecycle. For this scenario, an external CoroutineScope should be used as explained in the Coroutines & Patterns for work that shouldn’t be cancelled blog post.

class ArticlesRepository(
    private val articlesDataSource: ArticlesDataSource,
    private val externalScope: CoroutineScope,
) {
    // As we want to complete bookmarking the article even if the user moves
    // away from the screen, the work is done creating a new coroutine
    // from an external scope
    suspend fun bookmarkArticle(article: Article) {
        externalScope.launch { articlesDataSource.bookmarkArticle(article) }
            .join() // Wait for the coroutine to complete
    }
}CoroutinesBestPractices.kt

externalScope should be created and managed by a class that lives longer than the current screen, it could be managed by the Application class or a ViewModel scoped to a navigation graph.

Sources: [live-android-coroutines-best-practices-create-coroutines-data-layer-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#create-coroutines-data-layer)

## Watch out for exceptions

Unhandled exceptions thrown in coroutines can make your app crash. If exceptions are likely to happen, catch them in the body of any coroutines created with viewModelScope or lifecycleScope.

class LoginViewModel(
    private val loginRepository: LoginRepository
) : ViewModel() {

    fun login(username: String, token: String) {
        viewModelScope.launch {
            try {
                loginRepository.login(username, token)
                // Update UI, user logged in successfully
            } catch (exception: IOException) {
                // Update UI, login attempt failed
            }
        }
    }
}CoroutinesBestPractices.kt

For more information, check out the blog post Exceptions in coroutines, or Coroutine exceptions handling in the Kotlin documentation.

Sources: [live-android-coroutines-best-practices-exceptions-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#exceptions)

## Avoid GlobalScope

This is similar to the Inject Dispatchers best practice. By using GlobalScope, you're hardcoding the CoroutineScope that a class uses bringing some downsides with it:

Promotes hard-coding values. If you hardcode GlobalScope, you might be hard-coding Dispatchers as well.

Makes testing very hard as your code is executed in an uncontrolled scope, you won't be able to control its execution.

You can't have a common CoroutineContext to execute for all coroutines built into the scope itself.

Instead, consider injecting a CoroutineScope for work that needs to outlive the current scope. Check out the Creating coroutines in the business and data layer section to learn more about this topic.

// DO inject an external scope instead of using GlobalScope.
// GlobalScope can be used indirectly. Here as a default parameter makes sense.
class ArticlesRepository(
    private val articlesDataSource: ArticlesDataSource,
    private val externalScope: CoroutineScope = GlobalScope,
    private val defaultDispatcher: CoroutineDispatcher = Dispatchers.Default
) {
    // As we want to complete bookmarking the article even if the user moves
    // away from the screen, the work is done creating a new coroutine
    // from an external scope
    suspend fun bookmarkArticle(article: Article) {
        externalScope.launch(defaultDispatcher) {
            articlesDataSource.bookmarkArticle(article)
        }
            .join() // Wait for the coroutine to complete
    }
}CoroutinesBestPractices.kt

// DO NOT use GlobalScope directly
class ArticlesRepository(
    private val articlesDataSource: ArticlesDataSource,
) {
    // As we want to complete bookmarking the article even if the user moves away
    // from the screen, the work is done creating a new coroutine with GlobalScope
    suspend fun bookmarkArticle(article: Article) {
        GlobalScope.launch {
            articlesDataSource.bookmarkArticle(article)
        }
            .join() // Wait for the coroutine to complete
    }
}CoroutinesBestPractices.kt

Learn more about GlobalScope and its alternatives in the Coroutines & Patterns for work that shouldn’t be cancelled blog post.

Sources: [live-android-coroutines-best-practices-global-scope-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#global-scope)

## Inject Dispatchers

Don't hardcode Dispatchers when creating new coroutines or calling withContext.

// DO inject Dispatchers
class NewsRepository(
    private val defaultDispatcher: CoroutineDispatcher = Dispatchers.Default
) {
    suspend fun loadNews() = withContext(defaultDispatcher) { /* ... */ }
}

// DO NOT hardcode Dispatchers
class NewsRepository {
    // DO NOT use Dispatchers.Default directly, inject it instead
    suspend fun loadNews() = withContext(Dispatchers.Default) { /* ... */ }
}CoroutinesBestPractices.kt

This dependency injection pattern makes testing easier as you can replace those dispatchers in unit and instrumentation tests with a test dispatcher to make your tests more deterministic.

Sources: [live-android-coroutines-best-practices-inject-dispatchers-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#inject-dispatchers)

## Introduction

This page presents several best practices that have a positive impact by making your app more scalable and testable when using coroutines.

Sources: [live-android-coroutines-best-practices-main-content-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#main-content)

## Suspend functions should be safe to call from the main thread

Suspend functions should be main-safe, meaning they're safe to call from the main thread. If a class is doing long-running blocking operations in a coroutine, it's in charge of moving the execution off the main thread using withContext. This applies to all classes in your app, regardless of the part of the architecture the class is in.

class NewsRepository(private val ioDispatcher: CoroutineDispatcher) {

    // As this operation is manually retrieving the news from the server
    // using a blocking HttpURLConnection, it needs to move the execution
    // to an IO dispatcher to make it main-safe
    suspend fun fetchLatestNews(): List<Article> {
        withContext(ioDispatcher) { /* ... implementation ... */ }
    }
}

// This use case fetches the latest news and the associated author.
class GetLatestNewsWithAuthorsUseCase(
    private val newsRepository: NewsRepository,
    private val authorsRepository: AuthorsRepository
) {
    // This method doesn't need to worry about moving the execution of the
    // coroutine to a different thread as newsRepository is main-safe.
    // The work done in the coroutine is lightweight as it only creates
    // a list and add elements to it
    suspend operator fun invoke(): Result<List<ArticleWithAuthor>> {
        val news = newsRepository.fetchLatestNews()

        val response = mutableListOf<ArticleWithAuthor>()
        for (article in news) {
            val author = authorsRepository.getAuthor(article.author)
            response.add(ArticleWithAuthor(article, author))
        }
        return Result.Success(response)
    }
}CoroutinesBestPractices.kt

This pattern makes your app more scalable, as classes calling suspend functions don't have to worry about what Dispatcher to use for what type of work. This responsibility lies in the class that does the work.

Sources: [live-android-coroutines-best-practices-main-safe-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#main-safe)

## Learn more about coroutines

For more coroutines resources, see the Coroutines guide in the Kotlin documentation.

Sources: [live-android-coroutines-best-practices-more-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#more)

## Don't expose mutable types

Prefer exposing immutable types to other classes. In this way, all changes to the mutable type is centralized in one class making it easier to debug when something goes wrong.

// DO expose immutable types
class LatestNewsViewModel : ViewModel() {

    private val _uiState = MutableStateFlow(LatestNewsUiState.Loading)
    val uiState: StateFlow<LatestNewsUiState> = _uiState

    /* ... */
}CoroutinesBestPractices.kt

class LatestNewsViewModel : ViewModel() {

    // DO NOT expose mutable types
    val uiState = MutableStateFlow(LatestNewsUiState.Loading)

    /* ... */
}CoroutinesBestPractices.kt

Sources: [live-android-coroutines-best-practices-mutable-types-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#mutable-types)

## Inject TestDispatchers in tests

An instance of TestDispatcher should be injected into your classes in tests. There are two available implementations in the kotlinx-coroutines-test library:

StandardTestDispatcher: Queues up coroutines started on it with a scheduler, and executes them when the test thread is not busy. You can suspend the test thread to let other queued coroutines run using methods such as advanceUntilIdle.

UnconfinedTestDispatcher: Runs new coroutines eagerly, in a blocking way. This generally makes writing tests easier, but gives you less control over how coroutines are executed during the test.

See the documentation of each dispatcher implementation for additional details.

To test coroutines, use the runTest coroutine builder. runTest uses a TestCoroutineScheduler to skip delays in tests and to allow you to control virtual time. You can also use this scheduler to create additional test dispatchers as needed.

class ArticlesRepositoryTest {

    @Test
    fun testBookmarkArticle() = runTest {
        // Pass the testScheduler provided by runTest's coroutine scope to
        // the test dispatcher
        val testDispatcher = UnconfinedTestDispatcher(testScheduler)

        val articlesDataSource = FakeArticlesDataSource()
        val repository = ArticlesRepository(
            articlesDataSource,
            defaultDispatcher = testDispatcher
        )
        val article = Article()
        repository.bookmarkArticle(article)
        assertThat(articlesDataSource.isBookmarked(article)).isTrue()
    }
}CoroutinesBestPracticesTest.kt

All TestDispatchers should share the same scheduler. This allows you to run all your coroutine code on the single test thread to make your tests deterministic. runTest will wait for all coroutines that are on the same scheduler or are children of the test coroutine to complete before returning.

Sources: [live-android-coroutines-best-practices-test-coroutine-dispatcher-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#test-coroutine-dispatcher)

## The ViewModel should create coroutines

ViewModel classes should prefer creating coroutines instead of exposing suspend functions to perform business logic. Suspend functions in the ViewModel can be useful if instead of exposing state using a stream of data, only a single value needs to be emitted.

// DO create coroutines in the ViewModel
class LatestNewsViewModel(
    private val getLatestNewsWithAuthors: GetLatestNewsWithAuthorsUseCase
) : ViewModel() {

    private val _uiState = MutableStateFlow<LatestNewsUiState>(LatestNewsUiState.Loading)
    val uiState: StateFlow<LatestNewsUiState> = _uiState

    fun loadNews() {
        viewModelScope.launch {
            val latestNewsWithAuthors = getLatestNewsWithAuthors()
            _uiState.value = LatestNewsUiState.Success(latestNewsWithAuthors)
        }
    }
}CoroutinesBestPractices.kt

// Prefer observable state rather than suspend functions from the ViewModel
class LatestNewsViewModel(
    private val getLatestNewsWithAuthors: GetLatestNewsWithAuthorsUseCase
) : ViewModel() {
    // DO NOT do this. News would probably need to be refreshed as well.
    // Instead of exposing a single value with a suspend function, news should
    // be exposed using a stream of data as in the code snippet above.
    suspend fun loadNews() = getLatestNewsWithAuthors()
}CoroutinesBestPractices.kt

Views shouldn't directly trigger any coroutines to perform business logic. Instead, defer that responsibility to the ViewModel. This makes your business logic easier to test as ViewModel objects can be unit tested, instead of using instrumentation tests that are required to test views.

In addition to that, your coroutines will survive configuration changes automatically if the work is started in the viewModelScope. If you create coroutines using lifecycleScope instead, you'd have to handle that manually. If the coroutine needs to outlive the ViewModel's scope, check out the Creating coroutines in the business and data layer section.

Sources: [live-android-coroutines-best-practices-viewmodel-coroutines-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#viewmodel-coroutines)
