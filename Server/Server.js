const express = require('express')
const Server = express()
require('dotenv').config()
const colors = require('colors')

PORT = process.env.PORT || 3000

Server.get('/', (req,res)=>{
    res.send('Hello World!')
    console.log('Hello World')
})


Server.listen(PORT, ()=>{
    console.log(`Server is tunned on port at ${PORT}`.bgWhite.bold)
})