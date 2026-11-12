---
type: reference
title: androidx.compose.foundation.layout Box.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    startLine: 1
    endLine: 35
    sha256: 375e9c620f5301bd3211408735a8a48bf40d2280233cab1361887f2031864368
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

      package androidx.compose.foundation.layout

      import androidx.collection.MutableScatterMap
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.layout.IntrinsicMeasurable
      import androidx.compose.ui.layout.IntrinsicMeasureScope
      import androidx.compose.ui.layout.Layout
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasurePolicy
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.layout.Placeable
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.ParentDataModifierNode
  - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    startLine: 106
    endLine: 140
    sha256: abb2a7a529fa628f8eba07b15cc639b5235104a8e1d6c115bd62f05f3c3e3736
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      @PublishedApi
      @Composable
      internal fun rememberBoxMeasurePolicy(
          alignment: Alignment,
          propagateMinConstraints: Boolean,
      ): MeasurePolicy =
          if (alignment == Alignment.TopStart && !propagateMinConstraints) {
              DefaultBoxMeasurePolicy
          } else {
              remember(alignment, propagateMinConstraints) {
                  BoxMeasurePolicy(alignment, propagateMinConstraints)
              }
          }

      private val DefaultBoxMeasurePolicy: MeasurePolicy = BoxMeasurePolicy(Alignment.TopStart, false)

      private data class BoxMeasurePolicy(
          private val alignment: Alignment,
          private val propagateMinConstraints: Boolean,
      ) : MeasurePolicy {
          override fun MeasureScope.measure(
              measurables: List<Measurable>,
              constraints: Constraints,
          ): MeasureResult {
              if (measurables.isEmpty()) {
                  return layout(constraints.minWidth, constraints.minHeight) {}
              }

              val contentConstraints =
                  if (propagateMinConstraints) {
                      constraints
                  } else {
                      constraints.copyMaxDimensions()
                  }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    startLine: 141
    endLine: 175
    sha256: 831b1c6a5f7d52061e842573fefc1753a16680283b1ce01888f1736ed163142d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              if (measurables.size == 1) {
                  val measurable = measurables[0]
                  val boxWidth: Int
                  val boxHeight: Int
                  val placeable: Placeable
                  if (!measurable.matchesParentSize) {
                      placeable = measurable.measure(contentConstraints)
                      boxWidth = max(constraints.minWidth, placeable.width)
                      boxHeight = max(constraints.minHeight, placeable.height)
                  } else {
                      boxWidth = constraints.minWidth
                      boxHeight = constraints.minHeight
                      placeable =
                          measurable.measure(
                              Constraints.fixed(constraints.minWidth, constraints.minHeight)
                          )
                  }
                  return layout(boxWidth, boxHeight) {
                      placeInBox(placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment)
                  }
              }

              val placeables = arrayOfNulls<Placeable>(measurables.size)
              // First measure non match parent size children to get the size of the Box.
              var hasMatchParentSizeChildren = false
              var boxWidth = constraints.minWidth
              var boxHeight = constraints.minHeight
              measurables.fastForEachIndexed { index, measurable ->
                  if (!measurable.matchesParentSize) {
                      val placeable = measurable.measure(contentConstraints)
                      placeables[index] = placeable
                      boxWidth = max(boxWidth, placeable.width)
                      boxHeight = max(boxHeight, placeable.height)
                  } else {
  - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    startLine: 176
    endLine: 210
    sha256: 5cfa6536b890dc49643b35bf787af946b08fb3d433269b611d861f018a1dc49d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      hasMatchParentSizeChildren = true
                  }
              }

              // Now measure match parent size children, if any.
              if (hasMatchParentSizeChildren) {
                  // The infinity check is needed for default intrinsic measurements.
                  val matchParentSizeConstraints =
                      Constraints(
                          minWidth = if (boxWidth != Constraints.Infinity) boxWidth else 0,
                          minHeight = if (boxHeight != Constraints.Infinity) boxHeight else 0,
                          maxWidth = boxWidth,
                          maxHeight = boxHeight,
                      )
                  measurables.fastForEachIndexed { index, measurable ->
                      if (measurable.matchesParentSize) {
                          placeables[index] = measurable.measure(matchParentSizeConstraints)
                      }
                  }
              }

              // Specify the size of the Box and position its children.
              return layout(boxWidth, boxHeight) {
                  placeables.forEachIndexed { index, placeable ->
                      placeable as Placeable
                      val measurable = measurables[index]
                      placeInBox(placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment)
                  }
              }
          }

          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ): Int {
  - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    startLine: 211
    endLine: 245
    sha256: 6b24807fe4ee2f23123f6894a9c35004bba8745213f3d809b89fe279057058ba
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              var maxWidth = 0
              measurables.fastForEach { measurable ->
                  if (!measurable.matchesParentSize) {
                      maxWidth = max(maxWidth, measurable.minIntrinsicWidth(height))
                  }
              }
              return maxWidth
          }

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
          ): Int {
              var maxHeight = 0
              measurables.fastForEach { measurable ->
                  if (!measurable.matchesParentSize) {
                      maxHeight = max(maxHeight, measurable.minIntrinsicHeight(width))
                  }
              }
              return maxHeight
          }

          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ): Int {
              var maxWidth = 0
              measurables.fastForEach { measurable ->
                  if (!measurable.matchesParentSize) {
                      maxWidth = max(maxWidth, measurable.maxIntrinsicWidth(height))
                  }
              }
              return maxWidth
          }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    startLine: 246
    endLine: 280
    sha256: 1afb656cb5be2f37546c3462098561695eb8c5a51bbca5c5832c9695f701336e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
          ): Int {
              var maxHeight = 0
              measurables.fastForEach { measurable ->
                  if (!measurable.matchesParentSize) {
                      maxHeight = max(maxHeight, measurable.maxIntrinsicHeight(width))
                  }
              }
              return maxHeight
          }
      }

      private fun Placeable.PlacementScope.placeInBox(
          placeable: Placeable,
          measurable: Measurable,
          layoutDirection: LayoutDirection,
          boxWidth: Int,
          boxHeight: Int,
          alignment: Alignment,
      ) {
          val childAlignment = measurable.boxChildDataNode?.alignment ?: alignment
          val position =
              childAlignment.align(
                  IntSize(placeable.width, placeable.height),
                  IntSize(boxWidth, boxHeight),
                  layoutDirection,
              )
          placeable.place(position)
      }

      /**
       * A box with no content that can participate in layout, drawing, pointer input due to the
       * [modifier] applied to it.
  - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    startLine: 281
    endLine: 315
    sha256: 42f0ddbaaba825fe54bd9909cf159c0abbde91532d327603675dda25fe030974
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleBox
       * @param modifier The modifier to be applied to the layout.
       */
      @Composable
      public fun Box(modifier: Modifier) {
          Layout(measurePolicy = EmptyBoxMeasurePolicy, modifier = modifier)
      }

      internal val EmptyBoxMeasurePolicy: MeasurePolicy =
          object : MeasurePolicy {
              override fun MeasureScope.measure(
                  measurables: List<Measurable>,
                  constraints: Constraints,
              ): MeasureResult = layout(constraints.minWidth, constraints.minHeight) {}

              override fun IntrinsicMeasureScope.minIntrinsicWidth(
                  measurables: List<IntrinsicMeasurable>,
                  height: Int,
              ): Int = 0

              override fun IntrinsicMeasureScope.minIntrinsicHeight(
                  measurables: List<IntrinsicMeasurable>,
                  width: Int,
              ): Int = 0

              override fun IntrinsicMeasureScope.maxIntrinsicWidth(
                  measurables: List<IntrinsicMeasurable>,
                  height: Int,
              ): Int = 0

              override fun IntrinsicMeasureScope.maxIntrinsicHeight(
                  measurables: List<IntrinsicMeasurable>,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    startLine: 316
    endLine: 350
    sha256: be51784d3bf5340edb13a557a0b3b7da683bf28520a2dce5662d45bc3a1dad28
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  width: Int,
              ): Int = 0
          }

      /** A BoxScope provides a scope for the children of [Box] and [BoxWithConstraints]. */
      @LayoutScopeMarker
      @Immutable
      public interface BoxScope {
          /**
           * Pull the content element to a specific [Alignment] within the [Box]. This alignment will have
           * priority over the [Box]'s `alignment` parameter.
           */
          @Stable public fun Modifier.align(alignment: Alignment): Modifier

          /**
           * Size the element to match the size of the [Box] after all other content elements have been
           * measured.
           *
           * The element using this modifier does not take part in defining the size of the [Box].
           * Instead, it matches the size of the [Box] after all other children (not using
           * matchParentSize() modifier) have been measured to obtain the [Box]'s size. In contrast, a
           * general-purpose [Modifier.fillMaxSize] modifier, which makes an element occupy all available
           * space, will take part in defining the size of the [Box]. Consequently, using it for an
           * element inside a [Box] will make the [Box] itself always fill the available space.
           */
          @Stable public fun Modifier.matchParentSize(): Modifier
      }

      @PublishedApi
      internal object BoxScopeInstance : BoxScope {
          @Stable
          override fun Modifier.align(alignment: Alignment) =
              this.then(
                  BoxChildDataElement(
                      alignment = alignment,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    startLine: 351
    endLine: 385
    sha256: 31764f6f41ccd50e847c09db9d38fe9e579fe34dc31f857cb63f3055abf97b0a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      matchParentSize = false,
                      inspectorInfo =
                          debugInspectorInfo {
                              name = "align"
                              value = alignment
                          },
                  )
              )

          @Stable
          override fun Modifier.matchParentSize() =
              this.then(
                  BoxChildDataElement(
                      alignment = Alignment.Center,
                      matchParentSize = true,
                      inspectorInfo = debugInspectorInfo { name = "matchParentSize" },
                  )
              )
      }

      private val IntrinsicMeasurable.boxChildDataNode: BoxChildDataNode?
          get() = parentData as? BoxChildDataNode
      private val IntrinsicMeasurable.matchesParentSize: Boolean
          get() = boxChildDataNode?.matchParentSize ?: false

      private class BoxChildDataElement(
          val alignment: Alignment,
          val matchParentSize: Boolean,
          val inspectorInfo: InspectorInfo.() -> Unit,
      ) : ModifierNodeElement<BoxChildDataNode>() {
          override fun create(): BoxChildDataNode {
              return BoxChildDataNode(alignment, matchParentSize)
          }

          override fun update(node: BoxChildDataNode) {
  - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    startLine: 36
    endLine: 70
    sha256: 46b7f03c5a1bf09ebfcb634ca4a9c3f3f17fadf6772f08bec1fc5c01c34a8915
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.platform.debugInspectorInfo
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.util.fastForEach
      import androidx.compose.ui.util.fastForEachIndexed
      import kotlin.math.max

      /**
       * A layout composable with [content]. The [Box] will size itself to fit the content, subject to the
       * incoming constraints. When children are smaller than the parent, by default they will be
       * positioned inside the [Box] according to the [contentAlignment]. For individually specifying the
       * alignments of the children layouts, use the [BoxScope.align] modifier. By default, the content
       * will be measured without the [Box]'s incoming min constraints, unless [propagateMinConstraints]
       * is `true`. As an example, setting [propagateMinConstraints] to `true` can be useful when the
       * [Box] has content on which modifiers cannot be specified directly and setting a min size on the
       * content of the [Box] is needed. If [propagateMinConstraints] is set to `true`, the min size set
       * on the [Box] will also be applied to the content, whereas otherwise the min size will only apply
       * to the [Box]. When the content has more than one layout child the layout children will be stacked
       * one on top of the other (positioned as explained above) in the composition order.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleBox
       * @param modifier The modifier to be applied to the layout.
       * @param contentAlignment The default alignment inside the Box.
       * @param propagateMinConstraints Whether the incoming min constraints should be passed to content.
       * @param content The content of the [Box].
       */
      @Composable
      public inline fun Box(
          modifier: Modifier = Modifier,
          contentAlignment: Alignment = Alignment.TopStart,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    startLine: 386
    endLine: 412
    sha256: 57484f2d19b06e01b63971671731e64440f020ac47a07028365ec5df51f3fff0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              node.alignment = alignment
              node.matchParentSize = matchParentSize
          }

          override fun InspectorInfo.inspectableProperties() {
              inspectorInfo()
          }

          override fun hashCode(): Int {
              var result = alignment.hashCode()
              result = 31 * result + matchParentSize.hashCode()
              return result
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              val otherModifier = other as? BoxChildDataElement ?: return false
              return alignment == otherModifier.alignment &&
                  matchParentSize == otherModifier.matchParentSize
          }
      }

      private class BoxChildDataNode(var alignment: Alignment, var matchParentSize: Boolean) :
          ParentDataModifierNode, Modifier.Node() {
          override fun Density.modifyParentData(parentData: Any?) = this@BoxChildDataNode
      }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt
    startLine: 71
    endLine: 105
    sha256: b32d1d594430f03f448cb4b2bf320d31b117662b69e8a68f141f5f43a5a56c4f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          propagateMinConstraints: Boolean = false,
          content: @Composable BoxScope.() -> Unit,
      ) {
          val measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints)
          Layout(
              content = { BoxScopeInstance.content() },
              measurePolicy = measurePolicy,
              modifier = modifier,
          )
      }

      private fun cacheFor(propagate: Boolean) =
          MutableScatterMap<Alignment, MeasurePolicy>(9).apply {
              this[Alignment.TopStart] = BoxMeasurePolicy(Alignment.TopStart, propagate)
              this[Alignment.TopCenter] = BoxMeasurePolicy(Alignment.TopCenter, propagate)
              this[Alignment.TopEnd] = BoxMeasurePolicy(Alignment.TopEnd, propagate)
              this[Alignment.CenterStart] = BoxMeasurePolicy(Alignment.CenterStart, propagate)
              this[Alignment.Center] = BoxMeasurePolicy(Alignment.Center, propagate)
              this[Alignment.CenterEnd] = BoxMeasurePolicy(Alignment.CenterEnd, propagate)
              this[Alignment.BottomStart] = BoxMeasurePolicy(Alignment.BottomStart, propagate)
              this[Alignment.BottomCenter] = BoxMeasurePolicy(Alignment.BottomCenter, propagate)
              this[Alignment.BottomEnd] = BoxMeasurePolicy(Alignment.BottomEnd, propagate)
          }

      private val Cache1 = cacheFor(true)
      private val Cache2 = cacheFor(false)

      @PublishedApi
      internal fun maybeCachedBoxMeasurePolicy(
          alignment: Alignment,
          propagateMinConstraints: Boolean,
      ): MeasurePolicy {
          val cache = if (propagateMinConstraints) Cache1 else Cache2
          return cache[alignment] ?: BoxMeasurePolicy(alignment, propagateMinConstraints)
      }
