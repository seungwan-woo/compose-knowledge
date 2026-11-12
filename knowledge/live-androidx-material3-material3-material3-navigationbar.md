---
type: reference
title: androidx.compose.material3 NavigationBar.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-navigationbar-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 1
    endLine: 35
    sha256: e75f6caff03aeeacb5273e92e74b371397c2367b3bc7accb2650fe56e7792214
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

      import androidx.compose.animation.animateColorAsState
      import androidx.compose.animation.core.animateFloatAsState
      import androidx.compose.foundation.background
      import androidx.compose.foundation.indication
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.layout.Arrangement
      import androidx.compose.foundation.layout.Box
      import androidx.compose.foundation.layout.Row
      import androidx.compose.foundation.layout.RowScope
      import androidx.compose.foundation.layout.WindowInsets
      import androidx.compose.foundation.layout.WindowInsetsSides
      import androidx.compose.foundation.layout.defaultMinSize
      import androidx.compose.foundation.layout.fillMaxWidth
      import androidx.compose.foundation.layout.only
      import androidx.compose.foundation.layout.windowInsetsPadding
      import androidx.compose.foundation.selection.selectable
  - id: live-androidx-material3-material3-material3-navigationbar-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 106
    endLine: 140
    sha256: 609beb54370a7ddacb2c2721f98abdcf0319cf37d64e21919a04db1238019dad
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param windowInsets a window insets of the navigation bar.
       * @param content the content of this navigation bar, typically 3-5 [NavigationBarItem]s
       */
      @Composable
      public fun NavigationBar(
          modifier: Modifier = Modifier,
          containerColor: Color = NavigationBarDefaults.containerColor,
          contentColor: Color = MaterialTheme.colorScheme.contentColorFor(containerColor),
          tonalElevation: Dp = NavigationBarDefaults.Elevation,
          windowInsets: WindowInsets = NavigationBarDefaults.windowInsets,
          content: @Composable RowScope.() -> Unit,
      ) {
          Surface(
              color = containerColor,
              contentColor = contentColor,
              tonalElevation = tonalElevation,
              modifier = modifier,
          ) {
              Row(
                  modifier =
                      Modifier.fillMaxWidth()
                          .windowInsetsPadding(windowInsets)
                          .defaultMinSize(minHeight = NavigationBarHeight)
                          .selectableGroup(),
                  horizontalArrangement = Arrangement.spacedBy(NavigationBarItemHorizontalPadding),
                  verticalAlignment = Alignment.CenterVertically,
                  content = content,
              )
          }
      }

      /**
       * Material Design navigation bar item.
       *
       * Navigation bars offer a persistent and convenient way to switch between primary destinations in
  - id: live-androidx-material3-material3-material3-navigationbar-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 141
    endLine: 175
    sha256: 620549c66f5855ba22e60c04f1f26f481ec065d0006fcac4421d5d5bb81fa58e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * an app.
       *
       * The recommended configuration for a [NavigationBarItem] depends on how many items there are
       * inside a [NavigationBar]:
       * - Three destinations: Display icons and text labels for all destinations.
       * - Four destinations: Active destinations display an icon and text label. Inactive destinations
       *   display icons, and text labels are recommended.
       * - Five destinations: Active destinations display an icon and text label. Inactive destinations
       *   use icons, and use text labels if space permits.
       *
       * A [NavigationBarItem] always shows text labels (if it exists) when selected. Showing text labels
       * if not selected is controlled by [alwaysShowLabel].
       *
       * @param selected whether this item is selected
       * @param onClick called when this item is clicked
       * @param icon icon for this item, typically an [Icon]
       * @param modifier the [Modifier] to be applied to this item
       * @param enabled controls the enabled state of this item. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param label optional text label for this item
       * @param alwaysShowLabel whether to always show the label for this item. If `false`, the label will
       *   only be shown when this item is selected.
       * @param colors [NavigationBarItemColors] that will be used to resolve the colors used for this
       *   item in different states. See [NavigationBarItemDefaults.colors].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this item. You can use this to change the item's appearance or
       *   preview the item in different states. Note that if `null` is provided, interactions will still
       *   happen internally.
       */
      @Composable
      public fun RowScope.NavigationBarItem(
          selected: Boolean,
          onClick: () -> Unit,
          icon: @Composable () -> Unit,
  - id: live-androidx-material3-material3-material3-navigationbar-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 176
    endLine: 210
    sha256: 4c3b6e527f3aeb52dd44f3a8bb93acd08f6eb03d9584f1b7a04a8566f78ed595
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          label: @Composable (() -> Unit)? = null,
          alwaysShowLabel: Boolean = true,
          colors: NavigationBarItemColors = NavigationBarItemDefaults.colors(),
          interactionSource: MutableInteractionSource? = null,
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          // TODO Load the motionScheme tokens from the component tokens file
          val colorAnimationSpec = MotionSchemeKeyTokens.DefaultEffects.value<Color>()
          val styledIcon =
              @Composable {
                  val iconColor by
                      animateColorAsState(
                          targetValue = colors.iconColor(selected = selected, enabled = enabled),
                          animationSpec = colorAnimationSpec,
                      )
                  // If there's a label, don't have a11y services repeat the icon description.
                  val clearSemantics = label != null && (alwaysShowLabel || selected)
                  Box(modifier = if (clearSemantics) Modifier.clearAndSetSemantics {} else Modifier) {
                      CompositionLocalProvider(LocalContentColor provides iconColor, content = icon)
                  }
              }

          val styledLabel: @Composable (() -> Unit)? = label?.let {
              @Composable {
                  val style = NavigationBarTokens.LabelTextFont.value
                  val textColor by
                      animateColorAsState(
                          targetValue = colors.textColor(selected = selected, enabled = enabled),
                          animationSpec = colorAnimationSpec,
                      )
                  ProvideContentColorTextStyle(
                      contentColor = textColor,
  - id: live-androidx-material3-material3-material3-navigationbar-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 211
    endLine: 245
    sha256: ec6956769d48a4e15b91b3c5436c14212996bbb2d7cbf67e582092abd19bf9fe
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      textStyle = style,
                      content = label,
                  )
              }
          }

          var itemWidth by remember { mutableIntStateOf(0) }

          Box(
              modifier
                  .selectable(
                      selected = selected,
                      onClick = onClick,
                      enabled = enabled,
                      role = Role.Tab,
                      interactionSource = interactionSource,
                      indication = null,
                  )
                  .defaultMinSize(minHeight = NavigationBarHeight)
                  .weight(1f)
                  .onSizeChanged { itemWidth = it.width },
              contentAlignment = Alignment.Center,
              propagateMinConstraints = true,
          ) {
              val alphaAnimationProgress: State<Float> =
                  animateFloatAsState(
                      targetValue = if (selected) 1f else 0f,
                      // TODO Load the motionScheme tokens from the component tokens file
                      animationSpec = MotionSchemeKeyTokens.DefaultEffects.value(),
                  )
              val sizeAnimationProgress: State<Float> =
                  animateFloatAsState(
                      targetValue = if (selected) 1f else 0f,
                      // TODO Load the motionScheme tokens from the component tokens file
                      animationSpec = MotionSchemeKeyTokens.FastSpatial.value(),
  - id: live-androidx-material3-material3-material3-navigationbar-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 246
    endLine: 280
    sha256: ac8ec9ab195b628445a0d14ceacb2f1c4a45fe318e617d8ef2d92316c40faf2f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  )
              // The entire item is selectable, but only the indicator pill shows the ripple. To achieve
              // this, we re-map the coordinates of the item's InteractionSource into the coordinates of
              // the indicator.
              val density = LocalDensity.current
              val calculateDeltaOffset = {
                  with(density) {
                      val indicatorWidth =
                          NavigationBarVerticalItemTokens.ActiveIndicatorWidth.roundToPx()
                      Offset((itemWidth - indicatorWidth).toFloat() / 2, IndicatorVerticalOffset.toPx())
                  }
              }
              val offsetInteractionSource =
                  remember(interactionSource, calculateDeltaOffset) {
                      MappedInteractionSource(interactionSource, calculateDeltaOffset)
                  }

              // The indicator has a width-expansion animation which interferes with the timing of the
              // ripple, which is why they are separate composables
              val indicatorRipple =
                  @Composable {
                      val shape = NavigationBarTokens.ItemActiveIndicatorShape.value
                      Box(
                          Modifier.layoutId(IndicatorRippleLayoutIdTag)
                              .clip(NavigationBarTokens.ItemActiveIndicatorShape.value)
                              .indication(offsetInteractionSource, ripple(focusRingShape = shape))
                      )
                  }
              val indicator =
                  @Composable {
                      Box(
                          Modifier.layoutId(IndicatorLayoutIdTag)
                              .graphicsLayer { alpha = alphaAnimationProgress.value }
                              .background(
                                  color = colors.indicatorColor,
  - id: live-androidx-material3-material3-material3-navigationbar-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 281
    endLine: 315
    sha256: 9fb097bd05dc6317347efaee559cc02961796a7039cc181fb071365bb2400cee
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                                  shape = NavigationBarTokens.ItemActiveIndicatorShape.value,
                              )
                      )
                  }

              NavigationBarItemLayout(
                  indicatorRipple = indicatorRipple,
                  indicator = indicator,
                  icon = styledIcon,
                  label = styledLabel,
                  alwaysShowLabel = alwaysShowLabel,
                  alphaAnimationProgress = { alphaAnimationProgress.value },
                  sizeAnimationProgress = { sizeAnimationProgress.value },
              )
          }
      }

      /** Defaults used in [NavigationBar]. */
      public object NavigationBarDefaults {
          /** Default elevation for a navigation bar. */
          public val Elevation: Dp = ElevationTokens.Level0

          /** Default color for a navigation bar. */
          public val containerColor: Color
              @Composable get() = NavigationBarTokens.ContainerColor.value

          /** Default window insets to be used and consumed by navigation bar */
          public val windowInsets: WindowInsets
              @Composable
              get() =
                  WindowInsets.systemBarsForVisualComponents.only(
                      WindowInsetsSides.Horizontal + WindowInsetsSides.Bottom
                  )
      }
  - id: live-androidx-material3-material3-material3-navigationbar-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 316
    endLine: 350
    sha256: af5668fa475162dbbf1ddd2ac6fb8e05fcf51e7f19926e88ba5f18ee87ac4766
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /** Defaults used in [NavigationBarItem]. */
      public object NavigationBarItemDefaults {

          /**
           * Creates a [NavigationBarItemColors] with the provided colors according to the Material
           * specification.
           */
          @Composable
          public fun colors(): NavigationBarItemColors =
              MaterialTheme.colorScheme.defaultNavigationBarItemColors

          /**
           * Creates a [NavigationBarItemColors] with the provided colors according to the Material
           * specification.
           *
           * @param selectedIconColor the color to use for the icon when the item is selected.
           * @param selectedTextColor the color to use for the text label when the item is selected.
           * @param indicatorColor the color to use for the indicator when the item is selected.
           * @param unselectedIconColor the color to use for the icon when the item is unselected.
           * @param unselectedTextColor the color to use for the text label when the item is unselected.
           * @param disabledIconColor the color to use for the icon when the item is disabled.
           * @param disabledTextColor the color to use for the text label when the item is disabled.
           * @return the resulting [NavigationBarItemColors] used for [NavigationBarItem]
           */
          @Composable
          public fun colors(
              selectedIconColor: Color = Color.Unspecified,
              selectedTextColor: Color = Color.Unspecified,
              indicatorColor: Color = Color.Unspecified,
              unselectedIconColor: Color = Color.Unspecified,
              unselectedTextColor: Color = Color.Unspecified,
              disabledIconColor: Color = Color.Unspecified,
              disabledTextColor: Color = Color.Unspecified,
          ): NavigationBarItemColors =
              MaterialTheme.colorScheme.defaultNavigationBarItemColors.copy(
  - id: live-androidx-material3-material3-material3-navigationbar-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 351
    endLine: 385
    sha256: d32f18824b974a83334b269e7641bb8102b7d4feadbff14cee494137f62804bb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  selectedIconColor = selectedIconColor,
                  selectedTextColor = selectedTextColor,
                  selectedIndicatorColor = indicatorColor,
                  unselectedIconColor = unselectedIconColor,
                  unselectedTextColor = unselectedTextColor,
                  disabledIconColor = disabledIconColor,
                  disabledTextColor = disabledTextColor,
              )

          internal val ColorScheme.defaultNavigationBarItemColors: NavigationBarItemColors
              get() {
                  return defaultNavigationBarItemColorsCached
                      ?: NavigationBarItemColors(
                              selectedIconColor = fromToken(NavigationBarTokens.ItemActiveIconColor),
                              selectedTextColor = fromToken(NavigationBarTokens.ItemActiveLabelTextColor),
                              selectedIndicatorColor =
                                  fromToken(NavigationBarTokens.ItemActiveIndicatorColor),
                              unselectedIconColor = fromToken(NavigationBarTokens.ItemInactiveIconColor),
                              unselectedTextColor =
                                  fromToken(NavigationBarTokens.ItemInactiveLabelTextColor),
                              disabledIconColor =
                                  fromToken(NavigationBarTokens.ItemInactiveIconColor)
                                      .copy(alpha = DisabledAlpha),
                              disabledTextColor =
                                  fromToken(NavigationBarTokens.ItemInactiveLabelTextColor)
                                      .copy(alpha = DisabledAlpha),
                          )
                          .also { defaultNavigationBarItemColorsCached = it }
              }

          @Deprecated(
              "Use overload with disabledIconColor and disabledTextColor",
              level = DeprecationLevel.HIDDEN,
          )
          @Composable
  - id: live-androidx-material3-material3-material3-navigationbar-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 36
    endLine: 70
    sha256: a3dce8f70b688e672f97587ad87ac5db7b44c8dda16aeaf88213dabbfcf5c641
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.foundation.selection.selectableGroup
      import androidx.compose.material3.internal.MappedInteractionSource
      import androidx.compose.material3.internal.ProvideContentColorTextStyle
      import androidx.compose.material3.internal.systemBarsForVisualComponents
      import androidx.compose.material3.tokens.ElevationTokens
      import androidx.compose.material3.tokens.MotionSchemeKeyTokens
      import androidx.compose.material3.tokens.NavigationBarTokens
      import androidx.compose.material3.tokens.NavigationBarVerticalItemTokens
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.CompositionLocalProvider
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.State
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableIntStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.setValue
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.draw.clip
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.graphicsLayer
      import androidx.compose.ui.graphics.takeOrElse
      import androidx.compose.ui.layout.Layout
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.layout.Placeable
      import androidx.compose.ui.layout.layoutId
      import androidx.compose.ui.layout.onSizeChanged
      import androidx.compose.ui.platform.LocalDensity
      import androidx.compose.ui.semantics.Role
      import androidx.compose.ui.semantics.clearAndSetSemantics
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Dp
  - id: live-androidx-material3-material3-material3-navigationbar-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 386
    endLine: 420
    sha256: b68471f544e9f4612ca6afbcdcff29a9ccfd3f3b1f99f2560ce84b014274d914
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public fun colors(
              selectedIconColor: Color = NavigationBarTokens.ItemActiveIconColor.value,
              selectedTextColor: Color = NavigationBarTokens.ItemActiveLabelTextColor.value,
              indicatorColor: Color = NavigationBarTokens.ItemActiveIndicatorColor.value,
              unselectedIconColor: Color = NavigationBarTokens.ItemInactiveIconColor.value,
              unselectedTextColor: Color = NavigationBarTokens.ItemInactiveLabelTextColor.value,
          ): NavigationBarItemColors =
              NavigationBarItemColors(
                  selectedIconColor = selectedIconColor,
                  selectedTextColor = selectedTextColor,
                  selectedIndicatorColor = indicatorColor,
                  unselectedIconColor = unselectedIconColor,
                  unselectedTextColor = unselectedTextColor,
                  disabledIconColor = unselectedIconColor.copy(alpha = DisabledAlpha),
                  disabledTextColor = unselectedTextColor.copy(alpha = DisabledAlpha),
              )
      }

      /**
       * Represents the colors of the various elements of a navigation item.
       *
       * @param selectedIconColor the color to use for the icon when the item is selected.
       * @param selectedTextColor the color to use for the text label when the item is selected.
       * @param selectedIndicatorColor the color to use for the indicator when the item is selected.
       * @param unselectedIconColor the color to use for the icon when the item is unselected.
       * @param unselectedTextColor the color to use for the text label when the item is unselected.
       * @param disabledIconColor the color to use for the icon when the item is disabled.
       * @param disabledTextColor the color to use for the text label when the item is disabled.
       * @constructor create an instance with arbitrary colors.
       */
      @Immutable
      public class NavigationBarItemColors
      public constructor(
          public val selectedIconColor: Color,
          public val selectedTextColor: Color,
  - id: live-androidx-material3-material3-material3-navigationbar-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 421
    endLine: 455
    sha256: ca90135b2285a31f3b5a3764bb24c2ee3c175d9f7e2297cc3cb1abc4de3fd0be
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val selectedIndicatorColor: Color,
          public val unselectedIconColor: Color,
          public val unselectedTextColor: Color,
          public val disabledIconColor: Color,
          public val disabledTextColor: Color,
      ) {
          /**
           * Returns a copy of this NavigationBarItemColors, optionally overriding some of the values.
           * This uses the Color.Unspecified to mean “use the value from the source”
           */
          public fun copy(
              selectedIconColor: Color = this.selectedIconColor,
              selectedTextColor: Color = this.selectedTextColor,
              selectedIndicatorColor: Color = this.selectedIndicatorColor,
              unselectedIconColor: Color = this.unselectedIconColor,
              unselectedTextColor: Color = this.unselectedTextColor,
              disabledIconColor: Color = this.disabledIconColor,
              disabledTextColor: Color = this.disabledTextColor,
          ): NavigationBarItemColors =
              NavigationBarItemColors(
                  selectedIconColor.takeOrElse { this.selectedIconColor },
                  selectedTextColor.takeOrElse { this.selectedTextColor },
                  selectedIndicatorColor.takeOrElse { this.selectedIndicatorColor },
                  unselectedIconColor.takeOrElse { this.unselectedIconColor },
                  unselectedTextColor.takeOrElse { this.unselectedTextColor },
                  disabledIconColor.takeOrElse { this.disabledIconColor },
                  disabledTextColor.takeOrElse { this.disabledTextColor },
              )

          /**
           * Represents the icon color for this item, depending on whether it is [selected].
           *
           * @param selected whether the item is selected
           * @param enabled whether the item is enabled
           */
  - id: live-androidx-material3-material3-material3-navigationbar-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 456
    endLine: 490
    sha256: b6ec7bb1a2304bb52f843252431e1b6d5541d2d3671b77d23182d713434d4584
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @Stable
          internal fun iconColor(selected: Boolean, enabled: Boolean): Color =
              when {
                  !enabled -> disabledIconColor
                  selected -> selectedIconColor
                  else -> unselectedIconColor
              }

          /**
           * Represents the text color for this item, depending on whether it is [selected].
           *
           * @param selected whether the item is selected
           * @param enabled whether the item is enabled
           */
          @Stable
          internal fun textColor(selected: Boolean, enabled: Boolean): Color =
              when {
                  !enabled -> disabledTextColor
                  selected -> selectedTextColor
                  else -> unselectedTextColor
              }

          /** Represents the color of the indicator used for selected items. */
          internal val indicatorColor: Color
              get() = selectedIndicatorColor

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is NavigationBarItemColors) return false

              if (selectedIconColor != other.selectedIconColor) return false
              if (unselectedIconColor != other.unselectedIconColor) return false
              if (selectedTextColor != other.selectedTextColor) return false
              if (unselectedTextColor != other.unselectedTextColor) return false
              if (selectedIndicatorColor != other.selectedIndicatorColor) return false
  - id: live-androidx-material3-material3-material3-navigationbar-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 491
    endLine: 525
    sha256: 12c9f75786b451fc941ebe2b9da83594cd68fbc310aad7bcee18548df89e56a4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (disabledIconColor != other.disabledIconColor) return false
              if (disabledTextColor != other.disabledTextColor) return false

              return true
          }

          override fun hashCode(): Int {
              var result = selectedIconColor.hashCode()
              result = 31 * result + unselectedIconColor.hashCode()
              result = 31 * result + selectedTextColor.hashCode()
              result = 31 * result + unselectedTextColor.hashCode()
              result = 31 * result + selectedIndicatorColor.hashCode()
              result = 31 * result + disabledIconColor.hashCode()
              result = 31 * result + disabledTextColor.hashCode()

              return result
          }
      }

      /**
       * Base layout for a [NavigationBarItem].
       *
       * @param indicatorRipple indicator ripple for this item when it is selected
       * @param indicator indicator for this item when it is selected
       * @param icon icon for this item
       * @param label text label for this item
       * @param alwaysShowLabel whether to always show the label for this item. If false, the label will
       *   only be shown when this item is selected.
       * @param alphaAnimationProgress progress of the animation, where 0 represents the unselected state
       *   of this item and 1 represents the selected state. This value controls the indicator's opacity.
       * @param sizeAnimationProgress progress of the animation, where 0 represents the unselected state
       *   of this item and 1 represents the selected state. This value controls other values such as
       *   indicator size, icon and label positions, etc.
       */
      @Composable
  - id: live-androidx-material3-material3-material3-navigationbar-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 526
    endLine: 560
    sha256: 7267e1e15747f04c69f9e5eecd489a5498b132b1532a802df2dbaa7ca3cb252f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      private fun NavigationBarItemLayout(
          indicatorRipple: @Composable () -> Unit,
          indicator: @Composable () -> Unit,
          icon: @Composable () -> Unit,
          label: @Composable (() -> Unit)?,
          alwaysShowLabel: Boolean,
          alphaAnimationProgress: () -> Float,
          sizeAnimationProgress: () -> Float,
      ) {
          Layout(
              modifier = Modifier.badgeBounds(),
              content = {
                  indicatorRipple()
                  indicator()

                  Box(Modifier.layoutId(IconLayoutIdTag)) { icon() }

                  if (label != null) {
                      Box(
                          Modifier.layoutId(LabelLayoutIdTag).graphicsLayer {
                              alpha = if (alwaysShowLabel) 1f else alphaAnimationProgress()
                          }
                      ) {
                          label()
                      }
                  }
              },
          ) { measurables, constraints ->
              @Suppress("NAME_SHADOWING")
              // Ensure that the progress is >= 0. It may be negative on bouncy springs, for example.
              val animationProgress = sizeAnimationProgress().coerceAtLeast(0f)
              val looseConstraints = constraints.copy(minWidth = 0, minHeight = 0)
              val iconPlaceable =
                  measurables.fastFirst { it.layoutId == IconLayoutIdTag }.measure(looseConstraints)
  - id: live-androidx-material3-material3-material3-navigationbar-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 561
    endLine: 595
    sha256: d2c4720e145eb00a447d2bfc678d5983cfcdfc2d22cffaed9f6caaf47af22c72
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              val totalIndicatorWidth = iconPlaceable.width + (IndicatorHorizontalPadding * 2).roundToPx()
              val animatedIndicatorWidth = (totalIndicatorWidth * animationProgress).roundToInt()
              val indicatorHeight = iconPlaceable.height + (IndicatorVerticalPadding * 2).roundToPx()
              val indicatorRipplePlaceable =
                  measurables
                      .fastFirst { it.layoutId == IndicatorRippleLayoutIdTag }
                      .measure(Constraints.fixed(width = totalIndicatorWidth, height = indicatorHeight))
              val indicatorPlaceable =
                  measurables
                      .fastFirstOrNull { it.layoutId == IndicatorLayoutIdTag }
                      ?.measure(
                          Constraints.fixed(width = animatedIndicatorWidth, height = indicatorHeight)
                      )

              val labelPlaceable = label?.let {
                  measurables.fastFirst { it.layoutId == LabelLayoutIdTag }.measure(looseConstraints)
              }

              if (label == null) {
                  placeIcon(iconPlaceable, indicatorRipplePlaceable, indicatorPlaceable, constraints)
              } else {
                  placeLabelAndIcon(
                      labelPlaceable!!,
                      iconPlaceable,
                      indicatorRipplePlaceable,
                      indicatorPlaceable,
                      constraints,
                      alwaysShowLabel,
                      animationProgress,
                  )
              }
          }
      }

      /** Places the provided [Placeable]s in the center of the provided [constraints]. */
  - id: live-androidx-material3-material3-material3-navigationbar-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 596
    endLine: 630
    sha256: 54b281715af78d080e9aa36e12c4c275af03349a6bb2527310f05a9cbd82dc7b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      private fun MeasureScope.placeIcon(
          iconPlaceable: Placeable,
          indicatorRipplePlaceable: Placeable,
          indicatorPlaceable: Placeable?,
          constraints: Constraints,
      ): MeasureResult {
          val width =
              if (constraints.maxWidth == Constraints.Infinity) {
                  iconPlaceable.width + NavigationBarItemToIconMinimumPadding.roundToPx() * 2
              } else {
                  constraints.maxWidth
              }
          val height = constraints.constrainHeight(NavigationBarHeight.roundToPx())

          val iconX = (width - iconPlaceable.width) / 2
          val iconY = (height - iconPlaceable.height) / 2

          val rippleX = (width - indicatorRipplePlaceable.width) / 2
          val rippleY = (height - indicatorRipplePlaceable.height) / 2

          return layout(width, height) {
              indicatorPlaceable?.let {
                  val indicatorX = (width - it.width) / 2
                  val indicatorY = (height - it.height) / 2
                  it.placeRelative(indicatorX, indicatorY)
              }
              iconPlaceable.placeRelative(iconX, iconY)
              indicatorRipplePlaceable.placeRelative(rippleX, rippleY)
          }
      }

      /**
       * Places the provided [Placeable]s in the correct position, depending on [alwaysShowLabel] and
       * [animationProgress].
       *
  - id: live-androidx-material3-material3-material3-navigationbar-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 631
    endLine: 665
    sha256: 485a5ad1b56e3d0f45a0b4b8b873bf9f65aadbe8a1140c7cc4008fc3df6f7e98
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * When [alwaysShowLabel] is true, the positions do not move. The [iconPlaceable] and
       * [labelPlaceable] will be placed together in the center with padding between them, according to
       * the spec.
       *
       * When [animationProgress] is 1 (representing the selected state), the positions will be the same
       * as above.
       *
       * Otherwise, when [animationProgress] is 0, [iconPlaceable] will be placed in the center, like in
       * [placeIcon], and [labelPlaceable] will not be shown.
       *
       * When [animationProgress] is animating between these values, [iconPlaceable] and [labelPlaceable]
       * will be placed at a corresponding interpolated position.
       *
       * [indicatorRipplePlaceable] and [indicatorPlaceable] will always be placed in such a way that to
       * share the same center as [iconPlaceable].
       *
       * @param labelPlaceable text label placeable inside this item
       * @param iconPlaceable icon placeable inside this item
       * @param indicatorRipplePlaceable indicator ripple placeable inside this item
       * @param indicatorPlaceable indicator placeable inside this item, if it exists
       * @param constraints constraints of the item
       * @param alwaysShowLabel whether to always show the label for this item. If true, icon and label
       *   positions will not change. If false, positions transition between 'centered icon with no label'
       *   and 'top aligned icon with label'.
       * @param animationProgress progress of the animation, where 0 represents the unselected state of
       *   this item and 1 represents the selected state. Values between 0 and 1 interpolate positions of
       *   the icon and label.
       */
      private fun MeasureScope.placeLabelAndIcon(
          labelPlaceable: Placeable,
          iconPlaceable: Placeable,
          indicatorRipplePlaceable: Placeable,
          indicatorPlaceable: Placeable?,
          constraints: Constraints,
          alwaysShowLabel: Boolean,
  - id: live-androidx-material3-material3-material3-navigationbar-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 666
    endLine: 700
    sha256: 4b878a05ed0f5bc7d8646eb4e28f7ac5bee89368e0aaea6136fd05c5780832cb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          animationProgress: Float,
      ): MeasureResult {
          val contentHeight =
              iconPlaceable.height +
                  IndicatorVerticalPadding.toPx() +
                  NavigationBarIndicatorToLabelPadding.toPx() +
                  labelPlaceable.height
          val contentVerticalPadding =
              ((constraints.minHeight - contentHeight) / 2).coerceAtLeast(IndicatorVerticalPadding.toPx())
          val height = contentHeight + contentVerticalPadding * 2

          // Icon (when selected) should be `contentVerticalPadding` from top
          val selectedIconY = contentVerticalPadding
          val unselectedIconY =
              if (alwaysShowLabel) selectedIconY else (height - iconPlaceable.height) / 2

          // How far the icon needs to move between unselected and selected states.
          val iconDistance = unselectedIconY - selectedIconY

          // The interpolated fraction of iconDistance that all placeables need to move based on
          // animationProgress.
          val offset = iconDistance * (1 - animationProgress)

          // Label should be fixed padding below icon
          val labelY =
              selectedIconY +
                  iconPlaceable.height +
                  IndicatorVerticalPadding.toPx() +
                  NavigationBarIndicatorToLabelPadding.toPx()

          val containerWidth =
              if (constraints.maxWidth == Constraints.Infinity) {
                  iconPlaceable.width + NavigationBarItemToIconMinimumPadding.roundToPx() * 2
              } else {
                  constraints.maxWidth
  - id: live-androidx-material3-material3-material3-navigationbar-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 701
    endLine: 735
    sha256: 6b9a83db59da491f646ad00094e69f36d00b49c32679806366208071867395dd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }

          val labelX = (containerWidth - labelPlaceable.width) / 2
          val iconX = (containerWidth - iconPlaceable.width) / 2

          val rippleX = (containerWidth - indicatorRipplePlaceable.width) / 2
          val rippleY = selectedIconY - IndicatorVerticalPadding.toPx()

          return layout(containerWidth, height.roundToInt()) {
              indicatorPlaceable?.let {
                  val indicatorX = (containerWidth - it.width) / 2
                  val indicatorY = selectedIconY - IndicatorVerticalPadding.roundToPx()
                  it.placeRelative(indicatorX, (indicatorY + offset).roundToInt())
              }
              if (alwaysShowLabel || animationProgress != 0f) {
                  labelPlaceable.placeRelative(labelX, (labelY + offset).roundToInt())
              }
              iconPlaceable.placeRelative(iconX, (selectedIconY + offset).roundToInt())
              indicatorRipplePlaceable.placeRelative(rippleX, (rippleY + offset).roundToInt())
          }
      }

      private const val IndicatorRippleLayoutIdTag: String = "indicatorRipple"

      private const val IndicatorLayoutIdTag: String = "indicator"

      private const val IconLayoutIdTag: String = "icon"

      private const val LabelLayoutIdTag: String = "label"

      private val NavigationBarHeight: Dp
          get() = NavigationBarTokens.TallContainerHeight

      /*@VisibleForTesting*/
      internal val NavigationBarItemHorizontalPadding: Dp
  - id: live-androidx-material3-material3-material3-navigationbar-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 71
    endLine: 105
    sha256: 868160b0cc6066d65e93197b8ad4bcf668b99fe36823eaf3a37b6fc3504936c9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.unit.constrainHeight
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.util.fastFirst
      import androidx.compose.ui.util.fastFirstOrNull
      import kotlin.math.roundToInt

      /**
       * [Material Design bottom navigation
       * bar](https://m3.material.io/components/navigation-bar/overview)
       *
       * Navigation bars offer a persistent and convenient way to switch between primary destinations in
       * an app.
       *
       * ![Navigation bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/navigation-bar.png)
       *
       * [NavigationBar] should contain three to five [NavigationBarItem]s, each representing a singular
       * destination.
       *
       * A simple example looks like:
       *
       * @sample androidx.compose.material3.samples.NavigationBarSample
       *
       * See [NavigationBarItem] for configuration specific to each item, and not the overall
       * [NavigationBar] component.
       *
       * @param modifier the [Modifier] to be applied to this navigation bar
       * @param containerColor the color used for the background of this navigation bar. Use
       *   [Color.Transparent] to have no color.
       * @param contentColor the preferred color for content inside this navigation bar. Defaults to
       *   either the matching content color for [containerColor], or to the current [LocalContentColor]
       *   if [containerColor] is not a color from the theme.
       * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
       *   overlay is applied on top of the container. A higher tonal elevation value will result in a
       *   darker color in light theme and lighter color in dark theme. See also: [Surface].
  - id: live-androidx-material3-material3-material3-navigationbar-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt
    startLine: 736
    endLine: 757
    sha256: bd8520b2690b6ed39dbefa476d1f960635b5267f61953094604a97a7d4c0f2dd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          get() = 8.dp

      /*@VisibleForTesting*/
      internal val NavigationBarIndicatorToLabelPadding: Dp
          get() = 4.dp

      private val IndicatorHorizontalPadding: Dp =
          (NavigationBarVerticalItemTokens.ActiveIndicatorWidth -
              NavigationBarVerticalItemTokens.IconSize) / 2

      /*@VisibleForTesting*/
      internal val IndicatorVerticalPadding: Dp =
          (NavigationBarVerticalItemTokens.ActiveIndicatorHeight -
              NavigationBarVerticalItemTokens.IconSize) / 2

      private val IndicatorVerticalOffset: Dp
          get() = 12.dp

      /*@VisibleForTesting*/
      internal val NavigationBarItemToIconMinimumPadding: Dp
          get() = 44.dp
