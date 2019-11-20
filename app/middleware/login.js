module.exports = () => {
    return async function login(ctx, next) {
        // console.log('in auth middleware');
        if (ctx.isAuthenticated()) {
            // console.log('in login', JSON.stringify(ctx.user, null, 2));
            await next();
        } else {
            // ctx.status = 401;
            // ctx.body = { code: 401, message: '没有登录！' };
            ctx.redirect('/loginPage');
        }
    }
};