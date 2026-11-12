---
type: reference
title: androidx.compose.material3 ProgressIndicator.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-progressindicator-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 1
    endLine: 35
    sha256: f2b4a01577358e7d67b05e18699b0ada1fd914eef1194066ea99f02ad46721db
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

      import androidx.compose.animation.core.LinearEasing
      import androidx.compose.animation.core.Spring
      import androidx.compose.animation.core.SpringSpec
      import androidx.compose.animation.core.animateFloat
      import androidx.compose.animation.core.infiniteRepeatable
      import androidx.compose.animation.core.keyframes
      import androidx.compose.animation.core.rememberInfiniteTransition
      import androidx.compose.animation.core.tween
      import androidx.compose.foundation.Canvas
      import androidx.compose.foundation.layout.size
      import androidx.compose.foundation.progressSemantics
      import androidx.compose.material3.ProgressIndicatorDefaults.drawStopIndicator
      import androidx.compose.material3.internal.IncreaseVerticalSemanticsBounds
      import androidx.compose.material3.tokens.CircularProgressIndicatorTokens
      import androidx.compose.material3.tokens.LinearProgressIndicatorTokens
      import androidx.compose.material3.tokens.MotionTokens
      import androidx.compose.material3.tokens.ProgressIndicatorTokens
  - id: live-androidx-material3-material3-material3-progressindicator-lines-1016-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 1016
    endLine: 1050
    sha256: 33501b392dea92e6d94966b2c8c50d960f5b8109561095a77f135742b521e1cf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      internal val linearIndeterminateSecondLineTailAnimationSpec
          get() =
              infiniteRepeatable(
                  animation =
                      keyframes {
                          durationMillis = LinearAnimationDuration
                          0f at SecondLineTailDelay using LinearIndeterminateProgressEasing
                          1f at SecondLineTailDuration + SecondLineTailDelay
                      }
              )
      // LinearProgressIndicator Material specs

      // Width is given in the spec but not defined as a token.
      /*@VisibleForTesting*/
      internal val LinearIndicatorWidth
          get() = 240.dp

      /*@VisibleForTesting*/
      internal val LinearIndicatorHeight
          get() = LinearProgressIndicatorTokens.Height

      internal val StopIndicatorTrailingSpace
          get() = 6.dp

      // CircularProgressIndicator Material specs
      // Diameter of the indicator circle
      /*@VisibleForTesting*/
      internal val CircularIndicatorDiameter
          get() = CircularProgressIndicatorTokens.Size

      // Indeterminate linear indicator transition specs

      // Total duration for one linear cycle
      internal const val LinearAnimationDuration = 1750
  - id: live-androidx-material3-material3-material3-progressindicator-lines-1051-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 1051
    endLine: 1077
    sha256: d46caa84f3ebdfbedbe5e863f6f2fb9744ea294f1916acea20fa09c9858164fa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      // Duration of the head and tail animations for both lines
      internal const val FirstLineHeadDuration = 1000
      internal const val FirstLineTailDuration = 1000
      internal const val SecondLineHeadDuration = 850
      internal const val SecondLineTailDuration = 850

      // Delay before the start of the head and tail animations for both lines
      internal const val FirstLineHeadDelay = 0
      internal const val FirstLineTailDelay = 250
      internal const val SecondLineHeadDelay = 650
      internal const val SecondLineTailDelay = 900

      internal val LinearIndeterminateProgressEasing = MotionTokens.EasingEmphasizedAccelerateCubicBezier

      // Indeterminate circular indicator transition specs

      // The indeterminate circular indicator easing constants for its motion
      internal val CircularProgressEasing = MotionTokens.EasingStandardCubicBezier
      internal const val CircularIndeterminateMinProgress = 0.1f
      internal const val CircularIndeterminateMaxProgress = 0.87f

      internal const val CircularAnimationProgressDuration = 6000
      internal const val CircularAnimationAdditionalRotationDelay = 1500
      internal const val CircularAnimationAdditionalRotationDuration = 300
      internal const val CircularAdditionalRotationDegreesTarget = 360f
      internal const val CircularGlobalRotationDegreesTarget = 1080f
  - id: live-androidx-material3-material3-material3-progressindicator-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 106
    endLine: 140
    sha256: b0352f78ff4ef9c79f8aabdafed4282f5849d581b409336cee0183baf6880826
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              trackColor,
              strokeCap,
              gapSize = ProgressIndicatorDefaults.LinearIndicatorTrackGapSize,
          )
      }

      /**
       * [Material Design determinate linear progress
       * indicator](https://m3.material.io/components/progress-indicators/overview)
       *
       * Progress indicators express an unspecified wait time or display the duration of a process.
       *
       * ![Linear progress indicator
       * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
       *
       * By default there is no animation between [progress] values. You can use
       * [ProgressIndicatorDefaults.ProgressAnimationSpec] as the default recommended
       * [androidx.compose.animation.core.AnimationSpec] when animating progress, such as in the following
       * example:
       *
       * @sample androidx.compose.material3.samples.LinearProgressIndicatorSample
       * @param progress the progress of this progress indicator, where 0.0 represents no progress and 1.0
       *   represents full progress. Values outside of this range are coerced into the range.
       * @param modifier the [Modifier] to be applied to this progress indicator
       * @param color color of this progress indicator
       * @param trackColor color of the track behind the indicator, visible when the progress has not
       *   reached the area of the overall indicator yet
       * @param strokeCap stroke cap to use for the ends of this progress indicator
       * @param gapSize size of the gap between the progress indicator and the track
       * @param drawStopIndicator lambda that will be called to draw the stop indicator. Note that a
       *   custom indicator implementation should also handle RTL layouts.
       */
      @Composable
      public fun LinearProgressIndicator(
          progress: () -> Float,
  - id: live-androidx-material3-material3-material3-progressindicator-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 141
    endLine: 175
    sha256: 3f3088eb8f432b8805eeae9bb9a006e978801d64aa5001e972a08381853fca37
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.linearColor,
          trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
          strokeCap: StrokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
          gapSize: Dp = ProgressIndicatorDefaults.LinearIndicatorTrackGapSize,
          drawStopIndicator: DrawScope.() -> Unit = {
              drawStopIndicator(
                  drawScope = this,
                  stopSize = ProgressIndicatorDefaults.LinearTrackStopIndicatorSize,
                  color = color,
                  strokeCap = strokeCap,
              )
          },
      ) {
          val coercedProgress = { progress().fastCoerceIn(0f, 1f) }
          Canvas(
              modifier
                  .then(IncreaseVerticalSemanticsBounds)
                  .semantics(mergeDescendants = true) {
                      // Check for NaN, as the ProgressBarRangeInfo will throw an exception.
                      progressBarRangeInfo =
                          ProgressBarRangeInfo(coercedProgress().takeUnless { it.isNaN() } ?: 0f, 0f..1f)
                  }
                  .size(LinearIndicatorWidth, LinearIndicatorHeight)
          ) {
              val strokeWidth = size.height
              val adjustedGapSize =
                  if (strokeCap == StrokeCap.Butt || size.height > size.width) {
                      gapSize
                  } else {
                      gapSize + strokeWidth.toDp()
                  }
              val gapSizeFraction = adjustedGapSize / size.width.toDp()
              val currentCoercedProgress = coercedProgress()
  - id: live-androidx-material3-material3-material3-progressindicator-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 176
    endLine: 210
    sha256: 234d7c4a6223e859c384e2d1ee75c40b148e0c8aa8a8fc89f92476b121864341
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              // track
              val trackStartFraction =
                  currentCoercedProgress + min(currentCoercedProgress, gapSizeFraction)
              if (trackStartFraction <= 1f) {
                  drawLinearIndicator(trackStartFraction, 1f, trackColor, strokeWidth, strokeCap)
              }
              // indicator
              drawLinearIndicator(0f, currentCoercedProgress, color, strokeWidth, strokeCap)
              // stop
              drawStopIndicator(this)
          }
      }

      /**
       * [Material Design indeterminate linear progress
       * indicator](https://m3.material.io/components/progress-indicators/overview)
       *
       * Progress indicators express an unspecified wait time or display the duration of a process.
       *
       * ![Linear progress indicator
       * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
       *
       * @sample androidx.compose.material3.samples.IndeterminateLinearProgressIndicatorSample
       * @param modifier the [Modifier] to be applied to this progress indicator
       * @param color color of this progress indicator
       * @param trackColor color of the track behind the indicator, visible when the progress has not
       *   reached the area of the overall indicator yet
       * @param strokeCap stroke cap to use for the ends of this progress indicator
       */
      @Deprecated(
          message =
              "Use the overload that takes `gapSize`, see `" +
                  "LegacyIndeterminateLinearProgressIndicatorSample` on how to restore the previous behavior",
          replaceWith =
              ReplaceWith("LinearProgressIndicator(modifier, color, trackColor, strokeCap, gapSize)"),
  - id: live-androidx-material3-material3-material3-progressindicator-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 211
    endLine: 245
    sha256: 4a4776d9d8eefa2ed005ab4f75c38a1c61b99594ec761d8f5feb6adf75825d7e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun LinearProgressIndicator(
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.linearColor,
          trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
          strokeCap: StrokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
      ) {
          LinearProgressIndicator(
              modifier,
              color,
              trackColor,
              strokeCap,
              gapSize = ProgressIndicatorDefaults.LinearIndicatorTrackGapSize,
          )
      }

      /**
       * [Material Design indeterminate linear progress
       * indicator](https://m3.material.io/components/progress-indicators/overview)
       *
       * Progress indicators express an unspecified wait time or display the duration of a process.
       *
       * ![Linear progress indicator
       * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
       *
       * @sample androidx.compose.material3.samples.IndeterminateLinearProgressIndicatorSample
       * @param modifier the [Modifier] to be applied to this progress indicator
       * @param color color of this progress indicator
       * @param trackColor color of the track behind the indicator, visible when the progress has not
       *   reached the area of the overall indicator yet
       * @param strokeCap stroke cap to use for the ends of this progress indicator
       * @param gapSize size of the gap between the progress indicator and the track
       */
  - id: live-androidx-material3-material3-material3-progressindicator-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 246
    endLine: 280
    sha256: 9cf979a62856d5e49331cec4418487a6cb8f6592127388e85bc9150a862e0bfa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Composable
      public fun LinearProgressIndicator(
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.linearColor,
          trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
          strokeCap: StrokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
          gapSize: Dp = ProgressIndicatorDefaults.LinearIndicatorTrackGapSize,
      ) {
          val infiniteTransition = rememberInfiniteTransition()
          val firstLineHead =
              infiniteTransition.animateFloat(
                  initialValue = 0f,
                  targetValue = 1f,
                  animationSpec = linearIndeterminateFirstLineHeadAnimationSpec,
              )
          val firstLineTail =
              infiniteTransition.animateFloat(
                  initialValue = 0f,
                  targetValue = 1f,
                  animationSpec = linearIndeterminateFirstLineTailAnimationSpec,
              )
          val secondLineHead =
              infiniteTransition.animateFloat(
                  initialValue = 0f,
                  targetValue = 1f,
                  animationSpec = linearIndeterminateSecondLineHeadAnimationSpec,
              )
          val secondLineTail =
              infiniteTransition.animateFloat(
                  initialValue = 0f,
                  targetValue = 1f,
                  animationSpec = linearIndeterminateSecondLineTailAnimationSpec,
              )
          Canvas(
              modifier
  - id: live-androidx-material3-material3-material3-progressindicator-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 281
    endLine: 315
    sha256: 6966aabe537785241cc3c9b6acc64d5127be6369cde7a0f62afd9a720821a7fd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  .then(IncreaseVerticalSemanticsBounds)
                  .progressSemantics()
                  .size(LinearIndicatorWidth, LinearIndicatorHeight)
          ) {
              val strokeWidth = size.height
              val adjustedGapSize =
                  if (strokeCap == StrokeCap.Butt || size.height > size.width) {
                      gapSize
                  } else {
                      gapSize + strokeWidth.toDp()
                  }
              val gapSizeFraction = adjustedGapSize / size.width.toDp()

              // Track before line 1
              if (firstLineHead.value < 1f - gapSizeFraction) {
                  val start = if (firstLineHead.value > 0) firstLineHead.value + gapSizeFraction else 0f
                  drawLinearIndicator(start, 1f, trackColor, strokeWidth, strokeCap)
              }

              // Line 1
              if (firstLineHead.value - firstLineTail.value > 0) {
                  drawLinearIndicator(
                      firstLineHead.value,
                      firstLineTail.value,
                      color,
                      strokeWidth,
                      strokeCap,
                  )
              }

              // Track between line 1 and line 2
              if (firstLineTail.value > gapSizeFraction) {
                  val start = if (secondLineHead.value > 0) secondLineHead.value + gapSizeFraction else 0f
                  val end = if (firstLineTail.value < 1f) firstLineTail.value - gapSizeFraction else 1f
                  drawLinearIndicator(start, end, trackColor, strokeWidth, strokeCap)
  - id: live-androidx-material3-material3-material3-progressindicator-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 316
    endLine: 350
    sha256: e946d84660493240d8808d52866da6609064a0e8e84e0ae14d62d23a76c4f650
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }

              // Line 2
              if (secondLineHead.value - secondLineTail.value > 0) {
                  drawLinearIndicator(
                      secondLineHead.value,
                      secondLineTail.value,
                      color,
                      strokeWidth,
                      strokeCap,
                  )
              }

              // Track after line 2
              if (secondLineTail.value > gapSizeFraction) {
                  val end = if (secondLineTail.value < 1) secondLineTail.value - gapSizeFraction else 1f
                  drawLinearIndicator(0f, end, trackColor, strokeWidth, strokeCap)
              }
          }
      }

      @Deprecated(
          message = "Use the overload that takes `progress` as a lambda",
          replaceWith =
              ReplaceWith(
                  "LinearProgressIndicator(\n" +
                      "progress = { progress },\n" +
                      "modifier = modifier,\n" +
                      "color = color,\n" +
                      "trackColor = trackColor,\n" +
                      "strokeCap = strokeCap,\n" +
                      ")"
              ),
      )
      @Composable
  - id: live-androidx-material3-material3-material3-progressindicator-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 351
    endLine: 385
    sha256: 23ca3cd5ad93300b0ff57d8a5bd93998d658cd1b25d835aa418f8031ebf26b5b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public fun LinearProgressIndicator(
          progress: Float,
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.linearColor,
          trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
          strokeCap: StrokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
      ): Unit =
          LinearProgressIndicator(
              progress = { progress },
              modifier = modifier,
              color = color,
              trackColor = trackColor,
              strokeCap = strokeCap,
          )

      @Suppress("DEPRECATION")
      @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun LinearProgressIndicator(
          progress: Float,
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.linearColor,
          trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
      ): Unit =
          LinearProgressIndicator(
              progress,
              modifier,
              color,
              trackColor,
              strokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
          )

      @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun LinearProgressIndicator(
  - id: live-androidx-material3-material3-material3-progressindicator-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 36
    endLine: 70
    sha256: 2d3dadbec922d5628097da72ed4477bb651cbdedb1a874c63c770810d95983c4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.Composable
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.StrokeCap
      import androidx.compose.ui.graphics.drawscope.DrawScope
      import androidx.compose.ui.graphics.drawscope.Stroke
      import androidx.compose.ui.graphics.drawscope.rotate
      import androidx.compose.ui.graphics.drawscope.scale
      import androidx.compose.ui.platform.LocalDensity
      import androidx.compose.ui.semantics.ProgressBarRangeInfo
      import androidx.compose.ui.semantics.progressBarRangeInfo
      import androidx.compose.ui.semantics.semantics
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.util.fastCoerceAtMost
      import androidx.compose.ui.util.fastCoerceIn
      import kotlin.math.PI
      import kotlin.math.abs
      import kotlin.math.max
      import kotlin.math.min

      /**
       * [Material Design determinate linear progress
       * indicator](https://m3.material.io/components/progress-indicators/overview)
       *
       * Progress indicators express an unspecified wait time or display the duration of a process.
       *
       * ![Linear progress indicator
       * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
       *
       * By default there is no animation between [progress] values. You can use
       * [ProgressIndicatorDefaults.ProgressAnimationSpec] as the default recommended
  - id: live-androidx-material3-material3-material3-progressindicator-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 386
    endLine: 420
    sha256: ea442d428eac96eee218652deb1c999c072ff116d9b77f1b667016200a66c55c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.linearColor,
          trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
      ): Unit =
          LinearProgressIndicator(
              modifier,
              color,
              trackColor,
              strokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
          )

      private fun DrawScope.drawLinearIndicator(
          startFraction: Float,
          endFraction: Float,
          color: Color,
          strokeWidth: Float,
          strokeCap: StrokeCap,
      ) {
          val width = size.width
          val height = size.height
          // Start drawing from the vertical center of the stroke
          val yOffset = height / 2

          val isLtr = layoutDirection == LayoutDirection.Ltr
          val barStart = (if (isLtr) startFraction else 1f - endFraction) * width
          val barEnd = (if (isLtr) endFraction else 1f - startFraction) * width

          // if there isn't enough space to draw the stroke caps, fall back to StrokeCap.Butt
          if (strokeCap == StrokeCap.Butt || height > width) {
              // Progress line
              drawLine(color, Offset(barStart, yOffset), Offset(barEnd, yOffset), strokeWidth)
          } else {
              // need to adjust barStart and barEnd for the stroke caps
              val strokeCapOffset = strokeWidth / 2
              val adjustedBarStart = barStart.fastCoerceIn(strokeCapOffset, width - strokeCapOffset)
  - id: live-androidx-material3-material3-material3-progressindicator-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 421
    endLine: 455
    sha256: 56c28c017fdb4bc0e418da5833ade3ed2965fbbb9d4cd367fce5aded1937dfbc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              val adjustedBarEnd = barEnd.fastCoerceIn(strokeCapOffset, width - strokeCapOffset)

              if (abs(endFraction - startFraction) > 0) {
                  // Progress line
                  drawLine(
                      color,
                      Offset(adjustedBarStart, yOffset),
                      Offset(adjustedBarEnd, yOffset),
                      strokeWidth,
                      strokeCap,
                  )
              }
          }
      }

      /**
       * [Material Design determinate circular progress
       * indicator](https://m3.material.io/components/progress-indicators/overview)
       *
       * Progress indicators express an unspecified wait time or display the duration of a process.
       *
       * ![Circular progress indicator
       * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
       *
       * By default there is no animation between [progress] values. You can use
       * [ProgressIndicatorDefaults.ProgressAnimationSpec] as the default recommended
       * [androidx.compose.animation.core.AnimationSpec] when animating progress, such as in the following
       * example:
       *
       * @sample androidx.compose.material3.samples.CircularProgressIndicatorSample
       * @param progress the progress of this progress indicator, where 0.0 represents no progress and 1.0
       *   represents full progress. Values outside of this range are coerced into the range.
       * @param modifier the [Modifier] to be applied to this progress indicator
       * @param color color of this progress indicator
       * @param strokeWidth stroke width of this progress indicator
  - id: live-androidx-material3-material3-material3-progressindicator-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 456
    endLine: 490
    sha256: a5ac7e6132eaeaecdcaee2c9c695199387264f455034a9fd923b4d2409cc9614
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       * @param trackColor color of the track behind the indicator, visible when the progress has not
       *   reached the area of the overall indicator yet
       * @param strokeCap stroke cap to use for the ends of this progress indicator
       */
      @Deprecated(
          message =
              "Use the overload that takes `gapSize`, see " +
                  "`LegacyCircularProgressIndicatorSample` on how to restore the previous behavior",
          replaceWith =
              ReplaceWith(
                  "CircularProgressIndicator(progress, modifier, color, strokeWidth, trackColor, " +
                      "strokeCap, gapSize)"
              ),
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun CircularProgressIndicator(
          progress: () -> Float,
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.circularColor,
          strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,
          trackColor: Color = ProgressIndicatorDefaults.circularDeterminateTrackColor,
          strokeCap: StrokeCap = ProgressIndicatorDefaults.CircularDeterminateStrokeCap,
      ) {
          CircularProgressIndicator(
              progress,
              modifier,
              color,
              strokeWidth,
              trackColor,
              strokeCap,
              gapSize = ProgressIndicatorDefaults.CircularIndicatorTrackGapSize,
          )
      }
  - id: live-androidx-material3-material3-material3-progressindicator-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 491
    endLine: 525
    sha256: 72bdd6a3dd7e5c1581a39752ebba288b14fed7ff5468afc5e6801bbd66a0e64b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * [Material Design determinate circular progress
       * indicator](https://m3.material.io/components/progress-indicators/overview)
       *
       * Progress indicators express an unspecified wait time or display the duration of a process.
       *
       * ![Circular progress indicator
       * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
       *
       * By default there is no animation between [progress] values. You can use
       * [ProgressIndicatorDefaults.ProgressAnimationSpec] as the default recommended
       * [androidx.compose.animation.core.AnimationSpec] when animating progress, such as in the following
       * example:
       *
       * @sample androidx.compose.material3.samples.CircularProgressIndicatorSample
       * @param progress the progress of this progress indicator, where 0.0 represents no progress and 1.0
       *   represents full progress. Values outside of this range are coerced into the range.
       * @param modifier the [Modifier] to be applied to this progress indicator
       * @param color color of this progress indicator
       * @param strokeWidth stroke width of this progress indicator
       * @param trackColor color of the track behind the indicator, visible when the progress has not
       *   reached the area of the overall indicator yet
       * @param strokeCap stroke cap to use for the ends of this progress indicator
       * @param gapSize size of the gap between the progress indicator and the track
       */
      @Composable
      public fun CircularProgressIndicator(
          progress: () -> Float,
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.circularColor,
          strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,
          trackColor: Color = ProgressIndicatorDefaults.circularDeterminateTrackColor,
          strokeCap: StrokeCap = ProgressIndicatorDefaults.CircularDeterminateStrokeCap,
          gapSize: Dp = ProgressIndicatorDefaults.CircularIndicatorTrackGapSize,
      ) {
  - id: live-androidx-material3-material3-material3-progressindicator-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 526
    endLine: 560
    sha256: 21dbbada3b490cae4c39763a1694e27c4cc75e0097258016aadaa94515e45b06
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val coercedProgress = { progress().fastCoerceIn(0f, 1f) }
          val stroke = with(LocalDensity.current) { Stroke(width = strokeWidth.toPx(), cap = strokeCap) }
          Canvas(
              modifier
                  .semantics(mergeDescendants = true) {
                      // Check for NaN, as the ProgressBarRangeInfo will throw an exception.
                      progressBarRangeInfo =
                          ProgressBarRangeInfo(coercedProgress().takeUnless { it.isNaN() } ?: 0f, 0f..1f)
                  }
                  .size(CircularIndicatorDiameter)
          ) {
              // Start at 12 o'clock
              val startAngle = 270f
              val sweep = coercedProgress() * 360f
              val adjustedGapSize =
                  if (strokeCap == StrokeCap.Butt || size.height > size.width) {
                      gapSize
                  } else {
                      gapSize + strokeWidth
                  }
              val gapSizeSweep = (adjustedGapSize.value / (PI * size.width.toDp().value).toFloat()) * 360f

              drawCircularIndicator(
                  startAngle + sweep + min(sweep, gapSizeSweep),
                  360f - sweep - min(sweep, gapSizeSweep) * 2,
                  trackColor,
                  stroke,
              )
              drawDeterminateCircularIndicator(startAngle, sweep, color, stroke)
          }
      }

      /**
       * [Material Design determinate circular progress
       * indicator](https://m3.material.io/components/progress-indicators/overview)
  - id: live-androidx-material3-material3-material3-progressindicator-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 561
    endLine: 595
    sha256: e56546686a0b5a01217d924b3539a3dca723d46b70fabc64a737a93323e2eabd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * Progress indicators express an unspecified wait time or display the duration of a process.
       *
       * ![Circular progress indicator
       * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
       *
       * @sample androidx.compose.material3.samples.IndeterminateCircularProgressIndicatorSample
       * @param modifier the [Modifier] to be applied to this progress indicator
       * @param color color of this progress indicator
       * @param strokeWidth stroke width of this progress indicator
       * @param trackColor color of the track behind the indicator, visible when the progress has not
       *   reached the area of the overall indicator yet
       * @param strokeCap stroke cap to use for the ends of this progress indicator
       */
      @Deprecated(
          message = "Use the overload that takes `gapSize`",
          replaceWith =
              ReplaceWith(
                  "CircularProgressIndicator(modifier, color, strokeWidth, trackColor, strokeCap, " +
                      "gapSize)"
              ),
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun CircularProgressIndicator(
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.circularColor,
          strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,
          trackColor: Color = ProgressIndicatorDefaults.circularIndeterminateTrackColor,
          strokeCap: StrokeCap = ProgressIndicatorDefaults.CircularIndeterminateStrokeCap,
      ): Unit =
          CircularProgressIndicator(
              modifier = modifier,
              color = color,
              strokeWidth = strokeWidth,
  - id: live-androidx-material3-material3-material3-progressindicator-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 596
    endLine: 630
    sha256: e1691bb885d31b02ea4591c9eadcaed49402139aef4d3aab48820939afc0485c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              trackColor = trackColor,
              strokeCap = strokeCap,
              gapSize = ProgressIndicatorDefaults.CircularIndicatorTrackGapSize,
          )

      /**
       * [Material Design determinate circular progress
       * indicator](https://m3.material.io/components/progress-indicators/overview)
       *
       * Progress indicators express an unspecified wait time or display the duration of a process.
       *
       * ![Circular progress indicator
       * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
       *
       * @sample androidx.compose.material3.samples.IndeterminateCircularProgressIndicatorSample
       * @param modifier the [Modifier] to be applied to this progress indicator
       * @param color color of this progress indicator
       * @param strokeWidth stroke width of this progress indicator
       * @param trackColor color of the track behind the indicator, visible when the progress has not
       *   reached the area of the overall indicator yet
       * @param strokeCap stroke cap to use for the ends of this progress indicator
       * @param gapSize size of the gap between the progress indicator and the track
       */
      @Composable
      public fun CircularProgressIndicator(
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.circularColor,
          strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,
          trackColor: Color = ProgressIndicatorDefaults.circularIndeterminateTrackColor,
          strokeCap: StrokeCap = ProgressIndicatorDefaults.CircularIndeterminateStrokeCap,
          gapSize: Dp = ProgressIndicatorDefaults.CircularIndicatorTrackGapSize,
      ) {
          val stroke = with(LocalDensity.current) { Stroke(width = strokeWidth.toPx(), cap = strokeCap) }

          val infiniteTransition = rememberInfiniteTransition()
  - id: live-androidx-material3-material3-material3-progressindicator-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 631
    endLine: 665
    sha256: 07cc05a0922c94b45454bb9187ad594f462d0fa560b7dc006a3249f6a1a4d368
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          // A global rotation that does a 360 degrees rotation in 6 seconds.
          val globalRotation =
              infiniteTransition.animateFloat(
                  initialValue = 0f,
                  targetValue = CircularGlobalRotationDegreesTarget,
                  animationSpec = circularIndeterminateGlobalRotationAnimationSpec,
              )

          // An additional rotation that moves by 90 degrees in 500ms and then rest for 1 second.
          val additionalRotation =
              infiniteTransition.animateFloat(
                  initialValue = 0f,
                  targetValue = CircularAdditionalRotationDegreesTarget,
                  animationSpec = circularIndeterminateRotationAnimationSpec,
              )

          // Indicator progress animation that will be changing the progress up and down as the indicator
          // rotates.
          val progressAnimation =
              infiniteTransition.animateFloat(
                  initialValue = CircularIndeterminateMinProgress,
                  targetValue = CircularIndeterminateMaxProgress,
                  animationSpec = circularIndeterminateProgressAnimationSpec,
              )

          Canvas(modifier.progressSemantics().size(CircularIndicatorDiameter)) {
              val sweep = progressAnimation.value * 360f
              val adjustedGapSize =
                  if (strokeCap == StrokeCap.Butt || size.height > size.width) {
                      gapSize
                  } else {
                      gapSize + strokeWidth
                  }
              val gapSizeSweep = (adjustedGapSize.value / (PI * size.width.toDp().value).toFloat()) * 360f
  - id: live-androidx-material3-material3-material3-progressindicator-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 666
    endLine: 700
    sha256: 499b4b94adbb60b3f3aa00e4f36f321fa14c0d041992452e4a9541cacf2bc5b5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              rotate(globalRotation.value + additionalRotation.value) {
                  drawCircularIndicator(
                      sweep + min(sweep, gapSizeSweep),
                      360f - sweep - min(sweep, gapSizeSweep) * 2,
                      trackColor,
                      stroke,
                  )
                  drawDeterminateCircularIndicator(startAngle = 0f, sweep, color, stroke)
              }
          }
      }

      @Suppress("DEPRECATION")
      @Deprecated(
          message = "Use the overload that takes `progress` as a lambda",
          replaceWith =
              ReplaceWith(
                  "CircularProgressIndicator(\n" +
                      "progress = { progress },\n" +
                      "modifier = modifier,\n" +
                      "color = color,\n" +
                      "strokeWidth = strokeWidth,\n" +
                      "trackColor = trackColor,\n" +
                      "strokeCap = strokeCap,\n" +
                      ")"
              ),
      )
      @Composable
      public fun CircularProgressIndicator(
          progress: Float,
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.circularColor,
          strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,
          trackColor: Color = ProgressIndicatorDefaults.circularTrackColor,
          strokeCap: StrokeCap = ProgressIndicatorDefaults.CircularDeterminateStrokeCap,
  - id: live-androidx-material3-material3-material3-progressindicator-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 701
    endLine: 735
    sha256: 9acea2e3e5d0852c8bd514b2dd9b6d013b91944d420b860b25f4124bbfc8d7fb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ): Unit =
          CircularProgressIndicator(
              progress = { progress },
              modifier = modifier,
              color = color,
              strokeWidth = strokeWidth,
              trackColor = trackColor,
              strokeCap = strokeCap,
          )

      @Suppress("DEPRECATION")
      @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun CircularProgressIndicator(
          progress: Float,
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.circularColor,
          strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,
      ): Unit =
          CircularProgressIndicator(
              progress,
              modifier,
              color,
              strokeWidth,
              trackColor = ProgressIndicatorDefaults.circularTrackColor,
              strokeCap = ProgressIndicatorDefaults.CircularDeterminateStrokeCap,
          )

      @Suppress("DEPRECATION")
      @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun CircularProgressIndicator(
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.circularColor,
          strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,
  - id: live-androidx-material3-material3-material3-progressindicator-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 71
    endLine: 105
    sha256: 28a2a7f08c823cd4ceaff6888802a67a782c4cf76601f465d4a286c524f41b9d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [androidx.compose.animation.core.AnimationSpec] when animating progress, such as in the following
       * example:
       *
       * @sample androidx.compose.material3.samples.LinearProgressIndicatorSample
       * @param progress the progress of this progress indicator, where 0.0 represents no progress and 1.0
       *   represents full progress. Values outside of this range are coerced into the range.
       * @param modifier the [Modifier] to be applied to this progress indicator
       * @param color color of this progress indicator
       * @param trackColor color of the track behind the indicator, visible when the progress has not
       *   reached the area of the overall indicator yet
       * @param strokeCap stroke cap to use for the ends of this progress indicator
       */
      @Deprecated(
          message =
              "Use the overload that takes `gapSize` and `drawStopIndicator`, see " +
                  "`LegacyLinearProgressIndicatorSample` on how to restore the previous behavior",
          replaceWith =
              ReplaceWith(
                  "LinearProgressIndicator(progress, modifier, color, trackColor, strokeCap, " +
                      "gapSize, drawStopIndicator)"
              ),
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun LinearProgressIndicator(
          progress: () -> Float,
          modifier: Modifier = Modifier,
          color: Color = ProgressIndicatorDefaults.linearColor,
          trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
          strokeCap: StrokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
      ) {
          LinearProgressIndicator(
              progress,
              modifier,
              color,
  - id: live-androidx-material3-material3-material3-progressindicator-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 736
    endLine: 770
    sha256: e6876a5bc572e0579cf245722c2aecba760010279098bb9ada56b0fedee9c984
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ): Unit =
          CircularProgressIndicator(
              modifier,
              color,
              strokeWidth,
              trackColor = ProgressIndicatorDefaults.circularTrackColor,
              strokeCap = ProgressIndicatorDefaults.CircularIndeterminateStrokeCap,
          )

      private fun DrawScope.drawCircularIndicator(
          startAngle: Float,
          sweep: Float,
          color: Color,
          stroke: Stroke,
      ) {
          // To draw this circle we need a rect with edges that line up with the midpoint of the stroke.
          // To do this we need to remove half the stroke width from the total diameter for both sides.
          val diameterOffset = stroke.width / 2
          val arcDimen = size.width - 2 * diameterOffset
          drawArc(
              color = color,
              startAngle = startAngle,
              sweepAngle = sweep,
              useCenter = false,
              topLeft = Offset(diameterOffset, diameterOffset),
              size = Size(arcDimen, arcDimen),
              style = stroke,
          )
      }

      private fun DrawScope.drawCircularIndicatorTrack(color: Color, stroke: Stroke) =
          drawCircularIndicator(0f, 360f, color, stroke)

      private fun DrawScope.drawDeterminateCircularIndicator(
          startAngle: Float,
  - id: live-androidx-material3-material3-material3-progressindicator-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 771
    endLine: 805
    sha256: 26a329ee8859e8ab10ef3b7e6a401b3c06a7f60f5c0e213de2ea21f2c051e947
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          sweep: Float,
          color: Color,
          stroke: Stroke,
      ) = drawCircularIndicator(startAngle, sweep, color, stroke)

      private fun DrawScope.drawIndeterminateCircularIndicator(
          startAngle: Float,
          strokeWidth: Dp,
          sweep: Float,
          color: Color,
          stroke: Stroke,
      ) {
          val strokeCapOffset =
              if (stroke.cap == StrokeCap.Butt) {
                  0f
              } else {
                  // Length of arc is angle * radius
                  // Angle (radians) is length / radius
                  // The length should be the same as the stroke width for calculating the min angle
                  (180.0 / PI).toFloat() * (strokeWidth / (CircularIndicatorDiameter / 2)) / 2f
              }

          // Adding a stroke cap draws half the stroke width behind the start point, so we want to
          // move it forward by that amount so the arc visually appears in the correct place
          val adjustedStartAngle = startAngle + strokeCapOffset

          // When the start and end angles are in the same place, we still want to draw a small sweep, so
          // the stroke caps get added on both ends and we draw the correct minimum length arc
          val adjustedSweep = max(sweep, 0.1f)

          drawCircularIndicator(adjustedStartAngle, adjustedSweep, color, stroke)
      }

      /**
       * Contains the default values used for [LinearProgressIndicator] and [CircularProgressIndicator].
  - id: live-androidx-material3-material3-material3-progressindicator-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 806
    endLine: 840
    sha256: aefc62e3889f8fb8a7bbd634ef3f7047aac3d3ac8e6431c771cf577ca1c59325
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      public object ProgressIndicatorDefaults {
          /** Default color for a linear progress indicator. */
          public val linearColor: Color
              @Composable get() = ProgressIndicatorTokens.ActiveIndicatorColor.value

          /** Default color for a circular progress indicator. */
          public val circularColor: Color
              @Composable get() = ProgressIndicatorTokens.ActiveIndicatorColor.value

          /** Default track color for a linear progress indicator. */
          public val linearTrackColor: Color
              @Composable get() = ProgressIndicatorTokens.TrackColor.value

          /** Default track color for a circular progress indicator. */
          @Deprecated(
              "Renamed to circularDeterminateTrackColor or circularIndeterminateTrackColor",
              ReplaceWith("ProgressIndicatorDefaults.circularIndeterminateTrackColor"),
              DeprecationLevel.WARNING,
          )
          public val circularTrackColor: Color
              @Composable get() = Color.Transparent

          /** Default track color for a circular determinate progress indicator. */
          public val circularDeterminateTrackColor: Color
              @Composable get() = ProgressIndicatorTokens.TrackColor.value

          /** Default track color for a circular indeterminate progress indicator. */
          public val circularIndeterminateTrackColor: Color
              @Composable get() = Color.Transparent

          /** Default stroke width for a circular progress indicator. */
          public val CircularStrokeWidth: Dp = CircularProgressIndicatorTokens.TrackThickness

          /** Default stroke cap for a linear progress indicator. */
  - id: live-androidx-material3-material3-material3-progressindicator-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 841
    endLine: 875
    sha256: d07e34d786b68d3d45bbe7190b7466e350572a45214333ec3718f48ce167efaf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val LinearStrokeCap: StrokeCap = StrokeCap.Round

          /** Default stroke cap for a determinate circular progress indicator. */
          public val CircularDeterminateStrokeCap: StrokeCap = StrokeCap.Round

          /** Default stroke cap for an indeterminate circular progress indicator. */
          public val CircularIndeterminateStrokeCap: StrokeCap = StrokeCap.Round

          /** Default track stop indicator size for a linear progress indicator. */
          public val LinearTrackStopIndicatorSize: Dp = LinearProgressIndicatorTokens.StopSize

          /** Default indicator track gap size for a linear progress indicator. */
          public val LinearIndicatorTrackGapSize: Dp = LinearProgressIndicatorTokens.TrackActiveSpace

          /** Default indicator track gap size for a circular progress indicator. */
          public val CircularIndicatorTrackGapSize: Dp = CircularProgressIndicatorTokens.TrackActiveSpace

          /**
           * The default [androidx.compose.animation.core.AnimationSpec] that should be used when
           * animating between progress in a determinate progress indicator.
           */
          public val ProgressAnimationSpec: SpringSpec<Float> =
              SpringSpec(
                  dampingRatio = Spring.DampingRatioNoBouncy,
                  stiffness = Spring.StiffnessVeryLow,
                  // The default threshold is 0.01, or 1% of the overall progress range, which is quite
                  // large and noticeable. We purposefully choose a smaller threshold.
                  visibilityThreshold = 1 / 1000f,
              )

          /**
           * Draws the stop indicator at the end of the track.
           *
           * @param drawScope the [DrawScope]
           * @param stopSize size of this stop indicator, it cannot be bigger than the track's height
  - id: live-androidx-material3-material3-material3-progressindicator-lines-876-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 876
    endLine: 910
    sha256: f2e71e07cdb33b87b0b1477bf1e041c35e8a5d90954746556e90371911063c5b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
           * @param color color of this stop indicator
           * @param strokeCap stroke cap to use for the ends of this stop indicator
           */
          public fun drawStopIndicator(
              drawScope: DrawScope,
              stopSize: Dp,
              color: Color,
              strokeCap: StrokeCap,
          ) {

              // Draws a circle or a square indicator according to the provided Cap.
              fun DrawScope.drawIndicator(adjustedStopSize: Float, stopOffset: Float) {
                  if (strokeCap == StrokeCap.Round) {
                      drawCircle(
                          color = color,
                          radius = adjustedStopSize / 2f,
                          center =
                              Offset(
                                  x = size.width - (adjustedStopSize / 2f) - stopOffset,
                                  y = size.height / 2f,
                              ),
                      )
                  } else {
                      drawRect(
                          color = color,
                          topLeft =
                              Offset(
                                  x = size.width - adjustedStopSize - stopOffset,
                                  y = (size.height - adjustedStopSize) / 2f,
                              ),
                          size = Size(width = adjustedStopSize, height = adjustedStopSize),
                      )
                  }
              }
  - id: live-androidx-material3-material3-material3-progressindicator-lines-911-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 911
    endLine: 945
    sha256: 1d7ded72df2895df89c66bbefc54ebac19de7b497bf70be835e0708404c73d48
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              with(drawScope) {
                  val adjustedStopSize =
                      min(stopSize.toPx(), size.height) // Stop can't be bigger than track
                  // The limit to prevent excessive padding when dealing with large progress height.
                  // TODO b/401511176 - Consider adding a new token.
                  val maxStopOffset = StopIndicatorTrailingSpace.toPx()
                  // Offset from end.
                  val stopOffset = ((size.height - adjustedStopSize) / 2).fastCoerceAtMost(maxStopOffset)
                  if (layoutDirection == LayoutDirection.Rtl) {
                      // Flip the direction by scaling with -1 on the X axis.
                      scale(scaleX = -1f, scaleY = 1f) { drawIndicator(adjustedStopSize, stopOffset) }
                  } else {
                      drawIndicator(adjustedStopSize, stopOffset)
                  }
              }
          }
      }

      /** A global animation spec for indeterminate circular progress indicator. */
      internal val circularIndeterminateGlobalRotationAnimationSpec
          get() =
              infiniteRepeatable<Float>(
                  animation = tween(CircularAnimationProgressDuration, easing = LinearEasing)
              )

      /**
       * An animation spec for indeterminate circular progress indicators that infinitely rotates a 360
       * degrees.
       */
      internal val circularIndeterminateRotationAnimationSpec
          get() =
              infiniteRepeatable(
                  animation =
                      keyframes {
                          durationMillis = CircularAnimationProgressDuration // 6000ms
  - id: live-androidx-material3-material3-material3-progressindicator-lines-946-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 946
    endLine: 980
    sha256: f686b8baefbbb862f4ab03f585dc2b2da1b6686665716172b99df2df875a412e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          90f at
                              CircularAnimationAdditionalRotationDuration using
                              MotionTokens.EasingEmphasizedDecelerateCubicBezier // 300ms
                          90f at CircularAnimationAdditionalRotationDelay // hold till 1500ms
                          180f at
                              CircularAnimationAdditionalRotationDuration +
                                  CircularAnimationAdditionalRotationDelay // 1800ms
                          180f at CircularAnimationAdditionalRotationDelay * 2 // hold till 3000ms
                          270f at
                              CircularAnimationAdditionalRotationDuration +
                                  CircularAnimationAdditionalRotationDelay * 2 // 3300ms
                          270f at CircularAnimationAdditionalRotationDelay * 3 // hold till 4500ms
                          360f at
                              CircularAnimationAdditionalRotationDuration +
                                  CircularAnimationAdditionalRotationDelay * 3 // 4800ms
                          360f at CircularAnimationProgressDuration // hold till 6000ms
                      }
              )

      /** An animation spec for indeterminate circular progress indicators progress motion. */
      internal val circularIndeterminateProgressAnimationSpec
          get() =
              infiniteRepeatable(
                  animation =
                      keyframes {
                          durationMillis = CircularAnimationProgressDuration // 6000ms
                          CircularIndeterminateMaxProgress at
                              CircularAnimationProgressDuration / 2 using
                              CircularProgressEasing // 3000ms
                          CircularIndeterminateMinProgress at CircularAnimationProgressDuration
                      }
              )

      /** An animation spec for indeterminate linear progress indicator first line head position. */
      internal val linearIndeterminateFirstLineHeadAnimationSpec
  - id: live-androidx-material3-material3-material3-progressindicator-lines-981-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt
    startLine: 981
    endLine: 1015
    sha256: 9c721fce0d1eff7a3622914cb775d542d05dde8f9e44c577bcd325a75d5bdc32
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          get() =
              infiniteRepeatable(
                  animation =
                      keyframes {
                          durationMillis = LinearAnimationDuration
                          0f at FirstLineHeadDelay using LinearIndeterminateProgressEasing
                          1f at FirstLineHeadDuration + FirstLineHeadDelay
                      }
              )

      /** An animation spec for indeterminate linear progress indicator first line tail position. */
      internal val linearIndeterminateFirstLineTailAnimationSpec
          get() =
              infiniteRepeatable(
                  animation =
                      keyframes {
                          durationMillis = LinearAnimationDuration
                          0f at FirstLineTailDelay using LinearIndeterminateProgressEasing
                          1f at FirstLineTailDuration + FirstLineTailDelay
                      }
              )

      /** An animation spec for indeterminate linear progress indicator second line head position. */
      internal val linearIndeterminateSecondLineHeadAnimationSpec
          get() =
              infiniteRepeatable(
                  animation =
                      keyframes {
                          durationMillis = LinearAnimationDuration
                          0f at SecondLineHeadDelay using LinearIndeterminateProgressEasing
                          1f at SecondLineHeadDuration + SecondLineHeadDelay
                      }
              )

      /** An animation spec for indeterminate linear progress indicator second line tail position. */
compose:
  id: live-androidx-material3-material3-material3-progressindicator
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-progressindicator-lines-1
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-1016
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 1016–1050)
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
        - androidx.compose.material3.CircularProgressIndicator
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-1016-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-1051
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 1051–1077)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-1051-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-106
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 106–140)
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-141
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 141–175)
      aliases:
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-176
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 176–210)
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-176-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-211
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 211–245)
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-211-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-246
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 246–280)
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-246-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-281
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-281-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-316
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 316–350)
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-316-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-351
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 351–385)
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-351-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-36
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 36–70)
      aliases:
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-386
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 386–420)
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-386-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-421
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 421–455)
      aliases:
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-421-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-456
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 456–490)
      aliases:
        - androidx.compose.material3.CircularProgressIndicator
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-456-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-491
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 491–525)
      aliases:
        - androidx.compose.material3.CircularProgressIndicator
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-491-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-526
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 526–560)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-526-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-561
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 561–595)
      aliases:
        - androidx.compose.material3.CircularProgressIndicator
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-561-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-596
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 596–630)
      aliases:
        - androidx.compose.material3.CircularProgressIndicator
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-596-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-631
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 631–665)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-631-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-666
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 666–700)
      aliases:
        - androidx.compose.material3.CircularProgressIndicator
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-666-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-701
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 701–735)
      aliases:
        - androidx.compose.material3.CircularProgressIndicator
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-701-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-71
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 71–105)
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-71-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-736
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 736–770)
      aliases:
        - androidx.compose.material3.CircularProgressIndicator
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-736-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-771
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 771–805)
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
        - androidx.compose.material3.CircularProgressIndicator
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-771-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-806
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 806–840)
      aliases:
        - androidx.compose.material3.ProgressIndicatorDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-806-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-841
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 841–875)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-841-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-876
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 876–910)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-876-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-911
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 911–945)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-911-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-946
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 946–980)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-946-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-progressindicator-lines-981
      title: androidx.compose.material3 ProgressIndicator.kt source (lines 981–1015)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-progressindicator-lines-981-source
      relatedIds: []
