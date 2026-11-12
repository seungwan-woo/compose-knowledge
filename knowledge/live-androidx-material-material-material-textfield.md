---
type: reference
title: androidx.compose.material TextField.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material-material-material-textfield-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 1
    endLine: 35
    sha256: 06e0c7535501df081ba5c1354e97da3305885be3b1f1a460170c4beeecd2fa2a
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

      @file:Suppress("DEPRECATION") // b/552879150

      package androidx.compose.material

      import androidx.compose.foundation.BorderStroke
      import androidx.compose.foundation.ScrollState
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.layout.Box
      import androidx.compose.foundation.layout.PaddingValues
      import androidx.compose.foundation.layout.calculateEndPadding
      import androidx.compose.foundation.layout.calculateStartPadding
      import androidx.compose.foundation.layout.defaultMinSize
      import androidx.compose.foundation.layout.padding
      import androidx.compose.foundation.rememberScrollState
      import androidx.compose.foundation.shape.ZeroCornerSize
      import androidx.compose.foundation.text.BasicTextField
      import androidx.compose.foundation.text.KeyboardActions
      import androidx.compose.foundation.text.KeyboardOptions
  - id: live-androidx-material-material-material-textfield-lines-1015-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 1015
    endLine: 1049
    sha256: 497e8986a4b27879bb789152f9fe3331443719b14cfbc9840fe6ffdb62833155
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  labelBaseline + paddingToLabel + inputFieldHeight + bottomPaddingValue
              } else {
                  topPaddingValue + inputFieldHeight + bottomPaddingValue
              }
          return constraints.constrainHeight(
              maxOf(middleSectionHeight.roundToInt(), leadingHeight, trailingHeight)
          )
      }

      /**
       * Places the provided text field, placeholder and label with respect to the baseline offsets in
       * [TextField] when there is a label. When there is no label, [placeWithoutLabel] is used.
       */
      private fun Placeable.PlacementScope.placeWithLabel(
          width: Int,
          height: Int,
          textfieldPlaceable: Placeable,
          labelPlaceable: Placeable?,
          placeholderPlaceable: Placeable?,
          leadingPlaceable: Placeable?,
          trailingPlaceable: Placeable?,
          singleLine: Boolean,
          labelEndPosition: Int,
          textPosition: Int,
          animationProgress: Float,
          density: Float,
      ) {
          leadingPlaceable?.placeRelative(
              0,
              Alignment.CenterVertically.align(leadingPlaceable.height, height),
          )
          trailingPlaceable?.placeRelative(
              width - trailingPlaceable.width,
              Alignment.CenterVertically.align(trailingPlaceable.height, height),
          )
  - id: live-androidx-material-material-material-textfield-lines-1050-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 1050
    endLine: 1084
    sha256: 7869758831ffd77d38c44baaeecd2e646903f678337545cc734b86aee2e6194b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          labelPlaceable?.let {
              // if it's a single line, the label's start position is in the center of the
              // container. When it's a multiline text field, the label's start position is at the
              // top with padding
              val startPosition =
                  if (singleLine) {
                      Alignment.CenterVertically.align(it.height, height)
                  } else {
                      // even though the padding is defined by developer, it only affects text field when
                      // animation progress == 1,
                      // which is when text field is focused or non-empty input text. The start position
                      // of the label is always 16.dp.
                      (TextFieldPadding.value * density).roundToInt()
                  }
              val distance = startPosition - labelEndPosition
              val positionY = startPosition - (distance * animationProgress).roundToInt()
              it.placeRelative(widthOrZero(leadingPlaceable), positionY)
          }
          textfieldPlaceable.placeRelative(widthOrZero(leadingPlaceable), textPosition)
          placeholderPlaceable?.placeRelative(widthOrZero(leadingPlaceable), textPosition)
      }

      /**
       * Places the provided text field and placeholder in [TextField] when there is no label. When there
       * is a label, [placeWithLabel] is used
       */
      private fun Placeable.PlacementScope.placeWithoutLabel(
          width: Int,
          height: Int,
          textPlaceable: Placeable,
          placeholderPlaceable: Placeable?,
          leadingPlaceable: Placeable?,
          trailingPlaceable: Placeable?,
          singleLine: Boolean,
          density: Float,
  - id: live-androidx-material-material-material-textfield-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 106
    endLine: 140
    sha256: c6110aee1eb85b0914f6578d27147d352289e2f527e8a4dcda1de2ca1ee3f556
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * You may provide a placeholder:
       *
       * @sample androidx.compose.material.samples.TextFieldWithPlaceholder
       *
       * You can also provide leading and trailing icons:
       *
       * @sample androidx.compose.material.samples.TextFieldWithIcons
       *
       * To handle the error input state, use [isError] parameter:
       *
       * @sample androidx.compose.material.samples.TextFieldWithErrorState
       *
       * Additionally, you may provide additional message at the bottom:
       *
       * @sample androidx.compose.material.samples.TextFieldWithHelperMessage
       *
       * Hiding a software keyboard on IME action performed:
       *
       * @sample androidx.compose.material.samples.TextFieldWithHideKeyboardOnImeAction
       * @param state [TextFieldState] object that holds the internal editing state of this text field.
       * @param modifier a [Modifier] for this text field
       * @param enabled controls the enabled state of the [TextField]. When `false`, the text field will
       *   be neither editable nor focusable, the input of the text field will not be selectable, visually
       *   text field will appear in the disabled UI state
       * @param readOnly controls the editable state of the [TextField]. When `true`, the text field can
       *   not be modified, however, a user can focus it and copy text from it. Read-only text fields are
       *   usually used to display pre-filled forms that user can not edit
       * @param textStyle the style to be applied to the input text. The default [textStyle] uses the
       *   [LocalTextStyle] defined by the theme
       * @param label the optional label to be displayed inside the text field container. The default text
       *   style for internal [Text] is [Typography.caption] when the text field is in focus and
       *   [Typography.subtitle1] when the text field is not in focus
       * @param placeholder the optional placeholder to be displayed when the text field is in focus and
       *   the input text is empty. The default text style for internal [Text] is [Typography.subtitle1]
  - id: live-androidx-material-material-material-textfield-lines-1085-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 1085
    endLine: 1119
    sha256: 1cb7b1ac072919d5273430a141c8658235ff224148970f62b5ac38fd2d6970ab
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          paddingValues: PaddingValues,
      ) {
          val topPadding = (paddingValues.calculateTopPadding().value * density).roundToInt()

          leadingPlaceable?.placeRelative(
              0,
              Alignment.CenterVertically.align(leadingPlaceable.height, height),
          )
          trailingPlaceable?.placeRelative(
              width - trailingPlaceable.width,
              Alignment.CenterVertically.align(trailingPlaceable.height, height),
          )

          // Single line text field without label places its input center vertically. Multiline text
          // field without label places its input at the top with padding
          val textVerticalPosition =
              if (singleLine) {
                  Alignment.CenterVertically.align(textPlaceable.height, height)
              } else {
                  topPadding
              }
          textPlaceable.placeRelative(widthOrZero(leadingPlaceable), textVerticalPosition)

          // placeholder is placed similar to the text input above
          placeholderPlaceable?.let {
              val placeholderVerticalPosition =
                  if (singleLine) {
                      Alignment.CenterVertically.align(placeholderPlaceable.height, height)
                  } else {
                      topPadding
                  }
              it.placeRelative(widthOrZero(leadingPlaceable), placeholderVerticalPosition)
          }
      }
  - id: live-androidx-material-material-material-textfield-lines-1120-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 1120
    endLine: 1144
    sha256: da6399dd8a466696d95c5929419bc580badb88e265113187ed10a514c76af687
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      /** A draw modifier that draws a bottom indicator line in [TextField] */
      internal fun Modifier.drawIndicatorLine(indicatorBorder: BorderStroke): Modifier {
          val strokeWidthDp = indicatorBorder.width
          return drawWithContent {
              drawContent()
              if (strokeWidthDp == Dp.Hairline) return@drawWithContent
              val strokeWidth = strokeWidthDp.value * density
              val y = size.height - strokeWidth / 2
              drawLine(indicatorBorder.brush, Offset(0f, y), Offset(size.width, y), strokeWidth)
          }
      }

      /** Padding from the label's baseline to the top */
      internal val FirstBaselineOffset
          get() = 20.dp

      /** Padding from input field to the bottom */
      internal val TextFieldBottomPadding
          get() = 10.dp

      /** Padding from label's baseline (or FirstBaselineOffset) to the input field */
      /*@VisibleForTesting*/
      internal val TextFieldTopPadding
          get() = 2.dp
  - id: live-androidx-material-material-material-textfield-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 141
    endLine: 167
    sha256: a76bb9b761daa3314fb497e1edd69a761c7bbd20571cb1ff6ee89835c63856e8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param leadingIcon the optional leading icon to be displayed at the beginning of the text field
       *   container
       * @param trailingIcon the optional trailing icon to be displayed at the end of the text field
       *   container
       * @param isError indicates if the text field's current value is in error. If set to true, the
       *   label, bottom indicator and trailing icon by default will be displayed in error color
       * @param inputTransformation Optional [InputTransformation] that will be used to transform changes
       *   to the [TextFieldState] made by the user. The transformation will be applied to changes made by
       *   hardware and software keyboard events, pasting or dropping text, accessibility services, and
       *   tests. The transformation will _not_ be applied when changing the [state] programmatically, or
       *   when the transformation is changed. If the transformation is changed on an existing text field,
       *   it will be applied to the next user edit. the transformation will not immediately affect the
       *   current [state].
       * @param outputTransformation An [OutputTransformation] that transforms how the contents of the
       *   text field are presented.
       * @param keyboardOptions software keyboard options that contains configuration such as
       *   [KeyboardType] and [ImeAction].
       * @param onKeyboardAction Called when the user presses the action button in the input method editor
       *   (IME), or by pressing the enter key on a hardware keyboard. By default this parameter is null,
       *   and would execute the default behavior for a received IME Action e.g., [ImeAction.Done] would
       *   close the keyboard, [ImeAction.Next] would switch the focus to the next focusable item on the
       *   screen.
       * @param lineLimits Whether the text field should be [SingleLine], scroll horizontally, and ignore
       *   newlines; or [MultiLine] and grow and scroll vertically. If [SingleLine] is passed, all newline
       *   characters ('\n') within the text will be replaced with regular whitespace (' '), ensuring that
       *   the contents of the text field are presented in a single line.
       * @param scrollState Scroll state that manages either horizontal or vertical scroll of the text
  - id: live-androidx-material-material-material-textfield-lines-168-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 168
    endLine: 202
    sha256: 166a852ce7ef90db5331261b2eb56f0af4b4f1a66f716dfa3396831aaa8b3b13
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   field. If [lineLimits] is [SingleLine], this text field is treated as single line with
       *   horizontal scroll behavior. In other cases the text field becomes vertically scrollable.
       * @param shape the shape of the text field's container
       * @param colors [TextFieldColors] that will be used to resolve color of the text, content
       *   (including label, placeholder, leading and trailing icons, indicator line) and background for
       *   this text field in different states. See [TextFieldDefaults.textFieldColors]
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this text field. You can use this to change the text field's
       *   appearance or preview the text field in different states. Note that if `null` is provided,
       *   interactions will still happen internally.
       */
      @Composable
      public fun TextField(
          state: TextFieldState,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          readOnly: Boolean = false,
          textStyle: TextStyle = LocalTextStyle.current,
          label: @Composable (() -> Unit)? = null,
          placeholder: @Composable (() -> Unit)? = null,
          leadingIcon: @Composable (() -> Unit)? = null,
          trailingIcon: @Composable (() -> Unit)? = null,
          isError: Boolean = false,
          inputTransformation: InputTransformation? = null,
          outputTransformation: OutputTransformation? = null,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          onKeyboardAction: KeyboardActionHandler? = null,
          lineLimits: TextFieldLineLimits = TextFieldLineLimits.Default,
          scrollState: ScrollState = rememberScrollState(),
          shape: Shape = TextFieldDefaults.TextFieldShape,
          colors: TextFieldColors = TextFieldDefaults.textFieldColors(),
          interactionSource: MutableInteractionSource? = null,
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
  - id: live-androidx-material-material-material-textfield-lines-203-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 203
    endLine: 237
    sha256: 56cd604cf1747da652e9f0dd36b01fd2705a1df686aec170c37428ece26a9d67
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          // If color is not provided via the text style, use content color as a default
          val textColor = textStyle.color.takeOrElse { colors.textColor(enabled).value }
          val mergedTextStyle = textStyle.merge(TextStyle(color = textColor))

          BasicTextField(
              state = state,
              modifier =
                  modifier
                      .indicatorLine(enabled, isError, interactionSource, colors)
                      .defaultErrorSemantics(isError, getString(Strings.DefaultErrorMessage))
                      .defaultMinSize(
                          minWidth = TextFieldDefaults.MinWidth,
                          minHeight = TextFieldDefaults.MinHeight,
                      ),
              enabled = enabled,
              readOnly = readOnly,
              textStyle = mergedTextStyle,
              cursorBrush = SolidColor(colors.cursorColor(isError).value),
              inputTransformation = inputTransformation,
              outputTransformation = outputTransformation,
              keyboardOptions = keyboardOptions,
              onKeyboardAction = onKeyboardAction,
              interactionSource = interactionSource,
              scrollState = scrollState,
              lineLimits = lineLimits,
              decorator = { innerTextField ->
                  val textPostTransformation =
                      if (outputTransformation == null) {
                          state.text.toString()
                      } else {
                          // TODO: use constructor to create TextFieldBuffer from TextFieldState when
                          // available
                          lateinit var buffer: TextFieldBuffer
                          state.edit { buffer = this }
                          // after edit completes, mutations on buffer are ineffective
  - id: live-androidx-material-material-material-textfield-lines-238-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 238
    endLine: 272
    sha256: db58694087fd2ae09b914560c1a45e78f929e1973dc31c174972c77ea46865f1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          with(outputTransformation) { buffer.transformOutput() }
                          buffer.asCharSequence().toString()
                      }

                  TextFieldDefaults.TextFieldDecorationBox(
                      value = textPostTransformation,
                      visualTransformation = VisualTransformation.None,
                      innerTextField = innerTextField,
                      placeholder = placeholder,
                      label = label,
                      leadingIcon = leadingIcon,
                      trailingIcon = trailingIcon,
                      singleLine = lineLimits == SingleLine,
                      enabled = enabled,
                      isError = isError,
                      interactionSource = interactionSource,
                      shape = shape,
                      colors = colors,
                  )
              },
          )
      }

      /**
       * [Material Design filled text
       * field](https://m2.material.io/components/text-fields#filled-text-field).
       *
       * Filled text fields have more visual emphasis than outlined text fields, making them stand out
       * when surrounded by other content and components.
       *
       * ![Filled text field
       * image](https://developer.android.com/images/reference/androidx/compose/material/filled-text-field.png)
       *
       * If you are looking for an outlined version, see [OutlinedTextField].
       *
  - id: live-androidx-material-material-material-textfield-lines-273-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 273
    endLine: 300
    sha256: e56c009be3f6f95d3a220de4a7ab551ca09186aef457c8d2cc6b006efcea0087
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * If apart from input text change you also want to observe the cursor location, selection range, or
       * IME composition use the TextField overload with the [TextFieldValue] parameter instead.
       *
       * @param value the input text to be shown in the text field
       * @param onValueChange the callback that is triggered when the input service updates the text. An
       *   updated text comes as a parameter of the callback
       * @param modifier a [Modifier] for this text field
       * @param enabled controls the enabled state of the [TextField]. When `false`, the text field will
       *   be neither editable nor focusable, the input of the text field will not be selectable, visually
       *   text field will appear in the disabled UI state
       * @param readOnly controls the editable state of the [TextField]. When `true`, the text field can
       *   not be modified, however, a user can focus it and copy text from it. Read-only text fields are
       *   usually used to display pre-filled forms that user can not edit
       * @param textStyle the style to be applied to the input text. The default [textStyle] uses the
       *   [LocalTextStyle] defined by the theme
       * @param label the optional label to be displayed inside the text field container. The default text
       *   style for internal [Text] is [Typography.caption] when the text field is in focus and
       *   [Typography.subtitle1] when the text field is not in focus
       * @param placeholder the optional placeholder to be displayed when the text field is in focus and
       *   the input text is empty. The default text style for internal [Text] is [Typography.subtitle1]
       * @param leadingIcon the optional leading icon to be displayed at the beginning of the text field
       *   container
       * @param trailingIcon the optional trailing icon to be displayed at the end of the text field
       *   container
       * @param isError indicates if the text field's current value is in error. If set to true, the
       *   label, bottom indicator and trailing icon by default will be displayed in error color
       * @param visualTransformation transforms the visual representation of the input [value] For
       *   example, you can use
  - id: live-androidx-material-material-material-textfield-lines-301-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 301
    endLine: 327
    sha256: 15508fb08369279e62ab5af4e17f22f822e527f17b3e4b51b9a68c192c1c2f25
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   [PasswordVisualTransformation][androidx.compose.ui.text.input.PasswordVisualTransformation] to
       *   create a password text field. By default no visual transformation is applied
       * @param keyboardOptions software keyboard options that contains configuration such as
       *   [KeyboardType] and [ImeAction].
       * @param keyboardActions when the input service emits an IME action, the corresponding callback is
       *   called. Note that this IME action may be different from what you specified in
       *   [KeyboardOptions.imeAction].
       * @param singleLine when set to true, this text field becomes a single horizontally scrolling text
       *   field instead of wrapping onto multiple lines. The keyboard will be informed to not show the
       *   return key as the [ImeAction]. Note that [maxLines] parameter will be ignored as the maxLines
       *   attribute will be automatically set to 1.
       * @param maxLines the maximum height in terms of maximum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
       * @param minLines the minimum height in terms of minimum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this text field. You can use this to change the text field's
       *   appearance or preview the text field in different states. Note that if `null` is provided,
       *   interactions will still happen internally.
       * @param shape the shape of the text field's container
       * @param colors [TextFieldColors] that will be used to resolve color of the text, content
       *   (including label, placeholder, leading and trailing icons, indicator line) and background for
       *   this text field in different states. See [TextFieldDefaults.textFieldColors]
       */
      @Deprecated(
          "Use the TextField(state: TextFieldState, ...) overload instead. To migrate: " +
              "create a TextFieldState via rememberTextFieldState(initialText) in composition or " +
  - id: live-androidx-material-material-material-textfield-lines-328-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 328
    endLine: 362
    sha256: f767d69e92d4da9337823c9b78f2f8cd6cb9271eb9221485dd01da02d26e0b78
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              "TextFieldState(initialText) in a state holder; read text from state.text and update " +
              "it programmatically via state.edit { ... } or state.setTextAndPlaceCursorAtEnd(text); " +
              "observe text changes for side effects via snapshotFlow { state.text }.collect { ... }; " +
              "and replace onValueChange input filtering with InputTransformation, visualTransformation " +
              "with OutputTransformation (or SecureTextField for passwords), singleLine/maxLines/" +
              "minLines with TextFieldLineLimits, and keyboardActions with KeyboardActionHandler. See " +
              "https://developer.android.com/develop/ui/compose/text/migrate-state-based for full " +
              "migration guidance."
      )
      @Composable
      public fun TextField(
          value: String,
          onValueChange: (String) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          readOnly: Boolean = false,
          textStyle: TextStyle = LocalTextStyle.current,
          label: @Composable (() -> Unit)? = null,
          placeholder: @Composable (() -> Unit)? = null,
          leadingIcon: @Composable (() -> Unit)? = null,
          trailingIcon: @Composable (() -> Unit)? = null,
          isError: Boolean = false,
          visualTransformation: VisualTransformation = VisualTransformation.None,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          keyboardActions: KeyboardActions = KeyboardActions(),
          singleLine: Boolean = false,
          maxLines: Int = if (singleLine) 1 else Int.MAX_VALUE,
          minLines: Int = 1,
          interactionSource: MutableInteractionSource? = null,
          shape: Shape = TextFieldDefaults.TextFieldShape,
          colors: TextFieldColors = TextFieldDefaults.textFieldColors(),
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          // If color is not provided via the text style, use content color as a default
  - id: live-androidx-material-material-material-textfield-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 36
    endLine: 70
    sha256: f4b0b5e5d3dc5541aecad79a4b522e2f051431138a41793568d9de5c8023b461
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.foundation.text.input.InputTransformation
      import androidx.compose.foundation.text.input.KeyboardActionHandler
      import androidx.compose.foundation.text.input.OutputTransformation
      import androidx.compose.foundation.text.input.TextFieldBuffer
      import androidx.compose.foundation.text.input.TextFieldLineLimits
      import androidx.compose.foundation.text.input.TextFieldLineLimits.MultiLine
      import androidx.compose.foundation.text.input.TextFieldLineLimits.SingleLine
      import androidx.compose.foundation.text.input.TextFieldState
      import androidx.compose.material.TextFieldDefaults.indicatorLine
      import androidx.compose.material.internal.subtractConstraintSafely
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.draw.drawWithContent
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.graphics.SolidColor
      import androidx.compose.ui.graphics.takeOrElse
      import androidx.compose.ui.layout.AlignmentLine
      import androidx.compose.ui.layout.IntrinsicMeasurable
      import androidx.compose.ui.layout.IntrinsicMeasureScope
      import androidx.compose.ui.layout.LastBaseline
      import androidx.compose.ui.layout.Layout
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasurePolicy
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.layout.Placeable
      import androidx.compose.ui.layout.layoutId
      import androidx.compose.ui.platform.LocalLayoutDirection
      import androidx.compose.ui.text.TextStyle
      import androidx.compose.ui.text.input.ImeAction
      import androidx.compose.ui.text.input.KeyboardType
      import androidx.compose.ui.text.input.TextFieldValue
  - id: live-androidx-material-material-material-textfield-lines-363-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 363
    endLine: 397
    sha256: 7217f7cf029da86540bf3cb40829c132c4682da3f01d1277d26b2844740a9d6d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val textColor = textStyle.color.takeOrElse { colors.textColor(enabled).value }
          val mergedTextStyle = textStyle.merge(TextStyle(color = textColor))

          BasicTextField(
              value = value,
              modifier =
                  modifier
                      .indicatorLine(enabled, isError, interactionSource, colors)
                      .defaultErrorSemantics(isError, getString(Strings.DefaultErrorMessage))
                      .defaultMinSize(
                          minWidth = TextFieldDefaults.MinWidth,
                          minHeight = TextFieldDefaults.MinHeight,
                      ),
              onValueChange = onValueChange,
              enabled = enabled,
              readOnly = readOnly,
              textStyle = mergedTextStyle,
              cursorBrush = SolidColor(colors.cursorColor(isError).value),
              visualTransformation = visualTransformation,
              keyboardOptions = keyboardOptions,
              keyboardActions = keyboardActions,
              interactionSource = interactionSource,
              singleLine = singleLine,
              maxLines = maxLines,
              minLines = minLines,
              decorationBox =
                  @Composable { innerTextField ->
                      // places leading icon, text field with label and placeholder, trailing icon
                      TextFieldDefaults.TextFieldDecorationBox(
                          value = value,
                          visualTransformation = visualTransformation,
                          innerTextField = innerTextField,
                          placeholder = placeholder,
                          label = label,
                          leadingIcon = leadingIcon,
  - id: live-androidx-material-material-material-textfield-lines-398-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 398
    endLine: 432
    sha256: d09db1a84764c923d6ab1d8307415f532c4d73b5b3afd528379f899df1cb5e65
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          trailingIcon = trailingIcon,
                          singleLine = singleLine,
                          enabled = enabled,
                          isError = isError,
                          interactionSource = interactionSource,
                          shape = shape,
                          colors = colors,
                      )
                  },
          )
      }

      @Deprecated(
          "Maintained for binary compatibility. Use version with minLines instead",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun TextField(
          value: String,
          onValueChange: (String) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          readOnly: Boolean = false,
          textStyle: TextStyle = LocalTextStyle.current,
          label: @Composable (() -> Unit)? = null,
          placeholder: @Composable (() -> Unit)? = null,
          leadingIcon: @Composable (() -> Unit)? = null,
          trailingIcon: @Composable (() -> Unit)? = null,
          isError: Boolean = false,
          visualTransformation: VisualTransformation = VisualTransformation.None,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          keyboardActions: KeyboardActions = KeyboardActions(),
          singleLine: Boolean = false,
          maxLines: Int = Int.MAX_VALUE,
          interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
  - id: live-androidx-material-material-material-textfield-lines-433-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 433
    endLine: 467
    sha256: 27c70349ff9d1e17f37b59e126b946c09025b1ac21c4e48e47c73eb12e97cfaa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          shape: Shape =
              MaterialTheme.shapes.small.copy(bottomEnd = ZeroCornerSize, bottomStart = ZeroCornerSize),
          colors: TextFieldColors = TextFieldDefaults.textFieldColors(),
      ) {
          TextField(
              value,
              onValueChange,
              modifier,
              enabled,
              readOnly,
              textStyle,
              label,
              placeholder,
              leadingIcon,
              trailingIcon,
              isError,
              visualTransformation,
              keyboardOptions,
              keyboardActions,
              singleLine,
              maxLines,
              1,
              interactionSource,
              shape,
              colors,
          )
      }

      /**
       * [Material Design filled text
       * field](https://m2.material.io/components/text-fields#filled-text-field).
       *
       * Filled text fields have more visual emphasis than outlined text fields, making them stand out
       * when surrounded by other content and components.
       *
  - id: live-androidx-material-material-material-textfield-lines-468-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 468
    endLine: 498
    sha256: 9d4e5324016c63bcea89da7d7716d1a0cde06ab03436250beb35f72b7bd90e68
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * ![Filled text field
       * image](https://developer.android.com/images/reference/androidx/compose/material/filled-text-field.png)
       *
       * If you are looking for an outlined version, see [OutlinedTextField]. For a text field
       * specifically designed for passwords or other secure content, see [SecureTextField].
       *
       * This overload provides access to the input text, cursor position, selection range and IME
       * composition. If you only want to observe an input text change, use the TextField overload with
       * the [String] parameter instead.
       *
       * @param value the input [TextFieldValue] to be shown in the text field
       * @param onValueChange the callback that is triggered when the input service updates values in
       *   [TextFieldValue]. An updated [TextFieldValue] comes as a parameter of the callback
       * @param modifier a [Modifier] for this text field
       * @param enabled controls the enabled state of the [TextField]. When `false`, the text field will
       *   be neither editable nor focusable, the input of the text field will not be selectable, visually
       *   text field will appear in the disabled UI state
       * @param readOnly controls the editable state of the [TextField]. When `true`, the text field can
       *   not be modified, however, a user can focus it and copy text from it. Read-only text fields are
       *   usually used to display pre-filled forms that user can not edit
       * @param textStyle the style to be applied to the input text. The default [textStyle] uses the
       *   [LocalTextStyle] defined by the theme
       * @param label the optional label to be displayed inside the text field container. The default text
       *   style for internal [Text] is [Typography.caption] when the text field is in focus and
       *   [Typography.subtitle1] when the text field is not in focus
       * @param placeholder the optional placeholder to be displayed when the text field is in focus and
       *   the input text is empty. The default text style for internal [Text] is [Typography.subtitle1]
       * @param leadingIcon the optional leading icon to be displayed at the beginning of the text field
       *   container
       * @param trailingIcon the optional trailing icon to be displayed at the end of the text field
       *   container
  - id: live-androidx-material-material-material-textfield-lines-499-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 499
    endLine: 524
    sha256: c4ae8ba8cd0bab7816a420e6344d4f3e908d98f1f2efb16c0de22dbe20840d75
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param isError indicates if the text field's current value is in error state. If set to true, the
       *   label, bottom indicator and trailing icon by default will be displayed in error color
       * @param visualTransformation transforms the visual representation of the input [value]. For
       *   example, you can use
       *   [PasswordVisualTransformation][androidx.compose.ui.text.input.PasswordVisualTransformation] to
       *   create a password text field. By default no visual transformation is applied
       * @param keyboardOptions software keyboard options that contains configuration such as
       *   [KeyboardType] and [ImeAction].
       * @param keyboardActions when the input service emits an IME action, the corresponding callback is
       *   called. Note that this IME action may be different from what you specified in
       *   [KeyboardOptions.imeAction].
       * @param singleLine when set to true, this text field becomes a single horizontally scrolling text
       *   field instead of wrapping onto multiple lines. The keyboard will be informed to not show the
       *   return key as the [ImeAction]. Note that [maxLines] parameter will be ignored as the maxLines
       *   attribute will be automatically set to 1.
       * @param maxLines the maximum height in terms of maximum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
       * @param minLines the minimum height in terms of minimum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this text field. You can use this to change the text field's
       *   appearance or preview the text field in different states. Note that if `null` is provided,
       *   interactions will still happen internally.
       * @param shape the shape of the text field's container
       * @param colors [TextFieldColors] that will be used to resolve color of the text, content
       *   (including label, placeholder, leading and trailing icons, indicator line) and background for
  - id: live-androidx-material-material-material-textfield-lines-525-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 525
    endLine: 559
    sha256: cdc91d4655ae274591d89791619c8b845fca516aa3147fb536b66a7f887bc93f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   this text field in different states. See [TextFieldDefaults.textFieldColors]
       */
      @Deprecated(
          "Use the TextField(state: TextFieldState, ...) overload instead. To migrate: " +
              "create a TextFieldState via rememberTextFieldState(initialText, initialSelection) in " +
              "composition or TextFieldState(initialText, initialSelection) in a state holder; read " +
              "text and selection from state.text and state.selection, and update them programmatically " +
              "via state.edit { ... } or state.setTextAndPlaceCursorAtEnd(text); observe changes for " +
              "side effects via snapshotFlow { state.text }.collect { ... }; and replace onValueChange " +
              "input filtering with InputTransformation, visualTransformation with OutputTransformation " +
              "(or SecureTextField for passwords), singleLine/maxLines/minLines with " +
              "TextFieldLineLimits, and keyboardActions with KeyboardActionHandler. See " +
              "https://developer.android.com/develop/ui/compose/text/migrate-state-based for full " +
              "migration guidance."
      )
      @Composable
      public fun TextField(
          value: TextFieldValue,
          onValueChange: (TextFieldValue) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          readOnly: Boolean = false,
          textStyle: TextStyle = LocalTextStyle.current,
          label: @Composable (() -> Unit)? = null,
          placeholder: @Composable (() -> Unit)? = null,
          leadingIcon: @Composable (() -> Unit)? = null,
          trailingIcon: @Composable (() -> Unit)? = null,
          isError: Boolean = false,
          visualTransformation: VisualTransformation = VisualTransformation.None,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          keyboardActions: KeyboardActions = KeyboardActions(),
          singleLine: Boolean = false,
          maxLines: Int = if (singleLine) 1 else Int.MAX_VALUE,
          minLines: Int = 1,
          interactionSource: MutableInteractionSource? = null,
  - id: live-androidx-material-material-material-textfield-lines-560-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 560
    endLine: 594
    sha256: 9860c57b5efafd609f244a4d0d55d5eb580990e1241900275dd8b63d6d51a904
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          shape: Shape = TextFieldDefaults.TextFieldShape,
          colors: TextFieldColors = TextFieldDefaults.textFieldColors(),
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          // If color is not provided via the text style, use content color as a default
          val textColor = textStyle.color.takeOrElse { colors.textColor(enabled).value }
          val mergedTextStyle = textStyle.merge(TextStyle(color = textColor))

          BasicTextField(
              value = value,
              modifier =
                  modifier
                      .indicatorLine(enabled, isError, interactionSource, colors)
                      .defaultErrorSemantics(isError, getString(Strings.DefaultErrorMessage))
                      .defaultMinSize(
                          minWidth = TextFieldDefaults.MinWidth,
                          minHeight = TextFieldDefaults.MinHeight,
                      ),
              onValueChange = onValueChange,
              enabled = enabled,
              readOnly = readOnly,
              textStyle = mergedTextStyle,
              cursorBrush = SolidColor(colors.cursorColor(isError).value),
              visualTransformation = visualTransformation,
              keyboardOptions = keyboardOptions,
              keyboardActions = keyboardActions,
              interactionSource = interactionSource,
              singleLine = singleLine,
              maxLines = maxLines,
              minLines = minLines,
              decorationBox =
                  @Composable { innerTextField ->
                      // places leading icon, text field with label and placeholder, trailing icon
                      TextFieldDefaults.TextFieldDecorationBox(
  - id: live-androidx-material-material-material-textfield-lines-595-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 595
    endLine: 629
    sha256: 9bfb0b172d99f21902aa107da989b0f801e17b7ab79949e02a72dc7caf61d97b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          value = value.text,
                          visualTransformation = visualTransformation,
                          innerTextField = innerTextField,
                          placeholder = placeholder,
                          label = label,
                          leadingIcon = leadingIcon,
                          trailingIcon = trailingIcon,
                          singleLine = singleLine,
                          enabled = enabled,
                          isError = isError,
                          interactionSource = interactionSource,
                          shape = shape,
                          colors = colors,
                      )
                  },
          )
      }

      @Deprecated(
          "Maintained for binary compatibility. Use version with minLines instead",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun TextField(
          value: TextFieldValue,
          onValueChange: (TextFieldValue) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          readOnly: Boolean = false,
          textStyle: TextStyle = LocalTextStyle.current,
          label: @Composable (() -> Unit)? = null,
          placeholder: @Composable (() -> Unit)? = null,
          leadingIcon: @Composable (() -> Unit)? = null,
          trailingIcon: @Composable (() -> Unit)? = null,
          isError: Boolean = false,
  - id: live-androidx-material-material-material-textfield-lines-630-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 630
    endLine: 664
    sha256: 17cd64b8cef3acb15851bcad962078f51eb1728bb9fb42b70a933a1aebdf1dc4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          visualTransformation: VisualTransformation = VisualTransformation.None,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          keyboardActions: KeyboardActions = KeyboardActions(),
          singleLine: Boolean = false,
          maxLines: Int = Int.MAX_VALUE,
          interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
          shape: Shape = TextFieldDefaults.TextFieldShape,
          colors: TextFieldColors = TextFieldDefaults.textFieldColors(),
      ) {
          TextField(
              value,
              onValueChange,
              modifier,
              enabled,
              readOnly,
              textStyle,
              label,
              placeholder,
              leadingIcon,
              trailingIcon,
              isError,
              visualTransformation,
              keyboardOptions,
              keyboardActions,
              singleLine,
              maxLines,
              1,
              interactionSource,
              shape,
              colors,
          )
      }

      /**
       * Composable responsible for measuring and laying out leading and trailing icons, label,
  - id: live-androidx-material-material-material-textfield-lines-665-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 665
    endLine: 699
    sha256: 74f8a5d7d74ad6febd59dd35dbac9193a8ef60c764c4c3c78a0c6e0db1ab174a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * placeholder and the input field.
       */
      @Composable
      internal fun TextFieldLayout(
          modifier: Modifier,
          textField: @Composable () -> Unit,
          label: @Composable (() -> Unit)?,
          placeholder: @Composable ((Modifier) -> Unit)?,
          leading: @Composable (() -> Unit)?,
          trailing: @Composable (() -> Unit)?,
          singleLine: Boolean,
          animationProgress: Float,
          paddingValues: PaddingValues,
      ) {
          val measurePolicy =
              remember(singleLine, animationProgress, paddingValues) {
                  TextFieldMeasurePolicy(singleLine, animationProgress, paddingValues)
              }
          val layoutDirection = LocalLayoutDirection.current
          Layout(
              modifier = modifier,
              content = {
                  if (leading != null) {
                      Box(
                          modifier = Modifier.layoutId(LeadingId).minimumInteractiveComponentSize(),
                          contentAlignment = Alignment.Center,
                      ) {
                          leading()
                      }
                  }
                  if (trailing != null) {
                      Box(
                          modifier = Modifier.layoutId(TrailingId).minimumInteractiveComponentSize(),
                          contentAlignment = Alignment.Center,
                      ) {
  - id: live-androidx-material-material-material-textfield-lines-700-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 700
    endLine: 734
    sha256: 43bb48ec6c6bcf0b569f4983f6a5c4e3402a0a6521f7f533042598aaf1225a54
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          trailing()
                      }
                  }

                  val startTextFieldPadding = paddingValues.calculateStartPadding(layoutDirection)
                  val endTextFieldPadding = paddingValues.calculateEndPadding(layoutDirection)
                  val padding =
                      Modifier.padding(
                          start =
                              if (leading != null) {
                                  (startTextFieldPadding - HorizontalIconPadding).coerceAtLeast(0.dp)
                              } else {
                                  startTextFieldPadding
                              },
                          end =
                              if (trailing != null) {
                                  (endTextFieldPadding - HorizontalIconPadding).coerceAtLeast(0.dp)
                              } else {
                                  endTextFieldPadding
                              },
                      )
                  if (placeholder != null) {
                      placeholder(Modifier.layoutId(PlaceholderId).then(padding))
                  }
                  if (label != null) {
                      Box(Modifier.layoutId(LabelId).then(padding)) { label() }
                  }
                  Box(
                      modifier = Modifier.layoutId(TextFieldId).then(padding),
                      propagateMinConstraints = true,
                  ) {
                      textField()
                  }
              },
              measurePolicy = measurePolicy,
  - id: live-androidx-material-material-material-textfield-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 71
    endLine: 105
    sha256: af69ed6ca1fa9a7cdf3135f8fe679ec54898ad2b39c8905aaf4ad50be634ff0d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.text.input.VisualTransformation
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.coerceAtLeast
      import androidx.compose.ui.unit.constrainHeight
      import androidx.compose.ui.unit.constrainWidth
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.unit.offset
      import androidx.compose.ui.util.fastFirst
      import androidx.compose.ui.util.fastFirstOrNull
      import kotlin.math.max
      import kotlin.math.roundToInt

      /**
       * [Material Design filled text
       * field](https://m2.material.io/components/text-fields#filled-text-field).
       *
       * Filled text fields have more visual emphasis than outlined text fields, making them stand out
       * when surrounded by other content and components.
       *
       * ![Filled text field
       * image](https://developer.android.com/images/reference/androidx/compose/material/filled-text-field.png)
       *
       * If you are looking for an outlined version, see [OutlinedTextField].
       *
       * This overload of [TextField] uses [TextFieldState] to keep track of its text content and position
       * of the cursor or selection.
       *
       * A simple single line text field looks like:
       *
       * @sample androidx.compose.material.samples.SimpleTextFieldSample
       *
       * You can control the initial text input and selection:
       *
       * @sample androidx.compose.material.samples.TextFieldWithInitialValueAndSelection
  - id: live-androidx-material-material-material-textfield-lines-735-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 735
    endLine: 769
    sha256: 375f4e4bb19467e8e55c223b9a0fe29bf5f7ea4f8faae0a227b782e3329a7fdf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          )
      }

      private class TextFieldMeasurePolicy(
          private val singleLine: Boolean,
          private val animationProgress: Float,
          private val paddingValues: PaddingValues,
      ) : MeasurePolicy {
          override fun MeasureScope.measure(
              measurables: List<Measurable>,
              constraints: Constraints,
          ): MeasureResult {
              val topPaddingValue = paddingValues.calculateTopPadding().roundToPx()
              val bottomPaddingValue = paddingValues.calculateBottomPadding().roundToPx()

              // padding between label and input text
              val topPadding = TextFieldTopPadding.roundToPx()
              var occupiedSpaceHorizontally = 0

              // measure leading icon
              val looseConstraints = constraints.copy(minWidth = 0, minHeight = 0)
              val leadingPlaceable =
                  measurables.fastFirstOrNull { it.layoutId == LeadingId }?.measure(looseConstraints)
              occupiedSpaceHorizontally += widthOrZero(leadingPlaceable)

              // measure trailing icon
              val trailingPlaceable =
                  measurables
                      .fastFirstOrNull { it.layoutId == TrailingId }
                      ?.measure(looseConstraints.offset(horizontal = -occupiedSpaceHorizontally))
              occupiedSpaceHorizontally += widthOrZero(trailingPlaceable)

              // measure label
              val labelConstraints =
                  looseConstraints.offset(
  - id: live-androidx-material-material-material-textfield-lines-770-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 770
    endLine: 804
    sha256: 7bd6449a0bb9a400852f2cea2ab872b6a202b1b7b805c9b53adc4d9f3297b34f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      vertical = -bottomPaddingValue,
                      horizontal = -occupiedSpaceHorizontally,
                  )
              val labelPlaceable =
                  measurables.fastFirstOrNull { it.layoutId == LabelId }?.measure(labelConstraints)
              val lastBaseline =
                  labelPlaceable?.get(LastBaseline)?.let {
                      if (it != AlignmentLine.Unspecified) it else labelPlaceable.height
                  } ?: 0
              val effectiveLabelBaseline = max(lastBaseline, topPaddingValue)

              // measure input field
              // input field is laid out differently depending on whether the label is present or not
              val verticalConstraintOffset =
                  if (labelPlaceable != null) {
                      -bottomPaddingValue - topPadding - effectiveLabelBaseline
                  } else {
                      -topPaddingValue - bottomPaddingValue
                  }
              val textFieldConstraints =
                  constraints
                      .copy(minHeight = 0)
                      .offset(
                          vertical = verticalConstraintOffset,
                          horizontal = -occupiedSpaceHorizontally,
                      )
              val textFieldPlaceable =
                  measurables.fastFirst { it.layoutId == TextFieldId }.measure(textFieldConstraints)

              // measure placeholder
              val placeholderConstraints = textFieldConstraints.copy(minWidth = 0)
              val placeholderPlaceable =
                  measurables
                      .fastFirstOrNull { it.layoutId == PlaceholderId }
                      ?.measure(placeholderConstraints)
  - id: live-androidx-material-material-material-textfield-lines-805-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 805
    endLine: 839
    sha256: ad917aad1ca385cbdd0947c58f593776e2e64b9abfa4ad7148a5edb8bf8d056d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              val width =
                  calculateWidth(
                      widthOrZero(leadingPlaceable),
                      widthOrZero(trailingPlaceable),
                      textFieldPlaceable.width,
                      widthOrZero(labelPlaceable),
                      widthOrZero(placeholderPlaceable),
                      constraints,
                  )
              val height =
                  calculateHeight(
                      textFieldPlaceable.height,
                      labelPlaceable != null,
                      effectiveLabelBaseline,
                      heightOrZero(leadingPlaceable),
                      heightOrZero(trailingPlaceable),
                      heightOrZero(placeholderPlaceable),
                      constraints,
                      density,
                      paddingValues,
                  )

              return layout(width, height) {
                  if (labelPlaceable != null) {
                      // label's final position is always relative to the baseline
                      val labelEndPosition = (topPaddingValue - lastBaseline).coerceAtLeast(0)
                      placeWithLabel(
                          width,
                          height,
                          textFieldPlaceable,
                          labelPlaceable,
                          placeholderPlaceable,
                          leadingPlaceable,
                          trailingPlaceable,
  - id: live-androidx-material-material-material-textfield-lines-840-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 840
    endLine: 874
    sha256: f3397dd6ae30e147e8b7488a41fbf24f820465383f3ca659506201e865ba0190
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          singleLine,
                          labelEndPosition,
                          effectiveLabelBaseline + topPadding,
                          animationProgress,
                          density,
                      )
                  } else {
                      placeWithoutLabel(
                          width,
                          height,
                          textFieldPlaceable,
                          placeholderPlaceable,
                          leadingPlaceable,
                          trailingPlaceable,
                          singleLine,
                          density,
                          paddingValues,
                      )
                  }
              }
          }

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
          ): Int {
              return intrinsicHeight(measurables, width) { intrinsicMeasurable, w ->
                  intrinsicMeasurable.maxIntrinsicHeight(w)
              }
          }

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
          ): Int {
  - id: live-androidx-material-material-material-textfield-lines-875-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 875
    endLine: 909
    sha256: b38b265280ed4e386c1efa834ab617cafc6dfa0ba45759423c4d52b36f76f799
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return intrinsicHeight(measurables, width) { intrinsicMeasurable, w ->
                  intrinsicMeasurable.minIntrinsicHeight(w)
              }
          }

          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ): Int {
              return intrinsicWidth(measurables, height) { intrinsicMeasurable, h ->
                  intrinsicMeasurable.maxIntrinsicWidth(h)
              }
          }

          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ): Int {
              return intrinsicWidth(measurables, height) { intrinsicMeasurable, h ->
                  intrinsicMeasurable.minIntrinsicWidth(h)
              }
          }

          private fun intrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
              intrinsicMeasurer: (IntrinsicMeasurable, Int) -> Int,
          ): Int {
              val textFieldWidth =
                  intrinsicMeasurer(measurables.fastFirst { it.layoutId == TextFieldId }, height)
              val labelWidth =
                  measurables
                      .fastFirstOrNull { it.layoutId == LabelId }
                      ?.let { intrinsicMeasurer(it, height) } ?: 0
              val trailingWidth =
  - id: live-androidx-material-material-material-textfield-lines-910-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 910
    endLine: 944
    sha256: d33951a7ddf9fd546df78b572ff8c73f34463a005df6037a8262cb37d5a342f6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  measurables
                      .fastFirstOrNull { it.layoutId == TrailingId }
                      ?.let { intrinsicMeasurer(it, height) } ?: 0
              val leadingWidth =
                  measurables
                      .fastFirstOrNull { it.layoutId == LeadingId }
                      ?.let { intrinsicMeasurer(it, height) } ?: 0
              val placeholderWidth =
                  measurables
                      .fastFirstOrNull { it.layoutId == PlaceholderId }
                      ?.let { intrinsicMeasurer(it, height) } ?: 0
              return calculateWidth(
                  leadingWidth = leadingWidth,
                  trailingWidth = trailingWidth,
                  textFieldWidth = textFieldWidth,
                  labelWidth = labelWidth,
                  placeholderWidth = placeholderWidth,
                  constraints = Constraints(),
              )
          }

          private fun IntrinsicMeasureScope.intrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
              intrinsicMeasurer: (IntrinsicMeasurable, Int) -> Int,
          ): Int {
              var remainingWidth = width
              val leadingHeight =
                  measurables
                      .fastFirstOrNull { it.layoutId == LeadingId }
                      ?.let {
                          remainingWidth =
                              remainingWidth.subtractConstraintSafely(
                                  it.maxIntrinsicWidth(Constraints.Infinity)
                              )
  - id: live-androidx-material-material-material-textfield-lines-945-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 945
    endLine: 979
    sha256: c29a0be7c5d7882ebc4f60ec429c5c13f2b706fee8581cb4b23f9e8c5b08700d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          intrinsicMeasurer(it, width)
                      } ?: 0
              val trailingHeight =
                  measurables
                      .fastFirstOrNull { it.layoutId == TrailingId }
                      ?.let {
                          remainingWidth =
                              remainingWidth.subtractConstraintSafely(
                                  it.maxIntrinsicWidth(Constraints.Infinity)
                              )
                          intrinsicMeasurer(it, width)
                      } ?: 0

              val labelHeight =
                  measurables
                      .fastFirstOrNull { it.layoutId == LabelId }
                      ?.let { intrinsicMeasurer(it, remainingWidth) } ?: 0

              val textFieldHeight =
                  intrinsicMeasurer(measurables.fastFirst { it.layoutId == TextFieldId }, remainingWidth)
              val placeholderHeight =
                  measurables
                      .fastFirstOrNull { it.layoutId == PlaceholderId }
                      ?.let { intrinsicMeasurer(it, remainingWidth) } ?: 0

              return calculateHeight(
                  textFieldHeight = textFieldHeight,
                  hasLabel = labelHeight > 0,
                  labelBaseline = labelHeight,
                  leadingHeight = leadingHeight,
                  trailingHeight = trailingHeight,
                  placeholderHeight = placeholderHeight,
                  constraints = Constraints(),
                  density = density,
                  paddingValues = paddingValues,
  - id: live-androidx-material-material-material-textfield-lines-980-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt
    startLine: 980
    endLine: 1014
    sha256: 3acdc9f8c8aa13c8a8d2aa3636e5acb9753de16250a4fb30286b190cd9fc0c12
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              )
          }
      }

      private fun calculateWidth(
          leadingWidth: Int,
          trailingWidth: Int,
          textFieldWidth: Int,
          labelWidth: Int,
          placeholderWidth: Int,
          constraints: Constraints,
      ): Int {
          val middleSection = maxOf(textFieldWidth, labelWidth, placeholderWidth)
          val wrappedWidth = leadingWidth + middleSection + trailingWidth
          return constraints.constrainWidth(wrappedWidth)
      }

      private fun calculateHeight(
          textFieldHeight: Int,
          hasLabel: Boolean,
          labelBaseline: Int,
          leadingHeight: Int,
          trailingHeight: Int,
          placeholderHeight: Int,
          constraints: Constraints,
          density: Float,
          paddingValues: PaddingValues,
      ): Int {
          val paddingToLabel = TextFieldTopPadding.value * density
          val topPaddingValue = paddingValues.calculateTopPadding().value * density
          val bottomPaddingValue = paddingValues.calculateBottomPadding().value * density

          val inputFieldHeight = max(textFieldHeight, placeholderHeight)
          val middleSectionHeight =
              if (hasLabel) {
compose:
  id: live-androidx-material-material-material-textfield
  artifact: androidx.compose.material:material
  fqn: androidx.compose.material
  sections:
    - id: live-androidx-material-material-material-textfield-lines-1
      title: androidx.compose.material TextField.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-1-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-1015
      title: androidx.compose.material TextField.kt source (lines 1015–1049)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-1015-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-1050
      title: androidx.compose.material TextField.kt source (lines 1050–1084)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-1050-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-106
      title: androidx.compose.material TextField.kt source (lines 106–140)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-106-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-1085
      title: androidx.compose.material TextField.kt source (lines 1085–1119)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-1085-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-1120
      title: androidx.compose.material TextField.kt source (lines 1120–1144)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-1120-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-141
      title: androidx.compose.material TextField.kt source (lines 141–167)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-141-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-168
      title: androidx.compose.material TextField.kt source (lines 168–202)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-168-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-203
      title: androidx.compose.material TextField.kt source (lines 203–237)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-203-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-238
      title: androidx.compose.material TextField.kt source (lines 238–272)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-238-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-273
      title: androidx.compose.material TextField.kt source (lines 273–300)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-273-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-301
      title: androidx.compose.material TextField.kt source (lines 301–327)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-301-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-328
      title: androidx.compose.material TextField.kt source (lines 328–362)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-328-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-36
      title: androidx.compose.material TextField.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-36-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-363
      title: androidx.compose.material TextField.kt source (lines 363–397)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-363-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-398
      title: androidx.compose.material TextField.kt source (lines 398–432)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-398-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-433
      title: androidx.compose.material TextField.kt source (lines 433–467)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-433-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-468
      title: androidx.compose.material TextField.kt source (lines 468–498)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-468-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-499
      title: androidx.compose.material TextField.kt source (lines 499–524)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-499-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-525
      title: androidx.compose.material TextField.kt source (lines 525–559)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-525-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-560
      title: androidx.compose.material TextField.kt source (lines 560–594)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-560-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-595
      title: androidx.compose.material TextField.kt source (lines 595–629)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-595-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-630
      title: androidx.compose.material TextField.kt source (lines 630–664)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-630-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-665
      title: androidx.compose.material TextField.kt source (lines 665–699)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-665-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-700
      title: androidx.compose.material TextField.kt source (lines 700–734)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-700-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-71
      title: androidx.compose.material TextField.kt source (lines 71–105)
      aliases:
        - androidx.compose.material.TextField
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-71-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-735
      title: androidx.compose.material TextField.kt source (lines 735–769)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-735-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-770
      title: androidx.compose.material TextField.kt source (lines 770–804)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-770-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-805
      title: androidx.compose.material TextField.kt source (lines 805–839)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-805-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-840
      title: androidx.compose.material TextField.kt source (lines 840–874)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-840-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-875
      title: androidx.compose.material TextField.kt source (lines 875–909)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-875-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-910
      title: androidx.compose.material TextField.kt source (lines 910–944)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-910-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-945
      title: androidx.compose.material TextField.kt source (lines 945–979)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-945-source
      relatedIds: []
    - id: live-androidx-material-material-material-textfield-lines-980
      title: androidx.compose.material TextField.kt source (lines 980–1014)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-textfield-lines-980-source
      relatedIds: []
---

# androidx.compose.material TextField.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt

## androidx.compose.material TextField.kt source (lines 1–35)

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

@file:Suppress("DEPRECATION") // b/552879150

package androidx.compose.material

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.ScrollState
import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.calculateEndPadding
import androidx.compose.foundation.layout.calculateStartPadding
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.ZeroCornerSize
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions

Sources: [live-androidx-material-material-material-textfield-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 1015–1049)

            labelBaseline + paddingToLabel + inputFieldHeight + bottomPaddingValue
        } else {
            topPaddingValue + inputFieldHeight + bottomPaddingValue
        }
    return constraints.constrainHeight(
        maxOf(middleSectionHeight.roundToInt(), leadingHeight, trailingHeight)
    )
}

/**
 * Places the provided text field, placeholder and label with respect to the baseline offsets in
 * [TextField] when there is a label. When there is no label, [placeWithoutLabel] is used.
 */
private fun Placeable.PlacementScope.placeWithLabel(
    width: Int,
    height: Int,
    textfieldPlaceable: Placeable,
    labelPlaceable: Placeable?,
    placeholderPlaceable: Placeable?,
    leadingPlaceable: Placeable?,
    trailingPlaceable: Placeable?,
    singleLine: Boolean,
    labelEndPosition: Int,
    textPosition: Int,
    animationProgress: Float,
    density: Float,
) {
    leadingPlaceable?.placeRelative(
        0,
        Alignment.CenterVertically.align(leadingPlaceable.height, height),
    )
    trailingPlaceable?.placeRelative(
        width - trailingPlaceable.width,
        Alignment.CenterVertically.align(trailingPlaceable.height, height),
    )

Sources: [live-androidx-material-material-material-textfield-lines-1015-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 1050–1084)

    labelPlaceable?.let {
        // if it's a single line, the label's start position is in the center of the
        // container. When it's a multiline text field, the label's start position is at the
        // top with padding
        val startPosition =
            if (singleLine) {
                Alignment.CenterVertically.align(it.height, height)
            } else {
                // even though the padding is defined by developer, it only affects text field when
                // animation progress == 1,
                // which is when text field is focused or non-empty input text. The start position
                // of the label is always 16.dp.
                (TextFieldPadding.value * density).roundToInt()
            }
        val distance = startPosition - labelEndPosition
        val positionY = startPosition - (distance * animationProgress).roundToInt()
        it.placeRelative(widthOrZero(leadingPlaceable), positionY)
    }
    textfieldPlaceable.placeRelative(widthOrZero(leadingPlaceable), textPosition)
    placeholderPlaceable?.placeRelative(widthOrZero(leadingPlaceable), textPosition)
}

/**
 * Places the provided text field and placeholder in [TextField] when there is no label. When there
 * is a label, [placeWithLabel] is used
 */
private fun Placeable.PlacementScope.placeWithoutLabel(
    width: Int,
    height: Int,
    textPlaceable: Placeable,
    placeholderPlaceable: Placeable?,
    leadingPlaceable: Placeable?,
    trailingPlaceable: Placeable?,
    singleLine: Boolean,
    density: Float,

Sources: [live-androidx-material-material-material-textfield-lines-1050-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 106–140)

 *
 * You may provide a placeholder:
 *
 * @sample androidx.compose.material.samples.TextFieldWithPlaceholder
 *
 * You can also provide leading and trailing icons:
 *
 * @sample androidx.compose.material.samples.TextFieldWithIcons
 *
 * To handle the error input state, use [isError] parameter:
 *
 * @sample androidx.compose.material.samples.TextFieldWithErrorState
 *
 * Additionally, you may provide additional message at the bottom:
 *
 * @sample androidx.compose.material.samples.TextFieldWithHelperMessage
 *
 * Hiding a software keyboard on IME action performed:
 *
 * @sample androidx.compose.material.samples.TextFieldWithHideKeyboardOnImeAction
 * @param state [TextFieldState] object that holds the internal editing state of this text field.
 * @param modifier a [Modifier] for this text field
 * @param enabled controls the enabled state of the [TextField]. When `false`, the text field will
 *   be neither editable nor focusable, the input of the text field will not be selectable, visually
 *   text field will appear in the disabled UI state
 * @param readOnly controls the editable state of the [TextField]. When `true`, the text field can
 *   not be modified, however, a user can focus it and copy text from it. Read-only text fields are
 *   usually used to display pre-filled forms that user can not edit
 * @param textStyle the style to be applied to the input text. The default [textStyle] uses the
 *   [LocalTextStyle] defined by the theme
 * @param label the optional label to be displayed inside the text field container. The default text
 *   style for internal [Text] is [Typography.caption] when the text field is in focus and
 *   [Typography.subtitle1] when the text field is not in focus
 * @param placeholder the optional placeholder to be displayed when the text field is in focus and
 *   the input text is empty. The default text style for internal [Text] is [Typography.subtitle1]

Sources: [live-androidx-material-material-material-textfield-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 1085–1119)

    paddingValues: PaddingValues,
) {
    val topPadding = (paddingValues.calculateTopPadding().value * density).roundToInt()

    leadingPlaceable?.placeRelative(
        0,
        Alignment.CenterVertically.align(leadingPlaceable.height, height),
    )
    trailingPlaceable?.placeRelative(
        width - trailingPlaceable.width,
        Alignment.CenterVertically.align(trailingPlaceable.height, height),
    )

    // Single line text field without label places its input center vertically. Multiline text
    // field without label places its input at the top with padding
    val textVerticalPosition =
        if (singleLine) {
            Alignment.CenterVertically.align(textPlaceable.height, height)
        } else {
            topPadding
        }
    textPlaceable.placeRelative(widthOrZero(leadingPlaceable), textVerticalPosition)

    // placeholder is placed similar to the text input above
    placeholderPlaceable?.let {
        val placeholderVerticalPosition =
            if (singleLine) {
                Alignment.CenterVertically.align(placeholderPlaceable.height, height)
            } else {
                topPadding
            }
        it.placeRelative(widthOrZero(leadingPlaceable), placeholderVerticalPosition)
    }
}


Sources: [live-androidx-material-material-material-textfield-lines-1085-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 1120–1144)

/** A draw modifier that draws a bottom indicator line in [TextField] */
internal fun Modifier.drawIndicatorLine(indicatorBorder: BorderStroke): Modifier {
    val strokeWidthDp = indicatorBorder.width
    return drawWithContent {
        drawContent()
        if (strokeWidthDp == Dp.Hairline) return@drawWithContent
        val strokeWidth = strokeWidthDp.value * density
        val y = size.height - strokeWidth / 2
        drawLine(indicatorBorder.brush, Offset(0f, y), Offset(size.width, y), strokeWidth)
    }
}

/** Padding from the label's baseline to the top */
internal val FirstBaselineOffset
    get() = 20.dp

/** Padding from input field to the bottom */
internal val TextFieldBottomPadding
    get() = 10.dp

/** Padding from label's baseline (or FirstBaselineOffset) to the input field */
/*@VisibleForTesting*/
internal val TextFieldTopPadding
    get() = 2.dp


Sources: [live-androidx-material-material-material-textfield-lines-1120-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 141–167)

 * @param leadingIcon the optional leading icon to be displayed at the beginning of the text field
 *   container
 * @param trailingIcon the optional trailing icon to be displayed at the end of the text field
 *   container
 * @param isError indicates if the text field's current value is in error. If set to true, the
 *   label, bottom indicator and trailing icon by default will be displayed in error color
 * @param inputTransformation Optional [InputTransformation] that will be used to transform changes
 *   to the [TextFieldState] made by the user. The transformation will be applied to changes made by
 *   hardware and software keyboard events, pasting or dropping text, accessibility services, and
 *   tests. The transformation will _not_ be applied when changing the [state] programmatically, or
 *   when the transformation is changed. If the transformation is changed on an existing text field,
 *   it will be applied to the next user edit. the transformation will not immediately affect the
 *   current [state].
 * @param outputTransformation An [OutputTransformation] that transforms how the contents of the
 *   text field are presented.
 * @param keyboardOptions software keyboard options that contains configuration such as
 *   [KeyboardType] and [ImeAction].
 * @param onKeyboardAction Called when the user presses the action button in the input method editor
 *   (IME), or by pressing the enter key on a hardware keyboard. By default this parameter is null,
 *   and would execute the default behavior for a received IME Action e.g., [ImeAction.Done] would
 *   close the keyboard, [ImeAction.Next] would switch the focus to the next focusable item on the
 *   screen.
 * @param lineLimits Whether the text field should be [SingleLine], scroll horizontally, and ignore
 *   newlines; or [MultiLine] and grow and scroll vertically. If [SingleLine] is passed, all newline
 *   characters ('\n') within the text will be replaced with regular whitespace (' '), ensuring that
 *   the contents of the text field are presented in a single line.
 * @param scrollState Scroll state that manages either horizontal or vertical scroll of the text

Sources: [live-androidx-material-material-material-textfield-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 168–202)

 *   field. If [lineLimits] is [SingleLine], this text field is treated as single line with
 *   horizontal scroll behavior. In other cases the text field becomes vertically scrollable.
 * @param shape the shape of the text field's container
 * @param colors [TextFieldColors] that will be used to resolve color of the text, content
 *   (including label, placeholder, leading and trailing icons, indicator line) and background for
 *   this text field in different states. See [TextFieldDefaults.textFieldColors]
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this text field. You can use this to change the text field's
 *   appearance or preview the text field in different states. Note that if `null` is provided,
 *   interactions will still happen internally.
 */
@Composable
public fun TextField(
    state: TextFieldState,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    textStyle: TextStyle = LocalTextStyle.current,
    label: @Composable (() -> Unit)? = null,
    placeholder: @Composable (() -> Unit)? = null,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
    isError: Boolean = false,
    inputTransformation: InputTransformation? = null,
    outputTransformation: OutputTransformation? = null,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    onKeyboardAction: KeyboardActionHandler? = null,
    lineLimits: TextFieldLineLimits = TextFieldLineLimits.Default,
    scrollState: ScrollState = rememberScrollState(),
    shape: Shape = TextFieldDefaults.TextFieldShape,
    colors: TextFieldColors = TextFieldDefaults.textFieldColors(),
    interactionSource: MutableInteractionSource? = null,
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }

Sources: [live-androidx-material-material-material-textfield-lines-168-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 203–237)

    // If color is not provided via the text style, use content color as a default
    val textColor = textStyle.color.takeOrElse { colors.textColor(enabled).value }
    val mergedTextStyle = textStyle.merge(TextStyle(color = textColor))

    BasicTextField(
        state = state,
        modifier =
            modifier
                .indicatorLine(enabled, isError, interactionSource, colors)
                .defaultErrorSemantics(isError, getString(Strings.DefaultErrorMessage))
                .defaultMinSize(
                    minWidth = TextFieldDefaults.MinWidth,
                    minHeight = TextFieldDefaults.MinHeight,
                ),
        enabled = enabled,
        readOnly = readOnly,
        textStyle = mergedTextStyle,
        cursorBrush = SolidColor(colors.cursorColor(isError).value),
        inputTransformation = inputTransformation,
        outputTransformation = outputTransformation,
        keyboardOptions = keyboardOptions,
        onKeyboardAction = onKeyboardAction,
        interactionSource = interactionSource,
        scrollState = scrollState,
        lineLimits = lineLimits,
        decorator = { innerTextField ->
            val textPostTransformation =
                if (outputTransformation == null) {
                    state.text.toString()
                } else {
                    // TODO: use constructor to create TextFieldBuffer from TextFieldState when
                    // available
                    lateinit var buffer: TextFieldBuffer
                    state.edit { buffer = this }
                    // after edit completes, mutations on buffer are ineffective

Sources: [live-androidx-material-material-material-textfield-lines-203-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 238–272)

                    with(outputTransformation) { buffer.transformOutput() }
                    buffer.asCharSequence().toString()
                }

            TextFieldDefaults.TextFieldDecorationBox(
                value = textPostTransformation,
                visualTransformation = VisualTransformation.None,
                innerTextField = innerTextField,
                placeholder = placeholder,
                label = label,
                leadingIcon = leadingIcon,
                trailingIcon = trailingIcon,
                singleLine = lineLimits == SingleLine,
                enabled = enabled,
                isError = isError,
                interactionSource = interactionSource,
                shape = shape,
                colors = colors,
            )
        },
    )
}

/**
 * [Material Design filled text
 * field](https://m2.material.io/components/text-fields#filled-text-field).
 *
 * Filled text fields have more visual emphasis than outlined text fields, making them stand out
 * when surrounded by other content and components.
 *
 * ![Filled text field
 * image](https://developer.android.com/images/reference/androidx/compose/material/filled-text-field.png)
 *
 * If you are looking for an outlined version, see [OutlinedTextField].
 *

Sources: [live-androidx-material-material-material-textfield-lines-238-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 273–300)

 * If apart from input text change you also want to observe the cursor location, selection range, or
 * IME composition use the TextField overload with the [TextFieldValue] parameter instead.
 *
 * @param value the input text to be shown in the text field
 * @param onValueChange the callback that is triggered when the input service updates the text. An
 *   updated text comes as a parameter of the callback
 * @param modifier a [Modifier] for this text field
 * @param enabled controls the enabled state of the [TextField]. When `false`, the text field will
 *   be neither editable nor focusable, the input of the text field will not be selectable, visually
 *   text field will appear in the disabled UI state
 * @param readOnly controls the editable state of the [TextField]. When `true`, the text field can
 *   not be modified, however, a user can focus it and copy text from it. Read-only text fields are
 *   usually used to display pre-filled forms that user can not edit
 * @param textStyle the style to be applied to the input text. The default [textStyle] uses the
 *   [LocalTextStyle] defined by the theme
 * @param label the optional label to be displayed inside the text field container. The default text
 *   style for internal [Text] is [Typography.caption] when the text field is in focus and
 *   [Typography.subtitle1] when the text field is not in focus
 * @param placeholder the optional placeholder to be displayed when the text field is in focus and
 *   the input text is empty. The default text style for internal [Text] is [Typography.subtitle1]
 * @param leadingIcon the optional leading icon to be displayed at the beginning of the text field
 *   container
 * @param trailingIcon the optional trailing icon to be displayed at the end of the text field
 *   container
 * @param isError indicates if the text field's current value is in error. If set to true, the
 *   label, bottom indicator and trailing icon by default will be displayed in error color
 * @param visualTransformation transforms the visual representation of the input [value] For
 *   example, you can use

Sources: [live-androidx-material-material-material-textfield-lines-273-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 301–327)

 *   [PasswordVisualTransformation][androidx.compose.ui.text.input.PasswordVisualTransformation] to
 *   create a password text field. By default no visual transformation is applied
 * @param keyboardOptions software keyboard options that contains configuration such as
 *   [KeyboardType] and [ImeAction].
 * @param keyboardActions when the input service emits an IME action, the corresponding callback is
 *   called. Note that this IME action may be different from what you specified in
 *   [KeyboardOptions.imeAction].
 * @param singleLine when set to true, this text field becomes a single horizontally scrolling text
 *   field instead of wrapping onto multiple lines. The keyboard will be informed to not show the
 *   return key as the [ImeAction]. Note that [maxLines] parameter will be ignored as the maxLines
 *   attribute will be automatically set to 1.
 * @param maxLines the maximum height in terms of maximum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
 * @param minLines the minimum height in terms of minimum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this text field. You can use this to change the text field's
 *   appearance or preview the text field in different states. Note that if `null` is provided,
 *   interactions will still happen internally.
 * @param shape the shape of the text field's container
 * @param colors [TextFieldColors] that will be used to resolve color of the text, content
 *   (including label, placeholder, leading and trailing icons, indicator line) and background for
 *   this text field in different states. See [TextFieldDefaults.textFieldColors]
 */
@Deprecated(
    "Use the TextField(state: TextFieldState, ...) overload instead. To migrate: " +
        "create a TextFieldState via rememberTextFieldState(initialText) in composition or " +

Sources: [live-androidx-material-material-material-textfield-lines-301-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 328–362)

        "TextFieldState(initialText) in a state holder; read text from state.text and update " +
        "it programmatically via state.edit { ... } or state.setTextAndPlaceCursorAtEnd(text); " +
        "observe text changes for side effects via snapshotFlow { state.text }.collect { ... }; " +
        "and replace onValueChange input filtering with InputTransformation, visualTransformation " +
        "with OutputTransformation (or SecureTextField for passwords), singleLine/maxLines/" +
        "minLines with TextFieldLineLimits, and keyboardActions with KeyboardActionHandler. See " +
        "https://developer.android.com/develop/ui/compose/text/migrate-state-based for full " +
        "migration guidance."
)
@Composable
public fun TextField(
    value: String,
    onValueChange: (String) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    textStyle: TextStyle = LocalTextStyle.current,
    label: @Composable (() -> Unit)? = null,
    placeholder: @Composable (() -> Unit)? = null,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
    isError: Boolean = false,
    visualTransformation: VisualTransformation = VisualTransformation.None,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    keyboardActions: KeyboardActions = KeyboardActions(),
    singleLine: Boolean = false,
    maxLines: Int = if (singleLine) 1 else Int.MAX_VALUE,
    minLines: Int = 1,
    interactionSource: MutableInteractionSource? = null,
    shape: Shape = TextFieldDefaults.TextFieldShape,
    colors: TextFieldColors = TextFieldDefaults.textFieldColors(),
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    // If color is not provided via the text style, use content color as a default

Sources: [live-androidx-material-material-material-textfield-lines-328-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 36–70)

import androidx.compose.foundation.text.input.InputTransformation
import androidx.compose.foundation.text.input.KeyboardActionHandler
import androidx.compose.foundation.text.input.OutputTransformation
import androidx.compose.foundation.text.input.TextFieldBuffer
import androidx.compose.foundation.text.input.TextFieldLineLimits
import androidx.compose.foundation.text.input.TextFieldLineLimits.MultiLine
import androidx.compose.foundation.text.input.TextFieldLineLimits.SingleLine
import androidx.compose.foundation.text.input.TextFieldState
import androidx.compose.material.TextFieldDefaults.indicatorLine
import androidx.compose.material.internal.subtractConstraintSafely
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawWithContent
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.takeOrElse
import androidx.compose.ui.layout.AlignmentLine
import androidx.compose.ui.layout.IntrinsicMeasurable
import androidx.compose.ui.layout.IntrinsicMeasureScope
import androidx.compose.ui.layout.LastBaseline
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasurePolicy
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.layout.Placeable
import androidx.compose.ui.layout.layoutId
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.TextFieldValue

Sources: [live-androidx-material-material-material-textfield-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 363–397)

    val textColor = textStyle.color.takeOrElse { colors.textColor(enabled).value }
    val mergedTextStyle = textStyle.merge(TextStyle(color = textColor))

    BasicTextField(
        value = value,
        modifier =
            modifier
                .indicatorLine(enabled, isError, interactionSource, colors)
                .defaultErrorSemantics(isError, getString(Strings.DefaultErrorMessage))
                .defaultMinSize(
                    minWidth = TextFieldDefaults.MinWidth,
                    minHeight = TextFieldDefaults.MinHeight,
                ),
        onValueChange = onValueChange,
        enabled = enabled,
        readOnly = readOnly,
        textStyle = mergedTextStyle,
        cursorBrush = SolidColor(colors.cursorColor(isError).value),
        visualTransformation = visualTransformation,
        keyboardOptions = keyboardOptions,
        keyboardActions = keyboardActions,
        interactionSource = interactionSource,
        singleLine = singleLine,
        maxLines = maxLines,
        minLines = minLines,
        decorationBox =
            @Composable { innerTextField ->
                // places leading icon, text field with label and placeholder, trailing icon
                TextFieldDefaults.TextFieldDecorationBox(
                    value = value,
                    visualTransformation = visualTransformation,
                    innerTextField = innerTextField,
                    placeholder = placeholder,
                    label = label,
                    leadingIcon = leadingIcon,

Sources: [live-androidx-material-material-material-textfield-lines-363-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 398–432)

                    trailingIcon = trailingIcon,
                    singleLine = singleLine,
                    enabled = enabled,
                    isError = isError,
                    interactionSource = interactionSource,
                    shape = shape,
                    colors = colors,
                )
            },
    )
}

@Deprecated(
    "Maintained for binary compatibility. Use version with minLines instead",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun TextField(
    value: String,
    onValueChange: (String) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    textStyle: TextStyle = LocalTextStyle.current,
    label: @Composable (() -> Unit)? = null,
    placeholder: @Composable (() -> Unit)? = null,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
    isError: Boolean = false,
    visualTransformation: VisualTransformation = VisualTransformation.None,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    keyboardActions: KeyboardActions = KeyboardActions(),
    singleLine: Boolean = false,
    maxLines: Int = Int.MAX_VALUE,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },

Sources: [live-androidx-material-material-material-textfield-lines-398-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 433–467)

    shape: Shape =
        MaterialTheme.shapes.small.copy(bottomEnd = ZeroCornerSize, bottomStart = ZeroCornerSize),
    colors: TextFieldColors = TextFieldDefaults.textFieldColors(),
) {
    TextField(
        value,
        onValueChange,
        modifier,
        enabled,
        readOnly,
        textStyle,
        label,
        placeholder,
        leadingIcon,
        trailingIcon,
        isError,
        visualTransformation,
        keyboardOptions,
        keyboardActions,
        singleLine,
        maxLines,
        1,
        interactionSource,
        shape,
        colors,
    )
}

/**
 * [Material Design filled text
 * field](https://m2.material.io/components/text-fields#filled-text-field).
 *
 * Filled text fields have more visual emphasis than outlined text fields, making them stand out
 * when surrounded by other content and components.
 *

Sources: [live-androidx-material-material-material-textfield-lines-433-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 468–498)

 * ![Filled text field
 * image](https://developer.android.com/images/reference/androidx/compose/material/filled-text-field.png)
 *
 * If you are looking for an outlined version, see [OutlinedTextField]. For a text field
 * specifically designed for passwords or other secure content, see [SecureTextField].
 *
 * This overload provides access to the input text, cursor position, selection range and IME
 * composition. If you only want to observe an input text change, use the TextField overload with
 * the [String] parameter instead.
 *
 * @param value the input [TextFieldValue] to be shown in the text field
 * @param onValueChange the callback that is triggered when the input service updates values in
 *   [TextFieldValue]. An updated [TextFieldValue] comes as a parameter of the callback
 * @param modifier a [Modifier] for this text field
 * @param enabled controls the enabled state of the [TextField]. When `false`, the text field will
 *   be neither editable nor focusable, the input of the text field will not be selectable, visually
 *   text field will appear in the disabled UI state
 * @param readOnly controls the editable state of the [TextField]. When `true`, the text field can
 *   not be modified, however, a user can focus it and copy text from it. Read-only text fields are
 *   usually used to display pre-filled forms that user can not edit
 * @param textStyle the style to be applied to the input text. The default [textStyle] uses the
 *   [LocalTextStyle] defined by the theme
 * @param label the optional label to be displayed inside the text field container. The default text
 *   style for internal [Text] is [Typography.caption] when the text field is in focus and
 *   [Typography.subtitle1] when the text field is not in focus
 * @param placeholder the optional placeholder to be displayed when the text field is in focus and
 *   the input text is empty. The default text style for internal [Text] is [Typography.subtitle1]
 * @param leadingIcon the optional leading icon to be displayed at the beginning of the text field
 *   container
 * @param trailingIcon the optional trailing icon to be displayed at the end of the text field
 *   container

Sources: [live-androidx-material-material-material-textfield-lines-468-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 499–524)

 * @param isError indicates if the text field's current value is in error state. If set to true, the
 *   label, bottom indicator and trailing icon by default will be displayed in error color
 * @param visualTransformation transforms the visual representation of the input [value]. For
 *   example, you can use
 *   [PasswordVisualTransformation][androidx.compose.ui.text.input.PasswordVisualTransformation] to
 *   create a password text field. By default no visual transformation is applied
 * @param keyboardOptions software keyboard options that contains configuration such as
 *   [KeyboardType] and [ImeAction].
 * @param keyboardActions when the input service emits an IME action, the corresponding callback is
 *   called. Note that this IME action may be different from what you specified in
 *   [KeyboardOptions.imeAction].
 * @param singleLine when set to true, this text field becomes a single horizontally scrolling text
 *   field instead of wrapping onto multiple lines. The keyboard will be informed to not show the
 *   return key as the [ImeAction]. Note that [maxLines] parameter will be ignored as the maxLines
 *   attribute will be automatically set to 1.
 * @param maxLines the maximum height in terms of maximum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
 * @param minLines the minimum height in terms of minimum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this text field. You can use this to change the text field's
 *   appearance or preview the text field in different states. Note that if `null` is provided,
 *   interactions will still happen internally.
 * @param shape the shape of the text field's container
 * @param colors [TextFieldColors] that will be used to resolve color of the text, content
 *   (including label, placeholder, leading and trailing icons, indicator line) and background for

Sources: [live-androidx-material-material-material-textfield-lines-499-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 525–559)

 *   this text field in different states. See [TextFieldDefaults.textFieldColors]
 */
@Deprecated(
    "Use the TextField(state: TextFieldState, ...) overload instead. To migrate: " +
        "create a TextFieldState via rememberTextFieldState(initialText, initialSelection) in " +
        "composition or TextFieldState(initialText, initialSelection) in a state holder; read " +
        "text and selection from state.text and state.selection, and update them programmatically " +
        "via state.edit { ... } or state.setTextAndPlaceCursorAtEnd(text); observe changes for " +
        "side effects via snapshotFlow { state.text }.collect { ... }; and replace onValueChange " +
        "input filtering with InputTransformation, visualTransformation with OutputTransformation " +
        "(or SecureTextField for passwords), singleLine/maxLines/minLines with " +
        "TextFieldLineLimits, and keyboardActions with KeyboardActionHandler. See " +
        "https://developer.android.com/develop/ui/compose/text/migrate-state-based for full " +
        "migration guidance."
)
@Composable
public fun TextField(
    value: TextFieldValue,
    onValueChange: (TextFieldValue) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    textStyle: TextStyle = LocalTextStyle.current,
    label: @Composable (() -> Unit)? = null,
    placeholder: @Composable (() -> Unit)? = null,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
    isError: Boolean = false,
    visualTransformation: VisualTransformation = VisualTransformation.None,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    keyboardActions: KeyboardActions = KeyboardActions(),
    singleLine: Boolean = false,
    maxLines: Int = if (singleLine) 1 else Int.MAX_VALUE,
    minLines: Int = 1,
    interactionSource: MutableInteractionSource? = null,

Sources: [live-androidx-material-material-material-textfield-lines-525-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 560–594)

    shape: Shape = TextFieldDefaults.TextFieldShape,
    colors: TextFieldColors = TextFieldDefaults.textFieldColors(),
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    // If color is not provided via the text style, use content color as a default
    val textColor = textStyle.color.takeOrElse { colors.textColor(enabled).value }
    val mergedTextStyle = textStyle.merge(TextStyle(color = textColor))

    BasicTextField(
        value = value,
        modifier =
            modifier
                .indicatorLine(enabled, isError, interactionSource, colors)
                .defaultErrorSemantics(isError, getString(Strings.DefaultErrorMessage))
                .defaultMinSize(
                    minWidth = TextFieldDefaults.MinWidth,
                    minHeight = TextFieldDefaults.MinHeight,
                ),
        onValueChange = onValueChange,
        enabled = enabled,
        readOnly = readOnly,
        textStyle = mergedTextStyle,
        cursorBrush = SolidColor(colors.cursorColor(isError).value),
        visualTransformation = visualTransformation,
        keyboardOptions = keyboardOptions,
        keyboardActions = keyboardActions,
        interactionSource = interactionSource,
        singleLine = singleLine,
        maxLines = maxLines,
        minLines = minLines,
        decorationBox =
            @Composable { innerTextField ->
                // places leading icon, text field with label and placeholder, trailing icon
                TextFieldDefaults.TextFieldDecorationBox(

Sources: [live-androidx-material-material-material-textfield-lines-560-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 595–629)

                    value = value.text,
                    visualTransformation = visualTransformation,
                    innerTextField = innerTextField,
                    placeholder = placeholder,
                    label = label,
                    leadingIcon = leadingIcon,
                    trailingIcon = trailingIcon,
                    singleLine = singleLine,
                    enabled = enabled,
                    isError = isError,
                    interactionSource = interactionSource,
                    shape = shape,
                    colors = colors,
                )
            },
    )
}

@Deprecated(
    "Maintained for binary compatibility. Use version with minLines instead",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun TextField(
    value: TextFieldValue,
    onValueChange: (TextFieldValue) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    textStyle: TextStyle = LocalTextStyle.current,
    label: @Composable (() -> Unit)? = null,
    placeholder: @Composable (() -> Unit)? = null,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
    isError: Boolean = false,

Sources: [live-androidx-material-material-material-textfield-lines-595-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 630–664)

    visualTransformation: VisualTransformation = VisualTransformation.None,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    keyboardActions: KeyboardActions = KeyboardActions(),
    singleLine: Boolean = false,
    maxLines: Int = Int.MAX_VALUE,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    shape: Shape = TextFieldDefaults.TextFieldShape,
    colors: TextFieldColors = TextFieldDefaults.textFieldColors(),
) {
    TextField(
        value,
        onValueChange,
        modifier,
        enabled,
        readOnly,
        textStyle,
        label,
        placeholder,
        leadingIcon,
        trailingIcon,
        isError,
        visualTransformation,
        keyboardOptions,
        keyboardActions,
        singleLine,
        maxLines,
        1,
        interactionSource,
        shape,
        colors,
    )
}

/**
 * Composable responsible for measuring and laying out leading and trailing icons, label,

Sources: [live-androidx-material-material-material-textfield-lines-630-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 665–699)

 * placeholder and the input field.
 */
@Composable
internal fun TextFieldLayout(
    modifier: Modifier,
    textField: @Composable () -> Unit,
    label: @Composable (() -> Unit)?,
    placeholder: @Composable ((Modifier) -> Unit)?,
    leading: @Composable (() -> Unit)?,
    trailing: @Composable (() -> Unit)?,
    singleLine: Boolean,
    animationProgress: Float,
    paddingValues: PaddingValues,
) {
    val measurePolicy =
        remember(singleLine, animationProgress, paddingValues) {
            TextFieldMeasurePolicy(singleLine, animationProgress, paddingValues)
        }
    val layoutDirection = LocalLayoutDirection.current
    Layout(
        modifier = modifier,
        content = {
            if (leading != null) {
                Box(
                    modifier = Modifier.layoutId(LeadingId).minimumInteractiveComponentSize(),
                    contentAlignment = Alignment.Center,
                ) {
                    leading()
                }
            }
            if (trailing != null) {
                Box(
                    modifier = Modifier.layoutId(TrailingId).minimumInteractiveComponentSize(),
                    contentAlignment = Alignment.Center,
                ) {

Sources: [live-androidx-material-material-material-textfield-lines-665-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 700–734)

                    trailing()
                }
            }

            val startTextFieldPadding = paddingValues.calculateStartPadding(layoutDirection)
            val endTextFieldPadding = paddingValues.calculateEndPadding(layoutDirection)
            val padding =
                Modifier.padding(
                    start =
                        if (leading != null) {
                            (startTextFieldPadding - HorizontalIconPadding).coerceAtLeast(0.dp)
                        } else {
                            startTextFieldPadding
                        },
                    end =
                        if (trailing != null) {
                            (endTextFieldPadding - HorizontalIconPadding).coerceAtLeast(0.dp)
                        } else {
                            endTextFieldPadding
                        },
                )
            if (placeholder != null) {
                placeholder(Modifier.layoutId(PlaceholderId).then(padding))
            }
            if (label != null) {
                Box(Modifier.layoutId(LabelId).then(padding)) { label() }
            }
            Box(
                modifier = Modifier.layoutId(TextFieldId).then(padding),
                propagateMinConstraints = true,
            ) {
                textField()
            }
        },
        measurePolicy = measurePolicy,

Sources: [live-androidx-material-material-material-textfield-lines-700-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 71–105)

import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.coerceAtLeast
import androidx.compose.ui.unit.constrainHeight
import androidx.compose.ui.unit.constrainWidth
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.offset
import androidx.compose.ui.util.fastFirst
import androidx.compose.ui.util.fastFirstOrNull
import kotlin.math.max
import kotlin.math.roundToInt

/**
 * [Material Design filled text
 * field](https://m2.material.io/components/text-fields#filled-text-field).
 *
 * Filled text fields have more visual emphasis than outlined text fields, making them stand out
 * when surrounded by other content and components.
 *
 * ![Filled text field
 * image](https://developer.android.com/images/reference/androidx/compose/material/filled-text-field.png)
 *
 * If you are looking for an outlined version, see [OutlinedTextField].
 *
 * This overload of [TextField] uses [TextFieldState] to keep track of its text content and position
 * of the cursor or selection.
 *
 * A simple single line text field looks like:
 *
 * @sample androidx.compose.material.samples.SimpleTextFieldSample
 *
 * You can control the initial text input and selection:
 *
 * @sample androidx.compose.material.samples.TextFieldWithInitialValueAndSelection

Sources: [live-androidx-material-material-material-textfield-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 735–769)

    )
}

private class TextFieldMeasurePolicy(
    private val singleLine: Boolean,
    private val animationProgress: Float,
    private val paddingValues: PaddingValues,
) : MeasurePolicy {
    override fun MeasureScope.measure(
        measurables: List<Measurable>,
        constraints: Constraints,
    ): MeasureResult {
        val topPaddingValue = paddingValues.calculateTopPadding().roundToPx()
        val bottomPaddingValue = paddingValues.calculateBottomPadding().roundToPx()

        // padding between label and input text
        val topPadding = TextFieldTopPadding.roundToPx()
        var occupiedSpaceHorizontally = 0

        // measure leading icon
        val looseConstraints = constraints.copy(minWidth = 0, minHeight = 0)
        val leadingPlaceable =
            measurables.fastFirstOrNull { it.layoutId == LeadingId }?.measure(looseConstraints)
        occupiedSpaceHorizontally += widthOrZero(leadingPlaceable)

        // measure trailing icon
        val trailingPlaceable =
            measurables
                .fastFirstOrNull { it.layoutId == TrailingId }
                ?.measure(looseConstraints.offset(horizontal = -occupiedSpaceHorizontally))
        occupiedSpaceHorizontally += widthOrZero(trailingPlaceable)

        // measure label
        val labelConstraints =
            looseConstraints.offset(

Sources: [live-androidx-material-material-material-textfield-lines-735-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 770–804)

                vertical = -bottomPaddingValue,
                horizontal = -occupiedSpaceHorizontally,
            )
        val labelPlaceable =
            measurables.fastFirstOrNull { it.layoutId == LabelId }?.measure(labelConstraints)
        val lastBaseline =
            labelPlaceable?.get(LastBaseline)?.let {
                if (it != AlignmentLine.Unspecified) it else labelPlaceable.height
            } ?: 0
        val effectiveLabelBaseline = max(lastBaseline, topPaddingValue)

        // measure input field
        // input field is laid out differently depending on whether the label is present or not
        val verticalConstraintOffset =
            if (labelPlaceable != null) {
                -bottomPaddingValue - topPadding - effectiveLabelBaseline
            } else {
                -topPaddingValue - bottomPaddingValue
            }
        val textFieldConstraints =
            constraints
                .copy(minHeight = 0)
                .offset(
                    vertical = verticalConstraintOffset,
                    horizontal = -occupiedSpaceHorizontally,
                )
        val textFieldPlaceable =
            measurables.fastFirst { it.layoutId == TextFieldId }.measure(textFieldConstraints)

        // measure placeholder
        val placeholderConstraints = textFieldConstraints.copy(minWidth = 0)
        val placeholderPlaceable =
            measurables
                .fastFirstOrNull { it.layoutId == PlaceholderId }
                ?.measure(placeholderConstraints)

Sources: [live-androidx-material-material-material-textfield-lines-770-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 805–839)


        val width =
            calculateWidth(
                widthOrZero(leadingPlaceable),
                widthOrZero(trailingPlaceable),
                textFieldPlaceable.width,
                widthOrZero(labelPlaceable),
                widthOrZero(placeholderPlaceable),
                constraints,
            )
        val height =
            calculateHeight(
                textFieldPlaceable.height,
                labelPlaceable != null,
                effectiveLabelBaseline,
                heightOrZero(leadingPlaceable),
                heightOrZero(trailingPlaceable),
                heightOrZero(placeholderPlaceable),
                constraints,
                density,
                paddingValues,
            )

        return layout(width, height) {
            if (labelPlaceable != null) {
                // label's final position is always relative to the baseline
                val labelEndPosition = (topPaddingValue - lastBaseline).coerceAtLeast(0)
                placeWithLabel(
                    width,
                    height,
                    textFieldPlaceable,
                    labelPlaceable,
                    placeholderPlaceable,
                    leadingPlaceable,
                    trailingPlaceable,

Sources: [live-androidx-material-material-material-textfield-lines-805-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 840–874)

                    singleLine,
                    labelEndPosition,
                    effectiveLabelBaseline + topPadding,
                    animationProgress,
                    density,
                )
            } else {
                placeWithoutLabel(
                    width,
                    height,
                    textFieldPlaceable,
                    placeholderPlaceable,
                    leadingPlaceable,
                    trailingPlaceable,
                    singleLine,
                    density,
                    paddingValues,
                )
            }
        }
    }

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,
    ): Int {
        return intrinsicHeight(measurables, width) { intrinsicMeasurable, w ->
            intrinsicMeasurable.maxIntrinsicHeight(w)
        }
    }

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,
    ): Int {

Sources: [live-androidx-material-material-material-textfield-lines-840-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 875–909)

        return intrinsicHeight(measurables, width) { intrinsicMeasurable, w ->
            intrinsicMeasurable.minIntrinsicHeight(w)
        }
    }

    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ): Int {
        return intrinsicWidth(measurables, height) { intrinsicMeasurable, h ->
            intrinsicMeasurable.maxIntrinsicWidth(h)
        }
    }

    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ): Int {
        return intrinsicWidth(measurables, height) { intrinsicMeasurable, h ->
            intrinsicMeasurable.minIntrinsicWidth(h)
        }
    }

    private fun intrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
        intrinsicMeasurer: (IntrinsicMeasurable, Int) -> Int,
    ): Int {
        val textFieldWidth =
            intrinsicMeasurer(measurables.fastFirst { it.layoutId == TextFieldId }, height)
        val labelWidth =
            measurables
                .fastFirstOrNull { it.layoutId == LabelId }
                ?.let { intrinsicMeasurer(it, height) } ?: 0
        val trailingWidth =

Sources: [live-androidx-material-material-material-textfield-lines-875-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 910–944)

            measurables
                .fastFirstOrNull { it.layoutId == TrailingId }
                ?.let { intrinsicMeasurer(it, height) } ?: 0
        val leadingWidth =
            measurables
                .fastFirstOrNull { it.layoutId == LeadingId }
                ?.let { intrinsicMeasurer(it, height) } ?: 0
        val placeholderWidth =
            measurables
                .fastFirstOrNull { it.layoutId == PlaceholderId }
                ?.let { intrinsicMeasurer(it, height) } ?: 0
        return calculateWidth(
            leadingWidth = leadingWidth,
            trailingWidth = trailingWidth,
            textFieldWidth = textFieldWidth,
            labelWidth = labelWidth,
            placeholderWidth = placeholderWidth,
            constraints = Constraints(),
        )
    }

    private fun IntrinsicMeasureScope.intrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,
        intrinsicMeasurer: (IntrinsicMeasurable, Int) -> Int,
    ): Int {
        var remainingWidth = width
        val leadingHeight =
            measurables
                .fastFirstOrNull { it.layoutId == LeadingId }
                ?.let {
                    remainingWidth =
                        remainingWidth.subtractConstraintSafely(
                            it.maxIntrinsicWidth(Constraints.Infinity)
                        )

Sources: [live-androidx-material-material-material-textfield-lines-910-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 945–979)

                    intrinsicMeasurer(it, width)
                } ?: 0
        val trailingHeight =
            measurables
                .fastFirstOrNull { it.layoutId == TrailingId }
                ?.let {
                    remainingWidth =
                        remainingWidth.subtractConstraintSafely(
                            it.maxIntrinsicWidth(Constraints.Infinity)
                        )
                    intrinsicMeasurer(it, width)
                } ?: 0

        val labelHeight =
            measurables
                .fastFirstOrNull { it.layoutId == LabelId }
                ?.let { intrinsicMeasurer(it, remainingWidth) } ?: 0

        val textFieldHeight =
            intrinsicMeasurer(measurables.fastFirst { it.layoutId == TextFieldId }, remainingWidth)
        val placeholderHeight =
            measurables
                .fastFirstOrNull { it.layoutId == PlaceholderId }
                ?.let { intrinsicMeasurer(it, remainingWidth) } ?: 0

        return calculateHeight(
            textFieldHeight = textFieldHeight,
            hasLabel = labelHeight > 0,
            labelBaseline = labelHeight,
            leadingHeight = leadingHeight,
            trailingHeight = trailingHeight,
            placeholderHeight = placeholderHeight,
            constraints = Constraints(),
            density = density,
            paddingValues = paddingValues,

Sources: [live-androidx-material-material-material-textfield-lines-945-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)

## androidx.compose.material TextField.kt source (lines 980–1014)

        )
    }
}

private fun calculateWidth(
    leadingWidth: Int,
    trailingWidth: Int,
    textFieldWidth: Int,
    labelWidth: Int,
    placeholderWidth: Int,
    constraints: Constraints,
): Int {
    val middleSection = maxOf(textFieldWidth, labelWidth, placeholderWidth)
    val wrappedWidth = leadingWidth + middleSection + trailingWidth
    return constraints.constrainWidth(wrappedWidth)
}

private fun calculateHeight(
    textFieldHeight: Int,
    hasLabel: Boolean,
    labelBaseline: Int,
    leadingHeight: Int,
    trailingHeight: Int,
    placeholderHeight: Int,
    constraints: Constraints,
    density: Float,
    paddingValues: PaddingValues,
): Int {
    val paddingToLabel = TextFieldTopPadding.value * density
    val topPaddingValue = paddingValues.calculateTopPadding().value * density
    val bottomPaddingValue = paddingValues.calculateBottomPadding().value * density

    val inputFieldHeight = max(textFieldHeight, placeholderHeight)
    val middleSectionHeight =
        if (hasLabel) {

Sources: [live-androidx-material-material-material-textfield-lines-980-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/TextField.kt)
