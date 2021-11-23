const CommentModel = require('./comment.model')

const getAllComments = async (req, res) => {
    try {
        const comments = await CommentModel.find()
        res.send({
            success: true,
            data: comments,
        })
    } catch (error) {
        res.status(404).send({
            success: false,
            data: null,
            message: error.message || 'something went wrong',
        })
    }
}

const getComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const comment = await CommentModel.findById(commentId)
        res.send({
            success: true,
            data: comment,
        })
    } catch (error) {
        res.status(404).send({
            success: false,
            data: null,
            message: error.message || 'something went wrong',
        })
    }
}

const createComment = async (req, res) => {
    try {
        const { user } = req;
        const newDataComment = req.body;
        const newComment = await CommentModel.create({
            ...newDataComment,
            createBy: user._id
        })
        res.send({
            success: true,
            data: newComment,
        })
    } catch (error) {
        res.status(404).send({
            success: false,
            data: null,
            message: error.message || 'something went wrong',
        })
    }
}

const updateComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const dataUpdateComment = req.body;
        const updateData = await CommentModel.findByIdAndUpdate(
            { _id: commentId },
            dataUpdateComment,
            { new: true }
        )
        res.send({
            success: true,
            data: updateData,
        })
    } catch (error) {
        res.status(404).send({
            success: false,
            data: null,
            message: error.message || 'something went wrong',
        })
    }
}

const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const deleteComment = await CommentModel.findByIdAndDelete(
            { _id: commentId },
        )
        res.send({
            success: true,
            data: deleteComment,
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
    getAllComments,
    getComment,
    createComment,
    updateComment,
    deleteComment
}