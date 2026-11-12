---
type: reference
title: androidx.compose.material3 Slider.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-slider-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1
    endLine: 35
    sha256: be4c7aa14b9119fdf7d613a5110b091c55210473443dffdd051557e965e15d08
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

      import androidx.annotation.FloatRange
      import androidx.annotation.IntRange
      import androidx.compose.foundation.Canvas
      import androidx.compose.foundation.MutatePriority
      import androidx.compose.foundation.MutatorMutex
      import androidx.compose.foundation.background
      import androidx.compose.foundation.focusable
      import androidx.compose.foundation.gestures.DragScope
      import androidx.compose.foundation.gestures.DraggableState
      import androidx.compose.foundation.gestures.Orientation
      import androidx.compose.foundation.gestures.Orientation.Horizontal
      import androidx.compose.foundation.gestures.Orientation.Vertical
      import androidx.compose.foundation.gestures.awaitEachGesture
      import androidx.compose.foundation.gestures.awaitFirstDown
      import androidx.compose.foundation.gestures.detectTapGestures
      import androidx.compose.foundation.gestures.draggable
      import androidx.compose.foundation.gestures.horizontalDrag
  - id: live-androidx-material3-material3-material3-slider-lines-1011-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1011
    endLine: 1045
    sha256: 301db8fb13c35b9e05db922263bcc87b036fe11013fbcba620953a6c772904dc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      trackMeasurable.measure(
                          constraints
                              .offset(vertical = -(thumbPlaceable.height - 2 * trackPadding))
                              .copy(minWidth = 0)
                      )
                  } else {
                      trackMeasurable.measure(
                          constraints
                              .offset(horizontal = -(thumbPlaceable.width - 2 * trackPadding))
                              .copy(minHeight = 0)
                      )
                  }

              val sliderWidth: Int
              val sliderHeight: Int
              val trackOffsetX: Int
              val trackOffsetY: Int
              val trackCornerSize =
                  trackPlaceable[CornerSizeAlignmentLine].let {
                      if (it != AlignmentLine.Unspecified) it else 0
                  }

              val thumbCoreWidth = thumbPlaceable.width - 2 * trackPadding
              val thumbCoreHeight = thumbPlaceable.height - 2 * trackPadding

              if (orientation == Vertical) {
                  sliderWidth = max(trackPlaceable.width, thumbCoreWidth)
                  sliderHeight = thumbCoreHeight + trackPlaceable.height
                  trackOffsetX = (sliderWidth - trackPlaceable.width) / 2
                  trackOffsetY = thumbCoreHeight / 2
              } else {
                  sliderWidth = thumbCoreWidth + trackPlaceable.width
                  sliderHeight = max(trackPlaceable.height, thumbCoreHeight)
                  trackOffsetX = thumbCoreWidth / 2
                  trackOffsetY = (sliderHeight - trackPlaceable.height) / 2
  - id: live-androidx-material3-material3-material3-slider-lines-1046-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1046
    endLine: 1080
    sha256: 2bb199d3991b069b46c9797434460b9984045f1fc4515b7180d84787014e704d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }

              state.updateDimensions(newTotalWidth = sliderWidth, newTotalHeight = sliderHeight)

              layout(sliderWidth, sliderHeight) {
                  val valueAsFraction = state.coercedValueAsFraction
                  val isOnFirstOrLastStep =
                      valueAsFraction == state.tickFractions.firstOrNull() ||
                          valueAsFraction == state.tickFractions.lastOrNull()

                  val thumbOffsetX: Int
                  var thumbOffsetY: Int

                  if (orientation == Vertical) {
                      thumbOffsetX = (sliderWidth - thumbPlaceable.width) / 2
                      val fractionOffset =
                          if (state.steps > 0 && !isOnFirstOrLastStep) {
                              ((trackPlaceable.height - trackCornerSize * 2) * valueAsFraction)
                                  .roundToInt() + trackCornerSize
                          } else {
                              (trackPlaceable.height * valueAsFraction).roundToInt()
                          }
                      thumbOffsetY =
                          if (reverseVerticalDirection) {
                              trackPlaceable.height - fractionOffset
                          } else {
                              fractionOffset
                          }
                      thumbOffsetY += trackOffsetY - thumbPlaceable.height / 2
                  } else {
                      val fractionOffset =
                          if (state.steps > 0 && !isOnFirstOrLastStep) {
                              ((trackPlaceable.width - trackCornerSize * 2) * valueAsFraction)
                                  .roundToInt() + trackCornerSize
                          } else {
  - id: live-androidx-material3-material3-material3-slider-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 106
    endLine: 140
    sha256: 78eaa7f8758bbd5dc0d2144f913bd99bff623bf377dd54cec5ba7d3cc0db5ed5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.input.pointer.PointerInputChange
      import androidx.compose.ui.input.pointer.PointerType
      import androidx.compose.ui.input.pointer.pointerHoverIcon
      import androidx.compose.ui.input.pointer.pointerInput
      import androidx.compose.ui.input.pointer.positionChange
      import androidx.compose.ui.layout.AlignmentLine
      import androidx.compose.ui.layout.Layout
      import androidx.compose.ui.layout.VerticalAlignmentLine
      import androidx.compose.ui.layout.layout
      import androidx.compose.ui.layout.layoutId
      import androidx.compose.ui.layout.onSizeChanged
      import androidx.compose.ui.platform.LocalDensity
      import androidx.compose.ui.platform.LocalLayoutDirection
      import androidx.compose.ui.semantics.ProgressBarRangeInfo
      import androidx.compose.ui.semantics.contentDescription
      import androidx.compose.ui.semantics.disabled
      import androidx.compose.ui.semantics.progressBarRangeInfo
      import androidx.compose.ui.semantics.semantics
      import androidx.compose.ui.semantics.setProgress
      import androidx.compose.ui.semantics.stateDescription
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.DpSize
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.unit.offset
      import androidx.compose.ui.util.fastFirst
      import androidx.compose.ui.util.fastMap
      import androidx.compose.ui.util.lerp
      import androidx.compose.ui.util.packFloats
      import androidx.compose.ui.util.unpackFloat1
      import androidx.compose.ui.util.unpackFloat2
      import kotlin.jvm.JvmInline
      import kotlin.jvm.JvmName
      import kotlin.math.abs
      import kotlin.math.floor
  - id: live-androidx-material3-material3-material3-slider-lines-1081-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1081
    endLine: 1115
    sha256: e9afc9e4d08c87b6f752f7f78deceb439102747275a6f294e36df64d8431fcea
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              (trackPlaceable.width * valueAsFraction).roundToInt()
                          }
                      thumbOffsetX = fractionOffset + trackOffsetX - thumbPlaceable.width / 2
                      thumbOffsetY = (sliderHeight - thumbPlaceable.height) / 2
                  }

                  trackPlaceable.placeRelative(trackOffsetX, trackOffsetY)
                  thumbPlaceable.placeRelative(thumbOffsetX, thumbOffsetY)
              }
          }
      }

      private fun Modifier.slideOnKeyEvents(
          enabled: Boolean,
          state: SliderState,
          reverseDirection: Boolean,
          onValueChangeState: (Float) -> Unit,
          onValueChangeFinishedState: (() -> Unit)?,
          isVertical: Boolean,
      ): Modifier {
          require(state.steps >= 0) { "steps should be >= 0" }
          return this.onKeyEvent {
              if (!enabled) return@onKeyEvent false
              val steps = state.steps
              val trackRange = state.trackRange
              val value = state.value
              when (it.type) {
                  KeyEventType.KeyDown -> {
                      val rangeLength = abs(trackRange.endInclusive - trackRange.start)
                      // When steps == 0, it means that a user is not limited by a step length (delta)
                      // when using touch or mouse. But it is not possible to adjust the value
                      // continuously when using keyboard buttons - the delta has to be discrete.
                      // In this case, 1% of the trackRange seems to make sense.
                      val actualSteps = if (steps > 0) steps + 1 else 100
                      val delta = rangeLength / actualSteps
  - id: live-androidx-material3-material3-material3-slider-lines-1116-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1116
    endLine: 1150
    sha256: 4207b3616c9e9170fa418caecbf77efbeca193c4c3460ce0cec8a40ac2ec9162
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      val sign = if (reverseDirection) -1 else 1

                      if ((it.key == Key.MoveHome) || (it.key == Key.NumPadMoveHome)) {
                          onValueChangeState(trackRange.start)
                          return@onKeyEvent true
                      } else if ((it.key == Key.MoveEnd) || (it.key == Key.NumPadMoveEnd)) {
                          onValueChangeState(trackRange.endInclusive)
                          return@onKeyEvent true
                      }
                      if (isVertical) {
                          when (it.key) {
                              Key.DirectionUp,
                              Key.NumPadDirectionUp -> {
                                  onValueChangeState((value - sign * delta).coerceIn(trackRange))
                                  return@onKeyEvent true
                              }
                              Key.DirectionDown,
                              Key.NumPadDirectionDown -> {
                                  onValueChangeState((value + sign * delta).coerceIn(trackRange))
                                  return@onKeyEvent true
                              }
                              Key.PageUp,
                              Key.NumPadPageUp -> {
                                  val page = (actualSteps / 10).coerceIn(1, 10)
                                  onValueChangeState((value - page * sign * delta).coerceIn(trackRange))
                                  return@onKeyEvent true
                              }
                              Key.PageDown,
                              Key.NumPadPageDown -> {
                                  val page = (actualSteps / 10).coerceIn(1, 10)
                                  onValueChangeState((value + page * sign * delta).coerceIn(trackRange))
                                  return@onKeyEvent true
                              }
                              else -> return@onKeyEvent false
                          }
  - id: live-androidx-material3-material3-material3-slider-lines-1151-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1151
    endLine: 1185
    sha256: 3900216365d8cfcf9a6506d7228948082b92bf4df6c719b805780caf7e746a24
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      } else {
                          when (it.key) {
                              Key.DirectionRight,
                              Key.NumPadDirectionRight -> {
                                  onValueChangeState((value + sign * delta).coerceIn(trackRange))
                                  return@onKeyEvent true
                              }
                              Key.DirectionLeft,
                              Key.NumPadDirectionLeft -> {
                                  onValueChangeState((value - sign * delta).coerceIn(trackRange))
                                  return@onKeyEvent true
                              }
                              Key.PageUp,
                              Key.NumPadPageUp -> {
                                  val page = (actualSteps / 10).coerceIn(1, 10)
                                  onValueChangeState((value + page * delta).coerceIn(trackRange))
                                  return@onKeyEvent true
                              }
                              Key.PageDown,
                              Key.NumPadPageDown -> {
                                  val page = (actualSteps / 10).coerceIn(1, 10)
                                  onValueChangeState((value - page * delta).coerceIn(trackRange))
                                  return@onKeyEvent true
                              }
                              else -> return@onKeyEvent false
                          }
                      }
                  }

                  KeyEventType.KeyUp -> {
                      if (isVertical) {
                          when (it.key) {
                              Key.DirectionUp,
                              Key.NumPadDirectionUp,
                              Key.DirectionDown,
  - id: live-androidx-material3-material3-material3-slider-lines-1186-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1186
    endLine: 1220
    sha256: f03223320246d406afd9806178e474e542249e58a5ea1947e15695d22d3fcdf2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              Key.NumPadDirectionDown,
                              Key.MoveHome,
                              Key.NumPadMoveHome,
                              Key.MoveEnd,
                              Key.NumPadMoveEnd,
                              Key.PageUp,
                              Key.NumPadPageUp,
                              Key.PageDown,
                              Key.NumPadPageDown -> {
                                  onValueChangeFinishedState?.invoke()
                                  return@onKeyEvent true
                              }
                              else -> return@onKeyEvent false
                          }
                      } else {
                          when (it.key) {
                              Key.DirectionRight,
                              Key.NumPadDirectionRight,
                              Key.DirectionLeft,
                              Key.NumPadDirectionLeft,
                              Key.MoveHome,
                              Key.NumPadMoveHome,
                              Key.MoveEnd,
                              Key.NumPadMoveEnd,
                              Key.PageUp,
                              Key.NumPadPageUp,
                              Key.PageDown,
                              Key.NumPadPageDown -> {
                                  onValueChangeFinishedState?.invoke()
                                  return@onKeyEvent true
                              }
                              else -> return@onKeyEvent false
                          }
                      }
                  }
  - id: live-androidx-material3-material3-material3-slider-lines-1221-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1221
    endLine: 1255
    sha256: f51c007090e108ef443e0898f5a0df7a7eab181b3a9e711ff9d2523ca08be89c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
                  else -> return@onKeyEvent false
              }
          }
      }

      private fun Modifier.rangeSliderOnKeyEvents(
          enabled: Boolean,
          state: RangeSliderState,
          isStartThumb: Boolean,
          reverseDirection: Boolean,
          onValueChangeState: (SliderRange) -> Unit,
          onValueChangeFinishedState: (() -> Unit)?,
      ): Modifier {
          require(state.steps >= 0) { "steps should be >= 0" }
          return this.onKeyEvent {
              if (!enabled) return@onKeyEvent false
              val steps = state.steps
              val trackRange = state.trackRange
              val valueStart = state.startValue
              val valueEnd = state.endValue
              when (it.type) {
                  KeyEventType.KeyDown -> {
                      val rangeLength = abs(trackRange.endInclusive - trackRange.start)
                      // When steps == 0, it means that a user is not limited by a step length (delta)
                      // when using touch or mouse. But it is not possible to adjust the value
                      // continuously when using keyboard buttons - the delta has to be discrete.
                      // In this case, 1% of the trackRange seems to make sense.
                      val actualSteps = if (steps > 0) steps + 1 else 100
                      val delta = rangeLength / actualSteps
                      val sign = if (reverseDirection) -1 else 1

                      if (isStartThumb) {
                          val coerceInRange = trackRange.start..valueEnd
                          when (it.key) {
  - id: live-androidx-material3-material3-material3-slider-lines-1256-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1256
    endLine: 1290
    sha256: aaaaa55fa6adb8fac773341e2f65562c7e5739eb6b4dc36d14ee7093a21b2e24
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              Key.DirectionRight,
                              Key.NumPadDirectionRight -> {
                                  onValueChangeState(
                                      SliderRange(
                                          (valueStart + sign * delta).coerceIn(coerceInRange),
                                          valueEnd,
                                      )
                                  )
                                  return@onKeyEvent true
                              }

                              Key.DirectionLeft,
                              Key.NumPadDirectionLeft -> {
                                  onValueChangeState(
                                      SliderRange(
                                          (valueStart - sign * delta).coerceIn(coerceInRange),
                                          valueEnd,
                                      )
                                  )
                                  return@onKeyEvent true
                              }

                              Key.PageUp,
                              Key.NumPadPageUp -> {
                                  val page = (actualSteps / 10).coerceIn(1, 10)
                                  onValueChangeState(
                                      SliderRange(
                                          (valueStart + page * delta).coerceIn(coerceInRange),
                                          valueEnd,
                                      )
                                  )
                                  return@onKeyEvent true
                              }

                              Key.PageDown,
  - id: live-androidx-material3-material3-material3-slider-lines-1291-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1291
    endLine: 1325
    sha256: 1811015f726c278a1f1f3e86b1a2146f2be8db8bb0443c82482f23507491e5aa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              Key.NumPadPageDown -> {
                                  val page = (actualSteps / 10).coerceIn(1, 10)
                                  onValueChangeState(
                                      SliderRange(
                                          (valueStart - page * delta).coerceIn(coerceInRange),
                                          valueEnd,
                                      )
                                  )
                                  return@onKeyEvent true
                              }

                              Key.MoveHome,
                              Key.NumPadMoveHome -> {
                                  onValueChangeState(SliderRange(trackRange.start, valueEnd))
                                  return@onKeyEvent true
                              }

                              Key.MoveEnd,
                              Key.NumPadMoveEnd -> {
                                  onValueChangeState(SliderRange(valueEnd, valueEnd))
                                  return@onKeyEvent true
                              }

                              else -> return@onKeyEvent false
                          }
                      } else {
                          val coerceInRange = valueStart..trackRange.endInclusive
                          when (it.key) {
                              Key.DirectionRight,
                              Key.NumPadDirectionRight -> {
                                  onValueChangeState(
                                      SliderRange(
                                          valueStart,
                                          (valueEnd + sign * delta).coerceIn(coerceInRange),
                                      )
  - id: live-androidx-material3-material3-material3-slider-lines-1326-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1326
    endLine: 1360
    sha256: cde4eb10bdeecadc9d77084e034d40d42ee396ec29f1b4490f8ef40d8c2b8bf4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  )

                                  return@onKeyEvent true
                              }

                              Key.DirectionLeft,
                              Key.NumPadDirectionLeft -> {
                                  onValueChangeState(
                                      SliderRange(
                                          valueStart,
                                          (valueEnd - sign * delta).coerceIn(coerceInRange),
                                      )
                                  )

                                  return@onKeyEvent true
                              }

                              Key.PageUp,
                              Key.NumPadPageUp -> {
                                  val page = (actualSteps / 10).coerceIn(1, 10)
                                  onValueChangeState(
                                      SliderRange(
                                          valueStart,
                                          (valueEnd + page * delta).coerceIn(coerceInRange),
                                      )
                                  )
                                  return@onKeyEvent true
                              }

                              Key.PageDown,
                              Key.NumPadPageDown -> {
                                  val page = (actualSteps / 10).coerceIn(1, 10)
                                  onValueChangeState(
                                      SliderRange(
                                          valueStart,
  - id: live-androidx-material3-material3-material3-slider-lines-1361-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1361
    endLine: 1395
    sha256: 212fac93027c5357a8afa0eafb3d4e9cda1dde1ef05c428152417a8015e9343a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                          (valueEnd - page * delta).coerceIn(coerceInRange),
                                      )
                                  )
                                  return@onKeyEvent true
                              }

                              Key.MoveHome,
                              Key.NumPadMoveHome -> {
                                  onValueChangeState(SliderRange(valueStart, valueStart))
                                  return@onKeyEvent true
                              }

                              Key.MoveEnd,
                              Key.NumPadMoveEnd -> {
                                  onValueChangeState(SliderRange(valueStart, trackRange.endInclusive))
                                  return@onKeyEvent true
                              }

                              else -> return@onKeyEvent false
                          }
                      }
                  }

                  KeyEventType.KeyUp -> {
                      when (it.key) {
                          Key.DirectionRight,
                          Key.NumPadDirectionRight,
                          Key.DirectionLeft,
                          Key.NumPadDirectionLeft,
                          Key.MoveHome,
                          Key.NumPadMoveHome,
                          Key.MoveEnd,
                          Key.NumPadMoveEnd,
                          Key.PageUp,
                          Key.NumPadPageUp,
  - id: live-androidx-material3-material3-material3-slider-lines-1396-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1396
    endLine: 1430
    sha256: 8f6909c97b9626b6b2441b416ecf62849abbeef0054bcffde7604b6ca2bd227b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          Key.PageDown,
                          Key.NumPadPageDown -> {
                              onValueChangeFinishedState?.invoke()
                              return@onKeyEvent true
                          }
                          else -> return@onKeyEvent false
                      }
                  }

                  else -> return@onKeyEvent false
              }
          }
      }

      @Composable
      private fun RangeSliderImpl(
          modifier: Modifier,
          state: RangeSliderState,
          enabled: Boolean,
          onValueChange: (ClosedFloatingPointRange<Float>) -> Unit,
          onValueChangeFinished: (() -> Unit)?,
          startThumbInteractionSource: MutableInteractionSource,
          endThumbInteractionSource: MutableInteractionSource,
          startThumb: @Composable ((RangeSliderState) -> Unit),
          endThumb: @Composable ((RangeSliderState) -> Unit),
          track: @Composable ((RangeSliderState) -> Unit),
      ) {
          val onRangeValueChange: (SliderRange) -> Unit = { onValueChange(it.start..it.endInclusive) }
          state.isRtl = LocalLayoutDirection.current == LayoutDirection.Rtl
          val isStartFocused by startThumbInteractionSource.collectIsFocusedAsState()
          val isEndFocused by endThumbInteractionSource.collectIsFocusedAsState()
          state.isStartFocused = isStartFocused
          state.isEndFocused = isEndFocused

          val pressDrag =
  - id: live-androidx-material3-material3-material3-slider-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 141
    endLine: 175
    sha256: fc1cc45860130209f4b91134d15faca2669de9b17c396e34a3ce703fb4da0837
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import kotlin.math.max
      import kotlin.math.min
      import kotlin.math.roundToInt
      import kotlinx.coroutines.CoroutineScope
      import kotlinx.coroutines.coroutineScope
      import kotlinx.coroutines.launch

      /**
       * [Material Design slider](https://m3.material.io/components/sliders/overview)
       *
       * Sliders allow users to make selections from a range of values.
       *
       * It uses [SliderDefaults.Thumb] and [SliderDefaults.Track] as the thumb and track.
       *
       * Sliders reflect a range of values along a horizontal bar, from which users may select a single
       * value. They are ideal for adjusting settings such as volume, brightness, or applying image
       * filters.
       *
       * ![Sliders
       * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqe2zb2b-1.png?alt=media)
       *
       * Use continuous sliders to allow users to make meaningful selections that don’t require a specific
       * value:
       *
       * @sample androidx.compose.material3.samples.SliderSample
       *
       * You can allow the user to choose only between predefined set of values by specifying the amount
       * of steps between min and max values:
       *
       * @sample androidx.compose.material3.samples.StepsSliderSample
       * @param value current value of the slider. If outside of [valueRange] provided, value will be
       *   coerced to this range.
       * @param onValueChange callback in which value should be updated
       * @param modifier the [Modifier] to be applied to this slider
       * @param enabled controls the enabled state of this slider. When `false`, this component will not
  - id: live-androidx-material3-material3-material3-slider-lines-1431-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1431
    endLine: 1465
    sha256: 0451c2cd5d5f0852efae7bad934678f8699c772a0930390416c0f8564a2a3805
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              Modifier.rangeSliderPressDragModifier(
                  state,
                  startThumbInteractionSource,
                  endThumbInteractionSource,
                  enabled,
                  onRangeValueChange,
                  onValueChangeFinished,
              )

          val startContentDescription = getString(Strings.SliderRangeStart)
          val endContentDescription = getString(Strings.SliderRangeEnd)

          val isInsetFocusRing =
              LocalRippleThemeConfiguration.current.focus is RippleThemeConfiguration.Focus.InsetRing

          val startThumbFocusRingModifier =
              if (isInsetFocusRing) {
                  Modifier.indication(
                          interactionSource = startThumbInteractionSource,
                          indication =
                              ripple(
                                  focusRingShape = SliderTokens.HandleShape.value,
                                  enablePressIndication = false,
                                  enableFocusIndication = true,
                                  enableDragIndication = false,
                                  enableHoverIndication = false,
                              ),
                      )
                      .padding(if (isStartFocused) insetFocusRingPadding else 0.dp)
              } else {
                  Modifier
              }

          val endThumbFocusRingModifier =
              if (isInsetFocusRing) {
  - id: live-androidx-material3-material3-material3-slider-lines-1466-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1466
    endLine: 1500
    sha256: 5b8d01b529e70c4aaf99f61d30928b14d4effb64351dd08ae43cdfd42662517c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  Modifier.indication(
                          interactionSource = endThumbInteractionSource,
                          indication =
                              ripple(
                                  focusRingShape = SliderTokens.HandleShape.value,
                                  enablePressIndication = false,
                                  enableFocusIndication = true,
                                  enableDragIndication = false,
                                  enableHoverIndication = false,
                              ),
                      )
                      .padding(if (isEndFocused) insetFocusRingPadding else 0.dp)
              } else {
                  Modifier
              }

          val density = LocalDensity.current

          Layout(
              {
                  Box(
                      modifier =
                          Modifier.layoutId(RangeSliderComponents.STARTTHUMB)
                              .then(startThumbFocusRingModifier)
                              .wrapContentWidth()
                              .onSizeChanged {
                                  val padding =
                                      if (isInsetFocusRing && isStartFocused) {
                                          with(density) { (insetFocusRingPadding * 2).roundToPx() }
                                      } else {
                                          0
                                      }
                                  state.startThumbWidth = (it.width - padding).toFloat()
                                  state.startThumbHeight = (it.height - padding).toFloat()
                              }
  - id: live-androidx-material3-material3-material3-slider-lines-1501-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1501
    endLine: 1535
    sha256: 3038fddcd4b17debe5f8cfbc36bdb4fae46ab4cbf861ab47c8ee400178eedd55
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              .rangeSliderStartThumbSemantics(
                                  state,
                                  enabled,
                                  onRangeValueChange,
                                  onValueChangeFinished,
                              )
                              .semantics(mergeDescendants = true) {
                                  contentDescription = startContentDescription
                              }
                              .rangeSliderOnKeyEvents(
                                  enabled,
                                  state,
                                  true,
                                  state.isRtl,
                                  onRangeValueChange,
                                  onValueChangeFinished,
                              )
                              .focusable(enabled, startThumbInteractionSource)
                  ) {
                      startThumb(state)
                  }
                  Box(
                      modifier =
                          Modifier.layoutId(RangeSliderComponents.ENDTHUMB)
                              .then(endThumbFocusRingModifier)
                              .wrapContentWidth()
                              .onSizeChanged {
                                  val padding =
                                      if (isInsetFocusRing && isEndFocused) {
                                          with(density) { (insetFocusRingPadding * 2).roundToPx() }
                                      } else {
                                          0
                                      }
                                  state.endThumbWidth = (it.width - padding).toFloat()
                                  state.endThumbHeight = (it.height - padding).toFloat()
  - id: live-androidx-material3-material3-material3-slider-lines-1536-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1536
    endLine: 1570
    sha256: bd9fb59e1d7d2b7e7165831568afe12559226a8efe72be5609f9f11a5ea04a61
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                              }
                              .rangeSliderEndThumbSemantics(
                                  state,
                                  enabled,
                                  onRangeValueChange,
                                  onValueChangeFinished,
                              )
                              .semantics(mergeDescendants = true) {
                                  contentDescription = endContentDescription
                              }
                              .rangeSliderOnKeyEvents(
                                  enabled,
                                  state,
                                  false,
                                  state.isRtl,
                                  onRangeValueChange,
                                  onValueChangeFinished,
                              )
                              .focusable(enabled, endThumbInteractionSource)
                  ) {
                      endThumb(state)
                  }
                  Box(modifier = Modifier.layoutId(RangeSliderComponents.TRACK)) { track(state) }
              },
              modifier =
                  modifier
                      .minimumInteractiveComponentSize()
                      .requiredSizeIn(minWidth = ThumbWidth, minHeight = TrackHeight)
                      .then(pressDrag),
          ) { measurables, constraints ->
              val startTrackPadding =
                  if (isInsetFocusRing && isStartFocused) insetFocusRingPadding.roundToPx() else 0
              val endTrackPadding =
                  if (isInsetFocusRing && isEndFocused) insetFocusRingPadding.roundToPx() else 0
  - id: live-androidx-material3-material3-material3-slider-lines-1571-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1571
    endLine: 1605
    sha256: e1cb1779388831af3d933499a191654a530d448c1835838aa55a3fd0955aacb7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              val startThumbPlaceable =
                  measurables
                      .fastFirst { it.layoutId == RangeSliderComponents.STARTTHUMB }
                      .measure(constraints)

              val endThumbPlaceable =
                  measurables
                      .fastFirst { it.layoutId == RangeSliderComponents.ENDTHUMB }
                      .measure(constraints)

              val trackPlaceable =
                  measurables
                      .fastFirst { it.layoutId == RangeSliderComponents.TRACK }
                      .measure(
                          constraints
                              .offset(
                                  horizontal =
                                      -(startThumbPlaceable.width - 2 * startTrackPadding +
                                          endThumbPlaceable.width - 2 * endTrackPadding) / 2
                              )
                              .copy(minHeight = 0)
                      )

              val sliderWidth =
                  trackPlaceable.width +
                      (startThumbPlaceable.width - 2 * startTrackPadding + endThumbPlaceable.width -
                          2 * endTrackPadding) / 2
              val sliderHeight =
                  maxOf(
                      trackPlaceable.height,
                      startThumbPlaceable.height - 2 * startTrackPadding,
                      endThumbPlaceable.height - 2 * endTrackPadding,
                  )

              state.totalWidth = sliderWidth
  - id: live-androidx-material3-material3-material3-slider-lines-1606-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1606
    endLine: 1640
    sha256: 0f5cd736ba6e141297b12261f5c062ec1a24269198548ecb2b9fc7dec8ad4886
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              state.updateMinMaxPx()

              val trackOffsetX = startThumbPlaceable.width / 2 - startTrackPadding
              val trackCornerSize =
                  trackPlaceable[CornerSizeAlignmentLine].let {
                      if (it != AlignmentLine.Unspecified) it else 0
                  }

              // When start thumb and end thumb have different widths,
              // we need to add a correction for the centering of the slider.
              val startThumbCoreWidth = startThumbPlaceable.width - 2 * startTrackPadding
              val endThumbCoreWidth = endThumbPlaceable.width - 2 * endTrackPadding
              val endCorrection = (startThumbCoreWidth - endThumbCoreWidth) / 2
              val trackOffsetY = (sliderHeight - trackPlaceable.height) / 2
              val startThumbOffsetY = (sliderHeight - startThumbPlaceable.height) / 2
              val endThumbOffsetY = (sliderHeight - endThumbPlaceable.height) / 2

              layout(sliderWidth, sliderHeight) {
                  val startValueAsFraction = state.coercedStartValueAsFraction
                  val isStartOnFirstOrLastStep =
                      startValueAsFraction == state.tickFractions.firstOrNull() ||
                          startValueAsFraction == state.tickFractions.lastOrNull()
                  val endValueAsFraction = state.coercedEndValueAsFraction
                  val isEndOnFirstOrLastStep =
                      endValueAsFraction == state.tickFractions.firstOrNull() ||
                          endValueAsFraction == state.tickFractions.lastOrNull()

                  val startThumbOffsetX =
                      if (state.steps > 0 && !isStartOnFirstOrLastStep) {
                          ((trackPlaceable.width - trackCornerSize * 2) * startValueAsFraction)
                              .roundToInt() + trackCornerSize
                      } else {
                          (trackPlaceable.width * startValueAsFraction).roundToInt()
                      }
  - id: live-androidx-material3-material3-material3-slider-lines-1641-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1641
    endLine: 1675
    sha256: 7ce2c13aa3d8aa386011e9743932e05f4e8edf5c538ae3e83a0981302e01f92e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  val endThumbOffsetX =
                      if (state.steps > 0 && !isEndOnFirstOrLastStep) {
                          ((trackPlaceable.width - trackCornerSize * 2) * endValueAsFraction +
                                  endCorrection)
                              .roundToInt() + trackCornerSize
                      } else {
                          (trackPlaceable.width * endValueAsFraction + endCorrection).roundToInt()
                      }

                  trackPlaceable.placeRelative(trackOffsetX, trackOffsetY)
                  startThumbPlaceable.placeRelative(
                      startThumbOffsetX - startTrackPadding,
                      startThumbOffsetY,
                  )
                  endThumbPlaceable.placeRelative(endThumbOffsetX - endTrackPadding, endThumbOffsetY)
              }
          }
      }

      /** Object to hold defaults used by [Slider] */
      @Stable
      public object SliderDefaults {

          /**
           * Creates a [SliderColors] that represents the different colors used in parts of the [Slider]
           * in different states.
           */
          @Composable public fun colors(): SliderColors = MaterialTheme.colorScheme.defaultSliderColors

          /**
           * Creates a [SliderColors] that represents the different colors used in parts of the [Slider]
           * in different states.
           *
           * For the name references below the words "active" and "inactive" are used. Active part of the
           * slider is filled with progress, so if slider's progress is 30% out of 100%, left (or right in
  - id: live-androidx-material3-material3-material3-slider-lines-1676-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1676
    endLine: 1710
    sha256: 02ae6138d850e1c578883f4083e72ef4160919c8bc149b0c1bd9185aa8fa3917
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * RTL) 30% of the track will be active, while the rest is inactive.
           *
           * @param thumbColor thumb color when enabled
           * @param activeTrackColor color of the track in the part that is "active", meaning that the
           *   thumb is ahead of it
           * @param activeTickColor colors to be used to draw tick marks on the active track, if `steps`
           *   is specified
           * @param inactiveTrackColor color of the track in the part that is "inactive", meaning that the
           *   thumb is before it
           * @param inactiveTickColor colors to be used to draw tick marks on the inactive track, if
           *   `steps` are specified on the Slider is specified
           * @param disabledThumbColor thumb colors when disabled
           * @param disabledActiveTrackColor color of the track in the "active" part when the Slider is
           *   disabled
           * @param disabledActiveTickColor colors to be used to draw tick marks on the active track when
           *   Slider is disabled and when `steps` are specified on it
           * @param disabledInactiveTrackColor color of the track in the "inactive" part when the Slider
           *   is disabled
           * @param disabledInactiveTickColor colors to be used to draw tick marks on the inactive part of
           *   the track when Slider is disabled and when `steps` are specified on it
           */
          @Composable
          public fun colors(
              thumbColor: Color = Color.Unspecified,
              activeTrackColor: Color = Color.Unspecified,
              activeTickColor: Color = Color.Unspecified,
              inactiveTrackColor: Color = Color.Unspecified,
              inactiveTickColor: Color = Color.Unspecified,
              disabledThumbColor: Color = Color.Unspecified,
              disabledActiveTrackColor: Color = Color.Unspecified,
              disabledActiveTickColor: Color = Color.Unspecified,
              disabledInactiveTrackColor: Color = Color.Unspecified,
              disabledInactiveTickColor: Color = Color.Unspecified,
          ): SliderColors =
              MaterialTheme.colorScheme.defaultSliderColors.copy(
  - id: live-androidx-material3-material3-material3-slider-lines-1711-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1711
    endLine: 1745
    sha256: 2c565a550466dfb48e7798281a3579e17d2d64b4f1aa5bf95a8d4ac56631941e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  thumbColor = thumbColor,
                  activeTrackColor = activeTrackColor,
                  activeTickColor = activeTickColor,
                  inactiveTrackColor = inactiveTrackColor,
                  inactiveTickColor = inactiveTickColor,
                  disabledThumbColor = disabledThumbColor,
                  disabledActiveTrackColor = disabledActiveTrackColor,
                  disabledActiveTickColor = disabledActiveTickColor,
                  disabledInactiveTrackColor = disabledInactiveTrackColor,
                  disabledInactiveTickColor = disabledInactiveTickColor,
              )

          internal val ColorScheme.defaultSliderColors: SliderColors
              get() {
                  return defaultSliderColorsCached
                      ?: SliderColors(
                              thumbColor = fromToken(SliderTokens.HandleColor),
                              activeTrackColor = fromToken(SliderTokens.ActiveTrackColor),
                              activeTickColor = fromToken(SliderTokens.InactiveTrackColor),
                              inactiveTrackColor = fromToken(SliderTokens.InactiveTrackColor),
                              inactiveTickColor = fromToken(SliderTokens.ActiveTrackColor),
                              disabledThumbColor =
                                  fromToken(SliderTokens.DisabledHandleColor)
                                      .copy(alpha = SliderTokens.DisabledHandleOpacity)
                                      .compositeOver(surface),
                              disabledActiveTrackColor =
                                  fromToken(SliderTokens.DisabledActiveTrackColor)
                                      .copy(alpha = SliderTokens.DisabledActiveTrackOpacity),
                              disabledActiveTickColor =
                                  fromToken(SliderTokens.DisabledInactiveTrackColor)
                                      .copy(alpha = SliderTokens.DisabledInactiveTrackOpacity),
                              disabledInactiveTrackColor =
                                  fromToken(SliderTokens.DisabledInactiveTrackColor)
                                      .copy(alpha = SliderTokens.DisabledInactiveTrackOpacity),
                              disabledInactiveTickColor =
  - id: live-androidx-material3-material3-material3-slider-lines-1746-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1746
    endLine: 1780
    sha256: 92c627685b8fbb06e7c92b42f8004d1eac9ec33e439fa74098bd91bda7d9f8d7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  fromToken(SliderTokens.DisabledActiveTrackColor)
                                      .copy(alpha = SliderTokens.DisabledActiveTrackOpacity),
                          )
                          .also { defaultSliderColorsCached = it }
              }

          /**
           * The Default thumb for [Slider] and [RangeSlider]
           *
           * @param interactionSource the [MutableInteractionSource] representing the stream of
           *   [Interaction]s for this thumb. You can create and pass in your own `remember`ed instance to
           *   observe
           * @param modifier the [Modifier] to be applied to the thumb.
           * @param colors [SliderColors] that will be used to resolve the colors used for this thumb in
           *   different states. See [SliderDefaults.colors].
           * @param enabled controls the enabled state of this slider. When `false`, this component will
           *   not respond to user input, and it will appear visually disabled and disabled to
           *   accessibility services.
           * @param thumbSize the size of the thumb.
           */
          @Composable
          public fun Thumb(
              interactionSource: MutableInteractionSource,
              modifier: Modifier = Modifier,
              colors: SliderColors = colors(),
              enabled: Boolean = true,
              thumbSize: DpSize = ThumbSize,
          ): Unit =
              Thumb(
                  interactionSource = interactionSource,
                  modifier = modifier,
                  colors = colors,
                  enabled = enabled,
                  thumbSize = thumbSize,
                  isVertical = false,
  - id: live-androidx-material3-material3-material3-slider-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 176
    endLine: 210
    sha256: c6b1b98f3a4be7e24a31eed347c29ad745ce773115a5d0ccb25e4ffa94ee840e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param valueRange range of values that this slider can take. The passed [value] will be coerced
       *   to this range.
       * @param steps if positive, specifies the amount of discrete allowable values between the endpoints
       *   of [valueRange]. For example, a range from 0 to 10 with 4 [steps] allows 4 values evenly
       *   distributed between 0 and 10 (i.e., 2, 4, 6, 8). If [steps] is 0, the slider will behave
       *   continuously and allow any value from the range. Must not be negative.
       * @param onValueChangeFinished called when value change has ended. This should not be used to
       *   update the slider value (use [onValueChange] instead), but rather to know when the user has
       *   completed selecting a new value by ending a drag or a click. For keyboard movements, this is
       *   called on every step.
       * @param colors [SliderColors] that will be used to resolve the colors used for this slider in
       *   different states. See [SliderDefaults.colors].
       * @param interactionSource the [MutableInteractionSource] representing the stream of [Interaction]s
       *   for this slider. You can create and pass in your own `remember`ed instance to observe
       *   [Interaction]s and customize the appearance / behavior of this slider in different states.
       */
      @Deprecated(
          message =
              "Use the Slider overload that accepts SliderState, onValueChange, and onValueChangeFinished instead.",
          replaceWith =
              ReplaceWith(
                  "Slider(state = rememberSliderState(value, steps, trackRange = valueRange), onValueChange = onValueChange, modifier = modifier, enabled = enabled, onValueChangeFinished = onValueChangeFinished, colors = colors, interactionSource = interactionSource)"
              ),
      )
      @Composable
      public fun Slider(
          value: Float,
          onValueChange: (Float) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          valueRange: ClosedFloatingPointRange<Float> = 0f..1f,
          @IntRange(from = 0) steps: Int = 0,
          onValueChangeFinished: (() -> Unit)? = null,
  - id: live-androidx-material3-material3-material3-slider-lines-1781-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1781
    endLine: 1815
    sha256: d245cb18c156646fc2fbeb42dd027d55bd2a72bc8e237a18edc02176d96b0ce2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              )

          /**
           * The Default thumb for [Slider], [VerticalSlider] and [RangeSlider]
           *
           * @param interactionSource the [MutableInteractionSource] representing the stream of
           *   [Interaction]s for this thumb. You can create and pass in your own `remember`ed instance to
           *   observe
           * @param sliderState [SliderState] which is used to obtain the current active track.
           * @param modifier the [Modifier] to be applied to the thumb.
           * @param colors [SliderColors] that will be used to resolve the colors used for this thumb in
           *   different states. See [SliderDefaults.colors].
           * @param enabled controls the enabled state of this slider. When `false`, this component will
           *   not respond to user input, and it will appear visually disabled and disabled to
           *   accessibility services.
           * @param thumbSize the size of the thumb.
           */
          @Deprecated(
              "Maintained for binary compatibility. Use the overload that takes isVertical instead.",
              level = DeprecationLevel.HIDDEN,
          )
          @ExperimentalMaterial3ExpressiveApi
          @Composable
          public fun Thumb(
              interactionSource: MutableInteractionSource,
              sliderState: SliderState,
              modifier: Modifier = Modifier,
              colors: SliderColors = colors(),
              enabled: Boolean = true,
              thumbSize: DpSize = ThumbSize,
          ): Unit =
              Thumb(
                  interactionSource = interactionSource,
                  isVertical = sliderState.orientation == Vertical,
                  modifier = modifier,
  - id: live-androidx-material3-material3-material3-slider-lines-1816-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1816
    endLine: 1850
    sha256: 91867334099292e17aa0e96ddfedbfb426bbd6785704f877a11524cd08eb3e45
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  colors = colors,
                  enabled = enabled,
                  thumbSize = thumbSize,
              )

          /**
           * The Default thumb for [Slider], [VerticalSlider] and [RangeSlider]
           *
           * @param interactionSource the [MutableInteractionSource] representing the stream of
           *   [Interaction]s for this thumb. You can create and pass in your own `remember`ed instance to
           *   observe
           * @param isVertical whether the slider that this thumb is being used in is a [VerticalSlider].
           * @param modifier the [Modifier] to be applied to the thumb.
           * @param colors [SliderColors] that will be used to resolve the colors used for this thumb in
           *   different states. See [SliderDefaults.colors].
           * @param enabled controls the enabled state of this slider. When `false`, this component will
           *   not respond to user input, and it will appear visually disabled and disabled to
           *   accessibility services.
           * @param thumbSize the size of the thumb.
           */
          @Composable
          public fun Thumb(
              interactionSource: MutableInteractionSource,
              isVertical: Boolean,
              modifier: Modifier = Modifier,
              colors: SliderColors = colors(),
              enabled: Boolean = true,
              thumbSize: DpSize = if (isVertical) VerticalThumbSize else ThumbSize,
          ): Unit =
              ThumbContent(
                  interactionSource = interactionSource,
                  modifier = modifier,
                  colors = colors,
                  enabled = enabled,
                  thumbSize = thumbSize,
  - id: live-androidx-material3-material3-material3-slider-lines-1851-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1851
    endLine: 1885
    sha256: df89aa4652787af606db291f9fb2650f25401735327d641fa28d04f8ffffed9e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  isVertical = isVertical,
              )

          /**
           * The Default track for [Slider] and [RangeSlider]
           *
           * @param sliderPositions [SliderPositions] which is used to obtain the current active track and
           *   the tick positions if the slider is discrete.
           * @param modifier the [Modifier] to be applied to the track.
           * @param colors [SliderColors] that will be used to resolve the colors used for this track in
           *   different states. See [SliderDefaults.colors].
           * @param enabled controls the enabled state of this slider. When `false`, this component will
           *   not respond to user input, and it will appear visually disabled and disabled to
           *   accessibility services.
           */
          @Suppress("DEPRECATION")
          @Composable
          @Deprecated("Use version that supports slider state")
          public fun Track(
              sliderPositions: SliderPositions,
              modifier: Modifier = Modifier,
              colors: SliderColors = colors(),
              enabled: Boolean = true,
          ) {
              val inactiveTrackColor = colors.trackColor(enabled, active = false)
              val activeTrackColor = colors.trackColor(enabled, active = true)
              val inactiveTickColor = colors.tickColor(enabled, active = false)
              val activeTickColor = colors.tickColor(enabled, active = true)
              Canvas(modifier.fillMaxWidth().height(TrackHeight)) {
                  val isRtl = layoutDirection == LayoutDirection.Rtl
                  val sliderLeft = Offset(0f, center.y)
                  val sliderRight = Offset(size.width, center.y)
                  val sliderStart = if (isRtl) sliderRight else sliderLeft
                  val sliderEnd = if (isRtl) sliderLeft else sliderRight
                  val tickSize = TickSize.toPx()
  - id: live-androidx-material3-material3-material3-slider-lines-1886-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1886
    endLine: 1920
    sha256: 9333f7f390e5b20602c21ae45a4aba34d112019e5c18a0a7c2de3d9c562f2664
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  val trackStrokeWidth = TrackHeight.toPx()
                  drawLine(inactiveTrackColor, sliderStart, sliderEnd, trackStrokeWidth, StrokeCap.Round)
                  val sliderValueEnd =
                      Offset(
                          sliderStart.x +
                              (sliderEnd.x - sliderStart.x) * sliderPositions.activeRange.endInclusive,
                          center.y,
                      )

                  val sliderValueStart =
                      Offset(
                          sliderStart.x +
                              (sliderEnd.x - sliderStart.x) * sliderPositions.activeRange.start,
                          center.y,
                      )

                  drawLine(
                      activeTrackColor,
                      sliderValueStart,
                      sliderValueEnd,
                      trackStrokeWidth,
                      StrokeCap.Round,
                  )
                  sliderPositions.tickFractions
                      .groupBy {
                          it > sliderPositions.activeRange.endInclusive ||
                              it < sliderPositions.activeRange.start
                      }
                      .forEach { (outsideFraction, list) ->
                          drawPoints(
                              list.fastMap { Offset(lerp(sliderStart, sliderEnd, it).x, center.y) },
                              PointMode.Points,
                              (if (outsideFraction) inactiveTickColor else activeTickColor),
                              tickSize,
                              StrokeCap.Round,
  - id: live-androidx-material3-material3-material3-slider-lines-1921-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1921
    endLine: 1955
    sha256: c4239c32075c261a1eec0a37f46a3f258196a4146c88bad1ea379a01709a4018
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          )
                      }
              }
          }

          /**
           * The Default track for [Slider]
           *
           * @param sliderState [SliderState] which is used to obtain the current active track.
           * @param modifier the [Modifier] to be applied to the track.
           * @param enabled controls the enabled state of this slider. When `false`, this component will
           *   not respond to user input, and it will appear visually disabled and disabled to
           *   accessibility services.
           * @param colors [SliderColors] that will be used to resolve the colors used for this track in
           *   different states. See [SliderDefaults.colors].
           * @param drawStopIndicator lambda that will be called to draw the stop indicator at the end of
           *   the track.
           * @param drawTick lambda that will be called to draw the ticks if steps are greater than 0.
           * @param thumbTrackGapSize size of the gap between the thumb and the track.
           * @param trackInsideCornerSize size of the corners towards the thumb when a gap is set.
           */
          @Composable
          public fun Track(
              sliderState: SliderState,
              modifier: Modifier = Modifier,
              enabled: Boolean = true,
              colors: SliderColors = colors(),
              drawStopIndicator: (DrawScope.(Offset) -> Unit)? = {
                  drawStopIndicator(
                      offset = it,
                      color = colors.trackColor(enabled, active = true),
                      size = TrackStopIndicatorSize,
                  )
              },
              drawTick: DrawScope.(Offset, Color) -> Unit = { offset, color ->
  - id: live-androidx-material3-material3-material3-slider-lines-1956-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1956
    endLine: 1990
    sha256: ea8a7a3dc340ed676ef5cf2da33abe78dba1da0c34c41b6f5dfd0f5ea8631a87
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  drawStopIndicator(offset = offset, color = color, size = TickSize)
              },
              thumbTrackGapSize: Dp = ThumbTrackGapSize,
              trackInsideCornerSize: Dp = TrackInsideCornerSize,
          ) {
              TrackImpl(
                  sliderState = sliderState,
                  trackCornerSize = Dp.Unspecified,
                  modifier = modifier,
                  enabled = enabled,
                  colors = colors,
                  drawStopIndicator = drawStopIndicator,
                  drawTick = drawTick,
                  thumbTrackGapSize = thumbTrackGapSize,
                  trackInsideCornerSize = trackInsideCornerSize,
                  enableCornerShrinking = false,
                  isCentered = false,
              )
          }

          /**
           * The Default track for [Slider] and [VerticalSlider]
           *
           * This track has a different corner treatment where the corner size decreases as the thumb gets
           * closer.
           *
           * @param sliderState [SliderState] which is used to obtain the current active track.
           * @param trackCornerSize size of the external corners.
           * @param modifier the [Modifier] to be applied to the track.
           * @param enabled controls the enabled state of this slider. When `false`, this component will
           *   not respond to user input, and it will appear visually disabled and disabled to
           *   accessibility services.
           * @param colors [SliderColors] that will be used to resolve the colors used for this track in
           *   different states. See [SliderDefaults.colors].
           * @param drawStopIndicator lambda that will be called to draw the stop indicator at the end of
  - id: live-androidx-material3-material3-material3-slider-lines-1991-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 1991
    endLine: 2025
    sha256: 980ff0bd350643d33b2ebbc63e88cbf09138b5adb55f379c87921a5afb04a20a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *   the track.
           * @param drawTick lambda that will be called to draw the ticks if steps are greater than 0.
           * @param thumbTrackGapSize size of the gap between the thumb and the track.
           * @param trackInsideCornerSize size of the corners towards the thumb when a gap is set.
           */
          @Composable
          public fun Track(
              sliderState: SliderState,
              trackCornerSize: Dp,
              modifier: Modifier = Modifier,
              enabled: Boolean = true,
              colors: SliderColors = colors(),
              drawStopIndicator: (DrawScope.(Offset) -> Unit)? = {
                  drawStopIndicator(
                      offset = it,
                      color = colors.trackColor(enabled, active = true),
                      size = TrackStopIndicatorSize,
                  )
              },
              drawTick: DrawScope.(Offset, Color) -> Unit = { offset, color ->
                  drawStopIndicator(offset = offset, color = color, size = TickSize)
              },
              thumbTrackGapSize: Dp = ThumbTrackGapSize,
              trackInsideCornerSize: Dp = TrackInsideCornerSize,
          ) {
              TrackImpl(
                  sliderState = sliderState,
                  trackCornerSize = trackCornerSize,
                  modifier = modifier,
                  enabled = enabled,
                  colors = colors,
                  drawStopIndicator = drawStopIndicator,
                  drawTick = drawTick,
                  thumbTrackGapSize = thumbTrackGapSize,
                  trackInsideCornerSize = trackInsideCornerSize,
  - id: live-androidx-material3-material3-material3-slider-lines-2026-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2026
    endLine: 2060
    sha256: f49ccd7d3af728826a66fe13b49944b6a852d24df3b84c2c599119d93bdf3843
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  enableCornerShrinking = true,
                  isCentered = false,
              )
          }

          /**
           * The Default centered track for [Slider] and [VerticalSlider]
           *
           * This track starts from the center of the slider.
           *
           * @param sliderState [SliderState] which is used to obtain the current active track.
           * @param modifier the [Modifier] to be applied to the track.
           * @param enabled controls the enabled state of this slider. When `false`, this component will
           *   not respond to user input, and it will appear visually disabled and disabled to
           *   accessibility services.
           * @param colors [SliderColors] that will be used to resolve the colors used for this track in
           *   different states. See [SliderDefaults.colors].
           * @param drawStopIndicator lambda that will be called to draw the stop indicator at the end of
           *   the track.
           * @param drawTick lambda that will be called to draw the ticks if steps are greater than 0.
           * @param thumbTrackGapSize size of the gap between the thumb and the track.
           * @param trackInsideCornerSize size of the corners towards the thumb when a gap is set.
           * @param trackCornerSize size of the external corners.
           */
          @Composable
          public fun CenteredTrack(
              sliderState: SliderState,
              modifier: Modifier = Modifier,
              enabled: Boolean = true,
              colors: SliderColors = colors(),
              drawStopIndicator: (DrawScope.(Offset) -> Unit)? = {
                  drawStopIndicator(
                      offset = it,
                      color = colors.trackColor(enabled, active = true),
                      size = TrackStopIndicatorSize,
  - id: live-androidx-material3-material3-material3-slider-lines-2061-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2061
    endLine: 2095
    sha256: 15e146931d0ace913f2fa5ac6078babc66b762aadf01dfbd13db56f499b4251f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  )
              },
              drawTick: DrawScope.(Offset, Color) -> Unit = { offset, color ->
                  drawStopIndicator(offset = offset, color = color, size = TickSize)
              },
              thumbTrackGapSize: Dp = ThumbTrackGapSize,
              trackInsideCornerSize: Dp = TrackInsideCornerSize,
              trackCornerSize: Dp = Dp.Unspecified,
          ) {
              TrackImpl(
                  sliderState = sliderState,
                  trackCornerSize = trackCornerSize,
                  modifier = modifier,
                  enabled = enabled,
                  colors = colors,
                  drawStopIndicator = drawStopIndicator,
                  drawTick = drawTick,
                  thumbTrackGapSize = thumbTrackGapSize,
                  trackInsideCornerSize = trackInsideCornerSize,
                  enableCornerShrinking = true,
                  isCentered = true,
              )
          }

          @Composable
          private fun TrackImpl(
              sliderState: SliderState,
              trackCornerSize: Dp,
              modifier: Modifier,
              enabled: Boolean,
              colors: SliderColors,
              drawStopIndicator: (DrawScope.(Offset) -> Unit)?,
              drawTick: DrawScope.(Offset, Color) -> Unit,
              thumbTrackGapSize: Dp,
              trackInsideCornerSize: Dp,
  - id: live-androidx-material3-material3-material3-slider-lines-2096-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2096
    endLine: 2130
    sha256: 932d5ffa4aa1f53ee181b1efd6d3c76d865f3f225cefb20a703cfc8b30401cde
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              enableCornerShrinking: Boolean,
              isCentered: Boolean,
          ) {
              val orientation = sliderState.orientation
              val reverseVerticalDirection = sliderState.reverseVerticalDirection
              val inactiveTrackColor = colors.trackColor(enabled = enabled, active = false)
              val activeTrackColor = colors.trackColor(enabled = enabled, active = true)
              val inactiveTickColor = colors.tickColor(enabled = enabled, active = false)
              val activeTickColor = colors.tickColor(enabled = enabled, active = true)
              val isInsetFocusRing =
                  LocalRippleThemeConfiguration.current.focus is RippleThemeConfiguration.Focus.InsetRing
              val focusPadding =
                  if (isInsetFocusRing && sliderState.isFocused) insetFocusRingPadding else 0.dp
              Canvas(
                  if (orientation == Vertical) {
                          modifier.width(TrackHeight).fillMaxHeight().let {
                              if (reverseVerticalDirection) it.scale(1f, -1f) else it
                          }
                      } else {
                          modifier.fillMaxWidth().height(TrackHeight)
                      }
                      .then(
                          Modifier.layout { measurable, constraints ->
                              val placeable = measurable.measure(constraints)
                              val cornerSize =
                                  if (trackCornerSize == Dp.Unspecified) {
                                      if (orientation == Vertical) {
                                          placeable.width / 2
                                      } else {
                                          placeable.height / 2
                                      }
                                  } else {
                                      trackCornerSize.roundToPx()
                                  }
                              layout(
  - id: live-androidx-material3-material3-material3-slider-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 211
    endLine: 245
    sha256: 078f08c495c5f5819c7f8f69e5c62ce723cba51cea11adab4f5afdcd34ed71c0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          colors: SliderColors = SliderDefaults.colors(),
          interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
      ) {
          val state = remember(steps, valueRange) { SliderState(value, steps, valueRange) }
          state.value = value

          Slider(
              state = state,
              onValueChange = onValueChange,
              modifier = modifier,
              enabled = enabled,
              onValueChangeFinished = onValueChangeFinished,
              colors = colors,
              interactionSource = interactionSource,
              thumb = {
                  SliderDefaults.Thumb(
                      interactionSource = interactionSource,
                      colors = colors,
                      enabled = enabled,
                  )
              },
              track = { sliderState ->
                  SliderDefaults.Track(colors = colors, enabled = enabled, sliderState = sliderState)
              },
          )
      }

      /**
       * [Material Design slider](https://m3.material.io/components/sliders/overview)
       *
       * Sliders allow users to make selections from a range of values.
       *
       * Sliders reflect a range of values along a bar, from which users may select a single value. They
       * are ideal for adjusting settings such as volume, brightness, or applying image filters.
       *
  - id: live-androidx-material3-material3-material3-slider-lines-2131-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2131
    endLine: 2165
    sha256: d13da9baf13c2161107985ee24eb4455c9cb3a3b8e05a365f2d2e123a0c572fa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  width = placeable.width,
                                  height = placeable.height,
                                  alignmentLines = mapOf(CornerSizeAlignmentLine to cornerSize),
                              ) {
                                  placeable.place(0, 0)
                              }
                          }
                      )
              ) {
                  val cornerSize: Float =
                      if (trackCornerSize == Dp.Unspecified) {
                          if (orientation == Vertical) {
                              size.width / 2
                          } else {
                              size.height / 2
                          }
                      } else {
                          trackCornerSize.toPx()
                      }
                  val isThumbBeforeCenter = sliderState.coercedValueAsFraction < 0.5f
                  val isThumbAfterCenter = sliderState.coercedValueAsFraction > 0.5f
                  val startThumbWidth =
                      if (isCentered && !isThumbAfterCenter) {
                          sliderState.thumbWidth.toDp()
                      } else {
                          0.dp
                      }
                  val startThumbHeight =
                      if (isCentered && !isThumbAfterCenter) {
                          sliderState.thumbHeight.toDp()
                      } else {
                          0.dp
                      }
                  val endThumbWidth =
                      if (isCentered) {
  - id: live-androidx-material3-material3-material3-slider-lines-2166-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2166
    endLine: 2200
    sha256: d9d588132a50ad1e7db6fac03ff9276330c08c6eb6d328aa16921aef2da57a14
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          if (!isThumbBeforeCenter) sliderState.thumbWidth.toDp() else 0.dp
                      } else {
                          sliderState.thumbWidth.toDp()
                      }
                  val endThumbHeight =
                      if (isCentered) {
                          if (!isThumbBeforeCenter) sliderState.thumbHeight.toDp() else 0.dp
                      } else {
                          sliderState.thumbHeight.toDp()
                      }
                  drawTrack(
                      tickFractions = sliderState.tickFractions,
                      activeRangeStart = 0f,
                      activeRangeEnd = sliderState.coercedValueAsFraction,
                      inactiveTrackColor = inactiveTrackColor,
                      activeTrackColor = activeTrackColor,
                      inactiveTickColor = inactiveTickColor,
                      activeTickColor = activeTickColor,
                      startThumbWidth = startThumbWidth,
                      startThumbHeight = startThumbHeight,
                      endThumbWidth = endThumbWidth,
                      endThumbHeight = endThumbHeight,
                      startThumbTrackGapSize = if (isCentered) thumbTrackGapSize + focusPadding else 0.dp,
                      endThumbTrackGapSize = thumbTrackGapSize + focusPadding,
                      trackInsideCornerSize = trackInsideCornerSize,
                      trackCornerSize = cornerSize.toDp(),
                      drawStopIndicator = drawStopIndicator,
                      drawTick = drawTick,
                      isRangeSlider = false,
                      enableCornerShrinking = enableCornerShrinking,
                      orientation = orientation,
                      isCentered = isCentered,
                  )
              }
          }
  - id: live-androidx-material3-material3-material3-slider-lines-2201-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2201
    endLine: 2235
    sha256: e4c736d032b4d662e9ed9e0d2153af296ca2fbb87cf61d898ec4c6b4d91973df
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /**
           * The Default track for [RangeSlider]
           *
           * @param rangeSliderState [RangeSliderState] which is used to obtain the current active track.
           * @param modifier the [Modifier] to be applied to the track.
           * @param colors [SliderColors] that will be used to resolve the colors used for this track in
           *   different states. See [SliderDefaults.colors].
           * @param enabled controls the enabled state of this slider. When `false`, this component will
           *   not respond to user input, and it will appear visually disabled and disabled to
           *   accessibility services.
           */
          @Deprecated(
              message =
                  "Use the overload that takes `drawStopIndicator`, `drawTick`, " +
                      "`thumbTrackGapSize` and `trackInsideCornerSize`, see `LegacyRangeSliderSample` " +
                      "on how to restore the previous behavior",
              replaceWith =
                  ReplaceWith(
                      "Track(rangeSliderState, modifier, colors, enabled, drawStopIndicator, " +
                          "drawTick, thumbTrackGapSize, trackInsideCornerSize)"
                  ),
              level = DeprecationLevel.HIDDEN,
          )
          @Composable
          public fun Track(
              rangeSliderState: RangeSliderState,
              modifier: Modifier = Modifier,
              colors: SliderColors = colors(),
              enabled: Boolean = true,
          ) {
              Track(
                  rangeSliderState,
                  modifier,
                  enabled,
  - id: live-androidx-material3-material3-material3-slider-lines-2236-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2236
    endLine: 2270
    sha256: 43960af8a41a34ca7d2bce1bf1a69b863d636b352f68557a264157d3ac74e607
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  colors,
                  thumbTrackGapSize = ThumbTrackGapSize,
                  trackInsideCornerSize = TrackInsideCornerSize,
              )
          }

          /**
           * The Default track for [RangeSlider]
           *
           * @param rangeSliderState [RangeSliderState] which is used to obtain the current active track.
           * @param modifier the [Modifier] to be applied to the track.
           * @param enabled controls the enabled state of this slider. When `false`, this component will
           *   not respond to user input, and it will appear visually disabled and disabled to
           *   accessibility services.
           * @param colors [SliderColors] that will be used to resolve the colors used for this track in
           *   different states. See [SliderDefaults.colors].
           * @param drawStopIndicator lambda that will be called to draw the stop indicator at the
           *   start/end of the track.
           * @param drawTick lambda that will be called to draw the ticks if steps are greater than 0.
           * @param thumbTrackGapSize size of the gap between the thumbs and the track.
           * @param trackInsideCornerSize size of the corners towards the thumbs when a gap is set.
           */
          @Composable
          public fun Track(
              rangeSliderState: RangeSliderState,
              modifier: Modifier = Modifier,
              enabled: Boolean = true,
              colors: SliderColors = colors(),
              drawStopIndicator: (DrawScope.(Offset) -> Unit)? = {
                  drawStopIndicator(
                      offset = it,
                      color = colors.trackColor(enabled, active = true),
                      size = TrackStopIndicatorSize,
                  )
              },
  - id: live-androidx-material3-material3-material3-slider-lines-2271-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2271
    endLine: 2305
    sha256: ba31f5534820cefc93a0b1fb4b6d8d579d53dd83a2063a159df3f8139a81584a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              drawTick: DrawScope.(Offset, Color) -> Unit = { offset, color ->
                  drawStopIndicator(offset = offset, color = color, size = TickSize)
              },
              thumbTrackGapSize: Dp = ThumbTrackGapSize,
              trackInsideCornerSize: Dp = TrackInsideCornerSize,
          ) {
              TrackImpl(
                  rangeSliderState = rangeSliderState,
                  trackCornerSize = Dp.Unspecified,
                  modifier = modifier,
                  enabled = enabled,
                  colors = colors,
                  drawStopIndicator = drawStopIndicator,
                  drawTick = drawTick,
                  thumbTrackGapSize = thumbTrackGapSize,
                  trackInsideCornerSize = trackInsideCornerSize,
              )
          }

          /**
           * The Default track for [RangeSlider]
           *
           * @param rangeSliderState [RangeSliderState] which is used to obtain the current active track.
           * @param trackCornerSize size of the external corners.
           * @param modifier the [Modifier] to be applied to the track.
           * @param enabled controls the enabled state of this slider. When `false`, this component will
           *   not respond to user input, and it will appear visually disabled and disabled to
           *   accessibility services.
           * @param colors [SliderColors] that will be used to resolve the colors used for this track in
           *   different states. See [SliderDefaults.colors].
           * @param drawStopIndicator lambda that will be called to draw the stop indicator at the
           *   start/end of the track.
           * @param drawTick lambda that will be called to draw the ticks if steps are greater than 0.
           * @param thumbTrackGapSize size of the gap between the thumbs and the track.
           * @param trackInsideCornerSize size of the corners towards the thumbs when a gap is set.
  - id: live-androidx-material3-material3-material3-slider-lines-2306-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2306
    endLine: 2340
    sha256: 6203f505f071bb7cf84aaad1e0d3ae6a1a4c2080cab32ccb3b9f9b93872a1ecc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          @Composable
          public fun Track(
              rangeSliderState: RangeSliderState,
              trackCornerSize: Dp,
              modifier: Modifier = Modifier,
              enabled: Boolean = true,
              colors: SliderColors = colors(),
              drawStopIndicator: (DrawScope.(Offset) -> Unit)? = {
                  drawStopIndicator(
                      offset = it,
                      color = colors.trackColor(enabled, active = true),
                      size = TrackStopIndicatorSize,
                  )
              },
              drawTick: DrawScope.(Offset, Color) -> Unit = { offset, color ->
                  drawStopIndicator(offset = offset, color = color, size = TickSize)
              },
              thumbTrackGapSize: Dp = ThumbTrackGapSize,
              trackInsideCornerSize: Dp = TrackInsideCornerSize,
          ) {
              TrackImpl(
                  rangeSliderState = rangeSliderState,
                  trackCornerSize = trackCornerSize,
                  modifier = modifier,
                  enabled = enabled,
                  colors = colors,
                  drawStopIndicator = drawStopIndicator,
                  drawTick = drawTick,
                  thumbTrackGapSize = thumbTrackGapSize,
                  trackInsideCornerSize = trackInsideCornerSize,
              )
          }

          @Composable
  - id: live-androidx-material3-material3-material3-slider-lines-2341-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2341
    endLine: 2375
    sha256: 39fada1beb7dca2c69e26f743177c27f700b26b6fc988825bfe57d3c36b18c45
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          private fun TrackImpl(
              rangeSliderState: RangeSliderState,
              trackCornerSize: Dp,
              modifier: Modifier,
              enabled: Boolean,
              colors: SliderColors,
              drawStopIndicator: (DrawScope.(Offset) -> Unit)?,
              drawTick: DrawScope.(Offset, Color) -> Unit,
              thumbTrackGapSize: Dp,
              trackInsideCornerSize: Dp,
          ) {
              val inactiveTrackColor = colors.trackColor(enabled, active = false)
              val activeTrackColor = colors.trackColor(enabled, active = true)
              val inactiveTickColor = colors.tickColor(enabled, active = false)
              val activeTickColor = colors.tickColor(enabled, active = true)
              val isInsetFocusRing =
                  LocalRippleThemeConfiguration.current.focus is RippleThemeConfiguration.Focus.InsetRing
              val startFocusPadding =
                  if (isInsetFocusRing && rangeSliderState.isStartFocused) insetFocusRingPadding else 0.dp
              val endFocusPadding =
                  if (isInsetFocusRing && rangeSliderState.isEndFocused) insetFocusRingPadding else 0.dp
              Canvas(
                  modifier.fillMaxWidth().height(TrackHeight).layout { measurable, constraints ->
                      val placeable = measurable.measure(constraints)
                      val trackCornerSize = placeable.height / 2
                      layout(
                          width = placeable.width,
                          height = placeable.height,
                          alignmentLines = mapOf(CornerSizeAlignmentLine to trackCornerSize),
                      ) {
                          placeable.place(0, 0)
                      }
                  }
              ) {
                  val cornerSize: Float =
  - id: live-androidx-material3-material3-material3-slider-lines-2376-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2376
    endLine: 2410
    sha256: 6657521549e8454f6854b45b089e14ca012d8940eb3011ffb2e5da708d5cdf41
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      if (trackCornerSize == Dp.Unspecified) {
                          size.height / 2
                      } else {
                          trackCornerSize.toPx()
                      }
                  drawTrack(
                      tickFractions = rangeSliderState.tickFractions,
                      activeRangeStart = rangeSliderState.coercedStartValueAsFraction,
                      activeRangeEnd = rangeSliderState.coercedEndValueAsFraction,
                      inactiveTrackColor = inactiveTrackColor,
                      activeTrackColor = activeTrackColor,
                      inactiveTickColor = inactiveTickColor,
                      activeTickColor = activeTickColor,
                      startThumbWidth = rangeSliderState.startThumbWidth.toDp(),
                      startThumbHeight = rangeSliderState.startThumbHeight.toDp(),
                      endThumbWidth = rangeSliderState.endThumbWidth.toDp(),
                      endThumbHeight = rangeSliderState.endThumbHeight.toDp(),
                      startThumbTrackGapSize = thumbTrackGapSize + startFocusPadding,
                      endThumbTrackGapSize = thumbTrackGapSize + endFocusPadding,
                      trackInsideCornerSize = trackInsideCornerSize,
                      trackCornerSize = cornerSize.toDp(),
                      drawStopIndicator = drawStopIndicator,
                      drawTick = drawTick,
                      isRangeSlider = true,
                  )
              }
          }

          private fun DrawScope.drawTrack(
              tickFractions: FloatArray,
              activeRangeStart: Float,
              activeRangeEnd: Float,
              inactiveTrackColor: Color,
              activeTrackColor: Color,
              inactiveTickColor: Color,
  - id: live-androidx-material3-material3-material3-slider-lines-2411-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2411
    endLine: 2445
    sha256: fb0960dc8049784e3b10689110e073aec94dbcef309e3ee5fecf17bf99651760
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              activeTickColor: Color,
              startThumbWidth: Dp,
              startThumbHeight: Dp,
              endThumbWidth: Dp,
              endThumbHeight: Dp,
              startThumbTrackGapSize: Dp,
              endThumbTrackGapSize: Dp,
              trackInsideCornerSize: Dp,
              trackCornerSize: Dp,
              drawStopIndicator: (DrawScope.(Offset) -> Unit)?,
              drawTick: DrawScope.(Offset, Color) -> Unit,
              isRangeSlider: Boolean,
              enableCornerShrinking: Boolean = false,
              orientation: Orientation = Horizontal,
              isCentered: Boolean = false,
          ) {
              val isVertical = orientation == Vertical
              val isRtl = layoutDirection == LayoutDirection.Rtl
              val isRtlHorizontal = isRtl && !isVertical
              val cornerSize = trackCornerSize.toPx()
              val sliderStart = 0f
              val sliderEnd = if (isVertical) size.height else size.width

              val isStartOnFirstOrLastStep =
                  activeRangeStart == tickFractions.firstOrNull() ||
                      activeRangeStart == tickFractions.lastOrNull()
              val isEndOnFirstOrLastStep =
                  activeRangeEnd == tickFractions.firstOrNull() ||
                      activeRangeEnd == tickFractions.lastOrNull()
              val sliderValueEnd =
                  if (tickFractions.isNotEmpty() && !isEndOnFirstOrLastStep) {
                      sliderStart +
                          (sliderEnd - sliderStart - cornerSize * 2) * activeRangeEnd +
                          cornerSize
                  } else {
  - id: live-androidx-material3-material3-material3-slider-lines-2446-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2446
    endLine: 2480
    sha256: e677f566c646660eff55df6cbcfb8a9aac82d3b1778e090f82f66a8e2040d327
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      sliderStart + (sliderEnd - sliderStart) * activeRangeEnd
                  }
              val sliderValueStart =
                  if (tickFractions.isNotEmpty() && !isStartOnFirstOrLastStep) {
                      sliderStart +
                          (sliderEnd - sliderStart - cornerSize * 2) * activeRangeStart +
                          cornerSize
                  } else {
                      sliderStart + (sliderEnd - sliderStart) * activeRangeStart
                  }

              val insideCornerSize = trackInsideCornerSize.toPx()
              var startGap = 0f
              var endGap = 0f
              if (isVertical) {
                  if (startThumbTrackGapSize > 0.dp) {
                      startGap = startThumbHeight.toPx() / 2 + startThumbTrackGapSize.toPx()
                  }
                  if (endThumbTrackGapSize > 0.dp) {
                      endGap = endThumbHeight.toPx() / 2 + endThumbTrackGapSize.toPx()
                  }
              } else {
                  if (startThumbTrackGapSize > 0.dp) {
                      startGap = startThumbWidth.toPx() / 2 + startThumbTrackGapSize.toPx()
                  }
                  if (endThumbTrackGapSize > 0.dp) {
                      endGap = endThumbWidth.toPx() / 2 + endThumbTrackGapSize.toPx()
                  }
              }
              val centerAxis = if (isVertical) center.y else center.x

              // inactive track (centered or range slider)
              var rangeInactiveTrackThreshold = sliderStart + startGap
              if (!enableCornerShrinking || tickFractions.isNotEmpty()) {
                  rangeInactiveTrackThreshold += cornerSize
  - id: live-androidx-material3-material3-material3-slider-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 246
    endLine: 280
    sha256: e2a528a2fa52ce86a9c7553ba587b21867a10b92eb9fb33186704a8c6c165a5f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * ![Sliders
       * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqe2zb2b-1.png?alt=media)
       *
       * Use continuous sliders to allow users to make meaningful selections that don’t require a specific
       * value:
       *
       * @sample androidx.compose.material3.samples.SliderSample
       *
       * You can allow the user to choose only between predefined set of values by specifying the amount
       * of steps between min and max values:
       *
       * @sample androidx.compose.material3.samples.StepsSliderSample
       *
       * Slider using a custom thumb:
       *
       * @sample androidx.compose.material3.samples.SliderWithCustomThumbSample
       *
       * Slider using custom track and thumb:
       *
       * @sample androidx.compose.material3.samples.SliderWithCustomTrackAndThumbSample
       *
       * Slider using track icons:
       *
       * @sample androidx.compose.material3.samples.SliderWithTrackIconsSample
       *
       * Continuous Slider with a centered track:
       *
       * @sample androidx.compose.material3.samples.CenteredSliderSample
       * @param state [SliderState] which contains the slider's current value.
       * @param onValueChange callback in which value should be updated from the [state] (e.g.
       *   `state.value = it`)
       * @param modifier the [Modifier] to be applied to this slider
       * @param enabled controls the enabled state of this slider. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
  - id: live-androidx-material3-material3-material3-slider-lines-2481-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2481
    endLine: 2515
    sha256: fcb265623d6cb4f106090779ee7356b5e1e96cfd25c801d3fcdb14f71d3e4c54
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
              val adjustedSliderValueEnd =
                  if (isCentered) {
                      min(sliderValueEnd, centerAxis)
                  } else {
                      sliderValueStart
                  }
              if ((isCentered || isRangeSlider) && adjustedSliderValueEnd > rangeInactiveTrackThreshold) {
                  val startCornerRadius = if (isRtlHorizontal) insideCornerSize else cornerSize
                  val endCornerRadius = if (isRtlHorizontal) cornerSize else insideCornerSize
                  val start = sliderStart
                  val end = adjustedSliderValueEnd - startGap
                  val trackOffset =
                      if (isRtlHorizontal) {
                          Offset(size.width - end, 0f)
                      } else {
                          Offset(0f, 0f)
                      }
                  val trackSize =
                      if (isVertical) {
                          Size(size.width, end - start)
                      } else {
                          Size(end - start, size.height)
                      }
                  drawTrackPath(
                      orientation,
                      trackOffset,
                      trackSize,
                      inactiveTrackColor,
                      startCornerRadius,
                      endCornerRadius,
                  )
                  val stopIndicatorOffset =
                      if (isVertical) {
                          Offset(center.x, start + cornerSize)
  - id: live-androidx-material3-material3-material3-slider-lines-2516-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2516
    endLine: 2550
    sha256: 6da54aed599ced2e2f47ab86f6888ed65da9ec369b8fdc04f86658b7751022d7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      } else if (isRtl) {
                          Offset(size.width - start - cornerSize, center.y)
                      } else {
                          Offset(start + cornerSize, center.y)
                      }
                  drawStopIndicator?.invoke(this, stopIndicatorOffset)
              }
              // inactive track
              var inactiveTrackThreshold = sliderEnd - endGap
              if (!enableCornerShrinking || tickFractions.isNotEmpty()) {
                  inactiveTrackThreshold -= cornerSize
              }
              val adjustedSliderValueStart =
                  if (isCentered) {
                      max(sliderValueEnd, centerAxis)
                  } else {
                      sliderValueEnd
                  }
              if (adjustedSliderValueStart < inactiveTrackThreshold) {
                  val startCornerRadius = if (isRtlHorizontal) cornerSize else insideCornerSize
                  val endCornerRadius = if (isRtlHorizontal) insideCornerSize else cornerSize
                  val start = adjustedSliderValueStart + endGap
                  val end = sliderEnd
                  val inactiveTrackWidth = end - start
                  val trackOffset =
                      if (isVertical) {
                          Offset(0f, start)
                      } else if (isRtl) {
                          Offset(0f, 0f)
                      } else {
                          Offset(start, 0f)
                      }
                  val size =
                      if (isVertical) {
                          Size(size.width, inactiveTrackWidth)
  - id: live-androidx-material3-material3-material3-slider-lines-2551-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2551
    endLine: 2585
    sha256: dfb74496e440b0051d53df17abca1c19cb6d1a9ce750732b8de072b5398b5ce6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      } else if (isRtl && !isRangeSlider) {
                          Size(size.width - start, size.height)
                      } else {
                          Size(inactiveTrackWidth, size.height)
                      }
                  drawTrackPath(
                      orientation,
                      trackOffset,
                      size,
                      inactiveTrackColor,
                      startCornerRadius,
                      endCornerRadius,
                  )
                  val stopIndicatorOffset =
                      if (isVertical) {
                          Offset(center.x, end - cornerSize)
                      } else if (isRtl) {
                          Offset(cornerSize, center.y)
                      } else {
                          Offset(end - cornerSize, center.y)
                      }
                  drawStopIndicator?.invoke(this, stopIndicatorOffset)
              }
              // active track
              val activeTrackStart =
                  if (isCentered) {
                      adjustedSliderValueEnd + if (adjustedSliderValueEnd < centerAxis) startGap else 0f
                  } else if (isRangeSlider) {
                      sliderValueStart + startGap
                  } else {
                      0f
                  }
              val activeTrackEnd =
                  if (isCentered) {
                      adjustedSliderValueStart - if (adjustedSliderValueStart > centerAxis) endGap else 0f
  - id: live-androidx-material3-material3-material3-slider-lines-2586-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2586
    endLine: 2620
    sha256: 9b718aab299d5aef5aa3c812fc28bf6500e0d77c9c7959d1fa60d6f86aa8cbec
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  } else {
                      sliderValueEnd - endGap
                  }
              val startCornerRadius =
                  if (isRtlHorizontal || isCentered || isRangeSlider) insideCornerSize else cornerSize
              val endCornerRadius =
                  if (isRtlHorizontal && !isCentered && !isRangeSlider) cornerSize else insideCornerSize
              val activeTrackWidth =
                  if (isRtlHorizontal && !isCentered && !isRangeSlider) activeTrackEnd
                  else activeTrackEnd - activeTrackStart

              val activeTrackThreshold =
                  if (!enableCornerShrinking || tickFractions.isNotEmpty()) startCornerRadius else 0f
              if (activeTrackWidth > activeTrackThreshold) {
                  val trackOffset =
                      if (isVertical) {
                          Offset(0f, activeTrackStart)
                      } else if (isRtl) {
                          Offset(size.width - activeTrackEnd, 0f)
                      } else {
                          Offset(activeTrackStart, 0f)
                      }

                  val size =
                      if (isVertical) {
                          Size(size.width, activeTrackWidth)
                      } else if (isRtl && !isCentered && !isRangeSlider) {
                          Size(activeTrackEnd, size.height)
                      } else {
                          Size(activeTrackWidth, size.height)
                      }
                  drawTrackPath(
                      orientation,
                      trackOffset,
                      size,
  - id: live-androidx-material3-material3-material3-slider-lines-2621-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2621
    endLine: 2655
    sha256: d25ad92944fcff209afb2626953ea0af30e74eb3da8f640ff4e845bc3c8af6cc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      activeTrackColor,
                      startCornerRadius,
                      endCornerRadius,
                  )
              }

              val start = sliderStart + cornerSize
              val end = sliderEnd - cornerSize
              val activeTrack = activeTrackStart..activeTrackEnd
              val tickCenterGap =
                  if (isCentered) {
                      val gap = if (sliderValueEnd > centerAxis) startGap else endGap
                      centerAxis - gap..centerAxis + gap
                  } else {
                      0f..0f
                  }
              val tickStartGap = sliderValueStart - startGap..sliderValueStart + startGap
              val tickEndGap =
                  if (isCentered) {
                      val gap = if (sliderValueEnd > centerAxis) endGap else startGap
                      sliderValueEnd - gap..sliderValueEnd + gap
                  } else {
                      sliderValueEnd - endGap..sliderValueEnd + endGap
                  }
              tickFractions.forEachIndexed { index, tick ->
                  // skip ticks that fall on the stop indicator
                  if (drawStopIndicator != null) {
                      val isStopIndicatorAtStart = (isCentered || isRangeSlider) && index == 0
                      if (isStopIndicatorAtStart || index == tickFractions.size - 1) {
                          return@forEachIndexed
                      }
                  }

                  val centerTick = lerp(start, end, tick)
                  // skip ticks that fall on a gap
  - id: live-androidx-material3-material3-material3-slider-lines-2656-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2656
    endLine: 2690
    sha256: 534c56931e22708f2fcfe0f2d3af85dc7c6aca3d53d66c8cb51143b6d9f7a203
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  if (
                      (isCentered && centerTick in tickCenterGap) ||
                          (isRangeSlider && centerTick in tickStartGap) ||
                          centerTick in tickEndGap
                  ) {
                      return@forEachIndexed
                  }
                  val offset =
                      if (isVertical) {
                          Offset(center.x, centerTick)
                      } else if (isRtl) {
                          Offset(size.width - centerTick, center.y)
                      } else {
                          Offset(centerTick, center.y)
                      }
                  drawTick(
                      this,
                      offset,
                      if (centerTick in activeTrack) activeTickColor else inactiveTickColor,
                  )
              }
          }

          private fun DrawScope.drawTrackPath(
              orientation: Orientation,
              offset: Offset,
              size: Size,
              color: Color,
              startCornerRadius: Float,
              endCornerRadius: Float,
          ) {
              val startCorner = CornerRadius(startCornerRadius, startCornerRadius)
              val endCorner = CornerRadius(endCornerRadius, endCornerRadius)
              val track =
                  if (orientation == Vertical) {
  - id: live-androidx-material3-material3-material3-slider-lines-2691-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2691
    endLine: 2725
    sha256: 059e4315213ae9a525a6c7ec9d46dc1dbee378ac19c26f575df0fbab8070dde5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                      RoundRect(
                          rect = Rect(offset, size = Size(size.width, size.height)),
                          topLeft = startCorner,
                          topRight = startCorner,
                          bottomRight = endCorner,
                          bottomLeft = endCorner,
                      )
                  } else {
                      RoundRect(
                          rect = Rect(offset, size = Size(size.width, size.height)),
                          topLeft = startCorner,
                          topRight = endCorner,
                          bottomRight = endCorner,
                          bottomLeft = startCorner,
                      )
                  }
              trackPath.addRoundRect(track)
              drawPath(trackPath, color)
              trackPath.rewind()
          }

          /**
           * The Default stop indicator.
           *
           * @param offset the coordinate where the indicator is to be drawn.
           * @param size the size of the indicator.
           * @param color the color of the indicator.
           */
          public fun DrawScope.drawStopIndicator(offset: Offset, size: Dp, color: Color) {
              drawCircle(color = color, center = offset, radius = size.toPx() / 2f)
          }

          /** The default size for the stop indicator at the end of the track. */
          public val TrackStopIndicatorSize: Dp = SliderTokens.StopIndicatorSize
  - id: live-androidx-material3-material3-material3-slider-lines-2726-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2726
    endLine: 2760
    sha256: ec3ca7caf242876407e474ec36801c6ff6d8df8f5501ea01d673b9c16bd942f3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /** The default size for the ticks if steps are greater than 0. */
          public val TickSize: Dp = SliderTokens.StopIndicatorSize

          private val trackPath = Path()
      }

      @Composable
      private fun ThumbContent(
          interactionSource: MutableInteractionSource,
          modifier: Modifier,
          colors: SliderColors,
          enabled: Boolean,
          thumbSize: DpSize,
          isVertical: Boolean,
      ) {
          val interactions = remember { mutableStateListOf<Interaction>() }
          LaunchedEffect(interactionSource) {
              interactionSource.interactions.collect { interaction ->
                  when (interaction) {
                      is FocusInteraction.Focus -> interactions.add(interaction)
                      is FocusInteraction.Unfocus -> interactions.remove(interaction.focus)
                      is PressInteraction.Press -> interactions.add(interaction)
                      is PressInteraction.Release -> interactions.remove(interaction.press)
                      is PressInteraction.Cancel -> interactions.remove(interaction.press)
                      is DragInteraction.Start -> interactions.add(interaction)
                      is DragInteraction.Stop -> interactions.remove(interaction.start)
                      is DragInteraction.Cancel -> interactions.remove(interaction.start)
                  }
              }
          }

          val size =
              if (interactions.isNotEmpty()) {
                  if (isVertical) {
                      thumbSize.copy(height = thumbSize.height / 2)
  - id: live-androidx-material3-material3-material3-slider-lines-2761-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2761
    endLine: 2795
    sha256: 745e7883e32dc11602dbf4c4db19956487ecc8ba2e5d5d5c9e77478a2a4a880a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  } else {
                      thumbSize.copy(width = thumbSize.width / 2)
                  }
              } else {
                  thumbSize
              }
          Box(
              modifier
                  .size(thumbSize)
                  .hoverable(interactionSource = interactionSource)
                  .pointerHoverIcon(icon = PointerIcon.Hand),
              contentAlignment = Alignment.Center,
          ) {
              Spacer(
                  Modifier.size(size)
                      .background(colors.thumbColor(enabled), SliderTokens.HandleShape.value)
              )
          }
      }

      private fun snapValueToTick(
          current: Float,
          tickFractions: FloatArray,
          minPx: Float,
          maxPx: Float,
      ): Float {
          if (tickFractions.isEmpty()) return current
          val totalSteps = tickFractions.size - 1
          var closestValue = current
          var minDistance = Float.POSITIVE_INFINITY
          for (i in tickFractions.indices) {
              val tickValue =
                  (minPx.toDouble() + (maxPx.toDouble() - minPx.toDouble()) * i / totalSteps).toFloat()
              val distance = abs(tickValue - current)
              if (distance < minDistance) {
  - id: live-androidx-material3-material3-material3-slider-lines-2796-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2796
    endLine: 2830
    sha256: c64cb51050299a2918707d452a769780b8834b325a7c560fc275f8f738d0fac4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  minDistance = distance
                  closestValue = tickValue
              }
          }
          return closestValue
      }

      private suspend fun AwaitPointerEventScope.awaitSlop(
          id: PointerId,
          type: PointerType,
      ): Pair<PointerInputChange, Float>? {
          var initialDelta = 0f
          val postPointerSlop = { pointerInput: PointerInputChange, offset: Float ->
              pointerInput.consume()
              initialDelta = offset
          }
          val afterSlopResult = awaitHorizontalPointerSlopOrCancellation(id, type, postPointerSlop)
          return if (afterSlopResult != null) afterSlopResult to initialDelta else null
      }

      private fun stepsToTickFractions(steps: Int): FloatArray {
          return if (steps == 0) floatArrayOf() else FloatArray(steps + 2) { it.toFloat() / (steps + 1) }
      }

      // Scale x1 from a1..b1 range to a2..b2 range
      private fun scale(a1: Float, b1: Float, x1: Float, a2: Float, b2: Float) =
          lerp(a2, b2, calcFraction(a1, b1, x1))

      // Calculate the 0..1 fraction that `pos` value represents between `a` and `b`
      private fun calcFraction(a: Float, b: Float, pos: Float) =
          (if (b - a == 0f) 0f else (pos - a) / (b - a)).coerceIn(0f, 1f)

      private fun Modifier.sliderSemantics(
          state: SliderState,
          enabled: Boolean,
  - id: live-androidx-material3-material3-material3-slider-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 281
    endLine: 315
    sha256: 5708d940900895f3bfb97079f4bebbd66f4ccf1730c4066025a6d183ff9c9150
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param onValueChangeFinished called when value change has ended. This should not be used to
       *   update the slider value (use [onValueChange] instead), but rather to know when the user has
       *   completed selecting a new value by ending a drag or a click. For keyboard movements, this is
       *   called on every step.
       * @param colors [SliderColors] that will be used to resolve the colors used for this slider in
       *   different states. See [SliderDefaults.colors].
       * @param interactionSource the [MutableInteractionSource] representing the stream of [Interaction]s
       *   for this slider. You can create and pass in your own `remember`ed instance to observe
       *   [Interaction]s and customize the appearance / behavior of this slider in different states.
       * @param thumb the thumb to be displayed on the slider, it is placed on top of the track. The
       *   lambda receives a [SliderState] which is used to obtain the current active track.
       * @param track the track to be displayed on the slider, it is placed underneath the thumb. The
       *   lambda receives a [SliderState] which is used to obtain the current active track.
       */
      @Composable
      public fun Slider(
          state: SliderState,
          onValueChange: (Float) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          onValueChangeFinished: (() -> Unit)? = null,
          colors: SliderColors = SliderDefaults.colors(),
          interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
          thumb: @Composable (SliderState) -> Unit = { _ ->
              SliderDefaults.Thumb(
                  interactionSource = interactionSource,
                  colors = colors,
                  enabled = enabled,
              )
          },
          track: @Composable (SliderState) -> Unit = { sliderState ->
              SliderDefaults.Track(colors = colors, enabled = enabled, sliderState = sliderState)
          },
      ) {
          require(state.steps >= 0) { "steps should be >= 0" }
  - id: live-androidx-material3-material3-material3-slider-lines-2831-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2831
    endLine: 2865
    sha256: 98fff873ddf73aa643c7839ec0f2348269fe120e42d1f08b9882917e3457bfef
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          onValueChange: (Float) -> Unit,
          onValueChangeFinished: (() -> Unit)?,
      ): Modifier {
          return semantics {
                  if (!enabled) disabled()
                  if (state.trackRange.start < 0f) {
                      stateDescription = state.value.formatForSemantics()
                  }
                  setProgress(
                      action = { targetValue ->
                          var newValue =
                              targetValue.coerceIn(state.trackRange.start, state.trackRange.endInclusive)
                          val originalVal = newValue
                          val resolvedValue =
                              if (state.steps > 0) {
                                  var distance: Float = newValue
                                  for (i in 0..state.steps + 1) {
                                      val stepValue =
                                          lerp(
                                              state.trackRange.start,
                                              state.trackRange.endInclusive,
                                              i.toFloat() / (state.steps + 1),
                                          )
                                      if (abs(stepValue - originalVal) <= distance) {
                                          distance = abs(stepValue - originalVal)
                                          newValue = stepValue
                                      }
                                  }
                                  newValue
                              } else {
                                  newValue
                              }

                          // This is to keep it consistent with AbsSeekbar.java: return false if no
                          // change from current.
  - id: live-androidx-material3-material3-material3-slider-lines-2866-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2866
    endLine: 2900
    sha256: b9f46da135774dba21455ca1804b7792688cf60d287b23f177aa21a1963e7f10
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          if (resolvedValue == state.value) {
                              false
                          } else {
                              onValueChange(resolvedValue)
                              onValueChangeFinished?.invoke()
                              true
                          }
                      }
                  )
                  progressBarRangeInfo =
                      ProgressBarRangeInfo(
                          state.value.coerceIn(state.trackRange.start, state.trackRange.endInclusive),
                          state.trackRange.start..state.trackRange.endInclusive,
                          state.steps,
                      )
              }
              .then(
                  if (state.orientation == Vertical) {
                      IncreaseVerticalSemanticsBounds
                  } else {
                      IncreaseHorizontalSemanticsBounds
                  }
              )
      }

      private fun Modifier.rangeSliderStartThumbSemantics(
          state: RangeSliderState,
          enabled: Boolean,
          onValueChange: (SliderRange) -> Unit,
          onValueChangeFinished: (() -> Unit)?,
      ): Modifier {
          return semantics {
                  val trackRange = state.trackRange.start..state.endValue
                  if (!enabled) disabled()
                  if (state.trackRange.start < 0f) {
  - id: live-androidx-material3-material3-material3-slider-lines-2901-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2901
    endLine: 2935
    sha256: 9316d3d37bfa3b0c69ba0ea90a0d227af8e6d5ebd80159a27946e55dc98405bb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      stateDescription = state.startValue.formatForSemantics()
                  }
                  setProgress(
                      action = { targetValue ->
                          val currentTrackRange = state.trackRange.start..state.endValue
                          var newValue =
                              targetValue.coerceIn(
                                  currentTrackRange.start,
                                  currentTrackRange.endInclusive,
                              )
                          val originalVal = newValue
                          val resolvedValue =
                              if (state.startSteps > 0) {
                                  var distance: Float = newValue
                                  for (i in 0..state.startSteps + 1) {
                                      val stepValue =
                                          lerp(
                                              currentTrackRange.start,
                                              currentTrackRange.endInclusive,
                                              i.toFloat() / (state.startSteps + 1),
                                          )
                                      if (abs(stepValue - originalVal) <= distance) {
                                          distance = abs(stepValue - originalVal)
                                          newValue = stepValue
                                      }
                                  }
                                  newValue
                              } else {
                                  newValue
                              }

                          // This is to keep it consistent with AbsSeekbar.java: return false if no
                          // change from current.
                          if (resolvedValue == state.startValue) {
                              false
  - id: live-androidx-material3-material3-material3-slider-lines-2936-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2936
    endLine: 2970
    sha256: 609fd6c6fffefa2e91f06644a2749f48571a277d8bf70424c13e70080e5bee1c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          } else {
                              val resolvedRange = SliderRange(resolvedValue, state.endValue)
                              val activeRange = SliderRange(state.startValue, state.endValue)
                              if (resolvedRange != activeRange) {
                                  onValueChange(resolvedRange)
                              }
                              onValueChangeFinished?.invoke()
                              true
                          }
                      }
                  )
                  progressBarRangeInfo =
                      ProgressBarRangeInfo(
                          state.startValue.coerceIn(trackRange.start, trackRange.endInclusive),
                          trackRange,
                          state.startSteps,
                      )
              }
              .then(IncreaseHorizontalSemanticsBounds)
      }

      private fun Modifier.rangeSliderEndThumbSemantics(
          state: RangeSliderState,
          enabled: Boolean,
          onValueChange: (SliderRange) -> Unit,
          onValueChangeFinished: (() -> Unit)?,
      ): Modifier {
          return semantics {
                  val trackRange = state.startValue..state.trackRange.endInclusive
                  if (!enabled) disabled()
                  if (state.trackRange.start < 0f) {
                      stateDescription = state.endValue.formatForSemantics()
                  }
                  setProgress(
                      action = { targetValue ->
  - id: live-androidx-material3-material3-material3-slider-lines-2971-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 2971
    endLine: 3005
    sha256: 9750d0b99f0939048522d6afbb3a5912c8dc4b04174184890043ebff320932cb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          val currentTrackRange = state.startValue..state.trackRange.endInclusive
                          var newValue =
                              targetValue.coerceIn(
                                  currentTrackRange.start,
                                  currentTrackRange.endInclusive,
                              )
                          val originalVal = newValue
                          val resolvedValue =
                              if (state.endSteps > 0) {
                                  var distance: Float = newValue
                                  for (i in 0..state.endSteps + 1) {
                                      val stepValue =
                                          lerp(
                                              currentTrackRange.start,
                                              currentTrackRange.endInclusive,
                                              i.toFloat() / (state.endSteps + 1),
                                          )
                                      if (abs(stepValue - originalVal) <= distance) {
                                          distance = abs(stepValue - originalVal)
                                          newValue = stepValue
                                      }
                                  }
                                  newValue
                              } else {
                                  newValue
                              }

                          // This is to keep it consistent with AbsSeekbar.java: return false if no
                          // change from current.
                          if (resolvedValue == state.endValue) {
                              false
                          } else {
                              val resolvedRange = SliderRange(state.startValue, resolvedValue)
                              val activeRange = SliderRange(state.startValue, state.endValue)
                              if (resolvedRange != activeRange) {
  - id: live-androidx-material3-material3-material3-slider-lines-3006-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3006
    endLine: 3040
    sha256: 90fdad80460029a03bda8366ca810ce5c5c4de510319e6c8a5f2306abfda25ea
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  onValueChange(resolvedRange)
                              }
                              onValueChangeFinished?.invoke()
                              true
                          }
                      }
                  )
                  progressBarRangeInfo =
                      ProgressBarRangeInfo(
                          state.endValue.coerceIn(trackRange.start, trackRange.endInclusive),
                          trackRange,
                          state.endSteps,
                      )
              }
              .then(IncreaseHorizontalSemanticsBounds)
      }

      private fun Float.formatForSemantics() = "${(this * 100).roundToInt() / 100f}"

      @Composable
      private fun Modifier.sliderTapModifier(
          state: SliderState,
          interactionSource: MutableInteractionSource,
          enabled: Boolean,
          onValueChange: (Float) -> Unit,
          onValueChangeFinished: (() -> Unit)?,
      ): Modifier {
          if (!enabled) return this
          val currentOnValueChange = rememberUpdatedState(onValueChange)
          val currentOnValueChangeFinished = rememberUpdatedState(onValueChangeFinished)
          return this.pointerInput(state, interactionSource) {
              coroutineScope {
                  detectTapGestures(
                      onPress = { offset ->
                          var press: PressInteraction.Press? = null
  - id: live-androidx-material3-material3-material3-slider-lines-3041-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3041
    endLine: 3075
    sha256: 73371efcdf682d0839d9d594f75fbe339571bd2c634be7e3f135199e09a7cd8a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          try {
                              press = PressInteraction.Press(offset)
                              interactionSource.tryEmit(press)
                              state.onPress(offset)
                              val success = tryAwaitRelease()
                              val release =
                                  if (success) {
                                      PressInteraction.Release(press)
                                  } else {
                                      PressInteraction.Cancel(press)
                                  }
                              // Emit the release or cancel interaction
                              interactionSource.tryEmit(release)
                              press = null
                          } finally {
                              press?.let { interactionSource.emit(PressInteraction.Cancel(it)) }
                          }
                      },
                      onTap = {
                          state.dispatchRawDeltaInternal(0f, currentOnValueChange.value)
                          if (!state.isDragging) {
                              currentOnValueChangeFinished.value?.invoke()
                          }
                      },
                  )
              }
          }
      }

      @Composable
      private fun Modifier.rangeSliderPressDragModifier(
          state: RangeSliderState,
          startThumbInteractionSource: MutableInteractionSource,
          endThumbInteractionSource: MutableInteractionSource,
          enabled: Boolean,
  - id: live-androidx-material3-material3-material3-slider-lines-3076-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3076
    endLine: 3110
    sha256: 176022f124903e19b000858a5d727a51b712f05eadd700b18e48f83da33fb8aa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          onValueChange: (SliderRange) -> Unit,
          onValueChangeFinished: (() -> Unit)?,
      ): Modifier {
          if (!enabled) return this
          val currentOnValueChange = rememberUpdatedState(onValueChange)
          val currentOnValueChangeFinished = rememberUpdatedState(onValueChangeFinished)
          return this.pointerInput(startThumbInteractionSource, endThumbInteractionSource, state) {
              val rangeSliderLogic =
                  RangeSliderLogic(
                      state,
                      startThumbInteractionSource,
                      endThumbInteractionSource,
                      currentOnValueChange,
                  )
              coroutineScope {
                  awaitEachGesture {
                      var activeDragInteraction: DragInteraction.Start? = null
                      var draggingStart = false
                      var press: PressInteraction.Press? = null

                      try {
                          val down = awaitFirstDown(requireUnconsumed = false)
                          state.updateMinMaxPx()

                          val posX =
                              if (state.isRtl) state.totalWidth - down.position.x else down.position.x
                          val compare = rangeSliderLogic.compareOffsets(posX)

                          draggingStart = if (compare != 0) compare < 0 else state.rawOffsetStart > posX

                          val interactionSource = rangeSliderLogic.activeInteraction(draggingStart)
                          press = PressInteraction.Press(down.position)
                          press?.let { launch { interactionSource.emit(it) } }

                          var drag: PointerInputChange?
  - id: live-androidx-material3-material3-material3-slider-lines-3111-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3111
    endLine: 3145
    sha256: b9dba28d11781b962fd43db2a0783c6f467491b8e7323588dc99665d10c855b3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          var overSlop = Offset.Zero
                          val pointerSlop = viewConfiguration.pointerSlop(down.type)

                          do {
                              drag = awaitPointerEvent().changes.firstOrNull()
                              if (drag != null) {
                                  overSlop += drag.positionChange()
                              }
                          } while (
                              drag != null &&
                                  drag.pressed &&
                                  overSlop.getDistanceSquared() < pointerSlop * pointerSlop
                          )

                          if (drag != null && abs(overSlop.x) > abs(overSlop.y)) {
                              // Consume the change that crossed the slop so that parent containers
                              // (e.g. a horizontalScroll) do not also pick up this gesture as a scroll.
                              drag.consume()

                              // The press is converted to a drag, so we cancel the press interaction
                              press?.let {
                                  launch { interactionSource.emit(PressInteraction.Cancel(it)) }
                              }

                              press = null

                              val shouldUpdateCapturedThumb =
                                  abs(state.rawOffsetEnd - posX) < pointerSlop &&
                                      abs(state.rawOffsetStart - posX) < pointerSlop
                              if (shouldUpdateCapturedThumb) {
                                  val dir = overSlop.x
                                  draggingStart = if (state.isRtl) dir >= 0f else dir < 0f
                              }

                              val dragInteractionSource =
  - id: live-androidx-material3-material3-material3-slider-lines-3146-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3146
    endLine: 3180
    sha256: 0375bc97e34b4f50ecf3925f99babb5a9f8f00256213817aec011481aaad7263
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  rangeSliderLogic.activeInteraction(draggingStart)
                              val interaction = DragInteraction.Start()
                              activeDragInteraction = interaction
                              launch { dragInteractionSource.emit(interaction) }

                              // Apply the slop from the initial drag detection
                              val initialOffset =
                                  posX - (if (draggingStart) state.rawOffsetStart else state.rawOffsetEnd)
                              val totalDragOffset =
                                  initialOffset + (if (state.isRtl) -overSlop.x else overSlop.x)
                              state.onDrag(draggingStart, totalDragOffset, currentOnValueChange.value)

                              // The main drag block now handles all subsequent movement.
                              state.isDragging = true
                              val success =
                                  horizontalDrag(down.id) { change ->
                                      val deltaX = change.positionChange().x
                                      state.onDrag(
                                          draggingStart,
                                          if (state.isRtl) -deltaX else deltaX,
                                          currentOnValueChange.value,
                                      )
                                      change.consume()
                                  }

                              state.isDragging = false

                              val finishInteraction =
                                  if (success) {
                                      DragInteraction.Stop(interaction)
                                  } else {
                                      DragInteraction.Cancel(interaction)
                                  }
                              currentOnValueChangeFinished.value?.invoke()
                              launch { dragInteractionSource.emit(finishInteraction) }
  - id: live-androidx-material3-material3-material3-slider-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 316
    endLine: 350
    sha256: 1ace9ed64d639e069cd3a8cdb902b4f609266c0e7b783752123db25f199b4b77
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          state.orientation = Horizontal
          state.reverseVerticalDirection = false

          SliderImpl(
              state = state,
              modifier = modifier,
              enabled = enabled,
              onValueChange = onValueChange,
              onValueChangeFinished = onValueChangeFinished,
              interactionSource = interactionSource,
              thumb = thumb,
              track = track,
          )
      }

      /**
       * [Material Design slider](https://m3.material.io/components/sliders/overview)
       *
       * Sliders allow users to make selections from a range of values.
       *
       * Sliders reflect a range of values along a bar, from which users may select a single value. They
       * are ideal for adjusting settings such as volume, brightness, or applying image filters.
       *
       * ![Sliders
       * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqe2zb2b-1.png?alt=media)
       *
       * Slider using custom track and thumb:
       *
       * @sample androidx.compose.material3.samples.SliderWithCustomTrackAndThumbSample
       *
       * Continuous Slider with a centered track:
       *
       * @sample androidx.compose.material3.samples.CenteredSliderSample
       * @param state [SliderState] which contains the slider's current value.
  - id: live-androidx-material3-material3-material3-slider-lines-3181-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3181
    endLine: 3215
    sha256: 5bb362ce285678ed1a0e47c8e0e68d49f3fcd1945521063f554d86081cac50f1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                              activeDragInteraction = null
                          } else if (drag?.pressed == false) {
                              // The press is completed, so emit a release.
                              press?.let {
                                  launch { interactionSource.emit(PressInteraction.Release(it)) }
                              }

                              press = null

                              // Perform the tap action to update the slider value
                              val offset =
                                  posX - if (draggingStart) state.rawOffsetStart else state.rawOffsetEnd
                              state.onDrag(draggingStart, offset, currentOnValueChange.value)
                              currentOnValueChangeFinished.value?.invoke()
                          } else { // Gesture is not a horizontal drag and pointer is still down
                              // (e.g.,
                              // vertical scroll)
                              // Cancel the press to dismiss the ripple and allow scrolling
                              press?.let {
                                  launch { interactionSource.emit(PressInteraction.Cancel(it)) }
                              }
                              press = null
                          }
                      } finally {
                          if (state.isDragging) {
                              // If we were dragging, clean up the state
                              activeDragInteraction?.let {
                                  val interactionSource =
                                      rangeSliderLogic.activeInteraction(draggingStart)
                                  launch { interactionSource.emit(DragInteraction.Cancel(it)) }
                              }
                              currentOnValueChangeFinished.value?.invoke()
                              state.isDragging = false
                          }
  - id: live-androidx-material3-material3-material3-slider-lines-3216-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3216
    endLine: 3250
    sha256: afe6aa8e09c9054df732d25dc4d48093768a7023479d17281510bb6402b3a074
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          press?.let {
                              val interactionSource = rangeSliderLogic.activeInteraction(draggingStart)
                              launch { interactionSource.emit(PressInteraction.Cancel(it)) }
                          }
                      }
                  }
              }
          }
      }

      private class RangeSliderLogic(
          val state: RangeSliderState,
          val startThumbInteractionSource: MutableInteractionSource,
          val endThumbInteractionSource: MutableInteractionSource,
          val onValueChange: State<(SliderRange) -> Unit>,
      ) {
          fun activeInteraction(draggingStart: Boolean): MutableInteractionSource =
              if (draggingStart) startThumbInteractionSource else endThumbInteractionSource

          fun compareOffsets(eventX: Float): Int {
              val diffStart = abs(state.rawOffsetStart - eventX)
              val diffEnd = abs(state.rawOffsetEnd - eventX)
              return diffStart.compareTo(diffEnd)
          }

          fun captureThumb(
              draggingStart: Boolean,
              posX: Float,
              interaction: Interaction,
              scope: CoroutineScope,
          ) {
              state.onDrag(
                  draggingStart,
                  posX - if (draggingStart) state.rawOffsetStart else state.rawOffsetEnd,
                  onValueChange.value,
  - id: live-androidx-material3-material3-material3-slider-lines-3251-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3251
    endLine: 3285
    sha256: 153e2338e734108fc8ddb882f3fc54da383a8e329b403a99398b645ef7ad0473
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              )
              scope.launch { activeInteraction(draggingStart).emit(interaction) }
          }
      }

      /**
       * Represents the color used by a [Slider] in different states.
       *
       * @param thumbColor thumb color when enabled
       * @param activeTrackColor color of the track in the part that is "active", meaning that the thumb
       *   is ahead of it
       * @param activeTickColor colors to be used to draw tick marks on the active track, if `steps` is
       *   specified
       * @param inactiveTrackColor color of the track in the part that is "inactive", meaning that the
       *   thumb is before it
       * @param inactiveTickColor colors to be used to draw tick marks on the inactive track, if `steps`
       *   are specified on the Slider is specified
       * @param disabledThumbColor thumb colors when disabled
       * @param disabledActiveTrackColor color of the track in the "active" part when the Slider is
       *   disabled
       * @param disabledActiveTickColor colors to be used to draw tick marks on the active track when
       *   Slider is disabled and when `steps` are specified on it
       * @param disabledInactiveTrackColor color of the track in the "inactive" part when the Slider is
       *   disabled
       * @param disabledInactiveTickColor colors to be used to draw tick marks on the inactive part of the
       *   track when Slider is disabled and when `steps` are specified on it
       * @constructor create an instance with arbitrary colors. See [SliderDefaults.colors] for the
       *   default implementation that follows Material specifications.
       */
      @Immutable
      public class SliderColors(
          public val thumbColor: Color,
          public val activeTrackColor: Color,
          public val activeTickColor: Color,
          public val inactiveTrackColor: Color,
  - id: live-androidx-material3-material3-material3-slider-lines-3286-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3286
    endLine: 3320
    sha256: 18a55a4568c706bf7d7baee894464a24b9efce8af8148bdeb4d4a2c2d5e434e9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val inactiveTickColor: Color,
          public val disabledThumbColor: Color,
          public val disabledActiveTrackColor: Color,
          public val disabledActiveTickColor: Color,
          public val disabledInactiveTrackColor: Color,
          public val disabledInactiveTickColor: Color,
      ) {

          /**
           * Returns a copy of this SelectableChipColors, optionally overriding some of the values. This
           * uses the Color.Unspecified to mean “use the value from the source”
           */
          public fun copy(
              thumbColor: Color = this.thumbColor,
              activeTrackColor: Color = this.activeTrackColor,
              activeTickColor: Color = this.activeTickColor,
              inactiveTrackColor: Color = this.inactiveTrackColor,
              inactiveTickColor: Color = this.inactiveTickColor,
              disabledThumbColor: Color = this.disabledThumbColor,
              disabledActiveTrackColor: Color = this.disabledActiveTrackColor,
              disabledActiveTickColor: Color = this.disabledActiveTickColor,
              disabledInactiveTrackColor: Color = this.disabledInactiveTrackColor,
              disabledInactiveTickColor: Color = this.disabledInactiveTickColor,
          ): SliderColors =
              SliderColors(
                  thumbColor.takeOrElse { this.thumbColor },
                  activeTrackColor.takeOrElse { this.activeTrackColor },
                  activeTickColor.takeOrElse { this.activeTickColor },
                  inactiveTrackColor.takeOrElse { this.inactiveTrackColor },
                  inactiveTickColor.takeOrElse { this.inactiveTickColor },
                  disabledThumbColor.takeOrElse { this.disabledThumbColor },
                  disabledActiveTrackColor.takeOrElse { this.disabledActiveTrackColor },
                  disabledActiveTickColor.takeOrElse { this.disabledActiveTickColor },
                  disabledInactiveTrackColor.takeOrElse { this.disabledInactiveTrackColor },
                  disabledInactiveTickColor.takeOrElse { this.disabledInactiveTickColor },
  - id: live-androidx-material3-material3-material3-slider-lines-3321-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3321
    endLine: 3355
    sha256: be808875d056cb8d42a1631d8212bb9fc182008bfe25422af1183040c2bd6a4b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              )

          @Stable
          internal fun thumbColor(enabled: Boolean): Color =
              if (enabled) thumbColor else disabledThumbColor

          @Stable
          internal fun trackColor(enabled: Boolean, active: Boolean): Color =
              if (enabled) {
                  if (active) activeTrackColor else inactiveTrackColor
              } else {
                  if (active) disabledActiveTrackColor else disabledInactiveTrackColor
              }

          @Stable
          internal fun tickColor(enabled: Boolean, active: Boolean): Color =
              if (enabled) {
                  if (active) activeTickColor else inactiveTickColor
              } else {
                  if (active) disabledActiveTickColor else disabledInactiveTickColor
              }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is SliderColors) return false

              if (thumbColor != other.thumbColor) return false
              if (activeTrackColor != other.activeTrackColor) return false
              if (activeTickColor != other.activeTickColor) return false
              if (inactiveTrackColor != other.inactiveTrackColor) return false
              if (inactiveTickColor != other.inactiveTickColor) return false
              if (disabledThumbColor != other.disabledThumbColor) return false
              if (disabledActiveTrackColor != other.disabledActiveTrackColor) return false
              if (disabledActiveTickColor != other.disabledActiveTickColor) return false
              if (disabledInactiveTrackColor != other.disabledInactiveTrackColor) return false
  - id: live-androidx-material3-material3-material3-slider-lines-3356-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3356
    endLine: 3390
    sha256: 77037f8f194931b83ad57a64bca596045bcfc682dec628bdcb39506faf9c48d8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (disabledInactiveTickColor != other.disabledInactiveTickColor) return false

              return true
          }

          override fun hashCode(): Int {
              var result = thumbColor.hashCode()
              result = 31 * result + activeTrackColor.hashCode()
              result = 31 * result + activeTickColor.hashCode()
              result = 31 * result + inactiveTrackColor.hashCode()
              result = 31 * result + inactiveTickColor.hashCode()
              result = 31 * result + disabledThumbColor.hashCode()
              result = 31 * result + disabledActiveTrackColor.hashCode()
              result = 31 * result + disabledActiveTickColor.hashCode()
              result = 31 * result + disabledInactiveTrackColor.hashCode()
              result = 31 * result + disabledInactiveTickColor.hashCode()
              return result
          }
      }

      // Internal to be referred to in tests
      internal val TrackHeight
          get() = SliderTokens.InactiveTrackHeight
      internal val ThumbWidth
          get() = SliderTokens.HandleWidth
      private val ThumbHeight
          get() = SliderTokens.HandleHeight
      private val ThumbSize
          get() = DpSize(ThumbWidth, ThumbHeight)
      private val VerticalThumbSize
          get() = DpSize(ThumbHeight, ThumbWidth)
      private val ThumbTrackGapSize: Dp
          get() = SliderTokens.ActiveHandleLeadingSpace
      private val TrackInsideCornerSize: Dp
          get() = 2.dp
  - id: live-androidx-material3-material3-material3-slider-lines-3391-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3391
    endLine: 3425
    sha256: e70fe2ad6aafdf6b24537b95e7d20d3d02229e7e3ea7a21c502f456e97096eaf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      private enum class SliderComponents {
          THUMB,
          TRACK,
      }

      private enum class RangeSliderComponents {
          ENDTHUMB,
          STARTTHUMB,
          TRACK,
      }

      /**
       * Class that holds information about [Slider]'s and [RangeSlider]'s active track and fractional
       * positions where the discrete ticks should be drawn on the track.
       */
      @Suppress("DEPRECATION")
      @Deprecated("Not necessary with the introduction of Slider state")
      @Stable
      public class SliderPositions(
          initialActiveRange: ClosedFloatingPointRange<Float> = 0f..1f,
          initialTickFractions: FloatArray = floatArrayOf(),
      ) {
          /**
           * [ClosedFloatingPointRange] that indicates the current active range for the start to thumb for
           * a [Slider] and start thumb to end thumb for a [RangeSlider].
           */
          public var activeRange: ClosedFloatingPointRange<Float> by mutableStateOf(initialActiveRange)
              internal set

          /**
           * The discrete points where a tick should be drawn on the track. Each value of tickFractions
           * should be within the range [0f, 1f]. If the track is continuous, then tickFractions will be
           * an empty [FloatArray].
           */
  - id: live-androidx-material3-material3-material3-slider-lines-3426-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3426
    endLine: 3460
    sha256: 26f5db37e45c4667451d2da9d641637e4b5067295e591dc061f3f9058bc247b1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public var tickFractions: FloatArray by mutableStateOf(initialTickFractions)
              internal set

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is SliderPositions) return false

              if (activeRange != other.activeRange) return false
              if (!tickFractions.contentEquals(other.tickFractions)) return false

              return true
          }

          override fun hashCode(): Int {
              var result = activeRange.hashCode()
              result = 31 * result + tickFractions.contentHashCode()
              return result
          }
      }

      /**
       * Class that holds information about [Slider]'s active range.
       *
       * @param value [Float] that indicates the initial position of the thumb. If outside of [trackRange]
       *   provided, value will be coerced to this range.
       * @param steps if positive, specifies the amount of discrete allowable values between the endpoints
       *   of [trackRange]. For example, a range from 0 to 10 with 4 [steps] allows 4 values evenly
       *   distributed between 0 and 10 (i.e., 2, 4, 6, 8). If [steps] is 0, the slider will behave
       *   continuously and allow any value from the range. Must not be negative.
       * @param trackRange range of values that Slider values can take. [value] will be coerced to this
       *   range.
       */
      @Stable
      public class SliderState
      @RememberInComposition
  - id: live-androidx-material3-material3-material3-slider-lines-3461-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3461
    endLine: 3495
    sha256: 0a6d411489b80c6f761087040fde47879f5be8f4fd01f83990d37e12317f65b6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public constructor(
          value: Float = 0f,
          @IntRange(from = 0) public val steps: Int = 0,
          public val trackRange: ClosedFloatingPointRange<Float> = 0f..1f,
      ) : DraggableState {

          private var valueState by mutableFloatStateOf(value)

          /** [Float] that indicates the value that the thumb currently is in respect to the track. */
          public var value: Float
              set(newVal) {
                  valueState =
                      if (shouldAutoSnap) {
                          calculateSnappedValue(newVal)
                      } else {
                          newVal
                      }
              }
              get() = valueState

          private fun calculateSnappedValue(newVal: Float): Float {
              val coercedValue = newVal.coerceIn(trackRange.start, trackRange.endInclusive)
              return snapValueToTick(
                  coercedValue,
                  tickFractions,
                  trackRange.start,
                  trackRange.endInclusive,
              )
          }

          override suspend fun drag(
              dragPriority: MutatePriority,
              block: suspend DragScope.() -> Unit,
          ): Unit = coroutineScope {
              isDragging = true
  - id: live-androidx-material3-material3-material3-slider-lines-3496-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3496
    endLine: 3530
    sha256: 43c4a53a419355501fe822937c8ce6d5ddad33986ce4fe7722ef8de7758bd6b0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              try {
                  scrollMutex.mutateWith(dragScope, dragPriority, block)
              } finally {
                  isDragging = false
              }
          }

          override fun dispatchRawDelta(delta: Float) {
              dispatchRawDeltaInternal(delta)
          }

          internal fun dispatchRawDeltaInternal(
              delta: Float,
              onValueChange: ((Float) -> Unit)? = null,
          ) {
              val maxPx: Float
              val minPx: Float
              if (orientation == Vertical) {
                  maxPx = max(totalHeight - thumbHeight / 2f, 0f)
                  minPx = min(thumbHeight / 2f, maxPx)
              } else {
                  maxPx = max(totalWidth - thumbWidth / 2f, 0f)
                  minPx = min(thumbWidth / 2f, maxPx)
              }
              rawOffset = (rawOffset + delta + pressOffset)
              pressOffset = 0f
              val offsetInTrack = rawOffset.coerceIn(minPx, maxPx)
              val scaledUserValue = calculateSnappedValue(scaleToUserValue(minPx, maxPx, offsetInTrack))
              if (scaledUserValue != this.value) {
                  if (onValueChange != null) {
                      onValueChange(scaledUserValue)
                  } else {
                      this.value = scaledUserValue
                  }
              }
  - id: live-androidx-material3-material3-material3-slider-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 351
    endLine: 385
    sha256: 8bb7cf4d812a2cc74055d7d76fd4c9a1dd2de46cc345392b239dfaa8e16452bc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param modifier the [Modifier] to be applied to this slider
       * @param enabled controls the enabled state of this slider. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param onValueChange callback in which value should be updated
       * @param onValueChangeFinished called when value change has ended. This should not be used to
       *   update the slider value (use [onValueChange] instead), but rather to know when the user has
       *   completed selecting a new value by ending a drag or a click. For keyboard movements, this is
       *   called on every step.
       * @param colors [SliderColors] that will be used to resolve the colors used for this slider in
       *   different states. See [SliderDefaults.colors].
       * @param interactionSource the [MutableInteractionSource] representing the stream of [Interaction]s
       *   for this slider. You can create and pass in your own `remember`ed instance to observe
       *   [Interaction]s and customize the appearance / behavior of this slider in different states.
       * @param thumb the thumb to be displayed on the slider, it is placed on top of the track. The
       *   lambda receives a [SliderState] which is used to obtain the current active track.
       * @param track the track to be displayed on the slider, it is placed underneath the thumb. The
       *   lambda receives a [SliderState] which is used to obtain the current active track.
       */
      @Deprecated(message = "Maintained for binary compatibility.", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun Slider(
          state: SliderState,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          onValueChange: ((Float) -> Unit)? = null,
          onValueChangeFinished: (() -> Unit)? = null,
          colors: SliderColors = SliderDefaults.colors(),
          interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
          thumb: @Composable (SliderState) -> Unit = { _ ->
              SliderDefaults.Thumb(
                  interactionSource = interactionSource,
                  colors = colors,
                  enabled = enabled,
              )
  - id: live-androidx-material3-material3-material3-slider-lines-3531-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3531
    endLine: 3565
    sha256: 6eb3e5f8a9c31526338577b107a6f7cca62458f1491e417e2afa010fab925dbd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          /**
           * Controls the auto-snapping mechanism for slider steps.
           *
           * When `true` (default), any updates to [value] will automatically snap to the nearest tick
           * fraction based on the number of [steps].
           *
           * Disabling auto-snapping (`false`) allows [value] to be set to any continuous value between
           * [trackRange] without snapping. This is particularly useful for programmatic animations,
           * smooth transitions, or custom drag gestures where discrete step snapping is temporarily or
           * permanently undesired.
           *
           * Since this is defined on the state, it can be dynamically toggled during gestures or
           * animations without triggering a full layout recomposition.
           */
          @get:JvmName("shouldAutoSnap") public var shouldAutoSnap: Boolean = true

          internal val tickFractions = stepsToTickFractions(steps)
          private var totalWidth by mutableIntStateOf(0)
          private var totalHeight by mutableIntStateOf(0)
          internal var orientation = Horizontal
          internal var reverseVerticalDirection = false
          internal var isRtl = false
          internal var isFocused by mutableStateOf(false)
          internal var thumbWidth by mutableIntStateOf(0)
          internal var thumbHeight by mutableIntStateOf(0)

          /**
           * The fraction of the track that the thumb currently occupies.
           *
           * The value is coerced (clamped) to the bounds of [trackRange] before calculating its
           * fractional position (from `0f` to `1f`) on the track.
           */
          @get:FloatRange(from = 0.0, to = 1.0)
  - id: live-androidx-material3-material3-material3-slider-lines-3566-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3566
    endLine: 3600
    sha256: a339cafcf09dc0c059606ae8b304f74d3050a29cbb21227368012caa9c809837
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val coercedValueAsFraction: Float
              get() =
                  calcFraction(
                      trackRange.start,
                      trackRange.endInclusive,
                      value.coerceIn(trackRange.start, trackRange.endInclusive),
                  )

          /**
           * Indicates whether the slider is currently being dragged.
           *
           * This is set to `true` when a drag gesture starts (either via user touch interaction or
           * programmatically via `drag`) and set back to `false` when the gesture completes or is
           * cancelled.
           */
          public var isDragging: Boolean by mutableStateOf(false)
              internal set

          internal fun updateDimensions(newTotalWidth: Int, newTotalHeight: Int) {
              totalWidth = newTotalWidth
              totalHeight = newTotalHeight
          }

          internal fun onPress(pos: Offset) {
              val to =
                  if (orientation == Vertical) {
                      if (reverseVerticalDirection) totalHeight - pos.y else pos.y
                  } else {
                      if (isRtl) totalWidth - pos.x else pos.x
                  }
              pressOffset = to - rawOffset
          }

          private var rawOffset by mutableFloatStateOf(scaleToOffset(0f, 0f, value))
          private var pressOffset by mutableFloatStateOf(0f)
  - id: live-androidx-material3-material3-material3-slider-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 36
    endLine: 70
    sha256: 8a758cb2cfb4060312ed1c27c0f7f9f2072d8b40c4c0ac0d903e826f031e4a1c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.foundation.gestures.rememberDraggableState
      import androidx.compose.foundation.hoverable
      import androidx.compose.foundation.indication
      import androidx.compose.foundation.interaction.DragInteraction
      import androidx.compose.foundation.interaction.FocusInteraction
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.interaction.PressInteraction
      import androidx.compose.foundation.interaction.collectIsFocusedAsState
      import androidx.compose.foundation.layout.Box
      import androidx.compose.foundation.layout.Spacer
      import androidx.compose.foundation.layout.fillMaxHeight
      import androidx.compose.foundation.layout.fillMaxWidth
      import androidx.compose.foundation.layout.height
      import androidx.compose.foundation.layout.padding
      import androidx.compose.foundation.layout.requiredSizeIn
      import androidx.compose.foundation.layout.size
      import androidx.compose.foundation.layout.width
      import androidx.compose.foundation.layout.wrapContentHeight
      import androidx.compose.foundation.layout.wrapContentWidth
      import androidx.compose.material3.RangeSliderState.Companion.Saver
      import androidx.compose.material3.SliderState.Companion.Saver
      import androidx.compose.material3.internal.IncreaseHorizontalSemanticsBounds
      import androidx.compose.material3.internal.IncreaseVerticalSemanticsBounds
      import androidx.compose.material3.internal.Strings
      import androidx.compose.material3.internal.awaitHorizontalPointerSlopOrCancellation
      import androidx.compose.material3.internal.getString
      import androidx.compose.material3.internal.pointerSlop
      import androidx.compose.material3.tokens.SliderTokens
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.LaunchedEffect
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.State
      import androidx.compose.runtime.annotation.RememberInComposition
  - id: live-androidx-material3-material3-material3-slider-lines-3601-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3601
    endLine: 3635
    sha256: 05e964c6d042bb74ab5e6470461ed9764318e18bdc51b9ce0dfd5a44b7c5097a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          private val dragScope: DragScope =
              object : DragScope {
                  override fun dragBy(pixels: Float): Unit = dispatchRawDeltaInternal(pixels)
              }

          private val scrollMutex = MutatorMutex()

          private fun scaleToUserValue(minPx: Float, maxPx: Float, offset: Float) =
              scale(minPx, maxPx, offset, trackRange.start, trackRange.endInclusive)

          private fun scaleToOffset(minPx: Float, maxPx: Float, userValue: Float) =
              scale(trackRange.start, trackRange.endInclusive, userValue, minPx, maxPx)

          public companion object {
              /**
               * The default [Saver] implementation for [SliderState].
               *
               * @param steps if positive, specifies the amount of discrete allowable values between the
               *   endpoints of [trackRange].
               * @param trackRange range of values that Slider values can take. [value] will be coerced to
               *   this range.
               */
              public fun Saver(
                  steps: Int,
                  trackRange: ClosedFloatingPointRange<Float>,
              ): Saver<SliderState, *> =
                  listSaver(
                      save = { listOf(it.value) },
                      restore = {
                          SliderState(value = it[0] as Float, steps = steps, trackRange = trackRange)
                      },
                  )
          }
      }
  - id: live-androidx-material3-material3-material3-slider-lines-3636-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3636
    endLine: 3670
    sha256: 6df6588534e99d4dfdbd836f07a7e81b39129fb66e4022c4b05a016b277346cf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * Creates a [SliderState] that is remembered across compositions.
       *
       * Changes to the provided initial values will **not** result in the state being recreated or
       * changed in any way if it has already been created.
       *
       * @param value [Float] that indicates the initial position of the thumb. If outside of [trackRange]
       *   provided, value will be coerced to this range.
       * @param steps if positive, specifies the amount of discrete allowable values between the endpoints
       *   of [trackRange]. For example, a range from 0 to 10 with 4 [steps] allows 4 values evenly
       *   distributed between 0 and 10 (i.e., 2, 4, 6, 8). If [steps] is 0, the slider will behave
       *   continuously and allow any value from the range. Must not be negative.
       * @param trackRange range of values that Slider values can take. [value] will be coerced to this
       *   range.
       */
      @Composable
      public fun rememberSliderState(
          value: Float = 0f,
          @IntRange(from = 0) steps: Int = 0,
          trackRange: ClosedFloatingPointRange<Float> = 0f..1f,
      ): SliderState {
          return rememberSaveable(saver = SliderState.Saver(steps = steps, trackRange = trackRange)) {
              SliderState(value = value, steps = steps, trackRange = trackRange)
          }
      }

      /**
       * Class that holds information about [RangeSlider]'s active range.
       *
       * @param startValue [Float] that indicates the initial start value of the selected range (for the
       *   start thumb). This represents a specific position on the track and is coerced to the bounds of
       *   [trackRange].
       * @param endValue [Float] that indicates the initial end value of the selected range (for the end
       *   thumb). This represents a specific position on the track and is coerced to the bounds of
       *   [trackRange].
  - id: live-androidx-material3-material3-material3-slider-lines-3671-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3671
    endLine: 3705
    sha256: 29602cb92e7e879e41d65a35438b5cb8664e0285e3f7f3c34dbe504b33a663a4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param steps if positive, specifies the amount of discrete allowable values between the endpoints
       *   of [trackRange]. For example, a range from 0 to 10 with 4 [steps] allows 4 values evenly
       *   distributed between 0 and 10 (i.e., 2, 4, 6, 8). If [steps] is 0, the slider will behave
       *   continuously and allow any value from the range. Must not be negative.
       * @param trackRange the full range of values that the entire Range Slider track represents. This
       *   defines the absolute boundaries/constraints of the slider (from minimum to maximum), and the
       *   individual thumb values ([startValue] and [endValue]) are coerced to this range.
       */
      @Stable
      public class RangeSliderState
      @RememberInComposition
      public constructor(
          startValue: Float = 0f,
          endValue: Float = 1f,
          @IntRange(from = 0) public val steps: Int = 0,
          public val trackRange: ClosedFloatingPointRange<Float> = 0f..1f,
      ) {

          private val coercedStart = startValue.coerceIn(trackRange)
          private val coercedEnd = endValue.coerceIn(trackRange)
          private var startValueState by mutableFloatStateOf(minOf(coercedStart, coercedEnd))
          private var endValueState by mutableFloatStateOf(maxOf(coercedStart, coercedEnd))

          /** [Float] that indicates the start of the selected range for the [RangeSlider]. */
          public var startValue: Float
              set(newVal) {
                  val coercedValue = newVal.coerceIn(trackRange.start, endValue)
                  val snappedValue =
                      snapValueToTick(
                          coercedValue,
                          tickFractions,
                          trackRange.start,
                          trackRange.endInclusive,
                      )
                  startValueState = snappedValue
  - id: live-androidx-material3-material3-material3-slider-lines-3706-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3706
    endLine: 3740
    sha256: 3e0fdbc3a31d7c4221b6e2ebd7adde521038d9b17df1ac04d88858a0a4a1067a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
              get() = startValueState

          /** [Float] that indicates the end of the selected range for the [RangeSlider]. */
          public var endValue: Float
              set(newVal) {
                  val coercedValue = newVal.coerceIn(startValue, trackRange.endInclusive)
                  val snappedValue =
                      snapValueToTick(
                          coercedValue,
                          tickFractions,
                          trackRange.start,
                          trackRange.endInclusive,
                      )
                  endValueState = snappedValue
              }
              get() = endValueState

          internal val tickFractions = stepsToTickFractions(steps)

          internal var startThumbWidth by mutableFloatStateOf(0f)
          internal var startThumbHeight by mutableFloatStateOf(0f)
          internal var endThumbWidth by mutableFloatStateOf(0f)
          internal var endThumbHeight by mutableFloatStateOf(0f)
          internal var totalWidth by mutableIntStateOf(0)
          internal var rawOffsetStart by mutableFloatStateOf(0f)
          internal var rawOffsetEnd by mutableFloatStateOf(0f)
          internal var isDragging by mutableStateOf(false)

          internal var isRtl by mutableStateOf(false)
          internal var isStartFocused by mutableStateOf(false)
          internal var isEndFocused by mutableStateOf(false)

          private var maxPx by mutableFloatStateOf(0f)
          private var minPx by mutableFloatStateOf(0f)
  - id: live-androidx-material3-material3-material3-slider-lines-3741-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3741
    endLine: 3775
    sha256: cc851c7f7922151ccb62ea32f46e8c5c3e494b64f44e448ff16cc5235ae0e629
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          internal fun onDrag(
              isStart: Boolean,
              offset: Float,
              onValueChange: ((SliderRange) -> Unit)? = null,
          ) {
              val scaledUserValue =
                  if (isStart) {
                      rawOffsetStart = (rawOffsetStart + offset)
                      rawOffsetEnd = scaleToOffset(minPx, maxPx, endValue)
                      val offsetEnd = rawOffsetEnd
                      val offsetStart = rawOffsetStart.coerceIn(minPx, offsetEnd)
                      val userStart =
                          snapValueToTick(
                              scaleToUserValue(minPx, maxPx, offsetStart),
                              tickFractions,
                              trackRange.start,
                              trackRange.endInclusive,
                          )
                      SliderRange(userStart.coerceAtMost(endValue), endValue)
                  } else {
                      rawOffsetEnd = (rawOffsetEnd + offset)
                      rawOffsetStart = scaleToOffset(minPx, maxPx, startValue)
                      val offsetStart = rawOffsetStart
                      val offsetEnd = rawOffsetEnd.coerceIn(offsetStart, maxPx)
                      val userEnd =
                          snapValueToTick(
                              scaleToUserValue(minPx, maxPx, offsetEnd),
                              tickFractions,
                              trackRange.start,
                              trackRange.endInclusive,
                          )
                      SliderRange(startValue, userEnd.coerceAtLeast(startValue))
                  }
              if (scaledUserValue != SliderRange(startValue, endValue)) {
  - id: live-androidx-material3-material3-material3-slider-lines-3776-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3776
    endLine: 3810
    sha256: 8ba8fbc68ed5897c56c70c40a46c9879136834a496704a682bd99fd42e7c21e7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  if (onValueChange != null) {
                      onValueChange(scaledUserValue)
                  } else {
                      this.startValue = scaledUserValue.start
                      this.endValue = scaledUserValue.endInclusive
                  }
              }
          }

          internal val coercedStartValueAsFraction
              get() = calcFraction(trackRange.start, trackRange.endInclusive, startValue)

          internal val coercedEndValueAsFraction
              get() = calcFraction(trackRange.start, trackRange.endInclusive, endValue)

          internal val startSteps
              get() = floor(steps * coercedEndValueAsFraction).toInt()

          internal val endSteps
              get() = floor(steps * (1f - coercedStartValueAsFraction)).toInt()

          // scales offset from within minPx..maxPx to within trackRange.start..trackRange.end
          private fun scaleToUserValue(minPx: Float, maxPx: Float, offset: Float) =
              scale(minPx, maxPx, offset, trackRange.start, trackRange.endInclusive)

          // scales float userValue within trackRange.start..trackRange.end to within minPx..maxPx
          private fun scaleToOffset(minPx: Float, maxPx: Float, userValue: Float) =
              scale(trackRange.start, trackRange.endInclusive, userValue, minPx, maxPx)

          internal fun updateMinMaxPx() {
              val newMaxPx = max(totalWidth - endThumbWidth / 2, 0f)
              val newMinPx = min(startThumbWidth / 2, newMaxPx)
              if (!isDragging) {
                  minPx = newMinPx
                  maxPx = newMaxPx
  - id: live-androidx-material3-material3-material3-slider-lines-3811-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3811
    endLine: 3845
    sha256: a7ffb063970acdc0fd9753c253e81d60a05f848c88e7e5641e8247a36e23888b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  rawOffsetStart = scaleToOffset(minPx, maxPx, startValue)
                  rawOffsetEnd = scaleToOffset(minPx, maxPx, endValue)
              }
          }

          public companion object {
              /**
               * The default [Saver] implementation for [RangeSliderState].
               *
               * @param steps if positive, specifies the amount of discrete allowable values between the
               *   endpoints of [trackRange].
               * @param trackRange range of values that Range Slider values can take. [startValue] and
               *   [endValue] will be coerced to this range.
               */
              public fun Saver(
                  steps: Int,
                  trackRange: ClosedFloatingPointRange<Float>,
              ): Saver<RangeSliderState, *> =
                  listSaver(
                      save = { listOf(it.startValue, it.endValue) },
                      restore = {
                          RangeSliderState(
                              startValue = it[0] as Float,
                              endValue = it[1] as Float,
                              steps = steps,
                              trackRange = trackRange,
                          )
                      },
                  )
          }
      }

      /**
       * Creates a [RangeSliderState] that is remembered across compositions.
       *
  - id: live-androidx-material3-material3-material3-slider-lines-3846-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3846
    endLine: 3880
    sha256: c94a1cbd79be9a7d6162abfbc1542b619a9c325b3ccbb143ccfd29046234b372
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Changes to the provided initial values will **not** result in the state being recreated or
       * changed in any way if it has already been created.
       *
       * @param startValue [Float] that indicates the initial start value of the selected range (for the
       *   start thumb). This represents a specific position on the track and is coerced to the bounds of
       *   [trackRange].
       * @param endValue [Float] that indicates the initial end value of the selected range (for the end
       *   thumb). This represents a specific position on the track and is coerced to the bounds of
       *   [trackRange].
       * @param steps if positive, specifies the amount of discrete allowable values between the endpoints
       *   of [trackRange]. For example, a range from 0 to 10 with 4 [steps] allows 4 values evenly
       *   distributed between 0 and 10 (i.e., 2, 4, 6, 8). If [steps] is 0, the slider will behave
       *   continuously and allow any value from the range. Must not be negative.
       * @param trackRange the full range of values that the entire Range Slider track represents. This
       *   defines the absolute boundaries/constraints of the slider (from minimum to maximum), and the
       *   individual thumb values ([startValue] and [endValue]) are coerced to this range.
       */
      @Composable
      public fun rememberRangeSliderState(
          startValue: Float = 0f,
          endValue: Float = 1f,
          @IntRange(from = 0) steps: Int = 0,
          trackRange: ClosedFloatingPointRange<Float> = 0f..1f,
      ): RangeSliderState {
          return rememberSaveable(
              saver = RangeSliderState.Saver(steps = steps, trackRange = trackRange)
          ) {
              RangeSliderState(
                  startValue = startValue,
                  endValue = endValue,
                  steps = steps,
                  trackRange = trackRange,
              )
          }
      }
  - id: live-androidx-material3-material3-material3-slider-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 386
    endLine: 420
    sha256: 6bb971c43f835e76e831b8dde759ecb1a72f76a5929711f92bb083d17f9a3a65
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          },
          track: @Composable (SliderState) -> Unit = { sliderState ->
              SliderDefaults.Track(colors = colors, enabled = enabled, sliderState = sliderState)
          },
      ) {
          Slider(
              state = state,
              onValueChange = onValueChange ?: { state.value = it },
              modifier = modifier,
              enabled = enabled,
              onValueChangeFinished = onValueChangeFinished,
              colors = colors,
              interactionSource = interactionSource,
              thumb = thumb,
              track = track,
          )
      }

      /**
       * [Material Design slider](https://m3.material.io/components/sliders/overview)
       *
       * Vertical Sliders allow users to make selections from a range of values.
       *
       * Vertical Sliders reflect a range of values along a vertical bar, from which users may select a
       * single value. They are ideal for adjusting settings such as volume, brightness, or applying image
       * filters.
       *
       * ![Vertical sliders
       * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk1j0t-05.png?alt=media&token=3b884058-21ca-4d72-ba5e-5afdb59fa01e)
       *
       * Vertical Slider:
       *
       * @sample androidx.compose.material3.samples.VerticalSliderSample
       *
       * Vertical Slider with a centered track:
  - id: live-androidx-material3-material3-material3-slider-lines-3881-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3881
    endLine: 3915
    sha256: c2a0a6525b7e65d8591672df324285da1059bd7801da4f8957f2a260315e7436
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Immutable float range for [RangeSlider]
       *
       * Used in [RangeSlider] to determine the active track range for the component. The range is as
       * follows: SliderRange.start..SliderRange.endInclusive.
       */
      @Immutable
      @JvmInline
      internal value class SliderRange(val packedValue: Long) {
          /** start of the [SliderRange] */
          @Stable
          val start: Float
              get() {
                  // Explicitly compare against packed values to avoid auto-boxing of Size.Unspecified
                  check(this.packedValue != Unspecified.packedValue) { "SliderRange is unspecified" }
                  return unpackFloat1(packedValue)
              }

          /** End (inclusive) of the [SliderRange] */
          @Stable
          val endInclusive: Float
              get() {
                  // Explicitly compare against packed values to avoid auto-boxing of Size.Unspecified
                  check(this.packedValue != Unspecified.packedValue) { "SliderRange is unspecified" }
                  return unpackFloat2(packedValue)
              }

          companion object {
              /**
               * Represents an unspecified [SliderRange] value, usually a replacement for `null` when a
               * primitive value is desired.
               */
              @Stable
              val Unspecified
  - id: live-androidx-material3-material3-material3-slider-lines-3916-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3916
    endLine: 3950
    sha256: b8124cdb0149ea89fbbb91f70aeed0d6385d768ff42b558d347163a9a349c027
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  get() = SliderRange(Float.NaN, Float.NaN)
          }

          /** String representation of the [SliderRange] */
          override fun toString() =
              if (isSpecified) {
                  "$start..$endInclusive"
              } else {
                  "FloatRange.Unspecified"
              }
      }

      /**
       * Creates a [SliderRange] from a given start and endInclusive float. It requires endInclusive to
       * be >= start.
       *
       * @param start float that indicates the start of the range
       * @param endInclusive float that indicates the end of the range
       */
      @Stable
      internal fun SliderRange(start: Float, endInclusive: Float): SliderRange {
          val isUnspecified = start.isNaN() && endInclusive.isNaN()

          require(isUnspecified || start <= endInclusive) {
              "start($start) must be <= endInclusive($endInclusive)"
          }
          return SliderRange(packFloats(start, endInclusive))
      }

      /**
       * Creates a [SliderRange] from a given [ClosedFloatingPointRange]. It requires
       * range.endInclusive >= range.start.
       *
       * @param range the ClosedFloatingPointRange<Float> for the range.
       */
  - id: live-androidx-material3-material3-material3-slider-lines-3951-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 3951
    endLine: 3972
    sha256: 4c8a3fb2e267e143e53a7905b977aabb8a93403bf5b730e6aafe2f0d7ac01f06
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      @Stable
      internal fun SliderRange(range: ClosedFloatingPointRange<Float>): SliderRange {
          val start = range.start
          val endInclusive = range.endInclusive
          val isUnspecified = start.isNaN() && endInclusive.isNaN()
          require(isUnspecified || start <= endInclusive) {
              "ClosedFloatingPointRange<Float>.start($start) must be <= " +
                  "ClosedFloatingPoint.endInclusive($endInclusive)"
          }
          return SliderRange(packFloats(start, endInclusive))
      }

      /** Check for if a given [SliderRange] is not [SliderRange.Unspecified]. */
      @Stable
      internal val SliderRange.isSpecified: Boolean
          get() = packedValue != SliderRange.Unspecified.packedValue

      internal val CornerSizeAlignmentLine = VerticalAlignmentLine(::min)

      private val insetFocusRingPadding
          get() = 4.dp
  - id: live-androidx-material3-material3-material3-slider-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 421
    endLine: 455
    sha256: ab70a4cebe37e6c1eeb660876e67eb6b1e1a27b6dbfcd2f402ee09e5dda60c29
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @sample androidx.compose.material3.samples.VerticalCenteredSliderSample
       * @param state [SliderState] which contains the slider's current value.
       * @param onValueChange callback in which value should be updated from the [state] (e.g.
       *   `state.value = it`)
       * @param modifier the [Modifier] to be applied to this slider
       * @param enabled controls the enabled state of this slider. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param onValueChangeFinished called when value change has ended. This should not be used to
       *   update the slider value (use [onValueChange] instead), but rather to know when the user has
       *   completed selecting a new value by ending a drag or a click. For keyboard movements, this is
       *   called on every step.
       * @param topToBottom controls the direction of this slider. When true (default), the slider
       *   progresses from top to bottom (top represents the minimum value and bottom represents the
       *   maximum value). When false, the slider progresses from bottom to top (bottom represents the
       *   minimum value and top represents the maximum value).
       * @param colors [SliderColors] that will be used to resolve the colors used for this slider in
       *   different states. See [SliderDefaults.colors].
       * @param interactionSource the [MutableInteractionSource] representing the stream of [Interaction]s
       *   for this slider. You can create and pass in your own `remember`ed instance to observe
       *   [Interaction]s and customize the appearance / behavior of this slider in different states.
       * @param thumb the thumb to be displayed on the slider, it is placed on top of the track. The
       *   lambda receives a [SliderState] which is used to obtain the current active track.
       * @param track the track to be displayed on the slider, it is placed underneath the thumb. The
       *   lambda receives a [SliderState] which is used to obtain the current active track.
       *
       * @material3expressive
       */
      @Composable
      public fun VerticalSlider(
          state: SliderState,
          onValueChange: (Float) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
  - id: live-androidx-material3-material3-material3-slider-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 456
    endLine: 490
    sha256: d0e0b98820098130183e921b14b1943d16453e6e37bdef76f65403d68ecdf2da
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          onValueChangeFinished: (() -> Unit)? = null,
          topToBottom: Boolean = true,
          colors: SliderColors = SliderDefaults.colors(),
          interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
          thumb: @Composable (SliderState) -> Unit = { _ ->
              SliderDefaults.Thumb(
                  interactionSource = interactionSource,
                  isVertical = true,
                  colors = colors,
                  enabled = enabled,
                  thumbSize = VerticalThumbSize,
              )
          },
          track: @Composable (SliderState) -> Unit = { sliderState ->
              SliderDefaults.Track(
                  colors = colors,
                  enabled = enabled,
                  sliderState = sliderState,
                  trackCornerSize = Dp.Unspecified,
              )
          },
      ) {
          require(state.steps >= 0) { "steps should be >= 0" }

          state.orientation = Vertical
          state.reverseVerticalDirection = !topToBottom

          SliderImpl(
              state = state,
              modifier = modifier,
              enabled = enabled,
              onValueChange = onValueChange,
              onValueChangeFinished = onValueChangeFinished,
              interactionSource = interactionSource,
              thumb = thumb,
  - id: live-androidx-material3-material3-material3-slider-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 491
    endLine: 525
    sha256: 5cd759c443f6078f2ed0423ba952c5d52a31ad61eb42b5ef4e2af83d7f02f6e1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              track = track,
          )
      }

      /**
       * [Material Design slider](https://m3.material.io/components/sliders/overview)
       *
       * Vertical Sliders allow users to make selections from a range of values.
       *
       * Vertical Sliders reflect a range of values along a vertical bar, from which users may select a
       * single value. They are ideal for adjusting settings such as volume, brightness, or applying image
       * filters.
       *
       * ![Vertical sliders
       * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk1j0t-05.png?alt=media&token=3b884058-21ca-4d72-ba5e-5afdb59fa01e)
       *
       * Vertical Slider:
       *
       * @sample androidx.compose.material3.samples.VerticalSliderSample
       *
       * Vertical Slider with a centered track:
       *
       * @sample androidx.compose.material3.samples.VerticalCenteredSliderSample
       * @param state [SliderState] which contains the slider's current value.
       * @param modifier the [Modifier] to be applied to this slider
       * @param enabled controls the enabled state of this slider. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param onValueChange callback in which value should be updated
       * @param onValueChangeFinished called when value change has ended. This should not be used to
       *   update the slider value (use [onValueChange] instead), but rather to know when the user has
       *   completed selecting a new value by ending a drag or a click. For keyboard movements, this is
       *   called on every step.
       * @param topToBottom controls the direction of this slider. When true (default), the slider
       *   progresses from top to bottom (top represents the minimum value and bottom represents the
  - id: live-androidx-material3-material3-material3-slider-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 526
    endLine: 560
    sha256: 1fcb9df937a1b562c639e5779e87b9c1a5db9caa125aaaf9c88e5da7f4a600f7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   maximum value). When false, the slider progresses from bottom to top (bottom represents the
       *   minimum value and top represents the maximum value).
       * @param colors [SliderColors] that will be used to resolve the colors used for this slider in
       *   different states. See [SliderDefaults.colors].
       * @param interactionSource the [MutableInteractionSource] representing the stream of [Interaction]s
       *   for this slider. You can create and pass in your own `remember`ed instance to observe
       *   [Interaction]s and customize the appearance / behavior of this slider in different states.
       * @param thumb the thumb to be displayed on the slider, it is placed on top of the track. The
       *   lambda receives a [SliderState] which is used to obtain the current active track.
       * @param track the track to be displayed on the slider, it is placed underneath the thumb. The
       *   lambda receives a [SliderState] which is used to obtain the current active track.
       *
       * @material3expressive
       */
      @Deprecated(message = "Maintained for binary compatibility.", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun VerticalSlider(
          state: SliderState,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          onValueChange: ((Float) -> Unit)? = null,
          onValueChangeFinished: (() -> Unit)? = null,
          topToBottom: Boolean = true,
          colors: SliderColors = SliderDefaults.colors(),
          interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
          thumb: @Composable (SliderState) -> Unit = { _ ->
              SliderDefaults.Thumb(
                  interactionSource = interactionSource,
                  isVertical = true,
                  colors = colors,
                  enabled = enabled,
                  thumbSize = VerticalThumbSize,
              )
          },
          track: @Composable (SliderState) -> Unit = { sliderState ->
  - id: live-androidx-material3-material3-material3-slider-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 561
    endLine: 595
    sha256: e958f5e029677713df9e64cae74cf06529b24ec3e4c32c8c2da2911476362fe4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              SliderDefaults.Track(
                  colors = colors,
                  enabled = enabled,
                  sliderState = sliderState,
                  trackCornerSize = Dp.Unspecified,
              )
          },
      ) {
          VerticalSlider(
              state = state,
              onValueChange = onValueChange ?: { state.value = it },
              modifier = modifier,
              enabled = enabled,
              onValueChangeFinished = onValueChangeFinished,
              topToBottom = topToBottom,
              colors = colors,
              interactionSource = interactionSource,
              thumb = thumb,
              track = track,
          )
      }

      /**
       * [Material Design range slider](https://m3.material.io/components/sliders/overview)
       *
       * Range Sliders expand upon [Slider] using the same concepts but allow the user to select 2 values.
       *
       * The two values are still bounded by the value range but they also cannot cross each other.
       *
       * Use continuous Range Sliders to allow users to make meaningful selections that don’t require
       * specific values:
       *
       * @sample androidx.compose.material3.samples.RangeSliderSample
       *
       * You can allow the user to choose only between predefined set of values by specifying the amount
  - id: live-androidx-material3-material3-material3-slider-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 596
    endLine: 630
    sha256: 91054a8b06102d5609016f234db66aeba9ba1f90804ed0f385ef0329348f47b9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * of steps between min and max values:
       *
       * @sample androidx.compose.material3.samples.StepRangeSliderSample
       * @param value current values of the RangeSlider. If either value is outside of [valueRange]
       *   provided, it will be coerced to this range.
       * @param onValueChange lambda in which values should be updated
       * @param modifier modifiers for the Range Slider layout
       * @param enabled whether or not component is enabled and can we interacted with or not
       * @param valueRange range of values that Range Slider values can take. Passed [value] will be
       *   coerced to this range
       * @param steps if positive, specifies the amount of discrete allowable values between the endpoints
       *   of [valueRange]. For example, a range from 0 to 10 with 4 [steps] allows 4 values evenly
       *   distributed between 0 and 10 (i.e., 2, 4, 6, 8). If [steps] is 0, the slider will behave
       *   continuously and allow any value from the range. Must not be negative.
       * @param onValueChangeFinished called when value change has ended. This should not be used to
       *   update the range slider value (use [onValueChange] instead), but rather to know when the user
       *   has completed selecting a new value by ending a drag or a click. For keyboard movements, this
       *   is called on every step.
       * @param colors [SliderColors] that will be used to determine the color of the Range Slider parts
       *   in different state. See [SliderDefaults.colors] to customize.
       */
      @Deprecated(
          message =
              "Use the RangeSlider overload that accepts RangeSliderState, onValueChange, and onValueChangeFinished instead.",
          replaceWith =
              ReplaceWith(
                  "RangeSlider(state = rememberRangeSliderState(value.start, value.endInclusive, steps, trackRange = valueRange), onValueChange = onValueChange, modifier = modifier, enabled = enabled, onValueChangeFinished = onValueChangeFinished, colors = colors)"
              ),
      )
      @Composable
      public fun RangeSlider(
          value: ClosedFloatingPointRange<Float>,
          onValueChange: (ClosedFloatingPointRange<Float>) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
  - id: live-androidx-material3-material3-material3-slider-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 631
    endLine: 665
    sha256: e6a5012661463e7dc22269fe7f6cff7ec4191746f0ea2c87145d9842d665b16a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          valueRange: ClosedFloatingPointRange<Float> = 0f..1f,
          @IntRange(from = 0) steps: Int = 0,
          onValueChangeFinished: (() -> Unit)? = null,
          colors: SliderColors = SliderDefaults.colors(),
      ) {
          val startThumbInteractionSource: MutableInteractionSource = remember {
              MutableInteractionSource()
          }
          val endThumbInteractionSource: MutableInteractionSource = remember {
              MutableInteractionSource()
          }

          val state =
              remember(steps, valueRange) {
                  RangeSliderState(value.start, value.endInclusive, steps, valueRange)
              }

          state.startValue = value.start
          state.endValue = value.endInclusive

          RangeSlider(
              state = state,
              onValueChange = onValueChange,
              modifier = modifier,
              enabled = enabled,
              onValueChangeFinished = onValueChangeFinished,
              colors = colors,
              startThumbInteractionSource = startThumbInteractionSource,
              endThumbInteractionSource = endThumbInteractionSource,
              startThumb = {
                  SliderDefaults.Thumb(
                      interactionSource = startThumbInteractionSource,
                      colors = colors,
                      enabled = enabled,
                  )
  - id: live-androidx-material3-material3-material3-slider-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 666
    endLine: 700
    sha256: 1b07265fc3a3363ddb111f2e3eea33cac61521b61d58b47370580de3b7658f0e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              },
              endThumb = {
                  SliderDefaults.Thumb(
                      interactionSource = endThumbInteractionSource,
                      colors = colors,
                      enabled = enabled,
                  )
              },
              track = { rangeSliderState ->
                  SliderDefaults.Track(
                      colors = colors,
                      enabled = enabled,
                      rangeSliderState = rangeSliderState,
                  )
              },
          )
      }

      /**
       * [Material Design range slider](https://m3.material.io/components/sliders/overview)
       *
       * Range Sliders expand upon [Slider] using the same concepts but allow the user to select 2 values.
       *
       * The two values are still bounded by the value range but they also cannot cross each other.
       *
       * It uses the provided startThumb for the slider's start thumb and endThumb for the slider's end
       * thumb. It also uses the provided track for the slider's track. If nothing is passed for these
       * parameters, it will use [SliderDefaults.Thumb] and [SliderDefaults.Track] for the thumbs and
       * track.
       *
       * Use continuous Range Sliders to allow users to make meaningful selections that don’t require
       * specific values:
       *
       * @sample androidx.compose.material3.samples.RangeSliderSample
       *
  - id: live-androidx-material3-material3-material3-slider-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 701
    endLine: 732
    sha256: c4b44534f09d2c2d5d60ec72b4c3c528160d7e4df880e3e82a9148226b95c5af
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * You can allow the user to choose only between predefined set of values by specifying the amount
       * of steps between min and max values:
       *
       * @sample androidx.compose.material3.samples.StepRangeSliderSample
       *
       * A custom start/end thumb and track can be provided:
       *
       * @sample androidx.compose.material3.samples.RangeSliderWithCustomComponents
       * @param state [RangeSliderState] which contains the current values of the RangeSlider.
       * @param onValueChange callback in which values should be updated from the [state] (e.g.
       *   `state.startValue = it.start` and `state.endValue = it.endInclusive`)
       * @param modifier modifiers for the Range Slider layout
       * @param enabled whether or not component is enabled and can we interacted with or not
       * @param onValueChangeFinished called when value change has ended. This should not be used to
       *   update the range slider value (use [onValueChange] instead), but rather to know when the user
       *   has completed selecting a new value by ending a drag or a click. For keyboard movements, this
       *   is called on every step.
       * @param colors [SliderColors] that will be used to determine the color of the Range Slider parts
       *   in different state. See [SliderDefaults.colors] to customize.
       * @param startThumbInteractionSource the [MutableInteractionSource] representing the stream of
       *   [Interaction]s for the start thumb. You can create and pass in your own `remember`ed instance
       *   to observe.
       * @param endThumbInteractionSource the [MutableInteractionSource] representing the stream of
       *   [Interaction]s for the end thumb. You can create and pass in your own `remember`ed instance to
       *   observe.
       * @param startThumb the start thumb to be displayed on the Range Slider. The lambda receives a
       *   [RangeSliderState] which is used to obtain the current active track.
       * @param endThumb the end thumb to be displayed on the Range Slider. The lambda receives a
       *   [RangeSliderState] which is used to obtain the current active track.
       * @param track the track to be displayed on the range slider, it is placed underneath the thumb.
       *   The lambda receives a [RangeSliderState] which is used to obtain the current active track.
       */
  - id: live-androidx-material3-material3-material3-slider-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 71
    endLine: 105
    sha256: 4effb4296957af1ca702003ddcd43b77031d055d45a7f97fcf7d6c444148f953
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableFloatStateOf
      import androidx.compose.runtime.mutableIntStateOf
      import androidx.compose.runtime.mutableStateListOf
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.rememberUpdatedState
      import androidx.compose.runtime.saveable.Saver
      import androidx.compose.runtime.saveable.listSaver
      import androidx.compose.runtime.saveable.rememberSaveable
      import androidx.compose.runtime.setValue
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.draw.scale
      import androidx.compose.ui.geometry.CornerRadius
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.geometry.Rect
      import androidx.compose.ui.geometry.RoundRect
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.geometry.lerp
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.Path
      import androidx.compose.ui.graphics.PointMode
      import androidx.compose.ui.graphics.StrokeCap
      import androidx.compose.ui.graphics.compositeOver
      import androidx.compose.ui.graphics.drawscope.DrawScope
      import androidx.compose.ui.graphics.takeOrElse
      import androidx.compose.ui.input.key.Key
      import androidx.compose.ui.input.key.KeyEventType
      import androidx.compose.ui.input.key.key
      import androidx.compose.ui.input.key.onKeyEvent
      import androidx.compose.ui.input.key.type
      import androidx.compose.ui.input.pointer.AwaitPointerEventScope
      import androidx.compose.ui.input.pointer.PointerIcon
      import androidx.compose.ui.input.pointer.PointerId
  - id: live-androidx-material3-material3-material3-slider-lines-733-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 733
    endLine: 767
    sha256: b1802c57ad58415651138854234e397ec36ceb73b8007f6ab7cf86bb5dc4661a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Composable
      public fun RangeSlider(
          state: RangeSliderState,
          onValueChange: (ClosedFloatingPointRange<Float>) -> Unit,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          onValueChangeFinished: (() -> Unit)? = null,
          colors: SliderColors = SliderDefaults.colors(),
          startThumbInteractionSource: MutableInteractionSource = remember { MutableInteractionSource() },
          endThumbInteractionSource: MutableInteractionSource = remember { MutableInteractionSource() },
          startThumb: @Composable (RangeSliderState) -> Unit = {
              SliderDefaults.Thumb(
                  interactionSource = startThumbInteractionSource,
                  colors = colors,
                  enabled = enabled,
              )
          },
          endThumb: @Composable (RangeSliderState) -> Unit = {
              SliderDefaults.Thumb(
                  interactionSource = endThumbInteractionSource,
                  colors = colors,
                  enabled = enabled,
              )
          },
          track: @Composable (RangeSliderState) -> Unit = { rangeSliderState ->
              SliderDefaults.Track(
                  colors = colors,
                  enabled = enabled,
                  rangeSliderState = rangeSliderState,
              )
          },
      ) {
          require(state.steps >= 0) { "steps should be >= 0" }

          RangeSliderImpl(
  - id: live-androidx-material3-material3-material3-slider-lines-768-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 768
    endLine: 802
    sha256: fc0319fd1ac8113eea5d7ea839d04fab851260aeae49af133d939c2c40abb9ee
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              modifier = modifier,
              state = state,
              enabled = enabled,
              onValueChange = onValueChange,
              onValueChangeFinished = onValueChangeFinished,
              startThumbInteractionSource = startThumbInteractionSource,
              endThumbInteractionSource = endThumbInteractionSource,
              startThumb = startThumb,
              endThumb = endThumb,
              track = track,
          )
      }

      /**
       * [Material Design range slider](https://m3.material.io/components/sliders/overview)
       *
       * Range Sliders expand upon [Slider] using the same concepts but allow the user to select 2 values.
       *
       * The two values are still bounded by the value range but they also cannot cross each other.
       *
       * It uses the provided startThumb for the slider's start thumb and endThumb for the slider's end
       * thumb. It also uses the provided track for the slider's track. If nothing is passed for these
       * parameters, it will use [SliderDefaults.Thumb] and [SliderDefaults.Track] for the thumbs and
       * track.
       *
       * Use continuous Range Sliders to allow users to make meaningful selections that don’t require
       * specific values:
       *
       * @sample androidx.compose.material3.samples.RangeSliderSample
       *
       * You can allow the user to choose only between predefined set of values by specifying the amount
       * of steps between min and max values:
       *
       * @sample androidx.compose.material3.samples.StepRangeSliderSample
       *
  - id: live-androidx-material3-material3-material3-slider-lines-803-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 803
    endLine: 835
    sha256: 2da17ba2b343b9b74c88e38208e612d9c719bbf1d4bd86f9f7bdeff519c0d156
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * A custom start/end thumb and track can be provided:
       *
       * @sample androidx.compose.material3.samples.RangeSliderWithCustomComponents
       * @param state [RangeSliderState] which contains the current values of the RangeSlider.
       * @param modifier modifiers for the Range Slider layout
       * @param enabled whether or not component is enabled and can we interacted with or not
       * @param onValueChange callback in which values should be updated
       * @param onValueChangeFinished called when value change has ended. This should not be used to
       *   update the range slider value (use [onValueChange] instead), but rather to know when the user
       *   has completed selecting a new value by ending a drag or a click. For keyboard movements, this
       *   is called on every step.
       * @param colors [SliderColors] that will be used to determine the color of the Range Slider parts
       *   in different state. See [SliderDefaults.colors] to customize.
       * @param startThumbInteractionSource the [MutableInteractionSource] representing the stream of
       *   [Interaction]s for the start thumb. You can create and pass in your own `remember`ed instance
       *   to observe.
       * @param endThumbInteractionSource the [MutableInteractionSource] representing the stream of
       *   [Interaction]s for the end thumb. You can create and pass in your own `remember`ed instance to
       *   observe.
       * @param startThumb the start thumb to be displayed on the Range Slider. The lambda receives a
       *   [RangeSliderState] which is used to obtain the current active track.
       * @param endThumb the end thumb to be displayed on the Range Slider. The lambda receives a
       *   [RangeSliderState] which is used to obtain the current active track.
       * @param track the track to be displayed on the range slider, it is placed underneath the thumb.
       *   The lambda receives a [RangeSliderState] which is used to obtain the current active track.
       */
      @Deprecated(message = "Maintained for binary compatibility.", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun RangeSlider(
          state: RangeSliderState,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          onValueChange: ((ClosedFloatingPointRange<Float>) -> Unit)? = null,
  - id: live-androidx-material3-material3-material3-slider-lines-836-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 836
    endLine: 870
    sha256: ab5b0b40aa56032a96099b40cbc3d30b4c71b1b072fb7d6a360aa5740fc6e5f3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          onValueChangeFinished: (() -> Unit)? = null,
          colors: SliderColors = SliderDefaults.colors(),
          startThumbInteractionSource: MutableInteractionSource = remember { MutableInteractionSource() },
          endThumbInteractionSource: MutableInteractionSource = remember { MutableInteractionSource() },
          startThumb: @Composable (RangeSliderState) -> Unit = {
              SliderDefaults.Thumb(
                  interactionSource = startThumbInteractionSource,
                  colors = colors,
                  enabled = enabled,
              )
          },
          endThumb: @Composable (RangeSliderState) -> Unit = {
              SliderDefaults.Thumb(
                  interactionSource = endThumbInteractionSource,
                  colors = colors,
                  enabled = enabled,
              )
          },
          track: @Composable (RangeSliderState) -> Unit = { rangeSliderState ->
              SliderDefaults.Track(
                  colors = colors,
                  enabled = enabled,
                  rangeSliderState = rangeSliderState,
              )
          },
      ) {
          RangeSlider(
              state = state,
              onValueChange =
                  onValueChange
                      ?: {
                          state.startValue = it.start
                          state.endValue = it.endInclusive
                      },
              modifier = modifier,
  - id: live-androidx-material3-material3-material3-slider-lines-871-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 871
    endLine: 905
    sha256: 9a24f13701b8f289691d357ad694fbdb7714314a7e94cac1a073229b6dcaaeb0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              enabled = enabled,
              onValueChangeFinished = onValueChangeFinished,
              colors = colors,
              startThumbInteractionSource = startThumbInteractionSource,
              endThumbInteractionSource = endThumbInteractionSource,
              startThumb = startThumb,
              endThumb = endThumb,
              track = track,
          )
      }

      @Composable
      private fun SliderImpl(
          modifier: Modifier,
          state: SliderState,
          enabled: Boolean,
          onValueChange: (Float) -> Unit,
          onValueChangeFinished: (() -> Unit)?,
          interactionSource: MutableInteractionSource,
          thumb: @Composable (SliderState) -> Unit,
          track: @Composable (SliderState) -> Unit,
      ) {
          state.isRtl = LocalLayoutDirection.current == LayoutDirection.Rtl
          val isFocused by interactionSource.collectIsFocusedAsState()
          state.isFocused = isFocused

          val orientation = state.orientation
          val reverseVerticalDirection = state.reverseVerticalDirection

          val reverseDirection =
              (orientation == Horizontal && state.isRtl) ||
                  (orientation == Vertical && reverseVerticalDirection)
          val press =
              Modifier.sliderTapModifier(
                  state = state,
  - id: live-androidx-material3-material3-material3-slider-lines-906-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 906
    endLine: 940
    sha256: dfe2d06d5e28284fe4e59f7af9c27e68f9c75eb67687d0c3fb6ffb6d9aa08477
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  interactionSource = interactionSource,
                  enabled = enabled,
                  onValueChange = onValueChange,
                  onValueChangeFinished = onValueChangeFinished,
              )
          val draggableState = rememberDraggableState { delta ->
              state.dispatchRawDeltaInternal(delta, onValueChange)
          }
          val drag =
              Modifier.draggable(
                  orientation = orientation,
                  reverseDirection = reverseDirection,
                  enabled = enabled,
                  interactionSource = interactionSource,
                  onDragStarted = { state.isDragging = true },
                  onDragStopped = {
                      state.isDragging = false
                      onValueChangeFinished?.invoke()
                  },
                  startDragImmediately = state.isDragging,
                  state = draggableState,
              )
          val thumbModifier =
              if (orientation == Vertical) {
                  Modifier.layoutId(SliderComponents.THUMB).wrapContentHeight()
              } else {
                  Modifier.layoutId(SliderComponents.THUMB).wrapContentWidth()
              }

          val isInsetFocusRing =
              LocalRippleThemeConfiguration.current.focus is RippleThemeConfiguration.Focus.InsetRing

          val focusRingModifier =
              if (isInsetFocusRing) {
                  Modifier.indication(
  - id: live-androidx-material3-material3-material3-slider-lines-941-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 941
    endLine: 975
    sha256: 9953c655bea3daf0dda537ab9417a74ebf1c003a98f849339d189df96335fca4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          interactionSource = interactionSource,
                          indication =
                              ripple(
                                  focusRingShape = SliderTokens.HandleShape.value,
                                  enablePressIndication = false,
                                  enableFocusIndication = true,
                                  enableDragIndication = false,
                                  enableHoverIndication = false,
                              ),
                      )
                      .padding(if (isFocused) insetFocusRingPadding else 0.dp)
              } else {
                  Modifier
              }

          val density = LocalDensity.current

          Layout(
              {
                  Box(
                      modifier =
                          thumbModifier.then(focusRingModifier).onSizeChanged {
                              val padding =
                                  if (isInsetFocusRing && isFocused) {
                                      with(density) { (insetFocusRingPadding * 2).roundToPx() }
                                  } else {
                                      0
                                  }
                              state.thumbWidth = it.width - padding
                              state.thumbHeight = it.height - padding
                          }
                  ) {
                      thumb(state)
                  }
                  Box(modifier = Modifier.layoutId(SliderComponents.TRACK)) { track(state) }
  - id: live-androidx-material3-material3-material3-slider-lines-976-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt
    startLine: 976
    endLine: 1010
    sha256: 478c46b3cef62f23f400e0a8ca35c792ce0804f6b2396709feeb869e626ccb0b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              },
              modifier =
                  modifier
                      .minimumInteractiveComponentSize()
                      .requiredSizeIn(
                          minWidth = if (orientation == Vertical) TrackHeight else ThumbWidth,
                          minHeight = if (orientation == Vertical) ThumbWidth else TrackHeight,
                      )
                      .sliderSemantics(
                          state = state,
                          enabled = enabled,
                          onValueChange = onValueChange,
                          onValueChangeFinished = onValueChangeFinished,
                      )
                      .focusable(enabled, interactionSource)
                      .slideOnKeyEvents(
                          enabled,
                          state,
                          reverseDirection,
                          onValueChange,
                          onValueChangeFinished,
                          orientation == Vertical,
                      )
                      .then(press)
                      .then(drag),
          ) { measurables, constraints ->
              val trackPadding =
                  if (isInsetFocusRing && isFocused) insetFocusRingPadding.roundToPx() else 0

              val thumbPlaceable =
                  measurables.fastFirst { it.layoutId == SliderComponents.THUMB }.measure(constraints)

              val trackMeasurable = measurables.fastFirst { it.layoutId == SliderComponents.TRACK }
              val trackPlaceable =
                  if (orientation == Vertical) {
compose:
  id: live-androidx-material3-material3-material3-slider
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-slider-lines-1
      title: androidx.compose.material3 Slider.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1011
      title: androidx.compose.material3 Slider.kt source (lines 1011–1045)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1011-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1046
      title: androidx.compose.material3 Slider.kt source (lines 1046–1080)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1046-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-106
      title: androidx.compose.material3 Slider.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1081
      title: androidx.compose.material3 Slider.kt source (lines 1081–1115)
      aliases:
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1081-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1116
      title: androidx.compose.material3 Slider.kt source (lines 1116–1150)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1116-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1151
      title: androidx.compose.material3 Slider.kt source (lines 1151–1185)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1151-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1186
      title: androidx.compose.material3 Slider.kt source (lines 1186–1220)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1186-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1221
      title: androidx.compose.material3 Slider.kt source (lines 1221–1255)
      aliases:
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1221-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1256
      title: androidx.compose.material3 Slider.kt source (lines 1256–1290)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1256-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1291
      title: androidx.compose.material3 Slider.kt source (lines 1291–1325)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1291-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1326
      title: androidx.compose.material3 Slider.kt source (lines 1326–1360)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1326-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1361
      title: androidx.compose.material3 Slider.kt source (lines 1361–1395)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1361-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1396
      title: androidx.compose.material3 Slider.kt source (lines 1396–1430)
      aliases:
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1396-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-141
      title: androidx.compose.material3 Slider.kt source (lines 141–175)
      aliases:
        - androidx.compose.material3.SliderDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1431
      title: androidx.compose.material3 Slider.kt source (lines 1431–1465)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1431-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1466
      title: androidx.compose.material3 Slider.kt source (lines 1466–1500)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1466-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1501
      title: androidx.compose.material3 Slider.kt source (lines 1501–1535)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1501-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1536
      title: androidx.compose.material3 Slider.kt source (lines 1536–1570)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1536-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1571
      title: androidx.compose.material3 Slider.kt source (lines 1571–1605)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1571-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1606
      title: androidx.compose.material3 Slider.kt source (lines 1606–1640)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1606-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1641
      title: androidx.compose.material3 Slider.kt source (lines 1641–1675)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1641-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1676
      title: androidx.compose.material3 Slider.kt source (lines 1676–1710)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1676-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1711
      title: androidx.compose.material3 Slider.kt source (lines 1711–1745)
      aliases:
        - androidx.compose.material3.SliderColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1711-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1746
      title: androidx.compose.material3 Slider.kt source (lines 1746–1780)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1746-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-176
      title: androidx.compose.material3 Slider.kt source (lines 176–210)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderState
        - androidx.compose.material3.rememberSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-176-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1781
      title: androidx.compose.material3 Slider.kt source (lines 1781–1815)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.VerticalSlider
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1781-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1816
      title: androidx.compose.material3 Slider.kt source (lines 1816–1850)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.VerticalSlider
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1816-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1851
      title: androidx.compose.material3 Slider.kt source (lines 1851–1885)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderPositions
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1851-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1886
      title: androidx.compose.material3 Slider.kt source (lines 1886–1920)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1886-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1921
      title: androidx.compose.material3 Slider.kt source (lines 1921–1955)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1921-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1956
      title: androidx.compose.material3 Slider.kt source (lines 1956–1990)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.VerticalSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1956-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-1991
      title: androidx.compose.material3 Slider.kt source (lines 1991–2025)
      aliases:
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-1991-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2026
      title: androidx.compose.material3 Slider.kt source (lines 2026–2060)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.VerticalSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2026-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2061
      title: androidx.compose.material3 Slider.kt source (lines 2061–2095)
      aliases:
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2061-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2096
      title: androidx.compose.material3 Slider.kt source (lines 2096–2130)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2096-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-211
      title: androidx.compose.material3 Slider.kt source (lines 211–245)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-211-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2131
      title: androidx.compose.material3 Slider.kt source (lines 2131–2165)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2131-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2166
      title: androidx.compose.material3 Slider.kt source (lines 2166–2200)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2166-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2201
      title: androidx.compose.material3 Slider.kt source (lines 2201–2235)
      aliases:
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2201-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2236
      title: androidx.compose.material3 Slider.kt source (lines 2236–2270)
      aliases:
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2236-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2271
      title: androidx.compose.material3 Slider.kt source (lines 2271–2305)
      aliases:
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2271-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2306
      title: androidx.compose.material3 Slider.kt source (lines 2306–2340)
      aliases:
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2306-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2341
      title: androidx.compose.material3 Slider.kt source (lines 2341–2375)
      aliases:
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2341-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2376
      title: androidx.compose.material3 Slider.kt source (lines 2376–2410)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2376-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2411
      title: androidx.compose.material3 Slider.kt source (lines 2411–2445)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2411-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2446
      title: androidx.compose.material3 Slider.kt source (lines 2446–2480)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2446-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-246
      title: androidx.compose.material3 Slider.kt source (lines 246–280)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-246-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2481
      title: androidx.compose.material3 Slider.kt source (lines 2481–2515)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2481-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2516
      title: androidx.compose.material3 Slider.kt source (lines 2516–2550)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2516-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2551
      title: androidx.compose.material3 Slider.kt source (lines 2551–2585)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2551-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2586
      title: androidx.compose.material3 Slider.kt source (lines 2586–2620)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2586-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2621
      title: androidx.compose.material3 Slider.kt source (lines 2621–2655)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2621-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2656
      title: androidx.compose.material3 Slider.kt source (lines 2656–2690)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2656-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2691
      title: androidx.compose.material3 Slider.kt source (lines 2691–2725)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2691-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2726
      title: androidx.compose.material3 Slider.kt source (lines 2726–2760)
      aliases:
        - androidx.compose.material3.SliderColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2726-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2761
      title: androidx.compose.material3 Slider.kt source (lines 2761–2795)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2761-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2796
      title: androidx.compose.material3 Slider.kt source (lines 2796–2830)
      aliases:
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2796-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-281
      title: androidx.compose.material3 Slider.kt source (lines 281–315)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-281-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2831
      title: androidx.compose.material3 Slider.kt source (lines 2831–2865)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2831-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2866
      title: androidx.compose.material3 Slider.kt source (lines 2866–2900)
      aliases:
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2866-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2901
      title: androidx.compose.material3 Slider.kt source (lines 2901–2935)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2901-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2936
      title: androidx.compose.material3 Slider.kt source (lines 2936–2970)
      aliases:
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2936-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-2971
      title: androidx.compose.material3 Slider.kt source (lines 2971–3005)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-2971-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3006
      title: androidx.compose.material3 Slider.kt source (lines 3006–3040)
      aliases:
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3006-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3041
      title: androidx.compose.material3 Slider.kt source (lines 3041–3075)
      aliases:
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3041-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3076
      title: androidx.compose.material3 Slider.kt source (lines 3076–3110)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3076-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3111
      title: androidx.compose.material3 Slider.kt source (lines 3111–3145)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3111-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3146
      title: androidx.compose.material3 Slider.kt source (lines 3146–3180)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3146-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-316
      title: androidx.compose.material3 Slider.kt source (lines 316–350)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-316-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3181
      title: androidx.compose.material3 Slider.kt source (lines 3181–3215)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3181-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3216
      title: androidx.compose.material3 Slider.kt source (lines 3216–3250)
      aliases:
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3216-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3251
      title: androidx.compose.material3 Slider.kt source (lines 3251–3285)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3251-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3286
      title: androidx.compose.material3 Slider.kt source (lines 3286–3320)
      aliases:
        - androidx.compose.material3.SliderColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3286-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3321
      title: androidx.compose.material3 Slider.kt source (lines 3321–3355)
      aliases:
        - androidx.compose.material3.SliderColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3321-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3356
      title: androidx.compose.material3 Slider.kt source (lines 3356–3390)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3356-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3391
      title: androidx.compose.material3 Slider.kt source (lines 3391–3425)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderPositions
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3391-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3426
      title: androidx.compose.material3 Slider.kt source (lines 3426–3460)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderPositions
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3426-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3461
      title: androidx.compose.material3 Slider.kt source (lines 3461–3495)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3461-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3496
      title: androidx.compose.material3 Slider.kt source (lines 3496–3530)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3496-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-351
      title: androidx.compose.material3 Slider.kt source (lines 351–385)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-351-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3531
      title: androidx.compose.material3 Slider.kt source (lines 3531–3565)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3531-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3566
      title: androidx.compose.material3 Slider.kt source (lines 3566–3600)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3566-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-36
      title: androidx.compose.material3 Slider.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3601
      title: androidx.compose.material3 Slider.kt source (lines 3601–3635)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3601-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3636
      title: androidx.compose.material3 Slider.kt source (lines 3636–3670)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderState
        - androidx.compose.material3.rememberSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3636-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3671
      title: androidx.compose.material3 Slider.kt source (lines 3671–3705)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3671-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3706
      title: androidx.compose.material3 Slider.kt source (lines 3706–3740)
      aliases:
        - androidx.compose.material3.RangeSlider
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3706-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3741
      title: androidx.compose.material3 Slider.kt source (lines 3741–3775)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3741-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3776
      title: androidx.compose.material3 Slider.kt source (lines 3776–3810)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3776-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3811
      title: androidx.compose.material3 Slider.kt source (lines 3811–3845)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3811-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3846
      title: androidx.compose.material3 Slider.kt source (lines 3846–3880)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.RangeSliderState
        - androidx.compose.material3.rememberRangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3846-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-386
      title: androidx.compose.material3 Slider.kt source (lines 386–420)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-386-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3881
      title: androidx.compose.material3 Slider.kt source (lines 3881–3915)
      aliases:
        - androidx.compose.material3.RangeSlider
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3881-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3916
      title: androidx.compose.material3 Slider.kt source (lines 3916–3950)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3916-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-3951
      title: androidx.compose.material3 Slider.kt source (lines 3951–3972)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-3951-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-421
      title: androidx.compose.material3 Slider.kt source (lines 421–455)
      aliases:
        - androidx.compose.material3.VerticalSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-421-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-456
      title: androidx.compose.material3 Slider.kt source (lines 456–490)
      aliases:
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-456-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-491
      title: androidx.compose.material3 Slider.kt source (lines 491–525)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-491-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-526
      title: androidx.compose.material3 Slider.kt source (lines 526–560)
      aliases:
        - androidx.compose.material3.VerticalSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-526-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-561
      title: androidx.compose.material3 Slider.kt source (lines 561–595)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.VerticalSlider
        - androidx.compose.material3.SliderDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-561-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-596
      title: androidx.compose.material3 Slider.kt source (lines 596–630)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.RangeSliderState
        - androidx.compose.material3.rememberRangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-596-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-631
      title: androidx.compose.material3 Slider.kt source (lines 631–665)
      aliases:
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-631-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-666
      title: androidx.compose.material3 Slider.kt source (lines 666–700)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-666-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-701
      title: androidx.compose.material3 Slider.kt source (lines 701–732)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-701-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-71
      title: androidx.compose.material3 Slider.kt source (lines 71–105)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-71-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-733
      title: androidx.compose.material3 Slider.kt source (lines 733–767)
      aliases:
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-733-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-768
      title: androidx.compose.material3 Slider.kt source (lines 768–802)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.SliderDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-768-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-803
      title: androidx.compose.material3 Slider.kt source (lines 803–835)
      aliases:
        - androidx.compose.material3.Slider
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-803-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-836
      title: androidx.compose.material3 Slider.kt source (lines 836–870)
      aliases:
        - androidx.compose.material3.RangeSlider
        - androidx.compose.material3.SliderDefaults
        - androidx.compose.material3.SliderColors
        - androidx.compose.material3.RangeSliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-836-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-871
      title: androidx.compose.material3 Slider.kt source (lines 871–905)
      aliases:
        - androidx.compose.material3.SliderState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-871-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-906
      title: androidx.compose.material3 Slider.kt source (lines 906–940)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-906-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-941
      title: androidx.compose.material3 Slider.kt source (lines 941–975)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-941-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-slider-lines-976
      title: androidx.compose.material3 Slider.kt source (lines 976–1010)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-slider-lines-976-source
      relatedIds: []
---

# androidx.compose.material3 Slider.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt

## androidx.compose.material3 Slider.kt source (lines 1–35)

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

import androidx.annotation.FloatRange
import androidx.annotation.IntRange
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.MutatePriority
import androidx.compose.foundation.MutatorMutex
import androidx.compose.foundation.background
import androidx.compose.foundation.focusable
import androidx.compose.foundation.gestures.DragScope
import androidx.compose.foundation.gestures.DraggableState
import androidx.compose.foundation.gestures.Orientation
import androidx.compose.foundation.gestures.Orientation.Horizontal
import androidx.compose.foundation.gestures.Orientation.Vertical
import androidx.compose.foundation.gestures.awaitEachGesture
import androidx.compose.foundation.gestures.awaitFirstDown
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.foundation.gestures.draggable
import androidx.compose.foundation.gestures.horizontalDrag

Sources: [live-androidx-material3-material3-material3-slider-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1011–1045)

                trackMeasurable.measure(
                    constraints
                        .offset(vertical = -(thumbPlaceable.height - 2 * trackPadding))
                        .copy(minWidth = 0)
                )
            } else {
                trackMeasurable.measure(
                    constraints
                        .offset(horizontal = -(thumbPlaceable.width - 2 * trackPadding))
                        .copy(minHeight = 0)
                )
            }

        val sliderWidth: Int
        val sliderHeight: Int
        val trackOffsetX: Int
        val trackOffsetY: Int
        val trackCornerSize =
            trackPlaceable[CornerSizeAlignmentLine].let {
                if (it != AlignmentLine.Unspecified) it else 0
            }

        val thumbCoreWidth = thumbPlaceable.width - 2 * trackPadding
        val thumbCoreHeight = thumbPlaceable.height - 2 * trackPadding

        if (orientation == Vertical) {
            sliderWidth = max(trackPlaceable.width, thumbCoreWidth)
            sliderHeight = thumbCoreHeight + trackPlaceable.height
            trackOffsetX = (sliderWidth - trackPlaceable.width) / 2
            trackOffsetY = thumbCoreHeight / 2
        } else {
            sliderWidth = thumbCoreWidth + trackPlaceable.width
            sliderHeight = max(trackPlaceable.height, thumbCoreHeight)
            trackOffsetX = thumbCoreWidth / 2
            trackOffsetY = (sliderHeight - trackPlaceable.height) / 2

Sources: [live-androidx-material3-material3-material3-slider-lines-1011-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1046–1080)

        }

        state.updateDimensions(newTotalWidth = sliderWidth, newTotalHeight = sliderHeight)

        layout(sliderWidth, sliderHeight) {
            val valueAsFraction = state.coercedValueAsFraction
            val isOnFirstOrLastStep =
                valueAsFraction == state.tickFractions.firstOrNull() ||
                    valueAsFraction == state.tickFractions.lastOrNull()

            val thumbOffsetX: Int
            var thumbOffsetY: Int

            if (orientation == Vertical) {
                thumbOffsetX = (sliderWidth - thumbPlaceable.width) / 2
                val fractionOffset =
                    if (state.steps > 0 && !isOnFirstOrLastStep) {
                        ((trackPlaceable.height - trackCornerSize * 2) * valueAsFraction)
                            .roundToInt() + trackCornerSize
                    } else {
                        (trackPlaceable.height * valueAsFraction).roundToInt()
                    }
                thumbOffsetY =
                    if (reverseVerticalDirection) {
                        trackPlaceable.height - fractionOffset
                    } else {
                        fractionOffset
                    }
                thumbOffsetY += trackOffsetY - thumbPlaceable.height / 2
            } else {
                val fractionOffset =
                    if (state.steps > 0 && !isOnFirstOrLastStep) {
                        ((trackPlaceable.width - trackCornerSize * 2) * valueAsFraction)
                            .roundToInt() + trackCornerSize
                    } else {

Sources: [live-androidx-material3-material3-material3-slider-lines-1046-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 106–140)

import androidx.compose.ui.input.pointer.PointerInputChange
import androidx.compose.ui.input.pointer.PointerType
import androidx.compose.ui.input.pointer.pointerHoverIcon
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.input.pointer.positionChange
import androidx.compose.ui.layout.AlignmentLine
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.layout.VerticalAlignmentLine
import androidx.compose.ui.layout.layout
import androidx.compose.ui.layout.layoutId
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.semantics.ProgressBarRangeInfo
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.disabled
import androidx.compose.ui.semantics.progressBarRangeInfo
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.semantics.setProgress
import androidx.compose.ui.semantics.stateDescription
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.offset
import androidx.compose.ui.util.fastFirst
import androidx.compose.ui.util.fastMap
import androidx.compose.ui.util.lerp
import androidx.compose.ui.util.packFloats
import androidx.compose.ui.util.unpackFloat1
import androidx.compose.ui.util.unpackFloat2
import kotlin.jvm.JvmInline
import kotlin.jvm.JvmName
import kotlin.math.abs
import kotlin.math.floor

Sources: [live-androidx-material3-material3-material3-slider-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1081–1115)

                        (trackPlaceable.width * valueAsFraction).roundToInt()
                    }
                thumbOffsetX = fractionOffset + trackOffsetX - thumbPlaceable.width / 2
                thumbOffsetY = (sliderHeight - thumbPlaceable.height) / 2
            }

            trackPlaceable.placeRelative(trackOffsetX, trackOffsetY)
            thumbPlaceable.placeRelative(thumbOffsetX, thumbOffsetY)
        }
    }
}

private fun Modifier.slideOnKeyEvents(
    enabled: Boolean,
    state: SliderState,
    reverseDirection: Boolean,
    onValueChangeState: (Float) -> Unit,
    onValueChangeFinishedState: (() -> Unit)?,
    isVertical: Boolean,
): Modifier {
    require(state.steps >= 0) { "steps should be >= 0" }
    return this.onKeyEvent {
        if (!enabled) return@onKeyEvent false
        val steps = state.steps
        val trackRange = state.trackRange
        val value = state.value
        when (it.type) {
            KeyEventType.KeyDown -> {
                val rangeLength = abs(trackRange.endInclusive - trackRange.start)
                // When steps == 0, it means that a user is not limited by a step length (delta)
                // when using touch or mouse. But it is not possible to adjust the value
                // continuously when using keyboard buttons - the delta has to be discrete.
                // In this case, 1% of the trackRange seems to make sense.
                val actualSteps = if (steps > 0) steps + 1 else 100
                val delta = rangeLength / actualSteps

Sources: [live-androidx-material3-material3-material3-slider-lines-1081-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1116–1150)

                val sign = if (reverseDirection) -1 else 1

                if ((it.key == Key.MoveHome) || (it.key == Key.NumPadMoveHome)) {
                    onValueChangeState(trackRange.start)
                    return@onKeyEvent true
                } else if ((it.key == Key.MoveEnd) || (it.key == Key.NumPadMoveEnd)) {
                    onValueChangeState(trackRange.endInclusive)
                    return@onKeyEvent true
                }
                if (isVertical) {
                    when (it.key) {
                        Key.DirectionUp,
                        Key.NumPadDirectionUp -> {
                            onValueChangeState((value - sign * delta).coerceIn(trackRange))
                            return@onKeyEvent true
                        }
                        Key.DirectionDown,
                        Key.NumPadDirectionDown -> {
                            onValueChangeState((value + sign * delta).coerceIn(trackRange))
                            return@onKeyEvent true
                        }
                        Key.PageUp,
                        Key.NumPadPageUp -> {
                            val page = (actualSteps / 10).coerceIn(1, 10)
                            onValueChangeState((value - page * sign * delta).coerceIn(trackRange))
                            return@onKeyEvent true
                        }
                        Key.PageDown,
                        Key.NumPadPageDown -> {
                            val page = (actualSteps / 10).coerceIn(1, 10)
                            onValueChangeState((value + page * sign * delta).coerceIn(trackRange))
                            return@onKeyEvent true
                        }
                        else -> return@onKeyEvent false
                    }

Sources: [live-androidx-material3-material3-material3-slider-lines-1116-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1151–1185)

                } else {
                    when (it.key) {
                        Key.DirectionRight,
                        Key.NumPadDirectionRight -> {
                            onValueChangeState((value + sign * delta).coerceIn(trackRange))
                            return@onKeyEvent true
                        }
                        Key.DirectionLeft,
                        Key.NumPadDirectionLeft -> {
                            onValueChangeState((value - sign * delta).coerceIn(trackRange))
                            return@onKeyEvent true
                        }
                        Key.PageUp,
                        Key.NumPadPageUp -> {
                            val page = (actualSteps / 10).coerceIn(1, 10)
                            onValueChangeState((value + page * delta).coerceIn(trackRange))
                            return@onKeyEvent true
                        }
                        Key.PageDown,
                        Key.NumPadPageDown -> {
                            val page = (actualSteps / 10).coerceIn(1, 10)
                            onValueChangeState((value - page * delta).coerceIn(trackRange))
                            return@onKeyEvent true
                        }
                        else -> return@onKeyEvent false
                    }
                }
            }

            KeyEventType.KeyUp -> {
                if (isVertical) {
                    when (it.key) {
                        Key.DirectionUp,
                        Key.NumPadDirectionUp,
                        Key.DirectionDown,

Sources: [live-androidx-material3-material3-material3-slider-lines-1151-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1186–1220)

                        Key.NumPadDirectionDown,
                        Key.MoveHome,
                        Key.NumPadMoveHome,
                        Key.MoveEnd,
                        Key.NumPadMoveEnd,
                        Key.PageUp,
                        Key.NumPadPageUp,
                        Key.PageDown,
                        Key.NumPadPageDown -> {
                            onValueChangeFinishedState?.invoke()
                            return@onKeyEvent true
                        }
                        else -> return@onKeyEvent false
                    }
                } else {
                    when (it.key) {
                        Key.DirectionRight,
                        Key.NumPadDirectionRight,
                        Key.DirectionLeft,
                        Key.NumPadDirectionLeft,
                        Key.MoveHome,
                        Key.NumPadMoveHome,
                        Key.MoveEnd,
                        Key.NumPadMoveEnd,
                        Key.PageUp,
                        Key.NumPadPageUp,
                        Key.PageDown,
                        Key.NumPadPageDown -> {
                            onValueChangeFinishedState?.invoke()
                            return@onKeyEvent true
                        }
                        else -> return@onKeyEvent false
                    }
                }
            }

Sources: [live-androidx-material3-material3-material3-slider-lines-1186-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1221–1255)


            else -> return@onKeyEvent false
        }
    }
}

private fun Modifier.rangeSliderOnKeyEvents(
    enabled: Boolean,
    state: RangeSliderState,
    isStartThumb: Boolean,
    reverseDirection: Boolean,
    onValueChangeState: (SliderRange) -> Unit,
    onValueChangeFinishedState: (() -> Unit)?,
): Modifier {
    require(state.steps >= 0) { "steps should be >= 0" }
    return this.onKeyEvent {
        if (!enabled) return@onKeyEvent false
        val steps = state.steps
        val trackRange = state.trackRange
        val valueStart = state.startValue
        val valueEnd = state.endValue
        when (it.type) {
            KeyEventType.KeyDown -> {
                val rangeLength = abs(trackRange.endInclusive - trackRange.start)
                // When steps == 0, it means that a user is not limited by a step length (delta)
                // when using touch or mouse. But it is not possible to adjust the value
                // continuously when using keyboard buttons - the delta has to be discrete.
                // In this case, 1% of the trackRange seems to make sense.
                val actualSteps = if (steps > 0) steps + 1 else 100
                val delta = rangeLength / actualSteps
                val sign = if (reverseDirection) -1 else 1

                if (isStartThumb) {
                    val coerceInRange = trackRange.start..valueEnd
                    when (it.key) {

Sources: [live-androidx-material3-material3-material3-slider-lines-1221-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1256–1290)

                        Key.DirectionRight,
                        Key.NumPadDirectionRight -> {
                            onValueChangeState(
                                SliderRange(
                                    (valueStart + sign * delta).coerceIn(coerceInRange),
                                    valueEnd,
                                )
                            )
                            return@onKeyEvent true
                        }

                        Key.DirectionLeft,
                        Key.NumPadDirectionLeft -> {
                            onValueChangeState(
                                SliderRange(
                                    (valueStart - sign * delta).coerceIn(coerceInRange),
                                    valueEnd,
                                )
                            )
                            return@onKeyEvent true
                        }

                        Key.PageUp,
                        Key.NumPadPageUp -> {
                            val page = (actualSteps / 10).coerceIn(1, 10)
                            onValueChangeState(
                                SliderRange(
                                    (valueStart + page * delta).coerceIn(coerceInRange),
                                    valueEnd,
                                )
                            )
                            return@onKeyEvent true
                        }

                        Key.PageDown,

Sources: [live-androidx-material3-material3-material3-slider-lines-1256-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1291–1325)

                        Key.NumPadPageDown -> {
                            val page = (actualSteps / 10).coerceIn(1, 10)
                            onValueChangeState(
                                SliderRange(
                                    (valueStart - page * delta).coerceIn(coerceInRange),
                                    valueEnd,
                                )
                            )
                            return@onKeyEvent true
                        }

                        Key.MoveHome,
                        Key.NumPadMoveHome -> {
                            onValueChangeState(SliderRange(trackRange.start, valueEnd))
                            return@onKeyEvent true
                        }

                        Key.MoveEnd,
                        Key.NumPadMoveEnd -> {
                            onValueChangeState(SliderRange(valueEnd, valueEnd))
                            return@onKeyEvent true
                        }

                        else -> return@onKeyEvent false
                    }
                } else {
                    val coerceInRange = valueStart..trackRange.endInclusive
                    when (it.key) {
                        Key.DirectionRight,
                        Key.NumPadDirectionRight -> {
                            onValueChangeState(
                                SliderRange(
                                    valueStart,
                                    (valueEnd + sign * delta).coerceIn(coerceInRange),
                                )

Sources: [live-androidx-material3-material3-material3-slider-lines-1291-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1326–1360)

                            )

                            return@onKeyEvent true
                        }

                        Key.DirectionLeft,
                        Key.NumPadDirectionLeft -> {
                            onValueChangeState(
                                SliderRange(
                                    valueStart,
                                    (valueEnd - sign * delta).coerceIn(coerceInRange),
                                )
                            )

                            return@onKeyEvent true
                        }

                        Key.PageUp,
                        Key.NumPadPageUp -> {
                            val page = (actualSteps / 10).coerceIn(1, 10)
                            onValueChangeState(
                                SliderRange(
                                    valueStart,
                                    (valueEnd + page * delta).coerceIn(coerceInRange),
                                )
                            )
                            return@onKeyEvent true
                        }

                        Key.PageDown,
                        Key.NumPadPageDown -> {
                            val page = (actualSteps / 10).coerceIn(1, 10)
                            onValueChangeState(
                                SliderRange(
                                    valueStart,

Sources: [live-androidx-material3-material3-material3-slider-lines-1326-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1361–1395)

                                    (valueEnd - page * delta).coerceIn(coerceInRange),
                                )
                            )
                            return@onKeyEvent true
                        }

                        Key.MoveHome,
                        Key.NumPadMoveHome -> {
                            onValueChangeState(SliderRange(valueStart, valueStart))
                            return@onKeyEvent true
                        }

                        Key.MoveEnd,
                        Key.NumPadMoveEnd -> {
                            onValueChangeState(SliderRange(valueStart, trackRange.endInclusive))
                            return@onKeyEvent true
                        }

                        else -> return@onKeyEvent false
                    }
                }
            }

            KeyEventType.KeyUp -> {
                when (it.key) {
                    Key.DirectionRight,
                    Key.NumPadDirectionRight,
                    Key.DirectionLeft,
                    Key.NumPadDirectionLeft,
                    Key.MoveHome,
                    Key.NumPadMoveHome,
                    Key.MoveEnd,
                    Key.NumPadMoveEnd,
                    Key.PageUp,
                    Key.NumPadPageUp,

Sources: [live-androidx-material3-material3-material3-slider-lines-1361-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1396–1430)

                    Key.PageDown,
                    Key.NumPadPageDown -> {
                        onValueChangeFinishedState?.invoke()
                        return@onKeyEvent true
                    }
                    else -> return@onKeyEvent false
                }
            }

            else -> return@onKeyEvent false
        }
    }
}

@Composable
private fun RangeSliderImpl(
    modifier: Modifier,
    state: RangeSliderState,
    enabled: Boolean,
    onValueChange: (ClosedFloatingPointRange<Float>) -> Unit,
    onValueChangeFinished: (() -> Unit)?,
    startThumbInteractionSource: MutableInteractionSource,
    endThumbInteractionSource: MutableInteractionSource,
    startThumb: @Composable ((RangeSliderState) -> Unit),
    endThumb: @Composable ((RangeSliderState) -> Unit),
    track: @Composable ((RangeSliderState) -> Unit),
) {
    val onRangeValueChange: (SliderRange) -> Unit = { onValueChange(it.start..it.endInclusive) }
    state.isRtl = LocalLayoutDirection.current == LayoutDirection.Rtl
    val isStartFocused by startThumbInteractionSource.collectIsFocusedAsState()
    val isEndFocused by endThumbInteractionSource.collectIsFocusedAsState()
    state.isStartFocused = isStartFocused
    state.isEndFocused = isEndFocused

    val pressDrag =

Sources: [live-androidx-material3-material3-material3-slider-lines-1396-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 141–175)

import kotlin.math.max
import kotlin.math.min
import kotlin.math.roundToInt
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.launch

/**
 * [Material Design slider](https://m3.material.io/components/sliders/overview)
 *
 * Sliders allow users to make selections from a range of values.
 *
 * It uses [SliderDefaults.Thumb] and [SliderDefaults.Track] as the thumb and track.
 *
 * Sliders reflect a range of values along a horizontal bar, from which users may select a single
 * value. They are ideal for adjusting settings such as volume, brightness, or applying image
 * filters.
 *
 * ![Sliders
 * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqe2zb2b-1.png?alt=media)
 *
 * Use continuous sliders to allow users to make meaningful selections that don’t require a specific
 * value:
 *
 * @sample androidx.compose.material3.samples.SliderSample
 *
 * You can allow the user to choose only between predefined set of values by specifying the amount
 * of steps between min and max values:
 *
 * @sample androidx.compose.material3.samples.StepsSliderSample
 * @param value current value of the slider. If outside of [valueRange] provided, value will be
 *   coerced to this range.
 * @param onValueChange callback in which value should be updated
 * @param modifier the [Modifier] to be applied to this slider
 * @param enabled controls the enabled state of this slider. When `false`, this component will not

Sources: [live-androidx-material3-material3-material3-slider-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1431–1465)

        Modifier.rangeSliderPressDragModifier(
            state,
            startThumbInteractionSource,
            endThumbInteractionSource,
            enabled,
            onRangeValueChange,
            onValueChangeFinished,
        )

    val startContentDescription = getString(Strings.SliderRangeStart)
    val endContentDescription = getString(Strings.SliderRangeEnd)

    val isInsetFocusRing =
        LocalRippleThemeConfiguration.current.focus is RippleThemeConfiguration.Focus.InsetRing

    val startThumbFocusRingModifier =
        if (isInsetFocusRing) {
            Modifier.indication(
                    interactionSource = startThumbInteractionSource,
                    indication =
                        ripple(
                            focusRingShape = SliderTokens.HandleShape.value,
                            enablePressIndication = false,
                            enableFocusIndication = true,
                            enableDragIndication = false,
                            enableHoverIndication = false,
                        ),
                )
                .padding(if (isStartFocused) insetFocusRingPadding else 0.dp)
        } else {
            Modifier
        }

    val endThumbFocusRingModifier =
        if (isInsetFocusRing) {

Sources: [live-androidx-material3-material3-material3-slider-lines-1431-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1466–1500)

            Modifier.indication(
                    interactionSource = endThumbInteractionSource,
                    indication =
                        ripple(
                            focusRingShape = SliderTokens.HandleShape.value,
                            enablePressIndication = false,
                            enableFocusIndication = true,
                            enableDragIndication = false,
                            enableHoverIndication = false,
                        ),
                )
                .padding(if (isEndFocused) insetFocusRingPadding else 0.dp)
        } else {
            Modifier
        }

    val density = LocalDensity.current

    Layout(
        {
            Box(
                modifier =
                    Modifier.layoutId(RangeSliderComponents.STARTTHUMB)
                        .then(startThumbFocusRingModifier)
                        .wrapContentWidth()
                        .onSizeChanged {
                            val padding =
                                if (isInsetFocusRing && isStartFocused) {
                                    with(density) { (insetFocusRingPadding * 2).roundToPx() }
                                } else {
                                    0
                                }
                            state.startThumbWidth = (it.width - padding).toFloat()
                            state.startThumbHeight = (it.height - padding).toFloat()
                        }

Sources: [live-androidx-material3-material3-material3-slider-lines-1466-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1501–1535)

                        .rangeSliderStartThumbSemantics(
                            state,
                            enabled,
                            onRangeValueChange,
                            onValueChangeFinished,
                        )
                        .semantics(mergeDescendants = true) {
                            contentDescription = startContentDescription
                        }
                        .rangeSliderOnKeyEvents(
                            enabled,
                            state,
                            true,
                            state.isRtl,
                            onRangeValueChange,
                            onValueChangeFinished,
                        )
                        .focusable(enabled, startThumbInteractionSource)
            ) {
                startThumb(state)
            }
            Box(
                modifier =
                    Modifier.layoutId(RangeSliderComponents.ENDTHUMB)
                        .then(endThumbFocusRingModifier)
                        .wrapContentWidth()
                        .onSizeChanged {
                            val padding =
                                if (isInsetFocusRing && isEndFocused) {
                                    with(density) { (insetFocusRingPadding * 2).roundToPx() }
                                } else {
                                    0
                                }
                            state.endThumbWidth = (it.width - padding).toFloat()
                            state.endThumbHeight = (it.height - padding).toFloat()

Sources: [live-androidx-material3-material3-material3-slider-lines-1501-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1536–1570)

                        }
                        .rangeSliderEndThumbSemantics(
                            state,
                            enabled,
                            onRangeValueChange,
                            onValueChangeFinished,
                        )
                        .semantics(mergeDescendants = true) {
                            contentDescription = endContentDescription
                        }
                        .rangeSliderOnKeyEvents(
                            enabled,
                            state,
                            false,
                            state.isRtl,
                            onRangeValueChange,
                            onValueChangeFinished,
                        )
                        .focusable(enabled, endThumbInteractionSource)
            ) {
                endThumb(state)
            }
            Box(modifier = Modifier.layoutId(RangeSliderComponents.TRACK)) { track(state) }
        },
        modifier =
            modifier
                .minimumInteractiveComponentSize()
                .requiredSizeIn(minWidth = ThumbWidth, minHeight = TrackHeight)
                .then(pressDrag),
    ) { measurables, constraints ->
        val startTrackPadding =
            if (isInsetFocusRing && isStartFocused) insetFocusRingPadding.roundToPx() else 0
        val endTrackPadding =
            if (isInsetFocusRing && isEndFocused) insetFocusRingPadding.roundToPx() else 0


Sources: [live-androidx-material3-material3-material3-slider-lines-1536-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1571–1605)

        val startThumbPlaceable =
            measurables
                .fastFirst { it.layoutId == RangeSliderComponents.STARTTHUMB }
                .measure(constraints)

        val endThumbPlaceable =
            measurables
                .fastFirst { it.layoutId == RangeSliderComponents.ENDTHUMB }
                .measure(constraints)

        val trackPlaceable =
            measurables
                .fastFirst { it.layoutId == RangeSliderComponents.TRACK }
                .measure(
                    constraints
                        .offset(
                            horizontal =
                                -(startThumbPlaceable.width - 2 * startTrackPadding +
                                    endThumbPlaceable.width - 2 * endTrackPadding) / 2
                        )
                        .copy(minHeight = 0)
                )

        val sliderWidth =
            trackPlaceable.width +
                (startThumbPlaceable.width - 2 * startTrackPadding + endThumbPlaceable.width -
                    2 * endTrackPadding) / 2
        val sliderHeight =
            maxOf(
                trackPlaceable.height,
                startThumbPlaceable.height - 2 * startTrackPadding,
                endThumbPlaceable.height - 2 * endTrackPadding,
            )

        state.totalWidth = sliderWidth

Sources: [live-androidx-material3-material3-material3-slider-lines-1571-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1606–1640)


        state.updateMinMaxPx()

        val trackOffsetX = startThumbPlaceable.width / 2 - startTrackPadding
        val trackCornerSize =
            trackPlaceable[CornerSizeAlignmentLine].let {
                if (it != AlignmentLine.Unspecified) it else 0
            }

        // When start thumb and end thumb have different widths,
        // we need to add a correction for the centering of the slider.
        val startThumbCoreWidth = startThumbPlaceable.width - 2 * startTrackPadding
        val endThumbCoreWidth = endThumbPlaceable.width - 2 * endTrackPadding
        val endCorrection = (startThumbCoreWidth - endThumbCoreWidth) / 2
        val trackOffsetY = (sliderHeight - trackPlaceable.height) / 2
        val startThumbOffsetY = (sliderHeight - startThumbPlaceable.height) / 2
        val endThumbOffsetY = (sliderHeight - endThumbPlaceable.height) / 2

        layout(sliderWidth, sliderHeight) {
            val startValueAsFraction = state.coercedStartValueAsFraction
            val isStartOnFirstOrLastStep =
                startValueAsFraction == state.tickFractions.firstOrNull() ||
                    startValueAsFraction == state.tickFractions.lastOrNull()
            val endValueAsFraction = state.coercedEndValueAsFraction
            val isEndOnFirstOrLastStep =
                endValueAsFraction == state.tickFractions.firstOrNull() ||
                    endValueAsFraction == state.tickFractions.lastOrNull()

            val startThumbOffsetX =
                if (state.steps > 0 && !isStartOnFirstOrLastStep) {
                    ((trackPlaceable.width - trackCornerSize * 2) * startValueAsFraction)
                        .roundToInt() + trackCornerSize
                } else {
                    (trackPlaceable.width * startValueAsFraction).roundToInt()
                }

Sources: [live-androidx-material3-material3-material3-slider-lines-1606-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1641–1675)

            val endThumbOffsetX =
                if (state.steps > 0 && !isEndOnFirstOrLastStep) {
                    ((trackPlaceable.width - trackCornerSize * 2) * endValueAsFraction +
                            endCorrection)
                        .roundToInt() + trackCornerSize
                } else {
                    (trackPlaceable.width * endValueAsFraction + endCorrection).roundToInt()
                }

            trackPlaceable.placeRelative(trackOffsetX, trackOffsetY)
            startThumbPlaceable.placeRelative(
                startThumbOffsetX - startTrackPadding,
                startThumbOffsetY,
            )
            endThumbPlaceable.placeRelative(endThumbOffsetX - endTrackPadding, endThumbOffsetY)
        }
    }
}

/** Object to hold defaults used by [Slider] */
@Stable
public object SliderDefaults {

    /**
     * Creates a [SliderColors] that represents the different colors used in parts of the [Slider]
     * in different states.
     */
    @Composable public fun colors(): SliderColors = MaterialTheme.colorScheme.defaultSliderColors

    /**
     * Creates a [SliderColors] that represents the different colors used in parts of the [Slider]
     * in different states.
     *
     * For the name references below the words "active" and "inactive" are used. Active part of the
     * slider is filled with progress, so if slider's progress is 30% out of 100%, left (or right in

Sources: [live-androidx-material3-material3-material3-slider-lines-1641-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1676–1710)

     * RTL) 30% of the track will be active, while the rest is inactive.
     *
     * @param thumbColor thumb color when enabled
     * @param activeTrackColor color of the track in the part that is "active", meaning that the
     *   thumb is ahead of it
     * @param activeTickColor colors to be used to draw tick marks on the active track, if `steps`
     *   is specified
     * @param inactiveTrackColor color of the track in the part that is "inactive", meaning that the
     *   thumb is before it
     * @param inactiveTickColor colors to be used to draw tick marks on the inactive track, if
     *   `steps` are specified on the Slider is specified
     * @param disabledThumbColor thumb colors when disabled
     * @param disabledActiveTrackColor color of the track in the "active" part when the Slider is
     *   disabled
     * @param disabledActiveTickColor colors to be used to draw tick marks on the active track when
     *   Slider is disabled and when `steps` are specified on it
     * @param disabledInactiveTrackColor color of the track in the "inactive" part when the Slider
     *   is disabled
     * @param disabledInactiveTickColor colors to be used to draw tick marks on the inactive part of
     *   the track when Slider is disabled and when `steps` are specified on it
     */
    @Composable
    public fun colors(
        thumbColor: Color = Color.Unspecified,
        activeTrackColor: Color = Color.Unspecified,
        activeTickColor: Color = Color.Unspecified,
        inactiveTrackColor: Color = Color.Unspecified,
        inactiveTickColor: Color = Color.Unspecified,
        disabledThumbColor: Color = Color.Unspecified,
        disabledActiveTrackColor: Color = Color.Unspecified,
        disabledActiveTickColor: Color = Color.Unspecified,
        disabledInactiveTrackColor: Color = Color.Unspecified,
        disabledInactiveTickColor: Color = Color.Unspecified,
    ): SliderColors =
        MaterialTheme.colorScheme.defaultSliderColors.copy(

Sources: [live-androidx-material3-material3-material3-slider-lines-1676-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1711–1745)

            thumbColor = thumbColor,
            activeTrackColor = activeTrackColor,
            activeTickColor = activeTickColor,
            inactiveTrackColor = inactiveTrackColor,
            inactiveTickColor = inactiveTickColor,
            disabledThumbColor = disabledThumbColor,
            disabledActiveTrackColor = disabledActiveTrackColor,
            disabledActiveTickColor = disabledActiveTickColor,
            disabledInactiveTrackColor = disabledInactiveTrackColor,
            disabledInactiveTickColor = disabledInactiveTickColor,
        )

    internal val ColorScheme.defaultSliderColors: SliderColors
        get() {
            return defaultSliderColorsCached
                ?: SliderColors(
                        thumbColor = fromToken(SliderTokens.HandleColor),
                        activeTrackColor = fromToken(SliderTokens.ActiveTrackColor),
                        activeTickColor = fromToken(SliderTokens.InactiveTrackColor),
                        inactiveTrackColor = fromToken(SliderTokens.InactiveTrackColor),
                        inactiveTickColor = fromToken(SliderTokens.ActiveTrackColor),
                        disabledThumbColor =
                            fromToken(SliderTokens.DisabledHandleColor)
                                .copy(alpha = SliderTokens.DisabledHandleOpacity)
                                .compositeOver(surface),
                        disabledActiveTrackColor =
                            fromToken(SliderTokens.DisabledActiveTrackColor)
                                .copy(alpha = SliderTokens.DisabledActiveTrackOpacity),
                        disabledActiveTickColor =
                            fromToken(SliderTokens.DisabledInactiveTrackColor)
                                .copy(alpha = SliderTokens.DisabledInactiveTrackOpacity),
                        disabledInactiveTrackColor =
                            fromToken(SliderTokens.DisabledInactiveTrackColor)
                                .copy(alpha = SliderTokens.DisabledInactiveTrackOpacity),
                        disabledInactiveTickColor =

Sources: [live-androidx-material3-material3-material3-slider-lines-1711-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1746–1780)

                            fromToken(SliderTokens.DisabledActiveTrackColor)
                                .copy(alpha = SliderTokens.DisabledActiveTrackOpacity),
                    )
                    .also { defaultSliderColorsCached = it }
        }

    /**
     * The Default thumb for [Slider] and [RangeSlider]
     *
     * @param interactionSource the [MutableInteractionSource] representing the stream of
     *   [Interaction]s for this thumb. You can create and pass in your own `remember`ed instance to
     *   observe
     * @param modifier the [Modifier] to be applied to the thumb.
     * @param colors [SliderColors] that will be used to resolve the colors used for this thumb in
     *   different states. See [SliderDefaults.colors].
     * @param enabled controls the enabled state of this slider. When `false`, this component will
     *   not respond to user input, and it will appear visually disabled and disabled to
     *   accessibility services.
     * @param thumbSize the size of the thumb.
     */
    @Composable
    public fun Thumb(
        interactionSource: MutableInteractionSource,
        modifier: Modifier = Modifier,
        colors: SliderColors = colors(),
        enabled: Boolean = true,
        thumbSize: DpSize = ThumbSize,
    ): Unit =
        Thumb(
            interactionSource = interactionSource,
            modifier = modifier,
            colors = colors,
            enabled = enabled,
            thumbSize = thumbSize,
            isVertical = false,

Sources: [live-androidx-material3-material3-material3-slider-lines-1746-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 176–210)

 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param valueRange range of values that this slider can take. The passed [value] will be coerced
 *   to this range.
 * @param steps if positive, specifies the amount of discrete allowable values between the endpoints
 *   of [valueRange]. For example, a range from 0 to 10 with 4 [steps] allows 4 values evenly
 *   distributed between 0 and 10 (i.e., 2, 4, 6, 8). If [steps] is 0, the slider will behave
 *   continuously and allow any value from the range. Must not be negative.
 * @param onValueChangeFinished called when value change has ended. This should not be used to
 *   update the slider value (use [onValueChange] instead), but rather to know when the user has
 *   completed selecting a new value by ending a drag or a click. For keyboard movements, this is
 *   called on every step.
 * @param colors [SliderColors] that will be used to resolve the colors used for this slider in
 *   different states. See [SliderDefaults.colors].
 * @param interactionSource the [MutableInteractionSource] representing the stream of [Interaction]s
 *   for this slider. You can create and pass in your own `remember`ed instance to observe
 *   [Interaction]s and customize the appearance / behavior of this slider in different states.
 */
@Deprecated(
    message =
        "Use the Slider overload that accepts SliderState, onValueChange, and onValueChangeFinished instead.",
    replaceWith =
        ReplaceWith(
            "Slider(state = rememberSliderState(value, steps, trackRange = valueRange), onValueChange = onValueChange, modifier = modifier, enabled = enabled, onValueChangeFinished = onValueChangeFinished, colors = colors, interactionSource = interactionSource)"
        ),
)
@Composable
public fun Slider(
    value: Float,
    onValueChange: (Float) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    valueRange: ClosedFloatingPointRange<Float> = 0f..1f,
    @IntRange(from = 0) steps: Int = 0,
    onValueChangeFinished: (() -> Unit)? = null,

Sources: [live-androidx-material3-material3-material3-slider-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1781–1815)

        )

    /**
     * The Default thumb for [Slider], [VerticalSlider] and [RangeSlider]
     *
     * @param interactionSource the [MutableInteractionSource] representing the stream of
     *   [Interaction]s for this thumb. You can create and pass in your own `remember`ed instance to
     *   observe
     * @param sliderState [SliderState] which is used to obtain the current active track.
     * @param modifier the [Modifier] to be applied to the thumb.
     * @param colors [SliderColors] that will be used to resolve the colors used for this thumb in
     *   different states. See [SliderDefaults.colors].
     * @param enabled controls the enabled state of this slider. When `false`, this component will
     *   not respond to user input, and it will appear visually disabled and disabled to
     *   accessibility services.
     * @param thumbSize the size of the thumb.
     */
    @Deprecated(
        "Maintained for binary compatibility. Use the overload that takes isVertical instead.",
        level = DeprecationLevel.HIDDEN,
    )
    @ExperimentalMaterial3ExpressiveApi
    @Composable
    public fun Thumb(
        interactionSource: MutableInteractionSource,
        sliderState: SliderState,
        modifier: Modifier = Modifier,
        colors: SliderColors = colors(),
        enabled: Boolean = true,
        thumbSize: DpSize = ThumbSize,
    ): Unit =
        Thumb(
            interactionSource = interactionSource,
            isVertical = sliderState.orientation == Vertical,
            modifier = modifier,

Sources: [live-androidx-material3-material3-material3-slider-lines-1781-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1816–1850)

            colors = colors,
            enabled = enabled,
            thumbSize = thumbSize,
        )

    /**
     * The Default thumb for [Slider], [VerticalSlider] and [RangeSlider]
     *
     * @param interactionSource the [MutableInteractionSource] representing the stream of
     *   [Interaction]s for this thumb. You can create and pass in your own `remember`ed instance to
     *   observe
     * @param isVertical whether the slider that this thumb is being used in is a [VerticalSlider].
     * @param modifier the [Modifier] to be applied to the thumb.
     * @param colors [SliderColors] that will be used to resolve the colors used for this thumb in
     *   different states. See [SliderDefaults.colors].
     * @param enabled controls the enabled state of this slider. When `false`, this component will
     *   not respond to user input, and it will appear visually disabled and disabled to
     *   accessibility services.
     * @param thumbSize the size of the thumb.
     */
    @Composable
    public fun Thumb(
        interactionSource: MutableInteractionSource,
        isVertical: Boolean,
        modifier: Modifier = Modifier,
        colors: SliderColors = colors(),
        enabled: Boolean = true,
        thumbSize: DpSize = if (isVertical) VerticalThumbSize else ThumbSize,
    ): Unit =
        ThumbContent(
            interactionSource = interactionSource,
            modifier = modifier,
            colors = colors,
            enabled = enabled,
            thumbSize = thumbSize,

Sources: [live-androidx-material3-material3-material3-slider-lines-1816-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1851–1885)

            isVertical = isVertical,
        )

    /**
     * The Default track for [Slider] and [RangeSlider]
     *
     * @param sliderPositions [SliderPositions] which is used to obtain the current active track and
     *   the tick positions if the slider is discrete.
     * @param modifier the [Modifier] to be applied to the track.
     * @param colors [SliderColors] that will be used to resolve the colors used for this track in
     *   different states. See [SliderDefaults.colors].
     * @param enabled controls the enabled state of this slider. When `false`, this component will
     *   not respond to user input, and it will appear visually disabled and disabled to
     *   accessibility services.
     */
    @Suppress("DEPRECATION")
    @Composable
    @Deprecated("Use version that supports slider state")
    public fun Track(
        sliderPositions: SliderPositions,
        modifier: Modifier = Modifier,
        colors: SliderColors = colors(),
        enabled: Boolean = true,
    ) {
        val inactiveTrackColor = colors.trackColor(enabled, active = false)
        val activeTrackColor = colors.trackColor(enabled, active = true)
        val inactiveTickColor = colors.tickColor(enabled, active = false)
        val activeTickColor = colors.tickColor(enabled, active = true)
        Canvas(modifier.fillMaxWidth().height(TrackHeight)) {
            val isRtl = layoutDirection == LayoutDirection.Rtl
            val sliderLeft = Offset(0f, center.y)
            val sliderRight = Offset(size.width, center.y)
            val sliderStart = if (isRtl) sliderRight else sliderLeft
            val sliderEnd = if (isRtl) sliderLeft else sliderRight
            val tickSize = TickSize.toPx()

Sources: [live-androidx-material3-material3-material3-slider-lines-1851-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1886–1920)

            val trackStrokeWidth = TrackHeight.toPx()
            drawLine(inactiveTrackColor, sliderStart, sliderEnd, trackStrokeWidth, StrokeCap.Round)
            val sliderValueEnd =
                Offset(
                    sliderStart.x +
                        (sliderEnd.x - sliderStart.x) * sliderPositions.activeRange.endInclusive,
                    center.y,
                )

            val sliderValueStart =
                Offset(
                    sliderStart.x +
                        (sliderEnd.x - sliderStart.x) * sliderPositions.activeRange.start,
                    center.y,
                )

            drawLine(
                activeTrackColor,
                sliderValueStart,
                sliderValueEnd,
                trackStrokeWidth,
                StrokeCap.Round,
            )
            sliderPositions.tickFractions
                .groupBy {
                    it > sliderPositions.activeRange.endInclusive ||
                        it < sliderPositions.activeRange.start
                }
                .forEach { (outsideFraction, list) ->
                    drawPoints(
                        list.fastMap { Offset(lerp(sliderStart, sliderEnd, it).x, center.y) },
                        PointMode.Points,
                        (if (outsideFraction) inactiveTickColor else activeTickColor),
                        tickSize,
                        StrokeCap.Round,

Sources: [live-androidx-material3-material3-material3-slider-lines-1886-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1921–1955)

                    )
                }
        }
    }

    /**
     * The Default track for [Slider]
     *
     * @param sliderState [SliderState] which is used to obtain the current active track.
     * @param modifier the [Modifier] to be applied to the track.
     * @param enabled controls the enabled state of this slider. When `false`, this component will
     *   not respond to user input, and it will appear visually disabled and disabled to
     *   accessibility services.
     * @param colors [SliderColors] that will be used to resolve the colors used for this track in
     *   different states. See [SliderDefaults.colors].
     * @param drawStopIndicator lambda that will be called to draw the stop indicator at the end of
     *   the track.
     * @param drawTick lambda that will be called to draw the ticks if steps are greater than 0.
     * @param thumbTrackGapSize size of the gap between the thumb and the track.
     * @param trackInsideCornerSize size of the corners towards the thumb when a gap is set.
     */
    @Composable
    public fun Track(
        sliderState: SliderState,
        modifier: Modifier = Modifier,
        enabled: Boolean = true,
        colors: SliderColors = colors(),
        drawStopIndicator: (DrawScope.(Offset) -> Unit)? = {
            drawStopIndicator(
                offset = it,
                color = colors.trackColor(enabled, active = true),
                size = TrackStopIndicatorSize,
            )
        },
        drawTick: DrawScope.(Offset, Color) -> Unit = { offset, color ->

Sources: [live-androidx-material3-material3-material3-slider-lines-1921-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1956–1990)

            drawStopIndicator(offset = offset, color = color, size = TickSize)
        },
        thumbTrackGapSize: Dp = ThumbTrackGapSize,
        trackInsideCornerSize: Dp = TrackInsideCornerSize,
    ) {
        TrackImpl(
            sliderState = sliderState,
            trackCornerSize = Dp.Unspecified,
            modifier = modifier,
            enabled = enabled,
            colors = colors,
            drawStopIndicator = drawStopIndicator,
            drawTick = drawTick,
            thumbTrackGapSize = thumbTrackGapSize,
            trackInsideCornerSize = trackInsideCornerSize,
            enableCornerShrinking = false,
            isCentered = false,
        )
    }

    /**
     * The Default track for [Slider] and [VerticalSlider]
     *
     * This track has a different corner treatment where the corner size decreases as the thumb gets
     * closer.
     *
     * @param sliderState [SliderState] which is used to obtain the current active track.
     * @param trackCornerSize size of the external corners.
     * @param modifier the [Modifier] to be applied to the track.
     * @param enabled controls the enabled state of this slider. When `false`, this component will
     *   not respond to user input, and it will appear visually disabled and disabled to
     *   accessibility services.
     * @param colors [SliderColors] that will be used to resolve the colors used for this track in
     *   different states. See [SliderDefaults.colors].
     * @param drawStopIndicator lambda that will be called to draw the stop indicator at the end of

Sources: [live-androidx-material3-material3-material3-slider-lines-1956-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 1991–2025)

     *   the track.
     * @param drawTick lambda that will be called to draw the ticks if steps are greater than 0.
     * @param thumbTrackGapSize size of the gap between the thumb and the track.
     * @param trackInsideCornerSize size of the corners towards the thumb when a gap is set.
     */
    @Composable
    public fun Track(
        sliderState: SliderState,
        trackCornerSize: Dp,
        modifier: Modifier = Modifier,
        enabled: Boolean = true,
        colors: SliderColors = colors(),
        drawStopIndicator: (DrawScope.(Offset) -> Unit)? = {
            drawStopIndicator(
                offset = it,
                color = colors.trackColor(enabled, active = true),
                size = TrackStopIndicatorSize,
            )
        },
        drawTick: DrawScope.(Offset, Color) -> Unit = { offset, color ->
            drawStopIndicator(offset = offset, color = color, size = TickSize)
        },
        thumbTrackGapSize: Dp = ThumbTrackGapSize,
        trackInsideCornerSize: Dp = TrackInsideCornerSize,
    ) {
        TrackImpl(
            sliderState = sliderState,
            trackCornerSize = trackCornerSize,
            modifier = modifier,
            enabled = enabled,
            colors = colors,
            drawStopIndicator = drawStopIndicator,
            drawTick = drawTick,
            thumbTrackGapSize = thumbTrackGapSize,
            trackInsideCornerSize = trackInsideCornerSize,

Sources: [live-androidx-material3-material3-material3-slider-lines-1991-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2026–2060)

            enableCornerShrinking = true,
            isCentered = false,
        )
    }

    /**
     * The Default centered track for [Slider] and [VerticalSlider]
     *
     * This track starts from the center of the slider.
     *
     * @param sliderState [SliderState] which is used to obtain the current active track.
     * @param modifier the [Modifier] to be applied to the track.
     * @param enabled controls the enabled state of this slider. When `false`, this component will
     *   not respond to user input, and it will appear visually disabled and disabled to
     *   accessibility services.
     * @param colors [SliderColors] that will be used to resolve the colors used for this track in
     *   different states. See [SliderDefaults.colors].
     * @param drawStopIndicator lambda that will be called to draw the stop indicator at the end of
     *   the track.
     * @param drawTick lambda that will be called to draw the ticks if steps are greater than 0.
     * @param thumbTrackGapSize size of the gap between the thumb and the track.
     * @param trackInsideCornerSize size of the corners towards the thumb when a gap is set.
     * @param trackCornerSize size of the external corners.
     */
    @Composable
    public fun CenteredTrack(
        sliderState: SliderState,
        modifier: Modifier = Modifier,
        enabled: Boolean = true,
        colors: SliderColors = colors(),
        drawStopIndicator: (DrawScope.(Offset) -> Unit)? = {
            drawStopIndicator(
                offset = it,
                color = colors.trackColor(enabled, active = true),
                size = TrackStopIndicatorSize,

Sources: [live-androidx-material3-material3-material3-slider-lines-2026-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2061–2095)

            )
        },
        drawTick: DrawScope.(Offset, Color) -> Unit = { offset, color ->
            drawStopIndicator(offset = offset, color = color, size = TickSize)
        },
        thumbTrackGapSize: Dp = ThumbTrackGapSize,
        trackInsideCornerSize: Dp = TrackInsideCornerSize,
        trackCornerSize: Dp = Dp.Unspecified,
    ) {
        TrackImpl(
            sliderState = sliderState,
            trackCornerSize = trackCornerSize,
            modifier = modifier,
            enabled = enabled,
            colors = colors,
            drawStopIndicator = drawStopIndicator,
            drawTick = drawTick,
            thumbTrackGapSize = thumbTrackGapSize,
            trackInsideCornerSize = trackInsideCornerSize,
            enableCornerShrinking = true,
            isCentered = true,
        )
    }

    @Composable
    private fun TrackImpl(
        sliderState: SliderState,
        trackCornerSize: Dp,
        modifier: Modifier,
        enabled: Boolean,
        colors: SliderColors,
        drawStopIndicator: (DrawScope.(Offset) -> Unit)?,
        drawTick: DrawScope.(Offset, Color) -> Unit,
        thumbTrackGapSize: Dp,
        trackInsideCornerSize: Dp,

Sources: [live-androidx-material3-material3-material3-slider-lines-2061-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2096–2130)

        enableCornerShrinking: Boolean,
        isCentered: Boolean,
    ) {
        val orientation = sliderState.orientation
        val reverseVerticalDirection = sliderState.reverseVerticalDirection
        val inactiveTrackColor = colors.trackColor(enabled = enabled, active = false)
        val activeTrackColor = colors.trackColor(enabled = enabled, active = true)
        val inactiveTickColor = colors.tickColor(enabled = enabled, active = false)
        val activeTickColor = colors.tickColor(enabled = enabled, active = true)
        val isInsetFocusRing =
            LocalRippleThemeConfiguration.current.focus is RippleThemeConfiguration.Focus.InsetRing
        val focusPadding =
            if (isInsetFocusRing && sliderState.isFocused) insetFocusRingPadding else 0.dp
        Canvas(
            if (orientation == Vertical) {
                    modifier.width(TrackHeight).fillMaxHeight().let {
                        if (reverseVerticalDirection) it.scale(1f, -1f) else it
                    }
                } else {
                    modifier.fillMaxWidth().height(TrackHeight)
                }
                .then(
                    Modifier.layout { measurable, constraints ->
                        val placeable = measurable.measure(constraints)
                        val cornerSize =
                            if (trackCornerSize == Dp.Unspecified) {
                                if (orientation == Vertical) {
                                    placeable.width / 2
                                } else {
                                    placeable.height / 2
                                }
                            } else {
                                trackCornerSize.roundToPx()
                            }
                        layout(

Sources: [live-androidx-material3-material3-material3-slider-lines-2096-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 211–245)

    colors: SliderColors = SliderDefaults.colors(),
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
) {
    val state = remember(steps, valueRange) { SliderState(value, steps, valueRange) }
    state.value = value

    Slider(
        state = state,
        onValueChange = onValueChange,
        modifier = modifier,
        enabled = enabled,
        onValueChangeFinished = onValueChangeFinished,
        colors = colors,
        interactionSource = interactionSource,
        thumb = {
            SliderDefaults.Thumb(
                interactionSource = interactionSource,
                colors = colors,
                enabled = enabled,
            )
        },
        track = { sliderState ->
            SliderDefaults.Track(colors = colors, enabled = enabled, sliderState = sliderState)
        },
    )
}

/**
 * [Material Design slider](https://m3.material.io/components/sliders/overview)
 *
 * Sliders allow users to make selections from a range of values.
 *
 * Sliders reflect a range of values along a bar, from which users may select a single value. They
 * are ideal for adjusting settings such as volume, brightness, or applying image filters.
 *

Sources: [live-androidx-material3-material3-material3-slider-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2131–2165)

                            width = placeable.width,
                            height = placeable.height,
                            alignmentLines = mapOf(CornerSizeAlignmentLine to cornerSize),
                        ) {
                            placeable.place(0, 0)
                        }
                    }
                )
        ) {
            val cornerSize: Float =
                if (trackCornerSize == Dp.Unspecified) {
                    if (orientation == Vertical) {
                        size.width / 2
                    } else {
                        size.height / 2
                    }
                } else {
                    trackCornerSize.toPx()
                }
            val isThumbBeforeCenter = sliderState.coercedValueAsFraction < 0.5f
            val isThumbAfterCenter = sliderState.coercedValueAsFraction > 0.5f
            val startThumbWidth =
                if (isCentered && !isThumbAfterCenter) {
                    sliderState.thumbWidth.toDp()
                } else {
                    0.dp
                }
            val startThumbHeight =
                if (isCentered && !isThumbAfterCenter) {
                    sliderState.thumbHeight.toDp()
                } else {
                    0.dp
                }
            val endThumbWidth =
                if (isCentered) {

Sources: [live-androidx-material3-material3-material3-slider-lines-2131-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2166–2200)

                    if (!isThumbBeforeCenter) sliderState.thumbWidth.toDp() else 0.dp
                } else {
                    sliderState.thumbWidth.toDp()
                }
            val endThumbHeight =
                if (isCentered) {
                    if (!isThumbBeforeCenter) sliderState.thumbHeight.toDp() else 0.dp
                } else {
                    sliderState.thumbHeight.toDp()
                }
            drawTrack(
                tickFractions = sliderState.tickFractions,
                activeRangeStart = 0f,
                activeRangeEnd = sliderState.coercedValueAsFraction,
                inactiveTrackColor = inactiveTrackColor,
                activeTrackColor = activeTrackColor,
                inactiveTickColor = inactiveTickColor,
                activeTickColor = activeTickColor,
                startThumbWidth = startThumbWidth,
                startThumbHeight = startThumbHeight,
                endThumbWidth = endThumbWidth,
                endThumbHeight = endThumbHeight,
                startThumbTrackGapSize = if (isCentered) thumbTrackGapSize + focusPadding else 0.dp,
                endThumbTrackGapSize = thumbTrackGapSize + focusPadding,
                trackInsideCornerSize = trackInsideCornerSize,
                trackCornerSize = cornerSize.toDp(),
                drawStopIndicator = drawStopIndicator,
                drawTick = drawTick,
                isRangeSlider = false,
                enableCornerShrinking = enableCornerShrinking,
                orientation = orientation,
                isCentered = isCentered,
            )
        }
    }

Sources: [live-androidx-material3-material3-material3-slider-lines-2166-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2201–2235)


    /**
     * The Default track for [RangeSlider]
     *
     * @param rangeSliderState [RangeSliderState] which is used to obtain the current active track.
     * @param modifier the [Modifier] to be applied to the track.
     * @param colors [SliderColors] that will be used to resolve the colors used for this track in
     *   different states. See [SliderDefaults.colors].
     * @param enabled controls the enabled state of this slider. When `false`, this component will
     *   not respond to user input, and it will appear visually disabled and disabled to
     *   accessibility services.
     */
    @Deprecated(
        message =
            "Use the overload that takes `drawStopIndicator`, `drawTick`, " +
                "`thumbTrackGapSize` and `trackInsideCornerSize`, see `LegacyRangeSliderSample` " +
                "on how to restore the previous behavior",
        replaceWith =
            ReplaceWith(
                "Track(rangeSliderState, modifier, colors, enabled, drawStopIndicator, " +
                    "drawTick, thumbTrackGapSize, trackInsideCornerSize)"
            ),
        level = DeprecationLevel.HIDDEN,
    )
    @Composable
    public fun Track(
        rangeSliderState: RangeSliderState,
        modifier: Modifier = Modifier,
        colors: SliderColors = colors(),
        enabled: Boolean = true,
    ) {
        Track(
            rangeSliderState,
            modifier,
            enabled,

Sources: [live-androidx-material3-material3-material3-slider-lines-2201-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2236–2270)

            colors,
            thumbTrackGapSize = ThumbTrackGapSize,
            trackInsideCornerSize = TrackInsideCornerSize,
        )
    }

    /**
     * The Default track for [RangeSlider]
     *
     * @param rangeSliderState [RangeSliderState] which is used to obtain the current active track.
     * @param modifier the [Modifier] to be applied to the track.
     * @param enabled controls the enabled state of this slider. When `false`, this component will
     *   not respond to user input, and it will appear visually disabled and disabled to
     *   accessibility services.
     * @param colors [SliderColors] that will be used to resolve the colors used for this track in
     *   different states. See [SliderDefaults.colors].
     * @param drawStopIndicator lambda that will be called to draw the stop indicator at the
     *   start/end of the track.
     * @param drawTick lambda that will be called to draw the ticks if steps are greater than 0.
     * @param thumbTrackGapSize size of the gap between the thumbs and the track.
     * @param trackInsideCornerSize size of the corners towards the thumbs when a gap is set.
     */
    @Composable
    public fun Track(
        rangeSliderState: RangeSliderState,
        modifier: Modifier = Modifier,
        enabled: Boolean = true,
        colors: SliderColors = colors(),
        drawStopIndicator: (DrawScope.(Offset) -> Unit)? = {
            drawStopIndicator(
                offset = it,
                color = colors.trackColor(enabled, active = true),
                size = TrackStopIndicatorSize,
            )
        },

Sources: [live-androidx-material3-material3-material3-slider-lines-2236-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2271–2305)

        drawTick: DrawScope.(Offset, Color) -> Unit = { offset, color ->
            drawStopIndicator(offset = offset, color = color, size = TickSize)
        },
        thumbTrackGapSize: Dp = ThumbTrackGapSize,
        trackInsideCornerSize: Dp = TrackInsideCornerSize,
    ) {
        TrackImpl(
            rangeSliderState = rangeSliderState,
            trackCornerSize = Dp.Unspecified,
            modifier = modifier,
            enabled = enabled,
            colors = colors,
            drawStopIndicator = drawStopIndicator,
            drawTick = drawTick,
            thumbTrackGapSize = thumbTrackGapSize,
            trackInsideCornerSize = trackInsideCornerSize,
        )
    }

    /**
     * The Default track for [RangeSlider]
     *
     * @param rangeSliderState [RangeSliderState] which is used to obtain the current active track.
     * @param trackCornerSize size of the external corners.
     * @param modifier the [Modifier] to be applied to the track.
     * @param enabled controls the enabled state of this slider. When `false`, this component will
     *   not respond to user input, and it will appear visually disabled and disabled to
     *   accessibility services.
     * @param colors [SliderColors] that will be used to resolve the colors used for this track in
     *   different states. See [SliderDefaults.colors].
     * @param drawStopIndicator lambda that will be called to draw the stop indicator at the
     *   start/end of the track.
     * @param drawTick lambda that will be called to draw the ticks if steps are greater than 0.
     * @param thumbTrackGapSize size of the gap between the thumbs and the track.
     * @param trackInsideCornerSize size of the corners towards the thumbs when a gap is set.

Sources: [live-androidx-material3-material3-material3-slider-lines-2271-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2306–2340)

     */
    @Composable
    public fun Track(
        rangeSliderState: RangeSliderState,
        trackCornerSize: Dp,
        modifier: Modifier = Modifier,
        enabled: Boolean = true,
        colors: SliderColors = colors(),
        drawStopIndicator: (DrawScope.(Offset) -> Unit)? = {
            drawStopIndicator(
                offset = it,
                color = colors.trackColor(enabled, active = true),
                size = TrackStopIndicatorSize,
            )
        },
        drawTick: DrawScope.(Offset, Color) -> Unit = { offset, color ->
            drawStopIndicator(offset = offset, color = color, size = TickSize)
        },
        thumbTrackGapSize: Dp = ThumbTrackGapSize,
        trackInsideCornerSize: Dp = TrackInsideCornerSize,
    ) {
        TrackImpl(
            rangeSliderState = rangeSliderState,
            trackCornerSize = trackCornerSize,
            modifier = modifier,
            enabled = enabled,
            colors = colors,
            drawStopIndicator = drawStopIndicator,
            drawTick = drawTick,
            thumbTrackGapSize = thumbTrackGapSize,
            trackInsideCornerSize = trackInsideCornerSize,
        )
    }

    @Composable

Sources: [live-androidx-material3-material3-material3-slider-lines-2306-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2341–2375)

    private fun TrackImpl(
        rangeSliderState: RangeSliderState,
        trackCornerSize: Dp,
        modifier: Modifier,
        enabled: Boolean,
        colors: SliderColors,
        drawStopIndicator: (DrawScope.(Offset) -> Unit)?,
        drawTick: DrawScope.(Offset, Color) -> Unit,
        thumbTrackGapSize: Dp,
        trackInsideCornerSize: Dp,
    ) {
        val inactiveTrackColor = colors.trackColor(enabled, active = false)
        val activeTrackColor = colors.trackColor(enabled, active = true)
        val inactiveTickColor = colors.tickColor(enabled, active = false)
        val activeTickColor = colors.tickColor(enabled, active = true)
        val isInsetFocusRing =
            LocalRippleThemeConfiguration.current.focus is RippleThemeConfiguration.Focus.InsetRing
        val startFocusPadding =
            if (isInsetFocusRing && rangeSliderState.isStartFocused) insetFocusRingPadding else 0.dp
        val endFocusPadding =
            if (isInsetFocusRing && rangeSliderState.isEndFocused) insetFocusRingPadding else 0.dp
        Canvas(
            modifier.fillMaxWidth().height(TrackHeight).layout { measurable, constraints ->
                val placeable = measurable.measure(constraints)
                val trackCornerSize = placeable.height / 2
                layout(
                    width = placeable.width,
                    height = placeable.height,
                    alignmentLines = mapOf(CornerSizeAlignmentLine to trackCornerSize),
                ) {
                    placeable.place(0, 0)
                }
            }
        ) {
            val cornerSize: Float =

Sources: [live-androidx-material3-material3-material3-slider-lines-2341-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2376–2410)

                if (trackCornerSize == Dp.Unspecified) {
                    size.height / 2
                } else {
                    trackCornerSize.toPx()
                }
            drawTrack(
                tickFractions = rangeSliderState.tickFractions,
                activeRangeStart = rangeSliderState.coercedStartValueAsFraction,
                activeRangeEnd = rangeSliderState.coercedEndValueAsFraction,
                inactiveTrackColor = inactiveTrackColor,
                activeTrackColor = activeTrackColor,
                inactiveTickColor = inactiveTickColor,
                activeTickColor = activeTickColor,
                startThumbWidth = rangeSliderState.startThumbWidth.toDp(),
                startThumbHeight = rangeSliderState.startThumbHeight.toDp(),
                endThumbWidth = rangeSliderState.endThumbWidth.toDp(),
                endThumbHeight = rangeSliderState.endThumbHeight.toDp(),
                startThumbTrackGapSize = thumbTrackGapSize + startFocusPadding,
                endThumbTrackGapSize = thumbTrackGapSize + endFocusPadding,
                trackInsideCornerSize = trackInsideCornerSize,
                trackCornerSize = cornerSize.toDp(),
                drawStopIndicator = drawStopIndicator,
                drawTick = drawTick,
                isRangeSlider = true,
            )
        }
    }

    private fun DrawScope.drawTrack(
        tickFractions: FloatArray,
        activeRangeStart: Float,
        activeRangeEnd: Float,
        inactiveTrackColor: Color,
        activeTrackColor: Color,
        inactiveTickColor: Color,

Sources: [live-androidx-material3-material3-material3-slider-lines-2376-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2411–2445)

        activeTickColor: Color,
        startThumbWidth: Dp,
        startThumbHeight: Dp,
        endThumbWidth: Dp,
        endThumbHeight: Dp,
        startThumbTrackGapSize: Dp,
        endThumbTrackGapSize: Dp,
        trackInsideCornerSize: Dp,
        trackCornerSize: Dp,
        drawStopIndicator: (DrawScope.(Offset) -> Unit)?,
        drawTick: DrawScope.(Offset, Color) -> Unit,
        isRangeSlider: Boolean,
        enableCornerShrinking: Boolean = false,
        orientation: Orientation = Horizontal,
        isCentered: Boolean = false,
    ) {
        val isVertical = orientation == Vertical
        val isRtl = layoutDirection == LayoutDirection.Rtl
        val isRtlHorizontal = isRtl && !isVertical
        val cornerSize = trackCornerSize.toPx()
        val sliderStart = 0f
        val sliderEnd = if (isVertical) size.height else size.width

        val isStartOnFirstOrLastStep =
            activeRangeStart == tickFractions.firstOrNull() ||
                activeRangeStart == tickFractions.lastOrNull()
        val isEndOnFirstOrLastStep =
            activeRangeEnd == tickFractions.firstOrNull() ||
                activeRangeEnd == tickFractions.lastOrNull()
        val sliderValueEnd =
            if (tickFractions.isNotEmpty() && !isEndOnFirstOrLastStep) {
                sliderStart +
                    (sliderEnd - sliderStart - cornerSize * 2) * activeRangeEnd +
                    cornerSize
            } else {

Sources: [live-androidx-material3-material3-material3-slider-lines-2411-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2446–2480)

                sliderStart + (sliderEnd - sliderStart) * activeRangeEnd
            }
        val sliderValueStart =
            if (tickFractions.isNotEmpty() && !isStartOnFirstOrLastStep) {
                sliderStart +
                    (sliderEnd - sliderStart - cornerSize * 2) * activeRangeStart +
                    cornerSize
            } else {
                sliderStart + (sliderEnd - sliderStart) * activeRangeStart
            }

        val insideCornerSize = trackInsideCornerSize.toPx()
        var startGap = 0f
        var endGap = 0f
        if (isVertical) {
            if (startThumbTrackGapSize > 0.dp) {
                startGap = startThumbHeight.toPx() / 2 + startThumbTrackGapSize.toPx()
            }
            if (endThumbTrackGapSize > 0.dp) {
                endGap = endThumbHeight.toPx() / 2 + endThumbTrackGapSize.toPx()
            }
        } else {
            if (startThumbTrackGapSize > 0.dp) {
                startGap = startThumbWidth.toPx() / 2 + startThumbTrackGapSize.toPx()
            }
            if (endThumbTrackGapSize > 0.dp) {
                endGap = endThumbWidth.toPx() / 2 + endThumbTrackGapSize.toPx()
            }
        }
        val centerAxis = if (isVertical) center.y else center.x

        // inactive track (centered or range slider)
        var rangeInactiveTrackThreshold = sliderStart + startGap
        if (!enableCornerShrinking || tickFractions.isNotEmpty()) {
            rangeInactiveTrackThreshold += cornerSize

Sources: [live-androidx-material3-material3-material3-slider-lines-2446-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 246–280)

 * ![Sliders
 * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqe2zb2b-1.png?alt=media)
 *
 * Use continuous sliders to allow users to make meaningful selections that don’t require a specific
 * value:
 *
 * @sample androidx.compose.material3.samples.SliderSample
 *
 * You can allow the user to choose only between predefined set of values by specifying the amount
 * of steps between min and max values:
 *
 * @sample androidx.compose.material3.samples.StepsSliderSample
 *
 * Slider using a custom thumb:
 *
 * @sample androidx.compose.material3.samples.SliderWithCustomThumbSample
 *
 * Slider using custom track and thumb:
 *
 * @sample androidx.compose.material3.samples.SliderWithCustomTrackAndThumbSample
 *
 * Slider using track icons:
 *
 * @sample androidx.compose.material3.samples.SliderWithTrackIconsSample
 *
 * Continuous Slider with a centered track:
 *
 * @sample androidx.compose.material3.samples.CenteredSliderSample
 * @param state [SliderState] which contains the slider's current value.
 * @param onValueChange callback in which value should be updated from the [state] (e.g.
 *   `state.value = it`)
 * @param modifier the [Modifier] to be applied to this slider
 * @param enabled controls the enabled state of this slider. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.

Sources: [live-androidx-material3-material3-material3-slider-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2481–2515)

        }
        val adjustedSliderValueEnd =
            if (isCentered) {
                min(sliderValueEnd, centerAxis)
            } else {
                sliderValueStart
            }
        if ((isCentered || isRangeSlider) && adjustedSliderValueEnd > rangeInactiveTrackThreshold) {
            val startCornerRadius = if (isRtlHorizontal) insideCornerSize else cornerSize
            val endCornerRadius = if (isRtlHorizontal) cornerSize else insideCornerSize
            val start = sliderStart
            val end = adjustedSliderValueEnd - startGap
            val trackOffset =
                if (isRtlHorizontal) {
                    Offset(size.width - end, 0f)
                } else {
                    Offset(0f, 0f)
                }
            val trackSize =
                if (isVertical) {
                    Size(size.width, end - start)
                } else {
                    Size(end - start, size.height)
                }
            drawTrackPath(
                orientation,
                trackOffset,
                trackSize,
                inactiveTrackColor,
                startCornerRadius,
                endCornerRadius,
            )
            val stopIndicatorOffset =
                if (isVertical) {
                    Offset(center.x, start + cornerSize)

Sources: [live-androidx-material3-material3-material3-slider-lines-2481-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2516–2550)

                } else if (isRtl) {
                    Offset(size.width - start - cornerSize, center.y)
                } else {
                    Offset(start + cornerSize, center.y)
                }
            drawStopIndicator?.invoke(this, stopIndicatorOffset)
        }
        // inactive track
        var inactiveTrackThreshold = sliderEnd - endGap
        if (!enableCornerShrinking || tickFractions.isNotEmpty()) {
            inactiveTrackThreshold -= cornerSize
        }
        val adjustedSliderValueStart =
            if (isCentered) {
                max(sliderValueEnd, centerAxis)
            } else {
                sliderValueEnd
            }
        if (adjustedSliderValueStart < inactiveTrackThreshold) {
            val startCornerRadius = if (isRtlHorizontal) cornerSize else insideCornerSize
            val endCornerRadius = if (isRtlHorizontal) insideCornerSize else cornerSize
            val start = adjustedSliderValueStart + endGap
            val end = sliderEnd
            val inactiveTrackWidth = end - start
            val trackOffset =
                if (isVertical) {
                    Offset(0f, start)
                } else if (isRtl) {
                    Offset(0f, 0f)
                } else {
                    Offset(start, 0f)
                }
            val size =
                if (isVertical) {
                    Size(size.width, inactiveTrackWidth)

Sources: [live-androidx-material3-material3-material3-slider-lines-2516-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2551–2585)

                } else if (isRtl && !isRangeSlider) {
                    Size(size.width - start, size.height)
                } else {
                    Size(inactiveTrackWidth, size.height)
                }
            drawTrackPath(
                orientation,
                trackOffset,
                size,
                inactiveTrackColor,
                startCornerRadius,
                endCornerRadius,
            )
            val stopIndicatorOffset =
                if (isVertical) {
                    Offset(center.x, end - cornerSize)
                } else if (isRtl) {
                    Offset(cornerSize, center.y)
                } else {
                    Offset(end - cornerSize, center.y)
                }
            drawStopIndicator?.invoke(this, stopIndicatorOffset)
        }
        // active track
        val activeTrackStart =
            if (isCentered) {
                adjustedSliderValueEnd + if (adjustedSliderValueEnd < centerAxis) startGap else 0f
            } else if (isRangeSlider) {
                sliderValueStart + startGap
            } else {
                0f
            }
        val activeTrackEnd =
            if (isCentered) {
                adjustedSliderValueStart - if (adjustedSliderValueStart > centerAxis) endGap else 0f

Sources: [live-androidx-material3-material3-material3-slider-lines-2551-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2586–2620)

            } else {
                sliderValueEnd - endGap
            }
        val startCornerRadius =
            if (isRtlHorizontal || isCentered || isRangeSlider) insideCornerSize else cornerSize
        val endCornerRadius =
            if (isRtlHorizontal && !isCentered && !isRangeSlider) cornerSize else insideCornerSize
        val activeTrackWidth =
            if (isRtlHorizontal && !isCentered && !isRangeSlider) activeTrackEnd
            else activeTrackEnd - activeTrackStart

        val activeTrackThreshold =
            if (!enableCornerShrinking || tickFractions.isNotEmpty()) startCornerRadius else 0f
        if (activeTrackWidth > activeTrackThreshold) {
            val trackOffset =
                if (isVertical) {
                    Offset(0f, activeTrackStart)
                } else if (isRtl) {
                    Offset(size.width - activeTrackEnd, 0f)
                } else {
                    Offset(activeTrackStart, 0f)
                }

            val size =
                if (isVertical) {
                    Size(size.width, activeTrackWidth)
                } else if (isRtl && !isCentered && !isRangeSlider) {
                    Size(activeTrackEnd, size.height)
                } else {
                    Size(activeTrackWidth, size.height)
                }
            drawTrackPath(
                orientation,
                trackOffset,
                size,

Sources: [live-androidx-material3-material3-material3-slider-lines-2586-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2621–2655)

                activeTrackColor,
                startCornerRadius,
                endCornerRadius,
            )
        }

        val start = sliderStart + cornerSize
        val end = sliderEnd - cornerSize
        val activeTrack = activeTrackStart..activeTrackEnd
        val tickCenterGap =
            if (isCentered) {
                val gap = if (sliderValueEnd > centerAxis) startGap else endGap
                centerAxis - gap..centerAxis + gap
            } else {
                0f..0f
            }
        val tickStartGap = sliderValueStart - startGap..sliderValueStart + startGap
        val tickEndGap =
            if (isCentered) {
                val gap = if (sliderValueEnd > centerAxis) endGap else startGap
                sliderValueEnd - gap..sliderValueEnd + gap
            } else {
                sliderValueEnd - endGap..sliderValueEnd + endGap
            }
        tickFractions.forEachIndexed { index, tick ->
            // skip ticks that fall on the stop indicator
            if (drawStopIndicator != null) {
                val isStopIndicatorAtStart = (isCentered || isRangeSlider) && index == 0
                if (isStopIndicatorAtStart || index == tickFractions.size - 1) {
                    return@forEachIndexed
                }
            }

            val centerTick = lerp(start, end, tick)
            // skip ticks that fall on a gap

Sources: [live-androidx-material3-material3-material3-slider-lines-2621-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2656–2690)

            if (
                (isCentered && centerTick in tickCenterGap) ||
                    (isRangeSlider && centerTick in tickStartGap) ||
                    centerTick in tickEndGap
            ) {
                return@forEachIndexed
            }
            val offset =
                if (isVertical) {
                    Offset(center.x, centerTick)
                } else if (isRtl) {
                    Offset(size.width - centerTick, center.y)
                } else {
                    Offset(centerTick, center.y)
                }
            drawTick(
                this,
                offset,
                if (centerTick in activeTrack) activeTickColor else inactiveTickColor,
            )
        }
    }

    private fun DrawScope.drawTrackPath(
        orientation: Orientation,
        offset: Offset,
        size: Size,
        color: Color,
        startCornerRadius: Float,
        endCornerRadius: Float,
    ) {
        val startCorner = CornerRadius(startCornerRadius, startCornerRadius)
        val endCorner = CornerRadius(endCornerRadius, endCornerRadius)
        val track =
            if (orientation == Vertical) {

Sources: [live-androidx-material3-material3-material3-slider-lines-2656-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2691–2725)

                RoundRect(
                    rect = Rect(offset, size = Size(size.width, size.height)),
                    topLeft = startCorner,
                    topRight = startCorner,
                    bottomRight = endCorner,
                    bottomLeft = endCorner,
                )
            } else {
                RoundRect(
                    rect = Rect(offset, size = Size(size.width, size.height)),
                    topLeft = startCorner,
                    topRight = endCorner,
                    bottomRight = endCorner,
                    bottomLeft = startCorner,
                )
            }
        trackPath.addRoundRect(track)
        drawPath(trackPath, color)
        trackPath.rewind()
    }

    /**
     * The Default stop indicator.
     *
     * @param offset the coordinate where the indicator is to be drawn.
     * @param size the size of the indicator.
     * @param color the color of the indicator.
     */
    public fun DrawScope.drawStopIndicator(offset: Offset, size: Dp, color: Color) {
        drawCircle(color = color, center = offset, radius = size.toPx() / 2f)
    }

    /** The default size for the stop indicator at the end of the track. */
    public val TrackStopIndicatorSize: Dp = SliderTokens.StopIndicatorSize


Sources: [live-androidx-material3-material3-material3-slider-lines-2691-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2726–2760)

    /** The default size for the ticks if steps are greater than 0. */
    public val TickSize: Dp = SliderTokens.StopIndicatorSize

    private val trackPath = Path()
}

@Composable
private fun ThumbContent(
    interactionSource: MutableInteractionSource,
    modifier: Modifier,
    colors: SliderColors,
    enabled: Boolean,
    thumbSize: DpSize,
    isVertical: Boolean,
) {
    val interactions = remember { mutableStateListOf<Interaction>() }
    LaunchedEffect(interactionSource) {
        interactionSource.interactions.collect { interaction ->
            when (interaction) {
                is FocusInteraction.Focus -> interactions.add(interaction)
                is FocusInteraction.Unfocus -> interactions.remove(interaction.focus)
                is PressInteraction.Press -> interactions.add(interaction)
                is PressInteraction.Release -> interactions.remove(interaction.press)
                is PressInteraction.Cancel -> interactions.remove(interaction.press)
                is DragInteraction.Start -> interactions.add(interaction)
                is DragInteraction.Stop -> interactions.remove(interaction.start)
                is DragInteraction.Cancel -> interactions.remove(interaction.start)
            }
        }
    }

    val size =
        if (interactions.isNotEmpty()) {
            if (isVertical) {
                thumbSize.copy(height = thumbSize.height / 2)

Sources: [live-androidx-material3-material3-material3-slider-lines-2726-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2761–2795)

            } else {
                thumbSize.copy(width = thumbSize.width / 2)
            }
        } else {
            thumbSize
        }
    Box(
        modifier
            .size(thumbSize)
            .hoverable(interactionSource = interactionSource)
            .pointerHoverIcon(icon = PointerIcon.Hand),
        contentAlignment = Alignment.Center,
    ) {
        Spacer(
            Modifier.size(size)
                .background(colors.thumbColor(enabled), SliderTokens.HandleShape.value)
        )
    }
}

private fun snapValueToTick(
    current: Float,
    tickFractions: FloatArray,
    minPx: Float,
    maxPx: Float,
): Float {
    if (tickFractions.isEmpty()) return current
    val totalSteps = tickFractions.size - 1
    var closestValue = current
    var minDistance = Float.POSITIVE_INFINITY
    for (i in tickFractions.indices) {
        val tickValue =
            (minPx.toDouble() + (maxPx.toDouble() - minPx.toDouble()) * i / totalSteps).toFloat()
        val distance = abs(tickValue - current)
        if (distance < minDistance) {

Sources: [live-androidx-material3-material3-material3-slider-lines-2761-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2796–2830)

            minDistance = distance
            closestValue = tickValue
        }
    }
    return closestValue
}

private suspend fun AwaitPointerEventScope.awaitSlop(
    id: PointerId,
    type: PointerType,
): Pair<PointerInputChange, Float>? {
    var initialDelta = 0f
    val postPointerSlop = { pointerInput: PointerInputChange, offset: Float ->
        pointerInput.consume()
        initialDelta = offset
    }
    val afterSlopResult = awaitHorizontalPointerSlopOrCancellation(id, type, postPointerSlop)
    return if (afterSlopResult != null) afterSlopResult to initialDelta else null
}

private fun stepsToTickFractions(steps: Int): FloatArray {
    return if (steps == 0) floatArrayOf() else FloatArray(steps + 2) { it.toFloat() / (steps + 1) }
}

// Scale x1 from a1..b1 range to a2..b2 range
private fun scale(a1: Float, b1: Float, x1: Float, a2: Float, b2: Float) =
    lerp(a2, b2, calcFraction(a1, b1, x1))

// Calculate the 0..1 fraction that `pos` value represents between `a` and `b`
private fun calcFraction(a: Float, b: Float, pos: Float) =
    (if (b - a == 0f) 0f else (pos - a) / (b - a)).coerceIn(0f, 1f)

private fun Modifier.sliderSemantics(
    state: SliderState,
    enabled: Boolean,

Sources: [live-androidx-material3-material3-material3-slider-lines-2796-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 281–315)

 * @param onValueChangeFinished called when value change has ended. This should not be used to
 *   update the slider value (use [onValueChange] instead), but rather to know when the user has
 *   completed selecting a new value by ending a drag or a click. For keyboard movements, this is
 *   called on every step.
 * @param colors [SliderColors] that will be used to resolve the colors used for this slider in
 *   different states. See [SliderDefaults.colors].
 * @param interactionSource the [MutableInteractionSource] representing the stream of [Interaction]s
 *   for this slider. You can create and pass in your own `remember`ed instance to observe
 *   [Interaction]s and customize the appearance / behavior of this slider in different states.
 * @param thumb the thumb to be displayed on the slider, it is placed on top of the track. The
 *   lambda receives a [SliderState] which is used to obtain the current active track.
 * @param track the track to be displayed on the slider, it is placed underneath the thumb. The
 *   lambda receives a [SliderState] which is used to obtain the current active track.
 */
@Composable
public fun Slider(
    state: SliderState,
    onValueChange: (Float) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    onValueChangeFinished: (() -> Unit)? = null,
    colors: SliderColors = SliderDefaults.colors(),
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    thumb: @Composable (SliderState) -> Unit = { _ ->
        SliderDefaults.Thumb(
            interactionSource = interactionSource,
            colors = colors,
            enabled = enabled,
        )
    },
    track: @Composable (SliderState) -> Unit = { sliderState ->
        SliderDefaults.Track(colors = colors, enabled = enabled, sliderState = sliderState)
    },
) {
    require(state.steps >= 0) { "steps should be >= 0" }

Sources: [live-androidx-material3-material3-material3-slider-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2831–2865)

    onValueChange: (Float) -> Unit,
    onValueChangeFinished: (() -> Unit)?,
): Modifier {
    return semantics {
            if (!enabled) disabled()
            if (state.trackRange.start < 0f) {
                stateDescription = state.value.formatForSemantics()
            }
            setProgress(
                action = { targetValue ->
                    var newValue =
                        targetValue.coerceIn(state.trackRange.start, state.trackRange.endInclusive)
                    val originalVal = newValue
                    val resolvedValue =
                        if (state.steps > 0) {
                            var distance: Float = newValue
                            for (i in 0..state.steps + 1) {
                                val stepValue =
                                    lerp(
                                        state.trackRange.start,
                                        state.trackRange.endInclusive,
                                        i.toFloat() / (state.steps + 1),
                                    )
                                if (abs(stepValue - originalVal) <= distance) {
                                    distance = abs(stepValue - originalVal)
                                    newValue = stepValue
                                }
                            }
                            newValue
                        } else {
                            newValue
                        }

                    // This is to keep it consistent with AbsSeekbar.java: return false if no
                    // change from current.

Sources: [live-androidx-material3-material3-material3-slider-lines-2831-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2866–2900)

                    if (resolvedValue == state.value) {
                        false
                    } else {
                        onValueChange(resolvedValue)
                        onValueChangeFinished?.invoke()
                        true
                    }
                }
            )
            progressBarRangeInfo =
                ProgressBarRangeInfo(
                    state.value.coerceIn(state.trackRange.start, state.trackRange.endInclusive),
                    state.trackRange.start..state.trackRange.endInclusive,
                    state.steps,
                )
        }
        .then(
            if (state.orientation == Vertical) {
                IncreaseVerticalSemanticsBounds
            } else {
                IncreaseHorizontalSemanticsBounds
            }
        )
}

private fun Modifier.rangeSliderStartThumbSemantics(
    state: RangeSliderState,
    enabled: Boolean,
    onValueChange: (SliderRange) -> Unit,
    onValueChangeFinished: (() -> Unit)?,
): Modifier {
    return semantics {
            val trackRange = state.trackRange.start..state.endValue
            if (!enabled) disabled()
            if (state.trackRange.start < 0f) {

Sources: [live-androidx-material3-material3-material3-slider-lines-2866-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2901–2935)

                stateDescription = state.startValue.formatForSemantics()
            }
            setProgress(
                action = { targetValue ->
                    val currentTrackRange = state.trackRange.start..state.endValue
                    var newValue =
                        targetValue.coerceIn(
                            currentTrackRange.start,
                            currentTrackRange.endInclusive,
                        )
                    val originalVal = newValue
                    val resolvedValue =
                        if (state.startSteps > 0) {
                            var distance: Float = newValue
                            for (i in 0..state.startSteps + 1) {
                                val stepValue =
                                    lerp(
                                        currentTrackRange.start,
                                        currentTrackRange.endInclusive,
                                        i.toFloat() / (state.startSteps + 1),
                                    )
                                if (abs(stepValue - originalVal) <= distance) {
                                    distance = abs(stepValue - originalVal)
                                    newValue = stepValue
                                }
                            }
                            newValue
                        } else {
                            newValue
                        }

                    // This is to keep it consistent with AbsSeekbar.java: return false if no
                    // change from current.
                    if (resolvedValue == state.startValue) {
                        false

Sources: [live-androidx-material3-material3-material3-slider-lines-2901-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2936–2970)

                    } else {
                        val resolvedRange = SliderRange(resolvedValue, state.endValue)
                        val activeRange = SliderRange(state.startValue, state.endValue)
                        if (resolvedRange != activeRange) {
                            onValueChange(resolvedRange)
                        }
                        onValueChangeFinished?.invoke()
                        true
                    }
                }
            )
            progressBarRangeInfo =
                ProgressBarRangeInfo(
                    state.startValue.coerceIn(trackRange.start, trackRange.endInclusive),
                    trackRange,
                    state.startSteps,
                )
        }
        .then(IncreaseHorizontalSemanticsBounds)
}

private fun Modifier.rangeSliderEndThumbSemantics(
    state: RangeSliderState,
    enabled: Boolean,
    onValueChange: (SliderRange) -> Unit,
    onValueChangeFinished: (() -> Unit)?,
): Modifier {
    return semantics {
            val trackRange = state.startValue..state.trackRange.endInclusive
            if (!enabled) disabled()
            if (state.trackRange.start < 0f) {
                stateDescription = state.endValue.formatForSemantics()
            }
            setProgress(
                action = { targetValue ->

Sources: [live-androidx-material3-material3-material3-slider-lines-2936-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 2971–3005)

                    val currentTrackRange = state.startValue..state.trackRange.endInclusive
                    var newValue =
                        targetValue.coerceIn(
                            currentTrackRange.start,
                            currentTrackRange.endInclusive,
                        )
                    val originalVal = newValue
                    val resolvedValue =
                        if (state.endSteps > 0) {
                            var distance: Float = newValue
                            for (i in 0..state.endSteps + 1) {
                                val stepValue =
                                    lerp(
                                        currentTrackRange.start,
                                        currentTrackRange.endInclusive,
                                        i.toFloat() / (state.endSteps + 1),
                                    )
                                if (abs(stepValue - originalVal) <= distance) {
                                    distance = abs(stepValue - originalVal)
                                    newValue = stepValue
                                }
                            }
                            newValue
                        } else {
                            newValue
                        }

                    // This is to keep it consistent with AbsSeekbar.java: return false if no
                    // change from current.
                    if (resolvedValue == state.endValue) {
                        false
                    } else {
                        val resolvedRange = SliderRange(state.startValue, resolvedValue)
                        val activeRange = SliderRange(state.startValue, state.endValue)
                        if (resolvedRange != activeRange) {

Sources: [live-androidx-material3-material3-material3-slider-lines-2971-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3006–3040)

                            onValueChange(resolvedRange)
                        }
                        onValueChangeFinished?.invoke()
                        true
                    }
                }
            )
            progressBarRangeInfo =
                ProgressBarRangeInfo(
                    state.endValue.coerceIn(trackRange.start, trackRange.endInclusive),
                    trackRange,
                    state.endSteps,
                )
        }
        .then(IncreaseHorizontalSemanticsBounds)
}

private fun Float.formatForSemantics() = "${(this * 100).roundToInt() / 100f}"

@Composable
private fun Modifier.sliderTapModifier(
    state: SliderState,
    interactionSource: MutableInteractionSource,
    enabled: Boolean,
    onValueChange: (Float) -> Unit,
    onValueChangeFinished: (() -> Unit)?,
): Modifier {
    if (!enabled) return this
    val currentOnValueChange = rememberUpdatedState(onValueChange)
    val currentOnValueChangeFinished = rememberUpdatedState(onValueChangeFinished)
    return this.pointerInput(state, interactionSource) {
        coroutineScope {
            detectTapGestures(
                onPress = { offset ->
                    var press: PressInteraction.Press? = null

Sources: [live-androidx-material3-material3-material3-slider-lines-3006-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3041–3075)

                    try {
                        press = PressInteraction.Press(offset)
                        interactionSource.tryEmit(press)
                        state.onPress(offset)
                        val success = tryAwaitRelease()
                        val release =
                            if (success) {
                                PressInteraction.Release(press)
                            } else {
                                PressInteraction.Cancel(press)
                            }
                        // Emit the release or cancel interaction
                        interactionSource.tryEmit(release)
                        press = null
                    } finally {
                        press?.let { interactionSource.emit(PressInteraction.Cancel(it)) }
                    }
                },
                onTap = {
                    state.dispatchRawDeltaInternal(0f, currentOnValueChange.value)
                    if (!state.isDragging) {
                        currentOnValueChangeFinished.value?.invoke()
                    }
                },
            )
        }
    }
}

@Composable
private fun Modifier.rangeSliderPressDragModifier(
    state: RangeSliderState,
    startThumbInteractionSource: MutableInteractionSource,
    endThumbInteractionSource: MutableInteractionSource,
    enabled: Boolean,

Sources: [live-androidx-material3-material3-material3-slider-lines-3041-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3076–3110)

    onValueChange: (SliderRange) -> Unit,
    onValueChangeFinished: (() -> Unit)?,
): Modifier {
    if (!enabled) return this
    val currentOnValueChange = rememberUpdatedState(onValueChange)
    val currentOnValueChangeFinished = rememberUpdatedState(onValueChangeFinished)
    return this.pointerInput(startThumbInteractionSource, endThumbInteractionSource, state) {
        val rangeSliderLogic =
            RangeSliderLogic(
                state,
                startThumbInteractionSource,
                endThumbInteractionSource,
                currentOnValueChange,
            )
        coroutineScope {
            awaitEachGesture {
                var activeDragInteraction: DragInteraction.Start? = null
                var draggingStart = false
                var press: PressInteraction.Press? = null

                try {
                    val down = awaitFirstDown(requireUnconsumed = false)
                    state.updateMinMaxPx()

                    val posX =
                        if (state.isRtl) state.totalWidth - down.position.x else down.position.x
                    val compare = rangeSliderLogic.compareOffsets(posX)

                    draggingStart = if (compare != 0) compare < 0 else state.rawOffsetStart > posX

                    val interactionSource = rangeSliderLogic.activeInteraction(draggingStart)
                    press = PressInteraction.Press(down.position)
                    press?.let { launch { interactionSource.emit(it) } }

                    var drag: PointerInputChange?

Sources: [live-androidx-material3-material3-material3-slider-lines-3076-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3111–3145)

                    var overSlop = Offset.Zero
                    val pointerSlop = viewConfiguration.pointerSlop(down.type)

                    do {
                        drag = awaitPointerEvent().changes.firstOrNull()
                        if (drag != null) {
                            overSlop += drag.positionChange()
                        }
                    } while (
                        drag != null &&
                            drag.pressed &&
                            overSlop.getDistanceSquared() < pointerSlop * pointerSlop
                    )

                    if (drag != null && abs(overSlop.x) > abs(overSlop.y)) {
                        // Consume the change that crossed the slop so that parent containers
                        // (e.g. a horizontalScroll) do not also pick up this gesture as a scroll.
                        drag.consume()

                        // The press is converted to a drag, so we cancel the press interaction
                        press?.let {
                            launch { interactionSource.emit(PressInteraction.Cancel(it)) }
                        }

                        press = null

                        val shouldUpdateCapturedThumb =
                            abs(state.rawOffsetEnd - posX) < pointerSlop &&
                                abs(state.rawOffsetStart - posX) < pointerSlop
                        if (shouldUpdateCapturedThumb) {
                            val dir = overSlop.x
                            draggingStart = if (state.isRtl) dir >= 0f else dir < 0f
                        }

                        val dragInteractionSource =

Sources: [live-androidx-material3-material3-material3-slider-lines-3111-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3146–3180)

                            rangeSliderLogic.activeInteraction(draggingStart)
                        val interaction = DragInteraction.Start()
                        activeDragInteraction = interaction
                        launch { dragInteractionSource.emit(interaction) }

                        // Apply the slop from the initial drag detection
                        val initialOffset =
                            posX - (if (draggingStart) state.rawOffsetStart else state.rawOffsetEnd)
                        val totalDragOffset =
                            initialOffset + (if (state.isRtl) -overSlop.x else overSlop.x)
                        state.onDrag(draggingStart, totalDragOffset, currentOnValueChange.value)

                        // The main drag block now handles all subsequent movement.
                        state.isDragging = true
                        val success =
                            horizontalDrag(down.id) { change ->
                                val deltaX = change.positionChange().x
                                state.onDrag(
                                    draggingStart,
                                    if (state.isRtl) -deltaX else deltaX,
                                    currentOnValueChange.value,
                                )
                                change.consume()
                            }

                        state.isDragging = false

                        val finishInteraction =
                            if (success) {
                                DragInteraction.Stop(interaction)
                            } else {
                                DragInteraction.Cancel(interaction)
                            }
                        currentOnValueChangeFinished.value?.invoke()
                        launch { dragInteractionSource.emit(finishInteraction) }

Sources: [live-androidx-material3-material3-material3-slider-lines-3146-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 316–350)


    state.orientation = Horizontal
    state.reverseVerticalDirection = false

    SliderImpl(
        state = state,
        modifier = modifier,
        enabled = enabled,
        onValueChange = onValueChange,
        onValueChangeFinished = onValueChangeFinished,
        interactionSource = interactionSource,
        thumb = thumb,
        track = track,
    )
}

/**
 * [Material Design slider](https://m3.material.io/components/sliders/overview)
 *
 * Sliders allow users to make selections from a range of values.
 *
 * Sliders reflect a range of values along a bar, from which users may select a single value. They
 * are ideal for adjusting settings such as volume, brightness, or applying image filters.
 *
 * ![Sliders
 * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqe2zb2b-1.png?alt=media)
 *
 * Slider using custom track and thumb:
 *
 * @sample androidx.compose.material3.samples.SliderWithCustomTrackAndThumbSample
 *
 * Continuous Slider with a centered track:
 *
 * @sample androidx.compose.material3.samples.CenteredSliderSample
 * @param state [SliderState] which contains the slider's current value.

Sources: [live-androidx-material3-material3-material3-slider-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3181–3215)

                        activeDragInteraction = null
                    } else if (drag?.pressed == false) {
                        // The press is completed, so emit a release.
                        press?.let {
                            launch { interactionSource.emit(PressInteraction.Release(it)) }
                        }

                        press = null

                        // Perform the tap action to update the slider value
                        val offset =
                            posX - if (draggingStart) state.rawOffsetStart else state.rawOffsetEnd
                        state.onDrag(draggingStart, offset, currentOnValueChange.value)
                        currentOnValueChangeFinished.value?.invoke()
                    } else { // Gesture is not a horizontal drag and pointer is still down
                        // (e.g.,
                        // vertical scroll)
                        // Cancel the press to dismiss the ripple and allow scrolling
                        press?.let {
                            launch { interactionSource.emit(PressInteraction.Cancel(it)) }
                        }
                        press = null
                    }
                } finally {
                    if (state.isDragging) {
                        // If we were dragging, clean up the state
                        activeDragInteraction?.let {
                            val interactionSource =
                                rangeSliderLogic.activeInteraction(draggingStart)
                            launch { interactionSource.emit(DragInteraction.Cancel(it)) }
                        }
                        currentOnValueChangeFinished.value?.invoke()
                        state.isDragging = false
                    }


Sources: [live-androidx-material3-material3-material3-slider-lines-3181-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3216–3250)

                    press?.let {
                        val interactionSource = rangeSliderLogic.activeInteraction(draggingStart)
                        launch { interactionSource.emit(PressInteraction.Cancel(it)) }
                    }
                }
            }
        }
    }
}

private class RangeSliderLogic(
    val state: RangeSliderState,
    val startThumbInteractionSource: MutableInteractionSource,
    val endThumbInteractionSource: MutableInteractionSource,
    val onValueChange: State<(SliderRange) -> Unit>,
) {
    fun activeInteraction(draggingStart: Boolean): MutableInteractionSource =
        if (draggingStart) startThumbInteractionSource else endThumbInteractionSource

    fun compareOffsets(eventX: Float): Int {
        val diffStart = abs(state.rawOffsetStart - eventX)
        val diffEnd = abs(state.rawOffsetEnd - eventX)
        return diffStart.compareTo(diffEnd)
    }

    fun captureThumb(
        draggingStart: Boolean,
        posX: Float,
        interaction: Interaction,
        scope: CoroutineScope,
    ) {
        state.onDrag(
            draggingStart,
            posX - if (draggingStart) state.rawOffsetStart else state.rawOffsetEnd,
            onValueChange.value,

Sources: [live-androidx-material3-material3-material3-slider-lines-3216-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3251–3285)

        )
        scope.launch { activeInteraction(draggingStart).emit(interaction) }
    }
}

/**
 * Represents the color used by a [Slider] in different states.
 *
 * @param thumbColor thumb color when enabled
 * @param activeTrackColor color of the track in the part that is "active", meaning that the thumb
 *   is ahead of it
 * @param activeTickColor colors to be used to draw tick marks on the active track, if `steps` is
 *   specified
 * @param inactiveTrackColor color of the track in the part that is "inactive", meaning that the
 *   thumb is before it
 * @param inactiveTickColor colors to be used to draw tick marks on the inactive track, if `steps`
 *   are specified on the Slider is specified
 * @param disabledThumbColor thumb colors when disabled
 * @param disabledActiveTrackColor color of the track in the "active" part when the Slider is
 *   disabled
 * @param disabledActiveTickColor colors to be used to draw tick marks on the active track when
 *   Slider is disabled and when `steps` are specified on it
 * @param disabledInactiveTrackColor color of the track in the "inactive" part when the Slider is
 *   disabled
 * @param disabledInactiveTickColor colors to be used to draw tick marks on the inactive part of the
 *   track when Slider is disabled and when `steps` are specified on it
 * @constructor create an instance with arbitrary colors. See [SliderDefaults.colors] for the
 *   default implementation that follows Material specifications.
 */
@Immutable
public class SliderColors(
    public val thumbColor: Color,
    public val activeTrackColor: Color,
    public val activeTickColor: Color,
    public val inactiveTrackColor: Color,

Sources: [live-androidx-material3-material3-material3-slider-lines-3251-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3286–3320)

    public val inactiveTickColor: Color,
    public val disabledThumbColor: Color,
    public val disabledActiveTrackColor: Color,
    public val disabledActiveTickColor: Color,
    public val disabledInactiveTrackColor: Color,
    public val disabledInactiveTickColor: Color,
) {

    /**
     * Returns a copy of this SelectableChipColors, optionally overriding some of the values. This
     * uses the Color.Unspecified to mean “use the value from the source”
     */
    public fun copy(
        thumbColor: Color = this.thumbColor,
        activeTrackColor: Color = this.activeTrackColor,
        activeTickColor: Color = this.activeTickColor,
        inactiveTrackColor: Color = this.inactiveTrackColor,
        inactiveTickColor: Color = this.inactiveTickColor,
        disabledThumbColor: Color = this.disabledThumbColor,
        disabledActiveTrackColor: Color = this.disabledActiveTrackColor,
        disabledActiveTickColor: Color = this.disabledActiveTickColor,
        disabledInactiveTrackColor: Color = this.disabledInactiveTrackColor,
        disabledInactiveTickColor: Color = this.disabledInactiveTickColor,
    ): SliderColors =
        SliderColors(
            thumbColor.takeOrElse { this.thumbColor },
            activeTrackColor.takeOrElse { this.activeTrackColor },
            activeTickColor.takeOrElse { this.activeTickColor },
            inactiveTrackColor.takeOrElse { this.inactiveTrackColor },
            inactiveTickColor.takeOrElse { this.inactiveTickColor },
            disabledThumbColor.takeOrElse { this.disabledThumbColor },
            disabledActiveTrackColor.takeOrElse { this.disabledActiveTrackColor },
            disabledActiveTickColor.takeOrElse { this.disabledActiveTickColor },
            disabledInactiveTrackColor.takeOrElse { this.disabledInactiveTrackColor },
            disabledInactiveTickColor.takeOrElse { this.disabledInactiveTickColor },

Sources: [live-androidx-material3-material3-material3-slider-lines-3286-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3321–3355)

        )

    @Stable
    internal fun thumbColor(enabled: Boolean): Color =
        if (enabled) thumbColor else disabledThumbColor

    @Stable
    internal fun trackColor(enabled: Boolean, active: Boolean): Color =
        if (enabled) {
            if (active) activeTrackColor else inactiveTrackColor
        } else {
            if (active) disabledActiveTrackColor else disabledInactiveTrackColor
        }

    @Stable
    internal fun tickColor(enabled: Boolean, active: Boolean): Color =
        if (enabled) {
            if (active) activeTickColor else inactiveTickColor
        } else {
            if (active) disabledActiveTickColor else disabledInactiveTickColor
        }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is SliderColors) return false

        if (thumbColor != other.thumbColor) return false
        if (activeTrackColor != other.activeTrackColor) return false
        if (activeTickColor != other.activeTickColor) return false
        if (inactiveTrackColor != other.inactiveTrackColor) return false
        if (inactiveTickColor != other.inactiveTickColor) return false
        if (disabledThumbColor != other.disabledThumbColor) return false
        if (disabledActiveTrackColor != other.disabledActiveTrackColor) return false
        if (disabledActiveTickColor != other.disabledActiveTickColor) return false
        if (disabledInactiveTrackColor != other.disabledInactiveTrackColor) return false

Sources: [live-androidx-material3-material3-material3-slider-lines-3321-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3356–3390)

        if (disabledInactiveTickColor != other.disabledInactiveTickColor) return false

        return true
    }

    override fun hashCode(): Int {
        var result = thumbColor.hashCode()
        result = 31 * result + activeTrackColor.hashCode()
        result = 31 * result + activeTickColor.hashCode()
        result = 31 * result + inactiveTrackColor.hashCode()
        result = 31 * result + inactiveTickColor.hashCode()
        result = 31 * result + disabledThumbColor.hashCode()
        result = 31 * result + disabledActiveTrackColor.hashCode()
        result = 31 * result + disabledActiveTickColor.hashCode()
        result = 31 * result + disabledInactiveTrackColor.hashCode()
        result = 31 * result + disabledInactiveTickColor.hashCode()
        return result
    }
}

// Internal to be referred to in tests
internal val TrackHeight
    get() = SliderTokens.InactiveTrackHeight
internal val ThumbWidth
    get() = SliderTokens.HandleWidth
private val ThumbHeight
    get() = SliderTokens.HandleHeight
private val ThumbSize
    get() = DpSize(ThumbWidth, ThumbHeight)
private val VerticalThumbSize
    get() = DpSize(ThumbHeight, ThumbWidth)
private val ThumbTrackGapSize: Dp
    get() = SliderTokens.ActiveHandleLeadingSpace
private val TrackInsideCornerSize: Dp
    get() = 2.dp

Sources: [live-androidx-material3-material3-material3-slider-lines-3356-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3391–3425)


private enum class SliderComponents {
    THUMB,
    TRACK,
}

private enum class RangeSliderComponents {
    ENDTHUMB,
    STARTTHUMB,
    TRACK,
}

/**
 * Class that holds information about [Slider]'s and [RangeSlider]'s active track and fractional
 * positions where the discrete ticks should be drawn on the track.
 */
@Suppress("DEPRECATION")
@Deprecated("Not necessary with the introduction of Slider state")
@Stable
public class SliderPositions(
    initialActiveRange: ClosedFloatingPointRange<Float> = 0f..1f,
    initialTickFractions: FloatArray = floatArrayOf(),
) {
    /**
     * [ClosedFloatingPointRange] that indicates the current active range for the start to thumb for
     * a [Slider] and start thumb to end thumb for a [RangeSlider].
     */
    public var activeRange: ClosedFloatingPointRange<Float> by mutableStateOf(initialActiveRange)
        internal set

    /**
     * The discrete points where a tick should be drawn on the track. Each value of tickFractions
     * should be within the range [0f, 1f]. If the track is continuous, then tickFractions will be
     * an empty [FloatArray].
     */

Sources: [live-androidx-material3-material3-material3-slider-lines-3391-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3426–3460)

    public var tickFractions: FloatArray by mutableStateOf(initialTickFractions)
        internal set

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is SliderPositions) return false

        if (activeRange != other.activeRange) return false
        if (!tickFractions.contentEquals(other.tickFractions)) return false

        return true
    }

    override fun hashCode(): Int {
        var result = activeRange.hashCode()
        result = 31 * result + tickFractions.contentHashCode()
        return result
    }
}

/**
 * Class that holds information about [Slider]'s active range.
 *
 * @param value [Float] that indicates the initial position of the thumb. If outside of [trackRange]
 *   provided, value will be coerced to this range.
 * @param steps if positive, specifies the amount of discrete allowable values between the endpoints
 *   of [trackRange]. For example, a range from 0 to 10 with 4 [steps] allows 4 values evenly
 *   distributed between 0 and 10 (i.e., 2, 4, 6, 8). If [steps] is 0, the slider will behave
 *   continuously and allow any value from the range. Must not be negative.
 * @param trackRange range of values that Slider values can take. [value] will be coerced to this
 *   range.
 */
@Stable
public class SliderState
@RememberInComposition

Sources: [live-androidx-material3-material3-material3-slider-lines-3426-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3461–3495)

public constructor(
    value: Float = 0f,
    @IntRange(from = 0) public val steps: Int = 0,
    public val trackRange: ClosedFloatingPointRange<Float> = 0f..1f,
) : DraggableState {

    private var valueState by mutableFloatStateOf(value)

    /** [Float] that indicates the value that the thumb currently is in respect to the track. */
    public var value: Float
        set(newVal) {
            valueState =
                if (shouldAutoSnap) {
                    calculateSnappedValue(newVal)
                } else {
                    newVal
                }
        }
        get() = valueState

    private fun calculateSnappedValue(newVal: Float): Float {
        val coercedValue = newVal.coerceIn(trackRange.start, trackRange.endInclusive)
        return snapValueToTick(
            coercedValue,
            tickFractions,
            trackRange.start,
            trackRange.endInclusive,
        )
    }

    override suspend fun drag(
        dragPriority: MutatePriority,
        block: suspend DragScope.() -> Unit,
    ): Unit = coroutineScope {
        isDragging = true

Sources: [live-androidx-material3-material3-material3-slider-lines-3461-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3496–3530)

        try {
            scrollMutex.mutateWith(dragScope, dragPriority, block)
        } finally {
            isDragging = false
        }
    }

    override fun dispatchRawDelta(delta: Float) {
        dispatchRawDeltaInternal(delta)
    }

    internal fun dispatchRawDeltaInternal(
        delta: Float,
        onValueChange: ((Float) -> Unit)? = null,
    ) {
        val maxPx: Float
        val minPx: Float
        if (orientation == Vertical) {
            maxPx = max(totalHeight - thumbHeight / 2f, 0f)
            minPx = min(thumbHeight / 2f, maxPx)
        } else {
            maxPx = max(totalWidth - thumbWidth / 2f, 0f)
            minPx = min(thumbWidth / 2f, maxPx)
        }
        rawOffset = (rawOffset + delta + pressOffset)
        pressOffset = 0f
        val offsetInTrack = rawOffset.coerceIn(minPx, maxPx)
        val scaledUserValue = calculateSnappedValue(scaleToUserValue(minPx, maxPx, offsetInTrack))
        if (scaledUserValue != this.value) {
            if (onValueChange != null) {
                onValueChange(scaledUserValue)
            } else {
                this.value = scaledUserValue
            }
        }

Sources: [live-androidx-material3-material3-material3-slider-lines-3496-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 351–385)

 * @param modifier the [Modifier] to be applied to this slider
 * @param enabled controls the enabled state of this slider. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param onValueChange callback in which value should be updated
 * @param onValueChangeFinished called when value change has ended. This should not be used to
 *   update the slider value (use [onValueChange] instead), but rather to know when the user has
 *   completed selecting a new value by ending a drag or a click. For keyboard movements, this is
 *   called on every step.
 * @param colors [SliderColors] that will be used to resolve the colors used for this slider in
 *   different states. See [SliderDefaults.colors].
 * @param interactionSource the [MutableInteractionSource] representing the stream of [Interaction]s
 *   for this slider. You can create and pass in your own `remember`ed instance to observe
 *   [Interaction]s and customize the appearance / behavior of this slider in different states.
 * @param thumb the thumb to be displayed on the slider, it is placed on top of the track. The
 *   lambda receives a [SliderState] which is used to obtain the current active track.
 * @param track the track to be displayed on the slider, it is placed underneath the thumb. The
 *   lambda receives a [SliderState] which is used to obtain the current active track.
 */
@Deprecated(message = "Maintained for binary compatibility.", level = DeprecationLevel.HIDDEN)
@Composable
public fun Slider(
    state: SliderState,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    onValueChange: ((Float) -> Unit)? = null,
    onValueChangeFinished: (() -> Unit)? = null,
    colors: SliderColors = SliderDefaults.colors(),
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    thumb: @Composable (SliderState) -> Unit = { _ ->
        SliderDefaults.Thumb(
            interactionSource = interactionSource,
            colors = colors,
            enabled = enabled,
        )

Sources: [live-androidx-material3-material3-material3-slider-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3531–3565)

    }

    /**
     * Controls the auto-snapping mechanism for slider steps.
     *
     * When `true` (default), any updates to [value] will automatically snap to the nearest tick
     * fraction based on the number of [steps].
     *
     * Disabling auto-snapping (`false`) allows [value] to be set to any continuous value between
     * [trackRange] without snapping. This is particularly useful for programmatic animations,
     * smooth transitions, or custom drag gestures where discrete step snapping is temporarily or
     * permanently undesired.
     *
     * Since this is defined on the state, it can be dynamically toggled during gestures or
     * animations without triggering a full layout recomposition.
     */
    @get:JvmName("shouldAutoSnap") public var shouldAutoSnap: Boolean = true

    internal val tickFractions = stepsToTickFractions(steps)
    private var totalWidth by mutableIntStateOf(0)
    private var totalHeight by mutableIntStateOf(0)
    internal var orientation = Horizontal
    internal var reverseVerticalDirection = false
    internal var isRtl = false
    internal var isFocused by mutableStateOf(false)
    internal var thumbWidth by mutableIntStateOf(0)
    internal var thumbHeight by mutableIntStateOf(0)

    /**
     * The fraction of the track that the thumb currently occupies.
     *
     * The value is coerced (clamped) to the bounds of [trackRange] before calculating its
     * fractional position (from `0f` to `1f`) on the track.
     */
    @get:FloatRange(from = 0.0, to = 1.0)

Sources: [live-androidx-material3-material3-material3-slider-lines-3531-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3566–3600)

    public val coercedValueAsFraction: Float
        get() =
            calcFraction(
                trackRange.start,
                trackRange.endInclusive,
                value.coerceIn(trackRange.start, trackRange.endInclusive),
            )

    /**
     * Indicates whether the slider is currently being dragged.
     *
     * This is set to `true` when a drag gesture starts (either via user touch interaction or
     * programmatically via `drag`) and set back to `false` when the gesture completes or is
     * cancelled.
     */
    public var isDragging: Boolean by mutableStateOf(false)
        internal set

    internal fun updateDimensions(newTotalWidth: Int, newTotalHeight: Int) {
        totalWidth = newTotalWidth
        totalHeight = newTotalHeight
    }

    internal fun onPress(pos: Offset) {
        val to =
            if (orientation == Vertical) {
                if (reverseVerticalDirection) totalHeight - pos.y else pos.y
            } else {
                if (isRtl) totalWidth - pos.x else pos.x
            }
        pressOffset = to - rawOffset
    }

    private var rawOffset by mutableFloatStateOf(scaleToOffset(0f, 0f, value))
    private var pressOffset by mutableFloatStateOf(0f)

Sources: [live-androidx-material3-material3-material3-slider-lines-3566-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 36–70)

import androidx.compose.foundation.gestures.rememberDraggableState
import androidx.compose.foundation.hoverable
import androidx.compose.foundation.indication
import androidx.compose.foundation.interaction.DragInteraction
import androidx.compose.foundation.interaction.FocusInteraction
import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.PressInteraction
import androidx.compose.foundation.interaction.collectIsFocusedAsState
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.requiredSizeIn
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.layout.wrapContentWidth
import androidx.compose.material3.RangeSliderState.Companion.Saver
import androidx.compose.material3.SliderState.Companion.Saver
import androidx.compose.material3.internal.IncreaseHorizontalSemanticsBounds
import androidx.compose.material3.internal.IncreaseVerticalSemanticsBounds
import androidx.compose.material3.internal.Strings
import androidx.compose.material3.internal.awaitHorizontalPointerSlopOrCancellation
import androidx.compose.material3.internal.getString
import androidx.compose.material3.internal.pointerSlop
import androidx.compose.material3.tokens.SliderTokens
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.Stable
import androidx.compose.runtime.State
import androidx.compose.runtime.annotation.RememberInComposition

Sources: [live-androidx-material3-material3-material3-slider-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3601–3635)

    private val dragScope: DragScope =
        object : DragScope {
            override fun dragBy(pixels: Float): Unit = dispatchRawDeltaInternal(pixels)
        }

    private val scrollMutex = MutatorMutex()

    private fun scaleToUserValue(minPx: Float, maxPx: Float, offset: Float) =
        scale(minPx, maxPx, offset, trackRange.start, trackRange.endInclusive)

    private fun scaleToOffset(minPx: Float, maxPx: Float, userValue: Float) =
        scale(trackRange.start, trackRange.endInclusive, userValue, minPx, maxPx)

    public companion object {
        /**
         * The default [Saver] implementation for [SliderState].
         *
         * @param steps if positive, specifies the amount of discrete allowable values between the
         *   endpoints of [trackRange].
         * @param trackRange range of values that Slider values can take. [value] will be coerced to
         *   this range.
         */
        public fun Saver(
            steps: Int,
            trackRange: ClosedFloatingPointRange<Float>,
        ): Saver<SliderState, *> =
            listSaver(
                save = { listOf(it.value) },
                restore = {
                    SliderState(value = it[0] as Float, steps = steps, trackRange = trackRange)
                },
            )
    }
}


Sources: [live-androidx-material3-material3-material3-slider-lines-3601-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3636–3670)

/**
 * Creates a [SliderState] that is remembered across compositions.
 *
 * Changes to the provided initial values will **not** result in the state being recreated or
 * changed in any way if it has already been created.
 *
 * @param value [Float] that indicates the initial position of the thumb. If outside of [trackRange]
 *   provided, value will be coerced to this range.
 * @param steps if positive, specifies the amount of discrete allowable values between the endpoints
 *   of [trackRange]. For example, a range from 0 to 10 with 4 [steps] allows 4 values evenly
 *   distributed between 0 and 10 (i.e., 2, 4, 6, 8). If [steps] is 0, the slider will behave
 *   continuously and allow any value from the range. Must not be negative.
 * @param trackRange range of values that Slider values can take. [value] will be coerced to this
 *   range.
 */
@Composable
public fun rememberSliderState(
    value: Float = 0f,
    @IntRange(from = 0) steps: Int = 0,
    trackRange: ClosedFloatingPointRange<Float> = 0f..1f,
): SliderState {
    return rememberSaveable(saver = SliderState.Saver(steps = steps, trackRange = trackRange)) {
        SliderState(value = value, steps = steps, trackRange = trackRange)
    }
}

/**
 * Class that holds information about [RangeSlider]'s active range.
 *
 * @param startValue [Float] that indicates the initial start value of the selected range (for the
 *   start thumb). This represents a specific position on the track and is coerced to the bounds of
 *   [trackRange].
 * @param endValue [Float] that indicates the initial end value of the selected range (for the end
 *   thumb). This represents a specific position on the track and is coerced to the bounds of
 *   [trackRange].

Sources: [live-androidx-material3-material3-material3-slider-lines-3636-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3671–3705)

 * @param steps if positive, specifies the amount of discrete allowable values between the endpoints
 *   of [trackRange]. For example, a range from 0 to 10 with 4 [steps] allows 4 values evenly
 *   distributed between 0 and 10 (i.e., 2, 4, 6, 8). If [steps] is 0, the slider will behave
 *   continuously and allow any value from the range. Must not be negative.
 * @param trackRange the full range of values that the entire Range Slider track represents. This
 *   defines the absolute boundaries/constraints of the slider (from minimum to maximum), and the
 *   individual thumb values ([startValue] and [endValue]) are coerced to this range.
 */
@Stable
public class RangeSliderState
@RememberInComposition
public constructor(
    startValue: Float = 0f,
    endValue: Float = 1f,
    @IntRange(from = 0) public val steps: Int = 0,
    public val trackRange: ClosedFloatingPointRange<Float> = 0f..1f,
) {

    private val coercedStart = startValue.coerceIn(trackRange)
    private val coercedEnd = endValue.coerceIn(trackRange)
    private var startValueState by mutableFloatStateOf(minOf(coercedStart, coercedEnd))
    private var endValueState by mutableFloatStateOf(maxOf(coercedStart, coercedEnd))

    /** [Float] that indicates the start of the selected range for the [RangeSlider]. */
    public var startValue: Float
        set(newVal) {
            val coercedValue = newVal.coerceIn(trackRange.start, endValue)
            val snappedValue =
                snapValueToTick(
                    coercedValue,
                    tickFractions,
                    trackRange.start,
                    trackRange.endInclusive,
                )
            startValueState = snappedValue

Sources: [live-androidx-material3-material3-material3-slider-lines-3671-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3706–3740)

        }
        get() = startValueState

    /** [Float] that indicates the end of the selected range for the [RangeSlider]. */
    public var endValue: Float
        set(newVal) {
            val coercedValue = newVal.coerceIn(startValue, trackRange.endInclusive)
            val snappedValue =
                snapValueToTick(
                    coercedValue,
                    tickFractions,
                    trackRange.start,
                    trackRange.endInclusive,
                )
            endValueState = snappedValue
        }
        get() = endValueState

    internal val tickFractions = stepsToTickFractions(steps)

    internal var startThumbWidth by mutableFloatStateOf(0f)
    internal var startThumbHeight by mutableFloatStateOf(0f)
    internal var endThumbWidth by mutableFloatStateOf(0f)
    internal var endThumbHeight by mutableFloatStateOf(0f)
    internal var totalWidth by mutableIntStateOf(0)
    internal var rawOffsetStart by mutableFloatStateOf(0f)
    internal var rawOffsetEnd by mutableFloatStateOf(0f)
    internal var isDragging by mutableStateOf(false)

    internal var isRtl by mutableStateOf(false)
    internal var isStartFocused by mutableStateOf(false)
    internal var isEndFocused by mutableStateOf(false)

    private var maxPx by mutableFloatStateOf(0f)
    private var minPx by mutableFloatStateOf(0f)

Sources: [live-androidx-material3-material3-material3-slider-lines-3706-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3741–3775)


    internal fun onDrag(
        isStart: Boolean,
        offset: Float,
        onValueChange: ((SliderRange) -> Unit)? = null,
    ) {
        val scaledUserValue =
            if (isStart) {
                rawOffsetStart = (rawOffsetStart + offset)
                rawOffsetEnd = scaleToOffset(minPx, maxPx, endValue)
                val offsetEnd = rawOffsetEnd
                val offsetStart = rawOffsetStart.coerceIn(minPx, offsetEnd)
                val userStart =
                    snapValueToTick(
                        scaleToUserValue(minPx, maxPx, offsetStart),
                        tickFractions,
                        trackRange.start,
                        trackRange.endInclusive,
                    )
                SliderRange(userStart.coerceAtMost(endValue), endValue)
            } else {
                rawOffsetEnd = (rawOffsetEnd + offset)
                rawOffsetStart = scaleToOffset(minPx, maxPx, startValue)
                val offsetStart = rawOffsetStart
                val offsetEnd = rawOffsetEnd.coerceIn(offsetStart, maxPx)
                val userEnd =
                    snapValueToTick(
                        scaleToUserValue(minPx, maxPx, offsetEnd),
                        tickFractions,
                        trackRange.start,
                        trackRange.endInclusive,
                    )
                SliderRange(startValue, userEnd.coerceAtLeast(startValue))
            }
        if (scaledUserValue != SliderRange(startValue, endValue)) {

Sources: [live-androidx-material3-material3-material3-slider-lines-3741-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3776–3810)

            if (onValueChange != null) {
                onValueChange(scaledUserValue)
            } else {
                this.startValue = scaledUserValue.start
                this.endValue = scaledUserValue.endInclusive
            }
        }
    }

    internal val coercedStartValueAsFraction
        get() = calcFraction(trackRange.start, trackRange.endInclusive, startValue)

    internal val coercedEndValueAsFraction
        get() = calcFraction(trackRange.start, trackRange.endInclusive, endValue)

    internal val startSteps
        get() = floor(steps * coercedEndValueAsFraction).toInt()

    internal val endSteps
        get() = floor(steps * (1f - coercedStartValueAsFraction)).toInt()

    // scales offset from within minPx..maxPx to within trackRange.start..trackRange.end
    private fun scaleToUserValue(minPx: Float, maxPx: Float, offset: Float) =
        scale(minPx, maxPx, offset, trackRange.start, trackRange.endInclusive)

    // scales float userValue within trackRange.start..trackRange.end to within minPx..maxPx
    private fun scaleToOffset(minPx: Float, maxPx: Float, userValue: Float) =
        scale(trackRange.start, trackRange.endInclusive, userValue, minPx, maxPx)

    internal fun updateMinMaxPx() {
        val newMaxPx = max(totalWidth - endThumbWidth / 2, 0f)
        val newMinPx = min(startThumbWidth / 2, newMaxPx)
        if (!isDragging) {
            minPx = newMinPx
            maxPx = newMaxPx

Sources: [live-androidx-material3-material3-material3-slider-lines-3776-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3811–3845)

            rawOffsetStart = scaleToOffset(minPx, maxPx, startValue)
            rawOffsetEnd = scaleToOffset(minPx, maxPx, endValue)
        }
    }

    public companion object {
        /**
         * The default [Saver] implementation for [RangeSliderState].
         *
         * @param steps if positive, specifies the amount of discrete allowable values between the
         *   endpoints of [trackRange].
         * @param trackRange range of values that Range Slider values can take. [startValue] and
         *   [endValue] will be coerced to this range.
         */
        public fun Saver(
            steps: Int,
            trackRange: ClosedFloatingPointRange<Float>,
        ): Saver<RangeSliderState, *> =
            listSaver(
                save = { listOf(it.startValue, it.endValue) },
                restore = {
                    RangeSliderState(
                        startValue = it[0] as Float,
                        endValue = it[1] as Float,
                        steps = steps,
                        trackRange = trackRange,
                    )
                },
            )
    }
}

/**
 * Creates a [RangeSliderState] that is remembered across compositions.
 *

Sources: [live-androidx-material3-material3-material3-slider-lines-3811-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3846–3880)

 * Changes to the provided initial values will **not** result in the state being recreated or
 * changed in any way if it has already been created.
 *
 * @param startValue [Float] that indicates the initial start value of the selected range (for the
 *   start thumb). This represents a specific position on the track and is coerced to the bounds of
 *   [trackRange].
 * @param endValue [Float] that indicates the initial end value of the selected range (for the end
 *   thumb). This represents a specific position on the track and is coerced to the bounds of
 *   [trackRange].
 * @param steps if positive, specifies the amount of discrete allowable values between the endpoints
 *   of [trackRange]. For example, a range from 0 to 10 with 4 [steps] allows 4 values evenly
 *   distributed between 0 and 10 (i.e., 2, 4, 6, 8). If [steps] is 0, the slider will behave
 *   continuously and allow any value from the range. Must not be negative.
 * @param trackRange the full range of values that the entire Range Slider track represents. This
 *   defines the absolute boundaries/constraints of the slider (from minimum to maximum), and the
 *   individual thumb values ([startValue] and [endValue]) are coerced to this range.
 */
@Composable
public fun rememberRangeSliderState(
    startValue: Float = 0f,
    endValue: Float = 1f,
    @IntRange(from = 0) steps: Int = 0,
    trackRange: ClosedFloatingPointRange<Float> = 0f..1f,
): RangeSliderState {
    return rememberSaveable(
        saver = RangeSliderState.Saver(steps = steps, trackRange = trackRange)
    ) {
        RangeSliderState(
            startValue = startValue,
            endValue = endValue,
            steps = steps,
            trackRange = trackRange,
        )
    }
}

Sources: [live-androidx-material3-material3-material3-slider-lines-3846-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 386–420)

    },
    track: @Composable (SliderState) -> Unit = { sliderState ->
        SliderDefaults.Track(colors = colors, enabled = enabled, sliderState = sliderState)
    },
) {
    Slider(
        state = state,
        onValueChange = onValueChange ?: { state.value = it },
        modifier = modifier,
        enabled = enabled,
        onValueChangeFinished = onValueChangeFinished,
        colors = colors,
        interactionSource = interactionSource,
        thumb = thumb,
        track = track,
    )
}

/**
 * [Material Design slider](https://m3.material.io/components/sliders/overview)
 *
 * Vertical Sliders allow users to make selections from a range of values.
 *
 * Vertical Sliders reflect a range of values along a vertical bar, from which users may select a
 * single value. They are ideal for adjusting settings such as volume, brightness, or applying image
 * filters.
 *
 * ![Vertical sliders
 * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk1j0t-05.png?alt=media&token=3b884058-21ca-4d72-ba5e-5afdb59fa01e)
 *
 * Vertical Slider:
 *
 * @sample androidx.compose.material3.samples.VerticalSliderSample
 *
 * Vertical Slider with a centered track:

Sources: [live-androidx-material3-material3-material3-slider-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3881–3915)


/**
 * Immutable float range for [RangeSlider]
 *
 * Used in [RangeSlider] to determine the active track range for the component. The range is as
 * follows: SliderRange.start..SliderRange.endInclusive.
 */
@Immutable
@JvmInline
internal value class SliderRange(val packedValue: Long) {
    /** start of the [SliderRange] */
    @Stable
    val start: Float
        get() {
            // Explicitly compare against packed values to avoid auto-boxing of Size.Unspecified
            check(this.packedValue != Unspecified.packedValue) { "SliderRange is unspecified" }
            return unpackFloat1(packedValue)
        }

    /** End (inclusive) of the [SliderRange] */
    @Stable
    val endInclusive: Float
        get() {
            // Explicitly compare against packed values to avoid auto-boxing of Size.Unspecified
            check(this.packedValue != Unspecified.packedValue) { "SliderRange is unspecified" }
            return unpackFloat2(packedValue)
        }

    companion object {
        /**
         * Represents an unspecified [SliderRange] value, usually a replacement for `null` when a
         * primitive value is desired.
         */
        @Stable
        val Unspecified

Sources: [live-androidx-material3-material3-material3-slider-lines-3881-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3916–3950)

            get() = SliderRange(Float.NaN, Float.NaN)
    }

    /** String representation of the [SliderRange] */
    override fun toString() =
        if (isSpecified) {
            "$start..$endInclusive"
        } else {
            "FloatRange.Unspecified"
        }
}

/**
 * Creates a [SliderRange] from a given start and endInclusive float. It requires endInclusive to
 * be >= start.
 *
 * @param start float that indicates the start of the range
 * @param endInclusive float that indicates the end of the range
 */
@Stable
internal fun SliderRange(start: Float, endInclusive: Float): SliderRange {
    val isUnspecified = start.isNaN() && endInclusive.isNaN()

    require(isUnspecified || start <= endInclusive) {
        "start($start) must be <= endInclusive($endInclusive)"
    }
    return SliderRange(packFloats(start, endInclusive))
}

/**
 * Creates a [SliderRange] from a given [ClosedFloatingPointRange]. It requires
 * range.endInclusive >= range.start.
 *
 * @param range the ClosedFloatingPointRange<Float> for the range.
 */

Sources: [live-androidx-material3-material3-material3-slider-lines-3916-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 3951–3972)

@Stable
internal fun SliderRange(range: ClosedFloatingPointRange<Float>): SliderRange {
    val start = range.start
    val endInclusive = range.endInclusive
    val isUnspecified = start.isNaN() && endInclusive.isNaN()
    require(isUnspecified || start <= endInclusive) {
        "ClosedFloatingPointRange<Float>.start($start) must be <= " +
            "ClosedFloatingPoint.endInclusive($endInclusive)"
    }
    return SliderRange(packFloats(start, endInclusive))
}

/** Check for if a given [SliderRange] is not [SliderRange.Unspecified]. */
@Stable
internal val SliderRange.isSpecified: Boolean
    get() = packedValue != SliderRange.Unspecified.packedValue

internal val CornerSizeAlignmentLine = VerticalAlignmentLine(::min)

private val insetFocusRingPadding
    get() = 4.dp


Sources: [live-androidx-material3-material3-material3-slider-lines-3951-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 421–455)

 *
 * @sample androidx.compose.material3.samples.VerticalCenteredSliderSample
 * @param state [SliderState] which contains the slider's current value.
 * @param onValueChange callback in which value should be updated from the [state] (e.g.
 *   `state.value = it`)
 * @param modifier the [Modifier] to be applied to this slider
 * @param enabled controls the enabled state of this slider. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param onValueChangeFinished called when value change has ended. This should not be used to
 *   update the slider value (use [onValueChange] instead), but rather to know when the user has
 *   completed selecting a new value by ending a drag or a click. For keyboard movements, this is
 *   called on every step.
 * @param topToBottom controls the direction of this slider. When true (default), the slider
 *   progresses from top to bottom (top represents the minimum value and bottom represents the
 *   maximum value). When false, the slider progresses from bottom to top (bottom represents the
 *   minimum value and top represents the maximum value).
 * @param colors [SliderColors] that will be used to resolve the colors used for this slider in
 *   different states. See [SliderDefaults.colors].
 * @param interactionSource the [MutableInteractionSource] representing the stream of [Interaction]s
 *   for this slider. You can create and pass in your own `remember`ed instance to observe
 *   [Interaction]s and customize the appearance / behavior of this slider in different states.
 * @param thumb the thumb to be displayed on the slider, it is placed on top of the track. The
 *   lambda receives a [SliderState] which is used to obtain the current active track.
 * @param track the track to be displayed on the slider, it is placed underneath the thumb. The
 *   lambda receives a [SliderState] which is used to obtain the current active track.
 *
 * @material3expressive
 */
@Composable
public fun VerticalSlider(
    state: SliderState,
    onValueChange: (Float) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,

Sources: [live-androidx-material3-material3-material3-slider-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 456–490)

    onValueChangeFinished: (() -> Unit)? = null,
    topToBottom: Boolean = true,
    colors: SliderColors = SliderDefaults.colors(),
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    thumb: @Composable (SliderState) -> Unit = { _ ->
        SliderDefaults.Thumb(
            interactionSource = interactionSource,
            isVertical = true,
            colors = colors,
            enabled = enabled,
            thumbSize = VerticalThumbSize,
        )
    },
    track: @Composable (SliderState) -> Unit = { sliderState ->
        SliderDefaults.Track(
            colors = colors,
            enabled = enabled,
            sliderState = sliderState,
            trackCornerSize = Dp.Unspecified,
        )
    },
) {
    require(state.steps >= 0) { "steps should be >= 0" }

    state.orientation = Vertical
    state.reverseVerticalDirection = !topToBottom

    SliderImpl(
        state = state,
        modifier = modifier,
        enabled = enabled,
        onValueChange = onValueChange,
        onValueChangeFinished = onValueChangeFinished,
        interactionSource = interactionSource,
        thumb = thumb,

Sources: [live-androidx-material3-material3-material3-slider-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 491–525)

        track = track,
    )
}

/**
 * [Material Design slider](https://m3.material.io/components/sliders/overview)
 *
 * Vertical Sliders allow users to make selections from a range of values.
 *
 * Vertical Sliders reflect a range of values along a vertical bar, from which users may select a
 * single value. They are ideal for adjusting settings such as volume, brightness, or applying image
 * filters.
 *
 * ![Vertical sliders
 * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk1j0t-05.png?alt=media&token=3b884058-21ca-4d72-ba5e-5afdb59fa01e)
 *
 * Vertical Slider:
 *
 * @sample androidx.compose.material3.samples.VerticalSliderSample
 *
 * Vertical Slider with a centered track:
 *
 * @sample androidx.compose.material3.samples.VerticalCenteredSliderSample
 * @param state [SliderState] which contains the slider's current value.
 * @param modifier the [Modifier] to be applied to this slider
 * @param enabled controls the enabled state of this slider. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param onValueChange callback in which value should be updated
 * @param onValueChangeFinished called when value change has ended. This should not be used to
 *   update the slider value (use [onValueChange] instead), but rather to know when the user has
 *   completed selecting a new value by ending a drag or a click. For keyboard movements, this is
 *   called on every step.
 * @param topToBottom controls the direction of this slider. When true (default), the slider
 *   progresses from top to bottom (top represents the minimum value and bottom represents the

Sources: [live-androidx-material3-material3-material3-slider-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 526–560)

 *   maximum value). When false, the slider progresses from bottom to top (bottom represents the
 *   minimum value and top represents the maximum value).
 * @param colors [SliderColors] that will be used to resolve the colors used for this slider in
 *   different states. See [SliderDefaults.colors].
 * @param interactionSource the [MutableInteractionSource] representing the stream of [Interaction]s
 *   for this slider. You can create and pass in your own `remember`ed instance to observe
 *   [Interaction]s and customize the appearance / behavior of this slider in different states.
 * @param thumb the thumb to be displayed on the slider, it is placed on top of the track. The
 *   lambda receives a [SliderState] which is used to obtain the current active track.
 * @param track the track to be displayed on the slider, it is placed underneath the thumb. The
 *   lambda receives a [SliderState] which is used to obtain the current active track.
 *
 * @material3expressive
 */
@Deprecated(message = "Maintained for binary compatibility.", level = DeprecationLevel.HIDDEN)
@Composable
public fun VerticalSlider(
    state: SliderState,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    onValueChange: ((Float) -> Unit)? = null,
    onValueChangeFinished: (() -> Unit)? = null,
    topToBottom: Boolean = true,
    colors: SliderColors = SliderDefaults.colors(),
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    thumb: @Composable (SliderState) -> Unit = { _ ->
        SliderDefaults.Thumb(
            interactionSource = interactionSource,
            isVertical = true,
            colors = colors,
            enabled = enabled,
            thumbSize = VerticalThumbSize,
        )
    },
    track: @Composable (SliderState) -> Unit = { sliderState ->

Sources: [live-androidx-material3-material3-material3-slider-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 561–595)

        SliderDefaults.Track(
            colors = colors,
            enabled = enabled,
            sliderState = sliderState,
            trackCornerSize = Dp.Unspecified,
        )
    },
) {
    VerticalSlider(
        state = state,
        onValueChange = onValueChange ?: { state.value = it },
        modifier = modifier,
        enabled = enabled,
        onValueChangeFinished = onValueChangeFinished,
        topToBottom = topToBottom,
        colors = colors,
        interactionSource = interactionSource,
        thumb = thumb,
        track = track,
    )
}

/**
 * [Material Design range slider](https://m3.material.io/components/sliders/overview)
 *
 * Range Sliders expand upon [Slider] using the same concepts but allow the user to select 2 values.
 *
 * The two values are still bounded by the value range but they also cannot cross each other.
 *
 * Use continuous Range Sliders to allow users to make meaningful selections that don’t require
 * specific values:
 *
 * @sample androidx.compose.material3.samples.RangeSliderSample
 *
 * You can allow the user to choose only between predefined set of values by specifying the amount

Sources: [live-androidx-material3-material3-material3-slider-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 596–630)

 * of steps between min and max values:
 *
 * @sample androidx.compose.material3.samples.StepRangeSliderSample
 * @param value current values of the RangeSlider. If either value is outside of [valueRange]
 *   provided, it will be coerced to this range.
 * @param onValueChange lambda in which values should be updated
 * @param modifier modifiers for the Range Slider layout
 * @param enabled whether or not component is enabled and can we interacted with or not
 * @param valueRange range of values that Range Slider values can take. Passed [value] will be
 *   coerced to this range
 * @param steps if positive, specifies the amount of discrete allowable values between the endpoints
 *   of [valueRange]. For example, a range from 0 to 10 with 4 [steps] allows 4 values evenly
 *   distributed between 0 and 10 (i.e., 2, 4, 6, 8). If [steps] is 0, the slider will behave
 *   continuously and allow any value from the range. Must not be negative.
 * @param onValueChangeFinished called when value change has ended. This should not be used to
 *   update the range slider value (use [onValueChange] instead), but rather to know when the user
 *   has completed selecting a new value by ending a drag or a click. For keyboard movements, this
 *   is called on every step.
 * @param colors [SliderColors] that will be used to determine the color of the Range Slider parts
 *   in different state. See [SliderDefaults.colors] to customize.
 */
@Deprecated(
    message =
        "Use the RangeSlider overload that accepts RangeSliderState, onValueChange, and onValueChangeFinished instead.",
    replaceWith =
        ReplaceWith(
            "RangeSlider(state = rememberRangeSliderState(value.start, value.endInclusive, steps, trackRange = valueRange), onValueChange = onValueChange, modifier = modifier, enabled = enabled, onValueChangeFinished = onValueChangeFinished, colors = colors)"
        ),
)
@Composable
public fun RangeSlider(
    value: ClosedFloatingPointRange<Float>,
    onValueChange: (ClosedFloatingPointRange<Float>) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,

Sources: [live-androidx-material3-material3-material3-slider-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 631–665)

    valueRange: ClosedFloatingPointRange<Float> = 0f..1f,
    @IntRange(from = 0) steps: Int = 0,
    onValueChangeFinished: (() -> Unit)? = null,
    colors: SliderColors = SliderDefaults.colors(),
) {
    val startThumbInteractionSource: MutableInteractionSource = remember {
        MutableInteractionSource()
    }
    val endThumbInteractionSource: MutableInteractionSource = remember {
        MutableInteractionSource()
    }

    val state =
        remember(steps, valueRange) {
            RangeSliderState(value.start, value.endInclusive, steps, valueRange)
        }

    state.startValue = value.start
    state.endValue = value.endInclusive

    RangeSlider(
        state = state,
        onValueChange = onValueChange,
        modifier = modifier,
        enabled = enabled,
        onValueChangeFinished = onValueChangeFinished,
        colors = colors,
        startThumbInteractionSource = startThumbInteractionSource,
        endThumbInteractionSource = endThumbInteractionSource,
        startThumb = {
            SliderDefaults.Thumb(
                interactionSource = startThumbInteractionSource,
                colors = colors,
                enabled = enabled,
            )

Sources: [live-androidx-material3-material3-material3-slider-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 666–700)

        },
        endThumb = {
            SliderDefaults.Thumb(
                interactionSource = endThumbInteractionSource,
                colors = colors,
                enabled = enabled,
            )
        },
        track = { rangeSliderState ->
            SliderDefaults.Track(
                colors = colors,
                enabled = enabled,
                rangeSliderState = rangeSliderState,
            )
        },
    )
}

/**
 * [Material Design range slider](https://m3.material.io/components/sliders/overview)
 *
 * Range Sliders expand upon [Slider] using the same concepts but allow the user to select 2 values.
 *
 * The two values are still bounded by the value range but they also cannot cross each other.
 *
 * It uses the provided startThumb for the slider's start thumb and endThumb for the slider's end
 * thumb. It also uses the provided track for the slider's track. If nothing is passed for these
 * parameters, it will use [SliderDefaults.Thumb] and [SliderDefaults.Track] for the thumbs and
 * track.
 *
 * Use continuous Range Sliders to allow users to make meaningful selections that don’t require
 * specific values:
 *
 * @sample androidx.compose.material3.samples.RangeSliderSample
 *

Sources: [live-androidx-material3-material3-material3-slider-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 701–732)

 * You can allow the user to choose only between predefined set of values by specifying the amount
 * of steps between min and max values:
 *
 * @sample androidx.compose.material3.samples.StepRangeSliderSample
 *
 * A custom start/end thumb and track can be provided:
 *
 * @sample androidx.compose.material3.samples.RangeSliderWithCustomComponents
 * @param state [RangeSliderState] which contains the current values of the RangeSlider.
 * @param onValueChange callback in which values should be updated from the [state] (e.g.
 *   `state.startValue = it.start` and `state.endValue = it.endInclusive`)
 * @param modifier modifiers for the Range Slider layout
 * @param enabled whether or not component is enabled and can we interacted with or not
 * @param onValueChangeFinished called when value change has ended. This should not be used to
 *   update the range slider value (use [onValueChange] instead), but rather to know when the user
 *   has completed selecting a new value by ending a drag or a click. For keyboard movements, this
 *   is called on every step.
 * @param colors [SliderColors] that will be used to determine the color of the Range Slider parts
 *   in different state. See [SliderDefaults.colors] to customize.
 * @param startThumbInteractionSource the [MutableInteractionSource] representing the stream of
 *   [Interaction]s for the start thumb. You can create and pass in your own `remember`ed instance
 *   to observe.
 * @param endThumbInteractionSource the [MutableInteractionSource] representing the stream of
 *   [Interaction]s for the end thumb. You can create and pass in your own `remember`ed instance to
 *   observe.
 * @param startThumb the start thumb to be displayed on the Range Slider. The lambda receives a
 *   [RangeSliderState] which is used to obtain the current active track.
 * @param endThumb the end thumb to be displayed on the Range Slider. The lambda receives a
 *   [RangeSliderState] which is used to obtain the current active track.
 * @param track the track to be displayed on the range slider, it is placed underneath the thumb.
 *   The lambda receives a [RangeSliderState] which is used to obtain the current active track.
 */

Sources: [live-androidx-material3-material3-material3-slider-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 71–105)

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.saveable.Saver
import androidx.compose.runtime.saveable.listSaver
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.geometry.RoundRect
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.geometry.lerp
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.PointMode
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.compositeOver
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.takeOrElse
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.KeyEventType
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.onKeyEvent
import androidx.compose.ui.input.key.type
import androidx.compose.ui.input.pointer.AwaitPointerEventScope
import androidx.compose.ui.input.pointer.PointerIcon
import androidx.compose.ui.input.pointer.PointerId

Sources: [live-androidx-material3-material3-material3-slider-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 733–767)

@Composable
public fun RangeSlider(
    state: RangeSliderState,
    onValueChange: (ClosedFloatingPointRange<Float>) -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    onValueChangeFinished: (() -> Unit)? = null,
    colors: SliderColors = SliderDefaults.colors(),
    startThumbInteractionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    endThumbInteractionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    startThumb: @Composable (RangeSliderState) -> Unit = {
        SliderDefaults.Thumb(
            interactionSource = startThumbInteractionSource,
            colors = colors,
            enabled = enabled,
        )
    },
    endThumb: @Composable (RangeSliderState) -> Unit = {
        SliderDefaults.Thumb(
            interactionSource = endThumbInteractionSource,
            colors = colors,
            enabled = enabled,
        )
    },
    track: @Composable (RangeSliderState) -> Unit = { rangeSliderState ->
        SliderDefaults.Track(
            colors = colors,
            enabled = enabled,
            rangeSliderState = rangeSliderState,
        )
    },
) {
    require(state.steps >= 0) { "steps should be >= 0" }

    RangeSliderImpl(

Sources: [live-androidx-material3-material3-material3-slider-lines-733-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 768–802)

        modifier = modifier,
        state = state,
        enabled = enabled,
        onValueChange = onValueChange,
        onValueChangeFinished = onValueChangeFinished,
        startThumbInteractionSource = startThumbInteractionSource,
        endThumbInteractionSource = endThumbInteractionSource,
        startThumb = startThumb,
        endThumb = endThumb,
        track = track,
    )
}

/**
 * [Material Design range slider](https://m3.material.io/components/sliders/overview)
 *
 * Range Sliders expand upon [Slider] using the same concepts but allow the user to select 2 values.
 *
 * The two values are still bounded by the value range but they also cannot cross each other.
 *
 * It uses the provided startThumb for the slider's start thumb and endThumb for the slider's end
 * thumb. It also uses the provided track for the slider's track. If nothing is passed for these
 * parameters, it will use [SliderDefaults.Thumb] and [SliderDefaults.Track] for the thumbs and
 * track.
 *
 * Use continuous Range Sliders to allow users to make meaningful selections that don’t require
 * specific values:
 *
 * @sample androidx.compose.material3.samples.RangeSliderSample
 *
 * You can allow the user to choose only between predefined set of values by specifying the amount
 * of steps between min and max values:
 *
 * @sample androidx.compose.material3.samples.StepRangeSliderSample
 *

Sources: [live-androidx-material3-material3-material3-slider-lines-768-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 803–835)

 * A custom start/end thumb and track can be provided:
 *
 * @sample androidx.compose.material3.samples.RangeSliderWithCustomComponents
 * @param state [RangeSliderState] which contains the current values of the RangeSlider.
 * @param modifier modifiers for the Range Slider layout
 * @param enabled whether or not component is enabled and can we interacted with or not
 * @param onValueChange callback in which values should be updated
 * @param onValueChangeFinished called when value change has ended. This should not be used to
 *   update the range slider value (use [onValueChange] instead), but rather to know when the user
 *   has completed selecting a new value by ending a drag or a click. For keyboard movements, this
 *   is called on every step.
 * @param colors [SliderColors] that will be used to determine the color of the Range Slider parts
 *   in different state. See [SliderDefaults.colors] to customize.
 * @param startThumbInteractionSource the [MutableInteractionSource] representing the stream of
 *   [Interaction]s for the start thumb. You can create and pass in your own `remember`ed instance
 *   to observe.
 * @param endThumbInteractionSource the [MutableInteractionSource] representing the stream of
 *   [Interaction]s for the end thumb. You can create and pass in your own `remember`ed instance to
 *   observe.
 * @param startThumb the start thumb to be displayed on the Range Slider. The lambda receives a
 *   [RangeSliderState] which is used to obtain the current active track.
 * @param endThumb the end thumb to be displayed on the Range Slider. The lambda receives a
 *   [RangeSliderState] which is used to obtain the current active track.
 * @param track the track to be displayed on the range slider, it is placed underneath the thumb.
 *   The lambda receives a [RangeSliderState] which is used to obtain the current active track.
 */
@Deprecated(message = "Maintained for binary compatibility.", level = DeprecationLevel.HIDDEN)
@Composable
public fun RangeSlider(
    state: RangeSliderState,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    onValueChange: ((ClosedFloatingPointRange<Float>) -> Unit)? = null,

Sources: [live-androidx-material3-material3-material3-slider-lines-803-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 836–870)

    onValueChangeFinished: (() -> Unit)? = null,
    colors: SliderColors = SliderDefaults.colors(),
    startThumbInteractionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    endThumbInteractionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    startThumb: @Composable (RangeSliderState) -> Unit = {
        SliderDefaults.Thumb(
            interactionSource = startThumbInteractionSource,
            colors = colors,
            enabled = enabled,
        )
    },
    endThumb: @Composable (RangeSliderState) -> Unit = {
        SliderDefaults.Thumb(
            interactionSource = endThumbInteractionSource,
            colors = colors,
            enabled = enabled,
        )
    },
    track: @Composable (RangeSliderState) -> Unit = { rangeSliderState ->
        SliderDefaults.Track(
            colors = colors,
            enabled = enabled,
            rangeSliderState = rangeSliderState,
        )
    },
) {
    RangeSlider(
        state = state,
        onValueChange =
            onValueChange
                ?: {
                    state.startValue = it.start
                    state.endValue = it.endInclusive
                },
        modifier = modifier,

Sources: [live-androidx-material3-material3-material3-slider-lines-836-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 871–905)

        enabled = enabled,
        onValueChangeFinished = onValueChangeFinished,
        colors = colors,
        startThumbInteractionSource = startThumbInteractionSource,
        endThumbInteractionSource = endThumbInteractionSource,
        startThumb = startThumb,
        endThumb = endThumb,
        track = track,
    )
}

@Composable
private fun SliderImpl(
    modifier: Modifier,
    state: SliderState,
    enabled: Boolean,
    onValueChange: (Float) -> Unit,
    onValueChangeFinished: (() -> Unit)?,
    interactionSource: MutableInteractionSource,
    thumb: @Composable (SliderState) -> Unit,
    track: @Composable (SliderState) -> Unit,
) {
    state.isRtl = LocalLayoutDirection.current == LayoutDirection.Rtl
    val isFocused by interactionSource.collectIsFocusedAsState()
    state.isFocused = isFocused

    val orientation = state.orientation
    val reverseVerticalDirection = state.reverseVerticalDirection

    val reverseDirection =
        (orientation == Horizontal && state.isRtl) ||
            (orientation == Vertical && reverseVerticalDirection)
    val press =
        Modifier.sliderTapModifier(
            state = state,

Sources: [live-androidx-material3-material3-material3-slider-lines-871-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 906–940)

            interactionSource = interactionSource,
            enabled = enabled,
            onValueChange = onValueChange,
            onValueChangeFinished = onValueChangeFinished,
        )
    val draggableState = rememberDraggableState { delta ->
        state.dispatchRawDeltaInternal(delta, onValueChange)
    }
    val drag =
        Modifier.draggable(
            orientation = orientation,
            reverseDirection = reverseDirection,
            enabled = enabled,
            interactionSource = interactionSource,
            onDragStarted = { state.isDragging = true },
            onDragStopped = {
                state.isDragging = false
                onValueChangeFinished?.invoke()
            },
            startDragImmediately = state.isDragging,
            state = draggableState,
        )
    val thumbModifier =
        if (orientation == Vertical) {
            Modifier.layoutId(SliderComponents.THUMB).wrapContentHeight()
        } else {
            Modifier.layoutId(SliderComponents.THUMB).wrapContentWidth()
        }

    val isInsetFocusRing =
        LocalRippleThemeConfiguration.current.focus is RippleThemeConfiguration.Focus.InsetRing

    val focusRingModifier =
        if (isInsetFocusRing) {
            Modifier.indication(

Sources: [live-androidx-material3-material3-material3-slider-lines-906-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 941–975)

                    interactionSource = interactionSource,
                    indication =
                        ripple(
                            focusRingShape = SliderTokens.HandleShape.value,
                            enablePressIndication = false,
                            enableFocusIndication = true,
                            enableDragIndication = false,
                            enableHoverIndication = false,
                        ),
                )
                .padding(if (isFocused) insetFocusRingPadding else 0.dp)
        } else {
            Modifier
        }

    val density = LocalDensity.current

    Layout(
        {
            Box(
                modifier =
                    thumbModifier.then(focusRingModifier).onSizeChanged {
                        val padding =
                            if (isInsetFocusRing && isFocused) {
                                with(density) { (insetFocusRingPadding * 2).roundToPx() }
                            } else {
                                0
                            }
                        state.thumbWidth = it.width - padding
                        state.thumbHeight = it.height - padding
                    }
            ) {
                thumb(state)
            }
            Box(modifier = Modifier.layoutId(SliderComponents.TRACK)) { track(state) }

Sources: [live-androidx-material3-material3-material3-slider-lines-941-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)

## androidx.compose.material3 Slider.kt source (lines 976–1010)

        },
        modifier =
            modifier
                .minimumInteractiveComponentSize()
                .requiredSizeIn(
                    minWidth = if (orientation == Vertical) TrackHeight else ThumbWidth,
                    minHeight = if (orientation == Vertical) ThumbWidth else TrackHeight,
                )
                .sliderSemantics(
                    state = state,
                    enabled = enabled,
                    onValueChange = onValueChange,
                    onValueChangeFinished = onValueChangeFinished,
                )
                .focusable(enabled, interactionSource)
                .slideOnKeyEvents(
                    enabled,
                    state,
                    reverseDirection,
                    onValueChange,
                    onValueChangeFinished,
                    orientation == Vertical,
                )
                .then(press)
                .then(drag),
    ) { measurables, constraints ->
        val trackPadding =
            if (isInsetFocusRing && isFocused) insetFocusRingPadding.roundToPx() else 0

        val thumbPlaceable =
            measurables.fastFirst { it.layoutId == SliderComponents.THUMB }.measure(constraints)

        val trackMeasurable = measurables.fastFirst { it.layoutId == SliderComponents.TRACK }
        val trackPlaceable =
            if (orientation == Vertical) {

Sources: [live-androidx-material3-material3-material3-slider-lines-976-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Slider.kt)
