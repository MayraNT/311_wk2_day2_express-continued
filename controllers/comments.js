const comments = require('../data/comments')

// function for GET all comments
const list = (req, res) => {
  res.json(comments);
}

// function for GET one comment by id
const show = (req, res) => {
  const commentFound = comments.some(comment => comment._id === parseInt(req.params.id));

   if (commentFound) {
     res.json(comments.find(comment => comment._id === parseInt(req.params.id)));
   } else {
     res.status(400).json({ msg: `No comments found with the id of ${req.params.id}` });
   }
}

// function to POST new comment
const create = (req, res) => {
  req.body = {
    "_id": comments.length + 1,
    "body": req.body.body,
    "postId": 1
  }
  comments.push(req.body);
}

module.exports = { list, show, create }