require("./connections")

const User = require('./models/User')

async function createUser() {
    const user = new User({
        username: "Rubito",
        password: "Pussy",
        membership: "Basic",
        date: new Date()

    })
    const savedUser = await user.save()
    console.log(savedUser)
}

createUser()
