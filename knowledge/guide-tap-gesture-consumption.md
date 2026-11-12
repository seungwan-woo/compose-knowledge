---
type: reference
title: "Guidance: Account for tap gesture consumption and cancellation"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 71
    endLine: 105
    sha256: a645ec6211a84869f2ac02e9871699103aac4b74956d51f02ab5ca8b8707b960
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * the [PressGestureScope.tryAwaitRelease] and [PressGestureScope.awaitRelease] can be used to
       * detect when pointers have released or the gesture was canceled. The first pointer down and final
       * pointer up are consumed, and in the case of long press, all changes after the long press is
       * detected are consumed.
       *
       * Each function parameter receives an [Offset] representing the position relative to the containing
       * element. The [Offset] can be outside the actual bounds of the element itself meaning the numbers
       * can be negative or larger than the element bounds if the touch target is smaller than the
       * [ViewConfiguration.minimumTouchTargetSize].
       *
       * When [onDoubleTap] is provided, the tap gesture is detected only after the
       * [ViewConfiguration.doubleTapMinTimeMillis] has passed and [onDoubleTap] is called if the second
       * tap is started before [ViewConfiguration.doubleTapTimeoutMillis]. If [onDoubleTap] is not
       * provided, then [onTap] is called when the pointer up has been received.
       *
       * After the initial [onPress], if the pointer moves out of the input area, the position change is
       * consumed, or another gesture consumes the down or up events, the gestures are considered
       * canceled. That means [onDoubleTap], [onLongPress], and [onTap] will not be called after a gesture
       * has been canceled.
       *
       * If the first down event is consumed somewhere else, the entire gesture will be skipped, including
       * [onPress].
       */
      public suspend fun PointerInputScope.detectTapGestures(
          onDoubleTap: ((Offset) -> Unit)? = null,
          onLongPress: ((Offset) -> Unit)? = null,
          onPress: suspend PressGestureScope.(Offset) -> Unit = NoPressGesture,
          onTap: ((Offset) -> Unit)? = null,
      ): Unit = coroutineScope {
          // special signal to indicate to the sending side that it shouldn't intercept and consume
          // cancel/up events as we're only require down events
          val pressScope = PressGestureScopeImpl(this@detectTapGestures)

          awaitEachGesture {
              processTapGesture(
compose:
  id: guide-tap-gesture-consumption
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.gestures.detectTapGestures
  sections:
    - id: guide-tap-gesture-consumption
      title: "Guidance: Account for tap gesture consumption and cancellation"
      aliases:
        - androidx.compose.foundation.gestures.detectTapGestures
        - androidx.compose.foundation.gestures.PressGestureScope.tryAwaitRelease
        - tap consumption
        - gesture cancellation
        - 탭 제스처
        - 이벤트 소비
        - 제스처 취소
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-71-source
      relatedIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-71
---

# Guidance: Account for tap gesture consumption and cancellation

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Account for tap gesture consumption and cancellation

Guidance: detectTapGestures consumes the first pointer down and final pointer up; after detecting a long press it consumes subsequent changes. If another handler already consumed the first down, the entire gesture, including onPress, is skipped. After onPress, leaving the input area or consumption of movement, down, or up can cancel recognition, so onTap, onDoubleTap, and onLongPress are not called afterward. Limitation: callback offsets can fall outside element bounds when the touch target is expanded to the minimum target size.

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)
