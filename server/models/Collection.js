const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
    womens: {
        id: { type: Number },
        title: { type: String },
        routeName: { type: String },
        items: [
            {
                id: { type: Number },
                name: { type: String },
                imageUrl: { type: String },
                price: { type: Number }
            }]
    },
    mens: {
        id: { type: Number },
        title: { type: String },
        routeName: { type: String },
        items: [
            {
                id: { type: Number },
                name: { type: String },
                imageUrl: { type: String },
                price: { type: Number }
            }]
    },
    hats: {
        id: { type: Number },
        title: { type: String },
        routeName: { type: String },
        items: [
            {
                id: { type: Number },
                name: { type: String },
                imageUrl: { type: String },
                price: { type: Number }
            }]
    },
    sneakers: {
        id: { type: Number },
        title: { type: String },
        routeName: { type: String },
        items: [
            {
                id: { type: Number },
                name: { type: String },
                imageUrl: { type: String },
                price: { type: Number }
            }]
    },
    jackets: {
        id: { type: Number },
        title: { type: String },
        routeName: { type: String },
        items: [
            {
                id: { type: Number },
                name: { type: String },
                imageUrl: { type: String },
                price: { type: Number }
            }]
    },


})

exports.Collection = mongoose.model('Collection', collectionSchema);