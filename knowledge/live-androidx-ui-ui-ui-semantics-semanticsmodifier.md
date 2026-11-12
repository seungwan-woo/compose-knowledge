---
type: reference
title: androidx.compose.ui.semantics SemanticsModifier.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    startLine: 1
    endLine: 35
    sha256: 7ab19779865b4f67ff038a035b62cb15493305c90c1a3b3d9330c4585a6ad4d5
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

      package androidx.compose.ui.semantics

      import androidx.compose.ui.Modifier
      import androidx.compose.ui.internal.JvmDefaultWithCompatibility
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.SemanticsModifierNode
      import androidx.compose.ui.platform.AtomicInt
      import androidx.compose.ui.platform.InspectorInfo

      private var lastIdentifier = AtomicInt(0)

      internal fun generateSemanticsId() = lastIdentifier.addAndGet(1)

      /**
       * A [Modifier.Element] that adds semantics key/value for use in testing, accessibility, and similar
       * use cases.
       */
      @JvmDefaultWithCompatibility
      public interface SemanticsModifier : Modifier.Element {
  - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    startLine: 106
    endLine: 140
    sha256: d5b222289d613dfc72a200be6bab7ce7d54bec4317272e131e1aa9b3064fbee7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          mergeDescendants: Boolean = false,
          properties: (SemanticsPropertyReceiver.() -> Unit),
      ): Modifier =
          this then AppendedSemanticsElement(mergeDescendants = mergeDescendants, properties = properties)

      // Implement SemanticsModifier to allow tooling to inspect the semantics configuration
      internal class AppendedSemanticsElement(
          val mergeDescendants: Boolean,
          val properties: (SemanticsPropertyReceiver.() -> Unit),
      ) : ModifierNodeElement<CoreSemanticsModifierNode>(), SemanticsModifier {

          // This should only ever be called by layout inspector
          override val semanticsConfiguration: SemanticsConfiguration
              get() =
                  SemanticsConfiguration().apply {
                      isMergingSemanticsOfDescendants = mergeDescendants
                      properties()
                  }

          override fun create(): CoreSemanticsModifierNode {
              return CoreSemanticsModifierNode(
                  mergeDescendants = mergeDescendants,
                  isClearingSemantics = false,
                  properties = properties,
              )
          }

          override fun update(node: CoreSemanticsModifierNode) {
              node.mergeDescendants = mergeDescendants
              node.properties = properties
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "semantics"
              properties["mergeDescendants"] = mergeDescendants
  - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    startLine: 141
    endLine: 175
    sha256: f2f4c3eb7de825ae095c441ae37d477db4134ab796a9bca92bf7b0726063ece5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              addSemanticsPropertiesFrom(semanticsConfiguration)
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is AppendedSemanticsElement) return false

              if (mergeDescendants != other.mergeDescendants) return false
              if (properties !== other.properties) return false

              return true
          }

          override fun hashCode(): Int {
              var result = mergeDescendants.hashCode()
              result = 31 * result + properties.hashCode()
              return result
          }
      }

      /**
       * Clears the semantics of all the descendant nodes and sets new semantics.
       *
       * In the merged semantics tree, this clears the semantic information provided by the node's
       * descendants (but not those of the layout node itself, if any) and sets the provided semantics.
       * (In the unmerged tree, the semantics node is marked with
       * "[SemanticsConfiguration.isClearingSemantics]", but nothing is actually cleared.)
       *
       * Compose's default semantics provide baseline usability for screen-readers, but this can be used
       * to provide a more polished screen-reader experience: for example, clearing the semantics of a
       * group of tiny buttons, and setting equivalent actions on the card containing them.
       *
       * @param properties properties to add to the semantics. [SemanticsPropertyReceiver] will be
       *   provided in the scope to allow access for common properties and its values.
       *
  - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    startLine: 176
    endLine: 210
    sha256: 3540f4cb308a737956295e78c658e180b79512fb4b33e57898343d42541d7157
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   Note: The [properties] lambda should be used to set semantic properties or semantic actions.
       *   Don't call [SemanticsModifierNode.applySemantics] from within the [properties] block. It will
       *   result in an infinite loop.
       */
      public fun Modifier.clearAndSetSemantics(
          properties: (SemanticsPropertyReceiver.() -> Unit)
      ): Modifier = this then ClearAndSetSemanticsElement(properties)

      // Implement SemanticsModifier to allow tooling to inspect the semantics configuration
      internal class ClearAndSetSemanticsElement(val properties: SemanticsPropertyReceiver.() -> Unit) :
          ModifierNodeElement<CoreSemanticsModifierNode>(), SemanticsModifier {

          // This should only ever be called by layout inspector
          override val semanticsConfiguration: SemanticsConfiguration
              get() =
                  SemanticsConfiguration().apply {
                      isMergingSemanticsOfDescendants = false
                      isClearingSemantics = true
                      properties()
                  }

          override fun create(): CoreSemanticsModifierNode {
              return CoreSemanticsModifierNode(
                  mergeDescendants = false,
                  isClearingSemantics = true,
                  properties = properties,
              )
          }

          override fun update(node: CoreSemanticsModifierNode) {
              node.properties = properties
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "clearAndSetSemantics"
  - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    startLine: 211
    endLine: 235
    sha256: 30d4c1a327e407f367f092816cc90b85671dd5bc476f76cadcbe26d7b7564796
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              addSemanticsPropertiesFrom(semanticsConfiguration)
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is ClearAndSetSemanticsElement) return false

              if (properties !== other.properties) return false

              return true
          }

          override fun hashCode(): Int {
              return properties.hashCode()
          }
      }

      private fun InspectorInfo.addSemanticsPropertiesFrom(
          semanticsConfiguration: SemanticsConfiguration
      ) {
          properties["properties"] = semanticsConfiguration.associate { (key, value) ->
              key.name to value
          }
      }
  - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    startLine: 36
    endLine: 70
    sha256: 4450de3bada9513ac12c65556a346b48775151d2262e88a4941be0fb2e4384c8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @Deprecated(
              message =
                  "SemanticsModifier.id is now unused and has been set to a fixed value. " +
                      "Retrieve the id from LayoutInfo instead.",
              replaceWith = ReplaceWith(""),
          )
          public val id: Int
              get() = -1

          /**
           * The SemanticsConfiguration holds substantive data, especially a list of key/value pairs such
           * as (label -> "buttonName").
           */
          public val semanticsConfiguration: SemanticsConfiguration
      }

      internal class CoreSemanticsModifierNode(
          var mergeDescendants: Boolean,
          var isClearingSemantics: Boolean,
          var properties: SemanticsPropertyReceiver.() -> Unit,
      ) : Modifier.Node(), SemanticsModifierNode {
          override val shouldClearDescendantSemantics: Boolean
              get() = isClearingSemantics

          override val shouldMergeDescendantSemantics: Boolean
              get() = mergeDescendants

          override fun SemanticsPropertyReceiver.applySemantics() {
              properties()
          }
      }

      internal class EmptySemanticsModifier : Modifier.Node(), SemanticsModifierNode {
          override fun SemanticsPropertyReceiver.applySemantics() {}
      }
  - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt
    startLine: 71
    endLine: 105
    sha256: eaf99c870f7d3a247e45d548cfc3c7fa05d2488b6f1e062f4478a8ff6a470d54
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Add semantics key/value pairs to the layout node, for use in testing, accessibility, etc.
       *
       * The provided lambda receiver scope provides "key = value"-style setters for any
       * [SemanticsPropertyKey]. Additionally, chaining multiple semantics modifiers is also a supported
       * style.
       *
       * The resulting semantics produce two [SemanticsNode] trees:
       *
       * The "unmerged tree" rooted at [SemanticsOwner.unmergedRootSemanticsNode] has one [SemanticsNode]
       * per layout node which has any [SemanticsModifier] on it. This [SemanticsNode] contains all the
       * properties set in all the [SemanticsModifier]s on that node.
       *
       * The "merged tree" rooted at [SemanticsOwner.rootSemanticsNode] has equal-or-fewer nodes: it
       * simplifies the structure based on [mergeDescendants] and [clearAndSetSemantics]. For most
       * purposes (especially accessibility, or the testing of accessibility), the merged semantics tree
       * should be used.
       *
       * @param mergeDescendants Whether the semantic information provided by the owning component and its
       *   descendants should be treated as one logical entity. Most commonly set on
       *   screen-reader-focusable items such as buttons or form fields. In the merged semantics tree, all
       *   descendant nodes (except those themselves marked [mergeDescendants]) will disappear from the
       *   tree, and their properties will get merged into the parent's configuration (using a merging
       *   algorithm that varies based on the type of property -- for example, text properties will get
       *   concatenated, separated by commas). In the unmerged semantics tree, the node is simply marked
       *   with [SemanticsConfiguration.isMergingSemanticsOfDescendants].
       * @param properties properties to add to the semantics. [SemanticsPropertyReceiver] will be
       *   provided in the scope to allow access for common properties and its values.
       *
       *   Note: The [properties] block should be used to set semantic properties or semantic actions.
       *   Don't call [SemanticsModifierNode.applySemantics] from within the [properties] block. It will
       *   result in an infinite loop.
       */
      public fun Modifier.semantics(
compose:
  id: live-androidx-ui-ui-ui-semantics-semanticsmodifier
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.semantics
  sections:
    - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-1
      title: androidx.compose.ui.semantics SemanticsModifier.kt source (lines 1–35)
      aliases:
        - androidx.compose.ui.semantics.SemanticsModifier
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-106
      title: androidx.compose.ui.semantics SemanticsModifier.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.semantics.SemanticsModifier
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-141
      title: androidx.compose.ui.semantics SemanticsModifier.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.semantics.semantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-176
      title: androidx.compose.ui.semantics SemanticsModifier.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.semantics.SemanticsModifier
        - androidx.compose.ui.semantics.semantics
        - androidx.compose.ui.semantics.clearAndSetSemantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-211
      title: androidx.compose.ui.semantics SemanticsModifier.kt source (lines 211–235)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-36
      title: androidx.compose.ui.semantics SemanticsModifier.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.semantics.SemanticsModifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-71
      title: androidx.compose.ui.semantics SemanticsModifier.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.semantics.SemanticsModifier
        - androidx.compose.ui.semantics.semantics
        - androidx.compose.ui.semantics.clearAndSetSemantics
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.semantics SemanticsModifier.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt

## androidx.compose.ui.semantics SemanticsModifier.kt source (lines 1–35)

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

package androidx.compose.ui.semantics

import androidx.compose.ui.Modifier
import androidx.compose.ui.internal.JvmDefaultWithCompatibility
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.SemanticsModifierNode
import androidx.compose.ui.platform.AtomicInt
import androidx.compose.ui.platform.InspectorInfo

private var lastIdentifier = AtomicInt(0)

internal fun generateSemanticsId() = lastIdentifier.addAndGet(1)

/**
 * A [Modifier.Element] that adds semantics key/value for use in testing, accessibility, and similar
 * use cases.
 */
@JvmDefaultWithCompatibility
public interface SemanticsModifier : Modifier.Element {

Sources: [live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt)

## androidx.compose.ui.semantics SemanticsModifier.kt source (lines 106–140)

    mergeDescendants: Boolean = false,
    properties: (SemanticsPropertyReceiver.() -> Unit),
): Modifier =
    this then AppendedSemanticsElement(mergeDescendants = mergeDescendants, properties = properties)

// Implement SemanticsModifier to allow tooling to inspect the semantics configuration
internal class AppendedSemanticsElement(
    val mergeDescendants: Boolean,
    val properties: (SemanticsPropertyReceiver.() -> Unit),
) : ModifierNodeElement<CoreSemanticsModifierNode>(), SemanticsModifier {

    // This should only ever be called by layout inspector
    override val semanticsConfiguration: SemanticsConfiguration
        get() =
            SemanticsConfiguration().apply {
                isMergingSemanticsOfDescendants = mergeDescendants
                properties()
            }

    override fun create(): CoreSemanticsModifierNode {
        return CoreSemanticsModifierNode(
            mergeDescendants = mergeDescendants,
            isClearingSemantics = false,
            properties = properties,
        )
    }

    override fun update(node: CoreSemanticsModifierNode) {
        node.mergeDescendants = mergeDescendants
        node.properties = properties
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "semantics"
        properties["mergeDescendants"] = mergeDescendants

Sources: [live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt)

## androidx.compose.ui.semantics SemanticsModifier.kt source (lines 141–175)

        addSemanticsPropertiesFrom(semanticsConfiguration)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is AppendedSemanticsElement) return false

        if (mergeDescendants != other.mergeDescendants) return false
        if (properties !== other.properties) return false

        return true
    }

    override fun hashCode(): Int {
        var result = mergeDescendants.hashCode()
        result = 31 * result + properties.hashCode()
        return result
    }
}

