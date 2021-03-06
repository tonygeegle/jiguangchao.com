<!DOCTYPE html>
<html lang="en">

<head>
    {% block head %}
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="public/css/index.css">
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css"> {% endblock %}
</head>

<body>
    <div id="mainContainer">

        <div class="hearder item">
            {% block header %}
            <div class="naviBar">
                <a class="nav-item" href="/"><i class="fa fa-home" style="font-size:24px"></i>&nbsp主页</a>
                <a class="nav-item" href="/news"><i class="fa fa-newspaper-o" style="font-size:20px"></i>&nbsp新闻</a>
                <a class="nav-item" href="/articleSnip"><i class="fa fa-html5" style="font-size:24px"></i>&nbsp原创</a> 
                {% if user %}
                <div class="nav-item dropdown">
                    <a class="userinfo">
                        <img src="{{ user.photo }}" width="25" height="25">
                        <span id ="user-display-name"> {{ user.displayName }}</span>
                    </a>
                    <div class="dropdown-content">
                        <a href="/articleList">文章管理</a>
                        <a href="/editArticlePage">新建文章</a>
                        <a href="/userList">用户管理</a>
                        <a href="/logout" style="color:red">退出登录</a>
                    </div>
                </div>
                {% else %}
                <a class="nav-item" href="/loginPage"><i class="fa fa-sign-in" style="font-size:22px"></i>&nbsp 登陆</a> 
                {% endif %}

                <a class="nav-item endOfBar" href="/about"><i class="fa fa-question-circle-o" style="font-size:22px"></i>&nbsp Me</a> {# <a class="endOfBar" href="#">关于本站&nbsp<i class="fa fa-question-circle-o" style="font-size:22px"></i></a> #}
            </div>
            {% endblock %}
        </div>


        <div class="sidebar item">
            {% block sidebar %}
            <ul>
                <li> 编程非常好玩编程非常好玩编程非常好玩编程非常好玩</li>
                <li> 编程非常好玩编程非常好玩编程非常好玩编程非常好玩</li>
                <li> 预留广告位置</li>
                <li> 预留广告位置</li>
            </ul>
            {% endblock %}
        </div>

        <div class="main item">
            {% if tags %}
                <div id="displayType">
                    <span>展示方式:</span> 
                    {% for tag in tags%}
                        <a href="{{ tag.url }}">{{ tag.name }}</a>
                    {% endfor %}
                </div>
                <script>
                    // 获取当前页面的URL
                    var curPath = window.location.href;
                    console.log(curPath);
                    // arry是一个元素为 <a> 数组
                    var arry = document.getElementById('displayType').getElementsByTagName('a');
                    for (var i = 0; i < arry.length; i++) {
                        console.log(arry[i].href);
                        if (arry[i].href === curPath) {
                            arry[i].classList.add('active')
                        } else {
                            arry[i].classList.remove("active");
                        }
                    }
                </script>
            {% endif %}
            {% block main %} {# 这里将会替换成子模板的内容 #} {% endblock %}
        </div>
        {% block footer %}
        <div class="footer item">Copyright @ 2019 www.jiguangchao.com <a href="http://www.beian.miit.gov.cn" target="_blank">鲁ICP备19013735号-1</a></div>
        {% endblock %}
    </div>

</html>