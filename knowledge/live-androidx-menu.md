---
type: reference
title: Material 3 Menu source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-menu-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1
    endLine: 35
    sha256: 060eece250498370688d14eb3e88027c34dfe249bf38ad1f13e707b0cadd0dd1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2022 The Android Open Source Project
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

      import androidx.collection.IntList
      import androidx.compose.animation.AnimatedVisibility
      import androidx.compose.animation.animateColorAsState
      import androidx.compose.animation.core.FiniteAnimationSpec
      import androidx.compose.animation.core.MutableTransitionState
      import androidx.compose.animation.core.animateFloat
      import androidx.compose.animation.core.updateTransition
      import androidx.compose.animation.expandHorizontally
      import androidx.compose.animation.fadeIn
      import androidx.compose.animation.fadeOut
      import androidx.compose.animation.shrinkHorizontally
      import androidx.compose.foundation.BorderStroke
      import androidx.compose.foundation.ScrollState
      import androidx.compose.foundation.clickable
      import androidx.compose.foundation.hoverable
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.MutableInteractionSource
  - id: live-androidx-menu-lines-1016-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1016
    endLine: 1050
    sha256: 0c90f88a639718d50204da71d64f2d77f44b252613ead6b7a2dabb666e44a741
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              disabledLeadingIconColor: Color,
              disabledTrailingIconColor: Color,
              containerColor: Color,
              disabledContainerColor: Color,
              selectedTextColor: Color,
              selectedContainerColor: Color,
              selectedLeadingIconColor: Color,
              selectedTrailingIconColor: Color,
          ) : this(
              textColor = textColor,
              leadingIconColor = leadingIconColor,
              trailingIconColor = trailingIconColor,
              disabledTextColor = disabledTextColor,
              disabledLeadingIconColor = disabledLeadingIconColor,
              disabledTrailingIconColor = disabledTrailingIconColor,
              containerColor = containerColor,
              disabledContainerColor = disabledContainerColor,
          )

          /**
           * Returns a copy of this MenuItemColors, optionally overriding some of the values. This uses
           * the Color.Unspecified to mean “use the value from the source”
           */
          @JvmName("copy-tNS2XkQ")
          @Deprecated("Maintained for binary compatibility.", level = DeprecationLevel.HIDDEN)
          public fun copy(
              textColor: Color = this.textColor,
              leadingIconColor: Color = this.leadingIconColor,
              trailingIconColor: Color = this.trailingIconColor,
              disabledTextColor: Color = this.disabledTextColor,
              disabledLeadingIconColor: Color = this.disabledLeadingIconColor,
              disabledTrailingIconColor: Color = this.disabledTrailingIconColor,
          ): MenuItemColors =
              copy(
                  textColor = textColor,
  - id: live-androidx-menu-lines-1051-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1051
    endLine: 1085
    sha256: 5c1a3d67d038a8545c83dc7addf77ed8e0abd8dc093c861a3449b2e3ead6aa72
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  leadingIconColor = leadingIconColor,
                  trailingIconColor = trailingIconColor,
                  disabledTextColor = disabledTextColor,
                  disabledLeadingIconColor = disabledLeadingIconColor,
                  disabledTrailingIconColor = disabledTrailingIconColor,
              )

          /**
           * Returns a copy of this MenuItemColors, optionally overriding some of the values. This uses
           * the Color.Unspecified to mean “use the value from the source”
           */
          @JvmName("copyNew")
          public fun copy(
              textColor: Color = this.textColor,
              containerColor: Color = this.containerColor,
              leadingIconColor: Color = this.leadingIconColor,
              trailingIconColor: Color = this.trailingIconColor,
              disabledTextColor: Color = this.disabledTextColor,
              disabledContainerColor: Color = this.disabledContainerColor,
              disabledLeadingIconColor: Color = this.disabledLeadingIconColor,
              disabledTrailingIconColor: Color = this.disabledTrailingIconColor,
          ): MenuItemColors =
              MenuItemColors(
                  textColor = textColor.takeOrElse { this.textColor },
                  leadingIconColor = leadingIconColor.takeOrElse { this.leadingIconColor },
                  trailingIconColor = trailingIconColor.takeOrElse { this.trailingIconColor },
                  disabledTextColor = disabledTextColor.takeOrElse { this.disabledTextColor },
                  disabledLeadingIconColor =
                      disabledLeadingIconColor.takeOrElse { this.disabledLeadingIconColor },
                  disabledTrailingIconColor =
                      disabledTrailingIconColor.takeOrElse { this.disabledTrailingIconColor },
                  containerColor = containerColor.takeOrElse { this.containerColor },
                  disabledContainerColor =
                      disabledContainerColor.takeOrElse { this.disabledContainerColor },
              )
  - id: live-androidx-menu-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 106
    endLine: 140
    sha256: 2d4ef080471c5aa435c7e247bd5c8441ec0f7d8e9dca3226e36a452a2b43b250
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
       *
       * Menus display a list of choices on a temporary surface. They appear when users interact with a
       * button, action, or other control.
       *
       * ![Dropdown menu
       * image](https://developer.android.com/images/reference/androidx/compose/material3/menu.png)
       *
       * A [DropdownMenu] behaves similarly to a [Popup], and will use the position of the parent layout
       * to position itself on screen. Commonly a [DropdownMenu] will be placed in a [Box] with a sibling
       * that will be used as the 'anchor'. Note that a [DropdownMenu] by itself will not take up any
       * space in a layout, as the menu is displayed in a separate window, on top of other content.
       *
       * The [content] of a [DropdownMenu] will typically be [DropdownMenuItem]s, as well as custom
       * content. Using [DropdownMenuItem]s will result in a menu that matches the Material specification
       * for menus. Also note that the [content] is placed inside a scrollable [Column], so using a
       * [androidx.compose.foundation.lazy.LazyColumn] as the root layout inside [content] is unsupported.
       *
       * [onDismissRequest] will be called when the menu should close - for example when there is a tap
       * outside the menu, or when the back key is pressed.
       *
       * [DropdownMenu] changes its positioning depending on the available space, always trying to be
       * fully visible. Depending on layout direction, first it will try to align its start to the start
       * of its parent, then its end to the end of its parent, and then to the edge of the window.
       * Vertically, it will try to align its top to the bottom of its parent, then its bottom to top of
       * its parent, and then to the edge of the window.
       *
       * An [offset] can be provided to adjust the positioning of the menu for cases when the layout
       * bounds of its parent do not coincide with its visual bounds.
       *
       * Example usage:
       *
       * @sample androidx.compose.material3.samples.MenuSample
       *
  - id: live-androidx-menu-lines-1086-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1086
    endLine: 1120
    sha256: 95d8dfe453473c66386300925e10b9eb379dc0f02553dca661ed558b576b7465
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /**
           * Returns a copy of this MenuItemColors, optionally overriding some of the values. This uses
           * the Color.Unspecified to mean “use the value from the source”
           */
          @JvmName("copySelectable")
          @Deprecated(
              "MenuItemColors no longer supports selected colors. Use SelectableMenuItemColors instead."
          )
          public fun copy(
              textColor: Color = this.textColor,
              containerColor: Color = this.containerColor,
              leadingIconColor: Color = this.leadingIconColor,
              trailingIconColor: Color = this.trailingIconColor,
              disabledTextColor: Color = this.disabledTextColor,
              disabledContainerColor: Color = this.disabledContainerColor,
              disabledLeadingIconColor: Color = this.disabledLeadingIconColor,
              disabledTrailingIconColor: Color = this.disabledTrailingIconColor,
              selectedTextColor: Color = Color.Unspecified,
              selectedContainerColor: Color = Color.Unspecified,
              selectedLeadingIconColor: Color = Color.Unspecified,
              selectedTrailingIconColor: Color = Color.Unspecified,
          ): MenuItemColors =
              copy(
                  textColor = textColor,
                  containerColor = containerColor,
                  leadingIconColor = leadingIconColor,
                  trailingIconColor = trailingIconColor,
                  disabledTextColor = disabledTextColor,
                  disabledContainerColor = disabledContainerColor,
                  disabledLeadingIconColor = disabledLeadingIconColor,
                  disabledTrailingIconColor = disabledTrailingIconColor,
              )

          /**
  - id: live-androidx-menu-lines-1121-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1121
    endLine: 1155
    sha256: ad59bcfa35cc96999d2d03aaf252a6ef050ea54afc16b94790973cba27b1d92a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Represents the text color for a menu item, depending on its [enabled] state.
           *
           * @param enabled whether the menu item is enabled
           */
          @Stable
          internal fun textColor(enabled: Boolean): Color {
              return if (enabled) textColor else disabledTextColor
          }

          /**
           * Represents the leading icon color for a menu item, depending on its [enabled] state.
           *
           * @param enabled whether the menu item is enabled
           */
          @Stable
          internal fun leadingIconColor(enabled: Boolean): Color {
              return if (enabled) leadingIconColor else disabledLeadingIconColor
          }

          /**
           * Represents the trailing icon color for a menu item, depending on its [enabled] state.
           *
           * @param enabled whether the menu item is enabled
           */
          @Stable
          internal fun trailingIconColor(enabled: Boolean): Color {
              return if (enabled) trailingIconColor else disabledTrailingIconColor
          }

          /**
           * Represents the container color for a menu item, depending on its [enabled] state.
           *
           * @param enabled whether the menu item is enabled.
           */
          @Stable
  - id: live-androidx-menu-lines-1156-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1156
    endLine: 1190
    sha256: 2736cdb15a53430d89d029cb6d13f38f5df82cf9c218e9799fa9a3e47a770cfc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          internal fun containerColor(enabled: Boolean): Color {
              return if (enabled) containerColor else disabledContainerColor
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is MenuItemColors) return false

              if (textColor != other.textColor) return false
              if (containerColor != other.containerColor) return false
              if (leadingIconColor != other.leadingIconColor) return false
              if (trailingIconColor != other.trailingIconColor) return false
              if (disabledTextColor != other.disabledTextColor) return false
              if (disabledLeadingIconColor != other.disabledLeadingIconColor) return false
              if (disabledTrailingIconColor != other.disabledTrailingIconColor) return false
              if (disabledContainerColor != other.disabledContainerColor) return false

              return true
          }

          override fun hashCode(): Int {
              var result = textColor.hashCode()
              result = 31 * result + containerColor.hashCode()
              result = 31 * result + leadingIconColor.hashCode()
              result = 31 * result + trailingIconColor.hashCode()
              result = 31 * result + disabledTextColor.hashCode()
              result = 31 * result + disabledLeadingIconColor.hashCode()
              result = 31 * result + disabledTrailingIconColor.hashCode()
              result = 31 * result + disabledContainerColor.hashCode()
              return result
          }
      }

      /**
       * Represents the text, icon, and container colors used in a selectable [DropdownMenuItem] at
  - id: live-androidx-menu-lines-1191-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1191
    endLine: 1225
    sha256: 30654cf431e063fd8682cf034d22a9bd046d7fb512c11f28105b64599d235401
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * different states.
       *
       * When the item is disabled, disabled colors take priority over selected colors.
       *
       * @param textColor the text color of this menu item when enabled and unselected
       * @param containerColor the container color of this menu item when enabled and unselected
       * @param leadingIconColor the leading icon color of this menu item when enabled and unselected
       * @param trailingContentColor the trailing content color of this menu item when enabled and
       *   unselected
       * @param disabledTextColor the text color of this menu item when not enabled; takes priority if the
       *   item is both selected and disabled
       * @param disabledContainerColor the container color of this menu item when not enabled; takes
       *   priority if the item is both selected and disabled
       * @param disabledLeadingIconColor the leading icon color of this menu item when not enabled; takes
       *   priority if the item is both selected and disabled
       * @param disabledTrailingContentColor the trailing content color of this menu item when not
       *   enabled; takes priority if the item is both selected and disabled
       * @param selectedTextColor the text color of this menu item when enabled and selected
       * @param selectedContainerColor the container color of this menu item when enabled and selected
       * @param selectedLeadingIconColor the leading icon color of this menu item when enabled and
       *   selected
       * @param selectedTrailingContentColor the trailing content color of this menu item when enabled and
       *   selected
       */
      @Immutable
      public class SelectableMenuItemColors(
          public val textColor: Color,
          public val containerColor: Color,
          public val leadingIconColor: Color,
          public val trailingContentColor: Color,
          public val disabledTextColor: Color,
          public val disabledContainerColor: Color,
          public val disabledLeadingIconColor: Color,
          public val disabledTrailingContentColor: Color,
          public val selectedTextColor: Color,
  - id: live-androidx-menu-lines-1226-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1226
    endLine: 1260
    sha256: 177aefeebfebdfc2c151b6813902e1e2a675d9f332d77c92eac6e12805ad9dd2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val selectedContainerColor: Color,
          public val selectedLeadingIconColor: Color,
          public val selectedTrailingContentColor: Color,
      ) {
          /**
           * Returns a copy of this [SelectableMenuItemColors], optionally overriding some of the values.
           * This uses [Color.Unspecified] to mean “use the value from the source”.
           *
           * When the item is disabled, disabled colors take priority over selected colors.
           *
           * @param textColor the text color of this menu item when enabled and unselected
           * @param containerColor the container color of this menu item when enabled and unselected
           * @param leadingIconColor the leading icon color of this menu item when enabled and unselected
           * @param trailingContentColor the trailing content color of this menu item when enabled and
           *   unselected
           * @param disabledTextColor the text color of this menu item when not enabled; takes priority if
           *   the item is both selected and disabled
           * @param disabledContainerColor the container color of this menu item when not enabled; takes
           *   priority if the item is both selected and disabled
           * @param disabledLeadingIconColor the leading icon color of this menu item when not enabled;
           *   takes priority if the item is both selected and disabled
           * @param disabledTrailingContentColor the trailing content color of this menu item when not
           *   enabled; takes priority if the item is both selected and disabled
           * @param selectedTextColor the text color of this menu item when enabled and selected
           * @param selectedContainerColor the container color of this menu item when enabled and selected
           * @param selectedLeadingIconColor the leading icon color of this menu item when enabled and
           *   selected
           * @param selectedTrailingContentColor the trailing content color of this menu item when enabled
           *   and selected
           */
          public fun copy(
              textColor: Color = this.textColor,
              containerColor: Color = this.containerColor,
              leadingIconColor: Color = this.leadingIconColor,
              trailingContentColor: Color = this.trailingContentColor,
  - id: live-androidx-menu-lines-1261-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1261
    endLine: 1295
    sha256: b33cd31ba0f5ca40f3bda4add6214e319d0526695ae12e84270821ac60eb2301
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              disabledTextColor: Color = this.disabledTextColor,
              disabledContainerColor: Color = this.disabledContainerColor,
              disabledLeadingIconColor: Color = this.disabledLeadingIconColor,
              disabledTrailingContentColor: Color = this.disabledTrailingContentColor,
              selectedTextColor: Color = this.selectedTextColor,
              selectedContainerColor: Color = this.selectedContainerColor,
              selectedLeadingIconColor: Color = this.selectedLeadingIconColor,
              selectedTrailingContentColor: Color = this.selectedTrailingContentColor,
          ): SelectableMenuItemColors =
              SelectableMenuItemColors(
                  textColor = textColor.takeOrElse { this.textColor },
                  containerColor = containerColor.takeOrElse { this.containerColor },
                  leadingIconColor = leadingIconColor.takeOrElse { this.leadingIconColor },
                  trailingContentColor = trailingContentColor.takeOrElse { this.trailingContentColor },
                  disabledTextColor = disabledTextColor.takeOrElse { this.disabledTextColor },
                  disabledContainerColor =
                      disabledContainerColor.takeOrElse { this.disabledContainerColor },
                  disabledLeadingIconColor =
                      disabledLeadingIconColor.takeOrElse { this.disabledLeadingIconColor },
                  disabledTrailingContentColor =
                      disabledTrailingContentColor.takeOrElse { this.disabledTrailingContentColor },
                  selectedTextColor = selectedTextColor.takeOrElse { this.selectedTextColor },
                  selectedContainerColor =
                      selectedContainerColor.takeOrElse { this.selectedContainerColor },
                  selectedLeadingIconColor =
                      selectedLeadingIconColor.takeOrElse { this.selectedLeadingIconColor },
                  selectedTrailingContentColor =
                      selectedTrailingContentColor.takeOrElse { this.selectedTrailingContentColor },
              )

          /**
           * Represents the text color for a selectable menu item, depending on its [enabled] and
           * [selected] state.
           *
           * @param enabled whether the menu item is enabled
  - id: live-androidx-menu-lines-1296-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1296
    endLine: 1330
    sha256: 5ffb9fd12f0fbcc178155222a6448db1d8d794fcfc59c33898531066ec72c12d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
           * @param selected whether the menu item is selected
           */
          @Stable
          internal fun textColor(enabled: Boolean, selected: Boolean): Color {
              return if (enabled) {
                  if (selected) {
                      selectedTextColor
                  } else {
                      textColor
                  }
              } else {
                  disabledTextColor
              }
          }

          /**
           * Represents the leading icon color for a selectable menu item, depending on its [enabled] and
           * [selected] state.
           *
           * @param enabled whether the menu item is enabled
           * @param selected whether the menu item is selected
           */
          @Stable
          internal fun leadingIconColor(enabled: Boolean, selected: Boolean): Color {
              return if (enabled) {
                  if (selected) {
                      selectedLeadingIconColor
                  } else {
                      leadingIconColor
                  }
              } else {
                  disabledLeadingIconColor
              }
          }
  - id: live-androidx-menu-lines-1331-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1331
    endLine: 1365
    sha256: bea9028576abda1b2eb963b1f839201636cf8f42dae2181ab54e4a2151893b73
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /**
           * Represents the trailing content color for a selectable menu item, depending on its [enabled]
           * and [selected] state.
           *
           * @param enabled whether the menu item is enabled
           * @param selected whether the menu item is selected
           */
          @Stable
          internal fun trailingContentColor(enabled: Boolean, selected: Boolean): Color {
              return if (enabled) {
                  if (selected) {
                      selectedTrailingContentColor
                  } else {
                      trailingContentColor
                  }
              } else {
                  disabledTrailingContentColor
              }
          }

          /**
           * Represents the container color for a selectable menu item, depending on its [enabled] and
           * [selected] state.
           *
           * @param enabled whether the menu item is enabled
           * @param selected whether the menu item is selected
           */
          @Stable
          internal fun containerColor(enabled: Boolean, selected: Boolean): Color {
              return if (enabled) {
                  if (selected) {
                      selectedContainerColor
                  } else {
                      containerColor
                  }
  - id: live-androidx-menu-lines-1366-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1366
    endLine: 1400
    sha256: a9798b780d65b076bd390d33edd455f3551cfeaf6a72de53181213b5f8951404
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              } else {
                  disabledContainerColor
              }
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is SelectableMenuItemColors) return false

              if (textColor != other.textColor) return false
              if (containerColor != other.containerColor) return false
              if (leadingIconColor != other.leadingIconColor) return false
              if (trailingContentColor != other.trailingContentColor) return false
              if (disabledTextColor != other.disabledTextColor) return false
              if (disabledContainerColor != other.disabledContainerColor) return false
              if (disabledLeadingIconColor != other.disabledLeadingIconColor) return false
              if (disabledTrailingContentColor != other.disabledTrailingContentColor) return false
              if (selectedTextColor != other.selectedTextColor) return false
              if (selectedContainerColor != other.selectedContainerColor) return false
              if (selectedLeadingIconColor != other.selectedLeadingIconColor) return false
              if (selectedTrailingContentColor != other.selectedTrailingContentColor) return false

              return true
          }

          override fun hashCode(): Int {
              var result = textColor.hashCode()
              result = 31 * result + containerColor.hashCode()
              result = 31 * result + leadingIconColor.hashCode()
              result = 31 * result + trailingContentColor.hashCode()
              result = 31 * result + disabledTextColor.hashCode()
              result = 31 * result + disabledContainerColor.hashCode()
              result = 31 * result + disabledLeadingIconColor.hashCode()
              result = 31 * result + disabledTrailingContentColor.hashCode()
              result = 31 * result + selectedTextColor.hashCode()
  - id: live-androidx-menu-lines-1401-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1401
    endLine: 1435
    sha256: d962f15e2033ec8a97ba3cec0c5bdae4619f2a458d9fced6ce049e00e9836f79
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              result = 31 * result + selectedContainerColor.hashCode()
              result = 31 * result + selectedLeadingIconColor.hashCode()
              result = 31 * result + selectedTrailingContentColor.hashCode()
              return result
          }
      }

      /**
       * Represents the shapes used for a [DropdownMenuItem] in its various states.
       *
       * @param shape the [Shape] to use when the item is unselected.
       * @param selectedShape the [Shape] to use when the item is selected.
       */
      @Immutable
      public class MenuItemShapes(public val shape: Shape, public val selectedShape: Shape) {
          /** Returns a copy of this MenuItemShapes, optionally overriding some of the values. */
          public fun copy(
              shape: Shape? = this.shape,
              selectedShape: Shape? = this.selectedShape,
          ): MenuItemShapes =
              MenuItemShapes(
                  shape = shape.takeOrElse { this.shape },
                  selectedShape = selectedShape.takeOrElse { this.selectedShape },
              )

          internal fun Shape?.takeOrElse(block: () -> Shape): Shape = this ?: block()

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is MenuItemShapes) return false

              return shape == other.shape && selectedShape == other.selectedShape
          }

          override fun hashCode(): Int {
  - id: live-androidx-menu-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 141
    endLine: 175
    sha256: 091be9076c312002d64d5d4451dbdfe197bc56fa93903acdd507ebe2c902a356
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Example usage with a [ScrollState] to control the menu items scroll position:
       *
       * @sample androidx.compose.material3.samples.MenuWithScrollStateSample
       * @param expanded whether the menu is expanded or not
       * @param onDismissRequest called when the user requests to dismiss the menu, such as by tapping
       *   outside the menu's bounds
       * @param modifier [Modifier] to be applied to the menu's content
       * @param offset [DpOffset] from the original position of the menu. The offset respects the
       *   [androidx.compose.ui.unit.LayoutDirection], so the offset's x position will be added in LTR and
       *   subtracted in RTL.
       * @param scrollState a [ScrollState] to used by the menu's content for items vertical scrolling
       * @param properties [PopupProperties] for further customization of this popup's behavior
       * @param shape the shape of the menu
       * @param containerColor the container color of the menu
       * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
       *   overlay is applied on top of the container. A higher tonal elevation value will result in a
       *   darker color in light theme and lighter color in dark theme. See also: [Surface].
       * @param shadowElevation the elevation for the shadow below the menu
       * @param border the border to draw around the container of the menu. Pass `null` for no border.
       * @param content the content of this dropdown menu, typically a [DropdownMenuItem]
       */
      @Composable
      public expect fun DropdownMenu(
          expanded: Boolean,
          onDismissRequest: () -> Unit,
          modifier: Modifier = Modifier,
          offset: DpOffset = DpOffset(0.dp, 0.dp),
          scrollState: ScrollState = rememberScrollState(),
          properties: PopupProperties = MenuDefaults.DefaultMenuProperties,
          shape: Shape = MenuDefaults.shape,
          containerColor: Color = MenuDefaults.containerColor,
          tonalElevation: Dp = MenuDefaults.TonalElevation,
          shadowElevation: Dp = MenuDefaults.ShadowElevation,
          border: BorderStroke? = null,
          content: @Composable ColumnScope.() -> Unit,
  - id: live-androidx-menu-lines-1436-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1436
    endLine: 1470
    sha256: 4f2c6f9dcc9c4eb9892a8c9861e48513a122cac656e0fdedadd12413a08ee478
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              var result = shape.hashCode()
              result = 31 * result + selectedShape.hashCode()

              return result
          }
      }

      /**
       * Represents the shapes used for a [DropdownMenuGroup].
       *
       * @param shape the default [Shape] to use for the group.
       * @param inactiveShape the [Shape] to use when the group has stop being hovered.
       */
      @Immutable
      public class MenuGroupShapes(public val shape: Shape, public val inactiveShape: Shape) {
          /** Returns a copy of this MenuGroupShapes, optionally overriding some of the values. */
          public fun copy(
              shape: Shape? = this.shape,
              inactiveShape: Shape? = this.inactiveShape,
          ): MenuGroupShapes =
              MenuGroupShapes(
                  shape = shape.takeOrElse { this.shape },
                  inactiveShape = inactiveShape.takeOrElse { this.inactiveShape },
              )

          internal fun Shape?.takeOrElse(block: () -> Shape): Shape = this ?: block()

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is MenuGroupShapes) return false

              return shape == other.shape && inactiveShape == other.inactiveShape
          }

          override fun hashCode(): Int {
  - id: live-androidx-menu-lines-1471-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1471
    endLine: 1505
    sha256: 85a2aac47305259a563b499ba88cf61b0e618d139428934af9dc482bfe73072c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              var result = shape.hashCode()
              result = 31 * result + inactiveShape.hashCode()

              return result
          }
      }

      /**
       * Provides context for calculating candidate menu positioning coordinates relative to window
       * bounds.
       */
      public interface MenuPositionScope {
          /** The bounds of the anchor relative to window layout bounds. */
          public val anchorBounds: IntRect
          /** The overall size of the hosting window. */
          public val windowSize: IntSize
          /** The calculated dimensions of the menu popup. */
          public val menuSize: IntSize
          /** The current active layout direction (LTR or RTL). */
          public val layoutDirection: LayoutDirection
      }

      internal class MenuPositionScopeImpl(
          override val anchorBounds: IntRect,
          override val windowSize: IntSize,
          override val menuSize: IntSize,
          override val layoutDirection: LayoutDirection,
      ) : MenuPositionScope

      /**
       * Class that determines the position of a menu relative to its anchor.
       *
       * This allows selecting between standard positioning strategies (such as [Above], [Below], [Start],
       * [End], [Left], [Right]) or providing a [Custom] implementation for complex positioning logic.
       */
  - id: live-androidx-menu-lines-1506-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1506
    endLine: 1540
    sha256: 58fe01dd8c17c5ed5a3b0a69f3ef9874ea2bb680e1b3678ac27203b48df56b21
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Immutable
      public class MenuAnchorPosition
      private constructor(
          internal val xCandidates: MenuPositionScope.() -> IntList,
          internal val yCandidates: MenuPositionScope.() -> IntList,
      ) {
          public companion object {
              /**
               * Position the menu above its anchor.
               *
               * The menu's bottom edge is aligned with the anchor's top edge by default. If there is
               * insufficient space, alternative positions (such as below the anchor) will be attempted.
               */
              public val Above: MenuAnchorPosition =
                  MenuAnchorPosition(
                      xCandidates = {
                          MenuPosition.xValuesFromCandidates(
                              listOf(
                                  startToAnchorStart,
                                  endToAnchorEnd,
                                  if (anchorBounds.center.x < windowSize.width / 2) {
                                      leftToWindowLeft
                                  } else {
                                      rightToWindowRight
                                  },
                              ),
                              anchorBounds,
                              windowSize,
                              menuSize.width,
                              layoutDirection,
                          )
                      },
                      yCandidates = {
                          MenuPosition.yValuesFromCandidates(
                              listOf(
  - id: live-androidx-menu-lines-1541-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1541
    endLine: 1575
    sha256: 50e43703132dc11f0e4415ae54f61775e98f3f47a4f1da4c273c3bfef8b50bdc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  bottomToAnchorTop,
                                  topToAnchorBottom,
                                  centerToAnchorTop,
                                  if (anchorBounds.center.y < windowSize.height / 2) {
                                      topToWindowTop
                                  } else {
                                      bottomToWindowBottom
                                  },
                              ),
                              anchorBounds,
                              windowSize,
                              menuSize.height,
                          )
                      },
                  )

              /**
               * Position the menu below its anchor.
               *
               * The menu's top edge is aligned with the anchor's bottom edge by default. If there is
               * insufficient space, alternative positions (such as above the anchor) will be attempted.
               */
              public val Below: MenuAnchorPosition =
                  MenuAnchorPosition(
                      xCandidates = {
                          MenuPosition.xValuesFromCandidates(
                              listOf(
                                  startToAnchorStart,
                                  endToAnchorEnd,
                                  if (anchorBounds.center.x < windowSize.width / 2) {
                                      leftToWindowLeft
                                  } else {
                                      rightToWindowRight
                                  },
                              ),
  - id: live-androidx-menu-lines-1576-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1576
    endLine: 1610
    sha256: 3d13bd5697e936d77df47802c3deb097f90a843bb34a791552b5e2384c66908a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              anchorBounds,
                              windowSize,
                              menuSize.width,
                              layoutDirection,
                          )
                      },
                      yCandidates = {
                          MenuPosition.yValuesFromCandidates(
                              listOf(
                                  topToAnchorBottom,
                                  bottomToAnchorTop,
                                  centerToAnchorTop,
                                  if (anchorBounds.center.y < windowSize.height / 2) {
                                      topToWindowTop
                                  } else {
                                      bottomToWindowBottom
                                  },
                              ),
                              anchorBounds,
                              windowSize,
                              menuSize.height,
                          )
                      },
                  )

              /**
               * Position the menu to the left of its anchor.
               *
               * This strategy positions the menu on the left side regardless of the layout direction.
               */
              public val Left: MenuAnchorPosition =
                  MenuAnchorPosition(
                      xCandidates = {
                          MenuPosition.xValuesFromCandidates(
                              listOf(
  - id: live-androidx-menu-lines-1611-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1611
    endLine: 1645
    sha256: 7f15d8eb8228e8815e132f907dbb34d9ee1a296ca61a6dbaf26e4a5cd85df038
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  endToAnchorStart,
                                  startToAnchorEnd,
                                  if (anchorBounds.center.x < windowSize.width / 2) {
                                      leftToWindowLeft
                                  } else {
                                      rightToWindowRight
                                  },
                              ),
                              anchorBounds,
                              windowSize,
                              menuSize.width,
                              layoutDirection,
                          )
                      },
                      yCandidates = {
                          MenuPosition.yValuesFromCandidates(
                              listOf(
                                  topToAnchorTop,
                                  bottomToAnchorBottom,
                                  if (anchorBounds.center.y < windowSize.height / 2) {
                                      topToWindowTop
                                  } else {
                                      bottomToWindowBottom
                                  },
                              ),
                              anchorBounds,
                              windowSize,
                              menuSize.height,
                          )
                      },
                  )

              /**
               * Position the menu to the right of its anchor.
               *
  - id: live-androidx-menu-lines-1646-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1646
    endLine: 1680
    sha256: f37367cd7e757431f0e63fe72fe9e925d601d2646d101d40bba243ecf244bc41
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * This strategy positions the menu on the right side regardless of the layout direction.
               */
              public val Right: MenuAnchorPosition =
                  MenuAnchorPosition(
                      xCandidates = {
                          MenuPosition.xValuesFromCandidates(
                              listOf(
                                  startToAnchorEnd,
                                  endToAnchorStart,
                                  if (anchorBounds.center.x < windowSize.width / 2) {
                                      leftToWindowLeft
                                  } else {
                                      rightToWindowRight
                                  },
                              ),
                              anchorBounds,
                              windowSize,
                              menuSize.width,
                              layoutDirection,
                          )
                      },
                      yCandidates = {
                          MenuPosition.yValuesFromCandidates(
                              listOf(
                                  topToAnchorTop,
                                  bottomToAnchorBottom,
                                  if (anchorBounds.center.y < windowSize.height / 2) {
                                      topToWindowTop
                                  } else {
                                      bottomToWindowBottom
                                  },
                              ),
                              anchorBounds,
                              windowSize,
                              menuSize.height,
  - id: live-androidx-menu-lines-1681-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1681
    endLine: 1715
    sha256: 231427a3cf2eab79f7d8dc411c8b12e7ce14586632ab49de26bc33911c61bc03
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          )
                      },
                  )

              /**
               * Position the menu to the start of its anchor.
               *
               * In LTR layouts, this positions the menu on the left side of the anchor. In RTL layouts,
               * this positions the menu on the right side of the anchor.
               */
              public val Start: MenuAnchorPosition =
                  MenuAnchorPosition(
                      xCandidates = {
                          MenuPosition.xValuesFromCandidates(
                              listOf(
                                  endToAnchorStart,
                                  startToAnchorEnd,
                                  if (anchorBounds.center.x < windowSize.width / 2) {
                                      leftToWindowLeft
                                  } else {
                                      rightToWindowRight
                                  },
                              ),
                              anchorBounds,
                              windowSize,
                              menuSize.width,
                              layoutDirection,
                          )
                      },
                      yCandidates = {
                          MenuPosition.yValuesFromCandidates(
                              listOf(
                                  topToAnchorTop,
                                  bottomToAnchorBottom,
                                  if (anchorBounds.center.y < windowSize.height / 2) {
  - id: live-androidx-menu-lines-1716-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1716
    endLine: 1750
    sha256: 1f5b8e266c8381463c3b89f56cd139325ef60b9c3aa07a5c5e7d7c9a95a97c2c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                      topToWindowTop
                                  } else {
                                      bottomToWindowBottom
                                  },
                              ),
                              anchorBounds,
                              windowSize,
                              menuSize.height,
                          )
                      },
                  )

              /**
               * Position the menu to the end of its anchor.
               *
               * In LTR layouts, this positions the menu on the right side of the anchor. In RTL layouts,
               * this positions the menu on the left side of the anchor.
               */
              public val End: MenuAnchorPosition =
                  MenuAnchorPosition(
                      xCandidates = {
                          MenuPosition.xValuesFromCandidates(
                              listOf(
                                  startToAnchorEnd,
                                  endToAnchorStart,
                                  if (anchorBounds.center.x < windowSize.width / 2) {
                                      leftToWindowLeft
                                  } else {
                                      rightToWindowRight
                                  },
                              ),
                              anchorBounds,
                              windowSize,
                              menuSize.width,
                              layoutDirection,
  - id: live-androidx-menu-lines-1751-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1751
    endLine: 1785
    sha256: edb5b18c81e16f9c8ec65465ceae98ea8e325f9e067853d9adda89980c432e3a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          )
                      },
                      yCandidates = {
                          MenuPosition.yValuesFromCandidates(
                              listOf(
                                  topToAnchorTop,
                                  bottomToAnchorBottom,
                                  if (anchorBounds.center.y < windowSize.height / 2) {
                                      topToWindowTop
                                  } else {
                                      bottomToWindowBottom
                                  },
                              ),
                              anchorBounds,
                              windowSize,
                              menuSize.height,
                          )
                      },
                  )

              /**
               * Create a custom positioning strategy by providing lambda functions for calculating
               * candidate positions for the x and y axes. Note that candidate positioning coordinates are
               * calculated relative to the window bounds.
               *
               * @param xCandidates Lambda that determines the list of candidate x coordinates for the
               *   menu relative to the window bounds.
               * @param yCandidates Lambda that determines the list of candidate y coordinates for the
               *   menu relative to the window bounds.
               */
              public fun Custom(
                  xCandidates: MenuPositionScope.() -> IntList,
                  yCandidates: MenuPositionScope.() -> IntList,
              ): MenuAnchorPosition = MenuAnchorPosition(xCandidates, yCandidates)
          }
  - id: live-androidx-menu-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 176
    endLine: 210
    sha256: 39df1d2c54b91294c3a83a800500bf89aab8202bcec4ee11856499595e4d37c7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      )

      /**
       * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
       *
       * A [Popup] that provides the foundation for building a custom menu.
       *
       * ![Dropdown menu
       * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
       *
       * This composable provides the [Popup] and layout behavior for a menu. This is useful for building
       * custom menus that require different content arrangements or styling than the default
       * [DropdownMenu].
       *
       * Example usage:
       *
       * @sample androidx.compose.material3.samples.GroupedMenuSample
       *
       * Example usage of cascading menus:
       *
       * @sample androidx.compose.material3.samples.MenuWithCascadingMenusSample
       * @param expanded whether the menu is expanded or not.
       * @param onDismissRequest called when the user requests to dismiss the menu, such as by tapping
       *   outside the menu's bounds.
       * @param modifier [Modifier] to be applied to the menu's content.
       * @param popupPositionProvider [DropdownMenuPopupPositionProvider] to be used to position the menu.
       * @param properties [PopupProperties] for further customization of this popup's behavior.
       * @param content the content of this dropdown menu.
       *
       * @material3expressive
       */
      @Composable
      public fun DropdownMenuPopup(
          expanded: Boolean,
          onDismissRequest: () -> Unit,
  - id: live-androidx-menu-lines-1786-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1786
    endLine: 1820
    sha256: 8241c5a012b74b93eaf9f6e4e7cf785dbf5325e2aad199e3dbe33649d2d9d333
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      /**
       * [PopupPositionProvider] that communicates the [TransformOrigin] to dropdown menu's
       * implementation.
       */
      public interface DropdownMenuPopupPositionProvider : PopupPositionProvider {
          /**
           * The calculated [TransformOrigin] of the dropdown menu popup relative to its anchor.
           *
           * This origin is used to animate (e.g. scale) the menu from the correct point relative to where
           * the menu is positioned.
           */
          public val transformOrigin: TransformOrigin
      }

      /**
       * The implementation of the popup. This allows desktop versions to listen to key events and
       * communicate it to their popup.
       */
      @Composable
      internal expect fun DropdownMenuPopupImpl(
          onDismissRequest: () -> Unit,
          popupPositionProvider: DropdownMenuPopupPositionProvider,
          properties: PopupProperties,
          content: @Composable () -> Unit,
      )

      @Composable
      internal fun DropdownMenuContent(
          modifier: Modifier,
          expandedState: MutableTransitionState<Boolean>,
          transformOrigin: () -> TransformOrigin,
          scrollState: ScrollState,
          shape: Shape,
  - id: live-androidx-menu-lines-1821-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1821
    endLine: 1855
    sha256: 01c2d61876ca1b23e34e73f1d2773d60099f6fad788bf9e9f342917b94edf79a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          containerColor: Color,
          tonalElevation: Dp,
          shadowElevation: Dp,
          border: BorderStroke?,
          content: @Composable ColumnScope.() -> Unit,
      ) {
          // Menu open/close animation.
          @Suppress("DEPRECATION") val transition = updateTransition(expandedState, "DropDownMenu")
          // TODO Load the motionScheme tokens from the component tokens file
          val scaleAnimationSpec = MotionSchemeKeyTokens.FastSpatial.value<Float>()
          val alphaAnimationSpec = MotionSchemeKeyTokens.FastEffects.value<Float>()
          val scale by
              transition.animateFloat(transitionSpec = { scaleAnimationSpec }) { expanded ->
                  if (expanded) ExpandedScaleTarget else ClosedScaleTarget
              }

          val alpha by
              transition.animateFloat(transitionSpec = { alphaAnimationSpec }) { expanded ->
                  if (expanded) ExpandedAlphaTarget else ClosedAlphaTarget
              }

          val isInspecting = LocalInspectionMode.current
          Surface(
              modifier =
                  Modifier.graphicsLayer {
                      scaleX =
                          if (!isInspecting) scale
                          else if (expandedState.targetState) ExpandedScaleTarget else ClosedScaleTarget
                      scaleY =
                          if (!isInspecting) scale
                          else if (expandedState.targetState) ExpandedScaleTarget else ClosedScaleTarget
                      this.alpha =
                          if (!isInspecting) alpha
                          else if (expandedState.targetState) ExpandedAlphaTarget else ClosedAlphaTarget
                      this.transformOrigin = transformOrigin()
  - id: live-androidx-menu-lines-1856-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1856
    endLine: 1890
    sha256: 795c391ccf97ec0684844b0dd567168c69fcd9e8bc60512b49b0097beac4bacf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  },
              shape = shape,
              color = containerColor,
              tonalElevation = tonalElevation,
              shadowElevation = shadowElevation,
              border = border,
          ) {
              Column(
                  modifier =
                      modifier
                          .padding(vertical = DropdownMenuVerticalPadding)
                          .width(IntrinsicSize.Max)
                          .verticalScroll(scrollState),
                  content = content,
              )
          }
      }

      @Composable
      internal fun DropdownMenuPopupContent(
          modifier: Modifier,
          expandedState: MutableTransitionState<Boolean>,
          transformOrigin: () -> TransformOrigin,
          content: @Composable ColumnScope.() -> Unit,
      ) {
          // Menu open/close animation.
          @Suppress("DEPRECATION") val transition = updateTransition(expandedState, "DropDownMenu")
          // TODO Load the motionScheme tokens from the component tokens file
          val scaleAnimationSpec = MotionSchemeKeyTokens.FastSpatial.value<Float>()
          val alphaAnimationSpec = MotionSchemeKeyTokens.FastEffects.value<Float>()
          val scale by
              transition.animateFloat(transitionSpec = { scaleAnimationSpec }) { expanded ->
                  if (expanded) ExpandedScaleTarget else ClosedScaleTarget
              }
          val alpha by
  - id: live-androidx-menu-lines-1891-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1891
    endLine: 1925
    sha256: 060a439da16b3231bccf0a5559427dcbf76d8d3833b78e87301a53aa837ad2d1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              transition.animateFloat(transitionSpec = { alphaAnimationSpec }) { expanded ->
                  if (expanded) ExpandedAlphaTarget else ClosedAlphaTarget
              }
          val isInspecting = LocalInspectionMode.current
          Column(
              modifier =
                  modifier.width(IntrinsicSize.Max).graphicsLayer {
                      scaleX =
                          if (!isInspecting) scale
                          else if (expandedState.targetState) ExpandedScaleTarget else ClosedScaleTarget
                      scaleY =
                          if (!isInspecting) scale
                          else if (expandedState.targetState) ExpandedScaleTarget else ClosedScaleTarget
                      this.alpha =
                          if (!isInspecting) alpha
                          else if (expandedState.targetState) ExpandedAlphaTarget else ClosedAlphaTarget
                      this.transformOrigin = transformOrigin()
                  },
              content = content,
          )
      }

      @Composable
      internal fun DropdownMenuItemContent(
          selected: Boolean,
          onClick: () -> Unit,
          text: @Composable () -> Unit,
          modifier: Modifier,
          supportingText: @Composable (() -> Unit)?,
          leadingIcon: @Composable (() -> Unit)?,
          selectedLeadingIcon: @Composable (() -> Unit)?,
          trailingContent: @Composable (() -> Unit)?,
          enabled: Boolean,
          colors: MenuItemColors,
          shapes: MenuItemShapes,
  - id: live-androidx-menu-lines-1926-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1926
    endLine: 1960
    sha256: 97daf9b347365601104fca9f5dac7f3e064ad82ef27b9f52634d77bbb64ee889
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          horizontalArrangement: Arrangement.Horizontal,
          contentPadding: PaddingValues,
          interactionSource: MutableInteractionSource?,
      ) {
          DropdownMenuItemContent(
              selected = selected,
              onClick = onClick,
              text = text,
              modifier = modifier,
              supportingText = supportingText,
              leadingIcon = leadingIcon,
              selectedLeadingIcon = selectedLeadingIcon,
              trailingContent = trailingContent,
              enabled = enabled,
              containerColor = colors.containerColor(enabled),
              leadingIconColor = colors.leadingIconColor(enabled),
              textColor = colors.textColor(enabled),
              trailingContentColor = colors.trailingIconColor(enabled),
              shapes = shapes,
              horizontalArrangement = horizontalArrangement,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
          )
      }

      @Composable
      internal fun DropdownMenuItemContent(
          selected: Boolean,
          onClick: () -> Unit,
          text: @Composable () -> Unit,
          modifier: Modifier,
          supportingText: @Composable (() -> Unit)?,
          leadingIcon: @Composable (() -> Unit)?,
          selectedLeadingIcon: @Composable (() -> Unit)?,
          trailingContent: @Composable (() -> Unit)?,
  - id: live-androidx-menu-lines-1961-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1961
    endLine: 1995
    sha256: 05a197a53e1ae7f24e9acdc218e19ca73a6da8629e1f383f6f5a09ee922421ae
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          enabled: Boolean,
          colors: SelectableMenuItemColors,
          shapes: MenuItemShapes,
          horizontalArrangement: Arrangement.Horizontal,
          contentPadding: PaddingValues,
          interactionSource: MutableInteractionSource?,
      ) {
          DropdownMenuItemContent(
              selected = selected,
              onClick = onClick,
              text = text,
              modifier = modifier,
              supportingText = supportingText,
              leadingIcon = leadingIcon,
              selectedLeadingIcon = selectedLeadingIcon,
              trailingContent = trailingContent,
              enabled = enabled,
              containerColor = colors.containerColor(enabled, selected),
              leadingIconColor = colors.leadingIconColor(enabled, selected),
              textColor = colors.textColor(enabled, selected),
              trailingContentColor = colors.trailingContentColor(enabled, selected),
              shapes = shapes,
              horizontalArrangement = horizontalArrangement,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
          )
      }

      @Composable
      private fun DropdownMenuItemContent(
          selected: Boolean,
          onClick: () -> Unit,
          text: @Composable () -> Unit,
          modifier: Modifier,
          supportingText: @Composable (() -> Unit)?,
  - id: live-androidx-menu-lines-1996-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 1996
    endLine: 2030
    sha256: d5c4755bfc9f8d4c7e8703c75afa980b6582fc0a0300ef1a445d04f07b743cd8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          leadingIcon: @Composable (() -> Unit)?,
          selectedLeadingIcon: @Composable (() -> Unit)?,
          trailingContent: @Composable (() -> Unit)?,
          enabled: Boolean,
          containerColor: Color,
          leadingIconColor: Color,
          textColor: Color,
          trailingContentColor: Color,
          shapes: MenuItemShapes,
          horizontalArrangement: Arrangement.Horizontal,
          contentPadding: PaddingValues,
          interactionSource: MutableInteractionSource?,
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }

          // TODO Load the motionScheme tokens from the component tokens file
          val expandAndShrinkSpec = MotionSchemeKeyTokens.FastSpatial.value<IntSize>()
          val fadeInAndOutSpec = MotionSchemeKeyTokens.FastEffects.value<Float>()
          val morphSpec = MotionSchemeKeyTokens.FastSpatial.value<Float>()
          val colorAnimationSpec = MotionSchemeKeyTokens.FastEffects.value<Color>()

          val animatedContainerColor by
              animateColorAsState(targetValue = containerColor, animationSpec = colorAnimationSpec)
          val itemShape = shapeByInteraction(shapes, selected, morphSpec)

          val hasLeadingIcon = leadingIcon != null || selectedLeadingIcon != null
          val hasTrailingContent = trailingContent != null

          val horizontalArrangement =
              if (horizontalArrangement is MenuArrangement) {
                  MenuDefaults.itemHorizontalArrangement(
                      hasLeadingIcon = hasLeadingIcon,
                      hasTrailingIcon = hasTrailingContent,
                  )
  - id: live-androidx-menu-lines-2031-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 2031
    endLine: 2065
    sha256: 70b03147cef3acb131d86d0e32caca80b53e6fb4050def1ae874101fd49b0bbb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              } else {
                  horizontalArrangement
              }

          Surface(
              selected = selected,
              onClick = onClick,
              modifier =
                  modifier
                      .fillMaxWidth()
                      .padding(
                          if (supportingText != null) {
                              DropdownMenuSelectableItemWithSupportTexPadding
                          } else {
                              DropdownMenuSelectableItemPadding
                          }
                      ),
              enabled = enabled,
              shape = itemShape,
              color = animatedContainerColor,
              interactionSource = interactionSource,
          ) {
              // TODO replace with token
              ProvideTextStyle(MaterialTheme.typography.labelLarge) {
                  Row(
                      modifier =
                          Modifier.sizeIn(
                                  minWidth = DropdownMenuItemDefaultMinWidth,
                                  maxWidth = DropdownMenuItemDefaultMaxWidth,
                                  minHeight = SegmentedMenuTokens.Item,
                              )
                              .padding(contentPadding),
                      horizontalArrangement = horizontalArrangement,
                      verticalAlignment = Alignment.CenterVertically,
                  ) {
  - id: live-androidx-menu-lines-2066-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 2066
    endLine: 2100
    sha256: 809c3a6c91c4884ef11317272f048e1ffdd883fcf43b65c719e8172b4cc05fd1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      if (hasLeadingIcon) {
                          CompositionLocalProvider(LocalContentColor provides leadingIconColor) {
                              Box(contentAlignment = Alignment.Center) {
                                  if (selectedLeadingIcon != null) {
                                      if (leadingIcon == null) {
                                          androidx.compose.animation.AnimatedVisibility(
                                              visible = selected,
                                              enter =
                                                  expandHorizontally(
                                                      animationSpec = expandAndShrinkSpec
                                                  ) + fadeIn(animationSpec = fadeInAndOutSpec),
                                              exit =
                                                  shrinkHorizontally(
                                                      animationSpec = expandAndShrinkSpec
                                                  ) + fadeOut(animationSpec = fadeInAndOutSpec),
                                          ) {
                                              WrappedLeadingIcon { selectedLeadingIcon() }
                                          }
                                      } else if (selected) {
                                          WrappedLeadingIcon { selectedLeadingIcon() }
                                      } else {
                                          WrappedLeadingIcon { leadingIcon() }
                                      }
                                  } else {
                                      WrappedLeadingIcon { leadingIcon!!.invoke() }
                                  }
                              }
                          }
                      }

                      CompositionLocalProvider(LocalContentColor provides textColor) {
                          // Weighted so that the text is measured after the leading icon and trailing
                          // content, and is constrained to the space they leave. `fill = false` keeps the
                          // text at its natural width when it fits, so custom [horizontalArrangement]s
                          // still have free space to distribute.
  - id: live-androidx-menu-lines-2101-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 2101
    endLine: 2135
    sha256: 93dcb516d67408eb81ff817c464d815a3dbc5d4f54a94ed421a995e864673f02
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          Box(
                              modifier = Modifier.weight(1f, fill = false),
                              contentAlignment = Alignment.CenterStart,
                          ) {
                              if (supportingText != null) {
                                  LabelWithSupportingText(
                                      supportingText = supportingText,
                                      modifier = Modifier,
                                      content = text,
                                  )
                              } else {
                                  text()
                              }
                          }
                      }

                      if (hasTrailingContent) {
                          CompositionLocalProvider(LocalContentColor provides trailingContentColor) {
                              Box(
                                  modifier =
                                      Modifier.defaultMinSize(
                                          minWidth = SegmentedMenuTokens.ItemTrailingIconSize
                                      ),
                                  contentAlignment = Alignment.Center,
                              ) {
                                  trailingContent()
                              }
                          }
                      }
                  }
              }
          }
      }

      internal val MenuItemShapes.hasRoundedCornerShapes: Boolean
  - id: live-androidx-menu-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 211
    endLine: 245
    sha256: 0d5dece77ef0df4937d1dbdd7a42e9d385b9caa1e0e95d72ca6d33b216ff1ab2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          modifier: Modifier = Modifier,
          popupPositionProvider: DropdownMenuPopupPositionProvider =
              MenuDefaults.rememberDropdownMenuPopupPositionProvider(MenuAnchorPosition.Below),
          properties: PopupProperties = MenuDefaults.DefaultMenuProperties,
          content: @Composable ColumnScope.() -> Unit,
      ) {
          val expandedState = remember { MutableTransitionState(false) }
          expandedState.targetState = expanded
          if (expandedState.currentState || expandedState.targetState) {
              DropdownMenuPopupImpl(
                  onDismissRequest = onDismissRequest,
                  popupPositionProvider = popupPositionProvider,
                  properties = properties,
                  content = {
                      DropdownMenuPopupContent(
                          modifier = modifier,
                          expandedState = expandedState,
                          transformOrigin = { popupPositionProvider.transformOrigin },
                          content = content,
                      )
                  },
              )
          }
      }

      /**
       * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
       *
       * A composable for creating a visually distinct group within a [DropdownMenuPopup].
       *
       * This component adds additional styling to [content]. It's used to group related menu items.
       *
       * ![Dropdown menu
       * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
       *
  - id: live-androidx-menu-lines-2136-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 2136
    endLine: 2170
    sha256: bb822f86b121ce57dd5f590ad86420980fee67c0a4ea263a03361cb632cea8ff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          get() = shape is RoundedCornerShape && selectedShape is RoundedCornerShape

      internal val MenuGroupShapes.hasRoundedCornerShapes: Boolean
          get() = shape is RoundedCornerShape && inactiveShape is RoundedCornerShape

      internal val MenuItemShapes.hasCornerBasedShapes: Boolean
          get() = shape is CornerBasedShape && selectedShape is CornerBasedShape

      internal val MenuGroupShapes.hasCornerBasedShapes: Boolean
          get() = shape is CornerBasedShape && inactiveShape is CornerBasedShape

      @Composable
      internal fun DropdownMenuItemContent(
          text: @Composable () -> Unit,
          onClick: () -> Unit,
          modifier: Modifier,
          leadingIcon: @Composable (() -> Unit)?,
          trailingIcon: @Composable (() -> Unit)?,
          enabled: Boolean,
          colors: MenuItemColors,
          contentPadding: PaddingValues,
          interactionSource: MutableInteractionSource?,
      ) {
          Row(
              modifier =
                  modifier
                      .clickable(
                          enabled = enabled,
                          onClick = onClick,
                          interactionSource = interactionSource,
                          indication = ripple(true),
                      )
                      .fillMaxWidth()
                      // Preferred min and max width used during the intrinsic measurement.
                      .sizeIn(
  - id: live-androidx-menu-lines-2171-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 2171
    endLine: 2205
    sha256: 93e4f40a062824a5d3cced28aa62d10bbbbda595e817140ba15ff2fc31feceda
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          minWidth = DropdownMenuItemDefaultMinWidth,
                          maxWidth = DropdownMenuItemDefaultMaxWidth,
                          minHeight = MenuListItemContainerHeight,
                      )
                      .padding(contentPadding),
              verticalAlignment = Alignment.CenterVertically,
          ) {
              // TODO(b/271818892): Align menu list item style with general list item style.
              ProvideTextStyle(MaterialTheme.typography.labelLarge) {
                  if (leadingIcon != null) {
                      CompositionLocalProvider(
                          LocalContentColor provides colors.leadingIconColor(enabled)
                      ) {
                          Box(Modifier.defaultMinSize(minWidth = ListTokens.ItemLeadingIconSize)) {
                              leadingIcon()
                          }
                      }
                  }
                  CompositionLocalProvider(LocalContentColor provides colors.textColor(enabled)) {
                      Box(
                          Modifier.weight(1f)
                              .padding(
                                  start =
                                      if (leadingIcon != null) {
                                          DropdownMenuItemHorizontalPadding
                                      } else {
                                          0.dp
                                      },
                                  end =
                                      if (trailingIcon != null) {
                                          DropdownMenuItemHorizontalPadding
                                      } else {
                                          0.dp
                                      },
                              )
  - id: live-androidx-menu-lines-2206-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 2206
    endLine: 2240
    sha256: 9239c0d8a10cb4732cb09cea57510c511d544aa947720fc76400d9a48dbfebc3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      ) {
                          text()
                      }
                  }
                  if (trailingIcon != null) {
                      CompositionLocalProvider(
                          LocalContentColor provides colors.trailingIconColor(enabled)
                      ) {
                          Box(Modifier.defaultMinSize(minWidth = ListTokens.ItemTrailingIconSize)) {
                              trailingIcon()
                          }
                      }
                  }
              }
          }
      }

      internal fun calculateTransformOrigin(anchorBounds: IntRect, menuBounds: IntRect): TransformOrigin {
          val pivotX =
              when {
                  menuBounds.left >= anchorBounds.right -> 0f
                  menuBounds.right <= anchorBounds.left -> 1f
                  menuBounds.width == 0 -> 0f
                  else -> {
                      val intersectionCenter =
                          (max(anchorBounds.left, menuBounds.left) +
                              min(anchorBounds.right, menuBounds.right)) / 2
                      (intersectionCenter - menuBounds.left).toFloat() / menuBounds.width
                  }
              }
          val pivotY =
              when {
                  menuBounds.top >= anchorBounds.bottom -> 0f
                  menuBounds.bottom <= anchorBounds.top -> 1f
                  menuBounds.height == 0 -> 0f
  - id: live-androidx-menu-lines-2241-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 2241
    endLine: 2275
    sha256: 390339253e707bf462a8b99957f91bf4684dca3c7b439c67d1049da9fa6949a8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  else -> {
                      val intersectionCenter =
                          (max(anchorBounds.top, menuBounds.top) +
                              min(anchorBounds.bottom, menuBounds.bottom)) / 2
                      (intersectionCenter - menuBounds.top).toFloat() / menuBounds.height
                  }
              }
          return TransformOrigin(pivotX, pivotY)
      }

      /**
       * [Column] of a label and its supporting text. Used in a [DropdownMenuItem]'s text parameter when a
       * supporting text is desired.
       *
       * @param supportingText the supporting text of the label.
       * @param content the content of the label.
       */
      @Composable
      private fun LabelWithSupportingText(
          supportingText: @Composable () -> Unit,
          modifier: Modifier,
          content: @Composable () -> Unit,
      ) {
          // TODO replace the typography with token when available
          Column(modifier = modifier) {
              ProvideTextStyle(MaterialTheme.typography.labelLarge, content = content)
              ProvideTextStyle(MaterialTheme.typography.bodyMedium, content = supportingText)
          }
      }

      @Composable
      private fun shapeByInteraction(
          shapes: MenuItemShapes,
          selected: Boolean,
          animationSpec: FiniteAnimationSpec<Float>,
  - id: live-androidx-menu-lines-2276-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 2276
    endLine: 2310
    sha256: c63b2de1bde5780bf7b6460a84665c5c38d5aa7981723eb82fdee217b8be134c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ): Shape {
          val shape =
              if (selected) {
                  shapes.selectedShape
              } else {
                  shapes.shape
              }

          if (shapes.hasRoundedCornerShapes)
              return key(shapes.shape, shapes.selectedShape) {
                  rememberAnimatedShape(shape as RoundedCornerShape, animationSpec)
              }
          else if (shapes.hasCornerBasedShapes)
              return key(shapes.shape, shapes.selectedShape) {
                  rememberAnimatedShape(shape as CornerBasedShape, animationSpec)
              }

          return shape
      }

      @Composable
      private fun shapeByInteraction(
          shapes: MenuGroupShapes,
          hasBeenHovered: Boolean,
          hovered: Boolean,
          animationSpec: FiniteAnimationSpec<Float>,
      ): Shape {
          val shape =
              if (hasBeenHovered && !hovered) {
                  shapes.inactiveShape
              } else {
                  shapes.shape
              }

          if (shapes.hasRoundedCornerShapes)
  - id: live-androidx-menu-lines-2311-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 2311
    endLine: 2345
    sha256: ea7d3bd82fb894e57f4417bfd58cef041115535cf60c8515d51aaa2659fc5268
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return key(shapes.shape, shapes.inactiveShape) {
                  rememberAnimatedShape(shape as RoundedCornerShape, animationSpec)
              }
          else if (shapes.hasCornerBasedShapes)
              return key(shapes.shape, shapes.inactiveShape) {
                  rememberAnimatedShape(shape as CornerBasedShape, animationSpec)
              }

          return shape
      }

      @Composable
      private fun WrappedLeadingIcon(content: @Composable BoxScope.() -> Unit) {
          Box(
              modifier = Modifier.defaultMinSize(minWidth = SegmentedMenuTokens.ItemLeadingIconSize),
              content = content,
          )
      }

      // Size defaults.
      internal val MenuVerticalMargin
          get() = 48.dp

      internal class MenuArrangement(
          val leadingSpacing: Dp,
          val trailingSpacing: Dp,
          val hasLeadingIcon: Boolean = true,
          val hasTrailingIcon: Boolean = true,
      ) : Arrangement.Horizontal {
          override val spacing = (leadingSpacing + trailingSpacing) / 2

          constructor(spacing: Dp) : this(spacing, spacing)

          constructor(
              spacing: Dp,
  - id: live-androidx-menu-lines-2346-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 2346
    endLine: 2380
    sha256: 595a1a306565728e7fac059e9227ecdcd70f22ba2078e67bd4e8a0a9f74eb837
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              hasLeadingIcon: Boolean,
              hasTrailingIcon: Boolean,
          ) : this(spacing, spacing, hasLeadingIcon, hasTrailingIcon)

          override fun Density.arrange(
              totalSize: Int,
              sizes: IntArray,
              layoutDirection: LayoutDirection,
              outPositions: IntArray,
          ) {
              if (sizes.isEmpty()) return
              val spacing1Px = leadingSpacing.roundToPx()

              sizes.forEachIndexed { index, size ->
                  val currentX =
                      when {
                          index == 0 -> 0
                          index == 1 && hasLeadingIcon -> sizes[0] + spacing1Px
                          index == 1 && !hasLeadingIcon && hasTrailingIcon -> totalSize - size
                          index == 2 -> totalSize - size
                          else -> 0
                      }

                  outPositions[index] =
                      if (layoutDirection == LayoutDirection.Ltr) {
                          currentX
                      } else {
                          totalSize - currentX - size
                      }
              }
          }
      }

      internal val MenuHorizontalMargin
          get() = 8.dp
  - id: live-androidx-menu-lines-2381-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 2381
    endLine: 2413
    sha256: da36d1d228ba367e3d7ec8771cc5331f223ec3f994a84d89e16507e957689ddf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      private val MenuListItemContainerHeight
          get() = 48.dp
      internal val DropdownMenuItemHorizontalPadding
          get() = 12.dp
      internal val DropdownMenuGroupVerticalPadding
          get() = 2.dp

      private val DropdownMenuSelectableItemPadding = PaddingValues(horizontal = 4.dp)
      private val DropdownMenuSelectableItemWithSupportTexPadding =
          PaddingValues(horizontal = 4.dp, vertical = 2.dp)
      private val DropdownMenuIconTextPadding =
          if (shouldUsePrecisionPointerComponentSizing.value) 12.dp else 8.dp
      internal val DropdownMenuVerticalPadding
          get() = 8.dp
      internal val DropdownMenuItemDefaultMinWidth
          get() = 112.dp
      internal val DropdownMenuItemDefaultMaxWidth
          get() = 280.dp

      internal val DropdownMenuGroupDefaultMinHeight
          get() = 32.dp

      private const val LeadingIconLayoutId = "leadingIcon"
      private const val TextLayoutId = "text"
      private const val TrailingIconLayoutId = "trailingIcon"
      private const val GhostLeadingIconLayoutId = "ghostLeadingIcon"

      // Menu open/close animation.
      internal const val ExpandedScaleTarget = 1f
      internal const val ClosedScaleTarget = 0.8f
      internal const val ExpandedAlphaTarget = 1f
      internal const val ClosedAlphaTarget = 0f
  - id: live-androidx-menu-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 246
    endLine: 280
    sha256: 06f05dfa7a51d1529ac9407483c2f4985a082b3f362f419d09007578fe58c061
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Example usage:
       *
       * @sample androidx.compose.material3.samples.GroupedMenuSample
       *
       * Example usage of cascading menus:
       *
       * @sample androidx.compose.material3.samples.MenuWithCascadingMenusSample
       * @param shapes the [MenuGroupShapes] of the menu group. The shapes provided should be determined
       *   by the number of groups in the menu as well as the group's position in the menu. There is a
       *   convenience function that can be used to easily determine the shape to be used at
       *   [MenuDefaults.groupShape]
       * @param modifier [Modifier] to be applied to this menu group.
       * @param containerColor the container color of the menu group. There are two predefined container
       *   colors at [MenuDefaults.groupStandardContainerColor] and
       *   [MenuDefaults.groupVibrantContainerColor] which you can use.
       * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
       *   overlay is applied on top of the container. A higher tonal elevation value will result in a
       *   darker color in light theme and lighter color in dark theme. See also: [Surface].
       * @param shadowElevation the elevation for the shadow below the menu group.
       * @param border the border to draw around the container of the menu group.
       * @param contentPadding the padding applied to the content of this menu group.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this menu group. This is currently only used for hover
       *   interactions.
       * @param content the content of this menu group, typically [DropdownMenuItem]s.
       *
       * @material3expressive
       */
      @Composable
      public fun DropdownMenuGroup(
          shapes: MenuGroupShapes,
          modifier: Modifier = Modifier,
          containerColor: Color = MenuDefaults.groupStandardContainerColor,
          tonalElevation: Dp = MenuDefaults.TonalElevation,
          shadowElevation: Dp = MenuDefaults.ShadowElevation,
  - id: live-androidx-menu-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 281
    endLine: 315
    sha256: 65b84e864c11f3606aa980f0c9be27fbcacd587a1014485175890c8827657cb9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          border: BorderStroke? = null,
          contentPadding: PaddingValues = MenuDefaults.DropdownMenuGroupContentPadding,
          interactionSource: MutableInteractionSource? = null,
          content: @Composable ColumnScope.() -> Unit,
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
          val hovered by interactionSource.collectIsHoveredAsState()
          var hasBeenHovered by remember { mutableStateOf(false) }
          if (hovered) {
              hasBeenHovered = true
          }

          val morphSpec = MotionSchemeKeyTokens.FastSpatial.value<Float>()
          val groupShape = shapeByInteraction(shapes, hasBeenHovered, hovered, morphSpec)

          Surface(
              modifier = Modifier.hoverable(interactionSource = interactionSource),
              shape = groupShape,
              color = containerColor,
              tonalElevation = tonalElevation,
              shadowElevation = shadowElevation,
              border = border,
          ) {
              Column(modifier = modifier.padding(contentPadding), content = content)
          }
      }

      /**
       * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
       *
       * Menus display a list of choices on a temporary surface. They appear when users interact with a
       * button, action, or other control.
       *
       * ![Dropdown menu
  - id: live-androidx-menu-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 316
    endLine: 350
    sha256: 2188569b4636f94a7c8735899403dee28547c58597160eba6cf21c3b7029cdec
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       * image](https://developer.android.com/images/reference/androidx/compose/material3/menu.png)
       *
       * Example usage:
       *
       * @sample androidx.compose.material3.samples.MenuSample
       * @param text text of the menu item
       * @param onClick called when this menu item is clicked
       * @param modifier the [Modifier] to be applied to this menu item
       * @param leadingIcon optional leading icon to be displayed at the beginning of the item's text
       * @param trailingIcon optional trailing icon to be displayed at the end of the item's text. This
       *   trailing icon slot can also accept [Text] to indicate a keyboard shortcut.
       * @param enabled controls the enabled state of this menu item. When `false`, this component will
       *   not respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param colors [MenuItemColors] that will be used to resolve the colors used for this menu item in
       *   different states. See [MenuDefaults.itemColors].
       * @param contentPadding the padding applied to the content of this menu item
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this menu item. You can use this to change the menu item's
       *   appearance or preview the menu item in different states. Note that if `null` is provided,
       *   interactions will still happen internally.
       */
      @Composable
      public expect fun DropdownMenuItem(
          text: @Composable () -> Unit,
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          leadingIcon: @Composable (() -> Unit)? = null,
          trailingIcon: @Composable (() -> Unit)? = null,
          enabled: Boolean = true,
          colors: MenuItemColors = MenuDefaults.itemColors(),
          contentPadding: PaddingValues = MenuDefaults.DropdownMenuItemContentPadding,
          interactionSource: MutableInteractionSource? = null,
      )
  - id: live-androidx-menu-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 351
    endLine: 385
    sha256: 604f0a5f2572cad5906e47b50c93156ac6d5314ca77e6de8a43a3fa38279588e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
       *
       * Menus display a list of choices on a temporary surface. They appear when users interact with a
       * button, action, or other control.
       *
       * ![Dropdown menu
       * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
       *
       * Example usage:
       *
       * @sample androidx.compose.material3.samples.GroupedMenuSample
       * @param onClick called when this menu item is clicked
       * @param text text of the menu item.
       * @param shape [Shape] of this menu item. The shapes provided should be determined by the number of
       *   items in the group or menu as well as the item's position in the menu. Please use
       *   [MenuDefaults.leadingItemShape] for the first item in a list, [MenuDefaults.middleItemShape]
       *   for the middle items in a list, and [MenuDefaults.trailingItemShape] for the last item in a
       *   list.
       * @param modifier the [Modifier] to be applied to this menu item.
       * @param leadingIcon optional leading icon to be displayed when the item is unchecked.
       * @param trailingContent optional trailing content to be displayed at the end of the item's text.
       * @param supportingText optional supporting text of the menu item.
       * @param enabled controls the enabled state of this menu item. When `false`, this component will
       *   not respond to user input.
       * @param colors [MenuItemColors] that will be used to resolve the colors for this menu item. Please
       *   see [MenuDefaults.itemColors].
       * @param horizontalArrangement the horizontal arrangement of the menu item's children.
       * @param contentPadding the padding applied to the content of this menu item.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this menu item.
       *
       * @material3expressive
       */
      @Composable
  - id: live-androidx-menu-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 36
    endLine: 70
    sha256: 966316cbe5d2af0a45576aa1fb8b8a5459873545753a10c4002b1bd45034cea3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.foundation.interaction.collectIsHoveredAsState
      import androidx.compose.foundation.layout.Arrangement
      import androidx.compose.foundation.layout.Box
      import androidx.compose.foundation.layout.BoxScope
      import androidx.compose.foundation.layout.Column
      import androidx.compose.foundation.layout.ColumnScope
      import androidx.compose.foundation.layout.IntrinsicSize
      import androidx.compose.foundation.layout.PaddingValues
      import androidx.compose.foundation.layout.Row
      import androidx.compose.foundation.layout.defaultMinSize
      import androidx.compose.foundation.layout.fillMaxWidth
      import androidx.compose.foundation.layout.padding
      import androidx.compose.foundation.layout.sizeIn
      import androidx.compose.foundation.layout.width
      import androidx.compose.foundation.rememberScrollState
      import androidx.compose.foundation.shape.CornerBasedShape
      import androidx.compose.foundation.shape.RoundedCornerShape
      import androidx.compose.foundation.verticalScroll
      import androidx.compose.material3.internal.MenuPosition
      import androidx.compose.material3.internal.MenuPosition.bottomToAnchorBottom
      import androidx.compose.material3.internal.MenuPosition.bottomToAnchorTop
      import androidx.compose.material3.internal.MenuPosition.bottomToWindowBottom
      import androidx.compose.material3.internal.MenuPosition.centerToAnchorTop
      import androidx.compose.material3.internal.MenuPosition.endToAnchorEnd
      import androidx.compose.material3.internal.MenuPosition.endToAnchorStart
      import androidx.compose.material3.internal.MenuPosition.leftToWindowLeft
      import androidx.compose.material3.internal.MenuPosition.rightToWindowRight
      import androidx.compose.material3.internal.MenuPosition.startToAnchorEnd
      import androidx.compose.material3.internal.MenuPosition.startToAnchorStart
      import androidx.compose.material3.internal.MenuPosition.topToAnchorBottom
      import androidx.compose.material3.internal.MenuPosition.topToAnchorTop
      import androidx.compose.material3.internal.MenuPosition.topToWindowTop
      import androidx.compose.material3.internal.rememberAnimatedShape
      import androidx.compose.material3.tokens.ListTokens
      import androidx.compose.material3.tokens.MotionSchemeKeyTokens
  - id: live-androidx-menu-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 386
    endLine: 420
    sha256: c04c70dd246780aa598ab5e30071a010a4db9c36c99d04b17b12e90f248c0ae2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public fun DropdownMenuItem(
          onClick: () -> Unit,
          text: @Composable () -> Unit,
          shape: Shape,
          modifier: Modifier = Modifier,
          leadingIcon: @Composable (() -> Unit)? = null,
          trailingContent: @Composable (() -> Unit)? = null,
          supportingText: @Composable (() -> Unit)? = null,
          enabled: Boolean = true,
          colors: MenuItemColors = MenuDefaults.itemColors(),
          horizontalArrangement: Arrangement.Horizontal =
              MenuDefaults.DropdownMenuItemHorizontalArrangement,
          contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
          interactionSource: MutableInteractionSource? = null,
      ) {
          DropdownMenuItemContent(
              text = text,
              selected = false,
              onClick = onClick,
              modifier = modifier.semantics { role = Role.Button },
              supportingText = supportingText,
              leadingIcon = leadingIcon,
              trailingContent = trailingContent,
              selectedLeadingIcon = null,
              enabled = enabled,
              colors = colors,
              shapes = MenuDefaults.itemShapes(shape = shape),
              horizontalArrangement = horizontalArrangement,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
          )
      }

      /**
       * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
  - id: live-androidx-menu-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 421
    endLine: 455
    sha256: 54060e9f9d5e31155077431ce37a48bdc38f32b37ee5ade39d5cdf3464c67436
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * Menus display a list of choices on a temporary surface. They appear when users interact with a
       * button, action, or other control.
       *
       * A menu item that changes its styling depending on the [checked] state.
       *
       * This composable is suitable for menu items that represent an on/off setting, behaving like a
       * checkbox or switch within the menu.
       *
       * ![Dropdown menu
       * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
       *
       * Example usage:
       *
       * @sample androidx.compose.material3.samples.GroupedMenuSample
       * @param checked whether this menu item is currently checked.
       * @param onCheckedChange called when this menu item is clicked, with the new checked state.
       * @param text text of the menu item.
       * @param shapes [MenuItemShapes] that will be used to resolve the shapes for this menu item. The
       *   shape of this item is determined by the value of [checked]. The shapes provided should be
       *   determined by the number of items in the group or menu as well as the item's position in the
       *   menu. There is a convenience function that can be used to easily determine the shape to be used
       *   at [MenuDefaults.itemShape]
       * @param modifier the [Modifier] to be applied to this menu item.
       * @param leadingIcon optional leading icon to be displayed when the item is unchecked.
       * @param checkedLeadingIcon optional leading icon to be displayed when the item is checked.
       * @param trailingContent optional trailing content to be displayed at the end of the item's text.
       * @param supportingText optional supporting text of the menu item.
       * @param enabled controls the enabled state of this menu item. When `false`, this component will
       *   not respond to user input.
       * @param colors [SelectableMenuItemColors] that will be used to resolve the colors for this menu
       *   item. There are two predefined [SelectableMenuItemColors] at
       *   [MenuDefaults.selectableItemColors] and [MenuDefaults.selectableItemVibrantColors] which you
       *   can use or modify.
       * @param horizontalArrangement the horizontal arrangement of the menu item's children.
  - id: live-androidx-menu-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 456
    endLine: 490
    sha256: 4bce2ca7f6f3642484004c9b9143a2613dfffcbb78e6b0c5765edf62b0f4db60
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param contentPadding the padding applied to the content of this menu item.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this menu item.
       *
       * @material3expressive
       */
      @Composable
      public fun CheckableDropdownMenuItem(
          checked: Boolean,
          onCheckedChange: (Boolean) -> Unit,
          text: @Composable () -> Unit,
          shapes: MenuItemShapes,
          modifier: Modifier = Modifier,
          leadingIcon: @Composable (() -> Unit)? = null,
          checkedLeadingIcon: @Composable (() -> Unit)? = null,
          trailingContent: @Composable (() -> Unit)? = null,
          supportingText: @Composable (() -> Unit)? = null,
          enabled: Boolean = true,
          colors: SelectableMenuItemColors = MenuDefaults.selectableItemColors(),
          horizontalArrangement: Arrangement.Horizontal =
              MenuDefaults.DropdownMenuItemHorizontalArrangement,
          contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
          interactionSource: MutableInteractionSource? = null,
      ) {
          DropdownMenuItemContent(
              text = text,
              selected = checked,
              onClick = { onCheckedChange(!checked) },
              modifier = modifier.semantics { role = Role.Checkbox },
              supportingText = supportingText,
              leadingIcon = leadingIcon,
              trailingContent = trailingContent,
              selectedLeadingIcon = checkedLeadingIcon,
              enabled = enabled,
              colors = colors,
  - id: live-androidx-menu-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 491
    endLine: 525
    sha256: 3a80e13912153ebb19eaa8ccc91e3d25c657893bbb142338a784a0d7f66f12f6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              shapes = shapes,
              horizontalArrangement = horizontalArrangement,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
          )
      }

      /**
       * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
       *
       * Menus display a list of choices on a temporary surface. They appear when users interact with a
       * button, action, or other control.
       *
       * A menu item that changes its styling depending on the [checked] state.
       *
       * This composable is suitable for menu items that represent an on/off setting, behaving like a
       * checkbox or switch within the menu.
       *
       * ![Dropdown menu
       * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
       *
       * Example usage:
       *
       * @sample androidx.compose.material3.samples.GroupedMenuSample
       * @param checked whether this menu item is currently checked.
       * @param onCheckedChange called when this menu item is clicked, with the new checked state.
       * @param text text of the menu item.
       * @param shapes [MenuItemShapes] that will be used to resolve the shapes for this menu item. The
       *   shape of this item is determined by the value of [checked]. The shapes provided should be
       *   determined by the number of items in the group or menu as well as the item's position in the
       *   menu. Please use [MenuDefaults.leadingItemShape] for the first item in a list,
       *   [MenuDefaults.middleItemShape] for the middle items in a list, and
       *   [MenuDefaults.trailingItemShape] for the last item in a list.
       * @param modifier the [Modifier] to be applied to this menu item.
       * @param leadingIcon optional leading icon to be displayed when the item is unchecked.
  - id: live-androidx-menu-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 526
    endLine: 560
    sha256: 71c61ea151df92cd46a022ba04eda3039bb0dbda6703cc9951e04b5964e1e6d3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param checkedLeadingIcon optional leading icon to be displayed when the item is checked.
       * @param trailingContent optional trailing content to be displayed at the end of the item's text.
       * @param supportingText optional supporting text of the menu item.
       * @param enabled controls the enabled state of this menu item. When `false`, this component will
       *   not respond to user input.
       * @param colors [SelectableMenuItemColors] that will be used to resolve the colors for this menu
       *   item. There are two predefined [SelectableMenuItemColors] at
       *   [MenuDefaults.selectableItemColors] and [MenuDefaults.selectableItemVibrantColors] which you
       *   can use or modify.
       * @param horizontalArrangement the horizontal arrangement of the menu item's children.
       * @param contentPadding the padding applied to the content of this menu item.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this menu item.
       *
       * @material3expressive
       */
      @Deprecated(
          message = "Use CheckableDropdownMenuItem instead.",
          replaceWith =
              ReplaceWith(
                  "CheckableDropdownMenuItem(checked = checked, onCheckedChange = onCheckedChange, text = text, shapes = shapes, modifier = modifier, leadingIcon = leadingIcon, checkedLeadingIcon = checkedLeadingIcon, trailingContent = trailingContent, supportingText = supportingText, enabled = enabled, colors = colors, horizontalArrangement = horizontalArrangement, contentPadding = contentPadding, interactionSource = interactionSource)"
              ),
          level = DeprecationLevel.HIDDEN,
      )
      @ExperimentalMaterial3ExpressiveApi
      @JvmName("DropdownMenuItemChecked")
      @Composable
      public fun DropdownMenuItem(
          checked: Boolean,
          onCheckedChange: (Boolean) -> Unit,
          text: @Composable () -> Unit,
          shapes: MenuItemShapes,
          modifier: Modifier = Modifier,
          leadingIcon: @Composable (() -> Unit)? = null,
          checkedLeadingIcon: @Composable (() -> Unit)? = null,
  - id: live-androidx-menu-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 561
    endLine: 595
    sha256: 4bdd2e827827781f9aa3f6df8ee3b019c44ec18dd642cc194cabf764a347865b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          trailingContent: @Composable (() -> Unit)? = null,
          supportingText: @Composable (() -> Unit)? = null,
          enabled: Boolean = true,
          colors: SelectableMenuItemColors = MenuDefaults.selectableItemColors(),
          horizontalArrangement: Arrangement.Horizontal =
              MenuDefaults.DropdownMenuItemHorizontalArrangement,
          contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
          interactionSource: MutableInteractionSource? = null,
      ) {
          DropdownMenuItemContent(
              text = text,
              selected = checked,
              onClick = { onCheckedChange(!checked) },
              modifier = modifier.semantics { role = Role.Checkbox },
              supportingText = supportingText,
              leadingIcon = leadingIcon,
              trailingContent = trailingContent,
              selectedLeadingIcon = checkedLeadingIcon,
              enabled = enabled,
              colors = colors,
              shapes = shapes,
              horizontalArrangement = horizontalArrangement,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
          )
      }

      /**
       * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
       *
       * Menus display a list of choices on a temporary surface. They appear when users interact with a
       * button, action, or other control.
       *
       * A menu item that changes its styling depending on the [checked] state.
       *
  - id: live-androidx-menu-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 596
    endLine: 630
    sha256: 314e5338b47f4c6069f867cf7a00cccfccfff299a983bc73d2fb8ca8e455a846
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * This composable is suitable for menu items that represent an on/off setting, behaving like a
       * checkbox or switch within the menu.
       *
       * ![Dropdown menu
       * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
       *
       * Example usage:
       *
       * @sample androidx.compose.material3.samples.GroupedMenuSample
       * @param checked whether this menu item is currently checked
       * @param onCheckedChange called when this menu item is clicked, with the new checked state
       * @param text text of the menu item
       * @param shapes [MenuItemShapes] that will be used to resolve the shapes for this menu item
       * @param modifier the [Modifier] to be applied to this menu item
       * @param leadingIcon optional leading icon to be displayed when the item is unchecked
       * @param checkedLeadingIcon optional leading icon to be displayed when the item is checked
       * @param trailingIcon optional trailing icon to be displayed at the end of the item's text
       * @param supportingText optional supporting text of the menu item
       * @param enabled controls the enabled state of this menu item
       * @param colors [MenuItemColors] that will be used to resolve the colors for this menu item
       * @param horizontalArrangement the horizontal arrangement of the menu item's children
       * @param contentPadding the padding applied to the content of this menu item
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this menu item
       *
       * @material3expressive
       */
      @Deprecated("Maintained for binary compatibility.", level = DeprecationLevel.HIDDEN)
      @JvmName("DropdownMenuItem")
      @Composable
      public fun DropdownMenuItemLegacy(
          checked: Boolean,
          onCheckedChange: (Boolean) -> Unit,
          text: @Composable () -> Unit,
          shapes: MenuItemShapes,
  - id: live-androidx-menu-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 631
    endLine: 665
    sha256: 16e77217c16e929c626f2ed836a13cb399706a474e45a045a592b388c6eae6c3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          modifier: Modifier = Modifier,
          leadingIcon: @Composable (() -> Unit)? = null,
          checkedLeadingIcon: @Composable (() -> Unit)? = null,
          trailingIcon: @Composable (() -> Unit)? = null,
          supportingText: @Composable (() -> Unit)? = null,
          enabled: Boolean = true,
          colors: MenuItemColors = MenuDefaults.selectableItemColorsLegacy(),
          horizontalArrangement: Arrangement.Horizontal =
              MenuDefaults.DropdownMenuItemHorizontalArrangement,
          contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
          interactionSource: MutableInteractionSource? = null,
      ) {
          DropdownMenuItemContent(
              text = text,
              selected = checked,
              onClick = { onCheckedChange(!checked) },
              modifier = modifier.semantics { role = Role.Checkbox },
              supportingText = supportingText,
              leadingIcon = leadingIcon,
              trailingContent = trailingIcon,
              selectedLeadingIcon = checkedLeadingIcon,
              enabled = enabled,
              colors = colors,
              shapes = shapes,
              horizontalArrangement = horizontalArrangement,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
          )
      }

      /**
       * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
       *
       * Menus display a list of choices on a temporary surface. They appear when users interact with a
       * button, action, or other control.
  - id: live-androidx-menu-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 666
    endLine: 700
    sha256: 200b8585d0b3a1076407bc9ce6ba5dfc55e978d8ef3f595240298f7e9930648b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * A menu item that changes its styling depending on the [selected] state.
       *
       * This composable is suitable for menu items that represent an on/off setting, behaving like a
       * radio button within the menu.
       *
       * ![Dropdown menu
       * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
       *
       * Example usage:
       *
       * @sample androidx.compose.material3.samples.ExposedDropdownMenuSample
       * @param selected whether this menu item is currently selected.
       * @param onClick called when this menu item is clicked.
       * @param text text of the menu item.
       * @param shapes [MenuItemShapes] that will be used to resolve the shapes for this menu item. The
       *   shape of this item is determined by the value of [selected]. The shapes provided should be
       *   determined by the number of items in the group or menu as well as the item's position in the
       *   menu. There is a convenience function that can be used to easily determine the shape to be used
       *   at [MenuDefaults.itemShape]
       * @param modifier the [Modifier] to be applied to this menu item.
       * @param leadingIcon optional leading icon to be displayed when the item is unchecked.
       * @param selectedLeadingIcon optional leading icon to be displayed when the item is selected.
       * @param trailingContent optional trailing content to be displayed at the end of the item's text.
       * @param supportingText optional supporting text of the menu item.
       * @param enabled controls the enabled state of this menu item. When `false`, this component will
       *   not respond to user input.
       * @param colors [SelectableMenuItemColors] that will be used to resolve the colors for this menu
       *   item. There are two predefined [SelectableMenuItemColors] at
       *   [MenuDefaults.selectableItemColors] and [MenuDefaults.selectableItemVibrantColors] which you
       *   can use or modify.
       * @param horizontalArrangement the horizontal arrangement of the menu item's children.
       * @param contentPadding the padding applied to the content of this menu item.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this menu item.
  - id: live-androidx-menu-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 701
    endLine: 735
    sha256: 6cb0de2457e23dd39ea6a446e8dbec4d911d44e7559f61e4c642b986d9c3cfa5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @material3expressive
       */
      @Composable
      public fun SelectableDropdownMenuItem(
          selected: Boolean,
          onClick: () -> Unit,
          text: @Composable () -> Unit,
          shapes: MenuItemShapes,
          modifier: Modifier = Modifier,
          leadingIcon: @Composable (() -> Unit)? = null,
          selectedLeadingIcon: @Composable (() -> Unit)? = null,
          trailingContent: @Composable (() -> Unit)? = null,
          supportingText: @Composable (() -> Unit)? = null,
          enabled: Boolean = true,
          colors: SelectableMenuItemColors = MenuDefaults.selectableItemColors(),
          horizontalArrangement: Arrangement.Horizontal =
              MenuDefaults.DropdownMenuItemHorizontalArrangement,
          contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
          interactionSource: MutableInteractionSource? = null,
      ) {
          DropdownMenuItemContent(
              text = text,
              selected = selected,
              onClick = onClick,
              modifier = modifier.semantics { role = Role.RadioButton },
              supportingText = supportingText,
              leadingIcon = leadingIcon,
              trailingContent = trailingContent,
              selectedLeadingIcon = selectedLeadingIcon,
              enabled = enabled,
              colors = colors,
              shapes = shapes,
              horizontalArrangement = horizontalArrangement,
              contentPadding = contentPadding,
  - id: live-androidx-menu-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 71
    endLine: 105
    sha256: 9c25dbd59f968a978ffdbd882f9bccfb5ec4e6d03afb0d97365c792b43c4a3ff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      import androidx.compose.material3.tokens.SegmentedMenuTokens
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.CompositionLocalProvider
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.key
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.setValue
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.graphics.TransformOrigin
      import androidx.compose.ui.graphics.graphicsLayer
      import androidx.compose.ui.graphics.takeOrElse
      import androidx.compose.ui.platform.LocalInspectionMode
      import androidx.compose.ui.semantics.Role
      import androidx.compose.ui.semantics.role
      import androidx.compose.ui.semantics.semantics
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.DpOffset
      import androidx.compose.ui.unit.IntRect
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.window.Popup
      import androidx.compose.ui.window.PopupPositionProvider
      import androidx.compose.ui.window.PopupProperties
      import kotlin.jvm.JvmName
      import kotlin.math.max
      import kotlin.math.min
  - id: live-androidx-menu-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 736
    endLine: 770
    sha256: 6077893c1cc5ede2eb43e010095b70493ef7b5967ca83c9f4cb866483e0d3f49
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              interactionSource = interactionSource,
          )
      }

      /**
       * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
       *
       * Menus display a list of choices on a temporary surface. They appear when users interact with a
       * button, action, or other control.
       *
       * A menu item that changes its styling depending on the [selected] state.
       *
       * This composable is suitable for menu items that represent an on/off setting, behaving like a
       * radio button within the menu.
       *
       * ![Dropdown menu
       * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
       *
       * Example usage:
       *
       * @sample androidx.compose.material3.samples.ExposedDropdownMenuSample
       * @param selected whether this menu item is currently selected.
       * @param onClick called when this menu item is clicked.
       * @param text text of the menu item.
       * @param shapes [MenuItemShapes] that will be used to resolve the shapes for this menu item. The
       *   shape of this item is determined by the value of [selected]. The shapes provided should be
       *   determined by the number of items in the group or menu as well as the item's position in the
       *   menu. Please use [MenuDefaults.leadingItemShape] for the first item in a list,
       *   [MenuDefaults.middleItemShape] for the middle items in a list, and
       *   [MenuDefaults.trailingItemShape] for the last item in a list.
       * @param modifier the [Modifier] to be applied to this menu item.
       * @param leadingIcon optional leading icon to be displayed when the item is unselected.
       * @param selectedLeadingIcon optional leading icon to be displayed when the item is selected.
       * @param trailingContent optional trailing content to be displayed at the end of the item's text.
       * @param supportingText optional supporting text of the menu item.
  - id: live-androidx-menu-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 771
    endLine: 805
    sha256: 12d87c3827345aa23b6a960247bbb9ebbb8df7a7548c7b00a9d63a2d176bbf7a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param enabled controls the enabled state of this menu item. When `false`, this component will
       *   not respond to user input.
       * @param colors [SelectableMenuItemColors] that will be used to resolve the colors for this menu
       *   item. There are two predefined [SelectableMenuItemColors] at
       *   [MenuDefaults.selectableItemColors] and [MenuDefaults.selectableItemVibrantColors] which you
       *   can use or modify.
       * @param horizontalArrangement the horizontal arrangement of the menu item's children.
       * @param contentPadding the padding applied to the content of this menu item.
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this menu item.
       *
       * @material3expressive
       */
      @Deprecated(
          message = "Use SelectableDropdownMenuItem instead.",
          replaceWith =
              ReplaceWith(
                  "SelectableDropdownMenuItem(selected = selected, onClick = onClick, text = text, shapes = shapes, modifier = modifier, leadingIcon = leadingIcon, selectedLeadingIcon = selectedLeadingIcon, trailingContent = trailingContent, supportingText = supportingText, enabled = enabled, colors = colors, horizontalArrangement = horizontalArrangement, contentPadding = contentPadding, interactionSource = interactionSource)"
              ),
          level = DeprecationLevel.HIDDEN,
      )
      @ExperimentalMaterial3ExpressiveApi
      @JvmName("DropdownMenuItemSelected")
      @Composable
      public fun DropdownMenuItem(
          selected: Boolean,
          onClick: () -> Unit,
          text: @Composable () -> Unit,
          shapes: MenuItemShapes,
          modifier: Modifier = Modifier,
          leadingIcon: @Composable (() -> Unit)? = null,
          selectedLeadingIcon: @Composable (() -> Unit)? = null,
          trailingContent: @Composable (() -> Unit)? = null,
          supportingText: @Composable (() -> Unit)? = null,
          enabled: Boolean = true,
  - id: live-androidx-menu-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 806
    endLine: 840
    sha256: 1dfd67cdbe3a7bb850a75711077cc7d38ad970ccd27efae4b06287510fdd148d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          colors: SelectableMenuItemColors = MenuDefaults.selectableItemColors(),
          horizontalArrangement: Arrangement.Horizontal =
              MenuDefaults.DropdownMenuItemHorizontalArrangement,
          contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
          interactionSource: MutableInteractionSource? = null,
      ) {
          DropdownMenuItemContent(
              text = text,
              selected = selected,
              onClick = onClick,
              modifier = modifier.semantics { role = Role.RadioButton },
              supportingText = supportingText,
              leadingIcon = leadingIcon,
              trailingContent = trailingContent,
              selectedLeadingIcon = selectedLeadingIcon,
              enabled = enabled,
              colors = colors,
              shapes = shapes,
              horizontalArrangement = horizontalArrangement,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
          )
      }

      /**
       * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
       *
       * Menus display a list of choices on a temporary surface. They appear when users interact with a
       * button, action, or other control.
       *
       * A menu item that changes its styling depending on the [selected] state.
       *
       * This composable is suitable for menu items that represent an on/off setting, behaving like a
       * radio button within the menu.
       *
  - id: live-androidx-menu-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 841
    endLine: 875
    sha256: 6315d0420775fc6c54f65b87d38f8ea12ef7bc5c4cb03c9cc1cd6a7901be51bf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * ![Dropdown menu
       * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
       *
       * Example usage:
       *
       * @sample androidx.compose.material3.samples.ExposedDropdownMenuSample
       * @param selected whether this menu item is currently selected
       * @param onClick called when this menu item is clicked
       * @param text text of the menu item
       * @param shapes [MenuItemShapes] that will be used to resolve the shapes for this menu item
       * @param modifier the [Modifier] to be applied to this menu item
       * @param leadingIcon optional leading icon to be displayed when the item is unchecked
       * @param selectedLeadingIcon optional leading icon to be displayed when the item is selected
       * @param trailingIcon optional trailing icon to be displayed at the end of the item's text
       * @param supportingText optional supporting text of the menu item
       * @param enabled controls the enabled state of this menu item
       * @param colors [MenuItemColors] that will be used to resolve the colors for this menu item
       * @param horizontalArrangement the horizontal arrangement of the menu item's children
       * @param contentPadding the padding applied to the content of this menu item
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this menu item
       *
       * @material3expressive
       */
      @Deprecated("Maintained for binary compatibility.", level = DeprecationLevel.HIDDEN)
      @JvmName("DropdownMenuItem")
      @Composable
      public fun DropdownMenuItemLegacy(
          selected: Boolean,
          onClick: () -> Unit,
          text: @Composable () -> Unit,
          shapes: MenuItemShapes,
          modifier: Modifier = Modifier,
          leadingIcon: @Composable (() -> Unit)? = null,
          selectedLeadingIcon: @Composable (() -> Unit)? = null,
  - id: live-androidx-menu-lines-876-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 876
    endLine: 910
    sha256: 3323ebe1f186895c1d578d508110dbf2d5dd336e0237be112d46414f4dbe2551
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          trailingIcon: @Composable (() -> Unit)? = null,
          supportingText: @Composable (() -> Unit)? = null,
          enabled: Boolean = true,
          colors: MenuItemColors = MenuDefaults.selectableItemColorsLegacy(),
          horizontalArrangement: Arrangement.Horizontal =
              MenuDefaults.DropdownMenuItemHorizontalArrangement,
          contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
          interactionSource: MutableInteractionSource? = null,
      ) {
          DropdownMenuItemContent(
              text = text,
              selected = selected,
              onClick = onClick,
              modifier = modifier.semantics { role = Role.RadioButton },
              supportingText = supportingText,
              leadingIcon = leadingIcon,
              trailingContent = trailingIcon,
              selectedLeadingIcon = selectedLeadingIcon,
              enabled = enabled,
              colors = colors,
              shapes = shapes,
              horizontalArrangement = horizontalArrangement,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
          )
      }

      /**
       * Represents the text and icon colors used in a menu item at different states.
       *
       * @param textColor the text color of this [DropdownMenuItem] when enabled and unselected /
       *   unchecked.
       * @param leadingIconColor the leading icon color of this [DropdownMenuItem] when enabled and
       *   unselected / unchecked.
       * @param trailingIconColor the trailing icon color of this [DropdownMenuItem] when enabled and
  - id: live-androidx-menu-lines-911-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 911
    endLine: 945
    sha256: 7758cf8c978b38b2f4f14ac4ff9d6abc0ec2630dd02f31e43a33521732eb3d9e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   unselected / unchecked.
       * @param disabledTextColor the text color of this [DropdownMenuItem] when not enabled
       * @param disabledLeadingIconColor the leading icon color of this [DropdownMenuItem] when not
       *   enabled
       * @param disabledTrailingIconColor the trailing icon color of this [DropdownMenuItem] when not
       *   enabled
       * @constructor create an instance with arbitrary colors. See [MenuDefaults.itemColors] for the
       *   default colors used in a [DropdownMenuItem].
       */
      @Immutable
      public class MenuItemColors(
          public val textColor: Color,
          public val leadingIconColor: Color,
          public val trailingIconColor: Color,
          public val disabledTextColor: Color,
          public val disabledLeadingIconColor: Color,
          public val disabledTrailingIconColor: Color,
      ) {

          /** The container color of this menu item when enabled. */
          public var containerColor: Color = Color.Transparent
              internal set

          /** The container color of this menu item when not enabled. */
          public var disabledContainerColor: Color = Color.Transparent
              internal set

          /** The container color of this menu item when enabled and selected. */
          @Deprecated("Use SelectableMenuItemColors instead.")
          public val selectedContainerColor: Color
              get() = containerColor

          /** The text color of this menu item when enabled and selected. */
          @Deprecated("Use SelectableMenuItemColors instead.")
          public val selectedTextColor: Color
  - id: live-androidx-menu-lines-946-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 946
    endLine: 980
    sha256: 39c45971acc15222699a8fe5e98c7fc2beeab24fcd5128199caba76ab16922a0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              get() = textColor

          /** The leading icon color of this menu item when enabled and selected. */
          @Deprecated("Use SelectableMenuItemColors instead.")
          public val selectedLeadingIconColor: Color
              get() = leadingIconColor

          /** The trailing icon color of this menu item when enabled and selected. */
          @Deprecated("Use SelectableMenuItemColors instead.")
          public val selectedTrailingIconColor: Color
              get() = trailingIconColor

          /** The trailing content color of this menu item when enabled and selected. */
          @Deprecated("Use SelectableMenuItemColors instead.")
          public val selectedTrailingContentColor: Color
              get() = trailingIconColor

          // Secondary constructor to initialize all 8 properties
          public constructor(
              textColor: Color,
              leadingIconColor: Color,
              trailingIconColor: Color,
              disabledTextColor: Color,
              disabledLeadingIconColor: Color,
              disabledTrailingIconColor: Color,
              containerColor: Color,
              disabledContainerColor: Color,
          ) : this(
              textColor = textColor,
              leadingIconColor = leadingIconColor,
              trailingIconColor = trailingIconColor,
              disabledTextColor = disabledTextColor,
              disabledLeadingIconColor = disabledLeadingIconColor,
              disabledTrailingIconColor = disabledTrailingIconColor,
          ) {
  - id: live-androidx-menu-lines-981-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt
    startLine: 981
    endLine: 1015
    sha256: a6fc8e891a4e6140974856c7e7c9ab19fca0adc0bedc4d7f4e43ceedb2a29cba
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              this.containerColor = containerColor
              this.disabledContainerColor = disabledContainerColor
          }

          @Deprecated(
              "MenuItemColors no longer supports selected colors. Use SelectableMenuItemColors instead."
          )
          public constructor(
              textColor: Color = Color.Unspecified,
              leadingIconColor: Color = Color.Unspecified,
              trailingIconColor: Color = Color.Unspecified,
              disabledTextColor: Color = Color.Unspecified,
              disabledLeadingIconColor: Color = Color.Unspecified,
              disabledTrailingIconColor: Color = Color.Unspecified,
              selectedTextColor: Color = Color.Unspecified,
              selectedContainerColor: Color = Color.Unspecified,
              selectedLeadingIconColor: Color = Color.Unspecified,
              selectedTrailingIconColor: Color = Color.Unspecified,
          ) : this(
              textColor = textColor,
              leadingIconColor = leadingIconColor,
              trailingIconColor = trailingIconColor,
              disabledTextColor = disabledTextColor,
              disabledLeadingIconColor = disabledLeadingIconColor,
              disabledTrailingIconColor = disabledTrailingIconColor,
          )

          @Deprecated(
              "MenuItemColors no longer supports selected colors. Use SelectableMenuItemColors instead."
          )
          public constructor(
              textColor: Color,
              leadingIconColor: Color,
              trailingIconColor: Color,
              disabledTextColor: Color,
compose:
  id: live-androidx-menu
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3.DropdownMenu
  sections:
    - id: live-androidx-menu-lines-1
      title: Material 3 Menu source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1-source
      relatedIds: []
    - id: live-androidx-menu-lines-1016
      title: Material 3 Menu source (lines 1016–1050)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1016-source
      relatedIds: []
    - id: live-androidx-menu-lines-1051
      title: Material 3 Menu source (lines 1051–1085)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1051-source
      relatedIds: []
    - id: live-androidx-menu-lines-106
      title: Material 3 Menu source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-106-source
      relatedIds: []
    - id: live-androidx-menu-lines-1086
      title: Material 3 Menu source (lines 1086–1120)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1086-source
      relatedIds: []
    - id: live-androidx-menu-lines-1121
      title: Material 3 Menu source (lines 1121–1155)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1121-source
      relatedIds: []
    - id: live-androidx-menu-lines-1156
      title: Material 3 Menu source (lines 1156–1190)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1156-source
      relatedIds: []
    - id: live-androidx-menu-lines-1191
      title: Material 3 Menu source (lines 1191–1225)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1191-source
      relatedIds: []
    - id: live-androidx-menu-lines-1226
      title: Material 3 Menu source (lines 1226–1260)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1226-source
      relatedIds: []
    - id: live-androidx-menu-lines-1261
      title: Material 3 Menu source (lines 1261–1295)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1261-source
      relatedIds: []
    - id: live-androidx-menu-lines-1296
      title: Material 3 Menu source (lines 1296–1330)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1296-source
      relatedIds: []
    - id: live-androidx-menu-lines-1331
      title: Material 3 Menu source (lines 1331–1365)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1331-source
      relatedIds: []
    - id: live-androidx-menu-lines-1366
      title: Material 3 Menu source (lines 1366–1400)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1366-source
      relatedIds: []
    - id: live-androidx-menu-lines-1401
      title: Material 3 Menu source (lines 1401–1435)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1401-source
      relatedIds: []
    - id: live-androidx-menu-lines-141
      title: Material 3 Menu source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-141-source
      relatedIds: []
    - id: live-androidx-menu-lines-1436
      title: Material 3 Menu source (lines 1436–1470)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1436-source
      relatedIds: []
    - id: live-androidx-menu-lines-1471
      title: Material 3 Menu source (lines 1471–1505)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1471-source
      relatedIds: []
    - id: live-androidx-menu-lines-1506
      title: Material 3 Menu source (lines 1506–1540)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1506-source
      relatedIds: []
    - id: live-androidx-menu-lines-1541
      title: Material 3 Menu source (lines 1541–1575)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1541-source
      relatedIds: []
    - id: live-androidx-menu-lines-1576
      title: Material 3 Menu source (lines 1576–1610)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1576-source
      relatedIds: []
    - id: live-androidx-menu-lines-1611
      title: Material 3 Menu source (lines 1611–1645)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1611-source
      relatedIds: []
    - id: live-androidx-menu-lines-1646
      title: Material 3 Menu source (lines 1646–1680)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1646-source
      relatedIds: []
    - id: live-androidx-menu-lines-1681
      title: Material 3 Menu source (lines 1681–1715)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1681-source
      relatedIds: []
    - id: live-androidx-menu-lines-1716
      title: Material 3 Menu source (lines 1716–1750)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1716-source
      relatedIds: []
    - id: live-androidx-menu-lines-1751
      title: Material 3 Menu source (lines 1751–1785)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1751-source
      relatedIds: []
    - id: live-androidx-menu-lines-176
      title: Material 3 Menu source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-176-source
      relatedIds: []
    - id: live-androidx-menu-lines-1786
      title: Material 3 Menu source (lines 1786–1820)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1786-source
      relatedIds: []
    - id: live-androidx-menu-lines-1821
      title: Material 3 Menu source (lines 1821–1855)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1821-source
      relatedIds: []
    - id: live-androidx-menu-lines-1856
      title: Material 3 Menu source (lines 1856–1890)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1856-source
      relatedIds: []
    - id: live-androidx-menu-lines-1891
      title: Material 3 Menu source (lines 1891–1925)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1891-source
      relatedIds: []
    - id: live-androidx-menu-lines-1926
      title: Material 3 Menu source (lines 1926–1960)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1926-source
      relatedIds: []
    - id: live-androidx-menu-lines-1961
      title: Material 3 Menu source (lines 1961–1995)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1961-source
      relatedIds: []
    - id: live-androidx-menu-lines-1996
      title: Material 3 Menu source (lines 1996–2030)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-1996-source
      relatedIds: []
    - id: live-androidx-menu-lines-2031
      title: Material 3 Menu source (lines 2031–2065)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-2031-source
      relatedIds: []
    - id: live-androidx-menu-lines-2066
      title: Material 3 Menu source (lines 2066–2100)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-2066-source
      relatedIds: []
    - id: live-androidx-menu-lines-2101
      title: Material 3 Menu source (lines 2101–2135)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-2101-source
      relatedIds: []
    - id: live-androidx-menu-lines-211
      title: Material 3 Menu source (lines 211–245)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-211-source
      relatedIds: []
    - id: live-androidx-menu-lines-2136
      title: Material 3 Menu source (lines 2136–2170)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-2136-source
      relatedIds: []
    - id: live-androidx-menu-lines-2171
      title: Material 3 Menu source (lines 2171–2205)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-2171-source
      relatedIds: []
    - id: live-androidx-menu-lines-2206
      title: Material 3 Menu source (lines 2206–2240)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-2206-source
      relatedIds: []
    - id: live-androidx-menu-lines-2241
      title: Material 3 Menu source (lines 2241–2275)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-2241-source
      relatedIds: []
    - id: live-androidx-menu-lines-2276
      title: Material 3 Menu source (lines 2276–2310)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-2276-source
      relatedIds: []
    - id: live-androidx-menu-lines-2311
      title: Material 3 Menu source (lines 2311–2345)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-2311-source
      relatedIds: []
    - id: live-androidx-menu-lines-2346
      title: Material 3 Menu source (lines 2346–2380)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-2346-source
      relatedIds: []
    - id: live-androidx-menu-lines-2381
      title: Material 3 Menu source (lines 2381–2413)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-2381-source
      relatedIds: []
    - id: live-androidx-menu-lines-246
      title: Material 3 Menu source (lines 246–280)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-246-source
      relatedIds: []
    - id: live-androidx-menu-lines-281
      title: Material 3 Menu source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-281-source
      relatedIds: []
    - id: live-androidx-menu-lines-316
      title: Material 3 Menu source (lines 316–350)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-316-source
      relatedIds: []
    - id: live-androidx-menu-lines-351
      title: Material 3 Menu source (lines 351–385)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-351-source
      relatedIds: []
    - id: live-androidx-menu-lines-36
      title: Material 3 Menu source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-36-source
      relatedIds: []
    - id: live-androidx-menu-lines-386
      title: Material 3 Menu source (lines 386–420)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-386-source
      relatedIds: []
    - id: live-androidx-menu-lines-421
      title: Material 3 Menu source (lines 421–455)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-421-source
      relatedIds: []
    - id: live-androidx-menu-lines-456
      title: Material 3 Menu source (lines 456–490)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-456-source
      relatedIds: []
    - id: live-androidx-menu-lines-491
      title: Material 3 Menu source (lines 491–525)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-491-source
      relatedIds: []
    - id: live-androidx-menu-lines-526
      title: Material 3 Menu source (lines 526–560)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-526-source
      relatedIds: []
    - id: live-androidx-menu-lines-561
      title: Material 3 Menu source (lines 561–595)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-561-source
      relatedIds: []
    - id: live-androidx-menu-lines-596
      title: Material 3 Menu source (lines 596–630)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-596-source
      relatedIds: []
    - id: live-androidx-menu-lines-631
      title: Material 3 Menu source (lines 631–665)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-631-source
      relatedIds: []
    - id: live-androidx-menu-lines-666
      title: Material 3 Menu source (lines 666–700)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-666-source
      relatedIds: []
    - id: live-androidx-menu-lines-701
      title: Material 3 Menu source (lines 701–735)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-701-source
      relatedIds: []
    - id: live-androidx-menu-lines-71
      title: Material 3 Menu source (lines 71–105)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-71-source
      relatedIds: []
    - id: live-androidx-menu-lines-736
      title: Material 3 Menu source (lines 736–770)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-736-source
      relatedIds: []
    - id: live-androidx-menu-lines-771
      title: Material 3 Menu source (lines 771–805)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-771-source
      relatedIds: []
    - id: live-androidx-menu-lines-806
      title: Material 3 Menu source (lines 806–840)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-806-source
      relatedIds: []
    - id: live-androidx-menu-lines-841
      title: Material 3 Menu source (lines 841–875)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-841-source
      relatedIds: []
    - id: live-androidx-menu-lines-876
      title: Material 3 Menu source (lines 876–910)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-876-source
      relatedIds: []
    - id: live-androidx-menu-lines-911
      title: Material 3 Menu source (lines 911–945)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-911-source
      relatedIds: []
    - id: live-androidx-menu-lines-946
      title: Material 3 Menu source (lines 946–980)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-946-source
      relatedIds: []
    - id: live-androidx-menu-lines-981
      title: Material 3 Menu source (lines 981–1015)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-menu-lines-981-source
      relatedIds: []
---

# Material 3 Menu source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt

## Material 3 Menu source (lines 1–35)

/*
 * Copyright 2022 The Android Open Source Project
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

import androidx.collection.IntList
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.MutableTransitionState
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.updateTransition
import androidx.compose.animation.expandHorizontally
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.shrinkHorizontally
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.ScrollState
import androidx.compose.foundation.clickable
import androidx.compose.foundation.hoverable
import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.MutableInteractionSource

Sources: [live-androidx-menu-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1016–1050)

        disabledLeadingIconColor: Color,
        disabledTrailingIconColor: Color,
        containerColor: Color,
        disabledContainerColor: Color,
        selectedTextColor: Color,
        selectedContainerColor: Color,
        selectedLeadingIconColor: Color,
        selectedTrailingIconColor: Color,
    ) : this(
        textColor = textColor,
        leadingIconColor = leadingIconColor,
        trailingIconColor = trailingIconColor,
        disabledTextColor = disabledTextColor,
        disabledLeadingIconColor = disabledLeadingIconColor,
        disabledTrailingIconColor = disabledTrailingIconColor,
        containerColor = containerColor,
        disabledContainerColor = disabledContainerColor,
    )

    /**
     * Returns a copy of this MenuItemColors, optionally overriding some of the values. This uses
     * the Color.Unspecified to mean “use the value from the source”
     */
    @JvmName("copy-tNS2XkQ")
    @Deprecated("Maintained for binary compatibility.", level = DeprecationLevel.HIDDEN)
    public fun copy(
        textColor: Color = this.textColor,
        leadingIconColor: Color = this.leadingIconColor,
        trailingIconColor: Color = this.trailingIconColor,
        disabledTextColor: Color = this.disabledTextColor,
        disabledLeadingIconColor: Color = this.disabledLeadingIconColor,
        disabledTrailingIconColor: Color = this.disabledTrailingIconColor,
    ): MenuItemColors =
        copy(
            textColor = textColor,

Sources: [live-androidx-menu-lines-1016-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1051–1085)

            leadingIconColor = leadingIconColor,
            trailingIconColor = trailingIconColor,
            disabledTextColor = disabledTextColor,
            disabledLeadingIconColor = disabledLeadingIconColor,
            disabledTrailingIconColor = disabledTrailingIconColor,
        )

    /**
     * Returns a copy of this MenuItemColors, optionally overriding some of the values. This uses
     * the Color.Unspecified to mean “use the value from the source”
     */
    @JvmName("copyNew")
    public fun copy(
        textColor: Color = this.textColor,
        containerColor: Color = this.containerColor,
        leadingIconColor: Color = this.leadingIconColor,
        trailingIconColor: Color = this.trailingIconColor,
        disabledTextColor: Color = this.disabledTextColor,
        disabledContainerColor: Color = this.disabledContainerColor,
        disabledLeadingIconColor: Color = this.disabledLeadingIconColor,
        disabledTrailingIconColor: Color = this.disabledTrailingIconColor,
    ): MenuItemColors =
        MenuItemColors(
            textColor = textColor.takeOrElse { this.textColor },
            leadingIconColor = leadingIconColor.takeOrElse { this.leadingIconColor },
            trailingIconColor = trailingIconColor.takeOrElse { this.trailingIconColor },
            disabledTextColor = disabledTextColor.takeOrElse { this.disabledTextColor },
            disabledLeadingIconColor =
                disabledLeadingIconColor.takeOrElse { this.disabledLeadingIconColor },
            disabledTrailingIconColor =
                disabledTrailingIconColor.takeOrElse { this.disabledTrailingIconColor },
            containerColor = containerColor.takeOrElse { this.containerColor },
            disabledContainerColor =
                disabledContainerColor.takeOrElse { this.disabledContainerColor },
        )

Sources: [live-androidx-menu-lines-1051-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 106–140)

/**
 * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
 *
 * Menus display a list of choices on a temporary surface. They appear when users interact with a
 * button, action, or other control.
 *
 * ![Dropdown menu
 * image](https://developer.android.com/images/reference/androidx/compose/material3/menu.png)
 *
 * A [DropdownMenu] behaves similarly to a [Popup], and will use the position of the parent layout
 * to position itself on screen. Commonly a [DropdownMenu] will be placed in a [Box] with a sibling
 * that will be used as the 'anchor'. Note that a [DropdownMenu] by itself will not take up any
 * space in a layout, as the menu is displayed in a separate window, on top of other content.
 *
 * The [content] of a [DropdownMenu] will typically be [DropdownMenuItem]s, as well as custom
 * content. Using [DropdownMenuItem]s will result in a menu that matches the Material specification
 * for menus. Also note that the [content] is placed inside a scrollable [Column], so using a
 * [androidx.compose.foundation.lazy.LazyColumn] as the root layout inside [content] is unsupported.
 *
 * [onDismissRequest] will be called when the menu should close - for example when there is a tap
 * outside the menu, or when the back key is pressed.
 *
 * [DropdownMenu] changes its positioning depending on the available space, always trying to be
 * fully visible. Depending on layout direction, first it will try to align its start to the start
 * of its parent, then its end to the end of its parent, and then to the edge of the window.
 * Vertically, it will try to align its top to the bottom of its parent, then its bottom to top of
 * its parent, and then to the edge of the window.
 *
 * An [offset] can be provided to adjust the positioning of the menu for cases when the layout
 * bounds of its parent do not coincide with its visual bounds.
 *
 * Example usage:
 *
 * @sample androidx.compose.material3.samples.MenuSample
 *

Sources: [live-androidx-menu-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1086–1120)


    /**
     * Returns a copy of this MenuItemColors, optionally overriding some of the values. This uses
     * the Color.Unspecified to mean “use the value from the source”
     */
    @JvmName("copySelectable")
    @Deprecated(
        "MenuItemColors no longer supports selected colors. Use SelectableMenuItemColors instead."
    )
    public fun copy(
        textColor: Color = this.textColor,
        containerColor: Color = this.containerColor,
        leadingIconColor: Color = this.leadingIconColor,
        trailingIconColor: Color = this.trailingIconColor,
        disabledTextColor: Color = this.disabledTextColor,
        disabledContainerColor: Color = this.disabledContainerColor,
        disabledLeadingIconColor: Color = this.disabledLeadingIconColor,
        disabledTrailingIconColor: Color = this.disabledTrailingIconColor,
        selectedTextColor: Color = Color.Unspecified,
        selectedContainerColor: Color = Color.Unspecified,
        selectedLeadingIconColor: Color = Color.Unspecified,
        selectedTrailingIconColor: Color = Color.Unspecified,
    ): MenuItemColors =
        copy(
            textColor = textColor,
            containerColor = containerColor,
            leadingIconColor = leadingIconColor,
            trailingIconColor = trailingIconColor,
            disabledTextColor = disabledTextColor,
            disabledContainerColor = disabledContainerColor,
            disabledLeadingIconColor = disabledLeadingIconColor,
            disabledTrailingIconColor = disabledTrailingIconColor,
        )

    /**

Sources: [live-androidx-menu-lines-1086-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1121–1155)

     * Represents the text color for a menu item, depending on its [enabled] state.
     *
     * @param enabled whether the menu item is enabled
     */
    @Stable
    internal fun textColor(enabled: Boolean): Color {
        return if (enabled) textColor else disabledTextColor
    }

    /**
     * Represents the leading icon color for a menu item, depending on its [enabled] state.
     *
     * @param enabled whether the menu item is enabled
     */
    @Stable
    internal fun leadingIconColor(enabled: Boolean): Color {
        return if (enabled) leadingIconColor else disabledLeadingIconColor
    }

    /**
     * Represents the trailing icon color for a menu item, depending on its [enabled] state.
     *
     * @param enabled whether the menu item is enabled
     */
    @Stable
    internal fun trailingIconColor(enabled: Boolean): Color {
        return if (enabled) trailingIconColor else disabledTrailingIconColor
    }

    /**
     * Represents the container color for a menu item, depending on its [enabled] state.
     *
     * @param enabled whether the menu item is enabled.
     */
    @Stable

Sources: [live-androidx-menu-lines-1121-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1156–1190)

    internal fun containerColor(enabled: Boolean): Color {
        return if (enabled) containerColor else disabledContainerColor
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is MenuItemColors) return false

        if (textColor != other.textColor) return false
        if (containerColor != other.containerColor) return false
        if (leadingIconColor != other.leadingIconColor) return false
        if (trailingIconColor != other.trailingIconColor) return false
        if (disabledTextColor != other.disabledTextColor) return false
        if (disabledLeadingIconColor != other.disabledLeadingIconColor) return false
        if (disabledTrailingIconColor != other.disabledTrailingIconColor) return false
        if (disabledContainerColor != other.disabledContainerColor) return false

        return true
    }

    override fun hashCode(): Int {
        var result = textColor.hashCode()
        result = 31 * result + containerColor.hashCode()
        result = 31 * result + leadingIconColor.hashCode()
        result = 31 * result + trailingIconColor.hashCode()
        result = 31 * result + disabledTextColor.hashCode()
        result = 31 * result + disabledLeadingIconColor.hashCode()
        result = 31 * result + disabledTrailingIconColor.hashCode()
        result = 31 * result + disabledContainerColor.hashCode()
        return result
    }
}

/**
 * Represents the text, icon, and container colors used in a selectable [DropdownMenuItem] at

Sources: [live-androidx-menu-lines-1156-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1191–1225)

 * different states.
 *
 * When the item is disabled, disabled colors take priority over selected colors.
 *
 * @param textColor the text color of this menu item when enabled and unselected
 * @param containerColor the container color of this menu item when enabled and unselected
 * @param leadingIconColor the leading icon color of this menu item when enabled and unselected
 * @param trailingContentColor the trailing content color of this menu item when enabled and
 *   unselected
 * @param disabledTextColor the text color of this menu item when not enabled; takes priority if the
 *   item is both selected and disabled
 * @param disabledContainerColor the container color of this menu item when not enabled; takes
 *   priority if the item is both selected and disabled
 * @param disabledLeadingIconColor the leading icon color of this menu item when not enabled; takes
 *   priority if the item is both selected and disabled
 * @param disabledTrailingContentColor the trailing content color of this menu item when not
 *   enabled; takes priority if the item is both selected and disabled
 * @param selectedTextColor the text color of this menu item when enabled and selected
 * @param selectedContainerColor the container color of this menu item when enabled and selected
 * @param selectedLeadingIconColor the leading icon color of this menu item when enabled and
 *   selected
 * @param selectedTrailingContentColor the trailing content color of this menu item when enabled and
 *   selected
 */
@Immutable
public class SelectableMenuItemColors(
    public val textColor: Color,
    public val containerColor: Color,
    public val leadingIconColor: Color,
    public val trailingContentColor: Color,
    public val disabledTextColor: Color,
    public val disabledContainerColor: Color,
    public val disabledLeadingIconColor: Color,
    public val disabledTrailingContentColor: Color,
    public val selectedTextColor: Color,

Sources: [live-androidx-menu-lines-1191-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1226–1260)

    public val selectedContainerColor: Color,
    public val selectedLeadingIconColor: Color,
    public val selectedTrailingContentColor: Color,
) {
    /**
     * Returns a copy of this [SelectableMenuItemColors], optionally overriding some of the values.
     * This uses [Color.Unspecified] to mean “use the value from the source”.
     *
     * When the item is disabled, disabled colors take priority over selected colors.
     *
     * @param textColor the text color of this menu item when enabled and unselected
     * @param containerColor the container color of this menu item when enabled and unselected
     * @param leadingIconColor the leading icon color of this menu item when enabled and unselected
     * @param trailingContentColor the trailing content color of this menu item when enabled and
     *   unselected
     * @param disabledTextColor the text color of this menu item when not enabled; takes priority if
     *   the item is both selected and disabled
     * @param disabledContainerColor the container color of this menu item when not enabled; takes
     *   priority if the item is both selected and disabled
     * @param disabledLeadingIconColor the leading icon color of this menu item when not enabled;
     *   takes priority if the item is both selected and disabled
     * @param disabledTrailingContentColor the trailing content color of this menu item when not
     *   enabled; takes priority if the item is both selected and disabled
     * @param selectedTextColor the text color of this menu item when enabled and selected
     * @param selectedContainerColor the container color of this menu item when enabled and selected
     * @param selectedLeadingIconColor the leading icon color of this menu item when enabled and
     *   selected
     * @param selectedTrailingContentColor the trailing content color of this menu item when enabled
     *   and selected
     */
    public fun copy(
        textColor: Color = this.textColor,
        containerColor: Color = this.containerColor,
        leadingIconColor: Color = this.leadingIconColor,
        trailingContentColor: Color = this.trailingContentColor,

Sources: [live-androidx-menu-lines-1226-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1261–1295)

        disabledTextColor: Color = this.disabledTextColor,
        disabledContainerColor: Color = this.disabledContainerColor,
        disabledLeadingIconColor: Color = this.disabledLeadingIconColor,
        disabledTrailingContentColor: Color = this.disabledTrailingContentColor,
        selectedTextColor: Color = this.selectedTextColor,
        selectedContainerColor: Color = this.selectedContainerColor,
        selectedLeadingIconColor: Color = this.selectedLeadingIconColor,
        selectedTrailingContentColor: Color = this.selectedTrailingContentColor,
    ): SelectableMenuItemColors =
        SelectableMenuItemColors(
            textColor = textColor.takeOrElse { this.textColor },
            containerColor = containerColor.takeOrElse { this.containerColor },
            leadingIconColor = leadingIconColor.takeOrElse { this.leadingIconColor },
            trailingContentColor = trailingContentColor.takeOrElse { this.trailingContentColor },
            disabledTextColor = disabledTextColor.takeOrElse { this.disabledTextColor },
            disabledContainerColor =
                disabledContainerColor.takeOrElse { this.disabledContainerColor },
            disabledLeadingIconColor =
                disabledLeadingIconColor.takeOrElse { this.disabledLeadingIconColor },
            disabledTrailingContentColor =
                disabledTrailingContentColor.takeOrElse { this.disabledTrailingContentColor },
            selectedTextColor = selectedTextColor.takeOrElse { this.selectedTextColor },
            selectedContainerColor =
                selectedContainerColor.takeOrElse { this.selectedContainerColor },
            selectedLeadingIconColor =
                selectedLeadingIconColor.takeOrElse { this.selectedLeadingIconColor },
            selectedTrailingContentColor =
                selectedTrailingContentColor.takeOrElse { this.selectedTrailingContentColor },
        )

    /**
     * Represents the text color for a selectable menu item, depending on its [enabled] and
     * [selected] state.
     *
     * @param enabled whether the menu item is enabled

Sources: [live-androidx-menu-lines-1261-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1296–1330)

     * @param selected whether the menu item is selected
     */
    @Stable
    internal fun textColor(enabled: Boolean, selected: Boolean): Color {
        return if (enabled) {
            if (selected) {
                selectedTextColor
            } else {
                textColor
            }
        } else {
            disabledTextColor
        }
    }

    /**
     * Represents the leading icon color for a selectable menu item, depending on its [enabled] and
     * [selected] state.
     *
     * @param enabled whether the menu item is enabled
     * @param selected whether the menu item is selected
     */
    @Stable
    internal fun leadingIconColor(enabled: Boolean, selected: Boolean): Color {
        return if (enabled) {
            if (selected) {
                selectedLeadingIconColor
            } else {
                leadingIconColor
            }
        } else {
            disabledLeadingIconColor
        }
    }


Sources: [live-androidx-menu-lines-1296-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1331–1365)

    /**
     * Represents the trailing content color for a selectable menu item, depending on its [enabled]
     * and [selected] state.
     *
     * @param enabled whether the menu item is enabled
     * @param selected whether the menu item is selected
     */
    @Stable
    internal fun trailingContentColor(enabled: Boolean, selected: Boolean): Color {
        return if (enabled) {
            if (selected) {
                selectedTrailingContentColor
            } else {
                trailingContentColor
            }
        } else {
            disabledTrailingContentColor
        }
    }

    /**
     * Represents the container color for a selectable menu item, depending on its [enabled] and
     * [selected] state.
     *
     * @param enabled whether the menu item is enabled
     * @param selected whether the menu item is selected
     */
    @Stable
    internal fun containerColor(enabled: Boolean, selected: Boolean): Color {
        return if (enabled) {
            if (selected) {
                selectedContainerColor
            } else {
                containerColor
            }

Sources: [live-androidx-menu-lines-1331-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1366–1400)

        } else {
            disabledContainerColor
        }
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is SelectableMenuItemColors) return false

        if (textColor != other.textColor) return false
        if (containerColor != other.containerColor) return false
        if (leadingIconColor != other.leadingIconColor) return false
        if (trailingContentColor != other.trailingContentColor) return false
        if (disabledTextColor != other.disabledTextColor) return false
        if (disabledContainerColor != other.disabledContainerColor) return false
        if (disabledLeadingIconColor != other.disabledLeadingIconColor) return false
        if (disabledTrailingContentColor != other.disabledTrailingContentColor) return false
        if (selectedTextColor != other.selectedTextColor) return false
        if (selectedContainerColor != other.selectedContainerColor) return false
        if (selectedLeadingIconColor != other.selectedLeadingIconColor) return false
        if (selectedTrailingContentColor != other.selectedTrailingContentColor) return false

        return true
    }

    override fun hashCode(): Int {
        var result = textColor.hashCode()
        result = 31 * result + containerColor.hashCode()
        result = 31 * result + leadingIconColor.hashCode()
        result = 31 * result + trailingContentColor.hashCode()
        result = 31 * result + disabledTextColor.hashCode()
        result = 31 * result + disabledContainerColor.hashCode()
        result = 31 * result + disabledLeadingIconColor.hashCode()
        result = 31 * result + disabledTrailingContentColor.hashCode()
        result = 31 * result + selectedTextColor.hashCode()

Sources: [live-androidx-menu-lines-1366-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1401–1435)

        result = 31 * result + selectedContainerColor.hashCode()
        result = 31 * result + selectedLeadingIconColor.hashCode()
        result = 31 * result + selectedTrailingContentColor.hashCode()
        return result
    }
}

