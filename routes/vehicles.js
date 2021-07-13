const express = require('express')
const router = express.Router()

const vehiclesController = require('../controllers/vehicles');

// GET all vehicles
router.get('/vehicles', vehiclesController.list)

// GET one vehicle by id
router.get('/vehicles/:id', vehiclesController.show)

// POST new vehicle
router.post('/vehicles', vehiclesController.create)

module.exports = router;