module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // 定义UserSchema
    const UserSchema = new Schema({
        // _id： MongoDB自己生成
        id: String,
        name: String,
        displayName: String,
        provider: String,
        photo: String,
        grade: { type: Number, default: 0 }
    }, {
        // 下面设置后将自动添加 createAt 和 updateAt 字段
        timestamps: true
    });
    const User = mongoose.model("User", UserSchema);
    //mongo cmd > db.users.update({},{$set:{'grade':9}})
    return User;
}