compose:
  id: live-androidx-foundation-foundation-layout-foundation-layout-box
  artifact: androidx.compose.foundation:foundation-layout
  fqn: androidx.compose.foundation.layout
  sections:
    - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-1
      title: androidx.compose.foundation.layout Box.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-box-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-106
      title: androidx.compose.foundation.layout Box.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-box-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-141
      title: androidx.compose.foundation.layout Box.kt source (lines 141–175)
      aliases:
        - androidx.compose.foundation.layout.Box
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-box-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-176
      title: androidx.compose.foundation.layout Box.kt source (lines 176–210)
      aliases:
        - androidx.compose.foundation.layout.Box
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-box-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-211
      title: androidx.compose.foundation.layout Box.kt source (lines 211–245)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-box-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-246
      title: androidx.compose.foundation.layout Box.kt source (lines 246–280)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-box-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-281
      title: androidx.compose.foundation.layout Box.kt source (lines 281–315)
      aliases:
        - androidx.compose.foundation.layout.Box
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-box-lines-281-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-316
      title: androidx.compose.foundation.layout Box.kt source (lines 316–350)
      aliases:
        - androidx.compose.foundation.layout.Box
        - androidx.compose.foundation.layout.BoxScope
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-box-lines-316-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-351
      title: androidx.compose.foundation.layout Box.kt source (lines 351–385)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-box-lines-351-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-36
      title: androidx.compose.foundation.layout Box.kt source (lines 36–70)
      aliases:
        - androidx.compose.foundation.layout.Box
        - androidx.compose.foundation.layout.BoxScope
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-box-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-386
      title: androidx.compose.foundation.layout Box.kt source (lines 386–412)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-box-lines-386-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-box-lines-71
      title: androidx.compose.foundation.layout Box.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.layout.BoxScope
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-box-lines-71-source
      relatedIds: []
