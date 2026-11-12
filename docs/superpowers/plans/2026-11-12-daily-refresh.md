# Daily Refresh Implementation Plan

> **For agentic workers:** Use independent acquisition and publication workers, then independent review and testing. The user already selected parallel delegation and automatic corpus publication.

**Goal:** Verify merged behavior and deliver a daily, validated public knowledge update pipeline.

**Architecture:** Acquire live sources into the existing KnowledgeInput contract, build and validate a deterministic staging snapshot, then publish only changed data to `corpus` in a separate permission-scoped job.

**Tech Stack:** Node 24, TypeScript, Vitest, parse5 for HTML, Git, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-11-12-daily-refresh-design.md`.

## Global constraints

- Schedule `0 23 * * *`; separate collection and publishing jobs.
- Existing schemaVersion 1, unknown release applicability for live main/web sources.
- Strict validated data-only corpus; never force push; unchanged input produces no commit.
- Explicit Material 3 monitor-only status; required acquisition errors block publication.

## Review focus

- Volatile navigation or unrelated upstream commits must not cause data churn.
- Empty HTML and script-only shells must not masquerade as knowledge.
- Web hashes must not be presented as immutable Git commits or released versions.
- Corrupt artifacts and concurrent remote updates must not replace valid corpus.
- Installed skill must work with remote corpus and pin the returned SHA.

### Task 1: Live acquisition

Files: `src/refresh/crawl.ts`, `src/refresh/extract.ts`, `config/crawl.json`, `tests/crawl.test.ts`.
Produces `crawlSources(config, baseline, previous?, fetchText?) -> Promise<{input: KnowledgeInput, sources: SourceStatus[]}>`; shared types in `src/refresh/types.ts`.

- [x] Write failing extraction/acquisition tests for stable normalized text, provenance, unknown versions, shell/error rejection and failure propagation.
- [x] Implement bounded document/Git acquisition and preserve previous unchanged evidence.
- [x] Run targeted tests and real HTTP acquisition; retain source results.

### Task 2: Publication and Actions

Files: `src/refresh/publish.ts`, `scripts/refresh.mjs`, `scripts/publish-corpus.mjs`, `.github/workflows/refresh.yml`, `tests/publish.test.ts`.
Produces `publishSnapshot({snapshotDir, remote, ref?}) -> Promise<{changed:boolean,snapshot:string,changes:ChangeSet}>` and `diffSnapshots(previous,current) -> ChangeSet`.

- [x] Write failing real local-Git tests for initial publish, no-op, updates/removals, corrupt input and concurrency.
- [x] Implement validated fast-forward-only publication; add collection orchestration and run summaries.
- [x] Replace manual gate with daily/manual workflow; publish only on default-branch execution, preview on feature branches.
- [x] Verify source artifact upload/download and permission separation.

### Task 3: Skill, documentation and acceptance

Files: `.agents/skills/compose-reference-context/SKILL.md`, `README.md`, `docs/reports/daily-refresh.md`, independent integration tests.

- [x] Verify merged Actions and an independently installed skill.
- [x] Document canonical production remote, daily freshness and monitor-only coverage.
- [x] Run full tests, typecheck/build, frozen evaluation and two live refreshes; obtain independent review and fix findings.
- [ ] Push implementation branch, open PR, verify CI and live preview. Leave merge to the user.
