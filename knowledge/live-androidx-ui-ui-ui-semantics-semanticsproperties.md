---
type: reference
title: androidx.compose.ui.semantics SemanticsProperties.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1
    endLine: 35
    sha256: a1269ca47a57983b8e7adfa9cdbf9767cafab634bca4807087e9b3b8f25ce331
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

      package androidx.compose.ui.semantics

      import androidx.compose.runtime.Immutable
      import androidx.compose.ui.autofill.ContentDataType
      import androidx.compose.ui.autofill.ContentType
      import androidx.compose.ui.autofill.FillableData
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.graphics.ColorProducer
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.platform.ExperimentalComposeUiHostApi
      import androidx.compose.ui.state.ToggleableState
      import androidx.compose.ui.text.AnnotatedString
      import androidx.compose.ui.text.TextLayoutResult
      import androidx.compose.ui.text.TextRange
      import androidx.compose.ui.text.input.ImeAction
      import kotlin.reflect.KProperty

      /**
       * General semantics properties, mainly used for accessibility and testing.
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1016-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1016
    endLine: 1050
    sha256: 361bb69d2ab7de14a714422aa43a68b32cff80ba0d4a105c52c8bb9bf56d6005
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * SemanticsPropertyReceiver is the scope provided by semantics {} blocks, letting you set key/value
       * pairs primarily via extension functions.
       */
      public interface SemanticsPropertyReceiver {
          public operator fun <T> set(key: SemanticsPropertyKey<T>, value: T)
      }

      /**
       * Developer-set content description of the semantics node.
       *
       * If this is not set, accessibility services will present the [text][SemanticsProperties.Text] of
       * this node as the content.
       *
       * This typically should not be set directly by applications, because some screen readers will cease
       * presenting other relevant information when this property is present. This is intended to be used
       * via Foundation components which are inherently intractable to automatically describe, such as
       * Image, Icon, and Canvas.
       */
      public var SemanticsPropertyReceiver.contentDescription: String
          get() = throwSemanticsGetNotSupported()
          set(value) {
              set(SemanticsProperties.ContentDescription, listOf(value))
          }

      /**
       * The hint text for an editable text field. This is typically used to provide guidance to the user
       * about what to enter in the text field.
       *
       * @sample androidx.compose.ui.samples.HintTextSample
       */
      public var SemanticsPropertyReceiver.hintText: String by SemanticsProperties.HintText

      /**
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1051-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1051
    endLine: 1085
    sha256: 0fddb0865a87a5a647b9c20c616602195be8b4dea61a7f646d6c716f7335699b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Developer-set state description of the semantics node.
       *
       * For example: on/off. If this not set, accessibility services will derive the state from other
       * semantics properties, like [ProgressBarRangeInfo], but it is not guaranteed and the format will
       * be decided by accessibility services.
       */
      public var SemanticsPropertyReceiver.stateDescription: String by
          SemanticsProperties.StateDescription

      /**
       * Background color of the node.
       *
       * This must incorporate the background's alpha property as well as the color's alpha, if provided.
       */
      public var SemanticsPropertyReceiver.backgroundColor: ColorProducer by
          SemanticsProperties.BackgroundColor

      /**
       * The semantics represents a range of possible values with a current value. For example, when used
       * on a slider control, this will allow screen readers to communicate the slider's state.
       */
      public var SemanticsPropertyReceiver.progressBarRangeInfo: ProgressBarRangeInfo by
          SemanticsProperties.ProgressBarRangeInfo

      /**
       * The node is marked as heading for accessibility.
       *
       * @see SemanticsProperties.Heading
       */
      public fun SemanticsPropertyReceiver.heading(): Unit {
          this[SemanticsProperties.Heading] = Unit
      }

      /**
       * The node is marked as a text entry key for accessibility. This is used to indicate that this
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 106
    endLine: 140
    sha256: 4aaf4933c65b47a01b574513d4cc69d720cc5fda522d0c0195daadd99ffd957d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /** @see SemanticsPropertyReceiver.isTraversalGroup */
          public val IsTraversalGroup: SemanticsPropertyKey<Boolean> =
              SemanticsPropertyKey<Boolean>("IsTraversalGroup")

          /** @see isSensitiveData */
          public val IsSensitiveData: SemanticsPropertyKey<Boolean> =
              SemanticsPropertyKey<Boolean>("IsSensitiveData")

          /** @see SemanticsPropertyReceiver.invisibleToUser */
          @Deprecated(
              "Use `hideFromAccessibility` instead.",
              replaceWith = ReplaceWith("HideFromAccessibility"),
          )
          // Retain for binary compatibility with aosp/3341487 in 1.7
          public val InvisibleToUser: SemanticsPropertyKey<Unit> =
              SemanticsPropertyKey<Unit>(
                  name = "InvisibleToUser",
                  mergePolicy = { parentValue, _ -> parentValue },
              )

          /** @see SemanticsPropertyReceiver.hideFromAccessibility */
          public val HideFromAccessibility: SemanticsPropertyKey<Unit> =
              SemanticsPropertyKey<Unit>(
                  name = "HideFromAccessibility",
                  mergePolicy = { parentValue, _ -> parentValue },
              )

          /** @see SemanticsPropertyReceiver.contentType */
          public val ContentType: SemanticsPropertyKey<ContentType> =
              SemanticsPropertyKey<ContentType>(
                  name = "ContentType",
                  mergePolicy = { parentValue, _ ->
                      // Never merge autofill types
                      parentValue
                  },
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1086-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1086
    endLine: 1120
    sha256: e586d353428ae9e587baf967e684c322910800a9e1c21280a3938589f6313915
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * composable acts as a key within a text entry interface, such as a custom on-screen keyboard.
       * Accessibility services can use this information to provide a better experience for users
       * interacting with custom text input methods.
       *
       * See
       * [AccessibilityNodeInfo.setTextEntryKey](https://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo#setTextEntryKey(boolean))
       * for more details.
       *
       * @see SemanticsProperties.TextEntryKey
       */
      public fun SemanticsPropertyReceiver.textEntryKey(): Unit {
          this[SemanticsProperties.TextEntryKey] = Unit
      }

      /**
       * Accessibility-friendly title for a screen's pane. For accessibility purposes, a pane is a
       * visually distinct portion of a window, such as the contents of an open drawer, bottom sheet, or
       * snackbar. In order for accessibility services to understand a pane's window-like behavior, you
       * should give descriptive titles to your app's panes. Accessibility services can then provide more
       * granular information to users when a pane's appearance or content changes.
       *
       * A pane acts like a window or fragment container: it can host interactive or clickable elements
       * inside it, but a node with [paneTitle] cannot be merged into an ancestor node. Placing a node
       * with [paneTitle] (or a component that sets [paneTitle] internally) inside a parent that merges
       * descendant semantics (such as `Modifier.semantics(mergeDescendants = true)`,
       * `Modifier.clickable`, `Modifier.toggleable`, or `Modifier.selectable`) breaks the semantic
       * hierarchy and will throw an [IllegalStateException] when the merged semantics tree is computed
       * (for example, when an accessibility service or autofill is active, or during UI tests).
       *
       * @see SemanticsProperties.PaneTitle
       */
      public var SemanticsPropertyReceiver.paneTitle: String by SemanticsProperties.PaneTitle

      /**
       * Whether this semantics node is disabled. Note that proper [SemanticsActions] should still be
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1121-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1121
    endLine: 1155
    sha256: eb2a0c7c98bff8dfc5e150cb43ba093a8102fa35dfa28536a57253c7d3dafc4c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * added when this property is set.
       *
       * @see SemanticsProperties.Disabled
       */
      public fun SemanticsPropertyReceiver.disabled(): Unit {
          this[SemanticsProperties.Disabled] = Unit
      }

      /**
       * This node is marked as live region for accessibility. This indicates to accessibility services
       * they should automatically notify the user about changes to the node's content description or
       * text, or to the content descriptions or text of the node's children (where applicable). It should
       * be used with caution, especially with assertive mode which immediately stops the current audio
       * and the user does not hear the rest of the content. An example of proper use is a Snackbar which
       * is marked as [LiveRegionMode.Polite].
       *
       * @see SemanticsProperties.LiveRegion
       * @see LiveRegionMode
       */
      public var SemanticsPropertyReceiver.liveRegion: LiveRegionMode by SemanticsProperties.LiveRegion

      /**
       * Whether this semantics node is focused. The presence of this property indicates this node is
       * focusable
       *
       * @see SemanticsProperties.Focused
       */
      public var SemanticsPropertyReceiver.focused: Boolean by SemanticsProperties.Focused

      /**
       * Whether this semantics node is a container. This is defined as a node whose function is to serve
       * as a boundary or border in organizing its children.
       *
       * @see SemanticsProperties.IsContainer
       */
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1156-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1156
    endLine: 1190
    sha256: 30c5d9ce6c77227d57b0a807ea70328912fb60f10bd23d7350e4d4686b1c7f10
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Deprecated("Use `isTraversalGroup` instead.", replaceWith = ReplaceWith("isTraversalGroup"))
      @Suppress("DEPRECATION")
      public var SemanticsPropertyReceiver.isContainer: Boolean by SemanticsProperties.IsContainer

      /**
       * Whether this semantics node is a traversal group.
       *
       * See https://developer.android.com/develop/ui/compose/accessibility/traversal
       *
       * @see SemanticsProperties.IsTraversalGroup
       */
      public var SemanticsPropertyReceiver.isTraversalGroup: Boolean by
          SemanticsProperties.IsTraversalGroup

      /**
       * Whether this semantics node should only allow interactions from
       * [android.accessibilityservice.AccessibilityService]s with the
       * [android.accessibilityservice.AccessibilityServiceInfo.isAccessibilityTool] property set to true.
       *
       * This property allows the node to remain visible and interactive to Accessibility Services
       * declared as accessibility tools that assist users with disabilities, while simultaneously hiding
       * this node and its generated AccessibilityEvents from other Accessibility Services that are not
       * declared as accessibility tools.
       *
       * If looking for a way to hide the node from all Accessibility Services then consider
       * [SemanticsProperties.HideFromAccessibility] instead.
       *
       * @see SemanticsProperties.IsSensitiveData
       */
      public var SemanticsPropertyReceiver.isSensitiveData: Boolean by SemanticsProperties.IsSensitiveData

      /**
       * Whether this node is specially known to be invisible to the user.
       *
       * For example, if the node is currently occluded by a dark semitransparent pane above it, then for
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1191-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1191
    endLine: 1225
    sha256: fa4b7087460832e2593cf7f4fec682da3855c51a233545cf5e58fe3c2dd101a5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * all practical purposes the node is invisible to the user, but the system cannot automatically
       * determine that. To make the screen reader linear navigation skip over this type of invisible
       * node, this property can be set.
       *
       * If looking for a way to hide semantics of small items from screen readers because they're
       * redundant with semantics of their parent, consider [SemanticsModifier.clearAndSetSemantics]
       * instead.
       */
      @Deprecated(
          "Use `hideFromAccessibility()` instead.",
          replaceWith = ReplaceWith("hideFromAccessibility()"),
      )
      @Suppress("DEPRECATION")
      // Retain for binary compatibility with aosp/3341487 in 1.7
      public fun SemanticsPropertyReceiver.invisibleToUser(): Unit {
          this[SemanticsProperties.InvisibleToUser] = Unit
      }

      /**
       * If present, this node is considered hidden from accessibility services.
       *
       * For example, if the node is currently occluded by a dark semitransparent pane above it, then for
       * all practical purposes the node should not be announced to the user. Since the system cannot
       * automatically determine that, this property can be set to make the screen reader linear
       * navigation skip over this type of node.
       *
       * If looking for a way to clear semantics of small items from the UI tree completely because they
       * are redundant with semantics of their parent, consider [SemanticsModifier.clearAndSetSemantics]
       * instead.
       */
      public fun SemanticsPropertyReceiver.hideFromAccessibility(): Unit {
          this[SemanticsProperties.HideFromAccessibility] = Unit
      }

      /**
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1226-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1226
    endLine: 1260
    sha256: d8234340fc7d02a502fdd92152d9b99a19d619f7455a0b0098f01748ccef7f31
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Content field type information.
       *
       * This API can be used to indicate to Autofill services what _kind of field_ is associated with
       * this node. Not to be confused with the _data type_ to be entered into the field.
       *
       * @see SemanticsProperties.ContentType
       */
      public var SemanticsPropertyReceiver.contentType: ContentType by SemanticsProperties.ContentType

      /**
       * Content data type information.
       *
       * This API can be used to indicate to Autofill services what _kind of data_ is meant to be
       * suggested for this field. Not to be confused with the _type_ of the field.
       *
       * @see SemanticsProperties.ContentType
       */
      public var SemanticsPropertyReceiver.contentDataType: ContentDataType by
          SemanticsProperties.ContentDataType

      /**
       * The current value of a component that can be autofilled.
       *
       * This property is used to expose the component's current data *to* the autofill service. The
       * service can then read this value, for example, to save it for future autofill suggestions.
       *
       * This is the counterpart to the [onFillData] action, which is used to *receive* data from the
       * autofill service.
       *
       * @sample androidx.compose.ui.samples.AutofillableTextFieldWithFillableDataSemantics
       * @see SemanticsProperties.FillableData
       */
      public var SemanticsPropertyReceiver.fillableData: FillableData by SemanticsProperties.FillableData

      /**
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1261-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1261
    endLine: 1295
    sha256: 3f5d91cf816ab4fdc297da4a7778ae342949992f675341a4b8bb776fd099ca09
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * A value to manually control screenreader traversal order.
       *
       * This API can be used to customize TalkBack traversal order. When the `traversalIndex` property is
       * set on a traversalGroup or on a screenreader-focusable node, then the sorting algorithm will
       * prioritize nodes with smaller `traversalIndex`s earlier. The default traversalIndex value is
       * zero, and traversalIndices are compared at a peer level.
       *
       * For example,` traversalIndex = -1f` can be used to force a top bar to be ordered earlier, and
       * `traversalIndex = 1f` to make a bottom bar ordered last, in the edge cases where this does not
       * happen by default. As another example, if you need to reorder two Buttons within a Row, then you
       * can set `isTraversalGroup = true` on the Row, and set `traversalIndex` on one of the Buttons.
       *
       * Note that if `traversalIndex` seems to have no effect, be sure to set `isTraversalGroup = true`
       * as well.
       */
      public var SemanticsPropertyReceiver.traversalIndex: Float by SemanticsProperties.TraversalIndex

      /** The horizontal scroll state of this node if this node is scrollable. */
      public var SemanticsPropertyReceiver.horizontalScrollAxisRange: ScrollAxisRange by
          SemanticsProperties.HorizontalScrollAxisRange

      /** The vertical scroll state of this node if this node is scrollable. */
      public var SemanticsPropertyReceiver.verticalScrollAxisRange: ScrollAxisRange by
          SemanticsProperties.VerticalScrollAxisRange

      /**
       * Whether this semantics node represents a Popup. Not to be confused with if this node is _part of_
       * a Popup.
       */
      public fun SemanticsPropertyReceiver.popup(): Unit {
          this[SemanticsProperties.IsPopup] = Unit
      }

      /**
       * Whether this element is a Dialog. Not to be confused with if this element is _part of_ a Dialog.
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1296-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1296
    endLine: 1330
    sha256: 72a2dcd05a19810e1681f7d528df8e2a7b185f8c5c119a1357f1caeb539e93b5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      public fun SemanticsPropertyReceiver.dialog(): Unit {
          this[SemanticsProperties.IsDialog] = Unit
      }

      /**
       * The type of user interface element. Accessibility services might use this to describe the element
       * or do customizations. Most roles can be automatically resolved by the semantics properties of
       * this element. But some elements with subtle differences need an exact role. If an exact role is
       * not listed in [Role], this property should not be set and the framework will automatically
       * resolve it.
       */
      public var SemanticsPropertyReceiver.role: Role by SemanticsProperties.Role

      /**
       * Test tag attached to this semantics node.
       *
       * This can be used to find nodes in testing frameworks:
       * - In Compose's built-in unit test framework, use with
       *   [onNodeWithTag][androidx.compose.ui.test.onNodeWithTag].
       * - For newer AccessibilityNodeInfo-based integration test frameworks, it can be matched in the
       *   extras with key "androidx.compose.ui.semantics.testTag"
       * - For legacy AccessibilityNodeInfo-based integration tests, it's optionally exposed as the
       *   resource id if [testTagsAsResourceId] is true (for matching with 'By.res' in UIAutomator).
       */
      public var SemanticsPropertyReceiver.testTag: String by SemanticsProperties.TestTag

      /**
       * Text of the semantics node. It must be real text instead of developer-set content description.
       *
       * @see SemanticsPropertyReceiver.editableText
       */
      public var SemanticsPropertyReceiver.text: AnnotatedString
          get() = throwSemanticsGetNotSupported()
          set(value) {
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1331-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1331
    endLine: 1365
    sha256: 598ec34d59165224ea83c68aee3a7a950dd7e5591363483611c047561d6517d7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              set(SemanticsProperties.Text, listOf(value))
          }

      /**
       * Text substitution of the semantics node. This property is only available after calling
       * [SemanticsActions.SetTextSubstitution].
       */
      public var SemanticsPropertyReceiver.textSubstitution: AnnotatedString by
          SemanticsProperties.TextSubstitution

      /**
       * Whether this element is showing the text substitution. This property is only available after
       * calling [SemanticsActions.SetTextSubstitution].
       */
      public var SemanticsPropertyReceiver.isShowingTextSubstitution: Boolean by
          SemanticsProperties.IsShowingTextSubstitution

      /**
       * The raw value of the text field after input transformations have been applied.
       *
       * This is an actual user input of the fields, e.g. a real password, after any input transformations
       * that might change or reject that input have been applied. This value is not affected by visual
       * transformations.
       */
      public var SemanticsPropertyReceiver.inputText: AnnotatedString by SemanticsProperties.InputText

      /**
       * A visual value of the text field after output transformations that change the visual
       * representation of the field's state have been applied.
       *
       * This is the value displayed to the user, for example "*******" in a password field.
       */
      public var SemanticsPropertyReceiver.editableText: AnnotatedString by
          SemanticsProperties.EditableText
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1366-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1366
    endLine: 1400
    sha256: e82a779a1b2029c407e96ac2db2f219b9ee84f8fbf8d6f3906930edc6b405ce8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /** Text selection range for the text field. */
      public var SemanticsPropertyReceiver.textSelectionRange: TextRange by
          SemanticsProperties.TextSelectionRange

      /** Text composition range for the text field. */
      public var SemanticsPropertyReceiver.textCompositionRange: TextRange? by
          SemanticsProperties.TextCompositionRange

      /**
       * Contains the IME action provided by the node.
       *
       * For example, "go to next form field" or "submit".
       *
       * A node that specifies an action should also specify a callback to perform the action via
       * [onImeAction].
       */
      @Deprecated("Pass the ImeAction to onImeAction instead.")
      @get:Deprecated("Pass the ImeAction to onImeAction instead.")
      @set:Deprecated("Pass the ImeAction to onImeAction instead.")
      public var SemanticsPropertyReceiver.imeAction: ImeAction by SemanticsProperties.ImeAction

      /**
       * Whether this element is selected (out of a list of possible selections).
       *
       * The presence of this property indicates that the element is selectable.
       */
      public var SemanticsPropertyReceiver.selected: Boolean by SemanticsProperties.Selected

      /**
       * This semantics marks node as a collection and provides the required information.
       *
       * @see collectionItemInfo
       */
      public var SemanticsPropertyReceiver.collectionInfo: CollectionInfo by
          SemanticsProperties.CollectionInfo
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1401-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1401
    endLine: 1435
    sha256: 204c36a5469f559500f98c14432ed9b5a2f96d0d03f3d8c0b1d1b55dcce68033
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * This semantics marks node as an items of a collection and provides the required information.
       *
       * If you mark items of a collection, you should also be marking the collection with
       * [collectionInfo].
       */
      public var SemanticsPropertyReceiver.collectionItemInfo: CollectionItemInfo by
          SemanticsProperties.CollectionItemInfo

      /**
       * The state of a toggleable component.
       *
       * The presence of this property indicates that the element is toggleable.
       */
      public var SemanticsPropertyReceiver.toggleableState: ToggleableState by
          SemanticsProperties.ToggleableState

      /**
       * This semantics provides the state of a text that has active suggestions. Text with suggestions
       * are typically associated with typing transliteration languages such as Chinese, Japanese, Korean
       * where multiple text replacement suggestions appear.
       *
       * It is used by accessibility services to determine what speech feedback should be announced as the
       * user is typing a transliteration text. For example, whether to announce that a replacement text
       * is selected.
       */
      public var SemanticsPropertyReceiver.inputTextSuggestionState: InputTextSuggestionState by
          SemanticsProperties.InputTextSuggestionState

      /** Whether this semantics node is editable, e.g. an editable text field. */
      public var SemanticsPropertyReceiver.isEditable: Boolean by SemanticsProperties.IsEditable

      /**
       * Marks this semantics node as a password field (e.g. for credentials and sensitive text input).
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 141
    endLine: 175
    sha256: c6a8c965b07812d9917d93866e8fa195f439d78e30bb037bd2ba798997f444e5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              )

          /** @see SemanticsPropertyReceiver.contentDataType */
          public val ContentDataType: SemanticsPropertyKey<ContentDataType> =
              SemanticsPropertyKey<ContentDataType>(
                  name = "ContentDataType",
                  mergePolicy = { parentValue, _ ->
                      // Never merge autofill data types
                      parentValue
                  },
              )

          /** @see SemanticsPropertyReceiver.fillableData */
          public val FillableData: SemanticsPropertyKey<FillableData> =
              SemanticsPropertyKey<FillableData>(
                  name = "FillableData",
                  mergePolicy = { parentValue, _ ->
                      // Never merge autofill types
                      parentValue
                  },
              )

          /** @see SemanticsPropertyReceiver.traversalIndex */
          public val TraversalIndex: SemanticsPropertyKey<Float> =
              SemanticsPropertyKey<Float>(
                  name = "TraversalIndex",
                  mergePolicy = { parentValue, _ ->
                      // Never merge traversal indices
                      parentValue
                  },
              )

          /** @see SemanticsPropertyReceiver.hintText */
          public val HintText: SemanticsPropertyKey<String> = AccessibilityKey<String>(name = "HintText")
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1436-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1436
    endLine: 1470
    sha256: 1fb3b864f016424b8fcb418cecf712012dc4427b59de6011436209f5b742dbaa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       *
       * Setting password semantics identifies the node as a credential field, ensuring appropriate
       * handling for credential security, autofill, and speech masking. If the password text is visually
       * revealed to the user, pass [isPasswordObfuscated] as `false` to allow screen readers (such as
       * TalkBack) to announce the revealed characters aloud.
       *
       * Note: [isPasswordObfuscated] is descriptive for accessibility services and tests; it does not
       * control the visual masking or rendering of the password text field itself (which is typically
       * managed by the text field's visual or codepoint transformation).
       *
       * @param isPasswordObfuscated whether the password in a secure text field is currently visually
       *   masked with obfuscation characters. When false (revealed), accessibility services such as
       *   TalkBack may announce the revealed character content aloud to the user instead of masking it.
       * @see SemanticsProperties.Password
       * @see SemanticsProperties.IsPasswordObfuscated
       */
      public fun SemanticsPropertyReceiver.password(isPasswordObfuscated: Boolean = true): Unit {
          this[SemanticsProperties.Password] = Unit
          this[SemanticsProperties.IsPasswordObfuscated] = isPasswordObfuscated
      }

      @Deprecated(message = "Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      public fun SemanticsPropertyReceiver.password(): Unit {
          password(isPasswordObfuscated = true)
      }

      /**
       * Mark semantics node that contains invalid input or error.
       *
       * @param [description] a localized description explaining an error to the accessibility user
       */
      public fun SemanticsPropertyReceiver.error(description: String): Unit {
          this[SemanticsProperties.Error] = description
      }
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1471-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1471
    endLine: 1505
    sha256: 92e33912815a9b50ce19ff9d3b9b5e08dd64b263563aacdde0ac747bf5c50c4e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      /**
       * The index of an item identified by a given key. The key is usually defined during the creation of
       * the container. If the key did not match any of the items' keys, the [mapping] must return -1.
       */
      public fun SemanticsPropertyReceiver.indexForKey(mapping: (Any) -> Int): Unit {
          this[SemanticsProperties.IndexForKey] = mapping
      }

      /**
       * Limits the number of characters that can be entered, e.g. in an editable text field. By default
       * this value is -1, signifying there is no maximum text length limit.
       */
      public var SemanticsPropertyReceiver.maxTextLength: Int by SemanticsProperties.MaxTextLength

      /** The shape of the UI element. */
      public var SemanticsPropertyReceiver.shape: Shape by SemanticsProperties.Shape

      /**
       * The node is marked as a collection of horizontally or vertically stacked selectable elements.
       *
       * Unlike [collectionInfo] which marks a collection of any elements and asks developer to provide
       * all the required information like number of elements etc., this semantics will populate the
       * number of selectable elements automatically. Note that if you use this semantics with lazy
       * collections, it won't get the number of elements in the collection.
       *
       * @see SemanticsPropertyReceiver.selected
       */
      public fun SemanticsPropertyReceiver.selectableGroup(): Unit {
          this[SemanticsProperties.SelectableGroup] = Unit
      }

      /** Custom actions which are defined by app developers. */
      public var SemanticsPropertyReceiver.customActions: List<CustomAccessibilityAction> by
          SemanticsActions.CustomActions
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1506-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1506
    endLine: 1540
    sha256: 4f418560d4f599a3227c7c5bf2b79b1a02ca11df8f04065932dfcb3b01da81e7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * Action to get a Text/TextField node's [TextLayoutResult]. The result is the first element of
       * layout (the argument of the AccessibilityAction).
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.GetTextLayoutResult] is called.
       */
      public fun SemanticsPropertyReceiver.getTextLayoutResult(
          label: String? = null,
          action: ((MutableList<TextLayoutResult>) -> Boolean)?,
      ): Unit {
          this[SemanticsActions.GetTextLayoutResult] = AccessibilityAction(label, action)
      }

      /**
       * Action to be performed when the node is clicked (single-tapped).
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.OnClick] is called.
       */
      public fun SemanticsPropertyReceiver.onClick(
          label: String? = null,
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsActions.OnClick] = AccessibilityAction(label, action)
      }

      /**
       * Action to be performed when the node is long clicked (long-pressed).
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.OnLongClick] is called.
       */
      public fun SemanticsPropertyReceiver.onLongClick(
          label: String? = null,
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1541-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1541
    endLine: 1575
    sha256: 360fd2f6e907f4bd41eba98c7ac0bdb168662af92996f09b7bd48b0f91a53e88
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsActions.OnLongClick] = AccessibilityAction(label, action)
      }

      /**
       * Action to asynchronously scroll by a specified amount.
       *
       * [scrollByOffset] should be preferred in most cases, since it is synchronous and returns the
       * amount of scroll that was actually consumed.
       *
       * Expected to be used in conjunction with [verticalScrollAxisRange]/[horizontalScrollAxisRange].
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when [SemanticsActions.ScrollBy] is called.
       */
      public fun SemanticsPropertyReceiver.scrollBy(
          label: String? = null,
          action: ((x: Float, y: Float) -> Boolean)?,
      ): Unit {
          this[SemanticsActions.ScrollBy] = AccessibilityAction(label, action)
      }

      /**
       * Action to scroll by a specified amount and return how much of the offset was actually consumed.
       * E.g. if the node can't scroll at all in the given direction, [Offset.Zero] should be returned.
       * The action should not return until the scroll operation has finished.
       *
       * Expected to be used in conjunction with [verticalScrollAxisRange]/[horizontalScrollAxisRange].
       *
       * Unlike [scrollBy], this action is synchronous, and returns the amount of scroll consumed.
       *
       * @param action Action to be performed when [SemanticsActions.ScrollByOffset] is called.
       */
      public fun SemanticsPropertyReceiver.scrollByOffset(
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1576-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1576
    endLine: 1610
    sha256: 81ec6973a3b075ccb3b466ea7f304fa0762b420883d165cc1441cbd9d160ecba
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          action: suspend (offset: Offset) -> Offset
      ): Unit {
          this[SemanticsActions.ScrollByOffset] = action
      }

      /**
       * Action to scroll a container to the index of one of its items.
       *
       * The [action] should throw an [IllegalArgumentException] if the index is out of bounds.
       */
      public fun SemanticsPropertyReceiver.scrollToIndex(
          label: String? = null,
          action: (Int) -> Boolean,
      ): Unit {
          this[SemanticsActions.ScrollToIndex] = AccessibilityAction(label, action)
      }

      /**
       * Action to autofill a TextField.
       *
       * Expected to be used in conjunction with [contentType] and [contentDataType] properties.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.OnAutofillText] is called.
       */
      @Deprecated(
          message = "Use onFillData instead",
          replaceWith = ReplaceWith("onFillData"),
          level = DeprecationLevel.WARNING,
      )
      public fun SemanticsPropertyReceiver.onAutofillText(
          label: String? = null,
          action: ((AnnotatedString) -> Boolean)?,
      ): Unit {
          @Suppress("DEPRECATION")
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1611-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1611
    endLine: 1645
    sha256: d6b6d6ee6bb98d982f1a8eef39d534774f5e2c65aadfa2db860f2bfbc74da644
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          this[SemanticsActions.OnAutofillText] = AccessibilityAction(label, action)
      }

      /**
       * Action that an autofill service can invoke to fill the component with data.
       *
       * The [action] will be called by the system, passing the [FillableData] that should be used to
       * update the component's state.
       *
       * This is the counterpart to the [fillableData] property, which is used to *provide* the
       * component's current data to the autofill service.
       *
       * @sample androidx.compose.ui.samples.AutofillableTextFieldWithFillableDataSemantics
       * @param label Optional label for this action.
       * @param action Action to be performed when [SemanticsActions.OnFillData] is called. The lambda
       *   receives the [FillableData] from the autofill service.
       */
      public fun SemanticsPropertyReceiver.onFillData(
          label: String? = null,
          action: ((FillableData) -> Boolean)?,
      ): Unit {
          this[SemanticsActions.OnFillData] = AccessibilityAction(label, action)
      }

      /**
       * Action to set the current value of the progress bar.
       *
       * Expected to be used in conjunction with progressBarRangeInfo.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.SetProgress] is called.
       */
      public fun SemanticsPropertyReceiver.setProgress(
          label: String? = null,
          action: ((Float) -> Boolean)?,
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1646-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1646
    endLine: 1680
    sha256: 3d0ef1644db98687bda39faa053ab1c681a14a174e0f0f251baea75ec03ece5e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ): Unit {
          this[SemanticsActions.SetProgress] = AccessibilityAction(label, action)
      }

      /**
       * Action to set the text contents of this node.
       *
       * Expected to be used on editable text fields.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when [SemanticsActions.SetText] is called.
       */
      public fun SemanticsPropertyReceiver.setText(
          label: String? = null,
          action: ((AnnotatedString) -> Boolean)?,
      ): Unit {
          this[SemanticsActions.SetText] = AccessibilityAction(label, action)
      }

      /**
       * Action to set the text substitution of this node.
       *
       * Expected to be used on non-editable text.
       *
       * Note, this action doesn't show the text substitution. Please call
       * [SemanticsPropertyReceiver.showTextSubstitution] to show the text substitution.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when [SemanticsActions.SetTextSubstitution] is called.
       */
      public fun SemanticsPropertyReceiver.setTextSubstitution(
          label: String? = null,
          action: ((AnnotatedString) -> Boolean)?,
      ): Unit {
          this[SemanticsActions.SetTextSubstitution] = AccessibilityAction(label, action)
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1681-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1681
    endLine: 1715
    sha256: c9006d62d33f390898ce6b99c5e91462193d69dde664aff3a0019d8b2ec46ece
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      /**
       * Action to show or hide the text substitution of this node.
       *
       * Expected to be used on non-editable text.
       *
       * Note, this action only takes effect when the node has the text substitution.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when [SemanticsActions.ShowTextSubstitution] is called.
       */
      public fun SemanticsPropertyReceiver.showTextSubstitution(
          label: String? = null,
          action: ((Boolean) -> Boolean)?,
      ): Unit {
          this[SemanticsActions.ShowTextSubstitution] = AccessibilityAction(label, action)
      }

      /**
       * Action to clear the text substitution of this node.
       *
       * Expected to be used on non-editable text.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when [SemanticsActions.ClearTextSubstitution] is called.
       */
      public fun SemanticsPropertyReceiver.clearTextSubstitution(
          label: String? = null,
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsActions.ClearTextSubstitution] = AccessibilityAction(label, action)
      }

      /**
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1716-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1716
    endLine: 1750
    sha256: f49687d84f1f278907261da55ffe9a1728a606d6a2255205ea97b846cec6bee9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Action to insert text into this node at the current cursor position, or replacing the selection
       * if text is selected.
       *
       * Expected to be used on editable text fields.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when [SemanticsActions.InsertTextAtCursor] is called.
       */
      public fun SemanticsPropertyReceiver.insertTextAtCursor(
          label: String? = null,
          action: ((AnnotatedString) -> Boolean)?,
      ): Unit {
          this[SemanticsActions.InsertTextAtCursor] = AccessibilityAction(label, action)
      }

      /**
       * Action to invoke the IME action handler configured on the node, as well as specify the type of
       * IME action provided by the node.
       *
       * Expected to be used on editable text fields.
       *
       * @param imeActionType The IME type, such as [ImeAction.Next] or [ImeAction.Search]
       * @param label Optional label for this action.
       * @param action Action to be performed when [SemanticsActions.OnImeAction] is called.
       * @see SemanticsProperties.ImeAction
       * @see SemanticsActions.OnImeAction
       */
      public fun SemanticsPropertyReceiver.onImeAction(
          imeActionType: ImeAction,
          label: String? = null,
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsProperties.ImeAction] = imeActionType
          this[SemanticsActions.OnImeAction] = AccessibilityAction(label, action)
      }
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1751-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1751
    endLine: 1785
    sha256: bf8ad648d1a9b64a1b27b49c7aaf62a5a88de50aea93c98112e329d154c2688f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      // b/322269946
      @Suppress("unused")
      @Deprecated(
          message = "Use `SemanticsPropertyReceiver.onImeAction` instead.",
          replaceWith =
              ReplaceWith(
                  "onImeAction(imeActionType = ImeAction.Default, label = label, action = action)",
                  "androidx.compose.ui.semantics.onImeAction",
                  "androidx.compose.ui.text.input.ImeAction",
              ),
          level = DeprecationLevel.ERROR,
      )
      public fun SemanticsPropertyReceiver.performImeAction(
          label: String? = null,
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsActions.OnImeAction] = AccessibilityAction(label, action)
      }

      /**
       * Action to set text selection by character index range.
       *
       * If this action is provided, the selection data must be provided using [textSelectionRange].
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.SetSelection] is called. The
       *   parameters to the action are: `startIndex`, `endIndex`, and whether the indices are relative to
       *   the original text or the transformed text (when a `VisualTransformation` is applied).
       */
      public fun SemanticsPropertyReceiver.setSelection(
          label: String? = null,
          action: ((startIndex: Int, endIndex: Int, relativeToOriginalText: Boolean) -> Boolean)?,
      ): Unit {
          this[SemanticsActions.SetSelection] = AccessibilityAction(label, action)
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 176
    endLine: 210
    sha256: de1714497d81ac89209b74664ddd121a59ac6e17e072d3954c88807a1969d993
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /** @see SemanticsPropertyReceiver.horizontalScrollAxisRange */
          public val HorizontalScrollAxisRange: SemanticsPropertyKey<ScrollAxisRange> =
              AccessibilityKey<ScrollAxisRange>("HorizontalScrollAxisRange")

          /** @see SemanticsPropertyReceiver.verticalScrollAxisRange */
          public val VerticalScrollAxisRange: SemanticsPropertyKey<ScrollAxisRange> =
              AccessibilityKey<ScrollAxisRange>("VerticalScrollAxisRange")

          /** @see SemanticsPropertyReceiver.popup */
          public val IsPopup: SemanticsPropertyKey<Unit> =
              AccessibilityKey<Unit>(
                  name = "IsPopup",
                  mergePolicy = { _, _ ->
                      throw IllegalStateException(
                          "merge function called on unmergeable property IsPopup. " +
                              "A popup should not be a child of a clickable/focusable node."
                      )
                  },
              )

          /** @see SemanticsPropertyReceiver.dialog */
          public val IsDialog: SemanticsPropertyKey<Unit> =
              AccessibilityKey<Unit>(
                  name = "IsDialog",
                  mergePolicy = { _, _ ->
                      throw IllegalStateException(
                          "merge function called on unmergeable property IsDialog. " +
                              "A dialog should not be a child of a clickable/focusable node."
                      )
                  },
              )

          /**
           * The type of user interface element. Accessibility services might use this to describe the
           * element or do customizations. Most roles can be automatically resolved by the semantics
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1786-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1786
    endLine: 1820
    sha256: 223bbfb34f78a0e72ea023c62082786b9b76e90f47d5f8780ebe1df53498e713
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      /**
       * Action to copy the text to the clipboard.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.CopyText] is called.
       */
      public fun SemanticsPropertyReceiver.copyText(
          label: String? = null,
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsActions.CopyText] = AccessibilityAction(label, action)
      }

      /**
       * Action to cut the text and copy it to the clipboard.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.CutText] is called.
       */
      public fun SemanticsPropertyReceiver.cutText(
          label: String? = null,
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsActions.CutText] = AccessibilityAction(label, action)
      }

      /**
       * This function adds the [SemanticsActions.PasteText] to the [SemanticsPropertyReceiver]. Use it to
       * indicate that element is open for accepting paste data from the clipboard. There is no need to
       * check if the clipboard data available as this is done by the framework. For this action to be
       * triggered, the element must also have the [SemanticsProperties.Focused] property set.
       *
       * @param label Optional label for this action.
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1821-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1821
    endLine: 1855
    sha256: 79cc30a5e968c4dc4f9d7d0e161d9934582d13fef1a9bf002abfeef3ebad903a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param action Action to be performed when the [SemanticsActions.PasteText] is called.
       * @see focused
       */
      public fun SemanticsPropertyReceiver.pasteText(
          label: String? = null,
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsActions.PasteText] = AccessibilityAction(label, action)
      }

      /**
       * Action to expand an expandable node.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.Expand] is called.
       */
      public fun SemanticsPropertyReceiver.expand(label: String? = null, action: (() -> Boolean)?): Unit {
          this[SemanticsActions.Expand] = AccessibilityAction(label, action)
      }

      /**
       * Action to collapse an expandable node.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.Collapse] is called.
       */
      public fun SemanticsPropertyReceiver.collapse(
          label: String? = null,
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsActions.Collapse] = AccessibilityAction(label, action)
      }

      /**
       * Action to dismiss a dismissible node.
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1856-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1856
    endLine: 1890
    sha256: ccd3550a8c1a006f1581fa175b0a5d646f58c2860ab2139a10fb7cb4c464c53a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.Dismiss] is called.
       */
      public fun SemanticsPropertyReceiver.dismiss(
          label: String? = null,
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsActions.Dismiss] = AccessibilityAction(label, action)
      }

      /**
       * Action that gives input focus to this node.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.RequestFocus] is called.
       */
      public fun SemanticsPropertyReceiver.requestFocus(
          label: String? = null,
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsActions.RequestFocus] = AccessibilityAction(label, action)
      }

      /**
       * Action to page up.
       *
       * Using [Role.Carousel] will prevent this action from being sent to accessibility services.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.PageUp] is called.
       * @see [Role.Carousel] for more information.
       */
      public fun SemanticsPropertyReceiver.pageUp(label: String? = null, action: (() -> Boolean)?): Unit {
          this[SemanticsActions.PageUp] = AccessibilityAction(label, action)
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1891-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1891
    endLine: 1925
    sha256: 3f2797c3b985eebba79f7157cefacf6fe5621be44d2a16c330112e97f7c157d0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      /**
       * Action to page down.
       *
       * Using [Role.Carousel] will prevent this action from being sent to accessibility services.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.PageDown] is called.
       * @see [Role.Carousel] for more information.
       */
      public fun SemanticsPropertyReceiver.pageDown(
          label: String? = null,
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsActions.PageDown] = AccessibilityAction(label, action)
      }

      /**
       * Action to page left.
       *
       * Using [Role.Carousel] will prevent this action from being sent to accessibility services.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.PageLeft] is called.
       * @see [Role.Carousel] for more information.
       */
      public fun SemanticsPropertyReceiver.pageLeft(
          label: String? = null,
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsActions.PageLeft] = AccessibilityAction(label, action)
      }

      /**
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1926-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1926
    endLine: 1960
    sha256: 50ec87975fa075e65e818c7c41c458f8c590a9a3b49154e99c7ba80c750857e1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Action to page right.
       *
       * Using [Role.Carousel] will prevent this action from being sent to accessibility services.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.PageRight] is called.
       * @see [Role.Carousel] for more information.
       */
      public fun SemanticsPropertyReceiver.pageRight(
          label: String? = null,
          action: (() -> Boolean)?,
      ): Unit {
          this[SemanticsActions.PageRight] = AccessibilityAction(label, action)
      }

      /**
       * Action to get a scrollable's active view port amount for scrolling actions.
       *
       * @param label Optional label for this action.
       * @param action Action to be performed when the [SemanticsActions.GetScrollViewportLength] is
       *   called.
       */
      public fun SemanticsPropertyReceiver.getScrollViewportLength(
          label: String? = null,
          action: (() -> Float?),
      ): Unit {
          this[SemanticsActions.GetScrollViewportLength] =
              AccessibilityAction(label) {
                  val viewport = action.invoke()
                  if (viewport == null) {
                      false
                  } else {
                      it.add(viewport)
                      true
                  }
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1961-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 1961
    endLine: 1963
    sha256: 5f886b40c82498eb10e7972ddbb416a2aa97be76f19d7e6bcc42c89d205b8ed4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              }
      }
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 211
    endLine: 245
    sha256: 5c060d5562e02041f841999050beec3bd6ccbf413c6bc97b4669c1870a17f27d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * properties of this element. But some elements with subtle differences need an exact role. If
           * an exact role is not listed in [Role], this property should not be set and the framework will
           * automatically resolve it.
           *
           * @see SemanticsPropertyReceiver.role
           */
          public val Role: SemanticsPropertyKey<Role> =
              AccessibilityKey<Role>("Role") { parentValue, _ -> parentValue }

          /** @see SemanticsPropertyReceiver.testTag */
          public val TestTag: SemanticsPropertyKey<String> =
              SemanticsPropertyKey<String>(
                  name = "TestTag",
                  isImportantForAccessibility = false,
                  mergePolicy = { parentValue, _ ->
                      // Never merge TestTags, to avoid leaking internal test tags to parents.
                      parentValue
                  },
              )

          /**
           * Marks a link within a text node (a link is represented by a
           * [androidx.compose.ui.text.LinkAnnotation]) for identification during automated testing. This
           * property is for internal use only and not intended for general use by developers.
           */
          public val LinkTestMarker: SemanticsPropertyKey<Unit> =
              SemanticsPropertyKey<Unit>(
                  name = "LinkTestMarker",
                  isImportantForAccessibility = false,
                  mergePolicy = { parentValue, _ -> parentValue },
              )

          /** @see SemanticsPropertyReceiver.text */
          public val Text: SemanticsPropertyKey<List<AnnotatedString>> =
              AccessibilityKey<List<AnnotatedString>>(
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 246
    endLine: 280
    sha256: a05722083296e1948de68226c1c69aa4d970de971cb230a1f8e9d53c767636ee
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  name = "Text",
                  mergePolicy = { parentValue, childValue ->
                      parentValue?.toMutableList()?.also { it.addAll(childValue) } ?: childValue
                  },
              )

          /** @see SemanticsPropertyReceiver.textSubstitution */
          public val TextSubstitution: SemanticsPropertyKey<AnnotatedString> =
              SemanticsPropertyKey<AnnotatedString>(name = "TextSubstitution")

          /** @see SemanticsPropertyReceiver.isShowingTextSubstitution */
          public val IsShowingTextSubstitution: SemanticsPropertyKey<Boolean> =
              SemanticsPropertyKey<Boolean>("IsShowingTextSubstitution")

          /** @see SemanticsPropertyReceiver.inputText */
          public val InputText: SemanticsPropertyKey<AnnotatedString> =
              AccessibilityKey<AnnotatedString>(name = "InputText")

          /** @see SemanticsPropertyReceiver.editableText */
          public val EditableText: SemanticsPropertyKey<AnnotatedString> =
              AccessibilityKey<AnnotatedString>(name = "EditableText")

          /** @see SemanticsPropertyReceiver.textSelectionRange */
          public val TextSelectionRange: SemanticsPropertyKey<TextRange> =
              AccessibilityKey<TextRange>("TextSelectionRange")

          /** @see SemanticsPropertyReceiver.textCompositionRange */
          public val TextCompositionRange: SemanticsPropertyKey<TextRange?> =
              AccessibilityKey<TextRange?>("TextCompositionRange")

          /** @see SemanticsPropertyReceiver.onImeAction */
          public val ImeAction: SemanticsPropertyKey<ImeAction> = AccessibilityKey<ImeAction>("ImeAction")

          /** @see SemanticsPropertyReceiver.selected */
          public val Selected: SemanticsPropertyKey<Boolean> = AccessibilityKey<Boolean>("Selected")
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 281
    endLine: 315
    sha256: 665dfcd1abd463ec3ca21371651e94cf8095863a4abbf48598abf3a9fab133a2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /** @see SemanticsPropertyReceiver.toggleableState */
          public val ToggleableState: SemanticsPropertyKey<ToggleableState> =
              AccessibilityKey<ToggleableState>("ToggleableState")

          /** @see SemanticsPropertyReceiver.inputTextSuggestionState */
          public val InputTextSuggestionState: SemanticsPropertyKey<InputTextSuggestionState> =
              AccessibilityKey<InputTextSuggestionState>("InputTextSuggestionState")

          /** @see SemanticsPropertyReceiver.password */
          public val Password: SemanticsPropertyKey<Unit> = AccessibilityKey<Unit>("Password")

          /** @see SemanticsPropertyReceiver.password */
          public val IsPasswordObfuscated: SemanticsPropertyKey<Boolean> =
              AccessibilityKey<Boolean>("IsPasswordObfuscated")

          /** @see SemanticsPropertyReceiver.error */
          public val Error: SemanticsPropertyKey<String> = AccessibilityKey<String>("Error")

          /** @see SemanticsPropertyReceiver.indexForKey */
          public val IndexForKey: SemanticsPropertyKey<(Any) -> Int> =
              SemanticsPropertyKey<(Any) -> Int>("IndexForKey")

          /** @see SemanticsPropertyReceiver.isEditable */
          public val IsEditable: SemanticsPropertyKey<Boolean> =
              SemanticsPropertyKey<Boolean>("IsEditable")

          /** @see SemanticsPropertyReceiver.maxTextLength */
          public val MaxTextLength: SemanticsPropertyKey<Int> = SemanticsPropertyKey<Int>("MaxTextLength")

          /** @see SemanticsPropertyReceiver.backgroundColor */
          public val BackgroundColor: SemanticsPropertyKey<ColorProducer> =
              SemanticsPropertyKey<ColorProducer>(
                  name = "BackgroundColor",
                  mergePolicy = { parentValue, _ -> parentValue },
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 316
    endLine: 350
    sha256: 7e75c657cea92e767f06f09829232bcf2deba7934d7de036dfe0bebcc18f2001
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              )

          /** @see SemanticsPropertyReceiver.shape */
          public val Shape: SemanticsPropertyKey<Shape> =
              SemanticsPropertyKey<Shape>(
                  name = "Shape",
                  isImportantForAccessibility = false,
                  mergePolicy = { parentValue, _ ->
                      // Never merge shapes
                      parentValue
                  },
              )
      }

      /**
       * Ths object defines keys of the actions which can be set in semantics and performed on the
       * semantics node.
       *
       * Each of these is intended to be set by the respective SemanticsPropertyReceiver extension instead
       * of used directly.
       */
      /*@VisibleForTesting*/
      public object SemanticsActions {
          /** @see SemanticsPropertyReceiver.getTextLayoutResult */
          public val GetTextLayoutResult:
              SemanticsPropertyKey<AccessibilityAction<(MutableList<TextLayoutResult>) -> Boolean>> =
              ActionPropertyKey<(MutableList<TextLayoutResult>) -> Boolean>("GetTextLayoutResult")

          /** @see SemanticsPropertyReceiver.onClick */
          public val OnClick: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("OnClick")

          /** @see SemanticsPropertyReceiver.onLongClick */
          public val OnLongClick: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("OnLongClick")
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 351
    endLine: 385
    sha256: 20efddb3d5c28d992130210ff90b50ec491b39ddb9bf3add280b9a549390dc39
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /** @see SemanticsPropertyReceiver.scrollBy */
          public val ScrollBy:
              SemanticsPropertyKey<AccessibilityAction<(x: Float, y: Float) -> Boolean>> =
              ActionPropertyKey<(x: Float, y: Float) -> Boolean>("ScrollBy")

          /** @see SemanticsPropertyReceiver.scrollByOffset */
          public val ScrollByOffset: SemanticsPropertyKey<suspend (offset: Offset) -> Offset> =
              SemanticsPropertyKey<suspend (offset: Offset) -> Offset>("ScrollByOffset")

          /** @see SemanticsPropertyReceiver.scrollToIndex */
          public val ScrollToIndex: SemanticsPropertyKey<AccessibilityAction<(Int) -> Boolean>> =
              ActionPropertyKey<(Int) -> Boolean>("ScrollToIndex")

          @Suppress("unused")
          @Deprecated(
              message = "Use `SemanticsActions.OnFillData` instead.",
              replaceWith =
                  ReplaceWith("OnFillData", "androidx.compose.ui.semantics.SemanticsActions.OnFillData"),
              level = DeprecationLevel.WARNING,
          )
          public val OnAutofillText:
              SemanticsPropertyKey<AccessibilityAction<(AnnotatedString) -> Boolean>> =
              ActionPropertyKey<(AnnotatedString) -> Boolean>("OnAutofillText")

          /** @see SemanticsPropertyReceiver.onFillData */
          public val OnFillData: SemanticsPropertyKey<AccessibilityAction<(FillableData) -> Boolean>> =
              ActionPropertyKey<(FillableData) -> Boolean>("OnFillData")

          /** @see SemanticsPropertyReceiver.setProgress */
          public val SetProgress:
              SemanticsPropertyKey<AccessibilityAction<(progress: Float) -> Boolean>> =
              ActionPropertyKey<(progress: Float) -> Boolean>("SetProgress")

          /** @see SemanticsPropertyReceiver.setSelection */
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 36
    endLine: 70
    sha256: b6aef87ff91678dfe7614b22c944d8f5dc3d60eada5dd14b1453cfae41dc2b35
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * Each of these is intended to be set by the respective SemanticsPropertyReceiver extension instead
       * of used directly.
       */
      /*@VisibleForTesting*/
      public object SemanticsProperties {
          /** @see SemanticsPropertyReceiver.contentDescription */
          public val ContentDescription: SemanticsPropertyKey<List<String>> =
              AccessibilityKey<List<String>>(
                  name = "ContentDescription",
                  mergePolicy = { parentValue, childValue ->
                      parentValue?.toMutableList()?.also { it.addAll(childValue) } ?: childValue
                  },
              )

          /** @see SemanticsPropertyReceiver.stateDescription */
          public val StateDescription: SemanticsPropertyKey<String> =
              AccessibilityKey<String>("StateDescription")

          /** @see SemanticsPropertyReceiver.progressBarRangeInfo */
          public val ProgressBarRangeInfo: SemanticsPropertyKey<ProgressBarRangeInfo> =
              AccessibilityKey<ProgressBarRangeInfo>("ProgressBarRangeInfo")

          /** @see SemanticsPropertyReceiver.paneTitle */
          public val PaneTitle: SemanticsPropertyKey<String> =
              AccessibilityKey<String>(
                  name = "PaneTitle",
                  mergePolicy = { _, _ ->
                      throw IllegalStateException(
                          "merge function called on unmergeable property PaneTitle. " +
                              "A pane should not be a descendant of a node that merges descendant " +
                              "semantics, such as a clickable."
                      )
                  },
              )
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 386
    endLine: 420
    sha256: 260fe332d34d926587ecc7bd1a2d20602e8c450604f3d4d66436e092bed193a9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val SetSelection:
              SemanticsPropertyKey<AccessibilityAction<(Int, Int, Boolean) -> Boolean>> =
              ActionPropertyKey<(Int, Int, Boolean) -> Boolean>("SetSelection")

          /** @see SemanticsPropertyReceiver.setText */
          public val SetText: SemanticsPropertyKey<AccessibilityAction<(AnnotatedString) -> Boolean>> =
              ActionPropertyKey<(AnnotatedString) -> Boolean>("SetText")

          /** @see SemanticsPropertyReceiver.setTextSubstitution */
          public val SetTextSubstitution:
              SemanticsPropertyKey<AccessibilityAction<(AnnotatedString) -> Boolean>> =
              ActionPropertyKey<(AnnotatedString) -> Boolean>("SetTextSubstitution")

          /** @see SemanticsPropertyReceiver.showTextSubstitution */
          public val ShowTextSubstitution:
              SemanticsPropertyKey<AccessibilityAction<(Boolean) -> Boolean>> =
              ActionPropertyKey<(Boolean) -> Boolean>("ShowTextSubstitution")

          /** @see SemanticsPropertyReceiver.clearTextSubstitution */
          public val ClearTextSubstitution: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("ClearTextSubstitution")

          /** @see SemanticsPropertyReceiver.insertTextAtCursor */
          public val InsertTextAtCursor:
              SemanticsPropertyKey<AccessibilityAction<(AnnotatedString) -> Boolean>> =
              ActionPropertyKey<(AnnotatedString) -> Boolean>("InsertTextAtCursor")

          /** @see SemanticsPropertyReceiver.onImeAction */
          public val OnImeAction: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("PerformImeAction")

          // b/322269946
          @Suppress("unused")
          @Deprecated(
              message = "Use `SemanticsActions.OnImeAction` instead.",
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 421
    endLine: 455
    sha256: 7a6868912a7184e8465e82f3b7ee6538354a94d133647b76f89c64664e7b4a9f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              replaceWith =
                  ReplaceWith(
                      "OnImeAction",
                      "androidx.compose.ui.semantics.SemanticsActions.OnImeAction",
                  ),
              level = DeprecationLevel.ERROR,
          )
          /** @see SemanticsPropertyReceiver.performImeAction */
          public val PerformImeAction: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("PerformImeAction")

          /** @see SemanticsPropertyReceiver.copyText */
          public val CopyText: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("CopyText")

          /** @see SemanticsPropertyReceiver.cutText */
          public val CutText: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("CutText")

          /** @see SemanticsPropertyReceiver.pasteText */
          public val PasteText: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("PasteText")

          /** @see SemanticsPropertyReceiver.expand */
          public val Expand: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("Expand")

          /** @see SemanticsPropertyReceiver.collapse */
          public val Collapse: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("Collapse")

          /** @see SemanticsPropertyReceiver.dismiss */
          public val Dismiss: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("Dismiss")
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 456
    endLine: 490
    sha256: a50eab0004ec9f929c20bcf41aeb4bc3bfdc3b4cf0c0c79d5155338d14eda94c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /** @see SemanticsPropertyReceiver.requestFocus */
          public val RequestFocus: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("RequestFocus")

          /** @see SemanticsPropertyReceiver.customActions */
          public val CustomActions: SemanticsPropertyKey<List<CustomAccessibilityAction>> =
              AccessibilityKey<List<CustomAccessibilityAction>>(
                  name = "CustomActions",
                  mergePolicy = { parentValue, childValue -> parentValue.orEmpty() + childValue },
              )

          /** @see SemanticsPropertyReceiver.pageUp */
          public val PageUp: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("PageUp")

          /** @see SemanticsPropertyReceiver.pageLeft */
          public val PageLeft: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("PageLeft")

          /** @see SemanticsPropertyReceiver.pageDown */
          public val PageDown: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("PageDown")

          /** @see SemanticsPropertyReceiver.pageRight */
          public val PageRight: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
              ActionPropertyKey<() -> Boolean>("PageRight")

          /** @see SemanticsPropertyReceiver.getScrollViewportLength */
          public val GetScrollViewportLength:
              SemanticsPropertyKey<AccessibilityAction<(MutableList<Float>) -> Boolean>> =
              ActionPropertyKey<(MutableList<Float>) -> Boolean>("GetScrollViewportLength")
      }

      /**
       * SemanticsPropertyKey is the infrastructure for setting key/value pairs inside semantics blocks in
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 491
    endLine: 525
    sha256: d7623fdcd1d345befeb9a4c447b4f355c97eaaa58da2389ebb4dda337a8f1ac5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       * a type-safe way. Each key has one particular statically defined value type T.
       */
      public class SemanticsPropertyKey<T>(
          /** The name of the property. Should be the same as the constant from which it is accessed. */
          public val name: String,
          internal val mergePolicy: (T?, T) -> T? = { parentValue, childValue ->
              parentValue ?: childValue
          },
      ) {
          /**
           * Whether this type of property provides information relevant to accessibility services.
           *
           * Most built-in semantics properties are relevant to accessibility, but a very common exception
           * is testTag. Nodes with only a testTag still need to be included in the AccessibilityNodeInfo
           * tree because UIAutomator tests rely on that, but we mark them `isImportantForAccessibility =
           * false` on the AccessibilityNodeInfo to inform accessibility services that they are best
           * ignored.
           *
           * The default value is false and it is not exposed as a public API. That's because it is
           * impossible in the first place for `SemanticsPropertyKey`s defined outside the UI package to
           * be relevant to accessibility, because for each accessibility-relevant SemanticsProperty type
           * to get plumbed into the AccessibilityNodeInfo, the private `createNodeInfo` implementation
           * must also have a line of code.
           */
          internal var isImportantForAccessibility = false
              private set

          /**
           * If this value is non-null, this semantics property will be exposed as an accessibility extra
           * via AccessibilityNodeInfo.getExtras with this value used as the key for the extra.
           */
          @ExperimentalComposeUiHostApi
          public var accessibilityExtraKey: String? = null
              internal set
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 526
    endLine: 560
    sha256: 408daabdf94df8cd9f2cc244e05c35bbd9fc71ef3f62ba585e0e08e1d7bd1cf1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          internal constructor(name: String, isImportantForAccessibility: Boolean) : this(name) {
              this.isImportantForAccessibility = isImportantForAccessibility
          }

          @OptIn(ExperimentalComposeUiHostApi::class)
          internal constructor(
              name: String,
              isImportantForAccessibility: Boolean,
              mergePolicy: (T?, T) -> T?,
              accessibilityExtraKey: String? = null,
          ) : this(name, mergePolicy) {
              this.isImportantForAccessibility = isImportantForAccessibility
              this.accessibilityExtraKey = accessibilityExtraKey
          }

          /**
           * Method implementing the semantics merge policy of a particular key.
           *
           * When mergeDescendants is set on a semantics node, then this function will called for each
           * descendant node of a given key in depth-first-search order. The parent value accumulates the
           * result of merging the values seen so far, similar to reduce().
           *
           * The default implementation returns the parent value if one exists, otherwise uses the child
           * element. This means by default, a SemanticsNode with mergeDescendants = true winds up with
           * the first value found for each key in its subtree in depth-first-search order.
           */
          public fun merge(parentValue: T?, childValue: T): T? {
              return mergePolicy(parentValue, childValue)
          }

          /** Throws [UnsupportedOperationException]. Should not be called. */
          // TODO(KT-6519): Remove this getter
          // TODO(KT-32770): Cannot deprecate this either as the getter is considered called by "by"
          public final operator fun getValue(
              thisRef: SemanticsPropertyReceiver,
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 561
    endLine: 595
    sha256: dc72a39859cd33056b270aeb9e333e34fcf16b9b95501b4d370cbb4b7d77f3a4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              property: KProperty<*>,
          ): T {
              return throwSemanticsGetNotSupported()
          }

          public final operator fun setValue(
              thisRef: SemanticsPropertyReceiver,
              property: KProperty<*>,
              value: T,
          ) {
              thisRef[this] = value
          }

          override fun toString(): String {
              return "AccessibilityKey: $name"
          }
      }

      private fun <T> throwSemanticsGetNotSupported(): T {
          throw UnsupportedOperationException(
              "You cannot retrieve a semantics property directly - " +
                  "use one of the SemanticsConfiguration.getOr* methods instead"
          )
      }

      @Suppress("NOTHING_TO_INLINE")
      // inline to avoid different static initialization order on different targets.
      // See https://youtrack.jetbrains.com/issue/KT-65040 for more information.
      internal inline fun <T> AccessibilityKey(name: String) =
          SemanticsPropertyKey<T>(name = name, isImportantForAccessibility = true)

      @Suppress("NOTHING_TO_INLINE")
      // inline to avoid different static initialization order on different targets
      // See https://youtrack.jetbrains.com/issue/KT-65040 for more information.
      internal inline fun <T> AccessibilityKey(name: String, noinline mergePolicy: (T?, T) -> T?) =
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 596
    endLine: 630
    sha256: 1364ac535a76201a6bab25a2613def3dcb6417d5ed39521dc9b924f14d769e28
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          SemanticsPropertyKey(name = name, isImportantForAccessibility = true, mergePolicy = mergePolicy)

      /**
       * Standard accessibility action.
       *
       * @param label The description of this action
       * @param action The function to invoke when this action is performed. The function should return a
       *   boolean result indicating whether the action is successfully handled. For example, a scroll
       *   forward action should return false if the widget is not enabled or has reached the end of the
       *   list. If multiple semantics blocks with the same AccessibilityAction are provided, the
       *   resulting AccessibilityAction's label/action will be the label/action of the outermost modifier
       *   with this key and nonnull label/action, or null if no nonnull label/action is found.
       */
      public class AccessibilityAction<T : Function<Boolean>>(
          public val label: String?,
          public val action: T?,
      ) {
          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is AccessibilityAction<*>) return false

              if (label != other.label) return false
              if (action != other.action) return false

              return true
          }

          override fun hashCode(): Int {
              var result = label?.hashCode() ?: 0
              result = 31 * result + action.hashCode()
              return result
          }

          override fun toString(): String {
              return "AccessibilityAction(label=$label, action=$action)"
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 631
    endLine: 665
    sha256: 288b724bfa6eceb408f72905503791da35f4fd848cd1517a6e437e15acb930a1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }
      }

      @Suppress("NOTHING_TO_INLINE")
      // inline to break static initialization cycle issue
      private inline fun <T : Function<Boolean>> ActionPropertyKey(name: String) =
          AccessibilityKey<AccessibilityAction<T>>(
              name = name,
              mergePolicy = { parentValue, childValue ->
                  AccessibilityAction(
                      parentValue?.label ?: childValue.label,
                      parentValue?.action ?: childValue.action,
                  )
              },
          )

      /**
       * Custom accessibility action.
       *
       * @param label The description of this action
       * @param action The function to invoke when this action is performed. The function should have no
       *   arguments and return a boolean result indicating whether the action is successfully handled.
       */
      public class CustomAccessibilityAction(public val label: String, public val action: () -> Boolean) {
          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is CustomAccessibilityAction) return false

              if (label != other.label) return false
              if (action !== other.action) return false

              return true
          }

          override fun hashCode(): Int {
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 666
    endLine: 700
    sha256: 5bed765c37432faa2ef6861b8c6895699257c0d76e440f5cf5238c95a9bfa3f2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              var result = label.hashCode()
              result = 31 * result + action.hashCode()
              return result
          }

          override fun toString(): String {
              return "CustomAccessibilityAction(label=$label, action=$action)"
          }
      }

      /**
       * Accessibility range information, to represent the status of a progress bar or seekable progress
       * bar.
       *
       * @param current current value in the range. Must not be NaN.
       * @param range range of this node
       * @param steps if greater than `0`, specifies the number of discrete values, evenly distributed
       *   between across the whole value range. If `0`, any value from the range specified can be chosen.
       *   Cannot be less than `0`.
       */
      public class ProgressBarRangeInfo(
          public val current: Float,
          public val range: ClosedFloatingPointRange<Float>,
          /*@IntRange(from = 0)*/
          public val steps: Int = 0,
      ) {
          init {
              require(!current.isNaN()) { "current must not be NaN" }
          }

          public companion object {
              /** Accessibility range information to present indeterminate progress bar */
              public val Indeterminate: ProgressBarRangeInfo = ProgressBarRangeInfo(0f, 0f..0f)
          }
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 701
    endLine: 735
    sha256: dd737a2d1245c6f8725f7efb4f2ce1b0360f2b8ae0c944f7d890a99e990e28d1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is ProgressBarRangeInfo) return false

              if (current != other.current) return false
              if (range != other.range) return false
              if (steps != other.steps) return false

              return true
          }

          override fun hashCode(): Int {
              var result = current.hashCode()
              result = 31 * result + range.hashCode()
              result = 31 * result + steps
              return result
          }

          override fun toString(): String {
              return "ProgressBarRangeInfo(current=$current, range=$range, steps=$steps)"
          }
      }

      /**
       * Information about the collection.
       *
       * A collection of items has [rowCount] rows and [columnCount] columns. For example, a vertical list
       * is a collection with one column, as many rows as the list items that are important for
       * accessibility; A table is a collection with several rows and several columns.
       *
       * @param rowCount the number of rows in the collection, or -1 if unknown
       * @param columnCount the number of columns in the collection, or -1 if unknown
       */
      public class CollectionInfo(public val rowCount: Int, public val columnCount: Int) {
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 71
    endLine: 105
    sha256: 8c49c3eb2f751e7079628832c2a06e594b8283960b85122e3c3117b02225414d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
      
          /** @see SemanticsPropertyReceiver.selectableGroup */
          public val SelectableGroup: SemanticsPropertyKey<Unit> =
              AccessibilityKey<Unit>("SelectableGroup")

          /** @see SemanticsPropertyReceiver.collectionInfo */
          public val CollectionInfo: SemanticsPropertyKey<CollectionInfo> =
              AccessibilityKey<CollectionInfo>("CollectionInfo")

          /** @see SemanticsPropertyReceiver.collectionItemInfo */
          public val CollectionItemInfo: SemanticsPropertyKey<CollectionItemInfo> =
              AccessibilityKey<CollectionItemInfo>("CollectionItemInfo")

          /** @see SemanticsPropertyReceiver.heading */
          public val Heading: SemanticsPropertyKey<Unit> = AccessibilityKey<Unit>("Heading")

          /** @see SemanticsPropertyReceiver.textEntryKey */
          public val TextEntryKey: SemanticsPropertyKey<Unit> = AccessibilityKey<Unit>("TextEntryKey")

          /** @see SemanticsPropertyReceiver.disabled */
          public val Disabled: SemanticsPropertyKey<Unit> = AccessibilityKey<Unit>("Disabled")

          /** @see SemanticsPropertyReceiver.liveRegion */
          public val LiveRegion: SemanticsPropertyKey<LiveRegionMode> =
              AccessibilityKey<LiveRegionMode>("LiveRegion")

          /** @see SemanticsPropertyReceiver.focused */
          public val Focused: SemanticsPropertyKey<Boolean> = AccessibilityKey<Boolean>("Focused")

          /** @see SemanticsPropertyReceiver.isContainer */
          @Deprecated("Use `isTraversalGroup` instead.", replaceWith = ReplaceWith("IsTraversalGroup"))
          // TODO(mnuzen): `isContainer` should not need to be an accessibility key after a new
          //  pruning API is added. See b/347038246 for more details.
          public val IsContainer: SemanticsPropertyKey<Boolean> = AccessibilityKey<Boolean>("IsContainer")
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 736
    endLine: 770
    sha256: eb0f87becbf4bd700a72325ba361cd0dc97d651118c4ccd25cdf00173e073dbb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is CollectionInfo) return false

              if (rowCount != other.rowCount) return false
              if (columnCount != other.columnCount) return false

              return true
          }

          override fun hashCode(): Int {
              var result = rowCount.hashCode()
              result = 31 * result + columnCount.hashCode()
              return result
          }

          override fun toString(): String {
              return "CollectionInfo(rowCount=$rowCount, columnCount=$columnCount)"
          }
      }

      /**
       * Information about the item of a collection.
       *
       * A collection item is contained in a collection, it starts at a given [rowIndex] and [columnIndex]
       * in the collection, and spans one or more rows and columns. For example, a header of two related
       * table columns starts at the first row and the first column, spans one row and two columns.
       *
       * @param rowIndex the index of the row at which item is located
       * @param rowSpan the number of rows the item spans
       * @param columnIndex the index of the column at which item is located
       * @param columnSpan the number of columns the item spans
       */
      public class CollectionItemInfo(
          public val rowIndex: Int,
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 771
    endLine: 805
    sha256: 23117251d1103a91f229d6358c0a0d450a1ccdfaf097907656f310ea2bc5077e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val rowSpan: Int,
          public val columnIndex: Int,
          public val columnSpan: Int,
      ) {
          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is CollectionItemInfo) return false

              if (rowIndex != other.rowIndex) return false
              if (rowSpan != other.rowSpan) return false
              if (columnIndex != other.columnIndex) return false
              if (columnSpan != other.columnSpan) return false

              return true
          }

          override fun hashCode(): Int {
              var result = rowIndex.hashCode()
              result = 31 * result + rowSpan.hashCode()
              result = 31 * result + columnIndex.hashCode()
              result = 31 * result + columnSpan.hashCode()
              return result
          }

          override fun toString(): String {
              return "CollectionItemInfo(rowIndex=$rowIndex, rowSpan=$rowSpan, columnIndex=$columnIndex, columnSpan=$columnSpan)"
          }
      }

      /**
       * The scroll state of one axis if this node is scrollable.
       *
       * @param value current 0-based scroll position value (either in pixels, or lazy-item count)
       * @param maxValue maximum bound for [value], or [Float.POSITIVE_INFINITY] if still unknown
       * @param reverseScrolling for horizontal scroll, when this is `true`, 0 [value] will mean right,
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 806
    endLine: 840
    sha256: b5c354563dbc8df861cd417dcc6719005755ecfa7b9d765a831ccc49e6491d71
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   when`false`, 0 [value] will mean left. For vertical scroll, when this is `true`, 0 [value] will
       *   mean bottom, when `false`, 0 [value] will mean top
       */
      public class ScrollAxisRange(
          public val value: () -> Float,
          public val maxValue: () -> Float,
          public val reverseScrolling: Boolean = false,
      ) {
          override fun toString(): String =
              "ScrollAxisRange(value=${value()}, maxValue=${maxValue()}, " +
                  "reverseScrolling=$reverseScrolling)"
      }

      /**
       * The state of an input text when suggestions are shown. This property specifies the different
       * available states the input text can be in when there are text suggestions available, typically
       * shown as a dialog window and when a user inputs a transliteration language specifically Chinese,
       * Japanese, Korean, and Vietnamese.
       *
       * On Android, this semantics property is only supported on SDK >= 37.
       *
       * @param isCommittedByInputMethodEditor whether the current text was committed by an input method
       *   editor done by the user, will stay false if the committed text was done programmatically, e.g.
       *   via Accessibility service.
       * @param isTransliterationSuggestionSelected whether a replacement text suggestion is selected to
       *   replace the transliterated text. If true, the text is from a transliteration language and is
       *   currently displaying one or multiple text suggestion replacements and that one of the
       *   suggestions is selected to replace the transliterated text. This does not indicate whether the
       *   text replacement suggestion has been committed. Will stay false for non-transliteration
       *   languages or if no suggestion is currently selected. If this were to be set to true for a
       *   non-transliteration language, it may affect accessibility services from announcing events
       *   correctly.
       */
      public class InputTextSuggestionState(
          public val isCommittedByInputMethodEditor: Boolean = false,
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 841
    endLine: 875
    sha256: a2f4d7986ae87e8566b834d8f72f667193656421bac58bc073a3c6f51edfe3f1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val isTransliterationSuggestionSelected: Boolean = false,
      ) {
          override fun toString(): String =
              "InputTextSuggestionState(isCommittedByInputMethodEditor=$isCommittedByInputMethodEditor," +
                  " suggestionSelected=$isTransliterationSuggestionSelected)"

          override fun hashCode(): Int {
              var result = isCommittedByInputMethodEditor.hashCode()
              result = 31 * result + isTransliterationSuggestionSelected.hashCode()
              return result
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is InputTextSuggestionState) return false

              if (isCommittedByInputMethodEditor != other.isCommittedByInputMethodEditor) return false
              if (isTransliterationSuggestionSelected != other.isTransliterationSuggestionSelected)
                  return false

              return true
          }

          @Suppress("unused")
          @Deprecated(
              message = "Use the new constructor that accepts the [isSuggestionSelected] parameter",
              level = DeprecationLevel.HIDDEN,
          )
          public constructor(
              isCommittedByInputMethodEditor: Boolean = false
          ) : this(isCommittedByInputMethodEditor, false)
      }

      /**
       * The type of user interface element. Accessibility services might use this to describe the element
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-876-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 876
    endLine: 910
    sha256: 5de21d786988274573ed288b5a2160dd6dd282ebbe59ada38c823e4e8208f5ac
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * or do customizations. Most roles can be automatically resolved by the semantics properties of
       * this element. But some elements with subtle differences need an exact role. If an exact role is
       * not listed, [SemanticsPropertyReceiver.role] should not be set and the framework will
       * automatically resolve it.
       */
      @Immutable
      @kotlin.jvm.JvmInline
      public value class Role private constructor(@Suppress("unused") private val value: Int) {
          public companion object {
              /**
               * This element is a button control. Associated semantics properties for accessibility:
               * [SemanticsProperties.Disabled], [SemanticsActions.OnClick]
               */
              public val Button: Role
                  get() = Role(0)

              /**
               * This element is a Checkbox which is a component that represents two states (checked /
               * unchecked). Associated semantics properties for accessibility:
               * [SemanticsProperties.Disabled], [SemanticsProperties.StateDescription],
               * [SemanticsActions.OnClick]
               */
              public val Checkbox: Role
                  get() = Role(1)

              /**
               * This element is a Switch which is a two state toggleable component that provides on/off
               * like options. Associated semantics properties for accessibility:
               * [SemanticsProperties.Disabled], [SemanticsProperties.StateDescription],
               * [SemanticsActions.OnClick]
               */
              public val Switch: Role
                  get() = Role(2)

              /**
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-911-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 911
    endLine: 945
    sha256: 2feb125f4b8b1d7a7bd829726b1a03fdefd95f044c852630c321833101db3f88
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * This element is a RadioButton which is a component to represent two states, selected and
               * not selected. Associated semantics properties for accessibility:
               * [SemanticsProperties.Disabled], [SemanticsProperties.StateDescription],
               * [SemanticsActions.OnClick]
               */
              public val RadioButton: Role
                  get() = Role(3)

              /**
               * This element is a Tab which represents a single page of content using a text label and/or
               * icon. A Tab also has two states: selected and not selected. Associated semantics
               * properties for accessibility: [SemanticsProperties.Disabled],
               * [SemanticsProperties.StateDescription], [SemanticsActions.OnClick]
               */
              public val Tab: Role
                  get() = Role(4)

              /**
               * This element is an image. Associated semantics properties for accessibility:
               * [SemanticsProperties.ContentDescription]
               */
              public val Image: Role
                  get() = Role(5)

              /**
               * This element is associated with a drop down menu. Associated semantics properties for
               * accessibility: [SemanticsActions.OnClick]
               */
              public val DropdownList: Role
                  get() = Role(6)

              /**
               * This element is a value picker. It should support the following accessibility actions to
               * enable selection of the next and previous values:
               *
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-946-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 946
    endLine: 980
    sha256: 305495f5c8f7491d9391a486c41b177b3e400eb317a40d80a64a0f5f34c3bbbf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * [android.view.accessibility.AccessibilityNodeInfo.ACTION_SCROLL_FORWARD]: Select the next
               * value.
               *
               * [android.view.accessibility.AccessibilityNodeInfo.ACTION_SCROLL_BACKWARD]: Select the
               * previous value.
               *
               * These actions allow accessibility services to interact with this node programmatically on
               * behalf of users, facilitating navigation within sets of selectable values.
               */
              public val ValuePicker: Role
                  get() = Role(7)

              /**
               * This element is a Carousel. This means that even if Pager actions are added, this element
               * will behave like a regular List collection.
               *
               * Associated semantics properties for Pager accessibility actions:
               * [SemanticsActions.PageUp],[SemanticsActions.PageDown],[SemanticsActions.PageLeft],
               * [SemanticsActions.PageRight]
               */
              public val Carousel: Role
                  get() = Role(8)
          }

          public override fun toString(): String =
              when (this) {
                  Button -> "Button"
                  Checkbox -> "Checkbox"
                  Switch -> "Switch"
                  RadioButton -> "RadioButton"
                  Tab -> "Tab"
                  Image -> "Image"
                  DropdownList -> "DropdownList"
                  ValuePicker -> "Picker"
                  Carousel -> "Carousel"
  - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-981-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt
    startLine: 981
    endLine: 1015
    sha256: 9071e118f7b4df89afc1755dc293b22f58b6444887c6eb076d340a7ceef40026
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  else -> "Unknown"
              }
      }

      /**
       * The mode of live region. Live region indicates to accessibility services they should
       * automatically notify the user about changes to the node's content description or text, or to the
       * content descriptions or text of the node's children (where applicable).
       */
      @Immutable
      @kotlin.jvm.JvmInline
      public value class LiveRegionMode private constructor(@Suppress("unused") private val value: Int) {
          public companion object {
              /**
               * Live region mode specifying that accessibility services should announce changes to this
               * node.
               */
              public val Polite: LiveRegionMode
                  get() = LiveRegionMode(0)

              /**
               * Live region mode specifying that accessibility services should interrupt ongoing speech
               * to immediately announce changes to this node.
               */
              public val Assertive: LiveRegionMode
                  get() = LiveRegionMode(1)
          }

          public override fun toString(): String =
              when (this) {
                  Polite -> "Polite"
                  Assertive -> "Assertive"
                  else -> "Unknown"
              }
      }