---

# androidx.compose.material3 ProgressIndicator.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt

## androidx.compose.material3 ProgressIndicator.kt source (lines 1–35)

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

import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.SpringSpec
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.keyframes
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.progressSemantics
import androidx.compose.material3.ProgressIndicatorDefaults.drawStopIndicator
import androidx.compose.material3.internal.IncreaseVerticalSemanticsBounds
import androidx.compose.material3.tokens.CircularProgressIndicatorTokens
import androidx.compose.material3.tokens.LinearProgressIndicatorTokens
import androidx.compose.material3.tokens.MotionTokens
import androidx.compose.material3.tokens.ProgressIndicatorTokens

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 1016–1050)

internal val linearIndeterminateSecondLineTailAnimationSpec
    get() =
        infiniteRepeatable(
            animation =
                keyframes {
                    durationMillis = LinearAnimationDuration
                    0f at SecondLineTailDelay using LinearIndeterminateProgressEasing
                    1f at SecondLineTailDuration + SecondLineTailDelay
                }
        )
// LinearProgressIndicator Material specs

// Width is given in the spec but not defined as a token.
/*@VisibleForTesting*/
internal val LinearIndicatorWidth
    get() = 240.dp

/*@VisibleForTesting*/
internal val LinearIndicatorHeight
    get() = LinearProgressIndicatorTokens.Height

