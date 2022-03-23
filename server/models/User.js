const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    passwordHash: {
        type: String,
        require: true,
    },

})

exports.User = mongoose.model('User', userSchema);