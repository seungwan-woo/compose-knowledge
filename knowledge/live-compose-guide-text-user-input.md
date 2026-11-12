---
type: reference
title: Configure text fields
description: "Public source: https://developer.android.com/develop/ui/compose/text/user-input"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-text-user-input-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#additional-resources
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: f381102c471e8b872ba4e8d9bbc6e6b2c774ce98fe8642bb7823b4122504bf5d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Auto-format a phone number in a text field

      Show or hide password based on a user toggle

      Validate input as the user types
  - id: live-compose-guide-text-user-input-chain-input-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#chain-input
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: 7c8404d0af9676284a5f83f48cdf5523e82b24bdaab562c5b062af8c7236e5e3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To add multiple filters on your text input, chain InputTransformations using the then extension function. Filters are executed sequentially. As a best practice, apply the most selective filters first to avoid unnecessary transformations on data that would ultimately be filtered out.

      TextField(
          state = rememberTextFieldState(),
          inputTransformation = InputTransformation.maxLength(6)
              .then(CustomInputTransformation()),
      )StateBasedText.kt

      After adding input transformations, the TextField input accepts 10 digits maximum.
  - id: live-compose-guide-text-user-input-choose-textfield-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#choose-textfield
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: ce50f014cf4855fa3f9b1b9a263f890cc30284157fb47e49374b9fe3b66ab05d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are two levels of TextField implementation:

      TextField is the Material Design implementation. We recommend you choose this implementation as it follows Material Design guidelines: Default styling is filled OutlinedTextField is the outlined styling version

      BasicTextField enables users to edit text using the hardware or software keyboard, but provides no decorations like hint or placeholder.

      TextField(
          state = rememberTextFieldState(initialText = "Hello"),
          label = { Text("Label") }
      )StateBasedText.kt

      OutlinedTextField(
          state = rememberTextFieldState(),
          label = { Text("Label") }
      )StateBasedText.kt
  - id: live-compose-guide-text-user-input-create-secure-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#create-secure
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: 377bd0ba03d33dd540e960befd2b7fa1e977ec309f7ead5d92e706b1d6509e60
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      SecureTextField is a composable built on top of state-based text fields for writing a password field. We recommend using SecureTextField for creating password text fields, as it hides character input by default and disables cut and copy actions.

      SecureTextField has a textObfuscationMode, which controls how the user sees character input. textObfuscationMode has the following options:

      Hidden: Hides all input. Default behavior on desktop platforms.

      Visible: Shows all input.

      RevealLastTyped: Hides all input except the last character. Default behavior on mobile devices.
  - id: live-compose-guide-text-user-input-custom-input-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#custom-input
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: 100e7691348825c2d24608d111088523126d4df04fefdde72ed0672835559b0c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      InputTransformation is a single function interface. When implementing your custom InputTransformation, you need to override TextFieldBuffer.transformInput:

      class CustomInputTransformation : InputTransformation {
          override fun TextFieldBuffer.transformInput() {
          }
      }StateBasedText.kt

      For a phone number, add a custom input transformation that only allows digits to be typed into the TextField:

      class DigitOnlyInputTransformation : InputTransformation {
          override fun TextFieldBuffer.transformInput() {
              if (!asCharSequence().isDigitsOnly()) {
                  revertAllChanges()
              }
          }
      }StateBasedText.kt
  - id: live-compose-guide-text-user-input-define-logic-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#define-logic
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: 4919ce053c402102aaca4de29f618f5cfc3395546b4b1759d49dd2f29e5582b3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: enter their password. To make sure that the default focus-switching behavior inherent to ImeAction.Next is retained alongside this custom validation logic, the performDefaultAction() function is invoked. Calling performDefaultAction() implicitly triggers the underlying focus management system to move the focus to the next appropriate UI element, preserving the expected navigational flow.
  - id: live-compose-guide-text-user-input-define-logic-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#define-logic
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: e2f8ec963ed340b6026b8c940e5f7a7950432324927f8a3a72b46a98da81c4ac
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The action button on Android's software keyboard allows for interactive responses within your application. For more information about configuring the action button, see the Set keyboard options section.

      Figure 5.

      Software keyboard action button.

      To define what occurs when a user taps this action button, use the onKeyboardAction parameter. This parameter accepts an optional functional interface named KeyboardActionHandler. The KeyboardActionHandler interface contains a single method, onKeyboardAction(performDefaultAction: () -> Unit). By providing an implementation for this onKeyboardAction method, you can introduce custom logic that executes when a user presses the keyboard's action button.

      Several standard keyboard action types come with built-in default behaviors. For example, selecting ImeAction.Next or ImeAction.Previous as the action type will, by default, shift focus to the subsequent or preceding input field, respectively. Similarly, an action button set to ImeAction.Done typically dismisses the software keyboard. These default functionalities are executed automatically and don't require you to supply a KeyboardActionHandler.

      You can also implement custom behavior in addition to these default actions. When you provide your KeyboardActionHandler, its onKeyboardAction method receives a performDefaultAction function. You can call this performDefaultAction() function at any point within your custom logic to also trigger the standard default behavior associated with the current IME action.

      TextField(
          state = textFieldViewModel.usernameState,
          keyboardOptions = KeyboardOptions(imeAction = ImeAction.Next),
          onKeyboardAction = { performDefaultAction ->
              textFieldViewModel.validateUsername()
              performDefaultAction()
          }
      )StateBasedText.kt

      This snippet illustrates a common use case on a registration screen featuring a username field. For this field, ImeAction.Next is selected for its keyboard action button. This choice enables quick, seamless navigation to the subsequent password field.

      In addition to this standard navigation, there's a requirement to initiate a background validation process for the username as the user proceeds to
  - id: live-compose-guide-text-user-input-edit-text-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#edit-text
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: 08dbbfdda23c65bfa9ff633c32a9ef34d6074c8cb5164c675a1ff7a345cff469
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are several methods that allow you to edit the state directly through your state variable:

      edit: Lets you edit the state contents and gives you TextFieldBuffer functions so you can use methods like insert, replace, append, and more. // Initial textFieldState text passed in is "I love Android" // textFieldState.text : I love Android // textFieldState.selection: TextRange(14, 14) textFieldState.edit { insert(14, "!") } // textFieldState.text : I love Android! // textFieldState.selection: TextRange(15, 15) textFieldState.edit { replace(7, 14, "Compose") } // textFieldState.text : I love Compose! // textFieldState.selection: TextRange(15, 15) textFieldState.edit { append("!!!") } // textFieldState.text : I love Compose!!!! // textFieldState.selection: TextRange(18, 18) textFieldState.edit { selectAll() } // textFieldState.text : I love Compose!!!! // textFieldState.selection: TextRange(0, 18)StateBasedText.kt

      setTextAndPlaceCursorAtEnd: Clears the current text, replaces it with the given text, and sets the cursor at the end. textFieldState.setTextAndPlaceCursorAtEnd("I really love Android") // textFieldState.text : I really love Android // textFieldState.selection : TextRange(21, 21)StateBasedText.kt

      clearText: Clears all text. textFieldState.clearText() // textFieldState.text : // textFieldState.selection : TextRange(0, 0)StateBasedText.kt

      For other TextFieldState functions, see the TextFieldState reference.
  - id: live-compose-guide-text-user-input-filter-input-transformations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#filter-input-transformations
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: ab3cb4efd40939b45d4c5ac91f33b3e1699d12af70e73488d2030b757a644a6f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      An input transformation lets you filter input from the user. For example, if your TextField takes in an American phone number, you only want to accept 10 digits. The results of the InputTransformation are saved in the TextFieldState.

      There are built-in filters for common InputTransformation use cases. To limit length, call InputTransformation.maxLength():

      TextField(
          state = rememberTextFieldState(),
          lineLimits = TextFieldLineLimits.SingleLine,
          inputTransformation = InputTransformation.maxLength(10)
      )StateBasedText.kt
  - id: live-compose-guide-text-user-input-format-input-display-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#format-input-display
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: a3555a260ac337082001816ff975fe5fdb071c7a9a8cffee8905912c1f0acd16
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      OutputTransformations let you format user input before it is rendered on the screen. Unlike InputTransformation, the formatting done through the OutputTransformation is not saved in the TextFieldState. Building on the previous phone number example, you need to add parentheses and dashes in the appropriate places:

      Figure 3.

      An American phone number with proper formatting and corresponding indexes.

      OutputTransformation replaces VisualTransformation from value-based text fields, with the key difference being that you don't calculate offset mappings.

      OutputTransformation is a single abstract method interface. In order to implement a custom OutputTransformation, you need to override the transformOutput method:

      class CustomOutputTransformation : OutputTransformation {
          override fun TextFieldBuffer.transformOutput() {
          }
      }StateBasedText.kt

      To format a phone number, add an opening parenthesis at index 0, a closing parenthesis at index 4, and a dash at index 8 to your OutputTransformation:

      class PhoneNumberOutputTransformation : OutputTransformation {
          override fun TextFieldBuffer.transformOutput() {
              if (length > 0) insert(0, "(")
              if (length > 4) insert(4, ")")
              if (length > 8) insert(8, "-")
          }
      }StateBasedText.kt

      Next, add your OutputTransformation to TextField:

      TextField(
          state = rememberTextFieldState(),
          outputTransformation = PhoneNumberOutputTransformation()
      )StateBasedText.kt
  - id: live-compose-guide-text-user-input-how-transformations-work-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#how-transformations-work
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: 296a61d61f7a5ec4e42ba9f865d9416641a56c8da02925597ea7ef81a78ce78e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following diagram shows the flow from text input to transformation to output:

      Figure 4.

      A diagram showing how text input goes through transformations before it becomes text output.

      Input is received from the input source.

      The input is filtered through an InputTransformation, which gets saved in the TextFieldState.

      The input is passed through an OutputTransformation for formatting.

      The input is presented in the TextField.
  - id: live-compose-guide-text-user-input-implement-gradients-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#implement-gradients
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: 87a48d37066f58200bf14689fa0e9a44937fdc6657f0c9d707b273154369ac2d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To implement a colored gradient as you type within a TextField, set your brush of choice as a TextStyle for your TextField. In this example, we use a built-in brush with a linearGradient to view the rainbow gradient effect as text is typed into the TextField.

      val brush = remember {
          Brush.linearGradient(
              colors = listOf(Color.Red, Color.Yellow, Color.Green, Color.Blue, Color.Magenta)
          )
      }
      TextField(
          state = rememberTextFieldState(), textStyle = TextStyle(brush = brush)
      )StateBasedText.kt

      Figure 1.

      A rainbow gradient effect for

      TextField

      content.
  - id: live-compose-guide-text-user-input-keyboard-options-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#keyboard-options
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: d71bf52588b04c60f937b9dcfb02f4b82f0ff7b2b17e9f072c05224e2c3ed955
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      TextField lets you set keyboard configuration options, such as the keyboard layout, or enable the autocorrect if it's supported by the keyboard. Some options may not be guaranteed if the software keyboard doesn't comply with the options provided here. Here is the list of the supported keyboard options:

      capitalization

      autoCorrect

      keyboardType

      imeAction

      The KeyboardOptions class now includes a new boolean parameter, showKeyboardOnFocus, which you use specifically for TextField components that are integrated with TextFieldState. This option governs the behavior of the software keyboard when the TextField acquires focus through means other than direct user interaction (for example, programmatically).

      When KeyboardOptions.showKeyboardOnFocus is set to true, the software keyboard does not automatically appear if the TextField gains focus indirectly. In such cases, the user is required to explicitly tap on the TextField itself to reveal the keyboard.
  - id: live-compose-guide-text-user-input-line-limits-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#line-limits
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: 815da69e450f90beef5705feb5d625e4b0a38abbdce4bdc5994fa3095c069d04
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      TextField composables support scrolling along a single axis. The scrolling behavior is determined by the lineLimits parameter. TextFields configured for a single line scroll horizontally, while multi-line TextFields scroll vertically.

      Use TextFieldLineLimits to choose the appropriate line configuration for your TextField:

      TextField(
          state = rememberTextFieldState(),
          lineLimits = TextFieldLineLimits.SingleLine
      )StateBasedText.kt

      The SingleLine configuration has the following characteristics:

      The text never wraps, and doesn't allow for new lines.

      TextField always has a fixed height.

      If the text overflows, it scrolls horizontally.

      TextField(
          state = rememberTextFieldState("Hello\nWorld\nHello\nWorld"),
          lineLimits = TextFieldLineLimits.MultiLine(1, 4)
      )StateBasedText.kt

      The MultiLine configuration has the following characteristics:

      Accepts two parameters: minHeightInLines and maxHeightInLines.

      The text field is at least minHeightInLines tall.

      If the text overflows, it will wrap.

      If the text requires more lines, the field grows until it is maxHeightInLines tall, and scrolls vertically.
  - id: live-compose-guide-text-user-input-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#main-content
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: e7b283d3fcc4bdd4088bce1c687a80a199b27d2e53db02708013e0d877f9d698
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: TextField allows users to enter and modify text. This page describes how you can implement TextField, style TextField input, and configure other TextField options, like keyboard options and visually transforming user input.
  - id: live-compose-guide-text-user-input-manage-tf-state-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#manage-tf-state
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: 03911ec381e427ae8fb9457758041ee1cc4f85482d27e092ca57d7c3aad468ee
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      TextField uses a dedicated state holder class called TextFieldState for its content and selection. TextFieldState is designed to be hoisted wherever it fits in your architecture. There are 2 main properties that are provided by TextFieldState:

      initialText: Contents of the TextField.

      initialSelection: Indicates where the cursor or the selection is.

      What differentiates TextFieldState from other approaches, like the onValueChange callback, is that TextFieldState fully encapsulates the entire input flow. This includes using the correct backing data structures, inlining filters and formatters, and also synchronizing all edits coming from different sources.

      You can use TextFieldState() to hoist state in TextField. For this, we recommend using the rememberTextFieldState() function. rememberTextFieldState() creates the TextFieldState instance in your composable, makes sure the state object is remembered, and provides built-in save and restore functionality:

      val usernameState = rememberTextFieldState()
      TextField(
          state = usernameState,
          lineLimits = TextFieldLineLimits.SingleLine,
          placeholder = { Text("Enter Username") }
      )StateBasedText.kt

      rememberTextFieldState can have a blank parameter or have an initial value passed in to represent the text's value on initialization. If a different value is passed in a subsequent recomposition, the value of the state is not updated. To update the state after it's initialized, call edit methods on TextFieldState.

      TextField(
          state = rememberTextFieldState(initialText = "Username"),
          lineLimits = TextFieldLineLimits.SingleLine,
      )StateBasedText.kt

      Figure 2.

      TextField

      with "Username" as the initial text.
  - id: live-compose-guide-text-user-input-modify-user-input-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#modify-user-input
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: 0182b0a5239dc0c8adaee8aa3249976a9e92a8864c2266e26b6ddfa3bf0d6247
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: The following sections describe how to modify user input. Input transformation lets you filter TextField input while the user is typing, while output transformation formats user input before it's displayed on-screen.
  - id: live-compose-guide-text-user-input-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#recommended_for_you
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: f2a27ccd32aa0c804ff3fd63133ac2752807fc7e8c9aac2853ccdc5f5139ce6c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Architecting your Compose UI

      State and Jetpack Compose

      Save UI state in Compose
  - id: live-compose-guide-text-user-input-style-input-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#style-input
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: 0122386ca9fb07e54814bba63144a8ecdb51e708c4d135e5d1c5bef141bc2bfa
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can use the Brush API for more advanced styling in your TextField. The following section describes how you can use a Brush to add a colored gradient to TextField input.

      For more information about using the Brush API to style text, see Enable advanced styling with Brush API.
  - id: live-compose-guide-text-user-input-style-textfield-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#style-textfield
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: 73b4552382b916a52ca201e75d6e073254df292855acf9d538a47720a6ef2615
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      TextField and BasicTextField share many common parameters for customization. The complete list for TextField is available in the TextField source code. This is a non-exhaustive list of some of the useful parameters:

      textStyle

      lineLimits

      TextField(
          state = rememberTextFieldState("Hello\nWorld\nInvisible"),
          lineLimits = TextFieldLineLimits.MultiLine(maxHeightInLines = 2),
          placeholder = { Text("") },
          textStyle = TextStyle(color = Color.Blue, fontWeight = FontWeight.Bold),
          label = { Text("Enter text") },
          modifier = Modifier.padding(20.dp)
      )StateBasedText.kt

      We recommend TextField over BasicTextField when your design calls for a Material TextField or OutlinedTextField. However, BasicTextField should be used when building designs that don't need the decorations from the Material spec.
  - id: live-compose-guide-text-user-input-text-field-buffer-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/user-input#text-field-buffer
    revision: web:compose-guide-text-user-input:content@sha256:0bf31092d5fa006a6169b1630a1363a4009b4b42f6c31d2754b11722d7b786f6
    sha256: af0e3444e9173cb1642c33f1e7c8c5f13afd5af09391a0433b1a38577412b8ba
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A TextFieldBuffer serves as an editable text container, similar in function to a StringBuilder. It holds both the text content and information about the selection.

      You often encounter TextFieldBuffer as a receiver scope on functions like TextFieldState.edit, InputTransformation.transformInput, or OutputTransformation.transformOutput. In these functions, you can read or update the TextFieldBuffer as needed. Afterwards, these changes are either committed to TextFieldState, or passed down to the rendering pipeline in the case of OutputTransformation.

      You can use standard editing functions like append, insert, replace, or delete to modify the buffer's contents. To change the selection state, either directly set its selection: TextRange variable, or use utility functions such as placeCursorAtEnd or selectAll. The selection itself is represented by a TextRange, where the start index is inclusive and the end index is exclusive. A TextRange with identical start and end values, like (3, 3), signifies a cursor position with no characters selected.

      val phoneNumberState = rememberTextFieldState("1234567890")

      TextField(
          state = phoneNumberState,
          keyboardOptions = KeyboardOptions(
              keyboardType = KeyboardType.Phone
          ),
          inputTransformation = InputTransformation.maxLength(10).then {
              if (!asCharSequence().isDigitsOnly()) {
                  revertAllChanges()
              }
          },
          outputTransformation = OutputTransformation {
              if (length > 0) insert(0, "(")
              if (length > 4) insert(4, ")")
              if (length > 8) insert(8, "-")
          }
      )StateBasedText.kt