/**
 * Represents the shapes used for a [DropdownMenuItem] in its various states.
 *
 * @param shape the [Shape] to use when the item is unselected.
 * @param selectedShape the [Shape] to use when the item is selected.
 */
@Immutable
public class MenuItemShapes(public val shape: Shape, public val selectedShape: Shape) {
    /** Returns a copy of this MenuItemShapes, optionally overriding some of the values. */
    public fun copy(
        shape: Shape? = this.shape,
        selectedShape: Shape? = this.selectedShape,
    ): MenuItemShapes =
        MenuItemShapes(
            shape = shape.takeOrElse { this.shape },
            selectedShape = selectedShape.takeOrElse { this.selectedShape },
        )

    internal fun Shape?.takeOrElse(block: () -> Shape): Shape = this ?: block()

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is MenuItemShapes) return false

        return shape == other.shape && selectedShape == other.selectedShape
    }

    override fun hashCode(): Int {

Sources: [live-androidx-menu-lines-1401-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 141–175)

 * Example usage with a [ScrollState] to control the menu items scroll position:
 *
 * @sample androidx.compose.material3.samples.MenuWithScrollStateSample
 * @param expanded whether the menu is expanded or not
 * @param onDismissRequest called when the user requests to dismiss the menu, such as by tapping
 *   outside the menu's bounds
 * @param modifier [Modifier] to be applied to the menu's content
 * @param offset [DpOffset] from the original position of the menu. The offset respects the
 *   [androidx.compose.ui.unit.LayoutDirection], so the offset's x position will be added in LTR and
 *   subtracted in RTL.
 * @param scrollState a [ScrollState] to used by the menu's content for items vertical scrolling
 * @param properties [PopupProperties] for further customization of this popup's behavior
 * @param shape the shape of the menu
 * @param containerColor the container color of the menu
 * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
 *   overlay is applied on top of the container. A higher tonal elevation value will result in a
 *   darker color in light theme and lighter color in dark theme. See also: [Surface].
 * @param shadowElevation the elevation for the shadow below the menu
 * @param border the border to draw around the container of the menu. Pass `null` for no border.
 * @param content the content of this dropdown menu, typically a [DropdownMenuItem]
 */
@Composable
public expect fun DropdownMenu(
    expanded: Boolean,
    onDismissRequest: () -> Unit,
    modifier: Modifier = Modifier,
    offset: DpOffset = DpOffset(0.dp, 0.dp),
    scrollState: ScrollState = rememberScrollState(),
    properties: PopupProperties = MenuDefaults.DefaultMenuProperties,
    shape: Shape = MenuDefaults.shape,
    containerColor: Color = MenuDefaults.containerColor,
    tonalElevation: Dp = MenuDefaults.TonalElevation,
    shadowElevation: Dp = MenuDefaults.ShadowElevation,
    border: BorderStroke? = null,
    content: @Composable ColumnScope.() -> Unit,

Sources: [live-androidx-menu-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1436–1470)

        var result = shape.hashCode()
        result = 31 * result + selectedShape.hashCode()

        return result
    }
}

