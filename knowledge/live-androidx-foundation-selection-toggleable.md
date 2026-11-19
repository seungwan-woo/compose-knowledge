---
type: reference
title: Toggleable state and input source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt"
tags:
  - Compose
  - Android
sources:
  - id: contract-toggleable-input-disabled-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 125
    endLine: 137
    sha256: 3b3470ea26a9efc6685aa631aa4cbf1f07a7873aabd9e7cabe1ea1a92c498e5c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @sample androidx.compose.foundation.samples.ToggleableSample
       * @param value whether Toggleable is on or off
       * @param enabled whether or not this [toggleable] will handle input events and appear enabled for
       *   semantics purposes
       * @param role the type of user interface element. Accessibility services might use this to describe
       *   the element or do customizations
       * @param interactionSource [MutableInteractionSource] that will be used to dispatch
       *   [PressInteraction.Press] when this toggleable is pressed. If `null`, an internal
       *   [MutableInteractionSource] will be created if needed.
       * @param onValueChange callback to be invoked when toggleable is clicked, therefore the change of
       *   the state in requested.
       * @see [Modifier.triStateToggleable] if you require support for an indeterminate state.
       */
  - id: contract-toggleable-node-state-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 309
    endLine: 348
    sha256: acfb6cd32f2573e3eb32f257e16b0041fcbf2ef102abbb785edf7fd251be7a6c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val _onClick = { onValueChange(!value) }

          fun update(
              value: Boolean,
              interactionSource: MutableInteractionSource?,
              indicationNodeFactory: IndicationNodeFactory?,
              useLocalIndication: Boolean,
              enabled: Boolean,
              role: Role?,
              onValueChange: (Boolean) -> Unit,
          ) {
              if (this.value != value) {
                  this.value = value
                  invalidateSemantics()
              }
              this.onValueChange = onValueChange
              super.update(
                  interactionSource = interactionSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = useLocalIndication,
                  enabled = enabled,
                  onClickLabel = null,
                  role = role,
                  onClick = _onClick,
              )
          }

          override fun SemanticsPropertyReceiver.applyAdditionalSemantics() {
              this.toggleableState = ToggleableState(value)
              this.contentDataType = ContentDataType.Toggle
              FillableData.createFromBoolean(value)?.let { this.fillableData = it }
              this.onFillData { fillableData ->
                  if (!enabled) return@onFillData false
                  fillableData.booleanValue?.let {
                      onValueChange(it)
                      true
                  } ?: false
              }
          }
      }
  - id: live-androidx-foundation-selection-toggleable-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 1
    endLine: 35
    sha256: db19709bb9656466f24aa166dfbea5bd6fa9fa6ac6d0b56b310fd2eb1cfca337
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2018 The Android Open Source Project
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

      package androidx.compose.foundation.selection

      import androidx.compose.foundation.ClickableNode
      import androidx.compose.foundation.Indication
      import androidx.compose.foundation.IndicationNodeFactory
      import androidx.compose.foundation.LocalIndication
      import androidx.compose.foundation.clickableWithIndicationIfNeeded
      import androidx.compose.foundation.indication
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.interaction.PressInteraction
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.autofill.ContentDataType
      import androidx.compose.ui.autofill.FillableData
      import androidx.compose.ui.autofill.createFromBoolean
      import androidx.compose.ui.composed
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.invalidateSemantics
      import androidx.compose.ui.platform.InspectorInfo
  - id: live-androidx-foundation-selection-toggleable-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 106
    endLine: 140
    sha256: 4d566080259312642e9796f03784f7be9df64f864d18a72f8358168f656b390f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

      /**
       * Configure component to make it toggleable via input and accessibility events
       *
       * This overload will use the [Indication] from [LocalIndication]. Use the other overload to
       * explicitly provide an [Indication] instance. Note that this overload only supports
       * [IndicationNodeFactory] instances provided through [LocalIndication] - it is strongly recommended
       * to migrate to [IndicationNodeFactory], but you can use the other overload if you still need to
       * support [Indication] instances that are not [IndicationNodeFactory].
       *
       * If [interactionSource] is `null`, an internal [MutableInteractionSource] will be lazily created
       * only when needed. This reduces the performance cost of toggleable during composition, as creating
       * the [indication] can be delayed until there is an incoming
       * [androidx.compose.foundation.interaction.Interaction]. If you are only passing a remembered
       * [MutableInteractionSource] and you are never using it outside of toggleable, it is recommended to
       * instead provide `null` to enable lazy creation. If you need the [Indication] to be created
       * eagerly, provide a remembered [MutableInteractionSource].
       *
       * @sample androidx.compose.foundation.samples.ToggleableSample
       * @param value whether Toggleable is on or off
       * @param enabled whether or not this [toggleable] will handle input events and appear enabled for
       *   semantics purposes
       * @param role the type of user interface element. Accessibility services might use this to describe
       *   the element or do customizations
       * @param interactionSource [MutableInteractionSource] that will be used to dispatch
       *   [PressInteraction.Press] when this toggleable is pressed. If `null`, an internal
       *   [MutableInteractionSource] will be created if needed.
       * @param onValueChange callback to be invoked when toggleable is clicked, therefore the change of
       *   the state in requested.
       * @see [Modifier.triStateToggleable] if you require support for an indeterminate state.
       */
      public fun Modifier.toggleable(
          value: Boolean,
          enabled: Boolean = true,
  - id: live-androidx-foundation-selection-toggleable-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 141
    endLine: 175
    sha256: 9e07200cdada33f8f140ab3efbf3ebc3b96209654138163ddc14c5334dbd2176
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          role: Role? = null,
          interactionSource: MutableInteractionSource? = null,
          onValueChange: (Boolean) -> Unit,
      ): Modifier {
          return this.then(
              ToggleableElement(
                  value = value,
                  interactionSource = interactionSource,
                  indicationNodeFactory = null,
                  useLocalIndication = true,
                  enabled = enabled,
                  role = role,
                  onValueChange = onValueChange,
              )
          )
      }

      /**
       * Configure component to make it toggleable via input and accessibility events.
       *
       * If [interactionSource] is `null`, and [indication] is an [IndicationNodeFactory], an internal
       * [MutableInteractionSource] will be lazily created along with the [indication] only when needed.
       * This reduces the performance cost of toggleable during composition, as creating the [indication]
       * can be delayed until there is an incoming [androidx.compose.foundation.interaction.Interaction].
       * If you are only passing a remembered [MutableInteractionSource] and you are never using it
       * outside of toggleable, it is recommended to instead provide `null` to enable lazy creation. If
       * you need [indication] to be created eagerly, provide a remembered [MutableInteractionSource].
       *
       * If [indication] is _not_ an [IndicationNodeFactory], and instead implements the deprecated
       * [Indication.rememberUpdatedInstance] method, you should explicitly pass a remembered
       * [MutableInteractionSource] as a parameter for [interactionSource] instead of `null`, as this
       * cannot be lazily created inside toggleable.
       *
       * @sample androidx.compose.foundation.samples.ToggleableSample
       * @param value whether Toggleable is on or off
  - id: live-androidx-foundation-selection-toggleable-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 176
    endLine: 210
    sha256: a0949f40491006b03b6914dc63ac3cc05db00eca565dd4ab84a37aa2e34adf12
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param interactionSource [MutableInteractionSource] that will be used to dispatch
       *   [PressInteraction.Press] when this toggleable is pressed. If `null`, an internal
       *   [MutableInteractionSource] will be created if needed.
       * @param indication indication to be shown when modified element is pressed. Be default, indication
       *   from [LocalIndication] will be used. Pass `null` to show no indication, or current value from
       *   [LocalIndication] to show theme default
       * @param enabled whether or not this [toggleable] will handle input events and appear enabled for
       *   semantics purposes
       * @param role the type of user interface element. Accessibility services might use this to describe
       *   the element or do customizations
       * @param onValueChange callback to be invoked when toggleable is clicked, therefore the change of
       *   the state in requested.
       * @see [Modifier.triStateToggleable] if you require support for an indeterminate state.
       */
      public fun Modifier.toggleable(
          value: Boolean,
          interactionSource: MutableInteractionSource?,
          indication: Indication?,
          enabled: Boolean = true,
          role: Role? = null,
          onValueChange: (Boolean) -> Unit,
      ): Modifier =
          clickableWithIndicationIfNeeded(
              interactionSource = interactionSource,
              indication = indication,
          ) { intSource, indicationNodeFactory ->
              ToggleableElement(
                  value = value,
                  interactionSource = intSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = false,
                  enabled = enabled,
                  role = role,
                  onValueChange = onValueChange,
              )
  - id: live-androidx-foundation-selection-toggleable-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 211
    endLine: 245
    sha256: 5aebef23aa0913c95b59ac38308974a007cef36609d9e9fdb3b0a42114a67f66
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

      private class ToggleableElement(
          private val value: Boolean,
          private val interactionSource: MutableInteractionSource?,
          private val indicationNodeFactory: IndicationNodeFactory?,
          private val useLocalIndication: Boolean,
          private val enabled: Boolean,
          private val role: Role?,
          private val onValueChange: (Boolean) -> Unit,
      ) : ModifierNodeElement<ToggleableNode>() {
          override fun create() =
              ToggleableNode(
                  value = value,
                  interactionSource = interactionSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = useLocalIndication,
                  enabled = enabled,
                  role = role,
                  onValueChange = onValueChange,
              )

          override fun update(node: ToggleableNode) {
              node.update(
                  value = value,
                  interactionSource = interactionSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = useLocalIndication,
                  enabled = enabled,
                  role = role,
                  onValueChange = onValueChange,
              )
          }

          override fun InspectorInfo.inspectableProperties() {
  - id: live-androidx-foundation-selection-toggleable-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 246
    endLine: 280
    sha256: ba17c26ee56a88661095c048b96e684399498deafc918ea49112435fd968c194
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              name = "toggleable"
              properties["value"] = value
              properties["interactionSource"] = interactionSource
              properties["indicationNodeFactory"] = indicationNodeFactory
              properties["enabled"] = enabled
              properties["role"] = role
              properties["onValueChange"] = onValueChange
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other === null) return false
              if (this::class != other::class) return false

              other as ToggleableElement

              if (value != other.value) return false
              if (interactionSource != other.interactionSource) return false
              if (indicationNodeFactory != other.indicationNodeFactory) return false
              if (useLocalIndication != other.useLocalIndication) return false
              if (enabled != other.enabled) return false
              if (role != other.role) return false
              if (onValueChange !== other.onValueChange) return false

              return true
          }

          override fun hashCode(): Int {
              var result = value.hashCode()
              result = 31 * result + (interactionSource?.hashCode() ?: 0)
              result = 31 * result + (indicationNodeFactory?.hashCode() ?: 0)
              result = 31 * result + useLocalIndication.hashCode()
              result = 31 * result + enabled.hashCode()
              result = 31 * result + (role?.hashCode() ?: 0)
              result = 31 * result + onValueChange.hashCode()
  - id: live-androidx-foundation-selection-toggleable-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 281
    endLine: 315
    sha256: 5863ea5fe8cc5f43f42b9833957da1ac167904cdd42ee2a01c15b5a4f07b7397
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return result
          }
      }

      private class ToggleableNode(
          private var value: Boolean,
          interactionSource: MutableInteractionSource?,
          indicationNodeFactory: IndicationNodeFactory?,
          useLocalIndication: Boolean,
          enabled: Boolean,
          role: Role?,
          private var onValueChange: (Boolean) -> Unit,
      ) :
          ClickableNode(
              interactionSource = interactionSource,
              indicationNodeFactory = indicationNodeFactory,
              useLocalIndication = useLocalIndication,
              enabled = enabled,
              onClickLabel = null,
              role = role,
              onClick = { onValueChange(!value) },
          ) {
          // the onClick passed in the constructor captures onValueChanged and value as passed to the
          // constructor, so we need to define a new lambda that references the properties. When these
          // change, update will be called, which will set this as the new onClick, so it doesn't matter
          // that we are pointing to the wrong lambda before the first toggle. (Additionally changing
          // onClick does not cause any invalidations / side effects, so there is no cost from setting
          // it up this way).
          val _onClick = { onValueChange(!value) }

          fun update(
              value: Boolean,
              interactionSource: MutableInteractionSource?,
              indicationNodeFactory: IndicationNodeFactory?,
              useLocalIndication: Boolean,
  - id: live-androidx-foundation-selection-toggleable-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 316
    endLine: 350
    sha256: 03f96f2b0e1461ecf8f8ec952d92461311347f607fa9222ef2f0b09d13ccf52e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              enabled: Boolean,
              role: Role?,
              onValueChange: (Boolean) -> Unit,
          ) {
              if (this.value != value) {
                  this.value = value
                  invalidateSemantics()
              }
              this.onValueChange = onValueChange
              super.update(
                  interactionSource = interactionSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = useLocalIndication,
                  enabled = enabled,
                  onClickLabel = null,
                  role = role,
                  onClick = _onClick,
              )
          }

          override fun SemanticsPropertyReceiver.applyAdditionalSemantics() {
              this.toggleableState = ToggleableState(value)
              this.contentDataType = ContentDataType.Toggle
              FillableData.createFromBoolean(value)?.let { this.fillableData = it }
              this.onFillData { fillableData ->
                  if (!enabled) return@onFillData false
                  fillableData.booleanValue?.let {
                      onValueChange(it)
                      true
                  } ?: false
              }
          }
      }

      /**
  - id: live-androidx-foundation-selection-toggleable-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 351
    endLine: 385
    sha256: 6f6b1e9d25d81f3643067bbe11174b0a6c36a0bea77237d9e74fee5aa088e316
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Configure component to make it toggleable via input and accessibility events with three states:
       * On, Off and Indeterminate.
       *
       * TriStateToggleable should be used when there are dependent Toggleables associated to this
       * component and those can have different values.
       *
       * This version has no [MutableInteractionSource] or [Indication] parameters, the default indication
       * from [LocalIndication] will be used. To specify [MutableInteractionSource] or [Indication], use
       * the other overload.
       *
       * If you are only creating this triStateToggleable modifier inside composition, consider using the
       * other overload and explicitly passing `LocalIndication.current` for improved performance. For
       * more information see the documentation on the other overload.
       *
       * @sample androidx.compose.foundation.samples.TriStateToggleableSample
       * @param state current value for the component
       * @param enabled whether or not this [triStateToggleable] will handle input events and appear
       *   enabled for semantics purposes
       * @param role the type of user interface element. Accessibility services might use this to describe
       *   the element or do customizations
       * @param onClick will be called when user clicks the toggleable.
       * @see [Modifier.toggleable] if you want to support only two states: on and off
       */
      @Deprecated(
          message =
              "Replaced with new overload that only supports IndicationNodeFactory instances inside LocalIndication, and does not use composed",
          level = DeprecationLevel.HIDDEN,
      )
      public fun Modifier.triStateToggleable(
          state: ToggleableState,
          enabled: Boolean = true,
          role: Role? = null,
          onClick: () -> Unit,
      ): Modifier =
          composed(
  - id: live-androidx-foundation-selection-toggleable-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 36
    endLine: 70
    sha256: f3c0f5d543acaf5f5efc655c58ad6f365c57bc9fa4c9b5fb1d36cc474ed84e40
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.platform.debugInspectorInfo
      import androidx.compose.ui.semantics.Role
      import androidx.compose.ui.semantics.SemanticsPropertyReceiver
      import androidx.compose.ui.semantics.contentDataType
      import androidx.compose.ui.semantics.fillableData
      import androidx.compose.ui.semantics.onFillData
      import androidx.compose.ui.semantics.toggleableState
      import androidx.compose.ui.state.ToggleableState

      /**
       * Configure component to make it toggleable via input and accessibility events
       *
       * This version has no [MutableInteractionSource] or [Indication] parameters, the default indication
       * from [LocalIndication] will be used. To specify [MutableInteractionSource] or [Indication], use
       * the other overload.
       *
       * If you are only creating this toggleable modifier inside composition, consider using the other
       * overload and explicitly passing `LocalIndication.current` for improved performance. For more
       * information see the documentation on the other overload.
       *
       * @sample androidx.compose.foundation.samples.ToggleableSample
       * @param value whether Toggleable is on or off
       * @param enabled whether or not this [toggleable] will handle input events and appear enabled for
       *   semantics purposes
       * @param role the type of user interface element. Accessibility services might use this to describe
       *   the element or do customizations
       * @param onValueChange callback to be invoked when toggleable is clicked, therefore the change of
       *   the state in requested.
       * @see [Modifier.triStateToggleable] if you require support for an indeterminate state.
       */
      @Deprecated(
          message =
              "Replaced with new overload that only supports IndicationNodeFactory instances inside LocalIndication, and does not use composed",
          level = DeprecationLevel.HIDDEN,
      )
  - id: live-androidx-foundation-selection-toggleable-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 386
    endLine: 420
    sha256: b898b3926c648494607ae22c575e571e5fe540fa215691c25eaf60534e17a67c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              inspectorInfo =
                  debugInspectorInfo {
                      name = "triStateToggleable"
                      properties["state"] = state
                      properties["enabled"] = enabled
                      properties["role"] = role
                      properties["onClick"] = onClick
                  }
          ) {
              val localIndication = LocalIndication.current
              val interactionSource =
                  if (localIndication is IndicationNodeFactory) {
                      // We can fast path here as it will be created inside clickable lazily
                      null
                  } else {
                      // We need an interaction source to pass between the indication modifier and
                      // clickable, so
                      // by creating here we avoid another composed down the line
                      remember { MutableInteractionSource() }
                  }
              Modifier.triStateToggleable(
                  state = state,
                  interactionSource = interactionSource,
                  indication = localIndication,
                  enabled = enabled,
                  role = role,
                  onClick = onClick,
              )
          }

      /**
       * Configure component to make it toggleable via input and accessibility events with three states:
       * On, Off and Indeterminate.
       *
       * TriStateToggleable should be used when there are dependent Toggleables associated to this
  - id: live-androidx-foundation-selection-toggleable-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 421
    endLine: 455
    sha256: 2a536a28b23e28f6761f318c2ad17043bf51983ca1ef2d92ade142c643f79f6b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * component and those can have different values.
       *
       * This overload will use the [Indication] from [LocalIndication]. Use the other overload to
       * explicitly provide an [Indication] instance. Note that this overload only supports
       * [IndicationNodeFactory] instances provided through [LocalIndication] - it is strongly recommended
       * to migrate to [IndicationNodeFactory], but you can use the other overload if you still need to
       * support [Indication] instances that are not [IndicationNodeFactory].
       *
       * If [interactionSource] is `null`, an internal [MutableInteractionSource] will be lazily created
       * only when needed. This reduces the performance cost of triStateToggleable during composition, as
       * creating the [indication] can be delayed until there is an incoming
       * [androidx.compose.foundation.interaction.Interaction]. If you are only passing a remembered
       * [MutableInteractionSource] and you are never using it outside of triStateToggleable, it is
       * recommended to instead provide `null` to enable lazy creation. If you need the [Indication] to be
       * created eagerly, provide a remembered [MutableInteractionSource].
       *
       * @sample androidx.compose.foundation.samples.TriStateToggleableSample
       * @param state current value for the component
       * @param enabled whether or not this [triStateToggleable] will handle input events and appear
       *   enabled for semantics purposes
       * @param role the type of user interface element. Accessibility services might use this to describe
       *   the element or do customizations
       * @param interactionSource [MutableInteractionSource] that will be used to dispatch
       *   [PressInteraction.Press] when this toggleable is pressed. If `null`, an internal
       *   [MutableInteractionSource] will be created if needed.
       * @param onClick will be called when user clicks the toggleable.
       * @see [Modifier.toggleable] if you want to support only two states: on and off
       */
      public fun Modifier.triStateToggleable(
          state: ToggleableState,
          enabled: Boolean = true,
          role: Role? = null,
          interactionSource: MutableInteractionSource? = null,
          onClick: () -> Unit,
      ): Modifier {
  - id: live-androidx-foundation-selection-toggleable-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 456
    endLine: 490
    sha256: a971ccd3cced78874a70167a84e040417f4dbc035ba1bb99f35dcbb28e5cfb3c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          return this.then(
              TriStateToggleableElement(
                  state = state,
                  interactionSource = interactionSource,
                  indicationNodeFactory = null,
                  useLocalIndication = true,
                  enabled = enabled,
                  role = role,
                  onClick = onClick,
              )
          )
      }

      /**
       * Configure component to make it toggleable via input and accessibility events with three states:
       * On, Off and Indeterminate.
       *
       * TriStateToggleable should be used when there are dependent Toggleables associated to this
       * component and those can have different values.
       *
       * If [interactionSource] is `null`, and [indication] is an [IndicationNodeFactory], an internal
       * [MutableInteractionSource] will be lazily created along with the [indication] only when needed.
       * This reduces the performance cost of triStateToggleable during composition, as creating the
       * [indication] can be delayed until there is an incoming
       * [androidx.compose.foundation.interaction.Interaction]. If you are only passing a remembered
       * [MutableInteractionSource] and you are never using it outside of triStateToggleable, it is
       * recommended to instead provide `null` to enable lazy creation. If you need [indication] to be
       * created eagerly, provide a remembered [MutableInteractionSource].
       *
       * If [indication] is _not_ an [IndicationNodeFactory], and instead implements the deprecated
       * [Indication.rememberUpdatedInstance] method, you should explicitly pass a remembered
       * [MutableInteractionSource] as a parameter for [interactionSource] instead of `null`, as this
       * cannot be lazily created inside triStateToggleable.
       *
       * @sample androidx.compose.foundation.samples.TriStateToggleableSample
  - id: live-androidx-foundation-selection-toggleable-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 491
    endLine: 525
    sha256: 5a265379dc635040982996635b5da3bc31867d03a331e9cac8554d29c9511c58
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param state current value for the component
       * @param interactionSource [MutableInteractionSource] that will be used to dispatch
       *   [PressInteraction.Press] when this triStateToggleable is pressed. If `null`, an internal
       *   [MutableInteractionSource] will be created if needed.
       * @param indication indication to be shown when modified element is pressed. Be default, indication
       *   from [LocalIndication] will be used. Pass `null` to show no indication, or current value from
       *   [LocalIndication] to show theme default
       * @param enabled whether or not this [triStateToggleable] will handle input events and appear
       *   enabled for semantics purposes
       * @param role the type of user interface element. Accessibility services might use this to describe
       *   the element or do customizations
       * @param onClick will be called when user clicks the toggleable.
       * @see [Modifier.toggleable] if you want to support only two states: on and off
       */
      public fun Modifier.triStateToggleable(
          state: ToggleableState,
          interactionSource: MutableInteractionSource?,
          indication: Indication?,
          enabled: Boolean = true,
          role: Role? = null,
          onClick: () -> Unit,
      ): Modifier =
          clickableWithIndicationIfNeeded(
              interactionSource = interactionSource,
              indication = indication,
          ) { intSource, indicationNodeFactory ->
              TriStateToggleableElement(
                  state = state,
                  interactionSource = intSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = false,
                  enabled = enabled,
                  role = role,
                  onClick = onClick,
              )
  - id: live-androidx-foundation-selection-toggleable-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 526
    endLine: 560
    sha256: 82a3bdf88fe83558445fc0cc4c528a274cbac2532cf4f44d6b1a855ae671f01b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

      private class TriStateToggleableElement(
          private val state: ToggleableState,
          private val interactionSource: MutableInteractionSource?,
          private val indicationNodeFactory: IndicationNodeFactory?,
          private val useLocalIndication: Boolean,
          private val enabled: Boolean,
          private val role: Role?,
          private val onClick: () -> Unit,
      ) : ModifierNodeElement<TriStateToggleableNode>() {
          override fun create() =
              TriStateToggleableNode(
                  state = state,
                  interactionSource = interactionSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = useLocalIndication,
                  enabled = enabled,
                  role = role,
                  onClick = onClick,
              )

          override fun update(node: TriStateToggleableNode) {
              node.update(
                  state = state,
                  interactionSource = interactionSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = useLocalIndication,
                  enabled = enabled,
                  role = role,
                  onClick = onClick,
              )
          }

          // Defined in the factory functions with inspectable
  - id: live-androidx-foundation-selection-toggleable-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 561
    endLine: 595
    sha256: f551c89ae910306b38847124d89cd3eb497618c25b3831a9bbca7fae5441cd54
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun InspectorInfo.inspectableProperties() {
              name = "triStateToggleable"
              properties["state"] = state
              properties["interactionSource"] = interactionSource
              properties["indicationNodeFactory"] = indicationNodeFactory
              properties["enabled"] = enabled
              properties["role"] = role
              properties["onClick"] = onClick
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other === null) return false
              if (this::class != other::class) return false

              other as TriStateToggleableElement

              if (state != other.state) return false
              if (interactionSource != other.interactionSource) return false
              if (indicationNodeFactory != other.indicationNodeFactory) return false
              if (useLocalIndication != other.useLocalIndication) return false
              if (enabled != other.enabled) return false
              if (role != other.role) return false
              if (onClick !== other.onClick) return false

              return true
          }

          override fun hashCode(): Int {
              var result = state.hashCode()
              result = 31 * result + (interactionSource?.hashCode() ?: 0)
              result = 31 * result + (indicationNodeFactory?.hashCode() ?: 0)
              result = 31 * result + useLocalIndication.hashCode()
              result = 31 * result + enabled.hashCode()
              result = 31 * result + (role?.hashCode() ?: 0)
  - id: live-androidx-foundation-selection-toggleable-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 596
    endLine: 630
    sha256: 8d00f7f1c1443a2aa4413ff80f3fe5f34d1609178ca6f180d3f73d8ace397db3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              result = 31 * result + onClick.hashCode()
              return result
          }
      }

      private class TriStateToggleableNode(
          private var state: ToggleableState,
          interactionSource: MutableInteractionSource?,
          indicationNodeFactory: IndicationNodeFactory?,
          useLocalIndication: Boolean,
          enabled: Boolean,
          role: Role?,
          onClick: () -> Unit,
      ) :
          ClickableNode(
              interactionSource = interactionSource,
              indicationNodeFactory = indicationNodeFactory,
              useLocalIndication = useLocalIndication,
              enabled = enabled,
              onClickLabel = null,
              role = role,
              onClick = onClick,
          ) {
          fun update(
              state: ToggleableState,
              interactionSource: MutableInteractionSource?,
              indicationNodeFactory: IndicationNodeFactory?,
              useLocalIndication: Boolean,
              enabled: Boolean,
              role: Role?,
              onClick: () -> Unit,
          ) {
              if (this.state != state) {
                  this.state = state
                  invalidateSemantics()
  - id: live-androidx-foundation-selection-toggleable-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 631
    endLine: 664
    sha256: f4331279527c00f2fba43bcec32f9793d792f205c35b6ec10c333cf816ae717a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              }
              super.update(
                  interactionSource = interactionSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = useLocalIndication,
                  enabled = enabled,
                  onClickLabel = null,
                  role = role,
                  onClick = onClick,
              )
          }

          override fun SemanticsPropertyReceiver.applyAdditionalSemantics() {
              this.toggleableState = state
              this.contentDataType = ContentDataType.Toggle
              // If the toggle state is not indeterminate, set the boolean value on the fillableData
              // semantic property.
              if (state != ToggleableState.Indeterminate) {
                  FillableData.createFromBoolean(state == ToggleableState.On)?.let {
                      this.fillableData = it
                  }
              }
              this.onFillData { fillableData ->
                  if (!enabled || state == ToggleableState.Indeterminate) return@onFillData false
                  fillableData.booleanValue?.let { target ->
                      if (state != ToggleableState(target)) {
                          onClick()
                      }
                      true
                  } ?: false
              }
          }
      }
  - id: live-androidx-foundation-selection-toggleable-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    startLine: 71
    endLine: 105
    sha256: a6958e25bf3ad29850887b1d2b2a2d9a6768c51ea5ada59b5d5febdf840dd561
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public fun Modifier.toggleable(
          value: Boolean,
          enabled: Boolean = true,
          role: Role? = null,
          onValueChange: (Boolean) -> Unit,
      ): Modifier =
          composed(
              inspectorInfo =
                  debugInspectorInfo {
                      name = "toggleable"
                      properties["value"] = value
                      properties["enabled"] = enabled
                      properties["role"] = role
                      properties["onValueChange"] = onValueChange
                  }
          ) {
              val localIndication = LocalIndication.current
              val interactionSource =
                  if (localIndication is IndicationNodeFactory) {
                      // We can fast path here as it will be created inside clickable lazily
                      null
                  } else {
                      // We need an interaction source to pass between the indication modifier and
                      // clickable, so
                      // by creating here we avoid another composed down the line
                      remember { MutableInteractionSource() }
                  }
              Modifier.toggleable(
                  value = value,
                  interactionSource = interactionSource,
                  indication = localIndication,
                  enabled = enabled,
                  role = role,
                  onValueChange = onValueChange,
              )
compose:
  id: live-androidx-foundation-selection-toggleable
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.selection.toggleable
  sections:
    - id: contract-toggleable-input-disabled
      title: Toggleable value, input, disabled semantics, and state change request
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - contract-toggleable-input-disabled-source
      relatedIds: []
    - id: contract-toggleable-node-state
      title: Toggleable current value, callback update, and semantics
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - contract-toggleable-node-state-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-1
      title: Toggleable state and input source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-106
      title: Toggleable state and input source (lines 106–140)
      aliases:
        - androidx.compose.foundation.selection.toggleable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-141
      title: Toggleable state and input source (lines 141–175)
      aliases:
        - androidx.compose.foundation.selection.toggleable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-176
      title: Toggleable state and input source (lines 176–210)
      aliases:
        - androidx.compose.foundation.selection.toggleable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-211
      title: Toggleable state and input source (lines 211–245)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-246
      title: Toggleable state and input source (lines 246–280)
      aliases:
        - androidx.compose.foundation.selection.toggleable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-281
      title: Toggleable state and input source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-281-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-316
      title: Toggleable state and input source (lines 316–350)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-316-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-351
      title: Toggleable state and input source (lines 351–385)
      aliases:
        - androidx.compose.foundation.selection.toggleable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-351-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-36
      title: Toggleable state and input source (lines 36–70)
      aliases:
        - androidx.compose.foundation.selection.toggleable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-386
      title: Toggleable state and input source (lines 386–420)
      aliases:
        - androidx.compose.foundation.selection.toggleable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-386-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-421
      title: Toggleable state and input source (lines 421–455)
      aliases:
        - androidx.compose.foundation.selection.toggleable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-421-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-456
      title: Toggleable state and input source (lines 456–490)
      aliases:
        - androidx.compose.foundation.selection.toggleable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-456-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-491
      title: Toggleable state and input source (lines 491–525)
      aliases:
        - androidx.compose.foundation.selection.toggleable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-491-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-526
      title: Toggleable state and input source (lines 526–560)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-526-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-561
      title: Toggleable state and input source (lines 561–595)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-561-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-596
      title: Toggleable state and input source (lines 596–630)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-596-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-631
      title: Toggleable state and input source (lines 631–664)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-631-source
      relatedIds: []
    - id: live-androidx-foundation-selection-toggleable-lines-71
      title: Toggleable state and input source (lines 71–105)
      aliases:
        - androidx.compose.foundation.selection.toggleable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-selection-toggleable-lines-71-source
      relatedIds: []
---

# Toggleable state and input source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt

## Toggleable value, input, disabled semantics, and state change request

 * @sample androidx.compose.foundation.samples.ToggleableSample
 * @param value whether Toggleable is on or off
 * @param enabled whether or not this [toggleable] will handle input events and appear enabled for
 *   semantics purposes
 * @param role the type of user interface element. Accessibility services might use this to describe
 *   the element or do customizations
 * @param interactionSource [MutableInteractionSource] that will be used to dispatch
 *   [PressInteraction.Press] when this toggleable is pressed. If `null`, an internal
 *   [MutableInteractionSource] will be created if needed.
 * @param onValueChange callback to be invoked when toggleable is clicked, therefore the change of
 *   the state in requested.
 * @see [Modifier.triStateToggleable] if you require support for an indeterminate state.
 */

Sources: [contract-toggleable-input-disabled-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable current value, callback update, and semantics

    val _onClick = { onValueChange(!value) }

    fun update(
        value: Boolean,
        interactionSource: MutableInteractionSource?,
        indicationNodeFactory: IndicationNodeFactory?,
        useLocalIndication: Boolean,
        enabled: Boolean,
        role: Role?,
        onValueChange: (Boolean) -> Unit,
    ) {
        if (this.value != value) {
            this.value = value
            invalidateSemantics()
        }
        this.onValueChange = onValueChange
        super.update(
            interactionSource = interactionSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = useLocalIndication,
            enabled = enabled,
            onClickLabel = null,
            role = role,
            onClick = _onClick,
        )
    }

    override fun SemanticsPropertyReceiver.applyAdditionalSemantics() {
        this.toggleableState = ToggleableState(value)
        this.contentDataType = ContentDataType.Toggle
        FillableData.createFromBoolean(value)?.let { this.fillableData = it }
        this.onFillData { fillableData ->
            if (!enabled) return@onFillData false
            fillableData.booleanValue?.let {
                onValueChange(it)
                true
            } ?: false
        }
    }
}

Sources: [contract-toggleable-node-state-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 1–35)

/*
 * Copyright 2018 The Android Open Source Project
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

package androidx.compose.foundation.selection

import androidx.compose.foundation.ClickableNode
import androidx.compose.foundation.Indication
import androidx.compose.foundation.IndicationNodeFactory
import androidx.compose.foundation.LocalIndication
import androidx.compose.foundation.clickableWithIndicationIfNeeded
import androidx.compose.foundation.indication
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.PressInteraction
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.autofill.ContentDataType
import androidx.compose.ui.autofill.FillableData
import androidx.compose.ui.autofill.createFromBoolean
import androidx.compose.ui.composed
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.invalidateSemantics
import androidx.compose.ui.platform.InspectorInfo

Sources: [live-androidx-foundation-selection-toggleable-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 106–140)

    }

/**
 * Configure component to make it toggleable via input and accessibility events
 *
 * This overload will use the [Indication] from [LocalIndication]. Use the other overload to
 * explicitly provide an [Indication] instance. Note that this overload only supports
 * [IndicationNodeFactory] instances provided through [LocalIndication] - it is strongly recommended
 * to migrate to [IndicationNodeFactory], but you can use the other overload if you still need to
 * support [Indication] instances that are not [IndicationNodeFactory].
 *
 * If [interactionSource] is `null`, an internal [MutableInteractionSource] will be lazily created
 * only when needed. This reduces the performance cost of toggleable during composition, as creating
 * the [indication] can be delayed until there is an incoming
 * [androidx.compose.foundation.interaction.Interaction]. If you are only passing a remembered
 * [MutableInteractionSource] and you are never using it outside of toggleable, it is recommended to
 * instead provide `null` to enable lazy creation. If you need the [Indication] to be created
 * eagerly, provide a remembered [MutableInteractionSource].
 *
 * @sample androidx.compose.foundation.samples.ToggleableSample
 * @param value whether Toggleable is on or off
 * @param enabled whether or not this [toggleable] will handle input events and appear enabled for
 *   semantics purposes
 * @param role the type of user interface element. Accessibility services might use this to describe
 *   the element or do customizations
 * @param interactionSource [MutableInteractionSource] that will be used to dispatch
 *   [PressInteraction.Press] when this toggleable is pressed. If `null`, an internal
 *   [MutableInteractionSource] will be created if needed.
 * @param onValueChange callback to be invoked when toggleable is clicked, therefore the change of
 *   the state in requested.
 * @see [Modifier.triStateToggleable] if you require support for an indeterminate state.
 */
public fun Modifier.toggleable(
    value: Boolean,
    enabled: Boolean = true,

Sources: [live-androidx-foundation-selection-toggleable-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 141–175)

    role: Role? = null,
    interactionSource: MutableInteractionSource? = null,
    onValueChange: (Boolean) -> Unit,
): Modifier {
    return this.then(
        ToggleableElement(
            value = value,
            interactionSource = interactionSource,
            indicationNodeFactory = null,
            useLocalIndication = true,
            enabled = enabled,
            role = role,
            onValueChange = onValueChange,
        )
    )
}

/**
 * Configure component to make it toggleable via input and accessibility events.
 *
 * If [interactionSource] is `null`, and [indication] is an [IndicationNodeFactory], an internal
 * [MutableInteractionSource] will be lazily created along with the [indication] only when needed.
 * This reduces the performance cost of toggleable during composition, as creating the [indication]
 * can be delayed until there is an incoming [androidx.compose.foundation.interaction.Interaction].
 * If you are only passing a remembered [MutableInteractionSource] and you are never using it
 * outside of toggleable, it is recommended to instead provide `null` to enable lazy creation. If
 * you need [indication] to be created eagerly, provide a remembered [MutableInteractionSource].
 *
 * If [indication] is _not_ an [IndicationNodeFactory], and instead implements the deprecated
 * [Indication.rememberUpdatedInstance] method, you should explicitly pass a remembered
 * [MutableInteractionSource] as a parameter for [interactionSource] instead of `null`, as this
 * cannot be lazily created inside toggleable.
 *
 * @sample androidx.compose.foundation.samples.ToggleableSample
 * @param value whether Toggleable is on or off

Sources: [live-androidx-foundation-selection-toggleable-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 176–210)

 * @param interactionSource [MutableInteractionSource] that will be used to dispatch
 *   [PressInteraction.Press] when this toggleable is pressed. If `null`, an internal
 *   [MutableInteractionSource] will be created if needed.
 * @param indication indication to be shown when modified element is pressed. Be default, indication
 *   from [LocalIndication] will be used. Pass `null` to show no indication, or current value from
 *   [LocalIndication] to show theme default
 * @param enabled whether or not this [toggleable] will handle input events and appear enabled for
 *   semantics purposes
 * @param role the type of user interface element. Accessibility services might use this to describe
 *   the element or do customizations
 * @param onValueChange callback to be invoked when toggleable is clicked, therefore the change of
 *   the state in requested.
 * @see [Modifier.triStateToggleable] if you require support for an indeterminate state.
 */
public fun Modifier.toggleable(
    value: Boolean,
    interactionSource: MutableInteractionSource?,
    indication: Indication?,
    enabled: Boolean = true,
    role: Role? = null,
    onValueChange: (Boolean) -> Unit,
): Modifier =
    clickableWithIndicationIfNeeded(
        interactionSource = interactionSource,
        indication = indication,
    ) { intSource, indicationNodeFactory ->
        ToggleableElement(
            value = value,
            interactionSource = intSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = false,
            enabled = enabled,
            role = role,
            onValueChange = onValueChange,
        )

Sources: [live-androidx-foundation-selection-toggleable-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 211–245)

    }

private class ToggleableElement(
    private val value: Boolean,
    private val interactionSource: MutableInteractionSource?,
    private val indicationNodeFactory: IndicationNodeFactory?,
    private val useLocalIndication: Boolean,
    private val enabled: Boolean,
    private val role: Role?,
    private val onValueChange: (Boolean) -> Unit,
) : ModifierNodeElement<ToggleableNode>() {
    override fun create() =
        ToggleableNode(
            value = value,
            interactionSource = interactionSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = useLocalIndication,
            enabled = enabled,
            role = role,
            onValueChange = onValueChange,
        )

    override fun update(node: ToggleableNode) {
        node.update(
            value = value,
            interactionSource = interactionSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = useLocalIndication,
            enabled = enabled,
            role = role,
            onValueChange = onValueChange,
        )
    }

    override fun InspectorInfo.inspectableProperties() {

Sources: [live-androidx-foundation-selection-toggleable-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 246–280)

        name = "toggleable"
        properties["value"] = value
        properties["interactionSource"] = interactionSource
        properties["indicationNodeFactory"] = indicationNodeFactory
        properties["enabled"] = enabled
        properties["role"] = role
        properties["onValueChange"] = onValueChange
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other === null) return false
        if (this::class != other::class) return false

        other as ToggleableElement

        if (value != other.value) return false
        if (interactionSource != other.interactionSource) return false
        if (indicationNodeFactory != other.indicationNodeFactory) return false
        if (useLocalIndication != other.useLocalIndication) return false
        if (enabled != other.enabled) return false
        if (role != other.role) return false
        if (onValueChange !== other.onValueChange) return false

        return true
    }

    override fun hashCode(): Int {
        var result = value.hashCode()
        result = 31 * result + (interactionSource?.hashCode() ?: 0)
        result = 31 * result + (indicationNodeFactory?.hashCode() ?: 0)
        result = 31 * result + useLocalIndication.hashCode()
        result = 31 * result + enabled.hashCode()
        result = 31 * result + (role?.hashCode() ?: 0)
        result = 31 * result + onValueChange.hashCode()

Sources: [live-androidx-foundation-selection-toggleable-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 281–315)

        return result
    }
}

