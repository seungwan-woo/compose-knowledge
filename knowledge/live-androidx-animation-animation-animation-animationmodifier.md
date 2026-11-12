---
type: reference
title: androidx.compose.animation AnimationModifier.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-animation-animation-animation-animationmodifier-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    startLine: 1
    endLine: 35
    sha256: b4d76844f41f7bd6fa46b990e4c3eb20a202c51a386048f7e1793d17fbdb9513
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

      package androidx.compose.animation

      import androidx.compose.animation.core.Animatable
      import androidx.compose.animation.core.AnimationEndReason
      import androidx.compose.animation.core.AnimationSpec
      import androidx.compose.animation.core.AnimationVector2D
      import androidx.compose.animation.core.FiniteAnimationSpec
      import androidx.compose.animation.core.Spring
      import androidx.compose.animation.core.VectorConverter
      import androidx.compose.animation.core.VisibilityThreshold
      import androidx.compose.animation.core.spring
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.setValue
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.draw.clipToBounds
      import androidx.compose.ui.layout.IntrinsicMeasurable
      import androidx.compose.ui.layout.IntrinsicMeasureScope
  - id: live-androidx-animation-animation-animation-animationmodifier-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    startLine: 106
    endLine: 140
    sha256: 203a20e83164fc99c8adabda71e3f17ad7b05fef4193458c479f8189c09a3303
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                  stiffness = Spring.StiffnessMediumLow,
                  visibilityThreshold = IntSize.VisibilityThreshold,
              ),
          alignment: Alignment = Alignment.TopStart,
          finishedListener: ((initialValue: IntSize, targetValue: IntSize) -> Unit)? = null,
      ): Modifier =
          this.clipToBounds() then
              SizeAnimationModifierElement(animationSpec, alignment, finishedListener)

      private class SizeAnimationModifierElement(
          val animationSpec: FiniteAnimationSpec<IntSize>,
          val alignment: Alignment,
          val finishedListener: ((initialValue: IntSize, targetValue: IntSize) -> Unit)?,
      ) : ModifierNodeElement<SizeAnimationModifierNode>() {
          override fun create(): SizeAnimationModifierNode =
              SizeAnimationModifierNode(animationSpec, alignment, finishedListener)

          override fun update(node: SizeAnimationModifierNode) {
              node.animationSpec = animationSpec
              node.listener = finishedListener
              node.alignment = alignment
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "animateContentSize"
              properties["animationSpec"] = animationSpec
              properties["alignment"] = alignment
              properties["finishedListener"] = finishedListener
          }

          override fun hashCode(): Int {
              return (animationSpec.hashCode() * 31 + alignment.hashCode()) * 31 +
                  finishedListener.hashCode()
          }
  - id: live-androidx-animation-animation-animation-animationmodifier-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    startLine: 141
    endLine: 175
    sha256: f3507d01e6c08f2798d12122084fc47ff5d7c22b416c8afa3448c44629ea3e07
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun equals(other: Any?): Boolean {
              return other is SizeAnimationModifierElement &&
                  other.animationSpec == animationSpec &&
                  other.finishedListener === finishedListener &&
                  other.alignment == alignment
          }
      }

      internal val InvalidSize
          get() = IntSize(Int.MIN_VALUE, Int.MIN_VALUE)
      internal val IntSize.isValid: Boolean
          get() = this != InvalidSize

      /**
       * This class creates a [LayoutModifier] that measures children, and responds to children's size
       * change by animating to that size. The size reported to parents will be the animated size.
       */
      private class SizeAnimationModifierNode(
          var animationSpec: AnimationSpec<IntSize>,
          var alignment: Alignment = Alignment.TopStart,
          var listener: ((startSize: IntSize, endSize: IntSize) -> Unit)? = null,
      ) : LayoutModifierNodeWithPassThroughIntrinsics() {
          private var lookaheadSize: IntSize = InvalidSize
          private var lookaheadConstraints: Constraints = Constraints()
              set(value) {
                  field = value
                  lookaheadConstraintsAvailable = true
              }

          private var lookaheadConstraintsAvailable: Boolean = false

          private fun targetConstraints(default: Constraints) =
              if (lookaheadConstraintsAvailable) {
                  lookaheadConstraints
              } else {
  - id: live-androidx-animation-animation-animation-animationmodifier-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    startLine: 176
    endLine: 210
    sha256: ff954f177d9a2d7b1e3a25957523f9c81784479fd794680d9b01789d3e75337f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  default
              }

          data class AnimData(val anim: Animatable<IntSize, AnimationVector2D>, var startSize: IntSize)

          var animData: AnimData? by mutableStateOf(null)

          override fun onReset() {
              super.onReset()
              // Reset is an indication that the node may be re-used, in such case, animData becomes stale
              animData = null
          }

          override fun onAttach() {
              super.onAttach()
              // When re-attached, we may be attached to a tree without lookahead scope.
              lookaheadSize = InvalidSize
              lookaheadConstraintsAvailable = false
          }

          override fun MeasureScope.measure(
              measurable: Measurable,
              constraints: Constraints,
          ): MeasureResult {
              val placeable =
                  if (isLookingAhead) {
                      lookaheadConstraints = constraints
                      measurable.measure(constraints)
                  } else {
                      // Measure with lookahead constraints when available, to avoid unnecessary relayout
                      // in child during the lookahead animation.
                      measurable.measure(targetConstraints(constraints))
                  }
              val measuredSize = IntSize(placeable.width, placeable.height)
              val (width, height) =
  - id: live-androidx-animation-animation-animation-animationmodifier-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    startLine: 211
    endLine: 245
    sha256: 7ecb2aab90846f077af26216e85e61a64094190678fdd4acaba7e17adfd1651d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  if (isLookingAhead) {
                      lookaheadSize = measuredSize
                      measuredSize
                  } else {
                      animateTo(if (lookaheadSize.isValid) lookaheadSize else measuredSize).let {
                          // Constrain the measure result to incoming constraints, so that parent doesn't
                          // force center this layout.
                          constraints.constrain(it)
                      }
                  }
              return layout(width, height) {
                  val offset =
                      alignment.align(
                          size = measuredSize,
                          space = IntSize(width, height),
                          layoutDirection = this@measure.layoutDirection,
                      )
                  placeable.place(offset)
              }
          }

          fun animateTo(targetSize: IntSize): IntSize {
              val data =
                  animData?.apply {
                      // TODO(b/322878517): Figure out a way to seamlessly continue the animation after
                      //  re-attach. Note that in some cases restarting the animation is the correct
                      // behavior.
                      val wasInterrupted = (targetSize != anim.value && !anim.isRunning)

                      if (targetSize != anim.targetValue || wasInterrupted) {
                          startSize = anim.value
                          coroutineScope.launch {
                              val result = anim.animateTo(targetSize, animationSpec)
                              if (result.endReason == AnimationEndReason.Finished) {
                                  listener?.invoke(startSize, result.endState.value)
  - id: live-androidx-animation-animation-animation-animationmodifier-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    startLine: 246
    endLine: 280
    sha256: 5f9871caa7cfce7693655d97ba95e70fbc189613a8b222282f573b4a8a675eed
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              }
                          }
                      }
                  }
                      ?: AnimData(
                          Animatable(targetSize, IntSize.VectorConverter, IntSize(1, 1)),
                          targetSize,
                      )

              animData = data
              return data.anim.value
          }
      }

      internal abstract class LayoutModifierNodeWithPassThroughIntrinsics :
          LayoutModifierNode, Modifier.Node() {
          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ) = measurable.minIntrinsicWidth(height)

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ) = measurable.minIntrinsicHeight(width)

          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ) = measurable.maxIntrinsicWidth(height)

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ) = measurable.maxIntrinsicHeight(width)
  - id: live-androidx-animation-animation-animation-animationmodifier-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    startLine: 281
    endLine: 282
    sha256: 412ca345ccf75bf9c0806bce695be8de808b79984251a7a54d202cf6101dd451
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      }
  - id: live-androidx-animation-animation-animation-animationmodifier-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    startLine: 36
    endLine: 70
    sha256: d6be2e7c4a475458160b869e9729c81696b1d073eacec59300a5c37a5fc73454
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.layout.LayoutModifier
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.node.LayoutModifierNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.constrain
      import kotlinx.coroutines.launch

      /**
       * This modifier animates its own size when its child modifier (or the child composable if it is
       * already at the tail of the chain) changes size. This allows the parent modifier to observe a
       * smooth size change, resulting in an overall continuous visual change.
       *
       * A [FiniteAnimationSpec] can be optionally specified for the size change animation. By default,
       * [spring] will be used.
       *
       * An optional [finishedListener] can be supplied to get notified when the size change animation is
       * finished. Since the content size change can be dynamic in many cases, both initial value and
       * target value (i.e. final size) will be passed to the [finishedListener]. __Note:__ if the
       * animation is interrupted, the initial value will be the size at the point of interruption. This
       * is intended to help determine the direction of the size change (i.e. expand or collapse in x and
       * y dimensions).
       *
       * @sample androidx.compose.animation.samples.AnimateContent
       * @param animationSpec a finite animation that will be used to animate size change, [spring] by
       *   default
       * @param finishedListener an optional listener to be called when the content change animation is
       *   completed.
       */
      public fun Modifier.animateContentSize(
          animationSpec: FiniteAnimationSpec<IntSize> =
  - id: live-androidx-animation-animation-animation-animationmodifier-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt
    startLine: 71
    endLine: 105
    sha256: 035c1e73f7560a45f874aa4aae4ba8837b4ba176c9ae3da8238ab0a770ad3c4e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              spring(
                  stiffness = Spring.StiffnessMediumLow,
                  visibilityThreshold = IntSize.VisibilityThreshold,
              ),
          finishedListener: ((initialValue: IntSize, targetValue: IntSize) -> Unit)? = null,
      ): Modifier =
          this.clipToBounds() then
              SizeAnimationModifierElement(animationSpec, Alignment.TopStart, finishedListener)

      /**
       * This modifier animates its own size when its child modifier (or the child composable if it is
       * already at the tail of the chain) changes size. This allows the parent modifier to observe a
       * smooth size change, resulting in an overall continuous visual change.
       *
       * A [FiniteAnimationSpec] can be optionally specified for the size change animation. By default,
       * [spring] will be used.
       *
       * An optional [finishedListener] can be supplied to get notified when the size change animation is
       * finished. Since the content size change can be dynamic in many cases, both initial value and
       * target value (i.e. final size) will be passed to the [finishedListener]. __Note:__ if the
       * animation is interrupted, the initial value will be the size at the point of interruption. This
       * is intended to help determine the direction of the size change (i.e. expand or collapse in x and
       * y dimensions).
       *
       * @sample androidx.compose.animation.samples.AnimateContent
       * @param animationSpec a finite animation that will be used to animate size change, [spring] by
       *   default
       * @param alignment sets the alignment of the content during the animation. [Alignment.TopStart] by
       *   default.
       * @param finishedListener an optional listener to be called when the content change animation is
       *   completed.
       */
      public fun Modifier.animateContentSize(
          animationSpec: FiniteAnimationSpec<IntSize> =
              spring(
compose:
  id: live-androidx-animation-animation-animation-animationmodifier
  artifact: androidx.compose.animation:animation
  fqn: androidx.compose.animation
  sections:
    - id: live-androidx-animation-animation-animation-animationmodifier-lines-1
      title: androidx.compose.animation AnimationModifier.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animationmodifier-lines-1-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animationmodifier-lines-106
      title: androidx.compose.animation AnimationModifier.kt source (lines 106–140)
      aliases:
        - androidx.compose.animation.animateContentSize
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animationmodifier-lines-106-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animationmodifier-lines-141
      title: androidx.compose.animation AnimationModifier.kt source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animationmodifier-lines-141-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animationmodifier-lines-176
      title: androidx.compose.animation AnimationModifier.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animationmodifier-lines-176-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animationmodifier-lines-211
      title: androidx.compose.animation AnimationModifier.kt source (lines 211–245)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animationmodifier-lines-211-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animationmodifier-lines-246
      title: androidx.compose.animation AnimationModifier.kt source (lines 246–280)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animationmodifier-lines-246-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animationmodifier-lines-281
      title: androidx.compose.animation AnimationModifier.kt source (lines 281–282)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animationmodifier-lines-281-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animationmodifier-lines-36
      title: androidx.compose.animation AnimationModifier.kt source (lines 36–70)
      aliases:
        - androidx.compose.animation.animateContentSize
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animationmodifier-lines-36-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animationmodifier-lines-71
      title: androidx.compose.animation AnimationModifier.kt source (lines 71–105)
      aliases:
        - androidx.compose.animation.animateContentSize
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animationmodifier-lines-71-source
      relatedIds: []
---

# androidx.compose.animation AnimationModifier.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt

## androidx.compose.animation AnimationModifier.kt source (lines 1–35)

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

package androidx.compose.animation

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.AnimationEndReason
import androidx.compose.animation.core.AnimationSpec
import androidx.compose.animation.core.AnimationVector2D
import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.VectorConverter
import androidx.compose.animation.core.VisibilityThreshold
import androidx.compose.animation.core.spring
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clipToBounds
import androidx.compose.ui.layout.IntrinsicMeasurable
import androidx.compose.ui.layout.IntrinsicMeasureScope

Sources: [live-androidx-animation-animation-animation-animationmodifier-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt)

## androidx.compose.animation AnimationModifier.kt source (lines 106–140)

            stiffness = Spring.StiffnessMediumLow,
            visibilityThreshold = IntSize.VisibilityThreshold,
        ),
    alignment: Alignment = Alignment.TopStart,
    finishedListener: ((initialValue: IntSize, targetValue: IntSize) -> Unit)? = null,
): Modifier =
    this.clipToBounds() then
        SizeAnimationModifierElement(animationSpec, alignment, finishedListener)

