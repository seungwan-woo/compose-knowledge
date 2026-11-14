---
type: reference
title: Composition tracing
description: "Public source: https://developer.android.com/develop/ui/compose/tooling/tracing"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-performance-tracing-accurate-timing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#accurate-timing
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: 1031e5dde873cd2a65392fd962fc40edbe34621dc248e76dd155b13d2f5eb5e8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: For accurate profiling, like with any performance testing, you need to make the app profileable and non-debuggable as per Profileable applications.
  - id: live-compose-guide-performance-tracing-apk-size-overhead-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#apk-size-overhead
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: d4739f37d65df6d18aed1dd3bc2153e9ae40f3e0e4d531f8eb0ccc57388aa112
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      While we aimed to minimize the overhead of the feature as much as possible, there is an APK size increase for Compose apps coming from tracing strings embedded in the APK by the Compose compiler. This size increase can be relatively small if your app isn't using much Compose or larger for full Compose apps. These tracing strings are additionally unobfuscated so they can appear in tracing tools, as shown earlier. The Compose compiler injects them into all apps, starting with version 1.3.0.

      The tracing strings can be removed in your production build by adding the following Proguard rule:

      -assumenosideeffects public class androidx.compose.runtime.ComposerKt {

         boolean isTraceInProgress();

         void traceEventStart(int,int,int,java.lang.String);

         void traceEventStart(int,java.lang.String);

         void traceEventEnd();

      }

      These functions may change in the future, but any changes will be mentioned in the Compose release notes.

      Note that keeping the functions in, while incurring some APK size cost, ensures that the APK being profiled is the same one that the app users run.
  - id: live-compose-guide-performance-tracing-capture-recomposition-trace-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#capture-recomposition-trace
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: c29943a012a7e33e73c01e558f364decaaf98887be7119dfa64a4032665faa92
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use the record_recomposition_trace.py script to capture a recomposition trace from the terminal.

      Launch the app and prepare the section you want to trace.

      Start recording: ./record_recomposition_trace.py -p <your app package>

      Use your app to cause recomposition, and then press Control+C to stop recording. To record for a fixed duration instead, pass the duration in seconds with -t, for example -t 10.

      The script enables composition and recomposition tracing in the app, records a system trace, and then disables tracing and saves all traces to a single <package>-recompose-<timestamp>.zip file in the current directory. Open the file in Perfetto.

      Selecting a state write shows the call stack that changed the state, and a flow arrow points to the recomposition it caused:

      Figure 7

      . Recomposition trace in Perfetto

      Run the script with --help to see all options, such as a custom Perfetto config or the trace buffer size.
  - id: live-compose-guide-performance-tracing-capture-trace-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#capture-trace
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: e5b829600527355cd8e75af2a7ae2ef464f01dbd2ec686b3e2e5ac6686e2749c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Launch the app and prepare the section you want to trace.

      Enable tracing in the app by issuing a broadcast. # set app package variable, e.g. com.google.samples.apps.nowinandroid.debug # can be found through `adb shell ps -ef` or `adb shell cmd package list packages` package=<your app process> # issue a broadcast to enable tracing adb shell am broadcast \ -a androidx.tracing.perfetto.action.ENABLE_TRACING \ $package/androidx.tracing.perfetto.TracingReceiver

      Start your recording command you created previously.
  - id: live-compose-guide-performance-tracing-caveats-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#caveats
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: 6595a3296d6b2aa6f23503ea64e4463094eb01e3fd4a4cf64858eb239e5c12d2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: When using composition tracing, consider the following caveats regarding APK size and performance.
  - id: live-compose-guide-performance-tracing-feedback-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#feedback
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: 92cb7b413093ba9b2264e2f0bdb3c8a4585bf03ea6e34d6edb9c0da8aaa13c9c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: We would love to hear your feedback on this feature, any bugs you find with it, and any requests you have. You can send us feedback using the issue tracker.
  - id: live-compose-guide-performance-tracing-generate-record-command-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#generate-record-command
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: fddd2e84b594e1e289faf6f79de10fa4b75a8f77b7f4c70371d571a82b6213e4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Generate a record command using in Perfetto.

      Manually add the track_event data source section as per following example: adb shell perfetto \ -c - --txt \ -o /data/misc/perfetto-traces/trace \ <<EOF buffers: { size_kb: 63488 fill_policy: RING_BUFFER } buffers: { size_kb: 2048 fill_policy: RING_BUFFER } data_sources: { config { name: "track_event" } } duration_ms: 10000 flush_period_ms: 30000 incremental_state_config { clear_period_ms: 5000 } EOF
  - id: live-compose-guide-performance-tracing-macrobenchmark-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#macrobenchmark
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: fa1eb4d54094d456b87589acdb57ea3644fd6535f16cc99b8773947531758545
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can measure performance with Jetpack Macrobenchmark, which provides traces as results. To enable composition tracing with macrobenchmarks, you need to:

      Add these additional dependencies to the Macrobenchmark test module: implementation("androidx.tracing:tracing-perfetto:1.0.0") implementation("androidx.tracing:tracing-perfetto-binary:1.0.0")

      Add androidx.benchmark.fullTracing.enable=true instrumentation argument before running benchmarks. Check Macrobenchmark instrumentation arguments for more information about Macrobenchmark instrumentation arguments.
  - id: live-compose-guide-performance-tracing-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#main-content
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: e3f5d2e84442b163d56e25c4c010d626ee5053d700e3908524663aa001bf0d15
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Traces are often the best source of information when first looking into a performance issue. They allow you to form a hypothesis of what the issue is and where to start looking.

      There are two levels of tracing supported on Android: system tracing and method tracing.

      Because system tracing only tracks areas specifically marked for tracing, it has low overhead and doesn't affect the performance of your app greatly. System tracing is great for seeing how long particular sections of your code are taking to run.

      Method tracing tracks every function call in your app. This is very expensive and so it greatly affects the performance of your app, but it gives you a total picture of what is happening, what functions are being called, and how often they are being called.

      By default, system traces do not include individual composable functions. They are available in method traces.

      Composition tracing shows composable functions inside system traces. The feature gives you the low intrusiveness from system tracing, with method tracing levels of detail in composition.
  - id: live-compose-guide-performance-tracing-open-trace-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#open-trace
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: 08bff044cb44457546745ad3b10f878f4c61cf889432709316cba5dcc563f561
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      adb pull <location> the trace from the device (location specified in the record command).

      Open in Perfetto.
  - id: live-compose-guide-performance-tracing-recomposition-tracing-setup-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#recomposition-tracing-setup
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: 34980f511843ac09683f596d9ec0b03c3b477d69060964cd9b915a82bf23e855
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Add a dependency on Compose Runtime Tracing 1.13.0 or higher to your app module:

      // Compose BOM 2026.11.00+ (runtime-tracing 1.13.0+)
      implementation("androidx.compose.runtime:runtime-tracing")

      The device or emulator you run your trace on must be at API level 29 or higher.
  - id: live-compose-guide-performance-tracing-recomposition-tracing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#recomposition-tracing
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: b5775050576ae6dd9ea0b7c2a759ba48106ee43c28496e2a54177cb73bde274b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Recomposition tracing adds the state reads and writes that cause composable functions to recompose to the trace, in addition to the composable functions from composition tracing. This helps you find which state change triggered a recomposition.

      Recomposition tracing has a higher overhead than composition tracing, so use it to debug recompositions, not to measure performance.
  - id: live-compose-guide-performance-tracing-set-composition-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#set-composition
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: b81555f9fa925a64097cd2f4b608482b2da32c095c12aeabe6400f2a7bd67a63
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To try out the composition tracing in your project, you need to update to at least the following versions:

      Android Studio Flamingo

      Compose UI: 1.3.0

      Compose Compiler: 1.3.0

      The device or emulator you run your trace on must also be at minimum API level 30.

      Additionally, you need to add a new dependency on Compose Runtime Tracing:

      implementation("androidx.compose.runtime:runtime-tracing:1.12.1")

      If you are using the Compose BOM, you don't have to specify the version:

      val composeBom = platform("androidx.compose:compose-bom:2026.09.00")
      implementation(composeBom)
      // ...

      // dependency without a version
      implementation("androidx.compose.runtime:runtime-tracing")

      With this dependency, when you take a system trace that includes recomposition, you can see the composable functions automatically.
  - id: live-compose-guide-performance-tracing-take-system-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#take-system
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: d23a05fcce71919643b20c94d6bfc68e44bae2924205215a451e7625d97d504e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To take a system trace and see the new composition tracing in action, follow these steps:

      Open the profiler: Figure 2. Android Studio - Start Profiling

      Click CPU timeline Figure 3. Android Studio Profiler - CPU timeline

      Navigate your app to the UI you want to trace and then select System Trace and Record Figure 4. Trace options - System trace

      Use your app to cause recomposition and stop recording. Once the trace has been processed and appears, you should now be able to see the composables in the composition trace. You can use the keyboard and mouse to zoom and pan around the trace; if you are unfamiliar with navigating a trace, see the Record traces documentation. Figure 5. System trace Double-clicking on a composable in the chart takes you to its source code.

      You can also see composables in the Flame Chart along with the file and line number: Figure 6. Flame chart
  - id: live-compose-guide-performance-tracing-terminal-dependencies-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#terminal-dependencies
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: 5cdd94c2a37333bc03525f1114c07a8727f324dec1b2e08adfd89508bc2f326a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      First, add the additional dependencies to your app.

      implementation("androidx.tracing:tracing-perfetto:1.0.0")
      implementation("androidx.tracing:tracing-perfetto-binary:1.0.0")
  - id: live-compose-guide-performance-tracing-terminal-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#terminal
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: 6ccb7515883c664032ecdada646afc43715e7b41d74cd55511e3e297ea7d45bf
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: It is possible to capture a composition trace from terminal. To do so, you have to perform the steps that Android Studio normally does for you automatically.
compose:
  id: live-compose-guide-performance-tracing
  artifact: androidx.compose.runtime:runtime-tracing
  fqn: androidx.compose.runtime
  sections:
    - id: live-compose-guide-performance-tracing-accurate-timing
      title: Accurate timing
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-accurate-timing-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-apk-size-overhead
      title: APK size overhead
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-apk-size-overhead-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-capture-recomposition-trace
      title: Capture a recomposition trace
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-capture-recomposition-trace-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-capture-trace
      title: Capture a trace
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-capture-trace-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-caveats
      title: Caveats
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-caveats-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-feedback
      title: Feedback
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-feedback-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-generate-record-command
      title: Generate a record command
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-generate-record-command-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-macrobenchmark
      title: Capture a trace with Jetpack Macrobenchmark
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-macrobenchmark-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-main-content-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-open-trace
      title: Open the trace
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-open-trace-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-recomposition-tracing
      title: Recomposition tracing
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-recomposition-tracing-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-recomposition-tracing-setup
      title: Recomposition tracing setup
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-recomposition-tracing-setup-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-set-composition
      title: Composition tracing setup
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-set-composition-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-take-system
      title: Take a system trace
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-take-system-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-terminal
      title: Capture a trace from terminal
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-terminal-source
      relatedIds: []
    - id: live-compose-guide-performance-tracing-terminal-dependencies
      title: Add dependencies
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-terminal-dependencies-source
      relatedIds: []
