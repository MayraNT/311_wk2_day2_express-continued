const express = require('express')
const router = express.Router()
const comments = require('../data/comments')

router.get('/comments', (req, res) => {
  res.json(comments);
})

router.get('/comments/:id', (req, res) => {
  res.json(comments.find(comment => comment._id === parseInt(req.params.id)));
})

router.post('/comments', (req, res) => {
  req.body = {
    "_id": comments.length + 1,
    "body": req.body.body,
    "postId": 1
  }
  comments.push(req.body);
})

module.exports = router;