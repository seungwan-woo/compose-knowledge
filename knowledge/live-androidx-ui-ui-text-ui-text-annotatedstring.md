---
type: reference
title: androidx.compose.ui.text AnnotatedString.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1
    endLine: 35
    sha256: b8d7610f480702d2dee2056bca589847e290cbc5cad8a47b71c77dcbb1ed4785
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

      package androidx.compose.ui.text

      import androidx.collection.mutableIntListOf
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.saveable.Saver
      import androidx.compose.ui.text.AnnotatedString.Annotation
      import androidx.compose.ui.text.AnnotatedString.Builder
      import androidx.compose.ui.text.AnnotatedString.Range
      import androidx.compose.ui.text.internal.checkPrecondition
      import androidx.compose.ui.text.internal.requirePrecondition
      import androidx.compose.ui.text.intl.Locale
      import androidx.compose.ui.text.intl.LocaleList
      import androidx.compose.ui.text.style.TextIndent
      import androidx.compose.ui.unit.TextUnit
      import androidx.compose.ui.unit.TextUnitType.Companion.Em
      import androidx.compose.ui.unit.TextUnitType.Companion.Sp
      import androidx.compose.ui.unit.em
      import androidx.compose.ui.unit.sp
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1016-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1016
    endLine: 1050
    sha256: a15bc4fa0ae072ae48fa4e1a805a8128d64898faf488456202a6f5aff9d5cd1f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              /**
               * Attach the given [annotation] to any appended text until a corresponding [pop] is called.
               *
               * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderPushStringAnnotationSample
               * @param tag the tag used to distinguish annotations
               * @param annotation the string annotation attached on this AnnotatedString
               * @see getStringAnnotations
               * @see Range
               */
              public fun pushStringAnnotation(tag: String, annotation: String): Int {
                  MutableRange(item = StringAnnotation(annotation), start = text.length, tag = tag).also {
                      styleStack.add(it)
                      annotations.add(it)
                  }
                  return styleStack.size - 1
              }

              /**
               * Attach the given [ttsAnnotation] to any appended text until a corresponding [pop] is
               * called.
               *
               * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderPushStringAnnotationSample
               * @param ttsAnnotation an object that stores text to speech metadata that intended for the
               *   TTS engine.
               * @see getStringAnnotations
               * @see Range
               */
              public fun pushTtsAnnotation(ttsAnnotation: TtsAnnotation): Int {
                  MutableRange(item = ttsAnnotation, start = text.length).also {
                      styleStack.add(it)
                      annotations.add(it)
                  }
                  return styleStack.size - 1
              }
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1051-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1051
    endLine: 1085
    sha256: c1bfde53350bfd7d5f84648ae816a5998fed7600eb9af10729b11cd65dc3c58c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              /**
               * Attach the given [UrlAnnotation] to any appended text until a corresponding [pop] is
               * called.
               *
               * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderPushStringAnnotationSample
               * @param urlAnnotation A [UrlAnnotation] object that stores the URL being linked to.
               * @see getStringAnnotations
               * @see Range
               */
              @ExperimentalTextApi
              @Suppress("BuilderSetStyle", "Deprecation")
              @Deprecated(
                  "Use LinkAnnotation API for links instead",
                  ReplaceWith("pushLink(, start, end)"),
              )
              public fun pushUrlAnnotation(urlAnnotation: UrlAnnotation): Int {
                  MutableRange(item = urlAnnotation, start = text.length).also {
                      styleStack.add(it)
                      annotations.add(it)
                  }
                  return styleStack.size - 1
              }

              /**
               * Attach the given [LinkAnnotation] to any appended text until a corresponding [pop] is
               * called.
               *
               * @param link A [LinkAnnotation] object that stores the URL or clickable tag being linked
               *   to.
               * @see getStringAnnotations
               * @see Range
               */
              @Suppress("BuilderSetStyle")
              public fun pushLink(link: LinkAnnotation): Int {
                  MutableRange(item = link, start = text.length).also {
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 106
    endLine: 140
    sha256: 52fb302681a5b8b038b684b03fa7fbaa157cfdf6ff85344c24b93caaf3083e42
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param spanStyles styles to apply to text. Overlapping [SpanStyle]s merge (see
           *   [AnnotatedString] merging rules).
           * @param paragraphStyles paragraph styles to apply to ranges of text. Ranges must follow the
           *   paragraph arrangement rules (see [AnnotatedString] class documentation).
           * @throws IllegalArgumentException if [paragraphStyles] contains invalid overlapping ranges
           * @sample androidx.compose.ui.text.samples.AnnotatedStringConstructorSample
           * @see SpanStyle
           * @see ParagraphStyle
           */
          public constructor(
              text: String,
              spanStyles: List<Range<SpanStyle>> = listOf(),
              paragraphStyles: List<Range<ParagraphStyle>> = listOf(),
          ) : this(constructAnnotationsFromSpansAndParagraphs(spanStyles, paragraphStyles), text)

          /**
           * Creates an [AnnotatedString] with annotations.
           *
           * @param text text to display
           * @param annotations annotations to apply to text. Overlapping [SpanStyle]s merge (see
           *   [AnnotatedString] merging rules). [ParagraphStyle] ranges must follow paragraph arrangement
           *   rules (see [AnnotatedString] class documentation).
           * @throws IllegalArgumentException if [annotations] contains invalid overlapping paragraph
           *   ranges
           * @sample androidx.compose.ui.text.samples.AnnotatedStringMainConstructorSample
           * @see Annotation
           */
          public constructor(
              text: String,
              annotations: List<Range<out Annotation>> = listOf(),
          ) : this(annotations.ifEmpty { null }, text)

          init {
              var spanStyles: MutableList<Range<SpanStyle>>? = null
              var paragraphStyles: MutableList<Range<ParagraphStyle>>? = null
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1086-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1086
    endLine: 1120
    sha256: c0d15d474c081cf8c2ab67236d83d3347e2830dfd22b3e8ce7b27cac47d88b1a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      styleStack.add(it)
                      annotations.add(it)
                  }
                  return styleStack.size - 1
              }

              /**
               * Ends the style or annotation that was added via a push operation before.
               *
               * @see pushStyle
               * @see pushStringAnnotation
               */
              public fun pop() {
                  checkPrecondition(styleStack.isNotEmpty()) { "Nothing to pop." }
                  // pop the last element
                  val item = styleStack.removeAt(styleStack.size - 1)
                  item.end = text.length
              }

              /**
               * Ends the styles or annotation up to and `including` the [pushStyle] or
               * [pushStringAnnotation] that returned the given index.
               *
               * @param index the result of the a previous [pushStyle] or [pushStringAnnotation] in order
               *   to pop to
               * @see pop
               * @see pushStyle
               * @see pushStringAnnotation
               */
              public fun pop(index: Int) {
                  checkPrecondition(index < styleStack.size) {
                      "$index should be less than ${styleStack.size}"
                  }
                  while ((styleStack.size - 1) >= index) {
                      pop()
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1121-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1121
    endLine: 1155
    sha256: 58a8af36811c0773fb8a86dc39ef25f4a185304f9015866d9a7131afe777f892
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  }
              }

              /** Constructs an [AnnotatedString] based on the configurations applied to the [Builder]. */
              public fun toAnnotatedString(): AnnotatedString {
                  return AnnotatedString(
                      text = text.toString(),
                      annotations = annotations.fastMap { it.toRange(text.length) },
                  )
              }

              /** @see AnnotatedString.mapAnnotations */
              internal fun mapAnnotations(transform: (Range<out Annotation>) -> Range<out Annotation>) {
                  for (i in annotations.indices) {
                      val newAnnotation = transform(annotations[i].toRange())
                      annotations[i] = MutableRange.fromRange(newAnnotation)
                  }
              }

              /** @see AnnotatedString.flatMapAnnotations */
              internal fun flatMapAnnotations(
                  transform: (Range<out Annotation>) -> List<Range<out Annotation>>
              ) {
                  val replacedAnnotations = annotations.fastFlatMap { annotation ->
                      transform(annotation.toRange()).fastMap { MutableRange.fromRange(it) }
                  }
                  annotations.clear()
                  annotations.addAll(replacedAnnotations)
              }
          }

          /**
           * Defines annotations that specify additional information to apply to ranges of text within the
           * given AnnotatedString.
           *
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1156-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1156
    endLine: 1190
    sha256: 974438b5f2650371f52b0266f66a4f1338c1ebf15fbdab21a46387c59a7ba65d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * The AnnotatedString supports annotations that provide different kind of information, such as
           * * [SpanStyle] specifies character level styling such as color, font, letter spacing etc.
           * * [ParagraphStyle] for configuring styling on a paragraph level such as line heights, text
           *   aligning, text direction etc.
           * * [LinkAnnotation] to mark links in the text.
           * * [TtsAnnotation] provides information to assistive technologies such as screen readers.
           * * [DrawAnnotation] attaches custom draw-phase rendering callbacks to a range of text.
           * * Custom annotations using the [StringAnnotation].
           */
          public sealed interface Annotation {
              public companion object {
                  /**
                   * Saves and restores [AnnotatedString.Annotation] objects.
                   *
                   * Supports the following annotation types:
                   * - [ParagraphStyle]
                   * - [SpanStyle]
                   * - [VerbatimTtsAnnotation]
                   * - [UrlAnnotation]
                   * - [LinkAnnotation.Url]
                   * - [LinkAnnotation.Clickable]
                   * - [StringAnnotation]
                   * - [DrawAnnotation] subclasses that satisfy
                   *   [androidx.compose.runtime.saveable.SaverScope.canBeSaved] (such as `Parcelable`
                   *   `data class`es on Android)
                   *
                   * Note: Does not preserve [LinkInteractionListener] of [LinkAnnotation]s, lambda-backed
                   * [DrawAnnotation] instances, or [Bullet] annotations. Handle saving and restoring them
                   * manually if required.
                   *
                   * @sample androidx.compose.ui.text.samples.AnnotatedStringAnnotationSaverSample
                   * @sample androidx.compose.ui.text.samples.LinkAnnotationSaverWithListenerSample
                   */
                  public val Saver: Saver<Annotation, Any> = AnnotationSaver
              }
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1191-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1191
    endLine: 1225
    sha256: cd1c0bff604cc0cda960388264b4a2973ff3bccc93071c48135a1acb51ed8c8b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          }

          // Unused private subclass of the marker interface to avoid exhaustive "when" statement
          @Suppress("unused") private class ExhaustiveAnnotation : Annotation

          public companion object {
              /**
               * The default [Saver] implementation for [AnnotatedString].
               *
               * Note this Saver doesn't preserve the [LinkInteractionListener] of the links. You should
               * handle this case manually if required (check
               * https://issuetracker.google.com/issues/332901550 for an example).
               */
              public val Saver: Saver<AnnotatedString, *> = AnnotatedStringSaver
          }
      }

      private fun constructAnnotationsFromSpansAndParagraphs(
          spanStyles: List<Range<SpanStyle>>,
          paragraphStyles: List<Range<ParagraphStyle>>,
      ): List<Range<out Annotation>>? {
          return if (spanStyles.isEmpty() && paragraphStyles.isEmpty()) {
              null
          } else if (paragraphStyles.isEmpty()) {
              spanStyles
          } else if (spanStyles.isEmpty()) {
              paragraphStyles
          } else {
              ArrayList<Range<out Annotation>>(spanStyles.size + paragraphStyles.size).also { array ->
                  spanStyles.fastForEach { array.add(it) }
                  paragraphStyles.fastForEach { array.add(it) }
              }
          }
      }
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1226-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1226
    endLine: 1260
    sha256: 056df6a521d91dab1d8f7ed9005bd28beb1faff9f144e65a002cb80d4b9d1468
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * A helper function used to determine the paragraph boundaries in [MultiParagraph].
       *
       * It reads paragraph information from [AnnotatedString.paragraphStyles] where only some parts of
       * text has [ParagraphStyle] specified, and unspecified parts(gaps between specified paragraphs) are
       * considered as default paragraph with default [ParagraphStyle]. For example, the following string
       * "(Hello World)Hi!" with a specified paragraph denoted by () will result in paragraphs "Hello
       * World" and "Hi!".
       *
       * **Algorithm implementation**
       * * Keep a stack of paragraphs that to be *fully* processed yet and a pointer to the end of last
       *   paragraph already added to the result.
       * * Iterate through each paragraph.
       * * Check if there's a gap between last added paragraph and start of current paragraph. If yes, we
       *   need to add text covered by it to the result, making sure to check the existing state of the
       *   stack to merge the styles correctly.
       * * Add a paragraph to the stack. Depending on its range, we might need to merge its style with the
       *   latest one in the stack.
       * * Along the way handle special cases like fully overlapped or zero-length paragraphs.
       * * After the last iteration, clear the stack by adding additional paragraphs to the result. Also
       *   move the pointer to the end of the text.
       *
       * @param defaultParagraphStyle The default [ParagraphStyle]. It's used for both unspecified default
       *   paragraphs and specified paragraph. When a specified paragraph's [ParagraphStyle] has a null
       *   attribute, the default one will be used instead.
       */
      internal fun AnnotatedString.normalizedParagraphStyles(
          defaultParagraphStyle: ParagraphStyle
      ): List<Range<ParagraphStyle>> {
          @Suppress("ListIterator")
          val sortedParagraphs = paragraphStylesOrNull?.sortedBy { it.start } ?: listOf()
          val result = mutableListOf<Range<ParagraphStyle>>()

          // a pointer to the last character added to the result list, takes values from 0 to text.length
          var lastAdded = 0
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1261-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1261
    endLine: 1295
    sha256: b81e797eff4feefe7eed643cdc55315abb7d4222eaa620d8b5ed0ea5328c1741
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val stack = ArrayDeque<Range<ParagraphStyle>>()

          sortedParagraphs.fastForEach {
              val current = it.copy(defaultParagraphStyle.merge(it.item))
              while (lastAdded < current.start && stack.isNotEmpty()) {
                  val lastInStack = stack.last()
                  // ..withStyle(A) { <-- last in stack....
                  // ....append............................
                  // ....withStyle(B) { <-- current........
                  // ......append..........................
                  // ....}.................................
                  // ..}...................................
                  if (current.start < lastInStack.end) {
                      result.add(Range(lastInStack.item, lastAdded, current.start))
                      lastAdded = current.start
                  } else {
                      // ..withStyle(A) {......................
                      // ....append............................
                      // ....withStyle(B) { <-- last in stack..
                      // ......append..........................
                      // ....}.................................
                      // ..}...................................
                      // withStyle(C) <-- current
                      result.add(Range(lastInStack.item, lastAdded, lastInStack.end))
                      lastAdded = lastInStack.end
                      // We now need to remove it from the stack but also make sure that we remove other
                      // stack
                      // entrances that have the same ends as the lastAdded
                      while (stack.isNotEmpty() && lastAdded == stack.last().end) {
                          stack.removeLast()
                      }
                  }
              }

              if (lastAdded < current.start) {
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1296-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1296
    endLine: 1330
    sha256: 64334fd7fbddce19dc7a53e90083641d106e08f51bccb5d7f17cafe75228f190
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  result.add(Range(defaultParagraphStyle, lastAdded, current.start))
                  lastAdded = current.start
              }

              val lastInStack = stack.lastOrNull()
              if (lastInStack != null) {
                  if (lastInStack.start == current.start && lastInStack.end == current.end) {
                      // fully overlapped, we'll merge current with the previous one and remove the
                      // previous one from the stack
                      stack.removeLast()
                      stack.add(Range(lastInStack.item.merge(current.item), current.start, current.end))
                  } else if (lastInStack.start == lastInStack.end) {
                      // this is a zero-length paragraph
                      result.add(Range(lastInStack.item, lastInStack.start, lastInStack.end))
                      stack.removeLast()
                      stack.add(Range(current.item, current.start, current.end))
                  } else if (lastInStack.end < current.end) {
                      // This is already handled in the init require checks
                      throw IllegalArgumentException()
                  } else {
                      stack.add(Range(lastInStack.item.merge(current.item), current.start, current.end))
                  }
              } else {
                  stack.add(Range(current.item, current.start, current.end))
              }
          }

          // The paragraph styles finished so we need to empty the stack to add the remaining to the
          // result
          while (lastAdded <= text.length && stack.isNotEmpty()) {
              // ..withStyle(A) {......................
              // ....append............................
              // ....withStyle(B) { <-- last in stack..
              // ......append..........................
              // ....}.................................
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1331-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1331
    endLine: 1365
    sha256: 1241ce2df65cc5c10b981d26be065bce1d69ed43a6c1119f7f00d9ebd96b2999
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              // ..}...................................
              // ....End of AnnotatedString builder....
              val lastInStack = stack.last()
              result.add(Range(lastInStack.item, lastAdded, lastInStack.end))
              lastAdded = lastInStack.end
              // We now need to remove it from the stack but also make sure that we remove other stack
              // entrances that have the same ends as the lastAdded
              while (stack.isNotEmpty() && lastAdded == stack.last().end) {
                  stack.removeLast()
              }
          }

          // There might be a text left at the end that isn't covered with a paragraph so using a default
          if (lastAdded < text.length) {
              result.add(Range(defaultParagraphStyle, lastAdded, text.length))
          }

          // This is a corner case where annotatedString is an empty string without any ParagraphStyle.
          // In this case, an empty ParagraphStyle is created.
          if (result.isEmpty()) {
              result.add(Range(defaultParagraphStyle, 0, 0))
          }
          return result
      }

      /**
       * Helper function used to find the [ParagraphStyle]s in the given range and also convert the range
       * of those styles to the local range.
       *
       * @param start The start index of the range, inclusive
       * @param end The end index of the range, exclusive
       */
      private fun AnnotatedString.getLocalParagraphStyles(
          start: Int,
          end: Int,
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1366-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1366
    endLine: 1400
    sha256: 2bc42438d3fbac78018d78fbb793e71d386a63644453ec9746d170dad84a89fc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ): List<Range<ParagraphStyle>>? {
          if (start == end) return null
          val paragraphStyles = paragraphStylesOrNull ?: return null
          // If the given range covers the whole AnnotatedString, return SpanStyles without conversion.
          if (start == 0 && end >= this.text.length) {
              return paragraphStyles
          }
          return paragraphStyles.fastFilteredMap({ intersect(start, end, it.start, it.end) }) {
              Range(
                  it.item,
                  it.start.fastCoerceIn(start, end) - start,
                  it.end.fastCoerceIn(start, end) - start,
              )
          }
      }

      /**
       * Helper function used to find the annotations in the given range that match the [predicate], and
       * also convert the range of those annotations to the local range. Null [predicate] means is similar
       * to passing true.
       */
      private fun AnnotatedString.getLocalAnnotations(
          start: Int,
          end: Int,
          predicate: ((Annotation) -> Boolean)? = null,
      ): List<Range<out AnnotatedString.Annotation>>? {
          if (start == end) return null
          val annotations = annotations ?: return null
          // If the given range covers the whole AnnotatedString, return it without conversion.
          if (start == 0 && end >= this.text.length) {
              return if (predicate == null) {
                  annotations
              } else {
                  annotations.fastFilter { predicate(it.item) }
              }
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1401-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1401
    endLine: 1435
    sha256: 12750478fbe2278c73955b8f48982ffb44ec355c27c71a3240c7019f623bf27e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }
          return annotations.fastFilteredMap({
              (predicate?.invoke(it.item) ?: true) && intersect(start, end, it.start, it.end)
          }) {
              Range(
                  tag = it.tag,
                  item = it.item,
                  start = it.start.coerceIn(start, end) - start,
                  end = it.end.coerceIn(start, end) - start,
              )
          }
      }

      /**
       * Helper function used to return another AnnotatedString that is a substring from [start] to [end].
       * This will ignore the [ParagraphStyle]s and the resulting [AnnotatedString] will have no
       * [ParagraphStyle]s.
       *
       * @param start The start index of the paragraph range, inclusive
       * @param end The end index of the paragraph range, exclusive
       * @return The list of converted [SpanStyle]s in the given paragraph range
       */
      private fun AnnotatedString.substringWithoutParagraphStyles(start: Int, end: Int): AnnotatedString {
          return AnnotatedString(
              text = if (start != end) text.substring(start, end) else "",
              annotations = getLocalAnnotations(start, end) { it !is ParagraphStyle } ?: listOf(),
          )
      }

      internal inline fun <T> AnnotatedString.mapEachParagraphStyle(
          defaultParagraphStyle: ParagraphStyle,
          crossinline block:
              (annotatedString: AnnotatedString, paragraphStyle: Range<ParagraphStyle>) -> T,
      ): List<T> {
          return normalizedParagraphStyles(defaultParagraphStyle).fastMap { paragraphStyleRange ->
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 141
    endLine: 175
    sha256: 18aa28a2914875a37ba82c97aa9e99c9821050718fe7cfecab061f9e50f0a088
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              @Suppress("UNCHECKED_CAST")
              annotations?.fastForEach { annotation ->
                  if (annotation.item is SpanStyle) {
                      if (spanStyles == null) {
                          spanStyles = mutableListOf()
                      }
                      spanStyles!!.add(annotation as Range<SpanStyle>)
                  } else if (annotation.item is ParagraphStyle) {
                      if (paragraphStyles == null) {
                          paragraphStyles = mutableListOf()
                      }
                      paragraphStyles!!.add(annotation as Range<ParagraphStyle>)
                  }
              }
              spanStylesOrNull = spanStyles
              paragraphStylesOrNull = paragraphStyles

              @Suppress("ListIterator") val sorted = paragraphStylesOrNull?.sortedBy { it.start }
              if (!sorted.isNullOrEmpty()) {
                  val previousEnds = mutableIntListOf(sorted.first().end)
                  for (i in 1 until sorted.size) {
                      val current = sorted[i]
                      // [*************************************].....
                      // ..[******]..................................
                      // ................[***************]...........
                      // ..................[******]..................
                      // current can only be one of these relatively to previous (start/end inclusive)
                      // ................... [**]...[**]...[**]..[**]
                      while (previousEnds.isNotEmpty()) {
                          val previousEnd = previousEnds.last()
                          if (current.start >= previousEnd) {
                              previousEnds.removeAt(previousEnds.size - 1)
                          } else {
                              requirePrecondition(current.end <= previousEnd) {
                                  "Paragraph overlap not allowed, end ${current.end} should be less than or equal to $previousEnd"
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1436-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1436
    endLine: 1470
    sha256: 88f5e196531819f52e1349ac3d93399dc25053e865f6f5bc4100f6d5512c8aa9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              val annotatedString =
                  substringWithoutParagraphStyles(paragraphStyleRange.start, paragraphStyleRange.end)
              block(annotatedString, paragraphStyleRange)
          }
      }

      /**
       * Create upper case transformed [AnnotatedString]
       *
       * The uppercase sometimes maps different number of characters. This function adjusts the text style
       * and paragraph style ranges to transformed offset.
       *
       * Note, if the style's offset is middle of the uppercase mapping context, this function won't
       * transform the character, e.g. style starts from between base alphabet character and accent
       * character.
       *
       * @param localeList A locale list used for upper case mapping. Only the first locale is effective.
       *   If empty locale list is passed, use the current locale instead.
       * @return An uppercase transformed [AnnotatedString].
       */
      @Deprecated(
          "This method allows passing an empty locale list, which will pull a locale in a way " +
              "that can't be backed by snapshot state. Call toUpperCase with an explicit locale " +
              "instead. If you have a non-empty locale list, the correct thing to do is use the first " +
              "locale in the list."
      )
      @Suppress("DEPRECATION")
      public fun AnnotatedString.toUpperCase(
          localeList: LocaleList = LocaleList.current
      ): AnnotatedString {
          return transform { str, start, end -> str.substring(start, end).toUpperCase(localeList) }
      }

      /**
       * Create upper case transformed [AnnotatedString]
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1471-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1471
    endLine: 1505
    sha256: ca9550c0cfca1a7ef749caa7aca6c34fb6934be860ec212164f0fb98ade54059
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * The uppercase sometimes maps different number of characters. This function adjusts the text style
       * and paragraph style ranges to transformed offset.
       *
       * Note, if the style's offset is middle of the uppercase mapping context, this function won't
       * transform the character, e.g. style starts from between base alphabet character and accent
       * character.
       *
       * @param locale The locale used for upper case mapping.
       * @return An uppercase transformed [AnnotatedString].
       */
      public fun AnnotatedString.toUpperCase(locale: Locale): AnnotatedString {
          return transform { str, start, end -> str.substring(start, end).toUpperCase(locale) }
      }

      /**
       * Create lower case transformed [AnnotatedString]
       *
       * The lowercase sometimes maps different number of characters. This function adjusts the text style
       * and paragraph style ranges to transformed offset.
       *
       * Note, if the style's offset is middle of the lowercase mapping context, this function won't
       * transform the character, e.g. style starts from between base alphabet character and accent
       * character.
       *
       * @param localeList A locale list used for lower case mapping. Only the first locale is effective.
       *   If empty locale list is passed, use the current locale instead.
       * @return A lowercase transformed string.
       */
      @Deprecated(
          "This method allows passing an empty locale list, which will pull a locale in a way " +
              "that can't be backed by snapshot state. Call toLowerCase with an explicit locale " +
              "instead. If you have a non-empty locale list, the correct thing to do is use the first " +
              "locale in the list."
      )
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1506-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1506
    endLine: 1540
    sha256: 48c7b4ddef135a2d12721625bc50ebb3087c4fb960bd5d02a2df62081ebcdf8f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Suppress("DEPRECATION")
      public fun AnnotatedString.toLowerCase(
          localeList: LocaleList = LocaleList.current
      ): AnnotatedString {
          return transform { str, start, end -> str.substring(start, end).toLowerCase(localeList) }
      }

      /**
       * Create lower case transformed [AnnotatedString]
       *
       * The lowercase sometimes maps different number of characters. This function adjusts the text style
       * and paragraph style ranges to transformed offset.
       *
       * Note, if the style's offset is middle of the lowercase mapping context, this function won't
       * transform the character, e.g. style starts from between base alphabet character and accent
       * character.
       *
       * @param locale The locale used for lower case mapping.
       * @return A lowercase transformed [AnnotatedString].
       */
      public fun AnnotatedString.toLowerCase(locale: Locale): AnnotatedString {
          return transform { str, start, end -> str.substring(start, end).toLowerCase(locale) }
      }

      /**
       * Create capitalized [AnnotatedString]
       *
       * The capitalization sometimes maps different number of characters. This function adjusts the text
       * style and paragraph style ranges to transformed offset.
       *
       * Note, if the style's offset is middle of the capitalization context, this function won't
       * transform the character, e.g. style starts from between base alphabet character and accent
       * character.
       *
       * @param localeList A locale list used for capitalize mapping. Only the first locale is effective.
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1541-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1541
    endLine: 1575
    sha256: f1954ed9672a2936ec78adff772c849bac64ae96a9a50cd721bd3ae7aad301a6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   If empty locale list is passed, use the current locale instead. Note that, this locale is
       *   currently ignored since underlying Kotlin method is experimental.
       * @return A capitalized string.
       */
      @Deprecated(
          "This method allows passing an empty locale list, which will pull a locale in a way " +
              "that can't be backed by snapshot state. Call capitalize with an explicit locale " +
              "instead. If you have a non-empty locale list, the correct thing to do is use the first " +
              "locale in the list."
      )
      @Suppress("DEPRECATION")
      public fun AnnotatedString.capitalize(
          localeList: LocaleList = LocaleList.current
      ): AnnotatedString {
          return transform { str, start, end ->
              if (start == 0) {
                  str.substring(start, end).capitalize(localeList)
              } else {
                  str.substring(start, end)
              }
          }
      }

      /**
       * Create capitalized [AnnotatedString]
       *
       * The capitalization sometimes maps different number of characters. This function adjusts the text
       * style and paragraph style ranges to transformed offset.
       *
       * Note, if the style's offset is middle of the capitalization context, this function won't
       * transform the character, e.g. style starts from between base alphabet character and accent
       * character.
       *
       * @param locale The locale used for capitalize mapping.
       * @return A capitalized [AnnotatedString].
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1576-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1576
    endLine: 1610
    sha256: dd7dd8bac99b0d8cb9aac62a55c27a4a9ccd18db8875a6a1f1ba94f9836e19c4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      public fun AnnotatedString.capitalize(locale: Locale): AnnotatedString {
          return transform { str, start, end ->
              if (start == 0) {
                  str.substring(start, end).capitalize(locale)
              } else {
                  str.substring(start, end)
              }
          }
      }

      /**
       * Create decapitalized [AnnotatedString]
       *
       * The decapitalization sometimes maps different number of characters. This function adjusts the
       * text style and paragraph style ranges to transformed offset.
       *
       * Note, if the style's offset is middle of the decapitalization context, this function won't
       * transform the character, e.g. style starts from between base alphabet character and accent
       * character.
       *
       * @param localeList A locale list used for decapitalize mapping. Only the first locale is
       *   effective. If empty locale list is passed, use the current locale instead. Note that, this
       *   locale is currently ignored since underlying Kotlin method is experimental.
       * @return A decapitalized [AnnotatedString].
       */
      @Deprecated(
          "This method allows passing an empty locale list, which will pull a locale in a way " +
              "that can't be backed by snapshot state. Call decapitalize with an explicit locale " +
              "instead. If you have a non-empty locale list, the correct thing to do is use the first " +
              "locale in the list."
      )
      @Suppress("DEPRECATION")
      public fun AnnotatedString.decapitalize(
          localeList: LocaleList = LocaleList.current
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1611-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1611
    endLine: 1645
    sha256: a072ef1253a65827c85f50a4e574cd5be64ab3cdae93bf5603efa337276102d7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ): AnnotatedString {
          return transform { str, start, end ->
              if (start == 0) {
                  str.substring(start, end).decapitalize(localeList)
              } else {
                  str.substring(start, end)
              }
          }
      }

      /**
       * Create decapitalized [AnnotatedString]
       *
       * The decapitalization sometimes maps different number of characters. This function adjusts the
       * text style and paragraph style ranges to transformed offset.
       *
       * Note, if the style's offset is middle of the decapitalization context, this function won't
       * transform the character, e.g. style starts from between base alphabet character and accent
       * character.
       *
       * @param locale The locale used for decapitalize mapping.
       * @return A decapitalized [AnnotatedString].
       */
      public fun AnnotatedString.decapitalize(locale: Locale): AnnotatedString {
          return transform { str, start, end ->
              if (start == 0) {
                  str.substring(start, end).decapitalize(locale)
              } else {
                  str.substring(start, end)
              }
          }
      }

      /**
       * The core function of [AnnotatedString] transformation.
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1646-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1646
    endLine: 1680
    sha256: a6ca339fbf4ba9414f1c0a9eab8499b85f4d9a3f61c7fec12c545f1f8af7fcdc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @param transform the transformation method
       * @return newly allocated transformed AnnotatedString
       */
      internal expect fun AnnotatedString.transform(
          transform: (String, Int, Int) -> String
      ): AnnotatedString

      /**
       * Pushes [style] to the [AnnotatedString.Builder], executes [block] and then pops the [style].
       *
       * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderWithStyleSample
       * @param style [SpanStyle] to be applied
       * @param block function to be executed
       * @return result of the [block]
       * @see AnnotatedString.Builder.pushStyle
       * @see AnnotatedString.Builder.pop
       */
      public inline fun <R : Any> Builder.withStyle(style: SpanStyle, block: Builder.() -> R): R {
          val index = pushStyle(style)
          return try {
              block(this)
          } finally {
              pop(index)
          }
      }

      /**
       * Pushes [style] to the [AnnotatedString.Builder], executes [block] and then pops the [style].
       *
       * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderWithStyleSample
       * @param style [SpanStyle] to be applied
       * @param block function to be executed
       * @return result of the [block]
       * @see AnnotatedString.Builder.pushStyle
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1681-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1681
    endLine: 1715
    sha256: 62f77f8509d696006ad06c9846b059dc302a95d6a269455a992d59d9fc029a7b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @see AnnotatedString.Builder.pop
       */
      public inline fun <R : Any> Builder.withStyle(
          style: ParagraphStyle,
          crossinline block: Builder.() -> R,
      ): R {
          val index = pushStyle(style)
          return try {
              block(this)
          } finally {
              pop(index)
          }
      }

      /**
       * Pushes an annotation to the [AnnotatedString.Builder], executes [block] and then pops the
       * annotation.
       *
       * @param tag the tag used to distinguish annotations
       * @param annotation the string annotation attached on this AnnotatedString
       * @param block function to be executed
       * @return result of the [block]
       * @see AnnotatedString.Builder.pushStringAnnotation
       * @see AnnotatedString.Builder.pop
       */
      public inline fun <R : Any> Builder.withAnnotation(
          tag: String,
          annotation: String,
          crossinline block: Builder.() -> R,
      ): R {
          val index = pushStringAnnotation(tag, annotation)
          return try {
              block(this)
          } finally {
              pop(index)
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1716-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1716
    endLine: 1750
    sha256: 2ea49184a825f12b0ddda0e22d2f326af7a4978117781323ecc22f3265c5d57a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }
      }

      /**
       * Pushes an [TtsAnnotation] to the [AnnotatedString.Builder], executes [block] and then pops the
       * annotation.
       *
       * @param ttsAnnotation an object that stores text to speech metadata that intended for the TTS
       *   engine.
       * @param block function to be executed
       * @return result of the [block]
       * @see AnnotatedString.Builder.pushStringAnnotation
       * @see AnnotatedString.Builder.pop
       */
      public inline fun <R : Any> Builder.withAnnotation(
          ttsAnnotation: TtsAnnotation,
          crossinline block: Builder.() -> R,
      ): R {
          val index = pushTtsAnnotation(ttsAnnotation)
          return try {
              block(this)
          } finally {
              pop(index)
          }
      }

      /**
       * Pushes an [UrlAnnotation] to the [AnnotatedString.Builder], executes [block] and then pops the
       * annotation.
       *
       * @param urlAnnotation A [UrlAnnotation] object that stores the URL being linked to.
       * @param block function to be executed
       * @return result of the [block]
       * @see AnnotatedString.Builder.pushStringAnnotation
       * @see AnnotatedString.Builder.pop
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1751-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1751
    endLine: 1785
    sha256: 8b15e973e7281fbc09aa71ee7811d50993085594e5e89c999e9cd2f5c4fd094b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      @ExperimentalTextApi
      @Deprecated("Use LinkAnnotation API for links instead", ReplaceWith("withLink(, block)"))
      @Suppress("Deprecation")
      public inline fun <R : Any> Builder.withAnnotation(
          urlAnnotation: UrlAnnotation,
          crossinline block: Builder.() -> R,
      ): R {
          val index = pushUrlAnnotation(urlAnnotation)
          return try {
              block(this)
          } finally {
              pop(index)
          }
      }

      /**
       * Pushes a [LinkAnnotation] to the [AnnotatedString.Builder], executes [block] and then pops the
       * annotation.
       *
       * @param link A [LinkAnnotation] object representing a clickable part of the text
       * @param block function to be executed
       * @return result of the [block]
       * @sample androidx.compose.ui.text.samples.AnnotatedStringWithLinkSample
       * @sample androidx.compose.ui.text.samples.AnnotatedStringWithHoveredLinkStylingSample
       * @sample androidx.compose.ui.text.samples.AnnotatedStringWithListenerSample
       */
      public inline fun <R : Any> Builder.withLink(link: LinkAnnotation, block: Builder.() -> R): R {
          val index = pushLink(link)
          return try {
              block(this)
          } finally {
              pop(index)
          }
      }
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 176
    endLine: 210
    sha256: 7709e4d478e51440abf57059a1c95f103f8d188a14185fe2a14f83f0d25bff9c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              }
                              break
                          }
                      }
                      previousEnds.add(current.end)
                  }
              }
          }

          public override val length: Int
              get() = text.length

          public override operator fun get(index: Int): Char = text[index]

          /**
           * Return a substring for the AnnotatedString and include the styles in the range of
           * [startIndex] (inclusive) and [endIndex] (exclusive).
           *
           * @param startIndex the inclusive start offset of the range
           * @param endIndex the exclusive end offset of the range
           */
          public override fun subSequence(startIndex: Int, endIndex: Int): AnnotatedString {
              requirePrecondition(startIndex <= endIndex) {
                  "start ($startIndex) should be less or equal to end ($endIndex)"
              }
              if (startIndex == 0 && endIndex == text.length) return this
              val text = text.substring(startIndex, endIndex)
              return AnnotatedString(
                  text = text,
                  annotations = filterRanges(annotations, startIndex, endIndex),
              )
          }

          /**
           * Return a substring for the AnnotatedString and include the styles in the given [range].
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1786-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1786
    endLine: 1820
    sha256: a8a081f8cd65fc54d7b5c8c89d8c6c1b868c81d2d2537a41a148b1396876dfd6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      
      /**
       * Associates [drawAnnotation] with the text appended while running [block].
       *
       * @sample androidx.compose.ui.text.samples.DrawAnnotationSample
       * @param drawAnnotation annotation that draws behind or over the appended text range
       * @param block function to run while [drawAnnotation] is active
       * @return result of [block]
       * @see AnnotatedString.Builder.addDrawAnnotation
       */
      public inline fun <R : Any> Builder.withDrawAnnotation(
          drawAnnotation: DrawAnnotation,
          block: Builder.() -> R,
      ): R {
          val start = length
          return try {
              block(this)
          } finally {
              addDrawAnnotation(drawAnnotation, start, length)
          }
      }

      /**
       * Filter the range list based on [Range.start] and [Range.end] to include ranges only in the range
       * of [start] (inclusive) and [end] (exclusive).
       *
       * @param start the inclusive start offset of the text range
       * @param end the exclusive end offset of the text range
       */
      private fun <T> filterRanges(ranges: List<Range<out T>>?, start: Int, end: Int): List<Range<T>>? {
          requirePrecondition(start <= end) {
              "start ($start) should be less than or equal to end ($end)"
          }
          val nonNullRange = ranges ?: return null
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1821-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1821
    endLine: 1855
    sha256: a45048c898bd06cd4d28ff68c89f027cf2fbd4faca98c99cee3a44274266e6cf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          return nonNullRange
              .fastFilteredMap({ intersect(start, end, it.start, it.end) }) {
                  Range(
                      item = it.item,
                      start = maxOf(start, it.start) - start,
                      end = minOf(end, it.end) - start,
                      tag = it.tag,
                  )
              }
              .ifEmpty { null }
      }

      /**
       * Create an AnnotatedString with a [spanStyle] that will apply to the whole text.
       *
       * @param text the text to be styled
       * @param spanStyle [SpanStyle] to be applied to whole text
       * @param paragraphStyle [ParagraphStyle] to be applied to whole text
       */
      public fun AnnotatedString(
          text: String,
          spanStyle: SpanStyle,
          paragraphStyle: ParagraphStyle? = null,
      ): AnnotatedString =
          AnnotatedString(
              text,
              listOf(Range(spanStyle, 0, text.length)),
              if (paragraphStyle == null) listOf() else listOf(Range(paragraphStyle, 0, text.length)),
          )

      /**
       * Create an AnnotatedString with a [paragraphStyle] that will apply to the whole text.
       *
       * @param text the text to be styled
       * @param paragraphStyle [ParagraphStyle] to be applied to whole text
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1856-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1856
    endLine: 1890
    sha256: c66da1d6f3f4289d9d5a08f97dd264abe2b1747e6b4ce7c7e39ae21c297ca964
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      public fun AnnotatedString(text: String, paragraphStyle: ParagraphStyle): AnnotatedString =
          AnnotatedString(text, listOf(), listOf(Range(paragraphStyle, 0, text.length)))

      /**
       * Build a new AnnotatedString by populating newly created [AnnotatedString.Builder] provided by
       * [builder].
       *
       * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderLambdaSample
       * @param builder lambda to modify [AnnotatedString.Builder]
       */
      public inline fun buildAnnotatedString(builder: (Builder).() -> Unit): AnnotatedString =
          Builder().apply(builder).toAnnotatedString()

      /**
       * Helper function that checks if the range [baseStart, baseEnd) contains the range [targetStart,
       * targetEnd).
       *
       * @return true if
       *   [baseStart, baseEnd) contains [targetStart, targetEnd), vice versa. When [baseStart]==[baseEnd]
       *   it return true iff [targetStart]==[targetEnd]==[baseStart].
       */
      internal fun contains(baseStart: Int, baseEnd: Int, targetStart: Int, targetEnd: Int) =
          (baseStart <= targetStart && targetEnd <= baseEnd) &&
              (baseEnd != targetEnd || (targetStart == targetEnd) == (baseStart == baseEnd))

      /**
       * Helper function that checks if the range [lStart, lEnd) intersects with the range [rStart, rEnd).
       *
       * @return [lStart, lEnd) intersects with range [rStart, rEnd), vice versa.
       */
      internal fun intersect(lStart: Int, lEnd: Int, rStart: Int, rEnd: Int): Boolean {
          // We can check if two ranges intersect just by performing the following operation:
          //
          //     lStart < rEnd && rStart < lEnd
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1891-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 1891
    endLine: 1910
    sha256: 6b3490a8c257e79a89164576f3fbfd44618f335f873b22dd93fa14d37f8ed849
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          //
          // This operation handles all cases, including when one of the ranges is fully included in the
          // other ranges. This is however not enough in this particular case because our ranges are open
          // at the end, but closed at the start.
          //
          // This means the test above would fail cases like: [1, 4) intersect [1, 1)
          // To address this we check if either one of the ranges is a "point" (empty selection). If
          // that's the case and both ranges share the same start point, then they intersect.
          //
          // In addition, we use bitwise operators (or, and) instead of boolean operators (||, &&) to
          // generate branchless code.
          return ((lStart == lEnd) or (rStart == rEnd) and (lStart == rStart)) or
              ((lStart < rEnd) and (rStart < lEnd))
      }

      private val EmptyAnnotatedString: AnnotatedString = AnnotatedString("")

      /** Returns an AnnotatedString with empty text and no annotations. */
      internal fun emptyAnnotatedString() = EmptyAnnotatedString
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 211
    endLine: 245
    sha256: 8dc744e0909e0af9d869a4557d110cfe568a3880fb57c39f9d7fe9cebbce07bf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *
           * @param range the text range
           * @see subSequence(start: Int, end: Int)
           */
          public fun subSequence(range: TextRange): AnnotatedString {
              return subSequence(range.min, range.max)
          }

          @Stable
          public operator fun plus(other: AnnotatedString): AnnotatedString {
              return with(Builder(this)) {
                  append(other)
                  toAnnotatedString()
              }
          }

          /**
           * Query the string annotations attached on this AnnotatedString. Annotations are metadata
           * attached on the AnnotatedString, for example, a URL is a string metadata attached on the a
           * certain range. Annotations are also store with [Range] like the styles.
           *
           * @param tag the tag of the annotations that is being queried. It's used to distinguish the
           *   annotations for different purposes.
           * @param start the start of the query range, inclusive.
           * @param end the end of the query range, exclusive.
           * @return a list of annotations stored in [Range]. Notice that All annotations that intersect
           *   with the range [start, end) will be returned. When [start] is bigger than [end], an empty
           *   list will be returned.
           */
          @Suppress("UNCHECKED_CAST", "KotlinRedundantDiagnosticSuppress")
          public fun getStringAnnotations(tag: String, start: Int, end: Int): List<Range<String>> =
              (annotations?.fastFilteredMap({
                  it.item is StringAnnotation && tag == it.tag && intersect(start, end, it.start, it.end)
              }) {
                  it.unbox()
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 246
    endLine: 280
    sha256: 03785ae2ceda594cbbf92ea781e50fa76876d561533b022f13faa84d04c5ea42
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              } ?: listOf())

          /**
           * Returns true if [getStringAnnotations] with the same parameters would return a non-empty list
           */
          public fun hasStringAnnotations(tag: String, start: Int, end: Int): Boolean =
              annotations?.fastAny {
                  it.item is StringAnnotation && tag == it.tag && intersect(start, end, it.start, it.end)
              } ?: false

          /**
           * Query all of the string annotations attached on this AnnotatedString.
           *
           * @param start the start of the query range, inclusive.
           * @param end the end of the query range, exclusive.
           * @return a list of annotations stored in [Range]. Notice that All annotations that intersect
           *   with the range [start, end) will be returned. When [start] is bigger than [end], an empty
           *   list will be returned.
           */
          @Suppress("UNCHECKED_CAST", "KotlinRedundantDiagnosticSuppress")
          public fun getStringAnnotations(start: Int, end: Int): List<Range<String>> =
              annotations?.fastFilteredMap({
                  it.item is StringAnnotation && intersect(start, end, it.start, it.end)
              }) {
                  it.unbox()
              } ?: listOf()

          /**
           * Query all of the [TtsAnnotation]s attached on this [AnnotatedString].
           *
           * @param start the start of the query range, inclusive.
           * @param end the end of the query range, exclusive.
           * @return a list of annotations stored in [Range]. Notice that All annotations that intersect
           *   with the range [start, end) will be returned. When [start] is bigger than [end], an empty
           *   list will be returned.
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 281
    endLine: 315
    sha256: 2cf0597889cfcb9d16e398e654e1181361e73df8ac1c62db133eda2d8787ab7d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          @Suppress("UNCHECKED_CAST")
          public fun getTtsAnnotations(start: Int, end: Int): List<Range<TtsAnnotation>> =
              ((annotations?.fastFilter {
                  it.item is TtsAnnotation && intersect(start, end, it.start, it.end)
              } ?: listOf())
                  as List<Range<TtsAnnotation>>)

          /**
           * Query all of the [UrlAnnotation]s attached on this [AnnotatedString].
           *
           * @param start the start of the query range, inclusive.
           * @param end the end of the query range, exclusive.
           * @return a list of annotations stored in [Range]. Notice that All annotations that intersect
           *   with the range [start, end) will be returned. When [start] is bigger than [end], an empty
           *   list will be returned.
           */
          @ExperimentalTextApi
          @Suppress("UNCHECKED_CAST", "Deprecation")
          @Deprecated("Use LinkAnnotation API instead", ReplaceWith("getLinkAnnotations(start, end)"))
          public fun getUrlAnnotations(start: Int, end: Int): List<Range<UrlAnnotation>> =
              ((annotations?.fastFilter {
                  it.item is UrlAnnotation && intersect(start, end, it.start, it.end)
              } ?: listOf())
                  as List<Range<UrlAnnotation>>)

          /**
           * Query all of the [LinkAnnotation]s attached on this [AnnotatedString].
           *
           * @param start the start of the query range, inclusive.
           * @param end the end of the query range, exclusive.
           * @return a list of annotations stored in [Range]. Notice that All annotations that intersect
           *   with the range [start, end) will be returned. When [start] is bigger than [end], an empty
           *   list will be returned.
           */
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 316
    endLine: 350
    sha256: 28f4e627b6ef774cd6b38e6284db320f03d9bd9e9416cefbdae1d23e49af5668
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @Suppress("UNCHECKED_CAST")
          public fun getLinkAnnotations(start: Int, end: Int): List<Range<LinkAnnotation>> =
              ((annotations?.fastFilter {
                  it.item is LinkAnnotation && intersect(start, end, it.start, it.end)
              } ?: listOf())
                  as List<Range<LinkAnnotation>>)

          /**
           * Returns true if [getLinkAnnotations] with the same parameters would return a non-empty list
           */
          public fun hasLinkAnnotations(start: Int, end: Int): Boolean =
              annotations?.fastAny {
                  it.item is LinkAnnotation && intersect(start, end, it.start, it.end)
              } ?: false

          /**
           * Queries all [DrawAnnotation]s attached on this [AnnotatedString].
           *
           * @param start inclusive start of the query range
           * @param end exclusive end of the query range
           * @return a list of annotations stored in [Range]. Returns all annotations that intersect with
           *   `[start, end)`, or an empty list when [start] is greater than [end]
           */
          @Suppress("UNCHECKED_CAST")
          public fun getDrawAnnotations(start: Int, end: Int): List<Range<DrawAnnotation>> =
              ((annotations?.fastFilter {
                  it.item is DrawAnnotation && intersect(start, end, it.start, it.end)
              } ?: listOf())
                  as List<Range<DrawAnnotation>>)

          /**
           * Returns true if [getDrawAnnotations] with the same parameters would return a non-empty list.
           *
           * @param start inclusive start of the query range
           * @param end exclusive end of the query range
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 351
    endLine: 385
    sha256: 15e552d63dfaeafc72023bfe2f2b53bd89d9006224c1cbbcbd7fcd537ae6aa21
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @see DrawAnnotation
           */
          public fun hasDrawAnnotations(start: Int, end: Int): Boolean =
              annotations?.fastAny {
                  it.item is DrawAnnotation && intersect(start, end, it.start, it.end)
              } ?: false

          public override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is AnnotatedString) return false
              if (text != other.text) return false
              if (annotations != other.annotations) return false
              return true
          }

          public override fun hashCode(): Int {
              var result = text.hashCode()
              result = 31 * result + (annotations?.hashCode() ?: 0)
              return result
          }

          public override fun toString(): String {
              // AnnotatedString.toString has special value, it converts it into regular String
              // rather than debug string.
              return text
          }

          /**
           * Compare the annotations between this and another AnnotatedString.
           *
           * This may be used for fast partial equality checks.
           *
           * Note that this checks all annotations including [spanStyles] and [paragraphStyles], but
           * [equals] still may be false if [text] is different.
           *
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 36
    endLine: 70
    sha256: e21e89f59487908b5cc965deb598656893fd104c65c26f3f9efe759d06cb85ab
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.util.fastAny
      import androidx.compose.ui.util.fastCoerceIn
      import androidx.compose.ui.util.fastFilter
      import androidx.compose.ui.util.fastFilteredMap
      import androidx.compose.ui.util.fastFlatMap
      import androidx.compose.ui.util.fastForEach
      import androidx.compose.ui.util.fastMap
      import kotlin.jvm.JvmName

      /**
       * Text with multiple styles.
       *
       * [SpanStyle] applies character-level styling (such as color, font, or decorations) to a range of
       * text. [ParagraphStyle] applies paragraph-level layout configuration (such as alignment, line
       * height, or indent) to the entire paragraph.
       *
       * Use [Builder] to construct.
       *
       * ### Precedence and Merging Rules
       * When multiple [SpanStyle]s are applied to overlapping ranges, they are merged character by
       * character:
       * - Styles appearing later in the [spanStyles] list take precedence and overwrite matching
       *   properties of earlier styles.
       * - Any unspecified properties (such as [androidx.compose.ui.graphics.Color.Unspecified] or
       *   [TextUnit.Unspecified]) do not overwrite prior styles, retaining the value from the previous
       *   style in the stack or the default text style.
       *
       * ### Paragraphs Arrangement
       *
       * [ParagraphStyle]s can be applied to parts of the text. However, paragraph ranges must not
       * partially overlap. They can only be nested or fully overlapping. If ranges are invalid, an
       * [IllegalArgumentException] is thrown.
       *
       * Valid arrangements (nested or non-overlapping):
       * - Non-overlapping: `\[abc\](def)` (two separate paragraphs)
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 386
    endLine: 420
    sha256: d5b876b1ec6e39418d488f568cbee0ea39744f34c5b6608085cf7a3e63ff7da8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param other to compare annotations with
           * @return true if and only if this compares equal on annotations with other
           */
          public fun hasEqualAnnotations(other: AnnotatedString): Boolean =
              this.annotations == other.annotations

          /**
           * Returns true if layout-affecting annotations between this [AnnotatedString] and [other] are
           * the same.
           *
           * * Compares non-[DrawAnnotation] ranges—such as [SpanStyle], [ParagraphStyle], [Bullet],
           *   [LinkAnnotation], [TtsAnnotation], and [StringAnnotation]—in place without allocating
           *   intermediate lists.
           * * Ignores [DrawAnnotation] entries because they only run during the draw phase and do not
           *   change text measurement or layout.
           * * Does not compare [text], matching [hasEqualAnnotations].
           *
           * @param other [AnnotatedString] whose layout-affecting annotations are compared with this
           *   instance
           * @return true if all non-[DrawAnnotation] ranges match in order, bounds, tag, and value
           * @see hasSameDrawAffectingAnnotations
           * @see hasEqualAnnotations
           * @see TextStyle.hasSameLayoutAffectingAttributes
           */
          public fun hasSameLayoutAffectingAnnotations(other: AnnotatedString): Boolean {
              if (this === other || this.annotations === other.annotations) return true
              val a = this.annotations
              val b = other.annotations
              val aSize = a?.size ?: 0
              val bSize = b?.size ?: 0
              var i = 0
              var j = 0
              while (true) {
                  while (i < aSize && a!![i].item is DrawAnnotation) i++
                  while (j < bSize && b!![j].item is DrawAnnotation) j++
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 421
    endLine: 455
    sha256: 85a0a3290f0f89753e65d65933e5e937e4a7c0ec6cee92f5e51c5834bd1e2267
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  if (i >= aSize || j >= bSize) {
                      return i >= aSize && j >= bSize
                  }
                  if (a!![i] != b!![j]) return false
                  i++
                  j++
              }
          }

          /**
           * Returns true if draw-affecting [DrawAnnotation] ranges between this [AnnotatedString] and
           * [other] are the same.
           *
           * * Compares [DrawAnnotation] ranges in order (including `[start, end)` bounds, `tag`, and item
           *   equality) in place without allocating intermediate lists.
           * * Ignores non-[DrawAnnotation] annotations and [text], matching [hasEqualAnnotations].
           *
           * @param other [AnnotatedString] whose [DrawAnnotation] ranges are compared with this instance
           * @return true if all [DrawAnnotation] ranges match in order, bounds, tag, and value
           * @see hasSameLayoutAffectingAnnotations
           * @see hasEqualAnnotations
           * @see TextStyle.hasSameDrawAffectingAttributes
           */
          public fun hasSameDrawAffectingAnnotations(other: AnnotatedString): Boolean {
              if (this === other || this.annotations === other.annotations) return true
              val a = this.annotations
              val b = other.annotations
              val aSize = a?.size ?: 0
              val bSize = b?.size ?: 0
              var i = 0
              var j = 0
              while (true) {
                  while (i < aSize && a!![i].item !is DrawAnnotation) i++
                  while (j < bSize && b!![j].item !is DrawAnnotation) j++
                  if (i >= aSize || j >= bSize) {
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 456
    endLine: 490
    sha256: 13f9934a8029c145a955be78035ae7b2cad126a69ebec374be58a3f1c25391fb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      return i >= aSize && j >= bSize
                  }
                  if (a!![i] != b!![j]) return false
                  i++
                  j++
              }
          }

          /**
           * Computes a hash code over all annotations except draw-only [DrawAnnotation] entries, matching
           * the equality contract of [hasSameLayoutAffectingAnnotations].
           *
           * Called by [CacheTextLayoutInput.hashCode] in `TextMeasurer.kt` so that layout cache lookups
           * hash and compare [AnnotatedString] keys without invalidating on [DrawAnnotation]-only
           * changes.
           */
          internal fun hashCodeLayoutAffectingAnnotations(): Int {
              val list = annotations ?: return 0
              var hash = 1
              var hasAny = false
              list.fastForEach { range ->
                  if (range.item !is DrawAnnotation) {
                      hash = 31 * hash + range.hashCode()
                      hasAny = true
                  }
              }
              return if (hasAny) hash else 0
          }

          /**
           * Returns a new [AnnotatedString] where a list of annotations contains the results of applying
           * the given [transform] function to each element in the original annotations list.
           *
           * @sample androidx.compose.ui.text.samples.AnnotatedStringMapAnnotationsSamples
           */
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 491
    endLine: 525
    sha256: 1f67147513f5a3f3dcb187af8eb684a691dc1f4167a357158d7d53d932372e55
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public fun mapAnnotations(
              transform: (Range<out Annotation>) -> Range<out Annotation>
          ): AnnotatedString {
              val builder = Builder(this)
              builder.mapAnnotations(transform)
              return builder.toAnnotatedString()
          }

          /**
           * Returns a new [AnnotatedString] where a list of annotations contains all elements yielded
           * from results [transform] function being invoked on each element of original annotations list.
           *
           * @see mapAnnotations
           */
          public fun flatMapAnnotations(
              transform: (Range<out Annotation>) -> List<Range<out Annotation>>
          ): AnnotatedString {
              val builder = Builder(this)
              builder.flatMapAnnotations(transform)
              return builder.toAnnotatedString()
          }

          /**
           * The information attached on the text such as a [SpanStyle].
           *
           * @param item The object attached to [AnnotatedString]s.
           * @param start The start of the range where [item] takes effect. It's inclusive
           * @param end The end of the range where [item] takes effect. It's exclusive
           * @param tag The tag used to distinguish the different ranges. It is useful to store custom
           *   data. And [Range]s with same tag can be queried with functions such as
           *   [getStringAnnotations].
           */
          @Immutable
          @Suppress("DataClassDefinition")
          public data class Range<T>(
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 526
    endLine: 560
    sha256: 75279053fe3fb6bd73903247cee2d793323d6b933d1060062b31c4ff0b41ee5f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              public val item: T,
              public val start: Int,
              public val end: Int,
              public val tag: String,
          ) {
              public constructor(item: T, start: Int, end: Int) : this(item, start, end, "")

              init {
                  requirePrecondition(start <= end) { "Reversed range is not supported" }
              }
          }

          /**
           * Builds an [AnnotatedString] incrementally.
           *
           * Implements [Appendable] for compatibility with standard text APIs.
           *
           * @param capacity initial capacity for the internal buffer
           * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderSample
           * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderAppendableSample
           */
          public class Builder public constructor(capacity: Int = 16) : Appendable {

              private data class MutableRange<T>(
                  val item: T,
                  val start: Int,
                  var end: Int = Int.MIN_VALUE,
                  val tag: String = "",
              ) {
                  /**
                   * Create an immutable [Range] object.
                   *
                   * @param defaultEnd if the end is not set yet, it will be set to this value.
                   */
                  fun toRange(defaultEnd: Int = Int.MIN_VALUE): Range<T> {
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 561
    endLine: 595
    sha256: 61624bc5f6dedffc5c48b94ad507f871cae099b4b7b124a59ce19d9374330366
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                      val end = if (end == Int.MIN_VALUE) defaultEnd else end
                      checkPrecondition(end != Int.MIN_VALUE) { "Item.end should be set first" }
                      return Range(item = item, start = start, end = end, tag = tag)
                  }

                  /**
                   * Create an immutable [Range] object.
                   *
                   * @param defaultEnd if the end is not set yet, it will be set to this value.
                   */
                  fun <R> toRange(transform: (T) -> R, defaultEnd: Int = Int.MIN_VALUE): Range<R> {
                      val end = if (end == Int.MIN_VALUE) defaultEnd else end
                      checkPrecondition(end != Int.MIN_VALUE) { "Item.end should be set first" }
                      return Range(item = transform(item), start = start, end = end, tag = tag)
                  }

                  companion object {
                      fun <T> fromRange(range: Range<T>) =
                          MutableRange(range.item, range.start, range.end, range.tag)
                  }
              }

              private val text: StringBuilder = StringBuilder(capacity)
              private val styleStack: MutableList<MutableRange<out Any>> = mutableListOf()
              /**
               * Holds all objects of type [AnnotatedString.Annotation] including [SpanStyle]s and
               * [ParagraphStyle]s in order.
               */
              private val annotations = mutableListOf<MutableRange<out Annotation>>()

              /** Create an [Builder] instance using the given [String]. */
              public constructor(text: String) : this() {
                  append(text)
              }
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 596
    endLine: 630
    sha256: 2f6dfb8808bc5e242d24866c837572748653f9f4cff6c4ca3276a79c9a151200
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              /** Create an [Builder] instance using the given [AnnotatedString]. */
              public constructor(text: AnnotatedString) : this() {
                  append(text)
              }

              /** Returns the length of the [String]. */
              public val length: Int
                  get() = text.length

              /**
               * Appends the given [String] to this [Builder].
               *
               * @param text the text to append
               */
              public fun append(text: String) {
                  this.text.append(text)
              }

              @Deprecated(
                  message =
                      "Replaced by the append(Char) method that returns an Appendable. " +
                          "This method must be kept around for binary compatibility.",
                  level = DeprecationLevel.HIDDEN,
              )
              @Suppress("FunctionName", "unused")
              // Set the JvmName to preserve compatibility with bytecode that expects a void return type.
              @JvmName("append")
              public fun deprecated_append_returning_void(char: Char) {
                  append(char)
              }

              /**
               * Appends [text] to this [Builder] if non-null, and returns this [Builder].
               *
               * If [text] is an [AnnotatedString], all spans and annotations will be copied over as well.
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 631
    endLine: 665
    sha256: 05c949384e0ce0e1f9d962f93d482fc5c3877bb5aed7f612c67e02632c8253f2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * No other subtypes of [CharSequence] will be treated specially. For example, any
               * platform-specific types, such as `SpannedString` on Android, will only have their text
               * copied and any other information held in the sequence, such as Android `Span`s, will be
               * dropped.
               *
               * @param text the text to append
               */
              @Suppress("BuilderSetStyle", "PARAMETER_NAME_CHANGED_ON_OVERRIDE")
              public override fun append(text: CharSequence?): Builder {
                  if (text is AnnotatedString) {
                      append(text)
                  } else {
                      this.text.append(text)
                  }
                  return this
              }

              /**
               * Appends the range of [text] between [start] (inclusive) and [end] (exclusive) to this
               * [Builder] if non-null, and returns this [Builder].
               *
               * If [text] is an [AnnotatedString], all spans and annotations from [text] between [start]
               * and [end] will be copied over as well. No other subtypes of [CharSequence] will be
               * treated specially. For example, any platform-specific types, such as `SpannedString` on
               * Android, will only have their text copied and any other information held in the sequence,
               * such as Android `Span`s, will be dropped.
               *
               * @param text the text to append
               * @param start The index of the first character in [text] to copy over (inclusive).
               * @param end The index after the last character in [text] to copy over (exclusive).
               */
              @Suppress("BuilderSetStyle", "PARAMETER_NAME_CHANGED_ON_OVERRIDE")
              public override fun append(text: CharSequence?, start: Int, end: Int): Builder {
                  if (text is AnnotatedString) {
                      append(text, start, end)
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 666
    endLine: 700
    sha256: 1bf8130dadc24232f6b225fe85648836c593a8a8540d0804a2a7bb81697cb3de
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  } else {
                      this.text.append(text, start, end)
                  }
                  return this
              }

              // Kdoc comes from interface method.
              @Suppress("PARAMETER_NAME_CHANGED_ON_OVERRIDE")
              public override fun append(char: Char): Builder {
                  this.text.append(char)
                  return this
              }

              /**
               * Appends the given [AnnotatedString] to this [Builder].
               *
               * @param text the text to append
               */
              public fun append(text: AnnotatedString) {
                  val start = this.text.length
                  this.text.append(text.text)
                  // offset every annotation with start and add to the builder
                  text.annotations?.fastForEach {
                      annotations.add(MutableRange(it.item, start + it.start, start + it.end, it.tag))
                  }
              }

              /**
               * Appends the range of [text] between [start] (inclusive) and [end] (exclusive) to this
               * [Builder]. All spans and annotations from [text] between [start] and [end] will be copied
               * over as well.
               *
               * @param text the text to append
               * @param start The index of the first character in [text] to copy over (inclusive).
               * @param end The index after the last character in [text] to copy over (exclusive).
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 701
    endLine: 735
    sha256: 5793e7f337e2bec247bf430b3e4d97d0c6f82d2cd28e982a23f75efe3765db10
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               */
              @Suppress("BuilderSetStyle")
              public fun append(text: AnnotatedString, start: Int, end: Int) {
                  val insertionStart = this.text.length
                  this.text.append(text.text, start, end)
                  // offset every annotation with insertionStart and add to the builder
                  text.getLocalAnnotations(start, end)?.fastForEach {
                      annotations.add(
                          MutableRange(
                              it.item,
                              insertionStart + it.start,
                              insertionStart + it.end,
                              it.tag,
                          )
                      )
                  }
              }

              /**
               * Applies [style] to the given range.
               *
               * @param style [SpanStyle] to apply
               * @param start inclusive start offset
               * @param end exclusive end offset
               */
              public fun addStyle(style: SpanStyle, start: Int, end: Int) {
                  annotations.add(MutableRange(item = style, start = start, end = end))
              }

              /**
               * Applies [style] to the given range, creating a separate paragraph.
               *
               * Paragraph ranges must follow paragraph arrangement rules. See [AnnotatedString] class
               * documentation for details and examples.
               *
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 71
    endLine: 105
    sha256: 75a51c5e7366ac5afbe4445d86b2465414e8c04e628863a2d4e30edf88df86ff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * - Nested: `\[abc(def)ghi\]` (inner paragraph `(def)` nested inside outer `\[abc...ghi\]`)
       * - Fully overlapping: `\[(abc)\]`
       *
       * Invalid arrangement (partial overlap):
       * - Overlapping: `\[abc(def\]ghi)` (inner starts inside outer, but ends outside - invalid!)
       *
       * Gaps between paragraph styles are filled with default styles. Nested paragraphs are split and
       * merged with parent styles.
       *
       * @see SpanStyle
       * @see ParagraphStyle
       */
      @Immutable
      public class AnnotatedString
      internal constructor(
          internal val annotations: List<Range<out Annotation>>?,
          public val text: String,
      ) : CharSequence {

          internal val spanStylesOrNull: List<Range<SpanStyle>>?
          /** All [SpanStyle] that have been applied to a range of this String */
          public val spanStyles: List<Range<SpanStyle>>
              get() = spanStylesOrNull ?: listOf()

          internal val paragraphStylesOrNull: List<Range<ParagraphStyle>>?
          /** All [ParagraphStyle] that have been applied to a range of this String */
          public val paragraphStyles: List<Range<ParagraphStyle>>
              get() = paragraphStylesOrNull ?: listOf()

          /**
           * Creates an [AnnotatedString] with styles.
           *
           * Use alternative constructor for other [Annotation] types.
           *
           * @param text text to display
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 736
    endLine: 770
    sha256: 7de9b50713af7a7c00a54c8cecfaa24c313199070ba3b71f521ce65ef7083710
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * @param style [ParagraphStyle] to apply
               * @param start inclusive start offset
               * @param end exclusive end offset
               */
              public fun addStyle(style: ParagraphStyle, start: Int, end: Int) {
                  annotations.add(MutableRange(item = style, start = start, end = end))
              }

              /**
               * Associates a string annotation with a range.
               *
               * @param tag tag to identify the annotation
               * @param annotation string annotation value
               * @param start inclusive start offset
               * @param end exclusive end offset
               * @sample androidx.compose.ui.text.samples.AnnotatedStringAddStringAnnotationSample
               */
              public fun addStringAnnotation(tag: String, annotation: String, start: Int, end: Int) {
                  annotations.add(
                      MutableRange(
                          item = StringAnnotation(annotation),
                          start = start,
                          end = end,
                          tag = tag,
                      )
                  )
              }

              /**
               * Set a [TtsAnnotation] for the given range defined by [start] and [end].
               *
               * @param ttsAnnotation an object that stores text to speech metadata that intended for the
               *   TTS engine.
               * @param start the inclusive starting offset of the range
               * @param end the exclusive end offset of the range
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 771
    endLine: 805
    sha256: 292390d4d9f4f8e9927d9d5058624f56a529d20bf9449193d1ccf34e1def73f4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * @sample androidx.compose.ui.text.samples.AnnotatedStringAddStringAnnotationSample
               * @see getStringAnnotations
               */
              @Suppress("SetterReturnsThis")
              public fun addTtsAnnotation(ttsAnnotation: TtsAnnotation, start: Int, end: Int) {
                  annotations.add(MutableRange(ttsAnnotation, start, end))
              }

              /**
               * Set a [UrlAnnotation] for the given range defined by [start] and [end]. URLs may be
               * treated specially by screen readers, including being identified while reading text with
               * an audio icon or being summarized in a links menu.
               *
               * @param urlAnnotation A [UrlAnnotation] object that stores the URL being linked to.
               * @param start the inclusive starting offset of the range
               * @param end the exclusive end offset of the range
               * @sample androidx.compose.ui.text.samples.AnnotatedStringAddStringAnnotationSample
               * @see getStringAnnotations
               */
              @ExperimentalTextApi
              @Suppress("SetterReturnsThis", "Deprecation")
              @Deprecated(
                  "Use LinkAnnotation API for links instead",
                  ReplaceWith("addLink(, start, end)"),
              )
              public fun addUrlAnnotation(urlAnnotation: UrlAnnotation, start: Int, end: Int) {
                  annotations.add(MutableRange(urlAnnotation, start, end))
              }

              /**
               * Associates a URL link with a range.
               *
               * Clicking the text opens the URL using [androidx.compose.ui.platform.UriHandler].
               *
               * Screen readers present URLs in different ways, such as using a links menu or audio cues.
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 806
    endLine: 840
    sha256: 6fbb34ccddcf9f861ec44e4157f149bea3b21fe91882382ce3e40db0c49d4af9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               *
               * @param url the target URL
               * @param start inclusive start offset
               * @param end exclusive end offset
               */
              @Suppress("SetterReturnsThis")
              public fun addLink(url: LinkAnnotation.Url, start: Int, end: Int) {
                  annotations.add(MutableRange(url, start, end))
              }

              /**
               * Associates a clickable link with a range.
               *
               * Clicking the text triggers a [LinkInteractionListener] with [clickable].
               *
               * Screen readers present clickables in different ways, such as using a links menu or audio
               * cues.
               *
               * @param clickable click metadata
               * @param start inclusive start offset
               * @param end exclusive end offset
               */
              @Suppress("SetterReturnsThis")
              public fun addLink(clickable: LinkAnnotation.Clickable, start: Int, end: Int) {
                  annotations.add(MutableRange(clickable, start, end))
              }

              /**
               * Adds an annotation to draw a bullet. Unlike another overload, this one doesn't add a
               * separate [ParagraphStyle]. As so for bullet to be rendered, make sure it starts on a
               * separate line by adding a newline before or wrapping with a [ParagraphStyle].
               *
               * For a convenient API to create a bullet list check [withBulletList].
               *
               * @param bullet a bullet to draw before the text
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 841
    endLine: 875
    sha256: 43ad9ecc3d636da3fda41529cdfe8c27fed6ae23cf6ceeefa6df1c6a8ff99ae7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * @param start the inclusive starting offset of the range
               * @param end the exclusive end offset of the range
               * @see withBulletList
               */
              public fun addBullet(bullet: Bullet, start: Int, end: Int) {
                  annotations.add(MutableRange(item = bullet, start = start, end = end))
              }

              /**
               * Adds an annotation to draw a [bullet] together with a paragraph that adds an
               * [indentation].
               *
               * @param bullet a bullet to draw before the text
               * @param indentation indentation that is added to the paragraph. Note that this indentation
               *   should be large enough to fit a bullet and a padding between the bullet and beginning
               *   of the paragraph
               * @param start the inclusive starting offset of the range
               * @param end the exclusive end offset of the range
               * @see withBulletList
               */
              public fun addBullet(bullet: Bullet, indentation: TextUnit, start: Int, end: Int) {
                  val bulletParStyle = ParagraphStyle(textIndent = TextIndent(indentation, indentation))
                  annotations.add(MutableRange(item = bulletParStyle, start = start, end = end))
                  annotations.add(MutableRange(item = bullet, start = start, end = end))
              }

              /**
               * Associates a [DrawAnnotation] with the character range from [start] to [end].
               *
               * @param drawAnnotation annotation to draw behind or over the text range
               * @param start inclusive starting offset of the range
               * @param end exclusive end offset of the range
               * @see withDrawAnnotation
               */
              @Suppress("SetterReturnsThis")
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-876-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 876
    endLine: 910
    sha256: e4b8f35e5804621d5657d16837b516f39b74baf88dbbba55ff025a5b24e1db9c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              public fun addDrawAnnotation(
                  drawAnnotation: DrawAnnotation,
                  start: Int,
                  end: Int,
              ) {
                  annotations.add(MutableRange(item = drawAnnotation, start = start, end = end))
              }

              /**
               * Applies the given [SpanStyle] to any appended text until a corresponding [pop] is called.
               *
               * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderPushSample
               * @param style SpanStyle to be applied
               */
              public fun pushStyle(style: SpanStyle): Int {
                  MutableRange(item = style, start = text.length).also {
                      styleStack.add(it)
                      annotations.add(it)
                  }
                  return styleStack.size - 1
              }

              /**
               * Applies the given [ParagraphStyle] to any appended text until a corresponding [pop] is
               * called.
               *
               * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderPushParagraphStyleSample
               * @param style ParagraphStyle to be applied
               */
              public fun pushStyle(style: ParagraphStyle): Int {
                  MutableRange(item = style, start = text.length).also {
                      styleStack.add(it)
                      annotations.add(it)
                  }
                  return styleStack.size - 1
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-911-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 911
    endLine: 945
    sha256: 8fe36ccc4669db40782a98392f1bad5d8048f32a86c51d961c07f4b533365c01
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }

              /**
               * Applies the given [bullet] annotation to any appended text until a corresponding [pop] is
               * called. For bullet to be rendered, make sure it starts on a separate line by either
               * adding a newline before or by wrapping with a [ParagraphStyle].
               *
               * For a convenient API to create a bullet list check [withBulletList].
               *
               * @see withBulletList
               */
              public fun pushBullet(bullet: Bullet): Int {
                  MutableRange(item = bullet, start = text.length).also {
                      styleStack.add(it)
                      annotations.add(it)
                  }
                  return styleStack.size - 1
              }

              /** Scope for a bullet list */
              public class BulletScope internal constructor(internal val builder: Builder) {
                  internal val bulletListSettingStack = mutableListOf<Pair<TextUnit, Bullet>>()
              }

              private val bulletScope = BulletScope(this)

              /**
               * Creates a bullet list which allows to define a common [indentation] and a [bullet] for
               * evey bullet list item created inside the list.
               *
               * Note that when nesting the [withBulletList] calls, the indentation inside the nested list
               * will be a combination of all indentations in the nested chain. For example,
               * ```kotlin
               * withBulletList(10.sp) {
               *   withBulletList(15.sp) {
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-946-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 946
    endLine: 980
    sha256: 542ea52835d0829d20db18b57295dee6d0a5d38fea8f6a27fbbf3bf906acafa4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               *     // items indentation 25.sp
               *   }
               * }
               * ```
               */
              public fun <R : Any> withBulletList(
                  indentation: TextUnit = Bullet.DefaultIndentation,
                  bullet: Bullet = Bullet.Default,
                  block: BulletScope.() -> R,
              ): R {
                  val adjustedIndentation =
                      bulletScope.bulletListSettingStack.lastOrNull()?.first?.let {
                          checkPrecondition(it.type == indentation.type) {
                              "Indentation unit types of nested bullet lists must match. Current $it and previous is $indentation"
                          }
                          when (indentation.type) {
                              Sp -> (indentation.value + it.value).sp
                              Em -> (indentation.value + it.value).em
                              else -> indentation
                          }
                      } ?: indentation

                  val parIndex =
                      pushStyle(
                          ParagraphStyle(
                              textIndent = TextIndent(adjustedIndentation, adjustedIndentation)
                          )
                      )
                  bulletScope.bulletListSettingStack.add(Pair(adjustedIndentation, bullet))
                  return try {
                      block(bulletScope)
                  } finally {
                      if (bulletScope.bulletListSettingStack.isNotEmpty()) {
                          bulletScope.bulletListSettingStack.removeAt(
                              bulletScope.bulletListSettingStack.lastIndex
  - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-981-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt
    startLine: 981
    endLine: 1015
    sha256: be43a28ac3a6b8f3f379b56c1d1d16e6d20284fdb8f87f43572607be5c23d0be
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                          )
                      }
                      pop(parIndex)
                  }
              }

              /**
               * Creates a bullet list item around the content produced by the [block]. The list item
               * creates a separate paragraph with the indentation to the bullet defined by the preceding
               * [Builder.withBulletList] calls.
               *
               * @param bullet defines the bullet to be drawn
               * @param block function to be executed
               * @sample androidx.compose.ui.text.samples.AnnotatedStringWithBulletListSample
               */
              public fun <R : Any> BulletScope.withBulletListItem(
                  bullet: Bullet? = null,
                  block: Builder.() -> R,
              ): R {
                  val lastItemInStack = bulletListSettingStack.lastOrNull()
                  val itemIndentation = lastItemInStack?.first ?: Bullet.DefaultIndentation
                  val itemBullet = bullet ?: (lastItemInStack?.second ?: Bullet.Default)
                  val parIndex =
                      builder.pushStyle(
                          ParagraphStyle(textIndent = TextIndent(itemIndentation, itemIndentation))
                      )
                  val bulletIndex = builder.pushBullet(itemBullet)
                  return try {
                      block(builder)
                  } finally {
                      builder.pop(bulletIndex)
                      builder.pop(parIndex)
                  }
              }
compose:
  id: live-androidx-ui-ui-text-ui-text-annotatedstring
  artifact: androidx.compose.ui:ui-text
  fqn: androidx.compose.ui.text
  sections:
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1016
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1016–1050)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1016-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1051
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1051–1085)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1051-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-106
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1086
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1086–1120)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1086-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1121
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1121–1155)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1121-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1156
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1156–1190)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1156-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1191
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1191–1225)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1191-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1226
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1226–1260)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1226-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1261
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1261–1295)
      aliases:
        - androidx.compose.ui.text.withStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1261-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1296
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1296–1330)
      aliases:
        - androidx.compose.ui.text.withStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1296-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1331
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1331–1365)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1331-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1366
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1366–1400)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1366-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1401
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1401–1435)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1401-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-141
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1436
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1436–1470)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.toUpperCase
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1436-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1471
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1471–1505)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.toUpperCase
        - androidx.compose.ui.text.toLowerCase
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1471-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1506
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1506–1540)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.toLowerCase
        - androidx.compose.ui.text.capitalize
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1506-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1541
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1541–1575)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.capitalize
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1541-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1576
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1576–1610)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.capitalize
        - androidx.compose.ui.text.decapitalize
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1576-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1611
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1611–1645)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.decapitalize
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1611-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1646
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1646–1680)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.withStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1646-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1681
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1681–1715)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.withStyle
        - androidx.compose.ui.text.withAnnotation
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1681-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1716
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1716–1750)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.withAnnotation
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1716-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1751
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1751–1785)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.withAnnotation
        - androidx.compose.ui.text.withLink
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1751-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-176
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1786
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1786–1820)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.withDrawAnnotation
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1786-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1821
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1821–1855)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1821-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1856
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1856–1890)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.buildAnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1856-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1891
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 1891–1910)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1891-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-211
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-246
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-281
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 281–315)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-316
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-351
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 351–385)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-36
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-386
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 386–420)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-386-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-421
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 421–455)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-421-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-456
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 456–490)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-456-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-491
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 491–525)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-491-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-526
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 526–560)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-526-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-561
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 561–595)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-561-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-596
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 596–630)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-596-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-631
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 631–665)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-631-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-666
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 666–700)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-666-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-701
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 701–735)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-701-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-71
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-71-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-736
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 736–770)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-736-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-771
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 771–805)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-771-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-806
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 806–840)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-806-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-841
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 841–875)
      aliases:
        - androidx.compose.ui.text.withDrawAnnotation
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-841-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-876
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 876–910)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-876-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-911
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 911–945)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-911-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-946
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 946–980)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-946-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-annotatedstring-lines-981
      title: androidx.compose.ui.text AnnotatedString.kt source (lines 981–1015)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-annotatedstring-lines-981-source
      relatedIds: []
