---
type: reference
title: Slider
description: "Public source: https://developer.android.com/develop/ui/compose/components/slider"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-slider-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/slider#additional-resources
    revision: web:compose-guide-components-slider:content@sha256:07c03852937227d840dc585ff5027db4226bf0d0f42a281f5b8a2a4fc47db4bc
    sha256: c58f584917c26b87393751417c554a2a41767de1d0757ff519840bb0047b7c07
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Material UI docs
  - id: live-compose-guide-components-slider-advanced-implementation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/slider#advanced-implementation
    revision: web:compose-guide-components-slider:content@sha256:07c03852937227d840dc585ff5027db4226bf0d0f42a281f5b8a2a4fc47db4bc
    sha256: 826600c52fe5080c5d907f8b963be136066ed75f0847778c4dbae45aa7e8edd4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When implementing a more complex slider, you can additionally make use of the following parameters.

      colors: An instance of SliderColors that lets you control the colors of the slider.

      valueRange: The range of values that the slider can take.

      steps: The number of notches on the slider to which the thumb snaps.

      The following snippet implements a slider that has three steps, with a range from 0.0 to 50.0. Because the thumb snaps to each step, this slider is discrete.

      @Preview
      @Composable
      fun SliderAdvancedExample() {
          var sliderPosition by remember { mutableFloatStateOf(25f) }
          Column {
              Slider(
                  value = sliderPosition,
                  onValueChange = { sliderPosition = it },
                  colors = SliderDefaults.colors(
                      thumbColor = MaterialTheme.colorScheme.secondary,
                      activeTrackColor = MaterialTheme.colorScheme.secondary,
                      inactiveTrackColor = MaterialTheme.colorScheme.secondaryContainer,
                  ),
                  steps = 3,
                  valueRange = 0f..50f
              )
              Text(text = sliderPosition.toString())
          }
      }Slider.kt

      The implementation appears as follows:

      Figure 3.

      A slider with steps and a set value range.
  - id: live-compose-guide-components-slider-basic-implementation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/slider#basic-implementation
    revision: web:compose-guide-components-slider:content@sha256:07c03852937227d840dc585ff5027db4226bf0d0f42a281f5b8a2a4fc47db4bc
    sha256: 5684742d54431882cabb7f5eb8416e331714f7e81e75d1de2550f986e35bac13
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      See the Slider reference for a full API definition. Some of the key parameters for the Slider composable are the following:

      value: The current value of the slider.

      onValueChange: A lambda that gets called every time the value is changed.

      enabled: A boolean value that indicates if the user can interact with the slider.

      The following example is a straightforward slider. It allows the user to select a value from 0.0 to 1.0. Because the user can select any value in that range, the slider is continuous.

      @Preview
      @Composable
      fun SliderMinimalExample() {
          var sliderPosition by remember { mutableFloatStateOf(0.5f) }
          Column {
              Slider(
                  value = sliderPosition,
                  onValueChange = { sliderPosition = it }
              )
              Text(text = sliderPosition.toString())
          }
      }Slider.kt

      This implementation appears as follows:

      Figure 2.

      A basic implementation of a slider.
  - id: live-compose-guide-components-slider-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/slider#main-content
    revision: web:compose-guide-components-slider:content@sha256:07c03852937227d840dc585ff5027db4226bf0d0f42a281f5b8a2a4fc47db4bc
    sha256: 8c6b4eef443cbbcfa2b1312453bf2b81f4068029f87a3c0c3eb94232cc7945a6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The Slider composable allows users to make selections from a range of values. You might use a slider to let the user do the following:

      Adjust settings that use a range of values, such as volume, and brightness.

      Filter data in a graph, as when setting a price range.

      User input, like setting a rating in a review.

      The slider contains a track, thumb, value label, and tick marks:

      Track: The track is the horizontal bar that represents the range of values the slider can take.

      Thumb: The thumb is a draggable control element on the slider that allows the user to select a specific value within the range defined by the track.

      Tick marks: Tick marks are optional visual markers or indicators that appear along the track of the slider.

      Figure 1.

      An implementation of a slider.
  - id: live-compose-guide-components-slider-range-slider-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/slider#range-slider
    revision: web:compose-guide-components-slider:content@sha256:07c03852937227d840dc585ff5027db4226bf0d0f42a281f5b8a2a4fc47db4bc
    sha256: cb337a34c1542d7af352f09161df43c726e426b84300a1a2e13613d6ded830b7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can also use the dedicated RangeSlider composable. This allows the user to select two values. This can be useful in cases such as when the user wishes to select a minimum and maximum price.

      The following example is a relatively straightforward example of a continuous range slider.

      @Preview
      @Composable
      fun RangeSliderExample() {
          var sliderPosition by remember { mutableStateOf(20f..80f) }
          Column {
              RangeSlider(
                  value = sliderPosition,
                  onValueChange = { range -> sliderPosition = range },
                  valueRange = 0f..100f,
                  onValueChangeFinished = {
                      // launch some business logic update with the state you hold
                      // viewModel.updateSelectedSliderValue(sliderPosition)
                  },
              )
              Text(text = sliderPosition.toString())
          }
      }Slider.kt

      Figure 4.

      An implementation of a range slider.
