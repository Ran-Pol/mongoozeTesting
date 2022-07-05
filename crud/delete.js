require("../connections")
const User = require("../models/User")


async function deleteFunc() {
    const user = await User.deleteMany({})
}

deleteFunc() 