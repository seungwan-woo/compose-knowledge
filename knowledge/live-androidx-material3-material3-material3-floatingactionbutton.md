---
type: reference
title: androidx.compose.material3 FloatingActionButton.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1
    endLine: 35
    sha256: 8ededb95e3b4ff2816f63cd755b01af8fdd09fe25c32f9400f2e2b1c8ba81ec2
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

      package androidx.compose.material3

      import androidx.compose.animation.AnimatedVisibility
      import androidx.compose.animation.core.Animatable
      import androidx.compose.animation.core.AnimationSpec
      import androidx.compose.animation.core.VectorConverter
      import androidx.compose.animation.core.animateFloat
      import androidx.compose.animation.core.updateTransition
      import androidx.compose.animation.expandHorizontally
      import androidx.compose.animation.fadeIn
      import androidx.compose.animation.fadeOut
      import androidx.compose.animation.shrinkHorizontally
      import androidx.compose.foundation.interaction.FocusInteraction
      import androidx.compose.foundation.interaction.HoverInteraction
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.InteractionSource
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.interaction.PressInteraction
      import androidx.compose.foundation.layout.Arrangement
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1012-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1012
    endLine: 1046
    sha256: 4149fc941f4742890690e19167c9173149afc50cc6ede93f69b4789cc27134fd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          public val shape: Shape
              @Composable get() = FabBaselineTokens.ContainerShape.value

          /** Default shape for a small floating action button. */
          public val smallShape: Shape
              @Composable get() = FabSmallTokens.ContainerShape.value

          /** Default shape for a medium floating action button. */
          public val mediumShape: Shape
              @Composable get() = FabMediumTokens.ContainerShape.value

          /** Default shape for a large floating action button. */
          public val largeShape: Shape
              @Composable get() = FabLargeTokens.ContainerShape.value

          /** Default shape for an extended floating action button. */
          public val extendedFabShape: Shape
              @Composable get() = ExtendedFabSmallTokens.ContainerShape.value

          /** Default shape for a small extended floating action button. */
          public val smallExtendedFabShape: Shape
              @Composable get() = ExtendedFabSmallTokens.ContainerShape.value

          /** Default shape for a medium extended floating action button. */
          public val mediumExtendedFabShape: Shape
              @Composable get() = ExtendedFabMediumTokens.ContainerShape.value

          /** Default shape for a large extended floating action button. */
          public val largeExtendedFabShape: Shape
              @Composable get() = ExtendedFabLargeTokens.ContainerShape.value

          /** Default container color for a floating action button. */
          public val containerColor: Color
              @Composable get() = FabPrimaryContainerTokens.ContainerColor.value
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1047-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1047
    endLine: 1081
    sha256: 8cb9fe207ff8b65585110a6eaa6494948cc31d70d022b5deab44e919a894fc51
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /**
           * Creates a [FloatingActionButtonElevation] that represents the elevation of a
           * [FloatingActionButton] in different states. For use cases in which a less prominent
           * [FloatingActionButton] is possible consider the [loweredElevation].
           *
           * @param defaultElevation the elevation used when the [FloatingActionButton] has no other
           *   [Interaction]s.
           * @param pressedElevation the elevation used when the [FloatingActionButton] is pressed.
           * @param focusedElevation the elevation used when the [FloatingActionButton] is focused.
           * @param hoveredElevation the elevation used when the [FloatingActionButton] is hovered.
           */
          @Composable
          public fun elevation(
              defaultElevation: Dp = FabPrimaryContainerTokens.ContainerElevation,
              pressedElevation: Dp = FabPrimaryContainerTokens.PressedContainerElevation,
              focusedElevation: Dp = FabPrimaryContainerTokens.FocusedContainerElevation,
              hoveredElevation: Dp = FabPrimaryContainerTokens.HoveredContainerElevation,
          ): FloatingActionButtonElevation =
              FloatingActionButtonElevation(
                  defaultElevation = defaultElevation,
                  pressedElevation = pressedElevation,
                  focusedElevation = focusedElevation,
                  hoveredElevation = hoveredElevation,
              )

          /**
           * Use this to create a [FloatingActionButton] with a lowered elevation for less emphasis. Use
           * [elevation] to get a normal [FloatingActionButton].
           *
           * @param defaultElevation the elevation used when the [FloatingActionButton] has no other
           *   [Interaction]s.
           * @param pressedElevation the elevation used when the [FloatingActionButton] is pressed.
           * @param focusedElevation the elevation used when the [FloatingActionButton] is focused.
           * @param hoveredElevation the elevation used when the [FloatingActionButton] is hovered.
           */
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 106
    endLine: 140
    sha256: f2bb59f27124982214f54b74901ca281c729b9537f41987ba1ff4f68d86d8b01
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * FAB typically contains an icon, for a FAB with text and an icon, see
       * [ExtendedFloatingActionButton].
       *
       * @sample androidx.compose.material3.samples.FloatingActionButtonSample
       * @param onClick called when this FAB is clicked
       * @param modifier the [Modifier] to be applied to this FAB
       * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
       * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
       *   have no color.
       * @param contentColor the preferred color for content inside this FAB. Defaults to either the
       *   matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
       *   different states. This controls the size of the shadow below the FAB. Additionally, when the
       *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
       *   an overlay. See also: [Surface].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
       *   preview the FAB in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       * @param content the content of this FAB, typically an [Icon]
       */
      @Composable
      public fun FloatingActionButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          shape: Shape = FloatingActionButtonDefaults.shape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable () -> Unit,
      ): Unit =
          FloatingActionButton(
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1082-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1082
    endLine: 1116
    sha256: 7fd0ed2d8dd430da45c6974d16a8917062ce0633aac0b35f03ecbded82db753d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @Composable
          public fun loweredElevation(
              defaultElevation: Dp = ElevationTokens.Level1,
              pressedElevation: Dp = ElevationTokens.Level1,
              focusedElevation: Dp = ElevationTokens.Level1,
              hoveredElevation: Dp = ElevationTokens.Level2,
          ): FloatingActionButtonElevation =
              FloatingActionButtonElevation(
                  defaultElevation = defaultElevation,
                  pressedElevation = pressedElevation,
                  focusedElevation = focusedElevation,
                  hoveredElevation = hoveredElevation,
              )

          /**
           * Use this to create a [FloatingActionButton] that represents the default elevation of a
           * [FloatingActionButton] used for [BottomAppBar] in different states.
           *
           * @param defaultElevation the elevation used when the [FloatingActionButton] has no other
           *   [Interaction]s.
           * @param pressedElevation the elevation used when the [FloatingActionButton] is pressed.
           * @param focusedElevation the elevation used when the [FloatingActionButton] is focused.
           * @param hoveredElevation the elevation used when the [FloatingActionButton] is hovered.
           */
          public fun bottomAppBarFabElevation(
              defaultElevation: Dp = 0.dp,
              pressedElevation: Dp = 0.dp,
              focusedElevation: Dp = 0.dp,
              hoveredElevation: Dp = 0.dp,
          ): FloatingActionButtonElevation =
              FloatingActionButtonElevation(
                  defaultElevation,
                  pressedElevation,
                  focusedElevation,
                  hoveredElevation,
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1117-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1117
    endLine: 1151
    sha256: 1d7fade1629a1684b2d37795be198196725168b22a3e6d61cd8c5167de0f0a09
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              )
      }

      /**
       * Apply this modifier to a [FloatingActionButton] to show or hide it with an animation, typically
       * based on the app's main content scrolling.
       *
       * @param visible whether the FAB should be shown or hidden with an animation
       * @param alignment the direction towards which the FAB should be scaled to and from
       * @param targetScale the initial scale value when showing the FAB and the final scale value when
       *   hiding the FAB
       * @param scaleAnimationSpec the [AnimationSpec] to use for the scale part of the animation, if null
       *   the Fast Spatial spring spec from the [MotionScheme] will be used
       * @param alphaAnimationSpec the [AnimationSpec] to use for the alpha part of the animation, if null
       *   the Fast Effects spring spec from the [MotionScheme] will be used
       * @sample androidx.compose.material3.samples.AnimatedFloatingActionButtonSample
       */
      public fun Modifier.animateFloatingActionButton(
          visible: Boolean,
          alignment: Alignment,
          targetScale: Float = FloatingActionButtonDefaults.ShowHideTargetScale,
          scaleAnimationSpec: AnimationSpec<Float>? = null,
          alphaAnimationSpec: AnimationSpec<Float>? = null,
      ): Modifier {
          return this.then(
              FabVisibleModifier(
                  visible = visible,
                  alignment = alignment,
                  targetScale = targetScale,
                  scaleAnimationSpec = scaleAnimationSpec,
                  alphaAnimationSpec = alphaAnimationSpec,
              )
          )
      }
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1152-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1152
    endLine: 1186
    sha256: 202028b55a2a02629ab5569ef500521fc4b473bc71c0737a45c009ddfd86de84
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      internal data class FabVisibleModifier(
          private val visible: Boolean,
          private val alignment: Alignment,
          private val targetScale: Float,
          private val scaleAnimationSpec: AnimationSpec<Float>? = null,
          private val alphaAnimationSpec: AnimationSpec<Float>? = null,
      ) : ModifierNodeElement<FabVisibleNode>() {

          override fun create(): FabVisibleNode =
              FabVisibleNode(
                  visible = visible,
                  alignment = alignment,
                  targetScale = targetScale,
                  scaleAnimationSpec = scaleAnimationSpec,
                  alphaAnimationSpec = alphaAnimationSpec,
              )

          override fun update(node: FabVisibleNode) {
              node.updateNode(
                  visible = visible,
                  alignment = alignment,
                  targetScale = targetScale,
                  scaleAnimationSpec = scaleAnimationSpec,
                  alphaAnimationSpec = alphaAnimationSpec,
              )
          }

          override fun InspectorInfo.inspectableProperties() {
              // Show nothing in the inspector.
          }
      }

      internal class FabVisibleNode(
          visible: Boolean,
          private var alignment: Alignment,
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1187-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1187
    endLine: 1221
    sha256: 7fed07f56f4d81da31fbc7e7828db43206d6113c60e04ebfe89896e95b7b1d82
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          private var targetScale: Float,
          private var scaleAnimationSpec: AnimationSpec<Float>? = null,
          private var alphaAnimationSpec: AnimationSpec<Float>? = null,
      ) : DelegatingNode(), LayoutModifierNode, CompositionLocalConsumerModifierNode {

          private val scaleAnimatable = Animatable(if (visible) 1f else 0f)
          private val alphaAnimatable = Animatable(if (visible) 1f else 0f)

          init {
              delegate(
                  CacheDrawModifierNode {
                      val layer = obtainGraphicsLayer()
                      // Use a larger layer size to make sure the elevation shadow doesn't get clipped
                      // and offset via layer.topLeft and DrawScope.inset to preserve the visual
                      // position of the FAB.
                      val layerInsetInt = 16.dp.toPx().toInt()
                      val layerInsetFloat = layerInsetInt.toFloat()
                      val layerSize =
                          Size(size.width + layerInsetInt * 2f, size.height + layerInsetInt * 2f)
                              .toIntSize()
                      val nodeSize = size.toIntSize()

                      layer.apply {
                          topLeft = IntOffset(-layerInsetInt, -layerInsetInt)

                          alpha = alphaAnimatable.value

                          // Scale towards the direction of the provided alignment
                          val alignOffset = alignment.align(IntSize(1, 1), nodeSize, layoutDirection)
                          pivotOffset = alignOffset.toOffset() + Offset(layerInsetFloat, layerInsetFloat)
                          scaleX = lerp(targetScale, 1f, scaleAnimatable.value)
                          scaleY = lerp(targetScale, 1f, scaleAnimatable.value)

                          record(size = layerSize) {
                              inset(layerInsetFloat, layerInsetFloat) { this@record.drawContent() }
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1222-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1222
    endLine: 1256
    sha256: 7c954f50e63f86c4e163a88389de61b07b48737398414e32c89b9c8f5126a741
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          }
                      }

                      onDrawWithContent { drawLayer(layer) }
                  }
              )
          }

          fun updateNode(
              visible: Boolean,
              alignment: Alignment,
              targetScale: Float,
              scaleAnimationSpec: AnimationSpec<Float>?,
              alphaAnimationSpec: AnimationSpec<Float>?,
          ) {
              this.alignment = alignment
              this.targetScale = targetScale
              this.scaleAnimationSpec = scaleAnimationSpec
              this.alphaAnimationSpec = alphaAnimationSpec

              coroutineScope.launch {
                  // TODO Load the motionScheme tokens from the component tokens file
                  scaleAnimatable.animateTo(
                      targetValue = if (visible) 1f else 0f,
                      animationSpec =
                          scaleAnimationSpec
                              ?: currentValueOf(LocalMaterialTheme).motionScheme.fastSpatialSpec<Float>(),
                  )
              }

              coroutineScope.launch {
                  // TODO Load the motionScheme tokens from the component tokens file
                  alphaAnimatable.animateTo(
                      targetValue = if (visible) 1f else 0f,
                      animationSpec =
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1257-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1257
    endLine: 1291
    sha256: 1e117d030cfa87cc4e7856d72fd8f1c0c95244c23c0a113784fa0c45b652ca0f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          alphaAnimationSpec
                              ?: currentValueOf(LocalMaterialTheme).motionScheme.fastEffectsSpec<Float>(),
                  )
              }
          }

          override fun MeasureScope.measure(
              measurable: Measurable,
              constraints: Constraints,
          ): MeasureResult {
              if (alphaAnimatable.value == 0f) {
                  return layout(0, 0) {}
              }
              val placeable = measurable.measure(constraints)
              return layout(placeable.width, placeable.height) { placeable.place(0, 0) }
          }
      }

      /**
       * Represents the tonal and shadow elevation for a floating action button in different states.
       *
       * See [FloatingActionButtonDefaults.elevation] for the default elevation used in a
       * [FloatingActionButton] and [ExtendedFloatingActionButton].
       */
      @Stable
      public open class FloatingActionButtonElevation
      internal constructor(
          private val defaultElevation: Dp,
          private val pressedElevation: Dp,
          private val focusedElevation: Dp,
          private val hoveredElevation: Dp,
      ) {
          @Composable
          internal fun shadowElevation(interactionSource: InteractionSource): State<Dp> {
              return animateElevation(interactionSource = interactionSource)
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1292-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1292
    endLine: 1326
    sha256: 90050bfda7b6d4222330c732bd3348287db5ac9ade9f692fffeb8b86b5ba599a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          internal fun tonalElevation(): Dp {
              return defaultElevation
          }

          @Composable
          private fun animateElevation(interactionSource: InteractionSource): State<Dp> {
              val animatable =
                  remember(interactionSource) {
                      FloatingActionButtonElevationAnimatable(
                          defaultElevation = defaultElevation,
                          pressedElevation = pressedElevation,
                          hoveredElevation = hoveredElevation,
                          focusedElevation = focusedElevation,
                      )
                  }

              LaunchedEffect(this) {
                  animatable.updateElevation(
                      defaultElevation = defaultElevation,
                      pressedElevation = pressedElevation,
                      hoveredElevation = hoveredElevation,
                      focusedElevation = focusedElevation,
                  )
              }

              LaunchedEffect(interactionSource) {
                  val interactions = mutableListOf<Interaction>()
                  interactionSource.interactions.collect { interaction ->
                      when (interaction) {
                          is HoverInteraction.Enter -> {
                              interactions.add(interaction)
                          }
                          is HoverInteraction.Exit -> {
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1327-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1327
    endLine: 1361
    sha256: 243c2c75030cd4c041497214e8f4fb253166d5ff7462680c255907239e17b37d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              interactions.remove(interaction.enter)
                          }
                          is FocusInteraction.Focus -> {
                              interactions.add(interaction)
                          }
                          is FocusInteraction.Unfocus -> {
                              interactions.remove(interaction.focus)
                          }
                          is PressInteraction.Press -> {
                              interactions.add(interaction)
                          }
                          is PressInteraction.Release -> {
                              interactions.remove(interaction.press)
                          }
                          is PressInteraction.Cancel -> {
                              interactions.remove(interaction.press)
                          }
                      }
                      val targetInteraction = interactions.lastOrNull()
                      launch { animatable.animateElevation(to = targetInteraction) }
                  }
              }

              return animatable.asState()
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is FloatingActionButtonElevation) return false

              if (defaultElevation != other.defaultElevation) return false
              if (pressedElevation != other.pressedElevation) return false
              if (focusedElevation != other.focusedElevation) return false
              return hoveredElevation == other.hoveredElevation
          }
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1362-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1362
    endLine: 1396
    sha256: 42d81887b59b43407b92b6e24790e7d3591731d31db323f4a6bcc14dd7900295
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          override fun hashCode(): Int {
              var result = defaultElevation.hashCode()
              result = 31 * result + pressedElevation.hashCode()
              result = 31 * result + focusedElevation.hashCode()
              result = 31 * result + hoveredElevation.hashCode()
              return result
          }
      }

      private class FloatingActionButtonElevationAnimatable(
          private var defaultElevation: Dp,
          private var pressedElevation: Dp,
          private var hoveredElevation: Dp,
          private var focusedElevation: Dp,
      ) {
          private val animatable = Animatable(defaultElevation, Dp.VectorConverter)

          private var lastTargetInteraction: Interaction? = null
          private var targetInteraction: Interaction? = null

          private fun Interaction?.calculateTarget(): Dp {
              return when (this) {
                  is PressInteraction.Press -> pressedElevation
                  is HoverInteraction.Enter -> hoveredElevation
                  is FocusInteraction.Focus -> focusedElevation
                  else -> defaultElevation
              }
          }

          suspend fun updateElevation(
              defaultElevation: Dp,
              pressedElevation: Dp,
              hoveredElevation: Dp,
              focusedElevation: Dp,
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1397-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1397
    endLine: 1431
    sha256: 4f040623cfac5c29dc1ef80613a6c303332b0b6fba15f46b8f2b5cd84d6f7b67
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ) {
              this.defaultElevation = defaultElevation
              this.pressedElevation = pressedElevation
              this.hoveredElevation = hoveredElevation
              this.focusedElevation = focusedElevation
              snapElevation()
          }

          private suspend fun snapElevation() {
              val target = targetInteraction.calculateTarget()
              if (animatable.targetValue != target) {
                  try {
                      animatable.snapTo(target)
                  } finally {
                      lastTargetInteraction = targetInteraction
                  }
              }
          }

          suspend fun animateElevation(to: Interaction?) {
              val target = to.calculateTarget()
              // Update the interaction even if the values are the same, for when we change to another
              // interaction later
              targetInteraction = to
              try {
                  if (animatable.targetValue != target) {
                      animatable.animateElevation(target = target, from = lastTargetInteraction, to = to)
                  }
              } finally {
                  lastTargetInteraction = to
              }
          }

          fun asState(): State<Dp> = animatable.asState()
      }
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 141
    endLine: 175
    sha256: 33d747c81642a73200f178395a4e05eecbae5706bf1d5390a51f8fec1e965a13
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              onClick,
              ExtendedFabSmallTokens.LabelText.value,
              FabBaselineTokens.ContainerWidth,
              FabBaselineTokens.ContainerHeight,
              modifier,
              shape,
              containerColor,
              contentColor,
              elevation,
              interactionSource,
              content,
          )

      @Composable
      private fun FloatingActionButton(
          onClick: () -> Unit,
          textStyle: TextStyle,
          minWidth: Dp,
          minHeight: Dp,
          modifier: Modifier = Modifier,
          shape: Shape = FloatingActionButtonDefaults.shape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable () -> Unit,
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          Surface(
              onClick = onClick,
              modifier = modifier.semantics { role = Role.Button },
              shape = shape,
              color = containerColor,
              contentColor = contentColor,
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1432-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1432
    endLine: 1466
    sha256: 0bf2c1d7709efc0e5d799104fee1cb6fc37469ea348f85d190d7978c0a127a0d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      private val SmallExtendedFabMinimumWidth
          get() = ExtendedFabSmallTokens.ContainerHeight
      private val SmallExtendedFabMinimumHeight
          get() = ExtendedFabSmallTokens.ContainerHeight
      private val SmallExtendedFabPaddingStart
          get() = ExtendedFabSmallTokens.LeadingSpace
      private val SmallExtendedFabPaddingEnd
          get() = ExtendedFabSmallTokens.TrailingSpace
      private val SmallExtendedFabIconPadding
          get() = ExtendedFabSmallTokens.IconLabelSpace
      private val SmallExtendedFabTextStyle = TypographyKeyTokens.TitleMedium

      private val MediumExtendedFabMinimumWidth
          get() = ExtendedFabMediumTokens.ContainerHeight
      private val MediumExtendedFabMinimumHeight
          get() = ExtendedFabMediumTokens.ContainerHeight
      private val MediumExtendedFabPaddingStart
          get() = ExtendedFabMediumTokens.LeadingSpace
      private val MediumExtendedFabPaddingEnd
          get() = ExtendedFabMediumTokens.TrailingSpace
      private val MediumExtendedFabIconPadding
          get() = ExtendedFabMediumTokens.IconLabelSpace
      private val MediumExtendedFabTextStyle = TypographyKeyTokens.TitleLarge

      private val LargeExtendedFabMinimumWidth
          get() = ExtendedFabLargeTokens.ContainerHeight
      private val LargeExtendedFabMinimumHeight
          get() = ExtendedFabLargeTokens.ContainerHeight
      private val LargeExtendedFabPaddingStart
          get() = ExtendedFabLargeTokens.LeadingSpace
      private val LargeExtendedFabPaddingEnd
          get() = ExtendedFabLargeTokens.TrailingSpace
      private val LargeExtendedFabIconPadding
          get() = ExtendedFabLargeTokens.IconLabelSpace
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1467-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 1467
    endLine: 1501
    sha256: 2358a1aff831f1d92f3a7e35162bf7c2b2d1e56400571fb1a500c23698543645
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      private val LargeExtendedFabTextStyle = TypographyKeyTokens.HeadlineSmall

      private val ExtendedFabStartIconPadding
          get() = 16.dp

      private val ExtendedFabEndIconPadding
          get() = 12.dp

      private val ExtendedFabTextPadding
          get() = 20.dp

      private val ExtendedFabMinimumWidth
          get() = 80.dp

      @Composable
      private fun extendedFabCollapseAnimation() =
          fadeOut(
              // TODO Load the motionScheme tokens from the component tokens file
              animationSpec = MotionSchemeKeyTokens.FastEffects.value()
          ) +
              shrinkHorizontally(
                  animationSpec = MotionSchemeKeyTokens.DefaultSpatial.value(),
                  shrinkTowards = Alignment.Start,
              )

      @Composable
      private fun extendedFabExpandAnimation() =
          fadeIn(
              // TODO Load the motionScheme tokens from the component tokens file
              animationSpec = MotionSchemeKeyTokens.DefaultEffects.value()
          ) +
              expandHorizontally(
                  animationSpec = MotionSchemeKeyTokens.FastSpatial.value(),
                  expandFrom = Alignment.Start,
              )
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 176
    endLine: 210
    sha256: 79a8129ee3d83509c76d271811266eb553bcd2239c7bf4236e2f1720eea76eec
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              tonalElevation = elevation.tonalElevation(),
              shadowElevation = elevation.shadowElevation(interactionSource = interactionSource).value,
              interactionSource = interactionSource,
          ) {
              ProvideContentColorTextStyle(contentColor = contentColor, textStyle = textStyle) {
                  Box(
                      modifier = Modifier.defaultMinSize(minWidth = minWidth, minHeight = minHeight),
                      contentAlignment = Alignment.Center,
                  ) {
                      content()
                  }
              }
          }
      }

      /**
       * [Material Design small floating action
       * button](https://m3.material.io/components/floating-action-button/overview)
       *
       * The FAB represents the most important action on a screen. It puts key actions within reach.
       *
       * ![Small FAB
       * image](https://developer.android.com/images/reference/androidx/compose/material3/small-fab.png)
       *
       * @sample androidx.compose.material3.samples.SmallFloatingActionButtonSample
       *
       * FABs can also be shown and hidden with an animation when the main content is scrolled:
       *
       * @sample androidx.compose.material3.samples.AnimatedFloatingActionButtonSample
       * @param onClick called when this FAB is clicked
       * @param modifier the [Modifier] to be applied to this FAB
       * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
       * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
       *   have no color.
       * @param contentColor the preferred color for content inside this FAB. Defaults to either the
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 211
    endLine: 245
    sha256: a977482db661bfb6307485d10f90ec00b8ec947cb47693b7c000711e9dbc9faa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
       *   different states. This controls the size of the shadow below the FAB. Additionally, when the
       *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
       *   an overlay. See also: [Surface].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
       *   preview the FAB in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       * @param content the content of this FAB, typically an [Icon]
       */
      @Composable
      public fun SmallFloatingActionButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          shape: Shape = FloatingActionButtonDefaults.smallShape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable () -> Unit,
      ) {
          FloatingActionButton(
              onClick = onClick,
              modifier =
                  modifier.sizeIn(
                      minWidth = FabSmallTokens.ContainerWidth,
                      minHeight = FabSmallTokens.ContainerHeight,
                  ),
              shape = shape,
              containerColor = containerColor,
              contentColor = contentColor,
              elevation = elevation,
              interactionSource = interactionSource,
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 246
    endLine: 280
    sha256: 6a1b443bb9ce0785241da9e7745596bd543ece8e87d7846cd387d1fab8b13084
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              content = content,
          )
      }

      /**
       * [Material Design medium floating action
       * button](https://m3.material.io/components/floating-action-button/overview)
       *
       * The FAB represents the most important action on a screen. It puts key actions within reach.
       *
       * @sample androidx.compose.material3.samples.MediumFloatingActionButtonSample
       *
       * FABs can also be shown and hidden with an animation when the main content is scrolled:
       *
       * @sample androidx.compose.material3.samples.AnimatedFloatingActionButtonSample
       * @param onClick called when this FAB is clicked
       * @param modifier the [Modifier] to be applied to this FAB
       * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
       * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
       *   have no color.
       * @param contentColor the preferred color for content inside this FAB. Defaults to either the
       *   matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
       *   different states. This controls the size of the shadow below the FAB. Additionally, when the
       *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
       *   an overlay. See also: [Surface].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
       *   preview the FAB in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       * @param content the content of this FAB, typically an [Icon]
       *
       * @material3expressive
       */
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 281
    endLine: 315
    sha256: b5734624a1ad8036670829f05d95fb0511d8a6bec667cdd93fd3ce54f55f3201
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Composable
      public fun MediumFloatingActionButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          shape: Shape = FloatingActionButtonDefaults.mediumShape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable () -> Unit,
      ) {
          FloatingActionButton(
              onClick = onClick,
              modifier =
                  modifier.sizeIn(
                      minWidth = FabMediumTokens.ContainerWidth,
                      minHeight = FabMediumTokens.ContainerHeight,
                  ),
              shape = shape,
              containerColor = containerColor,
              contentColor = contentColor,
              elevation = elevation,
              interactionSource = interactionSource,
              content = content,
          )
      }

      /**
       * [Material Design large floating action
       * button](https://m3.material.io/components/floating-action-button/overview)
       *
       * The FAB represents the most important action on a screen. It puts key actions within reach.
       *
       * ![Large FAB
       * image](https://developer.android.com/images/reference/androidx/compose/material3/large-fab.png)
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 316
    endLine: 350
    sha256: a209b982c69cd10f32af435c5e80c95a11749cd4fe3f177d4ccdeeddad060e19
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @sample androidx.compose.material3.samples.LargeFloatingActionButtonSample
       *
       * FABs can also be shown and hidden with an animation when the main content is scrolled:
       *
       * @sample androidx.compose.material3.samples.AnimatedFloatingActionButtonSample
       * @param onClick called when this FAB is clicked
       * @param modifier the [Modifier] to be applied to this FAB
       * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
       * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
       *   have no color.
       * @param contentColor the preferred color for content inside this FAB. Defaults to either the
       *   matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
       *   different states. This controls the size of the shadow below the FAB. Additionally, when the
       *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
       *   an overlay. See also: [Surface].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
       *   preview the FAB in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       * @param content the content of this FAB, typically an [Icon]
       */
      @Composable
      public fun LargeFloatingActionButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          shape: Shape = FloatingActionButtonDefaults.largeShape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable () -> Unit,
      ) {
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 351
    endLine: 385
    sha256: 493ead3f9010a177535da42c75c2130d70b9babd2d760a315352520ad03a2bf8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          FloatingActionButton(
              onClick = onClick,
              modifier =
                  modifier.sizeIn(
                      minWidth = FabLargeTokens.ContainerWidth,
                      minHeight = FabLargeTokens.ContainerHeight,
                  ),
              shape = shape,
              containerColor = containerColor,
              contentColor = contentColor,
              elevation = elevation,
              interactionSource = interactionSource,
              content = content,
          )
      }

      // TODO link to image
      /**
       * [Material Design small extended floating action
       * button](https://m3.material.io/components/extended-fab/overview)
       *
       * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
       * label and larger target area.
       *
       * The other small extended floating action button overload supports a text label and icon.
       *
       * @sample androidx.compose.material3.samples.SmallExtendedFloatingActionButtonTextSample
       * @param onClick called when this FAB is clicked
       * @param modifier the [Modifier] to be applied to this FAB
       * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
       * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
       *   have no color.
       * @param contentColor the preferred color for content inside this FAB. Defaults to either the
       *   matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 36
    endLine: 70
    sha256: a177972cbf9deda6013f9f3c52ce19136903d5e434274a22eac4c385a0950189
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.foundation.layout.Box
      import androidx.compose.foundation.layout.Row
      import androidx.compose.foundation.layout.RowScope
      import androidx.compose.foundation.layout.Spacer
      import androidx.compose.foundation.layout.defaultMinSize
      import androidx.compose.foundation.layout.padding
      import androidx.compose.foundation.layout.sizeIn
      import androidx.compose.foundation.layout.width
      import androidx.compose.material3.MaterialTheme.LocalMaterialTheme
      import androidx.compose.material3.internal.ProvideContentColorTextStyle
      import androidx.compose.material3.internal.animateElevation
      import androidx.compose.material3.tokens.ElevationTokens
      import androidx.compose.material3.tokens.ExtendedFabLargeTokens
      import androidx.compose.material3.tokens.ExtendedFabMediumTokens
      import androidx.compose.material3.tokens.ExtendedFabSmallTokens
      import androidx.compose.material3.tokens.FabBaselineTokens
      import androidx.compose.material3.tokens.FabLargeTokens
      import androidx.compose.material3.tokens.FabMediumTokens
      import androidx.compose.material3.tokens.FabPrimaryContainerTokens
      import androidx.compose.material3.tokens.FabSmallTokens
      import androidx.compose.material3.tokens.MotionSchemeKeyTokens
      import androidx.compose.material3.tokens.TypographyKeyTokens
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.LaunchedEffect
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.State
      import androidx.compose.runtime.derivedStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.draw.CacheDrawModifierNode
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.Shape
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 386
    endLine: 420
    sha256: c220aed0ac6697b2a409b0610445efdef29b510beaf70541d00350ecfadb6a7a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
       *   different states. This controls the size of the shadow below the FAB. Additionally, when the
       *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
       *   an overlay. See also: [Surface].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
       *   preview the FAB in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       * @param content the content of this FAB, typically a [Text] label
       *
       * @material3expressive
       */
      @Composable
      public fun SmallExtendedFloatingActionButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          shape: Shape = FloatingActionButtonDefaults.smallExtendedFabShape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ) {
          FloatingActionButton(
              onClick = onClick,
              textStyle = SmallExtendedFabTextStyle.value,
              minWidth = SmallExtendedFabMinimumWidth,
              minHeight = SmallExtendedFabMinimumHeight,
              modifier = modifier,
              shape = shape,
              containerColor = containerColor,
              contentColor = contentColor,
              elevation = elevation,
              interactionSource = interactionSource,
          ) {
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 421
    endLine: 455
    sha256: c7ea294b56b84aba85a3747641b94ab145263b00ea67044bb44791f7adf8d0ca
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              Row(
                  modifier =
                      Modifier.padding(
                          start = SmallExtendedFabPaddingStart,
                          end = SmallExtendedFabPaddingEnd,
                      ),
                  horizontalArrangement = Arrangement.Center,
                  verticalAlignment = Alignment.CenterVertically,
                  content = content,
              )
          }
      }

      // TODO link to image
      /**
       * [Material Design medium extended floating action
       * button](https://m3.material.io/components/extended-fab/overview)
       *
       * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
       * label and larger target area.
       *
       * The other medium extended floating action button overload supports a text label and icon.
       *
       * @sample androidx.compose.material3.samples.MediumExtendedFloatingActionButtonTextSample
       * @param onClick called when this FAB is clicked
       * @param modifier the [Modifier] to be applied to this FAB
       * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
       * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
       *   have no color.
       * @param contentColor the preferred color for content inside this FAB. Defaults to either the
       *   matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
       *   different states. This controls the size of the shadow below the FAB. Additionally, when the
       *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 456
    endLine: 490
    sha256: 8efb524590b60bc7e951b21c343d74f835e59c5008d4b6e0d9f4baaaa2c5d92a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   an overlay. See also: [Surface].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
       *   preview the FAB in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       * @param content the content of this FAB, typically a [Text] label
       *
       * @material3expressive
       */
      @Composable
      public fun MediumExtendedFloatingActionButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          shape: Shape = FloatingActionButtonDefaults.mediumExtendedFabShape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ) {
          FloatingActionButton(
              onClick = onClick,
              textStyle = MediumExtendedFabTextStyle.value,
              minWidth = MediumExtendedFabMinimumWidth,
              minHeight = MediumExtendedFabMinimumHeight,
              modifier = modifier,
              shape = shape,
              containerColor = containerColor,
              contentColor = contentColor,
              elevation = elevation,
              interactionSource = interactionSource,
          ) {
              Row(
                  modifier =
                      Modifier.padding(
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 491
    endLine: 525
    sha256: 06d4ccef38651f4bdba258c636669096fc139b9dd52cc24928866d364f0602a7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          start = MediumExtendedFabPaddingStart,
                          end = MediumExtendedFabPaddingEnd,
                      ),
                  horizontalArrangement = Arrangement.Center,
                  verticalAlignment = Alignment.CenterVertically,
                  content = content,
              )
          }
      }

      // TODO link to image
      /**
       * [Material Design large extended floating action
       * button](https://m3.material.io/components/extended-fab/overview)
       *
       * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
       * label and larger target area.
       *
       * The other large extended floating action button overload supports a text label and icon.
       *
       * @sample androidx.compose.material3.samples.LargeExtendedFloatingActionButtonTextSample
       * @param onClick called when this FAB is clicked
       * @param modifier the [Modifier] to be applied to this FAB
       * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
       * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
       *   have no color.
       * @param contentColor the preferred color for content inside this FAB. Defaults to either the
       *   matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
       *   different states. This controls the size of the shadow below the FAB. Additionally, when the
       *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
       *   an overlay. See also: [Surface].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 526
    endLine: 560
    sha256: 46e4ea5ba4441631a0c99b5b2f225fcc6feb1d30e94817353e0d52c5ea085b89
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   preview the FAB in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       * @param content the content of this FAB, typically a [Text] label
       *
       * @material3expressive
       */
      @Composable
      public fun LargeExtendedFloatingActionButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          shape: Shape = FloatingActionButtonDefaults.largeExtendedFabShape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ) {
          FloatingActionButton(
              onClick = onClick,
              textStyle = LargeExtendedFabTextStyle.value,
              minWidth = LargeExtendedFabMinimumWidth,
              minHeight = LargeExtendedFabMinimumHeight,
              modifier = modifier,
              shape = shape,
              containerColor = containerColor,
              contentColor = contentColor,
              elevation = elevation,
              interactionSource = interactionSource,
          ) {
              Row(
                  modifier =
                      Modifier.padding(
                          start = LargeExtendedFabPaddingStart,
                          end = LargeExtendedFabPaddingEnd,
                      ),
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 561
    endLine: 595
    sha256: 1005680c0c7fcbfb0c8997442f91816dfa855ec36e4966e8de2e1de919534e98
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  horizontalArrangement = Arrangement.Center,
                  verticalAlignment = Alignment.CenterVertically,
                  content = content,
              )
          }
      }

      /**
       * [Material Design extended floating action
       * button](https://m3.material.io/components/extended-fab/overview)
       *
       * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
       * label and larger target area.
       *
       * ![Extended FAB
       * image](https://developer.android.com/images/reference/androidx/compose/material3/extended-fab.png)
       *
       * The other extended floating action button overload supports a text label and icon.
       *
       * @sample androidx.compose.material3.samples.ExtendedFloatingActionButtonTextSample
       * @param onClick called when this FAB is clicked
       * @param modifier the [Modifier] to be applied to this FAB
       * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
       * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
       *   have no color.
       * @param contentColor the preferred color for content inside this FAB. Defaults to either the
       *   matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
       *   different states. This controls the size of the shadow below the FAB. Additionally, when the
       *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
       *   an overlay. See also: [Surface].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
       *   preview the FAB in different states. Note that if `null` is provided, interactions will still
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 596
    endLine: 630
    sha256: 9b9c2f1a62c0235cfc32ea12d793f705cb7c5846e9b66bb5c5938b57367dc935
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   happen internally.
       * @param content the content of this FAB, typically a [Text] label
       */
      @Composable
      public fun ExtendedFloatingActionButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          shape: Shape = FloatingActionButtonDefaults.extendedFabShape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
          content: @Composable RowScope.() -> Unit,
      ) {
          FloatingActionButton(
              onClick = onClick,
              modifier = modifier,
              shape = shape,
              containerColor = containerColor,
              contentColor = contentColor,
              elevation = elevation,
              interactionSource = interactionSource,
          ) {
              Row(
                  modifier =
                      Modifier.sizeIn(minWidth = ExtendedFabMinimumWidth)
                          .padding(horizontal = ExtendedFabTextPadding),
                  horizontalArrangement = Arrangement.Center,
                  verticalAlignment = Alignment.CenterVertically,
                  content = content,
              )
          }
      }

      /**
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 631
    endLine: 664
    sha256: 9871700b782ca3d86ce39d005d8c831a1d3301b6a942bec6f4e6ca67c14117e5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [Material Design small extended floating action
       * button](https://m3.material.io/components/extended-fab/overview)
       *
       * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
       * label and larger target area.
       *
       * The other small extended floating action button overload is for FABs without an icon.
       *
       * Default content description for accessibility is extended from the extended fabs icon. For custom
       * behavior, you can provide your own via [Modifier.semantics].
       *
       * @sample androidx.compose.material3.samples.SmallExtendedFloatingActionButtonSample
       * @sample androidx.compose.material3.samples.SmallAnimatedExtendedFloatingActionButtonSample
       * @param text label displayed inside this FAB
       * @param icon icon for this FAB, typically an [Icon]
       * @param onClick called when this FAB is clicked
       * @param modifier the [Modifier] to be applied to this FAB
       * @param expanded controls the expansion state of this FAB. In an expanded state, the FAB will show
       *   both the [icon] and [text]. In a collapsed state, the FAB will show only the [icon].
       * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
       * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
       *   have no color.
       * @param contentColor the preferred color for content inside this FAB. Defaults to either the
       *   matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
       *   different states. This controls the size of the shadow below the FAB. Additionally, when the
       *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
       *   an overlay. See also: [Surface].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
       *   preview the FAB in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       *
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-665-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 665
    endLine: 699
    sha256: cd5196daf5d9c4685fcd8e23d4fa6956b8947242000d73bf0cf95a76e2085e97
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @material3expressive
       */
      @Composable
      public fun SmallExtendedFloatingActionButton(
          text: @Composable () -> Unit,
          icon: @Composable () -> Unit,
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          expanded: Boolean = true,
          shape: Shape = FloatingActionButtonDefaults.smallExtendedFabShape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
      ): Unit =
          ExtendedFloatingActionButton(
              text = text,
              icon = icon,
              onClick = onClick,
              textStyle = SmallExtendedFabTextStyle.value,
              minWidth = SmallExtendedFabMinimumWidth,
              minHeight = SmallExtendedFabMinimumHeight,
              startPadding = SmallExtendedFabPaddingStart,
              endPadding = SmallExtendedFabPaddingEnd,
              iconPadding = SmallExtendedFabIconPadding,
              modifier = modifier,
              expanded = expanded,
              shape = shape,
              containerColor = containerColor,
              contentColor = contentColor,
              elevation = elevation,
              interactionSource = interactionSource,
          )

      /**
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-700-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 700
    endLine: 733
    sha256: c9b72a95d6d1b949843c52f4fddcf1bf361199f15d82f298109e2b0e173a731c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [Material Design medium extended floating action
       * button](https://m3.material.io/components/extended-fab/overview)
       *
       * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
       * label and larger target area.
       *
       * The other medium extended floating action button overload is for FABs without an icon.
       *
       * Default content description for accessibility is extended from the extended fabs icon. For custom
       * behavior, you can provide your own via [Modifier.semantics].
       *
       * @sample androidx.compose.material3.samples.MediumExtendedFloatingActionButtonSample
       * @sample androidx.compose.material3.samples.MediumAnimatedExtendedFloatingActionButtonSample
       * @param text label displayed inside this FAB
       * @param icon icon for this FAB, typically an [Icon]
       * @param onClick called when this FAB is clicked
       * @param modifier the [Modifier] to be applied to this FAB
       * @param expanded controls the expansion state of this FAB. In an expanded state, the FAB will show
       *   both the [icon] and [text]. In a collapsed state, the FAB will show only the [icon].
       * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
       * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
       *   have no color.
       * @param contentColor the preferred color for content inside this FAB. Defaults to either the
       *   matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
       *   different states. This controls the size of the shadow below the FAB. Additionally, when the
       *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
       *   an overlay. See also: [Surface].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
       *   preview the FAB in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       *
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 71
    endLine: 105
    sha256: ef0f782443b36b7f1789fff69a8cedc9ef2410626dbe5179b8c26997ff201be8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.graphics.drawscope.inset
      import androidx.compose.ui.graphics.graphicsLayer
      import androidx.compose.ui.graphics.layer.drawLayer
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.layout.layout
      import androidx.compose.ui.node.CompositionLocalConsumerModifierNode
      import androidx.compose.ui.node.DelegatingNode
      import androidx.compose.ui.node.LayoutModifierNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.currentValueOf
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.semantics.Role
      import androidx.compose.ui.semantics.clearAndSetSemantics
      import androidx.compose.ui.semantics.role
      import androidx.compose.ui.semantics.semantics
      import androidx.compose.ui.text.TextStyle
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.IntOffset
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.unit.toIntSize
      import androidx.compose.ui.unit.toOffset
      import androidx.compose.ui.util.lerp
      import kotlinx.coroutines.launch

      /**
       * [Material Design floating action
       * button](https://m3.material.io/components/floating-action-button/overview)
       *
       * The FAB represents the most important action on a screen. It puts key actions within reach.
       *
       * ![FAB image](https://developer.android.com/images/reference/androidx/compose/material3/fab.png)
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-734-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 734
    endLine: 768
    sha256: 05e58a7850b866159c13f7b4206ff5eb0fcbfe5b6672d6bd9455cf45f8e55d0e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @material3expressive
       */
      @Composable
      public fun MediumExtendedFloatingActionButton(
          text: @Composable () -> Unit,
          icon: @Composable () -> Unit,
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          expanded: Boolean = true,
          shape: Shape = FloatingActionButtonDefaults.mediumExtendedFabShape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
      ): Unit =
          ExtendedFloatingActionButton(
              text = text,
              icon = icon,
              onClick = onClick,
              textStyle = MediumExtendedFabTextStyle.value,
              minWidth = MediumExtendedFabMinimumWidth,
              minHeight = MediumExtendedFabMinimumHeight,
              startPadding = MediumExtendedFabPaddingStart,
              endPadding = MediumExtendedFabPaddingEnd,
              iconPadding = MediumExtendedFabIconPadding,
              modifier = modifier,
              expanded = expanded,
              shape = shape,
              containerColor = containerColor,
              contentColor = contentColor,
              elevation = elevation,
              interactionSource = interactionSource,
          )

      /**
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-769-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 769
    endLine: 802
    sha256: f2bbcbe625191848ea5cd4ff63cc28f8dcedd7bdd5e531ca88f54ee8232b7619
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [Material Design large extended floating action
       * button](https://m3.material.io/components/extended-fab/overview)
       *
       * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
       * label and larger target area.
       *
       * The other large extended floating action button overload is for FABs without an icon.
       *
       * Default content description for accessibility is extended from the extended fabs icon. For custom
       * behavior, you can provide your own via [Modifier.semantics].
       *
       * @sample androidx.compose.material3.samples.LargeExtendedFloatingActionButtonSample
       * @sample androidx.compose.material3.samples.LargeAnimatedExtendedFloatingActionButtonSample
       * @param text label displayed inside this FAB
       * @param icon icon for this FAB, typically an [Icon]
       * @param onClick called when this FAB is clicked
       * @param modifier the [Modifier] to be applied to this FAB
       * @param expanded controls the expansion state of this FAB. In an expanded state, the FAB will show
       *   both the [icon] and [text]. In a collapsed state, the FAB will show only the [icon].
       * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
       * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
       *   have no color.
       * @param contentColor the preferred color for content inside this FAB. Defaults to either the
       *   matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
       *   different states. This controls the size of the shadow below the FAB. Additionally, when the
       *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
       *   an overlay. See also: [Surface].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
       *   preview the FAB in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       *
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-803-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 803
    endLine: 837
    sha256: be4bb7615b035aa80f4cfdef8c3f288e1463e9174aa8c3e992253dbe66f8994e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @material3expressive
       */
      @Composable
      public fun LargeExtendedFloatingActionButton(
          text: @Composable () -> Unit,
          icon: @Composable () -> Unit,
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          expanded: Boolean = true,
          shape: Shape = FloatingActionButtonDefaults.largeExtendedFabShape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
      ): Unit =
          ExtendedFloatingActionButton(
              text = text,
              icon = icon,
              onClick = onClick,
              textStyle = LargeExtendedFabTextStyle.value,
              minWidth = LargeExtendedFabMinimumWidth,
              minHeight = LargeExtendedFabMinimumHeight,
              startPadding = LargeExtendedFabPaddingStart,
              endPadding = LargeExtendedFabPaddingEnd,
              iconPadding = LargeExtendedFabIconPadding,
              modifier = modifier,
              expanded = expanded,
              shape = shape,
              containerColor = containerColor,
              contentColor = contentColor,
              elevation = elevation,
              interactionSource = interactionSource,
          )

      /**
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-838-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 838
    endLine: 871
    sha256: 609cf33a77bbc3566bcdbf00ce826e9b6174e397349ab6a8282078499bb3fab4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [Material Design extended floating action
       * button](https://m3.material.io/components/extended-fab/overview)
       *
       * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
       * label and larger target area.
       *
       * ![Extended FAB
       * image](https://developer.android.com/images/reference/androidx/compose/material3/extended-fab.png)
       *
       * The other extended floating action button overload is for FABs without an icon.
       *
       * Default content description for accessibility is extended from the extended fabs icon. For custom
       * behavior, you can provide your own via [Modifier.semantics].
       *
       * @sample androidx.compose.material3.samples.ExtendedFloatingActionButtonSample
       * @sample androidx.compose.material3.samples.AnimatedExtendedFloatingActionButtonSample
       * @param text label displayed inside this FAB
       * @param icon icon for this FAB, typically an [Icon]
       * @param onClick called when this FAB is clicked
       * @param modifier the [Modifier] to be applied to this FAB
       * @param expanded controls the expansion state of this FAB. In an expanded state, the FAB will show
       *   both the [icon] and [text]. In a collapsed state, the FAB will show only the [icon].
       * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
       * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
       *   have no color.
       * @param contentColor the preferred color for content inside this FAB. Defaults to either the
       *   matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
       *   different states. This controls the size of the shadow below the FAB. Additionally, when the
       *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
       *   an overlay. See also: [Surface].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-872-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 872
    endLine: 906
    sha256: 07dbde000b2eaea1b2dd393be2d0b529e1c45f1f9c94e1d7a4fcbac7a2a1380f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   preview the FAB in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       */
      @Composable
      public fun ExtendedFloatingActionButton(
          text: @Composable () -> Unit,
          icon: @Composable () -> Unit,
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          expanded: Boolean = true,
          shape: Shape = FloatingActionButtonDefaults.extendedFabShape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
      ) {
          FloatingActionButton(
              onClick = onClick,
              modifier = modifier,
              shape = shape,
              containerColor = containerColor,
              contentColor = contentColor,
              elevation = elevation,
              interactionSource = interactionSource,
          ) {
              val startPadding = if (expanded) ExtendedFabStartIconPadding else 0.dp
              val endPadding = if (expanded) ExtendedFabTextPadding else 0.dp

              Row(
                  modifier =
                      Modifier.sizeIn(
                              minWidth =
                                  if (expanded) {
                                      ExtendedFabMinimumWidth
                                  } else {
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-907-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 907
    endLine: 941
    sha256: 7e47d3968e1db835dc953efbf0feb3c1e4978baa36d89abf3f45a05acdb8a410
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                      FabBaselineTokens.ContainerWidth
                                  }
                          )
                          .padding(start = startPadding, end = endPadding),
                  verticalAlignment = Alignment.CenterVertically,
                  horizontalArrangement = if (expanded) Arrangement.Start else Arrangement.Center,
              ) {
                  icon()
                  AnimatedVisibility(
                      visible = expanded,
                      enter = extendedFabExpandAnimation(),
                      exit = extendedFabCollapseAnimation(),
                  ) {
                      Row(Modifier.clearAndSetSemantics {}) {
                          Spacer(Modifier.width(ExtendedFabEndIconPadding))
                          text()
                      }
                  }
              }
          }
      }

      @Composable
      private fun ExtendedFloatingActionButton(
          text: @Composable () -> Unit,
          icon: @Composable () -> Unit,
          onClick: () -> Unit,
          textStyle: TextStyle,
          minWidth: Dp,
          minHeight: Dp,
          startPadding: Dp,
          endPadding: Dp,
          iconPadding: Dp,
          modifier: Modifier = Modifier,
          expanded: Boolean = true,
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-942-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 942
    endLine: 976
    sha256: 52be178d9f07860014789e769ad95db6cfd60d6799d8ef4a8aa85acde52f898f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          shape: Shape = FloatingActionButtonDefaults.extendedFabShape,
          containerColor: Color = FloatingActionButtonDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
          interactionSource: MutableInteractionSource? = null,
      ) {
          FloatingActionButton(
              onClick = onClick,
              textStyle = textStyle,
              minWidth = Dp.Unspecified,
              minHeight = Dp.Unspecified,
              modifier = modifier,
              shape = shape,
              containerColor = containerColor,
              contentColor = contentColor,
              elevation = elevation,
              interactionSource = interactionSource,
          ) {
              val expandTransition = updateTransition(if (expanded) 1f else 0f, label = "expanded state")
              // TODO Load the motionScheme tokens from the component tokens file
              val sizeAnimationSpec = MotionSchemeKeyTokens.FastSpatial.value<Float>()
              val opacityAnimationSpec = MotionSchemeKeyTokens.FastEffects.value<Float>()
              val expandedWidthProgress =
                  expandTransition.animateFloat(transitionSpec = { sizeAnimationSpec }) { it }
              val expandedAlphaProgress =
                  expandTransition.animateFloat(transitionSpec = { opacityAnimationSpec }) { it }
              Row(
                  modifier =
                      Modifier.layout { measurable, constraints ->
                              val expandedWidth = measurable.maxIntrinsicWidth(constraints.maxHeight)
                              val width =
                                  lerp(minWidth.roundToPx(), expandedWidth, expandedWidthProgress.value)
                              val placeable = measurable.measure(constraints)
                              layout(width, placeable.height) { placeable.place(0, 0) }
                          }
  - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-977-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt
    startLine: 977
    endLine: 1011
    sha256: f88ad1ee6c1ce10688bd0c0b979ad03285151700fd83767b462f50731418003b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          .sizeIn(minWidth = minWidth, minHeight = minHeight)
                          .padding(start = startPadding, end = endPadding),
                  verticalAlignment = Alignment.CenterVertically,
              ) {
                  icon()
                  val fullyCollapsed =
                      remember(expandTransition) {
                          derivedStateOf {
                              expandTransition.currentState == 0f && !expandTransition.isRunning
                          }
                      }
                  if (!fullyCollapsed.value) {
                      Row(
                          Modifier.clearAndSetSemantics {}
                              .graphicsLayer { alpha = expandedAlphaProgress.value }
                      ) {
                          Spacer(Modifier.width(iconPadding))
                          text()
                      }
                  }
              }
          }
      }

      /** Contains the default values used by [FloatingActionButton] */
      public object FloatingActionButtonDefaults {
          internal val ShowHideTargetScale = 0.2f

          /** The recommended size of the icon inside a [MediumFloatingActionButton]. */
          public val MediumIconSize: Dp = FabMediumTokens.IconSize

          /** The recommended size of the icon inside a [LargeFloatingActionButton]. */
          public val LargeIconSize: Dp = FabLargeTokens.IconSize

          /** Default shape for a floating action button. */
compose:
  id: live-androidx-material3-material3-material3-floatingactionbutton
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1012
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1012–1046)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1012-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1047
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1047–1081)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1047-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-106
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 106–140)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.ExtendedFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1082
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1082–1116)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1082-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1117
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1117–1151)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.animateFloatingActionButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1117-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1152
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1152–1186)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1152-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1187
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1187–1221)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1187-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1222
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1222–1256)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1222-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1257
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1257–1291)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.ExtendedFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1257-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1292
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1292–1326)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1292-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1327
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1327–1361)
      aliases:
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1327-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1362
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1362–1396)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1362-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1397
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1397–1431)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1397-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-141
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 141–175)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1432
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1432–1466)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1432-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-1467
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 1467–1501)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-1467-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-176
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-176-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-211
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 211–245)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.SmallFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-211-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-246
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 246–280)
      aliases:
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-246-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-281
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 281–315)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.MediumFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-281-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-316
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 316–350)
      aliases:
        - androidx.compose.material3.LargeFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-316-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-351
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 351–385)
      aliases:
        - androidx.compose.material3.FloatingActionButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-351-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-36
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-386
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 386–420)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.SmallExtendedFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-386-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-421
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 421–455)
      aliases:
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-421-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-456
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 456–490)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.MediumExtendedFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-456-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-491
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 491–525)
      aliases:
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-491-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-526
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 526–560)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.LargeExtendedFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-526-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-561
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 561–595)
      aliases:
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-561-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-596
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 596–630)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.ExtendedFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-596-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-631
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 631–664)
      aliases:
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-631-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-665
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 665–699)
      aliases:
        - androidx.compose.material3.SmallExtendedFloatingActionButton
        - androidx.compose.material3.ExtendedFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-665-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-700
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 700–733)
      aliases:
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-700-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-71
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 71–105)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-71-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-734
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 734–768)
      aliases:
        - androidx.compose.material3.MediumExtendedFloatingActionButton
        - androidx.compose.material3.ExtendedFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-734-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-769
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 769–802)
      aliases:
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-769-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-803
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 803–837)
      aliases:
        - androidx.compose.material3.LargeExtendedFloatingActionButton
        - androidx.compose.material3.ExtendedFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-803-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-838
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 838–871)
      aliases:
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-838-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-872
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 872–906)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.ExtendedFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-872-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-907
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 907–941)
      aliases:
        - androidx.compose.material3.ExtendedFloatingActionButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-907-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-942
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 942–976)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
        - androidx.compose.material3.FloatingActionButtonElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-942-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-floatingactionbutton-lines-977
      title: androidx.compose.material3 FloatingActionButton.kt source (lines 977–1011)
      aliases:
        - androidx.compose.material3.FloatingActionButton
        - androidx.compose.material3.MediumFloatingActionButton
        - androidx.compose.material3.LargeFloatingActionButton
        - androidx.compose.material3.FloatingActionButtonDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-floatingactionbutton-lines-977-source
      relatedIds: []