internal val StopIndicatorTrailingSpace
    get() = 6.dp

// CircularProgressIndicator Material specs
// Diameter of the indicator circle
/*@VisibleForTesting*/
internal val CircularIndicatorDiameter
    get() = CircularProgressIndicatorTokens.Size

// Indeterminate linear indicator transition specs

// Total duration for one linear cycle
internal const val LinearAnimationDuration = 1750


Sources: [live-androidx-material3-material3-material3-progressindicator-lines-1016-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 1051–1077)

// Duration of the head and tail animations for both lines
internal const val FirstLineHeadDuration = 1000
internal const val FirstLineTailDuration = 1000
internal const val SecondLineHeadDuration = 850
internal const val SecondLineTailDuration = 850

// Delay before the start of the head and tail animations for both lines
internal const val FirstLineHeadDelay = 0
internal const val FirstLineTailDelay = 250
internal const val SecondLineHeadDelay = 650
internal const val SecondLineTailDelay = 900

internal val LinearIndeterminateProgressEasing = MotionTokens.EasingEmphasizedAccelerateCubicBezier

// Indeterminate circular indicator transition specs

// The indeterminate circular indicator easing constants for its motion
internal val CircularProgressEasing = MotionTokens.EasingStandardCubicBezier
internal const val CircularIndeterminateMinProgress = 0.1f
internal const val CircularIndeterminateMaxProgress = 0.87f

