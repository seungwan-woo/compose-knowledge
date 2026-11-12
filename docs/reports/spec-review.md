# Requirements review

Review source: `2026-11-12-compose-knowledge-codex-plan.md`, dated 2026-11-12. This review establishes acceptance criteria before implementation. The repository starts empty and the previous crawler is unavailable; an adapter contract with deterministic public fixtures is an appropriate local PoC boundary. Existing crawler compatibility, live GitHub publishing, and an actual developer-PC Codex session remain external integration gates.

## Critical contract recommendations

### Artifact and version identity

- Preserve requested coordinates and the canonical platform artifact. Android resolved dependencies commonly use `androidx.compose.material3:material3-android` and `androidx.compose.ui:ui-android`; explicit Android aliases from `material3` and `ui` must work in both search and evidence matching. Do not strip arbitrary suffixes or equate desktop and Android implementations.
- Exact applicability belongs to an evidence section, not its containing document. A guide with unknown applicability cannot acquire a match because another section is verified against a release.
- An evidence section depending jointly on Material 3 and Compose UI must have every required artifact version resolved and supported before it is `match`. One matching pair is insufficient. A confirmed incompatible required artifact yields `different`; otherwise a missing or unverified required pair yields `unknown`. These precedence rules must be fixed in the shared contract.
- Represent alternative supported releases separately from joint requirements, or document that the fixture only allows one required version per artifact. A flat array cannot silently mean both “all required” and “any supported release.”
- Only show `different` evidence for explicit upgrade/comparison requests. Unknown evidence may be returned with its label and should rank below exact matches. Same FQN in different artifacts must remain distinguishable.
- Accept prerelease versions as opaque release identities; do not derive source applicability from lexical version order or unverified ranges. Conflicting duplicate requested versions should fail clearly.

### Provenance and redistribution

- Each input must include stable source identity, source kind, revision, a resolvable original location, license and attribution. Reject omitted revision or invalid source ranges instead of silently manufacturing defaults.
- Code evidence requires commit/file/line provenance, or a precisely documented released-source archive mapping that establishes the release. A plausible release number and arbitrary commit string are not verification. Preserve fixture raw content/digest where possible so offline checks can bind excerpts to their sources.
- Guides require URL, section anchor, content digest and `unknown` applicability unless a release mapping was actually established. Preserve provenance across adapter, OKF, index and read output.
- If fixture content is authored or simplified, label it as an illustrative fixture; it must not support claims of verified upstream behavior. Distinguish locally checked integrity from externally checked truth.
- Redistribution needs a recorded license decision. Include required license/notice/attribution files. Do not treat a source URL as a license. Public workflow inputs must not include internal code or PR data.
- Dropdown dismissal and touch delivery behind the popup are separate claims. Tests or source proving dismissal alone do not prove touch pass-through; absent evidence must remain a reproduction task.

### Deterministic build and snapshot validation

- Use stable IDs that incorporate overload identity where needed. Sort documents, sections, sets and manifest entries before serialization; do not embed wall-clock generation timestamps in deterministic payloads.
- The OKF bundle root is `knowledge/`. Emit valid v0.2 required metadata and place Compose-specific properties under `compose`; only emit `verified` when its meaning is supported by performed checks.
- Manifest schema version and input revisions are mandatory. Hash exact bytes for every published knowledge/index payload. Do not self-hash the manifest or allow circular hashes. Explicitly define whether non-payload license/notice files are included.
- Validate schema, paths, hash shape/content, document and section uniqueness, provenance, index-to-document/section references and related links. Reject duplicate identities, dangling IDs, path traversal, absolute paths and symlink escape. A structurally valid manifest does not make malformed indexed content trustworthy.
- Same fixture input produces the same bytes and file hashes. Capture runtime logs outside the corpus. A no-change publish must produce zero data commits.

### Search, reads and output limits