---

# androidx.compose.material3 FloatingActionButton.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt

## androidx.compose.material3 FloatingActionButton.kt source (lines 1–35)

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

package androidx.compose.material3

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.AnimationSpec
import androidx.compose.animation.core.VectorConverter
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.updateTransition
import androidx.compose.animation.expandHorizontally
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.shrinkHorizontally
import androidx.compose.foundation.interaction.FocusInteraction
import androidx.compose.foundation.interaction.HoverInteraction
import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.InteractionSource
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.PressInteraction
import androidx.compose.foundation.layout.Arrangement

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1012–1046)

    public val shape: Shape
        @Composable get() = FabBaselineTokens.ContainerShape.value

    /** Default shape for a small floating action button. */
    public val smallShape: Shape
        @Composable get() = FabSmallTokens.ContainerShape.value

    /** Default shape for a medium floating action button. */
    public val mediumShape: Shape
        @Composable get() = FabMediumTokens.ContainerShape.value

    /** Default shape for a large floating action button. */
    public val largeShape: Shape
        @Composable get() = FabLargeTokens.ContainerShape.value

    /** Default shape for an extended floating action button. */
    public val extendedFabShape: Shape
        @Composable get() = ExtendedFabSmallTokens.ContainerShape.value

    /** Default shape for a small extended floating action button. */
    public val smallExtendedFabShape: Shape
        @Composable get() = ExtendedFabSmallTokens.ContainerShape.value

    /** Default shape for a medium extended floating action button. */
    public val mediumExtendedFabShape: Shape
        @Composable get() = ExtendedFabMediumTokens.ContainerShape.value

    /** Default shape for a large extended floating action button. */
    public val largeExtendedFabShape: Shape
        @Composable get() = ExtendedFabLargeTokens.ContainerShape.value

    /** Default container color for a floating action button. */
    public val containerColor: Color
        @Composable get() = FabPrimaryContainerTokens.ContainerColor.value


Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1012-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1047–1081)

    /**
     * Creates a [FloatingActionButtonElevation] that represents the elevation of a
     * [FloatingActionButton] in different states. For use cases in which a less prominent
     * [FloatingActionButton] is possible consider the [loweredElevation].
     *
     * @param defaultElevation the elevation used when the [FloatingActionButton] has no other
     *   [Interaction]s.
     * @param pressedElevation the elevation used when the [FloatingActionButton] is pressed.
     * @param focusedElevation the elevation used when the [FloatingActionButton] is focused.
     * @param hoveredElevation the elevation used when the [FloatingActionButton] is hovered.
     */
    @Composable
    public fun elevation(
        defaultElevation: Dp = FabPrimaryContainerTokens.ContainerElevation,
        pressedElevation: Dp = FabPrimaryContainerTokens.PressedContainerElevation,
        focusedElevation: Dp = FabPrimaryContainerTokens.FocusedContainerElevation,
        hoveredElevation: Dp = FabPrimaryContainerTokens.HoveredContainerElevation,
    ): FloatingActionButtonElevation =
        FloatingActionButtonElevation(
            defaultElevation = defaultElevation,
            pressedElevation = pressedElevation,
            focusedElevation = focusedElevation,
            hoveredElevation = hoveredElevation,
        )

    /**
     * Use this to create a [FloatingActionButton] with a lowered elevation for less emphasis. Use
     * [elevation] to get a normal [FloatingActionButton].
     *
     * @param defaultElevation the elevation used when the [FloatingActionButton] has no other
     *   [Interaction]s.
     * @param pressedElevation the elevation used when the [FloatingActionButton] is pressed.
     * @param focusedElevation the elevation used when the [FloatingActionButton] is focused.
     * @param hoveredElevation the elevation used when the [FloatingActionButton] is hovered.
     */

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1047-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 106–140)

 *
 * FAB typically contains an icon, for a FAB with text and an icon, see
 * [ExtendedFloatingActionButton].
 *
 * @sample androidx.compose.material3.samples.FloatingActionButtonSample
 * @param onClick called when this FAB is clicked
 * @param modifier the [Modifier] to be applied to this FAB
 * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
 * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
 *   have no color.
 * @param contentColor the preferred color for content inside this FAB. Defaults to either the
 *   matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
 *   different states. This controls the size of the shadow below the FAB. Additionally, when the
 *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
 *   an overlay. See also: [Surface].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
 *   preview the FAB in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 * @param content the content of this FAB, typically an [Icon]
 */
