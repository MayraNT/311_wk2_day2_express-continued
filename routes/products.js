const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products')

// GET all products
router.get('/products', productsController.list);

// GET one product by id
router.get('/products/:id', productsController.show);

// POST new product
router.post('/products', productsController.create)

module.exports = router;