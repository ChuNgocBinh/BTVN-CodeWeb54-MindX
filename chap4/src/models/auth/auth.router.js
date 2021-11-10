const router = require('express').Router();
const AuthController = require('./auth.controller');

router.post('/register',AuthController.register)
router.get('/signIn',AuthController.signIn)

module.exports = router