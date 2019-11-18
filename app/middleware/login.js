module.exports = () => {
    return async function login(ctx, next) {
        // console.log('in auth middleware');
        if (ctx.isAuthenticated()) {
            // console.log('in login', JSON.stringify(ctx.user, null, 2));
            await next();
        } else {
            ctx.redirect('/loginPage');
        }
    }
};