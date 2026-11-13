---
type: reference
title: "Guidance: Adapt component defaults to the active custom theme"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
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
compose:
  id: guide-designsystem-component-default-adapters
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3.Button
  sections:
    - id: guide-designsystem-component-default-adapters
      title: "Guidance: Adapt component defaults to the active custom theme"
      aliases:
        - component defaults
        - theme tokens
        - custom Button wrapper
        - theme adapter
        - custom typography
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-designsystems-custom-implementing-using-material-components-source
      relatedIds:
        - live-compose-designsystems-custom-implementing-using-material-components
---

# Guidance: Adapt component defaults to the active custom theme

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Adapt component defaults to the active custom theme

Guidance: When reusing Material components without MaterialTheme, wrap them and explicitly supply the custom color, typography, shape, and other system values they need; expose other intended options as parameters. Prefer values from the custom theme. The guide example passes custom colors and shape to Button and supplies its content typography with ProvideTextStyle. Limitation: a custom theme accessor alone does not redirect Material defaults. New value types such as gradients may make a fresh component implementation more suitable than a wrapper.

Sources: [live-compose-designsystems-custom-implementing-using-material-components-source](https://developer.android.com/develop/ui/compose/designsystems/custom#implementing-using-material-components)
