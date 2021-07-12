const express = require('express')
const router = express.Router()
const vehicles = require('../data/vehicles')

router.get('/vehicles', (req, res) => {
  res.json(vehicles);
})

router.get('/vehicles/:id', (req, res) => {
  res.json(vehicles.find(vehicle => vehicle._id === parseInt(req.params.id)));
})

router.post('/vehicles', (req, res) => {
  req.body = {
    "_id": vehicles.length + 1,
    "year": req.body.year,
    "make": req.body.make,
    "model": req.body.model,
    "postId": 1
  }
  vehicles.push(req.body);
})

module.exports = router;