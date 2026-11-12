---
type: reference
title: androidx.compose.foundation.gestures Transformable.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 1
    endLine: 35
    sha256: 1633fa20430f740eb6414c267dc7a0ec833aad9ec7fb423db168bfbb98754275
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

      package androidx.compose.foundation.gestures

      import androidx.compose.foundation.MutatePriority
      import androidx.compose.foundation.gestures.TransformEvent.TransformDelta
      import androidx.compose.foundation.gestures.TransformEvent.TransformStarted
      import androidx.compose.foundation.gestures.TransformEvent.TransformStopped
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.input.pointer.AwaitPointerEventScope
      import androidx.compose.ui.input.pointer.PointerEvent
      import androidx.compose.ui.input.pointer.PointerEventPass
      import androidx.compose.ui.input.pointer.PointerEventType
      import androidx.compose.ui.input.pointer.PointerInputScope
      import androidx.compose.ui.input.pointer.PointerType
      import androidx.compose.ui.input.pointer.SuspendingPointerInputModifierNode
      import androidx.compose.ui.input.pointer.isCtrlPressed
      import androidx.compose.ui.input.pointer.positionChanged
      import androidx.compose.ui.node.CompositionLocalConsumerModifierNode
      import androidx.compose.ui.node.DelegatingNode
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 106
    endLine: 140
    sha256: ed1e127dc3bce2232ba5e8645df8eb886101d36ad5555af83912ecefe49aa0c2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      private class TransformableElement(
          private val state: TransformableState,
          private val canPan: (Offset) -> Boolean,
          private val lockRotationOnZoomPan: Boolean,
          private val enabled: Boolean,
      ) : ModifierNodeElement<TransformableNode>() {
          override fun create(): TransformableNode =
              TransformableNode(state, canPan, lockRotationOnZoomPan, enabled)

          override fun update(node: TransformableNode) {
              node.update(state, canPan, lockRotationOnZoomPan, enabled)
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other === null) return false
              if (this::class != other::class) return false

              other as TransformableElement

              if (state != other.state) return false
              if (canPan !== other.canPan) return false
              if (lockRotationOnZoomPan != other.lockRotationOnZoomPan) return false
              if (enabled != other.enabled) return false

              return true
          }

          override fun hashCode(): Int {
              var result = state.hashCode()
              result = 31 * result + canPan.hashCode()
              result = 31 * result + lockRotationOnZoomPan.hashCode()
              result = 31 * result + enabled.hashCode()
              return result
          }
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 141
    endLine: 175
    sha256: 2fa400fc82243bad1716e10128f74fec3bfc3cf385222d64835b70440179fc3d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          override fun InspectorInfo.inspectableProperties() {
              name = "transformable"
              properties["state"] = state
              properties["canPan"] = canPan
              properties["enabled"] = enabled
              properties["lockRotationOnZoomPan"] = lockRotationOnZoomPan
          }
      }

      private class TransformableNode(
          private var state: TransformableState,
          private var canPan: (Offset) -> Boolean,
          private var lockRotationOnZoomPan: Boolean,
          private var enabled: Boolean,
      ) : DelegatingNode(), PointerInputModifierNode, CompositionLocalConsumerModifierNode {

          private val updatedCanPan: (Offset) -> Boolean = { canPan.invoke(it) }
          private val channel = Channel<TransformEvent>(capacity = Channel.UNLIMITED)

          private var scrollConfig: ScrollConfig? = null

          override fun onAttach() {
              super.onAttach()
              scrollConfig = platformScrollConfig()
          }

          private val pointerInputNode =
              delegate(
                  SuspendingPointerInputModifierNode {
                      if (!enabled) return@SuspendingPointerInputModifierNode
                      coroutineScope {
                          launch(start = CoroutineStart.UNDISPATCHED) {
                              while (isActive) {
                                  var event = channel.receive()
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 176
    endLine: 210
    sha256: bbf7d987472a24c5cccef7c8bf191c3b3ff879cfafc82c1f5ff733abe5d1055f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  if (event !is TransformStarted) continue
                                  try {
                                      state.transform(MutatePriority.UserInput) {
                                          while (event !is TransformStopped) {
                                              (event as? TransformDelta)?.let {
                                                  transformByWithCentroid(
                                                      centroid = it.centroid,
                                                      zoomChange = it.zoomChange,
                                                      panChange = it.panChange,
                                                      rotationChange = it.rotationChange,
                                                  )
                                              }
                                              event = channel.receive()
                                          }
                                      }
                                  } catch (_: CancellationException) {
                                      // ignore the cancellation and start over again.
                                  }
                              }
                          }

                          awaitEachGesture {
                              try {
                                  detectZoom(lockRotationOnZoomPan, channel, updatedCanPan)
                              } catch (exception: CancellationException) {
                                  if (!isActive) throw exception
                              } finally {
                                  channel.trySend(TransformStopped)
                              }
                          }
                      }
                  }
              )

          private var pointerInputModifierMouse: PointerInputModifierNode? = null
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 211
    endLine: 245
    sha256: 683bf79aaf0dd96855f591a18327a9f0855d9fdfb044e5f7257865ecd02cacaf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          fun update(
              state: TransformableState,
              canPan: (Offset) -> Boolean,
              lockRotationOnZoomPan: Boolean,
              enabled: Boolean,
          ) {
              this.canPan = canPan
              val needsReset =
                  this.state != state ||
                      this.enabled != enabled ||
                      this.lockRotationOnZoomPan != lockRotationOnZoomPan
              if (needsReset) {
                  this.state = state
                  this.enabled = enabled
                  this.lockRotationOnZoomPan = lockRotationOnZoomPan
                  pointerInputNode.resetPointerInputHandler()
              }
          }

          override fun onPointerEvent(
              pointerEvent: PointerEvent,
              pass: PointerEventPass,
              bounds: IntSize,
          ) {
              val scrollConfig = scrollConfig
              if (
                  enabled &&
                      pointerEvent.changes.fastAny { it.type == PointerType.Mouse } &&
                      scrollConfig != null &&
                      pointerInputModifierMouse == null
              ) {
                  pointerInputModifierMouse =
                      delegate(
                          SuspendingPointerInputModifierNode {
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 246
    endLine: 280
    sha256: 644d711d209b7572ad5308384ba99717b76ff48949e14c0865331f0aefbbd3a0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              detectNonTouchGestures(channel, scrollConfig)
                          }
                      )
              }
              pointerInputNode.onPointerEvent(pointerEvent, pass, bounds)
              pointerInputModifierMouse?.onPointerEvent(pointerEvent, pass, bounds)
          }

          override fun onCancelPointerInput() {
              pointerInputNode.onCancelPointerInput()
              pointerInputModifierMouse?.onCancelPointerInput()
          }
      }

      // The factor used to covert the mouse scroll to zoom.
      // Every 545 pixels of scroll is converted into 2 times zoom. This value is calculated from
      // curve fitting the ChromeOS's zoom factors.
      internal const val SCROLL_FACTOR = 545f

      /**
       * Convert non touch events into the appropriate transform events. There are 3 cases, where order of
       * determination matters:
       * - If Ctrl is pressed, and we get a scroll, either from a mouse wheel or a trackpad pan, we
       *   convert that scroll into an equivalent zoom
       * - If we get a trackpad pan, we convert that into a pan
       * - If we get a trackpad scale, we convert that into a zoom
       */
      private suspend fun PointerInputScope.detectNonTouchGestures(
          channel: Channel<TransformEvent>,
          scrollConfig: ScrollConfig,
      ) {
          val currentContext = currentCoroutineContext()
          awaitPointerEventScope {
              while (currentContext.isActive) {
                  try {
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 281
    endLine: 315
    sha256: 0b3ee3cb6bf92eba9814ad181b10f44015584486d3711e586f46140a622cc0d7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      var zoomOffset: Offset?
                      var panOffset: Offset?
                      var scale: Float?
                      var pointer: PointerEvent
                      do {
                          pointer = awaitPointerEvent()

                          // Convert non touch events into the appropriate transform events.
                          // There are 3 cases, where order of determination matters:
                          // - If Ctrl is pressed, and we get a scroll, either from a mouse wheel or a
                          //   trackpad pan, we convert that scroll into an equivalent zoom
                          // - If we get a trackpad pan, we convert that into a pan
                          // - If we get a trackpad scale, we convert that into a zoom
                          zoomOffset = consumePointerEventAsCtrlScrollOrNull(pointer, scrollConfig)
                          panOffset = consumePointerEventAsPanOrNull(pointer)
                          scale = consumePointerEventAsScaleOrNull(pointer)
                      } while (zoomOffset == null && panOffset == null && scale == null)
                      if (zoomOffset != null) {
                          var scrollDelta: Offset = zoomOffset
                          channel.trySend(TransformStarted)
                          while (true) {
                              // This formula is curve fitting form Chrome OS's ctrl + scroll
                              // implementation.
                              val zoomChange = 2f.pow(scrollDelta.y / SCROLL_FACTOR)
                              channel.trySend(
                                  TransformDelta(
                                      centroid = pointer.calculateCentroid { true },
                                      zoomChange = zoomChange,
                                      panChange = Offset.Zero,
                                      rotationChange = 0f,
                                  )
                              )
                              pointer = awaitPointerEvent()
                              scrollDelta =
                                  consumePointerEventAsCtrlScrollOrNull(pointer, scrollConfig) ?: break
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 316
    endLine: 350
    sha256: 501b9899ea8e01ecae17cd268903087d955c827d44ecb6e975a8d8f4ac0c2db1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          }
                      } else if (panOffset != null) {
                          var panDelta: Offset = panOffset
                          channel.trySend(TransformStarted)
                          while (true) {
                              channel.trySend(
                                  TransformDelta(
                                      centroid = pointer.calculateCentroid { true },
                                      zoomChange = 1f,
                                      panChange = panDelta,
                                      rotationChange = 0f,
                                  )
                              )
                              pointer = awaitPointerEvent()
                              panDelta = consumePointerEventAsPanOrNull(pointer) ?: break
                          }
                      } else {
                          var scaleDelta: Float =
                              checkNotNull(scale) {
                                  "One of zoomOffset, panOffset and scaleDelta must be non-null"
                              }
                          channel.trySend(TransformStarted)
                          while (true) {
                              channel.trySend(
                                  TransformDelta(
                                      centroid = pointer.calculateCentroid { true },
                                      zoomChange = scaleDelta,
                                      panChange = Offset.Zero,
                                      rotationChange = 0f,
                                  )
                              )
                              pointer = awaitPointerEvent()
                              scaleDelta = consumePointerEventAsScaleOrNull(pointer) ?: break
                          }
                      }
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 351
    endLine: 385
    sha256: 31d068d79662fff439d5414228b7afad7698202031d771a4fec0b4ee82b4f74b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  } finally {
                      channel.trySend(TransformStopped)
                  }
              }
          }
      }

      /**
       * If the PointerEvent is a mouse scroll event that has non zero scrollDelta and the ctrl key is
       * pressed, its scrollDelta is returned. Otherwise, null is returned. The event is consumed when it
       * detects ctrl + mouse scroll.
       */
      private fun AwaitPointerEventScope.consumePointerEventAsCtrlScrollOrNull(
          pointer: PointerEvent,
          scrollConfig: ScrollConfig,
      ): Offset? {
          if (
              !pointer.keyboardModifiers.isCtrlPressed ||
                  (pointer.type != PointerEventType.Scroll &&
                      pointer.type != PointerEventType.PanStart &&
                      pointer.type != PointerEventType.PanMove &&
                      pointer.type != PointerEventType.PanEnd)
          ) {
              return null
          }
          val scrollDelta =
              with(scrollConfig) { calculateMouseWheelScroll(pointer, size) } +
                  (pointer.changes.firstOrNull()?.let {
                      -it.panOffset +
                          it.historical.fastFold(Offset.Zero) { acc, historicalChange ->
                              acc - historicalChange.panOffset
                          }
                  } ?: Offset.Zero)

          if (scrollDelta == Offset.Zero) {
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 36
    endLine: 70
    sha256: 610d778d43d15ab8a363817dff75f32f98ffe4d5c7fb012ca072cad298967fce
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.PointerInputModifierNode
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.util.fastAny
      import androidx.compose.ui.util.fastFold
      import androidx.compose.ui.util.fastForEach
      import kotlin.math.PI
      import kotlin.math.abs
      import kotlin.math.pow
      import kotlinx.coroutines.CancellationException
      import kotlinx.coroutines.CoroutineStart
      import kotlinx.coroutines.channels.Channel
      import kotlinx.coroutines.coroutineScope
      import kotlinx.coroutines.currentCoroutineContext
      import kotlinx.coroutines.isActive
      import kotlinx.coroutines.launch

      /**
       * Enable transformation gestures of the modified UI element.
       *
       * Users should update their state themselves using default [TransformableState] and its
       * `onTransformation` callback or by implementing [TransformableState] interface manually and
       * reflect their own state in UI when using this component.
       *
       * @sample androidx.compose.foundation.samples.TransformableSample
       * @param state [TransformableState] of the transformable. Defines how transformation events will be
       *   interpreted by the user land logic, contains useful information about on-going events and
       *   provides animation capabilities.
       * @param lockRotationOnZoomPan If `true`, rotation is allowed only if touch slop is detected for
       *   rotation before pan or zoom motions. If not, pan and zoom gestures will be detected, but
       *   rotation gestures will not be. If `false`, once touch slop is reached, all three gestures are
       *   detected.
       * @param enabled whether zooming by gestures is enabled or not
       */
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 386
    endLine: 420
    sha256: 641dcd09c38ce43cd1e0b004f33c2bd6a252c07f2a498dc4a7f8f92c77848bf0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return null
          }

          pointer.changes.fastForEach { it.consume() }
          return scrollDelta
      }

      private fun AwaitPointerEventScope.consumePointerEventAsPanOrNull(pointer: PointerEvent): Offset? {
          if (
              pointer.type != PointerEventType.PanStart &&
                  pointer.type != PointerEventType.PanMove &&
                  pointer.type != PointerEventType.PanEnd
          ) {
              return null
          }
          val scrollDelta =
              pointer.changes.firstOrNull()?.let {
                  -it.panOffset +
                      it.historical.fastFold(Offset.Zero) { acc, historicalChange ->
                          acc - historicalChange.panOffset
                      }
              } ?: Offset.Zero

          if (scrollDelta == Offset.Zero) {
              return null
          }

          pointer.changes.fastForEach { it.consume() }
          return scrollDelta
      }

      private fun AwaitPointerEventScope.consumePointerEventAsScaleOrNull(pointer: PointerEvent): Float? {
          if (
              pointer.type != PointerEventType.ScaleStart &&
                  pointer.type != PointerEventType.ScaleChange &&
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 421
    endLine: 455
    sha256: 3ab4b1978275c55c518b832f459f408c48e714e5fdb303d1ff6c40c6a4e3b4ee
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  pointer.type != PointerEventType.ScaleEnd
          ) {
              return null
          }
          var scaleDelta = 1f
          pointer.changes.fastForEach {
              scaleDelta *= it.scaleFactor
              it.historical.fastForEach { scaleDelta *= it.scaleFactor }
          }

          if (scaleDelta == 1f) {
              return null
          }

          pointer.changes.fastForEach { it.consume() }
          return scaleDelta
      }

      private suspend fun AwaitPointerEventScope.detectZoom(
          panZoomLock: Boolean,
          channel: Channel<TransformEvent>,
          canPan: (Offset) -> Boolean,
      ) {
          var rotation = 0f
          var zoom = 1f
          var pan = Offset.Zero
          var pastTouchSlop = false
          val touchSlop = viewConfiguration.touchSlop
          var lockedToPanZoom = false
          awaitFirstDown(requireUnconsumed = false)
          do {
              val event = awaitPointerEvent()
              val canceled =
                  event.changes.fastAny { it.isConsumed } ||
                      event.type == PointerEventType.PanStart ||
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 456
    endLine: 490
    sha256: 65ac28063dc0ce117b121f4369c1db223af9fb42f0840e0cee818bcae9b460ae
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      event.type == PointerEventType.PanMove ||
                      event.type == PointerEventType.PanEnd ||
                      event.type == PointerEventType.ScaleStart ||
                      event.type == PointerEventType.ScaleChange ||
                      event.type == PointerEventType.ScaleEnd
              if (!canceled) {
                  val zoomChange = event.calculateZoom()
                  val rotationChange = event.calculateRotation()
                  val panChange = event.calculatePan()

                  if (!pastTouchSlop) {
                      zoom *= zoomChange
                      rotation += rotationChange
                      pan += panChange

                      val centroidSize = event.calculateCentroidSize(useCurrent = false)
                      val zoomMotion = abs(1 - zoom) * centroidSize
                      val rotationMotion = abs(rotation * PI.toFloat() * centroidSize / 180f)
                      val panMotion = pan.getDistance()

                      if (
                          zoomMotion > touchSlop ||
                              rotationMotion > touchSlop ||
                              (panMotion > touchSlop && canPan.invoke(panChange))
                      ) {
                          pastTouchSlop = true
                          lockedToPanZoom = panZoomLock && rotationMotion < touchSlop
                          channel.trySend(TransformStarted)
                      }
                  }

                  if (pastTouchSlop) {
                      val centroid = event.calculateCentroid(useCurrent = false)
                      val effectiveRotation = if (lockedToPanZoom) 0f else rotationChange
                      if (
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 491
    endLine: 525
    sha256: 924493252e172475d8469cf7ad106545d65c1a392446b9423524eb3b638edb4e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          effectiveRotation != 0f ||
                              zoomChange != 1f ||
                              (panChange != Offset.Zero && canPan.invoke(panChange))
                      ) {
                          channel.trySend(
                              TransformDelta(centroid, zoomChange, panChange, effectiveRotation)
                          )
                      }
                      event.changes.fastForEach {
                          if (it.positionChanged()) {
                              it.consume()
                          }
                      }
                  }
              } else {
                  channel.trySend(TransformStopped)
              }
              val finalEvent = awaitPointerEvent(pass = PointerEventPass.Final)
              // someone consumed while we were waiting for touch slop
              val finallyCanceled = finalEvent.changes.fastAny { it.isConsumed } && !pastTouchSlop
          } while (!canceled && !finallyCanceled && event.changes.fastAny { it.pressed })
      }

      private sealed class TransformEvent {
          object TransformStarted : TransformEvent()

          object TransformStopped : TransformEvent()

          class TransformDelta(
              val centroid: Offset,
              val zoomChange: Float,
              val panChange: Offset,
              val rotationChange: Float,
          ) : TransformEvent()
      }
  - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt
    startLine: 71
    endLine: 105
    sha256: d97bfbe3725e9e6042924a27567e29e0706f6029a142cb7e1d72006bc35f9183
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      public fun Modifier.transformable(
          state: TransformableState,
          lockRotationOnZoomPan: Boolean = false,
          enabled: Boolean = true,
      ): Modifier = transformable(state, { true }, lockRotationOnZoomPan, enabled)

      /**
       * Enable transformation gestures of the modified UI element.
       *
       * Users should update their state themselves using default [TransformableState] and its
       * `onTransformation` callback or by implementing [TransformableState] interface manually and
       * reflect their own state in UI when using this component.
       *
       * This overload of transformable modifier provides [canPan] parameter, which allows the caller to
       * control when the pan can start. making pan gesture to not to start when the scale is 1f makes
       * transformable modifiers to work well within the scrollable container. See example:
       *
       * @sample androidx.compose.foundation.samples.TransformableSampleInsideScroll
       * @param state [TransformableState] of the transformable. Defines how transformation events will be
       *   interpreted by the user land logic, contains useful information about on-going events and
       *   provides animation capabilities.
       * @param canPan whether the pan gesture can be performed or not given the pan offset
       * @param lockRotationOnZoomPan If `true`, rotation is allowed only if touch slop is detected for
       *   rotation before pan or zoom motions. If not, pan and zoom gestures will be detected, but
       *   rotation gestures will not be. If `false`, once touch slop is reached, all three gestures are
       *   detected.
       * @param enabled whether zooming by gestures is enabled or not
       */
      public fun Modifier.transformable(
          state: TransformableState,
          canPan: (Offset) -> Boolean,
          lockRotationOnZoomPan: Boolean = false,
          enabled: Boolean = true,
      ): Modifier = this then TransformableElement(state, canPan, lockRotationOnZoomPan, enabled)
