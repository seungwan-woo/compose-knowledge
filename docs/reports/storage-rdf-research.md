# 로컬 저장소 후보: RDF와 property graph 1차 자료 검토

조사일: **2026-11-12 UTC**. 공식 GitHub 저장소의 README, LICENSE, 소스에 포함된 공식 문서와 GitHub API를 읽었다. DB 설치, corpus 재수집, 부하 시험은 하지 않았다. 일부 제품 웹사이트는 환경 네트워크 정책으로 접근할 수 없어, 동일 프로젝트가 관리하는 GitHub 문서 원본을 고정 revision으로 사용했다. 아래 성능·운영 비교는 구조에 따른 판단이며 측정 결과가 아니다.

## 현재 프로젝트에 대한 판단

현재 요구에는 **기존 snapshot 저장·검색 경로를 유지하고, 필요하면 관계 테이블을 보강하는 편이 우선**이다. 로컬 MCP는 도구 호출 인터페이스이고 RDF/graph DB는 저장·질의 계층이다. 둘은 대체 관계가 아니다. 같은 `sync → search → read` 계약 위에 어느 저장소든 연결할 수 있다.

[기존 coverage 기록](coverage-expansion.md)의 공개 snapshot `11d0d4a17ef74dce5788f73684ef5a432ea9c1b8`은 187 documents, **2,848 sections, 29 guidance cards**, 본문/코드 3,685,383 bytes, provenance가 반복되는 index 12,705,125 bytes다. 이는 그 발행 기록의 수치이며 이번 조사에서 새로 수집·검증한 corpus 규모라는 뜻은 아니다. 이 크기 자체로 별도 DB 서버가 필요하다고 결론낼 근거는 없다.

현재 [domain contract](../../src/domain/types.ts)는 section의 `relatedIds`, source의 `resource/revision/path/line range/sha256/license`, artifact `version: string | null`, 응답의 `versionStatus: match | unknown | different`, snapshot과 sync freshness를 이미 명시한다. 반면 `calls`, `implements`, `deprecatedBy`, `affects`, API 간 정확한 의존 관계는 이 타입에 없다. DB를 바꿔도 그런 간선은 생기지 않는다. 공식 소스·정적 분석·검토로 관계를 만들어야 하며 관계 종류, 근거, 적용 버전, 추출기 revision도 관리해야 한다.

- **지금:** 키워드/심볼 검색, 근거 읽기, 직접 관련 section 한 단계 접근을 유지한다. `relatedIds`의 정방향·역방향 index는 JSON map 또는 SQLite edge table로도 구현할 수 있다.
- **RDF 실험:** 외부 RDF 교환이나 SPARQL이 실제 요구라면, 동일 snapshot에서 파생한 export를 **Oxigraph native**로 읽는 작은 선택적 실험이 적합하다. Node WASM과 native persistent store를 혼동하지 않는다.
- **규칙·검증 중심:** RDFS/제한된 OWL 규칙과 SHACL을 함께 평가하려면 **Jena**가 균형 잡힌 후보다. 저장소 변경 시 SHACL 검증과 여러 SPARQL endpoint의 통합 질의가 핵심이면 **RDF4J**가 강한 후보다.
- **영향 분석 중심:** 풍부하고 검증된 API 관계에서 경로·역방향 영향 분석을 반복하고 RDF 호환이 필요하지 않다면 **Neo4j Community**를 비교한다. 그래프 시각화나 관계 질의만을 위해 현재 corpus의 검색 경로 전체를 이전할 필요는 없다.

## 후보 비교

