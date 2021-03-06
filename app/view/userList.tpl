{% extends "base.tpl" %}
{% block head %}
    {{ super() }}
    <link rel="stylesheet" href="public/css/articleList.css">
    <title>用户管理----姬广超的个人网站</title>
{% endblock %}
{% block main %}
    <div class="articleList">
        <table id="articleList">
            <tr>
                <th>index</th>
                <th>photo</th>
                <th>id</th>
                <th>name</th>
                <th>displayName</th>
                <th>provider</th>
                <th>grade</th>
                <th>createdAt</th>
                <th>操作</th>
            </tr>
            {% set count = 1 %}
            {% for item in users %}
                <tr>
                    <td>{{count}}</td>
                    <td><img src="{{ item.photo }}" width="25" height="25" style="border-radius: 20%;"></td>
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.displayName}}</td>
                    <td>{{item.provider}}</td>
                    <td>{{item.grade}}</td>
                    <td>{{helper.simpleTime(item.createdAt)}}</td>
                    <td> <a href="#">修改</a> <a href="deleteUser?id={{item._id}}">删除</a></td>
                </tr>
                {% set count = count + 1%}
            {% endfor %}
        </table>
    </div>
{% endblock %}