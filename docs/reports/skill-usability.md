# Installed skill usability: fresh consumer evidence

This is fresh model/tool consumer evidence from an independently assigned consumer using the installed `compose-reference-context` skill. It is **not** standalone `codex exec` validation, Android compilation, a Gradle dependency resolution result, or Android runtime validation. No nested Codex execution was attempted. The target Android project and actual PR diff were unavailable.

The consumer was given the two user requests, the installed SKILL.md path, the prepared local demo config, and the scope restrictions. It chose its own queries and reads. It did not inspect evaluation/questions.json, previous consumer reports, implementation/design documents, or checkout CLI code. The installed SKILL.md was explicitly invoked and read first, followed by its launcher help. No code, commits, or agents were created.

## Setup and portability

- Skill: `/workspace/compose-knowledge/.cache/installed-skills/compose-reference-context/SKILL.md`.
- Launcher: `/workspace/compose-knowledge/.cache/installed-skills/compose-reference-context/scripts/compose-knowledge.mjs`.
- Node: `v24.22.1`.
- Launcher execution cwd: `/tmp/compose-skill-consumer`, outside the checkout. Initial help also ran from `/tmp`; subsequent captured help ran from the consumer cwd.
- Prepared config read: `/workspace/compose-knowledge/.cache/demo/latest.json`. Remote: `/workspace/compose-knowledge/.cache/demo/run-1FMvdr/corpus`.
- A separate writable cache, `/tmp/compose-skill-consumer/cache`, kept every consumer-generated artifact within the assigned scope instead of modifying the demo cache supplied by the config.
- Actual lookup was performed through the installed launcher, never through the checkout CLI. The local demo remote contains public example source data. “fresh” means this local remote was checked; it does not mean live Maven publication or target-project knowledge.
- Help ran successfully with 1,214 UTF-8 stdout bytes, zero stderr bytes, exit 0. It explained `--version unknown`, byte bounds, flags, and explicit sync. Its output is saved as `/tmp/compose-skill-consumer/launcher-help.stdout.txt`.

All CLI outputs were captured as raw bytes by a small subprocess recorder in `/tmp/compose-skill-consumer/run.py`. The tables below count actual CLI stdout only, including JSON and its newline; recorder summaries are excluded. Every listed command exited 0 with zero stderr bytes. Raw stdout, stderr, argv, cwd and counts are retained under each task directory; the mechanical consistency check is `/tmp/compose-skill-consumer/verification.json`.

## Task A: implementation with supplied versions

Request (English translation of the original Korean): “The Android app uses Material3 1.3.2 and Compose UI 1.7.8. Suggest evidence-based DropdownMenu code that closes when tapped outside.”

Version context was taken from the user: Material3 1.3.2 and UI 1.7.8, Android. It was not inferred from the demo config and was not independently resolved by Gradle. No module, build variant or imports from the unavailable project were invented. The Material3 search/reads carried the independently supplied UI requirement; the linked UI read used UI 1.7.8 plus the Material3 requirement. All returned version statuses were `match` for this supplied context.

### Proposed answer produced from the evidence

English translation of the original consumer answer: Let the caller own `expanded` and set it to `false` in `onDismissRequest` to close the menu on an outside tap. Close it separately in the item’s `onClick` when an item is selected.

The original Kotlin sample is preserved below, including its UI strings: `메뉴` means “Menu” and `수정` means “Edit”. These are original output data, not newly executed code.

```kotlin
import androidx.compose.foundation.layout.Box
import androidx.compose.material3.Button
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue

@Composable
fun ActionsMenu(onEdit: () -> Unit) {
    var expanded by remember { mutableStateOf(false) }

    Box {
        Button(onClick = { expanded = true }) {
            Text("메뉴")
        }
        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false }
        ) {
            DropdownMenuItem(
                text = { Text("수정") },
                onClick = {
                    expanded = false
                    onEdit()
                }
            )
        }
    }
}
```

