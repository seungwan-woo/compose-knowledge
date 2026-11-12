# Independent daily refresh acceptance

Date: 2026-11-12 UTC. Test role: independent integration tester and actual installed-skill consumer. The two workspace marker files were read directly: `daily-refresh-20261112` and `crawler-current`. Branch was `codex/daily-knowledge-refresh`, at merged implementation commit `8342c8b2f8c413169826768b0f553b70bb7f5d62` before daily-refresh edits. No other worker's source or test files were edited by this role.

## Installed skill exercised outside the checkout

Read `/tmp/compose-merged-skill-dvd57ix3/installed/compose-reference-context/SKILL.md`, then executed that installed bundle's launcher with Node 24 from `/tmp` and its independent temporary directory. This tests the freshly installed exact merged implementation bundle, rather than invoking the working checkout CLI.

The remote was read from `.cache/demo/latest.json`, not assumed from another agent's output. A single actual sync used the public demonstration corpus's local Git remote `/workspace/compose-knowledge/.cache/demo/run-cVm5Ii/corpus` and a fresh private consumer cache. Result:

- Snapshot: `1a794ce75c68dca8f8603e554d83d3ad6d152110`.
- Status: `fresh`.
- `checkedAt`: `2026-11-12T10:14:21.443Z`.
- `publishedAt`: `2026-11-12T09:01:17Z`.

Actual commands, with the shell variables below expanding to the recorded absolute values:

```sh
CK_SKILL_DIR=/tmp/compose-merged-skill-dvd57ix3/installed/compose-reference-context
CK_REMOTE=/workspace/compose-knowledge/.cache/demo/run-cVm5Ii/corpus
CK_CACHE=/tmp/compose-daily-consumer-SW0siz/cache
CK_SHA=1a794ce75c68dca8f8603e554d83d3ad6d152110
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" --help
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" sync --remote "$CK_REMOTE" --ref corpus --cache "$CK_CACHE" --json
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" search --cache "$CK_CACHE" --snapshot "$CK_SHA" --platform android --json --artifact androidx.compose.material3:material3 --version unknown --symbol androidx.compose.material3.DropdownMenu --limit 3
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" read --cache "$CK_CACHE" --snapshot "$CK_SHA" --platform android --artifact androidx.compose.material3:material3 --version unknown --id menu-api --json
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" read --cache "$CK_CACHE" --snapshot "$CK_SHA" --platform android --artifact androidx.compose.material3:material3 --version unknown --id menu-state-sample --json
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" read --cache "$CK_CACHE" --snapshot "$CK_SHA" --platform android --artifact androidx.compose.ui:ui --version unknown --id popup-touch-routing --json
```

Exact UTF-8 CLI stdout sizes, including JSON and trailing newline:

| Operation | Bytes | Truncated |
| --- | ---: | --- |
| sync (outside retrieval budget) | 149 | n/a |
| search DropdownMenu | 3072 | yes |
| read menu-api | 2870 | no |
| read menu-state-sample | 2705 | no |
| read popup-touch-routing | 2503 | no |
| Search/read total | 11150 | |

Three section reads, within 12288 bytes. Before each read the 3072-byte maximum was reserved against the remaining budget. `popup-touch-routing` was one related-ID hop from the direct `menu-android-implementation` search hit. No hidden search results or truncated text were cited. Full independent command arguments and exact stdout were saved in `/tmp/compose-daily-consumer-SW0siz/ledger.json`; this temporary path is diagnostic evidence, not a repository fixture dependency.

## Sourced implementation and review answer

The affected target module, imports, variant and resolved dependency versions were not supplied. Material 3 and Compose UI therefore both remain **unknown**. Every search/read passed `--version unknown`; every returned section's `versionStatus` was `unknown`. Corpus example versions 1.3.2 and 1.7.8 were never adopted as target versions.

For implementation, bind the menu to caller state and handle `onDismissRequest` by updating that state, such as `onDismissRequest = { expanded = false }`. The API states that the callback is invoked when the menu should close, including outside taps or back, and the official sample demonstrates caller-owned `expanded` state. A callback alone does not perform an arbitrary caller state update.

For review, a supplied call site that ignores `onDismissRequest` while keeping `expanded` true has a concrete state-management concern. No actual application file was supplied, so this report cannot assign that concern to a real code location. The required review evidence would be the menu call site's `expanded` owner and callback, together with its resolved artifact versions.

Background touch delivery requires a separate conclusion. The retrieved UI implementation comment says an upper window layer determines propagation: focusable consumes, non-focusable propagates to other windows. The direct Android menu search hit also shows the example's default `PopupProperties(focusable = true)`. This source guidance does not establish that a particular background button receives a complete gesture or invokes `onClick`. Setting `dismissOnClickOutside = false` alone does not establish delivery. Resolve the project's Material 3 and Compose UI artifacts independently, then reproduce with a menu over a background button and counters for dismissal and button clicks, on the actual Android configuration and popup properties.

Sources actually read:

