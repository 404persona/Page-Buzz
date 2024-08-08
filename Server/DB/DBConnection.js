const mongoose  = require("mongoose")


const DBConnection = async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log(`DabaBase Connecion Established`)
    } catch (error) {
        console.log(`Error connecting DataBase: ${error}`)
    }
}

module.exports = DBConnection