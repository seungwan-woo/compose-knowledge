---
type: reference
title: androidx.compose.ui.input.pointer PointerEvent.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 1
    endLine: 35
    sha256: 3dc64fa345ab9f659e1a6963639042be565d75258565c73fa97a4e547da08927
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
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

      @file:Suppress("NOTHING_TO_INLINE", "KotlinRedundantDiagnosticSuppress")

      package androidx.compose.ui.input.pointer

      import androidx.compose.runtime.Immutable
      import androidx.compose.ui.ExperimentalComposeUiApi
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.internal.JvmDefaultWithCompatibility
      import androidx.compose.ui.layout.LayoutCoordinates
      import androidx.compose.ui.unit.IntSize

      /** A [Modifier.Element] that can interact with pointer input. */
      @JvmDefaultWithCompatibility
      public interface PointerInputModifier : Modifier.Element {
          public val pointerInputFilter: PointerInputFilter
      }
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1011-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 1011
    endLine: 1045
    sha256: ca8a45c7a502bee33bcb3e1e7833f5725aea1b66d8b2d7969bacae1a9884ea45
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              position: Offset,
          ) : this(
              uptimeMillis = uptimeMillis,
              position = position,
              scaleFactor = 1f,
              panOffset = Offset.Zero,
          )

          internal constructor(
              uptimeMillis: Long,
              position: Offset,
              scaleFactor: Float,
              panOffset: Offset,
              originalEventPosition: Offset,
          ) : this(uptimeMillis, position, scaleFactor, panOffset) {
              this.originalEventPosition = originalEventPosition
          }

          public override fun toString(): String {
              return "HistoricalChange(uptimeMillis=$uptimeMillis, " +
                  "position=$position, " +
                  "scaleFactor=$scaleFactor, " +
                  "panOffset=$panOffset)"
          }
      }

      /**
       * An ID for a given pointer.
       *
       * @param value The actual value of the id.
       */
      @kotlin.jvm.JvmInline public value class PointerId(public val value: Long)

      /**
       * Describes what aspects of a change has been consumed.
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1046-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 1046
    endLine: 1080
    sha256: 0f84d81e0011b5aad19ffd2cb89e70fc5098322599aba7b43b5cab6b92bad58a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @param positionChange True if a position change in this event has been consumed.
       * @param downChange True if a change to down or up has been consumed.
       */
      @Deprecated("Use PointerInputChange.isConsumed and PointerInputChange.consume() instead")
      public class ConsumedData(positionChange: Boolean = false, downChange: Boolean = false) {
          private var change: PointerInputChange? = null

          internal constructor(
              change: PointerInputChange
          ) : this(change.positionChange, change.downChange) {
              this.change = change
          }

          @Suppress("GetterSetterNames")
          @get:Suppress("GetterSetterNames")
          @Deprecated(
              "Partial consumption was deprecated. Use PointerEvent.isConsumed " +
                  "and PointerEvent.consume() instead."
          )
          public var positionChange: Boolean = positionChange
              get() = change?.consumedDelegate?.positionChange ?: (change?.positionChange ?: field)
              set(value) {
                  change?.consumedDelegate?.positionChange = value
                  change?.positionChange = value
                  field = value
              }

          @Suppress("GetterSetterNames")
          @get:Suppress("GetterSetterNames")
          @Deprecated(
              "Partial consumption was deprecated. Use PointerEvent.isConsumed " +
                  "and PointerEvent.consume() instead."
          )
          public var downChange: Boolean = downChange
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 106
    endLine: 140
    sha256: 27efcd2915bd7705fb3eda5aca26c8b599deff4b4eb11c2d11b88d02117054d5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      internal constructor(
          changes: List<PointerInputChange>,
          internalPointerEvent: InternalPointerEvent?,
      ) {
          /** @param changes The changes. */
          public constructor(changes: List<PointerInputChange>)

          /** The changes. */
          public val changes: List<PointerInputChange>

          /** The state of buttons (e.g. mouse or stylus buttons) during this event. */
          public val buttons: PointerButtons

          /** The state of modifier keys during this event. */
          public val keyboardModifiers: PointerKeyboardModifiers

          /** The primary reason the [PointerEvent] was sent. */
          public var type: PointerEventType
              internal set
      }

      /** Contains the state of pointer buttons (e.g. mouse and stylus buttons). */
      @kotlin.jvm.JvmInline public value class PointerButtons(internal val packedValue: Int = 0)

      /**
       * `true` when the primary button (left mouse button) is pressed or `false` when it isn't pressed.
       */
      public expect val PointerButtons.isPrimaryPressed: Boolean

      /**
       * `true` when the secondary button (right mouse button) is pressed or `false` when it isn't
       * pressed.
       */
      public expect val PointerButtons.isSecondaryPressed: Boolean
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1081-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 1081
    endLine: 1115
    sha256: 79cc23cdc7baaf561ec33f0455f25255c3c5b4edee6d814af3dd8fca48aed668
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              get() = change?.consumedDelegate?.downChange ?: (change?.downChange ?: field)
              set(value) {
                  change?.consumedDelegate?.downChange = value
                  change?.downChange = value
                  field = value
              }
      }

      /**
       * The enumeration of passes where [PointerInputChange] traverses up and down the UI tree.
       *
       * PointerInputChanges traverse throw the hierarchy in the following passes:
       * 1. [Initial]: Down the tree from ancestor to descendant.
       * 2. [Main]: Up the tree from descendant to ancestor.
       * 3. [Final]: Down the tree from ancestor to descendant.
       *
       * These passes serve the following purposes:
       * 1. Initial: Allows ancestors to consume aspects of [PointerInputChange] before descendants. This
       *    is where, for example, a scroller may block buttons from getting tapped by other fingers once
       *    scrolling has started.
       * 2. Main: The primary pass where gesture filters should react to and consume aspects of
       *    [PointerInputChange]s. This is the primary path where descendants will interact with
       *    [PointerInputChange]s before parents. This allows for buttons to respond to a tap before a
       *    container of the bottom to respond to a tap.
       * 3. Final: This pass is where children can learn what aspects of [PointerInputChange]s were
       *    consumed by parents during the [Main] pass. For example, this is how a button determines that
       *    it should no longer respond to fingers lifting off of it because a parent scroller has
       *    consumed movement in a [PointerInputChange].
       */
      public enum class PointerEventPass {
          Initial,
          Main,
          Final,
      }
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1116-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 1116
    endLine: 1150
    sha256: f19e706a427ec718a4bd091b1c680ecd95d1c317ecef20420a2b4d4bbea03039
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * True if this [PointerInputChange] represents a pointer coming in contact with the screen and that
       * change has not been consumed.
       */
      public fun PointerInputChange.changedToDown(): Boolean = !isConsumed && !previousPressed && pressed

      /**
       * True if this [PointerInputChange] represents a pointer coming in contact with the screen, whether
       * or not that change has been consumed.
       */
      public fun PointerInputChange.changedToDownIgnoreConsumed(): Boolean = !previousPressed && pressed

      /**
       * True if this [PointerInputChange] represents a pointer breaking contact with the screen and that
       * change has not been consumed.
       */
      public fun PointerInputChange.changedToUp(): Boolean = !isConsumed && previousPressed && !pressed

      /**
       * True if this [PointerInputChange] represents a pointer breaking contact with the screen, whether
       * or not that change has been consumed.
       */
      public fun PointerInputChange.changedToUpIgnoreConsumed(): Boolean = previousPressed && !pressed

      /**
       * True if this [PointerInputChange] represents a pointer moving on the screen and some of that
       * movement has not been consumed.
       */
      public fun PointerInputChange.positionChanged(): Boolean =
          this.positionChangeInternal(false) != Offset.Zero

      /**
       * True if this [PointerInputChange] represents a pointer moving on the screen ignoring how much of
       * that movement may have been consumed.
       */
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1151-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 1151
    endLine: 1185
    sha256: cd40da683994a3b0856268a582747b85061e1b679ae5d3657b9f1f9e1487e725
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public fun PointerInputChange.positionChangedIgnoreConsumed(): Boolean =
          this.positionChangeInternal(true) != Offset.Zero

      /**
       * The distance that the pointer has moved on the screen minus any distance that has been consumed.
       */
      public fun PointerInputChange.positionChange(): Offset = this.positionChangeInternal(false)

      /**
       * The distance that the pointer has moved on the screen, ignoring the fact that it might have been
       * consumed.
       */
      public fun PointerInputChange.positionChangeIgnoreConsumed(): Offset =
          this.positionChangeInternal(true)

      private fun PointerInputChange.positionChangeInternal(ignoreConsumed: Boolean = false): Offset {
          val previousPosition = previousPosition
          val currentPosition = position

          val offset = currentPosition - previousPosition

          return if (!ignoreConsumed && isConsumed) Offset.Zero else offset
      }

      /** True if this [PointerInputChange]'s movement has been consumed. */
      @Deprecated(
          "Partial consumption has been deprecated. Use isConsumed instead",
          replaceWith = ReplaceWith("isConsumed"),
      )
      public fun PointerInputChange.positionChangeConsumed(): Boolean = isConsumed

      /** True if any aspect of this [PointerInputChange] has been consumed. */
      @Deprecated(
          "Partial consumption has been deprecated. Use isConsumed instead",
          replaceWith = ReplaceWith("isConsumed"),
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1186-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 1186
    endLine: 1220
    sha256: 6209485f4bee42404192c6dc09fd17a79b73ea282fd4cb3d613b3d71fe87b4ba
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      )
      public fun PointerInputChange.anyChangeConsumed(): Boolean = isConsumed

      /**
       * Consume the up or down change of this [PointerInputChange] if there is an up or down change to
       * consume.
       */
      @Deprecated(
          "Partial consumption has been deprecated. Use consume() instead.",
          replaceWith = ReplaceWith("if (pressed != previousPressed) consume()"),
      )
      public fun PointerInputChange.consumeDownChange() {
          if (pressed != previousPressed) {
              consume()
          }
      }

      /** Consume position change if there is any */
      @Deprecated(
          "Partial consumption has been deprecated. Use consume() instead.",
          replaceWith = ReplaceWith("if (positionChange() != Offset.Zero) consume()"),
      )
      public fun PointerInputChange.consumePositionChange() {
          if (positionChange() != Offset.Zero) {
              consume()
          }
      }

      /** Consumes all changes associated with the [PointerInputChange] */
      @Deprecated("Use consume() instead", replaceWith = ReplaceWith("consume()"))
      public fun PointerInputChange.consumeAllChanges() {
          consume()
      }

      /**
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1221-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 1221
    endLine: 1255
    sha256: 0266b711b163112ac3bc336bba87cc3cd2213f59a19f1fd228b5252c2ef042c9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Returns `true` if the pointer has moved outside of the region of `(0, 0, size.width,
       * size.height)` or `false` if the current pointer is up or it is inside the given bounds.
       */
      @Deprecated(
          message = "Use isOutOfBounds() that supports minimum touch target",
          replaceWith = ReplaceWith("this.isOutOfBounds(size, extendedTouchPadding)"),
      )
      public fun PointerInputChange.isOutOfBounds(size: IntSize): Boolean {
          val position = position
          val x = position.x
          val y = position.y
          val width = size.width
          val height = size.height
          // Branch-less
          return (x < 0f) or (x > width) or (y < 0f) or (y > height)
      }

      /**
       * Returns `true` if the pointer has moved outside of the pointer region. For Touch events, this is
       * (-extendedTouchPadding.width, -extendedTouchPadding.height, size.width +
       * extendedTouchPadding.width, size.height + extendedTouchPadding.height) and for other events, this
       * is `(0, 0, size.width, size.height)`. Returns`false` if the current pointer is up or it is inside
       * the pointer region.
       */
      public fun PointerInputChange.isOutOfBounds(size: IntSize, extendedTouchPadding: Size): Boolean {
          // Set to 1 when the pointer type is touch, 0 otherwise
          // No-op at the CPU level
          val isTouch = (type == PointerType.Touch).toInt()

          val position = position
          val x = position.x
          val y = position.y

          // Set extentX to 0 when the pointer type is *not* touch
          val extentX = extendedTouchPadding.width * isTouch
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1256-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 1256
    endLine: 1267
    sha256: a15c567aeb32b77c52abe8c213d3c44e39242e4e8df1c94372f36ababc5c1afa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          val maxX = size.width + extentX

          // Set extentY to 0 when the pointer type is *not* touch
          val extentY = extendedTouchPadding.height * isTouch
          val maxY = size.height + extentY

          // Don't branch
          return (x < -extentX) or (x > maxX) or (y < -extentY) or (y > maxY)
      }

      private inline fun Boolean.toInt() = if (this) 1 else 0
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 141
    endLine: 175
    sha256: 888b5d193f62f279c666312bcae64a35dd65f314c57c66cf8ea0a7504628a130
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * `true` when the tertiary button (middle mouse button) is pressed or `false` when it isn't
       * pressed.
       */
      public expect val PointerButtons.isTertiaryPressed: Boolean

      /**
       * `true` when the back button (mouse back button) is pressed or `false` when it isn't pressed or
       * there is no mouse button assigned to "back."
       */
      public expect val PointerButtons.isBackPressed: Boolean

      /**
       * `true` when the forward button (mouse forward button) is pressed or `false` when it isn't pressed
       * or there is no button assigned to "forward."
       */
      public expect val PointerButtons.isForwardPressed: Boolean

      /**
       * Returns `true` when the button at [buttonIndex] is pressed and `false` when it isn't pressed.
       * This method can handle buttons that haven't been assigned a designated purpose like
       * [isPrimaryPressed] and [isSecondaryPressed].
       */
      public expect fun PointerButtons.isPressed(buttonIndex: Int): Boolean

      /** Returns `true` if any button is pressed or `false` if all buttons are released. */
      public expect val PointerButtons.areAnyPressed: Boolean

      /**
       * Returns the index of first button pressed as used in [isPressed] or `-1` if no button is pressed.
       */
      public expect fun PointerButtons.indexOfFirstPressed(): Int

      /**
       * Returns the index of last button pressed as used in [isPressed] or `-1` if no button is pressed.
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 176
    endLine: 210
    sha256: 0028f9935c9e9c57e972455838cbeed11d548f279a5b9556d33b78e638bcd5ca
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      public expect fun PointerButtons.indexOfLastPressed(): Int

      /**
       * Contains the state of modifier keys, such as Shift, Control, and Alt, as well as the state of the
       * lock keys, such as Caps Lock and Num Lock.
       */
      @kotlin.jvm.JvmInline public value class PointerKeyboardModifiers(internal val packedValue: Int = 0)

      /** `true` when the Control key is pressed. */
      public expect val PointerKeyboardModifiers.isCtrlPressed: Boolean

      /**
       * `true` when the Meta key is pressed. This is commonly associated with the Windows or Command key
       * on some keyboards.
       */
      public expect val PointerKeyboardModifiers.isMetaPressed: Boolean

      /**
       * `true` when the Alt key is pressed. This is commonly associated with the Option key on some
       * keyboards.
       */
      public expect val PointerKeyboardModifiers.isAltPressed: Boolean

      /** `true` when the AltGraph key is pressed. */
      public expect val PointerKeyboardModifiers.isAltGraphPressed: Boolean

      /** `true` when the Sym key is pressed. */
      public expect val PointerKeyboardModifiers.isSymPressed: Boolean

      /** `true` when the Shift key is pressed. */
      public expect val PointerKeyboardModifiers.isShiftPressed: Boolean

      /** `true` when the Function key is pressed. */
      public expect val PointerKeyboardModifiers.isFunctionPressed: Boolean
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 211
    endLine: 245
    sha256: 84842f074b654c4099414d637aa850198f3efe31702beafd4e1f89bb8f8a9d5d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /** `true` when the keyboard's Caps Lock is on. */
      public expect val PointerKeyboardModifiers.isCapsLockOn: Boolean

      /** `true` when the keyboard's Scroll Lock is on. */
      public expect val PointerKeyboardModifiers.isScrollLockOn: Boolean

      /** `true` when the keyboard's Num Lock is on. */
      public expect val PointerKeyboardModifiers.isNumLockOn: Boolean

      /** The device type that produces a [PointerInputChange], such as a mouse or stylus. */
      @kotlin.jvm.JvmInline
      public value class PointerType private constructor(private val value: Int) {

          public override fun toString(): String =
              when (value) {
                  1 -> "Touch"
                  2 -> "Mouse"
                  3 -> "Stylus"
                  4 -> "Eraser"
                  else -> "Unknown"
              }

          public companion object {
              /** An unknown device type or the device type isn't relevant. */
              public val Unknown: PointerType
                  get() = PointerType(0)

              /** Touch (finger) input. */
              public val Touch: PointerType
                  get() = PointerType(1)

              /** A mouse pointer. */
              public val Mouse: PointerType
                  get() = PointerType(2)
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 246
    endLine: 280
    sha256: aa8d6a241e7317f003694423e01ebeb61edb8bbb778debc5f70d012b1ce6806c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              /** A stylus. */
              public val Stylus: PointerType
                  get() = PointerType(3)

              /** An eraser or an inverted stylus. */
              public val Eraser: PointerType
                  get() = PointerType(4)
          }
      }

      /** Indicates the primary reason that the [PointerEvent] was sent. */
      @kotlin.jvm.JvmInline
      public value class PointerEventType private constructor(internal val value: Int) {
          public companion object {
              /** An unknown reason for the event. */
              public val Unknown: PointerEventType
                  get() = PointerEventType(0)

              /** A button on the device was pressed or a new pointer was detected. */
              public val Press: PointerEventType
                  get() = PointerEventType(1)

              /** A button on the device was released or a pointer was raised. */
              public val Release: PointerEventType
                  get() = PointerEventType(2)

              /** The cursor or one or more touch pointers was moved. */
              public val Move: PointerEventType
                  get() = PointerEventType(3)

              /**
               * The cursor has entered the input region. This will only be sent after the cursor is
               * hovering when in the input region.
               *
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 281
    endLine: 315
    sha256: 4991f32cf3ac37b2cbbc8cba970dd8634a23224e83f16cb4215f4213cee65e53
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * For example, the user's cursor is outside the input region and presses the button prior
               * to entering the input region. The [Enter] event will be sent when the button is released
               * inside the input region.
               */
              public val Enter: PointerEventType
                  get() = PointerEventType(4)

              /**
               * A cursor device or elevated stylus exited the input region. This will only follow an
               * [Enter] event, so if a cursor with the button pressed enters and exits region, neither
               * [Enter] nor [Exit] will be sent for the input region. However, if a cursor enters the
               * input region, then a button is pressed, then the cursor exits and reenters, [Enter],
               * [Exit], and [Enter] will be received.
               */
              public val Exit: PointerEventType
                  get() = PointerEventType(5)

              /**
               * A scroll event was sent. This can happen, for example, due to a mouse scroll wheel. This
               * event indicates that the [PointerInputChange.scrollDelta]'s [Offset] is non-zero.
               */
              public val Scroll: PointerEventType
                  get() = PointerEventType(6)

              /**
               * A scale started. This can happen, for example, due to a trackpad gesture recognized by
               * the platform. Such a gesture will start with an event of [ScaleStart], followed by some
               * number of [ScaleChange]s, and finally a [ScaleEnd].
               */
              public val ScaleStart: PointerEventType
                  get() = PointerEventType(7)

              /**
               * An intermediate scale move. This can happen, for example, due to a trackpad gesture
               * recognized by the platform. This event indicates that the
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 316
    endLine: 350
    sha256: da4c9e1c8074a0af3b9d3ca4dfa25c586a8ca6b433c9b155a438a5dceb4b7d81
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * [PointerInputChange.scaleFactor]'s [Offset] may be different from 1.
               */
              public val ScaleChange: PointerEventType
                  get() = PointerEventType(8)

              /**
               * A scale ended. This can happen, for example, due to a trackpad gesture recognized by the
               * platform.
               */
              public val ScaleEnd: PointerEventType
                  get() = PointerEventType(9)

              /**
               * A pan started. This can happen, for example, due to a trackpad gesture recognized by the
               * platform. Such a gesture will start with an event type of [PanStart], followed by some
               * number of [PanMove]s, and finally a [PanEnd]
               */
              public val PanStart: PointerEventType
                  get() = PointerEventType(10)

              /**
               * An intermediate pan move. This can happen, for example, due to a trackpad gesture
               * recognized by the platform. This event indicates that the
               * [PointerInputChange.panOffset]'s [Offset] may be non-zero.
               */
              public val PanMove: PointerEventType
                  get() = PointerEventType(11)

              /** A pan ended. This can happen, for example, due to a trackpad gesture. */
              public val PanEnd: PointerEventType
                  get() = PointerEventType(12)
          }

          public override fun toString(): String =
              when (this) {
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 351
    endLine: 385
    sha256: 22f2e8d012562663f8ab8b8f4d9c4581e14e6a2675bb5028bbbc7b888e2a4ca9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  Press -> "Press"
                  Release -> "Release"
                  Move -> "Move"
                  Enter -> "Enter"
                  Exit -> "Exit"
                  Scroll -> "Scroll"
                  ScaleStart -> "ScaleStart"
                  ScaleChange -> "ScaleChange"
                  ScaleEnd -> "ScaleFinish"
                  PanStart -> "PanStart"
                  PanMove -> "Pan"
                  PanEnd -> "PanEnd"
                  else -> "Unknown"
              }
      }

      /**
       * Describes a change that has occurred for a particular pointer, as well as how much of the change
       * has been consumed (meaning, used by a node in the UI).
       *
       * The [position] represents the position of the pointer relative to the element that this
       * [PointerInputChange] is being dispatched to.
       *
       * Note 1: A [PointerEvent]'s [PointerEventType] is the cause of an event and the associated
       * [PointerInputChange]'s properties reflecting that. Most of those are exclusive, in other words, a
       * Press/Release [PointerEventType] will not cause a scrollDelta change and a Scroll
       * [PointerEventType] will not cause a pressed or previousPressed change. However, either a a Scroll
       * or a Press/Release may contain a position change in its [PointerInputChange]s. (You can imagine
       * one finger moving while another is lifted up.)
       *
       * Examples of [PointerEventType] and the associated [PointerInputChange] property changes:
       * - Press -> press will change (position may change) but scroll delta will not.
       * - Release -> press will change (position may change) but scroll delta will not.
       * - Move -> position will change but press and scroll delta will not.
       * - Scroll -> scroll delta will change (position may change) but press will not.
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 36
    endLine: 70
    sha256: ca0e48341d700f9ed7cd5a5ed678aa41c71ee2a16c71071a09bbadf2cfc01a79
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      /**
       * A PointerInputFilter represents a single entity that receives [PointerInputChange]s), interprets
       * them, and consumes the aspects of the changes that it is react to such that other
       * PointerInputFilters don't also react to them.
       */
      public abstract class PointerInputFilter {

          /**
           * Invoked when pointers that previously hit this [PointerInputFilter] have changed. It is
           * expected that any [PointerInputChange]s that are used during this event and should not be
           * considered valid to be used in other filters should be marked as consumed by calling
           * [PointerInputChange.consume].
           *
           * @param pointerEvent The list of [PointerInputChange]s with positions relative to this
           *   [PointerInputFilter].
           * @param pass The [PointerEventPass] in which this function is being called.
           * @param bounds The width and height associated with this [PointerInputFilter].
           * @see PointerInputChange
           * @see PointerEventPass
           */
          public abstract fun onPointerEvent(
              pointerEvent: PointerEvent,
              pass: PointerEventPass,
              bounds: IntSize,
          )

          /**
           * Invoked to notify the handler that no more calls to [PointerInputFilter] will be made, until
           * at least new pointers exist. This can occur for a few reasons:
           * 1. Android dispatches ACTION_CANCEL to Compose.
           * 2. This [PointerInputFilter] is no longer associated with a LayoutNode.
           * 3. This [PointerInputFilter]'s associated LayoutNode is no longer in the composition tree.
           */
          public abstract fun onCancel()
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 386
    endLine: 415
    sha256: 3a6c94f6f089e8c7b729ab7fbaee3228a731e72cc6fe081f84d5ff5401567745
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * Note 2: The [position] values can be outside the actual bounds of the element itself meaning the
       * numbers can be negative or larger than the element bounds.
       *
       * The [previousPosition] represents the position of the pointer offset to the current position of
       * the pointer relative to the screen.
       *
       * This means that [position] and [previousPosition] can always be used to understand how much a
       * pointer has moved relative to an element, even if that element is moving along with the changes
       * to the pointer. For example, if a pointer touches a 1x1 pixel box in the middle, [position] will
       * report a position of (0, 0) when dispatched to it. If the next event moves x position 5 pixels,
       * [position] will report (5, 0) and [previousPosition] will report (0, 0). If the box moves all 5
       * pixels, and the next event represents the pointer moving along the x axis for 5 more pixels,
       * [position] will again report (5, 0) and [previousPosition] will report (0, 0).
       *
       * @param id The unique id of the pointer associated with this [PointerInputChange].
       * @param uptimeMillis The time of the current pointer event, in milliseconds. The start (`0`) time
       *   is platform-dependent
       * @param position The [Offset] of the current pointer event, relative to the containing element
       *   (values can be negative or larger than the element bounds).
       * @param pressed `true` if the pointer event is considered "pressed." For example, finger touching
       *   the screen or a mouse button is pressed [pressed] would be `true`.
       * @param pressure The pressure of the of the pointer event
       * @param previousUptimeMillis The [uptimeMillis] of the previous pointer event
       * @param previousPosition The [Offset] of the previous pointer event, offset to the [position] and
       *   relative to the containing element.
       * @param previousPressed `true` if the pointer event was considered "pressed." For example , if a
       *   finger was touching the screen or a mouse button was pressed, [previousPressed] would be
       *   `true`.
       * @param isInitiallyConsumed whether the change was consumed from the start or not. This value can
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-416-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 416
    endLine: 450
    sha256: 50dad7e9ea0a3bee447e3ae8ac607b792a34d8bd8f5438fc4e463730a0479cb1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   change over time as change is propagated through the pointer handlers. To query the actual
       *   status of the change use [isConsumed]
       * @param type The device type that produced the event, such as [mouse][PointerType.Mouse], or
       *   [touch][PointerType.Touch].
       * @param scrollDelta The change in scroll position along the horizontal and vertical axes. Note
       *   that this value is platform-dependent and is not normalized to pixel coordinates:
       *     - **Desktop & Android**: Measured in platform-specific mouse wheel tick units.
       *     - **Web**: Raw delta values directly from the browser's `WheelEvent`.
       *     - **iOS**: Native scroll gesture delta.
       *
       *   Also consider handling [panOffset], which represents trackpad scroll gestures.
       *
       * @param scaleFactor A multiplicative scale factor indicating the amount of scale to perform as
       *   part of this pointer input change. A value of `1f` indicates no scale, a value less than `1f`
       *   indicates a scale down, commonly causing a zoom out, and a value greater than `1f` indicates a
       *   scale up, commonly causing a zoom in.
       * @param panOffset An [Offset] in pixel coordinates indicating an amount of panning. Also consider
       *   handling [scrollDelta], which represents a similar action from mouse wheels.
       */
      @Immutable
      public class PointerInputChange(
          public val id: PointerId,
          public val uptimeMillis: Long,
          public val position: Offset,
          public val pressed: Boolean,
          public val pressure: Float,
          public val previousUptimeMillis: Long,
          public val previousPosition: Offset,
          public val previousPressed: Boolean,
          isInitiallyConsumed: Boolean,
          public val type: PointerType = PointerType.Touch,
          public val scrollDelta: Offset = Offset.Zero,
          public val scaleFactor: Float = 1f,
          public val panOffset: Offset = Offset.Zero,
      ) {
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-451-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 451
    endLine: 485
    sha256: a4ebe1c8e1f5673cbf742329671aee016dbb026eac7e6a8d822d6e39610ef62f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public constructor(
              id: PointerId,
              uptimeMillis: Long,
              position: Offset,
              pressed: Boolean,
              previousUptimeMillis: Long,
              previousPosition: Offset,
              previousPressed: Boolean,
              isInitiallyConsumed: Boolean,
              type: PointerType = PointerType.Touch,
              scrollDelta: Offset = Offset.Zero,
              scaleFactor: Float = 1f,
              panOffset: Offset = Offset.Zero,
          ) : this(
              id = id,
              uptimeMillis = uptimeMillis,
              position = position,
              pressed = pressed,
              pressure = 1.0f,
              previousUptimeMillis = previousUptimeMillis,
              previousPosition = previousPosition,
              previousPressed = previousPressed,
              isInitiallyConsumed = isInitiallyConsumed,
              type = type,
              scrollDelta = scrollDelta,
              scaleFactor = scaleFactor,
              panOffset = panOffset,
          )

          @Deprecated(message = "Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
          public constructor(
              id: PointerId,
              uptimeMillis: Long,
              position: Offset,
              pressed: Boolean,
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-486-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 486
    endLine: 520
    sha256: 0ad206e37a27a85376209cff790f5b432a805698ad84f5767e0447562dae60c8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              pressure: Float,
              previousUptimeMillis: Long,
              previousPosition: Offset,
              previousPressed: Boolean,
              isInitiallyConsumed: Boolean,
              type: PointerType = PointerType.Touch,
              scrollDelta: Offset = Offset.Zero,
          ) : this(
              id = id,
              uptimeMillis = uptimeMillis,
              position = position,
              pressed = pressed,
              pressure = pressure,
              previousUptimeMillis = previousUptimeMillis,
              previousPosition = previousPosition,
              previousPressed = previousPressed,
              isInitiallyConsumed = isInitiallyConsumed,
              type = type,
              scrollDelta = scrollDelta,
          )

          @Deprecated(message = "Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
          public constructor(
              id: PointerId,
              uptimeMillis: Long,
              position: Offset,
              pressed: Boolean,
              previousUptimeMillis: Long,
              previousPosition: Offset,
              previousPressed: Boolean,
              isInitiallyConsumed: Boolean,
              type: PointerType = PointerType.Touch,
              scrollDelta: Offset = Offset.Zero,
          ) : this(
              id = id,
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-521-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 521
    endLine: 555
    sha256: b3666bf79f0be5e442f68a10495e7de7e02d38fc69a517163b6eb5e55664704a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              uptimeMillis = uptimeMillis,
              position = position,
              pressed = pressed,
              previousUptimeMillis = previousUptimeMillis,
              previousPosition = previousPosition,
              previousPressed = previousPressed,
              isInitiallyConsumed = isInitiallyConsumed,
              type = type,
              scrollDelta = scrollDelta,
          )

          @Deprecated(
              level = DeprecationLevel.HIDDEN,
              replaceWith =
                  ReplaceWith(
                      "this(id, uptimeMillis, position, pressed, previousUptimeMillis," +
                          " previousPosition, previousPressed," +
                          " consumed.downChange || consumed.positionChange, type, Offset.Zero)"
                  ),
              message = "Use another constructor with `scrollDelta` and without `ConsumedData` instead",
          )
          @Suppress("DEPRECATION")
          public constructor(
              id: PointerId,
              uptimeMillis: Long,
              position: Offset,
              pressed: Boolean,
              previousUptimeMillis: Long,
              previousPosition: Offset,
              previousPressed: Boolean,
              consumed: ConsumedData,
              type: PointerType = PointerType.Touch,
          ) : this(
              id,
              uptimeMillis,
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-556-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 556
    endLine: 590
    sha256: aabc1eab2f6137f7cc23b2b4ae0655427418716a875d255c7df905281ec1534e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              position,
              pressed,
              pressure = 1.0f,
              previousUptimeMillis,
              previousPosition,
              previousPressed,
              consumed.downChange || consumed.positionChange,
              type,
              Offset.Zero,
          )

          internal constructor(
              id: PointerId,
              uptimeMillis: Long,
              position: Offset,
              pressed: Boolean,
              pressure: Float,
              previousUptimeMillis: Long,
              previousPosition: Offset,
              previousPressed: Boolean,
              isInitiallyConsumed: Boolean,
              type: PointerType,
              historical: List<HistoricalChange>,
              scrollDelta: Offset,
              scaleFactor: Float,
              panOffset: Offset,
              originalEventPosition: Offset,
          ) : this(
              id = id,
              uptimeMillis = uptimeMillis,
              position = position,
              pressed = pressed,
              pressure = pressure,
              previousUptimeMillis = previousUptimeMillis,
              previousPosition = previousPosition,
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-591-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 591
    endLine: 625
    sha256: 41fb1ac08fe24bf208896c2ef5870fa5e4efeed9818ec8c2b12eed76c9b1ef39
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              previousPressed = previousPressed,
              isInitiallyConsumed = isInitiallyConsumed,
              type = type,
              scrollDelta = scrollDelta,
              scaleFactor = scaleFactor,
              panOffset = panOffset,
          ) {
              _historical = historical
              this.originalEventPosition = originalEventPosition
          }

          /**
           * Optional high-frequency pointer moves in between the last two dispatched events. Can be used
           * for extra accuracy when input rate exceeds framerate.
           */
          // With these experimental annotations, the API can be either cleanly removed or
          // stabilized. It doesn't appear in current.txt; and in experimental_current.txt,
          // it has the same effect as a primary constructor val.
          public val historical: List<HistoricalChange>
              get() = _historical ?: listOf()

          private var _historical: List<HistoricalChange>? = null

          internal var originalEventPosition: Offset = Offset.Zero

          /**
           * Indicates whether the change was consumed or not. Note that the change must be consumed in
           * full as there's no partial consumption system provided.
           */
          public val isConsumed: Boolean
              get() = consumedDelegate?.isConsumed ?: (downChange || positionChange)

          internal var downChange = isInitiallyConsumed
          internal var positionChange = isInitiallyConsumed
          // Used by shallow copies (see [copy]) to share the consumed state across pointer input changes
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-626-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 626
    endLine: 660
    sha256: 34460330798240ec81a447552bf908da1835fd6261f07ca3e1f55c4fe448bc60
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          internal var consumedDelegate: PointerInputChange? = null

          /**
           * Consume change event, claiming all the corresponding change info to the caller. This is
           * usually needed when, button, when being clicked, consumed the "up" event so no other parents
           * of this button could consume this "up" again.
           *
           * "Consumption" is just an indication of the claim and each pointer input handler
           * implementation must manually check this flag to respect it.
           */
          public fun consume() {
              if (consumedDelegate == null) {
                  downChange = true
                  positionChange = true
              } else {
                  consumedDelegate?.consume()
              }
          }

          @Suppress("DEPRECATION") private var _consumed: ConsumedData? = null

          @Deprecated("use isConsumed and consume() pair of methods instead")
          @Suppress("DEPRECATION")
          public val consumed: ConsumedData
              get() {
                  if (_consumed == null) {
                      _consumed = ConsumedData(this)
                  }
                  return _consumed!!
              }

          @Deprecated(
              level = DeprecationLevel.HIDDEN,
              replaceWith =
                  ReplaceWith(
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-661-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 661
    endLine: 695
    sha256: e7b5db46ae0e86128812ea9148d609db9bf4967a05a33a6f7f6d23e7000cff7f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      "copy(id,currentTime, currentPosition, currentPressed, previousTime," +
                          "previousPosition, previousPressed, consumed, type, this.scrollDelta)"
                  ),
              message = "Use another copy() method with scrollDelta parameter instead",
          )
          @Suppress("DEPRECATION")
          public fun copy(
              id: PointerId = this.id,
              currentTime: Long = this.uptimeMillis,
              currentPosition: Offset = this.position,
              currentPressed: Boolean = this.pressed,
              previousTime: Long = this.previousUptimeMillis,
              previousPosition: Offset = this.previousPosition,
              previousPressed: Boolean = this.previousPressed,
              consumed: ConsumedData = this.consumed,
              type: PointerType = this.type,
          ): PointerInputChange =
              PointerInputChange(
                      id = id,
                      uptimeMillis = currentTime,
                      position = currentPosition,
                      pressed = currentPressed,
                      pressure = this.pressure,
                      previousUptimeMillis = previousTime,
                      previousPosition = previousPosition,
                      previousPressed = previousPressed,
                      isInitiallyConsumed = consumed.downChange || consumed.positionChange,
                      type = type,
                      historical = this.historical,
                      scrollDelta = this.scrollDelta,
                      scaleFactor = this.scaleFactor,
                      panOffset = this.panOffset,
                      originalEventPosition = this.originalEventPosition,
                  )
                  .also {
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-696-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 696
    endLine: 730
    sha256: a4959bd9933f5659a228b8b5a886604e342d2fe5196bbfb2739c8069ff8b728b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      // This method makes a deep copy, copy the consumed state directly without setting
                      // the consumed delegate, which is used for shallow copies.
                      it.positionChange = this.positionChange
                      it.downChange = this.downChange
                  }

          /**
           * Make a shallow copy of the [PointerInputChange]
           *
           * **NOTE:** Due to the need of the inner contract of the [PointerInputChange], this method
           * performs a shallow copy of the [PointerInputChange]. Any [consume] call between any of the
           * copies will consume any other copy automatically. Therefore, copy with the new [isConsumed]
           * is not possible. Consider creating a new [PointerInputChange]
           */
          public fun copy(
              id: PointerId = this.id,
              currentTime: Long = this.uptimeMillis,
              currentPosition: Offset = this.position,
              currentPressed: Boolean = this.pressed,
              previousTime: Long = this.previousUptimeMillis,
              previousPosition: Offset = this.previousPosition,
              previousPressed: Boolean = this.previousPressed,
              type: PointerType = this.type,
              scrollDelta: Offset = this.scrollDelta,
          ): PointerInputChange =
              copy(
                      id = id,
                      currentTime = currentTime,
                      currentPosition = currentPosition,
                      currentPressed = currentPressed,
                      pressure = this.pressure,
                      previousTime = previousTime,
                      previousPosition = previousPosition,
                      previousPressed = previousPressed,
                      type = type,
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 71
    endLine: 105
    sha256: 560ec1021b4699c380df1f047f4c77fd0213f0558e193e127fe1c6985acb75e9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          internal var layoutCoordinates: LayoutCoordinates? = null

          /** The layout size assigned to this [PointerInputFilter]. */
          public val size: IntSize
              get() = layoutCoordinates?.size ?: IntSize.Zero

          internal var isAttached: Boolean = false

          /**
           * Intercept pointer input that children receive even if the pointer is out of bounds.
           *
           * If `true`, and a child has been moved out of this layout and receives an event, this will
           * receive that event. If `false`, a child receiving pointer input outside of the bounds of this
           * layout will not trigger any events in this.
           */
          public open val interceptOutOfBoundsChildEvents: Boolean
              get() = false

          /**
           * If `false`, then this [PointerInputFilter] will not allow siblings under it to respond to
           * events. If `true`, this will have the first chance to respond and the next sibling under will
           * then get a chance to respond as well. This trigger acts at the Layout level, so if any
           * [PointerInputFilter]s on a Layout has [shareWithSiblings] set to `true` then the Layout will
           * share with siblings.
           *
           * Setting this true everywhere or high in the UI tree can negatively impact performance.
           * Therefore, use it sparingly and only at the nearest shared parent of the two target UI
           * elements.
           */
          public open val shareWithSiblings: Boolean
              get() = false
      }

      /** Describes a pointer input change event that has occurred at a particular point in time. */
      public expect class PointerEvent
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-731-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 731
    endLine: 765
    sha256: bfacd87596be36f042003eb954a0ea76278c30dfdea7feebdd9f909701743992
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      historical = this.historical,
                      scrollDelta = scrollDelta,
                  )
                  .also {
                      // This method makes a shallow copy, copy the delegate to share the consumed state
                      // across instances. The local consumed state is irrelevant since we won't look at
                      // it, meaning there's no need to copy positionChange and downChange.
                      it.consumedDelegate = this.consumedDelegate ?: this
                  }

          @Suppress("DEPRECATION")
          @Deprecated(
              "Partial consumption has been deprecated. Use copy() instead without `consumed` " +
                  "parameter to create a shallow copy or a constructor to create a new " +
                  "PointerInputChange",
              replaceWith =
                  ReplaceWith(
                      "copy(id, currentTime, currentPosition, currentPressed, previousTime, " +
                          "previousPosition, previousPressed, type, scrollDelta)"
                  ),
          )
          public fun copy(
              id: PointerId = this.id,
              currentTime: Long = this.uptimeMillis,
              currentPosition: Offset = this.position,
              currentPressed: Boolean = this.pressed,
              previousTime: Long = this.previousUptimeMillis,
              previousPosition: Offset = this.previousPosition,
              previousPressed: Boolean = this.previousPressed,
              consumed: ConsumedData,
              type: PointerType = this.type,
              scrollDelta: Offset = this.scrollDelta,
          ): PointerInputChange =
              PointerInputChange(
                      id = id,
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-766-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 766
    endLine: 800
    sha256: b88263208e286381e8d301404020e83a6ba8b138a7c3bf3fcbf281e13ff5d9e7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      uptimeMillis = currentTime,
                      position = currentPosition,
                      pressed = currentPressed,
                      pressure = this.pressure,
                      previousUptimeMillis = previousTime,
                      previousPosition = previousPosition,
                      previousPressed = previousPressed,
                      isInitiallyConsumed = consumed.downChange || consumed.positionChange,
                      type = type,
                      historical = this.historical,
                      scrollDelta = scrollDelta,
                      scaleFactor = this.scaleFactor,
                      panOffset = this.panOffset,
                      originalEventPosition = this.originalEventPosition,
                  )
                  .also {
                      // This method makes a deep copy, copy the consumed state directly without setting
                      // the consumed delegate, which is used for shallow copies.
                      it.positionChange = this.positionChange
                      it.downChange = this.downChange
                  }

          /**
           * Make a shallow copy of the [PointerInputChange]
           *
           * **NOTE:** Due to the need of the inner contract of the [PointerInputChange], this method
           * performs a shallow copy of the [PointerInputChange]. Any [consume] call between any of the
           * copies will consume any other copy automatically. Therefore, copy with the new [isConsumed]
           * is not possible. Consider creating a new [PointerInputChange].
           */
          public fun copy(
              id: PointerId = this.id,
              currentTime: Long = this.uptimeMillis,
              currentPosition: Offset = this.position,
              currentPressed: Boolean = this.pressed,
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-801-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 801
    endLine: 835
    sha256: 8451b3176bab6901e9220ee79aa44e6ef4d7a8efd7a72675eb5f9f13be113576
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              pressure: Float = this.pressure,
              previousTime: Long = this.previousUptimeMillis,
              previousPosition: Offset = this.previousPosition,
              previousPressed: Boolean = this.previousPressed,
              type: PointerType = this.type,
              scrollDelta: Offset = this.scrollDelta,
          ): PointerInputChange =
              PointerInputChange(
                      id = id,
                      uptimeMillis = currentTime,
                      position = currentPosition,
                      pressed = currentPressed,
                      pressure = pressure,
                      previousUptimeMillis = previousTime,
                      previousPosition = previousPosition,
                      previousPressed = previousPressed,
                      isInitiallyConsumed = false, // doesn't matter, we will copy the consumed booleans
                      type = type,
                      historical = this.historical,
                      scrollDelta = scrollDelta,
                      scaleFactor = this.scaleFactor,
                      panOffset = this.panOffset,
                      originalEventPosition = this.originalEventPosition,
                  )
                  .also {
                      // This method makes a shallow copy, copy the delegate to share the consumed state
                      // across instances. The local consumed state is irrelevant since we won't look at
                      // it, meaning there's no need to copy positionChange and downChange.
                      it.consumedDelegate = this.consumedDelegate ?: this
                  }

          /**
           * Make a shallow copy of the [PointerInputChange]
           *
           * **NOTE:** Due to the need of the inner contract of the [PointerInputChange], this method
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-836-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 836
    endLine: 870
    sha256: 046345f22f76374ec37b97483835d519e2de259e77c55dab83f4c1c53a69e244
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * performs a shallow copy of the [PointerInputChange]. Any [consume] call between any of the
           * copies will consume any other copy automatically. Therefore, copy with the new [isConsumed]
           * is not possible. Consider creating a new [PointerInputChange].
           */
          @ExperimentalComposeUiApi
          public fun copy(
              id: PointerId = this.id,
              currentTime: Long = this.uptimeMillis,
              currentPosition: Offset = this.position,
              currentPressed: Boolean = this.pressed,
              previousTime: Long = this.previousUptimeMillis,
              previousPosition: Offset = this.previousPosition,
              previousPressed: Boolean = this.previousPressed,
              type: PointerType = this.type,
              historical: List<HistoricalChange>,
              scrollDelta: Offset = this.scrollDelta,
          ): PointerInputChange =
              copy(
                      id = id,
                      currentTime = currentTime,
                      currentPosition = currentPosition,
                      currentPressed = currentPressed,
                      pressure = this.pressure,
                      previousTime = previousTime,
                      previousPosition = previousPosition,
                      previousPressed = previousPressed,
                      type = type,
                      historical = historical,
                      scrollDelta = scrollDelta,
                  )
                  .also {
                      // This method makes a shallow copy, copy the delegate to share the consumed state
                      // across instances. The local consumed state is irrelevant since we won't look at
                      // it, meaning there's no need to copy positionChange and downChange.
                      it.consumedDelegate = this.consumedDelegate ?: this
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-871-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 871
    endLine: 905
    sha256: 16d46ede98107525c7050e7a5bff17d5954a0f1f88f3a4b89aba1897957fe90d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  }

          /**
           * Make a shallow copy of the [PointerInputChange]
           *
           * **NOTE:** Due to the need of the inner contract of the [PointerInputChange], this method
           * performs a shallow copy of the [PointerInputChange]. Any [consume] call between any of the
           * copies will consume any other copy automatically. Therefore, copy with the new [isConsumed]
           * is not possible. Consider creating a new [PointerInputChange].
           */
          public fun copy(
              id: PointerId = this.id,
              currentTime: Long = this.uptimeMillis,
              currentPosition: Offset = this.position,
              currentPressed: Boolean = this.pressed,
              pressure: Float = this.pressure,
              previousTime: Long = this.previousUptimeMillis,
              previousPosition: Offset = this.previousPosition,
              previousPressed: Boolean = this.previousPressed,
              type: PointerType = this.type,
              historical: List<HistoricalChange> = this.historical,
              scrollDelta: Offset = this.scrollDelta,
          ): PointerInputChange =
              PointerInputChange(
                      id = id,
                      uptimeMillis = currentTime,
                      position = currentPosition,
                      pressed = currentPressed,
                      pressure = pressure,
                      previousUptimeMillis = previousTime,
                      previousPosition = previousPosition,
                      previousPressed = previousPressed,
                      isInitiallyConsumed = false, // doesn't matter, we will copy the consumed booleans
                      type = type,
                      historical = historical,
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-906-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 906
    endLine: 940
    sha256: 1383c14436b520037475d1bfbbbd1b456a9a83af10146cd523d8014d4ce247a9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      scrollDelta = scrollDelta,
                      scaleFactor = this.scaleFactor,
                      panOffset = this.panOffset,
                      originalEventPosition = this.originalEventPosition,
                  )
                  .also {
                      // This method makes a shallow copy, copy the delegate to share the consumed state
                      // across instances. The local consumed state is irrelevant since we won't look at
                      // it, meaning there's no need to copy positionChange and downChange.
                      it.consumedDelegate = this.consumedDelegate ?: this
                  }

          /**
           * Make a shallow copy of the [PointerInputChange]
           *
           * **NOTE:** Due to the need of the inner contract of the [PointerInputChange], this method
           * performs a shallow copy of the [PointerInputChange]. Any [consume] call between any of the
           * copies will consume any other copy automatically. Therefore, copy with the new [isConsumed]
           * is not possible. Consider creating a new [PointerInputChange].
           */
          public fun copy(
              id: PointerId = this.id,
              currentTime: Long = this.uptimeMillis,
              currentPosition: Offset = this.position,
              currentPressed: Boolean = this.pressed,
              pressure: Float = this.pressure,
              previousTime: Long = this.previousUptimeMillis,
              previousPosition: Offset = this.previousPosition,
              previousPressed: Boolean = this.previousPressed,
              type: PointerType = this.type,
              historical: List<HistoricalChange> = this.historical,
              scrollDelta: Offset = this.scrollDelta,
              scaleFactor: Float = this.scaleFactor,
              panOffset: Offset = this.panOffset,
          ): PointerInputChange =
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-941-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 941
    endLine: 975
    sha256: 81cb5204809b268fb84e8686fada6619a13f18ea1e32c379794237d5756944eb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              PointerInputChange(
                      id = id,
                      uptimeMillis = currentTime,
                      position = currentPosition,
                      pressed = currentPressed,
                      pressure = pressure,
                      previousUptimeMillis = previousTime,
                      previousPosition = previousPosition,
                      previousPressed = previousPressed,
                      isInitiallyConsumed = false, // doesn't matter, we will copy the consumed booleans
                      type = type,
                      historical = historical,
                      scrollDelta = scrollDelta,
                      scaleFactor = scaleFactor,
                      panOffset = panOffset,
                      originalEventPosition = this.originalEventPosition,
                  )
                  .also {
                      // This method makes a shallow copy, copy the delegate to share the consumed state
                      // across instances. The local consumed state is irrelevant since we won't look at
                      // it, meaning there's no need to copy positionChange and downChange.
                      it.consumedDelegate = this.consumedDelegate ?: this
                  }

          override fun toString(): String {
              return "PointerInputChange(id=$id, " +
                  "uptimeMillis=$uptimeMillis, " +
                  "position=$position, " +
                  "pressed=$pressed, " +
                  "pressure=$pressure, " +
                  "previousUptimeMillis=$previousUptimeMillis, " +
                  "previousPosition=$previousPosition, " +
                  "previousPressed=$previousPressed, " +
                  "isConsumed=$isConsumed, " +
                  "type=$type, " +
  - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-976-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt
    startLine: 976
    endLine: 1010
    sha256: 739dedc8891b0ee7c07f544f3ac3f2b4bd386a5f85f8f857e60f97e44bbcaeab
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  "historical=$historical, " +
                  "scrollDelta=$scrollDelta, " +
                  "scaleFactor=$scaleFactor, " +
                  "panOffset=$panOffset)"
          }
      }

      /**
       * Data structure for "historical" pointer moves.
       *
       * Optional high-frequency pointer moves in between the last two dispatched events: can be used for
       * extra accuracy when input rate exceeds framerate.
       *
       * @param uptimeMillis The time of the historical pointer event, in milliseconds. In between the
       *   current and previous pointer event times.
       * @param position The [Offset] of the historical pointer event, relative to the containing element.
       * @param scaleFactor A multiplicative scale factor indicating the amount of scale to perform as
       *   part of this pointer input change. A value of `1f` indicates no scale, a value less than `1f`
       *   indicates a scale down, commonly causing a zoom out, and a value greater than `1f` indicates a
       *   scale up, commonly causing a zoom in.
       * @param panOffset An [Offset] in pixel coordinates indicating an amount of scrolling.
       */
      @Immutable
      public class HistoricalChange(
          public val uptimeMillis: Long,
          public val position: Offset,
          public val scaleFactor: Float = 1f,
          public val panOffset: Offset = Offset.Zero,
      ) {
          internal var originalEventPosition: Offset = Offset.Zero
              private set

          @Deprecated(message = "Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
          public constructor(
              uptimeMillis: Long,
compose:
  id: live-androidx-ui-ui-ui-input-pointer-pointerevent
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.input.pointer
  sections:
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1–35)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputModifier
        - androidx.compose.ui.input.pointer.PointerInputFilter
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1011
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1011–1045)
      aliases:
        - androidx.compose.ui.input.pointer.HistoricalChange
        - androidx.compose.ui.input.pointer.PointerId
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1011-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1046
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1046–1080)
      aliases:
        - androidx.compose.ui.input.pointer.PointerEvent
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.ConsumedData
        - androidx.compose.ui.input.pointer.positionChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1046-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-106
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.input.pointer.PointerEvent
        - androidx.compose.ui.input.pointer.PointerButtons
        - androidx.compose.ui.input.pointer.isPrimaryPressed
        - androidx.compose.ui.input.pointer.isSecondaryPressed
        - androidx.compose.ui.input.pointer.PointerKeyboardModifiers
        - androidx.compose.ui.input.pointer.PointerEventType
        - androidx.compose.ui.input.pointer.PointerInputChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1081
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1081–1115)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.PointerEventPass
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1081-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1116
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1116–1150)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.changedToDown
        - androidx.compose.ui.input.pointer.changedToDownIgnoreConsumed
        - androidx.compose.ui.input.pointer.changedToUp
        - androidx.compose.ui.input.pointer.changedToUpIgnoreConsumed
        - androidx.compose.ui.input.pointer.positionChanged
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1116-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1151
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1151–1185)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.positionChangedIgnoreConsumed
        - androidx.compose.ui.input.pointer.positionChange
        - androidx.compose.ui.input.pointer.positionChangeIgnoreConsumed
        - androidx.compose.ui.input.pointer.positionChangeConsumed
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1151-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1186
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1186–1220)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.positionChange
        - androidx.compose.ui.input.pointer.anyChangeConsumed
        - androidx.compose.ui.input.pointer.consumeDownChange
        - androidx.compose.ui.input.pointer.consumePositionChange
        - androidx.compose.ui.input.pointer.consumeAllChanges
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1186-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1221
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1221–1255)
      aliases:
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.isOutOfBounds
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1221-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1256
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1256–1267)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1256-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-141
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.input.pointer.PointerButtons
        - androidx.compose.ui.input.pointer.isPrimaryPressed
        - androidx.compose.ui.input.pointer.isSecondaryPressed
        - androidx.compose.ui.input.pointer.isTertiaryPressed
        - androidx.compose.ui.input.pointer.isBackPressed
        - androidx.compose.ui.input.pointer.isForwardPressed
        - androidx.compose.ui.input.pointer.isPressed
        - androidx.compose.ui.input.pointer.areAnyPressed
        - androidx.compose.ui.input.pointer.indexOfFirstPressed
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-176
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.input.pointer.PointerButtons
        - androidx.compose.ui.input.pointer.indexOfLastPressed
        - androidx.compose.ui.input.pointer.PointerKeyboardModifiers
        - androidx.compose.ui.input.pointer.isCtrlPressed
        - androidx.compose.ui.input.pointer.isMetaPressed
        - androidx.compose.ui.input.pointer.isAltPressed
        - androidx.compose.ui.input.pointer.isAltGraphPressed
        - androidx.compose.ui.input.pointer.isSymPressed
        - androidx.compose.ui.input.pointer.isShiftPressed
        - androidx.compose.ui.input.pointer.isFunctionPressed
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-211
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.input.pointer.PointerKeyboardModifiers
        - androidx.compose.ui.input.pointer.isCapsLockOn
        - androidx.compose.ui.input.pointer.isScrollLockOn
        - androidx.compose.ui.input.pointer.isNumLockOn
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerInputChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-246
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.input.pointer.PointerEvent
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerEventType
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-281
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 281–315)
      aliases:
        - androidx.compose.ui.input.pointer.PointerEventType
        - androidx.compose.ui.input.pointer.PointerInputChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-316
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.input.pointer.PointerEventType
        - androidx.compose.ui.input.pointer.PointerInputChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-351
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 351–385)
      aliases:
        - androidx.compose.ui.input.pointer.PointerEvent
        - androidx.compose.ui.input.pointer.PointerEventType
        - androidx.compose.ui.input.pointer.PointerInputChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-36
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputFilter
        - androidx.compose.ui.input.pointer.PointerEvent
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.PointerEventPass
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-386
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 386–415)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-386-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-416
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 416–450)
      aliases:
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.PointerId
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-416-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-451
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 451–485)
      aliases:
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerId
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-451-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-486
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 486–520)
      aliases:
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerId
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-486-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-521
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 521–555)
      aliases:
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerId
        - androidx.compose.ui.input.pointer.ConsumedData
        - androidx.compose.ui.input.pointer.positionChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-521-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-556
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 556–590)
      aliases:
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.HistoricalChange
        - androidx.compose.ui.input.pointer.PointerId
        - androidx.compose.ui.input.pointer.positionChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-556-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-591
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 591–625)
      aliases:
        - androidx.compose.ui.input.pointer.HistoricalChange
        - androidx.compose.ui.input.pointer.positionChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-591-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-626
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 626–660)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.ConsumedData
        - androidx.compose.ui.input.pointer.positionChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-626-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-661
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 661–695)
      aliases:
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.PointerId
        - androidx.compose.ui.input.pointer.ConsumedData
        - androidx.compose.ui.input.pointer.positionChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-661-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-696
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 696–730)
      aliases:
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.PointerId
        - androidx.compose.ui.input.pointer.positionChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-696-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-71
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputFilter
        - androidx.compose.ui.input.pointer.PointerEvent
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-71-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-731
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 731–765)
      aliases:
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.PointerId
        - androidx.compose.ui.input.pointer.ConsumedData
        - androidx.compose.ui.input.pointer.positionChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-731-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-766
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 766–800)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.PointerId
        - androidx.compose.ui.input.pointer.positionChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-766-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-801
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 801–835)
      aliases:
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.positionChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-801-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-836
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 836–870)
      aliases:
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.HistoricalChange
        - androidx.compose.ui.input.pointer.PointerId
        - androidx.compose.ui.input.pointer.positionChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-836-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-871
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 871–905)
      aliases:
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.HistoricalChange
        - androidx.compose.ui.input.pointer.PointerId
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-871-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-906
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 906–940)
      aliases:
        - androidx.compose.ui.input.pointer.PointerType
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.HistoricalChange
        - androidx.compose.ui.input.pointer.PointerId
        - androidx.compose.ui.input.pointer.positionChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-906-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-941
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 941–975)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputChange
        - androidx.compose.ui.input.pointer.positionChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-941-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-976
      title: androidx.compose.ui.input.pointer PointerEvent.kt source (lines 976–1010)
      aliases:
        - androidx.compose.ui.input.pointer.HistoricalChange
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-976-source
      relatedIds: []
