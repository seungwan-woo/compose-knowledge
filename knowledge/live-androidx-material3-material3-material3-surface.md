---
type: reference
title: androidx.compose.material3 Surface.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-surface-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 1
    endLine: 35
    sha256: 85aebae3a912c417fcd6262a94e5b1963df7d1f5c8911989a3ddb1f11e6cc192
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

      import androidx.compose.foundation.BorderStroke
      import androidx.compose.foundation.background
      import androidx.compose.foundation.border
      import androidx.compose.foundation.clickable
      import androidx.compose.foundation.indication
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.layout.Box
      import androidx.compose.foundation.selection.selectable
      import androidx.compose.foundation.selection.toggleable
      import androidx.compose.material3.internal.childSemantics
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.CompositionLocalProvider
      import androidx.compose.runtime.NonRestartableComposable
      import androidx.compose.runtime.ProvidableCompositionLocal
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.compositionLocalOf
  - id: live-androidx-material3-material3-material3-surface-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 106
    endLine: 140
    sha256: 8ec89b73a10cb03867b959c92f53b204ffcfdd36856735864f98a71edd7bbf74
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          shadowElevation: Dp = 0.dp,
          border: BorderStroke? = null,
          content: @Composable () -> Unit,
      ) {
          val absoluteElevation = LocalAbsoluteTonalElevation.current + tonalElevation
          CompositionLocalProvider(
              LocalContentColor provides contentColor,
              LocalAbsoluteTonalElevation provides absoluteElevation,
          ) {
              Box(
                  modifier =
                      modifier
                          .surface(
                              shape = shape,
                              backgroundColor =
                                  surfaceColorAtElevation(color = color, elevation = absoluteElevation),
                              border = border,
                              shadowElevation = with(LocalDensity.current) { shadowElevation.toPx() },
                          )
                          .semantics(mergeDescendants = false) {
                              // TODO(b/347038246): replace `isContainer` with `isTraversalGroup` with new
                              // pruning API.
                              @Suppress("DEPRECATION")
                              isContainer = true
                          }
                          .pointerInput(Unit) {},
                  propagateMinConstraints = true,
              ) {
                  content()
              }
          }
      }

      /**
       * Material surface is the central metaphor in material design. Each surface exists at a given
  - id: live-androidx-material3-material3-material3-surface-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 141
    endLine: 168
    sha256: da3aeeb5a8f8ab319e31b1f6662ee94f73caddb7fd6525804a159a28947f3d80
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * elevation, which influences how that piece of surface visually relates to other surfaces and how
       * that surface is modified by tonal variance.
       *
       * This version of Surface is responsible for a click handling as well as everything else that a
       * regular Surface does:
       *
       * This clickable Surface is responsible for:
       * 1) Clipping: Surface clips its children to the shape specified by [shape]
       * 2) Borders: If [shape] has a border, then it will also be drawn.
       * 3) Background: Surface fills the shape specified by [shape] with the [color]. If [color] is
       *    [ColorScheme.surface] a color overlay may be applied. The color of the overlay depends on the
       *    [tonalElevation] of this Surface, and the [LocalAbsoluteTonalElevation] set by any parent
       *    surfaces. This ensures that a Surface never appears to have a lower elevation overlay than its
       *    ancestors, by summing the elevation of all previous Surfaces.
       * 4) Content color: Surface uses [contentColor] to specify a preferred color for the content of
       *    this surface - this is used by the [Text] and [Icon] components as a default color. If no
       *    [contentColor] is set, this surface will try and match its background color to a color defined
       *    in the theme [ColorScheme], and return the corresponding content color. For example, if the
       *    [color] of this surface is [ColorScheme.surface], [contentColor] will be set to
       *    [ColorScheme.onSurface]. If [color] is not part of the theme palette, [contentColor] will keep
       *    the same value set above this Surface.
       * 5) Click handling. This version of surface will react to the clicks, calling [onClick] lambda,
       *    updating the [interactionSource] when
       *    [androidx.compose.foundation.interaction.PressInteraction] occurs, and showing ripple
       *    indication in response to press events. If you don't need click handling, consider using the
       *    Surface function that doesn't require [onClick] param. If you need to set a custom label for
       *    the [onClick], apply a `Modifier.semantics { onClick(label = "YOUR_LABEL", action = null) }`
       *    to the Surface.
  - id: live-androidx-material3-material3-material3-surface-lines-169-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 169
    endLine: 203
    sha256: 4baa5077d66797f4a456862a08dc2a104844e4a952d487968ee9898e56a05297
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * 6) Semantics for clicks. Just like with [Modifier.clickable], clickable version of Surface will
       *    produce semantics to indicate that it is clicked. No semantic role is set by default, you may
       *    specify one by passing a desired [androidx.compose.ui.semantics.Role] with a
       *    [Modifier.semantics].
       *
       * To manually retrieve the content color inside a surface, use [LocalContentColor].
       *
       * Clickable surface sample:
       *
       * @sample androidx.compose.material3.samples.ClickableSurfaceSample
       * @param onClick callback to be called when the surface is clicked
       * @param modifier Modifier to be applied to the layout corresponding to the surface
       * @param enabled Controls the enabled state of the surface. When `false`, this surface will not be
       *   clickable
       * @param shape Defines the surface's shape as well its shadow. A shadow is only displayed if the
       *   [tonalElevation] is greater than zero.
       * @param color The background color. Use [Color.Transparent] to have no color.
       * @param contentColor The preferred content color provided by this Surface to its children.
       *   Defaults to either the matching content color for [color], or if [color] is not a color from
       *   the theme, this will keep the same value set above this Surface.
       * @param border Optional border to draw on top of the surface
       * @param tonalElevation When [color] is [ColorScheme.surface], a higher the elevation will result
       *   in a darker color in light theme and lighter color in dark theme.
       * @param shadowElevation The size of the shadow below the surface. Note that It will not affect z
       *   index of the Surface. If you want to change the drawing order you can use `Modifier.zIndex`.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this surface. You can use this to change the surface's appearance
       *   or preview the surface in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param content The content to be displayed on this Surface
       */
      @Composable
      @NonRestartableComposable
      public fun Surface(
          onClick: () -> Unit,
  - id: live-androidx-material3-material3-material3-surface-lines-204-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 204
    endLine: 238
    sha256: abae885b940577c8ef1737a2d3042a25bb396eba9ded573a59e934ce73775a0c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          shape: Shape = RectangleShape,
          color: Color = MaterialTheme.colorScheme.surface,
          contentColor: Color = contentColorFor(color),
          tonalElevation: Dp = 0.dp,
          shadowElevation: Dp = 0.dp,
          border: BorderStroke? = null,
          interactionSource: MutableInteractionSource? = null,
          content: @Composable () -> Unit,
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          val absoluteElevation = LocalAbsoluteTonalElevation.current + tonalElevation
          CompositionLocalProvider(
              LocalContentColor provides contentColor,
              LocalAbsoluteTonalElevation provides absoluteElevation,
          ) {
              Box(
                  modifier =
                      modifier
                          .minimumInteractiveComponentSize()
                          .then(
                              if (
                                  LocalRippleThemeConfiguration.current.focus
                                      is RippleThemeConfiguration.Focus.InsetRing
                              ) {
                                  Modifier.indication(
                                      interactionSource = interactionSource,
                                      indication =
                                          ripple(
                                              focusRingShape = shape,
                                              enablePressIndication = false,
                                              enableFocusIndication = true,
                                              enableDragIndication = false,
  - id: live-androidx-material3-material3-material3-surface-lines-239-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 239
    endLine: 273
    sha256: 2ec57690061cf238cab32f1bfb7e8c70080455b0b62b6550638d1c54762c9178
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                              enableHoverIndication = false,
                                          ),
                                  )
                              } else {
                                  Modifier
                              }
                          )
                          .surface(
                              shape = shape,
                              backgroundColor =
                                  surfaceColorAtElevation(color = color, elevation = absoluteElevation),
                              border = border,
                              shadowElevation = with(LocalDensity.current) { shadowElevation.toPx() },
                          )
                          .clickable(
                              interactionSource = interactionSource,
                              indication =
                                  ripple(
                                      focusRingShape = shape,
                                      enableFocusIndication =
                                          LocalRippleThemeConfiguration.current.focus
                                              !is RippleThemeConfiguration.Focus.InsetRing,
                                  ),
                              enabled = enabled,
                              onClick = onClick,
                          )
                          .childSemantics(),
                  propagateMinConstraints = true,
              ) {
                  content()
              }
          }
      }

      /**
  - id: live-androidx-material3-material3-material3-surface-lines-274-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 274
    endLine: 301
    sha256: d205e166fd35a1facad7fdf541f12f26b5db3b238190d4c2998f7544bc7717f7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Material surface is the central metaphor in material design. Each surface exists at a given
       * elevation, which influences how that piece of surface visually relates to other surfaces and how
       * that surface is modified by tonal variance.
       *
       * This version of Surface is responsible for a selection handling as well as everything else that a
       * regular Surface does:
       *
       * This selectable Surface is responsible for:
       * 1) Clipping: Surface clips its children to the shape specified by [shape]
       * 2) Borders: If [shape] has a border, then it will also be drawn.
       * 3) Background: Surface fills the shape specified by [shape] with the [color]. If [color] is
       *    [ColorScheme.surface] a color overlay may be applied. The color of the overlay depends on the
       *    [tonalElevation] of this Surface, and the [LocalAbsoluteTonalElevation] set by any parent
       *    surfaces. This ensures that a Surface never appears to have a lower elevation overlay than its
       *    ancestors, by summing the elevation of all previous Surfaces.
       * 4) Content color: Surface uses [contentColor] to specify a preferred color for the content of
       *    this surface - this is used by the [Text] and [Icon] components as a default color. If no
       *    [contentColor] is set, this surface will try and match its background color to a color defined
       *    in the theme [ColorScheme], and return the corresponding content color. For example, if the
       *    [color] of this surface is [ColorScheme.surface], [contentColor] will be set to
       *    [ColorScheme.onSurface]. If [color] is not part of the theme palette, [contentColor] will keep
       *    the same value set above this Surface.
       * 5) Click handling. This version of surface will react to the clicks, calling [onClick] lambda,
       *    updating the [interactionSource] when
       *    [androidx.compose.foundation.interaction.PressInteraction] occurs, and showing ripple
       *    indication in response to press events. If you don't need click handling, consider using the
       *    Surface function that doesn't require [onClick] param.
       * 6) Semantics for selection. Just like with [Modifier.selectable], selectable version of Surface
  - id: live-androidx-material3-material3-material3-surface-lines-302-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 302
    endLine: 336
    sha256: 58c9746db3f752ccb5fd3ffc93d58c3c16254bf6eeef76593b3ebfebc6c1af15
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *    will produce semantics to indicate that it is selected. No semantic role is set by default,
       *    you may specify one by passing a desired [androidx.compose.ui.semantics.Role] with a
       *    [Modifier.semantics].
       *
       * To manually retrieve the content color inside a surface, use [LocalContentColor].
       *
       * Selectable surface sample:
       *
       * @sample androidx.compose.material3.samples.SelectableSurfaceSample
       * @param selected whether or not this Surface is selected
       * @param onClick callback to be called when the surface is clicked
       * @param modifier Modifier to be applied to the layout corresponding to the surface
       * @param enabled Controls the enabled state of the surface. When `false`, this surface will not be
       *   clickable
       * @param shape Defines the surface's shape as well its shadow. A shadow is only displayed if the
       *   [tonalElevation] is greater than zero.
       * @param color The background color. Use [Color.Transparent] to have no color.
       * @param contentColor The preferred content color provided by this Surface to its children.
       *   Defaults to either the matching content color for [color], or if [color] is not a color from
       *   the theme, this will keep the same value set above this Surface.
       * @param border Optional border to draw on top of the surface
       * @param tonalElevation When [color] is [ColorScheme.surface], a higher the elevation will result
       *   in a darker color in light theme and lighter color in dark theme.
       * @param shadowElevation The size of the shadow below the surface. Note that It will not affect z
       *   index of the Surface. If you want to change the drawing order you can use `Modifier.zIndex`.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this surface. You can use this to change the surface's appearance
       *   or preview the surface in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param content The content to be displayed on this Surface
       */
      @Composable
      @NonRestartableComposable
      public fun Surface(
          selected: Boolean,
  - id: live-androidx-material3-material3-material3-surface-lines-337-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 337
    endLine: 371
    sha256: a0bd364a6521b840ed0097012258f4352454350ba28b4886bfe4c3c95f125fca
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          shape: Shape = RectangleShape,
          color: Color = MaterialTheme.colorScheme.surface,
          contentColor: Color = contentColorFor(color),
          tonalElevation: Dp = 0.dp,
          shadowElevation: Dp = 0.dp,
          border: BorderStroke? = null,
          interactionSource: MutableInteractionSource? = null,
          content: @Composable () -> Unit,
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          val absoluteElevation = LocalAbsoluteTonalElevation.current + tonalElevation
          CompositionLocalProvider(
              LocalContentColor provides contentColor,
              LocalAbsoluteTonalElevation provides absoluteElevation,
          ) {
              Box(
                  modifier =
                      modifier
                          .minimumInteractiveComponentSize()
                          .then(
                              if (
                                  LocalRippleThemeConfiguration.current.focus
                                      is RippleThemeConfiguration.Focus.InsetRing
                              ) {
                                  Modifier.indication(
                                      interactionSource = interactionSource,
                                      indication =
                                          ripple(
                                              focusRingShape = shape,
                                              enablePressIndication = false,
                                              enableFocusIndication = true,
  - id: live-androidx-material3-material3-material3-surface-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 36
    endLine: 70
    sha256: e968ed98ee0260480c6261d6778187457afa3a809645b435944aa17c6e0f61d1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.draw.clip
      import androidx.compose.ui.draw.drawBehind
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.ColorProducer
      import androidx.compose.ui.graphics.RectangleShape
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.graphics.graphicsLayer
      import androidx.compose.ui.input.pointer.pointerInput
      import androidx.compose.ui.platform.LocalDensity
      import androidx.compose.ui.semantics.isContainer
      import androidx.compose.ui.semantics.semantics
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.dp

      // TODO(b/197880751): Add url to spec on Material.io.
      /**
       * Material surface is the central metaphor in material design. Each surface exists at a given
       * elevation, which influences how that piece of surface visually relates to other surfaces and how
       * that surface is modified by tonal variance.
       *
       * See the other overloads for clickable, selectable, and toggleable surfaces.
       *
       * The Surface is responsible for:
       * 1) Clipping: Surface clips its children to the shape specified by [shape]
       * 2) Borders: If [shape] has a border, then it will also be drawn.
       * 3) Background: Surface fills the shape specified by [shape] with the [color]. If [color] is
       *    [ColorScheme.surface] a color overlay will be applied. The color of the overlay depends on the
       *    [tonalElevation] of this Surface, and the [LocalAbsoluteTonalElevation] set by any parent
       *    surfaces. This ensures that a Surface never appears to have a lower elevation overlay than its
       *    ancestors, by summing the elevation of all previous Surfaces.
       * 4) Content color: Surface uses [contentColor] to specify a preferred color for the content of
       *    this surface - this is used by the [Text] and [Icon] components as a default color.
       *
  - id: live-androidx-material3-material3-material3-surface-lines-372-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 372
    endLine: 406
    sha256: 2baa3815b1996d34ca6ead10d3eacd3738de7cff4fd4529a875cc53e6e66d66c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                              enableDragIndication = false,
                                              enableHoverIndication = false,
                                          ),
                                  )
                              } else {
                                  Modifier
                              }
                          )
                          .surface(
                              shape = shape,
                              backgroundColor =
                                  surfaceColorAtElevation(color = color, elevation = absoluteElevation),
                              border = border,
                              shadowElevation = with(LocalDensity.current) { shadowElevation.toPx() },
                          )
                          .selectable(
                              selected = selected,
                              interactionSource = interactionSource,
                              indication =
                                  ripple(
                                      focusRingShape = shape,
                                      enableFocusIndication =
                                          LocalRippleThemeConfiguration.current.focus
                                              !is RippleThemeConfiguration.Focus.InsetRing,
                                  ),
                              enabled = enabled,
                              onClick = onClick,
                          )
                          .childSemantics(),
                  propagateMinConstraints = true,
              ) {
                  content()
              }
          }
      }
  - id: live-androidx-material3-material3-material3-surface-lines-407-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 407
    endLine: 436
    sha256: b86e3a0798c9a8e1ac15908b5e37131e3f8e7cdbf5e38c6d885c201e2d7ece74
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Material surface is the central metaphor in material design. Each surface exists at a given
       * elevation, which influences how that piece of surface visually relates to other surfaces and how
       * that surface is modified by tonal variance.
       *
       * This version of Surface is responsible for a toggling its checked state as well as everything
       * else that a regular Surface does:
       *
       * This toggleable Surface is responsible for:
       * 1) Clipping: Surface clips its children to the shape specified by [shape]
       * 2) Borders: If [shape] has a border, then it will also be drawn.
       * 3) Background: Surface fills the shape specified by [shape] with the [color]. If [color] is
       *    [ColorScheme.surface] a color overlay may be applied. The color of the overlay depends on the
       *    [tonalElevation] of this Surface, and the [LocalAbsoluteTonalElevation] set by any parent
       *    surfaces. This ensures that a Surface never appears to have a lower elevation overlay than its
       *    ancestors, by summing the elevation of all previous Surfaces.
       * 4) Content color: Surface uses [contentColor] to specify a preferred color for the content of
       *    this surface - this is used by the [Text] and [Icon] components as a default color. If no
       *    [contentColor] is set, this surface will try and match its background color to a color defined
       *    in the theme [ColorScheme], and return the corresponding content color. For example, if the
       *    [color] of this surface is [ColorScheme.surface], [contentColor] will be set to
       *    [ColorScheme.onSurface]. If [color] is not part of the theme palette, [contentColor] will keep
       *    the same value set above this Surface.
       * 5) Click handling. This version of surface will react to the check toggles, calling
       *    [onCheckedChange] lambda, updating the [interactionSource] when
       *    [androidx.compose.foundation.interaction.PressInteraction] occurs, and showing ripple
       *    indication in response to press events. If you don't need check handling, consider using a
       *    Surface function that doesn't require [onCheckedChange] param.
       * 6) Semantics for toggle. Just like with [Modifier.toggleable], toggleable version of Surface will
  - id: live-androidx-material3-material3-material3-surface-lines-437-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 437
    endLine: 471
    sha256: bcb1a4f0230f392ca1d30efcddf742bc256e40ffbe686b838fa9afb3daea7545
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *    produce semantics to indicate that it is checked. No semantic role is set by default, you may
       *    specify one by passing a desired [androidx.compose.ui.semantics.Role] with a
       *    [Modifier.semantics].
       *
       * To manually retrieve the content color inside a surface, use [LocalContentColor].
       *
       * Toggleable surface sample:
       *
       * @sample androidx.compose.material3.samples.ToggleableSurfaceSample
       * @param checked whether or not this Surface is toggled on or off
       * @param onCheckedChange callback to be invoked when the toggleable Surface is clicked
       * @param modifier Modifier to be applied to the layout corresponding to the surface
       * @param enabled Controls the enabled state of the surface. When `false`, this surface will not be
       *   clickable
       * @param shape Defines the surface's shape as well its shadow. A shadow is only displayed if the
       *   [tonalElevation] is greater than zero.
       * @param color The background color. Use [Color.Transparent] to have no color.
       * @param contentColor The preferred content color provided by this Surface to its children.
       *   Defaults to either the matching content color for [color], or if [color] is not a color from
       *   the theme, this will keep the same value set above this Surface.
       * @param border Optional border to draw on top of the surface
       * @param tonalElevation When [color] is [ColorScheme.surface], a higher the elevation will result
       *   in a darker color in light theme and lighter color in dark theme.
       * @param shadowElevation The size of the shadow below the surface. Note that It will not affect z
       *   index of the Surface. If you want to change the drawing order you can use `Modifier.zIndex`.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this surface. You can use this to change the surface's appearance
       *   or preview the surface in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @param content The content to be displayed on this Surface
       */
      @Composable
      @NonRestartableComposable
      public fun Surface(
          checked: Boolean,
  - id: live-androidx-material3-material3-material3-surface-lines-472-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 472
    endLine: 506
    sha256: 5c176bee1ef8d1194a8670addfbac2b33edfb4bedd1f7fad7d54c23dce452aa5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          onCheckedChange: (Boolean) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          shape: Shape = RectangleShape,
          color: Color = MaterialTheme.colorScheme.surface,
          contentColor: Color = contentColorFor(color),
          tonalElevation: Dp = 0.dp,
          shadowElevation: Dp = 0.dp,
          border: BorderStroke? = null,
          interactionSource: MutableInteractionSource? = null,
          content: @Composable () -> Unit,
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          val absoluteElevation = LocalAbsoluteTonalElevation.current + tonalElevation
          CompositionLocalProvider(
              LocalContentColor provides contentColor,
              LocalAbsoluteTonalElevation provides absoluteElevation,
          ) {
              Box(
                  modifier =
                      modifier
                          .minimumInteractiveComponentSize()
                          // Draw the focus ring here if focus rings are enabled
                          .then(
                              if (
                                  LocalRippleThemeConfiguration.current.focus
                                      is RippleThemeConfiguration.Focus.InsetRing
                              ) {
                                  Modifier.indication(
                                      interactionSource = interactionSource,
                                      indication =
                                          ripple(
                                              focusRingShape = shape,
                                              enablePressIndication = false,
  - id: live-androidx-material3-material3-material3-surface-lines-507-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 507
    endLine: 541
    sha256: aacc026e6fc318e00654687d6ee7556beaf6575a778c55d0b31f34604732dacb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                              enableFocusIndication = true,
                                              enableDragIndication = false,
                                              enableHoverIndication = false,
                                          ),
                                  )
                              } else {
                                  Modifier
                              }
                          )
                          .surface(
                              shape = shape,
                              backgroundColor =
                                  surfaceColorAtElevation(color = color, elevation = absoluteElevation),
                              border = border,
                              shadowElevation = with(LocalDensity.current) { shadowElevation.toPx() },
                          )
                          .toggleable(
                              value = checked,
                              interactionSource = interactionSource,
                              indication =
                                  ripple(
                                      focusRingShape = shape,
                                      enableFocusIndication =
                                          LocalRippleThemeConfiguration.current.focus
                                              !is RippleThemeConfiguration.Focus.InsetRing,
                                  ),
                              enabled = enabled,
                              onValueChange = onCheckedChange,
                          )
                          .childSemantics(),
                  propagateMinConstraints = true,
              ) {
                  content()
              }
          }
  - id: live-androidx-material3-material3-material3-surface-lines-542-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 542
    endLine: 576
    sha256: ddfe7f56ffc895824a090bb8d23466e66e1dbb5f67842f60a26f4308150e21ab
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      @Stable
      private fun Modifier.surface(
          shape: Shape,
          backgroundColor: Color,
          border: BorderStroke?,
          shadowElevation: Float,
      ) =
          this.then(
                  if (shadowElevation > 0f) {
                      Modifier.graphicsLayer(
                          shadowElevation = shadowElevation,
                          shape = shape,
                          clip = false,
                      )
                  } else {
                      Modifier
                  }
              )
              .then(if (border != null) Modifier.border(border, shape) else Modifier)
              .background(color = backgroundColor, shape = shape)
              .clip(shape)

      @Composable
      internal fun Surface(
          backgroundColor: ColorProducer,
          modifier: Modifier,
          tonalElevation: Dp = 0.dp,
          shadowElevation: Dp = 0.dp,
          content: @Composable () -> Unit,
      ) {
          val absoluteElevation = LocalAbsoluteTonalElevation.current + tonalElevation
          val tonalElevationEnabled = LocalTonalElevationEnabled.current
          val colorScheme = MaterialTheme.colorScheme
  - id: live-androidx-material3-material3-material3-surface-lines-577-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 577
    endLine: 611
    sha256: a4f8eb41c29f81c14ee823629a4e1afef5f99b277120e6dc19a59b4003ec277b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          CompositionLocalProvider(LocalAbsoluteTonalElevation provides absoluteElevation) {
              Box(
                  modifier =
                      modifier
                          .then(
                              if (shadowElevation > 0.dp) {
                                  Modifier.graphicsLayer {
                                      this.shadowElevation = shadowElevation.toPx()
                                      clip = false
                                  }
                              } else {
                                  Modifier
                              }
                          )
                          .drawBehind {
                              val backgroundColorResolved = backgroundColor()
                              val color =
                                  if (
                                      backgroundColorResolved == colorScheme.surface &&
                                          tonalElevationEnabled
                                  ) {
                                      colorScheme.surfaceColorAtElevation(tonalElevation)
                                  } else {
                                      backgroundColorResolved
                                  }
                              drawRect(color = color)
                          }
              ) {
                  content()
              }
          }
      }

      @Composable
      private fun surfaceColorAtElevation(color: Color, elevation: Dp): Color =
  - id: live-androidx-material3-material3-material3-surface-lines-612-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 612
    endLine: 621
    sha256: 03ac068c67b3ebefeee211bb520c0ddac5715ea9dee08bd30b432ee810ed0446
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          MaterialTheme.colorScheme.applyTonalElevation(color, elevation)

      /**
       * CompositionLocal containing the current absolute elevation provided by [Surface] components. This
       * absolute elevation is a sum of all the previous elevations. Absolute elevation is only used for
       * calculating surface tonal colors, and is *not* used for drawing the shadow in a [Surface].
       */
      // TODO(b/179787782): Add sample after catalog app lands in aosp.
      public val LocalAbsoluteTonalElevation: ProvidableCompositionLocal<Dp> = compositionLocalOf { 0.dp }
  - id: live-androidx-material3-material3-material3-surface-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt
    startLine: 71
    endLine: 105
    sha256: 83dcfcfad4c3acdabb88fd7a6764613e54a042c4e545f200cc73ed0a9e4adb9f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * If no [contentColor] is set, this surface will try and match its background color to a color
       * defined in the theme [ColorScheme], and return the corresponding content color. For example, if
       * the [color] of this surface is [ColorScheme.surface], [contentColor] will be set to
       * [ColorScheme.onSurface]. If [color] is not part of the theme palette, [contentColor] will keep
       * the same value set above this Surface.
       *
       * To manually retrieve the content color inside a surface, use [LocalContentColor].
       * 5) Blocking touch propagation behind the surface.
       *
       * Surface sample:
       *
       * @sample androidx.compose.material3.samples.SurfaceSample
       * @param modifier Modifier to be applied to the layout corresponding to the surface
       * @param shape Defines the surface's shape as well its shadow.
       * @param color The background color. Use [Color.Transparent] to have no color.
       * @param contentColor The preferred content color provided by this Surface to its children.
       *   Defaults to either the matching content color for [color], or if [color] is not a color from
       *   the theme, this will keep the same value set above this Surface.
       * @param tonalElevation When [color] is [ColorScheme.surface], a higher the elevation will result
       *   in a darker color in light theme and lighter color in dark theme.
       * @param shadowElevation The size of the shadow below the surface. To prevent shadow creep, only
       *   apply shadow elevation when absolutely necessary, such as when the surface requires visual
       *   separation from a patterned background. Note that It will not affect z index of the Surface. If
       *   you want to change the drawing order you can use `Modifier.zIndex`.
       * @param border Optional border to draw on top of the surface
       * @param content The content to be displayed on this Surface
       */
      @Composable
      @NonRestartableComposable
      public fun Surface(
          modifier: Modifier = Modifier,
          shape: Shape = RectangleShape,
          color: Color = MaterialTheme.colorScheme.surface,
          contentColor: Color = contentColorFor(color),
          tonalElevation: Dp = 0.dp,
compose:
  id: live-androidx-material3-material3-material3-surface
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-surface-lines-1
      title: androidx.compose.material3 Surface.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-106
      title: androidx.compose.material3 Surface.kt source (lines 106–140)
      aliases:
        - androidx.compose.material3.LocalAbsoluteTonalElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-141
      title: androidx.compose.material3 Surface.kt source (lines 141–168)
      aliases:
        - androidx.compose.material3.Surface
        - androidx.compose.material3.LocalAbsoluteTonalElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-169
      title: androidx.compose.material3 Surface.kt source (lines 169–203)
      aliases:
        - androidx.compose.material3.Surface
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-169-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-204
      title: androidx.compose.material3 Surface.kt source (lines 204–238)
      aliases:
        - androidx.compose.material3.LocalAbsoluteTonalElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-204-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-239
      title: androidx.compose.material3 Surface.kt source (lines 239–273)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-239-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-274
      title: androidx.compose.material3 Surface.kt source (lines 274–301)
      aliases:
        - androidx.compose.material3.Surface
        - androidx.compose.material3.LocalAbsoluteTonalElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-274-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-302
      title: androidx.compose.material3 Surface.kt source (lines 302–336)
      aliases:
        - androidx.compose.material3.Surface
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-302-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-337
      title: androidx.compose.material3 Surface.kt source (lines 337–371)
      aliases:
        - androidx.compose.material3.LocalAbsoluteTonalElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-337-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-36
      title: androidx.compose.material3 Surface.kt source (lines 36–70)
      aliases:
        - androidx.compose.material3.Surface
        - androidx.compose.material3.LocalAbsoluteTonalElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-372
      title: androidx.compose.material3 Surface.kt source (lines 372–406)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-372-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-407
      title: androidx.compose.material3 Surface.kt source (lines 407–436)
      aliases:
        - androidx.compose.material3.Surface
        - androidx.compose.material3.LocalAbsoluteTonalElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-407-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-437
      title: androidx.compose.material3 Surface.kt source (lines 437–471)
      aliases:
        - androidx.compose.material3.Surface
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-437-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-472
      title: androidx.compose.material3 Surface.kt source (lines 472–506)
      aliases:
        - androidx.compose.material3.LocalAbsoluteTonalElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-472-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-507
      title: androidx.compose.material3 Surface.kt source (lines 507–541)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-507-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-542
      title: androidx.compose.material3 Surface.kt source (lines 542–576)
      aliases:
        - androidx.compose.material3.Surface
        - androidx.compose.material3.LocalAbsoluteTonalElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-542-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-577
      title: androidx.compose.material3 Surface.kt source (lines 577–611)
      aliases:
        - androidx.compose.material3.LocalAbsoluteTonalElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-577-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-612
      title: androidx.compose.material3 Surface.kt source (lines 612–621)
      aliases:
        - androidx.compose.material3.Surface
        - androidx.compose.material3.LocalAbsoluteTonalElevation
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-612-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-surface-lines-71
      title: androidx.compose.material3 Surface.kt source (lines 71–105)
      aliases:
        - androidx.compose.material3.Surface
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-surface-lines-71-source
      relatedIds: []
---

# androidx.compose.material3 Surface.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt

## androidx.compose.material3 Surface.kt source (lines 1–35)

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

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.indication
import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.selection.selectable
import androidx.compose.foundation.selection.toggleable
import androidx.compose.material3.internal.childSemantics
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.NonRestartableComposable
import androidx.compose.runtime.ProvidableCompositionLocal
import androidx.compose.runtime.Stable
import androidx.compose.runtime.compositionLocalOf

Sources: [live-androidx-material3-material3-material3-surface-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 106–140)

    shadowElevation: Dp = 0.dp,
    border: BorderStroke? = null,
    content: @Composable () -> Unit,
) {
    val absoluteElevation = LocalAbsoluteTonalElevation.current + tonalElevation
    CompositionLocalProvider(
        LocalContentColor provides contentColor,
        LocalAbsoluteTonalElevation provides absoluteElevation,
    ) {
        Box(
            modifier =
                modifier
                    .surface(
                        shape = shape,
                        backgroundColor =
                            surfaceColorAtElevation(color = color, elevation = absoluteElevation),
                        border = border,
                        shadowElevation = with(LocalDensity.current) { shadowElevation.toPx() },
                    )
                    .semantics(mergeDescendants = false) {
                        // TODO(b/347038246): replace `isContainer` with `isTraversalGroup` with new
                        // pruning API.
                        @Suppress("DEPRECATION")
                        isContainer = true
                    }
                    .pointerInput(Unit) {},
            propagateMinConstraints = true,
        ) {
            content()
        }
    }
}

/**
 * Material surface is the central metaphor in material design. Each surface exists at a given

Sources: [live-androidx-material3-material3-material3-surface-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 141–168)

 * elevation, which influences how that piece of surface visually relates to other surfaces and how
 * that surface is modified by tonal variance.
 *
 * This version of Surface is responsible for a click handling as well as everything else that a
 * regular Surface does:
 *
 * This clickable Surface is responsible for:
 * 1) Clipping: Surface clips its children to the shape specified by [shape]
 * 2) Borders: If [shape] has a border, then it will also be drawn.
 * 3) Background: Surface fills the shape specified by [shape] with the [color]. If [color] is
 *    [ColorScheme.surface] a color overlay may be applied. The color of the overlay depends on the
 *    [tonalElevation] of this Surface, and the [LocalAbsoluteTonalElevation] set by any parent
 *    surfaces. This ensures that a Surface never appears to have a lower elevation overlay than its
 *    ancestors, by summing the elevation of all previous Surfaces.
 * 4) Content color: Surface uses [contentColor] to specify a preferred color for the content of
 *    this surface - this is used by the [Text] and [Icon] components as a default color. If no
 *    [contentColor] is set, this surface will try and match its background color to a color defined
 *    in the theme [ColorScheme], and return the corresponding content color. For example, if the
 *    [color] of this surface is [ColorScheme.surface], [contentColor] will be set to
 *    [ColorScheme.onSurface]. If [color] is not part of the theme palette, [contentColor] will keep
 *    the same value set above this Surface.
 * 5) Click handling. This version of surface will react to the clicks, calling [onClick] lambda,
 *    updating the [interactionSource] when
 *    [androidx.compose.foundation.interaction.PressInteraction] occurs, and showing ripple
 *    indication in response to press events. If you don't need click handling, consider using the
 *    Surface function that doesn't require [onClick] param. If you need to set a custom label for
 *    the [onClick], apply a `Modifier.semantics { onClick(label = "YOUR_LABEL", action = null) }`
 *    to the Surface.

Sources: [live-androidx-material3-material3-material3-surface-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 169–203)

 * 6) Semantics for clicks. Just like with [Modifier.clickable], clickable version of Surface will
 *    produce semantics to indicate that it is clicked. No semantic role is set by default, you may
 *    specify one by passing a desired [androidx.compose.ui.semantics.Role] with a
 *    [Modifier.semantics].
 *
 * To manually retrieve the content color inside a surface, use [LocalContentColor].
 *
 * Clickable surface sample:
 *
 * @sample androidx.compose.material3.samples.ClickableSurfaceSample
 * @param onClick callback to be called when the surface is clicked
 * @param modifier Modifier to be applied to the layout corresponding to the surface
 * @param enabled Controls the enabled state of the surface. When `false`, this surface will not be
 *   clickable
 * @param shape Defines the surface's shape as well its shadow. A shadow is only displayed if the
 *   [tonalElevation] is greater than zero.
 * @param color The background color. Use [Color.Transparent] to have no color.
 * @param contentColor The preferred content color provided by this Surface to its children.
 *   Defaults to either the matching content color for [color], or if [color] is not a color from
 *   the theme, this will keep the same value set above this Surface.
 * @param border Optional border to draw on top of the surface
 * @param tonalElevation When [color] is [ColorScheme.surface], a higher the elevation will result
 *   in a darker color in light theme and lighter color in dark theme.
 * @param shadowElevation The size of the shadow below the surface. Note that It will not affect z
 *   index of the Surface. If you want to change the drawing order you can use `Modifier.zIndex`.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this surface. You can use this to change the surface's appearance
 *   or preview the surface in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param content The content to be displayed on this Surface
 */
@Composable
@NonRestartableComposable
public fun Surface(
    onClick: () -> Unit,

Sources: [live-androidx-material3-material3-material3-surface-lines-169-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 204–238)

    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    shape: Shape = RectangleShape,
    color: Color = MaterialTheme.colorScheme.surface,
    contentColor: Color = contentColorFor(color),
    tonalElevation: Dp = 0.dp,
    shadowElevation: Dp = 0.dp,
    border: BorderStroke? = null,
    interactionSource: MutableInteractionSource? = null,
    content: @Composable () -> Unit,
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    val absoluteElevation = LocalAbsoluteTonalElevation.current + tonalElevation
    CompositionLocalProvider(
        LocalContentColor provides contentColor,
        LocalAbsoluteTonalElevation provides absoluteElevation,
    ) {
        Box(
            modifier =
                modifier
                    .minimumInteractiveComponentSize()
                    .then(
                        if (
                            LocalRippleThemeConfiguration.current.focus
                                is RippleThemeConfiguration.Focus.InsetRing
                        ) {
                            Modifier.indication(
                                interactionSource = interactionSource,
                                indication =
                                    ripple(
                                        focusRingShape = shape,
                                        enablePressIndication = false,
                                        enableFocusIndication = true,
                                        enableDragIndication = false,

Sources: [live-androidx-material3-material3-material3-surface-lines-204-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 239–273)

                                        enableHoverIndication = false,
                                    ),
                            )
                        } else {
                            Modifier
                        }
                    )
                    .surface(
                        shape = shape,
                        backgroundColor =
                            surfaceColorAtElevation(color = color, elevation = absoluteElevation),
                        border = border,
                        shadowElevation = with(LocalDensity.current) { shadowElevation.toPx() },
                    )
                    .clickable(
                        interactionSource = interactionSource,
                        indication =
                            ripple(
                                focusRingShape = shape,
                                enableFocusIndication =
                                    LocalRippleThemeConfiguration.current.focus
                                        !is RippleThemeConfiguration.Focus.InsetRing,
                            ),
                        enabled = enabled,
                        onClick = onClick,
                    )
                    .childSemantics(),
            propagateMinConstraints = true,
        ) {
            content()
        }
    }
}

/**

Sources: [live-androidx-material3-material3-material3-surface-lines-239-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 274–301)

 * Material surface is the central metaphor in material design. Each surface exists at a given
 * elevation, which influences how that piece of surface visually relates to other surfaces and how
 * that surface is modified by tonal variance.
 *
 * This version of Surface is responsible for a selection handling as well as everything else that a
 * regular Surface does:
 *
 * This selectable Surface is responsible for:
 * 1) Clipping: Surface clips its children to the shape specified by [shape]
 * 2) Borders: If [shape] has a border, then it will also be drawn.
 * 3) Background: Surface fills the shape specified by [shape] with the [color]. If [color] is
 *    [ColorScheme.surface] a color overlay may be applied. The color of the overlay depends on the
 *    [tonalElevation] of this Surface, and the [LocalAbsoluteTonalElevation] set by any parent
 *    surfaces. This ensures that a Surface never appears to have a lower elevation overlay than its
 *    ancestors, by summing the elevation of all previous Surfaces.
 * 4) Content color: Surface uses [contentColor] to specify a preferred color for the content of
 *    this surface - this is used by the [Text] and [Icon] components as a default color. If no
 *    [contentColor] is set, this surface will try and match its background color to a color defined
 *    in the theme [ColorScheme], and return the corresponding content color. For example, if the
 *    [color] of this surface is [ColorScheme.surface], [contentColor] will be set to
 *    [ColorScheme.onSurface]. If [color] is not part of the theme palette, [contentColor] will keep
 *    the same value set above this Surface.
 * 5) Click handling. This version of surface will react to the clicks, calling [onClick] lambda,
 *    updating the [interactionSource] when
 *    [androidx.compose.foundation.interaction.PressInteraction] occurs, and showing ripple
 *    indication in response to press events. If you don't need click handling, consider using the
 *    Surface function that doesn't require [onClick] param.
 * 6) Semantics for selection. Just like with [Modifier.selectable], selectable version of Surface

Sources: [live-androidx-material3-material3-material3-surface-lines-274-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 302–336)

 *    will produce semantics to indicate that it is selected. No semantic role is set by default,
 *    you may specify one by passing a desired [androidx.compose.ui.semantics.Role] with a
 *    [Modifier.semantics].
 *
 * To manually retrieve the content color inside a surface, use [LocalContentColor].
 *
 * Selectable surface sample:
 *
 * @sample androidx.compose.material3.samples.SelectableSurfaceSample
 * @param selected whether or not this Surface is selected
 * @param onClick callback to be called when the surface is clicked
 * @param modifier Modifier to be applied to the layout corresponding to the surface
 * @param enabled Controls the enabled state of the surface. When `false`, this surface will not be
 *   clickable
 * @param shape Defines the surface's shape as well its shadow. A shadow is only displayed if the
 *   [tonalElevation] is greater than zero.
 * @param color The background color. Use [Color.Transparent] to have no color.
 * @param contentColor The preferred content color provided by this Surface to its children.
 *   Defaults to either the matching content color for [color], or if [color] is not a color from
 *   the theme, this will keep the same value set above this Surface.
 * @param border Optional border to draw on top of the surface
 * @param tonalElevation When [color] is [ColorScheme.surface], a higher the elevation will result
 *   in a darker color in light theme and lighter color in dark theme.
 * @param shadowElevation The size of the shadow below the surface. Note that It will not affect z
 *   index of the Surface. If you want to change the drawing order you can use `Modifier.zIndex`.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this surface. You can use this to change the surface's appearance
 *   or preview the surface in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param content The content to be displayed on this Surface
 */
@Composable
@NonRestartableComposable
public fun Surface(
    selected: Boolean,

Sources: [live-androidx-material3-material3-material3-surface-lines-302-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 337–371)

    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    shape: Shape = RectangleShape,
    color: Color = MaterialTheme.colorScheme.surface,
    contentColor: Color = contentColorFor(color),
    tonalElevation: Dp = 0.dp,
    shadowElevation: Dp = 0.dp,
    border: BorderStroke? = null,
    interactionSource: MutableInteractionSource? = null,
    content: @Composable () -> Unit,
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    val absoluteElevation = LocalAbsoluteTonalElevation.current + tonalElevation
    CompositionLocalProvider(
        LocalContentColor provides contentColor,
        LocalAbsoluteTonalElevation provides absoluteElevation,
    ) {
        Box(
            modifier =
                modifier
                    .minimumInteractiveComponentSize()
                    .then(
                        if (
                            LocalRippleThemeConfiguration.current.focus
                                is RippleThemeConfiguration.Focus.InsetRing
                        ) {
                            Modifier.indication(
                                interactionSource = interactionSource,
                                indication =
                                    ripple(
                                        focusRingShape = shape,
                                        enablePressIndication = false,
                                        enableFocusIndication = true,

Sources: [live-androidx-material3-material3-material3-surface-lines-337-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 36–70)

import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorProducer
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.semantics.isContainer
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

// TODO(b/197880751): Add url to spec on Material.io.
/**
 * Material surface is the central metaphor in material design. Each surface exists at a given
 * elevation, which influences how that piece of surface visually relates to other surfaces and how
 * that surface is modified by tonal variance.
 *
 * See the other overloads for clickable, selectable, and toggleable surfaces.
 *
 * The Surface is responsible for:
 * 1) Clipping: Surface clips its children to the shape specified by [shape]
 * 2) Borders: If [shape] has a border, then it will also be drawn.
 * 3) Background: Surface fills the shape specified by [shape] with the [color]. If [color] is
 *    [ColorScheme.surface] a color overlay will be applied. The color of the overlay depends on the
 *    [tonalElevation] of this Surface, and the [LocalAbsoluteTonalElevation] set by any parent
 *    surfaces. This ensures that a Surface never appears to have a lower elevation overlay than its
 *    ancestors, by summing the elevation of all previous Surfaces.
 * 4) Content color: Surface uses [contentColor] to specify a preferred color for the content of
 *    this surface - this is used by the [Text] and [Icon] components as a default color.
 *

Sources: [live-androidx-material3-material3-material3-surface-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 372–406)

                                        enableDragIndication = false,
                                        enableHoverIndication = false,
                                    ),
                            )
                        } else {
                            Modifier
                        }
                    )
                    .surface(
                        shape = shape,
                        backgroundColor =
                            surfaceColorAtElevation(color = color, elevation = absoluteElevation),
                        border = border,
                        shadowElevation = with(LocalDensity.current) { shadowElevation.toPx() },
                    )
                    .selectable(
                        selected = selected,
                        interactionSource = interactionSource,
                        indication =
                            ripple(
                                focusRingShape = shape,
                                enableFocusIndication =
                                    LocalRippleThemeConfiguration.current.focus
                                        !is RippleThemeConfiguration.Focus.InsetRing,
                            ),
                        enabled = enabled,
                        onClick = onClick,
                    )
                    .childSemantics(),
            propagateMinConstraints = true,
        ) {
            content()
        }
    }
}

Sources: [live-androidx-material3-material3-material3-surface-lines-372-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 407–436)


/**
 * Material surface is the central metaphor in material design. Each surface exists at a given
 * elevation, which influences how that piece of surface visually relates to other surfaces and how
 * that surface is modified by tonal variance.
 *
 * This version of Surface is responsible for a toggling its checked state as well as everything
 * else that a regular Surface does:
 *
 * This toggleable Surface is responsible for:
 * 1) Clipping: Surface clips its children to the shape specified by [shape]
 * 2) Borders: If [shape] has a border, then it will also be drawn.
 * 3) Background: Surface fills the shape specified by [shape] with the [color]. If [color] is
 *    [ColorScheme.surface] a color overlay may be applied. The color of the overlay depends on the
 *    [tonalElevation] of this Surface, and the [LocalAbsoluteTonalElevation] set by any parent
 *    surfaces. This ensures that a Surface never appears to have a lower elevation overlay than its
 *    ancestors, by summing the elevation of all previous Surfaces.
 * 4) Content color: Surface uses [contentColor] to specify a preferred color for the content of
 *    this surface - this is used by the [Text] and [Icon] components as a default color. If no
 *    [contentColor] is set, this surface will try and match its background color to a color defined
 *    in the theme [ColorScheme], and return the corresponding content color. For example, if the
 *    [color] of this surface is [ColorScheme.surface], [contentColor] will be set to
 *    [ColorScheme.onSurface]. If [color] is not part of the theme palette, [contentColor] will keep
 *    the same value set above this Surface.
 * 5) Click handling. This version of surface will react to the check toggles, calling
 *    [onCheckedChange] lambda, updating the [interactionSource] when
 *    [androidx.compose.foundation.interaction.PressInteraction] occurs, and showing ripple
 *    indication in response to press events. If you don't need check handling, consider using a
 *    Surface function that doesn't require [onCheckedChange] param.
 * 6) Semantics for toggle. Just like with [Modifier.toggleable], toggleable version of Surface will

Sources: [live-androidx-material3-material3-material3-surface-lines-407-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 437–471)

 *    produce semantics to indicate that it is checked. No semantic role is set by default, you may
 *    specify one by passing a desired [androidx.compose.ui.semantics.Role] with a
 *    [Modifier.semantics].
 *
 * To manually retrieve the content color inside a surface, use [LocalContentColor].
 *
 * Toggleable surface sample:
 *
 * @sample androidx.compose.material3.samples.ToggleableSurfaceSample
 * @param checked whether or not this Surface is toggled on or off
 * @param onCheckedChange callback to be invoked when the toggleable Surface is clicked
 * @param modifier Modifier to be applied to the layout corresponding to the surface
 * @param enabled Controls the enabled state of the surface. When `false`, this surface will not be
 *   clickable
 * @param shape Defines the surface's shape as well its shadow. A shadow is only displayed if the
 *   [tonalElevation] is greater than zero.
 * @param color The background color. Use [Color.Transparent] to have no color.
 * @param contentColor The preferred content color provided by this Surface to its children.
 *   Defaults to either the matching content color for [color], or if [color] is not a color from
 *   the theme, this will keep the same value set above this Surface.
 * @param border Optional border to draw on top of the surface
 * @param tonalElevation When [color] is [ColorScheme.surface], a higher the elevation will result
 *   in a darker color in light theme and lighter color in dark theme.
 * @param shadowElevation The size of the shadow below the surface. Note that It will not affect z
 *   index of the Surface. If you want to change the drawing order you can use `Modifier.zIndex`.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this surface. You can use this to change the surface's appearance
 *   or preview the surface in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @param content The content to be displayed on this Surface
 */
@Composable
@NonRestartableComposable
public fun Surface(
    checked: Boolean,

Sources: [live-androidx-material3-material3-material3-surface-lines-437-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 472–506)

    onCheckedChange: (Boolean) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    shape: Shape = RectangleShape,
    color: Color = MaterialTheme.colorScheme.surface,
    contentColor: Color = contentColorFor(color),
    tonalElevation: Dp = 0.dp,
    shadowElevation: Dp = 0.dp,
    border: BorderStroke? = null,
    interactionSource: MutableInteractionSource? = null,
    content: @Composable () -> Unit,
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    val absoluteElevation = LocalAbsoluteTonalElevation.current + tonalElevation
    CompositionLocalProvider(
        LocalContentColor provides contentColor,
        LocalAbsoluteTonalElevation provides absoluteElevation,
    ) {
        Box(
            modifier =
                modifier
                    .minimumInteractiveComponentSize()
                    // Draw the focus ring here if focus rings are enabled
                    .then(
                        if (
                            LocalRippleThemeConfiguration.current.focus
                                is RippleThemeConfiguration.Focus.InsetRing
                        ) {
                            Modifier.indication(
                                interactionSource = interactionSource,
                                indication =
                                    ripple(
                                        focusRingShape = shape,
                                        enablePressIndication = false,

Sources: [live-androidx-material3-material3-material3-surface-lines-472-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 507–541)

                                        enableFocusIndication = true,
                                        enableDragIndication = false,
                                        enableHoverIndication = false,
                                    ),
                            )
                        } else {
                            Modifier
                        }
                    )
                    .surface(
                        shape = shape,
                        backgroundColor =
                            surfaceColorAtElevation(color = color, elevation = absoluteElevation),
                        border = border,
                        shadowElevation = with(LocalDensity.current) { shadowElevation.toPx() },
                    )
                    .toggleable(
                        value = checked,
                        interactionSource = interactionSource,
                        indication =
                            ripple(
                                focusRingShape = shape,
                                enableFocusIndication =
                                    LocalRippleThemeConfiguration.current.focus
                                        !is RippleThemeConfiguration.Focus.InsetRing,
                            ),
                        enabled = enabled,
                        onValueChange = onCheckedChange,
                    )
                    .childSemantics(),
            propagateMinConstraints = true,
        ) {
            content()
        }
    }

Sources: [live-androidx-material3-material3-material3-surface-lines-507-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 542–576)

}

@Stable
private fun Modifier.surface(
    shape: Shape,
    backgroundColor: Color,
    border: BorderStroke?,
    shadowElevation: Float,
) =
    this.then(
            if (shadowElevation > 0f) {
                Modifier.graphicsLayer(
                    shadowElevation = shadowElevation,
                    shape = shape,
                    clip = false,
                )
            } else {
                Modifier
            }
        )
        .then(if (border != null) Modifier.border(border, shape) else Modifier)
        .background(color = backgroundColor, shape = shape)
        .clip(shape)

@Composable
internal fun Surface(
    backgroundColor: ColorProducer,
    modifier: Modifier,
    tonalElevation: Dp = 0.dp,
    shadowElevation: Dp = 0.dp,
    content: @Composable () -> Unit,
) {
    val absoluteElevation = LocalAbsoluteTonalElevation.current + tonalElevation
    val tonalElevationEnabled = LocalTonalElevationEnabled.current
    val colorScheme = MaterialTheme.colorScheme

Sources: [live-androidx-material3-material3-material3-surface-lines-542-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 577–611)

    CompositionLocalProvider(LocalAbsoluteTonalElevation provides absoluteElevation) {
        Box(
            modifier =
                modifier
                    .then(
                        if (shadowElevation > 0.dp) {
                            Modifier.graphicsLayer {
                                this.shadowElevation = shadowElevation.toPx()
                                clip = false
                            }
                        } else {
                            Modifier
                        }
                    )
                    .drawBehind {
                        val backgroundColorResolved = backgroundColor()
                        val color =
                            if (
                                backgroundColorResolved == colorScheme.surface &&
                                    tonalElevationEnabled
                            ) {
                                colorScheme.surfaceColorAtElevation(tonalElevation)
                            } else {
                                backgroundColorResolved
                            }
                        drawRect(color = color)
                    }
        ) {
            content()
        }
    }
}

@Composable
private fun surfaceColorAtElevation(color: Color, elevation: Dp): Color =

Sources: [live-androidx-material3-material3-material3-surface-lines-577-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 612–621)

    MaterialTheme.colorScheme.applyTonalElevation(color, elevation)

/**
 * CompositionLocal containing the current absolute elevation provided by [Surface] components. This
 * absolute elevation is a sum of all the previous elevations. Absolute elevation is only used for
 * calculating surface tonal colors, and is *not* used for drawing the shadow in a [Surface].
 */
// TODO(b/179787782): Add sample after catalog app lands in aosp.
public val LocalAbsoluteTonalElevation: ProvidableCompositionLocal<Dp> = compositionLocalOf { 0.dp }


Sources: [live-androidx-material3-material3-material3-surface-lines-612-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)

## androidx.compose.material3 Surface.kt source (lines 71–105)

 * If no [contentColor] is set, this surface will try and match its background color to a color
 * defined in the theme [ColorScheme], and return the corresponding content color. For example, if
 * the [color] of this surface is [ColorScheme.surface], [contentColor] will be set to
 * [ColorScheme.onSurface]. If [color] is not part of the theme palette, [contentColor] will keep
 * the same value set above this Surface.
 *
 * To manually retrieve the content color inside a surface, use [LocalContentColor].
 * 5) Blocking touch propagation behind the surface.
 *
 * Surface sample:
 *
 * @sample androidx.compose.material3.samples.SurfaceSample
 * @param modifier Modifier to be applied to the layout corresponding to the surface
 * @param shape Defines the surface's shape as well its shadow.
 * @param color The background color. Use [Color.Transparent] to have no color.
 * @param contentColor The preferred content color provided by this Surface to its children.
 *   Defaults to either the matching content color for [color], or if [color] is not a color from
 *   the theme, this will keep the same value set above this Surface.
 * @param tonalElevation When [color] is [ColorScheme.surface], a higher the elevation will result
 *   in a darker color in light theme and lighter color in dark theme.
 * @param shadowElevation The size of the shadow below the surface. To prevent shadow creep, only
 *   apply shadow elevation when absolutely necessary, such as when the surface requires visual
 *   separation from a patterned background. Note that It will not affect z index of the Surface. If
 *   you want to change the drawing order you can use `Modifier.zIndex`.
 * @param border Optional border to draw on top of the surface
 * @param content The content to be displayed on this Surface
 */
@Composable
@NonRestartableComposable
public fun Surface(
    modifier: Modifier = Modifier,
    shape: Shape = RectangleShape,
    color: Color = MaterialTheme.colorScheme.surface,
    contentColor: Color = contentColorFor(color),
    tonalElevation: Dp = 0.dp,

Sources: [live-androidx-material3-material3-material3-surface-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Surface.kt)
