---
type: reference
title: androidx.compose.ui.text.font FontFamily.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    startLine: 1
    endLine: 35
    sha256: 1d8b5a6555e4376acea004379cacb1ae71272e19450006a3706cc106e56d5aa7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      /*
       * Copyright 2018 The Android Open Source Project
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

      package androidx.compose.ui.text.font

      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.State
      import androidx.compose.ui.text.internal.checkPrecondition

      /**
       * The primary typography interface for Compose applications.
       *
       * @see FontListFontFamily
       * @see GenericFontFamily
       * @see FontFamily.Resolver
       */
      // TODO(b/214587299): Add large ktdoc comment here about how it all works, including fallback and
      //  optional
      @Immutable
      public sealed class FontFamily protected constructor(canLoadSynchronously: Boolean) {
  - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    startLine: 106
    endLine: 140
    sha256: d1562706535a214c9788aa6f54e459b8d6973bc99561a1016adb1f4985196e1d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * See [CSS sans-serif](https://www.w3.org/TR/css-fonts-3/#sans-serif)
               */
              public val SansSerif: GenericFontFamily =
                  GenericFontFamily("sans-serif", "FontFamily.SansSerif")

              /**
               * The formal text style for scripts.
               *
               * @sample androidx.compose.ui.text.samples.FontFamilySerifSample
               *
               * See [CSS serif](https://www.w3.org/TR/css-fonts-3/#serif)
               */
              public val Serif: GenericFontFamily = GenericFontFamily("serif", "FontFamily.Serif")

              /**
               * Font family where glyphs have the same fixed width.
               *
               * @sample androidx.compose.ui.text.samples.FontFamilyMonospaceSample
               *
               * See [CSS monospace](https://www.w3.org/TR/css-fonts-3/#monospace)
               */
              public val Monospace: GenericFontFamily =
                  GenericFontFamily("monospace", "FontFamily.Monospace")

              /**
               * Cursive, hand-written like font family.
               *
               * If the device doesn't support this font family, the system will fallback to the default
               * font.
               *
               * @sample androidx.compose.ui.text.samples.FontFamilyCursiveSample
               *
               * See [CSS cursive](https://www.w3.org/TR/css-fonts-3/#cursive)
               */
              public val Cursive: GenericFontFamily = GenericFontFamily("cursive", "FontFamily.Cursive")
  - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    startLine: 141
    endLine: 175
    sha256: 02c51aa0e247d03dbc609e923e3e5d9dd41d73dd79e34827eba40eb840b91a94
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          @Suppress("CanBePrimaryConstructorProperty") // for deprecation
          @get:Deprecated(
              message = "Unused property that has no meaning. Do not use.",
              level = DeprecationLevel.ERROR,
          )
          public val canLoadSynchronously: Boolean = canLoadSynchronously
      }

      /** A base class of [FontFamily]s that is created from file sources. */
      public sealed class FileBasedFontFamily protected constructor() : FontFamily(false)

      /** A base class of [FontFamily]s installed on the system. */
      public sealed class SystemFontFamily protected constructor() : FontFamily(true)

      /**
       * Defines a font family with list of [Font].
       *
       * @sample androidx.compose.ui.text.samples.FontFamilySansSerifSample
       * @sample androidx.compose.ui.text.samples.CustomFontFamilySample
       */
      @Immutable
      public class FontListFontFamily
      internal constructor(
          /** The fallback list of fonts used for resolving typefaces for this FontFamily. */
          public val fonts: List<Font>
      ) : FileBasedFontFamily(), List<Font> by fonts {
          init {
              checkPrecondition(fonts.isNotEmpty()) { "At least one font should be passed to FontFamily" }
          }

          public override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is FontListFontFamily) return false
  - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    startLine: 176
    endLine: 210
    sha256: 6229ea0754c9d63478f0b73d97a46be16187ba3a80bce38d43bb20d8e3ff2bc3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (fonts != other.fonts) return false
              return true
          }

          public override fun hashCode(): Int {
              return fonts.hashCode()
          }

          public override fun toString(): String {
              return "FontListFontFamily(fonts=$fonts)"
          }
      }

      /**
       * Defines a font family with a generic font family name.
       *
       * If the platform cannot find the passed generic font family, use the platform default one.
       *
       * @param name a generic font family name, e.g. "serif", "sans-serif"
       * @see FontFamily.SansSerif
       * @see FontFamily.Serif
       * @see FontFamily.Monospace
       * @see FontFamily.Cursive
       */
      @Immutable
      public class GenericFontFamily
      internal constructor(public val name: String, private val fontFamilyName: String) :
          SystemFontFamily() {
          public override fun toString(): String = fontFamilyName
      }

      /** Defines a default font family. */
      @Immutable
      internal class DefaultFontFamily internal constructor() : SystemFontFamily() {
          override fun toString(): String = "FontFamily.Default"
  - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    startLine: 211
    endLine: 245
    sha256: fa2c722d985717ece18b3477e59e46ebf5768f404c6c68d2b5ab68092764c5e5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      /**
       * Defines a font family that is already loaded Typeface.
       *
       * @param typeface A typeface instance.
       */
      public class LoadedFontFamily internal constructor(public val typeface: Typeface) :
          FontFamily(true) {
          public override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is LoadedFontFamily) return false
              if (typeface != other.typeface) return false
              return true
          }

          public override fun hashCode(): Int {
              return typeface.hashCode()
          }

          public override fun toString(): String {
              return "LoadedFontFamily(typeface=$typeface)"
          }
      }

      /**
       * Construct a font family that contains list of custom font files.
       *
       * @param fonts list of font files
       */
      @Stable public fun FontFamily(fonts: List<Font>): FontFamily = FontListFontFamily(fonts)

      /**
       * Construct a font family that contains list of custom font files.
       *
  - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    startLine: 246
    endLine: 256
    sha256: bead5ae21e47c3a68e457f4a24d70c80f7204b3d4491d454e7ced324a84482ff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       * @param fonts list of font files
       */
      @Stable public fun FontFamily(vararg fonts: Font): FontFamily = FontListFontFamily(fonts.asList())

      /**
       * Construct a font family that contains loaded font family: Typeface.
       *
       * @param typeface A typeface instance.
       */
      @Stable public fun FontFamily(typeface: Typeface): FontFamily = LoadedFontFamily(typeface)
  - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    startLine: 36
    endLine: 70
    sha256: 6548ea71535226fbbee75dd44d1d575c29c0709b13abcd337ecf673fba7b9c56
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /**
           * Main interface for resolving [FontFamily] into a platform-specific typeface for use in
           * Compose-based applications.
           *
           * Fonts are loaded via [Resolver.resolve] from a FontFamily and a type request, and return a
           * platform-specific typeface.
           *
           * Fonts may be preloaded by calling [Resolver.preload] to avoid text reflow when async fonts
           * load.
           */
          public sealed interface Resolver {

              /**
               * Preloading resolves and caches all fonts reachable in a [FontFamily].
               *
               * It checks the cache first, and if there is a miss, it will fetch from the network.
               *
               * Fonts are consider reachable if they are the first entry in the fallback chain for any
               * call to [resolve].
               *
               * This method will suspend until:
               * 1. All [FontLoadingStrategy.Async] fonts that are reachable have completed loading, or
               *    failed to load
               * 2. All reachable fonts in the fallback chain have been loaded and inserted into the cache
               *
               * After returning, all fonts with [FontLoadingStrategy.Async] and
               * [FontLoadingStrategy.OptionalLocal] will be permanently cached. In contrast to [resolve]
               * this method will throw when a reachable [FontLoadingStrategy.Async] font fails to
               * resolve.
               *
               * All fonts with [FontLoadingStrategy.Blocking] will be cached with normal eviction rules.
               *
               * @param fontFamily the family to resolve all fonts from
               * @throws IllegalStateException if any reachable font fails to load
               */
  - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt
    startLine: 71
    endLine: 105
    sha256: 5cb6fc8010f83978fe46f75360f7ad6352c9e991dc6352a34cbdd47275001cf9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              public suspend fun preload(fontFamily: FontFamily)

              /**
               * Resolves a typeface using any appropriate logic for the [FontFamily].
               *
               * [FontListFontFamily] will always resolve using fallback chains and load using
               * [Font.ResourceLoader].
               *
               * Platform specific [FontFamily] will resolve according to platform behavior, as documented
               * for each [FontFamily].
               *
               * @param fontFamily family to resolve. If `null` will use [FontFamily.Default]
               * @param fontWeight desired font weight
               * @param fontStyle desired font style
               * @param fontSynthesis configuration for font synthesis
               * @return platform-specific Typeface such as [android.graphics.Typeface]
               * @throws IllegalStateException if the FontFamily cannot resolve a to a typeface
               */
              public fun resolve(
                  fontFamily: FontFamily? = null,
                  fontWeight: FontWeight = FontWeight.Normal,
                  fontStyle: FontStyle = FontStyle.Normal,
                  fontSynthesis: FontSynthesis = FontSynthesis.All,
              ): State<Any>
          }

          public companion object {
              /** The platform default font. */
              public val Default: SystemFontFamily = DefaultFontFamily()

              /**
               * Font family with low contrast and plain stroke endings.
               *
               * @sample androidx.compose.ui.text.samples.FontFamilySansSerifSample
               *
compose:
  id: live-androidx-ui-ui-text-ui-text-font-fontfamily
  artifact: androidx.compose.ui:ui-text
  fqn: androidx.compose.ui.text.font
  sections:
    - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-1
      title: androidx.compose.ui.text.font FontFamily.kt source (lines 1–35)
      aliases:
        - androidx.compose.ui.text.font.FontFamily
        - androidx.compose.ui.text.font.FontListFontFamily
        - androidx.compose.ui.text.font.GenericFontFamily
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-106
      title: androidx.compose.ui.text.font FontFamily.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.text.font.FontFamily
        - androidx.compose.ui.text.font.GenericFontFamily
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-141
      title: androidx.compose.ui.text.font FontFamily.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.text.font.FontFamily
        - androidx.compose.ui.text.font.FileBasedFontFamily
        - androidx.compose.ui.text.font.SystemFontFamily
        - androidx.compose.ui.text.font.FontListFontFamily
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-176
      title: androidx.compose.ui.text.font FontFamily.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.text.font.FontFamily
        - androidx.compose.ui.text.font.SystemFontFamily
        - androidx.compose.ui.text.font.FontListFontFamily
        - androidx.compose.ui.text.font.GenericFontFamily
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-211
      title: androidx.compose.ui.text.font FontFamily.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.text.font.FontFamily
        - androidx.compose.ui.text.font.FontListFontFamily
        - androidx.compose.ui.text.font.LoadedFontFamily
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-246
      title: androidx.compose.ui.text.font FontFamily.kt source (lines 246–256)
      aliases:
        - androidx.compose.ui.text.font.FontFamily
        - androidx.compose.ui.text.font.FontListFontFamily
        - androidx.compose.ui.text.font.LoadedFontFamily
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-36
      title: androidx.compose.ui.text.font FontFamily.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.text.font.FontFamily
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-71
      title: androidx.compose.ui.text.font FontFamily.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.text.font.FontFamily
        - androidx.compose.ui.text.font.SystemFontFamily
        - androidx.compose.ui.text.font.FontListFontFamily
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.text.font FontFamily.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt

## androidx.compose.ui.text.font FontFamily.kt source (lines 1–35)

/*
 * Copyright 2018 The Android Open Source Project
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

package androidx.compose.ui.text.font

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.State
import androidx.compose.ui.text.internal.checkPrecondition

/**
 * The primary typography interface for Compose applications.
 *
 * @see FontListFontFamily
 * @see GenericFontFamily
 * @see FontFamily.Resolver
 */
// TODO(b/214587299): Add large ktdoc comment here about how it all works, including fallback and
//  optional
@Immutable
public sealed class FontFamily protected constructor(canLoadSynchronously: Boolean) {


Sources: [live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt)

## androidx.compose.ui.text.font FontFamily.kt source (lines 106–140)

         * See [CSS sans-serif](https://www.w3.org/TR/css-fonts-3/#sans-serif)
         */
        public val SansSerif: GenericFontFamily =
            GenericFontFamily("sans-serif", "FontFamily.SansSerif")

        /**
         * The formal text style for scripts.
         *
         * @sample androidx.compose.ui.text.samples.FontFamilySerifSample
         *
         * See [CSS serif](https://www.w3.org/TR/css-fonts-3/#serif)
         */
        public val Serif: GenericFontFamily = GenericFontFamily("serif", "FontFamily.Serif")

        /**
         * Font family where glyphs have the same fixed width.
         *
         * @sample androidx.compose.ui.text.samples.FontFamilyMonospaceSample
         *
         * See [CSS monospace](https://www.w3.org/TR/css-fonts-3/#monospace)
         */
        public val Monospace: GenericFontFamily =
            GenericFontFamily("monospace", "FontFamily.Monospace")

        /**
         * Cursive, hand-written like font family.
         *
         * If the device doesn't support this font family, the system will fallback to the default
         * font.
         *
         * @sample androidx.compose.ui.text.samples.FontFamilyCursiveSample
         *
         * See [CSS cursive](https://www.w3.org/TR/css-fonts-3/#cursive)
         */
        public val Cursive: GenericFontFamily = GenericFontFamily("cursive", "FontFamily.Cursive")

Sources: [live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt)

## androidx.compose.ui.text.font FontFamily.kt source (lines 141–175)

    }

    @Suppress("CanBePrimaryConstructorProperty") // for deprecation
    @get:Deprecated(
        message = "Unused property that has no meaning. Do not use.",
        level = DeprecationLevel.ERROR,
    )
    public val canLoadSynchronously: Boolean = canLoadSynchronously
}

/** A base class of [FontFamily]s that is created from file sources. */
public sealed class FileBasedFontFamily protected constructor() : FontFamily(false)

/** A base class of [FontFamily]s installed on the system. */
public sealed class SystemFontFamily protected constructor() : FontFamily(true)

/**
 * Defines a font family with list of [Font].
 *
 * @sample androidx.compose.ui.text.samples.FontFamilySansSerifSample
 * @sample androidx.compose.ui.text.samples.CustomFontFamilySample
 */
@Immutable
public class FontListFontFamily
internal constructor(
    /** The fallback list of fonts used for resolving typefaces for this FontFamily. */
    public val fonts: List<Font>
) : FileBasedFontFamily(), List<Font> by fonts {
    init {
        checkPrecondition(fonts.isNotEmpty()) { "At least one font should be passed to FontFamily" }
    }

    public override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is FontListFontFamily) return false

Sources: [live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt)

## androidx.compose.ui.text.font FontFamily.kt source (lines 176–210)

        if (fonts != other.fonts) return false
        return true
    }

    public override fun hashCode(): Int {
        return fonts.hashCode()
    }

    public override fun toString(): String {
        return "FontListFontFamily(fonts=$fonts)"
    }
}