private class ToggleableNode(
    private var value: Boolean,
    interactionSource: MutableInteractionSource?,
    indicationNodeFactory: IndicationNodeFactory?,
    useLocalIndication: Boolean,
    enabled: Boolean,
    role: Role?,
    private var onValueChange: (Boolean) -> Unit,
) :
    ClickableNode(
        interactionSource = interactionSource,
        indicationNodeFactory = indicationNodeFactory,
        useLocalIndication = useLocalIndication,
        enabled = enabled,
        onClickLabel = null,
        role = role,
        onClick = { onValueChange(!value) },
    ) {
    // the onClick passed in the constructor captures onValueChanged and value as passed to the
    // constructor, so we need to define a new lambda that references the properties. When these
    // change, update will be called, which will set this as the new onClick, so it doesn't matter
    // that we are pointing to the wrong lambda before the first toggle. (Additionally changing
    // onClick does not cause any invalidations / side effects, so there is no cost from setting
    // it up this way).
    val _onClick = { onValueChange(!value) }

    fun update(
        value: Boolean,
        interactionSource: MutableInteractionSource?,
        indicationNodeFactory: IndicationNodeFactory?,
        useLocalIndication: Boolean,

Sources: [live-androidx-foundation-selection-toggleable-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 316–350)

        enabled: Boolean,
        role: Role?,
        onValueChange: (Boolean) -> Unit,
    ) {
        if (this.value != value) {
            this.value = value
            invalidateSemantics()
        }
        this.onValueChange = onValueChange
        super.update(
            interactionSource = interactionSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = useLocalIndication,
            enabled = enabled,
            onClickLabel = null,
            role = role,
            onClick = _onClick,
        )
    }

    override fun SemanticsPropertyReceiver.applyAdditionalSemantics() {
        this.toggleableState = ToggleableState(value)
        this.contentDataType = ContentDataType.Toggle
        FillableData.createFromBoolean(value)?.let { this.fillableData = it }
        this.onFillData { fillableData ->
            if (!enabled) return@onFillData false
            fillableData.booleanValue?.let {
                onValueChange(it)
                true
            } ?: false
        }
    }
}

