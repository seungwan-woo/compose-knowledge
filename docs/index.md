---
layout: default
title: Compose 개발·디버깅·리뷰 지식
permalink: /
---

# 개발자가 읽고 AI가 재사용하는 Compose 지식

공식 AndroidX 문서를 근거로 작성한 개발·디버깅·코드 리뷰 팁입니다. 각 문서는 **Kotlin 코드 복사**, **API 적용 버전**, **검증 수준**, **공식 출처**를 포함합니다.

- **사람**: 아래 문서를 열어 구문 강조된 코드를 복사합니다.
- **AI 에이전트**: [AI 문서 목록]({{ '/llms.txt' | relative_url }}) 또는 [JSON 인덱스]({{ '/tips/index.json' | relative_url }})에서 관련 문서를 찾고, 원본 Markdown을 가져갑니다.
- **출처**: 페이지와 AI용 문서는 서로 다른 복사본이 아니라 Git 저장소의 **동일 Markdown 파일**에서 나옵니다.

## Daily Tips

<div class="tip-list">
{% assign tips = site.pages | where: "tip", true | sort: "doc_date" | reverse %}
{% for item in tips %}
  <a class="tip-item" href="{{ item.url | relative_url }}">
    <time datetime="{{ item.doc_date }}">{{ item.doc_date }}</time>
    <strong>{{ item.title | escape }}</strong>
    <span>{{ item.summary | escape }}</span>
  </a>
{% endfor %}
</div>

> 코드 예시는 API 계약을 기반으로 작성한 예시입니다. 실제 프로젝트의 Kotlin/Compose/AGP 조합에서 컴파일 및 단말 검증이 필요합니다.