compose:
  id: live-androidx-ui-ui-ui-semantics-semanticsproperties
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.semantics
  sections:
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1016
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1016–1050)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.contentDescription
        - androidx.compose.ui.semantics.hintText
        - androidx.compose.ui.semantics.text
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1016-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1051
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1051–1085)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.ProgressBarRangeInfo
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.stateDescription
        - androidx.compose.ui.semantics.backgroundColor
        - androidx.compose.ui.semantics.progressBarRangeInfo
        - androidx.compose.ui.semantics.heading
        - androidx.compose.ui.semantics.text
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1051-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-106
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.isTraversalGroup
        - androidx.compose.ui.semantics.isSensitiveData
        - androidx.compose.ui.semantics.invisibleToUser
        - androidx.compose.ui.semantics.hideFromAccessibility
        - androidx.compose.ui.semantics.contentType
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1086
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1086–1120)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.textEntryKey
        - androidx.compose.ui.semantics.paneTitle
        - androidx.compose.ui.semantics.disabled
        - androidx.compose.ui.semantics.text
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1086-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1121
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1121–1155)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.LiveRegionMode
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.disabled
        - androidx.compose.ui.semantics.liveRegion
        - androidx.compose.ui.semantics.focused
        - androidx.compose.ui.semantics.text
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1121-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1156
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1156–1190)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.isContainer
        - androidx.compose.ui.semantics.isTraversalGroup
        - androidx.compose.ui.semantics.isSensitiveData
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1156-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1191
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1191–1225)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.invisibleToUser
        - androidx.compose.ui.semantics.hideFromAccessibility
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1191-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1226
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1226–1260)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.contentType
        - androidx.compose.ui.semantics.contentDataType
        - androidx.compose.ui.semantics.fillableData
        - androidx.compose.ui.semantics.onFillData
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1226-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1261
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1261–1295)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.ScrollAxisRange
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.isTraversalGroup
        - androidx.compose.ui.semantics.traversalIndex
        - androidx.compose.ui.semantics.horizontalScrollAxisRange
        - androidx.compose.ui.semantics.verticalScrollAxisRange
        - androidx.compose.ui.semantics.popup
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1261-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1296
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1296–1330)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.Role
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.dialog
        - androidx.compose.ui.semantics.role
        - androidx.compose.ui.semantics.testTag
        - androidx.compose.ui.semantics.text
        - androidx.compose.ui.semantics.editableText
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1296-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1331
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1331–1365)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.text
        - androidx.compose.ui.semantics.textSubstitution
        - androidx.compose.ui.semantics.isShowingTextSubstitution
        - androidx.compose.ui.semantics.inputText
        - androidx.compose.ui.semantics.editableText
        - androidx.compose.ui.semantics.password
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1331-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1366
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1366–1400)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.CollectionInfo
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.text
        - androidx.compose.ui.semantics.textSelectionRange
        - androidx.compose.ui.semantics.textCompositionRange
        - androidx.compose.ui.semantics.imeAction
        - androidx.compose.ui.semantics.selected
        - androidx.compose.ui.semantics.collectionInfo
        - androidx.compose.ui.semantics.collectionItemInfo
        - androidx.compose.ui.semantics.onImeAction
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1366-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1401
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1401–1435)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.CollectionItemInfo
        - androidx.compose.ui.semantics.InputTextSuggestionState
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.text
        - androidx.compose.ui.semantics.selected
        - androidx.compose.ui.semantics.collectionInfo
        - androidx.compose.ui.semantics.collectionItemInfo
        - androidx.compose.ui.semantics.toggleableState
        - androidx.compose.ui.semantics.inputTextSuggestionState
        - androidx.compose.ui.semantics.isEditable
        - androidx.compose.ui.semantics.password
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1401-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-141
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.hintText
        - androidx.compose.ui.semantics.contentDataType
        - androidx.compose.ui.semantics.fillableData
        - androidx.compose.ui.semantics.traversalIndex
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1436
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1436–1470)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.text
        - androidx.compose.ui.semantics.password
        - androidx.compose.ui.semantics.error
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1436-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1471
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1471–1505)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.CustomAccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.text
        - androidx.compose.ui.semantics.selected
        - androidx.compose.ui.semantics.collectionInfo
        - androidx.compose.ui.semantics.indexForKey
        - androidx.compose.ui.semantics.maxTextLength
        - androidx.compose.ui.semantics.shape
        - androidx.compose.ui.semantics.selectableGroup
        - androidx.compose.ui.semantics.customActions
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1471-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1506
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1506–1540)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.getTextLayoutResult
        - androidx.compose.ui.semantics.onClick
        - androidx.compose.ui.semantics.onLongClick
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1506-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1541
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1541–1575)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.horizontalScrollAxisRange
        - androidx.compose.ui.semantics.verticalScrollAxisRange
        - androidx.compose.ui.semantics.scrollBy
        - androidx.compose.ui.semantics.scrollByOffset
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1541-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1576
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1576–1610)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.contentType
        - androidx.compose.ui.semantics.contentDataType
        - androidx.compose.ui.semantics.scrollToIndex
        - androidx.compose.ui.semantics.onAutofillText
        - androidx.compose.ui.semantics.onFillData
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1576-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1611
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1611–1645)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.progressBarRangeInfo
        - androidx.compose.ui.semantics.fillableData
        - androidx.compose.ui.semantics.onFillData
        - androidx.compose.ui.semantics.setProgress
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1611-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1646
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1646–1680)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.text
        - androidx.compose.ui.semantics.setText
        - androidx.compose.ui.semantics.setTextSubstitution
        - androidx.compose.ui.semantics.showTextSubstitution
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1646-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1681
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1681–1715)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.text
        - androidx.compose.ui.semantics.showTextSubstitution
        - androidx.compose.ui.semantics.clearTextSubstitution
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1681-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1716
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1716–1750)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.text
        - androidx.compose.ui.semantics.selected
        - androidx.compose.ui.semantics.insertTextAtCursor
        - androidx.compose.ui.semantics.onImeAction
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1716-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1751
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1751–1785)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.text
        - androidx.compose.ui.semantics.textSelectionRange
        - androidx.compose.ui.semantics.onImeAction
        - androidx.compose.ui.semantics.performImeAction
        - androidx.compose.ui.semantics.setSelection
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1751-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-176
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.ScrollAxisRange
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.horizontalScrollAxisRange
        - androidx.compose.ui.semantics.verticalScrollAxisRange
        - androidx.compose.ui.semantics.popup
        - androidx.compose.ui.semantics.dialog
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1786
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1786–1820)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.text
        - androidx.compose.ui.semantics.copyText
        - androidx.compose.ui.semantics.cutText
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1786-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1821
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1821–1855)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.focused
        - androidx.compose.ui.semantics.pasteText
        - androidx.compose.ui.semantics.expand
        - androidx.compose.ui.semantics.collapse
        - androidx.compose.ui.semantics.dismiss
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1821-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1856
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1856–1890)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.Role
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.dismiss
        - androidx.compose.ui.semantics.requestFocus
        - androidx.compose.ui.semantics.pageUp
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1856-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1891
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1891–1925)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.Role
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.pageDown
        - androidx.compose.ui.semantics.pageLeft
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1891-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1926
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1926–1960)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.Role
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.pageRight
        - androidx.compose.ui.semantics.getScrollViewportLength
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1926-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1961
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1961–1963)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1961-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-211
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.Role
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.role
        - androidx.compose.ui.semantics.testTag
        - androidx.compose.ui.semantics.text
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-246
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.textSubstitution
        - androidx.compose.ui.semantics.isShowingTextSubstitution
        - androidx.compose.ui.semantics.inputText
        - androidx.compose.ui.semantics.editableText
        - androidx.compose.ui.semantics.textSelectionRange
        - androidx.compose.ui.semantics.textCompositionRange
        - androidx.compose.ui.semantics.selected
        - androidx.compose.ui.semantics.onImeAction
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-281
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 281–315)
      aliases:
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.InputTextSuggestionState
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.backgroundColor
        - androidx.compose.ui.semantics.toggleableState
        - androidx.compose.ui.semantics.inputTextSuggestionState
        - androidx.compose.ui.semantics.isEditable
        - androidx.compose.ui.semantics.password
        - androidx.compose.ui.semantics.error
        - androidx.compose.ui.semantics.indexForKey
        - androidx.compose.ui.semantics.maxTextLength
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-316
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.shape
        - androidx.compose.ui.semantics.getTextLayoutResult
        - androidx.compose.ui.semantics.onClick
        - androidx.compose.ui.semantics.onLongClick
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-351
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 351–385)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.scrollBy
        - androidx.compose.ui.semantics.scrollByOffset
        - androidx.compose.ui.semantics.scrollToIndex
        - androidx.compose.ui.semantics.onFillData
        - androidx.compose.ui.semantics.setProgress
        - androidx.compose.ui.semantics.setSelection
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-36
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.ProgressBarRangeInfo
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.contentDescription
        - androidx.compose.ui.semantics.stateDescription
        - androidx.compose.ui.semantics.progressBarRangeInfo
        - androidx.compose.ui.semantics.paneTitle
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-386
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 386–420)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.setText
        - androidx.compose.ui.semantics.setTextSubstitution
        - androidx.compose.ui.semantics.showTextSubstitution
        - androidx.compose.ui.semantics.clearTextSubstitution
        - androidx.compose.ui.semantics.insertTextAtCursor
        - androidx.compose.ui.semantics.onImeAction
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-386-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-421
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 421–455)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.performImeAction
        - androidx.compose.ui.semantics.copyText
        - androidx.compose.ui.semantics.cutText
        - androidx.compose.ui.semantics.pasteText
        - androidx.compose.ui.semantics.expand
        - androidx.compose.ui.semantics.collapse
        - androidx.compose.ui.semantics.dismiss
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-421-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-456
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 456–490)
      aliases:
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.CustomAccessibilityAction
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.customActions
        - androidx.compose.ui.semantics.requestFocus
        - androidx.compose.ui.semantics.pageUp
        - androidx.compose.ui.semantics.pageDown
        - androidx.compose.ui.semantics.pageLeft
        - androidx.compose.ui.semantics.pageRight
        - androidx.compose.ui.semantics.getScrollViewportLength
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-456-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-491
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 491–525)
      aliases:
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.testTag
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-491-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-526
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 526–560)
      aliases:
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-526-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-561
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 561–595)
      aliases:
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-561-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-596
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 596–630)
      aliases:
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.AccessibilityAction
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-596-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-631
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 631–665)
      aliases:
        - androidx.compose.ui.semantics.AccessibilityAction
        - androidx.compose.ui.semantics.CustomAccessibilityAction
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-631-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-666
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 666–700)
      aliases:
        - androidx.compose.ui.semantics.CustomAccessibilityAction
        - androidx.compose.ui.semantics.ProgressBarRangeInfo
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-666-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-701
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 701–735)
      aliases:
        - androidx.compose.ui.semantics.ProgressBarRangeInfo
        - androidx.compose.ui.semantics.CollectionInfo
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-701-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-71
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.semantics.SemanticsPropertyKey
        - androidx.compose.ui.semantics.CollectionInfo
        - androidx.compose.ui.semantics.CollectionItemInfo
        - androidx.compose.ui.semantics.LiveRegionMode
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.heading
        - androidx.compose.ui.semantics.textEntryKey
        - androidx.compose.ui.semantics.disabled
        - androidx.compose.ui.semantics.liveRegion
        - androidx.compose.ui.semantics.focused
        - androidx.compose.ui.semantics.isContainer
        - androidx.compose.ui.semantics.isTraversalGroup
        - androidx.compose.ui.semantics.collectionInfo
        - androidx.compose.ui.semantics.collectionItemInfo
        - androidx.compose.ui.semantics.selectableGroup
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-71-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-736
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 736–770)
      aliases:
        - androidx.compose.ui.semantics.CollectionInfo
        - androidx.compose.ui.semantics.CollectionItemInfo
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-736-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-771
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 771–805)
      aliases:
        - androidx.compose.ui.semantics.CollectionItemInfo
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-771-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-806
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 806–840)
      aliases:
        - androidx.compose.ui.semantics.ScrollAxisRange
        - androidx.compose.ui.semantics.InputTextSuggestionState
        - androidx.compose.ui.semantics.dialog
        - androidx.compose.ui.semantics.text
        - androidx.compose.ui.semantics.selected
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-806-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-841
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 841–875)
      aliases:
        - androidx.compose.ui.semantics.InputTextSuggestionState
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-841-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-876
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 876–910)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.Role
        - androidx.compose.ui.semantics.SemanticsPropertyReceiver
        - androidx.compose.ui.semantics.role
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-876-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-911
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 911–945)
      aliases:
        - androidx.compose.ui.semantics.SemanticsProperties
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.Role
        - androidx.compose.ui.semantics.text
        - androidx.compose.ui.semantics.selected
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-911-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-946
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 946–980)
      aliases:
        - androidx.compose.ui.semantics.SemanticsActions
        - androidx.compose.ui.semantics.Role
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-946-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-981
      title: androidx.compose.ui.semantics SemanticsProperties.kt source (lines 981–1015)
      aliases:
        - androidx.compose.ui.semantics.LiveRegionMode
        - androidx.compose.ui.semantics.text
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-981-source
      relatedIds: []
