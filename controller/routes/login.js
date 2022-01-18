const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../../models/User')
const bcrypt = require('bcrypt')


router.post('/',async(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    try{
        const user = await User.findOne({email:email})
        if(!user) return res.status(400).send('Wrong Credentials')

        const validate = await bcrypt.compare(password,user.password)
        if(!validate) return res.status(400).send('Wrong Credentials')

        const token = jwt.sign({_id: user._id},'secretPrivateKey_Userfy')
        return res.status(200).send({
            token: token
        })
    }
    catch(err){
        return res.status(400).send(err)
    }
})

module.exports = router