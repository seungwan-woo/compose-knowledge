---
type: reference
title: "Guidance: Share interaction ownership and pair press completion events"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-handling-interactions-interactions-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/user-interactions/handling-interactions#interactions
    revision: web:compose-handling-interactions:content@sha256:0994b90dd16a438f6b4bb4b54ed7213abd471da80f0bafb9ca79e115d25e4b62
    sha256: db1dbb97508fd410a93e1087c748e7535fd248be515f9d5c73ec2a3fd5ce9791
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In many cases, you don't need to know just how your Compose component is interpreting user interactions. For example, Button relies on Modifier.clickable to figure out whether the user clicked the button. If you're adding a typical button to your app, you can define the button's onClick code, and Modifier.clickable runs that code when appropriate. That means you don't need to know whether the user tapped the screen or selected the button with a keyboard; Modifier.clickable figures out that the user performed a click, and responds by running your onClick code.

      However, if you want to customize your UI component's response to user behavior, you may need to know more of what's going on under the hood. This section gives you some of that information.

      When a user interacts with a UI component, the system represents their behavior by generating a number of Interaction events. For example, if a user touches a button, the button generates PressInteraction.Press. If the user lifts their finger inside the button, it generates a PressInteraction.Release, letting the button know that the click was finished. On the other hand, if the user drags their finger outside the button, then lifts their finger, the button generates PressInteraction.Cancel, to indicate that the press on the button was canceled, not completed.

      These interactions are unopinionated. That is, these low-level interaction events don't intend to interpret the meaning of the user actions, or their sequence. They also don't interpret which user actions might take priority over other actions.

      These interactions generally come in pairs, with a start and an end. The second interaction contains a reference to the first one. For example, if a user touches a button then lifts their finger, the touch generates a PressInteraction.Press interaction, and the release generates a PressInteraction.Release; the Release has a press property identifying the initial PressInteraction.Press.

      You can see the interactions for a particular component by observing its InteractionSource. InteractionSource is built on top of Kotlin flows, so you can collect the interactions from it the same way you'd work with any other flow. For
  - id: live-compose-handling-interactions-replace-effect-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/user-interactions/handling-interactions#replace-effect
    revision: web:compose-handling-interactions:content@sha256:0994b90dd16a438f6b4bb4b54ed7213abd471da80f0bafb9ca79e115d25e4b62
    sha256: 918df5865896585680b4ce197b28f44c6d4076aea657e6cc2a46ccf1857460aa
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      animateToPressed(interaction.pressPosition) is PressInteraction.Release -> animateToResting() is PressInteraction.Cancel -> animateToResting() } } } } override fun ContentDrawScope.draw() { scale( scale = animatedScalePercent.value, pivot = currentPressPosition ) { this@draw.drawContent() } } }Interactions.kt

      Create the IndicationNodeFactory. Its only responsibility is to create a new node instance for a provided interaction source. As there are no parameters to configure the indication, the factory can be an object: object ScaleIndication : IndicationNodeFactory { override fun create(interactionSource: InteractionSource): DelegatableNode { return ScaleNode(interactionSource) } override fun equals(other: Any?): Boolean = other === ScaleIndication override fun hashCode() = 100 }Interactions.kt

      Modifier.clickable uses Modifier.indication internally, so to make a clickable component with ScaleIndication, all you need to do is provide the Indication as a parameter to clickable: Box( modifier = Modifier .size(100.dp) .clickable( onClick = {}, indication = ScaleIndication, interactionSource = null ) .background(Color.Blue), contentAlignment = Alignment.Center ) { Text("Hello!", color = Color.White) }Interactions.kt This also makes it easy to build high level, reusable components using a custom Indication — a button could look like: @Composable fun ScaleButton( onClick: () -> Unit, modifier: Modifier = Modifier, enabled: Boolean = true, interactionSource: MutableInteractionSource? = null, shape: Shape = CircleShape, content: @Composable RowScope.() -> Unit ) { Row( modifier = modifier .defaultMinSize(minWidth = 76.dp, minHeight = 48.dp) .clickable( enabled = enabled, indication = ScaleIndication, interactionSource = interactionSource, onClick = onClick ) .border(width = 2.dp, color = Color.Blue, shape = shape) .padding(horizontal = 16.dp, vertical = 8.dp), horizontalArrangement = Arrangement.Center, verticalAlignment = Alignment.CenterVertically, content = content ) }Interactions.kt

      You can then use the button in the following way:

      ScaleButton(onClick = {}) {
          Icon(Icons.Filled.ShoppingCart, "")
          Spacer(Modifier.padding(10.dp))
          Text(text = "Add to
compose:
  id: guide-component-interaction-source-ownership
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.interaction.MutableInteractionSource
  sections:
    - id: guide-component-interaction-source-ownership
      title: "Guidance: Share interaction ownership and pair press completion events"
      aliases:
        - MutableInteractionSource
        - shared interaction source
        - PressInteraction.Press
        - PressInteraction.Release
        - PressInteraction.Cancel
        - custom indication
        - ripple interaction ownership
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-handling-interactions-interactions-source
        - live-compose-handling-interactions-replace-effect-2-source
      relatedIds:
        - live-compose-handling-interactions-interactions
        - live-compose-handling-interactions-replace-effect-2
---

# Guidance: Share interaction ownership and pair press completion events

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Share interaction ownership and pair press completion events

Guidance: If component input, observers, and a custom indication need one interaction stream, route them through the same MutableInteractionSource. A custom IndicationNodeFactory receives an InteractionSource, and clickable can integrate the indication. When manually producing press events, retain the original Press and reference it from the matching Release or Cancel; completion events identify their starting interaction. Limitation: low-level interactions do not interpret a click action. The guide also permits a null source when callers do not need an exposed stream.

Sources: [live-compose-handling-interactions-interactions-source](https://developer.android.com/develop/ui/compose/touch-input/user-interactions/handling-interactions#interactions), [live-compose-handling-interactions-replace-effect-2-source](https://developer.android.com/develop/ui/compose/touch-input/user-interactions/handling-interactions#replace-effect)
