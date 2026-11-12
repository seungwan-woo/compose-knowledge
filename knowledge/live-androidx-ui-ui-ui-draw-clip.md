---
type: reference
title: androidx.compose.ui.draw Clip.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Clip.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-draw-clip-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Clip.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Clip.kt
    startLine: 1
    endLine: 33
    sha256: d4d34dfcfded4042349ab44248ab1192722861a9403101969fca92b17447ecff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
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

      package androidx.compose.ui.draw

      import androidx.compose.runtime.Stable
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.graphics.graphicsLayer

      /** Clip the content to the bounds of a layer defined at this modifier. */
      @Stable public fun Modifier.clipToBounds(): Modifier = graphicsLayer(clip = true)

      /**
       * Clip the content to [shape].
       *
       * @param shape the content will be clipped to this [Shape].
       */
      @Stable public fun Modifier.clip(shape: Shape): Modifier = graphicsLayer(shape = shape, clip = true)
compose:
  id: live-androidx-ui-ui-ui-draw-clip
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.draw
  sections:
    - id: live-androidx-ui-ui-ui-draw-clip-lines-1
      title: androidx.compose.ui.draw Clip.kt source (lines 1–33)
      aliases:
        - androidx.compose.ui.draw.clipToBounds
        - androidx.compose.ui.draw.clip
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-clip-lines-1-source
      relatedIds: []
---

# androidx.compose.ui.draw Clip.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Clip.kt

## androidx.compose.ui.draw Clip.kt source (lines 1–33)

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

package androidx.compose.ui.draw

import androidx.compose.runtime.Stable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.graphicsLayer

/** Clip the content to the bounds of a layer defined at this modifier. */
@Stable public fun Modifier.clipToBounds(): Modifier = graphicsLayer(clip = true)

/**
 * Clip the content to [shape].
 *
 * @param shape the content will be clipped to this [Shape].
 */
@Stable public fun Modifier.clip(shape: Shape): Modifier = graphicsLayer(shape = shape, clip = true)


Sources: [live-androidx-ui-ui-ui-draw-clip-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Clip.kt)
