const express = require('express')
const app = express()
const router = require('./controller/routes')
const connect = require('./controller/connect/connect')
const cors = require('cors')

const corsOptions = {
    origin: '*'
}
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors(corsOptions))
app.use(router)
connect()
const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`[index.js] Server running on ${port}`)
})