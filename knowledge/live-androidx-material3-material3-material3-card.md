---
type: reference
title: androidx.compose.material3 Card.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-card-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 1
    endLine: 35
    sha256: 32d4685ff7e5a2ffcef3a426fa56ba7818128f0bbeaf25388ce05850c8d859ff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2022 The Android Open Source Project
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

      package androidx.compose.material3

      import androidx.compose.animation.core.Animatable
      import androidx.compose.animation.core.VectorConverter
      import androidx.compose.foundation.BorderStroke
      import androidx.compose.foundation.interaction.DragInteraction
      import androidx.compose.foundation.interaction.FocusInteraction
      import androidx.compose.foundation.interaction.HoverInteraction
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.InteractionSource
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.interaction.PressInteraction
      import androidx.compose.foundation.layout.Column
      import androidx.compose.foundation.layout.ColumnScope
      import androidx.compose.material3.internal.animateElevation
      import androidx.compose.material3.tokens.ElevatedCardTokens
      import androidx.compose.material3.tokens.FilledCardTokens
      import androidx.compose.material3.tokens.OutlinedCardTokens
      import androidx.compose.runtime.Composable
  - id: live-androidx-material3-material3-material3-card-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 106
    endLine: 140
    sha256: 8f327e4f550b86bb137091b9741ce7283b19694b98dacd4ab78a12fb193a9a58
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * This Card handles click events, calling its [onClick] lambda.
       *
       * ![Filled card
       * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-card.png)
       *
       * Clickable card sample:
       *
       * @sample androidx.compose.material3.samples.ClickableCardSample
       * @param onClick called when this card is clicked
       * @param modifier the [Modifier] to be applied to this card
       * @param enabled controls the enabled state of this card. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param shape defines the shape of this card's container, border (when [border] is not null), and
       *   shadow (when using [elevation])
       * @param colors [CardColors] that will be used to resolve the color(s) used for this card in
       *   different states. See [CardDefaults.cardColors].
       * @param elevation [CardElevation] used to resolve the elevation for this card in different states.
       *   This controls the size of the shadow below the card. Additionally, when the container color is
       *   [ColorScheme.surface], this controls the amount of primary color applied as an overlay. See
       *   also: [Surface].
       * @param border the border to draw around the container of this card
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this card. You can use this to change the card's appearance or
       *   preview the card in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       * @param content The content displayed on the card
       */
      @Composable
      public fun Card(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          shape: Shape = CardDefaults.shape,
  - id: live-androidx-material3-material3-material3-card-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 141
    endLine: 175
    sha256: b1e2b35a48f20b1fac836ce6749e738be63b5d1a577619b327c9620983acaabc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          colors: CardColors = CardDefaults.cardColors(),
          elevation: CardElevation = CardDefaults.cardElevation(),
          border: BorderStroke? = null,
          interactionSource: MutableInteractionSource? = null,
          content: @Composable ColumnScope.() -> Unit,
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          Surface(
              onClick = onClick,
              modifier = modifier,
              enabled = enabled,
              shape = shape,
              color = colors.containerColor(enabled),
              contentColor = colors.contentColor(enabled),
              shadowElevation = elevation.shadowElevation(enabled, interactionSource).value,
              border = border,
              interactionSource = interactionSource,
          ) {
              Column(content = content)
          }
      }

      /**
       * [Material Design elevated card](https://m3.material.io/components/cards/overview)
       *
       * Elevated cards contain content and actions that relate information about a subject. They have a
       * drop shadow, providing more separation from the background than filled cards, but less than
       * outlined cards.
       *
       * This ElevatedCard does not handle input events - see the other ElevatedCard overloads if you want
       * a clickable or selectable ElevatedCard.
       *
       * ![Elevated card
       * image](https://developer.android.com/images/reference/androidx/compose/material3/elevated-card.png)
  - id: live-androidx-material3-material3-material3-card-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 176
    endLine: 210
    sha256: 6b14beb1077dbdda35501e31335803d5c4d31701db14e54f7dd77621d7acd635
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * Elevated card sample:
       *
       * @sample androidx.compose.material3.samples.ElevatedCardSample
       * @param modifier the [Modifier] to be applied to this card
       * @param shape defines the shape of this card's container and shadow (when using [elevation])
       * @param colors [CardColors] that will be used to resolve the color(s) used for this card in
       *   different states. See [CardDefaults.elevatedCardElevation].
       * @param elevation [CardElevation] used to resolve the elevation for this card in different states.
       *   This controls the size of the shadow below the card. Additionally, when the container color is
       *   [ColorScheme.surface], this controls the amount of primary color applied as an overlay. See
       *   also: [Surface].
       * @param content The content displayed on the card
       */
      @Composable
      public fun ElevatedCard(
          modifier: Modifier = Modifier,
          shape: Shape = CardDefaults.elevatedShape,
          colors: CardColors = CardDefaults.elevatedCardColors(),
          elevation: CardElevation = CardDefaults.elevatedCardElevation(),
          content: @Composable ColumnScope.() -> Unit,
      ): Unit =
          Card(
              modifier = modifier,
              shape = shape,
              border = null,
              elevation = elevation,
              colors = colors,
              content = content,
          )

      /**
       * [Material Design elevated card](https://m3.material.io/components/cards/overview)
       *
       * Elevated cards contain content and actions that relate information about a subject. They have a
  - id: live-androidx-material3-material3-material3-card-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 211
    endLine: 245
    sha256: 2967ca8bd24432302752eba08f50b0b0639b1a752a0bb6589df5f3163452e24f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * drop shadow, providing more separation from the background than filled cards, but less than
       * outlined cards.
       *
       * This ElevatedCard handles click events, calling its [onClick] lambda.
       *
       * ![Elevated card
       * image](https://developer.android.com/images/reference/androidx/compose/material3/elevated-card.png)
       *
       * Clickable elevated card sample:
       *
       * @sample androidx.compose.material3.samples.ClickableElevatedCardSample
       * @param onClick called when this card is clicked
       * @param modifier the [Modifier] to be applied to this card
       * @param enabled controls the enabled state of this card. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param shape defines the shape of this card's container and shadow (when using [elevation])
       * @param colors [CardColors] that will be used to resolve the color(s) used for this card in
       *   different states. See [CardDefaults.elevatedCardElevation].
       * @param elevation [CardElevation] used to resolve the elevation for this card in different states.
       *   This controls the size of the shadow below the card. Additionally, when the container color is
       *   [ColorScheme.surface], this controls the amount of primary color applied as an overlay. See
       *   also: [Surface].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this card. You can use this to change the card's appearance or
       *   preview the card in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       * @param content The content displayed on the card
       */
      @Composable
      public fun ElevatedCard(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          shape: Shape = CardDefaults.elevatedShape,
  - id: live-androidx-material3-material3-material3-card-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 246
    endLine: 280
    sha256: 588a07204ff080b7af3e1aee7978a27b39478534f2befc5ad6ba60f6ca5855ef
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          colors: CardColors = CardDefaults.elevatedCardColors(),
          elevation: CardElevation = CardDefaults.elevatedCardElevation(),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable ColumnScope.() -> Unit,
      ): Unit =
          Card(
              onClick = onClick,
              modifier = modifier,
              enabled = enabled,
              shape = shape,
              colors = colors,
              elevation = elevation,
              border = null,
              interactionSource = interactionSource,
              content = content,
          )

      /**
       * [Material Design outlined card](https://m3.material.io/components/cards/overview)
       *
       * Outlined cards contain content and actions that relate information about a subject. They have a
       * visual boundary around the container. This can provide greater emphasis than the other types.
       *
       * This OutlinedCard does not handle input events - see the other OutlinedCard overloads if you want
       * a clickable or selectable OutlinedCard.
       *
       * ![Outlined card
       * image](https://developer.android.com/images/reference/androidx/compose/material3/outlined-card.png)
       *
       * Outlined card sample:
       *
       * @sample androidx.compose.material3.samples.OutlinedCardSample
       * @param modifier the [Modifier] to be applied to this card
       * @param shape defines the shape of this card's container, border (when [border] is not null), and
       *   shadow (when using [elevation])
  - id: live-androidx-material3-material3-material3-card-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 281
    endLine: 315
    sha256: c126d9e7da4bd92c88d5c1c2480f02cbdfdd32e13d0c6d332cf4f6dcf7bb04e3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param colors [CardColors] that will be used to resolve the color(s) used for this card in
       *   different states. See [CardDefaults.outlinedCardColors].
       * @param elevation [CardElevation] used to resolve the elevation for this card in different states.
       *   This controls the size of the shadow below the card. Additionally, when the container color is
       *   [ColorScheme.surface], this controls the amount of primary color applied as an overlay. See
       *   also: [Surface].
       * @param border the border to draw around the container of this card
       * @param content The content displayed on the card
       */
      @Composable
      public fun OutlinedCard(
          modifier: Modifier = Modifier,
          shape: Shape = CardDefaults.outlinedShape,
          colors: CardColors = CardDefaults.outlinedCardColors(),
          elevation: CardElevation = CardDefaults.outlinedCardElevation(),
          border: BorderStroke = CardDefaults.outlinedCardBorder(),
          content: @Composable ColumnScope.() -> Unit,
      ): Unit =
          Card(
              modifier = modifier,
              shape = shape,
              colors = colors,
              elevation = elevation,
              border = border,
              content = content,
          )

      /**
       * [Material Design outlined card](https://m3.material.io/components/cards/overview)
       *
       * Outlined cards contain content and actions that relate information about a subject. They have a
       * visual boundary around the container. This can provide greater emphasis than the other types.
       *
       * This OutlinedCard handles click events, calling its [onClick] lambda.
       *
  - id: live-androidx-material3-material3-material3-card-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 316
    endLine: 350
    sha256: ad2a2c20146c56fa946e1da4fa37a6bbd046f73057966f6e76b6f516f21a94a1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * ![Outlined card
       * image](https://developer.android.com/images/reference/androidx/compose/material3/outlined-card.png)
       *
       * Clickable outlined card sample:
       *
       * @sample androidx.compose.material3.samples.ClickableOutlinedCardSample
       * @param onClick called when this card is clicked
       * @param modifier the [Modifier] to be applied to this card
       * @param enabled controls the enabled state of this card. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param shape defines the shape of this card's container, border (when [border] is not null), and
       *   shadow (when using [elevation])
       * @param colors [CardColors] that will be used to resolve the color(s) used for this card in
       *   different states. See [CardDefaults.outlinedCardColors].
       * @param elevation [CardElevation] used to resolve the elevation for this card in different states.
       *   This controls the size of the shadow below the card. Additionally, when the container color is
       *   [ColorScheme.surface], this controls the amount of primary color applied as an overlay. See
       *   also: [Surface].
       * @param border the border to draw around the container of this card
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this card. You can use this to change the card's appearance or
       *   preview the card in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       * @param content The content displayed on the card
       */
      @Composable
      public fun OutlinedCard(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          shape: Shape = CardDefaults.outlinedShape,
          colors: CardColors = CardDefaults.outlinedCardColors(),
          elevation: CardElevation = CardDefaults.outlinedCardElevation(),
          border: BorderStroke = CardDefaults.outlinedCardBorder(enabled),
  - id: live-androidx-material3-material3-material3-card-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 351
    endLine: 385
    sha256: ef494f3375b484afa28f407df4c0485e9029b7a27a2469639cbe29b74a9fd23a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          interactionSource: MutableInteractionSource? = null,
          content: @Composable ColumnScope.() -> Unit,
      ): Unit =
          Card(
              onClick = onClick,
              modifier = modifier,
              enabled = enabled,
              shape = shape,
              colors = colors,
              elevation = elevation,
              border = border,
              interactionSource = interactionSource,
              content = content,
          )

      /** Contains the default values used by all card types. */
      public object CardDefaults {
          // shape Defaults
          /** Default shape for a card. */
          public val shape: Shape
              @Composable get() = FilledCardTokens.ContainerShape.value

          /** Default shape for an elevated card. */
          public val elevatedShape: Shape
              @Composable get() = ElevatedCardTokens.ContainerShape.value

          /** Default shape for an outlined card. */
          public val outlinedShape: Shape
              @Composable get() = OutlinedCardTokens.ContainerShape.value

          /**
           * Creates a [CardElevation] that will animate between the provided values according to the
           * Material specification for a [Card].
           *
           * @param defaultElevation the elevation used when the [Card] is has no other [Interaction]s.
  - id: live-androidx-material3-material3-material3-card-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 36
    endLine: 70
    sha256: 87cdfbfe3d8cb4ad5c64cd34fe15f36df06b003850a4553e4f9ca3b5ed563f14
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.LaunchedEffect
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.State
      import androidx.compose.runtime.mutableStateListOf
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.graphics.compositeOver
      import androidx.compose.ui.graphics.takeOrElse
      import androidx.compose.ui.unit.Dp

      /**
       * [Material Design filled card](https://m3.material.io/components/cards/overview)
       *
       * Cards contain contain content and actions that relate information about a subject. Filled cards
       * provide subtle separation from the background. This has less emphasis than elevated or outlined
       * cards.
       *
       * This Card does not handle input events - see the other Card overloads if you want a clickable or
       * selectable Card.
       *
       * ![Filled card
       * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-card.png)
       *
       * Card sample:
       *
       * @sample androidx.compose.material3.samples.CardSample
       * @param modifier the [Modifier] to be applied to this card
       * @param shape defines the shape of this card's container, border (when [border] is not null), and
       *   shadow (when using [elevation])
       * @param colors [CardColors] that will be used to resolve the colors used for this card in
  - id: live-androidx-material3-material3-material3-card-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 386
    endLine: 420
    sha256: 47fb9cb58568cc67e12361d0aa7360d97dcfa42cb9737fbe06bd78cc73e444dd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param pressedElevation the elevation used when the [Card] is pressed.
           * @param focusedElevation the elevation used when the [Card] is focused.
           * @param hoveredElevation the elevation used when the [Card] is hovered.
           * @param draggedElevation the elevation used when the [Card] is dragged.
           * @param disabledElevation the elevation used when the [Card] is disabled.
           */
          @Composable
          public fun cardElevation(
              defaultElevation: Dp = FilledCardTokens.ContainerElevation,
              pressedElevation: Dp = FilledCardTokens.PressedContainerElevation,
              focusedElevation: Dp = FilledCardTokens.FocusContainerElevation,
              hoveredElevation: Dp = FilledCardTokens.HoverContainerElevation,
              draggedElevation: Dp = FilledCardTokens.DraggedContainerElevation,
              disabledElevation: Dp = FilledCardTokens.DisabledContainerElevation,
          ): CardElevation =
              CardElevation(
                  defaultElevation = defaultElevation,
                  pressedElevation = pressedElevation,
                  focusedElevation = focusedElevation,
                  hoveredElevation = hoveredElevation,
                  draggedElevation = draggedElevation,
                  disabledElevation = disabledElevation,
              )

          /**
           * Creates a [CardElevation] that will animate between the provided values according to the
           * Material specification for an [ElevatedCard].
           *
           * @param defaultElevation the elevation used when the [ElevatedCard] is has no other
           *   [Interaction]s.
           * @param pressedElevation the elevation used when the [ElevatedCard] is pressed.
           * @param focusedElevation the elevation used when the [ElevatedCard] is focused.
           * @param hoveredElevation the elevation used when the [ElevatedCard] is hovered.
           * @param draggedElevation the elevation used when the [ElevatedCard] is dragged.
           * @param disabledElevation the elevation used when the [Card] is disabled.
  - id: live-androidx-material3-material3-material3-card-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 421
    endLine: 455
    sha256: 74b22b9784d126238e44e06041c32ff5d4b50cb985126af11cecc83c0e515c0f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          @Composable
          public fun elevatedCardElevation(
              defaultElevation: Dp = ElevatedCardTokens.ContainerElevation,
              pressedElevation: Dp = ElevatedCardTokens.PressedContainerElevation,
              focusedElevation: Dp = ElevatedCardTokens.FocusContainerElevation,
              hoveredElevation: Dp = ElevatedCardTokens.HoverContainerElevation,
              draggedElevation: Dp = ElevatedCardTokens.DraggedContainerElevation,
              disabledElevation: Dp = ElevatedCardTokens.DisabledContainerElevation,
          ): CardElevation =
              CardElevation(
                  defaultElevation = defaultElevation,
                  pressedElevation = pressedElevation,
                  focusedElevation = focusedElevation,
                  hoveredElevation = hoveredElevation,
                  draggedElevation = draggedElevation,
                  disabledElevation = disabledElevation,
              )

          /**
           * Creates a [CardElevation] that will animate between the provided values according to the
           * Material specification for an [OutlinedCard].
           *
           * @param defaultElevation the elevation used when the [OutlinedCard] is has no other
           *   [Interaction]s.
           * @param pressedElevation the elevation used when the [OutlinedCard] is pressed.
           * @param focusedElevation the elevation used when the [OutlinedCard] is focused.
           * @param hoveredElevation the elevation used when the [OutlinedCard] is hovered.
           * @param draggedElevation the elevation used when the [OutlinedCard] is dragged.
           * @param disabledElevation the elevation used when the [OutlinedCard] is disabled.
           */
          @Composable
          public fun outlinedCardElevation(
              defaultElevation: Dp = OutlinedCardTokens.ContainerElevation,
              pressedElevation: Dp = defaultElevation,
  - id: live-androidx-material3-material3-material3-card-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 456
    endLine: 490
    sha256: d8cbb1fed7ea7b1d9c77ca02fef382b1afec3c13dda622169eb509c36643ba0a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              focusedElevation: Dp = defaultElevation,
              hoveredElevation: Dp = defaultElevation,
              draggedElevation: Dp = OutlinedCardTokens.DraggedContainerElevation,
              disabledElevation: Dp = OutlinedCardTokens.DisabledContainerElevation,
          ): CardElevation =
              CardElevation(
                  defaultElevation = defaultElevation,
                  pressedElevation = pressedElevation,
                  focusedElevation = focusedElevation,
                  hoveredElevation = hoveredElevation,
                  draggedElevation = draggedElevation,
                  disabledElevation = disabledElevation,
              )

          /**
           * Creates a [CardColors] that represents the default container and content colors used in a
           * [Card].
           */
          @Composable public fun cardColors(): CardColors = MaterialTheme.colorScheme.defaultCardColors

          /**
           * Creates a [CardColors] that represents the default container and content colors used in a
           * [Card].
           *
           * @param containerColor the container color of this [Card] when enabled.
           * @param contentColor the content color of this [Card] when enabled.
           * @param disabledContainerColor the container color of this [Card] when not enabled.
           * @param disabledContentColor the content color of this [Card] when not enabled.
           */
          @Composable
          public fun cardColors(
              containerColor: Color = Color.Unspecified,
              contentColor: Color = contentColorFor(containerColor),
              disabledContainerColor: Color = Color.Unspecified,
              disabledContentColor: Color = contentColor.copy(DisabledAlpha),
  - id: live-androidx-material3-material3-material3-card-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 491
    endLine: 525
    sha256: 0e5bd7a04f3860517fc43372d2ac37e341160cc721053cd74a24a2155dff6daf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ): CardColors =
              MaterialTheme.colorScheme.defaultCardColors.copy(
                  containerColor = containerColor,
                  contentColor = contentColor,
                  disabledContainerColor = disabledContainerColor,
                  disabledContentColor = disabledContentColor,
              )

          internal val ColorScheme.defaultCardColors: CardColors
              get() {
                  return defaultCardColorsCached
                      ?: CardColors(
                              containerColor = fromToken(FilledCardTokens.ContainerColor),
                              contentColor = contentColorFor(fromToken(FilledCardTokens.ContainerColor)),
                              disabledContainerColor =
                                  fromToken(FilledCardTokens.DisabledContainerColor)
                                      .copy(alpha = FilledCardTokens.DisabledContainerOpacity)
                                      .compositeOver(fromToken(FilledCardTokens.ContainerColor)),
                              disabledContentColor =
                                  contentColorFor(fromToken(FilledCardTokens.ContainerColor))
                                      .copy(DisabledAlpha),
                          )
                          .also { defaultCardColorsCached = it }
              }

          /**
           * Creates a [CardColors] that represents the default container and content colors used in an
           * [ElevatedCard].
           */
          @Composable
          public fun elevatedCardColors(): CardColors =
              MaterialTheme.colorScheme.defaultElevatedCardColors

          /**
           * Creates a [CardColors] that represents the default container and content colors used in an
  - id: live-androidx-material3-material3-material3-card-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 526
    endLine: 560
    sha256: e0fb98f8603c304913a7b5beaee872434ea358f12e26a7c9e56053da7bac1877
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * [ElevatedCard].
           *
           * @param containerColor the container color of this [ElevatedCard] when enabled.
           * @param contentColor the content color of this [ElevatedCard] when enabled.
           * @param disabledContainerColor the container color of this [ElevatedCard] when not enabled.
           * @param disabledContentColor the content color of this [ElevatedCard] when not enabled.
           */
          @Composable
          public fun elevatedCardColors(
              containerColor: Color = Color.Unspecified,
              contentColor: Color = contentColorFor(containerColor),
              disabledContainerColor: Color = Color.Unspecified,
              disabledContentColor: Color = contentColor.copy(DisabledAlpha),
          ): CardColors =
              MaterialTheme.colorScheme.defaultElevatedCardColors.copy(
                  containerColor = containerColor,
                  contentColor = contentColor,
                  disabledContainerColor = disabledContainerColor,
                  disabledContentColor = disabledContentColor,
              )

          internal val ColorScheme.defaultElevatedCardColors: CardColors
              get() {
                  return defaultElevatedCardColorsCached
                      ?: CardColors(
                              containerColor = fromToken(ElevatedCardTokens.ContainerColor),
                              contentColor =
                                  contentColorFor(fromToken(ElevatedCardTokens.ContainerColor)),
                              disabledContainerColor =
                                  fromToken(ElevatedCardTokens.DisabledContainerColor)
                                      .copy(alpha = ElevatedCardTokens.DisabledContainerOpacity)
                                      .compositeOver(
                                          fromToken(ElevatedCardTokens.DisabledContainerColor)
                                      ),
                              disabledContentColor =
  - id: live-androidx-material3-material3-material3-card-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 561
    endLine: 595
    sha256: 535b21171bf04fa925cd94e329290811ff57730ce2a9761cf87d8fd6ecd4aea1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  contentColorFor(fromToken(ElevatedCardTokens.ContainerColor))
                                      .copy(DisabledAlpha),
                          )
                          .also { defaultElevatedCardColorsCached = it }
              }

          /**
           * Creates a [CardColors] that represents the default container and content colors used in an
           * [OutlinedCard].
           */
          @Composable
          public fun outlinedCardColors(): CardColors =
              MaterialTheme.colorScheme.defaultOutlinedCardColors

          /**
           * Creates a [CardColors] that represents the default container and content colors used in an
           * [OutlinedCard].
           *
           * @param containerColor the container color of this [OutlinedCard] when enabled.
           * @param contentColor the content color of this [OutlinedCard] when enabled.
           * @param disabledContainerColor the container color of this [OutlinedCard] when not enabled.
           * @param disabledContentColor the content color of this [OutlinedCard] when not enabled.
           */
          @Composable
          public fun outlinedCardColors(
              containerColor: Color = Color.Unspecified,
              contentColor: Color = contentColorFor(containerColor),
              disabledContainerColor: Color = Color.Unspecified,
              disabledContentColor: Color = contentColorFor(containerColor).copy(DisabledAlpha),
          ): CardColors =
              MaterialTheme.colorScheme.defaultOutlinedCardColors.copy(
                  containerColor = containerColor,
                  contentColor = contentColor,
                  disabledContainerColor = disabledContainerColor,
                  disabledContentColor = disabledContentColor,
  - id: live-androidx-material3-material3-material3-card-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 596
    endLine: 630
    sha256: 7224ff8ff8d0cf1dd4bb8bb3cb4752f14d1e4806a896b2c26bfcc5177764a2f7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              )

          internal val ColorScheme.defaultOutlinedCardColors: CardColors
              get() {
                  return defaultOutlinedCardColorsCached
                      ?: CardColors(
                              containerColor = fromToken(OutlinedCardTokens.ContainerColor),
                              contentColor =
                                  contentColorFor(fromToken(OutlinedCardTokens.ContainerColor)),
                              disabledContainerColor = fromToken(OutlinedCardTokens.ContainerColor),
                              disabledContentColor =
                                  contentColorFor(fromToken(OutlinedCardTokens.ContainerColor))
                                      .copy(DisabledAlpha),
                          )
                          .also { defaultOutlinedCardColorsCached = it }
              }

          /**
           * Creates a [BorderStroke] that represents the default border used in [OutlinedCard].
           *
           * @param enabled whether the card is enabled
           */
          @Composable
          public fun outlinedCardBorder(enabled: Boolean = true): BorderStroke {
              val color =
                  if (enabled) {
                      OutlinedCardTokens.OutlineColor.value
                  } else {
                      OutlinedCardTokens.DisabledOutlineColor.value
                          .copy(alpha = OutlinedCardTokens.DisabledOutlineOpacity)
                          .compositeOver(ElevatedCardTokens.ContainerColor.value)
                  }
              return remember(color) { BorderStroke(OutlinedCardTokens.OutlineWidth, color) }
          }
      }
  - id: live-androidx-material3-material3-material3-card-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 631
    endLine: 665
    sha256: dffcdc8a62740d0c8b3e36a1e2e8ffdadfcbe5ae0d87427ec764bae093e6bc8a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Represents the elevation for a card in different states.
       * - See [CardDefaults.cardElevation] for the default elevation used in a [Card].
       * - See [CardDefaults.elevatedCardElevation] for the default elevation used in an [ElevatedCard].
       * - See [CardDefaults.outlinedCardElevation] for the default elevation used in an [OutlinedCard].
       */
      @Immutable
      public class CardElevation
      internal constructor(
          private val defaultElevation: Dp,
          private val pressedElevation: Dp,
          private val focusedElevation: Dp,
          private val hoveredElevation: Dp,
          private val draggedElevation: Dp,
          private val disabledElevation: Dp,
      ) {
          /**
           * Represents the shadow elevation used in a card, depending on its [enabled] state and
           * [interactionSource].
           *
           * Shadow elevation is used to apply a shadow around the card to give it higher emphasis.
           *
           * @param enabled whether the card is enabled
           * @param interactionSource the [InteractionSource] for this card
           */
          @Composable
          internal fun shadowElevation(
              enabled: Boolean,
              interactionSource: InteractionSource?,
          ): State<Dp> {
              if (interactionSource == null) {
                  return remember { mutableStateOf(defaultElevation) }
              }
              return animateElevation(enabled = enabled, interactionSource = interactionSource)
  - id: live-androidx-material3-material3-material3-card-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 666
    endLine: 700
    sha256: fb8f273c06ad6be82d69137c52fc187c6dbc98e8b4dcaaa29b6d9ea25d0a1cb4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          @Composable
          private fun animateElevation(
              enabled: Boolean,
              interactionSource: InteractionSource,
          ): State<Dp> {
              val interactions = remember { mutableStateListOf<Interaction>() }
              LaunchedEffect(interactionSource) {
                  interactionSource.interactions.collect { interaction ->
                      when (interaction) {
                          is HoverInteraction.Enter -> {
                              interactions.add(interaction)
                          }
                          is HoverInteraction.Exit -> {
                              interactions.remove(interaction.enter)
                          }
                          is FocusInteraction.Focus -> {
                              interactions.add(interaction)
                          }
                          is FocusInteraction.Unfocus -> {
                              interactions.remove(interaction.focus)
                          }
                          is PressInteraction.Press -> {
                              interactions.add(interaction)
                          }
                          is PressInteraction.Release -> {
                              interactions.remove(interaction.press)
                          }
                          is PressInteraction.Cancel -> {
                              interactions.remove(interaction.press)
                          }
                          is DragInteraction.Start -> {
                              interactions.add(interaction)
                          }
  - id: live-androidx-material3-material3-material3-card-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 701
    endLine: 735
    sha256: d31f3791a16f001795463f06920f343a844a5c97a4c64426842450da2610d0ab
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          is DragInteraction.Stop -> {
                              interactions.remove(interaction.start)
                          }
                          is DragInteraction.Cancel -> {
                              interactions.remove(interaction.start)
                          }
                      }
                  }
              }

              val interaction = interactions.lastOrNull()

              val target =
                  if (!enabled) {
                      disabledElevation
                  } else {
                      when (interaction) {
                          is PressInteraction.Press -> pressedElevation
                          is HoverInteraction.Enter -> hoveredElevation
                          is FocusInteraction.Focus -> focusedElevation
                          is DragInteraction.Start -> draggedElevation
                          else -> defaultElevation
                      }
                  }

              val animatable = remember { Animatable(target, Dp.VectorConverter) }

              LaunchedEffect(target) {
                  if (animatable.targetValue != target) {
                      if (!enabled) {
                          // No transition when moving to a disabled state.
                          animatable.snapTo(target)
                      } else {
                          val lastInteraction =
                              when (animatable.targetValue) {
  - id: live-androidx-material3-material3-material3-card-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 71
    endLine: 105
    sha256: 48f91dd640e1fe6986f7ccc947925140d8cc6a4e120b46f0bdbb6fd3274a5eb7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   different states. See [CardDefaults.cardColors].
       * @param elevation [CardElevation] used to resolve the elevation for this card in different states.
       *   This controls the size of the shadow below the card. Additionally, when the container color is
       *   [ColorScheme.surface], this controls the amount of primary color applied as an overlay. See
       *   also: [Surface].
       * @param border the border to draw around the container of this card
       * @param content The content displayed on the card
       */
      @Composable
      public fun Card(
          modifier: Modifier = Modifier,
          shape: Shape = CardDefaults.shape,
          colors: CardColors = CardDefaults.cardColors(),
          elevation: CardElevation = CardDefaults.cardElevation(),
          border: BorderStroke? = null,
          content: @Composable ColumnScope.() -> Unit,
      ) {
          Surface(
              modifier = modifier,
              shape = shape,
              color = colors.containerColor(enabled = true),
              contentColor = colors.contentColor(enabled = true),
              shadowElevation = elevation.shadowElevation(enabled = true, interactionSource = null).value,
              border = border,
          ) {
              Column(content = content)
          }
      }

      /**
       * [Material Design filled card](https://m3.material.io/components/cards/overview)
       *
       * Cards contain contain content and actions that relate information about a subject. Filled cards
       * provide subtle separation from the background. This has less emphasis than elevated or outlined
       * cards.
  - id: live-androidx-material3-material3-material3-card-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 736
    endLine: 770
    sha256: 05532a8a0d62ce46b635402230f30a136bfe6cb0c31bc89fe37e1514ebb4fb3a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  pressedElevation -> PressInteraction.Press(Offset.Zero)
                                  hoveredElevation -> HoverInteraction.Enter()
                                  focusedElevation -> FocusInteraction.Focus()
                                  draggedElevation -> DragInteraction.Start()
                                  else -> null
                              }
                          animatable.animateElevation(
                              from = lastInteraction,
                              to = interaction,
                              target = target,
                          )
                      }
                  }
              }

              return animatable.asState()
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is CardElevation) return false

              if (defaultElevation != other.defaultElevation) return false
              if (pressedElevation != other.pressedElevation) return false
              if (focusedElevation != other.focusedElevation) return false
              if (hoveredElevation != other.hoveredElevation) return false
              if (disabledElevation != other.disabledElevation) return false

              return true
          }

          override fun hashCode(): Int {
              var result = defaultElevation.hashCode()
              result = 31 * result + pressedElevation.hashCode()
              result = 31 * result + focusedElevation.hashCode()
  - id: live-androidx-material3-material3-material3-card-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 771
    endLine: 805
    sha256: 4a04582a4c23d789e7d7ca7b28ffd7a6c7e36b6eeee14d933d19358613182b00
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              result = 31 * result + hoveredElevation.hashCode()
              result = 31 * result + disabledElevation.hashCode()
              return result
          }
      }

      /**
       * Represents the container and content colors used in a card in different states.
       *
       * @param containerColor the container color of this [Card] when enabled.
       * @param contentColor the content color of this [Card] when enabled.
       * @param disabledContainerColor the container color of this [Card] when not enabled.
       * @param disabledContentColor the content color of this [Card] when not enabled.
       * @constructor create an instance with arbitrary colors.
       * - See [CardDefaults.cardColors] for the default colors used in a [Card].
       * - See [CardDefaults.elevatedCardColors] for the default colors used in a [ElevatedCard].
       * - See [CardDefaults.outlinedCardColors] for the default colors used in a [OutlinedCard].
       */
      @Immutable
      public class CardColors
      public constructor(
          public val containerColor: Color,
          public val contentColor: Color,
          public val disabledContainerColor: Color,
          public val disabledContentColor: Color,
      ) {
          /**
           * Returns a copy of this CardColors, optionally overriding some of the values. This uses the
           * Color.Unspecified to mean “use the value from the source”
           */
          public fun copy(
              containerColor: Color = this.containerColor,
              contentColor: Color = this.contentColor,
              disabledContainerColor: Color = this.disabledContainerColor,
              disabledContentColor: Color = this.disabledContentColor,
  - id: live-androidx-material3-material3-material3-card-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 806
    endLine: 840
    sha256: a16e3c198f3b9f0f253cb13a620d035742b2333989605a1c38fe42e5cf1e2bb2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          ): CardColors =
              CardColors(
                  containerColor.takeOrElse { this.containerColor },
                  contentColor.takeOrElse { this.contentColor },
                  disabledContainerColor.takeOrElse { this.disabledContainerColor },
                  disabledContentColor.takeOrElse { this.disabledContentColor },
              )

          /**
           * Represents the container color for this card, depending on [enabled].
           *
           * @param enabled whether the card is enabled
           */
          @Stable
          internal fun containerColor(enabled: Boolean): Color =
              if (enabled) containerColor else disabledContainerColor

          /**
           * Represents the content color for this card, depending on [enabled].
           *
           * @param enabled whether the card is enabled
           */
          @Stable
          internal fun contentColor(enabled: Boolean) =
              if (enabled) contentColor else disabledContentColor

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is CardColors) return false

              if (containerColor != other.containerColor) return false
              if (contentColor != other.contentColor) return false
              if (disabledContainerColor != other.disabledContainerColor) return false
              if (disabledContentColor != other.disabledContentColor) return false
  - id: live-androidx-material3-material3-material3-card-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt
    startLine: 841
    endLine: 852
    sha256: b2383a32855149d0b5a7d0ca344328f91cae348d6838192ecaf4b4bd5bd036d1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              return true
          }

          override fun hashCode(): Int {
              var result = containerColor.hashCode()
              result = 31 * result + contentColor.hashCode()
              result = 31 * result + disabledContainerColor.hashCode()
              result = 31 * result + disabledContentColor.hashCode()
              return result
          }
      }
compose:
  id: live-androidx-material3-material3-material3-card
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-card-lines-1
      title: androidx.compose.material3 Card.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-106
      title: androidx.compose.material3 Card.kt source (lines 106–140)
      aliases:
        - androidx.compose.material3.Card
        - androidx.compose.material3.CardDefaults
        - androidx.compose.material3.CardElevation
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-141
      title: androidx.compose.material3 Card.kt source (lines 141–175)
      aliases:
        - androidx.compose.material3.ElevatedCard
        - androidx.compose.material3.CardDefaults
        - androidx.compose.material3.CardElevation
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-176
      title: androidx.compose.material3 Card.kt source (lines 176–210)
      aliases:
        - androidx.compose.material3.Card
        - androidx.compose.material3.ElevatedCard
        - androidx.compose.material3.CardDefaults
        - androidx.compose.material3.CardElevation
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-176-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-211
      title: androidx.compose.material3 Card.kt source (lines 211–245)
      aliases:
        - androidx.compose.material3.ElevatedCard
        - androidx.compose.material3.CardDefaults
        - androidx.compose.material3.CardElevation
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-211-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-246
      title: androidx.compose.material3 Card.kt source (lines 246–280)
      aliases:
        - androidx.compose.material3.Card
        - androidx.compose.material3.OutlinedCard
        - androidx.compose.material3.CardDefaults
        - androidx.compose.material3.CardElevation
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-246-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-281
      title: androidx.compose.material3 Card.kt source (lines 281–315)
      aliases:
        - androidx.compose.material3.Card
        - androidx.compose.material3.OutlinedCard
        - androidx.compose.material3.CardDefaults
        - androidx.compose.material3.CardElevation
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-281-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-316
      title: androidx.compose.material3 Card.kt source (lines 316–350)
      aliases:
        - androidx.compose.material3.OutlinedCard
        - androidx.compose.material3.CardDefaults
        - androidx.compose.material3.CardElevation
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-316-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-351
      title: androidx.compose.material3 Card.kt source (lines 351–385)
      aliases:
        - androidx.compose.material3.Card
        - androidx.compose.material3.CardDefaults
        - androidx.compose.material3.CardElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-351-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-36
      title: androidx.compose.material3 Card.kt source (lines 36–70)
      aliases:
        - androidx.compose.material3.Card
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-386
      title: androidx.compose.material3 Card.kt source (lines 386–420)
      aliases:
        - androidx.compose.material3.Card
        - androidx.compose.material3.ElevatedCard
        - androidx.compose.material3.CardElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-386-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-421
      title: androidx.compose.material3 Card.kt source (lines 421–455)
      aliases:
        - androidx.compose.material3.OutlinedCard
        - androidx.compose.material3.CardElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-421-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-456
      title: androidx.compose.material3 Card.kt source (lines 456–490)
      aliases:
        - androidx.compose.material3.Card
        - androidx.compose.material3.CardElevation
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-456-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-491
      title: androidx.compose.material3 Card.kt source (lines 491–525)
      aliases:
        - androidx.compose.material3.ElevatedCard
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-491-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-526
      title: androidx.compose.material3 Card.kt source (lines 526–560)
      aliases:
        - androidx.compose.material3.ElevatedCard
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-526-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-561
      title: androidx.compose.material3 Card.kt source (lines 561–595)
      aliases:
        - androidx.compose.material3.OutlinedCard
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-561-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-596
      title: androidx.compose.material3 Card.kt source (lines 596–630)
      aliases:
        - androidx.compose.material3.OutlinedCard
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-596-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-631
      title: androidx.compose.material3 Card.kt source (lines 631–665)
      aliases:
        - androidx.compose.material3.Card
        - androidx.compose.material3.ElevatedCard
        - androidx.compose.material3.OutlinedCard
        - androidx.compose.material3.CardDefaults
        - androidx.compose.material3.CardElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-631-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-666
      title: androidx.compose.material3 Card.kt source (lines 666–700)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-666-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-701
      title: androidx.compose.material3 Card.kt source (lines 701–735)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-701-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-71
      title: androidx.compose.material3 Card.kt source (lines 71–105)
      aliases:
        - androidx.compose.material3.Card
        - androidx.compose.material3.CardDefaults
        - androidx.compose.material3.CardElevation
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-71-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-736
      title: androidx.compose.material3 Card.kt source (lines 736–770)
      aliases:
        - androidx.compose.material3.CardElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-736-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-771
      title: androidx.compose.material3 Card.kt source (lines 771–805)
      aliases:
        - androidx.compose.material3.Card
        - androidx.compose.material3.ElevatedCard
        - androidx.compose.material3.OutlinedCard
        - androidx.compose.material3.CardDefaults
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-771-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-806
      title: androidx.compose.material3 Card.kt source (lines 806–840)
      aliases:
        - androidx.compose.material3.CardColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-806-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-card-lines-841
      title: androidx.compose.material3 Card.kt source (lines 841–852)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-card-lines-841-source
      relatedIds: []
---

# androidx.compose.material3 Card.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt

## androidx.compose.material3 Card.kt source (lines 1–35)

/*
 * Copyright 2022 The Android Open Source Project
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

package androidx.compose.material3

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.VectorConverter
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.interaction.DragInteraction
import androidx.compose.foundation.interaction.FocusInteraction
import androidx.compose.foundation.interaction.HoverInteraction
import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.InteractionSource
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.PressInteraction
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.material3.internal.animateElevation
import androidx.compose.material3.tokens.ElevatedCardTokens
import androidx.compose.material3.tokens.FilledCardTokens
import androidx.compose.material3.tokens.OutlinedCardTokens
import androidx.compose.runtime.Composable

Sources: [live-androidx-material3-material3-material3-card-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 106–140)

 *
 * This Card handles click events, calling its [onClick] lambda.
 *
 * ![Filled card
 * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-card.png)
 *
 * Clickable card sample:
 *
 * @sample androidx.compose.material3.samples.ClickableCardSample
 * @param onClick called when this card is clicked
 * @param modifier the [Modifier] to be applied to this card
 * @param enabled controls the enabled state of this card. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param shape defines the shape of this card's container, border (when [border] is not null), and
 *   shadow (when using [elevation])
 * @param colors [CardColors] that will be used to resolve the color(s) used for this card in
 *   different states. See [CardDefaults.cardColors].
 * @param elevation [CardElevation] used to resolve the elevation for this card in different states.
 *   This controls the size of the shadow below the card. Additionally, when the container color is
 *   [ColorScheme.surface], this controls the amount of primary color applied as an overlay. See
 *   also: [Surface].
 * @param border the border to draw around the container of this card
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this card. You can use this to change the card's appearance or
 *   preview the card in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 * @param content The content displayed on the card
 */
@Composable
public fun Card(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    shape: Shape = CardDefaults.shape,

Sources: [live-androidx-material3-material3-material3-card-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 141–175)

    colors: CardColors = CardDefaults.cardColors(),
    elevation: CardElevation = CardDefaults.cardElevation(),
    border: BorderStroke? = null,
    interactionSource: MutableInteractionSource? = null,
    content: @Composable ColumnScope.() -> Unit,
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    Surface(
        onClick = onClick,
        modifier = modifier,
        enabled = enabled,
        shape = shape,
        color = colors.containerColor(enabled),
        contentColor = colors.contentColor(enabled),
        shadowElevation = elevation.shadowElevation(enabled, interactionSource).value,
        border = border,
        interactionSource = interactionSource,
    ) {
        Column(content = content)
    }
}

/**
 * [Material Design elevated card](https://m3.material.io/components/cards/overview)
 *
 * Elevated cards contain content and actions that relate information about a subject. They have a
 * drop shadow, providing more separation from the background than filled cards, but less than
 * outlined cards.
 *
 * This ElevatedCard does not handle input events - see the other ElevatedCard overloads if you want
 * a clickable or selectable ElevatedCard.
 *
 * ![Elevated card
 * image](https://developer.android.com/images/reference/androidx/compose/material3/elevated-card.png)

Sources: [live-androidx-material3-material3-material3-card-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 176–210)

 *
 * Elevated card sample:
 *
 * @sample androidx.compose.material3.samples.ElevatedCardSample
 * @param modifier the [Modifier] to be applied to this card
 * @param shape defines the shape of this card's container and shadow (when using [elevation])
 * @param colors [CardColors] that will be used to resolve the color(s) used for this card in
 *   different states. See [CardDefaults.elevatedCardElevation].
 * @param elevation [CardElevation] used to resolve the elevation for this card in different states.
 *   This controls the size of the shadow below the card. Additionally, when the container color is
 *   [ColorScheme.surface], this controls the amount of primary color applied as an overlay. See
 *   also: [Surface].
 * @param content The content displayed on the card
 */
@Composable
public fun ElevatedCard(
    modifier: Modifier = Modifier,
    shape: Shape = CardDefaults.elevatedShape,
    colors: CardColors = CardDefaults.elevatedCardColors(),
    elevation: CardElevation = CardDefaults.elevatedCardElevation(),
    content: @Composable ColumnScope.() -> Unit,
): Unit =
    Card(
        modifier = modifier,
        shape = shape,
        border = null,
        elevation = elevation,
        colors = colors,
        content = content,
    )

/**
 * [Material Design elevated card](https://m3.material.io/components/cards/overview)
 *
 * Elevated cards contain content and actions that relate information about a subject. They have a

Sources: [live-androidx-material3-material3-material3-card-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 211–245)

 * drop shadow, providing more separation from the background than filled cards, but less than
 * outlined cards.
 *
 * This ElevatedCard handles click events, calling its [onClick] lambda.
 *
 * ![Elevated card
 * image](https://developer.android.com/images/reference/androidx/compose/material3/elevated-card.png)
 *
 * Clickable elevated card sample:
 *
 * @sample androidx.compose.material3.samples.ClickableElevatedCardSample
 * @param onClick called when this card is clicked
 * @param modifier the [Modifier] to be applied to this card
 * @param enabled controls the enabled state of this card. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param shape defines the shape of this card's container and shadow (when using [elevation])
 * @param colors [CardColors] that will be used to resolve the color(s) used for this card in
 *   different states. See [CardDefaults.elevatedCardElevation].
 * @param elevation [CardElevation] used to resolve the elevation for this card in different states.
 *   This controls the size of the shadow below the card. Additionally, when the container color is
 *   [ColorScheme.surface], this controls the amount of primary color applied as an overlay. See
 *   also: [Surface].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this card. You can use this to change the card's appearance or
 *   preview the card in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 * @param content The content displayed on the card
 */
@Composable
public fun ElevatedCard(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    shape: Shape = CardDefaults.elevatedShape,

Sources: [live-androidx-material3-material3-material3-card-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 246–280)

    colors: CardColors = CardDefaults.elevatedCardColors(),
    elevation: CardElevation = CardDefaults.elevatedCardElevation(),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable ColumnScope.() -> Unit,
): Unit =
    Card(
        onClick = onClick,
        modifier = modifier,
        enabled = enabled,
        shape = shape,
        colors = colors,
        elevation = elevation,
        border = null,
        interactionSource = interactionSource,
        content = content,
    )

/**
 * [Material Design outlined card](https://m3.material.io/components/cards/overview)
 *
 * Outlined cards contain content and actions that relate information about a subject. They have a
 * visual boundary around the container. This can provide greater emphasis than the other types.
 *
 * This OutlinedCard does not handle input events - see the other OutlinedCard overloads if you want
 * a clickable or selectable OutlinedCard.
 *
 * ![Outlined card
 * image](https://developer.android.com/images/reference/androidx/compose/material3/outlined-card.png)
 *
 * Outlined card sample:
 *
 * @sample androidx.compose.material3.samples.OutlinedCardSample
 * @param modifier the [Modifier] to be applied to this card
 * @param shape defines the shape of this card's container, border (when [border] is not null), and
 *   shadow (when using [elevation])

Sources: [live-androidx-material3-material3-material3-card-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 281–315)

 * @param colors [CardColors] that will be used to resolve the color(s) used for this card in
 *   different states. See [CardDefaults.outlinedCardColors].
 * @param elevation [CardElevation] used to resolve the elevation for this card in different states.
 *   This controls the size of the shadow below the card. Additionally, when the container color is
 *   [ColorScheme.surface], this controls the amount of primary color applied as an overlay. See
 *   also: [Surface].
 * @param border the border to draw around the container of this card
 * @param content The content displayed on the card
 */
@Composable
public fun OutlinedCard(
    modifier: Modifier = Modifier,
    shape: Shape = CardDefaults.outlinedShape,
    colors: CardColors = CardDefaults.outlinedCardColors(),
    elevation: CardElevation = CardDefaults.outlinedCardElevation(),
    border: BorderStroke = CardDefaults.outlinedCardBorder(),
    content: @Composable ColumnScope.() -> Unit,
): Unit =
    Card(
        modifier = modifier,
        shape = shape,
        colors = colors,
        elevation = elevation,
        border = border,
        content = content,
    )

/**
 * [Material Design outlined card](https://m3.material.io/components/cards/overview)
 *
 * Outlined cards contain content and actions that relate information about a subject. They have a
 * visual boundary around the container. This can provide greater emphasis than the other types.
 *
 * This OutlinedCard handles click events, calling its [onClick] lambda.
 *

Sources: [live-androidx-material3-material3-material3-card-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 316–350)

 * ![Outlined card
 * image](https://developer.android.com/images/reference/androidx/compose/material3/outlined-card.png)
 *
 * Clickable outlined card sample:
 *
 * @sample androidx.compose.material3.samples.ClickableOutlinedCardSample
 * @param onClick called when this card is clicked
 * @param modifier the [Modifier] to be applied to this card
 * @param enabled controls the enabled state of this card. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param shape defines the shape of this card's container, border (when [border] is not null), and
 *   shadow (when using [elevation])
 * @param colors [CardColors] that will be used to resolve the color(s) used for this card in
 *   different states. See [CardDefaults.outlinedCardColors].
 * @param elevation [CardElevation] used to resolve the elevation for this card in different states.
 *   This controls the size of the shadow below the card. Additionally, when the container color is
 *   [ColorScheme.surface], this controls the amount of primary color applied as an overlay. See
 *   also: [Surface].
 * @param border the border to draw around the container of this card
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this card. You can use this to change the card's appearance or
 *   preview the card in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 * @param content The content displayed on the card
 */
@Composable
public fun OutlinedCard(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    shape: Shape = CardDefaults.outlinedShape,
    colors: CardColors = CardDefaults.outlinedCardColors(),
    elevation: CardElevation = CardDefaults.outlinedCardElevation(),
    border: BorderStroke = CardDefaults.outlinedCardBorder(enabled),

Sources: [live-androidx-material3-material3-material3-card-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 351–385)

    interactionSource: MutableInteractionSource? = null,
    content: @Composable ColumnScope.() -> Unit,
): Unit =
    Card(
        onClick = onClick,
        modifier = modifier,
        enabled = enabled,
        shape = shape,
        colors = colors,
        elevation = elevation,
        border = border,
        interactionSource = interactionSource,
        content = content,
    )

/** Contains the default values used by all card types. */
public object CardDefaults {
    // shape Defaults
    /** Default shape for a card. */
    public val shape: Shape
        @Composable get() = FilledCardTokens.ContainerShape.value

    /** Default shape for an elevated card. */
    public val elevatedShape: Shape
        @Composable get() = ElevatedCardTokens.ContainerShape.value

    /** Default shape for an outlined card. */
    public val outlinedShape: Shape
        @Composable get() = OutlinedCardTokens.ContainerShape.value

    /**
     * Creates a [CardElevation] that will animate between the provided values according to the
     * Material specification for a [Card].
     *
     * @param defaultElevation the elevation used when the [Card] is has no other [Interaction]s.

Sources: [live-androidx-material3-material3-material3-card-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 36–70)

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.Stable
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.compositeOver
import androidx.compose.ui.graphics.takeOrElse
import androidx.compose.ui.unit.Dp

/**
 * [Material Design filled card](https://m3.material.io/components/cards/overview)
 *
 * Cards contain contain content and actions that relate information about a subject. Filled cards
 * provide subtle separation from the background. This has less emphasis than elevated or outlined
 * cards.
 *
 * This Card does not handle input events - see the other Card overloads if you want a clickable or
 * selectable Card.
 *
 * ![Filled card
 * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-card.png)
 *
 * Card sample:
 *
 * @sample androidx.compose.material3.samples.CardSample
 * @param modifier the [Modifier] to be applied to this card
 * @param shape defines the shape of this card's container, border (when [border] is not null), and
 *   shadow (when using [elevation])
 * @param colors [CardColors] that will be used to resolve the colors used for this card in

Sources: [live-androidx-material3-material3-material3-card-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 386–420)

     * @param pressedElevation the elevation used when the [Card] is pressed.
     * @param focusedElevation the elevation used when the [Card] is focused.
     * @param hoveredElevation the elevation used when the [Card] is hovered.
     * @param draggedElevation the elevation used when the [Card] is dragged.
     * @param disabledElevation the elevation used when the [Card] is disabled.
     */
    @Composable
    public fun cardElevation(
        defaultElevation: Dp = FilledCardTokens.ContainerElevation,
        pressedElevation: Dp = FilledCardTokens.PressedContainerElevation,
        focusedElevation: Dp = FilledCardTokens.FocusContainerElevation,
        hoveredElevation: Dp = FilledCardTokens.HoverContainerElevation,
        draggedElevation: Dp = FilledCardTokens.DraggedContainerElevation,
        disabledElevation: Dp = FilledCardTokens.DisabledContainerElevation,
    ): CardElevation =
        CardElevation(
            defaultElevation = defaultElevation,
            pressedElevation = pressedElevation,
            focusedElevation = focusedElevation,
            hoveredElevation = hoveredElevation,
            draggedElevation = draggedElevation,
            disabledElevation = disabledElevation,
        )

    /**
     * Creates a [CardElevation] that will animate between the provided values according to the
     * Material specification for an [ElevatedCard].
     *
     * @param defaultElevation the elevation used when the [ElevatedCard] is has no other
     *   [Interaction]s.
     * @param pressedElevation the elevation used when the [ElevatedCard] is pressed.
     * @param focusedElevation the elevation used when the [ElevatedCard] is focused.
     * @param hoveredElevation the elevation used when the [ElevatedCard] is hovered.
     * @param draggedElevation the elevation used when the [ElevatedCard] is dragged.
     * @param disabledElevation the elevation used when the [Card] is disabled.

Sources: [live-androidx-material3-material3-material3-card-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 421–455)

     */
    @Composable
    public fun elevatedCardElevation(
        defaultElevation: Dp = ElevatedCardTokens.ContainerElevation,
        pressedElevation: Dp = ElevatedCardTokens.PressedContainerElevation,
        focusedElevation: Dp = ElevatedCardTokens.FocusContainerElevation,
        hoveredElevation: Dp = ElevatedCardTokens.HoverContainerElevation,
        draggedElevation: Dp = ElevatedCardTokens.DraggedContainerElevation,
        disabledElevation: Dp = ElevatedCardTokens.DisabledContainerElevation,
    ): CardElevation =
        CardElevation(
            defaultElevation = defaultElevation,
            pressedElevation = pressedElevation,
            focusedElevation = focusedElevation,
            hoveredElevation = hoveredElevation,
            draggedElevation = draggedElevation,
            disabledElevation = disabledElevation,
        )

    /**
     * Creates a [CardElevation] that will animate between the provided values according to the
     * Material specification for an [OutlinedCard].
     *
     * @param defaultElevation the elevation used when the [OutlinedCard] is has no other
     *   [Interaction]s.
     * @param pressedElevation the elevation used when the [OutlinedCard] is pressed.
     * @param focusedElevation the elevation used when the [OutlinedCard] is focused.
     * @param hoveredElevation the elevation used when the [OutlinedCard] is hovered.
     * @param draggedElevation the elevation used when the [OutlinedCard] is dragged.
     * @param disabledElevation the elevation used when the [OutlinedCard] is disabled.
     */
    @Composable
    public fun outlinedCardElevation(
        defaultElevation: Dp = OutlinedCardTokens.ContainerElevation,
        pressedElevation: Dp = defaultElevation,

Sources: [live-androidx-material3-material3-material3-card-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 456–490)

        focusedElevation: Dp = defaultElevation,
        hoveredElevation: Dp = defaultElevation,
        draggedElevation: Dp = OutlinedCardTokens.DraggedContainerElevation,
        disabledElevation: Dp = OutlinedCardTokens.DisabledContainerElevation,
    ): CardElevation =
        CardElevation(
            defaultElevation = defaultElevation,
            pressedElevation = pressedElevation,
            focusedElevation = focusedElevation,
            hoveredElevation = hoveredElevation,
            draggedElevation = draggedElevation,
            disabledElevation = disabledElevation,
        )

    /**
     * Creates a [CardColors] that represents the default container and content colors used in a
     * [Card].
     */
    @Composable public fun cardColors(): CardColors = MaterialTheme.colorScheme.defaultCardColors

    /**
     * Creates a [CardColors] that represents the default container and content colors used in a
     * [Card].
     *
     * @param containerColor the container color of this [Card] when enabled.
     * @param contentColor the content color of this [Card] when enabled.
     * @param disabledContainerColor the container color of this [Card] when not enabled.
     * @param disabledContentColor the content color of this [Card] when not enabled.
     */
    @Composable
    public fun cardColors(
        containerColor: Color = Color.Unspecified,
        contentColor: Color = contentColorFor(containerColor),
        disabledContainerColor: Color = Color.Unspecified,
        disabledContentColor: Color = contentColor.copy(DisabledAlpha),

Sources: [live-androidx-material3-material3-material3-card-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 491–525)

    ): CardColors =
        MaterialTheme.colorScheme.defaultCardColors.copy(
            containerColor = containerColor,
            contentColor = contentColor,
            disabledContainerColor = disabledContainerColor,
            disabledContentColor = disabledContentColor,
        )

    internal val ColorScheme.defaultCardColors: CardColors
        get() {
            return defaultCardColorsCached
                ?: CardColors(
                        containerColor = fromToken(FilledCardTokens.ContainerColor),
                        contentColor = contentColorFor(fromToken(FilledCardTokens.ContainerColor)),
                        disabledContainerColor =
                            fromToken(FilledCardTokens.DisabledContainerColor)
                                .copy(alpha = FilledCardTokens.DisabledContainerOpacity)
                                .compositeOver(fromToken(FilledCardTokens.ContainerColor)),
                        disabledContentColor =
                            contentColorFor(fromToken(FilledCardTokens.ContainerColor))
                                .copy(DisabledAlpha),
                    )
                    .also { defaultCardColorsCached = it }
        }

    /**
     * Creates a [CardColors] that represents the default container and content colors used in an
     * [ElevatedCard].
     */
    @Composable
    public fun elevatedCardColors(): CardColors =
        MaterialTheme.colorScheme.defaultElevatedCardColors

    /**
     * Creates a [CardColors] that represents the default container and content colors used in an

Sources: [live-androidx-material3-material3-material3-card-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 526–560)

     * [ElevatedCard].
     *
     * @param containerColor the container color of this [ElevatedCard] when enabled.
     * @param contentColor the content color of this [ElevatedCard] when enabled.
     * @param disabledContainerColor the container color of this [ElevatedCard] when not enabled.
     * @param disabledContentColor the content color of this [ElevatedCard] when not enabled.
     */
    @Composable
    public fun elevatedCardColors(
        containerColor: Color = Color.Unspecified,
        contentColor: Color = contentColorFor(containerColor),
        disabledContainerColor: Color = Color.Unspecified,
        disabledContentColor: Color = contentColor.copy(DisabledAlpha),
    ): CardColors =
        MaterialTheme.colorScheme.defaultElevatedCardColors.copy(
            containerColor = containerColor,
            contentColor = contentColor,
            disabledContainerColor = disabledContainerColor,
            disabledContentColor = disabledContentColor,
        )

    internal val ColorScheme.defaultElevatedCardColors: CardColors
        get() {
            return defaultElevatedCardColorsCached
                ?: CardColors(
                        containerColor = fromToken(ElevatedCardTokens.ContainerColor),
                        contentColor =
                            contentColorFor(fromToken(ElevatedCardTokens.ContainerColor)),
                        disabledContainerColor =
                            fromToken(ElevatedCardTokens.DisabledContainerColor)
                                .copy(alpha = ElevatedCardTokens.DisabledContainerOpacity)
                                .compositeOver(
                                    fromToken(ElevatedCardTokens.DisabledContainerColor)
                                ),
                        disabledContentColor =

Sources: [live-androidx-material3-material3-material3-card-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 561–595)

                            contentColorFor(fromToken(ElevatedCardTokens.ContainerColor))
                                .copy(DisabledAlpha),
                    )
                    .also { defaultElevatedCardColorsCached = it }
        }

    /**
     * Creates a [CardColors] that represents the default container and content colors used in an
     * [OutlinedCard].
     */
    @Composable
    public fun outlinedCardColors(): CardColors =
        MaterialTheme.colorScheme.defaultOutlinedCardColors

    /**
     * Creates a [CardColors] that represents the default container and content colors used in an
     * [OutlinedCard].
     *
     * @param containerColor the container color of this [OutlinedCard] when enabled.
     * @param contentColor the content color of this [OutlinedCard] when enabled.
     * @param disabledContainerColor the container color of this [OutlinedCard] when not enabled.
     * @param disabledContentColor the content color of this [OutlinedCard] when not enabled.
     */
    @Composable
    public fun outlinedCardColors(
        containerColor: Color = Color.Unspecified,
        contentColor: Color = contentColorFor(containerColor),
        disabledContainerColor: Color = Color.Unspecified,
        disabledContentColor: Color = contentColorFor(containerColor).copy(DisabledAlpha),
    ): CardColors =
        MaterialTheme.colorScheme.defaultOutlinedCardColors.copy(
            containerColor = containerColor,
            contentColor = contentColor,
            disabledContainerColor = disabledContainerColor,
            disabledContentColor = disabledContentColor,

Sources: [live-androidx-material3-material3-material3-card-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 596–630)

        )

    internal val ColorScheme.defaultOutlinedCardColors: CardColors
        get() {
            return defaultOutlinedCardColorsCached
                ?: CardColors(
                        containerColor = fromToken(OutlinedCardTokens.ContainerColor),
                        contentColor =
                            contentColorFor(fromToken(OutlinedCardTokens.ContainerColor)),
                        disabledContainerColor = fromToken(OutlinedCardTokens.ContainerColor),
                        disabledContentColor =
                            contentColorFor(fromToken(OutlinedCardTokens.ContainerColor))
                                .copy(DisabledAlpha),
                    )
                    .also { defaultOutlinedCardColorsCached = it }
        }

    /**
     * Creates a [BorderStroke] that represents the default border used in [OutlinedCard].
     *
     * @param enabled whether the card is enabled
     */
    @Composable
    public fun outlinedCardBorder(enabled: Boolean = true): BorderStroke {
        val color =
            if (enabled) {
                OutlinedCardTokens.OutlineColor.value
            } else {
                OutlinedCardTokens.DisabledOutlineColor.value
                    .copy(alpha = OutlinedCardTokens.DisabledOutlineOpacity)
                    .compositeOver(ElevatedCardTokens.ContainerColor.value)
            }
        return remember(color) { BorderStroke(OutlinedCardTokens.OutlineWidth, color) }
    }
}

Sources: [live-androidx-material3-material3-material3-card-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 631–665)


/**
 * Represents the elevation for a card in different states.
 * - See [CardDefaults.cardElevation] for the default elevation used in a [Card].
 * - See [CardDefaults.elevatedCardElevation] for the default elevation used in an [ElevatedCard].
 * - See [CardDefaults.outlinedCardElevation] for the default elevation used in an [OutlinedCard].
 */
@Immutable
public class CardElevation
internal constructor(
    private val defaultElevation: Dp,
    private val pressedElevation: Dp,
    private val focusedElevation: Dp,
    private val hoveredElevation: Dp,
    private val draggedElevation: Dp,
    private val disabledElevation: Dp,
) {
    /**
     * Represents the shadow elevation used in a card, depending on its [enabled] state and
     * [interactionSource].
     *
     * Shadow elevation is used to apply a shadow around the card to give it higher emphasis.
     *
     * @param enabled whether the card is enabled
     * @param interactionSource the [InteractionSource] for this card
     */
    @Composable
    internal fun shadowElevation(
        enabled: Boolean,
        interactionSource: InteractionSource?,
    ): State<Dp> {
        if (interactionSource == null) {
            return remember { mutableStateOf(defaultElevation) }
        }
        return animateElevation(enabled = enabled, interactionSource = interactionSource)

Sources: [live-androidx-material3-material3-material3-card-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 666–700)

    }

    @Composable
    private fun animateElevation(
        enabled: Boolean,
        interactionSource: InteractionSource,
    ): State<Dp> {
        val interactions = remember { mutableStateListOf<Interaction>() }
        LaunchedEffect(interactionSource) {
            interactionSource.interactions.collect { interaction ->
                when (interaction) {
                    is HoverInteraction.Enter -> {
                        interactions.add(interaction)
                    }
                    is HoverInteraction.Exit -> {
                        interactions.remove(interaction.enter)
                    }
                    is FocusInteraction.Focus -> {
                        interactions.add(interaction)
                    }
                    is FocusInteraction.Unfocus -> {
                        interactions.remove(interaction.focus)
                    }
                    is PressInteraction.Press -> {
                        interactions.add(interaction)
                    }
                    is PressInteraction.Release -> {
                        interactions.remove(interaction.press)
                    }
                    is PressInteraction.Cancel -> {
                        interactions.remove(interaction.press)
                    }
                    is DragInteraction.Start -> {
                        interactions.add(interaction)
                    }

Sources: [live-androidx-material3-material3-material3-card-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 701–735)

                    is DragInteraction.Stop -> {
                        interactions.remove(interaction.start)
                    }
                    is DragInteraction.Cancel -> {
                        interactions.remove(interaction.start)
                    }
                }
            }
        }

        val interaction = interactions.lastOrNull()

        val target =
            if (!enabled) {
                disabledElevation
            } else {
                when (interaction) {
                    is PressInteraction.Press -> pressedElevation
                    is HoverInteraction.Enter -> hoveredElevation
                    is FocusInteraction.Focus -> focusedElevation
                    is DragInteraction.Start -> draggedElevation
                    else -> defaultElevation
                }
            }

        val animatable = remember { Animatable(target, Dp.VectorConverter) }

        LaunchedEffect(target) {
            if (animatable.targetValue != target) {
                if (!enabled) {
                    // No transition when moving to a disabled state.
                    animatable.snapTo(target)
                } else {
                    val lastInteraction =
                        when (animatable.targetValue) {

Sources: [live-androidx-material3-material3-material3-card-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 71–105)

 *   different states. See [CardDefaults.cardColors].
 * @param elevation [CardElevation] used to resolve the elevation for this card in different states.
 *   This controls the size of the shadow below the card. Additionally, when the container color is
 *   [ColorScheme.surface], this controls the amount of primary color applied as an overlay. See
 *   also: [Surface].
 * @param border the border to draw around the container of this card
 * @param content The content displayed on the card
 */
@Composable
public fun Card(
    modifier: Modifier = Modifier,
    shape: Shape = CardDefaults.shape,
    colors: CardColors = CardDefaults.cardColors(),
    elevation: CardElevation = CardDefaults.cardElevation(),
    border: BorderStroke? = null,
    content: @Composable ColumnScope.() -> Unit,
) {
    Surface(
        modifier = modifier,
        shape = shape,
        color = colors.containerColor(enabled = true),
        contentColor = colors.contentColor(enabled = true),
        shadowElevation = elevation.shadowElevation(enabled = true, interactionSource = null).value,
        border = border,
    ) {
        Column(content = content)
    }
}

/**
 * [Material Design filled card](https://m3.material.io/components/cards/overview)
 *
 * Cards contain contain content and actions that relate information about a subject. Filled cards
 * provide subtle separation from the background. This has less emphasis than elevated or outlined
 * cards.

Sources: [live-androidx-material3-material3-material3-card-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 736–770)

                            pressedElevation -> PressInteraction.Press(Offset.Zero)
                            hoveredElevation -> HoverInteraction.Enter()
                            focusedElevation -> FocusInteraction.Focus()
                            draggedElevation -> DragInteraction.Start()
                            else -> null
                        }
                    animatable.animateElevation(
                        from = lastInteraction,
                        to = interaction,
                        target = target,
                    )
                }
            }
        }

        return animatable.asState()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is CardElevation) return false

        if (defaultElevation != other.defaultElevation) return false
        if (pressedElevation != other.pressedElevation) return false
        if (focusedElevation != other.focusedElevation) return false
        if (hoveredElevation != other.hoveredElevation) return false
        if (disabledElevation != other.disabledElevation) return false

        return true
    }

    override fun hashCode(): Int {
        var result = defaultElevation.hashCode()
        result = 31 * result + pressedElevation.hashCode()
        result = 31 * result + focusedElevation.hashCode()

Sources: [live-androidx-material3-material3-material3-card-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 771–805)

        result = 31 * result + hoveredElevation.hashCode()
        result = 31 * result + disabledElevation.hashCode()
        return result
    }
}

/**
 * Represents the container and content colors used in a card in different states.
 *
 * @param containerColor the container color of this [Card] when enabled.
 * @param contentColor the content color of this [Card] when enabled.
 * @param disabledContainerColor the container color of this [Card] when not enabled.
 * @param disabledContentColor the content color of this [Card] when not enabled.
 * @constructor create an instance with arbitrary colors.
 * - See [CardDefaults.cardColors] for the default colors used in a [Card].
 * - See [CardDefaults.elevatedCardColors] for the default colors used in a [ElevatedCard].
 * - See [CardDefaults.outlinedCardColors] for the default colors used in a [OutlinedCard].
 */
@Immutable
public class CardColors
public constructor(
    public val containerColor: Color,
    public val contentColor: Color,
    public val disabledContainerColor: Color,
    public val disabledContentColor: Color,
) {
    /**
     * Returns a copy of this CardColors, optionally overriding some of the values. This uses the
     * Color.Unspecified to mean “use the value from the source”
     */
    public fun copy(
        containerColor: Color = this.containerColor,
        contentColor: Color = this.contentColor,
        disabledContainerColor: Color = this.disabledContainerColor,
        disabledContentColor: Color = this.disabledContentColor,

Sources: [live-androidx-material3-material3-material3-card-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 806–840)

    ): CardColors =
        CardColors(
            containerColor.takeOrElse { this.containerColor },
            contentColor.takeOrElse { this.contentColor },
            disabledContainerColor.takeOrElse { this.disabledContainerColor },
            disabledContentColor.takeOrElse { this.disabledContentColor },
        )

    /**
     * Represents the container color for this card, depending on [enabled].
     *
     * @param enabled whether the card is enabled
     */
    @Stable
    internal fun containerColor(enabled: Boolean): Color =
        if (enabled) containerColor else disabledContainerColor

    /**
     * Represents the content color for this card, depending on [enabled].
     *
     * @param enabled whether the card is enabled
     */
    @Stable
    internal fun contentColor(enabled: Boolean) =
        if (enabled) contentColor else disabledContentColor

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is CardColors) return false

        if (containerColor != other.containerColor) return false
        if (contentColor != other.contentColor) return false
        if (disabledContainerColor != other.disabledContainerColor) return false
        if (disabledContentColor != other.disabledContentColor) return false


Sources: [live-androidx-material3-material3-material3-card-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)

## androidx.compose.material3 Card.kt source (lines 841–852)

        return true
    }

    override fun hashCode(): Int {
        var result = containerColor.hashCode()
        result = 31 * result + contentColor.hashCode()
        result = 31 * result + disabledContainerColor.hashCode()
        result = 31 * result + disabledContentColor.hashCode()
        return result
    }
}


Sources: [live-androidx-material3-material3-material3-card-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Card.kt)
