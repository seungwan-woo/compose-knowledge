---
type: reference
title: Date pickers
description: "Public source: https://developer.android.com/develop/ui/compose/components/datepickers"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-components-datepickers-docked-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#docked
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: c8e3f42d6c8839f07e320a45edbd9b5f6074e2a35d290f50e63261d72d4b49fc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      trailingIcon = {
                  Icon(Icons.Default.DateRange, contentDescription = "Select date")
              },
              modifier = modifier
                  .fillMaxWidth()
                  .pointerInput(selectedDate) {
                      awaitEachGesture {
                          // Modifier.clickable doesn't work for text fields, so we use Modifier.pointerInput
                          // in the Initial pass to observe events before the text field consumes them
                          // in the Main pass.
                          awaitFirstDown(pass = PointerEventPass.Initial)
                          val upEvent = waitForUpOrCancellation(pass = PointerEventPass.Initial)
                          if (upEvent != null) {
                              showModal = true
                          }
                      }
                  }
          )

          if (showModal) {
              DatePickerModal(
                  onDateSelected = { selectedDate = it },
                  onDismiss = { showModal = false }
              )
          }
      }

      fun convertMillisToDate(millis: Long): String {
          val formatter = SimpleDateFormat("MM/dd/yyyy", Locale.getDefault())
          return formatter.format(Date(millis))
      }DatePickers.kt
  - id: live-compose-guide-components-datepickers-docked-results-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#docked-results
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: eab859dadc1db84fa9a95891ed56a95f70f1e3fbf464c9bde78b80706e719a20
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      After clicking the calendar icon, this implementation appears as follows:

      Figure 1.

      A docked date picker.
  - id: live-compose-guide-components-datepickers-docked-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#docked
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: 01b1c9ac3bda771df1427d7cb4760b96e5172a0fb0d73adc3e2b7626eb375da7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In the following example, there is a text field that prompts the user to input their date of birth. When they click the calendar icon in the field, it opens a docked date picker below the input field.

      @Composable
      fun DatePickerDocked() {
          var showDatePicker by remember { mutableStateOf(false) }
          val datePickerState = rememberDatePickerState()
          val selectedDate = datePickerState.selectedDateMillis?.let {
              convertMillisToDate(it)
          } ?: ""

          Box(
              modifier = Modifier.fillMaxWidth()
          ) {
              OutlinedTextField(
                  value = selectedDate,
                  onValueChange = { },
                  label = { Text("DOB") },
                  readOnly = true,
                  trailingIcon = {
                      IconButton(onClick = { showDatePicker = !showDatePicker }) {
                          Icon(
                              imageVector = Icons.Default.DateRange,
                              contentDescription = "Select date"
                          )
                      }
                  },
                  modifier = Modifier
                      .fillMaxWidth()
                      .height(64.dp)
              )

              if (showDatePicker) {
                  Popup(
                      onDismissRequest = { showDatePicker = false },
                      alignment = Alignment.TopStart
                  ) {
                      Box(
                          modifier = Modifier
                              .fillMaxWidth()
                              .offset(y = 64.dp)
                              .shadow(elevation = 4.dp)
                              .background(MaterialTheme.colorScheme.surface)
                              .padding(16.dp)
                      ) {
                          DatePicker(
                              state = datePickerState,
                              showModeToggle = false
                          )
                      }
                  }
              }
          }
      }

      @Composable
      fun DatePickerFieldToModal(modifier: Modifier = Modifier) {
          var selectedDate by remember { mutableStateOf<Long?>(null) }
          var showModal by remember { mutableStateOf(false) }

          OutlinedTextField(
              value = selectedDate?.let { convertMillisToDate(it) } ?: "",
              onValueChange = { },
              label = { Text("DOB") },
              placeholder = { Text("MM/DD/YYYY") },
  - id: live-compose-guide-components-datepickers-input-modal-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#input-modal
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: 74d488ca9a8ba395b5c1973a2e2e479607d63d1352ee31d686d927d73df1d190
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A modal date picker with input displays a dialog that floats over the screen and allows the user to input a date.

      @Composable
      fun DatePickerModalInput(
          onDateSelected: (Long?) -> Unit,
          onDismiss: () -> Unit
      ) {
          val datePickerState = rememberDatePickerState(initialDisplayMode = DisplayMode.Input)

          DatePickerDialog(
              onDismissRequest = onDismiss,
              confirmButton = {
                  TextButton(onClick = {
                      onDateSelected(datePickerState.selectedDateMillis)
                      onDismiss()
                  }) {
                      Text("OK")
                  }
              },
              dismissButton = {
                  TextButton(onClick = onDismiss) {
                      Text("Cancel")
                  }
              }
          ) {
              DatePicker(state = datePickerState)
          }
      }DatePickers.kt
  - id: live-compose-guide-components-datepickers-key-points-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#key-points
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: 546ffa20051a1e3b445ca161c9f3bb0373f17d3372f5725b8de8dbe28f9259c7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The date picker appears when the user clicks the IconButton. The icon button serves as the argument for the OutlinedTextField's trailingIcon parameter. The showDatePicker state variable controls the visibility of the docked date picker.

      The date picker's container is a Popup composable, which overlays the content without affecting the layout of other elements.

      selectedDate captures the value of the selected date from the DatePickerState object and formats it using the convertMillisToDate function.

      The selected date appears in the text field.

      The docked date picker is positioned below the text field using an offset modifier.

      A Box is used as the root container to allow proper layering of the text field and the date picker.
  - id: live-compose-guide-components-datepickers-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#main-content
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: d5dec7a4f3870ff8edb605b0696add2fc0af6c3712ee70e8d5a2dc3868bbe85a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Date pickers let users select a date, a date range, or both. They use a calendar dialog or text input to let users select dates.
  - id: live-compose-guide-components-datepickers-modal-input-key-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#modal-input-key
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: 56ecfd12f078f7970e08ebd1e6ed86d3553efb759dd141e0e2da7c03d8eb4869
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This is very much the same as the modal date picker example. The primary difference is the following:

      The initialDisplayMode parameter sets the initial display mode to DisplayMode.Input.

      Figure 3.

      A modal date picker with input.
  - id: live-compose-guide-components-datepickers-modal-key-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#modal-key
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: 5c26eeca4834a70dedb12df907d25f4ab5fc56c6d735a7266dd49b6a45bad5f3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The DatePickerModal composable function displays a modal date picker.

      The onDateSelected lambda expression executes when the user selects a date. It exposes the selected date to the parent composable.

      The onDismiss lambda expression executes when the user dismisses the dialog.
  - id: live-compose-guide-components-datepickers-modal-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#modal
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: e294ddd6dc3f159249208d5b503d4f0ca75ce8782260a3f6bfbe62631db055e4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A modal date picker displays a dialog that floats over the screen. To implement it, create a DatePickerDialog and pass it a DatePicker.

      @Composable
      fun DatePickerModal(
          onDateSelected: (Long?) -> Unit,
          onDismiss: () -> Unit
      ) {
          val datePickerState = rememberDatePickerState()

          DatePickerDialog(
              onDismissRequest = onDismiss,
              confirmButton = {
                  TextButton(onClick = {
                      onDateSelected(datePickerState.selectedDateMillis)
                      onDismiss()
                  }) {
                      Text("OK")
                  }
              },
              dismissButton = {
                  TextButton(onClick = onDismiss) {
                      Text("Cancel")
                  }
              }
          ) {
              DatePicker(state = datePickerState)
          }
      }DatePickers.kt
  - id: live-compose-guide-components-datepickers-model-results-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#model-results
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: b2b2e1432c1574908ca8eacccfc5465b2f0296727fdf586dc9919c7a103a1c15
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This implementation appears as follows:

      Figure 2.

      A modal date picker.
  - id: live-compose-guide-components-datepickers-range-key-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#range-key
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: e075e5fbcab3908bbd1ad5d3152e9c8425e7f1657253f970e80f7ede004c5b7c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The onDateRangeSelected parameter is a callback that receives a Pair<Long?, Long?> that represents the selected start and end dates. This gives the parent composable access to the selected range.

      rememberDateRangePickerState() creates the state for the date range picker.

      The DatePickerDialog creates a modal dialog container.

      In the confirm button's onClick handler, onDateRangeSelected passes up the selected range to the parent composable.

      The DateRangePicker composable serves as the dialog content.
  - id: live-compose-guide-components-datepickers-range-results-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#range-results
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: 032c868b3fe8af838c0e3667cd252df7674ec094de70adc1ed1d3fb1efe548e2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This implementation appears as follows:

      Figure 4.

      A modal date picker with a selected range.
  - id: live-compose-guide-components-datepickers-range-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#range
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: 30ff86ba5b3158f1a6e2cac9daf74e98924a1f687163ff168909d9dc00289cee
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can create a date picker that lets the user select a range between a start and end date. To do so, use DateRangePicker.

      The use of DateRangePicker is essentially the same as DatePicker. You can use it for a docked picker as a child of PopUp, or you can use it as a modal picker and pass it to DatePickerDialog. The primary difference is that you use DateRangePickerState instead of DatePickerState.

      The following snippet demonstrates how to create a modal date picker with a range:

      @Composable
      fun DateRangePickerModal(
          onDateRangeSelected: (Pair<Long?, Long?>) -> Unit,
          onDismiss: () -> Unit
      ) {
          val dateRangePickerState = rememberDateRangePickerState()

          DatePickerDialog(
              onDismissRequest = onDismiss,
              confirmButton = {
                  TextButton(
                      onClick = {
                          onDateRangeSelected(
                              Pair(
                                  dateRangePickerState.selectedStartDateMillis,
                                  dateRangePickerState.selectedEndDateMillis
                              )
                          )
                          onDismiss()
                      }
                  ) {
                      Text("OK")
                  }
              },
              dismissButton = {
                  TextButton(onClick = onDismiss) {
                      Text("Cancel")
                  }
              }
          ) {
              DateRangePicker(
                  state = dateRangePickerState,
                  title = {
                      Text(
                          text = "Select date range"
                      )
                  },
                  showModeToggle = false,
                  modifier = Modifier
                      .fillMaxWidth()
                      .height(500.dp)
                      .padding(16.dp)
              )
          }
      }DatePickers.kt
  - id: live-compose-guide-components-datepickers-see-also-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#see-also
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: 96bc33cae0a4b0d7cd0629963ad4890f299d21d46deca9b787cd49107b619129
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Material Design date pickers

      Time pickers
  - id: live-compose-guide-components-datepickers-selected-date-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#selected-date
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: feccb5fe86471f6f18388217aff9807aee9b353cb076a3b2ed91bd448859df15
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To capture the selected date, track it in the parent composable as a Long and pass the value to the DatePicker in onDateSelected. The following snippet demonstrates this, though you can see the full implementation in the official snippets app.

      // ...
          var selectedDate by remember { mutableStateOf<Long?>(null) }
      // ...
              if (selectedDate != null) {
                  val date = Date(selectedDate!!)
                  val formattedDate = SimpleDateFormat("MMM dd, yyyy", LocalLocale.current.platformLocale).format(date)
                  Text("Selected date: $formattedDate")
              } else {
                  Text("No date selected")
              }
      // ...
              DatePickerModal(
                  onDateSelected = {
                      selectedDate = it
                      showModal = false
                  },
                  onDismiss = { showModal = false }
              )
          }
      // ...DatePickers.kt

      Essentially the same applies for range date pickers, though you need to use a Pair<Long?, Long?> or a data class to capture the start and end values.
  - id: live-compose-guide-components-datepickers-state-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#state
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: 56737047a598739c3e48f2076d7a5b34125f229f84f2629ba346627284340190
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The key parameter that the different date picker composables share in common is state, which takes either a DatePickerState or DateRangePickerState object. Their properties capture information about the user's selection using the date picker, such as the current selected date.

      For more information on how you can make use of the selected date, see the Use selected date section.
  - id: live-compose-guide-components-datepickers-types-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/components/datepickers#types
    revision: web:compose-guide-components-datepickers:content@sha256:cb0385df47f44a933aab76b04ae7b7cb44a4dc068a0c1f7789f09dee258492bd
    sha256: 082622e3bac41ec24cbaa4394f72497aebce004e7afe4732dadd233468770455
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are three types of date pickers:

      Docked: Appears inline within the layout. It's suitable for compact layouts where a dedicated dialog might feel intrusive.

      Modal: Appears as a dialog overlaying the app's content. This provides a clear focus on date selection.

      Modal input: Combines a text field with a modal date picker.

      You can implement these date pickers in your app using the following composables:

      DatePicker: General composable for a date picker. The container you use determines whether it is docked or model.

      DatePickerDialog: The container for both modal and modal input date pickers.

      DateRangePicker: For any date picker where the user can select a range with a start and end date.
compose:
  id: live-compose-guide-components-datepickers
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-compose-guide-components-datepickers-docked
      title: Docked date picker
      aliases:
        - androidx.compose.material3.DatePicker
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-docked-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-docked-2
      title: Docked date picker
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-docked-2-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-docked-results
      title: Results
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-docked-results-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-input-modal
      title: Input modal date picker
      aliases:
        - androidx.compose.material3.DatePicker
        - androidx.compose.material3.DatePickerDialog
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-input-modal-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-key-points
      title: Key points about the code
      aliases:
        - androidx.compose.material3.DatePickerState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-key-points-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-main-content-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-modal
      title: Modal date picker
      aliases:
        - androidx.compose.material3.DatePicker
        - androidx.compose.material3.DatePickerDialog
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-modal-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-modal-input-key
      title: Key points about the code
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-modal-input-key-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-modal-key
      title: Key points about the code
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-modal-key-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-model-results
      title: Results
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-model-results-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-range
      title: Date picker with range
      aliases:
        - androidx.compose.material3.DatePicker
        - androidx.compose.material3.DatePickerDialog
        - androidx.compose.material3.DateRangePicker
        - androidx.compose.material3.DatePickerState
        - androidx.compose.material3.DateRangePickerState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-range-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-range-key
      title: Key points about the code
      aliases:
        - androidx.compose.material3.DatePickerDialog
        - androidx.compose.material3.DateRangePicker
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-range-key-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-range-results
      title: Results
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-range-results-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-see-also
      title: See also
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-see-also-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-selected-date
      title: Use selected date
      aliases:
        - androidx.compose.material3.DatePicker
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-selected-date-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-state
      title: State
      aliases:
        - androidx.compose.material3.DatePickerState
        - androidx.compose.material3.DateRangePickerState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-state-source
      relatedIds: []
    - id: live-compose-guide-components-datepickers-types
      title: Types
      aliases:
        - androidx.compose.material3.DatePicker
        - androidx.compose.material3.DatePickerDialog
        - androidx.compose.material3.DateRangePicker
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-compose-guide-components-datepickers-types-source
      relatedIds: []
---

# Date pickers

Public source: https://developer.android.com/develop/ui/compose/components/datepickers

## Docked date picker

In the following example, there is a text field that prompts the user to input their date of birth. When they click the calendar icon in the field, it opens a docked date picker below the input field.

@Composable
fun DatePickerDocked() {
    var showDatePicker by remember { mutableStateOf(false) }
    val datePickerState = rememberDatePickerState()
    val selectedDate = datePickerState.selectedDateMillis?.let {
        convertMillisToDate(it)
    } ?: ""

    Box(
        modifier = Modifier.fillMaxWidth()
    ) {
        OutlinedTextField(
            value = selectedDate,
            onValueChange = { },
            label = { Text("DOB") },
            readOnly = true,
            trailingIcon = {
                IconButton(onClick = { showDatePicker = !showDatePicker }) {
                    Icon(
                        imageVector = Icons.Default.DateRange,
                        contentDescription = "Select date"
                    )
                }
            },
            modifier = Modifier
                .fillMaxWidth()
                .height(64.dp)
        )

        if (showDatePicker) {
            Popup(
                onDismissRequest = { showDatePicker = false },
                alignment = Alignment.TopStart
            ) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .offset(y = 64.dp)
                        .shadow(elevation = 4.dp)
                        .background(MaterialTheme.colorScheme.surface)
                        .padding(16.dp)
                ) {
                    DatePicker(
                        state = datePickerState,
                        showModeToggle = false
                    )
                }
            }
        }
    }
}