---

# androidx.compose.ui.input.pointer PointerEvent.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1–35)

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

@file:Suppress("NOTHING_TO_INLINE", "KotlinRedundantDiagnosticSuppress")

package androidx.compose.ui.input.pointer

import androidx.compose.runtime.Immutable
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.internal.JvmDefaultWithCompatibility
import androidx.compose.ui.layout.LayoutCoordinates
import androidx.compose.ui.unit.IntSize

/** A [Modifier.Element] that can interact with pointer input. */
@JvmDefaultWithCompatibility
public interface PointerInputModifier : Modifier.Element {
    public val pointerInputFilter: PointerInputFilter
}


Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1011–1045)

        position: Offset,
    ) : this(
        uptimeMillis = uptimeMillis,
        position = position,
        scaleFactor = 1f,
        panOffset = Offset.Zero,
    )

    internal constructor(
        uptimeMillis: Long,
        position: Offset,
        scaleFactor: Float,
        panOffset: Offset,
        originalEventPosition: Offset,
    ) : this(uptimeMillis, position, scaleFactor, panOffset) {
        this.originalEventPosition = originalEventPosition
    }

    public override fun toString(): String {
        return "HistoricalChange(uptimeMillis=$uptimeMillis, " +
            "position=$position, " +
            "scaleFactor=$scaleFactor, " +
            "panOffset=$panOffset)"
    }
}