/**
 * Represents the shapes used for a [DropdownMenuGroup].
 *
 * @param shape the default [Shape] to use for the group.
 * @param inactiveShape the [Shape] to use when the group has stop being hovered.
 */
@Immutable
public class MenuGroupShapes(public val shape: Shape, public val inactiveShape: Shape) {
    /** Returns a copy of this MenuGroupShapes, optionally overriding some of the values. */
    public fun copy(
        shape: Shape? = this.shape,
        inactiveShape: Shape? = this.inactiveShape,
    ): MenuGroupShapes =
        MenuGroupShapes(
            shape = shape.takeOrElse { this.shape },
            inactiveShape = inactiveShape.takeOrElse { this.inactiveShape },
        )

    internal fun Shape?.takeOrElse(block: () -> Shape): Shape = this ?: block()

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is MenuGroupShapes) return false

        return shape == other.shape && inactiveShape == other.inactiveShape
    }

    override fun hashCode(): Int {

Sources: [live-androidx-menu-lines-1436-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1471–1505)

        var result = shape.hashCode()
        result = 31 * result + inactiveShape.hashCode()

        return result
    }
}

/**
 * Provides context for calculating candidate menu positioning coordinates relative to window
 * bounds.
 */
public interface MenuPositionScope {
    /** The bounds of the anchor relative to window layout bounds. */
    public val anchorBounds: IntRect
    /** The overall size of the hosting window. */
    public val windowSize: IntSize
    /** The calculated dimensions of the menu popup. */
    public val menuSize: IntSize
    /** The current active layout direction (LTR or RTL). */
    public val layoutDirection: LayoutDirection
}

