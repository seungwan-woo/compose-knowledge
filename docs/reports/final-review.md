# Independent whole-branch review

Reviewed HEAD `436a1f7`, the whole-branch review package, product sources, CLI, bundle/installer, installed-skill launcher and instructions, workflows, evaluation code, tests, README, approved design, execution ledger, original uploaded plan, and prior scoped review. This is a fresh overall review; the previous R1–R8 approvals were not assumed to cover the CLI/distribution integration. The later documentation-only correction to the skill-usability report avoids claiming measured skill benefit over its successful baseline.

## Verdicts

| Area | Verdict |
| --- | --- |
| Specification compliance | **Changes required:** two observable integration defects below. The implementation otherwise meets the approved fixture-first PoC scope, with the original plan's external integrations explicitly deferred. |
| Code quality | **Changes required:** resolve local remote paths at the API boundary and apply the comparison gate consistently to direct reads. No critical defect found. |

Severity totals: **Critical 0; Important 2; Minor 0.** Approval is pending a concrete fix and targeted verification of F1 and F2. These are bounded corrections, not a request to expand the PoC.

## Important findings

### F1 — Relative local remotes resolve inside the temporary repository

**Location:** `src/io/snapshot.ts:117` (temporary repository creation at lines 106–109); documented example in `src/cli.ts:18`.

`syncSnapshot` passes `options.remote` unchanged to a Git subprocess whose working directory is the temporary bare repository. Consequently the documented `--remote ./corpus` resolves relative to `CACHE/.sync-*/repo`, rather than to the caller's working directory. A valid local remote is reported unavailable; with a prior pointer, the same defect can silently keep the task on cached data.

Fresh targeted probe used the existing valid demo remote, a new disposable cache, and the parent of the remote as the command working directory:

```text
node /workspace/compose-knowledge/dist/cli.js sync --cache /tmp/.../relative --remote ./corpus
=> exit 2; status unavailable; fatal: './corpus' does not appear to be a git repository

same command with the absolute path to that corpus
=> exit 0; status fresh; snapshot 1a794ce75c68dca8f8603e554d83d3ad6d152110
```

Resolve local filesystem remote paths against the caller's working directory before creating the temporary repository. Use that resolved identity consistently for fetching and cached-pointer matching; preserve URL and SCP-style remote syntax. Add a regression covering the public relative-path example, repeated sync and failed-fetch fallback for the same canonical remote.

### F2 — Direct reads bypass the comparison-only version policy

**Location:** `src/retrieval/search.ts:47–50`, especially the unconditional response at line 50.

Search suppresses `different` evidence unless `includeDifferent` is true, but `readSection` ignores that flag and returns its body. The CLI accepts the flag for reads, so this is not just an undocumented omission in the command interface. It contradicts the approved comparison-only requirement and the README's statement that different releases are exposed only through `--include-different`.

Fresh targeted probe against the pinned demo snapshot:

```text
search --artifact androidx.compose.material3:material3 --version 9.9.9 --platform android --symbol DropdownMenu
=> exit 0; hits []

read --artifact androidx.compose.material3:material3 --version 9.9.9 --platform android --id menu-api
=> exit 0; versionStatus different; 1965 characters of body returned
```

Both calls used the same valid cache and SHA, and neither passed `--include-different`. A normal one-hop workflow can trigger this too: applicable Material 3 evidence links to UI evidence whose release differs from the project's resolved UI version. The read's honest `different` label prevents a false `match`, but does not satisfy the explicit comparison gate.

Compute the read status before constructing its response and reject a mismatched read unless comparison was requested. Preserve `unknown` reads and cross-artifact linked reads; do not add the search artifact filter to ID-based reading. Add direct API/CLI cases for rejection by default, success with `--include-different`, and an allowed unknown read.

## Overall scope and quality assessment

