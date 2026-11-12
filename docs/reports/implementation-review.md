# Independent implementation review

Reviewed isolated packages for task 2 (`459e33f`), task 3 (`8529c3e`) and task 4 (`4aed355`) against their briefs, worker reports, frozen types, design and prior specification review. Findings below refer to the reviewed commits, not concurrent follow-up edits. Existing passing suites were not rerun. Targeted probes used compiled implementations and disposable `/tmp` repositories to investigate concrete defects; no product files were changed by this reviewer.

## Verdicts

| Task | Specification compliance | Code quality |
| --- | --- | --- |
| 2: corpus | Changes required: output is not OKF and provenance/redistribution checks are incomplete. | Changes required: validator shares the renderer's format mistake and accepts incomplete sources. Hashing, file-set validation and deterministic repeated builds are sound foundations. |
| 3: retrieval | Changes required: generic suffix aliases and relevance-only ranking violate identity and match-first requirements. | Changes required: use one explicit alias mapping and rank applicability before relevance. UTF-8 JSON budgeting preserves JSON/Unicode and mandatory read metadata. |
| 4: snapshots | Changes required: offline identity, fallback and inherited Git repository environment are not safe. | Changes required: bind cached data to retained commit identity and isolate Git's repository-location environment. Staging, atomic activation, old directory retention and persistent objects are otherwise appropriate. |

## Material findings

### R1 — P1 — Published documents are not OKF

`src/knowledge/okf.ts:4` returns a Markdown heading and an HTML comment containing the internal document object. It has no OKF metadata envelope containing `type`, `title`, `description`, `tags`, `sources` or the required Compose extension. `src/knowledge/validate.ts:55` compares with that same renderer, so it proves internal agreement while accepting an incompatible format.

Counterexample: rendering the actual DropdownMenu fixture starts with `# DropdownMenu`, and a built snapshot passes its validator without any OKF frontmatter. Implement the referenced OKF v0.2 representation and independently parse/assert its required metadata and source references in tests. Internal JSON may supplement the format; it cannot replace it.

### R2 — P1 — Required source location and immutable revision are not enforced

`src/adapters/crawler.ts:41` validates only nonempty `resource`/`revision` strings; `path` and both line numbers are optional for code/test sources. It also does not check conflicting reuse of a source ID.

Counterexample confirmed by probe: remove `path`, `startLine` and `endLine` from the fixture's first code source, set resource to `not-a-location` and revision to `main`; `toKnowledgeInputs` accepts it. A guide can likewise omit its anchor. This permits a published “validated” corpus whose cited original location cannot be recovered and whose revision moves over time. Validate source-kind requirements, URI and immutable revision/release-coordinate syntax; reject one source ID bound to inconsistent provenance while permitting identical repeated records.

### R3 — P2 — Corpus redistribution loses original attribution notices

`src/knowledge/build.ts:19` includes generic Apache license text but no original source attribution. The actual fixture excerpts all omit copyright headers; source records contain only `Apache-2.0`. The full upstream Kotlin files in the development repository retain headers, but they are not among emitted corpus files.

Counterexample: a recipient checking out only `corpus` receives code excerpts and the generic license but not the original Android Open Source Project copyright notices preserved in `tests/fixtures/upstream/`. Include applicable source notices in the emitted corpus, bound by the manifest, and validate them. The source-research report says no archive NOTICE file exists; this finding concerns the existing file-level attribution notices, not an invented NOTICE obligation.

### R4 — P1 — Generic Android suffix stripping conflates distinct artifacts

`src/domain/version.ts:3`, `src/retrieval/search.ts:7` and `src/adapters/crawler.ts:34` remove `-android` from any coordinate. The frozen design permits only known Android aliases.

Counterexample confirmed by probe: requiring `example:widget-android@1` and querying `example:widget@1` returns `match`; `normalizeArtifact` returns `example:widget`. Two genuinely distinct dependencies ending in these names are also rejected as duplicates by the adapter. Replace generic stripping with the agreed explicit Material 3 and UI alias table and apply identical normalization rules in requirement validation, version matching and filtering. Tests currently use arbitrary `g:ui` aliases and therefore encode the incorrect behavior.