internal class MenuPositionScopeImpl(
    override val anchorBounds: IntRect,
    override val windowSize: IntSize,
    override val menuSize: IntSize,
    override val layoutDirection: LayoutDirection,
) : MenuPositionScope

/**
 * Class that determines the position of a menu relative to its anchor.
 *
 * This allows selecting between standard positioning strategies (such as [Above], [Below], [Start],
 * [End], [Left], [Right]) or providing a [Custom] implementation for complex positioning logic.
 */

Sources: [live-androidx-menu-lines-1471-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1506–1540)

@Immutable
public class MenuAnchorPosition
private constructor(
    internal val xCandidates: MenuPositionScope.() -> IntList,
    internal val yCandidates: MenuPositionScope.() -> IntList,
) {
    public companion object {
        /**
         * Position the menu above its anchor.
         *
         * The menu's bottom edge is aligned with the anchor's top edge by default. If there is
         * insufficient space, alternative positions (such as below the anchor) will be attempted.
         */
        public val Above: MenuAnchorPosition =
            MenuAnchorPosition(
                xCandidates = {
                    MenuPosition.xValuesFromCandidates(
                        listOf(
                            startToAnchorStart,
                            endToAnchorEnd,
                            if (anchorBounds.center.x < windowSize.width / 2) {
                                leftToWindowLeft
                            } else {
                                rightToWindowRight
                            },
                        ),
                        anchorBounds,
                        windowSize,
                        menuSize.width,
                        layoutDirection,
                    )
                },
                yCandidates = {
                    MenuPosition.yValuesFromCandidates(
                        listOf(

Sources: [live-androidx-menu-lines-1506-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1541–1575)

                            bottomToAnchorTop,
                            topToAnchorBottom,
                            centerToAnchorTop,
                            if (anchorBounds.center.y < windowSize.height / 2) {
                                topToWindowTop
                            } else {
                                bottomToWindowBottom
                            },
                        ),
                        anchorBounds,
                        windowSize,
                        menuSize.height,
                    )
                },
            )

        /**
         * Position the menu below its anchor.
         *
         * The menu's top edge is aligned with the anchor's bottom edge by default. If there is
         * insufficient space, alternative positions (such as above the anchor) will be attempted.
         */
        public val Below: MenuAnchorPosition =
            MenuAnchorPosition(
                xCandidates = {
                    MenuPosition.xValuesFromCandidates(
                        listOf(
                            startToAnchorStart,
                            endToAnchorEnd,
                            if (anchorBounds.center.x < windowSize.width / 2) {
                                leftToWindowLeft
                            } else {
                                rightToWindowRight
                            },
                        ),

Sources: [live-androidx-menu-lines-1541-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1576–1610)

                        anchorBounds,
                        windowSize,
                        menuSize.width,
                        layoutDirection,
                    )
                },
                yCandidates = {
                    MenuPosition.yValuesFromCandidates(
                        listOf(
                            topToAnchorBottom,
                            bottomToAnchorTop,
                            centerToAnchorTop,
                            if (anchorBounds.center.y < windowSize.height / 2) {
                                topToWindowTop
                            } else {
                                bottomToWindowBottom
                            },
                        ),
                        anchorBounds,
                        windowSize,
                        menuSize.height,
                    )
                },
            )

        /**
         * Position the menu to the left of its anchor.
         *
         * This strategy positions the menu on the left side regardless of the layout direction.
         */
        public val Left: MenuAnchorPosition =
            MenuAnchorPosition(
                xCandidates = {
                    MenuPosition.xValuesFromCandidates(
                        listOf(

Sources: [live-androidx-menu-lines-1576-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1611–1645)

                            endToAnchorStart,
                            startToAnchorEnd,
                            if (anchorBounds.center.x < windowSize.width / 2) {
                                leftToWindowLeft
                            } else {
                                rightToWindowRight
                            },
                        ),
                        anchorBounds,
                        windowSize,
                        menuSize.width,
                        layoutDirection,
                    )
                },
                yCandidates = {
                    MenuPosition.yValuesFromCandidates(
                        listOf(
                            topToAnchorTop,
                            bottomToAnchorBottom,
                            if (anchorBounds.center.y < windowSize.height / 2) {
                                topToWindowTop
                            } else {
                                bottomToWindowBottom
                            },
                        ),
                        anchorBounds,
                        windowSize,
                        menuSize.height,
                    )
                },
            )

        /**
         * Position the menu to the right of its anchor.
         *

Sources: [live-androidx-menu-lines-1611-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1646–1680)

         * This strategy positions the menu on the right side regardless of the layout direction.
         */
        public val Right: MenuAnchorPosition =
            MenuAnchorPosition(
                xCandidates = {
                    MenuPosition.xValuesFromCandidates(
                        listOf(
                            startToAnchorEnd,
                            endToAnchorStart,
                            if (anchorBounds.center.x < windowSize.width / 2) {
                                leftToWindowLeft
                            } else {
                                rightToWindowRight
                            },
                        ),
                        anchorBounds,
                        windowSize,
                        menuSize.width,
                        layoutDirection,
                    )
                },
                yCandidates = {
                    MenuPosition.yValuesFromCandidates(
                        listOf(
                            topToAnchorTop,
                            bottomToAnchorBottom,
                            if (anchorBounds.center.y < windowSize.height / 2) {
                                topToWindowTop
                            } else {
                                bottomToWindowBottom
                            },
                        ),
                        anchorBounds,
                        windowSize,
                        menuSize.height,

Sources: [live-androidx-menu-lines-1646-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1681–1715)

                    )
                },
            )

        /**
         * Position the menu to the start of its anchor.
         *
         * In LTR layouts, this positions the menu on the left side of the anchor. In RTL layouts,
         * this positions the menu on the right side of the anchor.
         */
        public val Start: MenuAnchorPosition =
            MenuAnchorPosition(
                xCandidates = {
                    MenuPosition.xValuesFromCandidates(
                        listOf(
                            endToAnchorStart,
                            startToAnchorEnd,
                            if (anchorBounds.center.x < windowSize.width / 2) {
                                leftToWindowLeft
                            } else {
                                rightToWindowRight
                            },
                        ),
                        anchorBounds,
                        windowSize,
                        menuSize.width,
                        layoutDirection,
                    )
                },
                yCandidates = {
                    MenuPosition.yValuesFromCandidates(
                        listOf(
                            topToAnchorTop,
                            bottomToAnchorBottom,
                            if (anchorBounds.center.y < windowSize.height / 2) {

Sources: [live-androidx-menu-lines-1681-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1716–1750)

                                topToWindowTop
                            } else {
                                bottomToWindowBottom
                            },
                        ),
                        anchorBounds,
                        windowSize,
                        menuSize.height,
                    )
                },
            )

        /**
         * Position the menu to the end of its anchor.
         *
         * In LTR layouts, this positions the menu on the right side of the anchor. In RTL layouts,
         * this positions the menu on the left side of the anchor.
         */
        public val End: MenuAnchorPosition =
            MenuAnchorPosition(
                xCandidates = {
                    MenuPosition.xValuesFromCandidates(
                        listOf(
                            startToAnchorEnd,
                            endToAnchorStart,
                            if (anchorBounds.center.x < windowSize.width / 2) {
                                leftToWindowLeft
                            } else {
                                rightToWindowRight
                            },
                        ),
                        anchorBounds,
                        windowSize,
                        menuSize.width,
                        layoutDirection,

Sources: [live-androidx-menu-lines-1716-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1751–1785)

                    )
                },
                yCandidates = {
                    MenuPosition.yValuesFromCandidates(
                        listOf(
                            topToAnchorTop,
                            bottomToAnchorBottom,
                            if (anchorBounds.center.y < windowSize.height / 2) {
                                topToWindowTop
                            } else {
                                bottomToWindowBottom
                            },
                        ),
                        anchorBounds,
                        windowSize,
                        menuSize.height,
                    )
                },
            )

        /**
         * Create a custom positioning strategy by providing lambda functions for calculating
         * candidate positions for the x and y axes. Note that candidate positioning coordinates are
         * calculated relative to the window bounds.
         *
         * @param xCandidates Lambda that determines the list of candidate x coordinates for the
         *   menu relative to the window bounds.
         * @param yCandidates Lambda that determines the list of candidate y coordinates for the
         *   menu relative to the window bounds.
         */
        public fun Custom(
            xCandidates: MenuPositionScope.() -> IntList,
            yCandidates: MenuPositionScope.() -> IntList,
        ): MenuAnchorPosition = MenuAnchorPosition(xCandidates, yCandidates)
    }

Sources: [live-androidx-menu-lines-1751-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 176–210)

)