compose:
  id: live-androidx-material3-material3-material3-navigationbar
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-navigationbar-lines-1
      title: androidx.compose.material3 NavigationBar.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-106
      title: androidx.compose.material3 NavigationBar.kt source (lines 106–140)
      aliases:
        - androidx.compose.material3.NavigationBar
        - androidx.compose.material3.NavigationBarItem
        - androidx.compose.material3.NavigationBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-141
      title: androidx.compose.material3 NavigationBar.kt source (lines 141–175)
      aliases:
        - androidx.compose.material3.NavigationBar
        - androidx.compose.material3.NavigationBarItem
        - androidx.compose.material3.NavigationBarItemDefaults
        - androidx.compose.material3.NavigationBarItemColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-176
      title: androidx.compose.material3 NavigationBar.kt source (lines 176–210)
      aliases:
        - androidx.compose.material3.NavigationBarItemDefaults
        - androidx.compose.material3.NavigationBarItemColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-176-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-211
      title: androidx.compose.material3 NavigationBar.kt source (lines 211–245)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-211-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-246
      title: androidx.compose.material3 NavigationBar.kt source (lines 246–280)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-246-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-281
      title: androidx.compose.material3 NavigationBar.kt source (lines 281–315)
      aliases:
        - androidx.compose.material3.NavigationBar
        - androidx.compose.material3.NavigationBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-281-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-316
      title: androidx.compose.material3 NavigationBar.kt source (lines 316–350)
      aliases:
        - androidx.compose.material3.NavigationBarItem
        - androidx.compose.material3.NavigationBarItemDefaults
        - androidx.compose.material3.NavigationBarItemColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-316-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-351
      title: androidx.compose.material3 NavigationBar.kt source (lines 351–385)
      aliases:
        - androidx.compose.material3.NavigationBarItemColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-351-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-36
      title: androidx.compose.material3 NavigationBar.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-386
      title: androidx.compose.material3 NavigationBar.kt source (lines 386–420)
      aliases:
        - androidx.compose.material3.NavigationBarItemColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-386-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-421
      title: androidx.compose.material3 NavigationBar.kt source (lines 421–455)
      aliases:
        - androidx.compose.material3.NavigationBarItemColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-421-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-456
      title: androidx.compose.material3 NavigationBar.kt source (lines 456–490)
      aliases:
        - androidx.compose.material3.NavigationBarItemColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-456-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-491
      title: androidx.compose.material3 NavigationBar.kt source (lines 491–525)
      aliases:
        - androidx.compose.material3.NavigationBarItem
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-491-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-526
      title: androidx.compose.material3 NavigationBar.kt source (lines 526–560)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-526-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-561
      title: androidx.compose.material3 NavigationBar.kt source (lines 561–595)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-561-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-596
      title: androidx.compose.material3 NavigationBar.kt source (lines 596–630)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-596-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-631
      title: androidx.compose.material3 NavigationBar.kt source (lines 631–665)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-631-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-666
      title: androidx.compose.material3 NavigationBar.kt source (lines 666–700)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-666-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-701
      title: androidx.compose.material3 NavigationBar.kt source (lines 701–735)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-701-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-71
      title: androidx.compose.material3 NavigationBar.kt source (lines 71–105)
      aliases:
        - androidx.compose.material3.NavigationBar
        - androidx.compose.material3.NavigationBarItem
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-71-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-navigationbar-lines-736
      title: androidx.compose.material3 NavigationBar.kt source (lines 736–757)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-navigationbar-lines-736-source
      relatedIds: []
