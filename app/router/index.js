'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    const auth = app.middleware.auth({});
    // 挂载第三方鉴权路由
    app.passport.mount('github');
    app.passport.mount('weibo', { callbackURL: 'https://www.jiguangchao.com/passport/weibo/callback' });
    // 上面的 mount 是语法糖，等价于
    // const github = app.passport.authenticate('github', {});
    // router.get('/passport/github', github);
    // router.get('/passport/github/callback', github);
    router.get('/', controller.home.index);
    router.get('/loginPage', controller.user.loginPage);
    router.get('/articleSnip', controller.article.articleSnipPage);
    router.get('/articlePicSnip', controller.article.articlePicSnipPage);
    router.get('/picSnip', controller.news.newsPicSnip);
    router.get('/news', controller.news.news);
    router.get('/article', controller.article.showArticle);
    // 下面路由需要鉴权
    router.get('/logout', auth, controller.user.logout);
    router.get('/articleList', auth, controller.article.articleListPage);
    router.get('/editArticlePage', auth, controller.article.editAritclePage);
    router.post('/upload', auth, controller.article.create);
};