- Core architecture is coherent for this small corpus: canonical input validation, deterministic OKF/index/manifest generation, immutable snapshot identity, validation before activation, last-good fallback and pinned reads are consistently connected to the CLI. No new defect was identified in the previously corrected R1–R8 areas.
- The bundle includes the compiled CLI, its YAML runtime dependency, matching skill and public reference fixtures. The launcher resolves its bundled runtime by its own path. Installer inspection found checksum verification, path/type screening, staging, validation and refusal to replace an existing installation. The checksum's transport-integrity role and lack of publisher authentication are accurately documented.
- The skill requires independent artifact version resolution, Android context, one sync and a fixed SHA, bounded output accounting, at most three reads and one linked hop. It correctly separates dismissal, caller state updates and background click delivery. Its total-budget ledger is an instruction enforced by the consumer workflow, not a CLI-wide automatic budget; the report is transparent about that limitation.
- CI runs typecheck/build/tests and the frozen evaluator. The refresh workflow intentionally fails at a clearly named missing-crawler/publication gate; no daily trigger or publication permission is accidentally enabled. This is an honest integration placeholder, not a completed live publishing workflow.
- README and reports explicitly identify the nine-section fixture corpus, unavailable original crawler, blocked source domains, unperformed publication, saved-but-unpublished environment settings, blocked standalone `codex exec` initialization, and untested corporate-PC/Android-device behavior. The actual fresh model-consumer exercise is distinguished from authenticated standalone Codex execution. The branch should be described as a verified local PoC, not completion of every item in the original operational plan.

## Verification basis and limits

I independently ran the focused relative/absolute-remote and mismatched-search/read probes above against the compiled CLI; both defects reproduced. Disposable probe caches were removed. I did not rerun the known-green full suite or alter product code, tests, fixtures or Git history.

The controller's fresh typecheck/build and 44/44 tests, independent acceptance 8/8, frozen evaluation 18/20 top-three and 20/20 top-five with zero reported version/budget errors, and installed-skill A/B evidence were inspected as existing evidence, not represented as executions by this reviewer. Top-five recall is diagnostic; it does not imply five evidence reads fit the three-read workflow. Those checks do not cover the two cases above.

Optional future usability work: add a cross-artifact linked-read example to the skill and consider automating its task-wide byte ledger. Neither is an additional approval blocker. Connecting the real crawler and enabling publication remain separately documented future work, not regressions introduced by this branch.

## Final fix re-review — commit `db40cd6`

Reviewed the complete `final-fix-review.diff` and implementer's behavioral RED/GREEN report. This pass is limited to F1, F2 and possible breakage introduced by their fix; no broader review or test-suite rerun was performed.

| Finding | Status | Evidence |
| --- | --- | --- |
| F1: relative local remote | **ADDRESSED** | `syncSnapshot` resolves filesystem remotes against the caller's working directory before constructing fetch or fallback state. The same canonical remote is used for the pointer, so relative and absolute spellings share the cache identity. URL and SCP forms remain unchanged. The CLI regression covers relative sync from outside the checkout, absolute repeat, failed-fetch fallback, rejection of a different remote and absence of source-repository mutation. A separate Git-boundary regression checks HTTPS, SSH URL and SCP argument preservation. |
| F2: direct-read comparison gate | **ADDRESSED** | `readSection` computes status once and rejects `different` before constructing its response unless `includeDifferent` is true. API and CLI regressions cover the rejection and explicit comparison; unknown evidence and cross-artifact matches remain readable. Search behavior is unchanged. |

The one-line acceptance adjustment adds `--include-different` to the pre-existing conjunctive-version mismatch check. That check still verifies the same `different` status; the newly added API and CLI cases independently verify default rejection. This is a necessary adaptation to the corrected policy, not removal of version coverage. No new material defect was found in the fix delta.

The implementer reports targeted 28/28, full 46/46, typecheck and build passing after behavioral failures reproduced both findings. These are reviewed implementation verification results, not executions by this reviewer. The controller is independently repeating release verification and the unchanged frozen evaluation; this approval does not claim a result for that run before it completes.

**Final specification-compliance verdict: APPROVED for the agreed local fixture-first PoC. Final code-quality verdict: APPROVED.** F1 and F2 are closed; no Critical, Important or Minor findings remain open from this review. The external crawler, live publication, standalone authenticated Codex, corporate-PC and device-validation limitations above remain in force and must remain visible in the handoff.
