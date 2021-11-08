
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    author: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const CommentSchema = new mongoose.Schema({
    content: String,
    author: String,
    // postId tương đương với _id của Post
    postId: mongoose.Types.ObjectId,
}, {
    timestamps: true
});



const PostModel = mongoose.model('Post', PostSchema);
const CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = {
    PostModel,
    CommentModel
}