/**
 * Clears the semantics of all the descendant nodes and sets new semantics.
 *
 * In the merged semantics tree, this clears the semantic information provided by the node's
 * descendants (but not those of the layout node itself, if any) and sets the provided semantics.
 * (In the unmerged tree, the semantics node is marked with
 * "[SemanticsConfiguration.isClearingSemantics]", but nothing is actually cleared.)
 *
 * Compose's default semantics provide baseline usability for screen-readers, but this can be used
 * to provide a more polished screen-reader experience: for example, clearing the semantics of a
 * group of tiny buttons, and setting equivalent actions on the card containing them.
 *
 * @param properties properties to add to the semantics. [SemanticsPropertyReceiver] will be
 *   provided in the scope to allow access for common properties and its values.
 *

Sources: [live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt)

## androidx.compose.ui.semantics SemanticsModifier.kt source (lines 176–210)

 *   Note: The [properties] lambda should be used to set semantic properties or semantic actions.
 *   Don't call [SemanticsModifierNode.applySemantics] from within the [properties] block. It will
 *   result in an infinite loop.
 */
public fun Modifier.clearAndSetSemantics(
    properties: (SemanticsPropertyReceiver.() -> Unit)
): Modifier = this then ClearAndSetSemanticsElement(properties)

// Implement SemanticsModifier to allow tooling to inspect the semantics configuration
internal class ClearAndSetSemanticsElement(val properties: SemanticsPropertyReceiver.() -> Unit) :
    ModifierNodeElement<CoreSemanticsModifierNode>(), SemanticsModifier {

    // This should only ever be called by layout inspector
    override val semanticsConfiguration: SemanticsConfiguration
        get() =
            SemanticsConfiguration().apply {
                isMergingSemanticsOfDescendants = false
                isClearingSemantics = true
                properties()
            }

    override fun create(): CoreSemanticsModifierNode {
        return CoreSemanticsModifierNode(
            mergeDescendants = false,
            isClearingSemantics = true,
            properties = properties,
        )
    }

    override fun update(node: CoreSemanticsModifierNode) {
        node.properties = properties
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "clearAndSetSemantics"

Sources: [live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt)

## androidx.compose.ui.semantics SemanticsModifier.kt source (lines 211–235)

        addSemanticsPropertiesFrom(semanticsConfiguration)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ClearAndSetSemanticsElement) return false

        if (properties !== other.properties) return false

        return true
    }

    override fun hashCode(): Int {
        return properties.hashCode()
    }
}