private class SizeAnimationModifierElement(
    val animationSpec: FiniteAnimationSpec<IntSize>,
    val alignment: Alignment,
    val finishedListener: ((initialValue: IntSize, targetValue: IntSize) -> Unit)?,
) : ModifierNodeElement<SizeAnimationModifierNode>() {
    override fun create(): SizeAnimationModifierNode =
        SizeAnimationModifierNode(animationSpec, alignment, finishedListener)

    override fun update(node: SizeAnimationModifierNode) {
        node.animationSpec = animationSpec
        node.listener = finishedListener
        node.alignment = alignment
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "animateContentSize"
        properties["animationSpec"] = animationSpec
        properties["alignment"] = alignment
        properties["finishedListener"] = finishedListener
    }

    override fun hashCode(): Int {
        return (animationSpec.hashCode() * 31 + alignment.hashCode()) * 31 +
            finishedListener.hashCode()
    }


Sources: [live-androidx-animation-animation-animation-animationmodifier-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt)

## androidx.compose.animation AnimationModifier.kt source (lines 141–175)

    override fun equals(other: Any?): Boolean {
        return other is SizeAnimationModifierElement &&
            other.animationSpec == animationSpec &&
            other.finishedListener === finishedListener &&
            other.alignment == alignment
    }
}

