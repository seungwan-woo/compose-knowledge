---
type: reference
title: androidx.compose.material3 TextField.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-textfield-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 1
    endLine: 35
    sha256: 3ba9cd0e93a745c106b20f2013ffbaa443159839b51ee03521b9844efa9b4bc6
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

      @file:Suppress("DEPRECATION") // b/552879150

      package androidx.compose.material3

      import androidx.compose.animation.core.AnimationSpec
      import androidx.compose.animation.core.snap
      import androidx.compose.foundation.ScrollState
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.InteractionSource
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.interaction.collectIsFocusedAsState
      import androidx.compose.foundation.layout.PaddingValues
      import androidx.compose.foundation.layout.defaultMinSize
      import androidx.compose.foundation.rememberScrollState
      import androidx.compose.foundation.text.BasicTextField
      import androidx.compose.foundation.text.KeyboardActions
      import androidx.compose.foundation.text.KeyboardOptions
      import androidx.compose.foundation.text.input.InputTransformation
      import androidx.compose.foundation.text.input.KeyboardActionHandler
  - id: live-androidx-material3-material3-material3-textfield-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 106
    endLine: 140
    sha256: 1a0fc0579a3365e23c073e7254fdef9d1ffb8a60c4ac52b4029b316ba5de4998
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * You may provide a placeholder:
       *
       * @sample androidx.compose.material3.samples.TextFieldWithPlaceholder
       *
       * You can also provide leading and trailing icons:
       *
       * @sample androidx.compose.material3.samples.TextFieldWithIcons
       *
       * You can also provide a prefix or suffix to the text:
       *
       * @sample androidx.compose.material3.samples.TextFieldWithPrefixAndSuffix
       *
       * To handle the error input state, use [isError] parameter:
       *
       * @sample androidx.compose.material3.samples.TextFieldWithErrorState
       *
       * Additionally, you may provide additional message at the bottom:
       *
       * @sample androidx.compose.material3.samples.TextFieldWithSupportingText
       *
       * You can change the content padding to create a dense text field:
       *
       * @sample androidx.compose.material3.samples.DenseTextFieldContentPadding
       *
       * Hiding a software keyboard on IME action performed:
       *
       * @sample androidx.compose.material3.samples.TextFieldWithHideKeyboardOnImeAction
       * @param state [TextFieldState] object that holds the internal editing state of the text field.
       * @param modifier the [Modifier] to be applied to this text field.
       * @param enabled controls the enabled state of this text field. When `false`, this component will
       *   not respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param readOnly controls the editable state of the text field. When `true`, the text field cannot
       *   be modified. However, a user can focus it and copy text from it. Read-only text fields are
       *   usually used to display pre-filled forms that a user cannot edit.
  - id: live-androidx-material3-material3-material3-textfield-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 141
    endLine: 167
    sha256: 7ed2113556b10568ce36a68eede8ae7d03a210e2d52305469db3c18327c0786f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param textStyle the style to be applied to the input text. Defaults to [LocalTextStyle].
       * @param labelPosition the position of the label. See [TextFieldLabelPosition].
       * @param label the optional label to be displayed with this text field. The default text style uses
       *   [Typography.bodySmall] when minimized and [Typography.bodyLarge] when expanded.
       * @param placeholder the optional placeholder to be displayed when the input text is empty. The
       *   default text style uses [Typography.bodyLarge].
       * @param leadingIcon the optional leading icon to be displayed at the beginning of the text field
       *   container.
       * @param trailingIcon the optional trailing icon to be displayed at the end of the text field
       *   container.
       * @param prefix the optional prefix to be displayed before the input text in the text field.
       * @param suffix the optional suffix to be displayed after the input text in the text field.
       * @param supportingText the optional supporting text to be displayed below the text field.
       * @param isError indicates if the text field's current value is in error. When `true`, the
       *   components of the text field will be displayed in an error color, and an error will be
       *   announced to accessibility services.
       * @param inputTransformation optional [InputTransformation] that will be used to transform changes
       *   to the [TextFieldState] made by the user. The transformation will be applied to changes made by
       *   hardware and software keyboard events, pasting or dropping text, accessibility services, and
       *   tests. The transformation will _not_ be applied when changing the [state] programmatically, or
       *   when the transformation is changed. If the transformation is changed on an existing text field,
       *   it will be applied to the next user edit. The transformation will not immediately affect the
       *   current [state].
       * @param outputTransformation optional [OutputTransformation] that transforms how the contents of
       *   the text field are presented.
       * @param keyboardOptions software keyboard options that contains configuration such as
       *   [KeyboardType] and [ImeAction].
  - id: live-androidx-material3-material3-material3-textfield-lines-168-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 168
    endLine: 191
    sha256: f470055848b370cd4486f689cd9769c2ab7ba7ab090e9e54a8d04f74fe4aa52c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param onKeyboardAction called when the user presses the action button in the input method editor
       *   (IME), or by pressing the enter key on a hardware keyboard. By default this parameter is null,
       *   and would execute the default behavior for a received IME Action e.g., [ImeAction.Done] would
       *   close the keyboard, [ImeAction.Next] would switch the focus to the next focusable item on the
       *   screen.
       * @param lineLimits whether the text field should be [SingleLine], scroll horizontally, and ignore
       *   newlines; or [MultiLine] and grow and scroll vertically. If [SingleLine] is passed, all newline
       *   characters ('\n') within the text will be replaced with regular whitespace (' ').
       * @param onTextLayout Callback that is executed when the text layout becomes queryable. The
       *   callback receives a function that returns a [TextLayoutResult] if the layout can be calculated,
       *   or null if it cannot. The function reads the layout result from a snapshot state object, and
       *   will invalidate its caller when the layout result changes. A [TextLayoutResult] object contains
       *   paragraph information, size of the text, baselines and other details. [Density] scope is the
       *   one that was used while creating the given text layout.
       * @param scrollState scroll state that manages either horizontal or vertical scroll of the text
       *   field. If [lineLimits] is [SingleLine], this text field is treated as single line with
       *   horizontal scroll behavior. Otherwise, the text field becomes vertically scrollable.
       * @param shape defines the shape of this text field's container.
       * @param colors [TextFieldColors] that will be used to resolve the colors used for this text field
       *   in different states. See [TextFieldDefaults.colors].
       * @param contentPadding the padding applied to the inner text field that separates it from the
       *   surrounding elements of the text field. Note that the padding values may not be respected if
       *   they are incompatible with the text field's size constraints or layout. See
       *   [TextFieldDefaults.contentPaddingWithLabel] and [TextFieldDefaults.contentPaddingWithoutLabel].
  - id: live-androidx-material3-material3-material3-textfield-lines-192-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 192
    endLine: 226
    sha256: d3d7ec951533759f4ee1a6ae0a70f9b735904ca178439ac881abf84bac206acf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this text field. You can use this to change the text field's
       *   appearance or preview the text field in different states. Note that if `null` is provided,
       *   interactions will still happen internally.
       */
      @OptIn(ExperimentalMaterial3Api::class)
      @Composable
      public fun TextField(
          state: TextFieldState,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          readOnly: Boolean = false,
          textStyle: TextStyle = LocalTextStyle.current,
          labelPosition: TextFieldLabelPosition = TextFieldLabelPosition.Inside(),
          label: @Composable (TextFieldLabelScope.() -> Unit)? = null,
          placeholder: @Composable (() -> Unit)? = null,
          leadingIcon: @Composable (() -> Unit)? = null,
          trailingIcon: @Composable (() -> Unit)? = null,
          prefix: @Composable (() -> Unit)? = null,
          suffix: @Composable (() -> Unit)? = null,
          supportingText: @Composable (() -> Unit)? = null,
          isError: Boolean = false,
          inputTransformation: InputTransformation? = null,
          outputTransformation: OutputTransformation? = null,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          onKeyboardAction: KeyboardActionHandler? = null,
          lineLimits: TextFieldLineLimits = TextFieldLineLimits.Default,
          onTextLayout: (Density.(getResult: () -> TextLayoutResult?) -> Unit)? = null,
          scrollState: ScrollState = rememberScrollState(),
          shape: Shape = TextFieldDefaults.shape,
          colors: TextFieldColors = TextFieldDefaults.colors(),
          contentPadding: PaddingValues = TextFieldDefaults.defaultContentPadding(label, labelPosition),
          interactionSource: MutableInteractionSource? = null,
      ) {
          @Suppress("NAME_SHADOWING")
  - id: live-androidx-material3-material3-material3-textfield-lines-227-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 227
    endLine: 261
    sha256: 1c42c96a412694b2c997fc56ce56efb56f3099ad72334d0d8d0f16d2b58ed11e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          // If color is not provided via the text style, use content color as a default
          val textColor =
              textStyle.color.takeOrElse {
                  val focused = interactionSource.collectIsFocusedAsState().value
                  colors.textColor(enabled, isError, focused)
              }
          val mergedTextStyle = textStyle.merge(TextStyle(color = textColor))
          // Normalize labelPosition before passing down
          val labelPosition = labelPosition.normalize()

          CompositionLocalProvider(LocalTextSelectionColors provides colors.textSelectionColors) {
              BasicTextField(
                  state = state,
                  modifier =
                      modifier
                          .topPaddingForLabelCutout(label, labelPosition)
                          .defaultErrorSemantics(isError, getString(Strings.DefaultErrorMessage))
                          .defaultMinSize(
                              minWidth = TextFieldDefaults.MinWidth,
                              minHeight = TextFieldDefaults.MinHeight,
                          ),
                  enabled = enabled,
                  readOnly = readOnly,
                  textStyle = mergedTextStyle,
                  cursorBrush = SolidColor(colors.cursorColor(isError)),
                  keyboardOptions = keyboardOptions,
                  onKeyboardAction = onKeyboardAction,
                  lineLimits = lineLimits,
                  onTextLayout = onTextLayout,
                  interactionSource = interactionSource,
                  inputTransformation = inputTransformation,
                  outputTransformation = outputTransformation,
                  scrollState = scrollState,
                  decorator =
  - id: live-androidx-material3-material3-material3-textfield-lines-262-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 262
    endLine: 296
    sha256: 8bfd5e0fd3bd17b616055507107e4238ea034350a2e1aa41ad13b287e861c5ce
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      TextFieldDefaults.decorator(
                          state = state,
                          enabled = enabled,
                          lineLimits = lineLimits,
                          outputTransformation = outputTransformation,
                          interactionSource = interactionSource,
                          labelPosition = labelPosition,
                          label = label,
                          placeholder = placeholder,
                          leadingIcon = leadingIcon,
                          trailingIcon = trailingIcon,
                          prefix = prefix,
                          suffix = suffix,
                          supportingText = supportingText,
                          isError = isError,
                          colors = colors,
                          contentPadding = contentPadding,
                          container = {
                              TextFieldDefaults.Container(
                                  enabled = enabled,
                                  isError = isError,
                                  interactionSource = interactionSource,
                                  colors = colors,
                                  shape = shape,
                              )
                          },
                      ),
              )
          }
      }

      /**
       * [Material Design filled text field](https://m3.material.io/components/text-fields/overview)
       *
       * Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
  - id: live-androidx-material3-material3-material3-textfield-lines-297-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 297
    endLine: 327
    sha256: e9993e8415d654af0ce89df7af2e798f7f5d6a6664c01a7a266ed1d2ee4b247d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Filled text fields have more visual emphasis than outlined text fields, making them stand out
       * when surrounded by other content and components.
       *
       * ![Filled text field
       * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-text-field.png)
       *
       * If you are looking for an outlined version, see [OutlinedTextField].
       *
       * If apart from input text change you also want to observe the cursor location, selection range, or
       * IME composition use the TextField overload with the [TextFieldValue] parameter instead.
       *
       * @param value the input text to be shown in the text field
       * @param onValueChange the callback that is triggered when the input service updates the text. An
       *   updated text comes as a parameter of the callback
       * @param modifier the [Modifier] to be applied to this text field
       * @param enabled controls the enabled state of this text field. When `false`, this component will
       *   not respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param readOnly controls the editable state of the text field. When `true`, the text field cannot
       *   be modified. However, a user can focus it and copy text from it. Read-only text fields are
       *   usually used to display pre-filled forms that a user cannot edit.
       * @param textStyle the style to be applied to the input text. Defaults to [LocalTextStyle].
       * @param label the optional label to be displayed with this text field. The default text style uses
       *   [Typography.bodySmall] when minimized and [Typography.bodyLarge] when expanded.
       * @param placeholder the optional placeholder to be displayed when the text field is in focus and
       *   the input text is empty. The default text style for internal [Text] is [Typography.bodyLarge]
       * @param leadingIcon the optional leading icon to be displayed at the beginning of the text field
       *   container
       * @param trailingIcon the optional trailing icon to be displayed at the end of the text field
       *   container
       * @param prefix the optional prefix to be displayed before the input text in the text field
  - id: live-androidx-material3-material3-material3-textfield-lines-328-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 328
    endLine: 353
    sha256: c5b9b955a81b72767f7a1ca904084260878112ab1997b355f2111b7507079a67
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param suffix the optional suffix to be displayed after the input text in the text field
       * @param supportingText the optional supporting text to be displayed below the text field
       * @param isError indicates if the text field's current value is in error. If set to true, the
       *   label, bottom indicator and trailing icon by default will be displayed in error color
       * @param visualTransformation transforms the visual representation of the input [value] For
       *   example, you can use
       *   [PasswordVisualTransformation][androidx.compose.ui.text.input.PasswordVisualTransformation] to
       *   create a password text field. By default, no visual transformation is applied.
       * @param keyboardOptions software keyboard options that contains configuration such as
       *   [KeyboardType] and [ImeAction].
       * @param keyboardActions when the input service emits an IME action, the corresponding callback is
       *   called. Note that this IME action may be different from what you specified in
       *   [KeyboardOptions.imeAction].
       * @param singleLine when `true`, this text field becomes a single horizontally scrolling text field
       *   instead of wrapping onto multiple lines. The keyboard will be informed to not show the return
       *   key as the [ImeAction]. Note that [maxLines] parameter will be ignored as the maxLines
       *   attribute will be automatically set to 1.
       * @param maxLines the maximum height in terms of maximum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
       * @param minLines the minimum height in terms of minimum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this text field. You can use this to change the text field's
       *   appearance or preview the text field in different states. Note that if `null` is provided,
       *   interactions will still happen internally.
       * @param shape defines the shape of this text field's container
  - id: live-androidx-material3-material3-material3-textfield-lines-354-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 354
    endLine: 388
    sha256: bd57e9fca2b26a95f2c6cc8158f8550d49a23a241169015d11f8e2a28d36b7aa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param colors [TextFieldColors] that will be used to resolve the colors used for this text field
       *   in different states. See [TextFieldDefaults.colors].
       */
      @Deprecated(
          "Use the TextField(state: TextFieldState, ...) overload instead. To migrate: " +
              "create a TextFieldState via rememberTextFieldState(initialText) in composition or " +
              "TextFieldState(initialText) in a state holder; read text from state.text and update " +
              "it programmatically via state.edit { ... } or state.setTextAndPlaceCursorAtEnd(text); " +
              "observe text changes for side effects via snapshotFlow { state.text }.collect { ... }; " +
              "and replace onValueChange input filtering with InputTransformation, visualTransformation " +
              "with OutputTransformation (or SecureTextField for passwords), singleLine/maxLines/" +
              "minLines with TextFieldLineLimits, and keyboardActions with KeyboardActionHandler. See " +
              "https://developer.android.com/develop/ui/compose/text/migrate-state-based for full " +
              "migration guidance."
      )
      @OptIn(ExperimentalMaterial3Api::class)
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
          prefix: @Composable (() -> Unit)? = null,
          suffix: @Composable (() -> Unit)? = null,
          supportingText: @Composable (() -> Unit)? = null,
          isError: Boolean = false,
          visualTransformation: VisualTransformation = VisualTransformation.None,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          keyboardActions: KeyboardActions = KeyboardActions.Default,
  - id: live-androidx-material3-material3-material3-textfield-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 36
    endLine: 70
    sha256: a12bb545b5231a67fbafae99b0644378f32a85364dfbdd5413d4d8edfd8d338e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.foundation.text.input.OutputTransformation
      import androidx.compose.foundation.text.input.TextFieldLineLimits
      import androidx.compose.foundation.text.input.TextFieldLineLimits.MultiLine
      import androidx.compose.foundation.text.input.TextFieldLineLimits.SingleLine
      import androidx.compose.foundation.text.input.TextFieldState
      import androidx.compose.foundation.text.selection.LocalTextSelectionColors
      import androidx.compose.material3.MaterialTheme.LocalMaterialTheme
      import androidx.compose.material3.TextFieldDefaults.defaultTextFieldColors
      import androidx.compose.material3.TextFieldDefaults.normalize
      import androidx.compose.material3.internal.InteractionTracker
      import androidx.compose.material3.internal.NodeTransition
      import androidx.compose.material3.internal.Strings
      import androidx.compose.material3.internal.defaultErrorSemantics
      import androidx.compose.material3.internal.getString
      import androidx.compose.material3.internal.topPaddingForLabelCutout
      import androidx.compose.material3.tokens.FilledTextFieldTokens
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.CompositionLocalProvider
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.draw.CacheDrawModifierNode
      import androidx.compose.ui.geometry.Rect
      import androidx.compose.ui.graphics.Path
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.graphics.SolidColor
      import androidx.compose.ui.graphics.addOutline
      import androidx.compose.ui.graphics.takeOrElse
      import androidx.compose.ui.node.CompositionLocalConsumerModifierNode
      import androidx.compose.ui.node.DelegatingNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.currentValueOf
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.text.TextLayoutResult
      import androidx.compose.ui.text.TextStyle
      import androidx.compose.ui.text.input.ImeAction
  - id: live-androidx-material3-material3-material3-textfield-lines-389-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 389
    endLine: 423
    sha256: 4ed5c587a963e05448804c6dd8f120821f51e1d9d83f47153a4a5fcb5a9e16f8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          singleLine: Boolean = false,
          maxLines: Int = if (singleLine) 1 else Int.MAX_VALUE,
          minLines: Int = 1,
          interactionSource: MutableInteractionSource? = null,
          shape: Shape = TextFieldDefaults.shape,
          colors: TextFieldColors = TextFieldDefaults.colors(),
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          // If color is not provided via the text style, use content color as a default
          val textColor =
              textStyle.color.takeOrElse {
                  val focused = interactionSource.collectIsFocusedAsState().value
                  colors.textColor(enabled, isError, focused)
              }
          val mergedTextStyle = textStyle.merge(TextStyle(color = textColor))

          CompositionLocalProvider(LocalTextSelectionColors provides colors.textSelectionColors) {
              BasicTextField(
                  value = value,
                  modifier =
                      modifier
                          .defaultErrorSemantics(isError, getString(Strings.DefaultErrorMessage))
                          .defaultMinSize(
                              minWidth = TextFieldDefaults.MinWidth,
                              minHeight = TextFieldDefaults.MinHeight,
                          ),
                  onValueChange = onValueChange,
                  enabled = enabled,
                  readOnly = readOnly,
                  textStyle = mergedTextStyle,
                  cursorBrush = SolidColor(colors.cursorColor(isError)),
                  visualTransformation = visualTransformation,
                  keyboardOptions = keyboardOptions,
                  keyboardActions = keyboardActions,
  - id: live-androidx-material3-material3-material3-textfield-lines-424-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 424
    endLine: 458
    sha256: 5918d04c341814ccfc82aaa20035d707dd47046c93fbc8d45346ab3ec5e534c5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  interactionSource = interactionSource,
                  singleLine = singleLine,
                  maxLines = maxLines,
                  minLines = minLines,
                  decorationBox =
                      @Composable { innerTextField ->
                          // places leading icon, text field with label and placeholder, trailing icon
                          TextFieldDefaults.DecorationBox(
                              value = value,
                              visualTransformation = visualTransformation,
                              innerTextField = innerTextField,
                              placeholder = placeholder,
                              label = label,
                              leadingIcon = leadingIcon,
                              trailingIcon = trailingIcon,
                              prefix = prefix,
                              suffix = suffix,
                              supportingText = supportingText,
                              shape = shape,
                              singleLine = singleLine,
                              enabled = enabled,
                              isError = isError,
                              interactionSource = interactionSource,
                              colors = colors,
                          )
                      },
              )
          }
      }

      /**
       * [Material Design filled text field](https://m3.material.io/components/text-fields/overview)
       *
       * Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
       * Filled text fields have more visual emphasis than outlined text fields, making them stand out
  - id: live-androidx-material3-material3-material3-textfield-lines-459-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 459
    endLine: 490
    sha256: 024a4951f4f2876d69a36166446166e97da712c828af65774042979cdeff0a17
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * when surrounded by other content and components.
       *
       * ![Filled text field
       * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-text-field.png)
       *
       * If you are looking for an outlined version, see [OutlinedTextField].
       *
       * This overload provides access to the input text, cursor position, selection range and IME
       * composition. If you only want to observe an input text change, use the TextField overload with
       * the [String] parameter instead.
       *
       * @param value the input [TextFieldValue] to be shown in the text field
       * @param onValueChange the callback that is triggered when the input service updates values in
       *   [TextFieldValue]. An updated [TextFieldValue] comes as a parameter of the callback
       * @param modifier the [Modifier] to be applied to this text field
       * @param enabled controls the enabled state of this text field. When `false`, this component will
       *   not respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param readOnly controls the editable state of the text field. When `true`, the text field cannot
       *   be modified. However, a user can focus it and copy text from it. Read-only text fields are
       *   usually used to display pre-filled forms that a user cannot edit.
       * @param textStyle the style to be applied to the input text. Defaults to [LocalTextStyle].
       * @param label the optional label to be displayed with this text field. The default text style uses
       *   [Typography.bodySmall] when minimized and [Typography.bodyLarge] when expanded.
       * @param placeholder the optional placeholder to be displayed when the text field is in focus and
       *   the input text is empty. The default text style for internal [Text] is [Typography.bodyLarge]
       * @param leadingIcon the optional leading icon to be displayed at the beginning of the text field
       *   container
       * @param trailingIcon the optional trailing icon to be displayed at the end of the text field
       *   container
       * @param prefix the optional prefix to be displayed before the input text in the text field
       * @param suffix the optional suffix to be displayed after the input text in the text field
  - id: live-androidx-material3-material3-material3-textfield-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 491
    endLine: 516
    sha256: 6c3ae0ffd3b38e5f7c39c20f06589034d0dd4ddaa1c04e8160242e7f58379820
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param supportingText the optional supporting text to be displayed below the text field
       * @param isError indicates if the text field's current value is in error state. If set to true, the
       *   label, bottom indicator and trailing icon by default will be displayed in error color
       * @param visualTransformation transforms the visual representation of the input [value]. For
       *   example, you can use
       *   [PasswordVisualTransformation][androidx.compose.ui.text.input.PasswordVisualTransformation] to
       *   create a password text field. By default, no visual transformation is applied.
       * @param keyboardOptions software keyboard options that contains configuration such as
       *   [KeyboardType] and [ImeAction].
       * @param keyboardActions when the input service emits an IME action, the corresponding callback is
       *   called. Note that this IME action may be different from what you specified in
       *   [KeyboardOptions.imeAction].
       * @param singleLine when `true`, this text field becomes a single horizontally scrolling text field
       *   instead of wrapping onto multiple lines. The keyboard will be informed to not show the return
       *   key as the [ImeAction]. Note that [maxLines] parameter will be ignored as the maxLines
       *   attribute will be automatically set to 1.
       * @param maxLines the maximum height in terms of maximum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
       * @param minLines the minimum height in terms of minimum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this text field. You can use this to change the text field's
       *   appearance or preview the text field in different states. Note that if `null` is provided,
       *   interactions will still happen internally.
       * @param shape defines the shape of this text field's container
       * @param colors [TextFieldColors] that will be used to resolve the colors used for this text field
  - id: live-androidx-material3-material3-material3-textfield-lines-517-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 517
    endLine: 551
    sha256: bf76cbf9b1a51570e9f0b47d90d2bf7d4b744d65395df3230a45a40a2347c21f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   in different states. See [TextFieldDefaults.colors].
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
      @OptIn(ExperimentalMaterial3Api::class)
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
          prefix: @Composable (() -> Unit)? = null,
          suffix: @Composable (() -> Unit)? = null,
          supportingText: @Composable (() -> Unit)? = null,
          isError: Boolean = false,
          visualTransformation: VisualTransformation = VisualTransformation.None,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          keyboardActions: KeyboardActions = KeyboardActions.Default,
  - id: live-androidx-material3-material3-material3-textfield-lines-552-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 552
    endLine: 586
    sha256: 4ed5c587a963e05448804c6dd8f120821f51e1d9d83f47153a4a5fcb5a9e16f8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          singleLine: Boolean = false,
          maxLines: Int = if (singleLine) 1 else Int.MAX_VALUE,
          minLines: Int = 1,
          interactionSource: MutableInteractionSource? = null,
          shape: Shape = TextFieldDefaults.shape,
          colors: TextFieldColors = TextFieldDefaults.colors(),
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          // If color is not provided via the text style, use content color as a default
          val textColor =
              textStyle.color.takeOrElse {
                  val focused = interactionSource.collectIsFocusedAsState().value
                  colors.textColor(enabled, isError, focused)
              }
          val mergedTextStyle = textStyle.merge(TextStyle(color = textColor))

          CompositionLocalProvider(LocalTextSelectionColors provides colors.textSelectionColors) {
              BasicTextField(
                  value = value,
                  modifier =
                      modifier
                          .defaultErrorSemantics(isError, getString(Strings.DefaultErrorMessage))
                          .defaultMinSize(
                              minWidth = TextFieldDefaults.MinWidth,
                              minHeight = TextFieldDefaults.MinHeight,
                          ),
                  onValueChange = onValueChange,
                  enabled = enabled,
                  readOnly = readOnly,
                  textStyle = mergedTextStyle,
                  cursorBrush = SolidColor(colors.cursorColor(isError)),
                  visualTransformation = visualTransformation,
                  keyboardOptions = keyboardOptions,
                  keyboardActions = keyboardActions,
  - id: live-androidx-material3-material3-material3-textfield-lines-587-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 587
    endLine: 621
    sha256: c1821608dcb055d7e088d2da748845d658ec2690b7b2747cca5802463a877a6f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  interactionSource = interactionSource,
                  singleLine = singleLine,
                  maxLines = maxLines,
                  minLines = minLines,
                  decorationBox =
                      @Composable { innerTextField ->
                          // places leading icon, text field with label and placeholder, trailing icon
                          TextFieldDefaults.DecorationBox(
                              value = value.text,
                              visualTransformation = visualTransformation,
                              innerTextField = innerTextField,
                              placeholder = placeholder,
                              label = label,
                              leadingIcon = leadingIcon,
                              trailingIcon = trailingIcon,
                              prefix = prefix,
                              suffix = suffix,
                              supportingText = supportingText,
                              shape = shape,
                              singleLine = singleLine,
                              enabled = enabled,
                              isError = isError,
                              interactionSource = interactionSource,
                              colors = colors,
                          )
                      },
              )
          }
      }

      internal data class IndicatorLineElement(
          val enabled: Boolean,
          val isError: Boolean,
          val interactionSource: InteractionSource,
          val colors: TextFieldColors?,
  - id: live-androidx-material3-material3-material3-textfield-lines-622-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 622
    endLine: 656
    sha256: 4f3643f8242b750287b4be8143d83d5470ed2dbe31048d9c1d4551c364d8fee5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val textFieldShape: Shape?,
          val focusedIndicatorLineThickness: Dp,
          val unfocusedIndicatorLineThickness: Dp,
      ) : ModifierNodeElement<IndicatorLineNode>() {
          override fun create() = IndicatorLineNode(this)

          override fun update(node: IndicatorLineNode) = node.update(this)

          override fun InspectorInfo.inspectableProperties() {
              name = "indicatorLine"
              properties["enabled"] = enabled
              properties["isError"] = isError
              properties["interactionSource"] = interactionSource
              properties["colors"] = colors
              properties["textFieldShape"] = textFieldShape
              properties["focusedIndicatorLineThickness"] = focusedIndicatorLineThickness
              properties["unfocusedIndicatorLineThickness"] = unfocusedIndicatorLineThickness
          }
      }

      @OptIn(ExperimentalMaterial3ExpressiveApi::class)
      internal class IndicatorLineNode(initialParams: IndicatorLineElement) :
          DelegatingNode(), CompositionLocalConsumerModifierNode {
          private var params = initialParams

          private val colors: TextFieldColors
              get() =
                  params.colors
                      ?: currentValueOf(LocalMaterialTheme)
                          .colorScheme
                          .defaultTextFieldColors(currentValueOf(LocalTextSelectionColors))

          private val shape: Shape
              get() =
                  params.textFieldShape
  - id: live-androidx-material3-material3-material3-textfield-lines-657-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 657
    endLine: 691
    sha256: 58b9daa83c54b4033f43c1cf48f19599e91a9f8ff71056b5f02b194a80b921ff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      ?: currentValueOf(LocalMaterialTheme)
                          .shapes
                          .fromToken(FilledTextFieldTokens.ContainerShape)

          private val transition = NodeTransition(this)
          private val indicatorColor =
              transition.animateColor({ indicatorSpec(motionScheme.fastEffectsSpec()) }) {
                  colors.indicatorColor(params.enabled, params.isError, interactions.isFocused)
              }
          private val indicatorWidth =
              transition.animateDp({ indicatorSpec(motionScheme.fastSpatialSpec()) }) {
                  if (interactions.isFocused && params.enabled) params.focusedIndicatorLineThickness
                  else params.unfocusedIndicatorLineThickness
              }

          private val interactions =
              object : InteractionTracker(this@IndicatorLineNode, InteractionTracker.Focus) {
                  override fun onChanged() = invalidateIndicator()
              }

          private val motionScheme
              get() = currentValueOf(LocalMaterialTheme).motionScheme

          // The indicator doesn't animate while the text field is disabled.
          private fun <T> indicatorSpec(spec: AnimationSpec<T>): AnimationSpec<T> =
              if (params.enabled) spec else snap()

          fun update(params: IndicatorLineElement) {
              // The draw cache doesn't observe the shape.
              if (params.textFieldShape != this.params.textFieldShape) {
                  drawWithCacheModifierNode.invalidateDrawCache()
              }
              this.params = params
              // Last, since a new source resets the focus state, which updates the indicator.
              interactions.track(params.interactionSource)
  - id: live-androidx-material3-material3-material3-textfield-lines-692-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 692
    endLine: 726
    sha256: 7279b376335749057e37280e9d661d1d47f68baea0e4087d3a1ab337b2072d35
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              invalidateIndicator()
          }

          override val shouldAutoInvalidate: Boolean
              get() = false

          override fun onAttach() {
              interactions.track(params.interactionSource)
          }

          override fun onDetach() {
              transition.reset()
          }

          private fun invalidateIndicator() {
              if (transition.update()) drawWithCacheModifierNode.invalidateDrawCache()
          }

          private val drawWithCacheModifierNode =
              delegate(
                  CacheDrawModifierNode {
                      val strokeWidth = indicatorWidth.value.toPx()
                      val textFieldShapePath =
                          Path().apply {
                              addOutline(
                                  this@IndicatorLineNode.shape.createOutline(
                                      size,
                                      layoutDirection,
                                      density = this@CacheDrawModifierNode,
                                  )
                              )
                          }
                      val linePath =
                          Path().apply {
                              addRect(
  - id: live-androidx-material3-material3-material3-textfield-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 71
    endLine: 105
    sha256: 21ccbeffd94764d48979655ae2cd32d9e1049009eb1c25f1b7ada6274f90a5a6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.text.input.KeyboardType
      import androidx.compose.ui.text.input.TextFieldValue
      import androidx.compose.ui.text.input.VisualTransformation
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.dp

      /**
       * [Material Design filled text field](https://m3.material.io/components/text-fields/overview)
       *
       * Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
       * Filled text fields have more visual emphasis than outlined text fields, making them stand out
       * when surrounded by other content and components.
       *
       * ![Filled text field
       * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-text-field.png)
       *
       * If you are looking for an outlined version, see [OutlinedTextField]. For a text field
       * specifically designed for passwords or other secure content, see [SecureTextField].
       *
       * This overload of [TextField] uses [TextFieldState] to keep track of its text content and position
       * of the cursor or selection.
       *
       * A simple single line text field looks like:
       *
       * @sample androidx.compose.material3.samples.SimpleTextFieldSample
       *
       * You can control the initial text input and selection:
       *
       * @sample androidx.compose.material3.samples.TextFieldWithInitialValueAndSelection
       *
       * Use input and output transformations to control user input and the displayed text:
       *
       * @sample androidx.compose.material3.samples.TextFieldWithTransformations
       *
  - id: live-androidx-material3-material3-material3-textfield-lines-727-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt
    startLine: 727
    endLine: 749
    sha256: 60f8adf5cacf340016e5c889c1807c1c43faadf6fcc7b31a0129bf3b9b32d5ff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                                  Rect(
                                      left = 0f,
                                      top = size.height - strokeWidth,
                                      right = size.width,
                                      bottom = size.height,
                                  )
                              )
                          }
                      val clippedLine = linePath and textFieldShapePath

                      onDrawWithContent {
                          drawContent()
                          drawPath(path = clippedLine, brush = SolidColor(indicatorColor.value))
                      }
                  }
              )
      }

      /** Padding from text field top to label top, and from input field bottom to text field bottom */
      /*@VisibleForTesting*/
      internal val TextFieldWithLabelVerticalPadding
          get() = 8.dp
