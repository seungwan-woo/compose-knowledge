---
type: reference
title: androidx.compose.material3 Button.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-button-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1
    endLine: 35
    sha256: 603570e67eb424958537a092a1594c9e2957e37e3a3385ab8ccd42837fd2da95
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2021 The Android Open Source Project
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
      import androidx.compose.animation.core.FiniteAnimationSpec
      import androidx.compose.animation.core.VectorConverter
      import androidx.compose.foundation.BorderStroke
      import androidx.compose.foundation.interaction.FocusInteraction
      import androidx.compose.foundation.interaction.HoverInteraction
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.InteractionSource
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.interaction.PressInteraction
      import androidx.compose.foundation.interaction.collectIsPressedAsState
      import androidx.compose.foundation.layout.Arrangement
      import androidx.compose.foundation.layout.PaddingValues
      import androidx.compose.foundation.layout.Row
      import androidx.compose.foundation.layout.RowScope
      import androidx.compose.foundation.layout.defaultMinSize
      import androidx.compose.foundation.layout.padding
  - id: live-androidx-material3-material3-material3-button-lines-1010-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1010
    endLine: 1044
    sha256: e3d7ec363fbb015f72bb7640a172b41feac76bfcddda2198cc69d26987fb8fcd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                  top = LargeVerticalPadding,
                  end = if (hasTrailingIcon) IconLargeTrailingPadding else LargeTrailingPadding,
                  bottom = LargeVerticalPadding,
              )

          /** Default content padding for an extra large button. */
          public val ExtraLargeContentPadding: PaddingValues
              get() =
                  PaddingValues(
                      start = ButtonXLargeTokens.LeadingSpace,
                      end = ButtonXLargeTokens.TrailingSpace,
                      top = 48.dp,
                      bottom = 48.dp,
                  )

          private val TextButtonHorizontalPadding = 12.dp

          /**
           * The default content padding used by [TextButton].
           * - See [TextButtonWithIconContentPadding] for content padding used by [TextButton] that
           *   contains [Icon].
           *
           * Note: it's recommended to use [ContentPadding] instead for a more consistent look between all
           * buttons variants.
           */
          public val TextButtonContentPadding: PaddingValues =
              PaddingValues(
                  start = TextButtonHorizontalPadding,
                  top = ContentPadding.calculateTopPadding(),
                  end = TextButtonHorizontalPadding,
                  bottom = ContentPadding.calculateBottomPadding(),
              )

          private val TextButtonWithIconHorizontalEndPadding = 16.dp
  - id: live-androidx-material3-material3-material3-button-lines-1045-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1045
    endLine: 1079
    sha256: f76ba02e8465393fd597dce64414d4563f3a8bd1b0935493a5c9351624df47a4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          /**
           * The default content padding used by [TextButton] that contains an [Icon].
           *
           * Note: it's recommended to use [ButtonWithIconContentPadding] instead for a more consistent
           * look between all buttons variants.
           */
          public val TextButtonWithIconContentPadding: PaddingValues =
              PaddingValues(
                  start = TextButtonHorizontalPadding,
                  top = ContentPadding.calculateTopPadding(),
                  end = TextButtonWithIconHorizontalEndPadding,
                  bottom = ContentPadding.calculateBottomPadding(),
              )

          /**
           * The default min width applied for small buttons. Note that you can override it by applying
           * Modifier.widthIn directly on the button composable.
           */
          public val MinWidth: Dp = 58.dp

          /**
           * The default min height applied for small buttons. Note that you can override it by applying
           * Modifier.heightIn directly on the button composable.
           */
          public val MinHeight: Dp
              get() =
                  if (shouldUsePrecisionPointerComponentSizing.value) {
                      36.dp
                  } else {
                      ButtonSmallTokens.ContainerHeight
                  }

          /** The default height for a extra small button container. */
          public val ExtraSmallContainerHeight: Dp = ButtonXSmallTokens.ContainerHeight
  - id: live-androidx-material3-material3-material3-button-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 106
    endLine: 140
    sha256: 0523854fe16cea96a35f19f87f66733e0c43c6a4b918cca79dd919a166d9f766
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @sample androidx.compose.material3.samples.XLargeButtonWithIconSample
       *
       * Choose the best button for an action based on the amount of emphasis it needs. The more important
       * an action is, the higher emphasis its button should be.
       * - See [OutlinedButton] for a medium-emphasis button with a border.
       * - See [ElevatedButton] for an [FilledTonalButton] with a shadow.
       * - See [TextButton] for a low-emphasis button with no border.
       * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
       *
       * The default text style for internal [Text] components will be set to [Typography.labelLarge].
       *
       * @param onClick called when this button is clicked
       * @param modifier the [Modifier] to be applied to this button
       * @param enabled controls the enabled state of this button. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param shape defines the shape of this button's container, border (when [border] is not null),
       *   and shadow (when using [elevation])
       * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
       *   states. See [ButtonDefaults.buttonColors].
       * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
       *   states. This controls the size of the shadow below the button. See
       *   [ButtonElevation.shadowElevation].
       * @param border the border to draw around the container of this button
       * @param contentPadding the spacing values to apply internally between the container and the
       *   content
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
       *   preview the button in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param content The content displayed on the button, expected to be text, icon or image.
       */
      @Composable
      public fun Button(
          onClick: () -> Unit,
  - id: live-androidx-material3-material3-material3-button-lines-1080-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1080
    endLine: 1114
    sha256: 3ee9b9d0d91a209c5ff8a58830c5f659228be3ede18077990ca0da4a7e6a1ca5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /** The default height for a medium button container. */
          public val MediumContainerHeight: Dp = ButtonMediumTokens.ContainerHeight

          /** The default height for a large button container. */
          public val LargeContainerHeight: Dp = ButtonLargeTokens.ContainerHeight

          /** The default height for a extra large button container. */
          public val ExtraLargeContainerHeight: Dp = ButtonXLargeTokens.ContainerHeight

          /** The default size of the icon when used inside a small button. */
          // TODO update with the correct value in BaselineButtonTokens when available
          public val IconSize: Dp = 18.dp

          /** The default size of the icon used inside an extra small button. */
          public val ExtraSmallIconSize: Dp = ButtonXSmallTokens.IconSize

          /** The expressive size of the icon used inside a small button. */
          public val SmallIconSize: Dp = ButtonSmallTokens.IconSize

          /** The default size of the icon used inside a medium button. */
          public val MediumIconSize: Dp = ButtonMediumTokens.IconSize

          /** The default size of the icon used inside a large button. */
          public val LargeIconSize: Dp = ButtonLargeTokens.IconSize

          /** The default size of the icon used inside an extra large button. */
          public val ExtraLargeIconSize: Dp = ButtonXLargeTokens.IconSize

          /**
           * The default size of the spacing between an icon and a text when they used inside a small
           * button.
           */
          public val IconSpacing: Dp = ButtonSmallTokens.IconLabelSpace

          /**
  - id: live-androidx-material3-material3-material3-button-lines-1115-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1115
    endLine: 1149
    sha256: 5a1690df5e351599299d5ac5ee9198320e3d5449070eea67b12e40c4e3c54188
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * The default spacing between an icon and a text when they used inside any extra small button.
           */
          // TODO use the value from ButtonXSmallTokens.kt once it's been corrected
          public val ExtraSmallIconSpacing: Dp = 4.dp

          /** The default spacing between an icon and a text when they're inside any medium button. */
          public val MediumIconSpacing: Dp = ButtonMediumTokens.IconLabelSpace

          /** The default spacing between an icon and a text when they're inside any large button. */
          public val LargeIconSpacing: Dp = ButtonLargeTokens.IconLabelSpace

          /**
           * The default spacing between an icon and a text when they used inside any extra large button.
           */
          public val ExtraLargeIconSpacing: Dp = ButtonXLargeTokens.IconLabelSpace

          /** Square shape for default buttons. */
          public val squareShape: Shape
              @Composable get() = ButtonSmallTokens.ContainerShapeSquare.value

          /** Pressed shape for default buttons. */
          public val pressedShape: Shape
              @Composable get() = ButtonSmallTokens.PressedContainerShape.value

          /** Pressed shape for extra small buttons. */
          public val extraSmallPressedShape: Shape
              @Composable get() = ButtonXSmallTokens.PressedContainerShape.value

          /** Pressed shape for medium buttons. */
          public val mediumPressedShape: Shape
              @Composable get() = ButtonMediumTokens.PressedContainerShape.value

          /** Pressed shape for large buttons. */
          public val largePressedShape: Shape
              @Composable get() = ButtonLargeTokens.PressedContainerShape.value
  - id: live-androidx-material3-material3-material3-button-lines-1150-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1150
    endLine: 1184
    sha256: 1b5043281dca110705052eb9835fbff204d0fe55981bd351fa56bd9951be1b25
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /** Pressed shape for extra large buttons. */
          public val extraLargePressedShape: Shape
              @Composable get() = ButtonXLargeTokens.PressedContainerShape.value

          /** Default shape for a button. */
          public val shape: Shape
              @Composable get() = ButtonSmallTokens.ContainerShapeRound.value

          /** Default shape for an elevated button. */
          public val elevatedShape: Shape
              @Composable get() = ButtonSmallTokens.ContainerShapeRound.value

          /** Default shape for a filled tonal button. */
          public val filledTonalShape: Shape
              @Composable get() = ButtonSmallTokens.ContainerShapeRound.value

          /** Default shape for an outlined button. */
          public val outlinedShape: Shape
              @Composable get() = ButtonSmallTokens.ContainerShapeRound.value

          /** Default shape for a text button. */
          public val textShape: Shape
              @Composable get() = ButtonSmallTokens.ContainerShapeRound.value

          /**
           * Creates a [ButtonShapes] that represents the default shape and pressed shape used in a
           * button.
           */
          @Composable public fun shapes(): ButtonShapes = MaterialTheme.shapes.defaultButtonShapes

          /**
           * Creates a [ButtonShapes] that represents the default shape and pressedShape used in a
           * [Button] and its variants.
           *
  - id: live-androidx-material3-material3-material3-button-lines-1185-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1185
    endLine: 1219
    sha256: 5d8839edb5af24cd4dccf1bf37827e03a887e75907326afe15ec3cb49201e654
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param shape the unchecked shape for [ButtonShapes]
           * @param pressedShape the unchecked shape for [ButtonShapes]
           */
          @Composable
          public fun shapes(shape: Shape? = null, pressedShape: Shape? = null): ButtonShapes =
              MaterialTheme.shapes.defaultButtonShapes.copy(shape = shape, pressedShape = pressedShape)

          internal val Shapes.defaultButtonShapes: ButtonShapes
              get() {
                  return defaultButtonShapesCached
                      ?: ButtonShapes(
                              shape = fromToken(ButtonSmallTokens.ContainerShapeRound),
                              pressedShape = fromToken(ButtonSmallTokens.PressedContainerShape),
                          )
                          .also { defaultButtonShapesCached = it }
              }

          /**
           * Creates a [ButtonColors] that represents the default container and content colors used in a
           * [Button].
           */
          @Composable
          public fun buttonColors(): ButtonColors = MaterialTheme.colorScheme.defaultButtonColors

          /**
           * Creates a [ButtonColors] that represents the default container and content colors used in a
           * [Button].
           *
           * @param containerColor the container color of this [Button] when enabled.
           * @param contentColor the content color of this [Button] when enabled.
           * @param disabledContainerColor the container color of this [Button] when not enabled.
           * @param disabledContentColor the content color of this [Button] when not enabled.
           */
          @Composable
          public fun buttonColors(
  - id: live-androidx-material3-material3-material3-button-lines-1220-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1220
    endLine: 1254
    sha256: 934608e8f5bd784b143234ef30a2f9feaee5438c9db592af2d4045433ceb7dd7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              containerColor: Color = Color.Unspecified,
              contentColor: Color = Color.Unspecified,
              disabledContainerColor: Color = Color.Unspecified,
              disabledContentColor: Color = Color.Unspecified,
          ): ButtonColors =
              MaterialTheme.colorScheme.defaultButtonColors.copy(
                  containerColor = containerColor,
                  contentColor = contentColor,
                  disabledContainerColor = disabledContainerColor,
                  disabledContentColor = disabledContentColor,
              )

          internal val ColorScheme.defaultButtonColors: ButtonColors
              get() {
                  return defaultButtonColorsCached
                      ?: ButtonColors(
                              containerColor = fromToken(FilledButtonTokens.ContainerColor),
                              contentColor = fromToken(FilledButtonTokens.LabelTextColor),
                              disabledContainerColor =
                                  fromToken(FilledButtonTokens.DisabledContainerColor)
                                      .copy(alpha = FilledButtonTokens.DisabledContainerOpacity),
                              disabledContentColor =
                                  fromToken(FilledButtonTokens.DisabledLabelTextColor)
                                      .copy(alpha = FilledButtonTokens.DisabledLabelTextOpacity),
                          )
                          .also { defaultButtonColorsCached = it }
              }

          /**
           * Creates a [ButtonColors] that represents the default container and content colors used in an
           * [ElevatedButton].
           */
          @Composable
          public fun elevatedButtonColors(): ButtonColors =
              MaterialTheme.colorScheme.defaultElevatedButtonColors
  - id: live-androidx-material3-material3-material3-button-lines-1255-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1255
    endLine: 1289
    sha256: 1b4a3f8bdcaea9c6b3cf04a72f2344275a8b6d1bdc82d5be9039383907123e35
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /**
           * Creates a [ButtonColors] that represents the default container and content colors used in an
           * [ElevatedButton].
           *
           * @param containerColor the container color of this [ElevatedButton] when enabled
           * @param contentColor the content color of this [ElevatedButton] when enabled
           * @param disabledContainerColor the container color of this [ElevatedButton] when not enabled
           * @param disabledContentColor the content color of this [ElevatedButton] when not enabled
           */
          @Composable
          public fun elevatedButtonColors(
              containerColor: Color = Color.Unspecified,
              contentColor: Color = Color.Unspecified,
              disabledContainerColor: Color = Color.Unspecified,
              disabledContentColor: Color = Color.Unspecified,
          ): ButtonColors =
              MaterialTheme.colorScheme.defaultElevatedButtonColors.copy(
                  containerColor = containerColor,
                  contentColor = contentColor,
                  disabledContainerColor = disabledContainerColor,
                  disabledContentColor = disabledContentColor,
              )

          internal val ColorScheme.defaultElevatedButtonColors: ButtonColors
              get() {
                  return defaultElevatedButtonColorsCached
                      ?: ButtonColors(
                              containerColor = fromToken(ElevatedButtonTokens.ContainerColor),
                              contentColor = fromToken(ElevatedButtonTokens.LabelTextColor),
                              disabledContainerColor =
                                  fromToken(ElevatedButtonTokens.DisabledContainerColor)
                                      .copy(alpha = ElevatedButtonTokens.DisabledContainerOpacity),
                              disabledContentColor =
                                  fromToken(ElevatedButtonTokens.DisabledLabelTextColor)
  - id: live-androidx-material3-material3-material3-button-lines-1290-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1290
    endLine: 1324
    sha256: 354b00aa29c14b4a10fed1fc8597530b3952c2f29366ada7dc579e94b93fe3b1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                      .copy(alpha = ElevatedButtonTokens.DisabledLabelTextOpacity),
                          )
                          .also { defaultElevatedButtonColorsCached = it }
              }

          /**
           * Creates a [ButtonColors] that represents the default container and content colors used in an
           * [FilledTonalButton].
           */
          @Composable
          public fun filledTonalButtonColors(): ButtonColors =
              MaterialTheme.colorScheme.defaultFilledTonalButtonColors

          /**
           * Creates a [ButtonColors] that represents the default container and content colors used in an
           * [FilledTonalButton].
           *
           * @param containerColor the container color of this [FilledTonalButton] when enabled
           * @param contentColor the content color of this [FilledTonalButton] when enabled
           * @param disabledContainerColor the container color of this [FilledTonalButton] when not
           *   enabled
           * @param disabledContentColor the content color of this [FilledTonalButton] when not enabled
           */
          @Composable
          public fun filledTonalButtonColors(
              containerColor: Color = Color.Unspecified,
              contentColor: Color = Color.Unspecified,
              disabledContainerColor: Color = Color.Unspecified,
              disabledContentColor: Color = Color.Unspecified,
          ): ButtonColors =
              MaterialTheme.colorScheme.defaultFilledTonalButtonColors.copy(
                  containerColor = containerColor,
                  contentColor = contentColor,
                  disabledContainerColor = disabledContainerColor,
                  disabledContentColor = disabledContentColor,
  - id: live-androidx-material3-material3-material3-button-lines-1325-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1325
    endLine: 1359
    sha256: 52828bcc93708763d67386fe17c88902c894b0e06a5c4acf6e2da1ed88d28177
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              )

          internal val ColorScheme.defaultFilledTonalButtonColors: ButtonColors
              get() {
                  return defaultFilledTonalButtonColorsCached
                      ?: ButtonColors(
                              containerColor = fromToken(FilledTonalButtonTokens.ContainerColor),
                              contentColor = fromToken(FilledTonalButtonTokens.LabelTextColor),
                              disabledContainerColor =
                                  fromToken(FilledTonalButtonTokens.DisabledContainerColor)
                                      .copy(alpha = FilledTonalButtonTokens.DisabledContainerOpacity),
                              disabledContentColor =
                                  fromToken(FilledTonalButtonTokens.DisabledLabelTextColor)
                                      .copy(alpha = FilledTonalButtonTokens.DisabledLabelTextOpacity),
                          )
                          .also { defaultFilledTonalButtonColorsCached = it }
              }

          /**
           * Creates a [ButtonColors] that represents the default container and content colors used in an
           * [OutlinedButton].
           */
          @Composable
          public fun outlinedButtonColors(): ButtonColors =
              MaterialTheme.colorScheme.defaultOutlinedButtonColors

          /**
           * Creates a [ButtonColors] that represents the default container and content colors used in an
           * [OutlinedButton].
           *
           * @param containerColor the container color of this [OutlinedButton] when enabled
           * @param contentColor the content color of this [OutlinedButton] when enabled
           * @param disabledContainerColor the container color of this [OutlinedButton] when not enabled
           * @param disabledContentColor the content color of this [OutlinedButton] when not enabled
           */
  - id: live-androidx-material3-material3-material3-button-lines-1360-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1360
    endLine: 1394
    sha256: 545a81c5b4a5fca6154b47f5b2f9499779715be80e62d5fefd9e0c0b0e8ceafd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          @Composable
          public fun outlinedButtonColors(
              containerColor: Color = Color.Unspecified,
              contentColor: Color = Color.Unspecified,
              disabledContainerColor: Color = Color.Unspecified,
              disabledContentColor: Color = Color.Unspecified,
          ): ButtonColors =
              MaterialTheme.colorScheme.defaultOutlinedButtonColors.copy(
                  containerColor = containerColor,
                  contentColor = contentColor,
                  disabledContainerColor = disabledContainerColor,
                  disabledContentColor = disabledContentColor,
              )

          internal val ColorScheme.defaultOutlinedButtonColors: ButtonColors
              get() {
                  return defaultOutlinedButtonColorsCached
                      ?: ButtonColors(
                              containerColor = Color.Transparent,
                              contentColor = fromToken(OutlinedButtonTokens.LabelTextColor),
                              disabledContainerColor = Color.Transparent,
                              disabledContentColor =
                                  fromToken(OutlinedButtonTokens.DisabledLabelTextColor)
                                      .copy(alpha = OutlinedButtonTokens.DisabledLabelTextOpacity),
                          )
                          .also { defaultOutlinedButtonColorsCached = it }
              }

          /**
           * Creates a [ButtonColors] that represents the default container and content colors used in a
           * [TextButton].
           */
          @Composable
          public fun textButtonColors(): ButtonColors = MaterialTheme.colorScheme.defaultTextButtonColors
  - id: live-androidx-material3-material3-material3-button-lines-1395-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1395
    endLine: 1429
    sha256: 5a45cf4904e4b4af8aadd4ff0c7b26caa95d87338fb528b6aab9a90474f5e10f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /**
           * Creates a [ButtonColors] that represents the default container and content colors used in a
           * [TextButton].
           *
           * @param containerColor the container color of this [TextButton] when enabled
           * @param contentColor the content color of this [TextButton] when enabled
           * @param disabledContainerColor the container color of this [TextButton] when not enabled
           * @param disabledContentColor the content color of this [TextButton] when not enabled
           */
          @Composable
          public fun textButtonColors(
              containerColor: Color = Color.Unspecified,
              contentColor: Color = Color.Unspecified,
              disabledContainerColor: Color = Color.Unspecified,
              disabledContentColor: Color = Color.Unspecified,
          ): ButtonColors =
              MaterialTheme.colorScheme.defaultTextButtonColors.copy(
                  containerColor = containerColor,
                  contentColor = contentColor,
                  disabledContainerColor = disabledContainerColor,
                  disabledContentColor = disabledContentColor,
              )

          internal val ColorScheme.defaultTextButtonColors: ButtonColors
              get() {
                  return defaultTextButtonColorsCached
                      ?: ButtonColors(
                              containerColor = Color.Transparent,
                              // TODO replace with the token value once it's corrected
                              contentColor = fromToken(ColorSchemeKeyTokens.Primary),
                              disabledContainerColor = Color.Transparent,
                              disabledContentColor =
                                  fromToken(TextButtonTokens.DisabledLabelColor)
                                      .copy(alpha = TextButtonTokens.DisabledLabelOpacity),
                          )
  - id: live-androidx-material3-material3-material3-button-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 141
    endLine: 175
    sha256: 746a46f8e8edbabbcb395d55b93b5bf836dfbbab8bfce44416205853173ba7b3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          shape: Shape = ButtonDefaults.shape,
          colors: ButtonColors = ButtonDefaults.buttonColors(),
          elevation: ButtonElevation? = ButtonDefaults.buttonElevation(),
          border: BorderStroke? = null,
          contentPadding: PaddingValues = ButtonDefaults.ContentPadding,
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          val containerColor = colors.containerColor(enabled)
          val contentColor = colors.contentColor(enabled)
          val shadowElevation = elevation?.shadowElevation(enabled, interactionSource)?.value ?: 0.dp
          Surface(
              onClick = onClick,
              modifier = modifier.semantics { role = Role.Button },
              enabled = enabled,
              shape = shape,
              color = containerColor,
              contentColor = contentColor,
              shadowElevation = shadowElevation,
              border = border,
              interactionSource = interactionSource,
          ) {
              ProvideContentColorTextStyle(
                  contentColor = contentColor,
                  textStyle = MaterialTheme.typography.labelLarge,
              ) {
                  Row(
                      Modifier.defaultMinSize(
                              minWidth = ButtonDefaults.MinWidth,
                              minHeight = ButtonDefaults.MinHeight,
                          )
  - id: live-androidx-material3-material3-material3-button-lines-1430-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1430
    endLine: 1464
    sha256: 5cea2d5512dc71047370b5f4b6b2091d9a0acd56bb874c1820e35c9659b162c8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          .also { defaultTextButtonColorsCached = it }
              }

          /**
           * Creates a [ButtonElevation] that will animate between the provided values according to the
           * Material specification for a [Button].
           *
           * @param defaultElevation the elevation used when the [Button] is enabled, and has no other
           *   [Interaction]s.
           * @param pressedElevation the elevation used when this [Button] is enabled and pressed.
           * @param focusedElevation the elevation used when the [Button] is enabled and focused.
           * @param hoveredElevation the elevation used when the [Button] is enabled and hovered.
           * @param disabledElevation the elevation used when the [Button] is not enabled.
           */
          @Composable
          public fun buttonElevation(
              defaultElevation: Dp = FilledButtonTokens.ContainerElevation,
              pressedElevation: Dp = FilledButtonTokens.PressedContainerElevation,
              focusedElevation: Dp = FilledButtonTokens.FocusedContainerElevation,
              hoveredElevation: Dp = FilledButtonTokens.HoveredContainerElevation,
              disabledElevation: Dp = FilledButtonTokens.DisabledContainerElevation,
          ): ButtonElevation =
              ButtonElevation(
                  defaultElevation = defaultElevation,
                  pressedElevation = pressedElevation,
                  focusedElevation = focusedElevation,
                  hoveredElevation = hoveredElevation,
                  disabledElevation = disabledElevation,
              )

          /**
           * Creates a [ButtonElevation] that will animate between the provided values according to the
           * Material specification for a [ElevatedButton].
           *
           * @param defaultElevation the elevation used when the [ElevatedButton] is enabled, and has no
  - id: live-androidx-material3-material3-material3-button-lines-1465-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1465
    endLine: 1499
    sha256: dc1d3f238765e8237303dd619aa63e949bea1483b0c588037e745b3362eb4ed1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *   other [Interaction]s.
           * @param pressedElevation the elevation used when this [ElevatedButton] is enabled and pressed.
           * @param focusedElevation the elevation used when the [ElevatedButton] is enabled and focused.
           * @param hoveredElevation the elevation used when the [ElevatedButton] is enabled and hovered.
           * @param disabledElevation the elevation used when the [ElevatedButton] is not enabled.
           */
          @Composable
          public fun elevatedButtonElevation(
              defaultElevation: Dp = ElevatedButtonTokens.ContainerElevation,
              pressedElevation: Dp = ElevatedButtonTokens.PressedContainerElevation,
              focusedElevation: Dp = ElevatedButtonTokens.FocusedContainerElevation,
              hoveredElevation: Dp = ElevatedButtonTokens.HoveredContainerElevation,
              disabledElevation: Dp = ElevatedButtonTokens.DisabledContainerElevation,
          ): ButtonElevation =
              ButtonElevation(
                  defaultElevation = defaultElevation,
                  pressedElevation = pressedElevation,
                  focusedElevation = focusedElevation,
                  hoveredElevation = hoveredElevation,
                  disabledElevation = disabledElevation,
              )

          /**
           * Creates a [ButtonElevation] that will animate between the provided values according to the
           * Material specification for a [FilledTonalButton].
           *
           * @param defaultElevation the elevation used when the [FilledTonalButton] is enabled, and has
           *   no other [Interaction]s.
           * @param pressedElevation the elevation used when this [FilledTonalButton] is enabled and
           *   pressed.
           * @param focusedElevation the elevation used when the [FilledTonalButton] is enabled and
           *   focused.
           * @param hoveredElevation the elevation used when the [FilledTonalButton] is enabled and
           *   hovered.
           * @param disabledElevation the elevation used when the [FilledTonalButton] is not enabled.
  - id: live-androidx-material3-material3-material3-button-lines-1500-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1500
    endLine: 1534
    sha256: 31bce5491d5284192b42af1bc35c6a1f22988628b5093d65b02456ec48e1183f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          @Composable
          public fun filledTonalButtonElevation(
              defaultElevation: Dp = FilledTonalButtonTokens.ContainerElevation,
              pressedElevation: Dp = FilledTonalButtonTokens.PressedContainerElevation,
              focusedElevation: Dp = FilledTonalButtonTokens.FocusContainerElevation,
              hoveredElevation: Dp = FilledTonalButtonTokens.HoverContainerElevation,
              disabledElevation: Dp = 0.dp,
          ): ButtonElevation =
              ButtonElevation(
                  defaultElevation = defaultElevation,
                  pressedElevation = pressedElevation,
                  focusedElevation = focusedElevation,
                  hoveredElevation = hoveredElevation,
                  disabledElevation = disabledElevation,
              )

          /** The default [BorderStroke] used by [OutlinedButton]. */
          public val outlinedButtonBorder: BorderStroke
              @Composable
              @Deprecated(
                  message =
                      "Please use the version that takes an `enabled` param to get the " +
                          "`BorderStroke` with the correct opacity",
                  replaceWith = ReplaceWith("outlinedButtonBorder(enabled)"),
              )
              get() =
                  BorderStroke(
                      width = ButtonSmallTokens.OutlinedOutlineWidth,
                      color = OutlinedButtonTokens.OutlineColor.value,
                  )

          /**
           * The default [BorderStroke] used by [OutlinedButton].
           *
  - id: live-androidx-material3-material3-material3-button-lines-1535-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1535
    endLine: 1569
    sha256: 5551ab6671be1bfe7d389f79adfec145317343fa5bc5d805c9b137fa6c19162f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param enabled whether the button is enabled
           */
          @Composable
          public fun outlinedButtonBorder(enabled: Boolean = true): BorderStroke =
              BorderStroke(
                  width = ButtonSmallTokens.OutlinedOutlineWidth,
                  color =
                      if (enabled) {
                          OutlinedButtonTokens.OutlineColor.value
                      } else {
                          OutlinedButtonTokens.OutlineColor.value.copy(
                              alpha = OutlinedButtonTokens.DisabledContainerOpacity
                          )
                      },
              )

          /**
           * Recommended [ButtonShapes] for a provided button height.
           *
           * @param buttonHeight The height of the button
           */
          @Composable
          public fun shapesFor(buttonHeight: Dp): ButtonShapes {
              val xSmallHeight = ExtraSmallContainerHeight
              val smallHeight = MinHeight
              val mediumHeight = MediumContainerHeight
              val largeHeight = LargeContainerHeight
              val xLargeHeight = ExtraLargeContainerHeight
              return when {
                  buttonHeight <= (xSmallHeight + smallHeight) / 2 ->
                      shapes(shape = shape, pressedShape = extraSmallPressedShape)
                  buttonHeight <= (smallHeight + mediumHeight) / 2 -> shapes()
                  buttonHeight <= (mediumHeight + largeHeight) / 2 ->
                      shapes(shape = shape, pressedShape = mediumPressedShape)
                  buttonHeight <= (largeHeight + xLargeHeight) / 2 ->
  - id: live-androidx-material3-material3-material3-button-lines-1570-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1570
    endLine: 1604
    sha256: 8ed7cce299e4d036b01434a1e8a1aa9ee6d757d9e536a2369c56e608c61912e6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      shapes(shape = shape, pressedShape = largePressedShape)
                  else -> shapes(shape = shape, pressedShape = extraLargePressedShape)
              }
          }

          /**
           * Recommended [PaddingValues] for a provided button height.
           *
           * The returned content padding is based on the ButtonDefaults.<Size>ContainerHeight (or
           * ButtonDefaults.MinHeight for a small button) height values and is not directly interpolated
           * from the provided buttonHeight (e.g. any buttonHeight equal or bigger than
           * ButtonDefaults.MinHeight and smaller than ButtonDefaults.MediumContainerHeight will return
           * the same small content padding).
           *
           * @param buttonHeight The height of the button
           * @param hasStartIcon Whether the button has a leading icon
           * @param hasEndIcon Whether the button has a trailing icon
           */
          public fun contentPaddingFor(
              buttonHeight: Dp,
              hasStartIcon: Boolean = false,
              hasEndIcon: Boolean = false,
          ): PaddingValues {
              val smallHeight = MinHeight
              val mediumHeight = MediumContainerHeight
              val largeHeight = LargeContainerHeight
              val xLargeHeight = ExtraLargeContainerHeight
              return when {
                  buttonHeight < smallHeight -> ExtraSmallContentPadding
                  buttonHeight < mediumHeight -> getSmallContentPadding(hasStartIcon, hasEndIcon)
                  buttonHeight < largeHeight -> getMediumContentPadding(hasStartIcon, hasEndIcon)
                  buttonHeight < xLargeHeight -> getLargeContentPadding(hasStartIcon, hasEndIcon)
                  else -> ExtraLargeContentPadding
              }
          }
  - id: live-androidx-material3-material3-material3-button-lines-1605-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1605
    endLine: 1639
    sha256: d718ac909010b508222d64b58c9c21d4c12fb7096c5f18505bb1b56bc25585a5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /**
           * Recommended Icon size for a provided button height.
           *
           * @param buttonHeight The height of the button
           */
          public fun iconSizeFor(buttonHeight: Dp): Dp {
              val smallHeight = MinHeight
              val mediumHeight = MediumContainerHeight
              val largeHeight = LargeContainerHeight
              val xLargeHeight = ExtraLargeContainerHeight
              return when {
                  buttonHeight < smallHeight -> ExtraSmallIconSize
                  buttonHeight < mediumHeight -> SmallIconSize
                  buttonHeight < largeHeight -> MediumIconSize
                  buttonHeight < xLargeHeight -> LargeIconSize
                  else -> ExtraLargeIconSize
              }
          }

          /**
           * Recommended spacing after an [Icon] for a provided button height.
           *
           * @param buttonHeight The height of the button
           */
          public fun iconSpacingFor(buttonHeight: Dp): Dp {
              val smallHeight = MinHeight
              val mediumHeight = MediumContainerHeight
              val largeHeight = LargeContainerHeight
              val xLargeHeight = ExtraLargeContainerHeight
              return when {
                  buttonHeight < smallHeight -> ExtraSmallIconSpacing
                  buttonHeight < mediumHeight -> IconSpacing
                  buttonHeight < largeHeight -> MediumIconSpacing
                  buttonHeight < xLargeHeight -> LargeIconSpacing
  - id: live-androidx-material3-material3-material3-button-lines-1640-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1640
    endLine: 1674
    sha256: 72e1d12978ac6c62c73cba979f1a70fbddfd5cba341488426179ad8e2d4edb9c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  else -> ExtraLargeIconSpacing
              }
          }

          /**
           * Recommended [TextStyle] for a [Text] provided a button height.
           *
           * @param buttonHeight The height of the button
           */
          @Composable
          public fun textStyleFor(buttonHeight: Dp): TextStyle {
              val mediumHeight = MediumContainerHeight
              val largeHeight = LargeContainerHeight
              val xLargeHeight = ExtraLargeContainerHeight
              return when {
                  buttonHeight < mediumHeight -> MaterialTheme.typography.labelLarge
                  buttonHeight < largeHeight -> MaterialTheme.typography.titleMedium
                  buttonHeight < xLargeHeight -> MaterialTheme.typography.headlineSmall
                  else -> MaterialTheme.typography.headlineLarge
              }
          }

          private val smallVerticalPadding
              get() = if (shouldUsePrecisionPointerComponentSizing.value) 8.dp else 10.dp

          private val iconSmallHorizontalPadding
              get() = if (shouldUsePrecisionPointerComponentSizing.value) 12.dp else SmallStartPadding

          private val MediumLeadingPadding = ButtonMediumTokens.LeadingSpace
          private val MediumTrailingPadding = ButtonMediumTokens.TrailingSpace
          private val MediumVerticalPadding = 16.dp
          private val IconMediumLeadingPadding = ButtonMediumTokens.LeadingSpace
          private val IconMediumTrailingPadding = ButtonMediumTokens.TrailingSpace
          private val LargeVerticalPadding = 32.dp
          private val LargeLeadingPadding = ButtonLargeTokens.LeadingSpace
  - id: live-androidx-material3-material3-material3-button-lines-1675-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1675
    endLine: 1709
    sha256: e3e57db91a72bdf5d04834b5c7a6aef50af8260cb4ad076a3bea5765dd043024
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          private val LargeTrailingPadding = ButtonLargeTokens.TrailingSpace
          private val IconLargeLeadingPadding = ButtonLargeTokens.LeadingSpace
          private val IconLargeTrailingPadding = ButtonLargeTokens.TrailingSpace
      }

      /**
       * Represents the elevation for a button in different states.
       * - See [ButtonDefaults.buttonElevation] for the default elevation used in a [Button].
       * - See [ButtonDefaults.elevatedButtonElevation] for the default elevation used in a
       *   [ElevatedButton].
       */
      @Stable
      public class ButtonElevation
      internal constructor(
          private val defaultElevation: Dp,
          private val pressedElevation: Dp,
          private val focusedElevation: Dp,
          private val hoveredElevation: Dp,
          private val disabledElevation: Dp,
      ) {
          /**
           * Represents the shadow elevation used in a button, depending on its [enabled] state and
           * [interactionSource].
           *
           * Shadow elevation is used to apply a shadow around the button to give it higher emphasis.
           *
           * @param enabled whether the button is enabled
           * @param interactionSource the [InteractionSource] for this button
           */
          @Composable
          internal fun shadowElevation(
              enabled: Boolean,
              interactionSource: InteractionSource,
          ): State<Dp> {
              return animateElevation(enabled = enabled, interactionSource = interactionSource)
  - id: live-androidx-material3-material3-material3-button-lines-1710-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1710
    endLine: 1744
    sha256: aa84202182e7d1e52e35d0dcf57e38348f0af3c38dff3cb69b1e22352e8808b0
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
                      }
                  }
              }
  - id: live-androidx-material3-material3-material3-button-lines-1745-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1745
    endLine: 1779
    sha256: abba84d00f06a70516f7bbaabc123151e8e3d5eadae1dec96e8cb26a1679c9c1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              val interaction = interactions.lastOrNull()

              val target =
                  if (!enabled) {
                      disabledElevation
                  } else {
                      when (interaction) {
                          is PressInteraction.Press -> pressedElevation
                          is HoverInteraction.Enter -> hoveredElevation
                          is FocusInteraction.Focus -> focusedElevation
                          else -> defaultElevation
                      }
                  }

              val animatable = remember { Animatable(target, Dp.VectorConverter) }

              LaunchedEffect(target) {
                  if (animatable.targetValue != target) {
                      if (!enabled) {
                          // No transition when moving to a disabled state
                          animatable.snapTo(target)
                      } else {
                          val lastInteraction =
                              when (animatable.targetValue) {
                                  pressedElevation -> PressInteraction.Press(Offset.Zero)
                                  hoveredElevation -> HoverInteraction.Enter()
                                  focusedElevation -> FocusInteraction.Focus()
                                  else -> null
                              }
                          animatable.animateElevation(
                              from = lastInteraction,
                              to = interaction,
                              target = target,
                          )
  - id: live-androidx-material3-material3-material3-button-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 176
    endLine: 210
    sha256: 552ad8f9972c6b94dc8256c8219b640be58a51360e329244d5d23061e1c07aaf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          .padding(contentPadding),
                      horizontalArrangement = Arrangement.Center,
                      verticalAlignment = Alignment.CenterVertically,
                      content = content,
                  )
              }
          }
      }

      // TODO add link to image of pressed button
      /**
       * [Material Design button](https://m3.material.io/components/buttons/overview)
       *
       * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
       * post. It also morphs between the shapes provided in [shapes] depending on the state of the
       * interaction with the button as long as the shapes provided our [CornerBasedShape]s. If a shape in
       * [shapes] isn't a [CornerBasedShape], then button will change between the [ButtonShapes] according
       * to user interaction.
       *
       * ![Filled button
       * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-button.png)
       *
       * Filled buttons are high-emphasis buttons. Filled buttons have the most visual impact after the
       * [FloatingActionButton], and should be used for important, final actions that complete a flow,
       * like "Save", "Join now", or "Confirm".
       *
       * @sample androidx.compose.material3.samples.ButtonWithAnimatedShapeSample
       *
       * Choose the best button for an action based on the amount of emphasis it needs. The more important
       * an action is, the higher emphasis its button should be.
       * - See [OutlinedButton] for a medium-emphasis button with a border.
       * - See [ElevatedButton] for an [FilledTonalButton] with a shadow.
       * - See [TextButton] for a low-emphasis button with no border.
       * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
       *
  - id: live-androidx-material3-material3-material3-button-lines-1780-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1780
    endLine: 1814
    sha256: 41c62cd9e20ee29e9c8f00dd179b70aece710caa64fafa35ebbd3655d3b1acfe
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      }
                  }
              }

              return animatable.asState()
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is ButtonElevation) return false

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
              result = 31 * result + hoveredElevation.hashCode()
              result = 31 * result + disabledElevation.hashCode()
              return result
          }
      }

      /**
       * Represents the container and content colors used in a button in different states.
       *
       * @param containerColor the container color of this [Button] when enabled.
       * @param contentColor the content color of this [Button] when enabled.
  - id: live-androidx-material3-material3-material3-button-lines-1815-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1815
    endLine: 1849
    sha256: 313e5f10fedca37a77f3d2355ca1443387f381cc65dc8d88c44ed66f98f99a10
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param disabledContainerColor the container color of this [Button] when not enabled.
       * @param disabledContentColor the content color of this [Button] when not enabled.
       *     @constructor create an instance with arbitrary colors.
       * - See [ButtonDefaults.buttonColors] for the default colors used in a [Button].
       * - See [ButtonDefaults.elevatedButtonColors] for the default colors used in a [ElevatedButton].
       * - See [ButtonDefaults.textButtonColors] for the default colors used in a [TextButton].
       */
      @Immutable
      public class ButtonColors
      public constructor(
          public val containerColor: Color,
          public val contentColor: Color,
          public val disabledContainerColor: Color,
          public val disabledContentColor: Color,
      ) {
          /**
           * Returns a copy of this ButtonColors, optionally overriding some of the values. This uses the
           * Color.Unspecified to mean “use the value from the source”
           */
          public fun copy(
              containerColor: Color = this.containerColor,
              contentColor: Color = this.contentColor,
              disabledContainerColor: Color = this.disabledContainerColor,
              disabledContentColor: Color = this.disabledContentColor,
          ): ButtonColors =
              ButtonColors(
                  containerColor.takeOrElse { this.containerColor },
                  contentColor.takeOrElse { this.contentColor },
                  disabledContainerColor.takeOrElse { this.disabledContainerColor },
                  disabledContentColor.takeOrElse { this.disabledContentColor },
              )

          /**
           * Represents the container color for this button, depending on [enabled].
           *
  - id: live-androidx-material3-material3-material3-button-lines-1850-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1850
    endLine: 1884
    sha256: 2dd17e17895e661fc5494de3dacbf6e3223b708921b71b1bb8f23c8256629c8c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param enabled whether the button is enabled
           */
          @Stable
          internal fun containerColor(enabled: Boolean): Color =
              if (enabled) containerColor else disabledContainerColor

          /**
           * Represents the content color for this button, depending on [enabled].
           *
           * @param enabled whether the button is enabled
           */
          @Stable
          internal fun contentColor(enabled: Boolean): Color =
              if (enabled) contentColor else disabledContentColor

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is ButtonColors) return false

              if (containerColor != other.containerColor) return false
              if (contentColor != other.contentColor) return false
              if (disabledContainerColor != other.disabledContainerColor) return false
              if (disabledContentColor != other.disabledContentColor) return false

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
  - id: live-androidx-material3-material3-material3-button-lines-1885-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1885
    endLine: 1919
    sha256: 90e67540cf9bfbf4d7c911a334fe811a4c955e7e27381705d1eb5a2699503e6b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * The shapes that will be used in buttons. Button will morph between these shapes depending on the
       * interaction of the button, assuming all of the shapes are [CornerBasedShape]s.
       *
       * @property shape is the active shape.
       * @property pressedShape is the pressed shape.
       */
      @Immutable
      public class ButtonShapes(public val shape: Shape, public val pressedShape: Shape) {
          /** Returns a copy of this ButtonShapes, optionally overriding some of the values. */
          public fun copy(
              shape: Shape? = this.shape,
              pressedShape: Shape? = this.pressedShape,
          ): ButtonShapes =
              ButtonShapes(
                  shape = shape.takeOrElse { this.shape },
                  pressedShape = pressedShape.takeOrElse { this.pressedShape },
              )

          internal fun Shape?.takeOrElse(block: () -> Shape): Shape = this ?: block()

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is ButtonShapes) return false

              if (shape != other.shape) return false
              if (pressedShape != other.pressedShape) return false

              return true
          }

          override fun hashCode(): Int {
              var result = shape.hashCode()
              result = 31 * result + pressedShape.hashCode()
  - id: live-androidx-material3-material3-material3-button-lines-1920-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 1920
    endLine: 1950
    sha256: 140468e1587ef1f8a883342be428c67b6817d3d8bd2cb1c8417ebd6c54d31f5d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
      
              return result
          }
      }

      internal val ButtonShapes.hasRoundedCornerShapes: Boolean
          get() = shape is RoundedCornerShape && pressedShape is RoundedCornerShape

      internal val ButtonShapes.hasCornerBasedShapes: Boolean
          get() = shape is CornerBasedShape && pressedShape is CornerBasedShape

      @Composable
      private fun shapeByInteraction(
          shapes: ButtonShapes,
          pressed: Boolean,
          animationSpec: FiniteAnimationSpec<Float>,
      ): Shape {
          val shape =
              if (pressed) {
                  shapes.pressedShape
              } else {
                  shapes.shape
              }
          if (shapes.hasRoundedCornerShapes)
              return key(shapes) { rememberAnimatedShape(shape as RoundedCornerShape, animationSpec) }
          else if (shapes.hasCornerBasedShapes)
              return key(shapes) { rememberAnimatedShape(shape as CornerBasedShape, animationSpec) }

          return shape
      }
  - id: live-androidx-material3-material3-material3-button-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 211
    endLine: 245
    sha256: 41f9de8e3c765d683bb164d13203998e5725813c87db23aaa4871b4bfdabc224
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * The default text style for internal [Text] components will be set to [Typography.labelLarge].
       *
       * @param onClick called when this button is clicked
       * @param shapes the [ButtonShapes] that this button with morph between depending on the user's
       *   interaction with the button.
       * @param modifier the [Modifier] to be applied to this button
       * @param enabled controls the enabled state of this button. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
       *   states. See [ButtonDefaults.buttonColors].
       * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
       *   states. This controls the size of the shadow below the button. See
       *   [ButtonElevation.shadowElevation].
       * @param border the border to draw around the container of this button
       * @param contentPadding the spacing values to apply internally between the container and the
       *   content
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
       *   preview the button in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param content The content displayed on the button, expected to be text, icon or image.
       *
       * @material3expressive
       */
      @OptIn(ExperimentalMaterial3ExpressiveApi::class)
      @Composable
      public fun Button(
          onClick: () -> Unit,
          shapes: ButtonShapes,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          colors: ButtonColors = ButtonDefaults.buttonColors(),
          elevation: ButtonElevation? = ButtonDefaults.buttonElevation(),
          border: BorderStroke? = null,
  - id: live-androidx-material3-material3-material3-button-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 246
    endLine: 280
    sha256: 42de68b80c5d05a2a99e7a76c82f62eb19071c08a7dd856830cea3c118242b62
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          contentPadding: PaddingValues = ButtonDefaults.contentPaddingFor(ButtonDefaults.MinHeight),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          // TODO Load the motionScheme tokens from the component tokens file
          // MotionSchemeKeyTokens.DefaultEffects is intentional here to prevent
          // any bounce in this component.
          val defaultAnimationSpec = MotionSchemeKeyTokens.DefaultEffects.value<Float>()
          val pressed by interactionSource.collectIsPressedAsState()
          val containerColor = colors.containerColor(enabled)
          val contentColor = colors.contentColor(enabled)
          val shadowElevation = elevation?.shadowElevation(enabled, interactionSource)?.value ?: 0.dp
          val buttonShape = shapeByInteraction(shapes, pressed, defaultAnimationSpec)

          Surface(
              onClick = onClick,
              modifier = modifier.semantics { role = Role.Button },
              enabled = enabled,
              shape = buttonShape,
              color = containerColor,
              contentColor = contentColor,
              shadowElevation = shadowElevation,
              border = border,
              interactionSource = interactionSource,
          ) {
              ProvideContentColorTextStyle(
                  contentColor = contentColor,
                  textStyle = MaterialTheme.typography.labelLarge,
              ) {
                  Row(
                      Modifier.defaultMinSize(
                              minWidth = ButtonDefaults.MinWidth,
                              minHeight = ButtonDefaults.MinHeight,
  - id: live-androidx-material3-material3-material3-button-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 281
    endLine: 315
    sha256: f8e160ec952736396151f781cc302829bd616bf6dea26eeb2675623da129a73c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          )
                          .padding(contentPadding),
                      horizontalArrangement = Arrangement.Center,
                      verticalAlignment = Alignment.CenterVertically,
                      content = content,
                  )
              }
          }
      }

      /**
       * [Material Design elevated button](https://m3.material.io/components/buttons/overview)
       *
       * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
       * post.
       *
       * ![Elevated button
       * image](https://developer.android.com/images/reference/androidx/compose/material3/elevated-button.png)
       *
       * Elevated buttons are high-emphasis buttons that are essentially [FilledTonalButton]s with a
       * shadow. To prevent shadow creep, only use them when absolutely necessary, such as when the button
       * requires visual separation from patterned container.
       *
       * @sample androidx.compose.material3.samples.ElevatedButtonSample
       *
       * Choose the best button for an action based on the amount of emphasis it needs. The more important
       * an action is, the higher emphasis its button should be.
       * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
       * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
       * - See [OutlinedButton] for a medium-emphasis button with a border.
       * - See [TextButton] for a low-emphasis button with no border.
       *
       * The default text style for internal [Text] components will be set to [Typography.labelLarge].
       *
       * @param onClick called when this button is clicked
  - id: live-androidx-material3-material3-material3-button-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 316
    endLine: 350
    sha256: 9efdb47485e052c0e7583823ebaf2bb8632c80b63c3cefaef6e7c72efea83b6b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param modifier the [Modifier] to be applied to this button
       * @param enabled controls the enabled state of this button. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param shape defines the shape of this button's container, border (when [border] is not null),
       *   and shadow (when using [elevation])
       * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
       *   states. See [ButtonDefaults.elevatedButtonColors].
       * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
       *   states. This controls the size of the shadow below the button. Additionally, when the container
       *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
       *   overlay. See [ButtonDefaults.elevatedButtonElevation].
       * @param border the border to draw around the container of this button
       * @param contentPadding the spacing values to apply internally between the container and the
       *   content
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
       *   preview the button in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param content The content displayed on the button, expected to be text, icon or image.
       */
      @Composable
      public fun ElevatedButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          shape: Shape = ButtonDefaults.elevatedShape,
          colors: ButtonColors = ButtonDefaults.elevatedButtonColors(),
          elevation: ButtonElevation? = ButtonDefaults.elevatedButtonElevation(),
          border: BorderStroke? = null,
          contentPadding: PaddingValues = ButtonDefaults.ContentPadding,
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ): Unit =
          Button(
  - id: live-androidx-material3-material3-material3-button-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 351
    endLine: 385
    sha256: fc3d5ce157c56e44d8add66152260ec9619c7b8e62356d602a701c1c6c758c61
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              onClick = onClick,
              modifier = modifier,
              enabled = enabled,
              shape = shape,
              colors = colors,
              elevation = elevation,
              border = border,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
              content = content,
          )

      // TODO add link to image of pressed elevated button
      /**
       * [Material Design elevated button](https://m3.material.io/components/buttons/overview)
       *
       * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
       * post. It also morphs between the shapes provided in [shapes] depending on the state of the
       * interaction with the button as long as the shapes provided our [CornerBasedShape]s. If a shape in
       * [shapes] isn't a [CornerBasedShape], then button will change between the [ButtonShapes] according
       * to user interaction.
       *
       * ![Elevated button
       * image](https://developer.android.com/images/reference/androidx/compose/material3/elevated-button.png)
       *
       * Elevated buttons are high-emphasis buttons that are essentially [FilledTonalButton]s with a
       * shadow. To prevent shadow creep, only use them when absolutely necessary, such as when the button
       * requires visual separation from patterned container.
       *
       * @sample androidx.compose.material3.samples.ElevatedButtonWithAnimatedShapeSample
       *
       * Choose the best button for an action based on the amount of emphasis it needs. The more important
       * an action is, the higher emphasis its button should be.
       * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
       * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
  - id: live-androidx-material3-material3-material3-button-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 36
    endLine: 70
    sha256: 7786403d4507f58fb2dd710c9157cfe6523598d2186962f8ff570ae7769ea3fb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.foundation.shape.CornerBasedShape
      import androidx.compose.foundation.shape.RoundedCornerShape
      import androidx.compose.material3.internal.ProvideContentColorTextStyle
      import androidx.compose.material3.internal.animateElevation
      import androidx.compose.material3.internal.rememberAnimatedShape
      import androidx.compose.material3.tokens.BaselineButtonTokens
      import androidx.compose.material3.tokens.ButtonLargeTokens
      import androidx.compose.material3.tokens.ButtonMediumTokens
      import androidx.compose.material3.tokens.ButtonSmallTokens
      import androidx.compose.material3.tokens.ButtonXLargeTokens
      import androidx.compose.material3.tokens.ButtonXSmallTokens
      import androidx.compose.material3.tokens.ColorSchemeKeyTokens
      import androidx.compose.material3.tokens.ElevatedButtonTokens
      import androidx.compose.material3.tokens.FilledButtonTokens
      import androidx.compose.material3.tokens.FilledTonalButtonTokens
      import androidx.compose.material3.tokens.MotionSchemeKeyTokens
      import androidx.compose.material3.tokens.OutlinedButtonTokens
      import androidx.compose.material3.tokens.TextButtonTokens
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.LaunchedEffect
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.State
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.key
      import androidx.compose.runtime.mutableStateListOf
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.graphics.takeOrElse
      import androidx.compose.ui.semantics.Role
      import androidx.compose.ui.semantics.role
  - id: live-androidx-material3-material3-material3-button-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 386
    endLine: 420
    sha256: 660a834bc66fe701857964a2e5c8c485dc2b4da09cfa3c7ff6e46f544fedf7fe
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * - See [OutlinedButton] for a medium-emphasis button with a border.
       * - See [TextButton] for a low-emphasis button with no border.
       *
       * The default text style for internal [Text] components will be set to [Typography.labelLarge].
       *
       * @param onClick called when this button is clicked
       * @param shapes the [ButtonShapes] that this button with morph between depending on the user's
       *   interaction with the button.
       * @param modifier the [Modifier] to be applied to this button
       * @param enabled controls the enabled state of this button. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
       *   states. See [ButtonDefaults.elevatedButtonColors].
       * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
       *   states. This controls the size of the shadow below the button. Additionally, when the container
       *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
       *   overlay. See [ButtonDefaults.elevatedButtonElevation].
       * @param border the border to draw around the container of this button
       * @param contentPadding the spacing values to apply internally between the container and the
       *   content
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
       *   preview the button in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param content The content displayed on the button, expected to be text, icon or image.
       *
       * @material3expressive
       */
      @OptIn(ExperimentalMaterial3ExpressiveApi::class)
      @Composable
      public fun ElevatedButton(
          onClick: () -> Unit,
          shapes: ButtonShapes,
          modifier: Modifier = Modifier,
  - id: live-androidx-material3-material3-material3-button-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 421
    endLine: 455
    sha256: 054ee7de53aebfe6afcf4e6b848ad478c64e79f46c54d93682482123c5f192ac
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          enabled: Boolean = true,
          colors: ButtonColors = ButtonDefaults.elevatedButtonColors(),
          elevation: ButtonElevation? = ButtonDefaults.elevatedButtonElevation(),
          border: BorderStroke? = null,
          contentPadding: PaddingValues = ButtonDefaults.contentPaddingFor(ButtonDefaults.MinHeight),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ): Unit =
          Button(
              onClick = onClick,
              shapes = shapes,
              modifier = modifier,
              enabled = enabled,
              colors = colors,
              elevation = elevation,
              border = border,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
              content = content,
          )

      /**
       * [Material Design filled tonal button](https://m3.material.io/components/buttons/overview)
       *
       * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
       * post.
       *
       * ![Filled tonal button
       * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-tonal-button.png)
       *
       * Filled tonal buttons are medium-emphasis buttons that is an alternative middle ground between
       * default [Button]s (filled) and [OutlinedButton]s. They can be used in contexts where
       * lower-priority button requires slightly more emphasis than an outline would give, such as "Next"
       * in an onboarding flow. Tonal buttons use the secondary color mapping.
       *
  - id: live-androidx-material3-material3-material3-button-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 456
    endLine: 490
    sha256: 0ee91b48d897a71a4e2e5584e736664ed0d13c1471f794f5f55376727b3d0caf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @sample androidx.compose.material3.samples.FilledTonalButtonSample
       *
       * Choose the best button for an action based on the amount of emphasis it needs. The more important
       * an action is, the higher emphasis its button should be.
       * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
       * - See [ElevatedButton] for a [FilledTonalButton] with a shadow.
       * - See [OutlinedButton] for a medium-emphasis button with a border.
       * - See [TextButton] for a low-emphasis button with no border.
       *
       * The default text style for internal [Text] components will be set to [Typography.labelLarge].
       *
       * @param onClick called when this button is clicked
       * @param modifier the [Modifier] to be applied to this button
       * @param enabled controls the enabled state of this button. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param shape defines the shape of this button's container, border (when [border] is not null),
       *   and shadow (when using [elevation])
       * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
       *   states. See [ButtonDefaults.filledTonalButtonColors].
       * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
       *   states. This controls the size of the shadow below the button. Additionally, when the container
       *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
       *   overlay.
       * @param border the border to draw around the container of this button
       * @param contentPadding the spacing values to apply internally between the container and the
       *   content
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
       *   preview the button in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param content The content displayed on the button, expected to be text, icon or image.
       */
      @Composable
      public fun FilledTonalButton(
  - id: live-androidx-material3-material3-material3-button-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 491
    endLine: 525
    sha256: 1578c3040a41f909de646b03a1819076229eb8118afd922811f5aef71555e73b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          shape: Shape = ButtonDefaults.filledTonalShape,
          colors: ButtonColors = ButtonDefaults.filledTonalButtonColors(),
          elevation: ButtonElevation? = ButtonDefaults.filledTonalButtonElevation(),
          border: BorderStroke? = null,
          contentPadding: PaddingValues = ButtonDefaults.ContentPadding,
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ): Unit =
          Button(
              onClick = onClick,
              modifier = modifier,
              enabled = enabled,
              shape = shape,
              colors = colors,
              elevation = elevation,
              border = border,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
              content = content,
          )

      // TODO add link to image of pressed filled tonal button
      /**
       * [Material Design filled tonal button](https://m3.material.io/components/buttons/overview)
       *
       * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
       * post. It also morphs between the shapes provided in [shapes] depending on the state of the
       * interaction with the button as long as the shapes provided our [CornerBasedShape]s. If a shape in
       * [shapes] isn't a [CornerBasedShape], then button will change between the [ButtonShapes] according
       * to user interaction.
       *
       * ![Filled tonal button
  - id: live-androidx-material3-material3-material3-button-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 526
    endLine: 557
    sha256: be9218f9cf88b351042a292482ab47b31680d2523f5623154d75963e905c9b81
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-tonal-button.png)
       *
       * Filled tonal buttons are medium-emphasis buttons that is an alternative middle ground between
       * default [Button]s (filled) and [OutlinedButton]s. They can be used in contexts where
       * lower-priority button requires slightly more emphasis than an outline would give, such as "Next"
       * in an onboarding flow. Tonal buttons use the secondary color mapping.
       *
       * @sample androidx.compose.material3.samples.FilledTonalButtonWithAnimatedShapeSample
       *
       * Choose the best button for an action based on the amount of emphasis it needs. The more important
       * an action is, the higher emphasis its button should be.
       * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
       * - See [ElevatedButton] for a [FilledTonalButton] with a shadow.
       * - See [OutlinedButton] for a medium-emphasis button with a border.
       * - See [TextButton] for a low-emphasis button with no border.
       *
       * The default text style for internal [Text] components will be set to [Typography.labelLarge].
       *
       * @param onClick called when this button is clicked
       * @param shapes the [ButtonShapes] that this button with morph between depending on the user's
       *   interaction with the button.
       * @param modifier the [Modifier] to be applied to this button
       * @param enabled controls the enabled state of this button. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
       *   states. See [ButtonDefaults.filledTonalButtonColors].
       * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
       *   states. This controls the size of the shadow below the button. Additionally, when the container
       *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
       *   overlay.
       * @param border the border to draw around the container of this button
  - id: live-androidx-material3-material3-material3-button-lines-558-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 558
    endLine: 592
    sha256: 63c1c4f19ba3db7ed261023ffdb2e3945f938cf30d40b1d6458d8f5ef119893f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param contentPadding the spacing values to apply internally between the container and the
       *   content
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
       *   preview the button in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param content The content displayed on the button, expected to be text, icon or image.
       *
       * @material3expressive
       */
      @OptIn(ExperimentalMaterial3ExpressiveApi::class)
      @Composable
      public fun FilledTonalButton(
          onClick: () -> Unit,
          shapes: ButtonShapes,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          colors: ButtonColors = ButtonDefaults.filledTonalButtonColors(),
          elevation: ButtonElevation? = ButtonDefaults.filledTonalButtonElevation(),
          border: BorderStroke? = null,
          contentPadding: PaddingValues = ButtonDefaults.contentPaddingFor(ButtonDefaults.MinHeight),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ): Unit =
          Button(
              onClick = onClick,
              shapes = shapes,
              modifier = modifier,
              enabled = enabled,
              colors = colors,
              elevation = elevation,
              border = border,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
              content = content,
  - id: live-androidx-material3-material3-material3-button-lines-593-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 593
    endLine: 627
    sha256: 19ec9e3f35556d31cee2af6f94c3145df845566710e162a23a6f9fb5bd5a78e1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          )

      /**
       * [Material Design outlined button](https://m3.material.io/components/buttons/overview)
       *
       * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
       * post.
       *
       * ![Outlined button
       * image](https://developer.android.com/images/reference/androidx/compose/material3/outlined-button.png)
       *
       * Outlined buttons are medium-emphasis buttons. They contain actions that are important, but are
       * not the primary action in an app. Outlined buttons pair well with [Button]s to indicate an
       * alternative, secondary action.
       *
       * @sample androidx.compose.material3.samples.OutlinedButtonSample
       *
       * Choose the best button for an action based on the amount of emphasis it needs. The more important
       * an action is, the higher emphasis its button should be.
       * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
       * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
       * - See [OutlinedButton] for a medium-emphasis button with a border.
       * - See [TextButton] for a low-emphasis button with no border.
       *
       * The default text style for internal [Text] components will be set to [Typography.labelLarge].
       *
       * @param onClick called when this button is clicked
       * @param modifier the [Modifier] to be applied to this button
       * @param enabled controls the enabled state of this button. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param shape defines the shape of this button's container, border (when [border] is not null),
       *   and shadow (when using [elevation]).
       * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
       *   states. See [ButtonDefaults.outlinedButtonColors].
  - id: live-androidx-material3-material3-material3-button-lines-628-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 628
    endLine: 662
    sha256: e71f2a5830c373cee94b42b20a5fa86ba1131a03bd1581d49e74520d0d793312
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
       *   states. This controls the size of the shadow below the button. Additionally, when the container
       *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
       *   overlay.
       * @param border the border to draw around the container of this button. Pass `null` for no border.
       * @param contentPadding the spacing values to apply internally between the container and the
       *   content
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
       *   preview the button in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param content The content displayed on the button, expected to be text, icon or image.
       */
      @Composable
      public fun OutlinedButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          shape: Shape = ButtonDefaults.outlinedShape,
          colors: ButtonColors = ButtonDefaults.outlinedButtonColors(),
          elevation: ButtonElevation? = null,
          border: BorderStroke? = ButtonDefaults.outlinedButtonBorder(enabled),
          contentPadding: PaddingValues = ButtonDefaults.ContentPadding,
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ): Unit =
          Button(
              onClick = onClick,
              modifier = modifier,
              enabled = enabled,
              shape = shape,
              colors = colors,
              elevation = elevation,
              border = border,
              contentPadding = contentPadding,
  - id: live-androidx-material3-material3-material3-button-lines-663-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 663
    endLine: 697
    sha256: d5678b3b7862772c6e431f4aab54b13ed8f6afd9790782854692aa3d3f5e8355
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              interactionSource = interactionSource,
              content = content,
          )

      // TODO add link to image of pressed outlined button
      /**
       * [Material Design outlined button](https://m3.material.io/components/buttons/overview)
       *
       * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
       * post. It also morphs between the shapes provided in [shapes] depending on the state of the
       * interaction with the button as long as the shapes provided our [CornerBasedShape]s. If a shape in
       * [shapes] isn't a [CornerBasedShape], then button will change between the [ButtonShapes] according
       * to user interaction.
       *
       * ![Outlined button
       * image](https://developer.android.com/images/reference/androidx/compose/material3/outlined-button.png)
       *
       * Outlined buttons are medium-emphasis buttons. They contain actions that are important, but are
       * not the primary action in an app. Outlined buttons pair well with [Button]s to indicate an
       * alternative, secondary action.
       *
       * @sample androidx.compose.material3.samples.OutlinedButtonWithAnimatedShapeSample
       *
       * Choose the best button for an action based on the amount of emphasis it needs. The more important
       * an action is, the higher emphasis its button should be.
       * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
       * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
       * - See [OutlinedButton] for a medium-emphasis button with a border.
       * - See [TextButton] for a low-emphasis button with no border.
       *
       * The default text style for internal [Text] components will be set to [Typography.labelLarge].
       *
       * @param onClick called when this button is clicked
       * @param shapes the [ButtonShapes] that this button with morph between depending on the user's
       *   interaction with the button.
  - id: live-androidx-material3-material3-material3-button-lines-698-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 698
    endLine: 732
    sha256: 16993d24bdcc83a25bda1acd95d9c835c01ac8b540b54a5302a417a3d08525b2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param modifier the [Modifier] to be applied to this button
       * @param enabled controls the enabled state of this button. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
       *   states. See [ButtonDefaults.outlinedButtonColors].
       * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
       *   states. This controls the size of the shadow below the button. Additionally, when the container
       *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
       *   overlay.
       * @param border the border to draw around the container of this button. Pass `null` for no border.
       * @param contentPadding the spacing values to apply internally between the container and the
       *   content
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
       *   preview the button in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param content The content displayed on the button, expected to be text, icon or image.
       *
       * @material3expressive
       */
      @OptIn(ExperimentalMaterial3ExpressiveApi::class)
      @Composable
      public fun OutlinedButton(
          onClick: () -> Unit,
          shapes: ButtonShapes,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          colors: ButtonColors = ButtonDefaults.outlinedButtonColors(),
          elevation: ButtonElevation? = null,
          border: BorderStroke? = ButtonDefaults.outlinedButtonBorder(enabled),
          contentPadding: PaddingValues = ButtonDefaults.contentPaddingFor(ButtonDefaults.MinHeight),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ): Unit =
  - id: live-androidx-material3-material3-material3-button-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 71
    endLine: 105
    sha256: 3f3e1c89d06adc23de60c4aa5b4404696f7c487a827dd1ad0e70edfd8a0f26c6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.semantics.semantics
      import androidx.compose.ui.text.TextStyle
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.dp

      /**
       * [Material Design button](https://m3.material.io/components/buttons/overview)
       *
       * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
       * post.
       *
       * ![Filled button
       * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-button.png)
       *
       * Filled buttons are high-emphasis buttons. Filled buttons have the most visual impact after the
       * [FloatingActionButton], and should be used for important, final actions that complete a flow,
       * like "Save", "Join now", or "Confirm".
       *
       * @sample androidx.compose.material3.samples.ButtonSample
       * @sample androidx.compose.material3.samples.ButtonWithIconSample
       *
       * Button that uses a square shape instead of the default round shape:
       *
       * @sample androidx.compose.material3.samples.SquareButtonSample
       *
       * Button that utilizes the small design content padding:
       *
       * @sample androidx.compose.material3.samples.SmallButtonSample
       *
       * [Button] uses the small design spec as default. For a [Button] that uses the design for extra
       * small, medium, large, or extra large buttons:
       *
       * @sample androidx.compose.material3.samples.XSmallButtonWithIconSample
       * @sample androidx.compose.material3.samples.MediumButtonWithIconSample
       * @sample androidx.compose.material3.samples.LargeButtonWithIconSample
  - id: live-androidx-material3-material3-material3-button-lines-733-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 733
    endLine: 767
    sha256: fa59c948de4fbb587142a0af7c524660f0d32deb9a371f1fb8e1ab9ef372bff8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          Button(
              onClick = onClick,
              shapes = shapes,
              modifier = modifier,
              enabled = enabled,
              colors = colors,
              elevation = elevation,
              border = border,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
              content = content,
          )

      /**
       * [Material Design text button](https://m3.material.io/components/buttons/overview)
       *
       * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
       * post.
       *
       * ![Text button
       * image](https://developer.android.com/images/reference/androidx/compose/material3/text-button.png)
       *
       * Text buttons are typically used for less-pronounced actions, including those located in dialogs
       * and cards. In cards, text buttons help maintain an emphasis on card content. Text buttons are
       * used for the lowest priority actions, especially when presenting multiple options.
       *
       * @sample androidx.compose.material3.samples.TextButtonWithAnimatedShapeSample
       *
       * Choose the best button for an action based on the amount of emphasis it needs. The more important
       * an action is, the higher emphasis its button should be.
       * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
       * - See [ElevatedButton] for a [FilledTonalButton] with a shadow.
       * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
       * - See [OutlinedButton] for a medium-emphasis button with a border.
       *
  - id: live-androidx-material3-material3-material3-button-lines-768-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 768
    endLine: 802
    sha256: 24db7f0b3ba93bc806eb623b5cc94d54aacb4d374c3ccdbed0e6113b87883204
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * The default text style for internal [Text] components will be set to [Typography.labelLarge].
       *
       * @param onClick called when this button is clicked
       * @param modifier the [Modifier] to be applied to this button
       * @param enabled controls the enabled state of this button. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param shape defines the shape of this button's container, border (when [border] is not null),
       *   and shadow (when using [elevation])
       * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
       *   states. See [ButtonDefaults.textButtonColors].
       * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
       *   states. This controls the size of the shadow below the button. Additionally, when the container
       *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
       *   overlay. A TextButton typically has no elevation, and the default value is `null`. See
       *   [ElevatedButton] for a button with elevation.
       * @param border the border to draw around the container of this button
       * @param contentPadding the spacing values to apply internally between the container and the
       *   content
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
       *   preview the button in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param content The content displayed on the button, expected to be text.
       */
      @Composable
      public fun TextButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          shape: Shape = ButtonDefaults.textShape,
          colors: ButtonColors = ButtonDefaults.textButtonColors(),
          elevation: ButtonElevation? = null,
          border: BorderStroke? = null,
          contentPadding: PaddingValues = ButtonDefaults.TextButtonContentPadding,
  - id: live-androidx-material3-material3-material3-button-lines-803-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 803
    endLine: 837
    sha256: 9ce2c03ab34f0ce789493d91d5dbb802b60398a4927b2a29d845e5775dfc4d92
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ): Unit =
          Button(
              onClick = onClick,
              modifier = modifier,
              enabled = enabled,
              shape = shape,
              colors = colors,
              elevation = elevation,
              border = border,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
              content = content,
          )

      // TODO add link to image of pressed text button
      /**
       * [Material Design text button](https://m3.material.io/components/buttons/overview)
       *
       * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
       * post. It also morphs between the shapes provided in [shapes] depending on the state of the
       * interaction with the button as long as the shapes provided our [CornerBasedShape]s. If a shape in
       * [shapes] isn't a [CornerBasedShape], then button will change between the [ButtonShapes] according
       * to user interaction.
       *
       * ![Text button
       * image](https://developer.android.com/images/reference/androidx/compose/material3/text-button.png)
       *
       * Text buttons are typically used for less-pronounced actions, including those located in dialogs
       * and cards. In cards, text buttons help maintain an emphasis on card content. Text buttons are
       * used for the lowest priority actions, especially when presenting multiple options.
       *
       * @sample androidx.compose.material3.samples.TextButtonSample
       *
  - id: live-androidx-material3-material3-material3-button-lines-838-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 838
    endLine: 869
    sha256: f922ae5d327f0ac83c2eb14f1fdbb52ccadb27eaa772c19ac00f270469ace73c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Choose the best button for an action based on the amount of emphasis it needs. The more important
       * an action is, the higher emphasis its button should be.
       * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
       * - See [ElevatedButton] for a [FilledTonalButton] with a shadow.
       * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
       * - See [OutlinedButton] for a medium-emphasis button with a border.
       *
       * The default text style for internal [Text] components will be set to [Typography.labelLarge].
       *
       * @param onClick called when this button is clicked
       * @param shapes the [ButtonShapes] that this button with morph between depending on the user's
       *   interaction with the button.
       * @param modifier the [Modifier] to be applied to this button
       * @param enabled controls the enabled state of this button. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
       *   states. See [ButtonDefaults.textButtonColors].
       * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
       *   states. This controls the size of the shadow below the button. Additionally, when the container
       *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
       *   overlay. A TextButton typically has no elevation, and the default value is `null`. See
       *   [ElevatedButton] for a button with elevation.
       * @param border the border to draw around the container of this button
       * @param contentPadding the spacing values to apply internally between the container and the
       *   content
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
       *   preview the button in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param content The content displayed on the button, expected to be text.
       *
  - id: live-androidx-material3-material3-material3-button-lines-870-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 870
    endLine: 904
    sha256: 033c066a413f6456d0cdac7f924073bc94d8144aeff2b0505adf5772d506e913
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @material3expressive
       */
      @OptIn(ExperimentalMaterial3ExpressiveApi::class)
      @Composable
      public fun TextButton(
          onClick: () -> Unit,
          shapes: ButtonShapes,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          colors: ButtonColors = ButtonDefaults.textButtonColors(),
          elevation: ButtonElevation? = null,
          border: BorderStroke? = null,
          contentPadding: PaddingValues = ButtonDefaults.contentPaddingFor(ButtonDefaults.MinHeight),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ): Unit =
          Button(
              onClick = onClick,
              shapes = shapes,
              modifier = modifier,
              enabled = enabled,
              colors = colors,
              elevation = elevation,
              border = border,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
              content = content,
          )

      // TODO(b/201341237): Use token values for 0 elevation?
      // TODO(b/201341237): Use token values for null border?
      // TODO(b/201341237): Use token values for no color (transparent)?
      /**
       * Contains the default values used by all 5 button types.
       *
  - id: live-androidx-material3-material3-material3-button-lines-905-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 905
    endLine: 939
    sha256: 01b12b78345031fc3b3dbf029c82d598aa7419bb35b5056f134ca5f08abc0c5d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Default values that apply to all buttons types are [MinWidth], [MinHeight], [IconSize], and
       * [IconSpacing].
       *
       * A default value that applies only to [Button], [ElevatedButton], [FilledTonalButton], and
       * [OutlinedButton] is [ContentPadding].
       *
       * Default values that apply only to [Button] are [buttonColors] and [buttonElevation]. Default
       * values that apply only to [ElevatedButton] are [elevatedButtonColors] and
       * [elevatedButtonElevation]. Default values that apply only to [FilledTonalButton] are
       * [filledTonalButtonColors] and [filledTonalButtonElevation]. A default value that applies only to
       * [OutlinedButton] is [outlinedButtonColors]. Default values that apply only to [TextButton] is
       * [textButtonColors].
       */
      public object ButtonDefaults {

          private val ButtonLeadingSpace = BaselineButtonTokens.LeadingSpace
          private val ButtonTrailingSpace = BaselineButtonTokens.TrailingSpace
          private val ButtonWithIconStartpadding = 16.dp
          private val SmallStartPadding = ButtonSmallTokens.LeadingSpace
          private val SmallEndPadding = ButtonSmallTokens.TrailingSpace
          private val ButtonVerticalPadding = 8.dp

          /**
           * The default content padding used by [Button], [ElevatedButton], [FilledTonalButton],
           * [OutlinedButton], and [TextButton] buttons.
           * - See [ButtonWithIconContentPadding] for content padding used by [Button] that contains
           *   [Icon].
           */
          public val ContentPadding: PaddingValues =
              PaddingValues(
                  start = ButtonLeadingSpace,
                  top = ButtonVerticalPadding,
                  end = ButtonTrailingSpace,
                  bottom = ButtonVerticalPadding,
              )
  - id: live-androidx-material3-material3-material3-button-lines-940-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 940
    endLine: 974
    sha256: 9df72d4b721c29b72762673689458f247d1657728adc94c06fc388945a1a92b4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /** The default content padding used by [Button] that contains an [Icon]. */
          public val ButtonWithIconContentPadding: PaddingValues =
              PaddingValues(
                  start = ButtonWithIconStartpadding,
                  top = ButtonVerticalPadding,
                  end = ButtonTrailingSpace,
                  bottom = ButtonVerticalPadding,
              )

          /** The default content padding used for small [Button] */
          public val SmallContentPadding: PaddingValues
              get() =
                  PaddingValues(
                      start = SmallStartPadding,
                      top = smallVerticalPadding,
                      end = SmallEndPadding,
                      bottom = smallVerticalPadding,
                  )

          private fun getSmallContentPadding(hasStartIcon: Boolean, hasEndIcon: Boolean) =
              PaddingValues(
                  start = if (hasStartIcon) iconSmallHorizontalPadding else SmallStartPadding,
                  top = smallVerticalPadding,
                  end = if (hasEndIcon) iconSmallHorizontalPadding else SmallEndPadding,
                  bottom = smallVerticalPadding,
              )

          /** Default content padding for an extra small button. */
          public val ExtraSmallContentPadding: PaddingValues
              get() =
                  PaddingValues(
                      // TODO update with the value from ButtonXSmallTokens.kt once it's been corrected
                      start = 12.dp,
                      end = 12.dp,
  - id: live-androidx-material3-material3-material3-button-lines-975-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt
    startLine: 975
    endLine: 1009
    sha256: 410e7d6804ed0161302ff750968fdaf238ef1f0d2068058eed98bff9b9bdbff8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      top = 6.dp,
                      bottom = 6.dp,
                  )

          /** Default content padding for a medium button. */
          public val MediumContentPadding: PaddingValues
              get() =
                  PaddingValues(
                      start = MediumLeadingPadding,
                      top = MediumVerticalPadding,
                      end = MediumTrailingPadding,
                      bottom = MediumVerticalPadding,
                  )

          private fun getMediumContentPadding(hasLeadingIcon: Boolean, hasTrailingIcon: Boolean) =
              PaddingValues(
                  start = if (hasLeadingIcon) IconMediumLeadingPadding else MediumLeadingPadding,
                  top = MediumVerticalPadding,
                  end = if (hasTrailingIcon) IconMediumTrailingPadding else MediumTrailingPadding,
                  bottom = MediumVerticalPadding,
              )

          /** Default content padding for a large button. */
          public val LargeContentPadding: PaddingValues
              get() =
                  PaddingValues(
                      start = LargeLeadingPadding,
                      top = LargeVerticalPadding,
                      end = LargeTrailingPadding,
                      bottom = LargeVerticalPadding,
                  )

          private fun getLargeContentPadding(hasLeadingIcon: Boolean, hasTrailingIcon: Boolean) =
              PaddingValues(
                  start = if (hasLeadingIcon) IconLargeLeadingPadding else LargeLeadingPadding,
compose:
  id: live-androidx-material3-material3-material3-button
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-button-lines-1
      title: androidx.compose.material3 Button.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1010
      title: androidx.compose.material3 Button.kt source (lines 1010–1044)
      aliases:
        - androidx.compose.material3.TextButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1010-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1045
      title: androidx.compose.material3 Button.kt source (lines 1045–1079)
      aliases:
        - androidx.compose.material3.TextButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1045-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-106
      title: androidx.compose.material3 Button.kt source (lines 106–140)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1080
      title: androidx.compose.material3 Button.kt source (lines 1080–1114)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1080-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1115
      title: androidx.compose.material3 Button.kt source (lines 1115–1149)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1115-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1150
      title: androidx.compose.material3 Button.kt source (lines 1150–1184)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1150-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1185
      title: androidx.compose.material3 Button.kt source (lines 1185–1219)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ButtonColors
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1185-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1220
      title: androidx.compose.material3 Button.kt source (lines 1220–1254)
      aliases:
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1220-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1255
      title: androidx.compose.material3 Button.kt source (lines 1255–1289)
      aliases:
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1255-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1290
      title: androidx.compose.material3 Button.kt source (lines 1290–1324)
      aliases:
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1290-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1325
      title: androidx.compose.material3 Button.kt source (lines 1325–1359)
      aliases:
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1325-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1360
      title: androidx.compose.material3 Button.kt source (lines 1360–1394)
      aliases:
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1360-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1395
      title: androidx.compose.material3 Button.kt source (lines 1395–1429)
      aliases:
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1395-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-141
      title: androidx.compose.material3 Button.kt source (lines 141–175)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1430
      title: androidx.compose.material3 Button.kt source (lines 1430–1464)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.ButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1430-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1465
      title: androidx.compose.material3 Button.kt source (lines 1465–1499)
      aliases:
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.ButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1465-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1500
      title: androidx.compose.material3 Button.kt source (lines 1500–1534)
      aliases:
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.ButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1500-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1535
      title: androidx.compose.material3 Button.kt source (lines 1535–1569)
      aliases:
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1535-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1570
      title: androidx.compose.material3 Button.kt source (lines 1570–1604)
      aliases:
        - androidx.compose.material3.ButtonDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1570-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1605
      title: androidx.compose.material3 Button.kt source (lines 1605–1639)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1605-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1640
      title: androidx.compose.material3 Button.kt source (lines 1640–1674)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1640-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1675
      title: androidx.compose.material3 Button.kt source (lines 1675–1709)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1675-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1710
      title: androidx.compose.material3 Button.kt source (lines 1710–1744)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1710-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1745
      title: androidx.compose.material3 Button.kt source (lines 1745–1779)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1745-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-176
      title: androidx.compose.material3 Button.kt source (lines 176–210)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-176-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1780
      title: androidx.compose.material3 Button.kt source (lines 1780–1814)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1780-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1815
      title: androidx.compose.material3 Button.kt source (lines 1815–1849)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1815-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1850
      title: androidx.compose.material3 Button.kt source (lines 1850–1884)
      aliases:
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1850-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1885
      title: androidx.compose.material3 Button.kt source (lines 1885–1919)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1885-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-1920
      title: androidx.compose.material3 Button.kt source (lines 1920–1950)
      aliases:
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-1920-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-211
      title: androidx.compose.material3 Button.kt source (lines 211–245)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-211-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-246
      title: androidx.compose.material3 Button.kt source (lines 246–280)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ButtonDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-246-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-281
      title: androidx.compose.material3 Button.kt source (lines 281–315)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.TextButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-281-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-316
      title: androidx.compose.material3 Button.kt source (lines 316–350)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-316-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-351
      title: androidx.compose.material3 Button.kt source (lines 351–385)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-351-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-36
      title: androidx.compose.material3 Button.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-386
      title: androidx.compose.material3 Button.kt source (lines 386–420)
      aliases:
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-386-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-421
      title: androidx.compose.material3 Button.kt source (lines 421–455)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-421-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-456
      title: androidx.compose.material3 Button.kt source (lines 456–490)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-456-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-491
      title: androidx.compose.material3 Button.kt source (lines 491–525)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-491-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-526
      title: androidx.compose.material3 Button.kt source (lines 526–557)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-526-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-558
      title: androidx.compose.material3 Button.kt source (lines 558–592)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-558-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-593
      title: androidx.compose.material3 Button.kt source (lines 593–627)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-593-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-628
      title: androidx.compose.material3 Button.kt source (lines 628–662)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-628-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-663
      title: androidx.compose.material3 Button.kt source (lines 663–697)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-663-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-698
      title: androidx.compose.material3 Button.kt source (lines 698–732)
      aliases:
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-698-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-71
      title: androidx.compose.material3 Button.kt source (lines 71–105)
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-71-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-733
      title: androidx.compose.material3 Button.kt source (lines 733–767)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.OutlinedButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-733-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-768
      title: androidx.compose.material3 Button.kt source (lines 768–802)
      aliases:
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-768-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-803
      title: androidx.compose.material3 Button.kt source (lines 803–837)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-803-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-838
      title: androidx.compose.material3 Button.kt source (lines 838–869)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-838-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-870
      title: androidx.compose.material3 Button.kt source (lines 870–904)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonDefaults
        - androidx.compose.material3.ButtonElevation
        - androidx.compose.material3.ButtonColors
        - androidx.compose.material3.ButtonShapes
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-870-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-905
      title: androidx.compose.material3 Button.kt source (lines 905–939)
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ElevatedButton
        - androidx.compose.material3.FilledTonalButton
        - androidx.compose.material3.OutlinedButton
        - androidx.compose.material3.TextButton
        - androidx.compose.material3.ButtonDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-905-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-940
      title: androidx.compose.material3 Button.kt source (lines 940–974)
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-940-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-button-lines-975
      title: androidx.compose.material3 Button.kt source (lines 975–1009)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-button-lines-975-source
      relatedIds: []
---

# androidx.compose.material3 Button.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt

## androidx.compose.material3 Button.kt source (lines 1–35)

/*
 * Copyright 2021 The Android Open Source Project
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
import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.VectorConverter
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.interaction.FocusInteraction
import androidx.compose.foundation.interaction.HoverInteraction
import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.InteractionSource
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.PressInteraction
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.padding

Sources: [live-androidx-material3-material3-material3-button-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1010–1044)

            top = LargeVerticalPadding,
            end = if (hasTrailingIcon) IconLargeTrailingPadding else LargeTrailingPadding,
            bottom = LargeVerticalPadding,
        )

    /** Default content padding for an extra large button. */
    public val ExtraLargeContentPadding: PaddingValues
        get() =
            PaddingValues(
                start = ButtonXLargeTokens.LeadingSpace,
                end = ButtonXLargeTokens.TrailingSpace,
                top = 48.dp,
                bottom = 48.dp,
            )

    private val TextButtonHorizontalPadding = 12.dp

    /**
     * The default content padding used by [TextButton].
     * - See [TextButtonWithIconContentPadding] for content padding used by [TextButton] that
     *   contains [Icon].
     *
     * Note: it's recommended to use [ContentPadding] instead for a more consistent look between all
     * buttons variants.
     */
    public val TextButtonContentPadding: PaddingValues =
        PaddingValues(
            start = TextButtonHorizontalPadding,
            top = ContentPadding.calculateTopPadding(),
            end = TextButtonHorizontalPadding,
            bottom = ContentPadding.calculateBottomPadding(),
        )

    private val TextButtonWithIconHorizontalEndPadding = 16.dp


Sources: [live-androidx-material3-material3-material3-button-lines-1010-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1045–1079)

    /**
     * The default content padding used by [TextButton] that contains an [Icon].
     *
     * Note: it's recommended to use [ButtonWithIconContentPadding] instead for a more consistent
     * look between all buttons variants.
     */
    public val TextButtonWithIconContentPadding: PaddingValues =
        PaddingValues(
            start = TextButtonHorizontalPadding,
            top = ContentPadding.calculateTopPadding(),
            end = TextButtonWithIconHorizontalEndPadding,
            bottom = ContentPadding.calculateBottomPadding(),
        )

    /**
     * The default min width applied for small buttons. Note that you can override it by applying
     * Modifier.widthIn directly on the button composable.
     */
    public val MinWidth: Dp = 58.dp

    /**
     * The default min height applied for small buttons. Note that you can override it by applying
     * Modifier.heightIn directly on the button composable.
     */
    public val MinHeight: Dp
        get() =
            if (shouldUsePrecisionPointerComponentSizing.value) {
                36.dp
            } else {
                ButtonSmallTokens.ContainerHeight
            }

    /** The default height for a extra small button container. */
    public val ExtraSmallContainerHeight: Dp = ButtonXSmallTokens.ContainerHeight


Sources: [live-androidx-material3-material3-material3-button-lines-1045-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 106–140)

 * @sample androidx.compose.material3.samples.XLargeButtonWithIconSample
 *
 * Choose the best button for an action based on the amount of emphasis it needs. The more important
 * an action is, the higher emphasis its button should be.
 * - See [OutlinedButton] for a medium-emphasis button with a border.
 * - See [ElevatedButton] for an [FilledTonalButton] with a shadow.
 * - See [TextButton] for a low-emphasis button with no border.
 * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
 *
 * The default text style for internal [Text] components will be set to [Typography.labelLarge].
 *
 * @param onClick called when this button is clicked
 * @param modifier the [Modifier] to be applied to this button
 * @param enabled controls the enabled state of this button. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param shape defines the shape of this button's container, border (when [border] is not null),
 *   and shadow (when using [elevation])
 * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
 *   states. See [ButtonDefaults.buttonColors].
 * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
 *   states. This controls the size of the shadow below the button. See
 *   [ButtonElevation.shadowElevation].
 * @param border the border to draw around the container of this button
 * @param contentPadding the spacing values to apply internally between the container and the
 *   content
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
 *   preview the button in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param content The content displayed on the button, expected to be text, icon or image.
 */
@Composable
public fun Button(
    onClick: () -> Unit,

Sources: [live-androidx-material3-material3-material3-button-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1080–1114)

    /** The default height for a medium button container. */
    public val MediumContainerHeight: Dp = ButtonMediumTokens.ContainerHeight

    /** The default height for a large button container. */
    public val LargeContainerHeight: Dp = ButtonLargeTokens.ContainerHeight

    /** The default height for a extra large button container. */
    public val ExtraLargeContainerHeight: Dp = ButtonXLargeTokens.ContainerHeight

    /** The default size of the icon when used inside a small button. */
    // TODO update with the correct value in BaselineButtonTokens when available
    public val IconSize: Dp = 18.dp

    /** The default size of the icon used inside an extra small button. */
    public val ExtraSmallIconSize: Dp = ButtonXSmallTokens.IconSize

    /** The expressive size of the icon used inside a small button. */
    public val SmallIconSize: Dp = ButtonSmallTokens.IconSize

    /** The default size of the icon used inside a medium button. */
    public val MediumIconSize: Dp = ButtonMediumTokens.IconSize

    /** The default size of the icon used inside a large button. */
    public val LargeIconSize: Dp = ButtonLargeTokens.IconSize

    /** The default size of the icon used inside an extra large button. */
    public val ExtraLargeIconSize: Dp = ButtonXLargeTokens.IconSize

    /**
     * The default size of the spacing between an icon and a text when they used inside a small
     * button.
     */
    public val IconSpacing: Dp = ButtonSmallTokens.IconLabelSpace

    /**

Sources: [live-androidx-material3-material3-material3-button-lines-1080-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1115–1149)

     * The default spacing between an icon and a text when they used inside any extra small button.
     */
    // TODO use the value from ButtonXSmallTokens.kt once it's been corrected
    public val ExtraSmallIconSpacing: Dp = 4.dp

    /** The default spacing between an icon and a text when they're inside any medium button. */
    public val MediumIconSpacing: Dp = ButtonMediumTokens.IconLabelSpace

    /** The default spacing between an icon and a text when they're inside any large button. */
    public val LargeIconSpacing: Dp = ButtonLargeTokens.IconLabelSpace

    /**
     * The default spacing between an icon and a text when they used inside any extra large button.
     */
    public val ExtraLargeIconSpacing: Dp = ButtonXLargeTokens.IconLabelSpace

    /** Square shape for default buttons. */
    public val squareShape: Shape
        @Composable get() = ButtonSmallTokens.ContainerShapeSquare.value

    /** Pressed shape for default buttons. */
    public val pressedShape: Shape
        @Composable get() = ButtonSmallTokens.PressedContainerShape.value

    /** Pressed shape for extra small buttons. */
    public val extraSmallPressedShape: Shape
        @Composable get() = ButtonXSmallTokens.PressedContainerShape.value

    /** Pressed shape for medium buttons. */
    public val mediumPressedShape: Shape
        @Composable get() = ButtonMediumTokens.PressedContainerShape.value

    /** Pressed shape for large buttons. */
    public val largePressedShape: Shape
        @Composable get() = ButtonLargeTokens.PressedContainerShape.value

Sources: [live-androidx-material3-material3-material3-button-lines-1115-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1150–1184)


    /** Pressed shape for extra large buttons. */
    public val extraLargePressedShape: Shape
        @Composable get() = ButtonXLargeTokens.PressedContainerShape.value

    /** Default shape for a button. */
    public val shape: Shape
        @Composable get() = ButtonSmallTokens.ContainerShapeRound.value

    /** Default shape for an elevated button. */
    public val elevatedShape: Shape
        @Composable get() = ButtonSmallTokens.ContainerShapeRound.value

    /** Default shape for a filled tonal button. */
    public val filledTonalShape: Shape
        @Composable get() = ButtonSmallTokens.ContainerShapeRound.value

    /** Default shape for an outlined button. */
    public val outlinedShape: Shape
        @Composable get() = ButtonSmallTokens.ContainerShapeRound.value

    /** Default shape for a text button. */
    public val textShape: Shape
        @Composable get() = ButtonSmallTokens.ContainerShapeRound.value

    /**
     * Creates a [ButtonShapes] that represents the default shape and pressed shape used in a
     * button.
     */
    @Composable public fun shapes(): ButtonShapes = MaterialTheme.shapes.defaultButtonShapes

    /**
     * Creates a [ButtonShapes] that represents the default shape and pressedShape used in a
     * [Button] and its variants.
     *

Sources: [live-androidx-material3-material3-material3-button-lines-1150-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1185–1219)

     * @param shape the unchecked shape for [ButtonShapes]
     * @param pressedShape the unchecked shape for [ButtonShapes]
     */
    @Composable
    public fun shapes(shape: Shape? = null, pressedShape: Shape? = null): ButtonShapes =
        MaterialTheme.shapes.defaultButtonShapes.copy(shape = shape, pressedShape = pressedShape)

    internal val Shapes.defaultButtonShapes: ButtonShapes
        get() {
            return defaultButtonShapesCached
                ?: ButtonShapes(
                        shape = fromToken(ButtonSmallTokens.ContainerShapeRound),
                        pressedShape = fromToken(ButtonSmallTokens.PressedContainerShape),
                    )
                    .also { defaultButtonShapesCached = it }
        }

    /**
     * Creates a [ButtonColors] that represents the default container and content colors used in a
     * [Button].
     */
    @Composable
    public fun buttonColors(): ButtonColors = MaterialTheme.colorScheme.defaultButtonColors

    /**
     * Creates a [ButtonColors] that represents the default container and content colors used in a
     * [Button].
     *
     * @param containerColor the container color of this [Button] when enabled.
     * @param contentColor the content color of this [Button] when enabled.
     * @param disabledContainerColor the container color of this [Button] when not enabled.
     * @param disabledContentColor the content color of this [Button] when not enabled.
     */
    @Composable
    public fun buttonColors(

Sources: [live-androidx-material3-material3-material3-button-lines-1185-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1220–1254)

        containerColor: Color = Color.Unspecified,
        contentColor: Color = Color.Unspecified,
        disabledContainerColor: Color = Color.Unspecified,
        disabledContentColor: Color = Color.Unspecified,
    ): ButtonColors =
        MaterialTheme.colorScheme.defaultButtonColors.copy(
            containerColor = containerColor,
            contentColor = contentColor,
            disabledContainerColor = disabledContainerColor,
            disabledContentColor = disabledContentColor,
        )

    internal val ColorScheme.defaultButtonColors: ButtonColors
        get() {
            return defaultButtonColorsCached
                ?: ButtonColors(
                        containerColor = fromToken(FilledButtonTokens.ContainerColor),
                        contentColor = fromToken(FilledButtonTokens.LabelTextColor),
                        disabledContainerColor =
                            fromToken(FilledButtonTokens.DisabledContainerColor)
                                .copy(alpha = FilledButtonTokens.DisabledContainerOpacity),
                        disabledContentColor =
                            fromToken(FilledButtonTokens.DisabledLabelTextColor)
                                .copy(alpha = FilledButtonTokens.DisabledLabelTextOpacity),
                    )
                    .also { defaultButtonColorsCached = it }
        }

    /**
     * Creates a [ButtonColors] that represents the default container and content colors used in an
     * [ElevatedButton].
     */
    @Composable
    public fun elevatedButtonColors(): ButtonColors =
        MaterialTheme.colorScheme.defaultElevatedButtonColors

Sources: [live-androidx-material3-material3-material3-button-lines-1220-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1255–1289)


    /**
     * Creates a [ButtonColors] that represents the default container and content colors used in an
     * [ElevatedButton].
     *
     * @param containerColor the container color of this [ElevatedButton] when enabled
     * @param contentColor the content color of this [ElevatedButton] when enabled
     * @param disabledContainerColor the container color of this [ElevatedButton] when not enabled
     * @param disabledContentColor the content color of this [ElevatedButton] when not enabled
     */
    @Composable
    public fun elevatedButtonColors(
        containerColor: Color = Color.Unspecified,
        contentColor: Color = Color.Unspecified,
        disabledContainerColor: Color = Color.Unspecified,
        disabledContentColor: Color = Color.Unspecified,
    ): ButtonColors =
        MaterialTheme.colorScheme.defaultElevatedButtonColors.copy(
            containerColor = containerColor,
            contentColor = contentColor,
            disabledContainerColor = disabledContainerColor,
            disabledContentColor = disabledContentColor,
        )

    internal val ColorScheme.defaultElevatedButtonColors: ButtonColors
        get() {
            return defaultElevatedButtonColorsCached
                ?: ButtonColors(
                        containerColor = fromToken(ElevatedButtonTokens.ContainerColor),
                        contentColor = fromToken(ElevatedButtonTokens.LabelTextColor),
                        disabledContainerColor =
                            fromToken(ElevatedButtonTokens.DisabledContainerColor)
                                .copy(alpha = ElevatedButtonTokens.DisabledContainerOpacity),
                        disabledContentColor =
                            fromToken(ElevatedButtonTokens.DisabledLabelTextColor)

Sources: [live-androidx-material3-material3-material3-button-lines-1255-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1290–1324)

                                .copy(alpha = ElevatedButtonTokens.DisabledLabelTextOpacity),
                    )
                    .also { defaultElevatedButtonColorsCached = it }
        }

    /**
     * Creates a [ButtonColors] that represents the default container and content colors used in an
     * [FilledTonalButton].
     */
    @Composable
    public fun filledTonalButtonColors(): ButtonColors =
        MaterialTheme.colorScheme.defaultFilledTonalButtonColors

    /**
     * Creates a [ButtonColors] that represents the default container and content colors used in an
     * [FilledTonalButton].
     *
     * @param containerColor the container color of this [FilledTonalButton] when enabled
     * @param contentColor the content color of this [FilledTonalButton] when enabled
     * @param disabledContainerColor the container color of this [FilledTonalButton] when not
     *   enabled
     * @param disabledContentColor the content color of this [FilledTonalButton] when not enabled
     */
    @Composable
    public fun filledTonalButtonColors(
        containerColor: Color = Color.Unspecified,
        contentColor: Color = Color.Unspecified,
        disabledContainerColor: Color = Color.Unspecified,
        disabledContentColor: Color = Color.Unspecified,
    ): ButtonColors =
        MaterialTheme.colorScheme.defaultFilledTonalButtonColors.copy(
            containerColor = containerColor,
            contentColor = contentColor,
            disabledContainerColor = disabledContainerColor,
            disabledContentColor = disabledContentColor,

Sources: [live-androidx-material3-material3-material3-button-lines-1290-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1325–1359)

        )

    internal val ColorScheme.defaultFilledTonalButtonColors: ButtonColors
        get() {
            return defaultFilledTonalButtonColorsCached
                ?: ButtonColors(
                        containerColor = fromToken(FilledTonalButtonTokens.ContainerColor),
                        contentColor = fromToken(FilledTonalButtonTokens.LabelTextColor),
                        disabledContainerColor =
                            fromToken(FilledTonalButtonTokens.DisabledContainerColor)
                                .copy(alpha = FilledTonalButtonTokens.DisabledContainerOpacity),
                        disabledContentColor =
                            fromToken(FilledTonalButtonTokens.DisabledLabelTextColor)
                                .copy(alpha = FilledTonalButtonTokens.DisabledLabelTextOpacity),
                    )
                    .also { defaultFilledTonalButtonColorsCached = it }
        }

    /**
     * Creates a [ButtonColors] that represents the default container and content colors used in an
     * [OutlinedButton].
     */
    @Composable
    public fun outlinedButtonColors(): ButtonColors =
        MaterialTheme.colorScheme.defaultOutlinedButtonColors

    /**
     * Creates a [ButtonColors] that represents the default container and content colors used in an
     * [OutlinedButton].
     *
     * @param containerColor the container color of this [OutlinedButton] when enabled
     * @param contentColor the content color of this [OutlinedButton] when enabled
     * @param disabledContainerColor the container color of this [OutlinedButton] when not enabled
     * @param disabledContentColor the content color of this [OutlinedButton] when not enabled
     */

Sources: [live-androidx-material3-material3-material3-button-lines-1325-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1360–1394)

    @Composable
    public fun outlinedButtonColors(
        containerColor: Color = Color.Unspecified,
        contentColor: Color = Color.Unspecified,
        disabledContainerColor: Color = Color.Unspecified,
        disabledContentColor: Color = Color.Unspecified,
    ): ButtonColors =
        MaterialTheme.colorScheme.defaultOutlinedButtonColors.copy(
            containerColor = containerColor,
            contentColor = contentColor,
            disabledContainerColor = disabledContainerColor,
            disabledContentColor = disabledContentColor,
        )

    internal val ColorScheme.defaultOutlinedButtonColors: ButtonColors
        get() {
            return defaultOutlinedButtonColorsCached
                ?: ButtonColors(
                        containerColor = Color.Transparent,
                        contentColor = fromToken(OutlinedButtonTokens.LabelTextColor),
                        disabledContainerColor = Color.Transparent,
                        disabledContentColor =
                            fromToken(OutlinedButtonTokens.DisabledLabelTextColor)
                                .copy(alpha = OutlinedButtonTokens.DisabledLabelTextOpacity),
                    )
                    .also { defaultOutlinedButtonColorsCached = it }
        }

    /**
     * Creates a [ButtonColors] that represents the default container and content colors used in a
     * [TextButton].
     */
    @Composable
    public fun textButtonColors(): ButtonColors = MaterialTheme.colorScheme.defaultTextButtonColors


Sources: [live-androidx-material3-material3-material3-button-lines-1360-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1395–1429)

    /**
     * Creates a [ButtonColors] that represents the default container and content colors used in a
     * [TextButton].
     *
     * @param containerColor the container color of this [TextButton] when enabled
     * @param contentColor the content color of this [TextButton] when enabled
     * @param disabledContainerColor the container color of this [TextButton] when not enabled
     * @param disabledContentColor the content color of this [TextButton] when not enabled
     */
    @Composable
    public fun textButtonColors(
        containerColor: Color = Color.Unspecified,
        contentColor: Color = Color.Unspecified,
        disabledContainerColor: Color = Color.Unspecified,
        disabledContentColor: Color = Color.Unspecified,
    ): ButtonColors =
        MaterialTheme.colorScheme.defaultTextButtonColors.copy(
            containerColor = containerColor,
            contentColor = contentColor,
            disabledContainerColor = disabledContainerColor,
            disabledContentColor = disabledContentColor,
        )

    internal val ColorScheme.defaultTextButtonColors: ButtonColors
        get() {
            return defaultTextButtonColorsCached
                ?: ButtonColors(
                        containerColor = Color.Transparent,
                        // TODO replace with the token value once it's corrected
                        contentColor = fromToken(ColorSchemeKeyTokens.Primary),
                        disabledContainerColor = Color.Transparent,
                        disabledContentColor =
                            fromToken(TextButtonTokens.DisabledLabelColor)
                                .copy(alpha = TextButtonTokens.DisabledLabelOpacity),
                    )

Sources: [live-androidx-material3-material3-material3-button-lines-1395-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 141–175)

    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    shape: Shape = ButtonDefaults.shape,
    colors: ButtonColors = ButtonDefaults.buttonColors(),
    elevation: ButtonElevation? = ButtonDefaults.buttonElevation(),
    border: BorderStroke? = null,
    contentPadding: PaddingValues = ButtonDefaults.ContentPadding,
    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    val containerColor = colors.containerColor(enabled)
    val contentColor = colors.contentColor(enabled)
    val shadowElevation = elevation?.shadowElevation(enabled, interactionSource)?.value ?: 0.dp
    Surface(
        onClick = onClick,
        modifier = modifier.semantics { role = Role.Button },
        enabled = enabled,
        shape = shape,
        color = containerColor,
        contentColor = contentColor,
        shadowElevation = shadowElevation,
        border = border,
        interactionSource = interactionSource,
    ) {
        ProvideContentColorTextStyle(
            contentColor = contentColor,
            textStyle = MaterialTheme.typography.labelLarge,
        ) {
            Row(
                Modifier.defaultMinSize(
                        minWidth = ButtonDefaults.MinWidth,
                        minHeight = ButtonDefaults.MinHeight,
                    )

Sources: [live-androidx-material3-material3-material3-button-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1430–1464)

                    .also { defaultTextButtonColorsCached = it }
        }

    /**
     * Creates a [ButtonElevation] that will animate between the provided values according to the
     * Material specification for a [Button].
     *
     * @param defaultElevation the elevation used when the [Button] is enabled, and has no other
     *   [Interaction]s.
     * @param pressedElevation the elevation used when this [Button] is enabled and pressed.
     * @param focusedElevation the elevation used when the [Button] is enabled and focused.
     * @param hoveredElevation the elevation used when the [Button] is enabled and hovered.
     * @param disabledElevation the elevation used when the [Button] is not enabled.
     */
    @Composable
    public fun buttonElevation(
        defaultElevation: Dp = FilledButtonTokens.ContainerElevation,
        pressedElevation: Dp = FilledButtonTokens.PressedContainerElevation,
        focusedElevation: Dp = FilledButtonTokens.FocusedContainerElevation,
        hoveredElevation: Dp = FilledButtonTokens.HoveredContainerElevation,
        disabledElevation: Dp = FilledButtonTokens.DisabledContainerElevation,
    ): ButtonElevation =
        ButtonElevation(
            defaultElevation = defaultElevation,
            pressedElevation = pressedElevation,
            focusedElevation = focusedElevation,
            hoveredElevation = hoveredElevation,
            disabledElevation = disabledElevation,
        )

    /**
     * Creates a [ButtonElevation] that will animate between the provided values according to the
     * Material specification for a [ElevatedButton].
     *
     * @param defaultElevation the elevation used when the [ElevatedButton] is enabled, and has no

Sources: [live-androidx-material3-material3-material3-button-lines-1430-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1465–1499)

     *   other [Interaction]s.
     * @param pressedElevation the elevation used when this [ElevatedButton] is enabled and pressed.
     * @param focusedElevation the elevation used when the [ElevatedButton] is enabled and focused.
     * @param hoveredElevation the elevation used when the [ElevatedButton] is enabled and hovered.
     * @param disabledElevation the elevation used when the [ElevatedButton] is not enabled.
     */
    @Composable
    public fun elevatedButtonElevation(
        defaultElevation: Dp = ElevatedButtonTokens.ContainerElevation,
        pressedElevation: Dp = ElevatedButtonTokens.PressedContainerElevation,
        focusedElevation: Dp = ElevatedButtonTokens.FocusedContainerElevation,
        hoveredElevation: Dp = ElevatedButtonTokens.HoveredContainerElevation,
        disabledElevation: Dp = ElevatedButtonTokens.DisabledContainerElevation,
    ): ButtonElevation =
        ButtonElevation(
            defaultElevation = defaultElevation,
            pressedElevation = pressedElevation,
            focusedElevation = focusedElevation,
            hoveredElevation = hoveredElevation,
            disabledElevation = disabledElevation,
        )

    /**
     * Creates a [ButtonElevation] that will animate between the provided values according to the
     * Material specification for a [FilledTonalButton].
     *
     * @param defaultElevation the elevation used when the [FilledTonalButton] is enabled, and has
     *   no other [Interaction]s.
     * @param pressedElevation the elevation used when this [FilledTonalButton] is enabled and
     *   pressed.
     * @param focusedElevation the elevation used when the [FilledTonalButton] is enabled and
     *   focused.
     * @param hoveredElevation the elevation used when the [FilledTonalButton] is enabled and
     *   hovered.
     * @param disabledElevation the elevation used when the [FilledTonalButton] is not enabled.

Sources: [live-androidx-material3-material3-material3-button-lines-1465-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1500–1534)

     */
    @Composable
    public fun filledTonalButtonElevation(
        defaultElevation: Dp = FilledTonalButtonTokens.ContainerElevation,
        pressedElevation: Dp = FilledTonalButtonTokens.PressedContainerElevation,
        focusedElevation: Dp = FilledTonalButtonTokens.FocusContainerElevation,
        hoveredElevation: Dp = FilledTonalButtonTokens.HoverContainerElevation,
        disabledElevation: Dp = 0.dp,
    ): ButtonElevation =
        ButtonElevation(
            defaultElevation = defaultElevation,
            pressedElevation = pressedElevation,
            focusedElevation = focusedElevation,
            hoveredElevation = hoveredElevation,
            disabledElevation = disabledElevation,
        )

    /** The default [BorderStroke] used by [OutlinedButton]. */
    public val outlinedButtonBorder: BorderStroke
        @Composable
        @Deprecated(
            message =
                "Please use the version that takes an `enabled` param to get the " +
                    "`BorderStroke` with the correct opacity",
            replaceWith = ReplaceWith("outlinedButtonBorder(enabled)"),
        )
        get() =
            BorderStroke(
                width = ButtonSmallTokens.OutlinedOutlineWidth,
                color = OutlinedButtonTokens.OutlineColor.value,
            )

    /**
     * The default [BorderStroke] used by [OutlinedButton].
     *

Sources: [live-androidx-material3-material3-material3-button-lines-1500-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1535–1569)

     * @param enabled whether the button is enabled
     */
    @Composable
    public fun outlinedButtonBorder(enabled: Boolean = true): BorderStroke =
        BorderStroke(
            width = ButtonSmallTokens.OutlinedOutlineWidth,
            color =
                if (enabled) {
                    OutlinedButtonTokens.OutlineColor.value
                } else {
                    OutlinedButtonTokens.OutlineColor.value.copy(
                        alpha = OutlinedButtonTokens.DisabledContainerOpacity
                    )
                },
        )

    /**
     * Recommended [ButtonShapes] for a provided button height.
     *
     * @param buttonHeight The height of the button
     */
    @Composable
    public fun shapesFor(buttonHeight: Dp): ButtonShapes {
        val xSmallHeight = ExtraSmallContainerHeight
        val smallHeight = MinHeight
        val mediumHeight = MediumContainerHeight
        val largeHeight = LargeContainerHeight
        val xLargeHeight = ExtraLargeContainerHeight
        return when {
            buttonHeight <= (xSmallHeight + smallHeight) / 2 ->
                shapes(shape = shape, pressedShape = extraSmallPressedShape)
            buttonHeight <= (smallHeight + mediumHeight) / 2 -> shapes()
            buttonHeight <= (mediumHeight + largeHeight) / 2 ->
                shapes(shape = shape, pressedShape = mediumPressedShape)
            buttonHeight <= (largeHeight + xLargeHeight) / 2 ->

Sources: [live-androidx-material3-material3-material3-button-lines-1535-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1570–1604)

                shapes(shape = shape, pressedShape = largePressedShape)
            else -> shapes(shape = shape, pressedShape = extraLargePressedShape)
        }
    }

    /**
     * Recommended [PaddingValues] for a provided button height.
     *
     * The returned content padding is based on the ButtonDefaults.<Size>ContainerHeight (or
     * ButtonDefaults.MinHeight for a small button) height values and is not directly interpolated
     * from the provided buttonHeight (e.g. any buttonHeight equal or bigger than
     * ButtonDefaults.MinHeight and smaller than ButtonDefaults.MediumContainerHeight will return
     * the same small content padding).
     *
     * @param buttonHeight The height of the button
     * @param hasStartIcon Whether the button has a leading icon
     * @param hasEndIcon Whether the button has a trailing icon
     */
    public fun contentPaddingFor(
        buttonHeight: Dp,
        hasStartIcon: Boolean = false,
        hasEndIcon: Boolean = false,
    ): PaddingValues {
        val smallHeight = MinHeight
        val mediumHeight = MediumContainerHeight
        val largeHeight = LargeContainerHeight
        val xLargeHeight = ExtraLargeContainerHeight
        return when {
            buttonHeight < smallHeight -> ExtraSmallContentPadding
            buttonHeight < mediumHeight -> getSmallContentPadding(hasStartIcon, hasEndIcon)
            buttonHeight < largeHeight -> getMediumContentPadding(hasStartIcon, hasEndIcon)
            buttonHeight < xLargeHeight -> getLargeContentPadding(hasStartIcon, hasEndIcon)
            else -> ExtraLargeContentPadding
        }
    }

Sources: [live-androidx-material3-material3-material3-button-lines-1570-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1605–1639)


    /**
     * Recommended Icon size for a provided button height.
     *
     * @param buttonHeight The height of the button
     */
    public fun iconSizeFor(buttonHeight: Dp): Dp {
        val smallHeight = MinHeight
        val mediumHeight = MediumContainerHeight
        val largeHeight = LargeContainerHeight
        val xLargeHeight = ExtraLargeContainerHeight
        return when {
            buttonHeight < smallHeight -> ExtraSmallIconSize
            buttonHeight < mediumHeight -> SmallIconSize
            buttonHeight < largeHeight -> MediumIconSize
            buttonHeight < xLargeHeight -> LargeIconSize
            else -> ExtraLargeIconSize
        }
    }

    /**
     * Recommended spacing after an [Icon] for a provided button height.
     *
     * @param buttonHeight The height of the button
     */
    public fun iconSpacingFor(buttonHeight: Dp): Dp {
        val smallHeight = MinHeight
        val mediumHeight = MediumContainerHeight
        val largeHeight = LargeContainerHeight
        val xLargeHeight = ExtraLargeContainerHeight
        return when {
            buttonHeight < smallHeight -> ExtraSmallIconSpacing
            buttonHeight < mediumHeight -> IconSpacing
            buttonHeight < largeHeight -> MediumIconSpacing
            buttonHeight < xLargeHeight -> LargeIconSpacing

Sources: [live-androidx-material3-material3-material3-button-lines-1605-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1640–1674)

            else -> ExtraLargeIconSpacing
        }
    }

    /**
     * Recommended [TextStyle] for a [Text] provided a button height.
     *
     * @param buttonHeight The height of the button
     */
    @Composable
    public fun textStyleFor(buttonHeight: Dp): TextStyle {
        val mediumHeight = MediumContainerHeight
        val largeHeight = LargeContainerHeight
        val xLargeHeight = ExtraLargeContainerHeight
        return when {
            buttonHeight < mediumHeight -> MaterialTheme.typography.labelLarge
            buttonHeight < largeHeight -> MaterialTheme.typography.titleMedium
            buttonHeight < xLargeHeight -> MaterialTheme.typography.headlineSmall
            else -> MaterialTheme.typography.headlineLarge
        }
    }

    private val smallVerticalPadding
        get() = if (shouldUsePrecisionPointerComponentSizing.value) 8.dp else 10.dp

    private val iconSmallHorizontalPadding
        get() = if (shouldUsePrecisionPointerComponentSizing.value) 12.dp else SmallStartPadding

    private val MediumLeadingPadding = ButtonMediumTokens.LeadingSpace
    private val MediumTrailingPadding = ButtonMediumTokens.TrailingSpace
    private val MediumVerticalPadding = 16.dp
    private val IconMediumLeadingPadding = ButtonMediumTokens.LeadingSpace
    private val IconMediumTrailingPadding = ButtonMediumTokens.TrailingSpace
    private val LargeVerticalPadding = 32.dp
    private val LargeLeadingPadding = ButtonLargeTokens.LeadingSpace

Sources: [live-androidx-material3-material3-material3-button-lines-1640-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1675–1709)

    private val LargeTrailingPadding = ButtonLargeTokens.TrailingSpace
    private val IconLargeLeadingPadding = ButtonLargeTokens.LeadingSpace
    private val IconLargeTrailingPadding = ButtonLargeTokens.TrailingSpace
}

/**
 * Represents the elevation for a button in different states.
 * - See [ButtonDefaults.buttonElevation] for the default elevation used in a [Button].
 * - See [ButtonDefaults.elevatedButtonElevation] for the default elevation used in a
 *   [ElevatedButton].
 */
@Stable
public class ButtonElevation
internal constructor(
    private val defaultElevation: Dp,
    private val pressedElevation: Dp,
    private val focusedElevation: Dp,
    private val hoveredElevation: Dp,
    private val disabledElevation: Dp,
) {
    /**
     * Represents the shadow elevation used in a button, depending on its [enabled] state and
     * [interactionSource].
     *
     * Shadow elevation is used to apply a shadow around the button to give it higher emphasis.
     *
     * @param enabled whether the button is enabled
     * @param interactionSource the [InteractionSource] for this button
     */
    @Composable
    internal fun shadowElevation(
        enabled: Boolean,
        interactionSource: InteractionSource,
    ): State<Dp> {
        return animateElevation(enabled = enabled, interactionSource = interactionSource)

Sources: [live-androidx-material3-material3-material3-button-lines-1675-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1710–1744)

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
                }
            }
        }

Sources: [live-androidx-material3-material3-material3-button-lines-1710-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1745–1779)


        val interaction = interactions.lastOrNull()

        val target =
            if (!enabled) {
                disabledElevation
            } else {
                when (interaction) {
                    is PressInteraction.Press -> pressedElevation
                    is HoverInteraction.Enter -> hoveredElevation
                    is FocusInteraction.Focus -> focusedElevation
                    else -> defaultElevation
                }
            }

        val animatable = remember { Animatable(target, Dp.VectorConverter) }

        LaunchedEffect(target) {
            if (animatable.targetValue != target) {
                if (!enabled) {
                    // No transition when moving to a disabled state
                    animatable.snapTo(target)
                } else {
                    val lastInteraction =
                        when (animatable.targetValue) {
                            pressedElevation -> PressInteraction.Press(Offset.Zero)
                            hoveredElevation -> HoverInteraction.Enter()
                            focusedElevation -> FocusInteraction.Focus()
                            else -> null
                        }
                    animatable.animateElevation(
                        from = lastInteraction,
                        to = interaction,
                        target = target,
                    )

Sources: [live-androidx-material3-material3-material3-button-lines-1745-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 176–210)

                    .padding(contentPadding),
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically,
                content = content,
            )
        }
    }
}

// TODO add link to image of pressed button
/**
 * [Material Design button](https://m3.material.io/components/buttons/overview)
 *
 * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
 * post. It also morphs between the shapes provided in [shapes] depending on the state of the
 * interaction with the button as long as the shapes provided our [CornerBasedShape]s. If a shape in
 * [shapes] isn't a [CornerBasedShape], then button will change between the [ButtonShapes] according
 * to user interaction.
 *
 * ![Filled button
 * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-button.png)
 *
 * Filled buttons are high-emphasis buttons. Filled buttons have the most visual impact after the
 * [FloatingActionButton], and should be used for important, final actions that complete a flow,
 * like "Save", "Join now", or "Confirm".
 *
 * @sample androidx.compose.material3.samples.ButtonWithAnimatedShapeSample
 *
 * Choose the best button for an action based on the amount of emphasis it needs. The more important
 * an action is, the higher emphasis its button should be.
 * - See [OutlinedButton] for a medium-emphasis button with a border.
 * - See [ElevatedButton] for an [FilledTonalButton] with a shadow.
 * - See [TextButton] for a low-emphasis button with no border.
 * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
 *

Sources: [live-androidx-material3-material3-material3-button-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1780–1814)

                }
            }
        }

        return animatable.asState()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is ButtonElevation) return false

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
        result = 31 * result + hoveredElevation.hashCode()
        result = 31 * result + disabledElevation.hashCode()
        return result
    }
}

/**
 * Represents the container and content colors used in a button in different states.
 *
 * @param containerColor the container color of this [Button] when enabled.
 * @param contentColor the content color of this [Button] when enabled.

Sources: [live-androidx-material3-material3-material3-button-lines-1780-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1815–1849)

 * @param disabledContainerColor the container color of this [Button] when not enabled.
 * @param disabledContentColor the content color of this [Button] when not enabled.
 *     @constructor create an instance with arbitrary colors.
 * - See [ButtonDefaults.buttonColors] for the default colors used in a [Button].
 * - See [ButtonDefaults.elevatedButtonColors] for the default colors used in a [ElevatedButton].
 * - See [ButtonDefaults.textButtonColors] for the default colors used in a [TextButton].
 */
@Immutable
public class ButtonColors
public constructor(
    public val containerColor: Color,
    public val contentColor: Color,
    public val disabledContainerColor: Color,
    public val disabledContentColor: Color,
) {
    /**
     * Returns a copy of this ButtonColors, optionally overriding some of the values. This uses the
     * Color.Unspecified to mean “use the value from the source”
     */
    public fun copy(
        containerColor: Color = this.containerColor,
        contentColor: Color = this.contentColor,
        disabledContainerColor: Color = this.disabledContainerColor,
        disabledContentColor: Color = this.disabledContentColor,
    ): ButtonColors =
        ButtonColors(
            containerColor.takeOrElse { this.containerColor },
            contentColor.takeOrElse { this.contentColor },
            disabledContainerColor.takeOrElse { this.disabledContainerColor },
            disabledContentColor.takeOrElse { this.disabledContentColor },
        )

    /**
     * Represents the container color for this button, depending on [enabled].
     *

Sources: [live-androidx-material3-material3-material3-button-lines-1815-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1850–1884)

     * @param enabled whether the button is enabled
     */
    @Stable
    internal fun containerColor(enabled: Boolean): Color =
        if (enabled) containerColor else disabledContainerColor

    /**
     * Represents the content color for this button, depending on [enabled].
     *
     * @param enabled whether the button is enabled
     */
    @Stable
    internal fun contentColor(enabled: Boolean): Color =
        if (enabled) contentColor else disabledContentColor

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is ButtonColors) return false

        if (containerColor != other.containerColor) return false
        if (contentColor != other.contentColor) return false
        if (disabledContainerColor != other.disabledContainerColor) return false
        if (disabledContentColor != other.disabledContentColor) return false

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

Sources: [live-androidx-material3-material3-material3-button-lines-1850-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1885–1919)


/**
 * The shapes that will be used in buttons. Button will morph between these shapes depending on the
 * interaction of the button, assuming all of the shapes are [CornerBasedShape]s.
 *
 * @property shape is the active shape.
 * @property pressedShape is the pressed shape.
 */
@Immutable
public class ButtonShapes(public val shape: Shape, public val pressedShape: Shape) {
    /** Returns a copy of this ButtonShapes, optionally overriding some of the values. */
    public fun copy(
        shape: Shape? = this.shape,
        pressedShape: Shape? = this.pressedShape,
    ): ButtonShapes =
        ButtonShapes(
            shape = shape.takeOrElse { this.shape },
            pressedShape = pressedShape.takeOrElse { this.pressedShape },
        )

    internal fun Shape?.takeOrElse(block: () -> Shape): Shape = this ?: block()

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is ButtonShapes) return false

        if (shape != other.shape) return false
        if (pressedShape != other.pressedShape) return false

        return true
    }

    override fun hashCode(): Int {
        var result = shape.hashCode()
        result = 31 * result + pressedShape.hashCode()

Sources: [live-androidx-material3-material3-material3-button-lines-1885-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 1920–1950)


        return result
    }
}

internal val ButtonShapes.hasRoundedCornerShapes: Boolean
    get() = shape is RoundedCornerShape && pressedShape is RoundedCornerShape

internal val ButtonShapes.hasCornerBasedShapes: Boolean
    get() = shape is CornerBasedShape && pressedShape is CornerBasedShape

@Composable
private fun shapeByInteraction(
    shapes: ButtonShapes,
    pressed: Boolean,
    animationSpec: FiniteAnimationSpec<Float>,
): Shape {
    val shape =
        if (pressed) {
            shapes.pressedShape
        } else {
            shapes.shape
        }
    if (shapes.hasRoundedCornerShapes)
        return key(shapes) { rememberAnimatedShape(shape as RoundedCornerShape, animationSpec) }
    else if (shapes.hasCornerBasedShapes)
        return key(shapes) { rememberAnimatedShape(shape as CornerBasedShape, animationSpec) }

    return shape
}


Sources: [live-androidx-material3-material3-material3-button-lines-1920-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 211–245)

 * The default text style for internal [Text] components will be set to [Typography.labelLarge].
 *
 * @param onClick called when this button is clicked
 * @param shapes the [ButtonShapes] that this button with morph between depending on the user's
 *   interaction with the button.
 * @param modifier the [Modifier] to be applied to this button
 * @param enabled controls the enabled state of this button. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
 *   states. See [ButtonDefaults.buttonColors].
 * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
 *   states. This controls the size of the shadow below the button. See
 *   [ButtonElevation.shadowElevation].
 * @param border the border to draw around the container of this button
 * @param contentPadding the spacing values to apply internally between the container and the
 *   content
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
 *   preview the button in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param content The content displayed on the button, expected to be text, icon or image.
 *
 * @material3expressive
 */
@OptIn(ExperimentalMaterial3ExpressiveApi::class)
@Composable
public fun Button(
    onClick: () -> Unit,
    shapes: ButtonShapes,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    colors: ButtonColors = ButtonDefaults.buttonColors(),
    elevation: ButtonElevation? = ButtonDefaults.buttonElevation(),
    border: BorderStroke? = null,

Sources: [live-androidx-material3-material3-material3-button-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 246–280)

    contentPadding: PaddingValues = ButtonDefaults.contentPaddingFor(ButtonDefaults.MinHeight),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    // TODO Load the motionScheme tokens from the component tokens file
    // MotionSchemeKeyTokens.DefaultEffects is intentional here to prevent
    // any bounce in this component.
    val defaultAnimationSpec = MotionSchemeKeyTokens.DefaultEffects.value<Float>()
    val pressed by interactionSource.collectIsPressedAsState()
    val containerColor = colors.containerColor(enabled)
    val contentColor = colors.contentColor(enabled)
    val shadowElevation = elevation?.shadowElevation(enabled, interactionSource)?.value ?: 0.dp
    val buttonShape = shapeByInteraction(shapes, pressed, defaultAnimationSpec)

    Surface(
        onClick = onClick,
        modifier = modifier.semantics { role = Role.Button },
        enabled = enabled,
        shape = buttonShape,
        color = containerColor,
        contentColor = contentColor,
        shadowElevation = shadowElevation,
        border = border,
        interactionSource = interactionSource,
    ) {
        ProvideContentColorTextStyle(
            contentColor = contentColor,
            textStyle = MaterialTheme.typography.labelLarge,
        ) {
            Row(
                Modifier.defaultMinSize(
                        minWidth = ButtonDefaults.MinWidth,
                        minHeight = ButtonDefaults.MinHeight,

Sources: [live-androidx-material3-material3-material3-button-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 281–315)

                    )
                    .padding(contentPadding),
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically,
                content = content,
            )
        }
    }
}

/**
 * [Material Design elevated button](https://m3.material.io/components/buttons/overview)
 *
 * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
 * post.
 *
 * ![Elevated button
 * image](https://developer.android.com/images/reference/androidx/compose/material3/elevated-button.png)
 *
 * Elevated buttons are high-emphasis buttons that are essentially [FilledTonalButton]s with a
 * shadow. To prevent shadow creep, only use them when absolutely necessary, such as when the button
 * requires visual separation from patterned container.
 *
 * @sample androidx.compose.material3.samples.ElevatedButtonSample
 *
 * Choose the best button for an action based on the amount of emphasis it needs. The more important
 * an action is, the higher emphasis its button should be.
 * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
 * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
 * - See [OutlinedButton] for a medium-emphasis button with a border.
 * - See [TextButton] for a low-emphasis button with no border.
 *
 * The default text style for internal [Text] components will be set to [Typography.labelLarge].
 *
 * @param onClick called when this button is clicked

Sources: [live-androidx-material3-material3-material3-button-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 316–350)

 * @param modifier the [Modifier] to be applied to this button
 * @param enabled controls the enabled state of this button. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param shape defines the shape of this button's container, border (when [border] is not null),
 *   and shadow (when using [elevation])
 * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
 *   states. See [ButtonDefaults.elevatedButtonColors].
 * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
 *   states. This controls the size of the shadow below the button. Additionally, when the container
 *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
 *   overlay. See [ButtonDefaults.elevatedButtonElevation].
 * @param border the border to draw around the container of this button
 * @param contentPadding the spacing values to apply internally between the container and the
 *   content
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
 *   preview the button in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param content The content displayed on the button, expected to be text, icon or image.
 */
@Composable
public fun ElevatedButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    shape: Shape = ButtonDefaults.elevatedShape,
    colors: ButtonColors = ButtonDefaults.elevatedButtonColors(),
    elevation: ButtonElevation? = ButtonDefaults.elevatedButtonElevation(),
    border: BorderStroke? = null,
    contentPadding: PaddingValues = ButtonDefaults.ContentPadding,
    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
): Unit =
    Button(

Sources: [live-androidx-material3-material3-material3-button-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 351–385)

        onClick = onClick,
        modifier = modifier,
        enabled = enabled,
        shape = shape,
        colors = colors,
        elevation = elevation,
        border = border,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
        content = content,
    )

