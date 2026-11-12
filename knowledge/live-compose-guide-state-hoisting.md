---
type: reference
title: Where to hoist state
description: "Public source: https://developer.android.com/develop/ui/compose/state-hoisting"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-state-hoisting-best-practice-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#best-practice
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 8579fc3e55f43eedfc43799a3ea9363b4c4f2a6e399f0a81d50e12d67975c020
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You should hoist UI state to the lowest common ancestor between all the composables that read and write it. You should keep state closest to where it is consumed. From the state owner, expose to consumers immutable state and events to modify the state.

      The lowest common ancestor can also be outside of the Composition. For example, when hoisting state in a ViewModel because business logic is involved.

      This page explains this best practice in detail and a caveat to keep in mind.
  - id: live-compose-guide-state-hoisting-business-logic-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#business-logic
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: e9335df7cb5fe88ccd2c8f1300df53f4e2647b105e161261448755b35fd5cca7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If composables and plain state holder classes are in charge of the UI logic and UI element state, a screen level state holder is in charge of the following tasks:

      Providing access to the business logic of the application that is usually placed in other layers of the hierarchy such as the business and data layers.

      Preparing the application data for presentation in a particular screen, which becomes the screen UI state.
  - id: live-compose-guide-state-hoisting-caveat-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#caveat
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: a8fc4d239e75bfa4dec64cf143216bb2e793eb4948a0a9f7517564cb4064c5cc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      For some Compose UI element state, hoisting to the ViewModel might require special considerations. For example, some state holders of Compose UI elements expose methods to modify the state. Some of them might be suspend functions that trigger animations. These suspend functions can throw exceptions if you call them from a CoroutineScope that is not scoped to the Composition.

      Let’s say the app drawer’s content is dynamic and you need to fetch and refresh it from the data layer after it’s closed. You should hoist the drawer state to the ViewModel so you can call both the UI and business logic on this element from the state owner.

      However, calling DrawerState's close() method using the viewModelScope from Compose UI causes a runtime exception of type IllegalStateException with a message reading “a MonotonicFrameClock is not available in this CoroutineContext”.

      To fix this, use a CoroutineScope scoped to the Composition. It provides a MonotonicFrameClock in the CoroutineContext that is necessary for the suspend functions to work.

      To fix this crash, switch the CoroutineContext of the coroutine in the ViewModel to one that is scoped to the Composition. It could look like this:

      class ConversationViewModel(/*...*/) : ViewModel() {

          val drawerState = DrawerState(initialValue = DrawerValue.Closed)

          private val _drawerContent = MutableStateFlow(DrawerContent.Empty)
          val drawerContent: StateFlow<DrawerContent> = _drawerContent.asStateFlow()

          fun closeDrawer(uiScope: CoroutineScope) {
              viewModelScope.launch {
                  withContext(uiScope.coroutineContext) { // Use instead of the default context
                      drawerState.close()
                  }
                  // Fetch drawer content and update state
                  _drawerContent.update { content }
              }
          }
      }

      // in Compose
      @Composable
      private fun ConversationScreen(
          conversationViewModel: ConversationViewModel = viewModel()
      ) {
          val scope = rememberCoroutineScope()

          ConversationScreen(onCloseDrawer = { conversationViewModel.closeDrawer(uiScope = scope) })
      }StateHoistingSnippets.kt
  - id: live-compose-guide-state-hoisting-classes-as-state-owner-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#classes-as-state-owner
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 4999e4dd532b3202a9b8086c5e10447443197172954e1f4952d0bcb1854bfdb3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: its state holder page.
  - id: live-compose-guide-state-hoisting-classes-as-state-owner-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#classes-as-state-owner
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: de31e400343068553efcdc14f14aed4b2bc1514d095ac06281b4ff21aca1589f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When a composable contains complex UI logic that involves one or multiple state fields of a UI element, it should delegate that responsibility to state holders, like a plain state holder class. This makes the composable's logic more testable in isolation, and reduces its complexity. This approach favors the separation of concerns principle: the composable is in charge of emitting UI elements, and the state holder contains the UI logic and UI element state.

      Plain state holder classes provide convenient functions to callers of your composable function, so they don't have to write this logic themselves.

      These plain classes are created and remembered in the Composition. Because they follow the composable's lifecycle, they can take types provided by the Compose library such as rememberNavController() or rememberLazyListState().

      An example of this is the LazyListState plain state holder class, implemented in Compose to control the UI complexity of LazyColumn or LazyRow.

      // LazyListState.kt

      @Stable
      class LazyListState constructor(
          firstVisibleItemIndex: Int = 0,
          firstVisibleItemScrollOffset: Int = 0
      ) : ScrollableState {
          /**
           *   The holder class for the current scroll position.
           */
          private val scrollPosition = LazyListScrollPosition(
              firstVisibleItemIndex, firstVisibleItemScrollOffset
          )

          suspend fun scrollToItem(/*...*/) { /*...*/ }

          override suspend fun scroll() { /*...*/ }

          suspend fun animateScrollToItem() { /*...*/ }
      }StateHoistingSnippets.kt

      LazyListState encapsulates the state of the LazyColumn storing the scrollPosition for this UI element. It also exposes methods to modify the scroll position by for instance scrolling to a given item.

      As you can see, incrementing a composable's responsibilities increases the need for a state holder. The responsibilities could be in UI logic, or just in the amount of state to keep track of.

      Another common pattern is using a plain state holder class to handle the complexity of root composable functions in the app. You can use such a class to encapsulate app-level state like navigation state and screen sizing. A complete description of this can be found in the UI logic and
  - id: live-compose-guide-state-hoisting-codelabs-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#codelabs
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 83699bd14bc0dc3447905be1fa80caee35d63b83679f94f787b33d351f1c29a4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Using State in Jetpack Compose
  - id: live-compose-guide-state-hoisting-composables-as-state-owner-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#composables-as-state-owner
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 42fefe4065f6aea28b2e6c09ad765e81784fe57041159cd1fcb7135172f3043f
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Having UI logic and UI element state in composables is a good approach if the state and logic are simple. You can leave your state internal to a composable or hoist as required.
  - id: live-compose-guide-state-hoisting-hoisting-composables-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#hoisting-composables
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 66004638966ec7ca1b2f26d94adb70a59a8dfeaa56f5dcfb8ddb990be2b2ad84
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      that has to be applied. Since it is initialized in a composable function, it is stored in the Composition, following its lifecycle.

      Note that lazyListState is defined in the MessagesList method, with the default value of rememberLazyListState(). This is a common pattern in Compose. It makes composables more reusable and flexible. You can then use the composable in different parts of the app which might not need to control the state. This is usually the case while testing or previewing a composable. This is exactly how LazyColumn defines its state.

      Figure 5.

      Lowest common ancestor for

      LazyListState

      is

      ConversationScreen
  - id: live-compose-guide-state-hoisting-hoisting-composables-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#hoisting-composables
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 530561b88584d81f52e871adc365fe5af672b25e7da67e119dff596612ec5a08
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If you need to share your UI element state with other composables and apply UI logic to it in different places, you can hoist it higher in the UI hierarchy. This also makes your composables more reusable and easier to test.

      The following example is a chat app that implements two pieces of functionality:

      The JumpToBottom button scrolls the messages list to the bottom. The button performs UI logic on the list state.

      The MessagesList list scrolls to the bottom after the user sends new messages. UserInput performs UI logic on the list state.

      Figure 1.

      Chat app with a

      JumpToBottom

      button and scroll to bottom on new messages

      The composable hierarchy is as follows:

      Figure 2.

      Chat composable tree

      The LazyColumn state is hoisted to the conversation screen so the app can perform UI logic and read the state from all composables that require it:

      Figure 3.

      Hoisting

      LazyColumn

      state from the

      LazyColumn

      to the

      ConversationScreen

      So finally the composables are:

      Figure 4.

      Chat composable tree with

      LazyListState

      hoisted to

      ConversationScreen

      The code is as follows:

      @Composable
      private fun ConversationScreen(/*...*/) {
          val scope = rememberCoroutineScope()

          val lazyListState = rememberLazyListState() // State hoisted to the ConversationScreen

          MessagesList(messages, lazyListState) // Reuse same state in MessageList

          UserInput(
              onMessageSent = { // Apply UI logic to lazyListState
                  scope.launch {
                      lazyListState.scrollToItem(0)
                  }
              },
          )
      }

      @Composable
      private fun MessagesList(
          messages: List<Message>,
          lazyListState: LazyListState = rememberLazyListState() // LazyListState has a default value
      ) {

          LazyColumn(
              state = lazyListState // Pass hoisted state to LazyColumn
          ) {
              items(messages, key = { message -> message.id }) { item ->
                  Message(/*...*/)
              }
          }

          val scope = rememberCoroutineScope()

          JumpToBottom(onClicked = {
              scope.launch {
                  lazyListState.scrollToItem(0) // UI logic being applied to lazyListState
              }
          })
      }StateHoistingSnippets.kt

      LazyListState is hoisted as high as required for the UI logic
  - id: live-compose-guide-state-hoisting-learn-more-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#learn-more
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 9175d77e7321f9e1a92e24468eff860ad6a0794ec1a528203d41608c9417c812
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: To learn more about state and Jetpack Compose, consult the following additional resources.
  - id: live-compose-guide-state-hoisting-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#main-content
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 0c7354c453d3f6a103398a4ae9f967bb082d6716a3ec7076c1e4ddec32afdbea
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: In a Compose application, where you hoist UI state depends on whether UI logic or business logic requires it. This document lays out these two main scenarios.
  - id: live-compose-guide-state-hoisting-no-state-hoisting-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#no-state-hoisting
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 8de48cd3536970b4a466d65d23772390b0894dea78de3b5535474346d98fd92d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Hoisting state isn't always required. State can be kept internal in a composable when no other composable needs to control it. In this snippet, there is a composable that expands and collapses on tap:

      @Composable
      fun ChatBubble(
          message: Message
      ) {
          var showDetails by rememberSaveable { mutableStateOf(false) } // Define the UI element expanded state

          Text(
              text = AnnotatedString(message.content),
              modifier = Modifier.clickable {
                  showDetails = !showDetails // Apply UI logic
              }
          )

          if (showDetails) {
              Text(message.timestamp)
          }
      }StateHoistingSnippets.kt

      The variable showDetails is the internal state for this UI element. It's only read and modified in this composable and the logic applied to it is very simple. Hoisting the state in this case therefore wouldn't bring much benefit, so you can leave it internal. Doing so makes this composable the owner and single source of truth of the expanded state.
  - id: live-compose-guide-state-hoisting-property-drilling-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#property_drilling
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 3cdabfea210767f9db22776049e741c4296435db6c6cbc156e8111b4d7e3a8ce
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      “Property drilling” refers to passing data through several nested children components to the location where they’re read.

      A typical example of where property drilling can appear in Compose is when you inject the screen level state holder at the top level and pass down state and events to children composables. This might additionally generate an overload of composable functions signatures.

      Even though exposing events as individual lambda parameters could overload the function signature, it maximizes the visibility of what the composable function responsibilities are. You can see what it does at a glance.

      Property drilling is preferable over creating wrapper classes to encapsulate state and events in one place because this reduces the visibility of the composable responsibilities. By not having wrapper classes you’re also more likely to pass composables only the parameters they need, which is a best practice.

      The same best practice applies if these events are navigation events, you can learn more about that in the navigation docs.

      If you have identified a performance issue, you may also choose to defer reading of state. You can check the performance docs to learn more.
  - id: live-compose-guide-state-hoisting-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#recommended_for_you
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: b431efebe2743beecac657dad1336e29b28f76c56762e83b43f35273bab26139
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Save UI state in Compose

      Lists and grids

      Architecting your Compose UI
  - id: live-compose-guide-state-hoisting-screen-ui-state-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#screen-ui-state
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 450ece151384eda0f90067f58d1556a00c5656640c7e393dabcc117e0ccce11c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      As per the definitions above, screen UI state is produced by applying business rules. Given that the screen level state holder is responsible for it, this means the screen UI state is typically hoisted in the screen level state holder, in this case a ViewModel.

      Consider the ConversationViewModel of a chat app and how it exposes the screen UI state and events to modify it:

      class ConversationViewModel(
          channelId: String,
          messagesRepository: MessagesRepository
      ) : ViewModel() {

          val messages = messagesRepository
              .getLatestMessages(channelId)
              .stateIn(
                  scope = viewModelScope,
                  started = SharingStarted.WhileSubscribed(5_000),
                  initialValue = emptyList()
              )

          // Business logic
          fun sendMessage(message: Message) { /* ... */ }
      }StateHoistingSnippets.kt

      Composables consume the screen UI state hoisted in the ViewModel. You should inject the ViewModel instance in your screen-level composables to provide access to business logic.

      The following is an example of a ViewModel used in a screen-level composable. Here, the composable ConversationScreen() consumes the screen UI state hoisted in the ViewModel:

      @Composable
      private fun ConversationScreen(
          conversationViewModel: ConversationViewModel = viewModel()
      ) {

          val messages by conversationViewModel.messages.collectAsStateWithLifecycle()

          ConversationScreen(
              messages = messages,
              onSendMessage = { message: Message -> conversationViewModel.sendMessage(message) }
          )
      }

      @Composable
      private fun ConversationScreen(
          messages: List<Message>,
          onSendMessage: (Message) -> Unit
      ) {

          MessagesList(messages, onSendMessage)
          /* ... */
      }StateHoistingSnippets.kt
  - id: live-compose-guide-state-hoisting-types-of-state-and-logic-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#types-of-state-and-logic
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 8f0cfe2a083c700c3653abd1141e7d4e06159854964a5b7247f8cc44b30a6545
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Below there are definitions for types of UI state and logic that are used throughout this document.
  - id: live-compose-guide-state-hoisting-types-ui-logic-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#types-ui-logic
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 716c8bb6f73cc15d2a6d11c826690877d3379c83b0dfb6ef23095a5009b9742a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Logic in an application can be either business logic or UI logic:

      Business logic is the implementation of product requirements for app data. For example, bookmarking an article in a news reader app when the user taps the button. This logic to save a bookmark to a file or database is usually placed in the domain or data layers. The state holder usually delegates this logic to those layers by calling the methods they expose.

      UI logic is related to how to display UI state on the screen. For example, obtaining the right search bar hint when the user has selected a category, scrolling to a particular item in a list, or the navigation logic to a particular screen when the user clicks a button.
  - id: live-compose-guide-state-hoisting-types-ui-state-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#types-ui-state
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 00894b044b3996b1eb56a178e2c0b77eb901812ac1fcc03029980430d0901589
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      UI state is the property that describes the UI. There are two types of UI state:

      Screen UI state is what you need to display on the screen. For example, a NewsUiState class can contain the news articles and other information needed to render the UI. This state is usually connected with other layers of the hierarchy because it contains app data.

      UI element state refers to properties intrinsic to UI elements that influence how they are rendered. A UI element may be shown or hidden and may have a certain font, font size, or font color. In Jetpack Compose, the state is external to the composable, and you can even hoist it out of the immediate vicinity of the composable into the calling composable function or a state holder. An example of this is ScaffoldState for the Scaffold composable.
  - id: live-compose-guide-state-hoisting-ui-element-state-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#ui-element-state
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: e6576ce455f271dedf9f74878c05e95226510dcb3854b4bda1f6d7e8d14df38c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can hoist UI element state to the screen level state holder if there is business logic that needs to read or write it.

      Continuing the example of a chat app, the app displays user suggestions in a group chat when the user types @ and a hint. Those suggestions come from the data layer and the logic to calculate a list of user suggestions is considered business logic. The feature looks like this:

      Figure 7.

      Feature that displays user suggestions in a group chat when the user types

      @

      and a hint

      The ViewModel implementing this feature would look as follows:

      class ConversationViewModel(/*...*/) : ViewModel() {

          // Hoisted state
          var inputMessage by mutableStateOf("")
              private set

          val suggestions: StateFlow<List<Suggestion>> =
              snapshotFlow { inputMessage }
                  .filter { hasSocialHandleHint(it) }
                  .mapLatest { getHandle(it) }
                  .mapLatest { repository.getSuggestions(it) }
                  .stateIn(
                      scope = viewModelScope,
                      started = SharingStarted.WhileSubscribed(5_000),
                      initialValue = emptyList()
                  )

          fun updateInput(newInput: String) {
              inputMessage = newInput
          }
      }StateHoistingSnippets.kt

      inputMessage is a variable storing the TextField state. Every time the user types in new input, the app calls business logic to produce suggestions.

      suggestions is screen UI state and is consumed from Compose UI by collecting from the StateFlow.
  - id: live-compose-guide-state-hoisting-ui-logic-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#ui-logic
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 61402db6c659a06ebfb033540c01928578fdf8151127fc69967b3f2a9e563fcb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When UI logic needs to read or write state, you should scope the state to the UI, following its lifecycle. To achieve this, you should hoist the state at the correct level in a composable function. Alternatively, you can do so in a plain state holder class, also scoped to the UI lifecycle.

      Below is a description of both solutions and explanation of when to use which.
  - id: live-compose-guide-state-hoisting-videos-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#videos
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: f51829956fc5b4319f0cf246286935746d5f74e4baf3bed087bed2bc232718a2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: State holders and state production in the UI Layer
  - id: live-compose-guide-state-hoisting-viewmodels-as-state-owner-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-hoisting#viewmodels-as-state-owner
    revision: web:compose-guide-state-hoisting:content@sha256:ed711f7d2b5f86bb1e847a60615bb5e228d420b51eb6e4ce32009e4c7a156ce6
    sha256: 35d437baaf7228141dfb1185bd992906caa87c165898cce7b07ffcbb44a19f13
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The benefits of AAC ViewModels in Android development make them suitable for providing access to the business logic and preparing the application data for presentation on the screen.

      When you hoist UI state in the ViewModel, you move it outside of the Composition.

      Figure 6.

      State hoisted to the

      ViewModel

      is stored outside of the Composition.

      ViewModels aren't stored as part of the Composition. They're provided by the framework and they're scoped to a ViewModelStoreOwner which can be an Activity, Fragment, navigation graph, or destination of a navigation graph. For more information on ViewModel scopes you can review the documentation.

      Then, the ViewModel is the source of truth and lowest common ancestor for UI state.
