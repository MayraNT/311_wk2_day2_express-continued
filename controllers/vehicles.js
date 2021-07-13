const vehicles = require('../data/vehicles')

// function for GET all vehicles
const list = (req, res) => {
  res.json(vehicles);
}

// function for GET one vehicle by id
const show = (req, res) => {
  const vehicleFound = vehicles.some(vehicle => vehicle._id === parseInt(req.params.id));

   if (vehicleFound) {
     res.json(vehicles.find(vehicle => vehicle._id === parseInt(req.params.id)));
   } else {
     res.status(400).json({ msg: `No vehicles found with the id of ${req.params.id}` });
   }
}

// function to POST new vehicle
const create = (req, res) => {
  req.body = {
    "_id": vehicles.length + 1,
    "year": req.body.year,
    "make": req.body.make,
    "model": req.body.model,
    "postId": 1
  }
  vehicles.push(req.body);
}

module.exports = { list, show, create }