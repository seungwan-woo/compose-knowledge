# Daily public Compose knowledge refresh

The user requested verification of merged CI and the installed skill, then daily crawling, change detection and knowledge updates. They explicitly chose automatic publication to the data-only `corpus` branch. This supersedes the earlier fixture-only restriction; it does not authorize merging implementation changes into `main` without review.

## Approach and scope

Use the existing Node 24 CLI, snapshot validator and Git corpus branch. A review-PR for every data update was offered; the user selected validated automatic data publication. Keep implementation changes in a normal PR. The following are implementation choices: run at `0 23 * * *` (08:00 Asia/Seoul), support manual preview/publication, and publish with a separate job that alone has contents-write permission.

Acquire registered Android documentation articles and selected AndroidX menu/popup source files, API guidelines, and compose-samples README at immutable Git revisions. Preserve the existing released-version evidence; current web/main-branch evidence has unknown release applicability. Split retrieved text into stable, attributable sections. This is a bounded acquisition scope, not a recursive crawl of all linked Android pages. New sections in these documents are discovered on the next run.

Material 3 is an Angular shell in static HTTP. Track its page metadata separately as monitor-only and explicitly report that its article body is not ingested. Never insert navigation, an empty shell or an HTTP error page as successful knowledge. This limitation must appear in the workflow summary and README.

## Integrity and updates

- Preserve source URLs, Git revisions or distinctly named web-content SHA256 revisions, source excerpt hashes, licenses and attribution. Documentation hashes identify retained normalized text, never invented Git commits.
- A required acquisition, extraction or validation failure prevents publication. Monitor-only sources are explicit configuration rather than silent fallback.
- Compare stable section IDs and semantic content; report added, updated and removed IDs. Reuse previous unchanged documents/sources so unrelated upstream commit movement does not create churn.
- Build into a fresh directory and validate with the consumer's validator before uploading or publishing. The corpus branch contains only manifest-bound data, never workflow or executable files.
- Revalidate downloaded publication artifacts, compare against the latest branch, and push a normal fast-forward commit without force. Concurrent updates must be rejected instead of overwritten. No changed data means no new commit.
- Keep run reports and source status as Actions artifacts and step summaries. Do not include observation timestamps in deterministic corpus payloads.
- Do not trigger application CI on `corpus` data-only pushes. Data publication uses GITHUB_TOKEN and requires no PAT.

## Acceptance

Verify merged PR and `main` workflow jobs with GitHub evidence. Exercise a newly installed skill bundle from outside the checkout. Test real local Git publication, unchanged repeated refresh, changed content, deleted sections, corrupt staging and concurrent publication. Test HTML chrome filtering, stable IDs, unknown version status, source failure and shell rejection with local fixtures. Run live acquisition twice, all project tests, frozen retrieval evaluation and independent review. Open an implementation PR and verify its CI and preview workflow. Schedule activation starts only after that PR is merged to the default branch.
