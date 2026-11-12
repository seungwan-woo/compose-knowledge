---
type: reference
title: androidx.compose.material Button.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material-material-material-button-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 1
    endLine: 35
    sha256: 25d490ac0e26e96b1327cc0374e5b4d1a28294d3224a558d57d53fbe1a5d344b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2019 The Android Open Source Project
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

      package androidx.compose.material

      import androidx.compose.animation.core.Animatable
      import androidx.compose.animation.core.VectorConverter
      import androidx.compose.foundation.BorderStroke
      import androidx.compose.foundation.interaction.FocusInteraction
      import androidx.compose.foundation.interaction.HoverInteraction
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.InteractionSource
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.interaction.PressInteraction
      import androidx.compose.foundation.layout.Arrangement
      import androidx.compose.foundation.layout.PaddingValues
      import androidx.compose.foundation.layout.Row
      import androidx.compose.foundation.layout.RowScope
      import androidx.compose.foundation.layout.defaultMinSize
      import androidx.compose.foundation.layout.padding
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.CompositionLocalProvider
  - id: live-androidx-material-material-material-button-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 106
    endLine: 140
    sha256: 26fd73823c26f1f02cb3df7e80ef1729a832e957de9ebcea7da4ce411a786108
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          val contentColor by colors.contentColor(enabled)
          Surface(
              onClick = onClick,
              modifier = modifier.semantics { role = Role.Button },
              enabled = enabled,
              shape = shape,
              color = colors.backgroundColor(enabled).value,
              contentColor = contentColor.copy(alpha = 1f),
              border = border,
              elevation = elevation?.elevation(enabled, interactionSource)?.value ?: 0.dp,
              interactionSource = interactionSource,
          ) {
              CompositionLocalProvider(LocalContentAlpha provides contentColor.alpha) {
                  ProvideTextStyle(value = MaterialTheme.typography.button) {
                      Row(
                          Modifier.defaultMinSize(
                                  minWidth = ButtonDefaults.MinWidth,
                                  minHeight = ButtonDefaults.MinHeight,
                              )
                              .padding(contentPadding),
                          horizontalArrangement = Arrangement.Center,
                          verticalAlignment = Alignment.CenterVertically,
                          content = content,
                      )
                  }
              }
          }
      }

      /**
       * [Material Design outlined button](https://material.io/components/buttons#outlined-button)
       *
  - id: live-androidx-material-material-material-button-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 141
    endLine: 175
    sha256: c24b3002654e084660b11f81e2df269e86445ce1514110494a4e149214072a1c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren't
       * the primary action in an app.
       *
       * ![Outlined button
       * image](https://developer.android.com/images/reference/androidx/compose/material/outlined-button.png)
       *
       * The default text style for internal [Text] components will be set to [Typography.button].
       *
       * @sample androidx.compose.material.samples.OutlinedButtonSample
       * @param onClick Will be called when the user clicks the button
       * @param modifier Modifier to be applied to the button
       * @param enabled Controls the enabled state of the button. When `false`, this button will not be
       *   clickable
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
       *   preview the button in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
       *   states. An OutlinedButton typically has no elevation, see [Button] for a button with elevation.
       * @param shape Defines the button's shape as well as its shadow
       * @param border Border to draw around the button
       * @param colors [ButtonColors] that will be used to resolve the background and content color for
       *   this button in different states. See [ButtonDefaults.outlinedButtonColors].
       * @param contentPadding The spacing values to apply internally between the container and the
       *   content
       * @param content The content displayed on the button, expected to be text, icon or image.
       */
      @Composable
      @NonRestartableComposable
      public fun OutlinedButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          interactionSource: MutableInteractionSource? = null,
          elevation: ButtonElevation? = null,
  - id: live-androidx-material-material-material-button-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 176
    endLine: 210
    sha256: 96b10ce4b88b786568ea0e992e4762385e324d271ea55ae8a159a25ae8049fd8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          shape: Shape = MaterialTheme.shapes.small,
          border: BorderStroke? = ButtonDefaults.outlinedBorder,
          colors: ButtonColors = ButtonDefaults.outlinedButtonColors(),
          contentPadding: PaddingValues = ButtonDefaults.ContentPadding,
          content: @Composable RowScope.() -> Unit,
      ): Unit =
          Button(
              onClick = onClick,
              modifier = modifier,
              enabled = enabled,
              interactionSource = interactionSource,
              elevation = elevation,
              shape = shape,
              border = border,
              colors = colors,
              contentPadding = contentPadding,
              content = content,
          )

      /**
       * [Material Design text button](https://material.io/components/buttons#text-button)
       *
       * Text buttons are typically used for less-pronounced actions, including those located in dialogs
       * and cards. In cards, text buttons help maintain an emphasis on card content.
       *
       * ![Text button
       * image](https://developer.android.com/images/reference/androidx/compose/material/text-button.png)
       *
       * The default text style for internal [Text] components will be set to [Typography.button].
       *
       * @sample androidx.compose.material.samples.TextButtonSample
       * @param onClick Will be called when the user clicks the button
       * @param modifier Modifier to be applied to the button
       * @param enabled Controls the enabled state of the button. When `false`, this button will not be
       *   clickable
  - id: live-androidx-material-material-material-button-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 211
    endLine: 245
    sha256: 54971c15990faa88084ff6b289661bac8993e238f90de8542efb2636b5557830
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
       *   preview the button in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
       *   states. A TextButton typically has no elevation, see [Button] for a button with elevation.
       * @param shape Defines the button's shape as well as its shadow
       * @param border Border to draw around the button
       * @param colors [ButtonColors] that will be used to resolve the background and content color for
       *   this button in different states. See [ButtonDefaults.textButtonColors].
       * @param contentPadding The spacing values to apply internally between the container and the
       *   content
       * @param content The content displayed on the button, expected to be text.
       */
      @Composable
      @NonRestartableComposable
      public fun TextButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          interactionSource: MutableInteractionSource? = null,
          elevation: ButtonElevation? = null,
          shape: Shape = MaterialTheme.shapes.small,
          border: BorderStroke? = null,
          colors: ButtonColors = ButtonDefaults.textButtonColors(),
          contentPadding: PaddingValues = ButtonDefaults.TextButtonContentPadding,
          content: @Composable RowScope.() -> Unit,
      ): Unit =
          Button(
              onClick = onClick,
              modifier = modifier,
              enabled = enabled,
              interactionSource = interactionSource,
              elevation = elevation,
              shape = shape,
  - id: live-androidx-material-material-material-button-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 246
    endLine: 280
    sha256: b522b25bb526deb796affaed5c15582795857b67029b656bb82a683582ab0274
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              border = border,
              colors = colors,
              contentPadding = contentPadding,
              content = content,
          )

      /**
       * Represents the elevation for a button in different states.
       *
       * See [ButtonDefaults.elevation] for the default elevation used in a [Button].
       */
      @Stable
      public interface ButtonElevation {
          /**
           * Represents the elevation used in a button, depending on [enabled] and [interactionSource].
           *
           * @param enabled whether the button is enabled
           * @param interactionSource the [InteractionSource] for this button
           */
          @Composable
          public fun elevation(enabled: Boolean, interactionSource: InteractionSource): State<Dp>
      }

      /**
       * Represents the background and content colors used in a button in different states.
       *
       * See [ButtonDefaults.buttonColors] for the default colors used in a [Button]. See
       * [ButtonDefaults.outlinedButtonColors] for the default colors used in a [OutlinedButton]. See
       * [ButtonDefaults.textButtonColors] for the default colors used in a [TextButton].
       */
      @Stable
      public interface ButtonColors {
          /**
           * Represents the background color for this button, depending on [enabled].
           *
  - id: live-androidx-material-material-material-button-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 281
    endLine: 315
    sha256: 6a46f2ca7b423a016a8f605b62c66e523f1c391ed4fe0fbb1528596ad18efcfc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param enabled whether the button is enabled
           */
          @Composable public fun backgroundColor(enabled: Boolean): State<Color>

          /**
           * Represents the content color for this button, depending on [enabled].
           *
           * @param enabled whether the button is enabled
           */
          @Composable public fun contentColor(enabled: Boolean): State<Color>
      }

      /** Contains the default values used by [Button] */
      public object ButtonDefaults {
          private val ButtonHorizontalPadding = 16.dp
          private val ButtonVerticalPadding = 8.dp

          /** The default content padding used by [Button] */
          public val ContentPadding: PaddingValues =
              PaddingValues(
                  start = ButtonHorizontalPadding,
                  top = ButtonVerticalPadding,
                  end = ButtonHorizontalPadding,
                  bottom = ButtonVerticalPadding,
              )

          /**
           * The default min width applied for the [Button]. Note that you can override it by applying
           * Modifier.widthIn directly on [Button].
           */
          public val MinWidth: Dp = 64.dp

          /**
           * The default min height applied for the [Button]. Note that you can override it by applying
           * Modifier.heightIn directly on [Button].
  - id: live-androidx-material-material-material-button-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 316
    endLine: 350
    sha256: 591f348904b7565570a646c309145548dcc93efcb3342216b81ac8f89714e316
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          public val MinHeight: Dp = 36.dp

          /**
           * The default size of the icon when used inside a [Button].
           *
           * @sample androidx.compose.material.samples.ButtonWithIconSample
           */
          public val IconSize: Dp = 18.dp

          /**
           * The default size of the spacing between an icon and a text when they used inside a [Button].
           *
           * @sample androidx.compose.material.samples.ButtonWithIconSample
           */
          public val IconSpacing: Dp = 8.dp

          /**
           * Creates a [ButtonElevation] that will animate between the provided values according to the
           * Material specification for a [Button].
           *
           * @param defaultElevation the elevation to use when the [Button] is enabled, and has no other
           *   [Interaction]s.
           * @param pressedElevation the elevation to use when the [Button] is enabled and is pressed.
           * @param disabledElevation the elevation to use when the [Button] is not enabled.
           */
          @Deprecated("Use another overload of elevation", level = DeprecationLevel.HIDDEN)
          @Composable
          public fun elevation(
              defaultElevation: Dp = 2.dp,
              pressedElevation: Dp = 8.dp,
              disabledElevation: Dp = 0.dp,
          ): ButtonElevation =
              elevation(
                  defaultElevation,
  - id: live-androidx-material-material-material-button-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 351
    endLine: 385
    sha256: 15ae1407cc6f6b780995d375c602757c6d00976b5e1f6e8c73edf2e0760911d9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  pressedElevation,
                  disabledElevation,
                  hoveredElevation = 4.dp,
                  focusedElevation = 4.dp,
              )

          /**
           * Creates a [ButtonElevation] that will animate between the provided values according to the
           * Material specification for a [Button].
           *
           * @param defaultElevation the elevation to use when the [Button] is enabled, and has no other
           *   [Interaction]s.
           * @param pressedElevation the elevation to use when the [Button] is enabled and is pressed.
           * @param disabledElevation the elevation to use when the [Button] is not enabled.
           * @param hoveredElevation the elevation to use when the [Button] is enabled and is hovered.
           * @param focusedElevation the elevation to use when the [Button] is enabled and is focused.
           */
          @Suppress("UNUSED_PARAMETER")
          @Composable
          public fun elevation(
              defaultElevation: Dp = 2.dp,
              pressedElevation: Dp = 8.dp,
              disabledElevation: Dp = 0.dp,
              hoveredElevation: Dp = 4.dp,
              focusedElevation: Dp = 4.dp,
          ): ButtonElevation {
              return remember(
                  defaultElevation,
                  pressedElevation,
                  disabledElevation,
                  hoveredElevation,
                  focusedElevation,
              ) {
                  DefaultButtonElevation(
                      defaultElevation = defaultElevation,
  - id: live-androidx-material-material-material-button-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 36
    endLine: 70
    sha256: 33be993381d5b5888ebe695786910a0d92232b32f2335b53952beae169708d71
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.LaunchedEffect
      import androidx.compose.runtime.NonRestartableComposable
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.State
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableStateListOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.rememberUpdatedState
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.graphics.compositeOver
      import androidx.compose.ui.semantics.Role
      import androidx.compose.ui.semantics.role
      import androidx.compose.ui.semantics.semantics
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.dp

      /**
       * [Material Design contained button](https://material.io/components/buttons#contained-button)
       *
       * Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They
       * contain actions that are primary to your app.
       *
       * ![Contained button
       * image](https://developer.android.com/images/reference/androidx/compose/material/contained-button.png)
       *
       * The default text style for internal [Text] components will be set to [Typography.button].
       *
       * @sample androidx.compose.material.samples.ButtonSample
       *
       * If you need to add an icon just put it inside the [content] slot together with a spacing and a
  - id: live-androidx-material-material-material-button-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 386
    endLine: 420
    sha256: 2b0c0b57b92d11d472aa3171c29228a5af78ec96cec04255d706985837f54e0d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                      pressedElevation = pressedElevation,
                      disabledElevation = disabledElevation,
                      hoveredElevation = hoveredElevation,
                      focusedElevation = focusedElevation,
                  )
              }
          }

          /**
           * Creates a [ButtonColors] that represents the default background and content colors used in a
           * [Button].
           *
           * @param backgroundColor the background color of this [Button] when enabled
           * @param contentColor the content color of this [Button] when enabled
           * @param disabledBackgroundColor the background color of this [Button] when not enabled
           * @param disabledContentColor the content color of this [Button] when not enabled
           */
          @Composable
          public fun buttonColors(
              backgroundColor: Color = MaterialTheme.colors.primary,
              contentColor: Color = contentColorFor(backgroundColor),
              disabledBackgroundColor: Color =
                  MaterialTheme.colors.onSurface
                      .copy(alpha = 0.12f)
                      .compositeOver(MaterialTheme.colors.surface),
              disabledContentColor: Color =
                  MaterialTheme.colors.onSurface.copy(alpha = ContentAlpha.disabled),
          ): ButtonColors =
              DefaultButtonColors(
                  backgroundColor = backgroundColor,
                  contentColor = contentColor,
                  disabledBackgroundColor = disabledBackgroundColor,
                  disabledContentColor = disabledContentColor,
              )
  - id: live-androidx-material-material-material-button-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 421
    endLine: 455
    sha256: 639c37d20ef8676e20ecbb4413fb0a66f5f0fe9ac0fd3a82bb423519a8cf06fa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /**
           * Creates a [ButtonColors] that represents the default background and content colors used in an
           * [OutlinedButton].
           *
           * @param backgroundColor the background color of this [OutlinedButton]
           * @param contentColor the content color of this [OutlinedButton] when enabled
           * @param disabledContentColor the content color of this [OutlinedButton] when not enabled
           */
          @Composable
          public fun outlinedButtonColors(
              backgroundColor: Color = MaterialTheme.colors.surface,
              contentColor: Color = MaterialTheme.colors.primary,
              disabledContentColor: Color =
                  MaterialTheme.colors.onSurface.copy(alpha = ContentAlpha.disabled),
          ): ButtonColors =
              DefaultButtonColors(
                  backgroundColor = backgroundColor,
                  contentColor = contentColor,
                  disabledBackgroundColor = backgroundColor,
                  disabledContentColor = disabledContentColor,
              )

          /**
           * Creates a [ButtonColors] that represents the default background and content colors used in a
           * [TextButton].
           *
           * @param backgroundColor the background color of this [TextButton]
           * @param contentColor the content color of this [TextButton] when enabled
           * @param disabledContentColor the content color of this [TextButton] when not enabled
           */
          @Composable
          public fun textButtonColors(
              backgroundColor: Color = Color.Transparent,
              contentColor: Color = MaterialTheme.colors.primary,
              disabledContentColor: Color =
  - id: live-androidx-material-material-material-button-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 456
    endLine: 490
    sha256: 8e2495e0ad8fe106ce8eea9ec9497b2cc086d12f8e05b77aac1cb9e7e7eb6a9a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  MaterialTheme.colors.onSurface.copy(alpha = ContentAlpha.disabled),
          ): ButtonColors =
              DefaultButtonColors(
                  backgroundColor = backgroundColor,
                  contentColor = contentColor,
                  disabledBackgroundColor = backgroundColor,
                  disabledContentColor = disabledContentColor,
              )

          /** The default color opacity used for an [OutlinedButton]'s border color */
          public const val OutlinedBorderOpacity: Float = 0.12f

          /** The default [OutlinedButton]'s border size */
          public val OutlinedBorderSize: Dp = 1.dp

          /** The default disabled content color used by all types of [Button]s */
          public val outlinedBorder: BorderStroke
              @Composable
              get() =
                  BorderStroke(
                      OutlinedBorderSize,
                      MaterialTheme.colors.onSurface.copy(alpha = OutlinedBorderOpacity),
                  )

          private val TextButtonHorizontalPadding = 8.dp

          /** The default content padding used by [TextButton] */
          public val TextButtonContentPadding: PaddingValues =
              PaddingValues(
                  start = TextButtonHorizontalPadding,
                  top = ContentPadding.calculateTopPadding(),
                  end = TextButtonHorizontalPadding,
                  bottom = ContentPadding.calculateBottomPadding(),
              )
      }
  - id: live-androidx-material-material-material-button-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 491
    endLine: 525
    sha256: 9a9040a06e65c237e004f9288b399477a408c661f2f600e5bb9fc0dffa354dc4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /** Default [ButtonElevation] implementation. */
      @Stable
      private class DefaultButtonElevation(
          private val defaultElevation: Dp,
          private val pressedElevation: Dp,
          private val disabledElevation: Dp,
          private val hoveredElevation: Dp,
          private val focusedElevation: Dp,
      ) : ButtonElevation {
          @Composable
          override fun elevation(enabled: Boolean, interactionSource: InteractionSource): State<Dp> {
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
  - id: live-androidx-material-material-material-button-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 526
    endLine: 560
    sha256: 36b57249e084e4b2284f868dd44a091e5524f33e038efb70244d35b067edca3c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              interactions.remove(interaction.press)
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
  - id: live-androidx-material-material-material-button-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 561
    endLine: 595
    sha256: a14612a4ac64d4e75961dff93af7571931cb622faecfb36a9641dd06abfeae20
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
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
      }

      /** Default [ButtonColors] implementation. */
      @Immutable
      private class DefaultButtonColors(
          private val backgroundColor: Color,
          private val contentColor: Color,
          private val disabledBackgroundColor: Color,
          private val disabledContentColor: Color,
      ) : ButtonColors {
          @Composable
          override fun backgroundColor(enabled: Boolean): State<Color> {
              return rememberUpdatedState(if (enabled) backgroundColor else disabledBackgroundColor)
          }

          @Composable
          override fun contentColor(enabled: Boolean): State<Color> {
              return rememberUpdatedState(if (enabled) contentColor else disabledContentColor)
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || this::class != other::class) return false
  - id: live-androidx-material-material-material-button-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 596
    endLine: 614
    sha256: 5c8b546c242445b0ee6cb6b7aad00f2a54b5ae9085433e9ac45d2ab20ae6f7e7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              other as DefaultButtonColors

              if (backgroundColor != other.backgroundColor) return false
              if (contentColor != other.contentColor) return false
              if (disabledBackgroundColor != other.disabledBackgroundColor) return false
              if (disabledContentColor != other.disabledContentColor) return false

              return true
          }

          override fun hashCode(): Int {
              var result = backgroundColor.hashCode()
              result = 31 * result + contentColor.hashCode()
              result = 31 * result + disabledBackgroundColor.hashCode()
              result = 31 * result + disabledContentColor.hashCode()
              return result
          }
      }
  - id: live-androidx-material-material-material-button-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt
    startLine: 71
    endLine: 105
    sha256: f2a3d4899df339f1bfb744a4908b3fac458e2ca09d1d91cf248f2ee931f2a376
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * text:
       *
       * @sample androidx.compose.material.samples.ButtonWithIconSample
       * @param onClick Will be called when the user clicks the button
       * @param modifier Modifier to be applied to the button
       * @param enabled Controls the enabled state of the button. When `false`, this button will not be
       *   clickable
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
       *   preview the button in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
       *   states. This controls the size of the shadow below the button. Pass `null` here to disable
       *   elevation for this button. See [ButtonDefaults.elevation].
       * @param shape Defines the button's shape as well as its shadow
       * @param border Border to draw around the button
       * @param colors [ButtonColors] that will be used to resolve the background and content color for
       *   this button in different states. See [ButtonDefaults.buttonColors].
       * @param contentPadding The spacing values to apply internally between the container and the
       *   content
       * @param content The content displayed on the button, expected to be text, icon or image.
       */
      @OptIn(ExperimentalMaterialApi::class)
      @Composable
      public fun Button(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          interactionSource: MutableInteractionSource? = null,
          elevation: ButtonElevation? = ButtonDefaults.elevation(),
          shape: Shape = MaterialTheme.shapes.small,
          border: BorderStroke? = null,
          colors: ButtonColors = ButtonDefaults.buttonColors(),
          contentPadding: PaddingValues = ButtonDefaults.ContentPadding,
          content: @Composable RowScope.() -> Unit,
compose:
  id: live-androidx-material-material-material-button
  artifact: androidx.compose.material:material
  fqn: androidx.compose.material
  sections:
    - id: live-androidx-material-material-material-button-lines-1
      title: androidx.compose.material Button.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-1-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-106
      title: androidx.compose.material Button.kt source (lines 106–140)
      aliases:
        - androidx.compose.material.Button
        - androidx.compose.material.ButtonDefaults
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-106-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-141
      title: androidx.compose.material Button.kt source (lines 141–175)
      aliases:
        - androidx.compose.material.Button
        - androidx.compose.material.OutlinedButton
        - androidx.compose.material.ButtonElevation
        - androidx.compose.material.ButtonColors
        - androidx.compose.material.ButtonDefaults
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-141-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-176
      title: androidx.compose.material Button.kt source (lines 176–210)
      aliases:
        - androidx.compose.material.Button
        - androidx.compose.material.ButtonColors
        - androidx.compose.material.ButtonDefaults
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-176-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-211
      title: androidx.compose.material Button.kt source (lines 211–245)
      aliases:
        - androidx.compose.material.Button
        - androidx.compose.material.TextButton
        - androidx.compose.material.ButtonElevation
        - androidx.compose.material.ButtonColors
        - androidx.compose.material.ButtonDefaults
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-211-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-246
      title: androidx.compose.material Button.kt source (lines 246–280)
      aliases:
        - androidx.compose.material.Button
        - androidx.compose.material.OutlinedButton
        - androidx.compose.material.TextButton
        - androidx.compose.material.ButtonElevation
        - androidx.compose.material.ButtonColors
        - androidx.compose.material.ButtonDefaults
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-246-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-281
      title: androidx.compose.material Button.kt source (lines 281–315)
      aliases:
        - androidx.compose.material.Button
        - androidx.compose.material.ButtonDefaults
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-281-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-316
      title: androidx.compose.material Button.kt source (lines 316–350)
      aliases:
        - androidx.compose.material.Button
        - androidx.compose.material.ButtonElevation
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-316-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-351
      title: androidx.compose.material Button.kt source (lines 351–385)
      aliases:
        - androidx.compose.material.Button
        - androidx.compose.material.ButtonElevation
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-351-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-36
      title: androidx.compose.material Button.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-36-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-386
      title: androidx.compose.material Button.kt source (lines 386–420)
      aliases:
        - androidx.compose.material.Button
        - androidx.compose.material.ButtonColors
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-386-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-421
      title: androidx.compose.material Button.kt source (lines 421–455)
      aliases:
        - androidx.compose.material.OutlinedButton
        - androidx.compose.material.TextButton
        - androidx.compose.material.ButtonColors
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-421-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-456
      title: androidx.compose.material Button.kt source (lines 456–490)
      aliases:
        - androidx.compose.material.Button
        - androidx.compose.material.OutlinedButton
        - androidx.compose.material.TextButton
        - androidx.compose.material.ButtonColors
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-456-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-491
      title: androidx.compose.material Button.kt source (lines 491–525)
      aliases:
        - androidx.compose.material.ButtonElevation
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-491-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-526
      title: androidx.compose.material Button.kt source (lines 526–560)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-526-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-561
      title: androidx.compose.material Button.kt source (lines 561–595)
      aliases:
        - androidx.compose.material.ButtonColors
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-561-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-596
      title: androidx.compose.material Button.kt source (lines 596–614)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-596-source
      relatedIds: []
    - id: live-androidx-material-material-material-button-lines-71
      title: androidx.compose.material Button.kt source (lines 71–105)
      aliases:
        - androidx.compose.material.Button
        - androidx.compose.material.ButtonElevation
        - androidx.compose.material.ButtonColors
        - androidx.compose.material.ButtonDefaults
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-button-lines-71-source
      relatedIds: []
---

# androidx.compose.material Button.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt

## androidx.compose.material Button.kt source (lines 1–35)

/*
 * Copyright 2019 The Android Open Source Project
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

package androidx.compose.material

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.VectorConverter
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.interaction.FocusInteraction
import androidx.compose.foundation.interaction.HoverInteraction
import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.InteractionSource
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.PressInteraction
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider

Sources: [live-androidx-material-material-material-button-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 106–140)

) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    val contentColor by colors.contentColor(enabled)
    Surface(
        onClick = onClick,
        modifier = modifier.semantics { role = Role.Button },
        enabled = enabled,
        shape = shape,
        color = colors.backgroundColor(enabled).value,
        contentColor = contentColor.copy(alpha = 1f),
        border = border,
        elevation = elevation?.elevation(enabled, interactionSource)?.value ?: 0.dp,
        interactionSource = interactionSource,
    ) {
        CompositionLocalProvider(LocalContentAlpha provides contentColor.alpha) {
            ProvideTextStyle(value = MaterialTheme.typography.button) {
                Row(
                    Modifier.defaultMinSize(
                            minWidth = ButtonDefaults.MinWidth,
                            minHeight = ButtonDefaults.MinHeight,
                        )
                        .padding(contentPadding),
                    horizontalArrangement = Arrangement.Center,
                    verticalAlignment = Alignment.CenterVertically,
                    content = content,
                )
            }
        }
    }
}

/**
 * [Material Design outlined button](https://material.io/components/buttons#outlined-button)
 *

Sources: [live-androidx-material-material-material-button-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 141–175)

 * Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren't
 * the primary action in an app.
 *
 * ![Outlined button
 * image](https://developer.android.com/images/reference/androidx/compose/material/outlined-button.png)
 *
 * The default text style for internal [Text] components will be set to [Typography.button].
 *
 * @sample androidx.compose.material.samples.OutlinedButtonSample
 * @param onClick Will be called when the user clicks the button
 * @param modifier Modifier to be applied to the button
 * @param enabled Controls the enabled state of the button. When `false`, this button will not be
 *   clickable
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
 *   preview the button in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
 *   states. An OutlinedButton typically has no elevation, see [Button] for a button with elevation.
 * @param shape Defines the button's shape as well as its shadow
 * @param border Border to draw around the button
 * @param colors [ButtonColors] that will be used to resolve the background and content color for
 *   this button in different states. See [ButtonDefaults.outlinedButtonColors].
 * @param contentPadding The spacing values to apply internally between the container and the
 *   content
 * @param content The content displayed on the button, expected to be text, icon or image.
 */
@Composable
@NonRestartableComposable
public fun OutlinedButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    interactionSource: MutableInteractionSource? = null,
    elevation: ButtonElevation? = null,

Sources: [live-androidx-material-material-material-button-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 176–210)

    shape: Shape = MaterialTheme.shapes.small,
    border: BorderStroke? = ButtonDefaults.outlinedBorder,
    colors: ButtonColors = ButtonDefaults.outlinedButtonColors(),
    contentPadding: PaddingValues = ButtonDefaults.ContentPadding,
    content: @Composable RowScope.() -> Unit,
): Unit =
    Button(
        onClick = onClick,
        modifier = modifier,
        enabled = enabled,
        interactionSource = interactionSource,
        elevation = elevation,
        shape = shape,
        border = border,
        colors = colors,
        contentPadding = contentPadding,
        content = content,
    )

/**
 * [Material Design text button](https://material.io/components/buttons#text-button)
 *
 * Text buttons are typically used for less-pronounced actions, including those located in dialogs
 * and cards. In cards, text buttons help maintain an emphasis on card content.
 *
 * ![Text button
 * image](https://developer.android.com/images/reference/androidx/compose/material/text-button.png)
 *
 * The default text style for internal [Text] components will be set to [Typography.button].
 *
 * @sample androidx.compose.material.samples.TextButtonSample
 * @param onClick Will be called when the user clicks the button
 * @param modifier Modifier to be applied to the button
 * @param enabled Controls the enabled state of the button. When `false`, this button will not be
 *   clickable

Sources: [live-androidx-material-material-material-button-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 211–245)

 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
 *   preview the button in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
 *   states. A TextButton typically has no elevation, see [Button] for a button with elevation.
 * @param shape Defines the button's shape as well as its shadow
 * @param border Border to draw around the button
 * @param colors [ButtonColors] that will be used to resolve the background and content color for
 *   this button in different states. See [ButtonDefaults.textButtonColors].
 * @param contentPadding The spacing values to apply internally between the container and the
 *   content
 * @param content The content displayed on the button, expected to be text.
 */
@Composable
@NonRestartableComposable
public fun TextButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    interactionSource: MutableInteractionSource? = null,
    elevation: ButtonElevation? = null,
    shape: Shape = MaterialTheme.shapes.small,
    border: BorderStroke? = null,
    colors: ButtonColors = ButtonDefaults.textButtonColors(),
    contentPadding: PaddingValues = ButtonDefaults.TextButtonContentPadding,
    content: @Composable RowScope.() -> Unit,
): Unit =
    Button(
        onClick = onClick,
        modifier = modifier,
        enabled = enabled,
        interactionSource = interactionSource,
        elevation = elevation,
        shape = shape,

Sources: [live-androidx-material-material-material-button-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 246–280)

        border = border,
        colors = colors,
        contentPadding = contentPadding,
        content = content,
    )

/**
 * Represents the elevation for a button in different states.
 *
 * See [ButtonDefaults.elevation] for the default elevation used in a [Button].
 */
@Stable
public interface ButtonElevation {
    /**
     * Represents the elevation used in a button, depending on [enabled] and [interactionSource].
     *
     * @param enabled whether the button is enabled
     * @param interactionSource the [InteractionSource] for this button
     */
    @Composable
    public fun elevation(enabled: Boolean, interactionSource: InteractionSource): State<Dp>
}

/**
 * Represents the background and content colors used in a button in different states.
 *
 * See [ButtonDefaults.buttonColors] for the default colors used in a [Button]. See
 * [ButtonDefaults.outlinedButtonColors] for the default colors used in a [OutlinedButton]. See
 * [ButtonDefaults.textButtonColors] for the default colors used in a [TextButton].
 */
@Stable
public interface ButtonColors {
    /**
     * Represents the background color for this button, depending on [enabled].
     *

Sources: [live-androidx-material-material-material-button-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 281–315)

     * @param enabled whether the button is enabled
     */
    @Composable public fun backgroundColor(enabled: Boolean): State<Color>

    /**
     * Represents the content color for this button, depending on [enabled].
     *
     * @param enabled whether the button is enabled
     */
    @Composable public fun contentColor(enabled: Boolean): State<Color>
}

/** Contains the default values used by [Button] */
public object ButtonDefaults {
    private val ButtonHorizontalPadding = 16.dp
    private val ButtonVerticalPadding = 8.dp

    /** The default content padding used by [Button] */
    public val ContentPadding: PaddingValues =
        PaddingValues(
            start = ButtonHorizontalPadding,
            top = ButtonVerticalPadding,
            end = ButtonHorizontalPadding,
            bottom = ButtonVerticalPadding,
        )

    /**
     * The default min width applied for the [Button]. Note that you can override it by applying
     * Modifier.widthIn directly on [Button].
     */
    public val MinWidth: Dp = 64.dp

    /**
     * The default min height applied for the [Button]. Note that you can override it by applying
     * Modifier.heightIn directly on [Button].

Sources: [live-androidx-material-material-material-button-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 316–350)

     */
    public val MinHeight: Dp = 36.dp

    /**
     * The default size of the icon when used inside a [Button].
     *
     * @sample androidx.compose.material.samples.ButtonWithIconSample
     */
    public val IconSize: Dp = 18.dp

    /**
     * The default size of the spacing between an icon and a text when they used inside a [Button].
     *
     * @sample androidx.compose.material.samples.ButtonWithIconSample
     */
    public val IconSpacing: Dp = 8.dp

    /**
     * Creates a [ButtonElevation] that will animate between the provided values according to the
     * Material specification for a [Button].
     *
     * @param defaultElevation the elevation to use when the [Button] is enabled, and has no other
     *   [Interaction]s.
     * @param pressedElevation the elevation to use when the [Button] is enabled and is pressed.
     * @param disabledElevation the elevation to use when the [Button] is not enabled.
     */
    @Deprecated("Use another overload of elevation", level = DeprecationLevel.HIDDEN)
    @Composable
    public fun elevation(
        defaultElevation: Dp = 2.dp,
        pressedElevation: Dp = 8.dp,
        disabledElevation: Dp = 0.dp,
    ): ButtonElevation =
        elevation(
            defaultElevation,

Sources: [live-androidx-material-material-material-button-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 351–385)

            pressedElevation,
            disabledElevation,
            hoveredElevation = 4.dp,
            focusedElevation = 4.dp,
        )

    /**
     * Creates a [ButtonElevation] that will animate between the provided values according to the
     * Material specification for a [Button].
     *
     * @param defaultElevation the elevation to use when the [Button] is enabled, and has no other
     *   [Interaction]s.
     * @param pressedElevation the elevation to use when the [Button] is enabled and is pressed.
     * @param disabledElevation the elevation to use when the [Button] is not enabled.
     * @param hoveredElevation the elevation to use when the [Button] is enabled and is hovered.
     * @param focusedElevation the elevation to use when the [Button] is enabled and is focused.
     */
    @Suppress("UNUSED_PARAMETER")
    @Composable
    public fun elevation(
        defaultElevation: Dp = 2.dp,
        pressedElevation: Dp = 8.dp,
        disabledElevation: Dp = 0.dp,
        hoveredElevation: Dp = 4.dp,
        focusedElevation: Dp = 4.dp,
    ): ButtonElevation {
        return remember(
            defaultElevation,
            pressedElevation,
            disabledElevation,
            hoveredElevation,
            focusedElevation,
        ) {
            DefaultButtonElevation(
                defaultElevation = defaultElevation,

Sources: [live-androidx-material-material-material-button-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 36–70)

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.NonRestartableComposable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.compositeOver
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.role
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

/**
 * [Material Design contained button](https://material.io/components/buttons#contained-button)
 *
 * Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They
 * contain actions that are primary to your app.
 *
 * ![Contained button
 * image](https://developer.android.com/images/reference/androidx/compose/material/contained-button.png)
 *
 * The default text style for internal [Text] components will be set to [Typography.button].
 *
 * @sample androidx.compose.material.samples.ButtonSample
 *
 * If you need to add an icon just put it inside the [content] slot together with a spacing and a

Sources: [live-androidx-material-material-material-button-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 386–420)

                pressedElevation = pressedElevation,
                disabledElevation = disabledElevation,
                hoveredElevation = hoveredElevation,
                focusedElevation = focusedElevation,
            )
        }
    }

    /**
     * Creates a [ButtonColors] that represents the default background and content colors used in a
     * [Button].
     *
     * @param backgroundColor the background color of this [Button] when enabled
     * @param contentColor the content color of this [Button] when enabled
     * @param disabledBackgroundColor the background color of this [Button] when not enabled
     * @param disabledContentColor the content color of this [Button] when not enabled
     */
    @Composable
    public fun buttonColors(
        backgroundColor: Color = MaterialTheme.colors.primary,
        contentColor: Color = contentColorFor(backgroundColor),
        disabledBackgroundColor: Color =
            MaterialTheme.colors.onSurface
                .copy(alpha = 0.12f)
                .compositeOver(MaterialTheme.colors.surface),
        disabledContentColor: Color =
            MaterialTheme.colors.onSurface.copy(alpha = ContentAlpha.disabled),
    ): ButtonColors =
        DefaultButtonColors(
            backgroundColor = backgroundColor,
            contentColor = contentColor,
            disabledBackgroundColor = disabledBackgroundColor,
            disabledContentColor = disabledContentColor,
        )


Sources: [live-androidx-material-material-material-button-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 421–455)

    /**
     * Creates a [ButtonColors] that represents the default background and content colors used in an
     * [OutlinedButton].
     *
     * @param backgroundColor the background color of this [OutlinedButton]
     * @param contentColor the content color of this [OutlinedButton] when enabled
     * @param disabledContentColor the content color of this [OutlinedButton] when not enabled
     */
    @Composable
    public fun outlinedButtonColors(
        backgroundColor: Color = MaterialTheme.colors.surface,
        contentColor: Color = MaterialTheme.colors.primary,
        disabledContentColor: Color =
            MaterialTheme.colors.onSurface.copy(alpha = ContentAlpha.disabled),
    ): ButtonColors =
        DefaultButtonColors(
            backgroundColor = backgroundColor,
            contentColor = contentColor,
            disabledBackgroundColor = backgroundColor,
            disabledContentColor = disabledContentColor,
        )

    /**
     * Creates a [ButtonColors] that represents the default background and content colors used in a
     * [TextButton].
     *
     * @param backgroundColor the background color of this [TextButton]
     * @param contentColor the content color of this [TextButton] when enabled
     * @param disabledContentColor the content color of this [TextButton] when not enabled
     */
    @Composable
    public fun textButtonColors(
        backgroundColor: Color = Color.Transparent,
        contentColor: Color = MaterialTheme.colors.primary,
        disabledContentColor: Color =

Sources: [live-androidx-material-material-material-button-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 456–490)

            MaterialTheme.colors.onSurface.copy(alpha = ContentAlpha.disabled),
    ): ButtonColors =
        DefaultButtonColors(
            backgroundColor = backgroundColor,
            contentColor = contentColor,
            disabledBackgroundColor = backgroundColor,
            disabledContentColor = disabledContentColor,
        )

    /** The default color opacity used for an [OutlinedButton]'s border color */
    public const val OutlinedBorderOpacity: Float = 0.12f

    /** The default [OutlinedButton]'s border size */
    public val OutlinedBorderSize: Dp = 1.dp

    /** The default disabled content color used by all types of [Button]s */
    public val outlinedBorder: BorderStroke
        @Composable
        get() =
            BorderStroke(
                OutlinedBorderSize,
                MaterialTheme.colors.onSurface.copy(alpha = OutlinedBorderOpacity),
            )

    private val TextButtonHorizontalPadding = 8.dp

    /** The default content padding used by [TextButton] */
    public val TextButtonContentPadding: PaddingValues =
        PaddingValues(
            start = TextButtonHorizontalPadding,
            top = ContentPadding.calculateTopPadding(),
            end = TextButtonHorizontalPadding,
            bottom = ContentPadding.calculateBottomPadding(),
        )
}

Sources: [live-androidx-material-material-material-button-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 491–525)


/** Default [ButtonElevation] implementation. */
@Stable
private class DefaultButtonElevation(
    private val defaultElevation: Dp,
    private val pressedElevation: Dp,
    private val disabledElevation: Dp,
    private val hoveredElevation: Dp,
    private val focusedElevation: Dp,
) : ButtonElevation {
    @Composable
    override fun elevation(enabled: Boolean, interactionSource: InteractionSource): State<Dp> {
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

Sources: [live-androidx-material-material-material-button-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 526–560)

                        interactions.remove(interaction.press)
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

Sources: [live-androidx-material-material-material-button-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 561–595)

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
}

/** Default [ButtonColors] implementation. */
@Immutable
private class DefaultButtonColors(
    private val backgroundColor: Color,
    private val contentColor: Color,
    private val disabledBackgroundColor: Color,
    private val disabledContentColor: Color,
) : ButtonColors {
    @Composable
    override fun backgroundColor(enabled: Boolean): State<Color> {
        return rememberUpdatedState(if (enabled) backgroundColor else disabledBackgroundColor)
    }

    @Composable
    override fun contentColor(enabled: Boolean): State<Color> {
        return rememberUpdatedState(if (enabled) contentColor else disabledContentColor)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false


Sources: [live-androidx-material-material-material-button-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 596–614)

        other as DefaultButtonColors

        if (backgroundColor != other.backgroundColor) return false
        if (contentColor != other.contentColor) return false
        if (disabledBackgroundColor != other.disabledBackgroundColor) return false
        if (disabledContentColor != other.disabledContentColor) return false

        return true
    }

    override fun hashCode(): Int {
        var result = backgroundColor.hashCode()
        result = 31 * result + contentColor.hashCode()
        result = 31 * result + disabledBackgroundColor.hashCode()
        result = 31 * result + disabledContentColor.hashCode()
        return result
    }
}


Sources: [live-androidx-material-material-material-button-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)

## androidx.compose.material Button.kt source (lines 71–105)

 * text:
 *
 * @sample androidx.compose.material.samples.ButtonWithIconSample
 * @param onClick Will be called when the user clicks the button
 * @param modifier Modifier to be applied to the button
 * @param enabled Controls the enabled state of the button. When `false`, this button will not be
 *   clickable
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this button. You can use this to change the button's appearance or
 *   preview the button in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param elevation [ButtonElevation] used to resolve the elevation for this button in different
 *   states. This controls the size of the shadow below the button. Pass `null` here to disable
 *   elevation for this button. See [ButtonDefaults.elevation].
 * @param shape Defines the button's shape as well as its shadow
 * @param border Border to draw around the button
 * @param colors [ButtonColors] that will be used to resolve the background and content color for
 *   this button in different states. See [ButtonDefaults.buttonColors].
 * @param contentPadding The spacing values to apply internally between the container and the
 *   content
 * @param content The content displayed on the button, expected to be text, icon or image.
 */
@OptIn(ExperimentalMaterialApi::class)
@Composable
public fun Button(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    interactionSource: MutableInteractionSource? = null,
    elevation: ButtonElevation? = ButtonDefaults.elevation(),
    shape: Shape = MaterialTheme.shapes.small,
    border: BorderStroke? = null,
    colors: ButtonColors = ButtonDefaults.buttonColors(),
    contentPadding: PaddingValues = ButtonDefaults.ContentPadding,
    content: @Composable RowScope.() -> Unit,

Sources: [live-androidx-material-material-material-button-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt)
