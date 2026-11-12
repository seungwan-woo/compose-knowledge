---
type: reference
title: Flow layouts in Compose
description: "Public source: https://developer.android.com/develop/ui/compose/layouts/flow"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-layouts-flow-basic-usage-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/flow#basic-usage
    revision: web:compose-guide-layouts-flow:content@sha256:cb4311d48d0837bb7da178ece2f9b9404c9651580235e0fe72f091156df3a65b
    sha256: a20bf435c1e5e71bff9d97c3c4f1632ae9075323100b29a48a155edfda2f8b34
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To use FlowRow or FlowColumn, create these composables and place the items inside it that should follow the standard flow:

      @Composable
      private fun FlowRowSimpleUsageExample() {
          FlowRow(modifier = Modifier.padding(8.dp)) {
              ChipItem("Price: High to Low")
              ChipItem("Avg rating: 4+")
              ChipItem("Free breakfast")
              ChipItem("Free cancellation")
              ChipItem("£50 pn")
          }
      }FlowLayoutSnippets.kt

      This snippet results in the UI shown above, with items automatically flowing to the next row when there is no more space in the first row.
  - id: live-compose-guide-layouts-flow-cross-axis-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/flow#cross-axis
    revision: web:compose-guide-layouts-flow:content@sha256:cb4311d48d0837bb7da178ece2f9b9404c9651580235e0fe72f091156df3a65b
    sha256: c3e9d99a1556068468ba91e961669a9728051321b3eca88a7d9b39c8af80f726
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The cross axis is the axis in the opposite direction to the main axis. For example, in FlowRow, this is the vertical axis. To change how the overall contents inside the container are arranged in the cross axis, use verticalArrangement for FlowRow, and horizontalArrangement for FlowColumn.

      For FlowRow, the following table shows examples of setting different verticalArrangement on the items:

      Vertical arrangement set on FlowRow Result Arrangement.Top (Default) Arrangement.Bottom Arrangement.Center

      For FlowColumn, similar options are available with horizontalArrangement. The default cross axis arrangement is Arrangement.Start.
  - id: live-compose-guide-layouts-flow-features-flow-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/flow#features-flow
    revision: web:compose-guide-layouts-flow:content@sha256:cb4311d48d0837bb7da178ece2f9b9404c9651580235e0fe72f091156df3a65b
    sha256: 235c22d04c638da1bfd5ef1b1724fc3a99acf1a4db69475dfcdb78921bfe6cff
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Flow layouts have the following features and properties that you can use to create different layouts in your app.
  - id: live-compose-guide-layouts-flow-fillmaxheight-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/flow#fillmaxheight
    revision: web:compose-guide-layouts-flow:content@sha256:cb4311d48d0837bb7da178ece2f9b9404c9651580235e0fe72f091156df3a65b
    sha256: 54eda5da6218c08bb5d823a1fb3c0329f13ede09187143482d88ffcdb45c4eeb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Applying either Modifier.fillMaxColumnWidth() or Modifier.fillMaxRowHeight() to an item inside a FlowColumn or FlowRow ensures that items in the same column or row take up the same width or height as the biggest item in the column/row.

      For example, this example uses FlowColumn to display the list of Android desserts. You can see the difference in each item's width when Modifier.fillMaxColumnWidth() is applied to the items versus when it's not and the items wrap.

      FlowColumn(
          Modifier
              .padding(20.dp)
              .fillMaxHeight()
              .fillMaxWidth(),
          horizontalArrangement = Arrangement.spacedBy(8.dp),
          verticalArrangement = Arrangement.spacedBy(8.dp),
          maxItemsInEachColumn = 5,
      ) {
          repeat(listDesserts.size) {
              Box(
                  Modifier
                      .fillMaxColumnWidth()
                      .border(1.dp, Color.DarkGray, RoundedCornerShape(8.dp))
                      .padding(8.dp)
              ) {

                  Text(
                      text = listDesserts[it],
                      fontSize = 18.sp,
                      modifier = Modifier.padding(3.dp)
                  )
              }
          }
      }FlowLayoutSnippets.kt

      Modifier.fillMaxColumnWidth() applied to each item No width changes set (wrapping items)
  - id: live-compose-guide-layouts-flow-fractional-sizing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/flow#fractional-sizing
    revision: web:compose-guide-layouts-flow:content@sha256:cb4311d48d0837bb7da178ece2f9b9404c9651580235e0fe72f091156df3a65b
    sha256: caefc9cb299456cfdaddc9fde189864d8d131c17384f9250c2b6089ae365055e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Using Modifier.fillMaxWidth(fraction), you can specify the size of the container that an item should take up. This is different from how Modifier.fillMaxWidth(fraction) works when applied to Row or Column, in that Row/Column items take up a percentage of the remaining width, rather than the whole container's width.

      For example, the following code produces different results when using FlowRow vs Row:

      FlowRow(
          modifier = Modifier.padding(4.dp),
          horizontalArrangement = Arrangement.spacedBy(4.dp),
          maxItemsInEachRow = 3
      ) {
          val itemModifier = Modifier
              .clip(RoundedCornerShape(8.dp))
          Box(
              modifier = itemModifier
                  .height(200.dp)
                  .width(60.dp)
                  .background(Color.Red)
          )
          Box(
              modifier = itemModifier
                  .height(200.dp)
                  .fillMaxWidth(0.7f)
                  .background(Color.Blue)
          )
          Box(
              modifier = itemModifier
                  .height(200.dp)
                  .weight(1f)
                  .background(Color.Magenta)
          )
      }FlowLayoutSnippets.kt

      FlowRow: Middle item with 0.7 fraction of whole container width. Row: Middle item taking up 0.7 percent of remaining Row width.
  - id: live-compose-guide-layouts-flow-individual-item-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/flow#individual-item
    revision: web:compose-guide-layouts-flow:content@sha256:cb4311d48d0837bb7da178ece2f9b9404c9651580235e0fe72f091156df3a65b
    sha256: 6f777cad54e8b15896534da2f2f68ffbf518a4ad2d341dac46e0495f00e91c67
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You may want to position individual items within the row with different alignments. This is different from verticalArrangement and horizontalArrangement as it aligns items within the current line. You can apply this with Modifier.align().

      For example, when items in a FlowRow are different heights, the row takes the height of the biggest item and applies Modifier.align(alignmentOption) to the items:

      Vertical alignment set on FlowRow Result Alignment.Top (Default) Alignment.Bottom Alignment.CenterVertically

      For FlowColumn, similar options are available. The default alignment is Alignment.Start.
  - id: live-compose-guide-layouts-flow-item-weights-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/flow#item-weights
    revision: web:compose-guide-layouts-flow:content@sha256:cb4311d48d0837bb7da178ece2f9b9404c9651580235e0fe72f091156df3a65b
    sha256: 29432a1de357006bac9d1359361862726d8fea4906a84708506a833b6ff34c24
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      take up half the width each, and one item takes up the full width of the next column:

      Figure 4.

      FlowRow

      with alternating sizes of rows

      You can achieve this with the following code:

      FlowRow(
          modifier = Modifier.padding(4.dp),
          horizontalArrangement = Arrangement.spacedBy(4.dp),
          maxItemsInEachRow = 2
      ) {
          val itemModifier = Modifier
              .padding(4.dp)
              .height(80.dp)
              .clip(RoundedCornerShape(8.dp))
              .background(Color.Blue)
          repeat(6) { item ->
              // if the item is the third item, don't use weight modifier, but rather fillMaxWidth
              if ((item + 1) % 3 == 0) {
                  Spacer(modifier = itemModifier.fillMaxWidth())
              } else {
                  Spacer(modifier = itemModifier.weight(0.5f))
              }
          }
      }FlowLayoutSnippets.kt
  - id: live-compose-guide-layouts-flow-item-weights-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/flow#item-weights
    revision: web:compose-guide-layouts-flow:content@sha256:cb4311d48d0837bb7da178ece2f9b9404c9651580235e0fe72f091156df3a65b
    sha256: 4c5eddf14cf27b78b8ebf36de32b238a18677ed6f70374a1dc1bd86a68aac5d2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Weight grows an item based on its factor and the available space on the line it was placed in. Importantly, there is a difference between FlowRow and Row with how weights are used to calculate the width of an item. For Rows, weight is based on all items in the Row. With FlowRow, weight is based on the items in the line that an item is placed in, not all the items in the FlowRow container.

      For example, if you have 4 items that all fall on a line, each with different weights of 1f, 2f, 1f, and 3f, the total weight is 7f. The remaining space in a row or column will be divided by 7f. Then, each item width will be calculated using: weight * (remainingSpace / totalWeight).

      You can use a combination of Modifier.weight and max items with FlowRow or FlowColumn to create a grid-like layout. This approach is useful for creating responsive layouts that adjust to the sizing of your device.

      There are a few different examples of what you can achieve using weights. One example is a grid where items are equally sized, as shown below:

      Figure 2.

      Using

      FlowRow

      to create a grid

      To create a grid of equal item sizes, you can do the following:

      val rows = 3
      val columns = 3
      FlowRow(
          modifier = Modifier.padding(4.dp),
          horizontalArrangement = Arrangement.spacedBy(4.dp),
          maxItemsInEachRow = rows
      ) {
          val itemModifier = Modifier
              .padding(4.dp)
              .height(80.dp)
              .weight(1f)
              .clip(RoundedCornerShape(8.dp))
              .background(MaterialColors.Blue200)
          repeat(rows * columns) {
              Spacer(modifier = itemModifier)
          }
      }FlowLayoutSnippets.kt

      Importantly, if you add another item and repeat it 10 times instead of 9, the last item takes up the entire last column, as the total weight for the whole row is 1f:

      Figure 3.

      Using

      FlowRow

      to create a grid with the last item taking up full width

      You can combine weights with other Modifiers such as Modifier.width(exactDpAmount), Modifier.aspectRatio(aspectRatio), or Modifier.fillMaxWidth(fraction). These modifiers all work in conjunction to allow for responsive sizing of items within a FlowRow (or FlowColumn).

      You can also create an alternating grid of different item sizes, where two items
  - id: live-compose-guide-layouts-flow-main-axis-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/flow#main-axis
    revision: web:compose-guide-layouts-flow:content@sha256:cb4311d48d0837bb7da178ece2f9b9404c9651580235e0fe72f091156df3a65b
    sha256: 626f9fca5abfc53562812b186d9ffeba77cc571e45717ea150709d59a654b0f2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The main axis is the axis on which items are laid out (for example, in FlowRow, items are arranged horizontally). The horizontalArrangement parameter in FlowRow controls the way free space is distributed between items.

      The following table shows examples of setting horizontalArrangement on items for FlowRow:

      Horizontal arrangement set on FlowRow Result Arrangement.Start (Default) Arrangement.SpaceBetween Arrangement.Center Arrangement.End Arrangement.SpaceAround Arrangement.spacedBy(8.dp)

      For FlowColumn, similar options are available with verticalArrangement, with the default of Arrangement.Top.
  - id: live-compose-guide-layouts-flow-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/flow#main-content
    revision: web:compose-guide-layouts-flow:content@sha256:cb4311d48d0837bb7da178ece2f9b9404c9651580235e0fe72f091156df3a65b
    sha256: 7a81e00bf88ebd360634e14b688b2a56ee32a6260f06e309636a6081cc984fe4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      FlowRow and FlowColumn are composables that are similar to Row and Column, but differ in that items flow into the next line when the container runs out of space. This creates multiple rows or columns. The number of items in a line can also be controlled by setting maxItemsInEachRow or maxItemsInEachColumn. You can often use FlowRow and FlowColumn to build responsive layouts— content will not be cut off if items are too large for one dimension, and using a combination of maxItemsInEach* with Modifier.weight(weight) can help build layouts that fill/expand the width of a row or column when needed.

      The typical example is for a chip or filtering UI:

      Figure 1.

      Example of

      FlowRow
  - id: live-compose-guide-layouts-flow-max-items-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/flow#max-items
    revision: web:compose-guide-layouts-flow:content@sha256:cb4311d48d0837bb7da178ece2f9b9404c9651580235e0fe72f091156df3a65b
    sha256: 08511feff13f7e306f90331640cd036a85b348b4880caae961022f03214d7f99
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The parameters maxItemsInEachRow or maxItemsInEachColumn define the maximum items in the main axis to allow in one line before wrapping to the next. The default is Int.MAX_INT, which allows as many items as possible, as long as their sizes allow them to fit into the line.

      For example, setting a maxItemsInEachRow forces the initial layout to only have 3 items:

      No max set maxItemsInEachRow = 3
  - id: live-compose-guide-layouts-flow-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/flow#recommended_for_you
    revision: web:compose-guide-layouts-flow:content@sha256:cb4311d48d0837bb7da178ece2f9b9404c9651580235e0fe72f091156df3a65b
    sha256: e83804120088ff54812a3e81fbfb6fc124d84ff2f5a2e2c06cd97f3b28ec0222
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Compose layout basics

      ConstraintLayout in Compose

      Editor actions {:#editor-actions}
compose:
  id: live-compose-guide-layouts-flow
  artifact: androidx.compose.foundation:foundation-layout
  fqn: androidx.compose.foundation.layout
  sections:
    - id: live-compose-guide-layouts-flow-basic-usage
      title: Basic usage
      aliases:
        - androidx.compose.foundation.layout.FlowRow
        - androidx.compose.foundation.layout.FlowColumn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-flow-basic-usage-source
      relatedIds: []
    - id: live-compose-guide-layouts-flow-cross-axis
      title: Cross axis arrangement
      aliases:
        - androidx.compose.foundation.layout.FlowRow
        - androidx.compose.foundation.layout.FlowColumn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-flow-cross-axis-source
      relatedIds: []
    - id: live-compose-guide-layouts-flow-features-flow
      title: Features of flow layout
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-flow-features-flow-source
      relatedIds: []
    - id: live-compose-guide-layouts-flow-fillmaxheight
      title: fillMaxColumnWidth() and fillMaxRowHeight()
      aliases:
        - androidx.compose.foundation.layout.FlowRow
        - androidx.compose.foundation.layout.FlowColumn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-flow-fillmaxheight-source
      relatedIds: []
    - id: live-compose-guide-layouts-flow-fractional-sizing
      title: Fractional sizing
      aliases:
        - androidx.compose.foundation.layout.FlowRow
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-flow-fractional-sizing-source
      relatedIds: []
    - id: live-compose-guide-layouts-flow-individual-item
      title: Individual item alignment
      aliases:
        - androidx.compose.foundation.layout.FlowRow
        - androidx.compose.foundation.layout.FlowColumn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-flow-individual-item-source
      relatedIds: []
    - id: live-compose-guide-layouts-flow-item-weights
      title: Item weights
      aliases:
        - androidx.compose.foundation.layout.FlowRow
        - androidx.compose.foundation.layout.FlowColumn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-flow-item-weights-source
      relatedIds: []
    - id: live-compose-guide-layouts-flow-item-weights-2
      title: Item weights
      aliases:
        - androidx.compose.foundation.layout.FlowRow
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-flow-item-weights-2-source
      relatedIds: []
    - id: live-compose-guide-layouts-flow-main-axis
      title: "Main axis arrangement: horizontal or vertical arrangement"
      aliases:
        - androidx.compose.foundation.layout.FlowRow
        - androidx.compose.foundation.layout.FlowColumn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-flow-main-axis-source
      relatedIds: []
    - id: live-compose-guide-layouts-flow-main-content
      title: Introduction
      aliases:
        - androidx.compose.foundation.layout.FlowRow
        - androidx.compose.foundation.layout.FlowColumn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-flow-main-content-source
      relatedIds: []
    - id: live-compose-guide-layouts-flow-max-items
      title: Max items in row or column
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-flow-max-items-source
      relatedIds: []
    - id: live-compose-guide-layouts-flow-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-compose-guide-layouts-flow-recommended-for-you-source
      relatedIds: []
---

# Flow layouts in Compose

Public source: https://developer.android.com/develop/ui/compose/layouts/flow

## Basic usage

To use FlowRow or FlowColumn, create these composables and place the items inside it that should follow the standard flow:

@Composable
private fun FlowRowSimpleUsageExample() {
    FlowRow(modifier = Modifier.padding(8.dp)) {
        ChipItem("Price: High to Low")
        ChipItem("Avg rating: 4+")
        ChipItem("Free breakfast")
        ChipItem("Free cancellation")
        ChipItem("£50 pn")
    }
}FlowLayoutSnippets.kt

This snippet results in the UI shown above, with items automatically flowing to the next row when there is no more space in the first row.

Sources: [live-compose-guide-layouts-flow-basic-usage-source](https://developer.android.com/develop/ui/compose/layouts/flow#basic-usage)

## Cross axis arrangement

The cross axis is the axis in the opposite direction to the main axis. For example, in FlowRow, this is the vertical axis. To change how the overall contents inside the container are arranged in the cross axis, use verticalArrangement for FlowRow, and horizontalArrangement for FlowColumn.

For FlowRow, the following table shows examples of setting different verticalArrangement on the items:

Vertical arrangement set on FlowRow Result Arrangement.Top (Default) Arrangement.Bottom Arrangement.Center

For FlowColumn, similar options are available with horizontalArrangement. The default cross axis arrangement is Arrangement.Start.

Sources: [live-compose-guide-layouts-flow-cross-axis-source](https://developer.android.com/develop/ui/compose/layouts/flow#cross-axis)

## Features of flow layout

Flow layouts have the following features and properties that you can use to create different layouts in your app.

Sources: [live-compose-guide-layouts-flow-features-flow-source](https://developer.android.com/develop/ui/compose/layouts/flow#features-flow)

## fillMaxColumnWidth() and fillMaxRowHeight()

Applying either Modifier.fillMaxColumnWidth() or Modifier.fillMaxRowHeight() to an item inside a FlowColumn or FlowRow ensures that items in the same column or row take up the same width or height as the biggest item in the column/row.

For example, this example uses FlowColumn to display the list of Android desserts. You can see the difference in each item's width when Modifier.fillMaxColumnWidth() is applied to the items versus when it's not and the items wrap.

FlowColumn(
    Modifier
        .padding(20.dp)
        .fillMaxHeight()
        .fillMaxWidth(),
    horizontalArrangement = Arrangement.spacedBy(8.dp),
    verticalArrangement = Arrangement.spacedBy(8.dp),
    maxItemsInEachColumn = 5,
) {
    repeat(listDesserts.size) {
        Box(
            Modifier
                .fillMaxColumnWidth()
                .border(1.dp, Color.DarkGray, RoundedCornerShape(8.dp))
                .padding(8.dp)
        ) {

            Text(
                text = listDesserts[it],
                fontSize = 18.sp,
                modifier = Modifier.padding(3.dp)
            )
        }
    }
}FlowLayoutSnippets.kt

Modifier.fillMaxColumnWidth() applied to each item No width changes set (wrapping items)

Sources: [live-compose-guide-layouts-flow-fillmaxheight-source](https://developer.android.com/develop/ui/compose/layouts/flow#fillmaxheight)

## Fractional sizing

Using Modifier.fillMaxWidth(fraction), you can specify the size of the container that an item should take up. This is different from how Modifier.fillMaxWidth(fraction) works when applied to Row or Column, in that Row/Column items take up a percentage of the remaining width, rather than the whole container's width.

For example, the following code produces different results when using FlowRow vs Row:

FlowRow(
    modifier = Modifier.padding(4.dp),
    horizontalArrangement = Arrangement.spacedBy(4.dp),
    maxItemsInEachRow = 3
) {
    val itemModifier = Modifier
        .clip(RoundedCornerShape(8.dp))
    Box(
        modifier = itemModifier
            .height(200.dp)
            .width(60.dp)
            .background(Color.Red)
    )
    Box(
        modifier = itemModifier
            .height(200.dp)
            .fillMaxWidth(0.7f)
            .background(Color.Blue)
    )
    Box(
        modifier = itemModifier
            .height(200.dp)
            .weight(1f)
            .background(Color.Magenta)
    )
}FlowLayoutSnippets.kt

FlowRow: Middle item with 0.7 fraction of whole container width. Row: Middle item taking up 0.7 percent of remaining Row width.

Sources: [live-compose-guide-layouts-flow-fractional-sizing-source](https://developer.android.com/develop/ui/compose/layouts/flow#fractional-sizing)

## Individual item alignment

You may want to position individual items within the row with different alignments. This is different from verticalArrangement and horizontalArrangement as it aligns items within the current line. You can apply this with Modifier.align().

For example, when items in a FlowRow are different heights, the row takes the height of the biggest item and applies Modifier.align(alignmentOption) to the items:

Vertical alignment set on FlowRow Result Alignment.Top (Default) Alignment.Bottom Alignment.CenterVertically

For FlowColumn, similar options are available. The default alignment is Alignment.Start.

Sources: [live-compose-guide-layouts-flow-individual-item-source](https://developer.android.com/develop/ui/compose/layouts/flow#individual-item)

## Item weights

Weight grows an item based on its factor and the available space on the line it was placed in. Importantly, there is a difference between FlowRow and Row with how weights are used to calculate the width of an item. For Rows, weight is based on all items in the Row. With FlowRow, weight is based on the items in the line that an item is placed in, not all the items in the FlowRow container.

For example, if you have 4 items that all fall on a line, each with different weights of 1f, 2f, 1f, and 3f, the total weight is 7f. The remaining space in a row or column will be divided by 7f. Then, each item width will be calculated using: weight * (remainingSpace / totalWeight).

You can use a combination of Modifier.weight and max items with FlowRow or FlowColumn to create a grid-like layout. This approach is useful for creating responsive layouts that adjust to the sizing of your device.

There are a few different examples of what you can achieve using weights. One example is a grid where items are equally sized, as shown below:

Figure 2.

Using

FlowRow

to create a grid

To create a grid of equal item sizes, you can do the following:

val rows = 3
val columns = 3
FlowRow(
    modifier = Modifier.padding(4.dp),
    horizontalArrangement = Arrangement.spacedBy(4.dp),
    maxItemsInEachRow = rows
) {
    val itemModifier = Modifier
        .padding(4.dp)
        .height(80.dp)
        .weight(1f)
        .clip(RoundedCornerShape(8.dp))
        .background(MaterialColors.Blue200)
    repeat(rows * columns) {
        Spacer(modifier = itemModifier)
    }
}FlowLayoutSnippets.kt

Importantly, if you add another item and repeat it 10 times instead of 9, the last item takes up the entire last column, as the total weight for the whole row is 1f:

Figure 3.

Using

FlowRow

to create a grid with the last item taking up full width

You can combine weights with other Modifiers such as Modifier.width(exactDpAmount), Modifier.aspectRatio(aspectRatio), or Modifier.fillMaxWidth(fraction). These modifiers all work in conjunction to allow for responsive sizing of items within a FlowRow (or FlowColumn).

You can also create an alternating grid of different item sizes, where two items

Sources: [live-compose-guide-layouts-flow-item-weights-source](https://developer.android.com/develop/ui/compose/layouts/flow#item-weights)

## Item weights

take up half the width each, and one item takes up the full width of the next column:

Figure 4.

FlowRow

with alternating sizes of rows

You can achieve this with the following code:

FlowRow(
    modifier = Modifier.padding(4.dp),
    horizontalArrangement = Arrangement.spacedBy(4.dp),
    maxItemsInEachRow = 2
) {
    val itemModifier = Modifier
        .padding(4.dp)
        .height(80.dp)
        .clip(RoundedCornerShape(8.dp))
        .background(Color.Blue)
    repeat(6) { item ->
        // if the item is the third item, don't use weight modifier, but rather fillMaxWidth
        if ((item + 1) % 3 == 0) {
            Spacer(modifier = itemModifier.fillMaxWidth())
        } else {
            Spacer(modifier = itemModifier.weight(0.5f))
        }
    }
}FlowLayoutSnippets.kt

Sources: [live-compose-guide-layouts-flow-item-weights-2-source](https://developer.android.com/develop/ui/compose/layouts/flow#item-weights)

## Main axis arrangement: horizontal or vertical arrangement

The main axis is the axis on which items are laid out (for example, in FlowRow, items are arranged horizontally). The horizontalArrangement parameter in FlowRow controls the way free space is distributed between items.

The following table shows examples of setting horizontalArrangement on items for FlowRow:

Horizontal arrangement set on FlowRow Result Arrangement.Start (Default) Arrangement.SpaceBetween Arrangement.Center Arrangement.End Arrangement.SpaceAround Arrangement.spacedBy(8.dp)

For FlowColumn, similar options are available with verticalArrangement, with the default of Arrangement.Top.

Sources: [live-compose-guide-layouts-flow-main-axis-source](https://developer.android.com/develop/ui/compose/layouts/flow#main-axis)

## Introduction

FlowRow and FlowColumn are composables that are similar to Row and Column, but differ in that items flow into the next line when the container runs out of space. This creates multiple rows or columns. The number of items in a line can also be controlled by setting maxItemsInEachRow or maxItemsInEachColumn. You can often use FlowRow and FlowColumn to build responsive layouts— content will not be cut off if items are too large for one dimension, and using a combination of maxItemsInEach* with Modifier.weight(weight) can help build layouts that fill/expand the width of a row or column when needed.

The typical example is for a chip or filtering UI:

Figure 1.

Example of

FlowRow

Sources: [live-compose-guide-layouts-flow-main-content-source](https://developer.android.com/develop/ui/compose/layouts/flow#main-content)

## Max items in row or column

The parameters maxItemsInEachRow or maxItemsInEachColumn define the maximum items in the main axis to allow in one line before wrapping to the next. The default is Int.MAX_INT, which allows as many items as possible, as long as their sizes allow them to fit into the line.

For example, setting a maxItemsInEachRow forces the initial layout to only have 3 items:

No max set maxItemsInEachRow = 3

Sources: [live-compose-guide-layouts-flow-max-items-source](https://developer.android.com/develop/ui/compose/layouts/flow#max-items)

## Recommended for you

Note: link text is displayed when JavaScript is off

Compose layout basics

ConstraintLayout in Compose

Editor actions {:#editor-actions}

Sources: [live-compose-guide-layouts-flow-recommended-for-you-source](https://developer.android.com/develop/ui/compose/layouts/flow#recommended_for_you)