@Composable
public fun FloatingActionButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    shape: Shape = FloatingActionButtonDefaults.shape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable () -> Unit,
): Unit =
    FloatingActionButton(

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1082–1116)

    @Composable
    public fun loweredElevation(
        defaultElevation: Dp = ElevationTokens.Level1,
        pressedElevation: Dp = ElevationTokens.Level1,
        focusedElevation: Dp = ElevationTokens.Level1,
        hoveredElevation: Dp = ElevationTokens.Level2,
    ): FloatingActionButtonElevation =
        FloatingActionButtonElevation(
            defaultElevation = defaultElevation,
            pressedElevation = pressedElevation,
            focusedElevation = focusedElevation,
            hoveredElevation = hoveredElevation,
        )

    /**
     * Use this to create a [FloatingActionButton] that represents the default elevation of a
     * [FloatingActionButton] used for [BottomAppBar] in different states.
     *
     * @param defaultElevation the elevation used when the [FloatingActionButton] has no other
     *   [Interaction]s.
     * @param pressedElevation the elevation used when the [FloatingActionButton] is pressed.
     * @param focusedElevation the elevation used when the [FloatingActionButton] is focused.
     * @param hoveredElevation the elevation used when the [FloatingActionButton] is hovered.
     */
    public fun bottomAppBarFabElevation(
        defaultElevation: Dp = 0.dp,
        pressedElevation: Dp = 0.dp,
        focusedElevation: Dp = 0.dp,
        hoveredElevation: Dp = 0.dp,
    ): FloatingActionButtonElevation =
        FloatingActionButtonElevation(
            defaultElevation,
            pressedElevation,
            focusedElevation,
            hoveredElevation,

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1082-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1117–1151)

        )
}