compose:
  id: live-androidx-material3-material3-material3-textfield
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-textfield-lines-1
      title: androidx.compose.material3 TextField.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-106
      title: androidx.compose.material3 TextField.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-141
      title: androidx.compose.material3 TextField.kt source (lines 141–167)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-168
      title: androidx.compose.material3 TextField.kt source (lines 168–191)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-168-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-192
      title: androidx.compose.material3 TextField.kt source (lines 192–226)
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-192-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-227
      title: androidx.compose.material3 TextField.kt source (lines 227–261)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-227-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-262
      title: androidx.compose.material3 TextField.kt source (lines 262–296)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-262-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-297
      title: androidx.compose.material3 TextField.kt source (lines 297–327)
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-297-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-328
      title: androidx.compose.material3 TextField.kt source (lines 328–353)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-328-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-354
      title: androidx.compose.material3 TextField.kt source (lines 354–388)
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-354-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-36
      title: androidx.compose.material3 TextField.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-389
      title: androidx.compose.material3 TextField.kt source (lines 389–423)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-389-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-424
      title: androidx.compose.material3 TextField.kt source (lines 424–458)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-424-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-459
      title: androidx.compose.material3 TextField.kt source (lines 459–490)
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-459-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-491
      title: androidx.compose.material3 TextField.kt source (lines 491–516)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-491-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-517
      title: androidx.compose.material3 TextField.kt source (lines 517–551)
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-517-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-552
      title: androidx.compose.material3 TextField.kt source (lines 552–586)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-552-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-587
      title: androidx.compose.material3 TextField.kt source (lines 587–621)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-587-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-622
      title: androidx.compose.material3 TextField.kt source (lines 622–656)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-622-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-657
      title: androidx.compose.material3 TextField.kt source (lines 657–691)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-657-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-692
      title: androidx.compose.material3 TextField.kt source (lines 692–726)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-692-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-71
      title: androidx.compose.material3 TextField.kt source (lines 71–105)
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-71-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-textfield-lines-727
      title: androidx.compose.material3 TextField.kt source (lines 727–749)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-textfield-lines-727-source
      relatedIds: []
