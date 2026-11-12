---
type: reference
title: androidx.compose.foundation.text BasicTextField.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 1
    endLine: 35
    sha256: 9fa7d401158436223be0fd493da548d9ecdec50a9e61364daf88795a03ed156f
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

      @file:Suppress("DEPRECATION")

      package androidx.compose.foundation.text

      import androidx.compose.foundation.ComposeFoundationFlags
      import androidx.compose.foundation.ComposeFoundationFlags.isBasicTextFieldSizeOptimizationEnabled
      import androidx.compose.foundation.ExperimentalFoundationApi
      import androidx.compose.foundation.ScrollState
      import androidx.compose.foundation.gestures.Orientation
      import androidx.compose.foundation.gestures.ScrollableDefaults
      import androidx.compose.foundation.gestures.scrollable
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.InteractionSource
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.interaction.collectIsFocusedAsState
      import androidx.compose.foundation.layout.Box
      import androidx.compose.foundation.layout.heightIn
      import androidx.compose.foundation.rememberScrollState
      import androidx.compose.foundation.text.contextmenu.modifier.ToolbarRequesterImpl
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-100-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 100
    endLine: 134
    sha256: 70f77958e01cf8c2873673c9b1108dc47aa2d0fc816174bb311f03a328090cb0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.unit.DpSize
      import androidx.compose.ui.unit.constrain
      import androidx.compose.ui.unit.dp
      import kotlinx.coroutines.CoroutineScope
      import kotlinx.coroutines.CoroutineStart
      import kotlinx.coroutines.channels.BufferOverflow
      import kotlinx.coroutines.flow.MutableSharedFlow
      import kotlinx.coroutines.launch

      private object BasicTextFieldDefaults {
          val CursorBrush = SolidColor(Color.Black)
      }

      /**
       * Interactive text input field without decorations.
       *
       * Hoists editing state through [state].
       *
       * To add decorations (such as borders, placeholders, hints, prefixes, or suffixes) and increase the
       * hit target area, use [decorator].
       *
       * To filter or modify input (e.g., limit characters or restrict input patterns), use
       * [InputTransformation].
       *
       * To transform the visual output (e.g., apply password mask or format phone numbers), use
       * [OutputTransformation].
       *
       * To limit height, use [lineLimits].
       *
       * Hoists scroll state via [scrollState] to observe and manipulate scroll position, such as
       * scrolling a searched keyword into view without focusing.
       *
       * @param state holding the editing state
       * @param modifier for this layout
       * @param enabled controls enabled state. If false, field is not editable, focusable, or selectable
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1021-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 1021
    endLine: 1055
    sha256: 95b3fe79de995eb961ba35ce5d6d9c995a761e1d3d5318eedf1c60aaff8fbc02
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              decorationBox = decorationBox,
              enabled = enabled,
              readOnly = readOnly,
          )
      }

      @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun BasicTextField(
          value: String,
          onValueChange: (String) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          readOnly: Boolean = false,
          textStyle: TextStyle = TextStyle.Default,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          keyboardActions: KeyboardActions = KeyboardActions.Default,
          singleLine: Boolean = false,
          maxLines: Int = Int.MAX_VALUE,
          visualTransformation: VisualTransformation = VisualTransformation.None,
          onTextLayout: (TextLayoutResult) -> Unit = {},
          interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
          cursorBrush: Brush = SolidColor(Color.Black),
          decorationBox: @Composable (innerTextField: @Composable () -> Unit) -> Unit =
              @Composable { innerTextField -> innerTextField() },
      ) {
          BasicTextField(
              value = value,
              onValueChange = onValueChange,
              modifier = modifier,
              enabled = enabled,
              readOnly = readOnly,
              textStyle = textStyle,
              keyboardOptions = keyboardOptions,
              keyboardActions = keyboardActions,
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1056-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 1056
    endLine: 1090
    sha256: 6a3752e4a900b486fe76ea9d860d23b2d71a5fb45661d4746bb2b42cfb81fb5e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              singleLine = singleLine,
              minLines = 1,
              maxLines = maxLines,
              visualTransformation = visualTransformation,
              onTextLayout = onTextLayout,
              interactionSource = interactionSource,
              cursorBrush = cursorBrush,
              decorationBox = decorationBox,
          )
      }

      @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun BasicTextField(
          value: TextFieldValue,
          onValueChange: (TextFieldValue) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          readOnly: Boolean = false,
          textStyle: TextStyle = TextStyle.Default,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          keyboardActions: KeyboardActions = KeyboardActions.Default,
          singleLine: Boolean = false,
          maxLines: Int = Int.MAX_VALUE,
          visualTransformation: VisualTransformation = VisualTransformation.None,
          onTextLayout: (TextLayoutResult) -> Unit = {},
          interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
          cursorBrush: Brush = SolidColor(Color.Black),
          decorationBox: @Composable (innerTextField: @Composable () -> Unit) -> Unit =
              @Composable { innerTextField -> innerTextField() },
      ) {
          BasicTextField(
              value = value,
              onValueChange = onValueChange,
              modifier = modifier,
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1091-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 1091
    endLine: 1106
    sha256: 03070b9cd02204f3768459dff101d7dac02033cfaad26da6db780075103c6960
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              enabled = enabled,
              readOnly = readOnly,
              textStyle = textStyle,
              keyboardOptions = keyboardOptions,
              keyboardActions = keyboardActions,
              singleLine = singleLine,
              minLines = 1,
              maxLines = maxLines,
              visualTransformation = visualTransformation,
              onTextLayout = onTextLayout,
              interactionSource = interactionSource,
              cursorBrush = cursorBrush,
              decorationBox = decorationBox,
          )
      }
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-135-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 135
    endLine: 168
    sha256: 31f8fb834e83a3bfb22c8d3e08cd577ea87ed61448bc0474c415463057328d5f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param readOnly controls editable state. If true, field cannot be modified but can be focused and
       *   copied
       * @param inputTransformation to transform user changes. Only applies to user-initiated changes
       *   (e.g., keyboard input, paste, accessibility), not programmatic updates to [state]. Changing the
       *   transformation applies to the next user edit
       * @param textStyle configuration for text content
       * @param keyboardOptions software keyboard options
       * @param onKeyboardAction run when user triggers IME action
       * @param lineLimits limits for line count and scroll behavior. If set to [SingleLine], the text
       *   field scrolls horizontally and newlines ('\n') are replaced with spaces
       * @param onTextLayout callback run when a new text layout is calculated. The [TextLayoutResult]
       *   parameter contains paragraph information, size, baselines, and other details. Use this callback
       *   to add decoration or functionality, such as drawing selection
       * @param interactionSource to observe interactions
       * @param cursorBrush to paint the cursor
       * @param outputTransformation to transform output representation
       * @param decorator to add decorations (such as borders, placeholders, hints, or prefixes/suffixes)
       *   around the text field, and increase the hit target area. The decorator receives an
       *   `innerTextField` composable lambda representing the actual text input area, which must not be
       *   called more than once. Not calling it is supported, for example when the decorator draws the
       *   text itself
       * @param scrollState to manage scroll. If [lineLimits] is [SingleLine], the text field scrolls
       *   horizontally. Otherwise, it scrolls vertically
       * @sample androidx.compose.foundation.samples.BasicTextFieldDecoratorSample
       * @sample androidx.compose.foundation.samples.BasicTextFieldCustomInputTransformationSample
       * @sample androidx.compose.foundation.samples.BasicTextFieldWithValueOnValueChangeSample
       */
      // This takes a composable lambda, but it is not primarily a container.
      @Suppress("ComposableLambdaParameterPosition")
      @Composable
      public fun BasicTextField(
          state: TextFieldState,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-169-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 169
    endLine: 203
    sha256: e7e8c2d2aac995b00c80ad45aa2f8e30f637d6fe0109a9205ab532abfcf8ada6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          readOnly: Boolean = false,
          inputTransformation: InputTransformation? = null,
          textStyle: TextStyle = TextStyle.Default,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          onKeyboardAction: KeyboardActionHandler? = null,
          lineLimits: TextFieldLineLimits = TextFieldLineLimits.Default,
          onTextLayout: (Density.(getResult: () -> TextLayoutResult?) -> Unit)? = null,
          interactionSource: MutableInteractionSource? = null,
          cursorBrush: Brush = BasicTextFieldDefaults.CursorBrush,
          outputTransformation: OutputTransformation? = null,
          decorator: TextFieldDecorator? = null,
          scrollState: ScrollState = rememberScrollState(),
          // Last parameter must not be a function unless it's intended to be commonly used as a trailing
          // lambda.
      ) {
          BasicTextField(
              state = state,
              modifier = modifier,
              enabled = enabled,
              readOnly = readOnly,
              inputTransformation = inputTransformation,
              textStyle = textStyle,
              keyboardOptions = keyboardOptions,
              onKeyboardAction = onKeyboardAction,
              lineLimits = lineLimits,
              onTextLayout = onTextLayout,
              interactionSource = interactionSource,
              cursorBrush = cursorBrush,
              codepointTransformation = null,
              outputTransformation = outputTransformation,
              decorator = decorator,
              scrollState = scrollState,
              isPassword = false,
          )
      }
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-204-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 204
    endLine: 238
    sha256: 1ce3b5f2e22c630ad087be358147359832b325bfb6ee566f90451e04cd9bf47a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Internal core text field that accepts a [CodepointTransformation].
       *
       * @param codepointTransformation Visual transformation interface that provides a 1-to-1 mapping of
       *   codepoints.
       */
      // This takes a composable lambda, but it is not primarily a container.
      @Suppress("ComposableLambdaParameterPosition")
      @Composable
      internal fun BasicTextField(
          state: TextFieldState,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          readOnly: Boolean = false,
          inputTransformation: InputTransformation? = null,
          textStyle: TextStyle = TextStyle.Default,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          onKeyboardAction: KeyboardActionHandler? = null,
          lineLimits: TextFieldLineLimits = TextFieldLineLimits.Default,
          onTextLayout: (Density.(getResult: () -> TextLayoutResult?) -> Unit)? = null,
          interactionSource: MutableInteractionSource? = null,
          cursorBrush: Brush = BasicTextFieldDefaults.CursorBrush,
          codepointTransformation: CodepointTransformation? = null,
          outputTransformation: OutputTransformation? = null,
          decorator: TextFieldDecorator? = null,
          scrollState: ScrollState = rememberScrollState(),
          isPassword: Boolean = false,
          // Last parameter must not be a function unless it's intended to be commonly used as a trailing
          // lambda.
      ) {
          val density = LocalDensity.current
          val layoutDirection = LocalLayoutDirection.current
          val singleLine = lineLimits == SingleLine
          // We're using this to communicate focus state to cursor for now.
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-239-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 239
    endLine: 273
    sha256: 1fa772e390632e7c09d8444eb3440794165458916fcab407aa6622db4f07da18
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          val orientation = if (singleLine) Orientation.Horizontal else Orientation.Vertical
          val stylusHandwritingTrigger = remember {
              MutableSharedFlow<Unit>(replay = 1, onBufferOverflow = BufferOverflow.DROP_LATEST)
          }

          @OptIn(ExperimentalFoundationApi::class)
          val transformedState =
              remember(state, singleLine, codepointTransformation, outputTransformation) {
                  if (
                      ComposeFoundationFlags.isBasicTextFieldOutputTransformationOnlyEnabled &&
                          codepointTransformation == null
                  ) {
                      // If the TextField is both configured to be singleLine and given an
                      // OutputTransformation, we should combine them where SingleLine transformation
                      // works after the given OutputTransformation.
                      val appliedOutputTransformation =
                          if (singleLine && outputTransformation != null) {
                              SingleLineOutputTransformation.wrap(outputTransformation)
                          } else if (singleLine && outputTransformation == null) {
                              SingleLineOutputTransformation
                          } else {
                              outputTransformation
                          }
                      TransformedTextFieldState(
                          textFieldState = state,
                          inputTransformation = inputTransformation,
                          codepointTransformation = null,
                          outputTransformation = appliedOutputTransformation,
                      )
                  } else {
                      // First prefer provided codepointTransformation if not null, e.g.
                      // BasicSecureTextField would send PasswordTransformation. Second, apply a
                      // SingleLineCodepointTransformation if text field is configured to be single line.
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-274-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 274
    endLine: 308
    sha256: 2eb448b392b2a46e930c835fe91bd0ab33f4a5fcfa875f290c8e7ac8cfeeb384
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      // Else, don't apply any visual transformation.
                      val appliedCodepointTransformation =
                          codepointTransformation
                              ?: SingleLineCodepointTransformation.takeIf { singleLine }
                      TransformedTextFieldState(
                          textFieldState = state,
                          inputTransformation = inputTransformation,
                          codepointTransformation = appliedCodepointTransformation,
                          outputTransformation = outputTransformation,
                      )
                  }
              }

          // Invalidate textLayoutState if TextFieldState itself has changed, since TextLayoutState
          // would be carrying an invalid TextFieldState in its nonMeasureInputs.
          val textLayoutState = remember(transformedState) { TextLayoutState() }

          // InputTransformation.keyboardOptions might be backed by Snapshot state.
          // Read in a restartable composable scope to make sure the resolved value is always up-to-date.
          val resolvedKeyboardOptions =
              keyboardOptions.fillUnspecifiedValuesWith(inputTransformation?.keyboardOptions)

          val coroutineScope = rememberCoroutineScope()
          @OptIn(ExperimentalFoundationApi::class)
          val platformSelectionBehaviors =
              if (ComposeFoundationFlags.isSmartSelectionEnabled) {
                  val resolvedLocaleList = textStyle.localeList ?: LocalLocaleList.current
                  rememberPlatformSelectionBehaviors(SelectedTextType.EditableText, resolvedLocaleList)
              } else {
                  null
              }
          val toolbarRequester = remember { ToolbarRequesterImpl() }
          val currentClipboard = LocalClipboard.current
          val textFieldSelectionState =
              remember(transformedState) {
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-309-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 309
    endLine: 343
    sha256: 3384f747c69fc48c6b42ff5d1c163eb9379b4ef9a49ae9d7182ec2bb0d01580a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  TextFieldSelectionState(
                      textFieldState = transformedState,
                      textLayoutState = textLayoutState,
                      density = density,
                      enabled = enabled,
                      readOnly = readOnly,
                      isPassword = isPassword,
                      toolbarRequester = toolbarRequester,
                      coroutineScope = coroutineScope,
                      platformSelectionBehaviors = platformSelectionBehaviors,
                      clipboard = currentClipboard,
                  )
              }
          val currentHapticFeedback = LocalHapticFeedback.current
          val currentTextToolbar = LocalTextToolbar.current

          val textToolbarHandler =
              remember(coroutineScope, currentTextToolbar) {
                  object : TextToolbarHandler {
                      override suspend fun showTextToolbar(
                          selectionState: TextFieldSelectionState,
                          rect: Rect,
                      ) =
                          with(selectionState) {
                              selectionState.updateClipboardEntry()
                              currentTextToolbar.showMenu(
                                  rect = rect,
                                  onCopyRequested =
                                      menuItem(canShowCopyMenuItem(), TextToolbarState.None) {
                                          coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
                                              copy()
                                          }
                                      },
                                  onPasteRequested =
                                      menuItem(canShowPasteMenuItem(), TextToolbarState.None) {
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-344-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 344
    endLine: 378
    sha256: b0b5f9b2951dcb6d688d4c14fed3b71a8d72a1e11a94ed85b6412d4110efdaf0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                          coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
                                              paste()
                                          }
                                      },
                                  onCutRequested =
                                      menuItem(canShowCutMenuItem(), TextToolbarState.None) {
                                          coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
                                              cut()
                                          }
                                      },
                                  onSelectAllRequested =
                                      menuItem(canShowSelectAllMenuItem(), TextToolbarState.Selection) {
                                          selectAll()
                                      },
                                  onAutofillRequested =
                                      menuItem(canShowAutofillMenuItem(), TextToolbarState.None) {
                                          autofill()
                                      },
                              )
                          }

                      override fun hideTextToolbar() {
                          if (currentTextToolbar.status == TextToolbarStatus.Shown) {
                              currentTextToolbar.hide()
                          }
                      }
                  }
              }

          SideEffect {
              // These properties are not backed by snapshot state, so they can't be updated directly in
              // composition.
              transformedState.update(inputTransformation)

              textFieldSelectionState.update(
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 36
    endLine: 64
    sha256: 38096e2b3b4a157295a7c25651fcb46868420347269ee9a29d0c0f0501110a42
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.foundation.text.handwriting.stylusHandwriting
      import androidx.compose.foundation.text.input.InputTransformation
      import androidx.compose.foundation.text.input.KeyboardActionHandler
      import androidx.compose.foundation.text.input.OutputTransformation
      import androidx.compose.foundation.text.input.TextFieldDecorator
      import androidx.compose.foundation.text.input.TextFieldLineLimits
      import androidx.compose.foundation.text.input.TextFieldLineLimits.MultiLine
      import androidx.compose.foundation.text.input.TextFieldLineLimits.SingleLine
      import androidx.compose.foundation.text.input.TextFieldState
      import androidx.compose.foundation.text.input.internal.CodepointTransformation
      import androidx.compose.foundation.text.input.internal.SingleLineCodepointTransformation
      import androidx.compose.foundation.text.input.internal.SingleLineOutputTransformation
      import androidx.compose.foundation.text.input.internal.TextFieldCoreModifier
      import androidx.compose.foundation.text.input.internal.TextFieldDecoratorModifier
      import androidx.compose.foundation.text.input.internal.TextFieldTextLayoutModifier
      import androidx.compose.foundation.text.input.internal.TextLayoutState
      import androidx.compose.foundation.text.input.internal.TransformedTextFieldState
      import androidx.compose.foundation.text.input.internal.collectIsDragAndDropHoveredAsState
      import androidx.compose.foundation.text.input.internal.selection.TextFieldSelectionState
      import androidx.compose.foundation.text.input.internal.selection.TextFieldSelectionState.InputType
      import androidx.compose.foundation.text.input.internal.selection.TextToolbarHandler
      import androidx.compose.foundation.text.input.internal.selection.TextToolbarState
      import androidx.compose.foundation.text.input.internal.selection.addBasicTextFieldTextContextMenuComponents
      import androidx.compose.foundation.text.input.internal.selection.menuItem
      import androidx.compose.foundation.text.selection.SelectedTextType
      import androidx.compose.foundation.text.selection.SelectionHandle
      import androidx.compose.foundation.text.selection.rememberPlatformSelectionBehaviors
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.DisposableEffect
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-379-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 379
    endLine: 413
    sha256: eb68b99be36cb1936b5e9b72702f1f882924d9295675e8e95791c1ee53cf594b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  hapticFeedBack = currentHapticFeedback,
                  clipboard = currentClipboard,
                  density = density,
                  enabled = enabled,
                  readOnly = readOnly,
                  isPassword = isPassword,
                  showTextToolbar = textToolbarHandler,
              )
          }

          DisposableEffect(textFieldSelectionState) { onDispose { textFieldSelectionState.dispose() } }

          val overscrollEffect = rememberTextFieldOverscrollEffect()

          val handwritingEnabled =
              !isPassword &&
                  keyboardOptions.keyboardType != KeyboardType.Password &&
                  keyboardOptions.keyboardType != KeyboardType.NumberPassword
          val dragInputType = textFieldSelectionState.directDragGestureInitiator
          val decorationModifiers =
              modifier
                  .stylusHandwriting(enabled, handwritingEnabled) {
                      // If this is a password field, we can't trigger handwriting.
                      // The expected behavior is 1) request focus 2) show software keyboard.
                      // Note: TextField will show software keyboard automatically when it
                      // gain focus. 3) show a toast message telling that handwriting is not
                      // supported for password fields. TODO(b/335294152)
                      if (handwritingEnabled) {
                          // Send the handwriting start signal to platform.
                          // The editor should send the signal when it is focused or is about
                          // to gain focus, Here are more details:
                          //   1) if the editor already has an active input session, the
                          //   platform handwriting service should already listen to this flow
                          //   and it'll start handwriting right away.
                          //
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-414-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 414
    endLine: 448
    sha256: 307f15fb756302f81c7107a231fe352763a9a8fa73e145a9cdf0896b7de3be5c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          //   2) if the editor is not focused, but it'll be focused and
                          //   create a new input session, one handwriting signal will be
                          //   replayed when the platform collect this flow. And the platform
                          //   should trigger handwriting accordingly.
                          stylusHandwritingTrigger.tryEmit(Unit)
                      }
                  }
                  .then(
                      // semantics + some focus + input session + touch to focus
                      TextFieldDecoratorModifier(
                          textFieldState = transformedState,
                          textLayoutState = textLayoutState,
                          textFieldSelectionState = textFieldSelectionState,
                          filter = inputTransformation,
                          enabled = enabled,
                          readOnly = readOnly,
                          keyboardOptions = resolvedKeyboardOptions,
                          keyboardActionHandler = onKeyboardAction,
                          singleLine = singleLine,
                          interactionSource = interactionSource,
                          isPassword = isPassword,
                          stylusHandwritingTrigger = stylusHandwritingTrigger,
                      )
                  )
                  .scrollable(
                      state = scrollState,
                      orientation = orientation,
                      // Disable scroll only for touch; allow mouse-wheel scrolling while selecting
                      enabled = enabled && (dragInputType != InputType.Touch),
                      reverseDirection =
                          ScrollableDefaults.reverseDirection(
                              layoutDirection = layoutDirection,
                              orientation = orientation,
                              reverseScrolling = false,
                          ),
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-449-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 449
    endLine: 483
    sha256: 4354f27de56dff2222ab2691b927f26555bf5972a30bf2614865858c20aa558e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      interactionSource = interactionSource,
                      overscrollEffect = overscrollEffect,
                  )
                  .pointerHoverIcon(PointerIcon.Text)
                  .addContextMenuComponents(textFieldSelectionState, coroutineScope)
                  .textFieldOverlay(transformedState, keyboardOptions, interactionSource)

          Box(decorationModifiers, propagateMinConstraints = true) {
              ContextMenuArea(textFieldSelectionState, enabled) {
                  val nonNullDecorator = decorator ?: DefaultTextFieldDecorator
                  nonNullDecorator.Decoration {
                      val isFocused by interactionSource.collectIsFocusedAsState()
                      val isDragHovered by interactionSource.collectIsDragAndDropHoveredAsState()
                      val windowInfo = LocalWindowInfo.current
                      val isWindowAndTextFieldFocused by
                          remember(interactionSource, windowInfo) {
                              // Using derived state here to avoid recomposing when window focus is
                              // obtained after the initial focus.
                              computedStateOf { isFocused && windowInfo.isWindowFocused }
                          }

                      rememberClipboardEventsHandler(
                          isEnabled = isFocused,
                          onPaste = { textFieldSelectionState.onPasteEvent(it) },
                          onCopy = { textFieldSelectionState.copyWithResult() },
                          onCut = { textFieldSelectionState.cutWithResult() },
                      )

                      val minLines: Int
                      val maxLines: Int
                      if (lineLimits is MultiLine) {
                          minLines = lineLimits.minHeightInLines
                          maxLines = lineLimits.maxHeightInLines
                      } else {
                          minLines = 1
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-484-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 484
    endLine: 518
    sha256: c30add7915e61b0023078c437dd9ecc4039df88156544a1dc31a310ceae6fd80
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          maxLines = 1
                      }

                      @OptIn(ExperimentalFoundationApi::class)
                      val textFieldSize =
                          if (isBasicTextFieldSizeOptimizationEnabled) {
                              Modifier.textFieldSize(
                                  textStyle = textStyle,
                                  singleLineHeightProvider = textLayoutState,
                                  minLines = minLines,
                                  maxLines = maxLines,
                                  useSingleLineHeightProvider = singleLine,
                                  unboundedWidth = singleLine,
                              )
                          } else {
                              Modifier.heightForSingleLineField(textLayoutState)
                                  .heightInLines(
                                      textStyle = textStyle,
                                      minLines = minLines,
                                      maxLines = maxLines,
                                      softWrap = !singleLine,
                                  )
                                  .textFieldMinSize(textStyle)
                          }
                      Box(
                          propagateMinConstraints = true,
                          modifier =
                              textFieldSize
                                  .clipToBounds()
                                  .then(
                                      TextFieldCoreModifier(
                                          isFocused = isWindowAndTextFieldFocused,
                                          isDragHovered = isDragHovered,
                                          isTouchDragInProgress = dragInputType == InputType.Touch,
                                          textLayoutState = textLayoutState,
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-519-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 519
    endLine: 553
    sha256: cda8dac78aa72ef99781e08d1a4c916a49724113c4b5152aa7a729022acb8cbe
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                          textFieldState = transformedState,
                                          textFieldSelectionState = textFieldSelectionState,
                                          cursorBrush = cursorBrush,
                                          writeable = enabled && !readOnly,
                                          scrollState = scrollState,
                                          orientation = orientation,
                                          toolbarRequester = toolbarRequester,
                                          platformSelectionBehaviors = platformSelectionBehaviors,
                                      )
                                  ),
                      ) {
                          Box(
                              modifier =
                                  TextFieldTextLayoutModifier(
                                      textLayoutState = textLayoutState,
                                      textFieldState = transformedState,
                                      textStyle = textStyle,
                                      singleLine = singleLine,
                                      onTextLayout = onTextLayout,
                                      keyboardOptions = resolvedKeyboardOptions,
                                  )
                          )

                          if (
                              enabled &&
                                  isWindowAndTextFieldFocused &&
                                  textFieldSelectionState.isDirectTouchInteraction
                          ) {
                              TextFieldSelectionHandles(selectionState = textFieldSelectionState)
                              if (!readOnly) {
                                  TextFieldCursorHandle(selectionState = textFieldSelectionState)
                              }
                          }
                      }
                  }
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-554-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 554
    endLine: 588
    sha256: f2fd2964e5a430b36053b93dac33469baaf606c7e983200a5737bed39e1ab5aa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
          }
      }

      /**
       * A modifier that can be used to determine the location and state of the text field. It is used on
       * multiplatform, where knowledge of the text field's state and location is required in order to
       * support platform-dependent features such as VoiceOver or Autofill (password autofill, one-time
       * codes, etc.).
       */
      internal expect fun Modifier.textFieldOverlay(
          transformedState: TransformedTextFieldState,
          keyboardOptions: KeyboardOptions,
          interactionSource: InteractionSource,
      ): Modifier

      @OptIn(ExperimentalFoundationApi::class)
      private fun Modifier.heightForSingleLineField(textLayoutState: TextLayoutState) =
          if (ComposeFoundationFlags.isBasicTextFieldMinSizeOptimizationEnabled) {
              layout { measurable, constraints ->
                  val height = textLayoutState.heightForSingleLineField
                  val heightPx = height.roundToPx()
                  val wrappedConstraints =
                      constraints.constrain(
                          Constraints(
                              minWidth = 0,
                              maxWidth = Constraints.Infinity,
                              minHeight = heightPx,
                              maxHeight = if (height == 0.dp) Constraints.Infinity else heightPx,
                          )
                      )

                  val placeable = measurable.measure(wrappedConstraints)
                  layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) }
              }
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-589-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 589
    endLine: 623
    sha256: 4658033f7ba7b929b2bbadede341cd4dd142fe8460d166d53d2b72645e02a40a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          } else {
              val height = textLayoutState.heightForSingleLineField
              heightIn(min = height, max = if (height == 0.dp) Dp.Unspecified else height)
          }

      @OptIn(ExperimentalFoundationApi::class)
      private fun Modifier.addContextMenuComponents(
          textFieldSelectionState: TextFieldSelectionState,
          coroutineScope: CoroutineScope,
      ): Modifier =
          if (ComposeFoundationFlags.isNewContextMenuEnabled)
              addBasicTextFieldTextContextMenuComponents(textFieldSelectionState, coroutineScope)
          else this

      @Composable
      internal fun TextFieldCursorHandle(selectionState: TextFieldSelectionState) {
          // Does not recompose if only position of the handle changes.
          val cursorHandleVisible by
              remember(selectionState) {
                  derivedStateOf { selectionState.getCursorHandleState(includePosition = false).visible }
              }
          if (cursorHandleVisible) {
              CursorHandle(
                  offsetProvider = {
                      selectionState.getCursorHandleState(includePosition = true).position
                  },
                  modifier =
                      Modifier.pointerInput(selectionState) {
                          with(selectionState) { cursorHandleGestures() }
                      },
                  minTouchTargetSize = MinTouchTargetSizeForHandles,
              )
          }
      }
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-624-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 624
    endLine: 658
    sha256: 0719ffeb12e5af28b0552d0cc472c08c08556cf614ce645941c00fe76808c98e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Composable
      internal fun TextFieldSelectionHandles(selectionState: TextFieldSelectionState) {
          // Does not recompose if only position of the handle changes.
          val startHandleState by
              remember(selectionState) {
                  derivedStateOf {
                      selectionState.getSelectionHandleState(
                          isStartHandle = true,
                          includePosition = false,
                      )
                  }
              }
          // Read once here to avoid repeating derived state reads
          val startHandle = startHandleState
          if (startHandle.visible) {
              SelectionHandle(
                  offsetProvider = {
                      selectionState
                          .getSelectionHandleState(isStartHandle = true, includePosition = true)
                          .position
                  },
                  isStartHandle = true,
                  direction = startHandle.direction,
                  handlesCrossed = startHandle.handlesCrossed,
                  modifier =
                      Modifier.pointerInput(selectionState) {
                          with(selectionState) { selectionHandleGestures(true) }
                      },
                  lineHeight = startHandle.lineHeight,
                  minTouchTargetSize = MinTouchTargetSizeForHandles,
              )
          }

          // Does not recompose if only position of the handle changes.
          val endHandleState by
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-65-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 65
    endLine: 99
    sha256: 86a32c7442334c395fcec281a4ad74d5f89641f341404a69d15a05bbd83825c9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.SideEffect
      import androidx.compose.runtime.computedStateOf
      import androidx.compose.runtime.derivedStateOf
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.rememberCoroutineScope
      import androidx.compose.runtime.setValue
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.draw.clipToBounds
      import androidx.compose.ui.geometry.Rect
      import androidx.compose.ui.graphics.Brush
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.SolidColor
      import androidx.compose.ui.input.pointer.PointerIcon
      import androidx.compose.ui.input.pointer.pointerHoverIcon
      import androidx.compose.ui.input.pointer.pointerInput
      import androidx.compose.ui.layout.layout
      import androidx.compose.ui.platform.LocalClipboard
      import androidx.compose.ui.platform.LocalDensity
      import androidx.compose.ui.platform.LocalHapticFeedback
      import androidx.compose.ui.platform.LocalLayoutDirection
      import androidx.compose.ui.platform.LocalLocaleList
      import androidx.compose.ui.platform.LocalTextToolbar
      import androidx.compose.ui.platform.LocalWindowInfo
      import androidx.compose.ui.platform.TextToolbarStatus
      import androidx.compose.ui.text.TextLayoutResult
      import androidx.compose.ui.text.TextStyle
      import androidx.compose.ui.text.input.ImeAction
      import androidx.compose.ui.text.input.KeyboardType
      import androidx.compose.ui.text.input.TextFieldValue
      import androidx.compose.ui.text.input.VisualTransformation
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.Dp
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-659-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 659
    endLine: 693
    sha256: 519ad7ca13e230960b023e9cf8b4d466ccf7ed4d58f52b993e5edc4a47515474
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              remember(selectionState) {
                  derivedStateOf {
                      selectionState.getSelectionHandleState(
                          isStartHandle = false,
                          includePosition = false,
                      )
                  }
              }
          // Read once here to avoid repeating derived state reads
          val endHandle = endHandleState
          if (endHandle.visible) {
              SelectionHandle(
                  offsetProvider = {
                      selectionState
                          .getSelectionHandleState(isStartHandle = false, includePosition = true)
                          .position
                  },
                  isStartHandle = false,
                  direction = endHandle.direction,
                  handlesCrossed = endHandle.handlesCrossed,
                  modifier =
                      Modifier.pointerInput(selectionState) {
                          with(selectionState) { selectionHandleGestures(false) }
                      },
                  lineHeight = endHandle.lineHeight,
                  minTouchTargetSize = MinTouchTargetSizeForHandles,
              )
          }
      }

      private val DefaultTextFieldDecorator = TextFieldDecorator { it() }

      /**
       * Defines a minimum touch target area size for Selection and Cursor handles.
       *
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-694-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 694
    endLine: 728
    sha256: 6b3a10c512ea0c7dff44fdc882ed586d38d9bafec259f35eb36853ebb267a3f4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Although BasicTextField is not part of Material spec, this accessibility feature is important
       * enough to be included at foundation layer, and also TextField cannot change selection handles
       * provided by BasicTextField to somehow achieve this accessibility requirement.
       *
       * This value is adopted from Android platform's TextView implementation.
       */
      private val MinTouchTargetSizeForHandles
          get() = DpSize(40.dp, 40.dp)

      /**
       * Basic composable that enables users to edit text via hardware or software keyboard, but provides
       * no decorations like hint or placeholder.
       *
       * Whenever the user edits the text, [onValueChange] is called with the most up to date state
       * represented by [String] with which developer is expected to update their state.
       *
       * Unlike [TextFieldValue] overload, this composable does not let the developer control selection,
       * cursor and text composition information. Please check [TextFieldValue] and corresponding
       * [BasicTextField] overload for more information.
       *
       * It is crucial that the value provided to the [onValueChange] is fed back into [BasicTextField] in
       * order to actually display and continue to edit that text in the field. The value you feed back
       * into the field may be different than the one provided to the [onValueChange] callback, however
       * the following caveats apply:
       * - The new value must be provided to [BasicTextField] immediately (i.e. by the next frame), or the
       *   text field may appear to glitch, e.g. the cursor may jump around. For more information about
       *   this requirement, see
       *   [this article](https://developer.android.com/jetpack/compose/text/user-input#state-practices).
       * - The value fed back into the field may be different from the one passed to [onValueChange],
       *   although this may result in the input connection being restarted, which can make the keyboard
       *   flicker for the user. This is acceptable when you're using the callback to, for example, filter
       *   out certain types of input, but should probably not be done on every update when entering
       *   freeform text.
       *
       * This composable provides basic text editing functionality, however does not include any
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-729-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 729
    endLine: 763
    sha256: 7ed426cb677ddc51c8272f1fde65d7df7baedfb5b3bdfb87ce583fad5b14faac
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * decorations such as borders, hints/placeholder. A design system based implementation such as
       * Material Design Filled text field is typically what is needed to cover most of the needs. This
       * composable is designed to be used when a custom implementation for different design system is
       * needed.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.samples.BasicTextFieldWithStringSample
       *
       * For example, if you need to include a placeholder in your TextField, you can write a composable
       * using the decoration box like this:
       *
       * @sample androidx.compose.foundation.samples.PlaceholderBasicTextFieldSample
       *
       * If you want to add decorations to your text field, such as icon or similar, and increase the hit
       * target area, use the decoration box:
       *
       * @sample androidx.compose.foundation.samples.TextFieldWithIconSample
       *
       * In order to create formatted text field, for example for entering a phone number or a social
       * security number, use a [visualTransformation] parameter. Below is the example of the text field
       * for entering a credit card number:
       *
       * @sample androidx.compose.foundation.samples.CreditCardSample
       *
       * Note: This overload does not support [KeyboardOptions.showKeyboardOnFocus].
       *
       * @param value the input [String] text to be shown in the text field
       * @param onValueChange the callback that is triggered when the input service updates the text. An
       *   updated text comes as a parameter of the callback
       * @param modifier optional [Modifier] for this text field.
       * @param enabled controls the enabled state of the [BasicTextField]. When `false`, the text field
       *   will be neither editable nor focusable, the input of the text field will not be selectable
       * @param readOnly controls the editable state of the [BasicTextField]. When `true`, the text field
       *   can not be modified, however, a user can focus it and copy text from it. Read-only text fields
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-764-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 764
    endLine: 789
    sha256: 500069be7d155787f9ab4d417c1c38ad2dccebc2b1abe63bd11c7c211ed085bf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   are usually used to display pre-filled forms that user can not edit
       * @param textStyle Style configuration that applies at character level such as color, font etc.
       * @param keyboardOptions software keyboard options that contains configuration such as
       *   [KeyboardType] and [ImeAction].
       * @param keyboardActions when the input service emits an IME action, the corresponding callback is
       *   called. Note that this IME action may be different from what you specified in
       *   [KeyboardOptions.imeAction].
       * @param singleLine when set to true, this text field becomes a single horizontally scrolling text
       *   field instead of wrapping onto multiple lines. The keyboard will be informed to not show the
       *   return key as the [ImeAction]. [maxLines] and [minLines] are ignored as both are automatically
       *   set to 1.
       * @param maxLines the maximum height in terms of maximum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
       * @param minLines the minimum height in terms of minimum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
       * @param visualTransformation The visual transformation filter for changing the visual
       *   representation of the input. By default no visual transformation is applied.
       * @param onTextLayout Callback that is executed when a new text layout is calculated. A
       *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
       *   text, baselines and other details. The callback can be used to add additional decoration or
       *   functionality to the text. For example, to draw a cursor or selection around the text.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this text field. You can use this to change the text field's
       *   appearance or preview the text field in different states. Note that if `null` is provided,
       *   interactions will still happen internally.
       * @param cursorBrush [Brush] to paint cursor with. If [SolidColor] with [Color.Unspecified]
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-790-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 790
    endLine: 824
    sha256: c4393ac1ed8920b055acf95c58a8039b12206f9a6adeac90519a30ec88cbe46b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   provided, there will be no cursor drawn
       * @param decorationBox Composable lambda that allows to add decorations around text field, such as
       *   icon, placeholder, helper messages or similar, and automatically increase the hit target area
       *   of the text field. To allow you to control the placement of the inner text field relative to
       *   your decorations, the text field implementation will pass in a framework-controlled composable
       *   parameter "innerTextField" to the decorationBox lambda you provide. You must call
       *   innerTextField exactly once.
       */
      @Deprecated(
          "Use the BasicTextField(state: TextFieldState, ...) overload instead. To migrate: " +
              "create a TextFieldState via rememberTextFieldState(initialText) in composition or " +
              "TextFieldState(initialText) in a state holder; read text from state.text and update " +
              "it programmatically via state.edit { ... } or state.setTextAndPlaceCursorAtEnd(text); " +
              "observe text changes for side effects via snapshotFlow { state.text }.collect { ... }; " +
              "and replace onValueChange input filtering with InputTransformation, visualTransformation " +
              "with OutputTransformation (or BasicSecureTextField for passwords), singleLine/maxLines/" +
              "minLines with TextFieldLineLimits, decorationBox with TextFieldDecorator, and " +
              "keyboardActions with KeyboardActionHandler. See " +
              "https://developer.android.com/develop/ui/compose/text/migrate-state-based for full " +
              "migration guidance."
      )
      @Composable
      public fun BasicTextField(
          value: String,
          onValueChange: (String) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          readOnly: Boolean = false,
          textStyle: TextStyle = TextStyle.Default,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          keyboardActions: KeyboardActions = KeyboardActions.Default,
          singleLine: Boolean = false,
          maxLines: Int = if (singleLine) 1 else Int.MAX_VALUE,
          minLines: Int = 1,
          visualTransformation: VisualTransformation = VisualTransformation.None,
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-825-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 825
    endLine: 859
    sha256: 5a33ec6c83e023f2649ffc16878727dad2cf4dfa536cd0a840121597b5722642
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          onTextLayout: (TextLayoutResult) -> Unit = {},
          interactionSource: MutableInteractionSource? = null,
          cursorBrush: Brush = SolidColor(Color.Black),
          decorationBox: @Composable (innerTextField: @Composable () -> Unit) -> Unit =
              @Composable { innerTextField -> innerTextField() },
      ) {
          // Holds the latest internal TextFieldValue state. We need to keep it to have the correct value
          // of the composition.
          var textFieldValueState by remember { mutableStateOf(TextFieldValue(text = value)) }
          // Holds the latest TextFieldValue that BasicTextField was recomposed with. We couldn't simply
          // pass `TextFieldValue(text = value)` to the CoreTextField because we need to preserve the
          // composition.
          val textFieldValue = textFieldValueState.copy(text = value)

          SideEffect {
              if (
                  textFieldValue.selection != textFieldValueState.selection ||
                      textFieldValue.composition != textFieldValueState.composition
              ) {
                  textFieldValueState = textFieldValue
              }
          }
          // Last String value that either text field was recomposed with or updated in the onValueChange
          // callback. We keep track of it to prevent calling onValueChange(String) for same String when
          // CoreTextField's onValueChange is called multiple times without recomposition in between.
          var lastTextValue by remember(value) { mutableStateOf(value) }

          CoreTextField(
              value = textFieldValue,
              onValueChange = { newTextFieldValueState ->
                  textFieldValueState = newTextFieldValueState

                  val stringChangedSinceLastInvocation = lastTextValue != newTextFieldValueState.text
                  lastTextValue = newTextFieldValueState.text
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-860-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 860
    endLine: 894
    sha256: 255bebac9787ac2d4feadb430b34bb9ea313cb4a7aaa956560e8eed543b098a2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  if (stringChangedSinceLastInvocation) {
                      onValueChange(newTextFieldValueState.text)
                  }
              },
              modifier = modifier,
              textStyle = textStyle,
              visualTransformation = visualTransformation,
              onTextLayout = onTextLayout,
              interactionSource = interactionSource,
              cursorBrush = cursorBrush,
              imeOptions = keyboardOptions.toImeOptions(singleLine = singleLine),
              keyboardActions = keyboardActions,
              softWrap = !singleLine,
              minLines = if (singleLine) 1 else minLines,
              maxLines = if (singleLine) 1 else maxLines,
              decorationBox = decorationBox,
              enabled = enabled,
              readOnly = readOnly,
          )
      }

      /**
       * Basic composable that enables users to edit text via hardware or software keyboard, but provides
       * no decorations like hint or placeholder.
       *
       * Whenever the user edits the text, [onValueChange] is called with the most up to date state
       * represented by [TextFieldValue]. [TextFieldValue] contains the text entered by user, as well as
       * selection, cursor and text composition information. Please check [TextFieldValue] for the
       * description of its contents.
       *
       * It is crucial that the value provided to the [onValueChange] is fed back into [BasicTextField] in
       * order to actually display and continue to edit that text in the field. The value you feed back
       * into the field may be different than the one provided to the [onValueChange] callback, however
       * the following caveats apply:
       * - The new value must be provided to [BasicTextField] immediately (i.e. by the next frame), or the
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-895-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 895
    endLine: 929
    sha256: 7c5fbfbd91c1501d35df8ff14a25e544b49b583dd623fa63a77333de5e990dd3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   text field may appear to glitch, e.g. the cursor may jump around. For more information about
       *   this requirement, see
       *   [this article](https://developer.android.com/jetpack/compose/text/user-input#state-practices).
       * - The value fed back into the field may be different from the one passed to [onValueChange],
       *   although this may result in the input connection being restarted, which can make the keyboard
       *   flicker for the user. This is acceptable when you're using the callback to, for example, filter
       *   out certain types of input, but should probably not be done on every update when entering
       *   freeform text.
       *
       * This composable provides basic text editing functionality, however does not include any
       * decorations such as borders, hints/placeholder. A design system based implementation such as
       * Material Design Filled text field is typically what is needed to cover most of the needs. This
       * composable is designed to be used when a custom implementation for different design system is
       * needed.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.samples.BasicTextFieldSample
       *
       * For example, if you need to include a placeholder in your TextField, you can write a composable
       * using the decoration box like this:
       *
       * @sample androidx.compose.foundation.samples.PlaceholderBasicTextFieldSample
       *
       * If you want to add decorations to your text field, such as icon or similar, and increase the hit
       * target area, use the decoration box:
       *
       * @sample androidx.compose.foundation.samples.TextFieldWithIconSample
       *
       * Note: This overload does not support [KeyboardOptions.showKeyboardOnFocus].
       *
       * @param value The [androidx.compose.ui.text.input.TextFieldValue] to be shown in the
       *   [BasicTextField].
       * @param onValueChange Called when the input service updates the values in [TextFieldValue].
       * @param modifier optional [Modifier] for this text field.
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-930-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 930
    endLine: 954
    sha256: 47c33d3c8435702a54fa5279c13ee353abe11a39291258b2ead54f9b8ae02d1b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param enabled controls the enabled state of the [BasicTextField]. When `false`, the text field
       *   will be neither editable nor focusable, the input of the text field will not be selectable
       * @param readOnly controls the editable state of the [BasicTextField]. When `true`, the text field
       *   can not be modified, however, a user can focus it and copy text from it. Read-only text fields
       *   are usually used to display pre-filled forms that user can not edit
       * @param textStyle Style configuration that applies at character level such as color, font etc.
       * @param keyboardOptions software keyboard options that contains configuration such as
       *   [KeyboardType] and [ImeAction].
       * @param keyboardActions when the input service emits an IME action, the corresponding callback is
       *   called. Note that this IME action may be different from what you specified in
       *   [KeyboardOptions.imeAction].
       * @param singleLine when set to true, this text field becomes a single horizontally scrolling text
       *   field instead of wrapping onto multiple lines. The keyboard will be informed to not show the
       *   return key as the [ImeAction]. [maxLines] and [minLines] are ignored as both are automatically
       *   set to 1.
       * @param maxLines the maximum height in terms of maximum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
       * @param minLines the minimum height in terms of minimum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
       * @param visualTransformation The visual transformation filter for changing the visual
       *   representation of the input. By default no visual transformation is applied.
       * @param onTextLayout Callback that is executed when a new text layout is calculated. A
       *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
       *   text, baselines and other details. The callback can be used to add additional decoration or
       *   functionality to the text. For example, to draw a cursor or selection around the text.
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-955-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 955
    endLine: 985
    sha256: 7bfa0306e2ebe8dd9b4e3c1e4c1eef6d6bdec8f0a61f30b7eb972e80e1d68d4b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this text field. You can use this to change the text field's
       *   appearance or preview the text field in different states. Note that if `null` is provided,
       *   interactions will still happen internally.
       * @param cursorBrush [Brush] to paint cursor with. If [SolidColor] with [Color.Unspecified]
       *   provided, there will be no cursor drawn
       * @param decorationBox Composable lambda that allows to add decorations around text field, such as
       *   icon, placeholder, helper messages or similar, and automatically increase the hit target area
       *   of the text field. To allow you to control the placement of the inner text field relative to
       *   your decorations, the text field implementation will pass in a framework-controlled composable
       *   parameter "innerTextField" to the decorationBox lambda you provide. You must call
       *   innerTextField exactly once.
       */
      @Suppress("DeprecatedCallableAddReplaceWith")
      @Deprecated(
          "Use the BasicTextField(state: TextFieldState, ...) overload instead. To migrate: " +
              "create a TextFieldState via rememberTextFieldState(initialText, initialSelection) in " +
              "composition or TextFieldState(initialText, initialSelection) in a state holder; read " +
              "text and selection from state.text and state.selection, and update them programmatically " +
              "via state.edit { ... } or state.setTextAndPlaceCursorAtEnd(text); observe changes for " +
              "side effects via snapshotFlow { state.text }.collect { ... }; and replace onValueChange " +
              "input filtering with InputTransformation, visualTransformation with OutputTransformation " +
              "(or BasicSecureTextField for passwords), singleLine/maxLines/minLines with " +
              "TextFieldLineLimits, decorationBox with TextFieldDecorator, and keyboardActions with " +
              "KeyboardActionHandler. See " +
              "https://developer.android.com/develop/ui/compose/text/migrate-state-based for full " +
              "migration guidance."
      )
      @Composable
      public fun BasicTextField(
          value: TextFieldValue,
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-986-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 986
    endLine: 1020
    sha256: 9836531fcc3e1da23d45635816bf17300e1688931342503048b208687f8485bc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          onValueChange: (TextFieldValue) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          readOnly: Boolean = false,
          textStyle: TextStyle = TextStyle.Default,
          keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
          keyboardActions: KeyboardActions = KeyboardActions.Default,
          singleLine: Boolean = false,
          maxLines: Int = if (singleLine) 1 else Int.MAX_VALUE,
          minLines: Int = 1,
          visualTransformation: VisualTransformation = VisualTransformation.None,
          onTextLayout: (TextLayoutResult) -> Unit = {},
          interactionSource: MutableInteractionSource? = null,
          cursorBrush: Brush = SolidColor(Color.Black),
          decorationBox: @Composable (innerTextField: @Composable () -> Unit) -> Unit =
              @Composable { innerTextField -> innerTextField() },
      ) {
          CoreTextField(
              value = value,
              onValueChange = {
                  if (value != it) {
                      onValueChange(it)
                  }
              },
              modifier = modifier,
              textStyle = textStyle,
              visualTransformation = visualTransformation,
              onTextLayout = onTextLayout,
              interactionSource = interactionSource,
              cursorBrush = cursorBrush,
              imeOptions = keyboardOptions.toImeOptions(singleLine = singleLine),
              keyboardActions = keyboardActions,
              softWrap = !singleLine,
              minLines = if (singleLine) 1 else minLines,
              maxLines = if (singleLine) 1 else maxLines,
compose:
  id: live-androidx-foundation-foundation-foundation-text-basictextfield
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.text
  sections:
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-100
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 100–134)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-100-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1021
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 1021–1055)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1021-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1056
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 1056–1090)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1056-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1091
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 1091–1106)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1091-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-135
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 135–168)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-135-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-169
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 169–203)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-169-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-204
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 204–238)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-204-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-239
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 239–273)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-239-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-274
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 274–308)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-274-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-309
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 309–343)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-309-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-344
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 344–378)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-344-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-36
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 36–64)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-379
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 379–413)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-379-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-414
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 414–448)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-414-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-449
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 449–483)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-449-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-484
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 484–518)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-484-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-519
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 519–553)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-519-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-554
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 554–588)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-554-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-589
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 589–623)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-589-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-624
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 624–658)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-624-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-65
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 65–99)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-65-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-659
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 659–693)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-659-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-694
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 694–728)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-694-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-729
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 729–763)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-729-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-764
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 764–789)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-764-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-790
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 790–824)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-790-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-825
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 825–859)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-825-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-860
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 860–894)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-860-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-895
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 895–929)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-895-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-930
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 930–954)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-930-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-955
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 955–985)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-955-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-986
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 986–1020)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-986-source
      relatedIds: []
