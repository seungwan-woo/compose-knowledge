---
type: reference
title: State and Jetpack Compose
description: "Public source: https://developer.android.com/develop/ui/compose/state"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-state-blogs-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#blogs
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: bc5cf6009e4a7fb09c956aab653aa7472c2e208847868f0c723ae36f236f60ca
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Effective State Management for TextField in Compose
  - id: live-compose-guide-state-codelabs-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#codelabs
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 83699bd14bc0dc3447905be1fa80caee35d63b83679f94f787b33d351f1c29a4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Using State in Jetpack Compose
  - id: live-compose-guide-state-groovy-1-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#groovy_1
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 86b75b0cdf526e722c94a627c79399bbb2b5c30deeaa17ae94708b628337c334
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      dependencies {
            ...
            implementation "androidx.compose.runtime:runtime-livedata:1.12.1"
      }

      RxJava2: subscribeAsState() subscribeAsState() are extension functions that transform RxJava2's reactive streams (e.g. Single, Observable, Completable) into Compose State. The following dependency is required in the build.gradle file:
  - id: live-compose-guide-state-groovy-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#groovy_2
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: fa9554b3aa536eefec71ebca4cb0af830fc66fb66ba42448da83a9a93195c651
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      dependencies {
            ...
            implementation "androidx.compose.runtime:runtime-rxjava2:1.12.1"
      }

      RxJava3: subscribeAsState() subscribeAsState() are extension functions that transform RxJava3's reactive streams (e.g. Single, Observable, Completable) into Compose State. The following dependency is required in the build.gradle file:
  - id: live-compose-guide-state-groovy-3-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#groovy_3
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: dbf770133aa9d99b432f749899c28bbd11640afdffec166e35b09c55a5331c33
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      dependencies {
            ...
            implementation "androidx.compose.runtime:runtime-rxjava3:1.12.1"
      }
  - id: live-compose-guide-state-groovy-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#groovy
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 00720ec5a8c6b6ca493ff2179274347f4ff38c1e988c70776050a67e1f0f0a79
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      dependencies {
            ...
            implementation "androidx.lifecycle:lifecycle-runtime-compose:2.11.0"
      }

      Flow: collectAsState() collectAsState is similar to collectAsStateWithLifecycle, because it also collects values from a Flow and transforms it into Compose State. Use collectAsState for platform-agnostic code instead of collectAsStateWithLifecycle, which is Android-only. Additional dependencies are not required for collectAsState, because it is available in compose-runtime.

      LiveData: observeAsState() observeAsState() starts observing this LiveData and represents its values using State. The following dependency is required in the build.gradle file:
  - id: live-compose-guide-state-kotlin-1-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#kotlin_1
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: d9051172bfa868e363ab59c715253ea209cb48eab8020d5eedf515180d6b80a1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      dependencies {
            ...
            implementation("androidx.compose.runtime:runtime-livedata:1.12.1")
      }
  - id: live-compose-guide-state-kotlin-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#kotlin_2
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 4f489f2507ff94f234186e5f663c02e6fb407e66341a72905c31f476a52e5e98
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      dependencies {
            ...
            implementation("androidx.compose.runtime:runtime-rxjava2:1.12.1")
      }
  - id: live-compose-guide-state-kotlin-3-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#kotlin_3
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 590119f15431a0821359d00685c51d65b3dc67c35360fd056162887f0b6dadc6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      dependencies {
            ...
            implementation("androidx.compose.runtime:runtime-rxjava3:1.12.1")
      }
  - id: live-compose-guide-state-kotlin-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#kotlin
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 59242fb32e18c15a1efe0756a2f1a6e846a50a62811bea36e27536f208cf0734
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      dependencies {
            ...
            implementation("androidx.lifecycle:lifecycle-runtime-compose:2.11.0")
      }
  - id: live-compose-guide-state-learn-more-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#learn-more
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 9175d77e7321f9e1a92e24468eff860ad6a0794ec1a528203d41608c9417c812
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: To learn more about state and Jetpack Compose, consult the following additional resources.
  - id: live-compose-guide-state-listsaver-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#listsaver
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: add1db1d132188136255937af84ee0c37d00dfd8823cff5eddfa27fd967bdac7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To avoid needing to define the keys for the map, you can also use listSaver and use its indexes as keys:

      data class City(val name: String, val country: String)

      val CitySaver = listSaver<City, Any>(
          save = { listOf(it.name, it.country) },
          restore = { City(it[0] as String, it[1] as String) }
      )

      @Composable
      fun CityScreen() {
          var selectedCity = rememberSaveable(stateSaver = CitySaver) {
              mutableStateOf(City("Madrid", "Spain"))
          }
      }StateOverviewSnippets.kt
  - id: live-compose-guide-state-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#main-content
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: ac18e80541cb91615657e95e3454a3562ce489a149d618521937720438731582
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      State in an app is any value that can change over time. This is a very broad definition and encompasses everything from a Room database to a variable in a class.

      All Android apps display state to the user. A few examples of state in Android apps:

      A Snackbar that shows when a network connection can't be established.

      A blog post and associated comments.

      Ripple animations on buttons that play when a user clicks them.

      Stickers that a user can draw on top of an image.

      Jetpack Compose helps you be explicit about where and how you store and use state in an Android app. This guide focuses on the connection between state and composables, and on the APIs that Jetpack Compose offers to work with state.
  - id: live-compose-guide-state-managing-state-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#managing-state
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 398bf71b5af0b81d3eed527e4681dce60e93d1f121fd9b2acada8eef359c444f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Simple state hoisting can be managed in the composable functions themselves. However, if the amount of state to keep track of increases, or the logic to perform in composable functions arises, it's a good practice to delegate the logic and state responsibilities to other classes: state holders.

      Note that in other materials, state holders are also called hoisted state objects.

      See the state hoisting in Compose documentation or, more generally, the State holders and UI State page in the architecture guide to learn more.
  - id: live-compose-guide-state-mapsaver-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#mapsaver
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 5a5d46091099c15804481bd5d9b53c0511a38bc3e030eca27f4479f13d9f45e8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If for some reason @Parcelize is not suitable, you can use mapSaver to define your own rule for converting an object into a set of values that the system can save to the Bundle.

      data class City(val name: String, val country: String)

      val CitySaver = run {
          val nameKey = "Name"
          val countryKey = "Country"
          mapSaver(
              save = { mapOf(nameKey to it.name, countryKey to it.country) },
              restore = { City(it[nameKey] as String, it[countryKey] as String) }
          )
      }

      @Composable
      fun CityScreen() {
          var selectedCity = rememberSaveable(stateSaver = CitySaver) {
              mutableStateOf(City("Madrid", "Spain"))
          }
      }StateOverviewSnippets.kt
  - id: live-compose-guide-state-parcelize-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#parcelize
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 3aed479ab94c610e88dadae512cda5580fe9e4e69b06b5661fdb4bf8da484352
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The simplest solution is to add the @Parcelize annotation to the object. The object becomes parcelable, and can be bundled. For example, this code makes a parcelable City data type and saves it to the state.

      @Parcelize
      data class City(val name: String, val country: String) : Parcelable

      @Composable
      fun CityScreen() {
          var selectedCity = rememberSaveable {
              mutableStateOf(City("Madrid", "Spain"))
          }
      }StateOverviewSnippets.kt
  - id: live-compose-guide-state-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#recommended_for_you
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 40cd9f3cabef397448dedd4dff4fea7582df63a731bd838dbd26fd31cdb26319
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Architecting your Compose UI

      Save UI state in Compose

      Side-effects in Compose
  - id: live-compose-guide-state-restore-ui-state-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#restore-ui-state
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 0aa7c2270a56a3b3de5ed738f8933224e7af2b148ac89a967b804c1a14a3f8d6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: The rememberSaveable API behaves similarly to remember because it retains state across recompositions, and also across activity or process recreation using the saved instance state mechanism. For example, this happens when the screen is rotated.
  - id: live-compose-guide-state-retrigger-remember-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#retrigger-remember
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 48dbbd50707c5f479b1e9058362a2ca0655cb1ede3b4792479b804f0c5cf3efe
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      {
          val brush = remember(key1 = avatarRes) {
              ShaderBrush(
                  BitmapShader(
                      ImageBitmap.imageResource(res, avatarRes).asAndroidBitmap(),
                      Shader.TileMode.REPEAT,
                      Shader.TileMode.REPEAT
                  )
              )
          }

          Box(
              modifier = modifier.background(brush)
          ) {
              /* ... */
          }
      }StateOverviewSnippets.kt

      In the next snippet, state is hoisted to a plain state holder class MyAppState. It exposes a rememberMyAppState function to initialize an instance of the class using remember. Exposing such functions to create an instance that survives recompositions is a common pattern in Compose. The rememberMyAppState function receives windowSizeClass, which serves as the key parameter for remember. If this parameter changes, the app needs to recreate the plain state holder class with the latest value. This may occur if, for example, the user rotates the device.

      @Composable
      private fun rememberMyAppState(
          windowSizeClass: WindowSizeClass
      ): MyAppState {
          return remember(windowSizeClass) {
              MyAppState(windowSizeClass)
          }
      }

      @Stable
      class MyAppState(
          private val windowSizeClass: WindowSizeClass
      ) { /* ... */ }StateOverviewSnippets.kt

      Compose uses the class's equals implementation to decide if a key has changed and invalidate the stored value.
  - id: live-compose-guide-state-retrigger-remember-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#retrigger-remember
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: ba2aeb271eaec291d9454db5e919ea5014a3ab8b21a4957676f763c6f84c9449
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The remember API is frequently used together with MutableState:

      var name by remember { mutableStateOf("") }StateOverviewSnippets.kt

      Here, using the remember function makes the MutableState value survive recompositions.

      In general, remember takes a calculation lambda parameter. When remember is first run, it invokes the calculation lambda and stores its result. During recomposition, remember returns the value that was last stored.

      Apart from caching state, you can also use remember to store any object or result of an operation in the Composition that is expensive to initialize or calculate. You might not want to repeat this calculation in every recomposition. An example is creating this ShaderBrush object, which is an expensive operation:

      val brush = remember {
          ShaderBrush(
              BitmapShader(
                  ImageBitmap.imageResource(res, avatarRes).asAndroidBitmap(),
                  Shader.TileMode.REPEAT,
                  Shader.TileMode.REPEAT
              )
          )
      }StateOverviewSnippets.kt

      remember stores the value until it leaves the Composition. However, there is a way to invalidate the cached value. The remember API also takes a key or keys parameter. If any of these keys change, the next time the function recomposes, remember invalidates the cache and executes the calculation lambda block again. This mechanism gives you control over the lifetime of an object in the Composition. The calculation remains valid until the inputs change, instead of until the remembered value leaves the Composition.

      The following examples show how this mechanism works.

      In this snippet, a ShaderBrush is created and used as the background paint of a Box composable. remember stores the ShaderBrush instance because it is expensive to recreate, as explained earlier. remember takes avatarRes as the key1 parameter, which is the selected background image. If avatarRes changes, the brush recomposes with the new image, and reapplies to the Box. This can occur when the user selects another image to be the background from a picker.

      @Composable
      private fun BackgroundBanner(
          @DrawableRes avatarRes: Int,
          modifier: Modifier = Modifier,
          res: Resources = LocalContext.current.resources
      )
  - id: live-compose-guide-state-state-and-composition-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#state-and-composition
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: e119df312ae517bd08cb87168c134d80cd754bf62a0fe44d04455c149246e552
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose is declarative and as such the only way to update it is by calling the same composable with new arguments. These arguments are representations of the UI state. Any time a state is updated a recomposition takes place. As a result, things like TextField don't automatically update like they do in imperative XML based views. A composable has to explicitly be told the new state in order for it to update accordingly.

      @Composable
      private fun HelloContent() {
          Column(modifier = Modifier.padding(16.dp)) {
              Text(
                  text = "Hello!",
                  modifier = Modifier.padding(bottom = 8.dp),
                  style = MaterialTheme.typography.bodyMedium
              )
              OutlinedTextField(
                  value = "",
                  onValueChange = { },
                  label = { Text("Name") }
              )
          }
      }StateOverviewSnippets.kt

      If you run this and try to enter text, you'll see that nothing happens. That's because the TextField doesn't update itself—it updates when its value parameter changes. This is due to how composition and recomposition work in Compose.

      Initial composition: creation of a Composition by running composables the first time.

      Recomposition: re-running composables to update the Composition when data changes.

      To learn more about initial composition and recomposition, see Thinking in Compose.
  - id: live-compose-guide-state-state-hoisting-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#state-hoisting
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 294584bba1c623b742305b33398287fc22df6f8c4d8c20de7ad557d39e6bd7d3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      replace HelloScreen, you don't have to change how HelloContent is implemented.

      Unidirectional Data Flow

      The pattern where the state goes down, and events go up is called a unidirectional data flow. In this case, the state goes down from HelloScreen to HelloContent and events go up from HelloContent to HelloScreen. By following unidirectional data flow, you can decouple composables that display state in the UI from the parts of your app that store and change state.

      State should be hoisted to at least the lowest common parent of all composables that use the state (read).

      State should be hoisted to at least the highest level it may be changed (write).

      If two states change in response to the same events they should be hoisted together.

      You can hoist state higher than these rules require, but underhoisting state makes it difficult or impossible to follow unidirectional data flow.

      See the Where to hoist state page to learn more.
  - id: live-compose-guide-state-state-hoisting-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#state-hoisting
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 906f4db5cb2573d12d38b8bde447d8be77bb6120808119de66e1441ca8869414
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      State hoisting in Compose is a pattern of moving state to a composable's caller to make a composable stateless. The general pattern for state hoisting in Jetpack Compose is to replace the state variable with two parameters:

      value: T: the current value to display

      onValueChange: (T) -> Unit: an event that requests the value to change, where T is the proposed new value

      However, you are not limited to onValueChange. If more specific events are appropriate for the composable, you should define them using lambdas.

      State that is hoisted this way has some important properties:

      Single source of truth: By moving state instead of duplicating it, we're ensuring there's only one source of truth. This helps avoid bugs.

      Encapsulated: Only stateful composables can modify their state. It's completely internal.

      Shareable: Hoisted state can be shared with multiple composables. If you wanted to read name in a different composable, hoisting would allow you to do that.

      Interceptable: callers to the stateless composables can decide to ignore or modify events before changing the state.

      Decoupled: the state for the stateless composables may be stored anywhere. For example, it's now possible to move name into a ViewModel.

      In the example case, you extract the name and the onValueChange out of HelloContent and move them up the tree to a HelloScreen composable that calls HelloContent.

      @Composable
      fun HelloScreen() {
          var name by rememberSaveable { mutableStateOf("") }

          HelloContent(name = name, onNameChange = { name = it })
      }

      @Composable
      fun HelloContent(name: String, onNameChange: (String) -> Unit) {
          Column(modifier = Modifier.padding(16.dp)) {
              Text(
                  text = "Hello, $name",
                  modifier = Modifier.padding(bottom = 8.dp),
                  style = MaterialTheme.typography.bodyMedium
              )
              OutlinedTextField(value = name, onValueChange = onNameChange, label = { Text("Name") })
          }
      }StateOverviewSnippets.kt

      By hoisting the state out of HelloContent, it's easier to reason about the composable, reuse it in different situations, and test. HelloContent is decoupled from how its state is stored. Decoupling means that if you modify or
  - id: live-compose-guide-state-state-in-composables-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#state-in-composables
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 520fb8c24b256948ded9349fb5d049db1ff46c27f245a6b85ccd009e034191ff
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: pass in a custom saver object.
  - id: live-compose-guide-state-state-in-composables-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#state-in-composables
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 9b14d66a052a22b3e2198e8ad1ff2b451e8f47fe4dc259540476d5d489fda7cb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Composable functions can use the remember API to store an object in memory. A value computed by remember is stored in the Composition during initial composition, and the stored value is returned during recomposition. remember can be used to store both mutable and immutable objects.

      mutableStateOf creates an observable MutableState<T>, which is an observable type integrated with the compose runtime.

      interface MutableState<T> : State<T> {
          override var value: T
      }

      Any changes to value schedule recomposition of any composable functions that read value.

      There are three ways to declare a MutableState object in a composable:

      val mutableState = remember { mutableStateOf(default) }

      var value by remember { mutableStateOf(default) }

      val (value, setValue) = remember { mutableStateOf(default) }

      These declarations are equivalent, and are provided as syntax sugar for different uses of state. You should pick the one that produces the easiest-to-read code in the composable you're writing.

      The by delegate syntax requires the following imports:

      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.setValue

      You can use the remembered value as a parameter for other composables or even as logic in statements to change which composables are displayed. For example, if you don't want to display the greeting if the name is empty, use the state in an if statement:

      @Composable
      fun HelloContent() {
          Column(modifier = Modifier.padding(16.dp)) {
              var name by remember { mutableStateOf("") }
              if (name.isNotEmpty()) {
                  Text(
                      text = "Hello, $name!",
                      modifier = Modifier.padding(bottom = 8.dp),
                      style = MaterialTheme.typography.bodyMedium
                  )
              }
              OutlinedTextField(
                  value = name,
                  onValueChange = { name = it },
                  label = { Text("Name") }
              )
          }
      }StateOverviewSnippets.kt

      While remember helps you retain state across recompositions, the state is not retained across configuration changes. For this, you must use rememberSaveable. rememberSaveable automatically saves any value that can be saved in a Bundle. For other values, you can
  - id: live-compose-guide-state-stateful-vs-stateless-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#stateful-vs-stateless
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 9ca058aa2f8bf959eac057da5b83be90e13370b9e22daab05a505004070695df
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A composable that uses remember to store an object creates internal state, making the composable stateful. HelloContent is an example of a stateful composable because it holds and modifies its name state internally. This can be useful in situations where a caller doesn't need to control the state and can use it without having to manage the state themselves. However, composables with internal state tend to be less reusable and harder to test.

      A stateless composable is a composable that doesn't hold any state. A common way to achieve statelessness is by using state hoisting.

      As you develop reusable composables, you often want to expose both a stateful and a stateless version of the same composable. The stateful version is convenient for callers that don't care about the state, and the stateless version is necessary for callers that need to control or hoist the state.
  - id: live-compose-guide-state-store-state-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#store-state
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: ae180cc8ad3eaacc482519426ec31250a37486274c48de6ca0ccff9b56df3a12
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The rememberSaveable API is a wrapper around remember that can store data in a Bundle. This API allows state to survive not only recomposition, but also activity recreation and system-initiated process death. rememberSaveable receives input parameters for the same purpose that remember receives keys. The cache is invalidated when any of the inputs change. The next time the function recomposes, rememberSaveable re-executes the calculation lambda block.

      In the following example, rememberSaveable stores userTypedQuery until typedQuery changes:

      var userTypedQuery by rememberSaveable(typedQuery, stateSaver = TextFieldValue.Saver) {
          mutableStateOf(
              TextFieldValue(text = typedQuery, selection = TextRange(typedQuery.length))
          )
      }StateOverviewSnippets.kt
  - id: live-compose-guide-state-use-other-types-of-state-in-jetpack-compose-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#use-other-types-of-state-in-jetpack-compose
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 251965894bcde3fbde7a8da63cbaebaf4cfdf7e5b7cd4f8d8ac256f221ad9458
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose doesn't require that you use MutableState<T> to hold state; it supports other observable types. Before reading another observable type in Compose, you must convert it to a State<T> so that composables can automatically recompose when the state changes.

      Compose ships with functions to create State<T> from common observable types used in Android apps. Before using these integrations, add the appropriate artifact(s) as follows:

      Flow: collectAsStateWithLifecycle() collectAsStateWithLifecycle() collects values from a Flow in a lifecycle-aware manner, allowing your app to conserve app resources. It represents the latest emitted value from the Compose State. Use this API as the recommended way to collect flows on Android apps. The following dependency is required in the build.gradle file (it should be 2.6.0-beta01 or newer):
  - id: live-compose-guide-state-videos-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#videos
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 9681b9b03b8721f0e1aa2d82d44cc0da4e5a7af98c4ab77a62480788987e2a62
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: A Compose state of mind
  - id: live-compose-guide-state-ways-to-store-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#ways-to-store
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 12e4a64f0690a4694c6688423784a98579f9e26934a15c6f3e93b47a89c6993f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: All data types that are added to the Bundle are saved automatically. If you want to save something that cannot be added to the Bundle, there are several options.
compose:
  id: live-compose-guide-state
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: live-compose-guide-state-blogs
      title: Blogs
      aliases:
        - androidx.compose.runtime.State
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-blogs-source
      relatedIds: []
    - id: live-compose-guide-state-codelabs
      title: Codelabs
      aliases:
        - androidx.compose.runtime.State
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-codelabs-source
      relatedIds: []
    - id: live-compose-guide-state-groovy
      title: Groovy
      aliases:
        - androidx.compose.runtime.State
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-groovy-source
      relatedIds: []
    - id: live-compose-guide-state-groovy-1
      title: Groovy
      aliases:
        - androidx.compose.runtime.State
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-groovy-1-source
      relatedIds: []
    - id: live-compose-guide-state-groovy-2
      title: Groovy
      aliases:
        - androidx.compose.runtime.State
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-groovy-2-source
      relatedIds: []
    - id: live-compose-guide-state-groovy-3
      title: Groovy
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-groovy-3-source
      relatedIds: []
    - id: live-compose-guide-state-kotlin
      title: Kotlin
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-kotlin-source
      relatedIds: []
    - id: live-compose-guide-state-kotlin-1
      title: Kotlin
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-kotlin-1-source
      relatedIds: []
    - id: live-compose-guide-state-kotlin-2
      title: Kotlin
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-kotlin-2-source
      relatedIds: []
    - id: live-compose-guide-state-kotlin-3
      title: Kotlin
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-kotlin-3-source
      relatedIds: []
    - id: live-compose-guide-state-learn-more
      title: Learn more
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-learn-more-source
      relatedIds: []
    - id: live-compose-guide-state-listsaver
      title: ListSaver
      aliases:
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-listsaver-source
      relatedIds: []
    - id: live-compose-guide-state-main-content
      title: Introduction
      aliases:
        - androidx.compose.runtime.State
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-main-content-source
      relatedIds: []
    - id: live-compose-guide-state-managing-state
      title: State holders in Compose
      aliases:
        - androidx.compose.runtime.State
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-managing-state-source
      relatedIds: []
    - id: live-compose-guide-state-mapsaver
      title: MapSaver
      aliases:
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-mapsaver-source
      relatedIds: []
    - id: live-compose-guide-state-parcelize
      title: Parcelize
      aliases:
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-parcelize-source
      relatedIds: []
    - id: live-compose-guide-state-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-state-restore-ui-state
      title: Restoring state in Compose
      aliases:
        - androidx.compose.runtime.remember
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-restore-ui-state-source
      relatedIds: []
    - id: live-compose-guide-state-retrigger-remember
      title: Retrigger remember calculations when keys change
      aliases:
        - androidx.compose.runtime.remember
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.MutableState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-retrigger-remember-source
      relatedIds: []
    - id: live-compose-guide-state-retrigger-remember-2
      title: Retrigger remember calculations when keys change
      aliases:
        - androidx.compose.runtime.remember
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-retrigger-remember-2-source
      relatedIds: []
    - id: live-compose-guide-state-state-and-composition
      title: State and composition
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-state-and-composition-source
      relatedIds: []
    - id: live-compose-guide-state-state-hoisting
      title: State hoisting
      aliases:
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.State
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-state-hoisting-source
      relatedIds: []
    - id: live-compose-guide-state-state-hoisting-2
      title: State hoisting
      aliases:
        - androidx.compose.runtime.State
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-state-hoisting-2-source
      relatedIds: []
    - id: live-compose-guide-state-state-in-composables
      title: State in composables
      aliases:
        - androidx.compose.runtime.remember
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.MutableState
        - androidx.compose.runtime.State
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-state-in-composables-source
      relatedIds: []
    - id: live-compose-guide-state-state-in-composables-2
      title: State in composables
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-state-in-composables-2-source
      relatedIds: []
    - id: live-compose-guide-state-stateful-vs-stateless
      title: Stateful versus stateless
      aliases:
        - androidx.compose.runtime.remember
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-stateful-vs-stateless-source
      relatedIds: []
    - id: live-compose-guide-state-store-state
      title: Store state with keys beyond recomposition
      aliases:
        - androidx.compose.runtime.remember
        - androidx.compose.runtime.mutableStateOf
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-store-state-source
      relatedIds: []
    - id: live-compose-guide-state-use-other-types-of-state-in-jetpack-compose
      title: Other supported types of state
      aliases:
        - androidx.compose.runtime.MutableState
        - androidx.compose.runtime.State
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-use-other-types-of-state-in-jetpack-compose-source
      relatedIds: []
    - id: live-compose-guide-state-videos
      title: Videos
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-videos-source
      relatedIds: []
    - id: live-compose-guide-state-ways-to-store
      title: Ways to store state
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-ways-to-store-source
      relatedIds: []
