# Compose knowledge

공식 AndroidX 근거를 버전별로 검색하고 Codex 구현·리뷰에 사용하는 로컬 CLI와 스킬입니다. Node.js 24가 필요합니다.

Material 3 **1.3.2**, Compose UI **1.7.8**, 배포 버전이 미확인인 고정 AndroidX 소스의 **9개 섹션**을 기준 근거로 유지하고, 일일 수집기로 공식 문서와 최신 소스를 추가합니다. 이 버전들은 예제 근거의 버전이며 작업 대상 앱의 버전이 아닙니다. 새 수집기는 이 저장소의 입력 계약을 사용하며, 미제공된 기존 크롤러 코드를 연결했다고 주장하지 않습니다.

## 시작

```sh
cd /workspace/compose-knowledge
npm_config_cache=/workspace/.npm-cache npm ci --ignore-scripts
npm run build
npm test
node scripts/prepare-demo.mjs
```

마지막 명령은 공개 fixture로 로컬 Git 원격과 캐시를 만들고 `.cache/demo/latest.json`에 경로와 실제 SHA를 기록합니다. 다시 실행하면 새 디렉터리를 만들며 기존 파일을 덮어쓰지 않습니다. 별도 서버·데이터베이스·비밀키는 필요하지 않습니다.

## CLI

```sh
node dist/cli.js --help
node dist/cli.js build --input tests/fixtures/knowledge-input.json --out /tmp/compose-corpus-NEW --json
node dist/cli.js validate --dir /tmp/compose-corpus-NEW --json
```

빌드 출력 디렉터리는 비어 있어야 합니다. 다음의 `CACHE`, `REMOTE`, `SHA`는 데모 설정 또는 실제 발행 원격의 동기화 응답에서 가져옵니다.

```sh
node dist/cli.js sync --remote "$REMOTE" --ref corpus --cache "$CACHE" --json
node dist/cli.js search --cache "$CACHE" --snapshot "$SHA" \
  --artifact androidx.compose.material3:material3 --version 1.3.2 --platform android \
  --symbol androidx.compose.material3.DropdownMenu --limit 3 --json
node dist/cli.js read --cache "$CACHE" --snapshot "$SHA" --id menu-state-sample \
  --artifact androidx.compose.material3:material3 --version 1.3.2 --platform android --json
```

- 검색·읽기는 같은 SHA와 버전 문맥을 사용합니다. `--require androidx.compose.ui:ui-android=1.7.8`처럼 의존성을 추가할 수 있습니다.
- 알려진 Android artifact 별칭만 정규화합니다. 버전이나 플랫폼을 확인하지 못하면 `unknown`으로 남습니다. 필요한 모든 artifact가 맞아야 `match`입니다.
- 다른 버전은 `--include-different` 비교 조회에서만 노출합니다.
- `sync --offline --cache "$CACHE"`는 네트워크 없이 검증된 캐시를 사용합니다. `unavailable`은 JSON과 종료 코드 2를 반환합니다.
- 검색/읽기 응답의 기본·최대 크기는 각각 3 KiB입니다. 전체 JSON·개행이 포함되며, 잘린 경우 `truncated`를 표시합니다. 메타데이터도 담기 어려운 예산은 명시적으로 실패합니다.
- 원격 corpus는 실행하지 않습니다. 캐시의 SHA별 manifest identity와 실제 파일을 검증하고, 오류 시 마지막 정상 스냅샷으로 돌아갑니다.

## Codex 스킬 설치

체크아웃에서는 `.agents/skills/compose-reference-context/SKILL.md`를 명시 호출합니다. 다른 작업공간에 설치할 때는 같은 버전의 스킬과 CLI를 묶습니다.

```sh
npm run bundle
node scripts/install.mjs .cache/distribution/compose-reference-context-0.2.0.tar.gz /YOUR/SKILLS/DIRECTORY
```

일반적인 사용자 스킬 디렉터리는 `~/.agents/skills`입니다. 설치기는 SHA256 sidecar를 확인하고 기존 스킬을 덮어쓰지 않습니다. 신뢰할 수 있는 경로로 번들과 체크섬을 함께 전달하세요. 체크섬은 전송 무결성을 검사하며 발행자 서명을 대신하지 않습니다.

스킬은 설치된 자체 launcher를 사용합니다. 매 작업 한 번 동기화한 후 SHA를 고정하고, 검색·읽기 출력 합계 12 KiB와 근거 읽기 3건·연결 한 단계 한도를 기록합니다. 메뉴 닫힘 요청, 호출자의 상태 변경, 뒤쪽 UI의 터치 수신을 구분해 인용합니다. 프로젝트의 실행 테스트와 upstream 테스트 소스 읽기도 구분합니다.

## 검증과 보고서

```sh
npm run typecheck
npm test
node scripts/evaluate.mjs .cache/evaluation-NEW
```

평가 출력 디렉터리는 기존 결과를 덮어쓰지 않습니다. 질문 20개는 순위 구현 전에 고정됐습니다. 초기 결과는 상위 3건 **18/20**, 상위 5건 **20/20**, 버전 오표시 **0건**입니다. 상위 5건 결과는 3건 읽기 한도 안에서 모두 읽었다는 의미가 아닙니다.

