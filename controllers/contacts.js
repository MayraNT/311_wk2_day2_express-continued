const contacts = require('../data/contacts')

// function for GET all contacts
const list = (req, res) => {
  res.json(contacts);
}

// function for GET one contact by id
const show = (req, res) => {
  const contactFound = contacts.some(comment => comment._id === parseInt(req.params.id));

   if (contactFound) {
     res.json(contacts.find(comment => comment._id === parseInt(req.params.id)));
   } else {
     res.status(400).json({ msg: `No contacts found with the id of ${req.params.id}` });
   }
}

// function to POST new contact
const create = (req, res) => {
  req.body = {
    "_id": contacts.length + 1,
    "name": req.body.name,
    "occupation": req.body.occupation,
    "avatar": req.body.avatar,
    "postId": 1
  }
  contacts.push(req.body);
}

module.exports = { list, show, create }