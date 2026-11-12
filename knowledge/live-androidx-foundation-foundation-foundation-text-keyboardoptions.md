---
type: reference
title: androidx.compose.foundation.text KeyboardOptions.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    startLine: 1
    endLine: 35
    sha256: 1cdee3e381c3c8556e25641a01f3a40bff057eb8aa566347012963f471b64fcd
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

      package androidx.compose.foundation.text

      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.text.input.ImeAction
      import androidx.compose.ui.text.input.ImeOptions
      import androidx.compose.ui.text.input.KeyboardCapitalization
      import androidx.compose.ui.text.input.KeyboardType
      import androidx.compose.ui.text.input.PlatformImeOptions
      import androidx.compose.ui.text.intl.LocaleList

      /**
       * Defines keyboard configuration options for TextFields.
       *
       * Represents specific layout, capitalization, and system action hints sent to the Input Method
       * Editor (IME/software keyboard) on focus gain.
       *
       * Soft keyboards make best-effort attempts to comply with the options provided here. Key layouts
       * and flag behaviors are ultimately determined by the active IME implementation.
  - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-132-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    startLine: 132
    endLine: 166
    sha256: 85c063a9900b25445a28eaf4ec0b7b0a9229a60aa2e4f068490f2c35782ab3db
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public constructor(
              capitalization: KeyboardCapitalization = KeyboardCapitalization.Unspecified,
              autoCorrect: Boolean = Default.autoCorrectOrDefault,
              keyboardType: KeyboardType = KeyboardType.Unspecified,
              imeAction: ImeAction = ImeAction.Default,
          ) : this(
              capitalization = capitalization,
              autoCorrectEnabled = autoCorrect,
              keyboardType = keyboardType,
              imeAction = imeAction,
              platformImeOptions = null,
          )

          @Deprecated("Maintained for binary compat", level = DeprecationLevel.HIDDEN)
          public constructor(
              capitalization: KeyboardCapitalization = KeyboardCapitalization.None,
              autoCorrect: Boolean = Default.autoCorrectOrDefault,
              keyboardType: KeyboardType = KeyboardType.Text,
              imeAction: ImeAction = ImeAction.Default,
              platformImeOptions: PlatformImeOptions? = null,
          ) : this(
              capitalization = capitalization,
              autoCorrectEnabled = autoCorrect,
              keyboardType = keyboardType,
              imeAction = imeAction,
              platformImeOptions = platformImeOptions,
              showKeyboardOnFocus = Default.showKeyboardOnFocusOrDefault,
          )

          @Deprecated("Please use the autoCorrectEnabled property.", level = DeprecationLevel.WARNING)
          public val autoCorrect: Boolean
              get() = autoCorrectOrDefault

          // Suppress GetterSetterNames because this is how the property was named previously.
          @Suppress("unused", "GetterSetterNames")
  - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-167-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    startLine: 167
    endLine: 201
    sha256: d69abf5ce07396349a3550616b54704ee01617db809ea83e5d22fd51976d337c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @get:Suppress("GetterSetterNames")
          @Deprecated(
              "Included for binary compatibility. Use showKeyboardOnFocus.",
              level = DeprecationLevel.HIDDEN,
          )
          public val shouldShowKeyboardOnFocus: Boolean
              get() = showKeyboardOnFocus ?: true

          private val autoCorrectOrDefault: Boolean
              get() = autoCorrectEnabled ?: true

          private val capitalizationOrDefault: KeyboardCapitalization
              get() =
                  capitalization.takeUnless { it == KeyboardCapitalization.Unspecified }
                      ?: KeyboardCapitalization.None

          private val keyboardTypeOrDefault: KeyboardType
              get() = keyboardType.takeUnless { it == KeyboardType.Unspecified } ?: KeyboardType.Text

          internal val imeActionOrDefault: ImeAction
              get() = imeAction.takeUnless { it == ImeAction.Unspecified } ?: ImeAction.Default

          internal val showKeyboardOnFocusOrDefault: Boolean
              get() = showKeyboardOnFocus ?: true

          private val hintLocalesOrDefault: LocaleList
              get() = hintLocales ?: LocaleList.Empty

          private val isCompletelyUnspecified: Boolean
              get() =
                  capitalization == KeyboardCapitalization.Unspecified &&
                      autoCorrectEnabled == null &&
                      keyboardType == KeyboardType.Unspecified &&
                      imeAction == ImeAction.Unspecified &&
                      platformImeOptions == null &&
  - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-202-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    startLine: 202
    endLine: 236
    sha256: 03c5d8d802d9c106fdeefc084ba7125857e34ba67a3878e7fe8516e91b757c04
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      showKeyboardOnFocus == null &&
                      hintLocales == null

          /**
           * Returns a new [ImeOptions] with the values that are in this [KeyboardOptions] and provided
           * params.
           *
           * @param singleLine see [ImeOptions.singleLine]
           */
          internal fun toImeOptions(singleLine: Boolean = ImeOptions.Default.singleLine) =
              ImeOptions(
                  singleLine = singleLine,
                  capitalization = capitalizationOrDefault,
                  autoCorrect = autoCorrectOrDefault,
                  keyboardType = keyboardTypeOrDefault,
                  imeAction = imeActionOrDefault,
                  platformImeOptions = platformImeOptions,
                  hintLocales = hintLocalesOrDefault,
              )

          /**
           * Returns a copy of this object with the values passed to this method.
           *
           * Note that if an unspecified (null) value is passed explicitly to this method, it will replace
           * any actually-specified value. This differs from the behavior of [merge], which will never
           * take an unspecified value over a specified one.
           */
          public fun copy(
              capitalization: KeyboardCapitalization = this.capitalization,
              @Suppress("AutoBoxing") autoCorrectEnabled: Boolean? = this.autoCorrectEnabled,
              keyboardType: KeyboardType = this.keyboardType,
              imeAction: ImeAction = this.imeAction,
              platformImeOptions: PlatformImeOptions? = this.platformImeOptions,
              @Suppress("AutoBoxing") showKeyboardOnFocus: Boolean? = null,
              hintLocales: LocaleList? = null,
  - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-237-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    startLine: 237
    endLine: 271
    sha256: ce132b2c1042765032502c626c279c7e63e35fad93147dc232fe1faa88ab1a51
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ): KeyboardOptions {
              return KeyboardOptions(
                  capitalization = capitalization,
                  autoCorrectEnabled = autoCorrectEnabled,
                  keyboardType = keyboardType,
                  imeAction = imeAction,
                  platformImeOptions = platformImeOptions,
                  showKeyboardOnFocus = showKeyboardOnFocus,
                  hintLocales = hintLocales,
              )
          }

          @Deprecated(
              "Please use the copy function that takes an autoCorrectEnabled parameter.",
              level = DeprecationLevel.HIDDEN,
              replaceWith =
                  ReplaceWith(
                      "copy(" +
                          "capitalization = capitalization, " +
                          "autoCorrectEnabled = autoCorrect, " +
                          "keyboardType = keyboardType, " +
                          "imeAction = imeAction," +
                          "platformImeOptions = platformImeOptions, " +
                          "showKeyboardOnFocus = showKeyboardOnFocus ?: true," +
                          "hintLocales = hintLocales" +
                          ")"
                  ),
          )
          public fun copy(
              capitalization: KeyboardCapitalization = this.capitalization,
              autoCorrect: Boolean = this.autoCorrectOrDefault,
              keyboardType: KeyboardType = this.keyboardType,
              imeAction: ImeAction = this.imeAction,
              platformImeOptions: PlatformImeOptions? = this.platformImeOptions,
              @Suppress("AutoBoxing") showKeyboardOnFocus: Boolean? = this.showKeyboardOnFocusOrDefault,
  - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-272-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    startLine: 272
    endLine: 306
    sha256: 573c749897c762c115a471353d3cc4ff353906e68c55449195f4e538548d992c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              hintLocales: LocaleList? = this.hintLocales,
          ): KeyboardOptions {
              return KeyboardOptions(
                  capitalization = capitalization,
                  autoCorrectEnabled = autoCorrect,
                  keyboardType = keyboardType,
                  imeAction = imeAction,
                  platformImeOptions = platformImeOptions,
                  showKeyboardOnFocus = showKeyboardOnFocus,
                  hintLocales = hintLocales,
              )
          }

          @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
          public fun copy(
              capitalization: KeyboardCapitalization = this.capitalization,
              autoCorrect: Boolean = this.autoCorrectOrDefault,
              keyboardType: KeyboardType = this.keyboardType,
              imeAction: ImeAction = this.imeAction,
              platformImeOptions: PlatformImeOptions? = this.platformImeOptions,
          ): KeyboardOptions {
              return KeyboardOptions(
                  capitalization = capitalization,
                  autoCorrectEnabled = autoCorrect,
                  keyboardType = keyboardType,
                  imeAction = imeAction,
                  platformImeOptions = platformImeOptions,
                  showKeyboardOnFocus = this.showKeyboardOnFocus,
                  hintLocales = this.hintLocales,
                  // New properties must be added here even though this is deprecated. The deprecated copy
                  // constructors should still work on instances created with newer library versions.
              )
          }

          @Deprecated(
  - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-307-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    startLine: 307
    endLine: 341
    sha256: c50c50b398fd2e3e6aad3140885393fb3f124bf0764d442b4ae216b7ecc7ec03
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              "Please use the new copy function that takes optional platformImeOptions parameter.",
              level = DeprecationLevel.HIDDEN,
          )
          public fun copy(
              capitalization: KeyboardCapitalization = this.capitalization,
              autoCorrect: Boolean = this.autoCorrectOrDefault,
              keyboardType: KeyboardType = this.keyboardType,
              imeAction: ImeAction = this.imeAction,
          ): KeyboardOptions {
              return KeyboardOptions(
                  capitalization = capitalization,
                  autoCorrectEnabled = autoCorrect,
                  keyboardType = keyboardType,
                  imeAction = imeAction,
                  platformImeOptions = this.platformImeOptions,
                  showKeyboardOnFocus = this.showKeyboardOnFocus,
                  hintLocales = this.hintLocales,
                  // New properties must be added here even though this is deprecated. The deprecated copy
                  // constructors should still work on instances created with newer library versions.
              )
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is KeyboardOptions) return false

              if (capitalization != other.capitalization) return false
              if (autoCorrectEnabled != other.autoCorrectEnabled) return false
              if (keyboardType != other.keyboardType) return false
              if (imeAction != other.imeAction) return false
              if (platformImeOptions != other.platformImeOptions) return false
              if (showKeyboardOnFocus != other.showKeyboardOnFocus) return false
              if (hintLocales != other.hintLocales) return false

              return true
  - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-342-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    startLine: 342
    endLine: 376
    sha256: 9a66c33a2874bac2d25b797f50fe8f0f2e0ac06d9db069c49a7b4db5e410d927
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          override fun hashCode(): Int {
              var result = capitalization.hashCode()
              result = 31 * result + autoCorrectEnabled.hashCode()
              result = 31 * result + keyboardType.hashCode()
              result = 31 * result + imeAction.hashCode()
              result = 31 * result + platformImeOptions.hashCode()
              result = 31 * result + showKeyboardOnFocus.hashCode()
              result = 31 * result + hintLocales.hashCode()
              return result
          }

          override fun toString(): String {
              return "KeyboardOptions(" +
                  "capitalization=$capitalization, " +
                  "autoCorrectEnabled=$autoCorrectEnabled, " +
                  "keyboardType=$keyboardType, " +
                  "imeAction=$imeAction, " +
                  "platformImeOptions=$platformImeOptions" +
                  "showKeyboardOnFocus=$showKeyboardOnFocus, " +
                  "hintLocales=$hintLocales" +
                  ")"
          }

          /**
           * Returns a new [KeyboardOptions] that is a combination of this options and a given [other]
           * options.
           *
           * [other]s null or `Unspecified` properties are replaced with the non-null properties of this
           * object.
           *
           * If the either this or [other] is null, returns the non-null one.
           */
          // TODO(b/331222000) Rename to be more clear about precedence.
  - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    startLine: 36
    endLine: 61
    sha256: fb726987def79e99eca470a842e5cd87d29d7c8d6f1a26057f9c72faf3a779bf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @sample androidx.compose.foundation.samples.RegistrationFormSample
       * @sample androidx.compose.foundation.samples.CheckoutRegisterFormSample
       * @sample androidx.compose.foundation.samples.DateTimeSchedulerFormSample
       * @sample androidx.compose.foundation.samples.SpecialtyInputsFormSample
       * @sample androidx.compose.foundation.samples.PinCodeEntryRowSample
       * @sample androidx.compose.foundation.samples.DecimalInputSample
       * @sample androidx.compose.foundation.samples.ItemCountSettingsSample
       * @param capitalization informs the keyboard whether to automatically capitalize characters, words,
       *   or sentences. Only applicable to text-based [KeyboardType]s such as [KeyboardType.Text],
       *   [KeyboardType.Ascii], or [KeyboardType.PostalAddress]. It is ignored by soft keyboards when
       *   paired with numeric layouts (like [KeyboardType.Number] or [KeyboardType.Decimal]).
       * @param autoCorrectEnabled informs the keyboard whether to enable auto-correct suggestions. Only
       *   applicable to text-based [KeyboardType]s such as [KeyboardType.Text], [KeyboardType.Email], or
       *   [KeyboardType.Uri]. Keyboards ignore this value for numeric keypads. A null value (the default
       *   parameter value) expresses that soft keyboard default configurations should apply.
       * @param keyboardType keyboard keypad layout to be displayed in the focused text field. Honored by
       *   keyboards to display tailored key selections (e.g., phone dialer characters for
       *   [KeyboardType.Phone], decimal separator buttons for [KeyboardType.Decimal], or masked numeric
       *   pads for [KeyboardType.NumberPassword]).
       * @param imeAction action button displayed on the soft keyboard (e.g., search, send, next, done,
       *   etc.). This action is honored by the software keyboard and may display custom icons (like a
       *   magnifying glass for [ImeAction.Search]). When the text field allows multi-line inputs, the
       *   keyboard typically displays a return key instead of the action icon requested here.
       * @param platformImeOptions platform-specific IME options (like private IME commands).
       * @param showKeyboardOnFocus when true, the soft keyboard shows immediately on text field focus
  - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-377-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    startLine: 377
    endLine: 411
    sha256: 2881d72996aab481afdaedcbe2edf01166b60a1b8bdac9b01f4602706524f35e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public fun merge(other: KeyboardOptions?): KeyboardOptions =
              other?.fillUnspecifiedValuesWith(this) ?: this

          /**
           * Returns a new [KeyboardOptions] that is a combination of this options and a given [other]
           * options.
           *
           * This object's null or `Unspecified` properties are replaced with the non-null properties of
           * [other]. This differs from the behavior of [copy], which always takes the passed value over
           * the current one, even if an unspecified value is passed.
           *
           * If the either this or [other] is null, returns the non-null one.
           */
          @Stable
          internal fun fillUnspecifiedValuesWith(other: KeyboardOptions?): KeyboardOptions {
              // Don't allocate unless necessary.
              if (other == null || other.isCompletelyUnspecified || other == this) return this
              if (this.isCompletelyUnspecified) return other

              return KeyboardOptions(
                  capitalization =
                      this.capitalization.takeUnless { it == KeyboardCapitalization.Unspecified }
                          ?: other.capitalization,
                  autoCorrectEnabled = this.autoCorrectEnabled ?: other.autoCorrectEnabled,
                  keyboardType =
                      this.keyboardType.takeUnless { it == KeyboardType.Unspecified }
                          ?: other.keyboardType,
                  imeAction =
                      this.imeAction.takeUnless { it == ImeAction.Unspecified } ?: other.imeAction,
                  platformImeOptions = this.platformImeOptions ?: other.platformImeOptions,
                  showKeyboardOnFocus = this.showKeyboardOnFocus ?: other.showKeyboardOnFocus,
                  hintLocales = this.hintLocales ?: other.hintLocales,
              )
          }
      }
  - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-62-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    startLine: 62
    endLine: 96
    sha256: f770b4d2b172d61bf0bb98bc6ef9605b3cb08c682396a810c23ca51c5d5b8584
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   gain. When false, the soft keyboard is hidden until the user taps the text field. A null value
       *   (the default parameter value) enables showing the keyboard automatically on focus gain. Note:
       *   This option is only supported by TextFieldState-based TextFields (like BasicTextField) and is
       *   ignored by legacy TextFields.
       * @param hintLocales list of languages for IMEs. Provides a localized hint to help multilingual
       *   keyboards automatically shift their keyboard language based on the active field's context.
       */
      @Immutable
      public class KeyboardOptions(
          public val capitalization: KeyboardCapitalization = KeyboardCapitalization.Unspecified,
          @Suppress("AutoBoxing")
          @get:Suppress("AutoBoxing")
          public val autoCorrectEnabled: Boolean? = null,
          public val keyboardType: KeyboardType = KeyboardType.Unspecified,
          public val imeAction: ImeAction = ImeAction.Unspecified,
          public val platformImeOptions: PlatformImeOptions? = null,
          @Suppress("AutoBoxing")
          @get:Suppress("AutoBoxing")
          public val showKeyboardOnFocus: Boolean? = null,
          @get:Suppress("NullableCollection") public val hintLocales: LocaleList? = null,
      ) {

          public companion object {
              /** Provides default [KeyboardOptions]. See parameter descriptions for default values. */
              @Stable public val Default: KeyboardOptions = KeyboardOptions()

              /** Default [KeyboardOptions] for [BasicSecureTextField]. */
              @Stable
              internal val SecureTextField =
                  KeyboardOptions(autoCorrectEnabled = false, keyboardType = KeyboardType.Password)
          }

          @Deprecated(
              "Please use the new constructor that takes optional autoCorrectEnabled parameter.",
              level = DeprecationLevel.WARNING,
  - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-97-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt
    startLine: 97
    endLine: 131
    sha256: 9be31800c40906797ff9115923d29ffb3be172c761d1626de3d11848d7f282d4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              replaceWith =
                  ReplaceWith(
                      "KeyboardOptions(" +
                          "capitalization = capitalization, " +
                          "autoCorrectEnabled = autoCorrect, " +
                          "keyboardType = keyboardType, " +
                          "imeAction = imeAction," +
                          "platformImeOptions = platformImeOptions, " +
                          "showKeyboardOnFocus = showKeyboardOnFocus," +
                          "hintLocales = hintLocales" +
                          ")"
                  ),
          )
          public constructor(
              capitalization: KeyboardCapitalization = KeyboardCapitalization.Unspecified,
              autoCorrect: Boolean,
              keyboardType: KeyboardType = KeyboardType.Unspecified,
              imeAction: ImeAction = ImeAction.Unspecified,
              platformImeOptions: PlatformImeOptions? = null,
              @Suppress("AutoBoxing") showKeyboardOnFocus: Boolean? = null,
              @Suppress("NullableCollection") hintLocales: LocaleList? = null,
          ) : this(
              capitalization = capitalization,
              autoCorrectEnabled = autoCorrect,
              keyboardType = keyboardType,
              imeAction = imeAction,
              platformImeOptions = platformImeOptions,
              showKeyboardOnFocus = showKeyboardOnFocus,
              hintLocales = hintLocales,
          )

          @Deprecated(
              "Please use the new constructor that takes optional platformImeOptions parameter.",
              level = DeprecationLevel.HIDDEN,
          )
compose:
  id: live-androidx-foundation-foundation-foundation-text-keyboardoptions
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.text
  sections:
    - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-1
      title: androidx.compose.foundation.text KeyboardOptions.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-132
      title: androidx.compose.foundation.text KeyboardOptions.kt source (lines 132–166)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-132-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-167
      title: androidx.compose.foundation.text KeyboardOptions.kt source (lines 167–201)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-167-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-202
      title: androidx.compose.foundation.text KeyboardOptions.kt source (lines 202–236)
      aliases:
        - androidx.compose.foundation.text.KeyboardOptions
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-202-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-237
      title: androidx.compose.foundation.text KeyboardOptions.kt source (lines 237–271)
      aliases:
        - androidx.compose.foundation.text.KeyboardOptions
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-237-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-272
      title: androidx.compose.foundation.text KeyboardOptions.kt source (lines 272–306)
      aliases:
        - androidx.compose.foundation.text.KeyboardOptions
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-272-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-307
      title: androidx.compose.foundation.text KeyboardOptions.kt source (lines 307–341)
      aliases:
        - androidx.compose.foundation.text.KeyboardOptions
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-307-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-342
      title: androidx.compose.foundation.text KeyboardOptions.kt source (lines 342–376)
      aliases:
        - androidx.compose.foundation.text.KeyboardOptions
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-342-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-36
      title: androidx.compose.foundation.text KeyboardOptions.kt source (lines 36–61)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-377
      title: androidx.compose.foundation.text KeyboardOptions.kt source (lines 377–411)
      aliases:
        - androidx.compose.foundation.text.KeyboardOptions
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-377-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-62
      title: androidx.compose.foundation.text KeyboardOptions.kt source (lines 62–96)
      aliases:
        - androidx.compose.foundation.text.KeyboardOptions
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-62-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-97
      title: androidx.compose.foundation.text KeyboardOptions.kt source (lines 97–131)
      aliases:
        - androidx.compose.foundation.text.KeyboardOptions
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-97-source
      relatedIds: []
---

# androidx.compose.foundation.text KeyboardOptions.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt

## androidx.compose.foundation.text KeyboardOptions.kt source (lines 1–35)

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

package androidx.compose.foundation.text

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.ImeOptions
import androidx.compose.ui.text.input.KeyboardCapitalization
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PlatformImeOptions
import androidx.compose.ui.text.intl.LocaleList

/**
 * Defines keyboard configuration options for TextFields.
 *
 * Represents specific layout, capitalization, and system action hints sent to the Input Method
 * Editor (IME/software keyboard) on focus gain.
 *
 * Soft keyboards make best-effort attempts to comply with the options provided here. Key layouts
 * and flag behaviors are ultimately determined by the active IME implementation.

Sources: [live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt)

## androidx.compose.foundation.text KeyboardOptions.kt source (lines 132–166)

    public constructor(
        capitalization: KeyboardCapitalization = KeyboardCapitalization.Unspecified,
        autoCorrect: Boolean = Default.autoCorrectOrDefault,
        keyboardType: KeyboardType = KeyboardType.Unspecified,
        imeAction: ImeAction = ImeAction.Default,
    ) : this(
        capitalization = capitalization,
        autoCorrectEnabled = autoCorrect,
        keyboardType = keyboardType,
        imeAction = imeAction,
        platformImeOptions = null,
    )

    @Deprecated("Maintained for binary compat", level = DeprecationLevel.HIDDEN)
    public constructor(
        capitalization: KeyboardCapitalization = KeyboardCapitalization.None,
        autoCorrect: Boolean = Default.autoCorrectOrDefault,
        keyboardType: KeyboardType = KeyboardType.Text,
        imeAction: ImeAction = ImeAction.Default,
        platformImeOptions: PlatformImeOptions? = null,
    ) : this(
        capitalization = capitalization,
        autoCorrectEnabled = autoCorrect,
        keyboardType = keyboardType,
        imeAction = imeAction,
        platformImeOptions = platformImeOptions,
        showKeyboardOnFocus = Default.showKeyboardOnFocusOrDefault,
    )

    @Deprecated("Please use the autoCorrectEnabled property.", level = DeprecationLevel.WARNING)
    public val autoCorrect: Boolean
        get() = autoCorrectOrDefault

    // Suppress GetterSetterNames because this is how the property was named previously.
    @Suppress("unused", "GetterSetterNames")

Sources: [live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-132-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt)

## androidx.compose.foundation.text KeyboardOptions.kt source (lines 167–201)

    @get:Suppress("GetterSetterNames")
    @Deprecated(
        "Included for binary compatibility. Use showKeyboardOnFocus.",
        level = DeprecationLevel.HIDDEN,
    )
    public val shouldShowKeyboardOnFocus: Boolean
        get() = showKeyboardOnFocus ?: true

    private val autoCorrectOrDefault: Boolean
        get() = autoCorrectEnabled ?: true

    private val capitalizationOrDefault: KeyboardCapitalization
        get() =
            capitalization.takeUnless { it == KeyboardCapitalization.Unspecified }
                ?: KeyboardCapitalization.None

    private val keyboardTypeOrDefault: KeyboardType
        get() = keyboardType.takeUnless { it == KeyboardType.Unspecified } ?: KeyboardType.Text

    internal val imeActionOrDefault: ImeAction
        get() = imeAction.takeUnless { it == ImeAction.Unspecified } ?: ImeAction.Default

    internal val showKeyboardOnFocusOrDefault: Boolean
        get() = showKeyboardOnFocus ?: true

    private val hintLocalesOrDefault: LocaleList
        get() = hintLocales ?: LocaleList.Empty

    private val isCompletelyUnspecified: Boolean
        get() =
            capitalization == KeyboardCapitalization.Unspecified &&
                autoCorrectEnabled == null &&
                keyboardType == KeyboardType.Unspecified &&
                imeAction == ImeAction.Unspecified &&
                platformImeOptions == null &&

Sources: [live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-167-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt)

## androidx.compose.foundation.text KeyboardOptions.kt source (lines 202–236)

                showKeyboardOnFocus == null &&
                hintLocales == null

    /**
     * Returns a new [ImeOptions] with the values that are in this [KeyboardOptions] and provided
     * params.
     *
     * @param singleLine see [ImeOptions.singleLine]
     */
    internal fun toImeOptions(singleLine: Boolean = ImeOptions.Default.singleLine) =
        ImeOptions(
            singleLine = singleLine,
            capitalization = capitalizationOrDefault,
            autoCorrect = autoCorrectOrDefault,
            keyboardType = keyboardTypeOrDefault,
            imeAction = imeActionOrDefault,
            platformImeOptions = platformImeOptions,
            hintLocales = hintLocalesOrDefault,
        )

    /**
     * Returns a copy of this object with the values passed to this method.
     *
     * Note that if an unspecified (null) value is passed explicitly to this method, it will replace
     * any actually-specified value. This differs from the behavior of [merge], which will never
     * take an unspecified value over a specified one.
     */
    public fun copy(
        capitalization: KeyboardCapitalization = this.capitalization,
        @Suppress("AutoBoxing") autoCorrectEnabled: Boolean? = this.autoCorrectEnabled,
        keyboardType: KeyboardType = this.keyboardType,
        imeAction: ImeAction = this.imeAction,
        platformImeOptions: PlatformImeOptions? = this.platformImeOptions,
        @Suppress("AutoBoxing") showKeyboardOnFocus: Boolean? = null,
        hintLocales: LocaleList? = null,

Sources: [live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-202-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt)

## androidx.compose.foundation.text KeyboardOptions.kt source (lines 237–271)

    ): KeyboardOptions {
        return KeyboardOptions(
            capitalization = capitalization,
            autoCorrectEnabled = autoCorrectEnabled,
            keyboardType = keyboardType,
            imeAction = imeAction,
            platformImeOptions = platformImeOptions,
            showKeyboardOnFocus = showKeyboardOnFocus,
            hintLocales = hintLocales,
        )
    }

    @Deprecated(
        "Please use the copy function that takes an autoCorrectEnabled parameter.",
        level = DeprecationLevel.HIDDEN,
        replaceWith =
            ReplaceWith(
                "copy(" +
                    "capitalization = capitalization, " +
                    "autoCorrectEnabled = autoCorrect, " +
                    "keyboardType = keyboardType, " +
                    "imeAction = imeAction," +
                    "platformImeOptions = platformImeOptions, " +
                    "showKeyboardOnFocus = showKeyboardOnFocus ?: true," +
                    "hintLocales = hintLocales" +
                    ")"
            ),
    )
    public fun copy(
        capitalization: KeyboardCapitalization = this.capitalization,
        autoCorrect: Boolean = this.autoCorrectOrDefault,
        keyboardType: KeyboardType = this.keyboardType,
        imeAction: ImeAction = this.imeAction,
        platformImeOptions: PlatformImeOptions? = this.platformImeOptions,
        @Suppress("AutoBoxing") showKeyboardOnFocus: Boolean? = this.showKeyboardOnFocusOrDefault,

Sources: [live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-237-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt)

## androidx.compose.foundation.text KeyboardOptions.kt source (lines 272–306)

        hintLocales: LocaleList? = this.hintLocales,
    ): KeyboardOptions {
        return KeyboardOptions(
            capitalization = capitalization,
            autoCorrectEnabled = autoCorrect,
            keyboardType = keyboardType,
            imeAction = imeAction,
            platformImeOptions = platformImeOptions,
            showKeyboardOnFocus = showKeyboardOnFocus,
            hintLocales = hintLocales,
        )
    }

    @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
    public fun copy(
        capitalization: KeyboardCapitalization = this.capitalization,
        autoCorrect: Boolean = this.autoCorrectOrDefault,
        keyboardType: KeyboardType = this.keyboardType,
        imeAction: ImeAction = this.imeAction,
        platformImeOptions: PlatformImeOptions? = this.platformImeOptions,
    ): KeyboardOptions {
        return KeyboardOptions(
            capitalization = capitalization,
            autoCorrectEnabled = autoCorrect,
            keyboardType = keyboardType,
            imeAction = imeAction,
            platformImeOptions = platformImeOptions,
            showKeyboardOnFocus = this.showKeyboardOnFocus,
            hintLocales = this.hintLocales,
            // New properties must be added here even though this is deprecated. The deprecated copy
            // constructors should still work on instances created with newer library versions.
        )
    }

    @Deprecated(

Sources: [live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-272-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt)

## androidx.compose.foundation.text KeyboardOptions.kt source (lines 307–341)

        "Please use the new copy function that takes optional platformImeOptions parameter.",
        level = DeprecationLevel.HIDDEN,
    )
    public fun copy(
        capitalization: KeyboardCapitalization = this.capitalization,
        autoCorrect: Boolean = this.autoCorrectOrDefault,
        keyboardType: KeyboardType = this.keyboardType,
        imeAction: ImeAction = this.imeAction,
    ): KeyboardOptions {
        return KeyboardOptions(
            capitalization = capitalization,
            autoCorrectEnabled = autoCorrect,
            keyboardType = keyboardType,
            imeAction = imeAction,
            platformImeOptions = this.platformImeOptions,
            showKeyboardOnFocus = this.showKeyboardOnFocus,
            hintLocales = this.hintLocales,
            // New properties must be added here even though this is deprecated. The deprecated copy
            // constructors should still work on instances created with newer library versions.
        )
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is KeyboardOptions) return false

        if (capitalization != other.capitalization) return false
        if (autoCorrectEnabled != other.autoCorrectEnabled) return false
        if (keyboardType != other.keyboardType) return false
        if (imeAction != other.imeAction) return false
        if (platformImeOptions != other.platformImeOptions) return false
        if (showKeyboardOnFocus != other.showKeyboardOnFocus) return false
        if (hintLocales != other.hintLocales) return false

        return true

Sources: [live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-307-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt)

## androidx.compose.foundation.text KeyboardOptions.kt source (lines 342–376)

    }

    override fun hashCode(): Int {
        var result = capitalization.hashCode()
        result = 31 * result + autoCorrectEnabled.hashCode()
        result = 31 * result + keyboardType.hashCode()
        result = 31 * result + imeAction.hashCode()
        result = 31 * result + platformImeOptions.hashCode()
        result = 31 * result + showKeyboardOnFocus.hashCode()
        result = 31 * result + hintLocales.hashCode()
        return result
    }

    override fun toString(): String {
        return "KeyboardOptions(" +
            "capitalization=$capitalization, " +
            "autoCorrectEnabled=$autoCorrectEnabled, " +
            "keyboardType=$keyboardType, " +
            "imeAction=$imeAction, " +
            "platformImeOptions=$platformImeOptions" +
            "showKeyboardOnFocus=$showKeyboardOnFocus, " +
            "hintLocales=$hintLocales" +
            ")"
    }

    /**
     * Returns a new [KeyboardOptions] that is a combination of this options and a given [other]
     * options.
     *
     * [other]s null or `Unspecified` properties are replaced with the non-null properties of this
     * object.
     *
     * If the either this or [other] is null, returns the non-null one.
     */
    // TODO(b/331222000) Rename to be more clear about precedence.