/**
 * Apply this modifier to a [FloatingActionButton] to show or hide it with an animation, typically
 * based on the app's main content scrolling.
 *
 * @param visible whether the FAB should be shown or hidden with an animation
 * @param alignment the direction towards which the FAB should be scaled to and from
 * @param targetScale the initial scale value when showing the FAB and the final scale value when
 *   hiding the FAB
 * @param scaleAnimationSpec the [AnimationSpec] to use for the scale part of the animation, if null
 *   the Fast Spatial spring spec from the [MotionScheme] will be used
 * @param alphaAnimationSpec the [AnimationSpec] to use for the alpha part of the animation, if null
 *   the Fast Effects spring spec from the [MotionScheme] will be used
 * @sample androidx.compose.material3.samples.AnimatedFloatingActionButtonSample
 */
public fun Modifier.animateFloatingActionButton(
    visible: Boolean,
    alignment: Alignment,
    targetScale: Float = FloatingActionButtonDefaults.ShowHideTargetScale,
    scaleAnimationSpec: AnimationSpec<Float>? = null,
    alphaAnimationSpec: AnimationSpec<Float>? = null,
): Modifier {
    return this.then(
        FabVisibleModifier(
            visible = visible,
            alignment = alignment,
            targetScale = targetScale,
            scaleAnimationSpec = scaleAnimationSpec,
            alphaAnimationSpec = alphaAnimationSpec,
        )
    )
}


Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1117-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1152–1186)

