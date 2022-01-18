const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const bcrypt = require('bcrypt')

const validate = function(fname,lname,email,phone,address,password){
    if(fname.trim().length<3) return false;
    if(lname.trim().length<3) return false;
    if(phone.trim().length!==10) return false;
    if(address.trim().length<2) return false;
    if(password.trim().length<2) return false;
    const pattern = /^\S+@\S+\.\S+$/
    return pattern.test(email)
}
router.post('/',async(req,res)=>{
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const phone = req.body.phone
    const address = req.body.address
    const password = req.body.password
    if(!validate(firstname,lastname,email,phone,address,password)) return res.status(400).send('Wrong entry')
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const user = new User({
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            address: address,
            password: hashedPassword
        })
        await user.save()
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(400).send(err)
    }
})

module.exports = router