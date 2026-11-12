---
type: reference
title: "Guidance: Keep TextField state and edit it after initialization"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
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
compose:
  id: guide-textfield-state-initialization
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3.TextField
  sections:
    - id: guide-textfield-state-initialization
      title: "Guidance: Keep TextField state and edit it after initialization"
      aliases:
        - androidx.compose.material3.TextField
        - androidx.compose.foundation.text.input.TextFieldState
        - androidx.compose.foundation.text.input.rememberTextFieldState
        - initial text not updating
        - text selection
        - 텍스트 필드 상태
        - 초기 텍스트
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-text-user-input-manage-tf-state-source
      relatedIds:
        - live-compose-guide-text-user-input-manage-tf-state
---

# Guidance: Keep TextField state and edit it after initialization

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Keep TextField state and edit it after initialization

Guidance: For a state-based TextField, use TextFieldState to own text content and selection, and hoist it where the architecture needs it. rememberTextFieldState remembers the state object and provides save/restore support. Pass it to TextField(state = ...); initialText and initialSelection establish initial content and selection. Limitation: changing the initial value passed to rememberTextFieldState during a later recomposition does not update the existing state. Use TextFieldState edit methods to change it after initialization.

Sources: [live-compose-guide-text-user-input-manage-tf-state-source](https://developer.android.com/develop/ui/compose/text/user-input#manage-tf-state)