/**

Sources: [live-androidx-foundation-selection-toggleable-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 351–385)

 * Configure component to make it toggleable via input and accessibility events with three states:
 * On, Off and Indeterminate.
 *
 * TriStateToggleable should be used when there are dependent Toggleables associated to this
 * component and those can have different values.
 *
 * This version has no [MutableInteractionSource] or [Indication] parameters, the default indication
 * from [LocalIndication] will be used. To specify [MutableInteractionSource] or [Indication], use
 * the other overload.
 *
 * If you are only creating this triStateToggleable modifier inside composition, consider using the
 * other overload and explicitly passing `LocalIndication.current` for improved performance. For
 * more information see the documentation on the other overload.
 *
 * @sample androidx.compose.foundation.samples.TriStateToggleableSample
 * @param state current value for the component
 * @param enabled whether or not this [triStateToggleable] will handle input events and appear
 *   enabled for semantics purposes
 * @param role the type of user interface element. Accessibility services might use this to describe
 *   the element or do customizations
 * @param onClick will be called when user clicks the toggleable.
 * @see [Modifier.toggleable] if you want to support only two states: on and off
 */
@Deprecated(
    message =
        "Replaced with new overload that only supports IndicationNodeFactory instances inside LocalIndication, and does not use composed",
    level = DeprecationLevel.HIDDEN,
)
public fun Modifier.triStateToggleable(
    state: ToggleableState,
    enabled: Boolean = true,
    role: Role? = null,
    onClick: () -> Unit,
): Modifier =
    composed(

Sources: [live-androidx-foundation-selection-toggleable-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 36–70)

import androidx.compose.ui.platform.debugInspectorInfo
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.SemanticsPropertyReceiver
import androidx.compose.ui.semantics.contentDataType
import androidx.compose.ui.semantics.fillableData
import androidx.compose.ui.semantics.onFillData
import androidx.compose.ui.semantics.toggleableState
import androidx.compose.ui.state.ToggleableState

/**
 * Configure component to make it toggleable via input and accessibility events
 *
 * This version has no [MutableInteractionSource] or [Indication] parameters, the default indication
 * from [LocalIndication] will be used. To specify [MutableInteractionSource] or [Indication], use
 * the other overload.
 *
 * If you are only creating this toggleable modifier inside composition, consider using the other
 * overload and explicitly passing `LocalIndication.current` for improved performance. For more
 * information see the documentation on the other overload.
 *
 * @sample androidx.compose.foundation.samples.ToggleableSample
 * @param value whether Toggleable is on or off
 * @param enabled whether or not this [toggleable] will handle input events and appear enabled for
 *   semantics purposes
 * @param role the type of user interface element. Accessibility services might use this to describe
 *   the element or do customizations
 * @param onValueChange callback to be invoked when toggleable is clicked, therefore the change of
 *   the state in requested.
 * @see [Modifier.triStateToggleable] if you require support for an indeterminate state.
 */
@Deprecated(
    message =
        "Replaced with new overload that only supports IndicationNodeFactory instances inside LocalIndication, and does not use composed",
    level = DeprecationLevel.HIDDEN,
)

Sources: [live-androidx-foundation-selection-toggleable-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 386–420)

        inspectorInfo =
            debugInspectorInfo {
                name = "triStateToggleable"
                properties["state"] = state
                properties["enabled"] = enabled
                properties["role"] = role
                properties["onClick"] = onClick
            }
    ) {
        val localIndication = LocalIndication.current
        val interactionSource =
            if (localIndication is IndicationNodeFactory) {
                // We can fast path here as it will be created inside clickable lazily
                null
            } else {
                // We need an interaction source to pass between the indication modifier and
                // clickable, so
                // by creating here we avoid another composed down the line
                remember { MutableInteractionSource() }
            }
        Modifier.triStateToggleable(
            state = state,
            interactionSource = interactionSource,
            indication = localIndication,
            enabled = enabled,
            role = role,
            onClick = onClick,
        )
    }

