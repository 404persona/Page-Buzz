const express = require('express')
const Server = express()
require('dotenv').config()
const colors = require('colors')
const DBConnection = require('./DB/DBConnection')

PORT = process.env.PORT || 3000



Server.listen(PORT, ()=>{
    console.log(`Server is tunned on port at ${PORT}`.bgWhite.bold)
})
DBConnection()

Server.get('/', (req,res)=>{
    res.send('Hello World!')
})
