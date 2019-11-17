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
            // 设置body直接为一个对象，则response就自动设置为json
            ctx.body = { code: 200, message: 'ok' };
        } catch (error) {
            ctx.status = 500;
            ctx.body = { code: 500, message: 'error' };
        }
    }

    async fetch() {
        const { ctx } = this
        const user = this.ctx.user;
        // const { _id, parent_id, user_id } = this.ctx.query;
        const query = this.ctx.query;
        // 去除query中的空键值
        for (var key in query) {
            if (!query[key]) {
                delete query[key];
            }
        }
        console.log(query);

        try {
            // 根据条件组合{ _id, parent_id, user_id } find 记录
            const comments = await this.ctx.model.Comment.find(query);
            // 设置body直接为一个对象，则response就自动设置为json
            ctx.body = comments;
        } catch (error) {
            ctx.status = 500;
            ctx.body = { code: 500, message: 'error' };
        }
    }
}

module.exports = CommentController;