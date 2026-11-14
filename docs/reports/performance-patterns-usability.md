# Performance and pattern retrieval checks

A fresh installation of bundle 0.3.4 was compared with 0.3.3 outside the source checkout. The eight-question test froze its artifact/FQN/query starting points before candidate access. Those starting contexts were chosen for the test, not resolved app dependencies. A separate diagnostic followed the new installed routing table.

| Test | Supported | Partial | Unsupported | Maximum CLI output / reads |
| --- | ---: | ---: | ---: | --- |
| Frozen questions, public baseline | 2 | 2 | 4 | 7,556 bytes / 2 |
| Same frozen questions, local candidate | 2 | 2 | 4 | 7,556 bytes / 2 |
| Five separate installed-route diagnostics | 5 | 0 | 0 | 10,236 bytes / 3 |

The unchanged fixed-route result is retained. Runtime-only filters miss sources owned by benchmark tooling, runtime-tracing, UI, Material3 and foundation-layout; one test even pairs a benchmark FQN with the runtime artifact. That establishes a limitation of the chosen starting contexts, not absence of the knowledge. The five diagnostics use the appropriate installed routes for measurement, tracing, Baseline Profiles, compound coordination and named slots. They are not a before/after improvement score.

All 21 questions started with fresh online sync and used full snapshot pins. The public baseline is `4b1c0b32fa56665ed7d7248b01ee95d9880083d0`; the local candidate is `59389ff9ad86eb81a015152d902058bf79630bcd`. Local freshness does not establish public publication. All command exits, per-question 12,288-byte CLI limits, at most three reads and one-hop links passed. The 2,442-byte navigation-table reads are accounted separately from CLI stdout. Search snippets could truncate; the section reads used for conclusions did not.

The AI tester selected and graded evidence; no human review or Android performance experiment is claimed. Actual private-app modules, variants, dependency versions and toolchain remain unknown. Installation checks matched all 326 baseline and 327 candidate archive files. SKILL, runtime and launcher bytes match except version metadata; the new optional route is included.

See the [question-level report and reproduction instructions](evidence/performance-patterns-usability/README.md), [compact evidence](evidence/performance-patterns-usability/evidence.json), [frozen questions](evidence/performance-patterns-usability/questions.json), and [checksums](evidence/performance-patterns-usability/SHA256SUMS). The package preserves compressed exact stdout/stderr traces, command arguments, provenance, hashes and selection IDs. A rerun needs a corpus remote preserving the expected snapshot; newer upstream publication does not recreate this historical comparison.
