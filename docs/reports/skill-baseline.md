# Consumer baseline without a Compose reference skill

Status: no-skill scenarios A/B completed. No Compose reference skill, evaluation gold, or design documents were read by this consumer. Discovery was limited to public CLI help, the root-provided cache location/SHA, sync metadata, and CLI-returned source evidence. No README existed at the initial discovery point. A/B were performed sequentially by the same independent agent, so B could reuse concepts learned during A; they were not isolated fresh model sessions.

## Verified levels

- Existing `codex` executable: verified (`codex-cli 0.167.0-alpha.4`).
- Existing authentication metadata: `CODEX_HOME`, its `auth.json`, and inherited HTTP/HTTPS proxy variables are present. Credential values and credential file contents were not printed.
- Authenticated model subprocess: **unverified**. The one authorized smoke failed during local app-server initialization, before JSON output or a model response.
- Independent fresh consumer agent using the product CLI without a Compose skill: **verified** in this delegated baseline agent. This is not a new nested `codex exec` session.
- Product scenarios A/B: **verified for evidence retrieval and reasoned answers**, using seven successful public CLI search/read calls. No Android app compilation, device/emulator execution, or underlying-button callback test was performed.

## Exact smoke

```sh
mkdir -p /tmp/compose-skill-baseline
codex exec --ephemeral --sandbox read-only --skip-git-repo-check --json \
  -C /tmp/compose-skill-baseline \
  -o /tmp/compose-skill-baseline/smoke-last-message.txt \
  'Reply with exactly SMOKE_OK. Do not call tools or read any files.' \
  > /tmp/compose-skill-baseline/smoke.jsonl \
  2> /tmp/compose-skill-baseline/smoke.stderr
```

Exit status: **1**. JSON stdout: **0 bytes**. Stderr: **236 bytes**. Last-message file was not created. Exact safe stderr:

```text
WARNING: proceeding, even though we could not create PATH aliases: Read-only file system (os error 30)
Reading additional input from stdin...
Error: failed to initialize in-process app-server client: Read-only file system (os error 30)
```

The failure does not establish an authentication or remote network problem. It occurred before any remote response was visible. Managed environment status reported current observations, running/connected, and an enforced restricted network policy; that describes environment setup, not authenticated model access.

## Safe diagnosis and supported controls

`codex exec --help` advertises `--ephemeral`, `--sandbox read-only`, `--json`, `--output-last-message`, `--ignore-user-config` (auth still uses the existing `CODEX_HOME`), and command-local `-c key=value` overrides. `--ephemeral` did not avoid all initialization writes in this installed build.

Read-only inspection of the executable's strings finds configuration names `sqlite_home`, `log_dir`, and `CODEX_SQLITE_HOME`, including the message `Skipped logs database: log_dir is configured.` Following the root agent's explicit instruction, a modified second attempt tested command-local state overrides while preserving existing authentication and proxy:

```sh
mkdir -p /tmp/compose-skill-baseline/sqlite /tmp/compose-skill-baseline/logs
codex exec --ephemeral --sandbox read-only --skip-git-repo-check --json \
  -c 'sqlite_home="/tmp/compose-skill-baseline/sqlite"' \
  -c 'log_dir="/tmp/compose-skill-baseline/logs"' \
  -C /tmp/compose-skill-baseline \
  -o /tmp/compose-skill-baseline/smoke-local-state-last-message.txt \
  'Reply with exactly SMOKE_OK. Do not call tools or read any files.' \
  < /dev/null > /tmp/compose-skill-baseline/smoke-local-state.jsonl \
  2> /tmp/compose-skill-baseline/smoke-local-state.stderr
```

Result was identical: exit **1**, JSON stdout **0 bytes**, stderr **236 bytes**, and no last-message file. Exact stderr is the same three lines above, including the stdin message despite `/dev/null`. These controls did not resolve this build's app-server initialization write failure. Nested Codex attempts stopped here. No global configuration, credential, `CODEX_HOME`, sandbox bypass, or hook-trust setting was changed.

No repeated unchanged attempt was made. The existing independent baseline agent will consume the product CLI directly for scenarios A/B. That is an actual fresh consumer agent but does **not** verify a nested `codex exec` harness.

## Product CLI baseline

Public discovery command: `node dist/cli.js --help` (exit 0, captured as `/tmp/compose-skill-baseline/cli-help.txt`, 1214 bytes). Help exposed `search`, `read`, full snapshot selection, repeatable `--require ARTIFACT=VERSION`, `--platform android`, byte budgets, and explicit version `unknown`.