@Composable
fun DatePickerFieldToModal(modifier: Modifier = Modifier) {
    var selectedDate by remember { mutableStateOf<Long?>(null) }
    var showModal by remember { mutableStateOf(false) }

    OutlinedTextField(
        value = selectedDate?.let { convertMillisToDate(it) } ?: "",
        onValueChange = { },
        label = { Text("DOB") },
        placeholder = { Text("MM/DD/YYYY") },

Sources: [live-compose-guide-components-datepickers-docked-source](https://developer.android.com/develop/ui/compose/components/datepickers#docked)

## Docked date picker

trailingIcon = {
            Icon(Icons.Default.DateRange, contentDescription = "Select date")
        },
        modifier = modifier
            .fillMaxWidth()
            .pointerInput(selectedDate) {
                awaitEachGesture {
                    // Modifier.clickable doesn't work for text fields, so we use Modifier.pointerInput
                    // in the Initial pass to observe events before the text field consumes them
                    // in the Main pass.
                    awaitFirstDown(pass = PointerEventPass.Initial)
                    val upEvent = waitForUpOrCancellation(pass = PointerEventPass.Initial)
                    if (upEvent != null) {
                        showModal = true
                    }
                }
            }
    )

    if (showModal) {
        DatePickerModal(
            onDateSelected = { selectedDate = it },
            onDismiss = { showModal = false }
        )
    }
}

fun convertMillisToDate(millis: Long): String {
    val formatter = SimpleDateFormat("MM/dd/yyyy", Locale.getDefault())
    return formatter.format(Date(millis))
}DatePickers.kt

Sources: [live-compose-guide-components-datepickers-docked-2-source](https://developer.android.com/develop/ui/compose/components/datepickers#docked)

## Results

After clicking the calendar icon, this implementation appears as follows:

Figure 1.

A docked date picker.

Sources: [live-compose-guide-components-datepickers-docked-results-source](https://developer.android.com/develop/ui/compose/components/datepickers#docked-results)

## Input modal date picker

A modal date picker with input displays a dialog that floats over the screen and allows the user to input a date.

@Composable
fun DatePickerModalInput(
    onDateSelected: (Long?) -> Unit,
    onDismiss: () -> Unit
) {
    val datePickerState = rememberDatePickerState(initialDisplayMode = DisplayMode.Input)

    DatePickerDialog(
        onDismissRequest = onDismiss,
        confirmButton = {
            TextButton(onClick = {
                onDateSelected(datePickerState.selectedDateMillis)
                onDismiss()
            }) {
                Text("OK")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Cancel")
            }
        }
    ) {
        DatePicker(state = datePickerState)
    }
}DatePickers.kt

Sources: [live-compose-guide-components-datepickers-input-modal-source](https://developer.android.com/develop/ui/compose/components/datepickers#input-modal)

## Key points about the code

The date picker appears when the user clicks the IconButton. The icon button serves as the argument for the OutlinedTextField's trailingIcon parameter. The showDatePicker state variable controls the visibility of the docked date picker.

The date picker's container is a Popup composable, which overlays the content without affecting the layout of other elements.

selectedDate captures the value of the selected date from the DatePickerState object and formats it using the convertMillisToDate function.

The selected date appears in the text field.

The docked date picker is positioned below the text field using an offset modifier.

A Box is used as the root container to allow proper layering of the text field and the date picker.

Sources: [live-compose-guide-components-datepickers-key-points-source](https://developer.android.com/develop/ui/compose/components/datepickers#key-points)

## Introduction

Date pickers let users select a date, a date range, or both. They use a calendar dialog or text input to let users select dates.

Sources: [live-compose-guide-components-datepickers-main-content-source](https://developer.android.com/develop/ui/compose/components/datepickers#main-content)

## Modal date picker

A modal date picker displays a dialog that floats over the screen. To implement it, create a DatePickerDialog and pass it a DatePicker.

@Composable
fun DatePickerModal(
    onDateSelected: (Long?) -> Unit,
    onDismiss: () -> Unit
) {
    val datePickerState = rememberDatePickerState()

    DatePickerDialog(
        onDismissRequest = onDismiss,
        confirmButton = {
            TextButton(onClick = {
                onDateSelected(datePickerState.selectedDateMillis)
                onDismiss()
            }) {
                Text("OK")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Cancel")
            }
        }
    ) {
        DatePicker(state = datePickerState)
    }
}DatePickers.kt

Sources: [live-compose-guide-components-datepickers-modal-source](https://developer.android.com/develop/ui/compose/components/datepickers#modal)

## Key points about the code

This is very much the same as the modal date picker example. The primary difference is the following:

The initialDisplayMode parameter sets the initial display mode to DisplayMode.Input.

Figure 3.

A modal date picker with input.

Sources: [live-compose-guide-components-datepickers-modal-input-key-source](https://developer.android.com/develop/ui/compose/components/datepickers#modal-input-key)

## Key points about the code

The DatePickerModal composable function displays a modal date picker.

The onDateSelected lambda expression executes when the user selects a date. It exposes the selected date to the parent composable.

The onDismiss lambda expression executes when the user dismisses the dialog.

Sources: [live-compose-guide-components-datepickers-modal-key-source](https://developer.android.com/develop/ui/compose/components/datepickers#modal-key)

## Results

This implementation appears as follows:

Figure 2.

A modal date picker.

Sources: [live-compose-guide-components-datepickers-model-results-source](https://developer.android.com/develop/ui/compose/components/datepickers#model-results)

## Date picker with range

You can create a date picker that lets the user select a range between a start and end date. To do so, use DateRangePicker.

The use of DateRangePicker is essentially the same as DatePicker. You can use it for a docked picker as a child of PopUp, or you can use it as a modal picker and pass it to DatePickerDialog. The primary difference is that you use DateRangePickerState instead of DatePickerState.

The following snippet demonstrates how to create a modal date picker with a range:

@Composable
fun DateRangePickerModal(
    onDateRangeSelected: (Pair<Long?, Long?>) -> Unit,
    onDismiss: () -> Unit
) {
    val dateRangePickerState = rememberDateRangePickerState()

    DatePickerDialog(
        onDismissRequest = onDismiss,
        confirmButton = {
            TextButton(
                onClick = {
                    onDateRangeSelected(
                        Pair(
                            dateRangePickerState.selectedStartDateMillis,
                            dateRangePickerState.selectedEndDateMillis
                        )
                    )
                    onDismiss()
                }
            ) {
                Text("OK")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Cancel")
            }
        }
    ) {
        DateRangePicker(
            state = dateRangePickerState,
            title = {
                Text(
                    text = "Select date range"
                )
            },
            showModeToggle = false,
            modifier = Modifier
                .fillMaxWidth()
                .height(500.dp)
                .padding(16.dp)
        )
    }
}DatePickers.kt

Sources: [live-compose-guide-components-datepickers-range-source](https://developer.android.com/develop/ui/compose/components/datepickers#range)

## Key points about the code

The onDateRangeSelected parameter is a callback that receives a Pair<Long?, Long?> that represents the selected start and end dates. This gives the parent composable access to the selected range.

rememberDateRangePickerState() creates the state for the date range picker.

The DatePickerDialog creates a modal dialog container.

In the confirm button's onClick handler, onDateRangeSelected passes up the selected range to the parent composable.

The DateRangePicker composable serves as the dialog content.

Sources: [live-compose-guide-components-datepickers-range-key-source](https://developer.android.com/develop/ui/compose/components/datepickers#range-key)

## Results

This implementation appears as follows:

Figure 4.

A modal date picker with a selected range.

Sources: [live-compose-guide-components-datepickers-range-results-source](https://developer.android.com/develop/ui/compose/components/datepickers#range-results)

## See also

Material Design date pickers

Time pickers

Sources: [live-compose-guide-components-datepickers-see-also-source](https://developer.android.com/develop/ui/compose/components/datepickers#see-also)

## Use selected date

To capture the selected date, track it in the parent composable as a Long and pass the value to the DatePicker in onDateSelected. The following snippet demonstrates this, though you can see the full implementation in the official snippets app.

// ...
    var selectedDate by remember { mutableStateOf<Long?>(null) }
// ...
        if (selectedDate != null) {
            val date = Date(selectedDate!!)
            val formattedDate = SimpleDateFormat("MMM dd, yyyy", LocalLocale.current.platformLocale).format(date)
            Text("Selected date: $formattedDate")
        } else {
            Text("No date selected")
        }
// ...
        DatePickerModal(
            onDateSelected = {
                selectedDate = it
                showModal = false
            },
            onDismiss = { showModal = false }
        )
    }
// ...DatePickers.kt

Essentially the same applies for range date pickers, though you need to use a Pair<Long?, Long?> or a data class to capture the start and end values.

Sources: [live-compose-guide-components-datepickers-selected-date-source](https://developer.android.com/develop/ui/compose/components/datepickers#selected-date)

## State

The key parameter that the different date picker composables share in common is state, which takes either a DatePickerState or DateRangePickerState object. Their properties capture information about the user's selection using the date picker, such as the current selected date.

For more information on how you can make use of the selected date, see the Use selected date section.

Sources: [live-compose-guide-components-datepickers-state-source](https://developer.android.com/develop/ui/compose/components/datepickers#state)

## Types

There are three types of date pickers:

Docked: Appears inline within the layout. It's suitable for compact layouts where a dedicated dialog might feel intrusive.

Modal: Appears as a dialog overlaying the app's content. This provides a clear focus on date selection.

Modal input: Combines a text field with a modal date picker.

You can implement these date pickers in your app using the following composables:

DatePicker: General composable for a date picker. The container you use determines whether it is docked or model.

DatePickerDialog: The container for both modal and modal input date pickers.

DateRangePicker: For any date picker where the user can select a range with a start and end date.

Sources: [live-compose-guide-components-datepickers-types-source](https://developer.android.com/develop/ui/compose/components/datepickers#types)