/**
 * Configure component to make it toggleable via input and accessibility events with three states:
 * On, Off and Indeterminate.
 *
 * TriStateToggleable should be used when there are dependent Toggleables associated to this

Sources: [live-androidx-foundation-selection-toggleable-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 421–455)

 * component and those can have different values.
 *
 * This overload will use the [Indication] from [LocalIndication]. Use the other overload to
 * explicitly provide an [Indication] instance. Note that this overload only supports
 * [IndicationNodeFactory] instances provided through [LocalIndication] - it is strongly recommended
 * to migrate to [IndicationNodeFactory], but you can use the other overload if you still need to
 * support [Indication] instances that are not [IndicationNodeFactory].
 *
 * If [interactionSource] is `null`, an internal [MutableInteractionSource] will be lazily created
 * only when needed. This reduces the performance cost of triStateToggleable during composition, as
 * creating the [indication] can be delayed until there is an incoming
 * [androidx.compose.foundation.interaction.Interaction]. If you are only passing a remembered
 * [MutableInteractionSource] and you are never using it outside of triStateToggleable, it is
 * recommended to instead provide `null` to enable lazy creation. If you need the [Indication] to be
 * created eagerly, provide a remembered [MutableInteractionSource].
 *
 * @sample androidx.compose.foundation.samples.TriStateToggleableSample
 * @param state current value for the component
 * @param enabled whether or not this [triStateToggleable] will handle input events and appear
 *   enabled for semantics purposes
 * @param role the type of user interface element. Accessibility services might use this to describe
 *   the element or do customizations
 * @param interactionSource [MutableInteractionSource] that will be used to dispatch
 *   [PressInteraction.Press] when this toggleable is pressed. If `null`, an internal
 *   [MutableInteractionSource] will be created if needed.
 * @param onClick will be called when user clicks the toggleable.
 * @see [Modifier.toggleable] if you want to support only two states: on and off
 */
