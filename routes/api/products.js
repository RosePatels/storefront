const { Router } = require('express');
const Product = require('../../models/Product');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        if(!products) throw new Error('No products found');
        res.status(200).json(products);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if(!product) throw new Error('Could not find product');
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const product = await newProduct.save();
        if(!product) throw new Error('Unable to save product');
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        if(!product) throw new Error('Unable to update product');
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const removed = await Product.findByIdAndDelete(id);
        if(!removed) throw Error('Unable to delete product');
        res.status(200).json(removed);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;