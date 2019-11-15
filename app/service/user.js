const Service = require('egg').Service;
// 该service用来给MongoDB交互
class UserService extends Service {
    async register(user) {
        const newUser = await this.ctx.model.User.insertMany([user], function(err, res) {
            console.log(err, res);
        });
        console.log('register->', newUser);
        return newUser;
    }
}
module.exports = UserService;