---

# androidx.compose.ui.semantics SemanticsProperties.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1–35)

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

package androidx.compose.ui.semantics

import androidx.compose.runtime.Immutable
import androidx.compose.ui.autofill.ContentDataType
import androidx.compose.ui.autofill.ContentType
import androidx.compose.ui.autofill.FillableData
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.ColorProducer
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.platform.ExperimentalComposeUiHostApi
import androidx.compose.ui.state.ToggleableState
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.TextLayoutResult
import androidx.compose.ui.text.TextRange
import androidx.compose.ui.text.input.ImeAction
import kotlin.reflect.KProperty

/**
 * General semantics properties, mainly used for accessibility and testing.

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1016–1050)


/**
 * SemanticsPropertyReceiver is the scope provided by semantics {} blocks, letting you set key/value
 * pairs primarily via extension functions.
 */
public interface SemanticsPropertyReceiver {
    public operator fun <T> set(key: SemanticsPropertyKey<T>, value: T)
}

/**
 * Developer-set content description of the semantics node.
 *
 * If this is not set, accessibility services will present the [text][SemanticsProperties.Text] of
 * this node as the content.
 *
 * This typically should not be set directly by applications, because some screen readers will cease
 * presenting other relevant information when this property is present. This is intended to be used
 * via Foundation components which are inherently intractable to automatically describe, such as
 * Image, Icon, and Canvas.
 */