---

# androidx.compose.ui.text AnnotatedString.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt

## androidx.compose.ui.text AnnotatedString.kt source (lines 1–35)

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

package androidx.compose.ui.text

import androidx.collection.mutableIntListOf
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.saveable.Saver
import androidx.compose.ui.text.AnnotatedString.Annotation
import androidx.compose.ui.text.AnnotatedString.Builder
import androidx.compose.ui.text.AnnotatedString.Range
import androidx.compose.ui.text.internal.checkPrecondition
import androidx.compose.ui.text.internal.requirePrecondition
import androidx.compose.ui.text.intl.Locale
import androidx.compose.ui.text.intl.LocaleList
import androidx.compose.ui.text.style.TextIndent
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.TextUnitType.Companion.Em
import androidx.compose.ui.unit.TextUnitType.Companion.Sp
import androidx.compose.ui.unit.em
import androidx.compose.ui.unit.sp

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1016–1050)

        /**
         * Attach the given [annotation] to any appended text until a corresponding [pop] is called.
         *
         * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderPushStringAnnotationSample
         * @param tag the tag used to distinguish annotations
         * @param annotation the string annotation attached on this AnnotatedString
         * @see getStringAnnotations
         * @see Range
         */
        public fun pushStringAnnotation(tag: String, annotation: String): Int {
            MutableRange(item = StringAnnotation(annotation), start = text.length, tag = tag).also {
                styleStack.add(it)
                annotations.add(it)
            }
            return styleStack.size - 1
        }

        /**
         * Attach the given [ttsAnnotation] to any appended text until a corresponding [pop] is
         * called.
         *
         * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderPushStringAnnotationSample
         * @param ttsAnnotation an object that stores text to speech metadata that intended for the
         *   TTS engine.
         * @see getStringAnnotations
         * @see Range
         */
        public fun pushTtsAnnotation(ttsAnnotation: TtsAnnotation): Int {
            MutableRange(item = ttsAnnotation, start = text.length).also {
                styleStack.add(it)
                annotations.add(it)
            }
            return styleStack.size - 1
        }


Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1016-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1051–1085)

        /**
         * Attach the given [UrlAnnotation] to any appended text until a corresponding [pop] is
         * called.
         *
         * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderPushStringAnnotationSample
         * @param urlAnnotation A [UrlAnnotation] object that stores the URL being linked to.
         * @see getStringAnnotations
         * @see Range
         */
        @ExperimentalTextApi
        @Suppress("BuilderSetStyle", "Deprecation")
        @Deprecated(
            "Use LinkAnnotation API for links instead",
            ReplaceWith("pushLink(, start, end)"),
        )
        public fun pushUrlAnnotation(urlAnnotation: UrlAnnotation): Int {
            MutableRange(item = urlAnnotation, start = text.length).also {
                styleStack.add(it)
                annotations.add(it)
            }
            return styleStack.size - 1
        }

        /**
         * Attach the given [LinkAnnotation] to any appended text until a corresponding [pop] is
         * called.
         *
         * @param link A [LinkAnnotation] object that stores the URL or clickable tag being linked
         *   to.
         * @see getStringAnnotations
         * @see Range
         */
        @Suppress("BuilderSetStyle")
        public fun pushLink(link: LinkAnnotation): Int {
            MutableRange(item = link, start = text.length).also {

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1051-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 106–140)

     * @param spanStyles styles to apply to text. Overlapping [SpanStyle]s merge (see
     *   [AnnotatedString] merging rules).
     * @param paragraphStyles paragraph styles to apply to ranges of text. Ranges must follow the
     *   paragraph arrangement rules (see [AnnotatedString] class documentation).
     * @throws IllegalArgumentException if [paragraphStyles] contains invalid overlapping ranges
     * @sample androidx.compose.ui.text.samples.AnnotatedStringConstructorSample
     * @see SpanStyle
     * @see ParagraphStyle
     */
    public constructor(
        text: String,
        spanStyles: List<Range<SpanStyle>> = listOf(),
        paragraphStyles: List<Range<ParagraphStyle>> = listOf(),
    ) : this(constructAnnotationsFromSpansAndParagraphs(spanStyles, paragraphStyles), text)

    /**
     * Creates an [AnnotatedString] with annotations.
     *
     * @param text text to display
     * @param annotations annotations to apply to text. Overlapping [SpanStyle]s merge (see
     *   [AnnotatedString] merging rules). [ParagraphStyle] ranges must follow paragraph arrangement
     *   rules (see [AnnotatedString] class documentation).
     * @throws IllegalArgumentException if [annotations] contains invalid overlapping paragraph
     *   ranges
     * @sample androidx.compose.ui.text.samples.AnnotatedStringMainConstructorSample
     * @see Annotation
     */
    public constructor(
        text: String,
        annotations: List<Range<out Annotation>> = listOf(),
    ) : this(annotations.ifEmpty { null }, text)

    init {
        var spanStyles: MutableList<Range<SpanStyle>>? = null
        var paragraphStyles: MutableList<Range<ParagraphStyle>>? = null

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1086–1120)

                styleStack.add(it)
                annotations.add(it)
            }
            return styleStack.size - 1
        }

        /**
         * Ends the style or annotation that was added via a push operation before.
         *
         * @see pushStyle
         * @see pushStringAnnotation
         */
        public fun pop() {
            checkPrecondition(styleStack.isNotEmpty()) { "Nothing to pop." }
            // pop the last element
            val item = styleStack.removeAt(styleStack.size - 1)
            item.end = text.length
        }

        /**
         * Ends the styles or annotation up to and `including` the [pushStyle] or
         * [pushStringAnnotation] that returned the given index.
         *
         * @param index the result of the a previous [pushStyle] or [pushStringAnnotation] in order
         *   to pop to
         * @see pop
         * @see pushStyle
         * @see pushStringAnnotation
         */
        public fun pop(index: Int) {
            checkPrecondition(index < styleStack.size) {
                "$index should be less than ${styleStack.size}"
            }
            while ((styleStack.size - 1) >= index) {
                pop()

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1086-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1121–1155)

            }
        }

        /** Constructs an [AnnotatedString] based on the configurations applied to the [Builder]. */
        public fun toAnnotatedString(): AnnotatedString {
            return AnnotatedString(
                text = text.toString(),
                annotations = annotations.fastMap { it.toRange(text.length) },
            )
        }

        /** @see AnnotatedString.mapAnnotations */
        internal fun mapAnnotations(transform: (Range<out Annotation>) -> Range<out Annotation>) {
            for (i in annotations.indices) {
                val newAnnotation = transform(annotations[i].toRange())
                annotations[i] = MutableRange.fromRange(newAnnotation)
            }
        }

        /** @see AnnotatedString.flatMapAnnotations */
        internal fun flatMapAnnotations(
            transform: (Range<out Annotation>) -> List<Range<out Annotation>>
        ) {
            val replacedAnnotations = annotations.fastFlatMap { annotation ->
                transform(annotation.toRange()).fastMap { MutableRange.fromRange(it) }
            }
            annotations.clear()
            annotations.addAll(replacedAnnotations)
        }
    }

    /**
     * Defines annotations that specify additional information to apply to ranges of text within the
     * given AnnotatedString.
     *

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1121-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1156–1190)

     * The AnnotatedString supports annotations that provide different kind of information, such as
     * * [SpanStyle] specifies character level styling such as color, font, letter spacing etc.
     * * [ParagraphStyle] for configuring styling on a paragraph level such as line heights, text
     *   aligning, text direction etc.
     * * [LinkAnnotation] to mark links in the text.
     * * [TtsAnnotation] provides information to assistive technologies such as screen readers.
     * * [DrawAnnotation] attaches custom draw-phase rendering callbacks to a range of text.
     * * Custom annotations using the [StringAnnotation].
     */
    public sealed interface Annotation {
        public companion object {
            /**
             * Saves and restores [AnnotatedString.Annotation] objects.
             *
             * Supports the following annotation types:
             * - [ParagraphStyle]
             * - [SpanStyle]
             * - [VerbatimTtsAnnotation]
             * - [UrlAnnotation]
             * - [LinkAnnotation.Url]
             * - [LinkAnnotation.Clickable]
             * - [StringAnnotation]
             * - [DrawAnnotation] subclasses that satisfy
             *   [androidx.compose.runtime.saveable.SaverScope.canBeSaved] (such as `Parcelable`
             *   `data class`es on Android)
             *
             * Note: Does not preserve [LinkInteractionListener] of [LinkAnnotation]s, lambda-backed
             * [DrawAnnotation] instances, or [Bullet] annotations. Handle saving and restoring them
             * manually if required.
             *
             * @sample androidx.compose.ui.text.samples.AnnotatedStringAnnotationSaverSample
             * @sample androidx.compose.ui.text.samples.LinkAnnotationSaverWithListenerSample
             */
            public val Saver: Saver<Annotation, Any> = AnnotationSaver
        }

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1156-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1191–1225)

    }

    // Unused private subclass of the marker interface to avoid exhaustive "when" statement
    @Suppress("unused") private class ExhaustiveAnnotation : Annotation

    public companion object {
        /**
         * The default [Saver] implementation for [AnnotatedString].
         *
         * Note this Saver doesn't preserve the [LinkInteractionListener] of the links. You should
         * handle this case manually if required (check
         * https://issuetracker.google.com/issues/332901550 for an example).
         */
        public val Saver: Saver<AnnotatedString, *> = AnnotatedStringSaver
    }
}