compose:
  id: live-androidx-foundation-foundation-foundation-gestures-transformable
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.gestures
  sections:
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-1
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-106
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-141
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 141–175)
      aliases:
        - androidx.compose.foundation.gestures.transformable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-176
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-211
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 211–245)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-246
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 246–280)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-281
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-281-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-316
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 316–350)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-316-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-351
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 351–385)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-351-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-36
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 36–70)
      aliases:
        - androidx.compose.foundation.gestures.transformable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-386
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 386–420)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-386-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-421
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 421–455)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-421-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-456
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 456–490)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-456-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-491
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 491–525)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-491-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-transformable-lines-71
      title: androidx.compose.foundation.gestures Transformable.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.gestures.transformable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-transformable-lines-71-source
      relatedIds: []
---

# androidx.compose.foundation.gestures Transformable.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt

## androidx.compose.foundation.gestures Transformable.kt source (lines 1–35)

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

package androidx.compose.foundation.gestures

import androidx.compose.foundation.MutatePriority
import androidx.compose.foundation.gestures.TransformEvent.TransformDelta
import androidx.compose.foundation.gestures.TransformEvent.TransformStarted
import androidx.compose.foundation.gestures.TransformEvent.TransformStopped
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.input.pointer.AwaitPointerEventScope
import androidx.compose.ui.input.pointer.PointerEvent
import androidx.compose.ui.input.pointer.PointerEventPass
import androidx.compose.ui.input.pointer.PointerEventType
import androidx.compose.ui.input.pointer.PointerInputScope
import androidx.compose.ui.input.pointer.PointerType
import androidx.compose.ui.input.pointer.SuspendingPointerInputModifierNode
import androidx.compose.ui.input.pointer.isCtrlPressed
import androidx.compose.ui.input.pointer.positionChanged
import androidx.compose.ui.node.CompositionLocalConsumerModifierNode
import androidx.compose.ui.node.DelegatingNode

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 106–140)

