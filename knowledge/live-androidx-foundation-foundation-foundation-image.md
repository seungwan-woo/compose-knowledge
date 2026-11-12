---
type: reference
title: androidx.compose.foundation Image.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-image-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    startLine: 1
    endLine: 35
    sha256: 86350de8ba9e7ba79f3db32a0654ab2c378588ba45373622d080468ba12dde67
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2019 The Android Open Source Project
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

      package androidx.compose.foundation

      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.NonRestartableComposable
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.draw.clipToBounds
      import androidx.compose.ui.draw.paint
      import androidx.compose.ui.graphics.ColorFilter
      import androidx.compose.ui.graphics.DefaultAlpha
      import androidx.compose.ui.graphics.FilterQuality
      import androidx.compose.ui.graphics.ImageBitmap
      import androidx.compose.ui.graphics.drawscope.DrawScope.Companion.DefaultFilterQuality
      import androidx.compose.ui.graphics.painter.BitmapPainter
      import androidx.compose.ui.graphics.painter.ColorPainter
      import androidx.compose.ui.graphics.painter.Painter
      import androidx.compose.ui.graphics.vector.ImageVector
      import androidx.compose.ui.graphics.vector.rememberVectorPainter
  - id: live-androidx-foundation-foundation-foundation-image-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    startLine: 106
    endLine: 140
    sha256: f31a90865ea4a8bc7eacf9c36dce0e463ed8656e877039f8bd711d3023d81216
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              alpha,
              colorFilter,
              FilterQuality.Low,
          )
      }

      /**
       * A composable that lays out and draws a given [ImageBitmap]. This will attempt to size the
       * composable according to the [ImageBitmap]'s given width and height. However, an optional
       * [Modifier] parameter can be provided to adjust sizing or draw additional content (ex.
       * background). Any unspecified dimension will leverage the [ImageBitmap]'s size as a minimum
       * constraint.
       *
       * The following sample shows basic usage of an Image composable to position and draw an
       * [ImageBitmap] on screen
       *
       * @sample androidx.compose.foundation.samples.ImageSample
       *
       * For use cases that require drawing a rectangular subset of the [ImageBitmap] consumers can use
       * overload that consumes a [Painter] parameter shown in this sample
       *
       * @sample androidx.compose.foundation.samples.BitmapPainterSubsectionSample
       * @param bitmap The [ImageBitmap] to draw
       * @param contentDescription text used by accessibility services to describe what this image
       *   represents. This should always be provided unless this image is used for decorative purposes,
       *   and does not represent a meaningful action that a user can take. This text should be localized,
       *   such as by using `androidx.compose.ui.res.stringResource` or similar
       * @param modifier Modifier used to adjust the layout algorithm or draw decoration content (ex.
       *   background)
       * @param alignment Optional alignment parameter used to place the [ImageBitmap] in the given bounds
       *   defined by the width and height
       * @param contentScale Optional scale parameter used to determine the aspect ratio scaling to be
       *   used if the bounds are a different size from the intrinsic size of the [ImageBitmap]
       * @param alpha Optional opacity to be applied to the [ImageBitmap] when it is rendered onscreen
       * @param colorFilter Optional ColorFilter to apply for the [ImageBitmap] when it is rendered
  - id: live-androidx-foundation-foundation-foundation-image-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    startLine: 141
    endLine: 175
    sha256: 0f85103e516c9c53d508efa60f3c303b2246e2b7292da37e8ebbdc2149ced23c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   onscreen
       * @param filterQuality Sampling algorithm applied to the [bitmap] when it is scaled and drawn into
       *   the destination. The default is [FilterQuality.Low] which scales using a bilinear sampling
       *   algorithm
       */
      @Composable
      @NonRestartableComposable
      public fun Image(
          bitmap: ImageBitmap,
          contentDescription: String?,
          modifier: Modifier = Modifier,
          alignment: Alignment = Alignment.Center,
          contentScale: ContentScale = ContentScale.Fit,
          alpha: Float = DefaultAlpha,
          colorFilter: ColorFilter? = null,
          filterQuality: FilterQuality = DefaultFilterQuality,
      ) {
          val bitmapPainter = remember(bitmap) { BitmapPainter(bitmap, filterQuality = filterQuality) }
          Image(
              painter = bitmapPainter,
              contentDescription = contentDescription,
              modifier = modifier,
              alignment = alignment,
              contentScale = contentScale,
              alpha = alpha,
              colorFilter = colorFilter,
          )
      }

      /**
       * A composable that lays out and draws a given [ImageVector]. This will attempt to size the
       * composable according to the [ImageVector]'s given width and height. However, an optional
       * [Modifier] parameter can be provided to adjust sizing or draw additional content (ex.
       * background). Any unspecified dimension will leverage the [ImageVector]'s size as a minimum
       * constraint.
  - id: live-androidx-foundation-foundation-foundation-image-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    startLine: 176
    endLine: 210
    sha256: 2380376d8f5bee78e48d3df45b12d8e32f23bd302f0de183152c9d425b7dcce0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @param imageVector The [ImageVector] to draw
       * @param contentDescription text used by accessibility services to describe what this image
       *   represents. This should always be provided unless this image is used for decorative purposes,
       *   and does not represent a meaningful action that a user can take. This text should be localized,
       *   such as by using `androidx.compose.ui.res.stringResource` or similar
       * @param modifier Modifier used to adjust the layout algorithm or draw decoration content (ex.
       *   background)
       * @param alignment Optional alignment parameter used to place the [ImageVector] in the given bounds
       *   defined by the width and height
       * @param contentScale Optional scale parameter used to determine the aspect ratio scaling to be
       *   used if the bounds are a different size from the intrinsic size of the [ImageVector]
       * @param alpha Optional opacity to be applied to the [ImageVector] when it is rendered onscreen
       * @param colorFilter Optional ColorFilter to apply for the [ImageVector] when it is rendered
       *   onscreen
       */
      @Composable
      @NonRestartableComposable
      public fun Image(
          imageVector: ImageVector,
          contentDescription: String?,
          modifier: Modifier = Modifier,
          alignment: Alignment = Alignment.Center,
          contentScale: ContentScale = ContentScale.Fit,
          alpha: Float = DefaultAlpha,
          colorFilter: ColorFilter? = null,
      ): Unit =
          Image(
              painter = rememberVectorPainter(imageVector),
              contentDescription = contentDescription,
              modifier = modifier,
              alignment = alignment,
              contentScale = contentScale,
              alpha = alpha,
              colorFilter = colorFilter,
  - id: live-androidx-foundation-foundation-foundation-image-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    startLine: 211
    endLine: 245
    sha256: 30cbf06a86e1b3c1a55b398660f35cf4037fdfe44ba90d77a424991e15d697b9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          )

      /**
       * Creates a composable that lays out and draws a given [Painter]. This will attempt to size the
       * composable according to the [Painter]'s intrinsic size. However, an optional [Modifier] parameter
       * can be provided to adjust sizing or draw additional content (ex. background)
       *
       * **NOTE** a Painter might not have an intrinsic size, so if no LayoutModifier is provided as part
       * of the Modifier chain this might size the [Image] composable to a width and height of zero and
       * will not draw any content. This can happen for Painter implementations that always attempt to
       * fill the bounds like [ColorPainter]
       *
       * @sample androidx.compose.foundation.samples.BitmapPainterSample
       * @param painter to draw
       * @param contentDescription text used by accessibility services to describe what this image
       *   represents. This should always be provided unless this image is used for decorative purposes,
       *   and does not represent a meaningful action that a user can take. This text should be localized,
       *   such as by using `androidx.compose.ui.res.stringResource` or similar
       * @param modifier Modifier used to adjust the layout algorithm or draw decoration content (ex.
       *   background)
       * @param alignment Optional alignment parameter used to place the [Painter] in the given bounds
       *   defined by the width and height.
       * @param contentScale Optional scale parameter used to determine the aspect ratio scaling to be
       *   used if the bounds are a different size from the intrinsic size of the [Painter]
       * @param alpha Optional opacity to be applied to the [Painter] when it is rendered onscreen the
       *   default renders the [Painter] completely opaque
       * @param colorFilter Optional colorFilter to apply for the [Painter] when it is rendered onscreen
       */
      @Composable
      public fun Image(
          painter: Painter,
          contentDescription: String?,
          modifier: Modifier = Modifier,
          alignment: Alignment = Alignment.Center,
          contentScale: ContentScale = ContentScale.Fit,
  - id: live-androidx-foundation-foundation-foundation-image-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    startLine: 246
    endLine: 276
    sha256: 18a15f650b3cc1f002c5cd3aca4373be0d0b504c8b9bbdf5605d8edf1b03afe4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          alpha: Float = DefaultAlpha,
          colorFilter: ColorFilter? = null,
      ) {
          val semantics =
              if (contentDescription != null) {
                  Modifier.semantics {
                      this.contentDescription = contentDescription
                      this.role = Role.Image
                  }
              } else {
                  Modifier
              }

          // Explicitly use a simple Layout implementation here as Spacer squashes any non fixed
          // constraint with zero
          Layout(
              modifier
                  .then(semantics)
                  .clipToBounds()
                  .paint(
                      painter,
                      alignment = alignment,
                      contentScale = contentScale,
                      alpha = alpha,
                      colorFilter = colorFilter,
                  )
          ) { _, constraints ->
              layout(constraints.minWidth, constraints.minHeight) {}
          }
      }
  - id: live-androidx-foundation-foundation-foundation-image-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    startLine: 36
    endLine: 70
    sha256: bb91705f89ee36f2555ec67efc04cc7ad112c1af6b2d3234747b09862aedb792
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.layout.ContentScale
      import androidx.compose.ui.layout.Layout
      import androidx.compose.ui.semantics.Role
      import androidx.compose.ui.semantics.contentDescription
      import androidx.compose.ui.semantics.role
      import androidx.compose.ui.semantics.semantics

      /**
       * A composable that lays out and draws a given [ImageBitmap]. This will attempt to size the
       * composable according to the [ImageBitmap]'s given width and height. However, an optional
       * [Modifier] parameter can be provided to adjust sizing or draw additional content (ex.
       * background). Any unspecified dimension will leverage the [ImageBitmap]'s size as a minimum
       * constraint.
       *
       * The following sample shows basic usage of an Image composable to position and draw an
       * [ImageBitmap] on screen
       *
       * @sample androidx.compose.foundation.samples.ImageSample
       *
       * For use cases that require drawing a rectangular subset of the [ImageBitmap] consumers can use
       * overload that consumes a [Painter] parameter shown in this sample
       *
       * @sample androidx.compose.foundation.samples.BitmapPainterSubsectionSample
       * @param bitmap The [ImageBitmap] to draw
       * @param contentDescription text used by accessibility services to describe what this image
       *   represents. This should always be provided unless this image is used for decorative purposes,
       *   and does not represent a meaningful action that a user can take. This text should be localized,
       *   such as by using `androidx.compose.ui.res.stringResource` or similar
       * @param modifier Modifier used to adjust the layout algorithm or draw decoration content (ex.
       *   background)
       * @param alignment Optional alignment parameter used to place the [ImageBitmap] in the given bounds
       *   defined by the width and height
       * @param contentScale Optional scale parameter used to determine the aspect ratio scaling to be
       *   used if the bounds are a different size from the intrinsic size of the [ImageBitmap]
       * @param alpha Optional opacity to be applied to the [ImageBitmap] when it is rendered onscreen
  - id: live-androidx-foundation-foundation-foundation-image-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt
    startLine: 71
    endLine: 105
    sha256: f6e390924f4ac4a42c1547296c99cc050470eae214d5f5dec8e2f788efe1f19b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param colorFilter Optional ColorFilter to apply for the [ImageBitmap] when it is rendered
       *   onscreen
       */
      @Composable
      @Deprecated(
          "Consider usage of the Image composable that consumes an optional FilterQuality parameter",
          level = DeprecationLevel.HIDDEN,
          replaceWith =
              ReplaceWith(
                  expression =
                      "Image(bitmap, contentDescription, modifier, alignment, contentScale, " +
                          "alpha, colorFilter, DefaultFilterQuality)",
                  "androidx.compose.foundation",
                  "androidx.compose.ui.graphics.DefaultAlpha",
                  "androidx.compose.ui.Alignment",
                  "androidx.compose.ui.graphics.drawscope.DrawScope.Companion.DefaultFilterQuality",
                  "androidx.compose.ui.layout.ContentScale.Fit",
              ),
      )
      @NonRestartableComposable
      public fun Image(
          bitmap: ImageBitmap,
          contentDescription: String?,
          modifier: Modifier = Modifier,
          alignment: Alignment = Alignment.Center,
          contentScale: ContentScale = ContentScale.Fit,
          alpha: Float = DefaultAlpha,
          colorFilter: ColorFilter? = null,
      ) {
          Image(
              bitmap,
              contentDescription,
              modifier,
              alignment,
              contentScale,
compose:
  id: live-androidx-foundation-foundation-foundation-image
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation
  sections:
    - id: live-androidx-foundation-foundation-foundation-image-lines-1
      title: androidx.compose.foundation Image.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-image-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-image-lines-106
      title: androidx.compose.foundation Image.kt source (lines 106–140)
      aliases:
        - androidx.compose.foundation.Image
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-image-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-image-lines-141
      title: androidx.compose.foundation Image.kt source (lines 141–175)
      aliases:
        - androidx.compose.foundation.Image
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-image-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-image-lines-176
      title: androidx.compose.foundation Image.kt source (lines 176–210)
      aliases:
        - androidx.compose.foundation.Image
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-image-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-image-lines-211
      title: androidx.compose.foundation Image.kt source (lines 211–245)
      aliases:
        - androidx.compose.foundation.Image
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-image-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-image-lines-246
      title: androidx.compose.foundation Image.kt source (lines 246–276)
      aliases:
        - androidx.compose.foundation.Image
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-image-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-image-lines-36
      title: androidx.compose.foundation Image.kt source (lines 36–70)
      aliases:
        - androidx.compose.foundation.Image
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-image-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-image-lines-71
      title: androidx.compose.foundation Image.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.Image
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-image-lines-71-source
      relatedIds: []
---

# androidx.compose.foundation Image.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt

## androidx.compose.foundation Image.kt source (lines 1–35)

/*
 * Copyright 2019 The Android Open Source Project
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

package androidx.compose.foundation

import androidx.compose.runtime.Composable
import androidx.compose.runtime.NonRestartableComposable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clipToBounds
import androidx.compose.ui.draw.paint
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.DefaultAlpha
import androidx.compose.ui.graphics.FilterQuality
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.drawscope.DrawScope.Companion.DefaultFilterQuality
import androidx.compose.ui.graphics.painter.BitmapPainter
import androidx.compose.ui.graphics.painter.ColorPainter
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.vector.rememberVectorPainter

Sources: [live-androidx-foundation-foundation-foundation-image-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt)

## androidx.compose.foundation Image.kt source (lines 106–140)

        alpha,
        colorFilter,
        FilterQuality.Low,
    )
}

/**
 * A composable that lays out and draws a given [ImageBitmap]. This will attempt to size the
 * composable according to the [ImageBitmap]'s given width and height. However, an optional
 * [Modifier] parameter can be provided to adjust sizing or draw additional content (ex.
 * background). Any unspecified dimension will leverage the [ImageBitmap]'s size as a minimum
 * constraint.
 *
 * The following sample shows basic usage of an Image composable to position and draw an
 * [ImageBitmap] on screen
 *
 * @sample androidx.compose.foundation.samples.ImageSample
 *
 * For use cases that require drawing a rectangular subset of the [ImageBitmap] consumers can use
 * overload that consumes a [Painter] parameter shown in this sample
 *
 * @sample androidx.compose.foundation.samples.BitmapPainterSubsectionSample
 * @param bitmap The [ImageBitmap] to draw
 * @param contentDescription text used by accessibility services to describe what this image
 *   represents. This should always be provided unless this image is used for decorative purposes,
 *   and does not represent a meaningful action that a user can take. This text should be localized,
 *   such as by using `androidx.compose.ui.res.stringResource` or similar
 * @param modifier Modifier used to adjust the layout algorithm or draw decoration content (ex.
 *   background)
 * @param alignment Optional alignment parameter used to place the [ImageBitmap] in the given bounds
 *   defined by the width and height
 * @param contentScale Optional scale parameter used to determine the aspect ratio scaling to be
 *   used if the bounds are a different size from the intrinsic size of the [ImageBitmap]
 * @param alpha Optional opacity to be applied to the [ImageBitmap] when it is rendered onscreen
 * @param colorFilter Optional ColorFilter to apply for the [ImageBitmap] when it is rendered

Sources: [live-androidx-foundation-foundation-foundation-image-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt)

## androidx.compose.foundation Image.kt source (lines 141–175)

 *   onscreen
 * @param filterQuality Sampling algorithm applied to the [bitmap] when it is scaled and drawn into
 *   the destination. The default is [FilterQuality.Low] which scales using a bilinear sampling
 *   algorithm
 */
@Composable
@NonRestartableComposable
public fun Image(
    bitmap: ImageBitmap,
    contentDescription: String?,
    modifier: Modifier = Modifier,
    alignment: Alignment = Alignment.Center,
    contentScale: ContentScale = ContentScale.Fit,
    alpha: Float = DefaultAlpha,
    colorFilter: ColorFilter? = null,
    filterQuality: FilterQuality = DefaultFilterQuality,
) {
    val bitmapPainter = remember(bitmap) { BitmapPainter(bitmap, filterQuality = filterQuality) }
    Image(
        painter = bitmapPainter,
        contentDescription = contentDescription,
        modifier = modifier,
        alignment = alignment,
        contentScale = contentScale,
        alpha = alpha,
        colorFilter = colorFilter,
    )
}

/**
 * A composable that lays out and draws a given [ImageVector]. This will attempt to size the
 * composable according to the [ImageVector]'s given width and height. However, an optional
 * [Modifier] parameter can be provided to adjust sizing or draw additional content (ex.
 * background). Any unspecified dimension will leverage the [ImageVector]'s size as a minimum
 * constraint.

Sources: [live-androidx-foundation-foundation-foundation-image-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt)

## androidx.compose.foundation Image.kt source (lines 176–210)

 *
 * @param imageVector The [ImageVector] to draw
 * @param contentDescription text used by accessibility services to describe what this image
 *   represents. This should always be provided unless this image is used for decorative purposes,
 *   and does not represent a meaningful action that a user can take. This text should be localized,
 *   such as by using `androidx.compose.ui.res.stringResource` or similar
 * @param modifier Modifier used to adjust the layout algorithm or draw decoration content (ex.
 *   background)
 * @param alignment Optional alignment parameter used to place the [ImageVector] in the given bounds
 *   defined by the width and height
 * @param contentScale Optional scale parameter used to determine the aspect ratio scaling to be
 *   used if the bounds are a different size from the intrinsic size of the [ImageVector]
 * @param alpha Optional opacity to be applied to the [ImageVector] when it is rendered onscreen
 * @param colorFilter Optional ColorFilter to apply for the [ImageVector] when it is rendered
 *   onscreen
 */
@Composable
@NonRestartableComposable
public fun Image(
    imageVector: ImageVector,
    contentDescription: String?,
    modifier: Modifier = Modifier,
    alignment: Alignment = Alignment.Center,
    contentScale: ContentScale = ContentScale.Fit,
    alpha: Float = DefaultAlpha,
    colorFilter: ColorFilter? = null,
): Unit =
    Image(
        painter = rememberVectorPainter(imageVector),
        contentDescription = contentDescription,
        modifier = modifier,
        alignment = alignment,
        contentScale = contentScale,
        alpha = alpha,
        colorFilter = colorFilter,

Sources: [live-androidx-foundation-foundation-foundation-image-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt)

## androidx.compose.foundation Image.kt source (lines 211–245)

    )

/**
 * Creates a composable that lays out and draws a given [Painter]. This will attempt to size the
 * composable according to the [Painter]'s intrinsic size. However, an optional [Modifier] parameter
 * can be provided to adjust sizing or draw additional content (ex. background)
 *
 * **NOTE** a Painter might not have an intrinsic size, so if no LayoutModifier is provided as part
 * of the Modifier chain this might size the [Image] composable to a width and height of zero and
 * will not draw any content. This can happen for Painter implementations that always attempt to
 * fill the bounds like [ColorPainter]
 *
 * @sample androidx.compose.foundation.samples.BitmapPainterSample
 * @param painter to draw
 * @param contentDescription text used by accessibility services to describe what this image
 *   represents. This should always be provided unless this image is used for decorative purposes,
 *   and does not represent a meaningful action that a user can take. This text should be localized,
 *   such as by using `androidx.compose.ui.res.stringResource` or similar
 * @param modifier Modifier used to adjust the layout algorithm or draw decoration content (ex.
 *   background)
 * @param alignment Optional alignment parameter used to place the [Painter] in the given bounds
 *   defined by the width and height.
 * @param contentScale Optional scale parameter used to determine the aspect ratio scaling to be
 *   used if the bounds are a different size from the intrinsic size of the [Painter]
 * @param alpha Optional opacity to be applied to the [Painter] when it is rendered onscreen the
 *   default renders the [Painter] completely opaque
 * @param colorFilter Optional colorFilter to apply for the [Painter] when it is rendered onscreen
 */
@Composable
public fun Image(
    painter: Painter,
    contentDescription: String?,
    modifier: Modifier = Modifier,
    alignment: Alignment = Alignment.Center,
    contentScale: ContentScale = ContentScale.Fit,

Sources: [live-androidx-foundation-foundation-foundation-image-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt)

## androidx.compose.foundation Image.kt source (lines 246–276)

    alpha: Float = DefaultAlpha,
    colorFilter: ColorFilter? = null,
) {
    val semantics =
        if (contentDescription != null) {
            Modifier.semantics {
                this.contentDescription = contentDescription
                this.role = Role.Image
            }
        } else {
            Modifier
        }

    // Explicitly use a simple Layout implementation here as Spacer squashes any non fixed
    // constraint with zero
    Layout(
        modifier
            .then(semantics)
            .clipToBounds()
            .paint(
                painter,
                alignment = alignment,
                contentScale = contentScale,
                alpha = alpha,
                colorFilter = colorFilter,
            )
    ) { _, constraints ->
        layout(constraints.minWidth, constraints.minHeight) {}
    }
}


Sources: [live-androidx-foundation-foundation-foundation-image-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt)

## androidx.compose.foundation Image.kt source (lines 36–70)

import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.role
import androidx.compose.ui.semantics.semantics

/**
 * A composable that lays out and draws a given [ImageBitmap]. This will attempt to size the
 * composable according to the [ImageBitmap]'s given width and height. However, an optional
 * [Modifier] parameter can be provided to adjust sizing or draw additional content (ex.
 * background). Any unspecified dimension will leverage the [ImageBitmap]'s size as a minimum
 * constraint.
 *
 * The following sample shows basic usage of an Image composable to position and draw an
 * [ImageBitmap] on screen
 *
 * @sample androidx.compose.foundation.samples.ImageSample
 *
 * For use cases that require drawing a rectangular subset of the [ImageBitmap] consumers can use
 * overload that consumes a [Painter] parameter shown in this sample
 *
 * @sample androidx.compose.foundation.samples.BitmapPainterSubsectionSample
 * @param bitmap The [ImageBitmap] to draw
 * @param contentDescription text used by accessibility services to describe what this image
 *   represents. This should always be provided unless this image is used for decorative purposes,
 *   and does not represent a meaningful action that a user can take. This text should be localized,
 *   such as by using `androidx.compose.ui.res.stringResource` or similar
 * @param modifier Modifier used to adjust the layout algorithm or draw decoration content (ex.
 *   background)
 * @param alignment Optional alignment parameter used to place the [ImageBitmap] in the given bounds
 *   defined by the width and height
 * @param contentScale Optional scale parameter used to determine the aspect ratio scaling to be
 *   used if the bounds are a different size from the intrinsic size of the [ImageBitmap]
 * @param alpha Optional opacity to be applied to the [ImageBitmap] when it is rendered onscreen

Sources: [live-androidx-foundation-foundation-foundation-image-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt)

## androidx.compose.foundation Image.kt source (lines 71–105)

 * @param colorFilter Optional ColorFilter to apply for the [ImageBitmap] when it is rendered
 *   onscreen
 */
@Composable
@Deprecated(
    "Consider usage of the Image composable that consumes an optional FilterQuality parameter",
    level = DeprecationLevel.HIDDEN,
    replaceWith =
        ReplaceWith(
            expression =
                "Image(bitmap, contentDescription, modifier, alignment, contentScale, " +
                    "alpha, colorFilter, DefaultFilterQuality)",
            "androidx.compose.foundation",
            "androidx.compose.ui.graphics.DefaultAlpha",
            "androidx.compose.ui.Alignment",
            "androidx.compose.ui.graphics.drawscope.DrawScope.Companion.DefaultFilterQuality",
            "androidx.compose.ui.layout.ContentScale.Fit",
        ),
)
@NonRestartableComposable
public fun Image(
    bitmap: ImageBitmap,
    contentDescription: String?,
    modifier: Modifier = Modifier,
    alignment: Alignment = Alignment.Center,
    contentScale: ContentScale = ContentScale.Fit,
    alpha: Float = DefaultAlpha,
    colorFilter: ColorFilter? = null,
) {
    Image(
        bitmap,
        contentDescription,
        modifier,
        alignment,
        contentScale,

Sources: [live-androidx-foundation-foundation-foundation-image-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Image.kt)