---

# State and Jetpack Compose

Public source: https://developer.android.com/develop/ui/compose/state

## Blogs

Effective State Management for TextField in Compose

Sources: [live-compose-guide-state-blogs-source](https://developer.android.com/develop/ui/compose/state#blogs)

## Codelabs

Using State in Jetpack Compose

Sources: [live-compose-guide-state-codelabs-source](https://developer.android.com/develop/ui/compose/state#codelabs)

## Groovy

dependencies {
      ...
      implementation "androidx.lifecycle:lifecycle-runtime-compose:2.11.0"
}

Flow: collectAsState() collectAsState is similar to collectAsStateWithLifecycle, because it also collects values from a Flow and transforms it into Compose State. Use collectAsState for platform-agnostic code instead of collectAsStateWithLifecycle, which is Android-only. Additional dependencies are not required for collectAsState, because it is available in compose-runtime.

LiveData: observeAsState() observeAsState() starts observing this LiveData and represents its values using State. The following dependency is required in the build.gradle file:

Sources: [live-compose-guide-state-groovy-source](https://developer.android.com/develop/ui/compose/state#groovy)

## Groovy

dependencies {
      ...
      implementation "androidx.compose.runtime:runtime-livedata:1.12.1"
}

RxJava2: subscribeAsState() subscribeAsState() are extension functions that transform RxJava2's reactive streams (e.g. Single, Observable, Completable) into Compose State. The following dependency is required in the build.gradle file:

Sources: [live-compose-guide-state-groovy-1-source](https://developer.android.com/develop/ui/compose/state#groovy_1)

## Groovy

dependencies {
      ...
      implementation "androidx.compose.runtime:runtime-rxjava2:1.12.1"
}

RxJava3: subscribeAsState() subscribeAsState() are extension functions that transform RxJava3's reactive streams (e.g. Single, Observable, Completable) into Compose State. The following dependency is required in the build.gradle file:

Sources: [live-compose-guide-state-groovy-2-source](https://developer.android.com/develop/ui/compose/state#groovy_2)

## Groovy

dependencies {
      ...
      implementation "androidx.compose.runtime:runtime-rxjava3:1.12.1"
}

Sources: [live-compose-guide-state-groovy-3-source](https://developer.android.com/develop/ui/compose/state#groovy_3)

## Kotlin

dependencies {
      ...
      implementation("androidx.lifecycle:lifecycle-runtime-compose:2.11.0")
}

Sources: [live-compose-guide-state-kotlin-source](https://developer.android.com/develop/ui/compose/state#kotlin)

## Kotlin

dependencies {
      ...
      implementation("androidx.compose.runtime:runtime-livedata:1.12.1")
}

Sources: [live-compose-guide-state-kotlin-1-source](https://developer.android.com/develop/ui/compose/state#kotlin_1)

## Kotlin

dependencies {
      ...
      implementation("androidx.compose.runtime:runtime-rxjava2:1.12.1")
}

Sources: [live-compose-guide-state-kotlin-2-source](https://developer.android.com/develop/ui/compose/state#kotlin_2)

## Kotlin

dependencies {
      ...
      implementation("androidx.compose.runtime:runtime-rxjava3:1.12.1")
}

Sources: [live-compose-guide-state-kotlin-3-source](https://developer.android.com/develop/ui/compose/state#kotlin_3)

## Learn more

To learn more about state and Jetpack Compose, consult the following additional resources.

Sources: [live-compose-guide-state-learn-more-source](https://developer.android.com/develop/ui/compose/state#learn-more)

## ListSaver

To avoid needing to define the keys for the map, you can also use listSaver and use its indexes as keys:

data class City(val name: String, val country: String)

val CitySaver = listSaver<City, Any>(
    save = { listOf(it.name, it.country) },
    restore = { City(it[0] as String, it[1] as String) }
)

@Composable
fun CityScreen() {
    var selectedCity = rememberSaveable(stateSaver = CitySaver) {
        mutableStateOf(City("Madrid", "Spain"))
    }
}StateOverviewSnippets.kt

Sources: [live-compose-guide-state-listsaver-source](https://developer.android.com/develop/ui/compose/state#listsaver)

## Introduction

State in an app is any value that can change over time. This is a very broad definition and encompasses everything from a Room database to a variable in a class.

All Android apps display state to the user. A few examples of state in Android apps:

A Snackbar that shows when a network connection can't be established.

A blog post and associated comments.

Ripple animations on buttons that play when a user clicks them.

Stickers that a user can draw on top of an image.

Jetpack Compose helps you be explicit about where and how you store and use state in an Android app. This guide focuses on the connection between state and composables, and on the APIs that Jetpack Compose offers to work with state.

Sources: [live-compose-guide-state-main-content-source](https://developer.android.com/develop/ui/compose/state#main-content)

## State holders in Compose

Simple state hoisting can be managed in the composable functions themselves. However, if the amount of state to keep track of increases, or the logic to perform in composable functions arises, it's a good practice to delegate the logic and state responsibilities to other classes: state holders.

Note that in other materials, state holders are also called hoisted state objects.

See the state hoisting in Compose documentation or, more generally, the State holders and UI State page in the architecture guide to learn more.

Sources: [live-compose-guide-state-managing-state-source](https://developer.android.com/develop/ui/compose/state#managing-state)

## MapSaver

If for some reason @Parcelize is not suitable, you can use mapSaver to define your own rule for converting an object into a set of values that the system can save to the Bundle.

data class City(val name: String, val country: String)

val CitySaver = run {
    val nameKey = "Name"
    val countryKey = "Country"
    mapSaver(
        save = { mapOf(nameKey to it.name, countryKey to it.country) },
        restore = { City(it[nameKey] as String, it[countryKey] as String) }
    )
}

@Composable
fun CityScreen() {
    var selectedCity = rememberSaveable(stateSaver = CitySaver) {
        mutableStateOf(City("Madrid", "Spain"))
    }
}StateOverviewSnippets.kt

Sources: [live-compose-guide-state-mapsaver-source](https://developer.android.com/develop/ui/compose/state#mapsaver)

## Parcelize

The simplest solution is to add the @Parcelize annotation to the object. The object becomes parcelable, and can be bundled. For example, this code makes a parcelable City data type and saves it to the state.

@Parcelize
data class City(val name: String, val country: String) : Parcelable

@Composable
fun CityScreen() {
    var selectedCity = rememberSaveable {
        mutableStateOf(City("Madrid", "Spain"))
    }
}StateOverviewSnippets.kt

Sources: [live-compose-guide-state-parcelize-source](https://developer.android.com/develop/ui/compose/state#parcelize)

## Recommended for you

Note: link text is displayed when JavaScript is off

Architecting your Compose UI

Save UI state in Compose

Side-effects in Compose

Sources: [live-compose-guide-state-recommended-for-you-source](https://developer.android.com/develop/ui/compose/state#recommended_for_you)

## Restoring state in Compose

The rememberSaveable API behaves similarly to remember because it retains state across recompositions, and also across activity or process recreation using the saved instance state mechanism. For example, this happens when the screen is rotated.

Sources: [live-compose-guide-state-restore-ui-state-source](https://developer.android.com/develop/ui/compose/state#restore-ui-state)

## Retrigger remember calculations when keys change

The remember API is frequently used together with MutableState:

var name by remember { mutableStateOf("") }StateOverviewSnippets.kt

Here, using the remember function makes the MutableState value survive recompositions.

In general, remember takes a calculation lambda parameter. When remember is first run, it invokes the calculation lambda and stores its result. During recomposition, remember returns the value that was last stored.

Apart from caching state, you can also use remember to store any object or result of an operation in the Composition that is expensive to initialize or calculate. You might not want to repeat this calculation in every recomposition. An example is creating this ShaderBrush object, which is an expensive operation:

val brush = remember {
    ShaderBrush(
        BitmapShader(
            ImageBitmap.imageResource(res, avatarRes).asAndroidBitmap(),
            Shader.TileMode.REPEAT,
            Shader.TileMode.REPEAT
        )
    )
}StateOverviewSnippets.kt

remember stores the value until it leaves the Composition. However, there is a way to invalidate the cached value. The remember API also takes a key or keys parameter. If any of these keys change, the next time the function recomposes, remember invalidates the cache and executes the calculation lambda block again. This mechanism gives you control over the lifetime of an object in the Composition. The calculation remains valid until the inputs change, instead of until the remembered value leaves the Composition.

The following examples show how this mechanism works.

In this snippet, a ShaderBrush is created and used as the background paint of a Box composable. remember stores the ShaderBrush instance because it is expensive to recreate, as explained earlier. remember takes avatarRes as the key1 parameter, which is the selected background image. If avatarRes changes, the brush recomposes with the new image, and reapplies to the Box. This can occur when the user selects another image to be the background from a picker.

@Composable
private fun BackgroundBanner(
    @DrawableRes avatarRes: Int,
    modifier: Modifier = Modifier,
    res: Resources = LocalContext.current.resources
)

Sources: [live-compose-guide-state-retrigger-remember-source](https://developer.android.com/develop/ui/compose/state#retrigger-remember)

## Retrigger remember calculations when keys change

{
    val brush = remember(key1 = avatarRes) {
        ShaderBrush(
            BitmapShader(
                ImageBitmap.imageResource(res, avatarRes).asAndroidBitmap(),
                Shader.TileMode.REPEAT,
                Shader.TileMode.REPEAT
            )
        )
    }

    Box(
        modifier = modifier.background(brush)
    ) {
        /* ... */
    }
}StateOverviewSnippets.kt

In the next snippet, state is hoisted to a plain state holder class MyAppState. It exposes a rememberMyAppState function to initialize an instance of the class using remember. Exposing such functions to create an instance that survives recompositions is a common pattern in Compose. The rememberMyAppState function receives windowSizeClass, which serves as the key parameter for remember. If this parameter changes, the app needs to recreate the plain state holder class with the latest value. This may occur if, for example, the user rotates the device.

@Composable
private fun rememberMyAppState(
    windowSizeClass: WindowSizeClass
): MyAppState {
    return remember(windowSizeClass) {
        MyAppState(windowSizeClass)
    }
}

@Stable
class MyAppState(
    private val windowSizeClass: WindowSizeClass
) { /* ... */ }StateOverviewSnippets.kt

Compose uses the class's equals implementation to decide if a key has changed and invalidate the stored value.

Sources: [live-compose-guide-state-retrigger-remember-2-source](https://developer.android.com/develop/ui/compose/state#retrigger-remember)

## State and composition

Compose is declarative and as such the only way to update it is by calling the same composable with new arguments. These arguments are representations of the UI state. Any time a state is updated a recomposition takes place. As a result, things like TextField don't automatically update like they do in imperative XML based views. A composable has to explicitly be told the new state in order for it to update accordingly.

@Composable
private fun HelloContent() {
    Column(modifier = Modifier.padding(16.dp)) {
        Text(
            text = "Hello!",
            modifier = Modifier.padding(bottom = 8.dp),
            style = MaterialTheme.typography.bodyMedium
        )
        OutlinedTextField(
            value = "",
            onValueChange = { },
            label = { Text("Name") }
        )
    }
}StateOverviewSnippets.kt

If you run this and try to enter text, you'll see that nothing happens. That's because the TextField doesn't update itself—it updates when its value parameter changes. This is due to how composition and recomposition work in Compose.

Initial composition: creation of a Composition by running composables the first time.

Recomposition: re-running composables to update the Composition when data changes.

To learn more about initial composition and recomposition, see Thinking in Compose.

Sources: [live-compose-guide-state-state-and-composition-source](https://developer.android.com/develop/ui/compose/state#state-and-composition)

## State hoisting

State hoisting in Compose is a pattern of moving state to a composable's caller to make a composable stateless. The general pattern for state hoisting in Jetpack Compose is to replace the state variable with two parameters:

value: T: the current value to display

onValueChange: (T) -> Unit: an event that requests the value to change, where T is the proposed new value

However, you are not limited to onValueChange. If more specific events are appropriate for the composable, you should define them using lambdas.

State that is hoisted this way has some important properties:

Single source of truth: By moving state instead of duplicating it, we're ensuring there's only one source of truth. This helps avoid bugs.

Encapsulated: Only stateful composables can modify their state. It's completely internal.

Shareable: Hoisted state can be shared with multiple composables. If you wanted to read name in a different composable, hoisting would allow you to do that.

Interceptable: callers to the stateless composables can decide to ignore or modify events before changing the state.

Decoupled: the state for the stateless composables may be stored anywhere. For example, it's now possible to move name into a ViewModel.

In the example case, you extract the name and the onValueChange out of HelloContent and move them up the tree to a HelloScreen composable that calls HelloContent.

@Composable
fun HelloScreen() {
    var name by rememberSaveable { mutableStateOf("") }

    HelloContent(name = name, onNameChange = { name = it })
}

@Composable
fun HelloContent(name: String, onNameChange: (String) -> Unit) {
    Column(modifier = Modifier.padding(16.dp)) {
        Text(
            text = "Hello, $name",
            modifier = Modifier.padding(bottom = 8.dp),
            style = MaterialTheme.typography.bodyMedium
        )
        OutlinedTextField(value = name, onValueChange = onNameChange, label = { Text("Name") })
    }
}StateOverviewSnippets.kt

By hoisting the state out of HelloContent, it's easier to reason about the composable, reuse it in different situations, and test. HelloContent is decoupled from how its state is stored. Decoupling means that if you modify or

Sources: [live-compose-guide-state-state-hoisting-source](https://developer.android.com/develop/ui/compose/state#state-hoisting)

## State hoisting

replace HelloScreen, you don't have to change how HelloContent is implemented.

Unidirectional Data Flow

The pattern where the state goes down, and events go up is called a unidirectional data flow. In this case, the state goes down from HelloScreen to HelloContent and events go up from HelloContent to HelloScreen. By following unidirectional data flow, you can decouple composables that display state in the UI from the parts of your app that store and change state.

State should be hoisted to at least the lowest common parent of all composables that use the state (read).

State should be hoisted to at least the highest level it may be changed (write).

If two states change in response to the same events they should be hoisted together.

You can hoist state higher than these rules require, but underhoisting state makes it difficult or impossible to follow unidirectional data flow.

See the Where to hoist state page to learn more.

Sources: [live-compose-guide-state-state-hoisting-2-source](https://developer.android.com/develop/ui/compose/state#state-hoisting)

## State in composables

Composable functions can use the remember API to store an object in memory. A value computed by remember is stored in the Composition during initial composition, and the stored value is returned during recomposition. remember can be used to store both mutable and immutable objects.

mutableStateOf creates an observable MutableState<T>, which is an observable type integrated with the compose runtime.

interface MutableState<T> : State<T> {
    override var value: T
}

Any changes to value schedule recomposition of any composable functions that read value.

There are three ways to declare a MutableState object in a composable:

val mutableState = remember { mutableStateOf(default) }

var value by remember { mutableStateOf(default) }

val (value, setValue) = remember { mutableStateOf(default) }

These declarations are equivalent, and are provided as syntax sugar for different uses of state. You should pick the one that produces the easiest-to-read code in the composable you're writing.

The by delegate syntax requires the following imports:

import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue

You can use the remembered value as a parameter for other composables or even as logic in statements to change which composables are displayed. For example, if you don't want to display the greeting if the name is empty, use the state in an if statement:

@Composable
fun HelloContent() {
    Column(modifier = Modifier.padding(16.dp)) {
        var name by remember { mutableStateOf("") }
        if (name.isNotEmpty()) {
            Text(
                text = "Hello, $name!",
                modifier = Modifier.padding(bottom = 8.dp),
                style = MaterialTheme.typography.bodyMedium
            )
        }
        OutlinedTextField(
            value = name,
            onValueChange = { name = it },
            label = { Text("Name") }
        )
    }
}StateOverviewSnippets.kt

While remember helps you retain state across recompositions, the state is not retained across configuration changes. For this, you must use rememberSaveable. rememberSaveable automatically saves any value that can be saved in a Bundle. For other values, you can

Sources: [live-compose-guide-state-state-in-composables-source](https://developer.android.com/develop/ui/compose/state#state-in-composables)

## State in composables

pass in a custom saver object.

Sources: [live-compose-guide-state-state-in-composables-2-source](https://developer.android.com/develop/ui/compose/state#state-in-composables)

## Stateful versus stateless

A composable that uses remember to store an object creates internal state, making the composable stateful. HelloContent is an example of a stateful composable because it holds and modifies its name state internally. This can be useful in situations where a caller doesn't need to control the state and can use it without having to manage the state themselves. However, composables with internal state tend to be less reusable and harder to test.

A stateless composable is a composable that doesn't hold any state. A common way to achieve statelessness is by using state hoisting.

As you develop reusable composables, you often want to expose both a stateful and a stateless version of the same composable. The stateful version is convenient for callers that don't care about the state, and the stateless version is necessary for callers that need to control or hoist the state.

Sources: [live-compose-guide-state-stateful-vs-stateless-source](https://developer.android.com/develop/ui/compose/state#stateful-vs-stateless)

## Store state with keys beyond recomposition

The rememberSaveable API is a wrapper around remember that can store data in a Bundle. This API allows state to survive not only recomposition, but also activity recreation and system-initiated process death. rememberSaveable receives input parameters for the same purpose that remember receives keys. The cache is invalidated when any of the inputs change. The next time the function recomposes, rememberSaveable re-executes the calculation lambda block.

In the following example, rememberSaveable stores userTypedQuery until typedQuery changes:

var userTypedQuery by rememberSaveable(typedQuery, stateSaver = TextFieldValue.Saver) {
    mutableStateOf(
        TextFieldValue(text = typedQuery, selection = TextRange(typedQuery.length))
    )
}StateOverviewSnippets.kt

Sources: [live-compose-guide-state-store-state-source](https://developer.android.com/develop/ui/compose/state#store-state)

## Other supported types of state

Compose doesn't require that you use MutableState<T> to hold state; it supports other observable types. Before reading another observable type in Compose, you must convert it to a State<T> so that composables can automatically recompose when the state changes.

Compose ships with functions to create State<T> from common observable types used in Android apps. Before using these integrations, add the appropriate artifact(s) as follows:

Flow: collectAsStateWithLifecycle() collectAsStateWithLifecycle() collects values from a Flow in a lifecycle-aware manner, allowing your app to conserve app resources. It represents the latest emitted value from the Compose State. Use this API as the recommended way to collect flows on Android apps. The following dependency is required in the build.gradle file (it should be 2.6.0-beta01 or newer):

Sources: [live-compose-guide-state-use-other-types-of-state-in-jetpack-compose-source](https://developer.android.com/develop/ui/compose/state#use-other-types-of-state-in-jetpack-compose)

## Videos

A Compose state of mind

Sources: [live-compose-guide-state-videos-source](https://developer.android.com/develop/ui/compose/state#videos)

## Ways to store state

All data types that are added to the Bundle are saved automatically. If you want to save something that cannot be added to the Bundle, there are several options.

Sources: [live-compose-guide-state-ways-to-store-source](https://developer.android.com/develop/ui/compose/state#ways-to-store)
