---
type: reference
title: Stability in Compose
description: "Public source: https://developer.android.com/develop/ui/compose/performance/stability"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-performance-stability-debug-stability-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability#debug-stability
    revision: web:compose-guide-performance-stability:content@sha256:51ff08733927ce79882bce226503210b1fa0ad201d67c4f63b06c6235d6318bc
    sha256: 3f9fb6636001f78cb62d0498a28654378387c49de3cc0057d3777b5fd596901c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If your app is recomposing a composable whose parameters have not changed, first check whether new instances of unstable types are being allocated on every recomposition (or, if Strong skipping mode is disabled, whether the composable has parameters with var properties or val properties of an unstable type).

      For detailed information about how to diagnose complex issues with stability in Compose, see the Debug stability guide.
  - id: live-compose-guide-performance-stability-fix-stability-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability#fix-stability
    revision: web:compose-guide-performance-stability:content@sha256:51ff08733927ce79882bce226503210b1fa0ad201d67c4f63b06c6235d6318bc
    sha256: 10dfb4f9d4a20462126735de854a2349e69e842e91870d36b72f6fd9ec0cdb7c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: For information about how to bring stability to your Compose implementation, see the Fix stability issues guide.
  - id: live-compose-guide-performance-stability-functions-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability#functions
    revision: web:compose-guide-performance-stability:content@sha256:51ff08733927ce79882bce226503210b1fa0ad201d67c4f63b06c6235d6318bc
    sha256: cdfb346fa59f88ba77acce0d78a46ec25f7f38011c6844dfbd7055c5288258f7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose can mark functions as skippable or restartable. Note that it may mark a function as one, both, or neither of these:

      Skippable: If the compiler marks a composable as skippable, Compose can skip it during recomposition if all its arguments are equal with their previous values. (With Strong skipping mode in Kotlin 2.0.20+, all restartable composables are automatically skippable.)

      Restartable: A composable that is restartable serves as a "scope" where recomposition can start. In other words, the function can be a point of entry for where Compose can start re-executing code for recomposition after state changes.
  - id: live-compose-guide-performance-stability-further-reading-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability#further-reading
    revision: web:compose-guide-performance-stability:content@sha256:51ff08733927ce79882bce226503210b1fa0ad201d67c4f63b06c6235d6318bc
    sha256: 6451998768eabcea3083236638dd6cd3d5deca18550b53adc106062ce84de6e8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: "Performance: For more debugging tips on Compose performance, check out our best practices guide and I/O talk."
  - id: live-compose-guide-performance-stability-immutable-objects-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability#immutable-objects
    revision: web:compose-guide-performance-stability:content@sha256:51ff08733927ce79882bce226503210b1fa0ad201d67c4f63b06c6235d6318bc
    sha256: c42bb36b8fd0005d2eb9a2dbebdbf6e4b25aed38920cc494c664ac9bbaf5b8ff
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following snippets demonstrates the general principles behind stability and recomposition.

      The Contact class is an immutable data class. This is because all its parameters are primitives defined with the val keyword. Once you create an instance of Contact, you cannot change the value of the object's properties. If you attempted to do so, you would create a new object.

      data class Contact(val name: String, val number: String)

      The ContactRow composable has a parameter of type Contact.

      @Composable
      fun ContactRow(contact: Contact, modifier: Modifier = Modifier) {
         var selected by remember { mutableStateOf(false) }

         Row(modifier) {
            ContactDetails(contact)
            ToggleButton(selected, onToggled = { selected = !selected })
         }
      }

      Consider what happens when the user clicks the toggle button and the selected state changes:

      Compose evaluates if it should recompose the code inside ContactRow.

      It sees that the only argument for ContactDetails is of type Contact.

      Because Contact is an immutable data class, Compose is sure that none of the arguments for ContactDetails have changed.

      As such, Compose skips ContactDetails and does not recompose it.

      On the other hand, the arguments for ToggleButton have changed, and Compose recomposes that component.
  - id: live-compose-guide-performance-stability-implementation-compose-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability#implementation-compose
    revision: web:compose-guide-performance-stability:content@sha256:51ff08733927ce79882bce226503210b1fa0ad201d67c4f63b06c6235d6318bc
    sha256: 062ea6f9a607a83881beca6591988d0857735c962ed4d0a9be1144f3848402e4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      It can be helpful, though not crucial, to consider how exactly Compose determines which functions to skip during recomposition.

      When the Compose compiler runs on your code, it marks each function and type with one of several tags. These tags reflect how Compose handles the function or type during recomposition.
  - id: live-compose-guide-performance-stability-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability#main-content
    revision: web:compose-guide-performance-stability:content@sha256:51ff08733927ce79882bce226503210b1fa0ad201d67c4f63b06c6235d6318bc
    sha256: 1232f7b28057462d831e3476a20948cb1c6be7c0e27d19ca200c2c915f71dd9b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose considers types to be either stable or unstable. A type is stable if it is immutable, or if it is possible for Compose to know whether its value has changed between recompositions. A type is unstable if Compose can't know whether its value has changed between recompositions.

      Compose uses the stability of a composable's parameters to determine how to compare inputs and decide whether it can skip the composable during recomposition (with Strong skipping mode enabled by default starting in Kotlin 2.0.20):

      Stable parameters: Compose compares stable parameters using structural equality (Object.equals()). If a composable's stable parameters are equal to their previous values, Compose skips it.

      Unstable parameters: With Strong skipping mode enabled (the default in Kotlin 2.0.20 and higher), Compose compares unstable parameters using instance equality (===) and skips the composable if the same object instances are passed. In versions prior to Kotlin 2.0.20 (or when Strong skipping mode is disabled), Compose always recomposes a composable with unstable parameters when its parent recomposes.

      If your app frequently allocates new instances of unstable parameters—or forces expensive .equals() checks on large collections by over-annotating models—you might observe unnecessary recompositions or comparison overhead.

      This document details how Compose determines stability and how you can optimize it to improve performance and overall user experience.
  - id: live-compose-guide-performance-stability-mutable-objects-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability#mutable-objects
    revision: web:compose-guide-performance-stability:content@sha256:51ff08733927ce79882bce226503210b1fa0ad201d67c4f63b06c6235d6318bc
    sha256: 30041c16f4d96b1e0364f48a1cda27dda3905f78baaf6a6792c66237656b80fc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      While the preceding example uses an immutable object, it is possible to create a mutable object. Consider the following snippet:

      data class Contact(var name: String, var number: String)

      As each parameter of Contact is now a var, the class is no longer immutable. If its properties changed, Compose wouldn't become aware. This is because Compose only tracks changes to Compose State objects.

      Compose considers such a class unstable. With Strong skipping mode (Kotlin 2.0.20+), Compose compares Contact using instance equality (===): mutating contact.name in place won't trigger recomposition, while passing a newly allocated Contact instance with identical values will still force ContactDetails to recompose (and without Strong skipping mode, ContactDetails recomposes every time selected changes).
  - id: live-compose-guide-performance-stability-summary-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability#summary
    revision: web:compose-guide-performance-stability:content@sha256:51ff08733927ce79882bce226503210b1fa0ad201d67c4f63b06c6235d6318bc
    sha256: 819eb88544f72d20e9c531c6209fa6cd183b030f08ec7b3641ee5b934c84396b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Overall, you should note the following points:

      Parameters: Compose determines the stability of each parameter of your composables to decide whether to compare them using structural equality (.equals()) or instance equality (===) during recomposition.

      Immediate fixes: If you notice your composable isn't being skipped and it is causing a performance issue, check whether new instances of unstable parameters are being recreated on each pass or if var properties are being used instead of State.

      Compiler reports: You can use the compiler reports to determine what stability is being inferred about your classes.

      Collections: Compose considers standard collection interfaces (List, Set, and Map) unstable because their underlying implementations may be mutable. With Strong skipping mode (enabled by default in Kotlin 2.0.20+), unstable collections still skip recomposition using instance equality (===) when the collection reference does not change. Be cautious about replacing standard collections with Kotlinx immutable collections or annotating collection-holding classes with @Immutable or @Stable, as comparing every element with .equals() on each recomposition pass can be more expensive than recomposition itself.

      Other modules: Compose considers classes from modules where the Compose compiler does not run to be unstable (compared using === under Strong skipping mode). If a data source frequently re-instantiates small, flat models from non-Compose modules with identical values, you can configure a stability configuration file or use @Stable or @Immutable where .equals() is cheap.
  - id: live-compose-guide-performance-stability-types-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/stability#types
    revision: web:compose-guide-performance-stability:content@sha256:51ff08733927ce79882bce226503210b1fa0ad201d67c4f63b06c6235d6318bc
    sha256: 7e234bf187763f531fcb4464314878ab6f07b13802f50451dbd46b2b103f1677
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose marks types as either immutable or stable. Each type is one or the other:

      Immutable: Compose marks a type as immutable if the value of its properties can never change and all methods are referentially transparent. Note that all primitive types are marked as immutable. These include String, Int, and Float.

      Stable: Indicates a type whose properties can change after construction. If and when those properties change during runtime, Compose becomes aware of those changes.
