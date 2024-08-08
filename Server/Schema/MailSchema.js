const { default: mongoose } = require("mongoose");



const MailSchema = mongoose.Schema({
    fname:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
        minLength: 2,
    },
    lname:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
        minLength: 2,
    }
})