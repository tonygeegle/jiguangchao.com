'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // 挂载鉴权路由
    app.passport.mount('github');
    // 上面的 mount 是语法糖，等价于
    // const github = app.passport.authenticate('github', {});
    // router.get('/passport/github', github);
    // router.get('/passport/github/callback', github);
    router.get('/', controller.news.news);
    router.get('/articleSnip', controller.article.articleSnipPage);
    router.get('/news', controller.news.news);
    router.get('/article', controller.article.showArticle);
    router.get('/articleList', controller.article.articleListPage);
    router.get('/editArticlePage', controller.article.editAritclePage);
    router.post('/upload', controller.article.create);
    router.get('/picSnip', controller.news.newsPicSnip);
};