// TODO add link to image of pressed elevated button
/**
 * [Material Design elevated button](https://m3.material.io/components/buttons/overview)
 *
 * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
 * post. It also morphs between the shapes provided in [shapes] depending on the state of the
 * interaction with the button as long as the shapes provided our [CornerBasedShape]s. If a shape in
 * [shapes] isn't a [CornerBasedShape], then button will change between the [ButtonShapes] according
 * to user interaction.
 *
 * ![Elevated button
 * image](https://developer.android.com/images/reference/androidx/compose/material3/elevated-button.png)
 *
 * Elevated buttons are high-emphasis buttons that are essentially [FilledTonalButton]s with a
 * shadow. To prevent shadow creep, only use them when absolutely necessary, such as when the button
 * requires visual separation from patterned container.
 *
 * @sample androidx.compose.material3.samples.ElevatedButtonWithAnimatedShapeSample
 *
 * Choose the best button for an action based on the amount of emphasis it needs. The more important
 * an action is, the higher emphasis its button should be.
 * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
 * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].

Sources: [live-androidx-material3-material3-material3-button-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 36–70)

import androidx.compose.foundation.shape.CornerBasedShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.internal.ProvideContentColorTextStyle
import androidx.compose.material3.internal.animateElevation
import androidx.compose.material3.internal.rememberAnimatedShape
import androidx.compose.material3.tokens.BaselineButtonTokens
import androidx.compose.material3.tokens.ButtonLargeTokens
import androidx.compose.material3.tokens.ButtonMediumTokens
import androidx.compose.material3.tokens.ButtonSmallTokens
import androidx.compose.material3.tokens.ButtonXLargeTokens
import androidx.compose.material3.tokens.ButtonXSmallTokens
import androidx.compose.material3.tokens.ColorSchemeKeyTokens
import androidx.compose.material3.tokens.ElevatedButtonTokens
import androidx.compose.material3.tokens.FilledButtonTokens
import androidx.compose.material3.tokens.FilledTonalButtonTokens
import androidx.compose.material3.tokens.MotionSchemeKeyTokens
import androidx.compose.material3.tokens.OutlinedButtonTokens
import androidx.compose.material3.tokens.TextButtonTokens
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.Stable
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.takeOrElse
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.role

Sources: [live-androidx-material3-material3-material3-button-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 386–420)

 * - See [OutlinedButton] for a medium-emphasis button with a border.
 * - See [TextButton] for a low-emphasis button with no border.
 *
 * The default text style for internal [Text] components will be set to [Typography.labelLarge].
 *
 * @param onClick called when this button is clicked
 * @param shapes the [ButtonShapes] that this button with morph between depending on the user's
 *   interaction with the button.
 * @param modifier the [Modifier] to be applied to this button
 * @param enabled controls the enabled state of this button. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
 *   states. See [ButtonDefaults.elevatedButtonColors].
 * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
 *   states. This controls the size of the shadow below the button. Additionally, when the container
 *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
 *   overlay. See [ButtonDefaults.elevatedButtonElevation].
 * @param border the border to draw around the container of this button
 * @param contentPadding the spacing values to apply internally between the container and the
 *   content
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
 *   preview the button in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param content The content displayed on the button, expected to be text, icon or image.
 *
 * @material3expressive
 */