---

# androidx.compose.material3 NavigationBar.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt

## androidx.compose.material3 NavigationBar.kt source (lines 1–35)

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

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.indication
import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.WindowInsetsSides
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.only
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.foundation.selection.selectable

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 106–140)

 * @param windowInsets a window insets of the navigation bar.
 * @param content the content of this navigation bar, typically 3-5 [NavigationBarItem]s
 */
@Composable
public fun NavigationBar(
    modifier: Modifier = Modifier,
    containerColor: Color = NavigationBarDefaults.containerColor,
    contentColor: Color = MaterialTheme.colorScheme.contentColorFor(containerColor),
    tonalElevation: Dp = NavigationBarDefaults.Elevation,
    windowInsets: WindowInsets = NavigationBarDefaults.windowInsets,
    content: @Composable RowScope.() -> Unit,
) {
    Surface(
        color = containerColor,
        contentColor = contentColor,
        tonalElevation = tonalElevation,
        modifier = modifier,
    ) {
        Row(
            modifier =
                Modifier.fillMaxWidth()
                    .windowInsetsPadding(windowInsets)
                    .defaultMinSize(minHeight = NavigationBarHeight)
                    .selectableGroup(),
            horizontalArrangement = Arrangement.spacedBy(NavigationBarItemHorizontalPadding),
            verticalAlignment = Alignment.CenterVertically,
            content = content,
        )
    }
}

