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
    revision: web:compose-guide-components-progress:content@sha256:d8cfd0eb5a481eb90eaf01ae1bfea9a098cfbd48985dd1a0d9755c3ce983412b
    sha256: f77274ea3c74ff6488b94486e48f88fa292e7f558964fe8f5cdc1de825a31d5e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Although there are several composables you can use to create progress indicators consistent with Material Design, their parameters don't differ greatly. Among the key parameters you should keep in mind are the following:

      progress: The current progress that the indicator displays. Pass a Float between 0.0 and 1.0.

      color: The color of the actual indicator. That is, the part of the component that reflects progress and which fully encompasses the component when progress is complete.

      trackColor: The color of the track over which the indicator is drawn.
  - id: live-compose-guide-components-progress-determinate-circular-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#determinate-circular
    revision: web:compose-guide-components-progress:content@sha256:d8cfd0eb5a481eb90eaf01ae1bfea9a098cfbd48985dd1a0d9755c3ce983412b
    sha256: 33a931f507093d0eadf58055af7eaf2db3544462be6aa42f269f161dd496d85d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The wavy shape can make longer processes feel less static and is best used when a more expressive style is appropriate. The following snippet demonstrates how to implement a determinate CircularWavyProgressIndicator controlled by a Slider:

      @OptIn(ExperimentalMaterial3Api::class)
      @Composable
      fun CircularWavyProgressIndicatorSample() {
          val sliderState = rememberSliderState(0.1f)
          val animatedProgress by animateFloatAsState(
                  targetValue = sliderState.value,
                  animationSpec = ProgressIndicatorDefaults.ProgressAnimationSpec,
              )

          Column(horizontalAlignment = Alignment.CenterHorizontally) {
              CircularWavyProgressIndicator(progress = { animatedProgress })
              Spacer(Modifier.requiredHeight(30.dp))
              Text("Set progress:")
              Slider(
                  state = sliderState,
                  onValueChange = { sliderState.value = it },
                  modifier = Modifier.width(300.dp),
              )
          }
      }ProgressIndicator.kt
  - id: live-compose-guide-components-progress-determinate-indicators-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#determinate-indicators
    revision: web:compose-guide-components-progress:content@sha256:d8cfd0eb5a481eb90eaf01ae1bfea9a098cfbd48985dd1a0d9755c3ce983412b
    sha256: 4bb0d601b0f3ccf3d38fe218cba679530a69845da2a6521ac9afa6365e6043a4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      currentProgress by remember { mutableFloatStateOf(0f) }
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

      Figure 4.

      A linear determinate progress indicator.

      Likewise, the circular indicator appears as follows:

      Figure 5.

      A circular determinate progress indicator.
  - id: live-compose-guide-components-progress-determinate-indicators-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#determinate-indicators
    revision: web:compose-guide-components-progress:content@sha256:d8cfd0eb5a481eb90eaf01ae1bfea9a098cfbd48985dd1a0d9755c3ce983412b
    sha256: de443e0d7c81952644fe5ebbe2c397b6ead3fc1743f26dcaa62fbc93d6ae21e5
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A determinate indicator reflects exactly how complete an action is. Use either the LinearProgressIndicator or CircularProgressIndicator composables and pass a value for the progress parameter.

      The following snippet demonstrates how to implement a determinate LinearProgressIndicator controlled by a Slider:

      @OptIn(ExperimentalMaterial3Api::class)
      @Composable
      fun LinearProgressIndicatorSample() {
          val sliderState = rememberSliderState(0.1f)
          val animatedProgress by animateFloatAsState(
                  targetValue = sliderState.value,
                  animationSpec = ProgressIndicatorDefaults.ProgressAnimationSpec,
              )

          Column(horizontalAlignment = Alignment.CenterHorizontally) {
              LinearProgressIndicator(progress = { animatedProgress })
              Spacer(Modifier.requiredHeight(30.dp))
              Text("Set progress:")
              Slider(
                  state = sliderState,
                  onValueChange = { sliderState.value = it },
                  modifier = Modifier.width(300.dp),
              )
          }
      }ProgressIndicator.kt

      The following snippet demonstrates how to implement a determinate CircularProgressIndicator controlled by a Slider:

      @OptIn(ExperimentalMaterial3Api::class)
      @Composable
      fun CircularProgressIndicatorSample() {
          val sliderState = rememberSliderState(0.1f)
          val animatedProgress by animateFloatAsState(
                  targetValue = sliderState.value,
                  animationSpec = ProgressIndicatorDefaults.ProgressAnimationSpec,
              )

          Column(horizontalAlignment = Alignment.CenterHorizontally) {
              CircularProgressIndicator(progress = { animatedProgress })
              Spacer(Modifier.requiredHeight(30.dp))
              Text("Set progress:")
              Slider(
                  state = sliderState,
                  onValueChange = { sliderState.value = it },
                  modifier = Modifier.width(300.dp),
              )
          }
      }ProgressIndicator.kt

      The following snippet provides a relatively detailed example. When the user presses the button, the app replaces it with the progress indicator and launches a coroutine that gradually increases the value of progress. This causes the progress indicator to iterate up in turn.

      @Composable
      fun LinearDeterminateIndicator() {
          var
  - id: live-compose-guide-components-progress-determinate-linear-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#determinate-linear
    revision: web:compose-guide-components-progress:content@sha256:d8cfd0eb5a481eb90eaf01ae1bfea9a098cfbd48985dd1a0d9755c3ce983412b
    sha256: df60c45a1e8771529e14b2a154b7c62afc17ac87d41ebe135bc9a52d12d96993
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      By default, when using a wavy progress indicator, a wave speed is applied to create a constant wave motion, even in determinate mode. You can turn this wave motion off by passing 0.dp to waveSpeed.

      The following snippet demonstrates how to implement a determinate LinearWavyProgressIndicator controlled by a Slider:

      @OptIn(ExperimentalMaterial3Api::class)
      @Composable
      fun LinearWavyProgressIndicatorSample() {
          val sliderState = rememberSliderState(0.1f)
          val animatedProgress by animateFloatAsState(
                  targetValue = sliderState.value,
                  animationSpec = ProgressIndicatorDefaults.ProgressAnimationSpec,
              )

          Column(horizontalAlignment = Alignment.CenterHorizontally) {
              LinearWavyProgressIndicator(progress = { animatedProgress })
              Spacer(Modifier.requiredHeight(30.dp))
              Text("Set progress:")
              Slider(
                  state = sliderState,
                  onValueChange = { sliderState.value = it },
                  modifier = Modifier.width(300.dp),
              )
          }
      }ProgressIndicator.kt
  - id: live-compose-guide-components-progress-indeterminate-circular-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#indeterminate-circular
    revision: web:compose-guide-components-progress:content@sha256:d8cfd0eb5a481eb90eaf01ae1bfea9a098cfbd48985dd1a0d9755c3ce983412b
    sha256: da06d40925c6b44eb39d560430a05637b8345461c946ff843e67f515c7034e58
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Circular progress indicators should be centered directly on the container or page that's loading, such as a button or card. The following snippet demonstrates how to implement an indeterminate CircularWavyProgressIndicator:

      @Composable
      fun IndeterminateCircularWavyProgressIndicatorSample() {
          Column(horizontalAlignment = Alignment.CenterHorizontally) { CircularWavyProgressIndicator() }
      }ProgressIndicator.kt
  - id: live-compose-guide-components-progress-indeterminate-indicators-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#indeterminate-indicators
    revision: web:compose-guide-components-progress:content@sha256:d8cfd0eb5a481eb90eaf01ae1bfea9a098cfbd48985dd1a0d9755c3ce983412b
    sha256: 68ebf9d75b3245a989e188dfef656aeb639af63e5b9daba7e9cd848c1ff6b3f8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      An indeterminate indicator does not reflect how close to completion an operation is. Rather, it uses motion to indicate to the user that processing is ongoing, though without specifying any degree of completion.

      To create an indeterminate progress indicator, use the LinearProgressIndicator or CircularProgressIndicator composable, but don't pass in a value for progress. The following snippet demonstrates how to implement an indeterminate LinearProgressIndicator:

      @Composable
      fun IndeterminateLinearProgressIndicatorSample() {
          Column(horizontalAlignment = Alignment.CenterHorizontally) { LinearProgressIndicator() }
      }ProgressIndicator.kt

      The following snippet demonstrates how to implement an indeterminate CircularProgressIndicator:

      @Composable
      fun IndeterminateCircularProgressIndicatorSample() {
          Column(horizontalAlignment = Alignment.CenterHorizontally) { CircularProgressIndicator() }
      }ProgressIndicator.kt

      The following example demonstrates how you can toggle an indeterminate indicator with a button press. This example also demonstrates how you can pass values for the color and trackColor parameters to customize the appearance of the indicator:

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

      Figure 6.

      A circular indeterminate progress indicator.

      The following is an example of the same implementation, but with LinearProgressIndicator instead of CircularProgressIndicator:

      Figure 7.

      A linear indeterminate progress indicator.
  - id: live-compose-guide-components-progress-indeterminate-linear-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#indeterminate-linear
    revision: web:compose-guide-components-progress:content@sha256:d8cfd0eb5a481eb90eaf01ae1bfea9a098cfbd48985dd1a0d9755c3ce983412b
    sha256: f137921af222ce11ce8f9d10c54a5a02d3b4119f54c798b6b25ca86d393ccbd7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use indeterminate indicators to show that a process is happening when the wait time is unknown. The following snippet demonstrates how to implement an indeterminate LinearWavyProgressIndicator:

      @Composable
      fun IndeterminateLinearWavyProgressIndicatorSample() {
          Column(horizontalAlignment = Alignment.CenterHorizontally) { LinearWavyProgressIndicator() }
      }ProgressIndicator.kt
  - id: live-compose-guide-components-progress-m3-expressive-update-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#m3-expressive-update
    revision: web:compose-guide-components-progress:content@sha256:d8cfd0eb5a481eb90eaf01ae1bfea9a098cfbd48985dd1a0d9755c3ce983412b
    sha256: 46e2a8c24f4681b81f7f09f8750f2e07bb0975fb8ed5f2f4623aee977dbb3caf
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Material 3 Expressive introduces LinearWavyProgressIndicator and CircularWavyProgressIndicator as additional options alongside the standard flat LinearProgressIndicator and CircularProgressIndicator. These indicators feature a rounded style and configurations for track height and wave shape. Choose the visual style that best fits your product.

      For more information about the M3 Expressive updates for progress indicators, see the Material Design 3 progress indicator guidelines.

      Figure 2.

      Material 3 Expressive progress indicator wavy shapes and variable track heights.

      Progress indicators have a rounded, colorful style and additional configurations to choose from, including a wavy shape and variable track height. The active indicator has two shape options: wavy and flat.
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
  - id: live-compose-guide-components-progress-wavy-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/progress#wavy
    revision: web:compose-guide-components-progress:content@sha256:d8cfd0eb5a481eb90eaf01ae1bfea9a098cfbd48985dd1a0d9755c3ce983412b
    sha256: ba59c772ba23a23fa19272f3d4aa666ec6805f7e0be7743883944b89fd18664b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Wavy progress indicators offer both determinate and indeterminate variants, and let you customize their appearance with wave parameters for more expressive visuals.

      Figure 3.

      Wavy progress indicators with expressive wave parameters.

      Wavy linear indicators increase the height of the overall container.

      There are two variants of wavy progress indicators: linear and circular.
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
      title: API surface
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-api-source
      relatedIds: []
    - id: live-compose-guide-components-progress-determinate-circular
      title: Determinate circular wavy progress indicator
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-determinate-circular-source
      relatedIds: []
    - id: live-compose-guide-components-progress-determinate-indicators
      title: Determinate indicators
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
        - androidx.compose.material3.CircularProgressIndicator
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-determinate-indicators-source
      relatedIds: []
    - id: live-compose-guide-components-progress-determinate-indicators-2
      title: Determinate indicators
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-determinate-indicators-2-source
      relatedIds: []
    - id: live-compose-guide-components-progress-determinate-linear
      title: Determinate linear wavy progress indicator
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-determinate-linear-source
      relatedIds: []
    - id: live-compose-guide-components-progress-indeterminate-circular
      title: Indeterminate circular wavy progress indicator
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-indeterminate-circular-source
      relatedIds: []
    - id: live-compose-guide-components-progress-indeterminate-indicators
      title: Indeterminate indicators
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
        - androidx.compose.material3.CircularProgressIndicator
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-indeterminate-indicators-source
      relatedIds: []
    - id: live-compose-guide-components-progress-indeterminate-linear
      title: Indeterminate linear wavy progress indicator
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-indeterminate-linear-source
      relatedIds: []
    - id: live-compose-guide-components-progress-m3-expressive-update
      title: M3 Expressive update
      aliases:
        - androidx.compose.material3.LinearProgressIndicator
        - androidx.compose.material3.CircularProgressIndicator
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-m3-expressive-update-source
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
    - id: live-compose-guide-components-progress-wavy
      title: Wavy
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-progress-wavy-source
      relatedIds: []
---

# Progress indicators

Public source: https://developer.android.com/develop/ui/compose/components/progress

## Additional resources

Material UI docs

Sources: [live-compose-guide-components-progress-additional-resources-source](https://developer.android.com/develop/ui/compose/components/progress#additional-resources)

## API surface

Although there are several composables you can use to create progress indicators consistent with Material Design, their parameters don't differ greatly. Among the key parameters you should keep in mind are the following:

progress: The current progress that the indicator displays. Pass a Float between 0.0 and 1.0.

color: The color of the actual indicator. That is, the part of the component that reflects progress and which fully encompasses the component when progress is complete.

trackColor: The color of the track over which the indicator is drawn.

Sources: [live-compose-guide-components-progress-api-source](https://developer.android.com/develop/ui/compose/components/progress#api)

## Determinate circular wavy progress indicator

The wavy shape can make longer processes feel less static and is best used when a more expressive style is appropriate. The following snippet demonstrates how to implement a determinate CircularWavyProgressIndicator controlled by a Slider:

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CircularWavyProgressIndicatorSample() {
    val sliderState = rememberSliderState(0.1f)
    val animatedProgress by animateFloatAsState(
            targetValue = sliderState.value,
            animationSpec = ProgressIndicatorDefaults.ProgressAnimationSpec,
        )

    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        CircularWavyProgressIndicator(progress = { animatedProgress })
        Spacer(Modifier.requiredHeight(30.dp))
        Text("Set progress:")
        Slider(
            state = sliderState,
            onValueChange = { sliderState.value = it },
            modifier = Modifier.width(300.dp),
        )
    }
}ProgressIndicator.kt

Sources: [live-compose-guide-components-progress-determinate-circular-source](https://developer.android.com/develop/ui/compose/components/progress#determinate-circular)

## Determinate indicators

A determinate indicator reflects exactly how complete an action is. Use either the LinearProgressIndicator or CircularProgressIndicator composables and pass a value for the progress parameter.

The following snippet demonstrates how to implement a determinate LinearProgressIndicator controlled by a Slider:

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LinearProgressIndicatorSample() {
    val sliderState = rememberSliderState(0.1f)
    val animatedProgress by animateFloatAsState(
            targetValue = sliderState.value,
            animationSpec = ProgressIndicatorDefaults.ProgressAnimationSpec,
        )

    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        LinearProgressIndicator(progress = { animatedProgress })
        Spacer(Modifier.requiredHeight(30.dp))
        Text("Set progress:")
        Slider(
            state = sliderState,
            onValueChange = { sliderState.value = it },
            modifier = Modifier.width(300.dp),
        )
    }
}ProgressIndicator.kt

The following snippet demonstrates how to implement a determinate CircularProgressIndicator controlled by a Slider:

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CircularProgressIndicatorSample() {
    val sliderState = rememberSliderState(0.1f)
    val animatedProgress by animateFloatAsState(
            targetValue = sliderState.value,
            animationSpec = ProgressIndicatorDefaults.ProgressAnimationSpec,
        )

    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        CircularProgressIndicator(progress = { animatedProgress })
        Spacer(Modifier.requiredHeight(30.dp))
        Text("Set progress:")
        Slider(
            state = sliderState,
            onValueChange = { sliderState.value = it },
            modifier = Modifier.width(300.dp),
        )
    }
}ProgressIndicator.kt

The following snippet provides a relatively detailed example. When the user presses the button, the app replaces it with the progress indicator and launches a coroutine that gradually increases the value of progress. This causes the progress indicator to iterate up in turn.

@Composable
fun LinearDeterminateIndicator() {
    var

Sources: [live-compose-guide-components-progress-determinate-indicators-source](https://developer.android.com/develop/ui/compose/components/progress#determinate-indicators)

## Determinate indicators

currentProgress by remember { mutableFloatStateOf(0f) }
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

Figure 4.

A linear determinate progress indicator.

Likewise, the circular indicator appears as follows:

Figure 5.

A circular determinate progress indicator.

Sources: [live-compose-guide-components-progress-determinate-indicators-2-source](https://developer.android.com/develop/ui/compose/components/progress#determinate-indicators)

## Determinate linear wavy progress indicator

By default, when using a wavy progress indicator, a wave speed is applied to create a constant wave motion, even in determinate mode. You can turn this wave motion off by passing 0.dp to waveSpeed.

The following snippet demonstrates how to implement a determinate LinearWavyProgressIndicator controlled by a Slider:

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LinearWavyProgressIndicatorSample() {
    val sliderState = rememberSliderState(0.1f)
    val animatedProgress by animateFloatAsState(
            targetValue = sliderState.value,
            animationSpec = ProgressIndicatorDefaults.ProgressAnimationSpec,
        )

    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        LinearWavyProgressIndicator(progress = { animatedProgress })
        Spacer(Modifier.requiredHeight(30.dp))
        Text("Set progress:")
        Slider(
            state = sliderState,
            onValueChange = { sliderState.value = it },
            modifier = Modifier.width(300.dp),
        )
    }
}ProgressIndicator.kt

Sources: [live-compose-guide-components-progress-determinate-linear-source](https://developer.android.com/develop/ui/compose/components/progress#determinate-linear)

## Indeterminate circular wavy progress indicator

Circular progress indicators should be centered directly on the container or page that's loading, such as a button or card. The following snippet demonstrates how to implement an indeterminate CircularWavyProgressIndicator:

@Composable
fun IndeterminateCircularWavyProgressIndicatorSample() {
    Column(horizontalAlignment = Alignment.CenterHorizontally) { CircularWavyProgressIndicator() }
}ProgressIndicator.kt

Sources: [live-compose-guide-components-progress-indeterminate-circular-source](https://developer.android.com/develop/ui/compose/components/progress#indeterminate-circular)

## Indeterminate indicators

An indeterminate indicator does not reflect how close to completion an operation is. Rather, it uses motion to indicate to the user that processing is ongoing, though without specifying any degree of completion.

To create an indeterminate progress indicator, use the LinearProgressIndicator or CircularProgressIndicator composable, but don't pass in a value for progress. The following snippet demonstrates how to implement an indeterminate LinearProgressIndicator:

@Composable
fun IndeterminateLinearProgressIndicatorSample() {
    Column(horizontalAlignment = Alignment.CenterHorizontally) { LinearProgressIndicator() }
}ProgressIndicator.kt

The following snippet demonstrates how to implement an indeterminate CircularProgressIndicator:

@Composable
fun IndeterminateCircularProgressIndicatorSample() {
    Column(horizontalAlignment = Alignment.CenterHorizontally) { CircularProgressIndicator() }
}ProgressIndicator.kt

The following example demonstrates how you can toggle an indeterminate indicator with a button press. This example also demonstrates how you can pass values for the color and trackColor parameters to customize the appearance of the indicator:

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

Figure 6.

A circular indeterminate progress indicator.

The following is an example of the same implementation, but with LinearProgressIndicator instead of CircularProgressIndicator:

Figure 7.

A linear indeterminate progress indicator.

Sources: [live-compose-guide-components-progress-indeterminate-indicators-source](https://developer.android.com/develop/ui/compose/components/progress#indeterminate-indicators)

## Indeterminate linear wavy progress indicator

Use indeterminate indicators to show that a process is happening when the wait time is unknown. The following snippet demonstrates how to implement an indeterminate LinearWavyProgressIndicator:

@Composable
fun IndeterminateLinearWavyProgressIndicatorSample() {
    Column(horizontalAlignment = Alignment.CenterHorizontally) { LinearWavyProgressIndicator() }
}ProgressIndicator.kt

Sources: [live-compose-guide-components-progress-indeterminate-linear-source](https://developer.android.com/develop/ui/compose/components/progress#indeterminate-linear)

## M3 Expressive update

Material 3 Expressive introduces LinearWavyProgressIndicator and CircularWavyProgressIndicator as additional options alongside the standard flat LinearProgressIndicator and CircularProgressIndicator. These indicators feature a rounded style and configurations for track height and wave shape. Choose the visual style that best fits your product.

For more information about the M3 Expressive updates for progress indicators, see the Material Design 3 progress indicator guidelines.

Figure 2.

Material 3 Expressive progress indicator wavy shapes and variable track heights.

Progress indicators have a rounded, colorful style and additional configurations to choose from, including a wavy shape and variable track height. The active indicator has two shape options: wavy and flat.

Sources: [live-compose-guide-components-progress-m3-expressive-update-source](https://developer.android.com/develop/ui/compose/components/progress#m3-expressive-update)

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

## Wavy

Wavy progress indicators offer both determinate and indeterminate variants, and let you customize their appearance with wave parameters for more expressive visuals.

Figure 3.

Wavy progress indicators with expressive wave parameters.

Wavy linear indicators increase the height of the overall container.

There are two variants of wavy progress indicators: linear and circular.

Sources: [live-compose-guide-components-progress-wavy-source](https://developer.android.com/develop/ui/compose/components/progress#wavy)