@OptIn(ExperimentalMaterial3ExpressiveApi::class)
@Composable
public fun ElevatedButton(
    onClick: () -> Unit,
    shapes: ButtonShapes,
    modifier: Modifier = Modifier,

Sources: [live-androidx-material3-material3-material3-button-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 421–455)

    enabled: Boolean = true,
    colors: ButtonColors = ButtonDefaults.elevatedButtonColors(),
    elevation: ButtonElevation? = ButtonDefaults.elevatedButtonElevation(),
    border: BorderStroke? = null,
    contentPadding: PaddingValues = ButtonDefaults.contentPaddingFor(ButtonDefaults.MinHeight),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
): Unit =
    Button(
        onClick = onClick,
        shapes = shapes,
        modifier = modifier,
        enabled = enabled,
        colors = colors,
        elevation = elevation,
        border = border,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
        content = content,
    )

/**
 * [Material Design filled tonal button](https://m3.material.io/components/buttons/overview)
 *
 * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
 * post.
 *
 * ![Filled tonal button
 * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-tonal-button.png)
 *
 * Filled tonal buttons are medium-emphasis buttons that is an alternative middle ground between
 * default [Button]s (filled) and [OutlinedButton]s. They can be used in contexts where
 * lower-priority button requires slightly more emphasis than an outline would give, such as "Next"
 * in an onboarding flow. Tonal buttons use the secondary color mapping.
 *

Sources: [live-androidx-material3-material3-material3-button-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 456–490)

 * @sample androidx.compose.material3.samples.FilledTonalButtonSample
 *
 * Choose the best button for an action based on the amount of emphasis it needs. The more important
 * an action is, the higher emphasis its button should be.
 * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
 * - See [ElevatedButton] for a [FilledTonalButton] with a shadow.
 * - See [OutlinedButton] for a medium-emphasis button with a border.
 * - See [TextButton] for a low-emphasis button with no border.
 *
 * The default text style for internal [Text] components will be set to [Typography.labelLarge].
 *
 * @param onClick called when this button is clicked
 * @param modifier the [Modifier] to be applied to this button
 * @param enabled controls the enabled state of this button. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param shape defines the shape of this button's container, border (when [border] is not null),
 *   and shadow (when using [elevation])
 * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
 *   states. See [ButtonDefaults.filledTonalButtonColors].
 * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
 *   states. This controls the size of the shadow below the button. Additionally, when the container
 *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
 *   overlay.
 * @param border the border to draw around the container of this button
 * @param contentPadding the spacing values to apply internally between the container and the
 *   content
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
 *   preview the button in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param content The content displayed on the button, expected to be text, icon or image.
 */
