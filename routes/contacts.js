const express = require('express')
const router = express.Router()

const contactsController = require('../controllers/contacts')

// GET all contacts
router.get('/contacts', contactsController.list)

// GET one contact by id
router.get('/contacts/:id', contactsController.show)

// POST new contact
router.post('/contacts', contactsController.create)

module.exports = router;