---

# androidx.compose.material3 TextField.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt

## androidx.compose.material3 TextField.kt source (lines 1–35)

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

@file:Suppress("DEPRECATION") // b/552879150

package androidx.compose.material3

import androidx.compose.animation.core.AnimationSpec
import androidx.compose.animation.core.snap
import androidx.compose.foundation.ScrollState
import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.InteractionSource
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsFocusedAsState
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.text.input.InputTransformation
import androidx.compose.foundation.text.input.KeyboardActionHandler

Sources: [live-androidx-material3-material3-material3-textfield-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 106–140)

 * You may provide a placeholder:
 *
 * @sample androidx.compose.material3.samples.TextFieldWithPlaceholder
 *
 * You can also provide leading and trailing icons:
 *
 * @sample androidx.compose.material3.samples.TextFieldWithIcons
 *
 * You can also provide a prefix or suffix to the text:
 *
 * @sample androidx.compose.material3.samples.TextFieldWithPrefixAndSuffix
 *
 * To handle the error input state, use [isError] parameter:
 *
 * @sample androidx.compose.material3.samples.TextFieldWithErrorState
 *
 * Additionally, you may provide additional message at the bottom:
 *
 * @sample androidx.compose.material3.samples.TextFieldWithSupportingText
 *
 * You can change the content padding to create a dense text field:
 *
 * @sample androidx.compose.material3.samples.DenseTextFieldContentPadding
 *
 * Hiding a software keyboard on IME action performed:
 *
 * @sample androidx.compose.material3.samples.TextFieldWithHideKeyboardOnImeAction
 * @param state [TextFieldState] object that holds the internal editing state of the text field.
 * @param modifier the [Modifier] to be applied to this text field.
 * @param enabled controls the enabled state of this text field. When `false`, this component will
 *   not respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param readOnly controls the editable state of the text field. When `true`, the text field cannot
 *   be modified. However, a user can focus it and copy text from it. Read-only text fields are
 *   usually used to display pre-filled forms that a user cannot edit.

