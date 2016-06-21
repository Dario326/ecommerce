const mongoose = require('mongoose')

const products = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    price: {type: Number, required: true, min: 0}
})


module.exports = mongoose.model("products", products)