private class TransformableElement(
    private val state: TransformableState,
    private val canPan: (Offset) -> Boolean,
    private val lockRotationOnZoomPan: Boolean,
    private val enabled: Boolean,
) : ModifierNodeElement<TransformableNode>() {
    override fun create(): TransformableNode =
        TransformableNode(state, canPan, lockRotationOnZoomPan, enabled)

    override fun update(node: TransformableNode) {
        node.update(state, canPan, lockRotationOnZoomPan, enabled)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other === null) return false
        if (this::class != other::class) return false

        other as TransformableElement

        if (state != other.state) return false
        if (canPan !== other.canPan) return false
        if (lockRotationOnZoomPan != other.lockRotationOnZoomPan) return false
        if (enabled != other.enabled) return false

        return true
    }

    override fun hashCode(): Int {
        var result = state.hashCode()
        result = 31 * result + canPan.hashCode()
        result = 31 * result + lockRotationOnZoomPan.hashCode()
        result = 31 * result + enabled.hashCode()
        return result
    }

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 141–175)


    override fun InspectorInfo.inspectableProperties() {
        name = "transformable"
        properties["state"] = state
        properties["canPan"] = canPan
        properties["enabled"] = enabled
        properties["lockRotationOnZoomPan"] = lockRotationOnZoomPan
    }
}

