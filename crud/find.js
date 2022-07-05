require("../connections")
const Product = require("../models/product")


async function main() {
    const products = await Product.find({ name: "Keyboard" })
    console.log(products)
}


main()