public fun Modifier.triStateToggleable(
    state: ToggleableState,
    enabled: Boolean = true,
    role: Role? = null,
    interactionSource: MutableInteractionSource? = null,
    onClick: () -> Unit,
): Modifier {

Sources: [live-androidx-foundation-selection-toggleable-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 456–490)

    return this.then(
        TriStateToggleableElement(
            state = state,
            interactionSource = interactionSource,
            indicationNodeFactory = null,
            useLocalIndication = true,
            enabled = enabled,
            role = role,
            onClick = onClick,
        )
    )
}

/**
 * Configure component to make it toggleable via input and accessibility events with three states:
 * On, Off and Indeterminate.
 *
 * TriStateToggleable should be used when there are dependent Toggleables associated to this
 * component and those can have different values.
 *
 * If [interactionSource] is `null`, and [indication] is an [IndicationNodeFactory], an internal
 * [MutableInteractionSource] will be lazily created along with the [indication] only when needed.
 * This reduces the performance cost of triStateToggleable during composition, as creating the
 * [indication] can be delayed until there is an incoming
 * [androidx.compose.foundation.interaction.Interaction]. If you are only passing a remembered
 * [MutableInteractionSource] and you are never using it outside of triStateToggleable, it is
 * recommended to instead provide `null` to enable lazy creation. If you need [indication] to be
 * created eagerly, provide a remembered [MutableInteractionSource].
 *
 * If [indication] is _not_ an [IndicationNodeFactory], and instead implements the deprecated
 * [Indication.rememberUpdatedInstance] method, you should explicitly pass a remembered
 * [MutableInteractionSource] as a parameter for [interactionSource] instead of `null`, as this
 * cannot be lazily created inside triStateToggleable.
 *
 * @sample androidx.compose.foundation.samples.TriStateToggleableSample

Sources: [live-androidx-foundation-selection-toggleable-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 491–525)

 * @param state current value for the component
 * @param interactionSource [MutableInteractionSource] that will be used to dispatch
 *   [PressInteraction.Press] when this triStateToggleable is pressed. If `null`, an internal
 *   [MutableInteractionSource] will be created if needed.
 * @param indication indication to be shown when modified element is pressed. Be default, indication
 *   from [LocalIndication] will be used. Pass `null` to show no indication, or current value from
 *   [LocalIndication] to show theme default
 * @param enabled whether or not this [triStateToggleable] will handle input events and appear
 *   enabled for semantics purposes
 * @param role the type of user interface element. Accessibility services might use this to describe
 *   the element or do customizations
 * @param onClick will be called when user clicks the toggleable.
 * @see [Modifier.toggleable] if you want to support only two states: on and off
 */
