{% extends "base.tpl" %} 
{% block head %} 
    {{ super() }}
    <link rel="stylesheet" href="public/css/showCardContainer.css">
    <title>文章卡片----姬广超的个人网站</title>
{% endblock %} 
{% block main %}
    <div class="showCardContainer">
        {% for item in articles %}
            <div class="showCard">
                <div class="img">
                    <a href="article?id={{ item._id }}">
                        {% if item.img %}
                            <img src="{{ item.img }}"  width="300" height="200">
                        {% else %}
                            <img src="https://www.runoob.com/wp-content/uploads/2016/04/img_forest.jpg" alt="Forest" width="300" height="200">
                        {% endif %}   
                    </a>
                </div>
                <div class="desc">{{ item.title }}</div>
                <div class="meta">作者:{{ item.author }}&nbsp&nbsp&nbsp&nbsp&nbsp阅读:{{ item.meta.visits }}</div>
            </div>
        {% endfor %}
    </div>
{% endblock %}