compose:
  id: live-compose-guide-performance-stability
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: live-compose-guide-performance-stability-debug-stability
      title: Debug stability
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-debug-stability-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-fix-stability
      title: Fix stability issues
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-fix-stability-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-functions
      title: Functions
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-functions-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-further-reading
      title: Further reading
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-further-reading-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-immutable-objects
      title: Immutable objects
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-immutable-objects-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-implementation-compose
      title: Implementation in Compose
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-implementation-compose-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-main-content
      title: Introduction
      aliases:
        - androidx.compose.runtime.Stable
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-main-content-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-mutable-objects
      title: Mutable objects
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-mutable-objects-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-summary
      title: Summary
      aliases:
        - androidx.compose.runtime.Stable
        - androidx.compose.runtime.Immutable
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-summary-source
      relatedIds: []
    - id: live-compose-guide-performance-stability-types
      title: Types
      aliases:
        - androidx.compose.runtime.Stable
        - androidx.compose.runtime.Immutable
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-stability-types-source
      relatedIds: []
---

# Stability in Compose

Public source: https://developer.android.com/develop/ui/compose/performance/stability

## Debug stability

If your app is recomposing a composable whose parameters have not changed, first check whether new instances of unstable types are being allocated on every recomposition (or, if Strong skipping mode is disabled, whether the composable has parameters with var properties or val properties of an unstable type).

