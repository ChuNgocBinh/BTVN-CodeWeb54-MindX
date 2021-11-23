const jwt = require('jsonwebtoken')

const signIn = (userId) => {
    const indentyData = {
        userId
    }

    const token = jwt.sign(indentyData,process.env.PRIVATE_KEY,{expiresIn: process.env.EXPIRE_TIME})
    return  token
}

const verify = (token)=>{
    
    console.log(jwt.verify(token, process.env.PRIVATE_KEY))
    return jwt.verify(token, process.env.PRIVATE_KEY)
}

module.exports = {
    signIn,
    verify,
}