internal data class FabVisibleModifier(
    private val visible: Boolean,
    private val alignment: Alignment,
    private val targetScale: Float,
    private val scaleAnimationSpec: AnimationSpec<Float>? = null,
    private val alphaAnimationSpec: AnimationSpec<Float>? = null,
) : ModifierNodeElement<FabVisibleNode>() {

    override fun create(): FabVisibleNode =
        FabVisibleNode(
            visible = visible,
            alignment = alignment,
            targetScale = targetScale,
            scaleAnimationSpec = scaleAnimationSpec,
            alphaAnimationSpec = alphaAnimationSpec,
        )

    override fun update(node: FabVisibleNode) {
        node.updateNode(
            visible = visible,
            alignment = alignment,
            targetScale = targetScale,
            scaleAnimationSpec = scaleAnimationSpec,
            alphaAnimationSpec = alphaAnimationSpec,
        )
    }

    override fun InspectorInfo.inspectableProperties() {
        // Show nothing in the inspector.
    }
}

internal class FabVisibleNode(
    visible: Boolean,
    private var alignment: Alignment,

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1152-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1187–1221)

    private var targetScale: Float,
    private var scaleAnimationSpec: AnimationSpec<Float>? = null,
    private var alphaAnimationSpec: AnimationSpec<Float>? = null,
) : DelegatingNode(), LayoutModifierNode, CompositionLocalConsumerModifierNode {

    private val scaleAnimatable = Animatable(if (visible) 1f else 0f)
    private val alphaAnimatable = Animatable(if (visible) 1f else 0f)

    init {
        delegate(
            CacheDrawModifierNode {
                val layer = obtainGraphicsLayer()
                // Use a larger layer size to make sure the elevation shadow doesn't get clipped
                // and offset via layer.topLeft and DrawScope.inset to preserve the visual
                // position of the FAB.
                val layerInsetInt = 16.dp.toPx().toInt()
                val layerInsetFloat = layerInsetInt.toFloat()
                val layerSize =
                    Size(size.width + layerInsetInt * 2f, size.height + layerInsetInt * 2f)
                        .toIntSize()
                val nodeSize = size.toIntSize()

                layer.apply {
                    topLeft = IntOffset(-layerInsetInt, -layerInsetInt)

                    alpha = alphaAnimatable.value

                    // Scale towards the direction of the provided alignment
                    val alignOffset = alignment.align(IntSize(1, 1), nodeSize, layoutDirection)
                    pivotOffset = alignOffset.toOffset() + Offset(layerInsetFloat, layerInsetFloat)
                    scaleX = lerp(targetScale, 1f, scaleAnimatable.value)
                    scaleY = lerp(targetScale, 1f, scaleAnimatable.value)

                    record(size = layerSize) {
                        inset(layerInsetFloat, layerInsetFloat) { this@record.drawContent() }

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1187-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1222–1256)

                    }
                }

                onDrawWithContent { drawLayer(layer) }
            }
        )
    }

    fun updateNode(
        visible: Boolean,
        alignment: Alignment,
        targetScale: Float,
        scaleAnimationSpec: AnimationSpec<Float>?,
        alphaAnimationSpec: AnimationSpec<Float>?,
    ) {
        this.alignment = alignment
        this.targetScale = targetScale
        this.scaleAnimationSpec = scaleAnimationSpec
        this.alphaAnimationSpec = alphaAnimationSpec

        coroutineScope.launch {
            // TODO Load the motionScheme tokens from the component tokens file
            scaleAnimatable.animateTo(
                targetValue = if (visible) 1f else 0f,
                animationSpec =
                    scaleAnimationSpec
                        ?: currentValueOf(LocalMaterialTheme).motionScheme.fastSpatialSpec<Float>(),
            )
        }

        coroutineScope.launch {
            // TODO Load the motionScheme tokens from the component tokens file
            alphaAnimatable.animateTo(
                targetValue = if (visible) 1f else 0f,
                animationSpec =

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1222-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1257–1291)

                    alphaAnimationSpec
                        ?: currentValueOf(LocalMaterialTheme).motionScheme.fastEffectsSpec<Float>(),
            )
        }
    }

    override fun MeasureScope.measure(
        measurable: Measurable,
        constraints: Constraints,
    ): MeasureResult {
        if (alphaAnimatable.value == 0f) {
            return layout(0, 0) {}
        }
        val placeable = measurable.measure(constraints)
        return layout(placeable.width, placeable.height) { placeable.place(0, 0) }
    }
}

