# Component knowledge usability comparison

The 14 frozen implementation/review questions improved from **4 usable / 8 partial / 2 unsupported** to **6 usable / 7 partial / 1 unsupported**. The clearest new complete answers are the one-measure layout contract and labeled accessibility actions with child semantics clearing. Remaining gaps below are explicit; adding cards does not imply complete coverage.

This is a fixed-question comparison with recorded evidence selection by an AI tester, not a deterministic ranking benchmark or Android app validation. Questions and the original executed retrieval protocol were frozen before candidate access; their local hashes and every baseline ledger hash remain unchanged. No private component repository, app dependency resolution, Gradle execution, Android device, or target-app tests were available. All app module/variant/artifact versions and released applicability remain unknown.

## Inputs and verification

- Baseline with 47 cards: local remote `.cache/patterns-reviewed/remote.git`, snapshot `628b1ddfb38a7ab6dff06cdf152148efba7b1465`, installed bundle 0.3.2.
- Candidate: local remote `.cache/component-audit/reviewed/remote.git`, snapshot `6237d0eba6a6d1f8bb38c115af3eefa0f7c7c348`, installed bundle 0.3.3.
- Each of 28 strict questions began with an online sync: all were `fresh` at their expected full pin. Every subsequent search/read used that pin.
- Hard limits passed: <=12288 UTF-8 search/read stdout bytes, <=3 reads, <=3072 bytes per response, <=1 hop from direct hits. Maximum baseline 12,237 bytes; candidate 11,562 bytes. Raw outputs, timestamps, commands, byte counts, source URLs/revisions/paths/lines/hashes and truncation are retained locally.
- Fresh 0.3.3 installed outside checkout; `references/components.md` ships at 2,585 bytes. Its SKILL, launcher and all compiled runtime files are byte-identical to 0.3.2; version metadata and routing references differ.
- Most searches explicitly truncate at 2,048 bytes. All read responses report `truncated:false`; some stored sections still end mid-sentence/code. No unseen continuation supports a judgment.

## Frozen-question results

| Question | Before → after | Candidate bytes / reads | Visible result or remaining gap |
|---|---|---:|---|
| q01 | usable → usable | 10381 / 3 | New parameter-contract card and API-guideline raw verify name and first optional position; Modifier.kt raw verifies empty default and whole-component application. For the stated single-root question this supports root use, although explicit root-node API-guideline wording is no longer in the top 2 retrieved hits. |
| q02 | partial → partial | 11562 / 3 | Frozen provider FQN/intent searches return the same source chunks as baseline. Provider scope/default and dynamic tracking are visible; nearest nesting and full static-provider invalidation remain unseen. |
| q03 | unsupported → partial | 6464 / 2 | New custom Material adapter card and raw show explicit container/content colors, shapes and ProvideTextStyle. Neither returned passage establishes LocalContentColor propagation through a custom surface or custom text/icon consumption. |
| q04 | partial → partial | 8092 / 2 | New ModifierNodeElement card plus raw now establish create, in-place update, immutable element, reuse and equals/hashCode triggers. Retrieved evidence explicitly excludes attachment/detachment/resource cleanup, leaving that part unanswered. |
| q05 | partial → usable | 9888 / 3 | Measure-once card and both bound raw passages establish parent min/max constraints and exactly one child measurement; the intrinsic guide explicitly says twice throws. All decision-critical parts are visible. |
| q06 | usable → usable | 3792 / 2 | Exact relative-placement card plus raw layout-direction passage distinguish absolute place and direction-sensitive placeRelative, with avoiding double mirroring when computing coordinates manually. |
| q07 | unsupported → unsupported | 4095 / 0 | Frozen foundation clickable plus touch-target intent still return gesture abstraction/tap-consumption or BasicText hits; no touch expansion/layout allocation evidence is retrieved. |
| q08 | partial → partial | 11476 / 3 | Focus card plus source1–35 and71–105 support remember, attachment, event timing, success/cancellation. Card explicitly declines to establish custom-control modifier ordering. |
| q09 | partial → usable | 8429 / 3 | Custom-actions card plus its two raw sections show labeled callbacks returning true after the operation, container action grouping, and explicit child clearAndSetSemantics after transferring actions. Assistive-technology execution remains separate. |
| q10 | usable → usable | 7069 / 3 | Strong-skipping card plus raw when-skip/composable-skippability sections establish unstable-parameter eligibility, identity versus Object.equals, and restartability limits. |
| q11 | partial → partial | 9855 / 2 | Frozen runtime Stable query still yields baseline lifecycle/fix passages, not exact Immutable declaration; precise Immutable promise remains unverified. |
| q12 | partial → partial | 10028 / 2 | Frozen animation-core Animatable/frame-clock query still yields scope example and animateTo KDoc without MonotonicFrameClock requirement. It does not establish arbitrary-coroutine success/failure or a blanket prohibition on non-Compose scopes. |
| q13 | partial → partial | 7374 / 2 | Frozen runtime-saveable starting context still yields saved-state size guidance and Saver chunks; StateRestorationTester simulation/lifecycle boundaries remain unseen. |
| q14 | usable → usable | 10456 / 3 | Same derived-state card and raw threshold source plus raw remember sorting/key-equality passage support the decision. New expensive-work card makes its bound raw source reachable within the same three reads; unfinished source continuation is not cited. |