/**
 * An ID for a given pointer.
 *
 * @param value The actual value of the id.
 */
@kotlin.jvm.JvmInline public value class PointerId(public val value: Long)

/**
 * Describes what aspects of a change has been consumed.

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1011-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1046–1080)

 *
 * @param positionChange True if a position change in this event has been consumed.
 * @param downChange True if a change to down or up has been consumed.
 */
@Deprecated("Use PointerInputChange.isConsumed and PointerInputChange.consume() instead")
public class ConsumedData(positionChange: Boolean = false, downChange: Boolean = false) {
    private var change: PointerInputChange? = null

    internal constructor(
        change: PointerInputChange
    ) : this(change.positionChange, change.downChange) {
        this.change = change
    }

    @Suppress("GetterSetterNames")
    @get:Suppress("GetterSetterNames")
    @Deprecated(
        "Partial consumption was deprecated. Use PointerEvent.isConsumed " +
            "and PointerEvent.consume() instead."
    )
    public var positionChange: Boolean = positionChange
        get() = change?.consumedDelegate?.positionChange ?: (change?.positionChange ?: field)
        set(value) {
            change?.consumedDelegate?.positionChange = value
            change?.positionChange = value
            field = value
        }

    @Suppress("GetterSetterNames")
    @get:Suppress("GetterSetterNames")
    @Deprecated(
        "Partial consumption was deprecated. Use PointerEvent.isConsumed " +
            "and PointerEvent.consume() instead."
    )
    public var downChange: Boolean = downChange

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1046-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 106–140)

