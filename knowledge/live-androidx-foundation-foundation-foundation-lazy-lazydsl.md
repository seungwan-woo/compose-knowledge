---
type: reference
title: androidx.compose.foundation.lazy LazyDsl.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 1
    endLine: 35
    sha256: eddd0d87ed9d80b43499b2bf537c3c1574684332ee585fad3fceb975b13110c7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2020 The Android Open Source Project
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *      http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      package androidx.compose.foundation.lazy

      import androidx.compose.foundation.OverscrollEffect
      import androidx.compose.foundation.gestures.FlingBehavior
      import androidx.compose.foundation.gestures.ScrollableDefaults
      import androidx.compose.foundation.internal.JvmDefaultWithCompatibility
      import androidx.compose.foundation.layout.Arrangement
      import androidx.compose.foundation.layout.PaddingValues
      import androidx.compose.foundation.lazy.layout.LazyLayoutCacheWindow
      import androidx.compose.foundation.rememberOverscrollEffect
      import androidx.compose.runtime.Composable
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.unit.dp

      /** Receiver scope which is used by [LazyColumn] and [LazyRow]. */
      @LazyScopeMarker
      @JvmDefaultWithCompatibility
      public interface LazyListScope {
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 106
    endLine: 140
    sha256: e30ecc6aa7f055dc0613b074b72c684e513d1f038d37c44234ae7e262bcc8106
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *   the scroll position will be maintained based on the key, which means if you add/remove
           *   items before the current visible item the item with the given key will be kept as the first
           *   visible one. This can be overridden by calling 'requestScrollToItem' on the
           *   'LazyListState'.
           * @param contentType the type of the content of this item. The item compositions of the same
           *   type could be reused more efficiently. Note that null is a valid type and items of such
           *   type will be considered compatible.
           * @param content the content of the header
           */
          @Deprecated(
              "Please use the overload with indexing capabilities.",
              level = DeprecationLevel.HIDDEN,
              replaceWith = ReplaceWith("stickyHeader(key, contentType, { _ -> content() })"),
          )
          public fun stickyHeader(
              key: Any? = null,
              contentType: Any? = null,
              content: @Composable LazyItemScope.() -> Unit,
          ): Unit = stickyHeader(key, contentType) { _ -> content() }

          /**
           * Adds a sticky header item, which will remain pinned even when scrolling after it. The header
           * will remain pinned until the next header will take its place.
           *
           * @sample androidx.compose.foundation.samples.StickyHeaderListSample
           * @sample androidx.compose.foundation.samples.StickyHeaderHeaderIndexSample
           * @param key a stable and unique key representing the item. Using the same key for multiple
           *   items in the list is not allowed. Type of the key should be saveable via Bundle on Android.
           *   If null is passed the position in the list will represent the key. When you specify the key
           *   the scroll position will be maintained based on the key, which means if you add/remove
           *   items before the current visible item the item with the given key will be kept as the first
           *   visible one. This can be overridden by calling 'requestScrollToItem' on the
           *   'LazyListState'.
           * @param contentType the type of the content of this item. The item compositions of the same
           *   type could be reused more efficiently. Note that null is a valid type and items of such
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 141
    endLine: 175
    sha256: f97f883d54797455f492f9da8c4d3d67cb59712f94841e23ae6b899752e28019
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *   type will be considered compatible.
           * @param content the content of the header, the header index is provided, this is the item
           *   position within the total set of items in this lazy list (the global index).
           */
          public fun stickyHeader(
              key: Any? = null,
              contentType: Any? = null,
              content: @Composable LazyItemScope.(Int) -> Unit,
          ) {
              item(key, contentType) { content.invoke(this, 0) }
          }
      }

      /**
       * Adds a list of items.
       *
       * @param items the data list
       * @param key a factory of stable and unique keys representing the item. Using the same key for
       *   multiple items in the list is not allowed. Type of the key should be saveable via Bundle on
       *   Android. If null is passed the position in the list will represent the key. When you specify
       *   the key the scroll position will be maintained based on the key, which means if you add/remove
       *   items before the current visible item the item with the given key will be kept as the first
       *   visible one. This can be overridden by calling 'requestScrollToItem' on the 'LazyListState'.
       * @param contentType a factory of the content types for the item. The item compositions of the same
       *   type could be reused more efficiently. Note that null is a valid type and items of such type
       *   will be considered compatible.
       * @param itemContent the content displayed by a single item
       */
      public inline fun <T> LazyListScope.items(
          items: List<T>,
          noinline key: ((item: T) -> Any)? = null,
          noinline contentType: (item: T) -> Any? = { null },
          crossinline itemContent: @Composable LazyItemScope.(item: T) -> Unit,
      ): Unit =
          items(
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 176
    endLine: 210
    sha256: 9e345a9743968cacea48f30366c611ac03e30a1e55ecd3341737cc6f88b47b05
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              count = items.size,
              key = if (key != null) { index: Int -> key(items[index]) } else null,
              contentType = { index: Int -> contentType(items[index]) },
          ) {
              itemContent(items[it])
          }

      @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
      public inline fun <T> LazyListScope.items(
          items: List<T>,
          noinline key: ((item: T) -> Any)? = null,
          crossinline itemContent: @Composable LazyItemScope.(item: T) -> Unit,
      ): Unit = items(items, key, itemContent = itemContent)

      /**
       * Adds a list of items where the content of an item is aware of its index.
       *
       * @param items the data list
       * @param key a factory of stable and unique keys representing the item. Using the same key for
       *   multiple items in the list is not allowed. Type of the key should be saveable via Bundle on
       *   Android. If null is passed the position in the list will represent the key. When you specify
       *   the key the scroll position will be maintained based on the key, which means if you add/remove
       *   items before the current visible item the item with the given key will be kept as the first
       *   visible one. This can be overridden by calling 'requestScrollToItem' on the 'LazyListState'.
       * @param contentType a factory of the content types for the item. The item compositions of the same
       *   type could be reused more efficiently. Note that null is a valid type and items of such type
       *   will be considered compatible.
       * @param itemContent the content displayed by a single item
       */
      public inline fun <T> LazyListScope.itemsIndexed(
          items: List<T>,
          noinline key: ((index: Int, item: T) -> Any)? = null,
          crossinline contentType: (index: Int, item: T) -> Any? = { _, _ -> null },
          crossinline itemContent: @Composable LazyItemScope.(index: Int, item: T) -> Unit,
      ): Unit =
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 211
    endLine: 245
    sha256: f40bd18164c3efb96d38aa6057cab3cb36bc7d0b82a774650353833636874776
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          items(
              count = items.size,
              key = if (key != null) { index: Int -> key(index, items[index]) } else null,
              contentType = { index -> contentType(index, items[index]) },
          ) {
              itemContent(it, items[it])
          }

      @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
      public inline fun <T> LazyListScope.itemsIndexed(
          items: List<T>,
          noinline key: ((index: Int, item: T) -> Any)? = null,
          crossinline itemContent: @Composable LazyItemScope.(index: Int, item: T) -> Unit,
      ): Unit = itemsIndexed(items, key, itemContent = itemContent)

      /**
       * Adds an array of items.
       *
       * @param items the data array
       * @param key a factory of stable and unique keys representing the item. Using the same key for
       *   multiple items in the list is not allowed. Type of the key should be saveable via Bundle on
       *   Android. If null is passed the position in the list will represent the key. When you specify
       *   the key the scroll position will be maintained based on the key, which means if you add/remove
       *   items before the current visible item the item with the given key will be kept as the first
       *   visible one. This can be overridden by calling 'requestScrollToItem' on the 'LazyListState'.
       * @param contentType a factory of the content types for the item. The item compositions of the same
       *   type could be reused more efficiently. Note that null is a valid type and items of such type
       *   will be considered compatible.
       * @param itemContent the content displayed by a single item
       */
      public inline fun <T> LazyListScope.items(
          items: Array<T>,
          noinline key: ((item: T) -> Any)? = null,
          noinline contentType: (item: T) -> Any? = { null },
          crossinline itemContent: @Composable LazyItemScope.(item: T) -> Unit,
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 246
    endLine: 280
    sha256: 8e31156e3b6e262426f260afe404fc1238f3d9041cf046770f3a8da012c2d98f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ): Unit =
          items(
              count = items.size,
              key = if (key != null) { index: Int -> key(items[index]) } else null,
              contentType = { index: Int -> contentType(items[index]) },
          ) {
              itemContent(items[it])
          }

      @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
      public inline fun <T> LazyListScope.items(
          items: Array<T>,
          noinline key: ((item: T) -> Any)? = null,
          crossinline itemContent: @Composable LazyItemScope.(item: T) -> Unit,
      ): Unit = items(items, key, itemContent = itemContent)

      /**
       * Adds an array of items where the content of an item is aware of its index.
       *
       * @param items the data array
       * @param key a factory of stable and unique keys representing the item. Using the same key for
       *   multiple items in the list is not allowed. Type of the key should be saveable via Bundle on
       *   Android. If null is passed the position in the list will represent the key. When you specify
       *   the key the scroll position will be maintained based on the key, which means if you add/remove
       *   items before the current visible item the item with the given key will be kept as the first
       *   visible one. This can be overridden by calling 'requestScrollToItem' on the 'LazyListState'.
       * @param contentType a factory of the content types for the item. The item compositions of the same
       *   type could be reused more efficiently. Note that null is a valid type and items of such type
       *   will be considered compatible.
       * @param itemContent the content displayed by a single item
       */
      public inline fun <T> LazyListScope.itemsIndexed(
          items: Array<T>,
          noinline key: ((index: Int, item: T) -> Any)? = null,
          crossinline contentType: (index: Int, item: T) -> Any? = { _, _ -> null },
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 281
    endLine: 315
    sha256: 5db4f8f92562b3618964cca241edd92c35bbf6734e7c165a12acd5b1c00732e7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          crossinline itemContent: @Composable LazyItemScope.(index: Int, item: T) -> Unit,
      ): Unit =
          items(
              count = items.size,
              key = if (key != null) { index: Int -> key(index, items[index]) } else null,
              contentType = { index -> contentType(index, items[index]) },
          ) {
              itemContent(it, items[it])
          }

      @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
      public inline fun <T> LazyListScope.itemsIndexed(
          items: Array<T>,
          noinline key: ((index: Int, item: T) -> Any)? = null,
          crossinline itemContent: @Composable LazyItemScope.(index: Int, item: T) -> Unit,
      ): Unit = itemsIndexed(items, key, itemContent = itemContent)

      /**
       * The horizontally scrolling list that only composes and lays out the currently visible items. The
       * [content] block defines a DSL which allows you to emit items of different types. For example you
       * can use [LazyListScope.item] to add a single item and [LazyListScope.items] to add a list of
       * items.
       *
       * @sample androidx.compose.foundation.samples.LazyRowSample
       *
       * Sample with custom cache window:
       *
       * @sample androidx.compose.foundation.samples.LazyListCacheWindowSample
       * @param modifier the modifier to apply to this layout
       * @param state the state object to be used to control or observe the list's state
       * @param contentPadding a padding around the whole content. This will add padding for the content
       *   after it has been clipped, which is not possible via [modifier] param. You can use it to add a
       *   padding before the first item or after the last one. If you want to add a spacing between each
       *   item use [horizontalArrangement].
       * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items are laid
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 316
    endLine: 346
    sha256: 4181fd62feb5a987e8fb6491cbbf7db55ff46206fe120d4030b0fb3dbdf0fc15
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   out in the reverse order and [LazyListState.firstVisibleItemIndex] == 0 means that row is
       *   scrolled to the end. Note that [reverseLayout] does not change the behavior of
       *   [horizontalArrangement], e.g. with [Arrangement.Start] [123###] becomes [321###].
       * @param horizontalArrangement The horizontal arrangement of the layout's children. This allows to
       *   add a spacing between items and specify the arrangement of the items when we have not enough of
       *   them to fill the whole minimum size.
       * @param verticalAlignment the vertical alignment applied to the items
       * @param flingBehavior logic describing fling behavior.
       * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
       *   allowed. You can still scroll programmatically using the state even when it is disabled.
       * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
       *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
       *   need to use Modifier.overscroll separately.
       * @param cacheWindow [LazyLayoutCacheWindow] configuring the area ahead and behind the viewport to
       *   prefetch and retain items. The default cache window does not cache items while the user is not
       *   scrolling. Override this to tune scrolling performance, such as increasing the ahead window to
       *   reduce frame drops during scrolling or adding a behind window to retain recently visible items
       *   when scrolling back and forth.
       * @param content a block which describes the content. Inside this block you can use methods like
       *   [LazyListScope.item] to add a single item or [LazyListScope.items] to add a list of items.
       */
      @Composable
      public fun LazyRow(
          modifier: Modifier = Modifier,
          state: LazyListState = rememberLazyListState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
          horizontalArrangement: Arrangement.Horizontal =
              if (!reverseLayout) Arrangement.Start else Arrangement.End,
          verticalAlignment: Alignment.Vertical = Alignment.Top,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-347-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 347
    endLine: 381
    sha256: d2e44307cef633f52239da7c621490ed33edfffb6e2fefef5ef64595c187c84f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          userScrollEnabled: Boolean = true,
          overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
          cacheWindow: LazyLayoutCacheWindow = LazyListDefaults.cacheWindow(state),
          content: LazyListScope.() -> Unit,
      ) {
          LazyList(
              modifier = modifier,
              state = state,
              contentPadding = contentPadding,
              verticalAlignment = verticalAlignment,
              horizontalArrangement = horizontalArrangement,
              isVertical = false,
              flingBehavior = flingBehavior,
              reverseLayout = reverseLayout,
              userScrollEnabled = userScrollEnabled,
              overscrollEffect = overscrollEffect,
              cacheWindow = cacheWindow,
              content = content,
          )
      }

      /**
       * The horizontally scrolling list that only composes and lays out the currently visible items. The
       * [content] block defines a DSL which allows you to emit items of different types. For example you
       * can use [LazyListScope.item] to add a single item and [LazyListScope.items] to add a list of
       * items.
       *
       * @sample androidx.compose.foundation.samples.LazyRowSample
       * @param modifier the modifier to apply to this layout
       * @param state the state object to be used to control or observe the list's state
       * @param contentPadding a padding around the whole content. This will add padding for the content
       *   after it has been clipped, which is not possible via [modifier] param. You can use it to add a
       *   padding before the first item or after the last one. If you want to add a spacing between each
       *   item use [horizontalArrangement].
       * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items are laid
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 36
    endLine: 70
    sha256: 062de9602b251140dc0b5c0bdeb3759d3dbe88a7bfeb41cce0223d043df6a654
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /**
           * Adds a single item.
           *
           * @param key a stable and unique key representing the item. Using the same key for multiple
           *   items in the list is not allowed. Type of the key should be saveable via Bundle on Android.
           *   If null is passed the position in the list will represent the key. When you specify the key
           *   the scroll position will be maintained based on the key, which means if you add/remove
           *   items before the current visible item the item with the given key will be kept as the first
           *   visible one. This can be overridden by calling 'requestScrollToItem' on the
           *   'LazyListState'.
           * @param contentType the type of the content of this item. The item compositions of the same
           *   type could be reused more efficiently. Note that null is a valid type and items of such
           *   type will be considered compatible.
           * @param content the content of the item
           */
          public fun item(
              key: Any? = null,
              contentType: Any? = null,
              content: @Composable LazyItemScope.() -> Unit,
          ) {
              error("The method is not implemented")
          }

          @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
          public fun item(key: Any? = null, content: @Composable LazyItemScope.() -> Unit) {
              item(key, null, content)
          }

          /**
           * Adds a [count] of items.
           *
           * @param count the items count
           * @param key a factory of stable and unique keys representing the item. Using the same key for
           *   multiple items in the list is not allowed. Type of the key should be saveable via Bundle on
           *   Android. If null is passed the position in the list will represent the key. When you
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-382-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 382
    endLine: 416
    sha256: 689283cb0a872191ecd142e697a9a6cf1ceb5578820ebc8ba47aaa8c9b6c2b7a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   out in the reverse order and [LazyListState.firstVisibleItemIndex] == 0 means that row is
       *   scrolled to the end. Note that [reverseLayout] does not change the behavior of
       *   [horizontalArrangement], e.g. with [Arrangement.Start] [123###] becomes [321###].
       * @param horizontalArrangement The horizontal arrangement of the layout's children. This allows to
       *   add a spacing between items and specify the arrangement of the items when we have not enough of
       *   them to fill the whole minimum size.
       * @param verticalAlignment the vertical alignment applied to the items
       * @param flingBehavior logic describing fling behavior.
       * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
       *   allowed. You can still scroll programmatically using the state even when it is disabled.
       * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
       *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
       *   need to use Modifier.overscroll separately.
       * @param content a block which describes the content. Inside this block you can use methods like
       *   [LazyListScope.item] to add a single item or [LazyListScope.items] to add a list of items.
       */
      @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun LazyRow(
          modifier: Modifier = Modifier,
          state: LazyListState = rememberLazyListState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
          horizontalArrangement: Arrangement.Horizontal =
              if (!reverseLayout) Arrangement.Start else Arrangement.End,
          verticalAlignment: Alignment.Vertical = Alignment.Top,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
          userScrollEnabled: Boolean = true,
          overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
          content: LazyListScope.() -> Unit,
      ) {
          LazyRow(
              modifier = modifier,
              state = state,
              contentPadding = contentPadding,
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-417-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 417
    endLine: 451
    sha256: c12d6701e0587f1cfa775bdcead2bfe792607fc618baf96a01e1355f982b2174
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              reverseLayout = reverseLayout,
              horizontalArrangement = horizontalArrangement,
              verticalAlignment = verticalAlignment,
              flingBehavior = flingBehavior,
              userScrollEnabled = userScrollEnabled,
              overscrollEffect = overscrollEffect,
              cacheWindow = LazyListDefaults.cacheWindow(state),
              content = content,
          )
      }

      /**
       * The vertically scrolling list that only composes and lays out the currently visible items. The
       * [content] block defines a DSL which allows you to emit items of different types. For example you
       * can use [LazyListScope.item] to add a single item and [LazyListScope.items] to add a list of
       * items.
       *
       * @sample androidx.compose.foundation.samples.LazyColumnSample
       * @sample androidx.compose.foundation.samples.LazyColumnWithLazyRowsSample
       *
       * Sample with custom cache window:
       *
       * @sample androidx.compose.foundation.samples.LazyListCacheWindowSample
       * @param modifier the modifier to apply to this layout.
       * @param state the state object to be used to control or observe the list's state.
       * @param contentPadding a padding around the whole content. This will add padding for the. content
       *   after it has been clipped, which is not possible via [modifier] param. You can use it to add a
       *   padding before the first item or after the last one. If you want to add a spacing between each
       *   item use [verticalArrangement].
       * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items are laid
       *   out in the reverse order and [LazyListState.firstVisibleItemIndex] == 0 means that column is
       *   scrolled to the bottom. Note that [reverseLayout] does not change the behavior of
       *   [verticalArrangement], e.g. with [Arrangement.Top] (top) 123### (bottom) becomes (top) 321###
       *   (bottom).
       * @param verticalArrangement The vertical arrangement of the layout's children. This allows to add
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-452-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 452
    endLine: 486
    sha256: 4e32767f71e0524fe44752a7f9869f6800d6910eecea0315a1ee51c4caee84ac
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   a spacing between items and specify the arrangement of the items when we have not enough of
       *   them to fill the whole minimum size.
       * @param horizontalAlignment the horizontal alignment applied to the items.
       * @param flingBehavior logic describing fling behavior.
       * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
       *   allowed. You can still scroll programmatically using the state even when it is disabled
       * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
       *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
       *   need to use Modifier.overscroll separately.
       * @param cacheWindow [LazyLayoutCacheWindow] configuring the area ahead and behind the viewport to
       *   prefetch and retain items. The default cache window does not cache items while the user is not
       *   scrolling. Override this to tune scrolling performance, such as increasing the ahead window to
       *   reduce frame drops during scrolling or adding a behind window to retain recently visible items
       *   when scrolling back and forth.
       * @param content a block which describes the content. Inside this block you can use methods like
       *   [LazyListScope.item] to add a single item or [LazyListScope.items] to add a list of items.
       */
      @Composable
      public fun LazyColumn(
          modifier: Modifier = Modifier,
          state: LazyListState = rememberLazyListState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
          verticalArrangement: Arrangement.Vertical =
              if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
          horizontalAlignment: Alignment.Horizontal = Alignment.Start,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
          userScrollEnabled: Boolean = true,
          overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
          cacheWindow: LazyLayoutCacheWindow = LazyListDefaults.cacheWindow(state),
          content: LazyListScope.() -> Unit,
      ) {
          LazyList(
              modifier = modifier,
              state = state,
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-487-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 487
    endLine: 521
    sha256: 0a79cbcf6c22782dec1d343b0ceb74ddb002a2cddbc9023bf88b53c61e562774
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              contentPadding = contentPadding,
              flingBehavior = flingBehavior,
              horizontalAlignment = horizontalAlignment,
              verticalArrangement = verticalArrangement,
              isVertical = true,
              reverseLayout = reverseLayout,
              userScrollEnabled = userScrollEnabled,
              overscrollEffect = overscrollEffect,
              cacheWindow = cacheWindow,
              content = content,
          )
      }

      /**
       * The vertically scrolling list that only composes and lays out the currently visible items. The
       * [content] block defines a DSL which allows you to emit items of different types. For example you
       * can use [LazyListScope.item] to add a single item and [LazyListScope.items] to add a list of
       * items.
       *
       * @sample androidx.compose.foundation.samples.LazyColumnSample
       * @sample androidx.compose.foundation.samples.LazyColumnWithLazyRowsSample
       * @param modifier the modifier to apply to this layout.
       * @param state the state object to be used to control or observe the list's state.
       * @param contentPadding a padding around the whole content. This will add padding for the. content
       *   after it has been clipped, which is not possible via [modifier] param. You can use it to add a
       *   padding before the first item or after the last one. If you want to add a spacing between each
       *   item use [verticalArrangement].
       * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items are laid
       *   out in the reverse order and [LazyListState.firstVisibleItemIndex] == 0 means that column is
       *   scrolled to the bottom. Note that [reverseLayout] does not change the behavior of
       *   [verticalArrangement], e.g. with [Arrangement.Top] (top) 123### (bottom) becomes (top) 321###
       *   (bottom).
       * @param verticalArrangement The vertical arrangement of the layout's children. This allows to add
       *   a spacing between items and specify the arrangement of the items when we have not enough of
       *   them to fill the whole minimum size.
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-522-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 522
    endLine: 556
    sha256: 8bc1a1984dd9d556d6b609e8370aa1182a5dec7cf826babe1fadecf3d3d4f04d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param horizontalAlignment the horizontal alignment applied to the items.
       * @param flingBehavior logic describing fling behavior.
       * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
       *   allowed. You can still scroll programmatically using the state even when it is disabled
       * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
       *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
       *   need to use Modifier.overscroll separately.
       * @param content a block which describes the content. Inside this block you can use methods like
       *   [LazyListScope.item] to add a single item or [LazyListScope.items] to add a list of items.
       */
      @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun LazyColumn(
          modifier: Modifier = Modifier,
          state: LazyListState = rememberLazyListState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
          verticalArrangement: Arrangement.Vertical =
              if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
          horizontalAlignment: Alignment.Horizontal = Alignment.Start,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
          userScrollEnabled: Boolean = true,
          overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
          content: LazyListScope.() -> Unit,
      ) {
          LazyColumn(
              modifier = modifier,
              state = state,
              contentPadding = contentPadding,
              reverseLayout = reverseLayout,
              verticalArrangement = verticalArrangement,
              horizontalAlignment = horizontalAlignment,
              flingBehavior = flingBehavior,
              userScrollEnabled = userScrollEnabled,
              overscrollEffect = overscrollEffect,
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-557-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 557
    endLine: 591
    sha256: 7e860e621e971e7af9cfb7da0395fb7985d4f21573ec4bb4cc4d8132cc676d46
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              cacheWindow = LazyListDefaults.cacheWindow(state),
              content = content,
          )
      }

      @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun LazyColumn(
          modifier: Modifier = Modifier,
          state: LazyListState = rememberLazyListState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
          verticalArrangement: Arrangement.Vertical =
              if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
          horizontalAlignment: Alignment.Horizontal = Alignment.Start,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
          userScrollEnabled: Boolean = true,
          content: LazyListScope.() -> Unit,
      ) {
          LazyColumn(
              modifier = modifier,
              state = state,
              contentPadding = contentPadding,
              reverseLayout = reverseLayout,
              verticalArrangement = verticalArrangement,
              horizontalAlignment = horizontalAlignment,
              flingBehavior = flingBehavior,
              userScrollEnabled = userScrollEnabled,
              overscrollEffect = rememberOverscrollEffect(),
              content = content,
          )
      }

      @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
      @Composable
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-592-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 592
    endLine: 626
    sha256: d90f675f848d6237fce74ac85adbf763b576fb0ce979e163dc0f2af99515c39e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public fun LazyColumn(
          modifier: Modifier = Modifier,
          state: LazyListState = rememberLazyListState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
          verticalArrangement: Arrangement.Vertical =
              if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
          horizontalAlignment: Alignment.Horizontal = Alignment.Start,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
          content: LazyListScope.() -> Unit,
      ) {
          LazyColumn(
              modifier = modifier,
              state = state,
              contentPadding = contentPadding,
              reverseLayout = reverseLayout,
              verticalArrangement = verticalArrangement,
              horizontalAlignment = horizontalAlignment,
              flingBehavior = flingBehavior,
              userScrollEnabled = true,
              content = content,
          )
      }

      @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun LazyRow(
          modifier: Modifier = Modifier,
          state: LazyListState = rememberLazyListState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
          horizontalArrangement: Arrangement.Horizontal =
              if (!reverseLayout) Arrangement.Start else Arrangement.End,
          verticalAlignment: Alignment.Vertical = Alignment.Top,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-627-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 627
    endLine: 661
    sha256: a302c6809a1f1a7e761e23abaf383dad62fe98a6609d96c20f38dd11e8269588
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          userScrollEnabled: Boolean = true,
          content: LazyListScope.() -> Unit,
      ) {
          LazyRow(
              modifier = modifier,
              state = state,
              contentPadding = contentPadding,
              reverseLayout = reverseLayout,
              horizontalArrangement = horizontalArrangement,
              verticalAlignment = verticalAlignment,
              flingBehavior = flingBehavior,
              userScrollEnabled = userScrollEnabled,
              overscrollEffect = rememberOverscrollEffect(),
              content = content,
          )
      }

      @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun LazyRow(
          modifier: Modifier = Modifier,
          state: LazyListState = rememberLazyListState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
          horizontalArrangement: Arrangement.Horizontal =
              if (!reverseLayout) Arrangement.Start else Arrangement.End,
          verticalAlignment: Alignment.Vertical = Alignment.Top,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
          content: LazyListScope.() -> Unit,
      ) {
          LazyRow(
              modifier = modifier,
              state = state,
              contentPadding = contentPadding,
              reverseLayout = reverseLayout,
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-662-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 662
    endLine: 669
    sha256: dfb0203b0aaaa9b7a42c863a063e9aa0303b4860af09987a8f74b27efd6660a3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              horizontalArrangement = horizontalArrangement,
              verticalAlignment = verticalAlignment,
              flingBehavior = flingBehavior,
              userScrollEnabled = true,
              content = content,
          )
      }
  - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt
    startLine: 71
    endLine: 105
    sha256: 7d3e78deec4edd5cb875bf50439bc372d12dc4bdb75e22f842d43dccd01e4ca3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *   specify the key the scroll position will be maintained based on the key, which means if you
           *   add/remove items before the current visible item the item with the given key will be kept
           *   as the first visible one. This can be overridden by calling 'requestScrollToItem' on the
           *   'LazyListState'.
           * @param contentType a factory of the content types for the item. The item compositions of the
           *   same type could be reused more efficiently. Note that null is a valid type and items of
           *   such type will be considered compatible.
           * @param itemContent the content displayed by a single item
           */
          public fun items(
              count: Int,
              key: ((index: Int) -> Any)? = null,
              contentType: (index: Int) -> Any? = { null },
              itemContent: @Composable LazyItemScope.(index: Int) -> Unit,
          ) {
              error("The method is not implemented")
          }

          @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
          public fun items(
              count: Int,
              key: ((index: Int) -> Any)? = null,
              itemContent: @Composable LazyItemScope.(index: Int) -> Unit,
          ) {
              items(count, key, { null }, itemContent)
          }

          /**
           * Adds a sticky header item, which will remain pinned even when scrolling after it. The header
           * will remain pinned until the next header will take its place.
           *
           * @sample androidx.compose.foundation.samples.StickyHeaderListSample
           * @param key a stable and unique key representing the item. Using the same key for multiple
           *   items in the list is not allowed. Type of the key should be saveable via Bundle on Android.
           *   If null is passed the position in the list will represent the key. When you specify the key
compose:
  id: live-androidx-foundation-foundation-foundation-lazy-lazydsl
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.lazy
  sections:
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-1
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 1–35)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.LazyRow
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-106
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 106–140)
      aliases:
        - androidx.compose.foundation.lazy.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-141
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 141–175)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-176
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 176–210)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.items
        - androidx.compose.foundation.lazy.itemsIndexed
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-211
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 211–245)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.items
        - androidx.compose.foundation.lazy.itemsIndexed
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-246
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 246–280)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.items
        - androidx.compose.foundation.lazy.itemsIndexed
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-281
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 281–315)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.items
        - androidx.compose.foundation.lazy.itemsIndexed
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-281-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-316
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 316–346)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.items
        - androidx.compose.foundation.lazy.LazyRow
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-316-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-347
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 347–381)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-347-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-36
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 36–70)
      aliases:
        - androidx.compose.foundation.lazy.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-382
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 382–416)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.items
        - androidx.compose.foundation.lazy.LazyRow
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-382-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-417
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 417–451)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-417-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-452
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 452–486)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.items
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-452-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-487
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 487–521)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-487-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-522
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 522–556)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.items
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-522-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-557
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 557–591)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-557-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-592
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 592–626)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.LazyRow
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-592-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-627
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 627–661)
      aliases:
        - androidx.compose.foundation.lazy.LazyListScope
        - androidx.compose.foundation.lazy.LazyRow
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-627-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-662
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 662–669)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-662-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-71
      title: androidx.compose.foundation.lazy LazyDsl.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.lazy.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-71-source
      relatedIds: []
---

# androidx.compose.foundation.lazy LazyDsl.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 1–35)

/*
 * Copyright 2020 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package androidx.compose.foundation.lazy

import androidx.compose.foundation.OverscrollEffect
import androidx.compose.foundation.gestures.FlingBehavior
import androidx.compose.foundation.gestures.ScrollableDefaults
import androidx.compose.foundation.internal.JvmDefaultWithCompatibility
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.lazy.layout.LazyLayoutCacheWindow
import androidx.compose.foundation.rememberOverscrollEffect
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

/** Receiver scope which is used by [LazyColumn] and [LazyRow]. */
@LazyScopeMarker
@JvmDefaultWithCompatibility
public interface LazyListScope {

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 106–140)

     *   the scroll position will be maintained based on the key, which means if you add/remove
     *   items before the current visible item the item with the given key will be kept as the first
     *   visible one. This can be overridden by calling 'requestScrollToItem' on the
     *   'LazyListState'.
     * @param contentType the type of the content of this item. The item compositions of the same
     *   type could be reused more efficiently. Note that null is a valid type and items of such
     *   type will be considered compatible.
     * @param content the content of the header
     */
    @Deprecated(
        "Please use the overload with indexing capabilities.",
        level = DeprecationLevel.HIDDEN,
        replaceWith = ReplaceWith("stickyHeader(key, contentType, { _ -> content() })"),
    )
    public fun stickyHeader(
        key: Any? = null,
        contentType: Any? = null,
        content: @Composable LazyItemScope.() -> Unit,
    ): Unit = stickyHeader(key, contentType) { _ -> content() }

    /**
     * Adds a sticky header item, which will remain pinned even when scrolling after it. The header
     * will remain pinned until the next header will take its place.
     *
     * @sample androidx.compose.foundation.samples.StickyHeaderListSample
     * @sample androidx.compose.foundation.samples.StickyHeaderHeaderIndexSample
     * @param key a stable and unique key representing the item. Using the same key for multiple
     *   items in the list is not allowed. Type of the key should be saveable via Bundle on Android.
     *   If null is passed the position in the list will represent the key. When you specify the key
     *   the scroll position will be maintained based on the key, which means if you add/remove
     *   items before the current visible item the item with the given key will be kept as the first
     *   visible one. This can be overridden by calling 'requestScrollToItem' on the
     *   'LazyListState'.
     * @param contentType the type of the content of this item. The item compositions of the same
     *   type could be reused more efficiently. Note that null is a valid type and items of such

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 141–175)

     *   type will be considered compatible.
     * @param content the content of the header, the header index is provided, this is the item
     *   position within the total set of items in this lazy list (the global index).
     */
    public fun stickyHeader(
        key: Any? = null,
        contentType: Any? = null,
        content: @Composable LazyItemScope.(Int) -> Unit,
    ) {
        item(key, contentType) { content.invoke(this, 0) }
    }
}

