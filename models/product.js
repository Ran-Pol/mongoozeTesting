const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        default: 0,
        required: true
    }
})

module.exports = model('Product', productSchema)