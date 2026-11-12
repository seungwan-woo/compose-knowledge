# Coroutine and animation retrieval usability

Twelve realistic questions and their artifact/FQN/query/selection terms were frozen before new-card inspection. [Frozen questions](evidence/animation-coroutine-questions.json) SHA256: `d9123f504b696ade21901706b0597c0c295cd4af4cbb7a881506045155780000`. Baseline public corpus SHA: `9b3d86c1dd4e03bce39df75116de8c06f1cee881`; candidate local corpus SHA: `628b1ddfb38a7ab6dff06cdf152148efba7b1465`.

**Frozen strategy improved from 2 usable / 6 partial / 4 unsupported to 7 usable / 5 partial / 0 unsupported.** Usable requires visible substantive evidence for the question, including needed raw support; a matching card title is insufficient. This is one deterministic retrieval strategy, not exhaustive coverage measurement or a real Android implementation/test.

| Question | Before → after | After bytes / reads |
| --- | --- | --- |
| 01-sequential-parallel | unsupported → usable | 9796 / 3 |
| 02-retarget-cancellation | partial → usable | 11545 / 3 |
| 03-stop-snapto | partial → partial | 10790 / 3 |
| 04-decay-remaining-velocity | unsupported → usable | 10774 / 3 |
| 05-drag-fling-interruption | partial → usable | 10515 / 3 |
| 06-manual-test-clock | usable → usable | 9437 / 3 |
| 07-event-handler-scope | usable → usable | 9997 / 3 |
| 08-animation-frame-clock | partial → partial | 9911 / 3 |
| 09-lifecycle-flow | unsupported → partial | 9988 / 3 |
| 10-snapshotflow-purity | partial → usable | 10076 / 3 |
| 11-caller-owned-suspend | partial → partial | 6528 / 2 |
| 12-cancellation-exception | unsupported → partial | 9124 / 2 |

Newly usable answers cover sequential/parallel animation orchestration, retarget cancellation of subsequent caller work, decay velocity handoff, drag/fling handoff, and snapshotFlow purity. Manual-clock and event-handler-scope answers remain usable with additional relevant guidance.

Remaining partial results are explicit. Q03 reads the complete stop/snapTo card and snapTo raw contract, but the frozen third read selects an unrelated card rather than stop raw evidence. Q08’s animation-core route does not find the frame-clock guidance. Q09 finds lifecycle guidance, but the selected raw guide omits its dependency coordinate and the alternate source read truncates in imports. Q11’s runtime route does not find Kotlin caller-ownership guidance. Q12 finds actual cancellation behavior but does not find rethrow policy through the frozen animation-core route. No frozen result was upgraded using extra calls.

Every question began with fresh sync to its configured remote and pinned the full returned SHA. Candidate fresh means fetched/validated from the supplied **local** remote, not public publication. Artifact version filters remain `unknown`; no app, module, variant or resolved dependencies were supplied.

After-run search/read stdout totals at most **11545/12288 UTF-8 bytes**, with at most three reads and links at most one hop. Full raw evidence fits the assigned budget for Q01 (two raw sections), Q02/Q05/Q07/Q10 (one each), and Q06 (two). Q04’s two raw reads truncate, but their visible text supports the requested decay/bound/velocity decision; no unseen text is cited. Q03/Q09’s required raw details are not fully reached. Compact per-question IDs, flags, assessments, and source references are preserved in the [evidence summary](evidence/animation-coroutine-usability.json). Exact stdout and the environment-specific runner were retained locally under `.cache/patterns-usability/` and are not version-controlled. These measurements are a recorded experiment, not a portable benchmark harness.

Three **separate independent routing experiments**, each with fresh sync and its own bounded budget, demonstrate the installed new topic routes without changing frozen scores or weakening version filters:

| Route | Output / reads | Result and limit |
| --- | --- | --- |
| Q08 → runtime, query `frame clock` | 6200 bytes / 2 | Full card + raw state-hoisting caveat explain composition coroutine context for DrawerState.close and its missing-frame-clock failure in viewModelScope. Relevant analogy; **partial for the exact Animatable question**. |
| Q11 → kotlinx-coroutines-core, query `caller suspend coroutineScope` | 8536 bytes / 3 | Full card + two full raws support caller ownership, awaited child work and explicit longer-lived scope. Sources discuss business/data-layer helpers; UI-helper use is an architectural application. |
| Q12 → kotlinx-coroutines-core, exact CancellationException and `rethrow cancellation` | 7786 bytes / 2 | Full card + raw Kotlin guide explicitly require rethrowing caught cancellation to preserve propagation. |

Routing sources: https://developer.android.com/develop/ui/compose/state-hoisting#caveat ; https://developer.android.com/kotlin/coroutines/coroutines-best-practices#coroutines-data-layer and #create-coroutines-data-layer ; https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md (lines 64–98). Selected card/raw IDs and exact revisions are in the compact summary.

Built and installed fresh 0.3.2 outside the checkout; archive SHA256 `11d5fb7bbf1c98ef28b0c66e6da634bcb34744c0d0c401a4689669b9e1973b12`. Installed SKILL.md is byte-identical to the preserved pre-change workflow. Installed topics add exactly five routes: UI events, lifecycle Flow, coroutine ownership/cancellation, controlled animations/gestures, and animation testing. Runner changes only the installed CLI path. This usability experiment did not execute Gradle/device/app tests or publish to the public corpus.
