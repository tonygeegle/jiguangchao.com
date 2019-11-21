{% extends "base.tpl" %} 
{% block head %} 
    {{ super() }}
    <link rel="stylesheet" href="public/css/snipCardContainer.css">
    <title>新闻列表----姬广超的个人网站</title>
{% endblock %} 
{% block main %}
    <div class="snipCardContainer">
        {% for item in newsList %}
            <a class="snippCard" href="news?post_id={{ item.post_id}}">
                <div class="img">
                    
                        {% if item.cover %}
                            <img src="{{ item.cover }}"  width="300" height="200">
                        {% else %}
                            <img src="https://www.runoob.com/wp-content/uploads/2016/04/img_forest.jpg" alt="Forest" width="300" height="200">
                        {% endif %}              
                    
                </div>
                <div class="title">
                    {{ item.title }}
                </div>
                <div class="digest">
                    {{ item.summary }}
                </div>
                <div class="timedesc">
                    {{ item.author_name }}&nbsp&nbsp{{ helper.articleTime(item.published_at) }}
                </div>
                <div class="meta">来源:{{ item.from_id }}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp阅读:{{ item.views_count }}</div>
            </a>
        {% endfor %}
    </div>
{% endblock %}