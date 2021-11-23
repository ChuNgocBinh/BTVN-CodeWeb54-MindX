const tokenProvider = require('../tokenProvider')
const UserModel = require('../../models/auth/auth.model')
const HttpError = require('../httpError')

const isAuth = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        throw new HttpError('not auth', 401)
    }

    const indetityData = tokenProvider.verify(token);

    if (!indetityData.userId) {
        throw new HttpError('invalid token', 402)
    }

    const existedUser = await UserModel.findById(indetityData.userId)

    if (!existedUser) {
        throw new HttpError('not found user', 403)
    }

    req.user = existedUser
    next()

}

module.exports = isAuth