@Composable
public fun FilledTonalButton(

Sources: [live-androidx-material3-material3-material3-button-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 491–525)

    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    shape: Shape = ButtonDefaults.filledTonalShape,
    colors: ButtonColors = ButtonDefaults.filledTonalButtonColors(),
    elevation: ButtonElevation? = ButtonDefaults.filledTonalButtonElevation(),
    border: BorderStroke? = null,
    contentPadding: PaddingValues = ButtonDefaults.ContentPadding,
    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
): Unit =
    Button(
        onClick = onClick,
        modifier = modifier,
        enabled = enabled,
        shape = shape,
        colors = colors,
        elevation = elevation,
        border = border,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
        content = content,
    )

// TODO add link to image of pressed filled tonal button
/**
 * [Material Design filled tonal button](https://m3.material.io/components/buttons/overview)
 *
 * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
 * post. It also morphs between the shapes provided in [shapes] depending on the state of the
 * interaction with the button as long as the shapes provided our [CornerBasedShape]s. If a shape in
 * [shapes] isn't a [CornerBasedShape], then button will change between the [ButtonShapes] according
 * to user interaction.
 *
 * ![Filled tonal button

Sources: [live-androidx-material3-material3-material3-button-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 526–557)

 * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-tonal-button.png)
 *
 * Filled tonal buttons are medium-emphasis buttons that is an alternative middle ground between
 * default [Button]s (filled) and [OutlinedButton]s. They can be used in contexts where
 * lower-priority button requires slightly more emphasis than an outline would give, such as "Next"
 * in an onboarding flow. Tonal buttons use the secondary color mapping.
 *
 * @sample androidx.compose.material3.samples.FilledTonalButtonWithAnimatedShapeSample
 *
 * Choose the best button for an action based on the amount of emphasis it needs. The more important
 * an action is, the higher emphasis its button should be.
 * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
 * - See [ElevatedButton] for a [FilledTonalButton] with a shadow.
 * - See [OutlinedButton] for a medium-emphasis button with a border.
 * - See [TextButton] for a low-emphasis button with no border.
 *
 * The default text style for internal [Text] components will be set to [Typography.labelLarge].
 *
 * @param onClick called when this button is clicked
 * @param shapes the [ButtonShapes] that this button with morph between depending on the user's
 *   interaction with the button.
 * @param modifier the [Modifier] to be applied to this button
 * @param enabled controls the enabled state of this button. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
 *   states. See [ButtonDefaults.filledTonalButtonColors].
 * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
 *   states. This controls the size of the shadow below the button. Additionally, when the container
 *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
 *   overlay.
 * @param border the border to draw around the container of this button

Sources: [live-androidx-material3-material3-material3-button-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 558–592)

 * @param contentPadding the spacing values to apply internally between the container and the
 *   content
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
 *   preview the button in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param content The content displayed on the button, expected to be text, icon or image.
 *
 * @material3expressive
 */