internal const val CircularAnimationProgressDuration = 6000
internal const val CircularAnimationAdditionalRotationDelay = 1500
internal const val CircularAnimationAdditionalRotationDuration = 300
internal const val CircularAdditionalRotationDegreesTarget = 360f
internal const val CircularGlobalRotationDegreesTarget = 1080f


Sources: [live-androidx-material3-material3-material3-progressindicator-lines-1051-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 106–140)

        trackColor,
        strokeCap,
        gapSize = ProgressIndicatorDefaults.LinearIndicatorTrackGapSize,
    )
}

/**
 * [Material Design determinate linear progress
 * indicator](https://m3.material.io/components/progress-indicators/overview)
 *
 * Progress indicators express an unspecified wait time or display the duration of a process.
 *
 * ![Linear progress indicator
 * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
 *
 * By default there is no animation between [progress] values. You can use
 * [ProgressIndicatorDefaults.ProgressAnimationSpec] as the default recommended
 * [androidx.compose.animation.core.AnimationSpec] when animating progress, such as in the following
 * example:
 *
 * @sample androidx.compose.material3.samples.LinearProgressIndicatorSample
 * @param progress the progress of this progress indicator, where 0.0 represents no progress and 1.0
 *   represents full progress. Values outside of this range are coerced into the range.
 * @param modifier the [Modifier] to be applied to this progress indicator
 * @param color color of this progress indicator
 * @param trackColor color of the track behind the indicator, visible when the progress has not
 *   reached the area of the overall indicator yet
 * @param strokeCap stroke cap to use for the ends of this progress indicator
 * @param gapSize size of the gap between the progress indicator and the track
 * @param drawStopIndicator lambda that will be called to draw the stop indicator. Note that a
 *   custom indicator implementation should also handle RTL layouts.
 */