compose:
  id: live-compose-guide-text-user-input
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-text-user-input-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-chain-input
      title: Chain input transformations
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-chain-input-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-choose-textfield
      title: Choose TextField implementation
      aliases:
        - androidx.compose.material3.TextField
        - androidx.compose.material3.OutlinedTextField
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-choose-textfield-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-create-secure
      title: Create a secure password field
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-create-secure-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-custom-input
      title: Custom input transformations
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-custom-input-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-define-logic
      title: Define keyboard interaction logic
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-define-logic-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-define-logic-2
      title: Define keyboard interaction logic
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-define-logic-2-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-edit-text
      title: Edit text in TextFieldState
      aliases:
        - androidx.compose.foundation.text.input.TextFieldState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-edit-text-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-filter-input-transformations
      title: Filter user input with input transformations
      aliases:
        - androidx.compose.material3.TextField
        - androidx.compose.foundation.text.input.TextFieldState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-filter-input-transformations-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-format-input-display
      title: Format input before it's displayed
      aliases:
        - androidx.compose.material3.TextField
        - androidx.compose.foundation.text.input.TextFieldState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-format-input-display-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-how-transformations-work
      title: How transformations work together
      aliases:
        - androidx.compose.material3.TextField
        - androidx.compose.foundation.text.input.TextFieldState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-how-transformations-work-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-implement-gradients
      title: Implement colored gradients using TextStyle
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-implement-gradients-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-keyboard-options
      title: Set keyboard options
      aliases:
        - androidx.compose.material3.TextField
        - androidx.compose.foundation.text.input.TextFieldState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-keyboard-options-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-line-limits
      title: Configure line limits
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-line-limits-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-main-content
      title: Introduction
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-main-content-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-manage-tf-state
      title: Manage text field state
      aliases:
        - androidx.compose.material3.TextField
        - androidx.compose.foundation.text.input.TextFieldState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-manage-tf-state-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-modify-user-input
      title: Modify user input
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-modify-user-input-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-style-input
      title: Style input with Brush API
      aliases:
        - androidx.compose.material3.TextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-style-input-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-style-textfield
      title: Style TextField
      aliases:
        - androidx.compose.material3.TextField
        - androidx.compose.material3.OutlinedTextField
        - androidx.compose.foundation.text.BasicTextField
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-style-textfield-source
      relatedIds: []
    - id: live-compose-guide-text-user-input-text-field-buffer
      title: Modify text with TextFieldBuffer
      aliases:
        - androidx.compose.material3.TextField
        - androidx.compose.foundation.text.input.TextFieldState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-text-field-buffer-source
      relatedIds: []
