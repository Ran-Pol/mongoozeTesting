const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    membership: {
        type: String,
        default: "basic",
        required: true,
    },
    date: {
        type: Date,
        default: new Date(),
        required: true,
    }
})

module.exports = model('User', userSchema)