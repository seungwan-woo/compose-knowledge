---
type: reference
title: androidx.compose.ui.layout OnRemeasuredModifier.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt
    startLine: 1
    endLine: 35
    sha256: 8177eeeea1cfb8e38c5cb153729e4566f3fc593dc0288efaec213dfbaeb70171
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

      package androidx.compose.ui.layout

      import androidx.compose.runtime.MutableState
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.internal.JvmDefaultWithCompatibility
      import androidx.compose.ui.node.MeasuredSizeAwareModifierNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.unit.IntSize

      /**
       * Invoked with the size of the modified Compose UI element when the element is first measured or
       * when the size of the element changes.
       *
       * There are no guarantees `onSizeChanged` will not be re-invoked with the same size.
       *
       * Using the `onSizeChanged` size value in a [MutableState] to update layout causes the new size
       * value to be read and the layout to be recomposed in the succeeding frame, resulting in a one
  - id: live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt
    startLine: 106
    endLine: 108
    sha256: b22feb80e0891c7c35a68b243c17594b38ef531945d4815734475e2f8aca4af7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          public fun onRemeasured(size: IntSize)
      }
  - id: live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt
    startLine: 36
    endLine: 70
    sha256: 2161f032cdfd3dbcdc2ab6e02c63078da8f195d9653515c04907529e410d3158
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * frame lag.
       *
       * You can use `onSizeChanged` to affect drawing operations. Use [Layout] or [SubcomposeLayout] to
       * enable the size of one component to affect the size of another.
       *
       * Example usage:
       *
       * @sample androidx.compose.ui.samples.OnSizeChangedSample
       */
      @Stable
      public fun Modifier.onSizeChanged(onSizeChanged: (IntSize) -> Unit): Modifier =
          this.then(OnSizeChangedModifier(onSizeChanged = onSizeChanged))

      private class OnSizeChangedModifier(private val onSizeChanged: (IntSize) -> Unit) :
          ModifierNodeElement<OnSizeChangedNode>() {
          override fun create(): OnSizeChangedNode = OnSizeChangedNode(onSizeChanged)

          override fun update(node: OnSizeChangedNode) {
              node.update(onSizeChanged)
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is OnSizeChangedModifier) return false

              return onSizeChanged === other.onSizeChanged
          }

          override fun hashCode(): Int {
              return onSizeChanged.hashCode()
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "onSizeChanged"
              properties["onSizeChanged"] = onSizeChanged
  - id: live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt
    startLine: 71
    endLine: 105
    sha256: 00c7e096dd9687e78769855aff2094e8becdbcd25bf07b22a97502358f0e9caf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }
      }

      internal class OnSizeChangedNode(private var onSizeChanged: (IntSize) -> Unit) :
          Modifier.Node(), MeasuredSizeAwareModifierNode {
          // When onSizeChanged changes, we want to invalidate so onRemeasured is called again
          override val shouldAutoInvalidate: Boolean = true
          private var previousSize = IntSize(Int.MIN_VALUE, Int.MIN_VALUE)

          fun update(onSizeChanged: (IntSize) -> Unit) {
              this.onSizeChanged = onSizeChanged
              // Reset the previous size, so when onSizeChanged changes the new lambda gets invoked,
              // matching previous behavior
              previousSize = IntSize(Int.MIN_VALUE, Int.MIN_VALUE)
          }

          override fun onRemeasured(size: IntSize) {
              if (previousSize != size) {
                  onSizeChanged(size)
                  previousSize = size
              }
          }
      }

      /**
       * A modifier whose [onRemeasured] is called when the layout content is remeasured. The most common
       * usage is [onSizeChanged].
       *
       * Example usage:
       *
       * @sample androidx.compose.ui.samples.OnSizeChangedSample
       */
      @JvmDefaultWithCompatibility
      public interface OnRemeasuredModifier : Modifier.Element {
          /** Called after a layout's contents have been remeasured. */
compose:
  id: live-androidx-ui-ui-ui-layout-onremeasuredmodifier
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.layout
  sections:
    - id: live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-1
      title: androidx.compose.ui.layout OnRemeasuredModifier.kt source (lines 1–35)
      aliases:
        - androidx.compose.ui.layout.onSizeChanged
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-106
      title: androidx.compose.ui.layout OnRemeasuredModifier.kt source (lines 106–108)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-36
      title: androidx.compose.ui.layout OnRemeasuredModifier.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.layout.onSizeChanged
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-71
      title: androidx.compose.ui.layout OnRemeasuredModifier.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.layout.onSizeChanged
        - androidx.compose.ui.layout.OnRemeasuredModifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.layout OnRemeasuredModifier.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt

## androidx.compose.ui.layout OnRemeasuredModifier.kt source (lines 1–35)

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

package androidx.compose.ui.layout

import androidx.compose.runtime.MutableState
import androidx.compose.runtime.Stable
import androidx.compose.ui.Modifier
import androidx.compose.ui.internal.JvmDefaultWithCompatibility
import androidx.compose.ui.node.MeasuredSizeAwareModifierNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.unit.IntSize

/**
 * Invoked with the size of the modified Compose UI element when the element is first measured or
 * when the size of the element changes.
 *
 * There are no guarantees `onSizeChanged` will not be re-invoked with the same size.
 *
 * Using the `onSizeChanged` size value in a [MutableState] to update layout causes the new size
 * value to be read and the layout to be recomposed in the succeeding frame, resulting in a one

Sources: [live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt)

## androidx.compose.ui.layout OnRemeasuredModifier.kt source (lines 106–108)

    public fun onRemeasured(size: IntSize)
}


Sources: [live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt)

## androidx.compose.ui.layout OnRemeasuredModifier.kt source (lines 36–70)

 * frame lag.
 *
 * You can use `onSizeChanged` to affect drawing operations. Use [Layout] or [SubcomposeLayout] to
 * enable the size of one component to affect the size of another.
 *
 * Example usage:
 *
 * @sample androidx.compose.ui.samples.OnSizeChangedSample
 */
@Stable
public fun Modifier.onSizeChanged(onSizeChanged: (IntSize) -> Unit): Modifier =
    this.then(OnSizeChangedModifier(onSizeChanged = onSizeChanged))

private class OnSizeChangedModifier(private val onSizeChanged: (IntSize) -> Unit) :
    ModifierNodeElement<OnSizeChangedNode>() {
    override fun create(): OnSizeChangedNode = OnSizeChangedNode(onSizeChanged)

    override fun update(node: OnSizeChangedNode) {
        node.update(onSizeChanged)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is OnSizeChangedModifier) return false

        return onSizeChanged === other.onSizeChanged
    }

    override fun hashCode(): Int {
        return onSizeChanged.hashCode()
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "onSizeChanged"
        properties["onSizeChanged"] = onSizeChanged

Sources: [live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt)

## androidx.compose.ui.layout OnRemeasuredModifier.kt source (lines 71–105)

    }
}

