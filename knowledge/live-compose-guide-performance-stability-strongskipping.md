---
type: reference
title: Strong skipping mode
description: "Public source: https://developer.android.com/develop/ui/compose/performance/stability/strongskipping"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-performance-stability-strongskipping-annotate-classes-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#annotate-classes
    revision: web:compose-guide-performance-stability-strongskipping:content@sha256:5cdf171c66bc82d2d5adcd0d32a714b3f9ee2058ef9cbe3e417a1c3d9417bf43
    sha256: b0db5924eb7b2e385c0bb58154ed328f6fe4f64d656f6ffda26e3ef7f2d4333e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If you want an object to be compared using object equality (Object.equals()) instead of instance equality (===), continue to annotate the given class with @Stable or @Immutable.

      Keep the following trade-offs in mind before adding @Stable or @Immutable:

      Classes with stable properties in Compose modules are already stable: A class with val properties of stable types in a module compiled with the Compose compiler is automatically inferred as stable and uses .equals() without needing @Immutable or @Stable.

      Only annotate classes with cheap .equals() checks: Add @Stable or @Immutable when the compiler can't infer stability (such as classes from non-Compose modules) and new instances with identical values are frequently allocated, provided the class's .equals() check is inexpensive.

      Be cautious when annotating models with collections: Adding @Stable or @Immutable to models containing collections (or replacing List with ImmutableList) causes Compose to compare every element in the collection with .equals() on each recomposition pass. For large collections or models used in lazy layouts (LazyColumn, LazyRow, LazyGrid), comparing every element can be slower than using instance equality (===) or recomposing directly.
  - id: live-compose-guide-performance-stability-strongskipping-apk-size-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#apk-size
    revision: web:compose-guide-performance-stability-strongskipping:content@sha256:5cdf171c66bc82d2d5adcd0d32a714b3f9ee2058ef9cbe3e417a1c3d9417bf43
    sha256: a05fb291889ab21a50574e5c37cd29ff671d96f3c7c0bb69cb4eec9bc692c372
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When compiled, skippable Composables result in more generated code than composables that are not skippable. With strong skipping enabled, the compiler marks nearly all composables as skippable and wraps all lambdas in a remember{...}. Due to this, enabling strong skipping mode has a very small impact on the APK size of your application.

      Enabling strong skipping in Now In Android increased the APK size by 4kB. The difference in size largely depends on the number of previously unskippable composables that were present in the given app but should be relatively minor.
  - id: live-compose-guide-performance-stability-strongskipping-avoid-memoization-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#avoid-memoization
    revision: web:compose-guide-performance-stability-strongskipping:content@sha256:5cdf171c66bc82d2d5adcd0d32a714b3f9ee2058ef9cbe3e417a1c3d9417bf43
    sha256: 3cf350c2325ad74f8f6a8806be966c27ca73354718ecbe3e7e1d5165a1215213
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If you have a lambda that you don't want to memoize, use the @DontMemoize annotation.

      val lambda = @DontMemoize {
          ...
      }
  - id: live-compose-guide-performance-stability-strongskipping-composable-skippability-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#composable-skippability
    revision: web:compose-guide-performance-stability-strongskipping:content@sha256:5cdf171c66bc82d2d5adcd0d32a714b3f9ee2058ef9cbe3e417a1c3d9417bf43
    sha256: 675f5877e3ae9bb6ec53cc5fad20e9e6e63660d46bba5fd3a84dbd819302e9a3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Strong skipping mode relaxes some of the stability rules normally applied by the Compose compiler when it comes to skipping and composable functions. By default, the Compose compiler marks a composable function as skippable if all of its arguments have stable values. Strong skipping mode changes this.

      With strong skipping enabled, all restartable composable functions become skippable. This applies whether or not they have unstable parameters. Non-restartable composable functions remain unskippable.
  - id: live-compose-guide-performance-stability-strongskipping-enable-strong-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#enable-strong
    revision: web:compose-guide-performance-stability-strongskipping:content@sha256:5cdf171c66bc82d2d5adcd0d32a714b3f9ee2058ef9cbe3e417a1c3d9417bf43
    sha256: 414cf8e2b1e8bbfca18766706c70c81e82c5cbf0d6002d4a42670fd882a186bb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Strong skipping is enabled by default in Kotlin 2.0.20.

      To enable strong skipping for a Gradle module in a release prior to 2.0.20, include the following option in the composeCompiler block of your Gradle configuration:

      android { ... }

      composeCompiler {
         enableStrongSkippingMode = true
      }
  - id: live-compose-guide-performance-stability-strongskipping-examples-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#examples
    revision: web:compose-guide-performance-stability-strongskipping:content@sha256:5cdf171c66bc82d2d5adcd0d32a714b3f9ee2058ef9cbe3e417a1c3d9417bf43
    sha256: f16f447adbdeb027febd2a07161fb9d39ba9cd77481dc20d0ca3f027e122bf3e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To achieve memoization of lambdas inside composables when using strong skipping, the compiler wraps your lambda with a remember call. It is keyed with the captures of the lambda.

      Consider a case where you have a lambda as in the following example:

      @Composable
      fun MyComposable(unstableObject: Unstable, stableObject: Stable) {
          val lambda = {
              use(unstableObject)
              use(stableObject)
          }
      }

      With strong skipping enabled, the compiler memoizes the lambda by wrapping it in a remember call:

      @Composable
      fun MyComposable(unstableObject: Unstable, stableObject: Stable) {
          val lambda = remember(unstableObject, stableObject) {
              {
                  use(unstableObject)
                  use(stableObject)
              }
          }
      }

      The keys follow the same comparison rules as composable functions. The runtime compares unstable keys using instance equality. It compares stable keys using object equality.
  - id: live-compose-guide-performance-stability-strongskipping-lambda-memoization-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#lambda-memoization
    revision: web:compose-guide-performance-stability-strongskipping:content@sha256:5cdf171c66bc82d2d5adcd0d32a714b3f9ee2058ef9cbe3e417a1c3d9417bf43
    sha256: 72c9be8bda555f1d883361e76e76eb2ccf95d02fa3d8cf1db282be129f4c3354
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Strong skipping mode also enables more memoization of lambdas inside composables. With strong skipping enabled, every lambda inside a composable function will be automatically remembered.
  - id: live-compose-guide-performance-stability-strongskipping-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#main-content
    revision: web:compose-guide-performance-stability-strongskipping:content@sha256:5cdf171c66bc82d2d5adcd0d32a714b3f9ee2058ef9cbe3e417a1c3d9417bf43
    sha256: 0255f25ff298945cab6389283843a5a8dab8924156ab6b9991ad468533ce2c0c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Strong Skipping is a mode available in the Compose compiler. When enabled, it changes the compiler's behavior in two ways:

      Composables with unstable parameters become skippable

      Lambdas with unstable captures are remembered
  - id: live-compose-guide-performance-stability-strongskipping-memoization-and-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#memoization-and
    revision: web:compose-guide-performance-stability-strongskipping:content@sha256:5cdf171c66bc82d2d5adcd0d32a714b3f9ee2058ef9cbe3e417a1c3d9417bf43
    sha256: 35664326a3389d7a8f54035d19daa042bc66bb4a819831c02a78229eed9e2a11
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: This optimization greatly increases the number of composables that the runtime skips during recomposition. Without memoization, the runtime is much more likely to allocate a new lambda to any composable that takes a lambda parameter during recomposition. As a result, the new lambda has parameters that are not equal to the last composition. This results in recomposition.
  - id: live-compose-guide-performance-stability-strongskipping-when-skip-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#when-skip
    revision: web:compose-guide-performance-stability-strongskipping:content@sha256:5cdf171c66bc82d2d5adcd0d32a714b3f9ee2058ef9cbe3e417a1c3d9417bf43
    sha256: 87253e4ef37c4559a1f612e7c5724d7c5ac98ef58c3e9415a553d1e9d14ad6b4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To determine whether to skip a composable during recomposition, Compose compares the value of each parameter with their previous values. The type of comparison depends on the stability of the parameter.

      Unstable parameters are compared using instance equality (===)

      Stable parameters are compared using object equality (Object.equals())

      If all parameters meet these requirements, Compose skips the composable during recomposition.

      You might want a composable to opt out of strong skipping. That is, you might want a restartable but non-skippable composable. In this case, use the @NonSkippableComposable annotation.

      @NonSkippableComposable
      @Composable
      fun MyNonSkippableComposable {}
