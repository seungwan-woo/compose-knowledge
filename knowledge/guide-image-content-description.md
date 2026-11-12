---
type: reference
title: "Guidance: Describe meaningful images and omit decorative descriptions"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-accessibility-api-defaults-graphic-elements-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/accessibility/api-defaults#graphic-elements
    revision: web:compose-guide-accessibility-api-defaults:content@sha256:17cdd5bb64f80d2236f8827ae9134a0da598ce633e418960fc78d0c6d92be726
    sha256: 3745480670acb806d282738717e244122f07302890ff7a368c04c8e5218e0e71
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When you define an Image or Icon composable, there is no automatic way for the Android framework to understand what the app is displaying. You need to pass a textual description of the graphic element.

      Imagine a screen where the user can share the current page with friends. This screen contains a clickable share icon:

      Figure 6.

      A row of clickable icons with the 'Share' icon selected.

      Based on the icon alone, the Android framework can't describe it to a visually impaired user. The Android framework needs an additional textual description of the icon.

      The contentDescription parameter describes a graphic element. Use a localized string, as it is visible to the user.

      @Composable
      private fun ShareButton(onClick: () -> Unit) {
          IconButton(onClick = onClick) {
              Icon(
                  imageVector = Icons.Filled.Share,
                  contentDescription = stringResource(R.string.label_share)
              )
          }
      }AccessibilitySnippets.kt

      Some graphic elements are purely decorative and you might not want to communicate them to the user. When you set the contentDescription parameter to null, you indicate to the Android framework that this element does not have associated actions or state.

      @Composable
      private fun PostImage(post: Post, modifier: Modifier = Modifier) {
          val image = post.imageThumb ?: painterResource(R.drawable.placeholder_1_1)

          Image(
              painter = image,
              // Specify that this image has no semantic meaning
              contentDescription = null,
              modifier = modifier
                  .size(40.dp, 40.dp)
                  .clip(MaterialTheme.shapes.small)
          )
      }AccessibilitySnippets.kt

      contentDescription is mainly meant to be used for graphic elements, such as images. Material components, like Button or Text, and actionable behaviors, like clickable or toggleable, come with other predefined semantics that describe their intrinsic behavior, and can be changed through other Compose APIs.
compose:
  id: guide-image-content-description
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.semantics.contentDescription
  sections:
    - id: guide-image-content-description
      title: "Guidance: Describe meaningful images and omit decorative descriptions"
      aliases:
        - androidx.compose.ui.semantics.contentDescription
        - androidx.compose.foundation.Image
        - androidx.compose.material3.Icon
        - contentDescription
        - decorative image
        - localized accessibility description
        - 이미지 설명
        - 장식 이미지
        - 접근성 설명
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-accessibility-api-defaults-graphic-elements-source
      relatedIds:
        - live-compose-guide-accessibility-api-defaults-graphic-elements
---

# Guidance: Describe meaningful images and omit decorative descriptions

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Describe meaningful images and omit decorative descriptions

Guidance: Provide Image and Icon with a textual contentDescription that explains a meaningful graphic; the framework cannot infer what the image displays. Use a localized string because this description is presented to users, as with a share icon labeled from string resources. Set contentDescription = null for a purely decorative graphic with no semantic meaning. Limitation: contentDescription is mainly for graphic elements; Text, Button, clickable, and toggleable already provide semantics for their intrinsic behavior.

Sources: [live-compose-guide-accessibility-api-defaults-graphic-elements-source](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#graphic-elements)
