{% extends "base.tpl" %}
{% block head %}
    {{ super() }}
    <link rel="stylesheet" href="public/css/login.css">
    <title>用户登陆----姬广超的个人网站</title>
{% endblock %}
{% block main %}
    <div class="login">
        <fieldset>
            <legend><h3>无需注册，直接使用第三方登陆</h3></legend>
            
            <div class="auth">
                <h3>目前只支持GitHub、微博登陆</h3>
                <a href="/passport/github"><i class="fa fa-github" style="font-size:2.5em"></i></a>
                <a href="/passport/weibo"><i class="fa fa-weibo" style="font-size:2.5em"></i></a>
                <a href="/passport/github"><i class="fa fa-weixin" style="font-size:2.5em"></i></a>
                <a href="/passport/github"><i class="fa fa-qq" style="font-size:2.5em"></i></a>
            </div>
        </fieldset>
    </div>
{% endblock %}