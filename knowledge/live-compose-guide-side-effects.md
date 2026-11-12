---
type: reference
title: Side-effects in Compose
description: "Public source: https://developer.android.com/develop/ui/compose/side-effects"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-side-effects-constants-as-keys-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#constants-as-keys
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: c95783a356029a13f5bb9a8f6814a4fc6b4c7b15b060ce25b312e1fa8abbd090
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: You can use a constant like true as an effect key to make it follow the lifecycle of the call site. There are valid use cases for it, like the LaunchedEffect example shown above. However, before doing that, think twice and make sure that's what you need.
  - id: live-compose-guide-side-effects-correct-usage-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#correct-usage
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: df3b81be3d004f47c3f5c34f7454ac5bdb4d7cc2da5bec36742d720e4d26aca9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following snippet shows an appropriate use case for derivedStateOf:

      @Composable
      // When the messages parameter changes, the MessageList
      // composable recomposes. derivedStateOf does not
      // affect this recomposition.
      fun MessageList(messages: List<Message>) {
          Box {
              val listState = rememberLazyListState()

              LazyColumn(state = listState) {
                  // ...
              }

              // Show the button if the first visible item is past
              // the first item. We use a remembered derived state to
              // minimize unnecessary compositions
              val showButton by remember {
                  derivedStateOf {
                      listState.firstVisibleItemIndex > 0
                  }
              }

              AnimatedVisibility(visible = showButton) {
                  ScrollToTopButton()
              }
          }
      }SideEffectsSnippets.kt

      In this snippet, firstVisibleItemIndex changes any time the first visible item changes. As you scroll, the value becomes 0, 1, 2, 3, 4, 5, etc. However, recomposition only needs to occur if the value is greater than 0. This mismatch in update frequency means that this is a good use case for derivedStateOf.
  - id: live-compose-guide-side-effects-derivedstateof-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#derivedstateof
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: ac1e51c0f85003066b018412b42dc84894ab88eb541dc4b57f8dd2c884600156
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In Compose, recomposition occurs each time an observed state object or composable input changes. A state object or input may be changing more often than the UI actually needs to update, leading to unnecessary recomposition.

      You should use the derivedStateOf function when your inputs to a composable are changing more often than you need to recompose. This often occurs when something is frequently changing, such as a scroll position, but the composable only needs to react to it once it crosses a certain threshold. derivedStateOf creates a new Compose state object you can observe that only updates as much as you need. In this way, it acts similarly to the Kotlin Flow distinctUntilChanged() operator.
  - id: live-compose-guide-side-effects-disposableeffect-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#disposableeffect
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 4643cd6b40ade9cb2724d441b3a81edca03869a8e63e2de398880cdb0c6bcbe0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      For side effects that need to be cleaned up after the keys change or if the composable leaves the Composition, use DisposableEffect. If the DisposableEffect keys change, the composable needs to dispose (do the cleanup for) its current effect, and reset by calling the effect again.

      As an example, you might want to send analytics events based on Lifecycle events by using a LifecycleObserver. To listen for those events in Compose, use a DisposableEffect to register and unregister the observer when needed.

      @Composable
      fun HomeScreen(
          lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
          onStart: () -> Unit, // Send the 'started' analytics event
          onStop: () -> Unit // Send the 'stopped' analytics event
      ) {
          // Safely update the current lambdas when a new one is provided
          val currentOnStart by rememberUpdatedState(onStart)
          val currentOnStop by rememberUpdatedState(onStop)

          // If `lifecycleOwner` changes, dispose and reset the effect
          DisposableEffect(lifecycleOwner) {
              // Create an observer that triggers our remembered callbacks
              // for sending analytics events
              val observer = LifecycleEventObserver { _, event ->
                  if (event == Lifecycle.Event.ON_START) {
                      currentOnStart()
                  } else if (event == Lifecycle.Event.ON_STOP) {
                      currentOnStop()
                  }
              }

              // Add the observer to the lifecycle
              lifecycleOwner.lifecycle.addObserver(observer)

              // When the effect leaves the Composition, remove the observer
              onDispose {
                  lifecycleOwner.lifecycle.removeObserver(observer)
              }
          }

          /* Home screen content */
      }SideEffectsSnippets.kt

      In the code above, the effect will add the observer to the lifecycleOwner. If lifecycleOwner changes, the effect is disposed and restarted with the new lifecycleOwner.

      A DisposableEffect must include an onDispose clause as the final statement in its block of code. Otherwise, the IDE displays a build-time error.
  - id: live-compose-guide-side-effects-incorrect-usage-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#incorrect-usage
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: ee9290b80de8526f356fda22f7f0243a28b2de2604195629ced82cfc441923e9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A common mistake is to assume that, when you combine two Compose state objects, you should use derivedStateOf because you are "deriving state". However, this is purely overhead and not required, as shown in the following snippet:

      // DO NOT USE. Incorrect usage of derivedStateOf.
      var firstName by remember { mutableStateOf("") }
      var lastName by remember { mutableStateOf("") }

      val fullNameBad by remember { derivedStateOf { "$firstName $lastName" } } // This is bad!!!
      val fullNameCorrect = "$firstName $lastName" // This is correctSideEffectsSnippets.kt

      In this snippet, fullName needs to update just as often as firstName and lastName. Therefore, no excess recomposition is occurring, and using derivedStateOf is not necessary.
  - id: live-compose-guide-side-effects-launchedeffect-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#launchedeffect
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 3494ccae5ade7131da5668330adb05ae92147d9fccbf3bada635796895a79268
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To perform work over the life of a composable and have the ability to call suspend functions, use the LaunchedEffect composable. When LaunchedEffect enters the Composition, it launches a coroutine with the block of code passed as a parameter. The coroutine will be cancelled if LaunchedEffect leaves the composition. If LaunchedEffect is recomposed with different keys (see the Restarting Effects section below), the existing coroutine will be cancelled and the new suspend function will be launched in a new coroutine.

      For example, here is an animation that pulses the alpha value with a configurable delay:

      // Allow the pulse rate to be configured, so it can be sped up if the user is running
      // out of time
      var pulseRateMs by remember { mutableLongStateOf(3000L) }
      val alpha = remember { Animatable(1f) }
      LaunchedEffect(pulseRateMs) { // Restart the effect when the pulse rate changes
          while (isActive) {
              delay(pulseRateMs) // Pulse the alpha every pulseRateMs to alert the user
              alpha.animateTo(0f)
              alpha.animateTo(1f)
          }
      }SideEffectsSnippets.kt

      In the code above, the animation uses the suspending function delay to wait for the set amount of time. Then, it sequentially animates the alpha to zero and back again using animateTo. This will repeat for the life of the composable.
  - id: live-compose-guide-side-effects-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#main-content
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: abc1813c7c843f629cd3e52ffd470a2813df155bc979e3eecb19a87d86856f95
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A side-effect is a change to the state of the app that happens outside the scope of a composable function. Due to composables' lifecycle and properties such as unpredictable recompositions, executing recompositions of composables in different orders, or recompositions that can be discarded, composables should ideally be side-effect free.

      However, sometimes side-effects are necessary, for example, to trigger a one-off event such as showing a snackbar or navigate to another screen given a certain state condition. These actions should be called from a controlled environment that is aware of the lifecycle of the composable. In this page, you'll learn about the different side-effect APIs Jetpack Compose offers.
  - id: live-compose-guide-side-effects-producestate-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#producestate
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 35b26fd6009545074ac0d142de12f22ab9b76bb4fde1980af6bd76444d1fc629
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      produceState launches a coroutine scoped to the Composition that can push values into a returned State. Use it to convert non-Compose state into Compose state, for example bringing external subscription-driven state such as Flow, LiveData, or RxJava into the Composition.

      The producer is launched when produceState enters the Composition, and will be cancelled when it leaves the Composition. The returned State conflates; setting the same value won't trigger a recomposition.

      Even though produceState creates a coroutine, it can also be used to observe non-suspending sources of data. To remove the subscription to that source, use the awaitDispose function.

      The following example shows how to use produceState to load an image from the network. The loadNetworkImage composable function returns a State that can be used in other composables.

      @Composable
      fun loadNetworkImage(
          url: String,
          imageRepository: ImageRepository = ImageRepository()
      ): State<Result<Image>> {
          // Creates a State<T> with Result.Loading as initial value
          // If either `url` or `imageRepository` changes, the running producer
          // will cancel and will be re-launched with the new inputs.
          return produceState<Result<Image>>(initialValue = Result.Loading, url, imageRepository) {
              // In a coroutine, can make suspend calls
              val image = imageRepository.load(url)

              // Update State with either an Error or Success result.
              // This will trigger a recomposition where this State is read
              value = if (image == null) {
                  Result.Error
              } else {
                  Result.Success(image)
              }
          }
      }SideEffectsSnippets.kt
  - id: live-compose-guide-side-effects-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#recommended_for_you
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 541213969787c651e6d7e96f1735bdf853a806c491d6230289d61c987c8325f1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      State and Jetpack Compose

      Kotlin for Jetpack Compose

      Using Views in Compose
  - id: live-compose-guide-side-effects-remembercoroutinescope-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#remembercoroutinescope
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 1add6d6d3349fb4e34d3a07ede8162867f336a3d1172a9f85bb93703c8d8e6dc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      As LaunchedEffect is a composable function, it can only be used inside other composable functions. In order to launch a coroutine outside of a composable, but scoped so that it will be automatically canceled once it leaves the composition, use rememberCoroutineScope. Also use rememberCoroutineScope whenever you need to control the lifecycle of one or more coroutines manually, for example, cancelling an animation when a user event happens.

      rememberCoroutineScope is a composable function that returns a CoroutineScope bound to the point of the Composition where it's called. The scope will be cancelled when the call leaves the Composition.

      Following the previous example, you could use this code to show a Snackbar when the user taps on a Button:

      @Composable
      fun MoviesScreen(snackbarHostState: SnackbarHostState) {

          // Creates a CoroutineScope bound to the MoviesScreen's lifecycle
          val scope = rememberCoroutineScope()

          Scaffold(
              snackbarHost = {
                  SnackbarHost(hostState = snackbarHostState)
              }
          ) { contentPadding ->
              Column(Modifier.padding(contentPadding)) {
                  Button(
                      onClick = {
                          // Create a new coroutine in the event handler to show a snackbar
                          scope.launch {
                              snackbarHostState.showSnackbar("Something happened!")
                          }
                      }
                  ) {
                      Text("Press me")
                  }
              }
          }
      }SideEffectsSnippets.kt
  - id: live-compose-guide-side-effects-rememberupdatedstate-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#rememberupdatedstate
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 465fade8c5af5ac492f3a54f5bb0d3a24b4378470507d75a1bf51de8895c2dc8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      LaunchedEffect restarts when one of the key parameters changes. However, in some situations you might want to capture a value in your effect that, if it changes, you do not want the effect to restart. In order to do this, it is required to use rememberUpdatedState to create a reference to this value which can be captured and updated. This approach is helpful for effects that contain long-lived operations that may be expensive or prohibitive to recreate and restart.

      For example, suppose your app has a LandingScreen that disappears after some time. Even if LandingScreen is recomposed, the effect that waits for some time and notifies that the time passed shouldn't be restarted:

      @Composable
      fun LandingScreen(onTimeout: () -> Unit) {

          // This will always refer to the latest onTimeout function that
          // LandingScreen was recomposed with
          val currentOnTimeout by rememberUpdatedState(onTimeout)

          // Create an effect that matches the lifecycle of LandingScreen.
          // If LandingScreen recomposes, the delay shouldn't start again.
          LaunchedEffect(true) {
              delay(SplashWaitTimeMillis)
              currentOnTimeout()
          }

          /* Landing screen content */
      }SideEffectsSnippets.kt

      To create an effect that matches the lifecycle of the call site, a never-changing constant like Unit or true is passed as a parameter. In the code above, LaunchedEffect(true) is used. To make sure that the onTimeout lambda always contains the latest value that LandingScreen was recomposed with, onTimeout needs to be wrapped with the rememberUpdatedState function. The returned State, currentOnTimeout in the code, should be used in the effect.
  - id: live-compose-guide-side-effects-restarting-effects-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#restarting-effects
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 3d1e94144accbb8f072a9d533883bd16f53f49335af88cfc2e1f0d795b12773c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: DisposableEffect isn't disposed of and restarted. That causes problems because the wrong lifecycleOwner is used from that point onward.
  - id: live-compose-guide-side-effects-restarting-effects-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#restarting-effects
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: f5946442689147f27cb8cb1d1dcbb0e0ec8c150165e3aea2c32ba652a68b0350
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Some effects in Compose, like LaunchedEffect, produceState, or DisposableEffect, take a variable number of arguments, keys, that are used to cancel the running effect and start a new one with the new keys.

      The typical form for these APIs is:

      EffectName(restartIfThisKeyChanges, orThisKey, orThisKey, ...) { block }

      Due to the subtleties of this behavior, problems can occur if the parameters used to restart the effect are not the right ones:

      Restarting effects less than they should could cause bugs in your app.

      Restarting effects more than they should could be inefficient.

      As a rule of thumb, mutable and immutable variables used in the effect block of code should be added as parameters to the effect composable. Apart from those, more parameters can be added to force restarting the effect. If the change of a variable shouldn't cause the effect to restart, the variable should be wrapped in rememberUpdatedState. If the variable never changes because it's wrapped in a remember with no keys, you don't need to pass the variable as a key to the effect.

      In the DisposableEffect code shown above, the effect takes as a parameter the lifecycleOwner used in its block, because any change to them should cause the effect to restart.

      @Composable
      fun HomeScreen(
          lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
          onStart: () -> Unit, // Send the 'started' analytics event
          onStop: () -> Unit // Send the 'stopped' analytics event
      ) {
          // These values never change in Composition
          val currentOnStart by rememberUpdatedState(onStart)
          val currentOnStop by rememberUpdatedState(onStop)

          DisposableEffect(lifecycleOwner) {
              val observer = LifecycleEventObserver { _, event ->
                  /* ... */
              }

              lifecycleOwner.lifecycle.addObserver(observer)
              onDispose {
                  lifecycleOwner.lifecycle.removeObserver(observer)
              }
          }
      }SideEffectsSnippets.kt

      currentOnStart and currentOnStop are not needed as DisposableEffect keys, because their values never change in Composition due to the usage of rememberUpdatedState. If you don't pass lifecycleOwner as a parameter and it changes, HomeScreen recomposes, but the
  - id: live-compose-guide-side-effects-sideeffect-publish-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#sideeffect-publish
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 4be636d0998bc99a2c2f3fc161af54cbf12d498fccc22920de41c6de65c27b01
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To share Compose state with objects not managed by Compose, use the SideEffect composable. Using a SideEffect guarantees that the effect executes after every successful recomposition. On the other hand, it is incorrect to perform an effect before a successful recomposition is guaranteed, which is the case when writing the effect directly in a composable.

      For example, your analytics library might allow you to segment your user population by attaching custom metadata ("user properties" in this example) to all subsequent analytics events. To communicate the user type of the current user to your analytics library, use SideEffect to update its value.

      @Composable
      fun rememberFirebaseAnalytics(user: User): FirebaseAnalytics {
          val analytics: FirebaseAnalytics = remember {
              FirebaseAnalytics()
          }

          // On every successful composition, update FirebaseAnalytics with
          // the userType from the current User, ensuring that future analytics
          // events have this metadata attached
          SideEffect {
              analytics.setUserProperty("userType", user.userType)
          }
          return analytics
      }SideEffectsSnippets.kt
  - id: live-compose-guide-side-effects-snapshotflow-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#snapshotFlow
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: eaa4aec2033ec93ba5551b2e762e283697532855766e8f5eebe8e636b5be335b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use snapshotFlow to convert State<T> objects into a cold Flow. snapshotFlow runs its block when collected and emits the result of the State objects read in it. When one of the State objects read inside the snapshotFlow block mutates, the Flow will emit the new value to its collector if the new value is not equal to the previous emitted value (this behavior is similar to that of Flow.distinctUntilChanged).

      The following example shows a side effect that records when the user scrolls past the first item in a list to analytics:

      val listState = rememberLazyListState()

      LazyColumn(state = listState) {
          // ...
      }

      LaunchedEffect(listState) {
          snapshotFlow { listState.firstVisibleItemIndex }
              .map { index -> index > 0 }
              .distinctUntilChanged()
              .filter { it == true }
              .collect {
                  MyAnalyticsService.sendScrolledPastFirstItemEvent()
              }
      }SideEffectsSnippets.kt

      In the code above, listState.firstVisibleItemIndex is converted to a Flow that can benefit from the power of Flow's operators.
  - id: live-compose-guide-side-effects-state-effect-use-cases-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/side-effects#state-effect-use-cases
    revision: web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33
    sha256: 76ca9b325b42c7e5870cecfabfb42ebb484fe9f42498f1e72ecf7b3953201175
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      As covered in the Thinking in Compose documentation, composables should be side-effect free. When you need to make changes to the state of the app (as described in the Managing state documentation doc), you should use the Effect APIs so that those side effects are executed in a predictable manner.

      Due to the different possibilities effects open up in Compose, they can be easily overused. Make sure that the work you do in them is UI related and doesn't break unidirectional data flow as explained in the Managing state documentation.