| Evidence | Source URL | Path / lines | Revision |
| --- | --- | --- | --- |
| API | https://dl.google.com/dl/android/maven2/androidx/compose/material3/material3-android/1.3.2/material3-android-1.3.2-sources.jar | `material3-1.3.2/commonMain/androidx/compose/material3/Menu.kt:78–138` | `androidx.compose.material3:material3-android:1.3.2@sha256:e58d105a4fcf1f65a6b2838ca8a6fe40b5784b5dba9ddcf27aabcdfc92b3e4e2` |
| Caller state sample | https://dl.google.com/dl/android/maven2/androidx/compose/material3/material3-android/1.3.2/material3-android-1.3.2-samples-sources.jar | `material3-1.3.2/androidx/compose/material3/samples/MenuSamples.kt:46–76` | `androidx.compose.material3:material3-android:1.3.2@sha256:3329e1a97328bbeda1e9c4f8305037ef6c13ab227af31b8ea65f757c2e791162` |
| Routing implementation | https://dl.google.com/dl/android/maven2/androidx/compose/ui/ui-android/1.7.8/ui-android-1.7.8-sources.jar | `ui-1.7.8/androidMain/androidx/compose/ui/window/AndroidPopup.android.kt:799–817` | `androidx.compose.ui:ui-android:1.7.8@sha256:0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc` |

These are retrieved fixture source excerpts, not live-corpus acquisition, resolved target-project evidence, an Android runtime execution, or an upstream test executed in this project.

## Daily acquisition → Git publication → CLI consumption

`tests/daily-acceptance.test.ts` was written before its first targeted run. It imports production `crawlSources`, `buildSnapshot` and `publishSnapshot`, fakes only upstream HTTP responses, publishes to real temporary bare Git repositories, and runs the built executable from a directory outside the checkout. Each publication declares its expected collection-base SHA (initially `null`). The built CLI itself performs sync/search/read.

The lifecycle test verifies:

- Released baseline documents remain intact while new schema-v1 evidence is appended.
- Web revisions have the explicit `web:...:content@sha256:` form; excerpt hashes, source URLs, licenses and Git path/line/SHA attribution survive publication and reading.
- Acquired current-source evidence stays `unknown` even when the consumer requests UI 1.7.8, while retained released `popup-properties` still reports `match` for the same actual version context.
- Navigation, scripts and the explicitly monitor-only Material shell are excluded from ingested data; the manifest binds data files rather than workflow or JavaScript files.
- An unchanged second acquisition, including an upstream Git head moving without content changes, produces no new corpus commit.
- Changed guidance updates exactly its stable section ID; a removed source section is removed in the next corpus. The next commit is a normal child of the previous corpus commit.
- A CLI read pinned to the first SHA remains unchanged after the next complete snapshot activates; the new SHA returns changed content.

The failure-path lifecycle test verifies that an unavailable required source, an empty application shell in place of a required article, and a corrupt newly staged manifest all prevent replacement of the published snapshot. Its branch still contains one last-good commit, and offline sync plus a pinned CLI read retrieve that last-good evidence.

These are network fixture integration tests. Their web text and tiny Kotlin file are acquisition fixtures, not claims about real Android behavior or a live upstream corpus. Publisher-specific concurrent-writer assertions remain in the publisher worker's dedicated tests rather than being duplicated here.

Validation: `npx vitest run tests/daily-acceptance.test.ts --maxWorkers=1` runs the two integration tests plus their fresh production TypeScript build. Initial run passed 2/2 on 2026-11-12 at 10:16:16 UTC. Final targeted validation after collection-base and retained-release assertions passed 2/2 at 10:16:42 UTC (4.25 seconds total). A parallel full-suite run had started at 10:16:12 while the first test draft was still being edited; its failure was the draft treating Git grep's expected no-match exit code 1 as an error. The assertion was replaced with Git show plus a content-absence check before the first targeted run. This was a test-draft defect, not a production failure or timeout; no timeout increase was made.

Coordinated final full-suite validation: `npm test` began at 10:18:21 UTC and passed **65/65 tests across nine files** in 11.38 seconds. This includes both daily integration tests, the publisher's collection-base/concurrent-writer tests, and the updated distribution test that actually installs version 0.2.0 outside the checkout and exercises installed sync/search/read/offline fallback. `git diff --check` also passed.

## Updated 0.2.0 installed guidance verification

After the new skill text was ready, independently built and installed a retained version 0.2.0 bundle with the repository's actual `scripts/bundle.mjs` and `scripts/install.mjs`, using `/tmp/compose-daily-v02-5WR2p3` as the external directory. Installed path: `/tmp/compose-daily-v02-5WR2p3/skills/compose-reference-context`. Archive checksum verified by the installer: `241865d7ffa7b776cf2a5d0d91e0000c1b03c1762585c1d95cfa73c53091e646`. The installed launcher executed `--help` successfully from that external directory (1214 stdout bytes).

Read the updated skill and checked six key passages in the installed copy. Its default remote is the canonical public GitHub repository, with explicit alternatives allowed and identical remote spelling required to retain cache identity. `checkedAt` means this sync invocation's time, including offline requests; `publishedAt` means the data commit time and does not advance for an unchanged daily crawl. Neither timestamp alone proves the latest upstream crawl succeeded; the latest Daily public corpus refresh Actions run/source report supplies crawl health. Current web/main evidence remains unknown for released-version applicability, monitor-only sources supply no article evidence, and web hash revisions identify captured normalized content rather than Git commits. This is the correct interpretation for installed consumers.

No additional live remote sync was attempted for this guidance check. The single-sync, pinned, byte-budgeted question-answering exercise above remains the explicit local public demonstration corpus, and the full-suite distribution test separately verifies installed 0.2.0 retrieval mechanics with its own fresh fixture/cache.
