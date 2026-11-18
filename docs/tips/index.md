---
layout: default
title: Daily Tips
permalink: /tips/
---

# 날짜별 Compose 팁

상세 페이지에는 적용 버전, 문제 패턴, 개선 코드, 진단 절차, 공식 문서 링크가 있습니다. 코드 블록의 **복사** 버튼으로 그대로 가져갈 수 있습니다.

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