---

# androidx.compose.foundation.text BasicTextField.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt

## androidx.compose.foundation.text BasicTextField.kt source (lines 1–35)

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

@file:Suppress("DEPRECATION")

package androidx.compose.foundation.text

import androidx.compose.foundation.ComposeFoundationFlags
import androidx.compose.foundation.ComposeFoundationFlags.isBasicTextFieldSizeOptimizationEnabled
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.ScrollState
import androidx.compose.foundation.gestures.Orientation
import androidx.compose.foundation.gestures.ScrollableDefaults
import androidx.compose.foundation.gestures.scrollable
import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.InteractionSource
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsFocusedAsState
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.contextmenu.modifier.ToolbarRequesterImpl

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 100–134)

import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.constrain
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.CoroutineStart
import kotlinx.coroutines.channels.BufferOverflow
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.launch

private object BasicTextFieldDefaults {
    val CursorBrush = SolidColor(Color.Black)
}

/**
 * Interactive text input field without decorations.
 *
 * Hoists editing state through [state].
 *
 * To add decorations (such as borders, placeholders, hints, prefixes, or suffixes) and increase the
 * hit target area, use [decorator].
 *
 * To filter or modify input (e.g., limit characters or restrict input patterns), use
 * [InputTransformation].
 *
 * To transform the visual output (e.g., apply password mask or format phone numbers), use
 * [OutputTransformation].
 *
 * To limit height, use [lineLimits].
 *
 * Hoists scroll state via [scrollState] to observe and manipulate scroll position, such as
 * scrolling a searched keyword into view without focusing.
 *
 * @param state holding the editing state
 * @param modifier for this layout
 * @param enabled controls enabled state. If false, field is not editable, focusable, or selectable

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-100-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 1021–1055)

        decorationBox = decorationBox,
        enabled = enabled,
        readOnly = readOnly,
    )
}

@Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
@Composable
public fun BasicTextField(
    value: String,
    onValueChange: (String) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    textStyle: TextStyle = TextStyle.Default,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    keyboardActions: KeyboardActions = KeyboardActions.Default,
    singleLine: Boolean = false,
    maxLines: Int = Int.MAX_VALUE,
    visualTransformation: VisualTransformation = VisualTransformation.None,
    onTextLayout: (TextLayoutResult) -> Unit = {},
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    cursorBrush: Brush = SolidColor(Color.Black),
    decorationBox: @Composable (innerTextField: @Composable () -> Unit) -> Unit =
        @Composable { innerTextField -> innerTextField() },
) {
    BasicTextField(
        value = value,
        onValueChange = onValueChange,
        modifier = modifier,
        enabled = enabled,
        readOnly = readOnly,
        textStyle = textStyle,
        keyboardOptions = keyboardOptions,
        keyboardActions = keyboardActions,

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1021-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 1056–1090)

        singleLine = singleLine,
        minLines = 1,
        maxLines = maxLines,
        visualTransformation = visualTransformation,
        onTextLayout = onTextLayout,
        interactionSource = interactionSource,
        cursorBrush = cursorBrush,
        decorationBox = decorationBox,
    )
}

@Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
@Composable
public fun BasicTextField(
    value: TextFieldValue,
    onValueChange: (TextFieldValue) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    textStyle: TextStyle = TextStyle.Default,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    keyboardActions: KeyboardActions = KeyboardActions.Default,
    singleLine: Boolean = false,
    maxLines: Int = Int.MAX_VALUE,
    visualTransformation: VisualTransformation = VisualTransformation.None,
    onTextLayout: (TextLayoutResult) -> Unit = {},
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    cursorBrush: Brush = SolidColor(Color.Black),
    decorationBox: @Composable (innerTextField: @Composable () -> Unit) -> Unit =
        @Composable { innerTextField -> innerTextField() },
) {
    BasicTextField(
        value = value,
        onValueChange = onValueChange,
        modifier = modifier,

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1056-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 1091–1106)

        enabled = enabled,
        readOnly = readOnly,
        textStyle = textStyle,
        keyboardOptions = keyboardOptions,
        keyboardActions = keyboardActions,
        singleLine = singleLine,
        minLines = 1,
        maxLines = maxLines,
        visualTransformation = visualTransformation,
        onTextLayout = onTextLayout,
        interactionSource = interactionSource,
        cursorBrush = cursorBrush,
        decorationBox = decorationBox,
    )
}


Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1091-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 135–168)

 * @param readOnly controls editable state. If true, field cannot be modified but can be focused and
 *   copied
 * @param inputTransformation to transform user changes. Only applies to user-initiated changes
 *   (e.g., keyboard input, paste, accessibility), not programmatic updates to [state]. Changing the
 *   transformation applies to the next user edit
 * @param textStyle configuration for text content
 * @param keyboardOptions software keyboard options
 * @param onKeyboardAction run when user triggers IME action
 * @param lineLimits limits for line count and scroll behavior. If set to [SingleLine], the text
 *   field scrolls horizontally and newlines ('\n') are replaced with spaces
 * @param onTextLayout callback run when a new text layout is calculated. The [TextLayoutResult]
 *   parameter contains paragraph information, size, baselines, and other details. Use this callback
 *   to add decoration or functionality, such as drawing selection
 * @param interactionSource to observe interactions
 * @param cursorBrush to paint the cursor
 * @param outputTransformation to transform output representation
 * @param decorator to add decorations (such as borders, placeholders, hints, or prefixes/suffixes)
 *   around the text field, and increase the hit target area. The decorator receives an
 *   `innerTextField` composable lambda representing the actual text input area, which must not be
 *   called more than once. Not calling it is supported, for example when the decorator draws the
 *   text itself
 * @param scrollState to manage scroll. If [lineLimits] is [SingleLine], the text field scrolls
 *   horizontally. Otherwise, it scrolls vertically
 * @sample androidx.compose.foundation.samples.BasicTextFieldDecoratorSample
 * @sample androidx.compose.foundation.samples.BasicTextFieldCustomInputTransformationSample
 * @sample androidx.compose.foundation.samples.BasicTextFieldWithValueOnValueChangeSample
 */