compose:
  id: live-compose-guide-side-effects
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: live-compose-guide-side-effects-constants-as-keys
      title: Constants as keys
      aliases:
        - androidx.compose.runtime.LaunchedEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-constants-as-keys-source
      relatedIds: []
    - id: live-compose-guide-side-effects-correct-usage
      title: Correct usage
      aliases:
        - androidx.compose.runtime.derivedStateOf
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-correct-usage-source
      relatedIds: []
    - id: live-compose-guide-side-effects-derivedstateof
      title: "derivedStateOf: convert one or multiple state objects into another state"
      aliases:
        - androidx.compose.runtime.derivedStateOf
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-derivedstateof-source
      relatedIds: []
    - id: live-compose-guide-side-effects-disposableeffect
      title: "DisposableEffect: effects that require cleanup"
      aliases:
        - androidx.compose.runtime.rememberUpdatedState
        - androidx.compose.runtime.DisposableEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-disposableeffect-source
      relatedIds: []
    - id: live-compose-guide-side-effects-incorrect-usage
      title: Incorrect usage
      aliases:
        - androidx.compose.runtime.derivedStateOf
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-incorrect-usage-source
      relatedIds: []
    - id: live-compose-guide-side-effects-launchedeffect
      title: "LaunchedEffect: run suspend functions in the scope of a composable"
      aliases:
        - androidx.compose.runtime.LaunchedEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-launchedeffect-source
      relatedIds: []
    - id: live-compose-guide-side-effects-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-main-content-source
      relatedIds: []
    - id: live-compose-guide-side-effects-producestate
      title: "produceState: convert non-Compose state into Compose state"
      aliases:
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-producestate-source
      relatedIds: []
    - id: live-compose-guide-side-effects-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-side-effects-remembercoroutinescope
      title: "rememberCoroutineScope: obtain a composition-aware scope to launch a coroutine outside a composable"
      aliases:
        - androidx.compose.runtime.LaunchedEffect
        - androidx.compose.runtime.rememberCoroutineScope
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-remembercoroutinescope-source
      relatedIds: []
    - id: live-compose-guide-side-effects-rememberupdatedstate
      title: "rememberUpdatedState: reference a value in an effect that shouldn't restart if the value changes"
      aliases:
        - androidx.compose.runtime.LaunchedEffect
        - androidx.compose.runtime.rememberUpdatedState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-rememberupdatedstate-source
      relatedIds: []
    - id: live-compose-guide-side-effects-restarting-effects
      title: Restarting effects
      aliases:
        - androidx.compose.runtime.LaunchedEffect
        - androidx.compose.runtime.rememberUpdatedState
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-restarting-effects-source
      relatedIds: []
    - id: live-compose-guide-side-effects-restarting-effects-2
      title: Restarting effects
      aliases:
        - androidx.compose.runtime.DisposableEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-restarting-effects-2-source
      relatedIds: []
    - id: live-compose-guide-side-effects-sideeffect-publish
      title: "SideEffect: publish Compose state to non-Compose code"
      aliases:
        - androidx.compose.runtime.SideEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-sideeffect-publish-source
      relatedIds: []
    - id: live-compose-guide-side-effects-snapshotflow
      title: "snapshotFlow: convert Compose's State into Flows"
      aliases:
        - androidx.compose.runtime.LaunchedEffect
        - androidx.compose.runtime.snapshotFlow
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-snapshotflow-source
      relatedIds: []
    - id: live-compose-guide-side-effects-state-effect-use-cases
      title: State and effect use cases
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-side-effects-state-effect-use-cases-source
      relatedIds: []
