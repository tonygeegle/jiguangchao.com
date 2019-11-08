<!DOCTYPE html>
<html lang="en">

<head>
    {% block head %}
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="public/css/index.css">
        <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
    {% endblock %}
</head>

<body>
    <div id="mainContainer">
        
        <div class="hearder item">
            {% block header %}
                <div class="naviBar">
                    <a href="/"><i class="fa fa-home" style="font-size:24px"></i>&nbsp主页</a>
                    <a href="/articleSnip"><i class="fa fa-html5" style="font-size:24px"></i>&nbsp编程</a>
                    <a href="/picSnip"><i class="fa fa-etsy" style="font-size:20px"></i>&nbsp卡片</a>
                    {% if user %}
                    <div class="dropdown">
                        <a class="userinfo">
                            <img src="{{ user.photo }}"  width="25" height="25">
                            <span> {{ user.displayName }}</span>
                        </a>
                        <div class="dropdown-content">
                            <a href="/articleList">文章管理</a>
                            <a href="/editArticlePage">新建文章</a>
                            <a href="/logout" style="color:red">退出登录</a>
                        </div>
                    </div>
                    {% else %}
                            <a href="/loginPage"><i class="fa fa-sign-in" style="font-size:22px"></i>&nbsp 登陆</a>
                    {% endif %}    
    
                    <a  class="endOfBar" href="/"><i class="fa fa-question-circle-o" style="font-size:22px"></i>&nbsp About Me</a>
                    {# <a class="endOfBar" href="#">关于本站&nbsp<i class="fa fa-question-circle-o" style="font-size:22px"></i></a> #}
                </div>
            {% endblock %}
         </div>
        
       
        <div class="sidebar item">
            {% block sidebar %}
                <ul>
                    <li> 编程非常好玩编程非常好玩编程非常好玩编程非常好玩</li>
                    <li> 编程非常好玩编程非常好玩编程非常好玩</li>
                </ul>
            {% endblock %}
        </div>
       
         <div class="main item">
            {% block main %}
                {# 这里将会替换成新的内容 #}
            {% endblock %}
        </div>
        {% block footer %}
            <div class="footer item">footer</div>
        {% endblock %}
    </div>   

</html>