private class TransformableNode(
    private var state: TransformableState,
    private var canPan: (Offset) -> Boolean,
    private var lockRotationOnZoomPan: Boolean,
    private var enabled: Boolean,
) : DelegatingNode(), PointerInputModifierNode, CompositionLocalConsumerModifierNode {

    private val updatedCanPan: (Offset) -> Boolean = { canPan.invoke(it) }
    private val channel = Channel<TransformEvent>(capacity = Channel.UNLIMITED)

    private var scrollConfig: ScrollConfig? = null

    override fun onAttach() {
        super.onAttach()
        scrollConfig = platformScrollConfig()
    }

    private val pointerInputNode =
        delegate(
            SuspendingPointerInputModifierNode {
                if (!enabled) return@SuspendingPointerInputModifierNode
                coroutineScope {
                    launch(start = CoroutineStart.UNDISPATCHED) {
                        while (isActive) {
                            var event = channel.receive()

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 176–210)

                            if (event !is TransformStarted) continue
                            try {
                                state.transform(MutatePriority.UserInput) {
                                    while (event !is TransformStopped) {
                                        (event as? TransformDelta)?.let {
                                            transformByWithCentroid(
                                                centroid = it.centroid,
                                                zoomChange = it.zoomChange,
                                                panChange = it.panChange,
                                                rotationChange = it.rotationChange,
                                            )
                                        }
                                        event = channel.receive()
                                    }
                                }
                            } catch (_: CancellationException) {
                                // ignore the cancellation and start over again.
                            }
                        }
                    }

                    awaitEachGesture {
                        try {
                            detectZoom(lockRotationOnZoomPan, channel, updatedCanPan)
                        } catch (exception: CancellationException) {
                            if (!isActive) throw exception
                        } finally {
                            channel.trySend(TransformStopped)
                        }
                    }
                }
            }
        )

    private var pointerInputModifierMouse: PointerInputModifierNode? = null

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 211–245)


    fun update(
        state: TransformableState,
        canPan: (Offset) -> Boolean,
        lockRotationOnZoomPan: Boolean,
        enabled: Boolean,
    ) {
        this.canPan = canPan
        val needsReset =
            this.state != state ||
                this.enabled != enabled ||
                this.lockRotationOnZoomPan != lockRotationOnZoomPan
        if (needsReset) {
            this.state = state
            this.enabled = enabled
            this.lockRotationOnZoomPan = lockRotationOnZoomPan
            pointerInputNode.resetPointerInputHandler()
        }
    }

    override fun onPointerEvent(
        pointerEvent: PointerEvent,
        pass: PointerEventPass,
        bounds: IntSize,
    ) {
        val scrollConfig = scrollConfig
        if (
            enabled &&
                pointerEvent.changes.fastAny { it.type == PointerType.Mouse } &&
                scrollConfig != null &&
                pointerInputModifierMouse == null
        ) {
            pointerInputModifierMouse =
                delegate(
                    SuspendingPointerInputModifierNode {

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 246–280)

                        detectNonTouchGestures(channel, scrollConfig)
                    }
                )
        }
        pointerInputNode.onPointerEvent(pointerEvent, pass, bounds)
        pointerInputModifierMouse?.onPointerEvent(pointerEvent, pass, bounds)
    }

    override fun onCancelPointerInput() {
        pointerInputNode.onCancelPointerInput()
        pointerInputModifierMouse?.onCancelPointerInput()
    }
}