public var SemanticsPropertyReceiver.contentDescription: String
    get() = throwSemanticsGetNotSupported()
    set(value) {
        set(SemanticsProperties.ContentDescription, listOf(value))
    }

/**
 * The hint text for an editable text field. This is typically used to provide guidance to the user
 * about what to enter in the text field.
 *
 * @sample androidx.compose.ui.samples.HintTextSample
 */
public var SemanticsPropertyReceiver.hintText: String by SemanticsProperties.HintText

/**

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1016-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1051–1085)

 * Developer-set state description of the semantics node.
 *
 * For example: on/off. If this not set, accessibility services will derive the state from other
 * semantics properties, like [ProgressBarRangeInfo], but it is not guaranteed and the format will
 * be decided by accessibility services.
 */
public var SemanticsPropertyReceiver.stateDescription: String by
    SemanticsProperties.StateDescription

/**
 * Background color of the node.
 *
 * This must incorporate the background's alpha property as well as the color's alpha, if provided.
 */
public var SemanticsPropertyReceiver.backgroundColor: ColorProducer by
    SemanticsProperties.BackgroundColor

/**
 * The semantics represents a range of possible values with a current value. For example, when used
 * on a slider control, this will allow screen readers to communicate the slider's state.
 */
public var SemanticsPropertyReceiver.progressBarRangeInfo: ProgressBarRangeInfo by
    SemanticsProperties.ProgressBarRangeInfo