internal constructor(
    changes: List<PointerInputChange>,
    internalPointerEvent: InternalPointerEvent?,
) {
    /** @param changes The changes. */
    public constructor(changes: List<PointerInputChange>)

    /** The changes. */
    public val changes: List<PointerInputChange>

    /** The state of buttons (e.g. mouse or stylus buttons) during this event. */
    public val buttons: PointerButtons

    /** The state of modifier keys during this event. */
    public val keyboardModifiers: PointerKeyboardModifiers

    /** The primary reason the [PointerEvent] was sent. */
    public var type: PointerEventType
        internal set
}

/** Contains the state of pointer buttons (e.g. mouse and stylus buttons). */
@kotlin.jvm.JvmInline public value class PointerButtons(internal val packedValue: Int = 0)

/**
 * `true` when the primary button (left mouse button) is pressed or `false` when it isn't pressed.
 */
public expect val PointerButtons.isPrimaryPressed: Boolean

/**
 * `true` when the secondary button (right mouse button) is pressed or `false` when it isn't
 * pressed.
 */
public expect val PointerButtons.isSecondaryPressed: Boolean


Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1081–1115)

        get() = change?.consumedDelegate?.downChange ?: (change?.downChange ?: field)
        set(value) {
            change?.consumedDelegate?.downChange = value
            change?.downChange = value
            field = value
        }
}

