---
type: reference
title: Intrinsic measurements in Compose layouts
description: "Public source: https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-action-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#intrinsics-in-action
    revision: web:compose-guide-layouts-intrinsic-measurements:content@sha256:68df20074691e6fa39f8d9f6edeee7818402033b6013471cec45cd0fd7c9a979
    sha256: 949ecac1894ff2ffae69eaba6fb8b0b68c650854a6123ea774e555f438a0c632
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      )
          }
      }

      // @Preview
      @Composable
      fun TwoTextsPreview() {
          MaterialTheme {
              Surface {
                  TwoTexts(text1 = "Hi", text2 = "there")
              }
          }
      }IntrinsicSnippets.kt

      With preview:

      The Row's height is determined as follows:

      The Row composable's minIntrinsicHeight is the maximum minIntrinsicHeight of its children.

      The Divider element's minIntrinsicHeight is 0, as it doesn't occupy space if no constraints are given.

      The Text minIntrinsicHeight is that of the text for a specific width.

      Therefore, the Row element's height constraint becomes the maximum minIntrinsicHeight of the Texts.

      The Divider then expands its height to the height constraint given by the Row.
  - id: live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-action-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#intrinsics-in-action
    revision: web:compose-guide-layouts-intrinsic-measurements:content@sha256:68df20074691e6fa39f8d9f6edeee7818402033b6013471cec45cd0fd7c9a979
    sha256: 5c25803ed38db8c065ce5d98799288cf3121f08f7d99f70211c85a0456cbdea3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can create a composable that displays two texts on the screen separated by a divider:

      To do this, use a Row with two Text composables that fill the available space, and a Divider in the middle. The Divider should be as tall as the tallest Text, and it should be thin (width = 1.dp).

      @Composable
      fun TwoTexts(modifier: Modifier = Modifier, text1: String, text2: String) {
          Row(modifier = modifier) {
              Text(
                  modifier = Modifier
                      .weight(1f)
                      .padding(start = 4.dp)
                      .wrapContentWidth(Alignment.Start),
                  text = text1
              )
              VerticalDivider(
                  color = Color.Black,
                  modifier = Modifier.fillMaxHeight().width(1.dp)
              )
              Text(
                  modifier = Modifier
                      .weight(1f)
                      .padding(end = 4.dp)
                      .wrapContentWidth(Alignment.End),

                  text = text2
              )
          }
      }IntrinsicSnippets.kt

      The Divider expands to the whole screen, which isn't the desired behavior:

      This happens because Row measures each child individually, and the height of Text cannot be used to constrain the Divider.

      To have the Divider fill the available space with a given height instead, use the height(IntrinsicSize.Min) modifier.

      height(IntrinsicSize.Min) sizes its children to be as tall as their minimum intrinsic height. Because this modifier is recursive, it queries the minIntrinsicHeight of the Row and its children.

      Applying this modifier to your code makes it work as expected:

      @Composable
      fun TwoTexts(modifier: Modifier = Modifier, text1: String, text2: String) {
          Row(modifier = modifier.height(IntrinsicSize.Min)) {
              Text(
                  modifier = Modifier
                      .weight(1f)
                      .padding(start = 4.dp)
                      .wrapContentWidth(Alignment.Start),
                  text = text1
              )
              VerticalDivider(
                  color = Color.Black,
                  modifier = Modifier.fillMaxHeight().width(1.dp)
              )
              Text(
                  modifier = Modifier
                      .weight(1f)
                      .padding(end = 4.dp)
                      .wrapContentWidth(Alignment.End),

                  text = text2
  - id: live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-layouts-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#intrinsics-in-layouts
    revision: web:compose-guide-layouts-intrinsic-measurements:content@sha256:68df20074691e6fa39f8d9f6edeee7818402033b6013471cec45cd0fd7c9a979
    sha256: c30dbbf85b57979bd32505b3b74fd3a9a400b1c493caeaa93138c4ebe0234fb1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      measurable.minIntrinsicHeight(width)
                      }
                  }

                  // Other intrinsics related methods have a default value,
                  // you can override only the methods that you need.
              }
          )
      }IntrinsicSnippets.kt

      When creating your custom layout modifier, override the related methods in the LayoutModifier interface. The intrinsic calculation needs to match measure. For example, for a given height, a modifier that adds fixed padding on all sides subtracts the vertical padding before querying the child's minIntrinsicWidth, and adds the horizontal padding to the result:

      fun Modifier.myCustomModifier(padding: Dp = 8.dp) =
          this then object : LayoutModifier {
              override fun MeasureScope.measure(
                  measurable: Measurable,
                  constraints: Constraints
              ): MeasureResult {
                  val paddingPx = padding.roundToPx()
                  val horizontal = paddingPx * 2
                  val vertical = paddingPx * 2
                  val placeable = measurable.measure(
                      constraints.offset(-horizontal, -vertical)
                  )
                  val width = constraints.constrainWidth(placeable.width + horizontal)
                  val height = constraints.constrainHeight(placeable.height + vertical)
                  return layout(width, height) {
                      placeable.place(paddingPx, paddingPx)
                  }
              }

              override fun IntrinsicMeasureScope.minIntrinsicWidth(
                  measurable: IntrinsicMeasurable,
                  height: Int
              ): Int {
                  val paddingPx = padding.roundToPx()
                  val horizontal = paddingPx * 2
                  val vertical = paddingPx * 2
                  val childHeight = if (height == Constraints.Infinity) {
                      Constraints.Infinity
                  } else {
                      (height - vertical).coerceAtLeast(0)
                  }
                  return measurable.minIntrinsicWidth(childHeight) + horizontal
              }

              // Other intrinsics related methods have a default value,
              // you can override only the methods that you need.
          }IntrinsicSnippets.kt
  - id: live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-layouts-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#intrinsics-in-layouts
    revision: web:compose-guide-layouts-intrinsic-measurements:content@sha256:68df20074691e6fa39f8d9f6edeee7818402033b6013471cec45cd0fd7c9a979
    sha256: 650c950a97a9a56fb2a22188f58dd311443fafea4dea3658716e599aab4eb440
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When creating a custom Layout or layout modifier, intrinsic measurements are calculated automatically based on approximations. Therefore, the calculations might not be correct for all layouts. These APIs offer options to override these defaults.

      To specify the intrinsics measurements of your custom Layout, override the minIntrinsicWidth, minIntrinsicHeight, maxIntrinsicWidth, and maxIntrinsicHeight of the MeasurePolicy interface when creating it. Your override needs to match what measure does. For example, in a custom column that stacks its children vertically and gives each child the full column width, the minimum intrinsic height for a given width is the sum of its children's minimum intrinsic heights for that width:

      @Composable
      fun MyCustomComposable(
          modifier: Modifier = Modifier,
          content: @Composable () -> Unit
      ) {
          Layout(
              content = content,
              modifier = modifier,
              measurePolicy = object : MeasurePolicy {
                  override fun MeasureScope.measure(
                      measurables: List<Measurable>,
                      constraints: Constraints
                  ): MeasureResult {
                      val childConstraints = constraints.copy(minHeight = 0)
                      val placeables = measurables.map { measurable ->
                          measurable.measure(childConstraints)
                      }
                      val width = constraints.constrainWidth(
                          placeables.maxOfOrNull { it.width } ?: 0
                      )
                      val height = constraints.constrainHeight(
                          placeables.sumOf { it.height }
                      )
                      return layout(width, height) {
                          var yPosition = 0
                          placeables.forEach { placeable ->
                              placeable.placeRelative(x = 0, y = yPosition)
                              yPosition += placeable.height
                          }
                      }
                  }

                  override fun IntrinsicMeasureScope.minIntrinsicHeight(
                      measurables: List<IntrinsicMeasurable>,
                      width: Int
                  ): Int {
                      return measurables.sumOf { measurable ->
  - id: live-compose-guide-layouts-intrinsic-measurements-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#main-content
    revision: web:compose-guide-layouts-intrinsic-measurements:content@sha256:68df20074691e6fa39f8d9f6edeee7818402033b6013471cec45cd0fd7c9a979
    sha256: 22a4e67efc7c07932bfaeebbb6f2e245989c62a740f23fce18d9cbb2152ef0e8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      One of the rules of Compose is that you should only measure your children once; measuring children twice throws a runtime exception. However, there are times when you need some information about your children before measuring them.

      Intrinsics lets you query children before they're actually measured.

      To a composable, you can ask for its IntrinsicSize.Min or IntrinsicSize.Max:

      Modifier.width(IntrinsicSize.Min) - What's the minimum width you need to display your content properly?

      Modifier.width(IntrinsicSize.Max) - What's the maximum width you need to display your content properly?

      Modifier.height(IntrinsicSize.Min) - What's the minimum height you need to display your content properly?

      Modifier.height(IntrinsicSize.Max) - What's the maximum height you need to display your content properly?

      For example, if you ask the minIntrinsicHeight of a Text with infinite width constraints in a custom layout, it returns the height of the Text with the text drawn in a single line.
  - id: live-compose-guide-layouts-intrinsic-measurements-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#recommended_for_you
    revision: web:compose-guide-layouts-intrinsic-measurements:content@sha256:68df20074691e6fa39f8d9f6edeee7818402033b6013471cec45cd0fd7c9a979
    sha256: 852c094e10e7d05701663209c06deaca41e3dc86b6213df2d64f2b9150ecb621
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Custom layouts {:#custom-layouts}

      Alignment lines in Jetpack Compose

      Jetpack Compose Phases
compose:
  id: live-compose-guide-layouts-intrinsic-measurements
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui
  sections:
    - id: live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-action
      title: Intrinsics in action
      aliases:
        - androidx.compose.foundation.layout.IntrinsicSize
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-action-source
      relatedIds: []
    - id: live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-action-2
      title: Intrinsics in action
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-action-2-source
      relatedIds: []
    - id: live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-layouts
      title: Intrinsics in your custom layouts
      aliases:
        - androidx.compose.ui.layout.MeasurePolicy
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-layouts-source
      relatedIds: []
    - id: live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-layouts-2
      title: Intrinsics in your custom layouts
      aliases:
        - androidx.compose.ui.layout.LayoutModifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-layouts-2-source
      relatedIds: []
    - id: live-compose-guide-layouts-intrinsic-measurements-main-content
      title: Introduction
      aliases:
        - androidx.compose.foundation.layout.IntrinsicSize
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-intrinsic-measurements-main-content-source
      relatedIds: []
    - id: live-compose-guide-layouts-intrinsic-measurements-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-layouts-intrinsic-measurements-recommended-for-you-source
      relatedIds: []
---

# Intrinsic measurements in Compose layouts

Public source: https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements

## Intrinsics in action

You can create a composable that displays two texts on the screen separated by a divider:

To do this, use a Row with two Text composables that fill the available space, and a Divider in the middle. The Divider should be as tall as the tallest Text, and it should be thin (width = 1.dp).

@Composable
fun TwoTexts(modifier: Modifier = Modifier, text1: String, text2: String) {
    Row(modifier = modifier) {
        Text(
            modifier = Modifier
                .weight(1f)
                .padding(start = 4.dp)
                .wrapContentWidth(Alignment.Start),
            text = text1
        )
        VerticalDivider(
            color = Color.Black,
            modifier = Modifier.fillMaxHeight().width(1.dp)
        )
        Text(
            modifier = Modifier
                .weight(1f)
                .padding(end = 4.dp)
                .wrapContentWidth(Alignment.End),

            text = text2
        )
    }
}IntrinsicSnippets.kt

The Divider expands to the whole screen, which isn't the desired behavior:

This happens because Row measures each child individually, and the height of Text cannot be used to constrain the Divider.

To have the Divider fill the available space with a given height instead, use the height(IntrinsicSize.Min) modifier.

height(IntrinsicSize.Min) sizes its children to be as tall as their minimum intrinsic height. Because this modifier is recursive, it queries the minIntrinsicHeight of the Row and its children.

Applying this modifier to your code makes it work as expected:

@Composable
fun TwoTexts(modifier: Modifier = Modifier, text1: String, text2: String) {
    Row(modifier = modifier.height(IntrinsicSize.Min)) {
        Text(
            modifier = Modifier
                .weight(1f)
                .padding(start = 4.dp)
                .wrapContentWidth(Alignment.Start),
            text = text1
        )
        VerticalDivider(
            color = Color.Black,
            modifier = Modifier.fillMaxHeight().width(1.dp)
        )
        Text(
            modifier = Modifier
                .weight(1f)
                .padding(end = 4.dp)
                .wrapContentWidth(Alignment.End),

            text = text2

Sources: [live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-action-source](https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#intrinsics-in-action)

## Intrinsics in action

)
    }
}

// @Preview
@Composable
fun TwoTextsPreview() {
    MaterialTheme {
        Surface {
            TwoTexts(text1 = "Hi", text2 = "there")
        }
    }
}IntrinsicSnippets.kt

With preview:

The Row's height is determined as follows:

The Row composable's minIntrinsicHeight is the maximum minIntrinsicHeight of its children.

The Divider element's minIntrinsicHeight is 0, as it doesn't occupy space if no constraints are given.

The Text minIntrinsicHeight is that of the text for a specific width.

Therefore, the Row element's height constraint becomes the maximum minIntrinsicHeight of the Texts.

The Divider then expands its height to the height constraint given by the Row.

Sources: [live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-action-2-source](https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#intrinsics-in-action)

## Intrinsics in your custom layouts

When creating a custom Layout or layout modifier, intrinsic measurements are calculated automatically based on approximations. Therefore, the calculations might not be correct for all layouts. These APIs offer options to override these defaults.

To specify the intrinsics measurements of your custom Layout, override the minIntrinsicWidth, minIntrinsicHeight, maxIntrinsicWidth, and maxIntrinsicHeight of the MeasurePolicy interface when creating it. Your override needs to match what measure does. For example, in a custom column that stacks its children vertically and gives each child the full column width, the minimum intrinsic height for a given width is the sum of its children's minimum intrinsic heights for that width:

@Composable
fun MyCustomComposable(
    modifier: Modifier = Modifier,
    content: @Composable () -> Unit
) {
    Layout(
        content = content,
        modifier = modifier,
        measurePolicy = object : MeasurePolicy {
            override fun MeasureScope.measure(
                measurables: List<Measurable>,
                constraints: Constraints
            ): MeasureResult {
                val childConstraints = constraints.copy(minHeight = 0)
                val placeables = measurables.map { measurable ->
                    measurable.measure(childConstraints)
                }
                val width = constraints.constrainWidth(
                    placeables.maxOfOrNull { it.width } ?: 0
                )
                val height = constraints.constrainHeight(
                    placeables.sumOf { it.height }
                )
                return layout(width, height) {
                    var yPosition = 0
                    placeables.forEach { placeable ->
                        placeable.placeRelative(x = 0, y = yPosition)
                        yPosition += placeable.height
                    }
                }
            }

            override fun IntrinsicMeasureScope.minIntrinsicHeight(
                measurables: List<IntrinsicMeasurable>,
                width: Int
            ): Int {
                return measurables.sumOf { measurable ->

Sources: [live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-layouts-source](https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#intrinsics-in-layouts)

## Intrinsics in your custom layouts

measurable.minIntrinsicHeight(width)
                }
            }

            // Other intrinsics related methods have a default value,
            // you can override only the methods that you need.
        }
    )
}IntrinsicSnippets.kt

When creating your custom layout modifier, override the related methods in the LayoutModifier interface. The intrinsic calculation needs to match measure. For example, for a given height, a modifier that adds fixed padding on all sides subtracts the vertical padding before querying the child's minIntrinsicWidth, and adds the horizontal padding to the result:

fun Modifier.myCustomModifier(padding: Dp = 8.dp) =
    this then object : LayoutModifier {
        override fun MeasureScope.measure(
            measurable: Measurable,
            constraints: Constraints
        ): MeasureResult {
            val paddingPx = padding.roundToPx()
            val horizontal = paddingPx * 2
            val vertical = paddingPx * 2
            val placeable = measurable.measure(
                constraints.offset(-horizontal, -vertical)
            )
            val width = constraints.constrainWidth(placeable.width + horizontal)
            val height = constraints.constrainHeight(placeable.height + vertical)
            return layout(width, height) {
                placeable.place(paddingPx, paddingPx)
            }
        }

        override fun IntrinsicMeasureScope.minIntrinsicWidth(
            measurable: IntrinsicMeasurable,
            height: Int
        ): Int {
            val paddingPx = padding.roundToPx()
            val horizontal = paddingPx * 2
            val vertical = paddingPx * 2
            val childHeight = if (height == Constraints.Infinity) {
                Constraints.Infinity
            } else {
                (height - vertical).coerceAtLeast(0)
            }
            return measurable.minIntrinsicWidth(childHeight) + horizontal
        }

        // Other intrinsics related methods have a default value,
        // you can override only the methods that you need.
    }IntrinsicSnippets.kt

Sources: [live-compose-guide-layouts-intrinsic-measurements-intrinsics-in-layouts-2-source](https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#intrinsics-in-layouts)

## Introduction

One of the rules of Compose is that you should only measure your children once; measuring children twice throws a runtime exception. However, there are times when you need some information about your children before measuring them.

Intrinsics lets you query children before they're actually measured.

To a composable, you can ask for its IntrinsicSize.Min or IntrinsicSize.Max:

Modifier.width(IntrinsicSize.Min) - What's the minimum width you need to display your content properly?

Modifier.width(IntrinsicSize.Max) - What's the maximum width you need to display your content properly?

Modifier.height(IntrinsicSize.Min) - What's the minimum height you need to display your content properly?

Modifier.height(IntrinsicSize.Max) - What's the maximum height you need to display your content properly?

For example, if you ask the minIntrinsicHeight of a Text with infinite width constraints in a custom layout, it returns the height of the Text with the text drawn in a single line.

Sources: [live-compose-guide-layouts-intrinsic-measurements-main-content-source](https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Custom layouts {:#custom-layouts}

Alignment lines in Jetpack Compose

Jetpack Compose Phases

Sources: [live-compose-guide-layouts-intrinsic-measurements-recommended-for-you-source](https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements#recommended_for_you)