compose:
  id: live-compose-guide-state-hoisting
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: live-compose-guide-state-hoisting-best-practice
      title: Best practice
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-best-practice-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-business-logic
      title: Business logic
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-business-logic-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-caveat
      title: Caveat
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-caveat-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-classes-as-state-owner
      title: Plain state holder class as state owner
      aliases:
        - androidx.compose.foundation.lazy.LazyListState
        - androidx.compose.foundation.lazy.rememberLazyListState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-classes-as-state-owner-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-classes-as-state-owner-2
      title: Plain state holder class as state owner
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-classes-as-state-owner-2-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-codelabs
      title: Codelabs
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-codelabs-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-composables-as-state-owner
      title: Composables as state owner
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-composables-as-state-owner-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-hoisting-composables
      title: Hoisting within composables
      aliases:
        - androidx.compose.foundation.lazy.LazyListState
        - androidx.compose.foundation.lazy.rememberLazyListState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-hoisting-composables-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-hoisting-composables-2
      title: Hoisting within composables
      aliases:
        - androidx.compose.foundation.lazy.LazyListState
        - androidx.compose.foundation.lazy.rememberLazyListState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-hoisting-composables-2-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-learn-more
      title: Learn more
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-learn-more-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-main-content-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-no-state-hoisting
      title: No state hoisting needed
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-no-state-hoisting-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-property-drilling
      title: Property drilling
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-property-drilling-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-screen-ui-state
      title: Screen UI state
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-screen-ui-state-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-types-of-state-and-logic
      title: Types of UI state and UI logic
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-types-of-state-and-logic-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-types-ui-logic
      title: Logic
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-types-ui-logic-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-types-ui-state
      title: UI state
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-types-ui-state-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-ui-element-state
      title: UI element state
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-ui-element-state-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-ui-logic
      title: UI logic
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-ui-logic-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-videos
      title: Videos
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-videos-source
      relatedIds: []
    - id: live-compose-guide-state-hoisting-viewmodels-as-state-owner
      title: ViewModels as state owner
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-viewmodels-as-state-owner-source
      relatedIds: []
