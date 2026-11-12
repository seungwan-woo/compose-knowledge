---
type: reference
title: androidx.compose.ui.layout Layout.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-layout-layout-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    startLine: 1
    endLine: 35
    sha256: d776a17b1b57cb13126b5808610ced5e09f0cc70f5fbea36eded5666b3fa9428
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

      package androidx.compose.ui.layout

      import androidx.compose.runtime.Applier
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.ReusableComposeNode
      import androidx.compose.runtime.SkippableUpdater
      import androidx.compose.runtime.currentComposer
      import androidx.compose.runtime.currentCompositeKeyHash
      import androidx.compose.runtime.currentCompositeKeyHashCode
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.UiComposable
      import androidx.compose.ui.graphics.GraphicsLayerScope
      import androidx.compose.ui.materialize
      import androidx.compose.ui.materializeWithCompositionLocalInjectionInternal
      import androidx.compose.ui.node.ComposeUiNode
      import androidx.compose.ui.node.ComposeUiNode.Companion.ApplyOnDeactivatedNodeAssertion
  - id: live-androidx-ui-ui-ui-layout-layout-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    startLine: 106
    endLine: 140
    sha256: 1fba4c0bf8a38cdf8fc35ea4ef6b1e94a73c51f57c9486028f35cfe27abe4893
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [androidx.compose.foundation.layout.BoxWithConstraints].
       *
       * Example usage:
       *
       * @sample androidx.compose.ui.samples.LayoutUsage
       *
       * Example usage with custom intrinsic measurements:
       *
       * @sample androidx.compose.ui.samples.LayoutWithProvidedIntrinsicsUsage
       * @param modifier Modifiers to be applied to the layout.
       * @param measurePolicy The policy defining the measurement and positioning of the layout.
       * @see Layout
       * @see MeasurePolicy
       * @see androidx.compose.foundation.layout.BoxWithConstraints
       */
      @Suppress("NOTHING_TO_INLINE")
      @Composable
      @UiComposable
      public inline fun Layout(modifier: Modifier = Modifier, measurePolicy: MeasurePolicy) {
          val compositeKeyHash = currentCompositeKeyHashCode.hashCode()
          val materialized = currentComposer.materialize(modifier)
          val localMap = currentComposer.currentCompositionLocalMap
          ReusableComposeNode<ComposeUiNode, Applier<Any>>(
              factory = ComposeUiNode.Constructor,
              update = {
                  set(measurePolicy, SetMeasurePolicy)
                  set(localMap, SetResolvedCompositionLocals)
                  reconcile(ApplyOnDeactivatedNodeAssertion)
                  set(materialized, SetModifier)
                  set(compositeKeyHash, SetCompositeKeyHash)
              },
          )
      }

      /**
  - id: live-androidx-ui-ui-ui-layout-layout-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    startLine: 141
    endLine: 175
    sha256: aa779df3c80105d89355fdc1c83e58bd659d2a2c78a7b8665ee25d5111f424bc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [Layout] is the main core component for layout. It can be used to measure and position zero or
       * more layout children.
       *
       * This overload accepts a list of multiple composable content lambdas, which allows treating
       * measurables put into different content lambdas differently - measure policy will provide a list
       * of lists of Measurables, not just a single list. Such list has the same size as the list of
       * contents passed into [Layout] and contains the list of measurables of the corresponding content
       * lambda in the same order.
       *
       * Note that layouts emitted as part of all [contents] lambdas will be added as a direct children
       * for this [Layout]. This means that if you set a custom z index on some children, the drawing
       * order will be calculated as if they were all provided as part of one lambda.
       *
       * Example usage:
       *
       * @sample androidx.compose.ui.samples.LayoutWithMultipleContentsUsage
       * @param contents The list of children composable contents to be laid out.
       * @param modifier Modifiers to be applied to the layout.
       * @param measurePolicy The policy defining the measurement and positioning of the layout.
       * @see Layout for a simpler use case when you have only one content lambda.
       */
      @Suppress("ComposableLambdaParameterPosition", "NOTHING_TO_INLINE")
      @UiComposable
      @Composable
      public inline fun Layout(
          contents: List<@Composable @UiComposable () -> Unit>,
          modifier: Modifier = Modifier,
          measurePolicy: MultiContentMeasurePolicy,
      ) {
          Layout(
              content = combineAsVirtualLayouts(contents),
              modifier = modifier,
              measurePolicy = remember(measurePolicy) { createMeasurePolicy(measurePolicy) },
          )
      }
  - id: live-androidx-ui-ui-ui-layout-layout-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    startLine: 176
    endLine: 210
    sha256: c2cbbcabeba61a39c12a8bb46b01e6d47a75ef4a79b15ea23f830dcc4f75beb4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      @PublishedApi
      internal fun combineAsVirtualLayouts(
          contents: List<@Composable @UiComposable () -> Unit>
      ): @Composable @UiComposable () -> Unit = {
          contents.fastForEach { content ->
              val compositeKeyHash = currentCompositeKeyHashCode.hashCode()
              ReusableComposeNode<ComposeUiNode, Applier<Any>>(
                  factory = ComposeUiNode.VirtualConstructor,
                  update = { set(compositeKeyHash, SetCompositeKeyHash) },
                  content = content,
              )
          }
      }

      /**
       * This function uses a JVM-Name because the original name now has a different implementation for
       * backwards compatibility [materializerOfWithCompositionLocalInjection]. More details can be found
       * at https://issuetracker.google.com/275067189
       */
      @PublishedApi
      @JvmName("modifierMaterializerOf")
      internal fun materializerOf(
          modifier: Modifier
      ): @Composable SkippableUpdater<ComposeUiNode>.() -> Unit = {
          val compositeKeyHash = currentCompositeKeyHashCode.hashCode()
          val materialized = currentComposer.materialize(modifier)
          update {
              set(materialized, SetModifier)
              set(compositeKeyHash, SetCompositeKeyHash)
          }
      }

      /**
       * This function exists solely for solving a backwards-incompatibility with older compilations that
  - id: live-androidx-ui-ui-ui-layout-layout-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    startLine: 211
    endLine: 245
    sha256: 09aa9c4132c5da3accaefa948557c566c8e7f254c7a8e2ca7a943a83f768251c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * used an older version of the `Layout` composable. New code paths should not call this. More
       * details can be found at https://issuetracker.google.com/275067189
       */
      @JvmName("materializerOf")
      @Deprecated(
          "Needed only for backwards compatibility. Do not use.",
          level = DeprecationLevel.WARNING,
      )
      @PublishedApi
      internal fun materializerOfWithCompositionLocalInjection(
          modifier: Modifier
      ): @Composable SkippableUpdater<ComposeUiNode>.() -> Unit = {
          val compositeKeyHash = currentCompositeKeyHash.hashCode()
          val materialized = currentComposer.materializeWithCompositionLocalInjectionInternal(modifier)
          update {
              set(materialized, SetModifier)
              set(compositeKeyHash, SetCompositeKeyHash)
          }
      }

      @Suppress("ComposableLambdaParameterPosition")
      @Composable
      @UiComposable
      @Deprecated(
          "This API is unsafe for UI performance at scale - using it incorrectly will lead " +
              "to exponential performance issues. This API should be avoided whenever possible."
      )
      public fun MultiMeasureLayout(
          modifier: Modifier = Modifier,
          content: @Composable @UiComposable () -> Unit,
          measurePolicy: MeasurePolicy,
      ) {
          val compositeKeyHash = currentCompositeKeyHash.hashCode()
          val materialized = currentComposer.materialize(modifier)
          val localMap = currentComposer.currentCompositionLocalMap
  - id: live-androidx-ui-ui-ui-layout-layout-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    startLine: 246
    endLine: 280
    sha256: b0b1491b3eb8437abe52df44c78dc2ffb88ebe033ea400cbfc5267eb28365511
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          ReusableComposeNode<LayoutNode, Applier<Any>>(
              factory = LayoutNode.Constructor,
              update = {
                  set(measurePolicy, SetMeasurePolicy)
                  set(localMap, SetResolvedCompositionLocals)
                  @Suppress("DEPRECATION") init { this.canMultiMeasure = true }
                  reconcile(ApplyOnDeactivatedNodeAssertion)
                  set(materialized, SetModifier)
                  set(compositeKeyHash, SetCompositeKeyHash)
              },
              content = content,
          )
      }

      /** Used to return a fixed sized item for intrinsics measurements in [Layout] */
      private class FixedSizeIntrinsicsPlaceable(width: Int, height: Int) : Placeable() {
          init {
              measuredSize = IntSize(width, height)
          }

          override fun get(alignmentLine: AlignmentLine): Int = AlignmentLine.Unspecified

          override fun placeAt(
              position: IntOffset,
              zIndex: Float,
              layerBlock: (GraphicsLayerScope.() -> Unit)?,
          ) {}
      }

      /** Identifies an [IntrinsicMeasurable] as a min or max intrinsic measurement. */
      internal enum class IntrinsicMinMax {
          Min,
          Max,
      }
  - id: live-androidx-ui-ui-ui-layout-layout-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    startLine: 281
    endLine: 315
    sha256: abc6cb37c16a27aa3f99ca896166cc9977da356abdff12e08f19011c0e52c71b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /** Identifies an [IntrinsicMeasurable] as a width or height intrinsic measurement. */
      internal enum class IntrinsicWidthHeight {
          Width,
          Height,
      }

      // A large value to use as a replacement for Infinity with DefaultIntrinisicMeasurable.
      // A layout likely won't use this dimension as it is opposite from the one being measured in
      // the max/min Intrinsic Width/Height, but it is possible. For example, if the direct child
      // uses normal measurement/layout, we don't want to return Infinity sizes when its parent
      // asks for intrinsic size. 15 bits can fit in a Constraints, so should be safe unless
      // the parent adds to it and the other dimension is also very large (> 2^15).
      internal const val LargeDimension = (1 shl 15) - 1

      /**
       * A wrapper around a [Measurable] for intrinsic measurements in [Layout]. Consumers of [Layout]
       * don't identify intrinsic methods, but we can give a reasonable implementation by using their
       * [measure], substituting the intrinsics gathering method for the [Measurable.measure] call.
       */
      internal class DefaultIntrinsicMeasurable(
          val measurable: IntrinsicMeasurable,
          private val minMax: IntrinsicMinMax,
          private val widthHeight: IntrinsicWidthHeight,
      ) : Measurable {
          override val parentData: Any?
              get() = measurable.parentData

          override fun measure(constraints: Constraints): Placeable {
              if (widthHeight == IntrinsicWidthHeight.Width) {
                  val width =
                      if (minMax == IntrinsicMinMax.Max) {
                          measurable.maxIntrinsicWidth(constraints.maxHeight)
                      } else {
                          measurable.minIntrinsicWidth(constraints.maxHeight)
  - id: live-androidx-ui-ui-ui-layout-layout-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    startLine: 316
    endLine: 350
    sha256: da1a3ba3b36675f7b85b0fc41462933944233d03bf9d848c0a071b5aaa28c74b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      }
                  // Can't use infinity for height, so use a large number
                  val height = if (constraints.hasBoundedHeight) constraints.maxHeight else LargeDimension
                  return FixedSizeIntrinsicsPlaceable(width, height)
              }
              val height =
                  if (minMax == IntrinsicMinMax.Max) {
                      measurable.maxIntrinsicHeight(constraints.maxWidth)
                  } else {
                      measurable.minIntrinsicHeight(constraints.maxWidth)
                  }
              // Can't use infinity for width, so use a large number
              val width = if (constraints.hasBoundedWidth) constraints.maxWidth else LargeDimension
              return FixedSizeIntrinsicsPlaceable(width, height)
          }

          override fun minIntrinsicWidth(height: Int): Int {
              return measurable.minIntrinsicWidth(height)
          }

          override fun maxIntrinsicWidth(height: Int): Int {
              return measurable.maxIntrinsicWidth(height)
          }

          override fun minIntrinsicHeight(width: Int): Int {
              return measurable.minIntrinsicHeight(width)
          }

          override fun maxIntrinsicHeight(width: Int): Int {
              return measurable.maxIntrinsicHeight(width)
          }
      }

      /**
       * Receiver scope for [Layout]'s and [LayoutModifier]'s layout lambda when used in an intrinsics
  - id: live-androidx-ui-ui-ui-layout-layout-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    startLine: 351
    endLine: 385
    sha256: 22b5bc6d710a476f06ab79a6ceafa1c8f3c0847b6955186960bba6537bc0f895
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * call.
       */
      internal class IntrinsicsMeasureScope(
          intrinsicMeasureScope: IntrinsicMeasureScope,
          override val layoutDirection: LayoutDirection,
      ) : MeasureScope, IntrinsicMeasureScope by intrinsicMeasureScope {
          override fun layout(
              width: Int,
              height: Int,
              alignmentLines: Map<AlignmentLine, Int>,
              rulers: (RulerScope.() -> Unit)?,
              placementBlock: Placeable.PlacementScope.() -> Unit,
          ): MeasureResult {
              val w = width.fastCoerceAtLeast(0)
              val h = height.fastCoerceAtLeast(0)
              checkMeasuredSize(w, h)
              return object : MeasureResult {
                  override val width: Int
                      get() = w

                  override val height: Int
                      get() = h

                  override val alignmentLines: Map<AlignmentLine, Int>
                      get() = alignmentLines

                  override val rulers: (RulerScope.() -> Unit)?
                      get() = rulers

                  override fun placeChildren() {
                      // Intrinsics should never be placed
                  }
              }
          }
      }
  - id: live-androidx-ui-ui-ui-layout-layout-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    startLine: 36
    endLine: 70
    sha256: e86ef7245c28307b81f4fc3efb54a0f21b235b0c101228dac71193c8c3b62e59
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.node.ComposeUiNode.Companion.SetCompositeKeyHash
      import androidx.compose.ui.node.ComposeUiNode.Companion.SetMeasurePolicy
      import androidx.compose.ui.node.ComposeUiNode.Companion.SetModifier
      import androidx.compose.ui.node.ComposeUiNode.Companion.SetResolvedCompositionLocals
      import androidx.compose.ui.node.LayoutNode
      import androidx.compose.ui.node.checkMeasuredSize
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.IntOffset
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.util.fastCoerceAtLeast
      import androidx.compose.ui.util.fastForEach
      import kotlin.jvm.JvmName

      /**
       * [Layout] is the main core component for layout. It can be used to measure and position zero or
       * more layout children.
       *
       * The measurement, layout and intrinsic measurement behaviours of this layout will be defined by
       * the [measurePolicy] instance. See [MeasurePolicy] for more details.
       *
       * For a composable able to define its content according to the incoming constraints, see
       * [androidx.compose.foundation.layout.BoxWithConstraints].
       *
       * Example usage:
       *
       * @sample androidx.compose.ui.samples.LayoutUsage
       *
       * Example usage with custom intrinsic measurements:
       *
       * @sample androidx.compose.ui.samples.LayoutWithProvidedIntrinsicsUsage
       * @param content The children composable to be laid out.
       * @param modifier Modifiers to be applied to the layout.
       * @param measurePolicy The policy defining the measurement and positioning of the layout.
       * @see Layout
  - id: live-androidx-ui-ui-ui-layout-layout-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    startLine: 386
    endLine: 420
    sha256: 999079db9ed9715f1dc16da969d266682067033bea6bb8373313dbddddbe077d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      
      internal class ApproachIntrinsicsMeasureScope(
          intrinsicMeasureScope: ApproachIntrinsicMeasureScope,
          override val layoutDirection: LayoutDirection,
      ) : ApproachMeasureScope, ApproachIntrinsicMeasureScope by intrinsicMeasureScope {
          override fun layout(
              width: Int,
              height: Int,
              alignmentLines: Map<AlignmentLine, Int>,
              rulers: (RulerScope.() -> Unit)?,
              placementBlock: Placeable.PlacementScope.() -> Unit,
          ): MeasureResult {
              val w = width.fastCoerceAtLeast(0)
              val h = height.fastCoerceAtLeast(0)
              checkMeasuredSize(w, h)
              return object : MeasureResult {
                  override val width: Int
                      get() = w

                  override val height: Int
                      get() = h

                  override val alignmentLines: Map<AlignmentLine, Int>
                      get() = alignmentLines

                  override val rulers: (RulerScope.() -> Unit)?
                      get() = rulers

                  override fun placeChildren() {
                      // Intrinsics should never be placed
                  }
              }
          }
      }
  - id: live-androidx-ui-ui-ui-layout-layout-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt
    startLine: 71
    endLine: 105
    sha256: 7bb9abbdb387b7b8ad73cd56bd26f4baef35fbcbad73e47d78b8b6eb4781a531
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @see MeasurePolicy
       * @see androidx.compose.foundation.layout.BoxWithConstraints
       */
      @Suppress("ComposableLambdaParameterPosition")
      @UiComposable
      @Composable
      public inline fun Layout(
          content: @Composable @UiComposable () -> Unit,
          modifier: Modifier = Modifier,
          measurePolicy: MeasurePolicy,
      ) {
          val compositeKeyHash = currentCompositeKeyHashCode.hashCode()
          val localMap = currentComposer.currentCompositionLocalMap
          val materialized = currentComposer.materialize(modifier)
          ReusableComposeNode<ComposeUiNode, Applier<Any>>(
              factory = ComposeUiNode.Constructor,
              update = {
                  set(measurePolicy, SetMeasurePolicy)
                  set(localMap, SetResolvedCompositionLocals)
                  set(compositeKeyHash, SetCompositeKeyHash)
                  reconcile(ApplyOnDeactivatedNodeAssertion)
                  set(materialized, SetModifier)
              },
              content = content,
          )
      }

      /**
       * [Layout] is the main core component for layout for "leaf" nodes. It can be used to measure and
       * position zero children.
       *
       * The measurement, layout and intrinsic measurement behaviours of this layout will be defined by
       * the [measurePolicy] instance. See [MeasurePolicy] for more details.
       *
       * For a composable able to define its content according to the incoming constraints, see
compose:
  id: live-androidx-ui-ui-ui-layout-layout
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.layout
  sections:
    - id: live-androidx-ui-ui-ui-layout-layout-lines-1
      title: androidx.compose.ui.layout Layout.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layout-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layout-lines-106
      title: androidx.compose.ui.layout Layout.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.layout.Layout
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layout-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layout-lines-141
      title: androidx.compose.ui.layout Layout.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.layout.Layout
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layout-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layout-lines-176
      title: androidx.compose.ui.layout Layout.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layout-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layout-lines-211
      title: androidx.compose.ui.layout Layout.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.layout.Layout
        - androidx.compose.ui.layout.MultiMeasureLayout
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layout-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layout-lines-246
      title: androidx.compose.ui.layout Layout.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.layout.Layout
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layout-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layout-lines-281
      title: androidx.compose.ui.layout Layout.kt source (lines 281–315)
      aliases:
        - androidx.compose.ui.layout.Layout
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layout-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layout-lines-316
      title: androidx.compose.ui.layout Layout.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.layout.Layout
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layout-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layout-lines-351
      title: androidx.compose.ui.layout Layout.kt source (lines 351–385)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layout-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layout-lines-36
      title: androidx.compose.ui.layout Layout.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.layout.Layout
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layout-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layout-lines-386
      title: androidx.compose.ui.layout Layout.kt source (lines 386–420)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layout-lines-386-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layout-lines-71
      title: androidx.compose.ui.layout Layout.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.layout.Layout
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layout-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.layout Layout.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt

## androidx.compose.ui.layout Layout.kt source (lines 1–35)

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

package androidx.compose.ui.layout

import androidx.compose.runtime.Applier
import androidx.compose.runtime.Composable
import androidx.compose.runtime.ReusableComposeNode
import androidx.compose.runtime.SkippableUpdater
import androidx.compose.runtime.currentComposer
import androidx.compose.runtime.currentCompositeKeyHash
import androidx.compose.runtime.currentCompositeKeyHashCode
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.UiComposable
import androidx.compose.ui.graphics.GraphicsLayerScope
import androidx.compose.ui.materialize
import androidx.compose.ui.materializeWithCompositionLocalInjectionInternal
import androidx.compose.ui.node.ComposeUiNode
import androidx.compose.ui.node.ComposeUiNode.Companion.ApplyOnDeactivatedNodeAssertion

Sources: [live-androidx-ui-ui-ui-layout-layout-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt)

## androidx.compose.ui.layout Layout.kt source (lines 106–140)

 * [androidx.compose.foundation.layout.BoxWithConstraints].
 *
 * Example usage:
 *
 * @sample androidx.compose.ui.samples.LayoutUsage
 *
 * Example usage with custom intrinsic measurements:
 *
 * @sample androidx.compose.ui.samples.LayoutWithProvidedIntrinsicsUsage
 * @param modifier Modifiers to be applied to the layout.
 * @param measurePolicy The policy defining the measurement and positioning of the layout.
 * @see Layout
 * @see MeasurePolicy
 * @see androidx.compose.foundation.layout.BoxWithConstraints
 */
