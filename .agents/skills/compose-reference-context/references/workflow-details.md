# Workflow details

Read only the relevant subsection. The default skill is the workflow entry point; these details explain uncertainty and manual recovery.

## Freshness, pinning and deployment

`begin` runs sync before exclusively creating a local task file. Existing task files are refused. The task contains the full snapshot pin, sync result, caller-supplied version context and retrieval ledger. It is consumer-local working data; it is not a source importer. Never edit it to change versions, pin or allowance. Serialize workers sharing a question. A lock collision performs no retrieval; wait for the active operation before continuing.

- `fresh`: the configured remote's published branch was fetched and validated in this invocation.
- `cached`: a verified snapshot was used without confirming current remote freshness, including explicit offline use. Disclose fetch errors and dates. This cannot satisfy a latest-only requirement.
- `unavailable` (exit 2): no verified snapshot is available. Stop corpus retrieval, state the gap and continue only with independently available evidence.

`checkedAt` is the invocation time, including offline checks; `publishedAt` is the last data-change commit time. Unchanged daily crawls do not change the publication date. Inspect the latest Daily public corpus refresh Actions result and source report for crawl health. Latest means the configured remote's last publication; an internal mirror can lag public upstream. Sync does not recrawl websites or update installed skill/runtime/catalogs. Update those with a verified bundle.

Local route/lookup processing sends no question or code to a network endpoint. Online sync fetches the configured corpus remote. The agent's own deployment must separately be approved for consumer-private code; a local retrieval CLI does not make a remote model offline. Keep consumer source, symbol maps, reports and policies in the consumer environment. No copy or mapping file belongs in this knowledge repository.

## Version and claim interpretation

After begin, inspect the actual module, imports and variant. If dependency resolution is available, use Gradle dependencyInsight on that variant's compile classpath, or runtime classpath for runtime behavior. Resolve runtime, UI, Foundation, animation, coroutines and Material dependencies independently where relevant. A BOM number is not an artifact version. Do not automatically run an Android build.

The first lookup can bind repeatable `--require artifact=version`; `artifact=unknown` records an explicitly unknown version. Conflicting begin values are rejected. Later lookups cannot add or change context. Known Android artifact aliases normalize; requirements are conjunctive. All relevant requirements must agree for `match`; `unknown` does not establish compatibility. `different` is reserved for explicit legacy comparisons and is excluded from reviewed lookup claims.

Guidance cards are concise reviewed summaries with body hashes bound to raw evidence. Missing or changed evidence removes or invalidates their support. Only a valid descriptor and all its emitted evidence can produce `sufficiency: sufficient`, and only for the named claim. Whole unreviewed source text can still be useful evidence; assess its actual contract and limitations yourself. Full transmission is separate from sufficiency, and both are separate from released-version applicability or observed app behavior.

Inspect source resource, path/lines, revision, hash and license. Live web/main-branch captures remain unknown for released-version applicability. `web:...@sha256:...` identifies normalized content, not an upstream Git commit. Monitor-only sources contain no article evidence. Re-review when evidence IDs/hashes change. An import, API name mention or remembered summary alone is not a behavioral contract.

## Route recovery and limits

`route --query TEXT` returns at most two candidates with matched curated aliases. Natural English/Korean wording works where those aliases are explicitly registered; unknown wording returns a gap. It does not translate arbitrary language. Pick a candidate only when its scope matches the local question, then use its ID in lookup. Optional [topics](topics.md), [components](components.md) and [performance patterns](performance-patterns.md) help identify APIs for legacy retrieval.

The ledger permits two lookup attempts, ≤12,288 bytes of emitted lookup stdout including JSON/newlines, and three emitted sections total. A lookup selects one direct hit plus at most two one-hop required evidence sections. Failed/empty attempts remain spent. A whole selected pack that cannot fit produces an explicit gap or bounded error; it is not silently trimmed. Related route IDs are suggestions, not verified call/ownership edges. If an attempt fails or an allowance is exhausted, report the gap. Never create a replacement task or perform untracked legacy retrieval to finish the same question.

Menu/popup reviews must distinguish dismissal requests, state updates and underlying click delivery. Read applicable implementation/routing evidence before making propagation claims. Device behavior and performance need consumer-specific reproduction or measurement; source reading is not execution.

## Legacy manual retrieval

Choose this workflow upfront for topics outside the eight pack routes, including text, general layouts and menu/popups. It starts with sync instead of begin; do not create a lookup task for the same question. Once a lookup has been attempted, keep its recovery/stop path and never switch to manual retrieval.

Legacy `sync`, `search` and `read` remain supported for a separately chosen manual workflow. Start each new question with online sync (explicit offline configuration excepted), pin the returned full SHA, then preserve the same artifact/version/platform context for every search/read. Record a manual ledger shared by workers: all repeated search/read stdout ≤12,288 UTF-8 bytes, at most three section reads, and links at most one hop from direct search hits. Reserve output allowance before each call; every response is capped at 3,072 bytes. Do not mix legacy calls into an active lookup task to bypass its ledger.

```sh
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" sync \
  --remote "$CK_REMOTE" --ref corpus --cache "$CK_CACHE"
```

Use the explicitly configured corpus remote/mirror, otherwise `https://github.com/seungwan-woo/compose-knowledge.git`. Set `CK_SHA` to the returned full snapshot SHA. Apply the same fresh/cached/unavailable rules above; only explicitly configured/requested offline use adds `--offline`. After sync, inspect local scope and available artifact versions, then freeze that context for the question. For example:

```sh
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" search \
  --cache "$CK_CACHE" --snapshot "$CK_SHA" --platform android \
  --artifact androidx.compose.material3:material3 --version unknown \
  --symbol androidx.compose.material3.DropdownMenu --limit 2 --max-bytes 2048
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" read \
  --cache "$CK_CACHE" --snapshot "$CK_SHA" --platform android \
  --artifact androidx.compose.material3:material3 --version unknown \
  --id "$CK_ID" --max-bytes 3072
```

Choose `CK_ID` from search results. Add identical `--require artifact=version` dependencies to search/read. For an empty exact-name search, use official English terms in `--query` instead of `--symbol`. Use `--include-different` only for an explicit version comparison. Never cite unseen truncated text or read the whole corpus/index. Consult launcher `--help` for supported flags.