private fun constructAnnotationsFromSpansAndParagraphs(
    spanStyles: List<Range<SpanStyle>>,
    paragraphStyles: List<Range<ParagraphStyle>>,
): List<Range<out Annotation>>? {
    return if (spanStyles.isEmpty() && paragraphStyles.isEmpty()) {
        null
    } else if (paragraphStyles.isEmpty()) {
        spanStyles
    } else if (spanStyles.isEmpty()) {
        paragraphStyles
    } else {
        ArrayList<Range<out Annotation>>(spanStyles.size + paragraphStyles.size).also { array ->
            spanStyles.fastForEach { array.add(it) }
            paragraphStyles.fastForEach { array.add(it) }
        }
    }
}


Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1191-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1226–1260)

/**
 * A helper function used to determine the paragraph boundaries in [MultiParagraph].
 *
 * It reads paragraph information from [AnnotatedString.paragraphStyles] where only some parts of
 * text has [ParagraphStyle] specified, and unspecified parts(gaps between specified paragraphs) are
 * considered as default paragraph with default [ParagraphStyle]. For example, the following string
 * "(Hello World)Hi!" with a specified paragraph denoted by () will result in paragraphs "Hello
 * World" and "Hi!".
 *
 * **Algorithm implementation**
 * * Keep a stack of paragraphs that to be *fully* processed yet and a pointer to the end of last
 *   paragraph already added to the result.
 * * Iterate through each paragraph.
 * * Check if there's a gap between last added paragraph and start of current paragraph. If yes, we
 *   need to add text covered by it to the result, making sure to check the existing state of the
 *   stack to merge the styles correctly.
 * * Add a paragraph to the stack. Depending on its range, we might need to merge its style with the
 *   latest one in the stack.
 * * Along the way handle special cases like fully overlapped or zero-length paragraphs.
 * * After the last iteration, clear the stack by adding additional paragraphs to the result. Also
 *   move the pointer to the end of the text.
 *
 * @param defaultParagraphStyle The default [ParagraphStyle]. It's used for both unspecified default
 *   paragraphs and specified paragraph. When a specified paragraph's [ParagraphStyle] has a null
 *   attribute, the default one will be used instead.
 */
