---
type: reference
title: androidx.compose.ui.focus FocusRequester.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt"
tags:
  - Compose
  - Android
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
  - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    startLine: 106
    endLine: 140
    sha256: 71720c322e6d1e14325a8ee835e0712093622215f76e10e94e0054bda7d13564
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              }
              focusRequesterNodes.forEach {
                  if (it.captureFocus()) {
                      return true
                  }
              }
              return false
          }

          /**
           * Use this function to send a request to free focus when one of the components associated with
           * this [FocusRequester] is in a Captured state. If a component frees focus, it will send a
           * [FocusState] object to its associated [onFocusChanged] modifiers where
           * [FocusState.isCaptured]() == false.
           *
           * When a component is in a Captured state, all focus requests from other components are
           * declined. .
           *
           * @return true if the captured focus was successfully released. i.e. At the end of this
           *   operation, one of the components associated with this [focusRequester] freed focus.
           * @sample androidx.compose.ui.samples.CaptureFocusSample
           */
          public fun freeFocus(): Boolean {
              if (focusRequesterNodes.isEmpty()) {
                  println("$FocusWarning: $FocusRequesterNotInitialized")
                  return false
              }
              focusRequesterNodes.forEach {
                  if (it.freeFocus()) {
                      return true
                  }
              }
              return false
          }
  - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    startLine: 141
    endLine: 175
    sha256: 16ae53227b1d017b23ec0ec2ba3fd3862f3632b4184780bc89914a0eaefeb353
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /**
           * Use this function to request the focus target to save a reference to the currently focused
           * child in its saved instance state. After calling this, focus can be restored to the saved
           * child by making a call to [restoreFocusedChild].
           *
           * @return true if the focus target associated with this [FocusRequester] has a focused child
           *   and we successfully saved a reference to it.
           * @sample androidx.compose.ui.samples.RestoreFocusSample
           */
          // TODO: Deprecate once focus restoration is enabled by default via flags.
          // @Deprecated(
          //    message =
          //        "The focused child is now saved automatically whenever focus changes. Just call" +
          //            " restoreFocusedChild to restore focus.",
          //    level = DeprecationLevel.WARNING,
          // )
          public fun saveFocusedChild(): Boolean {
              if (focusRequesterNodes.isEmpty()) {
                  println("$FocusWarning: $FocusRequesterNotInitialized")
                  return false
              }
              focusRequesterNodes.forEach { if (it.saveFocusedChild()) return true }
              return false
          }

          /**
           * Use this function to restore focus to one of the children of the node pointed to by this
           * [FocusRequester]. This restores focus to a previously focused child that was saved by using
           * [saveFocusedChild].
           *
           * @return true if we successfully restored focus to one of the children of the [focusTarget]
           *   associated with this [FocusRequester]
           * @sample androidx.compose.ui.samples.RestoreFocusSample
           */
          public fun restoreFocusedChild(): Boolean {
  - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    startLine: 176
    endLine: 210
    sha256: 93ed9443489b2160221e9dc373df5d89522c907abbc1319dd12cc3028622371f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (focusRequesterNodes.isEmpty()) {
                  println("$FocusWarning: $FocusRequesterNotInitialized")
                  return false
              }
              var success = false
              focusRequesterNodes.forEach { success = it.restoreFocusedChild() || success }
              return success
          }

          public companion object {
              /**
               * Default [focusRequester], which when used in [Modifier.focusProperties][focusProperties]
               * implies that we want to use the default system focus order, that is based on the position
               * of the items on the screen.
               */
              public val Default: FocusRequester = FocusRequester()

              /**
               * Cancelled [focusRequester], which when used in
               * [Modifier.focusProperties][focusProperties] implies that we want to block focus search
               * from proceeding in the specified [direction][FocusDirection].
               *
               * @sample androidx.compose.ui.samples.CancelFocusMoveSample
               */
              public val Cancel: FocusRequester = FocusRequester()

              /** Used to indicate that the focus has been redirected during an enter/exit lambda. */
              internal val Redirect = FocusRequester()

              /**
               * Convenient way to create multiple [FocusRequester] instances.
               *
               * @sample androidx.compose.ui.samples.CreateFocusRequesterRefsSample
               */
              public object FocusRequesterFactory {
  - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    startLine: 211
    endLine: 245
    sha256: 92ade1df54e2e073bf067e0e23590d9ccce5d5d896059ddd0a7fc25a21b8e904
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  public operator fun component1(): FocusRequester = FocusRequester()

                  public operator fun component2(): FocusRequester = FocusRequester()

                  public operator fun component3(): FocusRequester = FocusRequester()

                  public operator fun component4(): FocusRequester = FocusRequester()

                  public operator fun component5(): FocusRequester = FocusRequester()

                  public operator fun component6(): FocusRequester = FocusRequester()

                  public operator fun component7(): FocusRequester = FocusRequester()

                  public operator fun component8(): FocusRequester = FocusRequester()

                  public operator fun component9(): FocusRequester = FocusRequester()

                  public operator fun component10(): FocusRequester = FocusRequester()

                  public operator fun component11(): FocusRequester = FocusRequester()

                  public operator fun component12(): FocusRequester = FocusRequester()

                  public operator fun component13(): FocusRequester = FocusRequester()

                  public operator fun component14(): FocusRequester = FocusRequester()

                  public operator fun component15(): FocusRequester = FocusRequester()

                  public operator fun component16(): FocusRequester = FocusRequester()
              }

              /**
               * Convenient way to create multiple [FocusRequester]s, which can to be used to request
  - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    startLine: 246
    endLine: 280
    sha256: 6af25cb4190e405badfc1dbcdd7fdff37b08dfbb9e1bda4acacc2dd34372ca90
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * focus, or to specify a focus traversal order.
               *
               * @sample androidx.compose.ui.samples.CreateFocusRequesterRefsSample
               */
              public fun createRefs(): FocusRequesterFactory = FocusRequesterFactory
          }

          /**
           * This function searches down the hierarchy and calls [onFound] for all focus nodes associated
           * with this [FocusRequester].
           *
           * @param onFound the callback that is run when the child is found.
           * @return false if no focus nodes were found or if the FocusRequester is
           *   [FocusRequester.Cancel]. Returns a logical or of the result of calling [onFound] for each
           *   focus node associated with this [FocusRequester].
           */
          internal inline fun findFocusTarget(onFound: (FocusTargetNode) -> Boolean): Boolean {
              check(this !== Default) { InvalidFocusRequesterInvocation }
              check(this !== Cancel) { InvalidFocusRequesterInvocation }
              if (focusRequesterNodes.isEmpty()) {
                  println("$FocusWarning: $FocusRequesterNotInitialized")
                  return false
              }
              var success = false
              focusRequesterNodes.forEach { node ->
                  node.visitChildren(Nodes.FocusTarget) {
                      if (onFound(it)) {
                          success = true
                          return@forEach
                      }
                  }
              }
              return success
          }
      }
  - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt
    startLine: 36
    endLine: 70
    sha256: a804a21e43edd5e6e63220a52a5588efa8dcfd56eb380d755e9a655129940837
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      private const val InvalidFocusRequesterInvocation =
          """
          Please check whether the focusRequester is FocusRequester.Cancel or FocusRequester.Default
          before invoking any functions on the focusRequester.
      """

      /**
       * The [FocusRequester] is used in conjunction with
       * [Modifier.focusRequester][androidx.compose.ui.focus.focusRequester] to send requests to change
       * focus.
       *
       * @sample androidx.compose.ui.samples.RequestFocusSample
       * @see androidx.compose.ui.focus.focusRequester
       */
      @Stable
      public class FocusRequester @RememberInComposition public constructor() {

          internal val focusRequesterNodes: MutableObjectList<FocusRequesterModifierNode> =
              mutableObjectListOf()

          /**
           * Use this function to request focus. If the system grants focus to a component associated with
           * this [FocusRequester], its [onFocusChanged] modifiers will receive a [FocusState] object
           * where [FocusState.isFocused] is true.
           *
           * @sample androidx.compose.ui.samples.RequestFocusSample
           */
          @Deprecated(
              message = "use the version the has a FocusDirection",
              replaceWith = ReplaceWith("this.requestFocus()"),
              level = DeprecationLevel.HIDDEN,
          )
          public fun requestFocus() {
              requestFocus(Enter)
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
  id: live-androidx-ui-ui-ui-focus-focusrequester
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.focus
  sections:
    - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-1
      title: androidx.compose.ui.focus FocusRequester.kt source (lines 1–35)
      aliases:
        - androidx.compose.ui.focus.FocusRequester
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusrequester-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-106
      title: androidx.compose.ui.focus FocusRequester.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.focus.FocusRequester
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusrequester-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-141
      title: androidx.compose.ui.focus FocusRequester.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.focus.FocusRequester
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusrequester-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-176
      title: androidx.compose.ui.focus FocusRequester.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.focus.FocusRequester
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusrequester-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-211
      title: androidx.compose.ui.focus FocusRequester.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.focus.FocusRequester
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusrequester-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-246
      title: androidx.compose.ui.focus FocusRequester.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.focus.FocusRequester
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusrequester-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-36
      title: androidx.compose.ui.focus FocusRequester.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.focus.FocusRequester
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusrequester-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-focus-focusrequester-lines-71
      title: androidx.compose.ui.focus FocusRequester.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.focus.FocusRequester
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-focus-focusrequester-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.focus FocusRequester.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt

## androidx.compose.ui.focus FocusRequester.kt source (lines 1–35)

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

Sources: [live-androidx-ui-ui-ui-focus-focusrequester-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt)

## androidx.compose.ui.focus FocusRequester.kt source (lines 106–140)

        }
        focusRequesterNodes.forEach {
            if (it.captureFocus()) {
                return true
            }
        }
        return false
    }

    /**
     * Use this function to send a request to free focus when one of the components associated with
     * this [FocusRequester] is in a Captured state. If a component frees focus, it will send a
     * [FocusState] object to its associated [onFocusChanged] modifiers where
     * [FocusState.isCaptured]() == false.
     *
     * When a component is in a Captured state, all focus requests from other components are
     * declined. .
     *
     * @return true if the captured focus was successfully released. i.e. At the end of this
     *   operation, one of the components associated with this [focusRequester] freed focus.
     * @sample androidx.compose.ui.samples.CaptureFocusSample
     */
    public fun freeFocus(): Boolean {
        if (focusRequesterNodes.isEmpty()) {
            println("$FocusWarning: $FocusRequesterNotInitialized")
            return false
        }
        focusRequesterNodes.forEach {
            if (it.freeFocus()) {
                return true
            }
        }
        return false
    }