---

# Side-effects in Compose

Public source: https://developer.android.com/develop/ui/compose/side-effects

## Constants as keys

You can use a constant like true as an effect key to make it follow the lifecycle of the call site. There are valid use cases for it, like the LaunchedEffect example shown above. However, before doing that, think twice and make sure that's what you need.

Sources: [live-compose-guide-side-effects-constants-as-keys-source](https://developer.android.com/develop/ui/compose/side-effects#constants-as-keys)

## Correct usage

The following snippet shows an appropriate use case for derivedStateOf:

@Composable
// When the messages parameter changes, the MessageList
// composable recomposes. derivedStateOf does not
// affect this recomposition.
fun MessageList(messages: List<Message>) {
    Box {
        val listState = rememberLazyListState()

        LazyColumn(state = listState) {
            // ...
        }

        // Show the button if the first visible item is past
        // the first item. We use a remembered derived state to
        // minimize unnecessary compositions
        val showButton by remember {
            derivedStateOf {
                listState.firstVisibleItemIndex > 0
            }
        }

        AnimatedVisibility(visible = showButton) {
            ScrollToTopButton()
        }
    }
}SideEffectsSnippets.kt

In this snippet, firstVisibleItemIndex changes any time the first visible item changes. As you scroll, the value becomes 0, 1, 2, 3, 4, 5, etc. However, recomposition only needs to occur if the value is greater than 0. This mismatch in update frequency means that this is a good use case for derivedStateOf.

Sources: [live-compose-guide-side-effects-correct-usage-source](https://developer.android.com/develop/ui/compose/side-effects#correct-usage)

## derivedStateOf: convert one or multiple state objects into another state

In Compose, recomposition occurs each time an observed state object or composable input changes. A state object or input may be changing more often than the UI actually needs to update, leading to unnecessary recomposition.

You should use the derivedStateOf function when your inputs to a composable are changing more often than you need to recompose. This often occurs when something is frequently changing, such as a scroll position, but the composable only needs to react to it once it crosses a certain threshold. derivedStateOf creates a new Compose state object you can observe that only updates as much as you need. In this way, it acts similarly to the Kotlin Flow distinctUntilChanged() operator.

Sources: [live-compose-guide-side-effects-derivedstateof-source](https://developer.android.com/develop/ui/compose/side-effects#derivedstateof)

## DisposableEffect: effects that require cleanup

For side effects that need to be cleaned up after the keys change or if the composable leaves the Composition, use DisposableEffect. If the DisposableEffect keys change, the composable needs to dispose (do the cleanup for) its current effect, and reset by calling the effect again.

As an example, you might want to send analytics events based on Lifecycle events by using a LifecycleObserver. To listen for those events in Compose, use a DisposableEffect to register and unregister the observer when needed.

@Composable
fun HomeScreen(
    lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
    onStart: () -> Unit, // Send the 'started' analytics event
    onStop: () -> Unit // Send the 'stopped' analytics event
) {
    // Safely update the current lambdas when a new one is provided
    val currentOnStart by rememberUpdatedState(onStart)
    val currentOnStop by rememberUpdatedState(onStop)

    // If `lifecycleOwner` changes, dispose and reset the effect
    DisposableEffect(lifecycleOwner) {
        // Create an observer that triggers our remembered callbacks
        // for sending analytics events
        val observer = LifecycleEventObserver { _, event ->
            if (event == Lifecycle.Event.ON_START) {
                currentOnStart()
            } else if (event == Lifecycle.Event.ON_STOP) {
                currentOnStop()
            }
        }

        // Add the observer to the lifecycle
        lifecycleOwner.lifecycle.addObserver(observer)

        // When the effect leaves the Composition, remove the observer
        onDispose {
            lifecycleOwner.lifecycle.removeObserver(observer)
        }
    }

    /* Home screen content */
}SideEffectsSnippets.kt

In the code above, the effect will add the observer to the lifecycleOwner. If lifecycleOwner changes, the effect is disposed and restarted with the new lifecycleOwner.

A DisposableEffect must include an onDispose clause as the final statement in its block of code. Otherwise, the IDE displays a build-time error.

Sources: [live-compose-guide-side-effects-disposableeffect-source](https://developer.android.com/develop/ui/compose/side-effects#disposableeffect)

## Incorrect usage

A common mistake is to assume that, when you combine two Compose state objects, you should use derivedStateOf because you are "deriving state". However, this is purely overhead and not required, as shown in the following snippet:

// DO NOT USE. Incorrect usage of derivedStateOf.
var firstName by remember { mutableStateOf("") }
var lastName by remember { mutableStateOf("") }

val fullNameBad by remember { derivedStateOf { "$firstName $lastName" } } // This is bad!!!
val fullNameCorrect = "$firstName $lastName" // This is correctSideEffectsSnippets.kt

In this snippet, fullName needs to update just as often as firstName and lastName. Therefore, no excess recomposition is occurring, and using derivedStateOf is not necessary.

Sources: [live-compose-guide-side-effects-incorrect-usage-source](https://developer.android.com/develop/ui/compose/side-effects#incorrect-usage)

## LaunchedEffect: run suspend functions in the scope of a composable

To perform work over the life of a composable and have the ability to call suspend functions, use the LaunchedEffect composable. When LaunchedEffect enters the Composition, it launches a coroutine with the block of code passed as a parameter. The coroutine will be cancelled if LaunchedEffect leaves the composition. If LaunchedEffect is recomposed with different keys (see the Restarting Effects section below), the existing coroutine will be cancelled and the new suspend function will be launched in a new coroutine.

For example, here is an animation that pulses the alpha value with a configurable delay:

// Allow the pulse rate to be configured, so it can be sped up if the user is running
// out of time
var pulseRateMs by remember { mutableLongStateOf(3000L) }
val alpha = remember { Animatable(1f) }
LaunchedEffect(pulseRateMs) { // Restart the effect when the pulse rate changes
    while (isActive) {
        delay(pulseRateMs) // Pulse the alpha every pulseRateMs to alert the user
        alpha.animateTo(0f)
        alpha.animateTo(1f)
    }
}SideEffectsSnippets.kt

In the code above, the animation uses the suspending function delay to wait for the set amount of time. Then, it sequentially animates the alpha to zero and back again using animateTo. This will repeat for the life of the composable.

Sources: [live-compose-guide-side-effects-launchedeffect-source](https://developer.android.com/develop/ui/compose/side-effects#launchedeffect)

## Introduction

A side-effect is a change to the state of the app that happens outside the scope of a composable function. Due to composables' lifecycle and properties such as unpredictable recompositions, executing recompositions of composables in different orders, or recompositions that can be discarded, composables should ideally be side-effect free.

However, sometimes side-effects are necessary, for example, to trigger a one-off event such as showing a snackbar or navigate to another screen given a certain state condition. These actions should be called from a controlled environment that is aware of the lifecycle of the composable. In this page, you'll learn about the different side-effect APIs Jetpack Compose offers.

Sources: [live-compose-guide-side-effects-main-content-source](https://developer.android.com/develop/ui/compose/side-effects#main-content)

## produceState: convert non-Compose state into Compose state

produceState launches a coroutine scoped to the Composition that can push values into a returned State. Use it to convert non-Compose state into Compose state, for example bringing external subscription-driven state such as Flow, LiveData, or RxJava into the Composition.

The producer is launched when produceState enters the Composition, and will be cancelled when it leaves the Composition. The returned State conflates; setting the same value won't trigger a recomposition.

Even though produceState creates a coroutine, it can also be used to observe non-suspending sources of data. To remove the subscription to that source, use the awaitDispose function.

The following example shows how to use produceState to load an image from the network. The loadNetworkImage composable function returns a State that can be used in other composables.

@Composable
fun loadNetworkImage(
    url: String,
    imageRepository: ImageRepository = ImageRepository()
): State<Result<Image>> {
    // Creates a State<T> with Result.Loading as initial value
    // If either `url` or `imageRepository` changes, the running producer
    // will cancel and will be re-launched with the new inputs.
    return produceState<Result<Image>>(initialValue = Result.Loading, url, imageRepository) {
        // In a coroutine, can make suspend calls
        val image = imageRepository.load(url)

        // Update State with either an Error or Success result.
        // This will trigger a recomposition where this State is read
        value = if (image == null) {
            Result.Error
        } else {
            Result.Success(image)
        }
    }
}SideEffectsSnippets.kt

Sources: [live-compose-guide-side-effects-producestate-source](https://developer.android.com/develop/ui/compose/side-effects#producestate)

## Recommended for you

Note: link text is displayed when JavaScript is off

State and Jetpack Compose

Kotlin for Jetpack Compose

Using Views in Compose

Sources: [live-compose-guide-side-effects-recommended-for-you-source](https://developer.android.com/develop/ui/compose/side-effects#recommended_for_you)

## rememberCoroutineScope: obtain a composition-aware scope to launch a coroutine outside a composable

As LaunchedEffect is a composable function, it can only be used inside other composable functions. In order to launch a coroutine outside of a composable, but scoped so that it will be automatically canceled once it leaves the composition, use rememberCoroutineScope. Also use rememberCoroutineScope whenever you need to control the lifecycle of one or more coroutines manually, for example, cancelling an animation when a user event happens.

rememberCoroutineScope is a composable function that returns a CoroutineScope bound to the point of the Composition where it's called. The scope will be cancelled when the call leaves the Composition.

Following the previous example, you could use this code to show a Snackbar when the user taps on a Button:

@Composable
fun MoviesScreen(snackbarHostState: SnackbarHostState) {

    // Creates a CoroutineScope bound to the MoviesScreen's lifecycle
    val scope = rememberCoroutineScope()

    Scaffold(
        snackbarHost = {
            SnackbarHost(hostState = snackbarHostState)
        }
    ) { contentPadding ->
        Column(Modifier.padding(contentPadding)) {
            Button(
                onClick = {
                    // Create a new coroutine in the event handler to show a snackbar
                    scope.launch {
                        snackbarHostState.showSnackbar("Something happened!")
                    }
                }
            ) {
                Text("Press me")
            }
        }
    }
}SideEffectsSnippets.kt

Sources: [live-compose-guide-side-effects-remembercoroutinescope-source](https://developer.android.com/develop/ui/compose/side-effects#remembercoroutinescope)

## rememberUpdatedState: reference a value in an effect that shouldn't restart if the value changes

LaunchedEffect restarts when one of the key parameters changes. However, in some situations you might want to capture a value in your effect that, if it changes, you do not want the effect to restart. In order to do this, it is required to use rememberUpdatedState to create a reference to this value which can be captured and updated. This approach is helpful for effects that contain long-lived operations that may be expensive or prohibitive to recreate and restart.

For example, suppose your app has a LandingScreen that disappears after some time. Even if LandingScreen is recomposed, the effect that waits for some time and notifies that the time passed shouldn't be restarted:

@Composable
fun LandingScreen(onTimeout: () -> Unit) {

    // This will always refer to the latest onTimeout function that
    // LandingScreen was recomposed with
    val currentOnTimeout by rememberUpdatedState(onTimeout)

    // Create an effect that matches the lifecycle of LandingScreen.
    // If LandingScreen recomposes, the delay shouldn't start again.
    LaunchedEffect(true) {
        delay(SplashWaitTimeMillis)
        currentOnTimeout()
    }

    /* Landing screen content */
}SideEffectsSnippets.kt

To create an effect that matches the lifecycle of the call site, a never-changing constant like Unit or true is passed as a parameter. In the code above, LaunchedEffect(true) is used. To make sure that the onTimeout lambda always contains the latest value that LandingScreen was recomposed with, onTimeout needs to be wrapped with the rememberUpdatedState function. The returned State, currentOnTimeout in the code, should be used in the effect.

Sources: [live-compose-guide-side-effects-rememberupdatedstate-source](https://developer.android.com/develop/ui/compose/side-effects#rememberupdatedstate)

## Restarting effects

Some effects in Compose, like LaunchedEffect, produceState, or DisposableEffect, take a variable number of arguments, keys, that are used to cancel the running effect and start a new one with the new keys.

The typical form for these APIs is:

EffectName(restartIfThisKeyChanges, orThisKey, orThisKey, ...) { block }

Due to the subtleties of this behavior, problems can occur if the parameters used to restart the effect are not the right ones:

Restarting effects less than they should could cause bugs in your app.

Restarting effects more than they should could be inefficient.

As a rule of thumb, mutable and immutable variables used in the effect block of code should be added as parameters to the effect composable. Apart from those, more parameters can be added to force restarting the effect. If the change of a variable shouldn't cause the effect to restart, the variable should be wrapped in rememberUpdatedState. If the variable never changes because it's wrapped in a remember with no keys, you don't need to pass the variable as a key to the effect.

In the DisposableEffect code shown above, the effect takes as a parameter the lifecycleOwner used in its block, because any change to them should cause the effect to restart.

@Composable
fun HomeScreen(
    lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
    onStart: () -> Unit, // Send the 'started' analytics event
    onStop: () -> Unit // Send the 'stopped' analytics event
) {
    // These values never change in Composition
    val currentOnStart by rememberUpdatedState(onStart)
    val currentOnStop by rememberUpdatedState(onStop)

    DisposableEffect(lifecycleOwner) {
        val observer = LifecycleEventObserver { _, event ->
            /* ... */
        }

        lifecycleOwner.lifecycle.addObserver(observer)
        onDispose {
            lifecycleOwner.lifecycle.removeObserver(observer)
        }
    }
}SideEffectsSnippets.kt

currentOnStart and currentOnStop are not needed as DisposableEffect keys, because their values never change in Composition due to the usage of rememberUpdatedState. If you don't pass lifecycleOwner as a parameter and it changes, HomeScreen recomposes, but the

Sources: [live-compose-guide-side-effects-restarting-effects-source](https://developer.android.com/develop/ui/compose/side-effects#restarting-effects)

## Restarting effects

DisposableEffect isn't disposed of and restarted. That causes problems because the wrong lifecycleOwner is used from that point onward.

Sources: [live-compose-guide-side-effects-restarting-effects-2-source](https://developer.android.com/develop/ui/compose/side-effects#restarting-effects)

## SideEffect: publish Compose state to non-Compose code

To share Compose state with objects not managed by Compose, use the SideEffect composable. Using a SideEffect guarantees that the effect executes after every successful recomposition. On the other hand, it is incorrect to perform an effect before a successful recomposition is guaranteed, which is the case when writing the effect directly in a composable.

For example, your analytics library might allow you to segment your user population by attaching custom metadata ("user properties" in this example) to all subsequent analytics events. To communicate the user type of the current user to your analytics library, use SideEffect to update its value.

@Composable
fun rememberFirebaseAnalytics(user: User): FirebaseAnalytics {
    val analytics: FirebaseAnalytics = remember {
        FirebaseAnalytics()
    }

    // On every successful composition, update FirebaseAnalytics with
    // the userType from the current User, ensuring that future analytics
    // events have this metadata attached
    SideEffect {
        analytics.setUserProperty("userType", user.userType)
    }
    return analytics
}SideEffectsSnippets.kt

Sources: [live-compose-guide-side-effects-sideeffect-publish-source](https://developer.android.com/develop/ui/compose/side-effects#sideeffect-publish)

## snapshotFlow: convert Compose's State into Flows

Use snapshotFlow to convert State<T> objects into a cold Flow. snapshotFlow runs its block when collected and emits the result of the State objects read in it. When one of the State objects read inside the snapshotFlow block mutates, the Flow will emit the new value to its collector if the new value is not equal to the previous emitted value (this behavior is similar to that of Flow.distinctUntilChanged).

The following example shows a side effect that records when the user scrolls past the first item in a list to analytics:

val listState = rememberLazyListState()

LazyColumn(state = listState) {
    // ...
}

LaunchedEffect(listState) {
    snapshotFlow { listState.firstVisibleItemIndex }
        .map { index -> index > 0 }
        .distinctUntilChanged()
        .filter { it == true }
        .collect {
            MyAnalyticsService.sendScrolledPastFirstItemEvent()
        }
}SideEffectsSnippets.kt

In the code above, listState.firstVisibleItemIndex is converted to a Flow that can benefit from the power of Flow's operators.

Sources: [live-compose-guide-side-effects-snapshotflow-source](https://developer.android.com/develop/ui/compose/side-effects#snapshotFlow)

## State and effect use cases

As covered in the Thinking in Compose documentation, composables should be side-effect free. When you need to make changes to the state of the app (as described in the Managing state documentation doc), you should use the Effect APIs so that those side effects are executed in a predictable manner.

Due to the different possibilities effects open up in Compose, they can be easily overused. Make sure that the work you do in them is UI related and doesn't break unidirectional data flow as explained in the Managing state documentation.

Sources: [live-compose-guide-side-effects-state-effect-use-cases-source](https://developer.android.com/develop/ui/compose/side-effects#state-effect-use-cases)