internal val InvalidSize
    get() = IntSize(Int.MIN_VALUE, Int.MIN_VALUE)
internal val IntSize.isValid: Boolean
    get() = this != InvalidSize

/**
 * This class creates a [LayoutModifier] that measures children, and responds to children's size
 * change by animating to that size. The size reported to parents will be the animated size.
 */
private class SizeAnimationModifierNode(
    var animationSpec: AnimationSpec<IntSize>,
    var alignment: Alignment = Alignment.TopStart,
    var listener: ((startSize: IntSize, endSize: IntSize) -> Unit)? = null,
) : LayoutModifierNodeWithPassThroughIntrinsics() {
    private var lookaheadSize: IntSize = InvalidSize
    private var lookaheadConstraints: Constraints = Constraints()
        set(value) {
            field = value
            lookaheadConstraintsAvailable = true
        }

    private var lookaheadConstraintsAvailable: Boolean = false

    private fun targetConstraints(default: Constraints) =
        if (lookaheadConstraintsAvailable) {
            lookaheadConstraints
        } else {

Sources: [live-androidx-animation-animation-animation-animationmodifier-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt)

## androidx.compose.animation AnimationModifier.kt source (lines 176–210)

            default
        }

    data class AnimData(val anim: Animatable<IntSize, AnimationVector2D>, var startSize: IntSize)

    var animData: AnimData? by mutableStateOf(null)

    override fun onReset() {
        super.onReset()
        // Reset is an indication that the node may be re-used, in such case, animData becomes stale
        animData = null
    }

    override fun onAttach() {
        super.onAttach()
        // When re-attached, we may be attached to a tree without lookahead scope.
        lookaheadSize = InvalidSize
        lookaheadConstraintsAvailable = false
    }

    override fun MeasureScope.measure(
        measurable: Measurable,
        constraints: Constraints,
    ): MeasureResult {
        val placeable =
            if (isLookingAhead) {
                lookaheadConstraints = constraints
                measurable.measure(constraints)
            } else {
                // Measure with lookahead constraints when available, to avoid unnecessary relayout
                // in child during the lookahead animation.
                measurable.measure(targetConstraints(constraints))
            }
        val measuredSize = IntSize(placeable.width, placeable.height)
        val (width, height) =

Sources: [live-androidx-animation-animation-animation-animationmodifier-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt)

## androidx.compose.animation AnimationModifier.kt source (lines 211–245)

            if (isLookingAhead) {
                lookaheadSize = measuredSize
                measuredSize
            } else {
                animateTo(if (lookaheadSize.isValid) lookaheadSize else measuredSize).let {
                    // Constrain the measure result to incoming constraints, so that parent doesn't
                    // force center this layout.
                    constraints.constrain(it)
                }
            }
        return layout(width, height) {
            val offset =
                alignment.align(
                    size = measuredSize,
                    space = IntSize(width, height),
                    layoutDirection = this@measure.layoutDirection,
                )
            placeable.place(offset)
        }
    }

    fun animateTo(targetSize: IntSize): IntSize {
        val data =
            animData?.apply {
                // TODO(b/322878517): Figure out a way to seamlessly continue the animation after
                //  re-attach. Note that in some cases restarting the animation is the correct
                // behavior.
                val wasInterrupted = (targetSize != anim.value && !anim.isRunning)

                if (targetSize != anim.targetValue || wasInterrupted) {
                    startSize = anim.value
                    coroutineScope.launch {
                        val result = anim.animateTo(targetSize, animationSpec)
                        if (result.endReason == AnimationEndReason.Finished) {
                            listener?.invoke(startSize, result.endState.value)

Sources: [live-androidx-animation-animation-animation-animationmodifier-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt)

## androidx.compose.animation AnimationModifier.kt source (lines 246–280)

                        }
                    }
                }
            }
                ?: AnimData(
                    Animatable(targetSize, IntSize.VectorConverter, IntSize(1, 1)),
                    targetSize,
                )

        animData = data
        return data.anim.value
    }
}