Sources: [live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-342-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt)

## androidx.compose.foundation.text KeyboardOptions.kt source (lines 36–61)

 *
 * @sample androidx.compose.foundation.samples.RegistrationFormSample
 * @sample androidx.compose.foundation.samples.CheckoutRegisterFormSample
 * @sample androidx.compose.foundation.samples.DateTimeSchedulerFormSample
 * @sample androidx.compose.foundation.samples.SpecialtyInputsFormSample
 * @sample androidx.compose.foundation.samples.PinCodeEntryRowSample
 * @sample androidx.compose.foundation.samples.DecimalInputSample
 * @sample androidx.compose.foundation.samples.ItemCountSettingsSample
 * @param capitalization informs the keyboard whether to automatically capitalize characters, words,
 *   or sentences. Only applicable to text-based [KeyboardType]s such as [KeyboardType.Text],
 *   [KeyboardType.Ascii], or [KeyboardType.PostalAddress]. It is ignored by soft keyboards when
 *   paired with numeric layouts (like [KeyboardType.Number] or [KeyboardType.Decimal]).
 * @param autoCorrectEnabled informs the keyboard whether to enable auto-correct suggestions. Only
 *   applicable to text-based [KeyboardType]s such as [KeyboardType.Text], [KeyboardType.Email], or
 *   [KeyboardType.Uri]. Keyboards ignore this value for numeric keypads. A null value (the default
 *   parameter value) expresses that soft keyboard default configurations should apply.
 * @param keyboardType keyboard keypad layout to be displayed in the focused text field. Honored by
 *   keyboards to display tailored key selections (e.g., phone dialer characters for
 *   [KeyboardType.Phone], decimal separator buttons for [KeyboardType.Decimal], or masked numeric
 *   pads for [KeyboardType.NumberPassword]).
 * @param imeAction action button displayed on the soft keyboard (e.g., search, send, next, done,
 *   etc.). This action is honored by the software keyboard and may display custom icons (like a
 *   magnifying glass for [ImeAction.Search]). When the text field allows multi-line inputs, the
 *   keyboard typically displays a return key instead of the action icon requested here.
 * @param platformImeOptions platform-specific IME options (like private IME commands).
 * @param showKeyboardOnFocus when true, the soft keyboard shows immediately on text field focus