@OptIn(ExperimentalMaterial3ExpressiveApi::class)
@Composable
public fun FilledTonalButton(
    onClick: () -> Unit,
    shapes: ButtonShapes,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    colors: ButtonColors = ButtonDefaults.filledTonalButtonColors(),
    elevation: ButtonElevation? = ButtonDefaults.filledTonalButtonElevation(),
    border: BorderStroke? = null,
    contentPadding: PaddingValues = ButtonDefaults.contentPaddingFor(ButtonDefaults.MinHeight),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
): Unit =
    Button(
        onClick = onClick,
        shapes = shapes,
        modifier = modifier,
        enabled = enabled,
        colors = colors,
        elevation = elevation,
        border = border,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
        content = content,

Sources: [live-androidx-material3-material3-material3-button-lines-558-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 593–627)

    )

/**
 * [Material Design outlined button](https://m3.material.io/components/buttons/overview)
 *
 * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
 * post.
 *
 * ![Outlined button
 * image](https://developer.android.com/images/reference/androidx/compose/material3/outlined-button.png)
 *
 * Outlined buttons are medium-emphasis buttons. They contain actions that are important, but are
 * not the primary action in an app. Outlined buttons pair well with [Button]s to indicate an
 * alternative, secondary action.
 *
 * @sample androidx.compose.material3.samples.OutlinedButtonSample
 *
 * Choose the best button for an action based on the amount of emphasis it needs. The more important
 * an action is, the higher emphasis its button should be.
 * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
 * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
 * - See [OutlinedButton] for a medium-emphasis button with a border.
 * - See [TextButton] for a low-emphasis button with no border.
 *
 * The default text style for internal [Text] components will be set to [Typography.labelLarge].
 *
 * @param onClick called when this button is clicked
 * @param modifier the [Modifier] to be applied to this button
 * @param enabled controls the enabled state of this button. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param shape defines the shape of this button's container, border (when [border] is not null),
 *   and shadow (when using [elevation]).
 * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
 *   states. See [ButtonDefaults.outlinedButtonColors].

Sources: [live-androidx-material3-material3-material3-button-lines-593-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 628–662)

 * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
 *   states. This controls the size of the shadow below the button. Additionally, when the container
 *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
 *   overlay.
 * @param border the border to draw around the container of this button. Pass `null` for no border.
 * @param contentPadding the spacing values to apply internally between the container and the
 *   content
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
 *   preview the button in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param content The content displayed on the button, expected to be text, icon or image.
 */