/**
 * The node is marked as heading for accessibility.
 *
 * @see SemanticsProperties.Heading
 */
public fun SemanticsPropertyReceiver.heading(): Unit {
    this[SemanticsProperties.Heading] = Unit
}

/**
 * The node is marked as a text entry key for accessibility. This is used to indicate that this

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1051-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 106–140)

    /** @see SemanticsPropertyReceiver.isTraversalGroup */
    public val IsTraversalGroup: SemanticsPropertyKey<Boolean> =
        SemanticsPropertyKey<Boolean>("IsTraversalGroup")

    /** @see isSensitiveData */
    public val IsSensitiveData: SemanticsPropertyKey<Boolean> =
        SemanticsPropertyKey<Boolean>("IsSensitiveData")

    /** @see SemanticsPropertyReceiver.invisibleToUser */
    @Deprecated(
        "Use `hideFromAccessibility` instead.",
        replaceWith = ReplaceWith("HideFromAccessibility"),
    )
    // Retain for binary compatibility with aosp/3341487 in 1.7
    public val InvisibleToUser: SemanticsPropertyKey<Unit> =
        SemanticsPropertyKey<Unit>(
            name = "InvisibleToUser",
            mergePolicy = { parentValue, _ -> parentValue },
        )

    /** @see SemanticsPropertyReceiver.hideFromAccessibility */
    public val HideFromAccessibility: SemanticsPropertyKey<Unit> =
        SemanticsPropertyKey<Unit>(
            name = "HideFromAccessibility",
            mergePolicy = { parentValue, _ -> parentValue },
        )

    /** @see SemanticsPropertyReceiver.contentType */
    public val ContentType: SemanticsPropertyKey<ContentType> =
        SemanticsPropertyKey<ContentType>(
            name = "ContentType",
            mergePolicy = { parentValue, _ ->
                // Never merge autofill types
                parentValue
            },

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1086–1120)

 * composable acts as a key within a text entry interface, such as a custom on-screen keyboard.
 * Accessibility services can use this information to provide a better experience for users
 * interacting with custom text input methods.
 *
 * See
 * [AccessibilityNodeInfo.setTextEntryKey](https://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo#setTextEntryKey(boolean))
 * for more details.
 *
 * @see SemanticsProperties.TextEntryKey
 */
public fun SemanticsPropertyReceiver.textEntryKey(): Unit {
    this[SemanticsProperties.TextEntryKey] = Unit
}

/**
 * Accessibility-friendly title for a screen's pane. For accessibility purposes, a pane is a
 * visually distinct portion of a window, such as the contents of an open drawer, bottom sheet, or
 * snackbar. In order for accessibility services to understand a pane's window-like behavior, you
 * should give descriptive titles to your app's panes. Accessibility services can then provide more
 * granular information to users when a pane's appearance or content changes.
 *
 * A pane acts like a window or fragment container: it can host interactive or clickable elements
 * inside it, but a node with [paneTitle] cannot be merged into an ancestor node. Placing a node
 * with [paneTitle] (or a component that sets [paneTitle] internally) inside a parent that merges
 * descendant semantics (such as `Modifier.semantics(mergeDescendants = true)`,
 * `Modifier.clickable`, `Modifier.toggleable`, or `Modifier.selectable`) breaks the semantic
 * hierarchy and will throw an [IllegalStateException] when the merged semantics tree is computed
 * (for example, when an accessibility service or autofill is active, or during UI tests).
 *
 * @see SemanticsProperties.PaneTitle
 */
public var SemanticsPropertyReceiver.paneTitle: String by SemanticsProperties.PaneTitle

/**
 * Whether this semantics node is disabled. Note that proper [SemanticsActions] should still be

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1086-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1121–1155)

 * added when this property is set.
 *
 * @see SemanticsProperties.Disabled
 */
public fun SemanticsPropertyReceiver.disabled(): Unit {
    this[SemanticsProperties.Disabled] = Unit
}

/**
 * This node is marked as live region for accessibility. This indicates to accessibility services
 * they should automatically notify the user about changes to the node's content description or
 * text, or to the content descriptions or text of the node's children (where applicable). It should
 * be used with caution, especially with assertive mode which immediately stops the current audio
 * and the user does not hear the rest of the content. An example of proper use is a Snackbar which
 * is marked as [LiveRegionMode.Polite].
 *
 * @see SemanticsProperties.LiveRegion
 * @see LiveRegionMode
 */
public var SemanticsPropertyReceiver.liveRegion: LiveRegionMode by SemanticsProperties.LiveRegion

/**
 * Whether this semantics node is focused. The presence of this property indicates this node is
 * focusable
 *
 * @see SemanticsProperties.Focused
 */
public var SemanticsPropertyReceiver.focused: Boolean by SemanticsProperties.Focused

/**
 * Whether this semantics node is a container. This is defined as a node whose function is to serve
 * as a boundary or border in organizing its children.
 *
 * @see SemanticsProperties.IsContainer
 */

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1121-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1156–1190)

@Deprecated("Use `isTraversalGroup` instead.", replaceWith = ReplaceWith("isTraversalGroup"))
@Suppress("DEPRECATION")
public var SemanticsPropertyReceiver.isContainer: Boolean by SemanticsProperties.IsContainer

/**
 * Whether this semantics node is a traversal group.
 *
 * See https://developer.android.com/develop/ui/compose/accessibility/traversal
 *
 * @see SemanticsProperties.IsTraversalGroup
 */
public var SemanticsPropertyReceiver.isTraversalGroup: Boolean by
    SemanticsProperties.IsTraversalGroup

/**
 * Whether this semantics node should only allow interactions from
 * [android.accessibilityservice.AccessibilityService]s with the
 * [android.accessibilityservice.AccessibilityServiceInfo.isAccessibilityTool] property set to true.
 *
 * This property allows the node to remain visible and interactive to Accessibility Services
 * declared as accessibility tools that assist users with disabilities, while simultaneously hiding
 * this node and its generated AccessibilityEvents from other Accessibility Services that are not
 * declared as accessibility tools.
 *
 * If looking for a way to hide the node from all Accessibility Services then consider
 * [SemanticsProperties.HideFromAccessibility] instead.
 *
 * @see SemanticsProperties.IsSensitiveData
 */
public var SemanticsPropertyReceiver.isSensitiveData: Boolean by SemanticsProperties.IsSensitiveData

/**
 * Whether this node is specially known to be invisible to the user.
 *
 * For example, if the node is currently occluded by a dark semitransparent pane above it, then for

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1156-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1191–1225)

 * all practical purposes the node is invisible to the user, but the system cannot automatically
 * determine that. To make the screen reader linear navigation skip over this type of invisible
 * node, this property can be set.
 *
 * If looking for a way to hide semantics of small items from screen readers because they're
 * redundant with semantics of their parent, consider [SemanticsModifier.clearAndSetSemantics]
 * instead.
 */
@Deprecated(
    "Use `hideFromAccessibility()` instead.",
    replaceWith = ReplaceWith("hideFromAccessibility()"),
)
@Suppress("DEPRECATION")
// Retain for binary compatibility with aosp/3341487 in 1.7
public fun SemanticsPropertyReceiver.invisibleToUser(): Unit {
    this[SemanticsProperties.InvisibleToUser] = Unit
}