/**
 * Defines a font family with a generic font family name.
 *
 * If the platform cannot find the passed generic font family, use the platform default one.
 *
 * @param name a generic font family name, e.g. "serif", "sans-serif"
 * @see FontFamily.SansSerif
 * @see FontFamily.Serif
 * @see FontFamily.Monospace
 * @see FontFamily.Cursive
 */
@Immutable
public class GenericFontFamily
internal constructor(public val name: String, private val fontFamilyName: String) :
    SystemFontFamily() {
    public override fun toString(): String = fontFamilyName
}

/** Defines a default font family. */
@Immutable
internal class DefaultFontFamily internal constructor() : SystemFontFamily() {
    override fun toString(): String = "FontFamily.Default"

Sources: [live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt)

## androidx.compose.ui.text.font FontFamily.kt source (lines 211–245)

}

/**
 * Defines a font family that is already loaded Typeface.
 *
 * @param typeface A typeface instance.
 */
public class LoadedFontFamily internal constructor(public val typeface: Typeface) :
    FontFamily(true) {
    public override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is LoadedFontFamily) return false
        if (typeface != other.typeface) return false
        return true
    }

    public override fun hashCode(): Int {
        return typeface.hashCode()
    }

    public override fun toString(): String {
        return "LoadedFontFamily(typeface=$typeface)"
    }
}

