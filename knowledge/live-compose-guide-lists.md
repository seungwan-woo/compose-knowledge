---
type: reference
title: Lazy lists and lazy grids
description: "Public source: https://developer.android.com/develop/ui/compose/lists"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-lists-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#additional-resources
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 6f0c3d4de386312c4b4a2668f8232bc9fc67c632c50212c8ced4305f762653bb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Create a finite scrollable list

      Create a scrollable grid

      Display nested scrolling items in a list

      Filter a list while typing

      Lazily load data with lists and Paging

      Build a list using multiple item types

      Video: Lists in Compose
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
  - id: live-compose-guide-lists-avoid-nesting-scrollable-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#avoid-nesting-scrollable
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 70a3f76d2fc335f4fb9d15f8920d527678240387399b36861847ad3a00f17c7d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This applies only to cases when nesting scrollable children without a predefined size inside another same direction scrollable parent. For example, trying to nest a child LazyColumn without a fixed height inside a vertically scrollable Column parent:

      // throws IllegalStateException
      Column(
          modifier = Modifier.verticalScroll(state)
      ) {
          LazyColumn {
              // ...
          }
      }LazyListSnippets.kt

      Instead, the same result can be achieved by wrapping all of your composables inside one parent LazyColumn and using its DSL to pass in different types of content. This enables emitting single items, as well as multiple list items, all in one place:

      LazyColumn {
          item {
              Header()
          }
          items(data) { item ->
              PhotoItem(item)
          }
          item {
              Footer()
          }
      }LazyListSnippets.kt

      Keep in mind that cases where you’re nesting different direction layouts, for example, a scrollable parent Row and a child LazyColumn, are allowed:

      Row(
          modifier = Modifier.horizontalScroll(scrollState)
      ) {
          LazyColumn {
              // ...
          }
      }LazyListSnippets.kt

      As well as cases where you still use the same direction layouts, but also set a fixed size to the nested children:

      Column(
          modifier = Modifier.verticalScroll(scrollState)
      ) {
          LazyColumn(
              modifier = Modifier.height(200.dp)
          ) {
              // ...
          }
      }LazyListSnippets.kt
  - id: live-compose-guide-lists-cache-window-configuration-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#cache-window-configuration
    revision: web:compose-guide-lists:content@sha256:6999c4235bf6f5d41b64c8bcd71eb47b24ecf9209997c7f329831bb18a2a9411
    sha256: 2b8c2e12445130a933dadf48ecea7405f93c22fb4f4fbad4fb5651d6d16225f9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can configure a cache window using viewport fractions or fixed distances in Dp:

      // Fraction-based cache window: prefetch 50% of viewport ahead, keep 20% behind
      LazyColumn(
          cacheWindow = LazyLayoutCacheWindow(aheadFraction = 0.5f, behindFraction = 0.2f)
      ) {
          items(itemsList) { item -> Text("Item $item") }
      }

      // Dp-based cache window: prefetch 150.dp ahead, keep 50.dp behind
      LazyVerticalGrid(
          columns = GridCells.Fixed(3),
          cacheWindow = LazyLayoutCacheWindow(
              ahead = 150.dp,
              behind = 50.dp,
              isNonScrollCachingEnabled = true
          )
      ) {
          items(itemsList) { item -> Text("Item $item") }
      }CacheWindow.kt

      The cache window manages two distinct regions relative to scroll direction:

      Ahead window: The framework precomposes and premeasures upcoming items before they enter the visible viewport. This defaults to 0dp or 0f.

      Behind window: The framework retains recently scrolled-off items without disposing of them. When users reverse scroll direction, retained items display immediately without recomposition or remeasurement. This defaults to 0dp or 0f.

      In addition, when you set isNonScrollCachingEnabled = true (the default value), the layout populates the ahead window during idle periods outside of active user scrolls. These triggers include initial layout pass, dataset updates, and item reordering. When set to false, caching occurs only during scroll events.
  - id: live-compose-guide-lists-cache-window-migration-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#cache-window-migration
    revision: web:compose-guide-lists:content@sha256:6999c4235bf6f5d41b64c8bcd71eb47b24ecf9209997c7f329831bb18a2a9411
    sha256: 2abb0b3254a728c377e4ee0f72c4b58c2500c2165de031df59c98f50ada66558
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The initial prefetching configuration APIs (PrefetchStrategy) and first version of LazyLayoutCacheWindow allowed the configuration to happen in the states, but this functionality is now deprecated. This section describes how to migrate from the following deprecated APIs and parameters:

      The state-based cacheWindow parameters in rememberLazyListState and rememberLazyGridState.

      The LazyListPrefetchStrategy and LazyGridPrefetchStrategy with LazyLayoutCacheWindow.
  - id: live-compose-guide-lists-cache-window-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#cache-window
    revision: web:compose-guide-lists:content@sha256:6999c4235bf6f5d41b64c8bcd71eb47b24ecf9209997c7f329831bb18a2a9411
    sha256: 90f3178a4453aef564fc461784e2fc8d4b8b76d09205e4a06debb31fdf008f90
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      LazyLayoutCacheWindow is an API designed to help improve scroll performance in lists, grids, and staggered grids. In CacheWindow, you can define a virtual space where items can be prefetched (ahead window) or kept alive (behind window) during scroll events. This means that item composition and measurement prime an internal cache — when these items are actually needed (when they become visible), displaying them takes significantly less time than if they were built from scratch.

      All lazy collections use CacheWindow as the default prefetch strategy. The default window clamps the ahead prefetch distance between 10% and 50% of the viewport. It sets the behind window to 0 pixels and disables non-scroll caching.
  - id: live-compose-guide-lists-content-padding-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#content-padding
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 84c266037940e4a5c0c9821e022a33250dfe92549646fdc3d26960feec791a13
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Sometimes you'll need to add padding around the edges of the content. The lazy components allow you to pass some PaddingValues to the contentPadding parameter to support this:

      LazyColumn(
          contentPadding = PaddingValues(horizontal = 16.dp, vertical = 8.dp),
      ) {
          // ...
      }LazyListSnippets.kt

      In this example, we add 16.dp of padding to the horizontal edges (left and right), and then 8.dp to the top and bottom of the content.

      Please note that this padding is applied to the content, not to the LazyColumn itself. In the example above, the first item will add 8.dp padding to its top, the last item will add 8.dp to its bottom, and all items will have 16.dp padding on the left and the right.

      As another example, you can pass Scaffold's PaddingValues into LazyColumn's contentPadding. See the edge-to-edge guide.
  - id: live-compose-guide-lists-content-spacing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#content-spacing
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: f5e5d90e64a3f07101f5f8af68e3cabbc94e6e966768f3cdb03be2e70be45f2d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To add spacing in-between items, you can use Arrangement.spacedBy(). The example below adds 4.dp of space in-between each item:

      LazyColumn(
          verticalArrangement = Arrangement.spacedBy(4.dp),
      ) {
          // ...
      }LazyListSnippets.kt

      Similarly for LazyRow:

      LazyRow(
          horizontalArrangement = Arrangement.spacedBy(4.dp),
      ) {
          // ...
      }LazyListSnippets.kt

      Grids, however, accept both vertical and horizontal arrangements:

      LazyVerticalGrid(
          columns = GridCells.Fixed(2),
          verticalArrangement = Arrangement.spacedBy(16.dp),
          horizontalArrangement = Arrangement.spacedBy(16.dp)
      ) {
          items(photos) { item ->
              PhotoItem(item)
          }
      }LazyListSnippets.kt
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
  - id: live-compose-guide-lists-control-scroll-position-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#control-scroll-position
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 7467c17de91f03e4b1a3812c3579811ec96ccdd3427d877276e4d252938e1050
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      As well as reacting to scroll position, it’s also useful for apps to be able to control the scroll position too. LazyListState supports this via the scrollToItem() function, which ‘immediately’ snaps the scroll position, and animateScrollToItem() which scrolls using an animation (also known as a smooth scroll):

      @Composable
      fun MessageList(messages: List<Message>) {
          val listState = rememberLazyListState()
          // Remember a CoroutineScope to be able to launch
          val coroutineScope = rememberCoroutineScope()

          LazyColumn(state = listState) {
              // ...
          }

          ScrollToTopButton(
              onClick = {
                  coroutineScope.launch {
                      // Animate scroll to the first item
                      listState.animateScrollToItem(index = 0)
                  }
              }
          )
      }LazyListSnippets.kt
  - id: live-compose-guide-lists-custom-arrangements-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#custom-arrangements
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: c596411c3cfc9906dc65053459849d6e56a7a4bc7ebdb8ae0d75a81d8ae999b8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Usually Lazy lists have many items, and they occupy more than the size of the scrolling container. However, when your list is populated with few items, your design can have more specific requirements for how these should be positioned in the viewport.

      To achieve this, you can use custom vertical Arrangement and pass it to the LazyColumn. In the following example, the TopWithFooter object only needs to implement the arrange method. Firstly, it will position items one after another. Secondly, if the total used height is lower than the viewport height, it will position the footer at the bottom:

      object TopWithFooter : Arrangement.Vertical {
          override fun Density.arrange(
              totalSize: Int,
              sizes: IntArray,
              outPositions: IntArray
          ) {
              var y = 0
              sizes.forEachIndexed { index, size ->
                  outPositions[index] = y
                  y += size
              }
              if (y < totalSize) {
                  val lastIndex = outPositions.lastIndex
                  outPositions[lastIndex] = totalSize - sizes.last()
              }
          }
      }LazyListSnippets.kt
  - id: live-compose-guide-lists-custom-cache-window-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#custom-cache-window
    revision: web:compose-guide-lists:content@sha256:6999c4235bf6f5d41b64c8bcd71eb47b24ecf9209997c7f329831bb18a2a9411
    sha256: dd007c3c40a2e19bca37029274337010ea2d2d7411fdb0ab6a0fab655239bd5f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When fixed distances or viewport fractions don't match your layout patterns, you can implement the LazyLayoutCacheWindow interface directly:

      interface LazyLayoutCacheWindow {
          fun Density.calculateAheadWindow(viewport: Int): Int = 0
          fun Density.calculateBehindWindow(viewport: Int): Int = 0
          val isNonScrollCachingEnabled: Boolean get() = false
      }CacheWindow.kt

      Implement the calculation methods to return the preferred window size in pixels for a given viewport size:

      class ScaledCacheWindow(
          val someLayoutState: LayoutState
      ) : LazyLayoutCacheWindow {
          override fun Density.calculateAheadWindow(viewport: Int): Int {
              return someLayoutState.specialDynamicCalculation().coerceAtMost(viewport * 5)
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is ScaledCacheWindow) return false
              return someLayoutState == other.someLayoutState
          }

          override fun hashCode(): Int {
              return someLayoutState.hashCode()
          }
      }

      @Composable
      fun ScaledCacheWindowSample() {
          val state = rememberLazyListState()
          val newCacheWindow = remember { ScaledCacheWindow(state) }
          LazyColumn(
              state = state,
              cacheWindow = newCacheWindow,
          ) {
              items(100) { index ->
                  Text(
                      text = "Item #$index",
                      modifier = Modifier
                          .fillMaxWidth()
                          .padding(16.dp),
                  )
              }
          }
      }CacheWindow.kt
  - id: live-compose-guide-lists-example-animate-items-in-lazy-lists-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#example_animate_items_in_lazy_lists
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: b102545ede9e9de0d26b5bf7bc597fb27a59e628d8dddfa30b2ff316cc01f557
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      With Compose, you can animate changes to items in lazy lists. When used together, the following snippets implement animations when adding, removing, and reordering lazy list items.

      This snippet displays a list of strings with animated transitions when items are added, removed, or reordered:

      @Composable
      fun ListAnimatedItems(
          items: List<String>,
          modifier: Modifier = Modifier
      ) {
          LazyColumn(modifier) {
              // Use a unique key per item, so that animations work as expected.
              items(items, key = { it }) {
                  ListItem(
                      headlineContent = { Text(it) },
                      modifier = Modifier
                          .animateItem(
                              // Optionally add custom animation specs
                          )
                          .fillParentMaxWidth()
                          .padding(horizontal = 8.dp, vertical = 0.dp),
                  )
              }
          }
      }AnimatedOrderedList.kt
  - id: live-compose-guide-lists-item-animations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#item-animations
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 55ff40845d8fa8cc073d0dbd6c9c58b6f1d17c8a66adb993fba390a52eef7c00
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If you’ve used the RecyclerView widget, you’ll know that it animates item changes automatically. Lazy layouts provide the same functionality for item reorderings. The API is simple - you just need to set the animateItem modifier to the item content:

      LazyColumn {
          // It is important to provide a key to each item to ensure animateItem() works as expected.
          items(books, key = { it.id }) {
              Row(Modifier.animateItem()) {
                  // ...
              }
          }
      }LazyListSnippets.kt

      You can even provide custom animation specification, if you need to:

      LazyColumn {
          items(books, key = { it.id }) {
              Row(
                  Modifier.animateItem(
                      fadeInSpec = tween(durationMillis = 250),
                      fadeOutSpec = tween(durationMillis = 100),
                      placementSpec = spring(stiffness = Spring.StiffnessLow, dampingRatio = Spring.DampingRatioMediumBouncy)
                  )
              ) {
                  // ...
              }
          }
      }LazyListSnippets.kt

      Make sure you provide keys for your items so it is possible to find the new position for the moved element.
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
  - id: live-compose-guide-lists-key-points-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#key-points
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: a15b54eb7fee23abd3410ec5c03f4f14d2675895e3b349a8c8587dfe33774960
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      ListAnimatedItemsExample presents a screen that incorporates controls for adding, removing, and sorting items. onAddItem and onRemoveItem are lambda expressions that are passed to AddRemoveButtons to add and remove items from the list. resetOrder, onSortAlphabetically, and onSortByLength are lambda expressions that are passed to OrderButtons to change the order of the items in the list.

      AddRemoveButtons displays the "Add" and "Remove" buttons. It enables/disables the buttons and handles button clicks.

      OrderButtons displays the buttons for reordering the list. It receives the lambda functions for resetting the order and sorting the list by length or alphabetically.

      ListAnimatedItems calls the ListAnimatedItems composable, passing the data list to display the animated list of strings. data is defined elsewhere.

      This snippet creates a UI with Add Item and Delete Item buttons:

      @Composable
      private fun AddRemoveButtons(
          canAddItem: Boolean,
          canRemoveItem: Boolean,
          onAddItem: () -> Unit,
          onRemoveItem: () -> Unit
      ) {
          Row(
              modifier = Modifier.fillMaxWidth(),
              horizontalArrangement = Arrangement.Center
          ) {
              Button(enabled = canAddItem, onClick = onAddItem) {
                  Text("Add Item")
              }
              Spacer(modifier = Modifier.padding(25.dp))
              Button(enabled = canRemoveItem, onClick = onRemoveItem) {
                  Text("Delete Item")
              }
          }
      }AnimatedOrderedList.kt
  - id: live-compose-guide-lists-key-points-3-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#key-points
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 2f60a73c85d9c862233b466a0ab5222fdae515d8eda90f6b93126af07acc4286
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      AddRemoveButtons displays a row of buttons to perform add and remove operations on the list.

      The canAddItem and canRemoveItem parameters control the enabled state of the buttons. If canAddItem or canRemoveItem are false, then the corresponding button is disabled.

      The onAddItem and onRemoveItem parameters are lambdas that execute when the user clicks the corresponding button.

      Finally, this snippet displays three buttons for sorting the list (Reset, Alphabetical, and Length):

      @Composable
      private fun OrderButtons(
          resetOrder: () -> Unit,
          orderAlphabetically: () -> Unit,
          orderByLength: () -> Unit
      ) {
          Row(
              modifier = Modifier.fillMaxWidth(),
              horizontalArrangement = Arrangement.Center
          ) {
              var selectedIndex by remember { mutableIntStateOf(0) }
              val options = listOf("Reset", "Alphabetical", "Length")

              SingleChoiceSegmentedButtonRow {
                  options.forEachIndexed { index, label ->
                      SegmentedButton(
                          shape = SegmentedButtonDefaults.itemShape(
                              index = index,
                              count = options.size
                          ),
                          onClick = {
                              Log.d("AnimatedOrderedList", "selectedIndex: $selectedIndex")
                              selectedIndex = index
                              when (options[selectedIndex]) {
                                  "Reset" -> resetOrder()
                                  "Alphabetical" -> orderAlphabetically()
                                  "Length" -> orderByLength()
                              }
                          },
                          selected = index == selectedIndex
                      ) {
                          Text(label)
                      }
                  }
              }
          }
      }AnimatedOrderedList.kt
  - id: live-compose-guide-lists-key-points-4-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#key-points
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 71b70686bf993edaad54c72ca54a1da65a74e05ecb25fc0bcd3d8e034bbc2efe
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      OrderButtons displays a SingleChoiceSegmentedButtonRow to allow users to select a sorting method on the list or reset the list order. A SegmentedButton component lets you select a single option from a list of options.

      resetOrder, orderAlphabetically, and orderByLength are lambda functions that are executed when the corresponding button is selected.

      The selectedIndex state variable keeps track of the selected option.
  - id: live-compose-guide-lists-key-points-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#key-points
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 39b3a055962bf941bb3df256e41d9a76ac48cbddce68d43f52d10175555af30e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      ListAnimatedItems displays a list of strings in a LazyColumn with animated transitions when items are modified.

      The items function assigns a unique key to each item in the list. Compose uses the keys to track the items and identify changes in their positions.

      ListItem defines the layout of each list item. It takes a headlineContent parameter, which defines the main content of the item.

      The animateItem modifier applies default animations to item additions, removals, and moves.

      The following snippet presents a screen that incorporates controls for adding and removing items, as well as sorting a predefined list:

      @Composable
      private fun ListAnimatedItemsExample(
          data: List<String>,
          modifier: Modifier = Modifier,
          onAddItem: () -> Unit = {},
          onRemoveItem: () -> Unit = {},
          resetOrder: () -> Unit = {},
          onSortAlphabetically: () -> Unit = {},
          onSortByLength: () -> Unit = {},
      ) {
          val canAddItem = data.size < 10
          val canRemoveItem = data.isNotEmpty()

          Scaffold(modifier) { paddingValues ->
              Column(
                  modifier = Modifier
                      .padding(paddingValues)
                      .fillMaxSize()
              ) {
                  // Buttons that change the value of displayedItems.
                  AddRemoveButtons(canAddItem, canRemoveItem, onAddItem, onRemoveItem)
                  OrderButtons(resetOrder, onSortAlphabetically, onSortByLength)

                  // List that displays the values of displayedItems.
                  ListAnimatedItems(data)
              }
          }
      }AnimatedOrderedList.kt
  - id: live-compose-guide-lists-large-datasets-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#large-datasets
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: e69713b8ab24317be81196a64396c28fe3a65305f520f89000b69021bae8b50b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The Paging library enables apps to support large lists of items, loading and displaying small chunks of the list as necessary. Paging 3.0 and later provides Compose support through the androidx.paging:paging-compose library.

      To display a list of paged content, we can use the collectAsLazyPagingItems() extension function, and then pass in the returned LazyPagingItems to items() in our LazyColumn. Similar to Paging support in views, you can display placeholders while data loads by checking if the item is null:

      @Composable
      fun MessageList(pager: Pager<Int, Message>) {
          val lazyPagingItems = pager.flow.collectAsLazyPagingItems()

          LazyColumn {
              items(
                  lazyPagingItems.itemCount,
                  key = lazyPagingItems.itemKey { it.id }
              ) { index ->
                  val message = lazyPagingItems[index]
                  if (message != null) {
                      MessageRow(message)
                  } else {
                      MessagePlaceholder()
                  }
              }
          }
      }LazyListSnippets.kt
  - id: live-compose-guide-lists-lazy-grids-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#lazy-grids
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: c65a2e54460ecb8b14408e0c982c9549e2945eb2ab378ee556f3b020089bdf48
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The LazyVerticalGrid and LazyHorizontalGrid composables provide support for displaying items in a grid. A Lazy vertical grid will display its items in a vertically scrollable container, spanned across multiple columns, while the Lazy horizontal grids will have the same behavior on the horizontal axis.

      Grids have the same powerful API capabilities as lists and they also use a very similar DSL - LazyGridScope.() for describing the content.

      The columns parameter in LazyVerticalGrid and rows parameter in LazyHorizontalGrid control how cells are formed into columns or rows. The following example displays items in a grid, using GridCells.Adaptive to set each column to be at least 128.dp wide:

      LazyVerticalGrid(
          columns = GridCells.Adaptive(minSize = 128.dp)
      ) {
          items(photos) { photo ->
              PhotoItem(photo)
          }
      }LazyListSnippets.kt

      LazyVerticalGrid lets you specify a width for items, and then the grid will fit as many columns as possible. Any remaining width is distributed equally among the columns, after the number of columns is calculated. This adaptive way of sizing is especially useful for displaying sets of items across different screen sizes.

      If you know the exact number of columns to be used, you can instead provide an instance of GridCells.Fixed containing the number of required columns.

      If your design requires only certain items to have non-standard dimensions, you can use the grid support for providing custom column spans for items. Specify the column span with the span parameter of the LazyGridScope DSL item and items methods. maxLineSpan, one of the span scope’s values, is particularly useful when you're using adaptive sizing, because the number of columns is not fixed. This example shows how to provide a full row span:

      LazyVerticalGrid(
          columns = GridCells.Adaptive(minSize = 30.dp)
      ) {
          item(span = {
              // LazyGridItemSpanScope:
              // maxLineSpan
              GridItemSpan(maxLineSpan)
          }) {
              CategoryCard("Fruits")
          }
          // ...
      }LazyListSnippets.kt
  - id: live-compose-guide-lists-lazy-layouts-tips-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#lazy-layouts-tips
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 1e9d250a3d0a166b3932c0c29ceec036252465082ecf7eed8a7bffa938528f80
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: There are a few tips you can take into account to ensure your Lazy layouts work as intended.
  - id: live-compose-guide-lists-lazy-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#lazy
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: d36ebb477a30a44c3f7ed6e985c3ec366731bec13c0f9693dd3077c81e5632f6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If you need to display a large number of items (or a list of an unknown length), using a layout such as Column can cause performance issues, since all the items will be composed and laid out whether or not they are visible.

      Compose provides a set of components which only compose and lay out items which are visible in the component’s viewport. These components include LazyColumn and LazyRow.

      As the name suggests, the difference between LazyColumn and LazyRow is the orientation in which they lay out their items and scroll. LazyColumn produces a vertically scrolling list, and LazyRow produces a horizontally scrolling list.

      The Lazy components are different to most layouts in Compose. Instead of accepting a @Composable content block parameter, allowing apps to directly emit composables, the Lazy components provide a LazyListScope.() block. This LazyListScope block offers a DSL which allows apps to describe the item contents. The Lazy component is then responsible for adding each item’s content as required by the layout and scroll position.
  - id: live-compose-guide-lists-lazy-staggered-grid-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#lazy-staggered-grid
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 20139fca4fc6c11573dd3c65d375c51870382cbb221a22aa8292375a28d3e0f7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      LazyVerticalStaggeredGrid and LazyHorizontalStaggeredGrid are composables that allow you to create a lazy-loaded, staggered grid of items. A lazy vertical staggered grid displays its items in a vertically scrollable container that spans across multiple columns and allows individual items to be different heights. Lazy horizontal grids have the same behavior on the horizontal axis with items of different widths.

      The following snippet is a basic example of using LazyVerticalStaggeredGrid with a 200.dp width per item:

      LazyVerticalStaggeredGrid(
          columns = StaggeredGridCells.Adaptive(200.dp),
          verticalItemSpacing = 4.dp,
          horizontalArrangement = Arrangement.spacedBy(4.dp),
          content = {
              items(randomSizedPhotos) { photo ->
                  AsyncImage(
                      model = photo,
                      contentScale = ContentScale.Crop,
                      contentDescription = null,
                      modifier = Modifier
                          .fillMaxWidth()
                          .wrapContentHeight()
                  )
              }
          },
          modifier = Modifier.fillMaxSize()
      )LazyListSnippets.kt

      Figure 1. Example of lazy staggered vertical grid

      To set a fixed number of columns, you can use StaggeredGridCells.Fixed(columns) instead of StaggeredGridCells.Adaptive. This divides the available width by the number of columns (or rows for a horizontal grid), and has each item take up that width (or height for a horizontal grid):

      LazyVerticalStaggeredGrid(
          columns = StaggeredGridCells.Fixed(3),
          verticalItemSpacing = 4.dp,
          horizontalArrangement = Arrangement.spacedBy(4.dp),
          content = {
              items(randomSizedPhotos) { photo ->
                  AsyncImage(
                      model = photo,
                      contentScale = ContentScale.Crop,
                      contentDescription = null,
                      modifier = Modifier
                          .fillMaxWidth()
                          .wrapContentHeight()
                  )
              }
          },
          modifier = Modifier.fillMaxSize()
      )LazyListSnippets.kt

      Figure 2. Example of lazy staggered vertical grid with fixed columns
  - id: live-compose-guide-lists-lazylistscope-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#lazylistscope
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: a3480a99f1b83cb768257f81899227c611a210e3d5011aac4d181440fab58377
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The DSL of LazyListScope provides a number of functions for describing items in the layout. At the most basic, item() adds a single item, and items(Int) adds multiple items:

      LazyColumn {
          // Add a single item
          item {
              Text(text = "First item")
          }

          // Add 5 items
          items(5) { index ->
              Text(text = "Item: $index")
          }

          // Add another single item
          item {
              Text(text = "Last item")
          }
      }LazyListSnippets.kt

      There are also a number of extension functions which allow you to add collections of items, such as a List. These extensions allow us to easily migrate our Column example from above:

      /**
       * import androidx.compose.foundation.lazy.items
       */
      LazyColumn {
          items(messages) { message ->
              MessageRow(message)
          }
      }LazyListSnippets.kt

      There is also a variant of the items() extension function called itemsIndexed(), which provides the index. Please see the LazyListScope reference for more details.
  - id: live-compose-guide-lists-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#main-content
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: ea017642d55816206f6af22f66e8b8e93dd414e65e264d87c0713cab348651ae
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Many apps need to display collections of items. This document explains how you can efficiently do this in Jetpack Compose.

      If you know that your use case does not require any scrolling, you may wish to use a simple Column or Row (depending on the direction), and emit each item's content by iterating over a list in the following way:

      @Composable
      fun MessageList(messages: List<Message>) {
          Column {
              messages.forEach { message ->
                  MessageRow(message)
              }
          }
      }LazyListSnippets.kt

      We can make the Column scrollable by using the verticalScroll() modifier.
  - id: live-compose-guide-lists-measuring-performance-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#measuring-performance
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: a11ccfb78abba738b50c61b78d6d2242224f5d02be054d826c8aecb478e23a8f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: You can only reliably measure the performance of a Lazy layout when running in release mode and with R8 optimization enabled. On debug builds, Lazy layout scrolling may appear slower. For more information on this, read through Compose performance.
  - id: live-compose-guide-lists-move-cache-window-arguments-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#move-cache-window-arguments
    revision: web:compose-guide-lists:content@sha256:6999c4235bf6f5d41b64c8bcd71eb47b24ecf9209997c7f329831bb18a2a9411
    sha256: 8f9d67cea382256cab7b346fd8347b473bdd806ce965110f9ca40a6b0c1a4c00
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To migrate to the recommended APIs, move cacheWindow arguments from rememberLazyListState and rememberLazyGridState to use the cacheWindow argument on LazyColumn, LazyRow, LazyVerticalGrid, and LazyHorizontalGrid. LazyVerticalStaggeredGrid and LazyHorizontalStaggeredGrid already implement the new paradigm in the layout composable.

      // Before (Experimental in Compose 1.9 to 1.12, now Deprecated)
      val state = rememberLazyListState(
          cacheWindow = LazyLayoutCacheWindow(aheadFraction = 0.5f, behindFraction = 0.2f)
      )
      LazyColumn(state = state) {
          items(itemsList) { item -> Text("Item $item") }
      }CacheWindow.kt

      // Now in Compose 1.13 (Stable)
      val state = rememberLazyListState()
      LazyColumn(
          state = state,
          cacheWindow = LazyLayoutCacheWindow(aheadFraction = 0.5f, behindFraction = 0.2f)
      ) {
          items(itemsList) { item -> Text("Item $item") }
      }CacheWindow.kt
  - id: live-compose-guide-lists-multiple-elements-one-item-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#multiple-elements-one-item
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 0b079cc077baaf0f9f4bc4ce5ca723d94ba160f5c29bcda1d212be93c338838f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In this example, the second item lambda emits 2 items in one block:

      LazyVerticalGrid(
          columns = GridCells.Adaptive(100.dp)
      ) {
          item { Item(0) }
          item {
              Item(1)
              Item(2)
          }
          item { Item(3) }
          // ...
      }LazyListSnippets.kt

      Lazy layouts will handle this as expected - they will lay out elements one after another as if they were different items. However, there are a couple of problems with doing so.

      When multiple elements are emitted as part of one item, they are handled as one entity, meaning that they cannot be composed individually anymore. If one element becomes visible on the screen, then all elements corresponding to the item have to be composed and measured. This can hurt performance if used excessively. In the extreme case of putting all elements in one item, it completely defeats the purpose of using Lazy layouts. Apart from potential performance issues, putting more elements in one item will also interfere with scrollToItem() & animateScrollToItem().

      However, there are valid use cases for putting multiple elements in one item, like having dividers inside a list. You don't want dividers to change scrolling indexes, as they shouldn't be considered independent elements. Also, performance is not affected as dividers are small. A divider likely needs to be visible when the item before it is visible, so it can be part of the previous item:

      LazyVerticalGrid(
          columns = GridCells.Adaptive(100.dp)
      ) {
          item { Item(0) }
          item {
              Item(1)
              Divider()
          }
          item { Item(2) }
          // ...
      }LazyListSnippets.kt
  - id: live-compose-guide-lists-react-to-scroll-position-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#react-to-scroll-position
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 0a23354039dfb015cf7cc950997a11ec59b52c2cecd9e5e268feb685fa611aa9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: property. See the LazyListLayoutInfo class for more information.
  - id: live-compose-guide-lists-react-to-scroll-position-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#react-to-scroll-position
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 29093dc3408acb02c4a91946e0a09e9252bea6880d3e8e877cb7d60128da04e8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Many apps need to react and listen to scroll position and item layout changes. The Lazy components support this use-case by hoisting the LazyListState:

      @Composable
      fun MessageList(messages: List<Message>) {
          // Remember our own LazyListState
          val listState = rememberLazyListState()

          // Provide it to LazyColumn
          LazyColumn(state = listState) {
              // ...
          }
      }LazyListSnippets.kt

      For simple use-cases, apps commonly only need to know information about the first visible item. For this LazyListState provides the firstVisibleItemIndex and firstVisibleItemScrollOffset properties.

      If we use the example of showing and hiding a button based on if the user has scrolled past the first item:

      @Composable
      fun MessageList(messages: List<Message>) {
          Box {
              val listState = rememberLazyListState()

              LazyColumn(state = listState) {
                  // ...
              }

              // Show the button if the first visible item is past
              // the first item. We use a remembered derived state to
              // minimize unnecessary compositions
              val showButton by remember {
                  derivedStateOf {
                      listState.firstVisibleItemIndex > 0
                  }
              }

              AnimatedVisibility(visible = showButton) {
                  ScrollToTopButton()
              }
          }
      }LazyListSnippets.kt

      Reading the state directly in composition is useful when you need to update other UI composables, but there are also scenarios where the event does not need to be handled in the same composition. A common example of this is sending an analytics event once the user has scrolled past a certain point. To handle this efficiently, we can use a snapshotFlow():

      val listState = rememberLazyListState()

      LazyColumn(state = listState) {
          // ...
      }

      LaunchedEffect(listState) {
          snapshotFlow { listState.firstVisibleItemIndex }
              .map { index -> index > 0 }
              .distinctUntilChanged()
              .filter { it }
              .collect {
                  MyAnalyticsService.sendScrolledPastFirstItemEvent()
              }
      }LazyListSnippets.kt

      LazyListState also provides information about all of the items currently being displayed and their bounds on screen, via the layoutInfo
  - id: live-compose-guide-lists-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#recommended_for_you
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: b98688dbf7a965bfb2efe76c5d956962e1f3cfbaf33c6088d8b8d66201c51099
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Migrate RecyclerView to Lazy list

      Save UI state in Compose

      Kotlin for Jetpack Compose
  - id: live-compose-guide-lists-replace-prefetch-strategy-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#replace-prefetch-strategy
    revision: web:compose-guide-lists:content@sha256:6999c4235bf6f5d41b64c8bcd71eb47b24ecf9209997c7f329831bb18a2a9411
    sha256: 88bbbf5d221973ad7d3c91cc4ea7749f4d7e49ef6daeaf911510b8d506cbc394
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Replace usages of the deprecated LazyListPrefetchStrategy and LazyGridPrefetchStrategy APIs with LazyLayoutCacheWindow. Internally, all prefetching behavior now relies on cacheWindow. This change alters prefetching behavior in the following scenarios:

      Small items: When items take up less than 10% of the viewport, Compose prefetches multiple items ahead. This reduces scroll jank during rapid flings.

      Large items: When individual items take up more than 50% of the viewport, the clamped window cannot cover an entire upcoming item. If you have tall items, such as media feeds or messaging threads, you might observe late prefetch triggers and should tune the ahead window.

      If your custom strategy relied on item-by-item scheduling, port the logic to LazyLayoutCacheWindow.calculateAheadWindow. To replicate a similar prefetch behavior of composing and measuring one item ahead in the scroll direction, implement a custom window based on visible item metrics. Note that, while this is not exactly the same behavior, it's the closest you can get when using window-based prefetching:

      val state = rememberLazyListState()
      val legacyCacheWindow = remember(state) {
          object : LazyLayoutCacheWindow {
              override fun Density.calculateAheadWindow(viewport: Int): Int {
                  val visibleItems = state.layoutInfo.visibleItemsInfo
                  if (visibleItems.isEmpty()) return 0
                  val averageItemHeight = visibleItems.sumOf { it.size } / visibleItems.size
                  return averageItemHeight
              }
          }
      }
      LazyColumn(
          state = state,
          cacheWindow = legacyCacheWindow
      ) {
          items(itemsList) { item -> Text("Item $item") }
      }CacheWindow.kt
  - id: live-compose-guide-lists-result-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#result
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: 1c8c61efb5679fcdc438c64bce59a3f7ca17dc94831f90475c784ab7ead23736
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This video shows the result of the preceding snippets when items are reordered:

      Figure 1

      . A list that animates item transitions when items are added, removed, or sorted.
  - id: live-compose-guide-lists-sticky-headers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/lists#sticky-headers
    revision: web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77
    sha256: c9b0a76d9c1f7ecd5d4397ec79cf9ec8376282922edbf3fd5e19ec9ff0fc4f4c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The ‘sticky header’ pattern is helpful when displaying lists of grouped data. Below you can see an example of a ‘contacts list’, grouped by each contact’s initial:

      To achieve a sticky header with LazyColumn, you can use the stickyHeader()

      function, providing the header content:

      @Composable
      fun ListWithHeader(items: List<Item>) {
          LazyColumn {
              stickyHeader {
                  Header()
              }

              items(items) { item ->
                  ItemRow(item)
              }
          }
      }LazyListSnippets.kt

      To achieve a list with multiple headers, like the ‘contacts list’ example above, you could do:

      // This ideally would be done in the ViewModel
      val grouped = contacts.groupBy { it.firstName[0] }

      @Composable
      fun ContactsList(grouped: Map<Char, List<Contact>>) {
          LazyColumn {
              grouped.forEach { (initial, contactsForInitial) ->
                  stickyHeader {
                      CharacterHeader(initial)
                  }

                  items(contactsForInitial) { contact ->
                      ContactListItem(contact)
                  }
              }
          }
      }LazyListSnippets.kt
