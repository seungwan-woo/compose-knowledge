# Compose coverage, concise guidance and corporate installation

## Published data

The validated data was published to the public `corpus` branch at [`11d0d4a17ef74dce5788f73684ef5a432ea9c1b8`](https://github.com/seungwan-woo/compose-knowledge/tree/11d0d4a17ef74dce5788f73684ef5a432ea9c1b8). Its preceding snapshot was `5ccb33ed852f0f8c9ff523f78c7e4769bb7c56e2`.

| Measure | Previous | Expanded |
| --- | ---: | ---: |
| Documents | 13 | 187 (158 source documents, 29 guidance cards) |
| Sections | 173 | 2,848 |
| Actual body/code UTF-8 bytes | — | 3,685,383 |
| Search index bytes, including repeated provenance | — | 12,705,125 |

The publication added 2,675 sections with no updates or removals. It contains real article text, code and examples, rather than only URLs. The configuration has 65 official HTML guides, 88 AndroidX Gitiles sources/guidelines and one GitHub sample README, plus one explicitly monitor-only Material 3 Angular page. This is representative configured coverage, not a recursive crawl of all AndroidX APIs or sample Kotlin files. Existing released-version evidence remains; live sources and curated guidance retain unknown released-version applicability.

The final candidate derives from a successful live collection of all 154 required sources. After that collection, the final reviewed padding card was applied deterministically to those validated raw sections; raw body/provenance was not edited. All 29 guidance cards were included with exact source body hashes. The production publisher validated the candidate and required the remote branch to match its acquisition base before a normal fast-forward push.

## Quality and token budget

- Independent source discovery verified 60 additional official guides and 85 additional Kotlin files. See [guide discovery](guide-coverage-discovery.md) and [AndroidX discovery](androidx-coverage-discovery.md).
- [Code review](coverage-review.md) caught false aliases caused by foreign imports; regression coverage and an actual `Dp.kt` replay confirm the fix.
- [Guidance review](guidance-review.md) independently checked all 29 cards against 42 bound raw evidence references, including precise API identities. Every complete card read fits the 3,072-byte CLI response cap without truncation. Changed or absent evidence suppresses the card until re-reviewed, while preserving raw knowledge.
- The [installed consumer comparison](coverage-usability.md) preserves 14 frozen questions, including failed and partial baseline cases. It distinguishes retrieved guidance, read raw evidence and remaining limitations. Bytes are measured stdout, not a tokenizer-derived cost estimate.
- Root [AGENTS.md](../../AGENTS.md) routes to [corporate setup](../consumer-setup.md), rather than loading corpus content. An independent installation check built into private staging, installed a checksummed bundle outside the checkout, ran the installed launcher and verified non-destructive overwrite refusal. All nine documented Bash blocks parsed successfully. This is Linux environment verification, not a claim that an actual corporate PC was tested.

## Verification

`npm run typecheck` and all **84 tests in 10 files** passed after the final runtime changes. The frozen 20-question fixture regression retained 18/20 usable top-three results and 20/20 top-five candidates, with zero version errors and zero output-budget violations. Top-five candidates are not a claim that all can be read within the three-read limit. This fixture regression is separate from the broader live consumer comparison.

A fresh installed 0.3.0 launcher synced the actual public snapshot above (`fresh`, checked at `2026-11-12T11:33:44.731Z`). Exact `LaunchedEffect` search plus full guidance read used 3,360 stdout bytes, returned `unknown` version status and no read truncation. Offline sync reused the same verified snapshot with `cached` status.

The expanded raw collection was fetched twice against a real local Git publication. The second fetch reported zero added/updated/removed sections; the production publisher returned `changed:false` and retained SHA `b8129d0f1569ca017d6dc3e3f00dc127d1422543`. A further full live refresh against the actual public guided corpus also reported zero added/updated/removed sections and included all 29 cards. GitHub CI and collection-run links are recorded in the implementation PR.

## Operation

The workflow uses `0 23 * * *` UTC, equivalent to 08:00 Asia/Seoul the following day. Broader collection uses paced Gitiles requests and bounded retries honoring `Retry-After`; observed rate limiting drove this change. The implementation PR must be merged to activate this source list, guidance integration and schedule on the default branch. Until then the previous default-branch collection configuration remains active.

GitHub Actions performs deterministic extraction and source-hash checks without an LLM API. The 29 summaries were AI-assisted and independently reviewed in this work. [Dot curation instructions](../dot-curation.md) describe a separate changed-evidence, PR-only workflow. No Dot or ChatGPT scheduled task was created: the session has no scheduling tool, and the linked product pages could not be accessed through this environment's network policy.
