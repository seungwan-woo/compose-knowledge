---
type: reference
title: "Guidance: Keep lazy item state attached to stable keys"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-lists-item-keys-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#item-keys
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 15f60835e2f8a59b79f24f213680e427482d0937893d65deff5ea70440d2a69a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      By default, each item's state is keyed against the position of the item in the list or grid. However, this can cause issues if the dataset changes, since items which change position effectively lose any remembered state. If you imagine the scenario of LazyRow within a LazyColumn, if the row changes item position, the user would then lose their scroll position within the row.

      To combat this, you can provide a stable and unique key for each item, providing a block to the key parameter. Providing a stable key enables item state to be consistent across dataset changes:

      LazyColumn {
          items(
              items = messages,
              key = { message ->
                  // Return a stable + unique key for the item
                  message.id
              }
          ) { message ->
              MessageRow(message)
          }
      }LazyListSnippets.kt

      By providing keys, you help Compose to handle reorderings correctly. For example, if your item contains remembered state, setting keys would allow Compose to move this state together with the item, when its position changes.

      LazyColumn {
          items(books, key = { it.id }) {
              val rememberedValue = remember {
                  Random.nextInt()
              }
          }
      }LazyListSnippets.kt

      However, there is one limitation on what types you can use as item keys. The key's type must be supported by Bundle, Android’s mechanism for keeping the states when the Activity is recreated. Bundle supports types like primitives, enums or Parcelables.

      LazyColumn {
          items(books, key = {
              // primitives, enums, Parcelable, etc.
          }) {
              // ...
          }
      }LazyListSnippets.kt

      The key must be supported by Bundle so that the rememberSaveable inside the item composable can be restored when the Activity is recreated, or even when you scroll away from this item and scroll back.

      LazyColumn {
          items(books, key = { it.id }) {
              val rememberedValue = rememberSaveable {
                  Random.nextInt()
              }
          }
      }LazyListSnippets.kt
compose:
  id: guide-lazy-list-stable-keys
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.lazy.LazyColumn
  sections:
    - id: guide-lazy-list-stable-keys
      title: "Guidance: Keep lazy item state attached to stable keys"
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
        - androidx.compose.foundation.lazy.LazyRow
        - androidx.compose.foundation.lazy.items
        - stable item keys
        - remembered item state
        - 리스트 키
        - 항목 상태 유지
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-item-keys-source
      relatedIds:
        - live-compose-guide-lists-item-keys
---

# Guidance: Keep lazy item state attached to stable keys

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Keep lazy item state attached to stable keys

Guidance: Provide a stable, unique key such as message.id to lazy items when data can reorder. The default uses item position, so moving an item can lose remembered state; explicit keys let Compose move that state with the item. This also matters for a nested LazyRow whose scroll state should follow its row. Limitation: keys must use Bundle-supported types, such as primitives, enums, or Parcelables, so rememberSaveable state inside an item can be restored after activity recreation or scrolling away and back.

Sources: [live-compose-guide-lists-item-keys-source](https://developer.android.com/develop/ui/compose/lists#item-keys)