---

# Composition tracing

Public source: https://developer.android.com/develop/ui/compose/tooling/tracing

## Accurate timing

For accurate profiling, like with any performance testing, you need to make the app profileable and non-debuggable as per Profileable applications.

Sources: [live-compose-guide-performance-tracing-accurate-timing-source](https://developer.android.com/develop/ui/compose/tooling/tracing#accurate-timing)

## APK size overhead

While we aimed to minimize the overhead of the feature as much as possible, there is an APK size increase for Compose apps coming from tracing strings embedded in the APK by the Compose compiler. This size increase can be relatively small if your app isn't using much Compose or larger for full Compose apps. These tracing strings are additionally unobfuscated so they can appear in tracing tools, as shown earlier. The Compose compiler injects them into all apps, starting with version 1.3.0.

The tracing strings can be removed in your production build by adding the following Proguard rule:

-assumenosideeffects public class androidx.compose.runtime.ComposerKt {

   boolean isTraceInProgress();

   void traceEventStart(int,int,int,java.lang.String);

   void traceEventStart(int,java.lang.String);

   void traceEventEnd();

}

These functions may change in the future, but any changes will be mentioned in the Compose release notes.

Note that keeping the functions in, while incurring some APK size cost, ensures that the APK being profiled is the same one that the app users run.

Sources: [live-compose-guide-performance-tracing-apk-size-overhead-source](https://developer.android.com/develop/ui/compose/tooling/tracing#apk-size-overhead)

## Capture a recomposition trace

Use the record_recomposition_trace.py script to capture a recomposition trace from the terminal.

Launch the app and prepare the section you want to trace.

Start recording: ./record_recomposition_trace.py -p <your app package>

Use your app to cause recomposition, and then press Control+C to stop recording. To record for a fixed duration instead, pass the duration in seconds with -t, for example -t 10.

The script enables composition and recomposition tracing in the app, records a system trace, and then disables tracing and saves all traces to a single <package>-recompose-<timestamp>.zip file in the current directory. Open the file in Perfetto.

Selecting a state write shows the call stack that changed the state, and a flow arrow points to the recomposition it caused:

Figure 7

. Recomposition trace in Perfetto

Run the script with --help to see all options, such as a custom Perfetto config or the trace buffer size.

Sources: [live-compose-guide-performance-tracing-capture-recomposition-trace-source](https://developer.android.com/develop/ui/compose/tooling/tracing#capture-recomposition-trace)

## Capture a trace

Launch the app and prepare the section you want to trace.

Enable tracing in the app by issuing a broadcast. # set app package variable, e.g. com.google.samples.apps.nowinandroid.debug # can be found through `adb shell ps -ef` or `adb shell cmd package list packages` package=<your app process> # issue a broadcast to enable tracing adb shell am broadcast \ -a androidx.tracing.perfetto.action.ENABLE_TRACING \ $package/androidx.tracing.perfetto.TracingReceiver

Start your recording command you created previously.

Sources: [live-compose-guide-performance-tracing-capture-trace-source](https://developer.android.com/develop/ui/compose/tooling/tracing#capture-trace)

## Caveats

When using composition tracing, consider the following caveats regarding APK size and performance.

Sources: [live-compose-guide-performance-tracing-caveats-source](https://developer.android.com/develop/ui/compose/tooling/tracing#caveats)

## Feedback

We would love to hear your feedback on this feature, any bugs you find with it, and any requests you have. You can send us feedback using the issue tracker.

Sources: [live-compose-guide-performance-tracing-feedback-source](https://developer.android.com/develop/ui/compose/tooling/tracing#feedback)

## Generate a record command

Generate a record command using in Perfetto.

Manually add the track_event data source section as per following example: adb shell perfetto \ -c - --txt \ -o /data/misc/perfetto-traces/trace \ <<EOF buffers: { size_kb: 63488 fill_policy: RING_BUFFER } buffers: { size_kb: 2048 fill_policy: RING_BUFFER } data_sources: { config { name: "track_event" } } duration_ms: 10000 flush_period_ms: 30000 incremental_state_config { clear_period_ms: 5000 } EOF

Sources: [live-compose-guide-performance-tracing-generate-record-command-source](https://developer.android.com/develop/ui/compose/tooling/tracing#generate-record-command)

## Capture a trace with Jetpack Macrobenchmark

You can measure performance with Jetpack Macrobenchmark, which provides traces as results. To enable composition tracing with macrobenchmarks, you need to:

Add these additional dependencies to the Macrobenchmark test module: implementation("androidx.tracing:tracing-perfetto:1.0.0") implementation("androidx.tracing:tracing-perfetto-binary:1.0.0")

Add androidx.benchmark.fullTracing.enable=true instrumentation argument before running benchmarks. Check Macrobenchmark instrumentation arguments for more information about Macrobenchmark instrumentation arguments.

Sources: [live-compose-guide-performance-tracing-macrobenchmark-source](https://developer.android.com/develop/ui/compose/tooling/tracing#macrobenchmark)

## Introduction

Traces are often the best source of information when first looking into a performance issue. They allow you to form a hypothesis of what the issue is and where to start looking.

There are two levels of tracing supported on Android: system tracing and method tracing.

Because system tracing only tracks areas specifically marked for tracing, it has low overhead and doesn't affect the performance of your app greatly. System tracing is great for seeing how long particular sections of your code are taking to run.

Method tracing tracks every function call in your app. This is very expensive and so it greatly affects the performance of your app, but it gives you a total picture of what is happening, what functions are being called, and how often they are being called.

By default, system traces do not include individual composable functions. They are available in method traces.

Composition tracing shows composable functions inside system traces. The feature gives you the low intrusiveness from system tracing, with method tracing levels of detail in composition.

Sources: [live-compose-guide-performance-tracing-main-content-source](https://developer.android.com/develop/ui/compose/tooling/tracing#main-content)

## Open the trace

adb pull <location> the trace from the device (location specified in the record command).

Open in Perfetto.

Sources: [live-compose-guide-performance-tracing-open-trace-source](https://developer.android.com/develop/ui/compose/tooling/tracing#open-trace)

## Recomposition tracing

Recomposition tracing adds the state reads and writes that cause composable functions to recompose to the trace, in addition to the composable functions from composition tracing. This helps you find which state change triggered a recomposition.

Recomposition tracing has a higher overhead than composition tracing, so use it to debug recompositions, not to measure performance.

Sources: [live-compose-guide-performance-tracing-recomposition-tracing-source](https://developer.android.com/develop/ui/compose/tooling/tracing#recomposition-tracing)

## Recomposition tracing setup

Add a dependency on Compose Runtime Tracing 1.13.0 or higher to your app module:

// Compose BOM 2026.11.00+ (runtime-tracing 1.13.0+)
implementation("androidx.compose.runtime:runtime-tracing")

The device or emulator you run your trace on must be at API level 29 or higher.

Sources: [live-compose-guide-performance-tracing-recomposition-tracing-setup-source](https://developer.android.com/develop/ui/compose/tooling/tracing#recomposition-tracing-setup)

## Composition tracing setup

To try out the composition tracing in your project, you need to update to at least the following versions:

Android Studio Flamingo

Compose UI: 1.3.0

Compose Compiler: 1.3.0

The device or emulator you run your trace on must also be at minimum API level 30.

Additionally, you need to add a new dependency on Compose Runtime Tracing:

implementation("androidx.compose.runtime:runtime-tracing:1.12.1")

If you are using the Compose BOM, you don't have to specify the version:

val composeBom = platform("androidx.compose:compose-bom:2026.09.00")
implementation(composeBom)
// ...

// dependency without a version
implementation("androidx.compose.runtime:runtime-tracing")

With this dependency, when you take a system trace that includes recomposition, you can see the composable functions automatically.

Sources: [live-compose-guide-performance-tracing-set-composition-source](https://developer.android.com/develop/ui/compose/tooling/tracing#set-composition)

## Take a system trace

To take a system trace and see the new composition tracing in action, follow these steps:

Open the profiler: Figure 2. Android Studio - Start Profiling

Click CPU timeline Figure 3. Android Studio Profiler - CPU timeline

Navigate your app to the UI you want to trace and then select System Trace and Record Figure 4. Trace options - System trace

Use your app to cause recomposition and stop recording. Once the trace has been processed and appears, you should now be able to see the composables in the composition trace. You can use the keyboard and mouse to zoom and pan around the trace; if you are unfamiliar with navigating a trace, see the Record traces documentation. Figure 5. System trace Double-clicking on a composable in the chart takes you to its source code.

You can also see composables in the Flame Chart along with the file and line number: Figure 6. Flame chart

Sources: [live-compose-guide-performance-tracing-take-system-source](https://developer.android.com/develop/ui/compose/tooling/tracing#take-system)

## Capture a trace from terminal

It is possible to capture a composition trace from terminal. To do so, you have to perform the steps that Android Studio normally does for you automatically.

Sources: [live-compose-guide-performance-tracing-terminal-source](https://developer.android.com/develop/ui/compose/tooling/tracing#terminal)

## Add dependencies

First, add the additional dependencies to your app.

implementation("androidx.tracing:tracing-perfetto:1.0.0")
implementation("androidx.tracing:tracing-perfetto-binary:1.0.0")

Sources: [live-compose-guide-performance-tracing-terminal-dependencies-source](https://developer.android.com/develop/ui/compose/tooling/tracing#terminal-dependencies)