/**
 * Material Design navigation bar item.
 *
 * Navigation bars offer a persistent and convenient way to switch between primary destinations in

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 141–175)

 * an app.
 *
 * The recommended configuration for a [NavigationBarItem] depends on how many items there are
 * inside a [NavigationBar]:
 * - Three destinations: Display icons and text labels for all destinations.
 * - Four destinations: Active destinations display an icon and text label. Inactive destinations
 *   display icons, and text labels are recommended.
 * - Five destinations: Active destinations display an icon and text label. Inactive destinations
 *   use icons, and use text labels if space permits.
 *
 * A [NavigationBarItem] always shows text labels (if it exists) when selected. Showing text labels
 * if not selected is controlled by [alwaysShowLabel].
 *
 * @param selected whether this item is selected
 * @param onClick called when this item is clicked
 * @param icon icon for this item, typically an [Icon]
 * @param modifier the [Modifier] to be applied to this item
 * @param enabled controls the enabled state of this item. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param label optional text label for this item
 * @param alwaysShowLabel whether to always show the label for this item. If `false`, the label will
 *   only be shown when this item is selected.
 * @param colors [NavigationBarItemColors] that will be used to resolve the colors used for this
 *   item in different states. See [NavigationBarItemDefaults.colors].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this item. You can use this to change the item's appearance or
 *   preview the item in different states. Note that if `null` is provided, interactions will still
 *   happen internally.
 */