@Composable
public fun OutlinedButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    shape: Shape = ButtonDefaults.outlinedShape,
    colors: ButtonColors = ButtonDefaults.outlinedButtonColors(),
    elevation: ButtonElevation? = null,
    border: BorderStroke? = ButtonDefaults.outlinedButtonBorder(enabled),
    contentPadding: PaddingValues = ButtonDefaults.ContentPadding,
    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
): Unit =
    Button(
        onClick = onClick,
        modifier = modifier,
        enabled = enabled,
        shape = shape,
        colors = colors,
        elevation = elevation,
        border = border,
        contentPadding = contentPadding,

Sources: [live-androidx-material3-material3-material3-button-lines-628-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 663–697)

        interactionSource = interactionSource,
        content = content,
    )

// TODO add link to image of pressed outlined button
/**
 * [Material Design outlined button](https://m3.material.io/components/buttons/overview)
 *
 * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
 * post. It also morphs between the shapes provided in [shapes] depending on the state of the
 * interaction with the button as long as the shapes provided our [CornerBasedShape]s. If a shape in
 * [shapes] isn't a [CornerBasedShape], then button will change between the [ButtonShapes] according
 * to user interaction.
 *
 * ![Outlined button
 * image](https://developer.android.com/images/reference/androidx/compose/material3/outlined-button.png)
 *
 * Outlined buttons are medium-emphasis buttons. They contain actions that are important, but are
 * not the primary action in an app. Outlined buttons pair well with [Button]s to indicate an
 * alternative, secondary action.
 *
 * @sample androidx.compose.material3.samples.OutlinedButtonWithAnimatedShapeSample
 *
 * Choose the best button for an action based on the amount of emphasis it needs. The more important
 * an action is, the higher emphasis its button should be.
 * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
 * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
 * - See [OutlinedButton] for a medium-emphasis button with a border.
 * - See [TextButton] for a low-emphasis button with no border.
 *
 * The default text style for internal [Text] components will be set to [Typography.labelLarge].
 *
 * @param onClick called when this button is clicked
 * @param shapes the [ButtonShapes] that this button with morph between depending on the user's
 *   interaction with the button.

Sources: [live-androidx-material3-material3-material3-button-lines-663-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 698–732)

 * @param modifier the [Modifier] to be applied to this button
 * @param enabled controls the enabled state of this button. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
 *   states. See [ButtonDefaults.outlinedButtonColors].
 * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
 *   states. This controls the size of the shadow below the button. Additionally, when the container
 *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
 *   overlay.
 * @param border the border to draw around the container of this button. Pass `null` for no border.
 * @param contentPadding the spacing values to apply internally between the container and the
 *   content
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
 *   preview the button in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param content The content displayed on the button, expected to be text, icon or image.
 *
 * @material3expressive
 */
