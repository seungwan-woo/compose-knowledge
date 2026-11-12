---
type: reference
title: Pager in Compose
description: "Public source: https://developer.android.com/develop/ui/compose/layouts/pager"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-layouts-pager-add-page-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#add-page
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: 0ae4042a8c7feac27534a3743e6aa5a007b6ea3c3f5d7c6155fc83f7012c4c4d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To add an indicator to a page, use the PagerState object to get information about which page is selected out of the number of pages, and draw your custom indicator.

      For example, to create a circle indicator, you can repeat the number of circles and change the circle color based on if the page is selected, using pagerState.currentPage:

      val pagerState = rememberPagerState(pageCount = {
          4
      })
      HorizontalPager(
          state = pagerState,
          modifier = Modifier.fillMaxSize()
      ) { page ->
          // Our page content
          Text(
              text = "Page: $page",
          )
      }
      Row(
          Modifier
              .wrapContentHeight()
              .fillMaxWidth()
              .align(Alignment.BottomCenter)
              .padding(bottom = 8.dp),
          horizontalArrangement = Arrangement.Center
      ) {
          repeat(pagerState.pageCount) { iteration ->
              val color = if (pagerState.currentPage == iteration) Color.DarkGray else Color.LightGray
              Box(
                  modifier = Modifier
                      .padding(2.dp)
                      .clip(CircleShape)
                      .background(color)
                      .size(16.dp)
              )
          }
      }PagerSnippets.kt

      Figure 3

      . Pager showing a circle indicator below the content
  - id: live-compose-guide-layouts-pager-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#additional-resources
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: 2a86ac1dafa15df4ce8cd0066cf21c4a4fe3ea81d7770e2d1c388b06de8ed84e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Display a paging list
  - id: live-compose-guide-layouts-pager-auto-advancing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#auto-advancing
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: a7c5f91de7d3cf1b6109f0951440e8954836e75b58eb82d0e2167c18f43cee87
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: This section describes how to create an auto-advancing pager with page indicators in Compose. The collection of items automatically scroll horizontally, but users can also manually swipe between items. If a user interacts with the pager, it stops the automatic progression.
  - id: live-compose-guide-layouts-pager-basic-example-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#basic-example
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: cfd94dfed898d5aa55c776ee10f718e98fef340dbfacb366f5f1005e2ae525e9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Together, the following snippets create a basic auto-advancing pager implementation with a visual indicator, in which each page renders as a different color:

      @Composable
      fun AutoAdvancePager(pageItems: List<Color>, modifier: Modifier = Modifier) {
          Box(modifier = Modifier.fillMaxSize()) {
              val pagerState = rememberPagerState(pageCount = { pageItems.size })
              val pagerIsDragged by pagerState.interactionSource.collectIsDraggedAsState()

              val pageInteractionSource = remember { MutableInteractionSource() }
              val pageIsPressed by pageInteractionSource.collectIsPressedAsState()

              // Stop auto-advancing when pager is dragged or one of the pages is pressed
              val autoAdvance = !pagerIsDragged && !pageIsPressed

              if (autoAdvance) {
                  LaunchedEffect(pagerState, pageInteractionSource) {
                      while (true) {
                          delay(2000)
                          val nextPage = (pagerState.currentPage + 1) % pageItems.size
                          pagerState.animateScrollToPage(nextPage)
                      }
                  }
              }

              HorizontalPager(
                  state = pagerState
              ) { page ->
                  Text(
                      text = "Page: $page",
                      textAlign = TextAlign.Center,
                      modifier = modifier
                          .fillMaxSize()
                          .background(pageItems[page])
                          .clickable(
                              interactionSource = pageInteractionSource,
                              indication = LocalIndication.current
                          ) {
                              // Handle page click
                          }
                          .wrapContentSize(align = Alignment.Center)
                  )
              }

              PagerIndicator(pageItems.size, pagerState.currentPage)
          }
      }PagerSnippets.kt
  - id: live-compose-guide-layouts-pager-content-padding-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#content-padding
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: 7d98208e321f024840243f7a4928bb922a842de95b4c2f1ab1b9ab2a010ae471
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      HorizontalPager and VerticalPager both support changing the content padding, which lets you influence the maximum size and alignment of pages.

      For example, setting the start padding aligns the pages towards the end:

      Figure 5

      . Pager with start padding.

      val pagerState = rememberPagerState(pageCount = {
          4
      })
      HorizontalPager(
          state = pagerState,
          contentPadding = PaddingValues(start = 64.dp),
      ) { page ->
          // page content
      }PagerSnippets.kt

      Setting both the start and end padding to the same value centers the item horizontally:

      Figure 6

      . Pager with horizontal padding.

      val pagerState = rememberPagerState(pageCount = {
          4
      })
      HorizontalPager(
          state = pagerState,
          contentPadding = PaddingValues(horizontal = 32.dp),
      ) { page ->
          // page content
      }PagerSnippets.kt

      Setting the end padding aligns the pages towards the start:

      Figure 7

      . Pager with end padding.

      val pagerState = rememberPagerState(pageCount = {
          4
      })
      HorizontalPager(
          state = pagerState,
          contentPadding = PaddingValues(end = 64.dp),
      ) { page ->
          // page content
      }PagerSnippets.kt

      You can set the top and bottom values to achieve similar effects for VerticalPager. The value 32.dp is only used here as an example; you can set each of the padding dimensions to any value.
  - id: live-compose-guide-layouts-pager-custom-page-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#custom-page
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: 966466575c8ce3ff72a678a96c81ab8b7c69d8b546c8a6da64c774ee8298581a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      By default, HorizontalPager and VerticalPager take up the full width or full height, respectively. You can set the pageSize variable to either have a Fixed, Fill (default), or a custom size calculation.

      For example, to set a fixed width page of 100.dp:

      val pagerState = rememberPagerState(pageCount = {
          4
      })
      HorizontalPager(
          state = pagerState,
          pageSize = PageSize.Fixed(100.dp)
      ) { page ->
          // page content
      }PagerSnippets.kt

      To size the pages based on the viewport size, use a custom page size calculation. Create a custom PageSize object and divide the availableSpace by three, taking into account the spacing between the items:

      private val threePagesPerViewport = object : PageSize {
          override fun Density.calculateMainAxisPageSize(
              availableSpace: Int,
              pageSpacing: Int
          ): Int {
              return (availableSpace - 2 * pageSpacing) / 3
          }
      }PagerSnippets.kt
  - id: live-compose-guide-layouts-pager-customize-scroll-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#customize-scroll
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: bc46a38fe0bed34d0e72ad6f6f3d6fd1904f2c6c51850078a4b9b60ef678425c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: The default HorizontalPager and VerticalPager composables specify how scrolling gestures work with the pager. However, you can customize and change the defaults such as the pagerSnapDistance or the flingBehavior.
  - id: live-compose-guide-layouts-pager-get-notified-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#get-notified
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: bb1e21c200dc8cd833e8c13ce2abca948612ff1d89d03b4d85ba117e7a048450
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      PagerState has three properties with information about pages: currentPage, settledPage, and targetPage.

      currentPage: The closest page to the snap position. By default, the snap position is at the start of the layout.

      settledPage: The page number when no animation or scrolling is running. This is different from the currentPage property in that the currentPage immediately updates if the page is close enough to the snap position, but settledPage remains the same until all the animations are finished running.

      targetPage: The proposed stop position for a scrolling movement.

      You can use the snapshotFlow function to observe changes to these variables and react to them. For example, to send an analytics event on each page change, you can do the following:

      val pagerState = rememberPagerState(pageCount = {
          10
      })

      LaunchedEffect(pagerState) {
          // Collect from the a snapshotFlow reading the currentPage
          snapshotFlow { pagerState.currentPage }.collect { page ->
              // Do something with each page change, for example:
              // viewModel.sendPageSelectedEvent(page)
              Log.d("Page change", "Page changed to $page")
          }
      }

      VerticalPager(
          state = pagerState,
      ) { page ->
          Text(text = "Page: $page")
      }PagerSnippets.kt
  - id: live-compose-guide-layouts-pager-horizontalpager-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#horizontalpager
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: 0a7131d4e5f289f19f4e2e468f7bd1070782c85710eada2ea2f51d51ddc532d0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To create a pager that scrolls horizontally left and right, use HorizontalPager:

      Figure 1

      . Demo of

      HorizontalPager

      // Display 10 items
      val pagerState = rememberPagerState(pageCount = {
          10
      })
      HorizontalPager(state = pagerState) { page ->
          // Our page content
          Text(
              text = "Page: $page",
              modifier = Modifier.fillMaxWidth()
          )
      }PagerSnippets.kt
  - id: live-compose-guide-layouts-pager-key-points-1-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#key-points-1
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: 77e14da1aaf2bb149f9fc3812a1ff898d07b1d2baeae828e92489c9af92d7b0e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The AutoAdvancePager function creates a horizontally paging view with automatic advancement. It takes a list of Color objects as input, which are used as background colors for each page.

      pagerState is created using rememberPagerState, which holds the state of the pager.

      pagerIsDragged and pageIsPressed track user interaction.

      The LaunchedEffect auto-advances the pager every two seconds unless the user drags the pager or presses one of the pages.

      HorizontalPager displays a list of pages, each with a Text composable displaying the page number. The modifier fills the page, sets the background color from pageItems, and makes the page clickable.

      @Composable
      fun PagerIndicator(pageCount: Int, currentPageIndex: Int, modifier: Modifier = Modifier) {
          Box(modifier = Modifier.fillMaxSize()) {
              Row(
                  modifier = Modifier
                      .wrapContentHeight()
                      .fillMaxWidth()
                      .align(Alignment.BottomCenter)
                      .padding(bottom = 8.dp),
                  horizontalArrangement = Arrangement.Center
              ) {
                  repeat(pageCount) { iteration ->
                      val color = if (currentPageIndex == iteration) Color.DarkGray else Color.LightGray
                      Box(
                          modifier = modifier
                              .padding(2.dp)
                              .clip(CircleShape)
                              .background(color)
                              .size(16.dp)
                      )
                  }
              }
          }
      }PagerSnippets.kt
  - id: live-compose-guide-layouts-pager-key-points-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#key-points-2
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: bcd468bcfbd6364cfe9022a3fb6d07ecd6980c0d6f0e5ba39833625de4082041
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A Box composable acts as the root element and contains a Row to arrange the page indicators horizontally.

      A custom page indicator is displayed as a row of circles, where each Box clipped to a CircleShape represents a page.

      The current page's circle is colored as a DarkGray, while the other circles are LightGray. The currentPageIndex parameter determines which circle renders in dark gray.
  - id: live-compose-guide-layouts-pager-lazy-creation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#lazy-creation
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: b13d2a0c05fe2f2104a1ffaa4a3ee55e536404ca4a54582095eab58416faeaf3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Pages in both HorizontalPager and VerticalPager are lazily composed and laid-out when required. As the user scrolls through pages, the composable removes any pages which are no longer required.
  - id: live-compose-guide-layouts-pager-load-more-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#load-more
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: 09e5aee1833806fa2c13b6921be9ef4d977995c1b6ee567c956f2d617df7e5f4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: By default, the pager only loads the visible pages on-screen. To load more pages offscreen, set beyondBoundsPageCount to a value higher than zero.
  - id: live-compose-guide-layouts-pager-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#main-content
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: e35e11b4cf25d4b9f053550ecf02de8b2eaa494bfb22f7e182e44f893fd6023f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: To flip through content horizontally or vertically, you can use the HorizontalPager and VerticalPager composables. These have similar functions to ViewPager in the view system. By default, HorizontalPager takes up the full screen width and VerticalPager takes up the full height. The pagers also only fling one page at a time. All of these defaults are configurable.
  - id: live-compose-guide-layouts-pager-result-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#result
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: 9488734159c58f92d7308b8a1b3766f026c1ee662ed95c7f79d70c9c83d47227
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This video displays the basic auto-advancing pager from the preceding snippets:

      Figure 8

      . An auto-advancing pager with a two-second delay between each page progression.
  - id: live-compose-guide-layouts-pager-scroll-effects-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#scroll-effects
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: 15adffb135a5b5fb79105b84cde7e827af42de786fc9d1e4106c592671c2eef9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A common use case is to use the scroll position to apply effects to your pager items. To find out how far a page is from the selected page, you can use PagerState.currentPageOffsetFraction. You can then apply transformation effects to your content based on the distance from the selected page.

      Figure 4

      . Applying transformations to Pager content

      For example, to adjust the opacity of items based on how far they are from the center, change the alpha using Modifier.graphicsLayer on an item inside the pager:

      val pagerState = rememberPagerState(pageCount = {
          4
      })
      HorizontalPager(state = pagerState) { page ->
          Card(
              Modifier
                  .size(200.dp)
                  .graphicsLayer {
                      // Calculate the absolute offset for the current page from the
                      // scroll position. We use the absolute value which allows us to mirror
                      // any effects for both directions
                      val pageOffset = (
                          (pagerState.currentPage - page) + pagerState
                              .currentPageOffsetFraction
                          ).absoluteValue

                      // We animate the alpha, between 50% and 100%
                      alpha = lerp(
                          start = 0.5f,
                          stop = 1f,
                          fraction = 1f - pageOffset.coerceIn(0f, 1f)
                      )
                  }
          ) {
              // Card content
          }
      }PagerSnippets.kt
  - id: live-compose-guide-layouts-pager-scroll-to-item-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#scroll-to-item
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: d3475ba61b6ee3c43ea6bbf6a7bba1cc9b4ae1324000dc6c3bc0b41fd0af219a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To scroll to a certain page in the pager, create a PagerState object using rememberPagerState() and pass it as the state parameter to the pager. You can call PagerState#scrollToPage() on this state, inside a CoroutineScope:

      val pagerState = rememberPagerState(pageCount = {
          10
      })
      HorizontalPager(state = pagerState) { page ->
          // Our page content
          Text(
              text = "Page: $page",
              modifier = Modifier
                  .fillMaxWidth()
                  .height(100.dp)
          )
      }

      // scroll to page
      val coroutineScope = rememberCoroutineScope()
      Button(onClick = {
          coroutineScope.launch {
              // Call scroll to on pagerState
              pagerState.scrollToPage(5)
          }
      }, modifier = Modifier.align(Alignment.BottomCenter)) {
          Text("Jump to Page 5")
      }PagerSnippets.kt

      If you want to animate to the page, use the PagerState#animateScrollToPage() function:

      val pagerState = rememberPagerState(pageCount = {
          10
      })

      HorizontalPager(state = pagerState) { page ->
          // Our page content
          Text(
              text = "Page: $page",
              modifier = Modifier
                  .fillMaxWidth()
                  .height(100.dp)
          )
      }

      // scroll to page
      val coroutineScope = rememberCoroutineScope()
      Button(onClick = {
          coroutineScope.launch {
              // Call scroll to on pagerState
              pagerState.animateScrollToPage(5)
          }
      }, modifier = Modifier.align(Alignment.BottomCenter)) {
          Text("Jump to Page 5")
      }PagerSnippets.kt
  - id: live-compose-guide-layouts-pager-snap-distance-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#snap-distance
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: fa00152197abd35b3eea5d7962f0e7ee36e60af82958f108088e7d542cdd605c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      By default, HorizontalPager and VerticalPager set the maximum number of pages that a fling gesture can scroll past to one page at a time. To change this, set pagerSnapDistance on the flingBehavior:

      val pagerState = rememberPagerState(pageCount = { 10 })

      val fling = PagerDefaults.flingBehavior(
          state = pagerState,
          pagerSnapDistance = PagerSnapDistance.atMost(10)
      )

      Column(modifier = Modifier.fillMaxSize()) {
          HorizontalPager(
              state = pagerState,
              pageSize = PageSize.Fixed(200.dp),
              beyondViewportPageCount = 10,
              flingBehavior = fling
          ) {
              PagerSampleItem(page = it)
          }
      }PagerSnippets.kt
  - id: live-compose-guide-layouts-pager-verticalpager-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/pager#verticalpager
    revision: web:compose-guide-layouts-pager:content@sha256:35bd407ac9b4179f54d0bc5d49c513c84b76e0c4b362ae80faf48fbc28253a1a
    sha256: 0dac2f3686b5ad10156908085f218b7fe3c8f521d5c4531405eed9b688fc6143
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To create a pager that scrolls up and down, use VerticalPager:

      Figure 2

      . Demo of

      VerticalPager

      // Display 10 items
      val pagerState = rememberPagerState(pageCount = {
          10
      })
      VerticalPager(state = pagerState) { page ->
          // Our page content
          Text(
              text = "Page: $page",
              modifier = Modifier.fillMaxWidth()
          )
      }PagerSnippets.kt
