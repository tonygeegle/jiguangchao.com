const Service = require('egg').Service;
// 该service用来给MongoDB交互
class UserService extends Service {
    async register(user) {
        const newUser = await this.ctx.model.User.insertMany([user], (err, res) => {
            console.log('in UserService register:', err, res);
        });
    }
}
module.exports = UserService;