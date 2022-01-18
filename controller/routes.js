const express = require('express')
const router = express.Router()

//route paths
const greetUser = require('./routes/greetUser')
const createUser = require('./routes/createUser')
const login = require('./routes/login')
const getUser = require('./routes/getUser')

//middleware
const auth = require('../middleware/auth')

router.use('/',greetUser)
router.use('/user/new',createUser)
router.use('/login',login)
router.use('/user/info',auth,getUser) //use auth middleware here

module.exports = router