// This takes a composable lambda, but it is not primarily a container.
@Suppress("ComposableLambdaParameterPosition")
@Composable
public fun BasicTextField(
    state: TextFieldState,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-135-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 169–203)

    readOnly: Boolean = false,
    inputTransformation: InputTransformation? = null,
    textStyle: TextStyle = TextStyle.Default,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    onKeyboardAction: KeyboardActionHandler? = null,
    lineLimits: TextFieldLineLimits = TextFieldLineLimits.Default,
    onTextLayout: (Density.(getResult: () -> TextLayoutResult?) -> Unit)? = null,
    interactionSource: MutableInteractionSource? = null,
    cursorBrush: Brush = BasicTextFieldDefaults.CursorBrush,
    outputTransformation: OutputTransformation? = null,
    decorator: TextFieldDecorator? = null,
    scrollState: ScrollState = rememberScrollState(),
    // Last parameter must not be a function unless it's intended to be commonly used as a trailing
    // lambda.
) {
    BasicTextField(
        state = state,
        modifier = modifier,
        enabled = enabled,
        readOnly = readOnly,
        inputTransformation = inputTransformation,
        textStyle = textStyle,
        keyboardOptions = keyboardOptions,
        onKeyboardAction = onKeyboardAction,
        lineLimits = lineLimits,
        onTextLayout = onTextLayout,
        interactionSource = interactionSource,
        cursorBrush = cursorBrush,
        codepointTransformation = null,
        outputTransformation = outputTransformation,
        decorator = decorator,
        scrollState = scrollState,
        isPassword = false,
    )
}

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-169-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 204–238)


