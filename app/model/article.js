module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // 定义ArticleSchema
    const ArticleSchema = new Schema({
        // _id： MongoDB自己生成
        title: String,
        author: { type: String, default: '姬广超' },
        author_id: String,
        category: { type: String, default: '未分类' },
        img: String,
        digest: String,
        body: String,
        comments: [{ userid: String, body: String, date: Date }],
        // date: { type: Date, default: Date.now },
        hidden: Boolean,
        meta: {
            visits: { type: Number, default: 0 },
            favs: { type: Number, default: 0 }
        }
    }, {
        // 下面设置后将自动添加 createAt 和 updateAt 字段
        timestamps: true
    });
    const Article = mongoose.model("Article", ArticleSchema);


    async function testdata() {
        await Article.deleteMany();
        // await Article.insertMany([{
        //     title: '史上最简明的 Nginx 安装',
        //     author: 'Test',
        //     category: '运维',
        //     img: 'https://www.runoob.com/wp-content/uploads/2016/04/img_mountains.jpg',
        //     digest: '本文讲述了史上最简明的 Nginx 安装和配置',
        //     body: '### N史上最简明的 \n*Nginx 安装和配置*，\n史上最简明的 Nginx 安装和配置N史上最简明的\n### N史上最简明的 \n*Nginx 安装和配置*，\n史上最简明的 Nginx 安装和配置N史上最简明的\n### N史上最简明的 \n*Nginx 安装和配置*，\n史上最简明的 Nginx 安装和配置N史上最简明的\n### N史上最简明的 \n*Nginx 安装和配置*，\n史上最简明的 Nginx 安装和配置N史上最简明的\n### N史上最简明的 \n*Nginx 安装和配置*，\n史上最简明的 Nginx 安装和配置N史上最简明的\n### N史上最简明的 \n*Nginx 安装和配置*，\n史上最简明的 Nginx 安装和配置N史上最简明的\n### N史上最简明的 \n*Nginx 安装和配置*，\n史上最简明的 Nginx 安装和配置N史上最简明的\n### N史上最简明的 \n*Nginx 安装和配置*，\n史上最简明的 Nginx 安装和配置N史上最简明的\n### N史上最简明的 \n*Nginx 安装和配置*，\n史上最简明的 Nginx 安装和配置N史上最简明的\n',
        // }]);
        console.log('插入数据成功');
    }

    // testdata();

    return Article;
}