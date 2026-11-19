---
type: reference
title: Button
description: "Public source: https://developer.android.com/develop/ui/compose/components/button"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-button-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#additional-resources
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: 8469765c28d402bd04029a167725eb7cc91709a73b520116608c81e365eaa9e7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Floating action button

      Material Design 3 Buttons overview
  - id: live-compose-guide-components-button-api-surface-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#api-surface
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: 5b1a6a280dc59715df0d0a6b857fae13c53d14efdcc61596cb9292980973f4f9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      onClick: The function that the system calls when the user presses the button.

      enabled: When false, this parameter makes the button appear unavailable and inactive.

      colors: An instance of ButtonColors that determines the colors used in the button.

      contentPadding: The padding within the button.
  - id: live-compose-guide-components-button-elevated-button-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#elevated-button
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: b999c8273e599650aad6d172b89563b5375a730f8a8a1b288d3ba423c2b08ff0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The elevated button component uses the ElevatedButton composable. It has a shadow that represents the elevation effect by default. It is a filled button that includes a shadow.

      The snippet shows how to implement the component and preview it interactively:

      @Composable
      fun ElevatedButtonExample(onClick: () -> Unit) {
          ElevatedButton(onClick = { onClick() }) {
              Text("Elevated")
          }
      }Button.kt

      Figure 5. An elevated button.
  - id: live-compose-guide-components-button-elevated-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#elevated
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: 9d4025d18988f7ae6f63aafac37155790ca539735553801456b7fc6f9cad62cf
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Elevated buttons provide separation from a visually prominent background.

      The following snippet demonstrates how to implement an elevated toggle button:

      @Composable
      fun ElevatedToggleButtonSample() {
          var checked by remember { mutableStateOf(false) }
          ElevatedToggleButton(checked = checked, onCheckedChange = { checked = it }) {
              Text("Elevated Button")
          }
      }Button.kt

      An elevated toggle button.
  - id: live-compose-guide-components-button-extra-large-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#extra-large
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: 1b958b31f8a14b7e76038a65fe51f7c1211fb9e6613e5ae2d0b7340028cd3009
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Extra large button measurements:

      Height: 136dp

      Default button

      The following snippet demonstrates how to implement an extra large button with an icon:

      @Composable
      fun XLargeButtonWithIconSample() {
          val size = ButtonDefaults.ExtraLargeContainerHeight
          Button(
              onClick = { /* Do something! */ },
              modifier = Modifier.heightIn(size),
              contentPadding = ButtonDefaults.contentPaddingFor(size, hasStartIcon = true),
          ) {
              Icon(
                  painter = rememberVectorPainter(AppIcons.EditFilled),
                  contentDescription = null,
                  modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
              )
              Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
              Text("Label", style = ButtonDefaults.textStyleFor(size))
          }
      }Button.kt

      Toggle button

      The following snippet demonstrates how to implement an extra large toggle button with an icon:

      @Composable
      fun XLargeToggleButtonWithIconSample() {
          var checked by remember { mutableStateOf(false) }
          val size = ButtonDefaults.ExtraLargeContainerHeight
          ToggleButton(
              checked = checked,
              onCheckedChange = { checked = it },
              modifier = Modifier.heightIn(size),
              shapes = ToggleButtonDefaults.shapesFor(size),
              contentPadding = ButtonDefaults.contentPaddingFor(size),
          ) {
              Icon(
                  painter = rememberVectorPainter(if (checked) AppIcons.EditFilled else AppIcons.Edit),
                  contentDescription = null,
                  modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
              )
              Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
              Text("Label", style = ButtonDefaults.textStyleFor(size))
          }
      }Button.kt
  - id: live-compose-guide-components-button-extra-small-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#extra-small
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: bb99531a1480311dcee6019cb03d83967ca0b7091d2892fcebdf7310da714a7b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Extra small button measurements:

      Height: 32dp

      Default button

      The following snippet demonstrates how to implement an extra small button with an icon:

      @Composable
      fun XSmallButtonWithIconSample() {
          val size = ButtonDefaults.ExtraSmallContainerHeight
          Button(
              onClick = { /* Do something! */ },
              modifier = Modifier.heightIn(size),
              contentPadding = ButtonDefaults.contentPaddingFor(size, hasStartIcon = true),
          ) {
              Icon(
                  painter = rememberVectorPainter(AppIcons.EditFilled),
                  contentDescription = null,
                  modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
              )
              Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
              Text("Label")
          }
      }Button.kt

      Toggle button

      The following snippet demonstrates how to implement an extra small toggle button with an icon:

      @Composable
      fun XSmallToggleButtonWithIconSample() {
          var checked by remember { mutableStateOf(false) }
          val size = ButtonDefaults.ExtraSmallContainerHeight
          ToggleButton(
              checked = checked,
              onCheckedChange = { checked = it },
              modifier = Modifier.heightIn(size),
              shapes = ToggleButtonDefaults.shapesFor(size),
              contentPadding = ButtonDefaults.contentPaddingFor(size),
          ) {
              Icon(
                  painter = rememberVectorPainter(if (checked) AppIcons.EditFilled else AppIcons.Edit),
                  contentDescription = null,
                  modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
              )
              Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
              Text("Label")
          }
      }Button.kt
  - id: live-compose-guide-components-button-filled-button-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#filled-button
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: 5f04164922a0a02f9958820abd449ebb4db37d62cc9533c23498b5ae3cbfafb4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The filled button component uses the basic Button composable. It is filled with a solid color by default. The snippet shows how to implement the component and preview it interactively:

      @Composable
      fun FilledButtonExample(onClick: () -> Unit) {
          Button(onClick = { onClick() }) {
              Text("Filled")
          }
      }Button.kt

      Figure 2. A filled button.
  - id: live-compose-guide-components-button-filled-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#filled
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: d686126dba57039ba671725e8693eae0c56658de94462578db8bcc7283e8af38
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The filled button style has the most visual impact after the floating action button (FAB), and should be used for important, final actions that complete a flow, like Save, Join now, or Confirm.

      The following snippet demonstrates how to implement a filled toggle button:

      @Composable
      fun ToggleButtonSample() {
          var checked by remember { mutableStateOf(false) }
          ToggleButton(checked = checked, onCheckedChange = { checked = it }) {
              Text("Button")
          }
      }Button.kt

      A filled toggle button.
  - id: live-compose-guide-components-button-filled-tonal-button-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#filled-tonal-button
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: d5053a4aa88caba9a8bf41605425e8e3cd5d7b1e50ebd69a1dd947d5d2c412b0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The filled tonal button component uses the FilledTonalButton composable. It is filled with a tonal color by default.

      The snippet shows how to implement the component and preview it interactively:

      @Composable
      fun FilledTonalButtonExample(onClick: () -> Unit) {
          FilledTonalButton(onClick = { onClick() }) {
              Text("Tonal")
          }
      }Button.kt

      Figure 3. A tonal button.
  - id: live-compose-guide-components-button-large-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#large
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: c6538c4a1b3c33c954a35e91fec0c70d6d7d6e64251d8e6751db8770668bedfc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Large button measurements:

      Height: 96dp

      Default button

      The following snippet demonstrates how to implement a large button with an icon:

      @Composable
      fun LargeButtonWithIconSample() {
          val size = ButtonDefaults.LargeContainerHeight
          Button(
              onClick = { /* Do something! */ },
              modifier = Modifier.heightIn(size),
              contentPadding = ButtonDefaults.contentPaddingFor(size, hasStartIcon = true),
          ) {
              Icon(
                  painter = rememberVectorPainter(AppIcons.EditFilled),
                  contentDescription = null,
                  modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
              )
              Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
              Text("Label", style = ButtonDefaults.textStyleFor(size))
          }
      }Button.kt

      Toggle button

      The following snippet demonstrates how to implement a large toggle button with an icon:

      @Composable
      fun LargeToggleButtonWithIconSample() {
          var checked by remember { mutableStateOf(false) }
          val size = ButtonDefaults.LargeContainerHeight
          ToggleButton(
              checked = checked,
              onCheckedChange = { checked = it },
              modifier = Modifier.heightIn(size),
              shapes = ToggleButtonDefaults.shapesFor(size),
              contentPadding = ButtonDefaults.contentPaddingFor(size),
          ) {
              Icon(
                  painter = rememberVectorPainter(if (checked) AppIcons.EditFilled else AppIcons.Edit),
                  contentDescription = null,
                  modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
              )
              Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
              Text("Label", style = ButtonDefaults.textStyleFor(size))
          }
      }Button.kt
  - id: live-compose-guide-components-button-m3-expressive-update-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#m3-expressive-update
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: dcd7e3ffd2f58d0c1caf80e9032041f296306283f3f3865c4ee95f5a1fb39b41
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Buttons now have a wider variety of shapes and sizes and toggle functionality, and can change shape when selected.

      Figure 7.

      Material 3 Expressive button size and shape variations.

      For more information about the M3 Expressive updates for buttons, see the Material Design 3 Buttons guidelines.
  - id: live-compose-guide-components-button-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#main-content
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: 013901394f0f9ccb1e57e19898c1fa889b78d55f8e3ef019b70963d7142635db
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Buttons are fundamental components that allow the user to trigger a defined action. There are five types of buttons. This table describes the appearance of each of the five button types, as well as where you should use them:

      Type Appearance Purpose Filled Solid background with contrasting text. High-emphasis buttons. These are for primary actions in an application, such as "submit" and "save." The shadow effect highlights the button's importance. Filled tonal Background color varies to match the surface. Also for primary or significant actions. Filled tonal buttons provide more visual weight and suit functions such as "add to cart" and "Sign in." Elevated Stands out by having a shadow. Serves a similar purpose to tonal buttons. Increase elevation to make the button appear even more prominently. Outlined Features a border with no fill. Medium-emphasis buttons, containing actions that are important but not primary. They pair well with other buttons to indicate alternative, secondary actions like "Cancel" or "Back." Text Displays text with no background or border. Low-emphasis buttons, ideal for less critical actions such as navigational links, or secondary functions like "Learn More" or "View details."

      This image demonstrates the five types of buttons in Material Design:

      Figure 1.

      The five button components.
  - id: live-compose-guide-components-button-medium-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#medium
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: c1b3d80c83e692e836f3273f803d2ca2ce436b7400dc02ecf521a13ece66b3a9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Medium button measurements:

      Height: 56dp

      Default button

      The following snippet demonstrates how to implement a medium button with an icon:

      @Composable
      fun MediumButtonWithIconSample() {
          val size = ButtonDefaults.MediumContainerHeight
          Button(
              onClick = { /* Do something! */ },
              modifier = Modifier.heightIn(size),
              contentPadding = ButtonDefaults.contentPaddingFor(size, hasStartIcon = true),
          ) {
              Icon(
                  painter = rememberVectorPainter(AppIcons.EditFilled),
                  contentDescription = null,
                  modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
              )
              Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
              Text("Label", style = ButtonDefaults.textStyleFor(size))
          }
      }Button.kt

      Toggle button

      The following snippet demonstrates how to implement a medium toggle button with an icon:

      @Composable
      fun MediumToggleButtonWithIconSample() {
          var checked by remember { mutableStateOf(false) }
          val size = ButtonDefaults.MediumContainerHeight
          ToggleButton(
              checked = checked,
              onCheckedChange = { checked = it },
              modifier = Modifier.heightIn(size),
              shapes = ToggleButtonDefaults.shapesFor(size),
              contentPadding = ButtonDefaults.contentPaddingFor(size),
          ) {
              Icon(
                  painter = rememberVectorPainter(if (checked) AppIcons.EditFilled else AppIcons.Edit),
                  contentDescription = null,
                  modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
              )
              Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
              Text("Label", style = ButtonDefaults.textStyleFor(size))
          }
      }Button.kt
  - id: live-compose-guide-components-button-outlined-button-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#outlined-button
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: 72ad760c0f4889c00a8a5cc54b25a6b79c0a9112a1d33412768304f8c90bab60
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The outlined button component uses the OutlinedButton composable. It appears with an outline by default.

      The snippet shows how to implement the component and preview it interactively:

      @Composable
      fun OutlinedButtonExample(onClick: () -> Unit) {
          OutlinedButton(onClick = { onClick() }) {
              Text("Outlined")
          }
      }Button.kt

      Figure 4. An outlined button.
  - id: live-compose-guide-components-button-outlined-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#outlined
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: aae7cf3d0fbb12dc390b315419501985976e80e096eb368b4192cc5649f56a76
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The outlined style is ideal for medium-emphasis buttons that contain actions that are important, but are not the primary action in a product.

      The following snippet demonstrates how to implement an outlined toggle button:

      @Composable
      fun OutlinedToggleButtonSample() {
          var checked by remember { mutableStateOf(false) }
          OutlinedToggleButton(checked = checked, onCheckedChange = { checked = it }) {
              Text("Outlined Button")
          }
      }Button.kt

      An outlined toggle button.
  - id: live-compose-guide-components-button-shape-options-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#shape-options
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: 259e8739adf87cd724104539d1d268a9e30bde6379edf3419e430d0ed6b5dd13
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Two shape options are available: square and round.

      Figure 8.

      Square button corner radius scaling across sizes.

      Square buttons have containers with subtle corner rounding that scales based on button size.

      Figure 9.

      Button with rounded corners.

      Round button types have containers with fully rounded corners. When checked, a square toggle button's shape changes to round.

      The following snippet demonstrates how to implement a square toggle button that changes its shape to round when checked:

      @Composable
      fun SquareToggleButtonSample() {
          var checked by remember { mutableStateOf(false) }
          val shapes =
              ToggleButtonShapes(
                  shape = ToggleButtonDefaults.checkedShape,
                  pressedShape = ToggleButtonDefaults.pressedShape,
                  checkedShape = ToggleButtonDefaults.shape,
              )
          ToggleButton(checked = checked, onCheckedChange = { checked = it }, shapes = shapes) {
              Text("Button")
          }
      }Button.kt
  - id: live-compose-guide-components-button-size-options-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#size-options
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: 93925d8475820c7eb1c99c6ffaad7e361acdf2878d91bb2209971ded28a28b0e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: "Material 3 Expressive adds four sizing options besides the default small size: extra small, medium, large, and extra large. Expressive button overloads take a required shapes parameter, or you can apply expressive sizing to a standard Button by setting ButtonDefaults.contentPaddingFor(...), as the following examples show:"
  - id: live-compose-guide-components-button-small-existing-default-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#small-existing-default
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: 4bbfb895b01479fb59379c628d21f3d18b7c2ed90c303aafbb3fe5c91904e6b9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Small button measurements:

      Height: 40dp

      Default button

      The following snippet demonstrates how to implement a small button with an icon:

      @Composable
      fun ButtonWithIconSample() {
          Button(
              onClick = { /* Do something! */ },
              contentPadding = ButtonDefaults.contentPaddingFor(ButtonDefaults.MinHeight, hasStartIcon = true),
          ) {
              Icon(
                  painter = rememberVectorPainter(AppIcons.FavoriteFilled),
                  contentDescription = null,
                  modifier = Modifier.size(ButtonDefaults.iconSizeFor(ButtonDefaults.MinHeight)),
              )
              Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(ButtonDefaults.MinHeight)))
              Text("Like")
          }
      }Button.kt

      Toggle button

      The following snippet demonstrates how to implement a small toggle button with an icon:

      @Composable
      fun ToggleButtonWithIconSample() {
          var checked by remember { mutableStateOf(false) }
          ToggleButton(checked = checked, onCheckedChange = { checked = it }) {
              Icon(
                  painter = rememberVectorPainter(if (checked) AppIcons.FavoriteFilled else AppIcons.Favorite),
                  contentDescription = null,
                  modifier = Modifier.size(ButtonDefaults.IconSize),
              )
              Spacer(Modifier.size(ButtonDefaults.IconSpacing))
              Text("Like")
          }
      }Button.kt
  - id: live-compose-guide-components-button-text-button-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#text-button
    revision: web:compose-guide-components-button:content@sha256:e4648b0ecfc5d60e7d5c762b1cf4c1cb3405a4771b37d44526517d4fcdb98936
    sha256: e157004b9c5a62178a584e980f0f67125e161b62a137fb005bc6dbd7fe7d4a78
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The text button component uses the TextButton composable. It appears as only text until pressed. It does not have a solid fill or outline by default.

      The snippet shows how to implement the component and preview it interactively:

      @Composable
      fun TextButtonExample(onClick: () -> Unit) {
          TextButton(
              onClick = { onClick() }
          ) {
              Text("Text Button")
          }
      }Button.kt

      Figure 6. A text button.
  - id: live-compose-guide-components-button-toggle-buttons-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#toggle-buttons
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: ae4fca1c3bb023adc1e53f3c7cfcf950f35eda5c9d81cb9433d8a581f4b3e61a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: "Four toggle button styles are available: filled, elevated, tonal, and outlined."
  - id: live-compose-guide-components-button-tonal-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/button#tonal
    revision: web:compose-guide-components-button:content@sha256:833844cb3dbe5e81778af1c88d92d731073d226c089868e1dd791b67a19702de
    sha256: 5468ce3a94bb01a26d8be7e69836a00c39501264b4cec6cfcf78a2aebc56286f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The tonal button style is filled with a tonal color by default. It is useful in contexts where a lower-priority button requires slightly more emphasis than an outline would give.

      The following snippet demonstrates how to implement a tonal toggle button using FilledTonalToggleButton:

      @Composable
      fun TonalToggleButtonSample() {
          var checked by remember { mutableStateOf(false) }
          FilledTonalToggleButton(checked = checked, onCheckedChange = { checked = it }) {
              Text("Tonal Button")
          }
      }Button.kt

      A tonal toggle button.
