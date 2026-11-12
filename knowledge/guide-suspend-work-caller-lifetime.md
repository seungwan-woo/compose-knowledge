---
type: reference
title: "Guidance: Let callers own the lifetime of suspend work"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
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
compose:
  id: guide-suspend-work-caller-lifetime
  artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
  fqn: kotlinx.coroutines.coroutineScope
  sections:
    - id: guide-suspend-work-caller-lifetime
      title: "Guidance: Let callers own the lifetime of suspend work"
      aliases:
        - kotlinx.coroutines.coroutineScope
        - kotlinx.coroutines.supervisorScope
        - kotlinx.coroutines.CoroutineScope
        - caller-owned suspend operation
        - structured concurrency
        - repository coroutine lifetime
        - external coroutine scope
      requires:
        - artifact: org.jetbrains.kotlinx:kotlinx-coroutines-core
          version: null
      sourceIds:
        - live-android-coroutines-best-practices-coroutines-data-layer-source
        - live-android-coroutines-best-practices-create-coroutines-data-layer-source
      relatedIds:
        - live-android-coroutines-best-practices-coroutines-data-layer
        - live-android-coroutines-best-practices-create-coroutines-data-layer
---

# Guidance: Let callers own the lifetime of suspend work

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Let callers own the lifetime of suspend work

Guidance: Expose one-shot data or business operations as suspend functions and ongoing changes as Flow so the caller controls execution, lifetime, and cancellation. If such an operation needs parallel child work relevant only to the current screen, use coroutineScope or supervisorScope inside the suspend operation rather than detaching the work. Limitation: work that must outlive the caller needs an explicitly managed longer-lived external scope; the current screen lifetime is not suitable for that requirement.

Sources: [live-android-coroutines-best-practices-coroutines-data-layer-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#coroutines-data-layer), [live-android-coroutines-best-practices-create-coroutines-data-layer-source](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#create-coroutines-data-layer)
