const mongoose = require('mongoose')
const { type } = require('os')

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        tirm: true,
    },
    email: {
        type : String,
        required: true,
        unique : true,
        lowercase: true,
    },
    password: {
        type : String,
        required: true,
    },
},{ timestamps: true })

module.exports = mongoose.model('User',UserSchema)