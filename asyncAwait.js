require("./connections")
const Product = require("./models/product")


async function createNewProduct(name, des, price) {
    try {
        const product = new Product({
            name: name,
            description: des,
            price: price
        })
        const productSaved = await product.save()
        console.log(productSaved)
    } catch (err) {
        console.log("There was an error creating this product")
        console.log(err)
    }
}

// createNewProduct("Table", "Apple", 500)