@Suppress("NOTHING_TO_INLINE")
@Composable
@UiComposable
public inline fun Layout(modifier: Modifier = Modifier, measurePolicy: MeasurePolicy) {
    val compositeKeyHash = currentCompositeKeyHashCode.hashCode()
    val materialized = currentComposer.materialize(modifier)
    val localMap = currentComposer.currentCompositionLocalMap
    ReusableComposeNode<ComposeUiNode, Applier<Any>>(
        factory = ComposeUiNode.Constructor,
        update = {
            set(measurePolicy, SetMeasurePolicy)
            set(localMap, SetResolvedCompositionLocals)
            reconcile(ApplyOnDeactivatedNodeAssertion)
            set(materialized, SetModifier)
            set(compositeKeyHash, SetCompositeKeyHash)
        },
    )
}

/**

Sources: [live-androidx-ui-ui-ui-layout-layout-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt)

## androidx.compose.ui.layout Layout.kt source (lines 141–175)

 * [Layout] is the main core component for layout. It can be used to measure and position zero or
 * more layout children.
 *
 * This overload accepts a list of multiple composable content lambdas, which allows treating
 * measurables put into different content lambdas differently - measure policy will provide a list
 * of lists of Measurables, not just a single list. Such list has the same size as the list of
 * contents passed into [Layout] and contains the list of measurables of the corresponding content
 * lambda in the same order.
 *
 * Note that layouts emitted as part of all [contents] lambdas will be added as a direct children
 * for this [Layout]. This means that if you set a custom z index on some children, the drawing
 * order will be calculated as if they were all provided as part of one lambda.
 *
 * Example usage:
 *
 * @sample androidx.compose.ui.samples.LayoutWithMultipleContentsUsage
 * @param contents The list of children composable contents to be laid out.
 * @param modifier Modifiers to be applied to the layout.
 * @param measurePolicy The policy defining the measurement and positioning of the layout.
 * @see Layout for a simpler use case when you have only one content lambda.
 */