/**
 * Internal core text field that accepts a [CodepointTransformation].
 *
 * @param codepointTransformation Visual transformation interface that provides a 1-to-1 mapping of
 *   codepoints.
 */
// This takes a composable lambda, but it is not primarily a container.
@Suppress("ComposableLambdaParameterPosition")
@Composable
internal fun BasicTextField(
    state: TextFieldState,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    inputTransformation: InputTransformation? = null,
    textStyle: TextStyle = TextStyle.Default,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    onKeyboardAction: KeyboardActionHandler? = null,
    lineLimits: TextFieldLineLimits = TextFieldLineLimits.Default,
    onTextLayout: (Density.(getResult: () -> TextLayoutResult?) -> Unit)? = null,
    interactionSource: MutableInteractionSource? = null,
    cursorBrush: Brush = BasicTextFieldDefaults.CursorBrush,
    codepointTransformation: CodepointTransformation? = null,
    outputTransformation: OutputTransformation? = null,
    decorator: TextFieldDecorator? = null,
    scrollState: ScrollState = rememberScrollState(),
    isPassword: Boolean = false,
    // Last parameter must not be a function unless it's intended to be commonly used as a trailing
    // lambda.
) {
    val density = LocalDensity.current
    val layoutDirection = LocalLayoutDirection.current
    val singleLine = lineLimits == SingleLine
    // We're using this to communicate focus state to cursor for now.

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-204-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 239–273)

    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    val orientation = if (singleLine) Orientation.Horizontal else Orientation.Vertical
    val stylusHandwritingTrigger = remember {
        MutableSharedFlow<Unit>(replay = 1, onBufferOverflow = BufferOverflow.DROP_LATEST)
    }

    @OptIn(ExperimentalFoundationApi::class)
    val transformedState =
        remember(state, singleLine, codepointTransformation, outputTransformation) {
            if (
                ComposeFoundationFlags.isBasicTextFieldOutputTransformationOnlyEnabled &&
                    codepointTransformation == null
            ) {
                // If the TextField is both configured to be singleLine and given an
                // OutputTransformation, we should combine them where SingleLine transformation
                // works after the given OutputTransformation.
                val appliedOutputTransformation =
                    if (singleLine && outputTransformation != null) {
                        SingleLineOutputTransformation.wrap(outputTransformation)
                    } else if (singleLine && outputTransformation == null) {
                        SingleLineOutputTransformation
                    } else {
                        outputTransformation
                    }
                TransformedTextFieldState(
                    textFieldState = state,
                    inputTransformation = inputTransformation,
                    codepointTransformation = null,
                    outputTransformation = appliedOutputTransformation,
                )
            } else {
                // First prefer provided codepointTransformation if not null, e.g.
                // BasicSecureTextField would send PasswordTransformation. Second, apply a
                // SingleLineCodepointTransformation if text field is configured to be single line.

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-239-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 274–308)

                // Else, don't apply any visual transformation.
                val appliedCodepointTransformation =
                    codepointTransformation
                        ?: SingleLineCodepointTransformation.takeIf { singleLine }
                TransformedTextFieldState(
                    textFieldState = state,
                    inputTransformation = inputTransformation,
                    codepointTransformation = appliedCodepointTransformation,
                    outputTransformation = outputTransformation,
                )
            }
        }

    // Invalidate textLayoutState if TextFieldState itself has changed, since TextLayoutState
    // would be carrying an invalid TextFieldState in its nonMeasureInputs.
    val textLayoutState = remember(transformedState) { TextLayoutState() }

    // InputTransformation.keyboardOptions might be backed by Snapshot state.
    // Read in a restartable composable scope to make sure the resolved value is always up-to-date.
    val resolvedKeyboardOptions =
        keyboardOptions.fillUnspecifiedValuesWith(inputTransformation?.keyboardOptions)

    val coroutineScope = rememberCoroutineScope()
    @OptIn(ExperimentalFoundationApi::class)
    val platformSelectionBehaviors =
        if (ComposeFoundationFlags.isSmartSelectionEnabled) {
            val resolvedLocaleList = textStyle.localeList ?: LocalLocaleList.current
            rememberPlatformSelectionBehaviors(SelectedTextType.EditableText, resolvedLocaleList)
        } else {
            null
        }
    val toolbarRequester = remember { ToolbarRequesterImpl() }
    val currentClipboard = LocalClipboard.current
    val textFieldSelectionState =
        remember(transformedState) {

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-274-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 309–343)

            TextFieldSelectionState(
                textFieldState = transformedState,
                textLayoutState = textLayoutState,
                density = density,
                enabled = enabled,
                readOnly = readOnly,
                isPassword = isPassword,
                toolbarRequester = toolbarRequester,
                coroutineScope = coroutineScope,
                platformSelectionBehaviors = platformSelectionBehaviors,
                clipboard = currentClipboard,
            )
        }
    val currentHapticFeedback = LocalHapticFeedback.current
    val currentTextToolbar = LocalTextToolbar.current

    val textToolbarHandler =
        remember(coroutineScope, currentTextToolbar) {
            object : TextToolbarHandler {
                override suspend fun showTextToolbar(
                    selectionState: TextFieldSelectionState,
                    rect: Rect,
                ) =
                    with(selectionState) {
                        selectionState.updateClipboardEntry()
                        currentTextToolbar.showMenu(
                            rect = rect,
                            onCopyRequested =
                                menuItem(canShowCopyMenuItem(), TextToolbarState.None) {
                                    coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
                                        copy()
                                    }
                                },
                            onPasteRequested =
                                menuItem(canShowPasteMenuItem(), TextToolbarState.None) {

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-309-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 344–378)

                                    coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
                                        paste()
                                    }
                                },
                            onCutRequested =
                                menuItem(canShowCutMenuItem(), TextToolbarState.None) {
                                    coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
                                        cut()
                                    }
                                },
                            onSelectAllRequested =
                                menuItem(canShowSelectAllMenuItem(), TextToolbarState.Selection) {
                                    selectAll()
                                },
                            onAutofillRequested =
                                menuItem(canShowAutofillMenuItem(), TextToolbarState.None) {
                                    autofill()
                                },
                        )
                    }

                override fun hideTextToolbar() {
                    if (currentTextToolbar.status == TextToolbarStatus.Shown) {
                        currentTextToolbar.hide()
                    }
                }
            }
        }

    SideEffect {
        // These properties are not backed by snapshot state, so they can't be updated directly in
        // composition.
        transformedState.update(inputTransformation)

        textFieldSelectionState.update(

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-344-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 36–64)

import androidx.compose.foundation.text.handwriting.stylusHandwriting
import androidx.compose.foundation.text.input.InputTransformation
import androidx.compose.foundation.text.input.KeyboardActionHandler
import androidx.compose.foundation.text.input.OutputTransformation
import androidx.compose.foundation.text.input.TextFieldDecorator
import androidx.compose.foundation.text.input.TextFieldLineLimits
import androidx.compose.foundation.text.input.TextFieldLineLimits.MultiLine
import androidx.compose.foundation.text.input.TextFieldLineLimits.SingleLine
import androidx.compose.foundation.text.input.TextFieldState
import androidx.compose.foundation.text.input.internal.CodepointTransformation
import androidx.compose.foundation.text.input.internal.SingleLineCodepointTransformation
import androidx.compose.foundation.text.input.internal.SingleLineOutputTransformation
import androidx.compose.foundation.text.input.internal.TextFieldCoreModifier
import androidx.compose.foundation.text.input.internal.TextFieldDecoratorModifier
import androidx.compose.foundation.text.input.internal.TextFieldTextLayoutModifier
import androidx.compose.foundation.text.input.internal.TextLayoutState
import androidx.compose.foundation.text.input.internal.TransformedTextFieldState
import androidx.compose.foundation.text.input.internal.collectIsDragAndDropHoveredAsState
import androidx.compose.foundation.text.input.internal.selection.TextFieldSelectionState
import androidx.compose.foundation.text.input.internal.selection.TextFieldSelectionState.InputType
import androidx.compose.foundation.text.input.internal.selection.TextToolbarHandler
import androidx.compose.foundation.text.input.internal.selection.TextToolbarState
import androidx.compose.foundation.text.input.internal.selection.addBasicTextFieldTextContextMenuComponents
import androidx.compose.foundation.text.input.internal.selection.menuItem
import androidx.compose.foundation.text.selection.SelectedTextType
import androidx.compose.foundation.text.selection.SelectionHandle
import androidx.compose.foundation.text.selection.rememberPlatformSelectionBehaviors
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 379–413)

            hapticFeedBack = currentHapticFeedback,
            clipboard = currentClipboard,
            density = density,
            enabled = enabled,
            readOnly = readOnly,
            isPassword = isPassword,
            showTextToolbar = textToolbarHandler,
        )
    }

    DisposableEffect(textFieldSelectionState) { onDispose { textFieldSelectionState.dispose() } }

    val overscrollEffect = rememberTextFieldOverscrollEffect()

    val handwritingEnabled =
        !isPassword &&
            keyboardOptions.keyboardType != KeyboardType.Password &&
            keyboardOptions.keyboardType != KeyboardType.NumberPassword
    val dragInputType = textFieldSelectionState.directDragGestureInitiator
    val decorationModifiers =
        modifier
            .stylusHandwriting(enabled, handwritingEnabled) {
                // If this is a password field, we can't trigger handwriting.
                // The expected behavior is 1) request focus 2) show software keyboard.
                // Note: TextField will show software keyboard automatically when it
                // gain focus. 3) show a toast message telling that handwriting is not
                // supported for password fields. TODO(b/335294152)
                if (handwritingEnabled) {
                    // Send the handwriting start signal to platform.
                    // The editor should send the signal when it is focused or is about
                    // to gain focus, Here are more details:
                    //   1) if the editor already has an active input session, the
                    //   platform handwriting service should already listen to this flow
                    //   and it'll start handwriting right away.
                    //

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-379-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 414–448)

                    //   2) if the editor is not focused, but it'll be focused and
                    //   create a new input session, one handwriting signal will be
                    //   replayed when the platform collect this flow. And the platform
                    //   should trigger handwriting accordingly.
                    stylusHandwritingTrigger.tryEmit(Unit)
                }
            }
            .then(
                // semantics + some focus + input session + touch to focus
                TextFieldDecoratorModifier(
                    textFieldState = transformedState,
                    textLayoutState = textLayoutState,
                    textFieldSelectionState = textFieldSelectionState,
                    filter = inputTransformation,
                    enabled = enabled,
                    readOnly = readOnly,
                    keyboardOptions = resolvedKeyboardOptions,
                    keyboardActionHandler = onKeyboardAction,
                    singleLine = singleLine,
                    interactionSource = interactionSource,
                    isPassword = isPassword,
                    stylusHandwritingTrigger = stylusHandwritingTrigger,
                )
            )
            .scrollable(
                state = scrollState,
                orientation = orientation,
                // Disable scroll only for touch; allow mouse-wheel scrolling while selecting
                enabled = enabled && (dragInputType != InputType.Touch),
                reverseDirection =
                    ScrollableDefaults.reverseDirection(
                        layoutDirection = layoutDirection,
                        orientation = orientation,
                        reverseScrolling = false,
                    ),

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-414-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 449–483)

                interactionSource = interactionSource,
                overscrollEffect = overscrollEffect,
            )
            .pointerHoverIcon(PointerIcon.Text)
            .addContextMenuComponents(textFieldSelectionState, coroutineScope)
            .textFieldOverlay(transformedState, keyboardOptions, interactionSource)

    Box(decorationModifiers, propagateMinConstraints = true) {
        ContextMenuArea(textFieldSelectionState, enabled) {
            val nonNullDecorator = decorator ?: DefaultTextFieldDecorator
            nonNullDecorator.Decoration {
                val isFocused by interactionSource.collectIsFocusedAsState()
                val isDragHovered by interactionSource.collectIsDragAndDropHoveredAsState()
                val windowInfo = LocalWindowInfo.current
                val isWindowAndTextFieldFocused by
                    remember(interactionSource, windowInfo) {
                        // Using derived state here to avoid recomposing when window focus is
                        // obtained after the initial focus.
                        computedStateOf { isFocused && windowInfo.isWindowFocused }
                    }

                rememberClipboardEventsHandler(
                    isEnabled = isFocused,
                    onPaste = { textFieldSelectionState.onPasteEvent(it) },
                    onCopy = { textFieldSelectionState.copyWithResult() },
                    onCut = { textFieldSelectionState.cutWithResult() },
                )

                val minLines: Int
                val maxLines: Int
                if (lineLimits is MultiLine) {
                    minLines = lineLimits.minHeightInLines
                    maxLines = lineLimits.maxHeightInLines
                } else {
                    minLines = 1

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-449-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 484–518)

                    maxLines = 1
                }

                @OptIn(ExperimentalFoundationApi::class)
                val textFieldSize =
                    if (isBasicTextFieldSizeOptimizationEnabled) {
                        Modifier.textFieldSize(
                            textStyle = textStyle,
                            singleLineHeightProvider = textLayoutState,
                            minLines = minLines,
                            maxLines = maxLines,
                            useSingleLineHeightProvider = singleLine,
                            unboundedWidth = singleLine,
                        )
                    } else {
                        Modifier.heightForSingleLineField(textLayoutState)
                            .heightInLines(
                                textStyle = textStyle,
                                minLines = minLines,
                                maxLines = maxLines,
                                softWrap = !singleLine,
                            )
                            .textFieldMinSize(textStyle)
                    }
                Box(
                    propagateMinConstraints = true,
                    modifier =
                        textFieldSize
                            .clipToBounds()
                            .then(
                                TextFieldCoreModifier(
                                    isFocused = isWindowAndTextFieldFocused,
                                    isDragHovered = isDragHovered,
                                    isTouchDragInProgress = dragInputType == InputType.Touch,
                                    textLayoutState = textLayoutState,

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-484-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 519–553)

                                    textFieldState = transformedState,
                                    textFieldSelectionState = textFieldSelectionState,
                                    cursorBrush = cursorBrush,
                                    writeable = enabled && !readOnly,
                                    scrollState = scrollState,
                                    orientation = orientation,
                                    toolbarRequester = toolbarRequester,
                                    platformSelectionBehaviors = platformSelectionBehaviors,
                                )
                            ),
                ) {
                    Box(
                        modifier =
                            TextFieldTextLayoutModifier(
                                textLayoutState = textLayoutState,
                                textFieldState = transformedState,
                                textStyle = textStyle,
                                singleLine = singleLine,
                                onTextLayout = onTextLayout,
                                keyboardOptions = resolvedKeyboardOptions,
                            )
                    )

                    if (
                        enabled &&
                            isWindowAndTextFieldFocused &&
                            textFieldSelectionState.isDirectTouchInteraction
                    ) {
                        TextFieldSelectionHandles(selectionState = textFieldSelectionState)
                        if (!readOnly) {
                            TextFieldCursorHandle(selectionState = textFieldSelectionState)
                        }
                    }
                }
            }

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-519-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 554–588)

        }
    }
}

