{% extends "base.tpl" %}
{% block head %}
    {{ super() }}
    
    <link rel="stylesheet" href="public/css/commentContainer.css">
     <link rel="stylesheet" href="public/css/articleContainer.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/vs2015.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/highlight.min.js"></script>
    <script>
        hljs.initHighlightingOnLoad();
    </script>
    <title>原创文章----姬广超的个人网站</title>
{% endblock %}
{% block main %}
    <div class="articleContainer">
        {{ helper.MarkToHtml(article.body)|safe }}
    </div>
    <div class="commentContainer"> 
        <div class="comment-input">
            <div class="avatar">
                {% if user %}
                    <img src="{{user.photo}}" alt="img" width="30" height="30">
                {% else %}
                    <i class="fa fa-github" style="font-size:2.5em"></i>
                {% endif %}
            </div>
            <form action="xxx"  id="comment" method="post"  enctype="application/x-www-form-urlencoded">
                <div class="parent_id" style="display:none;">
                    <input type="text" name="parent_id" value={{article._id}}>
                </div>
                <textarea rows="5" name="comment" placeholder="写点评论什么的吧..." style="resize:none;"></textarea>
                <div>
                    <input type="submit" value="提交">
                </div>
            </form>
        </div>
    </div>
{% endblock %}