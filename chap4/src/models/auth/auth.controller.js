const UserModel = require('./auth.model');
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    try {
        const { userName, password } = req.body;

        if (!userName) {
            throw new Error('Username khong duoc de trong');
        }

        if (password && password.length < 6) {
            throw new Error('password can toi thieu 6 ky tu')
        }

        const user = await UserModel.findOne({ userName })
        if (user) {
            throw new Error('dang ky khong thanh cong');
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt)

        const newUser = await UserModel.create({ userName, password: hashPassword });
        res.send({
            success: true,
            user: {
                _id: newUser._id,
                userName: newUser.userName,
            }
        })

    } catch (error) {
        res.status(404).send({
            success: false,
            data: null,
            message: error.message || 'Something went wrong'
        })
    }
}

const signIn = async (req, res) => {
    try {
        const { userName, password } = req.body;

        if (!userName) {
            throw new Error('Username khong duoc de trong');
        }

        if (password && password.length < 6) {
            throw new Error('password can toi thieu 6 ky tu')
        }

        const user = await UserModel.findOne({ userName })
        if (!user) {
            throw new Error('dang ky khong thanh cong');
        }


        const hashPassword = user.password;
        const mastchedPassWord = bcrypt.compareSync(password, hashPassword);
        if (!mastchedPassWord) {
            throw new Error('dang nahp khong thanh cong')
        }

        res.send({
            success: true,
            user: {
                _id: user._id,
                userName: user.userName,
            }
        })

    } catch (error) {
        res.status(404).send({
            success: false,
            data: null,
            message: error.message || 'Something went wrong'
        })
    }
}

module.exports = {
    register,
    signIn
}