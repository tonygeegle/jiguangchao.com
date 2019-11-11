'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {

    constructor(ctx) {
        super(ctx);
        // tags为传给模板可用的url参数，用来在显示内容列表上面进行切换显示或者筛选类别
        this.tags = [{ name: '列表', url: '/news' }, { name: '卡片', url: '/picSnip' }]
    }

    async news() {
        // if (this.ctx.isAuthenticated()) {
        //     console.log(JSON.stringify(this.ctx.user, null, 2));
        // }
        const post_id = this.ctx.query.post_id;
        const newsList = this.ctx.app.cache;
        const user = this.ctx.user;
        const tags = this.tags;

        if (post_id) {
            const news = newsList.find(item => item.post_id === post_id) || { content: '<h3>获取新闻内容失败！</h3>' };
            await this.ctx.render('news.tpl', { news });
            // 否则渲染新闻列表
        } else {
            await this.ctx.render('newsList.tpl', { tags, user, newsList });
        }

    }
    async newsPicSnip() {
        const tags = this.tags;
        const user = this.ctx.user;
        const newsList = this.ctx.app.cache;
        await this.ctx.render('picSnip.tpl', { tags, user, newsList });
    }
}

module.exports = NewsController;