@Suppress("ComposableLambdaParameterPosition", "NOTHING_TO_INLINE")
@UiComposable
@Composable
public inline fun Layout(
    contents: List<@Composable @UiComposable () -> Unit>,
    modifier: Modifier = Modifier,
    measurePolicy: MultiContentMeasurePolicy,
) {
    Layout(
        content = combineAsVirtualLayouts(contents),
        modifier = modifier,
        measurePolicy = remember(measurePolicy) { createMeasurePolicy(measurePolicy) },
    )
}

Sources: [live-androidx-ui-ui-ui-layout-layout-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt)

## androidx.compose.ui.layout Layout.kt source (lines 176–210)


@PublishedApi
internal fun combineAsVirtualLayouts(
    contents: List<@Composable @UiComposable () -> Unit>
): @Composable @UiComposable () -> Unit = {
    contents.fastForEach { content ->
        val compositeKeyHash = currentCompositeKeyHashCode.hashCode()
        ReusableComposeNode<ComposeUiNode, Applier<Any>>(
            factory = ComposeUiNode.VirtualConstructor,
            update = { set(compositeKeyHash, SetCompositeKeyHash) },
            content = content,
        )
    }
}

/**
 * This function uses a JVM-Name because the original name now has a different implementation for
 * backwards compatibility [materializerOfWithCompositionLocalInjection]. More details can be found
 * at https://issuetracker.google.com/275067189
 */