/**
 * The enumeration of passes where [PointerInputChange] traverses up and down the UI tree.
 *
 * PointerInputChanges traverse throw the hierarchy in the following passes:
 * 1. [Initial]: Down the tree from ancestor to descendant.
 * 2. [Main]: Up the tree from descendant to ancestor.
 * 3. [Final]: Down the tree from ancestor to descendant.
 *
 * These passes serve the following purposes:
 * 1. Initial: Allows ancestors to consume aspects of [PointerInputChange] before descendants. This
 *    is where, for example, a scroller may block buttons from getting tapped by other fingers once
 *    scrolling has started.
 * 2. Main: The primary pass where gesture filters should react to and consume aspects of
 *    [PointerInputChange]s. This is the primary path where descendants will interact with
 *    [PointerInputChange]s before parents. This allows for buttons to respond to a tap before a
 *    container of the bottom to respond to a tap.
 * 3. Final: This pass is where children can learn what aspects of [PointerInputChange]s were
 *    consumed by parents during the [Main] pass. For example, this is how a button determines that
 *    it should no longer respond to fingers lifting off of it because a parent scroller has
 *    consumed movement in a [PointerInputChange].
 */
public enum class PointerEventPass {
    Initial,
    Main,
    Final,
}


Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1081-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1116–1150)

/**
 * True if this [PointerInputChange] represents a pointer coming in contact with the screen and that
 * change has not been consumed.
 */
public fun PointerInputChange.changedToDown(): Boolean = !isConsumed && !previousPressed && pressed

/**
 * True if this [PointerInputChange] represents a pointer coming in contact with the screen, whether
 * or not that change has been consumed.
 */
public fun PointerInputChange.changedToDownIgnoreConsumed(): Boolean = !previousPressed && pressed

/**
 * True if this [PointerInputChange] represents a pointer breaking contact with the screen and that
 * change has not been consumed.
 */
public fun PointerInputChange.changedToUp(): Boolean = !isConsumed && previousPressed && !pressed

/**
 * True if this [PointerInputChange] represents a pointer breaking contact with the screen, whether
 * or not that change has been consumed.
 */
public fun PointerInputChange.changedToUpIgnoreConsumed(): Boolean = previousPressed && !pressed

/**
 * True if this [PointerInputChange] represents a pointer moving on the screen and some of that
 * movement has not been consumed.
 */
public fun PointerInputChange.positionChanged(): Boolean =
    this.positionChangeInternal(false) != Offset.Zero

/**
 * True if this [PointerInputChange] represents a pointer moving on the screen ignoring how much of
 * that movement may have been consumed.
 */

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1116-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1151–1185)

public fun PointerInputChange.positionChangedIgnoreConsumed(): Boolean =
    this.positionChangeInternal(true) != Offset.Zero