---

# androidx.compose.foundation.layout Box.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt

## androidx.compose.foundation.layout Box.kt source (lines 1–35)

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

package androidx.compose.foundation.layout

import androidx.collection.MutableScatterMap
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.IntrinsicMeasurable
import androidx.compose.ui.layout.IntrinsicMeasureScope
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasurePolicy
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.layout.Placeable
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.ParentDataModifierNode

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-box-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt)

## androidx.compose.foundation.layout Box.kt source (lines 106–140)


@PublishedApi
@Composable
internal fun rememberBoxMeasurePolicy(
    alignment: Alignment,
    propagateMinConstraints: Boolean,
): MeasurePolicy =
    if (alignment == Alignment.TopStart && !propagateMinConstraints) {
        DefaultBoxMeasurePolicy
    } else {
        remember(alignment, propagateMinConstraints) {
            BoxMeasurePolicy(alignment, propagateMinConstraints)
        }
    }

private val DefaultBoxMeasurePolicy: MeasurePolicy = BoxMeasurePolicy(Alignment.TopStart, false)

private data class BoxMeasurePolicy(
    private val alignment: Alignment,
    private val propagateMinConstraints: Boolean,
) : MeasurePolicy {
    override fun MeasureScope.measure(
        measurables: List<Measurable>,
        constraints: Constraints,
    ): MeasureResult {
        if (measurables.isEmpty()) {
            return layout(constraints.minWidth, constraints.minHeight) {}
        }

        val contentConstraints =
            if (propagateMinConstraints) {
                constraints
            } else {
                constraints.copyMaxDimensions()
            }

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-box-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt)

## androidx.compose.foundation.layout Box.kt source (lines 141–175)


        if (measurables.size == 1) {
            val measurable = measurables[0]
            val boxWidth: Int
            val boxHeight: Int
            val placeable: Placeable
            if (!measurable.matchesParentSize) {
                placeable = measurable.measure(contentConstraints)
                boxWidth = max(constraints.minWidth, placeable.width)
                boxHeight = max(constraints.minHeight, placeable.height)
            } else {
                boxWidth = constraints.minWidth
                boxHeight = constraints.minHeight
                placeable =
                    measurable.measure(
                        Constraints.fixed(constraints.minWidth, constraints.minHeight)
                    )
            }
            return layout(boxWidth, boxHeight) {
                placeInBox(placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment)
            }
        }

        val placeables = arrayOfNulls<Placeable>(measurables.size)
        // First measure non match parent size children to get the size of the Box.
        var hasMatchParentSizeChildren = false
        var boxWidth = constraints.minWidth
        var boxHeight = constraints.minHeight
        measurables.fastForEachIndexed { index, measurable ->
            if (!measurable.matchesParentSize) {
                val placeable = measurable.measure(contentConstraints)
                placeables[index] = placeable
                boxWidth = max(boxWidth, placeable.width)
                boxHeight = max(boxHeight, placeable.height)
            } else {

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-box-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt)

## androidx.compose.foundation.layout Box.kt source (lines 176–210)

                hasMatchParentSizeChildren = true
            }
        }

        // Now measure match parent size children, if any.
        if (hasMatchParentSizeChildren) {
            // The infinity check is needed for default intrinsic measurements.
            val matchParentSizeConstraints =
                Constraints(
                    minWidth = if (boxWidth != Constraints.Infinity) boxWidth else 0,
                    minHeight = if (boxHeight != Constraints.Infinity) boxHeight else 0,
                    maxWidth = boxWidth,
                    maxHeight = boxHeight,
                )
            measurables.fastForEachIndexed { index, measurable ->
                if (measurable.matchesParentSize) {
                    placeables[index] = measurable.measure(matchParentSizeConstraints)
                }
            }
        }

        // Specify the size of the Box and position its children.
        return layout(boxWidth, boxHeight) {
            placeables.forEachIndexed { index, placeable ->
                placeable as Placeable
                val measurable = measurables[index]
                placeInBox(placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment)
            }
        }
    }

    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ): Int {

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-box-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt)

