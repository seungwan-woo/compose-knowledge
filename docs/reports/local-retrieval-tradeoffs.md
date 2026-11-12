# Sync-first와 로컬 검색 구조의 trade-off

검토일: 2026-11-12. **권고는 skill의 첫 단계에 온라인 sync를 명시하고, 다음 구현에서는 작은 local MCP와 snapshot 재사용을 먼저 검증한 뒤 SQLite FTS5를 파생 인덱스로 붙이는 것이다.** RDF/graph는 관계 데이터와 실제 관계 질의가 필요해질 때 선택한다. 이번 변경은 skill 0.3.1과 이 검토 문서이며, MCP 서버·SQLite backend·graph DB를 제품에 구현하거나 예약을 추가하지 않았다.

## 1. 먼저 최신 발행본을 확인하고 그 작업의 근거를 고정한다

새 Compose 질문은 skill 위치·cache·원격 경로를 정한 다음 **온라인 sync → 상태 확인/SHA 고정 → 프로젝트 버전 확인 → 검색/읽기** 순서로 진행한다. 같은 채팅의 이전 질문에서 방금 sync했어도 새 질문은 다시 확인한다. 같은 질문의 후속 조회에서는 SHA를 유지하며, 새 질문 또는 명시적인 갱신 요청에서 다시 sync한다.

| 결과 | 의미와 다음 행동 |
| --- | --- |
| `fresh` | 이번 호출에서 설정된 원격의 발행 브랜치를 fetch하고 검증했다. 그 순간 관측한 SHA로 고정한다. |
| `cached` | 원격 확인 실패 또는 명시적인 offline 사용. 오류·시각과 함께 오래된 근거임을 밝힌다. 최신 근거만 요구한 질문을 충족했다고 보고하지 않는다. |
| `unavailable` | 검색/읽기를 멈추고 근거 공백을 보고한다. 데모 corpus로 조용히 대체하지 않는다. |

여기서 최신은 **설정된 원격의 마지막 발행본**이다. upstream AndroidX를 즉시 재수집하거나 사내 미러가 GitHub보다 최신임을 보장하는 의미가 아니다. 기본 브랜치 수집은 매일 08:00 KST 예약이며 지연·실패할 수 있다. `checkedAt`은 이번 sync 시각, `publishedAt`은 마지막 데이터 변경 커밋 시각이다. corpus sync는 skill/CLI 프로그램 자체의 업데이트와도 별개다.

장점은 오래된 cache 사용을 줄이고 freshness를 관측 가능하게 하는 것이다. 비용은 질문마다 원격 접근·검증 시간이 발생하고, 오프라인에서는 최신성을 확인할 수 없다는 점이다. 매 검색마다 다시 sync하면 비용과 작업 중 버전 혼합 위험이 늘므로 한 질문에서는 pin을 유지한다. 사용자·환경이 명시한 offline 설정은 처음부터 `--offline`을 사용한다.

문서형 skill은 에이전트가 따르는 절차다. 이번 수정이 모든 CLI 호출에 자동 sync hook을 넣은 것은 아니다. 실제 설치 실행과 여섯 가지 상황의 절차 검증은 [sync-first verification](sync-first-verification.md)에 있다.

## 2. MCP, 검색 인덱스, 그래프 모델은 서로 다른 계층이다

- **MCP:** Codex가 로컬 도구를 발견하고 호출하는 프로토콜. `stdio` 서버는 client가 subprocess로 실행할 수 있다. 별도 HTTP 포트나 원격 서비스가 필수는 아니다. 데이터가 로컬에 있어도 도구 결과는 연결된 모델의 문맥에 들어간다. [M1]
- **SQLite FTS5:** 본문과 검색 메타데이터를 저장하고 역색인·BM25 순위를 제공하는 로컬 검색 엔진이다. MCP와 함께 쓰거나 기존 CLI 뒤에서 쓸 수 있다. [S1]
- **Property graph:** 노드·속성·타입 있는 간선과 경로를 질의하는 모델. Neo4j/Cypher가 후보지만 현재 `relatedIds`만으로 API 호출·의존 관계가 만들어지지는 않는다.
- **RDF:** IRI와 triple/dataset을 사용하는 표준 데이터 모델. SPARQL 질의, SHACL 제약 검증, RDFS/OWL 추론은 각각 다른 기능이다. Turtle/N-Quads export와 DB 서버 운영도 별도 결정이다. [상세 검토](storage-rdf-research.md)