@Composable
public fun RowScope.NavigationBarItem(
    selected: Boolean,
    onClick: () -> Unit,
    icon: @Composable () -> Unit,

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 176–210)

    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    label: @Composable (() -> Unit)? = null,
    alwaysShowLabel: Boolean = true,
    colors: NavigationBarItemColors = NavigationBarItemDefaults.colors(),
    interactionSource: MutableInteractionSource? = null,
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    // TODO Load the motionScheme tokens from the component tokens file
    val colorAnimationSpec = MotionSchemeKeyTokens.DefaultEffects.value<Color>()
    val styledIcon =
        @Composable {
            val iconColor by
                animateColorAsState(
                    targetValue = colors.iconColor(selected = selected, enabled = enabled),
                    animationSpec = colorAnimationSpec,
                )
            // If there's a label, don't have a11y services repeat the icon description.
            val clearSemantics = label != null && (alwaysShowLabel || selected)
            Box(modifier = if (clearSemantics) Modifier.clearAndSetSemantics {} else Modifier) {
                CompositionLocalProvider(LocalContentColor provides iconColor, content = icon)
            }
        }

    val styledLabel: @Composable (() -> Unit)? = label?.let {
        @Composable {
            val style = NavigationBarTokens.LabelTextFont.value
            val textColor by
                animateColorAsState(
                    targetValue = colors.textColor(selected = selected, enabled = enabled),
                    animationSpec = colorAnimationSpec,
                )
            ProvideContentColorTextStyle(
                contentColor = textColor,

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 211–245)

                textStyle = style,
                content = label,
            )
        }
    }

    var itemWidth by remember { mutableIntStateOf(0) }

    Box(
        modifier
            .selectable(
                selected = selected,
                onClick = onClick,
                enabled = enabled,
                role = Role.Tab,
                interactionSource = interactionSource,
                indication = null,
            )
            .defaultMinSize(minHeight = NavigationBarHeight)
            .weight(1f)
            .onSizeChanged { itemWidth = it.width },
        contentAlignment = Alignment.Center,
        propagateMinConstraints = true,
    ) {
        val alphaAnimationProgress: State<Float> =
            animateFloatAsState(
                targetValue = if (selected) 1f else 0f,
                // TODO Load the motionScheme tokens from the component tokens file
                animationSpec = MotionSchemeKeyTokens.DefaultEffects.value(),
            )
        val sizeAnimationProgress: State<Float> =
            animateFloatAsState(
                targetValue = if (selected) 1f else 0f,
                // TODO Load the motionScheme tokens from the component tokens file
                animationSpec = MotionSchemeKeyTokens.FastSpatial.value(),

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 246–280)

            )
        // The entire item is selectable, but only the indicator pill shows the ripple. To achieve
        // this, we re-map the coordinates of the item's InteractionSource into the coordinates of
        // the indicator.
        val density = LocalDensity.current
        val calculateDeltaOffset = {
            with(density) {
                val indicatorWidth =
                    NavigationBarVerticalItemTokens.ActiveIndicatorWidth.roundToPx()
                Offset((itemWidth - indicatorWidth).toFloat() / 2, IndicatorVerticalOffset.toPx())
            }
        }
        val offsetInteractionSource =
            remember(interactionSource, calculateDeltaOffset) {
                MappedInteractionSource(interactionSource, calculateDeltaOffset)
            }

        // The indicator has a width-expansion animation which interferes with the timing of the
        // ripple, which is why they are separate composables
        val indicatorRipple =
            @Composable {
                val shape = NavigationBarTokens.ItemActiveIndicatorShape.value
                Box(
                    Modifier.layoutId(IndicatorRippleLayoutIdTag)
                        .clip(NavigationBarTokens.ItemActiveIndicatorShape.value)
                        .indication(offsetInteractionSource, ripple(focusRingShape = shape))
                )
            }
        val indicator =
            @Composable {
                Box(
                    Modifier.layoutId(IndicatorLayoutIdTag)
                        .graphicsLayer { alpha = alphaAnimationProgress.value }
                        .background(
                            color = colors.indicatorColor,

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 281–315)

                            shape = NavigationBarTokens.ItemActiveIndicatorShape.value,
                        )
                )
            }

        NavigationBarItemLayout(
            indicatorRipple = indicatorRipple,
            indicator = indicator,
            icon = styledIcon,
            label = styledLabel,
            alwaysShowLabel = alwaysShowLabel,
            alphaAnimationProgress = { alphaAnimationProgress.value },
            sizeAnimationProgress = { sizeAnimationProgress.value },
        )
    }
}