// The factor used to covert the mouse scroll to zoom.
// Every 545 pixels of scroll is converted into 2 times zoom. This value is calculated from
// curve fitting the ChromeOS's zoom factors.
internal const val SCROLL_FACTOR = 545f

/**
 * Convert non touch events into the appropriate transform events. There are 3 cases, where order of
 * determination matters:
 * - If Ctrl is pressed, and we get a scroll, either from a mouse wheel or a trackpad pan, we
 *   convert that scroll into an equivalent zoom
 * - If we get a trackpad pan, we convert that into a pan
 * - If we get a trackpad scale, we convert that into a zoom
 */
private suspend fun PointerInputScope.detectNonTouchGestures(
    channel: Channel<TransformEvent>,
    scrollConfig: ScrollConfig,
) {
    val currentContext = currentCoroutineContext()
    awaitPointerEventScope {
        while (currentContext.isActive) {
            try {

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 281–315)

                var zoomOffset: Offset?
                var panOffset: Offset?
                var scale: Float?
                var pointer: PointerEvent
                do {
                    pointer = awaitPointerEvent()

                    // Convert non touch events into the appropriate transform events.
                    // There are 3 cases, where order of determination matters:
                    // - If Ctrl is pressed, and we get a scroll, either from a mouse wheel or a
                    //   trackpad pan, we convert that scroll into an equivalent zoom
                    // - If we get a trackpad pan, we convert that into a pan
                    // - If we get a trackpad scale, we convert that into a zoom
                    zoomOffset = consumePointerEventAsCtrlScrollOrNull(pointer, scrollConfig)
                    panOffset = consumePointerEventAsPanOrNull(pointer)
                    scale = consumePointerEventAsScaleOrNull(pointer)
                } while (zoomOffset == null && panOffset == null && scale == null)
                if (zoomOffset != null) {
                    var scrollDelta: Offset = zoomOffset
                    channel.trySend(TransformStarted)
                    while (true) {
                        // This formula is curve fitting form Chrome OS's ctrl + scroll
                        // implementation.
                        val zoomChange = 2f.pow(scrollDelta.y / SCROLL_FACTOR)
                        channel.trySend(
                            TransformDelta(
                                centroid = pointer.calculateCentroid { true },
                                zoomChange = zoomChange,
                                panChange = Offset.Zero,
                                rotationChange = 0f,
                            )
                        )
                        pointer = awaitPointerEvent()
                        scrollDelta =
                            consumePointerEventAsCtrlScrollOrNull(pointer, scrollConfig) ?: break

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 316–350)

                    }
                } else if (panOffset != null) {
                    var panDelta: Offset = panOffset
                    channel.trySend(TransformStarted)
                    while (true) {
                        channel.trySend(
                            TransformDelta(
                                centroid = pointer.calculateCentroid { true },
                                zoomChange = 1f,
                                panChange = panDelta,
                                rotationChange = 0f,
                            )
                        )
                        pointer = awaitPointerEvent()
                        panDelta = consumePointerEventAsPanOrNull(pointer) ?: break
                    }
                } else {
                    var scaleDelta: Float =
                        checkNotNull(scale) {
                            "One of zoomOffset, panOffset and scaleDelta must be non-null"
                        }
                    channel.trySend(TransformStarted)
                    while (true) {
                        channel.trySend(
                            TransformDelta(
                                centroid = pointer.calculateCentroid { true },
                                zoomChange = scaleDelta,
                                panChange = Offset.Zero,
                                rotationChange = 0f,
                            )
                        )
                        pointer = awaitPointerEvent()
                        scaleDelta = consumePointerEventAsScaleOrNull(pointer) ?: break
                    }
                }

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 351–385)

            } finally {
                channel.trySend(TransformStopped)
            }
        }
    }
}

