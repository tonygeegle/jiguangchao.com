{% extends "base.tpl" %}
{% block head %}
    {{ super() }}
    <link rel="stylesheet" href="public/css/articleContainer.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/vs2015.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/highlight.min.js"></script>
    <script>
        hljs.initHighlightingOnLoad();
    </script>
    <title>原创文章----姬广超的个人网站</title>
{% endblock %}
{% block main %}
    <div class="articleContainer">
        {{ helper.MarkToHtml(article.body)|safe }}
    </div>
{% endblock %}