/**
 * Represents the tonal and shadow elevation for a floating action button in different states.
 *
 * See [FloatingActionButtonDefaults.elevation] for the default elevation used in a
 * [FloatingActionButton] and [ExtendedFloatingActionButton].
 */
@Stable
public open class FloatingActionButtonElevation
internal constructor(
    private val defaultElevation: Dp,
    private val pressedElevation: Dp,
    private val focusedElevation: Dp,
    private val hoveredElevation: Dp,
) {
    @Composable
    internal fun shadowElevation(interactionSource: InteractionSource): State<Dp> {
        return animateElevation(interactionSource = interactionSource)

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1257-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1292–1326)

    }

    internal fun tonalElevation(): Dp {
        return defaultElevation
    }

    @Composable
    private fun animateElevation(interactionSource: InteractionSource): State<Dp> {
        val animatable =
            remember(interactionSource) {
                FloatingActionButtonElevationAnimatable(
                    defaultElevation = defaultElevation,
                    pressedElevation = pressedElevation,
                    hoveredElevation = hoveredElevation,
                    focusedElevation = focusedElevation,
                )
            }

        LaunchedEffect(this) {
            animatable.updateElevation(
                defaultElevation = defaultElevation,
                pressedElevation = pressedElevation,
                hoveredElevation = hoveredElevation,
                focusedElevation = focusedElevation,
            )
        }

        LaunchedEffect(interactionSource) {
            val interactions = mutableListOf<Interaction>()
            interactionSource.interactions.collect { interaction ->
                when (interaction) {
                    is HoverInteraction.Enter -> {
                        interactions.add(interaction)
                    }
                    is HoverInteraction.Exit -> {

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1292-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1327–1361)

                        interactions.remove(interaction.enter)
                    }
                    is FocusInteraction.Focus -> {
                        interactions.add(interaction)
                    }
                    is FocusInteraction.Unfocus -> {
                        interactions.remove(interaction.focus)
                    }
                    is PressInteraction.Press -> {
                        interactions.add(interaction)
                    }
                    is PressInteraction.Release -> {
                        interactions.remove(interaction.press)
                    }
                    is PressInteraction.Cancel -> {
                        interactions.remove(interaction.press)
                    }
                }
                val targetInteraction = interactions.lastOrNull()
                launch { animatable.animateElevation(to = targetInteraction) }
            }
        }

        return animatable.asState()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is FloatingActionButtonElevation) return false

        if (defaultElevation != other.defaultElevation) return false
        if (pressedElevation != other.pressedElevation) return false
        if (focusedElevation != other.focusedElevation) return false
        return hoveredElevation == other.hoveredElevation
    }

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1327-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1362–1396)


    override fun hashCode(): Int {
        var result = defaultElevation.hashCode()
        result = 31 * result + pressedElevation.hashCode()
        result = 31 * result + focusedElevation.hashCode()
        result = 31 * result + hoveredElevation.hashCode()
        return result
    }
}

private class FloatingActionButtonElevationAnimatable(
    private var defaultElevation: Dp,
    private var pressedElevation: Dp,
    private var hoveredElevation: Dp,
    private var focusedElevation: Dp,
) {
    private val animatable = Animatable(defaultElevation, Dp.VectorConverter)

    private var lastTargetInteraction: Interaction? = null
    private var targetInteraction: Interaction? = null

    private fun Interaction?.calculateTarget(): Dp {
        return when (this) {
            is PressInteraction.Press -> pressedElevation
            is HoverInteraction.Enter -> hoveredElevation
            is FocusInteraction.Focus -> focusedElevation
            else -> defaultElevation
        }
    }

    suspend fun updateElevation(
        defaultElevation: Dp,
        pressedElevation: Dp,
        hoveredElevation: Dp,
        focusedElevation: Dp,

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1362-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1397–1431)

    ) {
        this.defaultElevation = defaultElevation
        this.pressedElevation = pressedElevation
        this.hoveredElevation = hoveredElevation
        this.focusedElevation = focusedElevation
        snapElevation()
    }

    private suspend fun snapElevation() {
        val target = targetInteraction.calculateTarget()
        if (animatable.targetValue != target) {
            try {
                animatable.snapTo(target)
            } finally {
                lastTargetInteraction = targetInteraction
            }
        }
    }

    suspend fun animateElevation(to: Interaction?) {
        val target = to.calculateTarget()
        // Update the interaction even if the values are the same, for when we change to another
        // interaction later
        targetInteraction = to
        try {
            if (animatable.targetValue != target) {
                animatable.animateElevation(target = target, from = lastTargetInteraction, to = to)
            }
        } finally {
            lastTargetInteraction = to
        }
    }

    fun asState(): State<Dp> = animatable.asState()
}

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1397-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 141–175)

        onClick,
        ExtendedFabSmallTokens.LabelText.value,
        FabBaselineTokens.ContainerWidth,
        FabBaselineTokens.ContainerHeight,
        modifier,
        shape,
        containerColor,
        contentColor,
        elevation,
        interactionSource,
        content,
    )

@Composable
private fun FloatingActionButton(
    onClick: () -> Unit,
    textStyle: TextStyle,
    minWidth: Dp,
    minHeight: Dp,
    modifier: Modifier = Modifier,
    shape: Shape = FloatingActionButtonDefaults.shape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable () -> Unit,
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    Surface(
        onClick = onClick,
        modifier = modifier.semantics { role = Role.Button },
        shape = shape,
        color = containerColor,
        contentColor = contentColor,

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1432–1466)


private val SmallExtendedFabMinimumWidth
    get() = ExtendedFabSmallTokens.ContainerHeight
private val SmallExtendedFabMinimumHeight
    get() = ExtendedFabSmallTokens.ContainerHeight
private val SmallExtendedFabPaddingStart
    get() = ExtendedFabSmallTokens.LeadingSpace
private val SmallExtendedFabPaddingEnd
    get() = ExtendedFabSmallTokens.TrailingSpace
private val SmallExtendedFabIconPadding
    get() = ExtendedFabSmallTokens.IconLabelSpace
private val SmallExtendedFabTextStyle = TypographyKeyTokens.TitleMedium

private val MediumExtendedFabMinimumWidth
    get() = ExtendedFabMediumTokens.ContainerHeight
private val MediumExtendedFabMinimumHeight
    get() = ExtendedFabMediumTokens.ContainerHeight
private val MediumExtendedFabPaddingStart
    get() = ExtendedFabMediumTokens.LeadingSpace
private val MediumExtendedFabPaddingEnd
    get() = ExtendedFabMediumTokens.TrailingSpace
private val MediumExtendedFabIconPadding
    get() = ExtendedFabMediumTokens.IconLabelSpace
private val MediumExtendedFabTextStyle = TypographyKeyTokens.TitleLarge

private val LargeExtendedFabMinimumWidth
    get() = ExtendedFabLargeTokens.ContainerHeight
private val LargeExtendedFabMinimumHeight
    get() = ExtendedFabLargeTokens.ContainerHeight
private val LargeExtendedFabPaddingStart
    get() = ExtendedFabLargeTokens.LeadingSpace
private val LargeExtendedFabPaddingEnd
    get() = ExtendedFabLargeTokens.TrailingSpace
private val LargeExtendedFabIconPadding
    get() = ExtendedFabLargeTokens.IconLabelSpace

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1432-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 1467–1501)

private val LargeExtendedFabTextStyle = TypographyKeyTokens.HeadlineSmall

private val ExtendedFabStartIconPadding
    get() = 16.dp

private val ExtendedFabEndIconPadding
    get() = 12.dp

private val ExtendedFabTextPadding
    get() = 20.dp

private val ExtendedFabMinimumWidth
    get() = 80.dp

@Composable
private fun extendedFabCollapseAnimation() =
    fadeOut(
        // TODO Load the motionScheme tokens from the component tokens file
        animationSpec = MotionSchemeKeyTokens.FastEffects.value()
    ) +
        shrinkHorizontally(
            animationSpec = MotionSchemeKeyTokens.DefaultSpatial.value(),
            shrinkTowards = Alignment.Start,
        )

@Composable
private fun extendedFabExpandAnimation() =
    fadeIn(
        // TODO Load the motionScheme tokens from the component tokens file
        animationSpec = MotionSchemeKeyTokens.DefaultEffects.value()
    ) +
        expandHorizontally(
            animationSpec = MotionSchemeKeyTokens.FastSpatial.value(),
            expandFrom = Alignment.Start,
        )

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-1467-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 176–210)

        tonalElevation = elevation.tonalElevation(),
        shadowElevation = elevation.shadowElevation(interactionSource = interactionSource).value,
        interactionSource = interactionSource,
    ) {
        ProvideContentColorTextStyle(contentColor = contentColor, textStyle = textStyle) {
            Box(
                modifier = Modifier.defaultMinSize(minWidth = minWidth, minHeight = minHeight),
                contentAlignment = Alignment.Center,
            ) {
                content()
            }
        }
    }
}

