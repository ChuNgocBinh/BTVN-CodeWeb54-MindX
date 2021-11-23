const router = require('express').Router();
const PostController = require('./post.controller')
const isAuth = require('../../common/middlewares/isAuth')



router.get('/', PostController.getAllPost);
router.get('/:postId', PostController.getPost);
router.post('/', isAuth, PostController.createPost);
router.put('/:postId', isAuth, PostController.updatePost);
router.delete('/:postId', isAuth, PostController.deletePost);
router.put('/:postId/like', isAuth, PostController.incLikePost);
router.get('/:postId/comments', PostController.getCommentByPost);

module.exports = router;