따라서 `local MCP + SQLite`, `local MCP + Oxigraph`, `local MCP + Jena` 모두 가능한 조합이다. 도구 인터페이스를 저장소 구현과 분리하면 consumer skill을 유지하며 비교할 수 있다.

## 3. 현재 비용과 측정의 범위

발행 snapshot `11d0d4a17ef74dce5788f73684ef5a432ea9c1b8`에는 2,848 sections, 29 guidance cards, 약 3.69 MB의 실제 본문과 약 12.71 MB의 JSON index가 있다. [코드](../../src/io/snapshot.ts)의 `validateCachedSnapshot`은 SHA identity와 전체 snapshot을 검증하며, 현재 search/read CLI는 각 호출마다 이 경로를 통과한다. sync도 같은 SHA를 다시 fetch했을 때 payload materialization과 검증을 반복한다. JSON 문자열 탐색만이 전체 지연 원인은 아니다.

| 이전 로컬 미세 측정 | 관측값 | 측정에서 빠진 것 |
| --- | --- | --- |
| 전체 snapshot 검증 3회 | 약 608–1,619 ms | 네트워크 sync, 모델 호출 |
| 이미 메모리에 있는 현재 index의 검색 | 4개 query별 7회 중앙값 약 58–63 ms | CLI 시작·snapshot 검증 |
| SQLite FTS5 in-memory 임시 검색 | 동일 4개 query별 중앙값 약 0.24–0.35 ms | 버전/출처 정책, CLI/MCP 경계, disk load, 모델 호출 |
| 임시 FTS index 구성 | 약 45 ms | 배포용 DB 검증·원자적 교체·cold disk/RSS |

[집계된 측정 결과](evidence/retrieval-microbenchmark.json)를 보존했다. 개별 7회 timing과 실행 가능한 prototype은 보존하지 않았으므로 재현 가능한 비교 benchmark로 사용하지 않는다. FTS 쪽은 AND 검색/BM25, 현재 구현은 별도 term score·version/curation 우선순위다. 결과 순위도 달랐다. 따라서 이를 동등한 검색 품질, 전체 응답 속도의 수백 배 향상, 운영 가능한 backend의 성능이라고 해석하면 안 된다. DB별 RSS·cold start·disk 크기·운영 안정성을 비교한 시험은 수행하지 않았다. 다음 비교에서는 실행 가능한 harness와 모든 trial 결과를 함께 기록해야 한다.

별도의 설치 consumer 시험에서는 짧은 지침을 먼저 읽으면서 평균 stdout이 7,003.9→5,949.9 bytes로 약 15% 줄었다. 이는 [14개 고정 질문의 결과](coverage-usability.md)이며 모델 토큰/비용 측정은 아니다. MCP나 graph DB 자체가 읽어야 할 근거량을 자동으로 줄이지 않는다. tool schema, envelope, 반복 결과도 모델 입력에 포함될 수 있으므로 최종 tool-visible 출력을 다시 측정해야 한다.

## 4. 구성별 이점과 비용

