const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const productController = require('./controllers/productController')
const uploadController = require('./controllers/uploadControllers')
const app = express()

// connect our db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, () => console.log('DB is successfully connected'))

app.use(corse())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authController)
app.use('/product', productController)
app.use('upload', uploadController )

// start server
app.listen(process.env.PORT, () => console.log('server has been started successfully'))
