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
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 1
    endLine: 35
    sha256: 9f5b00fa5c849e4a66aac34e8e4860aa2fc300c865062475a4d040893855e43a
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
      import androidx.compose.foundation.overscroll
      import androidx.compose.foundation.rememberScrollState
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1014-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 1014
    endLine: 1048
    sha256: 7a303ecf692204794941e2afdb1518bdab9eb2853fb103af2932139f9bbc050e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1049-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 1049
    endLine: 1083
    sha256: 00296a21839b09b92bbf9c98a98d034876da3711252dc10d228069b6d3b3e164
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          BasicTextField(
              value = value,
              onValueChange = onValueChange,
              modifier = modifier,
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1084-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 1084
    endLine: 1108
    sha256: cb05a349cd77472560129f6c39ebabacd2aaff8e5a7b6994cdfc7304038b46ae
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-134-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 134
    endLine: 164
    sha256: 7fde8249bfefa70f17d78b8fcb33cbd05feefc9cc76b6aa0faaaa558268e53ac
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param modifier for this layout
       * @param enabled controls enabled state. If false, field is not editable, focusable, or selectable
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-165-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 165
    endLine: 199
    sha256: bf592a923e32ac997b5957b7a9139e9bf3ab6b8deabcfe67a9757b28699b8630
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Composable
      public fun BasicTextField(
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-200-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 200
    endLine: 234
    sha256: 82020c5933b52d45e7bb26d81727e2228d720e72006cbb464f4df5f323ff0301
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              decorator = decorator,
              scrollState = scrollState,
              isPassword = false,
          )
      }

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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-235-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 235
    endLine: 269
    sha256: 136e51df924750d410109e6032f0ac428a9d9013fcb6bcac497d183afee7c726
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ) {
          val density = LocalDensity.current
          val layoutDirection = LocalLayoutDirection.current
          val singleLine = lineLimits == SingleLine
          // We're using this to communicate focus state to cursor for now.
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-270-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 270
    endLine: 304
    sha256: 6765e2459caca4e4c92763b0890c80dfd15739a400af376f2e6f896d31c85d8b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      )
                  } else {
                      // First prefer provided codepointTransformation if not null, e.g.
                      // BasicSecureTextField would send PasswordTransformation. Second, apply a
                      // SingleLineCodepointTransformation if text field is configured to be single line.
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-305-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 305
    endLine: 339
    sha256: 0b928ef565fd8c3567ba4bbd08a23d7de6c01e8ed5014fadf6031a0bd0dbbdf4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
          val toolbarRequester = remember { ToolbarRequesterImpl() }
          val currentClipboard = LocalClipboard.current
          val textFieldSelectionState =
              remember(transformedState) {
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-340-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 340
    endLine: 374
    sha256: c646beb12691ab13a8792ec43b7e6246403ab8319f638ddedfbeca6edfe74a00
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                              copy()
                                          }
                                      },
                                  onPasteRequested =
                                      menuItem(canShowPasteMenuItem(), TextToolbarState.None) {
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 36
    endLine: 63
    sha256: 0f7323c36ffa745ff7d15d42849d9f5483a005fb208a022279f7e8b14adcabcf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.foundation.text.contextmenu.modifier.ToolbarRequesterImpl
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-375-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 375
    endLine: 409
    sha256: 415b666b38aad596bf48dc64be4814e41a109f82f78b086144a82260e0106500
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              // These properties are not backed by snapshot state, so they can't be updated directly in
              // composition.
              transformedState.update(inputTransformation)

              textFieldSelectionState.update(
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-410-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 410
    endLine: 444
    sha256: 98a25c8329a8577aac7540284b64c14799a41b568e2add262a9ba867cf500076
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          // to gain focus, Here are more details:
                          //   1) if the editor already has an active input session, the
                          //   platform handwriting service should already listen to this flow
                          //   and it'll start handwriting right away.
                          //
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-445-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 445
    endLine: 479
    sha256: f1ccef5c3cd46cb56941ad69457803542b8341d8e3bb9be9cdbc9875d67185b8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          ScrollableDefaults.reverseDirection(
                              layoutDirection = layoutDirection,
                              orientation = orientation,
                              reverseScrolling = false,
                          ),
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-480-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 480
    endLine: 514
    sha256: a00a2e37111b1e952fe0c54b6cecd01a00f591d876f2ad87d41d240b3acf918d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      if (lineLimits is MultiLine) {
                          minLines = lineLimits.minHeightInLines
                          maxLines = lineLimits.maxHeightInLines
                      } else {
                          minLines = 1
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
                                  .overscroll(overscrollEffect)
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-515-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 515
    endLine: 549
    sha256: 2468f942e9b9f4b48af5e6d402b63735ebcb135c87ed6a24eb50520d64429066
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  .then(
                                      TextFieldCoreModifier(
                                          isFocused = isWindowAndTextFieldFocused,
                                          isDragHovered = isDragHovered,
                                          isTouchDragInProgress = dragInputType == InputType.Touch,
                                          textLayoutState = textLayoutState,
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-550-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 550
    endLine: 584
    sha256: 408f4e2f082ca2bc322b75f93c6ea0f164f2f5fed7bd2ae20e3a71153dd2678a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              if (!readOnly) {
                                  TextFieldCursorHandle(selectionState = textFieldSelectionState)
                              }
                          }
                      }
                  }
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-585-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 585
    endLine: 619
    sha256: e8044202b35937b62904c014a2220bf794d9d4911bc1f126320572396ee43ee4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          )
                      )

                  val placeable = measurable.measure(wrappedConstraints)
                  layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) }
              }
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-620-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 620
    endLine: 654
    sha256: e7829e6774619fcb384dce0de4da82a283473cf0129f49b71e1e401844b0ede3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      },
                  minTouchTargetSize = MinTouchTargetSizeForHandles,
              )
          }
      }

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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-64-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 64
    endLine: 98
    sha256: d801619a0e06742aab1b47ed40d84bc5e477d61ae5ceb3b0e813fd05aded3aa2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.DisposableEffect
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-655-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 655
    endLine: 689
    sha256: ace85fe9fa84a5d66c538c23b2a46f1e464f879107f3bc541fe97c65c470ba5b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  minTouchTargetSize = MinTouchTargetSizeForHandles,
              )
          }

          // Does not recompose if only position of the handle changes.
          val endHandleState by
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-690-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 690
    endLine: 724
    sha256: fa32623ec992c1e649fe01d7fbe39b1c512bab9d39b30ac8735c34a89f8d9624
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      private val DefaultTextFieldDecorator = TextFieldDecorator { it() }

      /**
       * Defines a minimum touch target area size for Selection and Cursor handles.
       *
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-725-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 725
    endLine: 759
    sha256: fd75b472e91737aaa9b3fe8cf1932e16e9f5535a97d075165fc9915460ca4143
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-760-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 760
    endLine: 785
    sha256: ce5e7b5b0ffb82fb46c422606b4510f1e7973458726e0d9f4200ad9a5a5d2525
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   updated text comes as a parameter of the callback
       * @param modifier optional [Modifier] for this text field.
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-786-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 786
    endLine: 817
    sha256: 1546a52910a516a3da02191f2cc7a2d72161e1718db3d574da5f12495afb5c17
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   functionality to the text. For example, to draw a cursor or selection around the text.
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-818-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 818
    endLine: 852
    sha256: 1d8d9e9e3fa0046191e2f87dd84cd5373a44be31a794d6af3d7db399c573aa9b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-853-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 853
    endLine: 887
    sha256: bd227e9294585e3c1dc5fe0ccc60527ddef40dd66078fc2a92dd51f916d29892
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          CoreTextField(
              value = textFieldValue,
              onValueChange = { newTextFieldValueState ->
                  textFieldValueState = newTextFieldValueState

                  val stringChangedSinceLastInvocation = lastTextValue != newTextFieldValueState.text
                  lastTextValue = newTextFieldValueState.text

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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-888-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 888
    endLine: 922
    sha256: 9f9b08f48316d9f6f62f7fab48098e273cd051e1639c3bd3e45320e3db7e664e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * represented by [TextFieldValue]. [TextFieldValue] contains the text entered by user, as well as
       * selection, cursor and text composition information. Please check [TextFieldValue] for the
       * description of its contents.
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-923-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 923
    endLine: 952
    sha256: 7a15febe2f5f4522261fd805d9535dea972234c88bca65f4ef89f782c13af711
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @sample androidx.compose.foundation.samples.TextFieldWithIconSample
       *
       * Note: This overload does not support [KeyboardOptions.showKeyboardOnFocus].
       *
       * @param value The [androidx.compose.ui.text.input.TextFieldValue] to be shown in the
       *   [BasicTextField].
       * @param onValueChange Called when the input service updates the values in [TextFieldValue].
       * @param modifier optional [Modifier] for this text field.
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-953-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 953
    endLine: 978
    sha256: 805d3c8b86aea49d373f75e511006a2671ee4c2b890d6ce41a4f91ed5c9069f8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param onTextLayout Callback that is executed when a new text layout is calculated. A
       *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
       *   text, baselines and other details. The callback can be used to add additional decoration or
       *   functionality to the text. For example, to draw a cursor or selection around the text.
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-979-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 979
    endLine: 1013
    sha256: 0ec31980427110f69d1956d541283f0ca4a47df0f7944d06c18e4a92d3a9a329
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              "(or BasicSecureTextField for passwords), singleLine/maxLines/minLines with " +
              "TextFieldLineLimits, decorationBox with TextFieldDecorator, and keyboardActions with " +
              "KeyboardActionHandler. See " +
              "https://developer.android.com/develop/ui/compose/text/migrate-state-based for full " +
              "migration guidance."
      )
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
  - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-99-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt
    startLine: 99
    endLine: 133
    sha256: f7d77107351c46d53750a471bb33642cf7e776e94fc377c47b4d24c843c434f1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.Dp
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
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1014
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 1014–1048)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1014-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1049
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 1049–1083)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1049-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1084
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 1084–1108)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1084-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-134
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 134–164)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-134-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-165
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 165–199)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-165-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-200
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 200–234)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-200-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-235
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 235–269)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-235-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-270
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 270–304)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-270-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-305
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 305–339)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-305-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-340
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 340–374)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-340-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-36
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 36–63)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-375
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 375–409)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-375-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-410
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 410–444)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-410-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-445
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 445–479)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-445-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-480
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 480–514)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-480-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-515
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 515–549)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-515-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-550
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 550–584)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-550-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-585
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 585–619)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-585-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-620
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 620–654)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-620-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-64
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 64–98)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-64-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-655
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 655–689)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-655-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-690
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 690–724)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-690-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-725
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 725–759)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-725-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-760
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 760–785)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-760-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-786
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 786–817)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-786-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-818
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 818–852)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-818-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-853
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 853–887)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-853-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-888
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 888–922)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-888-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-923
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 923–952)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-923-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-953
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 953–978)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-953-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-979
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 979–1013)
      aliases:
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-979-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictextfield-lines-99
      title: androidx.compose.foundation.text BasicTextField.kt source (lines 99–133)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictextfield-lines-99-source
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
import androidx.compose.foundation.overscroll
import androidx.compose.foundation.rememberScrollState

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 1014–1048)

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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1014-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 1049–1083)

    BasicTextField(
        value = value,
        onValueChange = onValueChange,
        modifier = modifier,
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1049-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 1084–1108)

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


Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-1084-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 134–164)

 * @param modifier for this layout
 * @param enabled controls enabled state. If false, field is not editable, focusable, or selectable
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-134-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 165–199)

@Composable
public fun BasicTextField(
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-165-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 200–234)

        decorator = decorator,
        scrollState = scrollState,
        isPassword = false,
    )
}

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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-200-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 235–269)

) {
    val density = LocalDensity.current
    val layoutDirection = LocalLayoutDirection.current
    val singleLine = lineLimits == SingleLine
    // We're using this to communicate focus state to cursor for now.
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-235-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 270–304)

                )
            } else {
                // First prefer provided codepointTransformation if not null, e.g.
                // BasicSecureTextField would send PasswordTransformation. Second, apply a
                // SingleLineCodepointTransformation if text field is configured to be single line.
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-270-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 305–339)

        }
    val toolbarRequester = remember { ToolbarRequesterImpl() }
    val currentClipboard = LocalClipboard.current
    val textFieldSelectionState =
        remember(transformedState) {
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-305-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 340–374)

                                        copy()
                                    }
                                },
                            onPasteRequested =
                                menuItem(canShowPasteMenuItem(), TextToolbarState.None) {
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-340-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 36–63)

import androidx.compose.foundation.text.contextmenu.modifier.ToolbarRequesterImpl
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 375–409)

        // These properties are not backed by snapshot state, so they can't be updated directly in
        // composition.
        transformedState.update(inputTransformation)

        textFieldSelectionState.update(
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-375-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 410–444)

                    // to gain focus, Here are more details:
                    //   1) if the editor already has an active input session, the
                    //   platform handwriting service should already listen to this flow
                    //   and it'll start handwriting right away.
                    //
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-410-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 445–479)

                    ScrollableDefaults.reverseDirection(
                        layoutDirection = layoutDirection,
                        orientation = orientation,
                        reverseScrolling = false,
                    ),
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-445-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 480–514)

                if (lineLimits is MultiLine) {
                    minLines = lineLimits.minHeightInLines
                    maxLines = lineLimits.maxHeightInLines
                } else {
                    minLines = 1
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
                            .overscroll(overscrollEffect)

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-480-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 515–549)

                            .then(
                                TextFieldCoreModifier(
                                    isFocused = isWindowAndTextFieldFocused,
                                    isDragHovered = isDragHovered,
                                    isTouchDragInProgress = dragInputType == InputType.Touch,
                                    textLayoutState = textLayoutState,
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-515-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 550–584)

                        if (!readOnly) {
                            TextFieldCursorHandle(selectionState = textFieldSelectionState)
                        }
                    }
                }
            }
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-550-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 585–619)

                    )
                )

            val placeable = measurable.measure(wrappedConstraints)
            layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) }
        }
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-585-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 620–654)

                },
            minTouchTargetSize = MinTouchTargetSizeForHandles,
        )
    }
}

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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-620-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 64–98)

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-64-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 655–689)

            minTouchTargetSize = MinTouchTargetSizeForHandles,
        )
    }

    // Does not recompose if only position of the handle changes.
    val endHandleState by
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-655-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 690–724)


private val DefaultTextFieldDecorator = TextFieldDecorator { it() }

/**
 * Defines a minimum touch target area size for Selection and Cursor handles.
 *
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-690-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 725–759)

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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-725-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 760–785)

 *   updated text comes as a parameter of the callback
 * @param modifier optional [Modifier] for this text field.
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-760-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 786–817)

 *   functionality to the text. For example, to draw a cursor or selection around the text.
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-786-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 818–852)

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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-818-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 853–887)


    CoreTextField(
        value = textFieldValue,
        onValueChange = { newTextFieldValueState ->
            textFieldValueState = newTextFieldValueState

            val stringChangedSinceLastInvocation = lastTextValue != newTextFieldValueState.text
            lastTextValue = newTextFieldValueState.text

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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-853-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 888–922)

 * represented by [TextFieldValue]. [TextFieldValue] contains the text entered by user, as well as
 * selection, cursor and text composition information. Please check [TextFieldValue] for the
 * description of its contents.
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-888-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 923–952)

 *
 * @sample androidx.compose.foundation.samples.TextFieldWithIconSample
 *
 * Note: This overload does not support [KeyboardOptions.showKeyboardOnFocus].
 *
 * @param value The [androidx.compose.ui.text.input.TextFieldValue] to be shown in the
 *   [BasicTextField].
 * @param onValueChange Called when the input service updates the values in [TextFieldValue].
 * @param modifier optional [Modifier] for this text field.
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-923-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 953–978)

 * @param onTextLayout Callback that is executed when a new text layout is calculated. A
 *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
 *   text, baselines and other details. The callback can be used to add additional decoration or
 *   functionality to the text. For example, to draw a cursor or selection around the text.
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-953-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 979–1013)

        "(or BasicSecureTextField for passwords), singleLine/maxLines/minLines with " +
        "TextFieldLineLimits, decorationBox with TextFieldDecorator, and keyboardActions with " +
        "KeyboardActionHandler. See " +
        "https://developer.android.com/develop/ui/compose/text/migrate-state-based for full " +
        "migration guidance."
)
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-979-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)

## androidx.compose.foundation.text BasicTextField.kt source (lines 99–133)

import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.Dp
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

Sources: [live-androidx-foundation-foundation-foundation-text-basictextfield-lines-99-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicTextField.kt)