/**
 * Construct a font family that contains list of custom font files.
 *
 * @param fonts list of font files
 */
@Stable public fun FontFamily(fonts: List<Font>): FontFamily = FontListFontFamily(fonts)

/**
 * Construct a font family that contains list of custom font files.
 *

Sources: [live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt)

## androidx.compose.ui.text.font FontFamily.kt source (lines 246–256)

 * @param fonts list of font files
 */
@Stable public fun FontFamily(vararg fonts: Font): FontFamily = FontListFontFamily(fonts.asList())

/**
 * Construct a font family that contains loaded font family: Typeface.
 *
 * @param typeface A typeface instance.
 */
@Stable public fun FontFamily(typeface: Typeface): FontFamily = LoadedFontFamily(typeface)


Sources: [live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt)

## androidx.compose.ui.text.font FontFamily.kt source (lines 36–70)

    /**
     * Main interface for resolving [FontFamily] into a platform-specific typeface for use in
     * Compose-based applications.
     *
     * Fonts are loaded via [Resolver.resolve] from a FontFamily and a type request, and return a
     * platform-specific typeface.
     *
     * Fonts may be preloaded by calling [Resolver.preload] to avoid text reflow when async fonts
     * load.
     */
    public sealed interface Resolver {

        /**
         * Preloading resolves and caches all fonts reachable in a [FontFamily].
         *
         * It checks the cache first, and if there is a miss, it will fetch from the network.
         *
         * Fonts are consider reachable if they are the first entry in the fallback chain for any
         * call to [resolve].
         *
         * This method will suspend until:
         * 1. All [FontLoadingStrategy.Async] fonts that are reachable have completed loading, or
         *    failed to load
         * 2. All reachable fonts in the fallback chain have been loaded and inserted into the cache
         *
         * After returning, all fonts with [FontLoadingStrategy.Async] and
         * [FontLoadingStrategy.OptionalLocal] will be permanently cached. In contrast to [resolve]
         * this method will throw when a reachable [FontLoadingStrategy.Async] font fails to
         * resolve.
         *
         * All fonts with [FontLoadingStrategy.Blocking] will be cached with normal eviction rules.
         *
         * @param fontFamily the family to resolve all fonts from
         * @throws IllegalStateException if any reachable font fails to load
         */

Sources: [live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt)

## androidx.compose.ui.text.font FontFamily.kt source (lines 71–105)

        public suspend fun preload(fontFamily: FontFamily)

        /**
         * Resolves a typeface using any appropriate logic for the [FontFamily].
         *
         * [FontListFontFamily] will always resolve using fallback chains and load using
         * [Font.ResourceLoader].
         *
         * Platform specific [FontFamily] will resolve according to platform behavior, as documented
         * for each [FontFamily].
         *
         * @param fontFamily family to resolve. If `null` will use [FontFamily.Default]
         * @param fontWeight desired font weight
         * @param fontStyle desired font style
         * @param fontSynthesis configuration for font synthesis
         * @return platform-specific Typeface such as [android.graphics.Typeface]
         * @throws IllegalStateException if the FontFamily cannot resolve a to a typeface
         */
        public fun resolve(
            fontFamily: FontFamily? = null,
            fontWeight: FontWeight = FontWeight.Normal,
            fontStyle: FontStyle = FontStyle.Normal,
            fontSynthesis: FontSynthesis = FontSynthesis.All,
        ): State<Any>
    }

    public companion object {
        /** The platform default font. */
        public val Default: SystemFontFamily = DefaultFontFamily()

        /**
         * Font family with low contrast and plain stroke endings.
         *
         * @sample androidx.compose.ui.text.samples.FontFamilySansSerifSample
         *

Sources: [live-androidx-ui-ui-text-ui-text-font-fontfamily-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/font/FontFamily.kt)