/**
 * The distance that the pointer has moved on the screen minus any distance that has been consumed.
 */
public fun PointerInputChange.positionChange(): Offset = this.positionChangeInternal(false)

/**
 * The distance that the pointer has moved on the screen, ignoring the fact that it might have been
 * consumed.
 */
public fun PointerInputChange.positionChangeIgnoreConsumed(): Offset =
    this.positionChangeInternal(true)

private fun PointerInputChange.positionChangeInternal(ignoreConsumed: Boolean = false): Offset {
    val previousPosition = previousPosition
    val currentPosition = position

    val offset = currentPosition - previousPosition

    return if (!ignoreConsumed && isConsumed) Offset.Zero else offset
}

/** True if this [PointerInputChange]'s movement has been consumed. */
@Deprecated(
    "Partial consumption has been deprecated. Use isConsumed instead",
    replaceWith = ReplaceWith("isConsumed"),
)
public fun PointerInputChange.positionChangeConsumed(): Boolean = isConsumed

/** True if any aspect of this [PointerInputChange] has been consumed. */
@Deprecated(
    "Partial consumption has been deprecated. Use isConsumed instead",
    replaceWith = ReplaceWith("isConsumed"),

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1151-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1186–1220)

)
public fun PointerInputChange.anyChangeConsumed(): Boolean = isConsumed

/**
 * Consume the up or down change of this [PointerInputChange] if there is an up or down change to
 * consume.
 */
@Deprecated(
    "Partial consumption has been deprecated. Use consume() instead.",
    replaceWith = ReplaceWith("if (pressed != previousPressed) consume()"),
)
public fun PointerInputChange.consumeDownChange() {
    if (pressed != previousPressed) {
        consume()
    }
}

/** Consume position change if there is any */
@Deprecated(
    "Partial consumption has been deprecated. Use consume() instead.",
    replaceWith = ReplaceWith("if (positionChange() != Offset.Zero) consume()"),
)
public fun PointerInputChange.consumePositionChange() {
    if (positionChange() != Offset.Zero) {
        consume()
    }
}

/** Consumes all changes associated with the [PointerInputChange] */
@Deprecated("Use consume() instead", replaceWith = ReplaceWith("consume()"))
public fun PointerInputChange.consumeAllChanges() {
    consume()
}

/**

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1186-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1221–1255)

 * Returns `true` if the pointer has moved outside of the region of `(0, 0, size.width,
 * size.height)` or `false` if the current pointer is up or it is inside the given bounds.
 */
@Deprecated(
    message = "Use isOutOfBounds() that supports minimum touch target",
    replaceWith = ReplaceWith("this.isOutOfBounds(size, extendedTouchPadding)"),
)
public fun PointerInputChange.isOutOfBounds(size: IntSize): Boolean {
    val position = position
    val x = position.x
    val y = position.y
    val width = size.width
    val height = size.height
    // Branch-less
    return (x < 0f) or (x > width) or (y < 0f) or (y > height)
}

/**
 * Returns `true` if the pointer has moved outside of the pointer region. For Touch events, this is
 * (-extendedTouchPadding.width, -extendedTouchPadding.height, size.width +
 * extendedTouchPadding.width, size.height + extendedTouchPadding.height) and for other events, this
 * is `(0, 0, size.width, size.height)`. Returns`false` if the current pointer is up or it is inside
 * the pointer region.
 */
public fun PointerInputChange.isOutOfBounds(size: IntSize, extendedTouchPadding: Size): Boolean {
    // Set to 1 when the pointer type is touch, 0 otherwise
    // No-op at the CPU level
    val isTouch = (type == PointerType.Touch).toInt()

    val position = position
    val x = position.x
    val y = position.y

    // Set extentX to 0 when the pointer type is *not* touch
    val extentX = extendedTouchPadding.width * isTouch

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1221-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 1256–1267)

    val maxX = size.width + extentX

    // Set extentY to 0 when the pointer type is *not* touch
    val extentY = extendedTouchPadding.height * isTouch
    val maxY = size.height + extentY

    // Don't branch
    return (x < -extentX) or (x > maxX) or (y < -extentY) or (y > maxY)
}

private inline fun Boolean.toInt() = if (this) 1 else 0


Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-1256-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 141–175)

/**
 * `true` when the tertiary button (middle mouse button) is pressed or `false` when it isn't
 * pressed.
 */
public expect val PointerButtons.isTertiaryPressed: Boolean

/**
 * `true` when the back button (mouse back button) is pressed or `false` when it isn't pressed or
 * there is no mouse button assigned to "back."
 */
public expect val PointerButtons.isBackPressed: Boolean

/**
 * `true` when the forward button (mouse forward button) is pressed or `false` when it isn't pressed
 * or there is no button assigned to "forward."
 */
public expect val PointerButtons.isForwardPressed: Boolean

/**
 * Returns `true` when the button at [buttonIndex] is pressed and `false` when it isn't pressed.
 * This method can handle buttons that haven't been assigned a designated purpose like
 * [isPrimaryPressed] and [isSecondaryPressed].
 */
public expect fun PointerButtons.isPressed(buttonIndex: Int): Boolean

/** Returns `true` if any button is pressed or `false` if all buttons are released. */
public expect val PointerButtons.areAnyPressed: Boolean

/**
 * Returns the index of first button pressed as used in [isPressed] or `-1` if no button is pressed.
 */
public expect fun PointerButtons.indexOfFirstPressed(): Int

/**
 * Returns the index of last button pressed as used in [isPressed] or `-1` if no button is pressed.

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 176–210)

 */
public expect fun PointerButtons.indexOfLastPressed(): Int

/**
 * Contains the state of modifier keys, such as Shift, Control, and Alt, as well as the state of the
 * lock keys, such as Caps Lock and Num Lock.
 */
@kotlin.jvm.JvmInline public value class PointerKeyboardModifiers(internal val packedValue: Int = 0)

/** `true` when the Control key is pressed. */
public expect val PointerKeyboardModifiers.isCtrlPressed: Boolean

/**
 * `true` when the Meta key is pressed. This is commonly associated with the Windows or Command key
 * on some keyboards.
 */
public expect val PointerKeyboardModifiers.isMetaPressed: Boolean

/**
 * `true` when the Alt key is pressed. This is commonly associated with the Option key on some
 * keyboards.
 */
public expect val PointerKeyboardModifiers.isAltPressed: Boolean

/** `true` when the AltGraph key is pressed. */
public expect val PointerKeyboardModifiers.isAltGraphPressed: Boolean

/** `true` when the Sym key is pressed. */
public expect val PointerKeyboardModifiers.isSymPressed: Boolean

/** `true` when the Shift key is pressed. */
public expect val PointerKeyboardModifiers.isShiftPressed: Boolean

/** `true` when the Function key is pressed. */
public expect val PointerKeyboardModifiers.isFunctionPressed: Boolean

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 211–245)


/** `true` when the keyboard's Caps Lock is on. */
public expect val PointerKeyboardModifiers.isCapsLockOn: Boolean

/** `true` when the keyboard's Scroll Lock is on. */
public expect val PointerKeyboardModifiers.isScrollLockOn: Boolean

/** `true` when the keyboard's Num Lock is on. */
public expect val PointerKeyboardModifiers.isNumLockOn: Boolean

/** The device type that produces a [PointerInputChange], such as a mouse or stylus. */
@kotlin.jvm.JvmInline
public value class PointerType private constructor(private val value: Int) {

    public override fun toString(): String =
        when (value) {
            1 -> "Touch"
            2 -> "Mouse"
            3 -> "Stylus"
            4 -> "Eraser"
            else -> "Unknown"
        }

    public companion object {
        /** An unknown device type or the device type isn't relevant. */
        public val Unknown: PointerType
            get() = PointerType(0)

        /** Touch (finger) input. */
        public val Touch: PointerType
            get() = PointerType(1)

        /** A mouse pointer. */
        public val Mouse: PointerType
            get() = PointerType(2)

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 246–280)


        /** A stylus. */
        public val Stylus: PointerType
            get() = PointerType(3)

        /** An eraser or an inverted stylus. */
        public val Eraser: PointerType
            get() = PointerType(4)
    }
}

/** Indicates the primary reason that the [PointerEvent] was sent. */
@kotlin.jvm.JvmInline
public value class PointerEventType private constructor(internal val value: Int) {
    public companion object {
        /** An unknown reason for the event. */
        public val Unknown: PointerEventType
            get() = PointerEventType(0)

        /** A button on the device was pressed or a new pointer was detected. */
        public val Press: PointerEventType
            get() = PointerEventType(1)

        /** A button on the device was released or a pointer was raised. */
        public val Release: PointerEventType
            get() = PointerEventType(2)

        /** The cursor or one or more touch pointers was moved. */
        public val Move: PointerEventType
            get() = PointerEventType(3)

        /**
         * The cursor has entered the input region. This will only be sent after the cursor is
         * hovering when in the input region.
         *

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 281–315)

         * For example, the user's cursor is outside the input region and presses the button prior
         * to entering the input region. The [Enter] event will be sent when the button is released
         * inside the input region.
         */
        public val Enter: PointerEventType
            get() = PointerEventType(4)

        /**
         * A cursor device or elevated stylus exited the input region. This will only follow an
         * [Enter] event, so if a cursor with the button pressed enters and exits region, neither
         * [Enter] nor [Exit] will be sent for the input region. However, if a cursor enters the
         * input region, then a button is pressed, then the cursor exits and reenters, [Enter],
         * [Exit], and [Enter] will be received.
         */
        public val Exit: PointerEventType
            get() = PointerEventType(5)

        /**
         * A scroll event was sent. This can happen, for example, due to a mouse scroll wheel. This
         * event indicates that the [PointerInputChange.scrollDelta]'s [Offset] is non-zero.
         */
        public val Scroll: PointerEventType
            get() = PointerEventType(6)

        /**
         * A scale started. This can happen, for example, due to a trackpad gesture recognized by
         * the platform. Such a gesture will start with an event of [ScaleStart], followed by some
         * number of [ScaleChange]s, and finally a [ScaleEnd].
         */
        public val ScaleStart: PointerEventType
            get() = PointerEventType(7)

        /**
         * An intermediate scale move. This can happen, for example, due to a trackpad gesture
         * recognized by the platform. This event indicates that the

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 316–350)

         * [PointerInputChange.scaleFactor]'s [Offset] may be different from 1.
         */
        public val ScaleChange: PointerEventType
            get() = PointerEventType(8)

        /**
         * A scale ended. This can happen, for example, due to a trackpad gesture recognized by the
         * platform.
         */
        public val ScaleEnd: PointerEventType
            get() = PointerEventType(9)

        /**
         * A pan started. This can happen, for example, due to a trackpad gesture recognized by the
         * platform. Such a gesture will start with an event type of [PanStart], followed by some
         * number of [PanMove]s, and finally a [PanEnd]
         */
        public val PanStart: PointerEventType
            get() = PointerEventType(10)

        /**
         * An intermediate pan move. This can happen, for example, due to a trackpad gesture
         * recognized by the platform. This event indicates that the
         * [PointerInputChange.panOffset]'s [Offset] may be non-zero.
         */
        public val PanMove: PointerEventType
            get() = PointerEventType(11)

        /** A pan ended. This can happen, for example, due to a trackpad gesture. */
        public val PanEnd: PointerEventType
            get() = PointerEventType(12)
    }

    public override fun toString(): String =
        when (this) {

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 351–385)

            Press -> "Press"
            Release -> "Release"
            Move -> "Move"
            Enter -> "Enter"
            Exit -> "Exit"
            Scroll -> "Scroll"
            ScaleStart -> "ScaleStart"
            ScaleChange -> "ScaleChange"
            ScaleEnd -> "ScaleFinish"
            PanStart -> "PanStart"
            PanMove -> "Pan"
            PanEnd -> "PanEnd"
            else -> "Unknown"
        }
}

/**
 * Describes a change that has occurred for a particular pointer, as well as how much of the change
 * has been consumed (meaning, used by a node in the UI).
 *
 * The [position] represents the position of the pointer relative to the element that this
 * [PointerInputChange] is being dispatched to.
 *
 * Note 1: A [PointerEvent]'s [PointerEventType] is the cause of an event and the associated
 * [PointerInputChange]'s properties reflecting that. Most of those are exclusive, in other words, a
 * Press/Release [PointerEventType] will not cause a scrollDelta change and a Scroll
 * [PointerEventType] will not cause a pressed or previousPressed change. However, either a a Scroll
 * or a Press/Release may contain a position change in its [PointerInputChange]s. (You can imagine
 * one finger moving while another is lifted up.)
 *
 * Examples of [PointerEventType] and the associated [PointerInputChange] property changes:
 * - Press -> press will change (position may change) but scroll delta will not.
 * - Release -> press will change (position may change) but scroll delta will not.
 * - Move -> position will change but press and scroll delta will not.
 * - Scroll -> scroll delta will change (position may change) but press will not.

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 36–70)

/**
 * A PointerInputFilter represents a single entity that receives [PointerInputChange]s), interprets
 * them, and consumes the aspects of the changes that it is react to such that other
 * PointerInputFilters don't also react to them.
 */
