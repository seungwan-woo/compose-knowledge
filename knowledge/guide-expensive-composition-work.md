---
type: reference
title: "Guidance: Cache expensive calculations using their actual inputs"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-performance-bestpractices-use-remember-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/bestpractices#use-remember
    revision: web:compose-guide-performance-bestpractices:content@sha256:ad6d6b11b9339d90a88f85f03049651fe70e8b6a131986b10cfa29b82026ad91
    sha256: aca9be58876fbfc6c2721365613f5befe72f4ab114c27629872d52c5beb30fc1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Composable functions can run very frequently, as often as for every frame of an animation. For this reason, you should do as little calculation in the body of your composable as you can.

      An important technique is to store the results of calculations with remember. That way, the calculation runs once, and you can fetch the results whenever they're needed.

      For example, here's some code that displays a sorted list of names, but does the sorting in a very expensive way:

      @Composable
      fun ContactList(
          contacts: List<Contact>,
          comparator: Comparator<Contact>,
          modifier: Modifier = Modifier
      ) {
          LazyColumn(modifier) {
              // DON’T DO THIS
              items(contacts.sortedWith(comparator)) { contact ->
                  // ...
              }
          }
      }PerformanceSnippets.kt

      Every time ContactsList is recomposed, the entire contact list is sorted all over again, even though the list hasn't changed. If the user scrolls the list, the Composable gets recomposed whenever a new row appears.

      To solve this problem, sort the list outside the LazyColumn, and store the sorted list with remember:

      @Composable
      fun ContactList(
          contacts: List<Contact>,
          comparator: Comparator<Contact>,
          modifier: Modifier = Modifier
      ) {
          val sortedContacts = remember(contacts, comparator) {
              contacts.sortedWith(comparator)
          }

          LazyColumn(modifier) {
              items(sortedContacts) {
                  // ...
              }
          }
      }PerformanceSnippets.kt

      Now, the list is sorted once, when ContactList is first composed. If the contacts or comparator change, the sorted list is regenerated. Otherwise, the composable can keep using the cached sorted list.

      Always pass any inputs referenced inside the remember calculation block as keys so the cached value updates when those inputs change. Because remember stores its keys and cached result in the slot table and compares keys using Object.equals() on every recomposition pass, only use remember when caching expensive calculations or heavy object allocations (such as date formatters, shaders, or list sorting) or when object identity must be preserved.

      Be cautious when passing a large collection or an object with an expensive equals()
compose:
  id: guide-expensive-composition-work
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.remember
  sections:
    - id: guide-expensive-composition-work
      title: "Guidance: Cache expensive calculations using their actual inputs"
      aliases:
        - androidx.compose.runtime.remember
        - expensive composable calculation
        - remember calculation keys
        - remember key equals cost
        - cache list sorting
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-performance-bestpractices-use-remember-source
      relatedIds:
        - live-compose-guide-performance-bestpractices-use-remember
---

# Guidance: Cache expensive calculations using their actual inputs

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Cache expensive calculations using their actual inputs

Guidance: Cache an expensive repeatable calculation with remember and key it by the inputs used, for example remember(contacts, comparator) { contacts.sortedWith(comparator) }. The calculation runs initially and is regenerated when those inputs change. remember stores its keys and compares them using Object.equals() on recomposition. Limitation: caching is useful for costly calculations, heavy allocations, or required object identity; it is not free work and does not make the initial calculation asynchronous.

Sources: [live-compose-guide-performance-bestpractices-use-remember-source](https://developer.android.com/develop/ui/compose/performance/bestpractices#use-remember)
