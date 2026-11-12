---
type: reference
title: "Guidance: Use derivedStateOf when UI changes less often than inputs"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-side-effects-derivedstateof-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#derivedstateof
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: ac1e51c0f85003066b018412b42dc84894ab88eb541dc4b57f8dd2c884600156
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In Compose, recomposition occurs each time an observed state object or composable input changes. A state object or input may be changing more often than the UI actually needs to update, leading to unnecessary recomposition.

      You should use the derivedStateOf function when your inputs to a composable are changing more often than you need to recompose. This often occurs when something is frequently changing, such as a scroll position, but the composable only needs to react to it once it crosses a certain threshold. derivedStateOf creates a new Compose state object you can observe that only updates as much as you need. In this way, it acts similarly to the Kotlin Flow distinctUntilChanged() operator.
  - id: live-compose-guide-side-effects-incorrect-usage-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#incorrect-usage
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: ee9290b80de8526f356fda22f7f0243a28b2de2604195629ced82cfc441923e9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A common mistake is to assume that, when you combine two Compose state objects, you should use derivedStateOf because you are "deriving state". However, this is purely overhead and not required, as shown in the following snippet:

      // DO NOT USE. Incorrect usage of derivedStateOf.
      var firstName by remember { mutableStateOf("") }
      var lastName by remember { mutableStateOf("") }

      val fullNameBad by remember { derivedStateOf { "$firstName $lastName" } } // This is bad!!!
      val fullNameCorrect = "$firstName $lastName" // This is correctSideEffectsSnippets.kt

      In this snippet, fullName needs to update just as often as firstName and lastName. Therefore, no excess recomposition is occurring, and using derivedStateOf is not necessary.
compose:
  id: guide-derived-state-threshold
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.derivedStateOf
  sections:
    - id: guide-derived-state-threshold
      title: "Guidance: Use derivedStateOf when UI changes less often than inputs"
      aliases:
        - androidx.compose.runtime.derivedStateOf
        - scroll threshold
        - reduce recomposition
        - derived state overhead
        - 파생 상태
        - 재구성 줄이기
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-derivedstateof-source
        - live-compose-guide-side-effects-incorrect-usage-source
      relatedIds:
        - live-compose-guide-side-effects-derivedstateof
        - live-compose-guide-side-effects-incorrect-usage
---

# Guidance: Use derivedStateOf when UI changes less often than inputs

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Use derivedStateOf when UI changes less often than inputs

Guidance: Use derivedStateOf when state changes more frequently than the UI needs to update, such as a scroll position whose UI only reacts after crossing a threshold. Observe the derived state so the consumer responds to meaningful result changes, similarly to distinctUntilChanged. Limitation: combining state values is not itself a reason to use derivedStateOf. A full name made from firstName and lastName must change whenever either input changes, so ordinary string composition is enough and derivedStateOf adds unnecessary overhead.

Sources: [live-compose-guide-side-effects-derivedstateof-source](https://developer.android.com/develop/ui/compose/side-effects#derivedstateof), [live-compose-guide-side-effects-incorrect-usage-source](https://developer.android.com/develop/ui/compose/side-effects#incorrect-usage)
