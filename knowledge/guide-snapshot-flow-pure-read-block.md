---
type: reference
title: "Guidance: Keep snapshotFlow observation blocks pure and read-only"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-androidx-runtime-runtime-runtime-snapshotflow-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt
    startLine: 561
    endLine: 595
    sha256: 725a141e5c7027672beb73a8ea9b992639e51f471ca6049ff6c8a84e8727c97e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      manager.dispose()
                  }
              }
          }

      /**
       * Create a [Flow] from observable [Snapshot] state. (e.g. state holders returned by
       * [mutableStateOf][androidx.compose.runtime.mutableStateOf].)
       *
       * [snapshotFlow] creates a [Flow] that runs [block] when collected and emits the result, recording
       * any snapshot state that was accessed. While collection continues, if a new [Snapshot] is applied
       * that changes state accessed by [block], the flow will run [block] again, re-recording the
       * snapshot state that was accessed. If the result of [block] is not [equal to][Any.equals] the
       * previous result, the flow will emit that new result. (This behavior is similar to that of
       * [Flow.distinctUntilChanged][kotlinx.coroutines.flow.distinctUntilChanged].) Collection will
       * continue indefinitely unless it is explicitly cancelled or limited by the use of other [Flow]
       * operators.
       *
       * @sample androidx.compose.runtime.samples.snapshotFlowSample
       *
       * [block] is run in a **read-only** [Snapshot] and may not modify snapshot data. If [block]
       * attempts to modify snapshot data, flow collection will fail with [IllegalStateException].
       *
       * [block] may run more than once for equal sets of inputs or only once after many rapid snapshot
       * changes; it should be idempotent and free of side effects.
       *
       * When working with [Snapshot] state it is useful to keep the distinction between **events** and
       * **state** in mind. [snapshotFlow] models snapshot changes as events, but events **cannot** be
       * effectively modeled as observable state. Observable state is a lossy compression of the events
       * that produced that state.
       *
       * An observable **event** happens at a point in time and is discarded. All registered observers at
       * the time the event occurred are notified. All individual events in a stream are assumed to be
       * relevant and may build on one another; repeated equal events have meaning and therefore a
       * registered observer must observe all events without skipping.
compose:
  id: guide-snapshot-flow-pure-read-block
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.snapshotFlow
  sections:
    - id: guide-snapshot-flow-pure-read-block
      title: "Guidance: Keep snapshotFlow observation blocks pure and read-only"
      aliases:
        - androidx.compose.runtime.snapshotFlow
        - snapshotFlow IllegalStateException
        - read-only snapshot
        - snapshotFlow side effects
        - idempotent state observer
        - rapid state changes
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-561-source
      relatedIds:
        - live-androidx-runtime-runtime-runtime-snapshotflow-lines-561
---

# Guidance: Keep snapshotFlow observation blocks pure and read-only

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Keep snapshotFlow observation blocks pure and read-only

Guidance: Use the snapshotFlow block only to read snapshot state and calculate a result. It runs in a read-only Snapshot: modifying snapshot data inside it makes collection fail with IllegalStateException. Keep the block idempotent and free of side effects because it may run repeatedly for equal inputs or once after many rapid changes. Limitation: it cannot serve as an exactly-once event-processing block; observable state can lose intermediate events, and block execution does not promise one run per change.

Sources: [live-androidx-runtime-runtime-runtime-snapshotflow-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt)