public abstract class PointerInputFilter {

    /**
     * Invoked when pointers that previously hit this [PointerInputFilter] have changed. It is
     * expected that any [PointerInputChange]s that are used during this event and should not be
     * considered valid to be used in other filters should be marked as consumed by calling
     * [PointerInputChange.consume].
     *
     * @param pointerEvent The list of [PointerInputChange]s with positions relative to this
     *   [PointerInputFilter].
     * @param pass The [PointerEventPass] in which this function is being called.
     * @param bounds The width and height associated with this [PointerInputFilter].
     * @see PointerInputChange
     * @see PointerEventPass
     */
    public abstract fun onPointerEvent(
        pointerEvent: PointerEvent,
        pass: PointerEventPass,
        bounds: IntSize,
    )

    /**
     * Invoked to notify the handler that no more calls to [PointerInputFilter] will be made, until
     * at least new pointers exist. This can occur for a few reasons:
     * 1. Android dispatches ACTION_CANCEL to Compose.
     * 2. This [PointerInputFilter] is no longer associated with a LayoutNode.
     * 3. This [PointerInputFilter]'s associated LayoutNode is no longer in the composition tree.
     */
    public abstract fun onCancel()


Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 386–415)

 *
 * Note 2: The [position] values can be outside the actual bounds of the element itself meaning the
 * numbers can be negative or larger than the element bounds.
 *
 * The [previousPosition] represents the position of the pointer offset to the current position of
 * the pointer relative to the screen.
 *
 * This means that [position] and [previousPosition] can always be used to understand how much a
 * pointer has moved relative to an element, even if that element is moving along with the changes
 * to the pointer. For example, if a pointer touches a 1x1 pixel box in the middle, [position] will
 * report a position of (0, 0) when dispatched to it. If the next event moves x position 5 pixels,
 * [position] will report (5, 0) and [previousPosition] will report (0, 0). If the box moves all 5
 * pixels, and the next event represents the pointer moving along the x axis for 5 more pixels,
 * [position] will again report (5, 0) and [previousPosition] will report (0, 0).
 *
 * @param id The unique id of the pointer associated with this [PointerInputChange].
 * @param uptimeMillis The time of the current pointer event, in milliseconds. The start (`0`) time
 *   is platform-dependent
 * @param position The [Offset] of the current pointer event, relative to the containing element
 *   (values can be negative or larger than the element bounds).
 * @param pressed `true` if the pointer event is considered "pressed." For example, finger touching
 *   the screen or a mouse button is pressed [pressed] would be `true`.
 * @param pressure The pressure of the of the pointer event
 * @param previousUptimeMillis The [uptimeMillis] of the previous pointer event
 * @param previousPosition The [Offset] of the previous pointer event, offset to the [position] and
 *   relative to the containing element.
 * @param previousPressed `true` if the pointer event was considered "pressed." For example , if a
 *   finger was touching the screen or a mouse button was pressed, [previousPressed] would be
 *   `true`.
 * @param isInitiallyConsumed whether the change was consumed from the start or not. This value can

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 416–450)

 *   change over time as change is propagated through the pointer handlers. To query the actual
 *   status of the change use [isConsumed]
 * @param type The device type that produced the event, such as [mouse][PointerType.Mouse], or
 *   [touch][PointerType.Touch].
 * @param scrollDelta The change in scroll position along the horizontal and vertical axes. Note
 *   that this value is platform-dependent and is not normalized to pixel coordinates:
 *     - **Desktop & Android**: Measured in platform-specific mouse wheel tick units.
 *     - **Web**: Raw delta values directly from the browser's `WheelEvent`.
 *     - **iOS**: Native scroll gesture delta.
 *
 *   Also consider handling [panOffset], which represents trackpad scroll gestures.
 *
 * @param scaleFactor A multiplicative scale factor indicating the amount of scale to perform as
 *   part of this pointer input change. A value of `1f` indicates no scale, a value less than `1f`
 *   indicates a scale down, commonly causing a zoom out, and a value greater than `1f` indicates a
 *   scale up, commonly causing a zoom in.
 * @param panOffset An [Offset] in pixel coordinates indicating an amount of panning. Also consider
 *   handling [scrollDelta], which represents a similar action from mouse wheels.
 */
@Immutable
public class PointerInputChange(
    public val id: PointerId,
    public val uptimeMillis: Long,
    public val position: Offset,
    public val pressed: Boolean,
    public val pressure: Float,
    public val previousUptimeMillis: Long,
    public val previousPosition: Offset,
    public val previousPressed: Boolean,
    isInitiallyConsumed: Boolean,
    public val type: PointerType = PointerType.Touch,
    public val scrollDelta: Offset = Offset.Zero,
    public val scaleFactor: Float = 1f,
    public val panOffset: Offset = Offset.Zero,
) {

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-416-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 451–485)

    public constructor(
        id: PointerId,
        uptimeMillis: Long,
        position: Offset,
        pressed: Boolean,
        previousUptimeMillis: Long,
        previousPosition: Offset,
        previousPressed: Boolean,
        isInitiallyConsumed: Boolean,
        type: PointerType = PointerType.Touch,
        scrollDelta: Offset = Offset.Zero,
        scaleFactor: Float = 1f,
        panOffset: Offset = Offset.Zero,
    ) : this(
        id = id,
        uptimeMillis = uptimeMillis,
        position = position,
        pressed = pressed,
        pressure = 1.0f,
        previousUptimeMillis = previousUptimeMillis,
        previousPosition = previousPosition,
        previousPressed = previousPressed,
        isInitiallyConsumed = isInitiallyConsumed,
        type = type,
        scrollDelta = scrollDelta,
        scaleFactor = scaleFactor,
        panOffset = panOffset,
    )

    @Deprecated(message = "Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
    public constructor(
        id: PointerId,
        uptimeMillis: Long,
        position: Offset,
        pressed: Boolean,

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-451-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 486–520)

        pressure: Float,
        previousUptimeMillis: Long,
        previousPosition: Offset,
        previousPressed: Boolean,
        isInitiallyConsumed: Boolean,
        type: PointerType = PointerType.Touch,
        scrollDelta: Offset = Offset.Zero,
    ) : this(
        id = id,
        uptimeMillis = uptimeMillis,
        position = position,
        pressed = pressed,
        pressure = pressure,
        previousUptimeMillis = previousUptimeMillis,
        previousPosition = previousPosition,
        previousPressed = previousPressed,
        isInitiallyConsumed = isInitiallyConsumed,
        type = type,
        scrollDelta = scrollDelta,
    )

    @Deprecated(message = "Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
    public constructor(
        id: PointerId,
        uptimeMillis: Long,
        position: Offset,
        pressed: Boolean,
        previousUptimeMillis: Long,
        previousPosition: Offset,
        previousPressed: Boolean,
        isInitiallyConsumed: Boolean,
        type: PointerType = PointerType.Touch,
        scrollDelta: Offset = Offset.Zero,
    ) : this(
        id = id,

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-486-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 521–555)

        uptimeMillis = uptimeMillis,
        position = position,
        pressed = pressed,
        previousUptimeMillis = previousUptimeMillis,
        previousPosition = previousPosition,
        previousPressed = previousPressed,
        isInitiallyConsumed = isInitiallyConsumed,
        type = type,
        scrollDelta = scrollDelta,
    )

    @Deprecated(
        level = DeprecationLevel.HIDDEN,
        replaceWith =
            ReplaceWith(
                "this(id, uptimeMillis, position, pressed, previousUptimeMillis," +
                    " previousPosition, previousPressed," +
                    " consumed.downChange || consumed.positionChange, type, Offset.Zero)"
            ),
        message = "Use another constructor with `scrollDelta` and without `ConsumedData` instead",
    )
    @Suppress("DEPRECATION")
    public constructor(
        id: PointerId,
        uptimeMillis: Long,
        position: Offset,
        pressed: Boolean,
        previousUptimeMillis: Long,
        previousPosition: Offset,
        previousPressed: Boolean,
        consumed: ConsumedData,
        type: PointerType = PointerType.Touch,
    ) : this(
        id,
        uptimeMillis,

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-521-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 556–590)

        position,
        pressed,
        pressure = 1.0f,
        previousUptimeMillis,
        previousPosition,
        previousPressed,
        consumed.downChange || consumed.positionChange,
        type,
        Offset.Zero,
    )

    internal constructor(
        id: PointerId,
        uptimeMillis: Long,
        position: Offset,
        pressed: Boolean,
        pressure: Float,
        previousUptimeMillis: Long,
        previousPosition: Offset,
        previousPressed: Boolean,
        isInitiallyConsumed: Boolean,
        type: PointerType,
        historical: List<HistoricalChange>,
        scrollDelta: Offset,
        scaleFactor: Float,
        panOffset: Offset,
        originalEventPosition: Offset,
    ) : this(
        id = id,
        uptimeMillis = uptimeMillis,
        position = position,
        pressed = pressed,
        pressure = pressure,
        previousUptimeMillis = previousUptimeMillis,
        previousPosition = previousPosition,

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-556-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 591–625)

        previousPressed = previousPressed,
        isInitiallyConsumed = isInitiallyConsumed,
        type = type,
        scrollDelta = scrollDelta,
        scaleFactor = scaleFactor,
        panOffset = panOffset,
    ) {
        _historical = historical
        this.originalEventPosition = originalEventPosition
    }

    /**
     * Optional high-frequency pointer moves in between the last two dispatched events. Can be used
     * for extra accuracy when input rate exceeds framerate.
     */
    // With these experimental annotations, the API can be either cleanly removed or
    // stabilized. It doesn't appear in current.txt; and in experimental_current.txt,
    // it has the same effect as a primary constructor val.
    public val historical: List<HistoricalChange>
        get() = _historical ?: listOf()

    private var _historical: List<HistoricalChange>? = null

    internal var originalEventPosition: Offset = Offset.Zero

    /**
     * Indicates whether the change was consumed or not. Note that the change must be consumed in
     * full as there's no partial consumption system provided.
     */
    public val isConsumed: Boolean
        get() = consumedDelegate?.isConsumed ?: (downChange || positionChange)

    internal var downChange = isInitiallyConsumed
    internal var positionChange = isInitiallyConsumed
    // Used by shallow copies (see [copy]) to share the consumed state across pointer input changes

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-591-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 626–660)

    internal var consumedDelegate: PointerInputChange? = null

    /**
     * Consume change event, claiming all the corresponding change info to the caller. This is
     * usually needed when, button, when being clicked, consumed the "up" event so no other parents
     * of this button could consume this "up" again.
     *
     * "Consumption" is just an indication of the claim and each pointer input handler
     * implementation must manually check this flag to respect it.
     */
    public fun consume() {
        if (consumedDelegate == null) {
            downChange = true
            positionChange = true
        } else {
            consumedDelegate?.consume()
        }
    }

    @Suppress("DEPRECATION") private var _consumed: ConsumedData? = null

    @Deprecated("use isConsumed and consume() pair of methods instead")
    @Suppress("DEPRECATION")
    public val consumed: ConsumedData
        get() {
            if (_consumed == null) {
                _consumed = ConsumedData(this)
            }
            return _consumed!!
        }

    @Deprecated(
        level = DeprecationLevel.HIDDEN,
        replaceWith =
            ReplaceWith(

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-626-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 661–695)

                "copy(id,currentTime, currentPosition, currentPressed, previousTime," +
                    "previousPosition, previousPressed, consumed, type, this.scrollDelta)"
            ),
        message = "Use another copy() method with scrollDelta parameter instead",
    )
    @Suppress("DEPRECATION")
    public fun copy(
        id: PointerId = this.id,
        currentTime: Long = this.uptimeMillis,
        currentPosition: Offset = this.position,
        currentPressed: Boolean = this.pressed,
        previousTime: Long = this.previousUptimeMillis,
        previousPosition: Offset = this.previousPosition,
        previousPressed: Boolean = this.previousPressed,
        consumed: ConsumedData = this.consumed,
        type: PointerType = this.type,
    ): PointerInputChange =
        PointerInputChange(
                id = id,
                uptimeMillis = currentTime,
                position = currentPosition,
                pressed = currentPressed,
                pressure = this.pressure,
                previousUptimeMillis = previousTime,
                previousPosition = previousPosition,
                previousPressed = previousPressed,
                isInitiallyConsumed = consumed.downChange || consumed.positionChange,
                type = type,
                historical = this.historical,
                scrollDelta = this.scrollDelta,
                scaleFactor = this.scaleFactor,
                panOffset = this.panOffset,
                originalEventPosition = this.originalEventPosition,
            )
            .also {

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-661-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 696–730)

                // This method makes a deep copy, copy the consumed state directly without setting
                // the consumed delegate, which is used for shallow copies.
                it.positionChange = this.positionChange
                it.downChange = this.downChange
            }

    /**
     * Make a shallow copy of the [PointerInputChange]
     *
     * **NOTE:** Due to the need of the inner contract of the [PointerInputChange], this method
     * performs a shallow copy of the [PointerInputChange]. Any [consume] call between any of the
     * copies will consume any other copy automatically. Therefore, copy with the new [isConsumed]
     * is not possible. Consider creating a new [PointerInputChange]
     */
    public fun copy(
        id: PointerId = this.id,
        currentTime: Long = this.uptimeMillis,
        currentPosition: Offset = this.position,
        currentPressed: Boolean = this.pressed,
        previousTime: Long = this.previousUptimeMillis,
        previousPosition: Offset = this.previousPosition,
        previousPressed: Boolean = this.previousPressed,
        type: PointerType = this.type,
        scrollDelta: Offset = this.scrollDelta,
    ): PointerInputChange =
        copy(
                id = id,
                currentTime = currentTime,
                currentPosition = currentPosition,
                currentPressed = currentPressed,
                pressure = this.pressure,
                previousTime = previousTime,
                previousPosition = previousPosition,
                previousPressed = previousPressed,
                type = type,

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-696-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 71–105)

    internal var layoutCoordinates: LayoutCoordinates? = null

    /** The layout size assigned to this [PointerInputFilter]. */
    public val size: IntSize
        get() = layoutCoordinates?.size ?: IntSize.Zero

    internal var isAttached: Boolean = false

    /**
     * Intercept pointer input that children receive even if the pointer is out of bounds.
     *
     * If `true`, and a child has been moved out of this layout and receives an event, this will
     * receive that event. If `false`, a child receiving pointer input outside of the bounds of this
     * layout will not trigger any events in this.
     */
    public open val interceptOutOfBoundsChildEvents: Boolean
        get() = false

    /**
     * If `false`, then this [PointerInputFilter] will not allow siblings under it to respond to
     * events. If `true`, this will have the first chance to respond and the next sibling under will
     * then get a chance to respond as well. This trigger acts at the Layout level, so if any
     * [PointerInputFilter]s on a Layout has [shareWithSiblings] set to `true` then the Layout will
     * share with siblings.
     *
     * Setting this true everywhere or high in the UI tree can negatively impact performance.
     * Therefore, use it sparingly and only at the nearest shared parent of the two target UI
     * elements.
     */
    public open val shareWithSiblings: Boolean
        get() = false
}

