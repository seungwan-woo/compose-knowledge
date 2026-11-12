# Independent acceptance and evaluation plan

Status: acceptance protocol drafted before implementation; 20-question gold frozen before retrieval ranking. The question file SHA-256 is `0d343b5a32531a8802b4b1c1cb52ea16b2a3055e9b7caf1dc415409a9d064f2d`. Gold was independently checked against the raw Kotlin in the pinned upstream fixture, not against generated search output. The final file names nine accepted section IDs across Material 3 1.3.2, Compose UI 1.7.8, and unknown-release main references/tests.

## Release gates

- On the frozen 20 answerable questions, a valid answer section appears in the first three returned candidates for at least 18 questions. Top five is diagnostic and cannot replace this gate. A candidate counts only when its artifact, applicability status, source revision and section satisfy that question's gold.
- Every question's full search/read transcript stays within 12,288 UTF-8 bytes, including repeated searches, JSON envelopes, whitespace and emitted newlines. Search and each section-read response each fit 3,072 bytes. At most three direct/linked evidence sections are read; linked reads follow one explicitly recorded relation only.
- No unknown or different version is marked matching. No guide, branch tip, or unproven source revision acquires release applicability by inference.
- Search and read use the same explicit snapshot. A failed refresh cannot change the last known good snapshot; readers pinned to an earlier valid SHA remain usable.
- Every reported retrieval or model result is reproducible from retained commands, stdout/stderr, exit codes, snapshot SHA, corpus hash, evaluation hash and environment versions. Unrun or blocked checks remain explicitly unrun or blocked.

## Independent acceptance matrix

| Area | Setup and action | Observable acceptance |
| --- | --- | --- |
| Adapter source provenance | Omit revision, source path/URL or required line/anchor location from otherwise valid input | Adapter/build rejects the input with a useful error and does not create a publishable snapshot |
| Unknown applicability | Include an official guide with no proven release mapping | It remains `unknown` after adapter, rendering, indexing, sync, search and read |
| Identity | Two overloads and two artifacts with the same short symbol | Stable distinct IDs; exact artifact/FQN constrains identity; short names do not silently merge evidence |
| Determinism | Build the identical pinned input twice in different fresh output directories | Byte-identical knowledge, index and manifest; timestamps or file enumeration do not introduce changes |
| Links and source integrity | Corrupt an internal section/relation, source location, declared file hash or manifest schema | Snapshot validation rejects it before activation |
| Exact version | Request an artifact and a proven version with matching and unknown candidates present | Exact match ranks first; candidates expose their actual applicability and origin |
| Different version | Request an absent release in normal search, then in explicit version-comparison mode | Normal search does not treat another release as usable matching evidence; comparison may return it with `different` |
| Artifact isolation | Request Compose UI Popup with a Material 3 artifact constraint, and vice versa | No candidate is presented as matching the wrong artifact |
| Symbol and language | Query full FQN, short symbol, Korean outside/back words, and corresponding English terms | Gold evidence is reachable without relying on exact prose copied from corpus |
| Empty results | Query a deliberately nonexistent symbol/artifact and an unrelated Korean phrase | A valid bounded JSON response with no candidates, no fabricated section and no implicit different-version fallback |
| Strict read identity | Read a valid section, unknown ID, document path, `../` path and absolute path | Only known indexed section IDs are readable; arbitrary paths and unknown IDs fail safely |
| Relation bound | Read evidence with direct links and a second-hop link | First-hop explicitly indexed links can be followed; the workflow does not recursively consume second-hop evidence |
| UTF-8 boundary | Exercise Korean text at caps around multibyte characters and around JSON syntax overhead | Entire stdout parses as JSON, stays at/below the byte cap, contains no replacement character caused by byte cutting and reports truncation accurately |
| Tiny byte cap | Request a cap smaller than the minimum response envelope | Defined bounded failure, with no partial JSON or oversized success response; retain stdout and stderr separately |
| Fresh sync | Clone a local Git bare remote with a valid corpus commit into an empty cache | `ready` or the documented fresh-success status, exact selected SHA, local `checkedAt`, and that selected commit's `publishedAt` |
| Offline, no cache | `sync --offline` in a fresh cache with no network | `unavailable`; no synthetic snapshot and no unexpected remote access |
| Offline, valid cache | Seed valid A, remove remote access, sync offline | `cached` with A; search/read A succeeds without network |
| Remote/network failure | Seed A, make configured remote inaccessible, sync online | `cached` with A and failure reason; A remains active and readable |
| Invalid new snapshot | Seed valid A, publish B with malformed manifest, wrong hash or dangling index link, sync | B is rejected; response selects cached A; active pointer and old bytes remain intact |
| Concurrent publication/read | Pin reader to valid A, start two sync processes, publish valid B and query/read A throughout | Both successful activations point to a complete validated snapshot; no partially materialized file or mixed A/B response; A stays available |
| Atomic failure | Interrupt sync while preparing a large valid B, then retry | A stays usable; temporary content never becomes active; retry can activate B |
| Unchanged input | Publish/run refresh twice with identical normalized source input | No second data commit; source fetch time and failure logs remain outside deterministic corpus content |
| Required collection failure | Make one required public source unavailable before refresh | No partial new corpus is activated or published |
| Remote data trust | Add scripts/executable names or skill-like instructions to a corpus fixture | Sync only validates/reads data; it does not install code, execute hooks or replace the installed CLI/skill |