@PublishedApi
@JvmName("modifierMaterializerOf")
internal fun materializerOf(
    modifier: Modifier
): @Composable SkippableUpdater<ComposeUiNode>.() -> Unit = {
    val compositeKeyHash = currentCompositeKeyHashCode.hashCode()
    val materialized = currentComposer.materialize(modifier)
    update {
        set(materialized, SetModifier)
        set(compositeKeyHash, SetCompositeKeyHash)
    }
}

/**
 * This function exists solely for solving a backwards-incompatibility with older compilations that

Sources: [live-androidx-ui-ui-ui-layout-layout-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt)

## androidx.compose.ui.layout Layout.kt source (lines 211–245)

 * used an older version of the `Layout` composable. New code paths should not call this. More
 * details can be found at https://issuetracker.google.com/275067189
 */
@JvmName("materializerOf")
@Deprecated(
    "Needed only for backwards compatibility. Do not use.",
    level = DeprecationLevel.WARNING,
)
@PublishedApi
internal fun materializerOfWithCompositionLocalInjection(
    modifier: Modifier
): @Composable SkippableUpdater<ComposeUiNode>.() -> Unit = {
    val compositeKeyHash = currentCompositeKeyHash.hashCode()
    val materialized = currentComposer.materializeWithCompositionLocalInjectionInternal(modifier)
    update {
        set(materialized, SetModifier)
        set(compositeKeyHash, SetCompositeKeyHash)
    }
}

