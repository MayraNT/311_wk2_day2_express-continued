const express = require("express");
const contacts = require("./data/contacts")
const vehicles = require("./data/vehicles")
const comments = require("./data/comments")
const products = require("./data/products")

const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(express.json());

// Create express routes to get all things
app.get('/contacts', (req, res) => {
  res.json(contacts);
})

app.get('/vehicles', (req, res) => {
  res.json(vehicles);
})

app.get('/comments', (req, res) => {
  res.json(comments);
})

app.get('/products', (req, res) => {
  res.json(products);
})

// Create express routes to get one thing
app.get('/contacts/:id', (req, res) => {
  res.json(contacts.find(contact => contact._id === parseInt(req.params.id)));
})

app.get('/vehicles/:id', (req, res) => {
  res.json(vehicles.find(vehicle => vehicle._id === parseInt(req.params.id)));
})

app.get('/comments/:id', (req, res) => {
  res.json(comments.find(comment => comment._id === parseInt(req.params.id)));
})

app.get('/products/:id', (req, res) => {
  res.json(products.find(product => product._id === parseInt(req.params.id)));
})

// Create express routes to create one thing
app.post('/contacts', (req, res) => {
  req.body = {
    "_id": contacts.length + 1,
    "name": req.body.name,
    "occupation": req.body.occupation,
    "avatar": req.body.avatar,
    "postId": 1
  }
  contacts.push(req.body);
})

app.post('/vehicles', (req, res) => {
  req.body = {
    "_id": vehicles.length + 1,
    "year": req.body.year,
    "make": req.body.make,
    "model": req.body.model,
    "postId": 1
  }
  vehicles.push(req.body);
})

app.post('/comments', (req, res) => {
  req.body = {
    "_id": comments.length + 1,
    "body": req.body.body,
    "postId": 1
  }
  comments.push(req.body);
})

app.post('/products', (req, res) => {
  req.body = {
    "_id": products.length + 1,
    "name": req.body.name,
    "description": req.body.description,
    "postId": 1
  }
  products.push(req.body);
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