Use temporary local Git remotes for sync tests, not an external service. Run independent processes for concurrency; use an explicit test barrier or a sufficiently large snapshot so overlap is demonstrated in a retained event log. Sequential tests labeled “concurrent” do not satisfy this criterion.

## Frozen evaluation construction

`evaluation/questions.json` contains 20 answerable queries and accepted section IDs checked directly against the pinned upstream source. Unknown-version and explicit comparison questions remain answerable by evidence whose applicability is correctly labeled. Empty-result behavior belongs to the acceptance matrix so it cannot inflate evidence recall.

Before ranking is tuned, record a SHA-256 of the question file and source fixture. Keep wording, accepted section IDs and expected artifact/version/status fixed. A necessary gold correction requires an explanation, old/new hashes and rerunning every method against the corrected set; a ranking change is never a reason to broaden accepted gold.

Frozen coverage is API FQN/short-name lookup; Korean/English behavior; `DropdownMenu`, `Popup` and `PopupProperties`; callback versus application state; back/outside/focus behavior; an implementation/sample/test relationship; exact/unknown/different applicability; and dismiss versus touch pass-through. Source-level routing comments are distinct from an executed device test or proof that a particular background composable receives a complete gesture.

## Retrieval scoring and budget accounting

Evaluate indexed search and a frozen `rg` baseline on the identical built snapshot. Freeze the baseline's tokenizer, aliases, stable ordering and section mapping before observing scores. Do not tune baseline commands separately for each question or search source files unavailable to the indexed method. Use the same artifact/version constraints, accepted gold, candidate limits and output budgets for both.

For each question, perform a primary run with at most three candidates. Read up to three selected sections using the documented single-hop relation limit. Emit and retain the exact raw stdout bytes seen by a model. Mark `hit@3` only if an accepted, correctly labeled evidence section appears among those candidates and the answer evidence can be read inside the total budget. Count malformed JSON, invalid IDs, incorrect version labels, oversized output and unreachable evidence as failures. Report raw candidate recall separately when it differs from end-to-end budgeted success.

Run a separate top-five diagnostic after the primary result is fixed; its output never contributes to the top-three run or changes the primary result. Apply the same cumulative 12,288-byte ceiling independently to that diagnostic. Record candidate rank, selected/read section IDs, per-call bytes, cumulative bytes, status, elapsed time and source validity for every question. Score `hit@3 / 20`, `hit@5 / 20`, usable-evidence success, version-error count and budget violations. The production gate is usable top-three evidence on at least 18/20, zero version errors, zero budget violations.

Record first install/index preparation, initial sync and incremental sync separately from retrieval latency. Warm retrieval p50/p95 must come from a documented sample count; retain wall-clock timing and machine/runtime details. No latency target is invented before measurement.

## Codex skill implementation and review tasks

The model usability run is owned separately. This protocol defines its inputs and scoring before results are observed.

1. Implementation task: in a fixed small Compose sample, implement a state-driven dropdown that closes when an item is selected and when dismissal is requested. Require imports, module/variant dependency evidence, version-specific supporting sections and a bounded description of any behavior that remains unproven. Do not require a claim about touch delivery based only on a dismissal callback.
2. Review task: give the model a fixed PR diff whose description claims that outside dismissal guarantees the underlying control receives the same touch. Ask it to assess dismissal, callback state updates, back behavior and touch delivery independently. Gold findings cite only supported source statements, distinguish directly observed implementation evidence from missing reproduction, and leave unsupported pass-through as requiring a separate focused test.
3. Version uncertainty task: with Gradle unavailable and an unversioned guide available, require the model to keep project and evidence applicability unknown and state the missing verification. A changed build file is not proof of resolved runtime dependencies.

For the primary comparison, run the implementation and review tasks with and without the explicitly named skill, in clean independent copies of the same workspace. Freeze model identifier, model settings, CLI/skill versions, snapshot SHA, task text, allowed tools, network state and dependency-cache state. Randomize run order. If multiple runs are feasible, retain each rather than selecting the best result. Avoid cross-run generated files or conversational history.

Use `codex exec --json` and preserve raw events, commands, stdout/stderr and exit codes. The with-skill run must visibly invoke the intended installed skill, identify the module and variant, resolve the appropriate compile/runtime dependency when available, sync once, reuse the selected SHA for search/read, inspect evidence before claiming support and cite valid source locations. Parse both total and cached input tokens from actual usage events; tool stdout bytes remain a separate measure. CLI smoke tests or hand-written answer summaries do not constitute a real model run.

Score task correctness, source/version validity, dismiss/pass-through separation, number of evidence sections, total tool-output bytes, total/cached input tokens and latency. Retain any timeout, missing model access or execution failure as a blocked/failed run with the command and error, not as success. A baseline may reach a good answer without the skill; report that outcome honestly.