@Suppress("ComposableLambdaParameterPosition")
@Composable
@UiComposable
@Deprecated(
    "This API is unsafe for UI performance at scale - using it incorrectly will lead " +
        "to exponential performance issues. This API should be avoided whenever possible."
)
public fun MultiMeasureLayout(
    modifier: Modifier = Modifier,
    content: @Composable @UiComposable () -> Unit,
    measurePolicy: MeasurePolicy,
) {
    val compositeKeyHash = currentCompositeKeyHash.hashCode()
    val materialized = currentComposer.materialize(modifier)
    val localMap = currentComposer.currentCompositionLocalMap

Sources: [live-androidx-ui-ui-ui-layout-layout-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt)

## androidx.compose.ui.layout Layout.kt source (lines 246–280)


    ReusableComposeNode<LayoutNode, Applier<Any>>(
        factory = LayoutNode.Constructor,
        update = {
            set(measurePolicy, SetMeasurePolicy)
            set(localMap, SetResolvedCompositionLocals)
            @Suppress("DEPRECATION") init { this.canMultiMeasure = true }
            reconcile(ApplyOnDeactivatedNodeAssertion)
            set(materialized, SetModifier)
            set(compositeKeyHash, SetCompositeKeyHash)
        },
        content = content,
    )
}

/** Used to return a fixed sized item for intrinsics measurements in [Layout] */
private class FixedSizeIntrinsicsPlaceable(width: Int, height: Int) : Placeable() {
    init {
        measuredSize = IntSize(width, height)
    }

