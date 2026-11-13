---
type: reference
title: "Guidance: Reserve layout space for minimum touch targets"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-accessibility-api-defaults-minimum-target-sizes-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/api-defaults#minimum-target-sizes
    revision: web:compose-guide-accessibility-api-defaults:content@sha256:17cdd5bb64f80d2236f8827ae9134a0da598ce633e418960fc78d0c6d92be726
    sha256: a89b786812eb390aafd12afdf4c9cbfdf52bc86d10c4c1705224becd18ab0f21
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      contains a very small clickable Box. The touch target area is automatically expanded beyond the boundaries of the Box, so tapping next to the Box still triggers the click event.

      @Composable
      private fun SmallBox() {
          var clicked by remember { mutableStateOf(false) }
          Box(
              Modifier
                  .size(100.dp)
                  .background(if (clicked) Color.DarkGray else Color.LightGray)
          ) {
              Box(
                  Modifier
                      .align(Alignment.Center)
                      .clickable { clicked = !clicked }
                      .background(Color.Black)
                      .size(1.dp)
              )
          }
      }AccessibilitySnippets.kt

      Figure 4.

      A very small clickable box that is expanded to a larger touch target.

      To prevent possible overlap between touch areas of different composables, always use a large enough minimum size for the composable. In the example, that would mean using the sizeIn modifier to set the minimum size for the inner box:

      @Composable
      private fun LargeBox() {
          var clicked by remember { mutableStateOf(false) }
          Box(
              Modifier
                  .size(100.dp)
                  .background(if (clicked) Color.DarkGray else Color.LightGray)
          ) {
              Box(
                  Modifier
                      .align(Alignment.Center)
                      .clickable { clicked = !clicked }
                      .background(Color.Black)
                      .sizeIn(minWidth = 48.dp, minHeight = 48.dp)
              )
          }
      }AccessibilitySnippets.kt

      Figure 5.

      A larger box touch target.

      If the element must keep a smaller visible size, use the minimumInteractiveComponentSize modifier from Material 3 instead. It reserves at least 48 dp of layout space in each dimension and centers the element in that space, so the element keeps its drawn size and the elements around it move to make room. The modifier doesn't expand the touch target itself: it leaves room in the layout for the expansion described earlier. Material components such as Checkbox use this modifier internally. Put it before any size modifier, because a size modifier before it limits the space that it can reserve.

      @Composable
      private fun MinimumInteractiveBox() {
          var clicked by remember { mutableStateOf(false) }
  - id: live-compose-guide-accessibility-api-defaults-minimum-target-sizes-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/api-defaults#minimum-target-sizes
    revision: web:compose-guide-accessibility-api-defaults:content@sha256:17cdd5bb64f80d2236f8827ae9134a0da598ce633e418960fc78d0c6d92be726
    sha256: 6e9c1bd62a8fc59e55667026a4dd155c4d7cc69c2cb9c3f255241973f5b61258
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Any on-screen element that someone can click, touch, or interact with must be large enough for reliable interaction. When sizing these elements, make sure to set the minimum size to 48dp to correctly follow the Material Design accessibility guidelines.

      Material components—like Checkbox, RadioButton, Switch, Slider, and Surface—set this minimum size internally, but only when the component can receive user actions. For example, when a Checkbox has its onCheckedChange parameter set to a non-null value, the checkbox includes padding to have a width and height of at least 48 dp.

      @Composable
      private fun CheckableCheckbox() {
          Checkbox(checked = true, onCheckedChange = {})
      }AccessibilitySnippets.kt

      Figure 1.

      A checkbox with default padding.

      When the onCheckedChange parameter is set to null, the padding is not included, because the component cannot be interacted with directly.

      @Composable
      private fun NonClickableCheckbox() {
          Checkbox(checked = true, onCheckedChange = null)
      }AccessibilitySnippets.kt

      Figure 2.

      A checkbox without padding.

      When implementing selection controls like Switch, RadioButton, or Checkbox, you typically lift the clickable behavior to a parent container by setting the click callback on the composable to null, and adding a toggleable or selectable modifier to the parent composable.

      @Composable
      private fun CheckableRow() {
          MaterialTheme {
              var checked by remember { mutableStateOf(false) }
              Row(
                  Modifier
                      .toggleable(
                          value = checked,
                          role = Role.Checkbox,
                          onValueChange = { checked = !checked }
                      )
                      .padding(16.dp)
                      .fillMaxWidth()
              ) {
                  Text("Option", Modifier.weight(1f))
                  Checkbox(checked = checked, onCheckedChange = null)
              }
          }
      }AccessibilitySnippets.kt

      Figure 3.

      A checkbox with clickable behavior.

      When the size of a clickable composable is smaller than the minimum touch target size, Compose still increases the touch target size. It does so by expanding the touch target size outside of the boundaries of the composable.

      The following example
compose:
  id: guide-minimum-touch-target-layout-space
  artifact: androidx.compose.foundation:foundation-layout
  fqn: androidx.compose.foundation.layout.sizeIn
  sections:
    - id: guide-minimum-touch-target-layout-space
      title: "Guidance: Reserve layout space for minimum touch targets"
      aliases:
        - androidx.compose.foundation.layout.sizeIn
        - androidx.compose.material3.minimumInteractiveComponentSize
        - minimum touch target
        - 48 dp
        - touch target overlap
        - accessibility
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-api-defaults-minimum-target-sizes-source
        - live-compose-guide-accessibility-api-defaults-minimum-target-sizes-2-source
      relatedIds:
        - live-compose-guide-accessibility-api-defaults-minimum-target-sizes
        - live-compose-guide-accessibility-api-defaults-minimum-target-sizes-2
---

# Guidance: Reserve layout space for minimum touch targets

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Reserve layout space for minimum touch targets

Guidance: Give interactive elements a minimum 48 dp size for the Material accessibility guideline, for example Modifier.sizeIn(minWidth = 48.dp, minHeight = 48.dp). Compose can expand a small clickable element's touch target outside its visible bounds; allocate enough layout space to avoid overlapping neighboring touch areas. Material 3 minimumInteractiveComponentSize reserves layout space for a smaller visual element; it does not itself expand the touch target. Limitation: a preceding size modifier can limit the reserved space; verify the final hit areas in the consuming layout.

Sources: [live-compose-guide-accessibility-api-defaults-minimum-target-sizes-source](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#minimum-target-sizes), [live-compose-guide-accessibility-api-defaults-minimum-target-sizes-2-source](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#minimum-target-sizes)
