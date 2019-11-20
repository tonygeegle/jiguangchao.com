{% extends "base.tpl" %} {% block head %} {{ super() }}

<link rel="stylesheet" href="public/css/commentContainer.css">
<link rel="stylesheet" href="public/css/articleContainer.css">
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/vs2015.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/highlight.min.js"></script>
<script>
    hljs.initHighlightingOnLoad();
    Date.prototype.Format = function(fmt) { //author: meizz   
        var o = {
            "M+": this.getMonth() + 1, //月份   
            "d+": this.getDate(), //日   
            "h+": this.getHours(), //小时   
            "m+": this.getMinutes(), //分   
            "s+": this.getSeconds(), //秒   
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
            "S": this.getMilliseconds() //毫秒   
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
</script>
<title>原创文章----姬广超的个人网站</title>
{% endblock %} {% block main %}
<div class="articleContainer">
    {{ helper.MarkToHtml(article.body)|safe }}
</div>
<div class="commentContainer">
    <div class="comment-input">
        <div class="avatar">
            {% if user %}
            <img src="{{user.photo}}" alt="img" width="50" height="50"> {% else %}
            <i class="fa fa-github" style="font-size:2.5em"></i> {% endif %}
        </div>
        <form action="xxx" id="comment" method="post" enctype="application/x-www-form-urlencoded">
            <div style="display:none;">
                <input id="parent_id" type="text" name="parent_id" value={{article._id}}>
            </div>
            <textarea id="comment_body" rows="5" name="comment" placeholder="写点评论什么的吧...本留言功能模块采用的是用 axios 发送ajax请求，页面无需刷新！但是请先登录！！！" style="resize:none;"></textarea>
            <div>
                <input type="button" onclick="commentOnclick()" value="提交">
            </div>
        </form>
        <script src="https://unpkg.com/axios@0.19.0/dist/axios.min.js"></script>
        <script>
            // var commentForm = document.getElementById('comment');
            var isUserLogin = document.getElementById('user-display-name');
            var parent_id_ele = document.getElementById('parent_id');
            var body_ele = document.getElementById('comment_body');
            var parent_id = parent_id_ele.value;
            
            function commentOnclick() {
                if (!isUserLogin) {
                    alert("大哥，请先登录一下！");
                    return;
                }
                //每次点击获取最新的body_ele.value 
                body = body_ele.value;
                if (!!parent_id && !!body) {
                    axios.post('/comment', {
                            parent_id,
                            body
                        })
                        .then(function(response) {
                            alert("留言提交成功！");              
                            const {data:{newComments}} = response;
                            console.log('提交后返回的新的comment',newComments);
                            // 刷新下方留言列表
                            createCommentList(newComments);
                        })
                        .catch(function(error) {
                            alert("留言提交失败！message：" + error.message);
                            console.log(error);
                        });
                } else {
                    alert("留言内容不能为空！");
                }
            }
        </script>
    </div>
</div>
<div class="commentList">

    <h4>留言列表:</h4>
    <div id="commentList">
        <div id="comment-item-template" class="comment-item" style="display:none;">
            <div class="avatar">
                <img src="" alt="img" width="50" height="50">
            </div>
            <div class="displayName">
                displayName
            </div>
            <div class="body">
                body
            </div>
            <div class="createdAt">
                createdAt
            </div>
            <div class="meta">
                <i class="fa fa-thumbs-o-up" style="font-size:22px" onclick="metaOnclick(this)"></i>&nbsp<span class="meta-fav">meta</span>
            </div>
        </div>
    </div>
    <script>
        // 用户点击留言右下的大拇指图标触发
        function metaOnclick(meta) {
            if (meta.classList.contains('fa-thumbs-o-up')) {
                _id = meta.parentElement.parentElement.id;
                meta_fav = meta.parentElement.getElementsByTagName('span')[0]
                num = parseInt(meta_fav.innerText);
                meta_fav.innerText = ++num;
                meta.classList.replace('fa-thumbs-o-up', 'fa-thumbs-up');
                axios.put('/comment', {_id, favs: num});
            }
        }

        var template = document.getElementById('comment-item-template');
        var commentListContainer = document.getElementById('commentList');
        // getComment：后台获取留言的json数据
        async function getComment(params = {
            parent_id
        }) {
            try {
                const response = await axios.get('/comment', {
                    params
                });
                return response;
            } catch (error) {
                console.error(error);
            }
        }
        // 把留言的json数据生成真正的dom
        async function createCommentList(comments = []) {
            // 如果参数是空数组，则异步获所有取评论内容
            if (!comments.length) {
                const {
                    data
                } = await getComment();
                comments = data;
            }
            
            console.log(comments);
            let newItem = null;
            const fragment = document.createDocumentFragment();
            comments.forEach(comment => {
                // 根据模板生成DOM
                newItem = template.cloneNode(true);
                newItem.id = comment._id;
                newItem.style.display = 'grid';
                newItem.getElementsByClassName('body')[0].innerText = comment.body;
                newItem.getElementsByClassName('displayName')[0].innerText = comment.user_name;
                time_str = new Date(comment.createdAt).Format('MM-dd hh:mm');
                newItem.getElementsByClassName('createdAt')[0].innerText = time_str;
                newItem.getElementsByTagName('span')[0].innerText = comment.favs;
                newItem.getElementsByTagName('img')[0].src = comment.user_photo;
                fragment.appendChild(newItem);
            });
            console.log(fragment);
            // 把新DOM元素一次性插入到<div id="commentList">
            commentListContainer.appendChild(fragment);
        }
        createCommentList();
    </script>
</div>
{% endblock %}