| 후보 | 실제 구성·Node 연결 | RDF·질의·검증 | 텍스트 검색 | 현재 선택에서의 비용과 이유 |
| --- | --- | --- | --- | --- |
| **Apache Jena / TDB2 / Fuseki** | Java library에 TDB2를 embedded로 사용하거나 Fuseki HTTP service로 제공. Node에서는 HTTP SPARQL 연결이 자연스럽다. 공개 6.2.0 문서는 Java 21+ 요구. | RDF dataset/named graph, SPARQL. Jena의 별도 inference API에 configurable RDFS와 **불완전한 OWL/Lite subset** reasoner. `jena-shacl`은 SHACL Core 및 SPARQL Constraints. TDB2를 켜는 것만으로 reasoning/validation이 활성화되지는 않는다. | `jena-text`가 Lucene을 붙이는 확장. SPARQL `FILTER regex`는 indexed full-text 검색이 아니다. | JVM + DB 파일 + 선택적인 Lucene index 관리. 이미 Java 운영 기반이 있고 규칙·SHACL이 필요할 때 유리. 현재 단순 검색에는 구성이 늘어난다. [J1–J6] |
| **Eclipse RDF4J** | Java `SailRepository` + disk `NativeStore`/`MemoryStore`, 또는 RDF4J Server HTTP. Node는 HTTP client. 확인한 6.0.0 release POM은 Java 25를 지정한다. | RDF contexts/named graph, SPARQL. `SchemaCachingRDFSInferencer` 등 Sail stack을 선택해야 inferencing 적용. 일반 OWL 완전 지원으로 표현하면 안 된다. `ShaclSail`은 commit 시 검증하며 지원 predicate/제약 범위를 확인해야 한다. FedX는 다중 endpoint source selection/join 제공. | `LuceneSail`을 별도 stack으로 구성. | JVM 및 Sail 조합의 설정·호환성 확인 필요. 저장·추론·검증·검색 모듈이 있다는 사실이 모든 조합의 무조건적 동작을 보장하지 않는다. 검증·federation 요구가 명확할 때 우선 후보. [R1–R6] |
| **Oxigraph** | Rust native library, standalone CLI/HTTP server, Python native binding. RocksDB 기반 disk store 사용 가능. **Node npm binding은 WASM in-memory store**이며 동일한 persistent RocksDB API가 아니다. | RDF dataset/named graph, SPARQL query/update/federation과 RDF 직렬화. 확인한 공식 기능 목록에서 native SHACL/OWL/RDFS reasoner를 확인하지 못했으므로 포함 기능으로 계산하지 않는다. 필요하면 export 전 별도 validator/명시적 materialization 단계. | 확인한 core 문서에는 Lucene/BM25 full-text index 기능이 없다. 문자열 filter와 lexical ranking을 구분하고 기존 검색/SQLite FTS 등과 ID로 결합한다. | JVM 없이 native local sidecar를 구성할 수 있으나 binary 배포·RocksDB 파일·프로세스 관리가 추가된다. WASM은 메모리 loading 비용, native는 cache/compaction 비용을 측정해야 한다. README 자체가 SPARQL 평가 최적화가 아직 진행 중이라고 설명한다. 작은 RDF 호환성 실험의 우선 후보. [O1–O4] |
| **Neo4j Community** | JVM 기반 local single-instance server, 공식 JavaScript driver로 연결 가능. Node 프로세스에 embedded npm DB로 들어오는 제품은 아니다. | Labeled property graph와 Cypher. 타입 있는 관계 및 경로 질의에 적합. Core를 RDF/SPARQL/named graph/OWL/SHACL engine으로 분류하지 않는다. RDF import/검증 확장은 별도 선택·검토 대상이다. | Lucene 기반 full-text index가 core 기능. index를 생성하고 lexical query를 실행해야 한다. lexical score와 vector score는 같은 척도가 아니므로 hybrid ranking은 별도 설계. | JVM heap, page cache, OS memory, transaction state를 함께 관리. Community는 single instance; Enterprise의 clustering/online backup 등을 Community 기능으로 계산하지 않는다. 정교한 API 영향 분석이 검색보다 중요해질 때 비교. [N1–N4] |
| **RDFLib (보조 후보)** | Python library; in-memory graph, Berkeley DB 등의 store, remote SPARQL 연결. Node 도입에는 Python worker/CLI 경계가 추가된다. | RDF/SPARQL 처리·변환에 적합. pySHACL과 OWL-RL은 README가 연결하는 **별도 프로젝트**이며 RDFLib 자체 기능으로 합산하지 않는다. | core README는 검색 ranking engine을 제공한다고 주장하지 않는다. | RDF export/ontology prototype이나 validation 전처리의 편의성은 좋다. 별도 운영 DB의 대체 후보보다는 Python 처리 도구로 보는 편이 맞다. [P1–P2] |

RDF4J 문서에는 MemoryStore의 설계 대상이 100,000 triples 미만이라고 적혀 있지만, 이는 **현재 2,848 sections를 환산한 수치가 아니다**. 한 section이 여러 source·version·relation·literal triple로 확장되므로 실제 export 후 측정해야 한다. JSON index bytes만으로 RDF triple 수, JVM RSS, RocksDB 크기, latency를 추정하지 않는다. 다른 후보에도 검증하지 않은 “몇 MB면 충분”, “N배 빠름” 수치를 부여하지 않았다.

## RDF를 도입할 때 보존할 의미

