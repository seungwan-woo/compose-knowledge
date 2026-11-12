---
type: reference
title: "Guidance: Convert external data to Compose State with produceState"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-side-effects-producestate-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#producestate
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 35b26fd6009545074ac0d142de12f22ab9b76bb4fde1980af6bd76444d1fc629
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      produceState launches a coroutine scoped to the Composition that can push values into a returned State. Use it to convert non-Compose state into Compose state, for example bringing external subscription-driven state such as Flow, LiveData, or RxJava into the Composition.

      The producer is launched when produceState enters the Composition, and will be cancelled when it leaves the Composition. The returned State conflates; setting the same value won't trigger a recomposition.

      Even though produceState creates a coroutine, it can also be used to observe non-suspending sources of data. To remove the subscription to that source, use the awaitDispose function.

      The following example shows how to use produceState to load an image from the network. The loadNetworkImage composable function returns a State that can be used in other composables.

      @Composable
      fun loadNetworkImage(
          url: String,
          imageRepository: ImageRepository = ImageRepository()
      ): State<Result<Image>> {
          // Creates a State<T> with Result.Loading as initial value
          // If either `url` or `imageRepository` changes, the running producer
          // will cancel and will be re-launched with the new inputs.
          return produceState<Result<Image>>(initialValue = Result.Loading, url, imageRepository) {
              // In a coroutine, can make suspend calls
              val image = imageRepository.load(url)

              // Update State with either an Error or Success result.
              // This will trigger a recomposition where this State is read
              value = if (image == null) {
                  Result.Error
              } else {
                  Result.Success(image)
              }
          }
      }SideEffectsSnippets.kt
compose:
  id: guide-produce-state-external-data
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.produceState
  sections:
    - id: guide-produce-state-external-data
      title: "Guidance: Convert external data to Compose State with produceState"
      aliases:
        - androidx.compose.runtime.produceState
        - androidx.compose.runtime.ProduceStateScope.awaitDispose
        - external subscription
        - state conflation
        - 외부 데이터 상태
        - 구독 해제
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-producestate-source
      relatedIds:
        - live-compose-guide-side-effects-producestate
---

# Guidance: Convert external data to Compose State with produceState

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Convert external data to Compose State with produceState

Guidance: Use produceState to expose external data as Compose State. Its producer coroutine starts on entering the Composition, updates the returned state through value, and is cancelled on leaving. Supply inputs as keys when changed inputs should cancel and relaunch the producer, as with a URL and image repository. For non-suspending subscriptions, use awaitDispose to remove the subscription. Limitation: the returned State conflates equal values; assigning the same value does not trigger recomposition.

Sources: [live-compose-guide-side-effects-producestate-source](https://developer.android.com/develop/ui/compose/side-effects#producestate)