/** Defaults used in [NavigationBar]. */
public object NavigationBarDefaults {
    /** Default elevation for a navigation bar. */
    public val Elevation: Dp = ElevationTokens.Level0

    /** Default color for a navigation bar. */
    public val containerColor: Color
        @Composable get() = NavigationBarTokens.ContainerColor.value

    /** Default window insets to be used and consumed by navigation bar */
    public val windowInsets: WindowInsets
        @Composable
        get() =
            WindowInsets.systemBarsForVisualComponents.only(
                WindowInsetsSides.Horizontal + WindowInsetsSides.Bottom
            )
}


Sources: [live-androidx-material3-material3-material3-navigationbar-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 316–350)

/** Defaults used in [NavigationBarItem]. */
public object NavigationBarItemDefaults {

    /**
     * Creates a [NavigationBarItemColors] with the provided colors according to the Material
     * specification.
     */
    @Composable
    public fun colors(): NavigationBarItemColors =
        MaterialTheme.colorScheme.defaultNavigationBarItemColors

    /**
     * Creates a [NavigationBarItemColors] with the provided colors according to the Material
     * specification.
     *
     * @param selectedIconColor the color to use for the icon when the item is selected.
     * @param selectedTextColor the color to use for the text label when the item is selected.
     * @param indicatorColor the color to use for the indicator when the item is selected.
     * @param unselectedIconColor the color to use for the icon when the item is unselected.
     * @param unselectedTextColor the color to use for the text label when the item is unselected.
     * @param disabledIconColor the color to use for the icon when the item is disabled.
     * @param disabledTextColor the color to use for the text label when the item is disabled.
     * @return the resulting [NavigationBarItemColors] used for [NavigationBarItem]
     */
    @Composable
    public fun colors(
        selectedIconColor: Color = Color.Unspecified,
        selectedTextColor: Color = Color.Unspecified,
        indicatorColor: Color = Color.Unspecified,
        unselectedIconColor: Color = Color.Unspecified,
        unselectedTextColor: Color = Color.Unspecified,
        disabledIconColor: Color = Color.Unspecified,
        disabledTextColor: Color = Color.Unspecified,
    ): NavigationBarItemColors =
        MaterialTheme.colorScheme.defaultNavigationBarItemColors.copy(

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 351–385)

            selectedIconColor = selectedIconColor,
            selectedTextColor = selectedTextColor,
            selectedIndicatorColor = indicatorColor,
            unselectedIconColor = unselectedIconColor,
            unselectedTextColor = unselectedTextColor,
            disabledIconColor = disabledIconColor,
            disabledTextColor = disabledTextColor,
        )

    internal val ColorScheme.defaultNavigationBarItemColors: NavigationBarItemColors
        get() {
            return defaultNavigationBarItemColorsCached
                ?: NavigationBarItemColors(
                        selectedIconColor = fromToken(NavigationBarTokens.ItemActiveIconColor),
                        selectedTextColor = fromToken(NavigationBarTokens.ItemActiveLabelTextColor),
                        selectedIndicatorColor =
                            fromToken(NavigationBarTokens.ItemActiveIndicatorColor),
                        unselectedIconColor = fromToken(NavigationBarTokens.ItemInactiveIconColor),
                        unselectedTextColor =
                            fromToken(NavigationBarTokens.ItemInactiveLabelTextColor),
                        disabledIconColor =
                            fromToken(NavigationBarTokens.ItemInactiveIconColor)
                                .copy(alpha = DisabledAlpha),
                        disabledTextColor =
                            fromToken(NavigationBarTokens.ItemInactiveLabelTextColor)
                                .copy(alpha = DisabledAlpha),
                    )
                    .also { defaultNavigationBarItemColorsCached = it }
        }

    @Deprecated(
        "Use overload with disabledIconColor and disabledTextColor",
        level = DeprecationLevel.HIDDEN,
    )
    @Composable

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 36–70)

import androidx.compose.foundation.selection.selectableGroup
import androidx.compose.material3.internal.MappedInteractionSource
import androidx.compose.material3.internal.ProvideContentColorTextStyle
import androidx.compose.material3.internal.systemBarsForVisualComponents
import androidx.compose.material3.tokens.ElevationTokens
import androidx.compose.material3.tokens.MotionSchemeKeyTokens
import androidx.compose.material3.tokens.NavigationBarTokens
import androidx.compose.material3.tokens.NavigationBarVerticalItemTokens
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.graphics.takeOrElse
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.layout.Placeable
import androidx.compose.ui.layout.layoutId
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.clearAndSetSemantics
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Dp

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 386–420)

    public fun colors(
        selectedIconColor: Color = NavigationBarTokens.ItemActiveIconColor.value,
        selectedTextColor: Color = NavigationBarTokens.ItemActiveLabelTextColor.value,
        indicatorColor: Color = NavigationBarTokens.ItemActiveIndicatorColor.value,
        unselectedIconColor: Color = NavigationBarTokens.ItemInactiveIconColor.value,
        unselectedTextColor: Color = NavigationBarTokens.ItemInactiveLabelTextColor.value,
    ): NavigationBarItemColors =
        NavigationBarItemColors(
            selectedIconColor = selectedIconColor,
            selectedTextColor = selectedTextColor,
            selectedIndicatorColor = indicatorColor,
            unselectedIconColor = unselectedIconColor,
            unselectedTextColor = unselectedTextColor,
            disabledIconColor = unselectedIconColor.copy(alpha = DisabledAlpha),
            disabledTextColor = unselectedTextColor.copy(alpha = DisabledAlpha),
        )
}