## androidx.compose.foundation.layout Box.kt source (lines 211–245)

        var maxWidth = 0
        measurables.fastForEach { measurable ->
            if (!measurable.matchesParentSize) {
                maxWidth = max(maxWidth, measurable.minIntrinsicWidth(height))
            }
        }
        return maxWidth
    }

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,
    ): Int {
        var maxHeight = 0
        measurables.fastForEach { measurable ->
            if (!measurable.matchesParentSize) {
                maxHeight = max(maxHeight, measurable.minIntrinsicHeight(width))
            }
        }
        return maxHeight
    }

    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ): Int {
        var maxWidth = 0
        measurables.fastForEach { measurable ->
            if (!measurable.matchesParentSize) {
                maxWidth = max(maxWidth, measurable.maxIntrinsicWidth(height))
            }
        }
        return maxWidth
    }


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-box-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt)

## androidx.compose.foundation.layout Box.kt source (lines 246–280)

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,
    ): Int {
        var maxHeight = 0
        measurables.fastForEach { measurable ->
            if (!measurable.matchesParentSize) {
                maxHeight = max(maxHeight, measurable.maxIntrinsicHeight(width))
            }
        }
        return maxHeight
    }
}

private fun Placeable.PlacementScope.placeInBox(
    placeable: Placeable,
    measurable: Measurable,
    layoutDirection: LayoutDirection,
    boxWidth: Int,
    boxHeight: Int,
    alignment: Alignment,
) {
    val childAlignment = measurable.boxChildDataNode?.alignment ?: alignment
    val position =
        childAlignment.align(
            IntSize(placeable.width, placeable.height),
            IntSize(boxWidth, boxHeight),
            layoutDirection,
        )
    placeable.place(position)
}