@OptIn(ExperimentalMaterial3ExpressiveApi::class)
@Composable
public fun OutlinedButton(
    onClick: () -> Unit,
    shapes: ButtonShapes,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    colors: ButtonColors = ButtonDefaults.outlinedButtonColors(),
    elevation: ButtonElevation? = null,
    border: BorderStroke? = ButtonDefaults.outlinedButtonBorder(enabled),
    contentPadding: PaddingValues = ButtonDefaults.contentPaddingFor(ButtonDefaults.MinHeight),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
): Unit =

Sources: [live-androidx-material3-material3-material3-button-lines-698-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 71–105)

import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

/**
 * [Material Design button](https://m3.material.io/components/buttons/overview)
 *
 * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
 * post.
 *
 * ![Filled button
 * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-button.png)
 *
 * Filled buttons are high-emphasis buttons. Filled buttons have the most visual impact after the
 * [FloatingActionButton], and should be used for important, final actions that complete a flow,
 * like "Save", "Join now", or "Confirm".
 *
 * @sample androidx.compose.material3.samples.ButtonSample
 * @sample androidx.compose.material3.samples.ButtonWithIconSample
 *
 * Button that uses a square shape instead of the default round shape:
 *
 * @sample androidx.compose.material3.samples.SquareButtonSample
 *
 * Button that utilizes the small design content padding:
 *
 * @sample androidx.compose.material3.samples.SmallButtonSample
 *
 * [Button] uses the small design spec as default. For a [Button] that uses the design for extra
 * small, medium, large, or extra large buttons:
 *
 * @sample androidx.compose.material3.samples.XSmallButtonWithIconSample
 * @sample androidx.compose.material3.samples.MediumButtonWithIconSample
 * @sample androidx.compose.material3.samples.LargeButtonWithIconSample

Sources: [live-androidx-material3-material3-material3-button-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 733–767)

    Button(
        onClick = onClick,
        shapes = shapes,
        modifier = modifier,
        enabled = enabled,
        colors = colors,
        elevation = elevation,
        border = border,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
        content = content,
    )

/**
 * [Material Design text button](https://m3.material.io/components/buttons/overview)
 *
 * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
 * post.
 *
 * ![Text button
 * image](https://developer.android.com/images/reference/androidx/compose/material3/text-button.png)
 *
 * Text buttons are typically used for less-pronounced actions, including those located in dialogs
 * and cards. In cards, text buttons help maintain an emphasis on card content. Text buttons are
 * used for the lowest priority actions, especially when presenting multiple options.
 *
 * @sample androidx.compose.material3.samples.TextButtonWithAnimatedShapeSample
 *
 * Choose the best button for an action based on the amount of emphasis it needs. The more important
 * an action is, the higher emphasis its button should be.
 * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
 * - See [ElevatedButton] for a [FilledTonalButton] with a shadow.
 * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
 * - See [OutlinedButton] for a medium-emphasis button with a border.
 *

Sources: [live-androidx-material3-material3-material3-button-lines-733-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 768–802)

 * The default text style for internal [Text] components will be set to [Typography.labelLarge].
 *
 * @param onClick called when this button is clicked
 * @param modifier the [Modifier] to be applied to this button
 * @param enabled controls the enabled state of this button. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param shape defines the shape of this button's container, border (when [border] is not null),
 *   and shadow (when using [elevation])
 * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
 *   states. See [ButtonDefaults.textButtonColors].
 * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
 *   states. This controls the size of the shadow below the button. Additionally, when the container
 *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
 *   overlay. A TextButton typically has no elevation, and the default value is `null`. See
 *   [ElevatedButton] for a button with elevation.
 * @param border the border to draw around the container of this button
 * @param contentPadding the spacing values to apply internally between the container and the
 *   content
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
 *   preview the button in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param content The content displayed on the button, expected to be text.
 */
