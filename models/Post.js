const mongoose = require('mongoose')
const { title } = require('process')
const { Schema } = mongoose

const PostSchmea = new Schema({
    title : {
        type: String,
        required : true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Post', PostSchmea)