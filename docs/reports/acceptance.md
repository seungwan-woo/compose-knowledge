# Independent acceptance result

The built CLI passes the independent eight-scenario acceptance suite and reaches complete, version-correct evidence in the first three emitted hits for **18/20 frozen questions**, within **11,633 bytes maximum per question**. There were **zero incorrect version labels and zero budget violations**. The top-five diagnostic finds the accepted section for all 20 questions. This is retrieval and executable validation; actual model usability is reported separately.

## Frozen inputs and reproduction

- Questions: `evaluation/questions.json`, SHA-256 `0d343b5a32531a8802b4b1c1cb52ea16b2a3055e9b7caf1dc415409a9d064f2d`, fixed before ranking implementation. No question wording, accepted IDs or statuses changed after observing scores.
- Canonical corpus input SHA-256: `5dfb4ae21dfec9da17597ec66f8f593303776d5dfd88a60525e9adfb6ccf3c59`.
- Shared actual Git snapshot for every indexed and baseline query: `61aac0b310903ed2329bf414c0e4e8357a8f107f`. Both methods use the same built payload; a new reproduction creates a new local Git commit SHA with equivalent deterministic corpus bytes.
- Retained payload manifest SHA-256: `876b083351ff77d7dd37aba7c9de73aab70eeb8014024f84cdf758362a3f44c6`.
- Runtime: Node `v24.22.1`, Linux x64, five exposed CPUs, AMD EPYC 9V74. See raw results for the `rg` version.
- Exact first successful commands: `npx vitest run tests/acceptance.test.ts --maxWorkers=1` and `node scripts/evaluate.mjs .cache/evaluation-first`, from the repository root.
- Raw question-by-question commands, exit codes, complete stdout/stderr, bytes, timings, ranks and failure fields: `.cache/evaluation-first/results.json` and its 80 per-question files. The deterministic payload is retained under `.cache/evaluation-first/corpus/`.

The first invocation of the acceptance suite was blocked by a temporary TypeScript compilation failure while the snapshot implementation was being edited; all eight tests were skipped. The next invocation built successfully and ran all eight. No skipped test is counted as passed.

A final evaluator verification, `node scripts/evaluate.mjs .cache/evaluation-final`, reproduced every recall, version-error and byte result using SHA `1f11f596d8bc1c5768743b18086fd61bef0f075d`. It exercised automatic payload retention and retained the first result unchanged. Its primary indexed p50/p95 was 356/394 ms. The concurrency scenario was then strengthened to change an actual section body in B and check the B marker while old A reads remain byte-identical; the focused rerun `npx vitest run tests/acceptance.test.ts --maxWorkers=1 -t 'keeps reads pinned'` passed (1 selected test; 7 intentionally unselected).

## Executable acceptance

`tests/acceptance.test.ts` passed **8/8** in **9.01 seconds**, exercising the executable rather than importing implementation functions:

1. Two fresh builds have byte-identical manifests and every manifest payload; standalone validation succeeds.
2. Offline with no cache returns structured `unavailable`, null SHA and exit 2; a valid offline cache returns the exact SHA and correct checked/published timestamps.
3. An invalid new manifest and then an inaccessible original remote retain the validated old SHA, with readable old evidence.
4. Two independent sync processes activate complete B while six independent reads pinned to A retain identical A responses. A remains readable afterward and B is searchable.
5. Normal queries do not promote different or unknown releases to matching; comparison exposes different evidence; wrong-artifact exact FQN queries return no hits.
6. Known Android aliases match, unspecified platform remains unknown, nonexistent symbols return no hits, and arbitrary paths/IDs are rejected.
7. A synthetic joint section is unknown with one required dependency missing, matching with both correct, and different with a mismatched dependency. A lexically stronger unknown section cannot outrank matching-release evidence.
8. A long Korean/emoji body stays valid UTF-8/JSON within complete response caps of 1, 255, 1,024, 3,071 and 3,072 bytes, or returns a defined bounded failure when the metadata cannot fit. Builds use fresh staging; no existing Git checkout is overwritten by build.

