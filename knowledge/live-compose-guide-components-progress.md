---
type: reference
title: Progress indicators
description: "Public source: https://developer.android.com/develop/ui/compose/components/progress"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-progress-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#additional-resources
    revision: web:compose-guide-components-progress:content@sha256:668a5cff4ebbfb569370e990cf3af04449e5e1b4b997e6ce4e29025fa61c5e3d
    sha256: c58f584917c26b87393751417c554a2a41767de1d0757ff519840bb0047b7c07
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Material UI docs
  - id: live-compose-guide-components-progress-api-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#api
    revision: web:compose-guide-components-progress:content@sha256:668a5cff4ebbfb569370e990cf3af04449e5e1b4b997e6ce4e29025fa61c5e3d
    sha256: f77274ea3c74ff6488b94486e48f88fa292e7f558964fe8f5cdc1de825a31d5e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Although there are several composables you can use to create progress indicators consistent with Material Design, their parameters don't differ greatly. Among the key parameters you should keep in mind are the following:

      progress: The current progress that the indicator displays. Pass a Float between 0.0 and 1.0.

      color: The color of the actual indicator. That is, the part of the component that reflects progress and which fully encompasses the component when progress is complete.

      trackColor: The color of the track over which the indicator is drawn.
  - id: live-compose-guide-components-progress-determinate-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#determinate
    revision: web:compose-guide-components-progress:content@sha256:668a5cff4ebbfb569370e990cf3af04449e5e1b4b997e6ce4e29025fa61c5e3d
    sha256: 04a22b30b7f89ae7352a369a38df7bb7d57954a2e5c52d50e3a5b5f04a94a032
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A determinate indicator reflects exactly how complete an action is. Use either the LinearProgressIndicator or CircularProgressIndicator composables and pass a value for the progress parameter.

      The following snippet provides a relatively detailed example. When the user presses the button, the app replaces it with the progress indicator and launches a coroutine that gradually increases the value of progress. This causes the progress indicator to iterate up in turn.

      @Composable
      fun LinearDeterminateIndicator() {
          var currentProgress by remember { mutableFloatStateOf(0f) }
          var loading by remember { mutableStateOf(false) }
          val scope = rememberCoroutineScope() // Create a coroutine scope
          // Animate between progress updates so the indicator fills smoothly.
          val animatedProgress by animateFloatAsState(
              targetValue = currentProgress,
              animationSpec = ProgressIndicatorDefaults.ProgressAnimationSpec,
          )

          if (loading) {
              LinearProgressIndicator(
                  progress = { animatedProgress },
                  modifier = Modifier.fillMaxWidth(),
              )
          } else {
              Button(onClick = {
                  loading = true
                  scope.launch {
                      loadProgress { progress ->
                          currentProgress = progress
                      }
                      loading = false // Reset loading when the coroutine finishes
                  }
              }) {
                  Text("Start loading")
              }
          }
      }

      /** Iterate the progress value */
      suspend fun loadProgress(updateProgress: (Float) -> Unit) {
          for (i in 1..100) {
              updateProgress(i.toFloat() / 100)
              delay(100)
          }
      }ProgressIndicator.kt

      When loading is partially complete, the linear indicator in the preceding example appears as follows:

      Likewise, the circular indicator appears as follows:
  - id: live-compose-guide-components-progress-indeterminate-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#indeterminate
    revision: web:compose-guide-components-progress:content@sha256:668a5cff4ebbfb569370e990cf3af04449e5e1b4b997e6ce4e29025fa61c5e3d
    sha256: 61c0d9b222ef6ff12689570e13c9a005757ea8a90c3dd773678ae3742178979b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      An indeterminate indicator does not reflect how close to completion an operation is. Rather, it uses motion to indicate to the user that processing is ongoing, though without specifying any degree of completion.

      To create an indeterminate progress indicator, use the LinearProgressIndicator or CircularProgressIndicator composable, but don't pass in a value for progress. The following example demonstrates how you can toggle an indeterminate indicator with a button press.

      @Composable
      fun IndeterminateCircularIndicator() {
          var loading by remember { mutableStateOf(false) }

          if (loading) {
              CircularProgressIndicator(
                  modifier = Modifier.size(64.dp),
                  color = MaterialTheme.colorScheme.secondary,
                  trackColor = MaterialTheme.colorScheme.surfaceVariant,
              )
          } else {
              Button(onClick = { loading = true }) {
                  Text("Start loading")
              }
          }
      }ProgressIndicator.kt

      The following is an example of this implementation when the indicator is active:

      The following is an example of the same implementation but with LinearProgressIndicator instead of CircularProgressIndicator.
  - id: live-compose-guide-components-progress-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#main-content
    revision: web:compose-guide-components-progress:content@sha256:668a5cff4ebbfb569370e990cf3af04449e5e1b4b997e6ce4e29025fa61c5e3d
    sha256: 9060810e35692eefaf37a558e80dd01510223f7823de1bd9dfb25a641621bff0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Progress indicators visually surface the status of an operation. They use motion to bring to the user's attention how near completion the process is, such as loading or processing data. They can also signify that processing is taking place, without reference to how close to completion it might be.

      Consider these three use cases where you might use a progress indicator:

      Loading content: While fetching content from a network, such as loading an image or data for a user profile.

      File upload: Give the user feedback on how long the upload might take.

      Long processing: While an app is processing a large amount of data, convey to the user how much of the total is complete.

      In Material Design, there are two types of progress indicator:

      Determinate: Displays exactly how much progress has been made.

      Indeterminate: Animates continually without regard to progress.

      Likewise, a progress indicator can take one of the two following forms:

      Linear: A horizontal bar that fills from left to right.

      Circular: A circle whose stroke grows in length until it encompasses the full circumference of the circle.

      Figure 1.

      The two types of progress indicators.
