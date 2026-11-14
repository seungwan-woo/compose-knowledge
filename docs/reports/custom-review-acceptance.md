# Custom Compose workflow acceptance

Local implementation and the declared public pilot are complete. The original six consumers produced **3 supported and 3 partial answers**. Two separately identified post-fix retests produced **q03 supported and q06 partial**. q05 and q06 still have specific retrieval gaps. These results do not establish a perfect six-case pass or a token-saving target.

This delivery provides `begin → scope locally → lookup → assess/stop` for eight pack families. Choose legacy sync/search/read **upfront** for other topics; never switch workflows after a lookup. Consumer-private source, relationships, policies and findings stay in the consumer's approved agent deployment. No private importer, telemetry, consumer Android build, merge, environment publication or public corpus publication was performed.

## Frozen conditions

The [six questions](custom-review-questions.json) retain their exact wording and required decisions; SHA-256 is `bdf34c81e12619260bbfd1bfd0cc3b6d8b9e7a8d3183d153b5ab1d8e7d970ae4`. All consumers were fresh `gpt-6.1-sol`, high reasoning, without parent history, maintainer hints, intervention or unrecorded reruns. Context was public synthetic Android, static-only, with unknown variant and resolved artifact versions.

Corpus B is `1a7433db51d3d15cb42a22aa8770caba43627d3b`; local candidate E is `f9e370a0ba49504dc142ae143e9273a35a7f16df`. B's original Git objects/identity were preserved. Each question began with fresh sync from its configured local mirror and retained that pin. “Fresh” here verifies that mirror, not a public publication or released dependency compatibility.

Both candidate bundles are labelled 0.4.0, so use their digests, not version alone:

| Trial | Source commit | Archive SHA-256 |
| --- | --- | --- |
| Original six | `6231f51163a324142ad5167fbceeb13c75095775` | `11e322884ee4060c35239691e9fa11d998eceff3a99a7d356cdfeb6bdae2872d` |
| Selected q03/q06 retests | `51eff3d5af412664449b0749b543d528fea5396b` | `b8fcaf558a61485928f84c29f8513032c13473604c632267c52589457563b7b5` |

Full identities and counts are in the [measurement summary](custom-review-measurement.json). The original 0.3.4 archive remains separately identified there.

## Original six consumers

Independent graders used exact question, answer and actually seen evidence packets. Runtime `sufficient` flags and self-grades did not determine support. Correct abstention remains separate from retrieval coverage.

| Case | Independent support | Retrieval stdout bytes | Input + answer proxy tokens | Lookup CLI calls / runtime attempts |
| --- | --- | ---: | ---: | --- |
| q01 | supported | 9,042 | 5,214 | 1 / 1 |
| q02 | supported | 6,135 | 4,451 | 1 / 1 |
| q03 | partial | 3,024 | 3,904 | 2 / 1 |
| q04 | supported | 6,420 | 4,644 | 1 / 1 |
| q05 | partial | 6,575 | 4,833 | 2 / 2 |
| q06 | partial | 2,551 | 3,543 | 3 / 2 |

Across 18 decisions: 13 supported, 3 partial and 2 unsupported. No material unsupported factual, incorrect or forbidden claim was found. q01/q02 gained coverage over the historical pilot; q03 regressed from supported to partial. q04 remained supported; q05/q06 remained partial. This is an observed retrieval/answer comparison across different corpus/strategy conditions.

q03's refinement combined mutually exclusive `--query` and `--route`. q06 did the same, then made a third CLI call. Both parser errors remain in captures and costs. The original runtime did not charge these pre-lookup parser failures, and the original harness gated runtime attempts rather than all invocations. **q06 therefore violated the predeclared two-call protocol**, despite staying within byte/section ceilings. Neither its result nor its cost was removed. q05's second call returned an explicit section-budget gap.

## Selected post-fix retests

The reviewed fix charges valid-task selection failures, returns ambiguous aliases as candidates/gap without spending evidence sections, and explicitly tells consumers to replace `--query` with `--route` when refining. V2 independently counts lookup requests, actual CLI invocations and runtime-ledger attempts. A public fixture proved that a third request is blocked even when the runtime ledger remains zero. The two live retests used a new clean installation and unchanged E/questions; original artifacts remain intact.

| Case | Independent support | Retrieval stdout bytes | Input + answer proxy tokens | Requests / CLI calls / runtime attempts |
| --- | --- | ---: | ---: | --- |
| q03 | supported | 8,212 | 5,310 | 2 / 2 / 2 |
| q06 | partial | 5,722 | 5,024 | 2 / 2 / 2 |