---

# Configure text fields

Public source: https://developer.android.com/develop/ui/compose/text/user-input

## Additional resources

Auto-format a phone number in a text field

Show or hide password based on a user toggle

Validate input as the user types

Sources: [live-compose-guide-text-user-input-additional-resources-source](https://developer.android.com/develop/ui/compose/text/user-input#additional-resources)

## Chain input transformations

To add multiple filters on your text input, chain InputTransformations using the then extension function. Filters are executed sequentially. As a best practice, apply the most selective filters first to avoid unnecessary transformations on data that would ultimately be filtered out.

TextField(
    state = rememberTextFieldState(),
    inputTransformation = InputTransformation.maxLength(6)
        .then(CustomInputTransformation()),
)StateBasedText.kt

After adding input transformations, the TextField input accepts 10 digits maximum.

Sources: [live-compose-guide-text-user-input-chain-input-source](https://developer.android.com/develop/ui/compose/text/user-input#chain-input)

## Choose TextField implementation

There are two levels of TextField implementation:

TextField is the Material Design implementation. We recommend you choose this implementation as it follows Material Design guidelines: Default styling is filled OutlinedTextField is the outlined styling version

BasicTextField enables users to edit text using the hardware or software keyboard, but provides no decorations like hint or placeholder.

TextField(
    state = rememberTextFieldState(initialText = "Hello"),
    label = { Text("Label") }
)StateBasedText.kt

OutlinedTextField(
    state = rememberTextFieldState(),
    label = { Text("Label") }
)StateBasedText.kt

Sources: [live-compose-guide-text-user-input-choose-textfield-source](https://developer.android.com/develop/ui/compose/text/user-input#choose-textfield)

## Create a secure password field

SecureTextField is a composable built on top of state-based text fields for writing a password field. We recommend using SecureTextField for creating password text fields, as it hides character input by default and disables cut and copy actions.

SecureTextField has a textObfuscationMode, which controls how the user sees character input. textObfuscationMode has the following options:

Hidden: Hides all input. Default behavior on desktop platforms.

Visible: Shows all input.

RevealLastTyped: Hides all input except the last character. Default behavior on mobile devices.

Sources: [live-compose-guide-text-user-input-create-secure-source](https://developer.android.com/develop/ui/compose/text/user-input#create-secure)

## Custom input transformations

InputTransformation is a single function interface. When implementing your custom InputTransformation, you need to override TextFieldBuffer.transformInput:

class CustomInputTransformation : InputTransformation {
    override fun TextFieldBuffer.transformInput() {
    }
}StateBasedText.kt

For a phone number, add a custom input transformation that only allows digits to be typed into the TextField:

class DigitOnlyInputTransformation : InputTransformation {
    override fun TextFieldBuffer.transformInput() {
        if (!asCharSequence().isDigitsOnly()) {
            revertAllChanges()
        }
    }
}StateBasedText.kt

Sources: [live-compose-guide-text-user-input-custom-input-source](https://developer.android.com/develop/ui/compose/text/user-input#custom-input)

## Define keyboard interaction logic

The action button on Android's software keyboard allows for interactive responses within your application. For more information about configuring the action button, see the Set keyboard options section.

Figure 5.

Software keyboard action button.

To define what occurs when a user taps this action button, use the onKeyboardAction parameter. This parameter accepts an optional functional interface named KeyboardActionHandler. The KeyboardActionHandler interface contains a single method, onKeyboardAction(performDefaultAction: () -> Unit). By providing an implementation for this onKeyboardAction method, you can introduce custom logic that executes when a user presses the keyboard's action button.

Several standard keyboard action types come with built-in default behaviors. For example, selecting ImeAction.Next or ImeAction.Previous as the action type will, by default, shift focus to the subsequent or preceding input field, respectively. Similarly, an action button set to ImeAction.Done typically dismisses the software keyboard. These default functionalities are executed automatically and don't require you to supply a KeyboardActionHandler.

You can also implement custom behavior in addition to these default actions. When you provide your KeyboardActionHandler, its onKeyboardAction method receives a performDefaultAction function. You can call this performDefaultAction() function at any point within your custom logic to also trigger the standard default behavior associated with the current IME action.

TextField(
    state = textFieldViewModel.usernameState,
    keyboardOptions = KeyboardOptions(imeAction = ImeAction.Next),
    onKeyboardAction = { performDefaultAction ->
        textFieldViewModel.validateUsername()
        performDefaultAction()
    }
)StateBasedText.kt

This snippet illustrates a common use case on a registration screen featuring a username field. For this field, ImeAction.Next is selected for its keyboard action button. This choice enables quick, seamless navigation to the subsequent password field.

In addition to this standard navigation, there's a requirement to initiate a background validation process for the username as the user proceeds to

Sources: [live-compose-guide-text-user-input-define-logic-source](https://developer.android.com/develop/ui/compose/text/user-input#define-logic)

## Define keyboard interaction logic

enter their password. To make sure that the default focus-switching behavior inherent to ImeAction.Next is retained alongside this custom validation logic, the performDefaultAction() function is invoked. Calling performDefaultAction() implicitly triggers the underlying focus management system to move the focus to the next appropriate UI element, preserving the expected navigational flow.

Sources: [live-compose-guide-text-user-input-define-logic-2-source](https://developer.android.com/develop/ui/compose/text/user-input#define-logic)

## Edit text in TextFieldState

There are several methods that allow you to edit the state directly through your state variable:

edit: Lets you edit the state contents and gives you TextFieldBuffer functions so you can use methods like insert, replace, append, and more. // Initial textFieldState text passed in is "I love Android" // textFieldState.text : I love Android // textFieldState.selection: TextRange(14, 14) textFieldState.edit { insert(14, "!") } // textFieldState.text : I love Android! // textFieldState.selection: TextRange(15, 15) textFieldState.edit { replace(7, 14, "Compose") } // textFieldState.text : I love Compose! // textFieldState.selection: TextRange(15, 15) textFieldState.edit { append("!!!") } // textFieldState.text : I love Compose!!!! // textFieldState.selection: TextRange(18, 18) textFieldState.edit { selectAll() } // textFieldState.text : I love Compose!!!! // textFieldState.selection: TextRange(0, 18)StateBasedText.kt

setTextAndPlaceCursorAtEnd: Clears the current text, replaces it with the given text, and sets the cursor at the end. textFieldState.setTextAndPlaceCursorAtEnd("I really love Android") // textFieldState.text : I really love Android // textFieldState.selection : TextRange(21, 21)StateBasedText.kt

clearText: Clears all text. textFieldState.clearText() // textFieldState.text : // textFieldState.selection : TextRange(0, 0)StateBasedText.kt

For other TextFieldState functions, see the TextFieldState reference.

Sources: [live-compose-guide-text-user-input-edit-text-source](https://developer.android.com/develop/ui/compose/text/user-input#edit-text)

## Filter user input with input transformations

An input transformation lets you filter input from the user. For example, if your TextField takes in an American phone number, you only want to accept 10 digits. The results of the InputTransformation are saved in the TextFieldState.

There are built-in filters for common InputTransformation use cases. To limit length, call InputTransformation.maxLength():

TextField(
    state = rememberTextFieldState(),
    lineLimits = TextFieldLineLimits.SingleLine,
    inputTransformation = InputTransformation.maxLength(10)
)StateBasedText.kt

Sources: [live-compose-guide-text-user-input-filter-input-transformations-source](https://developer.android.com/develop/ui/compose/text/user-input#filter-input-transformations)

## Format input before it's displayed

OutputTransformations let you format user input before it is rendered on the screen. Unlike InputTransformation, the formatting done through the OutputTransformation is not saved in the TextFieldState. Building on the previous phone number example, you need to add parentheses and dashes in the appropriate places:

Figure 3.

An American phone number with proper formatting and corresponding indexes.

OutputTransformation replaces VisualTransformation from value-based text fields, with the key difference being that you don't calculate offset mappings.

OutputTransformation is a single abstract method interface. In order to implement a custom OutputTransformation, you need to override the transformOutput method:

class CustomOutputTransformation : OutputTransformation {
    override fun TextFieldBuffer.transformOutput() {
    }
}StateBasedText.kt

To format a phone number, add an opening parenthesis at index 0, a closing parenthesis at index 4, and a dash at index 8 to your OutputTransformation:

class PhoneNumberOutputTransformation : OutputTransformation {
    override fun TextFieldBuffer.transformOutput() {
        if (length > 0) insert(0, "(")
        if (length > 4) insert(4, ")")
        if (length > 8) insert(8, "-")
    }
}StateBasedText.kt

Next, add your OutputTransformation to TextField:

TextField(
    state = rememberTextFieldState(),
    outputTransformation = PhoneNumberOutputTransformation()
)StateBasedText.kt

Sources: [live-compose-guide-text-user-input-format-input-display-source](https://developer.android.com/develop/ui/compose/text/user-input#format-input-display)

## How transformations work together

The following diagram shows the flow from text input to transformation to output:

Figure 4.

A diagram showing how text input goes through transformations before it becomes text output.

Input is received from the input source.

The input is filtered through an InputTransformation, which gets saved in the TextFieldState.

The input is passed through an OutputTransformation for formatting.

The input is presented in the TextField.

Sources: [live-compose-guide-text-user-input-how-transformations-work-source](https://developer.android.com/develop/ui/compose/text/user-input#how-transformations-work)

## Implement colored gradients using TextStyle

To implement a colored gradient as you type within a TextField, set your brush of choice as a TextStyle for your TextField. In this example, we use a built-in brush with a linearGradient to view the rainbow gradient effect as text is typed into the TextField.

val brush = remember {
    Brush.linearGradient(
        colors = listOf(Color.Red, Color.Yellow, Color.Green, Color.Blue, Color.Magenta)
    )
}
TextField(
    state = rememberTextFieldState(), textStyle = TextStyle(brush = brush)
)StateBasedText.kt

Figure 1.

A rainbow gradient effect for

TextField

content.

Sources: [live-compose-guide-text-user-input-implement-gradients-source](https://developer.android.com/develop/ui/compose/text/user-input#implement-gradients)

## Set keyboard options

TextField lets you set keyboard configuration options, such as the keyboard layout, or enable the autocorrect if it's supported by the keyboard. Some options may not be guaranteed if the software keyboard doesn't comply with the options provided here. Here is the list of the supported keyboard options:

capitalization

autoCorrect

keyboardType

imeAction

The KeyboardOptions class now includes a new boolean parameter, showKeyboardOnFocus, which you use specifically for TextField components that are integrated with TextFieldState. This option governs the behavior of the software keyboard when the TextField acquires focus through means other than direct user interaction (for example, programmatically).

When KeyboardOptions.showKeyboardOnFocus is set to true, the software keyboard does not automatically appear if the TextField gains focus indirectly. In such cases, the user is required to explicitly tap on the TextField itself to reveal the keyboard.

Sources: [live-compose-guide-text-user-input-keyboard-options-source](https://developer.android.com/develop/ui/compose/text/user-input#keyboard-options)

## Configure line limits

TextField composables support scrolling along a single axis. The scrolling behavior is determined by the lineLimits parameter. TextFields configured for a single line scroll horizontally, while multi-line TextFields scroll vertically.

Use TextFieldLineLimits to choose the appropriate line configuration for your TextField:

TextField(
    state = rememberTextFieldState(),
    lineLimits = TextFieldLineLimits.SingleLine
)StateBasedText.kt

The SingleLine configuration has the following characteristics:

The text never wraps, and doesn't allow for new lines.

TextField always has a fixed height.

If the text overflows, it scrolls horizontally.

TextField(
    state = rememberTextFieldState("Hello\nWorld\nHello\nWorld"),
    lineLimits = TextFieldLineLimits.MultiLine(1, 4)
)StateBasedText.kt

The MultiLine configuration has the following characteristics:

Accepts two parameters: minHeightInLines and maxHeightInLines.

The text field is at least minHeightInLines tall.

If the text overflows, it will wrap.

If the text requires more lines, the field grows until it is maxHeightInLines tall, and scrolls vertically.

Sources: [live-compose-guide-text-user-input-line-limits-source](https://developer.android.com/develop/ui/compose/text/user-input#line-limits)

## Introduction

TextField allows users to enter and modify text. This page describes how you can implement TextField, style TextField input, and configure other TextField options, like keyboard options and visually transforming user input.

Sources: [live-compose-guide-text-user-input-main-content-source](https://developer.android.com/develop/ui/compose/text/user-input#main-content)

## Manage text field state

TextField uses a dedicated state holder class called TextFieldState for its content and selection. TextFieldState is designed to be hoisted wherever it fits in your architecture. There are 2 main properties that are provided by TextFieldState:

initialText: Contents of the TextField.

initialSelection: Indicates where the cursor or the selection is.

What differentiates TextFieldState from other approaches, like the onValueChange callback, is that TextFieldState fully encapsulates the entire input flow. This includes using the correct backing data structures, inlining filters and formatters, and also synchronizing all edits coming from different sources.

You can use TextFieldState() to hoist state in TextField. For this, we recommend using the rememberTextFieldState() function. rememberTextFieldState() creates the TextFieldState instance in your composable, makes sure the state object is remembered, and provides built-in save and restore functionality:

val usernameState = rememberTextFieldState()
TextField(
    state = usernameState,
    lineLimits = TextFieldLineLimits.SingleLine,
    placeholder = { Text("Enter Username") }
)StateBasedText.kt

rememberTextFieldState can have a blank parameter or have an initial value passed in to represent the text's value on initialization. If a different value is passed in a subsequent recomposition, the value of the state is not updated. To update the state after it's initialized, call edit methods on TextFieldState.

TextField(
    state = rememberTextFieldState(initialText = "Username"),
    lineLimits = TextFieldLineLimits.SingleLine,
)StateBasedText.kt

Figure 2.

TextField

with "Username" as the initial text.

Sources: [live-compose-guide-text-user-input-manage-tf-state-source](https://developer.android.com/develop/ui/compose/text/user-input#manage-tf-state)

## Modify user input

The following sections describe how to modify user input. Input transformation lets you filter TextField input while the user is typing, while output transformation formats user input before it's displayed on-screen.

Sources: [live-compose-guide-text-user-input-modify-user-input-source](https://developer.android.com/develop/ui/compose/text/user-input#modify-user-input)

## Recommended for you

Architecting your Compose UI

State and Jetpack Compose

Save UI state in Compose

Sources: [live-compose-guide-text-user-input-recommended-for-you-source](https://developer.android.com/develop/ui/compose/text/user-input#recommended_for_you)

## Style input with Brush API

You can use the Brush API for more advanced styling in your TextField. The following section describes how you can use a Brush to add a colored gradient to TextField input.

For more information about using the Brush API to style text, see Enable advanced styling with Brush API.

Sources: [live-compose-guide-text-user-input-style-input-source](https://developer.android.com/develop/ui/compose/text/user-input#style-input)

## Style TextField

TextField and BasicTextField share many common parameters for customization. The complete list for TextField is available in the TextField source code. This is a non-exhaustive list of some of the useful parameters:

textStyle

lineLimits

TextField(
    state = rememberTextFieldState("Hello\nWorld\nInvisible"),
    lineLimits = TextFieldLineLimits.MultiLine(maxHeightInLines = 2),
    placeholder = { Text("") },
    textStyle = TextStyle(color = Color.Blue, fontWeight = FontWeight.Bold),
    label = { Text("Enter text") },
    modifier = Modifier.padding(20.dp)
)StateBasedText.kt

We recommend TextField over BasicTextField when your design calls for a Material TextField or OutlinedTextField. However, BasicTextField should be used when building designs that don't need the decorations from the Material spec.

Sources: [live-compose-guide-text-user-input-style-textfield-source](https://developer.android.com/develop/ui/compose/text/user-input#style-textfield)

## Modify text with TextFieldBuffer

A TextFieldBuffer serves as an editable text container, similar in function to a StringBuilder. It holds both the text content and information about the selection.

You often encounter TextFieldBuffer as a receiver scope on functions like TextFieldState.edit, InputTransformation.transformInput, or OutputTransformation.transformOutput. In these functions, you can read or update the TextFieldBuffer as needed. Afterwards, these changes are either committed to TextFieldState, or passed down to the rendering pipeline in the case of OutputTransformation.

You can use standard editing functions like append, insert, replace, or delete to modify the buffer's contents. To change the selection state, either directly set its selection: TextRange variable, or use utility functions such as placeCursorAtEnd or selectAll. The selection itself is represented by a TextRange, where the start index is inclusive and the end index is exclusive. A TextRange with identical start and end values, like (3, 3), signifies a cursor position with no characters selected.

val phoneNumberState = rememberTextFieldState("1234567890")

TextField(
    state = phoneNumberState,
    keyboardOptions = KeyboardOptions(
        keyboardType = KeyboardType.Phone
    ),
    inputTransformation = InputTransformation.maxLength(10).then {
        if (!asCharSequence().isDigitsOnly()) {
            revertAllChanges()
        }
    },
    outputTransformation = OutputTransformation {
        if (length > 0) insert(0, "(")
        if (length > 4) insert(4, ")")
        if (length > 8) insert(8, "-")
    }
)StateBasedText.kt

Sources: [live-compose-guide-text-user-input-text-field-buffer-source](https://developer.android.com/develop/ui/compose/text/user-input#text-field-buffer)
