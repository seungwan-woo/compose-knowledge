---
type: reference
title: Popup source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-popup-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt
    startLine: 1
    endLine: 35
    sha256: 5b5af7b8f1e89d5f80d84eb368ae75c5bd52b847fa6dc3361cd7f0cd445df4dc
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

      package androidx.compose.ui.window

      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.Immutable
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.unit.IntOffset
      import androidx.compose.ui.unit.IntRect
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.LayoutDirection

      /**
       * Properties used to customize the behavior of a [Popup].
       *
       * @property focusable Whether the popup is focusable. When true, the popup will receive IME events
       *   and key presses, such as when the back button is pressed.
       * @property dismissOnBackPress Whether the popup can be dismissed by pressing the back or escape
       *   buttons on Android or the escape key on desktop. If true, pressing the back button will call
       *   onDismissRequest. Note that [focusable] must be set to true in order to receive key events such
       *   as the back button - if the popup is not focusable then this property does nothing.
  - id: live-androidx-popup-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt
    startLine: 106
    endLine: 140
    sha256: 050641be7b89c92283a24c73011d554ad3685af8d7a1feff8f399f73733ceaf3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              // Note the negative sign. Popup alignment point contributes negative offset.
              val popupAlignmentPoint = -alignment.align(IntSize.Zero, popupContentSize, layoutDirection)
              val resolvedUserOffset =
                  IntOffset(offset.x * (if (layoutDirection == LayoutDirection.Ltr) 1 else -1), offset.y)

              return anchorBounds.topLeft +
                  anchorAlignmentPoint +
                  popupAlignmentPoint +
                  resolvedUserOffset
          }
      }

      /**
       * Opens a popup with the given content.
       *
       * A popup is a floating container that appears on top of the current activity. It is especially
       * useful for non-modal UI surfaces that remain hidden until they are needed, for example floating
       * menus like Cut/Copy/Paste.
       *
       * The popup is positioned relative to its parent, using the [alignment] and [offset]. The popup is
       * visible as long as it is part of the composition hierarchy.
       *
       * @sample androidx.compose.ui.samples.PopupSample
       * @param alignment The alignment relative to the parent.
       * @param offset An offset from the original aligned position of the popup. Offset respects the
       *   Ltr/Rtl context, thus in Ltr it will be added to the original aligned position and in Rtl it
       *   will be subtracted from it.
       * @param onDismissRequest Executes when the user clicks outside of the popup.
       * @param properties [PopupProperties] for further customization of this popup's behavior.
       * @param content The content to be displayed inside the popup.
       */
      @Composable
      public expect fun Popup(
          alignment: Alignment = Alignment.TopStart,
          offset: IntOffset = IntOffset(0, 0),
  - id: live-androidx-popup-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt
    startLine: 141
    endLine: 164
    sha256: 2a8ca2f9ff5f8b7d54c0403ab975555f83048e6f9e92cbd76fa7ca28abc75f79
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          onDismissRequest: (() -> Unit)? = null,
          properties: PopupProperties = PopupProperties(),
          content: @Composable () -> Unit,
      )

      /**
       * Opens a popup with the given content.
       *
       * The popup is positioned using a custom [popupPositionProvider].
       *
       * @sample androidx.compose.ui.samples.PopupWithPositionProviderSample
       * @param popupPositionProvider Provides the screen position of the popup.
       * @param onDismissRequest Executes when the user clicks outside of the popup.
       * @param properties [PopupProperties] for further customization of this popup's behavior.
       * @param content The content to be displayed inside the popup.
       */
      @Composable
      public expect fun Popup(
          popupPositionProvider: PopupPositionProvider,
          onDismissRequest: (() -> Unit)? = null,
          properties: PopupProperties = PopupProperties(),
          content: @Composable () -> Unit,
      )
  - id: live-androidx-popup-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt
    startLine: 36
    endLine: 70
    sha256: 485c2405f625824db8fe139271ea4c69b6e99b193fdbff59a99029b5e8d9daad
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @property dismissOnClickOutside Whether the popup can be dismissed by clicking outside the
       *   popup's bounds. If true, clicking outside the popup will call onDismissRequest.
       * @property clippingEnabled Whether to allow the popup window to extend beyond the bounds of the
       *   screen. By default the window is clipped to the screen boundaries. Setting this to false will
       *   allow windows to be accurately positioned. The default value is true.
       * @property usePlatformDefaultWidth Whether the width of the popup's content should be limited to
       *   the platform default, which is smaller than the screen width.
       */
      @Immutable
      public expect class PopupProperties {
          public constructor(
              focusable: Boolean = false,
              dismissOnBackPress: Boolean = true,
              dismissOnClickOutside: Boolean = true,
              clippingEnabled: Boolean = true,
              usePlatformDefaultWidth: Boolean = false,
          )

          @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
          public constructor(
              focusable: Boolean = false,
              dismissOnBackPress: Boolean = true,
              dismissOnClickOutside: Boolean = true,
              clippingEnabled: Boolean = true,
          )

          public val focusable: Boolean
          public val dismissOnBackPress: Boolean
          public val dismissOnClickOutside: Boolean
          public val clippingEnabled: Boolean
          public val usePlatformDefaultWidth: Boolean
      }

      /** Calculates the position of a [Popup] on screen. */
      @Immutable
  - id: live-androidx-popup-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt
    startLine: 71
    endLine: 105
    sha256: 706b75f22b40e1046780d1bb8b5256ac37a8c2e9c1402beb241c448eb70a6ace
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public interface PopupPositionProvider {
          /**
           * Calculates the position of a [Popup] on screen.
           *
           * The window size is useful in cases where the popup is meant to be positioned next to its
           * anchor instead of inside of it. The size can be used to calculate available space around the
           * parent to find a spot with enough clearance (e.g. when implementing a dropdown). Note that
           * positioning the popup outside of the window bounds might prevent it from being visible.
           *
           * @param anchorBounds The window relative bounds of the layout which this popup is anchored to.
           * @param windowSize The size of the window containing the anchor layout.
           * @param layoutDirection The layout direction of the anchor layout.
           * @param popupContentSize The size of the popup's content.
           * @return The window relative position where the popup should be positioned.
           */
          public fun calculatePosition(
              anchorBounds: IntRect,
              windowSize: IntSize,
              layoutDirection: LayoutDirection,
              popupContentSize: IntSize,
          ): IntOffset
      }

      internal class AlignmentOffsetPositionProvider(val alignment: Alignment, val offset: IntOffset) :
          PopupPositionProvider {
          override fun calculatePosition(
              anchorBounds: IntRect,
              windowSize: IntSize,
              layoutDirection: LayoutDirection,
              popupContentSize: IntSize,
          ): IntOffset {
              // TODO: Decide which is the best way to round to result without reimplementing
              // Alignment.align

              val anchorAlignmentPoint = alignment.align(IntSize.Zero, anchorBounds.size, layoutDirection)
compose:
  id: live-androidx-popup
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.window.Popup
  sections:
    - id: live-androidx-popup-lines-1
      title: Popup source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-popup-lines-1-source
      relatedIds: []
    - id: live-androidx-popup-lines-106
      title: Popup source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-popup-lines-106-source
      relatedIds: []
    - id: live-androidx-popup-lines-141
      title: Popup source (lines 141–164)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-popup-lines-141-source
      relatedIds: []
    - id: live-androidx-popup-lines-36
      title: Popup source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-popup-lines-36-source
      relatedIds: []
    - id: live-androidx-popup-lines-71
      title: Popup source (lines 71–105)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-popup-lines-71-source
      relatedIds: []
---

# Popup source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt

## Popup source (lines 1–35)

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

package androidx.compose.ui.window

import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.ui.Alignment
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntRect
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.LayoutDirection

/**
 * Properties used to customize the behavior of a [Popup].
 *
 * @property focusable Whether the popup is focusable. When true, the popup will receive IME events
 *   and key presses, such as when the back button is pressed.
 * @property dismissOnBackPress Whether the popup can be dismissed by pressing the back or escape
 *   buttons on Android or the escape key on desktop. If true, pressing the back button will call
 *   onDismissRequest. Note that [focusable] must be set to true in order to receive key events such
 *   as the back button - if the popup is not focusable then this property does nothing.

Sources: [live-androidx-popup-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt)

## Popup source (lines 106–140)

        // Note the negative sign. Popup alignment point contributes negative offset.
        val popupAlignmentPoint = -alignment.align(IntSize.Zero, popupContentSize, layoutDirection)
        val resolvedUserOffset =
            IntOffset(offset.x * (if (layoutDirection == LayoutDirection.Ltr) 1 else -1), offset.y)

        return anchorBounds.topLeft +
            anchorAlignmentPoint +
            popupAlignmentPoint +
            resolvedUserOffset
    }
}

/**
 * Opens a popup with the given content.
 *
 * A popup is a floating container that appears on top of the current activity. It is especially
 * useful for non-modal UI surfaces that remain hidden until they are needed, for example floating
 * menus like Cut/Copy/Paste.
 *
 * The popup is positioned relative to its parent, using the [alignment] and [offset]. The popup is
 * visible as long as it is part of the composition hierarchy.
 *
 * @sample androidx.compose.ui.samples.PopupSample
 * @param alignment The alignment relative to the parent.
 * @param offset An offset from the original aligned position of the popup. Offset respects the
 *   Ltr/Rtl context, thus in Ltr it will be added to the original aligned position and in Rtl it
 *   will be subtracted from it.
 * @param onDismissRequest Executes when the user clicks outside of the popup.
 * @param properties [PopupProperties] for further customization of this popup's behavior.
 * @param content The content to be displayed inside the popup.
 */
@Composable
public expect fun Popup(
    alignment: Alignment = Alignment.TopStart,
    offset: IntOffset = IntOffset(0, 0),

Sources: [live-androidx-popup-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt)

## Popup source (lines 141–164)

    onDismissRequest: (() -> Unit)? = null,
    properties: PopupProperties = PopupProperties(),
    content: @Composable () -> Unit,
)

/**
 * Opens a popup with the given content.
 *
 * The popup is positioned using a custom [popupPositionProvider].
 *
 * @sample androidx.compose.ui.samples.PopupWithPositionProviderSample
 * @param popupPositionProvider Provides the screen position of the popup.
 * @param onDismissRequest Executes when the user clicks outside of the popup.
 * @param properties [PopupProperties] for further customization of this popup's behavior.
 * @param content The content to be displayed inside the popup.
 */
@Composable
public expect fun Popup(
    popupPositionProvider: PopupPositionProvider,
    onDismissRequest: (() -> Unit)? = null,
    properties: PopupProperties = PopupProperties(),
    content: @Composable () -> Unit,
)


Sources: [live-androidx-popup-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt)

## Popup source (lines 36–70)

 * @property dismissOnClickOutside Whether the popup can be dismissed by clicking outside the
 *   popup's bounds. If true, clicking outside the popup will call onDismissRequest.
 * @property clippingEnabled Whether to allow the popup window to extend beyond the bounds of the
 *   screen. By default the window is clipped to the screen boundaries. Setting this to false will
 *   allow windows to be accurately positioned. The default value is true.
 * @property usePlatformDefaultWidth Whether the width of the popup's content should be limited to
 *   the platform default, which is smaller than the screen width.
 */
@Immutable
public expect class PopupProperties {
    public constructor(
        focusable: Boolean = false,
        dismissOnBackPress: Boolean = true,
        dismissOnClickOutside: Boolean = true,
        clippingEnabled: Boolean = true,
        usePlatformDefaultWidth: Boolean = false,
    )

    @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
    public constructor(
        focusable: Boolean = false,
        dismissOnBackPress: Boolean = true,
        dismissOnClickOutside: Boolean = true,
        clippingEnabled: Boolean = true,
    )

    public val focusable: Boolean
    public val dismissOnBackPress: Boolean
    public val dismissOnClickOutside: Boolean
    public val clippingEnabled: Boolean
    public val usePlatformDefaultWidth: Boolean
}

/** Calculates the position of a [Popup] on screen. */
@Immutable

Sources: [live-androidx-popup-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt)

## Popup source (lines 71–105)

public interface PopupPositionProvider {
    /**
     * Calculates the position of a [Popup] on screen.
     *
     * The window size is useful in cases where the popup is meant to be positioned next to its
     * anchor instead of inside of it. The size can be used to calculate available space around the
     * parent to find a spot with enough clearance (e.g. when implementing a dropdown). Note that
     * positioning the popup outside of the window bounds might prevent it from being visible.
     *
     * @param anchorBounds The window relative bounds of the layout which this popup is anchored to.
     * @param windowSize The size of the window containing the anchor layout.
     * @param layoutDirection The layout direction of the anchor layout.
     * @param popupContentSize The size of the popup's content.
     * @return The window relative position where the popup should be positioned.
     */
    public fun calculatePosition(
        anchorBounds: IntRect,
        windowSize: IntSize,
        layoutDirection: LayoutDirection,
        popupContentSize: IntSize,
    ): IntOffset
}

internal class AlignmentOffsetPositionProvider(val alignment: Alignment, val offset: IntOffset) :
    PopupPositionProvider {
    override fun calculatePosition(
        anchorBounds: IntRect,
        windowSize: IntSize,
        layoutDirection: LayoutDirection,
        popupContentSize: IntSize,
    ): IntOffset {
        // TODO: Decide which is the best way to round to result without reimplementing
        // Alignment.align

        val anchorAlignmentPoint = alignment.align(IntSize.Zero, anchorBounds.size, layoutDirection)

Sources: [live-androidx-popup-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt)