    override fun get(alignmentLine: AlignmentLine): Int = AlignmentLine.Unspecified

    override fun placeAt(
        position: IntOffset,
        zIndex: Float,
        layerBlock: (GraphicsLayerScope.() -> Unit)?,
    ) {}
}

/** Identifies an [IntrinsicMeasurable] as a min or max intrinsic measurement. */
internal enum class IntrinsicMinMax {
    Min,
    Max,
}

Sources: [live-androidx-ui-ui-ui-layout-layout-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt)

## androidx.compose.ui.layout Layout.kt source (lines 281–315)


/** Identifies an [IntrinsicMeasurable] as a width or height intrinsic measurement. */
internal enum class IntrinsicWidthHeight {
    Width,
    Height,
}

// A large value to use as a replacement for Infinity with DefaultIntrinisicMeasurable.
// A layout likely won't use this dimension as it is opposite from the one being measured in
// the max/min Intrinsic Width/Height, but it is possible. For example, if the direct child
// uses normal measurement/layout, we don't want to return Infinity sizes when its parent
// asks for intrinsic size. 15 bits can fit in a Constraints, so should be safe unless
// the parent adds to it and the other dimension is also very large (> 2^15).
internal const val LargeDimension = (1 shl 15) - 1

/**
 * A wrapper around a [Measurable] for intrinsic measurements in [Layout]. Consumers of [Layout]
 * don't identify intrinsic methods, but we can give a reasonable implementation by using their
 * [measure], substituting the intrinsics gathering method for the [Measurable.measure] call.
 */