/**
 * [Material Design small floating action
 * button](https://m3.material.io/components/floating-action-button/overview)
 *
 * The FAB represents the most important action on a screen. It puts key actions within reach.
 *
 * ![Small FAB
 * image](https://developer.android.com/images/reference/androidx/compose/material3/small-fab.png)
 *
 * @sample androidx.compose.material3.samples.SmallFloatingActionButtonSample
 *
 * FABs can also be shown and hidden with an animation when the main content is scrolled:
 *
 * @sample androidx.compose.material3.samples.AnimatedFloatingActionButtonSample
 * @param onClick called when this FAB is clicked
 * @param modifier the [Modifier] to be applied to this FAB
 * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
 * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
 *   have no color.
 * @param contentColor the preferred color for content inside this FAB. Defaults to either the

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 211–245)

 *   matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
 *   different states. This controls the size of the shadow below the FAB. Additionally, when the
 *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
 *   an overlay. See also: [Surface].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
 *   preview the FAB in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 * @param content the content of this FAB, typically an [Icon]
 */
@Composable
public fun SmallFloatingActionButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    shape: Shape = FloatingActionButtonDefaults.smallShape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable () -> Unit,
) {
    FloatingActionButton(
        onClick = onClick,
        modifier =
            modifier.sizeIn(
                minWidth = FabSmallTokens.ContainerWidth,
                minHeight = FabSmallTokens.ContainerHeight,
            ),
        shape = shape,
        containerColor = containerColor,
        contentColor = contentColor,
        elevation = elevation,
        interactionSource = interactionSource,

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 246–280)

        content = content,
    )
}

/**
 * [Material Design medium floating action
 * button](https://m3.material.io/components/floating-action-button/overview)
 *
 * The FAB represents the most important action on a screen. It puts key actions within reach.
 *
 * @sample androidx.compose.material3.samples.MediumFloatingActionButtonSample
 *
 * FABs can also be shown and hidden with an animation when the main content is scrolled:
 *
 * @sample androidx.compose.material3.samples.AnimatedFloatingActionButtonSample
 * @param onClick called when this FAB is clicked
 * @param modifier the [Modifier] to be applied to this FAB
 * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
 * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
 *   have no color.
 * @param contentColor the preferred color for content inside this FAB. Defaults to either the
 *   matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
 *   different states. This controls the size of the shadow below the FAB. Additionally, when the
 *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
 *   an overlay. See also: [Surface].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
 *   preview the FAB in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 * @param content the content of this FAB, typically an [Icon]
 *
 * @material3expressive
 */

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 281–315)

@Composable
public fun MediumFloatingActionButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    shape: Shape = FloatingActionButtonDefaults.mediumShape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable () -> Unit,
) {
    FloatingActionButton(
        onClick = onClick,
        modifier =
            modifier.sizeIn(
                minWidth = FabMediumTokens.ContainerWidth,
                minHeight = FabMediumTokens.ContainerHeight,
            ),
        shape = shape,
        containerColor = containerColor,
        contentColor = contentColor,
        elevation = elevation,
        interactionSource = interactionSource,
        content = content,
    )
}

/**
 * [Material Design large floating action
 * button](https://m3.material.io/components/floating-action-button/overview)
 *
 * The FAB represents the most important action on a screen. It puts key actions within reach.
 *
 * ![Large FAB
 * image](https://developer.android.com/images/reference/androidx/compose/material3/large-fab.png)

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 316–350)

 *
 * @sample androidx.compose.material3.samples.LargeFloatingActionButtonSample
 *
 * FABs can also be shown and hidden with an animation when the main content is scrolled:
 *
 * @sample androidx.compose.material3.samples.AnimatedFloatingActionButtonSample
 * @param onClick called when this FAB is clicked
 * @param modifier the [Modifier] to be applied to this FAB
 * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
 * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
 *   have no color.
 * @param contentColor the preferred color for content inside this FAB. Defaults to either the
 *   matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
 *   different states. This controls the size of the shadow below the FAB. Additionally, when the
 *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
 *   an overlay. See also: [Surface].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
 *   preview the FAB in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 * @param content the content of this FAB, typically an [Icon]
 */
@Composable
public fun LargeFloatingActionButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    shape: Shape = FloatingActionButtonDefaults.largeShape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable () -> Unit,
) {

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 351–385)

    FloatingActionButton(
        onClick = onClick,
        modifier =
            modifier.sizeIn(
                minWidth = FabLargeTokens.ContainerWidth,
                minHeight = FabLargeTokens.ContainerHeight,
            ),
        shape = shape,
        containerColor = containerColor,
        contentColor = contentColor,
        elevation = elevation,
        interactionSource = interactionSource,
        content = content,
    )
}

// TODO link to image
/**
 * [Material Design small extended floating action
 * button](https://m3.material.io/components/extended-fab/overview)
 *
 * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
 * label and larger target area.
 *
 * The other small extended floating action button overload supports a text label and icon.
 *
 * @sample androidx.compose.material3.samples.SmallExtendedFloatingActionButtonTextSample
 * @param onClick called when this FAB is clicked
 * @param modifier the [Modifier] to be applied to this FAB
 * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
 * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
 *   have no color.
 * @param contentColor the preferred color for content inside this FAB. Defaults to either the
 *   matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 36–70)

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.sizeIn
import androidx.compose.foundation.layout.width
import androidx.compose.material3.MaterialTheme.LocalMaterialTheme
import androidx.compose.material3.internal.ProvideContentColorTextStyle
import androidx.compose.material3.internal.animateElevation
import androidx.compose.material3.tokens.ElevationTokens
import androidx.compose.material3.tokens.ExtendedFabLargeTokens
import androidx.compose.material3.tokens.ExtendedFabMediumTokens
import androidx.compose.material3.tokens.ExtendedFabSmallTokens
import androidx.compose.material3.tokens.FabBaselineTokens
import androidx.compose.material3.tokens.FabLargeTokens
import androidx.compose.material3.tokens.FabMediumTokens
import androidx.compose.material3.tokens.FabPrimaryContainerTokens
import androidx.compose.material3.tokens.FabSmallTokens
import androidx.compose.material3.tokens.MotionSchemeKeyTokens
import androidx.compose.material3.tokens.TypographyKeyTokens
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.Stable
import androidx.compose.runtime.State
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.CacheDrawModifierNode
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 386–420)

 * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
 *   different states. This controls the size of the shadow below the FAB. Additionally, when the
 *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
 *   an overlay. See also: [Surface].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
 *   preview the FAB in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 * @param content the content of this FAB, typically a [Text] label
 *
 * @material3expressive
 */
@Composable
public fun SmallExtendedFloatingActionButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    shape: Shape = FloatingActionButtonDefaults.smallExtendedFabShape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
) {
    FloatingActionButton(
        onClick = onClick,
        textStyle = SmallExtendedFabTextStyle.value,
        minWidth = SmallExtendedFabMinimumWidth,
        minHeight = SmallExtendedFabMinimumHeight,
        modifier = modifier,
        shape = shape,
        containerColor = containerColor,
        contentColor = contentColor,
        elevation = elevation,
        interactionSource = interactionSource,
    ) {

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 421–455)

        Row(
            modifier =
                Modifier.padding(
                    start = SmallExtendedFabPaddingStart,
                    end = SmallExtendedFabPaddingEnd,
                ),
            horizontalArrangement = Arrangement.Center,
            verticalAlignment = Alignment.CenterVertically,
            content = content,
        )
    }
}

// TODO link to image
/**
 * [Material Design medium extended floating action
 * button](https://m3.material.io/components/extended-fab/overview)
 *
 * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
 * label and larger target area.
 *
 * The other medium extended floating action button overload supports a text label and icon.
 *
 * @sample androidx.compose.material3.samples.MediumExtendedFloatingActionButtonTextSample
 * @param onClick called when this FAB is clicked
 * @param modifier the [Modifier] to be applied to this FAB
 * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
 * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
 *   have no color.
 * @param contentColor the preferred color for content inside this FAB. Defaults to either the
 *   matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
 *   different states. This controls the size of the shadow below the FAB. Additionally, when the
 *   container color is [ColorScheme.surface], this controls the amount of primary color applied as

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 456–490)

 *   an overlay. See also: [Surface].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
 *   preview the FAB in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 * @param content the content of this FAB, typically a [Text] label
 *
 * @material3expressive
 */
@Composable
public fun MediumExtendedFloatingActionButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    shape: Shape = FloatingActionButtonDefaults.mediumExtendedFabShape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
) {
    FloatingActionButton(
        onClick = onClick,
        textStyle = MediumExtendedFabTextStyle.value,
        minWidth = MediumExtendedFabMinimumWidth,
        minHeight = MediumExtendedFabMinimumHeight,
        modifier = modifier,
        shape = shape,
        containerColor = containerColor,
        contentColor = contentColor,
        elevation = elevation,
        interactionSource = interactionSource,
    ) {
        Row(
            modifier =
                Modifier.padding(

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 491–525)

                    start = MediumExtendedFabPaddingStart,
                    end = MediumExtendedFabPaddingEnd,
                ),
            horizontalArrangement = Arrangement.Center,
            verticalAlignment = Alignment.CenterVertically,
            content = content,
        )
    }
}

// TODO link to image
/**
 * [Material Design large extended floating action
 * button](https://m3.material.io/components/extended-fab/overview)
 *
 * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
 * label and larger target area.
 *
 * The other large extended floating action button overload supports a text label and icon.
 *
 * @sample androidx.compose.material3.samples.LargeExtendedFloatingActionButtonTextSample
 * @param onClick called when this FAB is clicked
 * @param modifier the [Modifier] to be applied to this FAB
 * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
 * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
 *   have no color.
 * @param contentColor the preferred color for content inside this FAB. Defaults to either the
 *   matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
 *   different states. This controls the size of the shadow below the FAB. Additionally, when the
 *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
 *   an overlay. See also: [Surface].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 526–560)

 *   preview the FAB in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 * @param content the content of this FAB, typically a [Text] label
 *
 * @material3expressive
 */
@Composable
public fun LargeExtendedFloatingActionButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    shape: Shape = FloatingActionButtonDefaults.largeExtendedFabShape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
) {
    FloatingActionButton(
        onClick = onClick,
        textStyle = LargeExtendedFabTextStyle.value,
        minWidth = LargeExtendedFabMinimumWidth,
        minHeight = LargeExtendedFabMinimumHeight,
        modifier = modifier,
        shape = shape,
        containerColor = containerColor,
        contentColor = contentColor,
        elevation = elevation,
        interactionSource = interactionSource,
    ) {
        Row(
            modifier =
                Modifier.padding(
                    start = LargeExtendedFabPaddingStart,
                    end = LargeExtendedFabPaddingEnd,
                ),

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 561–595)

            horizontalArrangement = Arrangement.Center,
            verticalAlignment = Alignment.CenterVertically,
            content = content,
        )
    }
}

/**
 * [Material Design extended floating action
 * button](https://m3.material.io/components/extended-fab/overview)
 *
 * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
 * label and larger target area.
 *
 * ![Extended FAB
 * image](https://developer.android.com/images/reference/androidx/compose/material3/extended-fab.png)
 *
 * The other extended floating action button overload supports a text label and icon.
 *
 * @sample androidx.compose.material3.samples.ExtendedFloatingActionButtonTextSample
 * @param onClick called when this FAB is clicked
 * @param modifier the [Modifier] to be applied to this FAB
 * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
 * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
 *   have no color.
 * @param contentColor the preferred color for content inside this FAB. Defaults to either the
 *   matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
 *   different states. This controls the size of the shadow below the FAB. Additionally, when the
 *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
 *   an overlay. See also: [Surface].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
 *   preview the FAB in different states. Note that if `null` is provided, interactions will still

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 596–630)

 *   happen internally.
 * @param content the content of this FAB, typically a [Text] label
 */
@Composable
public fun ExtendedFloatingActionButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    shape: Shape = FloatingActionButtonDefaults.extendedFabShape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
    content: @Composable RowScope.() -> Unit,
) {
    FloatingActionButton(
        onClick = onClick,
        modifier = modifier,
        shape = shape,
        containerColor = containerColor,
        contentColor = contentColor,
        elevation = elevation,
        interactionSource = interactionSource,
    ) {
        Row(
            modifier =
                Modifier.sizeIn(minWidth = ExtendedFabMinimumWidth)
                    .padding(horizontal = ExtendedFabTextPadding),
            horizontalArrangement = Arrangement.Center,
            verticalAlignment = Alignment.CenterVertically,
            content = content,
        )
    }
}

/**

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 631–664)

 * [Material Design small extended floating action
 * button](https://m3.material.io/components/extended-fab/overview)
 *
 * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
 * label and larger target area.
 *
 * The other small extended floating action button overload is for FABs without an icon.
 *
 * Default content description for accessibility is extended from the extended fabs icon. For custom
 * behavior, you can provide your own via [Modifier.semantics].
 *
 * @sample androidx.compose.material3.samples.SmallExtendedFloatingActionButtonSample
 * @sample androidx.compose.material3.samples.SmallAnimatedExtendedFloatingActionButtonSample
 * @param text label displayed inside this FAB
 * @param icon icon for this FAB, typically an [Icon]
 * @param onClick called when this FAB is clicked
 * @param modifier the [Modifier] to be applied to this FAB
 * @param expanded controls the expansion state of this FAB. In an expanded state, the FAB will show
 *   both the [icon] and [text]. In a collapsed state, the FAB will show only the [icon].
 * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
 * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
 *   have no color.
 * @param contentColor the preferred color for content inside this FAB. Defaults to either the
 *   matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
 *   different states. This controls the size of the shadow below the FAB. Additionally, when the
 *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
 *   an overlay. See also: [Surface].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
 *   preview the FAB in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 *

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 665–699)

 * @material3expressive
 */
