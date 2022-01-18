const express = require('express')
const router = express.Router()
const User = require('../../models/User')


router.get('/',async(req,res)=>{
    const id = req.user._id
    try{
        const user = await User.findById(id).select({_id:0,__v:0,password:0})
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(400).send(err)
    }
})

module.exports  = router