private fun InspectorInfo.addSemanticsPropertiesFrom(
    semanticsConfiguration: SemanticsConfiguration
) {
    properties["properties"] = semanticsConfiguration.associate { (key, value) ->
        key.name to value
    }
}


Sources: [live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt)

## androidx.compose.ui.semantics SemanticsModifier.kt source (lines 36–70)

    @Deprecated(
        message =
            "SemanticsModifier.id is now unused and has been set to a fixed value. " +
                "Retrieve the id from LayoutInfo instead.",
        replaceWith = ReplaceWith(""),
    )
    public val id: Int
        get() = -1

    /**
     * The SemanticsConfiguration holds substantive data, especially a list of key/value pairs such
     * as (label -> "buttonName").
     */
    public val semanticsConfiguration: SemanticsConfiguration
}

internal class CoreSemanticsModifierNode(
    var mergeDescendants: Boolean,
    var isClearingSemantics: Boolean,
    var properties: SemanticsPropertyReceiver.() -> Unit,
) : Modifier.Node(), SemanticsModifierNode {
    override val shouldClearDescendantSemantics: Boolean
        get() = isClearingSemantics

    override val shouldMergeDescendantSemantics: Boolean
        get() = mergeDescendants

    override fun SemanticsPropertyReceiver.applySemantics() {
        properties()
    }
}