Sources: [live-androidx-material3-material3-material3-textfield-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 141–167)

 * @param textStyle the style to be applied to the input text. Defaults to [LocalTextStyle].
 * @param labelPosition the position of the label. See [TextFieldLabelPosition].
 * @param label the optional label to be displayed with this text field. The default text style uses
 *   [Typography.bodySmall] when minimized and [Typography.bodyLarge] when expanded.
 * @param placeholder the optional placeholder to be displayed when the input text is empty. The
 *   default text style uses [Typography.bodyLarge].
 * @param leadingIcon the optional leading icon to be displayed at the beginning of the text field
 *   container.
 * @param trailingIcon the optional trailing icon to be displayed at the end of the text field
 *   container.
 * @param prefix the optional prefix to be displayed before the input text in the text field.
 * @param suffix the optional suffix to be displayed after the input text in the text field.
 * @param supportingText the optional supporting text to be displayed below the text field.
 * @param isError indicates if the text field's current value is in error. When `true`, the
 *   components of the text field will be displayed in an error color, and an error will be
 *   announced to accessibility services.
 * @param inputTransformation optional [InputTransformation] that will be used to transform changes
 *   to the [TextFieldState] made by the user. The transformation will be applied to changes made by
 *   hardware and software keyboard events, pasting or dropping text, accessibility services, and
 *   tests. The transformation will _not_ be applied when changing the [state] programmatically, or
 *   when the transformation is changed. If the transformation is changed on an existing text field,
 *   it will be applied to the next user edit. The transformation will not immediately affect the
 *   current [state].
 * @param outputTransformation optional [OutputTransformation] that transforms how the contents of
 *   the text field are presented.
 * @param keyboardOptions software keyboard options that contains configuration such as
 *   [KeyboardType] and [ImeAction].

