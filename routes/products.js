const express = require('express')
const router = express.Router()
const products = require('../data/products')

router.get('/products', (req, res) => {
  res.json(products);
})

router.get('/products/:id', (req, res) => {
  res.json(products.find(product => product._id === parseInt(req.params.id)));
})

router.post('/products', (req, res) => {
  req.body = {
    "_id": products.length + 1,
    "name": req.body.name,
    "description": req.body.description,
    "postId": 1
  }
  products.push(req.body);
})

module.exports = router;