internal abstract class LayoutModifierNodeWithPassThroughIntrinsics :
    LayoutModifierNode, Modifier.Node() {
    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ) = measurable.minIntrinsicWidth(height)

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ) = measurable.minIntrinsicHeight(width)

    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ) = measurable.maxIntrinsicWidth(height)

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ) = measurable.maxIntrinsicHeight(width)

Sources: [live-androidx-animation-animation-animation-animationmodifier-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt)

## androidx.compose.animation AnimationModifier.kt source (lines 281–282)

}


Sources: [live-androidx-animation-animation-animation-animationmodifier-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt)

## androidx.compose.animation AnimationModifier.kt source (lines 36–70)

import androidx.compose.ui.layout.LayoutModifier
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.node.LayoutModifierNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.constrain
import kotlinx.coroutines.launch

/**
 * This modifier animates its own size when its child modifier (or the child composable if it is
 * already at the tail of the chain) changes size. This allows the parent modifier to observe a
 * smooth size change, resulting in an overall continuous visual change.
 *
 * A [FiniteAnimationSpec] can be optionally specified for the size change animation. By default,
 * [spring] will be used.
 *
 * An optional [finishedListener] can be supplied to get notified when the size change animation is
 * finished. Since the content size change can be dynamic in many cases, both initial value and
 * target value (i.e. final size) will be passed to the [finishedListener]. __Note:__ if the
 * animation is interrupted, the initial value will be the size at the point of interruption. This
 * is intended to help determine the direction of the size change (i.e. expand or collapse in x and
 * y dimensions).
 *
 * @sample androidx.compose.animation.samples.AnimateContent
 * @param animationSpec a finite animation that will be used to animate size change, [spring] by
 *   default
 * @param finishedListener an optional listener to be called when the content change animation is
 *   completed.
 */