compose:
  id: live-compose-guide-layouts-pager
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation
  sections:
    - id: live-compose-guide-layouts-pager-add-page
      title: Add a page indicator
      aliases:
        - androidx.compose.foundation.pager.HorizontalPager
        - androidx.compose.foundation.pager.PagerState
        - androidx.compose.foundation.pager.rememberPagerState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-add-page-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-auto-advancing
      title: Create an auto-advancing pager
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-auto-advancing-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-basic-example
      title: Basic example
      aliases:
        - androidx.compose.foundation.pager.HorizontalPager
        - androidx.compose.foundation.pager.rememberPagerState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-basic-example-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-content-padding
      title: Content padding
      aliases:
        - androidx.compose.foundation.pager.HorizontalPager
        - androidx.compose.foundation.pager.VerticalPager
        - androidx.compose.foundation.pager.rememberPagerState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-content-padding-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-custom-page
      title: Custom page sizes
      aliases:
        - androidx.compose.foundation.pager.HorizontalPager
        - androidx.compose.foundation.pager.VerticalPager
        - androidx.compose.foundation.pager.rememberPagerState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-custom-page-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-customize-scroll
      title: Customize scroll behavior
      aliases:
        - androidx.compose.foundation.pager.HorizontalPager
        - androidx.compose.foundation.pager.VerticalPager
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-customize-scroll-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-get-notified
      title: Get notified about page state changes
      aliases:
        - androidx.compose.foundation.pager.VerticalPager
        - androidx.compose.foundation.pager.PagerState
        - androidx.compose.foundation.pager.rememberPagerState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-get-notified-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-horizontalpager
      title: HorizontalPager
      aliases:
        - androidx.compose.foundation.pager.HorizontalPager
        - androidx.compose.foundation.pager.rememberPagerState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-horizontalpager-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-key-points-1
      title: Key points about the code
      aliases:
        - androidx.compose.foundation.pager.HorizontalPager
        - androidx.compose.foundation.pager.rememberPagerState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-key-points-1-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-key-points-2
      title: Key points about the code
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-key-points-2-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-lazy-creation
      title: Lazy creation
      aliases:
        - androidx.compose.foundation.pager.HorizontalPager
        - androidx.compose.foundation.pager.VerticalPager
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-lazy-creation-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-load-more
      title: Load more pages offscreen
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-load-more-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-main-content
      title: Introduction
      aliases:
        - androidx.compose.foundation.pager.HorizontalPager
        - androidx.compose.foundation.pager.VerticalPager
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-main-content-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-result
      title: Result
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-result-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-scroll-effects
      title: Apply item scroll effects to content
      aliases:
        - androidx.compose.foundation.pager.HorizontalPager
        - androidx.compose.foundation.pager.PagerState
        - androidx.compose.foundation.pager.rememberPagerState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-scroll-effects-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-scroll-to-item
      title: Scroll to an item in the pager
      aliases:
        - androidx.compose.foundation.pager.HorizontalPager
        - androidx.compose.foundation.pager.PagerState
        - androidx.compose.foundation.pager.rememberPagerState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-scroll-to-item-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-snap-distance
      title: Snap distance
      aliases:
        - androidx.compose.foundation.pager.HorizontalPager
        - androidx.compose.foundation.pager.VerticalPager
        - androidx.compose.foundation.pager.rememberPagerState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-snap-distance-source
      relatedIds: []
    - id: live-compose-guide-layouts-pager-verticalpager
      title: VerticalPager
      aliases:
        - androidx.compose.foundation.pager.VerticalPager
        - androidx.compose.foundation.pager.rememberPagerState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-layouts-pager-verticalpager-source
      relatedIds: []