/**
 * If the PointerEvent is a mouse scroll event that has non zero scrollDelta and the ctrl key is
 * pressed, its scrollDelta is returned. Otherwise, null is returned. The event is consumed when it
 * detects ctrl + mouse scroll.
 */
private fun AwaitPointerEventScope.consumePointerEventAsCtrlScrollOrNull(
    pointer: PointerEvent,
    scrollConfig: ScrollConfig,
): Offset? {
    if (
        !pointer.keyboardModifiers.isCtrlPressed ||
            (pointer.type != PointerEventType.Scroll &&
                pointer.type != PointerEventType.PanStart &&
                pointer.type != PointerEventType.PanMove &&
                pointer.type != PointerEventType.PanEnd)
    ) {
        return null
    }
    val scrollDelta =
        with(scrollConfig) { calculateMouseWheelScroll(pointer, size) } +
            (pointer.changes.firstOrNull()?.let {
                -it.panOffset +
                    it.historical.fastFold(Offset.Zero) { acc, historicalChange ->
                        acc - historicalChange.panOffset
                    }
            } ?: Offset.Zero)

    if (scrollDelta == Offset.Zero) {

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 36–70)

import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.PointerInputModifierNode
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.util.fastAny
import androidx.compose.ui.util.fastFold
import androidx.compose.ui.util.fastForEach
import kotlin.math.PI
import kotlin.math.abs
import kotlin.math.pow
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.CoroutineStart
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.currentCoroutineContext
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch

/**
 * Enable transformation gestures of the modified UI element.
 *
 * Users should update their state themselves using default [TransformableState] and its
 * `onTransformation` callback or by implementing [TransformableState] interface manually and
 * reflect their own state in UI when using this component.
 *
 * @sample androidx.compose.foundation.samples.TransformableSample
 * @param state [TransformableState] of the transformable. Defines how transformation events will be
 *   interpreted by the user land logic, contains useful information about on-going events and
 *   provides animation capabilities.
 * @param lockRotationOnZoomPan If `true`, rotation is allowed only if touch slop is detected for
 *   rotation before pan or zoom motions. If not, pan and zoom gestures will be detected, but
 *   rotation gestures will not be. If `false`, once touch slop is reached, all three gestures are
 *   detected.
 * @param enabled whether zooming by gestures is enabled or not
 */

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 386–420)

        return null
    }

    pointer.changes.fastForEach { it.consume() }
    return scrollDelta
}