/**
 * Adds a list of items.
 *
 * @param items the data list
 * @param key a factory of stable and unique keys representing the item. Using the same key for
 *   multiple items in the list is not allowed. Type of the key should be saveable via Bundle on
 *   Android. If null is passed the position in the list will represent the key. When you specify
 *   the key the scroll position will be maintained based on the key, which means if you add/remove
 *   items before the current visible item the item with the given key will be kept as the first
 *   visible one. This can be overridden by calling 'requestScrollToItem' on the 'LazyListState'.
 * @param contentType a factory of the content types for the item. The item compositions of the same
 *   type could be reused more efficiently. Note that null is a valid type and items of such type
 *   will be considered compatible.
 * @param itemContent the content displayed by a single item
 */
public inline fun <T> LazyListScope.items(
    items: List<T>,
    noinline key: ((item: T) -> Any)? = null,
    noinline contentType: (item: T) -> Any? = { null },
    crossinline itemContent: @Composable LazyItemScope.(item: T) -> Unit,
): Unit =
    items(

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 176–210)

        count = items.size,
        key = if (key != null) { index: Int -> key(items[index]) } else null,
        contentType = { index: Int -> contentType(items[index]) },
    ) {
        itemContent(items[it])
    }

@Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
public inline fun <T> LazyListScope.items(
    items: List<T>,
    noinline key: ((item: T) -> Any)? = null,
    crossinline itemContent: @Composable LazyItemScope.(item: T) -> Unit,
): Unit = items(items, key, itemContent = itemContent)

