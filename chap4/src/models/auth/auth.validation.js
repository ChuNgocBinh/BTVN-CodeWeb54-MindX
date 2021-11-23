const Joi = require("joi");

const signUpSchema = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().min(6)
})

const loginSchema = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().min(6)
})

module.exports = {
    signUpSchema,
    loginSchema
}