/**
 * Represents the colors of the various elements of a navigation item.
 *
 * @param selectedIconColor the color to use for the icon when the item is selected.
 * @param selectedTextColor the color to use for the text label when the item is selected.
 * @param selectedIndicatorColor the color to use for the indicator when the item is selected.
 * @param unselectedIconColor the color to use for the icon when the item is unselected.
 * @param unselectedTextColor the color to use for the text label when the item is unselected.
 * @param disabledIconColor the color to use for the icon when the item is disabled.
 * @param disabledTextColor the color to use for the text label when the item is disabled.
 * @constructor create an instance with arbitrary colors.
 */
@Immutable
public class NavigationBarItemColors
public constructor(
    public val selectedIconColor: Color,
    public val selectedTextColor: Color,

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 421–455)

    public val selectedIndicatorColor: Color,
    public val unselectedIconColor: Color,
    public val unselectedTextColor: Color,
    public val disabledIconColor: Color,
    public val disabledTextColor: Color,
) {
    /**
     * Returns a copy of this NavigationBarItemColors, optionally overriding some of the values.
     * This uses the Color.Unspecified to mean “use the value from the source”
     */
    public fun copy(
        selectedIconColor: Color = this.selectedIconColor,
        selectedTextColor: Color = this.selectedTextColor,
        selectedIndicatorColor: Color = this.selectedIndicatorColor,
        unselectedIconColor: Color = this.unselectedIconColor,
        unselectedTextColor: Color = this.unselectedTextColor,
        disabledIconColor: Color = this.disabledIconColor,
        disabledTextColor: Color = this.disabledTextColor,
    ): NavigationBarItemColors =
        NavigationBarItemColors(
            selectedIconColor.takeOrElse { this.selectedIconColor },
            selectedTextColor.takeOrElse { this.selectedTextColor },
            selectedIndicatorColor.takeOrElse { this.selectedIndicatorColor },
            unselectedIconColor.takeOrElse { this.unselectedIconColor },
            unselectedTextColor.takeOrElse { this.unselectedTextColor },
            disabledIconColor.takeOrElse { this.disabledIconColor },
            disabledTextColor.takeOrElse { this.disabledTextColor },
        )

    /**
     * Represents the icon color for this item, depending on whether it is [selected].
     *
     * @param selected whether the item is selected
     * @param enabled whether the item is enabled
     */

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 456–490)

    @Stable
    internal fun iconColor(selected: Boolean, enabled: Boolean): Color =
        when {
            !enabled -> disabledIconColor
            selected -> selectedIconColor
            else -> unselectedIconColor
        }

    /**
     * Represents the text color for this item, depending on whether it is [selected].
     *
     * @param selected whether the item is selected
     * @param enabled whether the item is enabled
     */
    @Stable
    internal fun textColor(selected: Boolean, enabled: Boolean): Color =
        when {
            !enabled -> disabledTextColor
            selected -> selectedTextColor
            else -> unselectedTextColor
        }

    /** Represents the color of the indicator used for selected items. */
    internal val indicatorColor: Color
        get() = selectedIndicatorColor

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is NavigationBarItemColors) return false

        if (selectedIconColor != other.selectedIconColor) return false
        if (unselectedIconColor != other.unselectedIconColor) return false
        if (selectedTextColor != other.selectedTextColor) return false
        if (unselectedTextColor != other.unselectedTextColor) return false
        if (selectedIndicatorColor != other.selectedIndicatorColor) return false

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 491–525)

        if (disabledIconColor != other.disabledIconColor) return false
        if (disabledTextColor != other.disabledTextColor) return false

        return true
    }

    override fun hashCode(): Int {
        var result = selectedIconColor.hashCode()
        result = 31 * result + unselectedIconColor.hashCode()
        result = 31 * result + selectedTextColor.hashCode()
        result = 31 * result + unselectedTextColor.hashCode()
        result = 31 * result + selectedIndicatorColor.hashCode()
        result = 31 * result + disabledIconColor.hashCode()
        result = 31 * result + disabledTextColor.hashCode()

        return result
    }
}

/**
 * Base layout for a [NavigationBarItem].
 *
 * @param indicatorRipple indicator ripple for this item when it is selected
 * @param indicator indicator for this item when it is selected
 * @param icon icon for this item
 * @param label text label for this item
 * @param alwaysShowLabel whether to always show the label for this item. If false, the label will
 *   only be shown when this item is selected.
 * @param alphaAnimationProgress progress of the animation, where 0 represents the unselected state
 *   of this item and 1 represents the selected state. This value controls the indicator's opacity.
 * @param sizeAnimationProgress progress of the animation, where 0 represents the unselected state
 *   of this item and 1 represents the selected state. This value controls other values such as
 *   indicator size, icon and label positions, etc.
 */
@Composable

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 526–560)

private fun NavigationBarItemLayout(
    indicatorRipple: @Composable () -> Unit,
    indicator: @Composable () -> Unit,
    icon: @Composable () -> Unit,
    label: @Composable (() -> Unit)?,
    alwaysShowLabel: Boolean,
    alphaAnimationProgress: () -> Float,
    sizeAnimationProgress: () -> Float,
) {
    Layout(
        modifier = Modifier.badgeBounds(),
        content = {
            indicatorRipple()
            indicator()

            Box(Modifier.layoutId(IconLayoutIdTag)) { icon() }

            if (label != null) {
                Box(
                    Modifier.layoutId(LabelLayoutIdTag).graphicsLayer {
                        alpha = if (alwaysShowLabel) 1f else alphaAnimationProgress()
                    }
                ) {
                    label()
                }
            }
        },
    ) { measurables, constraints ->
        @Suppress("NAME_SHADOWING")
        // Ensure that the progress is >= 0. It may be negative on bouncy springs, for example.
        val animationProgress = sizeAnimationProgress().coerceAtLeast(0f)
        val looseConstraints = constraints.copy(minWidth = 0, minHeight = 0)
        val iconPlaceable =
            measurables.fastFirst { it.layoutId == IconLayoutIdTag }.measure(looseConstraints)


Sources: [live-androidx-material3-material3-material3-navigationbar-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 561–595)

        val totalIndicatorWidth = iconPlaceable.width + (IndicatorHorizontalPadding * 2).roundToPx()
        val animatedIndicatorWidth = (totalIndicatorWidth * animationProgress).roundToInt()
        val indicatorHeight = iconPlaceable.height + (IndicatorVerticalPadding * 2).roundToPx()
        val indicatorRipplePlaceable =
            measurables
                .fastFirst { it.layoutId == IndicatorRippleLayoutIdTag }
                .measure(Constraints.fixed(width = totalIndicatorWidth, height = indicatorHeight))
        val indicatorPlaceable =
            measurables
                .fastFirstOrNull { it.layoutId == IndicatorLayoutIdTag }
                ?.measure(
                    Constraints.fixed(width = animatedIndicatorWidth, height = indicatorHeight)
                )

        val labelPlaceable = label?.let {
            measurables.fastFirst { it.layoutId == LabelLayoutIdTag }.measure(looseConstraints)
        }

        if (label == null) {
            placeIcon(iconPlaceable, indicatorRipplePlaceable, indicatorPlaceable, constraints)
        } else {
            placeLabelAndIcon(
                labelPlaceable!!,
                iconPlaceable,
                indicatorRipplePlaceable,
                indicatorPlaceable,
                constraints,
                alwaysShowLabel,
                animationProgress,
            )
        }
    }
}