/**
 * If present, this node is considered hidden from accessibility services.
 *
 * For example, if the node is currently occluded by a dark semitransparent pane above it, then for
 * all practical purposes the node should not be announced to the user. Since the system cannot
 * automatically determine that, this property can be set to make the screen reader linear
 * navigation skip over this type of node.
 *
 * If looking for a way to clear semantics of small items from the UI tree completely because they
 * are redundant with semantics of their parent, consider [SemanticsModifier.clearAndSetSemantics]
 * instead.
 */
public fun SemanticsPropertyReceiver.hideFromAccessibility(): Unit {
    this[SemanticsProperties.HideFromAccessibility] = Unit
}

/**

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1191-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1226–1260)

 * Content field type information.
 *
 * This API can be used to indicate to Autofill services what _kind of field_ is associated with
 * this node. Not to be confused with the _data type_ to be entered into the field.
 *
 * @see SemanticsProperties.ContentType
 */
public var SemanticsPropertyReceiver.contentType: ContentType by SemanticsProperties.ContentType

/**
 * Content data type information.
 *
 * This API can be used to indicate to Autofill services what _kind of data_ is meant to be
 * suggested for this field. Not to be confused with the _type_ of the field.
 *
 * @see SemanticsProperties.ContentType
 */
public var SemanticsPropertyReceiver.contentDataType: ContentDataType by
    SemanticsProperties.ContentDataType

/**
 * The current value of a component that can be autofilled.
 *
 * This property is used to expose the component's current data *to* the autofill service. The
 * service can then read this value, for example, to save it for future autofill suggestions.
 *
 * This is the counterpart to the [onFillData] action, which is used to *receive* data from the
 * autofill service.
 *
 * @sample androidx.compose.ui.samples.AutofillableTextFieldWithFillableDataSemantics
 * @see SemanticsProperties.FillableData
 */
public var SemanticsPropertyReceiver.fillableData: FillableData by SemanticsProperties.FillableData

/**

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1226-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1261–1295)

 * A value to manually control screenreader traversal order.
 *
 * This API can be used to customize TalkBack traversal order. When the `traversalIndex` property is
 * set on a traversalGroup or on a screenreader-focusable node, then the sorting algorithm will
 * prioritize nodes with smaller `traversalIndex`s earlier. The default traversalIndex value is
 * zero, and traversalIndices are compared at a peer level.
 *
 * For example,` traversalIndex = -1f` can be used to force a top bar to be ordered earlier, and
 * `traversalIndex = 1f` to make a bottom bar ordered last, in the edge cases where this does not
 * happen by default. As another example, if you need to reorder two Buttons within a Row, then you
 * can set `isTraversalGroup = true` on the Row, and set `traversalIndex` on one of the Buttons.
 *
 * Note that if `traversalIndex` seems to have no effect, be sure to set `isTraversalGroup = true`
 * as well.
 */
public var SemanticsPropertyReceiver.traversalIndex: Float by SemanticsProperties.TraversalIndex

/** The horizontal scroll state of this node if this node is scrollable. */
public var SemanticsPropertyReceiver.horizontalScrollAxisRange: ScrollAxisRange by
    SemanticsProperties.HorizontalScrollAxisRange

/** The vertical scroll state of this node if this node is scrollable. */
public var SemanticsPropertyReceiver.verticalScrollAxisRange: ScrollAxisRange by
    SemanticsProperties.VerticalScrollAxisRange

/**
 * Whether this semantics node represents a Popup. Not to be confused with if this node is _part of_
 * a Popup.
 */
public fun SemanticsPropertyReceiver.popup(): Unit {
    this[SemanticsProperties.IsPopup] = Unit
}

/**
 * Whether this element is a Dialog. Not to be confused with if this element is _part of_ a Dialog.

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1261-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1296–1330)

 */
public fun SemanticsPropertyReceiver.dialog(): Unit {
    this[SemanticsProperties.IsDialog] = Unit
}

/**
 * The type of user interface element. Accessibility services might use this to describe the element
 * or do customizations. Most roles can be automatically resolved by the semantics properties of
 * this element. But some elements with subtle differences need an exact role. If an exact role is
 * not listed in [Role], this property should not be set and the framework will automatically
 * resolve it.
 */
public var SemanticsPropertyReceiver.role: Role by SemanticsProperties.Role

/**
 * Test tag attached to this semantics node.
 *
 * This can be used to find nodes in testing frameworks:
 * - In Compose's built-in unit test framework, use with
 *   [onNodeWithTag][androidx.compose.ui.test.onNodeWithTag].
 * - For newer AccessibilityNodeInfo-based integration test frameworks, it can be matched in the
 *   extras with key "androidx.compose.ui.semantics.testTag"
 * - For legacy AccessibilityNodeInfo-based integration tests, it's optionally exposed as the
 *   resource id if [testTagsAsResourceId] is true (for matching with 'By.res' in UIAutomator).
 */
public var SemanticsPropertyReceiver.testTag: String by SemanticsProperties.TestTag

/**
 * Text of the semantics node. It must be real text instead of developer-set content description.
 *
 * @see SemanticsPropertyReceiver.editableText
 */
public var SemanticsPropertyReceiver.text: AnnotatedString
    get() = throwSemanticsGetNotSupported()
    set(value) {

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1296-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1331–1365)

        set(SemanticsProperties.Text, listOf(value))
    }

/**
 * Text substitution of the semantics node. This property is only available after calling
 * [SemanticsActions.SetTextSubstitution].
 */
public var SemanticsPropertyReceiver.textSubstitution: AnnotatedString by
    SemanticsProperties.TextSubstitution

/**
 * Whether this element is showing the text substitution. This property is only available after
 * calling [SemanticsActions.SetTextSubstitution].
 */
public var SemanticsPropertyReceiver.isShowingTextSubstitution: Boolean by
    SemanticsProperties.IsShowingTextSubstitution

/**
 * The raw value of the text field after input transformations have been applied.
 *
 * This is an actual user input of the fields, e.g. a real password, after any input transformations
 * that might change or reject that input have been applied. This value is not affected by visual
 * transformations.
 */
public var SemanticsPropertyReceiver.inputText: AnnotatedString by SemanticsProperties.InputText

/**
 * A visual value of the text field after output transformations that change the visual
 * representation of the field's state have been applied.
 *
 * This is the value displayed to the user, for example "*******" in a password field.
 */
public var SemanticsPropertyReceiver.editableText: AnnotatedString by
    SemanticsProperties.EditableText


Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1331-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1366–1400)

/** Text selection range for the text field. */
public var SemanticsPropertyReceiver.textSelectionRange: TextRange by
    SemanticsProperties.TextSelectionRange

/** Text composition range for the text field. */
public var SemanticsPropertyReceiver.textCompositionRange: TextRange? by
    SemanticsProperties.TextCompositionRange

/**
 * Contains the IME action provided by the node.
 *
 * For example, "go to next form field" or "submit".
 *
 * A node that specifies an action should also specify a callback to perform the action via
 * [onImeAction].
 */
@Deprecated("Pass the ImeAction to onImeAction instead.")
@get:Deprecated("Pass the ImeAction to onImeAction instead.")
@set:Deprecated("Pass the ImeAction to onImeAction instead.")
public var SemanticsPropertyReceiver.imeAction: ImeAction by SemanticsProperties.ImeAction

/**
 * Whether this element is selected (out of a list of possible selections).
 *
 * The presence of this property indicates that the element is selectable.
 */
public var SemanticsPropertyReceiver.selected: Boolean by SemanticsProperties.Selected

/**
 * This semantics marks node as a collection and provides the required information.
 *
 * @see collectionItemInfo
 */
public var SemanticsPropertyReceiver.collectionInfo: CollectionInfo by
    SemanticsProperties.CollectionInfo

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1366-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1401–1435)


/**
 * This semantics marks node as an items of a collection and provides the required information.
 *
 * If you mark items of a collection, you should also be marking the collection with
 * [collectionInfo].
 */
public var SemanticsPropertyReceiver.collectionItemInfo: CollectionItemInfo by
    SemanticsProperties.CollectionItemInfo

/**
 * The state of a toggleable component.
 *
 * The presence of this property indicates that the element is toggleable.
 */
public var SemanticsPropertyReceiver.toggleableState: ToggleableState by
    SemanticsProperties.ToggleableState

/**
 * This semantics provides the state of a text that has active suggestions. Text with suggestions
 * are typically associated with typing transliteration languages such as Chinese, Japanese, Korean
 * where multiple text replacement suggestions appear.
 *
 * It is used by accessibility services to determine what speech feedback should be announced as the
 * user is typing a transliteration text. For example, whether to announce that a replacement text
 * is selected.
 */
public var SemanticsPropertyReceiver.inputTextSuggestionState: InputTextSuggestionState by
    SemanticsProperties.InputTextSuggestionState

/** Whether this semantics node is editable, e.g. an editable text field. */
public var SemanticsPropertyReceiver.isEditable: Boolean by SemanticsProperties.IsEditable

/**
 * Marks this semantics node as a password field (e.g. for credentials and sensitive text input).

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1401-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 141–175)

        )

    /** @see SemanticsPropertyReceiver.contentDataType */
    public val ContentDataType: SemanticsPropertyKey<ContentDataType> =
        SemanticsPropertyKey<ContentDataType>(
            name = "ContentDataType",
            mergePolicy = { parentValue, _ ->
                // Never merge autofill data types
                parentValue
            },
        )

    /** @see SemanticsPropertyReceiver.fillableData */
    public val FillableData: SemanticsPropertyKey<FillableData> =
        SemanticsPropertyKey<FillableData>(
            name = "FillableData",
            mergePolicy = { parentValue, _ ->
                // Never merge autofill types
                parentValue
            },
        )

    /** @see SemanticsPropertyReceiver.traversalIndex */
    public val TraversalIndex: SemanticsPropertyKey<Float> =
        SemanticsPropertyKey<Float>(
            name = "TraversalIndex",
            mergePolicy = { parentValue, _ ->
                // Never merge traversal indices
                parentValue
            },
        )

    /** @see SemanticsPropertyReceiver.hintText */
    public val HintText: SemanticsPropertyKey<String> = AccessibilityKey<String>(name = "HintText")


Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1436–1470)

 *
 * Setting password semantics identifies the node as a credential field, ensuring appropriate
 * handling for credential security, autofill, and speech masking. If the password text is visually
 * revealed to the user, pass [isPasswordObfuscated] as `false` to allow screen readers (such as
 * TalkBack) to announce the revealed characters aloud.
 *
 * Note: [isPasswordObfuscated] is descriptive for accessibility services and tests; it does not
 * control the visual masking or rendering of the password text field itself (which is typically
 * managed by the text field's visual or codepoint transformation).
 *
 * @param isPasswordObfuscated whether the password in a secure text field is currently visually
 *   masked with obfuscation characters. When false (revealed), accessibility services such as
 *   TalkBack may announce the revealed character content aloud to the user instead of masking it.
 * @see SemanticsProperties.Password
 * @see SemanticsProperties.IsPasswordObfuscated
 */
public fun SemanticsPropertyReceiver.password(isPasswordObfuscated: Boolean = true): Unit {
    this[SemanticsProperties.Password] = Unit
    this[SemanticsProperties.IsPasswordObfuscated] = isPasswordObfuscated
}

@Deprecated(message = "Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
public fun SemanticsPropertyReceiver.password(): Unit {
    password(isPasswordObfuscated = true)
}

/**
 * Mark semantics node that contains invalid input or error.
 *
 * @param [description] a localized description explaining an error to the accessibility user
 */
public fun SemanticsPropertyReceiver.error(description: String): Unit {
    this[SemanticsProperties.Error] = description
}


Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1436-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1471–1505)

/**
 * The index of an item identified by a given key. The key is usually defined during the creation of
 * the container. If the key did not match any of the items' keys, the [mapping] must return -1.
 */
public fun SemanticsPropertyReceiver.indexForKey(mapping: (Any) -> Int): Unit {
    this[SemanticsProperties.IndexForKey] = mapping
}

/**
 * Limits the number of characters that can be entered, e.g. in an editable text field. By default
 * this value is -1, signifying there is no maximum text length limit.
 */
public var SemanticsPropertyReceiver.maxTextLength: Int by SemanticsProperties.MaxTextLength

/** The shape of the UI element. */
public var SemanticsPropertyReceiver.shape: Shape by SemanticsProperties.Shape

/**
 * The node is marked as a collection of horizontally or vertically stacked selectable elements.
 *
 * Unlike [collectionInfo] which marks a collection of any elements and asks developer to provide
 * all the required information like number of elements etc., this semantics will populate the
 * number of selectable elements automatically. Note that if you use this semantics with lazy
 * collections, it won't get the number of elements in the collection.
 *
 * @see SemanticsPropertyReceiver.selected
 */
public fun SemanticsPropertyReceiver.selectableGroup(): Unit {
    this[SemanticsProperties.SelectableGroup] = Unit
}

/** Custom actions which are defined by app developers. */
public var SemanticsPropertyReceiver.customActions: List<CustomAccessibilityAction> by
    SemanticsActions.CustomActions


Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1471-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1506–1540)

/**
 * Action to get a Text/TextField node's [TextLayoutResult]. The result is the first element of
 * layout (the argument of the AccessibilityAction).
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.GetTextLayoutResult] is called.
 */
public fun SemanticsPropertyReceiver.getTextLayoutResult(
    label: String? = null,
    action: ((MutableList<TextLayoutResult>) -> Boolean)?,
): Unit {
    this[SemanticsActions.GetTextLayoutResult] = AccessibilityAction(label, action)
}

/**
 * Action to be performed when the node is clicked (single-tapped).
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.OnClick] is called.
 */
public fun SemanticsPropertyReceiver.onClick(
    label: String? = null,
    action: (() -> Boolean)?,
): Unit {
    this[SemanticsActions.OnClick] = AccessibilityAction(label, action)
}

/**
 * Action to be performed when the node is long clicked (long-pressed).
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.OnLongClick] is called.
 */
public fun SemanticsPropertyReceiver.onLongClick(
    label: String? = null,

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1506-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1541–1575)

    action: (() -> Boolean)?,
): Unit {
    this[SemanticsActions.OnLongClick] = AccessibilityAction(label, action)
}

/**
 * Action to asynchronously scroll by a specified amount.
 *
 * [scrollByOffset] should be preferred in most cases, since it is synchronous and returns the
 * amount of scroll that was actually consumed.
 *
 * Expected to be used in conjunction with [verticalScrollAxisRange]/[horizontalScrollAxisRange].
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when [SemanticsActions.ScrollBy] is called.
 */
public fun SemanticsPropertyReceiver.scrollBy(
    label: String? = null,
    action: ((x: Float, y: Float) -> Boolean)?,
): Unit {
    this[SemanticsActions.ScrollBy] = AccessibilityAction(label, action)
}

/**
 * Action to scroll by a specified amount and return how much of the offset was actually consumed.
 * E.g. if the node can't scroll at all in the given direction, [Offset.Zero] should be returned.
 * The action should not return until the scroll operation has finished.
 *
 * Expected to be used in conjunction with [verticalScrollAxisRange]/[horizontalScrollAxisRange].
 *
 * Unlike [scrollBy], this action is synchronous, and returns the amount of scroll consumed.
 *
 * @param action Action to be performed when [SemanticsActions.ScrollByOffset] is called.
 */
public fun SemanticsPropertyReceiver.scrollByOffset(

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1541-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1576–1610)

    action: suspend (offset: Offset) -> Offset
): Unit {
    this[SemanticsActions.ScrollByOffset] = action
}

/**
 * Action to scroll a container to the index of one of its items.
 *
 * The [action] should throw an [IllegalArgumentException] if the index is out of bounds.
 */
public fun SemanticsPropertyReceiver.scrollToIndex(
    label: String? = null,
    action: (Int) -> Boolean,
): Unit {
    this[SemanticsActions.ScrollToIndex] = AccessibilityAction(label, action)
}

/**
 * Action to autofill a TextField.
 *
 * Expected to be used in conjunction with [contentType] and [contentDataType] properties.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.OnAutofillText] is called.
 */
@Deprecated(
    message = "Use onFillData instead",
    replaceWith = ReplaceWith("onFillData"),
    level = DeprecationLevel.WARNING,
)
public fun SemanticsPropertyReceiver.onAutofillText(
    label: String? = null,
    action: ((AnnotatedString) -> Boolean)?,
): Unit {
    @Suppress("DEPRECATION")

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1576-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1611–1645)

    this[SemanticsActions.OnAutofillText] = AccessibilityAction(label, action)
}

/**
 * Action that an autofill service can invoke to fill the component with data.
 *
 * The [action] will be called by the system, passing the [FillableData] that should be used to
 * update the component's state.
 *
 * This is the counterpart to the [fillableData] property, which is used to *provide* the
 * component's current data to the autofill service.
 *
 * @sample androidx.compose.ui.samples.AutofillableTextFieldWithFillableDataSemantics
 * @param label Optional label for this action.
 * @param action Action to be performed when [SemanticsActions.OnFillData] is called. The lambda
 *   receives the [FillableData] from the autofill service.
 */
public fun SemanticsPropertyReceiver.onFillData(
    label: String? = null,
    action: ((FillableData) -> Boolean)?,
): Unit {
    this[SemanticsActions.OnFillData] = AccessibilityAction(label, action)
}

/**
 * Action to set the current value of the progress bar.
 *
 * Expected to be used in conjunction with progressBarRangeInfo.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.SetProgress] is called.
 */
public fun SemanticsPropertyReceiver.setProgress(
    label: String? = null,
    action: ((Float) -> Boolean)?,

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1611-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1646–1680)

): Unit {
    this[SemanticsActions.SetProgress] = AccessibilityAction(label, action)
}

/**
 * Action to set the text contents of this node.
 *
 * Expected to be used on editable text fields.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when [SemanticsActions.SetText] is called.
 */
public fun SemanticsPropertyReceiver.setText(
    label: String? = null,
    action: ((AnnotatedString) -> Boolean)?,
): Unit {
    this[SemanticsActions.SetText] = AccessibilityAction(label, action)
}

/**
 * Action to set the text substitution of this node.
 *
 * Expected to be used on non-editable text.
 *
 * Note, this action doesn't show the text substitution. Please call
 * [SemanticsPropertyReceiver.showTextSubstitution] to show the text substitution.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when [SemanticsActions.SetTextSubstitution] is called.
 */
public fun SemanticsPropertyReceiver.setTextSubstitution(
    label: String? = null,
    action: ((AnnotatedString) -> Boolean)?,
): Unit {
    this[SemanticsActions.SetTextSubstitution] = AccessibilityAction(label, action)

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1646-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1681–1715)

}

/**
 * Action to show or hide the text substitution of this node.
 *
 * Expected to be used on non-editable text.
 *
 * Note, this action only takes effect when the node has the text substitution.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when [SemanticsActions.ShowTextSubstitution] is called.
 */
public fun SemanticsPropertyReceiver.showTextSubstitution(
    label: String? = null,
    action: ((Boolean) -> Boolean)?,
): Unit {
    this[SemanticsActions.ShowTextSubstitution] = AccessibilityAction(label, action)
}

/**
 * Action to clear the text substitution of this node.
 *
 * Expected to be used on non-editable text.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when [SemanticsActions.ClearTextSubstitution] is called.
 */
public fun SemanticsPropertyReceiver.clearTextSubstitution(
    label: String? = null,
    action: (() -> Boolean)?,
): Unit {
    this[SemanticsActions.ClearTextSubstitution] = AccessibilityAction(label, action)
}

/**

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1681-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1716–1750)

 * Action to insert text into this node at the current cursor position, or replacing the selection
 * if text is selected.
 *
 * Expected to be used on editable text fields.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when [SemanticsActions.InsertTextAtCursor] is called.
 */
public fun SemanticsPropertyReceiver.insertTextAtCursor(
    label: String? = null,
    action: ((AnnotatedString) -> Boolean)?,
): Unit {
    this[SemanticsActions.InsertTextAtCursor] = AccessibilityAction(label, action)
}

/**
 * Action to invoke the IME action handler configured on the node, as well as specify the type of
 * IME action provided by the node.
 *
 * Expected to be used on editable text fields.
 *
 * @param imeActionType The IME type, such as [ImeAction.Next] or [ImeAction.Search]
 * @param label Optional label for this action.
 * @param action Action to be performed when [SemanticsActions.OnImeAction] is called.
 * @see SemanticsProperties.ImeAction
 * @see SemanticsActions.OnImeAction
 */
public fun SemanticsPropertyReceiver.onImeAction(
    imeActionType: ImeAction,
    label: String? = null,
    action: (() -> Boolean)?,
): Unit {
    this[SemanticsProperties.ImeAction] = imeActionType
    this[SemanticsActions.OnImeAction] = AccessibilityAction(label, action)
}

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1716-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1751–1785)