Sources: [live-androidx-ui-ui-ui-focus-focusrequester-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt)

## androidx.compose.ui.focus FocusRequester.kt source (lines 141–175)

    /**
     * Use this function to request the focus target to save a reference to the currently focused
     * child in its saved instance state. After calling this, focus can be restored to the saved
     * child by making a call to [restoreFocusedChild].
     *
     * @return true if the focus target associated with this [FocusRequester] has a focused child
     *   and we successfully saved a reference to it.
     * @sample androidx.compose.ui.samples.RestoreFocusSample
     */
    // TODO: Deprecate once focus restoration is enabled by default via flags.
    // @Deprecated(
    //    message =
    //        "The focused child is now saved automatically whenever focus changes. Just call" +
    //            " restoreFocusedChild to restore focus.",
    //    level = DeprecationLevel.WARNING,
    // )
    public fun saveFocusedChild(): Boolean {
        if (focusRequesterNodes.isEmpty()) {
            println("$FocusWarning: $FocusRequesterNotInitialized")
            return false
        }
        focusRequesterNodes.forEach { if (it.saveFocusedChild()) return true }
        return false
    }

    /**
     * Use this function to restore focus to one of the children of the node pointed to by this
     * [FocusRequester]. This restores focus to a previously focused child that was saved by using
     * [saveFocusedChild].
     *
     * @return true if we successfully restored focus to one of the children of the [focusTarget]
     *   associated with this [FocusRequester]
     * @sample androidx.compose.ui.samples.RestoreFocusSample
     */
    public fun restoreFocusedChild(): Boolean {

Sources: [live-androidx-ui-ui-ui-focus-focusrequester-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt)

## androidx.compose.ui.focus FocusRequester.kt source (lines 176–210)

        if (focusRequesterNodes.isEmpty()) {
            println("$FocusWarning: $FocusRequesterNotInitialized")
            return false
        }
        var success = false
        focusRequesterNodes.forEach { success = it.restoreFocusedChild() || success }
        return success
    }

    public companion object {
        /**
         * Default [focusRequester], which when used in [Modifier.focusProperties][focusProperties]
         * implies that we want to use the default system focus order, that is based on the position
         * of the items on the screen.
         */
        public val Default: FocusRequester = FocusRequester()

        /**
         * Cancelled [focusRequester], which when used in
         * [Modifier.focusProperties][focusProperties] implies that we want to block focus search
         * from proceeding in the specified [direction][FocusDirection].
         *
         * @sample androidx.compose.ui.samples.CancelFocusMoveSample
         */
        public val Cancel: FocusRequester = FocusRequester()

        /** Used to indicate that the focus has been redirected during an enter/exit lambda. */
        internal val Redirect = FocusRequester()

        /**
         * Convenient way to create multiple [FocusRequester] instances.
         *
         * @sample androidx.compose.ui.samples.CreateFocusRequesterRefsSample
         */
        public object FocusRequesterFactory {

Sources: [live-androidx-ui-ui-ui-focus-focusrequester-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt)

## androidx.compose.ui.focus FocusRequester.kt source (lines 211–245)

            public operator fun component1(): FocusRequester = FocusRequester()

            public operator fun component2(): FocusRequester = FocusRequester()

            public operator fun component3(): FocusRequester = FocusRequester()

            public operator fun component4(): FocusRequester = FocusRequester()

            public operator fun component5(): FocusRequester = FocusRequester()

            public operator fun component6(): FocusRequester = FocusRequester()

            public operator fun component7(): FocusRequester = FocusRequester()

            public operator fun component8(): FocusRequester = FocusRequester()

            public operator fun component9(): FocusRequester = FocusRequester()

            public operator fun component10(): FocusRequester = FocusRequester()

            public operator fun component11(): FocusRequester = FocusRequester()

            public operator fun component12(): FocusRequester = FocusRequester()

            public operator fun component13(): FocusRequester = FocusRequester()

            public operator fun component14(): FocusRequester = FocusRequester()

            public operator fun component15(): FocusRequester = FocusRequester()

            public operator fun component16(): FocusRequester = FocusRequester()
        }

        /**
         * Convenient way to create multiple [FocusRequester]s, which can to be used to request

Sources: [live-androidx-ui-ui-ui-focus-focusrequester-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt)

## androidx.compose.ui.focus FocusRequester.kt source (lines 246–280)

         * focus, or to specify a focus traversal order.
         *
         * @sample androidx.compose.ui.samples.CreateFocusRequesterRefsSample
         */
        public fun createRefs(): FocusRequesterFactory = FocusRequesterFactory
    }

    /**
     * This function searches down the hierarchy and calls [onFound] for all focus nodes associated
     * with this [FocusRequester].
     *
     * @param onFound the callback that is run when the child is found.
     * @return false if no focus nodes were found or if the FocusRequester is
     *   [FocusRequester.Cancel]. Returns a logical or of the result of calling [onFound] for each
     *   focus node associated with this [FocusRequester].
     */
    internal inline fun findFocusTarget(onFound: (FocusTargetNode) -> Boolean): Boolean {
        check(this !== Default) { InvalidFocusRequesterInvocation }
        check(this !== Cancel) { InvalidFocusRequesterInvocation }
        if (focusRequesterNodes.isEmpty()) {
            println("$FocusWarning: $FocusRequesterNotInitialized")
            return false
        }
        var success = false
        focusRequesterNodes.forEach { node ->
            node.visitChildren(Nodes.FocusTarget) {
                if (onFound(it)) {
                    success = true
                    return@forEach
                }
            }
        }
        return success
    }
}