/**
 * Adds a list of items where the content of an item is aware of its index.
 *
 * @param items the data list
 * @param key a factory of stable and unique keys representing the item. Using the same key for
 *   multiple items in the list is not allowed. Type of the key should be saveable via Bundle on
 *   Android. If null is passed the position in the list will represent the key. When you specify
 *   the key the scroll position will be maintained based on the key, which means if you add/remove
 *   items before the current visible item the item with the given key will be kept as the first
 *   visible one. This can be overridden by calling 'requestScrollToItem' on the 'LazyListState'.
 * @param contentType a factory of the content types for the item. The item compositions of the same
 *   type could be reused more efficiently. Note that null is a valid type and items of such type
 *   will be considered compatible.
 * @param itemContent the content displayed by a single item
 */
public inline fun <T> LazyListScope.itemsIndexed(
    items: List<T>,
    noinline key: ((index: Int, item: T) -> Any)? = null,
    crossinline contentType: (index: Int, item: T) -> Any? = { _, _ -> null },
    crossinline itemContent: @Composable LazyItemScope.(index: Int, item: T) -> Unit,
): Unit =

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 211–245)

    items(
        count = items.size,
        key = if (key != null) { index: Int -> key(index, items[index]) } else null,
        contentType = { index -> contentType(index, items[index]) },
    ) {
        itemContent(it, items[it])
    }

@Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
public inline fun <T> LazyListScope.itemsIndexed(
    items: List<T>,
    noinline key: ((index: Int, item: T) -> Any)? = null,
    crossinline itemContent: @Composable LazyItemScope.(index: Int, item: T) -> Unit,
): Unit = itemsIndexed(items, key, itemContent = itemContent)

/**
 * Adds an array of items.
 *
 * @param items the data array
 * @param key a factory of stable and unique keys representing the item. Using the same key for
 *   multiple items in the list is not allowed. Type of the key should be saveable via Bundle on
 *   Android. If null is passed the position in the list will represent the key. When you specify
 *   the key the scroll position will be maintained based on the key, which means if you add/remove
 *   items before the current visible item the item with the given key will be kept as the first
 *   visible one. This can be overridden by calling 'requestScrollToItem' on the 'LazyListState'.
 * @param contentType a factory of the content types for the item. The item compositions of the same
 *   type could be reused more efficiently. Note that null is a valid type and items of such type
 *   will be considered compatible.
 * @param itemContent the content displayed by a single item
 */
public inline fun <T> LazyListScope.items(
    items: Array<T>,
    noinline key: ((item: T) -> Any)? = null,
    noinline contentType: (item: T) -> Any? = { null },
    crossinline itemContent: @Composable LazyItemScope.(item: T) -> Unit,

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 246–280)

): Unit =
    items(
        count = items.size,
        key = if (key != null) { index: Int -> key(items[index]) } else null,
        contentType = { index: Int -> contentType(items[index]) },
    ) {
        itemContent(items[it])
    }

@Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
public inline fun <T> LazyListScope.items(
    items: Array<T>,
    noinline key: ((item: T) -> Any)? = null,
    crossinline itemContent: @Composable LazyItemScope.(item: T) -> Unit,
): Unit = items(items, key, itemContent = itemContent)

/**
 * Adds an array of items where the content of an item is aware of its index.
 *
 * @param items the data array
 * @param key a factory of stable and unique keys representing the item. Using the same key for
 *   multiple items in the list is not allowed. Type of the key should be saveable via Bundle on
 *   Android. If null is passed the position in the list will represent the key. When you specify
 *   the key the scroll position will be maintained based on the key, which means if you add/remove
 *   items before the current visible item the item with the given key will be kept as the first
 *   visible one. This can be overridden by calling 'requestScrollToItem' on the 'LazyListState'.
 * @param contentType a factory of the content types for the item. The item compositions of the same
 *   type could be reused more efficiently. Note that null is a valid type and items of such type
 *   will be considered compatible.
 * @param itemContent the content displayed by a single item
 */
public inline fun <T> LazyListScope.itemsIndexed(
    items: Array<T>,
    noinline key: ((index: Int, item: T) -> Any)? = null,
    crossinline contentType: (index: Int, item: T) -> Any? = { _, _ -> null },

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 281–315)

    crossinline itemContent: @Composable LazyItemScope.(index: Int, item: T) -> Unit,
): Unit =
    items(
        count = items.size,
        key = if (key != null) { index: Int -> key(index, items[index]) } else null,
        contentType = { index -> contentType(index, items[index]) },
    ) {
        itemContent(it, items[it])
    }

@Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
public inline fun <T> LazyListScope.itemsIndexed(
    items: Array<T>,
    noinline key: ((index: Int, item: T) -> Any)? = null,
    crossinline itemContent: @Composable LazyItemScope.(index: Int, item: T) -> Unit,
): Unit = itemsIndexed(items, key, itemContent = itemContent)

/**
 * The horizontally scrolling list that only composes and lays out the currently visible items. The
 * [content] block defines a DSL which allows you to emit items of different types. For example you
 * can use [LazyListScope.item] to add a single item and [LazyListScope.items] to add a list of
 * items.
 *
 * @sample androidx.compose.foundation.samples.LazyRowSample
 *
 * Sample with custom cache window:
 *
 * @sample androidx.compose.foundation.samples.LazyListCacheWindowSample
 * @param modifier the modifier to apply to this layout
 * @param state the state object to be used to control or observe the list's state
 * @param contentPadding a padding around the whole content. This will add padding for the content
 *   after it has been clipped, which is not possible via [modifier] param. You can use it to add a
 *   padding before the first item or after the last one. If you want to add a spacing between each
 *   item use [horizontalArrangement].
 * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items are laid

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 316–346)

 *   out in the reverse order and [LazyListState.firstVisibleItemIndex] == 0 means that row is
 *   scrolled to the end. Note that [reverseLayout] does not change the behavior of
 *   [horizontalArrangement], e.g. with [Arrangement.Start] [123###] becomes [321###].
 * @param horizontalArrangement The horizontal arrangement of the layout's children. This allows to
 *   add a spacing between items and specify the arrangement of the items when we have not enough of
 *   them to fill the whole minimum size.
 * @param verticalAlignment the vertical alignment applied to the items
 * @param flingBehavior logic describing fling behavior.
 * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
 *   allowed. You can still scroll programmatically using the state even when it is disabled.
 * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
 *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
 *   need to use Modifier.overscroll separately.
 * @param cacheWindow [LazyLayoutCacheWindow] configuring the area ahead and behind the viewport to
 *   prefetch and retain items. The default cache window does not cache items while the user is not
 *   scrolling. Override this to tune scrolling performance, such as increasing the ahead window to
 *   reduce frame drops during scrolling or adding a behind window to retain recently visible items
 *   when scrolling back and forth.
 * @param content a block which describes the content. Inside this block you can use methods like
 *   [LazyListScope.item] to add a single item or [LazyListScope.items] to add a list of items.
 */
@Composable
public fun LazyRow(
    modifier: Modifier = Modifier,
    state: LazyListState = rememberLazyListState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    horizontalArrangement: Arrangement.Horizontal =
        if (!reverseLayout) Arrangement.Start else Arrangement.End,
    verticalAlignment: Alignment.Vertical = Alignment.Top,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 347–381)

    userScrollEnabled: Boolean = true,
    overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
    cacheWindow: LazyLayoutCacheWindow = LazyListDefaults.cacheWindow(state),
    content: LazyListScope.() -> Unit,
) {
    LazyList(
        modifier = modifier,
        state = state,
        contentPadding = contentPadding,
        verticalAlignment = verticalAlignment,
        horizontalArrangement = horizontalArrangement,
        isVertical = false,
        flingBehavior = flingBehavior,
        reverseLayout = reverseLayout,
        userScrollEnabled = userScrollEnabled,
        overscrollEffect = overscrollEffect,
        cacheWindow = cacheWindow,
        content = content,
    )
}

