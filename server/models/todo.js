const mongoose = require("mongoose")


const ToDo = mongoose.model('ToDo', {
    text:{
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
}) 


module.exports = {ToDo}