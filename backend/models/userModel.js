const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required : [true,'Please ad an email'],
        unique: true
    },
    password: {
        type: String,
        required : [true,'Please ad a Password']
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Usermenu', userSchema)