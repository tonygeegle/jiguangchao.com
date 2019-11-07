'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async loginPage() {
        await this.ctx.render('login.tpl');
    }
    async logOut() {
        const ctx = this.ctx;
        ctx.logout();
        ctx.redirect(ctx.get('referer') || '/');
    }
}

module.exports = UserController;