/**
 * The horizontally scrolling list that only composes and lays out the currently visible items. The
 * [content] block defines a DSL which allows you to emit items of different types. For example you
 * can use [LazyListScope.item] to add a single item and [LazyListScope.items] to add a list of
 * items.
 *
 * @sample androidx.compose.foundation.samples.LazyRowSample
 * @param modifier the modifier to apply to this layout
 * @param state the state object to be used to control or observe the list's state
 * @param contentPadding a padding around the whole content. This will add padding for the content
 *   after it has been clipped, which is not possible via [modifier] param. You can use it to add a
 *   padding before the first item or after the last one. If you want to add a spacing between each
 *   item use [horizontalArrangement].
 * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items are laid

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-347-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 36–70)

    /**
     * Adds a single item.
     *
     * @param key a stable and unique key representing the item. Using the same key for multiple
     *   items in the list is not allowed. Type of the key should be saveable via Bundle on Android.
     *   If null is passed the position in the list will represent the key. When you specify the key
     *   the scroll position will be maintained based on the key, which means if you add/remove
     *   items before the current visible item the item with the given key will be kept as the first
     *   visible one. This can be overridden by calling 'requestScrollToItem' on the
     *   'LazyListState'.
     * @param contentType the type of the content of this item. The item compositions of the same
     *   type could be reused more efficiently. Note that null is a valid type and items of such
     *   type will be considered compatible.
     * @param content the content of the item
     */
    public fun item(
        key: Any? = null,
        contentType: Any? = null,
        content: @Composable LazyItemScope.() -> Unit,
    ) {
        error("The method is not implemented")
    }

    @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
    public fun item(key: Any? = null, content: @Composable LazyItemScope.() -> Unit) {
        item(key, null, content)
    }

    /**
     * Adds a [count] of items.
     *
     * @param count the items count
     * @param key a factory of stable and unique keys representing the item. Using the same key for
     *   multiple items in the list is not allowed. Type of the key should be saveable via Bundle on
     *   Android. If null is passed the position in the list will represent the key. When you

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 382–416)

 *   out in the reverse order and [LazyListState.firstVisibleItemIndex] == 0 means that row is
 *   scrolled to the end. Note that [reverseLayout] does not change the behavior of
 *   [horizontalArrangement], e.g. with [Arrangement.Start] [123###] becomes [321###].
 * @param horizontalArrangement The horizontal arrangement of the layout's children. This allows to
 *   add a spacing between items and specify the arrangement of the items when we have not enough of
 *   them to fill the whole minimum size.
 * @param verticalAlignment the vertical alignment applied to the items
 * @param flingBehavior logic describing fling behavior.
 * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
 *   allowed. You can still scroll programmatically using the state even when it is disabled.
 * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
 *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
 *   need to use Modifier.overscroll separately.
 * @param content a block which describes the content. Inside this block you can use methods like
 *   [LazyListScope.item] to add a single item or [LazyListScope.items] to add a list of items.
 */
@Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
@Composable
public fun LazyRow(
    modifier: Modifier = Modifier,
    state: LazyListState = rememberLazyListState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    horizontalArrangement: Arrangement.Horizontal =
        if (!reverseLayout) Arrangement.Start else Arrangement.End,
    verticalAlignment: Alignment.Vertical = Alignment.Top,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    userScrollEnabled: Boolean = true,
    overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
    content: LazyListScope.() -> Unit,
) {
    LazyRow(
        modifier = modifier,
        state = state,
        contentPadding = contentPadding,

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-382-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 417–451)

        reverseLayout = reverseLayout,
        horizontalArrangement = horizontalArrangement,
        verticalAlignment = verticalAlignment,
        flingBehavior = flingBehavior,
        userScrollEnabled = userScrollEnabled,
        overscrollEffect = overscrollEffect,
        cacheWindow = LazyListDefaults.cacheWindow(state),
        content = content,
    )
}

/**
 * The vertically scrolling list that only composes and lays out the currently visible items. The
 * [content] block defines a DSL which allows you to emit items of different types. For example you
 * can use [LazyListScope.item] to add a single item and [LazyListScope.items] to add a list of
 * items.
 *
 * @sample androidx.compose.foundation.samples.LazyColumnSample
 * @sample androidx.compose.foundation.samples.LazyColumnWithLazyRowsSample
 *
 * Sample with custom cache window:
 *
 * @sample androidx.compose.foundation.samples.LazyListCacheWindowSample
 * @param modifier the modifier to apply to this layout.
 * @param state the state object to be used to control or observe the list's state.
 * @param contentPadding a padding around the whole content. This will add padding for the. content
 *   after it has been clipped, which is not possible via [modifier] param. You can use it to add a
 *   padding before the first item or after the last one. If you want to add a spacing between each
 *   item use [verticalArrangement].
 * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items are laid
 *   out in the reverse order and [LazyListState.firstVisibleItemIndex] == 0 means that column is
 *   scrolled to the bottom. Note that [reverseLayout] does not change the behavior of
 *   [verticalArrangement], e.g. with [Arrangement.Top] (top) 123### (bottom) becomes (top) 321###
 *   (bottom).
 * @param verticalArrangement The vertical arrangement of the layout's children. This allows to add

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-417-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 452–486)

 *   a spacing between items and specify the arrangement of the items when we have not enough of
 *   them to fill the whole minimum size.
 * @param horizontalAlignment the horizontal alignment applied to the items.
 * @param flingBehavior logic describing fling behavior.
 * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
 *   allowed. You can still scroll programmatically using the state even when it is disabled
 * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
 *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
 *   need to use Modifier.overscroll separately.
 * @param cacheWindow [LazyLayoutCacheWindow] configuring the area ahead and behind the viewport to
 *   prefetch and retain items. The default cache window does not cache items while the user is not
 *   scrolling. Override this to tune scrolling performance, such as increasing the ahead window to
 *   reduce frame drops during scrolling or adding a behind window to retain recently visible items
 *   when scrolling back and forth.
 * @param content a block which describes the content. Inside this block you can use methods like
 *   [LazyListScope.item] to add a single item or [LazyListScope.items] to add a list of items.
 */
@Composable
public fun LazyColumn(
    modifier: Modifier = Modifier,
    state: LazyListState = rememberLazyListState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    verticalArrangement: Arrangement.Vertical =
        if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
    horizontalAlignment: Alignment.Horizontal = Alignment.Start,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    userScrollEnabled: Boolean = true,
    overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
    cacheWindow: LazyLayoutCacheWindow = LazyListDefaults.cacheWindow(state),
    content: LazyListScope.() -> Unit,
) {
    LazyList(
        modifier = modifier,
        state = state,

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-452-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 487–521)

        contentPadding = contentPadding,
        flingBehavior = flingBehavior,
        horizontalAlignment = horizontalAlignment,
        verticalArrangement = verticalArrangement,
        isVertical = true,
        reverseLayout = reverseLayout,
        userScrollEnabled = userScrollEnabled,
        overscrollEffect = overscrollEffect,
        cacheWindow = cacheWindow,
        content = content,
    )
}