`cat .cache/usability-baseline/sync.json` returned snapshot `eee27d83e7e6a98a65372e84546591aec2f8f736`, status `fresh`, checked `2026-11-12T08:52:57.557Z`, published `2026-11-12T08:52:57Z`. Existing cache was used; the consumer did not sync/build the corpus.

All seven output files parsed as JSON. Every output's `snapshot` exactly equaled that 40-character sync SHA. Artifact source revisions are separate Maven-source SHA256 identifiers or an upstream AndroidX Git revision, as appropriate; these should not be confused with the corpus snapshot SHA.

| Scenario/output file in `/tmp/compose-skill-baseline` | Exit | Bytes | Version status | Truncated |
| --- | ---: | ---: | --- | --- |
| `a-search.json` | 0 | 3072 | match for every hit | true |
| `a-read-state.json` | 0 | 2703 | match | false |
| `a-read-android.json` | 0 | 2637 | match | false |
| `a-read-properties.json` | 0 | 2666 | match | false |
| `b-search.json` | 0 | 3072 | unknown for every hit | true |
| `b-read-tests.json` | 0 | 3072 | unknown | true |
| `b-read-routing.json` | 0 | 2503 | unknown | false |

Machine-readable size/status/SHA verification is retained in `/tmp/compose-skill-baseline/results-summary.json`.

## A: implement outside dismissal

A. Implementation request: Android `DropdownMenu` dismissing on outside tap, Material3 1.3.2 and Compose UI 1.7.8.

Search found `menu-android-implementation`, `menu-api`, and `menu-state-sample`. Reading the sample established caller-owned `expanded` state and `onDismissRequest = { expanded = false }`. Reading Android implementation established forwarding into `Popup` and menu default `PopupProperties(focusable = true)`. Reading the related `popup-properties` established `dismissOnClickOutside=true` by default and that an outside click calls `onDismissRequest`.

The resulting implementation is:

```kotlin
@Composable
fun ExampleMenu(onEdit: () -> Unit) {
    var expanded by remember { mutableStateOf(false) }
    Box {
        Button(onClick = { expanded = true }) { Text("Open menu") }
        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false },
        ) {
            DropdownMenuItem(
                text = { Text("Edit") },
                onClick = {
                    expanded = false
                    onEdit()
                },
            )
        }
    }
}
```

This uses the menu defaults. If customizing `PopupProperties`, preserve `focusable=true` when retaining default menu back-key behavior. Dismissal is a request: updating `expanded` actually closes it.

Evidence obtained from source:

- `menu-state-sample`: Material3 1.3.2 `MenuSamples.kt:46–76`, samples archive revision ending SHA256 `3329e1a97328bbeda1e9c4f8305037ef6c13ab227af31b8ea65f757c2e791162`.
- `menu-android-implementation`: Material3 1.3.2 `AndroidMenu.android.kt:42–194`, source archive SHA256 `e58d105a4fcf1f65a6b2838ca8a6fe40b5784b5dba9ddcf27aabcdfc92b3e4e2`.
- `popup-properties`: UI 1.7.8 `Popup.kt:27–54`, source archive SHA256 `0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc`.

The returned source records include resource URL, revision, file path, line range, content SHA256, and Apache-2.0 license. This implementation was inferred from source evidence, not compiled or run on Android.

## B: review same-click delivery claim

B. Review request: assess “setting `dismissOnClickOutside=true` ensures the underlying button receives the same click,” with unresolvable versions.

I passed both dependency versions explicitly as `unknown`. The query ranked `popup-dismiss-tests` first, followed by `popup-properties` and `menu-api`. The tests body explicitly scopes its assertion to popup visibility; it does not assert underlying click callbacks. It describes an upstream test source that was retrieved, not executed, and is not mapped to a released dependency version. Its read was truncated, but the relevant scope statement and first dismissal assertion were visible.

The related `popup-touch-routing` read was complete. It contains Android `onTouchEvent` handling and the comment that an upper layer determines propagation: focusable consumes, non-focusable propagates to other windows. It separately invokes `onDismissRequest` on outside events. This evidence supports **rejecting the guarantee**. Enabling outside dismissal does not itself establish delivery of a complete gesture or a particular underlying Compose button callback. Actual project versions and device behavior remain unresolved.

Touch-routing source: UI 1.7.8 `AndroidPopup.android.kt:799–817`, source archive SHA256 `0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc`; returned `versionStatus` remains `unknown` because the consumer did not know project versions. The test source is pinned to upstream Git revision `07bb66ae1eada12632eb10c75246d7b2c5ba6ede`, `PopupTest.kt:245–365`, with released-version applicability unknown.

