---
type: reference
title: Popup
description: Public AndroidX source evidence; independently attributed per section.
tags:
  - Compose
  - Android
  - menu
  - popup
sources:
  - id: popup-android-implementation-source
    kind: code
    resource: https://dl.google.com/dl/android/maven2/androidx/compose/ui/ui-android/1.7.8/ui-android-1.7.8-sources.jar
    revision: androidx.compose.ui:ui-android:1.7.8@sha256:0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc
    path: ui-1.7.8/androidMain/androidx/compose/ui/window/AndroidPopup.android.kt
    startLine: 176
    endLine: 817
    sha256: 5a51a01f4e1731b2021d48e9c690ea45d9c6335dccd5597b01a42946303d8526
    license: Apache-2.0
    excerpt: |2-
          constructor(
              focusable: Boolean = false,
              dismissOnBackPress: Boolean = true,
              dismissOnClickOutside: Boolean = true,
              securePolicy: SecureFlagPolicy = SecureFlagPolicy.Inherit,
              excludeFromSystemGesture: Boolean = true,
              clippingEnabled: Boolean = true,
              usePlatformDefaultWidth: Boolean = false,
          ) : this (
              flags = createFlags(focusable, securePolicy, clippingEnabled),
              inheritSecurePolicy = securePolicy == SecureFlagPolicy.Inherit,
              dismissOnBackPress = dismissOnBackPress,
              dismissOnClickOutside = dismissOnClickOutside,
              excludeFromSystemGesture = excludeFromSystemGesture,
              usePlatformDefaultWidth = usePlatformDefaultWidth,
          )

          /**
           * Whether the popup is focusable. When true, the popup will receive IME events and key
           * presses, such as when the back button is pressed.
           */
          actual val focusable: Boolean
              get() = (flags and WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE) == 0

          /**
           * Policy for how [WindowManager.LayoutParams.FLAG_SECURE] is set on the popup's window.
           */
          val securePolicy: SecureFlagPolicy
              get() = when {
                  inheritSecurePolicy -> SecureFlagPolicy.Inherit
                  (flags and WindowManager.LayoutParams.FLAG_SECURE) == 0 -> SecureFlagPolicy.SecureOff
                  else -> SecureFlagPolicy.SecureOn
              }

          /**
           * Whether the popup window is clipped to the screen boundaries, or allowed to extend beyond
           * the bounds of the screen.
           */
          actual val clippingEnabled: Boolean
              get() = (flags and WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS) == 0

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is PopupProperties) return false

              if (flags != other.flags) return false
              if (inheritSecurePolicy != other.inheritSecurePolicy) return false
              if (dismissOnBackPress != other.dismissOnBackPress) return false
              if (dismissOnClickOutside != other.dismissOnClickOutside) return false
              if (excludeFromSystemGesture != other.excludeFromSystemGesture) return false
              if (usePlatformDefaultWidth != other.usePlatformDefaultWidth) return false

              return true
          }

          override fun hashCode(): Int {
              var result = flags
              result = 31 * result + inheritSecurePolicy.hashCode()
              result = 31 * result + dismissOnBackPress.hashCode()
              result = 31 * result + dismissOnClickOutside.hashCode()
              result = 31 * result + excludeFromSystemGesture.hashCode()
              result = 31 * result + usePlatformDefaultWidth.hashCode()
              return result
          }
      }

      /**
       * Opens a popup with the given content.
       *
       * A popup is a floating container that appears on top of the current activity.
       * It is especially useful for non-modal UI surfaces that remain hidden until they
       * are needed, for example floating menus like Cut/Copy/Paste.
       *
       * The popup is positioned relative to its parent, using the [alignment] and [offset].
       * The popup is visible as long as it is part of the composition hierarchy.
       *
       * @sample androidx.compose.ui.samples.PopupSample
       *
       * @param alignment The alignment relative to the parent.
       * @param offset An offset from the original aligned position of the popup. Offset respects the
       * Ltr/Rtl context, thus in Ltr it will be added to the original aligned position and in Rtl it
       * will be subtracted from it.
       * @param onDismissRequest Executes when the user clicks outside of the popup.
       * @param properties [PopupProperties] for further customization of this popup's behavior.
       * @param content The content to be displayed inside the popup.
       */
      @Composable
      actual fun Popup(
          alignment: Alignment,
          offset: IntOffset,
          onDismissRequest: (() -> Unit)?,
          properties: PopupProperties,
          content: @Composable () -> Unit
      ) {
          val popupPositioner = remember(alignment, offset) {
              AlignmentOffsetPositionProvider(
                  alignment,
                  offset
              )
          }

          Popup(
              popupPositionProvider = popupPositioner,
              onDismissRequest = onDismissRequest,
              properties = properties,
              content = content
          )
      }

      /**
       * Opens a popup with the given content.
       *
       * The popup is positioned using a custom [popupPositionProvider].
       *
       * @sample androidx.compose.ui.samples.PopupSample
       *
       * @param popupPositionProvider Provides the screen position of the popup.
       * @param onDismissRequest Executes when the user clicks outside of the popup.
       * @param properties [PopupProperties] for further customization of this popup's behavior.
       * @param content The content to be displayed inside the popup.
       */
      @Composable
      actual fun Popup(
          popupPositionProvider: PopupPositionProvider,
          onDismissRequest: (() -> Unit)?,
          properties: PopupProperties,
          content: @Composable () -> Unit
      ) {
          val view = LocalView.current
          val density = LocalDensity.current
          val testTag = LocalPopupTestTag.current
          val layoutDirection = LocalLayoutDirection.current
          val parentComposition = rememberCompositionContext()
          val currentContent by rememberUpdatedState(content)
          val popupId = rememberSaveable { UUID.randomUUID() }
          val popupLayout = remember {
              PopupLayout(
                  onDismissRequest = onDismissRequest,
                  properties = properties,
                  testTag = testTag,
                  composeView = view,
                  density = density,
                  initialPositionProvider = popupPositionProvider,
                  popupId = popupId
              ).apply {
                  setContent(parentComposition) {
                      SimpleStack(
                          Modifier
                              .semantics { this.popup() }
                              // Get the size of the content
                              .onSizeChanged {
                                  popupContentSize = it
                                  updatePosition()
                              }
                              // Hide the popup while we can't position it correctly
                              .alpha(if (canCalculatePosition) 1f else 0f)
                      ) {
                          currentContent()
                      }
                  }
              }
          }

          DisposableEffect(popupLayout) {
              popupLayout.show()
              popupLayout.updateParameters(
                  onDismissRequest = onDismissRequest,
                  properties = properties,
                  testTag = testTag,
                  layoutDirection = layoutDirection
              )
              onDispose {
                  popupLayout.disposeComposition()
                  // Remove the window
                  popupLayout.dismiss()
              }
          }

          SideEffect {
              popupLayout.updateParameters(
                  onDismissRequest = onDismissRequest,
                  properties = properties,
                  testTag = testTag,
                  layoutDirection = layoutDirection
              )
          }

          DisposableEffect(popupPositionProvider) {
              popupLayout.positionProvider = popupPositionProvider
              popupLayout.updatePosition()
              onDispose {}
          }

          // The parent's bounds can change on any frame without onGloballyPositioned being called, if
          // e.g. the soft keyboard changes visibility. For that reason, we need to check if we've moved
          // on every frame. However, we don't need to handle all moves – most position changes will be
          // handled by onGloballyPositioned. This polling loop only needs to handle the case where the
          // view's absolute position on the screen has changed, so we do a quick check to see if it has,
          // and only do the other position calculations in that case.
          LaunchedEffect(popupLayout) {
              while (isActive) {
                  withInfiniteAnimationFrameNanos {}
                  popupLayout.pollForLocationOnScreenChange()
              }
          }

          // TODO(soboleva): Look at module arrangement so that Box can be
          //  used instead of this custom Layout
          // Get the parent's position, size and layout direction
          Layout(
              content = {},
              modifier = Modifier
                  .onGloballyPositioned { childCoordinates ->
                      // This callback is best-effort – the screen coordinates of this layout node can
                      // change at any time without this callback being fired (e.g. during IME visibility
                      // change). For that reason, updating the position in this callback is not
                      // sufficient, and the coordinates are also re-calculated on every frame.
                      val parentCoordinates = childCoordinates.parentLayoutCoordinates!!
                      popupLayout.updateParentLayoutCoordinates(parentCoordinates)
                  }
          ) { _, _ ->
              popupLayout.parentLayoutDirection = layoutDirection
              layout(0, 0) {}
          }
      }

      private const val PopupPropertiesBaseFlags: Int =
          WindowManager.LayoutParams.FLAG_WATCH_OUTSIDE_TOUCH

      private fun createFlags(
          focusable: Boolean,
          securePolicy: SecureFlagPolicy,
          clippingEnabled: Boolean,
      ): Int {
          var flags = PopupPropertiesBaseFlags
          if (!focusable) {
              flags = flags or WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE
          }
          if (securePolicy == SecureFlagPolicy.SecureOn) {
              flags = flags or WindowManager.LayoutParams.FLAG_SECURE
          }
          if (!clippingEnabled) {
              flags = flags or WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS
          }
          return flags
      }

      // TODO(b/139861182): This is a hack to work around Popups not using Semantics for test tags
      //  We should either remove it, or come up with an abstracted general solution that isn't specific
      //  to Popup
      internal val LocalPopupTestTag = compositionLocalOf { "DEFAULT_TEST_TAG" }

      @Composable
      internal fun PopupTestTag(tag: String, content: @Composable () -> Unit) {
          CompositionLocalProvider(LocalPopupTestTag provides tag, content = content)
      }

      // TODO(soboleva): Look at module dependencies so that we can get code reuse between
      // Popup's SimpleStack and Box.
      @Suppress("NOTHING_TO_INLINE")
      @Composable
      private inline fun SimpleStack(modifier: Modifier, noinline content: @Composable () -> Unit) {
          Layout(content = content, modifier = modifier) { measurables, constraints ->
              when (measurables.size) {
                  0 -> layout(0, 0) {}
                  1 -> {
                      val p = measurables[0].measure(constraints)
                      layout(p.width, p.height) {
                          p.placeRelative(0, 0)
                      }
                  }
                  else -> {
                      val placeables = measurables.fastMap { it.measure(constraints) }
                      var width = 0
                      var height = 0
                      for (i in 0..placeables.lastIndex) {
                          val p = placeables[i]
                          width = maxOf(width, p.width)
                          height = maxOf(height, p.height)
                      }
                      layout(width, height) {
                          for (i in 0..placeables.lastIndex) {
                              val p = placeables[i]
                              p.placeRelative(0, 0)
                          }
                      }
                  }
              }
          }
      }

      /**
       * The layout the popup uses to display its content.
       *
       * @param composeView The parent view of the popup which is the AndroidComposeView.
       */
      @SuppressLint("ViewConstructor")
      internal class PopupLayout(
          private var onDismissRequest: (() -> Unit)?,
          private var properties: PopupProperties,
          var testTag: String,
          private val composeView: View,
          density: Density,
          initialPositionProvider: PopupPositionProvider,
          popupId: UUID,
          private val popupLayoutHelper: PopupLayoutHelper = if (Build.VERSION.SDK_INT >= 29) {
              PopupLayoutHelperImpl29()
          } else {
              PopupLayoutHelperImpl()
          }
      ) : AbstractComposeView(composeView.context),
          ViewRootForInspector {
          private val windowManager =
              composeView.context.getSystemService(Context.WINDOW_SERVICE) as WindowManager

          @VisibleForTesting
          internal val params = createLayoutParams()

          /** The logic of positioning the popup relative to its parent. */
          var positionProvider = initialPositionProvider

          // Position params
          var parentLayoutDirection: LayoutDirection = LayoutDirection.Ltr
          var popupContentSize: IntSize? by mutableStateOf(null)
          private var parentLayoutCoordinates: LayoutCoordinates? by mutableStateOf(null)
          private var parentBounds: IntRect? = null

          /** Track parent coordinates and content size; only show popup once we have both. */
          val canCalculatePosition by derivedStateOf {
              parentLayoutCoordinates?.takeIf { it.isAttached } != null && popupContentSize != null
          }

          // On systems older than Android S, there is a bug in the surface insets matrix math used by
          // elevation, so high values of maxSupportedElevation break accessibility services: b/232788477.
          private val maxSupportedElevation = 8.dp

          // The window visible frame used for the last popup position calculation.
          private val previousWindowVisibleFrame = Rect()

          override val subCompositionView: AbstractComposeView get() = this

          private val snapshotStateObserver = SnapshotStateObserver(onChangedExecutor = { command ->
              // This is the same executor logic used by AndroidComposeView's OwnerSnapshotObserver, which
              // drives most of the state observation in compose UI.
              if (handler?.looper === Looper.myLooper()) {
                  command()
              } else {
                  handler?.post(command)
              }
          })

          private var backCallback: Any? = null

          init {
              id = android.R.id.content
              setViewTreeLifecycleOwner(composeView.findViewTreeLifecycleOwner())
              setViewTreeViewModelStoreOwner(composeView.findViewTreeViewModelStoreOwner())
              setViewTreeSavedStateRegistryOwner(composeView.findViewTreeSavedStateRegistryOwner())
              // Set unique id for AbstractComposeView. This allows state restoration for the state
              // defined inside the Popup via rememberSaveable()
              setTag(R.id.compose_view_saveable_id_tag, "Popup:$popupId")

              // Enable children to draw their shadow by not clipping them
              clipChildren = false
              // Allocate space for elevation
              with(density) { elevation = maxSupportedElevation.toPx() }
              // Simple outline to force window manager to allocate space for shadow.
              // Note that the outline affects clickable area for the dismiss listener. In case of shapes
              // like circle the area for dismiss might be to small (rectangular outline consuming clicks
              // outside of the circle).
              outlineProvider = object : ViewOutlineProvider() {
                  override fun getOutline(view: View, result: Outline) {
                      result.setRect(0, 0, view.width, view.height)
                      // We set alpha to 0 to hide the view's shadow and let the composable to draw its
                      // own shadow. This still enables us to get the extra space needed in the surface.
                      result.alpha = 0f
                  }
              }
          }

          private var content: @Composable () -> Unit by mutableStateOf({})

          override var shouldCreateCompositionOnAttachedToWindow: Boolean = false
              private set

          fun show() {
              windowManager.addView(this, params)
          }

          fun setContent(parent: CompositionContext, content: @Composable () -> Unit) {
              setParentCompositionContext(parent)
              this.content = content
              shouldCreateCompositionOnAttachedToWindow = true
          }

          @Composable
          @UiComposable
          override fun Content() {
              content()
          }

          override fun onAttachedToWindow() {
              super.onAttachedToWindow()
              snapshotStateObserver.start()
              maybeRegisterBackCallback()
          }

          override fun onDetachedFromWindow() {
              super.onDetachedFromWindow()
              snapshotStateObserver.stop()
              snapshotStateObserver.clear()
              maybeUnregisterBackCallback()
          }

          override fun internalOnMeasure(widthMeasureSpec: Int, heightMeasureSpec: Int) {
              if (properties.usePlatformDefaultWidth) {
                  super.internalOnMeasure(widthMeasureSpec, heightMeasureSpec)
              } else {
                  // usePlatformDefaultWidth false, so don't want to limit the popup width to the Android
                  // platform default. Therefore, we create a new measure spec for width, which
                  // corresponds to the full screen width. We do the same for height, even if
                  // ViewRootImpl gives it to us from the first measure.
                  val displayWidthMeasureSpec = makeMeasureSpec(displayWidth, MeasureSpec.AT_MOST)
                  val displayHeightMeasureSpec = makeMeasureSpec(displayHeight, MeasureSpec.AT_MOST)
                  super.internalOnMeasure(displayWidthMeasureSpec, displayHeightMeasureSpec)
              }
          }

          override fun internalOnLayout(changed: Boolean, left: Int, top: Int, right: Int, bottom: Int) {
              super.internalOnLayout(changed, left, top, right, bottom)
              // Now set the content size as fixed layout params, such that ViewRootImpl knows
              // the exact window size.
              if (!properties.usePlatformDefaultWidth) {
                  val child = getChildAt(0) ?: return
                  params.width = child.measuredWidth
                  params.height = child.measuredHeight
                  popupLayoutHelper.updateViewLayout(windowManager, this, params)
              }
          }

          private val displayWidth: Int
              get() {
                  val density = context.resources.displayMetrics.density
                  return (context.resources.configuration.screenWidthDp * density).fastRoundToInt()
              }

          private val displayHeight: Int
              get() {
                  val density = context.resources.displayMetrics.density
                  return (context.resources.configuration.screenHeightDp * density).fastRoundToInt()
              }

          /**
           * Taken from PopupWindow
           */
          override fun dispatchKeyEvent(event: KeyEvent): Boolean {
              if (event.keyCode == KeyEvent.KEYCODE_BACK && properties.dismissOnBackPress) {
                  if (keyDispatcherState == null) {
                      return super.dispatchKeyEvent(event)
                  }
                  if (event.action == KeyEvent.ACTION_DOWN && event.repeatCount == 0) {
                      val state = keyDispatcherState
                      state?.startTracking(event, this)
                      return true
                  } else if (event.action == KeyEvent.ACTION_UP) {
                      val state = keyDispatcherState
                      if (state != null && state.isTracking(event) && !event.isCanceled) {
                          onDismissRequest?.invoke()
                          return true
                      }
                  }
              }
              return super.dispatchKeyEvent(event)
          }

          private fun maybeRegisterBackCallback() {
              if (!properties.dismissOnBackPress || Build.VERSION.SDK_INT < 33) {
                  return
              }
              if (backCallback == null) {
                  backCallback = Api33Impl.createBackCallback(onDismissRequest)
              }
              Api33Impl.maybeRegisterBackCallback(this, backCallback)
          }

          private fun maybeUnregisterBackCallback() {
              if (Build.VERSION.SDK_INT >= 33) {
                  Api33Impl.maybeUnregisterBackCallback(this, backCallback)
              }
              backCallback = null
          }

          fun updateParameters(
              onDismissRequest: (() -> Unit)?,
              properties: PopupProperties,
              testTag: String,
              layoutDirection: LayoutDirection,
          ) {
              this.onDismissRequest = onDismissRequest
              this.testTag = testTag
              updatePopupProperties(properties)
              superSetLayoutDirection(layoutDirection)
          }

          private fun updatePopupProperties(properties: PopupProperties) {
              if (this.properties == properties) return

              if (properties.usePlatformDefaultWidth && !this.properties.usePlatformDefaultWidth) {
                  // Undo fixed size in internalOnLayout, which would suppress size changes when
                  // usePlatformDefaultWidth is true.
                  params.width = WindowManager.LayoutParams.WRAP_CONTENT
                  params.height = WindowManager.LayoutParams.WRAP_CONTENT
              }

              this.properties = properties
              params.flags = properties.flagsWithSecureFlagInherited(composeView.isFlagSecureEnabled())

              popupLayoutHelper.updateViewLayout(windowManager, this, params)
          }

          /**
           * Updates the [LayoutCoordinates] object that is used by [updateParentBounds] to calculate
           * the position of the popup. If the new [LayoutCoordinates] reports new parent bounds, calls
           * [updatePosition].
           */
          fun updateParentLayoutCoordinates(parentLayoutCoordinates: LayoutCoordinates) {
              this.parentLayoutCoordinates = parentLayoutCoordinates
              updateParentBounds()
          }

          /**
           * Used by [pollForLocationOnScreenChange] to read the [composeView]'s absolute position
           * on screen. The array is stored as a field instead of allocated in the method because it's
           * called on every frame.
           */
          private val locationOnScreen = IntArray(2)

          /**
           * Returns true if the absolute location of the [composeView] on the screen has changed since
           * the last call. This method asks the view for its location instead of using Compose APIs like
           * [LayoutCoordinates] because it does less work, and this method is intended to be called on
           * every frame.
           *
           * The location can change without any callbacks being fired if, for example, the soft keyboard
           * is shown or hidden when the window is in `adjustPan` mode. In that case, the window's root
           * view (`ViewRootImpl`) will "scroll" the view hierarchy in a special way that doesn't fire any
           * callbacks.
           */
          fun pollForLocationOnScreenChange() {
              val (oldX, oldY) = locationOnScreen
              composeView.getLocationOnScreen(locationOnScreen)
              if (oldX != locationOnScreen[0] || oldY != locationOnScreen[1]) {
                  updateParentBounds()
              }
          }

          /**
           * Re-calculates the bounds of the parent layout node that this popup is anchored to. If they've
           * changed since the last call, calls [updatePosition] to actually calculate the popup's new
           * position and update the window.
           */
          @VisibleForTesting
          internal fun updateParentBounds() {
              val coordinates = parentLayoutCoordinates?.takeIf { it.isAttached } ?: return
              val layoutSize = coordinates.size

              val position = coordinates.positionInWindow()
              val layoutPosition = IntOffset(position.x.fastRoundToInt(), position.y.fastRoundToInt())

              val newParentBounds = IntRect(layoutPosition, layoutSize)
              if (newParentBounds != parentBounds) {
                  this.parentBounds = newParentBounds
                  updatePosition()
              }
          }

          /**
           * Updates the position of the popup based on current position properties.
           */
          fun updatePosition() {
              val parentBounds = parentBounds ?: return
              val popupContentSize = popupContentSize ?: return

              val windowSize = previousWindowVisibleFrame.let {
                  popupLayoutHelper.getWindowVisibleDisplayFrame(composeView, it)
                  val bounds = it.toIntBounds()
                  IntSize(width = bounds.width, height = bounds.height)
              }

              var popupPosition = IntOffset.Zero
              snapshotStateObserver.observeReads(this, onCommitAffectingPopupPosition) {
                  popupPosition = positionProvider.calculatePosition(
                      parentBounds,
                      windowSize,
                      parentLayoutDirection,
                      popupContentSize
                  )
              }

              params.x = popupPosition.x
              params.y = popupPosition.y

              if (properties.excludeFromSystemGesture) {
                  // Resolve conflict with gesture navigation back when dragging this handle view on the
                  // edge of the screen.
                  popupLayoutHelper.setGestureExclusionRects(this, windowSize.width, windowSize.height)
              }

              popupLayoutHelper.updateViewLayout(windowManager, this, params)
          }

          /**
           * Remove the view from the [WindowManager].
           */
          fun dismiss() {
              setViewTreeLifecycleOwner(null)
              windowManager.removeViewImmediate(this)
          }

          /**
           * Handles touch screen motion events and calls [onDismissRequest] when the
           * users clicks outside the popup.
           */
          override fun onTouchEvent(event: MotionEvent?): Boolean {
              if (!properties.dismissOnClickOutside) {
                  return super.onTouchEvent(event)
              }
              // Note that this implementation is taken from PopupWindow. It actually does not seem to
              // matter whether we return true or false as some upper layer decides on whether the
              // event is propagated to other windows or not. So for focusable the event is consumed but
              // for not focusable it is propagated to other windows.
              if ((event?.action == MotionEvent.ACTION_DOWN) &&
                  ((event.x < 0) || (event.x >= width) || (event.y < 0) || (event.y >= height))
              ) {
                  onDismissRequest?.invoke()
                  return true
              } else if (event?.action == MotionEvent.ACTION_OUTSIDE) {
                  onDismissRequest?.invoke()
                  return true
              }

              return super.onTouchEvent(event)
  - id: popup-api-source
    kind: code
    resource: https://dl.google.com/dl/android/maven2/androidx/compose/ui/ui-android/1.7.8/ui-android-1.7.8-sources.jar
    revision: androidx.compose.ui:ui-android:1.7.8@sha256:0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc
    path: ui-1.7.8/commonMain/androidx/compose/ui/window/Popup.kt
    startLine: 130
    endLine: 169
    sha256: 813b1898ebcecd91215825cc3609f13325b656d51f51ad88c0a3b155de874975
    license: Apache-2.0
    excerpt: |2-
       * The popup is visible as long as it is part of the composition hierarchy.
       *
       * @sample androidx.compose.ui.samples.PopupSample
       *
       * @param alignment The alignment relative to the parent.
       * @param offset An offset from the original aligned position of the popup. Offset respects the
       * Ltr/Rtl context, thus in Ltr it will be added to the original aligned position and in Rtl it
       * will be subtracted from it.
       * @param onDismissRequest Executes when the user clicks outside of the popup.
       * @param properties [PopupProperties] for further customization of this popup's behavior.
       * @param content The content to be displayed inside the popup.
       */
      @Composable
      expect fun Popup(
          alignment: Alignment = Alignment.TopStart,
          offset: IntOffset = IntOffset(0, 0),
          onDismissRequest: (() -> Unit)? = null,
          properties: PopupProperties = @OptIn(ExperimentalComposeUiApi::class) PopupProperties(),
          content: @Composable () -> Unit
      )

      /**
       * Opens a popup with the given content.
       *
       * The popup is positioned using a custom [popupPositionProvider].
       *
       * @sample androidx.compose.ui.samples.PopupSample
       *
       * @param popupPositionProvider Provides the screen position of the popup.
       * @param onDismissRequest Executes when the user clicks outside of the popup.
       * @param properties [PopupProperties] for further customization of this popup's behavior.
       * @param content The content to be displayed inside the popup.
       */
      @Composable
      expect fun Popup(
          popupPositionProvider: PopupPositionProvider,
          onDismissRequest: (() -> Unit)? = null,
          properties: PopupProperties = @OptIn(ExperimentalComposeUiApi::class) PopupProperties(),
          content: @Composable () -> Unit
      )
  - id: popup-dismiss-tests-source
    kind: test
    resource: https://raw.githubusercontent.com/androidx/androidx/07bb66ae1eada12632eb10c75246d7b2c5ba6ede/compose/ui/ui/src/androidDeviceTest/kotlin/androidx/compose/ui/window/PopupTest.kt
    revision: 07bb66ae1eada12632eb10c75246d7b2c5ba6ede
    path: androidx-main-07bb66ae/compose/ui/ui/src/androidDeviceTest/kotlin/androidx/compose/ui/window/PopupTest.kt
    startLine: 245
    endLine: 365
    sha256: 450baf4a86905f278f5491809757ca626f122fd8f7ca50443dab707e93553882
    license: Apache-2.0
    excerpt: |2-
          @Test
          fun isDismissedOnTapOutside() {
              var showPopup by mutableStateOf(true)
              rule.setContent {
                  Box(Modifier.fillMaxSize()) {
                      if (showPopup) {
                          Popup(alignment = Alignment.Center, onDismissRequest = { showPopup = false }) {
                              Box(Modifier.size(50.dp).testTag(testTag))
                          }
                      }
                  }
              }

              // Popup should be visible
              rule.onNodeWithTag(testTag).assertIsDisplayed()

              // Click outside the popup
              val outsideX = 0
              val outsideY =
                  with(rule.density) {
                      rule.onAllNodes(isRoot()).onFirst().getUnclippedBoundsInRoot().height.roundToPx() /
                          2
                  }
              UiDevice.getInstance(getInstrumentation()).click(outsideX, outsideY)

              // Popup should not exist
              rule.onNodeWithTag(testTag).assertDoesNotExist()
          }

          @Test
          fun isDismissedOnBackPress() {
              var showPopup by mutableStateOf(true)
              rule.setContent {
                  Box(Modifier.fillMaxSize()) {
                      if (showPopup) {
                          Popup(
                              properties =
                                  PopupProperties(
                                      // Needs to be focusable to intercept back press
                                      focusable = true
                                  ),
                              alignment = Alignment.Center,
                              onDismissRequest = { showPopup = false },
                          ) {
                              Box(Modifier.size(50.dp).testTag(testTag))
                          }
                      }
                  }
              }

              // Popup should be visible
              rule.onNodeWithTag(testTag).assertIsDisplayed()

              Espresso.pressBack()

              // Popup should not exist
              rule.onNodeWithTag(testTag).assertDoesNotExist()
          }

          @Test
          fun isDismissedOnEscapePress() {
              var showPopup by mutableStateOf(true)
              rule.setContent {
                  Box(Modifier.fillMaxSize()) {
                      if (showPopup) {
                          Popup(
                              properties =
                                  PopupProperties(
                                      // Needs to be focusable to intercept key press
                                      focusable = true
                                  ),
                              alignment = Alignment.Center,
                              onDismissRequest = { showPopup = false },
                          ) {
                              Box(Modifier.size(50.dp).testTag(testTag))
                          }
                      }
                  }
              }

              // Popup should be visible
              rule.onNodeWithTag(testTag).assertIsDisplayed()

              UiDevice.getInstance(getInstrumentation()).pressKeyCode(KeyEvent.KEYCODE_ESCAPE)

              // Popup should not exist
              rule.onNodeWithTag(testTag).assertDoesNotExist()
          }

          @Test
          fun isNotDismissedOnTapOutside_dismissOnClickOutsideFalse() {
              var showPopup by mutableStateOf(true)
              rule.setContent {
                  Box(Modifier.fillMaxSize()) {
                      if (showPopup) {
                          Popup(
                              alignment = Alignment.Center,
                              properties = PopupProperties(dismissOnClickOutside = false),
                              onDismissRequest = { showPopup = false },
                          ) {
                              Box(Modifier.size(50.dp).testTag(testTag))
                          }
                      }
                  }
              }

              // Popup should be visible
              rule.onNodeWithTag(testTag).assertIsDisplayed()

              // Click outside the popup
              val outsideX = 0
              val outsideY =
                  with(rule.density) {
                      rule.onAllNodes(isRoot()).onFirst().getUnclippedBoundsInRoot().height.roundToPx() /
                          2
                  }
              UiDevice.getInstance(getInstrumentation()).click(outsideX, outsideY)

              // Popup should still be visible
              rule.onNodeWithTag(testTag).assertIsDisplayed()
          }
  - id: popup-touch-routing-source
    kind: code
    resource: https://dl.google.com/dl/android/maven2/androidx/compose/ui/ui-android/1.7.8/ui-android-1.7.8-sources.jar
    revision: androidx.compose.ui:ui-android:1.7.8@sha256:0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc
    path: ui-1.7.8/androidMain/androidx/compose/ui/window/AndroidPopup.android.kt
    startLine: 799
    endLine: 817
    sha256: 10a685758ed53a23805c2e52d7af4f69d2e27bb5ded5292548b8b570f68872fc
    license: Apache-2.0
    excerpt: |2-
          override fun onTouchEvent(event: MotionEvent?): Boolean {
              if (!properties.dismissOnClickOutside) {
                  return super.onTouchEvent(event)
              }
              // Note that this implementation is taken from PopupWindow. It actually does not seem to
              // matter whether we return true or false as some upper layer decides on whether the
              // event is propagated to other windows or not. So for focusable the event is consumed but
              // for not focusable it is propagated to other windows.
              if ((event?.action == MotionEvent.ACTION_DOWN) &&
                  ((event.x < 0) || (event.x >= width) || (event.y < 0) || (event.y >= height))
              ) {
                  onDismissRequest?.invoke()
                  return true
              } else if (event?.action == MotionEvent.ACTION_OUTSIDE) {
                  onDismissRequest?.invoke()
                  return true
              }

              return super.onTouchEvent(event)
compose:
  id: compose-popup
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.window.Popup
  sections:
    - id: popup-android-implementation
      title: Android Popup flags and outside event handler
      aliases:
        - Popup
        - Android 구현
        - 윈도우 플래그
        - createFlags
        - FLAG_WATCH_OUTSIDE_TOUCH
        - FLAG_NOT_FOCUSABLE
        - onTouchEvent
        - ACTION_OUTSIDE
        - implementation
      requires:
        - artifact: androidx.compose.ui:ui
          version: 1.7.8
          platform: android
      sourceIds:
        - popup-android-implementation-source
      relatedIds:
        - popup-touch-routing
        - popup-dismiss-tests
    - id: popup-api
      title: Popup overload API
      aliases:
        - Popup
        - 팝업
        - API
        - signature
        - alignment
        - offset
        - PopupPositionProvider
        - overload
        - content
        - onDismissRequest
      requires:
        - artifact: androidx.compose.ui:ui
          version: 1.7.8
          platform: android
      sourceIds:
        - popup-api-source
      relatedIds:
        - popup-properties
        - popup-android-implementation
    - id: popup-dismiss-tests
      title: "AndroidX main Popup outside-dismiss tests: unknown release"
      aliases:
        - Popup
        - 테스트
        - 바깥 탭
        - 닫기
        - test
        - isDismissedOnTapOutside
        - isNotDismissedOnTapOutside_dismissOnClickOutsideFalse
        - dismissOnClickOutside
        - unknown
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
          platform: android
      sourceIds:
        - popup-dismiss-tests-source
      relatedIds:
        - popup-android-implementation
    - id: popup-touch-routing
      title: Popup window touch routing versus dismissal
      aliases:
        - Popup
        - 터치 전달
        - 뒤쪽 UI
        - 클릭
        - 닫힘
        - 전파
        - focusable
        - pass through
        - touch routing
        - onTouchEvent
        - upper layer
        - propagated
        - other windows
        - return true
      requires:
        - artifact: androidx.compose.ui:ui
          version: 1.7.8
          platform: android
      sourceIds:
        - popup-touch-routing-source
      relatedIds:
        - popup-android-implementation
        - menu-android-implementation
---

# Popup

Public AndroidX source evidence; independently attributed per section.

## Android Popup flags and outside event handler

Android flag creation watches outside touch and sets NOT_FOCUSABLE when requested; onTouchEvent guards dismissal and invokes callback for outside DOWN or OUTSIDE. [^popup-android-implementation-source]

Scope: Returning true is not itself proof of global window routing.

```kotlin
private const val PopupPropertiesBaseFlags: Int =
    WindowManager.LayoutParams.FLAG_WATCH_OUTSIDE_TOUCH

private fun createFlags(
    focusable: Boolean,
    securePolicy: SecureFlagPolicy,
    clippingEnabled: Boolean,
): Int {
    var flags = PopupPropertiesBaseFlags
    if (!focusable) {
        flags = flags or WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE
    }
    if (securePolicy == SecureFlagPolicy.SecureOn) {
        flags = flags or WindowManager.LayoutParams.FLAG_SECURE
    }
    if (!clippingEnabled) {
        flags = flags or WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS
    }
    return flags

    override fun onTouchEvent(event: MotionEvent?): Boolean {
        if (!properties.dismissOnClickOutside) {
            return super.onTouchEvent(event)
        }
        // Note that this implementation is taken from PopupWindow. It actually does not seem to
        // matter whether we return true or false as some upper layer decides on whether the
        // event is propagated to other windows or not. So for focusable the event is consumed but
        // for not focusable it is propagated to other windows.
        if ((event?.action == MotionEvent.ACTION_DOWN) &&
            ((event.x < 0) || (event.x >= width) || (event.y < 0) || (event.y >= height))
        ) {
            onDismissRequest?.invoke()
            return true
        } else if (event?.action == MotionEvent.ACTION_OUTSIDE) {
            onDismissRequest?.invoke()
            return true
        }

        return super.onTouchEvent(event)
```

[^popup-android-implementation-source]: ui-1.7.8/androidMain/androidx/compose/ui/window/AndroidPopup.android.kt:176-817; androidx.compose.ui:ui-android:1.7.8@sha256:0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc; Apache-2.0.


Sources: [popup-android-implementation-source](https://dl.google.com/dl/android/maven2/androidx/compose/ui/ui-android/1.7.8/ui-android-1.7.8-sources.jar)

## Popup overload API

Popup API takes a nullable onDismissRequest and PopupProperties, with separate alignment and position-provider overloads. [^popup-api-source]

```kotlin
 * The popup is visible as long as it is part of the composition hierarchy.
 *
 * @sample androidx.compose.ui.samples.PopupSample
 *
 * @param alignment The alignment relative to the parent.
 * @param offset An offset from the original aligned position of the popup. Offset respects the
 * Ltr/Rtl context, thus in Ltr it will be added to the original aligned position and in Rtl it
 * will be subtracted from it.
 * @param onDismissRequest Executes when the user clicks outside of the popup.
 * @param properties [PopupProperties] for further customization of this popup's behavior.
 * @param content The content to be displayed inside the popup.
 */
@Composable
expect fun Popup(
    alignment: Alignment = Alignment.TopStart,
    offset: IntOffset = IntOffset(0, 0),
    onDismissRequest: (() -> Unit)? = null,
    properties: PopupProperties = @OptIn(ExperimentalComposeUiApi::class) PopupProperties(),
    content: @Composable () -> Unit
)

```

[^popup-api-source]: ui-1.7.8/commonMain/androidx/compose/ui/window/Popup.kt:130-169; androidx.compose.ui:ui-android:1.7.8@sha256:0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc; Apache-2.0.


Sources: [popup-api-source](https://dl.google.com/dl/android/maven2/androidx/compose/ui/ui-android/1.7.8/ui-android-1.7.8-sources.jar)

## AndroidX main Popup outside-dismiss tests: unknown release

Official upstream test source asserts popup disappears after an outside click with the default properties and remains visible when dismissOnClickOutside=false. This commit-pinned source has unknown released-version applicability and was not executed here. [^popup-dismiss-tests-source]

Scope: These tests assert popup visibility, not an underlying click callback. Source retrieval is not execution, and the main commit is not verified as a released artifact version.

```kotlin
    @Test
    fun isDismissedOnTapOutside() {
        var showPopup by mutableStateOf(true)
        rule.setContent {
            Box(Modifier.fillMaxSize()) {
                if (showPopup) {
                    Popup(alignment = Alignment.Center, onDismissRequest = { showPopup = false }) {
                        Box(Modifier.size(50.dp).testTag(testTag))
                    }
                }
            }
        }

        // Popup should be visible
        rule.onNodeWithTag(testTag).assertIsDisplayed()

        // Click outside the popup
        val outsideX = 0
        val outsideY =
            with(rule.density) {
                rule.onAllNodes(isRoot()).onFirst().getUnclippedBoundsInRoot().height.roundToPx() /
                    2
            }
        UiDevice.getInstance(getInstrumentation()).click(outsideX, outsideY)

        // Popup should not exist
        rule.onNodeWithTag(testTag).assertDoesNotExist()
    }

    @Test
    fun isNotDismissedOnTapOutside_dismissOnClickOutsideFalse() {
        var showPopup by mutableStateOf(true)
        rule.setContent {
            Box(Modifier.fillMaxSize()) {
                if (showPopup) {
                    Popup(
                        alignment = Alignment.Center,
                        properties = PopupProperties(dismissOnClickOutside = false),
                        onDismissRequest = { showPopup = false },
                    ) {
                        Box(Modifier.size(50.dp).testTag(testTag))
                    }
                }
            }
        }

        // Popup should be visible
        rule.onNodeWithTag(testTag).assertIsDisplayed()

        // Click outside the popup
        val outsideX = 0
        val outsideY =
            with(rule.density) {
                rule.onAllNodes(isRoot()).onFirst().getUnclippedBoundsInRoot().height.roundToPx() /
                    2
            }
        UiDevice.getInstance(getInstrumentation()).click(outsideX, outsideY)

        // Popup should still be visible
        rule.onNodeWithTag(testTag).assertIsDisplayed()
    }
```

[^popup-dismiss-tests-source]: androidx-main-07bb66ae/compose/ui/ui/src/androidDeviceTest/kotlin/androidx/compose/ui/window/PopupTest.kt:245-365; 07bb66ae1eada12632eb10c75246d7b2c5ba6ede; Apache-2.0.


Sources: [popup-dismiss-tests-source](https://raw.githubusercontent.com/androidx/androidx/07bb66ae1eada12632eb10c75246d7b2c5ba6ede/compose/ui/ui/src/androidDeviceTest/kotlin/androidx/compose/ui/window/PopupTest.kt)

## Popup window touch routing versus dismissal

The implementation comment says an upper layer decides propagation: focusable consumes; non-focusable propagates to other windows. This is source-level guidance distinct from dismissal. [^popup-touch-routing-source]

Scope: No device/emulator background-click test executed. A particular underlying composable click callback or full gesture delivery is not established. Do not infer delivery simply from dismissOnClickOutside=false.

```kotlin
    override fun onTouchEvent(event: MotionEvent?): Boolean {
        if (!properties.dismissOnClickOutside) {
            return super.onTouchEvent(event)
        }
        // Note that this implementation is taken from PopupWindow. It actually does not seem to
        // matter whether we return true or false as some upper layer decides on whether the
        // event is propagated to other windows or not. So for focusable the event is consumed but
        // for not focusable it is propagated to other windows.
        if ((event?.action == MotionEvent.ACTION_DOWN) &&
            ((event.x < 0) || (event.x >= width) || (event.y < 0) || (event.y >= height))
        ) {
            onDismissRequest?.invoke()
            return true
        } else if (event?.action == MotionEvent.ACTION_OUTSIDE) {
            onDismissRequest?.invoke()
            return true
        }

        return super.onTouchEvent(event)
```

[^popup-touch-routing-source]: ui-1.7.8/androidMain/androidx/compose/ui/window/AndroidPopup.android.kt:799-817; androidx.compose.ui:ui-android:1.7.8@sha256:0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc; Apache-2.0.


Sources: [popup-touch-routing-source](https://dl.google.com/dl/android/maven2/androidx/compose/ui/ui-android/1.7.8/ui-android-1.7.8-sources.jar)
