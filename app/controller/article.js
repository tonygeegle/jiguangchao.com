// app/controller/article.js
const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');
const uuidV1 = require('uuid/v1');

class Articletroller extends Controller {
    constructor(ctx) {
        super(ctx)
    }

    async articleSnipPage() {
        const articles = await this.ctx.service.article.getAll();
        // console.log(articles);
        await this.ctx.render('articleSnip.tpl', { articles });
    }

    async articleListPage() {
        const articles = await this.ctx.service.article.getAll();
        // console.log(articles);
        await this.ctx.render('articleList.tpl', { articles });
    }

    async editAritclePage() {
        const id = this.ctx.query.id;
        if (id) {

            try {
                // 好像就算id在数据库中匹配不到，返回的结果也不为空, 直接throw一个error
                const article = await this.ctx.service.article.get(id);
                await this.ctx.render('editArticle.tpl', { article });
            } catch (error) {
                // 404 not find!
                this.ctx.status = 404;
                this.ctx.body = '<h2>文章不存在，或者已经删除！<h2/>';
            }

        } else {
            await this.ctx.render('editArticle.tpl', {
                article: { _id: '' }
            });
        }

    }

    async showArticle() {
        const id = this.ctx.query.id;
        // 对id进行校验
        try {
            // 好像就算id在数据库中匹配不到，返回的结果也不为空, 直接throw一个error
            const article = await this.ctx.service.article.get(id);
            await this.ctx.render('article.tpl', { article });
        } catch (error) {
            // 404 not find!
            console.log(error);
            this.ctx.status = 404;
            this.ctx.body = '<h2>文章不存在，或者已经删除！<h2/>';
        }
    }

    // async newArticle() {
    //     // 不需要 JSON.parse(req_json)，因为直接获取到json
    //     const req_json = this.ctx.request.body;
    //     console.log(this.ctx.request);

    //     try {
    //         // 校验字段
    //         // ............
    //         await this.ctx.service.article.add(req_json);
    //     } catch (error) {
    //         this.ctx.body = `<h2>error<h2/>`;
    //     }
    //     this.ctx.body = '<h2>文章保存成功！<h2/>';
    // }

    // 上传单个文件
    /**
     * @summary 上传单个文件
     * @description 上传单个文件
     * @router post /upload
     */
    async create() {
        const { ctx } = this
        // articleObj为最后要保存到数据库中的结果
        let articleObj = null;
        // 要通过 ctx.getFileStream 便捷的获取到用户上传的文件，需要满足两个条件：
        // 只支持上传一个文件。
        // 上传文件必须在所有其他的 fields 后面，否则在拿到文件流时可能还获取不到 fields。
        // If there is no request body, null is returned. 
        // If there is no content type, false is returned. 
        // Otherwise, it returns the first type that matches.
        const restype = ctx.is('multipart', 'urlencoded');
        if (restype === 'multipart') {
            // 如果没有文件，会出错！！！出错直接让框架处理吧！
            const stream = await ctx.getFileStream();
            // 所有表单字段都能通过 `stream.fields` 获取到
            const filename = path.basename(stream.filename); // 文件名称
            const extname = path.extname(stream.filename).toLowerCase(); // 文件扩展名称
            const uuid = uuidV1();
            // 组装参数 stream
            const target = path.join(this.config.baseDir, 'app/public/uploads', `${uuid}${extname}`);
            const writeStream = fs.createWriteStream(target);
            // 文件保存
            try {
                await awaitWriteStream(stream.pipe(writeStream));
            } catch (err) {
                // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
                await sendToWormhole(stream);
                throw err;
            }
            // stream.fields 为随同file一块过来的fields，格式为json
            const field_json = stream.fields;
            const file_url = path.join('/public/uploads', `${uuid}${extname}`);
            articleObj = {...field_json, 'filename': filename, "img": file_url };
        } else if (restype === 'urlencoded') {
            // 如果请求type为json，则图片为空，直接保存到数据库。
            articleObj = this.ctx.request.body;
        } else {
            this.ctx.status = 400;
            this.ctx.body = `<h2>bad request!<h2/>`;
            return;
        }

        try {
            // 校验字段
            // ............
            // 直接保存或者更新到数据库
            await this.ctx.service.article.save(articleObj);
        } catch (error) {
            this.ctx.body = `<h2>error<h2/>`;
        }
        // 设置响应内容和响应状态码
        ctx.body = articleObj;
    }
}

module.exports = Articletroller