public fun Modifier.triStateToggleable(
    state: ToggleableState,
    interactionSource: MutableInteractionSource?,
    indication: Indication?,
    enabled: Boolean = true,
    role: Role? = null,
    onClick: () -> Unit,
): Modifier =
    clickableWithIndicationIfNeeded(
        interactionSource = interactionSource,
        indication = indication,
    ) { intSource, indicationNodeFactory ->
        TriStateToggleableElement(
            state = state,
            interactionSource = intSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = false,
            enabled = enabled,
            role = role,
            onClick = onClick,
        )

Sources: [live-androidx-foundation-selection-toggleable-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 526–560)

    }

private class TriStateToggleableElement(
    private val state: ToggleableState,
    private val interactionSource: MutableInteractionSource?,
    private val indicationNodeFactory: IndicationNodeFactory?,
    private val useLocalIndication: Boolean,
    private val enabled: Boolean,
    private val role: Role?,
    private val onClick: () -> Unit,
) : ModifierNodeElement<TriStateToggleableNode>() {
    override fun create() =
        TriStateToggleableNode(
            state = state,
            interactionSource = interactionSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = useLocalIndication,
            enabled = enabled,
            role = role,
            onClick = onClick,
        )

    override fun update(node: TriStateToggleableNode) {
        node.update(
            state = state,
            interactionSource = interactionSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = useLocalIndication,
            enabled = enabled,
            role = role,
            onClick = onClick,
        )
    }

    // Defined in the factory functions with inspectable

Sources: [live-androidx-foundation-selection-toggleable-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 561–595)

    override fun InspectorInfo.inspectableProperties() {
        name = "triStateToggleable"
        properties["state"] = state
        properties["interactionSource"] = interactionSource
        properties["indicationNodeFactory"] = indicationNodeFactory
        properties["enabled"] = enabled
        properties["role"] = role
        properties["onClick"] = onClick
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other === null) return false
        if (this::class != other::class) return false

        other as TriStateToggleableElement

        if (state != other.state) return false
        if (interactionSource != other.interactionSource) return false
        if (indicationNodeFactory != other.indicationNodeFactory) return false
        if (useLocalIndication != other.useLocalIndication) return false
        if (enabled != other.enabled) return false
        if (role != other.role) return false
        if (onClick !== other.onClick) return false

        return true
    }

    override fun hashCode(): Int {
        var result = state.hashCode()
        result = 31 * result + (interactionSource?.hashCode() ?: 0)
        result = 31 * result + (indicationNodeFactory?.hashCode() ?: 0)
        result = 31 * result + useLocalIndication.hashCode()
        result = 31 * result + enabled.hashCode()
        result = 31 * result + (role?.hashCode() ?: 0)

Sources: [live-androidx-foundation-selection-toggleable-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 596–630)

        result = 31 * result + onClick.hashCode()
        return result
    }
}

