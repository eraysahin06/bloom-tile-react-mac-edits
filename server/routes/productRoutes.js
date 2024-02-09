const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// GET ALL PRODUCTS
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ADD A NEW PRODUCT
router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        code: req.body.code,
        image: req.body.image,
        category: req.body.category,
        size: req.body.size,
        finish: req.body.finish,
    });
    
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
