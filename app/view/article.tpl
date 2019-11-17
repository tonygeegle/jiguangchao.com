{% extends "base.tpl" %}
{% block head %}
    {{ super() }}
    
    <link rel="stylesheet" href="public/css/commentContainer.css">
    <link rel="stylesheet" href="public/css/articleContainer.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/vs2015.min.css">
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
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
                <div style="display:none;">
                    <input id="parent_id" type="text" name="parent_id" value={{article._id}}>
                </div>
                <textarea id="comment_body" rows="5" name="comment" placeholder="写点评论什么的吧..." style="resize:none;"></textarea>
                <div>
                    <input type="button" onclick="commentOnclick()" value="提交">
                </div>
            </form>
            <script>
                // var commentForm = document.getElementById('comment');
                var parent_id_ele = document.getElementById('parent_id');
                var body_ele = document.getElementById('comment_body');
                function commentOnclick() {
                    parent_id =  parent_id_ele.value;
                    body = body_ele.value;
                    console.log({parent_id, body});
                    if (!!parent_id && !!body) {                      
                        axios.post('/comment', {
                                parent_id,
                                body
                            })
                            .then(function (response) {
                                console.log(response);
                            })
                            .catch(function (error) {
                                console.log(error);
                            }); 
                    }
                    else {
                         alert("留言内容不能为空！");
                    }
                }
            </script>
        </div>
    </div>
{% endblock %}