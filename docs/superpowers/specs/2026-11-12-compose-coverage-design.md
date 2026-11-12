# Broader Compose reference coverage and 08:00 KST refresh

The user requested daily execution at 08:00 Korea time and substantially more AndroidX Compose knowledge. They subsequently requested corporate clone/install instructions and token-efficient knowledge organization, permitting AI-assisted curation and suggesting Dot/scheduled tasks. Daily acquisition remains deterministic. A separate, reviewed guidance layer summarizes exact source evidence; it is explicitly distinguished from upstream content.

## Scope

Expand the existing explicitly configured sources across Compose runtime/state/effects, UI/modifiers/layout/text/graphics/input, Foundation/lazy lists/scroll/gestures, animation, Material and Material3 components, accessibility, performance and testing guides. Prefer real article bodies and Kotlin API source over navigation pages. Cover representative APIs and official practical guides across these topics rather than recursively copying the entire AndroidX monorepo. Every added URL/path must resolve and produce substantive content. The exact list remains reviewable in `config/crawl.json`.

Keep live release applicability unknown and retain the existing released fixtures. Preserve baseline IDs and source provenance. Capture the full configured source content, including license notices. Broader retrieval must be exercised with concrete questions beyond menus and popups, verifying read bodies and source URLs rather than only counting documents. Document the precise resulting document/section/body-byte totals and remaining coverage boundaries.

Run at `0 23 * * *` UTC, equivalent to 08:00 Asia/Seoul on the following calendar day. GitHub may delay scheduled jobs. Implementation changes go through a new PR; validated broader corpus data may be published under the already authorized automatic-publication policy.

## Work and acceptance

1. Independently discover and verify broader official guide targets and AndroidX Kotlin targets. Add explicit configuration entries with correct artifact, package/API identity and licenses.
2. Keep collection bounded and efficient. Change implementation only where live acquisition or retrieval evidence demonstrates a need; preserve no-op, atomic publication and data-only validation guarantees.
3. Verify multiple actual topics through installed-skill search/read and provenance, run full required checks, obtain independent review, and run the GitHub collection workflow.
4. Publish the validated expanded corpus, re-run to demonstrate no-op, and open the implementation PR with the schedule change and measured coverage. Explain that the corpus contains source text/code, while cross-source synthesis happens when the AI uses the skill.

## Corporate consumption and concise guidance

Keep root `AGENTS.md` concise and route installation details to `docs/consumer-setup.md`. Verify a fresh checkout/bundle installation into a separate consumer project's `.agents/skills`, including one sync, pinned searches/reads, internal mirror and offline-cache behavior. The consuming project must opt into the installed skill; this repository's AGENTS file is not automatically loaded in unrelated projects.

Use reviewed cards in `config/curated-guidance.json`: each card is at most 1,000 UTF-8 body bytes and binds one or two raw section IDs to their exact body SHA256. Cards copy actual source provenance and link directly to raw evidence through `relatedIds`. They retain unknown released-version applicability. Daily refresh omits a card when any bound source is missing or changed and reports `needs-review`; raw source collection continues. Never silently reuse a stale summary. No online model call or model secret is needed in GitHub Actions.

This is an implementation choice within the requested token-efficiency work: concise evidence-bound cards reduce repeated interpretation, while preserving full upstream material for deeper questions. Ranking should prefer relevant guidance and actual API declarations over incidental mentions; it must retain version priority and never return irrelevant cards merely because they are curated. Keep the existing 12 KiB output/three-read task cap and measure the same frozen consumer tasks before and after changes. This comparison measures those cases, not universal retrieval quality.

Provide a ready-to-use Dot/scheduled-agent curation prompt for changed evidence and PR review. The present session has no scheduling tool, so creating or enabling a Dot is not part of the completed automation claim. Source freshness alone cannot prove semantic correctness: authored summaries require independent review against their exact evidence.