internal fun AnnotatedString.normalizedParagraphStyles(
    defaultParagraphStyle: ParagraphStyle
): List<Range<ParagraphStyle>> {
    @Suppress("ListIterator")
    val sortedParagraphs = paragraphStylesOrNull?.sortedBy { it.start } ?: listOf()
    val result = mutableListOf<Range<ParagraphStyle>>()

    // a pointer to the last character added to the result list, takes values from 0 to text.length
    var lastAdded = 0

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1226-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1261–1295)

    val stack = ArrayDeque<Range<ParagraphStyle>>()

    sortedParagraphs.fastForEach {
        val current = it.copy(defaultParagraphStyle.merge(it.item))
        while (lastAdded < current.start && stack.isNotEmpty()) {
            val lastInStack = stack.last()
            // ..withStyle(A) { <-- last in stack....
            // ....append............................
            // ....withStyle(B) { <-- current........
            // ......append..........................
            // ....}.................................
            // ..}...................................
            if (current.start < lastInStack.end) {
                result.add(Range(lastInStack.item, lastAdded, current.start))
                lastAdded = current.start
            } else {
                // ..withStyle(A) {......................
                // ....append............................
                // ....withStyle(B) { <-- last in stack..
                // ......append..........................
                // ....}.................................
                // ..}...................................
                // withStyle(C) <-- current
                result.add(Range(lastInStack.item, lastAdded, lastInStack.end))
                lastAdded = lastInStack.end
                // We now need to remove it from the stack but also make sure that we remove other
                // stack
                // entrances that have the same ends as the lastAdded
                while (stack.isNotEmpty() && lastAdded == stack.last().end) {
                    stack.removeLast()
                }
            }
        }

        if (lastAdded < current.start) {

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1261-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1296–1330)

            result.add(Range(defaultParagraphStyle, lastAdded, current.start))
            lastAdded = current.start
        }

        val lastInStack = stack.lastOrNull()
        if (lastInStack != null) {
            if (lastInStack.start == current.start && lastInStack.end == current.end) {
                // fully overlapped, we'll merge current with the previous one and remove the
                // previous one from the stack
                stack.removeLast()
                stack.add(Range(lastInStack.item.merge(current.item), current.start, current.end))
            } else if (lastInStack.start == lastInStack.end) {
                // this is a zero-length paragraph
                result.add(Range(lastInStack.item, lastInStack.start, lastInStack.end))
                stack.removeLast()
                stack.add(Range(current.item, current.start, current.end))
            } else if (lastInStack.end < current.end) {
                // This is already handled in the init require checks
                throw IllegalArgumentException()
            } else {
                stack.add(Range(lastInStack.item.merge(current.item), current.start, current.end))
            }
        } else {
            stack.add(Range(current.item, current.start, current.end))
        }
    }

    // The paragraph styles finished so we need to empty the stack to add the remaining to the
    // result
    while (lastAdded <= text.length && stack.isNotEmpty()) {
        // ..withStyle(A) {......................
        // ....append............................
        // ....withStyle(B) { <-- last in stack..
        // ......append..........................
        // ....}.................................

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1296-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1331–1365)

        // ..}...................................
        // ....End of AnnotatedString builder....
        val lastInStack = stack.last()
        result.add(Range(lastInStack.item, lastAdded, lastInStack.end))
        lastAdded = lastInStack.end
        // We now need to remove it from the stack but also make sure that we remove other stack
        // entrances that have the same ends as the lastAdded
        while (stack.isNotEmpty() && lastAdded == stack.last().end) {
            stack.removeLast()
        }
    }

    // There might be a text left at the end that isn't covered with a paragraph so using a default
    if (lastAdded < text.length) {
        result.add(Range(defaultParagraphStyle, lastAdded, text.length))
    }

    // This is a corner case where annotatedString is an empty string without any ParagraphStyle.
    // In this case, an empty ParagraphStyle is created.
    if (result.isEmpty()) {
        result.add(Range(defaultParagraphStyle, 0, 0))
    }
    return result
}

