{% extends "base.tpl" %} 
{% block head %} 
    {{ super() }}
    <link rel="stylesheet" href="public/css/snipCardContainer.css">
    <title>原创文章列表----姬广超的个人网站</title>
{% endblock %} 
{% block main %}
    <div class="snipCardContainer">
        {% for item in articles %}
            <a class="snippCard" href="article?id={{ item._id }}">
                <div class="img">
                        {% if item.img %}
                            <img src="{{ item.img }}"  width="300" height="200">
                        {% else %}
                            <img src="/public/uploads/0646a060-0788-11ea-8da7-6d9c3eaeb94c.jpg" alt="default img" width="300" height="200">
                        {% endif %}              
                </div>
                
                <div class="title">
                    {{ item.title }}
                </div>
                <div class="digest"> 
                    {{ item.digest }}
                </div>
                <div class="timedesc"> 
                   {{ item.author }}&nbsp&nbsp{{ helper.articleTime(item.createdAt) }}
                </div>
                <div class="meta">阅读:{{ item.meta.visits }}&nbsp&nbsp喜欢:{{ item.meta.favs }}</div>
            </a>
        {% endfor %}
    </div>
{% endblock %}