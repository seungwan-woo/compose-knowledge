---
type: reference
title: "Guidance: Choose an explicit boundary for extending or replacing a theme"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-designsystems-custom-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/designsystems/custom#main-content
    revision: web:compose-designsystems-custom:content@sha256:93f0171f387644e5dd79a5bd6ea0714a6909f5013f9dd7350d9a1ea89fadb1af
    sha256: 6aedd70d9bdfa0cd93643af16d3871bc754376bf6879b07dd5a13aac72bfd1cc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      While Material is our recommended design system and Jetpack Compose ships an implementation of Material, you are not forced to use it. Material is built entirely on public APIs, so it's possible to create your own design system in the same manner.

      There are several approaches you might take:

      Extend MaterialTheme with additional theming values.

      Replace one or more Material systems — ColorScheme, Typography, or Shapes — with custom implementations while keeping the others.

      Implement a fully custom design system to replace MaterialTheme.

      You may also want to continue using Material components with a custom design system. It's possible to do this but there are things to keep in mind to suit the approach you've taken.

      To learn more about the lower-level constructs and APIs used by MaterialTheme and custom design systems, check out the Anatomy of a theme in Compose guide.
compose:
  id: guide-designsystem-theme-extension-boundary
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3.MaterialTheme
  sections:
    - id: guide-designsystem-theme-extension-boundary
      title: "Guidance: Choose an explicit boundary for extending or replacing a theme"
      aliases:
        - custom design system
        - custom theme
        - extend MaterialTheme
        - replace typography
        - theme boundary
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-designsystems-custom-main-content-source
      relatedIds:
        - live-compose-designsystems-custom-main-content
---

# Guidance: Choose an explicit boundary for extending or replacing a theme

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Choose an explicit boundary for extending or replacing a theme

Guidance: Choose whether a custom design system extends MaterialTheme with additional values, replaces selected color, typography, or shape systems while retaining others, or replaces MaterialTheme entirely. Document that boundary before reviewing reused Material components, because their integration depends on the chosen approach. Limitation: these are supported design-system alternatives, not a requirement that a custom system adopt Material tokens or component behavior.

Sources: [live-compose-designsystems-custom-main-content-source](https://developer.android.com/develop/ui/compose/designsystems/custom#main-content)