compose:
  id: live-compose-guide-performance-stability-strongskipping
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: live-compose-guide-performance-stability-strongskipping-annotate-classes
      title: Annotate classes as stable
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-strongskipping-annotate-classes-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-strongskipping-apk-size
      title: APK Size
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-strongskipping-apk-size-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-strongskipping-avoid-memoization
      title: Avoid memoization
      aliases:
        - androidx.compose.runtime.DontMemoize
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-strongskipping-avoid-memoization-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-strongskipping-composable-skippability
      title: Composable skippability
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-strongskipping-composable-skippability-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-strongskipping-enable-strong
      title: Enable strong skipping mode
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-strongskipping-enable-strong-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-strongskipping-examples
      title: Examples
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-strongskipping-examples-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-strongskipping-lambda-memoization
      title: Lambda memoization
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-strongskipping-lambda-memoization-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-strongskipping-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-strongskipping-main-content-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-strongskipping-memoization-and
      title: Memoization and recomposition
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-strongskipping-memoization-and-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-strongskipping-when-skip
      title: When to skip
      aliases:
        - androidx.compose.runtime.NonSkippableComposable
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-strongskipping-when-skip-source
      relatedIds: []
---

# Strong skipping mode

Public source: https://developer.android.com/develop/ui/compose/performance/stability/strongskipping

## Annotate classes as stable

If you want an object to be compared using object equality (Object.equals()) instead of instance equality (===), continue to annotate the given class with @Stable or @Immutable.

Keep the following trade-offs in mind before adding @Stable or @Immutable:

