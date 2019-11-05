{% extends "base.tpl" %} 
{% block head %} 
    {{ super() }}
    <link rel="stylesheet" href="public/css/showCardContainer.css">
    <title>卡片展示----姬广超的个人网站</title>
{% endblock %} 
{% block main %}
    <div class="showCardContainer">
        <div class="showCard">
            <div class="img">
                <a target="_blank" href="img_fjords.jpg">
                    <img src="https://www.runoob.com/wp-content/uploads/2016/04/img_fjords.jpg" alt="Trolltunga Norway" width="300" height="200">
                </a>
            </div>
            <div class="desc">desc</div>
            <div class="meta">meta</div>
        </div>
        <div class="showCard">
            <div class="img">
                <a target="_blank" href="img_forest.jpg">
                    <img src="https://www.runoob.com/wp-content/uploads/2016/04/img_forest.jpg" alt="Forest" width="600" height="400">
                </a>
            </div>
            <div class="desc">desc</div>
            <div class="meta">meta</div>
        </div>
    </div>
{% endblock %}