- `search` and `read` must carry the exact selected snapshot SHA. `read` accepts only an indexed stable ID, never a caller-provided file path.
- Keep query context for section status: either provide the same resolved dependencies to `read`, encode a validated hit context, or explicitly identify read applicability as query-independent. Do not display search `match` then read `unknown` through an undocumented API gap.
- Default search limit is three. Return excerpt, applicability status, source and document/section IDs. Resolve short names, exact FQNs and Korean/English aliases; exercise empty results and same-name artifacts.
- A response cap counts UTF-8 encoded bytes of the complete serialized JSON, including metadata and the CLI newline. Preserve valid Unicode and valid JSON. Trim text safely or drop complete candidates; never truncate serialized JSON bytes. If mandatory metadata cannot fit, return a stable bounded error under a documented minimum accepted budget.
- The complete work-session budget is 12 KiB, including repeated searches, with search initially 3 KiB and each read 3 KiB. A stateless CLI can enforce individual limits; the skill must explicitly account for the combined budget. Do not claim CLI-enforced session limits without state.
- Direct plus linked evidence totals at most three sections. Links may be followed only one step from selected direct evidence; link cycles do not justify recursive expansion.

### Cache consistency and offline behavior

- Fetch the configured data branch into a staging location, resolve its commit SHA, validate the complete snapshot, and activate it through an atomic pointer replacement. Validation failure must leave the previous good pointer untouched.
- Cache contents must be immutable by SHA. Search and read with an old selected SHA must continue to work after another operation syncs a newer SHA. Keep previous snapshots while they can still be queried.
- On network or candidate-validation failure, use the last good snapshot with `cached`; with no good cache, return `unavailable`. An invalid cache must not be called good merely because a pointer exists. `--offline` must perform no network operation.
- `checkedAt` is the current local sync check time. `publishedAt` is the selected commit time, including cached responses. Neither belongs in deterministic data hashes.
- Concurrent sync operations must not expose partially written content or corrupt the active pointer. SHA and cache paths require validation. Corpus content remains data: no fetched script, package lifecycle hook, Git hook or skill is executed.

### Deployment and honest completion

- A fixture-only build is useful and independently testable. It is not the missing crawler integration. Document the compatibility boundary and replaceable adapter instead of inventing the old schema.
- Keep refresh manual-only until changed, unchanged and failed-source cases have been exercised with the real collector. Use serial workflow concurrency and grant write permission only to the publishing job.
- Stage and validate before publication. Any required source failure retains the previous corpus. A clear disabled/pending collection gate is safer than publishing demonstration data as a successful refresh.
- Bundle the installed skill and built CLI at one version; fetch corpus as data only. Installation must not silently overwrite unrelated files. Preserve source and license materials in the package.
- Fix the 20-question answer IDs and version expectations before tuning. Measure top 3 and top 5 against the same corpus for index and `rg`; output bytes, timings, setup/sync time and Codex token metrics are distinct measurements.
- Report local fixture tests, actual CLI exercises, a genuine Codex session and live publishing as separate evidence levels. Do not claim unavailable developer-PC verification from a prompt simulation or skill-text inspection.

## Minimum adversarial checks

1. Base Maven aliases resolve to Android fixtures, while desktop and wrong artifacts do not.
2. A joint M3/UI section is `unknown` with UI absent and `different` with UI mismatched; the unknown guide stays unknown.
3. Two overloads and identical short names do not collide. Dangling links and missing revision are rejected.
4. Two builds produce identical bytes; a mutated body or index fails validation even if unrelated manifest fields look valid.
5. Korean/emoji excerpts fit the full JSON byte budget and parse; a cap smaller than required metadata fails predictably.
6. Search on SHA A followed by sync to SHA B and read on A still returns A. Concurrent sync never exposes staging.
7. Invalid new manifest and unavailable remote fall back to validated A; an empty or corrupt cache returns unavailable. Offline does not access the remote.
8. Missing required source stops publication; unchanged input does not commit; refresh cannot execute corpus-provided code.
9. The implementation and review examples cite distinct evidence for dismissal and touch delivery, or explicitly defer the unsupported behavior to reproduction.