Evidence: API [A1] gives outside taps and back presses as examples of dismissal requests and accepts `expanded` as a parameter. Official sample [A2] also uses `remember { mutableStateOf(false) }` and `onDismissRequest = { expanded = false }`. In [A3], `dismissOnClickOutside` invokes the callback on an outside tap and defaults to `true`. Like the official sample, this code retains the menu’s default properties. A callback alone does not establish an automatic state change or a click on the underlying button.

The supplied versions match the evidence, but the actual project’s Gradle resolution, compilation, and device behavior were not verified. After applying the code, open the menu and check that an outside tap closes it; also check item selection and back presses. This task did not read the touch-routing implementation, so it makes no claim about whether the same tap reaches the underlying button.

### Retrieval ledger

Sync: `fresh`; checkedAt `2026-11-12T08:58:41.330Z`; publishedAt `2026-11-12T08:57:17Z`. Pinned SHA: `1750b787111396abbc5499b97c0dbc10a9c50d8b`.

| CLI call / selected ID | stdout bytes | Truncated | Version status |
| --- | ---: | --- | --- |
| `01-sync` | 149 | n/a | n/a |
| `02-search` | 3072 | true | match, match, match |
| `03-api` | 2868 | false | match |
| `04-sample` | 2703 | false | match |
| `05-properties` | 2666 | false | match |

Search/read total: **11,309 bytes** / 12,288. Sync + search/read stdout total: **11,458 bytes**. Exactly three section reads. Before the search and each read, 3,072 bytes were reserved, so the maximum four-call retrieval budget was exactly 12,288. Search snippets were explicitly truncated; every selected section read was complete (`truncated: false`). No unseen text or continuation was cited.

Actual commands (all from `/tmp/compose-skill-consumer`):

```sh
node /workspace/compose-knowledge/.cache/installed-skills/compose-reference-context/scripts/compose-knowledge.mjs sync --remote /workspace/compose-knowledge/.cache/demo/run-1FMvdr/corpus --ref corpus --cache /tmp/compose-skill-consumer/cache --json
node /workspace/compose-knowledge/.cache/installed-skills/compose-reference-context/scripts/compose-knowledge.mjs search --cache /tmp/compose-skill-consumer/cache --snapshot 1750b787111396abbc5499b97c0dbc10a9c50d8b --platform android --artifact androidx.compose.material3:material3 --version 1.3.2 --symbol androidx.compose.material3.DropdownMenu --require androidx.compose.ui:ui=1.7.8 --limit 3 --json
node /workspace/compose-knowledge/.cache/installed-skills/compose-reference-context/scripts/compose-knowledge.mjs read --cache /tmp/compose-skill-consumer/cache --snapshot 1750b787111396abbc5499b97c0dbc10a9c50d8b --platform android --artifact androidx.compose.material3:material3 --version 1.3.2 --symbol androidx.compose.material3.DropdownMenu --require androidx.compose.ui:ui=1.7.8 --id menu-api --json
node /workspace/compose-knowledge/.cache/installed-skills/compose-reference-context/scripts/compose-knowledge.mjs read --cache /tmp/compose-skill-consumer/cache --snapshot 1750b787111396abbc5499b97c0dbc10a9c50d8b --platform android --artifact androidx.compose.material3:material3 --version 1.3.2 --symbol androidx.compose.material3.DropdownMenu --require androidx.compose.ui:ui=1.7.8 --id menu-state-sample --json
node /workspace/compose-knowledge/.cache/installed-skills/compose-reference-context/scripts/compose-knowledge.mjs read --cache /tmp/compose-skill-consumer/cache --snapshot 1750b787111396abbc5499b97c0dbc10a9c50d8b --platform android --artifact androidx.compose.ui:ui --version 1.7.8 --symbol androidx.compose.ui.window.PopupProperties --require androidx.compose.material3:material3=1.3.2 --id popup-properties --json
```