/**
 * A box with no content that can participate in layout, drawing, pointer input due to the
 * [modifier] applied to it.

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-box-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt)

## androidx.compose.foundation.layout Box.kt source (lines 281–315)

 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleBox
 * @param modifier The modifier to be applied to the layout.
 */
@Composable
public fun Box(modifier: Modifier) {
    Layout(measurePolicy = EmptyBoxMeasurePolicy, modifier = modifier)
}

internal val EmptyBoxMeasurePolicy: MeasurePolicy =
    object : MeasurePolicy {
        override fun MeasureScope.measure(
            measurables: List<Measurable>,
            constraints: Constraints,
        ): MeasureResult = layout(constraints.minWidth, constraints.minHeight) {}

        override fun IntrinsicMeasureScope.minIntrinsicWidth(
            measurables: List<IntrinsicMeasurable>,
            height: Int,
        ): Int = 0

        override fun IntrinsicMeasureScope.minIntrinsicHeight(
            measurables: List<IntrinsicMeasurable>,
            width: Int,
        ): Int = 0

        override fun IntrinsicMeasureScope.maxIntrinsicWidth(
            measurables: List<IntrinsicMeasurable>,
            height: Int,
        ): Int = 0

        override fun IntrinsicMeasureScope.maxIntrinsicHeight(
            measurables: List<IntrinsicMeasurable>,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-box-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt)

## androidx.compose.foundation.layout Box.kt source (lines 316–350)

            width: Int,
        ): Int = 0
    }