/**
 * A modifier that can be used to determine the location and state of the text field. It is used on
 * multiplatform, where knowledge of the text field's state and location is required in order to
 * support platform-dependent features such as VoiceOver or Autofill (password autofill, one-time
 * codes, etc.).
 */
internal expect fun Modifier.textFieldOverlay(
    transformedState: TransformedTextFieldState,
    keyboardOptions: KeyboardOptions,
    interactionSource: InteractionSource,
): Modifier

@OptIn(ExperimentalFoundationApi::class)
private fun Modifier.heightForSingleLineField(textLayoutState: TextLayoutState) =
    if (ComposeFoundationFlags.isBasicTextFieldMinSizeOptimizationEnabled) {
        layout { measurable, constraints ->
            val height = textLayoutState.heightForSingleLineField
            val heightPx = height.roundToPx()
            val wrappedConstraints =
                constraints.constrain(
                    Constraints(
                        minWidth = 0,
                        maxWidth = Constraints.Infinity,
                        minHeight = heightPx,
                        maxHeight = if (height == 0.dp) Constraints.Infinity else heightPx,
                    )
                )

            val placeable = measurable.measure(wrappedConstraints)
            layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) }
        }

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-554-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 589–623)

    } else {
        val height = textLayoutState.heightForSingleLineField
        heightIn(min = height, max = if (height == 0.dp) Dp.Unspecified else height)
    }