---

# Pager in Compose

Public source: https://developer.android.com/develop/ui/compose/layouts/pager

## Add a page indicator

To add an indicator to a page, use the PagerState object to get information about which page is selected out of the number of pages, and draw your custom indicator.

For example, to create a circle indicator, you can repeat the number of circles and change the circle color based on if the page is selected, using pagerState.currentPage:

val pagerState = rememberPagerState(pageCount = {
    4
})
HorizontalPager(
    state = pagerState,
    modifier = Modifier.fillMaxSize()
) { page ->
    // Our page content
    Text(
        text = "Page: $page",
    )
}
Row(
    Modifier
        .wrapContentHeight()
        .fillMaxWidth()
        .align(Alignment.BottomCenter)
        .padding(bottom = 8.dp),
    horizontalArrangement = Arrangement.Center
) {
    repeat(pagerState.pageCount) { iteration ->
        val color = if (pagerState.currentPage == iteration) Color.DarkGray else Color.LightGray
        Box(
            modifier = Modifier
                .padding(2.dp)
                .clip(CircleShape)
                .background(color)
                .size(16.dp)
        )
    }
}PagerSnippets.kt

Figure 3

. Pager showing a circle indicator below the content

Sources: [live-compose-guide-layouts-pager-add-page-source](https://developer.android.com/develop/ui/compose/layouts/pager#add-page)

## Additional resources

Display a paging list

Sources: [live-compose-guide-layouts-pager-additional-resources-source](https://developer.android.com/develop/ui/compose/layouts/pager#additional-resources)

## Create an auto-advancing pager

This section describes how to create an auto-advancing pager with page indicators in Compose. The collection of items automatically scroll horizontally, but users can also manually swipe between items. If a user interacts with the pager, it stops the automatic progression.

Sources: [live-compose-guide-layouts-pager-auto-advancing-source](https://developer.android.com/develop/ui/compose/layouts/pager#auto-advancing)

## Basic example

Together, the following snippets create a basic auto-advancing pager implementation with a visual indicator, in which each page renders as a different color:

@Composable
fun AutoAdvancePager(pageItems: List<Color>, modifier: Modifier = Modifier) {
    Box(modifier = Modifier.fillMaxSize()) {
        val pagerState = rememberPagerState(pageCount = { pageItems.size })
        val pagerIsDragged by pagerState.interactionSource.collectIsDraggedAsState()

        val pageInteractionSource = remember { MutableInteractionSource() }
        val pageIsPressed by pageInteractionSource.collectIsPressedAsState()

        // Stop auto-advancing when pager is dragged or one of the pages is pressed
        val autoAdvance = !pagerIsDragged && !pageIsPressed

        if (autoAdvance) {
            LaunchedEffect(pagerState, pageInteractionSource) {
                while (true) {
                    delay(2000)
                    val nextPage = (pagerState.currentPage + 1) % pageItems.size
                    pagerState.animateScrollToPage(nextPage)
                }
            }
        }

        HorizontalPager(
            state = pagerState
        ) { page ->
            Text(
                text = "Page: $page",
                textAlign = TextAlign.Center,
                modifier = modifier
                    .fillMaxSize()
                    .background(pageItems[page])
                    .clickable(
                        interactionSource = pageInteractionSource,
                        indication = LocalIndication.current
                    ) {
                        // Handle page click
                    }
                    .wrapContentSize(align = Alignment.Center)
            )
        }

        PagerIndicator(pageItems.size, pagerState.currentPage)
    }
}PagerSnippets.kt

Sources: [live-compose-guide-layouts-pager-basic-example-source](https://developer.android.com/develop/ui/compose/layouts/pager#basic-example)

## Content padding

HorizontalPager and VerticalPager both support changing the content padding, which lets you influence the maximum size and alignment of pages.

For example, setting the start padding aligns the pages towards the end:

Figure 5

. Pager with start padding.

val pagerState = rememberPagerState(pageCount = {
    4
})
HorizontalPager(
    state = pagerState,
    contentPadding = PaddingValues(start = 64.dp),
) { page ->
    // page content
}PagerSnippets.kt

Setting both the start and end padding to the same value centers the item horizontally:

Figure 6

. Pager with horizontal padding.

val pagerState = rememberPagerState(pageCount = {
    4
})
HorizontalPager(
    state = pagerState,
    contentPadding = PaddingValues(horizontal = 32.dp),
) { page ->
    // page content
}PagerSnippets.kt

Setting the end padding aligns the pages towards the start:

Figure 7

. Pager with end padding.

val pagerState = rememberPagerState(pageCount = {
    4
})
HorizontalPager(
    state = pagerState,
    contentPadding = PaddingValues(end = 64.dp),
) { page ->
    // page content
}PagerSnippets.kt

You can set the top and bottom values to achieve similar effects for VerticalPager. The value 32.dp is only used here as an example; you can set each of the padding dimensions to any value.

Sources: [live-compose-guide-layouts-pager-content-padding-source](https://developer.android.com/develop/ui/compose/layouts/pager#content-padding)

## Custom page sizes

By default, HorizontalPager and VerticalPager take up the full width or full height, respectively. You can set the pageSize variable to either have a Fixed, Fill (default), or a custom size calculation.

For example, to set a fixed width page of 100.dp:

val pagerState = rememberPagerState(pageCount = {
    4
})
HorizontalPager(
    state = pagerState,
    pageSize = PageSize.Fixed(100.dp)
) { page ->
    // page content
}PagerSnippets.kt

To size the pages based on the viewport size, use a custom page size calculation. Create a custom PageSize object and divide the availableSpace by three, taking into account the spacing between the items:

private val threePagesPerViewport = object : PageSize {
    override fun Density.calculateMainAxisPageSize(
        availableSpace: Int,
        pageSpacing: Int
    ): Int {
        return (availableSpace - 2 * pageSpacing) / 3
    }
}PagerSnippets.kt

Sources: [live-compose-guide-layouts-pager-custom-page-source](https://developer.android.com/develop/ui/compose/layouts/pager#custom-page)

## Customize scroll behavior

The default HorizontalPager and VerticalPager composables specify how scrolling gestures work with the pager. However, you can customize and change the defaults such as the pagerSnapDistance or the flingBehavior.

Sources: [live-compose-guide-layouts-pager-customize-scroll-source](https://developer.android.com/develop/ui/compose/layouts/pager#customize-scroll)

## Get notified about page state changes

PagerState has three properties with information about pages: currentPage, settledPage, and targetPage.

currentPage: The closest page to the snap position. By default, the snap position is at the start of the layout.

settledPage: The page number when no animation or scrolling is running. This is different from the currentPage property in that the currentPage immediately updates if the page is close enough to the snap position, but settledPage remains the same until all the animations are finished running.

targetPage: The proposed stop position for a scrolling movement.

You can use the snapshotFlow function to observe changes to these variables and react to them. For example, to send an analytics event on each page change, you can do the following:

val pagerState = rememberPagerState(pageCount = {
    10
})

LaunchedEffect(pagerState) {
    // Collect from the a snapshotFlow reading the currentPage
    snapshotFlow { pagerState.currentPage }.collect { page ->
        // Do something with each page change, for example:
        // viewModel.sendPageSelectedEvent(page)
        Log.d("Page change", "Page changed to $page")
    }
}

VerticalPager(
    state = pagerState,
) { page ->
    Text(text = "Page: $page")
}PagerSnippets.kt

Sources: [live-compose-guide-layouts-pager-get-notified-source](https://developer.android.com/develop/ui/compose/layouts/pager#get-notified)

## HorizontalPager

To create a pager that scrolls horizontally left and right, use HorizontalPager:

Figure 1

. Demo of

HorizontalPager

// Display 10 items
val pagerState = rememberPagerState(pageCount = {
    10
})
HorizontalPager(state = pagerState) { page ->
    // Our page content
    Text(
        text = "Page: $page",
        modifier = Modifier.fillMaxWidth()
    )
}PagerSnippets.kt

Sources: [live-compose-guide-layouts-pager-horizontalpager-source](https://developer.android.com/develop/ui/compose/layouts/pager#horizontalpager)

## Key points about the code

The AutoAdvancePager function creates a horizontally paging view with automatic advancement. It takes a list of Color objects as input, which are used as background colors for each page.

pagerState is created using rememberPagerState, which holds the state of the pager.

pagerIsDragged and pageIsPressed track user interaction.

The LaunchedEffect auto-advances the pager every two seconds unless the user drags the pager or presses one of the pages.

HorizontalPager displays a list of pages, each with a Text composable displaying the page number. The modifier fills the page, sets the background color from pageItems, and makes the page clickable.

@Composable
fun PagerIndicator(pageCount: Int, currentPageIndex: Int, modifier: Modifier = Modifier) {
    Box(modifier = Modifier.fillMaxSize()) {
        Row(
            modifier = Modifier
                .wrapContentHeight()
                .fillMaxWidth()
                .align(Alignment.BottomCenter)
                .padding(bottom = 8.dp),
            horizontalArrangement = Arrangement.Center
        ) {
            repeat(pageCount) { iteration ->
                val color = if (currentPageIndex == iteration) Color.DarkGray else Color.LightGray
                Box(
                    modifier = modifier
                        .padding(2.dp)
                        .clip(CircleShape)
                        .background(color)
                        .size(16.dp)
                )
            }
        }
    }
}PagerSnippets.kt

Sources: [live-compose-guide-layouts-pager-key-points-1-source](https://developer.android.com/develop/ui/compose/layouts/pager#key-points-1)

## Key points about the code

A Box composable acts as the root element and contains a Row to arrange the page indicators horizontally.

A custom page indicator is displayed as a row of circles, where each Box clipped to a CircleShape represents a page.

The current page's circle is colored as a DarkGray, while the other circles are LightGray. The currentPageIndex parameter determines which circle renders in dark gray.

Sources: [live-compose-guide-layouts-pager-key-points-2-source](https://developer.android.com/develop/ui/compose/layouts/pager#key-points-2)

## Lazy creation

Pages in both HorizontalPager and VerticalPager are lazily composed and laid-out when required. As the user scrolls through pages, the composable removes any pages which are no longer required.

Sources: [live-compose-guide-layouts-pager-lazy-creation-source](https://developer.android.com/develop/ui/compose/layouts/pager#lazy-creation)

## Load more pages offscreen

By default, the pager only loads the visible pages on-screen. To load more pages offscreen, set beyondBoundsPageCount to a value higher than zero.

Sources: [live-compose-guide-layouts-pager-load-more-source](https://developer.android.com/develop/ui/compose/layouts/pager#load-more)

## Introduction

To flip through content horizontally or vertically, you can use the HorizontalPager and VerticalPager composables. These have similar functions to ViewPager in the view system. By default, HorizontalPager takes up the full screen width and VerticalPager takes up the full height. The pagers also only fling one page at a time. All of these defaults are configurable.

Sources: [live-compose-guide-layouts-pager-main-content-source](https://developer.android.com/develop/ui/compose/layouts/pager#main-content)

## Result

This video displays the basic auto-advancing pager from the preceding snippets:

Figure 8

. An auto-advancing pager with a two-second delay between each page progression.

Sources: [live-compose-guide-layouts-pager-result-source](https://developer.android.com/develop/ui/compose/layouts/pager#result)

## Apply item scroll effects to content

A common use case is to use the scroll position to apply effects to your pager items. To find out how far a page is from the selected page, you can use PagerState.currentPageOffsetFraction. You can then apply transformation effects to your content based on the distance from the selected page.

Figure 4

. Applying transformations to Pager content

For example, to adjust the opacity of items based on how far they are from the center, change the alpha using Modifier.graphicsLayer on an item inside the pager:

val pagerState = rememberPagerState(pageCount = {
    4
})
HorizontalPager(state = pagerState) { page ->
    Card(
        Modifier
            .size(200.dp)
            .graphicsLayer {
                // Calculate the absolute offset for the current page from the
                // scroll position. We use the absolute value which allows us to mirror
                // any effects for both directions
                val pageOffset = (
                    (pagerState.currentPage - page) + pagerState
                        .currentPageOffsetFraction
                    ).absoluteValue

                // We animate the alpha, between 50% and 100%
                alpha = lerp(
                    start = 0.5f,
                    stop = 1f,
                    fraction = 1f - pageOffset.coerceIn(0f, 1f)
                )
            }
    ) {
        // Card content
    }
}PagerSnippets.kt

Sources: [live-compose-guide-layouts-pager-scroll-effects-source](https://developer.android.com/develop/ui/compose/layouts/pager#scroll-effects)

## Scroll to an item in the pager

To scroll to a certain page in the pager, create a PagerState object using rememberPagerState() and pass it as the state parameter to the pager. You can call PagerState#scrollToPage() on this state, inside a CoroutineScope:

val pagerState = rememberPagerState(pageCount = {
    10
})
HorizontalPager(state = pagerState) { page ->
    // Our page content
    Text(
        text = "Page: $page",
        modifier = Modifier
            .fillMaxWidth()
            .height(100.dp)
    )
}

// scroll to page
val coroutineScope = rememberCoroutineScope()
Button(onClick = {
    coroutineScope.launch {
        // Call scroll to on pagerState
        pagerState.scrollToPage(5)
    }
}, modifier = Modifier.align(Alignment.BottomCenter)) {
    Text("Jump to Page 5")
}PagerSnippets.kt

If you want to animate to the page, use the PagerState#animateScrollToPage() function:

val pagerState = rememberPagerState(pageCount = {
    10
})

HorizontalPager(state = pagerState) { page ->
    // Our page content
    Text(
        text = "Page: $page",
        modifier = Modifier
            .fillMaxWidth()
            .height(100.dp)
    )
}

// scroll to page
val coroutineScope = rememberCoroutineScope()
Button(onClick = {
    coroutineScope.launch {
        // Call scroll to on pagerState
        pagerState.animateScrollToPage(5)
    }
}, modifier = Modifier.align(Alignment.BottomCenter)) {
    Text("Jump to Page 5")
}PagerSnippets.kt

Sources: [live-compose-guide-layouts-pager-scroll-to-item-source](https://developer.android.com/develop/ui/compose/layouts/pager#scroll-to-item)

## Snap distance

By default, HorizontalPager and VerticalPager set the maximum number of pages that a fling gesture can scroll past to one page at a time. To change this, set pagerSnapDistance on the flingBehavior:

val pagerState = rememberPagerState(pageCount = { 10 })

val fling = PagerDefaults.flingBehavior(
    state = pagerState,
    pagerSnapDistance = PagerSnapDistance.atMost(10)
)

Column(modifier = Modifier.fillMaxSize()) {
    HorizontalPager(
        state = pagerState,
        pageSize = PageSize.Fixed(200.dp),
        beyondViewportPageCount = 10,
        flingBehavior = fling
    ) {
        PagerSampleItem(page = it)
    }
}PagerSnippets.kt

Sources: [live-compose-guide-layouts-pager-snap-distance-source](https://developer.android.com/develop/ui/compose/layouts/pager#snap-distance)

## VerticalPager

To create a pager that scrolls up and down, use VerticalPager:

Figure 2

. Demo of

VerticalPager

// Display 10 items
val pagerState = rememberPagerState(pageCount = {
    10
})
VerticalPager(state = pagerState) { page ->
    // Our page content
    Text(
        text = "Page: $page",
        modifier = Modifier.fillMaxWidth()
    )
}PagerSnippets.kt

Sources: [live-compose-guide-layouts-pager-verticalpager-source](https://developer.android.com/develop/ui/compose/layouts/pager#verticalpager)
