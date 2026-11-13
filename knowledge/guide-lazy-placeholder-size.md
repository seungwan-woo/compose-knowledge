---
type: reference
title: "Guidance: Give asynchronously loaded lazy items a useful initial size"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-lists-avoid-0-size-items-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#avoid-0-size-items
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: c63bda9f8093c8ed968611c282e3e2ff98e100f67548916e7f67242a53c889f1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This can happen in scenarios where, for example, you expect to asynchronously retrieve some data like images, to fill your list’s items at a later stage. That would cause the Lazy layout to compose all of its items in the first measurement, as their height is 0 pixels and it could fit them all in the viewport. Once the items have loaded and their height expanded, Lazy layouts would then discard all of the other items that have unnecessarily been composed the first time around as they cannot in fact fit the viewport. To avoid this, you should set default sizing to your items, so that the Lazy layout can do the correct calculation of how many items can in fact fit in the viewport:

      @Composable
      fun Item(imageUrl: String) {
          AsyncImage(
              model = rememberAsyncImagePainter(model = imageUrl),
              modifier = Modifier.size(30.dp),
              contentDescription = null
              // ...
          )
      }LazyListSnippets.kt

      When you know the approximate size of your items after the data is asynchronously loaded, a good practice is to ensure your items’ sizing remains the same before and after loading, for example, by adding some placeholders. This will help maintain the correct scroll position.
compose:
  id: guide-lazy-placeholder-size
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.lazy.LazyColumn
  sections:
    - id: guide-lazy-placeholder-size
      title: "Guidance: Give asynchronously loaded lazy items a useful initial size"
      aliases:
        - placeholder
        - 0-pixel sized items
        - async image size
        - 자리표시자 크기
        - 리스트 스크롤 위치
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-avoid-0-size-items-source
      relatedIds:
        - live-compose-guide-lists-avoid-0-size-items
---

# Guidance: Give asynchronously loaded lazy items a useful initial size

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Give asynchronously loaded lazy items a useful initial size

Give lazy items that load images or other data asynchronously a nonzero default size. Zero-height items can all fit in the first measurement, causing unnecessary composition before loaded content expands. When the eventual size is approximately known, keep placeholder and loaded sizes consistent to help maintain scroll position. Choose dimensions appropriate to the content rather than treating the guide example as a universal size. Released-version applicability remains unknown.

Sources: [live-compose-guide-lists-avoid-0-size-items-source](https://developer.android.com/develop/ui/compose/lists#avoid-0-size-items)