@Composable
public fun LinearProgressIndicator(
    progress: () -> Float,

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 141–175)

    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.linearColor,
    trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
    strokeCap: StrokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
    gapSize: Dp = ProgressIndicatorDefaults.LinearIndicatorTrackGapSize,
    drawStopIndicator: DrawScope.() -> Unit = {
        drawStopIndicator(
            drawScope = this,
            stopSize = ProgressIndicatorDefaults.LinearTrackStopIndicatorSize,
            color = color,
            strokeCap = strokeCap,
        )
    },
) {
    val coercedProgress = { progress().fastCoerceIn(0f, 1f) }
    Canvas(
        modifier
            .then(IncreaseVerticalSemanticsBounds)
            .semantics(mergeDescendants = true) {
                // Check for NaN, as the ProgressBarRangeInfo will throw an exception.
                progressBarRangeInfo =
                    ProgressBarRangeInfo(coercedProgress().takeUnless { it.isNaN() } ?: 0f, 0f..1f)
            }
            .size(LinearIndicatorWidth, LinearIndicatorHeight)
    ) {
        val strokeWidth = size.height
        val adjustedGapSize =
            if (strokeCap == StrokeCap.Butt || size.height > size.width) {
                gapSize
            } else {
                gapSize + strokeWidth.toDp()
            }
        val gapSizeFraction = adjustedGapSize / size.width.toDp()
        val currentCoercedProgress = coercedProgress()


Sources: [live-androidx-material3-material3-material3-progressindicator-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 176–210)

        // track
        val trackStartFraction =
            currentCoercedProgress + min(currentCoercedProgress, gapSizeFraction)
        if (trackStartFraction <= 1f) {
            drawLinearIndicator(trackStartFraction, 1f, trackColor, strokeWidth, strokeCap)
        }
        // indicator
        drawLinearIndicator(0f, currentCoercedProgress, color, strokeWidth, strokeCap)
        // stop
        drawStopIndicator(this)
    }
}

