'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {

    async news() {
        const post_id = this.ctx.query.post_id;
        const newsList = this.ctx.app.cache;
        if (post_id) {
            const news = newsList.find(item => item.post_id === post_id) || { content: '<h3>获取新闻内容失败！</h3>' };
            await this.ctx.render('news.tpl', { news });
            // 否则渲染新闻列表
        } else {
            await this.ctx.render('newsList.tpl', { newsList });
        }

    }
}

module.exports = NewsController;