For detailed information about how to diagnose complex issues with stability in Compose, see the Debug stability guide.

Sources: [live-compose-guide-performance-stability-debug-stability-source](https://developer.android.com/develop/ui/compose/performance/stability#debug-stability)

## Fix stability issues

For information about how to bring stability to your Compose implementation, see the Fix stability issues guide.

Sources: [live-compose-guide-performance-stability-fix-stability-source](https://developer.android.com/develop/ui/compose/performance/stability#fix-stability)

## Functions

Compose can mark functions as skippable or restartable. Note that it may mark a function as one, both, or neither of these:

Skippable: If the compiler marks a composable as skippable, Compose can skip it during recomposition if all its arguments are equal with their previous values. (With Strong skipping mode in Kotlin 2.0.20+, all restartable composables are automatically skippable.)

Restartable: A composable that is restartable serves as a "scope" where recomposition can start. In other words, the function can be a point of entry for where Compose can start re-executing code for recomposition after state changes.

Sources: [live-compose-guide-performance-stability-functions-source](https://developer.android.com/develop/ui/compose/performance/stability#functions)

## Further reading

Performance: For more debugging tips on Compose performance, check out our best practices guide and I/O talk.

Sources: [live-compose-guide-performance-stability-further-reading-source](https://developer.android.com/develop/ui/compose/performance/stability#further-reading)

## Immutable objects

The following snippets demonstrates the general principles behind stability and recomposition.

The Contact class is an immutable data class. This is because all its parameters are primitives defined with the val keyword. Once you create an instance of Contact, you cannot change the value of the object's properties. If you attempted to do so, you would create a new object.

data class Contact(val name: String, val number: String)

The ContactRow composable has a parameter of type Contact.

@Composable
fun ContactRow(contact: Contact, modifier: Modifier = Modifier) {
   var selected by remember { mutableStateOf(false) }

   Row(modifier) {
      ContactDetails(contact)
      ToggleButton(selected, onToggled = { selected = !selected })
   }
}

Consider what happens when the user clicks the toggle button and the selected state changes:

Compose evaluates if it should recompose the code inside ContactRow.

It sees that the only argument for ContactDetails is of type Contact.

Because Contact is an immutable data class, Compose is sure that none of the arguments for ContactDetails have changed.

As such, Compose skips ContactDetails and does not recompose it.

On the other hand, the arguments for ToggleButton have changed, and Compose recomposes that component.

Sources: [live-compose-guide-performance-stability-immutable-objects-source](https://developer.android.com/develop/ui/compose/performance/stability#immutable-objects)

## Implementation in Compose

It can be helpful, though not crucial, to consider how exactly Compose determines which functions to skip during recomposition.

When the Compose compiler runs on your code, it marks each function and type with one of several tags. These tags reflect how Compose handles the function or type during recomposition.

Sources: [live-compose-guide-performance-stability-implementation-compose-source](https://developer.android.com/develop/ui/compose/performance/stability#implementation-compose)

## Introduction

Compose considers types to be either stable or unstable. A type is stable if it is immutable, or if it is possible for Compose to know whether its value has changed between recompositions. A type is unstable if Compose can't know whether its value has changed between recompositions.

Compose uses the stability of a composable's parameters to determine how to compare inputs and decide whether it can skip the composable during recomposition (with Strong skipping mode enabled by default starting in Kotlin 2.0.20):

Stable parameters: Compose compares stable parameters using structural equality (Object.equals()). If a composable's stable parameters are equal to their previous values, Compose skips it.

Unstable parameters: With Strong skipping mode enabled (the default in Kotlin 2.0.20 and higher), Compose compares unstable parameters using instance equality (===) and skips the composable if the same object instances are passed. In versions prior to Kotlin 2.0.20 (or when Strong skipping mode is disabled), Compose always recomposes a composable with unstable parameters when its parent recomposes.

If your app frequently allocates new instances of unstable parameters—or forces expensive .equals() checks on large collections by over-annotating models—you might observe unnecessary recompositions or comparison overhead.

This document details how Compose determines stability and how you can optimize it to improve performance and overall user experience.

Sources: [live-compose-guide-performance-stability-main-content-source](https://developer.android.com/develop/ui/compose/performance/stability#main-content)

## Mutable objects

While the preceding example uses an immutable object, it is possible to create a mutable object. Consider the following snippet:

data class Contact(var name: String, var number: String)

As each parameter of Contact is now a var, the class is no longer immutable. If its properties changed, Compose wouldn't become aware. This is because Compose only tracks changes to Compose State objects.

Compose considers such a class unstable. With Strong skipping mode (Kotlin 2.0.20+), Compose compares Contact using instance equality (===): mutating contact.name in place won't trigger recomposition, while passing a newly allocated Contact instance with identical values will still force ContactDetails to recompose (and without Strong skipping mode, ContactDetails recomposes every time selected changes).

Sources: [live-compose-guide-performance-stability-mutable-objects-source](https://developer.android.com/develop/ui/compose/performance/stability#mutable-objects)

## Summary

Overall, you should note the following points:

Parameters: Compose determines the stability of each parameter of your composables to decide whether to compare them using structural equality (.equals()) or instance equality (===) during recomposition.

Immediate fixes: If you notice your composable isn't being skipped and it is causing a performance issue, check whether new instances of unstable parameters are being recreated on each pass or if var properties are being used instead of State.

Compiler reports: You can use the compiler reports to determine what stability is being inferred about your classes.

Collections: Compose considers standard collection interfaces (List, Set, and Map) unstable because their underlying implementations may be mutable. With Strong skipping mode (enabled by default in Kotlin 2.0.20+), unstable collections still skip recomposition using instance equality (===) when the collection reference does not change. Be cautious about replacing standard collections with Kotlinx immutable collections or annotating collection-holding classes with @Immutable or @Stable, as comparing every element with .equals() on each recomposition pass can be more expensive than recomposition itself.

Other modules: Compose considers classes from modules where the Compose compiler does not run to be unstable (compared using === under Strong skipping mode). If a data source frequently re-instantiates small, flat models from non-Compose modules with identical values, you can configure a stability configuration file or use @Stable or @Immutable where .equals() is cheap.

Sources: [live-compose-guide-performance-stability-summary-source](https://developer.android.com/develop/ui/compose/performance/stability#summary)

## Types

Compose marks types as either immutable or stable. Each type is one or the other:

Immutable: Compose marks a type as immutable if the value of its properties can never change and all methods are referentially transparent. Note that all primitive types are marked as immutable. These include String, Int, and Float.

Stable: Indicates a type whose properties can change after construction. If and when those properties change during runtime, Compose becomes aware of those changes.

Sources: [live-compose-guide-performance-stability-types-source](https://developer.android.com/develop/ui/compose/performance/stability#types)
