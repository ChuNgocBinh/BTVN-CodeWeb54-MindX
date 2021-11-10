const router = require('express').Router();
const CommentController = require('./comment.controller')

router.get('/',CommentController.getAllComments)
router.get('/:commentId',CommentController.getComment)
router.post('/',CommentController.createComment)
router.put('/:commentId',CommentController.updateComment)
router.delete('/:commentId',CommentController.deleteComment)

module.exports = router
