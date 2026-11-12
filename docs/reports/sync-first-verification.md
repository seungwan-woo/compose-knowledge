# Independent sync-first consumer verification

Verified 2026-11-12 with Node v24.22.1. This is a reference/workflow test, not a claim that the CLI mechanically enforces skill ordering. The six cases below are independent readings of the updated skill; only the installed-bundle checks afterward were actually executed.

## Baseline and updated wording

The baseline `.cache/storage-review/skill-before.md` starts with **Locate and identify**, explicitly saying `Run ... --help for flags`, followed by module/variant/Gradle identification. **Sync once and pin** comes afterward and says to sync “once for the task.” That order permits help and Gradle inspection before sync and does not explicitly distinguish a new question from an earlier question in the same chat.

The updated skill starts with **1. Sync first, then pin**: “the first workflow action is an online corpus sync, before Gradle inspection, topic lookup, search or read.” It explicitly rejects an earlier question's cache/sync as a substitute, preserves the pin during the same question, and requires explicit offline intent/configuration. It also says cached evidence “does not satisfy a requirement for latest-only evidence.” I evaluated and exercised the updated instructions before reading the baseline, so the baseline did not determine the test sequence.

## Six instruction-level cases

All rows begin after resolving the installed launcher, writable cache and configured/default remote. Counts are sync invocations for the question/continuation represented by the row; returned-result cases include the invocation that produced that result. A and B denote full snapshot SHAs, not branch names.

| Case | First concrete workflow action | Ordered next steps | Permitted freshness claim | Sync count |
| --- | --- | --- | --- | --- |
| 1. New Compose review, unresolved Gradle, valid yesterday cache | Online `sync --remote ... --ref corpus --cache ... --json` | Parse status/SHA/times/error; pin returned SHA if usable; inspect project/Gradle; keep unresolved versions unknown; narrow search/read with that pin | Only `fresh` if this invocation fetched and validated the remote; otherwise disclose cached/unavailable outcome | 1 online |
| 2. New question; earlier question synced ten minutes ago in same chat | A new online sync | Parse and establish this question's pin; identify project context; search/read | Earlier sync does not verify current-question freshness; use this invocation's actual status | 1 additional online |
| 3. Same-question continuation pinned A; remote advanced to B | Continue the required pinned search/read at A; do not sync merely because another call is needed | Keep A for subsequent evidence; an explicit refresh/new question would start a new sync and distinguish old/new evidence | A was checked at its original invocation; do not claim A is the current remote head | 0 additional |
| 4. Online fetch fails, returning cached A, error, checkedAt now | Online sync; immediately after its supplied result, parse and disclose `cached` plus the fetch error | Pin verified A; state remote freshness unverified; use explicitly dated evidence only if suitable; preserve unknown project versions | `cached`; checkedAt now is invocation time, not a successful freshness check or crawl | 1 online attempt; no extra sync prescribed |
| 5. Explicit offline operation with verified A | `sync ... --offline --json` using the same remote spelling | Parse status/SHA/times/error; pin returned A; identify context; bounded search/read | `cached`, including when the offline invocation's checkedAt is now; no online freshness verification | 1 offline |
| 6. User requires latest-only; sync falls back to cached A | Online sync; immediately after the supplied result, disclose cached/failure status | Do not use A as latest-only evidence; continue the user's work with that evidence gap explicit; no automatic retry or different corpus is prescribed | Latest-only requirement remains unmet; never label A fresh | 1 online attempt; no extra sync prescribed |

## Actual installed-bundle check

Installed the already-built archive using the repository installer, without rebuilding or changing repository runtime code. Installation reported version `0.3.1`, bundle SHA256 `f7025e8849be475ebad44a9767161e1cc91de2d137e2016e92561e48b06d0616`. The installed `SKILL.md` was read before its workflow was executed and later compared byte-for-byte equal to the updated repository skill.

Fresh temporary root: `/tmp/compose-sync-verification.aTRxiE`. Fresh consumer: its `consumer/`; installation: its `skills/compose-reference-context/`; cache: its `cache/`. No Android app or Gradle project was present or supplied, so module, imports, variant and resolved artifact versions remain unknown. No Gradle or app/device tests ran.

Actual command order (the abbreviations below expand to those absolute temporary paths; commands ran with the fresh consumer as cwd after its creation):

```sh
node scripts/install.mjs .cache/storage-review/distribution/compose-reference-context-0.3.1.tar.gz /tmp/compose-sync-verification.aTRxiE/skills
# Create consumer directory, then read INSTALLED SKILL.md.
# CLI=/tmp/compose-sync-verification.aTRxiE/skills/compose-reference-context/scripts/compose-knowledge.mjs
# CACHE=/tmp/compose-sync-verification.aTRxiE/cache
node "$CLI" sync --remote https://github.com/seungwan-woo/compose-knowledge.git --ref corpus --cache "$CACHE" --json
node "$CLI" --help
# SHA=11d0d4a17ef74dce5788f73684ef5a432ea9c1b8
node "$CLI" search --cache "$CACHE" --snapshot "$SHA" --platform android --artifact androidx.compose.runtime:runtime --version unknown --symbol androidx.compose.runtime.LaunchedEffect --limit 2 --max-bytes 2048 --json
node "$CLI" read --cache "$CACHE" --snapshot "$SHA" --platform android --artifact androidx.compose.runtime:runtime --version unknown --id guide-launched-effect-lifetime --max-bytes 3072 --json
node "$CLI" sync --remote https://github.com/seungwan-woo/compose-knowledge.git --ref corpus --cache "$CACHE" --offline --json
```

The first workflow CLI invocation was online public-remote sync, before `--help`, topic lookup or retrieval. It exited 0 with:

```json
{"snapshot":"11d0d4a17ef74dce5788f73684ef5a432ea9c1b8","status":"fresh","checkedAt":"2026-11-12T12:12:27.587Z","publishedAt":"2026-11-12T11:32:48Z"}
```

The narrow exact-FQN search and one card read both exited 0 and returned that full SHA with `versionStatus: "unknown"`. Search stdout was **2048 bytes**, explicitly `truncated: true`; read stdout was **1312 bytes**, `truncated: false`. The total exact UTF-8 stdout ledger is **3360 / 12288 bytes**, with one section read; the reserved maxima were 2048 + 3072 = 5120 bytes. Search IDs were `guide-launched-effect-lifetime` and `guide-updated-callback-in-effect`; only the first was read. No unseen truncated text or linked raw evidence was used to assert Compose behavior.

The read card's recorded source was `https://developer.android.com/develop/ui/compose/side-effects#launchedeffect`, revision `web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33`. Live documentation applicability remains unknown for any released app dependency. This card read verifies the consumer retrieval workflow, not the behavioral claim in a real app.

The subsequent explicitly offline invocation exited 0 with the same SHA and `cached`:

```json
{"snapshot":"11d0d4a17ef74dce5788f73684ef5a432ea9c1b8","status":"cached","checkedAt":"2026-11-12T12:13:05.128Z","publishedAt":"2026-11-12T11:32:48Z"}
```

Raw stdout was saved under the temporary root as `sync-online.json`, `search.json`, `read.json` and `sync-offline.json`. No full suite, Git mutation, root skill installation, forced-fetch-failure runtime test, unavailable runtime test, or mechanical ordering-enforcement test was performed. Scenarios 1–6 establish what the skill directs a consumer to do; the real commands establish installation, fresh public sync, pinned bounded retrieval, and explicit offline cache reuse.
