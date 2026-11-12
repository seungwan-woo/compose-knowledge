# Lazy layout guidance extension

## Scope and prior decisions

This manual knowledge extension follows merged PRs [#3](https://github.com/seungwan-woo/compose-knowledge/pull/3), [#4](https://github.com/seungwan-woo/compose-knowledge/pull/4), [#6](https://github.com/seungwan-woo/compose-knowledge/pull/6), and [#7](https://github.com/seungwan-woo/compose-knowledge/pull/7): concise English cards, exact raw-evidence hashes, unknown released-version applicability, sync-first retrieval, and review before integration. It is not a daily changed-evidence repair. The 47 existing cards remain unchanged; stable item keys already have their own card.

Add two narrowly scoped cards using existing collected evidence:

| Card | Guidance | Official evidence |
| --- | --- | --- |
| `guide-lazy-content-type-reuse` | Group composition reuse by content structure; no measured speedup claim or item-identity claim. | [contentType](https://developer.android.com/develop/ui/compose/lists#content-type) |
| `guide-lazy-placeholder-size` | Avoid zero-height initial items and keep approximate placeholder/loaded sizes consistent. No universal dimension. | [Avoid 0-pixel items](https://developer.android.com/develop/ui/compose/lists#avoid-0-size-items) |

No collector inputs, executable logic, schedules, secrets, distribution version, or publication policy change. Consumer artifact versions are not supplied; applicability stays `unknown`.

## Pinned evidence

- Successful source collection: [run 43231243997](https://github.com/seungwan-woo/compose-knowledge/actions/runs/43231243997), on main `7a4e864b0f67b513992fd6be7e63afa089ef136f`.
- Online sync returned `fresh` snapshot `17c7e27471ad8b63102af89159556e981856f46c`; checkedAt `2026-11-12T14:09:33.294Z`, publishedAt `2026-11-12T13:53:51Z`, as reported by the CLI. These are not asserted to be the source page update date.
- Both source records use revision `web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77` and preserve their recorded `Apache-2.0 (https://developer.android.com/license)` provenance. This change does not independently relicense upstream content.
- `live-compose-guide-lists-content-type`: body SHA256 `1f665e3d84d2ca48c0881090d7575f00c1a74a8161988325af83a0b443c05ca9`.
- `live-compose-guide-lists-avoid-0-size-items`: body SHA256 `c63bda9f8093c8ed968611c282e3e2ff98e100f67548916e7f67242a53c889f1`.

These are new bindings, so no old hashes are replaced. Two searches plus two complete section reads emitted 7,072 UTF-8 bytes, below 12,288 bytes and three reads. Source bodies came from the verified published snapshot, not a new full live crawl.

## Validation

On Node 24, `npm ci --ignore-scripts --cache /tmp/compose-npm-cache`, `npm run build`, `npm run typecheck`, and `npm test` passed: 87 tests across 11 files, including existing bundle/installation/launcher tests. An initial install failed because the default npm cache was unwritable; using a writable cache resolved it without changing dependencies.

A local candidate was built with `applyCuratedGuidance` and `buildSnapshot`, then checked with `validateSnapshot`. Raw documents were reconstructed from the pinned validated index, excluding existing curated documents. Assertions verified:

- All 49 configured cards included, exactly two new sections.
- All 2,963 previous section records unchanged, including the existing 47 guidance cards.
- New card provenance equals its bound source provenance; all requirements retain null versions.
- Deliberately changing both source bodies suppresses exactly the two new cards as `needs-review`.

The candidate was not published. This validates the cards against the pinned corpus, not live site availability or Android runtime performance. No target-app benchmark, device test, new full collection, or fresh installed-consumer comparison was run. After review and merge, the normal successful default-branch collection/publication is required for consumers to receive these cards.

Independent read-only review approved both cards without findings. The reviewer independently recalculated both body hashes, checked each 483-byte guidance body against its source, verified Foundation/LazyColumn routing, and validated preservation of all 2,963 existing sections plus exactly two additions. Human repository review remains required before merge.
