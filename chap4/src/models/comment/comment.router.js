const router = require('express').Router();
const CommentController = require('./comment.controller');
const isAuth = require('../../common/middlewares/isAuth');

router.get('/', CommentController.getAllComments)
router.get('/:commentId', CommentController.getComment)
router.post('/', isAuth, CommentController.createComment)
router.put('/:commentId', CommentController.updateComment)
router.delete('/:commentId', CommentController.deleteComment)

module.exports = router
