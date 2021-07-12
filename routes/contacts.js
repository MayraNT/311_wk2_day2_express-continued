const express = require('express')
const router = express.Router()
const contacts = require('../data/contacts')

router.get('/contacts', (req, res) => {
  res.json(contacts);
})

router.get('/contacts/:id', (req, res) => {
  res.json(contacts.find(contact => contact._id === parseInt(req.params.id)));
})

router.post('/contacts', (req, res) => {
  req.body = {
    "_id": contacts.length + 1,
    "name": req.body.name,
    "occupation": req.body.occupation,
    "avatar": req.body.avatar,
    "postId": 1
  }
  contacts.push(req.body);
})

module.exports = router;