The Material3 API and sample were direct hits. `popup-properties` was followed one hop from the directly returned `menu-android-implementation` hit. No touch-routing conclusion was made for Task A.

## Task B: PR review with unavailable project versions

Request (English translation of the original Korean): “A PR adds PopupProperties(dismissOnClickOutside=true) and claims that the underlying button now receives the same click. Review this claim. The project versions cannot currently be checked.”

This task synced separately and supplied `--version unknown` for Material3 and UI. No unresolved dependency was put into `--require`, and no version from Task A or the demo config was substituted for a project version. Every hit/read returned `unknown`. The retrieved example source versions remain visible in the source provenance; they are not asserted to be the PR's versions. Query selection began independently from the DropdownMenu FQN to inspect its default forwarding/focusability, then followed only one-hop related IDs for properties and routing.

### Review produced from the evidence

English translation of the original consumer review:

The review target is the PR’s addition of `PopupProperties(dismissOnClickOutside = true)`. The actual filename, line number, and full call site were not supplied.

**This change alone does not establish that the underlying button now receives the same click.** The property contract in [B2] invokes `onDismissRequest` on an outside click. The code that closes the state and execution of the underlying button’s `onClick` must be checked separately.

The UI 1.7.8 implementation in [B3] explains that the upper layer decides whether to forward touches to another window: focusable windows consume them, while non-focusable windows forward them. This source comment is not device validation that a complete gesture reached a particular Compose button and invoked `onClick`. Therefore, `dismissOnClickOutside` alone cannot guarantee click forwarding.

If the PR newly passes `properties` to `DropdownMenu`, also check for a focusability change. In example [B1], Android DropdownMenu defaults to `PopupProperties(focusable = true)`, whereas the general `PopupProperties(dismissOnClickOutside = true)` constructor in [B2] defaults to `focusable = false`. This replacement can therefore change focusability and back handling. If the only intent is outside-tap dismissal, consider retaining the default properties or explicitly setting the focusability required by the actual version. `dismissOnClickOutside = true` is already the default in this example source. The DropdownMenu-default comparison does not apply if the PR changes a general `Popup`.

Project versions are **unknown**, so the 1.3.2/1.7.8 evidence cannot be assumed to apply unchanged to the actual PR. Check the real call sites and state updates before and after the change, then resolve Material3 and Compose UI separately with Gradle `dependencyInsight` for the relevant module/variant. On the same device/version, open the menu and tap the background button’s coordinates once; record dismissal callback counts, `expanded` changes, and background `onClick` counts and order. Also compare focusability settings and back behavior before and after the change. The current conclusion is **a claim requiring a stronger explanation and validation**, not a finding that this project always forwards or always blocks the tap.

### Retrieval ledger

Sync: `fresh`; checkedAt `2026-11-12T08:59:16.174Z`; publishedAt `2026-11-12T08:57:17Z`. Pinned SHA: `1750b787111396abbc5499b97c0dbc10a9c50d8b`.

| CLI call / selected ID | stdout bytes | Truncated | Version status |
| --- | ---: | --- | --- |
| `01-sync` | 149 | n/a | n/a |
| `02-search` | 3072 | true | unknown, unknown, unknown |
| `03-menu-implementation` | 2639 | false | unknown |
| `04-properties` | 2668 | false | unknown |
| `05-touch-routing` | 2503 | false | unknown |

Search/read total: **10,882 bytes** / 12,288. Sync + search/read stdout total: **11,031 bytes**. Exactly three section reads. Before the search and each read, 3,072 bytes were reserved, so the maximum four-call retrieval budget was exactly 12,288. Search snippets were explicitly truncated; every selected section read was complete (`truncated: false`). No unseen text or continuation was cited.

Actual commands (all from `/tmp/compose-skill-consumer`):