@OptIn(ExperimentalFoundationApi::class)
private fun Modifier.addContextMenuComponents(
    textFieldSelectionState: TextFieldSelectionState,
    coroutineScope: CoroutineScope,
): Modifier =
    if (ComposeFoundationFlags.isNewContextMenuEnabled)
        addBasicTextFieldTextContextMenuComponents(textFieldSelectionState, coroutineScope)
    else this

@Composable
internal fun TextFieldCursorHandle(selectionState: TextFieldSelectionState) {
    // Does not recompose if only position of the handle changes.
    val cursorHandleVisible by
        remember(selectionState) {
            derivedStateOf { selectionState.getCursorHandleState(includePosition = false).visible }
        }
    if (cursorHandleVisible) {
        CursorHandle(
            offsetProvider = {
                selectionState.getCursorHandleState(includePosition = true).position
            },
            modifier =
                Modifier.pointerInput(selectionState) {
                    with(selectionState) { cursorHandleGestures() }
                },
            minTouchTargetSize = MinTouchTargetSizeForHandles,
        )
    }
}


Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-589-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 624–658)

@Composable
internal fun TextFieldSelectionHandles(selectionState: TextFieldSelectionState) {
    // Does not recompose if only position of the handle changes.
    val startHandleState by
        remember(selectionState) {
            derivedStateOf {
                selectionState.getSelectionHandleState(
                    isStartHandle = true,
                    includePosition = false,
                )
            }
        }
    // Read once here to avoid repeating derived state reads
    val startHandle = startHandleState
    if (startHandle.visible) {
        SelectionHandle(
            offsetProvider = {
                selectionState
                    .getSelectionHandleState(isStartHandle = true, includePosition = true)
                    .position
            },
            isStartHandle = true,
            direction = startHandle.direction,
            handlesCrossed = startHandle.handlesCrossed,
            modifier =
                Modifier.pointerInput(selectionState) {
                    with(selectionState) { selectionHandleGestures(true) }
                },
            lineHeight = startHandle.lineHeight,
            minTouchTargetSize = MinTouchTargetSizeForHandles,
        )
    }

    // Does not recompose if only position of the handle changes.
    val endHandleState by

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-624-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 65–99)