These scenarios cover observable cache consistency and process concurrency. They do not simulate a process crash during every filesystem instruction; kill-during-activation remains a separate stress test. Core unit tests and package extraction tests are owned by other workers and are not counted in this independent eight-test total.

## Frozen retrieval results

| Method | Candidate cap | Accepted hit | Accepted section read | Version errors | Budget violations | Maximum workflow bytes | p50 / p95 ms |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Index, primary | 3 | 18/20 | 18/20 | 0 | 0 | 11,633 | 380 / 458 |
| Index, diagnostic | 5 | 20/20 | 18/20 | 0 | 0 | 11,632 | 387 / 476 |
| `rg`, primary | 3 | 15/20 | 15/20 | 0 | 0 | 10,251 | 274 / 362 |
| `rg`, diagnostic | 5 | 18/20 | 15/20 | 0 | 0 | 10,862 | 278 / 335 |

Each row has 20 workflows. Latencies include process startup, local snapshot validation, search, and up to three section reads; they are descriptive measurements of these different questions, not an established production latency target. Install and network synchronization are excluded from retrieval latency.

The baseline is a frozen case-insensitive fixed-string `rg --files-with-matches` search over one stable-ID-sorted file per section, using the same FQN, title, body and aliases. It uses the same independent artifact/version filters, and emits the first matching sections without a relevance ranker. The baseline's raw `rg` stdout plus its bounded candidate response and read responses all count toward the byte budget. It is a reproducible lexical baseline, not an optimized human shell workflow.

For both methods, evidence acceptance checks frozen section identity and expected applicability status, then confirms a nonempty read body and original source path/line/revision/hash metadata. Complete serialized stdout, including JSON metadata/newline and repeated calls, counts toward 12,288 bytes; individual bounded candidate and read responses stay within 3,072 bytes. Each workflow reads at most the first three candidates. No linked evidence is needed for the successful questions in this corpus.

All accepted index primary read bodies are complete. Search responses often mark truncation because the candidate limit or snippet byte cap omits material; this did not truncate the accepted primary read bodies, including the Android outside-touch handler and routing comment. The baseline's q19 test read is truncated before the second test's outside-click/assertion, so its structural 15/20 accepted-section score does not prove every baseline answer can be completed from the emitted text. Model answer correctness is a separate measure.

## Misses and interpretation

The index misses **q18** (pinned main `PopupProperties` reference) and **q19** (pinned main outside-dismissal tests) at three candidates; each appears at **rank 5** in the diagnostic. Their release applicability is deliberately unknown. Matching-release preference places several known UI 1.7.8 sections first, even when the query explicitly asks for the unknown reference or tests. The first-three-read policy therefore leaves the diagnostic's usable-read count at 18/20. Top-five raw recall is not substituted for the primary top-three gate.

The baseline misses q11, q14, q15, q18 and q20 at three candidates. Top five recovers q11, q14 and q15; q18 and q20 remain absent. The relative result supports this small corpus and frozen lexical baseline only.

Dismissal and background delivery remain separate claims. The Android source comment discusses upper-layer routing and focusability; it is legitimate source-level evidence. The pinned test source asserts popup visibility, carries unknown release applicability and was not executed on a device here. Neither the retrieval score nor a dismissal callback proves a specific background composable receives a complete gesture.

## Setup and unmeasured work

The evaluator measured compiler build 1,521 ms, corpus build 106 ms, initial local-remote sync 312 ms, unchanged incremental sync 243 ms and baseline text preparation 3 ms. Changed-data incremental sync latency and first installation latency were not measured by this evaluator. No Codex token counts or model-quality claims are inferred from CLI bytes. Authenticated `codex exec`, corporate-PC installation, a real crawler integration, a live GitHub publish, and Android device pass-through behavior remain separate evidence gates.
