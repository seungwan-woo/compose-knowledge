# Compose knowledge PoC design

The user supplied the Compose knowledge plan and explicitly requested parallel execution with appropriate models, independent review, testing, and skill usability validation. This document records implementation choices, not additional user requirements.

## Intent and scope

Provide a runnable Node 24 / strict TypeScript / Vitest CLI that turns a small public, version-pinned Compose corpus into deterministic OKF and an index. A Codex skill must retrieve and cite evidence without confusing dismissal with background click delivery. Preserve the crawler boundary: no existing crawler is available in this empty repository. A canonical JSON input adapter will accept future crawler output; fixture ingestion is not represented as crawler integration.

## Approach

Use fixture-first end-to-end implementation, then connect the original crawler when supplied. Rebuilding an unknown crawler would invent its contract; waiting for it would prevent independent progress. QMD, PDF, Insets and State remain later scope as in the supplied plan.

## Binding contracts

- `src/domain/types.ts` is the frozen shared data contract, schemaVersion 1.
- Section IDs are globally unique. Each section carries independent source attribution, conjunctive artifact requirements, related section IDs, and language aliases.
- Normalize only known Android base/platform artifact aliases. Explicit Android platform or `-android` identity is required to establish platform; never infer an unspecified platform as Android. All required artifact versions must match for a section to be `match`; mismatch takes precedence over unknown.
- Raw source excerpts, source digest, release coordinate or immutable revision, file/line range, license and attribution are retained. `Source.sha256` hashes UTF-8 excerpt bytes; separately checked upstream file/archive digests remain in acquisition provenance and revisions. Website hashing alone cannot restore historical text.
- Output consists of `knowledge/<docId>.md`, `index/sections.json`, and `manifest.json`. The manifest binds every payload file, input revisions, and schema version. No wall-clock build timestamps.
- Index entries include section bodies as a derived read cache; snapshot validation checks consistency with OKF. Data from a remote corpus is never executed.
- `searchIndex(index, query, snapshot)` returns ranked hits. `readSection(index, id, query, snapshot)` returns exactly one indexed section. API names, artifact filters, Korean/English aliases, version status and comparison mode are explicit.
- Each JSON response includes metadata within its byte cap, including newline. Search default 3 hits/3072 bytes; read default 3072 bytes; skill task total search/read output 12288 bytes and at most 3 evidence reads, including linked evidence. Repeated search counts toward total. If minimal metadata cannot fit, fail explicitly rather than emit broken JSON.
- Sync fetches a data-only Git branch, validates staged payloads before activation, stores immutable commit-SHA snapshots and atomically updates a last-good pointer. Pinned old SHAs remain readable. Offline/failure uses validated cache or returns unavailable.
- Consumer search/read accept only cache paths plus full Git SHA; they cannot assign arbitrary directory contents a supplied Git identity. Standalone build/validate commands accept directories.
- Local temporary Git remotes test sync/publish behavior. No push, remote publication, or daily schedule activation is performed by this session. Add manual workflows only with an explicit missing-crawler gate.
- Build a versioned skill+CLI bundle with runtime dependencies and a SHA256 sidecar. Test extraction and invocation without the development checkout.

## Acceptance

Run meaningful unit/integration tests, typecheck/build, deterministic double-build, invalid snapshot and concurrent/pinned-read scenarios. Freeze 20 answerable questions before tuning ranking; require evidence hit@3 >=18/20, report hit@5 diagnostically, mismatched matches zero, and per-question search/read bytes <=12288. Separate no-result and error scenarios from evidence recall.

Independently test skill usability: baseline without skill; explicit skill invocation using the installed bundle; one implementation and one PR-review scenario; unknown version and insufficient-evidence handling. Retain exact commands/tool evidence and distinguish model-based local task checks from authenticated `codex exec` and from a corporate PC not available here.

## Parallel ownership and review

Controller owns scaffolding, shared contracts, CLI integration, fixture mapping, documentation, and integration fixes. Workers have disjoint paths: corpus builder/validator, retrieval/version/budget, Git snapshot I/O. Separate source researcher, independent tester, reviewer, and fresh skill consumer. Workers never stage/commit shared work or spawn agents. Controller creates scoped commits and review packages. User's explicit parallel-execution request overrides the sequential-implementation suggestion in the generic SDD skill; file ownership prevents collisions. Existing isolated cloud checkout is used; no extra worktree.

## External limitations

Existing crawler repository is pending user input. Android Developers guide host may require a network allowance; pinned official AndroidX source can exercise unknown-release behavior without inventing a guide. No private source or credential is copied into the corpus. Local validation cannot prove live GitHub Actions publication or Android device click behavior.
