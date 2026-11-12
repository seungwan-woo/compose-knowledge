---
type: reference
title: androidx.compose.ui.graphics Shape.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Shape.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-graphics-ui-graphics-shape-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Shape.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Shape.kt
    startLine: 1
    endLine: 35
    sha256: 21ee14f839f1b13722c400950ed157abccd98684c67ebc8294f6ba251ef7594a
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

      package androidx.compose.ui.graphics

      import androidx.compose.runtime.Stable
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.LayoutDirection

      /** Defines a generic shape. */
      @Stable
      public interface Shape {
          /**
           * Creates [Outline] of this shape for the given [size].
           *
           * @param size the size of the shape boundary.
           * @param layoutDirection the current layout direction.
           * @param density the current density of the screen.
           * @return [Outline] of this shape for the given [size].
           */
          public fun createOutline(
  - id: live-androidx-ui-ui-graphics-ui-graphics-shape-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Shape.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Shape.kt
    startLine: 36
    endLine: 41
    sha256: 1bd3252519f938fa2b984766909f23c522855a167e4441e1e3fbb77bbf8b3599
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              size: Size,
              layoutDirection: LayoutDirection,
              density: Density,
          ): Outline
      }
compose:
  id: live-androidx-ui-ui-graphics-ui-graphics-shape
  artifact: androidx.compose.ui:ui-graphics
  fqn: androidx.compose.ui.graphics
  sections:
    - id: live-androidx-ui-ui-graphics-ui-graphics-shape-lines-1
      title: androidx.compose.ui.graphics Shape.kt source (lines 1–35)
      aliases:
        - androidx.compose.ui.graphics.Shape
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-shape-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-shape-lines-36
      title: androidx.compose.ui.graphics Shape.kt source (lines 36–41)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-shape-lines-36-source
      relatedIds: []
---

# androidx.compose.ui.graphics Shape.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Shape.kt

## androidx.compose.ui.graphics Shape.kt source (lines 1–35)

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

package androidx.compose.ui.graphics

import androidx.compose.runtime.Stable
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.LayoutDirection

/** Defines a generic shape. */
@Stable
public interface Shape {
    /**
     * Creates [Outline] of this shape for the given [size].
     *
     * @param size the size of the shape boundary.
     * @param layoutDirection the current layout direction.
     * @param density the current density of the screen.
     * @return [Outline] of this shape for the given [size].
     */
    public fun createOutline(

Sources: [live-androidx-ui-ui-graphics-ui-graphics-shape-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Shape.kt)

## androidx.compose.ui.graphics Shape.kt source (lines 36–41)

        size: Size,
        layoutDirection: LayoutDirection,
        density: Density,
    ): Outline
}


Sources: [live-androidx-ui-ui-graphics-ui-graphics-shape-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Shape.kt)