/** A BoxScope provides a scope for the children of [Box] and [BoxWithConstraints]. */
@LayoutScopeMarker
@Immutable
public interface BoxScope {
    /**
     * Pull the content element to a specific [Alignment] within the [Box]. This alignment will have
     * priority over the [Box]'s `alignment` parameter.
     */
    @Stable public fun Modifier.align(alignment: Alignment): Modifier

    /**
     * Size the element to match the size of the [Box] after all other content elements have been
     * measured.
     *
     * The element using this modifier does not take part in defining the size of the [Box].
     * Instead, it matches the size of the [Box] after all other children (not using
     * matchParentSize() modifier) have been measured to obtain the [Box]'s size. In contrast, a
     * general-purpose [Modifier.fillMaxSize] modifier, which makes an element occupy all available
     * space, will take part in defining the size of the [Box]. Consequently, using it for an
     * element inside a [Box] will make the [Box] itself always fill the available space.
     */
    @Stable public fun Modifier.matchParentSize(): Modifier
}

@PublishedApi
internal object BoxScopeInstance : BoxScope {
    @Stable
    override fun Modifier.align(alignment: Alignment) =
        this.then(
            BoxChildDataElement(
                alignment = alignment,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-box-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt)

## androidx.compose.foundation.layout Box.kt source (lines 351–385)

                matchParentSize = false,
                inspectorInfo =
                    debugInspectorInfo {
                        name = "align"
                        value = alignment
                    },
            )
        )

    @Stable
    override fun Modifier.matchParentSize() =
        this.then(
            BoxChildDataElement(
                alignment = Alignment.Center,
                matchParentSize = true,
                inspectorInfo = debugInspectorInfo { name = "matchParentSize" },
            )
        )
}

private val IntrinsicMeasurable.boxChildDataNode: BoxChildDataNode?
    get() = parentData as? BoxChildDataNode
private val IntrinsicMeasurable.matchesParentSize: Boolean
    get() = boxChildDataNode?.matchParentSize ?: false

