require("../connections")
const Product = require("../models/product")
const User = require("../models/User")


async function getUser() {
    const userSearched = await User.findOne({ "username": "Alexis" })
    console.log(userSearched);
}

getUser()