Sources: [live-androidx-material3-material3-material3-textfield-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 168–191)

 * @param onKeyboardAction called when the user presses the action button in the input method editor
 *   (IME), or by pressing the enter key on a hardware keyboard. By default this parameter is null,
 *   and would execute the default behavior for a received IME Action e.g., [ImeAction.Done] would
 *   close the keyboard, [ImeAction.Next] would switch the focus to the next focusable item on the
 *   screen.
 * @param lineLimits whether the text field should be [SingleLine], scroll horizontally, and ignore
 *   newlines; or [MultiLine] and grow and scroll vertically. If [SingleLine] is passed, all newline
 *   characters ('\n') within the text will be replaced with regular whitespace (' ').
 * @param onTextLayout Callback that is executed when the text layout becomes queryable. The
 *   callback receives a function that returns a [TextLayoutResult] if the layout can be calculated,
 *   or null if it cannot. The function reads the layout result from a snapshot state object, and
 *   will invalidate its caller when the layout result changes. A [TextLayoutResult] object contains
 *   paragraph information, size of the text, baselines and other details. [Density] scope is the
 *   one that was used while creating the given text layout.
 * @param scrollState scroll state that manages either horizontal or vertical scroll of the text
 *   field. If [lineLimits] is [SingleLine], this text field is treated as single line with
 *   horizontal scroll behavior. Otherwise, the text field becomes vertically scrollable.
 * @param shape defines the shape of this text field's container.
 * @param colors [TextFieldColors] that will be used to resolve the colors used for this text field
 *   in different states. See [TextFieldDefaults.colors].
 * @param contentPadding the padding applied to the inner text field that separates it from the
 *   surrounding elements of the text field. Note that the padding values may not be respected if
 *   they are incompatible with the text field's size constraints or layout. See
 *   [TextFieldDefaults.contentPaddingWithLabel] and [TextFieldDefaults.contentPaddingWithoutLabel].