Each first query returned an ambiguity gap with zero sections; one explicit route refinement retrieved three sections. Both stayed within two calls and 12,288 bytes, without parser errors or intervention. q03's scoped-slot/coordination analogy is now grounded. q06's interruption and normal child-cancellation explanation is grounded, but full suspension/`launch`/`coroutineScope` scheduling and completion semantics remain a disclosed evidence gap. No forbidden claim or demonstrated material correctness error was found; this does not turn the remaining gap into support.

These are **two selected retests**, not replacements in a fabricated final six-case average. The remaining next coverage work is q05 keyboard/focus and raw-pointer versus high-level interaction contracts, and q06 scheduling/scope-completion contracts.

## Captured text and comparisons

Counts use js-tiktoken **1.0.21**, **o200k_base**, encoding each exact saved string separately, with duplicate exposure counted again. Input includes initial message, neutral brief, installed instructions, assigned question, begin and lookup stdout/stderr. Output counts the entire serialized answer file once. Final handoffs are separate because the historical baseline excluded them.

| Cohort | Retrieval bytes / proxy tokens | Captured input tokens | Answer tokens | Input + answer tokens | Separate handoff tokens |
| --- | --- | ---: | ---: | ---: | ---: |
| Historical 0.3.4 six | 57,325 / 13,768 | 28,679 | 3,954 | 32,633 | unavailable |
| Original 0.4.0 six | 33,747 / 8,041 | 19,674 | 6,915 | 26,589 | 146 |
| Selected post-fix two | 13,934 / 3,310 | 7,375 | 2,959 | 10,334 | 46 |

Both original parser errors add 84 bytes/22 proxy tokens to the reported input. Stored setup/focused-check subprocess text is separate: original 20,087 bytes/4,530 tokens; targeted 5,836 bytes/1,281 tokens, including deliberate rejected fixtures. Those are stored-text subtotals, not complete setup model exposure. Stored grading files and their hashes are also reported separately, never equated with the grader's internal read transcript.

The original runtime's predeclared route script on B emitted 17,538 bytes/4,253 tokens; the same script on E emitted 39,019 bytes/9,259 tokens. Comparing historical adaptive search/read with the scripted B arm changes strategy and support, so it is not equal-content efficiency proof. B→E includes corpus/descriptor effects. Scripted arms and fresh consumers remain separate; no old model run was repeated merely to reproduce known totals.

Host/system/tool framing, full invocation code, intermediate consumer commentary, hidden reasoning, repeated-context/cache billing, complete controller/reviewer coordination and provider usage are unavailable. These are **captured-text proxies**, not exact GPT-6, total end-to-end or billed tokens. No 20% savings, benchmark, cold-cache timing, statistical generalization or unseen 28-case-suite claim is supported.

## Verification and audit

Controller verification at `51eff3d` passed typecheck, **123 tests in 15 files**, and the separate 20-question legacy CI evaluation: **18 usable**, zero version/budget errors. The six-case pilot is not that CI suite. Existing installed English/Korean, empty/offline, legacy, stale-evidence, version, lock and budget checks were retained rather than broadly repeated.

Additional installed checks preserved fresh→failed-freshness cache fallback as `cached` with its error/timestamps, and successful local lookup under covered Node-network/git denial guards. Guards observed no covered network/git calls; they do not prove arbitrary/native networking impossible. Frozen package/input hashes, every raw/exposed stream, task chain, exact source bodies, one-hop links and remaining allowance validated. No silent truncation or private-source export occurred in these public fixtures. Source inspection establishes no app/device/accessibility/frame-performance execution result.

The separate public-only audit's final downloadable archive/checksum is finalized after whole-branch review. It contains exact captures, failures, manifests, grades and tools, plus `corpora/B.bundle`, `corpora/E.bundle` and `bundles/{original,final}/`. Duplicate caches, installed dependency trees and Git config/auth are excluded. The durable staging path is `/workspace/measurements/custom-compose-delivery-2026-11-14/audit`.

Recount saved text without re-running models: install `js-tiktoken@1.0.21` with `--ignore-scripts` in isolated tools, then use audit `original/tools/audit-recount.mjs` with `--cohort-root`, `--recorded-root`, `--tokenizer` and `--cases`. For original records, the recorded root is `/workspace/measurements/custom-compose-candidate-2026-11-14`; targeted records use `/workspace/measurements/custom-compose-targeted-retest-2026-11-14`. The wrapper relocates filenames only and preserves every recorded string, including old absolute path text. Expected input-plus-answer totals are 26,589 and 10,334 respectively.

CLI replay is different: restore the verified Git bundles as local remotes, extract the matching archive identity, and apply only documented launcher/cache/output path substitutions to the frozen command plan while retaining exact B/E pins and budgets. Model answers are sampled observations, not deterministically reproducible by replaying a model. The separate audit includes the selective inventory and detailed reproduction instructions. [Controller decisions and their costs](custom-review-decisions.md) remain tracked alongside this report. Whole-branch review is pending; no publication or merge is implied.
