const mongoose = require('mongoose')
const URI='mongodb+srv://JaiSinghal:mongopassword@cluster0.lysxx.mongodb.net/userfy?retryWrites=true&w=majority'

const connect = function(){
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('[connect.js] Connected to mongodb database')
}

module.exports = connect