'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // auth中间件验证用户是否登录
    const login = app.middleware.login({});
    // admin中间件验证用户是否登录且具有管理权限
    const admin = app.middleware.admin({});
    // 挂载第三方鉴权路由
    app.passport.mount('github');
    app.passport.mount('weibo', { callbackURL: 'https://www.jiguangchao.com/passport/weibo/callback' });
    // 上面的 mount 是语法糖，等价于
    // const github = app.passport.authenticate('github', {});
    // router.get('/passport/github', github);
    // router.get('/passport/github/callback', github);
    router.get('/', controller.home.index);
    router.get('/about', controller.home.about);
    router.get('/loginPage', controller.user.loginPage);
    router.get('/articleSnip', controller.article.articleSnipPage);
    router.get('/articlePicSnip', controller.article.articlePicSnipPage);
    router.get('/picSnip', controller.news.newsPicSnip);
    router.get('/news', controller.news.news);
    router.get('/article', controller.article.showArticle);
    router.get('/comment', controller.comment.fetch);
    // 下面路由需要login鉴权
    router.get('/logout', login, controller.user.logout);
    router.get('/articleList', login, controller.article.articleListPage);
    router.get('/userList', login, controller.user.userListPage);
    router.get('/editArticlePage', login, controller.article.editAritclePage);
    router.post('/comment', login, controller.comment.create);
    router.put('/comment', login, controller.comment.update);
    // 下面路由需要admin鉴权
    router.post('/upload', admin, controller.article.create);
    router.get('/deleteUser', admin, controller.user.delete);
};