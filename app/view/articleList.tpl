{% extends "base.tpl" %}
{% block head %}
    {{ super() }}
    <link rel="stylesheet" href="public/css/articleList.css">
    <title>文章管理----姬广超的个人网站</title>
{% endblock %}
{% block main %}
    <div class="articleList">
        <table id="articleList">
            <tr>
                <th>ID</th>
                <th>title</th>
                <th>category</th>
                <th>author</th>
                <th>hidden</th>
                <th>createdAt</th>
                <th>updatedAt</th>
                <th>visits</th>
                <th>favs</th>
                <th>操作</th>
            </tr>
            {% set count = 1 %}
            {% for item in articles %}
                <tr>
                    <td>{{count}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.category}}</td>
                    <td>{{item.author}}</td>
                    <td>{{item.hidden}}</td>
                    <td>{{helper.simpleTime(item.createdAt)}}</td>
                    <td>{{helper.simpleTime(item.updatedAt)}}</td>
                    <td>{{item.meta.visits}}</td>
                    <td>{{item.meta.favs}}</td>
                    <td> <a href="editArticlePage?id={{item._id}}">修改</a> <a href="ArticlePage?id={{item._id}}">删除</a></td>
                </tr>
                {% set count = count + 1%}
            {% endfor %}
        </table>
    </div>
{% endblock %}