---
type: reference
title: androidx.compose.ui.layout ContentScale.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-layout-contentscale-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt
    startLine: 1
    endLine: 35
    sha256: 1112662cfd973881fb7dbd6ff4ff8ab30e1cd63eb41885d2fe7635098824e0d1
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

      @file:Suppress("NOTHING_TO_INLINE", "KotlinRedundantDiagnosticSuppress")

      package androidx.compose.ui.layout

      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.geometry.Size
      import kotlin.math.max
      import kotlin.math.min

      /** Represents a rule to apply to scale a source rectangle to be inscribed into a destination */
      @Stable
      public interface ContentScale {

          /**
           * Computes the scale factor to apply to the horizontal and vertical axes independently of one
           * another to fit the source appropriately with the given destination
           */
          public fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor
  - id: live-androidx-ui-ui-ui-layout-contentscale-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt
    startLine: 106
    endLine: 140
    sha256: 25f45af365c188e0ed0a21347f2a4458cf7e169b632a44db4ee6f09289b02406
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              @Stable
              public val Inside: ContentScale =
                  object : ContentScale {

                      override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor {
                          return if (srcSize.width <= dstSize.width && srcSize.height <= dstSize.height) {
                              ScaleFactor(1.0f, 1.0f)
                          } else {
                              computeFillMinDimension(srcSize, dstSize).let { ScaleFactor(it, it) }
                          }
                      }
                  }

              /** Do not apply any scaling to the source */
              @Stable public val None: FixedScale = FixedScale(1.0f)

              /** Scale horizontal and vertically non-uniformly to fill the destination bounds. */
              @Stable
              public val FillBounds: ContentScale =
                  object : ContentScale {
                      override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor =
                          ScaleFactor(
                              computeFillWidth(srcSize, dstSize),
                              computeFillHeight(srcSize, dstSize),
                          )
                  }
          }
      }

      /**
       * [ContentScale] implementation that always scales the dimension by the provided fixed floating
       * point value
       */
      @Immutable
      @Suppress("DataClassDefinition")
  - id: live-androidx-ui-ui-ui-layout-contentscale-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt
    startLine: 141
    endLine: 163
    sha256: f2f61f8cfb3bdfe666da103432ca290c2efa86a91d8428f478734dcc1c917358
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      public data class FixedScale(public val value: Float) : ContentScale {
          public override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor =
              ScaleFactor(value, value)
      }

      private fun computeFillMaxDimension(srcSize: Size, dstSize: Size): Float {
          val widthScale = computeFillWidth(srcSize, dstSize)
          val heightScale = computeFillHeight(srcSize, dstSize)
          return max(widthScale, heightScale)
      }

      private fun computeFillMinDimension(srcSize: Size, dstSize: Size): Float {
          val widthScale = computeFillWidth(srcSize, dstSize)
          val heightScale = computeFillHeight(srcSize, dstSize)
          return min(widthScale, heightScale)
      }

      private inline fun computeFillWidth(srcSize: Size, dstSize: Size): Float =
          dstSize.width / srcSize.width

      private inline fun computeFillHeight(srcSize: Size, dstSize: Size): Float =
          dstSize.height / srcSize.height
  - id: live-androidx-ui-ui-ui-layout-contentscale-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt
    startLine: 36
    endLine: 70
    sha256: 07d329ba71fb3f67f8f3445c27aa905d1d75c3662cefabfc2a6df9391808b718
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /** Companion object containing commonly used [ContentScale] implementations */
          public companion object {

              /**
               * Scale the source uniformly (maintaining the source's aspect ratio) so that both
               * dimensions (width and height) of the source will be equal to or larger than the
               * corresponding dimension of the destination.
               *
               * This [ContentScale] implementation in combination with usage of
               * [androidx.compose.ui.Alignment.Center] provides similar behavior to
               * [android.widget.ImageView.ScaleType.CENTER_CROP]
               */
              @Stable
              public val Crop: ContentScale =
                  object : ContentScale {
                      override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor =
                          computeFillMaxDimension(srcSize, dstSize).let { ScaleFactor(it, it) }
                  }

              /**
               * Scale the source uniformly (maintaining the source's aspect ratio) so that both
               * dimensions (width and height) of the source will be equal to or less than the
               * corresponding dimension of the destination
               *
               * This [ContentScale] implementation in combination with usage of
               * [androidx.compose.ui.Alignment.Center] provides similar behavior to
               * [android.widget.ImageView.ScaleType.FIT_CENTER]
               */
              @Stable
              public val Fit: ContentScale =
                  object : ContentScale {
                      override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor =
                          computeFillMinDimension(srcSize, dstSize).let { ScaleFactor(it, it) }
                  }
  - id: live-androidx-ui-ui-ui-layout-contentscale-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt
    startLine: 71
    endLine: 105
    sha256: a8c73775b9f574e23ee6836b929a7afcb73b9f9ae4f1d15ada77f0100800229e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              /**
               * Scale the source maintaining the aspect ratio so that the bounds match the destination
               * height. This can cover a larger area than the destination if the height is larger than
               * the width.
               */
              @Stable
              public val FillHeight: ContentScale =
                  object : ContentScale {
                      override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor =
                          computeFillHeight(srcSize, dstSize).let { ScaleFactor(it, it) }
                  }

              /**
               * Scale the source maintaining the aspect ratio so that the bounds match the destination
               * width. This can cover a larger area than the destination if the width is larger than the
               * height.
               */
              @Stable
              public val FillWidth: ContentScale =
                  object : ContentScale {
                      override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor =
                          computeFillWidth(srcSize, dstSize).let { ScaleFactor(it, it) }
                  }

              /**
               * Scale the source to maintain the aspect ratio to be inside the destination bounds if the
               * source is larger than the destination. If the source is smaller than or equal to the
               * destination in both dimensions, this behaves similarly to [None]. This will always be
               * contained within the bounds of the destination.
               *
               * This [ContentScale] implementation in combination with usage of
               * [androidx.compose.ui.Alignment.Center] provides similar behavior to
               * [android.widget.ImageView.ScaleType.CENTER_INSIDE]
               */
compose:
  id: live-androidx-ui-ui-ui-layout-contentscale
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.layout
  sections:
    - id: live-androidx-ui-ui-ui-layout-contentscale-lines-1
      title: androidx.compose.ui.layout ContentScale.kt source (lines 1–35)
      aliases:
        - androidx.compose.ui.layout.ContentScale
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-contentscale-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-contentscale-lines-106
      title: androidx.compose.ui.layout ContentScale.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.layout.ContentScale
        - androidx.compose.ui.layout.FixedScale
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-contentscale-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-contentscale-lines-141
      title: androidx.compose.ui.layout ContentScale.kt source (lines 141–163)
      aliases:
        - androidx.compose.ui.layout.ContentScale
        - androidx.compose.ui.layout.FixedScale
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-contentscale-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-contentscale-lines-36
      title: androidx.compose.ui.layout ContentScale.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.layout.ContentScale
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-contentscale-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-contentscale-lines-71
      title: androidx.compose.ui.layout ContentScale.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.layout.ContentScale
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-contentscale-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.layout ContentScale.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt

## androidx.compose.ui.layout ContentScale.kt source (lines 1–35)

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

@file:Suppress("NOTHING_TO_INLINE", "KotlinRedundantDiagnosticSuppress")

package androidx.compose.ui.layout

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.geometry.Size
import kotlin.math.max
import kotlin.math.min

/** Represents a rule to apply to scale a source rectangle to be inscribed into a destination */
@Stable
public interface ContentScale {

    /**
     * Computes the scale factor to apply to the horizontal and vertical axes independently of one
     * another to fit the source appropriately with the given destination
     */
    public fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor

Sources: [live-androidx-ui-ui-ui-layout-contentscale-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt)

## androidx.compose.ui.layout ContentScale.kt source (lines 106–140)

        @Stable
        public val Inside: ContentScale =
            object : ContentScale {

                override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor {
                    return if (srcSize.width <= dstSize.width && srcSize.height <= dstSize.height) {
                        ScaleFactor(1.0f, 1.0f)
                    } else {
                        computeFillMinDimension(srcSize, dstSize).let { ScaleFactor(it, it) }
                    }
                }
            }

        /** Do not apply any scaling to the source */
        @Stable public val None: FixedScale = FixedScale(1.0f)

        /** Scale horizontal and vertically non-uniformly to fill the destination bounds. */
        @Stable
        public val FillBounds: ContentScale =
            object : ContentScale {
                override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor =
                    ScaleFactor(
                        computeFillWidth(srcSize, dstSize),
                        computeFillHeight(srcSize, dstSize),
                    )
            }
    }
}

