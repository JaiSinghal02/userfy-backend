const jwt = require('jsonwebtoken')

function auth(req,res,next){
    const token = req.header('x-auth-token')
    if(!token) return res.status(401).send('Unauthenticated user')
    try{
        const user = jwt.verify(token,'secretPrivateKey_Userfy')
        req.user = user
        next()
    }
    catch(err){
        res.status(401).send('Unauthenticated user')
    }
}

module.exports = auth