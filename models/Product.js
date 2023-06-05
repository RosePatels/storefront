const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: { 
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    }
})

const Product = model('product', ProductSchema);
module.exports = Product;