compose:
  id: live-compose-guide-components-slider
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-slider-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-slider-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-components-slider-advanced-implementation
      title: Advanced implementation
      aliases:
        - androidx.compose.material3.Slider
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-slider-advanced-implementation-source
      relatedIds: []
    - id: live-compose-guide-components-slider-basic-implementation
      title: Basic implementation
      aliases:
        - androidx.compose.material3.Slider
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-slider-basic-implementation-source
      relatedIds: []
    - id: live-compose-guide-components-slider-main-content
      title: Introduction
      aliases:
        - androidx.compose.material3.Slider
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-slider-main-content-source
      relatedIds: []
    - id: live-compose-guide-components-slider-range-slider
      title: Range slider
      aliases:
        - androidx.compose.material3.Slider
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-slider-range-slider-source
      relatedIds: []
---

# Slider

Public source: https://developer.android.com/develop/ui/compose/components/slider

## Additional resources

Material UI docs

Sources: [live-compose-guide-components-slider-additional-resources-source](https://developer.android.com/develop/ui/compose/components/slider#additional-resources)

## Advanced implementation

When implementing a more complex slider, you can additionally make use of the following parameters.

colors: An instance of SliderColors that lets you control the colors of the slider.

valueRange: The range of values that the slider can take.

steps: The number of notches on the slider to which the thumb snaps.

The following snippet implements a slider that has three steps, with a range from 0.0 to 50.0. Because the thumb snaps to each step, this slider is discrete.

@Preview
@Composable
fun SliderAdvancedExample() {
    var sliderPosition by remember { mutableFloatStateOf(25f) }
    Column {
        Slider(
            value = sliderPosition,
            onValueChange = { sliderPosition = it },
            colors = SliderDefaults.colors(
                thumbColor = MaterialTheme.colorScheme.secondary,
                activeTrackColor = MaterialTheme.colorScheme.secondary,
                inactiveTrackColor = MaterialTheme.colorScheme.secondaryContainer,
            ),
            steps = 3,
            valueRange = 0f..50f
        )
        Text(text = sliderPosition.toString())
    }
}Slider.kt

The implementation appears as follows:

Figure 3.

A slider with steps and a set value range.

Sources: [live-compose-guide-components-slider-advanced-implementation-source](https://developer.android.com/develop/ui/compose/components/slider#advanced-implementation)

## Basic implementation

See the Slider reference for a full API definition. Some of the key parameters for the Slider composable are the following:

value: The current value of the slider.

onValueChange: A lambda that gets called every time the value is changed.

enabled: A boolean value that indicates if the user can interact with the slider.

The following example is a straightforward slider. It allows the user to select a value from 0.0 to 1.0. Because the user can select any value in that range, the slider is continuous.

@Preview
@Composable
fun SliderMinimalExample() {
    var sliderPosition by remember { mutableFloatStateOf(0.5f) }
    Column {
        Slider(
            value = sliderPosition,
            onValueChange = { sliderPosition = it }
        )
        Text(text = sliderPosition.toString())
    }
}Slider.kt

This implementation appears as follows:

Figure 2.

A basic implementation of a slider.

Sources: [live-compose-guide-components-slider-basic-implementation-source](https://developer.android.com/develop/ui/compose/components/slider#basic-implementation)

## Introduction

The Slider composable allows users to make selections from a range of values. You might use a slider to let the user do the following:

Adjust settings that use a range of values, such as volume, and brightness.

Filter data in a graph, as when setting a price range.

User input, like setting a rating in a review.

The slider contains a track, thumb, value label, and tick marks:

Track: The track is the horizontal bar that represents the range of values the slider can take.

Thumb: The thumb is a draggable control element on the slider that allows the user to select a specific value within the range defined by the track.

Tick marks: Tick marks are optional visual markers or indicators that appear along the track of the slider.

Figure 1.

An implementation of a slider.

Sources: [live-compose-guide-components-slider-main-content-source](https://developer.android.com/develop/ui/compose/components/slider#main-content)

## Range slider

You can also use the dedicated RangeSlider composable. This allows the user to select two values. This can be useful in cases such as when the user wishes to select a minimum and maximum price.

The following example is a relatively straightforward example of a continuous range slider.

@Preview
@Composable
fun RangeSliderExample() {
    var sliderPosition by remember { mutableStateOf(20f..80f) }
    Column {
        RangeSlider(
            value = sliderPosition,
            onValueChange = { range -> sliderPosition = range },
            valueRange = 0f..100f,
            onValueChangeFinished = {
                // launch some business logic update with the state you hold
                // viewModel.updateSelectedSliderValue(sliderPosition)
            },
        )
        Text(text = sliderPosition.toString())
    }
}Slider.kt

Figure 4.

An implementation of a range slider.

Sources: [live-compose-guide-components-slider-range-slider-source](https://developer.android.com/develop/ui/compose/components/slider#range-slider)