/**
 * [Material Design indeterminate linear progress
 * indicator](https://m3.material.io/components/progress-indicators/overview)
 *
 * Progress indicators express an unspecified wait time or display the duration of a process.
 *
 * ![Linear progress indicator
 * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
 *
 * @sample androidx.compose.material3.samples.IndeterminateLinearProgressIndicatorSample
 * @param modifier the [Modifier] to be applied to this progress indicator
 * @param color color of this progress indicator
 * @param trackColor color of the track behind the indicator, visible when the progress has not
 *   reached the area of the overall indicator yet
 * @param strokeCap stroke cap to use for the ends of this progress indicator
 */
@Deprecated(
    message =
        "Use the overload that takes `gapSize`, see `" +
            "LegacyIndeterminateLinearProgressIndicatorSample` on how to restore the previous behavior",
    replaceWith =
        ReplaceWith("LinearProgressIndicator(modifier, color, trackColor, strokeCap, gapSize)"),

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 211–245)

    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun LinearProgressIndicator(
    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.linearColor,
    trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
    strokeCap: StrokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
) {
    LinearProgressIndicator(
        modifier,
        color,
        trackColor,
        strokeCap,
        gapSize = ProgressIndicatorDefaults.LinearIndicatorTrackGapSize,
    )
}

/**
 * [Material Design indeterminate linear progress
 * indicator](https://m3.material.io/components/progress-indicators/overview)
 *
 * Progress indicators express an unspecified wait time or display the duration of a process.
 *
 * ![Linear progress indicator
 * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
 *
 * @sample androidx.compose.material3.samples.IndeterminateLinearProgressIndicatorSample
 * @param modifier the [Modifier] to be applied to this progress indicator
 * @param color color of this progress indicator
 * @param trackColor color of the track behind the indicator, visible when the progress has not
 *   reached the area of the overall indicator yet
 * @param strokeCap stroke cap to use for the ends of this progress indicator
 * @param gapSize size of the gap between the progress indicator and the track
 */

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 246–280)

@Composable
public fun LinearProgressIndicator(
    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.linearColor,
    trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
    strokeCap: StrokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
    gapSize: Dp = ProgressIndicatorDefaults.LinearIndicatorTrackGapSize,
) {
    val infiniteTransition = rememberInfiniteTransition()
    val firstLineHead =
        infiniteTransition.animateFloat(
            initialValue = 0f,
            targetValue = 1f,
            animationSpec = linearIndeterminateFirstLineHeadAnimationSpec,
        )
    val firstLineTail =
        infiniteTransition.animateFloat(
            initialValue = 0f,
            targetValue = 1f,
            animationSpec = linearIndeterminateFirstLineTailAnimationSpec,
        )
    val secondLineHead =
        infiniteTransition.animateFloat(
            initialValue = 0f,
            targetValue = 1f,
            animationSpec = linearIndeterminateSecondLineHeadAnimationSpec,
        )
    val secondLineTail =
        infiniteTransition.animateFloat(
            initialValue = 0f,
            targetValue = 1f,
            animationSpec = linearIndeterminateSecondLineTailAnimationSpec,
        )
    Canvas(
        modifier

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 281–315)

            .then(IncreaseVerticalSemanticsBounds)
            .progressSemantics()
            .size(LinearIndicatorWidth, LinearIndicatorHeight)
    ) {
        val strokeWidth = size.height
        val adjustedGapSize =
            if (strokeCap == StrokeCap.Butt || size.height > size.width) {
                gapSize
            } else {
                gapSize + strokeWidth.toDp()
            }
        val gapSizeFraction = adjustedGapSize / size.width.toDp()

        // Track before line 1
        if (firstLineHead.value < 1f - gapSizeFraction) {
            val start = if (firstLineHead.value > 0) firstLineHead.value + gapSizeFraction else 0f
            drawLinearIndicator(start, 1f, trackColor, strokeWidth, strokeCap)
        }

        // Line 1
        if (firstLineHead.value - firstLineTail.value > 0) {
            drawLinearIndicator(
                firstLineHead.value,
                firstLineTail.value,
                color,
                strokeWidth,
                strokeCap,
            )
        }

        // Track between line 1 and line 2
        if (firstLineTail.value > gapSizeFraction) {
            val start = if (secondLineHead.value > 0) secondLineHead.value + gapSizeFraction else 0f
            val end = if (firstLineTail.value < 1f) firstLineTail.value - gapSizeFraction else 1f
            drawLinearIndicator(start, end, trackColor, strokeWidth, strokeCap)

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 316–350)

        }

        // Line 2
        if (secondLineHead.value - secondLineTail.value > 0) {
            drawLinearIndicator(
                secondLineHead.value,
                secondLineTail.value,
                color,
                strokeWidth,
                strokeCap,
            )
        }

        // Track after line 2
        if (secondLineTail.value > gapSizeFraction) {
            val end = if (secondLineTail.value < 1) secondLineTail.value - gapSizeFraction else 1f
            drawLinearIndicator(0f, end, trackColor, strokeWidth, strokeCap)
        }
    }
}

@Deprecated(
    message = "Use the overload that takes `progress` as a lambda",
    replaceWith =
        ReplaceWith(
            "LinearProgressIndicator(\n" +
                "progress = { progress },\n" +
                "modifier = modifier,\n" +
                "color = color,\n" +
                "trackColor = trackColor,\n" +
                "strokeCap = strokeCap,\n" +
                ")"
        ),
)
@Composable

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 351–385)

public fun LinearProgressIndicator(
    progress: Float,
    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.linearColor,
    trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
    strokeCap: StrokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
): Unit =
    LinearProgressIndicator(
        progress = { progress },
        modifier = modifier,
        color = color,
        trackColor = trackColor,
        strokeCap = strokeCap,
    )

@Suppress("DEPRECATION")
@Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
@Composable
public fun LinearProgressIndicator(
    progress: Float,
    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.linearColor,
    trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
): Unit =
    LinearProgressIndicator(
        progress,
        modifier,
        color,
        trackColor,
        strokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
    )

@Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
@Composable
public fun LinearProgressIndicator(

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 36–70)

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.rotate
import androidx.compose.ui.graphics.drawscope.scale
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.semantics.ProgressBarRangeInfo
import androidx.compose.ui.semantics.progressBarRangeInfo
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.util.fastCoerceAtMost
import androidx.compose.ui.util.fastCoerceIn
import kotlin.math.PI
import kotlin.math.abs
import kotlin.math.max
import kotlin.math.min

/**
 * [Material Design determinate linear progress
 * indicator](https://m3.material.io/components/progress-indicators/overview)
 *
 * Progress indicators express an unspecified wait time or display the duration of a process.
 *
 * ![Linear progress indicator
 * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
 *
 * By default there is no animation between [progress] values. You can use
 * [ProgressIndicatorDefaults.ProgressAnimationSpec] as the default recommended

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 386–420)

    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.linearColor,
    trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
): Unit =
    LinearProgressIndicator(
        modifier,
        color,
        trackColor,
        strokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
    )

private fun DrawScope.drawLinearIndicator(
    startFraction: Float,
    endFraction: Float,
    color: Color,
    strokeWidth: Float,
    strokeCap: StrokeCap,
) {
    val width = size.width
    val height = size.height
    // Start drawing from the vertical center of the stroke
    val yOffset = height / 2

    val isLtr = layoutDirection == LayoutDirection.Ltr
    val barStart = (if (isLtr) startFraction else 1f - endFraction) * width
    val barEnd = (if (isLtr) endFraction else 1f - startFraction) * width

    // if there isn't enough space to draw the stroke caps, fall back to StrokeCap.Butt
    if (strokeCap == StrokeCap.Butt || height > width) {
        // Progress line
        drawLine(color, Offset(barStart, yOffset), Offset(barEnd, yOffset), strokeWidth)
    } else {
        // need to adjust barStart and barEnd for the stroke caps
        val strokeCapOffset = strokeWidth / 2
        val adjustedBarStart = barStart.fastCoerceIn(strokeCapOffset, width - strokeCapOffset)

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 421–455)

        val adjustedBarEnd = barEnd.fastCoerceIn(strokeCapOffset, width - strokeCapOffset)

        if (abs(endFraction - startFraction) > 0) {
            // Progress line
            drawLine(
                color,
                Offset(adjustedBarStart, yOffset),
                Offset(adjustedBarEnd, yOffset),
                strokeWidth,
                strokeCap,
            )
        }
    }
}

/**
 * [Material Design determinate circular progress
 * indicator](https://m3.material.io/components/progress-indicators/overview)
 *
 * Progress indicators express an unspecified wait time or display the duration of a process.
 *
 * ![Circular progress indicator
 * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
 *
 * By default there is no animation between [progress] values. You can use
 * [ProgressIndicatorDefaults.ProgressAnimationSpec] as the default recommended
 * [androidx.compose.animation.core.AnimationSpec] when animating progress, such as in the following
 * example:
 *
 * @sample androidx.compose.material3.samples.CircularProgressIndicatorSample
 * @param progress the progress of this progress indicator, where 0.0 represents no progress and 1.0
 *   represents full progress. Values outside of this range are coerced into the range.
 * @param modifier the [Modifier] to be applied to this progress indicator
 * @param color color of this progress indicator
 * @param strokeWidth stroke width of this progress indicator

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 456–490)

 * @param trackColor color of the track behind the indicator, visible when the progress has not
 *   reached the area of the overall indicator yet
 * @param strokeCap stroke cap to use for the ends of this progress indicator
 */