import androidx.compose.runtime.SideEffect
import androidx.compose.runtime.computedStateOf
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clipToBounds
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.input.pointer.PointerIcon
import androidx.compose.ui.input.pointer.pointerHoverIcon
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.layout
import androidx.compose.ui.platform.LocalClipboard
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalHapticFeedback
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.platform.LocalLocaleList
import androidx.compose.ui.platform.LocalTextToolbar
import androidx.compose.ui.platform.LocalWindowInfo
import androidx.compose.ui.platform.TextToolbarStatus
import androidx.compose.ui.text.TextLayoutResult
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.Dp

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-65-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 659–693)

        remember(selectionState) {
            derivedStateOf {
                selectionState.getSelectionHandleState(
                    isStartHandle = false,
                    includePosition = false,
                )
            }
        }
    // Read once here to avoid repeating derived state reads
    val endHandle = endHandleState
    if (endHandle.visible) {
        SelectionHandle(
            offsetProvider = {
                selectionState
                    .getSelectionHandleState(isStartHandle = false, includePosition = true)
                    .position
            },
            isStartHandle = false,
            direction = endHandle.direction,
            handlesCrossed = endHandle.handlesCrossed,
            modifier =
                Modifier.pointerInput(selectionState) {
                    with(selectionState) { selectionHandleGestures(false) }
                },
            lineHeight = endHandle.lineHeight,
            minTouchTargetSize = MinTouchTargetSizeForHandles,
        )
    }
}

private val DefaultTextFieldDecorator = TextFieldDecorator { it() }

/**
 * Defines a minimum touch target area size for Selection and Cursor handles.
 *

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-659-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 694–728)

 * Although BasicTextField is not part of Material spec, this accessibility feature is important
 * enough to be included at foundation layer, and also TextField cannot change selection handles
 * provided by BasicTextField to somehow achieve this accessibility requirement.
 *
 * This value is adopted from Android platform's TextView implementation.
 */
private val MinTouchTargetSizeForHandles
    get() = DpSize(40.dp, 40.dp)

/**
 * Basic composable that enables users to edit text via hardware or software keyboard, but provides
 * no decorations like hint or placeholder.
 *
 * Whenever the user edits the text, [onValueChange] is called with the most up to date state
 * represented by [String] with which developer is expected to update their state.
 *
 * Unlike [TextFieldValue] overload, this composable does not let the developer control selection,
 * cursor and text composition information. Please check [TextFieldValue] and corresponding
 * [BasicTextField] overload for more information.
 *
 * It is crucial that the value provided to the [onValueChange] is fed back into [BasicTextField] in
 * order to actually display and continue to edit that text in the field. The value you feed back
 * into the field may be different than the one provided to the [onValueChange] callback, however
 * the following caveats apply:
 * - The new value must be provided to [BasicTextField] immediately (i.e. by the next frame), or the
 *   text field may appear to glitch, e.g. the cursor may jump around. For more information about
 *   this requirement, see
 *   [this article](https://developer.android.com/jetpack/compose/text/user-input#state-practices).
 * - The value fed back into the field may be different from the one passed to [onValueChange],
 *   although this may result in the input connection being restarted, which can make the keyboard
 *   flicker for the user. This is acceptable when you're using the callback to, for example, filter
 *   out certain types of input, but should probably not be done on every update when entering
 *   freeform text.
 *
 * This composable provides basic text editing functionality, however does not include any

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-694-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 729–763)

 * decorations such as borders, hints/placeholder. A design system based implementation such as
 * Material Design Filled text field is typically what is needed to cover most of the needs. This
 * composable is designed to be used when a custom implementation for different design system is
 * needed.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.samples.BasicTextFieldWithStringSample
 *
 * For example, if you need to include a placeholder in your TextField, you can write a composable
 * using the decoration box like this:
 *
 * @sample androidx.compose.foundation.samples.PlaceholderBasicTextFieldSample
 *
 * If you want to add decorations to your text field, such as icon or similar, and increase the hit
 * target area, use the decoration box:
 *
 * @sample androidx.compose.foundation.samples.TextFieldWithIconSample
 *
 * In order to create formatted text field, for example for entering a phone number or a social
 * security number, use a [visualTransformation] parameter. Below is the example of the text field
 * for entering a credit card number:
 *
 * @sample androidx.compose.foundation.samples.CreditCardSample
 *
 * Note: This overload does not support [KeyboardOptions.showKeyboardOnFocus].
 *
 * @param value the input [String] text to be shown in the text field
 * @param onValueChange the callback that is triggered when the input service updates the text. An
 *   updated text comes as a parameter of the callback
 * @param modifier optional [Modifier] for this text field.
 * @param enabled controls the enabled state of the [BasicTextField]. When `false`, the text field
 *   will be neither editable nor focusable, the input of the text field will not be selectable
 * @param readOnly controls the editable state of the [BasicTextField]. When `true`, the text field
 *   can not be modified, however, a user can focus it and copy text from it. Read-only text fields

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-729-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 764–789)

 *   are usually used to display pre-filled forms that user can not edit
 * @param textStyle Style configuration that applies at character level such as color, font etc.
 * @param keyboardOptions software keyboard options that contains configuration such as
 *   [KeyboardType] and [ImeAction].
 * @param keyboardActions when the input service emits an IME action, the corresponding callback is
 *   called. Note that this IME action may be different from what you specified in
 *   [KeyboardOptions.imeAction].
 * @param singleLine when set to true, this text field becomes a single horizontally scrolling text
 *   field instead of wrapping onto multiple lines. The keyboard will be informed to not show the
 *   return key as the [ImeAction]. [maxLines] and [minLines] are ignored as both are automatically
 *   set to 1.
 * @param maxLines the maximum height in terms of maximum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
 * @param minLines the minimum height in terms of minimum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
 * @param visualTransformation The visual transformation filter for changing the visual
 *   representation of the input. By default no visual transformation is applied.
 * @param onTextLayout Callback that is executed when a new text layout is calculated. A
 *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
 *   text, baselines and other details. The callback can be used to add additional decoration or
 *   functionality to the text. For example, to draw a cursor or selection around the text.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this text field. You can use this to change the text field's
 *   appearance or preview the text field in different states. Note that if `null` is provided,
 *   interactions will still happen internally.
 * @param cursorBrush [Brush] to paint cursor with. If [SolidColor] with [Color.Unspecified]

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-764-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 790–824)

 *   provided, there will be no cursor drawn
 * @param decorationBox Composable lambda that allows to add decorations around text field, such as
 *   icon, placeholder, helper messages or similar, and automatically increase the hit target area
 *   of the text field. To allow you to control the placement of the inner text field relative to
 *   your decorations, the text field implementation will pass in a framework-controlled composable
 *   parameter "innerTextField" to the decorationBox lambda you provide. You must call
 *   innerTextField exactly once.
 */