private class BoxChildDataElement(
    val alignment: Alignment,
    val matchParentSize: Boolean,
    val inspectorInfo: InspectorInfo.() -> Unit,
) : ModifierNodeElement<BoxChildDataNode>() {
    override fun create(): BoxChildDataNode {
        return BoxChildDataNode(alignment, matchParentSize)
    }

    override fun update(node: BoxChildDataNode) {

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-box-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt)

## androidx.compose.foundation.layout Box.kt source (lines 36–70)

import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.platform.debugInspectorInfo
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.util.fastForEach
import androidx.compose.ui.util.fastForEachIndexed
import kotlin.math.max

/**
 * A layout composable with [content]. The [Box] will size itself to fit the content, subject to the
 * incoming constraints. When children are smaller than the parent, by default they will be
 * positioned inside the [Box] according to the [contentAlignment]. For individually specifying the
 * alignments of the children layouts, use the [BoxScope.align] modifier. By default, the content
 * will be measured without the [Box]'s incoming min constraints, unless [propagateMinConstraints]
 * is `true`. As an example, setting [propagateMinConstraints] to `true` can be useful when the
 * [Box] has content on which modifiers cannot be specified directly and setting a min size on the
 * content of the [Box] is needed. If [propagateMinConstraints] is set to `true`, the min size set
 * on the [Box] will also be applied to the content, whereas otherwise the min size will only apply
 * to the [Box]. When the content has more than one layout child the layout children will be stacked
 * one on top of the other (positioned as explained above) in the composition order.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleBox
 * @param modifier The modifier to be applied to the layout.
 * @param contentAlignment The default alignment inside the Box.
 * @param propagateMinConstraints Whether the incoming min constraints should be passed to content.
 * @param content The content of the [Box].
 */
@Composable
public inline fun Box(
    modifier: Modifier = Modifier,
    contentAlignment: Alignment = Alignment.TopStart,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-box-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt)

## androidx.compose.foundation.layout Box.kt source (lines 386–412)

        node.alignment = alignment
        node.matchParentSize = matchParentSize
    }

    override fun InspectorInfo.inspectableProperties() {
        inspectorInfo()
    }

    override fun hashCode(): Int {
        var result = alignment.hashCode()
        result = 31 * result + matchParentSize.hashCode()
        return result
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        val otherModifier = other as? BoxChildDataElement ?: return false
        return alignment == otherModifier.alignment &&
            matchParentSize == otherModifier.matchParentSize
    }
}

private class BoxChildDataNode(var alignment: Alignment, var matchParentSize: Boolean) :
    ParentDataModifierNode, Modifier.Node() {
    override fun Density.modifyParentData(parentData: Any?) = this@BoxChildDataNode
}


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-box-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt)

## androidx.compose.foundation.layout Box.kt source (lines 71–105)

    propagateMinConstraints: Boolean = false,
    content: @Composable BoxScope.() -> Unit,
) {
    val measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints)
    Layout(
        content = { BoxScopeInstance.content() },
        measurePolicy = measurePolicy,
        modifier = modifier,
    )
}

private fun cacheFor(propagate: Boolean) =
    MutableScatterMap<Alignment, MeasurePolicy>(9).apply {
        this[Alignment.TopStart] = BoxMeasurePolicy(Alignment.TopStart, propagate)
        this[Alignment.TopCenter] = BoxMeasurePolicy(Alignment.TopCenter, propagate)
        this[Alignment.TopEnd] = BoxMeasurePolicy(Alignment.TopEnd, propagate)
        this[Alignment.CenterStart] = BoxMeasurePolicy(Alignment.CenterStart, propagate)
        this[Alignment.Center] = BoxMeasurePolicy(Alignment.Center, propagate)
        this[Alignment.CenterEnd] = BoxMeasurePolicy(Alignment.CenterEnd, propagate)
        this[Alignment.BottomStart] = BoxMeasurePolicy(Alignment.BottomStart, propagate)
        this[Alignment.BottomCenter] = BoxMeasurePolicy(Alignment.BottomCenter, propagate)
        this[Alignment.BottomEnd] = BoxMeasurePolicy(Alignment.BottomEnd, propagate)
    }

private val Cache1 = cacheFor(true)
private val Cache2 = cacheFor(false)

@PublishedApi
internal fun maybeCachedBoxMeasurePolicy(
    alignment: Alignment,
    propagateMinConstraints: Boolean,
): MeasurePolicy {
    val cache = if (propagateMinConstraints) Cache1 else Cache2
    return cache[alignment] ?: BoxMeasurePolicy(alignment, propagateMinConstraints)
}

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-box-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Box.kt)