@Deprecated(
    message =
        "Use the overload that takes `gapSize`, see " +
            "`LegacyCircularProgressIndicatorSample` on how to restore the previous behavior",
    replaceWith =
        ReplaceWith(
            "CircularProgressIndicator(progress, modifier, color, strokeWidth, trackColor, " +
                "strokeCap, gapSize)"
        ),
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun CircularProgressIndicator(
    progress: () -> Float,
    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.circularColor,
    strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,
    trackColor: Color = ProgressIndicatorDefaults.circularDeterminateTrackColor,
    strokeCap: StrokeCap = ProgressIndicatorDefaults.CircularDeterminateStrokeCap,
) {
    CircularProgressIndicator(
        progress,
        modifier,
        color,
        strokeWidth,
        trackColor,
        strokeCap,
        gapSize = ProgressIndicatorDefaults.CircularIndicatorTrackGapSize,
    )
}


Sources: [live-androidx-material3-material3-material3-progressindicator-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 491–525)

/**
 * [Material Design determinate circular progress
 * indicator](https://m3.material.io/components/progress-indicators/overview)
 *
 * Progress indicators express an unspecified wait time or display the duration of a process.
 *
 * ![Circular progress indicator
 * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
 *
 * By default there is no animation between [progress] values. You can use
 * [ProgressIndicatorDefaults.ProgressAnimationSpec] as the default recommended
 * [androidx.compose.animation.core.AnimationSpec] when animating progress, such as in the following
 * example:
 *
 * @sample androidx.compose.material3.samples.CircularProgressIndicatorSample
 * @param progress the progress of this progress indicator, where 0.0 represents no progress and 1.0
 *   represents full progress. Values outside of this range are coerced into the range.
 * @param modifier the [Modifier] to be applied to this progress indicator
 * @param color color of this progress indicator
 * @param strokeWidth stroke width of this progress indicator
 * @param trackColor color of the track behind the indicator, visible when the progress has not
 *   reached the area of the overall indicator yet
 * @param strokeCap stroke cap to use for the ends of this progress indicator
 * @param gapSize size of the gap between the progress indicator and the track
 */
@Composable
public fun CircularProgressIndicator(
    progress: () -> Float,
    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.circularColor,
    strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,
    trackColor: Color = ProgressIndicatorDefaults.circularDeterminateTrackColor,
    strokeCap: StrokeCap = ProgressIndicatorDefaults.CircularDeterminateStrokeCap,
    gapSize: Dp = ProgressIndicatorDefaults.CircularIndicatorTrackGapSize,
) {

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 526–560)

    val coercedProgress = { progress().fastCoerceIn(0f, 1f) }
    val stroke = with(LocalDensity.current) { Stroke(width = strokeWidth.toPx(), cap = strokeCap) }
    Canvas(
        modifier
            .semantics(mergeDescendants = true) {
                // Check for NaN, as the ProgressBarRangeInfo will throw an exception.
                progressBarRangeInfo =
                    ProgressBarRangeInfo(coercedProgress().takeUnless { it.isNaN() } ?: 0f, 0f..1f)
            }
            .size(CircularIndicatorDiameter)
    ) {
        // Start at 12 o'clock
        val startAngle = 270f
        val sweep = coercedProgress() * 360f
        val adjustedGapSize =
            if (strokeCap == StrokeCap.Butt || size.height > size.width) {
                gapSize
            } else {
                gapSize + strokeWidth
            }
        val gapSizeSweep = (adjustedGapSize.value / (PI * size.width.toDp().value).toFloat()) * 360f

        drawCircularIndicator(
            startAngle + sweep + min(sweep, gapSizeSweep),
            360f - sweep - min(sweep, gapSizeSweep) * 2,
            trackColor,
            stroke,
        )
        drawDeterminateCircularIndicator(startAngle, sweep, color, stroke)
    }
}

/**
 * [Material Design determinate circular progress
 * indicator](https://m3.material.io/components/progress-indicators/overview)

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 561–595)

 *
 * Progress indicators express an unspecified wait time or display the duration of a process.
 *
 * ![Circular progress indicator
 * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
 *
 * @sample androidx.compose.material3.samples.IndeterminateCircularProgressIndicatorSample
 * @param modifier the [Modifier] to be applied to this progress indicator
 * @param color color of this progress indicator
 * @param strokeWidth stroke width of this progress indicator
 * @param trackColor color of the track behind the indicator, visible when the progress has not
 *   reached the area of the overall indicator yet
 * @param strokeCap stroke cap to use for the ends of this progress indicator
 */
@Deprecated(
    message = "Use the overload that takes `gapSize`",
    replaceWith =
        ReplaceWith(
            "CircularProgressIndicator(modifier, color, strokeWidth, trackColor, strokeCap, " +
                "gapSize)"
        ),
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun CircularProgressIndicator(
    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.circularColor,
    strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,
    trackColor: Color = ProgressIndicatorDefaults.circularIndeterminateTrackColor,
    strokeCap: StrokeCap = ProgressIndicatorDefaults.CircularIndeterminateStrokeCap,
): Unit =
    CircularProgressIndicator(
        modifier = modifier,
        color = color,
        strokeWidth = strokeWidth,

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 596–630)

        trackColor = trackColor,
        strokeCap = strokeCap,
        gapSize = ProgressIndicatorDefaults.CircularIndicatorTrackGapSize,
    )

/**
 * [Material Design determinate circular progress
 * indicator](https://m3.material.io/components/progress-indicators/overview)
 *
 * Progress indicators express an unspecified wait time or display the duration of a process.
 *
 * ![Circular progress indicator
 * image](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flqdiyyvh-1P-progress-indicator-configurations.png?alt=media)
 *
 * @sample androidx.compose.material3.samples.IndeterminateCircularProgressIndicatorSample
 * @param modifier the [Modifier] to be applied to this progress indicator
 * @param color color of this progress indicator
 * @param strokeWidth stroke width of this progress indicator
 * @param trackColor color of the track behind the indicator, visible when the progress has not
 *   reached the area of the overall indicator yet
 * @param strokeCap stroke cap to use for the ends of this progress indicator
 * @param gapSize size of the gap between the progress indicator and the track
 */
@Composable
public fun CircularProgressIndicator(
    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.circularColor,
    strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,
    trackColor: Color = ProgressIndicatorDefaults.circularIndeterminateTrackColor,
    strokeCap: StrokeCap = ProgressIndicatorDefaults.CircularIndeterminateStrokeCap,
    gapSize: Dp = ProgressIndicatorDefaults.CircularIndicatorTrackGapSize,
) {
    val stroke = with(LocalDensity.current) { Stroke(width = strokeWidth.toPx(), cap = strokeCap) }

    val infiniteTransition = rememberInfiniteTransition()

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 631–665)

    // A global rotation that does a 360 degrees rotation in 6 seconds.
    val globalRotation =
        infiniteTransition.animateFloat(
            initialValue = 0f,
            targetValue = CircularGlobalRotationDegreesTarget,
            animationSpec = circularIndeterminateGlobalRotationAnimationSpec,
        )

    // An additional rotation that moves by 90 degrees in 500ms and then rest for 1 second.
    val additionalRotation =
        infiniteTransition.animateFloat(
            initialValue = 0f,
            targetValue = CircularAdditionalRotationDegreesTarget,
            animationSpec = circularIndeterminateRotationAnimationSpec,
        )

    // Indicator progress animation that will be changing the progress up and down as the indicator
    // rotates.
    val progressAnimation =
        infiniteTransition.animateFloat(
            initialValue = CircularIndeterminateMinProgress,
            targetValue = CircularIndeterminateMaxProgress,
            animationSpec = circularIndeterminateProgressAnimationSpec,
        )

    Canvas(modifier.progressSemantics().size(CircularIndicatorDiameter)) {
        val sweep = progressAnimation.value * 360f
        val adjustedGapSize =
            if (strokeCap == StrokeCap.Butt || size.height > size.width) {
                gapSize
            } else {
                gapSize + strokeWidth
            }
        val gapSizeSweep = (adjustedGapSize.value / (PI * size.width.toDp().value).toFloat()) * 360f


Sources: [live-androidx-material3-material3-material3-progressindicator-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 666–700)

        rotate(globalRotation.value + additionalRotation.value) {
            drawCircularIndicator(
                sweep + min(sweep, gapSizeSweep),
                360f - sweep - min(sweep, gapSizeSweep) * 2,
                trackColor,
                stroke,
            )
            drawDeterminateCircularIndicator(startAngle = 0f, sweep, color, stroke)
        }
    }
}

@Suppress("DEPRECATION")
@Deprecated(
    message = "Use the overload that takes `progress` as a lambda",
    replaceWith =
        ReplaceWith(
            "CircularProgressIndicator(\n" +
                "progress = { progress },\n" +
                "modifier = modifier,\n" +
                "color = color,\n" +
                "strokeWidth = strokeWidth,\n" +
                "trackColor = trackColor,\n" +
                "strokeCap = strokeCap,\n" +
                ")"
        ),
)
@Composable
public fun CircularProgressIndicator(
    progress: Float,
    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.circularColor,
    strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,
    trackColor: Color = ProgressIndicatorDefaults.circularTrackColor,
    strokeCap: StrokeCap = ProgressIndicatorDefaults.CircularDeterminateStrokeCap,

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 701–735)

): Unit =
    CircularProgressIndicator(
        progress = { progress },
        modifier = modifier,
        color = color,
        strokeWidth = strokeWidth,
        trackColor = trackColor,
        strokeCap = strokeCap,
    )

@Suppress("DEPRECATION")
@Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
@Composable
public fun CircularProgressIndicator(
    progress: Float,
    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.circularColor,
    strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,
): Unit =
    CircularProgressIndicator(
        progress,
        modifier,
        color,
        strokeWidth,
        trackColor = ProgressIndicatorDefaults.circularTrackColor,
        strokeCap = ProgressIndicatorDefaults.CircularDeterminateStrokeCap,
    )

@Suppress("DEPRECATION")
@Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
@Composable
public fun CircularProgressIndicator(
    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.circularColor,
    strokeWidth: Dp = ProgressIndicatorDefaults.CircularStrokeWidth,

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 71–105)

 * [androidx.compose.animation.core.AnimationSpec] when animating progress, such as in the following
 * example:
 *
 * @sample androidx.compose.material3.samples.LinearProgressIndicatorSample
 * @param progress the progress of this progress indicator, where 0.0 represents no progress and 1.0
 *   represents full progress. Values outside of this range are coerced into the range.
 * @param modifier the [Modifier] to be applied to this progress indicator
 * @param color color of this progress indicator
 * @param trackColor color of the track behind the indicator, visible when the progress has not
 *   reached the area of the overall indicator yet
 * @param strokeCap stroke cap to use for the ends of this progress indicator
 */
@Deprecated(
    message =
        "Use the overload that takes `gapSize` and `drawStopIndicator`, see " +
            "`LegacyLinearProgressIndicatorSample` on how to restore the previous behavior",
    replaceWith =
        ReplaceWith(
            "LinearProgressIndicator(progress, modifier, color, trackColor, strokeCap, " +
                "gapSize, drawStopIndicator)"
        ),
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun LinearProgressIndicator(
    progress: () -> Float,
    modifier: Modifier = Modifier,
    color: Color = ProgressIndicatorDefaults.linearColor,
    trackColor: Color = ProgressIndicatorDefaults.linearTrackColor,
    strokeCap: StrokeCap = ProgressIndicatorDefaults.LinearStrokeCap,
) {
    LinearProgressIndicator(
        progress,
        modifier,
        color,

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 736–770)

): Unit =
    CircularProgressIndicator(
        modifier,
        color,
        strokeWidth,
        trackColor = ProgressIndicatorDefaults.circularTrackColor,
        strokeCap = ProgressIndicatorDefaults.CircularIndeterminateStrokeCap,
    )

private fun DrawScope.drawCircularIndicator(
    startAngle: Float,
    sweep: Float,
    color: Color,
    stroke: Stroke,
) {
    // To draw this circle we need a rect with edges that line up with the midpoint of the stroke.
    // To do this we need to remove half the stroke width from the total diameter for both sides.
    val diameterOffset = stroke.width / 2
    val arcDimen = size.width - 2 * diameterOffset
    drawArc(
        color = color,
        startAngle = startAngle,
        sweepAngle = sweep,
        useCenter = false,
        topLeft = Offset(diameterOffset, diameterOffset),
        size = Size(arcDimen, arcDimen),
        style = stroke,
    )
}

private fun DrawScope.drawCircularIndicatorTrack(color: Color, stroke: Stroke) =
    drawCircularIndicator(0f, 360f, color, stroke)

private fun DrawScope.drawDeterminateCircularIndicator(
    startAngle: Float,

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 771–805)

    sweep: Float,
    color: Color,
    stroke: Stroke,
) = drawCircularIndicator(startAngle, sweep, color, stroke)

