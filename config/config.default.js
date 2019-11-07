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
        // callbackURL: '/passport/github/callback',
        // proxy: false,
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