compose:
  id: live-compose-guide-lists
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation
  sections:
    - id: live-compose-guide-lists-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-lists-avoid-0-size-items
      title: Avoid using 0-pixel sized items
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-avoid-0-size-items-source
      relatedIds: []
    - id: live-compose-guide-lists-avoid-nesting-scrollable
      title: Avoid nesting components scrollable in the same direction
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-avoid-nesting-scrollable-source
      relatedIds: []
    - id: live-compose-guide-lists-cache-window
      title: Improve scroll performance with LazyLayoutCacheWindow
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-cache-window-source
      relatedIds: []
    - id: live-compose-guide-lists-cache-window-configuration
      title: Window configuration
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
        - androidx.compose.foundation.lazy.grid.LazyVerticalGrid
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-cache-window-configuration-source
      relatedIds: []
    - id: live-compose-guide-lists-cache-window-migration
      title: Migration guide
      aliases:
        - androidx.compose.foundation.lazy.rememberLazyListState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-cache-window-migration-source
      relatedIds: []
    - id: live-compose-guide-lists-content-padding
      title: Content padding
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-content-padding-source
      relatedIds: []
    - id: live-compose-guide-lists-content-spacing
      title: Content spacing
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
        - androidx.compose.foundation.lazy.LazyRow
        - androidx.compose.foundation.lazy.grid.LazyVerticalGrid
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-content-spacing-source
      relatedIds: []
    - id: live-compose-guide-lists-content-type
      title: Consider adding contentType
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-content-type-source
      relatedIds: []
    - id: live-compose-guide-lists-control-scroll-position
      title: Controlling the scroll position
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
        - androidx.compose.foundation.lazy.LazyListState
        - androidx.compose.foundation.lazy.rememberLazyListState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-control-scroll-position-source
      relatedIds: []
    - id: live-compose-guide-lists-custom-arrangements
      title: Consider using custom arrangements
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-custom-arrangements-source
      relatedIds: []
    - id: live-compose-guide-lists-custom-cache-window
      title: Custom CacheWindow
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
        - androidx.compose.foundation.lazy.rememberLazyListState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-custom-cache-window-source
      relatedIds: []
    - id: live-compose-guide-lists-example-animate-items-in-lazy-lists
      title: "Example: Animate items in lazy lists"
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-example-animate-items-in-lazy-lists-source
      relatedIds: []
    - id: live-compose-guide-lists-item-animations
      title: Item animations
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-item-animations-source
      relatedIds: []
    - id: live-compose-guide-lists-item-keys
      title: Item keys
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
        - androidx.compose.foundation.lazy.LazyRow
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-item-keys-source
      relatedIds: []
    - id: live-compose-guide-lists-key-points
      title: Key points about the code
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-key-points-source
      relatedIds: []
    - id: live-compose-guide-lists-key-points-2
      title: Key points about the code
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-key-points-2-source
      relatedIds: []
    - id: live-compose-guide-lists-key-points-3
      title: Key points about the code
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-key-points-3-source
      relatedIds: []
    - id: live-compose-guide-lists-key-points-4
      title: Key points about the code
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-key-points-4-source
      relatedIds: []
    - id: live-compose-guide-lists-large-datasets
      title: Large data-sets (paging)
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-large-datasets-source
      relatedIds: []
    - id: live-compose-guide-lists-lazy
      title: Lazy lists
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
        - androidx.compose.foundation.lazy.LazyRow
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-lazy-source
      relatedIds: []
    - id: live-compose-guide-lists-lazy-grids
      title: Lazy grids
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyVerticalGrid
        - androidx.compose.foundation.lazy.grid.LazyHorizontalGrid
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-lazy-grids-source
      relatedIds: []
    - id: live-compose-guide-lists-lazy-layouts-tips
      title: Tips on using Lazy layouts
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-lazy-layouts-tips-source
      relatedIds: []
    - id: live-compose-guide-lists-lazy-staggered-grid
      title: Lazy staggered grid
      aliases:
        - androidx.compose.foundation.lazy.staggeredgrid.LazyVerticalStaggeredGrid
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-lazy-staggered-grid-source
      relatedIds: []
    - id: live-compose-guide-lists-lazylistscope
      title: LazyListScope DSL
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-lazylistscope-source
      relatedIds: []
    - id: live-compose-guide-lists-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-main-content-source
      relatedIds: []
    - id: live-compose-guide-lists-measuring-performance
      title: Measuring performance
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-measuring-performance-source
      relatedIds: []
    - id: live-compose-guide-lists-move-cache-window-arguments
      title: "Option 1: Move cacheWindow arguments"
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
        - androidx.compose.foundation.lazy.LazyRow
        - androidx.compose.foundation.lazy.rememberLazyListState
        - androidx.compose.foundation.lazy.grid.LazyVerticalGrid
        - androidx.compose.foundation.lazy.grid.LazyHorizontalGrid
        - androidx.compose.foundation.lazy.staggeredgrid.LazyVerticalStaggeredGrid
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-move-cache-window-arguments-source
      relatedIds: []
    - id: live-compose-guide-lists-multiple-elements-one-item
      title: Beware of putting multiple elements in one item
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyVerticalGrid
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-multiple-elements-one-item-source
      relatedIds: []
    - id: live-compose-guide-lists-react-to-scroll-position
      title: Reacting to scroll position
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
        - androidx.compose.foundation.lazy.LazyListState
        - androidx.compose.foundation.lazy.rememberLazyListState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-react-to-scroll-position-source
      relatedIds: []
    - id: live-compose-guide-lists-react-to-scroll-position-2
      title: Reacting to scroll position
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-react-to-scroll-position-2-source
      relatedIds: []
    - id: live-compose-guide-lists-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-lists-replace-prefetch-strategy
      title: "Option 2: Replace LazyListPrefetchStrategy and LazyGridPrefetchStrategy"
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
        - androidx.compose.foundation.lazy.rememberLazyListState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-replace-prefetch-strategy-source
      relatedIds: []
    - id: live-compose-guide-lists-result
      title: Result
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-result-source
      relatedIds: []
    - id: live-compose-guide-lists-sticky-headers
      title: Sticky headers
      aliases:
        - androidx.compose.foundation.lazy.LazyColumn
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-lists-sticky-headers-source
      relatedIds: []