compose:
  id: live-compose-guide-components-button
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-button-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-components-button-api-surface
      title: API surface
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-api-surface-source
      relatedIds: []
    - id: live-compose-guide-components-button-elevated
      title: Elevated
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-elevated-source
      relatedIds: []
    - id: live-compose-guide-components-button-elevated-button
      title: Elevated button
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.ElevatedButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-elevated-button-source
      relatedIds: []
    - id: live-compose-guide-components-button-extra-large
      title: Extra large
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-extra-large-source
      relatedIds: []
    - id: live-compose-guide-components-button-extra-small
      title: Extra small
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-extra-small-source
      relatedIds: []
    - id: live-compose-guide-components-button-filled
      title: Filled
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-filled-source
      relatedIds: []
    - id: live-compose-guide-components-button-filled-button
      title: Filled button
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-filled-button-source
      relatedIds: []
    - id: live-compose-guide-components-button-filled-tonal-button
      title: Filled tonal button
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.FilledTonalButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-filled-tonal-button-source
      relatedIds: []
    - id: live-compose-guide-components-button-large
      title: Large
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-large-source
      relatedIds: []
    - id: live-compose-guide-components-button-m3-expressive-update
      title: M3 Expressive update
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-m3-expressive-update-source
      relatedIds: []
    - id: live-compose-guide-components-button-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-main-content-source
      relatedIds: []
    - id: live-compose-guide-components-button-medium
      title: Medium
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-medium-source
      relatedIds: []
    - id: live-compose-guide-components-button-outlined
      title: Outlined
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-outlined-source
      relatedIds: []
    - id: live-compose-guide-components-button-outlined-button
      title: Outlined button
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.OutlinedButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-outlined-button-source
      relatedIds: []
    - id: live-compose-guide-components-button-shape-options
      title: Shape options
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-shape-options-source
      relatedIds: []
    - id: live-compose-guide-components-button-size-options
      title: Size options
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-size-options-source
      relatedIds: []
    - id: live-compose-guide-components-button-small-existing-default
      title: Small (existing default)
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-small-existing-default-source
      relatedIds: []
    - id: live-compose-guide-components-button-text-button
      title: Text button
      aliases:
        - androidx.compose.material3.Button
        - androidx.compose.material3.TextButton
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-text-button-source
      relatedIds: []
    - id: live-compose-guide-components-button-toggle-buttons
      title: Toggle buttons
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-toggle-buttons-source
      relatedIds: []
    - id: live-compose-guide-components-button-tonal
      title: Tonal
      aliases:
        - androidx.compose.material3.Button
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-button-tonal-source
      relatedIds: []