## Usability findings before skill authoring

1. **Discovery worked without the skill.** Help was sufficient to issue version-qualified symbol search and follow returned IDs. Documents already embed useful scope limits, which prevented several overclaims.
2. **A workflow still requires judgment.** The help does not teach when to search a symbol, when to read, or when to follow `relatedIds` from menu API into generic properties and Android implementation. A skill should turn this into a small evidence-gathering path for the current task.
3. **Version handling is easy to miss.** `unknown` is documented in one help sentence; no version discovery workflow is provided. A skill should inspect the actual project's versions first, then explicitly retain unknown when unresolved. A source's release version is not proof that the project uses it.
4. **Search truncation hides potential evidence.** Both searches filled exactly 3072 bytes and set `truncated=true`. Related IDs led to useful evidence anyway. Search could be narrowed; a read at the maximum budget has no cursor/chunk mechanism advertised by help. The test read was also truncated. A skill should notice this rather than present partial evidence as complete.
5. **Natural-language ranking was mixed.** B's query ranked visibility tests first, even though routing was decisive. Following related IDs was necessary. The skill should distinguish tests of visibility from tests of underlying callbacks, and documentation/defaults from Android implementation.
6. **Three different identities need explanation.** Corpus snapshot Git SHA, upstream Git revision, and source archive/content SHA256 are all present. The skill should cite the returned source coordinates while keeping the corpus snapshot stable across search/read.
7. **Freshness and verification are different.** Sync said `fresh`; that does not mean dependencies match or that tests ran. A skill should report match/different/unknown and source retrieval versus execution separately.
8. **No `different` case was exercised here.** A's requested versions matched; B's were explicitly unknown. This baseline does not validate conflicting known-version behavior or the usefulness of `--include-different`.

These findings were reported to the root agent before Compose skill authoring.

## Exact product commands

All commands ran from `/workspace/compose-knowledge`, in this order. Default byte limits were retained.

```sh
node dist/cli.js --help
cat .cache/usability-baseline/sync.json
node dist/cli.js search --cache .cache/usability-baseline/cache --snapshot eee27d83e7e6a98a65372e84546591aec2f8f736 --symbol DropdownMenu --require androidx.compose.material3:material3=1.3.2 --require androidx.compose.ui:ui=1.7.8 --platform android --json > /tmp/compose-skill-baseline/a-search.json
node dist/cli.js read --cache .cache/usability-baseline/cache --snapshot eee27d83e7e6a98a65372e84546591aec2f8f736 --id menu-state-sample --require androidx.compose.material3:material3=1.3.2 --require androidx.compose.ui:ui=1.7.8 --platform android --json > /tmp/compose-skill-baseline/a-read-state.json
node dist/cli.js read --cache .cache/usability-baseline/cache --snapshot eee27d83e7e6a98a65372e84546591aec2f8f736 --id menu-android-implementation --require androidx.compose.material3:material3=1.3.2 --require androidx.compose.ui:ui=1.7.8 --platform android --json > /tmp/compose-skill-baseline/a-read-android.json
node dist/cli.js read --cache .cache/usability-baseline/cache --snapshot eee27d83e7e6a98a65372e84546591aec2f8f736 --id popup-properties --require androidx.compose.material3:material3=1.3.2 --require androidx.compose.ui:ui=1.7.8 --platform android --json > /tmp/compose-skill-baseline/a-read-properties.json
node dist/cli.js search --cache .cache/usability-baseline/cache --snapshot eee27d83e7e6a98a65372e84546591aec2f8f736 --query 'dismissOnClickOutside underlying button same click' --require androidx.compose.material3:material3=unknown --require androidx.compose.ui:ui=unknown --platform android --json > /tmp/compose-skill-baseline/b-search.json
node dist/cli.js read --cache .cache/usability-baseline/cache --snapshot eee27d83e7e6a98a65372e84546591aec2f8f736 --id popup-dismiss-tests --require androidx.compose.material3:material3=unknown --require androidx.compose.ui:ui=unknown --platform android --json > /tmp/compose-skill-baseline/b-read-tests.json
node dist/cli.js read --cache .cache/usability-baseline/cache --snapshot eee27d83e7e6a98a65372e84546591aec2f8f736 --id popup-touch-routing --require androidx.compose.material3:material3=unknown --require androidx.compose.ui:ui=unknown --platform android --json > /tmp/compose-skill-baseline/b-read-routing.json
node dist/cli.js --help > /tmp/compose-skill-baseline/cli-help.txt
```