/**
 * The vertically scrolling list that only composes and lays out the currently visible items. The
 * [content] block defines a DSL which allows you to emit items of different types. For example you
 * can use [LazyListScope.item] to add a single item and [LazyListScope.items] to add a list of
 * items.
 *
 * @sample androidx.compose.foundation.samples.LazyColumnSample
 * @sample androidx.compose.foundation.samples.LazyColumnWithLazyRowsSample
 * @param modifier the modifier to apply to this layout.
 * @param state the state object to be used to control or observe the list's state.
 * @param contentPadding a padding around the whole content. This will add padding for the. content
 *   after it has been clipped, which is not possible via [modifier] param. You can use it to add a
 *   padding before the first item or after the last one. If you want to add a spacing between each
 *   item use [verticalArrangement].
 * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items are laid
 *   out in the reverse order and [LazyListState.firstVisibleItemIndex] == 0 means that column is
 *   scrolled to the bottom. Note that [reverseLayout] does not change the behavior of
 *   [verticalArrangement], e.g. with [Arrangement.Top] (top) 123### (bottom) becomes (top) 321###
 *   (bottom).
 * @param verticalArrangement The vertical arrangement of the layout's children. This allows to add
 *   a spacing between items and specify the arrangement of the items when we have not enough of
 *   them to fill the whole minimum size.

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-487-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 522–556)

 * @param horizontalAlignment the horizontal alignment applied to the items.
 * @param flingBehavior logic describing fling behavior.
 * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
 *   allowed. You can still scroll programmatically using the state even when it is disabled
 * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
 *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
 *   need to use Modifier.overscroll separately.
 * @param content a block which describes the content. Inside this block you can use methods like
 *   [LazyListScope.item] to add a single item or [LazyListScope.items] to add a list of items.
 */
@Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
@Composable
public fun LazyColumn(
    modifier: Modifier = Modifier,
    state: LazyListState = rememberLazyListState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    verticalArrangement: Arrangement.Vertical =
        if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
    horizontalAlignment: Alignment.Horizontal = Alignment.Start,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    userScrollEnabled: Boolean = true,
    overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
    content: LazyListScope.() -> Unit,
) {
    LazyColumn(
        modifier = modifier,
        state = state,
        contentPadding = contentPadding,
        reverseLayout = reverseLayout,
        verticalArrangement = verticalArrangement,
        horizontalAlignment = horizontalAlignment,
        flingBehavior = flingBehavior,
        userScrollEnabled = userScrollEnabled,
        overscrollEffect = overscrollEffect,

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-522-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 557–591)

        cacheWindow = LazyListDefaults.cacheWindow(state),
        content = content,
    )
}

@Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
@Composable
public fun LazyColumn(
    modifier: Modifier = Modifier,
    state: LazyListState = rememberLazyListState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    verticalArrangement: Arrangement.Vertical =
        if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
    horizontalAlignment: Alignment.Horizontal = Alignment.Start,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    userScrollEnabled: Boolean = true,
    content: LazyListScope.() -> Unit,
) {
    LazyColumn(
        modifier = modifier,
        state = state,
        contentPadding = contentPadding,
        reverseLayout = reverseLayout,
        verticalArrangement = verticalArrangement,
        horizontalAlignment = horizontalAlignment,
        flingBehavior = flingBehavior,
        userScrollEnabled = userScrollEnabled,
        overscrollEffect = rememberOverscrollEffect(),
        content = content,
    )
}

@Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
@Composable

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-557-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 592–626)

public fun LazyColumn(
    modifier: Modifier = Modifier,
    state: LazyListState = rememberLazyListState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    verticalArrangement: Arrangement.Vertical =
        if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
    horizontalAlignment: Alignment.Horizontal = Alignment.Start,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    content: LazyListScope.() -> Unit,
) {
    LazyColumn(
        modifier = modifier,
        state = state,
        contentPadding = contentPadding,
        reverseLayout = reverseLayout,
        verticalArrangement = verticalArrangement,
        horizontalAlignment = horizontalAlignment,
        flingBehavior = flingBehavior,
        userScrollEnabled = true,
        content = content,
    )
}

@Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
@Composable
public fun LazyRow(
    modifier: Modifier = Modifier,
    state: LazyListState = rememberLazyListState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    horizontalArrangement: Arrangement.Horizontal =
        if (!reverseLayout) Arrangement.Start else Arrangement.End,
    verticalAlignment: Alignment.Vertical = Alignment.Top,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-592-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 627–661)

    userScrollEnabled: Boolean = true,
    content: LazyListScope.() -> Unit,
) {
    LazyRow(
        modifier = modifier,
        state = state,
        contentPadding = contentPadding,
        reverseLayout = reverseLayout,
        horizontalArrangement = horizontalArrangement,
        verticalAlignment = verticalAlignment,
        flingBehavior = flingBehavior,
        userScrollEnabled = userScrollEnabled,
        overscrollEffect = rememberOverscrollEffect(),
        content = content,
    )
}

@Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
@Composable
public fun LazyRow(
    modifier: Modifier = Modifier,
    state: LazyListState = rememberLazyListState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    horizontalArrangement: Arrangement.Horizontal =
        if (!reverseLayout) Arrangement.Start else Arrangement.End,
    verticalAlignment: Alignment.Vertical = Alignment.Top,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    content: LazyListScope.() -> Unit,
) {
    LazyRow(
        modifier = modifier,
        state = state,
        contentPadding = contentPadding,
        reverseLayout = reverseLayout,

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-627-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 662–669)

        horizontalArrangement = horizontalArrangement,
        verticalAlignment = verticalAlignment,
        flingBehavior = flingBehavior,
        userScrollEnabled = true,
        content = content,
    )
}


Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-662-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)

## androidx.compose.foundation.lazy LazyDsl.kt source (lines 71–105)

     *   specify the key the scroll position will be maintained based on the key, which means if you
     *   add/remove items before the current visible item the item with the given key will be kept
     *   as the first visible one. This can be overridden by calling 'requestScrollToItem' on the
     *   'LazyListState'.
     * @param contentType a factory of the content types for the item. The item compositions of the
     *   same type could be reused more efficiently. Note that null is a valid type and items of
     *   such type will be considered compatible.
     * @param itemContent the content displayed by a single item
     */
    public fun items(
        count: Int,
        key: ((index: Int) -> Any)? = null,
        contentType: (index: Int) -> Any? = { null },
        itemContent: @Composable LazyItemScope.(index: Int) -> Unit,
    ) {
        error("The method is not implemented")
    }

    @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
    public fun items(
        count: Int,
        key: ((index: Int) -> Any)? = null,
        itemContent: @Composable LazyItemScope.(index: Int) -> Unit,
    ) {
        items(count, key, { null }, itemContent)
    }

    /**
     * Adds a sticky header item, which will remain pinned even when scrolling after it. The header
     * will remain pinned until the next header will take its place.
     *
     * @sample androidx.compose.foundation.samples.StickyHeaderListSample
     * @param key a stable and unique key representing the item. Using the same key for multiple
     *   items in the list is not allowed. Type of the key should be saveable via Bundle on Android.
     *   If null is passed the position in the list will represent the key. When you specify the key

Sources: [live-androidx-foundation-foundation-foundation-lazy-lazydsl-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyDsl.kt)
