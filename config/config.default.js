/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1571707057727_4043';

    // add your middleware config here
    config.middleware = [];
    // add config.view  ---TonyGee
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };
    config.mongoose = {
        client: {
            url: 'mongodb://localhost/test',
            options: {},
            // mongoose global plugins, expected a function or an array of function and options
            // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
        },
    };
    config.security = {
        csrf: {
            enable: false,
        },
    };
    config.multipart = {
        mode: 'stream',

        // whitelist: [
        //     '.png',
        // ],
    };

    config.passportGithub = {
        key: '7163a116cdbacc2d56f7',
        secret: '54b3756c98b79025e98ff155ee35599f3a1802ed',
        // nginx做代理的生产环境使用下面配置
        // callbackURL: 'https://www.jiguangchao.com/passport/github/callback',
        proxy: true,
        // dev环境可以不用配置callbackURL,默认为 http://localhost:7001/passport/github/callback
    };
    config.passportWeibo = {
        key: '3815753422',
        secret: '844a737ee2d1ca96b896fdcb0e0a81d3',
        // callbackURL: '/passport/weibo/callback',
        // 微博的callbackURL写在这里不管用，最后在router中添加下面代码解决
        // app.passport.mount('weibo', { callbackURL: 'https://www.jiguangchao.com/passport/weibo/callback' });

    };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
