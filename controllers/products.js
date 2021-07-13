const products = require('../data/products')

// function for GET all products
const list = (req, res) => {
  res.json(products);
}

// function for GET one product by id
const show = (req, res) => {
  const productFound = products.some(product => product._id === parseInt(req.params.id));

   if (productFound) {
     res.json(products.find(product => product._id === parseInt(req.params.id)));
   } else {
     res.status(400).json({ msg: `No products found with the id of ${req.params.id}` });
   }
}

// function to POST new product
const create = (req, res) => {
  req.body = {
    "_id": products.length + 1,
    "name": req.body.name,
    "description": req.body.description,
    "postId": 1
  }
  products.push(req.body);
}

module.exports = { list, show, create }