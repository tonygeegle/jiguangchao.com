{% extends "base.tpl" %} 
{% block head %} 
    {{ super() }}
    <link rel="stylesheet" href="public/css/snipCardContainer.css">
    <title>原创文章列表----姬广超的个人网站</title>
{% endblock %} 
{% block main %}
    <div class="snipCardContainer">
        {% for item in articles %}
            <div class="snippCard">
                <div class="img">
                    <a href="article?id={{ item._id }}">
                        {% if item.img %}
                            <img src="{{ item.img }}"  width="300" height="200">
                        {% else %}
                            <img src="/public/uploads/8661af70-05c0-11ea-9ea4-2f4461f08fbd.jpg" alt="default img" width="300" height="200">
                        {% endif %}              
                    </a>
                </div>
                
                <div class="title">
                    <h3>{{ item.title }}</h3>
                </div>
                <div class="digest"> 
                    {{ item.digest }}
                </div>
                <div class="timedesc"> 
                   {{ item.author }}&nbsp&nbsp{{ helper.articleTime(item.createdAt) }}
                </div>
                <div class="meta">阅读:{{ item.meta.visits }}&nbsp&nbsp喜欢:{{ item.meta.favs }}</div>
            </div>
        {% endfor %}
    </div>
{% endblock %}