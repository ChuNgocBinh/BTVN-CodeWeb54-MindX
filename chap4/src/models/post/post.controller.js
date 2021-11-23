const { models } = require('mongoose');
require('express-async-errors');
const PostModel = require('./post.model');
const CommentModel = require('../comment/comment.model');
const UserModel = require('../auth/auth.model');
const jwt = require('jsonwebtoken')
const tokenProvider = require('../../common/tokenProvider');


const getAllPost = async (req, res) => {
    const posts = await PostModel.find();
    res.send({
        success: true,
        data: posts
    })

}

const getPost = async (req, res) => {
    const { postId } = req.params;
    const post = await PostModel.findById(postId);
    res.send({
        success: true,
        data: post
    })

}

const createPost = async (req, res) => {
    const { user } = req;
    const newDataPost = req.body
    const newPost = await PostModel.create({
        ...newDataPost,
        createBy: user._id
    });
    res.send({
        success: true,
        data: newPost
    })

}

const updatePost = async (req, res) => {
    const { postId } = req.params;
    const dataUpdatePost = req.body
    const newDataUpdatePost = await PostModel.findByIdAndUpdate(
        { _id: postId },
        dataUpdatePost,
        { new: true }
    );
    res.send({
        success: true,
        data: newDataUpdatePost
    })

}

const deletePost = async (req, res) => {
    const { postId } = req.params;
    const newDataPost = await PostModel.findOneAndDelete(
        { _id: postId },
    );
    res.send({
        success: true,
        data: newDataPost
    })

}

const incLikePost = async (req, res) => {
    const { postId } = req.params;
    const incDataPost = await PostModel.findOneAndUpdate(
        { _id: postId },
        { $inc: { likeCount: 1 } },
        { new: true }
    );
    res.send({
        success: true,
        data: incDataPost
    })

}

const getCommentByPost = async (req, res) => {
    const { postId } = req.params;
    const commentByPost = await CommentModel.find({ postId });
    res.send({
        success: true,
        data: commentByPost
    })

}

module.exports = {
    getAllPost,
    getPost,
    createPost,
    updatePost,
    deletePost,
    incLikePost,
    getCommentByPost
}

