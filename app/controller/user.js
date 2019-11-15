'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async loginPage() {
        const user = this.ctx.user;
        await this.ctx.render('login.tpl');
    }

    async userListPage() {
        const user = this.ctx.user;
        const users = await this.ctx.model.User.find({})
            // console.log(articles);
        await this.ctx.render('userList.tpl', { users, user });
    }


    async logout() {
        const ctx = this.ctx;
        ctx.logout();
        ctx.redirect(ctx.get('referer') || '/');
    }
}

module.exports = UserController;