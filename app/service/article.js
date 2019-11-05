const Service = require('egg').Service;
// 该service用来给MongoDB交互
class ArticleService extends Service {
    async getAll() {
        // console.log(this.ctx.model);
        // 注意下面的Article开头字母为大写。坑死！！！
        return await this.ctx.model.Article.find({});
    }
    async get(id) {
        if (id) {
            // console.log(typeof(id) + ' :' + id);
            const res = await this.ctx.model.Article.findById(id);
            res.meta.visits += 1;
            await res.save();
            return res;
        } else {
            return await this.ctx.model.Article.findOne();
        }
    }
    async save(articleObj) {
        console.log(articleObj);
        const { _id, ...rest } = articleObj;
        console.log(rest);

        // _id为空则插入操作，否则更新操作
        if (!!_id) { //不为null，不为''
            console.log('updateOne', _id);

            await this.ctx.model.Article.updateOne({ _id }, rest, function(err, res) {
                console.log(err, res);
            });
        } else {
            console.log('insertMany', _id);
            // insertOne不管用，可能只有insertMany
            await this.ctx.model.Article.insertMany([rest], function(err, res) {
                console.log(err, res);
            });
        }

    }
}

module.exports = ArticleService;