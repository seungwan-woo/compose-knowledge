---
type: reference
title: MonotonicFrameClock source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-runtime-monotonic-frame-clock-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt
    startLine: 1
    endLine: 35
    sha256: cc268139bf15a24a7d42636781effcb830780cfc0045c6d48081ab2936e370ad
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

      package androidx.compose.runtime

      import androidx.compose.runtime.internal.JvmDefaultWithCompatibility
      import kotlin.coroutines.CoroutineContext
      import kotlin.coroutines.coroutineContext

      /**
       * Provides a time source for display frames and the ability to perform an action on the next frame.
       * This may be used for matching timing with the refresh rate of a display or otherwise
       * synchronizing work with a desired frame rate.
       */
      @JvmDefaultWithCompatibility
      public interface MonotonicFrameClock : CoroutineContext.Element {
          /**
           * Suspends until a new frame is requested, immediately invokes [onFrame] with the frame time in
           * nanoseconds in the calling context of frame dispatch, then resumes with the result from
           * [onFrame].
           *
           * `frameTimeNanos` should be used when calculating animation time deltas from frame to frame as
  - id: live-androidx-runtime-monotonic-frame-clock-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt
    startLine: 106
    endLine: 131
    sha256: 06863769d09f2b2894c042ad072f2bc0d32464fc2e24db8c18c0f367bce53f48
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      
      /**
       * Returns the [MonotonicFrameClock] for this [CoroutineContext] or throws [IllegalStateException]
       * if one is not present.
       */
      @ExperimentalComposeApi
      public val CoroutineContext.monotonicFrameClock: MonotonicFrameClock
          get() =
              this[MonotonicFrameClock]
                  ?: error(
                      "A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply " +
                          "an appropriate MonotonicFrameClock using withContext."
                  )

      /**
       * The [MonotonicFrameClock] used by [withFrameNanos] and [withFrameMillis] if one is not present in
       * the calling [kotlin.coroutines.CoroutineContext].
       *
       * This value is no longer used by compose runtime.
       */
      @Deprecated(
          "MonotonicFrameClocks are not globally applicable across platforms. " +
              "Use an appropriate local clock."
      )
      public expect val DefaultMonotonicFrameClock: MonotonicFrameClock
  - id: live-androidx-runtime-monotonic-frame-clock-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt
    startLine: 36
    endLine: 70
    sha256: ebe12f87fb1a6bdbd3e9ed5cbb3c3037293c744da5acd866b6ed110b176df3b8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * it may be normalized to the target time for the frame, not necessarily a direct, "now" value.
           *
           * The time base of the value provided by [withFrameNanos] is implementation defined. Time
           * values provided are strictly monotonically increasing; after a call to [withFrameNanos]
           * completes it must not provide the same value again for a subsequent call.
           */
          public suspend fun <R> withFrameNanos(onFrame: (frameTimeNanos: Long) -> R): R

          override val key: CoroutineContext.Key<*>
              get() = Key

          public companion object Key : CoroutineContext.Key<MonotonicFrameClock>
      }

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
       */
      @Suppress("UnnecessaryLambdaCreation")
      public suspend inline fun <R> MonotonicFrameClock.withFrameMillis(
          crossinline onFrame: (frameTimeMillis: Long) -> R
      ): R = withFrameNanos { onFrame(it / 1_000_000L) }

      /**
       * Suspends until a new frame is requested, immediately invokes [onFrame] with the frame time in
       * nanoseconds in the calling context of frame dispatch, then resumes with the result from
       * [onFrame].
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
  id: live-androidx-runtime-monotonic-frame-clock
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.MonotonicFrameClock
  sections:
    - id: live-androidx-runtime-monotonic-frame-clock-lines-1
      title: MonotonicFrameClock source (lines 1–35)
      aliases:
        - androidx.compose.runtime.MonotonicFrameClock
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-monotonic-frame-clock-lines-1-source
      relatedIds: []
    - id: live-androidx-runtime-monotonic-frame-clock-lines-106
      title: MonotonicFrameClock source (lines 106–131)
      aliases:
        - androidx.compose.runtime.MonotonicFrameClock
        - androidx.compose.runtime.withFrameNanos
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-monotonic-frame-clock-lines-106-source
      relatedIds: []
    - id: live-androidx-runtime-monotonic-frame-clock-lines-36
      title: MonotonicFrameClock source (lines 36–70)
      aliases:
        - androidx.compose.runtime.MonotonicFrameClock
        - androidx.compose.runtime.withFrameNanos
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-monotonic-frame-clock-lines-36-source
      relatedIds: []
    - id: live-androidx-runtime-monotonic-frame-clock-lines-71
      title: MonotonicFrameClock source (lines 71–105)
      aliases:
        - androidx.compose.runtime.MonotonicFrameClock
        - androidx.compose.runtime.withFrameNanos
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-monotonic-frame-clock-lines-71-source
      relatedIds: []
---

# MonotonicFrameClock source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt

## MonotonicFrameClock source (lines 1–35)

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

package androidx.compose.runtime

import androidx.compose.runtime.internal.JvmDefaultWithCompatibility
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.coroutineContext

/**
 * Provides a time source for display frames and the ability to perform an action on the next frame.
 * This may be used for matching timing with the refresh rate of a display or otherwise
 * synchronizing work with a desired frame rate.
 */
