# Task 2 report

Status: DONE_WITH_CONCERNS (integration suite fixture and independent review pending controller coordination).

Implemented canonical v1 JSON validation, duplicate/document/section/link and conjunctive requirement checks, excerpt SHA-256 verification, stable lossless OKF rendering, sorted index and reproducible manifests. Snapshots include the full AndroidX Apache license as a generated payload; source records and excerpts remain in the index and OKF. Validation checks the actual file tree, rejects symlinks and unexpected paths/files, validates hashes, reconstructs and validates the input from index entries, compares every OKF document and input revision list, and checks the license bytes. No legacy crawler integration is claimed. Builds require an empty output directory.

Evidence:
- RED: `npx vitest run tests/knowledge.test.ts` exited 1 with missing `src/adapters/crawler.js` before implementation (suite could not import absent module).
- GREEN: `npx vitest run tests/knowledge.test.ts` exited 0, 6 tests passed, including unknown versions, deterministic bytes, round trip, tampering with rehashed index, duplicate IDs, provenance, dangling IDs, duplicate requirements, unsafe paths and symlinks.
- `npm run typecheck` exited 0.
- `npm test` exited 1: all 7 tests in `tests/snapshot.test.ts` failed on `Invalid source digest`, because that separate worker's fixture predates the coordinated excerpt-hash convention. Controller notified; a rerun is necessary after that fixture is updated.

The root task coordinates independent spec/quality review; none was performed by this worker. Source SHA means the digest of excerpt UTF-8 bytes per controller clarification; source file/archive digests are carried separately in revisions/provenance. A SHA and license declaration validate integrity and presence, not truth of upstream attribution. This is not a crawler implementation.

## Review fix round 1

- RED: `npx vitest run tests/knowledge.test.ts` exited 1 with three regressions: missing YAML frontmatter, omitted code line provenance accepted, and arbitrary `-android` coordinates collapsed. After the fix it exited 0 with 9 tests passed. Separate attribution RED: the same command failed because `ATTRIBUTION.md` was missing; GREEN: 9 passed after implementation.
- OKF documents now contain YAML frontmatter with required document metadata, complete source records and Compose section metadata, including requirements and source IDs; body section source links join to those IDs. Snapshot validation compares the complete generated OKF bytes with its index-derived rendering.
- Code and test source records require HTTP(S) locations, paths and line ranges; guide URLs require anchors. Revisions must be full Git SHA or release coordinate with SHA-256 archive digest; source IDs may repeat only with identical metadata. Only the two documented AndroidX alias pairs are normalized.
- `ATTRIBUTION.md` is generated, hashed and validated, with source locations/revisions/licenses and original AndroidX fixture notices from the distributed source headers; full Apache text is retained. The input still cannot independently prove the truth of declared copyright, upstream archive identity, or source excerpt provenance.
- `npm run typecheck` exited 0. Fresh `npm test` exited 0 (5 files, 41 tests), including the real released-source corpus. An earlier simultaneous suite run showed two transient snapshot tests failing while other work was concurrent; the subsequent standalone run passed.