Sources: [live-androidx-material3-material3-material3-textfield-lines-168-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 192–226)

 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this text field. You can use this to change the text field's
 *   appearance or preview the text field in different states. Note that if `null` is provided,
 *   interactions will still happen internally.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
public fun TextField(
    state: TextFieldState,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    textStyle: TextStyle = LocalTextStyle.current,
    labelPosition: TextFieldLabelPosition = TextFieldLabelPosition.Inside(),
    label: @Composable (TextFieldLabelScope.() -> Unit)? = null,
    placeholder: @Composable (() -> Unit)? = null,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
    prefix: @Composable (() -> Unit)? = null,
    suffix: @Composable (() -> Unit)? = null,
    supportingText: @Composable (() -> Unit)? = null,
    isError: Boolean = false,
    inputTransformation: InputTransformation? = null,
    outputTransformation: OutputTransformation? = null,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    onKeyboardAction: KeyboardActionHandler? = null,
    lineLimits: TextFieldLineLimits = TextFieldLineLimits.Default,
    onTextLayout: (Density.(getResult: () -> TextLayoutResult?) -> Unit)? = null,
    scrollState: ScrollState = rememberScrollState(),
    shape: Shape = TextFieldDefaults.shape,
    colors: TextFieldColors = TextFieldDefaults.colors(),
    contentPadding: PaddingValues = TextFieldDefaults.defaultContentPadding(label, labelPosition),
    interactionSource: MutableInteractionSource? = null,
) {
    @Suppress("NAME_SHADOWING")

Sources: [live-androidx-material3-material3-material3-textfield-lines-192-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 227–261)

    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    // If color is not provided via the text style, use content color as a default
    val textColor =
        textStyle.color.takeOrElse {
            val focused = interactionSource.collectIsFocusedAsState().value
            colors.textColor(enabled, isError, focused)
        }
    val mergedTextStyle = textStyle.merge(TextStyle(color = textColor))
    // Normalize labelPosition before passing down
    val labelPosition = labelPosition.normalize()

    CompositionLocalProvider(LocalTextSelectionColors provides colors.textSelectionColors) {
        BasicTextField(
            state = state,
            modifier =
                modifier
                    .topPaddingForLabelCutout(label, labelPosition)
                    .defaultErrorSemantics(isError, getString(Strings.DefaultErrorMessage))
                    .defaultMinSize(
                        minWidth = TextFieldDefaults.MinWidth,
                        minHeight = TextFieldDefaults.MinHeight,
                    ),
            enabled = enabled,
            readOnly = readOnly,
            textStyle = mergedTextStyle,
            cursorBrush = SolidColor(colors.cursorColor(isError)),
            keyboardOptions = keyboardOptions,
            onKeyboardAction = onKeyboardAction,
            lineLimits = lineLimits,
            onTextLayout = onTextLayout,
            interactionSource = interactionSource,
            inputTransformation = inputTransformation,
            outputTransformation = outputTransformation,
            scrollState = scrollState,
            decorator =

Sources: [live-androidx-material3-material3-material3-textfield-lines-227-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 262–296)

                TextFieldDefaults.decorator(
                    state = state,
                    enabled = enabled,
                    lineLimits = lineLimits,
                    outputTransformation = outputTransformation,
                    interactionSource = interactionSource,
                    labelPosition = labelPosition,
                    label = label,
                    placeholder = placeholder,
                    leadingIcon = leadingIcon,
                    trailingIcon = trailingIcon,
                    prefix = prefix,
                    suffix = suffix,
                    supportingText = supportingText,
                    isError = isError,
                    colors = colors,
                    contentPadding = contentPadding,
                    container = {
                        TextFieldDefaults.Container(
                            enabled = enabled,
                            isError = isError,
                            interactionSource = interactionSource,
                            colors = colors,
                            shape = shape,
                        )
                    },
                ),
        )
    }
}

/**
 * [Material Design filled text field](https://m3.material.io/components/text-fields/overview)
 *
 * Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.

Sources: [live-androidx-material3-material3-material3-textfield-lines-262-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 297–327)

 * Filled text fields have more visual emphasis than outlined text fields, making them stand out
 * when surrounded by other content and components.
 *
 * ![Filled text field
 * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-text-field.png)
 *
 * If you are looking for an outlined version, see [OutlinedTextField].
 *
 * If apart from input text change you also want to observe the cursor location, selection range, or
 * IME composition use the TextField overload with the [TextFieldValue] parameter instead.
 *
 * @param value the input text to be shown in the text field
 * @param onValueChange the callback that is triggered when the input service updates the text. An
 *   updated text comes as a parameter of the callback
 * @param modifier the [Modifier] to be applied to this text field
 * @param enabled controls the enabled state of this text field. When `false`, this component will
 *   not respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param readOnly controls the editable state of the text field. When `true`, the text field cannot
 *   be modified. However, a user can focus it and copy text from it. Read-only text fields are
 *   usually used to display pre-filled forms that a user cannot edit.
 * @param textStyle the style to be applied to the input text. Defaults to [LocalTextStyle].
 * @param label the optional label to be displayed with this text field. The default text style uses
 *   [Typography.bodySmall] when minimized and [Typography.bodyLarge] when expanded.
 * @param placeholder the optional placeholder to be displayed when the text field is in focus and
 *   the input text is empty. The default text style for internal [Text] is [Typography.bodyLarge]
 * @param leadingIcon the optional leading icon to be displayed at the beginning of the text field
 *   container
 * @param trailingIcon the optional trailing icon to be displayed at the end of the text field
 *   container
 * @param prefix the optional prefix to be displayed before the input text in the text field

Sources: [live-androidx-material3-material3-material3-textfield-lines-297-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 328–353)

 * @param suffix the optional suffix to be displayed after the input text in the text field
 * @param supportingText the optional supporting text to be displayed below the text field
 * @param isError indicates if the text field's current value is in error. If set to true, the
 *   label, bottom indicator and trailing icon by default will be displayed in error color
 * @param visualTransformation transforms the visual representation of the input [value] For
 *   example, you can use
 *   [PasswordVisualTransformation][androidx.compose.ui.text.input.PasswordVisualTransformation] to
 *   create a password text field. By default, no visual transformation is applied.
 * @param keyboardOptions software keyboard options that contains configuration such as
 *   [KeyboardType] and [ImeAction].
 * @param keyboardActions when the input service emits an IME action, the corresponding callback is
 *   called. Note that this IME action may be different from what you specified in
 *   [KeyboardOptions.imeAction].
 * @param singleLine when `true`, this text field becomes a single horizontally scrolling text field
 *   instead of wrapping onto multiple lines. The keyboard will be informed to not show the return
 *   key as the [ImeAction]. Note that [maxLines] parameter will be ignored as the maxLines
 *   attribute will be automatically set to 1.
 * @param maxLines the maximum height in terms of maximum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
 * @param minLines the minimum height in terms of minimum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this text field. You can use this to change the text field's
 *   appearance or preview the text field in different states. Note that if `null` is provided,
 *   interactions will still happen internally.
 * @param shape defines the shape of this text field's container

Sources: [live-androidx-material3-material3-material3-textfield-lines-328-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 354–388)

 * @param colors [TextFieldColors] that will be used to resolve the colors used for this text field
 *   in different states. See [TextFieldDefaults.colors].
 */