@Deprecated(
    "Use the BasicTextField(state: TextFieldState, ...) overload instead. To migrate: " +
        "create a TextFieldState via rememberTextFieldState(initialText) in composition or " +
        "TextFieldState(initialText) in a state holder; read text from state.text and update " +
        "it programmatically via state.edit { ... } or state.setTextAndPlaceCursorAtEnd(text); " +
        "observe text changes for side effects via snapshotFlow { state.text }.collect { ... }; " +
        "and replace onValueChange input filtering with InputTransformation, visualTransformation " +
        "with OutputTransformation (or BasicSecureTextField for passwords), singleLine/maxLines/" +
        "minLines with TextFieldLineLimits, decorationBox with TextFieldDecorator, and " +
        "keyboardActions with KeyboardActionHandler. See " +
        "https://developer.android.com/develop/ui/compose/text/migrate-state-based for full " +
        "migration guidance."
)
@Composable
public fun BasicTextField(
    value: String,
    onValueChange: (String) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    textStyle: TextStyle = TextStyle.Default,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    keyboardActions: KeyboardActions = KeyboardActions.Default,
    singleLine: Boolean = false,
    maxLines: Int = if (singleLine) 1 else Int.MAX_VALUE,
    minLines: Int = 1,
    visualTransformation: VisualTransformation = VisualTransformation.None,

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-790-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 825–859)

    onTextLayout: (TextLayoutResult) -> Unit = {},
    interactionSource: MutableInteractionSource? = null,
    cursorBrush: Brush = SolidColor(Color.Black),
    decorationBox: @Composable (innerTextField: @Composable () -> Unit) -> Unit =
        @Composable { innerTextField -> innerTextField() },
) {
    // Holds the latest internal TextFieldValue state. We need to keep it to have the correct value
    // of the composition.
    var textFieldValueState by remember { mutableStateOf(TextFieldValue(text = value)) }
    // Holds the latest TextFieldValue that BasicTextField was recomposed with. We couldn't simply
    // pass `TextFieldValue(text = value)` to the CoreTextField because we need to preserve the
    // composition.
    val textFieldValue = textFieldValueState.copy(text = value)

    SideEffect {
        if (
            textFieldValue.selection != textFieldValueState.selection ||
                textFieldValue.composition != textFieldValueState.composition
        ) {
            textFieldValueState = textFieldValue
        }
    }
    // Last String value that either text field was recomposed with or updated in the onValueChange
    // callback. We keep track of it to prevent calling onValueChange(String) for same String when
    // CoreTextField's onValueChange is called multiple times without recomposition in between.
    var lastTextValue by remember(value) { mutableStateOf(value) }

    CoreTextField(
        value = textFieldValue,
        onValueChange = { newTextFieldValueState ->
            textFieldValueState = newTextFieldValueState

            val stringChangedSinceLastInvocation = lastTextValue != newTextFieldValueState.text
            lastTextValue = newTextFieldValueState.text


Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-825-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 860–894)

            if (stringChangedSinceLastInvocation) {
                onValueChange(newTextFieldValueState.text)
            }
        },
        modifier = modifier,
        textStyle = textStyle,
        visualTransformation = visualTransformation,
        onTextLayout = onTextLayout,
        interactionSource = interactionSource,
        cursorBrush = cursorBrush,
        imeOptions = keyboardOptions.toImeOptions(singleLine = singleLine),
        keyboardActions = keyboardActions,
        softWrap = !singleLine,
        minLines = if (singleLine) 1 else minLines,
        maxLines = if (singleLine) 1 else maxLines,
        decorationBox = decorationBox,
        enabled = enabled,
        readOnly = readOnly,
    )
}

/**
 * Basic composable that enables users to edit text via hardware or software keyboard, but provides
 * no decorations like hint or placeholder.
 *
 * Whenever the user edits the text, [onValueChange] is called with the most up to date state
 * represented by [TextFieldValue]. [TextFieldValue] contains the text entered by user, as well as
 * selection, cursor and text composition information. Please check [TextFieldValue] for the
 * description of its contents.
 *
 * It is crucial that the value provided to the [onValueChange] is fed back into [BasicTextField] in
 * order to actually display and continue to edit that text in the field. The value you feed back
 * into the field may be different than the one provided to the [onValueChange] callback, however
 * the following caveats apply:
 * - The new value must be provided to [BasicTextField] immediately (i.e. by the next frame), or the

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-860-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 895–929)

 *   text field may appear to glitch, e.g. the cursor may jump around. For more information about
 *   this requirement, see
 *   [this article](https://developer.android.com/jetpack/compose/text/user-input#state-practices).
 * - The value fed back into the field may be different from the one passed to [onValueChange],
 *   although this may result in the input connection being restarted, which can make the keyboard
 *   flicker for the user. This is acceptable when you're using the callback to, for example, filter
 *   out certain types of input, but should probably not be done on every update when entering
 *   freeform text.
 *
 * This composable provides basic text editing functionality, however does not include any
 * decorations such as borders, hints/placeholder. A design system based implementation such as
 * Material Design Filled text field is typically what is needed to cover most of the needs. This
 * composable is designed to be used when a custom implementation for different design system is
 * needed.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.samples.BasicTextFieldSample
 *
 * For example, if you need to include a placeholder in your TextField, you can write a composable
 * using the decoration box like this:
 *
 * @sample androidx.compose.foundation.samples.PlaceholderBasicTextFieldSample
 *
 * If you want to add decorations to your text field, such as icon or similar, and increase the hit
 * target area, use the decoration box:
 *
 * @sample androidx.compose.foundation.samples.TextFieldWithIconSample
 *
 * Note: This overload does not support [KeyboardOptions.showKeyboardOnFocus].
 *
 * @param value The [androidx.compose.ui.text.input.TextFieldValue] to be shown in the
 *   [BasicTextField].
 * @param onValueChange Called when the input service updates the values in [TextFieldValue].
 * @param modifier optional [Modifier] for this text field.

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-895-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 930–954)

 * @param enabled controls the enabled state of the [BasicTextField]. When `false`, the text field
 *   will be neither editable nor focusable, the input of the text field will not be selectable
 * @param readOnly controls the editable state of the [BasicTextField]. When `true`, the text field
 *   can not be modified, however, a user can focus it and copy text from it. Read-only text fields
 *   are usually used to display pre-filled forms that user can not edit
 * @param textStyle Style configuration that applies at character level such as color, font etc.
 * @param keyboardOptions software keyboard options that contains configuration such as
 *   [KeyboardType] and [ImeAction].
 * @param keyboardActions when the input service emits an IME action, the corresponding callback is
 *   called. Note that this IME action may be different from what you specified in
 *   [KeyboardOptions.imeAction].
 * @param singleLine when set to true, this text field becomes a single horizontally scrolling text
 *   field instead of wrapping onto multiple lines. The keyboard will be informed to not show the
 *   return key as the [ImeAction]. [maxLines] and [minLines] are ignored as both are automatically
 *   set to 1.
 * @param maxLines the maximum height in terms of maximum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
 * @param minLines the minimum height in terms of minimum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines]. This parameter is ignored when [singleLine] is true.
 * @param visualTransformation The visual transformation filter for changing the visual
 *   representation of the input. By default no visual transformation is applied.
 * @param onTextLayout Callback that is executed when a new text layout is calculated. A
 *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
 *   text, baselines and other details. The callback can be used to add additional decoration or
 *   functionality to the text. For example, to draw a cursor or selection around the text.

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-930-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 955–985)

 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this text field. You can use this to change the text field's
 *   appearance or preview the text field in different states. Note that if `null` is provided,
 *   interactions will still happen internally.
 * @param cursorBrush [Brush] to paint cursor with. If [SolidColor] with [Color.Unspecified]
 *   provided, there will be no cursor drawn
 * @param decorationBox Composable lambda that allows to add decorations around text field, such as
 *   icon, placeholder, helper messages or similar, and automatically increase the hit target area
 *   of the text field. To allow you to control the placement of the inner text field relative to
 *   your decorations, the text field implementation will pass in a framework-controlled composable
 *   parameter "innerTextField" to the decorationBox lambda you provide. You must call
 *   innerTextField exactly once.
 */
@Suppress("DeprecatedCallableAddReplaceWith")
@Deprecated(
    "Use the BasicTextField(state: TextFieldState, ...) overload instead. To migrate: " +
        "create a TextFieldState via rememberTextFieldState(initialText, initialSelection) in " +
        "composition or TextFieldState(initialText, initialSelection) in a state holder; read " +
        "text and selection from state.text and state.selection, and update them programmatically " +
        "via state.edit { ... } or state.setTextAndPlaceCursorAtEnd(text); observe changes for " +
        "side effects via snapshotFlow { state.text }.collect { ... }; and replace onValueChange " +
        "input filtering with InputTransformation, visualTransformation with OutputTransformation " +
        "(or BasicSecureTextField for passwords), singleLine/maxLines/minLines with " +
        "TextFieldLineLimits, decorationBox with TextFieldDecorator, and keyboardActions with " +
        "KeyboardActionHandler. See " +
        "https://developer.android.com/develop/ui/compose/text/migrate-state-based for full " +
        "migration guidance."
)
@Composable
public fun BasicTextField(
    value: TextFieldValue,

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-955-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 986–1020)

    onValueChange: (TextFieldValue) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    textStyle: TextStyle = TextStyle.Default,
    keyboardOptions: KeyboardOptions = KeyboardOptions.Default,
    keyboardActions: KeyboardActions = KeyboardActions.Default,
    singleLine: Boolean = false,
    maxLines: Int = if (singleLine) 1 else Int.MAX_VALUE,
    minLines: Int = 1,
    visualTransformation: VisualTransformation = VisualTransformation.None,
    onTextLayout: (TextLayoutResult) -> Unit = {},
    interactionSource: MutableInteractionSource? = null,
    cursorBrush: Brush = SolidColor(Color.Black),
    decorationBox: @Composable (innerTextField: @Composable () -> Unit) -> Unit =
        @Composable { innerTextField -> innerTextField() },
) {
    CoreTextField(
        value = value,
        onValueChange = {
            if (value != it) {
                onValueChange(it)
            }
        },
        modifier = modifier,
        textStyle = textStyle,
        visualTransformation = visualTransformation,
        onTextLayout = onTextLayout,
        interactionSource = interactionSource,
        cursorBrush = cursorBrush,
        imeOptions = keyboardOptions.toImeOptions(singleLine = singleLine),
        keyboardActions = keyboardActions,
        softWrap = !singleLine,
        minLines = if (singleLine) 1 else minLines,
        maxLines = if (singleLine) 1 else maxLines,

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-986-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)