| 구성 | 얻는 것 | 추가 비용·한계 | 이 저장소에서의 판단 |
| --- | --- | --- | --- |
| 현재 JSON + 개별 CLI | Git diff/manifest 검증이 단순하고 별도 DB·서버가 없다. 기존 배포·offline 사용을 유지한다. | 매 호출 검증·parsing·process 비용. 수작업 term ranking과 큰 index. | 당장 정상 동작하는 기준선으로 유지한다. |
| **MCP + 메모리의 검증된 index** | 같은 snapshot을 서버 process 안에서 재사용해 반복 검증/로드를 줄일 수 있다. 구조화된 입력·출력과 공통 도구를 제공한다. | client별 MCP 설정, process 수명·종료·메모리 회수·여러 task 관리. host가 서버를 호출마다 재시작하면 재사용 이점이 사라진다. 검색 품질은 기존과 같다. | 작은 첫 비교 대상으로 적합. 전송층과 저장소 개선 효과를 분리해 측정한다. |
| **MCP 또는 CLI + SQLite FTS5** | exact ID/심볼/버전 metadata lookup, BM25 본문 검색, source/edge tables, index 재사용. 단일 파일 기반이라 소비자별 배포가 비교적 단순하다. | schema/index migration, tokenizer·ranking 튜닝, 원자적 교체·동시 reader 처리. raw SQL을 모델에 노출할 필요는 없다. | 현재 요구의 권장 검색 backend 후보. [S1–S3] |
| MCP + Neo4j Community | 검증된 API 간선이 쌓이면 path·역방향 영향 분석을 Cypher로 표현하기 쉽다. full-text index도 제공한다. | JVM server, 운영 memory/backup, graph import·간선 품질·edition/license 검토. 문서 검색이 자동 개선되지는 않는다. | 여러 단계 API 관계 질의가 반복될 때 선택한다. |
| MCP + RDF store | 출처·artifact·버전 관계를 IRI/named graph로 표현하고 SPARQL·RDF 교환을 사용한다. 제품에 따라 SHACL/inference/federation 가능. | ontology·IRI identity·변경 관리, triple 증식, engine별 full-text/추론 범위 차이, 추가 runtime. | 팀 간 RDF 교환·제약 검증·추론이 실제 요구일 때 유리하다. |

SQLite FTS5의 `unicode61` 같은 tokenizer는 한국어 의미 분석이나 한국어↔영어 번역 기능이 아니다. API exact match, 명시적 한국어 alias, 검증된 query expansion을 함께 유지해야 한다. 자연어 표현 차이가 주요 실패 원인으로 남으면 local embedding을 추가한 hybrid 검색을 별도로 평가할 수 있다. embedding model 배포·index rebuild·근거 recall·token 비용은 또 다른 trade-off이며 이번 제안의 필수 요소는 아니다.

Node 24의 공식 `node:sqlite` 문서는 현재 stability 1.2, release candidate로 표시된다. 현재 환경에서는 FTS5 임시 시험이 동작했지만 사내 Node build/OS에서도 기능을 확인해야 한다. 별도 native driver를 선택하면 binary/ABI 배포 관리가 추가된다. DB는 검증된 원문에서 **로컬 생성하는 파생 cache**로 두고, read-only query와 extension loading 비활성화를 기본으로 설계할 수 있다. 원격 DB 파일을 열기만 하면 기존 manifest 검증을 대체한다고 가정하지 않는다. [S2–S3]

## 5. 오픈소스 graph/RDF 후보

| 후보 | 확인한 core 라이선스 | 잘 맞는 요구 | 주의할 구분 |
| --- | --- | --- | --- |
| **Oxigraph** | Apache-2.0 **OR** MIT | JVM 없이 작은 RDF/SPARQL sidecar·export 실험 | persistent store는 native 경로. Node WASM binding은 메모리 저장소다. core의 BM25·SHACL·OWL 제공을 가정하지 않는다. |
| **Apache Jena TDB2/Fuseki** | Apache-2.0 | RDF 저장/SPARQL, 별도 RDFS·제한된 OWL reasoner, SHACL | Java runtime과 선택 모듈 관리. TDB2 설치만으로 추론/검증이 활성화되지는 않는다. |
| **Eclipse RDF4J** | EDL 1.0, BSD-style / BSD-3-Clause 판별 | SHACL commit 검증, Sail 구성, 여러 endpoint의 federation | JVM/Sail 조합 검증 필요. RDF4J를 EPL이라고 추정하지 않는다. |
| **Neo4j Community** | GPLv3 | property graph 기반 경로·API 영향 분석 | Community와 commercial Enterprise의 기능·라이선스를 구분한다. core RDF/SPARQL DB가 아니다. |
| **RDFLib** | BSD-3-Clause | Python 기반 RDF export/변환 prototype | 운영 DB·검색엔진과 구분한다. pySHACL/OWL-RL은 별도 프로젝트다. |

