# Compose Knowledge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development with user-authorized parallel, disjoint-path execution. Steps use checkbox syntax for tracking.

**Goal:** Build and independently verify a source-grounded, version-aware Compose knowledge CLI and Codex skill.

**Architecture:** Canonical crawler-input boundary feeds deterministic OKF and a JSON section index. Local CLI uses a validated immutable Git snapshot. Skill+CLI install together; data sync is independent.

**Tech Stack:** Node 24, strict TypeScript 5.9.3, Vitest 4.0.18, yaml 2.9.1, native Git.

**Spec:** `docs/superpowers/specs/2026-11-12-compose-knowledge-design.md`; original user plan attached outside checkout.

## Global Constraints

- Existing crawler is unavailable: do not claim integration or create a replacement without explicit new scope.
- Shared interfaces are `src/domain/types.ts`; changes require controller coordination.
- All source statements must preserve revision, SHA256, excerpt and licensing; never infer click delivery from dismissal.
- Version status is section-level, platform-aware, and conjunctive across required artifacts.
- Search output <=3072 bytes; read output <=3072 bytes; per-task total <=12288 bytes, valid UTF-8 JSON including newline.
- Remote corpus is data-only; pinned SHA must stay consistent across search/read; no external publication.
- Use the existing isolated cloud checkout. No extra worktree; no concurrent worker commits or overlapping writes.

## Review Focus

- Android base versus platform-resolved artifacts: normalization and absent-platform behavior in Task 3 tests.
- Partially known multi-artifact requirements: mismatch/unknown precedence in Task 3 tests.
- Malicious or inconsistent snapshots: traversal/symlink/schema/hash/index/OKF validation in Tasks 2 and 4.
- Small byte caps and Korean source text: full-envelope JSON validity/truncation in Tasks 3 and 5.
- Offline consumers and clean installation: unavailable/cache/pinned reads and independent bundle execution in Tasks 4–6.

## Dependency graph and roles

Task 1 freezes contracts and source/evaluation inputs. Tasks 2, 3 and 4 may implement in parallel with disjoint paths; Task 5 integrates them. Independent testing, task review and skill usability run as soon as their inputs exist. Task 6 is final validation and reusable environment configuration.

### Task 1: Contracts, sources, evaluation baseline

**Files:** controller scaffolding and types; researcher `tests/fixtures/upstream/`, `docs/reports/source-research.md`; tester `evaluation/questions.json`.

**Interfaces:** `KnowledgeInput` v1 feeds Task 2; documented section IDs feed Task 3 gold evaluation. No original crawler contract is presumed.

- [x] Record design decisions and initial Git state; install pinned dependencies using workspace npm cache.
- [x] Download versioned official source artifacts and verify official SHA256/SHA512; retain attributable excerpts.
- [x] Freeze 20 answerable questions and source-supported gold IDs before ranking implementation.
- [x] Map source evidence to `tests/fixtures/knowledge-input.json`; include separately attributed unknown-release evidence.
- [x] Commit scoped baseline and source inputs; obtain independent contract review.

### Task 2: Deterministic corpus build and validation

**Files:** `src/adapters/crawler.ts`, `src/knowledge/okf.ts`, `src/knowledge/build.ts`, `src/knowledge/validate.ts`, `tests/knowledge.test.ts`.

**Interfaces:** `toKnowledgeInputs(value: unknown): KnowledgeInput`; `renderOkf(doc: KnowledgeDocument): string`; `buildIndex(docs: KnowledgeDocument[]): SearchIndex`; `buildSnapshot(input: KnowledgeInput, outDir: string): Promise<Manifest>`; `validateSnapshot(dir: string): Promise<ValidatedSnapshot>`.

- [x] Write failing tests for missing provenance, duplicate IDs, unknown version preservation, deterministic bytes and round-trip index/OKF links.
- [x] Run `npx vitest run tests/knowledge.test.ts` and record RED evidence.
- [x] Implement strict input boundary, stable rendering, index and complete manifest validation; reject unsafe paths, symlinks, extra payloads and inconsistent index bodies.
- [x] Rerun targeted tests and full current suite; obtain independent spec and quality review.
- [x] Controller commits only owned paths after worker report.

### Task 3: Version-aware retrieval and bounded JSON

**Files:** `src/domain/version.ts`, `src/retrieval/search.ts`, `src/retrieval/budget.ts`, `tests/retrieval.test.ts`.

