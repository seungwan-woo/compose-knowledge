---
type: reference
title: androidx.compose.ui ComposedModifier.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-composedmodifier-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    startLine: 1
    endLine: 35
    sha256: 4c65bdf376ccbd9687dbdfedfd7be4b68637194716ba6156fb57e0798b3b089c
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

      package androidx.compose.ui

      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.Composer
      import androidx.compose.runtime.CompositionLocalMap
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.requireLayoutNode
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.platform.InspectorValueInfo
      import androidx.compose.ui.platform.NoInspectorInfo
      import kotlin.jvm.JvmName

      /**
       * Declare a just-in-time composition of a [Modifier] that will be composed for each element it
       * modifies. [composed] may be used to implement **stateful modifiers** that have instance-specific
       * state for each modified element, allowing the same [Modifier] instance to be safely reused for
       * multiple elements while maintaining element-specific state.
       *
  - id: live-androidx-ui-ui-ui-composedmodifier-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    startLine: 106
    endLine: 140
    sha256: 2ed926897d49a44587f79b5906d8c3a64aed8053e95200a4e30d41a861be6dff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          key2: Any?,
          inspectorInfo: InspectorInfo.() -> Unit = NoInspectorInfo,
          factory: @Composable Modifier.() -> Modifier,
      ): Modifier =
          this.then(KeyedComposedModifier2(fullyQualifiedName, key1, key2, inspectorInfo, factory))

      /**
       * Declare a just-in-time composition of a [Modifier] that will be composed for each element it
       * modifies. [composed] may be used to implement **stateful modifiers** that have instance-specific
       * state for each modified element, allowing the same [Modifier] instance to be safely reused for
       * multiple elements while maintaining element-specific state.
       *
       * When keys are provided, [composed] produces a [Modifier] that will compare [equals] to another
       * modifier constructed with the same keys in order to take advantage of caching and skipping
       * optimizations. [fullyQualifiedName] should be the fully-qualified `import` name for your modifier
       * factory function, e.g. `com.example.myapp.ui.fancyPadding`.
       *
       * If [inspectorInfo] is specified this modifier will be visible to tools during development.
       * Specify the name and arguments of the original modifier.
       *
       * Example usage:
       *
       * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierSample
       * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierWithArgumentsSample
       *
       * [materialize] must be called to create instance-specific modifiers if you are directly applying a
       * [Modifier] to an element tree node.
       */
      public fun Modifier.composed(
          fullyQualifiedName: String,
          key1: Any?,
          key2: Any?,
          key3: Any?,
          inspectorInfo: InspectorInfo.() -> Unit = NoInspectorInfo,
          factory: @Composable Modifier.() -> Modifier,
  - id: live-androidx-ui-ui-ui-composedmodifier-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    startLine: 141
    endLine: 175
    sha256: c6280e2fd2e81e9b2ba0fd0931455a7005696e7723536a0e6ce915dc1143ad76
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ): Modifier =
          this.then(KeyedComposedModifier3(fullyQualifiedName, key1, key2, key3, inspectorInfo, factory))

      /**
       * Declare a just-in-time composition of a [Modifier] that will be composed for each element it
       * modifies. [composed] may be used to implement **stateful modifiers** that have instance-specific
       * state for each modified element, allowing the same [Modifier] instance to be safely reused for
       * multiple elements while maintaining element-specific state.
       *
       * When keys are provided, [composed] produces a [Modifier] that will compare [equals] to another
       * modifier constructed with the same keys in order to take advantage of caching and skipping
       * optimizations. [fullyQualifiedName] should be the fully-qualified `import` name for your modifier
       * factory function, e.g. `com.example.myapp.ui.fancyPadding`.
       *
       * If [inspectorInfo] is specified this modifier will be visible to tools during development.
       * Specify the name and arguments of the original modifier.
       *
       * Example usage:
       *
       * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierSample
       * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierWithArgumentsSample
       *
       * [materialize] must be called to create instance-specific modifiers if you are directly applying a
       * [Modifier] to an element tree node.
       */
      public fun Modifier.composed(
          fullyQualifiedName: String,
          vararg keys: Any?,
          inspectorInfo: InspectorInfo.() -> Unit = NoInspectorInfo,
          factory: @Composable Modifier.() -> Modifier,
      ): Modifier = this.then(KeyedComposedModifierN(fullyQualifiedName, keys, inspectorInfo, factory))

      private open class ComposedModifier(
          inspectorInfo: InspectorInfo.() -> Unit,
          val factory: @Composable Modifier.() -> Modifier,
  - id: live-androidx-ui-ui-ui-composedmodifier-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    startLine: 176
    endLine: 210
    sha256: b0feab825a2afe516ae331ad20a5b1e52398243a990722654df553068b15588e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ) : Modifier.Element, InspectorValueInfo(inspectorInfo)

      @Stable
      private class KeyedComposedModifier1(
          val fqName: String,
          val key1: Any?,
          inspectorInfo: InspectorInfo.() -> Unit,
          factory: @Composable Modifier.() -> Modifier,
      ) : ComposedModifier(inspectorInfo, factory) {
          override fun equals(other: Any?) =
              other is KeyedComposedModifier1 && fqName == other.fqName && key1 == other.key1

          override fun hashCode(): Int = 31 * fqName.hashCode() + key1.hashCode()
      }

      @Stable
      private class KeyedComposedModifier2(
          val fqName: String,
          val key1: Any?,
          val key2: Any?,
          inspectorInfo: InspectorInfo.() -> Unit,
          factory: @Composable Modifier.() -> Modifier,
      ) : ComposedModifier(inspectorInfo, factory) {
          override fun equals(other: Any?) =
              other is KeyedComposedModifier2 &&
                  fqName == other.fqName &&
                  key1 == other.key1 &&
                  key2 == other.key2

          override fun hashCode(): Int {
              var result = fqName.hashCode()
              result = 31 * result + key1.hashCode()
              result = 31 * result + key2.hashCode()
              return result
          }
  - id: live-androidx-ui-ui-ui-composedmodifier-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    startLine: 211
    endLine: 245
    sha256: a96eee66805707dcafd98d7153c25e09c107c788142dc478dff8c5d59830bb43
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      @Stable
      private class KeyedComposedModifier3(
          val fqName: String,
          val key1: Any?,
          val key2: Any?,
          val key3: Any?,
          inspectorInfo: InspectorInfo.() -> Unit,
          factory: @Composable Modifier.() -> Modifier,
      ) : ComposedModifier(inspectorInfo, factory) {
          override fun equals(other: Any?) =
              other is KeyedComposedModifier3 &&
                  fqName == other.fqName &&
                  key1 == other.key1 &&
                  key2 == other.key2 &&
                  key3 == other.key3

          override fun hashCode(): Int {
              var result = fqName.hashCode()
              result = 31 * result + key1.hashCode()
              result = 31 * result + key2.hashCode()
              result = 31 * result + key3.hashCode()
              return result
          }
      }

      @Stable
      private class KeyedComposedModifierN(
          val fqName: String,
          val keys: Array<out Any?>,
          inspectorInfo: InspectorInfo.() -> Unit,
          factory: @Composable Modifier.() -> Modifier,
      ) : ComposedModifier(inspectorInfo, factory) {
          override fun equals(other: Any?) =
  - id: live-androidx-ui-ui-ui-composedmodifier-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    startLine: 246
    endLine: 280
    sha256: 0f6c4e83c7fb9a63503ad3ce19a7f62d7107e7e7f4d8b731b9324d5d1641e1ca
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              other is KeyedComposedModifierN && fqName == other.fqName && keys.contentEquals(other.keys)

          override fun hashCode() = 31 * fqName.hashCode() + keys.contentHashCode()
      }

      /**
       * Materialize any instance-specific [composed modifiers][composed] for applying to a raw tree node.
       * Call right before setting the returned modifier on an emitted node. You almost certainly do not
       * need to call this function directly.
       */
      @Suppress("ModifierFactoryExtensionFunction")
      // "materialize" JVM name is taken below to solve a backwards-incompatibility
      @JvmName("materializeModifier")
      public fun Composer.materialize(modifier: Modifier): Modifier {
          // A group is required here so the number of slot added to the caller's group
          // is unconditionally the same (in this case, none) as is now required by the runtime.
          startReplaceGroup(0x1a365f2c) // Random number for fake group key. Chosen by fair die roll.
          val result = materializeImpl(modifier)
          endReplaceGroup()
          return result
      }

      @Suppress("ModifierFactoryExtensionFunction")
      private fun Composer.materializeImpl(modifier: Modifier): Modifier {
          if (modifier.all { it !is ComposedModifier }) {
              return modifier
          }

          // This is a fake composable function that invokes the compose runtime directly so that it
          // can call the element factory functions from the non-@Composable lambda of Modifier.foldIn.
          // It would be more efficient to redefine the Modifier type hierarchy such that the fold
          // operations could be inlined or otherwise made cheaper, which could make this unnecessary.

          // Random number for fake group key. Chosen by fair die roll.
          startReplaceableGroup(0x48ae8da7)
  - id: live-androidx-ui-ui-ui-composedmodifier-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    startLine: 281
    endLine: 315
    sha256: 36f506e296e781b3213b16a985739cdc354d4a40ab34a657d96b297be2f81fe6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          val result =
              modifier.foldIn<Modifier>(Modifier) { acc, element ->
                  acc.then(
                      if (element is ComposedModifier) {
                          @Suppress("UNCHECKED_CAST")
                          val factory = element.factory as Modifier.(Composer, Int) -> Modifier
                          val composedMod = factory(Modifier, this, 0)
                          materializeImpl(composedMod)
                      } else {
                          element
                      }
                  )
              }

          endReplaceableGroup()
          return result
      }

      /**
       * This class is only used for backwards compatibility purposes to inject the CompositionLocalMap
       * into LayoutNodes that were created by inlined code of older versions of the Layout composable.
       * More details can be found at https://issuetracker.google.com/275067189
       */
      internal class CompositionLocalMapInjectionNode(map: CompositionLocalMap) : Modifier.Node() {
          var map: CompositionLocalMap = map
              set(value) {
                  field = value
                  requireLayoutNode().compositionLocalMap = value
              }

          override fun onAttach() {
              requireLayoutNode().compositionLocalMap = map
          }
      }
  - id: live-androidx-ui-ui-ui-composedmodifier-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    startLine: 316
    endLine: 350
    sha256: f129299306780c47d041164c09e7c672230614693aed57a5ed6b4bc90db853ff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * This class is only used for backwards compatibility purposes to inject the CompositionLocalMap
       * into LayoutNodes that were created by inlined code of older versions of the Layout composable.
       * More details can be found at https://issuetracker.google.com/275067189
       */
      internal class CompositionLocalMapInjectionElement(val map: CompositionLocalMap) :
          ModifierNodeElement<CompositionLocalMapInjectionNode>() {
          override fun create() = CompositionLocalMapInjectionNode(map)

          override fun update(node: CompositionLocalMapInjectionNode) {
              node.map = map
          }

          override fun hashCode(): Int = map.hashCode()

          override fun equals(other: Any?): Boolean {
              return other is CompositionLocalMapInjectionElement && other.map == map
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "<Injected CompositionLocalMap>"
          }
      }

      /**
       * This function exists solely for solving a backwards-incompatibility with older compilations that
       * used an older version of the `Layout` composable. New code paths should not call this. More
       * details can be found at https://issuetracker.google.com/275067189
       */
      @Suppress("ModifierFactoryExtensionFunction")
      @JvmName("materialize")
      @Deprecated(
          "Kept for backwards compatibility only. If you are recompiling, use materialize.",
          ReplaceWith("materialize"),
  - id: live-androidx-ui-ui-ui-composedmodifier-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    startLine: 351
    endLine: 364
    sha256: 5e383d927236eeef5b99b67300d0c1cb99cf725026184c3b585d935adff72964
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          DeprecationLevel.HIDDEN,
      )
      public fun Composer.materializeWithCompositionLocalInjection(modifier: Modifier): Modifier =
          materializeWithCompositionLocalInjectionInternal(modifier)

      // This method is here to be called from tests since the deprecated hidden API cannot be.
      @Suppress("ModifierFactoryExtensionFunction")
      internal fun Composer.materializeWithCompositionLocalInjectionInternal(
          modifier: Modifier
      ): Modifier {
          return if (modifier === Modifier) modifier
          else materialize(CompositionLocalMapInjectionElement(currentCompositionLocalMap).then(modifier))
      }
  - id: live-androidx-ui-ui-ui-composedmodifier-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    startLine: 36
    endLine: 70
    sha256: 150eea1a727af1f5b7f5072cd2239c0845fb3a87ddcc75612ef6b9b799870aa2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * If [inspectorInfo] is specified this modifier will be visible to tools during development.
       * Specify the name and arguments of the original modifier.
       *
       * Example usage:
       *
       * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierSample
       * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierWithArgumentsSample
       *
       * [materialize] must be called to create instance-specific modifiers if you are directly applying a
       * [Modifier] to an element tree node.
       */
      public fun Modifier.composed(
          inspectorInfo: InspectorInfo.() -> Unit = NoInspectorInfo,
          factory: @Composable Modifier.() -> Modifier,
      ): Modifier = this.then(ComposedModifier(inspectorInfo, factory))

      /**
       * Declare a just-in-time composition of a [Modifier] that will be composed for each element it
       * modifies. [composed] may be used to implement **stateful modifiers** that have instance-specific
       * state for each modified element, allowing the same [Modifier] instance to be safely reused for
       * multiple elements while maintaining element-specific state.
       *
       * When keys are provided, [composed] produces a [Modifier] that will compare [equals] to another
       * modifier constructed with the same keys in order to take advantage of caching and skipping
       * optimizations. [fullyQualifiedName] should be the fully-qualified `import` name for your modifier
       * factory function, e.g. `com.example.myapp.ui.fancyPadding`.
       *
       * If [inspectorInfo] is specified this modifier will be visible to tools during development.
       * Specify the name and arguments of the original modifier.
       *
       * Example usage:
       *
       * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierSample
       * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierWithArgumentsSample
       *
  - id: live-androidx-ui-ui-ui-composedmodifier-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt
    startLine: 71
    endLine: 105
    sha256: 71dcff052e3c06e43526ef37b4a4c704ef6ab979d0fce956dae35538418377e3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [materialize] must be called to create instance-specific modifiers if you are directly applying a
       * [Modifier] to an element tree node.
       */
      public fun Modifier.composed(
          fullyQualifiedName: String,
          key1: Any?,
          inspectorInfo: InspectorInfo.() -> Unit = NoInspectorInfo,
          factory: @Composable Modifier.() -> Modifier,
      ): Modifier = this.then(KeyedComposedModifier1(fullyQualifiedName, key1, inspectorInfo, factory))

      /**
       * Declare a just-in-time composition of a [Modifier] that will be composed for each element it
       * modifies. [composed] may be used to implement **stateful modifiers** that have instance-specific
       * state for each modified element, allowing the same [Modifier] instance to be safely reused for
       * multiple elements while maintaining element-specific state.
       *
       * When keys are provided, [composed] produces a [Modifier] that will compare [equals] to another
       * modifier constructed with the same keys in order to take advantage of caching and skipping
       * optimizations. [fullyQualifiedName] should be the fully-qualified `import` name for your modifier
       * factory function, e.g. `com.example.myapp.ui.fancyPadding`.
       *
       * If [inspectorInfo] is specified this modifier will be visible to tools during development.
       * Specify the name and arguments of the original modifier.
       *
       * Example usage:
       *
       * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierSample
       * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierWithArgumentsSample
       *
       * [materialize] must be called to create instance-specific modifiers if you are directly applying a
       * [Modifier] to an element tree node.
       */
      public fun Modifier.composed(
          fullyQualifiedName: String,
          key1: Any?,
compose:
  id: live-androidx-ui-ui-ui-composedmodifier
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui
  sections:
    - id: live-androidx-ui-ui-ui-composedmodifier-lines-1
      title: androidx.compose.ui ComposedModifier.kt source (lines 1–35)
      aliases:
        - androidx.compose.ui.composed
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-composedmodifier-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-composedmodifier-lines-106
      title: androidx.compose.ui ComposedModifier.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.composed
        - androidx.compose.ui.materialize
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-composedmodifier-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-composedmodifier-lines-141
      title: androidx.compose.ui ComposedModifier.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.composed
        - androidx.compose.ui.materialize
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-composedmodifier-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-composedmodifier-lines-176
      title: androidx.compose.ui ComposedModifier.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-composedmodifier-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-composedmodifier-lines-211
      title: androidx.compose.ui ComposedModifier.kt source (lines 211–245)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-composedmodifier-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-composedmodifier-lines-246
      title: androidx.compose.ui ComposedModifier.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.composed
        - androidx.compose.ui.materialize
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-composedmodifier-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-composedmodifier-lines-281
      title: androidx.compose.ui ComposedModifier.kt source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-composedmodifier-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-composedmodifier-lines-316
      title: androidx.compose.ui ComposedModifier.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.materialize
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-composedmodifier-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-composedmodifier-lines-351
      title: androidx.compose.ui ComposedModifier.kt source (lines 351–364)
      aliases:
        - androidx.compose.ui.materialize
        - androidx.compose.ui.materializeWithCompositionLocalInjection
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-composedmodifier-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-composedmodifier-lines-36
      title: androidx.compose.ui ComposedModifier.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.composed
        - androidx.compose.ui.materialize
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-composedmodifier-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-composedmodifier-lines-71
      title: androidx.compose.ui ComposedModifier.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.composed
        - androidx.compose.ui.materialize
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-composedmodifier-lines-71-source
      relatedIds: []
---

# androidx.compose.ui ComposedModifier.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt

## androidx.compose.ui ComposedModifier.kt source (lines 1–35)

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

package androidx.compose.ui

import androidx.compose.runtime.Composable
import androidx.compose.runtime.Composer
import androidx.compose.runtime.CompositionLocalMap
import androidx.compose.runtime.Stable
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.requireLayoutNode
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.platform.InspectorValueInfo
import androidx.compose.ui.platform.NoInspectorInfo
import kotlin.jvm.JvmName

/**
 * Declare a just-in-time composition of a [Modifier] that will be composed for each element it
 * modifies. [composed] may be used to implement **stateful modifiers** that have instance-specific
 * state for each modified element, allowing the same [Modifier] instance to be safely reused for
 * multiple elements while maintaining element-specific state.
 *

Sources: [live-androidx-ui-ui-ui-composedmodifier-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt)

## androidx.compose.ui ComposedModifier.kt source (lines 106–140)

    key2: Any?,
    inspectorInfo: InspectorInfo.() -> Unit = NoInspectorInfo,
    factory: @Composable Modifier.() -> Modifier,
): Modifier =
    this.then(KeyedComposedModifier2(fullyQualifiedName, key1, key2, inspectorInfo, factory))

/**
 * Declare a just-in-time composition of a [Modifier] that will be composed for each element it
 * modifies. [composed] may be used to implement **stateful modifiers** that have instance-specific
 * state for each modified element, allowing the same [Modifier] instance to be safely reused for
 * multiple elements while maintaining element-specific state.
 *
 * When keys are provided, [composed] produces a [Modifier] that will compare [equals] to another
 * modifier constructed with the same keys in order to take advantage of caching and skipping
 * optimizations. [fullyQualifiedName] should be the fully-qualified `import` name for your modifier
 * factory function, e.g. `com.example.myapp.ui.fancyPadding`.
 *
 * If [inspectorInfo] is specified this modifier will be visible to tools during development.
 * Specify the name and arguments of the original modifier.
 *
 * Example usage:
 *
 * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierSample
 * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierWithArgumentsSample
 *
 * [materialize] must be called to create instance-specific modifiers if you are directly applying a
 * [Modifier] to an element tree node.
 */
public fun Modifier.composed(
    fullyQualifiedName: String,
    key1: Any?,
    key2: Any?,
    key3: Any?,
    inspectorInfo: InspectorInfo.() -> Unit = NoInspectorInfo,
    factory: @Composable Modifier.() -> Modifier,

Sources: [live-androidx-ui-ui-ui-composedmodifier-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt)

## androidx.compose.ui ComposedModifier.kt source (lines 141–175)

): Modifier =
    this.then(KeyedComposedModifier3(fullyQualifiedName, key1, key2, key3, inspectorInfo, factory))

/**
 * Declare a just-in-time composition of a [Modifier] that will be composed for each element it
 * modifies. [composed] may be used to implement **stateful modifiers** that have instance-specific
 * state for each modified element, allowing the same [Modifier] instance to be safely reused for
 * multiple elements while maintaining element-specific state.
 *
 * When keys are provided, [composed] produces a [Modifier] that will compare [equals] to another
 * modifier constructed with the same keys in order to take advantage of caching and skipping
 * optimizations. [fullyQualifiedName] should be the fully-qualified `import` name for your modifier
 * factory function, e.g. `com.example.myapp.ui.fancyPadding`.
 *
 * If [inspectorInfo] is specified this modifier will be visible to tools during development.
 * Specify the name and arguments of the original modifier.
 *
 * Example usage:
 *
 * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierSample
 * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierWithArgumentsSample
 *
 * [materialize] must be called to create instance-specific modifiers if you are directly applying a
 * [Modifier] to an element tree node.
 */
public fun Modifier.composed(
    fullyQualifiedName: String,
    vararg keys: Any?,
    inspectorInfo: InspectorInfo.() -> Unit = NoInspectorInfo,
    factory: @Composable Modifier.() -> Modifier,
): Modifier = this.then(KeyedComposedModifierN(fullyQualifiedName, keys, inspectorInfo, factory))

private open class ComposedModifier(
    inspectorInfo: InspectorInfo.() -> Unit,
    val factory: @Composable Modifier.() -> Modifier,

Sources: [live-androidx-ui-ui-ui-composedmodifier-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt)

## androidx.compose.ui ComposedModifier.kt source (lines 176–210)

) : Modifier.Element, InspectorValueInfo(inspectorInfo)

@Stable
private class KeyedComposedModifier1(
    val fqName: String,
    val key1: Any?,
    inspectorInfo: InspectorInfo.() -> Unit,
    factory: @Composable Modifier.() -> Modifier,
) : ComposedModifier(inspectorInfo, factory) {
    override fun equals(other: Any?) =
        other is KeyedComposedModifier1 && fqName == other.fqName && key1 == other.key1

    override fun hashCode(): Int = 31 * fqName.hashCode() + key1.hashCode()
}

@Stable
private class KeyedComposedModifier2(
    val fqName: String,
    val key1: Any?,
    val key2: Any?,
    inspectorInfo: InspectorInfo.() -> Unit,
    factory: @Composable Modifier.() -> Modifier,
) : ComposedModifier(inspectorInfo, factory) {
    override fun equals(other: Any?) =
        other is KeyedComposedModifier2 &&
            fqName == other.fqName &&
            key1 == other.key1 &&
            key2 == other.key2

    override fun hashCode(): Int {
        var result = fqName.hashCode()
        result = 31 * result + key1.hashCode()
        result = 31 * result + key2.hashCode()
        return result
    }

Sources: [live-androidx-ui-ui-ui-composedmodifier-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt)

## androidx.compose.ui ComposedModifier.kt source (lines 211–245)

}

@Stable
private class KeyedComposedModifier3(
    val fqName: String,
    val key1: Any?,
    val key2: Any?,
    val key3: Any?,
    inspectorInfo: InspectorInfo.() -> Unit,
    factory: @Composable Modifier.() -> Modifier,
) : ComposedModifier(inspectorInfo, factory) {
    override fun equals(other: Any?) =
        other is KeyedComposedModifier3 &&
            fqName == other.fqName &&
            key1 == other.key1 &&
            key2 == other.key2 &&
            key3 == other.key3

    override fun hashCode(): Int {
        var result = fqName.hashCode()
        result = 31 * result + key1.hashCode()
        result = 31 * result + key2.hashCode()
        result = 31 * result + key3.hashCode()
        return result
    }
}

@Stable
private class KeyedComposedModifierN(
    val fqName: String,
    val keys: Array<out Any?>,
    inspectorInfo: InspectorInfo.() -> Unit,
    factory: @Composable Modifier.() -> Modifier,
) : ComposedModifier(inspectorInfo, factory) {
    override fun equals(other: Any?) =

Sources: [live-androidx-ui-ui-ui-composedmodifier-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt)

## androidx.compose.ui ComposedModifier.kt source (lines 246–280)

        other is KeyedComposedModifierN && fqName == other.fqName && keys.contentEquals(other.keys)

    override fun hashCode() = 31 * fqName.hashCode() + keys.contentHashCode()
}

/**
 * Materialize any instance-specific [composed modifiers][composed] for applying to a raw tree node.
 * Call right before setting the returned modifier on an emitted node. You almost certainly do not
 * need to call this function directly.
 */
@Suppress("ModifierFactoryExtensionFunction")
// "materialize" JVM name is taken below to solve a backwards-incompatibility
@JvmName("materializeModifier")
public fun Composer.materialize(modifier: Modifier): Modifier {
    // A group is required here so the number of slot added to the caller's group
    // is unconditionally the same (in this case, none) as is now required by the runtime.
    startReplaceGroup(0x1a365f2c) // Random number for fake group key. Chosen by fair die roll.
    val result = materializeImpl(modifier)
    endReplaceGroup()
    return result
}

@Suppress("ModifierFactoryExtensionFunction")
private fun Composer.materializeImpl(modifier: Modifier): Modifier {
    if (modifier.all { it !is ComposedModifier }) {
        return modifier
    }

    // This is a fake composable function that invokes the compose runtime directly so that it
    // can call the element factory functions from the non-@Composable lambda of Modifier.foldIn.
    // It would be more efficient to redefine the Modifier type hierarchy such that the fold
    // operations could be inlined or otherwise made cheaper, which could make this unnecessary.

    // Random number for fake group key. Chosen by fair die roll.
    startReplaceableGroup(0x48ae8da7)

Sources: [live-androidx-ui-ui-ui-composedmodifier-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt)

## androidx.compose.ui ComposedModifier.kt source (lines 281–315)


    val result =
        modifier.foldIn<Modifier>(Modifier) { acc, element ->
            acc.then(
                if (element is ComposedModifier) {
                    @Suppress("UNCHECKED_CAST")
                    val factory = element.factory as Modifier.(Composer, Int) -> Modifier
                    val composedMod = factory(Modifier, this, 0)
                    materializeImpl(composedMod)
                } else {
                    element
                }
            )
        }

    endReplaceableGroup()
    return result
}

/**
 * This class is only used for backwards compatibility purposes to inject the CompositionLocalMap
 * into LayoutNodes that were created by inlined code of older versions of the Layout composable.
 * More details can be found at https://issuetracker.google.com/275067189
 */
internal class CompositionLocalMapInjectionNode(map: CompositionLocalMap) : Modifier.Node() {
    var map: CompositionLocalMap = map
        set(value) {
            field = value
            requireLayoutNode().compositionLocalMap = value
        }

    override fun onAttach() {
        requireLayoutNode().compositionLocalMap = map
    }
}

Sources: [live-androidx-ui-ui-ui-composedmodifier-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt)

## androidx.compose.ui ComposedModifier.kt source (lines 316–350)


/**
 * This class is only used for backwards compatibility purposes to inject the CompositionLocalMap
 * into LayoutNodes that were created by inlined code of older versions of the Layout composable.
 * More details can be found at https://issuetracker.google.com/275067189
 */
internal class CompositionLocalMapInjectionElement(val map: CompositionLocalMap) :
    ModifierNodeElement<CompositionLocalMapInjectionNode>() {
    override fun create() = CompositionLocalMapInjectionNode(map)

    override fun update(node: CompositionLocalMapInjectionNode) {
        node.map = map
    }

    override fun hashCode(): Int = map.hashCode()

    override fun equals(other: Any?): Boolean {
        return other is CompositionLocalMapInjectionElement && other.map == map
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "<Injected CompositionLocalMap>"
    }
}

/**
 * This function exists solely for solving a backwards-incompatibility with older compilations that
 * used an older version of the `Layout` composable. New code paths should not call this. More
 * details can be found at https://issuetracker.google.com/275067189
 */
@Suppress("ModifierFactoryExtensionFunction")
@JvmName("materialize")
@Deprecated(
    "Kept for backwards compatibility only. If you are recompiling, use materialize.",
    ReplaceWith("materialize"),

Sources: [live-androidx-ui-ui-ui-composedmodifier-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt)

## androidx.compose.ui ComposedModifier.kt source (lines 351–364)

    DeprecationLevel.HIDDEN,
)
public fun Composer.materializeWithCompositionLocalInjection(modifier: Modifier): Modifier =
    materializeWithCompositionLocalInjectionInternal(modifier)

// This method is here to be called from tests since the deprecated hidden API cannot be.
@Suppress("ModifierFactoryExtensionFunction")
internal fun Composer.materializeWithCompositionLocalInjectionInternal(
    modifier: Modifier
): Modifier {
    return if (modifier === Modifier) modifier
    else materialize(CompositionLocalMapInjectionElement(currentCompositionLocalMap).then(modifier))
}


Sources: [live-androidx-ui-ui-ui-composedmodifier-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt)

## androidx.compose.ui ComposedModifier.kt source (lines 36–70)

 * If [inspectorInfo] is specified this modifier will be visible to tools during development.
 * Specify the name and arguments of the original modifier.
 *
 * Example usage:
 *
 * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierSample
 * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierWithArgumentsSample
 *
 * [materialize] must be called to create instance-specific modifiers if you are directly applying a
 * [Modifier] to an element tree node.
 */
public fun Modifier.composed(
    inspectorInfo: InspectorInfo.() -> Unit = NoInspectorInfo,
    factory: @Composable Modifier.() -> Modifier,
): Modifier = this.then(ComposedModifier(inspectorInfo, factory))

/**
 * Declare a just-in-time composition of a [Modifier] that will be composed for each element it
 * modifies. [composed] may be used to implement **stateful modifiers** that have instance-specific
 * state for each modified element, allowing the same [Modifier] instance to be safely reused for
 * multiple elements while maintaining element-specific state.
 *
 * When keys are provided, [composed] produces a [Modifier] that will compare [equals] to another
 * modifier constructed with the same keys in order to take advantage of caching and skipping
 * optimizations. [fullyQualifiedName] should be the fully-qualified `import` name for your modifier
 * factory function, e.g. `com.example.myapp.ui.fancyPadding`.
 *
 * If [inspectorInfo] is specified this modifier will be visible to tools during development.
 * Specify the name and arguments of the original modifier.
 *
 * Example usage:
 *
 * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierSample
 * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierWithArgumentsSample
 *

Sources: [live-androidx-ui-ui-ui-composedmodifier-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt)

## androidx.compose.ui ComposedModifier.kt source (lines 71–105)

 * [materialize] must be called to create instance-specific modifiers if you are directly applying a
 * [Modifier] to an element tree node.
 */
public fun Modifier.composed(
    fullyQualifiedName: String,
    key1: Any?,
    inspectorInfo: InspectorInfo.() -> Unit = NoInspectorInfo,
    factory: @Composable Modifier.() -> Modifier,
): Modifier = this.then(KeyedComposedModifier1(fullyQualifiedName, key1, inspectorInfo, factory))

/**
 * Declare a just-in-time composition of a [Modifier] that will be composed for each element it
 * modifies. [composed] may be used to implement **stateful modifiers** that have instance-specific
 * state for each modified element, allowing the same [Modifier] instance to be safely reused for
 * multiple elements while maintaining element-specific state.
 *
 * When keys are provided, [composed] produces a [Modifier] that will compare [equals] to another
 * modifier constructed with the same keys in order to take advantage of caching and skipping
 * optimizations. [fullyQualifiedName] should be the fully-qualified `import` name for your modifier
 * factory function, e.g. `com.example.myapp.ui.fancyPadding`.
 *
 * If [inspectorInfo] is specified this modifier will be visible to tools during development.
 * Specify the name and arguments of the original modifier.
 *
 * Example usage:
 *
 * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierSample
 * @sample androidx.compose.ui.samples.InspectorInfoInComposedModifierWithArgumentsSample
 *
 * [materialize] must be called to create instance-specific modifiers if you are directly applying a
 * [Modifier] to an element tree node.
 */
public fun Modifier.composed(
    fullyQualifiedName: String,
    key1: Any?,

Sources: [live-androidx-ui-ui-ui-composedmodifier-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/ComposedModifier.kt)
