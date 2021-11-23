const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    imgURL: {
        type:String,
        required: true
    },
    title: { 
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createBy:{
        type: mongoose.Types.ObjectId,
        required: true
    }
},{
    timestamps:true,
})

const PostModel = mongoose.model('post', PostSchema);

module.exports = PostModel;