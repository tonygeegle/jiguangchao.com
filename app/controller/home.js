'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.redirect('/news');
    }
    async about() {
        this.ctx.redirect('/article?id=5dcac4174900c362ff772bb9');
    }
}

module.exports = HomeController;