### R5 — P2 — Unknown evidence ranks ahead of exact matches

`src/retrieval/search.ts:40` sorts only by relevance score and section ID. Version status is calculated but never used in ranking.

Counterexample confirmed by probe: two sections answer “outside touch”; an unknown section has the phrase in its title/aliases while an exact-version section has it only in the body. Searching with the matching artifact/version returns unknown first. Under the default limit, sufficiently many unknown sections can displace every exact hit. Sort relevant candidates by status (`match`, then `unknown`, then comparison-only `different`) before relevance and stable ID, as required by the supplied plan.

### R6 — P1 — Offline fallback trusts self-consistent content under the wrong SHA

`src/io/snapshot.ts:30` validates the directory against its own manifest but does not bind that manifest to the directory's claimed Git commit. Online sync checks an existing directory against fetched manifest bytes, but offline/cache fallback omits the check.

Counterexample confirmed by probe: sync valid commit A; replace `snapshots/<A>` with a separately built valid corpus with a changed section body; `syncSnapshot({cacheDir, offline:true})` returns `cached` and SHA A. The content is not A. Verify the cached manifest against retained commit objects or another trusted per-SHA identity record before declaring cache validity. Pinned consumers must use the same identity check. Merely revalidating hashes in the replacement corpus is insufficient.

### R7 — P2 — A conflicting candidate prevents fallback to an intact previous snapshot

`src/io/snapshot.ts:125` returns unavailable for every `SnapshotMismatch`, bypassing the normal fallback function.

Counterexample confirmed by probe: current pointer names valid A; remote advances to B; an existing `snapshots/<B>` directory contains another internally valid corpus. The online candidate check correctly detects B's conflict, but sync returns `unavailable` even though A remains intact. Attempt fallback through the independently identity-validated current pointer; if the pointer itself names the mismatching SHA, do not reuse that corrupt directory.

### R8 — P1 — Inherited Git repository environment mutates an unrelated workspace

`src/io/snapshot.ts:23` passes all of `process.env` to Git. Retaining proxy, certificate and authentication configuration is correct, but `GIT_DIR` and related repository-location variables override the temporary repository's `cwd`.

Counterexample confirmed in disposable directories: initialize an unrelated non-bare repository, set `GIT_DIR` to its `.git`, then sync the corpus. Sync reports `fresh`, but `git init --bare` changes the unrelated repository's `core.bare` from `false` to `true`, and fetch writes its `FETCH_HEAD`. Remove repository-location/index/object-redirection variables while retaining network and authentication settings. Add a regression test asserting that an unrelated repository's config and refs remain unchanged with these inherited variables present.

## Checks that did not produce material findings

- Full-response byte budgeting uses `Buffer.byteLength` including newline and truncates strings by Unicode code points before reserializing valid JSON. Read source fields are retained; impossible metadata budgets throw explicitly. End-to-end combined budget accounting remains CLI/skill scope.
- Document and section ordering, file hashes and revision sorting are deterministic for the same input; no build timestamps appear in payloads. The supplied tests establish repeated byte equality. This review does not broaden that claim to arbitrary semantic reorderings of input properties or set-like arrays.
- Snapshot extraction rejects nonregular Git tree entries and unsafe paths, validates the staged corpus and uses atomic renames for both directories and current pointer. Concurrent same-commit fetches compare manifests before activation. Old directories are retained for pinned readers.
- Persistent Git objects are published using hard links; pack indexes are made visible after pack data. The report includes a packet trace showing repeat fetch reuses objects. The proxy/CA inheritance regression is meaningful and should remain after isolating repository-location variables.
- Fallback checks configured remote/ref equality, and offline without a remote intentionally uses the last-good pointer. No fetched corpus file is executed. Live remote publication and an actual developer-PC Codex run are outside these packages.

## Follow-up status

Highest-priority findings were sent to the controller while review was in progress. Concurrent workers may already be implementing fixes. Approval requires review of their concrete diff and targeted regression evidence; this report does not mark a finding resolved merely because a fix was proposed.
