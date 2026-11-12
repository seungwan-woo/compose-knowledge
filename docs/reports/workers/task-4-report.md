# Task 4 report

Implemented immutable SHA snapshot sync and safe SHA path lookup. Git fetches into an isolated temporary bare repository with hooks disabled, no shell, restricted transports and sanitized configuration; tree entries are checked before regular blobs are materialized. The candidate is validated before an atomic directory rename and pointer update. Existing SHA directories are retained and checked against the fetched manifest. Offline and failed updates use a validated last-good pointer only for the matching remote and ref; offline without a remote can read the last-good pointer.

Tests use temporary local Git repositories and the actual corpus builder and validator. They cover fresh/offline/empty cache, invalid updates and unavailable remote, origin isolation, concurrent sync and old pinned reads, unsafe SHA/ref, symlink updates, conflicting valid payloads, and corrupt cached data.

- Initial RED: `npx vitest run tests/snapshot.test.ts` failed because the concurrent builder module was absent; the validator was subsequently also absent. This was a dependency-resolution failure, not a behavioral assertion.
- Additional behavioral RED: the conflicting valid payload test failed because sync returned `fresh`; after the integrity check it passes.
- `npx vitest run tests/snapshot.test.ts`: 8 passed.
- `npm test`: 3 files, 19 tests passed. An earlier run failed while the retrieval worker's `src/domain/version.ts` was absent; it passed after that dependency arrived.
- `npm run typecheck`: passed.

These local Git tests do not demonstrate live GitHub publication. Independent concurrency and integrity review remains with the controller.

## Integration follow-up

The earlier default of `main` disagreed with the frozen `corpus` branch contract; the Git subprocess environment had also discarded inherited proxy, certificate and authentication configuration, and temporary empty repositories prevented incremental fetches. The default now is `corpus`, Git inherits its environment with noninteractive and no-replacement safeguards, and verified fetched objects are retained with atomic hard links for reuse by independent temporary fetch repositories. Pack files are linked before their indexes, allowing concurrent syncs to reuse only fully published objects. Existing SHA directories are still compared to the freshly fetched manifest before activation.

RED: `npx vitest run tests/snapshot.test.ts` failed the default-ref and repeat-fetch tests before these changes (both returned unavailable under the old default). GREEN: targeted suite 11 passed, including a Git wrapper that confirms synthetic HTTPS proxy and CA variables reach Git and a packet-trace test showing a repeat fetch does not request the previously fetched commit. `npm test` before the additional environment test passed 21 tests; `npm run typecheck` passed. The environment wrapper test uses only synthetic values.

A later `npm test` picked up newly added `tests/acceptance.test.ts`: its seven tests failed because `dist/cli.js` did not exist yet; the other 22 tests passed. Controller owns CLI/build integration and should rerun those acceptance checks after build.

## Independent review follow-up

Two behavioral regressions first failed: offline returned a substituted, internally valid corpus under the wrong SHA, and a conflicting B directory prevented fallback to intact A. Snapshot sync now records the fetched manifest's SHA-256 outside the payload under `identities/<commit>` with atomic create-only linking. `validateCachedSnapshot(cacheDir, sha)` validates both the payload and its recorded identity; consumers must use this export for pinned reads. Candidate conflicts use the regular validated last-good fallback. This guards accidental corruption and payload substitution; a local actor able to rewrite both payload and identity metadata can defeat the check.

A third RED showed inherited `GIT_DIR` changed an unrelated repository's `core.bare` setting. Git subprocesses now remove repository-location and related variables while retaining proxy, CA and authentication environment configuration. The regression checks that the unrelated config remains non-bare and no FETCH_HEAD is written there.

After fixes: targeted snapshot tests 14 passed and `npm run typecheck` passed. A full-suite run initially failed two suites at build due to an environment typing error introduced in this round; that was corrected. A subsequent full run showed the snapshot, knowledge and retrieval suites passing, and the new CLI substituted-payload test failing while the controller's CLI consumer change is pending.
