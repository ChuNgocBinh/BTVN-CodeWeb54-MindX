const { models } = require('mongoose');
const PostModel = require('./post.model');
const CommentModel = require('../comment/comment.model');

const getAllPost = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.send({
            success: true,
            data: posts
        })
    } catch (error) {
        res.status(404).send({
            success: false,
            data: null,
            message: error.message || 'something went wrong',
        })
    }
}

const getPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await PostModel.findById(postId);
        res.send({
            success: true,
            data: post
        })
    } catch (error) {
        res.status(404).send({
            success: false,
            data: null,
            message: error.message || 'something went wrong',
        })
    }
}

const createPost = async (req, res) => {
    try {
        const newDataPost = req.body
        const newPost = await PostModel.create(newDataPost);
        res.send({
            success: true,
            data: newPost
        })
    } catch (error) {
        res.status(404).send({
            success: false,
            data: null,
            message: error.message || 'something went wrong',
        })
    }
}

const updatePost = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(404).send({
            success: false,
            data: null,
            message: error.message || 'something went wrong',
        })
    }
}

const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const newDataPost = await PostModel.findOneAndDelete(
            { _id: postId },
        );
        res.send({
            success: true,
            data: newDataPost
        })
    } catch (error) {
        res.status(404).send({
            success: false,
            data: null,
            message: error.message || 'something went wrong',
        })
    }
}

const incLikePost = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(404).send({
            success: false,
            data: null,
            message: error.message || 'something went wrong',
        })
    }
}

const getCommentByPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const commentByPost = await CommentModel.find({ postId });
        res.send({
            success: true,
            data: commentByPost
        })
    } catch (error) {
        res.status(404).send({
            success: false,
            data: null,
            message: error.message || 'something went wrong',
        })
    }
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