**RDF는 데이터 모델/교환 표준 계열이지 특정 DB 제품이 아니다.** Turtle/N-Quads 파일로 내보내는 것과 persistent triplestore를 운영하는 것은 다른 결정이다. SPARQL property path로 관계를 따라가는 것, RDFS/OWL semantics로 새로운 사실을 추론하는 것, SHACL로 graph의 제약 위반을 검출하는 것도 구별해야 한다. 표준의 공통 부분을 사용할 수 있어도 full-text 확장, inference profile, SHACL 세부 지원, 운영 파일 포맷은 제품마다 다르다.

Named graph는 snapshot/source별 statement 집합을 나누는 수단이 될 수 있지만, **graph 이름 자체가 provenance·신뢰·버전 적용성을 자동으로 증명하지 않는다**. 예를 들어 다음 정보가 명시적으로 필요하다.

| 현재 의미 | RDF/graph 모델로 옮길 때의 보존 규칙 |
| --- | --- |
| Snapshot SHA와 `fresh/cached/unavailable`, `checkedAt`, `publishedAt` | immutable snapshot identity와 이번 sync observation을 구별한다. freshness는 graph content의 진실성이나 앱 버전 일치 판정이 아니다. |
| Source revision, resource/path/line, excerpt hash, license | source/evidence entity에 각각 보존. 현재 `sha256`는 **excerpt UTF-8 bytes의 hash**이며 upstream 전체 파일 hash로 재해석하지 않는다. |
| Section와 source의 연결, guidance의 검토된 evidence | 명시적 evidence relation과 검토 시 hash를 둔다. hash 변경/근거 소멸 시 기존 guidance를 유효한 것으로 다시 노출하지 않는다. |
| `relatedIds` | 우선 `relatedTo` 같은 제한된 뜻으로 이전. 이것만으로 호출·상속·의존 간선을 만들지 않는다. 역방향 조회를 추가해도 원래 방향성과 의미는 보존한다. |
| Artifact `version: null`, response `versionStatus: unknown` | 알고 있지 않음을 명시적으로 유지. 소비자 환경·질의에 따라 계산되는 `versionStatus`를 모든 상황에서 참인 section 속성으로 고정하지 않는다. |
| 추후 API 관계와 적용 버전 | 관계 assertion entity에 evidence/revision/version 범위를 묶는다. 검증하지 않은 추출 간선을 사실·추론 결과와 섞지 않는다. |

Open-world semantics에서 triple이 없다는 사실만으로 해당 관계가 거짓이라고 단정할 수 없다. 그러나 **triple 부재가 현행 `unknown` 계약의 대체 표현은 아니다**. 수집되지 않음, 적용 버전 미확인, 관계 없음이 확인됨은 서로 다르다. 앱의 resolved artifact 버전을 확인하지 못했다면 그대로 `unknown`을 반환해야 한다. SHACL로 필요한 metadata나 status 값의 존재를 검증할 수 있지만, SHACL 통과는 source assertion이 실제로 참이거나 버전이 일치한다는 보증이 아니다.

## 후속 선택을 정당화할 실제 질문

1. **현재 검색:** 지금의 frozen 질문에서 lexical 검색과 source/version filter가 개선되는가? graph DB가 이것을 자동 해결하지 않는다. 기존 검색기를 유지하고 graph는 후보 ID 확장/근거 관계 조회에만 쓰는 hybrid 구성이 가능하다.
2. **영향 분석:** “이 source hash가 바뀌면 재검토할 guidance는 무엇인가?”는 우선 hash→section→card 역 index/SQL join으로 해결 가능하다. “특정 API 변경이 여러 단계의 의존 관계를 거쳐 어떤 지침·앱에 영향을 주는가?”가 반복되면 graph 질의의 실익을 비교한다. 그 전에 해당 간선의 수집·정확성·버전 범위가 있어야 한다.
3. **Federation/교환:** 외부 팀의 RDF ontology와 같은 IRI 의미 체계를 공유하거나 여러 SPARQL endpoint를 조합해야 한다면 RDF의 이점이 커진다. 데이터 이름만 같다고 entity가 자동 정렬되지는 않으며 endpoint별 snapshot/revision이 없으면 결과의 재현성도 별도로 처리해야 한다. 복잡한 federation이면 RDF4J FedX, 단순 `SERVICE`면 다른 SPARQL engine도 후보가 된다.
4. **검증/추론:** 필요한 규칙을 먼저 열거한다. 필수 evidence/hash/version metadata는 validation 문제이고, subclass 전파 같은 새 사실 도출은 inference 문제다. 실제 요구보다 큰 OWL profile을 도입하지 않는다.

