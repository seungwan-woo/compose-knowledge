---
type: reference
title: Save UI state in Compose
description: "Public source: https://developer.android.com/develop/ui/compose/state-saving"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-state-saving-best-practice-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-saving#best_practice_2
    revision: web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701
    sha256: f955280c400efb9d3bb355cdc3f558530367a14add5975b039c1cd54daff11e9
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      SavedStateHandle also uses the Bundle mechanism to store UI state, so you should only use it to store simple UI element state.

      Screen UI state, which is produced by applying business rules and accessing layers of your application other than UI, should not be stored in SavedStateHandle due to its potential complexity and size. You can use different mechanisms to store complex or large data, like local persistent storage. After a process recreation, the screen is recreated with the restored transient state that was stored in SavedStateHandle (if any), and the screen UI state is produced again from the data layer.
  - id: live-compose-guide-state-saving-best-practice-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-saving#best_practice
    revision: web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701
    sha256: 582c0d48c21d8466ac598fd323d78682df65f4df308725913b577e893c05141b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      rememberSaveable uses a Bundle to store UI state, which is shared by other APIs that also write to it, like onSaveInstanceState() calls in your activity. However, the size of this Bundle is limited, and storing large objects could lead to TransactionTooLarge exceptions in runtime. This can be particularly problematic in single Activity apps where the same Bundle is being used across the app.

      To avoid this type of crash, you should not store large complex objects or lists of objects in the bundle.

      Instead, store the minimum state required, like IDs or keys, and use these to delegate restoring more complex UI state to other mechanisms, like persistent storage.

      These design choices depend on the specific use cases for your app and how your users expect it to behave.
  - id: live-compose-guide-state-saving-business-logic-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-saving#business-logic
    revision: web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701
    sha256: dd36067b0c44a9740f88b1c8e889f5a51e79408bddbf1506c3d6c48e3509ec44
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If your UI element state is hoisted to the ViewModel because it is required by business logic, you can use ViewModel's APIs.

      One of the main benefits of using a ViewModel in your Android application is that it handles configuration changes for free. When there is a configuration change, and the activity is destroyed and recreated, the UI state hoisted to the ViewModel is kept in memory. After the recreation, the old ViewModel instance is attached to the new activity instance.

      However, a ViewModel instance does not survive system-initiated process death. To have the UI state survive this, use the Saved State module for ViewModel, which contains the SavedStateHandle API.
  - id: live-compose-guide-state-saving-compose-state-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-saving#compose_state
    revision: web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701
    sha256: eca58aabe5e8ed006ed48cb5e207ba84b64e39719f811093dfa3682988dec59e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use the saveable API of SavedStateHandle to read and write UI element state as MutableState, so it survives activity and process recreation with minimal code setup.

      The saveable API supports primitive types out of the box and receives a stateSaver parameter to use custom savers, just like rememberSaveable().

      In the following snippet, message stores the user input typed into a TextField:

      class ConversationViewModel(
          savedStateHandle: SavedStateHandle
      ) : ViewModel() {

          var message by savedStateHandle.saveable(stateSaver = TextFieldValue.Saver) {
              mutableStateOf(TextFieldValue(""))
          }
              private set

          fun update(newMessage: TextFieldValue) {
              message = newMessage
          }

          /*...*/
      }

      val viewModel = ConversationViewModel(SavedStateHandle())

      @Composable
      fun UserInput(/*...*/) {
          TextField(
              value = viewModel.message,
              onValueChange = { viewModel.update(it) }
          )
      }SavingUIStateSnippets.kt

      See the SavedStateHandle documentation for more information on using the saveable API.
  - id: live-compose-guide-state-saving-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-saving#main-content
    revision: web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701
    sha256: 296702b59314744dcbe4c8c97c038fa642b377b3bb599815b536bc3686178a54
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Depending on where your state is hoisted to and the logic that is required, you can use different APIs to store and restore your UI state. Every app uses a combination of APIs to best achieve this.

      Any Android app could lose its UI state due to activity or process recreation. This loss of state can occur because of the following events:

      Configuration changes. The activity is destroyed and recreated unless the configuration change is handled manually.

      System-initiated process death. The app is in the background and the device frees up resources (like memory) to be used by other processes.

      Preserving the state after these events is essential for a positive user experience. Selecting which state to persist depends on your app's unique user flows. As a best practice, you should at least preserve user input and navigation-related state. Examples of this include the scroll position of a list, the ID of the item the user wants more detail about, the in-progress selection of user preferences, or input in text fields.

      This page summarizes the APIs available to store UI state depending on where your state is hoisted to and the logic that needs it.
  - id: live-compose-guide-state-saving-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-saving#recommended_for_you
    revision: web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701
    sha256: a08ab790bd66832caa44837319c7273aa57c9dc734609fe63b00b1fe4fd9d4a4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Where to hoist state

      State and Jetpack Compose

      Lists and grids
  - id: live-compose-guide-state-saving-savedstatehandle-apis-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-saving#savedstatehandle_apis
    revision: web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701
    sha256: 89b81e0b9278b2ab095a021765fc9804c67a0e6ac5b929c58cadd2435d96408a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      SavedStateHandle has different APIs to store UI element state, most notably:

      Compose State saveable() StateFlow getStateFlow()
  - id: live-compose-guide-state-saving-stateflow-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-saving#stateflow
    revision: web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701
    sha256: b333e506718172a1378f450bfa931210e665c7cf164cda46b0e9fdaacced4be8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use getStateFlow() to store UI element state and consume it as a flow from the SavedStateHandle. The StateFlow is read-only, and the API requires you to specify a key so you can replace the flow to emit a new value. With the key you configured, you can retrieve the StateFlow and collect the latest value.

      In the following snippet, savedFilterType is a StateFlow variable that stores a filter type applied to a list of chat channels in a chat app:

      private const val CHANNEL_FILTER_SAVED_STATE_KEY = "ChannelFilterKey"

      class ChannelViewModel(
          channelsRepository: ChannelsRepository,
          private val savedStateHandle: SavedStateHandle
      ) : ViewModel() {

          private val savedFilterType: StateFlow<ChannelsFilterType> = savedStateHandle.getStateFlow(
              key = CHANNEL_FILTER_SAVED_STATE_KEY, initialValue = ChannelsFilterType.ALL_CHANNELS
          )

          private val filteredChannels: Flow<List<Channel>> =
              combine(channelsRepository.getAll(), savedFilterType) { channels, type ->
                  filter(channels, type)
              }.onStart { emit(emptyList()) }

          fun setFiltering(requestType: ChannelsFilterType) {
              savedStateHandle[CHANNEL_FILTER_SAVED_STATE_KEY] = requestType
          }

          /*...*/
      }

      enum class ChannelsFilterType {
          ALL_CHANNELS, RECENT_CHANNELS, ARCHIVED_CHANNELS
      }SavingUIStateSnippets.kt

      Every time the user selects a new filter type, setFiltering is called. This saves a new value in SavedStateHandle stored with the key _CHANNEL_FILTER_SAVED_STATE_KEY_. savedFilterType is a flow emitting the latest value stored to the key. filteredChannels is subscribed to the flow to perform the channel filtering.

      See the SavedStateHandle documentation for more information on the getStateFlow() API.
  - id: live-compose-guide-state-saving-summary-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-saving#summary
    revision: web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701
    sha256: b77725960fdeedf703d6a0cf4dffb7afab853e0d0f0c9873e4193f4bff0005fd
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The following table summarizes the APIs covered in this section, and when to use each to save UI state:

      Event UI logic Business logic in a ViewModel Configuration changes rememberSaveable Automatic System-initiated process death rememberSaveable SavedStateHandle

      The API to use depends on where the state is held and the logic that it requires. For state that is used in UI logic, use rememberSaveable. For state that is used in business logic, if you hold it in a ViewModel, save it using SavedStateHandle.

      You should use the bundle APIs (rememberSaveable and SavedStateHandle) to store small amounts of UI state. This data is the minimum necessary to restore the UI back to its previous state, together with other storing mechanisms. For example, if you store the ID of a profile the user was looking at in the bundle, you can fetch heavy data, like profile details, from the data layer.

      For more information on the different ways of saving UI state, see the general Saving UI State documentation and the data layer page of the architecture guide.
  - id: live-compose-guide-state-saving-ui-logic-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-saving#ui-logic
    revision: web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701
    sha256: ba153c5b9f9a6441fb6b34e782ff511269c6cebaf06adb6d242f9aef71744acc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If your state is hoisted in the UI, either in composable functions or plain state holder classes scoped to the Composition, you can use rememberSaveable to retain state across activity and process recreation.

      In the following snippet, rememberSaveable is used to store a single boolean UI element state:

      @Composable
      fun ChatBubble(
          message: Message
      ) {
          var showDetails by rememberSaveable { mutableStateOf(false) }

          ClickableText(
              text = AnnotatedString(message.content),
              onClick = { showDetails = !showDetails }
          )

          if (showDetails) {
              Text(message.timestamp)
          }
      }SavingUIStateSnippets.kt

      Figure 1

      . Chat message bubble expands and collapses when tapped.

      showDetails is a boolean variable that stores if the chat bubble is collapsed or expanded.

      rememberSaveable stores UI element state in a Bundle through the saved instance state mechanism.

      It is able to store primitive types to the bundle automatically. If your state is held in a type that is not primitive, like a data class, you can use different storing mechanisms, such as using the Parcelize annotation, using Compose APIs like listSaver and mapSaver, or implementing a custom saver class extending Compose runtime Saver class. See the Ways to store state documentation to learn more about these methods.

      In the following snippet, the rememberLazyListState Compose API stores LazyListState, which consists of the scroll state of a LazyColumn or LazyRow, using rememberSaveable. It uses a LazyListState.Saver, which is a custom saver that is able to store and restore the scroll state. After an activity or process recreation (for example, after a configuration change like changing device orientation), the scroll state is preserved.

      @Composable
      fun rememberLazyListState(
          initialFirstVisibleItemIndex: Int = 0,
          initialFirstVisibleItemScrollOffset: Int = 0
      ): LazyListState {
          return rememberSaveable(saver = LazyListState.Saver) {
              LazyListState(
                  initialFirstVisibleItemIndex, initialFirstVisibleItemScrollOffset
              )
          }
      }SavingUIStateSnippets.kt
  - id: live-compose-guide-state-saving-verify-state-restoration-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state-saving#verify_state_restoration
    revision: web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701
    sha256: 8163e80c910a008b728351bd2626fbd94d0ff70b7b496de9d0081da21c00edd0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: You can verify that the state stored with rememberSaveable in your Compose elements is correctly restored when the activity or process is recreated. There are specific APIs to achieve this, such as StateRestorationTester. Check out the Testing documentation to learn more.
