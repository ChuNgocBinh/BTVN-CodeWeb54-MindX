const router = require('express').Router();
const PostController = require('./post.controller')
router.get('/',PostController.getAllPost);
router.get('/:postId',PostController.getPost);
router.post('/',PostController.createPost);
router.put('/:postId',PostController.updatePost);
router.delete('/:postId',PostController.deletePost);
router.put('/:postId/like',PostController.incLikePost);
router.get('/:postId/comments',PostController.getCommentByPost);

module.exports = router;