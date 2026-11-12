# Final review fixes

F1: Resolve filesystem remote identifiers against the caller's working directory before temporary Git operations and use the resolved identity for fetch and cached fallback. URL and SCP-style identities remain unchanged. The CLI regression runs outside the checkout, syncs a relative local remote, repeats with its absolute path, checks fallback and origin isolation, and checks the source repository for mutation. URL and SCP argument preservation is checked at the Git invocation boundary.

F2: Direct reads reject `different` version evidence unless `includeDifferent` is set. Unknown reads and cross-artifact reads with the required versions remain supported. API and actual CLI regression checks cover the gate and explicit comparison. The acceptance test's joint mismatch assertion now explicitly requests comparison, because it tests the status of intentionally different evidence; separate API and CLI cases test default rejection.

## Verification

- RED: `npx vitest run tests/retrieval.test.ts tests/cli.test.ts` failed as expected: direct mismatched read did not throw and relative CLI sync returned unavailable because Git looked for `./corpus` in the temporary repository. Two subsequent CLI tests also failed because their shared setup had stopped at the relative-sync assertion.
- GREEN: `npx vitest run tests/snapshot.test.ts tests/retrieval.test.ts tests/cli.test.ts` passed 28/28 after the fix and URL/SCP checks.
- `npm run typecheck` and `npm run build` exited 0.
- Initial `npm test` passed 45/46; the acceptance joint-mismatch assertion expected a direct read without comparison mode. With the controller's authorization, only that assertion was updated to pass `--include-different`.
- Final `npm test` passed 46/46 across six files.

Limitations: URL and SCP syntax was verified at the Git invocation boundary without contacting a remote service. The frozen evaluator was not rerun in this fix wave; the controller will run it during final evaluation.
