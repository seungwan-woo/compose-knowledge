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

Request: “Android 앱에서 Material3 1.3.2와 Compose UI1.7.8을 사용한다. 바깥을 누르면 닫히는 DropdownMenu 코드를 근거와 함께 제안해줘.”

Version context was taken from the user: Material3 1.3.2 and UI 1.7.8, Android. It was not inferred from the demo config and was not independently resolved by Gradle. No module, build variant or imports from the unavailable project were invented. The Material3 search/reads carried the independently supplied UI requirement; the linked UI read used UI 1.7.8 plus the Material3 requirement. All returned version statuses were `match` for this supplied context.

### Proposed answer produced from the evidence

다음처럼 `expanded`를 호출자가 소유하고, `onDismissRequest`에서 `false`로 바꾸면 바깥 탭으로 메뉴를 닫을 수 있습니다. 메뉴 항목을 눌렀을 때 닫는 처리는 해당 항목의 `onClick`에 별도로 둡니다.

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

근거: [A1]의 API는 바깥 탭과 뒤로가기를 닫기 요청의 예로 들고, `expanded`를 매개변수로 받습니다. [A2]의 공식 샘플도 `remember { mutableStateOf(false) }`와 `onDismissRequest = { expanded = false }`를 사용합니다. [A3]에서 `dismissOnClickOutside`는 바깥 탭 시 콜백을 호출하는 속성이고 기본값은 `true`입니다. 위 코드는 공식 샘플처럼 메뉴 기본 properties를 그대로 사용합니다. 콜백 호출만으로 상태가 자동으로 변경되거나 뒤쪽 버튼의 클릭이 실행된다고 해석하지 않습니다.

제시한 버전과 자료의 버전은 일치하지만 실제 프로젝트의 Gradle 해석, 컴파일, 기기 동작은 확인하지 못했습니다. 적용 후 메뉴를 열고 메뉴 바깥을 탭해 닫히는지 확인하고, 항목 선택과 뒤로가기도 함께 확인해야 합니다. 이 작업에서는 터치 전달 구현을 읽지 않았으므로 뒤쪽 버튼에 같은 탭이 전달되는지에 대한 결론은 내리지 않습니다.

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

Request: “PR에서 PopupProperties(dismissOnClickOutside=true)를 추가하며 이제 뒤쪽 버튼이 동일한 클릭을 받는다고 주장한다. 이 주장을 리뷰해줘. 프로젝트 버전은 현재 확인할 수 없다.”

This task synced separately and supplied `--version unknown` for Material3 and UI. No unresolved dependency was put into `--require`, and no version from Task A or the demo config was substituted for a project version. Every hit/read returned `unknown`. The retrieved example source versions remain visible in the source provenance; they are not asserted to be the PR's versions. Query selection began independently from the DropdownMenu FQN to inspect its default forwarding/focusability, then followed only one-hop related IDs for properties and routing.

### Review produced from the evidence

리뷰 대상 위치는 PR의 `PopupProperties(dismissOnClickOutside = true)` 추가부입니다. 실제 파일명과 행 번호, 전체 호출부는 제공되지 않았습니다.

**“이제 뒤쪽 버튼도 같은 클릭을 받는다”는 주장은 이 변경만으로 입증되지 않습니다.** [B2]의 속성 계약은 메뉴 바깥 클릭 시 `onDismissRequest`를 호출한다는 뜻입니다. 상태를 닫는 코드와 뒤쪽 버튼의 `onClick` 실행은 별도로 확인해야 합니다.

자료의 UI 1.7.8 구현 [B3]은 터치를 다른 윈도우로 전달할지 상위 계층이 결정하며, focusable일 때 소비하고 non-focusable일 때 다른 윈도우로 전달한다고 설명합니다. 이 소스 주석은 특정 Compose 버튼에 완전한 제스처가 도착해 `onClick`이 실행되었다는 기기 검증 결과가 아닙니다. 따라서 `dismissOnClickOutside` 값만 보고 클릭 전달을 보장해서는 안 됩니다.

추가로 `DropdownMenu`에 `properties`를 새로 넘기는 PR이라면 focusability 변경을 확인해야 합니다. 예시 자료 [B1]의 Android DropdownMenu 기본값은 `PopupProperties(focusable = true)`인데, [B2]의 일반 `PopupProperties(dismissOnClickOutside = true)` 생성자는 `focusable = false`를 기본으로 사용합니다. 따라서 이 치환은 focusability와 뒤로가기 처리를 바꿀 수 있습니다. 바깥 탭으로 닫기만 의도했다면 기본 properties를 유지하거나 실제 버전에서 필요한 focusability를 명시하는 방향을 검토해야 합니다. `dismissOnClickOutside = true` 자체는 이 예시 소스에서도 이미 기본값입니다. PR이 일반 `Popup`을 변경하는 것이라면 DropdownMenu 기본값 비교는 적용되지 않습니다.

프로젝트 버전은 **unknown**이므로 위 1.3.2/1.7.8 자료가 실제 PR에 그대로 적용된다고 확정할 수 없습니다. 변경 전후의 실제 호출부와 상태 갱신 코드를 확인하고, 해당 모듈/variant에서 Material3와 Compose UI를 각각 Gradle `dependencyInsight`로 해석해야 합니다. 같은 기기/버전에서 메뉴를 연 뒤 배경 버튼 좌표를 한 번 탭하여 닫기 콜백 횟수, `expanded` 변화, 배경 `onClick` 횟수와 순서를 기록하십시오. focusable 설정과 뒤로가기 동작도 변경 전후 비교해야 합니다. 현재 결론은 **설명과 검증 보강이 필요한 주장**이며, 프로젝트에서 반드시 전달되거나 반드시 차단된다는 판정은 아닙니다.

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
- The skill's separation of dismissal, caller state and touch routing materially changed the review: the claim was not accepted based solely on a callback property, and potential focusability changes were identified.

Observed friction and limits:

- Budget enforcement by the consumer required manual planning plus a temporary byte recorder/ledger. Help describes per-call bounds, but there is no automatic task-wide ledger exposed in the help. This observation does not claim such a feature is absent from undiscovered internals.
- The first three-hit search consumed the full 3,072-byte default and was truncated in both tasks. It still provided usable IDs and links, but source bodies required reads. Reserving three more full calls leaves no worst-case room for another narrowing search.
- `--version unknown` was explained by launcher help rather than shown explicitly in the skill's example. It was easy to discover, and all returned statuses were appropriately unknown.
- “Read a selected id, using the SAME artifact/version/platform context” needs interpretation for a linked section belonging to a different artifact. This consumer retained Android and the known dependency set, changed the primary artifact/version to the selected section's artifact, and carried the other resolved version with `--require`. A short cross-artifact read example in SKILL.md would reduce ambiguity.
- Source URLs point to source JARs rather than a browser line anchor. Paths/line ranges support reproducibility but require an archive/source viewer for human inspection. No upstream archive was fetched separately in this consumer test.
- `fresh` could be mistaken for live upstream currency without the skill/config warning. Here it is explicitly limited to the prepared local remote. No stale-cache or unavailable-remote path was exercised.
- No real project version detection, Gradle build, Android compilation, emulator/device test, background-button execution test, or standalone nested Codex process was performed. The proposed code and review are source-based consumer outputs, not runtime validation.

Raw evidence is retained at `/tmp/compose-skill-consumer/task-a/`, `/tmp/compose-skill-consumer/task-b/`, and `/tmp/compose-skill-consumer/verification.json`.
