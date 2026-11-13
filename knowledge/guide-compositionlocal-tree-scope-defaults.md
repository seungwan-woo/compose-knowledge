---
type: reference
title: "Guidance: Reserve CompositionLocal for tree-scoped dependencies with usable defaults"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-compositionlocal-deciding-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/compositionlocal#deciding
    revision: web:compose-guide-compositionlocal:content@sha256:24ed1dab0ddeb3f84e055c4d9a84781d721f483f93f312920924248115dccf6a
    sha256: 5e4a535f41aaaf869bfa6f0cd11be08a93fb345640011fac32c873315ed256ca
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are certain conditions that can make CompositionLocal a good solution for your use case:

      A CompositionLocal should have a good default value. If there's no default value, you must guarantee that it is exceedingly difficult for a developer to get into a situation where a value for the CompositionLocal isn't provided. Not providing a default value can cause problems and frustration when creating tests or previewing a composable that uses that CompositionLocal will always require it to be explicitly provided.

      Avoid CompositionLocal for concepts that aren't thought as tree-scoped or sub-hierarchy scoped. A CompositionLocal makes sense when it can be potentially used by any descendant, not by a few of them.

      If your use case doesn't meet these requirements, check out the Alternatives to consider section before creating a CompositionLocal.

      An example of a bad practice is creating a CompositionLocal that holds the ViewModel of a particular screen so that all composables in that screen can get a reference to the ViewModel to perform some logic. This is a bad practice because not all composables below a particular UI tree need to know about a ViewModel. The good practice is to pass to composables only the information that they need following the pattern that state flows down and events flow up. This approach will make your composables more reusable and easier to test.
compose:
  id: guide-compositionlocal-tree-scope-defaults
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.CompositionLocal
  sections:
    - id: guide-compositionlocal-tree-scope-defaults
      title: "Guidance: Reserve CompositionLocal for tree-scoped dependencies with usable defaults"
      aliases:
        - CompositionLocal
        - theme dependency
        - preview defaults
        - parameter versus CompositionLocal
        - ViewModel implicit dependency
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-compositionlocal-deciding-source
      relatedIds:
        - live-compose-guide-compositionlocal-deciding
---

# Guidance: Reserve CompositionLocal for tree-scoped dependencies with usable defaults

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Reserve CompositionLocal for tree-scoped dependencies with usable defaults

Guidance: Use CompositionLocal for dependencies that can reasonably be needed by any descendant of a UI subtree, such as design-system context. Give the local a useful default; if no default is possible, make omission of its provider exceedingly difficult. This keeps previews and focused component tests practical. Pass a component only the state and events it needs instead of hiding a screen ViewModel in a local. Limitation: convenient access alone does not justify a local when only a few descendants need the dependency.

Sources: [live-compose-guide-compositionlocal-deciding-source](https://developer.android.com/develop/ui/compose/compositionlocal#deciding)