```sh
node /workspace/compose-knowledge/.cache/installed-skills/compose-reference-context/scripts/compose-knowledge.mjs sync --remote /workspace/compose-knowledge/.cache/demo/run-1FMvdr/corpus --ref corpus --cache /tmp/compose-skill-consumer/cache --json
node /workspace/compose-knowledge/.cache/installed-skills/compose-reference-context/scripts/compose-knowledge.mjs search --cache /tmp/compose-skill-consumer/cache --snapshot 1750b787111396abbc5499b97c0dbc10a9c50d8b --platform android --artifact androidx.compose.material3:material3 --version unknown --symbol androidx.compose.material3.DropdownMenu --limit 3 --json
node /workspace/compose-knowledge/.cache/installed-skills/compose-reference-context/scripts/compose-knowledge.mjs read --cache /tmp/compose-skill-consumer/cache --snapshot 1750b787111396abbc5499b97c0dbc10a9c50d8b --platform android --artifact androidx.compose.material3:material3 --version unknown --symbol androidx.compose.material3.DropdownMenu --id menu-android-implementation --json
node /workspace/compose-knowledge/.cache/installed-skills/compose-reference-context/scripts/compose-knowledge.mjs read --cache /tmp/compose-skill-consumer/cache --snapshot 1750b787111396abbc5499b97c0dbc10a9c50d8b --platform android --artifact androidx.compose.ui:ui --version unknown --symbol androidx.compose.ui.window.PopupProperties --id popup-properties --json
node /workspace/compose-knowledge/.cache/installed-skills/compose-reference-context/scripts/compose-knowledge.mjs read --cache /tmp/compose-skill-consumer/cache --snapshot 1750b787111396abbc5499b97c0dbc10a9c50d8b --platform android --artifact androidx.compose.ui:ui --version unknown --symbol androidx.compose.ui.window.PopupProperties --id popup-touch-routing --json
```

`menu-android-implementation` was a direct hit. `popup-properties` and `popup-touch-routing` were each one hop from that direct hit, rather than a chain through a second related section. No test section was read or claimed executed.

## Source citations and provenance

The citations below refer only to complete section reads. Source paths and line ranges are archive-relative provenance returned by the CLI. They are not local project files. Revision hashes identify the retrieved artifact data; they do not independently certify the target project's dependencies.