@Composable
public fun SmallExtendedFloatingActionButton(
    text: @Composable () -> Unit,
    icon: @Composable () -> Unit,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    expanded: Boolean = true,
    shape: Shape = FloatingActionButtonDefaults.smallExtendedFabShape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
): Unit =
    ExtendedFloatingActionButton(
        text = text,
        icon = icon,
        onClick = onClick,
        textStyle = SmallExtendedFabTextStyle.value,
        minWidth = SmallExtendedFabMinimumWidth,
        minHeight = SmallExtendedFabMinimumHeight,
        startPadding = SmallExtendedFabPaddingStart,
        endPadding = SmallExtendedFabPaddingEnd,
        iconPadding = SmallExtendedFabIconPadding,
        modifier = modifier,
        expanded = expanded,
        shape = shape,
        containerColor = containerColor,
        contentColor = contentColor,
        elevation = elevation,
        interactionSource = interactionSource,
    )

/**

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-665-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 700–733)

 * [Material Design medium extended floating action
 * button](https://m3.material.io/components/extended-fab/overview)
 *
 * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
 * label and larger target area.
 *
 * The other medium extended floating action button overload is for FABs without an icon.
 *
 * Default content description for accessibility is extended from the extended fabs icon. For custom
 * behavior, you can provide your own via [Modifier.semantics].
 *
 * @sample androidx.compose.material3.samples.MediumExtendedFloatingActionButtonSample
 * @sample androidx.compose.material3.samples.MediumAnimatedExtendedFloatingActionButtonSample
 * @param text label displayed inside this FAB
 * @param icon icon for this FAB, typically an [Icon]
 * @param onClick called when this FAB is clicked
 * @param modifier the [Modifier] to be applied to this FAB
 * @param expanded controls the expansion state of this FAB. In an expanded state, the FAB will show
 *   both the [icon] and [text]. In a collapsed state, the FAB will show only the [icon].
 * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
 * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
 *   have no color.
 * @param contentColor the preferred color for content inside this FAB. Defaults to either the
 *   matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
 *   different states. This controls the size of the shadow below the FAB. Additionally, when the
 *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
 *   an overlay. See also: [Surface].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
 *   preview the FAB in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 *

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-700-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 71–105)

import androidx.compose.ui.graphics.drawscope.inset
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.graphics.layer.drawLayer
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.layout.layout
import androidx.compose.ui.node.CompositionLocalConsumerModifierNode
import androidx.compose.ui.node.DelegatingNode
import androidx.compose.ui.node.LayoutModifierNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.currentValueOf
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.clearAndSetSemantics
import androidx.compose.ui.semantics.role
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.toIntSize
import androidx.compose.ui.unit.toOffset
import androidx.compose.ui.util.lerp
import kotlinx.coroutines.launch

/**
 * [Material Design floating action
 * button](https://m3.material.io/components/floating-action-button/overview)
 *
 * The FAB represents the most important action on a screen. It puts key actions within reach.
 *
 * ![FAB image](https://developer.android.com/images/reference/androidx/compose/material3/fab.png)

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 734–768)

 * @material3expressive
 */
@Composable
public fun MediumExtendedFloatingActionButton(
    text: @Composable () -> Unit,
    icon: @Composable () -> Unit,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    expanded: Boolean = true,
    shape: Shape = FloatingActionButtonDefaults.mediumExtendedFabShape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
): Unit =
    ExtendedFloatingActionButton(
        text = text,
        icon = icon,
        onClick = onClick,
        textStyle = MediumExtendedFabTextStyle.value,
        minWidth = MediumExtendedFabMinimumWidth,
        minHeight = MediumExtendedFabMinimumHeight,
        startPadding = MediumExtendedFabPaddingStart,
        endPadding = MediumExtendedFabPaddingEnd,
        iconPadding = MediumExtendedFabIconPadding,
        modifier = modifier,
        expanded = expanded,
        shape = shape,
        containerColor = containerColor,
        contentColor = contentColor,
        elevation = elevation,
        interactionSource = interactionSource,
    )

/**

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-734-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 769–802)

 * [Material Design large extended floating action
 * button](https://m3.material.io/components/extended-fab/overview)
 *
 * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
 * label and larger target area.
 *
 * The other large extended floating action button overload is for FABs without an icon.
 *
 * Default content description for accessibility is extended from the extended fabs icon. For custom
 * behavior, you can provide your own via [Modifier.semantics].
 *
 * @sample androidx.compose.material3.samples.LargeExtendedFloatingActionButtonSample
 * @sample androidx.compose.material3.samples.LargeAnimatedExtendedFloatingActionButtonSample
 * @param text label displayed inside this FAB
 * @param icon icon for this FAB, typically an [Icon]
 * @param onClick called when this FAB is clicked
 * @param modifier the [Modifier] to be applied to this FAB
 * @param expanded controls the expansion state of this FAB. In an expanded state, the FAB will show
 *   both the [icon] and [text]. In a collapsed state, the FAB will show only the [icon].
 * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
 * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
 *   have no color.
 * @param contentColor the preferred color for content inside this FAB. Defaults to either the
 *   matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
 *   different states. This controls the size of the shadow below the FAB. Additionally, when the
 *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
 *   an overlay. See also: [Surface].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or
 *   preview the FAB in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 *

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-769-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 803–837)

 * @material3expressive
 */
@Composable
public fun LargeExtendedFloatingActionButton(
    text: @Composable () -> Unit,
    icon: @Composable () -> Unit,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    expanded: Boolean = true,
    shape: Shape = FloatingActionButtonDefaults.largeExtendedFabShape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
): Unit =
    ExtendedFloatingActionButton(
        text = text,
        icon = icon,
        onClick = onClick,
        textStyle = LargeExtendedFabTextStyle.value,
        minWidth = LargeExtendedFabMinimumWidth,
        minHeight = LargeExtendedFabMinimumHeight,
        startPadding = LargeExtendedFabPaddingStart,
        endPadding = LargeExtendedFabPaddingEnd,
        iconPadding = LargeExtendedFabIconPadding,
        modifier = modifier,
        expanded = expanded,
        shape = shape,
        containerColor = containerColor,
        contentColor = contentColor,
        elevation = elevation,
        interactionSource = interactionSource,
    )

/**

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-803-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 838–871)

 * [Material Design extended floating action
 * button](https://m3.material.io/components/extended-fab/overview)
 *
 * Extended FABs help people take primary actions. They're wider than FABs to accommodate a text
 * label and larger target area.
 *
 * ![Extended FAB
 * image](https://developer.android.com/images/reference/androidx/compose/material3/extended-fab.png)
 *
 * The other extended floating action button overload is for FABs without an icon.
 *
 * Default content description for accessibility is extended from the extended fabs icon. For custom
 * behavior, you can provide your own via [Modifier.semantics].
 *
 * @sample androidx.compose.material3.samples.ExtendedFloatingActionButtonSample
 * @sample androidx.compose.material3.samples.AnimatedExtendedFloatingActionButtonSample
 * @param text label displayed inside this FAB
 * @param icon icon for this FAB, typically an [Icon]
 * @param onClick called when this FAB is clicked
 * @param modifier the [Modifier] to be applied to this FAB
 * @param expanded controls the expansion state of this FAB. In an expanded state, the FAB will show
 *   both the [icon] and [text]. In a collapsed state, the FAB will show only the [icon].
 * @param shape defines the shape of this FAB's container and shadow (when using [elevation])
 * @param containerColor the color used for the background of this FAB. Use [Color.Transparent] to
 *   have no color.
 * @param contentColor the preferred color for content inside this FAB. Defaults to either the
 *   matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param elevation [FloatingActionButtonElevation] used to resolve the elevation for this FAB in
 *   different states. This controls the size of the shadow below the FAB. Additionally, when the
 *   container color is [ColorScheme.surface], this controls the amount of primary color applied as
 *   an overlay. See also: [Surface].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this FAB. You can use this to change the FAB's appearance or

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-838-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 872–906)

 *   preview the FAB in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 */
@Composable
public fun ExtendedFloatingActionButton(
    text: @Composable () -> Unit,
    icon: @Composable () -> Unit,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    expanded: Boolean = true,
    shape: Shape = FloatingActionButtonDefaults.extendedFabShape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
) {
    FloatingActionButton(
        onClick = onClick,
        modifier = modifier,
        shape = shape,
        containerColor = containerColor,
        contentColor = contentColor,
        elevation = elevation,
        interactionSource = interactionSource,
    ) {
        val startPadding = if (expanded) ExtendedFabStartIconPadding else 0.dp
        val endPadding = if (expanded) ExtendedFabTextPadding else 0.dp

        Row(
            modifier =
                Modifier.sizeIn(
                        minWidth =
                            if (expanded) {
                                ExtendedFabMinimumWidth
                            } else {

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-872-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 907–941)

                                FabBaselineTokens.ContainerWidth
                            }
                    )
                    .padding(start = startPadding, end = endPadding),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = if (expanded) Arrangement.Start else Arrangement.Center,
        ) {
            icon()
            AnimatedVisibility(
                visible = expanded,
                enter = extendedFabExpandAnimation(),
                exit = extendedFabCollapseAnimation(),
            ) {
                Row(Modifier.clearAndSetSemantics {}) {
                    Spacer(Modifier.width(ExtendedFabEndIconPadding))
                    text()
                }
            }
        }
    }
}

@Composable
private fun ExtendedFloatingActionButton(
    text: @Composable () -> Unit,
    icon: @Composable () -> Unit,
    onClick: () -> Unit,
    textStyle: TextStyle,
    minWidth: Dp,
    minHeight: Dp,
    startPadding: Dp,
    endPadding: Dp,
    iconPadding: Dp,
    modifier: Modifier = Modifier,
    expanded: Boolean = true,

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-907-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 942–976)

    shape: Shape = FloatingActionButtonDefaults.extendedFabShape,
    containerColor: Color = FloatingActionButtonDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
    interactionSource: MutableInteractionSource? = null,
) {
    FloatingActionButton(
        onClick = onClick,
        textStyle = textStyle,
        minWidth = Dp.Unspecified,
        minHeight = Dp.Unspecified,
        modifier = modifier,
        shape = shape,
        containerColor = containerColor,
        contentColor = contentColor,
        elevation = elevation,
        interactionSource = interactionSource,
    ) {
        val expandTransition = updateTransition(if (expanded) 1f else 0f, label = "expanded state")
        // TODO Load the motionScheme tokens from the component tokens file
        val sizeAnimationSpec = MotionSchemeKeyTokens.FastSpatial.value<Float>()
        val opacityAnimationSpec = MotionSchemeKeyTokens.FastEffects.value<Float>()
        val expandedWidthProgress =
            expandTransition.animateFloat(transitionSpec = { sizeAnimationSpec }) { it }
        val expandedAlphaProgress =
            expandTransition.animateFloat(transitionSpec = { opacityAnimationSpec }) { it }
        Row(
            modifier =
                Modifier.layout { measurable, constraints ->
                        val expandedWidth = measurable.maxIntrinsicWidth(constraints.maxHeight)
                        val width =
                            lerp(minWidth.roundToPx(), expandedWidth, expandedWidthProgress.value)
                        val placeable = measurable.measure(constraints)
                        layout(width, placeable.height) { placeable.place(0, 0) }
                    }

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-942-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)

## androidx.compose.material3 FloatingActionButton.kt source (lines 977–1011)

                    .sizeIn(minWidth = minWidth, minHeight = minHeight)
                    .padding(start = startPadding, end = endPadding),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            icon()
            val fullyCollapsed =
                remember(expandTransition) {
                    derivedStateOf {
                        expandTransition.currentState == 0f && !expandTransition.isRunning
                    }
                }
            if (!fullyCollapsed.value) {
                Row(
                    Modifier.clearAndSetSemantics {}
                        .graphicsLayer { alpha = expandedAlphaProgress.value }
                ) {
                    Spacer(Modifier.width(iconPadding))
                    text()
                }
            }
        }
    }
}

/** Contains the default values used by [FloatingActionButton] */
public object FloatingActionButtonDefaults {
    internal val ShowHideTargetScale = 0.2f

    /** The recommended size of the icon inside a [MediumFloatingActionButton]. */
    public val MediumIconSize: Dp = FabMediumTokens.IconSize

    /** The recommended size of the icon inside a [LargeFloatingActionButton]. */
    public val LargeIconSize: Dp = FabLargeTokens.IconSize

    /** Default shape for a floating action button. */

Sources: [live-androidx-material3-material3-material3-floatingactionbutton-lines-977-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/FloatingActionButton.kt)
