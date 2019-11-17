module.exports = () => {
    return async function auth(ctx, next) {
        // console.log('in auth middleware');
        if (ctx.isAuthenticated()) {
            console.log('in auth', JSON.stringify(ctx.user, null, 2));
            await next();
        } else {
            ctx.redirect('/loginPage');
        }
    }
};