@Deprecated(
    "Use the TextField(state: TextFieldState, ...) overload instead. To migrate: " +
        "create a TextFieldState via rememberTextFieldState(initialText) in composition or " +
        "TextFieldState(initialText) in a state holder; read text from state.text and update " +
        "it programmatically via state.edit { ... } or state.setTextAndPlaceCursorAtEnd(text); " +
        "observe text changes for side effects via snapshotFlow { state.text }.collect { ... }; " +
        "and replace onValueChange input filtering with InputTransformation, visualTransformation " +
        "with OutputTransformation (or SecureTextField for passwords), singleLine/maxLines/" +
        "minLines with TextFieldLineLimits, and keyboardActions with KeyboardActionHandler. See " +
        "https://developer.android.com/develop/ui/compose/text/migrate-state-based for full " +
        "migration guidance."
)
@OptIn(ExperimentalMaterial3Api::class)
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
    prefix: @Composable (() -> Unit)? = null,
    suffix: @Composable (() -> Unit)? = null,
    supportingText: @Composable (() -> Unit)? = null,
    isError: Boolean = false,
    visualTransformation: VisualTransformation = VisualTransformation.None,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    keyboardActions: KeyboardActions = KeyboardActions.Default,

Sources: [live-androidx-material3-material3-material3-textfield-lines-354-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 36–70)

import androidx.compose.foundation.text.input.OutputTransformation
import androidx.compose.foundation.text.input.TextFieldLineLimits
import androidx.compose.foundation.text.input.TextFieldLineLimits.MultiLine
import androidx.compose.foundation.text.input.TextFieldLineLimits.SingleLine
import androidx.compose.foundation.text.input.TextFieldState
import androidx.compose.foundation.text.selection.LocalTextSelectionColors
import androidx.compose.material3.MaterialTheme.LocalMaterialTheme
import androidx.compose.material3.TextFieldDefaults.defaultTextFieldColors
import androidx.compose.material3.TextFieldDefaults.normalize
import androidx.compose.material3.internal.InteractionTracker
import androidx.compose.material3.internal.NodeTransition
import androidx.compose.material3.internal.Strings
import androidx.compose.material3.internal.defaultErrorSemantics
import androidx.compose.material3.internal.getString
import androidx.compose.material3.internal.topPaddingForLabelCutout
import androidx.compose.material3.tokens.FilledTextFieldTokens
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.CacheDrawModifierNode
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.addOutline
import androidx.compose.ui.graphics.takeOrElse
import androidx.compose.ui.node.CompositionLocalConsumerModifierNode
import androidx.compose.ui.node.DelegatingNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.currentValueOf
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.text.TextLayoutResult
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.ImeAction

Sources: [live-androidx-material3-material3-material3-textfield-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 389–423)

    singleLine: Boolean = false,
    maxLines: Int = if (singleLine) 1 else Int.MAX_VALUE,
    minLines: Int = 1,
    interactionSource: MutableInteractionSource? = null,
    shape: Shape = TextFieldDefaults.shape,
    colors: TextFieldColors = TextFieldDefaults.colors(),
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    // If color is not provided via the text style, use content color as a default
    val textColor =
        textStyle.color.takeOrElse {
            val focused = interactionSource.collectIsFocusedAsState().value
            colors.textColor(enabled, isError, focused)
        }
    val mergedTextStyle = textStyle.merge(TextStyle(color = textColor))

    CompositionLocalProvider(LocalTextSelectionColors provides colors.textSelectionColors) {
        BasicTextField(
            value = value,
            modifier =
                modifier
                    .defaultErrorSemantics(isError, getString(Strings.DefaultErrorMessage))
                    .defaultMinSize(
                        minWidth = TextFieldDefaults.MinWidth,
                        minHeight = TextFieldDefaults.MinHeight,
                    ),
            onValueChange = onValueChange,
            enabled = enabled,
            readOnly = readOnly,
            textStyle = mergedTextStyle,
            cursorBrush = SolidColor(colors.cursorColor(isError)),
            visualTransformation = visualTransformation,
            keyboardOptions = keyboardOptions,
            keyboardActions = keyboardActions,

Sources: [live-androidx-material3-material3-material3-textfield-lines-389-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 424–458)

            interactionSource = interactionSource,
            singleLine = singleLine,
            maxLines = maxLines,
            minLines = minLines,
            decorationBox =
                @Composable { innerTextField ->
                    // places leading icon, text field with label and placeholder, trailing icon
                    TextFieldDefaults.DecorationBox(
                        value = value,
                        visualTransformation = visualTransformation,
                        innerTextField = innerTextField,
                        placeholder = placeholder,
                        label = label,
                        leadingIcon = leadingIcon,
                        trailingIcon = trailingIcon,
                        prefix = prefix,
                        suffix = suffix,
                        supportingText = supportingText,
                        shape = shape,
                        singleLine = singleLine,
                        enabled = enabled,
                        isError = isError,
                        interactionSource = interactionSource,
                        colors = colors,
                    )
                },
        )
    }
}

