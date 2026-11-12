---
type: reference
title: Work with fonts &nbsp;
description: "Public source: https://developer.android.com/develop/ui/compose/text/fonts"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-text-fonts-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#additional-resources
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: eaff4f750b471ecb8fe1543599d254cbf70a5aa1586ab6ea87724ee72f4347c1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      For more information, see the following blog post about variable fonts:

      Just your type: Variable fonts in Compose
  - id: live-compose-guide-text-fonts-caveats-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#caveats
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: 7f5c1e390fd02bf2dadabab83485f94e7b4cd8b4894abb7d3854d8fd5110c853
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Google Fonts takes several months to make new fonts available on Android. There's a gap in time between when a font is added in fonts.google.com and when it's available through the downloadable fonts API (either in the View system or in Compose). Newly added fonts might fail to load in your app with an IllegalStateException. To help developers identify this error over other types of font loading errors, we added descriptive messaging for the exception in Compose with the changes here. If you find any issues, report them using the issue tracker.
  - id: live-compose-guide-text-fonts-debug-implementation-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#debug-implementation
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: c8140b017972e20d314b466d76b05b930086e9bc13c870f073003563d7b64ddc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To help you verify if the font is being downloaded correctly, you can define a debug coroutine handler. Your handle provides the behavior of what to do in case the font fails to load asynchronously.

      Start by creating a CoroutineExceptionHandler:

      val handler = CoroutineExceptionHandler { _, throwable ->
          // process the Throwable
          Log.e(TAG, "There has been an issue: ", throwable)
      }TextDownloadableFontsSnippets.kt

      Pass it to the createFontFamilyResolver method to have the resolver use the new handler:

      CompositionLocalProvider(
          LocalFontFamilyResolver provides createFontFamilyResolver(LocalContext.current, handler)
      ) {
          Column {
              Text(
                  text = "Hello World!", style = MaterialTheme.typography.bodyMedium
              )
          }
      }TextDownloadableFontsSnippets.kt

      You can also use the isAvailableOnDevice API from the provider to test if the provider is available and certificates are configured correctly. To do this, you can call the isAvailableOnDevice method that returns false if the provider is configured incorrectly.

      val context = LocalContext.current
      LaunchedEffect(Unit) {
          if (provider.isAvailableOnDevice(context)) {
              Log.d(TAG, "Success!")
          }
      }TextDownloadableFontsSnippets.kt
  - id: live-compose-guide-text-fonts-downloadable-fonts-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#downloadable-fonts
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: 855a6bc069dd05bc17ce17dcbad4405e5bf4271bfaed2288b489774665a63b45
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Starting in Compose 1.2.0, you can use the downloadable fonts API in your Compose app to download Google fonts asynchronously and use them in your app.

      Support for downloadable fonts provided by custom providers is not currently available.
  - id: live-compose-guide-text-fonts-fallback-fonts-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#fallback-fonts
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: 3b12366fd012028ed2d13783092b2433af7b58f024e170fffab666efc9a66114
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can determine a chain of fallbacks for your font in case the font fails to download properly. For instance, if you have your downloadable font defined like this:

      // ...
       import androidx.compose.ui.text.googlefonts.Font
       // ...

      val fontName = GoogleFont("Lobster Two")

      val fontFamily = FontFamily(
          Font(googleFont = fontName, fontProvider = provider),
          Font(googleFont = fontName, fontProvider = provider, weight = FontWeight.Bold)
      )TextDownloadableFontsSnippets.kt

      You can define the defaults for your font for both weights like this:

      // ...
       import androidx.compose.ui.text.font.Font
       import androidx.compose.ui.text.googlefonts.Font
       // ...

      val fontName = GoogleFont("Lobster Two")

      val fontFamily = FontFamily(
          Font(googleFont = fontName, fontProvider = provider),
          Font(resId = R.font.my_font_regular),
          Font(googleFont = fontName, fontProvider = provider, weight = FontWeight.Bold),
          Font(resId = R.font.my_font_regular_bold, weight = FontWeight.Bold)
      )TextDownloadableFontsSnippets.kt

      Make sure you’re adding the correct imports.

      Defining the FontFamily like this creates a FontFamily containing two chains, one per weight. The loading mechanism will try to resolve the online font first, and then the font located in your local R.font resource folder.
  - id: live-compose-guide-text-fonts-load-variable-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#load-variable
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: 4e3997dee9feea765b6b1f937423eb01984c5f48a9bbc0e6d07b64f1cff6890f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      else { default }VariableFontsSnippets.kt

      Configure the Material Design 3 typography to use the FontFamily: // Type.kt val Typography = Typography( displayLarge = TextStyle( fontFamily = displayLargeFontFamily, fontSize = 50.sp, lineHeight = 64.sp, letterSpacing = 0.sp, /***/ ) )VariableFontsSnippets.kt This sample uses displayLarge Material 3 typography, which has different default font settings and recommended uses. For example, you should use displayLarge for short, critical text, as it's the largest text on the screen. With Material 3, you can change the default values of TextStyle and fontFamily to customize your typography. In the snippet above, you configure instances of TextStyle to customize font settings for each font family.

      Now that you've defined your typography, pass it to the M3 MaterialTheme: MaterialTheme( colorScheme = MaterialTheme.colorScheme, typography = Typography, content = content )VariableFontsSnippets.kt

      Finally, use a Text composable and specify the style to one of the defined typography styles, MaterialTheme.typography.displayLarge: @Composable @Preview fun CardDetails() { MyCustomTheme { Card( shape = RoundedCornerShape(8.dp), elevation = CardDefaults.cardElevation(defaultElevation = 4.dp), modifier = Modifier .fillMaxWidth() .padding(16.dp) ) { Column( modifier = Modifier.padding(16.dp) ) { Text( text = "Compose", style = MaterialTheme.typography.displayLarge, modifier = Modifier.padding(bottom = 8.dp), maxLines = 1 ) Text( text = "Beautiful UIs on Android", style = MaterialTheme.typography.headlineMedium, modifier = Modifier.padding(bottom = 8.dp), maxLines = 2 ) Text( text = "Jetpack Compose is Android’s recommended modern toolkit for building native UI. It simplifies and accelerates UI development on Android. Quickly bring your app to life with less code, powerful tools, and intuitive Kotlin APIs.", style = MaterialTheme.typography.bodyLarge, modifier = Modifier.padding(bottom = 8.dp), maxLines = 3 ) } } } }VariableFontsSnippets.kt Each Text composable is configured through its Material theme's style and contains a different variable font configuration. You can use MaterialTheme.typography to retrieve the typography provided
  - id: live-compose-guide-text-fonts-load-variable-3-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#load-variable
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: 2912c709f0c27f3a9af2a65086b81bf7c18abfe4d55200d2ffecee0ddb092a36
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      to the M3 MaterialTheme composable.

      Figure 2.

      Variable font applied in three different configurations.
  - id: live-compose-guide-text-fonts-load-variable-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#load-variable
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: 5105e9b84743968f52172b226547895fbaf9274b7f11c7093080bf6f68b1b63a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Download the variable font you want to use (for example Roboto Flex) and place it in the app/res/font folder in your app. Make sure that the .ttf file you add is the variable font version of the font, and that the name of your font file is all lowercase and doesn't contain any special characters.

      To load a variable font, define a FontFamily using the font placed in the res/font/ directory: // In Typography.kt @OptIn(ExperimentalTextApi::class) val displayLargeFontFamily = FontFamily( Font( R.font.robotoflex_variable, variationSettings = FontVariation.Settings( FontVariation.weight(950), FontVariation.width(30f), FontVariation.slant(-6f), ) ) )VariableFontsSnippets.kt The FontVariation API allows you to configure standard font axes such as weight, width, and slant. These are standard axes that are available with any variable font. You can create different configurations of the font based on where the font will be used.

      Variable fonts are only available for Android versions O and above, so add a guardrail and configure an appropriate fallback: // In Typography.kt val default = FontFamily( /* * This can be any font that makes sense */ Font( R.font.robotoflex_static_regular ) ) @OptIn(ExperimentalTextApi::class) val displayLargeFontFamily = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) { FontFamily( Font( R.font.robotoflex_variable, variationSettings = FontVariation.Settings( FontVariation.weight(950), FontVariation.width(30f), FontVariation.slant(-6f), ) ) ) } else { default }VariableFontsSnippets.kt

      Extract the settings into a set of constants for easier reuse and replace the font settings with these constants: // VariableFontDimension.kt object DisplayLargeVFConfig { const val WEIGHT = 950 const val WIDTH = 30f const val SLANT = -6f const val ASCENDER_HEIGHT = 800f const val COUNTER_WIDTH = 500 } @OptIn(ExperimentalTextApi::class) val displayLargeFontFamily = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) { FontFamily( Font( R.font.robotoflex_variable, variationSettings = FontVariation.Settings( FontVariation.weight(DisplayLargeVFConfig.WEIGHT), FontVariation.width(DisplayLargeVFConfig.WIDTH), FontVariation.slant(DisplayLargeVFConfig.SLANT), ) ) ) }
  - id: live-compose-guide-text-fonts-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#main-content
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: 8498a90a81140529817c45de85f3f91e2592bda7064c62774f380308d48f8606
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: This page describes how to set fonts in your Compose app.
  - id: live-compose-guide-text-fonts-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#recommended_for_you
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: 8f95687f68b55a87f34bcaa8c16f6fed07a19000245ab3929da001beb3282242
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Resources in Compose

      Style text

      Material Design 2 in Compose
  - id: live-compose-guide-text-fonts-set-font-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#set-font
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: 9ac9f4db0e712c067c6ce096dbc189ef07a209de679e8aece3399f0ae9491f76
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Text has a fontFamily parameter to allow setting the font used in the composable. By default, serif, sans-serif, monospace and cursive font families are included:

      @Composable
      fun DifferentFonts() {
          Column {
              Text("Hello World", fontFamily = FontFamily.Serif)
              Text("Hello World", fontFamily = FontFamily.SansSerif)
          }
      }TextSnippets.kt

      You can use the fontFamily attribute to work with custom fonts and typefaces defined in the res/font folder:

      This example shows how you would define a fontFamily based on those font files and using the Font function:

      val firaSansFamily = FontFamily(
          Font(R.font.firasans_light, FontWeight.Light),
          Font(R.font.firasans_regular, FontWeight.Normal),
          Font(R.font.firasans_italic, FontWeight.Normal, FontStyle.Italic),
          Font(R.font.firasans_medium, FontWeight.Medium),
          Font(R.font.firasans_bold, FontWeight.Bold)
      )TextSnippets.kt

      You can pass this fontFamily to your Text composable. Because a fontFamily can include different weights, you can manually set fontWeight to select the right weight for your text:

      Column {
          Text(text = "text", fontFamily = firaSansFamily, fontWeight = FontWeight.Light)
          Text(text = "text", fontFamily = firaSansFamily, fontWeight = FontWeight.Normal)
          Text(
              text = "text",
              fontFamily = firaSansFamily,
              fontWeight = FontWeight.Normal,
              fontStyle = FontStyle.Italic
          )
          Text(text = "text", fontFamily = firaSansFamily, fontWeight = FontWeight.Medium)
          Text(text = "text", fontFamily = firaSansFamily, fontWeight = FontWeight.Bold)
      }TextSnippets.kt

      To learn how to set the typography in your entire app, see Custom design systems in Compose.
  - id: live-compose-guide-text-fonts-use-custom-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#use-custom
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: f7c955c97c773647c333c545b5633e8f2dff29e86b91140ccbf1c32c5072f186
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Fonts can also have custom axes. These are defined within the font file itself. For example, the Roboto Flex font has the ascender height ("YTAS") axis, which adjusts the height of the lowercase ascenders, while counter width ("XTRA") adjusts the width of each letter.

      You can change the value of these axes with the FontVariation settings.

      For more information about the custom axes you can configure for a font, see the table of the supported axes for each font.

      To use custom axes, define functions for the custom ascenderHeight and counterWidth axes: fun ascenderHeight(ascenderHeight: Float): FontVariation.Setting { require(ascenderHeight in 649f..854f) { "'Ascender Height' must be in 649f..854f" } return FontVariation.Setting("YTAS", ascenderHeight) } fun counterWidth(counterWidth: Int): FontVariation.Setting { require(counterWidth in 323..603) { "'Counter width' must be in 323..603" } return FontVariation.Setting("XTRA", counterWidth.toFloat()) }VariableFontsSnippets.kt These functions do the following: Define guardrails for the values they can accept. As you can see in the Variable fonts catalog, ascenderHeight (YTAS) has a minimum value of 649f and a maximum of 854f. Return the font setting, so the configuration is ready to add to the font. In the FontVariation.Setting() method, the axis name (YTAS, XTRA) is hardcoded, and it takes the value as a parameter.

      Using the axes with the font configuration, pass additional parameters to each Font that is loaded: @OptIn(ExperimentalTextApi::class) val displayLargeFontFamily = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) { FontFamily( Font( R.font.robotoflex_variable, variationSettings = FontVariation.Settings( FontVariation.weight(DisplayLargeVFConfig.WEIGHT), FontVariation.width(DisplayLargeVFConfig.WIDTH), FontVariation.slant(DisplayLargeVFConfig.SLANT), ascenderHeight(DisplayLargeVFConfig.ASCENDER_HEIGHT), counterWidth(DisplayLargeVFConfig.COUNTER_WIDTH) ) ) ) } else { default }VariableFontsSnippets.kt Notice that the height of the lowercase ascenders is now increased, and the other text is wider:

      Figure 3.

      Text showing custom axes set on variable fonts.
  - id: live-compose-guide-text-fonts-use-downloadable-fonts-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#use-downloadable-fonts
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: 8df30b2dc7a120645aa6169a3cb4d2f7667c1f77fa487ae8f81cc6e2ad07a608
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      fontFamily,
              fontWeight = FontWeight.Bold,
              letterSpacing = 2.sp,
              /*...*/
          ),
          headlineMedium = TextStyle(
              fontFamily = fontFamily, fontWeight = FontWeight.SemiBold/*...*/
          ),
          /*...*/
      )TextDownloadableFontsSnippets.kt

      Next, set the Typography to your app’s theme:

      MyAppTheme(
          typography = MyTypography
      )/*...*/TextDownloadableFontsSnippets.kt

      For an example of an app that’s implementing downloadable fonts in Compose together with Material3, see the Jetchat sample app.
  - id: live-compose-guide-text-fonts-use-downloadable-fonts-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#use-downloadable-fonts
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: 55e309ed496be199b5491a4228775c5c7a52cb7115584452f609a039e3a31610
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To download a font programmatically from within your app, follow these steps:

      Add the dependency: Groovy dependencies { ... implementation "androidx.compose.ui:ui-text-google-fonts:1.12.1" }Kotlin dependencies { ... implementation("androidx.compose.ui:ui-text-google-fonts:1.12.1") }

      Initialize the GoogleFont.Provider with the credentials for Google Fonts: val provider = GoogleFont.Provider( providerAuthority = "com.google.android.gms.fonts", providerPackage = "com.google.android.gms", certificates = R.array.com_google_android_gms_fonts_certs )TextDownloadableFontsSnippets.kt The parameters the provider receives are: The font provider authority for Google Fonts. The font provider package to verify the identity of the provider. A list of sets of hashes for the certificates to verify the identity of the provider. You can find the hashes required for the Google Fonts provider in the font_certs.xml file in the Jetchat sample app.

      Define a FontFamily: // ... import androidx.compose.ui.text.googlefonts.GoogleFont import androidx.compose.ui.text.font.FontFamily import androidx.compose.ui.text.googlefonts.Font // ... val fontName = GoogleFont("Lobster Two") val fontFamily = FontFamily( Font(googleFont = fontName, fontProvider = provider) )TextDownloadableFontsSnippets.kt You can query for other parameters for your font like weight and style with FontWeight and FontStyle respectively: // ... import androidx.compose.ui.text.googlefonts.GoogleFont import androidx.compose.ui.text.font.FontFamily import androidx.compose.ui.text.googlefonts.Font // ... val fontName = GoogleFont("Lobster Two") val fontFamily = FontFamily( Font( googleFont = fontName, fontProvider = provider, weight = FontWeight.Bold, style = FontStyle.Italic ) )TextDownloadableFontsSnippets.kt

      Configure the FontFamily to be used in your Text composable function:

      Text(
          fontFamily = fontFamily, text = "Hello World!"
      )TextDownloadableFontsSnippets.kt

      You can also define Typography to use your FontFamily:

      val MyTypography = Typography(
          bodyMedium = TextStyle(
              fontFamily = fontFamily, fontWeight = FontWeight.Normal, fontSize = 12.sp/*...*/
          ),
          bodyLarge = TextStyle(
              fontFamily =
  - id: live-compose-guide-text-fonts-variable-fonts-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/fonts#variable-fonts
    revision: web:compose-guide-text-fonts:content@sha256:eb6864b02f1f8a2c75516d66625285ca6460db8d7994d68a8d804269c05cdb43
    sha256: e601e8f50c138702b66fa7ad8fcbb764a451e987c6cb71d25e3ebfcb07b063a1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A variable font is a font format that allows one font file to contain different styles. With variable fonts, you can modify axes (or parameters) to generate your preferred style. These axes can be standard, such as weight, width, slant, and italic, or custom, which differ across variable fonts.

      Figure 1.

      Text using the same variable font customized with different axis values.

      Using variable fonts instead of regular font files allows you to only have one font file instead of multiple.

      For more background about variable fonts, see Google Fonts Knowledge, the entire catalog of available variable fonts, and a table of the supported axes for each font.

      This doc shows you how to implement a variable font in your Compose app.
compose:
  id: live-compose-guide-text-fonts
  artifact: androidx.compose.ui:ui-text
  fqn: androidx.compose.ui.text
  sections:
    - id: live-compose-guide-text-fonts-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-caveats
      title: Caveats
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-caveats-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-debug-implementation
      title: Debug your implementation
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-debug-implementation-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-downloadable-fonts
      title: Downloadable fonts
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-downloadable-fonts-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-fallback-fonts
      title: Add fallback fonts
      aliases:
        - androidx.compose.ui.text.font.Font
        - androidx.compose.ui.text.font.FontFamily
        - androidx.compose.ui.text.font.FontWeight
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-fallback-fonts-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-load-variable
      title: Load a variable font
      aliases:
        - androidx.compose.ui.text.font.Font
        - androidx.compose.ui.text.font.FontFamily
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-load-variable-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-load-variable-2
      title: Load a variable font
      aliases:
        - androidx.compose.ui.text.font.FontFamily
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-load-variable-2-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-load-variable-3
      title: Load a variable font
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-load-variable-3-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-main-content-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-set-font
      title: Set font
      aliases:
        - androidx.compose.ui.text.font.Font
        - androidx.compose.ui.text.font.FontFamily
        - androidx.compose.ui.text.font.FontWeight
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-set-font-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-use-custom
      title: Use custom axes
      aliases:
        - androidx.compose.ui.text.font.Font
        - androidx.compose.ui.text.font.FontFamily
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-use-custom-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-use-downloadable-fonts
      title: Use downloadable fonts programmatically
      aliases:
        - androidx.compose.ui.text.font.Font
        - androidx.compose.ui.text.font.FontFamily
        - androidx.compose.ui.text.font.FontWeight
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-use-downloadable-fonts-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-use-downloadable-fonts-2
      title: Use downloadable fonts programmatically
      aliases:
        - androidx.compose.ui.text.font.FontWeight
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-use-downloadable-fonts-2-source
      relatedIds: []
    - id: live-compose-guide-text-fonts-variable-fonts
      title: Use variable fonts
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-fonts-variable-fonts-source
      relatedIds: []
---

# Work with fonts &nbsp;

Public source: https://developer.android.com/develop/ui/compose/text/fonts

## Additional resources

For more information, see the following blog post about variable fonts:

Just your type: Variable fonts in Compose

Sources: [live-compose-guide-text-fonts-additional-resources-source](https://developer.android.com/develop/ui/compose/text/fonts#additional-resources)

## Caveats

Google Fonts takes several months to make new fonts available on Android. There's a gap in time between when a font is added in fonts.google.com and when it's available through the downloadable fonts API (either in the View system or in Compose). Newly added fonts might fail to load in your app with an IllegalStateException. To help developers identify this error over other types of font loading errors, we added descriptive messaging for the exception in Compose with the changes here. If you find any issues, report them using the issue tracker.

Sources: [live-compose-guide-text-fonts-caveats-source](https://developer.android.com/develop/ui/compose/text/fonts#caveats)

## Debug your implementation

To help you verify if the font is being downloaded correctly, you can define a debug coroutine handler. Your handle provides the behavior of what to do in case the font fails to load asynchronously.

Start by creating a CoroutineExceptionHandler:

val handler = CoroutineExceptionHandler { _, throwable ->
    // process the Throwable
    Log.e(TAG, "There has been an issue: ", throwable)
}TextDownloadableFontsSnippets.kt

Pass it to the createFontFamilyResolver method to have the resolver use the new handler:

CompositionLocalProvider(
    LocalFontFamilyResolver provides createFontFamilyResolver(LocalContext.current, handler)
) {
    Column {
        Text(
            text = "Hello World!", style = MaterialTheme.typography.bodyMedium
        )
    }
}TextDownloadableFontsSnippets.kt

You can also use the isAvailableOnDevice API from the provider to test if the provider is available and certificates are configured correctly. To do this, you can call the isAvailableOnDevice method that returns false if the provider is configured incorrectly.

val context = LocalContext.current
LaunchedEffect(Unit) {
    if (provider.isAvailableOnDevice(context)) {
        Log.d(TAG, "Success!")
    }
}TextDownloadableFontsSnippets.kt

Sources: [live-compose-guide-text-fonts-debug-implementation-source](https://developer.android.com/develop/ui/compose/text/fonts#debug-implementation)

## Downloadable fonts

Starting in Compose 1.2.0, you can use the downloadable fonts API in your Compose app to download Google fonts asynchronously and use them in your app.

Support for downloadable fonts provided by custom providers is not currently available.

Sources: [live-compose-guide-text-fonts-downloadable-fonts-source](https://developer.android.com/develop/ui/compose/text/fonts#downloadable-fonts)

## Add fallback fonts

You can determine a chain of fallbacks for your font in case the font fails to download properly. For instance, if you have your downloadable font defined like this:

// ...
 import androidx.compose.ui.text.googlefonts.Font
 // ...

val fontName = GoogleFont("Lobster Two")

val fontFamily = FontFamily(
    Font(googleFont = fontName, fontProvider = provider),
    Font(googleFont = fontName, fontProvider = provider, weight = FontWeight.Bold)
)TextDownloadableFontsSnippets.kt

You can define the defaults for your font for both weights like this:

// ...
 import androidx.compose.ui.text.font.Font
 import androidx.compose.ui.text.googlefonts.Font
 // ...

val fontName = GoogleFont("Lobster Two")

val fontFamily = FontFamily(
    Font(googleFont = fontName, fontProvider = provider),
    Font(resId = R.font.my_font_regular),
    Font(googleFont = fontName, fontProvider = provider, weight = FontWeight.Bold),
    Font(resId = R.font.my_font_regular_bold, weight = FontWeight.Bold)
)TextDownloadableFontsSnippets.kt

Make sure you’re adding the correct imports.

Defining the FontFamily like this creates a FontFamily containing two chains, one per weight. The loading mechanism will try to resolve the online font first, and then the font located in your local R.font resource folder.

Sources: [live-compose-guide-text-fonts-fallback-fonts-source](https://developer.android.com/develop/ui/compose/text/fonts#fallback-fonts)

## Load a variable font

Download the variable font you want to use (for example Roboto Flex) and place it in the app/res/font folder in your app. Make sure that the .ttf file you add is the variable font version of the font, and that the name of your font file is all lowercase and doesn't contain any special characters.

To load a variable font, define a FontFamily using the font placed in the res/font/ directory: // In Typography.kt @OptIn(ExperimentalTextApi::class) val displayLargeFontFamily = FontFamily( Font( R.font.robotoflex_variable, variationSettings = FontVariation.Settings( FontVariation.weight(950), FontVariation.width(30f), FontVariation.slant(-6f), ) ) )VariableFontsSnippets.kt The FontVariation API allows you to configure standard font axes such as weight, width, and slant. These are standard axes that are available with any variable font. You can create different configurations of the font based on where the font will be used.

Variable fonts are only available for Android versions O and above, so add a guardrail and configure an appropriate fallback: // In Typography.kt val default = FontFamily( /* * This can be any font that makes sense */ Font( R.font.robotoflex_static_regular ) ) @OptIn(ExperimentalTextApi::class) val displayLargeFontFamily = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) { FontFamily( Font( R.font.robotoflex_variable, variationSettings = FontVariation.Settings( FontVariation.weight(950), FontVariation.width(30f), FontVariation.slant(-6f), ) ) ) } else { default }VariableFontsSnippets.kt

Extract the settings into a set of constants for easier reuse and replace the font settings with these constants: // VariableFontDimension.kt object DisplayLargeVFConfig { const val WEIGHT = 950 const val WIDTH = 30f const val SLANT = -6f const val ASCENDER_HEIGHT = 800f const val COUNTER_WIDTH = 500 } @OptIn(ExperimentalTextApi::class) val displayLargeFontFamily = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) { FontFamily( Font( R.font.robotoflex_variable, variationSettings = FontVariation.Settings( FontVariation.weight(DisplayLargeVFConfig.WEIGHT), FontVariation.width(DisplayLargeVFConfig.WIDTH), FontVariation.slant(DisplayLargeVFConfig.SLANT), ) ) ) }

Sources: [live-compose-guide-text-fonts-load-variable-source](https://developer.android.com/develop/ui/compose/text/fonts#load-variable)

## Load a variable font

else { default }VariableFontsSnippets.kt

Configure the Material Design 3 typography to use the FontFamily: // Type.kt val Typography = Typography( displayLarge = TextStyle( fontFamily = displayLargeFontFamily, fontSize = 50.sp, lineHeight = 64.sp, letterSpacing = 0.sp, /***/ ) )VariableFontsSnippets.kt This sample uses displayLarge Material 3 typography, which has different default font settings and recommended uses. For example, you should use displayLarge for short, critical text, as it's the largest text on the screen. With Material 3, you can change the default values of TextStyle and fontFamily to customize your typography. In the snippet above, you configure instances of TextStyle to customize font settings for each font family.

Now that you've defined your typography, pass it to the M3 MaterialTheme: MaterialTheme( colorScheme = MaterialTheme.colorScheme, typography = Typography, content = content )VariableFontsSnippets.kt

Finally, use a Text composable and specify the style to one of the defined typography styles, MaterialTheme.typography.displayLarge: @Composable @Preview fun CardDetails() { MyCustomTheme { Card( shape = RoundedCornerShape(8.dp), elevation = CardDefaults.cardElevation(defaultElevation = 4.dp), modifier = Modifier .fillMaxWidth() .padding(16.dp) ) { Column( modifier = Modifier.padding(16.dp) ) { Text( text = "Compose", style = MaterialTheme.typography.displayLarge, modifier = Modifier.padding(bottom = 8.dp), maxLines = 1 ) Text( text = "Beautiful UIs on Android", style = MaterialTheme.typography.headlineMedium, modifier = Modifier.padding(bottom = 8.dp), maxLines = 2 ) Text( text = "Jetpack Compose is Android’s recommended modern toolkit for building native UI. It simplifies and accelerates UI development on Android. Quickly bring your app to life with less code, powerful tools, and intuitive Kotlin APIs.", style = MaterialTheme.typography.bodyLarge, modifier = Modifier.padding(bottom = 8.dp), maxLines = 3 ) } } } }VariableFontsSnippets.kt Each Text composable is configured through its Material theme's style and contains a different variable font configuration. You can use MaterialTheme.typography to retrieve the typography provided

Sources: [live-compose-guide-text-fonts-load-variable-2-source](https://developer.android.com/develop/ui/compose/text/fonts#load-variable)

## Load a variable font

to the M3 MaterialTheme composable.

Figure 2.

Variable font applied in three different configurations.

Sources: [live-compose-guide-text-fonts-load-variable-3-source](https://developer.android.com/develop/ui/compose/text/fonts#load-variable)

## Introduction

This page describes how to set fonts in your Compose app.

Sources: [live-compose-guide-text-fonts-main-content-source](https://developer.android.com/develop/ui/compose/text/fonts#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Resources in Compose

Style text

Material Design 2 in Compose

Sources: [live-compose-guide-text-fonts-recommended-for-you-source](https://developer.android.com/develop/ui/compose/text/fonts#recommended_for_you)

## Set font

Text has a fontFamily parameter to allow setting the font used in the composable. By default, serif, sans-serif, monospace and cursive font families are included:

@Composable
fun DifferentFonts() {
    Column {
        Text("Hello World", fontFamily = FontFamily.Serif)
        Text("Hello World", fontFamily = FontFamily.SansSerif)
    }
}TextSnippets.kt

You can use the fontFamily attribute to work with custom fonts and typefaces defined in the res/font folder:

This example shows how you would define a fontFamily based on those font files and using the Font function:

val firaSansFamily = FontFamily(
    Font(R.font.firasans_light, FontWeight.Light),
    Font(R.font.firasans_regular, FontWeight.Normal),
    Font(R.font.firasans_italic, FontWeight.Normal, FontStyle.Italic),
    Font(R.font.firasans_medium, FontWeight.Medium),
    Font(R.font.firasans_bold, FontWeight.Bold)
)TextSnippets.kt

You can pass this fontFamily to your Text composable. Because a fontFamily can include different weights, you can manually set fontWeight to select the right weight for your text:

Column {
    Text(text = "text", fontFamily = firaSansFamily, fontWeight = FontWeight.Light)
    Text(text = "text", fontFamily = firaSansFamily, fontWeight = FontWeight.Normal)
    Text(
        text = "text",
        fontFamily = firaSansFamily,
        fontWeight = FontWeight.Normal,
        fontStyle = FontStyle.Italic
    )
    Text(text = "text", fontFamily = firaSansFamily, fontWeight = FontWeight.Medium)
    Text(text = "text", fontFamily = firaSansFamily, fontWeight = FontWeight.Bold)
}TextSnippets.kt

To learn how to set the typography in your entire app, see Custom design systems in Compose.

Sources: [live-compose-guide-text-fonts-set-font-source](https://developer.android.com/develop/ui/compose/text/fonts#set-font)

## Use custom axes

Fonts can also have custom axes. These are defined within the font file itself. For example, the Roboto Flex font has the ascender height ("YTAS") axis, which adjusts the height of the lowercase ascenders, while counter width ("XTRA") adjusts the width of each letter.

You can change the value of these axes with the FontVariation settings.

For more information about the custom axes you can configure for a font, see the table of the supported axes for each font.

To use custom axes, define functions for the custom ascenderHeight and counterWidth axes: fun ascenderHeight(ascenderHeight: Float): FontVariation.Setting { require(ascenderHeight in 649f..854f) { "'Ascender Height' must be in 649f..854f" } return FontVariation.Setting("YTAS", ascenderHeight) } fun counterWidth(counterWidth: Int): FontVariation.Setting { require(counterWidth in 323..603) { "'Counter width' must be in 323..603" } return FontVariation.Setting("XTRA", counterWidth.toFloat()) }VariableFontsSnippets.kt These functions do the following: Define guardrails for the values they can accept. As you can see in the Variable fonts catalog, ascenderHeight (YTAS) has a minimum value of 649f and a maximum of 854f. Return the font setting, so the configuration is ready to add to the font. In the FontVariation.Setting() method, the axis name (YTAS, XTRA) is hardcoded, and it takes the value as a parameter.

Using the axes with the font configuration, pass additional parameters to each Font that is loaded: @OptIn(ExperimentalTextApi::class) val displayLargeFontFamily = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) { FontFamily( Font( R.font.robotoflex_variable, variationSettings = FontVariation.Settings( FontVariation.weight(DisplayLargeVFConfig.WEIGHT), FontVariation.width(DisplayLargeVFConfig.WIDTH), FontVariation.slant(DisplayLargeVFConfig.SLANT), ascenderHeight(DisplayLargeVFConfig.ASCENDER_HEIGHT), counterWidth(DisplayLargeVFConfig.COUNTER_WIDTH) ) ) ) } else { default }VariableFontsSnippets.kt Notice that the height of the lowercase ascenders is now increased, and the other text is wider:

Figure 3.

Text showing custom axes set on variable fonts.

Sources: [live-compose-guide-text-fonts-use-custom-source](https://developer.android.com/develop/ui/compose/text/fonts#use-custom)

## Use downloadable fonts programmatically

To download a font programmatically from within your app, follow these steps:

Add the dependency: Groovy dependencies { ... implementation "androidx.compose.ui:ui-text-google-fonts:1.12.1" }Kotlin dependencies { ... implementation("androidx.compose.ui:ui-text-google-fonts:1.12.1") }

Initialize the GoogleFont.Provider with the credentials for Google Fonts: val provider = GoogleFont.Provider( providerAuthority = "com.google.android.gms.fonts", providerPackage = "com.google.android.gms", certificates = R.array.com_google_android_gms_fonts_certs )TextDownloadableFontsSnippets.kt The parameters the provider receives are: The font provider authority for Google Fonts. The font provider package to verify the identity of the provider. A list of sets of hashes for the certificates to verify the identity of the provider. You can find the hashes required for the Google Fonts provider in the font_certs.xml file in the Jetchat sample app.

Define a FontFamily: // ... import androidx.compose.ui.text.googlefonts.GoogleFont import androidx.compose.ui.text.font.FontFamily import androidx.compose.ui.text.googlefonts.Font // ... val fontName = GoogleFont("Lobster Two") val fontFamily = FontFamily( Font(googleFont = fontName, fontProvider = provider) )TextDownloadableFontsSnippets.kt You can query for other parameters for your font like weight and style with FontWeight and FontStyle respectively: // ... import androidx.compose.ui.text.googlefonts.GoogleFont import androidx.compose.ui.text.font.FontFamily import androidx.compose.ui.text.googlefonts.Font // ... val fontName = GoogleFont("Lobster Two") val fontFamily = FontFamily( Font( googleFont = fontName, fontProvider = provider, weight = FontWeight.Bold, style = FontStyle.Italic ) )TextDownloadableFontsSnippets.kt

Configure the FontFamily to be used in your Text composable function:

Text(
    fontFamily = fontFamily, text = "Hello World!"
)TextDownloadableFontsSnippets.kt

You can also define Typography to use your FontFamily:

val MyTypography = Typography(
    bodyMedium = TextStyle(
        fontFamily = fontFamily, fontWeight = FontWeight.Normal, fontSize = 12.sp/*...*/
    ),
    bodyLarge = TextStyle(
        fontFamily =

Sources: [live-compose-guide-text-fonts-use-downloadable-fonts-source](https://developer.android.com/develop/ui/compose/text/fonts#use-downloadable-fonts)

## Use downloadable fonts programmatically

fontFamily,
        fontWeight = FontWeight.Bold,
        letterSpacing = 2.sp,
        /*...*/
    ),
    headlineMedium = TextStyle(
        fontFamily = fontFamily, fontWeight = FontWeight.SemiBold/*...*/
    ),
    /*...*/
)TextDownloadableFontsSnippets.kt

Next, set the Typography to your app’s theme:

MyAppTheme(
    typography = MyTypography
)/*...*/TextDownloadableFontsSnippets.kt

For an example of an app that’s implementing downloadable fonts in Compose together with Material3, see the Jetchat sample app.

Sources: [live-compose-guide-text-fonts-use-downloadable-fonts-2-source](https://developer.android.com/develop/ui/compose/text/fonts#use-downloadable-fonts)

## Use variable fonts

A variable font is a font format that allows one font file to contain different styles. With variable fonts, you can modify axes (or parameters) to generate your preferred style. These axes can be standard, such as weight, width, slant, and italic, or custom, which differ across variable fonts.

Figure 1.

Text using the same variable font customized with different axis values.

Using variable fonts instead of regular font files allows you to only have one font file instead of multiple.

For more background about variable fonts, see Google Fonts Knowledge, the entire catalog of available variable fonts, and a table of the supported axes for each font.

This doc shows you how to implement a variable font in your Compose app.

Sources: [live-compose-guide-text-fonts-variable-fonts-source](https://developer.android.com/develop/ui/compose/text/fonts#variable-fonts)