/**
 * Helper function used to find the [ParagraphStyle]s in the given range and also convert the range
 * of those styles to the local range.
 *
 * @param start The start index of the range, inclusive
 * @param end The end index of the range, exclusive
 */
private fun AnnotatedString.getLocalParagraphStyles(
    start: Int,
    end: Int,

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1331-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1366–1400)

): List<Range<ParagraphStyle>>? {
    if (start == end) return null
    val paragraphStyles = paragraphStylesOrNull ?: return null
    // If the given range covers the whole AnnotatedString, return SpanStyles without conversion.
    if (start == 0 && end >= this.text.length) {
        return paragraphStyles
    }
    return paragraphStyles.fastFilteredMap({ intersect(start, end, it.start, it.end) }) {
        Range(
            it.item,
            it.start.fastCoerceIn(start, end) - start,
            it.end.fastCoerceIn(start, end) - start,
        )
    }
}

/**
 * Helper function used to find the annotations in the given range that match the [predicate], and
 * also convert the range of those annotations to the local range. Null [predicate] means is similar
 * to passing true.
 */
private fun AnnotatedString.getLocalAnnotations(
    start: Int,
    end: Int,
    predicate: ((Annotation) -> Boolean)? = null,
): List<Range<out AnnotatedString.Annotation>>? {
    if (start == end) return null
    val annotations = annotations ?: return null
    // If the given range covers the whole AnnotatedString, return it without conversion.
    if (start == 0 && end >= this.text.length) {
        return if (predicate == null) {
            annotations
        } else {
            annotations.fastFilter { predicate(it.item) }
        }

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1366-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1401–1435)

    }
    return annotations.fastFilteredMap({
        (predicate?.invoke(it.item) ?: true) && intersect(start, end, it.start, it.end)
    }) {
        Range(
            tag = it.tag,
            item = it.item,
            start = it.start.coerceIn(start, end) - start,
            end = it.end.coerceIn(start, end) - start,
        )
    }
}