/**
 * [Material Design filled text field](https://m3.material.io/components/text-fields/overview)
 *
 * Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
 * Filled text fields have more visual emphasis than outlined text fields, making them stand out

Sources: [live-androidx-material3-material3-material3-textfield-lines-424-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 459–490)

 * when surrounded by other content and components.
 *
 * ![Filled text field
 * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-text-field.png)
 *
 * If you are looking for an outlined version, see [OutlinedTextField].
 *
 * This overload provides access to the input text, cursor position, selection range and IME
 * composition. If you only want to observe an input text change, use the TextField overload with
 * the [String] parameter instead.
 *
 * @param value the input [TextFieldValue] to be shown in the text field
 * @param onValueChange the callback that is triggered when the input service updates values in
 *   [TextFieldValue]. An updated [TextFieldValue] comes as a parameter of the callback
 * @param modifier the [Modifier] to be applied to this text field
 * @param enabled controls the enabled state of this text field. When `false`, this component will
 *   not respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param readOnly controls the editable state of the text field. When `true`, the text field cannot
 *   be modified. However, a user can focus it and copy text from it. Read-only text fields are
 *   usually used to display pre-filled forms that a user cannot edit.
 * @param textStyle the style to be applied to the input text. Defaults to [LocalTextStyle].
 * @param label the optional label to be displayed with this text field. The default text style uses
 *   [Typography.bodySmall] when minimized and [Typography.bodyLarge] when expanded.
 * @param placeholder the optional placeholder to be displayed when the text field is in focus and
 *   the input text is empty. The default text style for internal [Text] is [Typography.bodyLarge]
 * @param leadingIcon the optional leading icon to be displayed at the beginning of the text field
 *   container
 * @param trailingIcon the optional trailing icon to be displayed at the end of the text field
 *   container
 * @param prefix the optional prefix to be displayed before the input text in the text field
 * @param suffix the optional suffix to be displayed after the input text in the text field

Sources: [live-androidx-material3-material3-material3-textfield-lines-459-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 491–516)

 * @param supportingText the optional supporting text to be displayed below the text field
 * @param isError indicates if the text field's current value is in error state. If set to true, the
 *   label, bottom indicator and trailing icon by default will be displayed in error color
 * @param visualTransformation transforms the visual representation of the input [value]. For
 *   example, you can use
 *   [PasswordVisualTransformation][androidx.compose.ui.text.input.PasswordVisualTransformation] to
 *   create a password text field. By default, no visual transformation is applied.
 * @param keyboardOptions software keyboard options that contains configuration such as
 *   [KeyboardType] and [ImeAction].
 * @param keyboardActions when the input service emits an IME action, the corresponding callback is
 *   called. Note that this IME action may be different from what you specified in
 *   [KeyboardOptions.imeAction].
 * @param singleLine when `true`, this text field becomes a single horizontally scrolling text field
 *   instead of wrapping onto multiple lines. The keyboard will be informed to not show the return
 *   key as the [ImeAction]. Note that [maxLines] parameter will be ignored as the maxLines
 *   attribute will be automatically set to 1.
 * @param maxLines the maximum height in terms of maximum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
 * @param minLines the minimum height in terms of minimum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this text field. You can use this to change the text field's
 *   appearance or preview the text field in different states. Note that if `null` is provided,
 *   interactions will still happen internally.
 * @param shape defines the shape of this text field's container
 * @param colors [TextFieldColors] that will be used to resolve the colors used for this text field

Sources: [live-androidx-material3-material3-material3-textfield-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 517–551)

 *   in different states. See [TextFieldDefaults.colors].
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
@OptIn(ExperimentalMaterial3Api::class)
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
    prefix: @Composable (() -> Unit)? = null,
    suffix: @Composable (() -> Unit)? = null,
    supportingText: @Composable (() -> Unit)? = null,
    isError: Boolean = false,
    visualTransformation: VisualTransformation = VisualTransformation.None,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    keyboardActions: KeyboardActions = KeyboardActions.Default,

Sources: [live-androidx-material3-material3-material3-textfield-lines-517-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 552–586)

    singleLine: Boolean = false,
    maxLines: Int = if (singleLine) 1 else Int.MAX_VALUE,
    minLines: Int = 1,
    interactionSource: MutableInteractionSource? = null,
    shape: Shape = TextFieldDefaults.shape,
    colors: TextFieldColors = TextFieldDefaults.colors(),
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    // If color is not provided via the text style, use content color as a default
    val textColor =
        textStyle.color.takeOrElse {
            val focused = interactionSource.collectIsFocusedAsState().value
            colors.textColor(enabled, isError, focused)
        }
    val mergedTextStyle = textStyle.merge(TextStyle(color = textColor))

    CompositionLocalProvider(LocalTextSelectionColors provides colors.textSelectionColors) {
        BasicTextField(
            value = value,
            modifier =
                modifier
                    .defaultErrorSemantics(isError, getString(Strings.DefaultErrorMessage))
                    .defaultMinSize(
                        minWidth = TextFieldDefaults.MinWidth,
                        minHeight = TextFieldDefaults.MinHeight,
                    ),
            onValueChange = onValueChange,
            enabled = enabled,
            readOnly = readOnly,
            textStyle = mergedTextStyle,
            cursorBrush = SolidColor(colors.cursorColor(isError)),
            visualTransformation = visualTransformation,
            keyboardOptions = keyboardOptions,
            keyboardActions = keyboardActions,

Sources: [live-androidx-material3-material3-material3-textfield-lines-552-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 587–621)

            interactionSource = interactionSource,
            singleLine = singleLine,
            maxLines = maxLines,
            minLines = minLines,
            decorationBox =
                @Composable { innerTextField ->
                    // places leading icon, text field with label and placeholder, trailing icon
                    TextFieldDefaults.DecorationBox(
                        value = value.text,
                        visualTransformation = visualTransformation,
                        innerTextField = innerTextField,
                        placeholder = placeholder,
                        label = label,
                        leadingIcon = leadingIcon,
                        trailingIcon = trailingIcon,
                        prefix = prefix,
                        suffix = suffix,
                        supportingText = supportingText,
                        shape = shape,
                        singleLine = singleLine,
                        enabled = enabled,
                        isError = isError,
                        interactionSource = interactionSource,
                        colors = colors,
                    )
                },
        )
    }
}

internal data class IndicatorLineElement(
    val enabled: Boolean,
    val isError: Boolean,
    val interactionSource: InteractionSource,
    val colors: TextFieldColors?,

Sources: [live-androidx-material3-material3-material3-textfield-lines-587-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 622–656)

    val textFieldShape: Shape?,
    val focusedIndicatorLineThickness: Dp,
    val unfocusedIndicatorLineThickness: Dp,
) : ModifierNodeElement<IndicatorLineNode>() {
    override fun create() = IndicatorLineNode(this)

    override fun update(node: IndicatorLineNode) = node.update(this)

    override fun InspectorInfo.inspectableProperties() {
        name = "indicatorLine"
        properties["enabled"] = enabled
        properties["isError"] = isError
        properties["interactionSource"] = interactionSource
        properties["colors"] = colors
        properties["textFieldShape"] = textFieldShape
        properties["focusedIndicatorLineThickness"] = focusedIndicatorLineThickness
        properties["unfocusedIndicatorLineThickness"] = unfocusedIndicatorLineThickness
    }
}

@OptIn(ExperimentalMaterial3ExpressiveApi::class)
internal class IndicatorLineNode(initialParams: IndicatorLineElement) :
    DelegatingNode(), CompositionLocalConsumerModifierNode {
    private var params = initialParams

    private val colors: TextFieldColors
        get() =
            params.colors
                ?: currentValueOf(LocalMaterialTheme)
                    .colorScheme
                    .defaultTextFieldColors(currentValueOf(LocalTextSelectionColors))

    private val shape: Shape
        get() =
            params.textFieldShape

Sources: [live-androidx-material3-material3-material3-textfield-lines-622-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 657–691)

                ?: currentValueOf(LocalMaterialTheme)
                    .shapes
                    .fromToken(FilledTextFieldTokens.ContainerShape)

    private val transition = NodeTransition(this)
    private val indicatorColor =
        transition.animateColor({ indicatorSpec(motionScheme.fastEffectsSpec()) }) {
            colors.indicatorColor(params.enabled, params.isError, interactions.isFocused)
        }
    private val indicatorWidth =
        transition.animateDp({ indicatorSpec(motionScheme.fastSpatialSpec()) }) {
            if (interactions.isFocused && params.enabled) params.focusedIndicatorLineThickness
            else params.unfocusedIndicatorLineThickness
        }

    private val interactions =
        object : InteractionTracker(this@IndicatorLineNode, InteractionTracker.Focus) {
            override fun onChanged() = invalidateIndicator()
        }

    private val motionScheme
        get() = currentValueOf(LocalMaterialTheme).motionScheme

    // The indicator doesn't animate while the text field is disabled.
    private fun <T> indicatorSpec(spec: AnimationSpec<T>): AnimationSpec<T> =
        if (params.enabled) spec else snap()

    fun update(params: IndicatorLineElement) {
        // The draw cache doesn't observe the shape.
        if (params.textFieldShape != this.params.textFieldShape) {
            drawWithCacheModifierNode.invalidateDrawCache()
        }
        this.params = params
        // Last, since a new source resets the focus state, which updates the indicator.
        interactions.track(params.interactionSource)

Sources: [live-androidx-material3-material3-material3-textfield-lines-657-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 692–726)

        invalidateIndicator()
    }

    override val shouldAutoInvalidate: Boolean
        get() = false

    override fun onAttach() {
        interactions.track(params.interactionSource)
    }

    override fun onDetach() {
        transition.reset()
    }

    private fun invalidateIndicator() {
        if (transition.update()) drawWithCacheModifierNode.invalidateDrawCache()
    }

    private val drawWithCacheModifierNode =
        delegate(
            CacheDrawModifierNode {
                val strokeWidth = indicatorWidth.value.toPx()
                val textFieldShapePath =
                    Path().apply {
                        addOutline(
                            this@IndicatorLineNode.shape.createOutline(
                                size,
                                layoutDirection,
                                density = this@CacheDrawModifierNode,
                            )
                        )
                    }
                val linePath =
                    Path().apply {
                        addRect(

Sources: [live-androidx-material3-material3-material3-textfield-lines-692-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 71–105)

import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

/**
 * [Material Design filled text field](https://m3.material.io/components/text-fields/overview)
 *
 * Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
 * Filled text fields have more visual emphasis than outlined text fields, making them stand out
 * when surrounded by other content and components.
 *
 * ![Filled text field
 * image](https://developer.android.com/images/reference/androidx/compose/material3/filled-text-field.png)
 *
 * If you are looking for an outlined version, see [OutlinedTextField]. For a text field
 * specifically designed for passwords or other secure content, see [SecureTextField].
 *
 * This overload of [TextField] uses [TextFieldState] to keep track of its text content and position
 * of the cursor or selection.
 *
 * A simple single line text field looks like:
 *
 * @sample androidx.compose.material3.samples.SimpleTextFieldSample
 *
 * You can control the initial text input and selection:
 *
 * @sample androidx.compose.material3.samples.TextFieldWithInitialValueAndSelection
 *
 * Use input and output transformations to control user input and the displayed text:
 *
 * @sample androidx.compose.material3.samples.TextFieldWithTransformations
 *

Sources: [live-androidx-material3-material3-material3-textfield-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)

## androidx.compose.material3 TextField.kt source (lines 727–749)

                            Rect(
                                left = 0f,
                                top = size.height - strokeWidth,
                                right = size.width,
                                bottom = size.height,
                            )
                        )
                    }
                val clippedLine = linePath and textFieldShapePath

                onDrawWithContent {
                    drawContent()
                    drawPath(path = clippedLine, brush = SolidColor(indicatorColor.value))
                }
            }
        )
}

/** Padding from text field top to label top, and from input field bottom to text field bottom */
/*@VisibleForTesting*/
internal val TextFieldWithLabelVerticalPadding
    get() = 8.dp


Sources: [live-androidx-material3-material3-material3-textfield-lines-727-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt)
