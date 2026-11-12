# Independent daily refresh review

Reviewed on 2026-11-12 UTC, on `codex/daily-knowledge-refresh`. Read `.cache/current-environment-marker` directly and confirmed `daily-refresh-20261112`. Scope: the complete `.cache/daily-refresh-review.diff`, daily-refresh design and plan, current crawler/publisher/scripts/workflows/tests/skill, consumer validation and attribution boundaries, and the subsequent source-registry clarification. No product code was changed by this reviewer.

## Findings

### Resolved P2 — Preserve code tokens and line breaks when extracting highlighted samples

Location: `src/refresh/extract.ts:8` and `src/refresh/extract.ts:36–38` in the initially reviewed implementation.

`content()` inserts a space between every DOM child, including adjacent syntax-highlight spans. The `pre` path then collapses all whitespace with `normalize()`. This changes source code rather than merely extracting it: adjacent `-` and `>` become the invalid Kotlin token sequence `- >`, spaces are inserted inside string literals, and line comments consume the following statements after newline removal. These altered strings become both the knowledge body and the hashed, attributed source excerpt, so snapshot validation cannot catch the loss of fidelity.

Independent reproduction used the built extractor with a highlighted Kotlin fixture. Expected text:

```kotlin
// keep this comment on its own line
items.forEach { item -> Text("Option ${item}") }
```

Actual extracted text:

```text
// keep this comment on its own line items.forEach { item - > Text( "Option ${item} " ) }
```

This is also present in the actual configured source, not only the fixture: fetching `https://developer.android.com/develop/ui/compose/components/menu` and calling the production extractor yielded `option - > DropdownMenuItem` in `create-longer`, changed string interpolation spacing, and a flattened `// Placeholder list of 100 strings for demonstration val menuItemData ...` line. Preserve text-node concatenation and preformatted newlines inside code samples, and add a highlighted Kotlin regression test. The finding was sent to the controller before initial publication. The crawler worker changed inline extraction to concatenate text nodes without inserted spaces and preserve newlines inside `pre`, and added a highlighted Kotlin regression test. This reviewer then independently ran `npx vitest run tests/crawl.test.ts --maxWorkers=1` (13/13 passing), reran the original reproducer with an exact-text assertion, and checked the actual retrieved menu page for intact `option ->`, exact `"Option ${it + 1}"`, and the newline separating its comment from `val menuItemData`. All passed. The finding is resolved.

## Specification assessment

The architecture otherwise follows the agreed design. Nine explicitly configured entries are ingested, Material 3 is monitor-only, and no recursive site-wide claim is made. Baseline released evidence is retained while current web/Git evidence has unknown applicability. Git acquisition resolves an immutable revision before retrieving file bytes; web revisions are explicitly named content hashes. Unchanged sections reuse their previous attributed evidence, avoiding unrelated Git-head churn.

Collection uses the same validator as consumption before artifact upload. Publication copies and revalidates the transferred payload, validates the existing corpus, checks the collection-base SHA and fetched HEAD, and pushes without force. The normal Git ref update prevents two writers from overwriting each other. Unchanged manifests return without committing. The validator restricts the full file set to manifest-bound knowledge/index/license/attribution data and rejects symlinks and extra files. The publisher clears Git directory/index/object overrides, disables hooks and global/system configuration, and deliberately retains the environment configuration channel used for the workflow's scoped GitHub authorization header.

The workflow gives collection read permission and publication write permission in separate jobs, uses artifacts from the same run, pins publication checkout to the run SHA, requires successful collection, and restricts publication to scheduled or explicitly requested default-branch runs. The schedule starts only after merge. Corpus pushes are excluded from application CI. The skill accurately distinguishes sync time, last changed data commit time, and crawl health; it preserves explicit SHA pinning and avoids claiming a monitor-only article was ingested.

The configured Android documentation license declarations agree with the live `https://developer.android.com/license` page read during this review: documentation and its code are Apache 2.0 unless otherwise noted. The page separately assigns non-documentation site content to CC BY 2.5. The crawler is scoped to article content, and registry wording does not extend this determination to arbitrary linked pages.

## Validation and verdict

Inspected the independent acceptance tests and publisher tests: they exercise production acquisition/build/publication plus real bare Git and executable sync/search/read, including pinned old snapshots, unknown live applicability, retained released applicability, required-source failure, corrupt staging, stale collection bases, and concurrent writers. The reported full run is 65 passing tests across nine files; this reviewer did not repeat that full suite. Independently ran the targeted extraction reproducer, fetched the actual menu and license pages, and ran `git diff --check` successfully. The new regression test closes the observed syntax-highlighted code fidelity gap. The reviewer also reran `git diff --check` after the fix; it passed.

**Specification verdict:** the reviewed implementation satisfies the agreed design; the one source-fidelity finding is fixed and independently verified.

**Quality verdict:** approved from code review, with no open findings. No additional actionable publication, permission, version-identity, or freshness defect was identified in this review. GitHub CI, the feature-branch preview, final post-fix live acquisition, and actual initial publication remain separate acceptance work owned by the controller; this review does not claim those have completed.

## Addendum — Isolate compilation from parallel CLI consumers

Reviewed the uncommitted build-race correction after `e84058f`. The controller supplied GitHub evidence that push CI run `43200196687` failed while importing `syncSnapshot` from a partially rewritten shared build, while the concurrent PR CI passed. Source inspection supports this diagnosis: multiple suite setup hooks and bundle creation previously invoked the compiler against the same checkout `dist` directory while other workers executed that directory's CLI.

The correction addresses both writers. `vitest.config.ts` registers `tests/build-setup.ts` as global setup, which completes the shared CLI build before test workers start; the three suite-local build calls are removed. `scripts/bundle.mjs` passes an explicit `--outDir` pointing into its unique temporary bundle runtime, so packaging neither rewrites nor copies from the shared build. The existing compiler configuration has no incremental cache or secondary shared-output setting that would defeat this isolation. A search of tests and scripts found no remaining suite-time shared compiler invocation outside global setup; CI evaluation builds happen in a later sequential workflow step.

The distribution regression compares nanosecond modification times of the shared `dist/cli.js` before and after packaging. This directly detects the known rewrite even when the resulting file bytes are identical, while existing installation and executable-consumption assertions still check that the privately compiled package works. The controller reports observing this regression fail before the fix. This reviewer inspected the scoped changes and ran `git diff --check` successfully, but deliberately did not launch another test process or compiler while the controller's coordinated full suite was running.

**Addendum verdict:** approved, no new findings. The fix removes the observed concurrent writers without serializing unrelated test work or masking the failure with retries. The controller owns the full-suite result and new GitHub checks. Separately, the controller reports successful feature-branch collection/artifact preview run `43200290258` with publication correctly skipped; this is supplied acceptance evidence, not a workflow run independently executed by this reviewer.