/**
 * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
 *
 * A [Popup] that provides the foundation for building a custom menu.
 *
 * ![Dropdown menu
 * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
 *
 * This composable provides the [Popup] and layout behavior for a menu. This is useful for building
 * custom menus that require different content arrangements or styling than the default
 * [DropdownMenu].
 *
 * Example usage:
 *
 * @sample androidx.compose.material3.samples.GroupedMenuSample
 *
 * Example usage of cascading menus:
 *
 * @sample androidx.compose.material3.samples.MenuWithCascadingMenusSample
 * @param expanded whether the menu is expanded or not.
 * @param onDismissRequest called when the user requests to dismiss the menu, such as by tapping
 *   outside the menu's bounds.
 * @param modifier [Modifier] to be applied to the menu's content.
 * @param popupPositionProvider [DropdownMenuPopupPositionProvider] to be used to position the menu.
 * @param properties [PopupProperties] for further customization of this popup's behavior.
 * @param content the content of this dropdown menu.
 *
 * @material3expressive
 */
@Composable
public fun DropdownMenuPopup(
    expanded: Boolean,
    onDismissRequest: () -> Unit,

Sources: [live-androidx-menu-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1786–1820)

}

/**
 * [PopupPositionProvider] that communicates the [TransformOrigin] to dropdown menu's
 * implementation.
 */