---

# Where to hoist state

Public source: https://developer.android.com/develop/ui/compose/state-hoisting

## Best practice

You should hoist UI state to the lowest common ancestor between all the composables that read and write it. You should keep state closest to where it is consumed. From the state owner, expose to consumers immutable state and events to modify the state.

The lowest common ancestor can also be outside of the Composition. For example, when hoisting state in a ViewModel because business logic is involved.

This page explains this best practice in detail and a caveat to keep in mind.

Sources: [live-compose-guide-state-hoisting-best-practice-source](https://developer.android.com/develop/ui/compose/state-hoisting#best-practice)

## Business logic

If composables and plain state holder classes are in charge of the UI logic and UI element state, a screen level state holder is in charge of the following tasks:

Providing access to the business logic of the application that is usually placed in other layers of the hierarchy such as the business and data layers.

Preparing the application data for presentation in a particular screen, which becomes the screen UI state.

Sources: [live-compose-guide-state-hoisting-business-logic-source](https://developer.android.com/develop/ui/compose/state-hoisting#business-logic)

## Caveat

For some Compose UI element state, hoisting to the ViewModel might require special considerations. For example, some state holders of Compose UI elements expose methods to modify the state. Some of them might be suspend functions that trigger animations. These suspend functions can throw exceptions if you call them from a CoroutineScope that is not scoped to the Composition.

Let’s say the app drawer’s content is dynamic and you need to fetch and refresh it from the data layer after it’s closed. You should hoist the drawer state to the ViewModel so you can call both the UI and business logic on this element from the state owner.

However, calling DrawerState's close() method using the viewModelScope from Compose UI causes a runtime exception of type IllegalStateException with a message reading “a MonotonicFrameClock is not available in this CoroutineContext”.

To fix this, use a CoroutineScope scoped to the Composition. It provides a MonotonicFrameClock in the CoroutineContext that is necessary for the suspend functions to work.

To fix this crash, switch the CoroutineContext of the coroutine in the ViewModel to one that is scoped to the Composition. It could look like this:

class ConversationViewModel(/*...*/) : ViewModel() {

    val drawerState = DrawerState(initialValue = DrawerValue.Closed)

    private val _drawerContent = MutableStateFlow(DrawerContent.Empty)
    val drawerContent: StateFlow<DrawerContent> = _drawerContent.asStateFlow()

    fun closeDrawer(uiScope: CoroutineScope) {
        viewModelScope.launch {
            withContext(uiScope.coroutineContext) { // Use instead of the default context
                drawerState.close()
            }
            // Fetch drawer content and update state
            _drawerContent.update { content }
        }
    }
}

// in Compose
@Composable
private fun ConversationScreen(
    conversationViewModel: ConversationViewModel = viewModel()
) {
    val scope = rememberCoroutineScope()

    ConversationScreen(onCloseDrawer = { conversationViewModel.closeDrawer(uiScope = scope) })
}StateHoistingSnippets.kt

Sources: [live-compose-guide-state-hoisting-caveat-source](https://developer.android.com/develop/ui/compose/state-hoisting#caveat)

## Plain state holder class as state owner

When a composable contains complex UI logic that involves one or multiple state fields of a UI element, it should delegate that responsibility to state holders, like a plain state holder class. This makes the composable's logic more testable in isolation, and reduces its complexity. This approach favors the separation of concerns principle: the composable is in charge of emitting UI elements, and the state holder contains the UI logic and UI element state.

Plain state holder classes provide convenient functions to callers of your composable function, so they don't have to write this logic themselves.

These plain classes are created and remembered in the Composition. Because they follow the composable's lifecycle, they can take types provided by the Compose library such as rememberNavController() or rememberLazyListState().

An example of this is the LazyListState plain state holder class, implemented in Compose to control the UI complexity of LazyColumn or LazyRow.

// LazyListState.kt

@Stable
class LazyListState constructor(
    firstVisibleItemIndex: Int = 0,
    firstVisibleItemScrollOffset: Int = 0
) : ScrollableState {
    /**
     *   The holder class for the current scroll position.
     */
    private val scrollPosition = LazyListScrollPosition(
        firstVisibleItemIndex, firstVisibleItemScrollOffset
    )

    suspend fun scrollToItem(/*...*/) { /*...*/ }

    override suspend fun scroll() { /*...*/ }

    suspend fun animateScrollToItem() { /*...*/ }
}StateHoistingSnippets.kt

LazyListState encapsulates the state of the LazyColumn storing the scrollPosition for this UI element. It also exposes methods to modify the scroll position by for instance scrolling to a given item.

As you can see, incrementing a composable's responsibilities increases the need for a state holder. The responsibilities could be in UI logic, or just in the amount of state to keep track of.

Another common pattern is using a plain state holder class to handle the complexity of root composable functions in the app. You can use such a class to encapsulate app-level state like navigation state and screen sizing. A complete description of this can be found in the UI logic and

Sources: [live-compose-guide-state-hoisting-classes-as-state-owner-source](https://developer.android.com/develop/ui/compose/state-hoisting#classes-as-state-owner)

## Plain state holder class as state owner

its state holder page.

Sources: [live-compose-guide-state-hoisting-classes-as-state-owner-2-source](https://developer.android.com/develop/ui/compose/state-hoisting#classes-as-state-owner)

## Codelabs

Using State in Jetpack Compose

Sources: [live-compose-guide-state-hoisting-codelabs-source](https://developer.android.com/develop/ui/compose/state-hoisting#codelabs)

## Composables as state owner

Having UI logic and UI element state in composables is a good approach if the state and logic are simple. You can leave your state internal to a composable or hoist as required.

Sources: [live-compose-guide-state-hoisting-composables-as-state-owner-source](https://developer.android.com/develop/ui/compose/state-hoisting#composables-as-state-owner)

## Hoisting within composables

If you need to share your UI element state with other composables and apply UI logic to it in different places, you can hoist it higher in the UI hierarchy. This also makes your composables more reusable and easier to test.

The following example is a chat app that implements two pieces of functionality:

The JumpToBottom button scrolls the messages list to the bottom. The button performs UI logic on the list state.

The MessagesList list scrolls to the bottom after the user sends new messages. UserInput performs UI logic on the list state.

Figure 1.

Chat app with a

JumpToBottom

button and scroll to bottom on new messages

The composable hierarchy is as follows:

Figure 2.

Chat composable tree

The LazyColumn state is hoisted to the conversation screen so the app can perform UI logic and read the state from all composables that require it:

Figure 3.

Hoisting

LazyColumn

state from the

LazyColumn

to the

ConversationScreen

So finally the composables are:

Figure 4.

Chat composable tree with

LazyListState

hoisted to

ConversationScreen

The code is as follows:

@Composable
private fun ConversationScreen(/*...*/) {
    val scope = rememberCoroutineScope()

    val lazyListState = rememberLazyListState() // State hoisted to the ConversationScreen

    MessagesList(messages, lazyListState) // Reuse same state in MessageList

    UserInput(
        onMessageSent = { // Apply UI logic to lazyListState
            scope.launch {
                lazyListState.scrollToItem(0)
            }
        },
    )
}

@Composable
private fun MessagesList(
    messages: List<Message>,
    lazyListState: LazyListState = rememberLazyListState() // LazyListState has a default value
) {

    LazyColumn(
        state = lazyListState // Pass hoisted state to LazyColumn
    ) {
        items(messages, key = { message -> message.id }) { item ->
            Message(/*...*/)
        }
    }

    val scope = rememberCoroutineScope()

    JumpToBottom(onClicked = {
        scope.launch {
            lazyListState.scrollToItem(0) // UI logic being applied to lazyListState
        }
    })
}StateHoistingSnippets.kt

LazyListState is hoisted as high as required for the UI logic

Sources: [live-compose-guide-state-hoisting-hoisting-composables-source](https://developer.android.com/develop/ui/compose/state-hoisting#hoisting-composables)

## Hoisting within composables

that has to be applied. Since it is initialized in a composable function, it is stored in the Composition, following its lifecycle.

Note that lazyListState is defined in the MessagesList method, with the default value of rememberLazyListState(). This is a common pattern in Compose. It makes composables more reusable and flexible. You can then use the composable in different parts of the app which might not need to control the state. This is usually the case while testing or previewing a composable. This is exactly how LazyColumn defines its state.

Figure 5.

Lowest common ancestor for

LazyListState

is

ConversationScreen

Sources: [live-compose-guide-state-hoisting-hoisting-composables-2-source](https://developer.android.com/develop/ui/compose/state-hoisting#hoisting-composables)

## Learn more

To learn more about state and Jetpack Compose, consult the following additional resources.

Sources: [live-compose-guide-state-hoisting-learn-more-source](https://developer.android.com/develop/ui/compose/state-hoisting#learn-more)

## Introduction

In a Compose application, where you hoist UI state depends on whether UI logic or business logic requires it. This document lays out these two main scenarios.

Sources: [live-compose-guide-state-hoisting-main-content-source](https://developer.android.com/develop/ui/compose/state-hoisting#main-content)

## No state hoisting needed

Hoisting state isn't always required. State can be kept internal in a composable when no other composable needs to control it. In this snippet, there is a composable that expands and collapses on tap:

@Composable
fun ChatBubble(
    message: Message
) {
    var showDetails by rememberSaveable { mutableStateOf(false) } // Define the UI element expanded state

    Text(
        text = AnnotatedString(message.content),
        modifier = Modifier.clickable {
            showDetails = !showDetails // Apply UI logic
        }
    )

    if (showDetails) {
        Text(message.timestamp)
    }
}StateHoistingSnippets.kt

The variable showDetails is the internal state for this UI element. It's only read and modified in this composable and the logic applied to it is very simple. Hoisting the state in this case therefore wouldn't bring much benefit, so you can leave it internal. Doing so makes this composable the owner and single source of truth of the expanded state.

Sources: [live-compose-guide-state-hoisting-no-state-hoisting-source](https://developer.android.com/develop/ui/compose/state-hoisting#no-state-hoisting)

## Property drilling

“Property drilling” refers to passing data through several nested children components to the location where they’re read.

A typical example of where property drilling can appear in Compose is when you inject the screen level state holder at the top level and pass down state and events to children composables. This might additionally generate an overload of composable functions signatures.

Even though exposing events as individual lambda parameters could overload the function signature, it maximizes the visibility of what the composable function responsibilities are. You can see what it does at a glance.

Property drilling is preferable over creating wrapper classes to encapsulate state and events in one place because this reduces the visibility of the composable responsibilities. By not having wrapper classes you’re also more likely to pass composables only the parameters they need, which is a best practice.

The same best practice applies if these events are navigation events, you can learn more about that in the navigation docs.

If you have identified a performance issue, you may also choose to defer reading of state. You can check the performance docs to learn more.

Sources: [live-compose-guide-state-hoisting-property-drilling-source](https://developer.android.com/develop/ui/compose/state-hoisting#property_drilling)

## Recommended for you

Note: link text is displayed when JavaScript is off

Save UI state in Compose

Lists and grids

Architecting your Compose UI

Sources: [live-compose-guide-state-hoisting-recommended-for-you-source](https://developer.android.com/develop/ui/compose/state-hoisting#recommended_for_you)

## Screen UI state

As per the definitions above, screen UI state is produced by applying business rules. Given that the screen level state holder is responsible for it, this means the screen UI state is typically hoisted in the screen level state holder, in this case a ViewModel.

Consider the ConversationViewModel of a chat app and how it exposes the screen UI state and events to modify it:

class ConversationViewModel(
    channelId: String,
    messagesRepository: MessagesRepository
) : ViewModel() {

    val messages = messagesRepository
        .getLatestMessages(channelId)
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5_000),
            initialValue = emptyList()
        )

    // Business logic
    fun sendMessage(message: Message) { /* ... */ }
}StateHoistingSnippets.kt

Composables consume the screen UI state hoisted in the ViewModel. You should inject the ViewModel instance in your screen-level composables to provide access to business logic.

The following is an example of a ViewModel used in a screen-level composable. Here, the composable ConversationScreen() consumes the screen UI state hoisted in the ViewModel:

@Composable
private fun ConversationScreen(
    conversationViewModel: ConversationViewModel = viewModel()
) {

    val messages by conversationViewModel.messages.collectAsStateWithLifecycle()

    ConversationScreen(
        messages = messages,
        onSendMessage = { message: Message -> conversationViewModel.sendMessage(message) }
    )
}

@Composable
private fun ConversationScreen(
    messages: List<Message>,
    onSendMessage: (Message) -> Unit
) {

    MessagesList(messages, onSendMessage)
    /* ... */
}StateHoistingSnippets.kt

Sources: [live-compose-guide-state-hoisting-screen-ui-state-source](https://developer.android.com/develop/ui/compose/state-hoisting#screen-ui-state)

## Types of UI state and UI logic

Below there are definitions for types of UI state and logic that are used throughout this document.

Sources: [live-compose-guide-state-hoisting-types-of-state-and-logic-source](https://developer.android.com/develop/ui/compose/state-hoisting#types-of-state-and-logic)

## Logic

Logic in an application can be either business logic or UI logic:

Business logic is the implementation of product requirements for app data. For example, bookmarking an article in a news reader app when the user taps the button. This logic to save a bookmark to a file or database is usually placed in the domain or data layers. The state holder usually delegates this logic to those layers by calling the methods they expose.

UI logic is related to how to display UI state on the screen. For example, obtaining the right search bar hint when the user has selected a category, scrolling to a particular item in a list, or the navigation logic to a particular screen when the user clicks a button.

Sources: [live-compose-guide-state-hoisting-types-ui-logic-source](https://developer.android.com/develop/ui/compose/state-hoisting#types-ui-logic)

## UI state

UI state is the property that describes the UI. There are two types of UI state:

Screen UI state is what you need to display on the screen. For example, a NewsUiState class can contain the news articles and other information needed to render the UI. This state is usually connected with other layers of the hierarchy because it contains app data.

UI element state refers to properties intrinsic to UI elements that influence how they are rendered. A UI element may be shown or hidden and may have a certain font, font size, or font color. In Jetpack Compose, the state is external to the composable, and you can even hoist it out of the immediate vicinity of the composable into the calling composable function or a state holder. An example of this is ScaffoldState for the Scaffold composable.

Sources: [live-compose-guide-state-hoisting-types-ui-state-source](https://developer.android.com/develop/ui/compose/state-hoisting#types-ui-state)

## UI element state

You can hoist UI element state to the screen level state holder if there is business logic that needs to read or write it.

Continuing the example of a chat app, the app displays user suggestions in a group chat when the user types @ and a hint. Those suggestions come from the data layer and the logic to calculate a list of user suggestions is considered business logic. The feature looks like this:

Figure 7.

Feature that displays user suggestions in a group chat when the user types

@

and a hint

The ViewModel implementing this feature would look as follows:

class ConversationViewModel(/*...*/) : ViewModel() {

    // Hoisted state
    var inputMessage by mutableStateOf("")
        private set

    val suggestions: StateFlow<List<Suggestion>> =
        snapshotFlow { inputMessage }
            .filter { hasSocialHandleHint(it) }
            .mapLatest { getHandle(it) }
            .mapLatest { repository.getSuggestions(it) }
            .stateIn(
                scope = viewModelScope,
                started = SharingStarted.WhileSubscribed(5_000),
                initialValue = emptyList()
            )

    fun updateInput(newInput: String) {
        inputMessage = newInput
    }
}StateHoistingSnippets.kt

inputMessage is a variable storing the TextField state. Every time the user types in new input, the app calls business logic to produce suggestions.

suggestions is screen UI state and is consumed from Compose UI by collecting from the StateFlow.

Sources: [live-compose-guide-state-hoisting-ui-element-state-source](https://developer.android.com/develop/ui/compose/state-hoisting#ui-element-state)

## UI logic

When UI logic needs to read or write state, you should scope the state to the UI, following its lifecycle. To achieve this, you should hoist the state at the correct level in a composable function. Alternatively, you can do so in a plain state holder class, also scoped to the UI lifecycle.

Below is a description of both solutions and explanation of when to use which.

Sources: [live-compose-guide-state-hoisting-ui-logic-source](https://developer.android.com/develop/ui/compose/state-hoisting#ui-logic)

## Videos

State holders and state production in the UI Layer

Sources: [live-compose-guide-state-hoisting-videos-source](https://developer.android.com/develop/ui/compose/state-hoisting#videos)

## ViewModels as state owner

The benefits of AAC ViewModels in Android development make them suitable for providing access to the business logic and preparing the application data for presentation on the screen.

When you hoist UI state in the ViewModel, you move it outside of the Composition.

Figure 6.

State hoisted to the

ViewModel

is stored outside of the Composition.

ViewModels aren't stored as part of the Composition. They're provided by the framework and they're scoped to a ViewModelStoreOwner which can be an Activity, Fragment, navigation graph, or destination of a navigation graph. For more information on ViewModel scopes you can review the documentation.

Then, the ViewModel is the source of truth and lowest common ancestor for UI state.

Sources: [live-compose-guide-state-hoisting-viewmodels-as-state-owner-source](https://developer.android.com/develop/ui/compose/state-hoisting#viewmodels-as-state-owner)