compose:
  id: live-compose-guide-state-saving
  artifact: androidx.compose.runtime:runtime-saveable
  fqn: androidx.compose.runtime.saveable
  sections:
    - id: live-compose-guide-state-saving-best-practice
      title: Best practice
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-compose-guide-state-saving-best-practice-source
      relatedIds: []
    - id: live-compose-guide-state-saving-best-practice-2
      title: Best practice
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-compose-guide-state-saving-best-practice-2-source
      relatedIds: []
    - id: live-compose-guide-state-saving-business-logic
      title: Business logic
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-compose-guide-state-saving-business-logic-source
      relatedIds: []
    - id: live-compose-guide-state-saving-compose-state
      title: Compose State
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
        - androidx.compose.runtime.saveable.Saver
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-compose-guide-state-saving-compose-state-source
      relatedIds: []
    - id: live-compose-guide-state-saving-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-compose-guide-state-saving-main-content-source
      relatedIds: []
    - id: live-compose-guide-state-saving-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-compose-guide-state-saving-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-state-saving-savedstatehandle-apis
      title: SavedStateHandle APIs
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-compose-guide-state-saving-savedstatehandle-apis-source
      relatedIds: []
    - id: live-compose-guide-state-saving-stateflow
      title: StateFlow
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-compose-guide-state-saving-stateflow-source
      relatedIds: []
    - id: live-compose-guide-state-saving-summary
      title: Summary
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-compose-guide-state-saving-summary-source
      relatedIds: []
    - id: live-compose-guide-state-saving-ui-logic
      title: UI logic
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
        - androidx.compose.runtime.saveable.Saver
        - androidx.compose.runtime.saveable.listSaver
        - androidx.compose.runtime.saveable.mapSaver
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-compose-guide-state-saving-ui-logic-source
      relatedIds: []
    - id: live-compose-guide-state-saving-verify-state-restoration
      title: Verify state restoration
      aliases:
        - androidx.compose.runtime.saveable.rememberSaveable
      requires:
        - artifact: androidx.compose.runtime:runtime-saveable
          version: null
      sourceIds:
        - live-compose-guide-state-saving-verify-state-restoration-source
      relatedIds: []
