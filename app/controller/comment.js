'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
    async create() {
        const { ctx } = this
        const user = this.ctx.user;
        // json格式
        const commentPartial = this.ctx.request.body;
        try {
            // 校验字段
            // ............
            // 补充user信息，形成完整的obj
            const commentObj = {...commentPartial, 'user_id': user.id, 'user_photo': user.photo }
            await this.ctx.model.Comment.insertMany([commentObj], function(err, res) {
                console.log("insert comment->", err, res);
            });
        } catch (error) {
            this.ctx.body = `<h2>error<h2/>`;
        }
        // 设置响应内容和响应状态码 200ok
        // ctx.body = articleObj;
    }
}

module.exports = CommentController;