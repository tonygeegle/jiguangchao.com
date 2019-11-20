'use strict';

const Controller = require('egg').Controller;
const assert = require('assert');

class CommentController extends Controller {
    async create() {
        const { ctx } = this
        const user = this.ctx.user;

        // json格式
        const commentPartial = this.ctx.request.body;
        try {
            // 校验字段
            //....
            // 这里定义为数组是因为insertMany返回数组
            let newComments = [];
            // 补充user信息，形成完整的obj
            const commentObj = {...commentPartial, 'user_id': user.id, 'user_name': user.displayName, 'user_photo': user.photo };
            // 方案:3   成功
            newComments = await new Promise(resolve => {
                this.ctx.model.Comment.insertMany([commentObj], (err, res) => {
                    resolve(res);
                });
            });
            // 方案:1  无效
            // 遇到了异步的问题，用了上面的解决方案可以了，但是还不是很明白。以后再说。
            // await this.ctx.model.Comment.insertMany([commentObj], (err, res) => {
            //     console.log("1. insert comment->", err, res);
            //     newComment = res;
            // });
            // console.log('2. newComment--->', newComment);
            // 方案:2  无效
            // Make a request for a user with a given ID
            // this.ctx.model.Comment.insertMany([commentObj])
            //     .then(function(res) {
            //         // handle success
            //         newComment = res;
            //     })
            //     .catch(function(error) {
            //         // handle error
            //         console.log(error);
            //     })
            // console.log('2. newComment--->', newComment);
            // 设置body直接为一个对象，则response就自动设置为json
            ctx.body = { code: 200, message: 'ok', newComments };
        } catch (error) {
            ctx.status = 500;
            ctx.body = { code: 500, message: error };
        }
    }

    async fetch() {
        const { ctx } = this
        // const { _id, parent_id, user_id } = this.ctx.query;
        const query = ctx.query;
        // 去除query中的空键值
        for (var key in query) {
            if (!query[key]) {
                delete query[key];
            }
        }
        // console.log(query);

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

    async update() {
        const { ctx } = this
        const { _id, favs } = ctx.request.body;
        try {
            // 根据条件组合{ _id, parent_id, user_id } find 记录
            await this.ctx.model.Comment.update({ _id }, { favs });
            // 设置body直接为一个对象，则response就自动设置为json
            ctx.body = { code: 200, message: 'ok' };;
        } catch (error) {
            ctx.status = 500;
            ctx.body = { code: 500, message: 'error' };
        }
    }
}

module.exports = CommentController;