@JvmDefaultWithCompatibility
public interface MonotonicFrameClock : CoroutineContext.Element {
    /**
     * Suspends until a new frame is requested, immediately invokes [onFrame] with the frame time in
     * nanoseconds in the calling context of frame dispatch, then resumes with the result from
     * [onFrame].
     *
     * `frameTimeNanos` should be used when calculating animation time deltas from frame to frame as

Sources: [live-androidx-runtime-monotonic-frame-clock-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt)

## MonotonicFrameClock source (lines 106–131)


/**
 * Returns the [MonotonicFrameClock] for this [CoroutineContext] or throws [IllegalStateException]
 * if one is not present.
 */
@ExperimentalComposeApi
public val CoroutineContext.monotonicFrameClock: MonotonicFrameClock
    get() =
        this[MonotonicFrameClock]
            ?: error(
                "A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply " +
                    "an appropriate MonotonicFrameClock using withContext."
            )

/**
 * The [MonotonicFrameClock] used by [withFrameNanos] and [withFrameMillis] if one is not present in
 * the calling [kotlin.coroutines.CoroutineContext].
 *
 * This value is no longer used by compose runtime.
 */
@Deprecated(
    "MonotonicFrameClocks are not globally applicable across platforms. " +
        "Use an appropriate local clock."
)
public expect val DefaultMonotonicFrameClock: MonotonicFrameClock


Sources: [live-androidx-runtime-monotonic-frame-clock-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt)

## MonotonicFrameClock source (lines 36–70)

     * it may be normalized to the target time for the frame, not necessarily a direct, "now" value.
     *
     * The time base of the value provided by [withFrameNanos] is implementation defined. Time
     * values provided are strictly monotonically increasing; after a call to [withFrameNanos]
     * completes it must not provide the same value again for a subsequent call.
     */
    public suspend fun <R> withFrameNanos(onFrame: (frameTimeNanos: Long) -> R): R

    override val key: CoroutineContext.Key<*>
        get() = Key

    public companion object Key : CoroutineContext.Key<MonotonicFrameClock>
}

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
 */
@Suppress("UnnecessaryLambdaCreation")
public suspend inline fun <R> MonotonicFrameClock.withFrameMillis(
    crossinline onFrame: (frameTimeMillis: Long) -> R
): R = withFrameNanos { onFrame(it / 1_000_000L) }

/**
 * Suspends until a new frame is requested, immediately invokes [onFrame] with the frame time in
 * nanoseconds in the calling context of frame dispatch, then resumes with the result from
 * [onFrame].

Sources: [live-androidx-runtime-monotonic-frame-clock-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt)

## MonotonicFrameClock source (lines 71–105)

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

Sources: [live-androidx-runtime-monotonic-frame-clock-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt)