## Review status

Preimplementation contract review complete. Implementation compliance and code-quality verdicts are pending the frozen contracts and implementation diff. Recommendations above distinguish required observable behavior from suggested implementation mechanics; they do not require production infrastructure for the local fixture PoC.

## Frozen contract review

Reviewed `src/domain/types.ts`, the design specification and implementation plan on 2026-11-12. The frozen contract resolves the largest initial risks: applicability is section-scoped; requirements are AND with one version per artifact; alternative releases use separate sections; read receives the same query context; platform normalization requires explicit Android identity; and a manual workflow is gated on the missing crawler. No wholesale type redesign is required.

### Integration blockers to settle before wiring CLI

1. **Define the digest subject.** `Source.sha256` currently has no documented subject. The validator can recompute an excerpt digest from the contract, but cannot verify the entire original file or release archive unless those bytes are separately retained. Specify `SHA256(UTF8(source.excerpt))` if that is the intended input-integrity check, and retain original source/archive hashes and the immutable release mapping in fixture provenance. Alternatively retain full source bytes under a separately validated contract. A well-formed upstream hash must not be described as independently verified by an excerpt-only validator.
2. **Do not let `--dir` forge snapshot identity.** The planned consumer syntax permits `--dir` with caller-provided `--snapshot`, while the identity guarantee is that search and read use actual immutable Git commit content. A plain built directory cannot substantiate an arbitrary claimed SHA. Remove this shortcut for consumer commands, validate it against the cached commit identity, or introduce an explicit local-build identity mode distinct from Git SHA. Tests should reject a directory paired with a misleading SHA.

### Clarifications that can use the existing types

- Reject duplicate canonical artifact requirements per section and contradictory duplicate query versions, including collisions introduced by Android alias normalization. Define whether a duplicate equal query version is deduplicated or rejected. A `version` without `artifact` is invalid.
- Clarify whether `Source.id` is globally unique or whether repeated IDs must have byte-identical provenance. Same ID with inconsistent locations/digests must fail rather than making citations ambiguous.
- Attribution is promised by the design but has no dedicated field. Document where copyright/attribution is retained (for example source excerpts plus packaged NOTICE/license) and ensure the license obligations survive bundle and corpus distribution. A short SPDX string alone does not carry required license text.
- State that `resource` includes the guide fragment anchor, while code `path` plus positive ordered `startLine`/`endLine` are mandatory for code/test source kinds. An immutable revision or verified release coordinate must be explicit; a moving branch label is insufficient for exact evidence.
- `read` source metadata must remain complete when the body is shortened. If metadata alone exceeds the budget, return a documented error; do not silently drop citation fields to fit.
- The contract has no overload field. This is acceptable for the initial distinct-symbol corpus if no represented overload ambiguity exists; add explicit signature identity before ingesting ambiguous overloads.

### Verdicts at contract stage

- **Specification alignment:** conditionally approved, subject to digest-subject and local-directory identity semantics above. The narrowed fixture-first scope is honest and appropriate.
- **Implementation quality:** not yet assessed; executable worker code and tests were not part of this review package.

### Controller resolutions

The controller resolved both integration blockers before CLI integration:

- `Source.sha256` is the SHA256 of UTF-8 excerpt bytes, checked by the adapter and snapshot validator. Original source/archive digests remain in `tests/fixtures/upstream/provenance.json`; archive digest and Maven coordinate are retained in revision identity. Excerpt integrity is not described as upstream verification.
- Consumer `search` and `read` use cache plus a full real Git SHA only. `--dir` is removed from consumer commands. Directory-based build/validate remain supported; fixture use goes through a temporary local Git corpus remote and real sync.

**Updated contract verdict: approved.** Verify these rulings in implementation review; remaining clarifications above are validation/documentation checks rather than requested schema changes.
