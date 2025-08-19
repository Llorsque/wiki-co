---
layout: default
title: Alle producten & diensten
permalink: /product/
---
# Alle producten & diensten

<div class="grid">
{% assign items = site.producten | sort: 'title' %}
{% for p in items %}
  {% include product_card.html title=p.title url=p.url theme=p.theme type=p.type summary=p.summary %}
{% endfor %}
</div>
