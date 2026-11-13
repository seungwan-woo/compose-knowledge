---
type: reference
title: "Guidance: Choose local creation by change frequency and invalidation scope"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-compositionlocal-creating-apis-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#creating-apis
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: 517747f3caa251cb41f5a34fbba3215e82a5dcbcce60a1823e2ad44acf807aeb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are two APIs to create a CompositionLocal:

      compositionLocalOf: Changing the value provided during recomposition invalidates only the content that reads its current value.

      staticCompositionLocalOf: Unlike compositionLocalOf, reads of a staticCompositionLocalOf are not tracked by Compose. Changing the value causes the entirety of the content lambda where the CompositionLocal is provided to be recomposed, instead of just the places where the current value is read in the Composition.

      If the value provided to the CompositionLocal is highly unlikely to change or will never change, use staticCompositionLocalOf to get performance benefits.

      For example, an app's design system might be opinionated in the way composables are elevated using a shadow for the UI component. Since the different elevations for the app should propagate throughout the UI tree, we use a CompositionLocal. As the CompositionLocal value is derived conditionally based on the system theme, we use the compositionLocalOf API:

      // LocalElevations.kt file

      data class Elevations(val card: Dp = 0.dp, val default: Dp = 0.dp)

      // Define a CompositionLocal global object with a default
      // This instance can be accessed by all composables in the app
      val LocalElevations = compositionLocalOf { Elevations() }CompositionLocalSnippets.kt
compose:
  id: guide-theme-local-invalidation-policy
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.compositionLocalOf
  sections:
    - id: guide-theme-local-invalidation-policy
      title: "Guidance: Choose local creation by change frequency and invalidation scope"
      aliases:
        - compositionLocalOf
        - staticCompositionLocalOf
        - theme invalidation
        - dynamic theme
        - CompositionLocal performance
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-creating-apis-source
      relatedIds:
        - live-compose-guide-compositionlocal-creating-apis
---

# Guidance: Choose local creation by change frequency and invalidation scope

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Choose local creation by change frequency and invalidation scope

Guidance: compositionLocalOf tracks current-value reads; changing its provided value invalidates those readers. staticCompositionLocalOf does not track those reads; changing its provided value recomposes the entire provider content. Prefer staticCompositionLocalOf for values highly unlikely to change, and account for broader invalidation when that assumption changes. Limitation: static is not a general optimization for every theme value; choose using the actual provider update behavior.

Sources: [live-compose-guide-compositionlocal-creating-apis-source](https://developer.android.com/develop/ui/compose/compositionlocal#creating-apis)
