# Independent consumer evidence check

The frozen eight-question test found no coverage-grade improvement: public baseline and local candidate both answered **2 supported, 2 partial, 4 unsupported**. A separate test following the candidate installation's optional routing table answered **all five selected diagnostic questions**. These are different tests; the five diagnostics are not a before/after score.

An AI tester chose and graded evidence. No human review, target-app execution, or measured performance improvement is claimed. The private OneUI/sesl-compose app was inaccessible; module, variant, resolved artifact versions and toolchain remain unknown. Starting artifact filters were chosen search contexts, not verified app dependencies.

| Frozen question | Public baseline | Local candidate |
| --- | --- | --- |
| q01 Measurement/build versus recomposition counts | Partial | Partial |
| q02 Composable cost in traces | Unsupported | Unsupported |
| q03 Baseline Profile optimization and limits | Unsupported | Unsupported |
| q04 drawWithCache object lifetime/invalidation | Supported | Supported |
| q05 Compound parent/slot composition | Unsupported | Unsupported |
| q06 Slots versus content configuration | Unsupported | Unsupported |
| q07 RowScope child modifier constraints | Partial | Partial |
| q08 Shared state owner and event flow | Supported | Supported |

Questions, artifact/FQN filters and single concept queries were frozen before candidate inspection. Both strict runs searched these same contexts. The runtime-only filters missed benchmark, runtime-tracing, UI performance, Material3 compound-component and layout-slot routes. In particular q03 paired a benchmark FQN with a runtime artifact; q02 used runtime traceEventStart instead of the runtime-tracing tool artifact. This result demonstrates the limitation of those fixed starting contexts; it does not establish corpus-wide absence. q01 lacked build-specific measurement evidence; q07 lacked the direct-child slot constraint. All seven substantive read bodies were unchanged between runs.

The separate diagnostics began a new online sync for each question, recorded/read the installed optional table, and used its exact artifact and symbol/query routes. q01 used benchmark-macro-junit4; q02 runtime-tracing; q03 UI; q05 Material3 ExposedDropdownMenuBox; q06 foundation-layout slots. Each found relevant guidance and bound raw evidence. Evidence supported timings on a profileable, non-debuggable build, composable-cost system traces, AOT/app-journey profile limits and Macrobenchmark validation, explicit state/event/scope/anchor compound contracts, and named slots instead of mirroring every child parameter. Compound component remains a repository synthesis, not an official Android pattern name or an automatic speed improvement.

Baseline: bundle 0.3.3, public https://github.com/seungwan-woo/compose-knowledge.git, snapshot `4b1c0b32fa56665ed7d7248b01ee95d9880083d0`. Candidate: fresh external installation of bundle 0.3.4, local reviewed test remote, snapshot `59389ff9ad86eb81a015152d902058bf79630bcd`. Local freshness does not establish public publication. Every question synced freshly and pinned its full SHA. All 326 baseline and 327 candidate archive files matched their installations; the candidate shipped this optional table. SKILL and executable runtime/launcher bytes matched except package version metadata.

Strict runs: max 7,556 search/read stdout UTF-8 bytes per question, max two section reads. Diagnostics: max 10,236 bytes, max three reads. All 21 syncs were fresh; no command failures, budget/pin/hop verification failures or truncated section reads occurred. Each navigation-table read was 2,442 separately recorded bytes; the skill's 12 KiB limit applies to CLI search/read stdout. Search snippets could be truncated; conclusions use only the displayed section reads. Raw stdout, stderr, exact commands, byte counts, source revisions/hashes and timestamps are preserved in the compressed trace artifact. See evidence.json for compact indexed records and provenance.

## Reproduce

Use Node 24. Install the selected verified bundle outside the source checkout. Set shell variables to your own absolute paths: `SKILL_DIR`, `REMOTE`, `SHA`, `OUT`, `CACHE`, `CONFIG`. Supply a new output directory; the harness refuses to overwrite question ledgers. The packaged diagnostic sync adds an overwrite guard after the recorded run; it does not change the recorded evidence or scores. From this package directory:

```bash
node configure.mjs "$SKILL_DIR" "$REMOTE" "$SHA" "$OUT" "$CACHE" "$CONFIG"
node replay.mjs "$CONFIG" baseline-selections.json
```

For the local candidate strict run use candidate-selections.json. To reproduce only the separate installed-route diagnostic:

```bash
node configure.mjs "$SKILL_DIR" "$REMOTE" "$SHA" "$OUT" "$CACHE" "$CONFIG" diagnostic-questions.json
node replay-diagnostic.mjs "$CONFIG" diagnostic-selections.json
```

Fresh sync must return the supplied SHA. If the public corpus branch advances, this historical public run cannot be represented as a current freshness check. Use an explicitly identified preserved local test remote to reproduce historical contents, and report its local provenance. Never relabel that result public freshness.

To inspect exact raw traces:

```bash
node -e 'process.stdout.write(require("node:zlib").gunzipSync(require("node:fs").readFileSync("raw-traces.json.gz")))' > raw-traces.json
```