private fun AwaitPointerEventScope.consumePointerEventAsPanOrNull(pointer: PointerEvent): Offset? {
    if (
        pointer.type != PointerEventType.PanStart &&
            pointer.type != PointerEventType.PanMove &&
            pointer.type != PointerEventType.PanEnd
    ) {
        return null
    }
    val scrollDelta =
        pointer.changes.firstOrNull()?.let {
            -it.panOffset +
                it.historical.fastFold(Offset.Zero) { acc, historicalChange ->
                    acc - historicalChange.panOffset
                }
        } ?: Offset.Zero

    if (scrollDelta == Offset.Zero) {
        return null
    }

    pointer.changes.fastForEach { it.consume() }
    return scrollDelta
}

private fun AwaitPointerEventScope.consumePointerEventAsScaleOrNull(pointer: PointerEvent): Float? {
    if (
        pointer.type != PointerEventType.ScaleStart &&
            pointer.type != PointerEventType.ScaleChange &&

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 421–455)

            pointer.type != PointerEventType.ScaleEnd
    ) {
        return null
    }
    var scaleDelta = 1f
    pointer.changes.fastForEach {
        scaleDelta *= it.scaleFactor
        it.historical.fastForEach { scaleDelta *= it.scaleFactor }
    }

    if (scaleDelta == 1f) {
        return null
    }

    pointer.changes.fastForEach { it.consume() }
    return scaleDelta
}

