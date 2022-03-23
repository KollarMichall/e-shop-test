const mongoose = require("mongoose");

const sectionSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    imageUrl: {
        type: String,
        require: true,
    },
    column: {
        type: Number,
        require: true,
    },
    id: {
        type: Number,
        require: true
    }

})

exports.Section = mongoose.model('Section', sectionSchema);