Sources: [live-androidx-ui-ui-ui-focus-focusrequester-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt)

## androidx.compose.ui.focus FocusRequester.kt source (lines 36–70)


private const val InvalidFocusRequesterInvocation =
    """
    Please check whether the focusRequester is FocusRequester.Cancel or FocusRequester.Default
    before invoking any functions on the focusRequester.
"""

/**
 * The [FocusRequester] is used in conjunction with
 * [Modifier.focusRequester][androidx.compose.ui.focus.focusRequester] to send requests to change
 * focus.
 *
 * @sample androidx.compose.ui.samples.RequestFocusSample
 * @see androidx.compose.ui.focus.focusRequester
 */
@Stable
public class FocusRequester @RememberInComposition public constructor() {

    internal val focusRequesterNodes: MutableObjectList<FocusRequesterModifierNode> =
        mutableObjectListOf()

    /**
     * Use this function to request focus. If the system grants focus to a component associated with
     * this [FocusRequester], its [onFocusChanged] modifiers will receive a [FocusState] object
     * where [FocusState.isFocused] is true.
     *
     * @sample androidx.compose.ui.samples.RequestFocusSample
     */
    @Deprecated(
        message = "use the version the has a FocusDirection",
        replaceWith = ReplaceWith("this.requestFocus()"),
        level = DeprecationLevel.HIDDEN,
    )
    public fun requestFocus() {
        requestFocus(Enter)

Sources: [live-androidx-ui-ui-ui-focus-focusrequester-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt)

## androidx.compose.ui.focus FocusRequester.kt source (lines 71–105)

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

Sources: [live-androidx-ui-ui-ui-focus-focusrequester-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/focus/FocusRequester.kt)