/**
 * Helper function used to return another AnnotatedString that is a substring from [start] to [end].
 * This will ignore the [ParagraphStyle]s and the resulting [AnnotatedString] will have no
 * [ParagraphStyle]s.
 *
 * @param start The start index of the paragraph range, inclusive
 * @param end The end index of the paragraph range, exclusive
 * @return The list of converted [SpanStyle]s in the given paragraph range
 */
private fun AnnotatedString.substringWithoutParagraphStyles(start: Int, end: Int): AnnotatedString {
    return AnnotatedString(
        text = if (start != end) text.substring(start, end) else "",
        annotations = getLocalAnnotations(start, end) { it !is ParagraphStyle } ?: listOf(),
    )
}

internal inline fun <T> AnnotatedString.mapEachParagraphStyle(
    defaultParagraphStyle: ParagraphStyle,
    crossinline block:
        (annotatedString: AnnotatedString, paragraphStyle: Range<ParagraphStyle>) -> T,
): List<T> {
    return normalizedParagraphStyles(defaultParagraphStyle).fastMap { paragraphStyleRange ->

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1401-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 141–175)

        @Suppress("UNCHECKED_CAST")
        annotations?.fastForEach { annotation ->
            if (annotation.item is SpanStyle) {
                if (spanStyles == null) {
                    spanStyles = mutableListOf()
                }
                spanStyles!!.add(annotation as Range<SpanStyle>)
            } else if (annotation.item is ParagraphStyle) {
                if (paragraphStyles == null) {
                    paragraphStyles = mutableListOf()
                }
                paragraphStyles!!.add(annotation as Range<ParagraphStyle>)
            }
        }
        spanStylesOrNull = spanStyles
        paragraphStylesOrNull = paragraphStyles

        @Suppress("ListIterator") val sorted = paragraphStylesOrNull?.sortedBy { it.start }
        if (!sorted.isNullOrEmpty()) {
            val previousEnds = mutableIntListOf(sorted.first().end)
            for (i in 1 until sorted.size) {
                val current = sorted[i]
                // [*************************************].....
                // ..[******]..................................
                // ................[***************]...........
                // ..................[******]..................
                // current can only be one of these relatively to previous (start/end inclusive)
                // ................... [**]...[**]...[**]..[**]
                while (previousEnds.isNotEmpty()) {
                    val previousEnd = previousEnds.last()
                    if (current.start >= previousEnd) {
                        previousEnds.removeAt(previousEnds.size - 1)
                    } else {
                        requirePrecondition(current.end <= previousEnd) {
                            "Paragraph overlap not allowed, end ${current.end} should be less than or equal to $previousEnd"

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1436–1470)

        val annotatedString =
            substringWithoutParagraphStyles(paragraphStyleRange.start, paragraphStyleRange.end)
        block(annotatedString, paragraphStyleRange)
    }
}

/**
 * Create upper case transformed [AnnotatedString]
 *
 * The uppercase sometimes maps different number of characters. This function adjusts the text style
 * and paragraph style ranges to transformed offset.
 *
 * Note, if the style's offset is middle of the uppercase mapping context, this function won't
 * transform the character, e.g. style starts from between base alphabet character and accent
 * character.
 *
 * @param localeList A locale list used for upper case mapping. Only the first locale is effective.
 *   If empty locale list is passed, use the current locale instead.
 * @return An uppercase transformed [AnnotatedString].
 */
@Deprecated(
    "This method allows passing an empty locale list, which will pull a locale in a way " +
        "that can't be backed by snapshot state. Call toUpperCase with an explicit locale " +
        "instead. If you have a non-empty locale list, the correct thing to do is use the first " +
        "locale in the list."
)
@Suppress("DEPRECATION")
public fun AnnotatedString.toUpperCase(
    localeList: LocaleList = LocaleList.current
): AnnotatedString {
    return transform { str, start, end -> str.substring(start, end).toUpperCase(localeList) }
}

/**
 * Create upper case transformed [AnnotatedString]

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1436-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1471–1505)

 *
 * The uppercase sometimes maps different number of characters. This function adjusts the text style
 * and paragraph style ranges to transformed offset.
 *
 * Note, if the style's offset is middle of the uppercase mapping context, this function won't
 * transform the character, e.g. style starts from between base alphabet character and accent
 * character.
 *
 * @param locale The locale used for upper case mapping.
 * @return An uppercase transformed [AnnotatedString].
 */
public fun AnnotatedString.toUpperCase(locale: Locale): AnnotatedString {
    return transform { str, start, end -> str.substring(start, end).toUpperCase(locale) }
}

/**
 * Create lower case transformed [AnnotatedString]
 *
 * The lowercase sometimes maps different number of characters. This function adjusts the text style
 * and paragraph style ranges to transformed offset.
 *
 * Note, if the style's offset is middle of the lowercase mapping context, this function won't
 * transform the character, e.g. style starts from between base alphabet character and accent
 * character.
 *
 * @param localeList A locale list used for lower case mapping. Only the first locale is effective.
 *   If empty locale list is passed, use the current locale instead.
 * @return A lowercase transformed string.
 */
@Deprecated(
    "This method allows passing an empty locale list, which will pull a locale in a way " +
        "that can't be backed by snapshot state. Call toLowerCase with an explicit locale " +
        "instead. If you have a non-empty locale list, the correct thing to do is use the first " +
        "locale in the list."
)

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1471-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1506–1540)

@Suppress("DEPRECATION")
public fun AnnotatedString.toLowerCase(
    localeList: LocaleList = LocaleList.current
): AnnotatedString {
    return transform { str, start, end -> str.substring(start, end).toLowerCase(localeList) }
}

/**
 * Create lower case transformed [AnnotatedString]
 *
 * The lowercase sometimes maps different number of characters. This function adjusts the text style
 * and paragraph style ranges to transformed offset.
 *
 * Note, if the style's offset is middle of the lowercase mapping context, this function won't
 * transform the character, e.g. style starts from between base alphabet character and accent
 * character.
 *
 * @param locale The locale used for lower case mapping.
 * @return A lowercase transformed [AnnotatedString].
 */
public fun AnnotatedString.toLowerCase(locale: Locale): AnnotatedString {
    return transform { str, start, end -> str.substring(start, end).toLowerCase(locale) }
}

/**
 * Create capitalized [AnnotatedString]
 *
 * The capitalization sometimes maps different number of characters. This function adjusts the text
 * style and paragraph style ranges to transformed offset.
 *
 * Note, if the style's offset is middle of the capitalization context, this function won't
 * transform the character, e.g. style starts from between base alphabet character and accent
 * character.
 *
 * @param localeList A locale list used for capitalize mapping. Only the first locale is effective.

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1506-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1541–1575)

 *   If empty locale list is passed, use the current locale instead. Note that, this locale is
 *   currently ignored since underlying Kotlin method is experimental.
 * @return A capitalized string.
 */
@Deprecated(
    "This method allows passing an empty locale list, which will pull a locale in a way " +
        "that can't be backed by snapshot state. Call capitalize with an explicit locale " +
        "instead. If you have a non-empty locale list, the correct thing to do is use the first " +
        "locale in the list."
)
@Suppress("DEPRECATION")
public fun AnnotatedString.capitalize(
    localeList: LocaleList = LocaleList.current
): AnnotatedString {
    return transform { str, start, end ->
        if (start == 0) {
            str.substring(start, end).capitalize(localeList)
        } else {
            str.substring(start, end)
        }
    }
}

/**
 * Create capitalized [AnnotatedString]
 *
 * The capitalization sometimes maps different number of characters. This function adjusts the text
 * style and paragraph style ranges to transformed offset.
 *
 * Note, if the style's offset is middle of the capitalization context, this function won't
 * transform the character, e.g. style starts from between base alphabet character and accent
 * character.
 *
 * @param locale The locale used for capitalize mapping.
 * @return A capitalized [AnnotatedString].

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1541-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1576–1610)

 */
public fun AnnotatedString.capitalize(locale: Locale): AnnotatedString {
    return transform { str, start, end ->
        if (start == 0) {
            str.substring(start, end).capitalize(locale)
        } else {
            str.substring(start, end)
        }
    }
}

/**
 * Create decapitalized [AnnotatedString]
 *
 * The decapitalization sometimes maps different number of characters. This function adjusts the
 * text style and paragraph style ranges to transformed offset.
 *
 * Note, if the style's offset is middle of the decapitalization context, this function won't
 * transform the character, e.g. style starts from between base alphabet character and accent
 * character.
 *
 * @param localeList A locale list used for decapitalize mapping. Only the first locale is
 *   effective. If empty locale list is passed, use the current locale instead. Note that, this
 *   locale is currently ignored since underlying Kotlin method is experimental.
 * @return A decapitalized [AnnotatedString].
 */
@Deprecated(
    "This method allows passing an empty locale list, which will pull a locale in a way " +
        "that can't be backed by snapshot state. Call decapitalize with an explicit locale " +
        "instead. If you have a non-empty locale list, the correct thing to do is use the first " +
        "locale in the list."
)
@Suppress("DEPRECATION")
public fun AnnotatedString.decapitalize(
    localeList: LocaleList = LocaleList.current

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1576-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1611–1645)

): AnnotatedString {
    return transform { str, start, end ->
        if (start == 0) {
            str.substring(start, end).decapitalize(localeList)
        } else {
            str.substring(start, end)
        }
    }
}

/**
 * Create decapitalized [AnnotatedString]
 *
 * The decapitalization sometimes maps different number of characters. This function adjusts the
 * text style and paragraph style ranges to transformed offset.
 *
 * Note, if the style's offset is middle of the decapitalization context, this function won't
 * transform the character, e.g. style starts from between base alphabet character and accent
 * character.
 *
 * @param locale The locale used for decapitalize mapping.
 * @return A decapitalized [AnnotatedString].
 */
public fun AnnotatedString.decapitalize(locale: Locale): AnnotatedString {
    return transform { str, start, end ->
        if (start == 0) {
            str.substring(start, end).decapitalize(locale)
        } else {
            str.substring(start, end)
        }
    }
}

/**
 * The core function of [AnnotatedString] transformation.

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1611-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1646–1680)

 *
 * @param transform the transformation method
 * @return newly allocated transformed AnnotatedString
 */
internal expect fun AnnotatedString.transform(
    transform: (String, Int, Int) -> String
): AnnotatedString

/**
 * Pushes [style] to the [AnnotatedString.Builder], executes [block] and then pops the [style].
 *
 * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderWithStyleSample
 * @param style [SpanStyle] to be applied
 * @param block function to be executed
 * @return result of the [block]
 * @see AnnotatedString.Builder.pushStyle
 * @see AnnotatedString.Builder.pop
 */
public inline fun <R : Any> Builder.withStyle(style: SpanStyle, block: Builder.() -> R): R {
    val index = pushStyle(style)
    return try {
        block(this)
    } finally {
        pop(index)
    }
}

/**
 * Pushes [style] to the [AnnotatedString.Builder], executes [block] and then pops the [style].
 *
 * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderWithStyleSample
 * @param style [SpanStyle] to be applied
 * @param block function to be executed
 * @return result of the [block]
 * @see AnnotatedString.Builder.pushStyle

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1646-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1681–1715)

 * @see AnnotatedString.Builder.pop
 */
public inline fun <R : Any> Builder.withStyle(
    style: ParagraphStyle,
    crossinline block: Builder.() -> R,
): R {
    val index = pushStyle(style)
    return try {
        block(this)
    } finally {
        pop(index)
    }
}

/**
 * Pushes an annotation to the [AnnotatedString.Builder], executes [block] and then pops the
 * annotation.
 *
 * @param tag the tag used to distinguish annotations
 * @param annotation the string annotation attached on this AnnotatedString
 * @param block function to be executed
 * @return result of the [block]
 * @see AnnotatedString.Builder.pushStringAnnotation
 * @see AnnotatedString.Builder.pop
 */
public inline fun <R : Any> Builder.withAnnotation(
    tag: String,
    annotation: String,
    crossinline block: Builder.() -> R,
): R {
    val index = pushStringAnnotation(tag, annotation)
    return try {
        block(this)
    } finally {
        pop(index)

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1681-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1716–1750)

    }
}

/**
 * Pushes an [TtsAnnotation] to the [AnnotatedString.Builder], executes [block] and then pops the
 * annotation.
 *
 * @param ttsAnnotation an object that stores text to speech metadata that intended for the TTS
 *   engine.
 * @param block function to be executed
 * @return result of the [block]
 * @see AnnotatedString.Builder.pushStringAnnotation
 * @see AnnotatedString.Builder.pop
 */
public inline fun <R : Any> Builder.withAnnotation(
    ttsAnnotation: TtsAnnotation,
    crossinline block: Builder.() -> R,
): R {
    val index = pushTtsAnnotation(ttsAnnotation)
    return try {
        block(this)
    } finally {
        pop(index)
    }
}

/**
 * Pushes an [UrlAnnotation] to the [AnnotatedString.Builder], executes [block] and then pops the
 * annotation.
 *
 * @param urlAnnotation A [UrlAnnotation] object that stores the URL being linked to.
 * @param block function to be executed
 * @return result of the [block]
 * @see AnnotatedString.Builder.pushStringAnnotation
 * @see AnnotatedString.Builder.pop

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1716-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1751–1785)

 */
@ExperimentalTextApi
@Deprecated("Use LinkAnnotation API for links instead", ReplaceWith("withLink(, block)"))
@Suppress("Deprecation")
public inline fun <R : Any> Builder.withAnnotation(
    urlAnnotation: UrlAnnotation,
    crossinline block: Builder.() -> R,
): R {
    val index = pushUrlAnnotation(urlAnnotation)
    return try {
        block(this)
    } finally {
        pop(index)
    }
}

/**
 * Pushes a [LinkAnnotation] to the [AnnotatedString.Builder], executes [block] and then pops the
 * annotation.
 *
 * @param link A [LinkAnnotation] object representing a clickable part of the text
 * @param block function to be executed
 * @return result of the [block]
 * @sample androidx.compose.ui.text.samples.AnnotatedStringWithLinkSample
 * @sample androidx.compose.ui.text.samples.AnnotatedStringWithHoveredLinkStylingSample
 * @sample androidx.compose.ui.text.samples.AnnotatedStringWithListenerSample
 */