Classes with stable properties in Compose modules are already stable: A class with val properties of stable types in a module compiled with the Compose compiler is automatically inferred as stable and uses .equals() without needing @Immutable or @Stable.

Only annotate classes with cheap .equals() checks: Add @Stable or @Immutable when the compiler can't infer stability (such as classes from non-Compose modules) and new instances with identical values are frequently allocated, provided the class's .equals() check is inexpensive.

Be cautious when annotating models with collections: Adding @Stable or @Immutable to models containing collections (or replacing List with ImmutableList) causes Compose to compare every element in the collection with .equals() on each recomposition pass. For large collections or models used in lazy layouts (LazyColumn, LazyRow, LazyGrid), comparing every element can be slower than using instance equality (===) or recomposing directly.

Sources: [live-compose-guide-performance-stability-strongskipping-annotate-classes-source](https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#annotate-classes)

## APK Size

When compiled, skippable Composables result in more generated code than composables that are not skippable. With strong skipping enabled, the compiler marks nearly all composables as skippable and wraps all lambdas in a remember{...}. Due to this, enabling strong skipping mode has a very small impact on the APK size of your application.

Enabling strong skipping in Now In Android increased the APK size by 4kB. The difference in size largely depends on the number of previously unskippable composables that were present in the given app but should be relatively minor.

Sources: [live-compose-guide-performance-stability-strongskipping-apk-size-source](https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#apk-size)

## Avoid memoization

If you have a lambda that you don't want to memoize, use the @DontMemoize annotation.

val lambda = @DontMemoize {
    ...
}

Sources: [live-compose-guide-performance-stability-strongskipping-avoid-memoization-source](https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#avoid-memoization)

## Composable skippability

Strong skipping mode relaxes some of the stability rules normally applied by the Compose compiler when it comes to skipping and composable functions. By default, the Compose compiler marks a composable function as skippable if all of its arguments have stable values. Strong skipping mode changes this.

With strong skipping enabled, all restartable composable functions become skippable. This applies whether or not they have unstable parameters. Non-restartable composable functions remain unskippable.

Sources: [live-compose-guide-performance-stability-strongskipping-composable-skippability-source](https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#composable-skippability)

## Enable strong skipping mode

Strong skipping is enabled by default in Kotlin 2.0.20.

To enable strong skipping for a Gradle module in a release prior to 2.0.20, include the following option in the composeCompiler block of your Gradle configuration:

android { ... }

composeCompiler {
   enableStrongSkippingMode = true
}

Sources: [live-compose-guide-performance-stability-strongskipping-enable-strong-source](https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#enable-strong)

## Examples

To achieve memoization of lambdas inside composables when using strong skipping, the compiler wraps your lambda with a remember call. It is keyed with the captures of the lambda.

Consider a case where you have a lambda as in the following example:

@Composable
fun MyComposable(unstableObject: Unstable, stableObject: Stable) {
    val lambda = {
        use(unstableObject)
        use(stableObject)
    }
}

With strong skipping enabled, the compiler memoizes the lambda by wrapping it in a remember call:

@Composable
fun MyComposable(unstableObject: Unstable, stableObject: Stable) {
    val lambda = remember(unstableObject, stableObject) {
        {
            use(unstableObject)
            use(stableObject)
        }
    }
}

The keys follow the same comparison rules as composable functions. The runtime compares unstable keys using instance equality. It compares stable keys using object equality.

Sources: [live-compose-guide-performance-stability-strongskipping-examples-source](https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#examples)

## Lambda memoization

Strong skipping mode also enables more memoization of lambdas inside composables. With strong skipping enabled, every lambda inside a composable function will be automatically remembered.

Sources: [live-compose-guide-performance-stability-strongskipping-lambda-memoization-source](https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#lambda-memoization)

## Introduction

Strong Skipping is a mode available in the Compose compiler. When enabled, it changes the compiler's behavior in two ways:

Composables with unstable parameters become skippable

Lambdas with unstable captures are remembered

Sources: [live-compose-guide-performance-stability-strongskipping-main-content-source](https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#main-content)

## Memoization and recomposition

This optimization greatly increases the number of composables that the runtime skips during recomposition. Without memoization, the runtime is much more likely to allocate a new lambda to any composable that takes a lambda parameter during recomposition. As a result, the new lambda has parameters that are not equal to the last composition. This results in recomposition.

Sources: [live-compose-guide-performance-stability-strongskipping-memoization-and-source](https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#memoization-and)

## When to skip

To determine whether to skip a composable during recomposition, Compose compares the value of each parameter with their previous values. The type of comparison depends on the stability of the parameter.

Unstable parameters are compared using instance equality (===)

Stable parameters are compared using object equality (Object.equals())

If all parameters meet these requirements, Compose skips the composable during recomposition.

You might want a composable to opt out of strong skipping. That is, you might want a restartable but non-skippable composable. In this case, use the @NonSkippableComposable annotation.

@NonSkippableComposable
@Composable
fun MyNonSkippableComposable {}

Sources: [live-compose-guide-performance-stability-strongskipping-when-skip-source](https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#when-skip)