public interface DropdownMenuPopupPositionProvider : PopupPositionProvider {
    /**
     * The calculated [TransformOrigin] of the dropdown menu popup relative to its anchor.
     *
     * This origin is used to animate (e.g. scale) the menu from the correct point relative to where
     * the menu is positioned.
     */
    public val transformOrigin: TransformOrigin
}

/**
 * The implementation of the popup. This allows desktop versions to listen to key events and
 * communicate it to their popup.
 */
@Composable
internal expect fun DropdownMenuPopupImpl(
    onDismissRequest: () -> Unit,
    popupPositionProvider: DropdownMenuPopupPositionProvider,
    properties: PopupProperties,
    content: @Composable () -> Unit,
)

@Composable
internal fun DropdownMenuContent(
    modifier: Modifier,
    expandedState: MutableTransitionState<Boolean>,
    transformOrigin: () -> TransformOrigin,
    scrollState: ScrollState,
    shape: Shape,

Sources: [live-androidx-menu-lines-1786-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1821–1855)

    containerColor: Color,
    tonalElevation: Dp,
    shadowElevation: Dp,
    border: BorderStroke?,
    content: @Composable ColumnScope.() -> Unit,
) {
    // Menu open/close animation.
    @Suppress("DEPRECATION") val transition = updateTransition(expandedState, "DropDownMenu")
    // TODO Load the motionScheme tokens from the component tokens file
    val scaleAnimationSpec = MotionSchemeKeyTokens.FastSpatial.value<Float>()
    val alphaAnimationSpec = MotionSchemeKeyTokens.FastEffects.value<Float>()
    val scale by
        transition.animateFloat(transitionSpec = { scaleAnimationSpec }) { expanded ->
            if (expanded) ExpandedScaleTarget else ClosedScaleTarget
        }

    val alpha by
        transition.animateFloat(transitionSpec = { alphaAnimationSpec }) { expanded ->
            if (expanded) ExpandedAlphaTarget else ClosedAlphaTarget
        }

    val isInspecting = LocalInspectionMode.current
    Surface(
        modifier =
            Modifier.graphicsLayer {
                scaleX =
                    if (!isInspecting) scale
                    else if (expandedState.targetState) ExpandedScaleTarget else ClosedScaleTarget
                scaleY =
                    if (!isInspecting) scale
                    else if (expandedState.targetState) ExpandedScaleTarget else ClosedScaleTarget
                this.alpha =
                    if (!isInspecting) alpha
                    else if (expandedState.targetState) ExpandedAlphaTarget else ClosedAlphaTarget
                this.transformOrigin = transformOrigin()

Sources: [live-androidx-menu-lines-1821-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1856–1890)

            },
        shape = shape,
        color = containerColor,
        tonalElevation = tonalElevation,
        shadowElevation = shadowElevation,
        border = border,
    ) {
        Column(
            modifier =
                modifier
                    .padding(vertical = DropdownMenuVerticalPadding)
                    .width(IntrinsicSize.Max)
                    .verticalScroll(scrollState),
            content = content,
        )
    }
}

@Composable
internal fun DropdownMenuPopupContent(
    modifier: Modifier,
    expandedState: MutableTransitionState<Boolean>,
    transformOrigin: () -> TransformOrigin,
    content: @Composable ColumnScope.() -> Unit,
) {
    // Menu open/close animation.
    @Suppress("DEPRECATION") val transition = updateTransition(expandedState, "DropDownMenu")
    // TODO Load the motionScheme tokens from the component tokens file
    val scaleAnimationSpec = MotionSchemeKeyTokens.FastSpatial.value<Float>()
    val alphaAnimationSpec = MotionSchemeKeyTokens.FastEffects.value<Float>()
    val scale by
        transition.animateFloat(transitionSpec = { scaleAnimationSpec }) { expanded ->
            if (expanded) ExpandedScaleTarget else ClosedScaleTarget
        }
    val alpha by

Sources: [live-androidx-menu-lines-1856-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1891–1925)

        transition.animateFloat(transitionSpec = { alphaAnimationSpec }) { expanded ->
            if (expanded) ExpandedAlphaTarget else ClosedAlphaTarget
        }
    val isInspecting = LocalInspectionMode.current
    Column(
        modifier =
            modifier.width(IntrinsicSize.Max).graphicsLayer {
                scaleX =
                    if (!isInspecting) scale
                    else if (expandedState.targetState) ExpandedScaleTarget else ClosedScaleTarget
                scaleY =
                    if (!isInspecting) scale
                    else if (expandedState.targetState) ExpandedScaleTarget else ClosedScaleTarget
                this.alpha =
                    if (!isInspecting) alpha
                    else if (expandedState.targetState) ExpandedAlphaTarget else ClosedAlphaTarget
                this.transformOrigin = transformOrigin()
            },
        content = content,
    )
}

@Composable
internal fun DropdownMenuItemContent(
    selected: Boolean,
    onClick: () -> Unit,
    text: @Composable () -> Unit,
    modifier: Modifier,
    supportingText: @Composable (() -> Unit)?,
    leadingIcon: @Composable (() -> Unit)?,
    selectedLeadingIcon: @Composable (() -> Unit)?,
    trailingContent: @Composable (() -> Unit)?,
    enabled: Boolean,
    colors: MenuItemColors,
    shapes: MenuItemShapes,

Sources: [live-androidx-menu-lines-1891-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1926–1960)

    horizontalArrangement: Arrangement.Horizontal,
    contentPadding: PaddingValues,
    interactionSource: MutableInteractionSource?,
) {
    DropdownMenuItemContent(
        selected = selected,
        onClick = onClick,
        text = text,
        modifier = modifier,
        supportingText = supportingText,
        leadingIcon = leadingIcon,
        selectedLeadingIcon = selectedLeadingIcon,
        trailingContent = trailingContent,
        enabled = enabled,
        containerColor = colors.containerColor(enabled),
        leadingIconColor = colors.leadingIconColor(enabled),
        textColor = colors.textColor(enabled),
        trailingContentColor = colors.trailingIconColor(enabled),
        shapes = shapes,
        horizontalArrangement = horizontalArrangement,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
    )
}

@Composable
internal fun DropdownMenuItemContent(
    selected: Boolean,
    onClick: () -> Unit,
    text: @Composable () -> Unit,
    modifier: Modifier,
    supportingText: @Composable (() -> Unit)?,
    leadingIcon: @Composable (() -> Unit)?,
    selectedLeadingIcon: @Composable (() -> Unit)?,
    trailingContent: @Composable (() -> Unit)?,

Sources: [live-androidx-menu-lines-1926-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1961–1995)

    enabled: Boolean,
    colors: SelectableMenuItemColors,
    shapes: MenuItemShapes,
    horizontalArrangement: Arrangement.Horizontal,
    contentPadding: PaddingValues,
    interactionSource: MutableInteractionSource?,
) {
    DropdownMenuItemContent(
        selected = selected,
        onClick = onClick,
        text = text,
        modifier = modifier,
        supportingText = supportingText,
        leadingIcon = leadingIcon,
        selectedLeadingIcon = selectedLeadingIcon,
        trailingContent = trailingContent,
        enabled = enabled,
        containerColor = colors.containerColor(enabled, selected),
        leadingIconColor = colors.leadingIconColor(enabled, selected),
        textColor = colors.textColor(enabled, selected),
        trailingContentColor = colors.trailingContentColor(enabled, selected),
        shapes = shapes,
        horizontalArrangement = horizontalArrangement,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
    )
}

