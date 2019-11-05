{% extends "base.tpl" %} 
{% block head %} 
    {{ super() }}
    <link rel="stylesheet" href="public/css/showCardContainer.css">
    <title>卡片展示----姬广超的个人网站</title>
{% endblock %} 
{% block main %}
    <div class="showCardContainer">
        {% for item in newsList %}
            <div class="showCard">
                <div class="img">
                    <a href="news?post_id={{ item.post_id}}">
                        <img src="{{ item.cover }}"  width="300" height="200">
                    </a>
                </div>
                <div class="desc">{{ item.title }}</div>
                <div class="meta">来源:{{ item.from_id }}&nbsp&nbsp&nbsp&nbsp&nbsp阅读:{{ item.views_count }}</div>
            </div>
        {% endfor %}
    </div>
{% endblock %}