// b/322269946
@Suppress("unused")
@Deprecated(
    message = "Use `SemanticsPropertyReceiver.onImeAction` instead.",
    replaceWith =
        ReplaceWith(
            "onImeAction(imeActionType = ImeAction.Default, label = label, action = action)",
            "androidx.compose.ui.semantics.onImeAction",
            "androidx.compose.ui.text.input.ImeAction",
        ),
    level = DeprecationLevel.ERROR,
)
public fun SemanticsPropertyReceiver.performImeAction(
    label: String? = null,
    action: (() -> Boolean)?,
): Unit {
    this[SemanticsActions.OnImeAction] = AccessibilityAction(label, action)
}

/**
 * Action to set text selection by character index range.
 *
 * If this action is provided, the selection data must be provided using [textSelectionRange].
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.SetSelection] is called. The
 *   parameters to the action are: `startIndex`, `endIndex`, and whether the indices are relative to
 *   the original text or the transformed text (when a `VisualTransformation` is applied).
 */
public fun SemanticsPropertyReceiver.setSelection(
    label: String? = null,
    action: ((startIndex: Int, endIndex: Int, relativeToOriginalText: Boolean) -> Boolean)?,
): Unit {
    this[SemanticsActions.SetSelection] = AccessibilityAction(label, action)

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1751-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 176–210)

    /** @see SemanticsPropertyReceiver.horizontalScrollAxisRange */
    public val HorizontalScrollAxisRange: SemanticsPropertyKey<ScrollAxisRange> =
        AccessibilityKey<ScrollAxisRange>("HorizontalScrollAxisRange")

    /** @see SemanticsPropertyReceiver.verticalScrollAxisRange */
    public val VerticalScrollAxisRange: SemanticsPropertyKey<ScrollAxisRange> =
        AccessibilityKey<ScrollAxisRange>("VerticalScrollAxisRange")

    /** @see SemanticsPropertyReceiver.popup */
    public val IsPopup: SemanticsPropertyKey<Unit> =
        AccessibilityKey<Unit>(
            name = "IsPopup",
            mergePolicy = { _, _ ->
                throw IllegalStateException(
                    "merge function called on unmergeable property IsPopup. " +
                        "A popup should not be a child of a clickable/focusable node."
                )
            },
        )

    /** @see SemanticsPropertyReceiver.dialog */
    public val IsDialog: SemanticsPropertyKey<Unit> =
        AccessibilityKey<Unit>(
            name = "IsDialog",
            mergePolicy = { _, _ ->
                throw IllegalStateException(
                    "merge function called on unmergeable property IsDialog. " +
                        "A dialog should not be a child of a clickable/focusable node."
                )
            },
        )

    /**
     * The type of user interface element. Accessibility services might use this to describe the
     * element or do customizations. Most roles can be automatically resolved by the semantics

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1786–1820)

}

/**
 * Action to copy the text to the clipboard.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.CopyText] is called.
 */
public fun SemanticsPropertyReceiver.copyText(
    label: String? = null,
    action: (() -> Boolean)?,
): Unit {
    this[SemanticsActions.CopyText] = AccessibilityAction(label, action)
}

/**
 * Action to cut the text and copy it to the clipboard.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.CutText] is called.
 */
public fun SemanticsPropertyReceiver.cutText(
    label: String? = null,
    action: (() -> Boolean)?,
): Unit {
    this[SemanticsActions.CutText] = AccessibilityAction(label, action)
}

/**
 * This function adds the [SemanticsActions.PasteText] to the [SemanticsPropertyReceiver]. Use it to
 * indicate that element is open for accepting paste data from the clipboard. There is no need to
 * check if the clipboard data available as this is done by the framework. For this action to be
 * triggered, the element must also have the [SemanticsProperties.Focused] property set.
 *
 * @param label Optional label for this action.

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1786-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1821–1855)

 * @param action Action to be performed when the [SemanticsActions.PasteText] is called.
 * @see focused
 */
public fun SemanticsPropertyReceiver.pasteText(
    label: String? = null,
    action: (() -> Boolean)?,
): Unit {
    this[SemanticsActions.PasteText] = AccessibilityAction(label, action)
}

/**
 * Action to expand an expandable node.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.Expand] is called.
 */
public fun SemanticsPropertyReceiver.expand(label: String? = null, action: (() -> Boolean)?): Unit {
    this[SemanticsActions.Expand] = AccessibilityAction(label, action)
}

/**
 * Action to collapse an expandable node.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.Collapse] is called.
 */
public fun SemanticsPropertyReceiver.collapse(
    label: String? = null,
    action: (() -> Boolean)?,
): Unit {
    this[SemanticsActions.Collapse] = AccessibilityAction(label, action)
}

/**
 * Action to dismiss a dismissible node.

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1821-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1856–1890)

 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.Dismiss] is called.
 */
public fun SemanticsPropertyReceiver.dismiss(
    label: String? = null,
    action: (() -> Boolean)?,
): Unit {
    this[SemanticsActions.Dismiss] = AccessibilityAction(label, action)
}

/**
 * Action that gives input focus to this node.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.RequestFocus] is called.
 */
public fun SemanticsPropertyReceiver.requestFocus(
    label: String? = null,
    action: (() -> Boolean)?,
): Unit {
    this[SemanticsActions.RequestFocus] = AccessibilityAction(label, action)
}

/**
 * Action to page up.
 *
 * Using [Role.Carousel] will prevent this action from being sent to accessibility services.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.PageUp] is called.
 * @see [Role.Carousel] for more information.
 */
public fun SemanticsPropertyReceiver.pageUp(label: String? = null, action: (() -> Boolean)?): Unit {
    this[SemanticsActions.PageUp] = AccessibilityAction(label, action)

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1856-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1891–1925)

}

/**
 * Action to page down.
 *
 * Using [Role.Carousel] will prevent this action from being sent to accessibility services.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.PageDown] is called.
 * @see [Role.Carousel] for more information.
 */
public fun SemanticsPropertyReceiver.pageDown(
    label: String? = null,
    action: (() -> Boolean)?,
): Unit {
    this[SemanticsActions.PageDown] = AccessibilityAction(label, action)
}

/**
 * Action to page left.
 *
 * Using [Role.Carousel] will prevent this action from being sent to accessibility services.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.PageLeft] is called.
 * @see [Role.Carousel] for more information.
 */
public fun SemanticsPropertyReceiver.pageLeft(
    label: String? = null,
    action: (() -> Boolean)?,
): Unit {
    this[SemanticsActions.PageLeft] = AccessibilityAction(label, action)
}

/**

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1891-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1926–1960)

 * Action to page right.
 *
 * Using [Role.Carousel] will prevent this action from being sent to accessibility services.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.PageRight] is called.
 * @see [Role.Carousel] for more information.
 */
public fun SemanticsPropertyReceiver.pageRight(
    label: String? = null,
    action: (() -> Boolean)?,
): Unit {
    this[SemanticsActions.PageRight] = AccessibilityAction(label, action)
}

/**
 * Action to get a scrollable's active view port amount for scrolling actions.
 *
 * @param label Optional label for this action.
 * @param action Action to be performed when the [SemanticsActions.GetScrollViewportLength] is
 *   called.
 */
public fun SemanticsPropertyReceiver.getScrollViewportLength(
    label: String? = null,
    action: (() -> Float?),
): Unit {
    this[SemanticsActions.GetScrollViewportLength] =
        AccessibilityAction(label) {
            val viewport = action.invoke()
            if (viewport == null) {
                false
            } else {
                it.add(viewport)
                true
            }

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1926-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 1961–1963)

        }
}


Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-1961-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 211–245)

     * properties of this element. But some elements with subtle differences need an exact role. If
     * an exact role is not listed in [Role], this property should not be set and the framework will
     * automatically resolve it.
     *
     * @see SemanticsPropertyReceiver.role
     */
    public val Role: SemanticsPropertyKey<Role> =
        AccessibilityKey<Role>("Role") { parentValue, _ -> parentValue }

    /** @see SemanticsPropertyReceiver.testTag */
    public val TestTag: SemanticsPropertyKey<String> =
        SemanticsPropertyKey<String>(
            name = "TestTag",
            isImportantForAccessibility = false,
            mergePolicy = { parentValue, _ ->
                // Never merge TestTags, to avoid leaking internal test tags to parents.
                parentValue
            },
        )

    /**
     * Marks a link within a text node (a link is represented by a
     * [androidx.compose.ui.text.LinkAnnotation]) for identification during automated testing. This
     * property is for internal use only and not intended for general use by developers.
     */
    public val LinkTestMarker: SemanticsPropertyKey<Unit> =
        SemanticsPropertyKey<Unit>(
            name = "LinkTestMarker",
            isImportantForAccessibility = false,
            mergePolicy = { parentValue, _ -> parentValue },
        )

    /** @see SemanticsPropertyReceiver.text */
    public val Text: SemanticsPropertyKey<List<AnnotatedString>> =
        AccessibilityKey<List<AnnotatedString>>(

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 246–280)

            name = "Text",
            mergePolicy = { parentValue, childValue ->
                parentValue?.toMutableList()?.also { it.addAll(childValue) } ?: childValue
            },
        )

    /** @see SemanticsPropertyReceiver.textSubstitution */
    public val TextSubstitution: SemanticsPropertyKey<AnnotatedString> =
        SemanticsPropertyKey<AnnotatedString>(name = "TextSubstitution")

    /** @see SemanticsPropertyReceiver.isShowingTextSubstitution */
    public val IsShowingTextSubstitution: SemanticsPropertyKey<Boolean> =
        SemanticsPropertyKey<Boolean>("IsShowingTextSubstitution")

    /** @see SemanticsPropertyReceiver.inputText */
    public val InputText: SemanticsPropertyKey<AnnotatedString> =
        AccessibilityKey<AnnotatedString>(name = "InputText")

    /** @see SemanticsPropertyReceiver.editableText */
    public val EditableText: SemanticsPropertyKey<AnnotatedString> =
        AccessibilityKey<AnnotatedString>(name = "EditableText")

    /** @see SemanticsPropertyReceiver.textSelectionRange */
    public val TextSelectionRange: SemanticsPropertyKey<TextRange> =
        AccessibilityKey<TextRange>("TextSelectionRange")

    /** @see SemanticsPropertyReceiver.textCompositionRange */
    public val TextCompositionRange: SemanticsPropertyKey<TextRange?> =
        AccessibilityKey<TextRange?>("TextCompositionRange")

    /** @see SemanticsPropertyReceiver.onImeAction */
    public val ImeAction: SemanticsPropertyKey<ImeAction> = AccessibilityKey<ImeAction>("ImeAction")

    /** @see SemanticsPropertyReceiver.selected */
    public val Selected: SemanticsPropertyKey<Boolean> = AccessibilityKey<Boolean>("Selected")

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 281–315)


    /** @see SemanticsPropertyReceiver.toggleableState */
    public val ToggleableState: SemanticsPropertyKey<ToggleableState> =
        AccessibilityKey<ToggleableState>("ToggleableState")

    /** @see SemanticsPropertyReceiver.inputTextSuggestionState */
    public val InputTextSuggestionState: SemanticsPropertyKey<InputTextSuggestionState> =
        AccessibilityKey<InputTextSuggestionState>("InputTextSuggestionState")

    /** @see SemanticsPropertyReceiver.password */
    public val Password: SemanticsPropertyKey<Unit> = AccessibilityKey<Unit>("Password")

    /** @see SemanticsPropertyReceiver.password */
    public val IsPasswordObfuscated: SemanticsPropertyKey<Boolean> =
        AccessibilityKey<Boolean>("IsPasswordObfuscated")

    /** @see SemanticsPropertyReceiver.error */
    public val Error: SemanticsPropertyKey<String> = AccessibilityKey<String>("Error")

    /** @see SemanticsPropertyReceiver.indexForKey */
    public val IndexForKey: SemanticsPropertyKey<(Any) -> Int> =
        SemanticsPropertyKey<(Any) -> Int>("IndexForKey")

    /** @see SemanticsPropertyReceiver.isEditable */
    public val IsEditable: SemanticsPropertyKey<Boolean> =
        SemanticsPropertyKey<Boolean>("IsEditable")

    /** @see SemanticsPropertyReceiver.maxTextLength */
    public val MaxTextLength: SemanticsPropertyKey<Int> = SemanticsPropertyKey<Int>("MaxTextLength")

    /** @see SemanticsPropertyReceiver.backgroundColor */
    public val BackgroundColor: SemanticsPropertyKey<ColorProducer> =
        SemanticsPropertyKey<ColorProducer>(
            name = "BackgroundColor",
            mergePolicy = { parentValue, _ -> parentValue },

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 316–350)

        )

    /** @see SemanticsPropertyReceiver.shape */
    public val Shape: SemanticsPropertyKey<Shape> =
        SemanticsPropertyKey<Shape>(
            name = "Shape",
            isImportantForAccessibility = false,
            mergePolicy = { parentValue, _ ->
                // Never merge shapes
                parentValue
            },
        )
}

/**
 * Ths object defines keys of the actions which can be set in semantics and performed on the
 * semantics node.
 *
 * Each of these is intended to be set by the respective SemanticsPropertyReceiver extension instead
 * of used directly.
 */
/*@VisibleForTesting*/
public object SemanticsActions {
    /** @see SemanticsPropertyReceiver.getTextLayoutResult */
    public val GetTextLayoutResult:
        SemanticsPropertyKey<AccessibilityAction<(MutableList<TextLayoutResult>) -> Boolean>> =
        ActionPropertyKey<(MutableList<TextLayoutResult>) -> Boolean>("GetTextLayoutResult")

    /** @see SemanticsPropertyReceiver.onClick */
    public val OnClick: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("OnClick")

    /** @see SemanticsPropertyReceiver.onLongClick */
    public val OnLongClick: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("OnLongClick")

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 351–385)


    /** @see SemanticsPropertyReceiver.scrollBy */
    public val ScrollBy:
        SemanticsPropertyKey<AccessibilityAction<(x: Float, y: Float) -> Boolean>> =
        ActionPropertyKey<(x: Float, y: Float) -> Boolean>("ScrollBy")

    /** @see SemanticsPropertyReceiver.scrollByOffset */
    public val ScrollByOffset: SemanticsPropertyKey<suspend (offset: Offset) -> Offset> =
        SemanticsPropertyKey<suspend (offset: Offset) -> Offset>("ScrollByOffset")

    /** @see SemanticsPropertyReceiver.scrollToIndex */
    public val ScrollToIndex: SemanticsPropertyKey<AccessibilityAction<(Int) -> Boolean>> =
        ActionPropertyKey<(Int) -> Boolean>("ScrollToIndex")

    @Suppress("unused")
    @Deprecated(
        message = "Use `SemanticsActions.OnFillData` instead.",
        replaceWith =
            ReplaceWith("OnFillData", "androidx.compose.ui.semantics.SemanticsActions.OnFillData"),
        level = DeprecationLevel.WARNING,
    )
    public val OnAutofillText:
        SemanticsPropertyKey<AccessibilityAction<(AnnotatedString) -> Boolean>> =
        ActionPropertyKey<(AnnotatedString) -> Boolean>("OnAutofillText")

    /** @see SemanticsPropertyReceiver.onFillData */
    public val OnFillData: SemanticsPropertyKey<AccessibilityAction<(FillableData) -> Boolean>> =
        ActionPropertyKey<(FillableData) -> Boolean>("OnFillData")

    /** @see SemanticsPropertyReceiver.setProgress */
    public val SetProgress:
        SemanticsPropertyKey<AccessibilityAction<(progress: Float) -> Boolean>> =
        ActionPropertyKey<(progress: Float) -> Boolean>("SetProgress")

    /** @see SemanticsPropertyReceiver.setSelection */

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 36–70)

 *
 * Each of these is intended to be set by the respective SemanticsPropertyReceiver extension instead
 * of used directly.
 */
/*@VisibleForTesting*/
public object SemanticsProperties {
    /** @see SemanticsPropertyReceiver.contentDescription */
    public val ContentDescription: SemanticsPropertyKey<List<String>> =
        AccessibilityKey<List<String>>(
            name = "ContentDescription",
            mergePolicy = { parentValue, childValue ->
                parentValue?.toMutableList()?.also { it.addAll(childValue) } ?: childValue
            },
        )

    /** @see SemanticsPropertyReceiver.stateDescription */
    public val StateDescription: SemanticsPropertyKey<String> =
        AccessibilityKey<String>("StateDescription")

    /** @see SemanticsPropertyReceiver.progressBarRangeInfo */
    public val ProgressBarRangeInfo: SemanticsPropertyKey<ProgressBarRangeInfo> =
        AccessibilityKey<ProgressBarRangeInfo>("ProgressBarRangeInfo")

    /** @see SemanticsPropertyReceiver.paneTitle */
    public val PaneTitle: SemanticsPropertyKey<String> =
        AccessibilityKey<String>(
            name = "PaneTitle",
            mergePolicy = { _, _ ->
                throw IllegalStateException(
                    "merge function called on unmergeable property PaneTitle. " +
                        "A pane should not be a descendant of a node that merges descendant " +
                        "semantics, such as a clickable."
                )
            },
        )

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 386–420)

    public val SetSelection:
        SemanticsPropertyKey<AccessibilityAction<(Int, Int, Boolean) -> Boolean>> =
        ActionPropertyKey<(Int, Int, Boolean) -> Boolean>("SetSelection")

    /** @see SemanticsPropertyReceiver.setText */
    public val SetText: SemanticsPropertyKey<AccessibilityAction<(AnnotatedString) -> Boolean>> =
        ActionPropertyKey<(AnnotatedString) -> Boolean>("SetText")

    /** @see SemanticsPropertyReceiver.setTextSubstitution */
    public val SetTextSubstitution:
        SemanticsPropertyKey<AccessibilityAction<(AnnotatedString) -> Boolean>> =
        ActionPropertyKey<(AnnotatedString) -> Boolean>("SetTextSubstitution")

    /** @see SemanticsPropertyReceiver.showTextSubstitution */
    public val ShowTextSubstitution:
        SemanticsPropertyKey<AccessibilityAction<(Boolean) -> Boolean>> =
        ActionPropertyKey<(Boolean) -> Boolean>("ShowTextSubstitution")

    /** @see SemanticsPropertyReceiver.clearTextSubstitution */
    public val ClearTextSubstitution: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("ClearTextSubstitution")

    /** @see SemanticsPropertyReceiver.insertTextAtCursor */
    public val InsertTextAtCursor:
        SemanticsPropertyKey<AccessibilityAction<(AnnotatedString) -> Boolean>> =
        ActionPropertyKey<(AnnotatedString) -> Boolean>("InsertTextAtCursor")

    /** @see SemanticsPropertyReceiver.onImeAction */
    public val OnImeAction: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("PerformImeAction")

    // b/322269946
    @Suppress("unused")
    @Deprecated(
        message = "Use `SemanticsActions.OnImeAction` instead.",

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 421–455)

        replaceWith =
            ReplaceWith(
                "OnImeAction",
                "androidx.compose.ui.semantics.SemanticsActions.OnImeAction",
            ),
        level = DeprecationLevel.ERROR,
    )
    /** @see SemanticsPropertyReceiver.performImeAction */
    public val PerformImeAction: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("PerformImeAction")

    /** @see SemanticsPropertyReceiver.copyText */
    public val CopyText: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("CopyText")

    /** @see SemanticsPropertyReceiver.cutText */
    public val CutText: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("CutText")

    /** @see SemanticsPropertyReceiver.pasteText */
    public val PasteText: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("PasteText")

    /** @see SemanticsPropertyReceiver.expand */
    public val Expand: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("Expand")

    /** @see SemanticsPropertyReceiver.collapse */
    public val Collapse: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("Collapse")

    /** @see SemanticsPropertyReceiver.dismiss */
    public val Dismiss: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("Dismiss")


Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 456–490)

    /** @see SemanticsPropertyReceiver.requestFocus */
    public val RequestFocus: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("RequestFocus")

    /** @see SemanticsPropertyReceiver.customActions */
    public val CustomActions: SemanticsPropertyKey<List<CustomAccessibilityAction>> =
        AccessibilityKey<List<CustomAccessibilityAction>>(
            name = "CustomActions",
            mergePolicy = { parentValue, childValue -> parentValue.orEmpty() + childValue },
        )

    /** @see SemanticsPropertyReceiver.pageUp */
    public val PageUp: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("PageUp")

    /** @see SemanticsPropertyReceiver.pageLeft */
    public val PageLeft: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("PageLeft")

    /** @see SemanticsPropertyReceiver.pageDown */
    public val PageDown: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("PageDown")

    /** @see SemanticsPropertyReceiver.pageRight */
    public val PageRight: SemanticsPropertyKey<AccessibilityAction<() -> Boolean>> =
        ActionPropertyKey<() -> Boolean>("PageRight")

    /** @see SemanticsPropertyReceiver.getScrollViewportLength */
    public val GetScrollViewportLength:
        SemanticsPropertyKey<AccessibilityAction<(MutableList<Float>) -> Boolean>> =
        ActionPropertyKey<(MutableList<Float>) -> Boolean>("GetScrollViewportLength")
}