## Two separate routing diagnostics

After the strict scores were frozen, the installed component-route table was read and exactly two independent candidate-only diagnostics were run. They do not change the strict score or count as a baseline/candidate comparison. Each started with its own fresh online sync and retained its own hard budget; their evidence is not silently combined into a fourth strict read.

| Original question | Route from shipped reference | Diagnostic result |
|---|---|---|
| q07 touch allocation | `foundation-layout`, FQN `androidx.compose.foundation.layout.sizeIn` | Usable within 10,240 bytes / 3 reads: touch-target card and both bound raw sections establish expansion outside bounds, allocating enough space to avoid overlap, sizeIn minimums, and Material minimumInteractiveComponentSize allocating layout space rather than expanding the target. |
| q13 restoration boundary | `ui-test-junit4`, FQN `androidx.compose.ui.test.junit4.StateRestorationTester` | Card plus raw guide directly establish simulating composable recreation for rememberSaveable without actual Activity recreation. This resolves the core simulation boundary; it does not independently establish serialization limits or actual process/lifecycle behavior, so the full original question remains partial in this standalone diagnostic. |

Both diagnostic ledgers passed the same pin/freshness/byte/read/hop verifier. These results show that artifact routing matters: the frozen clickable and rememberSaveable starts do not discover the cards under their respective artifacts.

## Limits and reproducibility

The committed protocol corrects the original's “human” terminology: the AI tester selected evidence. This editorial correction changes no retrieval actions or scoring rules; the original frozen protocol and its hashes remain locally.

The original strategy prose conservatively described a 2,048-byte third-read reserve after two searches. The executed runner instead reclaims actual unused bytes with `min(3072,12288-bytes_so_far)`; q02/q05/q09 baseline third reads used this allowance and remained under the hard limit. q09 baseline read the more specific custom-actions raw passage before a generic semantics card. These exact actions were recorded before candidate access in `executed-strategy.md` and `baseline-selection.json`, and the same relevance-oriented choice and actual-byte reservation rules govern the candidate. No baseline rerun was used to erase the discrepancy.

A card may improve discoverability yet displace another useful top 2 hit: q01 now uses 3 reads instead of 2, and its explicit root-node API-guideline paragraph is no longer retrieved; the visible Modifier.kt whole-component contract supports the stated single-root question. q14 reaches the raw remember passage through the new card's one-hop link without spending a read on that extra card.

Use `run.mjs` with a JSON configuration supplying CLI path, consumer cwd, question path, remote, expected SHA, cache and output; the runner contains no ephemeral installation path or hardcoded corpus section IDs. Start into a new output directory, use the fixed FQN search, optionally refine with the stored query, then select evidence under the recorded rules. `verify.mjs CONFIG` validates raw byte counts, pre-call reservation, full pins, freshness, read count and one-hop eligibility. Exact IDs and evidence selection remain a documented AI-tester judgment, not an automatic ranking rule.

Committed artifacts: [questions](evidence/component-usability/questions.json), [executed protocol](evidence/component-usability/executed-strategy.md), [runner](evidence/component-usability/run.mjs), [verifier](evidence/component-usability/verify.mjs), and [compact evidence](evidence/component-usability/comparison.json). Original protocol prose, freeze hashes, exact selection traces, installation verification, and raw stdout remain under `.cache/component-audit/usability/` locally. A rerun needs a corpus remote preserving the configured expected SHA; current upstream content does not recreate a historical local candidate.
