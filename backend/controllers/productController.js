const productController = require("express").Router()
const Product = require("../models/Product")
const {verifyToken, verifyTokenAdmin} = require('../middlewares/verifyToken')

// get all
productController.get('/', async(req, res) => {
    try {
        console.log('test')
        const products = await Product.find(req.query)
        console.log(req.query, products)
        return res.status(200).json(products)
    } catch (error) {
        console.error(error)
    }
})

// get one
productController.get('/find/:id', async(req, res) => {
   try {
    const productId = req.params.id
    const product = await Product.findById(productId)
    if(!product){
        return res.status(500).json({msg: "No product with such id!"})
    }
    return res.status(200).json(product)
   } catch (error) {
    console.error(error)
   }
})

// create product
productController.post('/', async(req, res) => {
    try {
        const newProduct = await Product.create({...req.body})
        return res.status(201).json(newProduct)
    } catch (error) {
        console.error(error)
    }
})

module.exports = productController