internal class OnSizeChangedNode(private var onSizeChanged: (IntSize) -> Unit) :
    Modifier.Node(), MeasuredSizeAwareModifierNode {
    // When onSizeChanged changes, we want to invalidate so onRemeasured is called again
    override val shouldAutoInvalidate: Boolean = true
    private var previousSize = IntSize(Int.MIN_VALUE, Int.MIN_VALUE)

    fun update(onSizeChanged: (IntSize) -> Unit) {
        this.onSizeChanged = onSizeChanged
        // Reset the previous size, so when onSizeChanged changes the new lambda gets invoked,
        // matching previous behavior
        previousSize = IntSize(Int.MIN_VALUE, Int.MIN_VALUE)
    }

    override fun onRemeasured(size: IntSize) {
        if (previousSize != size) {
            onSizeChanged(size)
            previousSize = size
        }
    }
}

/**
 * A modifier whose [onRemeasured] is called when the layout content is remeasured. The most common
 * usage is [onSizeChanged].
 *
 * Example usage:
 *
 * @sample androidx.compose.ui.samples.OnSizeChangedSample
 */
@JvmDefaultWithCompatibility
public interface OnRemeasuredModifier : Modifier.Element {
    /** Called after a layout's contents have been remeasured. */

Sources: [live-androidx-ui-ui-ui-layout-onremeasuredmodifier-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/OnRemeasuredModifier.kt)