public inline fun <R : Any> Builder.withLink(link: LinkAnnotation, block: Builder.() -> R): R {
    val index = pushLink(link)
    return try {
        block(this)
    } finally {
        pop(index)
    }
}

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1751-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 176–210)

                        }
                        break
                    }
                }
                previousEnds.add(current.end)
            }
        }
    }

    public override val length: Int
        get() = text.length

    public override operator fun get(index: Int): Char = text[index]

    /**
     * Return a substring for the AnnotatedString and include the styles in the range of
     * [startIndex] (inclusive) and [endIndex] (exclusive).
     *
     * @param startIndex the inclusive start offset of the range
     * @param endIndex the exclusive end offset of the range
     */
    public override fun subSequence(startIndex: Int, endIndex: Int): AnnotatedString {
        requirePrecondition(startIndex <= endIndex) {
            "start ($startIndex) should be less or equal to end ($endIndex)"
        }
        if (startIndex == 0 && endIndex == text.length) return this
        val text = text.substring(startIndex, endIndex)
        return AnnotatedString(
            text = text,
            annotations = filterRanges(annotations, startIndex, endIndex),
        )
    }

    /**
     * Return a substring for the AnnotatedString and include the styles in the given [range].

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1786–1820)


/**
 * Associates [drawAnnotation] with the text appended while running [block].
 *
 * @sample androidx.compose.ui.text.samples.DrawAnnotationSample
 * @param drawAnnotation annotation that draws behind or over the appended text range
 * @param block function to run while [drawAnnotation] is active
 * @return result of [block]
 * @see AnnotatedString.Builder.addDrawAnnotation
 */
public inline fun <R : Any> Builder.withDrawAnnotation(
    drawAnnotation: DrawAnnotation,
    block: Builder.() -> R,
): R {
    val start = length
    return try {
        block(this)
    } finally {
        addDrawAnnotation(drawAnnotation, start, length)
    }
}

/**
 * Filter the range list based on [Range.start] and [Range.end] to include ranges only in the range
 * of [start] (inclusive) and [end] (exclusive).
 *
 * @param start the inclusive start offset of the text range
 * @param end the exclusive end offset of the text range
 */
private fun <T> filterRanges(ranges: List<Range<out T>>?, start: Int, end: Int): List<Range<T>>? {
    requirePrecondition(start <= end) {
        "start ($start) should be less than or equal to end ($end)"
    }
    val nonNullRange = ranges ?: return null


Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1786-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1821–1855)

    return nonNullRange
        .fastFilteredMap({ intersect(start, end, it.start, it.end) }) {
            Range(
                item = it.item,
                start = maxOf(start, it.start) - start,
                end = minOf(end, it.end) - start,
                tag = it.tag,
            )
        }
        .ifEmpty { null }
}

/**
 * Create an AnnotatedString with a [spanStyle] that will apply to the whole text.
 *
 * @param text the text to be styled
 * @param spanStyle [SpanStyle] to be applied to whole text
 * @param paragraphStyle [ParagraphStyle] to be applied to whole text
 */
public fun AnnotatedString(
    text: String,
    spanStyle: SpanStyle,
    paragraphStyle: ParagraphStyle? = null,
): AnnotatedString =
    AnnotatedString(
        text,
        listOf(Range(spanStyle, 0, text.length)),
        if (paragraphStyle == null) listOf() else listOf(Range(paragraphStyle, 0, text.length)),
    )

/**
 * Create an AnnotatedString with a [paragraphStyle] that will apply to the whole text.
 *
 * @param text the text to be styled
 * @param paragraphStyle [ParagraphStyle] to be applied to whole text

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1821-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1856–1890)

 */
public fun AnnotatedString(text: String, paragraphStyle: ParagraphStyle): AnnotatedString =
    AnnotatedString(text, listOf(), listOf(Range(paragraphStyle, 0, text.length)))

/**
 * Build a new AnnotatedString by populating newly created [AnnotatedString.Builder] provided by
 * [builder].
 *
 * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderLambdaSample
 * @param builder lambda to modify [AnnotatedString.Builder]
 */
public inline fun buildAnnotatedString(builder: (Builder).() -> Unit): AnnotatedString =
    Builder().apply(builder).toAnnotatedString()

/**
 * Helper function that checks if the range [baseStart, baseEnd) contains the range [targetStart,
 * targetEnd).
 *
 * @return true if
 *   [baseStart, baseEnd) contains [targetStart, targetEnd), vice versa. When [baseStart]==[baseEnd]
 *   it return true iff [targetStart]==[targetEnd]==[baseStart].
 */
internal fun contains(baseStart: Int, baseEnd: Int, targetStart: Int, targetEnd: Int) =
    (baseStart <= targetStart && targetEnd <= baseEnd) &&
        (baseEnd != targetEnd || (targetStart == targetEnd) == (baseStart == baseEnd))

/**
 * Helper function that checks if the range [lStart, lEnd) intersects with the range [rStart, rEnd).
 *
 * @return [lStart, lEnd) intersects with range [rStart, rEnd), vice versa.
 */
internal fun intersect(lStart: Int, lEnd: Int, rStart: Int, rEnd: Int): Boolean {
    // We can check if two ranges intersect just by performing the following operation:
    //
    //     lStart < rEnd && rStart < lEnd

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1856-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 1891–1910)

    //
    // This operation handles all cases, including when one of the ranges is fully included in the
    // other ranges. This is however not enough in this particular case because our ranges are open
    // at the end, but closed at the start.
    //
    // This means the test above would fail cases like: [1, 4) intersect [1, 1)
    // To address this we check if either one of the ranges is a "point" (empty selection). If
    // that's the case and both ranges share the same start point, then they intersect.
    //
    // In addition, we use bitwise operators (or, and) instead of boolean operators (||, &&) to
    // generate branchless code.
    return ((lStart == lEnd) or (rStart == rEnd) and (lStart == rStart)) or
        ((lStart < rEnd) and (rStart < lEnd))
}

private val EmptyAnnotatedString: AnnotatedString = AnnotatedString("")

/** Returns an AnnotatedString with empty text and no annotations. */
internal fun emptyAnnotatedString() = EmptyAnnotatedString


Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-1891-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 211–245)

     *
     * @param range the text range
     * @see subSequence(start: Int, end: Int)
     */
    public fun subSequence(range: TextRange): AnnotatedString {
        return subSequence(range.min, range.max)
    }

    @Stable
    public operator fun plus(other: AnnotatedString): AnnotatedString {
        return with(Builder(this)) {
            append(other)
            toAnnotatedString()
        }
    }

    /**
     * Query the string annotations attached on this AnnotatedString. Annotations are metadata
     * attached on the AnnotatedString, for example, a URL is a string metadata attached on the a
     * certain range. Annotations are also store with [Range] like the styles.
     *
     * @param tag the tag of the annotations that is being queried. It's used to distinguish the
     *   annotations for different purposes.
     * @param start the start of the query range, inclusive.
     * @param end the end of the query range, exclusive.
     * @return a list of annotations stored in [Range]. Notice that All annotations that intersect
     *   with the range [start, end) will be returned. When [start] is bigger than [end], an empty
     *   list will be returned.
     */
    @Suppress("UNCHECKED_CAST", "KotlinRedundantDiagnosticSuppress")
    public fun getStringAnnotations(tag: String, start: Int, end: Int): List<Range<String>> =
        (annotations?.fastFilteredMap({
            it.item is StringAnnotation && tag == it.tag && intersect(start, end, it.start, it.end)
        }) {
            it.unbox()

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 246–280)

        } ?: listOf())

    /**
     * Returns true if [getStringAnnotations] with the same parameters would return a non-empty list
     */
    public fun hasStringAnnotations(tag: String, start: Int, end: Int): Boolean =
        annotations?.fastAny {
            it.item is StringAnnotation && tag == it.tag && intersect(start, end, it.start, it.end)
        } ?: false

    /**
     * Query all of the string annotations attached on this AnnotatedString.
     *
     * @param start the start of the query range, inclusive.
     * @param end the end of the query range, exclusive.
     * @return a list of annotations stored in [Range]. Notice that All annotations that intersect
     *   with the range [start, end) will be returned. When [start] is bigger than [end], an empty
     *   list will be returned.
     */
    @Suppress("UNCHECKED_CAST", "KotlinRedundantDiagnosticSuppress")
    public fun getStringAnnotations(start: Int, end: Int): List<Range<String>> =
        annotations?.fastFilteredMap({
            it.item is StringAnnotation && intersect(start, end, it.start, it.end)
        }) {
            it.unbox()
        } ?: listOf()

    /**
     * Query all of the [TtsAnnotation]s attached on this [AnnotatedString].
     *
     * @param start the start of the query range, inclusive.
     * @param end the end of the query range, exclusive.
     * @return a list of annotations stored in [Range]. Notice that All annotations that intersect
     *   with the range [start, end) will be returned. When [start] is bigger than [end], an empty
     *   list will be returned.

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 281–315)

     */
    @Suppress("UNCHECKED_CAST")
    public fun getTtsAnnotations(start: Int, end: Int): List<Range<TtsAnnotation>> =
        ((annotations?.fastFilter {
            it.item is TtsAnnotation && intersect(start, end, it.start, it.end)
        } ?: listOf())
            as List<Range<TtsAnnotation>>)

    /**
     * Query all of the [UrlAnnotation]s attached on this [AnnotatedString].
     *
     * @param start the start of the query range, inclusive.
     * @param end the end of the query range, exclusive.
     * @return a list of annotations stored in [Range]. Notice that All annotations that intersect
     *   with the range [start, end) will be returned. When [start] is bigger than [end], an empty
     *   list will be returned.
     */
    @ExperimentalTextApi
    @Suppress("UNCHECKED_CAST", "Deprecation")
    @Deprecated("Use LinkAnnotation API instead", ReplaceWith("getLinkAnnotations(start, end)"))
    public fun getUrlAnnotations(start: Int, end: Int): List<Range<UrlAnnotation>> =
        ((annotations?.fastFilter {
            it.item is UrlAnnotation && intersect(start, end, it.start, it.end)
        } ?: listOf())
            as List<Range<UrlAnnotation>>)

    /**
     * Query all of the [LinkAnnotation]s attached on this [AnnotatedString].
     *
     * @param start the start of the query range, inclusive.
     * @param end the end of the query range, exclusive.
     * @return a list of annotations stored in [Range]. Notice that All annotations that intersect
     *   with the range [start, end) will be returned. When [start] is bigger than [end], an empty
     *   list will be returned.
     */

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 316–350)

    @Suppress("UNCHECKED_CAST")
    public fun getLinkAnnotations(start: Int, end: Int): List<Range<LinkAnnotation>> =
        ((annotations?.fastFilter {
            it.item is LinkAnnotation && intersect(start, end, it.start, it.end)
        } ?: listOf())
            as List<Range<LinkAnnotation>>)

    /**
     * Returns true if [getLinkAnnotations] with the same parameters would return a non-empty list
     */
    public fun hasLinkAnnotations(start: Int, end: Int): Boolean =
        annotations?.fastAny {
            it.item is LinkAnnotation && intersect(start, end, it.start, it.end)
        } ?: false

    /**
     * Queries all [DrawAnnotation]s attached on this [AnnotatedString].
     *
     * @param start inclusive start of the query range
     * @param end exclusive end of the query range
     * @return a list of annotations stored in [Range]. Returns all annotations that intersect with
     *   `[start, end)`, or an empty list when [start] is greater than [end]
     */
    @Suppress("UNCHECKED_CAST")
    public fun getDrawAnnotations(start: Int, end: Int): List<Range<DrawAnnotation>> =
        ((annotations?.fastFilter {
            it.item is DrawAnnotation && intersect(start, end, it.start, it.end)
        } ?: listOf())
            as List<Range<DrawAnnotation>>)

    /**
     * Returns true if [getDrawAnnotations] with the same parameters would return a non-empty list.
     *
     * @param start inclusive start of the query range
     * @param end exclusive end of the query range

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 351–385)

     * @see DrawAnnotation
     */
    public fun hasDrawAnnotations(start: Int, end: Int): Boolean =
        annotations?.fastAny {
            it.item is DrawAnnotation && intersect(start, end, it.start, it.end)
        } ?: false

    public override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is AnnotatedString) return false
        if (text != other.text) return false
        if (annotations != other.annotations) return false
        return true
    }

    public override fun hashCode(): Int {
        var result = text.hashCode()
        result = 31 * result + (annotations?.hashCode() ?: 0)
        return result
    }

    public override fun toString(): String {
        // AnnotatedString.toString has special value, it converts it into regular String
        // rather than debug string.
        return text
    }

    /**
     * Compare the annotations between this and another AnnotatedString.
     *
     * This may be used for fast partial equality checks.
     *
     * Note that this checks all annotations including [spanStyles] and [paragraphStyles], but
     * [equals] still may be false if [text] is different.
     *

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 36–70)

import androidx.compose.ui.util.fastAny
import androidx.compose.ui.util.fastCoerceIn
import androidx.compose.ui.util.fastFilter
import androidx.compose.ui.util.fastFilteredMap
import androidx.compose.ui.util.fastFlatMap
import androidx.compose.ui.util.fastForEach
import androidx.compose.ui.util.fastMap
import kotlin.jvm.JvmName

/**
 * Text with multiple styles.
 *
 * [SpanStyle] applies character-level styling (such as color, font, or decorations) to a range of
 * text. [ParagraphStyle] applies paragraph-level layout configuration (such as alignment, line
 * height, or indent) to the entire paragraph.
 *
 * Use [Builder] to construct.
 *
 * ### Precedence and Merging Rules
 * When multiple [SpanStyle]s are applied to overlapping ranges, they are merged character by
 * character:
 * - Styles appearing later in the [spanStyles] list take precedence and overwrite matching
 *   properties of earlier styles.
 * - Any unspecified properties (such as [androidx.compose.ui.graphics.Color.Unspecified] or
 *   [TextUnit.Unspecified]) do not overwrite prior styles, retaining the value from the previous
 *   style in the stack or the default text style.
 *
 * ### Paragraphs Arrangement
 *
 * [ParagraphStyle]s can be applied to parts of the text. However, paragraph ranges must not
 * partially overlap. They can only be nested or fully overlapping. If ranges are invalid, an
 * [IllegalArgumentException] is thrown.
 *
 * Valid arrangements (nested or non-overlapping):
 * - Non-overlapping: `\[abc\](def)` (two separate paragraphs)

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 386–420)

     * @param other to compare annotations with
     * @return true if and only if this compares equal on annotations with other
     */
    public fun hasEqualAnnotations(other: AnnotatedString): Boolean =
        this.annotations == other.annotations

    /**
     * Returns true if layout-affecting annotations between this [AnnotatedString] and [other] are
     * the same.
     *
     * * Compares non-[DrawAnnotation] ranges—such as [SpanStyle], [ParagraphStyle], [Bullet],
     *   [LinkAnnotation], [TtsAnnotation], and [StringAnnotation]—in place without allocating
     *   intermediate lists.
     * * Ignores [DrawAnnotation] entries because they only run during the draw phase and do not
     *   change text measurement or layout.
     * * Does not compare [text], matching [hasEqualAnnotations].
     *
     * @param other [AnnotatedString] whose layout-affecting annotations are compared with this
     *   instance
     * @return true if all non-[DrawAnnotation] ranges match in order, bounds, tag, and value
     * @see hasSameDrawAffectingAnnotations
     * @see hasEqualAnnotations
     * @see TextStyle.hasSameLayoutAffectingAttributes
     */
    public fun hasSameLayoutAffectingAnnotations(other: AnnotatedString): Boolean {
        if (this === other || this.annotations === other.annotations) return true
        val a = this.annotations
        val b = other.annotations
        val aSize = a?.size ?: 0
        val bSize = b?.size ?: 0
        var i = 0
        var j = 0
        while (true) {
            while (i < aSize && a!![i].item is DrawAnnotation) i++
            while (j < bSize && b!![j].item is DrawAnnotation) j++

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 421–455)

            if (i >= aSize || j >= bSize) {
                return i >= aSize && j >= bSize
            }
            if (a!![i] != b!![j]) return false
            i++
            j++
        }
    }

    /**
     * Returns true if draw-affecting [DrawAnnotation] ranges between this [AnnotatedString] and
     * [other] are the same.
     *
     * * Compares [DrawAnnotation] ranges in order (including `[start, end)` bounds, `tag`, and item
     *   equality) in place without allocating intermediate lists.
     * * Ignores non-[DrawAnnotation] annotations and [text], matching [hasEqualAnnotations].
     *
     * @param other [AnnotatedString] whose [DrawAnnotation] ranges are compared with this instance
     * @return true if all [DrawAnnotation] ranges match in order, bounds, tag, and value
     * @see hasSameLayoutAffectingAnnotations
     * @see hasEqualAnnotations
     * @see TextStyle.hasSameDrawAffectingAttributes
     */
    public fun hasSameDrawAffectingAnnotations(other: AnnotatedString): Boolean {
        if (this === other || this.annotations === other.annotations) return true
        val a = this.annotations
        val b = other.annotations
        val aSize = a?.size ?: 0
        val bSize = b?.size ?: 0
        var i = 0
        var j = 0
        while (true) {
            while (i < aSize && a!![i].item !is DrawAnnotation) i++
            while (j < bSize && b!![j].item !is DrawAnnotation) j++
            if (i >= aSize || j >= bSize) {

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 456–490)

                return i >= aSize && j >= bSize
            }
            if (a!![i] != b!![j]) return false
            i++
            j++
        }
    }

    /**
     * Computes a hash code over all annotations except draw-only [DrawAnnotation] entries, matching
     * the equality contract of [hasSameLayoutAffectingAnnotations].
     *
     * Called by [CacheTextLayoutInput.hashCode] in `TextMeasurer.kt` so that layout cache lookups
     * hash and compare [AnnotatedString] keys without invalidating on [DrawAnnotation]-only
     * changes.
     */
    internal fun hashCodeLayoutAffectingAnnotations(): Int {
        val list = annotations ?: return 0
        var hash = 1
        var hasAny = false
        list.fastForEach { range ->
            if (range.item !is DrawAnnotation) {
                hash = 31 * hash + range.hashCode()
                hasAny = true
            }
        }
        return if (hasAny) hash else 0
    }

    /**
     * Returns a new [AnnotatedString] where a list of annotations contains the results of applying
     * the given [transform] function to each element in the original annotations list.
     *
     * @sample androidx.compose.ui.text.samples.AnnotatedStringMapAnnotationsSamples
     */

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 491–525)

    public fun mapAnnotations(
        transform: (Range<out Annotation>) -> Range<out Annotation>
    ): AnnotatedString {
        val builder = Builder(this)
        builder.mapAnnotations(transform)
        return builder.toAnnotatedString()
    }

    /**
     * Returns a new [AnnotatedString] where a list of annotations contains all elements yielded
     * from results [transform] function being invoked on each element of original annotations list.
     *
     * @see mapAnnotations
     */
    public fun flatMapAnnotations(
        transform: (Range<out Annotation>) -> List<Range<out Annotation>>
    ): AnnotatedString {
        val builder = Builder(this)
        builder.flatMapAnnotations(transform)
        return builder.toAnnotatedString()
    }

    /**
     * The information attached on the text such as a [SpanStyle].
     *
     * @param item The object attached to [AnnotatedString]s.
     * @param start The start of the range where [item] takes effect. It's inclusive
     * @param end The end of the range where [item] takes effect. It's exclusive
     * @param tag The tag used to distinguish the different ranges. It is useful to store custom
     *   data. And [Range]s with same tag can be queried with functions such as
     *   [getStringAnnotations].
     */
    @Immutable
    @Suppress("DataClassDefinition")
    public data class Range<T>(

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 526–560)

        public val item: T,
        public val start: Int,
        public val end: Int,
        public val tag: String,
    ) {
        public constructor(item: T, start: Int, end: Int) : this(item, start, end, "")

        init {
            requirePrecondition(start <= end) { "Reversed range is not supported" }
        }
    }

    /**
     * Builds an [AnnotatedString] incrementally.
     *
     * Implements [Appendable] for compatibility with standard text APIs.
     *
     * @param capacity initial capacity for the internal buffer
     * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderSample
     * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderAppendableSample
     */
    public class Builder public constructor(capacity: Int = 16) : Appendable {

        private data class MutableRange<T>(
            val item: T,
            val start: Int,
            var end: Int = Int.MIN_VALUE,
            val tag: String = "",
        ) {
            /**
             * Create an immutable [Range] object.
             *
             * @param defaultEnd if the end is not set yet, it will be set to this value.
             */
            fun toRange(defaultEnd: Int = Int.MIN_VALUE): Range<T> {

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 561–595)

                val end = if (end == Int.MIN_VALUE) defaultEnd else end
                checkPrecondition(end != Int.MIN_VALUE) { "Item.end should be set first" }
                return Range(item = item, start = start, end = end, tag = tag)
            }

            /**
             * Create an immutable [Range] object.
             *
             * @param defaultEnd if the end is not set yet, it will be set to this value.
             */
            fun <R> toRange(transform: (T) -> R, defaultEnd: Int = Int.MIN_VALUE): Range<R> {
                val end = if (end == Int.MIN_VALUE) defaultEnd else end
                checkPrecondition(end != Int.MIN_VALUE) { "Item.end should be set first" }
                return Range(item = transform(item), start = start, end = end, tag = tag)
            }

            companion object {
                fun <T> fromRange(range: Range<T>) =
                    MutableRange(range.item, range.start, range.end, range.tag)
            }
        }

        private val text: StringBuilder = StringBuilder(capacity)
        private val styleStack: MutableList<MutableRange<out Any>> = mutableListOf()
        /**
         * Holds all objects of type [AnnotatedString.Annotation] including [SpanStyle]s and
         * [ParagraphStyle]s in order.
         */
        private val annotations = mutableListOf<MutableRange<out Annotation>>()

        /** Create an [Builder] instance using the given [String]. */
        public constructor(text: String) : this() {
            append(text)
        }


Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 596–630)

        /** Create an [Builder] instance using the given [AnnotatedString]. */
        public constructor(text: AnnotatedString) : this() {
            append(text)
        }

        /** Returns the length of the [String]. */
        public val length: Int
            get() = text.length

        /**
         * Appends the given [String] to this [Builder].
         *
         * @param text the text to append
         */
        public fun append(text: String) {
            this.text.append(text)
        }

        @Deprecated(
            message =
                "Replaced by the append(Char) method that returns an Appendable. " +
                    "This method must be kept around for binary compatibility.",
            level = DeprecationLevel.HIDDEN,
        )
        @Suppress("FunctionName", "unused")
        // Set the JvmName to preserve compatibility with bytecode that expects a void return type.
        @JvmName("append")
        public fun deprecated_append_returning_void(char: Char) {
            append(char)
        }

        /**
         * Appends [text] to this [Builder] if non-null, and returns this [Builder].
         *
         * If [text] is an [AnnotatedString], all spans and annotations will be copied over as well.

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 631–665)

         * No other subtypes of [CharSequence] will be treated specially. For example, any
         * platform-specific types, such as `SpannedString` on Android, will only have their text
         * copied and any other information held in the sequence, such as Android `Span`s, will be
         * dropped.
         *
         * @param text the text to append
         */
        @Suppress("BuilderSetStyle", "PARAMETER_NAME_CHANGED_ON_OVERRIDE")
        public override fun append(text: CharSequence?): Builder {
            if (text is AnnotatedString) {
                append(text)
            } else {
                this.text.append(text)
            }
            return this
        }

        /**
         * Appends the range of [text] between [start] (inclusive) and [end] (exclusive) to this
         * [Builder] if non-null, and returns this [Builder].
         *
         * If [text] is an [AnnotatedString], all spans and annotations from [text] between [start]
         * and [end] will be copied over as well. No other subtypes of [CharSequence] will be
         * treated specially. For example, any platform-specific types, such as `SpannedString` on
         * Android, will only have their text copied and any other information held in the sequence,
         * such as Android `Span`s, will be dropped.
         *
         * @param text the text to append
         * @param start The index of the first character in [text] to copy over (inclusive).
         * @param end The index after the last character in [text] to copy over (exclusive).
         */
        @Suppress("BuilderSetStyle", "PARAMETER_NAME_CHANGED_ON_OVERRIDE")
        public override fun append(text: CharSequence?, start: Int, end: Int): Builder {
            if (text is AnnotatedString) {
                append(text, start, end)

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 666–700)

            } else {
                this.text.append(text, start, end)
            }
            return this
        }

        // Kdoc comes from interface method.
        @Suppress("PARAMETER_NAME_CHANGED_ON_OVERRIDE")
        public override fun append(char: Char): Builder {
            this.text.append(char)
            return this
        }

        /**
         * Appends the given [AnnotatedString] to this [Builder].
         *
         * @param text the text to append
         */
        public fun append(text: AnnotatedString) {
            val start = this.text.length
            this.text.append(text.text)
            // offset every annotation with start and add to the builder
            text.annotations?.fastForEach {
                annotations.add(MutableRange(it.item, start + it.start, start + it.end, it.tag))
            }
        }

        /**
         * Appends the range of [text] between [start] (inclusive) and [end] (exclusive) to this
         * [Builder]. All spans and annotations from [text] between [start] and [end] will be copied
         * over as well.
         *
         * @param text the text to append
         * @param start The index of the first character in [text] to copy over (inclusive).
         * @param end The index after the last character in [text] to copy over (exclusive).

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 701–735)

         */
        @Suppress("BuilderSetStyle")
        public fun append(text: AnnotatedString, start: Int, end: Int) {
            val insertionStart = this.text.length
            this.text.append(text.text, start, end)
            // offset every annotation with insertionStart and add to the builder
            text.getLocalAnnotations(start, end)?.fastForEach {
                annotations.add(
                    MutableRange(
                        it.item,
                        insertionStart + it.start,
                        insertionStart + it.end,
                        it.tag,
                    )
                )
            }
        }

        /**
         * Applies [style] to the given range.
         *
         * @param style [SpanStyle] to apply
         * @param start inclusive start offset
         * @param end exclusive end offset
         */
        public fun addStyle(style: SpanStyle, start: Int, end: Int) {
            annotations.add(MutableRange(item = style, start = start, end = end))
        }

        /**
         * Applies [style] to the given range, creating a separate paragraph.
         *
         * Paragraph ranges must follow paragraph arrangement rules. See [AnnotatedString] class
         * documentation for details and examples.
         *

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 71–105)

 * - Nested: `\[abc(def)ghi\]` (inner paragraph `(def)` nested inside outer `\[abc...ghi\]`)
 * - Fully overlapping: `\[(abc)\]`
 *
 * Invalid arrangement (partial overlap):
 * - Overlapping: `\[abc(def\]ghi)` (inner starts inside outer, but ends outside - invalid!)
 *
 * Gaps between paragraph styles are filled with default styles. Nested paragraphs are split and
 * merged with parent styles.
 *
 * @see SpanStyle
 * @see ParagraphStyle
 */