/**
 * SemanticsPropertyKey is the infrastructure for setting key/value pairs inside semantics blocks in

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 491–525)

 * a type-safe way. Each key has one particular statically defined value type T.
 */
public class SemanticsPropertyKey<T>(
    /** The name of the property. Should be the same as the constant from which it is accessed. */
    public val name: String,
    internal val mergePolicy: (T?, T) -> T? = { parentValue, childValue ->
        parentValue ?: childValue
    },
) {
    /**
     * Whether this type of property provides information relevant to accessibility services.
     *
     * Most built-in semantics properties are relevant to accessibility, but a very common exception
     * is testTag. Nodes with only a testTag still need to be included in the AccessibilityNodeInfo
     * tree because UIAutomator tests rely on that, but we mark them `isImportantForAccessibility =
     * false` on the AccessibilityNodeInfo to inform accessibility services that they are best
     * ignored.
     *
     * The default value is false and it is not exposed as a public API. That's because it is
     * impossible in the first place for `SemanticsPropertyKey`s defined outside the UI package to
     * be relevant to accessibility, because for each accessibility-relevant SemanticsProperty type
     * to get plumbed into the AccessibilityNodeInfo, the private `createNodeInfo` implementation
     * must also have a line of code.
     */
    internal var isImportantForAccessibility = false
        private set

    /**
     * If this value is non-null, this semantics property will be exposed as an accessibility extra
     * via AccessibilityNodeInfo.getExtras with this value used as the key for the extra.
     */
    @ExperimentalComposeUiHostApi
    public var accessibilityExtraKey: String? = null
        internal set


Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 526–560)

    internal constructor(name: String, isImportantForAccessibility: Boolean) : this(name) {
        this.isImportantForAccessibility = isImportantForAccessibility
    }

    @OptIn(ExperimentalComposeUiHostApi::class)
    internal constructor(
        name: String,
        isImportantForAccessibility: Boolean,
        mergePolicy: (T?, T) -> T?,
        accessibilityExtraKey: String? = null,
    ) : this(name, mergePolicy) {
        this.isImportantForAccessibility = isImportantForAccessibility
        this.accessibilityExtraKey = accessibilityExtraKey
    }

    /**
     * Method implementing the semantics merge policy of a particular key.
     *
     * When mergeDescendants is set on a semantics node, then this function will called for each
     * descendant node of a given key in depth-first-search order. The parent value accumulates the
     * result of merging the values seen so far, similar to reduce().
     *
     * The default implementation returns the parent value if one exists, otherwise uses the child
     * element. This means by default, a SemanticsNode with mergeDescendants = true winds up with
     * the first value found for each key in its subtree in depth-first-search order.
     */
    public fun merge(parentValue: T?, childValue: T): T? {
        return mergePolicy(parentValue, childValue)
    }

    /** Throws [UnsupportedOperationException]. Should not be called. */
    // TODO(KT-6519): Remove this getter
    // TODO(KT-32770): Cannot deprecate this either as the getter is considered called by "by"
    public final operator fun getValue(
        thisRef: SemanticsPropertyReceiver,

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 561–595)

        property: KProperty<*>,
    ): T {
        return throwSemanticsGetNotSupported()
    }

    public final operator fun setValue(
        thisRef: SemanticsPropertyReceiver,
        property: KProperty<*>,
        value: T,
    ) {
        thisRef[this] = value
    }

    override fun toString(): String {
        return "AccessibilityKey: $name"
    }
}

private fun <T> throwSemanticsGetNotSupported(): T {
    throw UnsupportedOperationException(
        "You cannot retrieve a semantics property directly - " +
            "use one of the SemanticsConfiguration.getOr* methods instead"
    )
}

@Suppress("NOTHING_TO_INLINE")
// inline to avoid different static initialization order on different targets.
// See https://youtrack.jetbrains.com/issue/KT-65040 for more information.
internal inline fun <T> AccessibilityKey(name: String) =
    SemanticsPropertyKey<T>(name = name, isImportantForAccessibility = true)

@Suppress("NOTHING_TO_INLINE")
// inline to avoid different static initialization order on different targets
// See https://youtrack.jetbrains.com/issue/KT-65040 for more information.
internal inline fun <T> AccessibilityKey(name: String, noinline mergePolicy: (T?, T) -> T?) =

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 596–630)

    SemanticsPropertyKey(name = name, isImportantForAccessibility = true, mergePolicy = mergePolicy)

/**
 * Standard accessibility action.
 *
 * @param label The description of this action
 * @param action The function to invoke when this action is performed. The function should return a
 *   boolean result indicating whether the action is successfully handled. For example, a scroll
 *   forward action should return false if the widget is not enabled or has reached the end of the
 *   list. If multiple semantics blocks with the same AccessibilityAction are provided, the
 *   resulting AccessibilityAction's label/action will be the label/action of the outermost modifier
 *   with this key and nonnull label/action, or null if no nonnull label/action is found.
 */
public class AccessibilityAction<T : Function<Boolean>>(
    public val label: String?,
    public val action: T?,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is AccessibilityAction<*>) return false

        if (label != other.label) return false
        if (action != other.action) return false

        return true
    }

    override fun hashCode(): Int {
        var result = label?.hashCode() ?: 0
        result = 31 * result + action.hashCode()
        return result
    }

    override fun toString(): String {
        return "AccessibilityAction(label=$label, action=$action)"

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 631–665)

    }
}

@Suppress("NOTHING_TO_INLINE")
// inline to break static initialization cycle issue
private inline fun <T : Function<Boolean>> ActionPropertyKey(name: String) =
    AccessibilityKey<AccessibilityAction<T>>(
        name = name,
        mergePolicy = { parentValue, childValue ->
            AccessibilityAction(
                parentValue?.label ?: childValue.label,
                parentValue?.action ?: childValue.action,
            )
        },
    )

/**
 * Custom accessibility action.
 *
 * @param label The description of this action
 * @param action The function to invoke when this action is performed. The function should have no
 *   arguments and return a boolean result indicating whether the action is successfully handled.
 */
public class CustomAccessibilityAction(public val label: String, public val action: () -> Boolean) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is CustomAccessibilityAction) return false

        if (label != other.label) return false
        if (action !== other.action) return false

        return true
    }

    override fun hashCode(): Int {

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 666–700)

        var result = label.hashCode()
        result = 31 * result + action.hashCode()
        return result
    }

    override fun toString(): String {
        return "CustomAccessibilityAction(label=$label, action=$action)"
    }
}

/**
 * Accessibility range information, to represent the status of a progress bar or seekable progress
 * bar.
 *
 * @param current current value in the range. Must not be NaN.
 * @param range range of this node
 * @param steps if greater than `0`, specifies the number of discrete values, evenly distributed
 *   between across the whole value range. If `0`, any value from the range specified can be chosen.
 *   Cannot be less than `0`.
 */
public class ProgressBarRangeInfo(
    public val current: Float,
    public val range: ClosedFloatingPointRange<Float>,
    /*@IntRange(from = 0)*/
    public val steps: Int = 0,
) {
    init {
        require(!current.isNaN()) { "current must not be NaN" }
    }

    public companion object {
        /** Accessibility range information to present indeterminate progress bar */
        public val Indeterminate: ProgressBarRangeInfo = ProgressBarRangeInfo(0f, 0f..0f)
    }


Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 701–735)

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ProgressBarRangeInfo) return false

        if (current != other.current) return false
        if (range != other.range) return false
        if (steps != other.steps) return false

        return true
    }

    override fun hashCode(): Int {
        var result = current.hashCode()
        result = 31 * result + range.hashCode()
        result = 31 * result + steps
        return result
    }

    override fun toString(): String {
        return "ProgressBarRangeInfo(current=$current, range=$range, steps=$steps)"
    }
}

/**
 * Information about the collection.
 *
 * A collection of items has [rowCount] rows and [columnCount] columns. For example, a vertical list
 * is a collection with one column, as many rows as the list items that are important for
 * accessibility; A table is a collection with several rows and several columns.
 *
 * @param rowCount the number of rows in the collection, or -1 if unknown
 * @param columnCount the number of columns in the collection, or -1 if unknown
 */
public class CollectionInfo(public val rowCount: Int, public val columnCount: Int) {


Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 71–105)


    /** @see SemanticsPropertyReceiver.selectableGroup */
    public val SelectableGroup: SemanticsPropertyKey<Unit> =
        AccessibilityKey<Unit>("SelectableGroup")

    /** @see SemanticsPropertyReceiver.collectionInfo */
    public val CollectionInfo: SemanticsPropertyKey<CollectionInfo> =
        AccessibilityKey<CollectionInfo>("CollectionInfo")

    /** @see SemanticsPropertyReceiver.collectionItemInfo */
    public val CollectionItemInfo: SemanticsPropertyKey<CollectionItemInfo> =
        AccessibilityKey<CollectionItemInfo>("CollectionItemInfo")

    /** @see SemanticsPropertyReceiver.heading */
    public val Heading: SemanticsPropertyKey<Unit> = AccessibilityKey<Unit>("Heading")

    /** @see SemanticsPropertyReceiver.textEntryKey */
    public val TextEntryKey: SemanticsPropertyKey<Unit> = AccessibilityKey<Unit>("TextEntryKey")

    /** @see SemanticsPropertyReceiver.disabled */
    public val Disabled: SemanticsPropertyKey<Unit> = AccessibilityKey<Unit>("Disabled")

    /** @see SemanticsPropertyReceiver.liveRegion */
    public val LiveRegion: SemanticsPropertyKey<LiveRegionMode> =
        AccessibilityKey<LiveRegionMode>("LiveRegion")

    /** @see SemanticsPropertyReceiver.focused */
    public val Focused: SemanticsPropertyKey<Boolean> = AccessibilityKey<Boolean>("Focused")

    /** @see SemanticsPropertyReceiver.isContainer */
    @Deprecated("Use `isTraversalGroup` instead.", replaceWith = ReplaceWith("IsTraversalGroup"))
    // TODO(mnuzen): `isContainer` should not need to be an accessibility key after a new
    //  pruning API is added. See b/347038246 for more details.
    public val IsContainer: SemanticsPropertyKey<Boolean> = AccessibilityKey<Boolean>("IsContainer")


Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 736–770)

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is CollectionInfo) return false

        if (rowCount != other.rowCount) return false
        if (columnCount != other.columnCount) return false

        return true
    }

    override fun hashCode(): Int {
        var result = rowCount.hashCode()
        result = 31 * result + columnCount.hashCode()
        return result
    }

    override fun toString(): String {
        return "CollectionInfo(rowCount=$rowCount, columnCount=$columnCount)"
    }
}

/**
 * Information about the item of a collection.
 *
 * A collection item is contained in a collection, it starts at a given [rowIndex] and [columnIndex]
 * in the collection, and spans one or more rows and columns. For example, a header of two related
 * table columns starts at the first row and the first column, spans one row and two columns.
 *
 * @param rowIndex the index of the row at which item is located
 * @param rowSpan the number of rows the item spans
 * @param columnIndex the index of the column at which item is located
 * @param columnSpan the number of columns the item spans
 */
public class CollectionItemInfo(
    public val rowIndex: Int,

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 771–805)

    public val rowSpan: Int,
    public val columnIndex: Int,
    public val columnSpan: Int,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is CollectionItemInfo) return false

        if (rowIndex != other.rowIndex) return false
        if (rowSpan != other.rowSpan) return false
        if (columnIndex != other.columnIndex) return false
        if (columnSpan != other.columnSpan) return false

        return true
    }

    override fun hashCode(): Int {
        var result = rowIndex.hashCode()
        result = 31 * result + rowSpan.hashCode()
        result = 31 * result + columnIndex.hashCode()
        result = 31 * result + columnSpan.hashCode()
        return result
    }

    override fun toString(): String {
        return "CollectionItemInfo(rowIndex=$rowIndex, rowSpan=$rowSpan, columnIndex=$columnIndex, columnSpan=$columnSpan)"
    }
}

/**
 * The scroll state of one axis if this node is scrollable.
 *
 * @param value current 0-based scroll position value (either in pixels, or lazy-item count)
 * @param maxValue maximum bound for [value], or [Float.POSITIVE_INFINITY] if still unknown
 * @param reverseScrolling for horizontal scroll, when this is `true`, 0 [value] will mean right,

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 806–840)

 *   when`false`, 0 [value] will mean left. For vertical scroll, when this is `true`, 0 [value] will
 *   mean bottom, when `false`, 0 [value] will mean top
 */
public class ScrollAxisRange(
    public val value: () -> Float,
    public val maxValue: () -> Float,
    public val reverseScrolling: Boolean = false,
) {
    override fun toString(): String =
        "ScrollAxisRange(value=${value()}, maxValue=${maxValue()}, " +
            "reverseScrolling=$reverseScrolling)"
}

/**
 * The state of an input text when suggestions are shown. This property specifies the different
 * available states the input text can be in when there are text suggestions available, typically
 * shown as a dialog window and when a user inputs a transliteration language specifically Chinese,
 * Japanese, Korean, and Vietnamese.
 *
 * On Android, this semantics property is only supported on SDK >= 37.
 *
 * @param isCommittedByInputMethodEditor whether the current text was committed by an input method
 *   editor done by the user, will stay false if the committed text was done programmatically, e.g.
 *   via Accessibility service.
 * @param isTransliterationSuggestionSelected whether a replacement text suggestion is selected to
 *   replace the transliterated text. If true, the text is from a transliteration language and is
 *   currently displaying one or multiple text suggestion replacements and that one of the
 *   suggestions is selected to replace the transliterated text. This does not indicate whether the
 *   text replacement suggestion has been committed. Will stay false for non-transliteration
 *   languages or if no suggestion is currently selected. If this were to be set to true for a
 *   non-transliteration language, it may affect accessibility services from announcing events
 *   correctly.
 */
public class InputTextSuggestionState(
    public val isCommittedByInputMethodEditor: Boolean = false,

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 841–875)

    public val isTransliterationSuggestionSelected: Boolean = false,
) {
    override fun toString(): String =
        "InputTextSuggestionState(isCommittedByInputMethodEditor=$isCommittedByInputMethodEditor," +
            " suggestionSelected=$isTransliterationSuggestionSelected)"

    override fun hashCode(): Int {
        var result = isCommittedByInputMethodEditor.hashCode()
        result = 31 * result + isTransliterationSuggestionSelected.hashCode()
        return result
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is InputTextSuggestionState) return false

        if (isCommittedByInputMethodEditor != other.isCommittedByInputMethodEditor) return false
        if (isTransliterationSuggestionSelected != other.isTransliterationSuggestionSelected)
            return false

        return true
    }

    @Suppress("unused")
    @Deprecated(
        message = "Use the new constructor that accepts the [isSuggestionSelected] parameter",
        level = DeprecationLevel.HIDDEN,
    )
    public constructor(
        isCommittedByInputMethodEditor: Boolean = false
    ) : this(isCommittedByInputMethodEditor, false)
}

/**
 * The type of user interface element. Accessibility services might use this to describe the element

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 876–910)

 * or do customizations. Most roles can be automatically resolved by the semantics properties of
 * this element. But some elements with subtle differences need an exact role. If an exact role is
 * not listed, [SemanticsPropertyReceiver.role] should not be set and the framework will
 * automatically resolve it.
 */
@Immutable
@kotlin.jvm.JvmInline
public value class Role private constructor(@Suppress("unused") private val value: Int) {
    public companion object {
        /**
         * This element is a button control. Associated semantics properties for accessibility:
         * [SemanticsProperties.Disabled], [SemanticsActions.OnClick]
         */
        public val Button: Role
            get() = Role(0)

        /**
         * This element is a Checkbox which is a component that represents two states (checked /
         * unchecked). Associated semantics properties for accessibility:
         * [SemanticsProperties.Disabled], [SemanticsProperties.StateDescription],
         * [SemanticsActions.OnClick]
         */
        public val Checkbox: Role
            get() = Role(1)

        /**
         * This element is a Switch which is a two state toggleable component that provides on/off
         * like options. Associated semantics properties for accessibility:
         * [SemanticsProperties.Disabled], [SemanticsProperties.StateDescription],
         * [SemanticsActions.OnClick]
         */
        public val Switch: Role
            get() = Role(2)

        /**

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-876-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 911–945)

         * This element is a RadioButton which is a component to represent two states, selected and
         * not selected. Associated semantics properties for accessibility:
         * [SemanticsProperties.Disabled], [SemanticsProperties.StateDescription],
         * [SemanticsActions.OnClick]
         */
        public val RadioButton: Role
            get() = Role(3)

        /**
         * This element is a Tab which represents a single page of content using a text label and/or
         * icon. A Tab also has two states: selected and not selected. Associated semantics
         * properties for accessibility: [SemanticsProperties.Disabled],
         * [SemanticsProperties.StateDescription], [SemanticsActions.OnClick]
         */
        public val Tab: Role
            get() = Role(4)

        /**
         * This element is an image. Associated semantics properties for accessibility:
         * [SemanticsProperties.ContentDescription]
         */
        public val Image: Role
            get() = Role(5)

        /**
         * This element is associated with a drop down menu. Associated semantics properties for
         * accessibility: [SemanticsActions.OnClick]
         */
        public val DropdownList: Role
            get() = Role(6)

        /**
         * This element is a value picker. It should support the following accessibility actions to
         * enable selection of the next and previous values:
         *

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-911-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 946–980)

         * [android.view.accessibility.AccessibilityNodeInfo.ACTION_SCROLL_FORWARD]: Select the next
         * value.
         *
         * [android.view.accessibility.AccessibilityNodeInfo.ACTION_SCROLL_BACKWARD]: Select the
         * previous value.
         *
         * These actions allow accessibility services to interact with this node programmatically on
         * behalf of users, facilitating navigation within sets of selectable values.
         */
        public val ValuePicker: Role
            get() = Role(7)

        /**
         * This element is a Carousel. This means that even if Pager actions are added, this element
         * will behave like a regular List collection.
         *
         * Associated semantics properties for Pager accessibility actions:
         * [SemanticsActions.PageUp],[SemanticsActions.PageDown],[SemanticsActions.PageLeft],
         * [SemanticsActions.PageRight]
         */
        public val Carousel: Role
            get() = Role(8)
    }

    public override fun toString(): String =
        when (this) {
            Button -> "Button"
            Checkbox -> "Checkbox"
            Switch -> "Switch"
            RadioButton -> "RadioButton"
            Tab -> "Tab"
            Image -> "Image"
            DropdownList -> "DropdownList"
            ValuePicker -> "Picker"
            Carousel -> "Carousel"

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-946-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)

## androidx.compose.ui.semantics SemanticsProperties.kt source (lines 981–1015)

            else -> "Unknown"
        }
}

/**
 * The mode of live region. Live region indicates to accessibility services they should
 * automatically notify the user about changes to the node's content description or text, or to the
 * content descriptions or text of the node's children (where applicable).
 */
@Immutable
@kotlin.jvm.JvmInline
public value class LiveRegionMode private constructor(@Suppress("unused") private val value: Int) {
    public companion object {
        /**
         * Live region mode specifying that accessibility services should announce changes to this
         * node.
         */
        public val Polite: LiveRegionMode
            get() = LiveRegionMode(0)

        /**
         * Live region mode specifying that accessibility services should interrupt ongoing speech
         * to immediately announce changes to this node.
         */
        public val Assertive: LiveRegionMode
            get() = LiveRegionMode(1)
    }

    public override fun toString(): String =
        when (this) {
            Polite -> "Polite"
            Assertive -> "Assertive"
            else -> "Unknown"
        }
}

Sources: [live-androidx-ui-ui-ui-semantics-semanticsproperties-lines-981-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsProperties.kt)
