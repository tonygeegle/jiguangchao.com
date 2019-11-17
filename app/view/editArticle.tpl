{% extends "base.tpl" %}
{% block head %}
    {{ super() }}
    <link rel="stylesheet" href="public/css/editArticle.css">
    <title>创建/修改文章----姬广超的个人网站</title>
{% endblock %}
{% block main %}
    <div class="editArticle">
        <form action="upload"  id="form" method="post"  enctype="multipart/form-data">
            {# 下面.id设置为display：none， 不显示给用户，为了方便把_id一块json格式传给后台 #}
            <div class="id" style="display:none;">
                <input type="text" name="_id" value={{article._id}}>
            </div>
            <div class="title">
                标题:<input type="text" name="title" value={{article.title}}>
            </div>
            <div class="digest">
                摘要:<textarea rows="4" name="digest" style="resize:none;">{{article.digest}}</textarea>
            </div>
            <div class="body">
                内容:<textarea rows="30" cols="40" name="body">{{article.body}}</textarea>
            </div>
            <div class="upload">
                图片:<input type="file" name="img" id="img" accept="image/gif, image/jpeg" />
                <input type="checkbox" id="checkbox" name="haveFile" value="true" checked="checked" onclick="checkboxOnclick(this)" /><span>同时上传图片</span>
            </div>
            <div class="submit">
                <input type="submit" value="提交">
            </div>
        </form>
    </div>
    <script>
        var formElement = document.getElementById('form');
        var uploadElement = document.getElementById('img');
        var checkboxElement = document.getElementById('checkbox');
        function checkboxOnclick(checkbox) {
            uploadElement.disabled = !checkbox.checked;
            formElement.enctype = checkbox.checked ? 'multipart/form-data' : 'application/x-www-form-urlencoded';
        }
        //模拟点击一下，防止 upload组件和CheckBox组件状态不匹配
        checkboxOnclick(checkboxElement);
    </script>
{% endblock %}