private class TriStateToggleableNode(
    private var state: ToggleableState,
    interactionSource: MutableInteractionSource?,
    indicationNodeFactory: IndicationNodeFactory?,
    useLocalIndication: Boolean,
    enabled: Boolean,
    role: Role?,
    onClick: () -> Unit,
) :
    ClickableNode(
        interactionSource = interactionSource,
        indicationNodeFactory = indicationNodeFactory,
        useLocalIndication = useLocalIndication,
        enabled = enabled,
        onClickLabel = null,
        role = role,
        onClick = onClick,
    ) {
    fun update(
        state: ToggleableState,
        interactionSource: MutableInteractionSource?,
        indicationNodeFactory: IndicationNodeFactory?,
        useLocalIndication: Boolean,
        enabled: Boolean,
        role: Role?,
        onClick: () -> Unit,
    ) {
        if (this.state != state) {
            this.state = state
            invalidateSemantics()

Sources: [live-androidx-foundation-selection-toggleable-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 631–664)

        }
        super.update(
            interactionSource = interactionSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = useLocalIndication,
            enabled = enabled,
            onClickLabel = null,
            role = role,
            onClick = onClick,
        )
    }

    override fun SemanticsPropertyReceiver.applyAdditionalSemantics() {
        this.toggleableState = state
        this.contentDataType = ContentDataType.Toggle
        // If the toggle state is not indeterminate, set the boolean value on the fillableData
        // semantic property.
        if (state != ToggleableState.Indeterminate) {
            FillableData.createFromBoolean(state == ToggleableState.On)?.let {
                this.fillableData = it
            }
        }
        this.onFillData { fillableData ->
            if (!enabled || state == ToggleableState.Indeterminate) return@onFillData false
            fillableData.booleanValue?.let { target ->
                if (state != ToggleableState(target)) {
                    onClick()
                }
                true
            } ?: false
        }
    }
}


Sources: [live-androidx-foundation-selection-toggleable-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)

## Toggleable state and input source (lines 71–105)

public fun Modifier.toggleable(
    value: Boolean,
    enabled: Boolean = true,
    role: Role? = null,
    onValueChange: (Boolean) -> Unit,
): Modifier =
    composed(
        inspectorInfo =
            debugInspectorInfo {
                name = "toggleable"
                properties["value"] = value
                properties["enabled"] = enabled
                properties["role"] = role
                properties["onValueChange"] = onValueChange
            }
    ) {
        val localIndication = LocalIndication.current
        val interactionSource =
            if (localIndication is IndicationNodeFactory) {
                // We can fast path here as it will be created inside clickable lazily
                null
            } else {
                // We need an interaction source to pass between the indication modifier and
                // clickable, so
                // by creating here we avoid another composed down the line
                remember { MutableInteractionSource() }
            }
        Modifier.toggleable(
            value = value,
            interactionSource = interactionSource,
            indication = localIndication,
            enabled = enabled,
            role = role,
            onValueChange = onValueChange,
        )

Sources: [live-androidx-foundation-selection-toggleable-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/e70f5406a4fa24bd3c2dfb27832ab5fa87c9c5c6/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)