- **[A1] `menu-api`**: [material3-1.3.2/commonMain/androidx/compose/material3/Menu.kt:78-138](https://dl.google.com/dl/android/maven2/androidx/compose/material3/material3-android/1.3.2/material3-android-1.3.2-sources.jar). Revision `androidx.compose.material3:material3-android:1.3.2@sha256:e58d105a4fcf1f65a6b2838ca8a6fe40b5784b5dba9ddcf27aabcdfc92b3e4e2`; section/source digest `3137588042e651cdc79ca35b5a0bebb74e976529355e33cf577743ed2766f9c7`.
- **[A2] `menu-state-sample`**: [material3-1.3.2/androidx/compose/material3/samples/MenuSamples.kt:46-76](https://dl.google.com/dl/android/maven2/androidx/compose/material3/material3-android/1.3.2/material3-android-1.3.2-samples-sources.jar). Revision `androidx.compose.material3:material3-android:1.3.2@sha256:3329e1a97328bbeda1e9c4f8305037ef6c13ab227af31b8ea65f757c2e791162`; section/source digest `74870fea31843f839e1164b973a7a92219a38cc82089d5903c763f18bef37cfc`.
- **[A3 / B2] `popup-properties`**: [ui-1.7.8/commonMain/androidx/compose/ui/window/Popup.kt:27-54](https://dl.google.com/dl/android/maven2/androidx/compose/ui/ui-android/1.7.8/ui-android-1.7.8-sources.jar). Revision `androidx.compose.ui:ui-android:1.7.8@sha256:0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc`; section/source digest `a8b4ea1dd0ede4a28f053173aa7f96e45c6ce8c9c90c34d0288167d73e4984a3`.
- **[B1] `menu-android-implementation`**: [material3-1.3.2/androidMain/androidx/compose/material3/AndroidMenu.android.kt:42-194](https://dl.google.com/dl/android/maven2/androidx/compose/material3/material3-android/1.3.2/material3-android-1.3.2-sources.jar). Revision `androidx.compose.material3:material3-android:1.3.2@sha256:e58d105a4fcf1f65a6b2838ca8a6fe40b5784b5dba9ddcf27aabcdfc92b3e4e2`; section/source digest `cc4ee39d16b0ba6b54269e192bd6c4691c70f6e9305e5fd73907237d82999573`.
- **[B3] `popup-touch-routing`**: [ui-1.7.8/androidMain/androidx/compose/ui/window/AndroidPopup.android.kt:799-817](https://dl.google.com/dl/android/maven2/androidx/compose/ui/ui-android/1.7.8/ui-android-1.7.8-sources.jar). Revision `androidx.compose.ui:ui-android:1.7.8@sha256:0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc`; section/source digest `10a685758ed53a23805c2e52d7af4f69d2e27bb5ded5292548b8b570f68872fc`.

## Consistency and usability findings

Both task syncs returned the same corpus SHA `1750b787111396abbc5499b97c0dbc10a9c50d8b`. Every subsequent search/read supplied that exact SHA and returned it unchanged: eight retrieval responses checked mechanically. All ten task CLI invocations exited 0 with zero stderr bytes. The repeated `popup-properties` source metadata, artifact revision and source digest were identical across tasks; its version status correctly changed from `match` to `unknown` when the request context changed. The three-read maximum and retrieval byte limit held independently for each task.

Observed strengths:

- The skill was discoverable from its installed absolute path. The launcher help worked from outside the checkout on Node 24; actual sync/search/read also worked there. This exercises portability of the installed launch path, although the local demonstration remote still resides within the checkout.
- Artifact + FQN search supplied useful direct hits and one-hop links. One search and three complete reads per task were sufficient for the implementation and the cautious review.
- Provenance included concrete source archive URL, archive-relative path, lines, artifact revision and digest. Unknown project versions remained visible instead of becoming implicit matches.
- The consumer's review distinguished dismissal, caller state and touch routing: it rejected the claim based solely on a callback property and identified potential focusability changes. The no-skill baseline also produced a cautious answer, so this does not establish an improvement caused by the skill.

Observed friction and limits:

- Budget enforcement by the consumer required manual planning plus a temporary byte recorder/ledger. Help describes per-call bounds, but there is no automatic task-wide ledger exposed in the help. This observation does not claim such a feature is absent from undiscovered internals.
- The first three-hit search consumed the full 3,072-byte default and was truncated in both tasks. It still provided usable IDs and links, but source bodies required reads. Reserving three more full calls leaves no worst-case room for another narrowing search.
- `--version unknown` was explained by launcher help rather than shown explicitly in the skill's example. It was easy to discover, and all returned statuses were appropriately unknown.
- “Read a selected id, using the SAME artifact/version/platform context” needs interpretation for a linked section belonging to a different artifact. This consumer retained Android and the known dependency set, changed the primary artifact/version to the selected section's artifact, and carried the other resolved version with `--require`. A short cross-artifact read example in SKILL.md would reduce ambiguity.
- Source URLs point to source JARs rather than a browser line anchor. Paths/line ranges support reproducibility but require an archive/source viewer for human inspection. No upstream archive was fetched separately in this consumer test.
- `fresh` could be mistaken for live upstream currency without the skill/config warning. Here it is explicitly limited to the prepared local remote. No stale-cache or unavailable-remote path was exercised.
- No real project version detection, Gradle build, Android compilation, emulator/device test, background-button execution test, or standalone nested Codex process was performed. The proposed code and review are source-based consumer outputs, not runtime validation.

Raw evidence is retained at `/tmp/compose-skill-consumer/task-a/`, `/tmp/compose-skill-consumer/task-b/`, and `/tmp/compose-skill-consumer/verification.json`.