compose:
  id: live-compose-guide-components-progress
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-progress-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-components-progress-api
      title: API Surface
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-api-source
      relatedIds: []
    - id: live-compose-guide-components-progress-determinate
      title: Determinate indicators
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
        - androidx.compose.material3.CircularProgressIndicator
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-determinate-source
      relatedIds: []
    - id: live-compose-guide-components-progress-indeterminate
      title: Indeterminate indicators
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
        - androidx.compose.material3.CircularProgressIndicator
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-indeterminate-source
      relatedIds: []
    - id: live-compose-guide-components-progress-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-main-content-source
      relatedIds: []
---

# Progress indicators

Public source: https://developer.android.com/develop/ui/compose/components/progress

## Additional resources

Material UI docs

Sources: [live-compose-guide-components-progress-additional-resources-source](https://developer.android.com/develop/ui/compose/components/progress#additional-resources)

## API Surface

Although there are several composables you can use to create progress indicators consistent with Material Design, their parameters don't differ greatly. Among the key parameters you should keep in mind are the following:

progress: The current progress that the indicator displays. Pass a Float between 0.0 and 1.0.

color: The color of the actual indicator. That is, the part of the component that reflects progress and which fully encompasses the component when progress is complete.

trackColor: The color of the track over which the indicator is drawn.

Sources: [live-compose-guide-components-progress-api-source](https://developer.android.com/develop/ui/compose/components/progress#api)

## Determinate indicators

A determinate indicator reflects exactly how complete an action is. Use either the LinearProgressIndicator or CircularProgressIndicator composables and pass a value for the progress parameter.

The following snippet provides a relatively detailed example. When the user presses the button, the app replaces it with the progress indicator and launches a coroutine that gradually increases the value of progress. This causes the progress indicator to iterate up in turn.

@Composable
fun LinearDeterminateIndicator() {
    var currentProgress by remember { mutableFloatStateOf(0f) }
    var loading by remember { mutableStateOf(false) }
    val scope = rememberCoroutineScope() // Create a coroutine scope
    // Animate between progress updates so the indicator fills smoothly.
    val animatedProgress by animateFloatAsState(
        targetValue = currentProgress,
        animationSpec = ProgressIndicatorDefaults.ProgressAnimationSpec,
    )

    if (loading) {
        LinearProgressIndicator(
            progress = { animatedProgress },
            modifier = Modifier.fillMaxWidth(),
        )
    } else {
        Button(onClick = {
            loading = true
            scope.launch {
                loadProgress { progress ->
                    currentProgress = progress
                }
                loading = false // Reset loading when the coroutine finishes
            }
        }) {
            Text("Start loading")
        }
    }
}

/** Iterate the progress value */
suspend fun loadProgress(updateProgress: (Float) -> Unit) {
    for (i in 1..100) {
        updateProgress(i.toFloat() / 100)
        delay(100)
    }
}ProgressIndicator.kt

When loading is partially complete, the linear indicator in the preceding example appears as follows:

Likewise, the circular indicator appears as follows:

Sources: [live-compose-guide-components-progress-determinate-source](https://developer.android.com/develop/ui/compose/components/progress#determinate)

## Indeterminate indicators

An indeterminate indicator does not reflect how close to completion an operation is. Rather, it uses motion to indicate to the user that processing is ongoing, though without specifying any degree of completion.

To create an indeterminate progress indicator, use the LinearProgressIndicator or CircularProgressIndicator composable, but don't pass in a value for progress. The following example demonstrates how you can toggle an indeterminate indicator with a button press.

@Composable
fun IndeterminateCircularIndicator() {
    var loading by remember { mutableStateOf(false) }

    if (loading) {
        CircularProgressIndicator(
            modifier = Modifier.size(64.dp),
            color = MaterialTheme.colorScheme.secondary,
            trackColor = MaterialTheme.colorScheme.surfaceVariant,
        )
    } else {
        Button(onClick = { loading = true }) {
            Text("Start loading")
        }
    }
}ProgressIndicator.kt

The following is an example of this implementation when the indicator is active:

The following is an example of the same implementation but with LinearProgressIndicator instead of CircularProgressIndicator.

Sources: [live-compose-guide-components-progress-indeterminate-source](https://developer.android.com/develop/ui/compose/components/progress#indeterminate)

## Introduction

Progress indicators visually surface the status of an operation. They use motion to bring to the user's attention how near completion the process is, such as loading or processing data. They can also signify that processing is taking place, without reference to how close to completion it might be.

Consider these three use cases where you might use a progress indicator:

Loading content: While fetching content from a network, such as loading an image or data for a user profile.

File upload: Give the user feedback on how long the upload might take.

Long processing: While an app is processing a large amount of data, convey to the user how much of the total is complete.

In Material Design, there are two types of progress indicator:

Determinate: Displays exactly how much progress has been made.

Indeterminate: Animates continually without regard to progress.

Likewise, a progress indicator can take one of the two following forms:

Linear: A horizontal bar that fills from left to right.

Circular: A circle whose stroke grows in length until it encompasses the full circumference of the circle.

Figure 1.

The two types of progress indicators.

Sources: [live-compose-guide-components-progress-main-content-source](https://developer.android.com/develop/ui/compose/components/progress#main-content)
