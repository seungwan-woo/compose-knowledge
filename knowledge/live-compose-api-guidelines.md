---
type: reference
title: Compose API guidelines
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/docs/compose-api-guidelines.md"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-api-guidelines-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 1
    endLine: 28
    sha256: a1b7fe7e5de1b51f2dc251486b8067d138dccf10a431f11c8e0515bd31ab6370
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      # API Guidelines for Jetpack Compose

      ## Last updated: March 10, 2021

      # Who this document is for

      The Compose API guidelines outline the patterns, best practices and prescriptive style guidelines for writing idiomatic Jetpack Compose APIs. As Jetpack Compose code is built in layers, everyone writing code that uses Jetpack Compose is building their own API to consume themselves.

      This document assumes a familiarity with Jetpack Compose's runtime APIs including `@Composable`, `remember {}` and `CompositionLocal`.

      The requirement level of each of these guidelines is specified using the terms set forth in [RFC2119](https://www.ietf.org/rfc/rfc2119.txt) for each of the following developer audiences. If an audience is not specifically named with a requirement level for a guideline, it should be assumed that the guideline is OPTIONAL for that audience.

      ## Jetpack Compose framework development

      Contributions to the `androidx.compose` libraries and tools generally follow these guidelines to a strict degree in order to promote consistency, setting expectations and examples for consumer code at all layers.

      ## Library development based on Jetpack Compose

      It is expected and desired that an ecosystem of external libraries will come to exist that target Jetpack Compose, exposing a public API of `@Composable` functions and supporting types for consumption by apps and other libraries. While it is desirable for these libraries to follow these guidelines to the same degree as Jetpack Compose framework development would, organizational priorities and local consistency may make it appropriate for some purely stylistic guidelines to be relaxed.

      ## App development based on Jetpack Compose

      App development is often subject to strong organizational priorities and norms as well as requirements to integrate with existing app architecture. This may call for not only stylistic deviation from these guidelines but structural deviation as well. Where possible, alternative approaches for app development will be listed in this document that may be more appropriate in these situations.

      # Kotlin style

      ## Baseline style guidelines
  - id: live-compose-api-guidelines-lines-126-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 126
    endLine: 160
    sha256: 657e080408dfc06af7cc9212f0e4a8e7d7cd9c552b8b9f8e88de103e9192b0e2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Composable
      fun BackButtonHandler(onBackPressed: () -> Unit) {
      ```

      ### Don't

      ```kotlin
      // This function is a noun but is not PascalCased!
      @Composable
      fun fancyButton(text: String, onClick: () -> Unit) {
      ```

      ### Don't

      ```kotlin
      // This function is PascalCased but is not a noun!
      @Composable
      fun RenderFancyButton(text: String, onClick: () -> Unit) {
      ```

      ### Don't

      ```kotlin
      // This function is neither PascalCased nor a noun!
      @Composable
      fun drawProfileImage(image: ImageAsset) {
      ```

      ## Naming @Composable functions that return values

      **Jetpack Compose framework development and Library development** MUST follow the standard [Kotlin Coding Conventions for the naming of functions](https://kotlinlang.org/docs/reference/coding-conventions.html#function-names) for any function annotated `@Composable` that returns a value other than `Unit`.

      **Jetpack Compose framework development and Library development** MUST NOT use the factory function exemption in the [Kotlin Coding Conventions for the naming of functions](https://kotlinlang.org/docs/reference/coding-conventions.html#function-names) for naming any function annotated `@Composable` as a PascalCase type name matching the function's abstract return type.

      ### Why
  - id: live-compose-api-guidelines-lines-161-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 161
    endLine: 195
    sha256: 2f49711389b9ebd5d38f32a45ace005940b8708358ff389fe50d7e0c476eb080
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      
      While useful and accepted outside of `@Composable` functions, this factory function convention has drawbacks that set inappropriate expectations for callers when used with `@Composable` functions.

      Primary motivations for marking a factory function as `@Composable` include using composition to establish a managed lifecycle for the object or using `CompositionLocal`s as inputs to the object's construction. The former implies the use of Compose's `remember {}` API to cache and maintain the object instance across recompositions, which can break caller expectations around a factory operation that reads like a constructor call. (See the next section.) The latter motivation implies unseen inputs that should be expressed in the factory function name.

      Additionally, the mental model of `Unit`-returning `@Composable` functions as declarative entities should not be confused with a, "virtual DOM" mental model. Returning values from `@Composable` functions named as `PascalCase` nouns promotes this confusion, and may promote an undesirable style of returning a stateful control surface for a present UI entity that would be better expressed and more useful as a hoisted state object.

      More information about state hoisting patterns can be found in the design patterns section of this document.

      ### Do

      ```kotlin
      // Returns a style based on the current CompositionLocal settings
      // This function qualifies where its value comes from
      @Composable
      fun defaultStyle(): Style {
      ```

      ### Don't

      ```kotlin
      // Returns a style based on the current CompositionLocal settings
      // This function looks like it's constructing a context-free object!
      @Composable
      fun Style(): Style {
      ```

      ## Naming @Composable functions that remember {} the objects they return

      **Jetpack Compose framework development and Library development** MUST prefix any `@Composable` factory function that internally `remember {}`s and returns a mutable object with the prefix `remember`.

      **App development** SHOULD follow this same convention.

      ### Why
  - id: live-compose-api-guidelines-lines-196-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 196
    endLine: 230
    sha256: c2417bb0a841930a21414db747212991924832466f90c4ccd974923a0c393208
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      An object that can change over time and persists across recompositions carries observable side effects that should be clearly communicated to a caller. This also signals that a caller does not need to duplicate a `remember {}` of the object at the call site to attain this persistence.

      ### Do

      ```kotlin
      // Returns a CoroutineScope that will be cancelled when this call
      // leaves the composition
      // This function is prefixed with remember to describe its behavior
      @Composable
      fun rememberCoroutineScope(): CoroutineScope {
      ```

      ### Don't

      ```kotlin
      // Returns a CoroutineScope that will be cancelled when this call leaves
      // the composition
      // This function's name does not suggest automatic cancellation behavior!
      @Composable
      fun createCoroutineScope(): CoroutineScope {
      ```

      Note that returning an object is not sufficient to consider a function to be a factory function; it must be the function's primary purpose. Consider a `@Composable` function such as `Flow<T>.collectAsState()`; this function's primary purpose is to establish a subscription to a `Flow`; that it `remember {}`s its returned `State<T>` object is incidental.

      ## Naming CompositionLocals

      A `CompositionLocal` is a key into a composition-scoped key-value table. `CompositionLocal`s may be used to provide global-like values to a specific subtree of composition.

      **Jetpack Compose framework development and Library development** MUST NOT name `CompositionLocal` keys using "CompositionLocal" or "Local" as a noun suffix. `CompositionLocal` keys should bear a descriptive name based on their value.

      **Jetpack Compose framework development and Library development** MAY use "Local" as a prefix for a `CompositionLocal` key name if no other, more descriptive name is suitable.

      ### Do

      ```kotlin
  - id: live-compose-api-guidelines-lines-231-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 231
    endLine: 255
    sha256: b56454b75f650195c512ca53ca81edaa8401bf3ff10f1d45132e2a0528cdda1b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      // "Local" is used here as an adjective, "Theme" is the noun.
      val LocalTheme = staticCompositionLocalOf<Theme>()
      ```

      ### Don't

      ```kotlin
      // "Local" is used here as a noun!
      val ThemeLocal = staticCompositionLocalOf<Theme>()
      ```

      ## Stable types

      The Compose runtime exposes two annotations that may be used to mark a type or function as _stable_ - safe for optimization by the Compose compiler plugin such that the Compose runtime may skip calls to functions that accept only safe types because their results cannot change unless their inputs change.

      The Compose compiler plugin may infer these properties of a type automatically, but interfaces and other types for which stability can not be inferred, only promised, may be explicitly annotated. Collectively these types are called, "stable types."

      **`@Immutable`** indicates a type where the value of any properties will **never** change after the object is constructed, and all methods are **referentially transparent**. All Kotlin types that may be used in a `const` expression (primitive types and Strings) are considered `@Immutable`.

      **`@Stable`** when applied to a type indicates a type that is **mutable**, but the Compose runtime will be notified if and when any public properties or method behavior would yield different results from a previous invocation. (In practice this notification is backed by the `Snapshot` system via `@Stable` `MutableState` objects returned by `mutableStateOf()`.) Such a type may only back its properties using other `@Stable` or `@Immutable` types.

      **Jetpack Compose framework development, Library development and App development** MUST ensure in custom implementations of `.equals()` for `@Stable` types that for any two references `a` and `b` of `@Stable` type `T`, `a.equals(b)` MUST **always** return the same value. This implies that any **future** changes to `a` must also be reflected in `b` and vice versa.

      This constraint is always met implicitly if `a === b`; the default reference equality implementation of `.equals()` for objects is always a correct implementation of this contract.
  - id: live-compose-api-guidelines-lines-256-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 256
    endLine: 286
    sha256: 9bab311f5d15528e6650dac2287a17033e898da0d9dd1ae095ad976570eee6ee
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      **Jetpack Compose framework development and Library development** SHOULD correctly annotate `@Stable` and `@Immutable` types that they expose as part of their public API.

      **Jetpack  Compose framework development and Library development** MUST NOT remove the `@Stable` or `@Immutable` annotation from a type if it was declared with one of these annotations in a previous stable release.

      **Jetpack Compose framework development and Library development** MUST NOT add the `@Stable` or `@Immutable` annotation to an existing non-final type that was available in a previous stable release without this annotation.

      ### Why?

      `@Stable` and `@Immutable` are behavioral contracts that impact the binary compatibility of code generated by the Compose compiler plugin. Libraries should not declare more restrictive contracts for preexisting non-final types that existing implementations in the wild may not correctly implement, and similarly they may not declare that a library type no longer obeys a previously declared contract that existing code may depend upon.

      Implementing the stable contract incorrectly for a type annotated as `@Stable` or `@Immutable` will result in incorrect behavior for `@Composable` functions that accept that type as a parameter or receiver.

      ## Emit XOR return a value

      `@Composable` functions should either emit content into the composition or return a value, but not both. If a composable should offer additional control surfaces to its caller, those control surfaces or callbacks should be provided as parameters to the composable function by the caller.

      **Jetpack Compose framework development and Library development** MUST NOT expose any single `@Composable` function that both emits tree nodes and returns a value.

      ### Why

      Emit operations must occur in the order the content is to appear in the composition. Using return values to communicate with the caller restricts the shape of calling code and prevents interactions with other declarative calls that come before it.

      ### Do

      ```kotlin
      // Emits a text input field element that will call into the inputState
      // interface object to request changes
      @Composable
      fun InputField(inputState: InputState) {
      // ...
  - id: live-compose-api-guidelines-lines-287-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 287
    endLine: 321
    sha256: c74721ef17b39cb37e3dea8fd709567ed9a304cb9ab993679e825e6d77075f77
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      // Communicating with the input field is not order-dependent
      val inputState = remember { InputState() }

      Button("Clear input", onClick = { inputState.clear() })

      InputField(inputState)
      ```

      ### Don't

      ```kotlin
      // Emits a text input field element and returns an input value holder
      @Composable
      fun InputField(): UserInputState {
      // ...

      // Communicating with the InputField is made difficult
      Button("Clear input", onClick = { TODO("???") })
      val inputState = InputField()
      ```

      Communicating with a composable by passing parameters forward affords aggregation of several such parameters into types used as parameters to their callers:

      ```kotlin
      interface DetailCardState {
          val actionRailState: ActionRailState
          // ...
      }

      @Composable
      fun DetailCard(state: DetailCardState) {
          Surface {
              // ...
              ActionRail(state.actionRailState)
          }
  - id: live-compose-api-guidelines-lines-29-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 29
    endLine: 55
    sha256: 91a1262145adf6d0ca752e89bb53562c4e859353c1ef021eb3d0e8fbf1da3957
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      **Jetpack Compose framework development** MUST follow the Kotlin Coding Conventions outlined at https://kotlinlang.org/docs/reference/coding-conventions.html as a baseline with the additional adjustments described below.

      **Jetpack Compose Library and app development** SHOULD also follow this same guideline.

      ### Why

      The Kotlin Coding Conventions establish a standard of consistency for the Kotlin ecosystem at large. The additional style guidelines that follow in this document for Jetpack Compose account for Jetpack Compose's language-level extensions, mental models, and intended data flows, establishing consistent conventions and expectations around Compose-specific patterns.

      ## Singletons, constants, sealed class and enum class values

      **Jetpack Compose framework development** MUST name deeply immutable constants following the permitted object declaration convention of `PascalCase` as documented [here](https://kotlinlang.org/docs/reference/coding-conventions.html#property-names) as a replacement for any usage of `CAPITALS_AND_UNDERSCORES`. Enum class values MUST also be named using `PascalCase` as documented in the same section.

      **Library development** SHOULD follow this same convention when targeting or extending Jetpack Compose.

      **App Development** MAY follow this convention.

      ### Why

      Jetpack Compose discourages the use and creation of singletons or companion object state that cannot be treated as _stable_ over time and across threads, reducing the usefulness of a distinction between singleton objects and other forms of constants. This forms a consistent expectation of API shape for consuming code whether the implementation detail is a top-level `val`, a `companion object`, an `enum class`, or a `sealed class` with nested `object` subclasses. `myFunction(Foo)` and `myFunction(Foo.Bar)` carry the same meaning and intent for calling code regardless of specific implementation details.

      Library and app code with a strong existing investment in `CAPITALS_AND_UNDERSCORES` in their codebase MAY opt for local consistency with that pattern instead.

      ### Do

      ```kotlin
      const val DefaultKeyName = "__defaultKey"
  - id: live-compose-api-guidelines-lines-322-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 322
    endLine: 356
    sha256: 906bf649f910fe268708f7b8f8d5fedf7099622825bff7879f3d75b71926435f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      @Composable
      fun ActionRail(state: ActionRailState) {
          // ...
      }
      ```

      For more information on this pattern, see the sections on [hoisted state types](#hoisted-state-types) in the Compose API design patterns section below.

      # Compose UI API structure

      Compose UI is a UI toolkit built on the Compose runtime. This section outlines guidelines for APIs that use and extend the Compose UI toolkit.

      ## Compose UI elements

      A `@Composable` function that emits exactly one Compose UI tree node is called an _element_.

      Example:

      ```kotlin
      @Composable
      fun SimpleLabel(
          text: String,
          modifier: Modifier = Modifier
      ) {
      ```

      **Jetpack Compose framework development and Library development** MUST follow all guidelines in this section.

      **Jetpack Compose app development** SHOULD follow all guidelines in this section.

      ### Elements return Unit

      Elements MUST emit their root UI node either directly by calling emit() or by calling another Compose UI element function. They MUST NOT return a value. All behavior of the element not available from the state of the composition MUST be provided by parameters passed to the element function.
  - id: live-compose-api-guidelines-lines-357-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 357
    endLine: 391
    sha256: bc13048635b65a876960b25d4634ff269ae4a8c46bbec174e9528da6dfbcaf61
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      
      #### Why?

      Elements are declarative entities in a Compose UI composition. Their presence or absence in the composition determines whether they appear in the resulting UI. Returning a value is not necessary; any means of controlling the emitted element should be provided as a parameter to the element function, not returned by calling the element function. See the, "hoisted state" section in the Compose API design patterns section of this document for more information.

      #### Do

      ```kotlin
      @Composable
      fun FancyButton(
          text: String,
          onClick: () -> Unit,
          modifier: Modifier = Modifier
      ) {
      ```

      #### Don't

      ```kotlin
      interface ButtonState {
          val clicks: Flow<ClickEvent>
          val measuredSize: Size
      }

      @Composable
      fun FancyButton(
          text: String,
          modifier: Modifier = Modifier
      ): ButtonState {
      ```

      ### Elements accept and respect a Modifier parameter

      Element functions MUST accept a parameter of type `Modifier`. This parameter MUST be named "`modifier`" and MUST appear as the first optional parameter in the element function's parameter list. Element functions MUST NOT accept multiple `Modifier` parameters.
  - id: live-compose-api-guidelines-lines-392-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 392
    endLine: 407
    sha256: e057201fa0b8fcd47ade4e07b20022e9ce551e04ed70608105ddf2fcb7d719c8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      If the element function's content has a natural minimum size - that is, if it would ever measure with a non-zero size given constraints of minWidth and minHeight of zero - the default value of the `modifier` parameter MUST be `Modifier` - the `Modifier` type's `companion object` that represents the empty `Modifier`. Element functions without a measurable content size (e.g. Canvas, which draws arbitrary user content in the size available) MAY require the `modifier` parameter and omit the default value.

      Element functions MUST provide their modifier parameter to the Compose UI node they emit by passing it to the root element function they call. If the element function directly emits a Compose UI layout node, the modifier MUST be provided to the node.

      Element functions MAY concatenate additional modifiers to the **end** of the received `modifier` parameter before passing the concatenated modifier chain to the Compose UI node they emit.

      Element functions MUST NOT concatenate additional modifiers to the **beginning** of the received modifier parameter before passing the concatenated modifier chain to the Compose UI node they emit.

      #### Why?

      Modifiers are the standard means of adding external behavior to an element in Compose UI and allow common behavior to be factored out of individual or base element API surfaces. This allows element APIs to be smaller and more focused, as modifiers are used to decorate those elements with standard behavior.

      An element function that does not accept a modifier in this standard way does not permit this decoration and motivates consuming code to wrap a call to the element function in an additional Compose UI layout such that the desired modifier can be applied to the wrapper layout instead. This does not prevent the developer behavior of modifying the element, and forces them to write more inefficient UI code with a deeper tree structure to achieve their desired result.

      Modifiers occupy the first optional parameter slot to set a consistent expectation for developers that they can always provide a modifier as the final positional parameter to an element call for any given element's common case.
  - id: live-compose-api-guidelines-lines-408-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 408
    endLine: 442
    sha256: 328fb37534c1a0913f8195e6f04f489ac4e24e1805f54de6fe78fb01263ce2ee
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      See the Compose UI modifiers section below for more details.

      #### Do

      ```kotlin
      @Composable
      fun FancyButton(
          text: String,
          onClick: () -> Unit,
          modifier: Modifier = Modifier
      ) = Text(
          text = text,
          modifier = modifier.surface(elevation = 4.dp)
              .clickable(onClick)
              .padding(horizontal = 32.dp, vertical = 16.dp)
      )
      ```

      ## Compose UI layouts

      A Compose UI element that accepts one or more `@Composable` function parameters is called a _layout_.

      Example:

      ```kotlin
      @Composable
      fun SimpleRow(
          modifier: Modifier = Modifier,
          content: @Composable () -> Unit
      ) {
      ```

      **Jetpack Compose framework development and Library development** MUST follow all guidelines in this section.

      **Jetpack Compose app development** SHOULD follow all guidelines in this section.
  - id: live-compose-api-guidelines-lines-443-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 443
    endLine: 477
    sha256: 651703f02f1eb337c01c85ff1fcb583cfc791b477d9f6ffc03d5160c7f67d4a6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      Layout functions SHOULD use the name "`content`" for a `@Composable` function parameter if they accept only one `@Composable` function parameter.

      Layout functions SHOULD use the name "`content`" for their primary or most common `@Composable` function parameter if they accept more than one `@Composable` function parameter.

      Layout functions SHOULD place their primary or most common `@Composable` function parameter in the last parameter position to permit the use of Kotlin's trailing lambda syntax for that parameter.

      ## Compose UI modifiers

      A `Modifier` is an immutable, ordered collection of objects that implement the `Modifier.Element` interface. Modifiers are universal decorators for Compose UI elements that may be used to implement and add cross-cutting behavior to elements in an opaque and encapsulated manner. Examples of modifiers include altering element sizing and padding, drawing content beneath or overlapping the element, or listening to touch events within the UI element's bounding box.

      **Jetpack Compose framework development and Library development** MUST follow all guidelines in this section.

      ### Modifier factory functions

      Modifier chains are constructed using a fluent builder syntax expressed as Kotlin extension functions that act as factories.

      Example:

      ```kotlin
      Modifier.preferredSize(50.dp)
          .backgroundColor(Color.Blue)
          .padding(10.dp)
      ```

      Modifier APIs MUST NOT expose their Modifier.Element interface implementation types.

      Modifier APIs MUST be exposed as factory functions following this style:

      ```kotlin
      fun Modifier.myModifier(
          param1: ...,
          paramN: ...
      ): Modifier = then(MyModifierImpl(param1, ... paramN))
      ```
  - id: live-compose-api-guidelines-lines-478-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 478
    endLine: 510
    sha256: f382b4eb6c5ac8266704de685acd87c13808db524c8a8c43813a7e536442c04e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      ### Parent data and layout-scoped Modifiers

      Android's View system has the concept of LayoutParams - a type of object stored opaquely with a ViewGroup's child view that provides layout instructions specific to the ViewGroup that will measure and position it.

      Compose UI modifiers afford a related pattern with parent data (using `ParentDataModifierNode`) and receiver scope objects for layout composable functions. A `ParentDataModifierNode` is a tool for an integrator to provide arguments to a parent layout for each child.

      This pattern is useful when a parent layout needs to receive child-specific information to configure its behavior around that child. This allows the parent's API to remain simple and decoupled from the specific children placed inside it. Instead of passing a complex data structure to the parent describing all children, the integrator can provide configuration for each child individually at the call site where the child is defined. For example, `Row` uses `ParentDataModifierNode` for the `weight` modifier, allowing each child to specify how much space it should occupy. This avoids having to pass a list of weights to the `Row` itself.

      When using `ParentDataModifierNode`s, follow these guidelines:

      **Parent data modifiers MUST be defined on a layout scope**

      Parent data modifiers provide a way for a child to give data to a parent layout. To guide users to only provide parent data modifiers to direct children of a matching layout, and to make it clear where the data is being consumed, these modifiers should be defined on a scope object that is only available within the parent's content lambda. They should not be defined as top-level functions that can be used anywhere. This improves API clarity and prevents misuse.

      #### Do

      ```kotlin
      // The weight modifier is scoped to a specific interface that is only available
      // in the content lambda of the parent.
      @LayoutScopeMarker
      @Stable
      interface MyRowScope {
          fun Modifier.weight(weight: Float): Modifier
      }

      @Composable
      fun MyRow(content: @Composable MyRowScope.() -> Unit) {
          // ...
      }

      // The weight modifier can only be used inside MyRowScope.
      MyRow {
  - id: live-compose-api-guidelines-lines-511-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 511
    endLine: 545
    sha256: be6a91dc9fb3b398d723590a97605eb9aecd768b3e175a9eda39fb7ea8fb698d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          Text("Hello", Modifier.weight(1f)) // weight is available on the receiver scope
      }

      // This will not compile, as MyRowScope is not present.
      Box {
          Text("Hello", Modifier.weight(1f)) // COMPILE ERROR
      }
      ```

      #### Don't

      ```kotlin
      // A top-level weight modifier can be used anywhere, creating ambiguity, as it is
      // not clear which layout it provides data for.
      fun Modifier.weight(weight: Float): Modifier {
          // ...
      }

      // It's unclear what this weight modifier does in this context, as Box does not
      // read any weight parent data.
      Box(Modifier.weight(1f)) {
          // ...
      }
      ```

      **Parent data modifiers MUST be explicitly provided by a user**

      When using parent data there are three entities:

      1.  **The parent**: A layout that arranges other components (e.g., `Row`, `Column`).
      2.  **The child**: A component placed within a parent (e.g., `Text`, `Image`).
      3.  **The integration code / user code**: The end-user code that places child components into a parent layout.

      The `ParentDataModifierNode` is a tool for the user code to provide child-specific information to a parent layout. It MUST NOT be used by the child author as an implementation detail to implicitly communicate with a parent that may or may not be present. All parent data must be explicitly provided by the user via a modifier.
  - id: live-compose-api-guidelines-lines-546-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 546
    endLine: 580
    sha256: f15ae7e1a2aa294bb530f5de1a1cd27522bdfbcb8aaa942ec82e1f6b7f10139b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      #### Don't

      ```kotlin
      @Composable
      fun ButtonGroup(content: @Composable () -> Unit) {
          // reads parent data to correctly handle child buttons
      }

      // This component tries to implicitly communicate with a parent by setting
      // parent data as an implementation detail to allow for 'automatic' configuration when it is used with the parent. This creates a hidden contract that is not explicit in the API.
      @Composable
      fun BadButton(modifier: Modifier = Modifier) {
          val buttonGroupId = // ...
          Text(
              "Bad button",
              modifier.then(
                  object : ParentDataModifierNode {
                      override fun Density.modifyParentData(parentData: Any?) = buttonGroupId
                  }
              )
          )
      }

      // The user may not be aware of this implicit communication, and the
      // BadButton will behave unexpectedly when not in a ButtonGroup.
      Column {
          BadButton()
      }
      ```

      #### Do

      ```kotlin
      // The correct way to do this is for the user to explicitly provide
      // the parent data via a modifier exposed by the parent's scope.
  - id: live-compose-api-guidelines-lines-56-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 56
    endLine: 90
    sha256: 12ff0240f4ff6d7186805f00fb5dc3a4ad3feda3a95b541af49b478cf6f3b3c3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      val StructurallyEqual: ComparisonPolicy = StructurallyEqualsImpl(...)

      object ReferenceEqual : ComparisonPolicy {
          // ...
      }

      sealed class LoadResult<T> {
          object Loading : LoadResult<Nothing>()
          class Done(val result: T) : LoadResult<T>()
          class Error(val cause: Throwable) : LoadResult<Nothing>()
      }

      enum class Status {
          Idle,
          Busy
      }
      ```

      ### Don't

      ```kotlin
      const val DEFAULT_KEY_NAME = "__defaultKey"

      val STRUCTURALLY_EQUAL: ComparisonPolicy = StructurallyEqualsImpl(...)

      object ReferenceEqual : ComparisonPolicy {
          // ...
      }

      sealed class LoadResult<T> {
          object Loading : LoadResult<Nothing>()
          class Done(val result: T) : LoadResult<T>()
          class Error(val cause: Throwable) : LoadResult<Nothing>()
      }
  - id: live-compose-api-guidelines-lines-581-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 581
    endLine: 615
    sha256: 558b27a66eca444b35c7f0c281a2f2ac6d8d9ffeb118efa6879e7a65eac2a2f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      ButtonGroup {
          GoodButton(modifier = Modifier.buttonGroupId(1))
      }
      ```

      **Parent data MUST flow from the child to the parent**

      Parent data is a mechanism for the author of the integration code to provide information from a child, up to a parent. This data flow should be one-directional, from the child to the parent. This data should not flow back down to modify the internals of the child, and instead should be used in place to configure the behavior of the parent. The provided data must not be modified by the child or the parent, it is owned by the user.

      **Provided parent data MUST be stateless**

      The data passed in a `ParentDataModifierNode` should be raw, stateless configuration for a parent layout. Parent data should avoid internal mutable state. A good mental model is that the data should be serializable.

      Parent data should be used to allow a child to provide configuration information used by a parent. Avoid using parent data as a generic communication channel to allow implicitly passing state from a child to a parent. Instead, prefer hoisting state and explicitly providing it to both the parent and child, to allow for better readability, testability, and ownership.

      Changing parent data should be driven through recomposition, by creating a new modifier with new data, not through side channels (such as internal state).

      #### Do

      ```kotlin
      // The parent data is a simple, immutable float.
      // The parent (WeightedRow) uses this to decide how to layout this child.
      @LayoutScopeMarker
      @Stable
      interface WeightScope {
          fun Modifier.weight(weight: Float): Modifier
      }

      @Composable
      fun WeightedRow(
          modifier: Modifier = Modifier,
          content: @Composable WeightScope.() -> Unit
      ) {
      // ...
  - id: live-compose-api-guidelines-lines-616-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 616
    endLine: 650
    sha256: 2d2d90b4b3cda88f71e7dda1e84eb4d76c2f9ec45ce5818dd82cc0db86207f27
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      // Usage:
      WeightedRow {
          Text("Hello", Modifier.weight(1f))
          Text("World", Modifier.weight(2f))
      }
      ```

      #### Don't

      ```kotlin
      // Parent data should not be used to communicate child state up to the parent.
      // This creates an implicit, hard-to-trace data flow.
      class ChildState(val isExpanded: MutableState<Boolean>)

      fun Modifier.childState(state: ChildState): Modifier

      // This child component tries to share its internal `isExpanded` state with
      // its parent through parent data.
      @Composable
      fun ExpandingChild() {
          val isExpanded = remember { mutableStateOf(false) }
          Box(
              Modifier
                  .childState(ChildState(isExpanded))
                  .clickable { isExpanded.value = !isExpanded.value }
          ) {
              // ...
          }
      }

      // Now there is an implicit contract which is hard to follow and easy to break.
      // State should be hoisted instead, and provided explicitly to the parent.
      @Composable
      fun ParentOfExpandingChild(modifier: Modifier = Modifier) {
          Layout(
  - id: live-compose-api-guidelines-lines-651-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 651
    endLine: 685
    sha256: 0e849baaa9c79c9387d9ffbd3e7ae9c2a10d5710ce202a204e28ded10cb694ed
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              content = { ExpandingChild() },
              modifier = modifier
          ) { measurables, constraints ->
              // ...
              val childState = measurables.first().parentData as? ChildState
              val isExpanded = childState?.isExpanded?.value ?: false
              // ... layout based on isExpanded
          }
      }
      ```


      # Compose API design patterns

      This section outlines patterns for addressing common use cases when designing a Jetpack Compose API.

      ## Prefer stateless and controlled @Composable functions

      In this context, "stateless" refers to `@Composable` functions that retain no state of their own, but instead accept external state parameters that are owned and provided by the caller. "Controlled" refers to the idea that the caller has full control over the state provided to the composable.

      ### Do

      ```kotlin
      @Composable
      fun Checkbox(
          isChecked: Boolean,
          onToggle: () -> Unit
      ) {
      // ...

      // Usage: (caller mutates optIn and owns the source of truth)
      Checkbox(
          myState.optIn,
          onToggle = { myState.optIn = !myState.optIn }
      )
  - id: live-compose-api-guidelines-lines-686-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 686
    endLine: 720
    sha256: 4aea07645390ff94b9d830da97921613719b5d0feb66932af9967ec000587ef9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ```

      ### Don't

      ```kotlin
      @Composable
      fun Checkbox(
          initialValue: Boolean,
          onChecked: (Boolean) -> Unit
      ) {
          var checkedState by remember { mutableStateOf(initialValue) }
      // ...

      // Usage: (Checkbox owns the checked state, caller notified of changes)
      // Caller cannot easily implement a validation policy.
      Checkbox(false, onToggled = { callerCheckedState = it })
      ```

      ## Separate state and events

      Compose's `mutableStateOf()` value holders are observable through the `Snapshot` system and can notify observers of changes. This is the primary mechanism for requesting recomposition, relayout, or redraw of a Compose UI. Working effectively with observable state requires acknowledging the distinction between _state_ and _events_.

      An observable _event_ happens at a point in time and is discarded. All registered observers at the time the event occurred are notified. All individual events in a stream are assumed to be relevant and may build on one another; repeated equal events have meaning and therefore a registered observer must observe all events without skipping.

      Observable _state_ raises change _events_ when the state changes from one value to a new, unequal value. State change events are _conflated;_ only the most recent state matters. Observers of state changes must therefore be _idempotent;_ given the same state value the observer should produce the same result. It is valid for a state observer to both skip intermediate states as well as run multiple times for the same state and the result should be the same.

      Compose operates on _state_ as input, not _events_. Composable functions are _state observers_ where both the function parameters and any `mutableStateOf()` value holders that are read during execution are inputs.

      ## Hoisted state types

      A pattern of stateless parameters and multiple event callback parameters will eventually reach a point of scale where it becomes unwieldy. As a composable function's parameter list grows it may become appropriate to factor a collection of state and callbacks into an interface, allowing a caller to provide a cohesive policy object as a unit.

      ### Before

      ```kotlin
  - id: live-compose-api-guidelines-lines-721-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 721
    endLine: 755
    sha256: f1c283d526db622a46c1797e7d33fc074e7d5101448097668659a6dcfb91f7a0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Composable
      fun VerticalScroller(
          scrollPosition: Int,
          scrollRange: Int,
          onScrollPositionChange: (Int) -> Unit,
          onScrollRangeChange: (Int) -> Unit
      ) {
      ```

      ### After

      ```kotlin
      @Stable
      interface VerticalScrollerState {
          var scrollPosition: Int
          var scrollRange: Int
      }

      @Composable
      fun VerticalScroller(
          verticalScrollerState: VerticalScrollerState
      ) {
      ```

      In the example above, an implementation of `VerticalScrollerState` is able to use custom get/set behaviors of the related `var` properties to apply policy or delegate storage of the state itself elsewhere.

      **Jetpack Compose framework and Library development** SHOULD declare hoisted state types for collecting and grouping interrelated policy. The VerticalScrollerState example above illustrates such a dependency between the scrollPosition and scrollRange properties; to maintain internal consistency such a state object should clamp scrollPosition into the valid range during set attempts. (Or otherwise report an error.) These properties should be grouped as handling their consistency involves handling all of them together.

      **Jetpack Compose framework and Library development** SHOULD declare hoisted state types as `@Stable` and correctly implement the `@Stable` contract.

      **Jetpack Compose framework and Library development** SHOULD name hoisted state types that are specific to a given composable function as the composable function's name suffixed by, "`State`".

      ## Default policies through hoisted state objects

      Custom implementations or even external ownership of these policy objects are often not required. By using Kotlin's default arguments, Compose's `remember {}` API, and the Kotlin "extension constructor" pattern, an API can provide a default state handling policy for simple usage while permitting more sophisticated usage when desired.
  - id: live-compose-api-guidelines-lines-756-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 756
    endLine: 790
    sha256: efba4ebccc261c0a3e2678924d2075ea5d5a1e04dbae14a40347cc0e3c881592
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      ### Example:

      ```kotlin
      fun VerticalScrollerState(): VerticalScrollerState =
          VerticalScrollerStateImpl()

      private class VerticalScrollerStateImpl(
          scrollPosition: Int = 0,
          scrollRange: Int = 0
      ) : VerticalScrollerState {
          private var _scrollPosition by
              mutableStateOf(scrollPosition, structuralEqualityPolicy())

          override var scrollPosition: Int
              get() = _scrollPosition
              set(value) {
                  _scrollPosition = value.coerceIn(0, scrollRange)
              }

          private var _scrollRange by
              mutableStateOf(scrollRange, structuralEqualityPolicy())

          override var scrollRange: Int
              get() = _scrollRange
              set(value) {
                  require(value >= 0) { "$value must be > 0" }
                  _scrollRange = value
                  scrollPosition = scrollPosition
              }
      }

      @Composable
      fun VerticalScroller(
          verticalScrollerState: VerticalScrollerState =
  - id: live-compose-api-guidelines-lines-791-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 791
    endLine: 825
    sha256: 8e41e940369f891708c27ce6111e3aff0237dd7fc9d539ad94243e83e0f1d344
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              remember { VerticalScrollerState() }
      ) {
      ```

      **Jetpack Compose framework and Library development** SHOULD declare hoisted state types as interfaces instead of abstract or open classes if they are not declared as final classes.

      When designing an open or abstract class to be properly extensible for these use cases it is easy to create hidden requirements of state synchronization for internal consistency that are difficult (or impossible) for an extending developer to preserve. Using an interface that can be freely implemented strongly discourages private contracts between composable functions and hoisted state objects by way of Kotlin internal-scoped properties or functionality.

      **Jetpack Compose framework and Library development** SHOULD provide default state implementations remembered as default arguments. State objects MAY be required parameters if the composable cannot function if the state object is not configured by the caller.

      **Jetpack Compose framework and Library development** MUST NOT use `null` as a sentinel indicating that the composable function should internally `remember {}` its own state. This can create accidental inconsistent or unexpected behavior if `null` has a meaningful interpretation for the caller and is provided to the composable function by mistake.

      ### Do

      ```kotlin
      @Composable
      fun VerticalScroller(
          verticalScrollerState: VerticalScrollerState =
              remember { VerticalScrollerState() }
      ) {
      ```

      ### Don't

      ```kotlin
      // Null as a default can cause unexpected behavior if the input parameter
      // changes between null and non-null.
      @Composable
      fun VerticalScroller(
          verticalScrollerState: VerticalScrollerState? = null
      ) {
          val realState = verticalScrollerState ?:
              remember { VerticalScrollerState() }
      ```
  - id: live-compose-api-guidelines-lines-826-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 826
    endLine: 860
    sha256: 4bb44d915d1d5add5200839895750472ae25f44c2825879c7ebc68ddb1e3b95b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ## Extensibility of hoisted state types

      Hoisted state types often implement policy and validation that impact behavior for a composable function that accepts it. Concrete and especially final hoisted state types imply containment and ownership of the source of truth that the state object appeals to.

      In extreme cases this can defeat the benefits of reactive UI API designs by creating multiple sources of truth, necessitating app code to synchronize data across multiple objects. Consider the following:

      ```kotlin
      // Defined by another team or library
      data class PersonData(val name: String, val avatarUrl: String)

      class FooState {
          val currentPersonData: PersonData

          fun setPersonName(name: String)
          fun setPersonAvatarUrl(url: String)
      }

      // Defined by the UI layer, by yet another team
      class BarState {
          var name: String
          var avatarUrl: String
      }

      @Composable
      fun Bar(barState: BarState) {
      ```

      These APIs are difficult to use together because both the FooState and BarState classes want to be the source of truth for the data they represent. It is often the case that different teams, libraries, or modules do not have the option of agreeing on a single unified type for data that must be shared across systems. These designs combine to form a requirement for potentially error-prone data syncing on the part of the app developer.

      A more flexible approach defines both of these hoisted state types as interfaces, permitting the integrating developer to define one in terms of the other, or both in terms of a third type, preserving single source of truth in their system's state management:

      ```kotlin
      @Stable
      interface FooState {
          val currentPersonData: PersonData
  - id: live-compose-api-guidelines-lines-861-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 861
    endLine: 895
    sha256: 7b0f1979879fb1d5f47914fc0ea5d608afaf5b3d4529ef671909c15680748f9f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
      
          fun setPersonName(name: String)
          fun setPersonAvatarUrl(url: String)
      }

      @Stable
      interface BarState {
          var name: String
          var avatarUrl: String
      }

      class MyState(
          name: String,
          avatarUrl: String
      ) : FooState, BarState {
          override var name by mutableStateOf(name)
          override var avatarUrl by mutableStateOf(avatarUrl)

          override val currentPersonData: PersonData
              get() = PersonData(name, avatarUrl)

          override fun setPersonName(name: String) {
              this.name = name
          }

          override fun setPersonAvatarUrl(url: String) {
              this.avatarUrl = url
          }
      }
      ```

      **Jetpack Compose framework and Library development** SHOULD declare hoisted state types as interfaces to permit custom implementations. If additional standard policy enforcement is necessary, consider an abstract class.

      **Jetpack Compose framework and Library development** SHOULD offer a factory function for a default implementation of hoisted state types sharing the same name as the type. This preserves the same simple API for consumers as a concrete type. Example:
  - id: live-compose-api-guidelines-lines-896-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 896
    endLine: 914
    sha256: 01255c2294f0aad68e3398d418c76409c4c4fd259ed68f79beb81eb22136f8f0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |+
      ```kotlin
      @Stable
      interface FooState {
          // ...
      }

      fun FooState(): FooState = FooStateImpl(...)

      private class FooStateImpl(...) : FooState {
          // ...
      }

      // Usage
      val state = remember { FooState() }
      ```

      **App development** SHOULD prefer simpler concrete types until the abstraction provided by an interface proves necessary. When it does, adding a factory function for a default implementation as outlined above is a source-compatible change that does not require refactoring of usage sites.

  - id: live-compose-api-guidelines-lines-91-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md
    revision: 85adb4710d1b88293d5b912df1c6104e6fe38c41
    path: compose/docs/compose-api-guidelines.md
    startLine: 91
    endLine: 125
    sha256: 8c3f16e82be1b5953ef37e4c14493d40590b85be229ce7532bb56c2d117b4b4f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      enum class Status {
          IDLE,
          BUSY
      }
      ```

      # Compose baseline

      The Compose compiler plugin and runtime establish new language facilities for Kotlin and the means to interact with them. This layer adds a declarative programming model for constructing and managing mutable tree data structures over time. Compose UI is an example of one type of tree that the Compose runtime can manage, but it is not limited to that use.

      This section outlines guidelines for `@Composable` functions and APIs that build on the Compose runtime capabilities. These guidelines apply to all Compose runtime-based APIs, regardless of the managed tree type.

      ## Naming Unit @Composable functions as entities

      **Jetpack Compose framework development and Library development** MUST name any function that returns `Unit` and bears the `@Composable` annotation using `PascalCase`, and the name MUST be that of a noun, not a verb or verb phrase, nor a nouned preposition, adjective or adverb. Nouns MAY be prefixed by descriptive adjectives. This guideline applies whether the function emits UI elements or not.

      **App development** SHOULD follow this same convention.

      ### Why

      Composable functions that return `Unit` are considered _declarative entities_ that can be either _present_ or _absent_ in a composition and therefore follow the naming rules for classes. A composable's presence or absence resulting from the evaluation of its caller's control flow establishes both persistent identity across recompositions and a lifecycle for that persistent identity. This naming convention promotes and reinforces this declarative mental model.

      ### Do

      ```kotlin
      // This function is a descriptive PascalCased noun as a visual UI element
      @Composable
      fun FancyButton(text: String, onClick: () -> Unit) {
      ```

      ### Do

      ```kotlin
      // This function is a descriptive PascalCased noun as a non-visual element
      // with presence in the composition
compose:
  id: live-compose-api-guidelines
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui
  sections:
    - id: live-compose-api-guidelines-lines-1
      title: Compose API guidelines (lines 1–28)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-1-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-126
      title: Compose API guidelines (lines 126–160)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-126-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-161
      title: Compose API guidelines (lines 161–195)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-161-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-196
      title: Compose API guidelines (lines 196–230)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-196-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-231
      title: Compose API guidelines (lines 231–255)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-231-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-256
      title: Compose API guidelines (lines 256–286)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-256-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-287
      title: Compose API guidelines (lines 287–321)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-287-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-29
      title: Compose API guidelines (lines 29–55)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-29-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-322
      title: Compose API guidelines (lines 322–356)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-322-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-357
      title: Compose API guidelines (lines 357–391)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-357-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-392
      title: Compose API guidelines (lines 392–407)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-392-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-408
      title: Compose API guidelines (lines 408–442)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-408-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-443
      title: Compose API guidelines (lines 443–477)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-443-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-478
      title: Compose API guidelines (lines 478–510)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-478-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-511
      title: Compose API guidelines (lines 511–545)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-511-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-546
      title: Compose API guidelines (lines 546–580)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-546-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-56
      title: Compose API guidelines (lines 56–90)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-56-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-581
      title: Compose API guidelines (lines 581–615)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-581-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-616
      title: Compose API guidelines (lines 616–650)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-616-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-651
      title: Compose API guidelines (lines 651–685)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-651-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-686
      title: Compose API guidelines (lines 686–720)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-686-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-721
      title: Compose API guidelines (lines 721–755)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-721-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-756
      title: Compose API guidelines (lines 756–790)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-756-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-791
      title: Compose API guidelines (lines 791–825)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-791-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-826
      title: Compose API guidelines (lines 826–860)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-826-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-861
      title: Compose API guidelines (lines 861–895)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-861-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-896
      title: Compose API guidelines (lines 896–914)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-896-source
      relatedIds: []
    - id: live-compose-api-guidelines-lines-91
      title: Compose API guidelines (lines 91–125)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-api-guidelines-lines-91-source
      relatedIds: []
---

# Compose API guidelines

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/docs/compose-api-guidelines.md

## Compose API guidelines (lines 1–28)

# API Guidelines for Jetpack Compose

## Last updated: March 10, 2021

# Who this document is for

The Compose API guidelines outline the patterns, best practices and prescriptive style guidelines for writing idiomatic Jetpack Compose APIs. As Jetpack Compose code is built in layers, everyone writing code that uses Jetpack Compose is building their own API to consume themselves.

This document assumes a familiarity with Jetpack Compose's runtime APIs including `@Composable`, `remember {}` and `CompositionLocal`.

The requirement level of each of these guidelines is specified using the terms set forth in [RFC2119](https://www.ietf.org/rfc/rfc2119.txt) for each of the following developer audiences. If an audience is not specifically named with a requirement level for a guideline, it should be assumed that the guideline is OPTIONAL for that audience.

## Jetpack Compose framework development

Contributions to the `androidx.compose` libraries and tools generally follow these guidelines to a strict degree in order to promote consistency, setting expectations and examples for consumer code at all layers.

## Library development based on Jetpack Compose

It is expected and desired that an ecosystem of external libraries will come to exist that target Jetpack Compose, exposing a public API of `@Composable` functions and supporting types for consumption by apps and other libraries. While it is desirable for these libraries to follow these guidelines to the same degree as Jetpack Compose framework development would, organizational priorities and local consistency may make it appropriate for some purely stylistic guidelines to be relaxed.

## App development based on Jetpack Compose

App development is often subject to strong organizational priorities and norms as well as requirements to integrate with existing app architecture. This may call for not only stylistic deviation from these guidelines but structural deviation as well. Where possible, alternative approaches for app development will be listed in this document that may be more appropriate in these situations.

# Kotlin style

## Baseline style guidelines


Sources: [live-compose-api-guidelines-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 126–160)

@Composable
fun BackButtonHandler(onBackPressed: () -> Unit) {
```

### Don't

```kotlin
// This function is a noun but is not PascalCased!
@Composable
fun fancyButton(text: String, onClick: () -> Unit) {
```

### Don't

```kotlin
// This function is PascalCased but is not a noun!
@Composable
fun RenderFancyButton(text: String, onClick: () -> Unit) {
```

### Don't

```kotlin
// This function is neither PascalCased nor a noun!
@Composable
fun drawProfileImage(image: ImageAsset) {
```

## Naming @Composable functions that return values

**Jetpack Compose framework development and Library development** MUST follow the standard [Kotlin Coding Conventions for the naming of functions](https://kotlinlang.org/docs/reference/coding-conventions.html#function-names) for any function annotated `@Composable` that returns a value other than `Unit`.

**Jetpack Compose framework development and Library development** MUST NOT use the factory function exemption in the [Kotlin Coding Conventions for the naming of functions](https://kotlinlang.org/docs/reference/coding-conventions.html#function-names) for naming any function annotated `@Composable` as a PascalCase type name matching the function's abstract return type.

### Why

Sources: [live-compose-api-guidelines-lines-126-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 161–195)


While useful and accepted outside of `@Composable` functions, this factory function convention has drawbacks that set inappropriate expectations for callers when used with `@Composable` functions.

Primary motivations for marking a factory function as `@Composable` include using composition to establish a managed lifecycle for the object or using `CompositionLocal`s as inputs to the object's construction. The former implies the use of Compose's `remember {}` API to cache and maintain the object instance across recompositions, which can break caller expectations around a factory operation that reads like a constructor call. (See the next section.) The latter motivation implies unseen inputs that should be expressed in the factory function name.

Additionally, the mental model of `Unit`-returning `@Composable` functions as declarative entities should not be confused with a, "virtual DOM" mental model. Returning values from `@Composable` functions named as `PascalCase` nouns promotes this confusion, and may promote an undesirable style of returning a stateful control surface for a present UI entity that would be better expressed and more useful as a hoisted state object.

More information about state hoisting patterns can be found in the design patterns section of this document.

### Do

```kotlin
// Returns a style based on the current CompositionLocal settings
// This function qualifies where its value comes from
@Composable
fun defaultStyle(): Style {
```

### Don't

```kotlin
// Returns a style based on the current CompositionLocal settings
// This function looks like it's constructing a context-free object!
@Composable
fun Style(): Style {
```

## Naming @Composable functions that remember {} the objects they return

**Jetpack Compose framework development and Library development** MUST prefix any `@Composable` factory function that internally `remember {}`s and returns a mutable object with the prefix `remember`.

**App development** SHOULD follow this same convention.

### Why


Sources: [live-compose-api-guidelines-lines-161-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 196–230)

An object that can change over time and persists across recompositions carries observable side effects that should be clearly communicated to a caller. This also signals that a caller does not need to duplicate a `remember {}` of the object at the call site to attain this persistence.

### Do

```kotlin
// Returns a CoroutineScope that will be cancelled when this call
// leaves the composition
// This function is prefixed with remember to describe its behavior
@Composable
fun rememberCoroutineScope(): CoroutineScope {
```

### Don't

```kotlin
// Returns a CoroutineScope that will be cancelled when this call leaves
// the composition
// This function's name does not suggest automatic cancellation behavior!
@Composable
fun createCoroutineScope(): CoroutineScope {
```

Note that returning an object is not sufficient to consider a function to be a factory function; it must be the function's primary purpose. Consider a `@Composable` function such as `Flow<T>.collectAsState()`; this function's primary purpose is to establish a subscription to a `Flow`; that it `remember {}`s its returned `State<T>` object is incidental.

## Naming CompositionLocals

A `CompositionLocal` is a key into a composition-scoped key-value table. `CompositionLocal`s may be used to provide global-like values to a specific subtree of composition.

**Jetpack Compose framework development and Library development** MUST NOT name `CompositionLocal` keys using "CompositionLocal" or "Local" as a noun suffix. `CompositionLocal` keys should bear a descriptive name based on their value.

**Jetpack Compose framework development and Library development** MAY use "Local" as a prefix for a `CompositionLocal` key name if no other, more descriptive name is suitable.

### Do

```kotlin

Sources: [live-compose-api-guidelines-lines-196-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 231–255)

// "Local" is used here as an adjective, "Theme" is the noun.
val LocalTheme = staticCompositionLocalOf<Theme>()
```

### Don't

```kotlin
// "Local" is used here as a noun!
val ThemeLocal = staticCompositionLocalOf<Theme>()
```

## Stable types

The Compose runtime exposes two annotations that may be used to mark a type or function as _stable_ - safe for optimization by the Compose compiler plugin such that the Compose runtime may skip calls to functions that accept only safe types because their results cannot change unless their inputs change.

The Compose compiler plugin may infer these properties of a type automatically, but interfaces and other types for which stability can not be inferred, only promised, may be explicitly annotated. Collectively these types are called, "stable types."

**`@Immutable`** indicates a type where the value of any properties will **never** change after the object is constructed, and all methods are **referentially transparent**. All Kotlin types that may be used in a `const` expression (primitive types and Strings) are considered `@Immutable`.

**`@Stable`** when applied to a type indicates a type that is **mutable**, but the Compose runtime will be notified if and when any public properties or method behavior would yield different results from a previous invocation. (In practice this notification is backed by the `Snapshot` system via `@Stable` `MutableState` objects returned by `mutableStateOf()`.) Such a type may only back its properties using other `@Stable` or `@Immutable` types.

**Jetpack Compose framework development, Library development and App development** MUST ensure in custom implementations of `.equals()` for `@Stable` types that for any two references `a` and `b` of `@Stable` type `T`, `a.equals(b)` MUST **always** return the same value. This implies that any **future** changes to `a` must also be reflected in `b` and vice versa.

This constraint is always met implicitly if `a === b`; the default reference equality implementation of `.equals()` for objects is always a correct implementation of this contract.


Sources: [live-compose-api-guidelines-lines-231-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 256–286)

**Jetpack Compose framework development and Library development** SHOULD correctly annotate `@Stable` and `@Immutable` types that they expose as part of their public API.

**Jetpack  Compose framework development and Library development** MUST NOT remove the `@Stable` or `@Immutable` annotation from a type if it was declared with one of these annotations in a previous stable release.

**Jetpack Compose framework development and Library development** MUST NOT add the `@Stable` or `@Immutable` annotation to an existing non-final type that was available in a previous stable release without this annotation.

### Why?

`@Stable` and `@Immutable` are behavioral contracts that impact the binary compatibility of code generated by the Compose compiler plugin. Libraries should not declare more restrictive contracts for preexisting non-final types that existing implementations in the wild may not correctly implement, and similarly they may not declare that a library type no longer obeys a previously declared contract that existing code may depend upon.

Implementing the stable contract incorrectly for a type annotated as `@Stable` or `@Immutable` will result in incorrect behavior for `@Composable` functions that accept that type as a parameter or receiver.

## Emit XOR return a value

`@Composable` functions should either emit content into the composition or return a value, but not both. If a composable should offer additional control surfaces to its caller, those control surfaces or callbacks should be provided as parameters to the composable function by the caller.

**Jetpack Compose framework development and Library development** MUST NOT expose any single `@Composable` function that both emits tree nodes and returns a value.

### Why

Emit operations must occur in the order the content is to appear in the composition. Using return values to communicate with the caller restricts the shape of calling code and prevents interactions with other declarative calls that come before it.

### Do

```kotlin
// Emits a text input field element that will call into the inputState
// interface object to request changes
@Composable
fun InputField(inputState: InputState) {
// ...


Sources: [live-compose-api-guidelines-lines-256-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 287–321)

// Communicating with the input field is not order-dependent
val inputState = remember { InputState() }

Button("Clear input", onClick = { inputState.clear() })

InputField(inputState)
```

### Don't

```kotlin
// Emits a text input field element and returns an input value holder
@Composable
fun InputField(): UserInputState {
// ...

// Communicating with the InputField is made difficult
Button("Clear input", onClick = { TODO("???") })
val inputState = InputField()
```

Communicating with a composable by passing parameters forward affords aggregation of several such parameters into types used as parameters to their callers:

```kotlin
interface DetailCardState {
    val actionRailState: ActionRailState
    // ...
}

@Composable
fun DetailCard(state: DetailCardState) {
    Surface {
        // ...
        ActionRail(state.actionRailState)
    }

Sources: [live-compose-api-guidelines-lines-287-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 29–55)

**Jetpack Compose framework development** MUST follow the Kotlin Coding Conventions outlined at https://kotlinlang.org/docs/reference/coding-conventions.html as a baseline with the additional adjustments described below.

**Jetpack Compose Library and app development** SHOULD also follow this same guideline.

### Why

The Kotlin Coding Conventions establish a standard of consistency for the Kotlin ecosystem at large. The additional style guidelines that follow in this document for Jetpack Compose account for Jetpack Compose's language-level extensions, mental models, and intended data flows, establishing consistent conventions and expectations around Compose-specific patterns.

## Singletons, constants, sealed class and enum class values

**Jetpack Compose framework development** MUST name deeply immutable constants following the permitted object declaration convention of `PascalCase` as documented [here](https://kotlinlang.org/docs/reference/coding-conventions.html#property-names) as a replacement for any usage of `CAPITALS_AND_UNDERSCORES`. Enum class values MUST also be named using `PascalCase` as documented in the same section.

**Library development** SHOULD follow this same convention when targeting or extending Jetpack Compose.

**App Development** MAY follow this convention.

### Why

Jetpack Compose discourages the use and creation of singletons or companion object state that cannot be treated as _stable_ over time and across threads, reducing the usefulness of a distinction between singleton objects and other forms of constants. This forms a consistent expectation of API shape for consuming code whether the implementation detail is a top-level `val`, a `companion object`, an `enum class`, or a `sealed class` with nested `object` subclasses. `myFunction(Foo)` and `myFunction(Foo.Bar)` carry the same meaning and intent for calling code regardless of specific implementation details.

Library and app code with a strong existing investment in `CAPITALS_AND_UNDERSCORES` in their codebase MAY opt for local consistency with that pattern instead.

### Do

```kotlin
const val DefaultKeyName = "__defaultKey"


Sources: [live-compose-api-guidelines-lines-29-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 322–356)

}

@Composable
fun ActionRail(state: ActionRailState) {
    // ...
}
```

For more information on this pattern, see the sections on [hoisted state types](#hoisted-state-types) in the Compose API design patterns section below.

# Compose UI API structure

Compose UI is a UI toolkit built on the Compose runtime. This section outlines guidelines for APIs that use and extend the Compose UI toolkit.

## Compose UI elements

A `@Composable` function that emits exactly one Compose UI tree node is called an _element_.

Example:

```kotlin
@Composable
fun SimpleLabel(
    text: String,
    modifier: Modifier = Modifier
) {
```

**Jetpack Compose framework development and Library development** MUST follow all guidelines in this section.

**Jetpack Compose app development** SHOULD follow all guidelines in this section.

### Elements return Unit

Elements MUST emit their root UI node either directly by calling emit() or by calling another Compose UI element function. They MUST NOT return a value. All behavior of the element not available from the state of the composition MUST be provided by parameters passed to the element function.

Sources: [live-compose-api-guidelines-lines-322-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 357–391)


#### Why?

Elements are declarative entities in a Compose UI composition. Their presence or absence in the composition determines whether they appear in the resulting UI. Returning a value is not necessary; any means of controlling the emitted element should be provided as a parameter to the element function, not returned by calling the element function. See the, "hoisted state" section in the Compose API design patterns section of this document for more information.

#### Do

```kotlin
@Composable
fun FancyButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
```

#### Don't

```kotlin
interface ButtonState {
    val clicks: Flow<ClickEvent>
    val measuredSize: Size
}

@Composable
fun FancyButton(
    text: String,
    modifier: Modifier = Modifier
): ButtonState {
```

### Elements accept and respect a Modifier parameter

Element functions MUST accept a parameter of type `Modifier`. This parameter MUST be named "`modifier`" and MUST appear as the first optional parameter in the element function's parameter list. Element functions MUST NOT accept multiple `Modifier` parameters.


Sources: [live-compose-api-guidelines-lines-357-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 392–407)

If the element function's content has a natural minimum size - that is, if it would ever measure with a non-zero size given constraints of minWidth and minHeight of zero - the default value of the `modifier` parameter MUST be `Modifier` - the `Modifier` type's `companion object` that represents the empty `Modifier`. Element functions without a measurable content size (e.g. Canvas, which draws arbitrary user content in the size available) MAY require the `modifier` parameter and omit the default value.

Element functions MUST provide their modifier parameter to the Compose UI node they emit by passing it to the root element function they call. If the element function directly emits a Compose UI layout node, the modifier MUST be provided to the node.

Element functions MAY concatenate additional modifiers to the **end** of the received `modifier` parameter before passing the concatenated modifier chain to the Compose UI node they emit.

Element functions MUST NOT concatenate additional modifiers to the **beginning** of the received modifier parameter before passing the concatenated modifier chain to the Compose UI node they emit.

#### Why?

Modifiers are the standard means of adding external behavior to an element in Compose UI and allow common behavior to be factored out of individual or base element API surfaces. This allows element APIs to be smaller and more focused, as modifiers are used to decorate those elements with standard behavior.

An element function that does not accept a modifier in this standard way does not permit this decoration and motivates consuming code to wrap a call to the element function in an additional Compose UI layout such that the desired modifier can be applied to the wrapper layout instead. This does not prevent the developer behavior of modifying the element, and forces them to write more inefficient UI code with a deeper tree structure to achieve their desired result.

Modifiers occupy the first optional parameter slot to set a consistent expectation for developers that they can always provide a modifier as the final positional parameter to an element call for any given element's common case.


Sources: [live-compose-api-guidelines-lines-392-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 408–442)

See the Compose UI modifiers section below for more details.

#### Do

```kotlin
@Composable
fun FancyButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) = Text(
    text = text,
    modifier = modifier.surface(elevation = 4.dp)
        .clickable(onClick)
        .padding(horizontal = 32.dp, vertical = 16.dp)
)
```

## Compose UI layouts

A Compose UI element that accepts one or more `@Composable` function parameters is called a _layout_.

Example:

```kotlin
@Composable
fun SimpleRow(
    modifier: Modifier = Modifier,
    content: @Composable () -> Unit
) {
```

**Jetpack Compose framework development and Library development** MUST follow all guidelines in this section.

**Jetpack Compose app development** SHOULD follow all guidelines in this section.

Sources: [live-compose-api-guidelines-lines-408-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 443–477)


Layout functions SHOULD use the name "`content`" for a `@Composable` function parameter if they accept only one `@Composable` function parameter.

Layout functions SHOULD use the name "`content`" for their primary or most common `@Composable` function parameter if they accept more than one `@Composable` function parameter.

Layout functions SHOULD place their primary or most common `@Composable` function parameter in the last parameter position to permit the use of Kotlin's trailing lambda syntax for that parameter.

## Compose UI modifiers

A `Modifier` is an immutable, ordered collection of objects that implement the `Modifier.Element` interface. Modifiers are universal decorators for Compose UI elements that may be used to implement and add cross-cutting behavior to elements in an opaque and encapsulated manner. Examples of modifiers include altering element sizing and padding, drawing content beneath or overlapping the element, or listening to touch events within the UI element's bounding box.

**Jetpack Compose framework development and Library development** MUST follow all guidelines in this section.

### Modifier factory functions

Modifier chains are constructed using a fluent builder syntax expressed as Kotlin extension functions that act as factories.

Example:

```kotlin
Modifier.preferredSize(50.dp)
    .backgroundColor(Color.Blue)
    .padding(10.dp)
```

Modifier APIs MUST NOT expose their Modifier.Element interface implementation types.

Modifier APIs MUST be exposed as factory functions following this style:

```kotlin
fun Modifier.myModifier(
    param1: ...,
    paramN: ...
): Modifier = then(MyModifierImpl(param1, ... paramN))
```

Sources: [live-compose-api-guidelines-lines-443-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 478–510)


### Parent data and layout-scoped Modifiers

Android's View system has the concept of LayoutParams - a type of object stored opaquely with a ViewGroup's child view that provides layout instructions specific to the ViewGroup that will measure and position it.

Compose UI modifiers afford a related pattern with parent data (using `ParentDataModifierNode`) and receiver scope objects for layout composable functions. A `ParentDataModifierNode` is a tool for an integrator to provide arguments to a parent layout for each child.

This pattern is useful when a parent layout needs to receive child-specific information to configure its behavior around that child. This allows the parent's API to remain simple and decoupled from the specific children placed inside it. Instead of passing a complex data structure to the parent describing all children, the integrator can provide configuration for each child individually at the call site where the child is defined. For example, `Row` uses `ParentDataModifierNode` for the `weight` modifier, allowing each child to specify how much space it should occupy. This avoids having to pass a list of weights to the `Row` itself.

When using `ParentDataModifierNode`s, follow these guidelines:

**Parent data modifiers MUST be defined on a layout scope**

Parent data modifiers provide a way for a child to give data to a parent layout. To guide users to only provide parent data modifiers to direct children of a matching layout, and to make it clear where the data is being consumed, these modifiers should be defined on a scope object that is only available within the parent's content lambda. They should not be defined as top-level functions that can be used anywhere. This improves API clarity and prevents misuse.

#### Do

```kotlin
// The weight modifier is scoped to a specific interface that is only available
// in the content lambda of the parent.
@LayoutScopeMarker
@Stable
interface MyRowScope {
    fun Modifier.weight(weight: Float): Modifier
}

@Composable
fun MyRow(content: @Composable MyRowScope.() -> Unit) {
    // ...
}

// The weight modifier can only be used inside MyRowScope.
MyRow {

Sources: [live-compose-api-guidelines-lines-478-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 511–545)

    Text("Hello", Modifier.weight(1f)) // weight is available on the receiver scope
}

// This will not compile, as MyRowScope is not present.
Box {
    Text("Hello", Modifier.weight(1f)) // COMPILE ERROR
}
```

#### Don't

```kotlin
// A top-level weight modifier can be used anywhere, creating ambiguity, as it is
// not clear which layout it provides data for.
fun Modifier.weight(weight: Float): Modifier {
    // ...
}

// It's unclear what this weight modifier does in this context, as Box does not
// read any weight parent data.
Box(Modifier.weight(1f)) {
    // ...
}
```

**Parent data modifiers MUST be explicitly provided by a user**

When using parent data there are three entities:

1.  **The parent**: A layout that arranges other components (e.g., `Row`, `Column`).
2.  **The child**: A component placed within a parent (e.g., `Text`, `Image`).
3.  **The integration code / user code**: The end-user code that places child components into a parent layout.

The `ParentDataModifierNode` is a tool for the user code to provide child-specific information to a parent layout. It MUST NOT be used by the child author as an implementation detail to implicitly communicate with a parent that may or may not be present. All parent data must be explicitly provided by the user via a modifier.


Sources: [live-compose-api-guidelines-lines-511-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 546–580)

#### Don't

```kotlin
@Composable
fun ButtonGroup(content: @Composable () -> Unit) {
    // reads parent data to correctly handle child buttons
}

// This component tries to implicitly communicate with a parent by setting
// parent data as an implementation detail to allow for 'automatic' configuration when it is used with the parent. This creates a hidden contract that is not explicit in the API.
@Composable
fun BadButton(modifier: Modifier = Modifier) {
    val buttonGroupId = // ...
    Text(
        "Bad button",
        modifier.then(
            object : ParentDataModifierNode {
                override fun Density.modifyParentData(parentData: Any?) = buttonGroupId
            }
        )
    )
}

// The user may not be aware of this implicit communication, and the
// BadButton will behave unexpectedly when not in a ButtonGroup.
Column {
    BadButton()
}
```

#### Do

```kotlin
// The correct way to do this is for the user to explicitly provide
// the parent data via a modifier exposed by the parent's scope.

Sources: [live-compose-api-guidelines-lines-546-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 56–90)

val StructurallyEqual: ComparisonPolicy = StructurallyEqualsImpl(...)

object ReferenceEqual : ComparisonPolicy {
    // ...
}

sealed class LoadResult<T> {
    object Loading : LoadResult<Nothing>()
    class Done(val result: T) : LoadResult<T>()
    class Error(val cause: Throwable) : LoadResult<Nothing>()
}

enum class Status {
    Idle,
    Busy
}
```

### Don't

```kotlin
const val DEFAULT_KEY_NAME = "__defaultKey"

val STRUCTURALLY_EQUAL: ComparisonPolicy = StructurallyEqualsImpl(...)

object ReferenceEqual : ComparisonPolicy {
    // ...
}

sealed class LoadResult<T> {
    object Loading : LoadResult<Nothing>()
    class Done(val result: T) : LoadResult<T>()
    class Error(val cause: Throwable) : LoadResult<Nothing>()
}


Sources: [live-compose-api-guidelines-lines-56-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 581–615)

ButtonGroup {
    GoodButton(modifier = Modifier.buttonGroupId(1))
}
```

**Parent data MUST flow from the child to the parent**

Parent data is a mechanism for the author of the integration code to provide information from a child, up to a parent. This data flow should be one-directional, from the child to the parent. This data should not flow back down to modify the internals of the child, and instead should be used in place to configure the behavior of the parent. The provided data must not be modified by the child or the parent, it is owned by the user.

**Provided parent data MUST be stateless**

The data passed in a `ParentDataModifierNode` should be raw, stateless configuration for a parent layout. Parent data should avoid internal mutable state. A good mental model is that the data should be serializable.

Parent data should be used to allow a child to provide configuration information used by a parent. Avoid using parent data as a generic communication channel to allow implicitly passing state from a child to a parent. Instead, prefer hoisting state and explicitly providing it to both the parent and child, to allow for better readability, testability, and ownership.

Changing parent data should be driven through recomposition, by creating a new modifier with new data, not through side channels (such as internal state).

#### Do

```kotlin
// The parent data is a simple, immutable float.
// The parent (WeightedRow) uses this to decide how to layout this child.
@LayoutScopeMarker
@Stable
interface WeightScope {
    fun Modifier.weight(weight: Float): Modifier
}

@Composable
fun WeightedRow(
    modifier: Modifier = Modifier,
    content: @Composable WeightScope.() -> Unit
) {
// ...


Sources: [live-compose-api-guidelines-lines-581-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 616–650)

// Usage:
WeightedRow {
    Text("Hello", Modifier.weight(1f))
    Text("World", Modifier.weight(2f))
}
```

#### Don't

```kotlin
// Parent data should not be used to communicate child state up to the parent.
// This creates an implicit, hard-to-trace data flow.
class ChildState(val isExpanded: MutableState<Boolean>)

fun Modifier.childState(state: ChildState): Modifier

// This child component tries to share its internal `isExpanded` state with
// its parent through parent data.
@Composable
fun ExpandingChild() {
    val isExpanded = remember { mutableStateOf(false) }
    Box(
        Modifier
            .childState(ChildState(isExpanded))
            .clickable { isExpanded.value = !isExpanded.value }
    ) {
        // ...
    }
}

// Now there is an implicit contract which is hard to follow and easy to break.
// State should be hoisted instead, and provided explicitly to the parent.
@Composable
fun ParentOfExpandingChild(modifier: Modifier = Modifier) {
    Layout(

Sources: [live-compose-api-guidelines-lines-616-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 651–685)

        content = { ExpandingChild() },
        modifier = modifier
    ) { measurables, constraints ->
        // ...
        val childState = measurables.first().parentData as? ChildState
        val isExpanded = childState?.isExpanded?.value ?: false
        // ... layout based on isExpanded
    }
}
```


# Compose API design patterns

This section outlines patterns for addressing common use cases when designing a Jetpack Compose API.

## Prefer stateless and controlled @Composable functions

In this context, "stateless" refers to `@Composable` functions that retain no state of their own, but instead accept external state parameters that are owned and provided by the caller. "Controlled" refers to the idea that the caller has full control over the state provided to the composable.

### Do

```kotlin
@Composable
fun Checkbox(
    isChecked: Boolean,
    onToggle: () -> Unit
) {
// ...

// Usage: (caller mutates optIn and owns the source of truth)
Checkbox(
    myState.optIn,
    onToggle = { myState.optIn = !myState.optIn }
)

Sources: [live-compose-api-guidelines-lines-651-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 686–720)

```

### Don't

```kotlin
@Composable
fun Checkbox(
    initialValue: Boolean,
    onChecked: (Boolean) -> Unit
) {
    var checkedState by remember { mutableStateOf(initialValue) }
// ...

// Usage: (Checkbox owns the checked state, caller notified of changes)
// Caller cannot easily implement a validation policy.
Checkbox(false, onToggled = { callerCheckedState = it })
```

## Separate state and events

Compose's `mutableStateOf()` value holders are observable through the `Snapshot` system and can notify observers of changes. This is the primary mechanism for requesting recomposition, relayout, or redraw of a Compose UI. Working effectively with observable state requires acknowledging the distinction between _state_ and _events_.

An observable _event_ happens at a point in time and is discarded. All registered observers at the time the event occurred are notified. All individual events in a stream are assumed to be relevant and may build on one another; repeated equal events have meaning and therefore a registered observer must observe all events without skipping.

Observable _state_ raises change _events_ when the state changes from one value to a new, unequal value. State change events are _conflated;_ only the most recent state matters. Observers of state changes must therefore be _idempotent;_ given the same state value the observer should produce the same result. It is valid for a state observer to both skip intermediate states as well as run multiple times for the same state and the result should be the same.

Compose operates on _state_ as input, not _events_. Composable functions are _state observers_ where both the function parameters and any `mutableStateOf()` value holders that are read during execution are inputs.

## Hoisted state types

A pattern of stateless parameters and multiple event callback parameters will eventually reach a point of scale where it becomes unwieldy. As a composable function's parameter list grows it may become appropriate to factor a collection of state and callbacks into an interface, allowing a caller to provide a cohesive policy object as a unit.

### Before

```kotlin

Sources: [live-compose-api-guidelines-lines-686-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 721–755)

@Composable
fun VerticalScroller(
    scrollPosition: Int,
    scrollRange: Int,
    onScrollPositionChange: (Int) -> Unit,
    onScrollRangeChange: (Int) -> Unit
) {
```

### After

```kotlin
@Stable
interface VerticalScrollerState {
    var scrollPosition: Int
    var scrollRange: Int
}

@Composable
fun VerticalScroller(
    verticalScrollerState: VerticalScrollerState
) {
```

In the example above, an implementation of `VerticalScrollerState` is able to use custom get/set behaviors of the related `var` properties to apply policy or delegate storage of the state itself elsewhere.

**Jetpack Compose framework and Library development** SHOULD declare hoisted state types for collecting and grouping interrelated policy. The VerticalScrollerState example above illustrates such a dependency between the scrollPosition and scrollRange properties; to maintain internal consistency such a state object should clamp scrollPosition into the valid range during set attempts. (Or otherwise report an error.) These properties should be grouped as handling their consistency involves handling all of them together.

**Jetpack Compose framework and Library development** SHOULD declare hoisted state types as `@Stable` and correctly implement the `@Stable` contract.

**Jetpack Compose framework and Library development** SHOULD name hoisted state types that are specific to a given composable function as the composable function's name suffixed by, "`State`".

## Default policies through hoisted state objects

Custom implementations or even external ownership of these policy objects are often not required. By using Kotlin's default arguments, Compose's `remember {}` API, and the Kotlin "extension constructor" pattern, an API can provide a default state handling policy for simple usage while permitting more sophisticated usage when desired.

Sources: [live-compose-api-guidelines-lines-721-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 756–790)


### Example:

```kotlin
fun VerticalScrollerState(): VerticalScrollerState =
    VerticalScrollerStateImpl()

private class VerticalScrollerStateImpl(
    scrollPosition: Int = 0,
    scrollRange: Int = 0
) : VerticalScrollerState {
    private var _scrollPosition by
        mutableStateOf(scrollPosition, structuralEqualityPolicy())

    override var scrollPosition: Int
        get() = _scrollPosition
        set(value) {
            _scrollPosition = value.coerceIn(0, scrollRange)
        }

    private var _scrollRange by
        mutableStateOf(scrollRange, structuralEqualityPolicy())

    override var scrollRange: Int
        get() = _scrollRange
        set(value) {
            require(value >= 0) { "$value must be > 0" }
            _scrollRange = value
            scrollPosition = scrollPosition
        }
}

@Composable
fun VerticalScroller(
    verticalScrollerState: VerticalScrollerState =

Sources: [live-compose-api-guidelines-lines-756-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 791–825)

        remember { VerticalScrollerState() }
) {
```

**Jetpack Compose framework and Library development** SHOULD declare hoisted state types as interfaces instead of abstract or open classes if they are not declared as final classes.

When designing an open or abstract class to be properly extensible for these use cases it is easy to create hidden requirements of state synchronization for internal consistency that are difficult (or impossible) for an extending developer to preserve. Using an interface that can be freely implemented strongly discourages private contracts between composable functions and hoisted state objects by way of Kotlin internal-scoped properties or functionality.

**Jetpack Compose framework and Library development** SHOULD provide default state implementations remembered as default arguments. State objects MAY be required parameters if the composable cannot function if the state object is not configured by the caller.

**Jetpack Compose framework and Library development** MUST NOT use `null` as a sentinel indicating that the composable function should internally `remember {}` its own state. This can create accidental inconsistent or unexpected behavior if `null` has a meaningful interpretation for the caller and is provided to the composable function by mistake.

### Do

```kotlin
@Composable
fun VerticalScroller(
    verticalScrollerState: VerticalScrollerState =
        remember { VerticalScrollerState() }
) {
```

### Don't

```kotlin
// Null as a default can cause unexpected behavior if the input parameter
// changes between null and non-null.
@Composable
fun VerticalScroller(
    verticalScrollerState: VerticalScrollerState? = null
) {
    val realState = verticalScrollerState ?:
        remember { VerticalScrollerState() }
```


Sources: [live-compose-api-guidelines-lines-791-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 826–860)

## Extensibility of hoisted state types

Hoisted state types often implement policy and validation that impact behavior for a composable function that accepts it. Concrete and especially final hoisted state types imply containment and ownership of the source of truth that the state object appeals to.

In extreme cases this can defeat the benefits of reactive UI API designs by creating multiple sources of truth, necessitating app code to synchronize data across multiple objects. Consider the following:

```kotlin
// Defined by another team or library
data class PersonData(val name: String, val avatarUrl: String)

class FooState {
    val currentPersonData: PersonData

    fun setPersonName(name: String)
    fun setPersonAvatarUrl(url: String)
}

// Defined by the UI layer, by yet another team
class BarState {
    var name: String
    var avatarUrl: String
}

@Composable
fun Bar(barState: BarState) {
```

These APIs are difficult to use together because both the FooState and BarState classes want to be the source of truth for the data they represent. It is often the case that different teams, libraries, or modules do not have the option of agreeing on a single unified type for data that must be shared across systems. These designs combine to form a requirement for potentially error-prone data syncing on the part of the app developer.

A more flexible approach defines both of these hoisted state types as interfaces, permitting the integrating developer to define one in terms of the other, or both in terms of a third type, preserving single source of truth in their system's state management:

```kotlin
@Stable
interface FooState {
    val currentPersonData: PersonData

Sources: [live-compose-api-guidelines-lines-826-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 861–895)


    fun setPersonName(name: String)
    fun setPersonAvatarUrl(url: String)
}

@Stable
interface BarState {
    var name: String
    var avatarUrl: String
}

class MyState(
    name: String,
    avatarUrl: String
) : FooState, BarState {
    override var name by mutableStateOf(name)
    override var avatarUrl by mutableStateOf(avatarUrl)

    override val currentPersonData: PersonData
        get() = PersonData(name, avatarUrl)

    override fun setPersonName(name: String) {
        this.name = name
    }

    override fun setPersonAvatarUrl(url: String) {
        this.avatarUrl = url
    }
}
```

**Jetpack Compose framework and Library development** SHOULD declare hoisted state types as interfaces to permit custom implementations. If additional standard policy enforcement is necessary, consider an abstract class.

**Jetpack Compose framework and Library development** SHOULD offer a factory function for a default implementation of hoisted state types sharing the same name as the type. This preserves the same simple API for consumers as a concrete type. Example:


Sources: [live-compose-api-guidelines-lines-861-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 896–914)

```kotlin
@Stable
interface FooState {
    // ...
}

fun FooState(): FooState = FooStateImpl(...)

private class FooStateImpl(...) : FooState {
    // ...
}

// Usage
val state = remember { FooState() }
```

**App development** SHOULD prefer simpler concrete types until the abstraction provided by an interface proves necessary. When it does, adding a factory function for a default implementation as outlined above is a source-compatible change that does not require refactoring of usage sites.



Sources: [live-compose-api-guidelines-lines-896-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)

## Compose API guidelines (lines 91–125)

enum class Status {
    IDLE,
    BUSY
}
```

# Compose baseline

The Compose compiler plugin and runtime establish new language facilities for Kotlin and the means to interact with them. This layer adds a declarative programming model for constructing and managing mutable tree data structures over time. Compose UI is an example of one type of tree that the Compose runtime can manage, but it is not limited to that use.

This section outlines guidelines for `@Composable` functions and APIs that build on the Compose runtime capabilities. These guidelines apply to all Compose runtime-based APIs, regardless of the managed tree type.

## Naming Unit @Composable functions as entities

**Jetpack Compose framework development and Library development** MUST name any function that returns `Unit` and bears the `@Composable` annotation using `PascalCase`, and the name MUST be that of a noun, not a verb or verb phrase, nor a nouned preposition, adjective or adverb. Nouns MAY be prefixed by descriptive adjectives. This guideline applies whether the function emits UI elements or not.

**App development** SHOULD follow this same convention.

### Why

Composable functions that return `Unit` are considered _declarative entities_ that can be either _present_ or _absent_ in a composition and therefore follow the naming rules for classes. A composable's presence or absence resulting from the evaluation of its caller's control flow establishes both persistent identity across recompositions and a lifecycle for that persistent identity. This naming convention promotes and reinforces this declarative mental model.

### Do

```kotlin
// This function is a descriptive PascalCased noun as a visual UI element
@Composable
fun FancyButton(text: String, onClick: () -> Unit) {
```

### Do

```kotlin
// This function is a descriptive PascalCased noun as a non-visual element
// with presence in the composition

Sources: [live-compose-api-guidelines-lines-91-source](https://android.googlesource.com/platform/frameworks/support/+/85adb4710d1b88293d5b912df1c6104e6fe38c41/compose/docs/compose-api-guidelines.md)