private fun DrawScope.drawIndeterminateCircularIndicator(
    startAngle: Float,
    strokeWidth: Dp,
    sweep: Float,
    color: Color,
    stroke: Stroke,
) {
    val strokeCapOffset =
        if (stroke.cap == StrokeCap.Butt) {
            0f
        } else {
            // Length of arc is angle * radius
            // Angle (radians) is length / radius
            // The length should be the same as the stroke width for calculating the min angle
            (180.0 / PI).toFloat() * (strokeWidth / (CircularIndicatorDiameter / 2)) / 2f
        }

    // Adding a stroke cap draws half the stroke width behind the start point, so we want to
    // move it forward by that amount so the arc visually appears in the correct place
    val adjustedStartAngle = startAngle + strokeCapOffset

    // When the start and end angles are in the same place, we still want to draw a small sweep, so
    // the stroke caps get added on both ends and we draw the correct minimum length arc
    val adjustedSweep = max(sweep, 0.1f)

    drawCircularIndicator(adjustedStartAngle, adjustedSweep, color, stroke)
}

/**
 * Contains the default values used for [LinearProgressIndicator] and [CircularProgressIndicator].

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 806–840)

 */
public object ProgressIndicatorDefaults {
    /** Default color for a linear progress indicator. */
    public val linearColor: Color
        @Composable get() = ProgressIndicatorTokens.ActiveIndicatorColor.value

    /** Default color for a circular progress indicator. */
    public val circularColor: Color
        @Composable get() = ProgressIndicatorTokens.ActiveIndicatorColor.value

    /** Default track color for a linear progress indicator. */
    public val linearTrackColor: Color
        @Composable get() = ProgressIndicatorTokens.TrackColor.value

    /** Default track color for a circular progress indicator. */
    @Deprecated(
        "Renamed to circularDeterminateTrackColor or circularIndeterminateTrackColor",
        ReplaceWith("ProgressIndicatorDefaults.circularIndeterminateTrackColor"),
        DeprecationLevel.WARNING,
    )
    public val circularTrackColor: Color
        @Composable get() = Color.Transparent

    /** Default track color for a circular determinate progress indicator. */
    public val circularDeterminateTrackColor: Color
        @Composable get() = ProgressIndicatorTokens.TrackColor.value

    /** Default track color for a circular indeterminate progress indicator. */
    public val circularIndeterminateTrackColor: Color
        @Composable get() = Color.Transparent

    /** Default stroke width for a circular progress indicator. */
    public val CircularStrokeWidth: Dp = CircularProgressIndicatorTokens.TrackThickness

    /** Default stroke cap for a linear progress indicator. */

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 841–875)

    public val LinearStrokeCap: StrokeCap = StrokeCap.Round

    /** Default stroke cap for a determinate circular progress indicator. */
    public val CircularDeterminateStrokeCap: StrokeCap = StrokeCap.Round

    /** Default stroke cap for an indeterminate circular progress indicator. */
    public val CircularIndeterminateStrokeCap: StrokeCap = StrokeCap.Round

    /** Default track stop indicator size for a linear progress indicator. */
    public val LinearTrackStopIndicatorSize: Dp = LinearProgressIndicatorTokens.StopSize

    /** Default indicator track gap size for a linear progress indicator. */
    public val LinearIndicatorTrackGapSize: Dp = LinearProgressIndicatorTokens.TrackActiveSpace

    /** Default indicator track gap size for a circular progress indicator. */
    public val CircularIndicatorTrackGapSize: Dp = CircularProgressIndicatorTokens.TrackActiveSpace

    /**
     * The default [androidx.compose.animation.core.AnimationSpec] that should be used when
     * animating between progress in a determinate progress indicator.
     */
    public val ProgressAnimationSpec: SpringSpec<Float> =
        SpringSpec(
            dampingRatio = Spring.DampingRatioNoBouncy,
            stiffness = Spring.StiffnessVeryLow,
            // The default threshold is 0.01, or 1% of the overall progress range, which is quite
            // large and noticeable. We purposefully choose a smaller threshold.
            visibilityThreshold = 1 / 1000f,
        )

    /**
     * Draws the stop indicator at the end of the track.
     *
     * @param drawScope the [DrawScope]
     * @param stopSize size of this stop indicator, it cannot be bigger than the track's height

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 876–910)

     * @param color color of this stop indicator
     * @param strokeCap stroke cap to use for the ends of this stop indicator
     */
    public fun drawStopIndicator(
        drawScope: DrawScope,
        stopSize: Dp,
        color: Color,
        strokeCap: StrokeCap,
    ) {

        // Draws a circle or a square indicator according to the provided Cap.
        fun DrawScope.drawIndicator(adjustedStopSize: Float, stopOffset: Float) {
            if (strokeCap == StrokeCap.Round) {
                drawCircle(
                    color = color,
                    radius = adjustedStopSize / 2f,
                    center =
                        Offset(
                            x = size.width - (adjustedStopSize / 2f) - stopOffset,
                            y = size.height / 2f,
                        ),
                )
            } else {
                drawRect(
                    color = color,
                    topLeft =
                        Offset(
                            x = size.width - adjustedStopSize - stopOffset,
                            y = (size.height - adjustedStopSize) / 2f,
                        ),
                    size = Size(width = adjustedStopSize, height = adjustedStopSize),
                )
            }
        }


Sources: [live-androidx-material3-material3-material3-progressindicator-lines-876-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 911–945)

        with(drawScope) {
            val adjustedStopSize =
                min(stopSize.toPx(), size.height) // Stop can't be bigger than track
            // The limit to prevent excessive padding when dealing with large progress height.
            // TODO b/401511176 - Consider adding a new token.
            val maxStopOffset = StopIndicatorTrailingSpace.toPx()
            // Offset from end.
            val stopOffset = ((size.height - adjustedStopSize) / 2).fastCoerceAtMost(maxStopOffset)
            if (layoutDirection == LayoutDirection.Rtl) {
                // Flip the direction by scaling with -1 on the X axis.
                scale(scaleX = -1f, scaleY = 1f) { drawIndicator(adjustedStopSize, stopOffset) }
            } else {
                drawIndicator(adjustedStopSize, stopOffset)
            }
        }
    }
}

/** A global animation spec for indeterminate circular progress indicator. */
internal val circularIndeterminateGlobalRotationAnimationSpec
    get() =
        infiniteRepeatable<Float>(
            animation = tween(CircularAnimationProgressDuration, easing = LinearEasing)
        )

/**
 * An animation spec for indeterminate circular progress indicators that infinitely rotates a 360
 * degrees.
 */
internal val circularIndeterminateRotationAnimationSpec
    get() =
        infiniteRepeatable(
            animation =
                keyframes {
                    durationMillis = CircularAnimationProgressDuration // 6000ms

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-911-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 946–980)

                    90f at
                        CircularAnimationAdditionalRotationDuration using
                        MotionTokens.EasingEmphasizedDecelerateCubicBezier // 300ms
                    90f at CircularAnimationAdditionalRotationDelay // hold till 1500ms
                    180f at
                        CircularAnimationAdditionalRotationDuration +
                            CircularAnimationAdditionalRotationDelay // 1800ms
                    180f at CircularAnimationAdditionalRotationDelay * 2 // hold till 3000ms
                    270f at
                        CircularAnimationAdditionalRotationDuration +
                            CircularAnimationAdditionalRotationDelay * 2 // 3300ms
                    270f at CircularAnimationAdditionalRotationDelay * 3 // hold till 4500ms
                    360f at
                        CircularAnimationAdditionalRotationDuration +
                            CircularAnimationAdditionalRotationDelay * 3 // 4800ms
                    360f at CircularAnimationProgressDuration // hold till 6000ms
                }
        )

/** An animation spec for indeterminate circular progress indicators progress motion. */
internal val circularIndeterminateProgressAnimationSpec
    get() =
        infiniteRepeatable(
            animation =
                keyframes {
                    durationMillis = CircularAnimationProgressDuration // 6000ms
                    CircularIndeterminateMaxProgress at
                        CircularAnimationProgressDuration / 2 using
                        CircularProgressEasing // 3000ms
                    CircularIndeterminateMinProgress at CircularAnimationProgressDuration
                }
        )

/** An animation spec for indeterminate linear progress indicator first line head position. */
internal val linearIndeterminateFirstLineHeadAnimationSpec

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-946-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)

## androidx.compose.material3 ProgressIndicator.kt source (lines 981–1015)

    get() =
        infiniteRepeatable(
            animation =
                keyframes {
                    durationMillis = LinearAnimationDuration
                    0f at FirstLineHeadDelay using LinearIndeterminateProgressEasing
                    1f at FirstLineHeadDuration + FirstLineHeadDelay
                }
        )

/** An animation spec for indeterminate linear progress indicator first line tail position. */
internal val linearIndeterminateFirstLineTailAnimationSpec
    get() =
        infiniteRepeatable(
            animation =
                keyframes {
                    durationMillis = LinearAnimationDuration
                    0f at FirstLineTailDelay using LinearIndeterminateProgressEasing
                    1f at FirstLineTailDuration + FirstLineTailDelay
                }
        )

/** An animation spec for indeterminate linear progress indicator second line head position. */
internal val linearIndeterminateSecondLineHeadAnimationSpec
    get() =
        infiniteRepeatable(
            animation =
                keyframes {
                    durationMillis = LinearAnimationDuration
                    0f at SecondLineHeadDelay using LinearIndeterminateProgressEasing
                    1f at SecondLineHeadDuration + SecondLineHeadDelay
                }
        )

/** An animation spec for indeterminate linear progress indicator second line tail position. */

Sources: [live-androidx-material3-material3-material3-progressindicator-lines-981-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ProgressIndicator.kt)