@Composable
private fun DropdownMenuItemContent(
    selected: Boolean,
    onClick: () -> Unit,
    text: @Composable () -> Unit,
    modifier: Modifier,
    supportingText: @Composable (() -> Unit)?,

Sources: [live-androidx-menu-lines-1961-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 1996–2030)

    leadingIcon: @Composable (() -> Unit)?,
    selectedLeadingIcon: @Composable (() -> Unit)?,
    trailingContent: @Composable (() -> Unit)?,
    enabled: Boolean,
    containerColor: Color,
    leadingIconColor: Color,
    textColor: Color,
    trailingContentColor: Color,
    shapes: MenuItemShapes,
    horizontalArrangement: Arrangement.Horizontal,
    contentPadding: PaddingValues,
    interactionSource: MutableInteractionSource?,
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }

    // TODO Load the motionScheme tokens from the component tokens file
    val expandAndShrinkSpec = MotionSchemeKeyTokens.FastSpatial.value<IntSize>()
    val fadeInAndOutSpec = MotionSchemeKeyTokens.FastEffects.value<Float>()
    val morphSpec = MotionSchemeKeyTokens.FastSpatial.value<Float>()
    val colorAnimationSpec = MotionSchemeKeyTokens.FastEffects.value<Color>()

    val animatedContainerColor by
        animateColorAsState(targetValue = containerColor, animationSpec = colorAnimationSpec)
    val itemShape = shapeByInteraction(shapes, selected, morphSpec)

    val hasLeadingIcon = leadingIcon != null || selectedLeadingIcon != null
    val hasTrailingContent = trailingContent != null

    val horizontalArrangement =
        if (horizontalArrangement is MenuArrangement) {
            MenuDefaults.itemHorizontalArrangement(
                hasLeadingIcon = hasLeadingIcon,
                hasTrailingIcon = hasTrailingContent,
            )

Sources: [live-androidx-menu-lines-1996-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 2031–2065)

        } else {
            horizontalArrangement
        }

    Surface(
        selected = selected,
        onClick = onClick,
        modifier =
            modifier
                .fillMaxWidth()
                .padding(
                    if (supportingText != null) {
                        DropdownMenuSelectableItemWithSupportTexPadding
                    } else {
                        DropdownMenuSelectableItemPadding
                    }
                ),
        enabled = enabled,
        shape = itemShape,
        color = animatedContainerColor,
        interactionSource = interactionSource,
    ) {
        // TODO replace with token
        ProvideTextStyle(MaterialTheme.typography.labelLarge) {
            Row(
                modifier =
                    Modifier.sizeIn(
                            minWidth = DropdownMenuItemDefaultMinWidth,
                            maxWidth = DropdownMenuItemDefaultMaxWidth,
                            minHeight = SegmentedMenuTokens.Item,
                        )
                        .padding(contentPadding),
                horizontalArrangement = horizontalArrangement,
                verticalAlignment = Alignment.CenterVertically,
            ) {

Sources: [live-androidx-menu-lines-2031-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 2066–2100)

                if (hasLeadingIcon) {
                    CompositionLocalProvider(LocalContentColor provides leadingIconColor) {
                        Box(contentAlignment = Alignment.Center) {
                            if (selectedLeadingIcon != null) {
                                if (leadingIcon == null) {
                                    androidx.compose.animation.AnimatedVisibility(
                                        visible = selected,
                                        enter =
                                            expandHorizontally(
                                                animationSpec = expandAndShrinkSpec
                                            ) + fadeIn(animationSpec = fadeInAndOutSpec),
                                        exit =
                                            shrinkHorizontally(
                                                animationSpec = expandAndShrinkSpec
                                            ) + fadeOut(animationSpec = fadeInAndOutSpec),
                                    ) {
                                        WrappedLeadingIcon { selectedLeadingIcon() }
                                    }
                                } else if (selected) {
                                    WrappedLeadingIcon { selectedLeadingIcon() }
                                } else {
                                    WrappedLeadingIcon { leadingIcon() }
                                }
                            } else {
                                WrappedLeadingIcon { leadingIcon!!.invoke() }
                            }
                        }
                    }
                }

                CompositionLocalProvider(LocalContentColor provides textColor) {
                    // Weighted so that the text is measured after the leading icon and trailing
                    // content, and is constrained to the space they leave. `fill = false` keeps the
                    // text at its natural width when it fits, so custom [horizontalArrangement]s
                    // still have free space to distribute.

Sources: [live-androidx-menu-lines-2066-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 2101–2135)

                    Box(
                        modifier = Modifier.weight(1f, fill = false),
                        contentAlignment = Alignment.CenterStart,
                    ) {
                        if (supportingText != null) {
                            LabelWithSupportingText(
                                supportingText = supportingText,
                                modifier = Modifier,
                                content = text,
                            )
                        } else {
                            text()
                        }
                    }
                }

                if (hasTrailingContent) {
                    CompositionLocalProvider(LocalContentColor provides trailingContentColor) {
                        Box(
                            modifier =
                                Modifier.defaultMinSize(
                                    minWidth = SegmentedMenuTokens.ItemTrailingIconSize
                                ),
                            contentAlignment = Alignment.Center,
                        ) {
                            trailingContent()
                        }
                    }
                }
            }
        }
    }
}

internal val MenuItemShapes.hasRoundedCornerShapes: Boolean

Sources: [live-androidx-menu-lines-2101-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 211–245)

    modifier: Modifier = Modifier,
    popupPositionProvider: DropdownMenuPopupPositionProvider =
        MenuDefaults.rememberDropdownMenuPopupPositionProvider(MenuAnchorPosition.Below),
    properties: PopupProperties = MenuDefaults.DefaultMenuProperties,
    content: @Composable ColumnScope.() -> Unit,
) {
    val expandedState = remember { MutableTransitionState(false) }
    expandedState.targetState = expanded
    if (expandedState.currentState || expandedState.targetState) {
        DropdownMenuPopupImpl(
            onDismissRequest = onDismissRequest,
            popupPositionProvider = popupPositionProvider,
            properties = properties,
            content = {
                DropdownMenuPopupContent(
                    modifier = modifier,
                    expandedState = expandedState,
                    transformOrigin = { popupPositionProvider.transformOrigin },
                    content = content,
                )
            },
        )
    }
}

/**
 * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
 *
 * A composable for creating a visually distinct group within a [DropdownMenuPopup].
 *
 * This component adds additional styling to [content]. It's used to group related menu items.
 *
 * ![Dropdown menu
 * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
 *

Sources: [live-androidx-menu-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 2136–2170)

    get() = shape is RoundedCornerShape && selectedShape is RoundedCornerShape

internal val MenuGroupShapes.hasRoundedCornerShapes: Boolean
    get() = shape is RoundedCornerShape && inactiveShape is RoundedCornerShape

internal val MenuItemShapes.hasCornerBasedShapes: Boolean
    get() = shape is CornerBasedShape && selectedShape is CornerBasedShape

internal val MenuGroupShapes.hasCornerBasedShapes: Boolean
    get() = shape is CornerBasedShape && inactiveShape is CornerBasedShape

@Composable
internal fun DropdownMenuItemContent(
    text: @Composable () -> Unit,
    onClick: () -> Unit,
    modifier: Modifier,
    leadingIcon: @Composable (() -> Unit)?,
    trailingIcon: @Composable (() -> Unit)?,
    enabled: Boolean,
    colors: MenuItemColors,
    contentPadding: PaddingValues,
    interactionSource: MutableInteractionSource?,
) {
    Row(
        modifier =
            modifier
                .clickable(
                    enabled = enabled,
                    onClick = onClick,
                    interactionSource = interactionSource,
                    indication = ripple(true),
                )
                .fillMaxWidth()
                // Preferred min and max width used during the intrinsic measurement.
                .sizeIn(

Sources: [live-androidx-menu-lines-2136-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 2171–2205)

                    minWidth = DropdownMenuItemDefaultMinWidth,
                    maxWidth = DropdownMenuItemDefaultMaxWidth,
                    minHeight = MenuListItemContainerHeight,
                )
                .padding(contentPadding),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        // TODO(b/271818892): Align menu list item style with general list item style.
        ProvideTextStyle(MaterialTheme.typography.labelLarge) {
            if (leadingIcon != null) {
                CompositionLocalProvider(
                    LocalContentColor provides colors.leadingIconColor(enabled)
                ) {
                    Box(Modifier.defaultMinSize(minWidth = ListTokens.ItemLeadingIconSize)) {
                        leadingIcon()
                    }
                }
            }
            CompositionLocalProvider(LocalContentColor provides colors.textColor(enabled)) {
                Box(
                    Modifier.weight(1f)
                        .padding(
                            start =
                                if (leadingIcon != null) {
                                    DropdownMenuItemHorizontalPadding
                                } else {
                                    0.dp
                                },
                            end =
                                if (trailingIcon != null) {
                                    DropdownMenuItemHorizontalPadding
                                } else {
                                    0.dp
                                },
                        )

Sources: [live-androidx-menu-lines-2171-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 2206–2240)

                ) {
                    text()
                }
            }
            if (trailingIcon != null) {
                CompositionLocalProvider(
                    LocalContentColor provides colors.trailingIconColor(enabled)
                ) {
                    Box(Modifier.defaultMinSize(minWidth = ListTokens.ItemTrailingIconSize)) {
                        trailingIcon()
                    }
                }
            }
        }
    }
}

internal fun calculateTransformOrigin(anchorBounds: IntRect, menuBounds: IntRect): TransformOrigin {
    val pivotX =
        when {
            menuBounds.left >= anchorBounds.right -> 0f
            menuBounds.right <= anchorBounds.left -> 1f
            menuBounds.width == 0 -> 0f
            else -> {
                val intersectionCenter =
                    (max(anchorBounds.left, menuBounds.left) +
                        min(anchorBounds.right, menuBounds.right)) / 2
                (intersectionCenter - menuBounds.left).toFloat() / menuBounds.width
            }
        }
    val pivotY =
        when {
            menuBounds.top >= anchorBounds.bottom -> 0f
            menuBounds.bottom <= anchorBounds.top -> 1f
            menuBounds.height == 0 -> 0f

Sources: [live-androidx-menu-lines-2206-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 2241–2275)

            else -> {
                val intersectionCenter =
                    (max(anchorBounds.top, menuBounds.top) +
                        min(anchorBounds.bottom, menuBounds.bottom)) / 2
                (intersectionCenter - menuBounds.top).toFloat() / menuBounds.height
            }
        }
    return TransformOrigin(pivotX, pivotY)
}

/**
 * [Column] of a label and its supporting text. Used in a [DropdownMenuItem]'s text parameter when a
 * supporting text is desired.
 *
 * @param supportingText the supporting text of the label.
 * @param content the content of the label.
 */
@Composable
private fun LabelWithSupportingText(
    supportingText: @Composable () -> Unit,
    modifier: Modifier,
    content: @Composable () -> Unit,
) {
    // TODO replace the typography with token when available
    Column(modifier = modifier) {
        ProvideTextStyle(MaterialTheme.typography.labelLarge, content = content)
        ProvideTextStyle(MaterialTheme.typography.bodyMedium, content = supportingText)
    }
}

@Composable
private fun shapeByInteraction(
    shapes: MenuItemShapes,
    selected: Boolean,
    animationSpec: FiniteAnimationSpec<Float>,

Sources: [live-androidx-menu-lines-2241-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 2276–2310)

): Shape {
    val shape =
        if (selected) {
            shapes.selectedShape
        } else {
            shapes.shape
        }

    if (shapes.hasRoundedCornerShapes)
        return key(shapes.shape, shapes.selectedShape) {
            rememberAnimatedShape(shape as RoundedCornerShape, animationSpec)
        }
    else if (shapes.hasCornerBasedShapes)
        return key(shapes.shape, shapes.selectedShape) {
            rememberAnimatedShape(shape as CornerBasedShape, animationSpec)
        }

    return shape
}

@Composable
private fun shapeByInteraction(
    shapes: MenuGroupShapes,
    hasBeenHovered: Boolean,
    hovered: Boolean,
    animationSpec: FiniteAnimationSpec<Float>,
): Shape {
    val shape =
        if (hasBeenHovered && !hovered) {
            shapes.inactiveShape
        } else {
            shapes.shape
        }

    if (shapes.hasRoundedCornerShapes)

Sources: [live-androidx-menu-lines-2276-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 2311–2345)

        return key(shapes.shape, shapes.inactiveShape) {
            rememberAnimatedShape(shape as RoundedCornerShape, animationSpec)
        }
    else if (shapes.hasCornerBasedShapes)
        return key(shapes.shape, shapes.inactiveShape) {
            rememberAnimatedShape(shape as CornerBasedShape, animationSpec)
        }

    return shape
}

@Composable
private fun WrappedLeadingIcon(content: @Composable BoxScope.() -> Unit) {
    Box(
        modifier = Modifier.defaultMinSize(minWidth = SegmentedMenuTokens.ItemLeadingIconSize),
        content = content,
    )
}

// Size defaults.
internal val MenuVerticalMargin
    get() = 48.dp

internal class MenuArrangement(
    val leadingSpacing: Dp,
    val trailingSpacing: Dp,
    val hasLeadingIcon: Boolean = true,
    val hasTrailingIcon: Boolean = true,
) : Arrangement.Horizontal {
    override val spacing = (leadingSpacing + trailingSpacing) / 2

    constructor(spacing: Dp) : this(spacing, spacing)

    constructor(
        spacing: Dp,

Sources: [live-androidx-menu-lines-2311-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 2346–2380)

        hasLeadingIcon: Boolean,
        hasTrailingIcon: Boolean,
    ) : this(spacing, spacing, hasLeadingIcon, hasTrailingIcon)

    override fun Density.arrange(
        totalSize: Int,
        sizes: IntArray,
        layoutDirection: LayoutDirection,
        outPositions: IntArray,
    ) {
        if (sizes.isEmpty()) return
        val spacing1Px = leadingSpacing.roundToPx()

        sizes.forEachIndexed { index, size ->
            val currentX =
                when {
                    index == 0 -> 0
                    index == 1 && hasLeadingIcon -> sizes[0] + spacing1Px
                    index == 1 && !hasLeadingIcon && hasTrailingIcon -> totalSize - size
                    index == 2 -> totalSize - size
                    else -> 0
                }

            outPositions[index] =
                if (layoutDirection == LayoutDirection.Ltr) {
                    currentX
                } else {
                    totalSize - currentX - size
                }
        }
    }
}

internal val MenuHorizontalMargin
    get() = 8.dp

Sources: [live-androidx-menu-lines-2346-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 2381–2413)

private val MenuListItemContainerHeight
    get() = 48.dp
internal val DropdownMenuItemHorizontalPadding
    get() = 12.dp
internal val DropdownMenuGroupVerticalPadding
    get() = 2.dp

private val DropdownMenuSelectableItemPadding = PaddingValues(horizontal = 4.dp)
private val DropdownMenuSelectableItemWithSupportTexPadding =
    PaddingValues(horizontal = 4.dp, vertical = 2.dp)
private val DropdownMenuIconTextPadding =
    if (shouldUsePrecisionPointerComponentSizing.value) 12.dp else 8.dp
internal val DropdownMenuVerticalPadding
    get() = 8.dp
internal val DropdownMenuItemDefaultMinWidth
    get() = 112.dp
internal val DropdownMenuItemDefaultMaxWidth
    get() = 280.dp

internal val DropdownMenuGroupDefaultMinHeight
    get() = 32.dp

private const val LeadingIconLayoutId = "leadingIcon"
private const val TextLayoutId = "text"
private const val TrailingIconLayoutId = "trailingIcon"
private const val GhostLeadingIconLayoutId = "ghostLeadingIcon"

// Menu open/close animation.
internal const val ExpandedScaleTarget = 1f
internal const val ClosedScaleTarget = 0.8f
internal const val ExpandedAlphaTarget = 1f
internal const val ClosedAlphaTarget = 0f


Sources: [live-androidx-menu-lines-2381-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 246–280)

 * Example usage:
 *
 * @sample androidx.compose.material3.samples.GroupedMenuSample
 *
 * Example usage of cascading menus:
 *
 * @sample androidx.compose.material3.samples.MenuWithCascadingMenusSample
 * @param shapes the [MenuGroupShapes] of the menu group. The shapes provided should be determined
 *   by the number of groups in the menu as well as the group's position in the menu. There is a
 *   convenience function that can be used to easily determine the shape to be used at
 *   [MenuDefaults.groupShape]
 * @param modifier [Modifier] to be applied to this menu group.
 * @param containerColor the container color of the menu group. There are two predefined container
 *   colors at [MenuDefaults.groupStandardContainerColor] and
 *   [MenuDefaults.groupVibrantContainerColor] which you can use.
 * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
 *   overlay is applied on top of the container. A higher tonal elevation value will result in a
 *   darker color in light theme and lighter color in dark theme. See also: [Surface].
 * @param shadowElevation the elevation for the shadow below the menu group.
 * @param border the border to draw around the container of the menu group.
 * @param contentPadding the padding applied to the content of this menu group.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this menu group. This is currently only used for hover
 *   interactions.
 * @param content the content of this menu group, typically [DropdownMenuItem]s.
 *
 * @material3expressive
 */
@Composable
public fun DropdownMenuGroup(
    shapes: MenuGroupShapes,
    modifier: Modifier = Modifier,
    containerColor: Color = MenuDefaults.groupStandardContainerColor,
    tonalElevation: Dp = MenuDefaults.TonalElevation,
    shadowElevation: Dp = MenuDefaults.ShadowElevation,

Sources: [live-androidx-menu-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 281–315)

    border: BorderStroke? = null,
    contentPadding: PaddingValues = MenuDefaults.DropdownMenuGroupContentPadding,
    interactionSource: MutableInteractionSource? = null,
    content: @Composable ColumnScope.() -> Unit,
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }
    val hovered by interactionSource.collectIsHoveredAsState()
    var hasBeenHovered by remember { mutableStateOf(false) }
    if (hovered) {
        hasBeenHovered = true
    }

    val morphSpec = MotionSchemeKeyTokens.FastSpatial.value<Float>()
    val groupShape = shapeByInteraction(shapes, hasBeenHovered, hovered, morphSpec)

    Surface(
        modifier = Modifier.hoverable(interactionSource = interactionSource),
        shape = groupShape,
        color = containerColor,
        tonalElevation = tonalElevation,
        shadowElevation = shadowElevation,
        border = border,
    ) {
        Column(modifier = modifier.padding(contentPadding), content = content)
    }
}

/**
 * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
 *
 * Menus display a list of choices on a temporary surface. They appear when users interact with a
 * button, action, or other control.
 *
 * ![Dropdown menu

Sources: [live-androidx-menu-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 316–350)

 * image](https://developer.android.com/images/reference/androidx/compose/material3/menu.png)
 *
 * Example usage:
 *
 * @sample androidx.compose.material3.samples.MenuSample
 * @param text text of the menu item
 * @param onClick called when this menu item is clicked
 * @param modifier the [Modifier] to be applied to this menu item
 * @param leadingIcon optional leading icon to be displayed at the beginning of the item's text
 * @param trailingIcon optional trailing icon to be displayed at the end of the item's text. This
 *   trailing icon slot can also accept [Text] to indicate a keyboard shortcut.
 * @param enabled controls the enabled state of this menu item. When `false`, this component will
 *   not respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param colors [MenuItemColors] that will be used to resolve the colors used for this menu item in
 *   different states. See [MenuDefaults.itemColors].
 * @param contentPadding the padding applied to the content of this menu item
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this menu item. You can use this to change the menu item's
 *   appearance or preview the menu item in different states. Note that if `null` is provided,
 *   interactions will still happen internally.
 */
@Composable
public expect fun DropdownMenuItem(
    text: @Composable () -> Unit,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
    enabled: Boolean = true,
    colors: MenuItemColors = MenuDefaults.itemColors(),
    contentPadding: PaddingValues = MenuDefaults.DropdownMenuItemContentPadding,
    interactionSource: MutableInteractionSource? = null,
)


Sources: [live-androidx-menu-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 351–385)

/**
 * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
 *
 * Menus display a list of choices on a temporary surface. They appear when users interact with a
 * button, action, or other control.
 *
 * ![Dropdown menu
 * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
 *
 * Example usage:
 *
 * @sample androidx.compose.material3.samples.GroupedMenuSample
 * @param onClick called when this menu item is clicked
 * @param text text of the menu item.
 * @param shape [Shape] of this menu item. The shapes provided should be determined by the number of
 *   items in the group or menu as well as the item's position in the menu. Please use
 *   [MenuDefaults.leadingItemShape] for the first item in a list, [MenuDefaults.middleItemShape]
 *   for the middle items in a list, and [MenuDefaults.trailingItemShape] for the last item in a
 *   list.
 * @param modifier the [Modifier] to be applied to this menu item.
 * @param leadingIcon optional leading icon to be displayed when the item is unchecked.
 * @param trailingContent optional trailing content to be displayed at the end of the item's text.
 * @param supportingText optional supporting text of the menu item.
 * @param enabled controls the enabled state of this menu item. When `false`, this component will
 *   not respond to user input.
 * @param colors [MenuItemColors] that will be used to resolve the colors for this menu item. Please
 *   see [MenuDefaults.itemColors].
 * @param horizontalArrangement the horizontal arrangement of the menu item's children.
 * @param contentPadding the padding applied to the content of this menu item.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this menu item.
 *
 * @material3expressive
 */
@Composable

Sources: [live-androidx-menu-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 36–70)

import androidx.compose.foundation.interaction.collectIsHoveredAsState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.sizeIn
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CornerBasedShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.internal.MenuPosition
import androidx.compose.material3.internal.MenuPosition.bottomToAnchorBottom
import androidx.compose.material3.internal.MenuPosition.bottomToAnchorTop
import androidx.compose.material3.internal.MenuPosition.bottomToWindowBottom
import androidx.compose.material3.internal.MenuPosition.centerToAnchorTop
import androidx.compose.material3.internal.MenuPosition.endToAnchorEnd
import androidx.compose.material3.internal.MenuPosition.endToAnchorStart
import androidx.compose.material3.internal.MenuPosition.leftToWindowLeft
import androidx.compose.material3.internal.MenuPosition.rightToWindowRight
import androidx.compose.material3.internal.MenuPosition.startToAnchorEnd
import androidx.compose.material3.internal.MenuPosition.startToAnchorStart
import androidx.compose.material3.internal.MenuPosition.topToAnchorBottom
import androidx.compose.material3.internal.MenuPosition.topToAnchorTop
import androidx.compose.material3.internal.MenuPosition.topToWindowTop
import androidx.compose.material3.internal.rememberAnimatedShape
import androidx.compose.material3.tokens.ListTokens
import androidx.compose.material3.tokens.MotionSchemeKeyTokens

Sources: [live-androidx-menu-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 386–420)

public fun DropdownMenuItem(
    onClick: () -> Unit,
    text: @Composable () -> Unit,
    shape: Shape,
    modifier: Modifier = Modifier,
    leadingIcon: @Composable (() -> Unit)? = null,
    trailingContent: @Composable (() -> Unit)? = null,
    supportingText: @Composable (() -> Unit)? = null,
    enabled: Boolean = true,
    colors: MenuItemColors = MenuDefaults.itemColors(),
    horizontalArrangement: Arrangement.Horizontal =
        MenuDefaults.DropdownMenuItemHorizontalArrangement,
    contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
    interactionSource: MutableInteractionSource? = null,
) {
    DropdownMenuItemContent(
        text = text,
        selected = false,
        onClick = onClick,
        modifier = modifier.semantics { role = Role.Button },
        supportingText = supportingText,
        leadingIcon = leadingIcon,
        trailingContent = trailingContent,
        selectedLeadingIcon = null,
        enabled = enabled,
        colors = colors,
        shapes = MenuDefaults.itemShapes(shape = shape),
        horizontalArrangement = horizontalArrangement,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
    )
}