- [독립 테스트·검색 평가](docs/reports/acceptance.md)
- [원문·체크섬·라이선스](docs/reports/source-research.md)
- [사용자 제공 수집 대상](config/sources.json)과 [접근 진단](docs/reports/source-access.md)
- [스킬 없는 소비자 테스트](docs/reports/skill-baseline.md)
- [스킬 사용성 테스트](docs/reports/skill-usability.md)
- [병렬 실행 계획](docs/superpowers/plans/2026-11-12-compose-knowledge.md)

`Source.sha256`은 보존한 발췌의 UTF-8 해시입니다. upstream 파일·아카이브 해시는 `tests/fixtures/upstream/provenance.json`에 별도로 보존하고 공식 체크섬과 대조했습니다. 생성 corpus에는 원문 출처·저작권 표기와 Apache 라이선스가 포함됩니다.

## 매일 수집과 자동 갱신

`Daily public corpus refresh`는 매일 **00:17 UTC / 09:17 한국 시간**에 실행됩니다. GitHub 예약 실행은 지연될 수 있으며, 워크플로가 기본 브랜치에 병합된 뒤 활성화됩니다. 공개 저장소는 장기간 활동이 없으면 GitHub가 예약 실행을 중지할 수 있습니다.

1. [수집 설정](config/crawl.json)에 지정한 문서와 소스를 가져옵니다. 원래 요청한 8개 대상의 구체적인 수집 범위는 아래 표와 같습니다.
2. 원문·출처·해시·버전 상태를 보존하고 기존 버전별 근거와 함께 새 스냅샷을 만듭니다. 추가·수정·삭제된 섹션 ID를 보고합니다.
3. 검증을 통과한 데이터만 별도 발행 작업에서 `corpus` 브랜치에 반영합니다. 변경이 없으면 커밋하지 않습니다. 필수 수집 실패, 잘못된 스냅샷, 수집 후 다른 발행이 들어온 경우에는 기존 데이터를 유지합니다.

| 대상 | 자동 수집 범위 |
| --- | --- |
| Compose documentation / overview | 각 페이지의 본문과 앵커가 있는 섹션 |
| Compose release notes | 등록된 Compose 릴리스 페이지 본문 |
| Android architecture introduction | 해당 문서 본문 |
| Compose menu guide | 추가 지정한 공식 메뉴 문서 본문 |
| AndroidX Compose source | 정확한 Git 커밋의 `Menu.kt`, `Popup.kt` |
| Compose API guidelines | 정확한 Git 커밋의 가이드 파일 |
| compose-samples | 정확한 Git 커밋의 `README.md` |
| Material 3 Compose guide | HTTP 응답·해시 확인만 수행. Angular 본문은 **미수집** |

전체 사이트를 재귀적으로 수집하지 않습니다. 지정 문서에 추가된 섹션은 자동 반영되며, 다른 문서나 소스 파일은 `config/crawl.json`에 추가해야 합니다. 최신 웹 문서와 main 브랜치 소스는 특정 배포 버전으로 단정하지 않고 `unknown`으로 취급합니다. 웹의 `web:...@sha256:...` revision은 보존한 정규화 본문의 해시이며 Git 커밋이 아닙니다.

실행 결과는 Actions의 작업 요약과 `refresh-report` artifact에 남습니다. `corpus-data` artifact에는 소비자 검증을 통과한 데이터만 포함됩니다. 필수 수집 실패 시 요약과 실패 보고서를 남기며 발행 작업은 실행하지 않습니다. 공개 정보 수집 작업은 읽기 권한만 사용하고, 발행 작업만 `contents: write`를 가집니다. 추가 PAT는 필요하지 않습니다.

수동 확인은 Actions에서 `publish=false`로 실행합니다. 기능 브랜치에서는 발행이 항상 비활성화됩니다. 기본 브랜치에서 첫 데이터를 발행하거나 즉시 갱신하려면 `publish=true`를 선택합니다.

```sh
gh workflow run refresh.yml --ref main -f publish=false
# 기본 브랜치에서 검증 후 자동 발행까지 수행
gh workflow run refresh.yml --ref main -f publish=true

# 로컬 미리보기: 출력 디렉터리는 비어 있어야 합니다.
npm run build
node scripts/refresh.mjs --out .cache/refresh-NEW \
  --remote https://github.com/seungwan-woo/compose-knowledge.git
```

공개 corpus가 발행된 뒤 스킬에서는 다음과 같이 사용합니다.

```sh
node .agents/skills/compose-reference-context/scripts/compose-knowledge.mjs sync \
  --remote https://github.com/seungwan-woo/compose-knowledge.git \
  --ref corpus --cache .cache/public-corpus --json
```

반환된 `snapshot` SHA를 이후 검색·읽기에서 고정합니다. `publishedAt`은 마지막 데이터 변경 커밋 시각이므로 변경 없는 일일 수집에서는 갱신되지 않습니다. `checkedAt`은 이번 sync 호출 시각이며 오프라인에서도 바뀝니다. 일일 수집의 성공 여부는 Actions 실행 결과로 확인하세요.

Android 기기의 배경 클릭 전달과 사내 PC의 Codex 실행은 별도 검증 대상입니다. 수집하지 않은 Material 3 동적 본문이나 다른 샘플 Kotlin 파일의 내용은 근거로 제공하지 않습니다.
