---
type: reference
title: "Guidance: Reuse lazy compositions within the same content type"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-lists-content-type-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#content-type
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 1f665e3d84d2ca48c0881090d7575f00c1a74a8161988325af83a0b443c05ca9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Starting with Compose 1.2, in order to maximize the performance of your Lazy layout, consider adding contentType to your lists or grids. This allows you to specify the content type for each item of the layout, in cases where you're composing a list or a grid consisting of multiple different types of items:

      LazyColumn {
          items(elements, contentType = { it.type }) {
              // ...
          }
      }LazyListSnippets.kt

      When you provide the contentType, Compose is able to reuse compositions only between the items of the same type. As reusing is more efficient when you compose items of similar structure, providing the content types ensures Compose doesn't try to compose an item of type A on top of a completely different item of type B. This helps maximize the benefits of composition reusing and your Lazy layout performance.
compose:
  id: guide-lazy-content-type-reuse
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.lazy.LazyColumn
  sections:
    - id: guide-lazy-content-type-reuse
      title: "Guidance: Reuse lazy compositions within the same content type"
      aliases:
        - contentType
        - composition reuse
        - lazy list performance
        - 콘텐츠 타입
        - 리스트 재사용
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-content-type-source
      relatedIds:
        - live-compose-guide-lists-content-type
---

# Guidance: Reuse lazy compositions within the same content type

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Reuse lazy compositions within the same content type

For heterogeneous lazy lists or grids, provide contentType based on the item structure. Compose can reuse compositions between items of the same type instead of attempting reuse across different structures. The official guide recommends this for composition reuse; it does not establish a measured speedup for your app. This card covers reuse grouping, not item identity or saved-state behavior. Validate performance in the target app; released-version applicability remains unknown.

Sources: [live-compose-guide-lists-content-type-source](https://developer.android.com/develop/ui/compose/lists#content-type)
