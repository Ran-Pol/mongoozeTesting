require("../connections")
const User = require("../models/User")


async function userUpdate() {
    const user = await User.updateOne({ username: 'Monsito' }, { password: "EETV" })
}

userUpdate() 