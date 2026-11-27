---
layout: default
title: Daily Tips
permalink: /tips/
---

# 날짜별 Compose 팁 / <span lang="en">Daily Compose Tips</span>

상세 페이지에는 적용 버전, 문제 패턴, 개선 코드, 진단 절차, 공식 문서 링크가 있습니다. 코드 블록의 **복사** 버튼으로 그대로 가져갈 수 있습니다.

<p lang="en">Read each tip in Korean or English. Each tip lists its Compose version scope, example code, checks, and official sources.</p>

<div class="tip-list">
{% assign tips = site.pages | where: "tip", true | sort: "doc_date" | reverse %}
{% for item in tips %}
  <div class="tip-item">
    <a href="{{ item.url | relative_url }}" lang="{{ item.lang | default: 'en' }}">
      <time datetime="{{ item.doc_date }}">{{ item.doc_date }}</time>
      <strong>{{ item.title | escape }}</strong>
      <span>{{ item.summary | escape }}</span>
    </a>
    {% include tip-language-links.html tip=item %}
  </div>
{% endfor %}
</div>