private suspend fun AwaitPointerEventScope.detectZoom(
    panZoomLock: Boolean,
    channel: Channel<TransformEvent>,
    canPan: (Offset) -> Boolean,
) {
    var rotation = 0f
    var zoom = 1f
    var pan = Offset.Zero
    var pastTouchSlop = false
    val touchSlop = viewConfiguration.touchSlop
    var lockedToPanZoom = false
    awaitFirstDown(requireUnconsumed = false)
    do {
        val event = awaitPointerEvent()
        val canceled =
            event.changes.fastAny { it.isConsumed } ||
                event.type == PointerEventType.PanStart ||

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 456–490)

                event.type == PointerEventType.PanMove ||
                event.type == PointerEventType.PanEnd ||
                event.type == PointerEventType.ScaleStart ||
                event.type == PointerEventType.ScaleChange ||
                event.type == PointerEventType.ScaleEnd
        if (!canceled) {
            val zoomChange = event.calculateZoom()
            val rotationChange = event.calculateRotation()
            val panChange = event.calculatePan()

            if (!pastTouchSlop) {
                zoom *= zoomChange
                rotation += rotationChange
                pan += panChange

                val centroidSize = event.calculateCentroidSize(useCurrent = false)
                val zoomMotion = abs(1 - zoom) * centroidSize
                val rotationMotion = abs(rotation * PI.toFloat() * centroidSize / 180f)
                val panMotion = pan.getDistance()

                if (
                    zoomMotion > touchSlop ||
                        rotationMotion > touchSlop ||
                        (panMotion > touchSlop && canPan.invoke(panChange))
                ) {
                    pastTouchSlop = true
                    lockedToPanZoom = panZoomLock && rotationMotion < touchSlop
                    channel.trySend(TransformStarted)
                }
            }

            if (pastTouchSlop) {
                val centroid = event.calculateCentroid(useCurrent = false)
                val effectiveRotation = if (lockedToPanZoom) 0f else rotationChange
                if (

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 491–525)

                    effectiveRotation != 0f ||
                        zoomChange != 1f ||
                        (panChange != Offset.Zero && canPan.invoke(panChange))
                ) {
                    channel.trySend(
                        TransformDelta(centroid, zoomChange, panChange, effectiveRotation)
                    )
                }
                event.changes.fastForEach {
                    if (it.positionChanged()) {
                        it.consume()
                    }
                }
            }
        } else {
            channel.trySend(TransformStopped)
        }
        val finalEvent = awaitPointerEvent(pass = PointerEventPass.Final)
        // someone consumed while we were waiting for touch slop
        val finallyCanceled = finalEvent.changes.fastAny { it.isConsumed } && !pastTouchSlop
    } while (!canceled && !finallyCanceled && event.changes.fastAny { it.pressed })
}

private sealed class TransformEvent {
    object TransformStarted : TransformEvent()

    object TransformStopped : TransformEvent()

    class TransformDelta(
        val centroid: Offset,
        val zoomChange: Float,
        val panChange: Offset,
        val rotationChange: Float,
    ) : TransformEvent()
}

Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)

## androidx.compose.foundation.gestures Transformable.kt source (lines 71–105)

public fun Modifier.transformable(
    state: TransformableState,
    lockRotationOnZoomPan: Boolean = false,
    enabled: Boolean = true,
): Modifier = transformable(state, { true }, lockRotationOnZoomPan, enabled)

/**
 * Enable transformation gestures of the modified UI element.
 *
 * Users should update their state themselves using default [TransformableState] and its
 * `onTransformation` callback or by implementing [TransformableState] interface manually and
 * reflect their own state in UI when using this component.
 *
 * This overload of transformable modifier provides [canPan] parameter, which allows the caller to
 * control when the pan can start. making pan gesture to not to start when the scale is 1f makes
 * transformable modifiers to work well within the scrollable container. See example:
 *
 * @sample androidx.compose.foundation.samples.TransformableSampleInsideScroll
 * @param state [TransformableState] of the transformable. Defines how transformation events will be
 *   interpreted by the user land logic, contains useful information about on-going events and
 *   provides animation capabilities.
 * @param canPan whether the pan gesture can be performed or not given the pan offset
 * @param lockRotationOnZoomPan If `true`, rotation is allowed only if touch slop is detected for
 *   rotation before pan or zoom motions. If not, pan and zoom gestures will be detected, but
 *   rotation gestures will not be. If `false`, once touch slop is reached, all three gestures are
 *   detected.
 * @param enabled whether zooming by gestures is enabled or not
 */
public fun Modifier.transformable(
    state: TransformableState,
    canPan: (Offset) -> Boolean,
    lockRotationOnZoomPan: Boolean = false,
    enabled: Boolean = true,
): Modifier = this then TransformableElement(state, canPan, lockRotationOnZoomPan, enabled)


Sources: [live-androidx-foundation-foundation-foundation-gestures-transformable-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Transformable.kt)