internal class EmptySemanticsModifier : Modifier.Node(), SemanticsModifierNode {
    override fun SemanticsPropertyReceiver.applySemantics() {}
}

Sources: [live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt)

## androidx.compose.ui.semantics SemanticsModifier.kt source (lines 71–105)


/**
 * Add semantics key/value pairs to the layout node, for use in testing, accessibility, etc.
 *
 * The provided lambda receiver scope provides "key = value"-style setters for any
 * [SemanticsPropertyKey]. Additionally, chaining multiple semantics modifiers is also a supported
 * style.
 *
 * The resulting semantics produce two [SemanticsNode] trees:
 *
 * The "unmerged tree" rooted at [SemanticsOwner.unmergedRootSemanticsNode] has one [SemanticsNode]
 * per layout node which has any [SemanticsModifier] on it. This [SemanticsNode] contains all the
 * properties set in all the [SemanticsModifier]s on that node.
 *
 * The "merged tree" rooted at [SemanticsOwner.rootSemanticsNode] has equal-or-fewer nodes: it
 * simplifies the structure based on [mergeDescendants] and [clearAndSetSemantics]. For most
 * purposes (especially accessibility, or the testing of accessibility), the merged semantics tree
 * should be used.
 *
 * @param mergeDescendants Whether the semantic information provided by the owning component and its
 *   descendants should be treated as one logical entity. Most commonly set on
 *   screen-reader-focusable items such as buttons or form fields. In the merged semantics tree, all
 *   descendant nodes (except those themselves marked [mergeDescendants]) will disappear from the
 *   tree, and their properties will get merged into the parent's configuration (using a merging
 *   algorithm that varies based on the type of property -- for example, text properties will get
 *   concatenated, separated by commas). In the unmerged semantics tree, the node is simply marked
 *   with [SemanticsConfiguration.isMergingSemanticsOfDescendants].
 * @param properties properties to add to the semantics. [SemanticsPropertyReceiver] will be
 *   provided in the scope to allow access for common properties and its values.
 *
 *   Note: The [properties] block should be used to set semantic properties or semantic actions.
 *   Don't call [SemanticsModifierNode.applySemantics] from within the [properties] block. It will
 *   result in an infinite loop.
 */
public fun Modifier.semantics(

Sources: [live-androidx-ui-ui-ui-semantics-semanticsmodifier-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/semantics/SemanticsModifier.kt)
