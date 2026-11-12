---
type: reference
title: androidx.compose.ui.focus FocusProperties.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    startLine: 1
    endLine: 35
    sha256: a0706ce2e9a306dd43a7361d873dcdc1d3b80c61d73dd9a06918822cd2da04f4
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

      package androidx.compose.ui.focus

      import androidx.compose.ui.ExperimentalComposeUiApi
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.focus.FocusProperties.Companion.UnsetFocusRect
      import androidx.compose.ui.geometry.Rect
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.platform.InspectorInfo

      /**
       * Properties that are applied to [focusTarget] that is the first child of the
       * [FocusPropertiesModifierNode] that sets these properties.
       *
       * @see [focusProperties]
       */
      public interface FocusProperties {
          /**
           * When set to false, indicates that the [focusTarget] that this is applied to can no longer
           * take focus. If the [focusTarget] is currently focused, setting this property to false will
  - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    startLine: 106
    endLine: 140
    sha256: 35c5d8c11130ea9d5dc8b27a9fdcefb774484ebec6dfcad1696f4f37d2e49850
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * "left" in RTL mode.
           *
           * @sample androidx.compose.ui.samples.CustomFocusOrderSample
           */
          public var end: FocusRequester
              get() = FocusRequester.Default
              set(_) {}

          /**
           * A custom item to be used when the user requests focus to move focus in
           * ([FocusDirection.Enter]). An automatic [Enter][FocusDirection.Enter]" can be triggered when
           * we move focus to a focus group that is not itself focusable. In this case, users can use the
           * the focus direction that triggered the move in to determine the next item to be focused on.
           *
           * When you set the [enter] property, provide a lambda that takes the FocusDirection that
           * triggered the enter as an input, and provides a [FocusRequester] as an output. You can return
           * a custom destination by providing a [FocusRequester] attached to that destination, a
           * [Cancel][FocusRequester.Cancel] to cancel the focus enter or
           * [Default][FocusRequester.Default] to use the default focus enter behavior.
           *
           * @sample androidx.compose.ui.samples.CustomFocusEnterSample
           */
          @ExperimentalComposeUiApi
          @set:Deprecated("Use onEnter instead", ReplaceWith("onEnter"))
          public var enter: (FocusDirection) -> FocusRequester
              get() = { FocusRequester.Default }
              set(value) {
                  onEnter = value.toUsingEnterExitScope()
              }

          /**
           * A custom item to be used when the user requests focus to move focus in
           * ([FocusDirection.Enter]). An automatic [Enter][FocusDirection.Enter]" can be triggered when
           * we move focus to a focus group that is not itself focusable. In this case, users can use the
           * the focus direction that triggered the move in to determine the next item to be focused on.
  - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    startLine: 141
    endLine: 175
    sha256: 87b8f428181020ec82d5c31fd3cc13977bafe42fafcb6f51706effef07029fbe
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *
           * When you set the [onEnter] property, provide a lambda with the [FocusEnterExitScope] scope,
           * having the [FocusEnterExitScope.requestedFocusDirection] that triggered the enter as an
           * input. If redirection is required, use [FocusRequester.requestFocus] and if the focus change
           * should be canceled, use [FocusEnterExitScope.cancelFocusChange].
           *
           * @sample androidx.compose.ui.samples.CustomFocusEnterSample
           */
          public var onEnter: FocusEnterExitScope.() -> Unit
              get() = {}
              set(_) {}

          /**
           * A custom item to be used when the user requests focus to move out ([FocusDirection.Exit]). An
           * automatic [Exit][FocusDirection.Exit] can be triggered when we move focus outside the edge of
           * a parent. In this case, users can use the focus direction that triggered the move out to
           * determine the next focus destination.
           *
           * When you set the [exit] property, provide a lambda that takes the FocusDirection that
           * triggered the exit as an input, and provides a [FocusRequester] as an output. You can return
           * a custom destination by providing a [FocusRequester] attached to that destination, a
           * [Cancel][FocusRequester.Cancel] to cancel the focus exit or [Default][FocusRequester.Default]
           * to use the default focus exit behavior.
           *
           * @sample androidx.compose.ui.samples.CustomFocusExitSample
           */
          @ExperimentalComposeUiApi
          @set:Deprecated("Use onExit instead", ReplaceWith("onExit"))
          public var exit: (FocusDirection) -> FocusRequester
              get() = { FocusRequester.Default }
              set(value) {
                  onExit = value.toUsingEnterExitScope()
              }

          /**
  - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    startLine: 176
    endLine: 210
    sha256: 2abd1f14889a29db68bfec2c74111e20ec34145c5b8e182fb1bfec47815adab3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * A custom item to be used when the user requests focus to move out ([FocusDirection.Exit]). An
           * automatic [Exit][FocusDirection.Exit] can be triggered when we move focus outside the edge of
           * a parent. In this case, users can use the focus direction that triggered the move out to
           * determine the next focus destination.
           *
           * When you set the [onExit] property, provide a lambda with the [FocusEnterExitScope] scope,
           * having the [FocusEnterExitScope.requestedFocusDirection] that triggered the exit as an input.
           * If redirection is required, use [FocusRequester.requestFocus] and if the focus change should
           * be canceled, use [FocusEnterExitScope.cancelFocusChange].
           *
           * @sample androidx.compose.ui.samples.CustomFocusExitSample
           */
          public var onExit: FocusEnterExitScope.() -> Unit
              get() = {}
              set(_) {}

          /**
           * Sets the focus area for the associated focus target to which these [FocusProperties] are
           * applied on.
           *
           * If you simply ignore and do not set this value, [UnsetFocusRect] will be used. Or
           * alternatively you can set this value to [UnsetFocusRect] to prevent other [FocusProperties]
           * nodes in the chain from customizing the focus area.
           */
          public var focusRect: Rect
              get() = UnsetFocusRect
              set(_) {}

          public companion object {

              /**
               * Denotes that the bounds of the associated focus target should be used as the focus area.
               */
              public val UnsetFocusRect: Rect = Rect(Float.NaN, Float.NaN, Float.NaN, Float.NaN)
          }
  - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    startLine: 211
    endLine: 245
    sha256: 00a6f2b1e4eb3b942d2fba1e5038ae08ceae73b6b48df5898cd0fbc855801bf0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      /**
       * A utility to use when upgrading from [FocusProperties.enter] and [FocusProperties.exit] to
       * [FocusProperties.onEnter] and [FocusProperties.onExit].
       */
      private fun ((FocusDirection) -> FocusRequester).toUsingEnterExitScope():
          FocusEnterExitScope.() -> Unit = {
          val focusRequester = invoke(requestedFocusDirection)
          if (focusRequester === FocusRequester.Cancel) {
              cancelFocusChange()
          } else if (focusRequester !== FocusRequester.Default) {
              focusRequester.requestFocus()
          }
      }

      /**
       * Receiver scope for [FocusProperties.onEnter] and [FocusProperties.onExit]. Developers can change
       * focus with [FocusRequester.requestFocus] to change the focus or [cancelFocusChange] to stop the
       * focus from changing.
       */
      public sealed interface FocusEnterExitScope {
          /**
           * The direction used to get into (with [FocusProperties.onEnter]) or leave (with
           * [FocusProperties.onExit]) focus.
           */
          public val requestedFocusDirection: FocusDirection

          /** Stop focus from changing. */
          public fun cancelFocusChange()

          @ExperimentalComposeUiApi
          @Deprecated("Use cancelFocusChange instead", replaceWith = ReplaceWith("cancelFocusChange"))
          public fun cancelFocus(): Unit = cancelFocusChange()
      }
  - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    startLine: 246
    endLine: 280
    sha256: aaf2f1f99280e7ecb3698a28aeb11418a5c59f069ee020798f0351da680960b0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      internal class CancelIndicatingFocusBoundaryScope(
          override val requestedFocusDirection: FocusDirection
      ) : FocusEnterExitScope {
          var isCanceled = false
              private set

          override fun cancelFocusChange() {
              isCanceled = true
          }
      }

      internal class FocusPropertiesImpl : FocusProperties {
          override var canFocus: Boolean = true
          override var next: FocusRequester = FocusRequester.Default
          override var previous: FocusRequester = FocusRequester.Default
          override var up: FocusRequester = FocusRequester.Default
          override var down: FocusRequester = FocusRequester.Default
          override var left: FocusRequester = FocusRequester.Default
          override var right: FocusRequester = FocusRequester.Default
          override var start: FocusRequester = FocusRequester.Default
          override var end: FocusRequester = FocusRequester.Default
          override var onEnter: FocusEnterExitScope.() -> Unit = {}
          override var onExit: FocusEnterExitScope.() -> Unit = {}
          override var focusRect: Rect = UnsetFocusRect
      }

      /**
       * This modifier allows you to specify properties that are accessible to [focusTarget]s further down
       * the modifier chain or on child layout nodes.
       *
       * @sample androidx.compose.ui.samples.FocusPropertiesSample
       */
      public fun Modifier.focusProperties(scope: FocusProperties.() -> Unit): Modifier =
          this then FocusPropertiesElement(scope)
  - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    startLine: 281
    endLine: 303
    sha256: 329d439978b62aceb73275c832b464f0b844105509d29ec55162c988536c2b65
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      
      private data class FocusPropertiesElement(val scope: FocusPropertiesScope) :
          ModifierNodeElement<FocusPropertiesNode>() {
          override fun create() = FocusPropertiesNode(scope)

          override fun update(node: FocusPropertiesNode) {
              node.focusPropertiesScope = scope
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "focusProperties"
              properties["scope"] = scope
          }
      }

      private class FocusPropertiesNode(var focusPropertiesScope: FocusPropertiesScope) :
          FocusPropertiesModifierNode, Modifier.Node() {

          override fun applyFocusProperties(focusProperties: FocusProperties) {
              focusPropertiesScope.apply(focusProperties)
          }
      }
  - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    startLine: 36
    endLine: 70
    sha256: d5016d2a500ea2ee84137b20e9fa69a0058a95a5be48bdfe6270008617f06685
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * end up clearing focus.
           */
          public var canFocus: Boolean

          /**
           * A custom item to be used when the user requests the focus to move to the "next" item.
           *
           * @sample androidx.compose.ui.samples.CustomFocusOrderSample
           */
          public var next: FocusRequester
              get() = FocusRequester.Default
              set(_) {}

          /**
           * A custom item to be used when the user requests the focus to move to the "previous" item.
           *
           * @sample androidx.compose.ui.samples.CustomFocusOrderSample
           */
          public var previous: FocusRequester
              get() = FocusRequester.Default
              set(_) {}

          /**
           * A custom item to be used when the user moves focus "up".
           *
           * @sample androidx.compose.ui.samples.CustomFocusOrderSample
           */
          public var up: FocusRequester
              get() = FocusRequester.Default
              set(_) {}

          /**
           * A custom item to be used when the user moves focus "down".
           *
           * @sample androidx.compose.ui.samples.CustomFocusOrderSample
  - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt
    startLine: 71
    endLine: 105
    sha256: 08e4c7e022f45135178ac33de233fff7ac9ddd5a16b2509769e571369b6534de
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          public var down: FocusRequester
              get() = FocusRequester.Default
              set(_) {}

          /**
           * A custom item to be used when the user requests a focus moves to the "left" item.
           *
           * @sample androidx.compose.ui.samples.CustomFocusOrderSample
           */
          public var left: FocusRequester
              get() = FocusRequester.Default
              set(_) {}

          /**
           * A custom item to be used when the user requests a focus moves to the "right" item.
           *
           * @sample androidx.compose.ui.samples.CustomFocusOrderSample
           */
          public var right: FocusRequester
              get() = FocusRequester.Default
              set(_) {}

          /**
           * A custom item to be used when the user requests a focus moves to the "left" in LTR mode and
           * "right" in RTL mode.
           *
           * @sample androidx.compose.ui.samples.CustomFocusOrderSample
           */
          public var start: FocusRequester
              get() = FocusRequester.Default
              set(_) {}

          /**
           * A custom item to be used when the user requests a focus moves to the "right" in LTR mode and
compose:
  id: live-androidx-ui-ui-ui-focus-focusproperties
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.focus
  sections:
    - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-1
      title: androidx.compose.ui.focus FocusProperties.kt source (lines 1–35)
      aliases:
        - androidx.compose.ui.focus.FocusProperties
        - androidx.compose.ui.focus.focusProperties
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusproperties-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-106
      title: androidx.compose.ui.focus FocusProperties.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusproperties-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-141
      title: androidx.compose.ui.focus FocusProperties.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.focus.FocusEnterExitScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusproperties-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-176
      title: androidx.compose.ui.focus FocusProperties.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.focus.FocusProperties
        - androidx.compose.ui.focus.FocusEnterExitScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusproperties-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-211
      title: androidx.compose.ui.focus FocusProperties.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.focus.FocusProperties
        - androidx.compose.ui.focus.FocusEnterExitScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusproperties-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-246
      title: androidx.compose.ui.focus FocusProperties.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.focus.FocusProperties
        - androidx.compose.ui.focus.FocusEnterExitScope
        - androidx.compose.ui.focus.focusProperties
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusproperties-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-281
      title: androidx.compose.ui.focus FocusProperties.kt source (lines 281–303)
      aliases:
        - androidx.compose.ui.focus.FocusProperties
        - androidx.compose.ui.focus.focusProperties
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusproperties-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-36
      title: androidx.compose.ui.focus FocusProperties.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusproperties-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusproperties-lines-71
      title: androidx.compose.ui.focus FocusProperties.kt source (lines 71–105)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusproperties-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.focus FocusProperties.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt

## androidx.compose.ui.focus FocusProperties.kt source (lines 1–35)

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

package androidx.compose.ui.focus

import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusProperties.Companion.UnsetFocusRect
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.platform.InspectorInfo

/**
 * Properties that are applied to [focusTarget] that is the first child of the
 * [FocusPropertiesModifierNode] that sets these properties.
 *
 * @see [focusProperties]
 */
public interface FocusProperties {
    /**
     * When set to false, indicates that the [focusTarget] that this is applied to can no longer
     * take focus. If the [focusTarget] is currently focused, setting this property to false will

Sources: [live-androidx-ui-ui-ui-focus-focusproperties-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt)

## androidx.compose.ui.focus FocusProperties.kt source (lines 106–140)

     * "left" in RTL mode.
     *
     * @sample androidx.compose.ui.samples.CustomFocusOrderSample
     */
    public var end: FocusRequester
        get() = FocusRequester.Default
        set(_) {}

    /**
     * A custom item to be used when the user requests focus to move focus in
     * ([FocusDirection.Enter]). An automatic [Enter][FocusDirection.Enter]" can be triggered when
     * we move focus to a focus group that is not itself focusable. In this case, users can use the
     * the focus direction that triggered the move in to determine the next item to be focused on.
     *
     * When you set the [enter] property, provide a lambda that takes the FocusDirection that
     * triggered the enter as an input, and provides a [FocusRequester] as an output. You can return
     * a custom destination by providing a [FocusRequester] attached to that destination, a
     * [Cancel][FocusRequester.Cancel] to cancel the focus enter or
     * [Default][FocusRequester.Default] to use the default focus enter behavior.
     *
     * @sample androidx.compose.ui.samples.CustomFocusEnterSample
     */
    @ExperimentalComposeUiApi
    @set:Deprecated("Use onEnter instead", ReplaceWith("onEnter"))
    public var enter: (FocusDirection) -> FocusRequester
        get() = { FocusRequester.Default }
        set(value) {
            onEnter = value.toUsingEnterExitScope()
        }

    /**
     * A custom item to be used when the user requests focus to move focus in
     * ([FocusDirection.Enter]). An automatic [Enter][FocusDirection.Enter]" can be triggered when
     * we move focus to a focus group that is not itself focusable. In this case, users can use the
     * the focus direction that triggered the move in to determine the next item to be focused on.

Sources: [live-androidx-ui-ui-ui-focus-focusproperties-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt)

## androidx.compose.ui.focus FocusProperties.kt source (lines 141–175)

     *
     * When you set the [onEnter] property, provide a lambda with the [FocusEnterExitScope] scope,
     * having the [FocusEnterExitScope.requestedFocusDirection] that triggered the enter as an
     * input. If redirection is required, use [FocusRequester.requestFocus] and if the focus change
     * should be canceled, use [FocusEnterExitScope.cancelFocusChange].
     *
     * @sample androidx.compose.ui.samples.CustomFocusEnterSample
     */
    public var onEnter: FocusEnterExitScope.() -> Unit
        get() = {}
        set(_) {}

    /**
     * A custom item to be used when the user requests focus to move out ([FocusDirection.Exit]). An
     * automatic [Exit][FocusDirection.Exit] can be triggered when we move focus outside the edge of
     * a parent. In this case, users can use the focus direction that triggered the move out to
     * determine the next focus destination.
     *
     * When you set the [exit] property, provide a lambda that takes the FocusDirection that
     * triggered the exit as an input, and provides a [FocusRequester] as an output. You can return
     * a custom destination by providing a [FocusRequester] attached to that destination, a
     * [Cancel][FocusRequester.Cancel] to cancel the focus exit or [Default][FocusRequester.Default]
     * to use the default focus exit behavior.
     *
     * @sample androidx.compose.ui.samples.CustomFocusExitSample
     */
    @ExperimentalComposeUiApi
    @set:Deprecated("Use onExit instead", ReplaceWith("onExit"))
    public var exit: (FocusDirection) -> FocusRequester
        get() = { FocusRequester.Default }
        set(value) {
            onExit = value.toUsingEnterExitScope()
        }

    /**

Sources: [live-androidx-ui-ui-ui-focus-focusproperties-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt)

## androidx.compose.ui.focus FocusProperties.kt source (lines 176–210)

     * A custom item to be used when the user requests focus to move out ([FocusDirection.Exit]). An
     * automatic [Exit][FocusDirection.Exit] can be triggered when we move focus outside the edge of
     * a parent. In this case, users can use the focus direction that triggered the move out to
     * determine the next focus destination.
     *
     * When you set the [onExit] property, provide a lambda with the [FocusEnterExitScope] scope,
     * having the [FocusEnterExitScope.requestedFocusDirection] that triggered the exit as an input.
     * If redirection is required, use [FocusRequester.requestFocus] and if the focus change should
     * be canceled, use [FocusEnterExitScope.cancelFocusChange].
     *
     * @sample androidx.compose.ui.samples.CustomFocusExitSample
     */
    public var onExit: FocusEnterExitScope.() -> Unit
        get() = {}
        set(_) {}

    /**
     * Sets the focus area for the associated focus target to which these [FocusProperties] are
     * applied on.
     *
     * If you simply ignore and do not set this value, [UnsetFocusRect] will be used. Or
     * alternatively you can set this value to [UnsetFocusRect] to prevent other [FocusProperties]
     * nodes in the chain from customizing the focus area.
     */
    public var focusRect: Rect
        get() = UnsetFocusRect
        set(_) {}

    public companion object {

        /**
         * Denotes that the bounds of the associated focus target should be used as the focus area.
         */
        public val UnsetFocusRect: Rect = Rect(Float.NaN, Float.NaN, Float.NaN, Float.NaN)
    }

Sources: [live-androidx-ui-ui-ui-focus-focusproperties-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt)

## androidx.compose.ui.focus FocusProperties.kt source (lines 211–245)

}

/**
 * A utility to use when upgrading from [FocusProperties.enter] and [FocusProperties.exit] to
 * [FocusProperties.onEnter] and [FocusProperties.onExit].
 */
private fun ((FocusDirection) -> FocusRequester).toUsingEnterExitScope():
    FocusEnterExitScope.() -> Unit = {
    val focusRequester = invoke(requestedFocusDirection)
    if (focusRequester === FocusRequester.Cancel) {
        cancelFocusChange()
    } else if (focusRequester !== FocusRequester.Default) {
        focusRequester.requestFocus()
    }
}

/**
 * Receiver scope for [FocusProperties.onEnter] and [FocusProperties.onExit]. Developers can change
 * focus with [FocusRequester.requestFocus] to change the focus or [cancelFocusChange] to stop the
 * focus from changing.
 */
public sealed interface FocusEnterExitScope {
    /**
     * The direction used to get into (with [FocusProperties.onEnter]) or leave (with
     * [FocusProperties.onExit]) focus.
     */
    public val requestedFocusDirection: FocusDirection

    /** Stop focus from changing. */
    public fun cancelFocusChange()

    @ExperimentalComposeUiApi
    @Deprecated("Use cancelFocusChange instead", replaceWith = ReplaceWith("cancelFocusChange"))
    public fun cancelFocus(): Unit = cancelFocusChange()
}

Sources: [live-androidx-ui-ui-ui-focus-focusproperties-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt)

## androidx.compose.ui.focus FocusProperties.kt source (lines 246–280)


internal class CancelIndicatingFocusBoundaryScope(
    override val requestedFocusDirection: FocusDirection
) : FocusEnterExitScope {
    var isCanceled = false
        private set

    override fun cancelFocusChange() {
        isCanceled = true
    }
}

internal class FocusPropertiesImpl : FocusProperties {
    override var canFocus: Boolean = true
    override var next: FocusRequester = FocusRequester.Default
    override var previous: FocusRequester = FocusRequester.Default
    override var up: FocusRequester = FocusRequester.Default
    override var down: FocusRequester = FocusRequester.Default
    override var left: FocusRequester = FocusRequester.Default
    override var right: FocusRequester = FocusRequester.Default
    override var start: FocusRequester = FocusRequester.Default
    override var end: FocusRequester = FocusRequester.Default
    override var onEnter: FocusEnterExitScope.() -> Unit = {}
    override var onExit: FocusEnterExitScope.() -> Unit = {}
    override var focusRect: Rect = UnsetFocusRect
}

/**
 * This modifier allows you to specify properties that are accessible to [focusTarget]s further down
 * the modifier chain or on child layout nodes.
 *
 * @sample androidx.compose.ui.samples.FocusPropertiesSample
 */
public fun Modifier.focusProperties(scope: FocusProperties.() -> Unit): Modifier =
    this then FocusPropertiesElement(scope)

Sources: [live-androidx-ui-ui-ui-focus-focusproperties-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt)

## androidx.compose.ui.focus FocusProperties.kt source (lines 281–303)


private data class FocusPropertiesElement(val scope: FocusPropertiesScope) :
    ModifierNodeElement<FocusPropertiesNode>() {
    override fun create() = FocusPropertiesNode(scope)

    override fun update(node: FocusPropertiesNode) {
        node.focusPropertiesScope = scope
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "focusProperties"
        properties["scope"] = scope
    }
}

private class FocusPropertiesNode(var focusPropertiesScope: FocusPropertiesScope) :
    FocusPropertiesModifierNode, Modifier.Node() {

    override fun applyFocusProperties(focusProperties: FocusProperties) {
        focusPropertiesScope.apply(focusProperties)
    }
}


Sources: [live-androidx-ui-ui-ui-focus-focusproperties-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt)

## androidx.compose.ui.focus FocusProperties.kt source (lines 36–70)

     * end up clearing focus.
     */
    public var canFocus: Boolean

    /**
     * A custom item to be used when the user requests the focus to move to the "next" item.
     *
     * @sample androidx.compose.ui.samples.CustomFocusOrderSample
     */
    public var next: FocusRequester
        get() = FocusRequester.Default
        set(_) {}

    /**
     * A custom item to be used when the user requests the focus to move to the "previous" item.
     *
     * @sample androidx.compose.ui.samples.CustomFocusOrderSample
     */
    public var previous: FocusRequester
        get() = FocusRequester.Default
        set(_) {}

    /**
     * A custom item to be used when the user moves focus "up".
     *
     * @sample androidx.compose.ui.samples.CustomFocusOrderSample
     */
    public var up: FocusRequester
        get() = FocusRequester.Default
        set(_) {}

    /**
     * A custom item to be used when the user moves focus "down".
     *
     * @sample androidx.compose.ui.samples.CustomFocusOrderSample

Sources: [live-androidx-ui-ui-ui-focus-focusproperties-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt)

## androidx.compose.ui.focus FocusProperties.kt source (lines 71–105)

     */
    public var down: FocusRequester
        get() = FocusRequester.Default
        set(_) {}

    /**
     * A custom item to be used when the user requests a focus moves to the "left" item.
     *
     * @sample androidx.compose.ui.samples.CustomFocusOrderSample
     */
    public var left: FocusRequester
        get() = FocusRequester.Default
        set(_) {}

    /**
     * A custom item to be used when the user requests a focus moves to the "right" item.
     *
     * @sample androidx.compose.ui.samples.CustomFocusOrderSample
     */
    public var right: FocusRequester
        get() = FocusRequester.Default
        set(_) {}

    /**
     * A custom item to be used when the user requests a focus moves to the "left" in LTR mode and
     * "right" in RTL mode.
     *
     * @sample androidx.compose.ui.samples.CustomFocusOrderSample
     */
    public var start: FocusRequester
        get() = FocusRequester.Default
        set(_) {}

    /**
     * A custom item to be used when the user requests a focus moves to the "right" in LTR mode and

Sources: [live-androidx-ui-ui-ui-focus-focusproperties-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusProperties.kt)