Sources: [live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt)

## androidx.compose.foundation.text KeyboardOptions.kt source (lines 377–411)

    public fun merge(other: KeyboardOptions?): KeyboardOptions =
        other?.fillUnspecifiedValuesWith(this) ?: this

    /**
     * Returns a new [KeyboardOptions] that is a combination of this options and a given [other]
     * options.
     *
     * This object's null or `Unspecified` properties are replaced with the non-null properties of
     * [other]. This differs from the behavior of [copy], which always takes the passed value over
     * the current one, even if an unspecified value is passed.
     *
     * If the either this or [other] is null, returns the non-null one.
     */
    @Stable
    internal fun fillUnspecifiedValuesWith(other: KeyboardOptions?): KeyboardOptions {
        // Don't allocate unless necessary.
        if (other == null || other.isCompletelyUnspecified || other == this) return this
        if (this.isCompletelyUnspecified) return other

        return KeyboardOptions(
            capitalization =
                this.capitalization.takeUnless { it == KeyboardCapitalization.Unspecified }
                    ?: other.capitalization,
            autoCorrectEnabled = this.autoCorrectEnabled ?: other.autoCorrectEnabled,
            keyboardType =
                this.keyboardType.takeUnless { it == KeyboardType.Unspecified }
                    ?: other.keyboardType,
            imeAction =
                this.imeAction.takeUnless { it == ImeAction.Unspecified } ?: other.imeAction,
            platformImeOptions = this.platformImeOptions ?: other.platformImeOptions,
            showKeyboardOnFocus = this.showKeyboardOnFocus ?: other.showKeyboardOnFocus,
            hintLocales = this.hintLocales ?: other.hintLocales,
        )
    }
}

