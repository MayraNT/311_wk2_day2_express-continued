const express = require('express')
const router = express.Router()

const commentsController = require('../controllers/comments')

// GET all comments
router.get('/comments', commentsController.list)

// GET one comment by id
router.get('/comments/:id', commentsController.show)

// POST new comment
router.post('/comments', commentsController.create)

module.exports = router;