public fun Modifier.animateContentSize(
    animationSpec: FiniteAnimationSpec<IntSize> =

Sources: [live-androidx-animation-animation-animation-animationmodifier-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt)

## androidx.compose.animation AnimationModifier.kt source (lines 71–105)

        spring(
            stiffness = Spring.StiffnessMediumLow,
            visibilityThreshold = IntSize.VisibilityThreshold,
        ),
    finishedListener: ((initialValue: IntSize, targetValue: IntSize) -> Unit)? = null,
): Modifier =
    this.clipToBounds() then
        SizeAnimationModifierElement(animationSpec, Alignment.TopStart, finishedListener)

/**
 * This modifier animates its own size when its child modifier (or the child composable if it is
 * already at the tail of the chain) changes size. This allows the parent modifier to observe a
 * smooth size change, resulting in an overall continuous visual change.
 *
 * A [FiniteAnimationSpec] can be optionally specified for the size change animation. By default,
 * [spring] will be used.
 *
 * An optional [finishedListener] can be supplied to get notified when the size change animation is
 * finished. Since the content size change can be dynamic in many cases, both initial value and
 * target value (i.e. final size) will be passed to the [finishedListener]. __Note:__ if the
 * animation is interrupted, the initial value will be the size at the point of interruption. This
 * is intended to help determine the direction of the size change (i.e. expand or collapse in x and
 * y dimensions).
 *
 * @sample androidx.compose.animation.samples.AnimateContent
 * @param animationSpec a finite animation that will be used to animate size change, [spring] by
 *   default
 * @param alignment sets the alignment of the content during the animation. [Alignment.TopStart] by
 *   default.
 * @param finishedListener an optional listener to be called when the content change animation is
 *   completed.
 */
public fun Modifier.animateContentSize(
    animationSpec: FiniteAnimationSpec<IntSize> =
        spring(

Sources: [live-androidx-animation-animation-animation-animationmodifier-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimationModifier.kt)
