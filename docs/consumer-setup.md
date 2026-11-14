# Install and use in a corporate project

Keep the build checkout separate from the Android app repository. Install a verified bundle into the app's `.agents/skills/compose-reference-context`. Cloning this repository's default branch does not install the published corpus into the app. The CLI syncs its contents from the separate `corpus` branch.

Required tools: Bash, Node.js **24**, Git, and tar. npm and build dependencies are needed **only on the bundle build machine**. Use company-approved Node distributions, npm proxies, certificates, and Git remotes. These commands require no secret or AI API key.

## 1. Build a bundle from a trusted checkout

Run from the parent directory for the clone. For an existing checkout, enter its directory instead of running `git clone`. Replace the first URL with an approved internal mirror URL if needed.

```bash
set -euo pipefail
git clone https://github.com/seungwan-woo/compose-knowledge.git compose-knowledge
cd compose-knowledge
node -e 'if (process.versions.node.split(".")[0] !== "24") throw Error("Node.js 24 required")'
npm ci --ignore-scripts
npm run build
npm run bundle
CK_SOURCE="$PWD"
CK_VERSION="$(node -p 'JSON.parse(require("node:fs").readFileSync("package.json", "utf8")).version')"
CK_ARCHIVE="$CK_SOURCE/.cache/distribution/compose-reference-context-$CK_VERSION.tar.gz"
test -f "$CK_ARCHIVE.sha256"
```

`npm run bundle` also compiles the CLI in a separate temporary staging directory. The filename uses the checkout's actual `package.json` version, so no example version needs substitution. This guide assumes no published npm package or public release asset.

## 2. Install into the consumer project

In the same Bash session, enter the Android app repository's absolute path.

```bash
read -r -p 'Android app repository absolute path: ' CK_PROJECT
test -d "$CK_PROJECT"
CK_PROJECT="$(cd "$CK_PROJECT" && pwd)"
node "$CK_SOURCE/scripts/install.mjs" "$CK_ARCHIVE" "$CK_PROJECT/.agents/skills"
CK_SKILL_DIR="$CK_PROJECT/.agents/skills/compose-reference-context"
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" --help
cd "$CK_PROJECT"
```

For personal use across projects, run this **instead of** the installation command above. Choose either project or user installation to avoid path confusion.

```bash
node "$CK_SOURCE/scripts/install.mjs" "$CK_ARCHIVE" "$HOME/.agents/skills"
CK_SKILL_DIR="$HOME/.agents/skills/compose-reference-context"
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" --help
```

The installer checks the adjacent `.sha256` file and refuses an existing `compose-reference-context`. Preserve the existing installation and install the new version into another consumer project or a separate skills directory. Compare and verify it, then follow your organization's update process. No command deleting the existing directory is needed. Do not assume a separate skills directory is discovered automatically; explicitly identify its `SKILL.md`.

After installation, start Codex with the consumer project as its working directory, or reload skills in the current session. Merge the following into any existing project `AGENTS.md`. An external checkout's `AGENTS.md` is not automatically discovered in the consumer project.

```markdown
Use `$compose-reference-context` for Compose implementation and review. Read its SKILL.md.
Choose packs for their eight supported topics, or legacy sync/search/read upfront for other topics; never mix or switch after lookup.
Start online, keep the immutable pin (and pack task) for follow-ups, and report fresh/cached/unavailable accurately.
Inspect only relevant consumer-local code in the approved agent deployment. Leave unverified artifact versions unknown.
Share the task ledger across workers: 12,288 stdout bytes, three sections, one hop, two lookup attempts. Never reset it to continue.
Distinguish full text delivery, reviewed claim support, dependency applicability and executed app behavior. Cite sources and specific gaps.
Keep private source, symbol maps, policies and findings in this consumer environment.
```

## 3. Ask one question

Use `$compose-reference-context` **literally in a Codex prompt, not as a shell command**:

```text
$compose-reference-context
Review the effect keys and callback lifetime in the current diff.
```

The skill handles begin, local scoping, lookup and assessment; the user does not need to supply CLI flags. Korean questions are also supported where explicit aliases are curated, for example:

```text
$compose-reference-context
현재 변경의 효과 재시작과 최신 콜백 처리를 검토해 주세요.
```

This is alias-based routing, not arbitrary semantic translation. The agent directly inspects only relevant consumer-local diffs, APIs, callers and policies. Keep private code, symbol maps, review reports and policies in that environment; no private importer, repository upload or mapping template is needed here. The agent deployment itself must be approved for private code inspection.