/**
 * [ContentScale] implementation that always scales the dimension by the provided fixed floating
 * point value
 */
@Immutable
@Suppress("DataClassDefinition")

Sources: [live-androidx-ui-ui-ui-layout-contentscale-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt)

## androidx.compose.ui.layout ContentScale.kt source (lines 141–163)

public data class FixedScale(public val value: Float) : ContentScale {
    public override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor =
        ScaleFactor(value, value)
}

private fun computeFillMaxDimension(srcSize: Size, dstSize: Size): Float {
    val widthScale = computeFillWidth(srcSize, dstSize)
    val heightScale = computeFillHeight(srcSize, dstSize)
    return max(widthScale, heightScale)
}

private fun computeFillMinDimension(srcSize: Size, dstSize: Size): Float {
    val widthScale = computeFillWidth(srcSize, dstSize)
    val heightScale = computeFillHeight(srcSize, dstSize)
    return min(widthScale, heightScale)
}

private inline fun computeFillWidth(srcSize: Size, dstSize: Size): Float =
    dstSize.width / srcSize.width

private inline fun computeFillHeight(srcSize: Size, dstSize: Size): Float =
    dstSize.height / srcSize.height


Sources: [live-androidx-ui-ui-ui-layout-contentscale-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt)

## androidx.compose.ui.layout ContentScale.kt source (lines 36–70)


    /** Companion object containing commonly used [ContentScale] implementations */
    public companion object {

        /**
         * Scale the source uniformly (maintaining the source's aspect ratio) so that both
         * dimensions (width and height) of the source will be equal to or larger than the
         * corresponding dimension of the destination.
         *
         * This [ContentScale] implementation in combination with usage of
         * [androidx.compose.ui.Alignment.Center] provides similar behavior to
         * [android.widget.ImageView.ScaleType.CENTER_CROP]
         */
        @Stable
        public val Crop: ContentScale =
            object : ContentScale {
                override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor =
                    computeFillMaxDimension(srcSize, dstSize).let { ScaleFactor(it, it) }
            }

        /**
         * Scale the source uniformly (maintaining the source's aspect ratio) so that both
         * dimensions (width and height) of the source will be equal to or less than the
         * corresponding dimension of the destination
         *
         * This [ContentScale] implementation in combination with usage of
         * [androidx.compose.ui.Alignment.Center] provides similar behavior to
         * [android.widget.ImageView.ScaleType.FIT_CENTER]
         */
        @Stable
        public val Fit: ContentScale =
            object : ContentScale {
                override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor =
                    computeFillMinDimension(srcSize, dstSize).let { ScaleFactor(it, it) }
            }

Sources: [live-androidx-ui-ui-ui-layout-contentscale-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt)

## androidx.compose.ui.layout ContentScale.kt source (lines 71–105)


        /**
         * Scale the source maintaining the aspect ratio so that the bounds match the destination
         * height. This can cover a larger area than the destination if the height is larger than
         * the width.
         */
        @Stable
        public val FillHeight: ContentScale =
            object : ContentScale {
                override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor =
                    computeFillHeight(srcSize, dstSize).let { ScaleFactor(it, it) }
            }

        /**
         * Scale the source maintaining the aspect ratio so that the bounds match the destination
         * width. This can cover a larger area than the destination if the width is larger than the
         * height.
         */
        @Stable
        public val FillWidth: ContentScale =
            object : ContentScale {
                override fun computeScaleFactor(srcSize: Size, dstSize: Size): ScaleFactor =
                    computeFillWidth(srcSize, dstSize).let { ScaleFactor(it, it) }
            }

        /**
         * Scale the source to maintain the aspect ratio to be inside the destination bounds if the
         * source is larger than the destination. If the source is smaller than or equal to the
         * destination in both dimensions, this behaves similarly to [None]. This will always be
         * contained within the bounds of the destination.
         *
         * This [ContentScale] implementation in combination with usage of
         * [androidx.compose.ui.Alignment.Center] provides similar behavior to
         * [android.widget.ImageView.ScaleType.CENTER_INSIDE]
         */

Sources: [live-androidx-ui-ui-ui-layout-contentscale-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/ContentScale.kt)