/**
 * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)

Sources: [live-androidx-menu-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 421–455)

 *
 * Menus display a list of choices on a temporary surface. They appear when users interact with a
 * button, action, or other control.
 *
 * A menu item that changes its styling depending on the [checked] state.
 *
 * This composable is suitable for menu items that represent an on/off setting, behaving like a
 * checkbox or switch within the menu.
 *
 * ![Dropdown menu
 * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
 *
 * Example usage:
 *
 * @sample androidx.compose.material3.samples.GroupedMenuSample
 * @param checked whether this menu item is currently checked.
 * @param onCheckedChange called when this menu item is clicked, with the new checked state.
 * @param text text of the menu item.
 * @param shapes [MenuItemShapes] that will be used to resolve the shapes for this menu item. The
 *   shape of this item is determined by the value of [checked]. The shapes provided should be
 *   determined by the number of items in the group or menu as well as the item's position in the
 *   menu. There is a convenience function that can be used to easily determine the shape to be used
 *   at [MenuDefaults.itemShape]
 * @param modifier the [Modifier] to be applied to this menu item.
 * @param leadingIcon optional leading icon to be displayed when the item is unchecked.
 * @param checkedLeadingIcon optional leading icon to be displayed when the item is checked.
 * @param trailingContent optional trailing content to be displayed at the end of the item's text.
 * @param supportingText optional supporting text of the menu item.
 * @param enabled controls the enabled state of this menu item. When `false`, this component will
 *   not respond to user input.
 * @param colors [SelectableMenuItemColors] that will be used to resolve the colors for this menu
 *   item. There are two predefined [SelectableMenuItemColors] at
 *   [MenuDefaults.selectableItemColors] and [MenuDefaults.selectableItemVibrantColors] which you
 *   can use or modify.
 * @param horizontalArrangement the horizontal arrangement of the menu item's children.

Sources: [live-androidx-menu-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 456–490)

 * @param contentPadding the padding applied to the content of this menu item.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this menu item.
 *
 * @material3expressive
 */
@Composable
public fun CheckableDropdownMenuItem(
    checked: Boolean,
    onCheckedChange: (Boolean) -> Unit,
    text: @Composable () -> Unit,
    shapes: MenuItemShapes,
    modifier: Modifier = Modifier,
    leadingIcon: @Composable (() -> Unit)? = null,
    checkedLeadingIcon: @Composable (() -> Unit)? = null,
    trailingContent: @Composable (() -> Unit)? = null,
    supportingText: @Composable (() -> Unit)? = null,
    enabled: Boolean = true,
    colors: SelectableMenuItemColors = MenuDefaults.selectableItemColors(),
    horizontalArrangement: Arrangement.Horizontal =
        MenuDefaults.DropdownMenuItemHorizontalArrangement,
    contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
    interactionSource: MutableInteractionSource? = null,
) {
    DropdownMenuItemContent(
        text = text,
        selected = checked,
        onClick = { onCheckedChange(!checked) },
        modifier = modifier.semantics { role = Role.Checkbox },
        supportingText = supportingText,
        leadingIcon = leadingIcon,
        trailingContent = trailingContent,
        selectedLeadingIcon = checkedLeadingIcon,
        enabled = enabled,
        colors = colors,

Sources: [live-androidx-menu-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 491–525)

        shapes = shapes,
        horizontalArrangement = horizontalArrangement,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
    )
}

/**
 * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
 *
 * Menus display a list of choices on a temporary surface. They appear when users interact with a
 * button, action, or other control.
 *
 * A menu item that changes its styling depending on the [checked] state.
 *
 * This composable is suitable for menu items that represent an on/off setting, behaving like a
 * checkbox or switch within the menu.
 *
 * ![Dropdown menu
 * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
 *
 * Example usage:
 *
 * @sample androidx.compose.material3.samples.GroupedMenuSample
 * @param checked whether this menu item is currently checked.
 * @param onCheckedChange called when this menu item is clicked, with the new checked state.
 * @param text text of the menu item.
 * @param shapes [MenuItemShapes] that will be used to resolve the shapes for this menu item. The
 *   shape of this item is determined by the value of [checked]. The shapes provided should be
 *   determined by the number of items in the group or menu as well as the item's position in the
 *   menu. Please use [MenuDefaults.leadingItemShape] for the first item in a list,
 *   [MenuDefaults.middleItemShape] for the middle items in a list, and
 *   [MenuDefaults.trailingItemShape] for the last item in a list.
 * @param modifier the [Modifier] to be applied to this menu item.
 * @param leadingIcon optional leading icon to be displayed when the item is unchecked.

Sources: [live-androidx-menu-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 526–560)

 * @param checkedLeadingIcon optional leading icon to be displayed when the item is checked.
 * @param trailingContent optional trailing content to be displayed at the end of the item's text.
 * @param supportingText optional supporting text of the menu item.
 * @param enabled controls the enabled state of this menu item. When `false`, this component will
 *   not respond to user input.
 * @param colors [SelectableMenuItemColors] that will be used to resolve the colors for this menu
 *   item. There are two predefined [SelectableMenuItemColors] at
 *   [MenuDefaults.selectableItemColors] and [MenuDefaults.selectableItemVibrantColors] which you
 *   can use or modify.
 * @param horizontalArrangement the horizontal arrangement of the menu item's children.
 * @param contentPadding the padding applied to the content of this menu item.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this menu item.
 *
 * @material3expressive
 */
@Deprecated(
    message = "Use CheckableDropdownMenuItem instead.",
    replaceWith =
        ReplaceWith(
            "CheckableDropdownMenuItem(checked = checked, onCheckedChange = onCheckedChange, text = text, shapes = shapes, modifier = modifier, leadingIcon = leadingIcon, checkedLeadingIcon = checkedLeadingIcon, trailingContent = trailingContent, supportingText = supportingText, enabled = enabled, colors = colors, horizontalArrangement = horizontalArrangement, contentPadding = contentPadding, interactionSource = interactionSource)"
        ),
    level = DeprecationLevel.HIDDEN,
)
@ExperimentalMaterial3ExpressiveApi
@JvmName("DropdownMenuItemChecked")
@Composable
public fun DropdownMenuItem(
    checked: Boolean,
    onCheckedChange: (Boolean) -> Unit,
    text: @Composable () -> Unit,
    shapes: MenuItemShapes,
    modifier: Modifier = Modifier,
    leadingIcon: @Composable (() -> Unit)? = null,
    checkedLeadingIcon: @Composable (() -> Unit)? = null,

Sources: [live-androidx-menu-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 561–595)

    trailingContent: @Composable (() -> Unit)? = null,
    supportingText: @Composable (() -> Unit)? = null,
    enabled: Boolean = true,
    colors: SelectableMenuItemColors = MenuDefaults.selectableItemColors(),
    horizontalArrangement: Arrangement.Horizontal =
        MenuDefaults.DropdownMenuItemHorizontalArrangement,
    contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
    interactionSource: MutableInteractionSource? = null,
) {
    DropdownMenuItemContent(
        text = text,
        selected = checked,
        onClick = { onCheckedChange(!checked) },
        modifier = modifier.semantics { role = Role.Checkbox },
        supportingText = supportingText,
        leadingIcon = leadingIcon,
        trailingContent = trailingContent,
        selectedLeadingIcon = checkedLeadingIcon,
        enabled = enabled,
        colors = colors,
        shapes = shapes,
        horizontalArrangement = horizontalArrangement,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
    )
}

/**
 * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
 *
 * Menus display a list of choices on a temporary surface. They appear when users interact with a
 * button, action, or other control.
 *
 * A menu item that changes its styling depending on the [checked] state.
 *

Sources: [live-androidx-menu-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 596–630)

 * This composable is suitable for menu items that represent an on/off setting, behaving like a
 * checkbox or switch within the menu.
 *
 * ![Dropdown menu
 * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
 *
 * Example usage:
 *
 * @sample androidx.compose.material3.samples.GroupedMenuSample
 * @param checked whether this menu item is currently checked
 * @param onCheckedChange called when this menu item is clicked, with the new checked state
 * @param text text of the menu item
 * @param shapes [MenuItemShapes] that will be used to resolve the shapes for this menu item
 * @param modifier the [Modifier] to be applied to this menu item
 * @param leadingIcon optional leading icon to be displayed when the item is unchecked
 * @param checkedLeadingIcon optional leading icon to be displayed when the item is checked
 * @param trailingIcon optional trailing icon to be displayed at the end of the item's text
 * @param supportingText optional supporting text of the menu item
 * @param enabled controls the enabled state of this menu item
 * @param colors [MenuItemColors] that will be used to resolve the colors for this menu item
 * @param horizontalArrangement the horizontal arrangement of the menu item's children
 * @param contentPadding the padding applied to the content of this menu item
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this menu item
 *
 * @material3expressive
 */
@Deprecated("Maintained for binary compatibility.", level = DeprecationLevel.HIDDEN)
@JvmName("DropdownMenuItem")
@Composable
public fun DropdownMenuItemLegacy(
    checked: Boolean,
    onCheckedChange: (Boolean) -> Unit,
    text: @Composable () -> Unit,
    shapes: MenuItemShapes,

Sources: [live-androidx-menu-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 631–665)

    modifier: Modifier = Modifier,
    leadingIcon: @Composable (() -> Unit)? = null,
    checkedLeadingIcon: @Composable (() -> Unit)? = null,
    trailingIcon: @Composable (() -> Unit)? = null,
    supportingText: @Composable (() -> Unit)? = null,
    enabled: Boolean = true,
    colors: MenuItemColors = MenuDefaults.selectableItemColorsLegacy(),
    horizontalArrangement: Arrangement.Horizontal =
        MenuDefaults.DropdownMenuItemHorizontalArrangement,
    contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
    interactionSource: MutableInteractionSource? = null,
) {
    DropdownMenuItemContent(
        text = text,
        selected = checked,
        onClick = { onCheckedChange(!checked) },
        modifier = modifier.semantics { role = Role.Checkbox },
        supportingText = supportingText,
        leadingIcon = leadingIcon,
        trailingContent = trailingIcon,
        selectedLeadingIcon = checkedLeadingIcon,
        enabled = enabled,
        colors = colors,
        shapes = shapes,
        horizontalArrangement = horizontalArrangement,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
    )
}

/**
 * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
 *
 * Menus display a list of choices on a temporary surface. They appear when users interact with a
 * button, action, or other control.

Sources: [live-androidx-menu-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 666–700)

 *
 * A menu item that changes its styling depending on the [selected] state.
 *
 * This composable is suitable for menu items that represent an on/off setting, behaving like a
 * radio button within the menu.
 *
 * ![Dropdown menu
 * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
 *
 * Example usage:
 *
 * @sample androidx.compose.material3.samples.ExposedDropdownMenuSample
 * @param selected whether this menu item is currently selected.
 * @param onClick called when this menu item is clicked.
 * @param text text of the menu item.
 * @param shapes [MenuItemShapes] that will be used to resolve the shapes for this menu item. The
 *   shape of this item is determined by the value of [selected]. The shapes provided should be
 *   determined by the number of items in the group or menu as well as the item's position in the
 *   menu. There is a convenience function that can be used to easily determine the shape to be used
 *   at [MenuDefaults.itemShape]
 * @param modifier the [Modifier] to be applied to this menu item.
 * @param leadingIcon optional leading icon to be displayed when the item is unchecked.
 * @param selectedLeadingIcon optional leading icon to be displayed when the item is selected.
 * @param trailingContent optional trailing content to be displayed at the end of the item's text.
 * @param supportingText optional supporting text of the menu item.
 * @param enabled controls the enabled state of this menu item. When `false`, this component will
 *   not respond to user input.
 * @param colors [SelectableMenuItemColors] that will be used to resolve the colors for this menu
 *   item. There are two predefined [SelectableMenuItemColors] at
 *   [MenuDefaults.selectableItemColors] and [MenuDefaults.selectableItemVibrantColors] which you
 *   can use or modify.
 * @param horizontalArrangement the horizontal arrangement of the menu item's children.
 * @param contentPadding the padding applied to the content of this menu item.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this menu item.

Sources: [live-androidx-menu-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 701–735)

 *
 * @material3expressive
 */
@Composable
public fun SelectableDropdownMenuItem(
    selected: Boolean,
    onClick: () -> Unit,
    text: @Composable () -> Unit,
    shapes: MenuItemShapes,
    modifier: Modifier = Modifier,
    leadingIcon: @Composable (() -> Unit)? = null,
    selectedLeadingIcon: @Composable (() -> Unit)? = null,
    trailingContent: @Composable (() -> Unit)? = null,
    supportingText: @Composable (() -> Unit)? = null,
    enabled: Boolean = true,
    colors: SelectableMenuItemColors = MenuDefaults.selectableItemColors(),
    horizontalArrangement: Arrangement.Horizontal =
        MenuDefaults.DropdownMenuItemHorizontalArrangement,
    contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
    interactionSource: MutableInteractionSource? = null,
) {
    DropdownMenuItemContent(
        text = text,
        selected = selected,
        onClick = onClick,
        modifier = modifier.semantics { role = Role.RadioButton },
        supportingText = supportingText,
        leadingIcon = leadingIcon,
        trailingContent = trailingContent,
        selectedLeadingIcon = selectedLeadingIcon,
        enabled = enabled,
        colors = colors,
        shapes = shapes,
        horizontalArrangement = horizontalArrangement,
        contentPadding = contentPadding,

Sources: [live-androidx-menu-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 71–105)

import androidx.compose.material3.tokens.SegmentedMenuTokens
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.TransformOrigin
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.graphics.takeOrElse
import androidx.compose.ui.platform.LocalInspectionMode
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.role
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.DpOffset
import androidx.compose.ui.unit.IntRect
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Popup
import androidx.compose.ui.window.PopupPositionProvider
import androidx.compose.ui.window.PopupProperties
import kotlin.jvm.JvmName
import kotlin.math.max
import kotlin.math.min


Sources: [live-androidx-menu-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 736–770)

        interactionSource = interactionSource,
    )
}

/**
 * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
 *
 * Menus display a list of choices on a temporary surface. They appear when users interact with a
 * button, action, or other control.
 *
 * A menu item that changes its styling depending on the [selected] state.
 *
 * This composable is suitable for menu items that represent an on/off setting, behaving like a
 * radio button within the menu.
 *
 * ![Dropdown menu
 * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
 *
 * Example usage:
 *
 * @sample androidx.compose.material3.samples.ExposedDropdownMenuSample
 * @param selected whether this menu item is currently selected.
 * @param onClick called when this menu item is clicked.
 * @param text text of the menu item.
 * @param shapes [MenuItemShapes] that will be used to resolve the shapes for this menu item. The
 *   shape of this item is determined by the value of [selected]. The shapes provided should be
 *   determined by the number of items in the group or menu as well as the item's position in the
 *   menu. Please use [MenuDefaults.leadingItemShape] for the first item in a list,
 *   [MenuDefaults.middleItemShape] for the middle items in a list, and
 *   [MenuDefaults.trailingItemShape] for the last item in a list.
 * @param modifier the [Modifier] to be applied to this menu item.
 * @param leadingIcon optional leading icon to be displayed when the item is unselected.
 * @param selectedLeadingIcon optional leading icon to be displayed when the item is selected.
 * @param trailingContent optional trailing content to be displayed at the end of the item's text.
 * @param supportingText optional supporting text of the menu item.

Sources: [live-androidx-menu-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 771–805)

 * @param enabled controls the enabled state of this menu item. When `false`, this component will
 *   not respond to user input.
 * @param colors [SelectableMenuItemColors] that will be used to resolve the colors for this menu
 *   item. There are two predefined [SelectableMenuItemColors] at
 *   [MenuDefaults.selectableItemColors] and [MenuDefaults.selectableItemVibrantColors] which you
 *   can use or modify.
 * @param horizontalArrangement the horizontal arrangement of the menu item's children.
 * @param contentPadding the padding applied to the content of this menu item.
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this menu item.
 *
 * @material3expressive
 */
@Deprecated(
    message = "Use SelectableDropdownMenuItem instead.",
    replaceWith =
        ReplaceWith(
            "SelectableDropdownMenuItem(selected = selected, onClick = onClick, text = text, shapes = shapes, modifier = modifier, leadingIcon = leadingIcon, selectedLeadingIcon = selectedLeadingIcon, trailingContent = trailingContent, supportingText = supportingText, enabled = enabled, colors = colors, horizontalArrangement = horizontalArrangement, contentPadding = contentPadding, interactionSource = interactionSource)"
        ),
    level = DeprecationLevel.HIDDEN,
)
@ExperimentalMaterial3ExpressiveApi
@JvmName("DropdownMenuItemSelected")
@Composable
public fun DropdownMenuItem(
    selected: Boolean,
    onClick: () -> Unit,
    text: @Composable () -> Unit,
    shapes: MenuItemShapes,
    modifier: Modifier = Modifier,
    leadingIcon: @Composable (() -> Unit)? = null,
    selectedLeadingIcon: @Composable (() -> Unit)? = null,
    trailingContent: @Composable (() -> Unit)? = null,
    supportingText: @Composable (() -> Unit)? = null,
    enabled: Boolean = true,

Sources: [live-androidx-menu-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 806–840)

    colors: SelectableMenuItemColors = MenuDefaults.selectableItemColors(),
    horizontalArrangement: Arrangement.Horizontal =
        MenuDefaults.DropdownMenuItemHorizontalArrangement,
    contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
    interactionSource: MutableInteractionSource? = null,
) {
    DropdownMenuItemContent(
        text = text,
        selected = selected,
        onClick = onClick,
        modifier = modifier.semantics { role = Role.RadioButton },
        supportingText = supportingText,
        leadingIcon = leadingIcon,
        trailingContent = trailingContent,
        selectedLeadingIcon = selectedLeadingIcon,
        enabled = enabled,
        colors = colors,
        shapes = shapes,
        horizontalArrangement = horizontalArrangement,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
    )
}

/**
 * [Material Design dropdown menu](https://m3.material.io/components/menus/overview)
 *
 * Menus display a list of choices on a temporary surface. They appear when users interact with a
 * button, action, or other control.
 *
 * A menu item that changes its styling depending on the [selected] state.
 *
 * This composable is suitable for menu items that represent an on/off setting, behaving like a
 * radio button within the menu.
 *

Sources: [live-androidx-menu-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 841–875)

 * ![Dropdown menu
 * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu-selectable-items.png)
 *
 * Example usage:
 *
 * @sample androidx.compose.material3.samples.ExposedDropdownMenuSample
 * @param selected whether this menu item is currently selected
 * @param onClick called when this menu item is clicked
 * @param text text of the menu item
 * @param shapes [MenuItemShapes] that will be used to resolve the shapes for this menu item
 * @param modifier the [Modifier] to be applied to this menu item
 * @param leadingIcon optional leading icon to be displayed when the item is unchecked
 * @param selectedLeadingIcon optional leading icon to be displayed when the item is selected
 * @param trailingIcon optional trailing icon to be displayed at the end of the item's text
 * @param supportingText optional supporting text of the menu item
 * @param enabled controls the enabled state of this menu item
 * @param colors [MenuItemColors] that will be used to resolve the colors for this menu item
 * @param horizontalArrangement the horizontal arrangement of the menu item's children
 * @param contentPadding the padding applied to the content of this menu item
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this menu item
 *
 * @material3expressive
 */
@Deprecated("Maintained for binary compatibility.", level = DeprecationLevel.HIDDEN)
@JvmName("DropdownMenuItem")
@Composable
public fun DropdownMenuItemLegacy(
    selected: Boolean,
    onClick: () -> Unit,
    text: @Composable () -> Unit,
    shapes: MenuItemShapes,
    modifier: Modifier = Modifier,
    leadingIcon: @Composable (() -> Unit)? = null,
    selectedLeadingIcon: @Composable (() -> Unit)? = null,

Sources: [live-androidx-menu-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 876–910)

    trailingIcon: @Composable (() -> Unit)? = null,
    supportingText: @Composable (() -> Unit)? = null,
    enabled: Boolean = true,
    colors: MenuItemColors = MenuDefaults.selectableItemColorsLegacy(),
    horizontalArrangement: Arrangement.Horizontal =
        MenuDefaults.DropdownMenuItemHorizontalArrangement,
    contentPadding: PaddingValues = MenuDefaults.DropdownMenuSelectableItemContentPadding,
    interactionSource: MutableInteractionSource? = null,
) {
    DropdownMenuItemContent(
        text = text,
        selected = selected,
        onClick = onClick,
        modifier = modifier.semantics { role = Role.RadioButton },
        supportingText = supportingText,
        leadingIcon = leadingIcon,
        trailingContent = trailingIcon,
        selectedLeadingIcon = selectedLeadingIcon,
        enabled = enabled,
        colors = colors,
        shapes = shapes,
        horizontalArrangement = horizontalArrangement,
        contentPadding = contentPadding,
        interactionSource = interactionSource,
    )
}

/**
 * Represents the text and icon colors used in a menu item at different states.
 *
 * @param textColor the text color of this [DropdownMenuItem] when enabled and unselected /
 *   unchecked.
 * @param leadingIconColor the leading icon color of this [DropdownMenuItem] when enabled and
 *   unselected / unchecked.
 * @param trailingIconColor the trailing icon color of this [DropdownMenuItem] when enabled and

Sources: [live-androidx-menu-lines-876-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 911–945)

 *   unselected / unchecked.
 * @param disabledTextColor the text color of this [DropdownMenuItem] when not enabled
 * @param disabledLeadingIconColor the leading icon color of this [DropdownMenuItem] when not
 *   enabled
 * @param disabledTrailingIconColor the trailing icon color of this [DropdownMenuItem] when not
 *   enabled
 * @constructor create an instance with arbitrary colors. See [MenuDefaults.itemColors] for the
 *   default colors used in a [DropdownMenuItem].
 */
@Immutable
public class MenuItemColors(
    public val textColor: Color,
    public val leadingIconColor: Color,
    public val trailingIconColor: Color,
    public val disabledTextColor: Color,
    public val disabledLeadingIconColor: Color,
    public val disabledTrailingIconColor: Color,
) {

    /** The container color of this menu item when enabled. */
    public var containerColor: Color = Color.Transparent
        internal set

    /** The container color of this menu item when not enabled. */
    public var disabledContainerColor: Color = Color.Transparent
        internal set

    /** The container color of this menu item when enabled and selected. */
    @Deprecated("Use SelectableMenuItemColors instead.")
    public val selectedContainerColor: Color
        get() = containerColor

    /** The text color of this menu item when enabled and selected. */
    @Deprecated("Use SelectableMenuItemColors instead.")
    public val selectedTextColor: Color

Sources: [live-androidx-menu-lines-911-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 946–980)

        get() = textColor

    /** The leading icon color of this menu item when enabled and selected. */
    @Deprecated("Use SelectableMenuItemColors instead.")
    public val selectedLeadingIconColor: Color
        get() = leadingIconColor

    /** The trailing icon color of this menu item when enabled and selected. */
    @Deprecated("Use SelectableMenuItemColors instead.")
    public val selectedTrailingIconColor: Color
        get() = trailingIconColor

    /** The trailing content color of this menu item when enabled and selected. */
    @Deprecated("Use SelectableMenuItemColors instead.")
    public val selectedTrailingContentColor: Color
        get() = trailingIconColor

    // Secondary constructor to initialize all 8 properties
    public constructor(
        textColor: Color,
        leadingIconColor: Color,
        trailingIconColor: Color,
        disabledTextColor: Color,
        disabledLeadingIconColor: Color,
        disabledTrailingIconColor: Color,
        containerColor: Color,
        disabledContainerColor: Color,
    ) : this(
        textColor = textColor,
        leadingIconColor = leadingIconColor,
        trailingIconColor = trailingIconColor,
        disabledTextColor = disabledTextColor,
        disabledLeadingIconColor = disabledLeadingIconColor,
        disabledTrailingIconColor = disabledTrailingIconColor,
    ) {

Sources: [live-androidx-menu-lines-946-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)

## Material 3 Menu source (lines 981–1015)

        this.containerColor = containerColor
        this.disabledContainerColor = disabledContainerColor
    }

    @Deprecated(
        "MenuItemColors no longer supports selected colors. Use SelectableMenuItemColors instead."
    )
    public constructor(
        textColor: Color = Color.Unspecified,
        leadingIconColor: Color = Color.Unspecified,
        trailingIconColor: Color = Color.Unspecified,
        disabledTextColor: Color = Color.Unspecified,
        disabledLeadingIconColor: Color = Color.Unspecified,
        disabledTrailingIconColor: Color = Color.Unspecified,
        selectedTextColor: Color = Color.Unspecified,
        selectedContainerColor: Color = Color.Unspecified,
        selectedLeadingIconColor: Color = Color.Unspecified,
        selectedTrailingIconColor: Color = Color.Unspecified,
    ) : this(
        textColor = textColor,
        leadingIconColor = leadingIconColor,
        trailingIconColor = trailingIconColor,
        disabledTextColor = disabledTextColor,
        disabledLeadingIconColor = disabledLeadingIconColor,
        disabledTrailingIconColor = disabledTrailingIconColor,
    )

    @Deprecated(
        "MenuItemColors no longer supports selected colors. Use SelectableMenuItemColors instead."
    )
    public constructor(
        textColor: Color,
        leadingIconColor: Color,
        trailingIconColor: Color,
        disabledTextColor: Color,

Sources: [live-androidx-menu-lines-981-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Menu.kt)