---

# Save UI state in Compose

Public source: https://developer.android.com/develop/ui/compose/state-saving

## Best practice

rememberSaveable uses a Bundle to store UI state, which is shared by other APIs that also write to it, like onSaveInstanceState() calls in your activity. However, the size of this Bundle is limited, and storing large objects could lead to TransactionTooLarge exceptions in runtime. This can be particularly problematic in single Activity apps where the same Bundle is being used across the app.

To avoid this type of crash, you should not store large complex objects or lists of objects in the bundle.

Instead, store the minimum state required, like IDs or keys, and use these to delegate restoring more complex UI state to other mechanisms, like persistent storage.

These design choices depend on the specific use cases for your app and how your users expect it to behave.

Sources: [live-compose-guide-state-saving-best-practice-source](https://developer.android.com/develop/ui/compose/state-saving#best_practice)

## Best practice

SavedStateHandle also uses the Bundle mechanism to store UI state, so you should only use it to store simple UI element state.

Screen UI state, which is produced by applying business rules and accessing layers of your application other than UI, should not be stored in SavedStateHandle due to its potential complexity and size. You can use different mechanisms to store complex or large data, like local persistent storage. After a process recreation, the screen is recreated with the restored transient state that was stored in SavedStateHandle (if any), and the screen UI state is produced again from the data layer.

Sources: [live-compose-guide-state-saving-best-practice-2-source](https://developer.android.com/develop/ui/compose/state-saving#best_practice_2)

## Business logic

If your UI element state is hoisted to the ViewModel because it is required by business logic, you can use ViewModel's APIs.

One of the main benefits of using a ViewModel in your Android application is that it handles configuration changes for free. When there is a configuration change, and the activity is destroyed and recreated, the UI state hoisted to the ViewModel is kept in memory. After the recreation, the old ViewModel instance is attached to the new activity instance.

However, a ViewModel instance does not survive system-initiated process death. To have the UI state survive this, use the Saved State module for ViewModel, which contains the SavedStateHandle API.

Sources: [live-compose-guide-state-saving-business-logic-source](https://developer.android.com/develop/ui/compose/state-saving#business-logic)

## Compose State

Use the saveable API of SavedStateHandle to read and write UI element state as MutableState, so it survives activity and process recreation with minimal code setup.

The saveable API supports primitive types out of the box and receives a stateSaver parameter to use custom savers, just like rememberSaveable().

In the following snippet, message stores the user input typed into a TextField:

class ConversationViewModel(
    savedStateHandle: SavedStateHandle
) : ViewModel() {

    var message by savedStateHandle.saveable(stateSaver = TextFieldValue.Saver) {
        mutableStateOf(TextFieldValue(""))
    }
        private set

    fun update(newMessage: TextFieldValue) {
        message = newMessage
    }

    /*...*/
}

val viewModel = ConversationViewModel(SavedStateHandle())

@Composable
fun UserInput(/*...*/) {
    TextField(
        value = viewModel.message,
        onValueChange = { viewModel.update(it) }
    )
}SavingUIStateSnippets.kt

See the SavedStateHandle documentation for more information on using the saveable API.

Sources: [live-compose-guide-state-saving-compose-state-source](https://developer.android.com/develop/ui/compose/state-saving#compose_state)

## Introduction

Depending on where your state is hoisted to and the logic that is required, you can use different APIs to store and restore your UI state. Every app uses a combination of APIs to best achieve this.

Any Android app could lose its UI state due to activity or process recreation. This loss of state can occur because of the following events:

Configuration changes. The activity is destroyed and recreated unless the configuration change is handled manually.

System-initiated process death. The app is in the background and the device frees up resources (like memory) to be used by other processes.

Preserving the state after these events is essential for a positive user experience. Selecting which state to persist depends on your app's unique user flows. As a best practice, you should at least preserve user input and navigation-related state. Examples of this include the scroll position of a list, the ID of the item the user wants more detail about, the in-progress selection of user preferences, or input in text fields.

This page summarizes the APIs available to store UI state depending on where your state is hoisted to and the logic that needs it.

Sources: [live-compose-guide-state-saving-main-content-source](https://developer.android.com/develop/ui/compose/state-saving#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Where to hoist state

State and Jetpack Compose

Lists and grids

Sources: [live-compose-guide-state-saving-recommended-for-you-source](https://developer.android.com/develop/ui/compose/state-saving#recommended_for_you)

## SavedStateHandle APIs

SavedStateHandle has different APIs to store UI element state, most notably:

Compose State saveable() StateFlow getStateFlow()

Sources: [live-compose-guide-state-saving-savedstatehandle-apis-source](https://developer.android.com/develop/ui/compose/state-saving#savedstatehandle_apis)

## StateFlow

Use getStateFlow() to store UI element state and consume it as a flow from the SavedStateHandle. The StateFlow is read-only, and the API requires you to specify a key so you can replace the flow to emit a new value. With the key you configured, you can retrieve the StateFlow and collect the latest value.

In the following snippet, savedFilterType is a StateFlow variable that stores a filter type applied to a list of chat channels in a chat app:

private const val CHANNEL_FILTER_SAVED_STATE_KEY = "ChannelFilterKey"

class ChannelViewModel(
    channelsRepository: ChannelsRepository,
    private val savedStateHandle: SavedStateHandle
) : ViewModel() {

    private val savedFilterType: StateFlow<ChannelsFilterType> = savedStateHandle.getStateFlow(
        key = CHANNEL_FILTER_SAVED_STATE_KEY, initialValue = ChannelsFilterType.ALL_CHANNELS
    )

    private val filteredChannels: Flow<List<Channel>> =
        combine(channelsRepository.getAll(), savedFilterType) { channels, type ->
            filter(channels, type)
        }.onStart { emit(emptyList()) }

    fun setFiltering(requestType: ChannelsFilterType) {
        savedStateHandle[CHANNEL_FILTER_SAVED_STATE_KEY] = requestType
    }

    /*...*/
}

enum class ChannelsFilterType {
    ALL_CHANNELS, RECENT_CHANNELS, ARCHIVED_CHANNELS
}SavingUIStateSnippets.kt

Every time the user selects a new filter type, setFiltering is called. This saves a new value in SavedStateHandle stored with the key _CHANNEL_FILTER_SAVED_STATE_KEY_. savedFilterType is a flow emitting the latest value stored to the key. filteredChannels is subscribed to the flow to perform the channel filtering.

See the SavedStateHandle documentation for more information on the getStateFlow() API.

Sources: [live-compose-guide-state-saving-stateflow-source](https://developer.android.com/develop/ui/compose/state-saving#stateflow)

## Summary

The following table summarizes the APIs covered in this section, and when to use each to save UI state:

Event UI logic Business logic in a ViewModel Configuration changes rememberSaveable Automatic System-initiated process death rememberSaveable SavedStateHandle

The API to use depends on where the state is held and the logic that it requires. For state that is used in UI logic, use rememberSaveable. For state that is used in business logic, if you hold it in a ViewModel, save it using SavedStateHandle.

You should use the bundle APIs (rememberSaveable and SavedStateHandle) to store small amounts of UI state. This data is the minimum necessary to restore the UI back to its previous state, together with other storing mechanisms. For example, if you store the ID of a profile the user was looking at in the bundle, you can fetch heavy data, like profile details, from the data layer.

For more information on the different ways of saving UI state, see the general Saving UI State documentation and the data layer page of the architecture guide.

Sources: [live-compose-guide-state-saving-summary-source](https://developer.android.com/develop/ui/compose/state-saving#summary)

## UI logic

If your state is hoisted in the UI, either in composable functions or plain state holder classes scoped to the Composition, you can use rememberSaveable to retain state across activity and process recreation.

In the following snippet, rememberSaveable is used to store a single boolean UI element state:

@Composable
fun ChatBubble(
    message: Message
) {
    var showDetails by rememberSaveable { mutableStateOf(false) }

    ClickableText(
        text = AnnotatedString(message.content),
        onClick = { showDetails = !showDetails }
    )

    if (showDetails) {
        Text(message.timestamp)
    }
}SavingUIStateSnippets.kt

Figure 1

. Chat message bubble expands and collapses when tapped.

showDetails is a boolean variable that stores if the chat bubble is collapsed or expanded.

rememberSaveable stores UI element state in a Bundle through the saved instance state mechanism.

It is able to store primitive types to the bundle automatically. If your state is held in a type that is not primitive, like a data class, you can use different storing mechanisms, such as using the Parcelize annotation, using Compose APIs like listSaver and mapSaver, or implementing a custom saver class extending Compose runtime Saver class. See the Ways to store state documentation to learn more about these methods.

In the following snippet, the rememberLazyListState Compose API stores LazyListState, which consists of the scroll state of a LazyColumn or LazyRow, using rememberSaveable. It uses a LazyListState.Saver, which is a custom saver that is able to store and restore the scroll state. After an activity or process recreation (for example, after a configuration change like changing device orientation), the scroll state is preserved.

@Composable
fun rememberLazyListState(
    initialFirstVisibleItemIndex: Int = 0,
    initialFirstVisibleItemScrollOffset: Int = 0
): LazyListState {
    return rememberSaveable(saver = LazyListState.Saver) {
        LazyListState(
            initialFirstVisibleItemIndex, initialFirstVisibleItemScrollOffset
        )
    }
}SavingUIStateSnippets.kt

Sources: [live-compose-guide-state-saving-ui-logic-source](https://developer.android.com/develop/ui/compose/state-saving#ui-logic)

## Verify state restoration

You can verify that the state stored with rememberSaveable in your Compose elements is correctly restored when the activity or process is recreated. There are specific APIs to achieve this, such as StateRestorationTester. Check out the Testing documentation to learn more.

Sources: [live-compose-guide-state-saving-verify-state-restoration-source](https://developer.android.com/develop/ui/compose/state-saving#verify_state_restoration)