/** Describes a pointer input change event that has occurred at a particular point in time. */
public expect class PointerEvent

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 731–765)

                historical = this.historical,
                scrollDelta = scrollDelta,
            )
            .also {
                // This method makes a shallow copy, copy the delegate to share the consumed state
                // across instances. The local consumed state is irrelevant since we won't look at
                // it, meaning there's no need to copy positionChange and downChange.
                it.consumedDelegate = this.consumedDelegate ?: this
            }

    @Suppress("DEPRECATION")
    @Deprecated(
        "Partial consumption has been deprecated. Use copy() instead without `consumed` " +
            "parameter to create a shallow copy or a constructor to create a new " +
            "PointerInputChange",
        replaceWith =
            ReplaceWith(
                "copy(id, currentTime, currentPosition, currentPressed, previousTime, " +
                    "previousPosition, previousPressed, type, scrollDelta)"
            ),
    )
    public fun copy(
        id: PointerId = this.id,
        currentTime: Long = this.uptimeMillis,
        currentPosition: Offset = this.position,
        currentPressed: Boolean = this.pressed,
        previousTime: Long = this.previousUptimeMillis,
        previousPosition: Offset = this.previousPosition,
        previousPressed: Boolean = this.previousPressed,
        consumed: ConsumedData,
        type: PointerType = this.type,
        scrollDelta: Offset = this.scrollDelta,
    ): PointerInputChange =
        PointerInputChange(
                id = id,

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-731-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 766–800)

                uptimeMillis = currentTime,
                position = currentPosition,
                pressed = currentPressed,
                pressure = this.pressure,
                previousUptimeMillis = previousTime,
                previousPosition = previousPosition,
                previousPressed = previousPressed,
                isInitiallyConsumed = consumed.downChange || consumed.positionChange,
                type = type,
                historical = this.historical,
                scrollDelta = scrollDelta,
                scaleFactor = this.scaleFactor,
                panOffset = this.panOffset,
                originalEventPosition = this.originalEventPosition,
            )
            .also {
                // This method makes a deep copy, copy the consumed state directly without setting
                // the consumed delegate, which is used for shallow copies.
                it.positionChange = this.positionChange
                it.downChange = this.downChange
            }

    /**
     * Make a shallow copy of the [PointerInputChange]
     *
     * **NOTE:** Due to the need of the inner contract of the [PointerInputChange], this method
     * performs a shallow copy of the [PointerInputChange]. Any [consume] call between any of the
     * copies will consume any other copy automatically. Therefore, copy with the new [isConsumed]
     * is not possible. Consider creating a new [PointerInputChange].
     */
    public fun copy(
        id: PointerId = this.id,
        currentTime: Long = this.uptimeMillis,
        currentPosition: Offset = this.position,
        currentPressed: Boolean = this.pressed,

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-766-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 801–835)

        pressure: Float = this.pressure,
        previousTime: Long = this.previousUptimeMillis,
        previousPosition: Offset = this.previousPosition,
        previousPressed: Boolean = this.previousPressed,
        type: PointerType = this.type,
        scrollDelta: Offset = this.scrollDelta,
    ): PointerInputChange =
        PointerInputChange(
                id = id,
                uptimeMillis = currentTime,
                position = currentPosition,
                pressed = currentPressed,
                pressure = pressure,
                previousUptimeMillis = previousTime,
                previousPosition = previousPosition,
                previousPressed = previousPressed,
                isInitiallyConsumed = false, // doesn't matter, we will copy the consumed booleans
                type = type,
                historical = this.historical,
                scrollDelta = scrollDelta,
                scaleFactor = this.scaleFactor,
                panOffset = this.panOffset,
                originalEventPosition = this.originalEventPosition,
            )
            .also {
                // This method makes a shallow copy, copy the delegate to share the consumed state
                // across instances. The local consumed state is irrelevant since we won't look at
                // it, meaning there's no need to copy positionChange and downChange.
                it.consumedDelegate = this.consumedDelegate ?: this
            }

    /**
     * Make a shallow copy of the [PointerInputChange]
     *
     * **NOTE:** Due to the need of the inner contract of the [PointerInputChange], this method

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-801-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 836–870)

     * performs a shallow copy of the [PointerInputChange]. Any [consume] call between any of the
     * copies will consume any other copy automatically. Therefore, copy with the new [isConsumed]
     * is not possible. Consider creating a new [PointerInputChange].
     */
    @ExperimentalComposeUiApi
    public fun copy(
        id: PointerId = this.id,
        currentTime: Long = this.uptimeMillis,
        currentPosition: Offset = this.position,
        currentPressed: Boolean = this.pressed,
        previousTime: Long = this.previousUptimeMillis,
        previousPosition: Offset = this.previousPosition,
        previousPressed: Boolean = this.previousPressed,
        type: PointerType = this.type,
        historical: List<HistoricalChange>,
        scrollDelta: Offset = this.scrollDelta,
    ): PointerInputChange =
        copy(
                id = id,
                currentTime = currentTime,
                currentPosition = currentPosition,
                currentPressed = currentPressed,
                pressure = this.pressure,
                previousTime = previousTime,
                previousPosition = previousPosition,
                previousPressed = previousPressed,
                type = type,
                historical = historical,
                scrollDelta = scrollDelta,
            )
            .also {
                // This method makes a shallow copy, copy the delegate to share the consumed state
                // across instances. The local consumed state is irrelevant since we won't look at
                // it, meaning there's no need to copy positionChange and downChange.
                it.consumedDelegate = this.consumedDelegate ?: this

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-836-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 871–905)

            }

    /**
     * Make a shallow copy of the [PointerInputChange]
     *
     * **NOTE:** Due to the need of the inner contract of the [PointerInputChange], this method
     * performs a shallow copy of the [PointerInputChange]. Any [consume] call between any of the
     * copies will consume any other copy automatically. Therefore, copy with the new [isConsumed]
     * is not possible. Consider creating a new [PointerInputChange].
     */
    public fun copy(
        id: PointerId = this.id,
        currentTime: Long = this.uptimeMillis,
        currentPosition: Offset = this.position,
        currentPressed: Boolean = this.pressed,
        pressure: Float = this.pressure,
        previousTime: Long = this.previousUptimeMillis,
        previousPosition: Offset = this.previousPosition,
        previousPressed: Boolean = this.previousPressed,
        type: PointerType = this.type,
        historical: List<HistoricalChange> = this.historical,
        scrollDelta: Offset = this.scrollDelta,
    ): PointerInputChange =
        PointerInputChange(
                id = id,
                uptimeMillis = currentTime,
                position = currentPosition,
                pressed = currentPressed,
                pressure = pressure,
                previousUptimeMillis = previousTime,
                previousPosition = previousPosition,
                previousPressed = previousPressed,
                isInitiallyConsumed = false, // doesn't matter, we will copy the consumed booleans
                type = type,
                historical = historical,

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-871-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 906–940)

                scrollDelta = scrollDelta,
                scaleFactor = this.scaleFactor,
                panOffset = this.panOffset,
                originalEventPosition = this.originalEventPosition,
            )
            .also {
                // This method makes a shallow copy, copy the delegate to share the consumed state
                // across instances. The local consumed state is irrelevant since we won't look at
                // it, meaning there's no need to copy positionChange and downChange.
                it.consumedDelegate = this.consumedDelegate ?: this
            }

    /**
     * Make a shallow copy of the [PointerInputChange]
     *
     * **NOTE:** Due to the need of the inner contract of the [PointerInputChange], this method
     * performs a shallow copy of the [PointerInputChange]. Any [consume] call between any of the
     * copies will consume any other copy automatically. Therefore, copy with the new [isConsumed]
     * is not possible. Consider creating a new [PointerInputChange].
     */
    public fun copy(
        id: PointerId = this.id,
        currentTime: Long = this.uptimeMillis,
        currentPosition: Offset = this.position,
        currentPressed: Boolean = this.pressed,
        pressure: Float = this.pressure,
        previousTime: Long = this.previousUptimeMillis,
        previousPosition: Offset = this.previousPosition,
        previousPressed: Boolean = this.previousPressed,
        type: PointerType = this.type,
        historical: List<HistoricalChange> = this.historical,
        scrollDelta: Offset = this.scrollDelta,
        scaleFactor: Float = this.scaleFactor,
        panOffset: Offset = this.panOffset,
    ): PointerInputChange =

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-906-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 941–975)

        PointerInputChange(
                id = id,
                uptimeMillis = currentTime,
                position = currentPosition,
                pressed = currentPressed,
                pressure = pressure,
                previousUptimeMillis = previousTime,
                previousPosition = previousPosition,
                previousPressed = previousPressed,
                isInitiallyConsumed = false, // doesn't matter, we will copy the consumed booleans
                type = type,
                historical = historical,
                scrollDelta = scrollDelta,
                scaleFactor = scaleFactor,
                panOffset = panOffset,
                originalEventPosition = this.originalEventPosition,
            )
            .also {
                // This method makes a shallow copy, copy the delegate to share the consumed state
                // across instances. The local consumed state is irrelevant since we won't look at
                // it, meaning there's no need to copy positionChange and downChange.
                it.consumedDelegate = this.consumedDelegate ?: this
            }

    override fun toString(): String {
        return "PointerInputChange(id=$id, " +
            "uptimeMillis=$uptimeMillis, " +
            "position=$position, " +
            "pressed=$pressed, " +
            "pressure=$pressure, " +
            "previousUptimeMillis=$previousUptimeMillis, " +
            "previousPosition=$previousPosition, " +
            "previousPressed=$previousPressed, " +
            "isConsumed=$isConsumed, " +
            "type=$type, " +

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-941-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)

## androidx.compose.ui.input.pointer PointerEvent.kt source (lines 976–1010)

            "historical=$historical, " +
            "scrollDelta=$scrollDelta, " +
            "scaleFactor=$scaleFactor, " +
            "panOffset=$panOffset)"
    }
}

/**
 * Data structure for "historical" pointer moves.
 *
 * Optional high-frequency pointer moves in between the last two dispatched events: can be used for
 * extra accuracy when input rate exceeds framerate.
 *
 * @param uptimeMillis The time of the historical pointer event, in milliseconds. In between the
 *   current and previous pointer event times.
 * @param position The [Offset] of the historical pointer event, relative to the containing element.
 * @param scaleFactor A multiplicative scale factor indicating the amount of scale to perform as
 *   part of this pointer input change. A value of `1f` indicates no scale, a value less than `1f`
 *   indicates a scale down, commonly causing a zoom out, and a value greater than `1f` indicates a
 *   scale up, commonly causing a zoom in.
 * @param panOffset An [Offset] in pixel coordinates indicating an amount of scrolling.
 */
@Immutable
public class HistoricalChange(
    public val uptimeMillis: Long,
    public val position: Offset,
    public val scaleFactor: Float = 1f,
    public val panOffset: Offset = Offset.Zero,
) {
    internal var originalEventPosition: Offset = Offset.Zero
        private set

    @Deprecated(message = "Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
    public constructor(
        uptimeMillis: Long,

Sources: [live-androidx-ui-ui-ui-input-pointer-pointerevent-lines-976-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerEvent.kt)
