---
type: reference
title: "Guidance: Account for identity and object equality under strong skipping"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-performance-stability-strongskipping-composable-skippability-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#composable-skippability
    revision: web:compose-guide-performance-stability-strongskipping:content@sha256:5cdf171c66bc82d2d5adcd0d32a714b3f9ee2058ef9cbe3e417a1c3d9417bf43
    sha256: 675f5877e3ae9bb6ec53cc5fad20e9e6e63660d46bba5fd3a84dbd819302e9a3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Strong skipping mode relaxes some of the stability rules normally applied by the Compose compiler when it comes to skipping and composable functions. By default, the Compose compiler marks a composable function as skippable if all of its arguments have stable values. Strong skipping mode changes this.

      With strong skipping enabled, all restartable composable functions become skippable. This applies whether or not they have unstable parameters. Non-restartable composable functions remain unskippable.
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
  id: guide-strong-skipping-parameter-equality
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: guide-strong-skipping-parameter-equality
      title: "Guidance: Account for identity and object equality under strong skipping"
      aliases:
        - strong skipping
        - unstable parameter instance equality
        - stable parameter equals
        - restartable composable
        - new model instance recomposition
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-strongskipping-when-skip-source
        - live-compose-guide-performance-stability-strongskipping-composable-skippability-source
      relatedIds:
        - live-compose-guide-performance-stability-strongskipping-when-skip
        - live-compose-guide-performance-stability-strongskipping-composable-skippability
---

# Guidance: Account for identity and object equality under strong skipping

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Account for identity and object equality under strong skipping

Guidance: With strong skipping enabled, restartable composables can be skipped even when parameters are unstable. Compose compares unstable parameters by instance equality (===) and stable parameters by Object.equals(); unchanged parameters allow skipping. Limitation: do not assume that equal field values make two newly allocated unstable instances equal for skipping. Non-restartable composables remain unskippable. Check the project's actual compiler configuration before applying this behavior; the application's compiler version and settings are unknown here.

Sources: [live-compose-guide-performance-stability-strongskipping-when-skip-source](https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#when-skip), [live-compose-guide-performance-stability-strongskipping-composable-skippability-source](https://developer.android.com/develop/ui/compose/performance/stability/strongskipping#composable-skippability)