시범 도입 시 canonical snapshot은 계속 보존하고 DB는 `snapshot SHA + exporter/schema version`으로 재생성 가능한 파생 cache로 둔다. 새 DB가 완전히 생성·검증된 뒤 reader를 전환하고 이전 snapshot으로 rollback할 수 있어야 한다. 관계 분석용 관리자 query를 추가하더라도 소비자의 한 단계 연결, 세 번 read, 출력 예산을 자동 확대하지 않는다. 후보별 cold start, steady RSS, import 시간·disk bytes, update/rollback, offline 설치, 근거/버전 정확도, 실제 query p50/p95를 동일 환경에서 측정해야 하며 이번 조사는 그 측정을 수행하지 않았다.

## 라이선스와 활동 확인

라이선스는 아래에 고정한 **프로젝트 core**의 확인 결과다. 추가 index/driver/validator, binary에 포함된 dependency, 배포물의 NOTICE는 별도 구성에 따라 달라진다. 특히 GPL인 Community와 commercial Enterprise를 합쳐 “Neo4j 전체가 Apache/MIT 또는 전부 상용”이라고 부르면 틀린다. DB와 통신하는 application/driver의 라이선스를 DB core와 동일하다고 자동 판정하지도 않는다.

| 프로젝트 | 고정 source revision 및 활동 근거 | 라이선스 원문 확인 |
| --- | --- | --- |
| Jena | source `a5d016c2c7459d02afe6e49894c8187cb6c8b870` (commit 2026-11-11); 공식 사이트 원본은 6.2.0 배포를 안내. `jena-6.2.0` annotated tag 시각 2026-07-27, target `d0676a2c402ead68a133596f4ac5977be64dd251`. GitHub `/releases/latest`는 404여서 릴리스 중단으로 해석하지 않았다. | [LICENSE](https://github.com/apache/jena/blob/a5d016c2c7459d02afe6e49894c8187cb6c8b870/LICENSE): “Apache License”, “Version 2.0, January 2004”. Apache-2.0. |
| RDF4J | source `1acc280c489577aa51aeac5226e41b32889782a7` (2026-11-11); GitHub latest-release API는 [6.0.0](https://github.com/eclipse-rdf4j/rdf4j/releases/tag/6.0.0), published 2026-08-10을 반환. main POM은 6.2.0-SNAPSHOT으로 release와 구별. | [POM](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/pom.xml#L32): “Eclipse Distribution License v1.0”, “A BSD-style OSS license”. [LICENSE](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/LICENSE): “Redistribution and use in source and binary forms, with or without modification, are permitted…”와 3개 조건. GitHub 판별은 BSD-3-Clause. **EPL로 추정하지 않는다.** |
| Oxigraph | source `78734be853a4bec714ba09bbfad790e64f3a1150` (2026-11-11); latest-release API는 [v0.5.13](https://github.com/oxigraph/oxigraph/releases/tag/v0.5.13), published 2026-10-22. | [README](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/README.md#L68): “licensed under either of” Apache License 2.0 / MIT, “at your option.” [LICENSE-APACHE](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/LICENSE-APACHE), [LICENSE-MIT](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/LICENSE-MIT)도 확인. **Apache-2.0 OR MIT**. |
| Neo4j | tags API에서 확인한 [2026.10.2](https://github.com/neo4j/neo4j/tree/2026.10.2), commit `11fe55832db7219cbdb9e4535cda9795a069610e` (2026-10-29). default branch는 2026.10. GitHub latest-release API가 2017년 항목을 반환하므로 이를 현재 제품 버전으로 사용하지 않았다. | [README](https://github.com/neo4j/neo4j/blob/11fe55832db7219cbdb9e4535cda9795a069610e/README.asciidoc#L73): “Community Edition is an open source product licensed under GPLv3”; Enterprise는 “additional closed-source components … requires a commercial license”. [LICENSE.txt](https://github.com/neo4j/neo4j/blob/11fe55832db7219cbdb9e4535cda9795a069610e/LICENSE.txt)는 GPL Version 3. |
| RDFLib | source `114dd59d48fc75aea7fcb3276bd0f13e4f3103b4` (2026-11-02); latest-release API는 [7.6.0](https://github.com/RDFLib/rdflib/releases/tag/7.6.0), published 2026-02-13. | [LICENSE](https://github.com/RDFLib/rdflib/blob/114dd59d48fc75aea7fcb3276bd0f13e4f3103b4/LICENSE): “BSD 3-Clause License”. |

위 날짜는 API가 반환한 commit/tag/release timestamp를 구별해 적었다. 최근 commit이 있다는 것은 활동의 관측 근거이며, 유지보수 보장·보안 평가·성능 보장은 아니다. README/문서가 개발 branch에 속하면 release와 세부 API가 다를 수 있으므로 실제 시범 설치에서는 선택 버전의 문서를 다시 고정해야 한다.

## 기능 근거: 공식 문서 원본

모두 2026-11-12에 읽었다. Jena 사이트 revision `7c036e49ad860ad8d96e87ad546faa1c60ff8770`, RDF4J 문서 revision `1acc280c489577aa51aeac5226e41b32889782a7`, Neo4j Cypher 문서 revision `5201435420544967908ac9089076a67cabe1165b`, Operations 문서 revision `c9e563478a8d636cb7327c901d4688102da23ab4`를 고정했다.

- **J1:** [TDB2 single-machine storage/Fuseki](https://github.com/apache/jena-site/blob/7c036e49ad860ad8d96e87ad546faa1c60ff8770/source/documentation/tdb2/__index.md).
- **J2:** [Inference API와 RDFS/OWL reasoner 범위](https://github.com/apache/jena-site/blob/7c036e49ad860ad8d96e87ad546faa1c60ff8770/source/documentation/inference/__index.md#L64). 원문은 OWL reasoner를 “useful but incomplete implementation”으로 설명한다.
- **J3:** [SHACL Core/SPARQL, Fuseki operation](https://github.com/apache/jena-site/blob/7c036e49ad860ad8d96e87ad546faa1c60ff8770/source/documentation/shacl/__index.md).
- **J4:** [Lucene 기반 text extension 및 regex 차이](https://github.com/apache/jena-site/blob/7c036e49ad860ad8d96e87ad546faa1c60ff8770/source/documentation/query/text-query.md). 이 페이지의 오래된 Lucene version table을 현재 호환 버전 표로 재사용하지 않았다.
- **J5:** [공식 release source 안내·Java 21](https://github.com/apache/jena-site/blob/7c036e49ad860ad8d96e87ad546faa1c60ff8770/source/download/__index.md).
- **J6:** [Jena README](https://github.com/apache/jena/blob/a5d016c2c7459d02afe6e49894c8187cb6c8b870/README.md).
- **R1:** [Repository API / MemoryStore / NativeStore / contexts](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/site/content/documentation/programming/repository.md).
- **R2:** [Sail stack: NativeStore, RDFS inferencer, LuceneSail](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/site/content/documentation/reference/sail.md#L194).
- **R3:** [ShaclSail 검증, 지원 기능 목록, commit, memory trade-off](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/site/content/documentation/programming/shacl.md).
- **R4:** [FedX federation](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/site/content/documentation/programming/federation.md).
- **R5:** [6.0.0 release POM Java version](https://github.com/eclipse-rdf4j/rdf4j/blob/6.0.0/pom.xml).
- **R6:** [RDF4J README](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/README.md).
- **O1:** [Oxigraph 기능·RocksDB·license](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/README.md).
- **O2:** [Node/WASM in-memory binding](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/js/README.md#L7).
- **O3:** [Python in-memory/disk binding](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/python/README.md).
- **O4:** [Native CLI/HTTP SPARQL/Graph Store Protocol](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/cli/README.md).
- **N1:** [Neo4j core README·edition license](https://github.com/neo4j/neo4j/blob/11fe55832db7219cbdb9e4535cda9795a069610e/README.asciidoc).
- **N2:** [Community/Enterprise 기능·공식 language drivers](https://github.com/neo4j/docs-operations/blob/c9e563478a8d636cb7327c901d4688102da23ab4/modules/ROOT/pages/introduction.adoc).
- **N3:** [Full-text indexes: Lucene·lexical ranking](https://github.com/neo4j/docs-cypher/blob/5201435420544967908ac9089076a67cabe1165b/modules/ROOT/pages/indexes/search-indexes/full-text-indexes.adoc).
- **N4:** [Heap/page cache/native/OS/transaction memory](https://github.com/neo4j/docs-operations/blob/c9e563478a8d636cb7327c901d4688102da23ab4/modules/ROOT/pages/performance/memory-configuration.adoc).
- **P1:** [RDFLib README: stores, SPARQL, 별도 pySHACL/OWL-RL](https://github.com/RDFLib/rdflib/blob/114dd59d48fc75aea7fcb3276bd0f13e4f3103b4/README.md).
- **P2:** [RDFLib BSD-3-Clause](https://github.com/RDFLib/rdflib/blob/114dd59d48fc75aea7fcb3276bd0f13e4f3103b4/LICENSE).

활동 원자료는 각 공식 repo의 GitHub `/commits?per_page=1`, `/releases/latest`, `/tags` 및 Jena의 `git/ref/tags/jena-6.2.0`/annotated tag API다. 조사 cache는 `/tmp/.cache/storage-review/`에만 두었으며 이 문서 외 repository 파일은 수정하지 않았다.
