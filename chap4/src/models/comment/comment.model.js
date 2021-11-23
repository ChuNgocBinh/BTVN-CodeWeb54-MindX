const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    createBy: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const CommentModel = mongoose.model('comment', CommentSchema);

module.exports = CommentModel;