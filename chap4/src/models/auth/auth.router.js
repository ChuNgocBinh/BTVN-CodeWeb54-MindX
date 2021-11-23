const router = require('express').Router();
const AuthController = require('./auth.controller');
const ValidateInput = require('../../common/middlewares/validateInput')
const authValid = require('./auth.validation')

router.post('/register', ValidateInput(authValid.signUpSchema, 'body'), AuthController.register)
router.get('/signIn', ValidateInput(authValid.loginSchema, 'body'), AuthController.signIn)

module.exports = router