위 항목은 실제 공식 LICENSE/문서 원본을 읽어 확인했으며 [고정 revision·기능 근거](storage-rdf-research.md)에 연결했다. 라이선스 표는 core 기준이고 추가 driver/index/dependency 구성까지 동일하다는 뜻은 아니다. RDF를 쓴다고 별도 유료 서비스가 필요한 것은 아니며, 사내 배포에는 선택한 binary·dependency·NOTICE 구성이 기준이 된다.

## 6. 이 저장소에서 그래프의 가치가 생기는 질문

- **“이 원문이 바뀌면 어떤 지침을 재검토해야 하나?”** 현재 section→evidence→card 역 index 또는 SQL join으로 해결 가능하다.
- **“이 API 변경이 호출·구현 관계를 거쳐 어떤 API/지침에 영향을 주나?”** 검증된 `calls`, `implements`, `dependsOn` 간선과 버전 범위가 필요하다. Kotlin 정적 분석·공식 metadata·검토로 먼저 구축해야 한다. 현재 `relatedIds`를 그런 의미로 재해석하지 않는다.
- **“여러 팀의 지식과 외부 ontology를 같은 식별자로 연결하고 싶다.”** RDF IRI·공유 vocabulary·SPARQL의 가치가 커진다. 같은 이름의 API를 자동으로 동일 entity로 간주하지 않는다.
- **“모든 지침이 출처·해시·버전을 가져야 한다.”** 현행 validator와 SQL 제약으로도 검사할 수 있다. RDF 표준 기반 파이프라인을 선택했다면 SHACL이 이 제약의 교환 형식이 될 수 있다.

RDF named graph로 snapshot을 나눠도 그 이름 자체가 출처의 진실성·검토 완료·앱 버전 일치를 증명하지 않는다. 질의 문맥에 따른 `match/unknown/different`, 근거 본문 해시, source revision, stale guidance 제외 규칙을 유지해야 한다. 관계가 없다는 것과 아직 수집/확인되지 않았다는 것도 구별한다.

## 7. 권장 도입 순서와 통과 기준

1. **이번 변경:** sync-first skill을 배포한다. corpus와 프로그램 업데이트를 구분하고 cached/unavailable 경로를 명시한다. 실제 설치 검증·기존 테스트를 유지한다.
2. **다음 작은 구현:** `begin_task`, `search`, `read`만 제공하는 local stdio MCP를 같은 검색 서비스 위에 붙인다. `begin_task`가 온라인 sync를 수행하고 immutable SHA의 작업 handle을 반환하게 제안한다. 서버는 handle 없는 조회를 거절할 수 있으나 **새 질문마다 begin_task를 호출하는 것은 client/task lifecycle과 연결해야** 보장된다. MCP만 설치했다고 보장되는 기능은 아니다.
3. **검색 backend:** 검증한 snapshot마다 `snapshot SHA + index schema/tokenizer version`으로 SQLite를 만든다. 완성 후 원자적으로 새 index를 활성화하고 기존 task의 pin은 유지한다. 별도 SQL full-text index와 exact symbol table을 사용하되 version gating과 guidance/source 우선순위를 보존한다. 기존 CLI도 같은 서비스 계층을 공유한다. 변경 없는 SHA의 sync에서 materialization을 생략하는 최적화도 identity·손상 복구 검사를 보존하며 별도 검증한다.
4. **선택적 관계 실험:** SQLite edge table로 관계 query를 먼저 수집한다. RDF 교환 요구가 생기면 canonical data에서 N-Quads export + Oxigraph native를 비교한다. 규칙/SHACL/federation 요구가 명확하면 Jena/RDF4J, property graph 영향 분석이면 Neo4j를 같은 질문으로 평가한다.

