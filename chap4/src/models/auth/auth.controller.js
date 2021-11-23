const UserModel = require('./auth.model');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const tokenProvider = require('../../common/tokenProvider')
const HttpError = require('../../common/httpError')

const register = async (req, res) => {
    const { userName, password } = req.body;

    // if (!userName) {
    //     throw new HttpError('Username khong duoc de trong', 400);
    // }

    // if (password && password.length < 6) {
    //     throw new HttpError('password can toi thieu 6 ky tu', 400)
    // }

    const user = await UserModel.findOne({ userName })
    if (user) {
        throw new HttpError('dang ky khong thanh cong', 400);
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt)

    const newUser = await UserModel.create({ userName, password: hashPassword });

    const token = tokenProvider.signIn(newUser._id);

    res.send({
        success: true,
        user: {
            _id: newUser._id,
            userName: newUser.userName,
            token
        }
    })
}

const signIn = async (req, res) => {
    const { userName, password } = req.body;

    if (!userName) {
        throw new HttpError('Username khong duoc de trong', 404);
    }

    if (password && password.length < 6) {
        throw new HttpError('password can toi thieu 6 ky tu', 405)
    }

    const user = await UserModel.findOne({ userName })
    if (!user) {
        throw new HttpError('dang ky khong thanh cong', 406);
    }


    const hashPassword = user.password;
    const mastchedPassWord = bcrypt.compareSync(password, hashPassword);
    if (!mastchedPassWord) {
        throw new HttpError('dang nahp khong thanh cong', 407)
    }

    //11111
    const token = tokenProvider.signIn(user._id)

    res.send({
        success: true,
        user: {
            _id: user._id,
            userName: user.userName,
            token,
        }
    })


}





module.exports = {
    register,
    signIn
}