/** Places the provided [Placeable]s in the center of the provided [constraints]. */

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 596–630)

private fun MeasureScope.placeIcon(
    iconPlaceable: Placeable,
    indicatorRipplePlaceable: Placeable,
    indicatorPlaceable: Placeable?,
    constraints: Constraints,
): MeasureResult {
    val width =
        if (constraints.maxWidth == Constraints.Infinity) {
            iconPlaceable.width + NavigationBarItemToIconMinimumPadding.roundToPx() * 2
        } else {
            constraints.maxWidth
        }
    val height = constraints.constrainHeight(NavigationBarHeight.roundToPx())

    val iconX = (width - iconPlaceable.width) / 2
    val iconY = (height - iconPlaceable.height) / 2

    val rippleX = (width - indicatorRipplePlaceable.width) / 2
    val rippleY = (height - indicatorRipplePlaceable.height) / 2

    return layout(width, height) {
        indicatorPlaceable?.let {
            val indicatorX = (width - it.width) / 2
            val indicatorY = (height - it.height) / 2
            it.placeRelative(indicatorX, indicatorY)
        }
        iconPlaceable.placeRelative(iconX, iconY)
        indicatorRipplePlaceable.placeRelative(rippleX, rippleY)
    }
}

/**
 * Places the provided [Placeable]s in the correct position, depending on [alwaysShowLabel] and
 * [animationProgress].
 *

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 631–665)

 * When [alwaysShowLabel] is true, the positions do not move. The [iconPlaceable] and
 * [labelPlaceable] will be placed together in the center with padding between them, according to
 * the spec.
 *
 * When [animationProgress] is 1 (representing the selected state), the positions will be the same
 * as above.
 *
 * Otherwise, when [animationProgress] is 0, [iconPlaceable] will be placed in the center, like in
 * [placeIcon], and [labelPlaceable] will not be shown.
 *
 * When [animationProgress] is animating between these values, [iconPlaceable] and [labelPlaceable]
 * will be placed at a corresponding interpolated position.
 *
 * [indicatorRipplePlaceable] and [indicatorPlaceable] will always be placed in such a way that to
 * share the same center as [iconPlaceable].
 *
 * @param labelPlaceable text label placeable inside this item
 * @param iconPlaceable icon placeable inside this item
 * @param indicatorRipplePlaceable indicator ripple placeable inside this item
 * @param indicatorPlaceable indicator placeable inside this item, if it exists
 * @param constraints constraints of the item
 * @param alwaysShowLabel whether to always show the label for this item. If true, icon and label
 *   positions will not change. If false, positions transition between 'centered icon with no label'
 *   and 'top aligned icon with label'.
 * @param animationProgress progress of the animation, where 0 represents the unselected state of
 *   this item and 1 represents the selected state. Values between 0 and 1 interpolate positions of
 *   the icon and label.
 */
private fun MeasureScope.placeLabelAndIcon(
    labelPlaceable: Placeable,
    iconPlaceable: Placeable,
    indicatorRipplePlaceable: Placeable,
    indicatorPlaceable: Placeable?,
    constraints: Constraints,
    alwaysShowLabel: Boolean,

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 666–700)

    animationProgress: Float,
): MeasureResult {
    val contentHeight =
        iconPlaceable.height +
            IndicatorVerticalPadding.toPx() +
            NavigationBarIndicatorToLabelPadding.toPx() +
            labelPlaceable.height
    val contentVerticalPadding =
        ((constraints.minHeight - contentHeight) / 2).coerceAtLeast(IndicatorVerticalPadding.toPx())
    val height = contentHeight + contentVerticalPadding * 2

    // Icon (when selected) should be `contentVerticalPadding` from top
    val selectedIconY = contentVerticalPadding
    val unselectedIconY =
        if (alwaysShowLabel) selectedIconY else (height - iconPlaceable.height) / 2

    // How far the icon needs to move between unselected and selected states.
    val iconDistance = unselectedIconY - selectedIconY

    // The interpolated fraction of iconDistance that all placeables need to move based on
    // animationProgress.
    val offset = iconDistance * (1 - animationProgress)

    // Label should be fixed padding below icon
    val labelY =
        selectedIconY +
            iconPlaceable.height +
            IndicatorVerticalPadding.toPx() +
            NavigationBarIndicatorToLabelPadding.toPx()

    val containerWidth =
        if (constraints.maxWidth == Constraints.Infinity) {
            iconPlaceable.width + NavigationBarItemToIconMinimumPadding.roundToPx() * 2
        } else {
            constraints.maxWidth

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 701–735)

        }

    val labelX = (containerWidth - labelPlaceable.width) / 2
    val iconX = (containerWidth - iconPlaceable.width) / 2

    val rippleX = (containerWidth - indicatorRipplePlaceable.width) / 2
    val rippleY = selectedIconY - IndicatorVerticalPadding.toPx()

    return layout(containerWidth, height.roundToInt()) {
        indicatorPlaceable?.let {
            val indicatorX = (containerWidth - it.width) / 2
            val indicatorY = selectedIconY - IndicatorVerticalPadding.roundToPx()
            it.placeRelative(indicatorX, (indicatorY + offset).roundToInt())
        }
        if (alwaysShowLabel || animationProgress != 0f) {
            labelPlaceable.placeRelative(labelX, (labelY + offset).roundToInt())
        }
        iconPlaceable.placeRelative(iconX, (selectedIconY + offset).roundToInt())
        indicatorRipplePlaceable.placeRelative(rippleX, (rippleY + offset).roundToInt())
    }
}

private const val IndicatorRippleLayoutIdTag: String = "indicatorRipple"

private const val IndicatorLayoutIdTag: String = "indicator"

private const val IconLayoutIdTag: String = "icon"

private const val LabelLayoutIdTag: String = "label"

private val NavigationBarHeight: Dp
    get() = NavigationBarTokens.TallContainerHeight

/*@VisibleForTesting*/
internal val NavigationBarItemHorizontalPadding: Dp

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 71–105)

import androidx.compose.ui.unit.constrainHeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.util.fastFirst
import androidx.compose.ui.util.fastFirstOrNull
import kotlin.math.roundToInt

/**
 * [Material Design bottom navigation
 * bar](https://m3.material.io/components/navigation-bar/overview)
 *
 * Navigation bars offer a persistent and convenient way to switch between primary destinations in
 * an app.
 *
 * ![Navigation bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/navigation-bar.png)
 *
 * [NavigationBar] should contain three to five [NavigationBarItem]s, each representing a singular
 * destination.
 *
 * A simple example looks like:
 *
 * @sample androidx.compose.material3.samples.NavigationBarSample
 *
 * See [NavigationBarItem] for configuration specific to each item, and not the overall
 * [NavigationBar] component.
 *
 * @param modifier the [Modifier] to be applied to this navigation bar
 * @param containerColor the color used for the background of this navigation bar. Use
 *   [Color.Transparent] to have no color.
 * @param contentColor the preferred color for content inside this navigation bar. Defaults to
 *   either the matching content color for [containerColor], or to the current [LocalContentColor]
 *   if [containerColor] is not a color from the theme.
 * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
 *   overlay is applied on top of the container. A higher tonal elevation value will result in a
 *   darker color in light theme and lighter color in dark theme. See also: [Surface].

Sources: [live-androidx-material3-material3-material3-navigationbar-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)

## androidx.compose.material3 NavigationBar.kt source (lines 736–757)

    get() = 8.dp

/*@VisibleForTesting*/
internal val NavigationBarIndicatorToLabelPadding: Dp
    get() = 4.dp

private val IndicatorHorizontalPadding: Dp =
    (NavigationBarVerticalItemTokens.ActiveIndicatorWidth -
        NavigationBarVerticalItemTokens.IconSize) / 2

/*@VisibleForTesting*/
internal val IndicatorVerticalPadding: Dp =
    (NavigationBarVerticalItemTokens.ActiveIndicatorHeight -
        NavigationBarVerticalItemTokens.IconSize) / 2

private val IndicatorVerticalOffset: Dp
    get() = 12.dp

/*@VisibleForTesting*/
internal val NavigationBarItemToIconMinimumPadding: Dp
    get() = 44.dp


Sources: [live-androidx-material3-material3-material3-navigationbar-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/NavigationBar.kt)