internal class DefaultIntrinsicMeasurable(
    val measurable: IntrinsicMeasurable,
    private val minMax: IntrinsicMinMax,
    private val widthHeight: IntrinsicWidthHeight,
) : Measurable {
    override val parentData: Any?
        get() = measurable.parentData

    override fun measure(constraints: Constraints): Placeable {
        if (widthHeight == IntrinsicWidthHeight.Width) {
            val width =
                if (minMax == IntrinsicMinMax.Max) {
                    measurable.maxIntrinsicWidth(constraints.maxHeight)
                } else {
                    measurable.minIntrinsicWidth(constraints.maxHeight)

Sources: [live-androidx-ui-ui-ui-layout-layout-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt)

## androidx.compose.ui.layout Layout.kt source (lines 316–350)

                }
            // Can't use infinity for height, so use a large number
            val height = if (constraints.hasBoundedHeight) constraints.maxHeight else LargeDimension
            return FixedSizeIntrinsicsPlaceable(width, height)
        }
        val height =
            if (minMax == IntrinsicMinMax.Max) {
                measurable.maxIntrinsicHeight(constraints.maxWidth)
            } else {
                measurable.minIntrinsicHeight(constraints.maxWidth)
            }
        // Can't use infinity for width, so use a large number
        val width = if (constraints.hasBoundedWidth) constraints.maxWidth else LargeDimension
        return FixedSizeIntrinsicsPlaceable(width, height)
    }

    override fun minIntrinsicWidth(height: Int): Int {
        return measurable.minIntrinsicWidth(height)
    }

    override fun maxIntrinsicWidth(height: Int): Int {
        return measurable.maxIntrinsicWidth(height)
    }

    override fun minIntrinsicHeight(width: Int): Int {
        return measurable.minIntrinsicHeight(width)
    }

    override fun maxIntrinsicHeight(width: Int): Int {
        return measurable.maxIntrinsicHeight(width)
    }
}

/**
 * Receiver scope for [Layout]'s and [LayoutModifier]'s layout lambda when used in an intrinsics

Sources: [live-androidx-ui-ui-ui-layout-layout-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt)

## androidx.compose.ui.layout Layout.kt source (lines 351–385)

 * call.
 */
internal class IntrinsicsMeasureScope(
    intrinsicMeasureScope: IntrinsicMeasureScope,
    override val layoutDirection: LayoutDirection,
) : MeasureScope, IntrinsicMeasureScope by intrinsicMeasureScope {
    override fun layout(
        width: Int,
        height: Int,
        alignmentLines: Map<AlignmentLine, Int>,
        rulers: (RulerScope.() -> Unit)?,
        placementBlock: Placeable.PlacementScope.() -> Unit,
    ): MeasureResult {
        val w = width.fastCoerceAtLeast(0)
        val h = height.fastCoerceAtLeast(0)
        checkMeasuredSize(w, h)
        return object : MeasureResult {
            override val width: Int
                get() = w

            override val height: Int
                get() = h

            override val alignmentLines: Map<AlignmentLine, Int>
                get() = alignmentLines

            override val rulers: (RulerScope.() -> Unit)?
                get() = rulers

            override fun placeChildren() {
                // Intrinsics should never be placed
            }
        }
    }
}

