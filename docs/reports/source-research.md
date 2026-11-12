# AndroidX source provenance research

The public fixture contains official, version-pinned Material3 **1.3.2** and Compose UI **1.7.8** sources, plus official AndroidX main references with **unknown released-version applicability**. These are research examples, not the target application's resolved dependency versions. No existing crawler checkout or output contract was available; `evidence-draft.json` is a research mapping draft, not a claim of crawler integration.

## Files

- `tests/fixtures/upstream/provenance.json`: authoritative URLs, SHA256 checksums, archive-member locations, release applicability, aliases and limitations.
- `tests/fixtures/upstream/evidence-draft.json`: nine proposed sections with exact, original line ranges and excerpts, supported claims and unsupported conclusions.
- `tests/fixtures/upstream/maven/`: four Gradle `.module` files, Android POMs, Android source JARs and sample-source JARs; all ten artifacts retain official `.sha256` sidecars.
- `tests/fixtures/upstream/material3-1.3.2/` and `ui-1.7.8/`: six unmodified source/sample files extracted from those verified archives.
- `tests/fixtures/upstream/androidx-main-07bb66ae/`: unmodified common Popup API, UI Popup test, Material3 Menu test and Apache license pinned to commit `07bb66ae1eada12632eb10c75246d7b2c5ba6ede`.
- `tests/fixtures/upstream/LICENSE-AndroidX.txt`: full Apache License 2.0 text supplied with the redistributed public sources.

## Version and immutable-location evidence

The official base is `https://dl.google.com/dl/android/maven2/`. Artifact URLs and exact SHA256 digest URLs are recorded in `provenance.json`. For example:

| Coordinates | Official source JAR SHA256 |
| --- | --- |
| `androidx.compose.material3:material3-android:1.3.2` | `e58d105a4fcf1f65a6b2838ca8a6fe40b5784b5dba9ddcf27aabcdfc92b3e4e2` |
| `androidx.compose.ui:ui-android:1.7.8` | `0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc` |

Both source JARs were also checked against their official `.sha512` responses; their SHA512 values independently equal the hashes embedded in the corresponding Android Gradle `.module` files. SHA256 for every retained Maven artifact matches the official HTTPS sidecar. Artifact pinning plus archive SHA256 and member paths identify the exact release sources; **no AndroidX Git commit-to-release mapping was invented**.

The common logical modules' `releaseApiElements-published`, `releaseRuntimeElements-published`, and `releaseSourcesElements-published` variants explicitly use `available-at` to map:

- `androidx.compose.material3:material3:1.3.2` → `androidx.compose.material3:material3-android:1.3.2`.
- `androidx.compose.ui:ui:1.7.8` → `androidx.compose.ui:ui-android:1.7.8`.

These are Android variant aliases supported by these exact metadata versions, not a global rewriting rule for every platform or release. Material3 and UI applicability stay separate. This research does not claim that Material3 1.3.2 selects UI 1.7.8 in any particular application.

For unreleased/main references, Git smart HTTP advertised `refs/heads/androidx-main` at `07bb66ae1eada12632eb10c75246d7b2c5ba6ede`. Subsequent downloads used the immutable SHA URL, for example:

`https://raw.githubusercontent.com/androidx/androidx/07bb66ae1eada12632eb10c75246d7b2c5ba6ede/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt`

The Git advertisement URL, response SHA256 and resolved ref are in `provenance.json`. A content hash is also retained for every frozen file. Commit pinning identifies the source revision; it does not establish a Maven release version. Consequently these references remain `unknown` for released-version matching.

## What each section establishes

Paths below are relative to `tests/fixtures/upstream/`. Full excerpts and hashes are in the draft JSON.

| Section ID | Source and original lines | Supported claim |
| --- | --- | --- |
| `menu-api` | `material3-1.3.2/commonMain/androidx/compose/material3/Menu.kt:78–89,108–115,125–138` | Menu uses a separate window. Outside taps/back can request dismissal. The caller supplies `expanded` and a callback. |
| `menu-android-implementation` | `material3-1.3.2/androidMain/androidx/compose/material3/AndroidMenu.android.kt:42–73,194` | Android menu forwards `properties` and callback to Popup. Default menu properties are `PopupProperties(focusable = true)`. |
| `popup-api` | `ui-1.7.8/commonMain/androidx/compose/ui/window/Popup.kt:130–150,152–169` | Popup exposes alignment and positioning-provider overloads with nullable dismissal callback and properties. |
| `popup-properties` | same common Popup file, `27–54` | Generic PopupProperties default focusability is false; outside/back dismissal defaults true. Back requires focusability. |
| `popup-android-implementation` | `ui-1.7.8/androidMain/androidx/compose/ui/window/AndroidPopup.android.kt:176–198,402–420,799–817` | Boolean constructor creates Android flags; base includes `FLAG_WATCH_OUTSIDE_TOUCH`; non-focusable sets `FLAG_NOT_FOCUSABLE`. Outside DOWN/OUTSIDE invokes the callback when enabled. |
| `popup-touch-routing` | same Android Popup file, `799–817` | Lines 803–806 separately document upper-layer event routing: focusable consumes; non-focusable propagates to other windows. |
| `unknown-reference` | immutable-main common Popup file, `27–52` | Official reference distinguishes focusability/back/outside settings, with released-version applicability unknown. |
| `menu-state-sample` | pinned Material3 `MenuSamples.kt:46–76` | Caller owns expanded state and assigns false in dismissal callback; item actions are separate. |
| `popup-dismiss-tests` | immutable-main `PopupTest.kt:245–272,334–365` | Upstream test source asserts outside-dismiss visibility and disabled-dismiss visibility, with release applicability unknown; not executed here. |

