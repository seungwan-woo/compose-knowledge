# Requested source access

Eight exact user-supplied URLs are registered in `config/sources.json`. These are public source candidates, not an existing crawler contract. Content ingestion and source-wide license review are pending; released-artifact applicability is `unknown` for every registered source. The initial selection remains menu and popup focused; the general architecture introduction is deferred.

Checked at `2026-11-12T08:53:20.435437+00:00` with eight parallel ordinary HTTPS GET requests. Every request used inherited proxies, default TLS verification, `--location`, and a 25-second total timeout. Response bodies were discarded. No source documents were ingested and frozen provenance/evidence fixtures were not changed.

| Source ID | Exact requested URL | Observed result |
| --- | --- | --- |
| `compose-documentation` | https://developer.android.com/develop/ui/compose/documentation | Proxy CONNECT 403; curl 56; origin HTTP status 000 |
| `androidx-compose-source` | https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose | Proxy CONNECT 403; curl 56; origin HTTP status 000 |
| `compose-api-guidelines` | https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/docs/compose-api-guidelines.md | Proxy CONNECT 403; curl 56; origin HTTP status 000 |
| `compose-samples` | https://github.com/android/compose-samples | HTTP 200; 0 redirects |
| `compose-overview` | https://developer.android.com/develop/ui/compose/ | Proxy CONNECT 403; curl 56; origin HTTP status 000 |
| `material3-compose-guide` | https://m3.material.io/develop/android/jetpack-compose | Proxy CONNECT 403; curl 56; origin HTTP status 000 |
| `compose-release-notes` | https://developer.android.com/jetpack/androidx/releases/compose | Proxy CONNECT 403; curl 56; origin HTTP status 000 |
| `android-architecture-introduction` | https://developer.android.com/topic/architecture/intro | Proxy CONNECT 403; curl 56; origin HTTP status 000 |

The seven failures occurred during proxy tunnel setup, before origin TLS or HTTP. They are network-policy observations, **not origin-server 403 responses or evidence the pages are missing**. Blocked content, redirect chains, licensing text, and release claims were not inspected.

`git ls-remote https://github.com/android/compose-samples.git HEAD` succeeded within its 25-second bound, without cloning:

```text
25631e8f544a9a1e3f01e296eaf1b4c28428196c  HEAD
```

This pins an observed repository HEAD; no sample files, file-level license, menu behavior, or Maven-version mapping was verified from it.

## Network-policy draft

Requested domain additions are `developer.android.com`, `android.googlesource.com`, and `m3.material.io`. `github.com` already worked for the requested sample repository and Git ref lookup. No redirect hosts were observed: the accessible GitHub page returned 200 directly, and the other URLs were blocked before any origin redirect could be observed. Additional redirect domains cannot be determined from this check; inspect actual `Location` responses after access is available before expanding policy.

The official AndroidX mirror at `https://github.com/androidx/androidx` and its immutable files on `raw.githubusercontent.com` are known alternatives for AndroidX code. The existing pinned fixture already uses verified Google Maven sources from `dl.google.com`. These alternatives do not silently replace the newly requested URLs, and were not ingested as part of this registry update. No public guide's terms were inferred from a code mirror's Apache license.

Reproduction: `curl --location --max-time 25 --connect-timeout 15 --silent --show-error --dump-header headers.txt --output /dev/null --write-out '%{http_code} %{url_effective} %{num_redirects}' '<exact URL>'`. The bounded parallel check script and machine-readable diagnostics remain in `/tmp/compose-source-research/access/`; no credentials or proxy values were recorded in this report.
