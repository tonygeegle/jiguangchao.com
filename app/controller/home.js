'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const articles = await this.ctx.service.article.getAll();
        // console.log(articles);
        await this.ctx.render('articleSnip.tpl', { articles });
    }
}

module.exports = HomeController;