각 단계에서 같은 frozen 질문을 사용해 **근거 적합성, 버전 오표시 0건, stale-card 재노출 0건, 출력 예산 준수, cold/warm p50·p95, RSS·index 크기, import/update 시간, offline 설치, concurrent pin·rollback·변조 거부**를 확인한다. 목표는 API별 읽기 수와 모델에 전달한 실제 출력을 줄이는 것이며 검색 ms만으로 승자를 정하지 않는다. Graph 탐색을 추가해도 consumer의 한 단계 연결·최대 세 번 읽기·12 KiB 한도가 자동으로 확대되지는 않는다.

MCP tools의 `inputSchema`/`outputSchema`와 구조화된 결과를 활용하되 tool envelope와 호환용 text 복제까지 포함한 실제 host 출력량을 검증한다. stdout에는 protocol 메시지만 쓰고 로그는 stderr로 보낸다. SDK/protocol version은 실제 Codex host가 지원하는 버전으로 고정한다. 현재 공식 TypeScript SDK의 LICENSE는 **Apache-2.0으로 전환 중이며 일부 기존 기여는 MIT 유지**라고 명시한다. 과거 기억만으로 전부 MIT라고 기록하지 않는다. [M1–M3]

## 직접 확인한 MCP·SQLite 근거

- **M1:** [공식 stdio transport](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/0b22bfed6e94c0c7751046d2e845fac954cac8a7/docs/specification/2026-07-28/basic/transports/stdio.mdx): client가 server subprocess를 시작하며 stdout은 MCP 메시지, stderr는 logging에 사용한다.
- **M2:** [공식 tool schema/structured content](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/0b22bfed6e94c0c7751046d2e845fac954cac8a7/docs/specification/2026-07-28/server/tools.mdx). 문서 확인 자체가 현재 Codex host와 해당 protocol revision의 호환 시험은 아니다.
- **M3:** [공식 TypeScript SDK LICENSE](https://github.com/modelcontextprotocol/typescript-sdk/blob/919bb8ea88b6e10e72c2f8b6218fad4cfdc40b2c/LICENSE), [README](https://github.com/modelcontextprotocol/typescript-sdk/blob/919bb8ea88b6e10e72c2f8b6218fad4cfdc40b2c/README.md): 새 기여 Apache-2.0, 아직 재라이선스 동의를 받지 않은 기존 MIT 기여 구분. 문서 기여는 별도 CC-BY-4.0 문구가 있다.
- **S1:** [공식 SQLite FTS5 ranking tests](https://github.com/sqlite/sqlite/blob/f157fe7debcda0d8513a2c10364e8fe781ee30ae/ext/fts5/test/fts5rank.test): FTS5 build flag, BM25 및 가중치 사용의 실행 예. 이번 환경에서도 임시 FTS5 생성/검색을 실행했다.
- **S2:** [SQLite LICENSE](https://github.com/sqlite/sqlite/blob/f157fe7debcda0d8513a2c10364e8fe781ee30ae/LICENSE.md): SQLite core는 public domain; repository의 일부 보조 파일·도구는 별도 BSD-style 등 조건을 가진다.
- **S3:** [Node 24 SQLite 공식 문서](https://github.com/nodejs/node/blob/221ffa5df3013056d72bada8a68f878576ec6019/doc/api/sqlite.md): release-candidate 상태, file/in-memory database, read-only mode, 기본 extension loading 비활성화.
