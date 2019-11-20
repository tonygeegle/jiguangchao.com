module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // 定义UserSchema
    const CommentSchema = new Schema({
        // _id： MongoDB自己生成
        // parent_id 指向文章或者另一个评论
        parent_id: String,
        user_id: String,
        user_name: String,
        user_photo: String,
        body: String,
        hidden: Boolean,
        favs: { type: Number, default: 0 }
    }, {
        // 下面设置后将自动添加 createAt 和 updateAt 字段
        timestamps: true
    });
    const Comment = mongoose.model("Comment", CommentSchema);
    async function testdata() {
        await Comment.deleteMany();
        console.log('删除留言成功');
    }
    // testdata();
    return Comment;
}