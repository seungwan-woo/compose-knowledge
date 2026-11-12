# Local PoC implementation results

The user's plan was split into fixed contracts and file ownership for parallel implementation. The result is a local PoC using official AndroidX fixtures, not completed production collection or publication.

| Role | Model | Scope |
|---|---|---|
| Implementation | GPT-6.1 Terra | OKF/validation, search/version/budgets, Git cache, CLI; final fixes consolidated under one owner |
| Independent review | GPT-6 Astra | Contract and task reviews, plus a full review in fresh context |
| Research, testing, usability | GPT-6.1 Sol | Sources/checksums, fixed questions/acceptance tests, consumer without the skill, consumer with a freshly installed skill |

## Validation

- Installed pinned dependencies on Node 24; typecheck, build, and all 46 tests passed.
- Preserved nine evidence sections from public AndroidX sources verified against official checksums, including provenance, excerpts, and licenses.
- Fixed 20 search questions before implementing ranking: top-three hits 18/20, top-five hits 20/20. The same lexical `rg` baseline scored 15/20 and 18/20.
- Zero incorrect version labels or budget overruns; largest retrieval flow: 11,633 bytes. Two sources with unknown version applicability appeared in the top five but not the top three.
- Independent execution tests covered a real Git remote/cache, offline use, failures, invalid new data, concurrent processes, reads of an older SHA, and UTF-8 boundaries.
- A consumer without the skill also succeeded. A fresh consumer then used only the installed skill for implementation/review outside the checkout: 11,309/10,882 bytes, three reads each, pinned SHAs, and preserved unknown versions. This does not establish an improvement caused by adding the skill.
- Fixed ten important independent-review findings before final specification and quality approval. Reinstalled the final bundle and checked core behavior.

## Deliverables

- README.md: getting started, search, installation, and validation commands.
- docs/superpowers/plans/2026-11-12-compose-knowledge.md: work units, interfaces, and validation criteria.
- .agents/skills/compose-reference-context/SKILL.md: the skill actually tested.
- docs/reports/skill-usability.md: independent consumer commands, bytes, citations, and conclusions.
- docs/reports/final-review.md: full review and final approval.
- .cache/release/compose-reference-context-0.1.0.tar.gz and .sha256: final installation bundle.
- docs/reports/release-smoke.json: post-installation validation of the final bundle.
- config/sources.json: eight official collection targets supplied by the user.

## Outstanding external integration

The existing TypeScript crawler code was not supplied. The eight supplied links were registered as collection targets, and read access to the GitHub samples was confirmed. The other seven URLs were blocked by proxy CONNECT 403, so source collection, licensing, and version mapping remain unverified.

The cloud environment draft saved the tested install_script/start_skill and proposed allowlist additions for developer.android.com, android.googlesource.com, and m3.material.io. Saving the draft did not apply access changes or publish the environment. The settings must be reviewed, saved, and published before rechecking affected connections.

Actual corpus-branch publication and the daily schedule were not enabled. refresh.yml is a manual gate that explicitly fails until the crawler, validation, and publication are connected. Installation on a corporate PC and Android device behavior were not validated. Standalone `codex exec` in this environment failed during read-only app-server initialization; distinguish that failure from the fresh agent's skill usability validation.

Commits were preserved on the existing isolated work branch without an additional worktree. No GitHub push, merge, or environment publication was performed.