Sources: [live-androidx-ui-ui-ui-layout-layout-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt)

## androidx.compose.ui.layout Layout.kt source (lines 36–70)

import androidx.compose.ui.node.ComposeUiNode.Companion.SetCompositeKeyHash
import androidx.compose.ui.node.ComposeUiNode.Companion.SetMeasurePolicy
import androidx.compose.ui.node.ComposeUiNode.Companion.SetModifier
import androidx.compose.ui.node.ComposeUiNode.Companion.SetResolvedCompositionLocals
import androidx.compose.ui.node.LayoutNode
import androidx.compose.ui.node.checkMeasuredSize
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.util.fastCoerceAtLeast
import androidx.compose.ui.util.fastForEach
import kotlin.jvm.JvmName

/**
 * [Layout] is the main core component for layout. It can be used to measure and position zero or
 * more layout children.
 *
 * The measurement, layout and intrinsic measurement behaviours of this layout will be defined by
 * the [measurePolicy] instance. See [MeasurePolicy] for more details.
 *
 * For a composable able to define its content according to the incoming constraints, see
 * [androidx.compose.foundation.layout.BoxWithConstraints].
 *
 * Example usage:
 *
 * @sample androidx.compose.ui.samples.LayoutUsage
 *
 * Example usage with custom intrinsic measurements:
 *
 * @sample androidx.compose.ui.samples.LayoutWithProvidedIntrinsicsUsage
 * @param content The children composable to be laid out.
 * @param modifier Modifiers to be applied to the layout.
 * @param measurePolicy The policy defining the measurement and positioning of the layout.
 * @see Layout

Sources: [live-androidx-ui-ui-ui-layout-layout-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt)

## androidx.compose.ui.layout Layout.kt source (lines 386–420)


internal class ApproachIntrinsicsMeasureScope(
    intrinsicMeasureScope: ApproachIntrinsicMeasureScope,
    override val layoutDirection: LayoutDirection,
) : ApproachMeasureScope, ApproachIntrinsicMeasureScope by intrinsicMeasureScope {
    override fun layout(
        width: Int,
        height: Int,
        alignmentLines: Map<AlignmentLine, Int>,
        rulers: (RulerScope.() -> Unit)?,
        placementBlock: Placeable.PlacementScope.() -> Unit,
    ): MeasureResult {
        val w = width.fastCoerceAtLeast(0)
        val h = height.fastCoerceAtLeast(0)
        checkMeasuredSize(w, h)
        return object : MeasureResult {
            override val width: Int
                get() = w

            override val height: Int
                get() = h

            override val alignmentLines: Map<AlignmentLine, Int>
                get() = alignmentLines

            override val rulers: (RulerScope.() -> Unit)?
                get() = rulers

            override fun placeChildren() {
                // Intrinsics should never be placed
            }
        }
    }
}


Sources: [live-androidx-ui-ui-ui-layout-layout-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt)

## androidx.compose.ui.layout Layout.kt source (lines 71–105)

 * @see MeasurePolicy
 * @see androidx.compose.foundation.layout.BoxWithConstraints
 */
@Suppress("ComposableLambdaParameterPosition")
@UiComposable
@Composable
public inline fun Layout(
    content: @Composable @UiComposable () -> Unit,
    modifier: Modifier = Modifier,
    measurePolicy: MeasurePolicy,
) {
    val compositeKeyHash = currentCompositeKeyHashCode.hashCode()
    val localMap = currentComposer.currentCompositionLocalMap
    val materialized = currentComposer.materialize(modifier)
    ReusableComposeNode<ComposeUiNode, Applier<Any>>(
        factory = ComposeUiNode.Constructor,
        update = {
            set(measurePolicy, SetMeasurePolicy)
            set(localMap, SetResolvedCompositionLocals)
            set(compositeKeyHash, SetCompositeKeyHash)
            reconcile(ApplyOnDeactivatedNodeAssertion)
            set(materialized, SetModifier)
        },
        content = content,
    )
}

/**
 * [Layout] is the main core component for layout for "leaf" nodes. It can be used to measure and
 * position zero children.
 *
 * The measurement, layout and intrinsic measurement behaviours of this layout will be defined by
 * the [measurePolicy] instance. See [MeasurePolicy] for more details.
 *
 * For a composable able to define its content according to the incoming constraints, see

Sources: [live-androidx-ui-ui-ui-layout-layout-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/Layout.kt)