---

# Lazy lists and lazy grids

Public source: https://developer.android.com/develop/ui/compose/lists

## Additional resources

Create a finite scrollable list

Create a scrollable grid

Display nested scrolling items in a list

Filter a list while typing

Lazily load data with lists and Paging

Build a list using multiple item types

Video: Lists in Compose

Sources: [live-compose-guide-lists-additional-resources-source](https://developer.android.com/develop/ui/compose/lists#additional-resources)

## Avoid using 0-pixel sized items

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

Sources: [live-compose-guide-lists-avoid-0-size-items-source](https://developer.android.com/develop/ui/compose/lists#avoid-0-size-items)

## Avoid nesting components scrollable in the same direction

This applies only to cases when nesting scrollable children without a predefined size inside another same direction scrollable parent. For example, trying to nest a child LazyColumn without a fixed height inside a vertically scrollable Column parent:

// throws IllegalStateException
Column(
    modifier = Modifier.verticalScroll(state)
) {
    LazyColumn {
        // ...
    }
}LazyListSnippets.kt

Instead, the same result can be achieved by wrapping all of your composables inside one parent LazyColumn and using its DSL to pass in different types of content. This enables emitting single items, as well as multiple list items, all in one place:

LazyColumn {
    item {
        Header()
    }
    items(data) { item ->
        PhotoItem(item)
    }
    item {
        Footer()
    }
}LazyListSnippets.kt

Keep in mind that cases where you’re nesting different direction layouts, for example, a scrollable parent Row and a child LazyColumn, are allowed:

Row(
    modifier = Modifier.horizontalScroll(scrollState)
) {
    LazyColumn {
        // ...
    }
}LazyListSnippets.kt

As well as cases where you still use the same direction layouts, but also set a fixed size to the nested children:

Column(
    modifier = Modifier.verticalScroll(scrollState)
) {
    LazyColumn(
        modifier = Modifier.height(200.dp)
    ) {
        // ...
    }
}LazyListSnippets.kt

Sources: [live-compose-guide-lists-avoid-nesting-scrollable-source](https://developer.android.com/develop/ui/compose/lists#avoid-nesting-scrollable)

## Improve scroll performance with LazyLayoutCacheWindow

LazyLayoutCacheWindow is an API designed to help improve scroll performance in lists, grids, and staggered grids. In CacheWindow, you can define a virtual space where items can be prefetched (ahead window) or kept alive (behind window) during scroll events. This means that item composition and measurement prime an internal cache — when these items are actually needed (when they become visible), displaying them takes significantly less time than if they were built from scratch.

All lazy collections use CacheWindow as the default prefetch strategy. The default window clamps the ahead prefetch distance between 10% and 50% of the viewport. It sets the behind window to 0 pixels and disables non-scroll caching.

Sources: [live-compose-guide-lists-cache-window-source](https://developer.android.com/develop/ui/compose/lists#cache-window)

## Window configuration

You can configure a cache window using viewport fractions or fixed distances in Dp:

// Fraction-based cache window: prefetch 50% of viewport ahead, keep 20% behind
LazyColumn(
    cacheWindow = LazyLayoutCacheWindow(aheadFraction = 0.5f, behindFraction = 0.2f)
) {
    items(itemsList) { item -> Text("Item $item") }
}

// Dp-based cache window: prefetch 150.dp ahead, keep 50.dp behind
LazyVerticalGrid(
    columns = GridCells.Fixed(3),
    cacheWindow = LazyLayoutCacheWindow(
        ahead = 150.dp,
        behind = 50.dp,
        isNonScrollCachingEnabled = true
    )
) {
    items(itemsList) { item -> Text("Item $item") }
}CacheWindow.kt

The cache window manages two distinct regions relative to scroll direction:

Ahead window: The framework precomposes and premeasures upcoming items before they enter the visible viewport. This defaults to 0dp or 0f.

Behind window: The framework retains recently scrolled-off items without disposing of them. When users reverse scroll direction, retained items display immediately without recomposition or remeasurement. This defaults to 0dp or 0f.

In addition, when you set isNonScrollCachingEnabled = true (the default value), the layout populates the ahead window during idle periods outside of active user scrolls. These triggers include initial layout pass, dataset updates, and item reordering. When set to false, caching occurs only during scroll events.

Sources: [live-compose-guide-lists-cache-window-configuration-source](https://developer.android.com/develop/ui/compose/lists#cache-window-configuration)

## Migration guide

The initial prefetching configuration APIs (PrefetchStrategy) and first version of LazyLayoutCacheWindow allowed the configuration to happen in the states, but this functionality is now deprecated. This section describes how to migrate from the following deprecated APIs and parameters:

The state-based cacheWindow parameters in rememberLazyListState and rememberLazyGridState.

The LazyListPrefetchStrategy and LazyGridPrefetchStrategy with LazyLayoutCacheWindow.

Sources: [live-compose-guide-lists-cache-window-migration-source](https://developer.android.com/develop/ui/compose/lists#cache-window-migration)

## Content padding

Sometimes you'll need to add padding around the edges of the content. The lazy components allow you to pass some PaddingValues to the contentPadding parameter to support this:

LazyColumn(
    contentPadding = PaddingValues(horizontal = 16.dp, vertical = 8.dp),
) {
    // ...
}LazyListSnippets.kt

In this example, we add 16.dp of padding to the horizontal edges (left and right), and then 8.dp to the top and bottom of the content.

Please note that this padding is applied to the content, not to the LazyColumn itself. In the example above, the first item will add 8.dp padding to its top, the last item will add 8.dp to its bottom, and all items will have 16.dp padding on the left and the right.

As another example, you can pass Scaffold's PaddingValues into LazyColumn's contentPadding. See the edge-to-edge guide.

Sources: [live-compose-guide-lists-content-padding-source](https://developer.android.com/develop/ui/compose/lists#content-padding)

## Content spacing

To add spacing in-between items, you can use Arrangement.spacedBy(). The example below adds 4.dp of space in-between each item:

LazyColumn(
    verticalArrangement = Arrangement.spacedBy(4.dp),
) {
    // ...
}LazyListSnippets.kt

Similarly for LazyRow:

LazyRow(
    horizontalArrangement = Arrangement.spacedBy(4.dp),
) {
    // ...
}LazyListSnippets.kt

Grids, however, accept both vertical and horizontal arrangements:

LazyVerticalGrid(
    columns = GridCells.Fixed(2),
    verticalArrangement = Arrangement.spacedBy(16.dp),
    horizontalArrangement = Arrangement.spacedBy(16.dp)
) {
    items(photos) { item ->
        PhotoItem(item)
    }
}LazyListSnippets.kt

Sources: [live-compose-guide-lists-content-spacing-source](https://developer.android.com/develop/ui/compose/lists#content-spacing)

## Consider adding contentType

Starting with Compose 1.2, in order to maximize the performance of your Lazy layout, consider adding contentType to your lists or grids. This allows you to specify the content type for each item of the layout, in cases where you're composing a list or a grid consisting of multiple different types of items:

LazyColumn {
    items(elements, contentType = { it.type }) {
        // ...
    }
}LazyListSnippets.kt

When you provide the contentType, Compose is able to reuse compositions only between the items of the same type. As reusing is more efficient when you compose items of similar structure, providing the content types ensures Compose doesn't try to compose an item of type A on top of a completely different item of type B. This helps maximize the benefits of composition reusing and your Lazy layout performance.

Sources: [live-compose-guide-lists-content-type-source](https://developer.android.com/develop/ui/compose/lists#content-type)

## Controlling the scroll position

As well as reacting to scroll position, it’s also useful for apps to be able to control the scroll position too. LazyListState supports this via the scrollToItem() function, which ‘immediately’ snaps the scroll position, and animateScrollToItem() which scrolls using an animation (also known as a smooth scroll):

@Composable
fun MessageList(messages: List<Message>) {
    val listState = rememberLazyListState()
    // Remember a CoroutineScope to be able to launch
    val coroutineScope = rememberCoroutineScope()

    LazyColumn(state = listState) {
        // ...
    }

    ScrollToTopButton(
        onClick = {
            coroutineScope.launch {
                // Animate scroll to the first item
                listState.animateScrollToItem(index = 0)
            }
        }
    )
}LazyListSnippets.kt

Sources: [live-compose-guide-lists-control-scroll-position-source](https://developer.android.com/develop/ui/compose/lists#control-scroll-position)

## Consider using custom arrangements

Usually Lazy lists have many items, and they occupy more than the size of the scrolling container. However, when your list is populated with few items, your design can have more specific requirements for how these should be positioned in the viewport.

To achieve this, you can use custom vertical Arrangement and pass it to the LazyColumn. In the following example, the TopWithFooter object only needs to implement the arrange method. Firstly, it will position items one after another. Secondly, if the total used height is lower than the viewport height, it will position the footer at the bottom:

object TopWithFooter : Arrangement.Vertical {
    override fun Density.arrange(
        totalSize: Int,
        sizes: IntArray,
        outPositions: IntArray
    ) {
        var y = 0
        sizes.forEachIndexed { index, size ->
            outPositions[index] = y
            y += size
        }
        if (y < totalSize) {
            val lastIndex = outPositions.lastIndex
            outPositions[lastIndex] = totalSize - sizes.last()
        }
    }
}LazyListSnippets.kt

Sources: [live-compose-guide-lists-custom-arrangements-source](https://developer.android.com/develop/ui/compose/lists#custom-arrangements)

## Custom CacheWindow

When fixed distances or viewport fractions don't match your layout patterns, you can implement the LazyLayoutCacheWindow interface directly:

interface LazyLayoutCacheWindow {
    fun Density.calculateAheadWindow(viewport: Int): Int = 0
    fun Density.calculateBehindWindow(viewport: Int): Int = 0
    val isNonScrollCachingEnabled: Boolean get() = false
}CacheWindow.kt

Implement the calculation methods to return the preferred window size in pixels for a given viewport size:

class ScaledCacheWindow(
    val someLayoutState: LayoutState
) : LazyLayoutCacheWindow {
    override fun Density.calculateAheadWindow(viewport: Int): Int {
        return someLayoutState.specialDynamicCalculation().coerceAtMost(viewport * 5)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ScaledCacheWindow) return false
        return someLayoutState == other.someLayoutState
    }

    override fun hashCode(): Int {
        return someLayoutState.hashCode()
    }
}

@Composable
fun ScaledCacheWindowSample() {
    val state = rememberLazyListState()
    val newCacheWindow = remember { ScaledCacheWindow(state) }
    LazyColumn(
        state = state,
        cacheWindow = newCacheWindow,
    ) {
        items(100) { index ->
            Text(
                text = "Item #$index",
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp),
            )
        }
    }
}CacheWindow.kt

Sources: [live-compose-guide-lists-custom-cache-window-source](https://developer.android.com/develop/ui/compose/lists#custom-cache-window)

## Example: Animate items in lazy lists

With Compose, you can animate changes to items in lazy lists. When used together, the following snippets implement animations when adding, removing, and reordering lazy list items.

This snippet displays a list of strings with animated transitions when items are added, removed, or reordered:

@Composable
fun ListAnimatedItems(
    items: List<String>,
    modifier: Modifier = Modifier
) {
    LazyColumn(modifier) {
        // Use a unique key per item, so that animations work as expected.
        items(items, key = { it }) {
            ListItem(
                headlineContent = { Text(it) },
                modifier = Modifier
                    .animateItem(
                        // Optionally add custom animation specs
                    )
                    .fillParentMaxWidth()
                    .padding(horizontal = 8.dp, vertical = 0.dp),
            )
        }
    }
}AnimatedOrderedList.kt

Sources: [live-compose-guide-lists-example-animate-items-in-lazy-lists-source](https://developer.android.com/develop/ui/compose/lists#example_animate_items_in_lazy_lists)

## Item animations

If you’ve used the RecyclerView widget, you’ll know that it animates item changes automatically. Lazy layouts provide the same functionality for item reorderings. The API is simple - you just need to set the animateItem modifier to the item content:

LazyColumn {
    // It is important to provide a key to each item to ensure animateItem() works as expected.
    items(books, key = { it.id }) {
        Row(Modifier.animateItem()) {
            // ...
        }
    }
}LazyListSnippets.kt

You can even provide custom animation specification, if you need to:

LazyColumn {
    items(books, key = { it.id }) {
        Row(
            Modifier.animateItem(
                fadeInSpec = tween(durationMillis = 250),
                fadeOutSpec = tween(durationMillis = 100),
                placementSpec = spring(stiffness = Spring.StiffnessLow, dampingRatio = Spring.DampingRatioMediumBouncy)
            )
        ) {
            // ...
        }
    }
}LazyListSnippets.kt

Make sure you provide keys for your items so it is possible to find the new position for the moved element.

Sources: [live-compose-guide-lists-item-animations-source](https://developer.android.com/develop/ui/compose/lists#item-animations)

## Item keys

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

Sources: [live-compose-guide-lists-item-keys-source](https://developer.android.com/develop/ui/compose/lists#item-keys)

## Key points about the code

ListAnimatedItems displays a list of strings in a LazyColumn with animated transitions when items are modified.

The items function assigns a unique key to each item in the list. Compose uses the keys to track the items and identify changes in their positions.

ListItem defines the layout of each list item. It takes a headlineContent parameter, which defines the main content of the item.

The animateItem modifier applies default animations to item additions, removals, and moves.

The following snippet presents a screen that incorporates controls for adding and removing items, as well as sorting a predefined list:

@Composable
private fun ListAnimatedItemsExample(
    data: List<String>,
    modifier: Modifier = Modifier,
    onAddItem: () -> Unit = {},
    onRemoveItem: () -> Unit = {},
    resetOrder: () -> Unit = {},
    onSortAlphabetically: () -> Unit = {},
    onSortByLength: () -> Unit = {},
) {
    val canAddItem = data.size < 10
    val canRemoveItem = data.isNotEmpty()

    Scaffold(modifier) { paddingValues ->
        Column(
            modifier = Modifier
                .padding(paddingValues)
                .fillMaxSize()
        ) {
            // Buttons that change the value of displayedItems.
            AddRemoveButtons(canAddItem, canRemoveItem, onAddItem, onRemoveItem)
            OrderButtons(resetOrder, onSortAlphabetically, onSortByLength)

            // List that displays the values of displayedItems.
            ListAnimatedItems(data)
        }
    }
}AnimatedOrderedList.kt

Sources: [live-compose-guide-lists-key-points-source](https://developer.android.com/develop/ui/compose/lists#key-points)

## Key points about the code

ListAnimatedItemsExample presents a screen that incorporates controls for adding, removing, and sorting items. onAddItem and onRemoveItem are lambda expressions that are passed to AddRemoveButtons to add and remove items from the list. resetOrder, onSortAlphabetically, and onSortByLength are lambda expressions that are passed to OrderButtons to change the order of the items in the list.

AddRemoveButtons displays the "Add" and "Remove" buttons. It enables/disables the buttons and handles button clicks.

OrderButtons displays the buttons for reordering the list. It receives the lambda functions for resetting the order and sorting the list by length or alphabetically.

ListAnimatedItems calls the ListAnimatedItems composable, passing the data list to display the animated list of strings. data is defined elsewhere.

This snippet creates a UI with Add Item and Delete Item buttons:

@Composable
private fun AddRemoveButtons(
    canAddItem: Boolean,
    canRemoveItem: Boolean,
    onAddItem: () -> Unit,
    onRemoveItem: () -> Unit
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.Center
    ) {
        Button(enabled = canAddItem, onClick = onAddItem) {
            Text("Add Item")
        }
        Spacer(modifier = Modifier.padding(25.dp))
        Button(enabled = canRemoveItem, onClick = onRemoveItem) {
            Text("Delete Item")
        }
    }
}AnimatedOrderedList.kt

Sources: [live-compose-guide-lists-key-points-2-source](https://developer.android.com/develop/ui/compose/lists#key-points)

## Key points about the code

AddRemoveButtons displays a row of buttons to perform add and remove operations on the list.

The canAddItem and canRemoveItem parameters control the enabled state of the buttons. If canAddItem or canRemoveItem are false, then the corresponding button is disabled.

The onAddItem and onRemoveItem parameters are lambdas that execute when the user clicks the corresponding button.

Finally, this snippet displays three buttons for sorting the list (Reset, Alphabetical, and Length):

@Composable
private fun OrderButtons(
    resetOrder: () -> Unit,
    orderAlphabetically: () -> Unit,
    orderByLength: () -> Unit
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.Center
    ) {
        var selectedIndex by remember { mutableIntStateOf(0) }
        val options = listOf("Reset", "Alphabetical", "Length")

        SingleChoiceSegmentedButtonRow {
            options.forEachIndexed { index, label ->
                SegmentedButton(
                    shape = SegmentedButtonDefaults.itemShape(
                        index = index,
                        count = options.size
                    ),
                    onClick = {
                        Log.d("AnimatedOrderedList", "selectedIndex: $selectedIndex")
                        selectedIndex = index
                        when (options[selectedIndex]) {
                            "Reset" -> resetOrder()
                            "Alphabetical" -> orderAlphabetically()
                            "Length" -> orderByLength()
                        }
                    },
                    selected = index == selectedIndex
                ) {
                    Text(label)
                }
            }
        }
    }
}AnimatedOrderedList.kt

Sources: [live-compose-guide-lists-key-points-3-source](https://developer.android.com/develop/ui/compose/lists#key-points)

## Key points about the code

OrderButtons displays a SingleChoiceSegmentedButtonRow to allow users to select a sorting method on the list or reset the list order. A SegmentedButton component lets you select a single option from a list of options.

resetOrder, orderAlphabetically, and orderByLength are lambda functions that are executed when the corresponding button is selected.

The selectedIndex state variable keeps track of the selected option.

Sources: [live-compose-guide-lists-key-points-4-source](https://developer.android.com/develop/ui/compose/lists#key-points)

## Large data-sets (paging)

The Paging library enables apps to support large lists of items, loading and displaying small chunks of the list as necessary. Paging 3.0 and later provides Compose support through the androidx.paging:paging-compose library.

To display a list of paged content, we can use the collectAsLazyPagingItems() extension function, and then pass in the returned LazyPagingItems to items() in our LazyColumn. Similar to Paging support in views, you can display placeholders while data loads by checking if the item is null:

@Composable
fun MessageList(pager: Pager<Int, Message>) {
    val lazyPagingItems = pager.flow.collectAsLazyPagingItems()

    LazyColumn {
        items(
            lazyPagingItems.itemCount,
            key = lazyPagingItems.itemKey { it.id }
        ) { index ->
            val message = lazyPagingItems[index]
            if (message != null) {
                MessageRow(message)
            } else {
                MessagePlaceholder()
            }
        }
    }
}LazyListSnippets.kt

Sources: [live-compose-guide-lists-large-datasets-source](https://developer.android.com/develop/ui/compose/lists#large-datasets)

## Lazy lists

If you need to display a large number of items (or a list of an unknown length), using a layout such as Column can cause performance issues, since all the items will be composed and laid out whether or not they are visible.

Compose provides a set of components which only compose and lay out items which are visible in the component’s viewport. These components include LazyColumn and LazyRow.

As the name suggests, the difference between LazyColumn and LazyRow is the orientation in which they lay out their items and scroll. LazyColumn produces a vertically scrolling list, and LazyRow produces a horizontally scrolling list.

The Lazy components are different to most layouts in Compose. Instead of accepting a @Composable content block parameter, allowing apps to directly emit composables, the Lazy components provide a LazyListScope.() block. This LazyListScope block offers a DSL which allows apps to describe the item contents. The Lazy component is then responsible for adding each item’s content as required by the layout and scroll position.

Sources: [live-compose-guide-lists-lazy-source](https://developer.android.com/develop/ui/compose/lists#lazy)

## Lazy grids

The LazyVerticalGrid and LazyHorizontalGrid composables provide support for displaying items in a grid. A Lazy vertical grid will display its items in a vertically scrollable container, spanned across multiple columns, while the Lazy horizontal grids will have the same behavior on the horizontal axis.

Grids have the same powerful API capabilities as lists and they also use a very similar DSL - LazyGridScope.() for describing the content.

The columns parameter in LazyVerticalGrid and rows parameter in LazyHorizontalGrid control how cells are formed into columns or rows. The following example displays items in a grid, using GridCells.Adaptive to set each column to be at least 128.dp wide:

LazyVerticalGrid(
    columns = GridCells.Adaptive(minSize = 128.dp)
) {
    items(photos) { photo ->
        PhotoItem(photo)
    }
}LazyListSnippets.kt

LazyVerticalGrid lets you specify a width for items, and then the grid will fit as many columns as possible. Any remaining width is distributed equally among the columns, after the number of columns is calculated. This adaptive way of sizing is especially useful for displaying sets of items across different screen sizes.

If you know the exact number of columns to be used, you can instead provide an instance of GridCells.Fixed containing the number of required columns.

If your design requires only certain items to have non-standard dimensions, you can use the grid support for providing custom column spans for items. Specify the column span with the span parameter of the LazyGridScope DSL item and items methods. maxLineSpan, one of the span scope’s values, is particularly useful when you're using adaptive sizing, because the number of columns is not fixed. This example shows how to provide a full row span:

LazyVerticalGrid(
    columns = GridCells.Adaptive(minSize = 30.dp)
) {
    item(span = {
        // LazyGridItemSpanScope:
        // maxLineSpan
        GridItemSpan(maxLineSpan)
    }) {
        CategoryCard("Fruits")
    }
    // ...
}LazyListSnippets.kt

Sources: [live-compose-guide-lists-lazy-grids-source](https://developer.android.com/develop/ui/compose/lists#lazy-grids)

## Tips on using Lazy layouts

There are a few tips you can take into account to ensure your Lazy layouts work as intended.

Sources: [live-compose-guide-lists-lazy-layouts-tips-source](https://developer.android.com/develop/ui/compose/lists#lazy-layouts-tips)

## Lazy staggered grid

LazyVerticalStaggeredGrid and LazyHorizontalStaggeredGrid are composables that allow you to create a lazy-loaded, staggered grid of items. A lazy vertical staggered grid displays its items in a vertically scrollable container that spans across multiple columns and allows individual items to be different heights. Lazy horizontal grids have the same behavior on the horizontal axis with items of different widths.

The following snippet is a basic example of using LazyVerticalStaggeredGrid with a 200.dp width per item:

LazyVerticalStaggeredGrid(
    columns = StaggeredGridCells.Adaptive(200.dp),
    verticalItemSpacing = 4.dp,
    horizontalArrangement = Arrangement.spacedBy(4.dp),
    content = {
        items(randomSizedPhotos) { photo ->
            AsyncImage(
                model = photo,
                contentScale = ContentScale.Crop,
                contentDescription = null,
                modifier = Modifier
                    .fillMaxWidth()
                    .wrapContentHeight()
            )
        }
    },
    modifier = Modifier.fillMaxSize()
)LazyListSnippets.kt

Figure 1. Example of lazy staggered vertical grid

To set a fixed number of columns, you can use StaggeredGridCells.Fixed(columns) instead of StaggeredGridCells.Adaptive. This divides the available width by the number of columns (or rows for a horizontal grid), and has each item take up that width (or height for a horizontal grid):

LazyVerticalStaggeredGrid(
    columns = StaggeredGridCells.Fixed(3),
    verticalItemSpacing = 4.dp,
    horizontalArrangement = Arrangement.spacedBy(4.dp),
    content = {
        items(randomSizedPhotos) { photo ->
            AsyncImage(
                model = photo,
                contentScale = ContentScale.Crop,
                contentDescription = null,
                modifier = Modifier
                    .fillMaxWidth()
                    .wrapContentHeight()
            )
        }
    },
    modifier = Modifier.fillMaxSize()
)LazyListSnippets.kt

Figure 2. Example of lazy staggered vertical grid with fixed columns

Sources: [live-compose-guide-lists-lazy-staggered-grid-source](https://developer.android.com/develop/ui/compose/lists#lazy-staggered-grid)

## LazyListScope DSL

The DSL of LazyListScope provides a number of functions for describing items in the layout. At the most basic, item() adds a single item, and items(Int) adds multiple items:

LazyColumn {
    // Add a single item
    item {
        Text(text = "First item")
    }

    // Add 5 items
    items(5) { index ->
        Text(text = "Item: $index")
    }

    // Add another single item
    item {
        Text(text = "Last item")
    }
}LazyListSnippets.kt

There are also a number of extension functions which allow you to add collections of items, such as a List. These extensions allow us to easily migrate our Column example from above:

/**
 * import androidx.compose.foundation.lazy.items
 */
LazyColumn {
    items(messages) { message ->
        MessageRow(message)
    }
}LazyListSnippets.kt

There is also a variant of the items() extension function called itemsIndexed(), which provides the index. Please see the LazyListScope reference for more details.

Sources: [live-compose-guide-lists-lazylistscope-source](https://developer.android.com/develop/ui/compose/lists#lazylistscope)

## Introduction

Many apps need to display collections of items. This document explains how you can efficiently do this in Jetpack Compose.

If you know that your use case does not require any scrolling, you may wish to use a simple Column or Row (depending on the direction), and emit each item's content by iterating over a list in the following way:

@Composable
fun MessageList(messages: List<Message>) {
    Column {
        messages.forEach { message ->
            MessageRow(message)
        }
    }
}LazyListSnippets.kt

We can make the Column scrollable by using the verticalScroll() modifier.

Sources: [live-compose-guide-lists-main-content-source](https://developer.android.com/develop/ui/compose/lists#main-content)

## Measuring performance

You can only reliably measure the performance of a Lazy layout when running in release mode and with R8 optimization enabled. On debug builds, Lazy layout scrolling may appear slower. For more information on this, read through Compose performance.

Sources: [live-compose-guide-lists-measuring-performance-source](https://developer.android.com/develop/ui/compose/lists#measuring-performance)

## Option 1: Move cacheWindow arguments

To migrate to the recommended APIs, move cacheWindow arguments from rememberLazyListState and rememberLazyGridState to use the cacheWindow argument on LazyColumn, LazyRow, LazyVerticalGrid, and LazyHorizontalGrid. LazyVerticalStaggeredGrid and LazyHorizontalStaggeredGrid already implement the new paradigm in the layout composable.

// Before (Experimental in Compose 1.9 to 1.12, now Deprecated)
val state = rememberLazyListState(
    cacheWindow = LazyLayoutCacheWindow(aheadFraction = 0.5f, behindFraction = 0.2f)
)
LazyColumn(state = state) {
    items(itemsList) { item -> Text("Item $item") }
}CacheWindow.kt

// Now in Compose 1.13 (Stable)
val state = rememberLazyListState()
LazyColumn(
    state = state,
    cacheWindow = LazyLayoutCacheWindow(aheadFraction = 0.5f, behindFraction = 0.2f)
) {
    items(itemsList) { item -> Text("Item $item") }
}CacheWindow.kt

Sources: [live-compose-guide-lists-move-cache-window-arguments-source](https://developer.android.com/develop/ui/compose/lists#move-cache-window-arguments)

## Beware of putting multiple elements in one item

In this example, the second item lambda emits 2 items in one block:

LazyVerticalGrid(
    columns = GridCells.Adaptive(100.dp)
) {
    item { Item(0) }
    item {
        Item(1)
        Item(2)
    }
    item { Item(3) }
    // ...
}LazyListSnippets.kt

Lazy layouts will handle this as expected - they will lay out elements one after another as if they were different items. However, there are a couple of problems with doing so.

When multiple elements are emitted as part of one item, they are handled as one entity, meaning that they cannot be composed individually anymore. If one element becomes visible on the screen, then all elements corresponding to the item have to be composed and measured. This can hurt performance if used excessively. In the extreme case of putting all elements in one item, it completely defeats the purpose of using Lazy layouts. Apart from potential performance issues, putting more elements in one item will also interfere with scrollToItem() & animateScrollToItem().

However, there are valid use cases for putting multiple elements in one item, like having dividers inside a list. You don't want dividers to change scrolling indexes, as they shouldn't be considered independent elements. Also, performance is not affected as dividers are small. A divider likely needs to be visible when the item before it is visible, so it can be part of the previous item:

LazyVerticalGrid(
    columns = GridCells.Adaptive(100.dp)
) {
    item { Item(0) }
    item {
        Item(1)
        Divider()
    }
    item { Item(2) }
    // ...
}LazyListSnippets.kt

Sources: [live-compose-guide-lists-multiple-elements-one-item-source](https://developer.android.com/develop/ui/compose/lists#multiple-elements-one-item)

## Reacting to scroll position

Many apps need to react and listen to scroll position and item layout changes. The Lazy components support this use-case by hoisting the LazyListState:

@Composable
fun MessageList(messages: List<Message>) {
    // Remember our own LazyListState
    val listState = rememberLazyListState()

    // Provide it to LazyColumn
    LazyColumn(state = listState) {
        // ...
    }
}LazyListSnippets.kt

For simple use-cases, apps commonly only need to know information about the first visible item. For this LazyListState provides the firstVisibleItemIndex and firstVisibleItemScrollOffset properties.

If we use the example of showing and hiding a button based on if the user has scrolled past the first item:

@Composable
fun MessageList(messages: List<Message>) {
    Box {
        val listState = rememberLazyListState()

        LazyColumn(state = listState) {
            // ...
        }

        // Show the button if the first visible item is past
        // the first item. We use a remembered derived state to
        // minimize unnecessary compositions
        val showButton by remember {
            derivedStateOf {
                listState.firstVisibleItemIndex > 0
            }
        }

        AnimatedVisibility(visible = showButton) {
            ScrollToTopButton()
        }
    }
}LazyListSnippets.kt

Reading the state directly in composition is useful when you need to update other UI composables, but there are also scenarios where the event does not need to be handled in the same composition. A common example of this is sending an analytics event once the user has scrolled past a certain point. To handle this efficiently, we can use a snapshotFlow():

val listState = rememberLazyListState()

LazyColumn(state = listState) {
    // ...
}

LaunchedEffect(listState) {
    snapshotFlow { listState.firstVisibleItemIndex }
        .map { index -> index > 0 }
        .distinctUntilChanged()
        .filter { it }
        .collect {
            MyAnalyticsService.sendScrolledPastFirstItemEvent()
        }
}LazyListSnippets.kt

LazyListState also provides information about all of the items currently being displayed and their bounds on screen, via the layoutInfo

Sources: [live-compose-guide-lists-react-to-scroll-position-source](https://developer.android.com/develop/ui/compose/lists#react-to-scroll-position)

## Reacting to scroll position

property. See the LazyListLayoutInfo class for more information.

Sources: [live-compose-guide-lists-react-to-scroll-position-2-source](https://developer.android.com/develop/ui/compose/lists#react-to-scroll-position)

## Recommended for you

Note: link text is displayed when JavaScript is off

Migrate RecyclerView to Lazy list

Save UI state in Compose

Kotlin for Jetpack Compose

Sources: [live-compose-guide-lists-recommended-for-you-source](https://developer.android.com/develop/ui/compose/lists#recommended_for_you)

## Option 2: Replace LazyListPrefetchStrategy and LazyGridPrefetchStrategy

Replace usages of the deprecated LazyListPrefetchStrategy and LazyGridPrefetchStrategy APIs with LazyLayoutCacheWindow. Internally, all prefetching behavior now relies on cacheWindow. This change alters prefetching behavior in the following scenarios:

Small items: When items take up less than 10% of the viewport, Compose prefetches multiple items ahead. This reduces scroll jank during rapid flings.

Large items: When individual items take up more than 50% of the viewport, the clamped window cannot cover an entire upcoming item. If you have tall items, such as media feeds or messaging threads, you might observe late prefetch triggers and should tune the ahead window.

If your custom strategy relied on item-by-item scheduling, port the logic to LazyLayoutCacheWindow.calculateAheadWindow. To replicate a similar prefetch behavior of composing and measuring one item ahead in the scroll direction, implement a custom window based on visible item metrics. Note that, while this is not exactly the same behavior, it's the closest you can get when using window-based prefetching:

val state = rememberLazyListState()
val legacyCacheWindow = remember(state) {
    object : LazyLayoutCacheWindow {
        override fun Density.calculateAheadWindow(viewport: Int): Int {
            val visibleItems = state.layoutInfo.visibleItemsInfo
            if (visibleItems.isEmpty()) return 0
            val averageItemHeight = visibleItems.sumOf { it.size } / visibleItems.size
            return averageItemHeight
        }
    }
}
LazyColumn(
    state = state,
    cacheWindow = legacyCacheWindow
) {
    items(itemsList) { item -> Text("Item $item") }
}CacheWindow.kt

Sources: [live-compose-guide-lists-replace-prefetch-strategy-source](https://developer.android.com/develop/ui/compose/lists#replace-prefetch-strategy)

## Result

This video shows the result of the preceding snippets when items are reordered:

Figure 1

. A list that animates item transitions when items are added, removed, or sorted.

Sources: [live-compose-guide-lists-result-source](https://developer.android.com/develop/ui/compose/lists#result)

## Sticky headers

The ‘sticky header’ pattern is helpful when displaying lists of grouped data. Below you can see an example of a ‘contacts list’, grouped by each contact’s initial:

To achieve a sticky header with LazyColumn, you can use the stickyHeader()

function, providing the header content:

@Composable
fun ListWithHeader(items: List<Item>) {
    LazyColumn {
        stickyHeader {
            Header()
        }

        items(items) { item ->
            ItemRow(item)
        }
    }
}LazyListSnippets.kt

To achieve a list with multiple headers, like the ‘contacts list’ example above, you could do:

// This ideally would be done in the ViewModel
val grouped = contacts.groupBy { it.firstName[0] }

@Composable
fun ContactsList(grouped: Map<Char, List<Contact>>) {
    LazyColumn {
        grouped.forEach { (initial, contactsForInitial) ->
            stickyHeader {
                CharacterHeader(initial)
            }

            items(contactsForInitial) { contact ->
                ContactListItem(contact)
            }
        }
    }
}LazyListSnippets.kt

Sources: [live-compose-guide-lists-sticky-headers-source](https://developer.android.com/develop/ui/compose/lists#sticky-headers)
