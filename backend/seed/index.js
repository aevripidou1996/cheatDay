const mongoose = require("mongoose")
const Product = require("../models/Product")
const products = require("./products.json");

// connect our db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/foodapp', () => console.log('DB is successfully connected'))

mongoose.connection.once("open", async () => {
    await Product.remove();
    await Promise.all(products.map((product) => {
        return Product.create(product)
    }))

    console.log("Finished seeds.")
    process.exit(0);
})