---

# Button

Public source: https://developer.android.com/develop/ui/compose/components/button

## Additional resources

Floating action button

Material Design 3 Buttons overview

Sources: [live-compose-guide-components-button-additional-resources-source](https://developer.android.com/develop/ui/compose/components/button#additional-resources)

## API surface

onClick: The function that the system calls when the user presses the button.

enabled: When false, this parameter makes the button appear unavailable and inactive.

colors: An instance of ButtonColors that determines the colors used in the button.

contentPadding: The padding within the button.

Sources: [live-compose-guide-components-button-api-surface-source](https://developer.android.com/develop/ui/compose/components/button#api-surface)

## Elevated

Elevated buttons provide separation from a visually prominent background.

The following snippet demonstrates how to implement an elevated toggle button:

@Composable
fun ElevatedToggleButtonSample() {
    var checked by remember { mutableStateOf(false) }
    ElevatedToggleButton(checked = checked, onCheckedChange = { checked = it }) {
        Text("Elevated Button")
    }
}Button.kt

An elevated toggle button.

Sources: [live-compose-guide-components-button-elevated-source](https://developer.android.com/develop/ui/compose/components/button#elevated)

## Elevated button

The elevated button component uses the ElevatedButton composable. It has a shadow that represents the elevation effect by default. It is a filled button that includes a shadow.

The snippet shows how to implement the component and preview it interactively:

@Composable
fun ElevatedButtonExample(onClick: () -> Unit) {
    ElevatedButton(onClick = { onClick() }) {
        Text("Elevated")
    }
}Button.kt

Figure 5. An elevated button.

Sources: [live-compose-guide-components-button-elevated-button-source](https://developer.android.com/develop/ui/compose/components/button#elevated-button)

## Extra large

Extra large button measurements:

Height: 136dp

Default button

The following snippet demonstrates how to implement an extra large button with an icon:

@Composable
fun XLargeButtonWithIconSample() {
    val size = ButtonDefaults.ExtraLargeContainerHeight
    Button(
        onClick = { /* Do something! */ },
        modifier = Modifier.heightIn(size),
        contentPadding = ButtonDefaults.contentPaddingFor(size, hasStartIcon = true),
    ) {
        Icon(
            painter = rememberVectorPainter(AppIcons.EditFilled),
            contentDescription = null,
            modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
        )
        Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
        Text("Label", style = ButtonDefaults.textStyleFor(size))
    }
}Button.kt

Toggle button

The following snippet demonstrates how to implement an extra large toggle button with an icon:

@Composable
fun XLargeToggleButtonWithIconSample() {
    var checked by remember { mutableStateOf(false) }
    val size = ButtonDefaults.ExtraLargeContainerHeight
    ToggleButton(
        checked = checked,
        onCheckedChange = { checked = it },
        modifier = Modifier.heightIn(size),
        shapes = ToggleButtonDefaults.shapesFor(size),
        contentPadding = ButtonDefaults.contentPaddingFor(size),
    ) {
        Icon(
            painter = rememberVectorPainter(if (checked) AppIcons.EditFilled else AppIcons.Edit),
            contentDescription = null,
            modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
        )
        Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
        Text("Label", style = ButtonDefaults.textStyleFor(size))
    }
}Button.kt

Sources: [live-compose-guide-components-button-extra-large-source](https://developer.android.com/develop/ui/compose/components/button#extra-large)

## Extra small

Extra small button measurements:

Height: 32dp

Default button

The following snippet demonstrates how to implement an extra small button with an icon:

@Composable
fun XSmallButtonWithIconSample() {
    val size = ButtonDefaults.ExtraSmallContainerHeight
    Button(
        onClick = { /* Do something! */ },
        modifier = Modifier.heightIn(size),
        contentPadding = ButtonDefaults.contentPaddingFor(size, hasStartIcon = true),
    ) {
        Icon(
            painter = rememberVectorPainter(AppIcons.EditFilled),
            contentDescription = null,
            modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
        )
        Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
        Text("Label")
    }
}Button.kt

Toggle button

The following snippet demonstrates how to implement an extra small toggle button with an icon:

@Composable
fun XSmallToggleButtonWithIconSample() {
    var checked by remember { mutableStateOf(false) }
    val size = ButtonDefaults.ExtraSmallContainerHeight
    ToggleButton(
        checked = checked,
        onCheckedChange = { checked = it },
        modifier = Modifier.heightIn(size),
        shapes = ToggleButtonDefaults.shapesFor(size),
        contentPadding = ButtonDefaults.contentPaddingFor(size),
    ) {
        Icon(
            painter = rememberVectorPainter(if (checked) AppIcons.EditFilled else AppIcons.Edit),
            contentDescription = null,
            modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
        )
        Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
        Text("Label")
    }
}Button.kt

Sources: [live-compose-guide-components-button-extra-small-source](https://developer.android.com/develop/ui/compose/components/button#extra-small)

## Filled

The filled button style has the most visual impact after the floating action button (FAB), and should be used for important, final actions that complete a flow, like Save, Join now, or Confirm.

The following snippet demonstrates how to implement a filled toggle button:

@Composable
fun ToggleButtonSample() {
    var checked by remember { mutableStateOf(false) }
    ToggleButton(checked = checked, onCheckedChange = { checked = it }) {
        Text("Button")
    }
}Button.kt

A filled toggle button.

Sources: [live-compose-guide-components-button-filled-source](https://developer.android.com/develop/ui/compose/components/button#filled)

## Filled button

The filled button component uses the basic Button composable. It is filled with a solid color by default. The snippet shows how to implement the component and preview it interactively:

@Composable
fun FilledButtonExample(onClick: () -> Unit) {
    Button(onClick = { onClick() }) {
        Text("Filled")
    }
}Button.kt

Figure 2. A filled button.

Sources: [live-compose-guide-components-button-filled-button-source](https://developer.android.com/develop/ui/compose/components/button#filled-button)

## Filled tonal button

The filled tonal button component uses the FilledTonalButton composable. It is filled with a tonal color by default.

The snippet shows how to implement the component and preview it interactively:

@Composable
fun FilledTonalButtonExample(onClick: () -> Unit) {
    FilledTonalButton(onClick = { onClick() }) {
        Text("Tonal")
    }
}Button.kt

Figure 3. A tonal button.

Sources: [live-compose-guide-components-button-filled-tonal-button-source](https://developer.android.com/develop/ui/compose/components/button#filled-tonal-button)

## Large

Large button measurements:

Height: 96dp

Default button

The following snippet demonstrates how to implement a large button with an icon:

@Composable
fun LargeButtonWithIconSample() {
    val size = ButtonDefaults.LargeContainerHeight
    Button(
        onClick = { /* Do something! */ },
        modifier = Modifier.heightIn(size),
        contentPadding = ButtonDefaults.contentPaddingFor(size, hasStartIcon = true),
    ) {
        Icon(
            painter = rememberVectorPainter(AppIcons.EditFilled),
            contentDescription = null,
            modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
        )
        Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
        Text("Label", style = ButtonDefaults.textStyleFor(size))
    }
}Button.kt

Toggle button

The following snippet demonstrates how to implement a large toggle button with an icon:

@Composable
fun LargeToggleButtonWithIconSample() {
    var checked by remember { mutableStateOf(false) }
    val size = ButtonDefaults.LargeContainerHeight
    ToggleButton(
        checked = checked,
        onCheckedChange = { checked = it },
        modifier = Modifier.heightIn(size),
        shapes = ToggleButtonDefaults.shapesFor(size),
        contentPadding = ButtonDefaults.contentPaddingFor(size),
    ) {
        Icon(
            painter = rememberVectorPainter(if (checked) AppIcons.EditFilled else AppIcons.Edit),
            contentDescription = null,
            modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
        )
        Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
        Text("Label", style = ButtonDefaults.textStyleFor(size))
    }
}Button.kt

Sources: [live-compose-guide-components-button-large-source](https://developer.android.com/develop/ui/compose/components/button#large)

## M3 Expressive update

Buttons now have a wider variety of shapes and sizes and toggle functionality, and can change shape when selected.

Figure 7.

Material 3 Expressive button size and shape variations.

For more information about the M3 Expressive updates for buttons, see the Material Design 3 Buttons guidelines.

Sources: [live-compose-guide-components-button-m3-expressive-update-source](https://developer.android.com/develop/ui/compose/components/button#m3-expressive-update)

## Introduction

Buttons are fundamental components that allow the user to trigger a defined action. There are five types of buttons. This table describes the appearance of each of the five button types, as well as where you should use them:

Type Appearance Purpose Filled Solid background with contrasting text. High-emphasis buttons. These are for primary actions in an application, such as "submit" and "save." The shadow effect highlights the button's importance. Filled tonal Background color varies to match the surface. Also for primary or significant actions. Filled tonal buttons provide more visual weight and suit functions such as "add to cart" and "Sign in." Elevated Stands out by having a shadow. Serves a similar purpose to tonal buttons. Increase elevation to make the button appear even more prominently. Outlined Features a border with no fill. Medium-emphasis buttons, containing actions that are important but not primary. They pair well with other buttons to indicate alternative, secondary actions like "Cancel" or "Back." Text Displays text with no background or border. Low-emphasis buttons, ideal for less critical actions such as navigational links, or secondary functions like "Learn More" or "View details."

This image demonstrates the five types of buttons in Material Design:

Figure 1.

The five button components.

Sources: [live-compose-guide-components-button-main-content-source](https://developer.android.com/develop/ui/compose/components/button#main-content)

## Medium

Medium button measurements:

Height: 56dp

Default button

The following snippet demonstrates how to implement a medium button with an icon:

@Composable
fun MediumButtonWithIconSample() {
    val size = ButtonDefaults.MediumContainerHeight
    Button(
        onClick = { /* Do something! */ },
        modifier = Modifier.heightIn(size),
        contentPadding = ButtonDefaults.contentPaddingFor(size, hasStartIcon = true),
    ) {
        Icon(
            painter = rememberVectorPainter(AppIcons.EditFilled),
            contentDescription = null,
            modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
        )
        Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
        Text("Label", style = ButtonDefaults.textStyleFor(size))
    }
}Button.kt

Toggle button

The following snippet demonstrates how to implement a medium toggle button with an icon:

@Composable
fun MediumToggleButtonWithIconSample() {
    var checked by remember { mutableStateOf(false) }
    val size = ButtonDefaults.MediumContainerHeight
    ToggleButton(
        checked = checked,
        onCheckedChange = { checked = it },
        modifier = Modifier.heightIn(size),
        shapes = ToggleButtonDefaults.shapesFor(size),
        contentPadding = ButtonDefaults.contentPaddingFor(size),
    ) {
        Icon(
            painter = rememberVectorPainter(if (checked) AppIcons.EditFilled else AppIcons.Edit),
            contentDescription = null,
            modifier = Modifier.size(ButtonDefaults.iconSizeFor(size)),
        )
        Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(size)))
        Text("Label", style = ButtonDefaults.textStyleFor(size))
    }
}Button.kt

Sources: [live-compose-guide-components-button-medium-source](https://developer.android.com/develop/ui/compose/components/button#medium)

## Outlined

The outlined style is ideal for medium-emphasis buttons that contain actions that are important, but are not the primary action in a product.

The following snippet demonstrates how to implement an outlined toggle button:

@Composable
fun OutlinedToggleButtonSample() {
    var checked by remember { mutableStateOf(false) }
    OutlinedToggleButton(checked = checked, onCheckedChange = { checked = it }) {
        Text("Outlined Button")
    }
}Button.kt

An outlined toggle button.

Sources: [live-compose-guide-components-button-outlined-source](https://developer.android.com/develop/ui/compose/components/button#outlined)

## Outlined button

The outlined button component uses the OutlinedButton composable. It appears with an outline by default.

The snippet shows how to implement the component and preview it interactively:

@Composable
fun OutlinedButtonExample(onClick: () -> Unit) {
    OutlinedButton(onClick = { onClick() }) {
        Text("Outlined")
    }
}Button.kt

Figure 4. An outlined button.

Sources: [live-compose-guide-components-button-outlined-button-source](https://developer.android.com/develop/ui/compose/components/button#outlined-button)

## Shape options

Two shape options are available: square and round.

Figure 8.

Square button corner radius scaling across sizes.

Square buttons have containers with subtle corner rounding that scales based on button size.

Figure 9.

Button with rounded corners.

Round button types have containers with fully rounded corners. When checked, a square toggle button's shape changes to round.

The following snippet demonstrates how to implement a square toggle button that changes its shape to round when checked:

@Composable
fun SquareToggleButtonSample() {
    var checked by remember { mutableStateOf(false) }
    val shapes =
        ToggleButtonShapes(
            shape = ToggleButtonDefaults.checkedShape,
            pressedShape = ToggleButtonDefaults.pressedShape,
            checkedShape = ToggleButtonDefaults.shape,
        )
    ToggleButton(checked = checked, onCheckedChange = { checked = it }, shapes = shapes) {
        Text("Button")
    }
}Button.kt

Sources: [live-compose-guide-components-button-shape-options-source](https://developer.android.com/develop/ui/compose/components/button#shape-options)

## Size options

Material 3 Expressive adds four sizing options besides the default small size: extra small, medium, large, and extra large. Expressive button overloads take a required shapes parameter, or you can apply expressive sizing to a standard Button by setting ButtonDefaults.contentPaddingFor(...), as the following examples show:

Sources: [live-compose-guide-components-button-size-options-source](https://developer.android.com/develop/ui/compose/components/button#size-options)

## Small (existing default)

Small button measurements:

Height: 40dp

Default button

The following snippet demonstrates how to implement a small button with an icon:

@Composable
fun ButtonWithIconSample() {
    Button(
        onClick = { /* Do something! */ },
        contentPadding = ButtonDefaults.contentPaddingFor(ButtonDefaults.MinHeight, hasStartIcon = true),
    ) {
        Icon(
            painter = rememberVectorPainter(AppIcons.FavoriteFilled),
            contentDescription = null,
            modifier = Modifier.size(ButtonDefaults.iconSizeFor(ButtonDefaults.MinHeight)),
        )
        Spacer(Modifier.size(ButtonDefaults.iconSpacingFor(ButtonDefaults.MinHeight)))
        Text("Like")
    }
}Button.kt

Toggle button

The following snippet demonstrates how to implement a small toggle button with an icon:

@Composable
fun ToggleButtonWithIconSample() {
    var checked by remember { mutableStateOf(false) }
    ToggleButton(checked = checked, onCheckedChange = { checked = it }) {
        Icon(
            painter = rememberVectorPainter(if (checked) AppIcons.FavoriteFilled else AppIcons.Favorite),
            contentDescription = null,
            modifier = Modifier.size(ButtonDefaults.IconSize),
        )
        Spacer(Modifier.size(ButtonDefaults.IconSpacing))
        Text("Like")
    }
}Button.kt

Sources: [live-compose-guide-components-button-small-existing-default-source](https://developer.android.com/develop/ui/compose/components/button#small-existing-default)

## Text button

The text button component uses the TextButton composable. It appears as only text until pressed. It does not have a solid fill or outline by default.

The snippet shows how to implement the component and preview it interactively:

@Composable
fun TextButtonExample(onClick: () -> Unit) {
    TextButton(
        onClick = { onClick() }
    ) {
        Text("Text Button")
    }
}Button.kt

Figure 6. A text button.

Sources: [live-compose-guide-components-button-text-button-source](https://developer.android.com/develop/ui/compose/components/button#text-button)

## Toggle buttons

Four toggle button styles are available: filled, elevated, tonal, and outlined.

Sources: [live-compose-guide-components-button-toggle-buttons-source](https://developer.android.com/develop/ui/compose/components/button#toggle-buttons)

## Tonal

The tonal button style is filled with a tonal color by default. It is useful in contexts where a lower-priority button requires slightly more emphasis than an outline would give.

The following snippet demonstrates how to implement a tonal toggle button using FilledTonalToggleButton:

@Composable
fun TonalToggleButtonSample() {
    var checked by remember { mutableStateOf(false) }
    FilledTonalToggleButton(checked = checked, onCheckedChange = { checked = it }) {
        Text("Tonal Button")
    }
}Button.kt

A tonal toggle button.

Sources: [live-compose-guide-components-button-tonal-source](https://developer.android.com/develop/ui/compose/components/button#tonal)
