---
type: reference
title: androidx.compose.ui.graphics Path.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    startLine: 1
    endLine: 35
    sha256: 89fda5f5b7ce90667c6c3b8fc06c478e641dab8d9295648e97ff9dd3f1d6cb12
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

      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.geometry.Rect
      import androidx.compose.ui.geometry.RoundRect
      import androidx.compose.ui.graphics.internal.JvmDefaultWithCompatibility

      public expect fun Path(): Path

      /** Create a new path, copying the contents from the src path. */
      public fun Path.copy(): Path = Path().apply { addPath(this@copy) }

      @JvmDefaultWithCompatibility
      /* expect class */ public interface Path {
          /**
           * Specifies how closed shapes (e.g. rectangles, ovals) are wound (oriented) when they are added
           * to a path.
           */
          public enum class Direction {
  - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    startLine: 106
    endLine: 140
    sha256: 13e2d217e48323c590915f0f9cf5db0481338e0ac625cb359075d7f27c95bcb5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              "Use relativeQuadraticTo() for consistency with relativeCubicTo()",
              replaceWith = ReplaceWith("relativeQuadraticTo(dx1, dy1, dx2, dy2)"),
              level = DeprecationLevel.WARNING,
          )
          public fun relativeQuadraticBezierTo(dx1: Float, dy1: Float, dx2: Float, dy2: Float)

          /**
           * Adds a quadratic bezier segment that curves from the current point to the point at the offset
           * ([dx2], [dy2]) from the current point, using the control point at the offset ([dx1], [dy1])
           * from the current point.
           */
          public fun relativeQuadraticTo(dx1: Float, dy1: Float, dx2: Float, dy2: Float) {
              @Suppress("DEPRECATION") relativeQuadraticBezierTo(dx1, dy1, dx2, dy2)
          }

          /**
           * Adds a cubic bezier segment that curves from the current point to the given point ([x3],
           * [y3]), using the control points ([x1], [y1]) and ([x2], [y2]).
           */
          public fun cubicTo(x1: Float, y1: Float, x2: Float, y2: Float, x3: Float, y3: Float)

          /**
           * Adds a cubic bezier segment that curves from the current point to the point at the offset
           * ([dx3], [dy3]) from the current point, using the control points at the offsets ([dx1], [dy1])
           * and ([dx2], [dy2]) from the current point.
           */
          public fun relativeCubicTo(
              dx1: Float,
              dy1: Float,
              dx2: Float,
              dy2: Float,
              dx3: Float,
              dy3: Float,
          )
  - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    startLine: 141
    endLine: 175
    sha256: 78d01de4768b840982f633866048559fe052f1c4c6bbab7958f77c6d27cb9d66
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /**
           * If the [forceMoveTo] argument is false, adds a straight line segment and an arc segment.
           *
           * If the [forceMoveTo] argument is true, starts a new subpath consisting of an arc segment.
           *
           * In either case, the arc segment consists of the arc that follows the edge of the oval bounded
           * by the given rectangle, from startAngle radians around the oval up to startAngle + sweepAngle
           * radians around the oval, with zero radians being the point on the right hand side of the oval
           * that crosses the horizontal line that intersects the center of the rectangle and with
           * positive angles going clockwise around the oval.
           *
           * The line segment added if `forceMoveTo` is false starts at the current point and ends at the
           * start of the arc.
           */
          public fun arcToRad(
              rect: Rect,
              startAngleRadians: Float,
              sweepAngleRadians: Float,
              forceMoveTo: Boolean,
          ) {
              arcTo(rect, degrees(startAngleRadians), degrees(sweepAngleRadians), forceMoveTo)
          }

          /**
           * If the [forceMoveTo] argument is false, adds a straight line segment and an arc segment.
           *
           * If the [forceMoveTo] argument is true, starts a new subpath consisting of an arc segment.
           *
           * In either case, the arc segment consists of the arc that follows the edge of the oval bounded
           * by the given rectangle, from startAngle degrees around the oval up to startAngle + sweepAngle
           * degrees around the oval, with zero degrees being the point on the right hand side of the oval
           * that crosses the horizontal line that intersects the center of the rectangle and with
           * positive angles going clockwise around the oval.
           *
           * The line segment added if `forceMoveTo` is false starts at the current point and ends at the
  - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    startLine: 176
    endLine: 210
    sha256: 9fdef4df046767d89cd22b2de96eb8bd07a0b51c963264641f40b1af82797c71
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * start of the arc.
           */
          public fun arcTo(
              rect: Rect,
              startAngleDegrees: Float,
              sweepAngleDegrees: Float,
              forceMoveTo: Boolean,
          )

          /**
           * Adds a new subpath that consists of four lines that outline the given rectangle. The
           * rectangle is wound counter-clockwise.
           */
          @Deprecated(
              "Prefer usage of addRect() with a winding direction",
              replaceWith = ReplaceWith("addRect(rect)"),
              level = DeprecationLevel.HIDDEN,
          )
          public fun addRect(rect: Rect)

          /**
           * Adds a new subpath that consists of four lines that outline the given rectangle. The
           * direction to wind the rectangle's contour is specified by [direction].
           */
          public fun addRect(rect: Rect, direction: Direction = Direction.CounterClockwise)

          /**
           * Adds a new subpath that consists of a curve that forms the ellipse that fills the given
           * rectangle.
           *
           * To add a circle, pass an appropriate rectangle as `oval`. [Rect] can be used to easily
           * describe the circle's center [Offset] and radius.
           *
           * The oval is wound counter-clockwise.
           */
  - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    startLine: 211
    endLine: 245
    sha256: d211f867698b679fcb938a425b8770b7bbeeb78be3c966e9f3e5cb24f4bdaf74
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          @Deprecated(
              "Prefer usage of addOval() with a winding direction",
              replaceWith = ReplaceWith("addOval(oval)"),
              level = DeprecationLevel.HIDDEN,
          )
          public fun addOval(oval: Rect)

          /**
           * Adds a new subpath that consists of a curve that forms the ellipse that fills the given
           * rectangle.
           *
           * To add a circle, pass an appropriate rectangle as `oval`. [Rect] can be used to easily
           * describe the circle's center [Offset] and radius.
           *
           * The direction to wind the rectangle's contour is specified by [direction].
           */
          public fun addOval(oval: Rect, direction: Direction = Direction.CounterClockwise)

          /**
           * Add a round rectangle shape to the path from the given [RoundRect]. The round rectangle is
           * wound counter-clockwise.
           */
          @Deprecated(
              "Prefer usage of addRoundRect() with a winding direction",
              replaceWith = ReplaceWith("addRoundRect(roundRect)"),
              level = DeprecationLevel.HIDDEN,
          )
          public fun addRoundRect(roundRect: RoundRect)

          /**
           * Add a round rectangle shape to the path from the given [RoundRect]. The direction to wind the
           * rectangle's contour is specified by [direction].
           */
          public fun addRoundRect(roundRect: RoundRect, direction: Direction = Direction.CounterClockwise)
  - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    startLine: 246
    endLine: 280
    sha256: 0db779643dc0faad97876a990c2e28aabcc06b4be57f23f042dec40d3b37be65
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /**
           * Adds a new subpath with one arc segment that consists of the arc that follows the edge of the
           * oval bounded by the given rectangle, from startAngle radians around the oval up to
           * startAngle + sweepAngle radians around the oval, with zero radians being the point on the
           * right hand side of the oval that crosses the horizontal line that intersects the center of
           * the rectangle and with positive angles going clockwise around the oval.
           */
          public fun addArcRad(oval: Rect, startAngleRadians: Float, sweepAngleRadians: Float)

          /**
           * Adds a new subpath with one arc segment that consists of the arc that follows the edge of the
           * oval bounded by the given rectangle, from startAngle degrees around the oval up to
           * startAngle + sweepAngle degrees around the oval, with zero degrees being the point on the
           * right hand side of the oval that crosses the horizontal line that intersects the center of
           * the rectangle and with positive angles going clockwise around the oval.
           */
          public fun addArc(oval: Rect, startAngleDegrees: Float, sweepAngleDegrees: Float)

          /** Adds a new subpath that consists of the given `path` offset by the given `offset`. */
          public fun addPath(path: Path, offset: Offset = Offset.Zero)

          /**
           * Closes the last subpath, as if a straight line had been drawn from the current point to the
           * first point of the subpath.
           */
          public fun close()

          /**
           * Clears the [Path] object of all subpaths, returning it to the same state it had when it was
           * created. The _current point_ is reset to the origin. This does NOT change the fill-type
           * setting.
           */
          public fun reset()

          /**
  - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    startLine: 281
    endLine: 315
    sha256: 240901ccc75b7cf8744a13c7c8aee75d96d95b8e00c28802c995e4bc7eaba533
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Rewinds the path: clears any lines and curves from the path but keeps the internal data
           * structure for faster reuse.
           */
          public fun rewind() {
              // Call reset to avoid AbstractMethodAdded lint API errors. Implementations are already
              // calling into the respective platform Path#rewind equivalent.
              reset()
          }

          /** Translates all the segments of every subpath by the given offset. */
          public fun translate(offset: Offset)

          /** Transform the points in this path by the provided matrix */
          public fun transform(matrix: Matrix) {
              // NO-OP to ensure runtime + compile time compatibility
          }

          /**
           * Compute the bounds of the control points of the path, and write the answer into bounds. If
           * the path contains 0 or 1 points, the bounds is set to (0,0,0,0)
           */
          public fun getBounds(): Rect

          /**
           * Creates a new [PathIterator] for this [Path] that evaluates conics as quadratics. To preserve
           * conics, use the [Path.iterator] function that takes a [PathIterator.ConicEvaluation]
           * parameter.
           */
          public operator fun iterator(): PathIterator = PathIterator(this)

          /**
           * Creates a new [PathIterator] for this [Path]. To preserve conics as conics (not convert them
           * to quadratics), set [conicEvaluation] to [PathIterator.ConicEvaluation.AsConic].
           *
           * @param conicEvaluation Indicates how to evaluate conic segments
  - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    startLine: 316
    endLine: 350
    sha256: 5cfe282debc0178a4c5b955292311c543d38b87e2d03b5012c57ca8257b30aa4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param tolerance When [conicEvaluation] is set to [PathIterator.ConicEvaluation.AsQuadratics]
           *   defines the maximum distance between the original conic curve and its quadratic
           *   approximations
           */
          public fun iterator(
              conicEvaluation: PathIterator.ConicEvaluation,
              tolerance: Float = 0.25f,
          ): PathIterator = PathIterator(this, conicEvaluation, tolerance)

          /**
           * Set this path to the result of applying the Op to the two specified paths. The resulting path
           * will be constructed from non-overlapping contours. The curve order is reduced where possible
           * so that cubics may be turned into quadratics, and quadratics maybe turned into lines.
           *
           * @param path1 The first operand (for difference, the minuend)
           * @param path2 The second operand (for difference, the subtrahend)
           * @param operation [PathOperation] to apply to the 2 specified paths
           * @return True if operation succeeded, false otherwise and this path remains unmodified.
           */
          public fun op(path1: Path, path2: Path, operation: PathOperation): Boolean

          /** Returns the union of two paths as a new [Path]. */
          public operator fun plus(path: Path): Path =
              Path().apply { op(this@Path, path, PathOperation.Union) }

          /** Returns the difference of two paths as a new [Path]. */
          public operator fun minus(path: Path): Path =
              Path().apply { op(this@Path, path, PathOperation.Difference) }

          /** Returns the union of two paths as a new [Path]. */
          public infix fun or(path: Path): Path = this + path

          /**
           * Returns the intersection of two paths as a new [Path]. If the paths do not intersect, returns
           * an empty path.
  - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    startLine: 351
    endLine: 381
    sha256: 2c645659109351dc66776a0823a26d8200c38164ca2564badd6cbfeef4035218
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
           */
          public infix fun and(path: Path): Path =
              Path().apply { op(this@Path, path, PathOperation.Intersect) }

          /** Returns the union minus the intersection of two paths as a new [Path]. */
          public infix fun xor(path: Path): Path = Path().apply { op(this@Path, path, PathOperation.Xor) }

          public companion object {
              /**
               * Combines the two paths according to the manner specified by the given `operation`.
               *
               * The resulting path will be constructed from non-overlapping contours. The curve order is
               * reduced where possible so that cubics may be turned into quadratics, and quadratics maybe
               * turned into lines.
               *
               * Throws [IllegalArgumentException] if the combining operation fails.
               */
              public fun combine(operation: PathOperation, path1: Path, path2: Path): Path {
                  val path = Path()
                  if (path.op(path1, path2, operation)) {
                      return path
                  }

                  throw IllegalArgumentException(
                      "Path.combine() failed.  This may be due an invalid " +
                          "path; in particular, check for NaN values."
                  )
              }
          }
      }
  - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    startLine: 36
    endLine: 70
    sha256: 629a60cbad4c917d0abadec05d891f523169d685e4c0d7f94edff104fca07e2c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              /** The shape is wound in counter-clockwise order. */
              CounterClockwise,
              /** The shape is wound in clockwise order. */
              Clockwise,
          }

          /**
           * Determines how the interior of this path is calculated.
           *
           * Defaults to the non-zero winding rule, [PathFillType.NonZero].
           */
          public var fillType: PathFillType

          /**
           * Returns the path's convexity, as defined by the content of the path.
           *
           * A path is convex if it has a single contour, and only ever curves in a single direction.
           *
           * This function will calculate the convexity of the path from its control points, and cache the
           * result.
           */
          public val isConvex: Boolean

          /**
           * Returns true if the path is empty (contains no lines or curves)
           *
           * @return true if the path is empty (contains no lines or curves)
           */
          public val isEmpty: Boolean

          /** Starts a new subpath at the given coordinate */
          public fun moveTo(x: Float, y: Float)

          /** Starts a new subpath at the given offset from the current point */
          public fun relativeMoveTo(dx: Float, dy: Float)
  - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt
    startLine: 71
    endLine: 105
    sha256: a5cb9ec6c6c2c959e399605f8748d8499d6bbd2a51c777868a727a3517b4a448
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /** Adds a straight line segment from the current point to the given point */
          public fun lineTo(x: Float, y: Float)

          /**
           * Adds a straight line segment from the current point to the point at the given offset from the
           * current point.
           */
          public fun relativeLineTo(dx: Float, dy: Float)

          /**
           * Adds a quadratic bezier segment that curves from the current point to the given point ([x2],
           * [y2]), using the control point ([x1], [y1]).
           */
          @Deprecated(
              "Use quadraticTo() for consistency with cubicTo()",
              replaceWith = ReplaceWith("quadraticTo(x1, y1, x2, y2)"),
              level = DeprecationLevel.WARNING,
          )
          public fun quadraticBezierTo(x1: Float, y1: Float, x2: Float, y2: Float)

          /**
           * Adds a quadratic bezier segment that curves from the current point to the given point ([x2],
           * [y2]), using the control point ([x1], [y1]).
           */
          public fun quadraticTo(x1: Float, y1: Float, x2: Float, y2: Float) {
              @Suppress("DEPRECATION") quadraticBezierTo(x1, y1, x2, y2)
          }

          /**
           * Adds a quadratic bezier segment that curves from the current point to the point at the offset
           * ([dx2], [dy2]) from the current point, using the control point at the offset ([dx1], [dy1])
           * from the current point.
           */
          @Deprecated(
compose:
  id: live-androidx-ui-ui-graphics-ui-graphics-path
  artifact: androidx.compose.ui:ui-graphics
  fqn: androidx.compose.ui.graphics
  sections:
    - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-1
      title: androidx.compose.ui.graphics Path.kt source (lines 1–35)
      aliases:
        - androidx.compose.ui.graphics.Path
        - androidx.compose.ui.graphics.copy
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-path-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-106
      title: androidx.compose.ui.graphics Path.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-path-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-141
      title: androidx.compose.ui.graphics Path.kt source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-path-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-176
      title: androidx.compose.ui.graphics Path.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-path-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-211
      title: androidx.compose.ui.graphics Path.kt source (lines 211–245)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-path-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-246
      title: androidx.compose.ui.graphics Path.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.graphics.Path
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-path-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-281
      title: androidx.compose.ui.graphics Path.kt source (lines 281–315)
      aliases:
        - androidx.compose.ui.graphics.Path
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-path-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-316
      title: androidx.compose.ui.graphics Path.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.graphics.Path
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-path-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-351
      title: androidx.compose.ui.graphics Path.kt source (lines 351–381)
      aliases:
        - androidx.compose.ui.graphics.Path
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-path-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-36
      title: androidx.compose.ui.graphics Path.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-path-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-path-lines-71
      title: androidx.compose.ui.graphics Path.kt source (lines 71–105)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-path-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.graphics Path.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt

## androidx.compose.ui.graphics Path.kt source (lines 1–35)

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

import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.geometry.RoundRect
import androidx.compose.ui.graphics.internal.JvmDefaultWithCompatibility

public expect fun Path(): Path

/** Create a new path, copying the contents from the src path. */
public fun Path.copy(): Path = Path().apply { addPath(this@copy) }

@JvmDefaultWithCompatibility
/* expect class */ public interface Path {
    /**
     * Specifies how closed shapes (e.g. rectangles, ovals) are wound (oriented) when they are added
     * to a path.
     */
    public enum class Direction {

Sources: [live-androidx-ui-ui-graphics-ui-graphics-path-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt)

## androidx.compose.ui.graphics Path.kt source (lines 106–140)

        "Use relativeQuadraticTo() for consistency with relativeCubicTo()",
        replaceWith = ReplaceWith("relativeQuadraticTo(dx1, dy1, dx2, dy2)"),
        level = DeprecationLevel.WARNING,
    )
    public fun relativeQuadraticBezierTo(dx1: Float, dy1: Float, dx2: Float, dy2: Float)

    /**
     * Adds a quadratic bezier segment that curves from the current point to the point at the offset
     * ([dx2], [dy2]) from the current point, using the control point at the offset ([dx1], [dy1])
     * from the current point.
     */
    public fun relativeQuadraticTo(dx1: Float, dy1: Float, dx2: Float, dy2: Float) {
        @Suppress("DEPRECATION") relativeQuadraticBezierTo(dx1, dy1, dx2, dy2)
    }

    /**
     * Adds a cubic bezier segment that curves from the current point to the given point ([x3],
     * [y3]), using the control points ([x1], [y1]) and ([x2], [y2]).
     */
    public fun cubicTo(x1: Float, y1: Float, x2: Float, y2: Float, x3: Float, y3: Float)

    /**
     * Adds a cubic bezier segment that curves from the current point to the point at the offset
     * ([dx3], [dy3]) from the current point, using the control points at the offsets ([dx1], [dy1])
     * and ([dx2], [dy2]) from the current point.
     */
    public fun relativeCubicTo(
        dx1: Float,
        dy1: Float,
        dx2: Float,
        dy2: Float,
        dx3: Float,
        dy3: Float,
    )


Sources: [live-androidx-ui-ui-graphics-ui-graphics-path-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt)

## androidx.compose.ui.graphics Path.kt source (lines 141–175)

    /**
     * If the [forceMoveTo] argument is false, adds a straight line segment and an arc segment.
     *
     * If the [forceMoveTo] argument is true, starts a new subpath consisting of an arc segment.
     *
     * In either case, the arc segment consists of the arc that follows the edge of the oval bounded
     * by the given rectangle, from startAngle radians around the oval up to startAngle + sweepAngle
     * radians around the oval, with zero radians being the point on the right hand side of the oval
     * that crosses the horizontal line that intersects the center of the rectangle and with
     * positive angles going clockwise around the oval.
     *
     * The line segment added if `forceMoveTo` is false starts at the current point and ends at the
     * start of the arc.
     */
    public fun arcToRad(
        rect: Rect,
        startAngleRadians: Float,
        sweepAngleRadians: Float,
        forceMoveTo: Boolean,
    ) {
        arcTo(rect, degrees(startAngleRadians), degrees(sweepAngleRadians), forceMoveTo)
    }

    /**
     * If the [forceMoveTo] argument is false, adds a straight line segment and an arc segment.
     *
     * If the [forceMoveTo] argument is true, starts a new subpath consisting of an arc segment.
     *
     * In either case, the arc segment consists of the arc that follows the edge of the oval bounded
     * by the given rectangle, from startAngle degrees around the oval up to startAngle + sweepAngle
     * degrees around the oval, with zero degrees being the point on the right hand side of the oval
     * that crosses the horizontal line that intersects the center of the rectangle and with
     * positive angles going clockwise around the oval.
     *
     * The line segment added if `forceMoveTo` is false starts at the current point and ends at the

Sources: [live-androidx-ui-ui-graphics-ui-graphics-path-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt)

## androidx.compose.ui.graphics Path.kt source (lines 176–210)

     * start of the arc.
     */
    public fun arcTo(
        rect: Rect,
        startAngleDegrees: Float,
        sweepAngleDegrees: Float,
        forceMoveTo: Boolean,
    )

    /**
     * Adds a new subpath that consists of four lines that outline the given rectangle. The
     * rectangle is wound counter-clockwise.
     */
    @Deprecated(
        "Prefer usage of addRect() with a winding direction",
        replaceWith = ReplaceWith("addRect(rect)"),
        level = DeprecationLevel.HIDDEN,
    )
    public fun addRect(rect: Rect)

    /**
     * Adds a new subpath that consists of four lines that outline the given rectangle. The
     * direction to wind the rectangle's contour is specified by [direction].
     */
    public fun addRect(rect: Rect, direction: Direction = Direction.CounterClockwise)

    /**
     * Adds a new subpath that consists of a curve that forms the ellipse that fills the given
     * rectangle.
     *
     * To add a circle, pass an appropriate rectangle as `oval`. [Rect] can be used to easily
     * describe the circle's center [Offset] and radius.
     *
     * The oval is wound counter-clockwise.
     */

Sources: [live-androidx-ui-ui-graphics-ui-graphics-path-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt)

## androidx.compose.ui.graphics Path.kt source (lines 211–245)

    @Deprecated(
        "Prefer usage of addOval() with a winding direction",
        replaceWith = ReplaceWith("addOval(oval)"),
        level = DeprecationLevel.HIDDEN,
    )
    public fun addOval(oval: Rect)

    /**
     * Adds a new subpath that consists of a curve that forms the ellipse that fills the given
     * rectangle.
     *
     * To add a circle, pass an appropriate rectangle as `oval`. [Rect] can be used to easily
     * describe the circle's center [Offset] and radius.
     *
     * The direction to wind the rectangle's contour is specified by [direction].
     */
    public fun addOval(oval: Rect, direction: Direction = Direction.CounterClockwise)

    /**
     * Add a round rectangle shape to the path from the given [RoundRect]. The round rectangle is
     * wound counter-clockwise.
     */
    @Deprecated(
        "Prefer usage of addRoundRect() with a winding direction",
        replaceWith = ReplaceWith("addRoundRect(roundRect)"),
        level = DeprecationLevel.HIDDEN,
    )
    public fun addRoundRect(roundRect: RoundRect)

    /**
     * Add a round rectangle shape to the path from the given [RoundRect]. The direction to wind the
     * rectangle's contour is specified by [direction].
     */
    public fun addRoundRect(roundRect: RoundRect, direction: Direction = Direction.CounterClockwise)


Sources: [live-androidx-ui-ui-graphics-ui-graphics-path-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt)

## androidx.compose.ui.graphics Path.kt source (lines 246–280)

    /**
     * Adds a new subpath with one arc segment that consists of the arc that follows the edge of the
     * oval bounded by the given rectangle, from startAngle radians around the oval up to
     * startAngle + sweepAngle radians around the oval, with zero radians being the point on the
     * right hand side of the oval that crosses the horizontal line that intersects the center of
     * the rectangle and with positive angles going clockwise around the oval.
     */
    public fun addArcRad(oval: Rect, startAngleRadians: Float, sweepAngleRadians: Float)

    /**
     * Adds a new subpath with one arc segment that consists of the arc that follows the edge of the
     * oval bounded by the given rectangle, from startAngle degrees around the oval up to
     * startAngle + sweepAngle degrees around the oval, with zero degrees being the point on the
     * right hand side of the oval that crosses the horizontal line that intersects the center of
     * the rectangle and with positive angles going clockwise around the oval.
     */
    public fun addArc(oval: Rect, startAngleDegrees: Float, sweepAngleDegrees: Float)

    /** Adds a new subpath that consists of the given `path` offset by the given `offset`. */
    public fun addPath(path: Path, offset: Offset = Offset.Zero)

    /**
     * Closes the last subpath, as if a straight line had been drawn from the current point to the
     * first point of the subpath.
     */
    public fun close()

    /**
     * Clears the [Path] object of all subpaths, returning it to the same state it had when it was
     * created. The _current point_ is reset to the origin. This does NOT change the fill-type
     * setting.
     */
    public fun reset()

    /**

Sources: [live-androidx-ui-ui-graphics-ui-graphics-path-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt)

## androidx.compose.ui.graphics Path.kt source (lines 281–315)

     * Rewinds the path: clears any lines and curves from the path but keeps the internal data
     * structure for faster reuse.
     */
    public fun rewind() {
        // Call reset to avoid AbstractMethodAdded lint API errors. Implementations are already
        // calling into the respective platform Path#rewind equivalent.
        reset()
    }

    /** Translates all the segments of every subpath by the given offset. */
    public fun translate(offset: Offset)

    /** Transform the points in this path by the provided matrix */
    public fun transform(matrix: Matrix) {
        // NO-OP to ensure runtime + compile time compatibility
    }

    /**
     * Compute the bounds of the control points of the path, and write the answer into bounds. If
     * the path contains 0 or 1 points, the bounds is set to (0,0,0,0)
     */
    public fun getBounds(): Rect

    /**
     * Creates a new [PathIterator] for this [Path] that evaluates conics as quadratics. To preserve
     * conics, use the [Path.iterator] function that takes a [PathIterator.ConicEvaluation]
     * parameter.
     */
    public operator fun iterator(): PathIterator = PathIterator(this)

    /**
     * Creates a new [PathIterator] for this [Path]. To preserve conics as conics (not convert them
     * to quadratics), set [conicEvaluation] to [PathIterator.ConicEvaluation.AsConic].
     *
     * @param conicEvaluation Indicates how to evaluate conic segments

Sources: [live-androidx-ui-ui-graphics-ui-graphics-path-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt)

## androidx.compose.ui.graphics Path.kt source (lines 316–350)

     * @param tolerance When [conicEvaluation] is set to [PathIterator.ConicEvaluation.AsQuadratics]
     *   defines the maximum distance between the original conic curve and its quadratic
     *   approximations
     */
    public fun iterator(
        conicEvaluation: PathIterator.ConicEvaluation,
        tolerance: Float = 0.25f,
    ): PathIterator = PathIterator(this, conicEvaluation, tolerance)

    /**
     * Set this path to the result of applying the Op to the two specified paths. The resulting path
     * will be constructed from non-overlapping contours. The curve order is reduced where possible
     * so that cubics may be turned into quadratics, and quadratics maybe turned into lines.
     *
     * @param path1 The first operand (for difference, the minuend)
     * @param path2 The second operand (for difference, the subtrahend)
     * @param operation [PathOperation] to apply to the 2 specified paths
     * @return True if operation succeeded, false otherwise and this path remains unmodified.
     */
    public fun op(path1: Path, path2: Path, operation: PathOperation): Boolean

    /** Returns the union of two paths as a new [Path]. */
    public operator fun plus(path: Path): Path =
        Path().apply { op(this@Path, path, PathOperation.Union) }

    /** Returns the difference of two paths as a new [Path]. */
    public operator fun minus(path: Path): Path =
        Path().apply { op(this@Path, path, PathOperation.Difference) }

    /** Returns the union of two paths as a new [Path]. */
    public infix fun or(path: Path): Path = this + path

    /**
     * Returns the intersection of two paths as a new [Path]. If the paths do not intersect, returns
     * an empty path.

Sources: [live-androidx-ui-ui-graphics-ui-graphics-path-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt)

## androidx.compose.ui.graphics Path.kt source (lines 351–381)

     */
    public infix fun and(path: Path): Path =
        Path().apply { op(this@Path, path, PathOperation.Intersect) }

    /** Returns the union minus the intersection of two paths as a new [Path]. */
    public infix fun xor(path: Path): Path = Path().apply { op(this@Path, path, PathOperation.Xor) }

    public companion object {
        /**
         * Combines the two paths according to the manner specified by the given `operation`.
         *
         * The resulting path will be constructed from non-overlapping contours. The curve order is
         * reduced where possible so that cubics may be turned into quadratics, and quadratics maybe
         * turned into lines.
         *
         * Throws [IllegalArgumentException] if the combining operation fails.
         */
        public fun combine(operation: PathOperation, path1: Path, path2: Path): Path {
            val path = Path()
            if (path.op(path1, path2, operation)) {
                return path
            }

            throw IllegalArgumentException(
                "Path.combine() failed.  This may be due an invalid " +
                    "path; in particular, check for NaN values."
            )
        }
    }
}


Sources: [live-androidx-ui-ui-graphics-ui-graphics-path-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt)

## androidx.compose.ui.graphics Path.kt source (lines 36–70)

        /** The shape is wound in counter-clockwise order. */
        CounterClockwise,
        /** The shape is wound in clockwise order. */
        Clockwise,
    }

    /**
     * Determines how the interior of this path is calculated.
     *
     * Defaults to the non-zero winding rule, [PathFillType.NonZero].
     */
    public var fillType: PathFillType

    /**
     * Returns the path's convexity, as defined by the content of the path.
     *
     * A path is convex if it has a single contour, and only ever curves in a single direction.
     *
     * This function will calculate the convexity of the path from its control points, and cache the
     * result.
     */
    public val isConvex: Boolean

    /**
     * Returns true if the path is empty (contains no lines or curves)
     *
     * @return true if the path is empty (contains no lines or curves)
     */
    public val isEmpty: Boolean

    /** Starts a new subpath at the given coordinate */
    public fun moveTo(x: Float, y: Float)

    /** Starts a new subpath at the given offset from the current point */
    public fun relativeMoveTo(dx: Float, dy: Float)