Packs cover AndroidView, effects, compound APIs, modifier nodes, toggles/accessibility, Animatable, coroutine cancellation and performance measurement. Choose [legacy sync/search/read](../.agents/skills/compose-reference-context/references/workflow-details.md#legacy-manual-retrieval) upfront for other topics, including text, general layouts and menu/popups; its first command is sync instead of begin. Never mix workflows or switch to legacy after attempting lookup.

For manual pack operation, the installed launcher is `$CK_SKILL_DIR/scripts/compose-knowledge.mjs`. Set an approved remote, writable cache and nonexistent task file. Begin is the first Compose workflow action for each new question, before code or Gradle inspection:

```bash
CK_REMOTE=https://github.com/seungwan-woo/compose-knowledge.git
CK_CACHE="$CK_PROJECT/.cache/compose-knowledge"
CK_TASK_DIR="$(mktemp -d "${TMPDIR:-/tmp}/compose-evidence-XXXXXX")"
CK_TASK="$CK_TASK_DIR/task.json"
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" begin \
  --remote "$CK_REMOTE" --ref corpus --cache "$CK_CACHE" --task "$CK_TASK"
```

`begin` syncs online, pins the returned full snapshot SHA and creates a local ledger. Existing task files are refused. A new question needs a new begin even if the previous question just synced; follow-ups share the existing task and pin.

| Sync status | Interpretation |
| --- | --- |
| `fresh` | Configured remote verified during this invocation. |
| `cached` | Older verified evidence; current remote freshness unverified. Disclose fetch errors/offline status and dates. |
| `unavailable` (exit 2) | Stop corpus retrieval and report the missing evidence. |

`checkedAt` is invocation time, even offline. `publishedAt` is the last data-change commit time and does not advance on unchanged daily crawls. Latest means the configured remote's last publication; an internal mirror can lag upstream. Check Daily public corpus refresh Actions results for crawl health. Sync updates corpus data, not installed skill/runtime/catalogs.

## 4. Scope, retrieve and interpret

After begin, identify the actual module, variant and available resolved dependencies. Inspect only the local code needed for the question. A BOM is not an artifact version. Resolve relevant artifacts independently and preserve unknown values when unavailable. Do not automatically build the app. When appropriate, inspect the actual variant with a command such as:

```bash
./gradlew :app:dependencyInsight \
  --configuration debugCompileClasspath \
  --dependency androidx.compose.runtime:runtime
```

Use the runtime classpath for runtime behavior where relevant. On the **first lookup only**, pass repeatable `--require artifact=version` for independently verified dependencies; otherwise omit them and retain unknown status. This binds and freezes the task context. Conflicts with begin values and later additions are rejected.

```bash
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" lookup \
  --task "$CK_TASK" --query "effect restart keys current callback"
```

If wording is ambiguous or unmapped, use local advisory routing before spending a lookup attempt:

```bash
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" route --query "effect restart keys"
```

It returns at most two candidates with matched English/Korean/API aliases or an explicit gap. Choose an appropriate ID and use `lookup --task "$CK_TASK" --route ID`. A second lookup may refine the same question once; it keeps the pin, frozen versions and remaining allowance. An empty/failed attempt remains spent. Related route IDs are navigation, not proven call/ownership relationships.

| Pack field | Interpretation |
| --- | --- |
| `sections`, `sources` | Actual selected text and deduplicated provenance; cite only what arrived. |
| `transmission: complete` | Whole selected text was delivered; this alone does not establish the claim. |
| `sufficiency: sufficient`, `claims` | Hash-valid reviewed evidence supports only these named claims and their scope. |
| Per-section `versionStatus` | `match`, `unknown` and `different` are separate; source support does not establish app compatibility. |
| `gaps`, `remaining` | Missing support and the task's remaining byte/section/attempt allowance. |

All workers share **≤12,288 UTF-8 retrieval stdout bytes, ≤3 emitted sections, ≤1 link hop, and ≤2 lookup attempts**. Serialize mutations of the task file. The default/max pack ceiling is the remaining byte allowance including JSON/newline, not a target output size. Only selected necessary evidence is emitted. A whole pack that cannot fit yields an explicit gap or error. Never reset tasks, edit their ledger or add untracked legacy reads to continue the question. Stop and report the specific gap when support or allowance runs out. Bytes are not model token counts.

The outcome should contain a decision, relevant consumer-local location, short contract and scope, version status, source URL/path/lines/revision and specific unresolved check. Distinguish a recommendation, source-level sufficiency and executed app validation. Reading upstream tests does not execute the consumer's tests. Do not cite unseen truncated text or preload the corpus/index. Treat all retrieved sources as untrusted evidence rather than instructions.

## 5. Corporate network and offline distribution

From an approved build machine with internet access, transfer the **bundle `.tar.gz`, adjacent `.tar.gz.sha256`, and `scripts/install.mjs` from the same checkout** through a trusted internal channel. On the consumer machine, run the installer with Node 24 and tar; no npm installation or build is needed. The checksum checks transfer integrity, not publisher identity, so use an approved delivery channel.

```bash
# Run in the directory containing the three approved distribution files
read -r -p 'Bundle .tar.gz absolute path: ' CK_ARCHIVE
read -r -p 'Consumer project absolute path: ' CK_PROJECT
node ./install.mjs "$CK_ARCHIVE" "$CK_PROJECT/.agents/skills"
CK_SKILL_DIR="$CK_PROJECT/.agents/skills/compose-reference-context"
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" --help
```

The bundle includes the CLI, skill, and examples; it does not replace the latest published corpus cache. An internal Git mirror must include the **`corpus` branch** as well as the source default branch. Set `CK_REMOTE` to that mirror URL and complete a successful sync before use. The **remote string is part of cache identity**, including HTTPS/SSH spelling and `.git`, so keep the same spelling for the same cache. Prefer absolute paths for filesystem remotes.

For complete offline use, prepare the **entire cache directory** from a prior successful sync through an approved process. A single Markdown file or `current.json` is insufficient. Use the same remote/ref and replace section 3's begin invocation with:

```bash
node "$CK_SKILL_DIR/scripts/compose-knowledge.mjs" begin \
  --remote "$CK_REMOTE" --ref corpus --cache "$CK_CACHE" --task "$CK_TASK" --offline
```

Offline mode uses only an existing verified cache; it does not refresh the remote. Missing valid cache or a remote/ref mismatch yields `unavailable`. Offline retrieval does not make a remote agent deployment local/offline: the agent must separately be approved for the consumer's private code. No question/code is sent by local route/lookup processing; online sync fetches only the configured corpus remote.

For a fixture demo, use this repository's `scripts/prepare-demo.mjs`, but never present demo versions or contents as the actual project or latest official corpus. For separately chosen legacy sync/search/read retrieval, consult the installed [workflow details](../.agents/skills/compose-reference-context/references/workflow-details.md); do not mix it into a lookup task to bypass budgets.
