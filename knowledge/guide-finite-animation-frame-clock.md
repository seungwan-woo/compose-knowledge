---
type: reference
title: "Guidance: Supply the frame clock used by finite animation dispatch"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-androidx-animation-animation-core-suspend-animation-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    startLine: 281
    endLine: 315
    sha256: def4fe122e6f8ef73a753bf457aef88e064bcbae541a067b38cf1778155f8641
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                      lateInitScope!!.doAnimationFrameWithScale(it, durationScale, animation, this, block)
                  }
              }
              // End of animation
          } catch (e: CancellationException) {
              lateInitScope?.isRunning = false
              if (lateInitScope?.lastFrameTimeNanos == lastFrameTimeNanos) {
                  // There hasn't been another animation.
                  isRunning = false
              }
              throw e
          }
      }

      /**
       * Calls the [finite][withFrameNanos] or [infinite][withInfiniteAnimationFrameNanos] variant of
       * `withFrameNanos`, depending on the value of [Animation.isInfinite].
       */
      private suspend fun <R, T, V : AnimationVector> Animation<T, V>.callWithFrameNanos(
          onFrame: (frameTimeNanos: Long) -> R
      ): R {
          return if (isInfinite) {
              withInfiniteAnimationFrameNanos(onFrame)
          } else {
              withFrameNanos { onFrame.invoke(it / AnimationDebugDurationScale) }
          }
      }

      internal val CoroutineContext.durationScale: Float
          get() {
              val scale = this[MotionDurationScale]?.scaleFactor ?: 1f
              checkPrecondition(scale >= 0f) { "negative scale factor" }
              return scale
          }
  - id: live-androidx-runtime-monotonic-frame-clock-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt
    startLine: 71
    endLine: 105
    sha256: e371aa0f6a594cce577a10860d6f2333ed2606c320708480be389d593f325919
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * `frameTimeNanos` should be used when calculating animation time deltas from frame to frame as it
       * may be normalized to the target time for the frame, not necessarily a direct, "now" value.
       *
       * The time base of the value provided by [withFrameNanos] is implementation defined. Time values
       * provided are strictly monotonically increasing; after a call to [withFrameNanos] completes it
       * must not provide the same value again for a subsequent call.
       *
       * This function will invoke [MonotonicFrameClock.withFrameNanos] using the calling
       * [CoroutineContext]'s [MonotonicFrameClock] and will throw an [IllegalStateException] if one is
       * not present in the [CoroutineContext].
       */
      @OptIn(ExperimentalComposeApi::class)
      public suspend fun <R> withFrameNanos(onFrame: (frameTimeNanos: Long) -> R): R =
          coroutineContext.monotonicFrameClock.withFrameNanos(onFrame)

      /**
       * Suspends until a new frame is requested, immediately invokes [onFrame] with the frame time in
       * milliseconds in the calling context of frame dispatch, then resumes with the result from
       * [onFrame].
       *
       * `frameTimeMillis` should be used when calculating animation time deltas from frame to frame as it
       * may be normalized to the target time for the frame, not necessarily a direct, "now" value.
       *
       * The time base of the value provided by [MonotonicFrameClock.withFrameMillis] is implementation
       * defined. Time values provided are monotonically increasing; after a call to [withFrameMillis]
       * completes it must not provide a smaller value for a subsequent call.
       *
       * This function will invoke [MonotonicFrameClock.withFrameNanos] using the calling
       * [CoroutineContext]'s [MonotonicFrameClock] and will throw an [IllegalStateException] if one is
       * not present in the [CoroutineContext].
       */
      @OptIn(ExperimentalComposeApi::class)
      public suspend fun <R> withFrameMillis(onFrame: (frameTimeMillis: Long) -> R): R =
          coroutineContext.monotonicFrameClock.withFrameMillis(onFrame)
compose:
  id: guide-finite-animation-frame-clock
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core
  sections:
    - id: guide-finite-animation-frame-clock
      title: "Guidance: Supply the frame clock used by finite animation dispatch"
      aliases:
        - androidx.compose.runtime.withFrameNanos
        - androidx.compose.runtime.MonotonicFrameClock
        - androidx.compose.animation.core.Animatable
        - animation missing MonotonicFrameClock
        - finite animation caller context
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-suspend-animation-lines-281-source
        - live-androidx-runtime-monotonic-frame-clock-lines-71-source
      relatedIds:
        - live-androidx-animation-animation-core-suspend-animation-lines-281
        - live-androidx-runtime-monotonic-frame-clock-lines-71
---

# Guidance: Supply the frame clock used by finite animation dispatch

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Supply the frame clock used by finite animation dispatch

Guidance: Finite animation frame dispatch calls withFrameNanos. That function uses the calling CoroutineContext's MonotonicFrameClock and throws IllegalStateException if the clock is absent. Keep frame-driven UI animation in a context that supplies the appropriate local frame clock. Limitation: a dispatcher selects where work runs; it does not by itself supply this frame clock. This is a requirement of the frame-dispatch path, not of every suspend function.

Sources: [live-androidx-animation-animation-core-suspend-animation-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt), [live-androidx-runtime-monotonic-frame-clock-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt)
