---
type: reference
title: "Guidance: Remember and connect a focus requester before requesting focus"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    startLine: 1
    endLine: 35
    sha256: 699698bbaaec4bafb608d9d932abeeb3990fdd4c92b6513537823ab818669a78
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

      package androidx.compose.ui.focus

      import androidx.collection.MutableObjectList
      import androidx.collection.mutableObjectListOf
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.annotation.RememberInComposition
      import androidx.compose.ui.focus.FocusDirection.Companion.Enter
      import androidx.compose.ui.node.Nodes
      import androidx.compose.ui.node.visitChildren

      private const val FocusRequesterNotInitialized =
          """
         FocusRequester is not initialized. Here are some possible fixes:

         1. Remember the FocusRequester: val focusRequester = remember { FocusRequester() }
         2. Did you forget to add a Modifier.focusRequester() ?
         3. Are you attempting to request focus during composition? Focus requests should be made in
         response to some event. Eg Modifier.clickable { focusRequester.requestFocus() }
      """
  - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    startLine: 71
    endLine: 105
    sha256: 7a96a7518bfa8bc48c243a148368c75359aa9c2890875b23cc502068f9c7afa4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          /**
           * Use this function to request focus with a specific direction. If the system grants focus to a
           * component associated with this [FocusRequester], its [onFocusChanged] modifiers will receive
           * a [FocusState] object where [FocusState.isFocused] is true.
           *
           * @param focusDirection The direction passed to the [FocusTargetModifierNode] to indicate the
           *   direction that the focus request comes from.
           * @return `true` if the focus was successfully requested or `false` if the focus request was
           *   canceled.
           * @sample androidx.compose.ui.samples.RequestFocusSample
           */
          public fun requestFocus(focusDirection: FocusDirection = Enter): Boolean {
              return findFocusTarget { it.requestFocus(focusDirection) }
          }

          /**
           * Deny requests to clear focus.
           *
           * Use this function to send a request to capture focus. If a component captures focus, it will
           * send a [FocusState] object to its associated [onFocusChanged] modifiers where
           * [FocusState.isCaptured]() == true.
           *
           * When a component is in a Captured state, all focus requests from other components are
           * declined.
           *
           * @return true if the focus was successfully captured by one of the [focus][focusTarget]
           *   modifiers associated with this [FocusRequester]. False otherwise.
           * @sample androidx.compose.ui.samples.CaptureFocusSample
           */
          public fun captureFocus(): Boolean {
              if (focusRequesterNodes.isEmpty()) {
                  println("$FocusWarning: $FocusRequesterNotInitialized")
                  return false
compose:
  id: guide-focus-request-lifecycle
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.focus.FocusRequester
  sections:
    - id: guide-focus-request-lifecycle
      title: "Guidance: Remember and connect a focus requester before requesting focus"
      aliases:
        - androidx.compose.ui.focus.FocusRequester
        - androidx.compose.ui.focus.FocusRequester.requestFocus
        - androidx.compose.ui.focus.focusRequester
        - keyboard focus
        - request focus
        - focus initialization
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusrequester-lines-1-source
        - live-androidx-ui-ui-ui-focus-focusrequester-lines-71-source
      relatedIds:
        - live-androidx-ui-ui-ui-focus-focusrequester-lines-1
        - live-androidx-ui-ui-ui-focus-focusrequester-lines-71
---

# Guidance: Remember and connect a focus requester before requesting focus

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Remember and connect a focus requester before requesting focus

Guidance: Remember a FocusRequester and connect it through Modifier.focusRequester. Request focus in response to an event rather than directly during composition. In the captured source, requestFocus(focusDirection = FocusDirection.Enter) returns a Boolean reporting success or cancellation; a request does not guarantee that focus moved. Limitation: check the overload available in the resolved project version. These excerpts do not establish software keyboard visibility, accessibility focus, or custom-control modifier ordering.

Sources: [live-androidx-ui-ui-ui-focus-focusrequester-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt), [live-androidx-ui-ui-ui-focus-focusrequester-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt)
