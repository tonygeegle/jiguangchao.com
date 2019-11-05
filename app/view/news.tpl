{% extends "base.tpl" %}
{% block head %}
    {{ super() }}
    <link rel="stylesheet" href="public/css/articleContainer.css">
    <title>新闻详情----姬广超的个人网站</title>
{% endblock %}
{% block main %}
    <div class="articleContainer">
        <div style="text-align: center;">
                <h2>{{ news.title }}</h3>
        </div>
        {{ news.content|safe}}
    </div>
{% endblock %}