The Android routing comment is direct implementation evidence, stronger than inferring delivery from dismissal. Its wording is qualified: an upper layer decides propagation. The source is **not a device reproduction proving that a particular underlying Compose click handler receives a full gesture**. `return true`, calling `onDismissRequest`, setting `dismissOnClickOutside=false`, and hiding a menu are each insufficient by themselves to prove such a click.

The callback is a request. The library does not itself assign the caller's `expanded=false`. The pinned sample at `material3-1.3.2/androidx/compose/material3/samples/MenuSamples.kt:49–56` shows the caller setting state in `onDismissRequest`. MenuItem click handlers in that sample are separate handlers; they do not establish automatic dismissal.

## Samples and tests

Pinned Maven sample files are `MenuSamples.kt` (Material3 1.3.2) and `PopupSample.kt` (UI 1.7.8). They are extracted from official, checksum-verified `*-samples-sources.jar` publications. Those archives are also described by the corresponding Android `.module` release source variants.

The real upstream `PopupTest.kt` at the immutable main commit contains:

- `isDismissedOnTapOutside`, lines 245–272: outside screen-coordinate click and assertion that the popup no longer exists.
- `isNotDismissedOnTapOutside_dismissOnClickOutsideFalse`, lines 334–365: outside click and assertion that the popup remains visible.
- Back/focusability tests, including `isNotDismissedOnBackPress_focusableFalse` around line 1253.

These tests are frozen **source evidence only**, not tests executed in this workspace. Their released-artifact applicability is unknown. The two outside-click tests assert popup visibility; they do not assert a background click callback. `MenuTest.kt` is retained as another real upstream test reference; no additional behavioral conclusion was manufactured from it.

## License and redistribution basis

Every retained Kotlin file preserves its original copyright and Apache 2.0 header, including the Android Open Source Project attribution. The two official Android POMs declare the Apache Software License, Version 2.0, with repository distribution. The full Apache text is included. Source bytes are unmodified. The source/sample JARs contain no separate NOTICE file, so no archive NOTICE was discarded. Kotlin comments embedded in these Apache-licensed source files are distributed on that source basis; this report does not apply an assumed license to blocked Android Developers prose.

## Retrieval, verification and external blockers

All HTTP operations used Python's ordinary `urllib.request.urlopen` with inherited environment proxy and standard TLS verification. No proxy bypass, certificate override, `--insecure`, or disabled verification was used.

The acquisition command pattern was:

```python
url = 'https://dl.google.com/dl/android/maven2/' + artifact_path
payload = urllib.request.urlopen(url, timeout=40).read()
expected = urllib.request.urlopen(url + '.sha256', timeout=40).read().decode().strip()
assert hashlib.sha256(payload).hexdigest() == expected
```

Source JAR `.sha512` sidecars were checked in the same manner with `hashlib.sha512`. Archive members were extracted with Python `zipfile`, preserving exact bytes. Temporary acquisition and packaging work is in `/tmp/compose-source-research/`, including `package_fixture.py`.

The following optional endpoints returned inherited proxy CONNECT `403 Forbidden`:

- `https://developer.android.com/develop/ui/compose/components/menu`.
- `https://api.github.com/repos/androidx/androidx/commits/androidx-main`.

The official guide's body, license statement, publication date and release applicability were therefore not observed or included. The immutable official AndroidX main reference supplies an honest `unknown` release fixture. Git smart HTTP and `raw.githubusercontent.com` worked; no blocked endpoint was circumvented. Initial guesses using `androidInstrumentedTest` returned normal 404 responses; the real main test paths are under `androidDeviceTest`.

No Android device/emulator tests, target Gradle resolution, official guide ingestion or existing crawler integration were performed by this research task.

## Offline verification

From the repository root, this verifies every retained Maven artifact and official sidecar, every extracted source member, every frozen source hash, and the module variant aliases without network access:

```sh
python - <<'PY'
from pathlib import Path
import hashlib, json, zipfile
root = Path('tests/fixtures/upstream')
p = json.loads((root / 'provenance.json').read_text())
sha = lambda b: hashlib.sha256(b).hexdigest()
for a in p['artifacts']:
    assert sha((root / a['path']).read_bytes()) == a['sha256']
    assert (root / (a['path'] + '.sha256')).read_text().strip() == a['sha256']
for f in p['files']:
    data = (root / f['path']).read_bytes()
    assert sha(data) == f['sha256']
    if 'archive' in f:
        with zipfile.ZipFile(root / f['archive']) as z:
            assert data == z.read(f['member'])
for alias in p['aliases']:
    m = json.loads((root / alias['evidence']).read_text())
    for variant in alias['variants']:
        v = next(x for x in m['variants'] if x['name'] == variant)
        a = v['available-at']
        assert a['group'] + ':' + a['module'] == alias['android']
        assert a['version'] == alias['version']
print('Verified 10 artifacts, 10 source files, and both Android variant aliases offline.')
PY
```
