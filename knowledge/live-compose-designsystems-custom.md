---
type: reference
title: Custom design systems in Compose
description: "Public source: https://developer.android.com/develop/ui/compose/designsystems/custom"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-designsystems-custom-extending-material-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/designsystems/custom#extending-material
    revision: web:compose-designsystems-custom:content@sha256:93f0171f387644e5dd79a5bd6ea0714a6909f5013f9dd7350d9a1ea89fadb1af
    sha256: 64fc69b49e6386af3c1c8c7accadad32a2ea9477e3eec31f00e89833a148a28a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose Material closely models Material Theming to make it straightforward and type-safe to follow the Material guidelines. However, it's possible to extend the color, typography, and shape sets with additional values. The simplest approach is to add extension properties:

      // Use with MaterialTheme.colorScheme.snackbarAction
      val ColorScheme.snackbarAction: Color
          @Composable
          get() = if (isSystemInDarkTheme()) Red300 else Red700

      // Use with MaterialTheme.typography.textFieldInput
      val Typography.textFieldInput: TextStyle
          get() = TextStyle(/* ... */)

      // Use with MaterialTheme.shapes.card
      val Shapes.card: Shape
          get() = RoundedCornerShape(size = 20.dp)CustomDesignSystem.kt

      This provides consistency with MaterialTheme usage APIs. An example of this defined by Compose itself is surfaceColorAtElevation, which determines the surface color that should be used depending on the elevation.

      Another approach is to define an extended theme that "wraps" MaterialTheme and its values.

      Suppose you want to add two additional colors — caution and onCaution, a yellow color used for actions that are semi-dangerous — whilst keeping the existing Material colors:

      @Immutable
      data class ExtendedColors(
          val caution: Color,
          val onCaution: Color
      )

      val LocalExtendedColors = staticCompositionLocalOf {
          ExtendedColors(
              caution = Color.Unspecified,
              onCaution = Color.Unspecified
          )
      }

      @Composable
      fun ExtendedTheme(
          /* ... */
          content: @Composable () -> Unit
      ) {
          val extendedColors = ExtendedColors(
              caution = Color(0xFFFFCC02),
              onCaution = Color(0xFF2C2D30)
          )
          CompositionLocalProvider(LocalExtendedColors provides extendedColors) {
              MaterialTheme(
                  /* colors = ..., typography = ..., shapes = ... */
                  content = content
              )
          }
      }

      // Use with eg. ExtendedTheme.colors.caution
      object ExtendedTheme {
          val colors: ExtendedColors
              @Composable
              get() = LocalExtendedColors.current
      }CustomDesignSystem.kt

      This is similar to MaterialTheme usage APIs. It also supports multiple themes as you can nest ExtendedThemes in the same way as MaterialTheme.
  - id: live-compose-designsystems-custom-extending-using-material-components-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/designsystems/custom#extending-using-material-components
    revision: web:compose-designsystems-custom:content@sha256:93f0171f387644e5dd79a5bd6ea0714a6909f5013f9dd7350d9a1ea89fadb1af
    sha256: 93c248b813cfc148c4fdc9c21ee26074c3acb22e9a901059cd45ebb8049790d8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When extending Material Theming, existing MaterialTheme values are maintained and Material components still have reasonable defaults.

      If you want to use extended values in components, wrap them in your own composable functions, directly setting the values you want to alter, and exposing others as parameters to the containing composable:

      @Composable
      fun ExtendedButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          content: @Composable RowScope.() -> Unit
      ) {
          Button(
              colors = ButtonDefaults.buttonColors(
                  containerColor = ExtendedTheme.colors.caution,
                  contentColor = ExtendedTheme.colors.onCaution
                  /* Other colors use values from MaterialTheme */
              ),
              onClick = onClick,
              modifier = modifier,
              content = content
          )
      }CustomDesignSystem.kt

      You would then replace usages of Button with ExtendedButton where appropriate.

      @Composable
      fun ExtendedApp() {
          ExtendedTheme {
              /*...*/
              ExtendedButton(onClick = { /* ... */ }) {
                  /* ... */
              }
          }
      }CustomDesignSystem.kt
  - id: live-compose-designsystems-custom-implementing-fully-custom-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/designsystems/custom#implementing-fully-custom
    revision: web:compose-designsystems-custom:content@sha256:93f0171f387644e5dd79a5bd6ea0714a6909f5013f9dd7350d9a1ea89fadb1af
    sha256: 609741e48c763b3315d6e1991ed166db7522ba8fa42d0c9ece845c9bba9baa65
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      default = 4.dp,
              pressed = 8.dp
          )
          CompositionLocalProvider(
              LocalCustomColors provides customColors,
              LocalCustomTypography provides customTypography,
              LocalCustomElevation provides customElevation,
              content = content
          )
      }

      // Use with eg. CustomTheme.elevation.small
      object CustomTheme {
          val colors: CustomColors
              @Composable
              get() = LocalCustomColors.current
          val typography: CustomTypography
              @Composable
              get() = LocalCustomTypography.current
          val elevation: CustomElevation
              @Composable
              get() = LocalCustomElevation.current
      }CustomDesignSystem.kt
  - id: live-compose-designsystems-custom-implementing-fully-custom-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/designsystems/custom#implementing-fully-custom
    revision: web:compose-designsystems-custom:content@sha256:93f0171f387644e5dd79a5bd6ea0714a6909f5013f9dd7350d9a1ea89fadb1af
    sha256: ec80a2bb9c81ed0d4b1ceb66efe85bf5f0e264f3c173cc284608762f90dd9776
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You may want to replace Material Theming with a fully custom design system. Consider that MaterialTheme provides the following systems:

      ColorScheme, Typography, and Shapes: Material Theming systems

      TextSelectionColors: Colors used for text selection by Text and TextField

      ripple, provided as LocalIndication: Material implementation of Indication

      If you want to continue using Material components, you must replace some of these systems in your custom themes or handle the systems in your components to avoid unwanted behavior.

      However, design systems are not limited to the concepts Material relies on. You can modify existing systems and introduce entirely new ones — with new classes and types — to make other concepts compatible with themes.

      In the following code, we model a custom color system that includes gradients (List<Color>), include a type system, introduce a new elevation system, and exclude other systems provided by MaterialTheme:

      @Immutable
      data class CustomColors(
          val content: Color,
          val component: Color,
          val background: List<Color>
      )

      @Immutable
      data class CustomTypography(
          val body: TextStyle,
          val title: TextStyle
      )

      @Immutable
      data class CustomElevation(
          val default: Dp,
          val pressed: Dp
      )

      val LocalCustomColors = staticCompositionLocalOf {
          CustomColors(
              content = Color.Unspecified,
              component = Color.Unspecified,
              background = emptyList()
          )
      }
      val LocalCustomTypography = staticCompositionLocalOf {
          CustomTypography(
              body = TextStyle.Default,
              title = TextStyle.Default
          )
      }
      val LocalCustomElevation = staticCompositionLocalOf {
          CustomElevation(
              default = Dp.Unspecified,
              pressed = Dp.Unspecified
          )
      }

      @Composable
      fun CustomTheme(
          /* ... */
          content: @Composable () -> Unit
      ) {
          val customColors = CustomColors(
              content = Color(0xFFDD0D3C),
              component = Color(0xFFC20029),
              background = listOf(Color.White, Color(0xFFF8BBD0))
          )
          val customTypography = CustomTypography(
              body = TextStyle(fontSize = 16.sp),
              title = TextStyle(fontSize = 32.sp)
          )
          val customElevation = CustomElevation(
  - id: live-compose-designsystems-custom-implementing-using-material-components-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/designsystems/custom#implementing-using-material-components
    revision: web:compose-designsystems-custom:content@sha256:93f0171f387644e5dd79a5bd6ea0714a6909f5013f9dd7350d9a1ea89fadb1af
    sha256: 8cc042a09bb5fabc9a686468514cc4e531ca25553f5fd4a97a30cb8b9e14506a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When no MaterialTheme is present, using Material components as-is will result in unwanted Material color, type, and shape values and indication behavior.

      If you want to use custom values in components, wrap them in your own composable functions, directly setting the values for the relevant system, and exposing others as parameters to the containing composable.

      We recommend that you access values you set from your custom theme. Alternatively, if your theme doesn't provide Color, TextStyle, Shape, or other systems, you can hardcode them.

      @Composable
      fun CustomButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          content: @Composable RowScope.() -> Unit
      ) {
          Button(
              colors = ButtonDefaults.buttonColors(
                  containerColor = CustomTheme.colors.component,
                  contentColor = CustomTheme.colors.content,
                  disabledContainerColor = CustomTheme.colors.content
                      .copy(alpha = 0.12f)
                      .compositeOver(CustomTheme.colors.component),
                  disabledContentColor = CustomTheme.colors.content
                      .copy(alpha = 0.38f)

              ),
              shape = ButtonShape,
              elevation = ButtonDefaults.elevatedButtonElevation(
                  defaultElevation = CustomTheme.elevation.default,
                  pressedElevation = CustomTheme.elevation.pressed
                  /* disabledElevation = 0.dp */
              ),
              onClick = onClick,
              modifier = modifier,
              content = {
                  ProvideTextStyle(
                      value = CustomTheme.typography.body
                  ) {
                      content()
                  }
              }
          )
      }

      val ButtonShape = RoundedCornerShape(percent = 50)CustomDesignSystem.kt

      If you've introduced new class types — such as List<Color> to represent gradients — then it may be better to implement components from scratch instead of wrapping them. For an example, take a look at JetsnackButton from the Jetsnack sample.
  - id: live-compose-designsystems-custom-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/designsystems/custom#main-content
    revision: web:compose-designsystems-custom:content@sha256:93f0171f387644e5dd79a5bd6ea0714a6909f5013f9dd7350d9a1ea89fadb1af
    sha256: 6aedd70d9bdfa0cd93643af16d3871bc754376bf6879b07dd5a13aac72bfd1cc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      While Material is our recommended design system and Jetpack Compose ships an implementation of Material, you are not forced to use it. Material is built entirely on public APIs, so it's possible to create your own design system in the same manner.

      There are several approaches you might take:

      Extend MaterialTheme with additional theming values.

      Replace one or more Material systems — ColorScheme, Typography, or Shapes — with custom implementations while keeping the others.

      Implement a fully custom design system to replace MaterialTheme.

      You may also want to continue using Material components with a custom design system. It's possible to do this but there are things to keep in mind to suit the approach you've taken.

      To learn more about the lower-level constructs and APIs used by MaterialTheme and custom design systems, check out the Anatomy of a theme in Compose guide.
  - id: live-compose-designsystems-custom-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/designsystems/custom#recommended_for_you
    revision: web:compose-designsystems-custom:content@sha256:93f0171f387644e5dd79a5bd6ea0714a6909f5013f9dd7350d9a1ea89fadb1af
    sha256: fda77826b45943aed702b89b494c9bdebe54cd2a32061558399f18645000c897
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Material Design 3 in Compose

      Migrate from Material 2 to Material 3 in Compose

      Anatomy of a theme in Compose
  - id: live-compose-designsystems-custom-replacing-systems-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/designsystems/custom#replacing-systems
    revision: web:compose-designsystems-custom:content@sha256:93f0171f387644e5dd79a5bd6ea0714a6909f5013f9dd7350d9a1ea89fadb1af
    sha256: 8a78b9dd53c2ad4b1b3d343ebd0c402c38fc5e29634b1ee96286873d26dbb294
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Instead of extending Material Theming, you may want to replace one or more systems — ColorScheme, Typography, or Shapes — with a custom implementation, while maintaining the others.

      Suppose you want to replace the type and shape systems while keeping the color system:

      @Immutable
      data class ReplacementTypography(
          val body: TextStyle,
          val title: TextStyle
      )

      @Immutable
      data class ReplacementShapes(
          val component: Shape,
          val surface: Shape
      )

      val LocalReplacementTypography = staticCompositionLocalOf {
          ReplacementTypography(
              body = TextStyle.Default,
              title = TextStyle.Default
          )
      }
      val LocalReplacementShapes = staticCompositionLocalOf {
          ReplacementShapes(
              component = RoundedCornerShape(ZeroCornerSize),
              surface = RoundedCornerShape(ZeroCornerSize)
          )
      }

      @Composable
      fun ReplacementTheme(
          /* ... */
          content: @Composable () -> Unit
      ) {
          val replacementTypography = ReplacementTypography(
              body = TextStyle(fontSize = 16.sp),
              title = TextStyle(fontSize = 32.sp)
          )
          val replacementShapes = ReplacementShapes(
              component = RoundedCornerShape(percent = 50),
              surface = RoundedCornerShape(size = 40.dp)
          )
          CompositionLocalProvider(
              LocalReplacementTypography provides replacementTypography,
              LocalReplacementShapes provides replacementShapes
          ) {
              MaterialTheme(
                  /* colors = ... */
                  content = content
              )
          }
      }

      // Use with eg. ReplacementTheme.typography.body
      object ReplacementTheme {
          val typography: ReplacementTypography
              @Composable
              get() = LocalReplacementTypography.current
          val shapes: ReplacementShapes
              @Composable
              get() = LocalReplacementShapes.current
      }CustomDesignSystem.kt
  - id: live-compose-designsystems-custom-replacing-using-material-components-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/designsystems/custom#replacing-using-material-components
    revision: web:compose-designsystems-custom:content@sha256:93f0171f387644e5dd79a5bd6ea0714a6909f5013f9dd7350d9a1ea89fadb1af
    sha256: 86c0982e28ace45128fbac6fbb3e2e3df40030db0926b0b95454c2a3172b10cc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When one or more systems of MaterialTheme have been replaced, using Material components as-is may result in unwanted Material color, type, or shape values.

      If you want to use replacement values in components, wrap them in your own composable functions, directly setting the values for the relevant system, and exposing others as parameters to the containing composable.

      @Composable
      fun ReplacementButton(
          onClick: () -> Unit,
          modifier: Modifier = Modifier,
          content: @Composable RowScope.() -> Unit
      ) {
          Button(
              shape = ReplacementTheme.shapes.component,
              onClick = onClick,
              modifier = modifier,
              content = {
                  ProvideTextStyle(
                      value = ReplacementTheme.typography.body
                  ) {
                      content()
                  }
              }
          )
      }CustomDesignSystem.kt

      You would then replace usages of Button with ReplacementButton where appropriate.

      @Composable
      fun ReplacementApp() {
          ReplacementTheme {
              /*...*/
              ReplacementButton(onClick = { /* ... */ }) {
                  /* ... */
              }
          }
      }CustomDesignSystem.kt
compose:
  id: live-compose-designsystems-custom
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.CompositionLocalProvider
  sections:
    - id: live-compose-designsystems-custom-extending-material
      title: Extend Material Theming
      aliases:
        - androidx.compose.runtime.CompositionLocalProvider
        - androidx.compose.runtime.staticCompositionLocalOf
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-designsystems-custom-extending-material-source
      relatedIds: []
    - id: live-compose-designsystems-custom-extending-using-material-components
      title: Use Material components
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-designsystems-custom-extending-using-material-components-source
      relatedIds: []
    - id: live-compose-designsystems-custom-implementing-fully-custom
      title: Implement a fully custom design system
      aliases:
        - androidx.compose.runtime.staticCompositionLocalOf
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-designsystems-custom-implementing-fully-custom-source
      relatedIds: []
    - id: live-compose-designsystems-custom-implementing-fully-custom-2
      title: Implement a fully custom design system
      aliases:
        - androidx.compose.runtime.CompositionLocalProvider
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-designsystems-custom-implementing-fully-custom-2-source
      relatedIds: []
    - id: live-compose-designsystems-custom-implementing-using-material-components
      title: Use Material components
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-designsystems-custom-implementing-using-material-components-source
      relatedIds: []
    - id: live-compose-designsystems-custom-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-designsystems-custom-main-content-source
      relatedIds: []
    - id: live-compose-designsystems-custom-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-designsystems-custom-recommended-for-you-source
      relatedIds: []
    - id: live-compose-designsystems-custom-replacing-systems
      title: Replace Material subsystems
      aliases:
        - androidx.compose.runtime.CompositionLocalProvider
        - androidx.compose.runtime.staticCompositionLocalOf
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-designsystems-custom-replacing-systems-source
      relatedIds: []
    - id: live-compose-designsystems-custom-replacing-using-material-components
      title: Use Material components
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-designsystems-custom-replacing-using-material-components-source
      relatedIds: []
---

# Custom design systems in Compose

Public source: https://developer.android.com/develop/ui/compose/designsystems/custom

## Extend Material Theming

Compose Material closely models Material Theming to make it straightforward and type-safe to follow the Material guidelines. However, it's possible to extend the color, typography, and shape sets with additional values. The simplest approach is to add extension properties:

// Use with MaterialTheme.colorScheme.snackbarAction
val ColorScheme.snackbarAction: Color
    @Composable
    get() = if (isSystemInDarkTheme()) Red300 else Red700

// Use with MaterialTheme.typography.textFieldInput
val Typography.textFieldInput: TextStyle
    get() = TextStyle(/* ... */)

// Use with MaterialTheme.shapes.card
val Shapes.card: Shape
    get() = RoundedCornerShape(size = 20.dp)CustomDesignSystem.kt

This provides consistency with MaterialTheme usage APIs. An example of this defined by Compose itself is surfaceColorAtElevation, which determines the surface color that should be used depending on the elevation.

Another approach is to define an extended theme that "wraps" MaterialTheme and its values.

Suppose you want to add two additional colors — caution and onCaution, a yellow color used for actions that are semi-dangerous — whilst keeping the existing Material colors:

@Immutable
data class ExtendedColors(
    val caution: Color,
    val onCaution: Color
)

val LocalExtendedColors = staticCompositionLocalOf {
    ExtendedColors(
        caution = Color.Unspecified,
        onCaution = Color.Unspecified
    )
}

@Composable
fun ExtendedTheme(
    /* ... */
    content: @Composable () -> Unit
) {
    val extendedColors = ExtendedColors(
        caution = Color(0xFFFFCC02),
        onCaution = Color(0xFF2C2D30)
    )
    CompositionLocalProvider(LocalExtendedColors provides extendedColors) {
        MaterialTheme(
            /* colors = ..., typography = ..., shapes = ... */
            content = content
        )
    }
}

// Use with eg. ExtendedTheme.colors.caution
object ExtendedTheme {
    val colors: ExtendedColors
        @Composable
        get() = LocalExtendedColors.current
}CustomDesignSystem.kt

This is similar to MaterialTheme usage APIs. It also supports multiple themes as you can nest ExtendedThemes in the same way as MaterialTheme.

Sources: [live-compose-designsystems-custom-extending-material-source](https://developer.android.com/develop/ui/compose/designsystems/custom#extending-material)

## Use Material components

When extending Material Theming, existing MaterialTheme values are maintained and Material components still have reasonable defaults.

If you want to use extended values in components, wrap them in your own composable functions, directly setting the values you want to alter, and exposing others as parameters to the containing composable:

@Composable
fun ExtendedButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    content: @Composable RowScope.() -> Unit
) {
    Button(
        colors = ButtonDefaults.buttonColors(
            containerColor = ExtendedTheme.colors.caution,
            contentColor = ExtendedTheme.colors.onCaution
            /* Other colors use values from MaterialTheme */
        ),
        onClick = onClick,
        modifier = modifier,
        content = content
    )
}CustomDesignSystem.kt

You would then replace usages of Button with ExtendedButton where appropriate.

@Composable
fun ExtendedApp() {
    ExtendedTheme {
        /*...*/
        ExtendedButton(onClick = { /* ... */ }) {
            /* ... */
        }
    }
}CustomDesignSystem.kt

Sources: [live-compose-designsystems-custom-extending-using-material-components-source](https://developer.android.com/develop/ui/compose/designsystems/custom#extending-using-material-components)

## Implement a fully custom design system

You may want to replace Material Theming with a fully custom design system. Consider that MaterialTheme provides the following systems:

ColorScheme, Typography, and Shapes: Material Theming systems

TextSelectionColors: Colors used for text selection by Text and TextField

ripple, provided as LocalIndication: Material implementation of Indication

If you want to continue using Material components, you must replace some of these systems in your custom themes or handle the systems in your components to avoid unwanted behavior.

However, design systems are not limited to the concepts Material relies on. You can modify existing systems and introduce entirely new ones — with new classes and types — to make other concepts compatible with themes.

In the following code, we model a custom color system that includes gradients (List<Color>), include a type system, introduce a new elevation system, and exclude other systems provided by MaterialTheme:

@Immutable
data class CustomColors(
    val content: Color,
    val component: Color,
    val background: List<Color>
)

@Immutable
data class CustomTypography(
    val body: TextStyle,
    val title: TextStyle
)

@Immutable
data class CustomElevation(
    val default: Dp,
    val pressed: Dp
)

val LocalCustomColors = staticCompositionLocalOf {
    CustomColors(
        content = Color.Unspecified,
        component = Color.Unspecified,
        background = emptyList()
    )
}
val LocalCustomTypography = staticCompositionLocalOf {
    CustomTypography(
        body = TextStyle.Default,
        title = TextStyle.Default
    )
}
val LocalCustomElevation = staticCompositionLocalOf {
    CustomElevation(
        default = Dp.Unspecified,
        pressed = Dp.Unspecified
    )
}

@Composable
fun CustomTheme(
    /* ... */
    content: @Composable () -> Unit
) {
    val customColors = CustomColors(
        content = Color(0xFFDD0D3C),
        component = Color(0xFFC20029),
        background = listOf(Color.White, Color(0xFFF8BBD0))
    )
    val customTypography = CustomTypography(
        body = TextStyle(fontSize = 16.sp),
        title = TextStyle(fontSize = 32.sp)
    )
    val customElevation = CustomElevation(

Sources: [live-compose-designsystems-custom-implementing-fully-custom-source](https://developer.android.com/develop/ui/compose/designsystems/custom#implementing-fully-custom)

## Implement a fully custom design system

default = 4.dp,
        pressed = 8.dp
    )
    CompositionLocalProvider(
        LocalCustomColors provides customColors,
        LocalCustomTypography provides customTypography,
        LocalCustomElevation provides customElevation,
        content = content
    )
}

// Use with eg. CustomTheme.elevation.small
object CustomTheme {
    val colors: CustomColors
        @Composable
        get() = LocalCustomColors.current
    val typography: CustomTypography
        @Composable
        get() = LocalCustomTypography.current
    val elevation: CustomElevation
        @Composable
        get() = LocalCustomElevation.current
}CustomDesignSystem.kt

Sources: [live-compose-designsystems-custom-implementing-fully-custom-2-source](https://developer.android.com/develop/ui/compose/designsystems/custom#implementing-fully-custom)

## Use Material components

When no MaterialTheme is present, using Material components as-is will result in unwanted Material color, type, and shape values and indication behavior.

If you want to use custom values in components, wrap them in your own composable functions, directly setting the values for the relevant system, and exposing others as parameters to the containing composable.

We recommend that you access values you set from your custom theme. Alternatively, if your theme doesn't provide Color, TextStyle, Shape, or other systems, you can hardcode them.

@Composable
fun CustomButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    content: @Composable RowScope.() -> Unit
) {
    Button(
        colors = ButtonDefaults.buttonColors(
            containerColor = CustomTheme.colors.component,
            contentColor = CustomTheme.colors.content,
            disabledContainerColor = CustomTheme.colors.content
                .copy(alpha = 0.12f)
                .compositeOver(CustomTheme.colors.component),
            disabledContentColor = CustomTheme.colors.content
                .copy(alpha = 0.38f)

        ),
        shape = ButtonShape,
        elevation = ButtonDefaults.elevatedButtonElevation(
            defaultElevation = CustomTheme.elevation.default,
            pressedElevation = CustomTheme.elevation.pressed
            /* disabledElevation = 0.dp */
        ),
        onClick = onClick,
        modifier = modifier,
        content = {
            ProvideTextStyle(
                value = CustomTheme.typography.body
            ) {
                content()
            }
        }
    )
}

val ButtonShape = RoundedCornerShape(percent = 50)CustomDesignSystem.kt

If you've introduced new class types — such as List<Color> to represent gradients — then it may be better to implement components from scratch instead of wrapping them. For an example, take a look at JetsnackButton from the Jetsnack sample.

Sources: [live-compose-designsystems-custom-implementing-using-material-components-source](https://developer.android.com/develop/ui/compose/designsystems/custom#implementing-using-material-components)

## Introduction

While Material is our recommended design system and Jetpack Compose ships an implementation of Material, you are not forced to use it. Material is built entirely on public APIs, so it's possible to create your own design system in the same manner.

There are several approaches you might take:

Extend MaterialTheme with additional theming values.

Replace one or more Material systems — ColorScheme, Typography, or Shapes — with custom implementations while keeping the others.

Implement a fully custom design system to replace MaterialTheme.

You may also want to continue using Material components with a custom design system. It's possible to do this but there are things to keep in mind to suit the approach you've taken.

To learn more about the lower-level constructs and APIs used by MaterialTheme and custom design systems, check out the Anatomy of a theme in Compose guide.

Sources: [live-compose-designsystems-custom-main-content-source](https://developer.android.com/develop/ui/compose/designsystems/custom#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Material Design 3 in Compose

Migrate from Material 2 to Material 3 in Compose

Anatomy of a theme in Compose

Sources: [live-compose-designsystems-custom-recommended-for-you-source](https://developer.android.com/develop/ui/compose/designsystems/custom#recommended_for_you)

## Replace Material subsystems

Instead of extending Material Theming, you may want to replace one or more systems — ColorScheme, Typography, or Shapes — with a custom implementation, while maintaining the others.

Suppose you want to replace the type and shape systems while keeping the color system:

@Immutable
data class ReplacementTypography(
    val body: TextStyle,
    val title: TextStyle
)

@Immutable
data class ReplacementShapes(
    val component: Shape,
    val surface: Shape
)

val LocalReplacementTypography = staticCompositionLocalOf {
    ReplacementTypography(
        body = TextStyle.Default,
        title = TextStyle.Default
    )
}
val LocalReplacementShapes = staticCompositionLocalOf {
    ReplacementShapes(
        component = RoundedCornerShape(ZeroCornerSize),
        surface = RoundedCornerShape(ZeroCornerSize)
    )
}

@Composable
fun ReplacementTheme(
    /* ... */
    content: @Composable () -> Unit
) {
    val replacementTypography = ReplacementTypography(
        body = TextStyle(fontSize = 16.sp),
        title = TextStyle(fontSize = 32.sp)
    )
    val replacementShapes = ReplacementShapes(
        component = RoundedCornerShape(percent = 50),
        surface = RoundedCornerShape(size = 40.dp)
    )
    CompositionLocalProvider(
        LocalReplacementTypography provides replacementTypography,
        LocalReplacementShapes provides replacementShapes
    ) {
        MaterialTheme(
            /* colors = ... */
            content = content
        )
    }
}

// Use with eg. ReplacementTheme.typography.body
object ReplacementTheme {
    val typography: ReplacementTypography
        @Composable
        get() = LocalReplacementTypography.current
    val shapes: ReplacementShapes
        @Composable
        get() = LocalReplacementShapes.current
}CustomDesignSystem.kt

Sources: [live-compose-designsystems-custom-replacing-systems-source](https://developer.android.com/develop/ui/compose/designsystems/custom#replacing-systems)

## Use Material components

When one or more systems of MaterialTheme have been replaced, using Material components as-is may result in unwanted Material color, type, or shape values.

If you want to use replacement values in components, wrap them in your own composable functions, directly setting the values for the relevant system, and exposing others as parameters to the containing composable.

@Composable
fun ReplacementButton(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    content: @Composable RowScope.() -> Unit
) {
    Button(
        shape = ReplacementTheme.shapes.component,
        onClick = onClick,
        modifier = modifier,
        content = {
            ProvideTextStyle(
                value = ReplacementTheme.typography.body
            ) {
                content()
            }
        }
    )
}CustomDesignSystem.kt

You would then replace usages of Button with ReplacementButton where appropriate.

@Composable
fun ReplacementApp() {
    ReplacementTheme {
        /*...*/
        ReplacementButton(onClick = { /* ... */ }) {
            /* ... */
        }
    }
}CustomDesignSystem.kt

Sources: [live-compose-designsystems-custom-replacing-using-material-components-source](https://developer.android.com/develop/ui/compose/designsystems/custom#replacing-using-material-components)