Sources: [live-androidx-ui-ui-graphics-ui-graphics-path-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt)

## androidx.compose.ui.graphics Path.kt source (lines 71–105)


    /** Adds a straight line segment from the current point to the given point */
    public fun lineTo(x: Float, y: Float)

    /**
     * Adds a straight line segment from the current point to the point at the given offset from the
     * current point.
     */
    public fun relativeLineTo(dx: Float, dy: Float)

    /**
     * Adds a quadratic bezier segment that curves from the current point to the given point ([x2],
     * [y2]), using the control point ([x1], [y1]).
     */
    @Deprecated(
        "Use quadraticTo() for consistency with cubicTo()",
        replaceWith = ReplaceWith("quadraticTo(x1, y1, x2, y2)"),
        level = DeprecationLevel.WARNING,
    )
    public fun quadraticBezierTo(x1: Float, y1: Float, x2: Float, y2: Float)

    /**
     * Adds a quadratic bezier segment that curves from the current point to the given point ([x2],
     * [y2]), using the control point ([x1], [y1]).
     */
    public fun quadraticTo(x1: Float, y1: Float, x2: Float, y2: Float) {
        @Suppress("DEPRECATION") quadraticBezierTo(x1, y1, x2, y2)
    }

    /**
     * Adds a quadratic bezier segment that curves from the current point to the point at the offset
     * ([dx2], [dy2]) from the current point, using the control point at the offset ([dx1], [dy1])
     * from the current point.
     */
    @Deprecated(

Sources: [live-androidx-ui-ui-graphics-ui-graphics-path-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Path.kt)