**Interfaces:** `normalizeArtifact(artifact: string, platform?: Platform): string`; `getVersionStatus(requires: ArtifactVersion[], query: SearchQuery): VersionStatus`; `searchIndex(index: SearchIndex, query: SearchQuery, snapshot: string): SearchResponse`; `readSection(index: SearchIndex, id: string, query: SearchQuery, snapshot: string): ReadResponse`; `serializeBounded(value: SearchResponse | ReadResponse, maxBytes: number): string` (includes newline).

- [x] Write failing tests for exact/sibling symbols, Korean aliases, Android coordinate aliases, conjunctive version matching, comparison-only different versions, unknown and empty results.
- [x] Run `npx vitest run tests/retrieval.test.ts` and record RED evidence.
- [x] Implement deterministic relevance with stable ID tie-breaks; maintain source attribution and required version state.
- [x] Test valid JSON/UTF-8 for 3072-byte envelopes and explicit failure for impossible caps; include repeated output accounting in evaluation.
- [x] Run current suite; independently review and controller commit.

### Task 4: Immutable Git snapshot sync

**Files:** `src/io/snapshot.ts`, `tests/snapshot.test.ts`.

**Interfaces:** `syncSnapshot(options: SyncOptions): Promise<SyncResult>`; `getSnapshotPath(cacheDir: string, snapshot: string): string`. Imports Task 2 `validateSnapshot`.

- [x] Write failing tests using temporary local Git remotes for fresh/offline/cache-empty/invalid-update/network-failure/pinned-old-SHA and concurrent sync/read.
- [x] Run `npx vitest run tests/snapshot.test.ts` and record RED evidence (Task 2 dependency may initially be absent).
- [x] Fetch without executing remote files, stage commit contents safely, validate, atomically activate; retain prior immutable snapshots and isolate cache remote identity.
- [x] Verify staged invalid source cannot replace last-good and old SHA remains readable while branch advances.
- [x] Run full current suite; independent reviewer checks concurrency and integrity; controller commits.

### Task 5: CLI, installable bundle, Codex skill and automation

**Files:** controller `src/cli.ts`, `scripts/{evaluate,bundle,install}.mjs`, `README.md`, `.github/workflows/{ci,refresh}.yml`, `tests/cli.test.ts`; skill author `.agents/skills/compose-reference-context/SKILL.md` and supporting runtime launcher.

**Interfaces:** CLI `build --input --out`, `validate --dir`, `sync --remote --cache --offline`, `search --snapshot --cache|--dir --artifact --version --platform --symbol|--query --limit --max-bytes --json`, `read --snapshot --cache|--dir --id --max-bytes --json`. Additional artifact versions accepted as repeatable `--require artifact=version`.

- [x] Write failing CLI tests for JSON response/exit status, invalid args, unsafe ID/path, sync fallback and source/requirement context in read.
- [x] Implement CLI command dispatch without shell string interpolation; run commands through real subprocess tests.
- [x] Produce portable versioned bundle (CLI, runtime yaml dependency, skill) and SHA256; test checksum/extraction and install into temporary skill directory.
- [x] Run a fresh-context no-skill baseline before writing the skill. Author skill for observed gaps, with version resolution, one sync per task, explicit offline state, pinned SHA, 3-read/12288-byte accounting and sourced conclusions.
- [x] Fresh consumer invokes the installed skill for implementation and review; retain tool command transcripts and bounded output. Attempt authenticated `codex exec --json` when runtime permits and report precise limitations.
- [x] Add CI and manual refresh workflow with explicit external-crawler gate; never activate daily publication for fixture-only build.
- [x] Obtain independent task review, fix findings, and commit scoped changes.

### Task 6: Independent acceptance, final review and environment handoff

**Files:** tester `tests/acceptance.test.ts`, `docs/reports/acceptance.md`; controller README/report/ledger and cloud draft configuration.

**Interfaces:** invokes installed CLI, public APIs and frozen evaluation only; no implementation-internal assertions.

- [x] Independently run clean install/build/tests, two deterministic corpus builds, sync/fallback/concurrency and clean-bundle install.
- [x] Run 20-question top3 and top5 evaluation; record all outcomes, source validity, byte counts and p50/p95 separately from sync.
- [x] Whole-branch reviewer reports separate compliance and quality verdicts; fix important findings and reverify affected behavior.
- [x] Save tested reproducible install/start instructions to cloud environment draft, preserving repository settings and network rules.
- [x] Report verified local capabilities, actual skill usability results, remaining original-crawler/GitHub publishing/PC/device limitations. No push or publication.

## Execution outcome

All local fixture-first tasks above are verified. This does not complete the original plan’s operational crawler integration, live GitHub corpus publication/scheduling, corporate-PC Codex validation or Android device checks. See docs/reports/completion.md for remaining external gates.
