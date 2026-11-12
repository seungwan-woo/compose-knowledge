---
type: reference
title: "Guidance: Run UI state animations with a composition coroutine context"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
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
compose:
  id: guide-ui-animation-frame-clock-context
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.rememberCoroutineScope
  sections:
    - id: guide-ui-animation-frame-clock-context
      title: "Guidance: Run UI state animations with a composition coroutine context"
      aliases:
        - androidx.compose.runtime.rememberCoroutineScope
        - androidx.compose.material3.DrawerState.close
        - androidx.compose.runtime.MonotonicFrameClock
        - viewModelScope animation crash
        - UI animation coroutine context
        - state hoisting coroutine caveat
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-hoisting-caveat-source
      relatedIds:
        - live-compose-guide-state-hoisting-caveat
---

# Guidance: Run UI state animations with a composition coroutine context

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Run UI state animations with a composition coroutine context

Guidance: A suspend UI state operation that drives animation can require the MonotonicFrameClock supplied by a composition coroutine context. The official drawer example obtains rememberCoroutineScope in the screen and supplies that context when invoking DrawerState.close from ViewModel-managed logic. Limitation: calling that operation directly in viewModelScope can throw IllegalStateException for a missing frame clock. Hoisting the state to a ViewModel does not supply the required UI coroutine context.

Sources: [live-compose-guide-state-hoisting-caveat-source](https://developer.android.com/develop/ui/compose/state-hoisting#caveat)
