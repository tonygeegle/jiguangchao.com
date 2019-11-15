module.exports = () => {
    return async function admin(ctx, next) {
        // console.log('in admin middleware');
        user = ctx.user;
        if (ctx.isAuthenticated() && user && user.grade > 6) {
            await next();
        } else {
            ctx.status = 401;
            ctx.body = `<h2>user=${user.name}, id=${user.id} 没有权限!<h2/>`;
        }
    }
};