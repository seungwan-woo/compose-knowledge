# Daily refresh verification — 2026-11-12

PR #1 was merged at `8342c8b2f8c413169826768b0f553b70bb7f5d62`. Its pull-request check and the [post-merge main run](https://github.com/seungwan-woo/compose-knowledge/actions/runs/43196410405) both succeeded. The previous refresh workflow was a deliberate failing gate, not an operating crawler.

## Installed skill

The controller built and installed a bundle from an archive of that exact merged commit. An independent consumer used the installed launcher from outside the checkout, synced once, pinned the returned Git SHA, and retrieved the menu API, caller-state sample and popup routing evidence. Search plus three complete reads used 11,150/12,288 bytes. Unresolved target dependency versions remained unknown. Offline lookup retained the same snapshot. This proves the installed local-fixture workflow, not Android runtime behavior or live corpus publication. An earlier consumer on a stale executor was excluded from post-merge evidence.

Version 0.2.0 adds explicit public-remote and freshness guidance. The installed distribution test now exercises sync/search/read/offline in addition to install/help/build. See [independent acceptance](daily-acceptance.md) for the retained executable and model-consumer evidence.

## Implementation verification

- Final local typecheck/build and 66 tests across nine files passed after the source-fidelity fix.
- The frozen retrieval evaluation still returns 18/20 top-three usable hits, 20/20 top-five candidate hits, 18/20 usable hits within the three-read cap, zero version errors and zero budget violations; maximum 11,633 bytes.
- Post-fix live acquisition produced 173 total sections: the nine retained baseline sections plus current evidence from nine ingested entries. Material 3 is an explicit tenth monitor-only entry; its Angular article body is not ingested.
- Production publication tests exercise real bare Git, unchanged data, additions/removals, corrupt candidates/remotes, inaccessible remotes, stale collection bases and concurrent writers. Independent end-to-end tests exercise crawler, builder, publisher and executable consumer including old-SHA reads and last-good fallback.
- Independent review found a syntax-highlighted Kotlin extraction defect. Text-node concatenation and preformatted line preservation now retain arrows, interpolation and comments; the regression test failed before the fix and passed after it. The reviewer independently verified the actual menu page. [Review](daily-review.md): no open findings.

## Operation and remaining activation

Implementation changes are delivered through a PR. The `17 0 * * *` schedule starts after merging to the default branch. Collection has read permission; the separate publication job has contents-write permission and runs only on default-branch scheduled or explicitly requested runs. Public data is validated again before a normal non-forced push. The collection-base SHA prevents a newer corpus from being overwritten by an older prepared result.

The configured scope is bounded, not recursive: registered documentation articles, the additional menu guide, AndroidX Menu/Popup sources and API guidelines, and compose-samples README. New sections within those targets are discovered automatically; additional pages and sample Kotlin files require configuration. Material 3 body acquisition, target-project Gradle resolution, Android device behavior and corporate-PC Codex execution are not claimed.

GitHub preview/PR runs and first public corpus publication are recorded in the implementation PR after they finish. Local evidence does not by itself prove the GitHub publishing job or the future cron trigger has executed.