@Immutable
public class AnnotatedString
internal constructor(
    internal val annotations: List<Range<out Annotation>>?,
    public val text: String,
) : CharSequence {

    internal val spanStylesOrNull: List<Range<SpanStyle>>?
    /** All [SpanStyle] that have been applied to a range of this String */
    public val spanStyles: List<Range<SpanStyle>>
        get() = spanStylesOrNull ?: listOf()

    internal val paragraphStylesOrNull: List<Range<ParagraphStyle>>?
    /** All [ParagraphStyle] that have been applied to a range of this String */
    public val paragraphStyles: List<Range<ParagraphStyle>>
        get() = paragraphStylesOrNull ?: listOf()

    /**
     * Creates an [AnnotatedString] with styles.
     *
     * Use alternative constructor for other [Annotation] types.
     *
     * @param text text to display

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 736–770)

         * @param style [ParagraphStyle] to apply
         * @param start inclusive start offset
         * @param end exclusive end offset
         */
        public fun addStyle(style: ParagraphStyle, start: Int, end: Int) {
            annotations.add(MutableRange(item = style, start = start, end = end))
        }

        /**
         * Associates a string annotation with a range.
         *
         * @param tag tag to identify the annotation
         * @param annotation string annotation value
         * @param start inclusive start offset
         * @param end exclusive end offset
         * @sample androidx.compose.ui.text.samples.AnnotatedStringAddStringAnnotationSample
         */
        public fun addStringAnnotation(tag: String, annotation: String, start: Int, end: Int) {
            annotations.add(
                MutableRange(
                    item = StringAnnotation(annotation),
                    start = start,
                    end = end,
                    tag = tag,
                )
            )
        }

        /**
         * Set a [TtsAnnotation] for the given range defined by [start] and [end].
         *
         * @param ttsAnnotation an object that stores text to speech metadata that intended for the
         *   TTS engine.
         * @param start the inclusive starting offset of the range
         * @param end the exclusive end offset of the range

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 771–805)

         * @sample androidx.compose.ui.text.samples.AnnotatedStringAddStringAnnotationSample
         * @see getStringAnnotations
         */
        @Suppress("SetterReturnsThis")
        public fun addTtsAnnotation(ttsAnnotation: TtsAnnotation, start: Int, end: Int) {
            annotations.add(MutableRange(ttsAnnotation, start, end))
        }

        /**
         * Set a [UrlAnnotation] for the given range defined by [start] and [end]. URLs may be
         * treated specially by screen readers, including being identified while reading text with
         * an audio icon or being summarized in a links menu.
         *
         * @param urlAnnotation A [UrlAnnotation] object that stores the URL being linked to.
         * @param start the inclusive starting offset of the range
         * @param end the exclusive end offset of the range
         * @sample androidx.compose.ui.text.samples.AnnotatedStringAddStringAnnotationSample
         * @see getStringAnnotations
         */
        @ExperimentalTextApi
        @Suppress("SetterReturnsThis", "Deprecation")
        @Deprecated(
            "Use LinkAnnotation API for links instead",
            ReplaceWith("addLink(, start, end)"),
        )
        public fun addUrlAnnotation(urlAnnotation: UrlAnnotation, start: Int, end: Int) {
            annotations.add(MutableRange(urlAnnotation, start, end))
        }

        /**
         * Associates a URL link with a range.
         *
         * Clicking the text opens the URL using [androidx.compose.ui.platform.UriHandler].
         *
         * Screen readers present URLs in different ways, such as using a links menu or audio cues.

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 806–840)

         *
         * @param url the target URL
         * @param start inclusive start offset
         * @param end exclusive end offset
         */
        @Suppress("SetterReturnsThis")
        public fun addLink(url: LinkAnnotation.Url, start: Int, end: Int) {
            annotations.add(MutableRange(url, start, end))
        }

        /**
         * Associates a clickable link with a range.
         *
         * Clicking the text triggers a [LinkInteractionListener] with [clickable].
         *
         * Screen readers present clickables in different ways, such as using a links menu or audio
         * cues.
         *
         * @param clickable click metadata
         * @param start inclusive start offset
         * @param end exclusive end offset
         */
        @Suppress("SetterReturnsThis")
        public fun addLink(clickable: LinkAnnotation.Clickable, start: Int, end: Int) {
            annotations.add(MutableRange(clickable, start, end))
        }

        /**
         * Adds an annotation to draw a bullet. Unlike another overload, this one doesn't add a
         * separate [ParagraphStyle]. As so for bullet to be rendered, make sure it starts on a
         * separate line by adding a newline before or wrapping with a [ParagraphStyle].
         *
         * For a convenient API to create a bullet list check [withBulletList].
         *
         * @param bullet a bullet to draw before the text

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 841–875)

         * @param start the inclusive starting offset of the range
         * @param end the exclusive end offset of the range
         * @see withBulletList
         */
        public fun addBullet(bullet: Bullet, start: Int, end: Int) {
            annotations.add(MutableRange(item = bullet, start = start, end = end))
        }

        /**
         * Adds an annotation to draw a [bullet] together with a paragraph that adds an
         * [indentation].
         *
         * @param bullet a bullet to draw before the text
         * @param indentation indentation that is added to the paragraph. Note that this indentation
         *   should be large enough to fit a bullet and a padding between the bullet and beginning
         *   of the paragraph
         * @param start the inclusive starting offset of the range
         * @param end the exclusive end offset of the range
         * @see withBulletList
         */
        public fun addBullet(bullet: Bullet, indentation: TextUnit, start: Int, end: Int) {
            val bulletParStyle = ParagraphStyle(textIndent = TextIndent(indentation, indentation))
            annotations.add(MutableRange(item = bulletParStyle, start = start, end = end))
            annotations.add(MutableRange(item = bullet, start = start, end = end))
        }

        /**
         * Associates a [DrawAnnotation] with the character range from [start] to [end].
         *
         * @param drawAnnotation annotation to draw behind or over the text range
         * @param start inclusive starting offset of the range
         * @param end exclusive end offset of the range
         * @see withDrawAnnotation
         */
        @Suppress("SetterReturnsThis")

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 876–910)

        public fun addDrawAnnotation(
            drawAnnotation: DrawAnnotation,
            start: Int,
            end: Int,
        ) {
            annotations.add(MutableRange(item = drawAnnotation, start = start, end = end))
        }

        /**
         * Applies the given [SpanStyle] to any appended text until a corresponding [pop] is called.
         *
         * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderPushSample
         * @param style SpanStyle to be applied
         */
        public fun pushStyle(style: SpanStyle): Int {
            MutableRange(item = style, start = text.length).also {
                styleStack.add(it)
                annotations.add(it)
            }
            return styleStack.size - 1
        }

        /**
         * Applies the given [ParagraphStyle] to any appended text until a corresponding [pop] is
         * called.
         *
         * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderPushParagraphStyleSample
         * @param style ParagraphStyle to be applied
         */
        public fun pushStyle(style: ParagraphStyle): Int {
            MutableRange(item = style, start = text.length).also {
                styleStack.add(it)
                annotations.add(it)
            }
            return styleStack.size - 1

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-876-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 911–945)

        }

        /**
         * Applies the given [bullet] annotation to any appended text until a corresponding [pop] is
         * called. For bullet to be rendered, make sure it starts on a separate line by either
         * adding a newline before or by wrapping with a [ParagraphStyle].
         *
         * For a convenient API to create a bullet list check [withBulletList].
         *
         * @see withBulletList
         */
        public fun pushBullet(bullet: Bullet): Int {
            MutableRange(item = bullet, start = text.length).also {
                styleStack.add(it)
                annotations.add(it)
            }
            return styleStack.size - 1
        }

        /** Scope for a bullet list */
        public class BulletScope internal constructor(internal val builder: Builder) {
            internal val bulletListSettingStack = mutableListOf<Pair<TextUnit, Bullet>>()
        }

        private val bulletScope = BulletScope(this)

        /**
         * Creates a bullet list which allows to define a common [indentation] and a [bullet] for
         * evey bullet list item created inside the list.
         *
         * Note that when nesting the [withBulletList] calls, the indentation inside the nested list
         * will be a combination of all indentations in the nested chain. For example,
         * ```kotlin
         * withBulletList(10.sp) {
         *   withBulletList(15.sp) {

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-911-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 946–980)

         *     // items indentation 25.sp
         *   }
         * }
         * ```
         */
        public fun <R : Any> withBulletList(
            indentation: TextUnit = Bullet.DefaultIndentation,
            bullet: Bullet = Bullet.Default,
            block: BulletScope.() -> R,
        ): R {
            val adjustedIndentation =
                bulletScope.bulletListSettingStack.lastOrNull()?.first?.let {
                    checkPrecondition(it.type == indentation.type) {
                        "Indentation unit types of nested bullet lists must match. Current $it and previous is $indentation"
                    }
                    when (indentation.type) {
                        Sp -> (indentation.value + it.value).sp
                        Em -> (indentation.value + it.value).em
                        else -> indentation
                    }
                } ?: indentation

            val parIndex =
                pushStyle(
                    ParagraphStyle(
                        textIndent = TextIndent(adjustedIndentation, adjustedIndentation)
                    )
                )
            bulletScope.bulletListSettingStack.add(Pair(adjustedIndentation, bullet))
            return try {
                block(bulletScope)
            } finally {
                if (bulletScope.bulletListSettingStack.isNotEmpty()) {
                    bulletScope.bulletListSettingStack.removeAt(
                        bulletScope.bulletListSettingStack.lastIndex

Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-946-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)

## androidx.compose.ui.text AnnotatedString.kt source (lines 981–1015)

                    )
                }
                pop(parIndex)
            }
        }

        /**
         * Creates a bullet list item around the content produced by the [block]. The list item
         * creates a separate paragraph with the indentation to the bullet defined by the preceding
         * [Builder.withBulletList] calls.
         *
         * @param bullet defines the bullet to be drawn
         * @param block function to be executed
         * @sample androidx.compose.ui.text.samples.AnnotatedStringWithBulletListSample
         */
        public fun <R : Any> BulletScope.withBulletListItem(
            bullet: Bullet? = null,
            block: Builder.() -> R,
        ): R {
            val lastItemInStack = bulletListSettingStack.lastOrNull()
            val itemIndentation = lastItemInStack?.first ?: Bullet.DefaultIndentation
            val itemBullet = bullet ?: (lastItemInStack?.second ?: Bullet.Default)
            val parIndex =
                builder.pushStyle(
                    ParagraphStyle(textIndent = TextIndent(itemIndentation, itemIndentation))
                )
            val bulletIndex = builder.pushBullet(itemBullet)
            return try {
                block(builder)
            } finally {
                builder.pop(bulletIndex)
                builder.pop(parIndex)
            }
        }


Sources: [live-androidx-ui-ui-text-ui-text-annotatedstring-lines-981-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/AnnotatedString.kt)