@Composable
public fun TextButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    shape: Shape = ButtonDefaults.textShape,
    colors: ButtonColors = ButtonDefaults.textButtonColors(),
    elevation: ButtonElevation? = null,
    border: BorderStroke? = null,
    contentPadding: PaddingValues = ButtonDefaults.TextButtonContentPadding,

Sources: [live-androidx-material3-material3-material3-button-lines-768-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 803–837)

    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
): Unit =
    Button(
        onClick = onClick,
        modifier = modifier,
        enabled = enabled,
        shape = shape,
        colors = colors,
        elevation = elevation,
        border = border,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
        content = content,
    )

// TODO add link to image of pressed text button
/**
 * [Material Design text button](https://m3.material.io/components/buttons/overview)
 *
 * Buttons help people initiate actions, from sending an email, to sharing a document, to liking a
 * post. It also morphs between the shapes provided in [shapes] depending on the state of the
 * interaction with the button as long as the shapes provided our [CornerBasedShape]s. If a shape in
 * [shapes] isn't a [CornerBasedShape], then button will change between the [ButtonShapes] according
 * to user interaction.
 *
 * ![Text button
 * image](https://developer.android.com/images/reference/androidx/compose/material3/text-button.png)
 *
 * Text buttons are typically used for less-pronounced actions, including those located in dialogs
 * and cards. In cards, text buttons help maintain an emphasis on card content. Text buttons are
 * used for the lowest priority actions, especially when presenting multiple options.
 *
 * @sample androidx.compose.material3.samples.TextButtonSample
 *

Sources: [live-androidx-material3-material3-material3-button-lines-803-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 838–869)

 * Choose the best button for an action based on the amount of emphasis it needs. The more important
 * an action is, the higher emphasis its button should be.
 * - See [Button] for a high-emphasis button without a shadow, also known as a filled button.
 * - See [ElevatedButton] for a [FilledTonalButton] with a shadow.
 * - See [FilledTonalButton] for a middle ground between [OutlinedButton] and [Button].
 * - See [OutlinedButton] for a medium-emphasis button with a border.
 *
 * The default text style for internal [Text] components will be set to [Typography.labelLarge].
 *
 * @param onClick called when this button is clicked
 * @param shapes the [ButtonShapes] that this button with morph between depending on the user's
 *   interaction with the button.
 * @param modifier the [Modifier] to be applied to this button
 * @param enabled controls the enabled state of this button. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param colors [ButtonColors] that will be used to resolve the colors for this button in different
 *   states. See [ButtonDefaults.textButtonColors].
 * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
 *   states. This controls the size of the shadow below the button. Additionally, when the container
 *   color is [ColorScheme.surface], this controls the amount of primary color applied as an
 *   overlay. A TextButton typically has no elevation, and the default value is `null`. See
 *   [ElevatedButton] for a button with elevation.
 * @param border the border to draw around the container of this button
 * @param contentPadding the spacing values to apply internally between the container and the
 *   content
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
 *   preview the button in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param content The content displayed on the button, expected to be text.
 *

Sources: [live-androidx-material3-material3-material3-button-lines-838-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 870–904)

 * @material3expressive
 */
@OptIn(ExperimentalMaterial3ExpressiveApi::class)
@Composable
public fun TextButton(
    onClick: () -> Unit,
    shapes: ButtonShapes,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    colors: ButtonColors = ButtonDefaults.textButtonColors(),
    elevation: ButtonElevation? = null,
    border: BorderStroke? = null,
    contentPadding: PaddingValues = ButtonDefaults.contentPaddingFor(ButtonDefaults.MinHeight),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
): Unit =
    Button(
        onClick = onClick,
        shapes = shapes,
        modifier = modifier,
        enabled = enabled,
        colors = colors,
        elevation = elevation,
        border = border,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
        content = content,
    )

// TODO(b/201341237): Use token values for 0 elevation?
// TODO(b/201341237): Use token values for null border?
// TODO(b/201341237): Use token values for no color (transparent)?
/**
 * Contains the default values used by all 5 button types.
 *

Sources: [live-androidx-material3-material3-material3-button-lines-870-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 905–939)

 * Default values that apply to all buttons types are [MinWidth], [MinHeight], [IconSize], and
 * [IconSpacing].
 *
 * A default value that applies only to [Button], [ElevatedButton], [FilledTonalButton], and
 * [OutlinedButton] is [ContentPadding].
 *
 * Default values that apply only to [Button] are [buttonColors] and [buttonElevation]. Default
 * values that apply only to [ElevatedButton] are [elevatedButtonColors] and
 * [elevatedButtonElevation]. Default values that apply only to [FilledTonalButton] are
 * [filledTonalButtonColors] and [filledTonalButtonElevation]. A default value that applies only to
 * [OutlinedButton] is [outlinedButtonColors]. Default values that apply only to [TextButton] is
 * [textButtonColors].
 */
public object ButtonDefaults {

    private val ButtonLeadingSpace = BaselineButtonTokens.LeadingSpace
    private val ButtonTrailingSpace = BaselineButtonTokens.TrailingSpace
    private val ButtonWithIconStartpadding = 16.dp
    private val SmallStartPadding = ButtonSmallTokens.LeadingSpace
    private val SmallEndPadding = ButtonSmallTokens.TrailingSpace
    private val ButtonVerticalPadding = 8.dp

    /**
     * The default content padding used by [Button], [ElevatedButton], [FilledTonalButton],
     * [OutlinedButton], and [TextButton] buttons.
     * - See [ButtonWithIconContentPadding] for content padding used by [Button] that contains
     *   [Icon].
     */
    public val ContentPadding: PaddingValues =
        PaddingValues(
            start = ButtonLeadingSpace,
            top = ButtonVerticalPadding,
            end = ButtonTrailingSpace,
            bottom = ButtonVerticalPadding,
        )

Sources: [live-androidx-material3-material3-material3-button-lines-905-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 940–974)


    /** The default content padding used by [Button] that contains an [Icon]. */
    public val ButtonWithIconContentPadding: PaddingValues =
        PaddingValues(
            start = ButtonWithIconStartpadding,
            top = ButtonVerticalPadding,
            end = ButtonTrailingSpace,
            bottom = ButtonVerticalPadding,
        )

    /** The default content padding used for small [Button] */
    public val SmallContentPadding: PaddingValues
        get() =
            PaddingValues(
                start = SmallStartPadding,
                top = smallVerticalPadding,
                end = SmallEndPadding,
                bottom = smallVerticalPadding,
            )

    private fun getSmallContentPadding(hasStartIcon: Boolean, hasEndIcon: Boolean) =
        PaddingValues(
            start = if (hasStartIcon) iconSmallHorizontalPadding else SmallStartPadding,
            top = smallVerticalPadding,
            end = if (hasEndIcon) iconSmallHorizontalPadding else SmallEndPadding,
            bottom = smallVerticalPadding,
        )

    /** Default content padding for an extra small button. */
    public val ExtraSmallContentPadding: PaddingValues
        get() =
            PaddingValues(
                // TODO update with the value from ButtonXSmallTokens.kt once it's been corrected
                start = 12.dp,
                end = 12.dp,

Sources: [live-androidx-material3-material3-material3-button-lines-940-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)

## androidx.compose.material3 Button.kt source (lines 975–1009)

                top = 6.dp,
                bottom = 6.dp,
            )

    /** Default content padding for a medium button. */
    public val MediumContentPadding: PaddingValues
        get() =
            PaddingValues(
                start = MediumLeadingPadding,
                top = MediumVerticalPadding,
                end = MediumTrailingPadding,
                bottom = MediumVerticalPadding,
            )

    private fun getMediumContentPadding(hasLeadingIcon: Boolean, hasTrailingIcon: Boolean) =
        PaddingValues(
            start = if (hasLeadingIcon) IconMediumLeadingPadding else MediumLeadingPadding,
            top = MediumVerticalPadding,
            end = if (hasTrailingIcon) IconMediumTrailingPadding else MediumTrailingPadding,
            bottom = MediumVerticalPadding,
        )

    /** Default content padding for a large button. */
    public val LargeContentPadding: PaddingValues
        get() =
            PaddingValues(
                start = LargeLeadingPadding,
                top = LargeVerticalPadding,
                end = LargeTrailingPadding,
                bottom = LargeVerticalPadding,
            )

    private fun getLargeContentPadding(hasLeadingIcon: Boolean, hasTrailingIcon: Boolean) =
        PaddingValues(
            start = if (hasLeadingIcon) IconLargeLeadingPadding else LargeLeadingPadding,

Sources: [live-androidx-material3-material3-material3-button-lines-975-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Button.kt)
