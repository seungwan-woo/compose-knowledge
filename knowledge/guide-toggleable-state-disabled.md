---
type: reference
title: "Guidance: Pass current toggle state and disabled behavior explicitly"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: contract-toggleable-input-disabled-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/f6580aa992ca1d2c58609f2db50027cd0bcf43cc/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: f6580aa992ca1d2c58609f2db50027cd0bcf43cc
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
    resource: https://android.googlesource.com/platform/frameworks/support/+/f6580aa992ca1d2c58609f2db50027cd0bcf43cc/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt
    revision: f6580aa992ca1d2c58609f2db50027cd0bcf43cc
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
compose:
  id: guide-toggleable-state-disabled
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.selection.toggleable
  sections:
    - id: guide-toggleable-state-disabled
      title: "Guidance: Pass current toggle state and disabled behavior explicitly"
      aliases:
        - androidx.compose.foundation.selection.toggleable
        - toggle state
        - disabled semantics
        - 토글 상태
        - 비활성
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - contract-toggleable-input-disabled-source
        - contract-toggleable-node-state-source
      relatedIds:
        - contract-toggleable-input-disabled
        - contract-toggleable-node-state
---

# Guidance: Pass current toggle state and disabled behavior explicitly

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Pass current toggle state and disabled behavior explicitly

Guidance: Pass toggleable the caller’s current value and enabled flag. Its click callback requests !value; the caller must decide whether to update state and supply the new value. The node updates its current value and callback and publishes ToggleableState(value) semantics. enabled controls input handling and whether semantics present it as enabled. Limitation: onValueChange is a request, not an automatic mutation of caller state; this contract does not disable unrelated handlers elsewhere.

Sources: [contract-toggleable-input-disabled-source](https://android.googlesource.com/platform/frameworks/support/+/f6580aa992ca1d2c58609f2db50027cd0bcf43cc/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt), [contract-toggleable-node-state-source](https://android.googlesource.com/platform/frameworks/support/+/f6580aa992ca1d2c58609f2db50027cd0bcf43cc/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt)