Sources: [live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-377-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt)

## androidx.compose.foundation.text KeyboardOptions.kt source (lines 62–96)

 *   gain. When false, the soft keyboard is hidden until the user taps the text field. A null value
 *   (the default parameter value) enables showing the keyboard automatically on focus gain. Note:
 *   This option is only supported by TextFieldState-based TextFields (like BasicTextField) and is
 *   ignored by legacy TextFields.
 * @param hintLocales list of languages for IMEs. Provides a localized hint to help multilingual
 *   keyboards automatically shift their keyboard language based on the active field's context.
 */
@Immutable
public class KeyboardOptions(
    public val capitalization: KeyboardCapitalization = KeyboardCapitalization.Unspecified,
    @Suppress("AutoBoxing")
    @get:Suppress("AutoBoxing")
    public val autoCorrectEnabled: Boolean? = null,
    public val keyboardType: KeyboardType = KeyboardType.Unspecified,
    public val imeAction: ImeAction = ImeAction.Unspecified,
    public val platformImeOptions: PlatformImeOptions? = null,
    @Suppress("AutoBoxing")
    @get:Suppress("AutoBoxing")
    public val showKeyboardOnFocus: Boolean? = null,
    @get:Suppress("NullableCollection") public val hintLocales: LocaleList? = null,
) {

    public companion object {
        /** Provides default [KeyboardOptions]. See parameter descriptions for default values. */
        @Stable public val Default: KeyboardOptions = KeyboardOptions()

        /** Default [KeyboardOptions] for [BasicSecureTextField]. */
        @Stable
        internal val SecureTextField =
            KeyboardOptions(autoCorrectEnabled = false, keyboardType = KeyboardType.Password)
    }

    @Deprecated(
        "Please use the new constructor that takes optional autoCorrectEnabled parameter.",
        level = DeprecationLevel.WARNING,

Sources: [live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-62-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt)

## androidx.compose.foundation.text KeyboardOptions.kt source (lines 97–131)

        replaceWith =
            ReplaceWith(
                "KeyboardOptions(" +
                    "capitalization = capitalization, " +
                    "autoCorrectEnabled = autoCorrect, " +
                    "keyboardType = keyboardType, " +
                    "imeAction = imeAction," +
                    "platformImeOptions = platformImeOptions, " +
                    "showKeyboardOnFocus = showKeyboardOnFocus," +
                    "hintLocales = hintLocales" +
                    ")"
            ),
    )
    public constructor(
        capitalization: KeyboardCapitalization = KeyboardCapitalization.Unspecified,
        autoCorrect: Boolean,
        keyboardType: KeyboardType = KeyboardType.Unspecified,
        imeAction: ImeAction = ImeAction.Unspecified,
        platformImeOptions: PlatformImeOptions? = null,
        @Suppress("AutoBoxing") showKeyboardOnFocus: Boolean? = null,
        @Suppress("NullableCollection") hintLocales: LocaleList? = null,
    ) : this(
        capitalization = capitalization,
        autoCorrectEnabled = autoCorrect,
        keyboardType = keyboardType,
        imeAction = imeAction,
        platformImeOptions = platformImeOptions,
        showKeyboardOnFocus = showKeyboardOnFocus,
        hintLocales = hintLocales,
    )

    @Deprecated(
        "Please use the new constructor that takes optional platformImeOptions parameter.",
        level = DeprecationLevel.HIDDEN,
    )

Sources: [live-androidx-foundation-foundation-foundation-text-keyboardoptions-lines-97-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/KeyboardOptions.kt)
