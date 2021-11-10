const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    createBy: String,
    content : {
        type: String,
        required: true,
    }
},{
    timestamps: true,
})

const CommentModel =  mongoose.model('comment', CommentSchema);

module.exports = CommentModel;